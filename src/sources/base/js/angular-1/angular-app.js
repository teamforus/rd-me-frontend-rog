const app = angular.module('bookingApp', []);
const appConfigs = {
    api_url: ENV.api_url
};

app.constant('appConfigs', appConfigs);

// Controllers
app.controller('BaseController', require('./controllers/BaseController'));

// Modal Components
app.component('modalAuthComponent', require('./components/Modals/ModalAuthComponent'));

// Services
app.service('AuthService', require('./services/AuthService'));
app.service('ModalService', require('./services/ModalService'));
app.service('RecordService', require('./services/RecordService'));
app.service('IdentityService', require('./services/IdentityService'));
app.service('RecordService', require('./services/RecordService'));
app.service('CredentialsService', require('./services/CredentialsService'));
app.service('FormBuilderService', require('./services/FormBuilderService'));

// Directives
app.directive('openMediaModal', require('./directives/OpenMediaModal'));
app.directive('linkConfirmation', require('./directives/modal-triggers/LinkConfirmationDirective'));
app.directive('showErrorsDetailsModel', require('./directives/modal-triggers/ShowErrorsDetailsModelDirective'));

app.directive('modalsRoot', require('./directives/modals/ModalsRootDirective'));
app.directive('modalItem', require('./directives/modals/ModalItemDirective'));
app.directive('modalScrollBraker', require('./directives/modals/ModalScrollBrakerDirective'));

// Providers
app.provider('ApiRequest', require('./providers/ApiRequestProvider'));
app.provider('ModalRoute', require('./providers/ModalRouteProvider'));

// Filters
app.filter('currency_format', require('./filters/CurrencyFormatFilter'));
app.filter('to_upper_case', require('./filters/ToUpperCaseFilter'));
app.filter('pretty_json', require('./filters/PrettyJsonFilter'));
app.filter('file_size', require('./filters/FileSizeFilter'));
app.filter('to_fixed', require('./filters/ToFixedFilter'));
app.filter('split', require('./filters/splitFilter'));
app.filter('nl2br', require('./filters/nl2brFilter'));

// Config
app.config(require('./routers/modals'));
app.config(require('./config/api-service'));

app.config(['$compileProvider', function($compileProvider) {
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|javascript):/);
}])

// Bootstrap the app
angular.bootstrap(document.querySelector('html'), ['bookingApp']);

module.exports = app;