dmf.registerModule('server', function(c, config) {
    'use strict';

    var session;

    function request() {
        //TODO - for GET requests
    }

    function post(data) {
        c.announce('log', {
            severity: 1,
            msgs: ['REQUEST', data]
        })

        if (session) {
            data.session = session;
        }

        var settings = {
            url: config.endpoint,
            timeout: config.timeout,
            data: JSON.stringify(data),
            type: 'POST',
            dataType: 'json',
            crossDomain: true,
        };

        return $.ajax(settings)
            .done(function(result) {

                c.announce('log', {
                    severity: 1,
                    msgs: ['RESPONSE', result]
                })

                for (var obj in result) {
                    c.announce({
                        type: obj,
                        data: result[obj]
                    });
                }

                c.announce({
                    type: 'server-response',
                    data: result
                });
            })
            .fail(function(fail) {
                //console.log("error");
                c.announce({
                    type: 'server-fail',
                    data: fail
                });

            })
            .always(function(result) {
                // console.log("complete");
            });
    }

    function setSession(sessionString) {
        session = sessionString;
    }

    function clearSession() {
        session = null;
    }

    return {
        listeners: {
            'server-request': request,
            'server-post': post,
            'session-set': setSession,
            'session-clear': clearSession
        }
    };

});
