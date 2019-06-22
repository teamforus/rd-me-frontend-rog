module.exports = [() => {
    let LinkConfirmationDirective = function($scope, $element, ModalService) {
        $element.bind('click.confirmation_directive', function(e) {
            e.stopPropagation() & e.preventDefault();

            let location = $element.attr('href') ? $element.attr('href') : $scope.link;

            ModalService.open('prompt', {
                title: $scope.title || 'Confirmation',
                body: $scope.description || 'Do you confirm this action?',
                accept: () => document.location = location,
                decline: () => {},
            });
        });
    };

    return {
        scope: {
            'title': '@',
            'description': '@',
            'link': '@',
        },
        restrict: "EA",
        replace: true,
        controller: [
            '$scope',
            '$element',
            'ModalService',
            LinkConfirmationDirective
        ]
    };
}];