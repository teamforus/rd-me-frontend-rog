let OpenMediaModal = function(
    $scope,
    $element,
    MediaService,
    ModalService
) {
    $element.bind('click', () => {
        MediaService.read($scope.mediaId).then(res => {
            ModalService.open('mediaEdit', {
                media: res.data.data
            })
        });
    });
}

module.exports = () => {
    return {
        scope: {
            mediaId: '@'
        },
        restrict: 'A',
        require: 'mediaId',
        controller: [
            '$scope',
            '$element',
            'MediaService',
            'ModalService',
            OpenMediaModal
        ]
    };
};