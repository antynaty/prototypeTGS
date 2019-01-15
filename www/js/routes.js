angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('sideMenuBar.bienvenido', {
    url: '/dashboard',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bienvenido.html',
        controller: 'bienvenidoCtrl'
      }
    }
  })

  .state('sideMenuBar.estadosFinancieros', {
    url: '/estadosFin',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estadosFinancieros.html',
        controller: 'estadosFinancierosCtrl'
      }
    }
  })

  .state('eSTADOSCOPIA', {
    url: '/page12',
    templateUrl: 'templates/eSTADOSCOPIA.html',
    controller: 'eSTADOSCOPIACtrl'
  })

  .state('sideMenuBar.estadosRestulados', {
    url: '/estRes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estadosRestulados.html',
        controller: 'estadosRestuladosCtrl'
      }
    }
  })

  .state('sideMenuBar.estadoDeFlujosEfectivo', {
    url: '/flujEfec',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estadoDeFlujosEfectivo.html',
        controller: 'estadoDeFlujosEfectivoCtrl'
      }
    }
  })

  .state('sideMenuBar.balance8Columnas', {
    url: '/8col',
    views: {
      'side-menu21': {
        templateUrl: 'templates/balance8Columnas.html',
        controller: 'balance8ColumnasCtrl'
      }
    }
  })

  .state('sideMenuBar.documentaciN', {
    url: '/docs',
    views: {
      'side-menu21': {
        templateUrl: 'templates/documentaciN.html',
        controller: 'documentaciNCtrl'
      }
    }
  })

  .state('sideMenuBar.informaciN', {
    url: '/informacion',
    views: {
      'side-menu21': {
        templateUrl: 'templates/informaciN.html',
        controller: 'informaciNCtrl'
      }
    }
  })

  .state('sideMenuBar', {
    url: '/menuBar',
    templateUrl: 'templates/sideMenuBar.html',
    controller: 'sideMenuBarCtrl'
  })

  .state('sideMenuBar.configuraciN', {
    url: '/filtro',
    views: {
      'side-menu21': {
        templateUrl: 'templates/configuraciN.html',
        controller: 'configuraciNCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabscontroller',
    templateUrl: 'templates/tabsController.html',
    controller: 'tabsControllerCtrl'
  })

$urlRouterProvider.otherwise('/login')


});