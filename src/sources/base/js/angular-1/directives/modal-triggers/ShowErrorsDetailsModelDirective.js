module.exports = [() => {
    let ShowErrorsDetailsModelDirective = function($scope, $element, ModalService) {
        $element.bind('click.error_details', function(e) {
            e.stopPropagation() & e.preventDefault();

            ModalService.open('errorDetails', {
                title: $scope.title || 'Confirmation',
                error: $scope.error || {}
            });
        });
    };

    return {
        scope: {
            'title': '@',
            'error': '=',
        },
        restrict: "EA",
        replace: true,
        controller: [
            '$scope',
            '$element',
            'ModalService',
            ShowErrorsDetailsModelDirective
        ]
    };
}];