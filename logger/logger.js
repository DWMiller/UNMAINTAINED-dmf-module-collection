dmf.registerModule('dmf-logger', function(c) {
    'use strict';

    function log(data) {
        // if (!c.settings.debug) {
        //     return;
        // }

        var messages = data.msgs;
        var severity = data.severity;

        // If message is not an array, make it an array so we can traverse it
        if (!c.fn.is_arr(messages)) {
            messages = [messages];
        }

        for (var i = 0; i < messages.length; i++) {
            console[(severity === 1) ? 'log' : (severity === 2) ? 'warn' : 'error'](JSON.stringify(messages[i], null, 4));
        }
    }

    /***************** General Functions ****************************/

    return {
        listeners: {
            'log': log
        }
    };
});
