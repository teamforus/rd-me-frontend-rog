module.exports = ['ModalRouteProvider', function(ModalRouteProvider) {
    ModalRouteProvider.modal('auth', {
        component: 'modalAuthComponent'
    });

    ModalRouteProvider.modal('shareConfirm', {
        component: 'modalShareConfirmComponent'
    });
}];