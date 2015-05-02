dmf.dom = {
    find: function(selector, context) {
        var ret;

        if (context) {
            ret = context.querySelector(selector);
        } else {
            ret = document.querySelector(selector);
        }
        return ret;
    },
    hide: function(element) {
        this.addClass(element, 'hidden');
        this.removeClass(element, 'visible');
    },
    show: function(element) {
        this.addClass(element, 'visible');
        this.removeClass(element, 'hidden');
    },
    listen: function(element, evt, fn) {
        if (typeof evt === 'function') {
            fn = evt;
            evt = 'click';
        }
        element.addEventListener(evt, fn);
    },
    ignore: function(element, evt, fn) {
        if (typeof evt === 'function') {
            fn = evt;
            evt = 'click';
        }
        element.removeEventListener(evt, fn);
    },
    // http://jaketrent.com/post/addremove-classes-raw-javascript/
    hasClass: function(ele, cls) {
        return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
    },

    addClass: function(ele, cls) {
        if (!this.hasClass(ele, cls)) ele.className += " " + cls;
    },
    removeClass: function(ele, cls) {
        if (this.hasClass(ele, cls)) {
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
