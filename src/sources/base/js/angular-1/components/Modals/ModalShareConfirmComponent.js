let ModalShareConfirmComponent = function(
    IdentityService,
    $timeout
) {
    let $ctrl = this;
    let timeout = null;

    console.log('ModalShareConfirmComponent');

    $ctrl.$onInit = () => {
        console.log($ctrl.modal.scope.data);
        $ctrl.checkAccessTokenStatus($ctrl.modal.scope.data);
    };

    $ctrl.checkAccessTokenStatus = (data) => {
        IdentityService.checkAccessToken(data.check_token).then((res) => {
            if (res.data.confirmed) {
                document.location = '/voucher.html';
            }

            timeout = $timeout(function() {
                $ctrl.checkAccessTokenStatus(data);
            }, 2500);
        });
    };

    $ctrl.$onDestroy = () => {

    };
};

module.exports = {
    bindings: {
        close: '=',
        modal: '='
    },
    controller: [
        'IdentityService',
        '$timeout',
        ModalShareConfirmComponent
    ],
    templateUrl: () => {
        return '/assets/tpl/modals/modal-confirm.html';
    }
};