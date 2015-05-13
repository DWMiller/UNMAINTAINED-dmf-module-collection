// adds a simply debug mode toggle to the framework
// When activating the framework, set a 'debug' property in the activation settings
// 
// ex...
// var settings = {
//     startup: 'aModule',
//     debug: true/false
// }
// dmf.activate(settings);

dmf.debug = function(on) {
    if (typeof on === 'undefined') {
        dmf.debug = !dmf.debug;
        return;
    }

    dmf.debug = on ? true : false;
}
