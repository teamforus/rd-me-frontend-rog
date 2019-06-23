let ModalAuthComponent = function(
    $rootScope,
    $timeout,
    ModalService,
    IdentityService,
    CredentialsService
) {
    let $ctrl = this;
    let qrCodeEl = null;
    let qrCode = null;
    let timeout = null;

    $ctrl.$onInit = () => {
        qrCodeEl = document.getElementById('auth_qrcode');
        qrCode = new QRCode(qrCodeEl, {
            correctLevel: QRCode.CorrectLevel.L
        });

        $(document).bind('keydown', (e) => {
            $timeout(function() {
                var key = e.charCode || e.keyCode || 0;

                if (key == 27) {
                    $ctrl.close();
                }
            }, 0);
        });

        $ctrl.showQrForm();
    };

    $ctrl.showQrForm = function() {
        $ctrl.showQrCodeBlock = true;
        $ctrl.showChoose = false;

        $ctrl.requestAuthQrToken();
    };

    $ctrl.applyAccessToken = function(access_token, data) {
        CredentialsService.set(access_token);
        $rootScope.$broadcast('auth:update');
        $ctrl.close();
        
        ModalService.open('shareConfirm', {
            data: data
        });
    };

    $ctrl.checkAccessTokenStatus = (data) => {
        IdentityService.checkAccessToken(data.check_token).then((res) => {
            if (res.data.access_token) {
                $ctrl.applyAccessToken(res.data.access_token, data);
            } else if (res.data.access_token === null) {
                timeout = $timeout(function() {
                    $ctrl.checkAccessTokenStatus(data);
                }, 2500);
            } else {
                document.location.reload();
            }
        });
    };

    $ctrl.requestAuthQrToken = () => {
        IdentityService.makeAuthToken().then((res) => {
            $ctrl.authToken = res.data.auth_token;

            qrCode.makeCode(
                JSON.stringify({
                    type: 'auth_token_share',
                    value: $ctrl.authToken
                })
            );

            qrCodeEl.removeAttribute('title');

            $ctrl.checkAccessTokenStatus(res.data);
        }, console.log);
    };

    $ctrl.$onDestroy = () => {};
};

module.exports = {
    bindings: {
        close: '=',
        modal: '='
    },
    controller: [
        '$rootScope',
        '$timeout',
        'ModalService',
        'IdentityService',
        'CredentialsService',
        ModalAuthComponent
    ],
    templateUrl: () => {
        return '/assets/tpl/modals/modal-auth2.html';
    }
};