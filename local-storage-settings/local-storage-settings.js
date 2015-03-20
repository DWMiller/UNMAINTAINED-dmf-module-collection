dmf.createModule('local-storage-settings', function(c, config) {
    'use strict';

    var properties = {
        id: 'local-storage-settings',
        listeners: {
            'settings-changed': settingsChanged
        }
    };

    /******************************* MODULE INITIALIZATION *******************/

    function initialize() {
        loadSettings();
    }

    /************************** Framework Listeners **************************/

    function settingsChanged() {
        saveSettings();
    }

    /***************** General Functions ****************************/

    function loadSettings() {
        c.data.settings = {};

        var settings = JSON.parse(localStorage.getItem('settings'));
        if (settings) {
            c.data.settings = settings;
        }

        c.notify('settings-loaded');
    }

    function saveSettings() {
        localStorage.setItem('settings', JSON.stringify(c.data.settings));
    }

    return {
        properties: properties,
        initialize: initialize
    };
});
