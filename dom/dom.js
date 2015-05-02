dmf.dom = {
    find: function(selector, context) {
        var ret = {};

        if (context) {
            ret = context.querySelector(selector);
        } else {
            ret = document.querySelector(selector);
        }
        return ret;
    },
    hide: function(element) {
        dmf.dom.addClass(element, 'hidden');
        dmf.dom.removeClass(element, 'visible');
    },
    show: function(element) {
        dmf.dom.addClass(element, 'visible');
        dmf.dom.removeClass(element, 'hidden');
    },
    listen: function(element, evt, fn) {
        if (element && evt) {
            if (typeof evt === 'function') {
                fn = evt;
                evt = 'click';
            }
            element.addEventListener(evt, fn);
        } else {
            // log wrong arguments
        }
    },
    ignore: function(element, evt, fn) {
        if (element && evt) {
            if (typeof evt === 'function') {
                fn = evt;
                evt = 'click';
            }
            element.removeEventListener(evt, fn);
        } else {
            // log wrong arguments
        }
    },
    // http://jaketrent.com/post/addremove-classes-raw-javascript/
    hasClass: function(ele, cls) {
        return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },

    addClass: function(ele, cls) {
        if (!hasClass(ele, cls)) ele.className += " " + cls;
    },

    removeClass: function(ele, cls) {
        if (hasClass(ele, cls)) {
            var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
            ele.className = ele.className.replace(reg, ' ');
        }
    },
    toggleClass: function(element, toggleClass) {
        if (this.hasClass(element, toggleClass)) {
            this.removeClass(element, toggleClass);
        } else {
            this.addClass(element, toggleClass);
        }
    },
    emptyNode: function(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    },
    append: function(element, toAppend) {
        element.appendChild(toAppend);
    }
};
