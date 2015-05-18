dmf.registerModule('dmf-logger', function(c) {
    'use strict';

    /*************************************************************************** 
     ****************************  Framework Listeners *************************
     **************************************************************************/

    function log(data) {
        var messages = data.msgs;
        var severity = data.severity;

        // If message is not an array, make it an array so we can traverse it
        if (!c.fn.is('[object Array]', messages)) {
            messages = [messages];
        }

        for (var i = 0; i < messages.length; i++) {
            print(messages[i], severity);
        }
    }

    function moduleStarted(data) {
        print(data, 1);
    }

    function moduleStopped(data) {
        print(data, 1);
    }

    /*************************************************************************** 
     **************************** Private Methods ******************************
     **************************************************************************/

    function print(msg, severity) {
            console[(severity === 1) ? 'log' : (severity === 2) ? 'warn' : 'error'](JSON.stringify(msg, null, 4));
    }

    /*************************************************************************** 
     **************************** End Private Methods **************************
     **************************************************************************/

    /* Send setup data back to framework */
    return {
        listeners: {
            'log': log,
            'module-started': moduleStarted,
            'module-stopped': moduleStopped
        }
    };
});
