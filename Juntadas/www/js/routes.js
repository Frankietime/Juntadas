angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.home', {
    url: '/page2',
    views: {
      'tab3': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('tabsController.addJuntada', {
    url: '/page3',
    views: {
      'tab3': {
        templateUrl: 'templates/addJuntadaDataStep.html',
        controller: 'addJuntadaCtrl'
      }
    }
  })

  .state('tabsController.addJuntadaLogicStep', {
    url: '/page11',
    views: {
      'tab3': {
        templateUrl: 'templates/addJuntadaLogicStep.html',
        controller: 'addJuntadaLogicStepCtrl'
      }
    }
  })

  .state('tabsController.contacts', {
    url: '/page4',
    views: {
      'tab2': {
        templateUrl: 'templates/contacts.html',
        controller: 'contactsCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.notifications', {
    url: '/page6',
    views: {
      'tab1': {
        templateUrl: 'templates/notifications.html',
        controller: 'notificationsCtrl'
      }
    }
  })

  .state('tabsController.phaseA', {
    url: '/page7',
    views: {
      'tab3': {
        templateUrl: 'templates/phaseA.html',
        controller: 'phaseACtrl'
      }
    }
  })

  .state('tabsController.votation', {
    url: '/page20',
    views: {
      'tab3': {
        templateUrl: 'templates/votation.html',
        controller: 'votationCtrl'
      }
    }
  })

  .state('tabsController.themeExample', {
    url: '/page18',
    views: {
      'tab3': {
        templateUrl: 'templates/themeExample.html',
        controller: 'themeExampleCtrl'
      }
    }
  })

  .state('tabsController.phaseB', {
    url: '/page12',
    views: {
      'tab3': {
        templateUrl: 'templates/phaseB.html',
        controller: 'phaseBCtrl'
      }
    }
  })

  .state('tabsController.generalScheduleList', {
    url: '/page8',
    views: {
      'tab3': {
        templateUrl: 'templates/generalScheduleList.html',
        controller: 'generalScheduleListCtrl'
      }
    }
  })

  .state('tabsController.generalScheduleDetails', {
    url: '/page14',
    views: {
      'tab3': {
        templateUrl: 'templates/generalScheduleDetails.html',
        controller: 'generalScheduleDetailsCtrl'
      }
    }
  })

  .state('tabsController.specificScheduleList', {
    url: '/page13',
    views: {
      'tab3': {
        templateUrl: 'templates/specificScheduleList.html',
        controller: 'specificScheduleListCtrl'
      }
    }
  })

  .state('specificScheduleListConflict', {
    url: '/page16',
    templateUrl: 'templates/specificScheduleListConflict.html',
    controller: 'specificScheduleListConflictCtrl'
  })

  .state('tabsController.addGuests', {
    url: '/page9',
    views: {
      'tab3': {
        templateUrl: 'templates/addGuests.html',
        controller: 'addGuestsCtrl'
      }
    }
  })

  .state('tabsController.arrangedJuntada', {
    url: '/page10',
    views: {
      'tab3': {
        templateUrl: 'templates/arrangedJuntada.html',
        controller: 'arrangedJuntadaCtrl'
      }
    }
  })

  .state('tabsController.specificScheduleDetails', {
    url: '/page15',
    views: {
      'tab3': {
        templateUrl: 'templates/specificScheduleDetails.html',
        controller: 'specificScheduleDetailsCtrl'
      }
    }
  })

  .state('specificScheduleConflictDetails', {
    url: '/page17',
    templateUrl: 'templates/specificScheduleConflictDetails.html',
    controller: 'specificScheduleConflictDetailsCtrl'
  })

  .state('createGroupA', {
    url: '/page19',
    templateUrl: 'templates/createGroupA.html',
    controller: 'createGroupACtrl'
  })

  .state('createGroupB', {
    url: '/page21',
    templateUrl: 'templates/createGroupB.html',
    controller: 'createGroupBCtrl'
  })

  .state('addImage', {
    url: '/page22',
    templateUrl: 'templates/addImage.html',
    controller: 'addImageCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')


});