!function () {
    "use strict";
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
        }
    }
    function e(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
            t
    }
    function n(t, e) {
        if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function")
    }
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value" in i && (i.writable = !0),
                Object.defineProperty(t, i.key, i)
        }
    }
    function r(t, e, n) {
        return e && i(t.prototype, e),
            n && i(t, n),
            t
    }
    function a(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n,
            t
    }
    function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }
            ))),
                n.push.apply(n, i)
        }
        return n
    }
    function s(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? o(Object(n), !0).forEach((function (e) {
                a(t, e, n[e])
            }
            )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function (e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }
            ))
        }
        return t
    }
    function l(t, e) {
        if ("function" != typeof e && null !== e)
            throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
            constructor: {
                value: t,
                writable: !0,
                configurable: !0
            }
        }),
            e && u(t, e)
    }
    function c(t) {
        return (c = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function u(t, e) {
        return (u = Object.setPrototypeOf || function (t, e) {
            return t.__proto__ = e,
                t
        }
        )(t, e)
    }
    function h(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function d(t, e) {
        return !e || "object" != typeof e && "function" != typeof e ? h(t) : e
    }
    function p(t) {
        var e = function () {
            if ("undefined" == typeof Reflect || !Reflect.construct)
                return !1;
            if (Reflect.construct.sham)
                return !1;
            if ("function" == typeof Proxy)
                return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function () { }
                ))),
                    !0
            } catch (t) {
                return !1
            }
        }();
        return function () {
            var n, i = c(t);
            if (e) {
                var r = c(this).constructor;
                n = Reflect.construct(i, arguments, r)
            } else
                n = i.apply(this, arguments);
            return d(this, n)
        }
    }
    function f(t, e, n) {
        return (f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
            var i = function (t, e) {
                for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t));)
                    ;
                return t
            }(t, e);
            if (i) {
                var r = Object.getOwnPropertyDescriptor(i, e);
                return r.get ? r.get.call(n) : r.value
            }
        }
        )(t, e, n || t)
    }
    function m(t, e) {
        return function (t) {
            if (Array.isArray(t))
                return t
        }(t) || function (t, e) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(t)))
                return;
            var n = []
                , i = !0
                , r = !1
                , a = void 0;
            try {
                for (var o, s = t[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value),
                    !e || n.length !== e); i = !0)
                    ;
            } catch (t) {
                r = !0,
                    a = t
            } finally {
                try {
                    i || null == s.return || s.return()
                } finally {
                    if (r)
                        throw a
                }
            }
            return n
        }(t, e) || v(t, e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function g(t) {
        return function (t) {
            if (Array.isArray(t))
                return _(t)
        }(t) || function (t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(t))
                return Array.from(t)
        }(t) || v(t) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function v(t, e) {
        if (t) {
            if ("string" == typeof t)
                return _(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _(t, e) : void 0
        }
    }
    function _(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, i = new Array(e); n < e; n++)
            i[n] = t[n];
        return i
    }
    var x = {
        el: document,
        name: "scroll",
        offset: [0, 0],
        repeat: !1,
        smooth: !1,
        initPosition: {
            x: 0,
            y: 0
        },
        direction: "vertical",
        gestureDirection: "vertical",
        reloadOnContextChange: !1,
        lerp: .1,
        class: "is-inview",
        scrollbarContainer: !1,
        scrollbarClass: "c-scrollbar",
        scrollingClass: "has-scroll-scrolling",
        draggingClass: "has-scroll-dragging",
        smoothClass: "has-scroll-smooth",
        initClass: "has-scroll-init",
        getSpeed: !1,
        getDirection: !1,
        scrollFromAnywhere: !1,
        multiplier: 1,
        firefoxMultiplier: 50,
        touchMultiplier: 2,
        resetNativeScroll: !0,
        tablet: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical",
            breakpoint: 1024
        },
        smartphone: {
            smooth: !1,
            direction: "vertical",
            gestureDirection: "vertical"
        }
    }
        , y = function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                n(this, t),
                    Object.assign(this, x, e),
                    this.smartphone = x.smartphone,
                    e.smartphone && Object.assign(this.smartphone, e.smartphone),
                    this.tablet = x.tablet,
                    e.tablet && Object.assign(this.tablet, e.tablet),
                    this.namespace = "locomotive",
                    this.html = document.documentElement,
                    this.windowHeight = window.innerHeight,
                    this.windowWidth = window.innerWidth,
                    this.windowMiddle = {
                        x: this.windowWidth / 2,
                        y: this.windowHeight / 2
                    },
                    this.els = {},
                    this.currentElements = {},
                    this.listeners = {},
                    this.hasScrollTicking = !1,
                    this.hasCallEventSet = !1,
                    this.checkScroll = this.checkScroll.bind(this),
                    this.checkResize = this.checkResize.bind(this),
                    this.checkEvent = this.checkEvent.bind(this),
                    this.instance = {
                        scroll: {
                            x: 0,
                            y: 0
                        },
                        limit: {
                            x: this.html.offsetWidth,
                            y: this.html.offsetHeight
                        },
                        currentElements: this.currentElements
                    },
                    this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop",
                    this.isMobile && (this.direction = this[this.context].direction),
                    "horizontal" === this.direction ? this.directionAxis = "x" : this.directionAxis = "y",
                    this.getDirection && (this.instance.direction = null),
                    this.getDirection && (this.instance.speed = 0),
                    this.html.classList.add(this.initClass),
                    window.addEventListener("resize", this.checkResize, !1)
            }
            return r(t, [{
                key: "init",
                value: function () {
                    this.initEvents()
                }
            }, {
                key: "checkScroll",
                value: function () {
                    this.dispatchScroll()
                }
            }, {
                key: "checkResize",
                value: function () {
                    var t = this;
                    this.resizeTick || (this.resizeTick = !0,
                        requestAnimationFrame((function () {
                            t.resize(),
                                t.resizeTick = !1
                        }
                        )))
                }
            }, {
                key: "resize",
                value: function () { }
            }, {
                key: "checkContext",
                value: function () {
                    if (this.reloadOnContextChange) {
                        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint,
                            this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                        var t = this.context;
                        if (this.isMobile ? this.isTablet ? this.context = "tablet" : this.context = "smartphone" : this.context = "desktop",
                            t != this.context)
                            ("desktop" == t ? this.smooth : this[t].smooth) != ("desktop" == this.context ? this.smooth : this[this.context].smooth) && window.location.reload()
                    }
                }
            }, {
                key: "initEvents",
                value: function () {
                    var t = this;
                    this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]")),
                        this.setScrollTo = this.setScrollTo.bind(this),
                        this.scrollToEls.forEach((function (e) {
                            e.addEventListener("click", t.setScrollTo, !1)
                        }
                        ))
                }
            }, {
                key: "setScrollTo",
                value: function (t) {
                    t.preventDefault(),
                        this.scrollTo(t.currentTarget.getAttribute("data-".concat(this.name, "-href")) || t.currentTarget.getAttribute("href"), {
                            offset: t.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                        })
                }
            }, {
                key: "addElements",
                value: function () { }
            }, {
                key: "detectElements",
                value: function (t) {
                    var e = this
                        , n = this.instance.scroll.y
                        , i = n + this.windowHeight
                        , r = this.instance.scroll.x
                        , a = r + this.windowWidth;
                    Object.entries(this.els).forEach((function (o) {
                        var s = m(o, 2)
                            , l = s[0]
                            , c = s[1];
                        if (!c || c.inView && !t || ("horizontal" === e.direction ? a >= c.left && r < c.right && e.setInView(c, l) : i >= c.top && n < c.bottom && e.setInView(c, l)),
                            c && c.inView)
                            if ("horizontal" === e.direction) {
                                var u = c.right - c.left;
                                c.progress = (e.instance.scroll.x - (c.left - e.windowWidth)) / (u + e.windowWidth),
                                    (a < c.left || r > c.right) && e.setOutOfView(c, l)
                            } else {
                                var h = c.bottom - c.top;
                                c.progress = (e.instance.scroll.y - (c.top - e.windowHeight)) / (h + e.windowHeight),
                                    (i < c.top || n > c.bottom) && e.setOutOfView(c, l)
                            }
                    }
                    )),
                        this.hasScrollTicking = !1
                }
            }, {
                key: "setInView",
                value: function (t, e) {
                    this.els[e].inView = !0,
                        t.el.classList.add(t.class),
                        this.currentElements[e] = t,
                        t.call && this.hasCallEventSet && (this.dispatchCall(t, "enter"),
                            t.repeat || (this.els[e].call = !1))
                }
            }, {
                key: "setOutOfView",
                value: function (t, e) {
                    var n = this;
                    this.els[e].inView = !1,
                        Object.keys(this.currentElements).forEach((function (t) {
                            t === e && delete n.currentElements[t]
                        }
                        )),
                        t.call && this.hasCallEventSet && this.dispatchCall(t, "exit"),
                        t.repeat && t.el.classList.remove(t.class)
                }
            }, {
                key: "dispatchCall",
                value: function (t, e) {
                    this.callWay = e,
                        this.callValue = t.call.split(",").map((function (t) {
                            return t.trim()
                        }
                        )),
                        this.callObj = t,
                        1 == this.callValue.length && (this.callValue = this.callValue[0]);
                    var n = new Event(this.namespace + "call");
                    this.el.dispatchEvent(n)
                }
            }, {
                key: "dispatchScroll",
                value: function () {
                    var t = new Event(this.namespace + "scroll");
                    this.el.dispatchEvent(t)
                }
            }, {
                key: "setEvents",
                value: function (t, e) {
                    this.listeners[t] || (this.listeners[t] = []);
                    var n = this.listeners[t];
                    n.push(e),
                        1 === n.length && this.el.addEventListener(this.namespace + t, this.checkEvent, !1),
                        "call" === t && (this.hasCallEventSet = !0,
                            this.detectElements(!0))
                }
            }, {
                key: "unsetEvents",
                value: function (t, e) {
                    if (this.listeners[t]) {
                        var n = this.listeners[t]
                            , i = n.indexOf(e);
                        i < 0 || (n.splice(i, 1),
                            0 === n.index && this.el.removeEventListener(this.namespace + t, this.checkEvent, !1))
                    }
                }
            }, {
                key: "checkEvent",
                value: function (t) {
                    var e = this
                        , n = t.type.replace(this.namespace, "")
                        , i = this.listeners[n];
                    i && 0 !== i.length && i.forEach((function (t) {
                        switch (n) {
                            case "scroll":
                                return t(e.instance);
                            case "call":
                                return t(e.callValue, e.callWay, e.callObj);
                            default:
                                return t()
                        }
                    }
                    ))
                }
            }, {
                key: "startScroll",
                value: function () { }
            }, {
                key: "stopScroll",
                value: function () { }
            }, {
                key: "setScroll",
                value: function (t, e) {
                    this.instance.scroll = {
                        x: 0,
                        y: 0
                    }
                }
            }, {
                key: "destroy",
                value: function () {
                    var t = this;
                    window.removeEventListener("resize", this.checkResize, !1),
                        Object.keys(this.listeners).forEach((function (e) {
                            t.el.removeEventListener(t.namespace + e, t.checkEvent, !1)
                        }
                        )),
                        this.listeners = {},
                        this.scrollToEls.forEach((function (e) {
                            e.removeEventListener("click", t.setScrollTo, !1)
                        }
                        )),
                        this.html.classList.remove(this.initClass)
                }
            }]),
                t
        }()
        , b = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    function w(t, e) {
        return t(e = {
            exports: {}
        }, e.exports),
            e.exports
    }
    var M = w((function (t, e) {
        t.exports = {
            polyfill: function () {
                var t = window
                    , e = document;
                if (!("scrollBehavior" in e.documentElement.style) || !0 === t.__forceSmoothScrollPolyfill__) {
                    var n, i = t.HTMLElement || t.Element, r = {
                        scroll: t.scroll || t.scrollTo,
                        scrollBy: t.scrollBy,
                        elementScroll: i.prototype.scroll || s,
                        scrollIntoView: i.prototype.scrollIntoView
                    }, a = t.performance && t.performance.now ? t.performance.now.bind(t.performance) : Date.now, o = (n = t.navigator.userAgent,
                        new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n) ? 1 : 0);
                    t.scroll = t.scrollTo = function () {
                        void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? f.call(t, e.body, void 0 !== arguments[0].left ? ~~arguments[0].left : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : t.scrollY || t.pageYOffset) : r.scroll.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : t.scrollX || t.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : t.scrollY || t.pageYOffset))
                    }
                        ,
                        t.scrollBy = function () {
                            void 0 !== arguments[0] && (l(arguments[0]) ? r.scrollBy.call(t, void 0 !== arguments[0].left ? arguments[0].left : "object" != typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : f.call(t, e.body, ~~arguments[0].left + (t.scrollX || t.pageXOffset), ~~arguments[0].top + (t.scrollY || t.pageYOffset)))
                        }
                        ,
                        i.prototype.scroll = i.prototype.scrollTo = function () {
                            if (void 0 !== arguments[0])
                                if (!0 !== l(arguments[0])) {
                                    var t = arguments[0].left
                                        , e = arguments[0].top;
                                    f.call(this, this, void 0 === t ? this.scrollLeft : ~~t, void 0 === e ? this.scrollTop : ~~e)
                                } else {
                                    if ("number" == typeof arguments[0] && void 0 === arguments[1])
                                        throw new SyntaxError("Value could not be converted");
                                    r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" != typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                }
                        }
                        ,
                        i.prototype.scrollBy = function () {
                            void 0 !== arguments[0] && (!0 !== l(arguments[0]) ? this.scroll({
                                left: ~~arguments[0].left + this.scrollLeft,
                                top: ~~arguments[0].top + this.scrollTop,
                                behavior: arguments[0].behavior
                            }) : r.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                        }
                        ,
                        i.prototype.scrollIntoView = function () {
                            if (!0 !== l(arguments[0])) {
                                var n = d(this)
                                    , i = n.getBoundingClientRect()
                                    , a = this.getBoundingClientRect();
                                n !== e.body ? (f.call(this, n, n.scrollLeft + a.left - i.left, n.scrollTop + a.top - i.top),
                                    "fixed" !== t.getComputedStyle(n).position && t.scrollBy({
                                        left: i.left,
                                        top: i.top,
                                        behavior: "smooth"
                                    })) : t.scrollBy({
                                        left: a.left,
                                        top: a.top,
                                        behavior: "smooth"
                                    })
                            } else
                                r.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                        }
                }
                function s(t, e) {
                    this.scrollLeft = t,
                        this.scrollTop = e
                }
                function l(t) {
                    if (null === t || "object" != typeof t || void 0 === t.behavior || "auto" === t.behavior || "instant" === t.behavior)
                        return !0;
                    if ("object" == typeof t && "smooth" === t.behavior)
                        return !1;
                    throw new TypeError("behavior member of ScrollOptions " + t.behavior + " is not a valid value for enumeration ScrollBehavior.")
                }
                function c(t, e) {
                    return "Y" === e ? t.clientHeight + o < t.scrollHeight : "X" === e ? t.clientWidth + o < t.scrollWidth : void 0
                }
                function u(e, n) {
                    var i = t.getComputedStyle(e, null)["overflow" + n];
                    return "auto" === i || "scroll" === i
                }
                function h(t) {
                    var e = c(t, "Y") && u(t, "Y")
                        , n = c(t, "X") && u(t, "X");
                    return e || n
                }
                function d(t) {
                    for (; t !== e.body && !1 === h(t);)
                        t = t.parentNode || t.host;
                    return t
                }
                function p(e) {
                    var n, i, r, o, s = (a() - e.startTime) / 468;
                    o = s = s > 1 ? 1 : s,
                        n = .5 * (1 - Math.cos(Math.PI * o)),
                        i = e.startX + (e.x - e.startX) * n,
                        r = e.startY + (e.y - e.startY) * n,
                        e.method.call(e.scrollable, i, r),
                        i === e.x && r === e.y || t.requestAnimationFrame(p.bind(t, e))
                }
                function f(n, i, o) {
                    var l, c, u, h, d = a();
                    n === e.body ? (l = t,
                        c = t.scrollX || t.pageXOffset,
                        u = t.scrollY || t.pageYOffset,
                        h = r.scroll) : (l = n,
                            c = n.scrollLeft,
                            u = n.scrollTop,
                            h = s),
                        p({
                            scrollable: l,
                            method: h,
                            startTime: d,
                            startX: c,
                            startY: u,
                            x: i,
                            y: o
                        })
                }
            }
        }
    }
    ));
    M.polyfill;
    var D = function (t) {
        l(i, t);
        var e = p(i);
        function i() {
            var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return n(this, i),
                (t = e.call(this, r)).resetNativeScroll && (history.scrollRestoration && (history.scrollRestoration = "manual"),
                    window.scrollTo(0, 0)),
                window.addEventListener("scroll", t.checkScroll, !1),
                void 0 === window.smoothscrollPolyfill && (window.smoothscrollPolyfill = M,
                    window.smoothscrollPolyfill.polyfill()),
                t
        }
        return r(i, [{
            key: "init",
            value: function () {
                this.instance.scroll.y = window.pageYOffset,
                    this.addElements(),
                    this.detectElements(),
                    f(c(i.prototype), "init", this).call(this)
            }
        }, {
            key: "checkScroll",
            value: function () {
                var t = this;
                f(c(i.prototype), "checkScroll", this).call(this),
                    this.getDirection && this.addDirection(),
                    this.getSpeed && (this.addSpeed(),
                        this.speedTs = Date.now()),
                    this.instance.scroll.y = window.pageYOffset,
                    Object.entries(this.els).length && (this.hasScrollTicking || (requestAnimationFrame((function () {
                        t.detectElements()
                    }
                    )),
                        this.hasScrollTicking = !0))
            }
        }, {
            key: "addDirection",
            value: function () {
                window.pageYOffset > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : window.pageYOffset < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up")
            }
        }, {
            key: "addSpeed",
            value: function () {
                window.pageYOffset != this.instance.scroll.y ? this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
            }
        }, {
            key: "resize",
            value: function () {
                Object.entries(this.els).length && (this.windowHeight = window.innerHeight,
                    this.updateElements())
            }
        }, {
            key: "addElements",
            value: function () {
                var t = this;
                this.els = {},
                    this.el.querySelectorAll("[data-" + this.name + "]").forEach((function (e, n) {
                        e.getBoundingClientRect();
                        var i, r, a, o = e.dataset[t.name + "Class"] || t.class, s = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : n, l = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset, c = e.dataset[t.name + "Repeat"], u = e.dataset[t.name + "Call"], h = e.dataset[t.name + "Target"], d = (a = void 0 !== h ? document.querySelector("".concat(h)) : e).getBoundingClientRect();
                        i = d.top + t.instance.scroll.y,
                            r = d.left + t.instance.scroll.x;
                        var p = i + a.offsetHeight
                            , f = r + a.offsetWidth;
                        c = "false" != c && (null != c || t.repeat);
                        var m = t.getRelativeOffset(l)
                            , g = {
                                el: e,
                                targetEl: a,
                                id: s,
                                class: o,
                                top: i += m[0],
                                bottom: p -= m[1],
                                left: r,
                                right: f,
                                offset: l,
                                progress: 0,
                                repeat: c,
                                inView: !1,
                                call: u
                            };
                        t.els[s] = g,
                            e.classList.contains(o) && t.setInView(t.els[s], s)
                    }
                    ))
            }
        }, {
            key: "updateElements",
            value: function () {
                var t = this;
                Object.entries(this.els).forEach((function (e) {
                    var n = m(e, 2)
                        , i = n[0]
                        , r = n[1]
                        , a = r.targetEl.getBoundingClientRect().top + t.instance.scroll.y
                        , o = a + r.targetEl.offsetHeight
                        , s = t.getRelativeOffset(r.offset);
                    t.els[i].top = a + s[0],
                        t.els[i].bottom = o - s[1]
                }
                )),
                    this.hasScrollTicking = !1
            }
        }, {
            key: "getRelativeOffset",
            value: function (t) {
                var e = [0, 0];
                if (t)
                    for (var n = 0; n < t.length; n++)
                        "string" == typeof t[n] ? t[n].includes("%") ? e[n] = parseInt(t[n].replace("%", "") * this.windowHeight / 100) : e[n] = parseInt(t[n]) : e[n] = t[n];
                return e
            }
        }, {
            key: "scrollTo",
            value: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , n = parseInt(e.offset) || 0
                    , i = !!e.callback && e.callback;
                if ("string" == typeof t) {
                    if ("top" === t)
                        t = this.html;
                    else if ("bottom" === t)
                        t = this.html.offsetHeight - window.innerHeight;
                    else if (!(t = document.querySelector(t)))
                        return
                } else if ("number" == typeof t)
                    t = parseInt(t);
                else if (!t || !t.tagName)
                    return void console.warn("`target` parameter is not valid");
                n = "number" != typeof t ? t.getBoundingClientRect().top + n + this.instance.scroll.y : t + n;
                var r = function () {
                    return parseInt(window.pageYOffset) === parseInt(n)
                };
                if (i) {
                    if (r())
                        return void i();
                    var a = function t() {
                        r() && (window.removeEventListener("scroll", t),
                            i())
                    };
                    window.addEventListener("scroll", a)
                }
                window.scrollTo({
                    top: n,
                    behavior: "smooth"
                })
            }
        }, {
            key: "update",
            value: function () {
                this.addElements(),
                    this.detectElements()
            }
        }, {
            key: "destroy",
            value: function () {
                f(c(i.prototype), "destroy", this).call(this),
                    window.removeEventListener("scroll", this.checkScroll, !1)
            }
        }]),
            i
    }(y)
        , E = Object.getOwnPropertySymbols
        , T = Object.prototype.hasOwnProperty
        , S = Object.prototype.propertyIsEnumerable;
    /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
    function C(t) {
        if (null == t)
            throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(t)
    }
    var L = function () {
        try {
            if (!Object.assign)
                return !1;
            var t = new String("abc");
            if (t[5] = "de",
                "5" === Object.getOwnPropertyNames(t)[0])
                return !1;
            for (var e = {}, n = 0; n < 10; n++)
                e["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(e).map((function (t) {
                return e[t]
            }
            )).join(""))
                return !1;
            var i = {};
            return "abcdefghijklmnopqrst".split("").forEach((function (t) {
                i[t] = t
            }
            )),
                "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
        } catch (t) {
            return !1
        }
    }() ? Object.assign : function (t, e) {
        for (var n, i, r = C(t), a = 1; a < arguments.length; a++) {
            for (var o in n = Object(arguments[a]))
                T.call(n, o) && (r[o] = n[o]);
            if (E) {
                i = E(n);
                for (var s = 0; s < i.length; s++)
                    S.call(n, i[s]) && (r[i[s]] = n[i[s]])
            }
        }
        return r
    }
        ;
    function A() { }
    A.prototype = {
        on: function (t, e, n) {
            var i = this.e || (this.e = {});
            return (i[t] || (i[t] = [])).push({
                fn: e,
                ctx: n
            }),
                this
        },
        once: function (t, e, n) {
            var i = this;
            function r() {
                i.off(t, r),
                    e.apply(n, arguments)
            }
            return r._ = e,
                this.on(t, r, n)
        },
        emit: function (t) {
            for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), i = 0, r = n.length; i < r; i++)
                n[i].fn.apply(n[i].ctx, e);
            return this
        },
        off: function (t, e) {
            var n = this.e || (this.e = {})
                , i = n[t]
                , r = [];
            if (i && e)
                for (var a = 0, o = i.length; a < o; a++)
                    i[a].fn !== e && i[a].fn._ !== e && r.push(i[a]);
            return r.length ? n[t] = r : delete n[t],
                this
        }
    };
    var R = A
        , P = w((function (t, e) {
            (function () {
                (null !== e ? e : this).Lethargy = function () {
                    function t(t, e, n, i) {
                        this.stability = null != t ? Math.abs(t) : 8,
                            this.sensitivity = null != e ? 1 + Math.abs(e) : 100,
                            this.tolerance = null != n ? 1 + Math.abs(n) : 1.1,
                            this.delay = null != i ? i : 150,
                            this.lastUpDeltas = function () {
                                var t, e, n;
                                for (n = [],
                                    t = 1,
                                    e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                                    n.push(null);
                                return n
                            }
                                .call(this),
                            this.lastDownDeltas = function () {
                                var t, e, n;
                                for (n = [],
                                    t = 1,
                                    e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                                    n.push(null);
                                return n
                            }
                                .call(this),
                            this.deltasTimestamp = function () {
                                var t, e, n;
                                for (n = [],
                                    t = 1,
                                    e = 2 * this.stability; 1 <= e ? t <= e : t >= e; 1 <= e ? t++ : t--)
                                    n.push(null);
                                return n
                            }
                                .call(this)
                    }
                    return t.prototype.check = function (t) {
                        var e;
                        return null != (t = t.originalEvent || t).wheelDelta ? e = t.wheelDelta : null != t.deltaY ? e = -40 * t.deltaY : null == t.detail && 0 !== t.detail || (e = -40 * t.detail),
                            this.deltasTimestamp.push(Date.now()),
                            this.deltasTimestamp.shift(),
                            e > 0 ? (this.lastUpDeltas.push(e),
                                this.lastUpDeltas.shift(),
                                this.isInertia(1)) : (this.lastDownDeltas.push(e),
                                    this.lastDownDeltas.shift(),
                                    this.isInertia(-1))
                    }
                        ,
                        t.prototype.isInertia = function (t) {
                            var e, n, i, r, a, o, s;
                            return null === (e = -1 === t ? this.lastDownDeltas : this.lastUpDeltas)[0] ? t : !(this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && e[0] === e[2 * this.stability - 1]) && (i = e.slice(0, this.stability),
                                n = e.slice(this.stability, 2 * this.stability),
                                s = i.reduce((function (t, e) {
                                    return t + e
                                }
                                )),
                                a = n.reduce((function (t, e) {
                                    return t + e
                                }
                                )),
                                o = s / i.length,
                                r = a / n.length,
                                Math.abs(o) < Math.abs(r * this.tolerance) && this.sensitivity < Math.abs(r) && t)
                        }
                        ,
                        t.prototype.showLastUpDeltas = function () {
                            return this.lastUpDeltas
                        }
                        ,
                        t.prototype.showLastDownDeltas = function () {
                            return this.lastDownDeltas
                        }
                        ,
                        t
                }()
            }
            ).call(b)
        }
        ))
        , F = {
            hasWheelEvent: "onwheel" in document,
            hasMouseWheelEvent: "onmousewheel" in document,
            hasTouch: "ontouchstart" in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
            hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
            hasPointer: !!window.navigator.msPointerEnabled,
            hasKeyDown: "onkeydown" in document,
            isFirefox: navigator.userAgent.indexOf("Firefox") > -1
        }
        , O = Object.prototype.toString
        , I = Object.prototype.hasOwnProperty;
    function N(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }
    var z = P.Lethargy
        , B = "virtualscroll"
        , H = j
        , k = 37
        , U = 38
        , G = 39
        , W = 40
        , V = 32;
    function j(t) {
        !function (t) {
            if (!t)
                return console.warn("bindAll requires at least one argument.");
            var e = Array.prototype.slice.call(arguments, 1);
            if (0 === e.length)
                for (var n in t)
                    I.call(t, n) && "function" == typeof t[n] && "[object Function]" == O.call(t[n]) && e.push(n);
            for (var i = 0; i < e.length; i++) {
                var r = e[i];
                t[r] = N(t[r], t)
            }
        }(this, "_onWheel", "_onMouseWheel", "_onTouchStart", "_onTouchMove", "_onKeyDown"),
            this.el = window,
            t && t.el && (this.el = t.el,
                delete t.el),
            this.options = L({
                mouseMultiplier: 1,
                touchMultiplier: 2,
                firefoxMultiplier: 15,
                keyStep: 120,
                preventTouch: !1,
                unpreventTouchClass: "vs-touchmove-allowed",
                limitInertia: !1,
                useKeyboard: !0,
                useTouch: !0
            }, t),
            this.options.limitInertia && (this._lethargy = new z),
            this._emitter = new R,
            this._event = {
                y: 0,
                x: 0,
                deltaX: 0,
                deltaY: 0
            },
            this.touchStartX = null,
            this.touchStartY = null,
            this.bodyTouchAction = null,
            void 0 !== this.options.passive && (this.listenerOptions = {
                passive: this.options.passive
            })
    }
    function q(t, e, n) {
        return (1 - n) * t + n * e
    }
    function X(t) {
        var e = {};
        if (window.getComputedStyle) {
            var n = getComputedStyle(t)
                , i = n.transform || n.webkitTransform || n.mozTransform
                , r = i.match(/^matrix3d\((.+)\)$/);
            return r ? (e.x = r ? parseFloat(r[1].split(", ")[12]) : 0,
                e.y = r ? parseFloat(r[1].split(", ")[13]) : 0) : (r = i.match(/^matrix\((.+)\)$/),
                    e.x = r ? parseFloat(r[1].split(", ")[4]) : 0,
                    e.y = r ? parseFloat(r[1].split(", ")[5]) : 0),
                e
        }
    }
    function Y(t) {
        for (var e = []; t && t !== document; t = t.parentNode)
            e.push(t);
        return e
    }
    j.prototype._notify = function (t) {
        var e = this._event;
        e.x += e.deltaX,
            e.y += e.deltaY,
            this._emitter.emit(B, {
                x: e.x,
                y: e.y,
                deltaX: e.deltaX,
                deltaY: e.deltaY,
                originalEvent: t
            })
    }
        ,
        j.prototype._onWheel = function (t) {
            var e = this.options;
            if (!this._lethargy || !1 !== this._lethargy.check(t)) {
                var n = this._event;
                n.deltaX = t.wheelDeltaX || -1 * t.deltaX,
                    n.deltaY = t.wheelDeltaY || -1 * t.deltaY,
                    F.isFirefox && 1 == t.deltaMode && (n.deltaX *= e.firefoxMultiplier,
                        n.deltaY *= e.firefoxMultiplier),
                    n.deltaX *= e.mouseMultiplier,
                    n.deltaY *= e.mouseMultiplier,
                    this._notify(t)
            }
        }
        ,
        j.prototype._onMouseWheel = function (t) {
            if (!this.options.limitInertia || !1 !== this._lethargy.check(t)) {
                var e = this._event;
                e.deltaX = t.wheelDeltaX ? t.wheelDeltaX : 0,
                    e.deltaY = t.wheelDeltaY ? t.wheelDeltaY : t.wheelDelta,
                    this._notify(t)
            }
        }
        ,
        j.prototype._onTouchStart = function (t) {
            var e = t.targetTouches ? t.targetTouches[0] : t;
            this.touchStartX = e.pageX,
                this.touchStartY = e.pageY
        }
        ,
        j.prototype._onTouchMove = function (t) {
            var e = this.options;
            e.preventTouch && !t.target.classList.contains(e.unpreventTouchClass) && t.preventDefault();
            var n = this._event
                , i = t.targetTouches ? t.targetTouches[0] : t;
            n.deltaX = (i.pageX - this.touchStartX) * e.touchMultiplier,
                n.deltaY = (i.pageY - this.touchStartY) * e.touchMultiplier,
                this.touchStartX = i.pageX,
                this.touchStartY = i.pageY,
                this._notify(t)
        }
        ,
        j.prototype._onKeyDown = function (t) {
            var e = this._event;
            e.deltaX = e.deltaY = 0;
            var n = window.innerHeight - 40;
            switch (t.keyCode) {
                case k:
                case U:
                    e.deltaY = this.options.keyStep;
                    break;
                case G:
                case W:
                    e.deltaY = -this.options.keyStep;
                    break;
                case t.shiftKey:
                    e.deltaY = n;
                    break;
                case V:
                    e.deltaY = -n;
                    break;
                default:
                    return
            }
            this._notify(t)
        }
        ,
        j.prototype._bind = function () {
            F.hasWheelEvent && this.el.addEventListener("wheel", this._onWheel, this.listenerOptions),
                F.hasMouseWheelEvent && this.el.addEventListener("mousewheel", this._onMouseWheel, this.listenerOptions),
                F.hasTouch && this.options.useTouch && (this.el.addEventListener("touchstart", this._onTouchStart, this.listenerOptions),
                    this.el.addEventListener("touchmove", this._onTouchMove, this.listenerOptions)),
                F.hasPointer && F.hasTouchWin && (this.bodyTouchAction = document.body.style.msTouchAction,
                    document.body.style.msTouchAction = "none",
                    this.el.addEventListener("MSPointerDown", this._onTouchStart, !0),
                    this.el.addEventListener("MSPointerMove", this._onTouchMove, !0)),
                F.hasKeyDown && this.options.useKeyboard && document.addEventListener("keydown", this._onKeyDown)
        }
        ,
        j.prototype._unbind = function () {
            F.hasWheelEvent && this.el.removeEventListener("wheel", this._onWheel),
                F.hasMouseWheelEvent && this.el.removeEventListener("mousewheel", this._onMouseWheel),
                F.hasTouch && (this.el.removeEventListener("touchstart", this._onTouchStart),
                    this.el.removeEventListener("touchmove", this._onTouchMove)),
                F.hasPointer && F.hasTouchWin && (document.body.style.msTouchAction = this.bodyTouchAction,
                    this.el.removeEventListener("MSPointerDown", this._onTouchStart, !0),
                    this.el.removeEventListener("MSPointerMove", this._onTouchMove, !0)),
                F.hasKeyDown && this.options.useKeyboard && document.removeEventListener("keydown", this._onKeyDown)
        }
        ,
        j.prototype.on = function (t, e) {
            this._emitter.on(B, t, e);
            var n = this._emitter.e;
            n && n[B] && 1 === n[B].length && this._bind()
        }
        ,
        j.prototype.off = function (t, e) {
            this._emitter.off(B, t, e);
            var n = this._emitter.e;
            (!n[B] || n[B].length <= 0) && this._unbind()
        }
        ,
        j.prototype.reset = function () {
            var t = this._event;
            t.x = 0,
                t.y = 0
        }
        ,
        j.prototype.destroy = function () {
            this._emitter.off(),
                this._unbind()
        }
        ;
    var Z = .1
        , J = "function" == typeof Float32Array;
    function Q(t, e) {
        return 1 - 3 * e + 3 * t
    }
    function K(t, e) {
        return 3 * e - 6 * t
    }
    function $(t) {
        return 3 * t
    }
    function tt(t, e, n) {
        return ((Q(e, n) * t + K(e, n)) * t + $(e)) * t
    }
    function et(t, e, n) {
        return 3 * Q(e, n) * t * t + 2 * K(e, n) * t + $(e)
    }
    function nt(t) {
        return t
    }
    var it = function (t, e, n, i) {
        if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
            throw new Error("bezier x values must be in [0, 1] range");
        if (t === e && n === i)
            return nt;
        for (var r = J ? new Float32Array(11) : new Array(11), a = 0; a < 11; ++a)
            r[a] = tt(a * Z, t, n);
        function o(e) {
            for (var i = 0, a = 1; 10 !== a && r[a] <= e; ++a)
                i += Z;
            --a;
            var o = i + (e - r[a]) / (r[a + 1] - r[a]) * Z
                , s = et(o, t, n);
            return s >= .001 ? function (t, e, n, i) {
                for (var r = 0; r < 4; ++r) {
                    var a = et(e, n, i);
                    if (0 === a)
                        return e;
                    e -= (tt(e, n, i) - t) / a
                }
                return e
            }(e, o, t, n) : 0 === s ? o : function (t, e, n, i, r) {
                var a, o, s = 0;
                do {
                    (a = tt(o = e + (n - e) / 2, i, r) - t) > 0 ? n = o : e = o
                } while (Math.abs(a) > 1e-7 && ++s < 10);
                return o
            }(e, i, i + Z, t, n)
        }
        return function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : tt(o(t), e, i)
        }
    }
        , rt = 38
        , at = 40
        , ot = 32
        , st = 9
        , lt = 33
        , ct = 34
        , ut = 36
        , ht = 35
        , dt = function (t) {
            l(i, t);
            var e = p(i);
            function i() {
                var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return n(this, i),
                    history.scrollRestoration && (history.scrollRestoration = "manual"),
                    window.scrollTo(0, 0),
                    (t = e.call(this, r)).inertia && (t.lerp = .1 * t.inertia),
                    t.isScrolling = !1,
                    t.isDraggingScrollbar = !1,
                    t.isTicking = !1,
                    t.hasScrollTicking = !1,
                    t.parallaxElements = {},
                    t.stop = !1,
                    t.scrollbarContainer = r.scrollbarContainer,
                    t.checkKey = t.checkKey.bind(h(t)),
                    window.addEventListener("keydown", t.checkKey, !1),
                    t
            }
            return r(i, [{
                key: "init",
                value: function () {
                    var t = this;
                    this.html.classList.add(this.smoothClass),
                        this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction),
                        this.instance = s({
                            delta: {
                                x: this.initPosition.x,
                                y: this.initPosition.y
                            },
                            scroll: {
                                x: this.initPosition.x,
                                y: this.initPosition.y
                            }
                        }, this.instance),
                        this.vs = new H({
                            el: this.scrollFromAnywhere ? document : this.el,
                            mouseMultiplier: navigator.platform.indexOf("Win") > -1 ? 1 : .4,
                            firefoxMultiplier: this.firefoxMultiplier,
                            touchMultiplier: this.touchMultiplier,
                            useKeyboard: !1,
                            passive: !0
                        }),
                        this.vs.on((function (e) {
                            t.stop || t.isDraggingScrollbar || requestAnimationFrame((function () {
                                t.updateDelta(e),
                                    t.isScrolling || t.startScrolling()
                            }
                            ))
                        }
                        )),
                        this.setScrollLimit(),
                        this.initScrollBar(),
                        this.addSections(),
                        this.addElements(),
                        this.checkScroll(!0),
                        this.transformElements(!0, !0),
                        f(c(i.prototype), "init", this).call(this)
                }
            }, {
                key: "setScrollLimit",
                value: function () {
                    if (this.instance.limit.y = this.el.offsetHeight - this.windowHeight,
                        "horizontal" === this.direction) {
                        for (var t = 0, e = this.el.children, n = 0; n < e.length; n++)
                            t += e[n].offsetWidth;
                        this.instance.limit.x = t - this.windowWidth
                    }
                }
            }, {
                key: "startScrolling",
                value: function () {
                    this.startScrollTs = Date.now(),
                        this.isScrolling = !0,
                        this.checkScroll(),
                        this.html.classList.add(this.scrollingClass)
                }
            }, {
                key: "stopScrolling",
                value: function () {
                    cancelAnimationFrame(this.checkScrollRaf),
                        this.scrollToRaf && (cancelAnimationFrame(this.scrollToRaf),
                            this.scrollToRaf = null),
                        this.isScrolling = !1,
                        this.instance.scroll.y = Math.round(this.instance.scroll.y),
                        this.html.classList.remove(this.scrollingClass)
                }
            }, {
                key: "checkKey",
                value: function (t) {
                    var e = this;
                    if (this.stop)
                        t.keyCode == st && requestAnimationFrame((function () {
                            e.html.scrollTop = 0,
                                document.body.scrollTop = 0,
                                e.html.scrollLeft = 0,
                                document.body.scrollLeft = 0
                        }
                        ));
                    else {
                        switch (t.keyCode) {
                            case st:
                                requestAnimationFrame((function () {
                                    e.html.scrollTop = 0,
                                        document.body.scrollTop = 0,
                                        e.html.scrollLeft = 0,
                                        document.body.scrollLeft = 0,
                                        e.scrollTo(document.activeElement, {
                                            offset: -window.innerHeight / 2
                                        })
                                }
                                ));
                                break;
                            case rt:
                                this.instance.delta[this.directionAxis] -= 240;
                                break;
                            case at:
                                this.instance.delta[this.directionAxis] += 240;
                                break;
                            case lt:
                                this.instance.delta[this.directionAxis] -= window.innerHeight;
                                break;
                            case ct:
                                this.instance.delta[this.directionAxis] += window.innerHeight;
                                break;
                            case ut:
                                this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                                break;
                            case ht:
                                this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                                break;
                            case ot:
                                document.activeElement instanceof HTMLInputElement || document.activeElement instanceof HTMLTextAreaElement || (t.shiftKey ? this.instance.delta[this.directionAxis] -= window.innerHeight : this.instance.delta[this.directionAxis] += window.innerHeight);
                                break;
                            default:
                                return
                        }
                        this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                            this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis]),
                            this.stopScrolling(),
                            this.isScrolling = !0,
                            this.checkScroll(),
                            this.html.classList.add(this.scrollingClass)
                    }
                }
            }, {
                key: "checkScroll",
                value: function () {
                    var t = this
                        , e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (e || this.isScrolling || this.isDraggingScrollbar) {
                        this.hasScrollTicking || (this.checkScrollRaf = requestAnimationFrame((function () {
                            return t.checkScroll()
                        }
                        )),
                            this.hasScrollTicking = !0),
                            this.updateScroll();
                        var n = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis])
                            , r = Date.now() - this.startScrollTs;
                        if (!this.animatingScroll && r > 100 && (n < .5 && 0 != this.instance.delta[this.directionAxis] || n < .5 && 0 == this.instance.delta[this.directionAxis]) && this.stopScrolling(),
                            Object.entries(this.sections).forEach((function (n) {
                                var i = m(n, 2);
                                i[0];
                                var r = i[1];
                                r.persistent || t.instance.scroll[t.directionAxis] > r.offset[t.directionAxis] && t.instance.scroll[t.directionAxis] < r.limit[t.directionAxis] ? ("horizontal" === t.direction ? t.transform(r.el, -t.instance.scroll[t.directionAxis], 0) : t.transform(r.el, 0, -t.instance.scroll[t.directionAxis]),
                                    r.inView || (r.inView = !0,
                                        r.el.style.opacity = 1,
                                        r.el.style.pointerEvents = "all",
                                        r.el.setAttribute("data-".concat(t.name, "-section-inview"), ""))) : ((r.inView || e) && (r.inView = !1,
                                            r.el.style.opacity = 0,
                                            r.el.style.pointerEvents = "none",
                                            r.el.removeAttribute("data-".concat(t.name, "-section-inview"))),
                                            t.transform(r.el, 0, 0))
                            }
                            )),
                            this.getDirection && this.addDirection(),
                            this.getSpeed && (this.addSpeed(),
                                this.speedTs = Date.now()),
                            this.detectElements(),
                            this.transformElements(),
                            this.hasScrollbar) {
                            var a = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                            "horizontal" === this.direction ? this.transform(this.scrollbarThumb, a, 0) : this.transform(this.scrollbarThumb, 0, a)
                        }
                        f(c(i.prototype), "checkScroll", this).call(this),
                            this.hasScrollTicking = !1
                    }
                }
            }, {
                key: "resize",
                value: function () {
                    this.windowHeight = window.innerHeight,
                        this.windowWidth = window.innerWidth,
                        this.checkContext(),
                        this.windowMiddle = {
                            x: this.windowWidth / 2,
                            y: this.windowHeight / 2
                        },
                        this.update()
                }
            }, {
                key: "updateDelta",
                value: function (t) {
                    var e, n = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                    e = "both" === n ? t.deltaX + t.deltaY : "vertical" === n ? t.deltaY : "horizontal" === n ? t.deltaX : t.deltaY,
                        this.instance.delta[this.directionAxis] -= e * this.multiplier,
                        this.instance.delta[this.directionAxis] < 0 && (this.instance.delta[this.directionAxis] = 0),
                        this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis] && (this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis])
                }
            }, {
                key: "updateScroll",
                value: function (t) {
                    this.isScrolling || this.isDraggingScrollbar ? this.instance.scroll[this.directionAxis] = q(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp) : this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis] ? this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]) : this.instance.scroll.y < 0 ? this.setScroll(this.instance.scroll[this.directionAxis], 0) : this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis])
                }
            }, {
                key: "addDirection",
                value: function () {
                    this.instance.delta.y > this.instance.scroll.y ? "down" !== this.instance.direction && (this.instance.direction = "down") : this.instance.delta.y < this.instance.scroll.y && "up" !== this.instance.direction && (this.instance.direction = "up"),
                        this.instance.delta.x > this.instance.scroll.x ? "right" !== this.instance.direction && (this.instance.direction = "right") : this.instance.delta.x < this.instance.scroll.x && "left" !== this.instance.direction && (this.instance.direction = "left")
                }
            }, {
                key: "addSpeed",
                value: function () {
                    this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis] ? this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs) : this.instance.speed = 0
                }
            }, {
                key: "initScrollBar",
                value: function () {
                    if (this.scrollbar = document.createElement("span"),
                        this.scrollbarThumb = document.createElement("span"),
                        this.scrollbar.classList.add("".concat(this.scrollbarClass)),
                        this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb")),
                        this.scrollbar.append(this.scrollbarThumb),
                        this.scrollbarContainer ? this.scrollbarContainer.append(this.scrollbar) : document.body.append(this.scrollbar),
                        this.getScrollBar = this.getScrollBar.bind(this),
                        this.releaseScrollBar = this.releaseScrollBar.bind(this),
                        this.moveScrollBar = this.moveScrollBar.bind(this),
                        this.scrollbarThumb.addEventListener("mousedown", this.getScrollBar),
                        window.addEventListener("mouseup", this.releaseScrollBar),
                        window.addEventListener("mousemove", this.moveScrollBar),
                        this.hasScrollbar = !1,
                        "horizontal" == this.direction) {
                        if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
                            return
                    } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight)
                        return;
                    this.hasScrollbar = !0,
                        this.scrollbarBCR = this.scrollbar.getBoundingClientRect(),
                        this.scrollbarHeight = this.scrollbarBCR.height,
                        this.scrollbarWidth = this.scrollbarBCR.width,
                        "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"),
                        this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(),
                        this.scrollBarLimit = {
                            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                        }
                }
            }, {
                key: "reinitScrollBar",
                value: function () {
                    if (this.hasScrollbar = !1,
                        "horizontal" == this.direction) {
                        if (this.instance.limit.x + this.windowWidth <= this.windowWidth)
                            return
                    } else if (this.instance.limit.y + this.windowHeight <= this.windowHeight)
                        return;
                    this.hasScrollbar = !0,
                        this.scrollbarBCR = this.scrollbar.getBoundingClientRect(),
                        this.scrollbarHeight = this.scrollbarBCR.height,
                        this.scrollbarWidth = this.scrollbarBCR.width,
                        "horizontal" === this.direction ? this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px") : this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px"),
                        this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect(),
                        this.scrollBarLimit = {
                            x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                            y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                        }
                }
            }, {
                key: "destroyScrollBar",
                value: function () {
                    this.scrollbarThumb.removeEventListener("mousedown", this.getScrollBar),
                        window.removeEventListener("mouseup", this.releaseScrollBar),
                        window.removeEventListener("mousemove", this.moveScrollBar),
                        this.scrollbar.remove()
                }
            }, {
                key: "getScrollBar",
                value: function (t) {
                    this.isDraggingScrollbar = !0,
                        this.checkScroll(),
                        this.html.classList.remove(this.scrollingClass),
                        this.html.classList.add(this.draggingClass)
                }
            }, {
                key: "releaseScrollBar",
                value: function (t) {
                    this.isDraggingScrollbar = !1,
                        this.html.classList.add(this.scrollingClass),
                        this.html.classList.remove(this.draggingClass)
                }
            }, {
                key: "moveScrollBar",
                value: function (t) {
                    var e = this;
                    this.isDraggingScrollbar && requestAnimationFrame((function () {
                        var n = 100 * (t.clientX - e.scrollbarBCR.left) / e.scrollbarWidth * e.instance.limit.x / 100
                            , i = 100 * (t.clientY - e.scrollbarBCR.top) / e.scrollbarHeight * e.instance.limit.y / 100;
                        i > 0 && i < e.instance.limit.y && (e.instance.delta.y = i),
                            n > 0 && n < e.instance.limit.x && (e.instance.delta.x = n)
                    }
                    ))
                }
            }, {
                key: "addElements",
                value: function () {
                    var t = this;
                    this.els = {},
                        this.parallaxElements = {},
                        this.el.querySelectorAll("[data-".concat(this.name, "]")).forEach((function (e, n) {
                            var i, r, a, o = Y(e), s = Object.entries(t.sections).map((function (t) {
                                var e = m(t, 2);
                                return e[0],
                                    e[1]
                            }
                            )).find((function (t) {
                                return o.includes(t.el)
                            }
                            )), l = e.dataset[t.name + "Class"] || t.class, c = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "el" + n, u = e.dataset[t.name + "Repeat"], h = e.dataset[t.name + "Call"], d = e.dataset[t.name + "Position"], p = e.dataset[t.name + "Delay"], f = e.dataset[t.name + "Direction"], g = "string" == typeof e.dataset[t.name + "Sticky"], v = !!e.dataset[t.name + "Speed"] && parseFloat(e.dataset[t.name + "Speed"]) / 10, _ = "string" == typeof e.dataset[t.name + "Offset"] ? e.dataset[t.name + "Offset"].split(",") : t.offset, x = e.dataset[t.name + "Target"], y = (a = void 0 !== x ? document.querySelector("".concat(x)) : e).getBoundingClientRect();
                            null === s || s.inView ? (i = y.top + t.instance.scroll.y - X(a).y,
                                r = y.left + t.instance.scroll.x - X(a).x) : (i = y.top - X(s.el).y - X(a).y,
                                    r = y.left - X(s.el).x - X(a).x);
                            var b = i + a.offsetHeight
                                , w = r + a.offsetWidth
                                , M = {
                                    x: (w - r) / 2 + r,
                                    y: (b - i) / 2 + i
                                };
                            if (g) {
                                var D = e.getBoundingClientRect()
                                    , E = D.top
                                    , T = D.left
                                    , S = {
                                        x: T - r,
                                        y: E - i
                                    };
                                i += window.innerHeight,
                                    r += window.innerWidth,
                                    b = E + a.offsetHeight - e.offsetHeight - S[t.directionAxis],
                                    M = {
                                        x: ((w = T + a.offsetWidth - e.offsetWidth - S[t.directionAxis]) - r) / 2 + r,
                                        y: (b - i) / 2 + i
                                    }
                            }
                            u = "false" != u && (null != u || t.repeat);
                            var C = [0, 0];
                            if (_)
                                if ("horizontal" === t.direction) {
                                    for (var L = 0; L < _.length; L++)
                                        "string" == typeof _[L] ? _[L].includes("%") ? C[L] = parseInt(_[L].replace("%", "") * t.windowWidth / 100) : C[L] = parseInt(_[L]) : C[L] = _[L];
                                    r += C[0],
                                        w -= C[1]
                                } else {
                                    for (L = 0; L < _.length; L++)
                                        "string" == typeof _[L] ? _[L].includes("%") ? C[L] = parseInt(_[L].replace("%", "") * t.windowHeight / 100) : C[L] = parseInt(_[L]) : C[L] = _[L];
                                    i += C[0],
                                        b -= C[1]
                                }
                            var A = {
                                el: e,
                                id: c,
                                class: l,
                                section: s,
                                top: i,
                                middle: M,
                                bottom: b,
                                left: r,
                                right: w,
                                offset: _,
                                progress: 0,
                                repeat: u,
                                inView: !1,
                                call: h,
                                speed: v,
                                delay: p,
                                position: d,
                                target: a,
                                direction: f,
                                sticky: g
                            };
                            t.els[c] = A,
                                e.classList.contains(l) && t.setInView(t.els[c], c),
                                (!1 !== v || g) && (t.parallaxElements[c] = A)
                        }
                        ))
                }
            }, {
                key: "addSections",
                value: function () {
                    var t = this;
                    this.sections = {};
                    var e = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                    0 === e.length && (e = [this.el]),
                        e.forEach((function (e, n) {
                            var i = "string" == typeof e.dataset[t.name + "Id"] ? e.dataset[t.name + "Id"] : "section" + n
                                , r = e.getBoundingClientRect()
                                , a = {
                                    x: r.left - 1.5 * window.innerWidth - X(e).x,
                                    y: r.top - 1.5 * window.innerHeight - X(e).y
                                }
                                , o = {
                                    x: a.x + r.width + 2 * window.innerWidth,
                                    y: a.y + r.height + 2 * window.innerHeight
                                }
                                , s = "string" == typeof e.dataset[t.name + "Persistent"];
                            e.setAttribute("data-scroll-section-id", i);
                            var l = {
                                el: e,
                                offset: a,
                                limit: o,
                                inView: !1,
                                persistent: s,
                                id: i
                            };
                            t.sections[i] = l
                        }
                        ))
                }
            }, {
                key: "transform",
                value: function (t, e, n, i) {
                    var r;
                    if (i) {
                        var a = X(t)
                            , o = q(a.x, e, i)
                            , s = q(a.y, n, i);
                        r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(o, ",").concat(s, ",0,1)")
                    } else
                        r = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(e, ",").concat(n, ",0,1)");
                    t.style.webkitTransform = r,
                        t.style.msTransform = r,
                        t.style.transform = r
                }
            }, {
                key: "transformElements",
                value: function (t) {
                    var e = this
                        , n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
                        , i = this.instance.scroll.x + this.windowWidth
                        , r = this.instance.scroll.y + this.windowHeight
                        , a = {
                            x: this.instance.scroll.x + this.windowMiddle.x,
                            y: this.instance.scroll.y + this.windowMiddle.y
                        };
                    Object.entries(this.parallaxElements).forEach((function (o) {
                        var s = m(o, 2);
                        s[0];
                        var l = s[1]
                            , c = !1;
                        if (t && (c = 0),
                            l.inView || n)
                            switch (l.position) {
                                case "top":
                                    c = e.instance.scroll[e.directionAxis] * -l.speed;
                                    break;
                                case "elementTop":
                                    c = (r - l.top) * -l.speed;
                                    break;
                                case "bottom":
                                    c = (e.instance.limit[e.directionAxis] - r + e.windowHeight) * l.speed;
                                    break;
                                case "left":
                                    c = e.instance.scroll[e.directionAxis] * -l.speed;
                                    break;
                                case "elementLeft":
                                    c = (i - l.left) * -l.speed;
                                    break;
                                case "right":
                                    c = (e.instance.limit[e.directionAxis] - i + e.windowHeight) * l.speed;
                                    break;
                                default:
                                    c = (a[e.directionAxis] - l.middle[e.directionAxis]) * -l.speed
                            }
                        l.sticky && (c = l.inView ? "horizontal" === e.direction ? e.instance.scroll.x - l.left + window.innerWidth : e.instance.scroll.y - l.top + window.innerHeight : "horizontal" === e.direction ? e.instance.scroll.x < l.left - window.innerWidth && e.instance.scroll.x < l.left - window.innerWidth / 2 ? 0 : e.instance.scroll.x > l.right && e.instance.scroll.x > l.right + 100 && l.right - l.left + window.innerWidth : e.instance.scroll.y < l.top - window.innerHeight && e.instance.scroll.y < l.top - window.innerHeight / 2 ? 0 : e.instance.scroll.y > l.bottom && e.instance.scroll.y > l.bottom + 100 && l.bottom - l.top + window.innerHeight),
                            !1 !== c && ("horizontal" === l.direction || "horizontal" === e.direction && "vertical" !== l.direction ? e.transform(l.el, c, 0, !t && l.delay) : e.transform(l.el, 0, c, !t && l.delay))
                    }
                    ))
                }
            }, {
                key: "scrollTo",
                value: function (t) {
                    var e = this
                        , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                        , i = parseInt(n.offset) || 0
                        , r = isNaN(parseInt(n.duration)) ? 1e3 : parseInt(n.duration)
                        , a = n.easing || [.25, 0, .35, 1]
                        , o = !!n.disableLerp
                        , s = !!n.callback && n.callback;
                    if (a = it.apply(void 0, g(a)),
                        "string" == typeof t) {
                        if ("top" === t)
                            t = 0;
                        else if ("bottom" === t)
                            t = this.instance.limit.y;
                        else if ("left" === t)
                            t = 0;
                        else if ("right" === t)
                            t = this.instance.limit.x;
                        else if (!(t = document.querySelector(t)))
                            return
                    } else if ("number" == typeof t)
                        t = parseInt(t);
                    else if (!t || !t.tagName)
                        return void console.warn("`target` parameter is not valid");
                    if ("number" != typeof t) {
                        var l = Y(t).includes(this.el);
                        if (!l)
                            return;
                        var c = t.getBoundingClientRect()
                            , u = c.top
                            , h = c.left
                            , d = Y(t)
                            , p = d.find((function (t) {
                                return Object.entries(e.sections).map((function (t) {
                                    var e = m(t, 2);
                                    return e[0],
                                        e[1]
                                }
                                )).find((function (e) {
                                    return e.el == t
                                }
                                ))
                            }
                            ))
                            , f = 0;
                        f = p ? X(p)[this.directionAxis] : -this.instance.scroll[this.directionAxis],
                            i = "horizontal" === this.direction ? h + i - f : u + i - f
                    } else
                        i = t + i;
                    var v = parseFloat(this.instance.delta[this.directionAxis])
                        , _ = Math.max(0, Math.min(i, this.instance.limit[this.directionAxis]))
                        , x = _ - v
                        , y = function (t) {
                            o ? "horizontal" === e.direction ? e.setScroll(v + x * t, e.instance.delta.y) : e.setScroll(e.instance.delta.x, v + x * t) : e.instance.delta[e.directionAxis] = v + x * t
                        };
                    this.animatingScroll = !0,
                        this.stopScrolling(),
                        this.startScrolling();
                    var b = Date.now()
                        , w = function t() {
                            var n = (Date.now() - b) / r;
                            n > 1 ? (y(1),
                                e.animatingScroll = !1,
                                0 == r && e.update(),
                                s && s()) : (e.scrollToRaf = requestAnimationFrame(t),
                                    y(a(n)))
                        };
                    w()
                }
            }, {
                key: "update",
                value: function () {
                    this.setScrollLimit(),
                        this.addSections(),
                        this.addElements(),
                        this.detectElements(),
                        this.updateScroll(),
                        this.transformElements(!0),
                        this.reinitScrollBar(),
                        this.checkScroll(!0)
                }
            }, {
                key: "startScroll",
                value: function () {
                    this.stop = !1
                }
            }, {
                key: "stopScroll",
                value: function () {
                    this.stop = !0
                }
            }, {
                key: "setScroll",
                value: function (t, e) {
                    this.instance = s(s({}, this.instance), {}, {
                        scroll: {
                            x: t,
                            y: e
                        },
                        delta: {
                            x: t,
                            y: e
                        },
                        speed: 0
                    })
                }
            }, {
                key: "destroy",
                value: function () {
                    f(c(i.prototype), "destroy", this).call(this),
                        this.stopScrolling(),
                        this.html.classList.remove(this.smoothClass),
                        this.vs.destroy(),
                        this.destroyScrollBar(),
                        window.removeEventListener("keydown", this.checkKey, !1)
                }
            }]),
                i
        }(y)
        , pt = function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                n(this, t),
                    this.options = e,
                    Object.assign(this, x, e),
                    this.smartphone = x.smartphone,
                    e.smartphone && Object.assign(this.smartphone, e.smartphone),
                    this.tablet = x.tablet,
                    e.tablet && Object.assign(this.tablet, e.tablet),
                    this.smooth || "horizontal" != this.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible"),
                    this.tablet.smooth || "horizontal" != this.tablet.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)"),
                    this.smartphone.smooth || "horizontal" != this.smartphone.direction || console.warn("🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)"),
                    this.init()
            }
            return r(t, [{
                key: "init",
                value: function () {
                    if (this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint,
                        this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint,
                        this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet ? this.scroll = new dt(this.options) : this.scroll = new D(this.options),
                        this.scroll.init(),
                        window.location.hash) {
                        var t = window.location.hash.slice(1, window.location.hash.length)
                            , e = document.getElementById(t);
                        e && this.scroll.scrollTo(e)
                    }
                }
            }, {
                key: "update",
                value: function () {
                    this.scroll.update()
                }
            }, {
                key: "start",
                value: function () {
                    this.scroll.startScroll()
                }
            }, {
                key: "stop",
                value: function () {
                    this.scroll.stopScroll()
                }
            }, {
                key: "scrollTo",
                value: function (t, e) {
                    this.scroll.scrollTo(t, e)
                }
            }, {
                key: "setScroll",
                value: function (t, e) {
                    this.scroll.setScroll(t, e)
                }
            }, {
                key: "on",
                value: function (t, e) {
                    this.scroll.setEvents(t, e)
                }
            }, {
                key: "off",
                value: function (t, e) {
                    this.scroll.unsetEvents(t, e)
                }
            }, {
                key: "destroy",
                value: function () {
                    this.scroll.destroy()
                }
            }]),
                t
        }();
    function ft(t) {
        if (void 0 === t)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function mt(t, e) {
        t.prototype = Object.create(e.prototype),
            t.prototype.constructor = t,
            t.__proto__ = e
    }
    /*!
   * GSAP 3.6.1
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
    var gt, vt, _t, xt, yt, bt, wt, Mt, Dt, Et, Tt, St, Ct, Lt = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    }, At = {
        duration: .5,
        overwrite: !1,
        delay: 0
    }, Rt = 1e8, Pt = 1e-8, Ft = 2 * Math.PI, Ot = Ft / 4, It = 0, Nt = Math.sqrt, zt = Math.cos, Bt = Math.sin, Ht = function (t) {
        return "string" == typeof t
    }, kt = function (t) {
        return "function" == typeof t
    }, Ut = function (t) {
        return "number" == typeof t
    }, Gt = function (t) {
        return void 0 === t
    }, Wt = function (t) {
        return "object" == typeof t
    }, Vt = function (t) {
        return !1 !== t
    }, jt = function () {
        return "undefined" != typeof window
    }, qt = function (t) {
        return kt(t) || Ht(t)
    }, Xt = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function () { }
        , Yt = Array.isArray, Zt = /(?:-?\.?\d|\.)+/gi, Jt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Qt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, Kt = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, $t = /[+-]=-?[.\d]+/, te = /[#\-+.]*\b[a-z\d-=+%.]+/gi, ee = /[\d.+\-=]+(?:e[-+]\d*)*/i, ne = {}, ie = {}, re = function (t) {
            return (ie = Ae(t, ne)) && gi
        }, ae = function (t, e) {
            return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
        }, oe = function (t, e) {
            return !e && console.warn(t)
        }, se = function (t, e) {
            return t && (ne[t] = e) && ie && (ie[t] = e) || ne
        }, le = function () {
            return 0
        }, ce = {}, ue = [], he = {}, de = {}, pe = {}, fe = 30, me = [], ge = "", ve = function (t) {
            var e, n, i = t[0];
            if (Wt(i) || kt(i) || (t = [t]),
                !(e = (i._gsap || {}).harness)) {
                for (n = me.length; n-- && !me[n].targetTest(i);)
                    ;
                e = me[n]
            }
            for (n = t.length; n--;)
                t[n] && (t[n]._gsap || (t[n]._gsap = new Un(t[n], e))) || t.splice(n, 1);
            return t
        }, _e = function (t) {
            return t._gsap || ve(on(t))[0]._gsap
        }, xe = function (t, e, n) {
            return (n = t[e]) && kt(n) ? t[e]() : Gt(n) && t.getAttribute && t.getAttribute(e) || n
        }, ye = function (t, e) {
            return (t = t.split(",")).forEach(e) || t
        }, be = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0
        }, we = function (t, e) {
            for (var n = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < n;)
                ;
            return i < n
        }, Me = function (t, e, n) {
            var i, r = Ut(t[1]), a = (r ? 2 : 1) + (e < 2 ? 0 : 1), o = t[a];
            if (r && (o.duration = t[1]),
                o.parent = n,
                e) {
                for (i = o; n && !("immediateRender" in i);)
                    i = n.vars.defaults || {},
                        n = Vt(n.vars.inherit) && n.parent;
                o.immediateRender = Vt(i.immediateRender),
                    e < 2 ? o.runBackwards = 1 : o.startAt = t[a - 1]
            }
            return o
        }, De = function () {
            var t, e, n = ue.length, i = ue.slice(0);
            for (he = {},
                ue.length = 0,
                t = 0; t < n; t++)
                (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
        }, Ee = function (t, e, n, i) {
            ue.length && De(),
                t.render(e, n, i),
                ue.length && De()
        }, Te = function (t) {
            var e = parseFloat(t);
            return (e || 0 === e) && (t + "").match(te).length < 2 ? e : Ht(t) ? t.trim() : t
        }, Se = function (t) {
            return t
        }, Ce = function (t, e) {
            for (var n in e)
                n in t || (t[n] = e[n]);
            return t
        }, Le = function (t, e) {
            for (var n in e)
                n in t || "duration" === n || "ease" === n || (t[n] = e[n])
        }, Ae = function (t, e) {
            for (var n in e)
                t[n] = e[n];
            return t
        }, Re = function t(e, n) {
            for (var i in n)
                "__proto__" !== i && "constructor" !== i && "prototype" !== i && (e[i] = Wt(n[i]) ? t(e[i] || (e[i] = {}), n[i]) : n[i]);
            return e
        }, Pe = function (t, e) {
            var n, i = {};
            for (n in t)
                n in e || (i[n] = t[n]);
            return i
        }, Fe = function (t) {
            var e = t.parent || vt
                , n = t.keyframes ? Le : Ce;
            if (Vt(t.inherit))
                for (; e;)
                    n(t, e.vars.defaults),
                        e = e.parent || e._dp;
            return t
        }, Oe = function (t, e, n, i) {
            void 0 === n && (n = "_first"),
                void 0 === i && (i = "_last");
            var r = e._prev
                , a = e._next;
            r ? r._next = a : t[n] === e && (t[n] = a),
                a ? a._prev = r : t[i] === e && (t[i] = r),
                e._next = e._prev = e.parent = null
        }, Ie = function (t, e) {
            t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
                t._act = 0
        }, Ne = function (t, e) {
            if (t && (!e || e._end > t._dur || e._start < 0))
                for (var n = t; n;)
                    n._dirty = 1,
                        n = n.parent;
            return t
        }, ze = function (t) {
            for (var e = t.parent; e && e.parent;)
                e._dirty = 1,
                    e.totalDuration(),
                    e = e.parent;
            return t
        }, Be = function t(e) {
            return !e || e._ts && t(e.parent)
        }, He = function (t) {
            return t._repeat ? ke(t._tTime, t = t.duration() + t._rDelay) * t : 0
        }, ke = function (t, e) {
            var n = Math.floor(t /= e);
            return t && n === t ? n - 1 : n
        }, Ue = function (t, e) {
            return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
        }, Ge = function (t) {
            return t._end = be(t._start + (t._tDur / Math.abs(t._ts || t._rts || Pt) || 0))
        }, We = function (t, e) {
            var n = t._dp;
            return n && n.smoothChildTiming && t._ts && (t._start = be(n._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
                Ge(t),
                n._dirty || Ne(n, t)),
                t
        }, Ve = function (t, e) {
            var n;
            if ((e._time || e._initted && !e._dur) && (n = Ue(t.rawTime(), e),
                (!e._dur || tn(0, e.totalDuration(), n) - e._tTime > Pt) && e.render(n, !0)),
                Ne(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
                if (t._dur < t.duration())
                    for (n = t; n._dp;)
                        n.rawTime() >= 0 && n.totalTime(n._tTime),
                            n = n._dp;
                t._zTime = -1e-8
            }
        }, je = function (t, e, n, i) {
            return e.parent && Ie(e),
                e._start = be(n + e._delay),
                e._end = be(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
                function (t, e, n, i, r) {
                    void 0 === n && (n = "_first"),
                        void 0 === i && (i = "_last");
                    var a, o = t[i];
                    if (r)
                        for (a = e[r]; o && o[r] > a;)
                            o = o._prev;
                    o ? (e._next = o._next,
                        o._next = e) : (e._next = t[n],
                            t[n] = e),
                        e._next ? e._next._prev = e : t[i] = e,
                        e._prev = o,
                        e.parent = e._dp = t
                }(t, e, "_first", "_last", t._sort ? "_start" : 0),
                t._recent = e,
                i || Ve(t, e),
                t
        }, qe = function (t, e) {
            return (ne.ScrollTrigger || ae("scrollTrigger", e)) && ne.ScrollTrigger.create(e, t)
        }, Xe = function (t, e, n, i) {
            return Yn(t, e),
                t._initted ? !n && t._pt && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && wt !== Cn.frame ? (ue.push(t),
                    t._lazy = [e, i],
                    1) : void 0 : 1
        }, Ye = function t(e) {
            var n = e.parent;
            return n && n._ts && n._initted && !n._lock && (n.rawTime() < 0 || t(n))
        }, Ze = function (t, e, n, i) {
            var r = t._repeat
                , a = be(e) || 0
                , o = t._tTime / t._tDur;
            return o && !i && (t._time *= a / t._dur),
                t._dur = a,
                t._tDur = r ? r < 0 ? 1e10 : be(a * (r + 1) + t._rDelay * r) : a,
                o && !i ? We(t, t._tTime = t._tDur * o) : t.parent && Ge(t),
                n || Ne(t.parent, t),
                t
        }, Je = function (t) {
            return t instanceof Wn ? Ne(t) : Ze(t, t._dur)
        }, Qe = {
            _start: 0,
            endTime: le
        }, Ke = function t(e, n) {
            var i, r, a = e.labels, o = e._recent || Qe, s = e.duration() >= Rt ? o.endTime(!1) : e._dur;
            return Ht(n) && (isNaN(n) || n in a) ? "<" === (i = n.charAt(0)) || ">" === i ? ("<" === i ? o._start : o.endTime(o._repeat >= 0)) + (parseFloat(n.substr(1)) || 0) : (i = n.indexOf("=")) < 0 ? (n in a || (a[n] = s),
                a[n]) : (r = +(n.charAt(i - 1) + n.substr(i + 1)),
                    i > 1 ? t(e, n.substr(0, i - 1)) + r : s + r) : null == n ? s : +n
        }, $e = function (t, e) {
            return t || 0 === t ? e(t) : e
        }, tn = function (t, e, n) {
            return n < t ? t : n > e ? e : n
        }, en = function (t) {
            if ("string" != typeof t)
                return "";
            var e = ee.exec(t);
            return e ? t.substr(e.index + e[0].length) : ""
        }, nn = [].slice, rn = function (t, e) {
            return t && Wt(t) && "length" in t && (!e && !t.length || t.length - 1 in t && Wt(t[0])) && !t.nodeType && t !== _t
        }, an = function (t, e, n) {
            return void 0 === n && (n = []),
                t.forEach((function (t) {
                    var i;
                    return Ht(t) && !e || rn(t, 1) ? (i = n).push.apply(i, on(t)) : n.push(t)
                }
                )) || n
        }, on = function (t, e) {
            return !Ht(t) || e || !xt && Ln() ? Yt(t) ? an(t, e) : rn(t) ? nn.call(t, 0) : t ? [t] : [] : nn.call(yt.querySelectorAll(t), 0)
        }, sn = function (t) {
            return t.sort((function () {
                return .5 - Math.random()
            }
            ))
        }, ln = function (t) {
            if (kt(t))
                return t;
            var e = Wt(t) ? t : {
                each: t
            }
                , n = Nn(e.ease)
                , i = e.from || 0
                , r = parseFloat(e.base) || 0
                , a = {}
                , o = i > 0 && i < 1
                , s = isNaN(i) || o
                , l = e.axis
                , c = i
                , u = i;
            return Ht(i) ? c = u = {
                center: .5,
                edges: .5,
                end: 1
            }[i] || 0 : !o && s && (c = i[0],
                u = i[1]),
                function (t, o, h) {
                    var d, p, f, m, g, v, _, x, y, b = (h || e).length, w = a[b];
                    if (!w) {
                        if (!(y = "auto" === e.grid ? 0 : (e.grid || [1, Rt])[1])) {
                            for (_ = -1e8; _ < (_ = h[y++].getBoundingClientRect().left) && y < b;)
                                ;
                            y--
                        }
                        for (w = a[b] = [],
                            d = s ? Math.min(y, b) * c - .5 : i % y,
                            p = s ? b * u / y - .5 : i / y | 0,
                            _ = 0,
                            x = Rt,
                            v = 0; v < b; v++)
                            f = v % y - d,
                                m = p - (v / y | 0),
                                w[v] = g = l ? Math.abs("y" === l ? m : f) : Nt(f * f + m * m),
                                g > _ && (_ = g),
                                g < x && (x = g);
                        "random" === i && sn(w),
                            w.max = _ - x,
                            w.min = x,
                            w.v = b = (parseFloat(e.amount) || parseFloat(e.each) * (y > b ? b - 1 : l ? "y" === l ? b / y : y : Math.max(y, b / y)) || 0) * ("edges" === i ? -1 : 1),
                            w.b = b < 0 ? r - b : r,
                            w.u = en(e.amount || e.each) || 0,
                            n = n && b < 0 ? On(n) : n
                    }
                    return b = (w[t] - w.min) / w.max || 0,
                        be(w.b + (n ? n(b) : b) * w.v) + w.u
                }
        }, cn = function (t) {
            var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
            return function (n) {
                var i = Math.round(parseFloat(n) / t) * t * e;
                return (i - i % 1) / e + (Ut(n) ? 0 : en(n))
            }
        }, un = function (t, e) {
            var n, i, r = Yt(t);
            return !r && Wt(t) && (n = r = t.radius || Rt,
                t.values ? (t = on(t.values),
                    (i = !Ut(t[0])) && (n *= n)) : t = cn(t.increment)),
                $e(e, r ? kt(t) ? function (e) {
                    return i = t(e),
                        Math.abs(i - e) <= n ? i : e
                }
                    : function (e) {
                        for (var r, a, o = parseFloat(i ? e.x : e), s = parseFloat(i ? e.y : 0), l = Rt, c = 0, u = t.length; u--;)
                            (r = i ? (r = t[u].x - o) * r + (a = t[u].y - s) * a : Math.abs(t[u] - o)) < l && (l = r,
                                c = u);
                        return c = !n || l <= n ? t[c] : e,
                            i || c === e || Ut(e) ? c : c + en(e)
                    }
                    : cn(t))
        }, hn = function (t, e, n, i) {
            return $e(Yt(t) ? !e : !0 === n ? !!(n = 0) : !i, (function () {
                return Yt(t) ? t[~~(Math.random() * t.length)] : (n = n || 1e-5) && (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) && Math.floor(Math.round((t - n / 2 + Math.random() * (e - t + .99 * n)) / n) * n * i) / i
            }
            ))
        }, dn = function (t, e, n) {
            return $e(n, (function (n) {
                return t[~~e(n)]
            }
            ))
        }, pn = function (t) {
            for (var e, n, i, r, a = 0, o = ""; ~(e = t.indexOf("random(", a));)
                i = t.indexOf(")", e),
                    r = "[" === t.charAt(e + 7),
                    n = t.substr(e + 7, i - e - 7).match(r ? te : Zt),
                    o += t.substr(a, e - a) + hn(r ? n : +n[0], r ? 0 : +n[1], +n[2] || 1e-5),
                    a = i + 1;
            return o + t.substr(a, t.length - a)
        }, fn = function (t, e, n, i, r) {
            var a = e - t
                , o = i - n;
            return $e(r, (function (e) {
                return n + ((e - t) / a * o || 0)
            }
            ))
        }, mn = function (t, e, n) {
            var i, r, a, o = t.labels, s = Rt;
            for (i in o)
                (r = o[i] - e) < 0 == !!n && r && s > (r = Math.abs(r)) && (a = i,
                    s = r);
            return a
        }, gn = function (t, e, n) {
            var i, r, a = t.vars, o = a[e];
            if (o)
                return i = a[e + "Params"],
                    r = a.callbackScope || t,
                    n && ue.length && De(),
                    i ? o.apply(r, i) : o.call(r)
        }, vn = function (t) {
            return Ie(t),
                t.scrollTrigger && t.scrollTrigger.kill(!1),
                t.progress() < 1 && gn(t, "onInterrupt"),
                t
        }, _n = function (t) {
            var e = (t = !t.name && t.default || t).name
                , n = kt(t)
                , i = e && !n && t.init ? function () {
                    this._props = []
                }
                    : t
                , r = {
                    init: le,
                    render: si,
                    add: qn,
                    kill: ci,
                    modifier: li,
                    rawVars: 0
                }
                , a = {
                    targetTest: 0,
                    get: 0,
                    getSetter: ii,
                    aliases: {},
                    register: 0
                };
            if (Ln(),
                t !== i) {
                if (de[e])
                    return;
                Ce(i, Ce(Pe(t, r), a)),
                    Ae(i.prototype, Ae(r, Pe(t, a))),
                    de[i.prop = e] = i,
                    t.targetTest && (me.push(i),
                        ce[e] = 1),
                    e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
            }
            se(e, i),
                t.register && t.register(gi, i, di)
        }, xn = 255, yn = {
            aqua: [0, xn, xn],
            lime: [0, xn, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, xn],
            navy: [0, 0, 128],
            white: [xn, xn, xn],
            olive: [128, 128, 0],
            yellow: [xn, xn, 0],
            orange: [xn, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [xn, 0, 0],
            pink: [xn, 192, 203],
            cyan: [0, xn, xn],
            transparent: [xn, xn, xn, 0]
        }, bn = function (t, e, n) {
            return (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (n - e) * t * 6 : t < .5 ? n : 3 * t < 2 ? e + (n - e) * (2 / 3 - t) * 6 : e) * xn + .5 | 0
        }, wn = function (t, e, n) {
            var i, r, a, o, s, l, c, u, h, d, p = t ? Ut(t) ? [t >> 16, t >> 8 & xn, t & xn] : 0 : yn.black;
            if (!p) {
                if ("," === t.substr(-1) && (t = t.substr(0, t.length - 1)),
                    yn[t])
                    p = yn[t];
                else if ("#" === t.charAt(0)) {
                    if (t.length < 6 && (i = t.charAt(1),
                        r = t.charAt(2),
                        a = t.charAt(3),
                        t = "#" + i + i + r + r + a + a + (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
                        9 === t.length)
                        return [(p = parseInt(t.substr(1, 6), 16)) >> 16, p >> 8 & xn, p & xn, parseInt(t.substr(7), 16) / 255];
                    p = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & xn, t & xn]
                } else if ("hsl" === t.substr(0, 3))
                    if (p = d = t.match(Zt),
                        e) {
                        if (~t.indexOf("="))
                            return p = t.match(Jt),
                                n && p.length < 4 && (p[3] = 1),
                                p
                    } else
                        o = +p[0] % 360 / 360,
                            s = +p[1] / 100,
                            i = 2 * (l = +p[2] / 100) - (r = l <= .5 ? l * (s + 1) : l + s - l * s),
                            p.length > 3 && (p[3] *= 1),
                            p[0] = bn(o + 1 / 3, i, r),
                            p[1] = bn(o, i, r),
                            p[2] = bn(o - 1 / 3, i, r);
                else
                    p = t.match(Zt) || yn.transparent;
                p = p.map(Number)
            }
            return e && !d && (i = p[0] / xn,
                r = p[1] / xn,
                a = p[2] / xn,
                l = ((c = Math.max(i, r, a)) + (u = Math.min(i, r, a))) / 2,
                c === u ? o = s = 0 : (h = c - u,
                    s = l > .5 ? h / (2 - c - u) : h / (c + u),
                    o = c === i ? (r - a) / h + (r < a ? 6 : 0) : c === r ? (a - i) / h + 2 : (i - r) / h + 4,
                    o *= 60),
                p[0] = ~~(o + .5),
                p[1] = ~~(100 * s + .5),
                p[2] = ~~(100 * l + .5)),
                n && p.length < 4 && (p[3] = 1),
                p
        }, Mn = function (t) {
            var e = []
                , n = []
                , i = -1;
            return t.split(En).forEach((function (t) {
                var r = t.match(Qt) || [];
                e.push.apply(e, r),
                    n.push(i += r.length + 1)
            }
            )),
                e.c = n,
                e
        }, Dn = function (t, e, n) {
            var i, r, a, o, s = "", l = (t + s).match(En), c = e ? "hsla(" : "rgba(", u = 0;
            if (!l)
                return t;
            if (l = l.map((function (t) {
                return (t = wn(t, e, 1)) && c + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }
            )),
                n && (a = Mn(t),
                    (i = n.c).join(s) !== a.c.join(s)))
                for (o = (r = t.replace(En, "1").split(Qt)).length - 1; u < o; u++)
                    s += r[u] + (~i.indexOf(u) ? l.shift() || c + "0,0,0,0)" : (a.length ? a : l.length ? l : n).shift());
            if (!r)
                for (o = (r = t.split(En)).length - 1; u < o; u++)
                    s += r[u] + l[u];
            return s + r[o]
        }, En = function () {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in yn)
                e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(), Tn = /hsl[a]?\(/, Sn = function (t) {
            var e, n = t.join(" ");
            if (En.lastIndex = 0,
                En.test(n))
                return e = Tn.test(n),
                    t[1] = Dn(t[1], e),
                    t[0] = Dn(t[0], e, Mn(t[1])),
                    !0
        }, Cn = function () {
            var t, e, n, i, r, a, o = Date.now, s = 500, l = 33, c = o(), u = c, h = 1e3 / 240, d = h, p = [], f = function n(f) {
                var m, g, v, _, x = o() - u, y = !0 === f;
                if (x > s && (c += x - l),
                    ((m = (v = (u += x) - c) - d) > 0 || y) && (_ = ++i.frame,
                        r = v - 1e3 * i.time,
                        i.time = v /= 1e3,
                        d += m + (m >= h ? 4 : h - m),
                        g = 1),
                    y || (t = e(n)),
                    g)
                    for (a = 0; a < p.length; a++)
                        p[a](v, r, _, f)
            };
            return i = {
                time: 0,
                frame: 0,
                tick: function () {
                    f(!0)
                },
                deltaRatio: function (t) {
                    return r / (1e3 / (t || 60))
                },
                wake: function () {
                    bt && (!xt && jt() && (_t = xt = window,
                        yt = _t.document || {},
                        ne.gsap = gi,
                        (_t.gsapVersions || (_t.gsapVersions = [])).push(gi.version),
                        re(ie || _t.GreenSockGlobals || !_t.gsap && _t || {}),
                        n = _t.requestAnimationFrame),
                        t && i.sleep(),
                        e = n || function (t) {
                            return setTimeout(t, d - 1e3 * i.time + 1 | 0)
                        }
                        ,
                        Dt = 1,
                        f(2))
                },
                sleep: function () {
                    (n ? _t.cancelAnimationFrame : clearTimeout)(t),
                        Dt = 0,
                        e = le
                },
                lagSmoothing: function (t, e) {
                    s = t || 1e8,
                        l = Math.min(e, s, 0)
                },
                fps: function (t) {
                    h = 1e3 / (t || 240),
                        d = 1e3 * i.time + h
                },
                add: function (t) {
                    p.indexOf(t) < 0 && p.push(t),
                        Ln()
                },
                remove: function (t) {
                    var e;
                    ~(e = p.indexOf(t)) && p.splice(e, 1) && a >= e && a--
                },
                _listeners: p
            }
        }(), Ln = function () {
            return !Dt && Cn.wake()
        }, An = {}, Rn = /^[\d.\-M][\d.\-,\s]/, Pn = /["']/g, Fn = function (t) {
            for (var e, n, i, r = {}, a = t.substr(1, t.length - 3).split(":"), o = a[0], s = 1, l = a.length; s < l; s++)
                n = a[s],
                    e = s !== l - 1 ? n.lastIndexOf(",") : n.length,
                    i = n.substr(0, e),
                    r[o] = isNaN(i) ? i.replace(Pn, "").trim() : +i,
                    o = n.substr(e + 1).trim();
            return r
        }, On = function (t) {
            return function (e) {
                return 1 - t(1 - e)
            }
        }, In = function t(e, n) {
            for (var i, r = e._first; r;)
                r instanceof Wn ? t(r, n) : !r.vars.yoyoEase || r._yoyo && r._repeat || r._yoyo === n || (r.timeline ? t(r.timeline, n) : (i = r._ease,
                    r._ease = r._yEase,
                    r._yEase = i,
                    r._yoyo = n)),
                    r = r._next
        }, Nn = function (t, e) {
            return t && (kt(t) ? t : An[t] || function (t) {
                var e, n, i, r, a = (t + "").split("("), o = An[a[0]];
                return o && a.length > 1 && o.config ? o.config.apply(null, ~t.indexOf("{") ? [Fn(a[1])] : (e = t,
                    n = e.indexOf("(") + 1,
                    i = e.indexOf(")"),
                    r = e.indexOf("(", n),
                    e.substring(n, ~r && r < i ? e.indexOf(")", i + 1) : i)).split(",").map(Te)) : An._CE && Rn.test(t) ? An._CE("", t) : o
            }(t)) || e
        }, zn = function (t, e, n, i) {
            void 0 === n && (n = function (t) {
                return 1 - e(1 - t)
            }
            ),
                void 0 === i && (i = function (t) {
                    return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
                }
                );
            var r, a = {
                easeIn: e,
                easeOut: n,
                easeInOut: i
            };
            return ye(t, (function (t) {
                for (var e in An[t] = ne[t] = a,
                    An[r = t.toLowerCase()] = n,
                    a)
                    An[r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = An[t + "." + e] = a[e]
            }
            )),
                a
        }, Bn = function (t) {
            return function (e) {
                return e < .5 ? (1 - t(1 - 2 * e)) / 2 : .5 + t(2 * (e - .5)) / 2
            }
        }, Hn = function t(e, n, i) {
            var r = n >= 1 ? n : 1
                , a = (i || (e ? .3 : .45)) / (n < 1 ? n : 1)
                , o = a / Ft * (Math.asin(1 / r) || 0)
                , s = function (t) {
                    return 1 === t ? 1 : r * Math.pow(2, -10 * t) * Bt((t - o) * a) + 1
                }
                , l = "out" === e ? s : "in" === e ? function (t) {
                    return 1 - s(1 - t)
                }
                    : Bn(s);
            return a = Ft / a,
                l.config = function (n, i) {
                    return t(e, n, i)
                }
                ,
                l
        }, kn = function t(e, n) {
            void 0 === n && (n = 1.70158);
            var i = function (t) {
                return t ? --t * t * ((n + 1) * t + n) + 1 : 0
            }
                , r = "out" === e ? i : "in" === e ? function (t) {
                    return 1 - i(1 - t)
                }
                    : Bn(i);
            return r.config = function (n) {
                return t(e, n)
            }
                ,
                r
        };
    ye("Linear,Quad,Cubic,Quart,Quint,Strong", (function (t, e) {
        var n = e < 5 ? e + 1 : e;
        zn(t + ",Power" + (n - 1), e ? function (t) {
            return Math.pow(t, n)
        }
            : function (t) {
                return t
            }
            , (function (t) {
                return 1 - Math.pow(1 - t, n)
            }
            ), (function (t) {
                return t < .5 ? Math.pow(2 * t, n) / 2 : 1 - Math.pow(2 * (1 - t), n) / 2
            }
        ))
    }
    )),
        An.Linear.easeNone = An.none = An.Linear.easeIn,
        zn("Elastic", Hn("in"), Hn("out"), Hn()),
        Et = 7.5625,
        St = 1 / (Tt = 2.75),
        zn("Bounce", (function (t) {
            return 1 - Ct(1 - t)
        }
        ), Ct = function (t) {
            return t < St ? Et * t * t : t < .7272727272727273 ? Et * Math.pow(t - 1.5 / Tt, 2) + .75 : t < .9090909090909092 ? Et * (t -= 2.25 / Tt) * t + .9375 : Et * Math.pow(t - 2.625 / Tt, 2) + .984375
        }
        ),
        zn("Expo", (function (t) {
            return t ? Math.pow(2, 10 * (t - 1)) : 0
        }
        )),
        zn("Circ", (function (t) {
            return -(Nt(1 - t * t) - 1)
        }
        )),
        zn("Sine", (function (t) {
            return 1 === t ? 1 : 1 - zt(t * Ot)
        }
        )),
        zn("Back", kn("in"), kn("out"), kn()),
        An.SteppedEase = An.steps = ne.SteppedEase = {
            config: function (t, e) {
                void 0 === t && (t = 1);
                var n = 1 / t
                    , i = t + (e ? 0 : 1)
                    , r = e ? 1 : 0;
                return function (t) {
                    return ((i * tn(0, .99999999, t) | 0) + r) * n
                }
            }
        },
        At.ease = An["quad.out"],
        ye("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", (function (t) {
            return ge += t + "," + t + "Params,"
        }
        ));
    var Un = function (t, e) {
        this.id = It++,
            t._gsap = this,
            this.target = t,
            this.harness = e,
            this.get = e ? e.get : xe,
            this.set = e ? e.getSetter : ii
    }
        , Gn = function () {
            function t(t, e) {
                var n = t.parent || vt;
                this.vars = t,
                    this._delay = +t.delay || 0,
                    (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0,
                        this._yoyo = !!t.yoyo || !!t.yoyoEase),
                    this._ts = 1,
                    Ze(this, +t.duration, 1, 1),
                    this.data = t.data,
                    Dt || Cn.wake(),
                    n && je(n, this, e || 0 === e ? e : n._time, 1),
                    t.reversed && this.reverse(),
                    t.paused && this.paused(!0)
            }
            var e = t.prototype;
            return e.delay = function (t) {
                return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
                    this._delay = t,
                    this) : this._delay
            }
                ,
                e.duration = function (t) {
                    return arguments.length ? this.totalDuration(this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
                }
                ,
                e.totalDuration = function (t) {
                    return arguments.length ? (this._dirty = 0,
                        Ze(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
                }
                ,
                e.totalTime = function (t, e) {
                    if (Ln(),
                        !arguments.length)
                        return this._tTime;
                    var n = this._dp;
                    if (n && n.smoothChildTiming && this._ts) {
                        for (We(this, t),
                            !n._dp || n.parent || Ve(n, this); n.parent;)
                            n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0),
                                n = n.parent;
                        !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && t < this._tDur || this._ts < 0 && t > 0 || !this._tDur && !t) && je(this._dp, this, this._start - this._delay)
                    }
                    return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === Pt || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t),
                        Ee(this, t, e)),
                        this
                }
                ,
                e.time = function (t, e) {
                    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + He(this)) % this._dur || (t ? this._dur : 0), e) : this._time
                }
                ,
                e.totalProgress = function (t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
                }
                ,
                e.progress = function (t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + He(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
                }
                ,
                e.iteration = function (t, e) {
                    var n = this.duration() + this._rDelay;
                    return arguments.length ? this.totalTime(this._time + (t - 1) * n, e) : this._repeat ? ke(this._tTime, n) + 1 : 1
                }
                ,
                e.timeScale = function (t) {
                    if (!arguments.length)
                        return -1e-8 === this._rts ? 0 : this._rts;
                    if (this._rts === t)
                        return this;
                    var e = this.parent && this._ts ? Ue(this.parent._time, this) : this._tTime;
                    return this._rts = +t || 0,
                        this._ts = this._ps || -1e-8 === t ? 0 : this._rts,
                        ze(this.totalTime(tn(-this._delay, this._tDur, e), !0))
                }
                ,
                e.paused = function (t) {
                    return arguments.length ? (this._ps !== t && (this._ps = t,
                        t ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
                            this._ts = this._act = 0) : (Ln(),
                                this._ts = this._rts,
                                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && (this._tTime -= Pt) && Math.abs(this._zTime) !== Pt))),
                        this) : this._ps
                }
                ,
                e.startTime = function (t) {
                    if (arguments.length) {
                        this._start = t;
                        var e = this.parent || this._dp;
                        return e && (e._sort || !this.parent) && je(e, this, t - this._delay),
                            this
                    }
                    return this._start
                }
                ,
                e.endTime = function (t) {
                    return this._start + (Vt(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts)
                }
                ,
                e.rawTime = function (t) {
                    var e = this.parent || this._dp;
                    return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ue(e.rawTime(t), this) : this._tTime : this._tTime
                }
                ,
                e.globalTime = function (t) {
                    for (var e = this, n = arguments.length ? t : e.rawTime(); e;)
                        n = e._start + n / (e._ts || 1),
                            e = e._dp;
                    return n
                }
                ,
                e.repeat = function (t) {
                    return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t,
                        Je(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
                }
                ,
                e.repeatDelay = function (t) {
                    return arguments.length ? (this._rDelay = t,
                        Je(this)) : this._rDelay
                }
                ,
                e.yoyo = function (t) {
                    return arguments.length ? (this._yoyo = t,
                        this) : this._yoyo
                }
                ,
                e.seek = function (t, e) {
                    return this.totalTime(Ke(this, t), Vt(e))
                }
                ,
                e.restart = function (t, e) {
                    return this.play().totalTime(t ? -this._delay : 0, Vt(e))
                }
                ,
                e.play = function (t, e) {
                    return null != t && this.seek(t, e),
                        this.reversed(!1).paused(!1)
                }
                ,
                e.reverse = function (t, e) {
                    return null != t && this.seek(t || this.totalDuration(), e),
                        this.reversed(!0).paused(!1)
                }
                ,
                e.pause = function (t, e) {
                    return null != t && this.seek(t, e),
                        this.paused(!0)
                }
                ,
                e.resume = function () {
                    return this.paused(!1)
                }
                ,
                e.reversed = function (t) {
                    return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -1e-8 : 0)),
                        this) : this._rts < 0
                }
                ,
                e.invalidate = function () {
                    return this._initted = this._act = 0,
                        this._zTime = -1e-8,
                        this
                }
                ,
                e.isActive = function () {
                    var t, e = this.parent || this._dp, n = this._start;
                    return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= n && t < this.endTime(!0) - Pt))
                }
                ,
                e.eventCallback = function (t, e, n) {
                    var i = this.vars;
                    return arguments.length > 1 ? (e ? (i[t] = e,
                        n && (i[t + "Params"] = n),
                        "onUpdate" === t && (this._onUpdate = e)) : delete i[t],
                        this) : i[t]
                }
                ,
                e.then = function (t) {
                    var e = this;
                    return new Promise((function (n) {
                        var i = kt(t) ? t : Se
                            , r = function () {
                                var t = e.then;
                                e.then = null,
                                    kt(i) && (i = i(e)) && (i.then || i === e) && (e.then = t),
                                    n(i),
                                    e.then = t
                            };
                        e._initted && 1 === e.totalProgress() && e._ts >= 0 || !e._tTime && e._ts < 0 ? r() : e._prom = r
                    }
                    ))
                }
                ,
                e.kill = function () {
                    vn(this)
                }
                ,
                t
        }();
    Ce(Gn.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -1e-8,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Wn = function (t) {
        function e(e, n) {
            var i;
            return void 0 === e && (e = {}),
                (i = t.call(this, e, n) || this).labels = {},
                i.smoothChildTiming = !!e.smoothChildTiming,
                i.autoRemoveChildren = !!e.autoRemoveChildren,
                i._sort = Vt(e.sortChildren),
                i.parent && Ve(i.parent, ft(i)),
                e.scrollTrigger && qe(ft(i), e.scrollTrigger),
                i
        }
        mt(e, t);
        var n = e.prototype;
        return n.to = function (t, e, n) {
            return new Kn(t, Me(arguments, 0, this), Ke(this, Ut(e) ? arguments[3] : n)),
                this
        }
            ,
            n.from = function (t, e, n) {
                return new Kn(t, Me(arguments, 1, this), Ke(this, Ut(e) ? arguments[3] : n)),
                    this
            }
            ,
            n.fromTo = function (t, e, n, i) {
                return new Kn(t, Me(arguments, 2, this), Ke(this, Ut(e) ? arguments[4] : i)),
                    this
            }
            ,
            n.set = function (t, e, n) {
                return e.duration = 0,
                    e.parent = this,
                    Fe(e).repeatDelay || (e.repeat = 0),
                    e.immediateRender = !!e.immediateRender,
                    new Kn(t, e, Ke(this, n), 1),
                    this
            }
            ,
            n.call = function (t, e, n) {
                return je(this, Kn.delayedCall(0, t, e), Ke(this, n))
            }
            ,
            n.staggerTo = function (t, e, n, i, r, a, o) {
                return n.duration = e,
                    n.stagger = n.stagger || i,
                    n.onComplete = a,
                    n.onCompleteParams = o,
                    n.parent = this,
                    new Kn(t, n, Ke(this, r)),
                    this
            }
            ,
            n.staggerFrom = function (t, e, n, i, r, a, o) {
                return n.runBackwards = 1,
                    Fe(n).immediateRender = Vt(n.immediateRender),
                    this.staggerTo(t, e, n, i, r, a, o)
            }
            ,
            n.staggerFromTo = function (t, e, n, i, r, a, o, s) {
                return i.startAt = n,
                    Fe(i).immediateRender = Vt(i.immediateRender),
                    this.staggerTo(t, e, i, r, a, o, s)
            }
            ,
            n.render = function (t, e, n) {
                var i, r, a, o, s, l, c, u, h, d, p, f, m = this._time, g = this._dirty ? this.totalDuration() : this._tDur, v = this._dur, _ = this !== vt && t > g - Pt && t >= 0 ? g : t < Pt ? 0 : t, x = this._zTime < 0 != t < 0 && (this._initted || !v);
                if (_ !== this._tTime || n || x) {
                    if (m !== this._time && v && (_ += this._time - m,
                        t += this._time - m),
                        i = _,
                        h = this._start,
                        l = !(u = this._ts),
                        x && (v || (m = this._zTime),
                            (t || !e) && (this._zTime = t)),
                        this._repeat) {
                        if (p = this._yoyo,
                            s = v + this._rDelay,
                            this._repeat < -1 && t < 0)
                            return this.totalTime(100 * s + t, e, n);
                        if (i = be(_ % s),
                            _ === g ? (o = this._repeat,
                                i = v) : ((o = ~~(_ / s)) && o === _ / s && (i = v,
                                    o--),
                                    i > v && (i = v)),
                            d = ke(this._tTime, s),
                            !m && this._tTime && d !== o && (d = o),
                            p && 1 & o && (i = v - i,
                                f = 1),
                            o !== d && !this._lock) {
                            var y = p && 1 & d
                                , b = y === (p && 1 & o);
                            if (o < d && (y = !y),
                                m = y ? 0 : v,
                                this._lock = 1,
                                this.render(m || (f ? 0 : be(o * s)), e, !v)._lock = 0,
                                !e && this.parent && gn(this, "onRepeat"),
                                this.vars.repeatRefresh && !f && (this.invalidate()._lock = 1),
                                m && m !== this._time || l !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                                return this;
                            if (v = this._dur,
                                g = this._tDur,
                                b && (this._lock = 2,
                                    m = y ? v : -1e-4,
                                    this.render(m, !0)),
                                this._lock = 0,
                                !this._ts && !l)
                                return this;
                            In(this, f)
                        }
                    }
                    if (this._hasPause && !this._forcing && this._lock < 2 && (c = function (t, e, n) {
                        var i;
                        if (n > e)
                            for (i = t._first; i && i._start <= n;) {
                                if (!i._dur && "isPause" === i.data && i._start > e)
                                    return i;
                                i = i._next
                            }
                        else
                            for (i = t._last; i && i._start >= n;) {
                                if (!i._dur && "isPause" === i.data && i._start < e)
                                    return i;
                                i = i._prev
                            }
                    }(this, be(m), be(i))) && (_ -= i - (i = c._start)),
                        this._tTime = _,
                        this._time = i,
                        this._act = !u,
                        this._initted || (this._onUpdate = this.vars.onUpdate,
                            this._initted = 1,
                            this._zTime = t,
                            m = 0),
                        !m && i && !e && gn(this, "onStart"),
                        i >= m && t >= 0)
                        for (r = this._first; r;) {
                            if (a = r._next,
                                (r._act || i >= r._start) && r._ts && c !== r) {
                                if (r.parent !== this)
                                    return this.render(t, e, n);
                                if (r.render(r._ts > 0 ? (i - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (i - r._start) * r._ts, e, n),
                                    i !== this._time || !this._ts && !l) {
                                    c = 0,
                                        a && (_ += this._zTime = -1e-8);
                                    break
                                }
                            }
                            r = a
                        }
                    else {
                        r = this._last;
                        for (var w = t < 0 ? t : i; r;) {
                            if (a = r._prev,
                                (r._act || w <= r._end) && r._ts && c !== r) {
                                if (r.parent !== this)
                                    return this.render(t, e, n);
                                if (r.render(r._ts > 0 ? (w - r._start) * r._ts : (r._dirty ? r.totalDuration() : r._tDur) + (w - r._start) * r._ts, e, n),
                                    i !== this._time || !this._ts && !l) {
                                    c = 0,
                                        a && (_ += this._zTime = w ? -1e-8 : Pt);
                                    break
                                }
                            }
                            r = a
                        }
                    }
                    if (c && !e && (this.pause(),
                        c.render(i >= m ? 0 : -1e-8)._zTime = i >= m ? 1 : -1,
                        this._ts))
                        return this._start = h,
                            Ge(this),
                            this.render(t, e, n);
                    this._onUpdate && !e && gn(this, "onUpdate", !0),
                        (_ === g && g >= this.totalDuration() || !_ && m) && (h !== this._start && Math.abs(u) === Math.abs(this._ts) || this._lock || ((t || !v) && (_ === g && this._ts > 0 || !_ && this._ts < 0) && Ie(this, 1),
                            e || t < 0 && !m || !_ && !m || (gn(this, _ === g ? "onComplete" : "onReverseComplete", !0),
                                this._prom && !(_ < g && this.timeScale() > 0) && this._prom())))
                }
                return this
            }
            ,
            n.add = function (t, e) {
                var n = this;
                if (Ut(e) || (e = Ke(this, e)),
                    !(t instanceof Gn)) {
                    if (Yt(t))
                        return t.forEach((function (t) {
                            return n.add(t, e)
                        }
                        )),
                            this;
                    if (Ht(t))
                        return this.addLabel(t, e);
                    if (!kt(t))
                        return this;
                    t = Kn.delayedCall(0, t)
                }
                return this !== t ? je(this, t, e) : this
            }
            ,
            n.getChildren = function (t, e, n, i) {
                void 0 === t && (t = !0),
                    void 0 === e && (e = !0),
                    void 0 === n && (n = !0),
                    void 0 === i && (i = -1e8);
                for (var r = [], a = this._first; a;)
                    a._start >= i && (a instanceof Kn ? e && r.push(a) : (n && r.push(a),
                        t && r.push.apply(r, a.getChildren(!0, e, n)))),
                        a = a._next;
                return r
            }
            ,
            n.getById = function (t) {
                for (var e = this.getChildren(1, 1, 1), n = e.length; n--;)
                    if (e[n].vars.id === t)
                        return e[n]
            }
            ,
            n.remove = function (t) {
                return Ht(t) ? this.removeLabel(t) : kt(t) ? this.killTweensOf(t) : (Oe(this, t),
                    t === this._recent && (this._recent = this._last),
                    Ne(this))
            }
            ,
            n.totalTime = function (e, n) {
                return arguments.length ? (this._forcing = 1,
                    !this._dp && this._ts && (this._start = be(Cn.time - (this._ts > 0 ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
                    t.prototype.totalTime.call(this, e, n),
                    this._forcing = 0,
                    this) : this._tTime
            }
            ,
            n.addLabel = function (t, e) {
                return this.labels[t] = Ke(this, e),
                    this
            }
            ,
            n.removeLabel = function (t) {
                return delete this.labels[t],
                    this
            }
            ,
            n.addPause = function (t, e, n) {
                var i = Kn.delayedCall(0, e || le, n);
                return i.data = "isPause",
                    this._hasPause = 1,
                    je(this, i, Ke(this, t))
            }
            ,
            n.removePause = function (t) {
                var e = this._first;
                for (t = Ke(this, t); e;)
                    e._start === t && "isPause" === e.data && Ie(e),
                        e = e._next
            }
            ,
            n.killTweensOf = function (t, e, n) {
                for (var i = this.getTweensOf(t, n), r = i.length; r--;)
                    Vn !== i[r] && i[r].kill(t, e);
                return this
            }
            ,
            n.getTweensOf = function (t, e) {
                for (var n, i = [], r = on(t), a = this._first, o = Ut(e); a;)
                    a instanceof Kn ? we(a._targets, r) && (o ? (!Vn || a._initted && a._ts) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e : !e || a.isActive()) && i.push(a) : (n = a.getTweensOf(r, e)).length && i.push.apply(i, n),
                        a = a._next;
                return i
            }
            ,
            n.tweenTo = function (t, e) {
                e = e || {};
                var n = this
                    , i = Ke(n, t)
                    , r = e
                    , a = r.startAt
                    , o = r.onStart
                    , s = r.onStartParams
                    , l = r.immediateRender
                    , c = Kn.to(n, Ce({
                        ease: e.ease || "none",
                        lazy: !1,
                        immediateRender: !1,
                        time: i,
                        overwrite: "auto",
                        duration: e.duration || Math.abs((i - (a && "time" in a ? a.time : n._time)) / n.timeScale()) || Pt,
                        onStart: function () {
                            n.pause();
                            var t = e.duration || Math.abs((i - n._time) / n.timeScale());
                            c._dur !== t && Ze(c, t, 0, 1).render(c._time, !0, !0),
                                o && o.apply(c, s || [])
                        }
                    }, e));
                return l ? c.render(0) : c
            }
            ,
            n.tweenFromTo = function (t, e, n) {
                return this.tweenTo(e, Ce({
                    startAt: {
                        time: Ke(this, t)
                    }
                }, n))
            }
            ,
            n.recent = function () {
                return this._recent
            }
            ,
            n.nextLabel = function (t) {
                return void 0 === t && (t = this._time),
                    mn(this, Ke(this, t))
            }
            ,
            n.previousLabel = function (t) {
                return void 0 === t && (t = this._time),
                    mn(this, Ke(this, t), 1)
            }
            ,
            n.currentLabel = function (t) {
                return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Pt)
            }
            ,
            n.shiftChildren = function (t, e, n) {
                void 0 === n && (n = 0);
                for (var i, r = this._first, a = this.labels; r;)
                    r._start >= n && (r._start += t,
                        r._end += t),
                        r = r._next;
                if (e)
                    for (i in a)
                        a[i] >= n && (a[i] += t);
                return Ne(this)
            }
            ,
            n.invalidate = function () {
                var e = this._first;
                for (this._lock = 0; e;)
                    e.invalidate(),
                        e = e._next;
                return t.prototype.invalidate.call(this)
            }
            ,
            n.clear = function (t) {
                void 0 === t && (t = !0);
                for (var e, n = this._first; n;)
                    e = n._next,
                        this.remove(n),
                        n = e;
                return this._dp && (this._time = this._tTime = this._pTime = 0),
                    t && (this.labels = {}),
                    Ne(this)
            }
            ,
            n.totalDuration = function (t) {
                var e, n, i, r = 0, a = this, o = a._last, s = Rt;
                if (arguments.length)
                    return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
                if (a._dirty) {
                    for (i = a.parent; o;)
                        e = o._prev,
                            o._dirty && o.totalDuration(),
                            (n = o._start) > s && a._sort && o._ts && !a._lock ? (a._lock = 1,
                                je(a, o, n - o._delay, 1)._lock = 0) : s = n,
                            n < 0 && o._ts && (r -= n,
                                (!i && !a._dp || i && i.smoothChildTiming) && (a._start += n / a._ts,
                                    a._time -= n,
                                    a._tTime -= n),
                                a.shiftChildren(-n, !1, -Infinity),
                                s = 0),
                            o._end > r && o._ts && (r = o._end),
                            o = e;
                    Ze(a, a === vt && a._time > r ? a._time : r, 1, 1),
                        a._dirty = 0
                }
                return a._tDur
            }
            ,
            e.updateRoot = function (t) {
                if (vt._ts && (Ee(vt, Ue(t, vt)),
                    wt = Cn.frame),
                    Cn.frame >= fe) {
                    fe += Lt.autoSleep || 120;
                    var e = vt._first;
                    if ((!e || !e._ts) && Lt.autoSleep && Cn._listeners.length < 2) {
                        for (; e && !e._ts;)
                            e = e._next;
                        e || Cn.sleep()
                    }
                }
            }
            ,
            e
    }(Gn);
    Ce(Wn.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });
    var Vn, jn = function (t, e, n, i, r, a, o) {
        var s, l, c, u, h, d, p, f, m = new di(this._pt, t, e, 0, 1, oi, null, r), g = 0, v = 0;
        for (m.b = n,
            m.e = i,
            n += "",
            (p = ~(i += "").indexOf("random(")) && (i = pn(i)),
            a && (a(f = [n, i], t, e),
                n = f[0],
                i = f[1]),
            l = n.match(Kt) || []; s = Kt.exec(i);)
            u = s[0],
                h = i.substring(g, s.index),
                c ? c = (c + 1) % 5 : "rgba(" === h.substr(-5) && (c = 1),
                u !== l[v++] && (d = parseFloat(l[v - 1]) || 0,
                    m._pt = {
                        _next: m._pt,
                        p: h || 1 === v ? h : ",",
                        s: d,
                        c: "=" === u.charAt(1) ? parseFloat(u.substr(2)) * ("-" === u.charAt(0) ? -1 : 1) : parseFloat(u) - d,
                        m: c && c < 4 ? Math.round : 0
                    },
                    g = Kt.lastIndex);
        return m.c = g < i.length ? i.substring(g, i.length) : "",
            m.fp = o,
            ($t.test(i) || p) && (m.e = 0),
            this._pt = m,
            m
    }, qn = function (t, e, n, i, r, a, o, s, l) {
        kt(i) && (i = i(r || 0, t, a));
        var c, u = t[e], h = "get" !== n ? n : kt(u) ? l ? t[e.indexOf("set") || !kt(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : u, d = kt(u) ? l ? ei : ti : $n;
        if (Ht(i) && (~i.indexOf("random(") && (i = pn(i)),
            "=" === i.charAt(1) && (i = parseFloat(h) + parseFloat(i.substr(2)) * ("-" === i.charAt(0) ? -1 : 1) + (en(h) || 0))),
            h !== i)
            return isNaN(h * i) ? (!u && !(e in t) && ae(e, i),
                jn.call(this, t, e, h, i, d, s || Lt.stringFilter, l)) : (c = new di(this._pt, t, e, +h || 0, i - (h || 0), "boolean" == typeof u ? ai : ri, 0, d),
                    l && (c.fp = l),
                    o && c.modifier(o, this, t),
                    this._pt = c)
    }, Xn = function (t, e, n, i, r, a) {
        var o, s, l, c;
        if (de[t] && !1 !== (o = new de[t]).init(r, o.rawVars ? e[t] : function (t, e, n, i, r) {
            if (kt(t) && (t = Zn(t, r, e, n, i)),
                !Wt(t) || t.style && t.nodeType || Yt(t) || Xt(t))
                return Ht(t) ? Zn(t, r, e, n, i) : t;
            var a, o = {};
            for (a in t)
                o[a] = Zn(t[a], r, e, n, i);
            return o
        }(e[t], i, r, a, n), n, i, a) && (n._pt = s = new di(n._pt, r, t, 0, 1, o.render, o, 0, o.priority),
            n !== Mt))
            for (l = n._ptLookup[n._targets.indexOf(r)],
                c = o._props.length; c--;)
                l[o._props[c]] = s;
        return o
    }, Yn = function t(e, n) {
        var i, r, a, o, s, l, c, u, h, d, p, f, m, g = e.vars, v = g.ease, _ = g.startAt, x = g.immediateRender, y = g.lazy, b = g.onUpdate, w = g.onUpdateParams, M = g.callbackScope, D = g.runBackwards, E = g.yoyoEase, T = g.keyframes, S = g.autoRevert, C = e._dur, L = e._startAt, A = e._targets, R = e.parent, P = R && "nested" === R.data ? R.parent._targets : A, F = "auto" === e._overwrite && !gt, O = e.timeline;
        if (O && (!T || !v) && (v = "none"),
            e._ease = Nn(v, At.ease),
            e._yEase = E ? On(Nn(!0 === E ? v : E, At.ease)) : 0,
            E && e._yoyo && !e._repeat && (E = e._yEase,
                e._yEase = e._ease,
                e._ease = E),
            !O) {
            if (f = (u = A[0] ? _e(A[0]).harness : 0) && g[u.prop],
                i = Pe(g, ce),
                L && L.render(-1, !0).kill(),
                _)
                if (Ie(e._startAt = Kn.set(A, Ce({
                    data: "isStart",
                    overwrite: !1,
                    parent: R,
                    immediateRender: !0,
                    lazy: Vt(y),
                    startAt: null,
                    delay: 0,
                    onUpdate: b,
                    onUpdateParams: w,
                    callbackScope: M,
                    stagger: 0
                }, _))),
                    x) {
                    if (n > 0)
                        S || (e._startAt = 0);
                    else if (C && !(n < 0 && L))
                        return void (n && (e._zTime = n))
                } else
                    !1 === S && (e._startAt = 0);
            else if (D && C)
                if (L)
                    !S && (e._startAt = 0);
                else if (n && (x = !1),
                    a = Ce({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: x && Vt(y),
                        immediateRender: x,
                        stagger: 0,
                        parent: R
                    }, i),
                    f && (a[u.prop] = f),
                    Ie(e._startAt = Kn.set(A, a)),
                    x) {
                    if (!n)
                        return
                } else
                    t(e._startAt, Pt);
            for (e._pt = 0,
                y = C && Vt(y) || y && !C,
                r = 0; r < A.length; r++) {
                if (c = (s = A[r])._gsap || ve(A)[r]._gsap,
                    e._ptLookup[r] = d = {},
                    he[c.id] && ue.length && De(),
                    p = P === A ? r : P.indexOf(s),
                    u && !1 !== (h = new u).init(s, f || i, e, p, P) && (e._pt = o = new di(e._pt, s, h.name, 0, 1, h.render, h, 0, h.priority),
                        h._props.forEach((function (t) {
                            d[t] = o
                        }
                        )),
                        h.priority && (l = 1)),
                    !u || f)
                    for (a in i)
                        de[a] && (h = Xn(a, i, e, p, s, P)) ? h.priority && (l = 1) : d[a] = o = qn.call(e, s, a, "get", i[a], p, P, 0, g.stringFilter);
                e._op && e._op[r] && e.kill(s, e._op[r]),
                    F && e._pt && (Vn = e,
                        vt.killTweensOf(s, d, e.globalTime(0)),
                        m = !e.parent,
                        Vn = 0),
                    e._pt && y && (he[c.id] = 1)
            }
            l && hi(e),
                e._onInit && e._onInit(e)
        }
        e._from = !O && !!g.runBackwards,
            e._onUpdate = b,
            e._initted = (!e._op || e._pt) && !m
    }, Zn = function (t, e, n, i, r) {
        return kt(t) ? t.call(e, n, i, r) : Ht(t) && ~t.indexOf("random(") ? pn(t) : t
    }, Jn = ge + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", Qn = (Jn + ",id,stagger,delay,duration,paused,scrollTrigger").split(","), Kn = function (t) {
        function e(e, n, i, r) {
            var a;
            "number" == typeof n && (i.duration = n,
                n = i,
                i = null);
            var o, s, l, c, u, h, d, p, f = (a = t.call(this, r ? n : Fe(n), i) || this).vars, m = f.duration, g = f.delay, v = f.immediateRender, _ = f.stagger, x = f.overwrite, y = f.keyframes, b = f.defaults, w = f.scrollTrigger, M = f.yoyoEase, D = a.parent, E = (Yt(e) || Xt(e) ? Ut(e[0]) : "length" in n) ? [e] : on(e);
            if (a._targets = E.length ? ve(E) : oe("GSAP target " + e + " not found. https://greensock.com", !Lt.nullTargetWarn) || [],
                a._ptLookup = [],
                a._overwrite = x,
                y || _ || qt(m) || qt(g)) {
                if (n = a.vars,
                    (o = a.timeline = new Wn({
                        data: "nested",
                        defaults: b || {}
                    })).kill(),
                    o.parent = o._dp = ft(a),
                    o._start = 0,
                    y)
                    Ce(o.vars.defaults, {
                        ease: "none"
                    }),
                        y.forEach((function (t) {
                            return o.to(E, t, ">")
                        }
                        ));
                else {
                    if (c = E.length,
                        d = _ ? ln(_) : le,
                        Wt(_))
                        for (u in _)
                            ~Jn.indexOf(u) && (p || (p = {}),
                                p[u] = _[u]);
                    for (s = 0; s < c; s++) {
                        for (u in l = {},
                            n)
                            Qn.indexOf(u) < 0 && (l[u] = n[u]);
                        l.stagger = 0,
                            M && (l.yoyoEase = M),
                            p && Ae(l, p),
                            h = E[s],
                            l.duration = +Zn(m, ft(a), s, h, E),
                            l.delay = (+Zn(g, ft(a), s, h, E) || 0) - a._delay,
                            !_ && 1 === c && l.delay && (a._delay = g = l.delay,
                                a._start += g,
                                l.delay = 0),
                            o.to(h, l, d(s, h, E))
                    }
                    o.duration() ? m = g = 0 : a.timeline = 0
                }
                m || a.duration(m = o.duration())
            } else
                a.timeline = 0;
            return !0 !== x || gt || (Vn = ft(a),
                vt.killTweensOf(E),
                Vn = 0),
                D && Ve(D, ft(a)),
                (v || !m && !y && a._start === be(D._time) && Vt(v) && Be(ft(a)) && "nested" !== D.data) && (a._tTime = -1e-8,
                    a.render(Math.max(0, -g))),
                w && qe(ft(a), w),
                a
        }
        mt(e, t);
        var n = e.prototype;
        return n.render = function (t, e, n) {
            var i, r, a, o, s, l, c, u, h, d = this._time, p = this._tDur, f = this._dur, m = t > p - Pt && t >= 0 ? p : t < Pt ? 0 : t;
            if (f) {
                if (m !== this._tTime || !t || n || !this._initted && this._tTime || this._startAt && this._zTime < 0 != t < 0) {
                    if (i = m,
                        u = this.timeline,
                        this._repeat) {
                        if (o = f + this._rDelay,
                            this._repeat < -1 && t < 0)
                            return this.totalTime(100 * o + t, e, n);
                        if (i = be(m % o),
                            m === p ? (a = this._repeat,
                                i = f) : ((a = ~~(m / o)) && a === m / o && (i = f,
                                    a--),
                                    i > f && (i = f)),
                            (l = this._yoyo && 1 & a) && (h = this._yEase,
                                i = f - i),
                            s = ke(this._tTime, o),
                            i === d && !n && this._initted)
                            return this;
                        a !== s && (u && this._yEase && In(u, l),
                            !this.vars.repeatRefresh || l || this._lock || (this._lock = n = 1,
                                this.render(be(o * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Xe(this, t < 0 ? t : i, n, e))
                            return this._tTime = 0,
                                this;
                        if (f !== this._dur)
                            return this.render(t, e, n)
                    }
                    for (this._tTime = m,
                        this._time = i,
                        !this._act && this._ts && (this._act = 1,
                            this._lazy = 0),
                        this.ratio = c = (h || this._ease)(i / f),
                        this._from && (this.ratio = c = 1 - c),
                        i && !d && !e && gn(this, "onStart"),
                        r = this._pt; r;)
                        r.r(c, r.d),
                            r = r._next;
                    u && u.render(t < 0 ? t : !i && l ? -1e-8 : u._dur * c, e, n) || this._startAt && (this._zTime = t),
                        this._onUpdate && !e && (t < 0 && this._startAt && this._startAt.render(t, !0, n),
                            gn(this, "onUpdate")),
                        this._repeat && a !== s && this.vars.onRepeat && !e && this.parent && gn(this, "onRepeat"),
                        m !== this._tDur && m || this._tTime !== m || (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                            (t || !f) && (m === this._tDur && this._ts > 0 || !m && this._ts < 0) && Ie(this, 1),
                            e || t < 0 && !d || !m && !d || (gn(this, m === p ? "onComplete" : "onReverseComplete", !0),
                                this._prom && !(m < p && this.timeScale() > 0) && this._prom()))
                }
            } else
                !function (t, e, n, i) {
                    var r, a, o, s = t.ratio, l = e < 0 || !e && (!t._start && Ye(t) || (t._ts < 0 || t._dp._ts < 0) && "isFromStart" !== t.data && "isStart" !== t.data) ? 0 : 1, c = t._rDelay, u = 0;
                    if (c && t._repeat && (u = tn(0, t._tDur, e),
                        a = ke(u, c),
                        o = ke(t._tTime, c),
                        t._yoyo && 1 & a && (l = 1 - l),
                        a !== o && (s = 1 - l,
                            t.vars.repeatRefresh && t._initted && t.invalidate())),
                        l !== s || i || t._zTime === Pt || !e && t._zTime) {
                        if (!t._initted && Xe(t, e, i, n))
                            return;
                        for (o = t._zTime,
                            t._zTime = e || (n ? Pt : 0),
                            n || (n = e && !o),
                            t.ratio = l,
                            t._from && (l = 1 - l),
                            t._time = 0,
                            t._tTime = u,
                            r = t._pt; r;)
                            r.r(l, r.d),
                                r = r._next;
                        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                            t._onUpdate && !n && gn(t, "onUpdate"),
                            u && t._repeat && !n && t.parent && gn(t, "onRepeat"),
                            (e >= t._tDur || e < 0) && t.ratio === l && (l && Ie(t, 1),
                                n || (gn(t, l ? "onComplete" : "onReverseComplete", !0),
                                    t._prom && t._prom()))
                    } else
                        t._zTime || (t._zTime = e)
                }(this, t, e, n);
            return this
        }
            ,
            n.targets = function () {
                return this._targets
            }
            ,
            n.invalidate = function () {
                return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0,
                    this._ptLookup = [],
                    this.timeline && this.timeline.invalidate(),
                    t.prototype.invalidate.call(this)
            }
            ,
            n.kill = function (t, e) {
                if (void 0 === e && (e = "all"),
                    !(t || e && "all" !== e))
                    return this._lazy = this._pt = 0,
                        this.parent ? vn(this) : this;
                if (this.timeline) {
                    var n = this.timeline.totalDuration();
                    return this.timeline.killTweensOf(t, e, Vn && !0 !== Vn.vars.overwrite)._first || vn(this),
                        this.parent && n !== this.timeline.totalDuration() && Ze(this, this._dur * this.timeline._tDur / n, 0, 1),
                        this
                }
                var i, r, a, o, s, l, c, u = this._targets, h = t ? on(t) : u, d = this._ptLookup, p = this._pt;
                if ((!e || "all" === e) && function (t, e) {
                    for (var n = t.length, i = n === e.length; i && n-- && t[n] === e[n];)
                        ;
                    return n < 0
                }(u, h))
                    return "all" === e && (this._pt = 0),
                        vn(this);
                for (i = this._op = this._op || [],
                    "all" !== e && (Ht(e) && (s = {},
                        ye(e, (function (t) {
                            return s[t] = 1
                        }
                        )),
                        e = s),
                        e = function (t, e) {
                            var n, i, r, a, o = t[0] ? _e(t[0]).harness : 0, s = o && o.aliases;
                            if (!s)
                                return e;
                            for (i in n = Ae({}, e),
                                s)
                                if (i in n)
                                    for (r = (a = s[i].split(",")).length; r--;)
                                        n[a[r]] = n[i];
                            return n
                        }(u, e)),
                    c = u.length; c--;)
                    if (~h.indexOf(u[c]))
                        for (s in r = d[c],
                            "all" === e ? (i[c] = e,
                                o = r,
                                a = {}) : (a = i[c] = i[c] || {},
                                    o = e),
                            o)
                            (l = r && r[s]) && ("kill" in l.d && !0 !== l.d.kill(s) || Oe(this, l, "_pt"),
                                delete r[s]),
                                "all" !== a && (a[s] = 1);
                return this._initted && !this._pt && p && vn(this),
                    this
            }
            ,
            e.to = function (t, n) {
                return new e(t, n, arguments[2])
            }
            ,
            e.from = function (t, n) {
                return new e(t, Me(arguments, 1))
            }
            ,
            e.delayedCall = function (t, n, i, r) {
                return new e(n, 0, {
                    immediateRender: !1,
                    lazy: !1,
                    overwrite: !1,
                    delay: t,
                    onComplete: n,
                    onReverseComplete: n,
                    onCompleteParams: i,
                    onReverseCompleteParams: i,
                    callbackScope: r
                })
            }
            ,
            e.fromTo = function (t, n, i) {
                return new e(t, Me(arguments, 2))
            }
            ,
            e.set = function (t, n) {
                return n.duration = 0,
                    n.repeatDelay || (n.repeat = 0),
                    new e(t, n)
            }
            ,
            e.killTweensOf = function (t, e, n) {
                return vt.killTweensOf(t, e, n)
            }
            ,
            e
    }(Gn);
    Ce(Kn.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }),
        ye("staggerTo,staggerFrom,staggerFromTo", (function (t) {
            Kn[t] = function () {
                var e = new Wn
                    , n = nn.call(arguments, 0);
                return n.splice("staggerFromTo" === t ? 5 : 4, 0, 0),
                    e[t].apply(e, n)
            }
        }
        ));
    var $n = function (t, e, n) {
        return t[e] = n
    }
        , ti = function (t, e, n) {
            return t[e](n)
        }
        , ei = function (t, e, n, i) {
            return t[e](i.fp, n)
        }
        , ni = function (t, e, n) {
            return t.setAttribute(e, n)
        }
        , ii = function (t, e) {
            return kt(t[e]) ? ti : Gt(t[e]) && t.setAttribute ? ni : $n
        }
        , ri = function (t, e) {
            return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4, e)
        }
        , ai = function (t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        }
        , oi = function (t, e) {
            var n = e._pt
                , i = "";
            if (!t && e.b)
                i = e.b;
            else if (1 === t && e.e)
                i = e.e;
            else {
                for (; n;)
                    i = n.p + (n.m ? n.m(n.s + n.c * t) : Math.round(1e4 * (n.s + n.c * t)) / 1e4) + i,
                        n = n._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        }
        , si = function (t, e) {
            for (var n = e._pt; n;)
                n.r(t, n.d),
                    n = n._next
        }
        , li = function (t, e, n, i) {
            for (var r, a = this._pt; a;)
                r = a._next,
                    a.p === i && a.modifier(t, e, n),
                    a = r
        }
        , ci = function (t) {
            for (var e, n, i = this._pt; i;)
                n = i._next,
                    i.p === t && !i.op || i.op === t ? Oe(this, i, "_pt") : i.dep || (e = 1),
                    i = n;
            return !e
        }
        , ui = function (t, e, n, i) {
            i.mSet(t, e, i.m.call(i.tween, n, i.mt), i)
        }
        , hi = function (t) {
            for (var e, n, i, r, a = t._pt; a;) {
                for (e = a._next,
                    n = i; n && n.pr > a.pr;)
                    n = n._next;
                (a._prev = n ? n._prev : r) ? a._prev._next = a : i = a,
                    (a._next = n) ? n._prev = a : r = a,
                    a = e
            }
            t._pt = i
        }
        , di = function () {
            function t(t, e, n, i, r, a, o, s, l) {
                this.t = e,
                    this.s = i,
                    this.c = r,
                    this.p = n,
                    this.r = a || ri,
                    this.d = o || this,
                    this.set = s || $n,
                    this.pr = l || 0,
                    this._next = t,
                    t && (t._prev = this)
            }
            return t.prototype.modifier = function (t, e, n) {
                this.mSet = this.mSet || this.set,
                    this.set = ui,
                    this.m = t,
                    this.mt = n,
                    this.tween = e
            }
                ,
                t
        }();
    ye(ge + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", (function (t) {
        return ce[t] = 1
    }
    )),
        ne.TweenMax = ne.TweenLite = Kn,
        ne.TimelineLite = ne.TimelineMax = Wn,
        vt = new Wn({
            sortChildren: !1,
            defaults: At,
            autoRemoveChildren: !0,
            id: "root",
            smoothChildTiming: !0
        }),
        Lt.stringFilter = Sn;
    var pi = {
        registerPlugin: function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                e[n] = arguments[n];
            e.forEach((function (t) {
                return _n(t)
            }
            ))
        },
        timeline: function (t) {
            return new Wn(t)
        },
        getTweensOf: function (t, e) {
            return vt.getTweensOf(t, e)
        },
        getProperty: function (t, e, n, i) {
            Ht(t) && (t = on(t)[0]);
            var r = _e(t || {}).get
                , a = n ? Se : Te;
            return "native" === n && (n = ""),
                t ? e ? a((de[e] && de[e].get || r)(t, e, n, i)) : function (e, n, i) {
                    return a((de[e] && de[e].get || r)(t, e, n, i))
                }
                    : t
        },
        quickSetter: function (t, e, n) {
            if ((t = on(t)).length > 1) {
                var i = t.map((function (t) {
                    return gi.quickSetter(t, e, n)
                }
                ))
                    , r = i.length;
                return function (t) {
                    for (var e = r; e--;)
                        i[e](t)
                }
            }
            t = t[0] || {};
            var a = de[e]
                , o = _e(t)
                , s = o.harness && (o.harness.aliases || {})[e] || e
                , l = a ? function (e) {
                    var i = new a;
                    Mt._pt = 0,
                        i.init(t, n ? e + n : e, Mt, 0, [t]),
                        i.render(1, i),
                        Mt._pt && si(1, Mt)
                }
                    : o.set(t, s);
            return a ? l : function (e) {
                return l(t, s, n ? e + n : e, o, 1)
            }
        },
        isTweening: function (t) {
            return vt.getTweensOf(t, !0).length > 0
        },
        defaults: function (t) {
            return t && t.ease && (t.ease = Nn(t.ease, At.ease)),
                Re(At, t || {})
        },
        config: function (t) {
            return Re(Lt, t || {})
        },
        registerEffect: function (t) {
            var e = t.name
                , n = t.effect
                , i = t.plugins
                , r = t.defaults
                , a = t.extendTimeline;
            (i || "").split(",").forEach((function (t) {
                return t && !de[t] && !ne[t] && oe(e + " effect requires " + t + " plugin.")
            }
            )),
                pe[e] = function (t, e, i) {
                    return n(on(t), Ce(e || {}, r), i)
                }
                ,
                a && (Wn.prototype[e] = function (t, n, i) {
                    return this.add(pe[e](t, Wt(n) ? n : (i = n) && {}, this), i)
                }
                )
        },
        registerEase: function (t, e) {
            An[t] = Nn(e)
        },
        parseEase: function (t, e) {
            return arguments.length ? Nn(t, e) : An
        },
        getById: function (t) {
            return vt.getById(t)
        },
        exportRoot: function (t, e) {
            void 0 === t && (t = {});
            var n, i, r = new Wn(t);
            for (r.smoothChildTiming = Vt(t.smoothChildTiming),
                vt.remove(r),
                r._dp = 0,
                r._time = r._tTime = vt._time,
                n = vt._first; n;)
                i = n._next,
                    !e && !n._dur && n instanceof Kn && n.vars.onComplete === n._targets[0] || je(r, n, n._start - n._delay),
                    n = i;
            return je(vt, r, 0),
                r
        },
        utils: {
            wrap: function t(e, n, i) {
                var r = n - e;
                return Yt(e) ? dn(e, t(0, e.length), n) : $e(i, (function (t) {
                    return (r + (t - e) % r) % r + e
                }
                ))
            },
            wrapYoyo: function t(e, n, i) {
                var r = n - e
                    , a = 2 * r;
                return Yt(e) ? dn(e, t(0, e.length - 1), n) : $e(i, (function (t) {
                    return e + ((t = (a + (t - e) % a) % a || 0) > r ? a - t : t)
                }
                ))
            },
            distribute: ln,
            random: hn,
            snap: un,
            normalize: function (t, e, n) {
                return fn(t, e, 0, 1, n)
            },
            getUnit: en,
            clamp: function (t, e, n) {
                return $e(n, (function (n) {
                    return tn(t, e, n)
                }
                ))
            },
            splitColor: wn,
            toArray: on,
            mapRange: fn,
            pipe: function () {
                for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                return function (t) {
                    return e.reduce((function (t, e) {
                        return e(t)
                    }
                    ), t)
                }
            },
            unitize: function (t, e) {
                return function (n) {
                    return t(parseFloat(n)) + (e || en(n))
                }
            },
            interpolate: function t(e, n, i, r) {
                var a = isNaN(e + n) ? 0 : function (t) {
                    return (1 - t) * e + t * n
                }
                    ;
                if (!a) {
                    var o, s, l, c, u, h = Ht(e), d = {};
                    if (!0 === i && (r = 1) && (i = null),
                        h)
                        e = {
                            p: e
                        },
                            n = {
                                p: n
                            };
                    else if (Yt(e) && !Yt(n)) {
                        for (l = [],
                            c = e.length,
                            u = c - 2,
                            s = 1; s < c; s++)
                            l.push(t(e[s - 1], e[s]));
                        c--,
                            a = function (t) {
                                t *= c;
                                var e = Math.min(u, ~~t);
                                return l[e](t - e)
                            }
                            ,
                            i = n
                    } else
                        r || (e = Ae(Yt(e) ? [] : {}, e));
                    if (!l) {
                        for (o in n)
                            qn.call(d, e, o, "get", n[o]);
                        a = function (t) {
                            return si(t, d) || (h ? e.p : e)
                        }
                    }
                }
                return $e(i, a)
            },
            shuffle: sn
        },
        install: re,
        effects: pe,
        ticker: Cn,
        updateRoot: Wn.updateRoot,
        plugins: de,
        globalTimeline: vt,
        core: {
            PropTween: di,
            globals: se,
            Tween: Kn,
            Timeline: Wn,
            Animation: Gn,
            getCache: _e,
            _removeLinkedListItem: Oe,
            suppressOverwrites: function (t) {
                return gt = t
            }
        }
    };
    ye("to,from,fromTo,delayedCall,set,killTweensOf", (function (t) {
        return pi[t] = Kn[t]
    }
    )),
        Cn.add(Wn.updateRoot),
        Mt = pi.to({}, {
            duration: 0
        });
    var fi = function (t, e) {
        for (var n = t._pt; n && n.p !== e && n.op !== e && n.fp !== e;)
            n = n._next;
        return n
    }
        , mi = function (t, e) {
            return {
                name: t,
                rawVars: 1,
                init: function (t, n, i) {
                    i._onInit = function (t) {
                        var i, r;
                        if (Ht(n) && (i = {},
                            ye(n, (function (t) {
                                return i[t] = 1
                            }
                            )),
                            n = i),
                            e) {
                            for (r in i = {},
                                n)
                                i[r] = e(n[r]);
                            n = i
                        }
                        !function (t, e) {
                            var n, i, r, a = t._targets;
                            for (n in e)
                                for (i = a.length; i--;)
                                    (r = t._ptLookup[i][n]) && (r = r.d) && (r._pt && (r = fi(r, n)),
                                        r && r.modifier && r.modifier(e[n], t, a[i], n))
                        }(t, n)
                    }
                }
            }
        }
        , gi = pi.registerPlugin({
            name: "attr",
            init: function (t, e, n, i, r) {
                var a, o;
                for (a in e)
                    (o = this.add(t, "setAttribute", (t.getAttribute(a) || 0) + "", e[a], i, r, 0, 0, a)) && (o.op = a),
                        this._props.push(a)
            }
        }, {
            name: "endArray",
            init: function (t, e) {
                for (var n = e.length; n--;)
                    this.add(t, n, t[n] || 0, e[n])
            }
        }, mi("roundProps", cn), mi("modifiers"), mi("snap", un)) || pi;
    Kn.version = Wn.version = gi.version = "3.6.1",
        bt = 1,
        jt() && Ln()/*!
   * CSSPlugin 3.6.1
   * https://greensock.com
   *
   * Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
        ;
    var vi, _i, xi, yi, bi, wi, Mi, Di = {}, Ei = 180 / Math.PI, Ti = Math.PI / 180, Si = Math.atan2, Ci = /([A-Z])/g, Li = /(?:left|right|width|margin|padding|x)/i, Ai = /[\s,\(]\S/, Ri = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    }, Pi = function (t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }, Fi = function (t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }, Oi = function (t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }, Ii = function (t, e) {
        var n = e.s + e.c * t;
        e.set(e.t, e.p, ~~(n + (n < 0 ? -.5 : .5)) + e.u, e)
    }, Ni = function (t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }, zi = function (t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }, Bi = function (t, e, n) {
        return t.style[e] = n
    }, Hi = function (t, e, n) {
        return t.style.setProperty(e, n)
    }, ki = function (t, e, n) {
        return t._gsap[e] = n
    }, Ui = function (t, e, n) {
        return t._gsap.scaleX = t._gsap.scaleY = n
    }, Gi = function (t, e, n, i, r) {
        var a = t._gsap;
        a.scaleX = a.scaleY = n,
            a.renderTransform(r, a)
    }, Wi = function (t, e, n, i, r) {
        var a = t._gsap;
        a[e] = n,
            a.renderTransform(r, a)
    }, Vi = "transform", ji = Vi + "Origin", qi = function (t, e) {
        var n = _i.createElementNS ? _i.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : _i.createElement(t);
        return n.style ? n : _i.createElement(t)
    }, Xi = function t(e, n, i) {
        var r = getComputedStyle(e);
        return r[n] || r.getPropertyValue(n.replace(Ci, "-$1").toLowerCase()) || r.getPropertyValue(n) || !i && t(e, Zi(n) || n, 1) || ""
    }, Yi = "O,Moz,ms,Ms,Webkit".split(","), Zi = function (t, e, n) {
        var i = (e || bi).style
            , r = 5;
        if (t in i && !n)
            return t;
        for (t = t.charAt(0).toUpperCase() + t.substr(1); r-- && !(Yi[r] + t in i);)
            ;
        return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? Yi[r] : "") + t
    }, Ji = function () {
        "undefined" != typeof window && window.document && (vi = window,
            _i = vi.document,
            xi = _i.documentElement,
            bi = qi("div") || {
                style: {}
            },
            qi("div"),
            Vi = Zi(Vi),
            ji = Vi + "Origin",
            bi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
            Mi = !!Zi("perspective"),
            yi = 1)
    }, Qi = function t(e) {
        var n, i = qi("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, a = this.nextSibling, o = this.style.cssText;
        if (xi.appendChild(i),
            i.appendChild(this),
            this.style.display = "block",
            e)
            try {
                n = this.getBBox(),
                    this._gsapBBox = this.getBBox,
                    this.getBBox = t
            } catch (t) { }
        else
            this._gsapBBox && (n = this._gsapBBox());
        return r && (a ? r.insertBefore(this, a) : r.appendChild(this)),
            xi.removeChild(i),
            this.style.cssText = o,
            n
    }, Ki = function (t, e) {
        for (var n = e.length; n--;)
            if (t.hasAttribute(e[n]))
                return t.getAttribute(e[n])
    }, $i = function (t) {
        var e;
        try {
            e = t.getBBox()
        } catch (n) {
            e = Qi.call(t, !0)
        }
        return e && (e.width || e.height) || t.getBBox === Qi || (e = Qi.call(t, !0)),
            !e || e.width || e.x || e.y ? e : {
                x: +Ki(t, ["x", "cx", "x1"]) || 0,
                y: +Ki(t, ["y", "cy", "y1"]) || 0,
                width: 0,
                height: 0
            }
    }, tr = function (t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !$i(t))
    }, er = function (t, e) {
        if (e) {
            var n = t.style;
            e in Di && e !== ji && (e = Vi),
                n.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
                    n.removeProperty(e.replace(Ci, "-$1").toLowerCase())) : n.removeAttribute(e)
        }
    }, nr = function (t, e, n, i, r, a) {
        var o = new di(t._pt, e, n, 0, 1, a ? zi : Ni);
        return t._pt = o,
            o.b = i,
            o.e = r,
            t._props.push(n),
            o
    }, ir = {
        deg: 1,
        rad: 1,
        turn: 1
    }, rr = function t(e, n, i, r) {
        var a, o, s, l, c = parseFloat(i) || 0, u = (i + "").trim().substr((c + "").length) || "px", h = bi.style, d = Li.test(n), p = "svg" === e.tagName.toLowerCase(), f = (p ? "client" : "offset") + (d ? "Width" : "Height"), m = 100, g = "px" === r, v = "%" === r;
        return r === u || !c || ir[r] || ir[u] ? c : ("px" !== u && !g && (c = t(e, n, i, "px")),
            l = e.getCTM && tr(e),
            !v && "%" !== u || !Di[n] && !~n.indexOf("adius") ? (h[d ? "width" : "height"] = m + (g ? u : r),
                o = ~n.indexOf("adius") || "em" === r && e.appendChild && !p ? e : e.parentNode,
                l && (o = (e.ownerSVGElement || {}).parentNode),
                o && o !== _i && o.appendChild || (o = _i.body),
                (s = o._gsap) && v && s.width && d && s.time === Cn.time ? be(c / s.width * m) : ((v || "%" === u) && (h.position = Xi(e, "position")),
                    o === e && (h.position = "static"),
                    o.appendChild(bi),
                    a = bi[f],
                    o.removeChild(bi),
                    h.position = "absolute",
                    d && v && ((s = _e(o)).time = Cn.time,
                        s.width = o[f]),
                    be(g ? a * c / m : a && c ? m / a * c : 0))) : (a = l ? e.getBBox()[d ? "width" : "height"] : e[f],
                        be(v ? c / a * m : c / 100 * a)))
    }, ar = function (t, e, n, i) {
        var r;
        return yi || Ji(),
            e in Ri && "transform" !== e && ~(e = Ri[e]).indexOf(",") && (e = e.split(",")[0]),
            Di[e] && "transform" !== e ? (r = gr(t, i),
                r = "transformOrigin" !== e ? r[e] : vr(Xi(t, ji)) + " " + r.zOrigin + "px") : (!(r = t.style[e]) || "auto" === r || i || ~(r + "").indexOf("calc(")) && (r = cr[e] && cr[e](t, e, n) || Xi(t, e) || xe(t, e) || ("opacity" === e ? 1 : 0)),
            n && !~(r + "").trim().indexOf(" ") ? rr(t, e, r, n) + n : r
    }, or = function (t, e, n, i) {
        if (!n || "none" === n) {
            var r = Zi(e, t, 1)
                , a = r && Xi(t, r, 1);
            a && a !== n ? (e = r,
                n = a) : "borderColor" === e && (n = Xi(t, "borderTopColor"))
        }
        var o, s, l, c, u, h, d, p, f, m, g, v, _ = new di(this._pt, t.style, e, 0, 1, oi), x = 0, y = 0;
        if (_.b = n,
            _.e = i,
            n += "",
            "auto" === (i += "") && (t.style[e] = i,
                i = Xi(t, e) || i,
                t.style[e] = n),
            Sn(o = [n, i]),
            n = o[0],
            i = o[1],
            l = n.match(Qt) || [],
            (i.match(Qt) || []).length) {
            for (; s = Qt.exec(i);)
                d = s[0],
                    f = i.substring(x, s.index),
                    u ? u = (u + 1) % 5 : "rgba(" !== f.substr(-5) && "hsla(" !== f.substr(-5) || (u = 1),
                    d !== (h = l[y++] || "") && (c = parseFloat(h) || 0,
                        g = h.substr((c + "").length),
                        (v = "=" === d.charAt(1) ? +(d.charAt(0) + "1") : 0) && (d = d.substr(2)),
                        p = parseFloat(d),
                        m = d.substr((p + "").length),
                        x = Qt.lastIndex - m.length,
                        m || (m = m || Lt.units[e] || g,
                            x === i.length && (i += m,
                                _.e += m)),
                        g !== m && (c = rr(t, e, h, m) || 0),
                        _._pt = {
                            _next: _._pt,
                            p: f || 1 === y ? f : ",",
                            s: c,
                            c: v ? v * p : p - c,
                            m: u && u < 4 || "zIndex" === e ? Math.round : 0
                        });
            _.c = x < i.length ? i.substring(x, i.length) : ""
        } else
            _.r = "display" === e && "none" === i ? zi : Ni;
        return $t.test(i) && (_.e = 0),
            this._pt = _,
            _
    }, sr = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    }, lr = function (t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var n, i, r, a = e.t, o = a.style, s = e.u, l = a._gsap;
            if ("all" === s || !0 === s)
                o.cssText = "",
                    i = 1;
            else
                for (r = (s = s.split(",")).length; --r > -1;)
                    n = s[r],
                        Di[n] && (i = 1,
                            n = "transformOrigin" === n ? ji : Vi),
                        er(a, n);
            i && (er(a, Vi),
                l && (l.svg && a.removeAttribute("transform"),
                    gr(a, 1),
                    l.uncache = 1))
        }
    }, cr = {
        clearProps: function (t, e, n, i, r) {
            if ("isFromStart" !== r.data) {
                var a = t._pt = new di(t._pt, e, n, 0, 0, lr);
                return a.u = i,
                    a.pr = -10,
                    a.tween = r,
                    t._props.push(n),
                    1
            }
        }
    }, ur = [1, 0, 0, 1, 0, 0], hr = {}, dr = function (t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }, pr = function (t) {
        var e = Xi(t, Vi);
        return dr(e) ? ur : e.substr(7).match(Jt).map(be)
    }, fr = function (t, e) {
        var n, i, r, a, o = t._gsap || _e(t), s = t.style, l = pr(t);
        return o.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (l = [(r = t.transform.baseVal.consolidate().matrix).a, r.b, r.c, r.d, r.e, r.f]).join(",") ? ur : l : (l !== ur || t.offsetParent || t === xi || o.svg || (r = s.display,
            s.display = "block",
            (n = t.parentNode) && t.offsetParent || (a = 1,
                i = t.nextSibling,
                xi.appendChild(t)),
            l = pr(t),
            r ? s.display = r : er(t, "display"),
            a && (i ? n.insertBefore(t, i) : n ? n.appendChild(t) : xi.removeChild(t))),
            e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l)
    }, mr = function (t, e, n, i, r, a) {
        var o, s, l, c = t._gsap, u = r || fr(t, !0), h = c.xOrigin || 0, d = c.yOrigin || 0, p = c.xOffset || 0, f = c.yOffset || 0, m = u[0], g = u[1], v = u[2], _ = u[3], x = u[4], y = u[5], b = e.split(" "), w = parseFloat(b[0]) || 0, M = parseFloat(b[1]) || 0;
        n ? u !== ur && (s = m * _ - g * v) && (l = w * (-g / s) + M * (m / s) - (m * y - g * x) / s,
            w = w * (_ / s) + M * (-v / s) + (v * y - _ * x) / s,
            M = l) : (w = (o = $i(t)).x + (~b[0].indexOf("%") ? w / 100 * o.width : w),
                M = o.y + (~(b[1] || b[0]).indexOf("%") ? M / 100 * o.height : M)),
            i || !1 !== i && c.smooth ? (x = w - h,
                y = M - d,
                c.xOffset = p + (x * m + y * v) - x,
                c.yOffset = f + (x * g + y * _) - y) : c.xOffset = c.yOffset = 0,
            c.xOrigin = w,
            c.yOrigin = M,
            c.smooth = !!i,
            c.origin = e,
            c.originIsAbsolute = !!n,
            t.style[ji] = "0px 0px",
            a && (nr(a, c, "xOrigin", h, w),
                nr(a, c, "yOrigin", d, M),
                nr(a, c, "xOffset", p, c.xOffset),
                nr(a, c, "yOffset", f, c.yOffset)),
            t.setAttribute("data-svg-origin", w + " " + M)
    }, gr = function (t, e) {
        var n = t._gsap || new Un(t);
        if ("x" in n && !e && !n.uncache)
            return n;
        var i, r, a, o, s, l, c, u, h, d, p, f, m, g, v, _, x, y, b, w, M, D, E, T, S, C, L, A, R, P, F, O, I = t.style, N = n.scaleX < 0, z = "px", B = "deg", H = Xi(t, ji) || "0";
        return i = r = a = l = c = u = h = d = p = 0,
            o = s = 1,
            n.svg = !(!t.getCTM || !tr(t)),
            g = fr(t, n.svg),
            n.svg && (T = !n.uncache && !e && t.getAttribute("data-svg-origin"),
                mr(t, T || H, !!T || n.originIsAbsolute, !1 !== n.smooth, g)),
            f = n.xOrigin || 0,
            m = n.yOrigin || 0,
            g !== ur && (y = g[0],
                b = g[1],
                w = g[2],
                M = g[3],
                i = D = g[4],
                r = E = g[5],
                6 === g.length ? (o = Math.sqrt(y * y + b * b),
                    s = Math.sqrt(M * M + w * w),
                    l = y || b ? Si(b, y) * Ei : 0,
                    (h = w || M ? Si(w, M) * Ei + l : 0) && (s *= Math.abs(Math.cos(h * Ti))),
                    n.svg && (i -= f - (f * y + m * w),
                        r -= m - (f * b + m * M))) : (O = g[6],
                            P = g[7],
                            L = g[8],
                            A = g[9],
                            R = g[10],
                            F = g[11],
                            i = g[12],
                            r = g[13],
                            a = g[14],
                            c = (v = Si(O, R)) * Ei,
                            v && (T = D * (_ = Math.cos(-v)) + L * (x = Math.sin(-v)),
                                S = E * _ + A * x,
                                C = O * _ + R * x,
                                L = D * -x + L * _,
                                A = E * -x + A * _,
                                R = O * -x + R * _,
                                F = P * -x + F * _,
                                D = T,
                                E = S,
                                O = C),
                            u = (v = Si(-w, R)) * Ei,
                            v && (_ = Math.cos(-v),
                                F = M * (x = Math.sin(-v)) + F * _,
                                y = T = y * _ - L * x,
                                b = S = b * _ - A * x,
                                w = C = w * _ - R * x),
                            l = (v = Si(b, y)) * Ei,
                            v && (T = y * (_ = Math.cos(v)) + b * (x = Math.sin(v)),
                                S = D * _ + E * x,
                                b = b * _ - y * x,
                                E = E * _ - D * x,
                                y = T,
                                D = S),
                            c && Math.abs(c) + Math.abs(l) > 359.9 && (c = l = 0,
                                u = 180 - u),
                            o = be(Math.sqrt(y * y + b * b + w * w)),
                            s = be(Math.sqrt(E * E + O * O)),
                            v = Si(D, E),
                            h = Math.abs(v) > 2e-4 ? v * Ei : 0,
                            p = F ? 1 / (F < 0 ? -F : F) : 0),
                n.svg && (T = t.getAttribute("transform"),
                    n.forceCSS = t.setAttribute("transform", "") || !dr(Xi(t, Vi)),
                    T && t.setAttribute("transform", T))),
            Math.abs(h) > 90 && Math.abs(h) < 270 && (N ? (o *= -1,
                h += l <= 0 ? 180 : -180,
                l += l <= 0 ? 180 : -180) : (s *= -1,
                    h += h <= 0 ? 180 : -180)),
            n.x = i - ((n.xPercent = i && (n.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * n.xPercent / 100 : 0) + z,
            n.y = r - ((n.yPercent = r && (n.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0))) ? t.offsetHeight * n.yPercent / 100 : 0) + z,
            n.z = a + z,
            n.scaleX = be(o),
            n.scaleY = be(s),
            n.rotation = be(l) + B,
            n.rotationX = be(c) + B,
            n.rotationY = be(u) + B,
            n.skewX = h + B,
            n.skewY = d + B,
            n.transformPerspective = p + z,
            (n.zOrigin = parseFloat(H.split(" ")[2]) || 0) && (I[ji] = vr(H)),
            n.xOffset = n.yOffset = 0,
            n.force3D = Lt.force3D,
            n.renderTransform = n.svg ? Dr : Mi ? Mr : xr,
            n.uncache = 0,
            n
    }, vr = function (t) {
        return (t = t.split(" "))[0] + " " + t[1]
    }, _r = function (t, e, n) {
        var i = en(e);
        return be(parseFloat(e) + parseFloat(rr(t, "x", n + "px", i))) + i
    }, xr = function (t, e) {
        e.z = "0px",
            e.rotationY = e.rotationX = "0deg",
            e.force3D = 0,
            Mr(t, e)
    }, yr = "0deg", br = "0px", wr = ") ", Mr = function (t, e) {
        var n = e || this
            , i = n.xPercent
            , r = n.yPercent
            , a = n.x
            , o = n.y
            , s = n.z
            , l = n.rotation
            , c = n.rotationY
            , u = n.rotationX
            , h = n.skewX
            , d = n.skewY
            , p = n.scaleX
            , f = n.scaleY
            , m = n.transformPerspective
            , g = n.force3D
            , v = n.target
            , _ = n.zOrigin
            , x = ""
            , y = "auto" === g && t && 1 !== t || !0 === g;
        if (_ && (u !== yr || c !== yr)) {
            var b, w = parseFloat(c) * Ti, M = Math.sin(w), D = Math.cos(w);
            w = parseFloat(u) * Ti,
                b = Math.cos(w),
                a = _r(v, a, M * b * -_),
                o = _r(v, o, -Math.sin(w) * -_),
                s = _r(v, s, D * b * -_ + _)
        }
        m !== br && (x += "perspective(" + m + wr),
            (i || r) && (x += "translate(" + i + "%, " + r + "%) "),
            (y || a !== br || o !== br || s !== br) && (x += s !== br || y ? "translate3d(" + a + ", " + o + ", " + s + ") " : "translate(" + a + ", " + o + wr),
            l !== yr && (x += "rotate(" + l + wr),
            c !== yr && (x += "rotateY(" + c + wr),
            u !== yr && (x += "rotateX(" + u + wr),
            h === yr && d === yr || (x += "skew(" + h + ", " + d + wr),
            1 === p && 1 === f || (x += "scale(" + p + ", " + f + wr),
            v.style[Vi] = x || "translate(0, 0)"
    }, Dr = function (t, e) {
        var n, i, r, a, o, s = e || this, l = s.xPercent, c = s.yPercent, u = s.x, h = s.y, d = s.rotation, p = s.skewX, f = s.skewY, m = s.scaleX, g = s.scaleY, v = s.target, _ = s.xOrigin, x = s.yOrigin, y = s.xOffset, b = s.yOffset, w = s.forceCSS, M = parseFloat(u), D = parseFloat(h);
        d = parseFloat(d),
            p = parseFloat(p),
            (f = parseFloat(f)) && (p += f = parseFloat(f),
                d += f),
            d || p ? (d *= Ti,
                p *= Ti,
                n = Math.cos(d) * m,
                i = Math.sin(d) * m,
                r = Math.sin(d - p) * -g,
                a = Math.cos(d - p) * g,
                p && (f *= Ti,
                    o = Math.tan(p - f),
                    r *= o = Math.sqrt(1 + o * o),
                    a *= o,
                    f && (o = Math.tan(f),
                        n *= o = Math.sqrt(1 + o * o),
                        i *= o)),
                n = be(n),
                i = be(i),
                r = be(r),
                a = be(a)) : (n = m,
                    a = g,
                    i = r = 0),
            (M && !~(u + "").indexOf("px") || D && !~(h + "").indexOf("px")) && (M = rr(v, "x", u, "px"),
                D = rr(v, "y", h, "px")),
            (_ || x || y || b) && (M = be(M + _ - (_ * n + x * r) + y),
                D = be(D + x - (_ * i + x * a) + b)),
            (l || c) && (o = v.getBBox(),
                M = be(M + l / 100 * o.width),
                D = be(D + c / 100 * o.height)),
            o = "matrix(" + n + "," + i + "," + r + "," + a + "," + M + "," + D + ")",
            v.setAttribute("transform", o),
            w && (v.style[Vi] = o)
    }, Er = function (t, e, n, i, r, a) {
        var o, s, l = 360, c = Ht(r), u = parseFloat(r) * (c && ~r.indexOf("rad") ? Ei : 1), h = a ? u * a : u - i, d = i + h + "deg";
        return c && ("short" === (o = r.split("_")[1]) && (h %= l) !== h % 180 && (h += h < 0 ? l : -360),
            "cw" === o && h < 0 ? h = (h + 36e9) % l - ~~(h / l) * l : "ccw" === o && h > 0 && (h = (h - 36e9) % l - ~~(h / l) * l)),
            t._pt = s = new di(t._pt, e, n, i, h, Fi),
            s.e = d,
            s.u = "deg",
            t._props.push(n),
            s
    }, Tr = function (t, e) {
        for (var n in e)
            t[n] = e[n];
        return t
    }, Sr = function (t, e, n) {
        var i, r, a, o, s, l, c, u = Tr({}, n._gsap), h = n.style;
        for (r in u.svg ? (a = n.getAttribute("transform"),
            n.setAttribute("transform", ""),
            h[Vi] = e,
            i = gr(n, 1),
            er(n, Vi),
            n.setAttribute("transform", a)) : (a = getComputedStyle(n)[Vi],
                h[Vi] = e,
                i = gr(n, 1),
                h[Vi] = a),
            Di)
            (a = u[r]) !== (o = i[r]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 && (s = en(a) !== (c = en(o)) ? rr(n, r, a, c) : parseFloat(a),
                l = parseFloat(o),
                t._pt = new di(t._pt, i, r, s, l - s, Pi),
                t._pt.u = c || 0,
                t._props.push(r));
        Tr(i, u)
    };
    ye("padding,margin,Width,Radius", (function (t, e) {
        var n = "Top"
            , i = "Right"
            , r = "Bottom"
            , a = "Left"
            , o = (e < 3 ? [n, i, r, a] : [n + a, n + i, r + i, r + a]).map((function (n) {
                return e < 2 ? t + n : "border" + n + t
            }
            ));
        cr[e > 1 ? "border" + t : t] = function (t, e, n, i, r) {
            var a, s;
            if (arguments.length < 4)
                return a = o.map((function (e) {
                    return ar(t, e, n)
                }
                )),
                    5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "),
                s = {},
                o.forEach((function (t, e) {
                    return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
                }
                )),
                t.init(e, s, r)
        }
    }
    ));
    var Cr = {
        name: "css",
        register: Ji,
        targetTest: function (t) {
            return t.style && t.nodeType
        },
        init: function (t, e, n, i, r) {
            var a, o, s, l, c, u, h, d, p, f, m, g, v, _, x, y, b, w, M, D = this._props, E = t.style, T = n.vars.startAt;
            for (h in yi || Ji(),
                e)
                if ("autoRound" !== h && (o = e[h],
                    !de[h] || !Xn(h, e, n, i, t, r)))
                    if (c = typeof o,
                        u = cr[h],
                        "function" === c && (c = typeof (o = o.call(n, i, t, r))),
                        "string" === c && ~o.indexOf("random(") && (o = pn(o)),
                        u)
                        u(this, t, h, o, n) && (x = 1);
                    else if ("--" === h.substr(0, 2))
                        a = (getComputedStyle(t).getPropertyValue(h) + "").trim(),
                            o += "",
                            En.lastIndex = 0,
                            En.test(a) || (d = en(a),
                                p = en(o)),
                            p ? d !== p && (a = rr(t, h, a, p) + p) : d && (o += d),
                            this.add(E, "setProperty", a, o, i, r, 0, 0, h);
                    else if ("undefined" !== c) {
                        if (T && h in T ? (a = "function" == typeof T[h] ? T[h].call(n, i, t, r) : T[h],
                            h in Lt.units && !en(a) && (a += Lt.units[h]),
                            "=" === (a + "").charAt(1) && (a = ar(t, h))) : a = ar(t, h),
                            l = parseFloat(a),
                            (f = "string" === c && "=" === o.charAt(1) ? +(o.charAt(0) + "1") : 0) && (o = o.substr(2)),
                            s = parseFloat(o),
                            h in Ri && ("autoAlpha" === h && (1 === l && "hidden" === ar(t, "visibility") && s && (l = 0),
                                nr(this, E, "visibility", l ? "inherit" : "hidden", s ? "inherit" : "hidden", !s)),
                                "scale" !== h && "transform" !== h && ~(h = Ri[h]).indexOf(",") && (h = h.split(",")[0])),
                            m = h in Di)
                            if (g || ((v = t._gsap).renderTransform && !e.parseTransform || gr(t, e.parseTransform),
                                _ = !1 !== e.smoothOrigin && v.smooth,
                                (g = this._pt = new di(this._pt, E, Vi, 0, 1, v.renderTransform, v, 0, -1)).dep = 1),
                                "scale" === h)
                                this._pt = new di(this._pt, v, "scaleY", v.scaleY, f ? f * s : s - v.scaleY),
                                    D.push("scaleY", h),
                                    h += "X";
                            else {
                                if ("transformOrigin" === h) {
                                    b = void 0,
                                        w = void 0,
                                        M = void 0,
                                        b = (y = o).split(" "),
                                        w = b[0],
                                        M = b[1] || "50%",
                                        "top" !== w && "bottom" !== w && "left" !== M && "right" !== M || (y = w,
                                            w = M,
                                            M = y),
                                        b[0] = sr[w] || w,
                                        b[1] = sr[M] || M,
                                        o = b.join(" "),
                                        v.svg ? mr(t, o, 0, _, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && nr(this, v, "zOrigin", v.zOrigin, p),
                                            nr(this, E, h, vr(a), vr(o)));
                                    continue
                                }
                                if ("svgOrigin" === h) {
                                    mr(t, o, 1, _, 0, this);
                                    continue
                                }
                                if (h in hr) {
                                    Er(this, v, h, l, o, f);
                                    continue
                                }
                                if ("smoothOrigin" === h) {
                                    nr(this, v, "smooth", v.smooth, o);
                                    continue
                                }
                                if ("force3D" === h) {
                                    v[h] = o;
                                    continue
                                }
                                if ("transform" === h) {
                                    Sr(this, o, t);
                                    continue
                                }
                            }
                        else
                            h in E || (h = Zi(h) || h);
                        if (m || (s || 0 === s) && (l || 0 === l) && !Ai.test(o) && h in E)
                            s || (s = 0),
                                (d = (a + "").substr((l + "").length)) !== (p = en(o) || (h in Lt.units ? Lt.units[h] : d)) && (l = rr(t, h, a, p)),
                                this._pt = new di(this._pt, m ? v : E, h, l, f ? f * s : s - l, m || "px" !== p && "zIndex" !== h || !1 === e.autoRound ? Pi : Ii),
                                this._pt.u = p || 0,
                                d !== p && (this._pt.b = a,
                                    this._pt.r = Oi);
                        else if (h in E)
                            or.call(this, t, h, a, o);
                        else {
                            if (!(h in t)) {
                                ae(h, o);
                                continue
                            }
                            this.add(t, h, t[h], o, i, r)
                        }
                        D.push(h)
                    }
            x && hi(this)
        },
        get: ar,
        aliases: Ri,
        getSetter: function (t, e, n) {
            var i = Ri[e];
            return i && i.indexOf(",") < 0 && (e = i),
                e in Di && e !== ji && (t._gsap.x || ar(t, "x")) ? n && wi === n ? "scale" === e ? Ui : ki : (wi = n || {}) && ("scale" === e ? Gi : Wi) : t.style && !Gt(t.style[e]) ? Bi : ~e.indexOf("-") ? Hi : ii(t, e)
        },
        core: {
            _removeProperty: er,
            _getMatrix: fr
        }
    };
    gi.utils.checkPrefix = Zi,
        function (t, e, n, i) {
            var r = ye(t + "," + e + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", (function (t) {
                Di[t] = 1
            }
            ));
            ye(e, (function (t) {
                Lt.units[t] = "deg",
                    hr[t] = 1
            }
            )),
                Ri[r[13]] = t + "," + e,
                ye("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", (function (t) {
                    var e = t.split(":");
                    Ri[e[1]] = r[e[0]]
                }
                ))
        }("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY"),
        ye("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", (function (t) {
            Lt.units[t] = "px"
        }
        )),
        gi.registerPlugin(Cr);
    var Lr = gi.registerPlugin(Cr) || gi;
    Lr.core.Tween;
    /*!
   * strings: 3.6.1
   * https://greensock.com
   *
   * Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
    var Ar = /(^\s+|\s+$)/g
        , Rr = /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/;
    function Pr(t, e, n) {
        for (var i = t.firstChild, r = []; i;)
            3 === i.nodeType ? r.push.apply(r, Fr((i.nodeValue + "").replace(/^\n+/g, "").replace(/\s+/g, " "), e, n)) : "br" === (i.nodeName + "").toLowerCase() ? r[r.length - 1] += "<br>" : r.push(i.outerHTML),
                i = i.nextSibling;
        return r
    }
    function Fr(t, e, n) {
        if (t += "",
            n && (t = t.replace(Ar, "")),
            e && "" !== e)
            return t.replace(/>/g, "&gt;").replace(/</g, "&lt;").split(e);
        for (var i, r, a = [], o = t.length, s = 0; s < o; s++)
            ((r = t.charAt(s)).charCodeAt(0) >= 55296 && r.charCodeAt(0) <= 56319 || t.charCodeAt(s + 1) >= 65024 && t.charCodeAt(s + 1) <= 65039) && (i = ((t.substr(s, 12).split(Rr) || [])[1] || "").length || 2,
                r = t.substr(s, i),
                a.emoji = 1,
                s += i - 1),
                a.push(">" === r ? "&gt;" : "<" === r ? "&lt;" : r);
        return a
    }
    /*!
   * TextPlugin 3.6.1
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
    var Or, Ir, Nr = {
        version: "3.6.1",
        name: "text",
        init: function (t, e, n) {
            var i, r, a, o, s, l, c, u, h = t.nodeName.toUpperCase(), d = this;
            if (d.svg = t.getBBox && ("TEXT" === h || "TSPAN" === h),
                !("innerHTML" in t) && !d.svg)
                return !1;
            if (d.target = t,
                "object" != typeof e && (e = {
                    value: e
                }),
                "value" in e) {
                for (d.delimiter = e.delimiter || "",
                    a = Pr(t, d.delimiter),
                    Ir || (Ir = document.createElement("div")),
                    Ir.innerHTML = e.value,
                    r = Pr(Ir, d.delimiter),
                    d.from = n._from,
                    d.from && (h = a,
                        a = r,
                        r = h),
                    d.hasClass = !(!e.newClass && !e.oldClass),
                    d.newClass = e.newClass,
                    d.oldClass = e.oldClass,
                    i = (h = a.length - r.length) < 0 ? a : r,
                    d.fillChar = e.fillChar || (e.padSpace ? "&nbsp;" : ""),
                    h < 0 && (h = -h); --h > -1;)
                    i.push(d.fillChar);
                if ("diff" === e.type) {
                    for (o = 0,
                        s = [],
                        l = [],
                        c = "",
                        h = 0; h < r.length; h++)
                        (u = r[h]) === a[h] ? c += u : (s[o] = c + u,
                            l[o++] = c + a[h],
                            c = "");
                    r = s,
                        a = l,
                        c && (r.push(c),
                            a.push(c))
                }
                e.speed && n.duration(Math.min(.05 / e.speed * i.length, e.maxDuration || 9999)),
                    this.original = a,
                    this.text = r,
                    this._props.push("text")
            } else
                d.text = d.original = [""]
        },
        render: function (t, e) {
            t > 1 ? t = 1 : t < 0 && (t = 0),
                e.from && (t = 1 - t);
            var n, i, r, a = e.text, o = e.hasClass, s = e.newClass, l = e.oldClass, c = e.delimiter, u = e.target, h = e.fillChar, d = e.original, p = a.length, f = t * p + .5 | 0;
            o ? (i = l && f !== p,
                r = ((n = s && f) ? "<span class='" + s + "'>" : "") + a.slice(0, f).join(c) + (n ? "</span>" : "") + (i ? "<span class='" + l + "'>" : "") + c + d.slice(f).join(c) + (i ? "</span>" : "")) : r = a.slice(0, f).join(c) + c + d.slice(f).join(c),
                e.svg ? u.textContent = r : u.innerHTML = "&nbsp;" === h && ~r.indexOf("  ") ? r.split("  ").join("&nbsp;&nbsp;") : r
        }
    };
    Nr.splitInnerHTML = Pr,
        Nr.emojiSafeSplit = Fr,
        Nr.getText = function t(e) {
            var n = e.nodeType
                , i = "";
            if (1 === n || 9 === n || 11 === n) {
                if ("string" == typeof e.textContent)
                    return e.textContent;
                for (e = e.firstChild; e; e = e.nextSibling)
                    i += t(e)
            } else if (3 === n || 4 === n)
                return e.nodeValue;
            return i
        }
        ,
        (Or || "undefined" != typeof window && (Or = window.gsap) && Or.registerPlugin && Or) && Or.registerPlugin(Nr);
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var zr, Br, Hr, kr, Ur, Gr, Wr, Vr, jr, qr, Xr, Yr, Zr, Jr, Qr, Kr, $r, ta, ea, na, ia, ra, aa, oa, sa, la, ca, ua, ha = (function (t, e) {
        t.exports = function () {
            var t = document
                , e = t.createTextNode.bind(t);
            function n(t, e, n) {
                t.style.setProperty(e, n)
            }
            function i(t, e) {
                return t.appendChild(e)
            }
            function r(e, n, r, a) {
                var o = t.createElement("span");
                return n && (o.className = n),
                    r && (!a && o.setAttribute("data-" + n, r),
                        o.textContent = r),
                    e && i(e, o) || o
            }
            function a(t, e) {
                return t.getAttribute("data-" + e)
            }
            function o(e, n) {
                return e && 0 != e.length ? e.nodeName ? [e] : [].slice.call(e[0].nodeName ? e : (n || t).querySelectorAll(e)) : []
            }
            function s(t) {
                for (var e = []; t--;)
                    e[t] = [];
                return e
            }
            function l(t, e) {
                t && t.some(e)
            }
            function c(t) {
                return function (e) {
                    return t[e]
                }
            }
            function u(t, e, i) {
                var r = "--" + e
                    , a = r + "-index";
                l(i, (function (t, e) {
                    Array.isArray(t) ? l(t, (function (t) {
                        n(t, a, e)
                    }
                    )) : n(t, a, e)
                }
                )),
                    n(t, r + "-total", i.length)
            }
            var h = {};
            function d(t, e, n) {
                var i = n.indexOf(t);
                if (-1 == i)
                    n.unshift(t),
                        l(h[t].depends, (function (e) {
                            d(e, t, n)
                        }
                        ));
                else {
                    var r = n.indexOf(e);
                    n.splice(i, 1),
                        n.splice(r, 0, t)
                }
                return n
            }
            function p(t, e, n, i) {
                return {
                    by: t,
                    depends: e,
                    key: n,
                    split: i
                }
            }
            function f(t) {
                return d(t, 0, []).map(c(h))
            }
            function m(t) {
                h[t.by] = t
            }
            function g(t, n, a, s, c) {
                t.normalize();
                var u = []
                    , h = document.createDocumentFragment();
                s && u.push(t.previousSibling);
                var d = [];
                return o(t.childNodes).some((function (t) {
                    if (!t.tagName || t.hasChildNodes()) {
                        if (t.childNodes && t.childNodes.length)
                            return d.push(t),
                                void u.push.apply(u, g(t, n, a, s, c));
                        var i = t.wholeText || ""
                            , o = i.trim();
                        o.length && (" " === i[0] && d.push(e(" ")),
                            l(o.split(a), (function (t, e) {
                                e && c && d.push(r(h, "whitespace", " ", c));
                                var i = r(h, n, t);
                                u.push(i),
                                    d.push(i)
                            }
                            )),
                            " " === i[i.length - 1] && d.push(e(" ")))
                    } else
                        d.push(t)
                }
                )),
                    l(d, (function (t) {
                        i(h, t)
                    }
                    )),
                    t.innerHTML = "",
                    i(t, h),
                    u
            }
            var v = 0;
            function _(t, e) {
                for (var n in e)
                    t[n] = e[n];
                return t
            }
            var x = "words"
                , y = p(x, v, "word", (function (t) {
                    return g(t, "word", /\s+/, 0, 1)
                }
                ))
                , b = "chars"
                , w = p(b, [x], "char", (function (t, e, n) {
                    var i = [];
                    return l(n[x], (function (t, n) {
                        i.push.apply(i, g(t, "char", "", e.whitespace && n))
                    }
                    )),
                        i
                }
                ));
            function M(t) {
                var e = (t = t || {}).key;
                return o(t.target || "[data-splitting]").map((function (n) {
                    var i = n["🍌"];
                    if (!t.force && i)
                        return i;
                    i = n["🍌"] = {
                        el: n
                    };
                    var r = f(t.by || a(n, "splitting") || b)
                        , o = _({}, t);
                    return l(r, (function (t) {
                        if (t.split) {
                            var r = t.by
                                , a = (e ? "-" + e : "") + t.key
                                , s = t.split(n, o, i);
                            a && u(n, a, s),
                                i[r] = s,
                                n.classList.add(r)
                        }
                    }
                    )),
                        n.classList.add("splitting"),
                        i
                }
                ))
            }
            function D(t) {
                var e = (t = t || {}).target = r();
                return e.innerHTML = t.content,
                    M(t),
                    e.outerHTML
            }
            function E(t, e, n) {
                var i = o(e.matching || t.children, t)
                    , r = {};
                return l(i, (function (t) {
                    var e = Math.round(t[n]);
                    (r[e] || (r[e] = [])).push(t)
                }
                )),
                    Object.keys(r).map(Number).sort(T).map(c(r))
            }
            function T(t, e) {
                return t - e
            }
            M.html = D,
                M.add = m;
            var S = p("lines", [x], "line", (function (t, e, n) {
                return E(t, {
                    matching: n[x]
                }, "offsetTop")
            }
            ))
                , C = p("items", v, "item", (function (t, e) {
                    return o(e.matching || t.children, t)
                }
                ))
                , L = p("rows", v, "row", (function (t, e) {
                    return E(t, e, "offsetTop")
                }
                ))
                , A = p("cols", v, "col", (function (t, e) {
                    return E(t, e, "offsetLeft")
                }
                ))
                , R = p("grid", ["rows", "cols"])
                , P = "layout"
                , F = p(P, v, v, (function (t, e) {
                    var s = e.rows = +(e.rows || a(t, "rows") || 1)
                        , l = e.columns = +(e.columns || a(t, "columns") || 1);
                    if (e.image = e.image || a(t, "image") || t.currentSrc || t.src,
                        e.image) {
                        var c = o("img", t)[0];
                        e.image = c && (c.currentSrc || c.src)
                    }
                    e.image && n(t, "background-image", "url(" + e.image + ")");
                    for (var u = s * l, h = [], d = r(v, "cell-grid"); u--;) {
                        var p = r(d, "cell");
                        r(p, "cell-inner"),
                            h.push(p)
                    }
                    return i(t, d),
                        h
                }
                ))
                , O = p("cellRows", [P], "row", (function (t, e, n) {
                    var i = e.rows
                        , r = s(i);
                    return l(n[P], (function (t, e, n) {
                        r[Math.floor(e / (n.length / i))].push(t)
                    }
                    )),
                        r
                }
                ))
                , I = p("cellColumns", [P], "col", (function (t, e, n) {
                    var i = e.columns
                        , r = s(i);
                    return l(n[P], (function (t, e) {
                        r[e % i].push(t)
                    }
                    )),
                        r
                }
                ))
                , N = p("cells", ["cellRows", "cellColumns"], "cell", (function (t, e, n) {
                    return n[P]
                }
                ));
            return m(y),
                m(w),
                m(S),
                m(C),
                m(L),
                m(A),
                m(R),
                m(F),
                m(O),
                m(I),
                m(N),
                M
        }()
    }(zr = {
        exports: {}
    }, zr.exports),
        zr.exports), da = 1, pa = [], fa = [], ma = Date.now, ga = ma(), va = 0, _a = 1, xa = function (t) {
            return t
        }, ya = function (t) {
            return Math.round(1e5 * t) / 1e5 || 0
        }, ba = function () {
            return "undefined" != typeof window
        }, wa = function () {
            return Br || ba() && (Br = window.gsap) && Br.registerPlugin && Br
        }, Ma = function (t) {
            return !!~Vr.indexOf(t)
        }, Da = function (t, e) {
            return ~pa.indexOf(t) && pa[pa.indexOf(t) + 1][e]
        }, Ea = function (t, e) {
            var n = e.s
                , i = e.sc
                , r = fa.indexOf(t)
                , a = i === to.sc ? 1 : 2;
            return !~r && (r = fa.push(t) - 1),
                fa[r + a] || (fa[r + a] = Da(t, n) || (Ma(t) ? i : function (e) {
                    return arguments.length ? t[n] = e : t[n]
                }
                ))
        }, Ta = function (t) {
            return Da(t, "getBoundingClientRect") || (Ma(t) ? function () {
                return ko.width = kr.innerWidth,
                    ko.height = kr.innerHeight,
                    ko
            }
                : function () {
                    return io(t)
                }
            )
        }, Sa = function (t, e) {
            var n = e.s
                , i = e.d2
                , r = e.d
                , a = e.a;
            return (n = "scroll" + i) && (a = Da(t, n)) ? a() - Ta(t)()[r] : Ma(t) ? Math.max(Gr[n], Wr[n]) - (kr["inner" + i] || Gr["client" + i] || Wr["client" + i]) : t[n] - t["offset" + i]
        }, Ca = function (t, e) {
            for (var n = 0; n < ra.length; n += 3)
                (!e || ~e.indexOf(ra[n + 1])) && t(ra[n], ra[n + 1], ra[n + 2])
        }, La = function (t) {
            return "string" == typeof t
        }, Aa = function (t) {
            return "function" == typeof t
        }, Ra = function (t) {
            return "number" == typeof t
        }, Pa = function (t) {
            return "object" == typeof t
        }, Fa = function (t) {
            return Aa(t) && t()
        }, Oa = function (t, e) {
            return function () {
                var n = Fa(t)
                    , i = Fa(e);
                return function () {
                    Fa(n),
                        Fa(i)
                }
            }
        }, Ia = Math.abs, Na = "scrollLeft", za = "scrollTop", Ba = "left", Ha = "top", ka = "right", Ua = "bottom", Ga = "width", Wa = "height", Va = "Right", ja = "Left", qa = "Top", Xa = "Bottom", Ya = "padding", Za = "margin", Ja = "Width", Qa = "Height", Ka = "px", $a = {
            s: Na,
            p: Ba,
            p2: ja,
            os: ka,
            os2: Va,
            d: Ga,
            d2: Ja,
            a: "x",
            sc: function (t) {
                return arguments.length ? kr.scrollTo(t, to.sc()) : kr.pageXOffset || Ur.scrollLeft || Gr.scrollLeft || Wr.scrollLeft || 0
            }
        }, to = {
            s: za,
            p: Ha,
            p2: qa,
            os: Ua,
            os2: Xa,
            d: Wa,
            d2: Qa,
            a: "y",
            op: $a,
            sc: function (t) {
                return arguments.length ? kr.scrollTo($a.sc(), t) : kr.pageYOffset || Ur.scrollTop || Gr.scrollTop || Wr.scrollTop || 0
            }
        }, eo = function (t) {
            return kr.getComputedStyle(t)
        }, no = function (t, e) {
            for (var n in e)
                n in t || (t[n] = e[n]);
            return t
        }, io = function (t, e) {
            var n = e && "matrix(1, 0, 0, 1, 0, 0)" !== eo(t)[ta] && Br.to(t, {
                x: 0,
                y: 0,
                xPercent: 0,
                yPercent: 0,
                rotation: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1,
                skewX: 0,
                skewY: 0
            }).progress(1)
                , i = t.getBoundingClientRect();
            return n && n.progress(0).kill(),
                i
        }, ro = function (t, e) {
            var n = e.d2;
            return t["offset" + n] || t["client" + n] || 0
        }, ao = function (t) {
            var e, n = [], i = t.labels, r = t.duration();
            for (e in i)
                n.push(i[e] / r);
            return n
        }, oo = function (t, e, n, i) {
            return n.split(",").forEach((function (n) {
                return t(e, n, i)
            }
            ))
        }, so = function (t, e, n) {
            return t.addEventListener(e, n, {
                passive: !0
            })
        }, lo = function (t, e, n) {
            return t.removeEventListener(e, n)
        }, co = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        }, uo = {
            toggleActions: "play",
            anticipatePin: 0
        }, ho = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        }, po = function (t, e) {
            if (La(t)) {
                var n = t.indexOf("=")
                    , i = ~n ? +(t.charAt(n - 1) + 1) * parseFloat(t.substr(n + 1)) : 0;
                ~n && (t.indexOf("%") > n && (i *= e / 100),
                    t = t.substr(0, n - 1)),
                    t = i + (t in ho ? ho[t] * e : ~t.indexOf("%") ? parseFloat(t) * e / 100 : parseFloat(t) || 0)
            }
            return t
        }, fo = function (t, e, n, i, r, a, o) {
            var s = r.startColor
                , l = r.endColor
                , c = r.fontSize
                , u = r.indent
                , h = r.fontWeight
                , d = Ur.createElement("div")
                , p = Ma(n) || "fixed" === Da(n, "pinType")
                , f = -1 !== t.indexOf("scroller")
                , m = p ? Wr : n
                , g = -1 !== t.indexOf("start")
                , v = g ? s : l
                , _ = "border-color:" + v + ";font-size:" + c + ";color:" + v + ";font-weight:" + h + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return _ += "position:" + (f && p ? "fixed;" : "absolute;"),
                (f || !p) && (_ += (i === to ? ka : Ua) + ":" + (a + parseFloat(u)) + "px;"),
                o && (_ += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"),
                d._isStart = g,
                d.setAttribute("class", "gsap-marker-" + t),
                d.style.cssText = _,
                d.innerText = e || 0 === e ? t + "-" + e : t,
                m.children[0] ? m.insertBefore(d, m.children[0]) : m.appendChild(d),
                d._offset = d["offset" + i.op.d2],
                mo(d, 0, i, g),
                d
        }, mo = function (t, e, n, i) {
            var r = {
                display: "block"
            }
                , a = n[i ? "os2" : "p2"]
                , o = n[i ? "p2" : "os2"];
            t._isFlipped = i,
                r[n.a + "Percent"] = i ? -100 : 0,
                r[n.a] = i ? "1px" : 0,
                r["border" + a + Ja] = 1,
                r["border" + o + Ja] = 0,
                r[n.p] = e + "px",
                Br.set(t, r)
        }, go = [], vo = {}, _o = function () {
            return Xr || (Xr = qr(Fo))
        }, xo = function () {
            Xr || (Xr = qr(Fo),
                va || To("scrollStart"),
                va = ma())
        }, yo = function () {
            return !Kr && !sa && !Ur.fullscreenElement && jr.restart(!0)
        }, bo = {}, wo = [], Mo = [], Do = function (t) {
            var e, n = Br.ticker.frame, i = [], r = 0;
            if (ua !== n || da) {
                for (Lo(); r < Mo.length; r += 4)
                    (e = kr.matchMedia(Mo[r]).matches) !== Mo[r + 3] && (Mo[r + 3] = e,
                        e ? i.push(r) : Lo(1, Mo[r]) || Aa(Mo[r + 2]) && Mo[r + 2]());
                for (Co(),
                    r = 0; r < i.length; r++)
                    e = i[r],
                        ca = Mo[e],
                        Mo[e + 2] = Mo[e + 1](t);
                ca = 0,
                    Hr && Ao(0, 1),
                    ua = n,
                    To("matchMedia")
            }
        }, Eo = function t() {
            return lo(jo, "scrollEnd", t) || Ao(!0)
        }, To = function (t) {
            return bo[t] && bo[t].map((function (t) {
                return t()
            }
            )) || wo
        }, So = [], Co = function (t) {
            for (var e = 0; e < So.length; e += 4)
                t && So[e + 3] !== t || (So[e].style.cssText = So[e + 1],
                    So[e + 2].uncache = 1)
        }, Lo = function (t, e) {
            var n;
            for (ea = 0; ea < go.length; ea++)
                n = go[ea],
                    e && n.media !== e || (t ? n.kill(1) : (n.scroll.rec || (n.scroll.rec = n.scroll()),
                        n.revert()));
            Co(e),
                e || To("revert")
        }, Ao = function (t, e) {
            if (!va || t) {
                var n = To("refreshInit");
                for (aa && jo.sort(),
                    e || Lo(),
                    ea = 0; ea < go.length; ea++)
                    go[ea].refresh();
                for (n.forEach((function (t) {
                    return t && t.render && t.render(-1)
                }
                )),
                    ea = go.length; ea--;)
                    go[ea].scroll.rec = 0;
                jr.pause(),
                    To("refresh")
            } else
                so(jo, "scrollEnd", Eo)
        }, Ro = 0, Po = 1, Fo = function () {
            var t = go.length
                , e = ma()
                , n = e - ga >= 50
                , i = t && go[0].scroll();
            if (Po = Ro > i ? -1 : 1,
                Ro = i,
                n && (va && !$r && e - va > 200 && (va = 0,
                    To("scrollEnd")),
                    Jr = ga,
                    ga = e),
                Po < 0) {
                for (ea = t; ea-- > 0;)
                    go[ea] && go[ea].update(0, n);
                Po = 1
            } else
                for (ea = 0; ea < t; ea++)
                    go[ea] && go[ea].update(0, n);
            Xr = 0
        }, Oo = [Ba, Ha, Ua, ka, "marginBottom", "marginRight", "marginTop", "marginLeft", "display", "flexShrink", "float", "zIndex"], Io = Oo.concat([Ga, Wa, "boxSizing", "maxWidth", "maxHeight", "position", Za, Ya, "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]), No = function (t, e, n, i) {
            if (t.parentNode !== e) {
                for (var r, a = Oo.length, o = e.style, s = t.style; a--;)
                    o[r = Oo[a]] = n[r];
                o.position = "absolute" === n.position ? "absolute" : "relative",
                    "inline" === n.display && (o.display = "inline-block"),
                    s.bottom = s.right = "auto",
                    o.overflow = "visible",
                    o.boxSizing = "border-box",
                    o.width = ro(t, $a) + Ka,
                    o.height = ro(t, to) + Ka,
                    o.padding = s.margin = s.top = s.left = "0",
                    Bo(i),
                    s.width = s.maxWidth = n.width,
                    s.height = s.maxHeight = n.height,
                    s.padding = n.padding,
                    t.parentNode.insertBefore(e, t),
                    e.appendChild(t)
            }
        }, zo = /([A-Z])/g, Bo = function (t) {
            if (t) {
                var e, n, i = t.t.style, r = t.length, a = 0;
                for ((t.t._gsap || Br.core.getCache(t.t)).uncache = 1; a < r; a += 2)
                    n = t[a + 1],
                        e = t[a],
                        n ? i[e] = n : i[e] && i.removeProperty(e.replace(zo, "-$1").toLowerCase())
            }
        }, Ho = function (t) {
            for (var e = Io.length, n = t.style, i = [], r = 0; r < e; r++)
                i.push(Io[r], n[Io[r]]);
            return i.t = t,
                i
        }, ko = {
            left: 0,
            top: 0
        }, Uo = function (t, e, n, i, r, a, o, s, l, c, u, h) {
            if (Aa(t) && (t = t(s)),
                La(t) && "max" === t.substr(0, 3) && (t = h + ("=" === t.charAt(4) ? po("0" + t.substr(3), n) : 0)),
                Ra(t))
                o && mo(o, n, i, !0);
            else {
                Aa(e) && (e = e(s));
                var d, p, f, m = Yr(e)[0] || Wr, g = io(m) || {}, v = t.split(" ");
                g && (g.left || g.top) || "none" !== eo(m).display || (f = m.style.display,
                    m.style.display = "block",
                    g = io(m),
                    f ? m.style.display = f : m.style.removeProperty("display")),
                    d = po(v[0], g[i.d]),
                    p = po(v[1] || "0", n),
                    t = g[i.p] - l[i.p] - c + d + r - p,
                    o && mo(o, p, i, n - p < 20 || o._isStart && p > 20),
                    n -= n - p
            }
            if (a) {
                var _ = t + n
                    , x = a._isStart;
                h = "scroll" + i.d2,
                    mo(a, _, i, x && _ > 20 || !x && (u ? Math.max(Wr[h], Gr[h]) : a.parentNode[h]) <= _ + 1),
                    u && (l = io(o),
                        u && (a.style[i.op.p] = l[i.op.p] - i.op.m - a._offset + Ka))
            }
            return Math.round(t)
        }, Go = /(?:webkit|moz|length|cssText|inset)/i, Wo = function (t, e, n, i) {
            if (t.parentNode !== e) {
                var r, a, o = t.style;
                if (e === Wr) {
                    for (r in t._stOrig = o.cssText,
                        a = eo(t))
                        +r || Go.test(r) || !a[r] || "string" != typeof o[r] || "0" === r || (o[r] = a[r]);
                    o.top = n,
                        o.left = i
                } else
                    o.cssText = t._stOrig;
                Br.core.getCache(t).uncache = 1,
                    e.appendChild(t)
            }
        }, Vo = function (t, e) {
            var n, i, r = Ea(t, e), a = "_scroll" + e.p2, o = function e(o, s, l, c, u) {
                var h = e.tween
                    , d = s.onComplete
                    , p = {};
                return h && h.kill(),
                    n = Math.round(l),
                    s[a] = o,
                    s.modifiers = p,
                    p[a] = function (t) {
                        return (t = ya(r())) !== n && t !== i && Math.abs(t - n) > 2 ? (h.kill(),
                            e.tween = 0) : t = l + c * h.ratio + u * h.ratio * h.ratio,
                            i = n,
                            n = ya(t)
                    }
                    ,
                    s.onComplete = function () {
                        e.tween = 0,
                            d && d.call(h)
                    }
                    ,
                    h = e.tween = Br.to(t, s)
            };
            return t[a] = r,
                t.addEventListener("wheel", (function () {
                    return o.tween && o.tween.kill() && (o.tween = 0)
                }
                )),
                o
        };
    /*!
   * ScrollTrigger 3.6.1
   * https://greensock.com
   *
   * @license Copyright 2008-2021, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */
    $a.op = to;
    var jo = function () {
        function t(e, n) {
            Hr || t.register(Br) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                this.init(e, n)
        }
        return t.prototype.init = function (e, n) {
            if (this.progress = this.start = 0,
                this.vars && this.kill(1),
                _a) {
                var i, r, a, o, s, l, c, u, h, d, p, f, m, g, v, _, x, y, b, w, M, D, E, T, S, C, L, A, R, P, F, O, I, N, z, B, H, k, U, G = (e = no(La(e) || Ra(e) || e.nodeType ? {
                    trigger: e
                } : e, uo)).horizontal ? $a : to, W = e, V = W.onUpdate, j = W.toggleClass, q = W.id, X = W.onToggle, Y = W.onRefresh, Z = W.scrub, J = W.trigger, Q = W.pin, K = W.pinSpacing, $ = W.invalidateOnRefresh, tt = W.anticipatePin, et = W.onScrubComplete, nt = W.onSnapComplete, it = W.once, rt = W.snap, at = W.pinReparent, ot = !Z && 0 !== Z, st = Yr(e.scroller || kr)[0], lt = Br.core.getCache(st), ct = Ma(st), ut = "pinType" in e ? "fixed" === e.pinType : ct || "fixed" === Da(st, "pinType"), ht = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack], dt = ot && e.toggleActions.split(" "), pt = "markers" in e ? e.markers : uo.markers, ft = ct ? 0 : parseFloat(eo(st)["border" + G.p2 + Ja]) || 0, mt = this, gt = e.onRefreshInit && function () {
                    return e.onRefreshInit(mt)
                }
                    , vt = function (t, e, n) {
                        var i = n.d
                            , r = n.d2
                            , a = n.a;
                        return (a = Da(t, "getBoundingClientRect")) ? function () {
                            return a()[i]
                        }
                            : function () {
                                return (e ? kr["inner" + r] : t["client" + r]) || 0
                            }
                    }(st, ct, G), _t = function (t, e) {
                        return !e || ~pa.indexOf(t) ? Ta(t) : function () {
                            return ko
                        }
                    }(st, ct);
                mt.media = ca,
                    tt *= 45,
                    go.push(mt),
                    mt.scroller = st,
                    mt.scroll = Ea(st, G),
                    s = mt.scroll(),
                    mt.vars = e,
                    n = n || e.animation,
                    "refreshPriority" in e && (aa = 1),
                    lt.tweenScroll = lt.tweenScroll || {
                        top: Vo(st, to),
                        left: Vo(st, $a)
                    },
                    mt.tweenTo = i = lt.tweenScroll[G.p],
                    n && (n.vars.lazy = !1,
                        n._initted || !1 !== n.vars.immediateRender && !1 !== e.immediateRender && n.render(0, !0, !0),
                        mt.animation = n.pause(),
                        n.scrollTrigger = mt,
                        (O = Ra(Z) && Z) && (F = Br.to(n, {
                            ease: "power3",
                            duration: O,
                            onComplete: function () {
                                return et && et(mt)
                            }
                        })),
                        R = 0,
                        q || (q = n.vars.id)),
                    rt && (Pa(rt) || (rt = {
                        snapTo: rt
                    }),
                        "scrollBehavior" in Wr.style && Br.set(ct ? [Wr, Gr] : st, {
                            scrollBehavior: "auto"
                        }),
                        a = Aa(rt.snapTo) ? rt.snapTo : "labels" === rt.snapTo ? function (t) {
                            return function (e) {
                                return Br.utils.snap(ao(t), e)
                            }
                        }(n) : "labelsDirectional" === rt.snapTo ? (k = n,
                            function (t, e) {
                                var n, i = ao(k);
                                if (i.sort((function (t, e) {
                                    return t - e
                                }
                                )),
                                    e.direction > 0) {
                                    for (t -= 1e-4,
                                        n = 0; n < i.length; n++)
                                        if (i[n] >= t)
                                            return i[n];
                                    return i.pop()
                                }
                                for (n = i.length,
                                    t += 1e-4; n--;)
                                    if (i[n] <= t)
                                        return i[n];
                                return i[0]
                            }
                        ) : Br.utils.snap(rt.snapTo),
                        I = rt.duration || {
                            min: .1,
                            max: 2
                        },
                        I = Pa(I) ? Zr(I.min, I.max) : Zr(I, I),
                        N = Br.delayedCall(rt.delay || O / 2 || .1, (function () {
                            if (Math.abs(mt.getVelocity()) < 10 && !$r) {
                                var t = n && !ot ? n.totalProgress() : mt.progress
                                    , e = (t - P) / (ma() - Jr) * 1e3 || 0
                                    , r = Ia(e / 2) * e / .185
                                    , o = t + (!1 === rt.inertia ? 0 : r)
                                    , s = Zr(0, 1, a(o, mt))
                                    , l = mt.scroll()
                                    , h = Math.round(c + s * g)
                                    , d = rt
                                    , p = d.onStart
                                    , f = d.onInterrupt
                                    , m = d.onComplete
                                    , v = i.tween;
                                if (l <= u && l >= c && h !== l) {
                                    if (v && !v._initted && v.data <= Math.abs(h - l))
                                        return;
                                    i(h, {
                                        duration: I(Ia(.185 * Math.max(Ia(o - t), Ia(s - t)) / e / .05 || 0)),
                                        ease: rt.ease || "power3",
                                        data: Math.abs(h - l),
                                        onInterrupt: function () {
                                            return N.restart(!0) && f && f(mt)
                                        },
                                        onComplete: function () {
                                            R = P = n && !ot ? n.totalProgress() : mt.progress,
                                                nt && nt(mt),
                                                m && m(mt)
                                        }
                                    }, l, r * g, h - l - r * g),
                                        p && p(mt, i.tween)
                                }
                            } else
                                mt.isActive && N.restart(!0)
                        }
                        )).pause()),
                    q && (vo[q] = mt),
                    J = mt.trigger = Yr(J || Q)[0],
                    Q = !0 === Q ? J : Yr(Q)[0],
                    La(j) && (j = {
                        targets: J,
                        className: j
                    }),
                    Q && (!1 === K || K === Za || (K = !(!K && "flex" === eo(Q.parentNode).display) && Ya),
                        mt.pin = Q,
                        !1 !== e.force3D && Br.set(Q, {
                            force3D: !0
                        }),
                        (r = Br.core.getCache(Q)).spacer ? v = r.pinState : (r.spacer = y = Ur.createElement("div"),
                            y.setAttribute("class", "pin-spacer" + (q ? " pin-spacer-" + q : "")),
                            r.pinState = v = Ho(Q)),
                        mt.spacer = y = r.spacer,
                        A = eo(Q),
                        T = A[K + G.os2],
                        w = Br.getProperty(Q),
                        M = Br.quickSetter(Q, G.a, Ka),
                        No(Q, y, A),
                        x = Ho(Q)),
                    pt && (m = Pa(pt) ? no(pt, co) : co,
                        p = fo("scroller-start", q, st, G, m, 0),
                        f = fo("scroller-end", q, st, G, m, 0, p),
                        b = p["offset" + G.op.d2],
                        h = fo("start", q, st, G, m, b),
                        d = fo("end", q, st, G, m, b),
                        ut || ((U = ct ? Wr : st).style.position = "absolute" === eo(U).position ? "absolute" : "relative",
                            Br.set([p, f], {
                                force3D: !0
                            }),
                            C = Br.quickSetter(p, G.a, Ka),
                            L = Br.quickSetter(f, G.a, Ka))),
                    mt.revert = function (t) {
                        var e = !1 !== t || !mt.enabled
                            , i = Kr;
                        e !== o && (e && (B = Math.max(mt.scroll(), mt.scroll.rec || 0),
                            z = mt.progress,
                            H = n && n.progress()),
                            h && [h, d, p, f].forEach((function (t) {
                                return t.style.display = e ? "none" : "block"
                            }
                            )),
                            e && (Kr = 1),
                            mt.update(e),
                            Kr = i,
                            Q && (e ? function (t, e, n) {
                                if (Bo(n),
                                    t.parentNode === e) {
                                    var i = e.parentNode;
                                    i && (i.insertBefore(t, e),
                                        i.removeChild(e))
                                }
                            }(Q, y, v) : (!at || !mt.isActive) && No(Q, y, eo(Q), S)),
                            o = e)
                    }
                    ,
                    mt.refresh = function (i, r) {
                        if (!Kr && mt.enabled || r)
                            if (Q && i && va)
                                so(t, "scrollEnd", Eo);
                            else {
                                Kr = 1,
                                    F && F.pause(),
                                    $ && n && n.progress(0).invalidate(),
                                    o || mt.revert();
                                for (var a, m, b, M, T, C, L, A, R, P = vt(), O = _t(), I = Sa(st, G), N = 0, k = 0, U = e.end, W = e.endTrigger || J, V = e.start || (0 !== e.start && J ? Q ? "0 0" : "0 100%" : 0), j = J && Math.max(0, go.indexOf(mt)) || 0, q = j; q--;)
                                    (C = go[q]).end || C.refresh(0, 1) || (Kr = 1),
                                        (L = C.pin) && (L === J || L === Q) && C.revert();
                                for (c = Uo(V, J, P, G, mt.scroll(), h, p, mt, O, ft, ut, I) || (Q ? -.001 : 0),
                                    Aa(U) && (U = U(mt)),
                                    La(U) && !U.indexOf("+=") && (~U.indexOf(" ") ? U = (La(V) ? V.split(" ")[0] : "") + U : (N = po(U.substr(2), P),
                                        U = La(V) ? V : c + N,
                                        W = J)),
                                    u = Math.max(c, Uo(U || (W ? "100% 0" : I), W, P, G, mt.scroll() + N, d, f, mt, O, ft, ut, I)) || -.001,
                                    g = u - c || (c -= .01) && .001,
                                    N = 0,
                                    q = j; q--;)
                                    (L = (C = go[q]).pin) && C.start - C._pinPush < c && (a = C.end - C.start,
                                        L === J && (N += a),
                                        L === Q && (k += a));
                                if (c += N,
                                    u += N,
                                    mt._pinPush = k,
                                    h && N && ((a = {})[G.a] = "+=" + N,
                                        Br.set([h, d], a)),
                                    Q)
                                    a = eo(Q),
                                        M = G === to,
                                        b = mt.scroll(),
                                        D = parseFloat(w(G.a)) + k,
                                        !I && u > 1 && ((ct ? Wr : st).style["overflow-" + G.a] = "scroll"),
                                        No(Q, y, a),
                                        x = Ho(Q),
                                        m = io(Q, !0),
                                        A = ut && Ea(st, M ? $a : to)(),
                                        K && ((S = [K + G.os2, g + k + Ka]).t = y,
                                            (q = K === Ya ? ro(Q, G) + g + k : 0) && S.push(G.d, q + Ka),
                                            Bo(S),
                                            ut && mt.scroll(B)),
                                        ut && ((T = {
                                            top: m.top + (M ? b - c : A) + Ka,
                                            left: m.left + (M ? A : b - c) + Ka,
                                            boxSizing: "border-box",
                                            position: "fixed"
                                        }).width = T.maxWidth = Math.ceil(m.width) + Ka,
                                            T.height = T.maxHeight = Math.ceil(m.height) + Ka,
                                            T.margin = T.marginTop = T.marginRight = T.marginBottom = T.marginLeft = "0",
                                            T.padding = a.padding,
                                            T.paddingTop = a.paddingTop,
                                            T.paddingRight = a.paddingRight,
                                            T.paddingBottom = a.paddingBottom,
                                            T.paddingLeft = a.paddingLeft,
                                            _ = function (t, e, n) {
                                                for (var i, r = [], a = t.length, o = n ? 8 : 0; o < a; o += 2)
                                                    i = t[o],
                                                        r.push(i, i in e ? e[i] : t[o + 1]);
                                                return r.t = t.t,
                                                    r
                                            }(v, T, at)),
                                        n ? (R = n._initted,
                                            oa(1),
                                            n.progress(1, !0),
                                            E = w(G.a) - D + g + k,
                                            g !== E && _.splice(_.length - 2, 2),
                                            n.progress(0, !0),
                                            R || n.invalidate(),
                                            oa(0)) : E = g;
                                else if (J && mt.scroll())
                                    for (m = J.parentNode; m && m !== Wr;)
                                        m._pinOffset && (c -= m._pinOffset,
                                            u -= m._pinOffset),
                                            m = m.parentNode;
                                for (q = 0; q < j; q++)
                                    (C = go[q].pin) && (C === J || C === Q) && go[q].revert(!1);
                                mt.start = c,
                                    mt.end = u,
                                    (s = l = mt.scroll()) < B && mt.scroll(B),
                                    mt.revert(!1),
                                    Kr = 0,
                                    n && ot && n._initted && n.progress(H, !0).render(n.time(), !0, !0),
                                    z !== mt.progress && (F && n.totalProgress(z, !0),
                                        mt.progress = z,
                                        mt.update()),
                                    Q && K && (y._pinOffset = Math.round(mt.progress * E)),
                                    Y && Y(mt)
                            }
                    }
                    ,
                    mt.getVelocity = function () {
                        return (mt.scroll() - l) / (ma() - Jr) * 1e3 || 0
                    }
                    ,
                    mt.update = function (t, e) {
                        var r, a, o, h, d, f = mt.scroll(), m = t ? 0 : (f - c) / g, v = m < 0 ? 0 : m > 1 ? 1 : m || 0, b = mt.progress;
                        if (e && (l = s,
                            s = f,
                            rt && (P = R,
                                R = n && !ot ? n.totalProgress() : v)),
                            tt && !v && Q && !Kr && !da && va && c < f + (f - l) / (ma() - Jr) * tt && (v = 1e-4),
                            v !== b && mt.enabled) {
                            if (h = (d = (r = mt.isActive = !!v && v < 1) !== (!!b && b < 1)) || !!v != !!b,
                                mt.direction = v > b ? 1 : -1,
                                mt.progress = v,
                                ot || (!F || Kr || da ? n && n.totalProgress(v, !!Kr) : (F.vars.totalProgress = v,
                                    F.invalidate().restart())),
                                Q)
                                if (t && K && (y.style[K + G.os2] = T),
                                    ut) {
                                    if (h) {
                                        if (o = !t && v > b && u + 1 > f && f + 1 >= Sa(st, G),
                                            at)
                                            if (t || !r && !o)
                                                Wo(Q, y);
                                            else {
                                                var w = io(Q, !0)
                                                    , S = f - c;
                                                Wo(Q, Wr, w.top + (G === to ? S : 0) + Ka, w.left + (G === to ? 0 : S) + Ka)
                                            }
                                        Bo(r || o ? _ : x),
                                            E !== g && v < 1 && r || M(D + (1 !== v || o ? 0 : E))
                                    }
                                } else
                                    M(D + E * v);
                            rt && !i.tween && !Kr && !da && N.restart(!0),
                                j && (d || it && v && (v < 1 || !la)) && Yr(j.targets).forEach((function (t) {
                                    return t.classList[r || it ? "add" : "remove"](j.className)
                                }
                                )),
                                V && !ot && !t && V(mt),
                                h && !Kr ? (a = v && !b ? 0 : 1 === v ? 1 : 1 === b ? 2 : 3,
                                    ot && (o = !d && "none" !== dt[a + 1] && dt[a + 1] || dt[a],
                                        n && ("complete" === o || "reset" === o || o in n) && ("complete" === o ? n.pause().totalProgress(1) : "reset" === o ? n.restart(!0).pause() : n[o]()),
                                        V && V(mt)),
                                    !d && la || (X && d && X(mt),
                                        ht[a] && ht[a](mt),
                                        it && (1 === v ? mt.kill(!1, 1) : ht[a] = 0),
                                        d || ht[a = 1 === v ? 1 : 3] && ht[a](mt))) : ot && V && !Kr && V(mt)
                        }
                        L && (C(f + (p._isFlipped ? 1 : 0)),
                            L(f))
                    }
                    ,
                    mt.enable = function () {
                        mt.enabled || (mt.enabled = !0,
                            so(st, "resize", yo),
                            so(st, "scroll", xo),
                            gt && so(t, "refreshInit", gt),
                            n && n.add ? Br.delayedCall(.01, (function () {
                                return c || u || mt.refresh()
                            }
                            )) && (g = .01) && (c = u = 0) : mt.refresh())
                    }
                    ,
                    mt.disable = function (e, n) {
                        if (mt.enabled && (!1 !== e && mt.revert(),
                            mt.enabled = mt.isActive = !1,
                            n || F && F.pause(),
                            B = 0,
                            r && (r.uncache = 1),
                            gt && lo(t, "refreshInit", gt),
                            N && (N.pause(),
                                i.tween && i.tween.kill() && (i.tween = 0)),
                            !ct)) {
                            for (var a = go.length; a--;)
                                if (go[a].scroller === st && go[a] !== mt)
                                    return;
                            lo(st, "resize", yo),
                                lo(st, "scroll", xo)
                        }
                    }
                    ,
                    mt.kill = function (t, e) {
                        mt.disable(t, e),
                            q && delete vo[q];
                        var i = go.indexOf(mt);
                        go.splice(i, 1),
                            i === ea && Po > 0 && ea--,
                            n && (n.scrollTrigger = null,
                                t && n.render(-1),
                                e || n.kill()),
                            h && [h, d, p, f].forEach((function (t) {
                                return t.parentNode.removeChild(t)
                            }
                            )),
                            Q && (r && (r.uncache = 1),
                                i = 0,
                                go.forEach((function (t) {
                                    return t.pin === Q && i++
                                }
                                )),
                                i || (r.spacer = 0))
                    }
                    ,
                    mt.enable()
            } else
                this.update = this.refresh = this.kill = xa
        }
            ,
            t.register = function (e) {
                if (!Hr && (Br = e || wa(),
                    ba() && window.document && (kr = window,
                        Ur = document,
                        Gr = Ur.documentElement,
                        Wr = Ur.body),
                    Br && (Yr = Br.utils.toArray,
                        Zr = Br.utils.clamp,
                        oa = Br.core.suppressOverwrites || xa,
                        Br.core.globals("ScrollTrigger", t),
                        Wr))) {
                    qr = kr.requestAnimationFrame || function (t) {
                        return setTimeout(t, 16)
                    }
                        ,
                        so(kr, "wheel", xo),
                        Vr = [kr, Ur, Gr, Wr],
                        so(Ur, "scroll", xo);
                    var n, i = Wr.style, r = i.borderTop;
                    i.borderTop = "1px solid #000",
                        n = io(Wr),
                        to.m = Math.round(n.top + to.sc()) || 0,
                        $a.m = Math.round(n.left + $a.sc()) || 0,
                        r ? i.borderTop = r : i.removeProperty("border-top"),
                        Qr = setInterval(_o, 200),
                        Br.delayedCall(.5, (function () {
                            return da = 0
                        }
                        )),
                        so(Ur, "touchcancel", xa),
                        so(Wr, "touchstart", xa),
                        oo(so, Ur, "pointerdown,touchstart,mousedown", (function () {
                            return $r = 1
                        }
                        )),
                        oo(so, Ur, "pointerup,touchend,mouseup", (function () {
                            return $r = 0
                        }
                        )),
                        ta = Br.utils.checkPrefix("transform"),
                        Io.push(ta),
                        Hr = ma(),
                        jr = Br.delayedCall(.2, Ao).pause(),
                        ra = [Ur, "visibilitychange", function () {
                            var t = kr.innerWidth
                                , e = kr.innerHeight;
                            Ur.hidden ? (na = t,
                                ia = e) : na === t && ia === e || yo()
                        }
                            , Ur, "DOMContentLoaded", Ao, kr, "load", function () {
                                return va || Ao()
                            }
                            , kr, "resize", yo],
                        Ca(so)
                }
                return Hr
            }
            ,
            t.defaults = function (t) {
                for (var e in t)
                    uo[e] = t[e]
            }
            ,
            t.kill = function () {
                _a = 0,
                    go.slice(0).forEach((function (t) {
                        return t.kill(1)
                    }
                    ))
            }
            ,
            t.config = function (t) {
                "limitCallbacks" in t && (la = !!t.limitCallbacks);
                var e = t.syncInterval;
                e && clearInterval(Qr) || (Qr = e) && setInterval(_o, e),
                    "autoRefreshEvents" in t && (Ca(lo) || Ca(so, t.autoRefreshEvents || "none"),
                        sa = -1 === (t.autoRefreshEvents + "").indexOf("resize"))
            }
            ,
            t.scrollerProxy = function (t, e) {
                var n = Yr(t)[0]
                    , i = fa.indexOf(n)
                    , r = Ma(n);
                ~i && fa.splice(i, r ? 6 : 2),
                    r ? pa.unshift(kr, e, Wr, e, Gr, e) : pa.unshift(n, e)
            }
            ,
            t.matchMedia = function (t) {
                var e, n, i, r, a;
                for (n in t)
                    i = Mo.indexOf(n),
                        r = t[n],
                        ca = n,
                        "all" === n ? r() : (e = kr.matchMedia(n)) && (e.matches && (a = r()),
                            ~i ? (Mo[i + 1] = Oa(Mo[i + 1], r),
                                Mo[i + 2] = Oa(Mo[i + 2], a)) : (i = Mo.length,
                                    Mo.push(n, r, a),
                                    e.addListener ? e.addListener(Do) : e.addEventListener("change", Do)),
                            Mo[i + 3] = e.matches),
                        ca = 0;
                return Mo
            }
            ,
            t.clearMatchMedia = function (t) {
                t || (Mo.length = 0),
                    (t = Mo.indexOf(t)) >= 0 && Mo.splice(t, 4)
            }
            ,
            t
    }();
    jo.version = "3.6.1",
        jo.saveStyles = function (t) {
            return t ? Yr(t).forEach((function (t) {
                if (t && t.style) {
                    var e = So.indexOf(t);
                    e >= 0 && So.splice(e, 4),
                        So.push(t, t.style.cssText, Br.core.getCache(t), ca)
                }
            }
            )) : So
        }
        ,
        jo.revert = function (t, e) {
            return Lo(!t, e)
        }
        ,
        jo.create = function (t, e) {
            return new jo(t, e)
        }
        ,
        jo.refresh = function (t) {
            return t ? yo() : Ao(!0)
        }
        ,
        jo.update = Fo,
        jo.maxScroll = function (t, e) {
            return Sa(t, e ? $a : to)
        }
        ,
        jo.getScrollFunc = function (t, e) {
            return Ea(Yr(t)[0], e ? $a : to)
        }
        ,
        jo.getById = function (t) {
            return vo[t]
        }
        ,
        jo.getAll = function () {
            return go.slice(0)
        }
        ,
        jo.isScrolling = function () {
            return !!va
        }
        ,
        jo.addEventListener = function (t, e) {
            var n = bo[t] || (bo[t] = []);
            ~n.indexOf(e) || n.push(e)
        }
        ,
        jo.removeEventListener = function (t, e) {
            var n = bo[t]
                , i = n && n.indexOf(e);
            i >= 0 && n.splice(i, 1)
        }
        ,
        jo.batch = function (t, e) {
            var n, i = [], r = {}, a = e.interval || .016, o = e.batchMax || 1e9, s = function (t, e) {
                var n = []
                    , i = []
                    , r = Br.delayedCall(a, (function () {
                        e(n, i),
                            n = [],
                            i = []
                    }
                    )).pause();
                return function (t) {
                    n.length || r.restart(!0),
                        n.push(t.trigger),
                        i.push(t),
                        o <= n.length && r.progress(1)
                }
            };
            for (n in e)
                r[n] = "on" === n.substr(0, 2) && Aa(e[n]) && "onRefreshInit" !== n ? s(0, e[n]) : e[n];
            return Aa(o) && (o = o(),
                so(jo, "refresh", (function () {
                    return o = e.batchMax()
                }
                ))),
                Yr(t).forEach((function (t) {
                    var e = {};
                    for (n in r)
                        e[n] = r[n];
                    e.trigger = t,
                        i.push(jo.create(e))
                }
                )),
                i
        }
        ,
        jo.sort = function (t) {
            return go.sort(t || function (t, e) {
                return -1e6 * (t.vars.refreshPriority || 0) + t.start - (e.start + -1e6 * (e.vars.refreshPriority || 0))
            }
            )
        }
        ,
        wa() && Br.registerPlugin(jo);
    /**
   * @license
   * Copyright 2010-2021 Three.js Authors
   * SPDX-License-Identifier: MIT
   */
    const qo = 100
        , Xo = 1e3
        , Yo = 1001
        , Zo = 1002
        , Jo = 1003
        , Qo = 1006
        , Ko = 1008
        , $o = 1009
        , ts = 1012
        , es = 1014
        , ns = 1015
        , is = 1016
        , rs = 1020
        , as = 1022
        , os = 1023
        , ss = 1026
        , ls = 1027
        , cs = 3e3
        , us = 7680
        , hs = 35044
        , ds = 35048
        , ps = "300 es";
    class fs {
        addEventListener(t, e) {
            void 0 === this._listeners && (this._listeners = {});
            const n = this._listeners;
            void 0 === n[t] && (n[t] = []),
                -1 === n[t].indexOf(e) && n[t].push(e)
        }
        hasEventListener(t, e) {
            if (void 0 === this._listeners)
                return !1;
            const n = this._listeners;
            return void 0 !== n[t] && -1 !== n[t].indexOf(e)
        }
        removeEventListener(t, e) {
            if (void 0 === this._listeners)
                return;
            const n = this._listeners[t];
            if (void 0 !== n) {
                const t = n.indexOf(e);
                -1 !== t && n.splice(t, 1)
            }
        }
        dispatchEvent(t) {
            if (void 0 === this._listeners)
                return;
            const e = this._listeners[t.type];
            if (void 0 !== e) {
                t.target = this;
                const n = e.slice(0);
                for (let e = 0, i = n.length; e < i; e++)
                    n[e].call(this, t);
                t.target = null
            }
        }
    }
    const ms = [];
    for (let t = 0; t < 256; t++)
        ms[t] = (t < 16 ? "0" : "") + t.toString(16);
    const gs = Math.PI / 180
        , vs = 180 / Math.PI;
    function _s() {
        const t = 4294967295 * Math.random() | 0
            , e = 4294967295 * Math.random() | 0
            , n = 4294967295 * Math.random() | 0
            , i = 4294967295 * Math.random() | 0;
        return (ms[255 & t] + ms[t >> 8 & 255] + ms[t >> 16 & 255] + ms[t >> 24 & 255] + "-" + ms[255 & e] + ms[e >> 8 & 255] + "-" + ms[e >> 16 & 15 | 64] + ms[e >> 24 & 255] + "-" + ms[63 & n | 128] + ms[n >> 8 & 255] + "-" + ms[n >> 16 & 255] + ms[n >> 24 & 255] + ms[255 & i] + ms[i >> 8 & 255] + ms[i >> 16 & 255] + ms[i >> 24 & 255]).toUpperCase()
    }
    function xs(t, e, n) {
        return Math.max(e, Math.min(n, t))
    }
    function ys(t, e, n) {
        return (1 - n) * t + n * e
    }
    function bs(t) {
        return 0 == (t & t - 1) && 0 !== t
    }
    function ws(t) {
        return Math.pow(2, Math.floor(Math.log(t) / Math.LN2))
    }
    class Ms {
        constructor(t = 0, e = 0) {
            this.x = t,
                this.y = e
        }
        get width() {
            return this.x
        }
        set width(t) {
            this.x = t
        }
        get height() {
            return this.y
        }
        set height(t) {
            this.y = t
        }
        set(t, e) {
            return this.x = t,
                this.y = e,
                this
        }
        setScalar(t) {
            return this.x = t,
                this.y = t,
                this
        }
        setX(t) {
            return this.x = t,
                this
        }
        setY(t) {
            return this.y = t,
                this
        }
        setComponent(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
            return this
        }
        getComponent(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                default:
                    throw new Error("index is out of range: " + t)
            }
        }
        clone() {
            return new this.constructor(this.x, this.y)
        }
        copy(t) {
            return this.x = t.x,
                this.y = t.y,
                this
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                this.addVectors(t, e)) : (this.x += t.x,
                    this.y += t.y,
                    this)
        }
        addScalar(t) {
            return this.x += t,
                this.y += t,
                this
        }
        addVectors(t, e) {
            return this.x = t.x + e.x,
                this.y = t.y + e.y,
                this
        }
        addScaledVector(t, e) {
            return this.x += t.x * e,
                this.y += t.y * e,
                this
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
                this.subVectors(t, e)) : (this.x -= t.x,
                    this.y -= t.y,
                    this)
        }
        subScalar(t) {
            return this.x -= t,
                this.y -= t,
                this
        }
        subVectors(t, e) {
            return this.x = t.x - e.x,
                this.y = t.y - e.y,
                this
        }
        multiply(t) {
            return this.x *= t.x,
                this.y *= t.y,
                this
        }
        multiplyScalar(t) {
            return this.x *= t,
                this.y *= t,
                this
        }
        divide(t) {
            return this.x /= t.x,
                this.y /= t.y,
                this
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t)
        }
        applyMatrix3(t) {
            const e = this.x
                , n = this.y
                , i = t.elements;
            return this.x = i[0] * e + i[3] * n + i[6],
                this.y = i[1] * e + i[4] * n + i[7],
                this
        }
        min(t) {
            return this.x = Math.min(this.x, t.x),
                this.y = Math.min(this.y, t.y),
                this
        }
        max(t) {
            return this.x = Math.max(this.x, t.x),
                this.y = Math.max(this.y, t.y),
                this
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
                this.y = Math.max(t.y, Math.min(e.y, this.y)),
                this
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)),
                this.y = Math.max(t, Math.min(e, this.y)),
                this
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        }
        floor() {
            return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this
        }
        ceil() {
            return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this
        }
        round() {
            return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
                this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
                this
        }
        negate() {
            return this.x = -this.x,
                this.y = -this.y,
                this
        }
        dot(t) {
            return this.x * t.x + this.y * t.y
        }
        cross(t) {
            return this.x * t.y - this.y * t.x
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        angle() {
            return Math.atan2(-this.y, -this.x) + Math.PI
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t))
        }
        distanceToSquared(t) {
            const e = this.x - t.x
                , n = this.y - t.y;
            return e * e + n * n
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y)
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t)
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e,
                this.y += (t.y - this.y) * e,
                this
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n,
                this.y = t.y + (e.y - t.y) * n,
                this
        }
        equals(t) {
            return t.x === this.x && t.y === this.y
        }
        fromArray(t, e = 0) {
            return this.x = t[e],
                this.y = t[e + 1],
                this
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x,
                t[e + 1] = this.y,
                t
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),
                this.x = t.getX(e),
                this.y = t.getY(e),
                this
        }
        rotateAround(t, e) {
            const n = Math.cos(e)
                , i = Math.sin(e)
                , r = this.x - t.x
                , a = this.y - t.y;
            return this.x = r * n - a * i + t.x,
                this.y = r * i + a * n + t.y,
                this
        }
        random() {
            return this.x = Math.random(),
                this.y = Math.random(),
                this
        }
    }
    Ms.prototype.isVector2 = !0;
    class Ds {
        constructor() {
            this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
                arguments.length > 0 && console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")
        }
        set(t, e, n, i, r, a, o, s, l) {
            const c = this.elements;
            return c[0] = t,
                c[1] = i,
                c[2] = o,
                c[3] = e,
                c[4] = r,
                c[5] = s,
                c[6] = n,
                c[7] = a,
                c[8] = l,
                this
        }
        identity() {
            return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
                this
        }
        copy(t) {
            const e = this.elements
                , n = t.elements;
            return e[0] = n[0],
                e[1] = n[1],
                e[2] = n[2],
                e[3] = n[3],
                e[4] = n[4],
                e[5] = n[5],
                e[6] = n[6],
                e[7] = n[7],
                e[8] = n[8],
                this
        }
        extractBasis(t, e, n) {
            return t.setFromMatrix3Column(this, 0),
                e.setFromMatrix3Column(this, 1),
                n.setFromMatrix3Column(this, 2),
                this
        }
        setFromMatrix4(t) {
            const e = t.elements;
            return this.set(e[0], e[4], e[8], e[1], e[5], e[9], e[2], e[6], e[10]),
                this
        }
        multiply(t) {
            return this.multiplyMatrices(this, t)
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this)
        }
        multiplyMatrices(t, e) {
            const n = t.elements
                , i = e.elements
                , r = this.elements
                , a = n[0]
                , o = n[3]
                , s = n[6]
                , l = n[1]
                , c = n[4]
                , u = n[7]
                , h = n[2]
                , d = n[5]
                , p = n[8]
                , f = i[0]
                , m = i[3]
                , g = i[6]
                , v = i[1]
                , _ = i[4]
                , x = i[7]
                , y = i[2]
                , b = i[5]
                , w = i[8];
            return r[0] = a * f + o * v + s * y,
                r[3] = a * m + o * _ + s * b,
                r[6] = a * g + o * x + s * w,
                r[1] = l * f + c * v + u * y,
                r[4] = l * m + c * _ + u * b,
                r[7] = l * g + c * x + u * w,
                r[2] = h * f + d * v + p * y,
                r[5] = h * m + d * _ + p * b,
                r[8] = h * g + d * x + p * w,
                this
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t,
                e[3] *= t,
                e[6] *= t,
                e[1] *= t,
                e[4] *= t,
                e[7] *= t,
                e[2] *= t,
                e[5] *= t,
                e[8] *= t,
                this
        }
        determinant() {
            const t = this.elements
                , e = t[0]
                , n = t[1]
                , i = t[2]
                , r = t[3]
                , a = t[4]
                , o = t[5]
                , s = t[6]
                , l = t[7]
                , c = t[8];
            return e * a * c - e * o * l - n * r * c + n * o * s + i * r * l - i * a * s
        }
        invert() {
            const t = this.elements
                , e = t[0]
                , n = t[1]
                , i = t[2]
                , r = t[3]
                , a = t[4]
                , o = t[5]
                , s = t[6]
                , l = t[7]
                , c = t[8]
                , u = c * a - o * l
                , h = o * s - c * r
                , d = l * r - a * s
                , p = e * u + n * h + i * d;
            if (0 === p)
                return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
            const f = 1 / p;
            return t[0] = u * f,
                t[1] = (i * l - c * n) * f,
                t[2] = (o * n - i * a) * f,
                t[3] = h * f,
                t[4] = (c * e - i * s) * f,
                t[5] = (i * r - o * e) * f,
                t[6] = d * f,
                t[7] = (n * s - l * e) * f,
                t[8] = (a * e - n * r) * f,
                this
        }
        transpose() {
            let t;
            const e = this.elements;
            return t = e[1],
                e[1] = e[3],
                e[3] = t,
                t = e[2],
                e[2] = e[6],
                e[6] = t,
                t = e[5],
                e[5] = e[7],
                e[7] = t,
                this
        }
        getNormalMatrix(t) {
            return this.setFromMatrix4(t).invert().transpose()
        }
        transposeIntoArray(t) {
            const e = this.elements;
            return t[0] = e[0],
                t[1] = e[3],
                t[2] = e[6],
                t[3] = e[1],
                t[4] = e[4],
                t[5] = e[7],
                t[6] = e[2],
                t[7] = e[5],
                t[8] = e[8],
                this
        }
        setUvTransform(t, e, n, i, r, a, o) {
            const s = Math.cos(r)
                , l = Math.sin(r);
            return this.set(n * s, n * l, -n * (s * a + l * o) + a + t, -i * l, i * s, -i * (-l * a + s * o) + o + e, 0, 0, 1),
                this
        }
        scale(t, e) {
            const n = this.elements;
            return n[0] *= t,
                n[3] *= t,
                n[6] *= t,
                n[1] *= e,
                n[4] *= e,
                n[7] *= e,
                this
        }
        rotate(t) {
            const e = Math.cos(t)
                , n = Math.sin(t)
                , i = this.elements
                , r = i[0]
                , a = i[3]
                , o = i[6]
                , s = i[1]
                , l = i[4]
                , c = i[7];
            return i[0] = e * r + n * s,
                i[3] = e * a + n * l,
                i[6] = e * o + n * c,
                i[1] = -n * r + e * s,
                i[4] = -n * a + e * l,
                i[7] = -n * o + e * c,
                this
        }
        translate(t, e) {
            const n = this.elements;
            return n[0] += t * n[2],
                n[3] += t * n[5],
                n[6] += t * n[8],
                n[1] += e * n[2],
                n[4] += e * n[5],
                n[7] += e * n[8],
                this
        }
        equals(t) {
            const e = this.elements
                , n = t.elements;
            for (let t = 0; t < 9; t++)
                if (e[t] !== n[t])
                    return !1;
            return !0
        }
        fromArray(t, e = 0) {
            for (let n = 0; n < 9; n++)
                this.elements[n] = t[n + e];
            return this
        }
        toArray(t = [], e = 0) {
            const n = this.elements;
            return t[e] = n[0],
                t[e + 1] = n[1],
                t[e + 2] = n[2],
                t[e + 3] = n[3],
                t[e + 4] = n[4],
                t[e + 5] = n[5],
                t[e + 6] = n[6],
                t[e + 7] = n[7],
                t[e + 8] = n[8],
                t
        }
        clone() {
            return (new this.constructor).fromArray(this.elements)
        }
    }
    let Es;
    Ds.prototype.isMatrix3 = !0;
    class Ts {
        static getDataURL(t) {
            if (/^data:/i.test(t.src))
                return t.src;
            if ("undefined" == typeof HTMLCanvasElement)
                return t.src;
            let e;
            if (t instanceof HTMLCanvasElement)
                e = t;
            else {
                void 0 === Es && (Es = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas")),
                    Es.width = t.width,
                    Es.height = t.height;
                const n = Es.getContext("2d");
                t instanceof ImageData ? n.putImageData(t, 0, 0) : n.drawImage(t, 0, 0, t.width, t.height),
                    e = Es
            }
            return e.width > 2048 || e.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", t),
                e.toDataURL("image/jpeg", .6)) : e.toDataURL("image/png")
        }
    }
    let Ss = 0;
    class Cs extends fs {
        constructor(t = Cs.DEFAULT_IMAGE, e = Cs.DEFAULT_MAPPING, n = 1001, i = 1001, r = 1006, a = 1008, o = 1023, s = 1009, l = 1, c = 3e3) {
            super(),
                Object.defineProperty(this, "id", {
                    value: Ss++
                }),
                this.uuid = _s(),
                this.name = "",
                this.image = t,
                this.mipmaps = [],
                this.mapping = e,
                this.wrapS = n,
                this.wrapT = i,
                this.magFilter = r,
                this.minFilter = a,
                this.anisotropy = l,
                this.format = o,
                this.internalFormat = null,
                this.type = s,
                this.offset = new Ms(0, 0),
                this.repeat = new Ms(1, 1),
                this.center = new Ms(0, 0),
                this.rotation = 0,
                this.matrixAutoUpdate = !0,
                this.matrix = new Ds,
                this.generateMipmaps = !0,
                this.premultiplyAlpha = !1,
                this.flipY = !0,
                this.unpackAlignment = 4,
                this.encoding = c,
                this.version = 0,
                this.onUpdate = null
        }
        updateMatrix() {
            this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            return this.name = t.name,
                this.image = t.image,
                this.mipmaps = t.mipmaps.slice(0),
                this.mapping = t.mapping,
                this.wrapS = t.wrapS,
                this.wrapT = t.wrapT,
                this.magFilter = t.magFilter,
                this.minFilter = t.minFilter,
                this.anisotropy = t.anisotropy,
                this.format = t.format,
                this.internalFormat = t.internalFormat,
                this.type = t.type,
                this.offset.copy(t.offset),
                this.repeat.copy(t.repeat),
                this.center.copy(t.center),
                this.rotation = t.rotation,
                this.matrixAutoUpdate = t.matrixAutoUpdate,
                this.matrix.copy(t.matrix),
                this.generateMipmaps = t.generateMipmaps,
                this.premultiplyAlpha = t.premultiplyAlpha,
                this.flipY = t.flipY,
                this.unpackAlignment = t.unpackAlignment,
                this.encoding = t.encoding,
                this
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t;
            if (!e && void 0 !== t.textures[this.uuid])
                return t.textures[this.uuid];
            const n = {
                metadata: {
                    version: 4.5,
                    type: "Texture",
                    generator: "Texture.toJSON"
                },
                uuid: this.uuid,
                name: this.name,
                mapping: this.mapping,
                repeat: [this.repeat.x, this.repeat.y],
                offset: [this.offset.x, this.offset.y],
                center: [this.center.x, this.center.y],
                rotation: this.rotation,
                wrap: [this.wrapS, this.wrapT],
                format: this.format,
                type: this.type,
                encoding: this.encoding,
                minFilter: this.minFilter,
                magFilter: this.magFilter,
                anisotropy: this.anisotropy,
                flipY: this.flipY,
                premultiplyAlpha: this.premultiplyAlpha,
                unpackAlignment: this.unpackAlignment
            };
            if (void 0 !== this.image) {
                const i = this.image;
                if (void 0 === i.uuid && (i.uuid = _s()),
                    !e && void 0 === t.images[i.uuid]) {
                    let e;
                    if (Array.isArray(i)) {
                        e = [];
                        for (let t = 0, n = i.length; t < n; t++)
                            i[t].isDataTexture ? e.push(Ls(i[t].image)) : e.push(Ls(i[t]))
                    } else
                        e = Ls(i);
                    t.images[i.uuid] = {
                        uuid: i.uuid,
                        url: e
                    }
                }
                n.image = i.uuid
            }
            return e || (t.textures[this.uuid] = n),
                n
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
        transformUv(t) {
            if (300 !== this.mapping)
                return t;
            if (t.applyMatrix3(this.matrix),
                t.x < 0 || t.x > 1)
                switch (this.wrapS) {
                    case Xo:
                        t.x = t.x - Math.floor(t.x);
                        break;
                    case Yo:
                        t.x = t.x < 0 ? 0 : 1;
                        break;
                    case Zo:
                        1 === Math.abs(Math.floor(t.x) % 2) ? t.x = Math.ceil(t.x) - t.x : t.x = t.x - Math.floor(t.x)
                }
            if (t.y < 0 || t.y > 1)
                switch (this.wrapT) {
                    case Xo:
                        t.y = t.y - Math.floor(t.y);
                        break;
                    case Yo:
                        t.y = t.y < 0 ? 0 : 1;
                        break;
                    case Zo:
                        1 === Math.abs(Math.floor(t.y) % 2) ? t.y = Math.ceil(t.y) - t.y : t.y = t.y - Math.floor(t.y)
                }
            return this.flipY && (t.y = 1 - t.y),
                t
        }
        set needsUpdate(t) {
            !0 === t && this.version++
        }
    }
    function Ls(t) {
        return "undefined" != typeof HTMLImageElement && t instanceof HTMLImageElement || "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement || "undefined" != typeof ImageBitmap && t instanceof ImageBitmap ? Ts.getDataURL(t) : t.data ? {
            data: Array.prototype.slice.call(t.data),
            width: t.width,
            height: t.height,
            type: t.data.constructor.name
        } : (console.warn("THREE.Texture: Unable to serialize Texture."),
            {})
    }
    Cs.DEFAULT_IMAGE = void 0,
        Cs.DEFAULT_MAPPING = 300,
        Cs.prototype.isTexture = !0;
    class As {
        constructor(t = 0, e = 0, n = 0, i = 1) {
            this.x = t,
                this.y = e,
                this.z = n,
                this.w = i
        }
        get width() {
            return this.z
        }
        set width(t) {
            this.z = t
        }
        get height() {
            return this.w
        }
        set height(t) {
            this.w = t
        }
        set(t, e, n, i) {
            return this.x = t,
                this.y = e,
                this.z = n,
                this.w = i,
                this
        }
        setScalar(t) {
            return this.x = t,
                this.y = t,
                this.z = t,
                this.w = t,
                this
        }
        setX(t) {
            return this.x = t,
                this
        }
        setY(t) {
            return this.y = t,
                this
        }
        setZ(t) {
            return this.z = t,
                this
        }
        setW(t) {
            return this.w = t,
                this
        }
        setComponent(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                case 3:
                    this.w = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
            return this
        }
        getComponent(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("index is out of range: " + t)
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z, this.w)
        }
        copy(t) {
            return this.x = t.x,
                this.y = t.y,
                this.z = t.z,
                this.w = void 0 !== t.w ? t.w : 1,
                this
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                this.addVectors(t, e)) : (this.x += t.x,
                    this.y += t.y,
                    this.z += t.z,
                    this.w += t.w,
                    this)
        }
        addScalar(t) {
            return this.x += t,
                this.y += t,
                this.z += t,
                this.w += t,
                this
        }
        addVectors(t, e) {
            return this.x = t.x + e.x,
                this.y = t.y + e.y,
                this.z = t.z + e.z,
                this.w = t.w + e.w,
                this
        }
        addScaledVector(t, e) {
            return this.x += t.x * e,
                this.y += t.y * e,
                this.z += t.z * e,
                this.w += t.w * e,
                this
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
                this.subVectors(t, e)) : (this.x -= t.x,
                    this.y -= t.y,
                    this.z -= t.z,
                    this.w -= t.w,
                    this)
        }
        subScalar(t) {
            return this.x -= t,
                this.y -= t,
                this.z -= t,
                this.w -= t,
                this
        }
        subVectors(t, e) {
            return this.x = t.x - e.x,
                this.y = t.y - e.y,
                this.z = t.z - e.z,
                this.w = t.w - e.w,
                this
        }
        multiply(t) {
            return this.x *= t.x,
                this.y *= t.y,
                this.z *= t.z,
                this.w *= t.w,
                this
        }
        multiplyScalar(t) {
            return this.x *= t,
                this.y *= t,
                this.z *= t,
                this.w *= t,
                this
        }
        applyMatrix4(t) {
            const e = this.x
                , n = this.y
                , i = this.z
                , r = this.w
                , a = t.elements;
            return this.x = a[0] * e + a[4] * n + a[8] * i + a[12] * r,
                this.y = a[1] * e + a[5] * n + a[9] * i + a[13] * r,
                this.z = a[2] * e + a[6] * n + a[10] * i + a[14] * r,
                this.w = a[3] * e + a[7] * n + a[11] * i + a[15] * r,
                this
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t)
        }
        setAxisAngleFromQuaternion(t) {
            this.w = 2 * Math.acos(t.w);
            const e = Math.sqrt(1 - t.w * t.w);
            return e < 1e-4 ? (this.x = 1,
                this.y = 0,
                this.z = 0) : (this.x = t.x / e,
                    this.y = t.y / e,
                    this.z = t.z / e),
                this
        }
        setAxisAngleFromRotationMatrix(t) {
            let e, n, i, r;
            const a = .01
                , o = .1
                , s = t.elements
                , l = s[0]
                , c = s[4]
                , u = s[8]
                , h = s[1]
                , d = s[5]
                , p = s[9]
                , f = s[2]
                , m = s[6]
                , g = s[10];
            if (Math.abs(c - h) < a && Math.abs(u - f) < a && Math.abs(p - m) < a) {
                if (Math.abs(c + h) < o && Math.abs(u + f) < o && Math.abs(p + m) < o && Math.abs(l + d + g - 3) < o)
                    return this.set(1, 0, 0, 0),
                        this;
                e = Math.PI;
                const t = (l + 1) / 2
                    , s = (d + 1) / 2
                    , v = (g + 1) / 2
                    , _ = (c + h) / 4
                    , x = (u + f) / 4
                    , y = (p + m) / 4;
                return t > s && t > v ? t < a ? (n = 0,
                    i = .707106781,
                    r = .707106781) : (n = Math.sqrt(t),
                        i = _ / n,
                        r = x / n) : s > v ? s < a ? (n = .707106781,
                            i = 0,
                            r = .707106781) : (i = Math.sqrt(s),
                                n = _ / i,
                                r = y / i) : v < a ? (n = .707106781,
                                    i = .707106781,
                                    r = 0) : (r = Math.sqrt(v),
                                        n = x / r,
                                        i = y / r),
                    this.set(n, i, r, e),
                    this
            }
            let v = Math.sqrt((m - p) * (m - p) + (u - f) * (u - f) + (h - c) * (h - c));
            return Math.abs(v) < .001 && (v = 1),
                this.x = (m - p) / v,
                this.y = (u - f) / v,
                this.z = (h - c) / v,
                this.w = Math.acos((l + d + g - 1) / 2),
                this
        }
        min(t) {
            return this.x = Math.min(this.x, t.x),
                this.y = Math.min(this.y, t.y),
                this.z = Math.min(this.z, t.z),
                this.w = Math.min(this.w, t.w),
                this
        }
        max(t) {
            return this.x = Math.max(this.x, t.x),
                this.y = Math.max(this.y, t.y),
                this.z = Math.max(this.z, t.z),
                this.w = Math.max(this.w, t.w),
                this
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
                this.y = Math.max(t.y, Math.min(e.y, this.y)),
                this.z = Math.max(t.z, Math.min(e.z, this.z)),
                this.w = Math.max(t.w, Math.min(e.w, this.w)),
                this
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)),
                this.y = Math.max(t, Math.min(e, this.y)),
                this.z = Math.max(t, Math.min(e, this.z)),
                this.w = Math.max(t, Math.min(e, this.w)),
                this
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        }
        floor() {
            return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this.z = Math.floor(this.z),
                this.w = Math.floor(this.w),
                this
        }
        ceil() {
            return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this.z = Math.ceil(this.z),
                this.w = Math.ceil(this.w),
                this
        }
        round() {
            return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this.z = Math.round(this.z),
                this.w = Math.round(this.w),
                this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
                this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
                this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
                this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w),
                this
        }
        negate() {
            return this.x = -this.x,
                this.y = -this.y,
                this.z = -this.z,
                this.w = -this.w,
                this
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z + this.w * t.w
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t)
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e,
                this.y += (t.y - this.y) * e,
                this.z += (t.z - this.z) * e,
                this.w += (t.w - this.w) * e,
                this
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n,
                this.y = t.y + (e.y - t.y) * n,
                this.z = t.z + (e.z - t.z) * n,
                this.w = t.w + (e.w - t.w) * n,
                this
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z && t.w === this.w
        }
        fromArray(t, e = 0) {
            return this.x = t[e],
                this.y = t[e + 1],
                this.z = t[e + 2],
                this.w = t[e + 3],
                this
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x,
                t[e + 1] = this.y,
                t[e + 2] = this.z,
                t[e + 3] = this.w,
                t
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),
                this.x = t.getX(e),
                this.y = t.getY(e),
                this.z = t.getZ(e),
                this.w = t.getW(e),
                this
        }
        random() {
            return this.x = Math.random(),
                this.y = Math.random(),
                this.z = Math.random(),
                this.w = Math.random(),
                this
        }
    }
    As.prototype.isVector4 = !0;
    class Rs extends fs {
        constructor(t, e, n) {
            super(),
                this.width = t,
                this.height = e,
                this.depth = 1,
                this.scissor = new As(0, 0, t, e),
                this.scissorTest = !1,
                this.viewport = new As(0, 0, t, e),
                n = n || {},
                this.texture = new Cs(void 0, n.mapping, n.wrapS, n.wrapT, n.magFilter, n.minFilter, n.format, n.type, n.anisotropy, n.encoding),
                this.texture.image = {},
                this.texture.image.width = t,
                this.texture.image.height = e,
                this.texture.image.depth = 1,
                this.texture.generateMipmaps = void 0 !== n.generateMipmaps && n.generateMipmaps,
                this.texture.minFilter = void 0 !== n.minFilter ? n.minFilter : Qo,
                this.depthBuffer = void 0 === n.depthBuffer || n.depthBuffer,
                this.stencilBuffer = void 0 !== n.stencilBuffer && n.stencilBuffer,
                this.depthTexture = void 0 !== n.depthTexture ? n.depthTexture : null
        }
        setTexture(t) {
            t.image = {
                width: this.width,
                height: this.height,
                depth: this.depth
            },
                this.texture = t
        }
        setSize(t, e, n = 1) {
            this.width === t && this.height === e && this.depth === n || (this.width = t,
                this.height = e,
                this.depth = n,
                this.texture.image.width = t,
                this.texture.image.height = e,
                this.texture.image.depth = n,
                this.dispose()),
                this.viewport.set(0, 0, t, e),
                this.scissor.set(0, 0, t, e)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            return this.width = t.width,
                this.height = t.height,
                this.depth = t.depth,
                this.viewport.copy(t.viewport),
                this.texture = t.texture.clone(),
                this.depthBuffer = t.depthBuffer,
                this.stencilBuffer = t.stencilBuffer,
                this.depthTexture = t.depthTexture,
                this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }
    Rs.prototype.isWebGLRenderTarget = !0;
    class Ps {
        constructor(t = 0, e = 0, n = 0, i = 1) {
            this._x = t,
                this._y = e,
                this._z = n,
                this._w = i
        }
        static slerp(t, e, n, i) {
            return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),
                n.slerpQuaternions(t, e, i)
        }
        static slerpFlat(t, e, n, i, r, a, o) {
            let s = n[i + 0]
                , l = n[i + 1]
                , c = n[i + 2]
                , u = n[i + 3];
            const h = r[a + 0]
                , d = r[a + 1]
                , p = r[a + 2]
                , f = r[a + 3];
            if (0 === o)
                return t[e + 0] = s,
                    t[e + 1] = l,
                    t[e + 2] = c,
                    void (t[e + 3] = u);
            if (1 === o)
                return t[e + 0] = h,
                    t[e + 1] = d,
                    t[e + 2] = p,
                    void (t[e + 3] = f);
            if (u !== f || s !== h || l !== d || c !== p) {
                let t = 1 - o;
                const e = s * h + l * d + c * p + u * f
                    , n = e >= 0 ? 1 : -1
                    , i = 1 - e * e;
                if (i > Number.EPSILON) {
                    const r = Math.sqrt(i)
                        , a = Math.atan2(r, e * n);
                    t = Math.sin(t * a) / r,
                        o = Math.sin(o * a) / r
                }
                const r = o * n;
                if (s = s * t + h * r,
                    l = l * t + d * r,
                    c = c * t + p * r,
                    u = u * t + f * r,
                    t === 1 - o) {
                    const t = 1 / Math.sqrt(s * s + l * l + c * c + u * u);
                    s *= t,
                        l *= t,
                        c *= t,
                        u *= t
                }
            }
            t[e] = s,
                t[e + 1] = l,
                t[e + 2] = c,
                t[e + 3] = u
        }
        static multiplyQuaternionsFlat(t, e, n, i, r, a) {
            const o = n[i]
                , s = n[i + 1]
                , l = n[i + 2]
                , c = n[i + 3]
                , u = r[a]
                , h = r[a + 1]
                , d = r[a + 2]
                , p = r[a + 3];
            return t[e] = o * p + c * u + s * d - l * h,
                t[e + 1] = s * p + c * h + l * u - o * d,
                t[e + 2] = l * p + c * d + o * h - s * u,
                t[e + 3] = c * p - o * u - s * h - l * d,
                t
        }
        get x() {
            return this._x
        }
        set x(t) {
            this._x = t,
                this._onChangeCallback()
        }
        get y() {
            return this._y
        }
        set y(t) {
            this._y = t,
                this._onChangeCallback()
        }
        get z() {
            return this._z
        }
        set z(t) {
            this._z = t,
                this._onChangeCallback()
        }
        get w() {
            return this._w
        }
        set w(t) {
            this._w = t,
                this._onChangeCallback()
        }
        set(t, e, n, i) {
            return this._x = t,
                this._y = e,
                this._z = n,
                this._w = i,
                this._onChangeCallback(),
                this
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._w)
        }
        copy(t) {
            return this._x = t.x,
                this._y = t.y,
                this._z = t.z,
                this._w = t.w,
                this._onChangeCallback(),
                this
        }
        setFromEuler(t, e) {
            if (!t || !t.isEuler)
                throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
            const n = t._x
                , i = t._y
                , r = t._z
                , a = t._order
                , o = Math.cos
                , s = Math.sin
                , l = o(n / 2)
                , c = o(i / 2)
                , u = o(r / 2)
                , h = s(n / 2)
                , d = s(i / 2)
                , p = s(r / 2);
            switch (a) {
                case "XYZ":
                    this._x = h * c * u + l * d * p,
                        this._y = l * d * u - h * c * p,
                        this._z = l * c * p + h * d * u,
                        this._w = l * c * u - h * d * p;
                    break;
                case "YXZ":
                    this._x = h * c * u + l * d * p,
                        this._y = l * d * u - h * c * p,
                        this._z = l * c * p - h * d * u,
                        this._w = l * c * u + h * d * p;
                    break;
                case "ZXY":
                    this._x = h * c * u - l * d * p,
                        this._y = l * d * u + h * c * p,
                        this._z = l * c * p + h * d * u,
                        this._w = l * c * u - h * d * p;
                    break;
                case "ZYX":
                    this._x = h * c * u - l * d * p,
                        this._y = l * d * u + h * c * p,
                        this._z = l * c * p - h * d * u,
                        this._w = l * c * u + h * d * p;
                    break;
                case "YZX":
                    this._x = h * c * u + l * d * p,
                        this._y = l * d * u + h * c * p,
                        this._z = l * c * p - h * d * u,
                        this._w = l * c * u - h * d * p;
                    break;
                case "XZY":
                    this._x = h * c * u - l * d * p,
                        this._y = l * d * u - h * c * p,
                        this._z = l * c * p + h * d * u,
                        this._w = l * c * u + h * d * p;
                    break;
                default:
                    console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
            }
            return !1 !== e && this._onChangeCallback(),
                this
        }
        setFromAxisAngle(t, e) {
            const n = e / 2
                , i = Math.sin(n);
            return this._x = t.x * i,
                this._y = t.y * i,
                this._z = t.z * i,
                this._w = Math.cos(n),
                this._onChangeCallback(),
                this
        }
        setFromRotationMatrix(t) {
            const e = t.elements
                , n = e[0]
                , i = e[4]
                , r = e[8]
                , a = e[1]
                , o = e[5]
                , s = e[9]
                , l = e[2]
                , c = e[6]
                , u = e[10]
                , h = n + o + u;
            if (h > 0) {
                const t = .5 / Math.sqrt(h + 1);
                this._w = .25 / t,
                    this._x = (c - s) * t,
                    this._y = (r - l) * t,
                    this._z = (a - i) * t
            } else if (n > o && n > u) {
                const t = 2 * Math.sqrt(1 + n - o - u);
                this._w = (c - s) / t,
                    this._x = .25 * t,
                    this._y = (i + a) / t,
                    this._z = (r + l) / t
            } else if (o > u) {
                const t = 2 * Math.sqrt(1 + o - n - u);
                this._w = (r - l) / t,
                    this._x = (i + a) / t,
                    this._y = .25 * t,
                    this._z = (s + c) / t
            } else {
                const t = 2 * Math.sqrt(1 + u - n - o);
                this._w = (a - i) / t,
                    this._x = (r + l) / t,
                    this._y = (s + c) / t,
                    this._z = .25 * t
            }
            return this._onChangeCallback(),
                this
        }
        setFromUnitVectors(t, e) {
            let n = t.dot(e) + 1;
            return n < Number.EPSILON ? (n = 0,
                Math.abs(t.x) > Math.abs(t.z) ? (this._x = -t.y,
                    this._y = t.x,
                    this._z = 0,
                    this._w = n) : (this._x = 0,
                        this._y = -t.z,
                        this._z = t.y,
                        this._w = n)) : (this._x = t.y * e.z - t.z * e.y,
                            this._y = t.z * e.x - t.x * e.z,
                            this._z = t.x * e.y - t.y * e.x,
                            this._w = n),
                this.normalize()
        }
        angleTo(t) {
            return 2 * Math.acos(Math.abs(xs(this.dot(t), -1, 1)))
        }
        rotateTowards(t, e) {
            const n = this.angleTo(t);
            if (0 === n)
                return this;
            const i = Math.min(1, e / n);
            return this.slerp(t, i),
                this
        }
        identity() {
            return this.set(0, 0, 0, 1)
        }
        invert() {
            return this.conjugate()
        }
        conjugate() {
            return this._x *= -1,
                this._y *= -1,
                this._z *= -1,
                this._onChangeCallback(),
                this
        }
        dot(t) {
            return this._x * t._x + this._y * t._y + this._z * t._z + this._w * t._w
        }
        lengthSq() {
            return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
        }
        length() {
            return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
        }
        normalize() {
            let t = this.length();
            return 0 === t ? (this._x = 0,
                this._y = 0,
                this._z = 0,
                this._w = 1) : (t = 1 / t,
                    this._x = this._x * t,
                    this._y = this._y * t,
                    this._z = this._z * t,
                    this._w = this._w * t),
                this._onChangeCallback(),
                this
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),
                this.multiplyQuaternions(t, e)) : this.multiplyQuaternions(this, t)
        }
        premultiply(t) {
            return this.multiplyQuaternions(t, this)
        }
        multiplyQuaternions(t, e) {
            const n = t._x
                , i = t._y
                , r = t._z
                , a = t._w
                , o = e._x
                , s = e._y
                , l = e._z
                , c = e._w;
            return this._x = n * c + a * o + i * l - r * s,
                this._y = i * c + a * s + r * o - n * l,
                this._z = r * c + a * l + n * s - i * o,
                this._w = a * c - n * o - i * s - r * l,
                this._onChangeCallback(),
                this
        }
        slerp(t, e) {
            if (0 === e)
                return this;
            if (1 === e)
                return this.copy(t);
            const n = this._x
                , i = this._y
                , r = this._z
                , a = this._w;
            let o = a * t._w + n * t._x + i * t._y + r * t._z;
            if (o < 0 ? (this._w = -t._w,
                this._x = -t._x,
                this._y = -t._y,
                this._z = -t._z,
                o = -o) : this.copy(t),
                o >= 1)
                return this._w = a,
                    this._x = n,
                    this._y = i,
                    this._z = r,
                    this;
            const s = 1 - o * o;
            if (s <= Number.EPSILON) {
                const t = 1 - e;
                return this._w = t * a + e * this._w,
                    this._x = t * n + e * this._x,
                    this._y = t * i + e * this._y,
                    this._z = t * r + e * this._z,
                    this.normalize(),
                    this._onChangeCallback(),
                    this
            }
            const l = Math.sqrt(s)
                , c = Math.atan2(l, o)
                , u = Math.sin((1 - e) * c) / l
                , h = Math.sin(e * c) / l;
            return this._w = a * u + this._w * h,
                this._x = n * u + this._x * h,
                this._y = i * u + this._y * h,
                this._z = r * u + this._z * h,
                this._onChangeCallback(),
                this
        }
        slerpQuaternions(t, e, n) {
            this.copy(t).slerp(e, n)
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._w === this._w
        }
        fromArray(t, e = 0) {
            return this._x = t[e],
                this._y = t[e + 1],
                this._z = t[e + 2],
                this._w = t[e + 3],
                this._onChangeCallback(),
                this
        }
        toArray(t = [], e = 0) {
            return t[e] = this._x,
                t[e + 1] = this._y,
                t[e + 2] = this._z,
                t[e + 3] = this._w,
                t
        }
        fromBufferAttribute(t, e) {
            return this._x = t.getX(e),
                this._y = t.getY(e),
                this._z = t.getZ(e),
                this._w = t.getW(e),
                this
        }
        _onChange(t) {
            return this._onChangeCallback = t,
                this
        }
        _onChangeCallback() { }
    }
    Ps.prototype.isQuaternion = !0;
    class Fs {
        constructor(t = 0, e = 0, n = 0) {
            this.x = t,
                this.y = e,
                this.z = n
        }
        set(t, e, n) {
            return void 0 === n && (n = this.z),
                this.x = t,
                this.y = e,
                this.z = n,
                this
        }
        setScalar(t) {
            return this.x = t,
                this.y = t,
                this.z = t,
                this
        }
        setX(t) {
            return this.x = t,
                this
        }
        setY(t) {
            return this.y = t,
                this
        }
        setZ(t) {
            return this.z = t,
                this
        }
        setComponent(t, e) {
            switch (t) {
                case 0:
                    this.x = e;
                    break;
                case 1:
                    this.y = e;
                    break;
                case 2:
                    this.z = e;
                    break;
                default:
                    throw new Error("index is out of range: " + t)
            }
            return this
        }
        getComponent(t) {
            switch (t) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                default:
                    throw new Error("index is out of range: " + t)
            }
        }
        clone() {
            return new this.constructor(this.x, this.y, this.z)
        }
        copy(t) {
            return this.x = t.x,
                this.y = t.y,
                this.z = t.z,
                this
        }
        add(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),
                this.addVectors(t, e)) : (this.x += t.x,
                    this.y += t.y,
                    this.z += t.z,
                    this)
        }
        addScalar(t) {
            return this.x += t,
                this.y += t,
                this.z += t,
                this
        }
        addVectors(t, e) {
            return this.x = t.x + e.x,
                this.y = t.y + e.y,
                this.z = t.z + e.z,
                this
        }
        addScaledVector(t, e) {
            return this.x += t.x * e,
                this.y += t.y * e,
                this.z += t.z * e,
                this
        }
        sub(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),
                this.subVectors(t, e)) : (this.x -= t.x,
                    this.y -= t.y,
                    this.z -= t.z,
                    this)
        }
        subScalar(t) {
            return this.x -= t,
                this.y -= t,
                this.z -= t,
                this
        }
        subVectors(t, e) {
            return this.x = t.x - e.x,
                this.y = t.y - e.y,
                this.z = t.z - e.z,
                this
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),
                this.multiplyVectors(t, e)) : (this.x *= t.x,
                    this.y *= t.y,
                    this.z *= t.z,
                    this)
        }
        multiplyScalar(t) {
            return this.x *= t,
                this.y *= t,
                this.z *= t,
                this
        }
        multiplyVectors(t, e) {
            return this.x = t.x * e.x,
                this.y = t.y * e.y,
                this.z = t.z * e.z,
                this
        }
        applyEuler(t) {
            return t && t.isEuler || console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),
                this.applyQuaternion(Is.setFromEuler(t))
        }
        applyAxisAngle(t, e) {
            return this.applyQuaternion(Is.setFromAxisAngle(t, e))
        }
        applyMatrix3(t) {
            const e = this.x
                , n = this.y
                , i = this.z
                , r = t.elements;
            return this.x = r[0] * e + r[3] * n + r[6] * i,
                this.y = r[1] * e + r[4] * n + r[7] * i,
                this.z = r[2] * e + r[5] * n + r[8] * i,
                this
        }
        applyNormalMatrix(t) {
            return this.applyMatrix3(t).normalize()
        }
        applyMatrix4(t) {
            const e = this.x
                , n = this.y
                , i = this.z
                , r = t.elements
                , a = 1 / (r[3] * e + r[7] * n + r[11] * i + r[15]);
            return this.x = (r[0] * e + r[4] * n + r[8] * i + r[12]) * a,
                this.y = (r[1] * e + r[5] * n + r[9] * i + r[13]) * a,
                this.z = (r[2] * e + r[6] * n + r[10] * i + r[14]) * a,
                this
        }
        applyQuaternion(t) {
            const e = this.x
                , n = this.y
                , i = this.z
                , r = t.x
                , a = t.y
                , o = t.z
                , s = t.w
                , l = s * e + a * i - o * n
                , c = s * n + o * e - r * i
                , u = s * i + r * n - a * e
                , h = -r * e - a * n - o * i;
            return this.x = l * s + h * -r + c * -o - u * -a,
                this.y = c * s + h * -a + u * -r - l * -o,
                this.z = u * s + h * -o + l * -a - c * -r,
                this
        }
        project(t) {
            return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)
        }
        unproject(t) {
            return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)
        }
        transformDirection(t) {
            const e = this.x
                , n = this.y
                , i = this.z
                , r = t.elements;
            return this.x = r[0] * e + r[4] * n + r[8] * i,
                this.y = r[1] * e + r[5] * n + r[9] * i,
                this.z = r[2] * e + r[6] * n + r[10] * i,
                this.normalize()
        }
        divide(t) {
            return this.x /= t.x,
                this.y /= t.y,
                this.z /= t.z,
                this
        }
        divideScalar(t) {
            return this.multiplyScalar(1 / t)
        }
        min(t) {
            return this.x = Math.min(this.x, t.x),
                this.y = Math.min(this.y, t.y),
                this.z = Math.min(this.z, t.z),
                this
        }
        max(t) {
            return this.x = Math.max(this.x, t.x),
                this.y = Math.max(this.y, t.y),
                this.z = Math.max(this.z, t.z),
                this
        }
        clamp(t, e) {
            return this.x = Math.max(t.x, Math.min(e.x, this.x)),
                this.y = Math.max(t.y, Math.min(e.y, this.y)),
                this.z = Math.max(t.z, Math.min(e.z, this.z)),
                this
        }
        clampScalar(t, e) {
            return this.x = Math.max(t, Math.min(e, this.x)),
                this.y = Math.max(t, Math.min(e, this.y)),
                this.z = Math.max(t, Math.min(e, this.z)),
                this
        }
        clampLength(t, e) {
            const n = this.length();
            return this.divideScalar(n || 1).multiplyScalar(Math.max(t, Math.min(e, n)))
        }
        floor() {
            return this.x = Math.floor(this.x),
                this.y = Math.floor(this.y),
                this.z = Math.floor(this.z),
                this
        }
        ceil() {
            return this.x = Math.ceil(this.x),
                this.y = Math.ceil(this.y),
                this.z = Math.ceil(this.z),
                this
        }
        round() {
            return this.x = Math.round(this.x),
                this.y = Math.round(this.y),
                this.z = Math.round(this.z),
                this
        }
        roundToZero() {
            return this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x),
                this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y),
                this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z),
                this
        }
        negate() {
            return this.x = -this.x,
                this.y = -this.y,
                this.z = -this.z,
                this
        }
        dot(t) {
            return this.x * t.x + this.y * t.y + this.z * t.z
        }
        lengthSq() {
            return this.x * this.x + this.y * this.y + this.z * this.z
        }
        length() {
            return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
        }
        manhattanLength() {
            return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
        }
        normalize() {
            return this.divideScalar(this.length() || 1)
        }
        setLength(t) {
            return this.normalize().multiplyScalar(t)
        }
        lerp(t, e) {
            return this.x += (t.x - this.x) * e,
                this.y += (t.y - this.y) * e,
                this.z += (t.z - this.z) * e,
                this
        }
        lerpVectors(t, e, n) {
            return this.x = t.x + (e.x - t.x) * n,
                this.y = t.y + (e.y - t.y) * n,
                this.z = t.z + (e.z - t.z) * n,
                this
        }
        cross(t, e) {
            return void 0 !== e ? (console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),
                this.crossVectors(t, e)) : this.crossVectors(this, t)
        }
        crossVectors(t, e) {
            const n = t.x
                , i = t.y
                , r = t.z
                , a = e.x
                , o = e.y
                , s = e.z;
            return this.x = i * s - r * o,
                this.y = r * a - n * s,
                this.z = n * o - i * a,
                this
        }
        projectOnVector(t) {
            const e = t.lengthSq();
            if (0 === e)
                return this.set(0, 0, 0);
            const n = t.dot(this) / e;
            return this.copy(t).multiplyScalar(n)
        }
        projectOnPlane(t) {
            return Os.copy(this).projectOnVector(t),
                this.sub(Os)
        }
        reflect(t) {
            return this.sub(Os.copy(t).multiplyScalar(2 * this.dot(t)))
        }
        angleTo(t) {
            const e = Math.sqrt(this.lengthSq() * t.lengthSq());
            if (0 === e)
                return Math.PI / 2;
            const n = this.dot(t) / e;
            return Math.acos(xs(n, -1, 1))
        }
        distanceTo(t) {
            return Math.sqrt(this.distanceToSquared(t))
        }
        distanceToSquared(t) {
            const e = this.x - t.x
                , n = this.y - t.y
                , i = this.z - t.z;
            return e * e + n * n + i * i
        }
        manhattanDistanceTo(t) {
            return Math.abs(this.x - t.x) + Math.abs(this.y - t.y) + Math.abs(this.z - t.z)
        }
        setFromSpherical(t) {
            return this.setFromSphericalCoords(t.radius, t.phi, t.theta)
        }
        setFromSphericalCoords(t, e, n) {
            const i = Math.sin(e) * t;
            return this.x = i * Math.sin(n),
                this.y = Math.cos(e) * t,
                this.z = i * Math.cos(n),
                this
        }
        setFromCylindrical(t) {
            return this.setFromCylindricalCoords(t.radius, t.theta, t.y)
        }
        setFromCylindricalCoords(t, e, n) {
            return this.x = t * Math.sin(e),
                this.y = n,
                this.z = t * Math.cos(e),
                this
        }
        setFromMatrixPosition(t) {
            const e = t.elements;
            return this.x = e[12],
                this.y = e[13],
                this.z = e[14],
                this
        }
        setFromMatrixScale(t) {
            const e = this.setFromMatrixColumn(t, 0).length()
                , n = this.setFromMatrixColumn(t, 1).length()
                , i = this.setFromMatrixColumn(t, 2).length();
            return this.x = e,
                this.y = n,
                this.z = i,
                this
        }
        setFromMatrixColumn(t, e) {
            return this.fromArray(t.elements, 4 * e)
        }
        setFromMatrix3Column(t, e) {
            return this.fromArray(t.elements, 3 * e)
        }
        equals(t) {
            return t.x === this.x && t.y === this.y && t.z === this.z
        }
        fromArray(t, e = 0) {
            return this.x = t[e],
                this.y = t[e + 1],
                this.z = t[e + 2],
                this
        }
        toArray(t = [], e = 0) {
            return t[e] = this.x,
                t[e + 1] = this.y,
                t[e + 2] = this.z,
                t
        }
        fromBufferAttribute(t, e, n) {
            return void 0 !== n && console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),
                this.x = t.getX(e),
                this.y = t.getY(e),
                this.z = t.getZ(e),
                this
        }
        random() {
            return this.x = Math.random(),
                this.y = Math.random(),
                this.z = Math.random(),
                this
        }
    }
    Fs.prototype.isVector3 = !0;
    const Os = new Fs
        , Is = new Ps;
    class Ns {
        constructor(t = new Fs(1 / 0, 1 / 0, 1 / 0), e = new Fs(-1 / 0, -1 / 0, -1 / 0)) {
            this.min = t,
                this.max = e
        }
        set(t, e) {
            return this.min.copy(t),
                this.max.copy(e),
                this
        }
        setFromArray(t) {
            let e = 1 / 0
                , n = 1 / 0
                , i = 1 / 0
                , r = -1 / 0
                , a = -1 / 0
                , o = -1 / 0;
            for (let s = 0, l = t.length; s < l; s += 3) {
                const l = t[s]
                    , c = t[s + 1]
                    , u = t[s + 2];
                l < e && (e = l),
                    c < n && (n = c),
                    u < i && (i = u),
                    l > r && (r = l),
                    c > a && (a = c),
                    u > o && (o = u)
            }
            return this.min.set(e, n, i),
                this.max.set(r, a, o),
                this
        }
        setFromBufferAttribute(t) {
            let e = 1 / 0
                , n = 1 / 0
                , i = 1 / 0
                , r = -1 / 0
                , a = -1 / 0
                , o = -1 / 0;
            for (let s = 0, l = t.count; s < l; s++) {
                const l = t.getX(s)
                    , c = t.getY(s)
                    , u = t.getZ(s);
                l < e && (e = l),
                    c < n && (n = c),
                    u < i && (i = u),
                    l > r && (r = l),
                    c > a && (a = c),
                    u > o && (o = u)
            }
            return this.min.set(e, n, i),
                this.max.set(r, a, o),
                this
        }
        setFromPoints(t) {
            this.makeEmpty();
            for (let e = 0, n = t.length; e < n; e++)
                this.expandByPoint(t[e]);
            return this
        }
        setFromCenterAndSize(t, e) {
            const n = Bs.copy(e).multiplyScalar(.5);
            return this.min.copy(t).sub(n),
                this.max.copy(t).add(n),
                this
        }
        setFromObject(t) {
            return this.makeEmpty(),
                this.expandByObject(t)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            return this.min.copy(t.min),
                this.max.copy(t.max),
                this
        }
        makeEmpty() {
            return this.min.x = this.min.y = this.min.z = 1 / 0,
                this.max.x = this.max.y = this.max.z = -1 / 0,
                this
        }
        isEmpty() {
            return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
        }
        getCenter(t) {
            return void 0 === t && (console.warn("THREE.Box3: .getCenter() target is now required"),
                t = new Fs),
                this.isEmpty() ? t.set(0, 0, 0) : t.addVectors(this.min, this.max).multiplyScalar(.5)
        }
        getSize(t) {
            return void 0 === t && (console.warn("THREE.Box3: .getSize() target is now required"),
                t = new Fs),
                this.isEmpty() ? t.set(0, 0, 0) : t.subVectors(this.max, this.min)
        }
        expandByPoint(t) {
            return this.min.min(t),
                this.max.max(t),
                this
        }
        expandByVector(t) {
            return this.min.sub(t),
                this.max.add(t),
                this
        }
        expandByScalar(t) {
            return this.min.addScalar(-t),
                this.max.addScalar(t),
                this
        }
        expandByObject(t) {
            t.updateWorldMatrix(!1, !1);
            const e = t.geometry;
            void 0 !== e && (null === e.boundingBox && e.computeBoundingBox(),
                Hs.copy(e.boundingBox),
                Hs.applyMatrix4(t.matrixWorld),
                this.union(Hs));
            const n = t.children;
            for (let t = 0, e = n.length; t < e; t++)
                this.expandByObject(n[t]);
            return this
        }
        containsPoint(t) {
            return !(t.x < this.min.x || t.x > this.max.x || t.y < this.min.y || t.y > this.max.y || t.z < this.min.z || t.z > this.max.z)
        }
        containsBox(t) {
            return this.min.x <= t.min.x && t.max.x <= this.max.x && this.min.y <= t.min.y && t.max.y <= this.max.y && this.min.z <= t.min.z && t.max.z <= this.max.z
        }
        getParameter(t, e) {
            return void 0 === e && (console.warn("THREE.Box3: .getParameter() target is now required"),
                e = new Fs),
                e.set((t.x - this.min.x) / (this.max.x - this.min.x), (t.y - this.min.y) / (this.max.y - this.min.y), (t.z - this.min.z) / (this.max.z - this.min.z))
        }
        intersectsBox(t) {
            return !(t.max.x < this.min.x || t.min.x > this.max.x || t.max.y < this.min.y || t.min.y > this.max.y || t.max.z < this.min.z || t.min.z > this.max.z)
        }
        intersectsSphere(t) {
            return this.clampPoint(t.center, Bs),
                Bs.distanceToSquared(t.center) <= t.radius * t.radius
        }
        intersectsPlane(t) {
            let e, n;
            return t.normal.x > 0 ? (e = t.normal.x * this.min.x,
                n = t.normal.x * this.max.x) : (e = t.normal.x * this.max.x,
                    n = t.normal.x * this.min.x),
                t.normal.y > 0 ? (e += t.normal.y * this.min.y,
                    n += t.normal.y * this.max.y) : (e += t.normal.y * this.max.y,
                        n += t.normal.y * this.min.y),
                t.normal.z > 0 ? (e += t.normal.z * this.min.z,
                    n += t.normal.z * this.max.z) : (e += t.normal.z * this.max.z,
                        n += t.normal.z * this.min.z),
                e <= -t.constant && n >= -t.constant
        }
        intersectsTriangle(t) {
            if (this.isEmpty())
                return !1;
            this.getCenter(qs),
                Xs.subVectors(this.max, qs),
                ks.subVectors(t.a, qs),
                Us.subVectors(t.b, qs),
                Gs.subVectors(t.c, qs),
                Ws.subVectors(Us, ks),
                Vs.subVectors(Gs, Us),
                js.subVectors(ks, Gs);
            let e = [0, -Ws.z, Ws.y, 0, -Vs.z, Vs.y, 0, -js.z, js.y, Ws.z, 0, -Ws.x, Vs.z, 0, -Vs.x, js.z, 0, -js.x, -Ws.y, Ws.x, 0, -Vs.y, Vs.x, 0, -js.y, js.x, 0];
            return !!Js(e, ks, Us, Gs, Xs) && (e = [1, 0, 0, 0, 1, 0, 0, 0, 1],
                !!Js(e, ks, Us, Gs, Xs) && (Ys.crossVectors(Ws, Vs),
                    e = [Ys.x, Ys.y, Ys.z],
                    Js(e, ks, Us, Gs, Xs)))
        }
        clampPoint(t, e) {
            return void 0 === e && (console.warn("THREE.Box3: .clampPoint() target is now required"),
                e = new Fs),
                e.copy(t).clamp(this.min, this.max)
        }
        distanceToPoint(t) {
            return Bs.copy(t).clamp(this.min, this.max).sub(t).length()
        }
        getBoundingSphere(t) {
            return void 0 === t && console.error("THREE.Box3: .getBoundingSphere() target is now required"),
                this.getCenter(t.center),
                t.radius = .5 * this.getSize(Bs).length(),
                t
        }
        intersect(t) {
            return this.min.max(t.min),
                this.max.min(t.max),
                this.isEmpty() && this.makeEmpty(),
                this
        }
        union(t) {
            return this.min.min(t.min),
                this.max.max(t.max),
                this
        }
        applyMatrix4(t) {
            return this.isEmpty() || (zs[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(t),
                zs[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(t),
                zs[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(t),
                zs[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(t),
                zs[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(t),
                zs[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(t),
                zs[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(t),
                zs[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(t),
                this.setFromPoints(zs)),
                this
        }
        translate(t) {
            return this.min.add(t),
                this.max.add(t),
                this
        }
        equals(t) {
            return t.min.equals(this.min) && t.max.equals(this.max)
        }
    }
    Ns.prototype.isBox3 = !0;
    const zs = [new Fs, new Fs, new Fs, new Fs, new Fs, new Fs, new Fs, new Fs]
        , Bs = new Fs
        , Hs = new Ns
        , ks = new Fs
        , Us = new Fs
        , Gs = new Fs
        , Ws = new Fs
        , Vs = new Fs
        , js = new Fs
        , qs = new Fs
        , Xs = new Fs
        , Ys = new Fs
        , Zs = new Fs;
    function Js(t, e, n, i, r) {
        for (let a = 0, o = t.length - 3; a <= o; a += 3) {
            Zs.fromArray(t, a);
            const o = r.x * Math.abs(Zs.x) + r.y * Math.abs(Zs.y) + r.z * Math.abs(Zs.z)
                , s = e.dot(Zs)
                , l = n.dot(Zs)
                , c = i.dot(Zs);
            if (Math.max(-Math.max(s, l, c), Math.min(s, l, c)) > o)
                return !1
        }
        return !0
    }
    const Qs = new Ns
        , Ks = new Fs
        , $s = new Fs
        , tl = new Fs;
    class el {
        constructor(t = new Fs, e = -1) {
            this.center = t,
                this.radius = e
        }
        set(t, e) {
            return this.center.copy(t),
                this.radius = e,
                this
        }
        setFromPoints(t, e) {
            const n = this.center;
            void 0 !== e ? n.copy(e) : Qs.setFromPoints(t).getCenter(n);
            let i = 0;
            for (let e = 0, r = t.length; e < r; e++)
                i = Math.max(i, n.distanceToSquared(t[e]));
            return this.radius = Math.sqrt(i),
                this
        }
        copy(t) {
            return this.center.copy(t.center),
                this.radius = t.radius,
                this
        }
        isEmpty() {
            return this.radius < 0
        }
        makeEmpty() {
            return this.center.set(0, 0, 0),
                this.radius = -1,
                this
        }
        containsPoint(t) {
            return t.distanceToSquared(this.center) <= this.radius * this.radius
        }
        distanceToPoint(t) {
            return t.distanceTo(this.center) - this.radius
        }
        intersectsSphere(t) {
            const e = this.radius + t.radius;
            return t.center.distanceToSquared(this.center) <= e * e
        }
        intersectsBox(t) {
            return t.intersectsSphere(this)
        }
        intersectsPlane(t) {
            return Math.abs(t.distanceToPoint(this.center)) <= this.radius
        }
        clampPoint(t, e) {
            const n = this.center.distanceToSquared(t);
            return void 0 === e && (console.warn("THREE.Sphere: .clampPoint() target is now required"),
                e = new Fs),
                e.copy(t),
                n > this.radius * this.radius && (e.sub(this.center).normalize(),
                    e.multiplyScalar(this.radius).add(this.center)),
                e
        }
        getBoundingBox(t) {
            return void 0 === t && (console.warn("THREE.Sphere: .getBoundingBox() target is now required"),
                t = new Ns),
                this.isEmpty() ? (t.makeEmpty(),
                    t) : (t.set(this.center, this.center),
                        t.expandByScalar(this.radius),
                        t)
        }
        applyMatrix4(t) {
            return this.center.applyMatrix4(t),
                this.radius = this.radius * t.getMaxScaleOnAxis(),
                this
        }
        translate(t) {
            return this.center.add(t),
                this
        }
        expandByPoint(t) {
            tl.subVectors(t, this.center);
            const e = tl.lengthSq();
            if (e > this.radius * this.radius) {
                const t = Math.sqrt(e)
                    , n = .5 * (t - this.radius);
                this.center.add(tl.multiplyScalar(n / t)),
                    this.radius += n
            }
            return this
        }
        union(t) {
            return $s.subVectors(t.center, this.center).normalize().multiplyScalar(t.radius),
                this.expandByPoint(Ks.copy(t.center).add($s)),
                this.expandByPoint(Ks.copy(t.center).sub($s)),
                this
        }
        equals(t) {
            return t.center.equals(this.center) && t.radius === this.radius
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    const nl = new Fs
        , il = new Fs
        , rl = new Fs
        , al = new Fs
        , ol = new Fs
        , sl = new Fs
        , ll = new Fs;
    class cl {
        constructor(t = new Fs, e = new Fs(0, 0, -1)) {
            this.origin = t,
                this.direction = e
        }
        set(t, e) {
            return this.origin.copy(t),
                this.direction.copy(e),
                this
        }
        copy(t) {
            return this.origin.copy(t.origin),
                this.direction.copy(t.direction),
                this
        }
        at(t, e) {
            return void 0 === e && (console.warn("THREE.Ray: .at() target is now required"),
                e = new Fs),
                e.copy(this.direction).multiplyScalar(t).add(this.origin)
        }
        lookAt(t) {
            return this.direction.copy(t).sub(this.origin).normalize(),
                this
        }
        recast(t) {
            return this.origin.copy(this.at(t, nl)),
                this
        }
        closestPointToPoint(t, e) {
            void 0 === e && (console.warn("THREE.Ray: .closestPointToPoint() target is now required"),
                e = new Fs),
                e.subVectors(t, this.origin);
            const n = e.dot(this.direction);
            return n < 0 ? e.copy(this.origin) : e.copy(this.direction).multiplyScalar(n).add(this.origin)
        }
        distanceToPoint(t) {
            return Math.sqrt(this.distanceSqToPoint(t))
        }
        distanceSqToPoint(t) {
            const e = nl.subVectors(t, this.origin).dot(this.direction);
            return e < 0 ? this.origin.distanceToSquared(t) : (nl.copy(this.direction).multiplyScalar(e).add(this.origin),
                nl.distanceToSquared(t))
        }
        distanceSqToSegment(t, e, n, i) {
            il.copy(t).add(e).multiplyScalar(.5),
                rl.copy(e).sub(t).normalize(),
                al.copy(this.origin).sub(il);
            const r = .5 * t.distanceTo(e)
                , a = -this.direction.dot(rl)
                , o = al.dot(this.direction)
                , s = -al.dot(rl)
                , l = al.lengthSq()
                , c = Math.abs(1 - a * a);
            let u, h, d, p;
            if (c > 0)
                if (u = a * s - o,
                    h = a * o - s,
                    p = r * c,
                    u >= 0)
                    if (h >= -p)
                        if (h <= p) {
                            const t = 1 / c;
                            u *= t,
                                h *= t,
                                d = u * (u + a * h + 2 * o) + h * (a * u + h + 2 * s) + l
                        } else
                            h = r,
                                u = Math.max(0, -(a * h + o)),
                                d = -u * u + h * (h + 2 * s) + l;
                    else
                        h = -r,
                            u = Math.max(0, -(a * h + o)),
                            d = -u * u + h * (h + 2 * s) + l;
                else
                    h <= -p ? (u = Math.max(0, -(-a * r + o)),
                        h = u > 0 ? -r : Math.min(Math.max(-r, -s), r),
                        d = -u * u + h * (h + 2 * s) + l) : h <= p ? (u = 0,
                            h = Math.min(Math.max(-r, -s), r),
                            d = h * (h + 2 * s) + l) : (u = Math.max(0, -(a * r + o)),
                                h = u > 0 ? r : Math.min(Math.max(-r, -s), r),
                                d = -u * u + h * (h + 2 * s) + l);
            else
                h = a > 0 ? -r : r,
                    u = Math.max(0, -(a * h + o)),
                    d = -u * u + h * (h + 2 * s) + l;
            return n && n.copy(this.direction).multiplyScalar(u).add(this.origin),
                i && i.copy(rl).multiplyScalar(h).add(il),
                d
        }
        intersectSphere(t, e) {
            nl.subVectors(t.center, this.origin);
            const n = nl.dot(this.direction)
                , i = nl.dot(nl) - n * n
                , r = t.radius * t.radius;
            if (i > r)
                return null;
            const a = Math.sqrt(r - i)
                , o = n - a
                , s = n + a;
            return o < 0 && s < 0 ? null : o < 0 ? this.at(s, e) : this.at(o, e)
        }
        intersectsSphere(t) {
            return this.distanceSqToPoint(t.center) <= t.radius * t.radius
        }
        distanceToPlane(t) {
            const e = t.normal.dot(this.direction);
            if (0 === e)
                return 0 === t.distanceToPoint(this.origin) ? 0 : null;
            const n = -(this.origin.dot(t.normal) + t.constant) / e;
            return n >= 0 ? n : null
        }
        intersectPlane(t, e) {
            const n = this.distanceToPlane(t);
            return null === n ? null : this.at(n, e)
        }
        intersectsPlane(t) {
            const e = t.distanceToPoint(this.origin);
            if (0 === e)
                return !0;
            return t.normal.dot(this.direction) * e < 0
        }
        intersectBox(t, e) {
            let n, i, r, a, o, s;
            const l = 1 / this.direction.x
                , c = 1 / this.direction.y
                , u = 1 / this.direction.z
                , h = this.origin;
            return l >= 0 ? (n = (t.min.x - h.x) * l,
                i = (t.max.x - h.x) * l) : (n = (t.max.x - h.x) * l,
                    i = (t.min.x - h.x) * l),
                c >= 0 ? (r = (t.min.y - h.y) * c,
                    a = (t.max.y - h.y) * c) : (r = (t.max.y - h.y) * c,
                        a = (t.min.y - h.y) * c),
                n > a || r > i ? null : ((r > n || n != n) && (n = r),
                    (a < i || i != i) && (i = a),
                    u >= 0 ? (o = (t.min.z - h.z) * u,
                        s = (t.max.z - h.z) * u) : (o = (t.max.z - h.z) * u,
                            s = (t.min.z - h.z) * u),
                    n > s || o > i ? null : ((o > n || n != n) && (n = o),
                        (s < i || i != i) && (i = s),
                        i < 0 ? null : this.at(n >= 0 ? n : i, e)))
        }
        intersectsBox(t) {
            return null !== this.intersectBox(t, nl)
        }
        intersectTriangle(t, e, n, i, r) {
            ol.subVectors(e, t),
                sl.subVectors(n, t),
                ll.crossVectors(ol, sl);
            let a, o = this.direction.dot(ll);
            if (o > 0) {
                if (i)
                    return null;
                a = 1
            } else {
                if (!(o < 0))
                    return null;
                a = -1,
                    o = -o
            }
            al.subVectors(this.origin, t);
            const s = a * this.direction.dot(sl.crossVectors(al, sl));
            if (s < 0)
                return null;
            const l = a * this.direction.dot(ol.cross(al));
            if (l < 0)
                return null;
            if (s + l > o)
                return null;
            const c = -a * al.dot(ll);
            return c < 0 ? null : this.at(c / o, r)
        }
        applyMatrix4(t) {
            return this.origin.applyMatrix4(t),
                this.direction.transformDirection(t),
                this
        }
        equals(t) {
            return t.origin.equals(this.origin) && t.direction.equals(this.direction)
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    class ul {
        constructor() {
            this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                arguments.length > 0 && console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")
        }
        set(t, e, n, i, r, a, o, s, l, c, u, h, d, p, f, m) {
            const g = this.elements;
            return g[0] = t,
                g[4] = e,
                g[8] = n,
                g[12] = i,
                g[1] = r,
                g[5] = a,
                g[9] = o,
                g[13] = s,
                g[2] = l,
                g[6] = c,
                g[10] = u,
                g[14] = h,
                g[3] = d,
                g[7] = p,
                g[11] = f,
                g[15] = m,
                this
        }
        identity() {
            return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                this
        }
        clone() {
            return (new ul).fromArray(this.elements)
        }
        copy(t) {
            const e = this.elements
                , n = t.elements;
            return e[0] = n[0],
                e[1] = n[1],
                e[2] = n[2],
                e[3] = n[3],
                e[4] = n[4],
                e[5] = n[5],
                e[6] = n[6],
                e[7] = n[7],
                e[8] = n[8],
                e[9] = n[9],
                e[10] = n[10],
                e[11] = n[11],
                e[12] = n[12],
                e[13] = n[13],
                e[14] = n[14],
                e[15] = n[15],
                this
        }
        copyPosition(t) {
            const e = this.elements
                , n = t.elements;
            return e[12] = n[12],
                e[13] = n[13],
                e[14] = n[14],
                this
        }
        setFromMatrix3(t) {
            const e = t.elements;
            return this.set(e[0], e[3], e[6], 0, e[1], e[4], e[7], 0, e[2], e[5], e[8], 0, 0, 0, 0, 1),
                this
        }
        extractBasis(t, e, n) {
            return t.setFromMatrixColumn(this, 0),
                e.setFromMatrixColumn(this, 1),
                n.setFromMatrixColumn(this, 2),
                this
        }
        makeBasis(t, e, n) {
            return this.set(t.x, e.x, n.x, 0, t.y, e.y, n.y, 0, t.z, e.z, n.z, 0, 0, 0, 0, 1),
                this
        }
        extractRotation(t) {
            const e = this.elements
                , n = t.elements
                , i = 1 / hl.setFromMatrixColumn(t, 0).length()
                , r = 1 / hl.setFromMatrixColumn(t, 1).length()
                , a = 1 / hl.setFromMatrixColumn(t, 2).length();
            return e[0] = n[0] * i,
                e[1] = n[1] * i,
                e[2] = n[2] * i,
                e[3] = 0,
                e[4] = n[4] * r,
                e[5] = n[5] * r,
                e[6] = n[6] * r,
                e[7] = 0,
                e[8] = n[8] * a,
                e[9] = n[9] * a,
                e[10] = n[10] * a,
                e[11] = 0,
                e[12] = 0,
                e[13] = 0,
                e[14] = 0,
                e[15] = 1,
                this
        }
        makeRotationFromEuler(t) {
            t && t.isEuler || console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
            const e = this.elements
                , n = t.x
                , i = t.y
                , r = t.z
                , a = Math.cos(n)
                , o = Math.sin(n)
                , s = Math.cos(i)
                , l = Math.sin(i)
                , c = Math.cos(r)
                , u = Math.sin(r);
            if ("XYZ" === t.order) {
                const t = a * c
                    , n = a * u
                    , i = o * c
                    , r = o * u;
                e[0] = s * c,
                    e[4] = -s * u,
                    e[8] = l,
                    e[1] = n + i * l,
                    e[5] = t - r * l,
                    e[9] = -o * s,
                    e[2] = r - t * l,
                    e[6] = i + n * l,
                    e[10] = a * s
            } else if ("YXZ" === t.order) {
                const t = s * c
                    , n = s * u
                    , i = l * c
                    , r = l * u;
                e[0] = t + r * o,
                    e[4] = i * o - n,
                    e[8] = a * l,
                    e[1] = a * u,
                    e[5] = a * c,
                    e[9] = -o,
                    e[2] = n * o - i,
                    e[6] = r + t * o,
                    e[10] = a * s
            } else if ("ZXY" === t.order) {
                const t = s * c
                    , n = s * u
                    , i = l * c
                    , r = l * u;
                e[0] = t - r * o,
                    e[4] = -a * u,
                    e[8] = i + n * o,
                    e[1] = n + i * o,
                    e[5] = a * c,
                    e[9] = r - t * o,
                    e[2] = -a * l,
                    e[6] = o,
                    e[10] = a * s
            } else if ("ZYX" === t.order) {
                const t = a * c
                    , n = a * u
                    , i = o * c
                    , r = o * u;
                e[0] = s * c,
                    e[4] = i * l - n,
                    e[8] = t * l + r,
                    e[1] = s * u,
                    e[5] = r * l + t,
                    e[9] = n * l - i,
                    e[2] = -l,
                    e[6] = o * s,
                    e[10] = a * s
            } else if ("YZX" === t.order) {
                const t = a * s
                    , n = a * l
                    , i = o * s
                    , r = o * l;
                e[0] = s * c,
                    e[4] = r - t * u,
                    e[8] = i * u + n,
                    e[1] = u,
                    e[5] = a * c,
                    e[9] = -o * c,
                    e[2] = -l * c,
                    e[6] = n * u + i,
                    e[10] = t - r * u
            } else if ("XZY" === t.order) {
                const t = a * s
                    , n = a * l
                    , i = o * s
                    , r = o * l;
                e[0] = s * c,
                    e[4] = -u,
                    e[8] = l * c,
                    e[1] = t * u + r,
                    e[5] = a * c,
                    e[9] = n * u - i,
                    e[2] = i * u - n,
                    e[6] = o * c,
                    e[10] = r * u + t
            }
            return e[3] = 0,
                e[7] = 0,
                e[11] = 0,
                e[12] = 0,
                e[13] = 0,
                e[14] = 0,
                e[15] = 1,
                this
        }
        makeRotationFromQuaternion(t) {
            return this.compose(pl, t, fl)
        }
        lookAt(t, e, n) {
            const i = this.elements;
            return vl.subVectors(t, e),
                0 === vl.lengthSq() && (vl.z = 1),
                vl.normalize(),
                ml.crossVectors(n, vl),
                0 === ml.lengthSq() && (1 === Math.abs(n.z) ? vl.x += 1e-4 : vl.z += 1e-4,
                    vl.normalize(),
                    ml.crossVectors(n, vl)),
                ml.normalize(),
                gl.crossVectors(vl, ml),
                i[0] = ml.x,
                i[4] = gl.x,
                i[8] = vl.x,
                i[1] = ml.y,
                i[5] = gl.y,
                i[9] = vl.y,
                i[2] = ml.z,
                i[6] = gl.z,
                i[10] = vl.z,
                this
        }
        multiply(t, e) {
            return void 0 !== e ? (console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),
                this.multiplyMatrices(t, e)) : this.multiplyMatrices(this, t)
        }
        premultiply(t) {
            return this.multiplyMatrices(t, this)
        }
        multiplyMatrices(t, e) {
            const n = t.elements
                , i = e.elements
                , r = this.elements
                , a = n[0]
                , o = n[4]
                , s = n[8]
                , l = n[12]
                , c = n[1]
                , u = n[5]
                , h = n[9]
                , d = n[13]
                , p = n[2]
                , f = n[6]
                , m = n[10]
                , g = n[14]
                , v = n[3]
                , _ = n[7]
                , x = n[11]
                , y = n[15]
                , b = i[0]
                , w = i[4]
                , M = i[8]
                , D = i[12]
                , E = i[1]
                , T = i[5]
                , S = i[9]
                , C = i[13]
                , L = i[2]
                , A = i[6]
                , R = i[10]
                , P = i[14]
                , F = i[3]
                , O = i[7]
                , I = i[11]
                , N = i[15];
            return r[0] = a * b + o * E + s * L + l * F,
                r[4] = a * w + o * T + s * A + l * O,
                r[8] = a * M + o * S + s * R + l * I,
                r[12] = a * D + o * C + s * P + l * N,
                r[1] = c * b + u * E + h * L + d * F,
                r[5] = c * w + u * T + h * A + d * O,
                r[9] = c * M + u * S + h * R + d * I,
                r[13] = c * D + u * C + h * P + d * N,
                r[2] = p * b + f * E + m * L + g * F,
                r[6] = p * w + f * T + m * A + g * O,
                r[10] = p * M + f * S + m * R + g * I,
                r[14] = p * D + f * C + m * P + g * N,
                r[3] = v * b + _ * E + x * L + y * F,
                r[7] = v * w + _ * T + x * A + y * O,
                r[11] = v * M + _ * S + x * R + y * I,
                r[15] = v * D + _ * C + x * P + y * N,
                this
        }
        multiplyScalar(t) {
            const e = this.elements;
            return e[0] *= t,
                e[4] *= t,
                e[8] *= t,
                e[12] *= t,
                e[1] *= t,
                e[5] *= t,
                e[9] *= t,
                e[13] *= t,
                e[2] *= t,
                e[6] *= t,
                e[10] *= t,
                e[14] *= t,
                e[3] *= t,
                e[7] *= t,
                e[11] *= t,
                e[15] *= t,
                this
        }
        determinant() {
            const t = this.elements
                , e = t[0]
                , n = t[4]
                , i = t[8]
                , r = t[12]
                , a = t[1]
                , o = t[5]
                , s = t[9]
                , l = t[13]
                , c = t[2]
                , u = t[6]
                , h = t[10]
                , d = t[14];
            return t[3] * (+r * s * u - i * l * u - r * o * h + n * l * h + i * o * d - n * s * d) + t[7] * (+e * s * d - e * l * h + r * a * h - i * a * d + i * l * c - r * s * c) + t[11] * (+e * l * u - e * o * d - r * a * u + n * a * d + r * o * c - n * l * c) + t[15] * (-i * o * c - e * s * u + e * o * h + i * a * u - n * a * h + n * s * c)
        }
        transpose() {
            const t = this.elements;
            let e;
            return e = t[1],
                t[1] = t[4],
                t[4] = e,
                e = t[2],
                t[2] = t[8],
                t[8] = e,
                e = t[6],
                t[6] = t[9],
                t[9] = e,
                e = t[3],
                t[3] = t[12],
                t[12] = e,
                e = t[7],
                t[7] = t[13],
                t[13] = e,
                e = t[11],
                t[11] = t[14],
                t[14] = e,
                this
        }
        setPosition(t, e, n) {
            const i = this.elements;
            return t.isVector3 ? (i[12] = t.x,
                i[13] = t.y,
                i[14] = t.z) : (i[12] = t,
                    i[13] = e,
                    i[14] = n),
                this
        }
        invert() {
            const t = this.elements
                , e = t[0]
                , n = t[1]
                , i = t[2]
                , r = t[3]
                , a = t[4]
                , o = t[5]
                , s = t[6]
                , l = t[7]
                , c = t[8]
                , u = t[9]
                , h = t[10]
                , d = t[11]
                , p = t[12]
                , f = t[13]
                , m = t[14]
                , g = t[15]
                , v = u * m * l - f * h * l + f * s * d - o * m * d - u * s * g + o * h * g
                , _ = p * h * l - c * m * l - p * s * d + a * m * d + c * s * g - a * h * g
                , x = c * f * l - p * u * l + p * o * d - a * f * d - c * o * g + a * u * g
                , y = p * u * s - c * f * s - p * o * h + a * f * h + c * o * m - a * u * m
                , b = e * v + n * _ + i * x + r * y;
            if (0 === b)
                return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
            const w = 1 / b;
            return t[0] = v * w,
                t[1] = (f * h * r - u * m * r - f * i * d + n * m * d + u * i * g - n * h * g) * w,
                t[2] = (o * m * r - f * s * r + f * i * l - n * m * l - o * i * g + n * s * g) * w,
                t[3] = (u * s * r - o * h * r - u * i * l + n * h * l + o * i * d - n * s * d) * w,
                t[4] = _ * w,
                t[5] = (c * m * r - p * h * r + p * i * d - e * m * d - c * i * g + e * h * g) * w,
                t[6] = (p * s * r - a * m * r - p * i * l + e * m * l + a * i * g - e * s * g) * w,
                t[7] = (a * h * r - c * s * r + c * i * l - e * h * l - a * i * d + e * s * d) * w,
                t[8] = x * w,
                t[9] = (p * u * r - c * f * r - p * n * d + e * f * d + c * n * g - e * u * g) * w,
                t[10] = (a * f * r - p * o * r + p * n * l - e * f * l - a * n * g + e * o * g) * w,
                t[11] = (c * o * r - a * u * r - c * n * l + e * u * l + a * n * d - e * o * d) * w,
                t[12] = y * w,
                t[13] = (c * f * i - p * u * i + p * n * h - e * f * h - c * n * m + e * u * m) * w,
                t[14] = (p * o * i - a * f * i - p * n * s + e * f * s + a * n * m - e * o * m) * w,
                t[15] = (a * u * i - c * o * i + c * n * s - e * u * s - a * n * h + e * o * h) * w,
                this
        }
        scale(t) {
            const e = this.elements
                , n = t.x
                , i = t.y
                , r = t.z;
            return e[0] *= n,
                e[4] *= i,
                e[8] *= r,
                e[1] *= n,
                e[5] *= i,
                e[9] *= r,
                e[2] *= n,
                e[6] *= i,
                e[10] *= r,
                e[3] *= n,
                e[7] *= i,
                e[11] *= r,
                this
        }
        getMaxScaleOnAxis() {
            const t = this.elements
                , e = t[0] * t[0] + t[1] * t[1] + t[2] * t[2]
                , n = t[4] * t[4] + t[5] * t[5] + t[6] * t[6]
                , i = t[8] * t[8] + t[9] * t[9] + t[10] * t[10];
            return Math.sqrt(Math.max(e, n, i))
        }
        makeTranslation(t, e, n) {
            return this.set(1, 0, 0, t, 0, 1, 0, e, 0, 0, 1, n, 0, 0, 0, 1),
                this
        }
        makeRotationX(t) {
            const e = Math.cos(t)
                , n = Math.sin(t);
            return this.set(1, 0, 0, 0, 0, e, -n, 0, 0, n, e, 0, 0, 0, 0, 1),
                this
        }
        makeRotationY(t) {
            const e = Math.cos(t)
                , n = Math.sin(t);
            return this.set(e, 0, n, 0, 0, 1, 0, 0, -n, 0, e, 0, 0, 0, 0, 1),
                this
        }
        makeRotationZ(t) {
            const e = Math.cos(t)
                , n = Math.sin(t);
            return this.set(e, -n, 0, 0, n, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
                this
        }
        makeRotationAxis(t, e) {
            const n = Math.cos(e)
                , i = Math.sin(e)
                , r = 1 - n
                , a = t.x
                , o = t.y
                , s = t.z
                , l = r * a
                , c = r * o;
            return this.set(l * a + n, l * o - i * s, l * s + i * o, 0, l * o + i * s, c * o + n, c * s - i * a, 0, l * s - i * o, c * s + i * a, r * s * s + n, 0, 0, 0, 0, 1),
                this
        }
        makeScale(t, e, n) {
            return this.set(t, 0, 0, 0, 0, e, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
                this
        }
        makeShear(t, e, n) {
            return this.set(1, e, n, 0, t, 1, n, 0, t, e, 1, 0, 0, 0, 0, 1),
                this
        }
        compose(t, e, n) {
            const i = this.elements
                , r = e._x
                , a = e._y
                , o = e._z
                , s = e._w
                , l = r + r
                , c = a + a
                , u = o + o
                , h = r * l
                , d = r * c
                , p = r * u
                , f = a * c
                , m = a * u
                , g = o * u
                , v = s * l
                , _ = s * c
                , x = s * u
                , y = n.x
                , b = n.y
                , w = n.z;
            return i[0] = (1 - (f + g)) * y,
                i[1] = (d + x) * y,
                i[2] = (p - _) * y,
                i[3] = 0,
                i[4] = (d - x) * b,
                i[5] = (1 - (h + g)) * b,
                i[6] = (m + v) * b,
                i[7] = 0,
                i[8] = (p + _) * w,
                i[9] = (m - v) * w,
                i[10] = (1 - (h + f)) * w,
                i[11] = 0,
                i[12] = t.x,
                i[13] = t.y,
                i[14] = t.z,
                i[15] = 1,
                this
        }
        decompose(t, e, n) {
            const i = this.elements;
            let r = hl.set(i[0], i[1], i[2]).length();
            const a = hl.set(i[4], i[5], i[6]).length()
                , o = hl.set(i[8], i[9], i[10]).length();
            this.determinant() < 0 && (r = -r),
                t.x = i[12],
                t.y = i[13],
                t.z = i[14],
                dl.copy(this);
            const s = 1 / r
                , l = 1 / a
                , c = 1 / o;
            return dl.elements[0] *= s,
                dl.elements[1] *= s,
                dl.elements[2] *= s,
                dl.elements[4] *= l,
                dl.elements[5] *= l,
                dl.elements[6] *= l,
                dl.elements[8] *= c,
                dl.elements[9] *= c,
                dl.elements[10] *= c,
                e.setFromRotationMatrix(dl),
                n.x = r,
                n.y = a,
                n.z = o,
                this
        }
        makePerspective(t, e, n, i, r, a) {
            void 0 === a && console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
            const o = this.elements
                , s = 2 * r / (e - t)
                , l = 2 * r / (n - i)
                , c = (e + t) / (e - t)
                , u = (n + i) / (n - i)
                , h = -(a + r) / (a - r)
                , d = -2 * a * r / (a - r);
            return o[0] = s,
                o[4] = 0,
                o[8] = c,
                o[12] = 0,
                o[1] = 0,
                o[5] = l,
                o[9] = u,
                o[13] = 0,
                o[2] = 0,
                o[6] = 0,
                o[10] = h,
                o[14] = d,
                o[3] = 0,
                o[7] = 0,
                o[11] = -1,
                o[15] = 0,
                this
        }
        makeOrthographic(t, e, n, i, r, a) {
            const o = this.elements
                , s = 1 / (e - t)
                , l = 1 / (n - i)
                , c = 1 / (a - r)
                , u = (e + t) * s
                , h = (n + i) * l
                , d = (a + r) * c;
            return o[0] = 2 * s,
                o[4] = 0,
                o[8] = 0,
                o[12] = -u,
                o[1] = 0,
                o[5] = 2 * l,
                o[9] = 0,
                o[13] = -h,
                o[2] = 0,
                o[6] = 0,
                o[10] = -2 * c,
                o[14] = -d,
                o[3] = 0,
                o[7] = 0,
                o[11] = 0,
                o[15] = 1,
                this
        }
        equals(t) {
            const e = this.elements
                , n = t.elements;
            for (let t = 0; t < 16; t++)
                if (e[t] !== n[t])
                    return !1;
            return !0
        }
        fromArray(t, e = 0) {
            for (let n = 0; n < 16; n++)
                this.elements[n] = t[n + e];
            return this
        }
        toArray(t = [], e = 0) {
            const n = this.elements;
            return t[e] = n[0],
                t[e + 1] = n[1],
                t[e + 2] = n[2],
                t[e + 3] = n[3],
                t[e + 4] = n[4],
                t[e + 5] = n[5],
                t[e + 6] = n[6],
                t[e + 7] = n[7],
                t[e + 8] = n[8],
                t[e + 9] = n[9],
                t[e + 10] = n[10],
                t[e + 11] = n[11],
                t[e + 12] = n[12],
                t[e + 13] = n[13],
                t[e + 14] = n[14],
                t[e + 15] = n[15],
                t
        }
    }
    ul.prototype.isMatrix4 = !0;
    const hl = new Fs
        , dl = new ul
        , pl = new Fs(0, 0, 0)
        , fl = new Fs(1, 1, 1)
        , ml = new Fs
        , gl = new Fs
        , vl = new Fs
        , _l = new ul
        , xl = new Ps;
    class yl {
        constructor(t = 0, e = 0, n = 0, i = yl.DefaultOrder) {
            this._x = t,
                this._y = e,
                this._z = n,
                this._order = i
        }
        get x() {
            return this._x
        }
        set x(t) {
            this._x = t,
                this._onChangeCallback()
        }
        get y() {
            return this._y
        }
        set y(t) {
            this._y = t,
                this._onChangeCallback()
        }
        get z() {
            return this._z
        }
        set z(t) {
            this._z = t,
                this._onChangeCallback()
        }
        get order() {
            return this._order
        }
        set order(t) {
            this._order = t,
                this._onChangeCallback()
        }
        set(t, e, n, i) {
            return this._x = t,
                this._y = e,
                this._z = n,
                this._order = i || this._order,
                this._onChangeCallback(),
                this
        }
        clone() {
            return new this.constructor(this._x, this._y, this._z, this._order)
        }
        copy(t) {
            return this._x = t._x,
                this._y = t._y,
                this._z = t._z,
                this._order = t._order,
                this._onChangeCallback(),
                this
        }
        setFromRotationMatrix(t, e, n) {
            const i = t.elements
                , r = i[0]
                , a = i[4]
                , o = i[8]
                , s = i[1]
                , l = i[5]
                , c = i[9]
                , u = i[2]
                , h = i[6]
                , d = i[10];
            switch (e = e || this._order) {
                case "XYZ":
                    this._y = Math.asin(xs(o, -1, 1)),
                        Math.abs(o) < .9999999 ? (this._x = Math.atan2(-c, d),
                            this._z = Math.atan2(-a, r)) : (this._x = Math.atan2(h, l),
                                this._z = 0);
                    break;
                case "YXZ":
                    this._x = Math.asin(-xs(c, -1, 1)),
                        Math.abs(c) < .9999999 ? (this._y = Math.atan2(o, d),
                            this._z = Math.atan2(s, l)) : (this._y = Math.atan2(-u, r),
                                this._z = 0);
                    break;
                case "ZXY":
                    this._x = Math.asin(xs(h, -1, 1)),
                        Math.abs(h) < .9999999 ? (this._y = Math.atan2(-u, d),
                            this._z = Math.atan2(-a, l)) : (this._y = 0,
                                this._z = Math.atan2(s, r));
                    break;
                case "ZYX":
                    this._y = Math.asin(-xs(u, -1, 1)),
                        Math.abs(u) < .9999999 ? (this._x = Math.atan2(h, d),
                            this._z = Math.atan2(s, r)) : (this._x = 0,
                                this._z = Math.atan2(-a, l));
                    break;
                case "YZX":
                    this._z = Math.asin(xs(s, -1, 1)),
                        Math.abs(s) < .9999999 ? (this._x = Math.atan2(-c, l),
                            this._y = Math.atan2(-u, r)) : (this._x = 0,
                                this._y = Math.atan2(o, d));
                    break;
                case "XZY":
                    this._z = Math.asin(-xs(a, -1, 1)),
                        Math.abs(a) < .9999999 ? (this._x = Math.atan2(h, l),
                            this._y = Math.atan2(o, r)) : (this._x = Math.atan2(-c, d),
                                this._y = 0);
                    break;
                default:
                    console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + e)
            }
            return this._order = e,
                !1 !== n && this._onChangeCallback(),
                this
        }
        setFromQuaternion(t, e, n) {
            return _l.makeRotationFromQuaternion(t),
                this.setFromRotationMatrix(_l, e, n)
        }
        setFromVector3(t, e) {
            return this.set(t.x, t.y, t.z, e || this._order)
        }
        reorder(t) {
            return xl.setFromEuler(this),
                this.setFromQuaternion(xl, t)
        }
        equals(t) {
            return t._x === this._x && t._y === this._y && t._z === this._z && t._order === this._order
        }
        fromArray(t) {
            return this._x = t[0],
                this._y = t[1],
                this._z = t[2],
                void 0 !== t[3] && (this._order = t[3]),
                this._onChangeCallback(),
                this
        }
        toArray(t = [], e = 0) {
            return t[e] = this._x,
                t[e + 1] = this._y,
                t[e + 2] = this._z,
                t[e + 3] = this._order,
                t
        }
        toVector3(t) {
            return t ? t.set(this._x, this._y, this._z) : new Fs(this._x, this._y, this._z)
        }
        _onChange(t) {
            return this._onChangeCallback = t,
                this
        }
        _onChangeCallback() { }
    }
    yl.prototype.isEuler = !0,
        yl.DefaultOrder = "XYZ",
        yl.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
    class bl {
        constructor() {
            this.mask = 1
        }
        set(t) {
            this.mask = 1 << t | 0
        }
        enable(t) {
            this.mask |= 1 << t | 0
        }
        enableAll() {
            this.mask = -1
        }
        toggle(t) {
            this.mask ^= 1 << t | 0
        }
        disable(t) {
            this.mask &= ~(1 << t | 0)
        }
        disableAll() {
            this.mask = 0
        }
        test(t) {
            return 0 != (this.mask & t.mask)
        }
    }
    let wl = 0;
    const Ml = new Fs
        , Dl = new Ps
        , El = new ul
        , Tl = new Fs
        , Sl = new Fs
        , Cl = new Fs
        , Ll = new Ps
        , Al = new Fs(1, 0, 0)
        , Rl = new Fs(0, 1, 0)
        , Pl = new Fs(0, 0, 1)
        , Fl = {
            type: "added"
        }
        , Ol = {
            type: "removed"
        };
    class Il extends fs {
        constructor() {
            super(),
                Object.defineProperty(this, "id", {
                    value: wl++
                }),
                this.uuid = _s(),
                this.name = "",
                this.type = "Object3D",
                this.parent = null,
                this.children = [],
                this.up = Il.DefaultUp.clone();
            const t = new Fs
                , e = new yl
                , n = new Ps
                , i = new Fs(1, 1, 1);
            e._onChange((function () {
                n.setFromEuler(e, !1)
            }
            )),
                n._onChange((function () {
                    e.setFromQuaternion(n, void 0, !1)
                }
                )),
                Object.defineProperties(this, {
                    position: {
                        configurable: !0,
                        enumerable: !0,
                        value: t
                    },
                    rotation: {
                        configurable: !0,
                        enumerable: !0,
                        value: e
                    },
                    quaternion: {
                        configurable: !0,
                        enumerable: !0,
                        value: n
                    },
                    scale: {
                        configurable: !0,
                        enumerable: !0,
                        value: i
                    },
                    modelViewMatrix: {
                        value: new ul
                    },
                    normalMatrix: {
                        value: new Ds
                    }
                }),
                this.matrix = new ul,
                this.matrixWorld = new ul,
                this.matrixAutoUpdate = Il.DefaultMatrixAutoUpdate,
                this.matrixWorldNeedsUpdate = !1,
                this.layers = new bl,
                this.visible = !0,
                this.castShadow = !1,
                this.receiveShadow = !1,
                this.frustumCulled = !0,
                this.renderOrder = 0,
                this.animations = [],
                this.userData = {}
        }
        onBeforeRender() { }
        onAfterRender() { }
        applyMatrix4(t) {
            this.matrixAutoUpdate && this.updateMatrix(),
                this.matrix.premultiply(t),
                this.matrix.decompose(this.position, this.quaternion, this.scale)
        }
        applyQuaternion(t) {
            return this.quaternion.premultiply(t),
                this
        }
        setRotationFromAxisAngle(t, e) {
            this.quaternion.setFromAxisAngle(t, e)
        }
        setRotationFromEuler(t) {
            this.quaternion.setFromEuler(t, !0)
        }
        setRotationFromMatrix(t) {
            this.quaternion.setFromRotationMatrix(t)
        }
        setRotationFromQuaternion(t) {
            this.quaternion.copy(t)
        }
        rotateOnAxis(t, e) {
            return Dl.setFromAxisAngle(t, e),
                this.quaternion.multiply(Dl),
                this
        }
        rotateOnWorldAxis(t, e) {
            return Dl.setFromAxisAngle(t, e),
                this.quaternion.premultiply(Dl),
                this
        }
        rotateX(t) {
            return this.rotateOnAxis(Al, t)
        }
        rotateY(t) {
            return this.rotateOnAxis(Rl, t)
        }
        rotateZ(t) {
            return this.rotateOnAxis(Pl, t)
        }
        translateOnAxis(t, e) {
            return Ml.copy(t).applyQuaternion(this.quaternion),
                this.position.add(Ml.multiplyScalar(e)),
                this
        }
        translateX(t) {
            return this.translateOnAxis(Al, t)
        }
        translateY(t) {
            return this.translateOnAxis(Rl, t)
        }
        translateZ(t) {
            return this.translateOnAxis(Pl, t)
        }
        localToWorld(t) {
            return t.applyMatrix4(this.matrixWorld)
        }
        worldToLocal(t) {
            return t.applyMatrix4(El.copy(this.matrixWorld).invert())
        }
        lookAt(t, e, n) {
            t.isVector3 ? Tl.copy(t) : Tl.set(t, e, n);
            const i = this.parent;
            this.updateWorldMatrix(!0, !1),
                Sl.setFromMatrixPosition(this.matrixWorld),
                this.isCamera || this.isLight ? El.lookAt(Sl, Tl, this.up) : El.lookAt(Tl, Sl, this.up),
                this.quaternion.setFromRotationMatrix(El),
                i && (El.extractRotation(i.matrixWorld),
                    Dl.setFromRotationMatrix(El),
                    this.quaternion.premultiply(Dl.invert()))
        }
        add(t) {
            if (arguments.length > 1) {
                for (let t = 0; t < arguments.length; t++)
                    this.add(arguments[t]);
                return this
            }
            return t === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", t),
                this) : (t && t.isObject3D ? (null !== t.parent && t.parent.remove(t),
                    t.parent = this,
                    this.children.push(t),
                    t.dispatchEvent(Fl)) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", t),
                    this)
        }
        remove(t) {
            if (arguments.length > 1) {
                for (let t = 0; t < arguments.length; t++)
                    this.remove(arguments[t]);
                return this
            }
            const e = this.children.indexOf(t);
            return -1 !== e && (t.parent = null,
                this.children.splice(e, 1),
                t.dispatchEvent(Ol)),
                this
        }
        clear() {
            for (let t = 0; t < this.children.length; t++) {
                const e = this.children[t];
                e.parent = null,
                    e.dispatchEvent(Ol)
            }
            return this.children.length = 0,
                this
        }
        attach(t) {
            return this.updateWorldMatrix(!0, !1),
                El.copy(this.matrixWorld).invert(),
                null !== t.parent && (t.parent.updateWorldMatrix(!0, !1),
                    El.multiply(t.parent.matrixWorld)),
                t.applyMatrix4(El),
                this.add(t),
                t.updateWorldMatrix(!1, !0),
                this
        }
        getObjectById(t) {
            return this.getObjectByProperty("id", t)
        }
        getObjectByName(t) {
            return this.getObjectByProperty("name", t)
        }
        getObjectByProperty(t, e) {
            if (this[t] === e)
                return this;
            for (let n = 0, i = this.children.length; n < i; n++) {
                const i = this.children[n].getObjectByProperty(t, e);
                if (void 0 !== i)
                    return i
            }
        }
        getWorldPosition(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldPosition() target is now required"),
                t = new Fs),
                this.updateWorldMatrix(!0, !1),
                t.setFromMatrixPosition(this.matrixWorld)
        }
        getWorldQuaternion(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),
                t = new Ps),
                this.updateWorldMatrix(!0, !1),
                this.matrixWorld.decompose(Sl, t, Cl),
                t
        }
        getWorldScale(t) {
            return void 0 === t && (console.warn("THREE.Object3D: .getWorldScale() target is now required"),
                t = new Fs),
                this.updateWorldMatrix(!0, !1),
                this.matrixWorld.decompose(Sl, Ll, t),
                t
        }
        getWorldDirection(t) {
            void 0 === t && (console.warn("THREE.Object3D: .getWorldDirection() target is now required"),
                t = new Fs),
                this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(e[8], e[9], e[10]).normalize()
        }
        raycast() { }
        traverse(t) {
            t(this);
            const e = this.children;
            for (let n = 0, i = e.length; n < i; n++)
                e[n].traverse(t)
        }
        traverseVisible(t) {
            if (!1 === this.visible)
                return;
            t(this);
            const e = this.children;
            for (let n = 0, i = e.length; n < i; n++)
                e[n].traverseVisible(t)
        }
        traverseAncestors(t) {
            const e = this.parent;
            null !== e && (t(e),
                e.traverseAncestors(t))
        }
        updateMatrix() {
            this.matrix.compose(this.position, this.quaternion, this.scale),
                this.matrixWorldNeedsUpdate = !0
        }
        updateMatrixWorld(t) {
            this.matrixAutoUpdate && this.updateMatrix(),
                (this.matrixWorldNeedsUpdate || t) && (null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
                    this.matrixWorldNeedsUpdate = !1,
                    t = !0);
            const e = this.children;
            for (let n = 0, i = e.length; n < i; n++)
                e[n].updateMatrixWorld(t)
        }
        updateWorldMatrix(t, e) {
            const n = this.parent;
            if (!0 === t && null !== n && n.updateWorldMatrix(!0, !1),
                this.matrixAutoUpdate && this.updateMatrix(),
                null === this.parent ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
                !0 === e) {
                const t = this.children;
                for (let e = 0, n = t.length; e < n; e++)
                    t[e].updateWorldMatrix(!1, !0)
            }
        }
        toJSON(t) {
            const e = void 0 === t || "string" == typeof t
                , n = {};
            e && (t = {
                geometries: {},
                materials: {},
                textures: {},
                images: {},
                shapes: {},
                skeletons: {},
                animations: {}
            },
                n.metadata = {
                    version: 4.5,
                    type: "Object",
                    generator: "Object3D.toJSON"
                });
            const i = {};
            function r(e, n) {
                return void 0 === e[n.uuid] && (e[n.uuid] = n.toJSON(t)),
                    n.uuid
            }
            if (i.uuid = this.uuid,
                i.type = this.type,
                "" !== this.name && (i.name = this.name),
                !0 === this.castShadow && (i.castShadow = !0),
                !0 === this.receiveShadow && (i.receiveShadow = !0),
                !1 === this.visible && (i.visible = !1),
                !1 === this.frustumCulled && (i.frustumCulled = !1),
                0 !== this.renderOrder && (i.renderOrder = this.renderOrder),
                "{}" !== JSON.stringify(this.userData) && (i.userData = this.userData),
                i.layers = this.layers.mask,
                i.matrix = this.matrix.toArray(),
                !1 === this.matrixAutoUpdate && (i.matrixAutoUpdate = !1),
                this.isInstancedMesh && (i.type = "InstancedMesh",
                    i.count = this.count,
                    i.instanceMatrix = this.instanceMatrix.toJSON(),
                    null !== this.instanceColor && (i.instanceColor = this.instanceColor.toJSON())),
                this.isMesh || this.isLine || this.isPoints) {
                i.geometry = r(t.geometries, this.geometry);
                const e = this.geometry.parameters;
                if (void 0 !== e && void 0 !== e.shapes) {
                    const n = e.shapes;
                    if (Array.isArray(n))
                        for (let e = 0, i = n.length; e < i; e++) {
                            const i = n[e];
                            r(t.shapes, i)
                        }
                    else
                        r(t.shapes, n)
                }
            }
            if (this.isSkinnedMesh && (i.bindMode = this.bindMode,
                i.bindMatrix = this.bindMatrix.toArray(),
                void 0 !== this.skeleton && (r(t.skeletons, this.skeleton),
                    i.skeleton = this.skeleton.uuid)),
                void 0 !== this.material)
                if (Array.isArray(this.material)) {
                    const e = [];
                    for (let n = 0, i = this.material.length; n < i; n++)
                        e.push(r(t.materials, this.material[n]));
                    i.material = e
                } else
                    i.material = r(t.materials, this.material);
            if (this.children.length > 0) {
                i.children = [];
                for (let e = 0; e < this.children.length; e++)
                    i.children.push(this.children[e].toJSON(t).object)
            }
            if (this.animations.length > 0) {
                i.animations = [];
                for (let e = 0; e < this.animations.length; e++) {
                    const n = this.animations[e];
                    i.animations.push(r(t.animations, n))
                }
            }
            if (e) {
                const e = a(t.geometries)
                    , i = a(t.materials)
                    , r = a(t.textures)
                    , o = a(t.images)
                    , s = a(t.shapes)
                    , l = a(t.skeletons)
                    , c = a(t.animations);
                e.length > 0 && (n.geometries = e),
                    i.length > 0 && (n.materials = i),
                    r.length > 0 && (n.textures = r),
                    o.length > 0 && (n.images = o),
                    s.length > 0 && (n.shapes = s),
                    l.length > 0 && (n.skeletons = l),
                    c.length > 0 && (n.animations = c)
            }
            return n.object = i,
                n;
            function a(t) {
                const e = [];
                for (const n in t) {
                    const i = t[n];
                    delete i.metadata,
                        e.push(i)
                }
                return e
            }
        }
        clone(t) {
            return (new this.constructor).copy(this, t)
        }
        copy(t, e = !0) {
            if (this.name = t.name,
                this.up.copy(t.up),
                this.position.copy(t.position),
                this.rotation.order = t.rotation.order,
                this.quaternion.copy(t.quaternion),
                this.scale.copy(t.scale),
                this.matrix.copy(t.matrix),
                this.matrixWorld.copy(t.matrixWorld),
                this.matrixAutoUpdate = t.matrixAutoUpdate,
                this.matrixWorldNeedsUpdate = t.matrixWorldNeedsUpdate,
                this.layers.mask = t.layers.mask,
                this.visible = t.visible,
                this.castShadow = t.castShadow,
                this.receiveShadow = t.receiveShadow,
                this.frustumCulled = t.frustumCulled,
                this.renderOrder = t.renderOrder,
                this.userData = JSON.parse(JSON.stringify(t.userData)),
                !0 === e)
                for (let e = 0; e < t.children.length; e++) {
                    const n = t.children[e];
                    this.add(n.clone())
                }
            return this
        }
    }
    Il.DefaultUp = new Fs(0, 1, 0),
        Il.DefaultMatrixAutoUpdate = !0,
        Il.prototype.isObject3D = !0;
    const Nl = new Fs
        , zl = new Fs
        , Bl = new Ds;
    class Hl {
        constructor(t = new Fs(1, 0, 0), e = 0) {
            this.normal = t,
                this.constant = e
        }
        set(t, e) {
            return this.normal.copy(t),
                this.constant = e,
                this
        }
        setComponents(t, e, n, i) {
            return this.normal.set(t, e, n),
                this.constant = i,
                this
        }
        setFromNormalAndCoplanarPoint(t, e) {
            return this.normal.copy(t),
                this.constant = -e.dot(this.normal),
                this
        }
        setFromCoplanarPoints(t, e, n) {
            const i = Nl.subVectors(n, e).cross(zl.subVectors(t, e)).normalize();
            return this.setFromNormalAndCoplanarPoint(i, t),
                this
        }
        copy(t) {
            return this.normal.copy(t.normal),
                this.constant = t.constant,
                this
        }
        normalize() {
            const t = 1 / this.normal.length();
            return this.normal.multiplyScalar(t),
                this.constant *= t,
                this
        }
        negate() {
            return this.constant *= -1,
                this.normal.negate(),
                this
        }
        distanceToPoint(t) {
            return this.normal.dot(t) + this.constant
        }
        distanceToSphere(t) {
            return this.distanceToPoint(t.center) - t.radius
        }
        projectPoint(t, e) {
            return void 0 === e && (console.warn("THREE.Plane: .projectPoint() target is now required"),
                e = new Fs),
                e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)
        }
        intersectLine(t, e) {
            void 0 === e && (console.warn("THREE.Plane: .intersectLine() target is now required"),
                e = new Fs);
            const n = t.delta(Nl)
                , i = this.normal.dot(n);
            if (0 === i)
                return 0 === this.distanceToPoint(t.start) ? e.copy(t.start) : null;
            const r = -(t.start.dot(this.normal) + this.constant) / i;
            return r < 0 || r > 1 ? null : e.copy(n).multiplyScalar(r).add(t.start)
        }
        intersectsLine(t) {
            const e = this.distanceToPoint(t.start)
                , n = this.distanceToPoint(t.end);
            return e < 0 && n > 0 || n < 0 && e > 0
        }
        intersectsBox(t) {
            return t.intersectsPlane(this)
        }
        intersectsSphere(t) {
            return t.intersectsPlane(this)
        }
        coplanarPoint(t) {
            return void 0 === t && (console.warn("THREE.Plane: .coplanarPoint() target is now required"),
                t = new Fs),
                t.copy(this.normal).multiplyScalar(-this.constant)
        }
        applyMatrix4(t, e) {
            const n = e || Bl.getNormalMatrix(t)
                , i = this.coplanarPoint(Nl).applyMatrix4(t)
                , r = this.normal.applyMatrix3(n).normalize();
            return this.constant = -i.dot(r),
                this
        }
        translate(t) {
            return this.constant -= t.dot(this.normal),
                this
        }
        equals(t) {
            return t.normal.equals(this.normal) && t.constant === this.constant
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    Hl.prototype.isPlane = !0;
    const kl = new Fs
        , Ul = new Fs
        , Gl = new Fs
        , Wl = new Fs
        , Vl = new Fs
        , jl = new Fs
        , ql = new Fs
        , Xl = new Fs
        , Yl = new Fs
        , Zl = new Fs;
    class Jl {
        constructor(t = new Fs, e = new Fs, n = new Fs) {
            this.a = t,
                this.b = e,
                this.c = n
        }
        static getNormal(t, e, n, i) {
            void 0 === i && (console.warn("THREE.Triangle: .getNormal() target is now required"),
                i = new Fs),
                i.subVectors(n, e),
                kl.subVectors(t, e),
                i.cross(kl);
            const r = i.lengthSq();
            return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0)
        }
        static getBarycoord(t, e, n, i, r) {
            kl.subVectors(i, e),
                Ul.subVectors(n, e),
                Gl.subVectors(t, e);
            const a = kl.dot(kl)
                , o = kl.dot(Ul)
                , s = kl.dot(Gl)
                , l = Ul.dot(Ul)
                , c = Ul.dot(Gl)
                , u = a * l - o * o;
            if (void 0 === r && (console.warn("THREE.Triangle: .getBarycoord() target is now required"),
                r = new Fs),
                0 === u)
                return r.set(-2, -1, -1);
            const h = 1 / u
                , d = (l * s - o * c) * h
                , p = (a * c - o * s) * h;
            return r.set(1 - d - p, p, d)
        }
        static containsPoint(t, e, n, i) {
            return this.getBarycoord(t, e, n, i, Wl),
                Wl.x >= 0 && Wl.y >= 0 && Wl.x + Wl.y <= 1
        }
        static getUV(t, e, n, i, r, a, o, s) {
            return this.getBarycoord(t, e, n, i, Wl),
                s.set(0, 0),
                s.addScaledVector(r, Wl.x),
                s.addScaledVector(a, Wl.y),
                s.addScaledVector(o, Wl.z),
                s
        }
        static isFrontFacing(t, e, n, i) {
            return kl.subVectors(n, e),
                Ul.subVectors(t, e),
                kl.cross(Ul).dot(i) < 0
        }
        set(t, e, n) {
            return this.a.copy(t),
                this.b.copy(e),
                this.c.copy(n),
                this
        }
        setFromPointsAndIndices(t, e, n, i) {
            return this.a.copy(t[e]),
                this.b.copy(t[n]),
                this.c.copy(t[i]),
                this
        }
        clone() {
            return (new this.constructor).copy(this)
        }
        copy(t) {
            return this.a.copy(t.a),
                this.b.copy(t.b),
                this.c.copy(t.c),
                this
        }
        getArea() {
            return kl.subVectors(this.c, this.b),
                Ul.subVectors(this.a, this.b),
                .5 * kl.cross(Ul).length()
        }
        getMidpoint(t) {
            return void 0 === t && (console.warn("THREE.Triangle: .getMidpoint() target is now required"),
                t = new Fs),
                t.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
        }
        getNormal(t) {
            return Jl.getNormal(this.a, this.b, this.c, t)
        }
        getPlane(t) {
            return void 0 === t && (console.warn("THREE.Triangle: .getPlane() target is now required"),
                t = new Hl),
                t.setFromCoplanarPoints(this.a, this.b, this.c)
        }
        getBarycoord(t, e) {
            return Jl.getBarycoord(t, this.a, this.b, this.c, e)
        }
        getUV(t, e, n, i, r) {
            return Jl.getUV(t, this.a, this.b, this.c, e, n, i, r)
        }
        containsPoint(t) {
            return Jl.containsPoint(t, this.a, this.b, this.c)
        }
        isFrontFacing(t) {
            return Jl.isFrontFacing(this.a, this.b, this.c, t)
        }
        intersectsBox(t) {
            return t.intersectsTriangle(this)
        }
        closestPointToPoint(t, e) {
            void 0 === e && (console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),
                e = new Fs);
            const n = this.a
                , i = this.b
                , r = this.c;
            let a, o;
            Vl.subVectors(i, n),
                jl.subVectors(r, n),
                Xl.subVectors(t, n);
            const s = Vl.dot(Xl)
                , l = jl.dot(Xl);
            if (s <= 0 && l <= 0)
                return e.copy(n);
            Yl.subVectors(t, i);
            const c = Vl.dot(Yl)
                , u = jl.dot(Yl);
            if (c >= 0 && u <= c)
                return e.copy(i);
            const h = s * u - c * l;
            if (h <= 0 && s >= 0 && c <= 0)
                return a = s / (s - c),
                    e.copy(n).addScaledVector(Vl, a);
            Zl.subVectors(t, r);
            const d = Vl.dot(Zl)
                , p = jl.dot(Zl);
            if (p >= 0 && d <= p)
                return e.copy(r);
            const f = d * l - s * p;
            if (f <= 0 && l >= 0 && p <= 0)
                return o = l / (l - p),
                    e.copy(n).addScaledVector(jl, o);
            const m = c * p - d * u;
            if (m <= 0 && u - c >= 0 && d - p >= 0)
                return ql.subVectors(r, i),
                    o = (u - c) / (u - c + (d - p)),
                    e.copy(i).addScaledVector(ql, o);
            const g = 1 / (m + f + h);
            return a = f * g,
                o = h * g,
                e.copy(n).addScaledVector(Vl, a).addScaledVector(jl, o)
        }
        equals(t) {
            return t.a.equals(this.a) && t.b.equals(this.b) && t.c.equals(this.c)
        }
    }
    let Ql = 0;
    function Kl() {
        Object.defineProperty(this, "id", {
            value: Ql++
        }),
            this.uuid = _s(),
            this.name = "",
            this.type = "Material",
            this.fog = !0,
            this.blending = 1,
            this.side = 0,
            this.vertexColors = !1,
            this.opacity = 1,
            this.transparent = !1,
            this.blendSrc = 204,
            this.blendDst = 205,
            this.blendEquation = qo,
            this.blendSrcAlpha = null,
            this.blendDstAlpha = null,
            this.blendEquationAlpha = null,
            this.depthFunc = 3,
            this.depthTest = !0,
            this.depthWrite = !0,
            this.stencilWriteMask = 255,
            this.stencilFunc = 519,
            this.stencilRef = 0,
            this.stencilFuncMask = 255,
            this.stencilFail = us,
            this.stencilZFail = us,
            this.stencilZPass = us,
            this.stencilWrite = !1,
            this.clippingPlanes = null,
            this.clipIntersection = !1,
            this.clipShadows = !1,
            this.shadowSide = null,
            this.colorWrite = !0,
            this.precision = null,
            this.polygonOffset = !1,
            this.polygonOffsetFactor = 0,
            this.polygonOffsetUnits = 0,
            this.dithering = !1,
            this.alphaTest = 0,
            this.alphaToCoverage = !1,
            this.premultipliedAlpha = !1,
            this.visible = !0,
            this.toneMapped = !0,
            this.userData = {},
            this.version = 0
    }
    Kl.prototype = Object.assign(Object.create(fs.prototype), {
        constructor: Kl,
        isMaterial: !0,
        onBuild: function () { },
        onBeforeCompile: function () { },
        customProgramCacheKey: function () {
            return this.onBeforeCompile.toString()
        },
        setValues: function (t) {
            if (void 0 !== t)
                for (const e in t) {
                    const n = t[e];
                    if (void 0 === n) {
                        console.warn("THREE.Material: '" + e + "' parameter is undefined.");
                        continue
                    }
                    if ("shading" === e) {
                        console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead."),
                            this.flatShading = 1 === n;
                        continue
                    }
                    const i = this[e];
                    void 0 !== i ? i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[e] = n : console.warn("THREE." + this.type + ": '" + e + "' is not a property of this material.")
                }
        },
        toJSON: function (t) {
            const e = void 0 === t || "string" == typeof t;
            e && (t = {
                textures: {},
                images: {}
            });
            const n = {
                metadata: {
                    version: 4.5,
                    type: "Material",
                    generator: "Material.toJSON"
                }
            };
            function i(t) {
                const e = [];
                for (const n in t) {
                    const i = t[n];
                    delete i.metadata,
                        e.push(i)
                }
                return e
            }
            if (n.uuid = this.uuid,
                n.type = this.type,
                "" !== this.name && (n.name = this.name),
                this.color && this.color.isColor && (n.color = this.color.getHex()),
                void 0 !== this.roughness && (n.roughness = this.roughness),
                void 0 !== this.metalness && (n.metalness = this.metalness),
                this.sheen && this.sheen.isColor && (n.sheen = this.sheen.getHex()),
                this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
                this.emissiveIntensity && 1 !== this.emissiveIntensity && (n.emissiveIntensity = this.emissiveIntensity),
                this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
                void 0 !== this.shininess && (n.shininess = this.shininess),
                void 0 !== this.clearcoat && (n.clearcoat = this.clearcoat),
                void 0 !== this.clearcoatRoughness && (n.clearcoatRoughness = this.clearcoatRoughness),
                this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(t).uuid),
                this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(t).uuid),
                this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(t).uuid,
                    n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
                this.map && this.map.isTexture && (n.map = this.map.toJSON(t).uuid),
                this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(t).uuid),
                this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(t).uuid),
                this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(t).uuid,
                    n.lightMapIntensity = this.lightMapIntensity),
                this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(t).uuid,
                    n.aoMapIntensity = this.aoMapIntensity),
                this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(t).uuid,
                    n.bumpScale = this.bumpScale),
                this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(t).uuid,
                    n.normalMapType = this.normalMapType,
                    n.normalScale = this.normalScale.toArray()),
                this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(t).uuid,
                    n.displacementScale = this.displacementScale,
                    n.displacementBias = this.displacementBias),
                this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(t).uuid),
                this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(t).uuid),
                this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(t).uuid),
                this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(t).uuid),
                this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(t).uuid,
                    void 0 !== this.combine && (n.combine = this.combine)),
                void 0 !== this.envMapIntensity && (n.envMapIntensity = this.envMapIntensity),
                void 0 !== this.reflectivity && (n.reflectivity = this.reflectivity),
                void 0 !== this.refractionRatio && (n.refractionRatio = this.refractionRatio),
                this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(t).uuid),
                void 0 !== this.size && (n.size = this.size),
                null !== this.shadowSide && (n.shadowSide = this.shadowSide),
                void 0 !== this.sizeAttenuation && (n.sizeAttenuation = this.sizeAttenuation),
                1 !== this.blending && (n.blending = this.blending),
                0 !== this.side && (n.side = this.side),
                this.vertexColors && (n.vertexColors = !0),
                this.opacity < 1 && (n.opacity = this.opacity),
                !0 === this.transparent && (n.transparent = this.transparent),
                n.depthFunc = this.depthFunc,
                n.depthTest = this.depthTest,
                n.depthWrite = this.depthWrite,
                n.colorWrite = this.colorWrite,
                n.stencilWrite = this.stencilWrite,
                n.stencilWriteMask = this.stencilWriteMask,
                n.stencilFunc = this.stencilFunc,
                n.stencilRef = this.stencilRef,
                n.stencilFuncMask = this.stencilFuncMask,
                n.stencilFail = this.stencilFail,
                n.stencilZFail = this.stencilZFail,
                n.stencilZPass = this.stencilZPass,
                this.rotation && 0 !== this.rotation && (n.rotation = this.rotation),
                !0 === this.polygonOffset && (n.polygonOffset = !0),
                0 !== this.polygonOffsetFactor && (n.polygonOffsetFactor = this.polygonOffsetFactor),
                0 !== this.polygonOffsetUnits && (n.polygonOffsetUnits = this.polygonOffsetUnits),
                this.linewidth && 1 !== this.linewidth && (n.linewidth = this.linewidth),
                void 0 !== this.dashSize && (n.dashSize = this.dashSize),
                void 0 !== this.gapSize && (n.gapSize = this.gapSize),
                void 0 !== this.scale && (n.scale = this.scale),
                !0 === this.dithering && (n.dithering = !0),
                this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
                !0 === this.alphaToCoverage && (n.alphaToCoverage = this.alphaToCoverage),
                !0 === this.premultipliedAlpha && (n.premultipliedAlpha = this.premultipliedAlpha),
                !0 === this.wireframe && (n.wireframe = this.wireframe),
                this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
                "round" !== this.wireframeLinecap && (n.wireframeLinecap = this.wireframeLinecap),
                "round" !== this.wireframeLinejoin && (n.wireframeLinejoin = this.wireframeLinejoin),
                !0 === this.morphTargets && (n.morphTargets = !0),
                !0 === this.morphNormals && (n.morphNormals = !0),
                !0 === this.skinning && (n.skinning = !0),
                !0 === this.flatShading && (n.flatShading = this.flatShading),
                !1 === this.visible && (n.visible = !1),
                !1 === this.toneMapped && (n.toneMapped = !1),
                "{}" !== JSON.stringify(this.userData) && (n.userData = this.userData),
                e) {
                const e = i(t.textures)
                    , r = i(t.images);
                e.length > 0 && (n.textures = e),
                    r.length > 0 && (n.images = r)
            }
            return n
        },
        clone: function () {
            return (new this.constructor).copy(this)
        },
        copy: function (t) {
            this.name = t.name,
                this.fog = t.fog,
                this.blending = t.blending,
                this.side = t.side,
                this.vertexColors = t.vertexColors,
                this.opacity = t.opacity,
                this.transparent = t.transparent,
                this.blendSrc = t.blendSrc,
                this.blendDst = t.blendDst,
                this.blendEquation = t.blendEquation,
                this.blendSrcAlpha = t.blendSrcAlpha,
                this.blendDstAlpha = t.blendDstAlpha,
                this.blendEquationAlpha = t.blendEquationAlpha,
                this.depthFunc = t.depthFunc,
                this.depthTest = t.depthTest,
                this.depthWrite = t.depthWrite,
                this.stencilWriteMask = t.stencilWriteMask,
                this.stencilFunc = t.stencilFunc,
                this.stencilRef = t.stencilRef,
                this.stencilFuncMask = t.stencilFuncMask,
                this.stencilFail = t.stencilFail,
                this.stencilZFail = t.stencilZFail,
                this.stencilZPass = t.stencilZPass,
                this.stencilWrite = t.stencilWrite;
            const e = t.clippingPlanes;
            let n = null;
            if (null !== e) {
                const t = e.length;
                n = new Array(t);
                for (let i = 0; i !== t; ++i)
                    n[i] = e[i].clone()
            }
            return this.clippingPlanes = n,
                this.clipIntersection = t.clipIntersection,
                this.clipShadows = t.clipShadows,
                this.shadowSide = t.shadowSide,
                this.colorWrite = t.colorWrite,
                this.precision = t.precision,
                this.polygonOffset = t.polygonOffset,
                this.polygonOffsetFactor = t.polygonOffsetFactor,
                this.polygonOffsetUnits = t.polygonOffsetUnits,
                this.dithering = t.dithering,
                this.alphaTest = t.alphaTest,
                this.alphaToCoverage = t.alphaToCoverage,
                this.premultipliedAlpha = t.premultipliedAlpha,
                this.visible = t.visible,
                this.toneMapped = t.toneMapped,
                this.userData = JSON.parse(JSON.stringify(t.userData)),
                this
        },
        dispose: function () {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }),
        Object.defineProperty(Kl.prototype, "needsUpdate", {
            set: function (t) {
                !0 === t && this.version++
            }
        });
    const $l = {
        aliceblue: 15792383,
        antiquewhite: 16444375,
        aqua: 65535,
        aquamarine: 8388564,
        azure: 15794175,
        beige: 16119260,
        bisque: 16770244,
        black: 0,
        blanchedalmond: 16772045,
        blue: 255,
        blueviolet: 9055202,
        brown: 10824234,
        burlywood: 14596231,
        cadetblue: 6266528,
        chartreuse: 8388352,
        chocolate: 13789470,
        coral: 16744272,
        cornflowerblue: 6591981,
        cornsilk: 16775388,
        crimson: 14423100,
        cyan: 65535,
        darkblue: 139,
        darkcyan: 35723,
        darkgoldenrod: 12092939,
        darkgray: 11119017,
        darkgreen: 25600,
        darkgrey: 11119017,
        darkkhaki: 12433259,
        darkmagenta: 9109643,
        darkolivegreen: 5597999,
        darkorange: 16747520,
        darkorchid: 10040012,
        darkred: 9109504,
        darksalmon: 15308410,
        darkseagreen: 9419919,
        darkslateblue: 4734347,
        darkslategray: 3100495,
        darkslategrey: 3100495,
        darkturquoise: 52945,
        darkviolet: 9699539,
        deeppink: 16716947,
        deepskyblue: 49151,
        dimgray: 6908265,
        dimgrey: 6908265,
        dodgerblue: 2003199,
        firebrick: 11674146,
        floralwhite: 16775920,
        forestgreen: 2263842,
        teal: 16711935,
        gainsboro: 14474460,
        ghostwhite: 16316671,
        gold: 16766720,
        goldenrod: 14329120,
        gray: 8421504,
        green: 32768,
        greenyellow: 11403055,
        grey: 8421504,
        honeydew: 15794160,
        hotpink: 16738740,
        indianred: 13458524,
        indigo: 4915330,
        ivory: 16777200,
        khaki: 15787660,
        lavender: 15132410,
        lavenderblush: 16773365,
        lawngreen: 8190976,
        lemonchiffon: 16775885,
        lightblue: 11393254,
        lightcoral: 15761536,
        lightcyan: 14745599,
        lightgoldenrodyellow: 16448210,
        lightgray: 13882323,
        lightgreen: 9498256,
        lightgrey: 13882323,
        lightpink: 16758465,
        lightsalmon: 16752762,
        lightseagreen: 2142890,
        lightskyblue: 8900346,
        lightslategray: 7833753,
        lightslategrey: 7833753,
        lightsteelblue: 11584734,
        lightyellow: 16777184,
        lime: 65280,
        limegreen: 3329330,
        linen: 16445670,
        magenta: 16711935,
        maroon: 8388608,
        mediumaquamarine: 6737322,
        mediumblue: 205,
        mediumorchid: 12211667,
        mediumpurple: 9662683,
        mediumseagreen: 3978097,
        mediumslateblue: 8087790,
        mediumspringgreen: 64154,
        mediumturquoise: 4772300,
        mediumvioletred: 13047173,
        midnightblue: 1644912,
        mintcream: 16121850,
        mistyrose: 16770273,
        moccasin: 16770229,
        navajowhite: 16768685,
        navy: 128,
        oldlace: 16643558,
        olive: 8421376,
        olivedrab: 7048739,
        orange: 16753920,
        orangered: 16729344,
        orchid: 14315734,
        palegoldenrod: 15657130,
        palegreen: 10025880,
        paleturquoise: 11529966,
        palevioletred: 14381203,
        papayawhip: 16773077,
        peachpuff: 16767673,
        peru: 13468991,
        pink: 16761035,
        plum: 14524637,
        powderblue: 11591910,
        purple: 8388736,
        rebeccapurple: 6697881,
        red: 16711680,
        rosybrown: 12357519,
        royalblue: 4286945,
        saddlebrown: 9127187,
        salmon: 16416882,
        sandybrown: 16032864,
        seagreen: 3050327,
        seashell: 16774638,
        sienna: 10506797,
        silver: 12632256,
        skyblue: 8900331,
        slateblue: 6970061,
        slategray: 7372944,
        slategrey: 7372944,
        snow: 16775930,
        springgreen: 65407,
        steelblue: 4620980,
        tan: 13808780,
        teal: 32896,
        thistle: 14204888,
        tomato: 16737095,
        turquoise: 4251856,
        violet: 15631086,
        wheat: 16113331,
        white: 16777215,
        whitesmoke: 16119285,
        yellow: 16776960,
        yellowgreen: 10145074
    }
        , tc = {
            h: 0,
            s: 0,
            l: 0
        }
        , ec = {
            h: 0,
            s: 0,
            l: 0
        };
    function nc(t, e, n) {
        return n < 0 && (n += 1),
            n > 1 && (n -= 1),
            n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + 6 * (e - t) * (2 / 3 - n) : t
    }
    function ic(t) {
        return t < .04045 ? .0773993808 * t : Math.pow(.9478672986 * t + .0521327014, 2.4)
    }
    function rc(t) {
        return t < .0031308 ? 12.92 * t : 1.055 * Math.pow(t, .41666) - .055
    }
    class ac {
        constructor(t, e, n) {
            return void 0 === e && void 0 === n ? this.set(t) : this.setRGB(t, e, n)
        }
        set(t) {
            return t && t.isColor ? this.copy(t) : "number" == typeof t ? this.setHex(t) : "string" == typeof t && this.setStyle(t),
                this
        }
        setScalar(t) {
            return this.r = t,
                this.g = t,
                this.b = t,
                this
        }
        setHex(t) {
            return t = Math.floor(t),
                this.r = (t >> 16 & 255) / 255,
                this.g = (t >> 8 & 255) / 255,
                this.b = (255 & t) / 255,
                this
        }
        setRGB(t, e, n) {
            return this.r = t,
                this.g = e,
                this.b = n,
                this
        }
        setHSL(t, e, n) {
            if (t = function (t, e) {
                return (t % e + e) % e
            }(t, 1),
                e = xs(e, 0, 1),
                n = xs(n, 0, 1),
                0 === e)
                this.r = this.g = this.b = n;
            else {
                const i = n <= .5 ? n * (1 + e) : n + e - n * e
                    , r = 2 * n - i;
                this.r = nc(r, i, t + 1 / 3),
                    this.g = nc(r, i, t),
                    this.b = nc(r, i, t - 1 / 3)
            }
            return this
        }
        setStyle(t) {
            function e(e) {
                void 0 !== e && parseFloat(e) < 1 && console.warn("THREE.Color: Alpha component of " + t + " will be ignored.")
            }
            let n;
            if (n = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)) {
                let t;
                const i = n[1]
                    , r = n[2];
                switch (i) {
                    case "rgb":
                    case "rgba":
                        if (t = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
                            return this.r = Math.min(255, parseInt(t[1], 10)) / 255,
                                this.g = Math.min(255, parseInt(t[2], 10)) / 255,
                                this.b = Math.min(255, parseInt(t[3], 10)) / 255,
                                e(t[4]),
                                this;
                        if (t = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))
                            return this.r = Math.min(100, parseInt(t[1], 10)) / 100,
                                this.g = Math.min(100, parseInt(t[2], 10)) / 100,
                                this.b = Math.min(100, parseInt(t[3], 10)) / 100,
                                e(t[4]),
                                this;
                        break;
                    case "hsl":
                    case "hsla":
                        if (t = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)) {
                            const n = parseFloat(t[1]) / 360
                                , i = parseInt(t[2], 10) / 100
                                , r = parseInt(t[3], 10) / 100;
                            return e(t[4]),
                                this.setHSL(n, i, r)
                        }
                }
            } else if (n = /^\#([A-Fa-f\d]+)$/.exec(t)) {
                const t = n[1]
                    , e = t.length;
                if (3 === e)
                    return this.r = parseInt(t.charAt(0) + t.charAt(0), 16) / 255,
                        this.g = parseInt(t.charAt(1) + t.charAt(1), 16) / 255,
                        this.b = parseInt(t.charAt(2) + t.charAt(2), 16) / 255,
                        this;
                if (6 === e)
                    return this.r = parseInt(t.charAt(0) + t.charAt(1), 16) / 255,
                        this.g = parseInt(t.charAt(2) + t.charAt(3), 16) / 255,
                        this.b = parseInt(t.charAt(4) + t.charAt(5), 16) / 255,
                        this
            }
            return t && t.length > 0 ? this.setColorName(t) : this
        }
        setColorName(t) {
            const e = $l[t.toLowerCase()];
            return void 0 !== e ? this.setHex(e) : console.warn("THREE.Color: Unknown color " + t),
                this
        }
        clone() {
            return new this.constructor(this.r, this.g, this.b)
        }
        copy(t) {
            return this.r = t.r,
                this.g = t.g,
                this.b = t.b,
                this
        }
        copyGammaToLinear(t, e = 2) {
            return this.r = Math.pow(t.r, e),
                this.g = Math.pow(t.g, e),
                this.b = Math.pow(t.b, e),
                this
        }
        copyLinearToGamma(t, e = 2) {
            const n = e > 0 ? 1 / e : 1;
            return this.r = Math.pow(t.r, n),
                this.g = Math.pow(t.g, n),
                this.b = Math.pow(t.b, n),
                this
        }
        convertGammaToLinear(t) {
            return this.copyGammaToLinear(this, t),
                this
        }
        convertLinearToGamma(t) {
            return this.copyLinearToGamma(this, t),
                this
        }
        copySRGBToLinear(t) {
            return this.r = ic(t.r),
                this.g = ic(t.g),
                this.b = ic(t.b),
                this
        }
        copyLinearToSRGB(t) {
            return this.r = rc(t.r),
                this.g = rc(t.g),
                this.b = rc(t.b),
                this
        }
        convertSRGBToLinear() {
            return this.copySRGBToLinear(this),
                this
        }
        convertLinearToSRGB() {
            return this.copyLinearToSRGB(this),
                this
        }
        getHex() {
            return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0
        }
        getHexString() {
            return ("000000" + this.getHex().toString(16)).slice(-6)
        }
        getHSL(t) {
            void 0 === t && (console.warn("THREE.Color: .getHSL() target is now required"),
                t = {
                    h: 0,
                    s: 0,
                    l: 0
                });
            const e = this.r
                , n = this.g
                , i = this.b
                , r = Math.max(e, n, i)
                , a = Math.min(e, n, i);
            let o, s;
            const l = (a + r) / 2;
            if (a === r)
                o = 0,
                    s = 0;
            else {
                const t = r - a;
                switch (s = l <= .5 ? t / (r + a) : t / (2 - r - a),
                r) {
                    case e:
                        o = (n - i) / t + (n < i ? 6 : 0);
                        break;
                    case n:
                        o = (i - e) / t + 2;
                        break;
                    case i:
                        o = (e - n) / t + 4
                }
                o /= 6
            }
            return t.h = o,
                t.s = s,
                t.l = l,
                t
        }
        getStyle() {
            return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," + (255 * this.b | 0) + ")"
        }
        offsetHSL(t, e, n) {
            return this.getHSL(tc),
                tc.h += t,
                tc.s += e,
                tc.l += n,
                this.setHSL(tc.h, tc.s, tc.l),
                this
        }
        add(t) {
            return this.r += t.r,
                this.g += t.g,
                this.b += t.b,
                this
        }
        addColors(t, e) {
            return this.r = t.r + e.r,
                this.g = t.g + e.g,
                this.b = t.b + e.b,
                this
        }
        addScalar(t) {
            return this.r += t,
                this.g += t,
                this.b += t,
                this
        }
        sub(t) {
            return this.r = Math.max(0, this.r - t.r),
                this.g = Math.max(0, this.g - t.g),
                this.b = Math.max(0, this.b - t.b),
                this
        }
        multiply(t) {
            return this.r *= t.r,
                this.g *= t.g,
                this.b *= t.b,
                this
        }
        multiplyScalar(t) {
            return this.r *= t,
                this.g *= t,
                this.b *= t,
                this
        }
        lerp(t, e) {
            return this.r += (t.r - this.r) * e,
                this.g += (t.g - this.g) * e,
                this.b += (t.b - this.b) * e,
                this
        }
        lerpColors(t, e, n) {
            return this.r = t.r + (e.r - t.r) * n,
                this.g = t.g + (e.g - t.g) * n,
                this.b = t.b + (e.b - t.b) * n,
                this
        }
        lerpHSL(t, e) {
            this.getHSL(tc),
                t.getHSL(ec);
            const n = ys(tc.h, ec.h, e)
                , i = ys(tc.s, ec.s, e)
                , r = ys(tc.l, ec.l, e);
            return this.setHSL(n, i, r),
                this
        }
        equals(t) {
            return t.r === this.r && t.g === this.g && t.b === this.b
        }
        fromArray(t, e = 0) {
            return this.r = t[e],
                this.g = t[e + 1],
                this.b = t[e + 2],
                this
        }
        toArray(t = [], e = 0) {
            return t[e] = this.r,
                t[e + 1] = this.g,
                t[e + 2] = this.b,
                t
        }
        fromBufferAttribute(t, e) {
            return this.r = t.getX(e),
                this.g = t.getY(e),
                this.b = t.getZ(e),
                !0 === t.normalized && (this.r /= 255,
                    this.g /= 255,
                    this.b /= 255),
                this
        }
        toJSON() {
            return this.getHex()
        }
    }
    ac.NAMES = $l,
        ac.prototype.isColor = !0,
        ac.prototype.r = 1,
        ac.prototype.g = 1,
        ac.prototype.b = 1;
    class oc extends Kl {
        constructor(t) {
            super(),
                this.type = "MeshBasicMaterial",
                this.color = new ac(16777215),
                this.map = null,
                this.lightMap = null,
                this.lightMapIntensity = 1,
                this.aoMap = null,
                this.aoMapIntensity = 1,
                this.specularMap = null,
                this.alphaMap = null,
                this.envMap = null,
                this.combine = 0,
                this.reflectivity = 1,
                this.refractionRatio = .98,
                this.wireframe = !1,
                this.wireframeLinewidth = 1,
                this.wireframeLinecap = "round",
                this.wireframeLinejoin = "round",
                this.skinning = !1,
                this.morphTargets = !1,
                this.setValues(t)
        }
        copy(t) {
            return super.copy(t),
                this.color.copy(t.color),
                this.map = t.map,
                this.lightMap = t.lightMap,
                this.lightMapIntensity = t.lightMapIntensity,
                this.aoMap = t.aoMap,
                this.aoMapIntensity = t.aoMapIntensity,
                this.specularMap = t.specularMap,
                this.alphaMap = t.alphaMap,
                this.envMap = t.envMap,
                this.combine = t.combine,
                this.reflectivity = t.reflectivity,
                this.refractionRatio = t.refractionRatio,
                this.wireframe = t.wireframe,
                this.wireframeLinewidth = t.wireframeLinewidth,
                this.wireframeLinecap = t.wireframeLinecap,
                this.wireframeLinejoin = t.wireframeLinejoin,
                this.skinning = t.skinning,
                this.morphTargets = t.morphTargets,
                this
        }
    }
    oc.prototype.isMeshBasicMaterial = !0;
    const sc = new Fs
        , lc = new Ms;
    class cc {
        constructor(t, e, n) {
            if (Array.isArray(t))
                throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
            this.name = "",
                this.array = t,
                this.itemSize = e,
                this.count = void 0 !== t ? t.length / e : 0,
                this.normalized = !0 === n,
                this.usage = hs,
                this.updateRange = {
                    offset: 0,
                    count: -1
                },
                this.version = 0,
                this.onUploadCallback = function () { }
        }
        set needsUpdate(t) {
            !0 === t && this.version++
        }
        setUsage(t) {
            return this.usage = t,
                this
        }
        copy(t) {
            return this.name = t.name,
                this.array = new t.array.constructor(t.array),
                this.itemSize = t.itemSize,
                this.count = t.count,
                this.normalized = t.normalized,
                this.usage = t.usage,
                this
        }
        copyAt(t, e, n) {
            t *= this.itemSize,
                n *= e.itemSize;
            for (let i = 0, r = this.itemSize; i < r; i++)
                this.array[t + i] = e.array[n + i];
            return this
        }
        copyArray(t) {
            return this.array.set(t),
                this
        }
        copyColorsArray(t) {
            const e = this.array;
            let n = 0;
            for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", i),
                    r = new ac),
                    e[n++] = r.r,
                    e[n++] = r.g,
                    e[n++] = r.b
            }
            return this
        }
        copyVector2sArray(t) {
            const e = this.array;
            let n = 0;
            for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", i),
                    r = new Ms),
                    e[n++] = r.x,
                    e[n++] = r.y
            }
            return this
        }
        copyVector3sArray(t) {
            const e = this.array;
            let n = 0;
            for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", i),
                    r = new Fs),
                    e[n++] = r.x,
                    e[n++] = r.y,
                    e[n++] = r.z
            }
            return this
        }
        copyVector4sArray(t) {
            const e = this.array;
            let n = 0;
            for (let i = 0, r = t.length; i < r; i++) {
                let r = t[i];
                void 0 === r && (console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", i),
                    r = new As),
                    e[n++] = r.x,
                    e[n++] = r.y,
                    e[n++] = r.z,
                    e[n++] = r.w
            }
            return this
        }
        applyMatrix3(t) {
            if (2 === this.itemSize)
                for (let e = 0, n = this.count; e < n; e++)
                    lc.fromBufferAttribute(this, e),
                        lc.applyMatrix3(t),
                        this.setXY(e, lc.x, lc.y);
            else if (3 === this.itemSize)
                for (let e = 0, n = this.count; e < n; e++)
                    sc.fromBufferAttribute(this, e),
                        sc.applyMatrix3(t),
                        this.setXYZ(e, sc.x, sc.y, sc.z);
            return this
        }
        applyMatrix4(t) {
            for (let e = 0, n = this.count; e < n; e++)
                sc.x = this.getX(e),
                    sc.y = this.getY(e),
                    sc.z = this.getZ(e),
                    sc.applyMatrix4(t),
                    this.setXYZ(e, sc.x, sc.y, sc.z);
            return this
        }
        applyNormalMatrix(t) {
            for (let e = 0, n = this.count; e < n; e++)
                sc.x = this.getX(e),
                    sc.y = this.getY(e),
                    sc.z = this.getZ(e),
                    sc.applyNormalMatrix(t),
                    this.setXYZ(e, sc.x, sc.y, sc.z);
            return this
        }
        transformDirection(t) {
            for (let e = 0, n = this.count; e < n; e++)
                sc.x = this.getX(e),
                    sc.y = this.getY(e),
                    sc.z = this.getZ(e),
                    sc.transformDirection(t),
                    this.setXYZ(e, sc.x, sc.y, sc.z);
            return this
        }
        set(t, e = 0) {
            return this.array.set(t, e),
                this
        }
        getX(t) {
            return this.array[t * this.itemSize]
        }
        setX(t, e) {
            return this.array[t * this.itemSize] = e,
                this
        }
        getY(t) {
            return this.array[t * this.itemSize + 1]
        }
        setY(t, e) {
            return this.array[t * this.itemSize + 1] = e,
                this
        }
        getZ(t) {
            return this.array[t * this.itemSize + 2]
        }
        setZ(t, e) {
            return this.array[t * this.itemSize + 2] = e,
                this
        }
        getW(t) {
            return this.array[t * this.itemSize + 3]
        }
        setW(t, e) {
            return this.array[t * this.itemSize + 3] = e,
                this
        }
        setXY(t, e, n) {
            return t *= this.itemSize,
                this.array[t + 0] = e,
                this.array[t + 1] = n,
                this
        }
        setXYZ(t, e, n, i) {
            return t *= this.itemSize,
                this.array[t + 0] = e,
                this.array[t + 1] = n,
                this.array[t + 2] = i,
                this
        }
        setXYZW(t, e, n, i, r) {
            return t *= this.itemSize,
                this.array[t + 0] = e,
                this.array[t + 1] = n,
                this.array[t + 2] = i,
                this.array[t + 3] = r,
                this
        }
        onUpload(t) {
            return this.onUploadCallback = t,
                this
        }
        clone() {
            return new this.constructor(this.array, this.itemSize).copy(this)
        }
        toJSON() {
            const t = {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: Array.prototype.slice.call(this.array),
                normalized: this.normalized
            };
            return "" !== this.name && (t.name = this.name),
                this.usage !== hs && (t.usage = this.usage),
                0 === this.updateRange.offset && -1 === this.updateRange.count || (t.updateRange = this.updateRange),
                t
        }
    }
    cc.prototype.isBufferAttribute = !0;
    class uc extends cc {
        constructor(t, e, n) {
            super(new Uint16Array(t), e, n)
        }
    }
    class hc extends cc {
        constructor(t, e, n) {
            super(new Uint32Array(t), e, n)
        }
    }
    class dc extends cc {
        constructor(t, e, n) {
            super(new Float32Array(t), e, n)
        }
    }
    function pc(t) {
        if (0 === t.length)
            return -1 / 0;
        let e = t[0];
        for (let n = 1, i = t.length; n < i; ++n)
            t[n] > e && (e = t[n]);
        return e
    }
    let fc = 0;
    const mc = new ul
        , gc = new Il
        , vc = new Fs
        , _c = new Ns
        , xc = new Ns
        , yc = new Fs;
    class bc extends fs {
        constructor() {
            super(),
                Object.defineProperty(this, "id", {
                    value: fc++
                }),
                this.uuid = _s(),
                this.name = "",
                this.type = "BufferGeometry",
                this.index = null,
                this.attributes = {},
                this.morphAttributes = {},
                this.morphTargetsRelative = !1,
                this.groups = [],
                this.boundingBox = null,
                this.boundingSphere = null,
                this.drawRange = {
                    start: 0,
                    count: 1 / 0
                },
                this.userData = {}
        }
        getIndex() {
            return this.index
        }
        setIndex(t) {
            return Array.isArray(t) ? this.index = new (pc(t) > 65535 ? hc : uc)(t, 1) : this.index = t,
                this
        }
        getAttribute(t) {
            return this.attributes[t]
        }
        setAttribute(t, e) {
            return this.attributes[t] = e,
                this
        }
        deleteAttribute(t) {
            return delete this.attributes[t],
                this
        }
        hasAttribute(t) {
            return void 0 !== this.attributes[t]
        }
        addGroup(t, e, n = 0) {
            this.groups.push({
                start: t,
                count: e,
                materialIndex: n
            })
        }
        clearGroups() {
            this.groups = []
        }
        setDrawRange(t, e) {
            this.drawRange.start = t,
                this.drawRange.count = e
        }
        applyMatrix4(t) {
            const e = this.attributes.position;
            void 0 !== e && (e.applyMatrix4(t),
                e.needsUpdate = !0);
            const n = this.attributes.normal;
            if (void 0 !== n) {
                const e = (new Ds).getNormalMatrix(t);
                n.applyNormalMatrix(e),
                    n.needsUpdate = !0
            }
            const i = this.attributes.tangent;
            return void 0 !== i && (i.transformDirection(t),
                i.needsUpdate = !0),
                null !== this.boundingBox && this.computeBoundingBox(),
                null !== this.boundingSphere && this.computeBoundingSphere(),
                this
        }
        rotateX(t) {
            return mc.makeRotationX(t),
                this.applyMatrix4(mc),
                this
        }
        rotateY(t) {
            return mc.makeRotationY(t),
                this.applyMatrix4(mc),
                this
        }
        rotateZ(t) {
            return mc.makeRotationZ(t),
                this.applyMatrix4(mc),
                this
        }
        translate(t, e, n) {
            return mc.makeTranslation(t, e, n),
                this.applyMatrix4(mc),
                this
        }
        scale(t, e, n) {
            return mc.makeScale(t, e, n),
                this.applyMatrix4(mc),
                this
        }
        lookAt(t) {
            return gc.lookAt(t),
                gc.updateMatrix(),
                this.applyMatrix4(gc.matrix),
                this
        }
        center() {
            return this.computeBoundingBox(),
                this.boundingBox.getCenter(vc).negate(),
                this.translate(vc.x, vc.y, vc.z),
                this
        }
        setFromPoints(t) {
            const e = [];
            for (let n = 0, i = t.length; n < i; n++) {
                const i = t[n];
                e.push(i.x, i.y, i.z || 0)
            }
            return this.setAttribute("position", new dc(e, 3)),
                this
        }
        computeBoundingBox() {
            null === this.boundingBox && (this.boundingBox = new Ns);
            const t = this.attributes.position
                , e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute)
                return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".', this),
                    void this.boundingBox.set(new Fs(-1 / 0, -1 / 0, -1 / 0), new Fs(1 / 0, 1 / 0, 1 / 0));
            if (void 0 !== t) {
                if (this.boundingBox.setFromBufferAttribute(t),
                    e)
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t];
                        _c.setFromBufferAttribute(n),
                            this.morphTargetsRelative ? (yc.addVectors(this.boundingBox.min, _c.min),
                                this.boundingBox.expandByPoint(yc),
                                yc.addVectors(this.boundingBox.max, _c.max),
                                this.boundingBox.expandByPoint(yc)) : (this.boundingBox.expandByPoint(_c.min),
                                    this.boundingBox.expandByPoint(_c.max))
                    }
            } else
                this.boundingBox.makeEmpty();
            (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
        }
        computeBoundingSphere() {
            null === this.boundingSphere && (this.boundingSphere = new el);
            const t = this.attributes.position
                , e = this.morphAttributes.position;
            if (t && t.isGLBufferAttribute)
                return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".', this),
                    void this.boundingSphere.set(new Fs, 1 / 0);
            if (t) {
                const n = this.boundingSphere.center;
                if (_c.setFromBufferAttribute(t),
                    e)
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t];
                        xc.setFromBufferAttribute(n),
                            this.morphTargetsRelative ? (yc.addVectors(_c.min, xc.min),
                                _c.expandByPoint(yc),
                                yc.addVectors(_c.max, xc.max),
                                _c.expandByPoint(yc)) : (_c.expandByPoint(xc.min),
                                    _c.expandByPoint(xc.max))
                    }
                _c.getCenter(n);
                let i = 0;
                for (let e = 0, r = t.count; e < r; e++)
                    yc.fromBufferAttribute(t, e),
                        i = Math.max(i, n.distanceToSquared(yc));
                if (e)
                    for (let r = 0, a = e.length; r < a; r++) {
                        const a = e[r]
                            , o = this.morphTargetsRelative;
                        for (let e = 0, r = a.count; e < r; e++)
                            yc.fromBufferAttribute(a, e),
                                o && (vc.fromBufferAttribute(t, e),
                                    yc.add(vc)),
                                i = Math.max(i, n.distanceToSquared(yc))
                    }
                this.boundingSphere.radius = Math.sqrt(i),
                    isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
            }
        }
        computeFaceNormals() { }
        computeTangents() {
            const t = this.index
                , e = this.attributes;
            if (null === t || void 0 === e.position || void 0 === e.normal || void 0 === e.uv)
                return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            const n = t.array
                , i = e.position.array
                , r = e.normal.array
                , a = e.uv.array
                , o = i.length / 3;
            void 0 === e.tangent && this.setAttribute("tangent", new cc(new Float32Array(4 * o), 4));
            const s = e.tangent.array
                , l = []
                , c = [];
            for (let t = 0; t < o; t++)
                l[t] = new Fs,
                    c[t] = new Fs;
            const u = new Fs
                , h = new Fs
                , d = new Fs
                , p = new Ms
                , f = new Ms
                , m = new Ms
                , g = new Fs
                , v = new Fs;
            function _(t, e, n) {
                u.fromArray(i, 3 * t),
                    h.fromArray(i, 3 * e),
                    d.fromArray(i, 3 * n),
                    p.fromArray(a, 2 * t),
                    f.fromArray(a, 2 * e),
                    m.fromArray(a, 2 * n),
                    h.sub(u),
                    d.sub(u),
                    f.sub(p),
                    m.sub(p);
                const r = 1 / (f.x * m.y - m.x * f.y);
                isFinite(r) && (g.copy(h).multiplyScalar(m.y).addScaledVector(d, -f.y).multiplyScalar(r),
                    v.copy(d).multiplyScalar(f.x).addScaledVector(h, -m.x).multiplyScalar(r),
                    l[t].add(g),
                    l[e].add(g),
                    l[n].add(g),
                    c[t].add(v),
                    c[e].add(v),
                    c[n].add(v))
            }
            let x = this.groups;
            0 === x.length && (x = [{
                start: 0,
                count: n.length
            }]);
            for (let t = 0, e = x.length; t < e; ++t) {
                const e = x[t]
                    , i = e.start;
                for (let t = i, r = i + e.count; t < r; t += 3)
                    _(n[t + 0], n[t + 1], n[t + 2])
            }
            const y = new Fs
                , b = new Fs
                , w = new Fs
                , M = new Fs;
            function D(t) {
                w.fromArray(r, 3 * t),
                    M.copy(w);
                const e = l[t];
                y.copy(e),
                    y.sub(w.multiplyScalar(w.dot(e))).normalize(),
                    b.crossVectors(M, e);
                const n = b.dot(c[t]) < 0 ? -1 : 1;
                s[4 * t] = y.x,
                    s[4 * t + 1] = y.y,
                    s[4 * t + 2] = y.z,
                    s[4 * t + 3] = n
            }
            for (let t = 0, e = x.length; t < e; ++t) {
                const e = x[t]
                    , i = e.start;
                for (let t = i, r = i + e.count; t < r; t += 3)
                    D(n[t + 0]),
                        D(n[t + 1]),
                        D(n[t + 2])
            }
        }
        computeVertexNormals() {
            const t = this.index
                , e = this.getAttribute("position");
            if (void 0 !== e) {
                let n = this.getAttribute("normal");
                if (void 0 === n)
                    n = new cc(new Float32Array(3 * e.count), 3),
                        this.setAttribute("normal", n);
                else
                    for (let t = 0, e = n.count; t < e; t++)
                        n.setXYZ(t, 0, 0, 0);
                const i = new Fs
                    , r = new Fs
                    , a = new Fs
                    , o = new Fs
                    , s = new Fs
                    , l = new Fs
                    , c = new Fs
                    , u = new Fs;
                if (t)
                    for (let h = 0, d = t.count; h < d; h += 3) {
                        const d = t.getX(h + 0)
                            , p = t.getX(h + 1)
                            , f = t.getX(h + 2);
                        i.fromBufferAttribute(e, d),
                            r.fromBufferAttribute(e, p),
                            a.fromBufferAttribute(e, f),
                            c.subVectors(a, r),
                            u.subVectors(i, r),
                            c.cross(u),
                            o.fromBufferAttribute(n, d),
                            s.fromBufferAttribute(n, p),
                            l.fromBufferAttribute(n, f),
                            o.add(c),
                            s.add(c),
                            l.add(c),
                            n.setXYZ(d, o.x, o.y, o.z),
                            n.setXYZ(p, s.x, s.y, s.z),
                            n.setXYZ(f, l.x, l.y, l.z)
                    }
                else
                    for (let t = 0, o = e.count; t < o; t += 3)
                        i.fromBufferAttribute(e, t + 0),
                            r.fromBufferAttribute(e, t + 1),
                            a.fromBufferAttribute(e, t + 2),
                            c.subVectors(a, r),
                            u.subVectors(i, r),
                            c.cross(u),
                            n.setXYZ(t + 0, c.x, c.y, c.z),
                            n.setXYZ(t + 1, c.x, c.y, c.z),
                            n.setXYZ(t + 2, c.x, c.y, c.z);
                this.normalizeNormals(),
                    n.needsUpdate = !0
            }
        }
        merge(t, e) {
            if (!t || !t.isBufferGeometry)
                return void console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", t);
            void 0 === e && (e = 0,
                console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));
            const n = this.attributes;
            for (const i in n) {
                if (void 0 === t.attributes[i])
                    continue;
                const r = n[i].array
                    , a = t.attributes[i]
                    , o = a.array
                    , s = a.itemSize * e
                    , l = Math.min(o.length, r.length - s);
                for (let t = 0, e = s; t < l; t++,
                    e++)
                    r[e] = o[t]
            }
            return this
        }
        normalizeNormals() {
            const t = this.attributes.normal;
            for (let e = 0, n = t.count; e < n; e++)
                yc.fromBufferAttribute(t, e),
                    yc.normalize(),
                    t.setXYZ(e, yc.x, yc.y, yc.z)
        }
        toNonIndexed() {
            function t(t, e) {
                const n = t.array
                    , i = t.itemSize
                    , r = t.normalized
                    , a = new n.constructor(e.length * i);
                let o = 0
                    , s = 0;
                for (let t = 0, r = e.length; t < r; t++) {
                    o = e[t] * i;
                    for (let t = 0; t < i; t++)
                        a[s++] = n[o++]
                }
                return new cc(a, i, r)
            }
            if (null === this.index)
                return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
                    this;
            const e = new bc
                , n = this.index.array
                , i = this.attributes;
            for (const r in i) {
                const a = t(i[r], n);
                e.setAttribute(r, a)
            }
            const r = this.morphAttributes;
            for (const i in r) {
                const a = []
                    , o = r[i];
                for (let e = 0, i = o.length; e < i; e++) {
                    const i = t(o[e], n);
                    a.push(i)
                }
                e.morphAttributes[i] = a
            }
            e.morphTargetsRelative = this.morphTargetsRelative;
            const a = this.groups;
            for (let t = 0, n = a.length; t < n; t++) {
                const n = a[t];
                e.addGroup(n.start, n.count, n.materialIndex)
            }
            return e
        }
        toJSON() {
            const t = {
                metadata: {
                    version: 4.5,
                    type: "BufferGeometry",
                    generator: "BufferGeometry.toJSON"
                }
            };
            if (t.uuid = this.uuid,
                t.type = this.type,
                "" !== this.name && (t.name = this.name),
                Object.keys(this.userData).length > 0 && (t.userData = this.userData),
                void 0 !== this.parameters) {
                const e = this.parameters;
                for (const n in e)
                    void 0 !== e[n] && (t[n] = e[n]);
                return t
            }
            t.data = {
                attributes: {}
            };
            const e = this.index;
            null !== e && (t.data.index = {
                type: e.array.constructor.name,
                array: Array.prototype.slice.call(e.array)
            });
            const n = this.attributes;
            for (const e in n) {
                const i = n[e];
                t.data.attributes[e] = i.toJSON(t.data)
            }
            const i = {};
            let r = !1;
            for (const e in this.morphAttributes) {
                const n = this.morphAttributes[e]
                    , a = [];
                for (let e = 0, i = n.length; e < i; e++) {
                    const i = n[e];
                    a.push(i.toJSON(t.data))
                }
                a.length > 0 && (i[e] = a,
                    r = !0)
            }
            r && (t.data.morphAttributes = i,
                t.data.morphTargetsRelative = this.morphTargetsRelative);
            const a = this.groups;
            a.length > 0 && (t.data.groups = JSON.parse(JSON.stringify(a)));
            const o = this.boundingSphere;
            return null !== o && (t.data.boundingSphere = {
                center: o.center.toArray(),
                radius: o.radius
            }),
                t
        }
        clone() {
            return (new bc).copy(this)
        }
        copy(t) {
            this.index = null,
                this.attributes = {},
                this.morphAttributes = {},
                this.groups = [],
                this.boundingBox = null,
                this.boundingSphere = null;
            const e = {};
            this.name = t.name;
            const n = t.index;
            null !== n && this.setIndex(n.clone(e));
            const i = t.attributes;
            for (const t in i) {
                const n = i[t];
                this.setAttribute(t, n.clone(e))
            }
            const r = t.morphAttributes;
            for (const t in r) {
                const n = []
                    , i = r[t];
                for (let t = 0, r = i.length; t < r; t++)
                    n.push(i[t].clone(e));
                this.morphAttributes[t] = n
            }
            this.morphTargetsRelative = t.morphTargetsRelative;
            const a = t.groups;
            for (let t = 0, e = a.length; t < e; t++) {
                const e = a[t];
                this.addGroup(e.start, e.count, e.materialIndex)
            }
            const o = t.boundingBox;
            null !== o && (this.boundingBox = o.clone());
            const s = t.boundingSphere;
            return null !== s && (this.boundingSphere = s.clone()),
                this.drawRange.start = t.drawRange.start,
                this.drawRange.count = t.drawRange.count,
                this.userData = t.userData,
                this
        }
        dispose() {
            this.dispatchEvent({
                type: "dispose"
            })
        }
    }
    bc.prototype.isBufferGeometry = !0;
    const wc = new ul
        , Mc = new cl
        , Dc = new el
        , Ec = new Fs
        , Tc = new Fs
        , Sc = new Fs
        , Cc = new Fs
        , Lc = new Fs
        , Ac = new Fs
        , Rc = new Fs
        , Pc = new Fs
        , Fc = new Fs
        , Oc = new Ms
        , Ic = new Ms
        , Nc = new Ms
        , zc = new Fs
        , Bc = new Fs;
    class Hc extends Il {
        constructor(t = new bc, e = new oc) {
            super(),
                this.type = "Mesh",
                this.geometry = t,
                this.material = e,
                this.updateMorphTargets()
        }
        copy(t) {
            return super.copy(t),
                void 0 !== t.morphTargetInfluences && (this.morphTargetInfluences = t.morphTargetInfluences.slice()),
                void 0 !== t.morphTargetDictionary && (this.morphTargetDictionary = Object.assign({}, t.morphTargetDictionary)),
                this.material = t.material,
                this.geometry = t.geometry,
                this
        }
        updateMorphTargets() {
            const t = this.geometry;
            if (t.isBufferGeometry) {
                const e = t.morphAttributes
                    , n = Object.keys(e);
                if (n.length > 0) {
                    const t = e[n[0]];
                    if (void 0 !== t) {
                        this.morphTargetInfluences = [],
                            this.morphTargetDictionary = {};
                        for (let e = 0, n = t.length; e < n; e++) {
                            const n = t[e].name || String(e);
                            this.morphTargetInfluences.push(0),
                                this.morphTargetDictionary[n] = e
                        }
                    }
                }
            } else {
                const e = t.morphTargets;
                void 0 !== e && e.length > 0 && console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
            }
        }
        raycast(t, e) {
            const n = this.geometry
                , i = this.material
                , r = this.matrixWorld;
            if (void 0 === i)
                return;
            if (null === n.boundingSphere && n.computeBoundingSphere(),
                Dc.copy(n.boundingSphere),
                Dc.applyMatrix4(r),
                !1 === t.ray.intersectsSphere(Dc))
                return;
            if (wc.copy(r).invert(),
                Mc.copy(t.ray).applyMatrix4(wc),
                null !== n.boundingBox && !1 === Mc.intersectsBox(n.boundingBox))
                return;
            let a;
            if (n.isBufferGeometry) {
                const r = n.index
                    , o = n.attributes.position
                    , s = n.morphAttributes.position
                    , l = n.morphTargetsRelative
                    , c = n.attributes.uv
                    , u = n.attributes.uv2
                    , h = n.groups
                    , d = n.drawRange;
                if (null !== r)
                    if (Array.isArray(i))
                        for (let n = 0, p = h.length; n < p; n++) {
                            const p = h[n]
                                , f = i[p.materialIndex];
                            for (let n = Math.max(p.start, d.start), i = Math.min(p.start + p.count, d.start + d.count); n < i; n += 3) {
                                const i = r.getX(n)
                                    , h = r.getX(n + 1)
                                    , d = r.getX(n + 2);
                                a = kc(this, f, t, Mc, o, s, l, c, u, i, h, d),
                                    a && (a.faceIndex = Math.floor(n / 3),
                                        a.face.materialIndex = p.materialIndex,
                                        e.push(a))
                            }
                        }
                    else {
                        for (let n = Math.max(0, d.start), h = Math.min(r.count, d.start + d.count); n < h; n += 3) {
                            const h = r.getX(n)
                                , d = r.getX(n + 1)
                                , p = r.getX(n + 2);
                            a = kc(this, i, t, Mc, o, s, l, c, u, h, d, p),
                                a && (a.faceIndex = Math.floor(n / 3),
                                    e.push(a))
                        }
                    }
                else if (void 0 !== o)
                    if (Array.isArray(i))
                        for (let n = 0, r = h.length; n < r; n++) {
                            const r = h[n]
                                , p = i[r.materialIndex];
                            for (let n = Math.max(r.start, d.start), i = Math.min(r.start + r.count, d.start + d.count); n < i; n += 3) {
                                a = kc(this, p, t, Mc, o, s, l, c, u, n, n + 1, n + 2),
                                    a && (a.faceIndex = Math.floor(n / 3),
                                        a.face.materialIndex = r.materialIndex,
                                        e.push(a))
                            }
                        }
                    else {
                        for (let n = Math.max(0, d.start), r = Math.min(o.count, d.start + d.count); n < r; n += 3) {
                            a = kc(this, i, t, Mc, o, s, l, c, u, n, n + 1, n + 2),
                                a && (a.faceIndex = Math.floor(n / 3),
                                    e.push(a))
                        }
                    }
            } else
                n.isGeometry && console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")
        }
    }
    function kc(t, e, n, i, r, a, o, s, l, c, u, h) {
        Ec.fromBufferAttribute(r, c),
            Tc.fromBufferAttribute(r, u),
            Sc.fromBufferAttribute(r, h);
        const d = t.morphTargetInfluences;
        if (e.morphTargets && a && d) {
            Rc.set(0, 0, 0),
                Pc.set(0, 0, 0),
                Fc.set(0, 0, 0);
            for (let t = 0, e = a.length; t < e; t++) {
                const e = d[t]
                    , n = a[t];
                0 !== e && (Cc.fromBufferAttribute(n, c),
                    Lc.fromBufferAttribute(n, u),
                    Ac.fromBufferAttribute(n, h),
                    o ? (Rc.addScaledVector(Cc, e),
                        Pc.addScaledVector(Lc, e),
                        Fc.addScaledVector(Ac, e)) : (Rc.addScaledVector(Cc.sub(Ec), e),
                            Pc.addScaledVector(Lc.sub(Tc), e),
                            Fc.addScaledVector(Ac.sub(Sc), e)))
            }
            Ec.add(Rc),
                Tc.add(Pc),
                Sc.add(Fc)
        }
        t.isSkinnedMesh && e.skinning && (t.boneTransform(c, Ec),
            t.boneTransform(u, Tc),
            t.boneTransform(h, Sc));
        const p = function (t, e, n, i, r, a, o, s) {
            let l;
            if (l = 1 === e.side ? i.intersectTriangle(o, a, r, !0, s) : i.intersectTriangle(r, a, o, 2 !== e.side, s),
                null === l)
                return null;
            Bc.copy(s),
                Bc.applyMatrix4(t.matrixWorld);
            const c = n.ray.origin.distanceTo(Bc);
            return c < n.near || c > n.far ? null : {
                distance: c,
                point: Bc.clone(),
                object: t
            }
        }(t, e, n, i, Ec, Tc, Sc, zc);
        if (p) {
            s && (Oc.fromBufferAttribute(s, c),
                Ic.fromBufferAttribute(s, u),
                Nc.fromBufferAttribute(s, h),
                p.uv = Jl.getUV(zc, Ec, Tc, Sc, Oc, Ic, Nc, new Ms)),
                l && (Oc.fromBufferAttribute(l, c),
                    Ic.fromBufferAttribute(l, u),
                    Nc.fromBufferAttribute(l, h),
                    p.uv2 = Jl.getUV(zc, Ec, Tc, Sc, Oc, Ic, Nc, new Ms));
            const t = {
                a: c,
                b: u,
                c: h,
                normal: new Fs,
                materialIndex: 0
            };
            Jl.getNormal(Ec, Tc, Sc, t.normal),
                p.face = t
        }
        return p
    }
    Hc.prototype.isMesh = !0;
    class Uc extends bc {
        constructor(t = 1, e = 1, n = 1, i = 1, r = 1, a = 1) {
            super(),
                this.type = "BoxGeometry",
                this.parameters = {
                    width: t,
                    height: e,
                    depth: n,
                    widthSegments: i,
                    heightSegments: r,
                    depthSegments: a
                };
            const o = this;
            i = Math.floor(i),
                r = Math.floor(r),
                a = Math.floor(a);
            const s = []
                , l = []
                , c = []
                , u = [];
            let h = 0
                , d = 0;
            function p(t, e, n, i, r, a, p, f, m, g, v) {
                const _ = a / m
                    , x = p / g
                    , y = a / 2
                    , b = p / 2
                    , w = f / 2
                    , M = m + 1
                    , D = g + 1;
                let E = 0
                    , T = 0;
                const S = new Fs;
                for (let a = 0; a < D; a++) {
                    const o = a * x - b;
                    for (let s = 0; s < M; s++) {
                        const h = s * _ - y;
                        S[t] = h * i,
                            S[e] = o * r,
                            S[n] = w,
                            l.push(S.x, S.y, S.z),
                            S[t] = 0,
                            S[e] = 0,
                            S[n] = f > 0 ? 1 : -1,
                            c.push(S.x, S.y, S.z),
                            u.push(s / m),
                            u.push(1 - a / g),
                            E += 1
                    }
                }
                for (let t = 0; t < g; t++)
                    for (let e = 0; e < m; e++) {
                        const n = h + e + M * t
                            , i = h + e + M * (t + 1)
                            , r = h + (e + 1) + M * (t + 1)
                            , a = h + (e + 1) + M * t;
                        s.push(n, i, a),
                            s.push(i, r, a),
                            T += 6
                    }
                o.addGroup(d, T, v),
                    d += T,
                    h += E
            }
            p("z", "y", "x", -1, -1, n, e, t, a, r, 0),
                p("z", "y", "x", 1, -1, n, e, -t, a, r, 1),
                p("x", "z", "y", 1, 1, t, n, e, i, a, 2),
                p("x", "z", "y", 1, -1, t, n, -e, i, a, 3),
                p("x", "y", "z", 1, -1, t, e, n, i, r, 4),
                p("x", "y", "z", -1, -1, t, e, -n, i, r, 5),
                this.setIndex(s),
                this.setAttribute("position", new dc(l, 3)),
                this.setAttribute("normal", new dc(c, 3)),
                this.setAttribute("uv", new dc(u, 2))
        }
    }
    function Gc(t) {
        const e = {};
        for (const n in t) {
            e[n] = {};
            for (const i in t[n]) {
                const r = t[n][i];
                r && (r.isColor || r.isMatrix3 || r.isMatrix4 || r.isVector2 || r.isVector3 || r.isVector4 || r.isTexture || r.isQuaternion) ? e[n][i] = r.clone() : Array.isArray(r) ? e[n][i] = r.slice() : e[n][i] = r
            }
        }
        return e
    }
    function Wc(t) {
        const e = {};
        for (let n = 0; n < t.length; n++) {
            const i = Gc(t[n]);
            for (const t in i)
                e[t] = i[t]
        }
        return e
    }
    const Vc = {
        clone: Gc,
        merge: Wc
    };
    class jc extends Kl {
        constructor(t) {
            super(),
                this.type = "ShaderMaterial",
                this.defines = {},
                this.uniforms = {},
                this.vertexShader = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 0.1 );\n}",
                this.fragmentShader = "void main() {\n\tgl_FragColor = vec4( 0.1, 1.0, 0.2, 1.0 );\n}",
                this.linewidth = 1,
                this.wireframe = !1,
                this.wireframeLinewidth = 1,
                this.fog = !1,
                this.lights = !1,
                this.clipping = !1,
                this.skinning = !1,
                this.morphTargets = !1,
                this.morphNormals = !1,
                this.extensions = {
                    derivatives: !1,
                    fragDepth: !1,
                    drawBuffers: !1,
                    shaderTextureLOD: !1
                },
                this.defaultAttributeValues = {
                    color: [1, 1, 1],
                    uv: [0, 0],
                    uv2: [0, 0]
                },
                this.index0AttributeName = void 0,
                this.uniformsNeedUpdate = !1,
                this.glslVersion = null,
                void 0 !== t && (void 0 !== t.attributes && console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),
                    this.setValues(t))
        }
        copy(t) {
            return super.copy(t),
                this.fragmentShader = t.fragmentShader,
                this.vertexShader = t.vertexShader,
                this.uniforms = Gc(t.uniforms),
                this.defines = Object.assign({}, t.defines),
                this.wireframe = t.wireframe,
                this.wireframeLinewidth = t.wireframeLinewidth,
                this.lights = t.lights,
                this.clipping = t.clipping,
                this.skinning = t.skinning,
                this.morphTargets = t.morphTargets,
                this.morphNormals = t.morphNormals,
                this.extensions = Object.assign({}, t.extensions),
                this.glslVersion = t.glslVersion,
                this
        }
        toJSON(t) {
            const e = super.toJSON(t);
            e.glslVersion = this.glslVersion,
                e.uniforms = {};
            for (const n in this.uniforms) {
                const i = this.uniforms[n].value;
                i && i.isTexture ? e.uniforms[n] = {
                    type: "t",
                    value: i.toJSON(t).uuid
                } : i && i.isColor ? e.uniforms[n] = {
                    type: "c",
                    value: i.getHex()
                } : i && i.isVector2 ? e.uniforms[n] = {
                    type: "v2",
                    value: i.toArray()
                } : i && i.isVector3 ? e.uniforms[n] = {
                    type: "v3",
                    value: i.toArray()
                } : i && i.isVector4 ? e.uniforms[n] = {
                    type: "v4",
                    value: i.toArray()
                } : i && i.isMatrix3 ? e.uniforms[n] = {
                    type: "m3",
                    value: i.toArray()
                } : i && i.isMatrix4 ? e.uniforms[n] = {
                    type: "m4",
                    value: i.toArray()
                } : e.uniforms[n] = {
                    value: i
                }
            }
            Object.keys(this.defines).length > 0 && (e.defines = this.defines),
                e.vertexShader = this.vertexShader,
                e.fragmentShader = this.fragmentShader;
            const n = {};
            for (const t in this.extensions)
                !0 === this.extensions[t] && (n[t] = !0);
            return Object.keys(n).length > 0 && (e.extensions = n),
                e
        }
    }
    jc.prototype.isShaderMaterial = !0;
    class qc extends Il {
        constructor() {
            super(),
                this.type = "Camera",
                this.matrixWorldInverse = new ul,
                this.projectionMatrix = new ul,
                this.projectionMatrixInverse = new ul
        }
        copy(t, e) {
            return super.copy(t, e),
                this.matrixWorldInverse.copy(t.matrixWorldInverse),
                this.projectionMatrix.copy(t.projectionMatrix),
                this.projectionMatrixInverse.copy(t.projectionMatrixInverse),
                this
        }
        getWorldDirection(t) {
            void 0 === t && (console.warn("THREE.Camera: .getWorldDirection() target is now required"),
                t = new Fs),
                this.updateWorldMatrix(!0, !1);
            const e = this.matrixWorld.elements;
            return t.set(-e[8], -e[9], -e[10]).normalize()
        }
        updateMatrixWorld(t) {
            super.updateMatrixWorld(t),
                this.matrixWorldInverse.copy(this.matrixWorld).invert()
        }
        updateWorldMatrix(t, e) {
            super.updateWorldMatrix(t, e),
                this.matrixWorldInverse.copy(this.matrixWorld).invert()
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    qc.prototype.isCamera = !0;
    class Xc extends qc {
        constructor(t = 50, e = 1, n = .1, i = 2e3) {
            super(),
                this.type = "PerspectiveCamera",
                this.fov = t,
                this.zoom = 1,
                this.near = n,
                this.far = i,
                this.focus = 10,
                this.aspect = e,
                this.view = null,
                this.filmGauge = 35,
                this.filmOffset = 0,
                this.updateProjectionMatrix()
        }
        copy(t, e) {
            return super.copy(t, e),
                this.fov = t.fov,
                this.zoom = t.zoom,
                this.near = t.near,
                this.far = t.far,
                this.focus = t.focus,
                this.aspect = t.aspect,
                this.view = null === t.view ? null : Object.assign({}, t.view),
                this.filmGauge = t.filmGauge,
                this.filmOffset = t.filmOffset,
                this
        }
        setFocalLength(t) {
            const e = .5 * this.getFilmHeight() / t;
            this.fov = 2 * vs * Math.atan(e),
                this.updateProjectionMatrix()
        }
        getFocalLength() {
            const t = Math.tan(.5 * gs * this.fov);
            return .5 * this.getFilmHeight() / t
        }
        getEffectiveFOV() {
            return 2 * vs * Math.atan(Math.tan(.5 * gs * this.fov) / this.zoom)
        }
        getFilmWidth() {
            return this.filmGauge * Math.min(this.aspect, 1)
        }
        getFilmHeight() {
            return this.filmGauge / Math.max(this.aspect, 1)
        }
        setViewOffset(t, e, n, i, r, a) {
            this.aspect = t / e,
                null === this.view && (this.view = {
                    enabled: !0,
                    fullWidth: 1,
                    fullHeight: 1,
                    offsetX: 0,
                    offsetY: 0,
                    width: 1,
                    height: 1
                }),
                this.view.enabled = !0,
                this.view.fullWidth = t,
                this.view.fullHeight = e,
                this.view.offsetX = n,
                this.view.offsetY = i,
                this.view.width = r,
                this.view.height = a,
                this.updateProjectionMatrix()
        }
        clearViewOffset() {
            null !== this.view && (this.view.enabled = !1),
                this.updateProjectionMatrix()
        }
        updateProjectionMatrix() {
            const t = this.near;
            let e = t * Math.tan(.5 * gs * this.fov) / this.zoom
                , n = 2 * e
                , i = this.aspect * n
                , r = -.5 * i;
            const a = this.view;
            if (null !== this.view && this.view.enabled) {
                const t = a.fullWidth
                    , o = a.fullHeight;
                r += a.offsetX * i / t,
                    e -= a.offsetY * n / o,
                    i *= a.width / t,
                    n *= a.height / o
            }
            const o = this.filmOffset;
            0 !== o && (r += t * o / this.getFilmWidth()),
                this.projectionMatrix.makePerspective(r, r + i, e, e - n, t, this.far),
                this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
        }
        toJSON(t) {
            const e = super.toJSON(t);
            return e.object.fov = this.fov,
                e.object.zoom = this.zoom,
                e.object.near = this.near,
                e.object.far = this.far,
                e.object.focus = this.focus,
                e.object.aspect = this.aspect,
                null !== this.view && (e.object.view = Object.assign({}, this.view)),
                e.object.filmGauge = this.filmGauge,
                e.object.filmOffset = this.filmOffset,
                e
        }
    }
    Xc.prototype.isPerspectiveCamera = !0;
    const Yc = 90;
    class Zc extends Il {
        constructor(t, e, n) {
            if (super(),
                this.type = "CubeCamera",
                !0 !== n.isWebGLCubeRenderTarget)
                return void console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");
            this.renderTarget = n;
            const i = new Xc(Yc, 1, t, e);
            i.layers = this.layers,
                i.up.set(0, -1, 0),
                i.lookAt(new Fs(1, 0, 0)),
                this.add(i);
            const r = new Xc(Yc, 1, t, e);
            r.layers = this.layers,
                r.up.set(0, -1, 0),
                r.lookAt(new Fs(-1, 0, 0)),
                this.add(r);
            const a = new Xc(Yc, 1, t, e);
            a.layers = this.layers,
                a.up.set(0, 0, 1),
                a.lookAt(new Fs(0, 1, 0)),
                this.add(a);
            const o = new Xc(Yc, 1, t, e);
            o.layers = this.layers,
                o.up.set(0, 0, -1),
                o.lookAt(new Fs(0, -1, 0)),
                this.add(o);
            const s = new Xc(Yc, 1, t, e);
            s.layers = this.layers,
                s.up.set(0, -1, 0),
                s.lookAt(new Fs(0, 0, 1)),
                this.add(s);
            const l = new Xc(Yc, 1, t, e);
            l.layers = this.layers,
                l.up.set(0, -1, 0),
                l.lookAt(new Fs(0, 0, -1)),
                this.add(l)
        }
        update(t, e) {
            null === this.parent && this.updateMatrixWorld();
            const n = this.renderTarget
                , [i, r, a, o, s, l] = this.children
                , c = t.xr.enabled
                , u = t.getRenderTarget();
            t.xr.enabled = !1;
            const h = n.texture.generateMipmaps;
            n.texture.generateMipmaps = !1,
                t.setRenderTarget(n, 0),
                t.render(e, i),
                t.setRenderTarget(n, 1),
                t.render(e, r),
                t.setRenderTarget(n, 2),
                t.render(e, a),
                t.setRenderTarget(n, 3),
                t.render(e, o),
                t.setRenderTarget(n, 4),
                t.render(e, s),
                n.texture.generateMipmaps = h,
                t.setRenderTarget(n, 5),
                t.render(e, l),
                t.setRenderTarget(u),
                t.xr.enabled = c
        }
    }
    class Jc extends Cs {
        constructor(t, e, n, i, r, a, o, s, l, c) {
            super(t = void 0 !== t ? t : [], e = void 0 !== e ? e : 301, n, i, r, a, o = void 0 !== o ? o : as, s, l, c),
                this._needsFlipEnvMap = !0,
                this.flipY = !1
        }
        get images() {
            return this.image
        }
        set images(t) {
            this.image = t
        }
    }
    Jc.prototype.isCubeTexture = !0;
    class Qc extends Rs {
        constructor(t, e, n) {
            Number.isInteger(e) && (console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),
                e = n),
                super(t, t, e),
                e = e || {},
                this.texture = new Jc(void 0, e.mapping, e.wrapS, e.wrapT, e.magFilter, e.minFilter, e.format, e.type, e.anisotropy, e.encoding),
                this.texture.generateMipmaps = void 0 !== e.generateMipmaps && e.generateMipmaps,
                this.texture.minFilter = void 0 !== e.minFilter ? e.minFilter : Qo,
                this.texture._needsFlipEnvMap = !1
        }
        fromEquirectangularTexture(t, e) {
            this.texture.type = e.type,
                this.texture.format = os,
                this.texture.encoding = e.encoding,
                this.texture.generateMipmaps = e.generateMipmaps,
                this.texture.minFilter = e.minFilter,
                this.texture.magFilter = e.magFilter;
            const n = {
                uniforms: {
                    tEquirect: {
                        value: null
                    }
                },
                vertexShader: "\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\tvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\n\t\t\t\t\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n\n\t\t\t\t}\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvWorldDirection = transformDirection( position, modelMatrix );\n\n\t\t\t\t\t#include <begin_vertex>\n\t\t\t\t\t#include <project_vertex>\n\n\t\t\t\t}\n\t\t\t",
                fragmentShader: "\n\n\t\t\t\tuniform sampler2D tEquirect;\n\n\t\t\t\tvarying vec3 vWorldDirection;\n\n\t\t\t\t#include <common>\n\n\t\t\t\tvoid main() {\n\n\t\t\t\t\tvec3 direction = normalize( vWorldDirection );\n\n\t\t\t\t\tvec2 sampleUV = equirectUv( direction );\n\n\t\t\t\t\tgl_FragColor = texture2D( tEquirect, sampleUV );\n\n\t\t\t\t}\n\t\t\t"
            }
                , i = new Uc(5, 5, 5)
                , r = new jc({
                    name: "CubemapFromEquirect",
                    uniforms: Gc(n.uniforms),
                    vertexShader: n.vertexShader,
                    fragmentShader: n.fragmentShader,
                    side: 1,
                    blending: 0
                });
            r.uniforms.tEquirect.value = e;
            const a = new Hc(i, r)
                , o = e.minFilter;
            e.minFilter === Ko && (e.minFilter = Qo);
            return new Zc(1, 10, this).update(t, a),
                e.minFilter = o,
                a.geometry.dispose(),
                a.material.dispose(),
                this
        }
        clear(t, e, n, i) {
            const r = t.getRenderTarget();
            for (let r = 0; r < 6; r++)
                t.setRenderTarget(this, r),
                    t.clear(e, n, i);
            t.setRenderTarget(r)
        }
    }
    Qc.prototype.isWebGLCubeRenderTarget = !0;
    class Kc extends Cs {
        constructor(t, e, n, i, r, a, o, s, l, c, u, h) {
            super(null, a, o, s, l, c, i, r, u, h),
                this.image = {
                    data: t || null,
                    width: e || 1,
                    height: n || 1
                },
                this.magFilter = void 0 !== l ? l : Jo,
                this.minFilter = void 0 !== c ? c : Jo,
                this.generateMipmaps = !1,
                this.flipY = !1,
                this.unpackAlignment = 1,
                this.needsUpdate = !0
        }
    }
    Kc.prototype.isDataTexture = !0;
    const $c = new el
        , tu = new Fs;
    class eu {
        constructor(t = new Hl, e = new Hl, n = new Hl, i = new Hl, r = new Hl, a = new Hl) {
            this.planes = [t, e, n, i, r, a]
        }
        set(t, e, n, i, r, a) {
            const o = this.planes;
            return o[0].copy(t),
                o[1].copy(e),
                o[2].copy(n),
                o[3].copy(i),
                o[4].copy(r),
                o[5].copy(a),
                this
        }
        copy(t) {
            const e = this.planes;
            for (let n = 0; n < 6; n++)
                e[n].copy(t.planes[n]);
            return this
        }
        setFromProjectionMatrix(t) {
            const e = this.planes
                , n = t.elements
                , i = n[0]
                , r = n[1]
                , a = n[2]
                , o = n[3]
                , s = n[4]
                , l = n[5]
                , c = n[6]
                , u = n[7]
                , h = n[8]
                , d = n[9]
                , p = n[10]
                , f = n[11]
                , m = n[12]
                , g = n[13]
                , v = n[14]
                , _ = n[15];
            return e[0].setComponents(o - i, u - s, f - h, _ - m).normalize(),
                e[1].setComponents(o + i, u + s, f + h, _ + m).normalize(),
                e[2].setComponents(o + r, u + l, f + d, _ + g).normalize(),
                e[3].setComponents(o - r, u - l, f - d, _ - g).normalize(),
                e[4].setComponents(o - a, u - c, f - p, _ - v).normalize(),
                e[5].setComponents(o + a, u + c, f + p, _ + v).normalize(),
                this
        }
        intersectsObject(t) {
            const e = t.geometry;
            return null === e.boundingSphere && e.computeBoundingSphere(),
                $c.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),
                this.intersectsSphere($c)
        }
        intersectsSprite(t) {
            return $c.center.set(0, 0, 0),
                $c.radius = .7071067811865476,
                $c.applyMatrix4(t.matrixWorld),
                this.intersectsSphere($c)
        }
        intersectsSphere(t) {
            const e = this.planes
                , n = t.center
                , i = -t.radius;
            for (let t = 0; t < 6; t++) {
                if (e[t].distanceToPoint(n) < i)
                    return !1
            }
            return !0
        }
        intersectsBox(t) {
            const e = this.planes;
            for (let n = 0; n < 6; n++) {
                const i = e[n];
                if (tu.x = i.normal.x > 0 ? t.max.x : t.min.x,
                    tu.y = i.normal.y > 0 ? t.max.y : t.min.y,
                    tu.z = i.normal.z > 0 ? t.max.z : t.min.z,
                    i.distanceToPoint(tu) < 0)
                    return !1
            }
            return !0
        }
        containsPoint(t) {
            const e = this.planes;
            for (let n = 0; n < 6; n++)
                if (e[n].distanceToPoint(t) < 0)
                    return !1;
            return !0
        }
        clone() {
            return (new this.constructor).copy(this)
        }
    }
    function nu() {
        let t = null
            , e = !1
            , n = null
            , i = null;
        function r(e, a) {
            n(e, a),
                i = t.requestAnimationFrame(r)
        }
        return {
            start: function () {
                !0 !== e && null !== n && (i = t.requestAnimationFrame(r),
                    e = !0)
            },
            stop: function () {
                t.cancelAnimationFrame(i),
                    e = !1
            },
            setAnimationLoop: function (t) {
                n = t
            },
            setContext: function (e) {
                t = e
            }
        }
    }
    function iu(t, e) {
        const n = e.isWebGL2
            , i = new WeakMap;
        return {
            get: function (t) {
                return t.isInterleavedBufferAttribute && (t = t.data),
                    i.get(t)
            },
            remove: function (e) {
                e.isInterleavedBufferAttribute && (e = e.data);
                const n = i.get(e);
                n && (t.deleteBuffer(n.buffer),
                    i.delete(e))
            },
            update: function (e, r) {
                if (e.isGLBufferAttribute) {
                    const t = i.get(e);
                    return void ((!t || t.version < e.version) && i.set(e, {
                        buffer: e.buffer,
                        type: e.type,
                        bytesPerElement: e.elementSize,
                        version: e.version
                    }))
                }
                e.isInterleavedBufferAttribute && (e = e.data);
                const a = i.get(e);
                void 0 === a ? i.set(e, function (e, i) {
                    const r = e.array
                        , a = e.usage
                        , o = t.createBuffer();
                    t.bindBuffer(i, o),
                        t.bufferData(i, r, a),
                        e.onUploadCallback();
                    let s = 5126;
                    return r instanceof Float32Array ? s = 5126 : r instanceof Float64Array ? console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.") : r instanceof Uint16Array ? e.isFloat16BufferAttribute ? n ? s = 5131 : console.warn("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.") : s = 5123 : r instanceof Int16Array ? s = 5122 : r instanceof Uint32Array ? s = 5125 : r instanceof Int32Array ? s = 5124 : r instanceof Int8Array ? s = 5120 : r instanceof Uint8Array && (s = 5121),
                    {
                        buffer: o,
                        type: s,
                        bytesPerElement: r.BYTES_PER_ELEMENT,
                        version: e.version
                    }
                }(e, r)) : a.version < e.version && (!function (e, i, r) {
                    const a = i.array
                        , o = i.updateRange;
                    t.bindBuffer(r, e),
                        -1 === o.count ? t.bufferSubData(r, 0, a) : (n ? t.bufferSubData(r, o.offset * a.BYTES_PER_ELEMENT, a, o.offset, o.count) : t.bufferSubData(r, o.offset * a.BYTES_PER_ELEMENT, a.subarray(o.offset, o.offset + o.count)),
                            o.count = -1)
                }(a.buffer, e, r),
                    a.version = e.version)
            }
        }
    }
    class ru extends bc {
        constructor(t = 1, e = 1, n = 1, i = 1) {
            super(),
                this.type = "PlaneGeometry",
                this.parameters = {
                    width: t,
                    height: e,
                    widthSegments: n,
                    heightSegments: i
                };
            const r = t / 2
                , a = e / 2
                , o = Math.floor(n)
                , s = Math.floor(i)
                , l = o + 1
                , c = s + 1
                , u = t / o
                , h = e / s
                , d = []
                , p = []
                , f = []
                , m = [];
            for (let t = 0; t < c; t++) {
                const e = t * h - a;
                for (let n = 0; n < l; n++) {
                    const i = n * u - r;
                    p.push(i, -e, 0),
                        f.push(0, 0, 1),
                        m.push(n / o),
                        m.push(1 - t / s)
                }
            }
            for (let t = 0; t < s; t++)
                for (let e = 0; e < o; e++) {
                    const n = e + l * t
                        , i = e + l * (t + 1)
                        , r = e + 1 + l * (t + 1)
                        , a = e + 1 + l * t;
                    d.push(n, i, a),
                        d.push(i, r, a)
                }
            this.setIndex(d),
                this.setAttribute("position", new dc(p, 3)),
                this.setAttribute("normal", new dc(f, 3)),
                this.setAttribute("uv", new dc(m, 2))
        }
    }
    const au = {
        alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
        alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
        alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
        aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( STANDARD )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
        aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
        begin_vertex: "vec3 transformed = vec3( position );",
        beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
        bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + viewDir );\n\tfloat dotNL = saturate( dot( normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tfloat dotNH = saturate( dot( normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( normal, viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}\n#if defined( USE_SHEEN )\nfloat D_Charlie(float roughness, float NoH) {\n\tfloat invAlpha = 1.0 / roughness;\n\tfloat cos2h = NoH * NoH;\n\tfloat sin2h = max(1.0 - cos2h, 0.0078125);\treturn (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);\n}\nfloat V_Neubelt(float NoV, float NoL) {\n\treturn saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));\n}\nvec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {\n\tvec3 N = geometry.normal;\n\tvec3 V = geometry.viewDir;\n\tvec3 H = normalize( V + L );\n\tfloat dotNH = saturate( dot( N, H ) );\n\treturn specularColor * D_Charlie( roughness, dotNH