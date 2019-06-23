let BaseController = function(
    $rootScope,
    $scope,
    $q,
    ModalService,
    RecordService,
    AuthService,
    appConfigs
) {
    $rootScope.loadAuthUser = function() {
        let deferred = $q.defer();

        AuthService.identity().then((res) => {
            let auth_user = res.data;
            let count = 0;

            RecordService.list().then((res) => {
                auth_user.records = res.data;
                auth_user.primary_email = res.data.filter((record) => {
                    return record.key == 'primary_email';
                })[0].value;

                ++count == 2 ? null : deferred.resolve();
            }, deferred.reject);

            $rootScope.auth_user = auth_user;
        }, deferred.reject);

        return deferred.promise;
    };

    $rootScope.appConfigs = appConfigs;
    $scope.appConfigs = appConfigs;

    $scope.openAuthPopup = () => {
        ModalService.open('auth');
    };

    $rootScope.$on('auth:update', (event) => {
        $rootScope.loadAuthUser();
    });

    $rootScope.signOut = () => {
        AuthService.signOut();
        $rootScope.auth_user = false;
    };

    if (AuthService.hasCredentials()) {
        $rootScope.loadAuthUser();
    }
};

module.exports = [
    '$rootScope',
    '$scope',
    '$q',
    'ModalService',
    'RecordService',
    'AuthService',
    'appConfigs',
    BaseController
];