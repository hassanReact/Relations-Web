! function() {
    "use strict";

    function t() {
        t = function() {
            return e
        };
        var e = {},
            r = Object.prototype,
            n = r.hasOwnProperty,
            o = "function" == typeof Symbol ? Symbol : {},
            i = o.iterator || "@@iterator",
            a = o.asyncIterator || "@@asyncIterator",
            c = o.toStringTag || "@@toStringTag";

        function u(t, e, r) {
            return Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), t[e]
        }
        try {
            u({}, "")
        } catch (t) {
            u = function(t, e, r) {
                return t[e] = r
            }
        }

        function l(t, e, r, n) {
            var o = e && e.prototype instanceof p ? e : p,
                i = Object.create(o.prototype),
                a = new I(n || []);
            return i._invoke = function(t, e, r) {
                var n = "suspendedStart";
                return function(o, i) {
                    if ("executing" === n) throw new Error("Generator is already running");
                    if ("completed" === n) {
                        if ("throw" === o) throw i;
                        return T()
                    }
                    for (r.method = o, r.arg = i;;) {
                        var a = r.delegate;
                        if (a) {
                            var c = g(a, r);
                            if (c) {
                                if (c === s) continue;
                                return c
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if ("suspendedStart" === n) throw n = "completed", r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        n = "executing";
                        var u = f(t, e, r);
                        if ("normal" === u.type) {
                            if (n = r.done ? "completed" : "suspendedYield", u.arg === s) continue;
                            return {
                                value: u.arg,
                                done: r.done
                            }
                        }
                        "throw" === u.type && (n = "completed", r.method = "throw", r.arg = u.arg)
                    }
                }
            }(t, r, a), i
        }

        function f(t, e, r) {
            try {
                return {
                    type: "normal",
                    arg: t.call(e, r)
                }
            } catch (t) {
                return {
                    type: "throw",
                    arg: t
                }
            }
        }
        e.wrap = l;
        var s = {};

        function p() {}

        function h() {}

        function y() {}
        var d = {};
        u(d, i, (function() {
            return this
        }));
        var _ = Object.getPrototypeOf,
            v = _ && _(_(S([])));
        v && v !== r && n.call(v, i) && (d = v);
        var m = y.prototype = p.prototype = Object.create(d);

        function b(t) {
            ["next", "throw", "return"].forEach((function(e) {
                u(t, e, (function(t) {
                    return this._invoke(e, t)
                }))
            }))
        }

        function w(t, e) {
            function r(o, i, a, c) {
                var u = f(t[o], t, i);
                if ("throw" !== u.type) {
                    var l = u.arg,
                        s = l.value;
                    return s && "object" == typeof s && n.call(s, "__await") ? e.resolve(s.__await).then((function(t) {
                        r("next", t, a, c)
                    }), (function(t) {
                        r("throw", t, a, c)
                    })) : e.resolve(s).then((function(t) {
                        l.value = t, a(l)
                    }), (function(t) {
                        return r("throw", t, a, c)
                    }))
                }
                c(u.arg)
            }
            var o;
            this._invoke = function(t, n) {
                function i() {
                    return new e((function(e, o) {
                        r(t, n, e, o)
                    }))
                }
                return o = o ? o.then(i, i) : i()
            }
        }

        function g(t, e) {
            var r = t.iterator[e.method];
            if (void 0 === r) {
                if (e.delegate = null, "throw" === e.method) {
                    if (t.iterator.return && (e.method = "return", e.arg = void 0, g(t, e), "throw" === e.method)) return s;
                    e.method = "throw", e.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return s
            }
            var n = f(r, t.iterator, e.arg);
            if ("throw" === n.type) return e.method = "throw", e.arg = n.arg, e.delegate = null, s;
            var o = n.arg;
            return o ? o.done ? (e[t.resultName] = o.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, s) : o : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, s)
        }

        function O(t) {
            var e = {
                tryLoc: t[0]
            };
            1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
        }

        function E(t) {
            var e = t.completion || {};
            e.type = "normal", delete e.arg, t.completion = e
        }

        function I(t) {
            this.tryEntries = [{
                tryLoc: "root"
            }], t.forEach(O, this), this.reset(!0)
        }

        function S(t) {
            if (t) {
                var e = t[i];
                if (e) return e.call(t);
                if ("function" == typeof t.next) return t;
                if (!isNaN(t.length)) {
                    var r = -1,
                        o = function e() {
                            for (; ++r < t.length;)
                                if (n.call(t, r)) return e.value = t[r], e.done = !1, e;
                            return e.value = void 0, e.done = !0, e
                        };
                    return o.next = o
                }
            }
            return {
                next: T
            }
        }

        function T() {
            return {
                value: void 0,
                done: !0
            }
        }
        return h.prototype = y, u(m, "constructor", y), u(y, "constructor", h), h.displayName = u(y, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
            var e = "function" == typeof t && t.constructor;
            return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
        }, e.mark = function(t) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(t, y) : (t.__proto__ = y, u(t, c, "GeneratorFunction")), t.prototype = Object.create(m), t
        }, e.awrap = function(t) {
            return {
                __await: t
            }
        }, b(w.prototype), u(w.prototype, a, (function() {
            return this
        })), e.AsyncIterator = w, e.async = function(t, r, n, o, i) {
            void 0 === i && (i = Promise);
            var a = new w(l(t, r, n, o), i);
            return e.isGeneratorFunction(r) ? a : a.next().then((function(t) {
                return t.done ? t.value : a.next()
            }))
        }, b(m), u(m, c, "Generator"), u(m, i, (function() {
            return this
        })), u(m, "toString", (function() {
            return "[object Generator]"
        })), e.keys = function(t) {
            var e = [];
            for (var r in t) e.push(r);
            return e.reverse(),
                function r() {
                    for (; e.length;) {
                        var n = e.pop();
                        if (n in t) return r.value = n, r.done = !1, r
                    }
                    return r.done = !0, r
                }
        }, e.values = S, I.prototype = {
            constructor: I,
            reset: function(t) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(E), !t)
                    for (var e in this) "t" === e.charAt(0) && n.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
            },
            stop: function() {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval
            },
            dispatchException: function(t) {
                if (this.done) throw t;
                var e = this;

                function r(r, n) {
                    return a.type = "throw", a.arg = t, e.next = r, n && (e.method = "next", e.arg = void 0), !!n
                }
                for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                    var i = this.tryEntries[o],
                        a = i.completion;
                    if ("root" === i.tryLoc) return r("end");
                    if (i.tryLoc <= this.prev) {
                        var c = n.call(i, "catchLoc"),
                            u = n.call(i, "finallyLoc");
                        if (c && u) {
                            if (this.prev < i.catchLoc) return r(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                        } else if (c) {
                            if (this.prev < i.catchLoc) return r(i.catchLoc, !0)
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return r(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(t, e) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                    var o = this.tryEntries[r];
                    if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                        var i = o;
                        break
                    }
                }
                i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, s) : this.complete(a)
            },
            complete: function(t, e) {
                if ("throw" === t.type) throw t.arg;
                return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), s
            },
            finish: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), E(r), s
                }
            },
            catch: function(t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                    var r = this.tryEntries[e];
                    if (r.tryLoc === t) {
                        var n = r.completion;
                        if ("throw" === n.type) {
                            var o = n.arg;
                            E(r)
                        }
                        return o
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(t, e, r) {
                return this.delegate = {
                    iterator: S(t),
                    resultName: e,
                    nextLoc: r
                }, "next" === this.method && (this.arg = void 0), s
            }
        }, e
    }

    function e(t) {
        return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, e(t)
    }

    function r(t, e) {
        return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t
        }, r(t, e)
    }

    function n() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (t) {
            return !1
        }
    }

    function o(t, e, i) {
        return o = n() ? Reflect.construct.bind() : function(t, e, n) {
            var o = [null];
            o.push.apply(o, e);
            var i = new(Function.bind.apply(t, o));
            return n && r(i, n.prototype), i
        }, o.apply(null, arguments)
    }

    function i(t) {
        return function(t) {
            if (Array.isArray(t)) return a(t)
        }(t) || function(t) {
            if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
        }(t) || function(t, e) {
            if (!t) return;
            if ("string" == typeof t) return a(t, e);
            var r = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === r && t.constructor && (r = t.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(t);
            if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return a(t, e)
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
        return n
    }
    var c, u;
    ! function(t) {
        t.MUSICAL_LY = "musical_ly", t.MUSICALLY_GO = "musically_go", t.TRILL = "trill", t.ULTRALITE = "ultralite"
    }(c || (c = {})),
    function(t) {
        t.LOAD_START = "load_start", t.LOAD_END = "load_end", t.BEFORE_INIT = "before_init", t.INIT_START = "init_start", t.INIT_END = "init_end", t.JSB_INIT_START = "jsb_init_start", t.JSB_INIT_END = "jsb_init_end", t.BEFORE_AD_INFO_INIT_START = "before_ad_info_init_start", t.AD_INFO_INIT_START = "ad_info_init_start", t.AD_INFO_INIT_END = "ad_info_init_end", t.IDENTIFY_INIT_START = "identify_init_start", t.IDENTIFY_INIT_END = "identify_init_end", t.PLUGIN_INIT_START = "_init_start", t.PLUGIN_INIT_END = "_init_end", t.PIXEL_SEND = "pixel_send", t.PIXEL_SEND_PCM = "pixel_send_PCM", t.JSB_SEND = "jsb_send", t.HTTP_SEND = "http_send", t.HANDLE_CACHE = "handle_cache", t.INIT_ERROR = "init_error", t.PIXEL_EMPTY = "pixel_empty", t.JSB_ERROR = "jsb_error", t.API_ERROR = "api_error", t.PLUGIN_ERROR = "plugin_error", t.CUSTOM_INFO = "custom_info", t.CUSTOM_ERROR = "custom_error", t.CUSTOM_TIMER = "custom_timer"
    }(u || (u = {}));
    var l = function() {
            return "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : new Function("return this")()
        },
        f = function() {
            return l().TiktokAnalyticsObject || "ttq"
        },
        s = function() {
            return l()[f()]
        },
        p = function(t) {
            try {
                var e = s()._plugins || {};
                return null == e[t] || !!e[t]
            } catch (t) {
                return !0
            }
        },
        h = {
            info: [],
            error: []
        };
    try {
        ! function() {
            if (/function bind\(\) \{[\s\S]*\[native code\][\s\S]*\}/.test(Function.prototype.bind.toString())) return !0;

            function t() {}
            return new(t.bind.apply(t, [void 0, 1])) instanceof t
        }() || Function.prototype._ttq_bind ? Function.prototype._ttq_bind || Object.defineProperty(Function.prototype, "_ttq_bind", {
                value: function(t) {
                    if ("function" != typeof this) throw new TypeError("What is being called by bind is not a function.");
                    var e = t || window,
                        r = Array.prototype.slice.call(arguments).slice(1),
                        n = Symbol("key");
                    return e[n] = this,
                        function t() {
                            return this instanceof t ? o(e[n], i(r).concat(Array.prototype.slice.call(arguments))) : e[n].apply(e, i(r).concat(Array.prototype.slice.call(arguments)))
                        }
                },
                enumerable: !1,
                writable: !1,
                configurable: !1
            }) : Object.defineProperty(Function.prototype, "_ttq_bind", {
                value: Function.prototype.bind,
                enumerable: !1,
                writable: !1,
                configurable: !1
            }), Object._ttq_keys || (Object._ttq_keys = function(t) {
                try {
                    return Array.isArray(t) ? Object.keys(t).filter((function(t) {
                        return -1 === ["each", "eachSlice", "all", "any", "collect", "detect", "findAll", "grep", "include", "inGroupsOf", "inject", "invoke", "max", "min", "partition", "pluck", "reject", "sortBy", "toArray", "zip", "size", "inspect", "select", "member", "_reverse", "_each", "clear", "first", "last", "compact", "flatten", "without", "uniq", "intersect", "clone", "toJSON", "remove", "swap", "putAll"].indexOf(t)
                    })) : Object.keys(t)
                } catch (e) {
                    return Object.keys(t)
                }
            }),
            function() {
                var e = f();

                function r(t) {
                    return null === t ? "NULL" : void 0 === t ? "UNDEFINED" : "[object Object]" === Object.prototype.toString.call(t) || "[object Array]" === Object.prototype.toString.call(t) ? JSON.stringify(t) : t.toString()
                }
                /function Map\(\) \{[\s\S]*\[native code\][\s\S]*\}/.test(Map.toString()) ? window[e]._ttq_map = Map : window[e]._ttq_map || (window[e]._ttq_map = function() {
                    this.items = {}, this.size = 0
                }, window[e]._ttq_map.prototype.set = function(t, e) {
                    return this.has(t) || (this.items[r(t)] = e, this.size++), this
                }, window[e]._ttq_map.prototype.get = function(t) {
                    return this.items[r(t)]
                }, window[e]._ttq_map.prototype.has = function(t) {
                    return void 0 !== this.items[r(t)]
                }, window[e]._ttq_map.prototype.delete = function(t) {
                    return this.has(t) && (delete this.items[r(t)], this.size--), this
                }, window[e]._ttq_map.prototype.clear = function() {
                    this.items = {}, this.size = 0
                }, window[e]._ttq_map.prototype.keys = function() {
                    var e = t().mark(o),
                        r = [];
                    for (var n in this.items) this.has(n) && r.push(n);

                    function o() {
                        return t().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.delegateYield(r, "t0", 1);
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), e)
                    }
                    return o()
                }, window[e]._ttq_map.prototype.values = function() {
                    var e = t().mark(o),
                        r = [];
                    for (var n in this.items) this.has(n) && r.push(this.items[n]);

                    function o() {
                        return t().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.delegateYield(r, "t0", 1);
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), e)
                    }
                    return o()
                })
            }(), /function create\(\) \{[\s\S]*\[native code\][\s\S]*\}/.test(Map.toString()) ? Object._ttq_create = Object.create : Object._ttq_create = function() {
                function t() {}
                var r = Object.prototype.hasOwnProperty;
                return function(n, o) {
                    if ("object" !== e(n) && "function" != typeof n) throw new TypeError("Object prototype may only be an Object or null");
                    t.prototype = n;
                    var i = new t;
                    return t.prototype = null, null != o && Object.keys(o).forEach((function(t) {
                        var n = o[t];
                        if ("object" !== e(n) || null === n) throw new TypeError("Property description must be an object: " + n);
                        r.call(n, "value") ? i[t] = n.value : "function" != typeof n.get && "function" != typeof n.set || Object.defineProperty(i, t, n)
                    })), i
                }
            }()
    } catch (t) {
        ! function(t, e) {
            var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
            try {
                var o = s(),
                    i = o.getPlugin && o.getPlugin("Monitor") || null;
                i && i.error && "function" == typeof i.error ? i.error.call(i, t, e, r, n) : p("Monitor") && h.error.push({
                    event: t,
                    err: e,
                    detail: r,
                    withoutJSB: n
                })
            } catch (t) {}
        }(u.INIT_ERROR, t)
    }
}();
! function() {
    "use strict";

    function e() {
        e = function() {
            return t
        };
        var t = {},
            n = Object.prototype,
            r = n.hasOwnProperty,
            i = "function" == typeof Symbol ? Symbol : {},
            o = i.iterator || "@@iterator",
            a = i.asyncIterator || "@@asyncIterator",
            c = i.toStringTag || "@@toStringTag";

        function u(e, t, n) {
            return Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }), e[t]
        }
        try {
            u({}, "")
        } catch (e) {
            u = function(e, t, n) {
                return e[t] = n
            }
        }

        function s(e, t, n, r) {
            var i = t && t.prototype instanceof d ? t : d,
                o = Object._ttq_create(i.prototype),
                a = new T(r || []);
            return o._invoke = function(e, t, n) {
                var r = "suspendedStart";
                return function(i, o) {
                    if ("executing" === r) throw new Error("Generator is already running");
                    if ("completed" === r) {
                        if ("throw" === i) throw o;
                        return S()
                    }
                    for (n.method = i, n.arg = o;;) {
                        var a = n.delegate;
                        if (a) {
                            var c = b(a, n);
                            if (c) {
                                if (c === f) continue;
                                return c
                            }
                        }
                        if ("next" === n.method) n.sent = n._sent = n.arg;
                        else if ("throw" === n.method) {
                            if ("suspendedStart" === r) throw r = "completed", n.arg;
                            n.dispatchException(n.arg)
                        } else "return" === n.method && n.abrupt("return", n.arg);
                        r = "executing";
                        var u = l(e, t, n);
                        if ("normal" === u.type) {
                            if (r = n.done ? "completed" : "suspendedYield", u.arg === f) continue;
                            return {
                                value: u.arg,
                                done: n.done
                            }
                        }
                        "throw" === u.type && (r = "completed", n.method = "throw", n.arg = u.arg)
                    }
                }
            }(e, n, a), o
        }

        function l(e, t, n) {
            try {
                return {
                    type: "normal",
                    arg: e.call(t, n)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        t.wrap = s;
        var f = {};

        function d() {}

        function p() {}

        function h() {}
        var _ = {};
        u(_, o, (function() {
            return this
        }));
        var v = Object.getPrototypeOf,
            g = v && v(v(O([])));
        g && g !== n && r.call(g, o) && (_ = g);
        var y = h.prototype = d.prototype = Object._ttq_create(_);

        function m(e) {
            ["next", "throw", "return"].forEach((function(t) {
                u(e, t, (function(e) {
                    return this._invoke(t, e)
                }))
            }))
        }

        function E(e, t) {
            function n(i, o, a, c) {
                var u = l(e[i], e, o);
                if ("throw" !== u.type) {
                    var s = u.arg,
                        f = s.value;
                    return f && "object" == typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                        n("next", e, a, c)
                    }), (function(e) {
                        n("throw", e, a, c)
                    })) : t.resolve(f).then((function(e) {
                        s.value = e, a(s)
                    }), (function(e) {
                        return n("throw", e, a, c)
                    }))
                }
                c(u.arg)
            }
            var i;
            this._invoke = function(e, r) {
                function o() {
                    return new t((function(t, i) {
                        n(e, r, t, i)
                    }))
                }
                return i = i ? i.then(o, o) : o()
            }
        }

        function b(e, t) {
            var n = e.iterator[t.method];
            if (void 0 === n) {
                if (t.delegate = null, "throw" === t.method) {
                    if (e.iterator.return && (t.method = "return", t.arg = void 0, b(e, t), "throw" === t.method)) return f;
                    t.method = "throw", t.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return f
            }
            var r = l(n, e.iterator, t.arg);
            if ("throw" === r.type) return t.method = "throw", t.arg = r.arg, t.delegate = null, f;
            var i = r.arg;
            return i ? i.done ? (t[e.resultName] = i.value, t.next = e.nextLoc, "return" !== t.method && (t.method = "next", t.arg = void 0), t.delegate = null, f) : i : (t.method = "throw", t.arg = new TypeError("iterator result is not an object"), t.delegate = null, f)
        }

        function w(e) {
            var t = {
                tryLoc: e[0]
            };
            1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
        }

        function I(e) {
            var t = e.completion || {};
            t.type = "normal", delete t.arg, e.completion = t
        }

        function T(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(w, this), this.reset(!0)
        }

        function O(e) {
            if (e) {
                var t = e[o];
                if (t) return t.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var n = -1,
                        i = function t() {
                            for (; ++n < e.length;)
                                if (r.call(e, n)) return t.value = e[n], t.done = !1, t;
                            return t.value = void 0, t.done = !0, t
                        };
                    return i.next = i
                }
            }
            return {
                next: S
            }
        }

        function S() {
            return {
                value: void 0,
                done: !0
            }
        }
        return p.prototype = h, u(y, "constructor", h), u(h, "constructor", p), p.displayName = u(h, c, "GeneratorFunction"), t.isGeneratorFunction = function(e) {
            var t = "function" == typeof e && e.constructor;
            return !!t && (t === p || "GeneratorFunction" === (t.displayName || t.name))
        }, t.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, u(e, c, "GeneratorFunction")), e.prototype = Object._ttq_create(y), e
        }, t.awrap = function(e) {
            return {
                __await: e
            }
        }, m(E.prototype), u(E.prototype, a, (function() {
            return this
        })), t.AsyncIterator = E, t.async = function(e, n, r, i, o) {
            void 0 === o && (o = Promise);
            var a = new E(s(e, n, r, i), o);
            return t.isGeneratorFunction(n) ? a : a.next().then((function(e) {
                return e.done ? e.value : a.next()
            }))
        }, m(y), u(y, c, "Generator"), u(y, o, (function() {
            return this
        })), u(y, "toString", (function() {
            return "[object Generator]"
        })), t.keys = function(e) {
            var t = [];
            for (var n in e) t.push(n);
            return t.reverse(),
                function n() {
                    for (; t.length;) {
                        var r = t.pop();
                        if (r in e) return n.value = r, n.done = !1, n
                    }
                    return n.done = !0, n
                }
        }, t.values = O, T.prototype = {
            constructor: T,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(I), !e)
                    for (var t in this) "t" === t.charAt(0) && r.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function(e) {
                if (this.done) throw e;
                var t = this;

                function n(n, r) {
                    return a.type = "throw", a.arg = e, t.next = n, r && (t.method = "next", t.arg = void 0), !!r
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                    var o = this.tryEntries[i],
                        a = o.completion;
                    if ("root" === o.tryLoc) return n("end");
                    if (o.tryLoc <= this.prev) {
                        var c = r.call(o, "catchLoc"),
                            u = r.call(o, "finallyLoc");
                        if (c && u) {
                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                            if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                        } else if (c) {
                            if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                        } else {
                            if (!u) throw new Error("try statement without catch or finally");
                            if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var i = this.tryEntries[n];
                    if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                        var o = i;
                        break
                    }
                }
                o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc && (o = null);
                var a = o ? o.completion : {};
                return a.type = e, a.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, f) : this.complete(a)
            },
            complete: function(e, t) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), f
            },
            finish: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), I(n), f
                }
            },
            catch: function(e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var n = this.tryEntries[t];
                    if (n.tryLoc === e) {
                        var r = n.completion;
                        if ("throw" === r.type) {
                            var i = r.arg;
                            I(n)
                        }
                        return i
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, t, n) {
                return this.delegate = {
                    iterator: O(e),
                    resultName: t,
                    nextLoc: n
                }, "next" === this.method && (this.arg = void 0), f
            }
        }, t
    }

    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, t(e)
    }

    function n(e, t, n, r, i, o, a) {
        try {
            var c = e[o](a),
                u = c.value
        } catch (e) {
            return void n(e)
        }
        c.done ? t(u) : Promise.resolve(u).then(r, i)
    }

    function r(e) {
        return function() {
            var t = this,
                r = arguments;
            return new Promise((function(i, o) {
                var a = e.apply(t, r);

                function c(e) {
                    n(a, i, o, c, u, "next", e)
                }

                function u(e) {
                    n(a, i, o, c, u, "throw", e)
                }
                c(void 0)
            }))
        }
    }

    function i(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function c(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function u(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object._ttq_create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), Object.defineProperty(e, "prototype", {
            writable: !1
        }), t && l(e, t)
    }

    function s(e) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        }, s(e)
    }

    function l(e, t) {
        return l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
            return e.__proto__ = t, e
        }, l(e, t)
    }

    function f(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function d(e, t) {
        if (t && ("object" == typeof t || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return f(e)
    }

    function p(e) {
        var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }();
        return function() {
            var n, r = s(e);
            if (t) {
                var i = s(this).constructor;
                n = Reflect.construct(r, arguments, i)
            } else n = r.apply(this, arguments);
            return d(this, n)
        }
    }

    function h(e, t) {
        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = s(e)););
        return e
    }

    function _() {
        return _ = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(e, t, n) {
            var r = h(e, t);
            if (r) {
                var i = Object.getOwnPropertyDescriptor(r, t);
                return i.get ? i.get.call(arguments.length < 3 ? e : n) : i.value
            }
        }, _.apply(this, arguments)
    }

    function v(e, t) {
        return m(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null == n) return;
            var r, i, o = [],
                a = !0,
                c = !1;
            try {
                for (n = n.call(e); !(a = (r = n.next()).done) && (o.push(r.value), !t || o.length !== t); a = !0);
            } catch (e) {
                c = !0, i = e
            } finally {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
            return o
        }(e, t) || b(e, t) || I()
    }

    function g(e) {
        return m(e) || E(e) || b(e) || I()
    }

    function y(e) {
        return function(e) {
            if (Array.isArray(e)) return w(e)
        }(e) || E(e) || b(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function m(e) {
        if (Array.isArray(e)) return e
    }

    function E(e) {
        if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
    }

    function b(e, t) {
        if (e) {
            if ("string" == typeof e) return w(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? w(e, t) : void 0
        }
    }

    function w(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function I() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }

    function T(e, t) {
        var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!n) {
            if (Array.isArray(e) || (n = b(e)) || t && e && "number" == typeof e.length) {
                n && (e = n);
                var r = 0,
                    i = function() {};
                return {
                    s: i,
                    n: function() {
                        return r >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[r++]
                        }
                    },
                    e: function(e) {
                        throw e
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, a = !0,
            c = !1;
        return {
            s: function() {
                n = n.call(e)
            },
            n: function() {
                var e = n.next();
                return a = e.done, e
            },
            e: function(e) {
                c = !0, o = e
            },
            f: function() {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw o
                }
            }
        }
    }
    var O, S = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
    ! function(e) {
        ! function(t) {
            var n = "object" == typeof S ? S : "object" == typeof self ? self : "object" == typeof this ? this : Function("return this;")(),
                r = i(e);

            function i(e, t) {
                return function(n, r) {
                    "function" != typeof e[n] && Object.defineProperty(e, n, {
                        configurable: !0,
                        writable: !0,
                        value: r
                    }), t && t(n, r)
                }
            }
            void 0 === n.Reflect ? n.Reflect = e : r = i(n.Reflect, r),
                function(e) {
                    var t = Object.prototype.hasOwnProperty,
                        n = "function" == typeof Symbol,
                        r = n && void 0 !== Symbol.toPrimitive ? Symbol.toPrimitive : "@@toPrimitive",
                        i = n && void 0 !== Symbol.iterator ? Symbol.iterator : "@@iterator",
                        o = "function" == typeof Object.create,
                        a = {
                            __proto__: []
                        }
                    instanceof Array, c = !o && !a, u = {
                        create: o ? function() {
                            return re(Object._ttq_create(null))
                        } : a ? function() {
                            return re({
                                __proto__: null
                            })
                        } : function() {
                            return re({})
                        },
                        has: c ? function(e, n) {
                            return t.call(e, n)
                        } : function(e, t) {
                            return t in e
                        },
                        get: c ? function(e, n) {
                            return t.call(e, n) ? e[n] : void 0
                        } : function(e, t) {
                            return e[t]
                        }
                    }, s = Object.getPrototypeOf(Function), l = "object" == typeof process && process.env && "true" === process.env.REFLECT_METADATA_USE_MAP_POLYFILL, f = l || "function" != typeof Map || "function" != typeof Map.prototype.entries ? ee() : Map, d = l || "function" != typeof Set || "function" != typeof Set.prototype.entries ? te() : Set, p = new(l || "function" != typeof WeakMap ? ne() : WeakMap);

                    function h(e, t, n, r) {
                        if (D(n)) {
                            if (!H(e)) throw new TypeError;
                            if (!W(t)) throw new TypeError;
                            return T(e, t)
                        }
                        if (!H(e)) throw new TypeError;
                        if (!U(t)) throw new TypeError;
                        if (!U(r) && !D(r) && !x(r)) throw new TypeError;
                        return x(r) && (r = void 0), O(e, t, n = V(n), r)
                    }

                    function _(e, t) {
                        function n(n, r) {
                            if (!U(n)) throw new TypeError;
                            if (!D(r) && !K(r)) throw new TypeError;
                            C(e, t, n, r)
                        }
                        return n
                    }

                    function v(e, t, n, r) {
                        if (!U(n)) throw new TypeError;
                        return D(r) || (r = V(r)), C(e, t, n, r)
                    }

                    function g(e, t, n) {
                        if (!U(t)) throw new TypeError;
                        return D(n) || (n = V(n)), N(e, t, n)
                    }

                    function y(e, t, n) {
                        if (!U(t)) throw new TypeError;
                        return D(n) || (n = V(n)), A(e, t, n)
                    }

                    function m(e, t, n) {
                        if (!U(t)) throw new TypeError;
                        return D(n) || (n = V(n)), R(e, t, n)
                    }

                    function E(e, t, n) {
                        if (!U(t)) throw new TypeError;
                        return D(n) || (n = V(n)), P(e, t, n)
                    }

                    function b(e, t) {
                        if (!U(e)) throw new TypeError;
                        return D(t) || (t = V(t)), k(e, t)
                    }

                    function w(e, t) {
                        if (!U(e)) throw new TypeError;
                        return D(t) || (t = V(t)), M(e, t)
                    }

                    function I(e, t, n) {
                        if (!U(t)) throw new TypeError;
                        D(n) || (n = V(n));
                        var r = S(t, n, !1);
                        if (D(r)) return !1;
                        if (!r.delete(e)) return !1;
                        if (r.size > 0) return !0;
                        var i = p.get(t);
                        return i.delete(n), i.size > 0 || p.delete(t), !0
                    }

                    function T(e, t) {
                        for (var n = e.length - 1; n >= 0; --n) {
                            var r = (0, e[n])(t);
                            if (!D(r) && !x(r)) {
                                if (!W(r)) throw new TypeError;
                                t = r
                            }
                        }
                        return t
                    }

                    function O(e, t, n, r) {
                        for (var i = e.length - 1; i >= 0; --i) {
                            var o = (0, e[i])(t, n, r);
                            if (!D(o) && !x(o)) {
                                if (!U(o)) throw new TypeError;
                                r = o
                            }
                        }
                        return r
                    }

                    function S(e, t, n) {
                        var r = p.get(e);
                        if (D(r)) {
                            if (!n) return;
                            r = new f, p.set(e, r)
                        }
                        var i = r.get(t);
                        if (D(i)) {
                            if (!n) return;
                            i = new f, r.set(t, i)
                        }
                        return i
                    }

                    function N(e, t, n) {
                        if (A(e, t, n)) return !0;
                        var r = $(t);
                        return !x(r) && N(e, r, n)
                    }

                    function A(e, t, n) {
                        var r = S(t, n, !1);
                        return !D(r) && q(r.has(e))
                    }

                    function R(e, t, n) {
                        if (A(e, t, n)) return P(e, t, n);
                        var r = $(t);
                        return x(r) ? void 0 : R(e, r, n)
                    }

                    function P(e, t, n) {
                        var r = S(t, n, !1);
                        if (!D(r)) return r.get(e)
                    }

                    function C(e, t, n, r) {
                        S(n, r, !0).set(e, t)
                    }

                    function k(e, t) {
                        var n = M(e, t),
                            r = $(e);
                        if (null === r) return n;
                        var i = k(r, t);
                        if (i.length <= 0) return n;
                        if (n.length <= 0) return i;
                        for (var o = new d, a = [], c = 0, u = n; c < u.length; c++) {
                            var s = u[c];
                            o.has(s) || (o.add(s), a.push(s))
                        }
                        for (var l = 0, f = i; l < f.length; l++) {
                            s = f[l];
                            o.has(s) || (o.add(s), a.push(s))
                        }
                        return a
                    }

                    function M(e, t) {
                        var n = [],
                            r = S(e, t, !1);
                        if (D(r)) return n;
                        for (var i = X(r.keys()), o = 0;;) {
                            var a = Q(i);
                            if (!a) return n.length = o, n;
                            var c = z(a);
                            try {
                                n[o] = c
                            } catch (e) {
                                try {
                                    Z(i)
                                } finally {
                                    throw e
                                }
                            }
                            o++
                        }
                    }

                    function L(e) {
                        if (null === e) return 1;
                        switch (typeof e) {
                            case "undefined":
                                return 0;
                            case "boolean":
                                return 2;
                            case "string":
                                return 3;
                            case "symbol":
                                return 4;
                            case "number":
                                return 5;
                            case "object":
                                return null === e ? 1 : 6;
                            default:
                                return 6
                        }
                    }

                    function D(e) {
                        return void 0 === e
                    }

                    function x(e) {
                        return null === e
                    }

                    function j(e) {
                        return "symbol" == typeof e
                    }

                    function U(e) {
                        return "object" == typeof e ? null !== e : "function" == typeof e
                    }

                    function F(e, t) {
                        switch (L(e)) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                                return e
                        }
                        var n = 3 === t ? "string" : 5 === t ? "number" : "default",
                            i = Y(e, r);
                        if (void 0 !== i) {
                            var o = i.call(e, n);
                            if (U(o)) throw new TypeError;
                            return o
                        }
                        return B(e, "default" === n ? "number" : n)
                    }

                    function B(e, t) {
                        if ("string" === t) {
                            var n = e.toString;
                            if (J(n))
                                if (!U(i = n.call(e))) return i;
                            if (J(r = e.valueOf))
                                if (!U(i = r.call(e))) return i
                        } else {
                            var r;
                            if (J(r = e.valueOf))
                                if (!U(i = r.call(e))) return i;
                            var i, o = e.toString;
                            if (J(o))
                                if (!U(i = o.call(e))) return i
                        }
                        throw new TypeError
                    }

                    function q(e) {
                        return !!e
                    }

                    function G(e) {
                        return "" + e
                    }

                    function V(e) {
                        var t = F(e, 3);
                        return j(t) ? t : G(t)
                    }

                    function H(e) {
                        return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : "[object Array]" === Object.prototype.toString.call(e)
                    }

                    function J(e) {
                        return "function" == typeof e
                    }

                    function W(e) {
                        return "function" == typeof e
                    }

                    function K(e) {
                        switch (L(e)) {
                            case 3:
                            case 4:
                                return !0;
                            default:
                                return !1
                        }
                    }

                    function Y(e, t) {
                        var n = e[t];
                        if (null != n) {
                            if (!J(n)) throw new TypeError;
                            return n
                        }
                    }

                    function X(e) {
                        var t = Y(e, i);
                        if (!J(t)) throw new TypeError;
                        var n = t.call(e);
                        if (!U(n)) throw new TypeError;
                        return n
                    }

                    function z(e) {
                        return e.value
                    }

                    function Q(e) {
                        var t = e.next();
                        return !t.done && t
                    }

                    function Z(e) {
                        var t = e.return;
                        t && t.call(e)
                    }

                    function $(e) {
                        var t = Object.getPrototypeOf(e);
                        if ("function" != typeof e || e === s) return t;
                        if (t !== s) return t;
                        var n = e.prototype,
                            r = n && Object.getPrototypeOf(n);
                        if (null == r || r === Object.prototype) return t;
                        var i = r.constructor;
                        return "function" != typeof i || i === e ? t : i
                    }

                    function ee() {
                        var e = {},
                            t = [],
                            n = function() {
                                function e(e, t, n) {
                                    this._index = 0, this._keys = e, this._values = t, this._selector = n
                                }
                                return e.prototype["@@iterator"] = function() {
                                    return this
                                }, e.prototype[i] = function() {
                                    return this
                                }, e.prototype.next = function() {
                                    var e = this._index;
                                    if (e >= 0 && e < this._keys.length) {
                                        var n = this._selector(this._keys[e], this._values[e]);
                                        return e + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, {
                                            value: n,
                                            done: !1
                                        }
                                    }
                                    return {
                                        value: void 0,
                                        done: !0
                                    }
                                }, e.prototype.throw = function(e) {
                                    throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), e
                                }, e.prototype.return = function(e) {
                                    return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), {
                                        value: e,
                                        done: !0
                                    }
                                }, e
                            }();
                        return function() {
                            function t() {
                                this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2
                            }
                            return Object.defineProperty(t.prototype, "size", {
                                get: function() {
                                    return this._keys.length
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.has = function(e) {
                                return this._find(e, !1) >= 0
                            }, t.prototype.get = function(e) {
                                var t = this._find(e, !1);
                                return t >= 0 ? this._values[t] : void 0
                            }, t.prototype.set = function(e, t) {
                                var n = this._find(e, !0);
                                return this._values[n] = t, this
                            }, t.prototype.delete = function(t) {
                                var n = this._find(t, !1);
                                if (n >= 0) {
                                    for (var r = this._keys.length, i = n + 1; i < r; i++) this._keys[i - 1] = this._keys[i], this._values[i - 1] = this._values[i];
                                    return this._keys.length--, this._values.length--, t === this._cacheKey && (this._cacheKey = e, this._cacheIndex = -2), !0
                                }
                                return !1
                            }, t.prototype.clear = function() {
                                this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2
                            }, t.prototype.keys = function() {
                                return new n(this._keys, this._values, r)
                            }, t.prototype.values = function() {
                                return new n(this._keys, this._values, o)
                            }, t.prototype.entries = function() {
                                return new n(this._keys, this._values, a)
                            }, t.prototype["@@iterator"] = function() {
                                return this.entries()
                            }, t.prototype[i] = function() {
                                return this.entries()
                            }, t.prototype._find = function(e, t) {
                                return this._cacheKey !== e && (this._cacheIndex = this._keys.indexOf(this._cacheKey = e)), this._cacheIndex < 0 && t && (this._cacheIndex = this._keys.length, this._keys.push(e), this._values.push(void 0)), this._cacheIndex
                            }, t
                        }();

                        function r(e, t) {
                            return e
                        }

                        function o(e, t) {
                            return t
                        }

                        function a(e, t) {
                            return [e, t]
                        }
                    }

                    function te() {
                        return function() {
                            function e() {
                                this._map = new f
                            }
                            return Object.defineProperty(e.prototype, "size", {
                                get: function() {
                                    return this._map.size
                                },
                                enumerable: !0,
                                configurable: !0
                            }), e.prototype.has = function(e) {
                                return this._map.has(e)
                            }, e.prototype.add = function(e) {
                                return this._map.set(e, e), this
                            }, e.prototype.delete = function(e) {
                                return this._map.delete(e)
                            }, e.prototype.clear = function() {
                                this._map.clear()
                            }, e.prototype.keys = function() {
                                return this._map.keys()
                            }, e.prototype.values = function() {
                                return this._map.values()
                            }, e.prototype.entries = function() {
                                return this._map.entries()
                            }, e.prototype["@@iterator"] = function() {
                                return this.keys()
                            }, e.prototype[i] = function() {
                                return this.keys()
                            }, e
                        }()
                    }

                    function ne() {
                        var e = 16,
                            n = u.create(),
                            r = i();
                        return function() {
                            function e() {
                                this._key = i()
                            }
                            return e.prototype.has = function(e) {
                                var t = o(e, !1);
                                return void 0 !== t && u.has(t, this._key)
                            }, e.prototype.get = function(e) {
                                var t = o(e, !1);
                                return void 0 !== t ? u.get(t, this._key) : void 0
                            }, e.prototype.set = function(e, t) {
                                return o(e, !0)[this._key] = t, this
                            }, e.prototype.delete = function(e) {
                                var t = o(e, !1);
                                return void 0 !== t && delete t[this._key]
                            }, e.prototype.clear = function() {
                                this._key = i()
                            }, e
                        }();

                        function i() {
                            var e;
                            do {
                                e = "@@WeakMap@@" + s()
                            } while (u.has(n, e));
                            return n[e] = !0, e
                        }

                        function o(e, n) {
                            if (!t.call(e, r)) {
                                if (!n) return;
                                Object.defineProperty(e, r, {
                                    value: u.create()
                                })
                            }
                            return e[r]
                        }

                        function a(e, t) {
                            for (var n = 0; n < t; ++n) e[n] = 255 * Math.random() | 0;
                            return e
                        }

                        function c(e) {
                            return "function" == typeof Uint8Array ? "undefined" != typeof crypto ? crypto.getRandomValues(new Uint8Array(e)) : "undefined" != typeof msCrypto ? msCrypto.getRandomValues(new Uint8Array(e)) : a(new Uint8Array(e), e) : a(new Array(e), e)
                        }

                        function s() {
                            var t = c(e);
                            t[6] = 79 & t[6] | 64, t[8] = 191 & t[8] | 128;
                            for (var n = "", r = 0; r < e; ++r) {
                                var i = t[r];
                                4 !== r && 6 !== r && 8 !== r || (n += "-"), i < 16 && (n += "0"), n += i.toString(16).toLowerCase()
                            }
                            return n
                        }
                    }

                    function re(e) {
                        return e.__ = void 0, delete e.__, e
                    }
                    e("decorate", h), e("metadata", _), e("ttq_defineMetadata", v), e("ttq_hasMetadata", g), e("ttq_hasOwnMetadata", y), e("ttq_getMetadata", m), e("getOwnMetadata", E), e("getMetadataKeys", b), e("getOwnMetadataKeys", w), e("deleteMetadata", I)
                }(r)
        }()
    }(O || (O = {}));
    var N, A = {},
        R = {};
    N = R, Object.defineProperty(N, "__esModule", {
        value: !0
    }), N.NON_CUSTOM_TAG_KEYS = N.POST_CONSTRUCT = N.DESIGN_PARAM_TYPES = N.PARAM_TYPES = N.TAGGED_PROP = N.TAGGED = N.MULTI_INJECT_TAG = N.INJECT_TAG = N.OPTIONAL_TAG = N.UNMANAGED_TAG = N.NAME_TAG = N.NAMED_TAG = void 0, N.NAMED_TAG = "named", N.NAME_TAG = "name", N.UNMANAGED_TAG = "unmanaged", N.OPTIONAL_TAG = "optional", N.INJECT_TAG = "inject", N.MULTI_INJECT_TAG = "multi_inject", N.TAGGED = "inversify:tagged", N.TAGGED_PROP = "inversify:tagged_props", N.PARAM_TYPES = "inversify:paramtypes", N.DESIGN_PARAM_TYPES = "design:paramtypes", N.POST_CONSTRUCT = "post_construct", N.NON_CUSTOM_TAG_KEYS = [N.INJECT_TAG, N.MULTI_INJECT_TAG, N.NAME_TAG, N.UNMANAGED_TAG, N.NAMED_TAG, N.OPTIONAL_TAG];
    var P = {},
        C = {},
        k = {};
    Object.defineProperty(k, "__esModule", {
        value: !0
    }), k.TargetTypeEnum = k.BindingTypeEnum = k.BindingScopeEnum = void 0;
    k.BindingScopeEnum = {
        Request: "Request",
        Singleton: "Singleton",
        Transient: "Transient"
    };
    k.BindingTypeEnum = {
        ConstantValue: "ConstantValue",
        Constructor: "Constructor",
        DynamicValue: "DynamicValue",
        Factory: "Factory",
        Function: "Function",
        Instance: "Instance",
        Invalid: "Invalid",
        Provider: "Provider"
    };
    k.TargetTypeEnum = {
        ClassProperty: "ClassProperty",
        ConstructorArgument: "ConstructorArgument",
        Variable: "Variable"
    };
    var M = {};
    Object.defineProperty(M, "__esModule", {
        value: !0
    }), M.id = void 0;
    var L = 0;
    M.id = function() {
        return L++
    }, Object.defineProperty(C, "__esModule", {
        value: !0
    }), C.Binding = void 0;
    var D = k,
        x = M,
        j = function() {
            function e(e, t) {
                this.id = x.id(), this.activated = !1, this.serviceIdentifier = e, this.scope = t, this.type = D.BindingTypeEnum.Invalid, this.constraint = function(e) {
                    return !0
                }, this.implementationType = null, this.cache = null, this.factory = null, this.provider = null, this.onActivation = null, this.dynamicValue = null
            }
            return e.prototype.clone = function() {
                var t = new e(this.serviceIdentifier, this.scope);
                return t.activated = t.scope === D.BindingScopeEnum.Singleton && this.activated, t.implementationType = this.implementationType, t.dynamicValue = this.dynamicValue, t.scope = this.scope, t.type = this.type, t.factory = this.factory, t.provider = this.provider, t.constraint = this.constraint, t.onActivation = this.onActivation, t.cache = this.cache, t
            }, e
        }();
    C.Binding = j;
    var U = {};
    Object.defineProperty(U, "__esModule", {
        value: !0
    }), U.STACK_OVERFLOW = U.CIRCULAR_DEPENDENCY_IN_FACTORY = U.POST_CONSTRUCT_ERROR = U.MULTIPLE_POST_CONSTRUCT_METHODS = U.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = U.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = U.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = U.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = U.ARGUMENTS_LENGTH_MISMATCH = U.INVALID_DECORATOR_OPERATION = U.INVALID_TO_SELF_VALUE = U.INVALID_FUNCTION_BINDING = U.INVALID_MIDDLEWARE_RETURN = U.NO_MORE_SNAPSHOTS_AVAILABLE = U.INVALID_BINDING_TYPE = U.NOT_IMPLEMENTED = U.CIRCULAR_DEPENDENCY = U.UNDEFINED_INJECT_ANNOTATION = U.MISSING_INJECT_ANNOTATION = U.MISSING_INJECTABLE_ANNOTATION = U.NOT_REGISTERED = U.CANNOT_UNBIND = U.AMBIGUOUS_MATCH = U.KEY_NOT_FOUND = U.NULL_ARGUMENT = U.DUPLICATED_METADATA = U.DUPLICATED_INJECTABLE_DECORATOR = void 0, U.DUPLICATED_INJECTABLE_DECORATOR = "Cannot apply @injectable decorator multiple times.", U.DUPLICATED_METADATA = "Metadata key was used more than once in a parameter:", U.NULL_ARGUMENT = "NULL argument", U.KEY_NOT_FOUND = "Key Not Found", U.AMBIGUOUS_MATCH = "Ambiguous match found for serviceIdentifier:", U.CANNOT_UNBIND = "Could not unbind serviceIdentifier:", U.NOT_REGISTERED = "No matching bindings found for serviceIdentifier:", U.MISSING_INJECTABLE_ANNOTATION = "Missing required @injectable annotation in:", U.MISSING_INJECT_ANNOTATION = "Missing required @inject or @multiInject annotation in:";
    U.UNDEFINED_INJECT_ANNOTATION = function(e) {
        return "@inject called with undefined this could mean that the class " + e + " has a circular dependency problem. You can use a LazyServiceIdentifer to  overcome this limitation."
    }, U.CIRCULAR_DEPENDENCY = "Circular dependency found:", U.NOT_IMPLEMENTED = "Sorry, this feature is not fully implemented yet.", U.INVALID_BINDING_TYPE = "Invalid binding type:", U.NO_MORE_SNAPSHOTS_AVAILABLE = "No snapshot available to restore.", U.INVALID_MIDDLEWARE_RETURN = "Invalid return type in middleware. Middleware must return!", U.INVALID_FUNCTION_BINDING = "Value provided to function binding must be a function!", U.INVALID_TO_SELF_VALUE = "The toSelf function can only be applied when a constructor is used as service identifier", U.INVALID_DECORATOR_OPERATION = "The @inject @multiInject @tagged and @named decorators must be applied to the parameters of a class constructor or a class property.";
    U.ARGUMENTS_LENGTH_MISMATCH = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return "The number of constructor arguments in the derived class " + e[0] + " must be >= than the number of constructor arguments of its base class."
    }, U.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT = "Invalid Container constructor argument. Container options must be an object.", U.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE = "Invalid Container option. Default scope must be a string ('singleton' or 'transient').", U.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE = "Invalid Container option. Auto bind injectable must be a boolean", U.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK = "Invalid Container option. Skip base check must be a boolean", U.MULTIPLE_POST_CONSTRUCT_METHODS = "Cannot apply @postConstruct decorator multiple times in the same class";
    U.POST_CONSTRUCT_ERROR = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return "@postConstruct error in class " + e[0] + ": " + e[1]
    };
    U.CIRCULAR_DEPENDENCY_IN_FACTORY = function() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return "It looks like there is a circular dependency in one of the '" + e[0] + "' bindings. Please investigate bindings withservice identifier '" + e[1] + "'."
    }, U.STACK_OVERFLOW = "Maximum call stack size exceeded";
    var F = {};
    Object.defineProperty(F, "__esModule", {
        value: !0
    }), F.MetadataReader = void 0;
    var B = R,
        q = function() {
            function e() {}
            return e.prototype.getConstructorMetadata = function(e) {
                return {
                    compilerGeneratedMetadata: Reflect.ttq_getMetadata(B.PARAM_TYPES, e),
                    userGeneratedMetadata: Reflect.ttq_getMetadata(B.TAGGED, e) || {}
                }
            }, e.prototype.getPropertiesMetadata = function(e) {
                return Reflect.ttq_getMetadata(B.TAGGED_PROP, e) || []
            }, e
        }();
    F.MetadataReader = q;
    var G = {},
        V = {};
    Object.defineProperty(V, "__esModule", {
        value: !0
    }), V.BindingCount = void 0;
    V.BindingCount = {
        MultipleBindingsAvailable: 2,
        NoBindingsAvailable: 0,
        OnlyOneBindingAvailable: 1
    };
    var H = {};
    Object.defineProperty(H, "__esModule", {
        value: !0
    }), H.isStackOverflowExeption = void 0;
    var J = U;
    H.isStackOverflowExeption = function(e) {
        return e instanceof RangeError || e.message === J.STACK_OVERFLOW
    };
    var W = {};
    Object.defineProperty(W, "__esModule", {
        value: !0
    }), W.circularDependencyToException = W.listMetadataForTarget = W.listRegisteredBindingsForServiceIdentifier = W.getServiceIdentifierAsString = W.getFunctionName = void 0;
    var K = U;

    function Y(e) {
        return "function" == typeof e ? e.name : "symbol" == typeof e ? e.toString() : e
    }

    function X(e, t) {
        return null !== e.parentRequest && (e.parentRequest.serviceIdentifier === t || X(e.parentRequest, t))
    }

    function z(e) {
        if (e.name) return e.name;
        var t = e.toString(),
            n = t.match(/^function\s*([^\s(]+)/);
        return n ? n[1] : "Anonymous function: " + t
    }
    W.getServiceIdentifierAsString = Y, W.listRegisteredBindingsForServiceIdentifier = function(e, t, n) {
        var r = "",
            i = n(e, t);
        return 0 !== i.length && (r = "\nRegistered bindings:", i.forEach((function(e) {
            var t = "Object";
            null !== e.implementationType && (t = z(e.implementationType)), r = r + "\n " + t, e.constraint.metaData && (r = r + " - " + e.constraint.metaData)
        }))), r
    }, W.circularDependencyToException = function e(t) {
        t.childRequests.forEach((function(t) {
            if (X(t, t.serviceIdentifier)) {
                var n = function(e) {
                    return function e(t, n) {
                        void 0 === n && (n = []);
                        var r = Y(t.serviceIdentifier);
                        return n.push(r), null !== t.parentRequest ? e(t.parentRequest, n) : n
                    }(e).reverse().join(" --\x3e ")
                }(t);
                throw new Error(K.CIRCULAR_DEPENDENCY + " " + n)
            }
            e(t)
        }))
    }, W.listMetadataForTarget = function(e, t) {
        if (t.isTagged() || t.isNamed()) {
            var n = "",
                r = t.getNamedTag(),
                i = t.getCustomTags();
            return null !== r && (n += r.toString() + "\n"), null !== i && i.forEach((function(e) {
                n += e.toString() + "\n"
            })), " " + e + "\n " + e + " - " + n
        }
        return " " + e
    }, W.getFunctionName = z;
    var Q = {};
    Object.defineProperty(Q, "__esModule", {
        value: !0
    }), Q.Context = void 0;
    var Z = M,
        $ = function() {
            function e(e) {
                this.id = Z.id(), this.container = e
            }
            return e.prototype.addPlan = function(e) {
                this.plan = e
            }, e.prototype.setCurrentRequest = function(e) {
                this.currentRequest = e
            }, e
        }();
    Q.Context = $;
    var ee = {};
    Object.defineProperty(ee, "__esModule", {
        value: !0
    }), ee.Metadata = void 0;
    var te = R,
        ne = function() {
            function e(e, t) {
                this.key = e, this.value = t
            }
            return e.prototype.toString = function() {
                return this.key === te.NAMED_TAG ? "named: " + this.value.toString() + " " : "tagged: { key:" + this.key.toString() + ", value: " + this.value + " }"
            }, e
        }();
    ee.Metadata = ne;
    var re = {};
    Object.defineProperty(re, "__esModule", {
        value: !0
    }), re.Plan = void 0;
    var ie = function(e, t) {
        this.parentContext = e, this.rootRequest = t
    };
    re.Plan = ie;
    var oe = {},
        ae = {},
        ce = {};
    Object.defineProperty(ce, "__esModule", {
        value: !0
    }), ce.tagProperty = ce.tagParameter = ce.decorate = void 0;
    var ue = U,
        se = R;

    function le(e, t, n, r, i) {
        var o = {},
            a = "number" == typeof i,
            c = void 0 !== i && a ? i.toString() : n;
        if (a && void 0 !== n) throw new Error(ue.INVALID_DECORATOR_OPERATION);
        Reflect.ttq_hasOwnMetadata(e, t) && (o = Reflect.ttq_getMetadata(e, t));
        var u = o[c];
        if (Array.isArray(u))
            for (var s = 0, l = u; s < l.length; s++) {
                var f = l[s];
                if (f.key === r.key) throw new Error(ue.DUPLICATED_METADATA + " " + f.key.toString())
            } else u = [];
        u.push(r), o[c] = u, Reflect.ttq_defineMetadata(e, o, t)
    }

    function fe(e, t) {
        Reflect.decorate(e, t)
    }

    function de(e, t) {
        return function(n, r) {
            t(n, r, e)
        }
    }
    ce.tagParameter = function(e, t, n, r) {
        le(se.TAGGED, e, t, r, n)
    }, ce.tagProperty = function(e, t, n) {
        le(se.TAGGED_PROP, e.constructor, t, n)
    }, ce.decorate = function(e, t, n) {
        "number" == typeof n ? fe([de(n, e)], t) : "string" == typeof n ? Reflect.decorate([e], t, n) : fe([e], t)
    }, Object.defineProperty(ae, "__esModule", {
        value: !0
    }), ae.inject = ae.LazyServiceIdentifer = void 0;
    var pe = U,
        he = R,
        _e = ee,
        ve = ce,
        ge = function() {
            function e(e) {
                this._cb = e
            }
            return e.prototype.unwrap = function() {
                return this._cb()
            }, e
        }();
    ae.LazyServiceIdentifer = ge, ae.inject = function(e) {
        return function(t, n, r) {
            if (void 0 === e) throw new Error(pe.UNDEFINED_INJECT_ANNOTATION(t.name));
            var i = new _e.Metadata(he.INJECT_TAG, e);
            "number" == typeof r ? ve.tagParameter(t, n, r, i) : ve.tagProperty(t, n, i)
        }
    };
    var ye = {},
        me = {};
    Object.defineProperty(me, "__esModule", {
        value: !0
    }), me.QueryableString = void 0;
    var Ee = function() {
        function e(e) {
            this.str = e
        }
        return e.prototype.startsWith = function(e) {
            return 0 === this.str.indexOf(e)
        }, e.prototype.endsWith = function(e) {
            var t, n = e.split("").reverse().join("");
            return t = this.str.split("").reverse().join(""), this.startsWith.call({
                str: t
            }, n)
        }, e.prototype.contains = function(e) {
            return -1 !== this.str.indexOf(e)
        }, e.prototype.equals = function(e) {
            return this.str === e
        }, e.prototype.value = function() {
            return this.str
        }, e
    }();
    me.QueryableString = Ee, Object.defineProperty(ye, "__esModule", {
        value: !0
    }), ye.Target = void 0;
    var be = R,
        we = M,
        Ie = ee,
        Te = me,
        Oe = function() {
            function e(e, t, n, r) {
                this.id = we.id(), this.type = e, this.serviceIdentifier = n, this.name = new Te.QueryableString(t || ""), this.metadata = new Array;
                var i = null;
                "string" == typeof r ? i = new Ie.Metadata(be.NAMED_TAG, r) : r instanceof Ie.Metadata && (i = r), null !== i && this.metadata.push(i)
            }
            return e.prototype.hasTag = function(e) {
                for (var t = 0, n = this.metadata; t < n.length; t++) {
                    if (n[t].key === e) return !0
                }
                return !1
            }, e.prototype.isArray = function() {
                return this.hasTag(be.MULTI_INJECT_TAG)
            }, e.prototype.matchesArray = function(e) {
                return this.matchesTag(be.MULTI_INJECT_TAG)(e)
            }, e.prototype.isNamed = function() {
                return this.hasTag(be.NAMED_TAG)
            }, e.prototype.isTagged = function() {
                return this.metadata.some((function(e) {
                    return be.NON_CUSTOM_TAG_KEYS.every((function(t) {
                        return e.key !== t
                    }))
                }))
            }, e.prototype.isOptional = function() {
                return this.matchesTag(be.OPTIONAL_TAG)(!0)
            }, e.prototype.getNamedTag = function() {
                return this.isNamed() ? this.metadata.filter((function(e) {
                    return e.key === be.NAMED_TAG
                }))[0] : null
            }, e.prototype.getCustomTags = function() {
                return this.isTagged() ? this.metadata.filter((function(e) {
                    return be.NON_CUSTOM_TAG_KEYS.every((function(t) {
                        return e.key !== t
                    }))
                })) : null
            }, e.prototype.matchesNamedTag = function(e) {
                return this.matchesTag(be.NAMED_TAG)(e)
            }, e.prototype.matchesTag = function(e) {
                var t = this;
                return function(n) {
                    for (var r = 0, i = t.metadata; r < i.length; r++) {
                        var o = i[r];
                        if (o.key === e && o.value === n) return !0
                    }
                    return !1
                }
            }, e
        }();
    ye.Target = Oe,
        function(e) {
            var t = S && S.__spreadArray || function(e, t) {
                for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
                return e
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getFunctionName = e.getBaseClassDependencyCount = e.getDependencies = void 0;
            var n = ae,
                r = U,
                i = k,
                o = R,
                a = W;
            Object.defineProperty(e, "getFunctionName", {
                enumerable: !0,
                get: function() {
                    return a.getFunctionName
                }
            });
            var c = ye;

            function u(e, n, i, o) {
                var a = e.getConstructorMetadata(i),
                    c = a.compilerGeneratedMetadata;
                if (void 0 === c) {
                    var u = r.MISSING_INJECTABLE_ANNOTATION + " " + n + ".";
                    throw new Error(u)
                }
                var f = a.userGeneratedMetadata,
                    d = Object.keys(f),
                    p = 0 === i.length && d.length > 0,
                    h = d.length > i.length,
                    _ = function(e, t, n, r, i) {
                        for (var o = [], a = 0; a < i; a++) {
                            var c = s(a, e, t, n, r);
                            null !== c && o.push(c)
                        }
                        return o
                    }(o, n, c, f, p || h ? d.length : i.length),
                    v = l(e, i);
                return t(t([], _), v)
            }

            function s(e, t, o, a, u) {
                var s = u[e.toString()] || [],
                    l = f(s),
                    d = !0 !== l.unmanaged,
                    p = a[e],
                    h = l.inject || l.multiInject;
                if ((p = h || p) instanceof n.LazyServiceIdentifer && (p = p.unwrap()), d) {
                    if (!t && (p === Object || p === Function || void 0 === p)) {
                        var _ = r.MISSING_INJECT_ANNOTATION + " argument " + e + " in class " + o + ".";
                        throw new Error(_)
                    }
                    var v = new c.Target(i.TargetTypeEnum.ConstructorArgument, l.targetName, p);
                    return v.metadata = s, v
                }
                return null
            }

            function l(e, n) {
                for (var r = e.getPropertiesMetadata(n), o = [], a = 0, u = Object._ttq_keys(r); a < u.length; a++) {
                    var s = u[a],
                        d = r[s],
                        p = f(r[s]),
                        h = p.targetName || s,
                        _ = p.inject || p.multiInject,
                        v = new c.Target(i.TargetTypeEnum.ClassProperty, h, _);
                    v.metadata = d, o.push(v)
                }
                var g = Object.getPrototypeOf(n.prototype).constructor;
                if (g !== Object) {
                    var y = l(e, g);
                    o = t(t([], o), y)
                }
                return o
            }

            function f(e) {
                var t = {};
                return e.forEach((function(e) {
                    t[e.key.toString()] = e.value
                })), {
                    inject: t[o.INJECT_TAG],
                    multiInject: t[o.MULTI_INJECT_TAG],
                    targetName: t[o.NAME_TAG],
                    unmanaged: t[o.UNMANAGED_TAG]
                }
            }
            e.getDependencies = function(e, t) {
                return u(e, a.getFunctionName(t), t, !1)
            }, e.getBaseClassDependencyCount = function e(t, n) {
                var r = Object.getPrototypeOf(n.prototype).constructor;
                if (r !== Object) {
                    var i = u(t, a.getFunctionName(r), r, !0),
                        c = i.map((function(e) {
                            return e.metadata.filter((function(e) {
                                return e.key === o.UNMANAGED_TAG
                            }))
                        })),
                        s = [].concat.apply([], c).length,
                        l = i.length - s;
                    return l > 0 ? l : e(t, r)
                }
                return 0
            }
        }(oe);
    var Se = {};
    Object.defineProperty(Se, "__esModule", {
        value: !0
    }), Se.Request = void 0;
    var Ne = M,
        Ae = function() {
            function e(e, t, n, r, i) {
                this.id = Ne.id(), this.serviceIdentifier = e, this.parentContext = t, this.parentRequest = n, this.target = i, this.childRequests = [], this.bindings = Array.isArray(r) ? r : [r], this.requestScope = null === n ? new window[window.TiktokAnalyticsObject || "ttq"]._ttq_map : null
            }
            return e.prototype.addChildRequest = function(t, n, r) {
                var i = new e(t, this.parentContext, this, n, r);
                return this.childRequests.push(i), i
            }, e
        }();
    Se.Request = Ae, Object.defineProperty(G, "__esModule", {
        value: !0
    }), G.getBindingDictionary = G.createMockRequest = G.plan = void 0;
    var Re = V,
        Pe = U,
        Ce = k,
        ke = R,
        Me = H,
        Le = W,
        De = Q,
        xe = ee,
        je = re,
        Ue = oe,
        Fe = Se,
        Be = ye;

    function qe(e) {
        return e._bindingDictionary
    }

    function Ge(e, t, n, r, i) {
        var o = He(n.container, i.serviceIdentifier),
            a = [];
        return o.length === Re.BindingCount.NoBindingsAvailable && n.container.options.autoBindInjectable && "function" == typeof i.serviceIdentifier && e.getConstructorMetadata(i.serviceIdentifier).compilerGeneratedMetadata && (n.container.bind(i.serviceIdentifier).toSelf(), o = He(n.container, i.serviceIdentifier)), a = t ? o : o.filter((function(e) {
                var t = new Fe.Request(e.serviceIdentifier, n, r, e, i);
                return e.constraint(t)
            })),
            function(e, t, n, r) {
                switch (t.length) {
                    case Re.BindingCount.NoBindingsAvailable:
                        if (n.isOptional()) return t;
                        var i = Le.getServiceIdentifierAsString(e),
                            o = Pe.NOT_REGISTERED;
                        throw o += Le.listMetadataForTarget(i, n), o += Le.listRegisteredBindingsForServiceIdentifier(r, i, He), new Error(o);
                    case Re.BindingCount.OnlyOneBindingAvailable:
                        if (!n.isArray()) return t;
                    case Re.BindingCount.MultipleBindingsAvailable:
                    default:
                        if (n.isArray()) return t;
                        i = Le.getServiceIdentifierAsString(e), o = Pe.AMBIGUOUS_MATCH + " " + i;
                        throw o += Le.listRegisteredBindingsForServiceIdentifier(r, i, He), new Error(o)
                }
            }(i.serviceIdentifier, a, i, n.container), a
    }

    function Ve(e, t, n, r, i, o) {
        var a, c;
        if (null === i) {
            a = Ge(e, t, r, null, o), c = new Fe.Request(n, r, null, a, o);
            var u = new je.Plan(r, c);
            r.addPlan(u)
        } else a = Ge(e, t, r, i, o), c = i.addChildRequest(o.serviceIdentifier, a, o);
        a.forEach((function(t) {
            var n = null;
            if (o.isArray()) n = c.addChildRequest(t.serviceIdentifier, t, o);
            else {
                if (t.cache) return;
                n = c
            }
            if (t.type === Ce.BindingTypeEnum.Instance && null !== t.implementationType) {
                var i = Ue.getDependencies(e, t.implementationType);
                if (!r.container.options.skipBaseClassChecks) {
                    var a = Ue.getBaseClassDependencyCount(e, t.implementationType);
                    if (i.length < a) {
                        var u = Pe.ARGUMENTS_LENGTH_MISMATCH(Ue.getFunctionName(t.implementationType));
                        throw new Error(u)
                    }
                }
                i.forEach((function(t) {
                    Ve(e, !1, t.serviceIdentifier, r, n, t)
                }))
            }
        }))
    }

    function He(e, t) {
        var n = [],
            r = qe(e);
        return r.hasKey(t) ? n = r.get(t) : null !== e.parent && (n = He(e.parent, t)), n
    }
    G.getBindingDictionary = qe, G.plan = function(e, t, n, r, i, o, a, c) {
        void 0 === c && (c = !1);
        var u = new De.Context(t),
            s = function(e, t, n, r, i, o) {
                var a = e ? ke.MULTI_INJECT_TAG : ke.INJECT_TAG,
                    c = new xe.Metadata(a, n),
                    u = new Be.Target(t, r, n, c);
                if (void 0 !== i) {
                    var s = new xe.Metadata(i, o);
                    u.metadata.push(s)
                }
                return u
            }(n, r, i, "", o, a);
        try {
            return Ve(e, c, i, u, null, s), u
        } catch (e) {
            throw Me.isStackOverflowExeption(e) && u.plan && Le.circularDependencyToException(u.plan.rootRequest), e
        }
    }, G.createMockRequest = function(e, t, n, r) {
        var i = new Be.Target(Ce.TargetTypeEnum.Variable, "", t, new xe.Metadata(n, r)),
            o = new De.Context(e);
        return new Fe.Request(t, o, null, [], i)
    };
    var Je = {},
        We = {},
        Ke = S && S.__spreadArray || function(e, t) {
            for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
            return e
        };
    Object.defineProperty(We, "__esModule", {
        value: !0
    }), We.resolveInstance = void 0;
    var Ye = U,
        Xe = k,
        ze = R;
    We.resolveInstance = function(e, t, n) {
        var r, i, o = null;
        if (t.length > 0) {
            var a = t.filter((function(e) {
                return null !== e.target && e.target.type === Xe.TargetTypeEnum.ConstructorArgument
            })).map(n);
            i = a, o = function(e, t, n) {
                var r = t.filter((function(e) {
                        return null !== e.target && e.target.type === Xe.TargetTypeEnum.ClassProperty
                    })),
                    i = r.map(n);
                return r.forEach((function(t, n) {
                    var r;
                    r = t.target.name.value();
                    var o = i[n];
                    e[r] = o
                })), e
            }(o = new((r = e)._ttq_bind.apply(r, Ke([void 0], i))), t, n)
        } else o = new e;
        return function(e, t) {
            if (Reflect.ttq_hasMetadata(ze.POST_CONSTRUCT, e)) {
                var n = Reflect.ttq_getMetadata(ze.POST_CONSTRUCT, e);
                try {
                    t[n.value]()
                } catch (t) {
                    throw new Error(Ye.POST_CONSTRUCT_ERROR(e.name, t.message))
                }
            }
        }(e, o), o
    }, Object.defineProperty(Je, "__esModule", {
        value: !0
    }), Je.resolve = void 0;
    var Qe = U,
        Ze = k,
        $e = H,
        et = W,
        tt = We,
        nt = function(e, t, n) {
            try {
                return n()
            } catch (n) {
                throw $e.isStackOverflowExeption(n) ? new Error(Qe.CIRCULAR_DEPENDENCY_IN_FACTORY(e, t.toString())) : n
            }
        },
        rt = function(e) {
            return function(t) {
                t.parentContext.setCurrentRequest(t);
                var n = t.bindings,
                    r = t.childRequests,
                    i = t.target && t.target.isArray(),
                    o = !(t.parentRequest && t.parentRequest.target && t.target && t.parentRequest.target.matchesArray(t.target.serviceIdentifier));
                if (i && o) return r.map((function(t) {
                    return rt(e)(t)
                }));
                var a = null;
                if (!t.target.isOptional() || 0 !== n.length) {
                    var c = n[0],
                        u = c.scope === Ze.BindingScopeEnum.Singleton,
                        s = c.scope === Ze.BindingScopeEnum.Request;
                    if (u && c.activated) return c.cache;
                    if (s && null !== e && e.has(c.id)) return e.get(c.id);
                    if (c.type === Ze.BindingTypeEnum.ConstantValue) a = c.cache, c.activated = !0;
                    else if (c.type === Ze.BindingTypeEnum.Function) a = c.cache, c.activated = !0;
                    else if (c.type === Ze.BindingTypeEnum.Constructor) a = c.implementationType;
                    else if (c.type === Ze.BindingTypeEnum.DynamicValue && null !== c.dynamicValue) a = nt("toDynamicValue", c.serviceIdentifier, (function() {
                        return c.dynamicValue(t.parentContext)
                    }));
                    else if (c.type === Ze.BindingTypeEnum.Factory && null !== c.factory) a = nt("toFactory", c.serviceIdentifier, (function() {
                        return c.factory(t.parentContext)
                    }));
                    else if (c.type === Ze.BindingTypeEnum.Provider && null !== c.provider) a = nt("toProvider", c.serviceIdentifier, (function() {
                        return c.provider(t.parentContext)
                    }));
                    else {
                        if (c.type !== Ze.BindingTypeEnum.Instance || null === c.implementationType) {
                            var l = et.getServiceIdentifierAsString(t.serviceIdentifier);
                            throw new Error(Qe.INVALID_BINDING_TYPE + " " + l)
                        }
                        a = tt.resolveInstance(c.implementationType, r, rt(e))
                    }
                    return "function" == typeof c.onActivation && (a = c.onActivation(t.parentContext, a)), u && (c.cache = a, c.activated = !0), s && null !== e && !e.has(c.id) && e.set(c.id, a), a
                }
            }
        };
    Je.resolve = function(e) {
        return rt(e.plan.rootRequest.requestScope)(e.plan.rootRequest)
    };
    var it = {},
        ot = {},
        at = {},
        ct = {},
        ut = {},
        st = {},
        lt = {};
    Object.defineProperty(lt, "__esModule", {
        value: !0
    }), lt.typeConstraint = lt.namedConstraint = lt.taggedConstraint = lt.traverseAncerstors = void 0;
    var ft = R,
        dt = ee,
        pt = function(e, t) {
            var n = e.parentRequest;
            return null !== n && (!!t(n) || pt(n, t))
        };
    lt.traverseAncerstors = pt;
    var ht = function(e) {
        return function(t) {
            var n = function(n) {
                return null !== n && null !== n.target && n.target.matchesTag(e)(t)
            };
            return n.metaData = new dt.Metadata(e, t), n
        }
    };
    lt.taggedConstraint = ht;
    var _t = ht(ft.NAMED_TAG);
    lt.namedConstraint = _t;
    lt.typeConstraint = function(e) {
        return function(t) {
            var n = null;
            if (null !== t) {
                if (n = t.bindings[0], "string" == typeof e) return n.serviceIdentifier === e;
                var r = t.bindings[0].implementationType;
                return e === r
            }
            return !1
        }
    }, Object.defineProperty(st, "__esModule", {
        value: !0
    }), st.BindingWhenSyntax = void 0;
    var vt = ut,
        gt = lt,
        yt = function() {
            function e(e) {
                this._binding = e
            }
            return e.prototype.when = function(e) {
                return this._binding.constraint = e, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenTargetNamed = function(e) {
                return this._binding.constraint = gt.namedConstraint(e), new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenTargetIsDefault = function() {
                return this._binding.constraint = function(e) {
                    return null !== e.target && !e.target.isNamed() && !e.target.isTagged()
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenTargetTagged = function(e, t) {
                return this._binding.constraint = gt.taggedConstraint(e)(t), new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenInjectedInto = function(e) {
                return this._binding.constraint = function(t) {
                    return gt.typeConstraint(e)(t.parentRequest)
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenParentNamed = function(e) {
                return this._binding.constraint = function(t) {
                    return gt.namedConstraint(e)(t.parentRequest)
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenParentTagged = function(e, t) {
                return this._binding.constraint = function(n) {
                    return gt.taggedConstraint(e)(t)(n.parentRequest)
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenAnyAncestorIs = function(e) {
                return this._binding.constraint = function(t) {
                    return gt.traverseAncerstors(t, gt.typeConstraint(e))
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenNoAncestorIs = function(e) {
                return this._binding.constraint = function(t) {
                    return !gt.traverseAncerstors(t, gt.typeConstraint(e))
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenAnyAncestorNamed = function(e) {
                return this._binding.constraint = function(t) {
                    return gt.traverseAncerstors(t, gt.namedConstraint(e))
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenNoAncestorNamed = function(e) {
                return this._binding.constraint = function(t) {
                    return !gt.traverseAncerstors(t, gt.namedConstraint(e))
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenAnyAncestorTagged = function(e, t) {
                return this._binding.constraint = function(n) {
                    return gt.traverseAncerstors(n, gt.taggedConstraint(e)(t))
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenNoAncestorTagged = function(e, t) {
                return this._binding.constraint = function(n) {
                    return !gt.traverseAncerstors(n, gt.taggedConstraint(e)(t))
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenAnyAncestorMatches = function(e) {
                return this._binding.constraint = function(t) {
                    return gt.traverseAncerstors(t, e)
                }, new vt.BindingOnSyntax(this._binding)
            }, e.prototype.whenNoAncestorMatches = function(e) {
                return this._binding.constraint = function(t) {
                    return !gt.traverseAncerstors(t, e)
                }, new vt.BindingOnSyntax(this._binding)
            }, e
        }();
    st.BindingWhenSyntax = yt, Object.defineProperty(ut, "__esModule", {
        value: !0
    }), ut.BindingOnSyntax = void 0;
    var mt = st,
        Et = function() {
            function e(e) {
                this._binding = e
            }
            return e.prototype.onActivation = function(e) {
                return this._binding.onActivation = e, new mt.BindingWhenSyntax(this._binding)
            }, e
        }();
    ut.BindingOnSyntax = Et, Object.defineProperty(ct, "__esModule", {
        value: !0
    }), ct.BindingWhenOnSyntax = void 0;
    var bt = ut,
        wt = st,
        It = function() {
            function e(e) {
                this._binding = e, this._bindingWhenSyntax = new wt.BindingWhenSyntax(this._binding), this._bindingOnSyntax = new bt.BindingOnSyntax(this._binding)
            }
            return e.prototype.when = function(e) {
                return this._bindingWhenSyntax.when(e)
            }, e.prototype.whenTargetNamed = function(e) {
                return this._bindingWhenSyntax.whenTargetNamed(e)
            }, e.prototype.whenTargetIsDefault = function() {
                return this._bindingWhenSyntax.whenTargetIsDefault()
            }, e.prototype.whenTargetTagged = function(e, t) {
                return this._bindingWhenSyntax.whenTargetTagged(e, t)
            }, e.prototype.whenInjectedInto = function(e) {
                return this._bindingWhenSyntax.whenInjectedInto(e)
            }, e.prototype.whenParentNamed = function(e) {
                return this._bindingWhenSyntax.whenParentNamed(e)
            }, e.prototype.whenParentTagged = function(e, t) {
                return this._bindingWhenSyntax.whenParentTagged(e, t)
            }, e.prototype.whenAnyAncestorIs = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorIs(e)
            }, e.prototype.whenNoAncestorIs = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorIs(e)
            }, e.prototype.whenAnyAncestorNamed = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorNamed(e)
            }, e.prototype.whenAnyAncestorTagged = function(e, t) {
                return this._bindingWhenSyntax.whenAnyAncestorTagged(e, t)
            }, e.prototype.whenNoAncestorNamed = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorNamed(e)
            }, e.prototype.whenNoAncestorTagged = function(e, t) {
                return this._bindingWhenSyntax.whenNoAncestorTagged(e, t)
            }, e.prototype.whenAnyAncestorMatches = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorMatches(e)
            }, e.prototype.whenNoAncestorMatches = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorMatches(e)
            }, e.prototype.onActivation = function(e) {
                return this._bindingOnSyntax.onActivation(e)
            }, e
        }();
    ct.BindingWhenOnSyntax = It, Object.defineProperty(at, "__esModule", {
        value: !0
    }), at.BindingInSyntax = void 0;
    var Tt = k,
        Ot = ct,
        St = function() {
            function e(e) {
                this._binding = e
            }
            return e.prototype.inRequestScope = function() {
                return this._binding.scope = Tt.BindingScopeEnum.Request, new Ot.BindingWhenOnSyntax(this._binding)
            }, e.prototype.inSingletonScope = function() {
                return this._binding.scope = Tt.BindingScopeEnum.Singleton, new Ot.BindingWhenOnSyntax(this._binding)
            }, e.prototype.inTransientScope = function() {
                return this._binding.scope = Tt.BindingScopeEnum.Transient, new Ot.BindingWhenOnSyntax(this._binding)
            }, e
        }();
    at.BindingInSyntax = St, Object.defineProperty(ot, "__esModule", {
        value: !0
    }), ot.BindingInWhenOnSyntax = void 0;
    var Nt = at,
        At = ut,
        Rt = st,
        Pt = function() {
            function e(e) {
                this._binding = e, this._bindingWhenSyntax = new Rt.BindingWhenSyntax(this._binding), this._bindingOnSyntax = new At.BindingOnSyntax(this._binding), this._bindingInSyntax = new Nt.BindingInSyntax(e)
            }
            return e.prototype.inRequestScope = function() {
                return this._bindingInSyntax.inRequestScope()
            }, e.prototype.inSingletonScope = function() {
                return this._bindingInSyntax.inSingletonScope()
            }, e.prototype.inTransientScope = function() {
                return this._bindingInSyntax.inTransientScope()
            }, e.prototype.when = function(e) {
                return this._bindingWhenSyntax.when(e)
            }, e.prototype.whenTargetNamed = function(e) {
                return this._bindingWhenSyntax.whenTargetNamed(e)
            }, e.prototype.whenTargetIsDefault = function() {
                return this._bindingWhenSyntax.whenTargetIsDefault()
            }, e.prototype.whenTargetTagged = function(e, t) {
                return this._bindingWhenSyntax.whenTargetTagged(e, t)
            }, e.prototype.whenInjectedInto = function(e) {
                return this._bindingWhenSyntax.whenInjectedInto(e)
            }, e.prototype.whenParentNamed = function(e) {
                return this._bindingWhenSyntax.whenParentNamed(e)
            }, e.prototype.whenParentTagged = function(e, t) {
                return this._bindingWhenSyntax.whenParentTagged(e, t)
            }, e.prototype.whenAnyAncestorIs = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorIs(e)
            }, e.prototype.whenNoAncestorIs = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorIs(e)
            }, e.prototype.whenAnyAncestorNamed = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorNamed(e)
            }, e.prototype.whenAnyAncestorTagged = function(e, t) {
                return this._bindingWhenSyntax.whenAnyAncestorTagged(e, t)
            }, e.prototype.whenNoAncestorNamed = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorNamed(e)
            }, e.prototype.whenNoAncestorTagged = function(e, t) {
                return this._bindingWhenSyntax.whenNoAncestorTagged(e, t)
            }, e.prototype.whenAnyAncestorMatches = function(e) {
                return this._bindingWhenSyntax.whenAnyAncestorMatches(e)
            }, e.prototype.whenNoAncestorMatches = function(e) {
                return this._bindingWhenSyntax.whenNoAncestorMatches(e)
            }, e.prototype.onActivation = function(e) {
                return this._bindingOnSyntax.onActivation(e)
            }, e
        }();
    ot.BindingInWhenOnSyntax = Pt, Object.defineProperty(it, "__esModule", {
        value: !0
    }), it.BindingToSyntax = void 0;
    var Ct = U,
        kt = k,
        Mt = ot,
        Lt = ct,
        Dt = function() {
            function e(e) {
                this._binding = e
            }
            return e.prototype.to = function(e) {
                return this._binding.type = kt.BindingTypeEnum.Instance, this._binding.implementationType = e, new Mt.BindingInWhenOnSyntax(this._binding)
            }, e.prototype.toSelf = function() {
                if ("function" != typeof this._binding.serviceIdentifier) throw new Error("" + Ct.INVALID_TO_SELF_VALUE);
                var e = this._binding.serviceIdentifier;
                return this.to(e)
            }, e.prototype.toConstantValue = function(e) {
                return this._binding.type = kt.BindingTypeEnum.ConstantValue, this._binding.cache = e, this._binding.dynamicValue = null, this._binding.implementationType = null, this._binding.scope = kt.BindingScopeEnum.Singleton, new Lt.BindingWhenOnSyntax(this._binding)
            }, e.prototype.toDynamicValue = function(e) {
                return this._binding.type = kt.BindingTypeEnum.DynamicValue, this._binding.cache = null, this._binding.dynamicValue = e, this._binding.implementationType = null, new Mt.BindingInWhenOnSyntax(this._binding)
            }, e.prototype.toConstructor = function(e) {
                return this._binding.type = kt.BindingTypeEnum.Constructor, this._binding.implementationType = e, this._binding.scope = kt.BindingScopeEnum.Singleton, new Lt.BindingWhenOnSyntax(this._binding)
            }, e.prototype.toFactory = function(e) {
                return this._binding.type = kt.BindingTypeEnum.Factory, this._binding.factory = e, this._binding.scope = kt.BindingScopeEnum.Singleton, new Lt.BindingWhenOnSyntax(this._binding)
            }, e.prototype.toFunction = function(e) {
                if ("function" != typeof e) throw new Error(Ct.INVALID_FUNCTION_BINDING);
                var t = this.toConstantValue(e);
                return this._binding.type = kt.BindingTypeEnum.Function, this._binding.scope = kt.BindingScopeEnum.Singleton, t
            }, e.prototype.toAutoFactory = function(e) {
                return this._binding.type = kt.BindingTypeEnum.Factory, this._binding.factory = function(t) {
                    return function() {
                        return t.container.get(e)
                    }
                }, this._binding.scope = kt.BindingScopeEnum.Singleton, new Lt.BindingWhenOnSyntax(this._binding)
            }, e.prototype.toProvider = function(e) {
                return this._binding.type = kt.BindingTypeEnum.Provider, this._binding.provider = e, this._binding.scope = kt.BindingScopeEnum.Singleton, new Lt.BindingWhenOnSyntax(this._binding)
            }, e.prototype.toService = function(e) {
                this.toDynamicValue((function(t) {
                    return t.container.get(e)
                }))
            }, e
        }();
    it.BindingToSyntax = Dt;
    var xt = {};
    Object.defineProperty(xt, "__esModule", {
        value: !0
    }), xt.ContainerSnapshot = void 0;
    var jt = function() {
        function e() {}
        return e.of = function(t, n) {
            var r = new e;
            return r.bindings = t, r.middleware = n, r
        }, e
    }();
    xt.ContainerSnapshot = jt;
    var Ut = {};
    Object.defineProperty(Ut, "__esModule", {
        value: !0
    }), Ut.Lookup = void 0;
    var Ft = U,
        Bt = function() {
            function e() {
                this._map = new window[window.TiktokAnalyticsObject || "ttq"]._ttq_map
            }
            return e.prototype.getMap = function() {
                return this._map
            }, e.prototype.add = function(e, t) {
                if (null == e) throw new Error(Ft.NULL_ARGUMENT);
                if (null == t) throw new Error(Ft.NULL_ARGUMENT);
                var n = this._map.get(e);
                void 0 !== n ? (n.push(t), this._map.set(e, n)) : this._map.set(e, [t])
            }, e.prototype.get = function(e) {
                if (null == e) throw new Error(Ft.NULL_ARGUMENT);
                var t = this._map.get(e);
                if (void 0 !== t) return t;
                throw new Error(Ft.KEY_NOT_FOUND)
            }, e.prototype.remove = function(e) {
                if (null == e) throw new Error(Ft.NULL_ARGUMENT);
                if (!this._map.delete(e)) throw new Error(Ft.KEY_NOT_FOUND)
            }, e.prototype.removeByCondition = function(e) {
                var t = this;
                this._map.forEach((function(n, r) {
                    var i = n.filter((function(t) {
                        return !e(t)
                    }));
                    i.length > 0 ? t._map.set(r, i) : t._map.delete(r)
                }))
            }, e.prototype.hasKey = function(e) {
                if (null == e) throw new Error(Ft.NULL_ARGUMENT);
                return this._map.has(e)
            }, e.prototype.clone = function() {
                var t = new e;
                return this._map.forEach((function(e, n) {
                    e.forEach((function(e) {
                        return t.add(n, e.clone())
                    }))
                })), t
            }, e.prototype.traverse = function(e) {
                this._map.forEach((function(t, n) {
                    e(n, t)
                }))
            }, e
        }();
    Ut.Lookup = Bt;
    var qt = S && S.__awaiter || function(e, t, n, r) {
            return new(n || (n = Promise))((function(i, o) {
                function a(e) {
                    try {
                        u(r.next(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function c(e) {
                    try {
                        u(r.throw(e))
                    } catch (e) {
                        o(e)
                    }
                }

                function u(e) {
                    var t;
                    e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                        e(t)
                    }))).then(a, c)
                }
                u((r = r.apply(e, t || [])).next())
            }))
        },
        Gt = S && S.__generator || function(e, t) {
            var n, r, i, o, a = {
                label: 0,
                sent: function() {
                    if (1 & i[0]) throw i[1];
                    return i[1]
                },
                trys: [],
                ops: []
            };
            return o = {
                next: c(0),
                throw: c(1),
                return: c(2)
            }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function c(o) {
                return function(c) {
                    return function(o) {
                        if (n) throw new TypeError("Generator is already executing.");
                        for (; a;) try {
                            if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                            switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                case 0:
                                case 1:
                                    i = o;
                                    break;
                                case 4:
                                    return a.label++, {
                                        value: o[1],
                                        done: !1
                                    };
                                case 5:
                                    a.label++, r = o[1], o = [0];
                                    continue;
                                case 7:
                                    o = a.ops.pop(), a.trys.pop();
                                    continue;
                                default:
                                    if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                        a = 0;
                                        continue
                                    }
                                    if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                        a.label = o[1];
                                        break
                                    }
                                    if (6 === o[0] && a.label < i[1]) {
                                        a.label = i[1], i = o;
                                        break
                                    }
                                    if (i && a.label < i[2]) {
                                        a.label = i[2], a.ops.push(o);
                                        break
                                    }
                                    i[2] && a.ops.pop(), a.trys.pop();
                                    continue
                            }
                            o = t.call(e, a)
                        } catch (e) {
                            o = [6, e], r = 0
                        } finally {
                            n = i = 0
                        }
                        if (5 & o[0]) throw o[1];
                        return {
                            value: o[0] ? o[1] : void 0,
                            done: !0
                        }
                    }([o, c])
                }
            }
        },
        Vt = S && S.__spreadArray || function(e, t) {
            for (var n = 0, r = t.length, i = e.length; n < r; n++, i++) e[i] = t[n];
            return e
        };
    Object.defineProperty(P, "__esModule", {
        value: !0
    }), P.Container = void 0;
    var Ht = C,
        Jt = U,
        Wt = k,
        Kt = R,
        Yt = F,
        Xt = G,
        zt = Je,
        Qt = it,
        Zt = M,
        $t = W,
        en = xt,
        tn = Ut,
        nn = function() {
            function e(e) {
                this._appliedMiddleware = [];
                var t = e || {};
                if ("object" != typeof t) throw new Error("" + Jt.CONTAINER_OPTIONS_MUST_BE_AN_OBJECT);
                if (void 0 === t.defaultScope) t.defaultScope = Wt.BindingScopeEnum.Transient;
                else if (t.defaultScope !== Wt.BindingScopeEnum.Singleton && t.defaultScope !== Wt.BindingScopeEnum.Transient && t.defaultScope !== Wt.BindingScopeEnum.Request) throw new Error("" + Jt.CONTAINER_OPTIONS_INVALID_DEFAULT_SCOPE);
                if (void 0 === t.autoBindInjectable) t.autoBindInjectable = !1;
                else if ("boolean" != typeof t.autoBindInjectable) throw new Error("" + Jt.CONTAINER_OPTIONS_INVALID_AUTO_BIND_INJECTABLE);
                if (void 0 === t.skipBaseClassChecks) t.skipBaseClassChecks = !1;
                else if ("boolean" != typeof t.skipBaseClassChecks) throw new Error("" + Jt.CONTAINER_OPTIONS_INVALID_SKIP_BASE_CHECK);
                this.options = {
                    autoBindInjectable: t.autoBindInjectable,
                    defaultScope: t.defaultScope,
                    skipBaseClassChecks: t.skipBaseClassChecks
                }, this.id = Zt.id(), this._bindingDictionary = new tn.Lookup, this._snapshots = [], this._middleware = null, this.parent = null, this._metadataReader = new Yt.MetadataReader
            }
            return e.merge = function(t, n) {
                for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
                var o = new e,
                    a = Vt([t, n], r).map((function(e) {
                        return Xt.getBindingDictionary(e)
                    })),
                    c = Xt.getBindingDictionary(o);

                function u(e, t) {
                    e.traverse((function(e, n) {
                        n.forEach((function(e) {
                            t.add(e.serviceIdentifier, e.clone())
                        }))
                    }))
                }
                return a.forEach((function(e) {
                    u(e, c)
                })), o
            }, e.prototype.load = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                for (var n = this._getContainerModuleHelpersFactory(), r = 0, i = e; r < i.length; r++) {
                    var o = i[r],
                        a = n(o.id);
                    o.registry(a.bindFunction, a.unbindFunction, a.isboundFunction, a.rebindFunction)
                }
            }, e.prototype.loadAsync = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                return qt(this, void 0, void 0, (function() {
                    var t, n, r, i, o;
                    return Gt(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                t = this._getContainerModuleHelpersFactory(), n = 0, r = e, a.label = 1;
                            case 1:
                                return n < r.length ? (i = r[n], o = t(i.id), [4, i.registry(o.bindFunction, o.unbindFunction, o.isboundFunction, o.rebindFunction)]) : [3, 4];
                            case 2:
                                a.sent(), a.label = 3;
                            case 3:
                                return n++, [3, 1];
                            case 4:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.unload = function() {
                for (var e = this, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var r = function(e) {
                    return function(t) {
                        return t.moduleId === e
                    }
                };
                t.forEach((function(t) {
                    var n = r(t.id);
                    e._bindingDictionary.removeByCondition(n)
                }))
            }, e.prototype.bind = function(e) {
                var t = this.options.defaultScope || Wt.BindingScopeEnum.Transient,
                    n = new Ht.Binding(e, t);
                return this._bindingDictionary.add(e, n), new Qt.BindingToSyntax(n)
            }, e.prototype.rebind = function(e) {
                return this.unbind(e), this.bind(e)
            }, e.prototype.unbind = function(e) {
                try {
                    this._bindingDictionary.remove(e)
                } catch (t) {
                    throw new Error(Jt.CANNOT_UNBIND + " " + $t.getServiceIdentifierAsString(e))
                }
            }, e.prototype.unbindAll = function() {
                this._bindingDictionary = new tn.Lookup
            }, e.prototype.isBound = function(e) {
                var t = this._bindingDictionary.hasKey(e);
                return !t && this.parent && (t = this.parent.isBound(e)), t
            }, e.prototype.isBoundNamed = function(e, t) {
                return this.isBoundTagged(e, Kt.NAMED_TAG, t)
            }, e.prototype.isBoundTagged = function(e, t, n) {
                var r = !1;
                if (this._bindingDictionary.hasKey(e)) {
                    var i = this._bindingDictionary.get(e),
                        o = Xt.createMockRequest(this, e, t, n);
                    r = i.some((function(e) {
                        return e.constraint(o)
                    }))
                }
                return !r && this.parent && (r = this.parent.isBoundTagged(e, t, n)), r
            }, e.prototype.snapshot = function() {
                this._snapshots.push(en.ContainerSnapshot.of(this._bindingDictionary.clone(), this._middleware))
            }, e.prototype.restore = function() {
                var e = this._snapshots.pop();
                if (void 0 === e) throw new Error(Jt.NO_MORE_SNAPSHOTS_AVAILABLE);
                this._bindingDictionary = e.bindings, this._middleware = e.middleware
            }, e.prototype.createChild = function(t) {
                var n = new e(t || this.options);
                return n.parent = this, n
            }, e.prototype.applyMiddleware = function() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                this._appliedMiddleware = this._appliedMiddleware.concat(e);
                var n = this._middleware ? this._middleware : this._planAndResolve();
                this._middleware = e.reduce((function(e, t) {
                    return t(e)
                }), n)
            }, e.prototype.applyCustomMetadataReader = function(e) {
                this._metadataReader = e
            }, e.prototype.get = function(e) {
                return this._get(!1, !1, Wt.TargetTypeEnum.Variable, e)
            }, e.prototype.getTagged = function(e, t, n) {
                return this._get(!1, !1, Wt.TargetTypeEnum.Variable, e, t, n)
            }, e.prototype.getNamed = function(e, t) {
                return this.getTagged(e, Kt.NAMED_TAG, t)
            }, e.prototype.getAll = function(e) {
                return this._get(!0, !0, Wt.TargetTypeEnum.Variable, e)
            }, e.prototype.getAllTagged = function(e, t, n) {
                return this._get(!1, !0, Wt.TargetTypeEnum.Variable, e, t, n)
            }, e.prototype.getAllNamed = function(e, t) {
                return this.getAllTagged(e, Kt.NAMED_TAG, t)
            }, e.prototype.resolve = function(e) {
                var t = this.createChild();
                return t.bind(e).toSelf(), this._appliedMiddleware.forEach((function(e) {
                    t.applyMiddleware(e)
                })), t.get(e)
            }, e.prototype._getContainerModuleHelpersFactory = function() {
                var e = this,
                    t = function(e, t) {
                        e._binding.moduleId = t
                    },
                    n = function(n) {
                        return function(r) {
                            var i = e.rebind.bind(e)(r);
                            return t(i, n), i
                        }
                    };
                return function(r) {
                    return {
                        bindFunction: (i = r, function(n) {
                            var r = e.bind.bind(e)(n);
                            return t(r, i), r
                        }),
                        isboundFunction: function(t) {
                            return e.isBound.bind(e)(t)
                        },
                        rebindFunction: n(r),
                        unbindFunction: function(t) {
                            e.unbind.bind(e)(t)
                        }
                    };
                    var i
                }
            }, e.prototype._get = function(e, t, n, r, i, o) {
                var a = null,
                    c = {
                        avoidConstraints: e,
                        contextInterceptor: function(e) {
                            return e
                        },
                        isMultiInject: t,
                        key: i,
                        serviceIdentifier: r,
                        targetType: n,
                        value: o
                    };
                if (this._middleware) {
                    if (null == (a = this._middleware(c))) throw new Error(Jt.INVALID_MIDDLEWARE_RETURN)
                } else a = this._planAndResolve()(c);
                return a
            }, e.prototype._planAndResolve = function() {
                var e = this;
                return function(t) {
                    var n = Xt.plan(e._metadataReader, e, t.isMultiInject, t.targetType, t.serviceIdentifier, t.key, t.value, t.avoidConstraints);
                    return n = t.contextInterceptor(n), zt.resolve(n)
                }
            }, e
        }();
    P.Container = nn;
    var rn = {};
    Object.defineProperty(rn, "__esModule", {
        value: !0
    }), rn.AsyncContainerModule = rn.ContainerModule = void 0;
    var on = M,
        an = function(e) {
            this.id = on.id(), this.registry = e
        };
    rn.ContainerModule = an;
    var cn = function(e) {
        this.id = on.id(), this.registry = e
    };
    rn.AsyncContainerModule = cn;
    var un = {};
    Object.defineProperty(un, "__esModule", {
        value: !0
    }), un.injectable = void 0;
    var sn = U,
        ln = R;
    un.injectable = function() {
        return function(e) {
            if (Reflect.ttq_hasOwnMetadata(ln.PARAM_TYPES, e)) throw new Error(sn.DUPLICATED_INJECTABLE_DECORATOR);
            var t = Reflect.ttq_getMetadata(ln.DESIGN_PARAM_TYPES, e) || [];
            return Reflect.ttq_defineMetadata(ln.PARAM_TYPES, t, e), e
        }
    };
    var fn = {};
    Object.defineProperty(fn, "__esModule", {
        value: !0
    }), fn.tagged = void 0;
    var dn = ee,
        pn = ce;
    fn.tagged = function(e, t) {
        return function(n, r, i) {
            var o = new dn.Metadata(e, t);
            "number" == typeof i ? pn.tagParameter(n, r, i, o) : pn.tagProperty(n, r, o)
        }
    };
    var hn = {};
    Object.defineProperty(hn, "__esModule", {
        value: !0
    }), hn.named = void 0;
    var _n = R,
        vn = ee,
        gn = ce;
    hn.named = function(e) {
        return function(t, n, r) {
            var i = new vn.Metadata(_n.NAMED_TAG, e);
            "number" == typeof r ? gn.tagParameter(t, n, r, i) : gn.tagProperty(t, n, i)
        }
    };
    var yn = {};
    Object.defineProperty(yn, "__esModule", {
        value: !0
    }), yn.optional = void 0;
    var mn = R,
        En = ee,
        bn = ce;
    yn.optional = function() {
        return function(e, t, n) {
            var r = new En.Metadata(mn.OPTIONAL_TAG, !0);
            "number" == typeof n ? bn.tagParameter(e, t, n, r) : bn.tagProperty(e, t, r)
        }
    };
    var wn = {};
    Object.defineProperty(wn, "__esModule", {
        value: !0
    }), wn.unmanaged = void 0;
    var In = R,
        Tn = ee,
        On = ce;
    wn.unmanaged = function() {
        return function(e, t, n) {
            var r = new Tn.Metadata(In.UNMANAGED_TAG, !0);
            On.tagParameter(e, t, n, r)
        }
    };
    var Sn = {};
    Object.defineProperty(Sn, "__esModule", {
        value: !0
    }), Sn.multiInject = void 0;
    var Nn = R,
        An = ee,
        Rn = ce;
    Sn.multiInject = function(e) {
        return function(t, n, r) {
            var i = new An.Metadata(Nn.MULTI_INJECT_TAG, e);
            "number" == typeof r ? Rn.tagParameter(t, n, r, i) : Rn.tagProperty(t, n, i)
        }
    };
    var Pn = {};
    Object.defineProperty(Pn, "__esModule", {
        value: !0
    }), Pn.targetName = void 0;
    var Cn = R,
        kn = ee,
        Mn = ce;
    Pn.targetName = function(e) {
        return function(t, n, r) {
            var i = new kn.Metadata(Cn.NAME_TAG, e);
            Mn.tagParameter(t, n, r, i)
        }
    };
    var Ln = {};
    Object.defineProperty(Ln, "__esModule", {
        value: !0
    }), Ln.postConstruct = void 0;
    var Dn = U,
        xn = R,
        jn = ee;
    Ln.postConstruct = function() {
        return function(e, t, n) {
            var r = new jn.Metadata(xn.POST_CONSTRUCT, t);
            if (Reflect.ttq_hasOwnMetadata(xn.POST_CONSTRUCT, e.constructor)) throw new Error(Dn.MULTIPLE_POST_CONSTRUCT_METHODS);
            Reflect.ttq_defineMetadata(xn.POST_CONSTRUCT, r, e.constructor)
        }
    };
    var Un = {};
    Object.defineProperty(Un, "__esModule", {
        value: !0
    }), Un.multiBindToService = void 0;
    Un.multiBindToService = function(e) {
            return function(t) {
                return function() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    return n.forEach((function(n) {
                        return e.bind(n).toService(t)
                    }))
                }
            }
        },
        function(e) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.multiBindToService = e.getServiceIdentifierAsString = e.typeConstraint = e.namedConstraint = e.taggedConstraint = e.traverseAncerstors = e.decorate = e.id = e.MetadataReader = e.postConstruct = e.targetName = e.multiInject = e.unmanaged = e.optional = e.LazyServiceIdentifer = e.inject = e.named = e.tagged = e.injectable = e.ContainerModule = e.AsyncContainerModule = e.TargetTypeEnum = e.BindingTypeEnum = e.BindingScopeEnum = e.Container = e.METADATA_KEY = void 0;
            var t = R;
            e.METADATA_KEY = t;
            var n = P;
            Object.defineProperty(e, "Container", {
                enumerable: !0,
                get: function() {
                    return n.Container
                }
            });
            var r = k;
            Object.defineProperty(e, "BindingScopeEnum", {
                enumerable: !0,
                get: function() {
                    return r.BindingScopeEnum
                }
            }), Object.defineProperty(e, "BindingTypeEnum", {
                enumerable: !0,
                get: function() {
                    return r.BindingTypeEnum
                }
            }), Object.defineProperty(e, "TargetTypeEnum", {
                enumerable: !0,
                get: function() {
                    return r.TargetTypeEnum
                }
            });
            var i = rn;
            Object.defineProperty(e, "AsyncContainerModule", {
                enumerable: !0,
                get: function() {
                    return i.AsyncContainerModule
                }
            }), Object.defineProperty(e, "ContainerModule", {
                enumerable: !0,
                get: function() {
                    return i.ContainerModule
                }
            });
            var o = un;
            Object.defineProperty(e, "injectable", {
                enumerable: !0,
                get: function() {
                    return o.injectable
                }
            });
            var a = fn;
            Object.defineProperty(e, "tagged", {
                enumerable: !0,
                get: function() {
                    return a.tagged
                }
            });
            var c = hn;
            Object.defineProperty(e, "named", {
                enumerable: !0,
                get: function() {
                    return c.named
                }
            });
            var u = ae;
            Object.defineProperty(e, "inject", {
                enumerable: !0,
                get: function() {
                    return u.inject
                }
            }), Object.defineProperty(e, "LazyServiceIdentifer", {
                enumerable: !0,
                get: function() {
                    return u.LazyServiceIdentifer
                }
            });
            var s = yn;
            Object.defineProperty(e, "optional", {
                enumerable: !0,
                get: function() {
                    return s.optional
                }
            });
            var l = wn;
            Object.defineProperty(e, "unmanaged", {
                enumerable: !0,
                get: function() {
                    return l.unmanaged
                }
            });
            var f = Sn;
            Object.defineProperty(e, "multiInject", {
                enumerable: !0,
                get: function() {
                    return f.multiInject
                }
            });
            var d = Pn;
            Object.defineProperty(e, "targetName", {
                enumerable: !0,
                get: function() {
                    return d.targetName
                }
            });
            var p = Ln;
            Object.defineProperty(e, "postConstruct", {
                enumerable: !0,
                get: function() {
                    return p.postConstruct
                }
            });
            var h = F;
            Object.defineProperty(e, "MetadataReader", {
                enumerable: !0,
                get: function() {
                    return h.MetadataReader
                }
            });
            var _ = M;
            Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return _.id
                }
            });
            var v = ce;
            Object.defineProperty(e, "decorate", {
                enumerable: !0,
                get: function() {
                    return v.decorate
                }
            });
            var g = lt;
            Object.defineProperty(e, "traverseAncerstors", {
                enumerable: !0,
                get: function() {
                    return g.traverseAncerstors
                }
            }), Object.defineProperty(e, "taggedConstraint", {
                enumerable: !0,
                get: function() {
                    return g.taggedConstraint
                }
            }), Object.defineProperty(e, "namedConstraint", {
                enumerable: !0,
                get: function() {
                    return g.namedConstraint
                }
            }), Object.defineProperty(e, "typeConstraint", {
                enumerable: !0,
                get: function() {
                    return g.typeConstraint
                }
            });
            var y = W;
            Object.defineProperty(e, "getServiceIdentifierAsString", {
                enumerable: !0,
                get: function() {
                    return y.getServiceIdentifierAsString
                }
            });
            var m = Un;
            Object.defineProperty(e, "multiBindToService", {
                enumerable: !0,
                get: function() {
                    return m.multiBindToService
                }
            })
        }(A);
    var Fn, Bn, qn, Gn, Vn, Hn, Jn, Wn, Kn, Yn, Xn = ["ttuts", "ad_info_from"];
    ! function(e) {
        e.LDU = "limited_data_use", e.EVENTID = "eventID", e.EVENT_ID = "event_id"
    }(Fn || (Fn = {})),
    function(e) {
        e[e.defaultReport = 0] = "defaultReport", e[e.httpReport = 1] = "httpReport", e[e.htmlHttpReport = 2] = "htmlHttpReport"
    }(Bn || (Bn = {})),
    function(e) {
        e.NORMAL = "1", e.NOT_CROSS_DOMAIN_IFRAME = "2", e.CROSS_DOMAIN_IFRAME = "3", e.WEB_WORKER = "4", e.SANDBOX_IFRAME = "5", e.GTM_IFRAME = "6", e.URL_IN_QUERY_IFRAME = "7", e.UNKNOWN_IFRAME = "8"
    }(qn || (qn = {})),
    function(e) {
        e.EMPTY_VALUE = "empty_value", e.WRONG_FORMAT = "wrong_format", e.CORRECT_FORMAT = "correct_format", e.HASHED = "hashed", e.HASHED_ERR = "hashed_err", e.HASHED_CORRECT = "hashed_correct", e.PLAINTEXT_EMAIL = "plaintext_email", e.PLAINTEXT_PHONE = "plaintext_phone"
    }(Gn || (Gn = {})),
    function(e) {
        e.EMPTY_VALUE = "empty_value", e.PLAIN_EMAIL = "plain_email", e.PLAIN_PHONE = "plain_phone", e.HASHED = "hashed", e.FILTER_EVENTS = "filter_events", e.UNKNOWN_INVALID = "unknown_invalid", e.BASE64_STRING_HASHED = "base64_string_hashed", e.BASE64_HEX_HASHED = "base64_hex_hashed", e.PLAIN_MDN_EMAIL = "plain_mdn_email", e.ZIP_CODE_IS_NOT_HASHED = "zip_code_is_not_hashed", e.ZIP_CODE_IS_NOT_US = "zip_code_is_not_us", e.ZIP_CODE_IS_HASHED = "zip_code_is_hashed", e.ZIP_CODE_IS_US = "zip_code_is_us"
    }(Vn || (Vn = {})),
    function(e) {
        e.Manual = "manual", e.ManualV2 = "manual_v2", e.Auto = "auto"
    }(Hn || (Hn = {})),
    function(e) {
        e.empty = "empty", e.whitespace = "whitespace", e.hardcode = "hardcode", e.encode = "encode"
    }(Jn || (Jn = {})),
    function(e) {
        e.letterCase = "letter_case", e.isNotValidEmail = "is_not_valid_email", e.isNotPossibleEmail = "is_not_possible_email", e.domainTypo = "domain_typo", e.addressFormat = "address_format"
    }(Wn || (Wn = {})),
    function(e) {
        e.invalidCountry = "invalid_country", e.notANumber = "not_a_number", e.tooShort = "too_short", e.tooLong = "too_long", e.invalidLength = "invalid_length", e.emptyCountryCodeThroughIP = "empty_country_code_through_ip", e.invalidCountryAfterInjectPlus = "invalid_country_after_inject_plus", e.notANumberAfterInjectPlus = "not_a_number_after_inject_plus", e.tooShortAfterInjectPlus = "too_short_after_inject_plus", e.tooLongAfterInjectPlus = "too_long_after_inject_plus", e.invalidLengthAfterInjectPlus = "invalid_length_after_inject_plus", e.invalidCountryAfterInjectCountry = "invalid_country_after_inject_country", e.notANumberAfterInjectCountry = "not_a_number_after_inject_country", e.tooShortAfterInjectCountry = "too_short_after_inject_country", e.tooLongAfterInjectCountry = "too_long_after_inject_country", e.invalidLengthAfterInjectCountry = "invalid_length_after_inject_country"
    }(Kn || (Kn = {})),
    function(e) {
        e.missing = "missing", e.valid = "valid", e.invalid = "invalid"
    }(Yn || (Yn = {}));
    var zn, Qn, Zn, $n = {
        raw_email: {
            label: Yn.missing
        },
        raw_auto_email: {
            label: Yn.missing
        },
        raw_phone: {
            label: Yn.missing
        },
        raw_auto_phone: {
            label: Yn.missing
        },
        hashed_email: {
            label: Yn.missing
        },
        hashed_phone: {
            label: Yn.missing
        }
    };
    ! function(e) {
        e[e.UNKNOWN = 0] = "UNKNOWN", e[e.HOLD = 1] = "HOLD", e[e.REVOKE = 2] = "REVOKE", e[e.GRANT = 3] = "GRANT"
    }(zn || (zn = {})),
    function(e) {
        e[e.NOT_SURE = 0] = "NOT_SURE", e[e.INVOKE_METHOD_ENABLED = 1] = "INVOKE_METHOD_ENABLED", e[e.INVOKE_METHOD_NOT_ENABLED = 2] = "INVOKE_METHOD_NOT_ENABLED", e[e.TOUTIAO_BRIDGE_NOT_ENABLED = 3] = "TOUTIAO_BRIDGE_NOT_ENABLED"
    }(Qn || (Qn = {})),
    function(e) {
        e.PIXEL_CODE = "pixelCode", e.EVENT_SOURCE_ID = "eventSourceId", e.SHOP_ID = "shopId"
    }(Zn || (Zn = {}));
    var er = function(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        },
        tr = function(e) {
            return "{}" === JSON.stringify(e)
        },
        nr = function(e) {
            return "".concat(e, "-").concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12)
        },
        rr = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "-";
            return "".concat(e).concat(n).concat(t)
        },
        ir = function() {
            return new Date(Date.now() + 864e5).toUTCString()
        };

    function or(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
            n = -1;
        return function() {
            var r = Array.prototype.slice.apply(arguments),
                i = Date.now();
            i - n >= t && (e.apply(void 0, y(r)), n = Date.now())
        }
    }
    var ar, cr = "tt_adInfo",
        ur = "tt_appInfo",
        sr = "_tt_enable_cookie",
        lr = "_ttp",
        fr = "messageId",
        dr = "tt_sessionId",
        pr = "tt_pixel_session_index",
        hr = "default_eventId",
        _r = "::";
    ! function(e) {
        e.MUSICAL_LY = "musical_ly", e.MUSICALLY_GO = "musically_go", e.TRILL = "trill", e.ULTRALITE = "ultralite"
    }(ar || (ar = {}));
    var vr, gr, yr, mr, Er, br = {
        expires: 390
    };
    ! function(e) {
        e[e.OFFSITE = 0] = "OFFSITE", e[e.ONSITE = 1] = "ONSITE"
    }(vr || (vr = {})),
    function(e) {
        e.INIT_START = "initStart", e.INIT_END = "initEnd", e.CONTEXT_INIT_START = "contextInitStart", e.CONTEXT_INIT_END = "contextInitEnd", e.PAGE_URL_WILL_CHANGE = "pageUrlWillChange", e.PAGE_URL_DID_CHANGE = "pageUrlDidChange", e.PAGE_DID_LOAD = "pageDidLoad", e.PAGE_WILL_LEAVE = "pageWillLeave", e.AD_INFO_INIT_START = "adInfoInitStart", e.AD_INFO_INIT_END = "adInfoInitEnd", e.BEFORE_AD_INFO_INIT_START = "beforeAdInfoInitStart", e.PIXEL_SEND = "pixelSend", e.PIXEL_DID_MOUNT = "pixelDidMount"
    }(gr || (gr = {})),
    function(e) {
        e.UNKNOWN = "-1", e.LOADING = "0", e.INTERACTIVE = "1", e.COMPLETE = "2"
    }(yr || (yr = {})),
    function(e) {
        e.HISTORY_CHANGE = "hc", e.URL_CHANGE = "uc"
    }(mr || (mr = {})),
    function(e) {
        e.EXTERNAL = "external", e.APP = "app", e.TIKTOK = "tiktok"
    }(Er || (Er = {}));
    var wr, Ir = {
            ID: Symbol.for("ID"),
            Type: Symbol.for("type"),
            Partner: Symbol.for("partner"),
            Options: Symbol.for("Options"),
            Plugins: Symbol.for("Plugins"),
            Rules: Symbol.for("Rules"),
            Info: Symbol.for("Info"),
            ExtraParams: Symbol.for("extraParams"),
            WebLibraryInfo: Symbol.for("WebLibraryInfo"),
            SignalType: Symbol.for("SignalType"),
            IsOnsitePage: Symbol.for("IsOnsitePage")
        },
        Tr = "Pageview",
        Or = [],
        Sr = {
            TTQ: Symbol.for("TTQ"),
            GLOBAL_TTQ: Symbol.for("GLOBAL_TTQ"),
            SHOPIFY_TTQ: Symbol.for("SHOPIFY_TTQ"),
            ENV: Symbol.for("ENV"),
            CONTEXT: Symbol.for("CONTEXT"),
            REPORTER: Symbol.for("REPORTER"),
            REPORTERS: Symbol.for("REPORTERS"),
            PLUGIN: Symbol.for("PLUGIN"),
            PLUGINS: Symbol.for("PLUGINS"),
            TTQ_GLOBAL_OPTIONS: Symbol.for("TTQ_GLOBAL_OPTIONS"),
            PERFORMANCE_PLUGIN: Symbol.for("PERFORMANCE_PLUGIN"),
            INTERACTION_PLUGIN: Symbol.for("INTERACTION_PLUGIN"),
            INTERACTION_PLUGIN_MONITOR: Symbol.for("INTERACTION_PLUGIN_MONITOR"),
            PERFORMANCE_PLUGIN_MONITOR: Symbol.for("PERFORMANCE_PLUGIN_MONITOR"),
            ADVANCED_MATCHING_PLUGIN: Symbol.for("ADVANCED_MATCHING_PLUGIN"),
            AUTO_ADVANCED_MATCHING_PLUGIN: Symbol.for("AUTO_ADVANCED_MATCHING_PLUGIN"),
            CALLBACK_PLUGIN: Symbol.for("CALLBACK_PLUGIN"),
            IDENTIFY_PLUGIN: Symbol.for("IDENTIFY_PLUGIN"),
            MONITOR_PLUGIN: Symbol.for("MONITOR_PLUGIN"),
            WEB_FL_PLUGIN: Symbol.for("WEB_FL_PLUGIN"),
            SHOPIFY_PLUGIN: Symbol.for("SHOPIFY_PLUGIN"),
            AUTO_CONFIG_PLUGIN: Symbol.for("AUTO_CONFIG_PLUGIN"),
            DIAGNOSTICS_CONSOLE_PLUGIN: Symbol.for("DIAGNOSTICS_CONSOLE_PLUGIN"),
            COMPETITOR_INSIGHT_PLUGIN: Symbol.for("COMPETITOR_INSIGHT_PLUGIN"),
            PANGLE_COOKIE_MATCHING_PLUGIN: Symbol.for("PANGLE_COOKIE_MATCHING_PLUGIN"),
            EVENT_BUILDER_PLUGIN: Symbol.for("EVENT_BUILDER_PLUGIN"),
            ENRICH_IPV6_PLUGIN: Symbol.for("ENRICH_IPV6_PLUGIN"),
            RUNTIME_MEASUREMENT_PLUGIN: Symbol.for("RUNTIME_MEASUREMENT_PLUGIN"),
            PAGE_PERFORMANCE_MONITOR: Symbol.for("PAGE_PERFORMANCE_MONITOR"),
            PAGE_INTERACTION_MONITOR: Symbol.for("PAGE_INTERACTION_MONITOR"),
            PAGEDATA_PLUGIN: Symbol.for("PAGEDATA_PLUGIN"),
            HISTORY_OBSERVER: Symbol.for("HISTORY_OBSERVER"),
            BATCH_SERVICE: Symbol.for("BATCH_SERVICE"),
            REPORT_SERVICE: Symbol.for("REPORT_SERVICE"),
            AD_SERVICE: Symbol.for("AD_SERVICE"),
            APP_SERVICE: Symbol.for("APP_SERVICE"),
            BRIDGE_SERVICE: Symbol.for("BRIDGE"),
            HTTP_SERVICE: Symbol.for("HTTP_SERVICE"),
            COOKIE_SERVICE: Symbol.for("COOKIE_SERVICE"),
            CONSENT_SERVICE: Symbol.for("CONSENT_SERVICE"),
            JS_BRIDGE: Symbol.for("JS_BRIDGE"),
            TTQ_REPORTERS: Symbol.for("TTQ_REPORTERS"),
            INTERACTION_MONITOR: Symbol.for("INTERACTION_MONITOR"),
            PERFORMANCE_MONITOR: Symbol.for("PERFORMANCE_MONITOR"),
            SANDBOX_PIXEL_API: Symbol("SANDBOX_PIXEL_API")
        };
    ! function(e) {
        e.TRACK = "track", e.PERFORMANCE = "performance", e.INTERACTION = "interaction", e.PCM = "PCM", e.PERFORMANCE_INTERACTION = "performance_interaction", e.SELFHOST = "selfhost", e.AUTO_CONFIG = "auto_config", e.PAGE = "Pf", e.PAGE_PERFORMANCE = "page_performance", e.PAGE_INTERACTION = "page_interaction"
    }(wr || (wr = {}));
    var Nr, Ar, Rr = ["EnrichAM"],
        Pr = "https://analytics.tiktok.com/api/v2",
        Cr = "".concat(Pr, "/pixel"),
        kr = "".concat(Pr, "/performance"),
        Mr = "".concat(Pr, "/interaction"),
        Lr = "".concat(Pr, "/performance_interaction"),
        Dr = "".concat(Pr, "/pixel/perf"),
        xr = "".concat(Pr, "/pixel/inter"),
        jr = "".concat(Pr, "/pixel/act"),
        Ur = "ttclid",
        Fr = "_toutiao_params",
        Br = ["phone_number", "email", "external_id"],
        qr = "email_is_hashed",
        Gr = "phone_is_hashed",
        Vr = "sha256_email",
        Hr = "sha256_phone",
        Jr = "auto_trigger_type";
    ! function(e) {
        e.LOAD_START = "load_start", e.LOAD_END = "load_end", e.BEFORE_INIT = "before_init", e.INIT_START = "init_start", e.INIT_END = "init_end", e.JSB_INIT_START = "jsb_init_start", e.JSB_INIT_END = "jsb_init_end", e.BEFORE_AD_INFO_INIT_START = "before_ad_info_init_start", e.AD_INFO_INIT_START = "ad_info_init_start", e.AD_INFO_INIT_END = "ad_info_init_end", e.IDENTIFY_INIT_START = "identify_init_start", e.IDENTIFY_INIT_END = "identify_init_end", e.PLUGIN_INIT_START = "_init_start", e.PLUGIN_INIT_END = "_init_end", e.PIXEL_SEND = "pixel_send", e.PIXEL_SEND_PCM = "pixel_send_PCM", e.JSB_SEND = "jsb_send", e.HTTP_SEND = "http_send", e.HANDLE_CACHE = "handle_cache", e.INIT_ERROR = "init_error", e.PIXEL_EMPTY = "pixel_empty", e.JSB_ERROR = "jsb_error", e.API_ERROR = "api_error", e.PLUGIN_ERROR = "plugin_error", e.CUSTOM_INFO = "custom_info", e.CUSTOM_ERROR = "custom_error", e.CUSTOM_TIMER = "custom_timer"
    }(Nr || (Nr = {})),
    function(e) {
        e.EMPTY_EVENT_TYPE_NAME = "EMPTY_EVENT_TYPE_NAME", e.MISMATCHED_EVENT_TYPE_NAME_FOR_CUSTOM_EVENT = "MISMATCHED_EVENT_TYPE_NAME_FOR_CUSTOM_EVENT", e.LONG_EVENT_TYPE_NAME = "LONG_EVENT_TYPE_NAME", e.MISSING_VALUE_PARAMETER = "MISSING_VALUE_PARAMETER", e.MISSING_CURRENCY_PARAMETER = "MISSING_CURRENCY_PARAMETER", e.MISSING_CONTENT_ID = "MISSING_CONTENT_ID", e.MISSING_EMAIL_AND_PHONE = "MISSING_EMAIL_AND_PHONE", e.INVALID_EVENT_PARAMETER_VALUE = "INVALID_EVENT_PARAMETER_VALUE", e.INVALID_CURRENCY_CODE = "INVALID_CURRENCY_CODE", e.INVALID_CONTENT_ID = "INVALID_CONTENT_ID", e.INVALID_CONTENT_TYPE = "INVALID_CONTENT_TYPE", e.INVALID_EMAIL_FORMAT = "INVALID_EMAIL_FORMAT", e.INVALID_PHONE_NUMBER_FORMAT = "INVALID_PHONE_NUMBER_FORMAT", e.INVALID_EMAIL_INFORMATION = "INVALID_EMAIL_INFORMATION", e.INVALID_PHONE_NUMBER_INFORMATION = "INVALID_PHONE_NUMBER_INFORMATION", e.DUPLICATE_PIXEL_CODE = "DUPLICATE_PIXEL_CODE", e.MISSING_PIXEL_CODE = "MISSING_PIXEL_CODE", e.INVALID_PIXEL_CODE = "INVALID_PIXEL_CODE"
    }(Ar || (Ar = {}));
    var Wr = null,
        Kr = function() {
            return "undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof global ? global : new Function("return this")()
        },
        Yr = function() {
            return Kr().TiktokAnalyticsObject || "ttq"
        },
        Xr = function() {
            var e = Kr();
            return Wr || e[Yr()]
        },
        zr = function() {
            return !!Xr()._is_onsite
        },
        Qr = function() {
            var e = Kr();
            return ("object" === ("undefined" == typeof navigator ? "undefined" : t(navigator)) && navigator.userAgent ? navigator.userAgent : "") || e._userAgent
        },
        Zr = function(e) {
            try {
                var t = Xr();
                return t && t._self_host_config && t._self_host_config[e] || ""
            } catch (e) {
                return ""
            }
        },
        $r = function(e) {
            var t = Xr(),
                n = t._i || {},
                r = e && n[e];
            return e && r && r._partner ? r._partner : t._partner ? t._partner : ""
        },
        ei = function(e) {
            var t = Xr(),
                n = t._i || {};
            return Object.keys(n).filter((function(t) {
                return n[t]._partner === e
            })).length > 0 || t._partner === e
        },
        ti = function(e) {
            try {
                var t = Xr()._plugins || {};
                return null == t[e] || !!t[e]
            } catch (e) {
                return !0
            }
        },
        ni = function() {
            var e;
            try {
                var t = Xr()._ppf;
                return null === (e = t.printAndClear) || void 0 === e ? void 0 : e.call(t)
            } catch (e) {}
        };
    var ri = function(e) {
            return Boolean(e)
        },
        ii = function(e) {
            return void 0 !== e.metric_name
        },
        oi = function(e) {
            return ii(e) ? "insight_log_monitor" : "insight_log"
        },
        ai = function(e) {
            var t;
            return Object.keys((null === (t = null == e ? void 0 : e.context) || void 0 === t ? void 0 : t.user) || {}).some((function(e) {
                return -1 !== Br.indexOf(e)
            }))
        };

    function ci(e, t) {
        var n, r = e;
        return function() {
            if (r) {
                for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                n = e.apply(t, o), r = null
            }
            return n
        }
    }
    var ui = function(e) {
        return ((e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce(((e, t) => e + ((t &= 63) < 36 ? t.toString(36) : t < 62 ? (t - 26).toString(36).toUpperCase() : t > 62 ? "-" : "_")), ""))(e)
    };

    function si(e, t) {
        var n = Object.assign({}, e);
        return t.forEach((function(e) {
            null !== n[e] && void 0 !== n[e] && delete n[e]
        })), n
    }
    var li = function(e, t) {
        if (!e) return {};
        var n = {};
        return Object.keys(e).forEach((function(r) {
            t[r] && (n[r] = e[r])
        })), n
    };

    function fi(e, t, n) {
        var r;
        return function() {
            for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
            clearTimeout(r), r = setTimeout((function() {
                e.apply(n, o)
            }), t)
        }
    }

    function di() {
        return pi.apply(this, arguments)
    }

    function pi() {
        return pi = r(e().mark((function t() {
            var n, r = arguments;
            return e().wrap((function(e) {
                for (;;) switch (e.prev = e.next) {
                    case 0:
                        return n = r.length > 0 && void 0 !== r[0] ? r[0] : 500, e.abrupt("return", new Promise((function(e) {
                            setTimeout((function() {
                                e(!0)
                            }), n)
                        })));
                    case 2:
                    case "end":
                        return e.stop()
                }
            }), t)
        }))), pi.apply(this, arguments)
    }
    var hi = ["input[type='button']", "input[type='image']", "input[type='submit']", "button", "[class*=btn]", "[class*=Btn]", "[class*=button]", "[class*=Button]", "[role*=button]", "[id*=btn]", "[id*=Btn]", "[id*=button]", "[id*=Button]", "a"],
        _i = ["[href^='tel:']", "[href^='callto:']", "[href^='sms:']", "[href^='skype:']", "[href^='whatsapp:']", "[href^='mailto:']"],
        vi = function(e) {
            var t = hi.some((function(t) {
                    return e.matches(t)
                })),
                n = _i.some((function(t) {
                    return e.matches(t)
                }));
            return t && !n
        };

    function gi(e, n) {
        var r = {};
        for (var i in e)
            if (e.hasOwnProperty(i) && !n.hasOwnProperty(i)) r[i] = e[i];
            else if (e.hasOwnProperty(i) && n.hasOwnProperty(i) && e[i] !== n[i])
            if ("object" === t(e[i]) && "object" === t(n[i])) {
                var o = gi(e[i], n[i]);
                Object.keys(o).length > 0 && (r[i] = o)
            } else r[i] = e[i];
        for (var a in n) n.hasOwnProperty(a) && !e.hasOwnProperty(a) && (r[a] = n[a]);
        return r
    }

    function yi(e, t) {
        return Object.keys(gi(e, t)).length > 0
    }

    function mi(e, t) {
        var n = {};
        return e && (function(e) {
            return "string" == typeof e
        }(e) || function(e) {
            return "number" == typeof e
        }(e) ? n.external_id = e.toString() : er(e) && (n = e)), t && er(t) && Object.assign(n, t), n
    }
    var Ei = function(e) {
            try {
                if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                    taskName: window.ttq._pf_tn,
                    functionName: "getPixelInstalledPosition",
                    start: performance.now()
                }
            } catch (e) {}
            var n = "unknown";
            try {
                var r = e && function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                            taskName: window.ttq._pf_tn,
                            functionName: "getPixelScriptByPixelCode",
                            start: performance.now()
                        }
                    } catch (e) {}
                    for (var n, r = Array.prototype.slice.call(document.getElementsByTagName("script")), i = 0; i < r.length; i++) {
                        var o = r[i];
                        if (o.innerHTML && o.innerHTML.indexOf(e) > -1) {
                            n = o;
                            break
                        }
                    }
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
                    } catch (e) {}
                    return n
                }(e);
                r && (bi(r) && (n = "isInHead"), wi(r) && (n = "isInBodyTop10"))
            } catch (e) {}
            try {
                window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
            } catch (e) {}
            return n
        },
        bi = function e(t) {
            var n = t.parentElement;
            return !!n && ("HEAD" === n.tagName || e(n))
        },
        wi = function(e) {
            return function(e, n) {
                for (var r, i = [document.body], o = 0; o <= e && i.length;) {
                    var a = i.pop();
                    if (a === n) return !0;
                    if (!("script" === (null == a ? void 0 : a.tagName.toLowerCase()) && (null === (r = a.src) || void 0 === r ? void 0 : r.indexOf("analytics.tiktok.com")) > -1) && (o++, "object" === t(a) && a.children))
                        for (var c = a.children.length - 1; c >= 0; c--) i.push(a.children[c])
                }
                return !1
            }(10, e)
        };

    function Ii(e, t) {
        try {
            var n = new URL(e).searchParams.getAll(t);
            return n[n.length - 1] || ""
        } catch (e) {
            return ""
        }
    }
    var Ti = function(e, t, n) {
            try {
                var r = Ii(t, e);
                return r || Ii(n || "", e)
            } catch (e) {}
            return ""
        },
        Oi = function() {
            var e, t;
            if (!Li()) return {
                url: window.location.href,
                referrer: document.referrer
            };
            if (!Ui()) return {
                url: (null === (e = null === window || void 0 === window ? void 0 : window.top) || void 0 === e ? void 0 : e.location.href) || "",
                referrer: (null === (t = null === window || void 0 === window ? void 0 : window.top) || void 0 === t ? void 0 : t.document.referrer) || ""
            };
            var n = window.location.href,
                r = document.referrer;
            if (/doubleclick\.net/.test(window.location.hostname)) {
                var i = window.location.pathname,
                    o = {};
                return i.split(";").forEach((function(e) {
                    var t = v(e.split("="), 2),
                        n = t[0],
                        r = t[1];
                    o[n] = decodeURIComponent(r)
                })), {
                    url: o["~oref"] || n,
                    referrer: document.referrer
                }
            }
            return {
                url: n,
                referrer: r
            }
        },
        Si = function() {
            var e, t;
            return (null === (t = null === (e = Xr()) || void 0 === e ? void 0 : e._env) || void 0 === t ? void 0 : t.env) || Er.EXTERNAL
        },
        Ni = function() {
            var e, t;
            return null !== (t = null === (e = Xr()) || void 0 === e ? void 0 : e._is_onsite) && void 0 !== t ? t : vr.OFFSITE
        },
        Ai = function(e) {
            return (e || Si()) !== Er.EXTERNAL
        },
        Ri = function(e) {
            return (e || Si()) === Er.TIKTOK
        },
        Pi = function() {
            var e = Qr();
            return /windows phone/i.test(e) ? "Windows Phone" : /android/i.test(e) ? "android" : /iPad|iPhone|iPod/.test(e) ? "ios" : "pc"
        },
        Ci = function() {
            try {
                return navigator.userAgentData.getHighEntropyValues(["model", "platformVersion"])
            } catch (e) {
                return Promise.resolve({})
            }
        },
        ki = function() {
            return "android" === Pi()
        },
        Mi = function() {
            return "ios" === Pi()
        },
        Li = function() {
            return window.top !== window
        },
        Di = ci((function() {
            return /open_news/i.test(Qr())
        })),
        xi = ci((function() {
            return /ultralite/i.test(Qr())
        }));

    function ji() {
        var e;
        return [Qn.INVOKE_METHOD_ENABLED, Qn.INVOKE_METHOD_NOT_ENABLED, Qn.TOUTIAO_BRIDGE_NOT_ENABLED][
            [!!(null === (e = null === window || void 0 === window ? void 0 : window.ToutiaoJSBridge) || void 0 === e ? void 0 : e.invokeMethod), !!(null === window || void 0 === window ? void 0 : window.ToutiaoJSBridge), !0].findIndex((function(e) {
                return e
            }))
        ]
    }
    var Ui = function() {
            try {
                return window && window.top && window.top.location.href, !1
            } catch (e) {
                return !0
            }
        },
        Fi = function() {
            try {
                return Ui() ? function() {
                    try {
                        var e = new URL(decodeURIComponent(window.location.href)),
                            t = /https?:\/\/[^\s/$.?#].[^\s]*/i;
                        return t.test(e.search) || t.test(e.pathname)
                    } catch (e) {
                        return !1
                    }
                }() ? qn.URL_IN_QUERY_IFRAME : window.google_tag_manager ? qn.GTM_IFRAME : window.name && "web-pixel-sandbox" === window.name ? qn.SANDBOX_IFRAME : qn.CROSS_DOMAIN_IFRAME : qn.NOT_CROSS_DOMAIN_IFRAME
            } catch (e) {
                return qn.UNKNOWN_IFRAME
            }
        },
        Bi = function() {
            return (void 0 !== (e = Kr()).DedicatedWorkerGlobalScope ? e instanceof e.DedicatedWorkerGlobalScope : "DedicatedWorkerGlobalScope" === e.constructor.name) ? qn.WEB_WORKER : Li() ? Fi() : qn.NORMAL;
            var e
        },
        qi = function() {
            var e = Qr();
            if (e)
                for (var t = 0, n = Object.values(ar); t < n.length; t++) {
                    var r = n[t];
                    if (e.includes(r)) return r
                }
        },
        Gi = function() {
            var e = qi(),
                t = Mi() ? function() {
                    var e = Qr();
                    if (e)
                        for (var t = 0, n = Object.keys(ar); t < n.length; t++) {
                            var r = n[t],
                                i = new RegExp("\\b".concat(ar[r], "_(\\S*)")),
                                o = e.match(i),
                                a = o && o[1] ? o[1].match(/^\d+\.\d+\.\d+$/) : void 0;
                            if (a) return a[0]
                        }
                }() : ki() ? function() {
                    var e = Qr();
                    if (e) {
                        var t = e.match(/\bapp_version\/(\S*)/),
                            n = t && t[1] ? t[1].match(/^\d+\.\d+\.\d+$/) : void 0;
                        return n ? n[0] : void 0
                    }
                }() : null;
            return !(!t || !e || e != ar.MUSICAL_LY && e != ar.TRILL) && (Mi() ? Vi("33.4.0", t) : !ki() || Vi("23.1.0", t))
        },
        Vi = function(e, t) {
            for (var n = e.split("."), r = t.split("."), i = 0; i < Math.max(n.length, r.length); i++) {
                var o = parseInt(n[i]) || Number.MAX_VALUE,
                    a = parseInt(r[i]) || -1;
                if (o < a) return !0;
                if (o > a) return !1
            }
            return !0
        },
        Hi = function() {
            return function(e) {
                var t = qi();
                return void 0 !== t && e.has(t)
            }(new Set([ar.MUSICAL_LY, ar.TRILL, ar.ULTRALITE]))
        },
        Ji = {
            info: [],
            error: []
        };

    function Wi(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        try {
            var r = Xr(),
                i = r.getPlugin && r.getPlugin("Monitor") || null;
            i && i.info && "function" == typeof i.info ? i.info.call(i, e, t, n) : ti("Monitor") && Ji.info.push({
                event: e,
                detail: t,
                withoutJSB: n
            })
        } catch (e) {}
    }

    function Ki(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        try {
            var i = Xr(),
                o = i.getPlugin && i.getPlugin("Monitor") || null;
            o && o.error && "function" == typeof o.error ? o.error.call(o, e, t, n, r) : ti("Monitor") && Ji.error.push({
                event: e,
                err: t,
                detail: n,
                withoutJSB: r
            })
        } catch (e) {}
    }

    function Yi(e, t) {
        try {
            var n = Xr(),
                r = n.getPlugin && n.getPlugin("DiagnosticsConsole") || null;
            r && r.warn.apply(r, [e, t])
        } catch (e) {}
    }

    function Xi() {
        try {
            if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var e = {
                taskName: window.ttq._pf_tn,
                functionName: "getPixelDetail",
                start: performance.now()
            }
        } catch (e) {}
        var t = {
            lib: "ttq",
            pixelCode: "MOCK_SHOP_ID"
        };
        try {
            var n = document && document.currentScript;
            t = {
                pixelCode: n && n.getAttribute("data-id") || "",
                lib: Yr() || "ttq"
            }
        } catch (e) {
            t = {
                lib: "ttq",
                pixelCode: ""
            }
        }
        try {
            window.ttq && window.ttq._ppf && (e.end = performance.now(), window.ttq._ppf.push(e))
        } catch (e) {}
        return t
    }
    var zi = function(e, t) {
            if ("selfhost" === e && t && Zr(t)) return "https://".concat(Zr(t), "/api/v2/pixel");
            var n = {
                track: Cr,
                performance: kr,
                interaction: Mr,
                performance_interaction: Lr,
                auto_config: jr,
                page_performance: Dr,
                page_interaction: xr
            }[e];
            return n || null
        },
        Qi = function(e) {
            try {
                var t = window.sessionStorage.getItem(e);
                return t ? JSON.parse(t) : null
            } catch (e) {
                return null
            }
        },
        Zi = function(e, t) {
            try {
                var n = JSON.stringify(t);
                window.sessionStorage.setItem(e, n)
            } catch (e) {}
        },
        $i = 0,
        eo = 0,
        to = function(e) {
            if (0 === document.cookie.length) return "";
            var t, n, r = (t = e, n = {}, document.cookie.split(";").forEach((function(e) {
                var t = e.split("="),
                    r = t[0].trim();
                n[r] = t.slice(1).join("=")
            })), n[t] || "");
            return r ? unescape(r) : ""
        },
        no = function(e, t, n) {
            try {
                if (n) {
                    var r = window.location.hostname.split(".");
                    if (eo = r.length, ($i = oo()) && $i < eo) return n.domain = ".".concat(r.slice(eo - $i - 1).join(".")), void ao(e, t, n);
                    for (var i = "", o = 0; o < eo && (i = ".".concat(r[eo - o - 1]).concat(i), n.domain = i, $i = o, !ao(e, t, n)); o++);
                } else document.cookie = "".concat(e, "=").concat(t).concat(co(n))
            } catch (e) {}
        },
        ro = function(e) {
            var t = e.index,
                n = e.main;
            sessionStorage.setItem(pr, JSON.stringify({
                index: t,
                main: n
            }))
        },
        io = function(e) {
            var t = e.split(".");
            return t.length >= 3 && t.includes("tt") && !isNaN(Number(t[2])) && Number(t[2]) > 0
        },
        oo = function() {
            if ($i) return $i;
            var e = to(lr);
            return e && io(e) ? Number(e.split(".")[2]) : 0
        },
        ao = function(e, t, n) {
            return e !== lr || io(t) || (t = function(e) {
                return e ? "".concat(e.split(".")[0], ".tt.").concat(oo()) : ""
            }(t)), document.cookie = "".concat(e, "=").concat(t).concat(co(n)), t === to(e)
        },
        co = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = Object.assign({}, {
                    path: "/"
                }, e);
            "number" == typeof t.expires && (t.expires = new Date(Date.now() + 864e5 * t.expires)), t.expires instanceof Date && (t.expires = t.expires.toUTCString());
            var n = "";
            for (var r in t) t[r] && (n += "; ".concat(r), !0 !== t[r] && (n += "=".concat(t[r].split(";")[0])));
            return n
        },
        uo = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/",
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ir(),
                i = {
                    path: n,
                    expires: r
                };
            no(e, t, i)
        };

    function so() {
        try {
            var e = document.readyState;
            return "loading" == e ? yr.LOADING : "interactive" == e ? yr.INTERACTIVE : "complete" == e ? yr.COMPLETE : yr.UNKNOWN
        } catch (e) {
            return yr.UNKNOWN
        }
    }

    function lo(e) {
        return new Promise((function(t, n) {
            var r = document.createElement("script");
            r.type = "text/javascript", r.async = !0, r.src = e;
            var i = document.getElementsByTagName("script")[0];
            i && i.parentNode ? i.parentNode.insertBefore(r, i) : n("none element"), r.onload = function() {
                t(!0)
            }, r.onerror = n
        }))
    }
    var fo = function() {
            var t = r(e().mark((function t(n) {
                var r, i = arguments;
                return e().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (!((r = i.length > 1 && void 0 !== i[1] ? i[1] : 1) >= 0)) {
                                e.next = 13;
                                break
                            }
                            return e.prev = 2, e.next = 5, lo(n);
                        case 5:
                            return e.abrupt("return", Promise.resolve(!0));
                        case 8:
                            return e.prev = 8, e.t0 = e.catch(2), e.abrupt("return", fo.call(null, n, r - 1));
                        case 11:
                            e.next = 14;
                            break;
                        case 13:
                            throw Error;
                        case 14:
                        case "end":
                            return e.stop()
                    }
                }), t, null, [
                    [2, 8]
                ])
            })));
            return function(e) {
                return t.apply(this, arguments)
            }
        }(),
        po = function(e) {
            return "function" == typeof Promise.allSettled ? Promise.allSettled(e) : function(e) {
                var t = new Array(e.length),
                    n = 0;
                return new Promise((function(r, i) {
                    for (var o = function(i) {
                            var o = e[i];
                            o && "function" == typeof o.then ? o.then((function(o) {
                                t[i] = {
                                    status: "fulfilled",
                                    value: o
                                }, ++n === e.length && r(t)
                            })).catch((function(o) {
                                t[i] = {
                                    status: "rejected",
                                    reason: o
                                }, ++n === e.length && r(t)
                            })) : (t[i] = {
                                status: "fulfilled",
                                value: o
                            }, ++n === e.length && r(t))
                        }, a = 0; a < e.length; a++) o(a)
                }))
            }(e)
        },
        ho = ["COP", "USD", "DZD", "TWD", "QAR", "VES", "NGN", "EGP", "IDR", "HNL", "ISK", "CRC", "PEN", "AED", "GBP", "BOB", "DKK", "CAD", "PKR", "MXN", "HUF", "VND", "KWD", "RON", "BIF", "MYR", "ZAR", "SAR", "NOK", "SGD", "HKD", "AUD", "CHF", "KRW", "CNY", "TRY", "BDT", "NZD", "CLP", "THB", "EUR", "ARS", "NIO", "KZT", "GTQ", "RUB", "SEK", "MOP", "PYG", "INR", "JPY", "CZK", "BRL", "MAD", "PLN", "PHP", "KES", "ILS"];

    function _o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            n = t || ho;
        return n.includes(e)
    }

    function vo(e) {
        return !isNaN(e) && e >= 0
    }
    var go = String.fromCharCode.bind(String),
        yo = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
        mo = function(e) {
            if (e.length < 2) {
                var t = e.charCodeAt(0);
                return t < 128 ? e : t < 2048 ? go(192 | t >>> 6) + go(128 | 63 & t) : go(224 | t >>> 12 & 15) + go(128 | t >>> 6 & 63) + go(128 | 63 & t)
            }
            var n = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
            return go(240 | n >>> 18 & 7) + go(128 | n >>> 12 & 63) + go(128 | n >>> 6 & 63) + go(128 | 63 & n)
        },
        Eo = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
        bo = function(e) {
            return function(e) {
                return e.replace(/=/g, "").replace(/[+\/]/g, (function(e) {
                    return "+" === e ? "-" : "_"
                }))
            }(function(e) {
                for (var t, n, r, i, o = "", a = e.length % 3, c = 0; c < e.length;) {
                    if ((n = e.charCodeAt(c++)) > 255 || (r = e.charCodeAt(c++)) > 255 || (i = e.charCodeAt(c++)) > 255) throw new TypeError("invalid character found");
                    o += yo[(t = n << 16 | r << 8 | i) >> 18 & 63] + yo[t >> 12 & 63] + yo[t >> 6 & 63] + yo[63 & t]
                }
                return a ? o.slice(0, a - 3) + "===".substring(a) : o
            }(function(e) {
                return e.replace(Eo, mo)
            }(e)))
        },
        wo = function(e) {
            return t = JSON.stringify(e), bo(t);
            var t
        },
        Io = function() {
            var e = Xr();
            return "object" === t(e) && e._i ? e._i : {}
        },
        To = function(e, t) {
            var n = Io() || {};
            Object.keys(n).forEach((function(r) {
                var i = n[r];
                i._init || i.push([e].concat(t))
            }))
        },
        Oo = function(e, t, n) {
            var r = (Io() || {})[e];
            if (r) {
                if (r._init) return;
                r.push([t].concat(n))
            }
        },
        So = function(e, t) {
            try {
                var n = Ti(Ur, e, t) || void 0,
                    r = Ti("ext_params", e, t) || void 0,
                    i = Ti(Fr, e, t) || void 0,
                    o = parseInt(Ti("ttuts", e, t), 10) || void 0,
                    a = i ? JSON.parse(i) : {},
                    c = a.log_extra,
                    u = void 0 === c ? void 0 : c,
                    s = a.idc,
                    l = void 0 === s ? void 0 : s,
                    f = a.cid,
                    d = void 0 === f ? void 0 : f;
                return {
                    callback: n,
                    ext_params: r,
                    log_extra: u,
                    creative_id: d,
                    idc: l,
                    ttuts: o,
                    ad_info_from: (u || l || d) && "url"
                }
            } catch (e) {
                return {}
            }
        },
        No = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Ao = function() {
            function e(t) {
                i(this, e), this.userFormatInfo = {}, this.userFormatInfoV2 = {}, this.enableAdTracking = !0, this.offsiteAdInfo = {}, this.tt_test_id = "", this.signalDiagnosticLabels = Object.assign({}, $n), this.init(t)
            }
            return a(e, [{
                key: "init",
                value: function(e) {
                    this.userInfo = {}, this.adInfo = {}, this.appInfo = {}, this.pageInfo = {
                        url: "",
                        referrer: ""
                    }, this.pageSign = {
                        sessionId: "",
                        pageId: ""
                    }, this.libraryInfo = e
                }
            }, {
                key: "getAllData",
                value: function() {
                    return {
                        userInfo: this.userInfo,
                        adInfo: this.adInfo,
                        appInfo: this.appInfo,
                        libraryInfo: this.libraryInfo,
                        pageInfo: this.pageInfo,
                        pageSign: this.pageSign,
                        signalType: this.signalType,
                        userFormatInfo: this.userFormatInfo,
                        userFormatInfoV2: this.userFormatInfoV2,
                        enableAdTracking: this.enableAdTracking,
                        offsiteAdInfo: this.offsiteAdInfo,
                        tt_test_id: this.tt_test_id
                    }
                }
            }, {
                key: "getLibraryInfo",
                value: function() {
                    return this.libraryInfo
                }
            }, {
                key: "setSignalType",
                value: function(e) {
                    this.signalType = e
                }
            }, {
                key: "getSignalType",
                value: function() {
                    return this.signalType
                }
            }, {
                key: "setTestID",
                value: function(e) {
                    this.tt_test_id = e
                }
            }, {
                key: "getTestID",
                value: function() {
                    return this.tt_test_id
                }
            }, {
                key: "setEnableAdTracking",
                value: function(e) {
                    this.enableAdTracking = e
                }
            }, {
                key: "getEnableAdTracking",
                value: function() {
                    return this.enableAdTracking
                }
            }, {
                key: "setOffsiteAdInfo",
                value: function(e) {
                    this.offsiteAdInfo = Object.assign({}, this.offsiteAdInfo, e)
                }
            }, {
                key: "getOffsiteAdInfo",
                value: function() {
                    return this.offsiteAdInfo
                }
            }, {
                key: "getUserFormatInfo",
                value: function() {
                    return this.userFormatInfo
                }
            }, {
                key: "setUserFormatInfo",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object.assign(this.userFormatInfo, e)
                }
            }, {
                key: "getUserFormatInfoV2",
                value: function() {
                    return this.userFormatInfoV2
                }
            }, {
                key: "setUserFormatInfoV2",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object.assign(this.userFormatInfoV2, e)
                }
            }, {
                key: "setUserInfo",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    Object.assign(this.userInfo, e)
                }
            }, {
                key: "setUserInfoWithoutIdentifyPlugin",
                value: function(e) {
                    e && Object.assign(this.userInfo, e)
                }
            }, {
                key: "getUserInfo",
                value: function() {
                    return this.userInfo
                }
            }, {
                key: "getAdInfo",
                value: function() {
                    return this.adInfo
                }
            }, {
                key: "setAdInfo",
                value: function(e) {
                    e && (this.adInfo ? this.adInfo = Object.assign({}, this.adInfo, e) : this.adInfo = e)
                }
            }, {
                key: "getAppInfo",
                value: function() {
                    return this.appInfo
                }
            }, {
                key: "setAppInfo",
                value: function(e) {
                    e && (this.appInfo = Object.assign({}, this.appInfo, e))
                }
            }, {
                key: "getPageInfo",
                value: function() {
                    return this.pageInfo
                }
            }, {
                key: "getPageSign",
                value: function() {
                    return this.pageSign
                }
            }, {
                key: "setPageInfo",
                value: function(e, t) {
                    var n = Object.assign({}, this.pageInfo),
                        r = Object.assign({}, this.pageSign);
                    if (n.url !== e) {
                        var i = n.url;
                        if (void 0 !== n.url && (n.referrer = n.url), void 0 !== t && (n.referrer = t), void 0 !== r.pageIndex) {
                            var o = r.pageIndex,
                                a = o.index,
                                c = o.sub,
                                u = o.main;
                            r.pageIndex = {
                                index: ++a,
                                sub: ++c,
                                main: u
                            }
                        }
                        return n.url = e, this.pageInfo = n, this.pageSign = r, {
                            from: i,
                            pageIndex: r.pageIndex
                        }
                    }
                }
            }, {
                key: "setPageInfoData",
                value: function(e) {
                    this.pageInfo = Object.assign({}, this.pageInfo, e)
                }
            }, {
                key: "getSessionIdFromCache",
                value: function() {
                    return null
                }
            }, {
                key: "setSessionIdToCache",
                value: function(e) {}
            }, {
                key: "setSignalDiagnosticLabels",
                value: function(e) {
                    Object.assign(this.signalDiagnosticLabels, e)
                }
            }, {
                key: "getSignalDiagnosticLabels",
                value: function() {
                    return this.signalDiagnosticLabels
                }
            }, {
                key: "getPageId",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "".concat(Date.now());
                    return "".concat(e, "-").concat(ui(5))
                }
            }, {
                key: "getPageViewId",
                value: function() {
                    var e = this.pageSign,
                        t = e.pageId,
                        n = e.pageIndex;
                    return "".concat(t).concat(n ? ".".concat(n.main, ".").concat(n.sub) : "")
                }
            }, {
                key: "getVariationId",
                value: function() {
                    return ""
                }
            }, {
                key: "isLegacyPixel",
                value: function(e) {
                    return !1
                }
            }, {
                key: "initPageSign",
                value: function() {
                    var e = this.getSessionIdFromCache();
                    null === e && (e = nr("sessionId"), this.setSessionIdToCache(e));
                    var t = {
                        sessionId: e,
                        pageId: nr("pageId")
                    };
                    this.pageSign = t
                }
            }]), e
        }();
    Ao = No([A.injectable()], Ao);
    var Ro = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Po = function() {
            function e() {
                i(this, e), this.events = {}
            }
            return a(e, [{
                key: "on",
                value: function(e, t) {
                    var n = this.events[e] || [];
                    n.push(t), this.events[e] = n
                }
            }, {
                key: "emit",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var i = this.events[e] || [];
                    i.forEach((function(e) {
                        return e.apply(void 0, n)
                    }))
                }
            }, {
                key: "off",
                value: function(e, t) {
                    var n = this.events[e] || [];
                    this.events[e] = n.filter((function(e) {
                        return e !== t
                    }))
                }
            }]), e
        }();
    Po = Ro([A.injectable()], Po);
    var Co = function() {
        function e(t) {
            i(this, e), this.pixelCode = "", this.loaded = !1, this.status = 1, this.name = "", this.advertiserID = "", this.setupMode = 0, this.partner = "", this.reporterInfo = {}, this.plugins = {}, this.options = {}, this.rules = [], this.pixelCode = t
        }
        return a(e, [{
            key: "getParameterInfo",
            value: function() {
                return Promise.resolve({
                    pixelCode: this.pixelCode,
                    name: this.name,
                    status: this.status,
                    setupMode: this.setupMode,
                    advertiserID: this.advertiserID,
                    partner: this.partner,
                    is_onsite: !1,
                    advancedMatchingAvailableProperties: {}
                })
            }
        }, {
            key: "getReporterId",
            value: function() {
                return ""
            }
        }, {
            key: "getReporterUniqueLoadId",
            value: function() {
                return ""
            }
        }, {
            key: "getReporterPartner",
            value: function() {}
        }, {
            key: "getReporterInfo",
            value: function() {
                return {
                    reporter: {}
                }
            }
        }, {
            key: "getReportResultSet",
            value: function() {
                return []
            }
        }, {
            key: "isOnsite",
            value: function() {
                return !1
            }
        }, {
            key: "isPartnerReporter",
            value: function() {
                return !1
            }
        }, {
            key: "setAdvancedMatchingAvailableProperties",
            value: function(e) {}
        }, {
            key: "clearHistory",
            value: function() {}
        }, {
            key: "page",
            value: function(e) {}
        }, {
            key: "track",
            value: function(e, t, n) {
                return Promise.resolve(null)
            }
        }, {
            key: "getUserInfo",
            value: function(e) {
                return {}
            }
        }, {
            key: "getReporterMatchedUserFormatInfo",
            value: function() {
                return {}
            }
        }, {
            key: "getReporterMatchedUserFormatInfoV2",
            value: function() {
                return {}
            }
        }, {
            key: "assemblyData",
            value: function() {
                return {
                    event: "",
                    message_id: "",
                    event_id: "",
                    is_onsite: !1,
                    properties: {},
                    context: {
                        ad: {},
                        device: {},
                        library: {
                            name: "",
                            version: ""
                        },
                        page: {
                            url: ""
                        },
                        pageview_id: "",
                        session_id: "",
                        variation_id: "",
                        user: {}
                    },
                    partner: "",
                    timestamp: ""
                }
            }
        }, {
            key: "assemblySelfHostData",
            value: function() {
                return this.assemblyData()
            }
        }, {
            key: "trackSync",
            value: function() {}
        }, {
            key: "getReportEventHistoryKey",
            value: function(e) {
                return "tiktok"
            }
        }, {
            key: "hasReportEventHistory",
            value: function(e, t) {
                return !1
            }
        }]), e
    }();
    new Co("empty");
    var ko = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Mo = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r) {
                var o;
                return i(this, n), (o = t.call(this)).reporterInfo = {}, o.options = {}, o.plugins = {}, o.rules = [], o.reportEventHistory = {}, o.reportResultSet = [], o.selfHostConfig = {}, o.currentHref = "", o.advancedMatchingAvailableProperties = {
                    external_id: !0,
                    partner_id: !0
                }, o.reportService = r, o.context = e, o
            }
            return a(n, [{
                key: "getParameterInfo",
                value: function() {
                    var e = this;
                    return this.getInstance().then((function() {
                        var t = e.reporterInfo,
                            n = t.name,
                            r = void 0 === n ? "" : n,
                            i = t.status,
                            o = void 0 === i ? 1 : i,
                            a = t.setupMode,
                            c = void 0 === a ? 0 : a,
                            u = t.advertiserID,
                            s = void 0 === u ? "" : u,
                            l = t.is_onsite,
                            f = void 0 !== l && l;
                        return {
                            pixelCode: e.getReporterId(),
                            name: r,
                            status: o,
                            setupMode: c,
                            advertiserID: s.toString(),
                            partner: e.getReporterPartner() || "",
                            is_onsite: f,
                            advancedMatchingAvailableProperties: e.advancedMatchingAvailableProperties,
                            rules: e.rules
                        }
                    }))
                }
            }, {
                key: "getInstance",
                value: function() {
                    return this.pixelPromise = Promise.resolve(this)
                }
            }, {
                key: "getReporterId",
                value: function() {
                    return ""
                }
            }, {
                key: "getReporterUniqueLoadId",
                value: function() {
                    return "".concat(this.getReporterId())
                }
            }, {
                key: "getReporterPartner",
                value: function() {}
            }, {
                key: "getReporterInfo",
                value: function() {
                    return {
                        pixel: {
                            code: this.getReporterId()
                        }
                    }
                }
            }, {
                key: "setAdvancedMatchingAvailableProperties",
                value: function(e) {
                    this.advancedMatchingAvailableProperties = Object.assign({}, this.advancedMatchingAvailableProperties, e)
                }
            }, {
                key: "isOnsite",
                value: function() {
                    return !1
                }
            }, {
                key: "isPartnerReporter",
                value: function() {
                    return !1
                }
            }, {
                key: "getReportResultSet",
                value: function() {
                    return this.reportResultSet
                }
            }, {
                key: "getUserInfo",
                value: function(e) {
                    return {}
                }
            }, {
                key: "getReporterMatchedUserFormatInfo",
                value: function() {
                    return {}
                }
            }, {
                key: "getReporterMatchedUserFormatInfoV2",
                value: function() {
                    return {}
                }
            }, {
                key: "getReportEventHistoryKey",
                value: function(e) {
                    return "tiktok"
                }
            }, {
                key: "clearHistory",
                value: function() {
                    this.reportEventHistory = {}
                }
            }, {
                key: "pushReport",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "tiktok";
                    this.reportEventHistory[t] || (this.reportEventHistory[t] = []), this.reportEventHistory[t].push(e)
                }
            }, {
                key: "hasReportEventHistory",
                value: function(e, t) {
                    var n = this.getReportEventHistoryKey(t);
                    return this.reportEventHistory[n] ? !(!Or.includes(e) || !this.reportEventHistory[n].includes(e)) : (this.reportEventHistory[n] = [], !1)
                }
            }, {
                key: "page",
                value: function() {}
            }, {
                key: "track",
                value: function(e, t, n, r, i) {
                    var o = this,
                        a = r || wr.TRACK,
                        c = i || Bn.defaultReport;
                    return !this.reportService || this.hasReportEventHistory(e, c) ? Promise.resolve(null) : (this.pushReport(e, this.getReportEventHistoryKey(c)), po(this.reportService.reportPreposition || []).then((function() {
                        try {
                            if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                                var r = {
                                    taskName: window.ttq._pf_tn || "track_after_report_preposition",
                                    functionName: window.ttq._pf_tn && "track_after_report_preposition",
                                    start: performance.now()
                                };
                                window.ttq._pf_tn || (window.ttq._pf_tn = "track_after_report_preposition")
                            }
                        } catch (e) {}
                        var i = o.getReporterId(),
                            u = o.trackSync(i, e, t, n, a, c);
                        o.trackPostTask({
                            reporterId: i,
                            eventType: e,
                            properties: t,
                            eventConfig: n,
                            type: a,
                            reportType: c,
                            reportData: u
                        });
                        var s = {
                            reporterId: i,
                            eventType: e,
                            properties: t,
                            eventConfig: n,
                            type: a,
                            reportType: c,
                            reportData: u
                        };
                        try {
                            window.ttq && window.ttq._ppf && (r.end = performance.now(), window.ttq._ppf.push(r), "track_after_report_preposition" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                        } catch (e) {}
                        return Promise.resolve(s)
                    })))
                }
            }, {
                key: "getEventType",
                value: function(e) {
                    return e
                }
            }, {
                key: "trackPostTask",
                value: function(e) {}
            }, {
                key: "trackSync",
                value: function(e, t, n, r) {
                    var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : wr.TRACK,
                        o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Bn.defaultReport,
                        a = arguments.length > 6 ? arguments[6] : void 0,
                        c = i !== wr.SELFHOST ? this.assemblyData(e, t, n, r, i) : this.assemblySelfHostData(e, t, n, r, i),
                        u = a || zi(i, e);
                    if (null !== u && this.reportService) return this.emit("beforeReport", e, t, c, r, i), this.reportResultSet.push(this.reportService.report(u, c, o)), c
                }
            }, {
                key: "handlePropertiesToOptions",
                value: function(e, t) {
                    var n = {};
                    return t.forEach((function(t) {
                        n[t] = e[t], delete e[t]
                    })), n
                }
            }, {
                key: "assemblyData",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    arguments.length > 4 && void 0 !== arguments[4] || wr.TRACK;
                    var i = this.context.getAllData(),
                        o = i.adInfo,
                        a = i.userInfo,
                        c = i.appInfo,
                        u = i.pageSign,
                        s = i.libraryInfo,
                        l = i.pageInfo,
                        f = i.signalType,
                        d = u.sessionId,
                        p = u.variationId,
                        h = Object.assign({}, n),
                        _ = h && h.pixelMethod || "";
                    h && h.pixelMethod && delete h.pixelMethod;
                    var v = Object.assign({}, s, {
                            version: this.context.isLegacyPixel(e) ? "legacy-".concat(s.version) : s.version
                        }),
                        g = si(o, Xn),
                        y = Object.assign({}, g, {
                            device_id: c.device_id,
                            uid: c.user_id
                        }),
                        m = this.handlePropertiesToOptions(h, [Fn.LDU, Fn.EVENTID, Fn.EVENT_ID]),
                        E = this.options.limited_data_use,
                        b = null !== m.limited_data_use && void 0 !== m.limited_data_use ? m.limited_data_use : E;
                    null == b ? delete m.limited_data_use : m.limited_data_use = !!b;
                    var w = r && (r.event_id || r.eventID) || "";
                    m.event_id = w || m.event_id || m.eventID || "", delete m.eventID;
                    var I = this.getReporterInfo();
                    I.pixel && (I.pixel.runtime = Bi(), _ && (I.pixel.mode = _));
                    var T = this.getUserInfo(Hn.Manual) || {},
                        O = this.getUserInfo(Hn.ManualV2) || {},
                        S = this.getReporterMatchedUserFormatInfoV2() || {},
                        N = this.getUserInfo(Hn.Auto) || {};
                    N.auto_trigger_type && (Object.assign(h, {
                        auto_trigger_type: N.auto_trigger_type
                    }), delete N.auto_trigger_type), ki() && Object.assign(h, {
                        android_version: c.android_version,
                        device_model: c.device_model
                    });
                    var A = {};
                    a.anonymous_id && (A.anonymous_id = a.anonymous_id);
                    var R = this.getEventType(t),
                        P = {
                            event: R,
                            event_id: w,
                            message_id: rr(nr(fr), e),
                            is_onsite: !!f,
                            timestamp: (new Date).toJSON(),
                            context: Object.assign(Object.assign({
                                ad: y,
                                device: {
                                    platform: c.platform
                                },
                                user: Object.assign({}, A, T, O, N)
                            }, I), {
                                page: Object.assign({}, l),
                                library: Object.assign({}, v),
                                session_id: rr(d, e),
                                pageview_id: rr(this.context.getPageViewId(), this.getReporterUniqueLoadId(), _r),
                                variation_id: p || ""
                            }),
                            _inspection: S,
                            properties: h
                        };
                    return Object.assign(P, m)
                }
            }, {
                key: "assemblySelfHostData",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = arguments.length > 4 ? arguments[4] : void 0;
                    return this.assemblyData(e, t, n, r, i)
                }
            }]), n
        }(Po);
    Mo = ko([A.injectable()], Mo);
    var Lo = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Do = function() {
            function e(t) {
                var n = t.name,
                    r = t.context,
                    o = t.reporters;
                i(this, e), this.reporters = [], this.context = r, this.reporters = o, this.name = n
            }
            return a(e, [{
                key: "initStart",
                value: function() {}
            }, {
                key: "initEnd",
                value: function() {}
            }, {
                key: "adInfoInitStart",
                value: function() {}
            }, {
                key: "adInfoInitEnd",
                value: function() {}
            }, {
                key: "contextInitStart",
                value: function() {}
            }, {
                key: "contextInitEnd",
                value: function() {}
            }, {
                key: "pageUrlWillChange",
                value: function(e, t) {}
            }, {
                key: "pageUrlDidChange",
                value: function(e, t) {}
            }, {
                key: "pageDidLoad",
                value: function() {}
            }, {
                key: "pageWillLeave",
                value: function(e) {}
            }, {
                key: "pixelSend",
                value: function(e, t, n, r, i) {}
            }, {
                key: "pixelDidMount",
                value: function(e) {}
            }]), e
        }(),
        xo = function(e) {
            u(n, e);
            var t = p(n);

            function n() {
                return i(this, n), t.apply(this, arguments)
            }
            return a(n)
        }(Do = Lo([A.injectable()], Do)),
        jo = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Uo = function() {
            function e(t, n) {
                i(this, e), this.initialize = !1, this.plugins = [], this.observers = [], this.reporters = [], this.context = t, this.reportService = n
            }
            return a(e, [{
                key: "init",
                value: function(e, t) {
                    this.initContextInfo(e, t), this.initialize = !0
                }
            }, {
                key: "initContextInfo",
                value: function(e, t) {
                    var n = this;
                    this.dispatch(gr.CONTEXT_INIT_START), this.initAdInfo(e, t), this.initAppInfo(e, t), this.reportService.pushPreposition(Promise.resolve().then((function() {
                        return n.initUserInfo()
                    }))), this.initTestId(e, t), this.dispatch(gr.CONTEXT_INIT_END)
                }
            }, {
                key: "setPageIndex",
                value: function(e) {}
            }, {
                key: "setPageInfo",
                value: function(e, t) {
                    var n = this.context.getPageInfo().url;
                    if (n !== e) {
                        this.dispatch(gr.PAGE_URL_WILL_CHANGE, t || n, e);
                        var r = this.context.setPageInfo(e, t || n);
                        (null == r ? void 0 : r.pageIndex) && this.setPageIndex(r.pageIndex), this.dispatch(gr.PAGE_URL_DID_CHANGE, e, n)
                    }
                }
            }, {
                key: "initAdInfo",
                value: function(e, t) {}
            }, {
                key: "initOffsiteAdInfo",
                value: function(e) {}
            }, {
                key: "initAppInfo",
                value: function(e, t) {}
            }, {
                key: "initUserInfo",
                value: function() {}
            }, {
                key: "initTestId",
                value: function(e, t) {}
            }, {
                key: "usePlugin",
                value: function(e) {
                    try {
                        if (!this.plugins.find((function(t) {
                                return t.name === e.name
                            }))) {
                            this.plugins.push(e);
                            var t = e.name;
                            if (t) this["".concat(t[0].toLowerCase() + t.slice(1), "Plugin")] = e
                        }
                    } catch (e) {}
                }
            }, {
                key: "useObserver",
                value: function(e) {
                    try {
                        if (!this.observers.find((function(t) {
                                return t.name === e.name
                            }))) {
                            this.observers.push(e);
                            var t = e.name;
                            if (t) this["".concat(t[0].toLowerCase() + t.slice(1))] = e
                        }
                    } catch (e) {}
                }
            }, {
                key: "getPlugin",
                value: function(e) {
                    return this.plugins.find((function(t) {
                        return t.name === e
                    })) || null
                }
            }, {
                key: "getReporter",
                value: function(e) {
                    return this.reporters.find((function(t) {
                        return t.getReporterId() === e
                    }))
                }
            }, {
                key: "instance",
                value: function(e) {
                    var t = this.getReporter(e);
                    return t || (Ki(Nr.PIXEL_EMPTY, new Error(""), {
                        pixelCode: e
                    }), new Co(e))
                }
            }, {
                key: "instances",
                value: function() {
                    return this.reporters
                }
            }, {
                key: "identify",
                value: function(e, t) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var n = {
                                taskName: window.ttq._pf_tn || "identify_api_handler",
                                functionName: window.ttq._pf_tn && "identify_api_handler",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "identify_api_handler")
                        }
                    } catch (e) {}
                    var r = mi(e, t);
                    this.context.setUserInfo(r);
                    try {
                        window.ttq && window.ttq._ppf && (n.end = performance.now(), window.ttq._ppf.push(n), "identify_api_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                    } catch (e) {}
                }
            }, {
                key: "page",
                value: function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var t = {
                                taskName: window.ttq._pf_tn || "page_api_handler",
                                functionName: window.ttq._pf_tn && "page_api_handler",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "page_api_handler")
                        }
                    } catch (e) {}
                    e.url !== this.context.getPageInfo().url && (this.setPageInfo(e.url, e.referrer), this.reporters.forEach((function(e) {
                        e.clearHistory()
                    })));
                    var n = Object.assign({}, e);
                    delete n.url, delete n.referrer, this.reporters.forEach((function(e) {
                        e.page(n)
                    }));
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t), "page_api_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                    } catch (e) {}
                }
            }, {
                key: "isOnsitePage",
                value: function() {
                    return this.context.getSignalType() === vr.ONSITE || this.reporters.every((function(e) {
                        return e.isOnsite()
                    }))
                }
            }, {
                key: "track",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var r = {
                                taskName: window.ttq._pf_tn || "track_api_handler",
                                functionName: window.ttq._pf_tn && "track_api_handler",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "track_api_handler")
                        }
                    } catch (e) {}
                    this.instances().forEach((function(r, i) {
                        r.track(e, t, Object.assign({
                            _i: i
                        }, n))
                    }));
                    try {
                        window.ttq && window.ttq._ppf && (r.end = performance.now(), window.ttq._ppf.push(r), "track_api_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                    } catch (e) {}
                }
            }, {
                key: "dispatch",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                    var i = this.plugins.concat(this.observers);
                    i.forEach((function(t) {
                        if ("function" == typeof t[e]) try {
                            t[e].apply(t, n)
                        } catch (r) {
                            Ki(Nr.PLUGIN_ERROR, r, {
                                extJSON: {
                                    plugin_name: t.name,
                                    cycle_name: e,
                                    data: n
                                }
                            })
                        }
                    }))
                }
            }, {
                key: "getAllReportResultSet",
                value: function() {
                    return this.instances().reduce((function(e, t) {
                        return e.concat(t.getReportResultSet())
                    }), [])
                }
            }, {
                key: "resetCookieExpires",
                value: function() {}
            }, {
                key: "enableCookie",
                value: function() {}
            }, {
                key: "disableCookie",
                value: function() {}
            }, {
                key: "enableFirstPartyCookie",
                value: function(e) {}
            }, {
                key: "holdConsent",
                value: function() {}
            }, {
                key: "revokeConsent",
                value: function() {}
            }, {
                key: "grantConsent",
                value: function() {}
            }]), e
        }();
    Uo = jo([A.injectable()], Uo);
    var Fo = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Bo = function() {
            function t(e, n) {
                i(this, t), this.reportPreposition = [], this.httpService = e, this.bridgeService = n
            }
            var n;
            return a(t, [{
                key: "pushPreposition",
                value: function(e) {
                    this.reportPreposition.push(e)
                }
            }, {
                key: "report",
                value: (n = r(e().mark((function t(n, r, i) {
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Promise.resolve());
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), t)
                }))), function(e, t, r) {
                    return n.apply(this, arguments)
                })
            }]), t
        }();
    Bo = Fo([A.injectable()], Bo);
    var qo, Go = function(e) {
        u(n, e);
        var t = p(n);

        function n(e) {
            var r;
            return i(this, n), (r = t.call(this, e)).observers = new Set([]), r
        }
        return a(n, [{
            key: "addObserver",
            value: function(e) {
                this.observers.has(e) || this.observers.add(e)
            }
        }, {
            key: "removeObserver",
            value: function(e) {
                this.observers.delete(e)
            }
        }, {
            key: "notifyObservers",
            value: function(e, t) {
                this.observers.forEach((function(n) {
                    return n.call(t, e)
                }))
            }
        }]), n
    }(Do);
    ! function(e) {
        e[e.Live = 0] = "Live", e[e.NoRecord = 1] = "NoRecord"
    }(qo || (qo = {}));
    var Vo, Ho = function(e, t, n) {
            e.isBound(t) ? e.rebind(t).toConstantValue(n) : e.bind(t).toConstantValue(n)
        },
        Jo = function(e, t) {
            var n = t.id,
                r = t.type,
                i = void 0 === r ? Zn.PIXEL_CODE : r,
                o = t.info,
                a = t.options,
                u = void 0 === a ? {} : a,
                s = t.plugins,
                l = void 0 === s ? {} : s,
                f = t.rules,
                d = void 0 === f ? [] : f;
            try {
                if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var p = {
                    taskName: window.ttq._pf_tn,
                    functionName: "webReporterFactory",
                    start: performance.now()
                }
            } catch (e) {}
            var h = e.get(Sr.TTQ),
                _ = e.get(Sr.TTQ_REPORTERS);
            if (!_.some((function(e) {
                    return e.getReporterId() === n
                }))) {
                Ho(e, Ir.ID, n), Ho(e, Ir.Type, i), Ho(e, Ir.Info, o || c({}, i, n)), Ho(e, Ir.Options, u), Ho(e, Ir.Plugins, l), Ho(e, Ir.Rules, d), h.enableFirstPartyCookie((null == o ? void 0 : o.firstPartyCookieEnabled) || !1);
                var v = e.get(Sr.REPORTER);
                if (l) {
                    var g = l.AdvancedMatching,
                        y = l.AutoAdvancedMatching,
                        m = {};
                    g && Object.assign(m, g), y && Object.assign(m, y), v.setAdvancedMatchingAvailableProperties(m)
                }
                v.on("beforeReport", (function(e, t, n, r, i) {
                    h.dispatch(gr.PIXEL_SEND, e, t, n, r, i)
                })), _.push(v), e.rebind(Sr.TTQ_REPORTERS).toConstantValue(_), h.dispatch(gr.PIXEL_DID_MOUNT, v);
                try {
                    window.ttq && window.ttq._ppf && (p.end = performance.now(), window.ttq._ppf.push(p))
                } catch (e) {}
                return v
            }
        },
        Wo = function(e, t) {
            var n = e.get(Sr.TTQ_GLOBAL_OPTIONS) || {};
            ! function(e, t) {
                var n = e || {},
                    r = n._partner,
                    i = n._ttp,
                    o = n._self_host_config,
                    a = n._usd_exchange_rate,
                    c = n._legacy,
                    u = n._cc,
                    s = n._variation_id,
                    l = n._server_unique_id,
                    f = n._currency_list,
                    d = n._plugins,
                    p = n._aam,
                    h = n._auto_config,
                    _ = n._cde;
                Object.assign(t, {
                    partner: r,
                    ttp: i,
                    cc: u,
                    self_host_config: o,
                    usd_exchange_rate: a,
                    legacy: c,
                    variation_id: s,
                    server_unqiue_id: l,
                    currency_list: f,
                    plugins: d,
                    aam: p,
                    auto_config: h,
                    cde: _
                })
            }(t, n), e.isBound(Sr.TTQ_GLOBAL_OPTIONS) ? e.rebind(Sr.TTQ_GLOBAL_OPTIONS).toConstantValue(n) : e.bind(Sr.TTQ_GLOBAL_OPTIONS).toConstantValue(n)
        },
        Ko = function(e) {
            try {
                if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                    taskName: window.ttq._pf_tn,
                    functionName: "freezeAPI",
                    start: performance.now()
                }
            } catch (e) {}
            var n = Kr(),
                r = Yr(),
                i = Xr(),
                o = Xi().pixelCode,
                a = void 0 === o ? "" : o,
                c = ["holdConsent", "revokeConsent", "grantConsent"];
            ["instance", "instances", "loadPixel", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"].forEach((function(t) {
                    Object.defineProperty(i, t, {
                        get: function() {
                            return function() {
                                try {
                                    var n = Array.prototype.slice.call(arguments);
                                    return c.indexOf(t) > -1 && setTimeout((function() {
                                        Wi(Nr.CUSTOM_INFO, {
                                            pixelCode: a,
                                            custom_name: t,
                                            custom_enum: JSON.stringify(n)
                                        })
                                    })), e[t].apply(e, n)
                                } catch (e) {
                                    return Ki(Nr.API_ERROR, e, {
                                        extJSON: {
                                            api: t
                                        }
                                    }), {}
                                }
                            }
                        },
                        set: function() {}
                    })
                })), ["page", "track", "identify"].forEach((function(t) {
                    Object.defineProperty(i, t, {
                        get: function() {
                            return function() {
                                try {
                                    var n = 1 === arguments.length && void 0 === arguments[0] ? [] : Array.prototype.slice.call(arguments);
                                    return c.indexOf(t) > -1 && setTimeout((function() {
                                        var e = JSON.stringify(n.map((function(e) {
                                            return er(e) ? Object.keys(e) : e
                                        })));
                                        Wi(Nr.CUSTOM_INFO, {
                                            pixelCode: a,
                                            custom_name: t,
                                            custom_enum: e
                                        })
                                    })), To(t, n), e[t].apply(e, n)
                                } catch (e) {
                                    return Ki(Nr.API_ERROR, e, {
                                        extJSON: {
                                            api: t
                                        }
                                    }), {}
                                }
                            }
                        },
                        set: function() {}
                    })
                })), n[r]._mounted = !0, n[r].initialize = !0,
                function(e) {
                    Wr = e
                }(n[r]);
            try {
                window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
            } catch (e) {}
        },
        Yo = function(e, t, n) {
            try {
                if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var r = {
                    taskName: window.ttq._pf_tn,
                    functionName: "handleCache",
                    start: performance.now()
                }
            } catch (e) {}
            var i = function() {
                var e = Xr();
                return e && e._i || {}
            }();
            Object.entries(i).forEach((function(r) {
                var i = v(r, 2),
                    o = i[0],
                    a = i[1];
                if (!a._init && ("Tealium" === $r(o) || zr() || a.info)) {
                    if (t.getReporter(o)) Yi(Ar.DUPLICATE_PIXEL_CODE);
                    else(n || Jo)(e, {
                        id: o,
                        type: Zn.PIXEL_CODE,
                        info: a.info,
                        options: a.options,
                        rules: a.rules,
                        plugins: a.plugins
                    });
                    if (a._init = !0, a.length > 0)
                        for (; a.length;) {
                            var c = a.shift();
                            if (c) {
                                var u = g(c),
                                    s = u[0],
                                    l = u.slice(1),
                                    f = t.instance(o);
                                if (f) switch (s) {
                                    case "identify":
                                        t.identify(l[0], l[1]);
                                        break;
                                    case "page":
                                        t.page(l[0]);
                                        break;
                                    case "track":
                                        f.track(l[0], l[1], l[2] || {});
                                        break;
                                    default:
                                        f[s] ? f[s](l[0], l[1], l[2] || {}) : Ki(Nr.CUSTOM_ERROR, new Error("action not find: ".concat(f[s])))
                                }
                            }
                        }
                }
            })), Xo(t);
            try {
                window.ttq && window.ttq._ppf && (r.end = performance.now(), window.ttq._ppf.push(r))
            } catch (e) {}
        },
        Xo = function(e) {
            try {
                if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                    taskName: window.ttq._pf_tn,
                    functionName: "handleGlobalCache",
                    start: performance.now()
                }
            } catch (e) {}
            var n = Xr();
            if (n.length > 0)
                for (; n.length;) {
                    var r = n.shift();
                    if (r) {
                        var i = g(r),
                            o = i[0],
                            a = i.slice(1);
                        switch (ei("Tealium") || To(o, a), o) {
                            case "identify":
                                e.identify(a[0], a[1]);
                                break;
                            case "page":
                                e.page(a[0]);
                                break;
                            case "track":
                                e.track(a[0], a[1], a[2] || {});
                                break;
                            case "enableCookie":
                                e.enableCookie();
                                break;
                            case "disableCookie":
                                e.disableCookie();
                                break;
                            case "holdConsent":
                                e.holdConsent();
                                break;
                            case "revokeConsent":
                                e.revokeConsent();
                                break;
                            case "grantConsent":
                                e.grantConsent()
                        }
                    }
                }
            try {
                window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
            } catch (e) {}
        },
        zo = {
            ViewForm: "ViewContent",
            ViewConsultationPage: "ViewContent",
            ViewDownloadPage: "ViewContent",
            Checkout: "PlaceAnOrder",
            Purchase: "CompletePayment",
            Registration: "CompleteRegistration",
            AddBilling: "AddPaymentInfo",
            StartCheckout: "InitiateCheckout",
            ClickInDownloadPage: "ClickButton",
            ClickInConsultationPage: "ClickButton",
            ClickForm: "ClickButton",
            ClickToDownload: "Download",
            Consult: "Contact",
            ConsultByPhone: "Contact"
        },
        Qo = ["event_experiment", "dynamic_parameter_config", "eb_version", "tf"],
        Zo = function(e) {
            var t;
            return e.context.ad = {}, Object.keys((null === (t = null == e ? void 0 : e.context) || void 0 === t ? void 0 : t.user) || {}).forEach((function(t) {
                e.context.user[t] = ""
            })), e
        },
        $o = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return e.forEach((function(e) {
                t.hasOwnProperty(e) && (n[e] = t[e], delete t[e])
            })), n
        },
        ea = function(e) {
            u(r, e);
            var n = p(r);

            function r(e) {
                var t;
                i(this, r);
                var o = e.id,
                    a = e.type,
                    u = e.isOnsitePage,
                    s = e.context,
                    l = e.reporterInfo,
                    f = e.ttqOptions,
                    d = e.reportService,
                    p = e.plugins,
                    h = void 0 === p ? {} : p,
                    _ = e.rules,
                    v = void 0 === _ ? [] : _,
                    g = e.options,
                    y = void 0 === g ? {} : g;
                return (t = n.call(this, s, d)).ttp = "", t.loaded = !1, t.id = o, t.pixelCode = o, t.type = a, t.isOnsitePage = u, t.options = y || {}, t.plugins = h || {}, t.rules = v || [], t.reporterInfo = Object.assign(l || {}, c({}, a, o)), t.ttp = f.ttp || "", t.currency_list = f.currency_list || null, t.ttqPartner = f.partner || "", t.selfHostConfig = f.self_host_config || {}, t.pixelPromise = t.getInstance(), t
            }
            return a(r, [{
                key: "identify",
                value: function(e, t) {
                    var n = mi(e, t);
                    this.context.setUserInfo(n)
                }
            }, {
                key: "getReporterId",
                value: function() {
                    return this.id || ""
                }
            }, {
                key: "getReporterUniqueLoadId",
                value: function() {
                    return "".concat(this.reporterInfo.loadId, "-").concat(this.getReporterId())
                }
            }, {
                key: "getReporterPartner",
                value: function() {
                    var e;
                    return (null === (e = this.reporterInfo) || void 0 === e ? void 0 : e.partner) || ""
                }
            }, {
                key: "setPixelInfo",
                value: function(e, t, n) {
                    var r = this.type;
                    this.reporterInfo = Object.assign(this.reporterInfo, Object.assign({}, e), c({}, r, this.getReporterId())), t && (this.rules = t), n && (this.plugins = n)
                }
            }, {
                key: "getInstance",
                value: function() {
                    return Promise.resolve(this)
                }
            }, {
                key: "getReporterInfo",
                value: function() {
                    return this.reporterInfo.pixelCode ? _(s(r.prototype), "getReporterInfo", this).call(this) : {
                        shop_id: this.reporterInfo.shopId,
                        eventSourceId: this.reporterInfo.eventSourceId
                    }
                }
            }, {
                key: "getUserInfo",
                value: function(e) {
                    var t = this.context.getUserInfo(),
                        n = li(t, Object.assign({}, this.advancedMatchingAvailableProperties));
                    switch (e) {
                        case Hn.Manual:
                            return li(this.isPartnerReporter() ? n : t, {
                                external_id: !0,
                                email: !0,
                                phone_number: !0
                            });
                        case Hn.ManualV2:
                            return li(this.isPartnerReporter() ? n : t, {
                                first_name: !0,
                                last_name: !0,
                                city: !0,
                                state: !0,
                                country: !0,
                                zip_code: !0,
                                partner_id: !0
                            });
                        case Hn.Auto:
                            var r = li(n, {
                                external_id: !0,
                                auto_email: !0,
                                auto_phone_number: !0
                            });
                            return Object.assign(r, (r.auto_email || r.auto_phone_number) && t.auto_trigger_type ? {
                                auto_trigger_type: t.auto_trigger_type
                            } : {});
                        default:
                            return n
                    }
                }
            }, {
                key: "getReporterMatchedUserFormatInfo",
                value: function() {
                    var e = this.context.getUserFormatInfo(),
                        t = function(e, t) {
                            var n = {
                                identity_params: {}
                            };
                            return 0 === Object.keys(e).length ? {} : (Object.entries(t).forEach((function(t) {
                                var r = v(t, 2),
                                    i = r[0];
                                if (r[1])
                                    if (e[i] && e[i].length) {
                                        var o = e[i] || [Gn.EMPTY_VALUE];
                                        n.identity_params[i] = y(o)
                                    } else n.identity_params[i] = [Gn.EMPTY_VALUE]
                            })), n)
                        }(e, this.isPartnerReporter() ? this.advancedMatchingAvailableProperties : {
                            external_id: !0,
                            email: !0,
                            phone_number: !0
                        }),
                        n = li(e, {
                            auto_email: !0,
                            auto_phone_number: !0
                        });
                    return Object.keys(n).length > 0 && (t.identity_params || (t.identity_params = {}), Object.assign(t.identity_params, n)), t
                }
            }, {
                key: "getReporterMatchedUserFormatInfoV2",
                value: function() {
                    return function(e, t) {
                        if (0 === Object.keys(e).length) return {};
                        var n = {
                                identity_params: {}
                            },
                            r = {
                                email: ["email_is_hashed", "sha256_email"],
                                phone_number: ["phone_is_hashed", "sha256_phone"],
                                zip_code: ["zip_code"]
                            };
                        return Object.entries(t).forEach((function(t) {
                            var i = v(t, 2),
                                o = i[0];
                            i[1] && r[o] && r[o].forEach((function(t) {
                                if (n.identity_params[t] = [Gn.EMPTY_VALUE], e[t]) {
                                    var r = e[t] || [Gn.EMPTY_VALUE];
                                    n.identity_params && (n.identity_params[t] = y(r))
                                }
                            }))
                        })), n
                    }(this.context.getUserFormatInfoV2(), this.isPartnerReporter() ? this.advancedMatchingAvailableProperties : {
                        external_id: !0,
                        email: !0,
                        phone_number: !0,
                        first_name: !0,
                        last_name: !0,
                        city: !0,
                        state: !0,
                        country: !0,
                        zip_code: !0,
                        partner_id: !0
                    })
                }
            }, {
                key: "isOnsite",
                value: function() {
                    var e;
                    return !!(null === (e = this.reporterInfo) || void 0 === e ? void 0 : e.is_onsite)
                }
            }, {
                key: "isPartnerReporter",
                value: function() {
                    var e = this.getReporterPartner();
                    return !(!e || "None" === e)
                }
            }, {
                key: "getSignalDiagnosticLabels",
                value: function() {
                    var e = this.context.getSignalDiagnosticLabels();
                    if (!e) return Object.assign({}, $n);
                    var t = this.advancedMatchingAvailableProperties,
                        n = t.email,
                        r = t.phone_number,
                        i = t.auto_email,
                        o = t.auto_phone_number;
                    n = !this.isPartnerReporter() || n, r = !this.isPartnerReporter() || r;
                    var a = li(e, {
                        raw_email: n,
                        raw_phone: r,
                        hashed_email: n,
                        hashed_phone: r,
                        raw_auto_email: i,
                        raw_auto_phone: o
                    });
                    return Object.assign({}, $n, a)
                }
            }, {
                key: "assemblyData",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : wr.TRACK,
                        a = _(s(r.prototype), "assemblyData", this).call(this, e, t, n, i, o);
                    a.is_onsite = this.isOnsitePage.value;
                    var c = $r(e) || this.ttqPartner;
                    c && (a.partner = c), a.signal_diagnostic_labels = this.getSignalDiagnosticLabels();
                    var u = Qr();
                    u && (a.context.userAgent = u);
                    var l = so();
                    return l && (a.context.page.load_progress = l), a._inspection = $o(Qo, a.properties, a._inspection), o !== wr.PAGE && (a._inspection.ppf = ni()), a.context.ad.sdk_env = Si(), a.context.ad.jsb_status = ji(), o !== wr.INTERACTION && o !== wr.PERFORMANCE && o !== wr.PERFORMANCE_INTERACTION || !1 !== this.context.getEnableAdTracking() || this.isOnsitePage.value || (a.context.user = {}, a.context.ad = this.context.getOffsiteAdInfo(), a.context.ad = si(a.context.ad, Xn)), a
                }
            }, {
                key: "page",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = Oi(),
                        n = t.url;
                    n !== this.currentHref && (this.currentHref = n, this.track(Tr, e, {}))
                }
            }, {
                key: "track",
                value: function(e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wr.TRACK,
                        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Bn.defaultReport;
                    return i && i.pixel_code && this.getReporterId() !== i.pixel_code ? Promise.resolve(null) : this.getInstance().then((function() {
                        try {
                            if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                                var c = {
                                    taskName: window.ttq._pf_tn || "track_after_reporter_init",
                                    functionName: window.ttq._pf_tn && "track_after_reporter_init",
                                    start: performance.now()
                                };
                                window.ttq._pf_tn || (window.ttq._pf_tn = "track_after_reporter_init")
                            }
                        } catch (e) {}
                        var u = t.getReporterId();
                        if (Rr.includes(e)) return _(s(r.prototype), "track", t).call(t, e, n, i, o, a);
                        var l = Object.assign({}, i);
                        t.selfHostConfig[u] && !i.eventID && (l = Object.assign({}, l, {
                            eventID: rr(nr(hr), u)
                        }));
                        try {
                            window.ttq && window.ttq._ppf && (c.end = performance.now(), window.ttq._ppf.push(c), "track_after_reporter_init" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                        } catch (e) {}
                        return _(s(r.prototype), "track", t).call(t, e, n, l, o, a)
                    }))
                }
            }, {
                key: "getEventType",
                value: function(e) {
                    return zo[e] || e
                }
            }, {
                key: "trackSync",
                value: function(e, n) {
                    var i, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        c = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : wr.TRACK,
                        u = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : Bn.defaultReport,
                        l = arguments.length > 6 ? arguments[6] : void 0;
                    if ("track" === c && Wi(Nr.PIXEL_SEND, {
                            pixelCode: e,
                            extJSON: {
                                event: n
                            }
                        }), c === wr.TRACK) {
                        o && "string" == typeof o.currency && (o.currency = o.currency.toUpperCase());
                        var f = this.context.getTestID();
                        if (f) {
                            var d = this.assemblyData(e, n, o, a);
                            d.tt_test_id = f;
                            var p = Zo(d);
                            return null === (i = null == this ? void 0 : this.reportService) || void 0 === i || i.report(l || Cr, p, Bn.httpReport), p
                        }
                        if (o && "object" === t(o)) {
                            var h = o.value,
                                v = o.currency;
                            void 0 === h || vo(h) || Wi(Nr.CUSTOM_ERROR, {
                                pixelCode: e,
                                custom_name: "invalid_value",
                                extJSON: {
                                    event: n,
                                    value: h,
                                    currency: v
                                }
                            }), void 0 === v || _o(v, this.currency_list) || Wi(Nr.CUSTOM_ERROR, {
                                pixelCode: e,
                                custom_name: "invalid_currency",
                                extJSON: {
                                    event: n,
                                    value: h,
                                    currency: v
                                }
                            })
                        }
                        return _(s(r.prototype), "trackSync", this).call(this, e, n, o, a, c, u, l)
                    }
                    _(s(r.prototype), "trackSync", this).call(this, e, n, o, a, c, u, l)
                }
            }, {
                key: "trackPostTask",
                value: function(e) {
                    var t = e.reporterId,
                        n = e.eventType,
                        r = e.properties,
                        i = e.eventConfig;
                    Rr.includes(n) || this.selfHostConfig[t] && !this.hasReportEventHistory(n, Bn.htmlHttpReport) && (this.pushReport(n, this.getReportEventHistoryKey(Bn.htmlHttpReport)), this.trackSync(t, n, r, i, wr.SELFHOST, Bn.htmlHttpReport))
                }
            }, {
                key: "getReportEventHistoryKey",
                value: function(e) {
                    return e === Bn.htmlHttpReport ? this.selfHostConfig[this.getReporterId()] : "tiktok"
                }
            }, {
                key: "assemblySelfHostData",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = arguments.length > 4 ? arguments[4] : void 0,
                        o = this.assemblyData(e, t, n, r, i),
                        a = this.ttp;
                    return a && (o.context.user.ttp = a), o
                }
            }]), r
        }(Mo),
        ta = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        na = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        ra = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a, c, u, s, l, f, d) {
                return i(this, n), t.call(this, {
                    id: e,
                    type: r,
                    isOnsitePage: o,
                    context: a,
                    reporterInfo: c,
                    ttqOptions: u,
                    reportService: s,
                    plugins: l,
                    rules: f,
                    options: d
                })
            }
            return a(n, [{
                key: "getInstance",
                value: function() {
                    var e = this;
                    if (this.pixelPromise) return this.pixelPromise;
                    var t = function(e) {
                        return Io()[e] || {}
                    }(this.id);
                    return zr() || t && t.info ? (this.loaded = !0, this.pixelPromise = Promise.resolve(this)) : (this.pixelPromise = new Promise((function(t, n) {
                        var r, i, o = function(e) {
                            var t = Oi().url;
                            try {
                                return new URL(e || t)
                            } catch (e) {}
                            return null
                        }();
                        fo((r = e.id, i = (null == o ? void 0 : o.hostname) || "", "".concat("https://analytics.tiktok.com/i18n/pixel/config.js", "?sdkid=").concat(r, "&hostname=").concat(i))).then((function() {
                            e.loaded = !0, t(e)
                        })).catch((function(t) {
                            e.pixelPromise = null, n(t)
                        }))
                    })), this.pixelPromise)
                }
            }]), n
        }(ea),
        ia = function(e) {
            u(n, e);
            var t = p(n);

            function n() {
                return i(this, n), t.apply(this, arguments)
            }
            return a(n, [{
                key: "getInstance",
                value: function() {
                    return this.pixelPromise = Promise.resolve(this), this.pixelPromise
                }
            }, {
                key: "track",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return Oo(this.getReporterId(), "track", [e, t, n]), Promise.resolve(null)
                }
            }]), n
        }(ra = ta([A.injectable(), na(0, A.inject(Ir.ID)), na(1, A.inject(Ir.Type)), na(2, A.inject(Ir.IsOnsitePage)), na(3, A.inject(Sr.CONTEXT)), na(4, A.inject(Ir.Info)), na(5, A.inject(Sr.TTQ_GLOBAL_OPTIONS)), na(6, A.inject(Sr.REPORT_SERVICE)), na(6, A.optional()), na(7, A.inject(Ir.Plugins)), na(7, A.optional()), na(8, A.inject(Ir.Rules)), na(8, A.optional()), na(9, A.inject(Ir.Options)), na(9, A.optional())], ra)),
        oa = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        aa = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        ca = function(t) {
            u(c, t);
            var n, o = p(c);

            function c(e, t, n, r, a, u, s, l, f, d, p, h, _, v, g, y, m, E, b, w, I, T, O) {
                var S;
                i(this, c), (S = o.call(this, e, a)).env = l, S.reporters = t, S.cookieService = u, S.consentService = s, S.adService = n, S.appService = r, S.historyObserver = T, S.autoAdvancedMatchingPlugin = d, S.callbackPlugin = p, S.identifyPlugin = h, S.monitorPlugin = f, S.webFLPlugin = _, S.shopifyPlugin = v, S.autoConfigPlugin = g, S.diagnosticsConsolePlugin = y, S.competitorInsightPlugin = m, S.pangleCookieMatchingPlugin = E, S.eventBuilderPlugin = b, S.pagedataPlugin = I, S.enrichIpv6Plugin = w, S.runtimeMeasurementPlugin = O, S.historyObserver && S.useObserver(S.historyObserver), S.autoAdvancedMatchingPlugin && S.usePlugin(S.autoAdvancedMatchingPlugin), S.callbackPlugin && S.usePlugin(S.callbackPlugin), S.identifyPlugin && S.usePlugin(S.identifyPlugin), S.monitorPlugin && S.usePlugin(S.monitorPlugin), S.webFLPlugin && S.usePlugin(S.webFLPlugin), S.shopifyPlugin && S.usePlugin(S.shopifyPlugin), S.autoConfigPlugin && S.usePlugin(S.autoConfigPlugin), S.diagnosticsConsolePlugin && S.usePlugin(S.diagnosticsConsolePlugin), S.competitorInsightPlugin && S.usePlugin(S.competitorInsightPlugin), S.pangleCookieMatchingPlugin && S.usePlugin(S.pangleCookieMatchingPlugin), S.eventBuilderPlugin && S.usePlugin(S.eventBuilderPlugin), S.enrichIpv6Plugin && S.usePlugin(S.enrichIpv6Plugin), S.runtimeMeasurementPlugin && S.usePlugin(S.runtimeMeasurementPlugin), S.monitorPlugin && (Ji.info.forEach((function(e) {
                    var t;
                    null === (t = S.monitorPlugin) || void 0 === t || t.info(e.event, e.detail, e.withoutJSB)
                })), Ji.error.forEach((function(e) {
                    var t;
                    null === (t = S.monitorPlugin) || void 0 === t || t.error(e.event, e.err, e.detail, e.withoutJSB)
                })), Ji.info = [], Ji.error = []), S.dispatch(gr.INIT_START), S.pagedataPlugin && S.usePlugin(S.pagedataPlugin), S.onPageLoaded(), S.onPageLeave();
                var N = Oi(),
                    A = N.url,
                    R = N.referrer;
                return S.init(A, R), S.setPageInfo(A, R), S.dispatch(gr.INIT_END), S
            }
            return a(c, [{
                key: "initAdInfo",
                value: function(e, t) {
                    this.dispatch(gr.BEFORE_AD_INFO_INIT_START);
                    var n = Qi(cr);
                    if (n) this.initAdCache(n);
                    else if (Gi()) {
                        var r = So(e, t);
                        r && (r.creative_id && r.log_extra || r.callback) && (this.dispatch(gr.AD_INFO_INIT_START), Zi(cr, r), this.setAdInfo(r), this.initOffsiteAdInfo(r))
                    } else this.initBaseAdInfo(e, t)
                }
            }, {
                key: "initAdCache",
                value: function(e) {
                    this.dispatch(gr.AD_INFO_INIT_START), e.ad_info_from = "cache", e.ad_info_status = "fulfilled(cache)", this.setAdInfo(e), this.initOffsiteAdInfo(e)
                }
            }, {
                key: "initBaseAdInfo",
                value: function(t, n) {
                    var i = this;
                    this.adService.webBridgeService.jsbridge && this.dispatch(gr.AD_INFO_INIT_START), this.reportService.pushPreposition(r(e().mark((function r() {
                        var o;
                        return e().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, i.adService.getAdInfo(t, n);
                                case 3:
                                    o = e.sent, i.context.setAdInfo(o), i.initOffsiteAdInfo(o), e.next = 11;
                                    break;
                                case 8:
                                    e.prev = 8, e.t0 = e.catch(0), Ki(Nr.INIT_ERROR, e.t0, {
                                        extJSON: {
                                            position: "initAdInfo"
                                        }
                                    });
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), r, null, [
                            [0, 8]
                        ])
                    })))())
                }
            }, {
                key: "initOffsiteAdInfo",
                value: function(e) {
                    var t = function(e, t) {
                        var n = {};
                        try {
                            var r = e.creative_id,
                                i = (e.callback, e.idc),
                                o = e.convert_id,
                                a = e.ad_info_from,
                                c = e.ad_info_status,
                                u = e.log_extra,
                                s = e.ext_params,
                                l = e.ATTStatus;
                            if (r && (n.creative_id = r), i && (n.idc = i), o && (n.convert_id = o), a && (n.ad_info_from = a), c && (n.ad_info_status = c), s && (n.ext_params = s), l && (n.ATTStatus = l), u) {
                                var f = JSON.parse(u),
                                    d = f.ad_user_agent,
                                    p = f.ad_id,
                                    h = f.rit,
                                    _ = f.ocbs,
                                    v = f.vid,
                                    g = f.idc,
                                    y = f.country_id;
                                p && (n.ad_id = p), h && (n.rit = h), d && (n.ad_user_agent = d), _ && (n.ocbs = _), v && (n.vid = v), g && (n.idc = g), y && (n.country_id = y)
                            }
                            return n
                        } catch (e) {
                            return t && t(e), n
                        }
                    }(e, (function(e) {
                        Ki(Nr.INIT_ERROR, e, {
                            extJSON: {
                                position: "handleAdInfoOfficial"
                            }
                        })
                    }));
                    this.context.setOffsiteAdInfo(t);
                    var n = function(e, t) {
                        try {
                            var n = e.log_extra,
                                r = e.ttuts;
                            return !Mi() || (Ri(t) ? n ? 1 !== JSON.parse(n).user_tracking_status : null === e.ATTStatus || void 0 === e.ATTStatus || 3 === e.ATTStatus : null == r || 1 !== r)
                        } catch (e) {
                            return !1
                        }
                    }(e, this.env);
                    this.context.setEnableAdTracking(n), this.dispatch(gr.AD_INFO_INIT_END, {
                        extJSON: {
                            enabledAdTracking: n
                        }
                    })
                }
            }, {
                key: "initAppInfo",
                value: function(t, n) {
                    var i = this,
                        o = Qi(ur);
                    o ? this.context.setAppInfo(o) : this.reportService.pushPreposition(r(e().mark((function r() {
                        var o;
                        return e().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, i.initBaseAppInfo(t, n);
                                case 2:
                                    return o = e.sent, e.abrupt("return", o);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), r)
                    })))())
                }
            }, {
                key: "initBaseAppInfo",
                value: (n = r(e().mark((function t(n, r) {
                    var i;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, this.appService.getAppInfo(n, r);
                            case 2:
                                return i = e.sent, this.context.setAppInfo(i), e.abrupt("return", i);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e, t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "initTestId",
                value: function(e, t) {
                    if (!this.context.getTestID()) {
                        var n = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                                n = arguments.length > 2 ? arguments[2] : void 0;
                            try {
                                var r = Ti("tt_test_id", e, n);
                                return r && r !== t && uo("tt_test_id", r, void 0, "session"), r || t
                            } catch (e) {
                                return ""
                            }
                        }(e, to("tt_test_id"), t);
                        this.context.setTestID(n)
                    }
                }
            }, {
                key: "initUserInfo",
                value: function() {
                    this.setCookieInfo()
                }
            }, {
                key: "setPageIndex",
                value: function(e) {
                    e && ro(e)
                }
            }, {
                key: "instance",
                value: function(e) {
                    var t = this.getReporter(e);
                    return t || new ia(e, Zn.PIXEL_CODE, {
                        value: !1
                    }, this.context, {
                        pixelCode: e
                    }, {})
                }
            }, {
                key: "instances",
                value: function() {
                    return this.reporters
                }
            }, {
                key: "page",
                value: function(e) {
                    this.beforeAPIExecution();
                    var t = Oi(),
                        n = t.url,
                        r = t.referrer;
                    _(s(c.prototype), "page", this).call(this, Object.assign({
                        url: (null == e ? void 0 : e.page) || n,
                        referrer: (null == e ? void 0 : e.referrer) || r
                    }, e))
                }
            }, {
                key: "track",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var r = {
                            taskName: window.ttq._pf_tn,
                            functionName: "web_track_handler",
                            start: performance.now()
                        }
                    } catch (e) {}
                    this.beforeAPIExecution();
                    var i = n.pixel_code;
                    if (void 0 === i && _(s(c.prototype), "track", this).call(this, e, t, n), void 0 !== i) {
                        var o = this.instance(i);
                        o instanceof ia || o.track(e, t, n)
                    }
                    try {
                        window.ttq && window.ttq._ppf && (r.end = performance.now(), window.ttq._ppf.push(r))
                    } catch (e) {}
                }
            }, {
                key: "identify",
                value: function(e, t) {
                    this.beforeAPIExecution(), _(s(c.prototype), "identify", this).call(this, e, t)
                }
            }, {
                key: "setAdInfo",
                value: function(e) {
                    this.context.setAdInfo(e)
                }
            }, {
                key: "enableFirstPartyCookie",
                value: function(e) {
                    this.cookieService.enableFirstPartyCookie(e), e && this.setCookieInfo()
                }
            }, {
                key: "enableCookie",
                value: function() {
                    this.cookieService.enableFirstPartyCookie(!0), this.setCookieInfo(), this.cookieService.enableCookie()
                }
            }, {
                key: "disableCookie",
                value: function() {
                    this.cookieService.disableCookie(), this.context.setUserInfoWithoutIdentifyPlugin({
                        anonymous_id: void 0
                    }), this.disablePangleCookie()
                }
            }, {
                key: "holdConsent",
                value: function() {
                    this.consentService.setConsentMode(zn.HOLD)
                }
            }, {
                key: "revokeConsent",
                value: function() {
                    this.consentService.setConsentMode(zn.REVOKE)
                }
            }, {
                key: "grantConsent",
                value: function() {
                    this.consentService.setConsentMode(zn.GRANT)
                }
            }, {
                key: "disablePangleCookie",
                value: function() {
                    this.pangleCookieMatchingPlugin && this.pangleCookieMatchingPlugin.disablePangleCookie()
                }
            }, {
                key: "setAnonymousId",
                value: function(e) {
                    this.cookieService.setAnonymousId(e), this.initUserInfo()
                }
            }, {
                key: "resetCookieExpires",
                value: function() {
                    this.cookieService.resetExpires()
                }
            }, {
                key: "setCookieInfo",
                value: function() {
                    if (this.cookieService.canUseCookie()) {
                        var e = this.cookieService.getAnonymousId();
                        if (e) {
                            var t = {
                                anonymous_id: e
                            };
                            this.context.setUserInfoWithoutIdentifyPlugin(t)
                        }
                    }
                }
            }, {
                key: "onPageLoaded",
                value: function() {
                    var e = this;
                    window.addEventListener("load", (function() {
                        e.dispatch(gr.PAGE_DID_LOAD)
                    }), {
                        once: !0
                    })
                }
            }, {
                key: "onPageLeave",
                value: function() {
                    var e = this,
                        t = function() {
                            var t = Date.now();
                            e.dispatch(gr.PAGE_WILL_LEAVE, t), e.consentService.updateCache()
                        };
                    window.addEventListener("beforeunload", t, {
                        once: !0
                    }), Mi() && window.addEventListener("onpagehide" in window ? "pagehide" : "unload", t)
                }
            }, {
                key: "beforeAPIExecution",
                value: function() {
                    try {
                        var e = Oi().url;
                        e !== this.context.getPageInfo().url && (this.setPageInfo(e, document.referrer), this.reporters.forEach((function(e) {
                            e.clearHistory()
                        })))
                    } catch (e) {
                        Ki(Nr.API_ERROR, e, {
                            extJSON: {
                                position: "beforeAPIExecution"
                            }
                        })
                    }
                }
            }, {
                key: "loadPixel",
                value: function(e, t) {
                    e && (this.reporters.find((function(t) {
                        return t.getReporterId() === e
                    })) ? Yi(Ar.DUPLICATE_PIXEL_CODE) : Xr().load(e, t || {}))
                }
            }]), c
        }(Uo),
        ua = ca = oa([A.injectable(), aa(0, A.inject(Sr.CONTEXT)), aa(1, A.inject(Sr.TTQ_REPORTERS)), aa(2, A.inject(Sr.AD_SERVICE)), aa(3, A.inject(Sr.APP_SERVICE)), aa(4, A.inject(Sr.REPORT_SERVICE)), aa(5, A.inject(Sr.COOKIE_SERVICE)), aa(6, A.inject(Sr.CONSENT_SERVICE)), aa(7, A.inject(Sr.ENV)), aa(8, A.inject(Sr.MONITOR_PLUGIN)), aa(8, A.optional()), aa(9, A.inject(Sr.AUTO_ADVANCED_MATCHING_PLUGIN)), aa(9, A.optional()), aa(10, A.inject(Sr.CALLBACK_PLUGIN)), aa(10, A.optional()), aa(11, A.inject(Sr.IDENTIFY_PLUGIN)), aa(11, A.optional()), aa(12, A.inject(Sr.WEB_FL_PLUGIN)), aa(12, A.optional()), aa(13, A.inject(Sr.SHOPIFY_PLUGIN)), aa(13, A.optional()), aa(14, A.inject(Sr.AUTO_CONFIG_PLUGIN)), aa(14, A.optional()), aa(15, A.inject(Sr.DIAGNOSTICS_CONSOLE_PLUGIN)), aa(15, A.optional()), aa(16, A.inject(Sr.COMPETITOR_INSIGHT_PLUGIN)), aa(16, A.optional()), aa(17, A.inject(Sr.PANGLE_COOKIE_MATCHING_PLUGIN)), aa(17, A.optional()), aa(18, A.inject(Sr.EVENT_BUILDER_PLUGIN)), aa(18, A.optional()), aa(19, A.inject(Sr.ENRICH_IPV6_PLUGIN)), aa(19, A.optional()), aa(20, A.inject(Sr.PAGEDATA_PLUGIN)), aa(20, A.optional()), aa(21, A.inject(Sr.HISTORY_OBSERVER)), aa(21, A.optional()), aa(22, A.inject(Sr.RUNTIME_MEASUREMENT_PLUGIN)), aa(22, A.optional())], ca);
    ! function(e) {
        e.BIND = "bind", e.REBIND = "rebind"
    }(Vo || (Vo = {}));
    var sa = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        la = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        fa = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a, c) {
                var u;
                return i(this, n), (u = t.call(this, e)).setSignalType(c || vr.OFFSITE), u.pageSign = {
                    sessionId: "",
                    pageId: "",
                    variationId: "",
                    pageIndex: {
                        main: -1,
                        sub: -1,
                        index: -1
                    }
                }, u.legacy = o.legacy || [], u.variationId = o.variation_id || "", u.serverUniqueId = o.server_unqiue_id || "", u.reportService = r, u.initPageSign(), Ri(a) && Mi() && (u.enableAdTracking = !1), u.data = f(u), u
            }
            return a(n, [{
                key: "getSessionIdFromCache",
                value: function() {
                    var e = null;
                    try {
                        e = JSON.parse(sessionStorage.getItem(dr) || "")
                    } catch (e) {}
                    return e
                }
            }, {
                key: "setSessionIdToCache",
                value: function(e) {
                    Zi(dr, e)
                }
            }, {
                key: "getVariationId",
                value: function() {
                    return this.variationId
                }
            }, {
                key: "isLegacyPixel",
                value: function(e) {
                    return function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                        try {
                            return t.includes(e)
                        } catch (e) {
                            return !1
                        }
                    }(e, this.legacy)
                }
            }, {
                key: "assignPageInfo",
                value: function(e) {
                    Object.assign(this.pageInfo, e)
                }
            }, {
                key: "getSessionIndex",
                value: function() {
                    var e = {
                        main: -1,
                        sub: -1,
                        index: -1
                    };
                    try {
                        var t = JSON.parse(sessionStorage.getItem(pr) || "{}");
                        if (t) return Object.assign({}, e, t)
                    } catch (e) {}
                    return e
                }
            }, {
                key: "setUserInfo",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    if (0 !== Object.keys(t).length) {
                        var n = {};
                        Object.entries(t).forEach((function(t) {
                            var r = v(t, 2),
                                i = r[0],
                                o = r[1];
                            o && (i !== Jr ? n[i] = String(o).trim() : e.setUserInfoWithoutIdentifyPlugin(c({}, Jr, o)))
                        }));
                        var r = Xr(),
                            i = null == r ? void 0 : r.getPlugin("Identify");
                        i && this.reportService.pushPreposition(i.handleUserProperties(n, t).then((function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            try {
                                if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                                    var r = {
                                        taskName: window.ttq._pf_tn || "identify_after_encryption",
                                        functionName: window.ttq._pf_tn && "identify_after_encryption",
                                        start: performance.now()
                                    };
                                    window.ttq._pf_tn || (window.ttq._pf_tn = "identify_after_encryption")
                                }
                            } catch (e) {}
                            var o = t.userProperties,
                                a = t.userDataFormat,
                                c = t.userDataFormatV2;
                            if (o) {
                                Object.assign(e.userInfo, o);
                                var u = e.getUserFormatInfo() || {},
                                    s = e.getUserFormatInfoV2() || {},
                                    l = e.getSignalDiagnosticLabels() || {};
                                if (e.setUserFormatInfo(Object.assign({}, u, a)), e.setUserFormatInfoV2(Object.assign({}, s, c)), e.setSignalDiagnosticLabels(Object.assign({}, l, t.identifierLabel || {})), 0 === Object.keys(e.userInfo).length || 1 === Object.keys(n).length && Object.keys(n).includes("external_id")) return;
                                var f = i.reporters[0] || null,
                                    d = f ? Object.keys(Object.assign({}, f.getUserInfo(Hn.Manual), f.getUserInfo(Hn.Auto))) : [];
                                f && d.length && f.track("EnrichAM", {}, {}, wr.TRACK)
                            }
                            try {
                                window.ttq && window.ttq._ppf && (r.end = performance.now(), window.ttq._ppf.push(r), "identify_after_encryption" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                            } catch (e) {}
                        })).catch((function(e) {
                            Ki(Nr.API_ERROR, e, {
                                extJSON: {
                                    api: "identify"
                                }
                            })
                        })))
                    }
                }
            }, {
                key: "initPageSign",
                value: function() {
                    var e, t = this.getSessionIdFromCache();
                    null === t && (t = (e = this.serverUniqueId) ? "".concat(e).concat(_r).concat(ui(20)) : nr("sessionId"), this.setSessionIdToCache(t));
                    var n, r = this.getPageId((n = t) ? n.split(_r)[0] : ""),
                        i = this.getVariationId(),
                        o = this.getSessionIndex();
                    o.main++, this.pageSign = {
                        sessionId: t,
                        pageId: r,
                        variationId: i,
                        pageIndex: o
                    }
                }
            }]), n
        }(Ao);
    fa = sa([A.injectable(), la(0, A.inject(Ir.WebLibraryInfo)), la(1, A.inject(Sr.REPORT_SERVICE)), la(2, A.inject(Sr.TTQ_GLOBAL_OPTIONS)), la(3, A.inject(Sr.ENV)), la(3, A.optional()), la(4, A.inject(Ir.SignalType)), la(4, A.optional())], fa);
    var da = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        pa = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        ha = function() {
            function t(e) {
                i(this, t), this.webBridgeService = e
            }
            var n;
            return a(t, [{
                key: "getAdInfo",
                value: (n = r(e().mark((function t(n, r) {
                    var i, o, a;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = this.getAdInfoFromURL(n, r), !this.webBridgeService.jsbridge) {
                                    e.next = 7;
                                    break
                                }
                                return e.next = 4, this.webBridgeService.getAdInfo();
                            case 4:
                                e.t0 = e.sent, e.next = 8;
                                break;
                            case 7:
                                e.t0 = {};
                            case 8:
                                return o = e.t0, (a = Object.assign({}, i, o)) && (a.creative_id && a.log_extra || a.callback) && Zi(cr, a), e.abrupt("return", a);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e, t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "getAdInfoFromURL",
                value: function(e, t) {
                    return So(e, t)
                }
            }]), t
        }();
    ha = da([A.injectable(), pa(0, A.inject(Sr.BRIDGE_SERVICE))], ha);
    var _a = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        va = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        ga = function() {
            function t(e) {
                i(this, t), this.webBridgeService = e
            }
            var n;
            return a(t, [{
                key: "getAppInfo",
                value: (n = r(e().mark((function t(n, r) {
                    var i, o, a, c;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ((i = this.getAppInfoFromURL(n, r)).platform = Pi(), !ki()) {
                                    e.next = 10;
                                    break
                                }
                                return e.next = 5, Ci();
                            case 5:
                                o = e.sent, a = o.model, c = o.platformVersion, i.device_model = a, i.android_version = c;
                            case 10:
                                return tr(i) || Zi(ur, i), e.abrupt("return", i);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e, t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "getAppInfoFromURL",
                value: function(e, t) {
                    try {
                        var n = Ti(Fr, e, t),
                            r = n && JSON.parse(n);
                        return {
                            device_id: r.device_id,
                            user_id: r.uid
                        }
                    } catch (e) {
                        return {}
                    }
                }
            }]), t
        }();
    ga = _a([A.injectable(), va(0, A.inject(Sr.BRIDGE_SERVICE))], ga);
    var ya = "ad_analytics_msg",
        ma = function(e) {
            return !!(e.code && e.data && e.ret)
        };

    function Ea(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = {};
        try {
            if ("string" == typeof e) n.data = JSON.parse(e);
            else if (ma(e))(n = e).__data && (n.data = n.__data);
            else if (void 0 !== e.code) {
                var r = Object.assign({}, e),
                    i = r.code;
                n.code = i, delete r.code, r.data ? n.data = r.data : n.data = r
            } else n.data = e
        } catch (e) {
            t && Ki(Nr.JSB_ERROR, e, {
                extJSON: {
                    position: "getCallPromise bridge.call"
                }
            })
        }
        return n
    }
    var ba, wa = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Ia = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Ta = function() {
            function t(e, n) {
                i(this, t), this.env = e, Ai(this.env) && (this.jsbridge = n), this.bridgeTimeout = 400
            }
            var n, o, c, u, s, l, f;
            return a(t, [{
                key: "getAdInfo",
                value: (f = r(e().mark((function t() {
                    var n = this;
                    return e().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (this.jsbridge) {
                                    t.next = 3;
                                    break
                                }
                                return Ki(Nr.JSB_ERROR, new Error("tt bridge error when getting ad info"), {
                                    extJSON: {
                                        position: "getAdInfo"
                                    }
                                }), t.abrupt("return", Promise.resolve({}));
                            case 3:
                                return t.abrupt("return", new Promise(function() {
                                    var t = r(e().mark((function t(r) {
                                        var i;
                                        return e().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, n.callAdInfo();
                                                case 3:
                                                    (i = e.sent).ad_info_from = "jsb", i.ad_info_status = i.ad_info_status || "fulfilled", r(i), e.next = 13;
                                                    break;
                                                case 9:
                                                    e.prev = 9, e.t0 = e.catch(0), r({}), Ki(Nr.JSB_ERROR, e.t0, {
                                                        extJSON: {
                                                            position: "getAdInfo"
                                                        }
                                                    });
                                                case 13:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), t, null, [
                                            [0, 9]
                                        ])
                                    })));
                                    return function(e) {
                                        return t.apply(this, arguments)
                                    }
                                }()));
                            case 4:
                            case "end":
                                return t.stop()
                        }
                    }), t, this)
                }))), function() {
                    return f.apply(this, arguments)
                })
            }, {
                key: "callAdInfo",
                value: (l = r(e().mark((function t() {
                    var n, r;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, this.call("adInfo", {}, Li() ? 3500 : 5e3);
                            case 3:
                                if ((n = e.sent).data) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return", Promise.reject("adInfo no data"));
                            case 6:
                                return r = {
                                    creative_id: n.data.cid,
                                    log_extra: n.data.log_extra
                                }, e.abrupt("return", r);
                            case 10:
                                if (e.prev = 10, e.t0 = e.catch(0), "JSBRIDGE TIMEOUT" !== e.t0) {
                                    e.next = 17;
                                    break
                                }
                                return Wi(Nr.CUSTOM_INFO, {
                                    custom_name: "ad_info_init_timeout"
                                }), e.abrupt("return", {
                                    ad_info_status: "timeout"
                                });
                            case 17:
                                return Ki(Nr.JSB_ERROR, e.t0, {
                                    extJSON: {
                                        position: "getAdInfo"
                                    }
                                }), e.abrupt("return", {});
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), t, this, [
                        [0, 10]
                    ])
                }))), function() {
                    return l.apply(this, arguments)
                })
            }, {
                key: "getAppInfo",
                value: (s = r(e().mark((function t() {
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", Promise.resolve({}));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), t)
                }))), function() {
                    return s.apply(this, arguments)
                })
            }, {
                key: "send",
                value: (u = r(e().mark((function t(n, r) {
                    var i, o, a, c, u, s, l, f, d, p, h, _;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.jsbridge) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", Promise.resolve());
                            case 2:
                                return a = (null === (o = null === (i = null == n ? void 0 : n.context) || void 0 === i ? void 0 : i.ad) || void 0 === o ? void 0 : o.creative_id) || "0", c = wo(n), u = oi(n), s = {
                                    analytics_message: c,
                                    trackLogData: JSON.stringify(n),
                                    category: "ad_analytics_msg",
                                    tag: ya,
                                    label: u
                                }, d = {
                                    eventName: ya,
                                    labelName: u,
                                    value: a,
                                    extValue: "0",
                                    extJson: s
                                }, "insight_log_monitor" === u && Hi() ? (f = "x.reportAppLog", p = {
                                    eventName: "insight_log_monitor",
                                    params: s
                                }, l = this.call("x.reportAppLog", p, this.bridgeTimeout)) : Gi() || ii(n) ? (f = "sendLog", l = this.call("sendLog", d, this.bridgeTimeout)) : Ri(this.env) ? Mi() && r ? (h = {
                                    eventName: u,
                                    params: s
                                }, f = "sendLogWithAdInfo", l = this.call("sendLogWithAdInfo", h, this.bridgeTimeout)) : (f = "sendLog", l = this.call("sendLog", d, this.bridgeTimeout)) : (_ = {
                                    event_name: u,
                                    version: 2,
                                    properties: s
                                }, f = "track_event", l = this.call("track_event", _, 400)), Wi(Nr.CUSTOM_INFO, {
                                    custom_name: "send_report_data",
                                    extJSON: {
                                        api_name: f
                                    }
                                }), e.abrupt("return", l);
                            case 10:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e, t) {
                    return u.apply(this, arguments)
                })
            }, {
                key: "call",
                value: (c = r(e().mark((function t(n) {
                    var r, i, o, a = this,
                        c = arguments;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = c.length > 1 && void 0 !== c[1] ? c[1] : {}, i = c.length > 2 && void 0 !== c[2] ? c[2] : 400, o = !(c.length > 3 && void 0 !== c[3]) || c[3], e.abrupt("return", new Promise((function(e, t) {
                                    if (!a.jsbridge) return t("JSBRIDGE ERROR"), void(o && Ki(Nr.JSB_ERROR, new Error("JSBRIDGE ERROR"), {
                                        extJSON: {
                                            position: "getCallPromise"
                                        }
                                    }));
                                    var c;
                                    i > 0 && (c = window.setTimeout((function() {
                                        t("JSBRIDGE TIMEOUT"), o && Ki(Nr.JSB_ERROR, new Error("JSBRIDGE TIMEOUT"), {
                                            extJSON: {
                                                position: "getCallPromise",
                                                method: n
                                            }
                                        })
                                    }), i)), a.jsbridge && a.jsbridge.call && a.jsbridge.call(n, r, (function(t) {
                                        var n = Ea(t, o);
                                        e(n), window.clearTimeout(c)
                                    }))
                                })));
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), t)
                }))), function(e) {
                    return c.apply(this, arguments)
                })
            }, {
                key: "sendAnalyticsEvent",
                value: (o = r(e().mark((function t(n) {
                    var r, i, o, a, c;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return r = n.method, i = n.path, o = n.params, a = n.data, e.next = 3, this.call("sendAnalyticsEvent", {
                                    method: r,
                                    path: i,
                                    params: o,
                                    data: a,
                                    header: {
                                        "Content-Type": "application/json"
                                    }
                                }, 0, !1);
                            case 3:
                                return c = e.sent, e.abrupt("return", null == c ? void 0 : c.code);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e) {
                    return o.apply(this, arguments)
                })
            }, {
                key: "updateWebFlData",
                value: (n = r(e().mark((function t(n) {
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!Ri(this.env) || !Mi()) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", this.call("updateFLLocalConv", n, this.bridgeTimeout));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e) {
                    return n.apply(this, arguments)
                })
            }]), t
        }();
    Ta = wa([A.injectable(), Ia(0, A.inject(Sr.ENV)), Ia(0, A.optional()), Ia(1, A.inject(Sr.JS_BRIDGE)), Ia(1, A.optional())], Ta),
        function(e) {
            e[e.P0 = 4] = "P0", e[e.P1 = 3] = "P1", e[e.P2 = 2] = "P2", e[e.P3 = 1] = "P3"
        }(ba || (ba = {}));
    var Oa = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Sa = "tt_hold_events",
        Na = function(e) {
            u(n, e);
            var t = p(n);

            function n() {
                var e;
                return i(this, n), (e = t.apply(this, arguments)).consentMode = zn.UNKNOWN, e.queue = [], e.debounceUpdateCache = fi((function() {
                    e.updateCache()
                }), 200, f(e)), e.handleHistoryQueue = ci((function() {
                    var t = Qi(Sa);
                    Array.isArray(t) && (e.queue = e.queue.concat(t), e.changeQueueWithConsent())
                })), e
            }
            return a(n, [{
                key: "on",
                value: function(e, t) {
                    _(s(n.prototype), "on", this).call(this, e, t), this.handleHistoryQueue()
                }
            }, {
                key: "setConsentMode",
                value: function(e) {
                    this.consentMode = e, this.changeQueueWithConsent()
                }
            }, {
                key: "changeQueueWithConsent",
                value: function() {
                    switch (this.consentMode) {
                        case zn.REVOKE:
                            this.cleanQueue();
                            break;
                        case zn.GRANT:
                            this.releaseQueue(), this.cleanQueue();
                        case zn.HOLD:
                        case zn.UNKNOWN:
                    }
                }
            }, {
                key: "getConsentMode",
                value: function() {
                    return this.consentMode
                }
            }, {
                key: "cacheReportTask",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Bn.defaultReport;
                    this.queue.push({
                        url: e,
                        data: t,
                        type: n
                    }), this.debounceUpdateCache()
                }
            }, {
                key: "cleanQueue",
                value: function() {
                    this.queue = [],
                        function(e) {
                            try {
                                window.sessionStorage.removeItem(e)
                            } catch (e) {}
                        }(Sa)
                }
            }, {
                key: "updateCache",
                value: function() {
                    this.queue && this.queue.length > 0 && Zi(Sa, this.queue)
                }
            }, {
                key: "releaseQueue",
                value: function() {
                    var e = this;
                    this.queue.sort((function(t, n) {
                        return e.getEventPriority(n.data) - e.getEventPriority(t.data)
                    })), this.emit("queue", this.queue)
                }
            }, {
                key: "getEventPriority",
                value: function(e) {
                    return e.event && e.event.length > 0 ? ba.P0 : e.action && e.action.length > 0 ? ba.P1 : "" === e.event ? ba.P2 : ba.P3
                }
            }]), n
        }(Po);
    Na = Oa([A.injectable()], Na);
    var Aa = function(e) {
            return Boolean(e)
        },
        Ra = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Pa = function() {
            function t() {
                i(this, t)
            }
            var n;
            return a(t, [{
                key: "send",
                value: (n = r(e().mark((function t(n, r) {
                    var i, o, a = arguments;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = a.length > 2 && void 0 !== a[2] ? a[2] : 0, e.prev = 1, navigator && navigator.sendBeacon) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", !1);
                            case 4:
                                if ((o = navigator.sendBeacon(n, JSON.stringify(r))) || "number" != typeof i || !(i > 0)) {
                                    e.next = 10;
                                    break
                                }
                                return i--, e.next = 9, di(200);
                            case 9:
                                return e.abrupt("return", this.send(n, r, i));
                            case 10:
                                return e.abrupt("return", o);
                            case 13:
                                return e.prev = 13, e.t0 = e.catch(1), e.abrupt("return", !1);
                            case 16:
                            case "end":
                                return e.stop()
                        }
                    }), t, this, [
                        [1, 13]
                    ])
                }))), function(e, t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "sendByImage",
                value: function(e, t) {
                    (new Image).src = function(e, t) {
                        var n = new URL(e);
                        return Object.keys(t).forEach((function(e) {
                            var r = t[e].toJSON ? t[e].toJSON() : String(t[e]);
                            n.searchParams.set(e, r)
                        })), n.toString()
                    }(e, t)
                }
            }]), t
        }();
    Pa = Ra([A.injectable()], Pa);
    var Ca = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        ka = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Ma = function(t) {
            u(f, t);
            var n, o, c, s, l = p(f);

            function f(e, t, n, r) {
                var o;
                return i(this, f), (o = l.call(this, e, t)).supportSendAnalyticsEvent = !0, o.consentService = n, o.consentService.on("queue", (function(e) {
                    e.forEach((function(e) {
                        var t = e.url,
                            n = e.data,
                            r = e.type;
                        o.report(t, n, r)
                    }))
                })), o.env = r, o
            }
            return a(f, [{
                key: "send",
                value: (s = r(e().mark((function t(n, r, i) {
                    var o, a, c, u, s, l, f;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (this.bridgeService.jsbridge) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return l = !!(s = r).context && "timeout" === (null === (a = null === (o = s.context) || void 0 === o ? void 0 : o.ad) || void 0 === a ? void 0 : a.ad_info_status), f = {}, e.prev = 5, e.next = 8, this.bridgeService.send(s, l);
                            case 8:
                                if ((f = e.sent) && 1 === f.code) {
                                    e.next = 11;
                                    break
                                }
                                throw new Error("[fetch bridge] sendLog error: code ".concat(f && f.code, ", data: ").concat(f && JSON.stringify(f)));
                            case 11:
                                return ri(s.event) && Wi(Nr.JSB_SEND, {
                                    pixelCode: null === (c = s.context.pixel) || void 0 === c ? void 0 : c.code,
                                    app_name: xi() ? "ultralite" : "",
                                    extJSON: {
                                        event: s.event,
                                        event_id: s.event_id,
                                        need_inject_ad_info: l
                                    }
                                }), e.abrupt("return", f);
                            case 15:
                                e.prev = 15, e.t0 = e.catch(5), ri(s.event) && Ki(Nr.JSB_ERROR, e.t0, {
                                    pixelCode: null === (u = s.context.pixel) || void 0 === u ? void 0 : u.code,
                                    custom_name: "sendReportData",
                                    custom_enum: f && f.code ? "".concat(f.code) : "non",
                                    app_name: xi() ? "ultralite" : "",
                                    extJSON: {
                                        position: "sendReportData"
                                    }
                                }), xi() && ki() && this.sendHttpReport(n, s, i);
                            case 19:
                            case "end":
                                return e.stop()
                        }
                    }), t, this, [
                        [5, 15]
                    ])
                }))), function(e, t, n) {
                    return s.apply(this, arguments)
                })
            }, {
                key: "sendHttpReport",
                value: (c = r(e().mark((function t(n, r, i) {
                    var o, a, c, u = arguments;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return o = !(u.length > 3 && void 0 !== u[3]) || u[3], a = u.length > 4 ? u[4] : void 0, e.next = 4, this.httpService.send(n, r, a);
                            case 4:
                                e.sent || this.httpService.sendByImage(n, {
                                    analytics_message: i
                                }), o && Wi(Nr.HTTP_SEND, {
                                    pixelCode: null === (c = r.context.pixel) || void 0 === c ? void 0 : c.code,
                                    extJSON: {
                                        event: r.event,
                                        event_id: r.event_id
                                    }
                                });
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e, t, n) {
                    return c.apply(this, arguments)
                })
            }, {
                key: "beforeReport",
                value: (o = r(e().mark((function t(n, r) {
                    var i, o, a = arguments;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (i = a.length > 2 && void 0 !== a[2] ? a[2] : Bn.defaultReport, (o = this.consentService.getConsentMode()) !== zn.REVOKE) {
                                    e.next = 4;
                                    break
                                }
                                return e.abrupt("return", !1);
                            case 4:
                                if (o !== zn.HOLD) {
                                    e.next = 7;
                                    break
                                }
                                return this.consentService.cacheReportTask(n, r, i), e.abrupt("return", !1);
                            case 7:
                                return e.abrupt("return", !0);
                            case 8:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e, t) {
                    return o.apply(this, arguments)
                })
            }, {
                key: "report",
                value: (n = r(e().mark((function t(n, r) {
                    var i, o, a, c, u, s = arguments;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return i = s.length > 2 && void 0 !== s[2] ? s[2] : Bn.defaultReport, e.next = 3, this.beforeReport(n, r, i);
                            case 3:
                                if (e.sent) {
                                    e.next = 6;
                                    break
                                }
                                return e.abrupt("return");
                            case 6:
                                if (o = wo(r), i !== Bn.defaultReport || !this.bridgeService.jsbridge) {
                                    e.next = 11;
                                    break
                                }
                                return e.next = 10, this.send(n, r, o);
                            case 10:
                                return e.abrupt("return", e.sent);
                            case 11:
                                if (i !== Bn.httpReport || !this.bridgeService.jsbridge || !Ri(this.env) || Di() || !this.supportSendAnalyticsEvent) {
                                    e.next = 30;
                                    break
                                }
                                return a = n, e.prev = 13, a = new URL(n).pathname, e.next = 17, this.bridgeService.sendAnalyticsEvent({
                                    path: a,
                                    method: "POST",
                                    data: r
                                });
                            case 17:
                                if (c = e.sent, u = new Error("sendAnalyticsEvent not support: code ".concat(c, ", path: ").concat(a, ", data: ").concat(JSON.stringify(r))), null != c && -2 !== c) {
                                    e.next = 22;
                                    break
                                }
                                throw this.supportSendAnalyticsEvent = !1, u;
                            case 22:
                                if (1 !== c) {
                                    e.next = 24;
                                    break
                                }
                                return e.abrupt("return");
                            case 24:
                                throw u;
                            case 27:
                                e.prev = 27, e.t0 = e.catch(13), Ki(Nr.CUSTOM_ERROR, e.t0, {
                                    custom_name: "sendAnalyticsEvent",
                                    custom_enum: String(c)
                                }, !0);
                            case 30:
                                this.sendHttpReport(n, r, o, !(!ri(r.event) || !ai(r)), Aa(r.action) ? 3 : void 0);
                            case 31:
                            case "end":
                                return e.stop()
                        }
                    }), t, this, [
                        [13, 27]
                    ])
                }))), function(e, t) {
                    return n.apply(this, arguments)
                })
            }, {
                key: "reportFL",
                value: function(e) {
                    this.bridgeService.jsbridge && this.bridgeService.updateWebFlData(e)
                }
            }]), f
        }(Bo);
    Ma = Ca([A.injectable(), ka(0, A.inject(Sr.HTTP_SERVICE)), ka(1, A.inject(Sr.BRIDGE_SERVICE)), ka(2, A.inject(Sr.CONSENT_SERVICE)), ka(3, A.inject(Sr.ENV)), ka(3, A.optional())], Ma);
    var La = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Da = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        xa = function() {
            function t(e) {
                i(this, t), this.cookieExpireOption = function(e) {
                    if (e && e.cde) {
                        var t = e.cde;
                        return Object.assign({}, br, {
                            expires: t
                        })
                    }
                    return br
                }(e)
            }
            var n;
            return a(t, [{
                key: "genCookieID",
                value: function() {
                    return ui(27)
                }
            }, {
                key: "enableCookie",
                value: (n = r(e().mark((function t() {
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return no(sr, "1", this.cookieExpireOption), e.abrupt("return", fo("https://analytics.tiktok.com/i18n/pixel/enable_cookie"));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function() {
                    return n.apply(this, arguments)
                })
            }, {
                key: "enableFirstPartyCookie",
                value: function(e) {
                    if (e) {
                        no(sr, "1", this.cookieExpireOption);
                        var t = this.getAnonymousId();
                        this.setAnonymousId(t || this.genCookieID())
                    }
                }
            }, {
                key: "disableCookie",
                value: function() {
                    no(sr, "0", this.cookieExpireOption), no(lr, "", Object.assign(this.cookieExpireOption, {
                        expires: -1
                    })), fo("https://analytics.tiktok.com/i18n/pixel/disable_cookie")
                }
            }, {
                key: "setAnonymousId",
                value: function(e) {
                    var t = this.getAnonymousId() || e;
                    if (t) {
                        var n = t.split(".")[0];
                        no(lr, n, this.cookieExpireOption)
                    }
                }
            }, {
                key: "getAnonymousId",
                value: function() {
                    return to(lr) || ""
                }
            }, {
                key: "canUseCookie",
                value: function() {
                    try {
                        return "0" !== to(sr)
                    } catch (e) {}
                    return !1
                }
            }, {
                key: "resetExpires",
                value: function() {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var e = {
                            taskName: window.ttq._pf_tn,
                            functionName: "resetExpires",
                            start: performance.now()
                        }
                    } catch (e) {}
                    var t = to(sr);
                    t && no(sr, t, this.cookieExpireOption);
                    var n = this.getAnonymousId();
                    n && this.setAnonymousId(n);
                    try {
                        window.ttq && window.ttq._ppf && (e.end = performance.now(), window.ttq._ppf.push(e))
                    } catch (e) {}
                }
            }]), t
        }();
    xa = La([A.injectable(), Da(0, A.inject(Sr.TTQ_GLOBAL_OPTIONS))], xa);
    var ja = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Ua = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Fa = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r) {
                var o;
                return i(this, n), (o = t.call(this, {
                    name: "Callback",
                    reporters: r,
                    context: e
                })).ttclidCookieValue = "undefined" != typeof document ? to(Ur) : "", o
            }
            return a(n, [{
                key: "pixelDidMount",
                value: function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                            taskName: window.ttq._pf_tn,
                            functionName: "callback_plugin_pixelDidMount",
                            start: performance.now()
                        }
                    } catch (e) {}
                    var n = Oi(),
                        r = n.url,
                        i = n.referrer,
                        o = Ti(Ur, r, i);
                    o && this.ttclidCookieValue !== o && uo(Ur, o);
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
                    } catch (e) {}
                }
            }]), n
        }(xo);
    Fa = ja([A.injectable(), Ua(0, A.inject(Sr.CONTEXT)), Ua(1, A.inject(Sr.TTQ_REPORTERS))], Fa);
    var Ba = {
            isHash: function(e) {
                return !1
            },
            genIdentifierLabelByUserProperties: function(e) {
                return {}
            }
        },
        qa = {
            validatePhoneNumberLength: function(e) {},
            parsePhoneNumberFromString: function(e) {}
        },
        Ga = {
            tryDecodeHashedBase64String: function(e) {
                return null
            },
            tryDecodeHashedBase64Hex: function(e) {
                return null
            }
        },
        Va = function(e) {
            var t, n = e.parsePhoneNumberFromString,
                r = e.validatePhoneNumberLength,
                i = e.isHash,
                o = e.genIdentifierLabelByUserProperties,
                a = e.tryDecodeHashedBase64String,
                c = e.tryDecodeHashedBase64Hex,
                u = e.checkEmailFormat,
                s = e.checkMDNEmailFormat;
            e.sha256, t = {
                    checkEmailFormat: u,
                    checkMDNEmailFormat: s
                }, t.checkMDNEmailFormat,
                function(e) {
                    var t = e.tryDecodeHashedBase64String,
                        n = e.tryDecodeHashedBase64Hex;
                    Ga.tryDecodeHashedBase64String = t, Ga.tryDecodeHashedBase64Hex = n
                }({
                    tryDecodeHashedBase64String: a,
                    tryDecodeHashedBase64Hex: c
                }),
                function(e) {
                    var t = e.isHash,
                        n = e.genIdentifierLabelByUserProperties;
                    Ba.isHash = t, Ba.genIdentifierLabelByUserProperties = n
                }({
                    isHash: i,
                    genIdentifierLabelByUserProperties: o
                }),
                function(e) {
                    var t = e.parsePhoneNumberFromString,
                        n = e.validatePhoneNumberLength;
                    qa.parsePhoneNumberFromString = t, qa.validatePhoneNumberLength = n
                }({
                    parsePhoneNumberFromString: n,
                    validatePhoneNumberLength: r
                })
        },
        Ha = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : qa.parsePhoneNumberFromString,
                r = e,
                i = t ? n(e, t) : n(e);
            return i ? r = "86" === i.countryCallingCode ? i.nationalNumber : i.number : e.replace(/[^0-9]/g, "").length > 0 && (r = e.replace(/[^0-9]/g, "")), r
        },
        Ja = ["(null)", "", "''\"", void 0, "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855", "eb045d78d273107348b0300c01d29b7552d622abbc6faf81b3ec55359aa9950c", "not set", null, "6181738008c985a1b5f106b796c98e719efcc3c0ff68ddcd14a049825f4900a8", "2a539d6520266b56c3b0c525b9e6128858baeccb5ee9b694a2906e123c8d6dd3", "c6e52c372287175a895926604fa738a0ad279538a67371cd56909c7917e69ea1", "None", "74234e98afe7498fb5daf1f36ac2d78acc339464f950703b8c019892f982b90b", "f24f02d3c35894296522abac8c4b2439b1c1b650e1fb4c97c0f3c50b580b0a3c", "no", "a683c5c5349f6f7fb903ba8a9e7e55d0ba1b8f03579f95be83f4954c33e81098", "f18a2548c063c5a2b1560c6f2b9ec44bf9ed9017884404016d74f330119aaefe", "449f06574cd639e1826848ff5d70ba95904574be84f34e61baa526d517dfb493", "fcbcf165908dd18a9e49f7ff27810176db8e9f63b4352213741664245224f8aa", "NA", "bc857c49633bbc75644c51f36b16b2f768cc0ee13f65402ec7c32c96308272dd", "42cbf37902c6911d7b4e371fe8f8708a0ceda6946249d4a3e23de8d5e60ae8b7"],
        Wa = function(e) {
            u(n, e);
            var t = p(n);

            function n(e) {
                var r = e.name,
                    o = e.context,
                    a = e.reporters;
                return i(this, n), t.call(this, {
                    name: r,
                    reporters: a,
                    context: o
                })
            }
            return a(n, [{
                key: "setIdentifyUtils",
                value: function(e) {
                    var t = e.isHash,
                        n = e.sha256,
                        r = e.genIdentifierLabelByUserProperties,
                        i = e.tryDecodeHashedBase64String,
                        o = e.tryDecodeHashedBase64Hex,
                        a = e.validatePhoneNumberLength,
                        c = e.parsePhoneNumberFromString,
                        u = e.checkEmailFormat,
                        s = e.checkMDNEmailFormat,
                        l = e.getCookieDeprecationLabel,
                        f = void 0 === l ? function() {} : l,
                        d = e.getAllTopics,
                        p = void 0 === d ? function() {} : d;
                    Va({
                        isHash: t,
                        sha256: n,
                        genIdentifierLabelByUserProperties: r,
                        tryDecodeHashedBase64String: i,
                        tryDecodeHashedBase64Hex: o,
                        validatePhoneNumberLength: a,
                        parsePhoneNumberFromString: c,
                        checkEmailFormat: u,
                        checkMDNEmailFormat: s
                    }), this.parsePhoneNumberFromString = c, this.checkMDNEmailFormat = s, this.checkEmailFormat = u, this.sha256 = n, this.getCookieDeprecationLabel = f, this.getAllTopics = p
                }
            }, {
                key: "baseHandleUserProperties",
                value: function(e, t) {
                    var n = this;
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var r = {
                                taskName: window.ttq._pf_tn || "identify_encryption",
                                functionName: window.ttq._pf_tn && "identify_encryption",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "identify_encryption")
                        }
                    } catch (e) {}
                    if (e) {
                        var i = this.identifyParamsFormattedInfo(e),
                            o = this.identifyParamsFormattedInfoV2(e),
                            a = Ba.genIdentifierLabelByUserProperties(t);
                        this.handlePIIDiagnostics(o), Object.entries(e).forEach((function(t) {
                            var r = v(t, 2),
                                i = r[0],
                                a = r[1],
                                c = void 0 === a ? "" : a;
                            if (c) {
                                var u = String(c);
                                if (["email", "phone_number", "sha256_email", "sha256_phone_number"].includes(i)) {
                                    var s = n.getUserDataFormatInfoV2KeyName(i),
                                        l = Ga.tryDecodeHashedBase64Hex(u);
                                    if (null !== l) e[i] = l, null !== s && (o = n.updateUserDataFormatV2Label(s, Vn.BASE64_HEX_HASHED, o));
                                    else {
                                        var f = Ga.tryDecodeHashedBase64String(u);
                                        f && (e[i] = f, null !== s && (o = n.updateUserDataFormatV2Label(s, Vn.BASE64_STRING_HASHED, o)))
                                    }
                                }
                                switch ("zip_code" === i && u && (Ba.isHash(u) ? o = n.updateUserDataFormatV2Label("zip_code", Vn.ZIP_CODE_IS_HASHED, o) : (o = n.updateUserDataFormatV2Label("zip_code", Vn.ZIP_CODE_IS_NOT_HASHED, o), n.isZipFromUs(e) ? (e.zip_code = n.sha256(n.truncateString(u, 5)), o = n.updateUserDataFormatV2Label("zip_code", Vn.ZIP_CODE_IS_US, o)) : (e.zip_code = n.sha256(u), o = n.updateUserDataFormatV2Label("zip_code", Vn.ZIP_CODE_IS_NOT_US, o)))), i) {
                                    case "email":
                                        e.email = Ba.isHash(u) && !n.checkEmailFormat(u) ? u : n.sha256(n.handleEmail(u));
                                        break;
                                    case "phone_number":
                                        e.phone_number = Ba.isHash(u) ? u : n.sha256(n.handlePhoneNumber(u));
                                        break;
                                    case "auto_email":
                                        e.auto_email = n.sha256(n.handleEmail(u));
                                        break;
                                    case "auto_phone_number":
                                        e.auto_phone_number = n.sha256(n.handlePhoneNumber(u));
                                        break;
                                    case "first_name":
                                        e.first_name = Ba.isHash(u) ? u : n.sha256(u);
                                        break;
                                    case "last_name":
                                        e.last_name = Ba.isHash(u) ? u : n.sha256(u);
                                        break;
                                    case "city":
                                        e.city = n.truncateString(u, 80);
                                        break;
                                    case "state":
                                        e.state = n.truncateString(u, 80);
                                        break;
                                    case "country":
                                        e.country = n.truncateString(u, 80);
                                        break;
                                    default:
                                        return
                                }
                            }
                        })), e.sha256_email && (e.email = this.handleCheckHashedEmailValue(String(e.sha256_email), i)), e.sha256_phone_number && (e.phone_number = this.handleCheckHashedPhoneValue(String(e.sha256_phone_number), i));
                        try {
                            window.ttq && window.ttq._ppf && (r.end = performance.now(), window.ttq._ppf.push(r), "identify_encryption" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                        } catch (e) {}
                        return {
                            userProperties: e,
                            userDataFormat: i,
                            userDataFormatV2: o,
                            identifierLabel: a
                        }
                    }
                }
            }, {
                key: "identifyParamsFormattedInfo",
                value: function(e) {
                    var t = this,
                        n = {},
                        r = /^sha256_(.*)$/;
                    return Object.entries(e).forEach((function(e) {
                        var i = v(e, 2),
                            o = i[0],
                            a = i[1],
                            c = String(void 0 === a ? "" : a),
                            u = o.match(r);
                        switch (o) {
                            case "email":
                                t.handleEmailFormat(c, "email", n);
                                break;
                            case "phone_number":
                                t.handlePhoneNumberFormat(c, "phone_number", n);
                                break;
                            case "auto_email":
                                t.handleEmailFormat(c, "auto_email", n);
                                break;
                            case "auto_phone_number":
                                t.handlePhoneNumberFormat(c, "auto_phone_number", n);
                                break;
                            case (u || {}).input:
                                var s = null == u ? void 0 : u.pop();
                                s && Br.includes(s) && (n[s] = [Gn.HASHED]);
                                break;
                            case "first_name":
                            case "last_name":
                            case "city":
                            case "state":
                            case "country":
                            case "zip_code":
                            case "partner_id":
                                t.handleNewPiisFormat(c, o, n);
                                break;
                            default:
                                n[o] = [Gn.CORRECT_FORMAT]
                        }
                    })), n
                }
            }, {
                key: "identifyParamsFormattedInfoV2",
                value: function(e) {
                    var t = this,
                        n = {};
                    return Object.entries(e).forEach((function(e) {
                        var r = v(e, 2),
                            i = r[0],
                            o = r[1],
                            a = String(void 0 === o ? "" : o);
                        switch (i) {
                            case "email":
                                t.handlePixelValidation(a, qr, n);
                                break;
                            case "phone_number":
                                t.handlePixelValidation(a, Gr, n);
                                break;
                            case "sha256_email":
                                t.handlePixelValidation(a, Vr, n);
                                break;
                            case "sha256_phone_number":
                                t.handlePixelValidation(a, Hr, n);
                                break;
                            case "first_name":
                            case "last_name":
                            case "city":
                            case "state":
                            case "country":
                            case "zip_code":
                            case "partner_id":
                                break;
                            default:
                                n[i] = [Vn.UNKNOWN_INVALID]
                        }
                    })), n
                }
            }, {
                key: "updateUserDataFormatV2Label",
                value: function(e, t, n) {
                    var r, i;
                    return (null === n[e] || void 0 === n[e] || (null === (r = n[e]) || void 0 === r ? void 0 : r.includes(Vn.UNKNOWN_INVALID))) && (n[e] = []), null === (i = n[e]) || void 0 === i || i.push(t), n
                }
            }, {
                key: "getUserDataFormatInfoV2KeyName",
                value: function(e) {
                    return {
                        email: "email_is_hashed",
                        phone_number: "phone_is_hashed",
                        sha256_email: "sha256_email",
                        sha256_phone_number: "sha256_phone",
                        zip_code: "zip_code"
                    }[e] || null
                }
            }, {
                key: "handlePIIDiagnostics",
                value: function(e) {}
            }, {
                key: "handleEmail",
                value: function(e) {
                    return e.toLowerCase()
                }
            }, {
                key: "handlePhoneNumber",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.parsePhoneNumberFromString;
                    return Ha(e, "", t)
                }
            }, {
                key: "handleCheckHashedEmailValue",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.checkEmailFormat;
                    return t.email = t.email || [], Ba.isHash(e) ? (null == t || t.email.push(Gn.HASHED_CORRECT), e) : n(e) ? (null == t || t.email.push(Gn.PLAINTEXT_EMAIL), this.sha256(this.handleEmail(String(e)))) : (null == t || t.email.push(Gn.HASHED_ERR), this.sha256(e))
                }
            }, {
                key: "handleCheckHashedPhoneValue",
                value: function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.parsePhoneNumberFromString;
                    return t.phone_number = t.phone_number || [], Ba.isHash(e) ? (null == t || t.phone_number.push(Gn.HASHED_CORRECT), e) : n(e) ? (t.phone_number.push(Gn.PLAINTEXT_PHONE), this.sha256(this.handlePhoneNumber(String(e), n))) : (null == t || t.phone_number.push(Gn.HASHED_ERR), this.sha256(e))
                }
            }, {
                key: "handlePixelValidation",
                value: function(e, t, n) {
                    n[t] = [], Ja.includes(e) && n[t].push(Vn.FILTER_EVENTS), e && Ba.isHash(e) && n[t].push(Vn.HASHED), e && this.checkEmailFormat(e) && n[t].push(Vn.PLAIN_EMAIL), e && this.checkMDNEmailFormat(e) && n[t].push(Vn.PLAIN_MDN_EMAIL), e && this.parsePhoneNumberFromString(e) && n[t].push(Vn.PLAIN_PHONE), e && 0 === n[t].length && n[t].push(Vn.UNKNOWN_INVALID)
                }
            }, {
                key: "isZipFromUs",
                value: function(e) {
                    var t;
                    return "us" === (null === (t = e.country) || void 0 === t ? void 0 : t.toLowerCase()) || !1
                }
            }, {
                key: "truncateString",
                value: function(e, t) {
                    var n = Array.from(e);
                    return n.length <= t ? e : n.slice(0, t).join("")
                }
            }, {
                key: "handlePhoneNumberFormat",
                value: function(e, t, n) {
                    var r = this.handleCheckPhoneNumber(String(e), this.parsePhoneNumberFromString);
                    n[t] = r
                }
            }, {
                key: "handleCheckPhoneNumber",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.parsePhoneNumberFromString,
                        n = [];
                    if (!e) return n.push(Gn.EMPTY_VALUE), n;
                    if (Ba.isHash(e)) return n.push(Gn.HASHED), n;
                    var r = t(e);
                    return r ? (n.push(Gn.CORRECT_FORMAT), n) : (n.push(Gn.WRONG_FORMAT), n)
                }
            }, {
                key: "handleCheckEmail",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.checkEmailFormat,
                        n = [];
                    return e ? Ba.isHash(e) ? (n.push(Gn.HASHED), n) : t(e) ? (n.push(Gn.CORRECT_FORMAT), n) : (n.push(Gn.WRONG_FORMAT), n) : (n.push(Gn.EMPTY_VALUE), n)
                }
            }, {
                key: "handleEmailFormat",
                value: function(e, t, n) {
                    var r = this.handleCheckEmail(String(e), this.checkEmailFormat);
                    n && n[t] && (n[t] || []).includes(Gn.HASHED) || (n[t] = r)
                }
            }, {
                key: "handleNewPiisFormat",
                value: function(e, t, n) {
                    e && (n[t] = [Gn.CORRECT_FORMAT])
                }
            }]), n
        }(xo),
        Ka = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Ya = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Xa = function(t) {
            u(s, t);
            var n, o, c = p(s);

            function s(e, t) {
                var n;
                return i(this, s), (n = c.call(this, {
                    name: "Identify",
                    reporters: t,
                    context: e
                })).init(), n
            }
            return a(s, [{
                key: "init",
                value: function() {
                    var e = this;
                    return this.pluginPromise || (Wi(Nr.IDENTIFY_INIT_START), this.pluginPromise = fo("https://analytics.tiktok.com/i18n/pixel/static/identify_45dd5971.js").then((function() {
                        e.detectTopics(), Wi(Nr.IDENTIFY_INIT_END)
                    })).catch((function() {
                        var e = new Error("Loading chunk identify failed.\n(error: ".concat(window.location.host, "/static/identify.js)"));
                        return e.name = "ChunkLoadError", Promise.reject(e)
                    }))), this.pluginPromise
                }
            }, {
                key: "handleUserProperties",
                value: (o = r(e().mark((function t(n, r) {
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", void 0);
                            case 2:
                                return e.next = 4, this.init();
                            case 4:
                                return e.abrupt("return", this.baseHandleUserProperties(n, r));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), t, this)
                }))), function(e, t) {
                    return o.apply(this, arguments)
                })
            }, {
                key: "handlePIIDiagnostics",
                value: function(e) {
                    try {
                        var t = e.email_is_hashed,
                            n = void 0 === t ? [] : t,
                            r = e.sha256_email,
                            i = void 0 === r ? [] : r,
                            o = e.phone_is_hashed,
                            a = void 0 === o ? [] : o,
                            c = e.sha256_phone,
                            u = void 0 === c ? [] : c;
                        if (n.includes(Vn.UNKNOWN_INVALID) || i.includes(Vn.UNKNOWN_INVALID)) return void Yi(Ar.INVALID_EMAIL_FORMAT);
                        if (a.includes(Vn.UNKNOWN_INVALID) || u.includes(Vn.UNKNOWN_INVALID)) return void Yi(Ar.INVALID_PHONE_NUMBER_FORMAT);
                        if (n.includes(Vn.FILTER_EVENTS) || i.includes(Vn.FILTER_EVENTS)) return void Yi(Ar.INVALID_EMAIL_INFORMATION);
                        if (a.includes(Vn.FILTER_EVENTS) || u.includes(Vn.FILTER_EVENTS)) return void Yi(Ar.INVALID_PHONE_NUMBER_INFORMATION)
                    } catch (e) {}
                }
            }, {
                key: "detectTopics",
                value: (n = r(e().mark((function t() {
                    var n, r;
                    return e().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0, e.next = 3, this.getCookieDeprecationLabel();
                            case 3:
                                return n = e.sent, e.next = 6, this.getAllTopics();
                            case 6:
                                (r = e.sent) && Wi(Nr.CUSTOM_INFO, {
                                    custom_name: "topics",
                                    custom_enum: r.toString(),
                                    extJSON: {
                                        cookie_label: String(n)
                                    }
                                }), e.next = 12;
                                break;
                            case 10:
                                e.prev = 10, e.t0 = e.catch(0);
                            case 12:
                            case "end":
                                return e.stop()
                        }
                    }), t, this, [
                        [0, 10]
                    ])
                }))), function() {
                    return n.apply(this, arguments)
                })
            }]), s
        }(Wa);
    Xa = Ka([A.injectable(), Ya(0, A.inject(Sr.CONTEXT)), Ya(1, A.inject(Sr.TTQ_REPORTERS))], Xa);
    var za, Qa = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Za = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        $a = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a) {
                var c;
                return i(this, n), (c = t.call(this, {
                    name: "WebFL",
                    reporters: r,
                    context: e
                })).reportService = o, c.ttqOptions = a, c.useExchangeRate = a.usd_exchange_rate, c
            }
            return a(n, [{
                key: "pixelSend",
                value: function(e, t, n) {
                    var r, i;
                    Boolean(null === (i = null === (r = this.ttqOptions) || void 0 === r ? void 0 : r.plugins) || void 0 === i ? void 0 : i.WebFL) && n && this.reportFlConv(n)
                }
            }, {
                key: "reportFlConv",
                value: function(e) {
                    var t;
                    if (e && "Pageview" !== e.event) {
                        var n, r = e.context,
                            i = e.properties,
                            o = void 0 === i ? {} : i,
                            a = void 0 !== r.ad.log_extra ? r.ad.log_extra : "{}";
                        try {
                            n = JSON.parse(a)
                        } catch (e) {
                            n = {}
                        }
                        var c = {
                                req_id: n.req_id || "",
                                cid: r.ad.creative_id || "",
                                value: o.value || "",
                                currency: o.currency || "",
                                raw: Object.assign({}, o)
                            },
                            u = o.value,
                            s = o.currency,
                            l = function(e, t, n) {
                                return isNaN(e) || e < 0 || null === n || !n[t] ? "" : (e / n[t] * 1e5).toFixed(0)
                            }(u, s, this.useExchangeRate || null),
                            f = r.pixel ? r.pixel.code : "";
                        l && (c.usd_value = l, Wi(Nr.CUSTOM_INFO, {
                            pixelCode: f,
                            custom_name: "odfl_rate_exchange",
                            extJSON: {
                                message_id: e.message_id,
                                cid: c.cid,
                                event: e.event,
                                value: u,
                                currency: s,
                                usdValue: l
                            }
                        }));
                        var d = {
                            business: "devicefl_join_label",
                            entrance: "app_to_web_conversion",
                            inputParams: {
                                message_id: e.message_id,
                                event: e.event,
                                event_props: c,
                                event_source_id: null === (t = r.pixel) || void 0 === t ? void 0 : t.code,
                                event_source_type: "web"
                            }
                        };
                        this.reportService && this.reportService.reportFL && (this.reportService.reportFL(d), Wi(Nr.CUSTOM_INFO, {
                            pixelCode: f,
                            custom_name: "fl_jsb_report",
                            extJSON: {
                                message_id: e.message_id,
                                cid: c.cid,
                                event: e.event
                            }
                        }))
                    }
                }
            }]), n
        }(xo);
    $a = Qa([A.injectable(), Za(0, A.inject(Sr.CONTEXT)), Za(1, A.inject(Sr.TTQ_REPORTERS)), Za(2, A.inject(Sr.REPORT_SERVICE)), Za(3, A.inject(Sr.TTQ_GLOBAL_OPTIONS))], $a),
        function(e) {
            e.ERROR_FORMAT = "error_format", e.OVER_LENGTH = "over_length_3e4", e.FILTER_SENSITIVE_FIELDS = "filter_sensitive_fields"
        }(za || (za = {}));
    var ec, tc, nc, rc, ic, oc = "form_detail_error";
    ! function(e) {
        e.GET_ELEMENTS_ERROR = "get_elements_error", e.INIT_ERROR = "init_error", e.ASSEMBLE_FORM_DETAIL_ERROR = "assemble_form_detail_error", e.DETECT_FORM_ELEMENT_ERROR = "detect_form_element_error", e.GET_OVERALL_FORM_DETAIL_ERROR = "get_overall_form_detail_error", e.FORM_OBSERVER_ERROR = "form_observer_error", e.OVER_LENGTH = "over_length_3e4"
    }(ec || (ec = {})),
    function(e) {
        e.METADATA = "Metadata", e.CLICK = "Click"
    }(tc || (tc = {})),
    function(e) {
        e.AUTO_COLLECTION = "AUTO_COLLECTION", e.AUTO_FORM = "AUTO_FORM", e.AUTO_CLICK = "AUTO_CLICK", e.AUTO_VC = "AUTO_VC", e.AUTO_VC_REVERSE = "AUTO_VC_REVERSE"
    }(nc || (nc = {})),
    function(e) {
        e.AUTO_FORM = "form_rules", e.AUTO_VC = "vc_rules", e.AUTO_VC_REVERSE = "vc_rules_reverse"
    }(rc || (rc = {})),
    function(e) {
        e.PAGE_LEAVE = "PageLeave", e.PAGE_VIEW = "PageView", e.DOM_CHANGE = "DomChange", e.URL_CHANGE = "UrlChange", e.CLICK = "Click", e.SCROLL = "Scroll"
    }(ic || (ic = {}));
    var ac = ["AnatomicalStructure", "AnatomicalSystem", "ApprovedIndication", "ArriveAction", "Artery", "BioChemEntity", "BloodTest", "Bone", "BorrowAction", "BrainStructure", "BrokerageAccount", "CDCPMDRecord", "ChemicalSubstance", "CovidTestingFacility", "DDxElement", "DepartAction", "DepositAccount", "DiagnosticLab", "DiagnosticProcedure", "Diet", "DietarySupplement", "DoseSchedule", "ElementarySchool", "HighSchool", "ExercisePlan", "Gene", "GovernmentBenefitsType", "GovernmentService", "HealthAspectEnumeration", "HealthInsurancePlan", "HealthPlanCostSharingSpecification", "HealthTopicContent", "Hospital", "ImagingTest", "InfectiousAgentClass", "InvestmentFund", "InvestmentOrDeposit", "Invoice", "Joint", "LendAction", "LifestyleModification", "Ligament", "LoanOrCredit", "LymphaticVessel", "MaximumDoseSchedule", "MedicalAudience", "MedicalAudienceType", "MedicalCause", "MedicalCode", "MedicalCondition", "MedicalConditionStage", "MedicalContraindication", "MedicalDevice", "MedicalEntity", "MedicalEvidenceLevel", "MedicalGuidelineContraindication", "MedicalIndication", "MedicalIntangible", "MedicalObservationalStudy", "MedicalOrganization", "MedicalProcedure", "MedicalProcedureType", "MedicalRiskCalculator", "MedicalRiskFactor", "MedicalRiskScore", "MedicalSign", "MedicalSignOrSymptom", "MedicalStudy", "MedicalSymptom", "MedicalTest", "MedicalTestPanel", "MedicalTherapy", "MedicalTrial", "MiddleSchool", "MoneyTransfer", "Muscle", "Nerve", "OccupationalTherapy", "Order", "PalliativeProcedure", "ParentAudience", "PathologyTest", "Patient", "PeopleAudience", "Person", "Pharmacy", "PhysicalActivity", "PhysicalTherapy", "Physician", "PoliticalParty", "Preschool", "PreventionIndication", "Protein", "PsychologicalTreatment", "RadiationTherapy", "RecommendedDoseSchedule", "ReportedDoseSchedule", "School", "Substance", "SuperficialAnatomy", "SurgicalProcedure", "Text", "TherapeuticProcedure", "TreatmentIndication", "URL", "Vein", "Vessel", "VitalSign", "WorkersUnion"],
        cc = 2e3;

    function uc(e) {
        return /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi.test(e) || /(\+?0?86-?)?1[3-9]\d{9}/g.test(e) || /(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/g.test(e) || /^[\-!$><-==&_\/\?\.,0-9:; \]\[%~\"\{\}\)\(\+\@\^\`]/g.test(e) || ac.some((function(t) {
            return e.toLowerCase().indexOf(t.toLowerCase()) > -1
        }))
    }
    var sc = function e(t) {
        if (!t || t.nodeType !== Node.ELEMENT_NODE) return "";
        if (t === document.documentElement) return "/HTML";
        for (var n = 1, r = t.previousSibling; r;) r.nodeType === Node.ELEMENT_NODE && r.tagName === t.tagName && n++, r = r.previousSibling;
        var i = t.tagName.toLowerCase(),
            o = e(t.parentNode);
        return "".concat(o, "/").concat(i, "[").concat(n, "]")
    };

    function lc(e) {
        return sc(e)
    }

    function fc(e, t) {
        return function() {
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            window.requestIdleCallback && window.requestIdleCallback(e.bind.apply(e, [t].concat(r))), e.apply(t, r)
        }
    }

    function dc(e) {
        var t = e.options,
            n = e.plugins;
        return t && !1 !== t.autoConfig && n && n[nu]
    }

    function pc(e, t) {
        if (!rc[t]) return !0;
        var n = e.plugins;
        return t === nc.AUTO_VC_REVERSE ? dc(e) && n[nu] && !n[nu][rc.AUTO_VC] : dc(e) && n[nu] && n[nu][rc[t]]
    }
    var hc = function e(t) {
            for (var n = 0, r = t.children, i = 0; i < r.length; i++) {
                var o = r[i],
                    a = !1;
                try {
                    a = vi(o)
                } catch (e) {
                    Ki(Nr.CUSTOM_ERROR, e, {
                        custom_name: "button_check_error",
                        custom_enum: "auto_click",
                        extJSON: {
                            element: o
                        }
                    }), a = !1
                }
                a && n++, n += e(o)
            }
            return n
        },
        _c = function(e) {
            var t, n, r, i, o = "";
            if ("A" === e.tagName.toUpperCase()) o = null !== (t = e.getAttribute("href")) && void 0 !== t ? t : "";
            else if ("BUTTON" === e.tagName.toUpperCase()) {
                var a = null !== (n = e.getAttribute("onclick")) && void 0 !== n ? n : "",
                    c = null !== (r = e.getAttribute("formaction")) && void 0 !== r ? r : "",
                    u = a.match(/^.*=(['"])(.*)\1.*$/);
                c ? o = c : u && (o = u[2])
            } else "FORM" === e.tagName.toUpperCase() && (o = null !== (i = e.getAttribute("action")) && void 0 !== i ? i : "");
            return o
        };

    function vc(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
        return "string" != typeof e ? "" : (e = e.trim()).length < t ? e : e.slice(0, 500)
    }

    function gc(e) {
        return null != ["og:image"].filter((function(t) {
            return t === e
        }))[0]
    }

    function yc(e, t) {
        return null != [{
            property: "image",
            type: "Product"
        }].filter((function(n) {
            return (e === "https://schema.org/" + n.type || e === "http://schema.org/" + n.type) && n.property === t
        }))[0]
    }

    function mc() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return {
            items: e,
            has: function(e) {
                return this.items.some((function(t) {
                    return t === e
                }))
            },
            add: function(e) {
                this.has(e) || this.items.push(e)
            }
        }
    }

    function Ec(e) {
        var t;
        switch (e.tagName.toLowerCase()) {
            case "meta":
                t = e.getAttribute("content");
                break;
            case "audio":
            case "embed":
            case "iframe":
            case "img":
            case "source":
            case "track":
            case "video":
                t = e.getAttribute("src");
                break;
            case "a":
            case "area":
            case "link":
                t = e.getAttribute("href");
                break;
            case "object":
                t = e.getAttribute("data");
                break;
            case "data":
            case "meter":
                t = e.getAttribute("value");
                break;
            case "time":
                t = e.getAttribute("datetime");
                break;
            default:
                t = function(e) {
                    if (e) {
                        if (e.innerText && e.innerText.length > 0) return e.innerText;
                        if (e.textContent && e.textContent.length > 0) return e.textContent
                    }
                    return ""
                }(e) || ""
        }
        return "string" == typeof t ? vc(t) : ""
    }

    function bc(e, n) {
        if ("object" === t(e)) {
            if (Array.isArray(e)) return e.map((function(e) {
                return bc(e, n)
            }));
            var r = {};
            for (var i in e) wc(i, n) || (r[i] = bc(e[i], n));
            return r
        }
        return e
    }

    function wc(e, t) {
        return !!(t && t.length > 0) && t.some((function(t) {
            return e.toLowerCase() === t.toLowerCase()
        }))
    }

    function Ic(e) {
        if ("object" === t(e)) {
            if (Array.isArray(e)) return e.map((function(e) {
                return Ic(e)
            }));
            var n = Object.assign({}, e),
                r = n["@type"];
            for (var i in n) "@type" !== i && "@context" !== i && ("object" === t(n[i]) ? n[i] = Ic(n[i]) : r && Tc(r) && delete n[i]);
            return n
        }
        return e
    }

    function Tc(e) {
        return Array.isArray(e) ? e.some((function(e) {
            return Tc(e)
        })) : "string" == typeof e && (e = e.toLowerCase().replace(/https?:\/\/schema\.org\//, ""), ac.some((function(t) {
            return e === t.toLowerCase()
        })))
    }

    function Oc(e) {
        var t = {
            open_graph: "{}",
            microdata: "[]",
            json_ld: "[]",
            meta: "{}"
        };
        try {
            t.microdata = function() {
                for (var e = document.querySelectorAll("[itemscope]"), t = [], n = mc(), r = 0; r < e.length; r++) n.add(e[r]);
                for (var i = e.length - 1; i >= 0; i--) {
                    var o = e[i],
                        a = o.getAttribute("itemtype");
                    if ("string" == typeof a && "" !== a) {
                        for (var c = {}, u = o.querySelectorAll("[itemprop]"), s = 0; s < u.length; s++) {
                            var l = u[s];
                            if (!n.has(l)) {
                                n.add(l);
                                var f = l.getAttribute("itemprop");
                                if ("string" == typeof f && "" !== f) {
                                    var d = Ec(l);
                                    if (null != d) {
                                        var p = c[f];
                                        null != p && yc(a, f) ? Array.isArray(p) ? c[f].push(d) : c[f] = [p, d] : c[f] = d
                                    }
                                }
                            }
                        }
                        t.unshift({
                            schema: {
                                dimensions: {
                                    h: o.clientHeight,
                                    w: o.clientWidth
                                },
                                properties: Tc(a) ? {} : c,
                                subscopes: [],
                                type: a
                            },
                            scope: o
                        })
                    }
                }
                for (var h = [], _ = [], v = 0; v < t.length; v++) {
                    for (var g = t[v], y = g.scope, m = g.schema, E = h.length - 1; E >= 0; E--) {
                        if (h[E].scope.contains(y)) {
                            h[E].schema.subscopes.push(m);
                            break
                        }
                        h.pop()
                    }
                    0 === h.length && _.push(m), h.push({
                        schema: m,
                        scope: y
                    })
                }
                return JSON.stringify(_)
            }()
        } catch (e) {
            Ki(Nr.CUSTOM_ERROR, e, {
                custom_name: "assemble_auto_config_failed",
                custom_enum: "microdata"
            })
        }
        try {
            var n = function() {
                    for (var e = [], t = [], n = document.querySelectorAll('script[type="application/ld+json"]'), r = 0, i = 0; i < n.length; i++) {
                        var o = n[i].innerText;
                        if (null != o && "" !== o) {
                            if ((r += o.length) > 3e4) return {
                                data: JSON.stringify([]),
                                errors: [{
                                    name: za.OVER_LENGTH,
                                    message: "".concat(String(r))
                                }]
                            };
                            var a = void 0;
                            try {
                                a = JSON.parse(o.replace(/[\n\r\t]+/g, " "))
                            } catch (e) {
                                t.push({
                                    name: za.ERROR_FORMAT,
                                    message: e.message
                                })
                            }
                            try {
                                a = Ic(a)
                            } catch (e) {
                                return {
                                    data: JSON.stringify([]),
                                    errors: [{
                                        name: za.FILTER_SENSITIVE_FIELDS,
                                        message: e.message
                                    }]
                                }
                            }
                            a && e.push(a)
                        }
                    }
                    return {
                        data: JSON.stringify(e),
                        errors: t
                    }
                }(),
                r = n.data,
                i = n.errors;
            t.json_ld = r, i && i.forEach((function(e) {
                var t = e.name,
                    n = e.message;
                Ki(Nr.CUSTOM_ERROR, {
                    message: n
                }, {
                    custom_name: "parse_json_ld_failed",
                    custom_enum: t
                })
            }))
        } catch (e) {
            Ki(Nr.CUSTOM_ERROR, e, {
                custom_name: "assemble_auto_config_failed",
                custom_enum: "json_ld"
            })
        }
        try {
            t.open_graph = function(e) {
                for (var t = mc(["og", "product", "music", "video", "article", "book", "profile", "website", "twitter"]), n = {}, r = document.querySelectorAll("meta[property],meta[name]"), i = 0; i < r.length; i++) {
                    var o = r[i],
                        a = o.getAttribute("property") || o.getAttribute("name"),
                        c = vc(o.getAttribute("content"));
                    if ("string" == typeof a && -1 !== a.indexOf(":") && "string" == typeof c && t.has(a.split(":")[0])) {
                        var u = n[a];
                        null != u && gc(a) ? Array.isArray(u) ? n[a].push(c) : n[a] = [u, c] : n[a] = c
                    }
                }
                return JSON.stringify(bc(n, e))
            }(e.open_graph)
        } catch (e) {
            Ki(Nr.CUSTOM_ERROR, e, {
                custom_name: "assemble_auto_config_failed",
                custom_enum: "open_graph"
            })
        }
        try {
            t.meta = function(e) {
                var t = {},
                    n = mc(["description", "keywords", "keyword"]),
                    r = document.querySelector("title");
                r && (t.title = vc(r.innerText));
                for (var i = document.querySelectorAll("meta[property],meta[name]"), o = 0; o < i.length; o++) {
                    var a = i[o],
                        c = a.getAttribute("name") || a.getAttribute("property"),
                        u = vc(a.getAttribute("content"));
                    "string" == typeof c && "string" == typeof u && n.has(c) && (t[c] = u)
                }
                return JSON.stringify(bc({
                    title: t.title,
                    "meta:description": t.description,
                    "meta:keywords": t.keywords || t.keyword
                }, e))
            }(e.meta)
        } catch (e) {
            Ki(Nr.CUSTOM_ERROR, e, {
                custom_name: "assemble_auto_config_failed",
                custom_enum: "meta"
            })
        }
        return t
    }
    var Sc, Nc = ["form", "[id*=form], [class*=form]"],
        Ac = ["label"],
        Rc = ["input,select,textarea"],
        Pc = ["radio", "checkbox"],
        Cc = ["hidden", "reset", "submit", "password"];

    function kc(e, t) {
        try {
            for (var n = 0; n < e.length; n++) {
                var r = t.querySelectorAll(e[n]);
                if (r && r.length > 0) return Array.from(r)
            }
            return []
        } catch (e) {
            return Ki(Nr.CUSTOM_ERROR, e, {
                custom_name: oc,
                custom_enum: ec.GET_ELEMENTS_ERROR
            }), []
        }
    }

    function Mc(e) {
        var t = "";
        return function e(n) {
            for (; n;) n.nodeType === Node.TEXT_NODE ? t += n.textContent : "SELECT" !== n.nodeName && n.firstChild && e(n.firstChild), n = n.nextSibling
        }(e.firstChild), t.replace(/[\t\n]/g, "").trim()
    }

    function Lc(e) {
        if (!e) return !1;
        var t = window.getComputedStyle(e);
        return "none" !== t.display && ("visible" === t.visibility && (!Dc(e) && (0 !== e.offsetWidth || 0 !== e.offsetHeight)))
    }

    function Dc(e) {
        return !(!e || e.isSameNode(document.body) || e.isSameNode(document)) && ("0" == window.getComputedStyle(e).opacity || Dc(e.parentElement))
    }

    function xc(e) {
        var t = e.getAttribute("type");
        return !!t && Cc.indexOf(t) > -1
    }

    function jc(e) {
        return e && uc(e) ? "__Text__" : e
    }! function(e) {
        e[e.CONTAIN = 0] = "CONTAIN", e[e.ID = 1] = "ID", e[e.SELECTOR = 2] = "SELECTOR"
    }(Sc || (Sc = {}));
    var Uc = function() {
            function e(t) {
                i(this, e), this.formUpdateHandlers = [], this.answerMap = {}, this.rules = this.getRules(t), this.init()
            }
            return a(e, [{
                key: "getRules",
                value: function(e) {
                    var t = e.plugins && e.plugins.AutoConfig;
                    return t && t[rc.AUTO_FORM]
                }
            }, {
                key: "init",
                value: function() {
                    var e = this;
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                            taskName: window.ttq._pf_tn,
                            functionName: "initAutoForm_init",
                            start: performance.now()
                        }
                    } catch (e) {}
                    try {
                        this.forms = this.detectFormElement(), this.forms && this.forms.forEach((function(t) {
                            t.formDetail = e.assembleFormDetail(t), e.startFormObserver(t, e.formUpdateHandlers)
                        }))
                    } catch (e) {
                        Ki(Nr.CUSTOM_ERROR, e, {
                            custom_name: oc,
                            custom_enum: ec.INIT_ERROR
                        })
                    }
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
                    } catch (e) {}
                }
            }, {
                key: "getOverallFormDetail",
                value: function() {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var e = {
                            taskName: window.ttq._pf_tn,
                            functionName: "initAutoForm_getOverallFormDetail",
                            start: performance.now()
                        }
                    } catch (e) {}
                    var t = "[]";
                    try {
                        if (this.forms && this.forms.length > 0) this.forms.some((function(e) {
                            var t = e.el;
                            return !document.body.contains(t)
                        })) && this.init(), t = JSON.stringify(this.forms.map((function(e) {
                            return e.formDetail
                        })).filter((function(e) {
                            return e
                        })))
                    } catch (e) {
                        Ki(Nr.CUSTOM_ERROR, e, {
                            custom_name: oc,
                            custom_enum: ec.GET_OVERALL_FORM_DETAIL_ERROR
                        })
                    }
                    try {
                        window.ttq && window.ttq._ppf && (e.end = performance.now(), window.ttq._ppf.push(e))
                    } catch (e) {}
                    return t
                }
            }, {
                key: "addFormUpdateHandler",
                value: function(e) {
                    this.formUpdateHandlers.push(e)
                }
            }, {
                key: "startFormObserver",
                value: function(e, t) {
                    var n = this;
                    try {
                        var r = fi((function() {
                            var r = n.assembleFormDetail(e);
                            (!e.formDetail || r && yi(r, e.formDetail)) && (e.formDetail = r, t.forEach((function(t) {
                                return t.call(n, e.formDetail)
                            })))
                        }), cc, this);
                        if (e.el.parentNode) {
                            var i = e.el.parentNode;
                            this.observer && this.observer.disconnect(), this.observer = new MutationObserver(r), this.observer.observe(i, {
                                attributes: !0,
                                childList: !0,
                                subtree: !0
                            }), i.addEventListener("click", r, {
                                capture: !0
                            })
                        }
                    } catch (e) {
                        Ki(Nr.CUSTOM_ERROR, e, {
                            custom_name: oc,
                            custom_enum: ec.FORM_OBSERVER_ERROR
                        })
                    }
                }
            }, {
                key: "detectFormElement",
                value: function() {
                    try {
                        var e = [0, 0, 0],
                            t = function(e) {
                                return (t = kc(e || Nc, document)).filter((function(e) {
                                    return !t.some((function(t) {
                                        return t.contains(e) && t !== e
                                    }))
                                }));
                                var t
                            }(this.rules);
                        if (!t) return [];
                        var n = t.map((function(e) {
                            return {
                                el: e,
                                questions: []
                            }
                        }));
                        return n.forEach((function(t) {
                            var n, r = function(e) {
                                    return kc(Ac, e)
                                }(t.el),
                                i = new Set([]);
                            r.forEach((function(n) {
                                var r = function(e, t) {
                                    var n = kc(Rc, e);
                                    if (n && n.length) return {
                                        els: n,
                                        from: Sc.CONTAIN
                                    };
                                    var r = e.getAttribute("for");
                                    return !(!r || (n = function(e, t) {
                                        return kc(["input[id='".concat(e, "'],select[id='").concat(e, "'],textarea[id='").concat(e, "']")], t)
                                    }(r, t), !n)) && {
                                        els: n,
                                        from: Sc.ID
                                    }
                                }(n, t.el);
                                if (r) {
                                    var o = r.els,
                                        a = r.from,
                                        c = o.filter((function(e) {
                                            return !xc(e)
                                        })).map((function(e) {
                                            return i.add(e), {
                                                el: e,
                                                from: a
                                            }
                                        }));
                                    c && c.length && (e[a] = 1, t.questions.push({
                                        el: n,
                                        answers: c
                                    }))
                                }
                            })), (n = t.el, kc(Rc, n)).filter((function(e) {
                                return !xc(e)
                            })).forEach((function(n) {
                                if (!i.has(n)) {
                                    e[Sc.SELECTOR] = 1;
                                    var r = function(e, t) {
                                        return function e(n) {
                                            return null == n || n.isSameNode(t) ? t : Mc(n).length > 0 ? n : e(n.parentNode)
                                        }(e.parentNode)
                                    }(n, t.el);
                                    t.questions.push({
                                        el: r,
                                        answers: [{
                                            el: n,
                                            from: Sc.SELECTOR
                                        }]
                                    })
                                }
                            }))
                        })), Wi(Nr.CUSTOM_INFO, {
                            custom_name: "form_detail_answer_from",
                            custom_enum: e.join("")
                        }), n
                    } catch (e) {
                        return Ki(Nr.CUSTOM_ERROR, e, {
                            custom_name: oc,
                            custom_enum: ec.DETECT_FORM_ELEMENT_ERROR
                        }), []
                    }
                }
            }, {
                key: "calculateQuestionFilledTime",
                value: function(e) {
                    var t = e.el,
                        n = e.answers,
                        r = lc(t),
                        i = n.reduce((function(e, t) {
                            var n = t.el,
                                r = n.getAttribute("type");
                            return r && Pc.indexOf(r.toLowerCase()) > -1 ? "".concat(e, ",").concat(n.checked) : "".concat(e, ",").concat(n.value)
                        }), "");
                    this.answerMap[r] || (this.answerMap[r] = {
                        defaultValue: i,
                        value: i
                    });
                    var o = this.answerMap[r],
                        a = o.defaultValue,
                        c = o.filledTime;
                    if (this.answerMap[r].value = i, a !== i) return c || (this.answerMap[r].filledTime = +new Date);
                    delete this.answerMap[r].filledTime
                }
            }, {
                key: "assembleFormDetail",
                value: function(e) {
                    var t = this,
                        n = e.el,
                        r = e.questions;
                    try {
                        var i = {
                            xpath: lc(n),
                            id: n.id,
                            name: jc(n.getAttribute("name")),
                            tag: n.tagName.toLowerCase(),
                            class_name: n.className,
                            questions: [],
                            width: n.offsetWidth,
                            height: n.offsetHeight,
                            is_visible: Lc(n)
                        };
                        return i.questions = r.map((function(e) {
                            var n = e.el,
                                r = e.answers,
                                i = {
                                    xpath: lc(n),
                                    id: n.id,
                                    name: jc(Mc(n)),
                                    tag: n.tagName.toLowerCase(),
                                    class_name: n.className,
                                    filled_time: t.calculateQuestionFilledTime(e),
                                    answers: [],
                                    width: n.offsetWidth,
                                    height: n.offsetHeight,
                                    is_visible: Lc(n)
                                };
                            return r.forEach((function(e) {
                                var t = e.el,
                                    n = e.from;
                                t && "SELECT" === t.tagName.toUpperCase() ? i.answers = i.answers.concat(Array.from(t.querySelectorAll("option")).map((function(e) {
                                    return {
                                        xpath: lc(e),
                                        id: e.id,
                                        name: jc(e.value || e.innerText),
                                        tag: e.tagName.toLowerCase(),
                                        class_name: e.className,
                                        from: n,
                                        width: e.offsetWidth,
                                        height: e.offsetHeight,
                                        is_visible: Lc(t)
                                    }
                                }))) : i.answers.push({
                                    xpath: lc(t),
                                    id: t.id,
                                    name: jc(t.getAttribute("name")),
                                    tag: t.tagName.toLowerCase(),
                                    class_name: t.className,
                                    input_type: t.getAttribute("type"),
                                    placeholder: jc(t.getAttribute("placeholder")),
                                    from: n,
                                    width: t.offsetWidth,
                                    height: t.offsetHeight,
                                    is_visible: Lc(t)
                                })
                            })), i
                        })), i
                    } catch (e) {
                        return void Ki(Nr.CUSTOM_ERROR, e, {
                            custom_name: oc,
                            custom_enum: ec.ASSEMBLE_FORM_DETAIL_ERROR
                        })
                    }
                }
            }]), e
        }(),
        Fc = ["United States", "US", "Canada", "CA", "Australia", "AU", "Mexico", "MX", "Argentina", "AR", "Chile", "CL", "Colombia", "CO", "Fiji", "FJ", "Liberia", "LR", "Namibia", "NA", "New Zealand", "NZ", "Singapore", "SG", "Solomon Islands", "SB", "Suriname", "SR", "South Africa", "ZA", "Barbados", "BB", "Belize", "BZ", "Cuba", "CU", "Dominican Republic", "DO", "Guyana", "GY", "Jamaica", "JM", "Cayman Islands", "KY", "Trinidad and Tobago", "TT", "Tuvalu", "TV", "Zimbabwe", "ZW", "United Kingdom", "GB", "Egypt", "EG", "Falkland Islands", "FK", "Gibraltar", "GI", "Guernsey", "GG", "Isle of Man", "IM", "Jersey", "JE", "Lebanon", "LB", "Saint Helena", "SH", "Syria", "SY", "Sudan", "SD", "Japan", "JP", "China", "CN", "Japan", "JP", "CN", "South Korea", "KR", "Philippines", "PH", "Cuba", "CU", "Sweden", "SE", "Norway", "NO", "Denmark", "DK", "Iceland", "IS", "Costa Rica", "CR", "El Salvador", "SV", "Bolivia", "BO", "Venezuela", "VE", "Bahamas", "BS", "Brunei", "BN", "Ethiopia", "ET", "Eritrea", "ER", "Iran", "IR", "Oman", "OM", "Qatar", "QA", "Saudi Arabia", "SA", "Yemen", "YE", "Bulgaria", "BG", "Kyrgyzstan", "KG", "Central African CFA franc zone", "XAF", "West African CFA franc zone", "XOF"].map((function(e) {
            return e.toUpperCase()
        })),
        Bc = ["AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", "BOV", "BRL", "BSD", "BTC", "BTN", "BWP", "BYN", "BYR", "BZD", "CAD", "CDF", "CHE", "CHF", "CHW", "CLF", "CLP", "CNH", "CNY", "COP", "COU", "CRC", "CUC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", "EEK", "EGP", "ERN", "ETB", "ETH", "EUR", "FJD", "FKP", "GBP", "GEL", "GGP", "GHC", "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", "JOD", "JPY", "KES", "KGS", "KHR", "KMF", "KPW", "KRW", "KWD", "KYD", "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LTC", "LTL", "LVL", "LYD", "MAD", "MDL", "MGA", "MKD", "MMK", "MNT", "MOP", "MRO", "MRU", "MUR", "MVR", "MWK", "MXN", "MXV", "MYR", "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RMB", "RON", "RSD", "RUB", "RWF", "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLL", "SOS", "SRD", "SSP", "STD", "STN", "SVC", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", "TRL", "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "USD", "UYI", "UYU", "UYW", "UZS", "VEF", "VES", "VND", "VUV", "WST", "XAF", "XBT", "XCD", "XOF", "XPF", "XSU", "XUA", "YER", "ZAR", "ZMW", "ZWD", "ZWL"],
        qc = function(e) {
            try {
                var t = e.plugins && e.plugins.AutoConfig;
                return t && t.vc_rules
            } catch (e) {
                return
            }
        },
        Gc = function(e) {
            var t;
            try {
                var n = {},
                    r = e.rules;
                for (var i in r)
                    if (r.hasOwnProperty(i)) {
                        var o = r[i];
                        if (o) {
                            for (var a = null, c = [o.firstidxpath, o.threeleveltagclassxpath, o.absolutexpath], u = 0, s = c; u < s.length; u++) {
                                var l = s[u];
                                if (l) try {
                                    var f = document.evaluate(l, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                                    if (f) {
                                        var d = (null === (t = f.textContent) || void 0 === t ? void 0 : t.trim()) || null;
                                        if (d) {
                                            a = d;
                                            break
                                        }
                                    }
                                } catch (e) {}
                            }
                            a && (n[i] = a, n.rule_key = e.rule_key)
                        }
                    }
                return Wc(Xc, n), Object.keys(n).length > 0 ? n : null
            } catch (e) {
                return Ki(Nr.CUSTOM_ERROR, e, {
                    custom_name: "auto_parameter_inference_update_error",
                    custom_enum: "auto_parameter_inference",
                    extJSON: {
                        error: e
                    }
                }), null
            }
        },
        Vc = function(e, t) {
            var n, r;
            try {
                var i = e.getPageInfo();
                if (i.url.includes("checkout")) {
                    var o = Object.values(t)[0];
                    for (var a in t) i.url.includes(a) && (o = t[a]);
                    if (o) {
                        var c, u = T(o);
                        try {
                            for (u.s(); !(c = u.n()).done;) {
                                var s = c.value;
                                if (s.currency && s.currency.val && s.valueXpath) {
                                    var l = s.currency.val,
                                        f = Hc(s.valueXpath, s.valueClass),
                                        d = null == f ? void 0 : f.textContent;
                                    if (d) {
                                        var p = Jc(d);
                                        if (p) {
                                            var h = void 0,
                                                _ = void 0,
                                                v = void 0;
                                            if (s.currency.xpath) {
                                                var g = null === (n = document.evaluate(s.currency.xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue) || void 0 === n ? void 0 : n.textContent;
                                                g && Wi(Nr.CUSTOM_INFO, {
                                                    custom_name: "auto_value_currency_currency_code_form_xpath",
                                                    extJSON: {
                                                        url: i.url,
                                                        currencyCode: g,
                                                        vcConfig: t
                                                    }
                                                }), g && Bc.includes(g.toUpperCase().trim()) && (_ = g.toUpperCase().trim())
                                            }
                                            if (s.countryCodeXpath) {
                                                var y = null === (r = document.evaluate(s.countryCodeXpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue) || void 0 === r ? void 0 : r.textContent;
                                                y && Wi(Nr.CUSTOM_INFO, {
                                                    custom_name: "auto_value_currency_country_form_xpath",
                                                    extJSON: {
                                                        url: i.url,
                                                        country: y,
                                                        vcConfig: t
                                                    }
                                                }), y && Fc.includes(y.toUpperCase().trim()) && (h = y.toUpperCase().trim())
                                            }
                                            try {
                                                var m = new URL(null == i ? void 0 : i.url).hostname.split(".");
                                                for (var E in m) Fc.includes(m[E].toUpperCase()) && (v = m[E].toUpperCase())
                                            } catch (e) {}
                                            var b = {
                                                value: p,
                                                currency: _ || l,
                                                ori_value: d,
                                                rule_key: s.rule_key,
                                                country_code: h || v
                                            };
                                            return Wi(Nr.CUSTOM_INFO, {
                                                custom_name: "auto_value_currency_update_info",
                                                extJSON: {
                                                    url: i.url,
                                                    autoProperties: b,
                                                    vcConfig: t
                                                }
                                            }), Wc(Yc, b), b
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                            u.e(e)
                        } finally {
                            u.f()
                        }
                    }
                    return null
                }
                return null
            } catch (e) {
                return Ki(Nr.CUSTOM_ERROR, e, {
                    custom_name: "auto_value_currency_update_error",
                    custom_enum: "auto_value_currency",
                    extJSON: {
                        error: e
                    }
                }), null
            }
        };

    function Hc(e, t) {
        for (var n, r = document.evaluate(e, document, null, XPathResult.ORDERED_NODE_ITERATOR_TYPE, null), i = null; n = r.iterateNext();) /\d/.test(n.innerText) && (i = n);
        if (!i && t)
            for (var o = document.getElementsByClassName(t), a = 0; a < o.length; a++) {
                var c = o[a];
                c instanceof HTMLElement && /\d/.test(c.innerText) && (i = c)
            }
        return i
    }

    function Jc(e) {
        var t, n, r, i, o = e.match(/(?:\d[\d\s,.]*\d|\d)/g);
        if (o) {
            var a, c = o[0],
                u = T(o);
            try {
                for (u.s(); !(a = u.n()).done;) {
                    if (a.value !== c) return null
                }
            } catch (e) {
                u.e(e)
            } finally {
                u.f()
            }
            return n = (t = c).replace(/[\s,\.]/g, ""), r = Math.max(t.lastIndexOf("."), t.lastIndexOf(",")), i = !1, -1 !== r && r >= t.length - 3 && (i = !0), i && (n = n.slice(0, r - (t.length - 1)) + "." + n.slice(r - (t.length - 1))), n
        }
        return null
    }
    var Wc = function(e, t) {
            try {
                sessionStorage.setItem(e, JSON.stringify(t))
            } catch (e) {}
        },
        Kc = function(e) {
            try {
                var t = sessionStorage.getItem(e);
                return t ? JSON.parse(t) : null
            } catch (e) {
                return null
            }
        },
        Yc = "value_currency_rule",
        Xc = "parameter_inference_rule",
        zc = [ic.CLICK, ic.SCROLL],
        Qc = function() {
            function e(t) {
                var n = this;
                i(this, e), this.handlerArray = t, zc.forEach((function(e) {
                    window.addEventListener(e.toLowerCase(), fi((function() {
                        n.interactionHandler(e)
                    }), cc, n), {
                        capture: !0,
                        passive: !0
                    })
                }))
            }
            return a(e, [{
                key: "iterateHandlerArray",
                value: function(e) {
                    this.handlerArray.forEach((function(t) {
                        return t(e)
                    }))
                }
            }, {
                key: "interactionHandler",
                value: function(e) {
                    var t = this;
                    this.timeoutId && clearTimeout(this.timeoutId), this.iterateHandlerArray(e), this.timeoutId = setTimeout((function() {
                        t.iterateHandlerArray(e)
                    }), cc)
                }
            }]), e
        }(),
        Zc = function() {
            function e() {
                i(this, e), this.history = {}
            }
            return a(e, [{
                key: "hasReport",
                value: function(e, t, n) {
                    var r = this.genHistoryKey(e, t);
                    return this.history[r] && this.history[r].indexOf(n) > -1
                }
            }, {
                key: "addHistory",
                value: function(e, t, n) {
                    var r = this.genHistoryKey(e, t);
                    this.history[r] || (this.history[r] = []), this.history[r].push(n)
                }
            }, {
                key: "clearHistory",
                value: function() {
                    this.history = {}
                }
            }, {
                key: "genHistoryKey",
                value: function(e, t) {
                    return "".concat(e, ":").concat(t)
                }
            }]), e
        }(),
        $c = function() {
            function e(t, n, r) {
                i(this, e), this.context = t, this.reportHistory = new Zc, this.reporters = n, this.reportService = r
            }
            return a(e, [{
                key: "report",
                value: function(e, t, n) {
                    var r = this,
                        i = zi(wr.AUTO_CONFIG),
                        o = this.getReportPixelList(t, n),
                        a = this.assemblyReportData(e, n, o);
                    a && i && po(this.reportService.reportPreposition || []).then((function() {
                        r.reportService.report(i, a, Bn.defaultReport)
                    }))
                }
            }, {
                key: "clearHistory",
                value: function() {
                    this.reportHistory.clearHistory()
                }
            }, {
                key: "getReportPixelList",
                value: function(e, t) {
                    var n = this,
                        r = JSON.stringify(Object.assign({}, t, {
                            page_trigger: void 0
                        }));
                    return this.reporters.filter((function(t) {
                        return !!dc(t) && pc(t, e)
                    })).filter((function(t) {
                        var i = t.getReporterId();
                        return !([nc.AUTO_COLLECTION, nc.AUTO_FORM].indexOf(e) > -1 && n.reportHistory.hasReport(e, i, r)) && (n.reportHistory.addHistory(e, i, r), t)
                    }))
                }
            }, {
                key: "assemblyReportData",
                value: function(e, t, n) {
                    var r;
                    if (0 !== n.length) {
                        var i = n.map((function(e) {
                                return e.getReporterId()
                            })),
                            o = this.context.getPageSign(),
                            a = n[0],
                            c = a.assemblyData(a.getReporterId(), "", {}, {}, wr.AUTO_CONFIG);
                        return delete c.event, c.action = e, c.auto_collected_properties = t, c.context.pixel || (c.context.pixel = {}), c.context.pixel.code = i[0], c.context.pixel.codes = i.join("|"), c.context.index = null === (r = o.pageIndex) || void 0 === r ? void 0 : r.index, c.context.session_id = o.sessionId, c.context.pageview_id = rr(this.context.getPageViewId(), a.reporterInfo.loadId, _r), c.message_id = c.message_id.replace(/-[^-]*$/, ""), c
                    }
                }
            }]), e
        }(),
        eu = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        tu = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        nu = "AutoConfig",
        ru = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a) {
                var c;
                return i(this, n), (c = t.call(this, {
                    name: nu,
                    reporters: r,
                    context: e
                })).autoCollectedMetadata = {}, c.initialize = !1, c.autoFormUpdateHandler = fi((function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var t = {
                                taskName: window.ttq._pf_tn || "auto_config_form_handler",
                                functionName: window.ttq._pf_tn && "auto_config_form_handler",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "auto_config_form_handler")
                        }
                    } catch (e) {}
                    if (c.autoForm) {
                        if (c.autoCollectedFormDetail = c.autoForm.getOverallFormDetail(), c.autoCollectedFormDetail.length > 3e4) return void Ki(Nr.CUSTOM_ERROR, {
                            message: "".concat(String(c.autoCollectedFormDetail.length))
                        }, {
                            custom_name: oc,
                            custom_enum: ec.OVER_LENGTH
                        });
                        c.actTracker.report(tc.METADATA, nc.AUTO_FORM, {
                            page_trigger: e,
                            form_details: c.autoCollectedFormDetail
                        })
                    }
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t), "auto_config_form_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                    } catch (e) {}
                }), 200, f(c)), c.autoCollectionUpdateHandler = fi((function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var t = {
                                taskName: window.ttq._pf_tn || "auto_config_metadata_handler",
                                functionName: window.ttq._pf_tn && "auto_config_metadata_handler",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "auto_config_metadata_handler")
                        }
                    } catch (e) {}
                    c.autoCollectedMetadata = Oc(c.filter), c.actTracker.report(tc.METADATA, nc.AUTO_COLLECTION, {
                        page_trigger: e,
                        content_data: c.autoCollectedMetadata
                    });
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t), "auto_config_metadata_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                    } catch (e) {}
                }), 200, f(c)), c.autoClickCallback = function(e) {
                    try {
                        c.signal_insights_config && Vc(c.context, c.signal_insights_config), c.signal_insights_travel_config && Gc(c.signal_insights_travel_config);
                        var t = function(e) {
                            var t = e,
                                n = e.parentNode,
                                r = 0,
                                i = !1;
                            try {
                                i = vi(t)
                            } catch (e) {
                                Ki(Nr.CUSTOM_ERROR, e, {
                                    custom_name: "button_check_error",
                                    custom_enum: "auto_click",
                                    extJSON: {
                                        element: t
                                    }
                                }), i = !1
                            }
                            if (i) return t;
                            for (; r < 5 && n && n !== document;) {
                                var o = !1;
                                try {
                                    o = vi(n)
                                } catch (e) {
                                    Ki(Nr.CUSTOM_ERROR, e, {
                                        custom_name: "button_check_error",
                                        custom_enum: "auto_click",
                                        extJSON: {
                                            element: t
                                        }
                                    }), o = !1
                                }
                                if (o) return n;
                                n = n.parentNode, r++
                            }
                            return e
                        }(e.target);
                        if (t) {
                            var n = function(e) {
                                var t = e.tag,
                                    n = e.class,
                                    r = e.destination,
                                    i = e.id,
                                    o = e.name,
                                    a = e.type,
                                    c = e.value,
                                    u = e.rect,
                                    s = e.xpath,
                                    l = e.inner_text,
                                    f = e.image_url,
                                    d = {
                                        tag: t,
                                        attributes: {},
                                        inner_text: l,
                                        xpath: s,
                                        num_child_buttons: e.num_child_buttons,
                                        timestamp: (new Date).toISOString(),
                                        position: u ? {
                                            x: u.x,
                                            y: u.y
                                        } : {
                                            x: "",
                                            y: ""
                                        }
                                    };
                                return n && (d.attributes.class = n), r && (d.attributes.destination = r), i && (d.attributes.id = i), o && (d.attributes.name = o), a && (d.attributes.type = a), c && (d.attributes.value = c), f && (d.image_url = f), d
                            }(function(e) {
                                for (var t, n, r, i, o, a, c, u = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], s = e.attributes, l = {
                                        type: "",
                                        value: "",
                                        name: "",
                                        class: "",
                                        dataset: "",
                                        id: "",
                                        tag: "",
                                        destination: "",
                                        xpath: "",
                                        inner_text: "",
                                        image_url: "",
                                        num_child_buttons: 0
                                    }, f = 0; f < s.length; f++) {
                                    var d = s[f];
                                    l[d.name] = d.value
                                }
                                var p = e.dataset;
                                l.dataset = JSON.stringify(p), l.id = null !== (t = e.id) && void 0 !== t ? t : "", l.class = null !== (n = e.className) && void 0 !== n ? n : "", l.tag = e.tagName, l.destination = _c(e), l.name = null !== (r = e.getAttribute("name")) && void 0 !== r ? r : "", l.value = null !== (i = e.getAttribute("value")) && void 0 !== i ? i : "", l.type = null !== (o = e.getAttribute("type")) && void 0 !== o ? o : "";
                                var h = e.getBoundingClientRect();
                                l.rect = h;
                                try {
                                    l.xpath = sc(e)
                                } catch (t) {
                                    l.xpath = "", Ki(Nr.CUSTOM_ERROR, t, {
                                        custom_name: "button_check_error",
                                        custom_enum: "auto_click",
                                        extJSON: {
                                            element: e
                                        }
                                    })
                                }
                                return l.inner_text = null !== (a = e.innerText) && void 0 !== a ? a : "", l.image_url = null !== (c = e.getAttribute("src")) && void 0 !== c ? c : "", l.num_child_buttons = u ? hc(e) : 0, l
                            }(t));
                            if (function(e) {
                                    var t, n, r = (null === (t = e.inner_text) || void 0 === t ? void 0 : t.toString().toLowerCase()) || "",
                                        i = (null === (n = e.image_url) || void 0 === n ? void 0 : n.toString().toLowerCase()) || "",
                                        o = [];
                                    if (e.attributes) {
                                        var a = e.attributes;
                                        o = [a.class, a.id, a.name, a.type, a.value, a.destination].map((function(e) {
                                            return (null == e ? void 0 : e.toString().toLowerCase()) || ""
                                        }))
                                    }
                                    return [r, i].concat(y(o)).some(uc)
                                }(n)) return void Wi(Nr.CUSTOM_INFO, {
                                custom_name: "sensitive_button",
                                extJSON: {
                                    attributes: {
                                        id: n.attributes.id,
                                        tag: n.tag,
                                        class: n.attributes.class
                                    }
                                }
                            });
                            c.reportButtonClick(n)
                        }
                    } catch (e) {
                        Ki(Nr.CUSTOM_ERROR, e, {
                            custom_name: "auto_click_callback_error",
                            custom_enum: "auto_click"
                        })
                    }
                }, c.filter = o.auto_config || {
                    open_graph: [],
                    microdata: [],
                    json_ld: [],
                    meta: []
                }, c.actTracker = new $c(e, r, a), c
            }
            return a(n, [{
                key: "initBaseFeature",
                value: function(e) {
                    !this.initialize && dc(e) && (this.initAutoClick(), this.initAutoCollection(), this.initInteractionListener(e), this.initialize = !0)
                }
            }, {
                key: "initExtraFeature",
                value: function(e) {
                    !this.autoForm && this.initialize && pc(e, nc.AUTO_FORM) && this.initAutoForm(e), this.initAutoVC(e)
                }
            }, {
                key: "initInteractionListener",
                value: function(e) {
                    var t = this,
                        n = e.options;
                    !this.initialize && n && !1 !== n.autoConfigListener && new Qc([function(e) {
                        fc(t.autoCollectionUpdateHandler, t)(e)
                    }, function(e) {
                        fc(t.autoFormUpdateHandler, t)(e)
                    }])
                }
            }, {
                key: "initAutoClick",
                value: function() {
                    var e, t;
                    e = this.autoClickCallback, t = or((function(t) {
                        try {
                            if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                                var n = {
                                    taskName: window.ttq._pf_tn || "auto_config_click_handler",
                                    functionName: window.ttq._pf_tn && "auto_config_click_handler",
                                    start: performance.now()
                                };
                                window.ttq._pf_tn || (window.ttq._pf_tn = "auto_config_click_handler")
                            }
                        } catch (e) {}
                        e(t);
                        try {
                            window.ttq && window.ttq._ppf && (n.end = performance.now(), window.ttq._ppf.push(n), "auto_config_click_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                        } catch (e) {}
                    }), 1e3), document.querySelectorAll(hi.join(", ")).forEach((function(e) {
                        _i.some((function(t) {
                            return e.matches(t)
                        })) || e.addEventListener("click", t, {
                            capture: !0
                        })
                    }))
                }
            }, {
                key: "initAutoVC",
                value: function(e) {
                    var t = qc(e),
                        n = function(e) {
                            var t;
                            try {
                                var n = null === (t = e.plugins) || void 0 === t ? void 0 : t.AutoConfig,
                                    r = null == n ? void 0 : n.vc_rules;
                                if (!r) return;
                                for (var i in r)
                                    if (r.hasOwnProperty(i)) {
                                        var o, a = T(r[i]);
                                        try {
                                            for (a.s(); !(o = a.n()).done;) {
                                                var c = o.value;
                                                if (c.travel_rule) return {
                                                    rule_key: c.rule_key,
                                                    rules: c.travel_rule
                                                }
                                            }
                                        } catch (e) {
                                            a.e(e)
                                        } finally {
                                            a.f()
                                        }
                                    }
                                return
                            } catch (e) {
                                return
                            }
                        }(e);
                    t && (this.signal_insights_config = t), n && (this.signal_insights_travel_config = n)
                }
            }, {
                key: "initAutoCollection",
                value: function() {}
            }, {
                key: "initAutoForm",
                value: function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                            taskName: window.ttq._pf_tn,
                            functionName: "initAutoForm",
                            start: performance.now()
                        }
                    } catch (e) {}
                    this.autoForm = new Uc(e), this.autoForm.addFormUpdateHandler(this.autoFormUpdateHandler.bind(this)), this.autoCollectedFormDetail = this.autoForm.getOverallFormDetail();
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
                    } catch (e) {}
                }
            }, {
                key: "pixelDidMount",
                value: function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                            taskName: window.ttq._pf_tn,
                            functionName: "auto_config_plugin_pixelDidMount",
                            start: performance.now()
                        }
                    } catch (e) {}
                    this.initBaseFeature(e), this.initExtraFeature(e);
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
                    } catch (e) {}
                }
            }, {
                key: "pixelSend",
                value: function(e, t, n) {
                    var r = this.reporters.find((function(t) {
                        return t.getReporterId() === e
                    }));
                    if (this.signal_insights_config && Vc(this.context, this.signal_insights_config), this.signal_insights_travel_config && Gc(this.signal_insights_travel_config), r && qc(r) && (Kc(Yc) || Kc(Xc))) {
                        var i;
                        "CompletePayment" !== t && "Pageview" !== t && "InitiateCheckout" !== t && "PlaceAnOrder" !== t || (i = Kc(Yc));
                        var o = Kc(Xc),
                            a = {
                                vc_properties: Object.assign(Object.assign({}, i && {
                                    value: i.value,
                                    currency: i.currency,
                                    ori_value: i.ori_value,
                                    rule_key: i.rule_key
                                }), o && {
                                    travel_properties: o
                                })
                            };
                        n.auto_collected_properties = a
                    }
                    "CompletePayment" === t && setTimeout((function() {
                        ! function(e) {
                            try {
                                sessionStorage.removeItem(e)
                            } catch (e) {}
                        }(Yc)
                    }), 500), "Pageview" === t && (r && !dc(r) || (fc(this.autoCollectionUpdateHandler, this)(ic.PAGE_VIEW), fc(this.autoFormUpdateHandler, this)(ic.PAGE_VIEW)))
                }
            }, {
                key: "pageUrlDidChange",
                value: function(e, t) {
                    null != t && "" != t && (this.autoCollectionUpdateHandler(ic.URL_CHANGE), this.autoFormUpdateHandler(ic.URL_CHANGE))
                }
            }, {
                key: "pageWillLeave",
                value: function() {
                    this.autoCollectionUpdateHandler(ic.PAGE_LEAVE), this.autoFormUpdateHandler(ic.PAGE_LEAVE)
                }
            }, {
                key: "reportButtonClick",
                value: function(e) {
                    this.actTracker.report(tc.CLICK, nc.AUTO_VC, {
                        page_trigger: ic.CLICK,
                        trigger_element: e,
                        vc_properties: Kc(Yc) ? Kc(Yc) : void 0
                    }), this.actTracker.report(tc.CLICK, nc.AUTO_VC_REVERSE, {
                        page_trigger: ic.CLICK,
                        trigger_element: e
                    })
                }
            }]), n
        }(xo);
    ru = eu([A.injectable(), tu(0, A.inject(Sr.CONTEXT)), tu(1, A.inject(Sr.TTQ_REPORTERS)), tu(2, A.inject(Sr.TTQ_GLOBAL_OPTIONS)), tu(3, A.inject(Sr.REPORT_SERVICE))], ru);
    var iu = {
        exports: {}
    };
    ! function(e, t) {
        var n = "__lodash_hash_undefined__",
            r = 9007199254740991,
            i = "[object Arguments]",
            o = "[object Boolean]",
            a = "[object Date]",
            c = "[object Function]",
            u = "[object GeneratorFunction]",
            s = "[object Map]",
            l = "[object Number]",
            f = "[object Object]",
            d = "[object Promise]",
            p = "[object RegExp]",
            h = "[object Set]",
            _ = "[object String]",
            v = "[object Symbol]",
            g = "[object WeakMap]",
            y = "[object ArrayBuffer]",
            m = "[object DataView]",
            E = "[object Float32Array]",
            b = "[object Float64Array]",
            w = "[object Int8Array]",
            I = "[object Int16Array]",
            T = "[object Int32Array]",
            O = "[object Uint8Array]",
            N = "[object Uint8ClampedArray]",
            A = "[object Uint16Array]",
            R = "[object Uint32Array]",
            P = /\w*$/,
            C = /^\[object .+?Constructor\]$/,
            k = /^(?:0|[1-9]\d*)$/,
            M = {};
        M[i] = M["[object Array]"] = M[y] = M[m] = M[o] = M[a] = M[E] = M[b] = M[w] = M[I] = M[T] = M[s] = M[l] = M[f] = M[p] = M[h] = M[_] = M[v] = M[O] = M[N] = M[A] = M[R] = !0, M["[object Error]"] = M[c] = M[g] = !1;
        var L = "object" == typeof S && S && S.Object === Object && S,
            D = "object" == typeof self && self && self.Object === Object && self,
            x = L || D || Function("return this")(),
            j = t && !t.nodeType && t,
            U = j && e && !e.nodeType && e,
            F = U && U.exports === j;

        function B(e, t) {
            return e.set(t[0], t[1]), e
        }

        function q(e, t) {
            return e.add(t), e
        }

        function G(e, t, n, r) {
            var i = -1,
                o = e ? e.length : 0;
            for (r && o && (n = e[++i]); ++i < o;) n = t(n, e[i], i, e);
            return n
        }

        function V(e) {
            var t = !1;
            if (null != e && "function" != typeof e.toString) try {
                t = !!(e + "")
            } catch (e) {}
            return t
        }

        function H(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach((function(e, r) {
                n[++t] = [r, e]
            })), n
        }

        function J(e, t) {
            return function(n) {
                return e(t(n))
            }
        }

        function W(e) {
            var t = -1,
                n = Array(e.size);
            return e.forEach((function(e) {
                n[++t] = e
            })), n
        }
        var K = Array.prototype,
            Y = Function.prototype,
            X = Object.prototype,
            z = x["__core-js_shared__"],
            Q = function() {
                var e = /[^.]+$/.exec(z && z.keys && z.keys.IE_PROTO || "");
                return e ? "Symbol(src)_1." + e : ""
            }(),
            Z = Y.toString,
            $ = X.hasOwnProperty,
            ee = X.toString,
            te = RegExp("^" + Z.call($).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
            ne = F ? x.Buffer : void 0,
            re = x.Symbol,
            ie = x.Uint8Array,
            oe = J(Object.getPrototypeOf, Object),
            ae = Object.create,
            ce = X.propertyIsEnumerable,
            ue = K.splice,
            se = Object.getOwnPropertySymbols,
            le = ne ? ne.isBuffer : void 0,
            fe = J(Object.keys, Object),
            de = je(x, "DataView"),
            pe = je(x, "Map"),
            he = je(x, "Promise"),
            _e = je(x, "Set"),
            ve = je(x, "WeakMap"),
            ge = je(Object, "create"),
            ye = Ge(de),
            me = Ge(pe),
            Ee = Ge(he),
            be = Ge(_e),
            we = Ge(ve),
            Ie = re ? re.prototype : void 0,
            Te = Ie ? Ie.valueOf : void 0;

        function Oe(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function Se(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function Ne(e) {
            var t = -1,
                n = e ? e.length : 0;
            for (this.clear(); ++t < n;) {
                var r = e[t];
                this.set(r[0], r[1])
            }
        }

        function Ae(e) {
            this.__data__ = new Se(e)
        }

        function Re(e, t) {
            var n = He(e) || function(e) {
                    return function(e) {
                        return function(e) {
                            return !!e && "object" == typeof e
                        }(e) && Je(e)
                    }(e) && $.call(e, "callee") && (!ce.call(e, "callee") || ee.call(e) == i)
                }(e) ? function(e, t) {
                    for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                    return r
                }(e.length, String) : [],
                r = n.length,
                o = !!r;
            for (var a in e) !t && !$.call(e, a) || o && ("length" == a || Be(a, r)) || n.push(a);
            return n
        }

        function Pe(e, t, n) {
            var r = e[t];
            $.call(e, t) && Ve(r, n) && (void 0 !== n || t in e) || (e[t] = n)
        }

        function Ce(e, t) {
            for (var n = e.length; n--;)
                if (Ve(e[n][0], t)) return n;
            return -1
        }

        function ke(e, t, n, r, d, g, S) {
            var C;
            if (r && (C = g ? r(e, d, g, S) : r(e)), void 0 !== C) return C;
            if (!Ye(e)) return e;
            var k = He(e);
            if (k) {
                if (C = function(e) {
                        var t = e.length,
                            n = e.constructor(t);
                        t && "string" == typeof e[0] && $.call(e, "index") && (n.index = e.index, n.input = e.input);
                        return n
                    }(e), !t) return function(e, t) {
                    var n = -1,
                        r = e.length;
                    t || (t = Array(r));
                    for (; ++n < r;) t[n] = e[n];
                    return t
                }(e, C)
            } else {
                var L = Fe(e),
                    D = L == c || L == u;
                if (We(e)) return function(e, t) {
                    if (t) return e.slice();
                    var n = new e.constructor(e.length);
                    return e.copy(n), n
                }(e, t);
                if (L == f || L == i || D && !g) {
                    if (V(e)) return g ? e : {};
                    if (C = function(e) {
                            return "function" != typeof e.constructor || qe(e) ? {} : (t = oe(e), Ye(t) ? ae(t) : {});
                            var t
                        }(D ? {} : e), !t) return function(e, t) {
                        return De(e, Ue(e), t)
                    }(e, function(e, t) {
                        return e && De(t, Xe(t), e)
                    }(C, e))
                } else {
                    if (!M[L]) return g ? e : {};
                    C = function(e, t, n, r) {
                        var i = e.constructor;
                        switch (t) {
                            case y:
                                return Le(e);
                            case o:
                            case a:
                                return new i(+e);
                            case m:
                                return function(e, t) {
                                    var n = t ? Le(e.buffer) : e.buffer;
                                    return new e.constructor(n, e.byteOffset, e.byteLength)
                                }(e, r);
                            case E:
                            case b:
                            case w:
                            case I:
                            case T:
                            case O:
                            case N:
                            case A:
                            case R:
                                return function(e, t) {
                                    var n = t ? Le(e.buffer) : e.buffer;
                                    return new e.constructor(n, e.byteOffset, e.length)
                                }(e, r);
                            case s:
                                return function(e, t, n) {
                                    return G(t ? n(H(e), !0) : H(e), B, new e.constructor)
                                }(e, r, n);
                            case l:
                            case _:
                                return new i(e);
                            case p:
                                return function(e) {
                                    var t = new e.constructor(e.source, P.exec(e));
                                    return t.lastIndex = e.lastIndex, t
                                }(e);
                            case h:
                                return function(e, t, n) {
                                    return G(t ? n(W(e), !0) : W(e), q, new e.constructor)
                                }(e, r, n);
                            case v:
                                return c = e, Te ? Object(Te.call(c)) : {}
                        }
                        var c
                    }(e, L, ke, t)
                }
            }
            S || (S = new Ae);
            var x = S.get(e);
            if (x) return x;
            if (S.set(e, C), !k) var j = n ? function(e) {
                return function(e, t, n) {
                    var r = t(e);
                    return He(e) ? r : function(e, t) {
                        for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
                        return e
                    }(r, n(e))
                }(e, Xe, Ue)
            }(e) : Xe(e);
            return function(e, t) {
                for (var n = -1, r = e ? e.length : 0; ++n < r && !1 !== t(e[n], n, e););
            }(j || e, (function(i, o) {
                j && (i = e[o = i]), Pe(C, o, ke(i, t, n, r, o, e, S))
            })), C
        }

        function Me(e) {
            return !(!Ye(e) || (t = e, Q && Q in t)) && (Ke(e) || V(e) ? te : C).test(Ge(e));
            var t
        }

        function Le(e) {
            var t = new e.constructor(e.byteLength);
            return new ie(t).set(new ie(e)), t
        }

        function De(e, t, n, r) {
            n || (n = {});
            for (var i = -1, o = t.length; ++i < o;) {
                var a = t[i],
                    c = r ? r(n[a], e[a], a, n, e) : void 0;
                Pe(n, a, void 0 === c ? e[a] : c)
            }
            return n
        }

        function xe(e, t) {
            var n, r, i = e.__data__;
            return ("string" == (r = typeof(n = t)) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== n : null === n) ? i["string" == typeof t ? "string" : "hash"] : i.map
        }

        function je(e, t) {
            var n = function(e, t) {
                return null == e ? void 0 : e[t]
            }(e, t);
            return Me(n) ? n : void 0
        }
        Oe.prototype.clear = function() {
            this.__data__ = ge ? ge(null) : {}
        }, Oe.prototype.delete = function(e) {
            return this.has(e) && delete this.__data__[e]
        }, Oe.prototype.get = function(e) {
            var t = this.__data__;
            if (ge) {
                var r = t[e];
                return r === n ? void 0 : r
            }
            return $.call(t, e) ? t[e] : void 0
        }, Oe.prototype.has = function(e) {
            var t = this.__data__;
            return ge ? void 0 !== t[e] : $.call(t, e)
        }, Oe.prototype.set = function(e, t) {
            return this.__data__[e] = ge && void 0 === t ? n : t, this
        }, Se.prototype.clear = function() {
            this.__data__ = []
        }, Se.prototype.delete = function(e) {
            var t = this.__data__,
                n = Ce(t, e);
            return !(n < 0) && (n == t.length - 1 ? t.pop() : ue.call(t, n, 1), !0)
        }, Se.prototype.get = function(e) {
            var t = this.__data__,
                n = Ce(t, e);
            return n < 0 ? void 0 : t[n][1]
        }, Se.prototype.has = function(e) {
            return Ce(this.__data__, e) > -1
        }, Se.prototype.set = function(e, t) {
            var n = this.__data__,
                r = Ce(n, e);
            return r < 0 ? n.push([e, t]) : n[r][1] = t, this
        }, Ne.prototype.clear = function() {
            this.__data__ = {
                hash: new Oe,
                map: new(pe || Se),
                string: new Oe
            }
        }, Ne.prototype.delete = function(e) {
            return xe(this, e).delete(e)
        }, Ne.prototype.get = function(e) {
            return xe(this, e).get(e)
        }, Ne.prototype.has = function(e) {
            return xe(this, e).has(e)
        }, Ne.prototype.set = function(e, t) {
            return xe(this, e).set(e, t), this
        }, Ae.prototype.clear = function() {
            this.__data__ = new Se
        }, Ae.prototype.delete = function(e) {
            return this.__data__.delete(e)
        }, Ae.prototype.get = function(e) {
            return this.__data__.get(e)
        }, Ae.prototype.has = function(e) {
            return this.__data__.has(e)
        }, Ae.prototype.set = function(e, t) {
            var n = this.__data__;
            if (n instanceof Se) {
                var r = n.__data__;
                if (!pe || r.length < 199) return r.push([e, t]), this;
                n = this.__data__ = new Ne(r)
            }
            return n.set(e, t), this
        };
        var Ue = se ? J(se, Object) : function() {
                return []
            },
            Fe = function(e) {
                return ee.call(e)
            };

        function Be(e, t) {
            return !!(t = null == t ? r : t) && ("number" == typeof e || k.test(e)) && e > -1 && e % 1 == 0 && e < t
        }

        function qe(e) {
            var t = e && e.constructor;
            return e === ("function" == typeof t && t.prototype || X)
        }

        function Ge(e) {
            if (null != e) {
                try {
                    return Z.call(e)
                } catch (e) {}
                try {
                    return e + ""
                } catch (e) {}
            }
            return ""
        }

        function Ve(e, t) {
            return e === t || e != e && t != t
        }(de && Fe(new de(new ArrayBuffer(1))) != m || pe && Fe(new pe) != s || he && Fe(he.resolve()) != d || _e && Fe(new _e) != h || ve && Fe(new ve) != g) && (Fe = function(e) {
            var t = ee.call(e),
                n = t == f ? e.constructor : void 0,
                r = n ? Ge(n) : void 0;
            if (r) switch (r) {
                case ye:
                    return m;
                case me:
                    return s;
                case Ee:
                    return d;
                case be:
                    return h;
                case we:
                    return g
            }
            return t
        });
        var He = Array.isArray;

        function Je(e) {
            return null != e && function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r
            }(e.length) && !Ke(e)
        }
        var We = le || function() {
            return !1
        };

        function Ke(e) {
            var t = Ye(e) ? ee.call(e) : "";
            return t == c || t == u
        }

        function Ye(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }

        function Xe(e) {
            return Je(e) ? Re(e) : function(e) {
                if (!qe(e)) return fe(e);
                var t = [];
                for (var n in Object(e)) $.call(e, n) && "constructor" != n && t.push(n);
                return t
            }(e)
        }
        e.exports = function(e) {
            return ke(e, !0, !0)
        }
    }(iu, iu.exports);
    var ou = iu.exports,
        au = {
            EMPTY_EVENT_TYPE_NAME: {
                title: "Missing Event Name",
                desc: "The event name for one or more of your events is empty. This can affect the accuracy of reporting for your conversions.",
                suggestion: "Go to your source code and add a name that follows our format requirements and TikTok policies.",
                link: "https://ads.tiktok.com/marketing_api/docs?rid=5ipocbxyw8v&id=1701890973258754"
            },
            INVALID_CONTENT_ID: {
                title: "Missing value for content ID",
                desc: "Include a value for your 'content_id' parameter. This is required for Video Shopping Ads (VSA).",
                suggestion: "If you are or plan to run Video Shopping Ads (VSA), go to your source code and include a value for the 'content_id' parameter.",
                link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
            },
            INVALID_CONTENT_TYPE: {
                title: "Invalid content type",
                desc: 'The content type for one or more of your events is invalid. Content type must be either "product" or "product_group".',
                suggestion: "Go to your source code and update the content type.",
                link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
            },
            INVALID_CURRENCY_CODE: {
                title: "Invalid currency code",
                desc: "The currency code for one or more of your events isn't supported. This can affect the accuracy of reporting for your ROAS.",
                suggestion: "Go to your source code and update the 'currency' parameters with a supported currency code.",
                link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
            },
            INVALID_EMAIL_FORMAT: {
                title: "Incorrect email format",
                desc: "The email format for your events does not match the format supported. This can impact Advanced Matching and your ad performance.",
                suggestion: "Go to your source code and update the format of your shared emails. It should follow 'xxx@xxx.com' format.",
                link: "https://ads.tiktok.com/marketing_api/docs?id=1739585700402178"
            },
            INVALID_EMAIL_INFORMATION: {
                title: "Invalid email information",
                desc: "The emails shared with your events were invalid.",
                suggestion: 'Go to your source code to double check shared emails. Leave your string empty when customer information isn\'t available. Avoid spaces, "undefined", or other hardcoded values.',
                link: "https://ads.tiktok.com/marketing_api/docs?id=1739585700402178"
            },
            INVALID_EVENT_PARAMETER_VALUE: {
                title: "Invalid value parameter",
                desc: "The 'value' parameter for one or more of your events is invalid. This is used calculate ROAS for people and the bid for your highest value customers. Parameters must be an integer or in the decimal format (e.g. 9.99). Also, they can't contain currency symbols, special characters, letters, or commas.",
                suggestion: "Go to your source code and update the 'value' parameter. It can only include numbers greater than or equal to zero (e.g. 9.99). Do not include currency symbols, special characters, letters, or commas.",
                link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
            },
            INVALID_PHONE_NUMBER_FORMAT: {
                title: "Incorrect phone number format",
                desc: "The phone number format for your events doesn't follow the E.164 format. This can affect Advanced Matching and your ad performance.",
                suggestion: "Go to your source code and update your shared phone numbers. It should follow the E.164 format.",
                link: "https://ads.tiktok.com/marketing_api/docs?id=1739585700402178"
            },
            INVALID_PHONE_NUMBER_INFORMATION: {
                title: "Invalid phone number information",
                desc: "The phone numbers shared with your events were invalid.",
                suggestion: 'Go to your source code to double check shared phone numbers. Leave your string empty when customer information isn\'t available. Avoid spaces, "undefined", or other hardcoded values.',
                link: "https://ads.tiktok.com/marketing_api/docs?id=1739585700402178"
            },
            LONG_EVENT_TYPE_NAME: {
                title: "Event Name Too Long",
                desc: "1 event type exceeds the 50 character limit.",
                suggestion: "Go to your source code and make these event names 50 characters or less.",
                link: "https://ads.tiktok.com/help/article/custom-events?lang=en"
            },
            MISMATCHED_EVENT_TYPE_NAME_FOR_CUSTOM_EVENT: {
                title: "Invalid Event Name Format",
                desc: "1 event name was rejected for not following TikTok format requirements.",
                suggestion: "Go to your source code and update these event types according to TikTok format requirements.",
                link: "https://ads.tiktok.com/help/article/custom-events?lang=en"
            },
            MISSING_CONTENT_ID: {
                title: "Missing 'content_id' paramter",
                desc: "The 'content_id' parameter isn't being received. This is required for Video Shopping Ads (VSA).",
                suggestion: "Include the 'content_id' parameter in your source code. This is required for Video Shopping Ads (VSA).",
                link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
            },
            MISSING_CURRENCY_PARAMETER: {
                title: 'Missing "currency" parameter',
                desc: "Events shared are missing a 'currency' parameter. This impacts our ability to receive the value amount correctly, which can affect the accuracy of reporting for your return on ad spend.",
                suggestion: 'Go to your source code and include the "currency" parameter. You can check supported currency codes. {{learn_more}}',
                link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
            },
            MISSING_EMAIL_AND_PHONE: {
                title: "Missing email and phone number",
                desc: "Email and phone number info isn't being received. This information is required for Complete Payment events.",
                suggestion: "Improve your email and phone coverage. This allows you to attribute more conversions and reach more people with your ads.",
                link: "https://ads.tiktok.com/marketing_api/docs?rid=5ipocbxyw8v&id=1701890972946433"
            },
            MISSING_VALUE_PARAMETER: {
                title: 'Missing "value" parameter',
                desc: "Events shared are missing a 'value' parameter'. This is used calculate ROAS for people and the bid for your highest value customers. ",
                suggestion: 'Go to your source code and include the "value" parameter.',
                link: "https://ads.tiktok.com/help/article/standard-events-parameters?redirected=2"
            },
            DUPLICATE_PIXEL_CODE: {
                title: "Duplicate Pixel ID",
                desc: "The pixel ID is duplicate. This could impact the pixel data accuracy.",
                suggestion: "Please double check and delete any unnecessary pixel code.",
                link: ""
            },
            MISSING_PIXEL_CODE: {
                title: "Missing pixel ID",
                desc: "Some of the events sent to your TikTok account are missing a pixel ID.",
                suggestion: "Go to your source code and double check that the 20-character pixel ID has been added to the ttq.load() function. Don't send null values or spaces. If you edited the base code, ensure the event.js has the 'sdkid' in the Chrome network panel.",
                link: ""
            },
            INVALID_PIXEL_CODE: {
                title: "Invalid pixel ID",
                desc: "The pixel ID is invalid. This could prevent your pixel from receiving data.",
                suggestion: "Please go to Events Manager and find the correct pixel ID.",
                link: ""
            }
        },
        cu = /^[a-zA-Z\d]([a-zA-Z_\-\d ]{0,}[a-zA-Z_\-\d])?$/,
        uu = ["product", "product_group"],
        su = ["email_is_hashed", "phone_is_hashed", "sha256_email", "sha256_phone"],
        lu = ["AED", "ARS", "AUD", "BDT", "BHD", "BIF", "BOB", "BRL", "CAD", "CHF", "CLP", "CNY", "COP", "CRC", "CZK", "DKK", "DZD", "EGP", "EUR", "GBP", "GTQ", "HKD", "HNL", "HUF", "IDR", "ILS", "INR", "ISK", "JPY", "KES", "KHR", "KRW", "KWD", "KZT", "MAD", "MOP", "MXN", "MYR", "NGN", "NIO", "NOK", "NZD", "OMR", "PEN", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RUB", "SAR", "SEK", "SGD", "THB", "TRY", "TWD", "UAH", "USD", "VES", "VND", "ZAR"],
        fu = ["CompletePayment", "InitiateCheckout", "AddToCart", "PlaceAnOrder", "ViewContent", "AddToWishlist"],
        du = function(e) {
            return void 0 === e
        },
        pu = "CompletePayment",
        hu = function(e) {
            var t = e.event,
                n = void 0 === t ? "" : t;
            return !!["null", "undefined"].includes(n) || (!!/^\s*$/.test(n) || !n)
        },
        _u = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        vu = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        gu = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o) {
                var a, c;
                return i(this, n), (a = t.call(this, {
                    name: "DiagnosticsConsole",
                    reporters: r,
                    context: e
                })).isEnableDiagnosticsConsole = !1, a.isEnableDiagnosticsConsole = Boolean(null === (c = null == o ? void 0 : o.plugins) || void 0 === c ? void 0 : c.DiagnosticsConsole), a
            }
            return a(n, [{
                key: "isDisableDiagnosticsConsole",
                value: function() {
                    try {
                        return !this.isEnableDiagnosticsConsole || Boolean(Object.values(this.reporters).some((function(e) {
                            var t, n;
                            return void 0 !== (null === (t = null == e ? void 0 : e.options) || void 0 === t ? void 0 : t.diagnostics) && !(null === (n = null == e ? void 0 : e.options) || void 0 === n ? void 0 : n.diagnostics)
                        })))
                    } catch (e) {
                        return !1
                    }
                }
            }, {
                key: "warn",
                value: function(e, t) {
                    try {
                        if (this.isDisableDiagnosticsConsole()) return;
                        ! function(e, t) {
                            if (Ar[e]) {
                                var n = Kr(),
                                    r = au[e],
                                    i = "".concat("[TikTok Pixel]", " - ").concat(r.title);
                                r.desc && (i += "\nIssue: ".concat(r.desc)), r.suggestion && (i += "\nSuggestion: ".concat(r.suggestion)), t && Object.keys(t).forEach((function(e) {
                                    i = i.split("{{".concat(e, "}}")).join(t[e])
                                })), i = i.trim(), r.link && (i += " See ".concat(r.link, " for more information.")), n && n.console && n.console.warn && n.console.warn(i)
                            }
                        }(e, t)
                    } catch (t) {
                        Ki(Nr.CUSTOM_ERROR, t, {
                            custom_name: "diagnostics_console",
                            custom_enum: e
                        })
                    }
                }
            }, {
                key: "pixelDidMount",
                value: function(e) {
                    var t = this;
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var n = {
                            taskName: window.ttq._pf_tn,
                            functionName: "console_plugin_pixelDidMount",
                            start: performance.now()
                        }
                    } catch (e) {}
                    e.getParameterInfo().then((function(e) {
                        t.handlePixelInfoValidate(e)
                    })).catch((function(e) {
                        Ki(Nr.CUSTOM_ERROR, e, {
                            custom_name: "diagnostics_console",
                            custom_enum: "pixel"
                        })
                    }));
                    try {
                        window.ttq && window.ttq._ppf && (n.end = performance.now(), window.ttq._ppf.push(n))
                    } catch (e) {}
                }
            }, {
                key: "pixelSend",
                value: function(e, t, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        i = arguments.length > 4 ? arguments[4] : void 0;
                    try {
                        r && r._i || i !== wr.TRACK || t === Tr || this.handleEventPayloadValidate(ou(n || {}))
                    } catch (e) {
                        Ki(Nr.CUSTOM_ERROR, e, {
                            custom_name: "diagnostics_console",
                            custom_enum: "track"
                        })
                    }
                }
            }, {
                key: "handlePixelInfoValidate",
                value: function(e) {
                    if (e.status === qo.Live);
                    else this.warn(Ar.INVALID_PIXEL_CODE)
                }
            }, {
                key: "handleEventPayloadValidate",
                value: function(e) {
                    e.properties || (e.properties = {}), hu(e) && this.warn(Ar.EMPTY_EVENT_TYPE_NAME),
                        function(e) {
                            var t = e.event,
                                n = void 0 === t ? "" : t;
                            return !!hu(e) || cu.test(n)
                        }(e) || this.warn(Ar.MISMATCHED_EVENT_TYPE_NAME_FOR_CUSTOM_EVENT),
                        function(e) {
                            var t = e.event;
                            return (void 0 === t ? "" : t).length <= 50
                        }(e) || this.warn(Ar.LONG_EVENT_TYPE_NAME),
                        function(e) {
                            var t = e.event,
                                n = e._inspection;
                            if (t === pu) {
                                var r = (void 0 === n ? {} : n).identity_params,
                                    i = void 0 === r ? {} : r;
                                return 0 === Object.keys(i).length || su.every((function(e) {
                                    return (i[e] || []).includes(Vn.EMPTY_VALUE)
                                }))
                            }
                            return !1
                        }(e) && this.warn(Ar.MISSING_EMAIL_AND_PHONE),
                        function(e) {
                            var t = e._inspection,
                                n = void 0 === t ? {} : t;
                            return !(!n || !n.identity_params) && ((n.identity_params.email_is_hashed || []).includes(Vn.FILTER_EVENTS) || (n.identity_params.sha256_email || []).includes(Vn.FILTER_EVENTS))
                        }(e) && this.warn(Ar.INVALID_EMAIL_INFORMATION),
                        function(e) {
                            var t = e._inspection,
                                n = void 0 === t ? {} : t;
                            return !(!n || !n.identity_params) && ((n.identity_params.email_is_hashed || []).includes(Vn.UNKNOWN_INVALID) || (n.identity_params.sha256_email || []).includes(Vn.UNKNOWN_INVALID))
                        }(e) && this.warn(Ar.INVALID_EMAIL_FORMAT),
                        function(e) {
                            var t = e._inspection,
                                n = void 0 === t ? {} : t;
                            return !(!n || !n.identity_params) && ((n.identity_params.phone_is_hashed || []).includes(Vn.FILTER_EVENTS) || (n.identity_params.sha256_phone || []).includes(Vn.FILTER_EVENTS))
                        }(e) && this.warn(Ar.INVALID_PHONE_NUMBER_INFORMATION),
                        function(e) {
                            var t = e._inspection,
                                n = void 0 === t ? {} : t;
                            return !(!n || !n.identity_params) && ((n.identity_params.phone_is_hashed || []).includes(Vn.UNKNOWN_INVALID) || (n.identity_params.sha256_phone || []).includes(Vn.UNKNOWN_INVALID))
                        }(e) && this.warn(Ar.INVALID_PHONE_NUMBER_FORMAT),
                        function(e) {
                            var t = e.event,
                                n = void 0 === t ? "" : t,
                                r = e.properties,
                                i = void 0 === r ? {} : r;
                            if (fu.includes(n)) {
                                if (du(i.contents) && du(i.content_id)) return !0;
                                if (!du(i.contents)) return !Array.isArray(i.contents) || i.contents.length < 1 || !i.contents.every((function(e) {
                                    return e && !du(e.content_id)
                                }))
                            }
                            return !1
                        }(e) && this.warn(Ar.MISSING_CONTENT_ID),
                        function(e) {
                            var t = e.properties,
                                n = void 0 === t ? {} : t,
                                r = n.content_id,
                                i = n.contents;
                            return !(!du(r) && /^\s*$/.test(r)) && (!(!du(i) && Array.isArray(i)) || i.every((function(e) {
                                return e && !du(e.content_id) && !/^\s*$/.test(e.content_id)
                            })))
                        }(e) || this.warn(Ar.INVALID_CONTENT_ID),
                        function(e) {
                            var t = e.properties.content_type;
                            return !t || uu.includes(t)
                        }(e) || this.warn(Ar.INVALID_CONTENT_TYPE),
                        function(e) {
                            var t = e.properties.value;
                            return !t || "number" == typeof t || !("string" != typeof t || !/^\d+(\.\d+)?$/.test(t) && !/^\d+$/.test(t))
                        }(e) || this.warn(Ar.INVALID_EVENT_PARAMETER_VALUE),
                        function(e) {
                            var t = e.event,
                                n = void 0 === t ? "" : t,
                                r = e.properties,
                                i = void 0 === r ? {} : r;
                            return !(n !== pu || !du(i.value)) || !(du(i.currency) || !du(i.value))
                        }(e) && this.warn(Ar.MISSING_VALUE_PARAMETER),
                        function(e) {
                            var t = e.properties.currency;
                            return !t || lu.includes(t)
                        }(e) || this.warn(Ar.INVALID_CURRENCY_CODE),
                        function(e) {
                            var t = e.event,
                                n = void 0 === t ? "" : t,
                                r = e.properties,
                                i = void 0 === r ? {} : r;
                            return !(n !== pu || !du(i.currency)) || !(du(i.value) || !du(i.currency))
                        }(e) && this.warn(Ar.MISSING_CURRENCY_PARAMETER, {
                            learn_more: ""
                        })
                }
            }]), n
        }(xo);
    gu = _u([A.injectable(), vu(0, A.inject(Sr.CONTEXT)), vu(1, A.inject(Sr.TTQ_REPORTERS)), vu(2, A.inject(Sr.TTQ_GLOBAL_OPTIONS))], gu);
    var yu = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        mu = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Eu = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a) {
                var c;
                return i(this, n), (c = t.call(this, {
                    name: "PangleCookieMatching",
                    reporters: r,
                    context: e
                })).hasReport = !1, c.reportService = o, c.env = a, c
            }
            return a(n, [{
                key: "isPixelPangleCookieMatching",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        t = this.reporters;
                    if (e) {
                        var n = t.find((function(t) {
                            return t.getReporterId() === e
                        }));
                        if (n && n.plugins.PangleCookieMatching) return !0
                    } else if (t.some((function(e) {
                            return Boolean(e.plugins.PangleCookieMatching)
                        }))) return !0;
                    return !1
                }
            }, {
                key: "disablePangleCookie",
                value: function() {
                    this.isPixelPangleCookieMatching() && fo("https://analytics.pangle-ads.com/api/v2/pangle_disable_cookie")
                }
            }, {
                key: "pixelSend",
                value: function(e, t, n) {
                    var r;
                    try {
                        if (0 === (null === (r = this.context.getPageSign().pageIndex) || void 0 === r ? void 0 : r.index) && !Ai(this.env) && n && n.message_id && this.isPixelPangleCookieMatching(e) && !this.hasReport) {
                            var i = {
                                event: n.event,
                                message_id: n.message_id,
                                context: {
                                    library: n.context.library
                                },
                                timestamp: (new Date).toJSON()
                            };
                            this.hasReport = !0, this.reportService.report("https://analytics.pangle-ads.com/api/v2/pangle_pixel", i, Bn.httpReport)
                        }
                    } catch (e) {
                        Ki(Nr.CUSTOM_ERROR, e, {
                            custom_name: "pangle_report"
                        })
                    }
                }
            }]), n
        }(xo);
    Eu = yu([A.injectable(), mu(0, A.inject(Sr.CONTEXT)), mu(1, A.inject(Sr.TTQ_REPORTERS)), mu(2, A.inject(Sr.REPORT_SERVICE)), mu(3, A.inject(Sr.ENV))], Eu);
    var bu, wu = "https://analytics.tiktok.com/i18n/pixel/eb.js",
        Iu = "_tt_event_builder";
    ! function(e) {
        e.EVENT_BUILD_BOOTSTRAP_ACK = "event_builder_bootstrap_ack", e.EVENT_BUILD_WRONG_CODE = "event_builder_wrong_code", e.EVENT_BUILD_BOOTSTRAP = "event_builder_bootstrap"
    }(bu || (bu = {}));
    var Tu = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Ou = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Su = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r) {
                var o;
                return i(this, n), (o = t.call(this, {
                    name: "EventBuilder",
                    reporters: r,
                    context: e
                })).pluginMounted = !1, o
            }
            return a(n, [{
                key: "pixelDidMount",
                value: function(e) {
                    var t = this;
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var n = {
                            taskName: window.ttq._pf_tn,
                            functionName: "event_builder_plugin_pixelDidMount",
                            start: performance.now()
                        }
                    } catch (e) {}
                    if (!this.pluginMounted) {
                        this.pluginMounted = !0;
                        var r = Xr(),
                            i = function(e) {
                                e.data.type !== bu.EVENT_BUILD_BOOTSTRAP || r._event_builder_pickup_sdk_loaded || (t.reporters.find((function(t) {
                                    return t.getReporterId() === e.data.pixelCode
                                })) ? (r._event_builder_pickup_sdk_loaded = !0, Zi(Iu, e.data), fo(wu).then((function() {
                                    window.opener.window.postMessage({
                                        type: bu.EVENT_BUILD_BOOTSTRAP_ACK
                                    }, "*")
                                })).catch((function(e) {
                                    Ki(Nr.CUSTOM_ERROR, e, {
                                        custom_name: "event_builder_load_error",
                                        custom_enum: "load_ebjs"
                                    })
                                }))) : r._event_builder_pickup_sdk_verify_flag || (setTimeout((function() {
                                    t.reporters.find((function(t) {
                                        return t.getReporterId() === e.data.pixelCode
                                    })) || window.opener.window.postMessage({
                                        type: bu.EVENT_BUILD_WRONG_CODE
                                    }, "*")
                                }), 5e3), r._event_builder_pickup_sdk_verify_flag = !0))
                            };
                        r._event_builder_pickup_sdk_loaded || (Qi(Iu) ? fo(wu).then((function() {
                            r._event_builder_pickup_sdk_loaded = !0
                        })) : window.opener && (window.addEventListener("message", i), setTimeout((function() {
                            window.removeEventListener("message", i)
                        }), 8e3)));
                        try {
                            window.ttq && window.ttq._ppf && (n.end = performance.now(), window.ttq._ppf.push(n))
                        } catch (e) {}
                    }
                }
            }]), n
        }(xo);
    Su = Tu([A.injectable(), Ou(0, A.inject(Sr.CONTEXT)), Ou(1, A.inject(Sr.TTQ_REPORTERS))], Su);
    var Nu = "https://analytics-ipv6.tiktokw.us/ipv6/enrich_ipv6",
        Au = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Ru = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Pu = "tt_pixel_is_enrich_ipv6_triggered_by_enrich_am",
        Cu = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a) {
                var c;
                return i(this, n), (c = t.call(this, {
                    name: "EnrichIpv6",
                    reporters: r,
                    context: e
                })).hasReported = !1, c.shouldReportAfterEnrichAM = !1, c.reportService = o, c.env = a, c
            }
            return a(n, [{
                key: "isPixelEnrichIpv6",
                value: function() {
                    var e = this.reporters;
                    return !(!e || 0 === e.length) && e.every((function(e) {
                        return e && e.plugins && !0 === e.plugins.EnrichIpv6
                    }))
                }
            }, {
                key: "isEnrichIpv6V2SwitchOn",
                value: function() {
                    var e = "EnrichIpv6V2";
                    try {
                        var t = Xr()._plugins || {};
                        return null != t[e] && !!t[e]
                    } catch (e) {
                        return !1
                    }
                }
            }, {
                key: "buildEnrichIpv6Data",
                value: function(e) {
                    var t = this.isEnrichIpv6V2SwitchOn() ? "#source=2" : "#source=1";
                    return Object.assign(Object.assign({}, e), {
                        event: "EnrichIpv6",
                        trigger_event: e.event,
                        message_id: e.message_id + t
                    })
                }
            }, {
                key: "pixelSend",
                value: function(e, t, n) {
                    var r, i = arguments.length > 4 ? arguments[4] : void 0;
                    try {
                        if (i !== wr.TRACK) return;
                        if ("Shopify" !== $r(e) && !this.isEnrichIpv6V2SwitchOn()) return;
                        if (Ai(this.env) || !n || !n.message_id) return;
                        var o = this.context.getPageSign();
                        0 === (null === (r = o.pageIndex) || void 0 === r ? void 0 : r.index) && !this.hasReported && this.isPixelEnrichIpv6() && (this.hasReported = !0, this.reportService.report(Nu, this.buildEnrichIpv6Data(n), Bn.htmlHttpReport));
                        var a = "true" === sessionStorage.getItem(Pu);
                        if (a) return;
                        "EnrichAM" === t && (this.shouldReportAfterEnrichAM = !0), this.shouldReportAfterEnrichAM && this.isPixelEnrichIpv6() && (this.shouldReportAfterEnrichAM = !1, sessionStorage.setItem(Pu, "true"), this.reportService.report(Nu, this.buildEnrichIpv6Data(n), Bn.htmlHttpReport))
                    } catch (e) {
                        Ki(Nr.CUSTOM_ERROR, e, {
                            custom_name: "enrich_ipv6_report"
                        })
                    }
                }
            }]), n
        }(xo);

    function ku(e, t) {
        return function() {
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            window.requestIdleCallback ? window.requestIdleCallback(e.bind.apply(e, [t].concat(r))) : e.apply(t, r)
        }
    }

    function Mu(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
        try {
            return Number.isInteger(e) ? e : parseFloat(e.toFixed(t))
        } catch (e) {
            return -1
        }
    }
    Cu = Au([A.injectable(), Ru(0, A.inject(Sr.CONTEXT)), Ru(1, A.inject(Sr.TTQ_REPORTERS)), Ru(2, A.inject(Sr.REPORT_SERVICE)), Ru(3, A.inject(Sr.ENV))], Cu);
    var Lu;
    ! function(e) {
        e.FIRST_CONTENTFUL_PAINT = "fcp", e.LARGEST_CONTENTFUL_PAINT = "lcp", e.FIRST_INPUT_DELAY = "fid", e.TIME_TO_FIRST_BYTE = "ttfb", e.PAGE_LEAVE = "pl", e.LOAD_FINISH = "lf", e.TIME_WINDOW_TRACKER = "twt", e.TIME_TO_INTERACTIVE = "tti"
    }(Lu || (Lu = {}));
    var Du, xu, ju, Uu, Fu = function() {
            function e(t, n, r, o) {
                i(this, e), o ? (this.reportService = r, this.context = t, this.reporters = n, this.reportUrl = o) : Ki(Nr.CUSTOM_ERROR, new Error("empty reportUrl"), {
                    custom_name: "empty_reportUrl",
                    custom_enum: "page_perf_monitor"
                })
            }
            return a(e, [{
                key: "getResult",
                value: function(e) {
                    return {
                        action_event: e
                    }
                }
            }, {
                key: "report",
                value: function(e) {
                    var t = this;
                    if (void 0 !== e) {
                        var n = this.getReportPixelList(),
                            r = this.assemblyReportData(wr.PAGE, e, n);
                        r && po(this.reportService.reportPreposition || []).then((function() {
                            t.reportService.report(t.reportUrl, r, Bn.defaultReport)
                        })), this.resetAfterReport()
                    }
                }
            }, {
                key: "getReportPixelList",
                value: function() {
                    return this.reporters
                }
            }, {
                key: "assemblyReportData",
                value: function(e, t, n) {
                    var r;
                    if (0 !== n.length) {
                        var i = n.map((function(e) {
                                return e.getReporterId()
                            })),
                            o = this.context.getPageSign(),
                            a = n[0],
                            c = a.assemblyData(a.getReporterId(), "", {}, {}, wr.PAGE);
                        return delete c.event, c.action = e, c.auto_collected_properties = t, c.context.pixel || (c.context.pixel = {}), c.context.pixel.code = i[0], c.context.pixel.codes = i.join("|"), c.context.index = null === (r = o.pageIndex) || void 0 === r ? void 0 : r.index, c.context.session_id = o.sessionId, c.context.pageview_id = rr(this.context.getPageViewId(), a.reporterInfo.loadId, _r), c.message_id = c.message_id.replace(/-[^-]*$/, ""), c
                    }
                }
            }]), e
        }(),
        Bu = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a) {
                var c;
                return i(this, n), (c = t.call(this, e, r, o, a)).clickTimes = 0, c.scrollTimes = 0, c.init(), c
            }
            return a(n, [{
                key: "init",
                value: function() {
                    var e, t, n = this;
                    e = ku(this.updateClickTimes, this), t = or((function(t) {
                            e()
                        }), 100), window.addEventListener("click", t, {
                            capture: !0
                        }),
                        function(e) {
                            var t = or((function() {
                                e()
                            }), 500);
                            window.addEventListener("scroll", t, {
                                passive: !0
                            })
                        }(ku(this.updateScrollTimes, this)), setInterval((function() {
                            n.reportInteraction()
                        }), 1e4)
                }
            }, {
                key: "reportInteraction",
                value: function() {
                    this.isUpdated() && (this.report(this.getResult(Lu.TIME_WINDOW_TRACKER)), this.resetAfterReport())
                }
            }, {
                key: "getResult",
                value: function(e) {
                    return {
                        action_event: e,
                        inter: {
                            ct: this.clickTimes,
                            st: this.scrollTimes
                        },
                        page_inter: {
                            metrics_type: "ct|st",
                            ct: this.clickTimes,
                            st: this.scrollTimes
                        }
                    }
                }
            }, {
                key: "updateClickTimes",
                value: function() {
                    this.clickTimes += 1
                }
            }, {
                key: "updateScrollTimes",
                value: function() {
                    this.scrollTimes += 1
                }
            }, {
                key: "isUpdated",
                value: function() {
                    return 0 != this.clickTimes || 0 != this.scrollTimes
                }
            }, {
                key: "resetAfterReport",
                value: function() {
                    this.clickTimes = 0, this.scrollTimes = 0
                }
            }]), n
        }(Fu),
        qu = function(e) {
            var t = function() {
                new Promise((function(e, t) {
                    setTimeout((function() {
                        var n = performance.getEntriesByType("navigation");
                        if (n.length > 0) {
                            var r = n[0];
                            e(r.loadEventEnd - r.startTime)
                        } else window.performance.timing ? e(window.performance.timing.loadEventEnd - window.performance.timing.navigationStart || -1) : t("Performance timing not supported")
                    }), 0)
                })).then((function(t) {
                    e(Lu.LOAD_FINISH, t)
                })).catch((function(t) {
                    e(Lu.LOAD_FINISH, -1)
                }))
            };
            "complete" === window.document.readyState ? t() : window.addEventListener("load", t)
        },
        Gu = -1,
        Vu = function(e) {
            addEventListener("pageshow", (function(t) {
                t.persisted && (Gu = t.timeStamp, e(t))
            }), !0)
        },
        Hu = function() {
            return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
        },
        Ju = function() {
            var e = Hu();
            return e && e.activationStart || 0
        },
        Wu = function(e, t) {
            var n = Hu(),
                r = "navigate";
            return Gu >= 0 ? r = "back-forward-cache" : n && (document.prerendering || Ju() > 0 ? r = "prerender" : document.wasDiscarded ? r = "restore" : n.type && (r = n.type.replace(/_/g, "-"))), {
                name: e,
                value: void 0 === t ? -1 : t,
                rating: "good",
                delta: 0,
                entries: [],
                id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
                navigationType: r
            }
        },
        Ku = function(e, t, n) {
            try {
                if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                    var r = new PerformanceObserver((function(e) {
                        Promise.resolve().then((function() {
                            t(e.getEntries())
                        }))
                    }));
                    return r.observe(Object.assign({
                        type: e,
                        buffered: !0
                    }, n || {})), r
                }
            } catch (e) {}
        },
        Yu = function(e, t, n, r) {
            var i, o;
            return function(a) {
                t.value >= 0 && (a || r) && ((o = t.value - (i || 0)) || void 0 === i) && (i = t.value, t.delta = o, t.rating = function(e, t) {
                    return e > t[1] ? "poor" : e > t[0] ? "needs-improvement" : "good"
                }(t.value, n), e(t))
            }
        },
        Xu = function(e) {
            requestAnimationFrame((function() {
                return requestAnimationFrame((function() {
                    return e()
                }))
            }))
        },
        zu = function(e) {
            var t = function(t) {
                "pagehide" !== t.type && "hidden" !== document.visibilityState || e(t)
            };
            addEventListener("visibilitychange", t, !0), addEventListener("pagehide", t, !0)
        },
        Qu = function(e) {
            var t = !1;
            return function(n) {
                t || (e(n), t = !0)
            }
        },
        Zu = -1,
        $u = function() {
            return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
        },
        es = function(e) {
            "hidden" === document.visibilityState && Zu > -1 && (Zu = "visibilitychange" === e.type ? e.timeStamp : 0, ns())
        },
        ts = function() {
            addEventListener("visibilitychange", es, !0), addEventListener("prerenderingchange", es, !0)
        },
        ns = function() {
            removeEventListener("visibilitychange", es, !0), removeEventListener("prerenderingchange", es, !0)
        },
        rs = function() {
            return Zu < 0 && (Zu = $u(), ts(), Vu((function() {
                setTimeout((function() {
                    Zu = $u(), ts()
                }), 0)
            }))), {
                get firstHiddenTime() {
                    return Zu
                }
            }
        },
        is = function(e) {
            document.prerendering ? addEventListener("prerenderingchange", (function() {
                return e()
            }), !0) : e()
        },
        os = [1800, 3e3],
        as = function(e, t) {
            t = t || {}, is((function() {
                var n, r = rs(),
                    i = Wu("FCP"),
                    o = Ku("paint", (function(e) {
                        e.forEach((function(e) {
                            "first-contentful-paint" === e.name && (o.disconnect(), e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - Ju(), 0), i.entries.push(e), n(!0)))
                        }))
                    }));
                o && (n = Yu(e, i, os, t.reportAllChanges), Vu((function(r) {
                    i = Wu("FCP"), n = Yu(e, i, os, t.reportAllChanges), Xu((function() {
                        i.value = performance.now() - r.timeStamp, n(!0)
                    }))
                })))
            }))
        },
        cs = [.1, .25],
        us = {
            passive: !0,
            capture: !0
        },
        ss = new Date,
        ls = function(e, t) {
            Du || (Du = t, xu = e, ju = new Date, ps(removeEventListener), fs())
        },
        fs = function() {
            if (xu >= 0 && xu < ju - ss) {
                var e = {
                    entryType: "first-input",
                    name: Du.type,
                    target: Du.target,
                    cancelable: Du.cancelable,
                    startTime: Du.timeStamp,
                    processingStart: Du.timeStamp + xu
                };
                Uu.forEach((function(t) {
                    t(e)
                })), Uu = []
            }
        },
        ds = function(e) {
            if (e.cancelable) {
                var t = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
                "pointerdown" == e.type ? function(e, t) {
                    var n = function() {
                            ls(e, t), i()
                        },
                        r = function() {
                            i()
                        },
                        i = function() {
                            removeEventListener("pointerup", n, us), removeEventListener("pointercancel", r, us)
                        };
                    addEventListener("pointerup", n, us), addEventListener("pointercancel", r, us)
                }(t, e) : ls(t, e)
            }
        },
        ps = function(e) {
            ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function(t) {
                return e(t, ds, us)
            }))
        },
        hs = [100, 300],
        _s = [2500, 4e3],
        vs = {},
        gs = [800, 1800],
        ys = function e(t) {
            document.prerendering ? is((function() {
                return e(t)
            })) : "complete" !== document.readyState ? addEventListener("load", (function() {
                return e(t)
            }), !0) : setTimeout(t, 0)
        },
        ms = function(e, t) {
            t = t || {};
            var n = Wu("TTFB"),
                r = Yu(e, n, gs, t.reportAllChanges);
            ys((function() {
                var i = Hu();
                if (i) {
                    var o = i.responseStart;
                    if (o <= 0 || o > performance.now()) return;
                    n.value = Math.max(o - Ju(), 0), n.entries = [i], r(!0), Vu((function() {
                        n = Wu("TTFB", 0), (r = Yu(e, n, gs, t.reportAllChanges))(!0)
                    }))
                }
            }))
        },
        Es = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        bs = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        ws = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a) {
                var c;
                return i(this, n), (c = t.call(this, e, r, o, a)).cls = -1, c.init(), c
            }
            return a(n, [{
                key: "init",
                value: function() {
                    var e;
                    ! function(e, t) {
                        t = t || {}, as(Qu((function() {
                            var n, r = Wu("CLS", 0),
                                i = 0,
                                o = [],
                                a = function(e) {
                                    e.forEach((function(e) {
                                        if (!e.hadRecentInput) {
                                            var t = o[0],
                                                n = o[o.length - 1];
                                            i && e.startTime - n.startTime < 1e3 && e.startTime - t.startTime < 5e3 ? (i += e.value, o.push(e)) : (i = e.value, o = [e])
                                        }
                                    })), i > r.value && (r.value = i, r.entries = o, n())
                                },
                                c = Ku("layout-shift", a);
                            c && (n = Yu(e, r, cs, t.reportAllChanges), zu((function() {
                                a(c.takeRecords()), n(!0)
                            })), Vu((function() {
                                i = 0, r = Wu("CLS", 0), n = Yu(e, r, cs, t.reportAllChanges), Xu((function() {
                                    return n()
                                }))
                            })), setTimeout(n, 0))
                        })))
                    }(this.clsHandler.bind(this), {
                        reportAllChanges: !0
                    }), ms(this.webVitalHandler.bind(this)), as(this.webVitalHandler.bind(this)),
                        function(e, t) {
                            t = t || {}, is((function() {
                                var n, r = rs(),
                                    i = Wu("LCP"),
                                    o = function(e) {
                                        var t = e[e.length - 1];
                                        t && t.startTime < r.firstHiddenTime && (i.value = Math.max(t.startTime - Ju(), 0), i.entries = [t], n())
                                    },
                                    a = Ku("largest-contentful-paint", o);
                                if (a) {
                                    n = Yu(e, i, _s, t.reportAllChanges);
                                    var c = Qu((function() {
                                        vs[i.id] || (o(a.takeRecords()), a.disconnect(), vs[i.id] = !0, n(!0))
                                    }));
                                    ["keydown", "click"].forEach((function(e) {
                                        addEventListener(e, (function() {
                                            return setTimeout(c, 0)
                                        }), !0)
                                    })), zu(c), Vu((function(r) {
                                        i = Wu("LCP"), n = Yu(e, i, _s, t.reportAllChanges), Xu((function() {
                                            i.value = performance.now() - r.timeStamp, vs[i.id] = !0, n(!0)
                                        }))
                                    }))
                                }
                            }))
                        }(this.webVitalHandler.bind(this), {
                            reportAllChanges: !0
                        }),
                        function(e, t) {
                            t = t || {}, is((function() {
                                var n, r = rs(),
                                    i = Wu("FID"),
                                    o = function(e) {
                                        e.startTime < r.firstHiddenTime && (i.value = e.processingStart - e.startTime, i.entries.push(e), n(!0))
                                    },
                                    a = function(e) {
                                        e.forEach(o)
                                    },
                                    c = Ku("first-input", a);
                                n = Yu(e, i, hs, t.reportAllChanges), c && zu(Qu((function() {
                                    a(c.takeRecords()), c.disconnect()
                                }))), c && Vu((function() {
                                    var r;
                                    i = Wu("FID"), n = Yu(e, i, hs, t.reportAllChanges), Uu = [], xu = -1, Du = null, ps(addEventListener), r = o, Uu.push(r), fs()
                                }))
                            }))
                        }(this.webVitalHandler.bind(this)), e = this.baseHandler.bind(this), setTimeout((function() {
                            e(Lu.TIME_TO_INTERACTIVE, -1)
                        }), 0), qu(this.baseHandler.bind(this))
                }
            }, {
                key: "getResult",
                value: function(e) {
                    var t, n = Math.floor(performance && performance.timing ? t ? Date.now() - t : Date.now() - performance.timing.navigationStart : -1),
                        r = {
                            ttns: n,
                            cls: Mu(this.cls),
                            idx: this.getSessionIndex(),
                            pep: Mu(this.getPep())
                        },
                        i = ["cls", "idx", "pep"];
                    i.unshift(e);
                    var o = {
                        metrics_type: i.join("|"),
                        cls: r.cls,
                        idx: r.idx,
                        pep: r.pep
                    };
                    return o[e] = n, {
                        action_event: e,
                        perf: r,
                        page_perf: o
                    }
                }
            }, {
                key: "resetAfterReport",
                value: function() {}
            }, {
                key: "clsHandler",
                value: function(e) {
                    this.cls = e.value || -1
                }
            }, {
                key: "webVitalHandler",
                value: function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var t = {
                                taskName: window.ttq._pf_tn || "page_data_web_vital_handler",
                                functionName: window.ttq._pf_tn && "page_data_web_vital_handler",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "page_data_web_vital_handler")
                        }
                    } catch (e) {}
                    var n, r = this.getResult(e.name.toLocaleLowerCase());
                    r.perf && (r.perf.ttns = (null == e ? void 0 : e.value) ? Math.floor(e.value) : -1), r.page_perf && (r.page_perf[e.name.toLocaleLowerCase()] = null === (n = null == r ? void 0 : r.perf) || void 0 === n ? void 0 : n.ttns), this.report(r), this.resetAfterReport();
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t), "page_data_web_vital_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                    } catch (e) {}
                }
            }, {
                key: "baseHandler",
                value: function(e, t) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var n = {
                                taskName: window.ttq._pf_tn || "page_data_base_handler",
                                functionName: window.ttq._pf_tn && "page_data_base_handler",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "page_data_base_handler")
                        }
                    } catch (e) {}
                    var r, i = this.getResult(e);
                    i.perf && (i.perf.ttns = t ? Math.floor(t) : -1), i.page_perf && (i.page_perf[e] = null === (r = i.perf) || void 0 === r ? void 0 : r.ttns), this.report(i), this.resetAfterReport();
                    try {
                        window.ttq && window.ttq._ppf && (n.end = performance.now(), window.ttq._ppf.push(n), "page_data_base_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                    } catch (e) {}
                }
            }, {
                key: "getSessionIndex",
                value: function() {
                    var e, t = null === (e = this.context.getPageSign().pageIndex) || void 0 === e ? void 0 : e.main;
                    return null == t ? -1 : t
                }
            }, {
                key: "getCurrScrollPosition",
                value: function() {
                    return document.documentElement.scrollTop || document.body.scrollTop
                }
            }, {
                key: "getViewportHeight",
                value: function() {
                    return window.innerHeight || document.documentElement.clientHeight
                }
            }, {
                key: "getMaxHeight",
                value: function() {
                    var e = document.body,
                        t = document.documentElement;
                    return Math.max(e.scrollHeight, e.offsetHeight, t.clientHeight, t.scrollHeight, t.offsetHeight)
                }
            }, {
                key: "getPep",
                value: function() {
                    return (this.getCurrScrollPosition() + this.getViewportHeight()) / this.getMaxHeight()
                }
            }]), n
        }(Fu);
    ws = Es([bs(0, A.inject(Sr.CONTEXT)), bs(1, A.inject(Sr.TTQ_REPORTERS)), bs(2, A.inject(Sr.REPORT_SERVICE))], ws);
    var Is = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Ts = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Os = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a) {
                var c;
                return i(this, n), (c = t.call(this, {
                    name: "PageData",
                    reporters: r,
                    context: e
                })).monitors = [], c.ttqOptions = {}, c.reportService = o, c.context = e, c.reporters = r, c.ttqOptions = a, c.isPluginInit = !1, c
            }
            return a(n, [{
                key: "init",
                value: function() {
                    if (this.isPageDataEnabled()) {
                        var e = this.isHitNewVersion();
                        this.interactionMonitor = new Bu(this.context, this.reporters, this.reportService, zi(e ? wr.PAGE_INTERACTION : wr.AUTO_CONFIG)), this.performanceMonitor = new ws(this.context, this.reporters, this.reportService, zi(e ? wr.PAGE_PERFORMANCE : wr.AUTO_CONFIG)), this.monitors.push(this.performanceMonitor), this.monitors.push(this.interactionMonitor)
                    }
                }
            }, {
                key: "isPageDataEnabled",
                value: function() {
                    var e, t;
                    return null === (t = null === (e = this.ttqOptions) || void 0 === e ? void 0 : e.plugins) || void 0 === t ? void 0 : t.PageData
                }
            }, {
                key: "isHitNewVersion",
                value: function() {
                    var e, t;
                    return null === (t = null === (e = this.ttqOptions) || void 0 === e ? void 0 : e.plugins) || void 0 === t ? void 0 : t.HitReservoir
                }
            }, {
                key: "report",
                value: function(e) {
                    var t = this.performanceMonitor,
                        n = this.interactionMonitor,
                        r = this.performanceMonitor.getResult(e),
                        i = this.interactionMonitor.getResult(e),
                        o = this.mergeReportData(e, i, r);
                    t.report(o), n.report(o), this.interactionMonitor.resetAfterReport(), this.performanceMonitor.resetAfterReport()
                }
            }, {
                key: "mergeReportData",
                value: function(e, t, n) {
                    var r = {
                        action_event: e
                    };
                    return r.perf = n.perf, r.inter = t.inter, r.page_perf = n.page_perf, r.page_inter = t.page_inter, r
                }
            }, {
                key: "pageWillLeave",
                value: function(e) {
                    this.report(Lu.PAGE_LEAVE)
                }
            }, {
                key: "pixelDidMount",
                value: function(e) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                            taskName: window.ttq._pf_tn,
                            functionName: "page_plugin_pixelDidMount",
                            start: performance.now()
                        }
                    } catch (e) {}
                    this.isPluginInit || (this.init(), this.isPluginInit = !0);
                    try {
                        window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
                    } catch (e) {}
                }
            }]), n
        }(xo);
    Os = Is([A.injectable(), Ts(0, A.inject(Sr.CONTEXT)), Ts(1, A.inject(Sr.TTQ_REPORTERS)), Ts(2, A.inject(Sr.REPORT_SERVICE)), Ts(3, A.inject(Sr.TTQ_GLOBAL_OPTIONS))], Os);
    var Ss = {
            initAllModule: 1,
            webTtqFactory: 2,
            handleCache: 3,
            webReporterFactory: 4,
            initAutoForm: 5,
            auto_config_plugin_pixelDidMount: 6,
            callback_plugin_pixelDidMount: 7,
            console_plugin_pixelDidMount: 8,
            event_builder_plugin_pixelDidMount: 9,
            shopify_plugin_pixelDidMount: 10,
            page_plugin_pixelDidMount: 11,
            competitor_insight_plugin_init: 12,
            getPixelInstalledPosition: 13,
            getPixelScriptByPixelCode: 14,
            resetExpires: 15,
            freezeAPI: 16,
            handlePixelRules: 17,
            mergeWebGlobalTtq: 18,
            handleGlobalCache: 22,
            getPixelDetail: 19,
            basettq_init_context_info: 20,
            initAutoForm_getOverallFormDetail: 21,
            web_track_handler: 23,
            identify_api_handler: 24
        },
        Ns = {
            identify_api_handler: {
                id: 1,
                fn: []
            },
            identify_encryption: {
                id: 2,
                fn: []
            },
            identify_after_encryption: {
                id: 3,
                fn: []
            },
            track_api_handler: {
                id: 4,
                fn: []
            },
            track_after_reporter_init: {
                id: 5,
                fn: []
            },
            track_after_report_preposition: {
                id: 6,
                fn: []
            },
            init: {
                id: 7,
                fn: [Ss.initAllModule, Ss.webTtqFactory, Ss.handleCache, Ss.webReporterFactory, Ss.initAutoForm, Ss.freezeAPI, Ss.handlePixelRules, Ss.resetExpires, Ss.mergeWebGlobalTtq, Ss.auto_config_plugin_pixelDidMount, Ss.callback_plugin_pixelDidMount, Ss.console_plugin_pixelDidMount, Ss.event_builder_plugin_pixelDidMount, Ss.shopify_plugin_pixelDidMount, Ss.page_plugin_pixelDidMount, Ss.competitor_insight_plugin_init, Ss.getPixelInstalledPosition, Ss.getPixelScriptByPixelCode, Ss.handleGlobalCache, Ss.basettq_init_context_info, Ss.initAutoForm_getOverallFormDetail, Ss.web_track_handler, Ss.identify_api_handler]
            },
            page_api_handler: {
                id: 8,
                fn: []
            },
            auto_advanced_matching_handler: {
                id: 9,
                fn: []
            },
            auto_config_metadata_handler: {
                id: 10,
                fn: []
            },
            auto_config_click_handler: {
                id: 11,
                fn: []
            },
            auto_config_form_handler: {
                id: 12,
                fn: []
            },
            event_builder_dispatcher: {
                id: 13,
                fn: []
            },
            page_data_web_vital_handler: {
                id: 14,
                fn: []
            },
            page_data_base_handler: {
                id: 15,
                fn: []
            }
        },
        As = function() {
            function e() {
                i(this, e), this.queue = [], this.currentTaskMap = {}
            }
            return a(e, [{
                key: "handleCache",
                value: function(e) {
                    var t = this;
                    e.forEach((function(e) {
                        t.push(e)
                    }))
                }
            }, {
                key: "push",
                value: function(e) {
                    var t = e.taskName,
                        n = e.functionName,
                        r = e.start,
                        i = e.end,
                        o = Math.round(1e3 * (i - r)),
                        a = t && this.getTaskIdFromName(t);
                    if (a) {
                        var c = this.currentTaskMap[a];
                        if (c || (this.currentTaskMap[a] = c = {
                                id: a,
                                d: -1
                            }), n) {
                            var u = this.getFunctionIdFromName(n);
                            u && (c.f = [].concat(y(c.f || []), [{
                                id: u,
                                d: o
                            }]))
                        } else c.d = o, this.queue.push(c), delete this.currentTaskMap[a]
                    }
                }
            }, {
                key: "print",
                value: function() {
                    return this.queue
                }
            }, {
                key: "printAndClear",
                value: function() {
                    var e = this.print();
                    return this.clear(), e
                }
            }, {
                key: "clear",
                value: function() {
                    this.queue = []
                }
            }, {
                key: "getTaskIdFromName",
                value: function(e) {
                    var t;
                    return null === (t = Ns[e]) || void 0 === t ? void 0 : t.id
                }
            }, {
                key: "getFunctionIdFromName",
                value: function(e) {
                    return Ss[e]
                }
            }]), e
        }(),
        Rs = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Ps = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Cs = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r) {
                var o;
                return i(this, n), (o = t.call(this, {
                    name: "RuntimeMeasurement",
                    reporters: r,
                    context: e
                })).initialize = !1, o.init(), o
            }
            return a(n, [{
                key: "init",
                value: function() {
                    if (!this.initialize) {
                        this.performanceDataQueue = new As;
                        var e = Xr();
                        e && e._ppf && (this.performanceDataQueue.handleCache(e._ppf), e._ppf = this.performanceDataQueue), this.initialize = !0
                    }
                }
            }]), n
        }(xo);
    Cs = Rs([A.injectable(), Ps(0, A.inject(Sr.CONTEXT)), Ps(1, A.inject(Sr.TTQ_REPORTERS))], Cs);
    var ks, Ms, Ls = [{
            identifier: Sr.CALLBACK_PLUGIN,
            to: Fa,
            name: "Callback"
        }, {
            identifier: Sr.IDENTIFY_PLUGIN,
            to: Xa,
            name: "Identify",
            required: !0
        }, {
            identifier: Sr.WEB_FL_PLUGIN,
            to: $a,
            name: "WebFL"
        }, {
            identifier: Sr.AUTO_CONFIG_PLUGIN,
            to: ru,
            name: "AutoConfig"
        }, {
            identifier: Sr.DIAGNOSTICS_CONSOLE_PLUGIN,
            to: gu,
            name: "DiagnosticsConsole"
        }, {
            identifier: Sr.PANGLE_COOKIE_MATCHING_PLUGIN,
            to: Eu,
            name: "PangleCookieMatching"
        }, {
            identifier: Sr.EVENT_BUILDER_PLUGIN,
            to: Su,
            name: "EventBuilder"
        }, {
            identifier: Sr.ENRICH_IPV6_PLUGIN,
            to: Cu,
            name: "EnrichIpv6"
        }, {
            identifier: Sr.PAGEDATA_PLUGIN,
            to: Os,
            name: "PageData"
        }, {
            identifier: Sr.RUNTIME_MEASUREMENT_PLUGIN,
            to: Cs,
            name: "RuntimeMeasurement"
        }],
        Ds = /^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/,
        xs = function(e) {
            return "function" == typeof Element ? e instanceof Element : e && "object" === t(e) && e.nodeType === Node.ELEMENT_NODE && "string" == typeof e.nodeName
        },
        js = function(e, t) {
            var n = e.matches || e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector || null;
            return !(null === n || !n.call(e, t.join(","))) || e instanceof HTMLButtonElement && !!t.includes("button[type='".concat(e.type, "']"))
        },
        Us = function(e) {
            return e.trim().toLowerCase()
        },
        Fs = function(e, t) {
            return !(!e || !t) && e.indexOf(t) >= 0
        },
        Bs = function(e) {
            return "string" == typeof e && Ds.test(e)
        },
        qs = function(e, t) {
            var n = e.id,
                r = e.name,
                i = e.placeholder,
                o = void 0 === i ? "" : i,
                a = e.value,
                c = void 0 === a ? "" : a;
            return t.filter((function(e) {
                return e.length > 2 ? Fs(r, e) || Fs(n, e) || Fs(o, e) || Fs(c, e) : r === e || n === e || o === e || c === e
            }))
        },
        Gs = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Vs = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Hs = function(e) {
            u(r, e);
            var n = p(r);

            function r(e, t, o) {
                var a;
                return i(this, r), (a = n.call(this, {
                    name: "AutoAdvancedMatching",
                    reporters: t,
                    context: e
                })).rateMS = 1e3, a.lastTime = 0, a.lastElement = null, a.matchHistory = [], a.config = o.aam || {
                    in_form: !0,
                    selectors: {},
                    exclude_selectors: [],
                    phone_regex: "",
                    phone_selectors: [],
                    restricted_keywords: []
                }, a.phoneRegex = a.config.phone_regex ? new RegExp(a.config.phone_regex) : null, a.init(), a
            }
            return a(r, [{
                key: "init",
                value: function() {
                    var e = this;
                    document.addEventListener("click", (function(t) {
                        try {
                            if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                                var n = {
                                    taskName: window.ttq._pf_tn || "auto_advanced_matching_handler",
                                    functionName: window.ttq._pf_tn && "auto_advanced_matching_handler",
                                    start: performance.now()
                                };
                                window.ttq._pf_tn || (window.ttq._pf_tn = "auto_advanced_matching_handler")
                            }
                        } catch (t) {}
                        try {
                            var r = Xr() || [],
                                i = t && t.target && t.target instanceof Node && xs(t.target) ? t.target : null;
                            if (!i) return;
                            if (!e.throttle(i)) return;
                            var o = e.getWrappingButton(i);
                            if (!o) return;
                            var a = e.getFormByButton(o);
                            if (e.config.in_form && !a) return;
                            var c = e.getUserDataByForm(a);
                            if (0 === Object.keys(c).length) return;
                            null == r || r.identify(Object.assign(c || {}, {
                                auto_trigger_type: e.getTriggerType(o, !!a)
                            })), e.matchHistory.push(Object.assign({}, c))
                        } catch (t) {
                            Wi(Nr.CUSTOM_ERROR, {
                                pixelCode: Xi().pixelCode,
                                custom_name: "advancedMatching"
                            })
                        }
                        try {
                            window.ttq && window.ttq._ppf && (n.end = performance.now(), window.ttq._ppf.push(n), "auto_advanced_matching_handler" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                        } catch (t) {}
                    }), {
                        capture: !0,
                        once: !1,
                        passive: !0
                    })
                }
            }, {
                key: "throttle",
                value: function(e) {
                    var t = !1;
                    return (!this.lastElement || !this.lastTime || Date.now() - this.lastTime >= this.rateMS || this.lastElement !== e) && (t = !0), this.lastElement = e, this.lastTime = Date.now(), t
                }
            }, {
                key: "getWrappingButton",
                value: function(e) {
                    if (!e || ! function(e) {
                            if (!e || e === document.body) return !1;
                            if (e.getBoundingClientRect && "function" == typeof e.getBoundingClientRect) {
                                var t = e.getBoundingClientRect().height || e.offsetHeight || 11;
                                return t > 10 && t < 600
                            }
                            return !0
                        }(e)) return null;
                    if ((this.config.exclude_selectors || []).length > 0 && js(e, this.config.exclude_selectors || [])) return null;
                    var t = Object.keys(this.config.selectors || {});
                    if (js(e, t)) return e;
                    var n = e.parentNode;
                    return n && xs(n) ? this.getWrappingButton(n) : null
                }
            }, {
                key: "getFormByButton",
                value: function(e) {
                    if (void 0 !== ("undefined" == typeof HTMLInputElement ? "undefined" : t(HTMLInputElement)) && e instanceof HTMLInputElement) return e.form;
                    for (var n = e;
                        "FORM" !== n.nodeName.toUpperCase();) {
                        var r = n.parentElement;
                        if (!r) return null;
                        n = r
                    }
                    return n
                }
            }, {
                key: "getUserDataByForm",
                value: function(e) {
                    for (var t = {}, n = (e || document).querySelectorAll("input,textarea,select"), r = 0; r < n.length; r++) {
                        var i = n[r];
                        if (i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement) {
                            var o = this.getPIIFieldsByInput(i);
                            o && Object.assign(t, o)
                        }
                    }
                    return t
                }
            }, {
                key: "getPIIFieldsByInput",
                value: function(e) {
                    var t = e.getAttribute("type") || "",
                        n = e.getAttribute("inputmode") || "",
                        r = e.value,
                        i = Us(e.placeholder ? e.placeholder : "").replace(/[_-]/g, ""),
                        o = {
                            id: Us(e.id).replace(/[_-]/g, ""),
                            name: Us(e.name).replace(/[_-]/g, "")
                        };
                    if ("password" === t || !r) return null;
                    var a = qs(o, this.config.restricted_keywords);
                    if (a.length > 0) return Bs(r) && Wi(Nr.CUSTOM_INFO, {
                        custom_name: "aam_hit_restricted",
                        custom_enum: a.join(",")
                    }), null;
                    if (Bs(r)) return {
                        auto_email: Us(r)
                    };
                    var c, u = function(e) {
                        if (!e) return null;
                        for (var t = e.parentElement, n = e, r = ""; n;)(n = n.previousElementSibling) && (n instanceof HTMLInputElement || n instanceof HTMLTextAreaElement) && (r = n.value, n = null);
                        if (!r || "string" != typeof r) return null;
                        if (!t || (t.innerText || t.textContent || "").indexOf("@") < 0) return null;
                        var i = "".concat(r, "@").concat(e.value);
                        return Bs(i) ? i : null
                    }(e);
                    if (u) return {
                        auto_email: Us(u)
                    };
                    if ("US" === ((Xr() || [])._cc || "").toUpperCase() && (c = r, c.replace(/\D/g, "")).length < 10) return null;
                    var s = !(this.config.phone_selectors.length > 0) || ("tel" === t || "tel" === n || qs(Object.assign(o, {
                            placeholder: i
                        }), this.config.phone_selectors).length > 0),
                        l = !this.phoneRegex || this.phoneRegex.test(r);
                    return s && l ? {
                        auto_phone_number: r
                    } : null
                }
            }, {
                key: "getTriggerType",
                value: function(e, t) {
                    var n = this;
                    try {
                        var r = [];
                        return Object.keys(this.config.selectors).forEach((function(t) {
                            js(e, [t]) && r.push(n.config.selectors[t])
                        })), 0 === r.length ? "" : "".concat(r.join(","), "-").concat(t ? 1 : 0)
                    } catch (e) {
                        return ""
                    }
                }
            }]), r
        }(xo);
    Hs = Gs([A.injectable(), Vs(0, A.inject(Sr.CONTEXT)), Vs(1, A.inject(Sr.TTQ_REPORTERS)), Vs(2, A.inject(Sr.TTQ_GLOBAL_OPTIONS))], Hs);
    var Js = function(e, t) {
            ks = t, (Ms = e).isBound(Sr.AUTO_ADVANCED_MATCHING_PLUGIN) || Ms.bind(Sr.AUTO_ADVANCED_MATCHING_PLUGIN).to(Hs).inSingletonScope(),
                function(e, t) {
                    return !(!ks._mounted || ks.getPlugin(t) || !Ms.isBound(e))
                }(Sr.AUTO_ADVANCED_MATCHING_PLUGIN, "AutoAdvancedMatching") && ks.usePlugin(Ms.get(Sr.AUTO_ADVANCED_MATCHING_PLUGIN))
        },
        Ws = function(e, t) {
            return Ws = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
            }, Ws(e, t)
        };

    function Ks(e, t) {
        function n() {
            this.constructor = e
        }
        Ws(e, t), e.prototype = null === t ? Object._ttq_create(t) : (n.prototype = t.prototype, new n)
    }
    var Ys, Xs = function() {
        return Xs = Object.assign || function(e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
                for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
            return e
        }, Xs.apply(this, arguments)
    };
    ! function(e) {
        e[e.Failure = 0] = "Failure", e[e.Success = 1] = "Success", e[e.Unauthorized = -1] = "Unauthorized", e[e.NotExist = -2] = "NotExist"
    }(Ys || (Ys = {}));
    var zs = function() {
            function e(e) {
                this.version = e.version || "2.0.2", this.nativeMethodInvoker = e.nativeMethodInvoker, this.nativeEventListener = e.nativeEventListener, this.scheme = e.scheme || "nativeapp://", this.dispatchMessagePath = e.dispatchMessagePath || "dispatch_message/", this.setResultPath = e.setResultPath || "private/setresult/SCENE_FETCHQUEUE", this.dispatchMessageIFrameId = e.dispatchMessageIFrameId || "__JSBridgeIframe__", this.setResultIFrameId = e.setResultIFrameId || "__JSBridgeIframe_SetResult__", this.listenNativeEvent = !0 === e.listenNativeEvent, this.callbackId = 1023, this.callbackMap = {}, this.eventMap = {}, this.javascriptMessageQueue = [], this.callbackProcessor = e.callbackProcessor
            }
            return e.prototype.call = function(e, t, n, r) {
                void 0 === r && (r = this.version);
                var i, o = this.version;
                if (e && "string" == typeof e) {
                    "object" != typeof t && (t = {}), "string" == typeof r ? o = r || this.version : "object" == typeof r && (i = r.namespace, o = r.sdkVersion || this.version);
                    var a = {
                        func: e,
                        params: t,
                        JSSDK: o,
                        __msg_type: "call",
                        namespace: i
                    };
                    if ("function" == typeof n || void 0 === n) {
                        var c = this.registerCallback(e, n);
                        a.__callback_id = c
                    }
                    "undefined" == typeof __PIA_WORKER__ && window.parent !== window && (a.__iframe_url = window.location.href), this.sendMessageToNative(a)
                }
            }, e.prototype.on = function(e, t, n) {
                if (void 0 === n && (n = !1), e && "string" == typeof e && "function" == typeof t) {
                    var r = this.registerCallback(e, t);
                    return this.eventMap[e] = this.eventMap[e] || {}, this.eventMap[e][r] = {
                        once: n
                    }, this.listenNativeEvent && (this.nativeEventListener ? this.nativeEventListener(e) : this.call("addEventListener", {
                        name: e
                    }, null, {
                        sdkVersion: 1
                    })), r
                }
            }, e.prototype.once = function(e, t) {
                return this.on(e, t, !0)
            }, e.prototype.off = function(e, t) {
                if (!e || "string" != typeof e) return !0;
                var n = this.eventMap[e];
                return !n || "object" != typeof n || !n.hasOwnProperty(t) || (this.deregisterCallback(t), delete n[t], !0)
            }, e.prototype.trigger = function(e, t) {
                return this.handleMessageFromNative({
                    __msg_type: "event",
                    __params: t,
                    __event_id: e
                })
            }, e.prototype.handleMessageFromNative = function(e) {
                var t = this,
                    n = e,
                    r = String(n.__callback_id);
                if (this.callbackProcessor && "function" == typeof this.callbackProcessor) {
                    var i = (this.callbackMap && this.callbackMap[r] || {}).method;
                    this.callbackProcessor(n, i)
                }
                var o = n.__params,
                    a = String(n.__event_id || ""),
                    c = n.__msg_type;
                this.callbackMap[r] ? c = "callback" : this.eventMap[r] && (c = "event", a = a || r);
                var u = {
                    __err_code: "cb404"
                };
                switch (c) {
                    case "callback":
                        var s = (this.callbackMap && this.callbackMap[r] || {}).callback;
                        "function" == typeof s && (u = s(o)), this.deregisterCallback(r);
                        break;
                    case "event":
                        var l = this.eventMap[a];
                        l && "object" == typeof l && Object.keys(l).forEach((function(e) {
                            var n = (t.callbackMap && t.callbackMap[e] || {}).callback,
                                r = l[e];
                            "function" == typeof n && (u = n(o)), r && r.once && (t.deregisterCallback(e), delete l[e])
                        }))
                }
                return u
            }, e.prototype.fetchJavaScriptMessageQueue = function() {
                var e = JSON.stringify(this.javascriptMessageQueue),
                    t = btoa(unescape(encodeURIComponent(e)));
                return this.setResultIFrame && this.javascriptMessageQueue.length > 0 && (this.setResultIFrame.src = "" + this.scheme + this.setResultPath + "&" + t), this.javascriptMessageQueue.splice(0, this.javascriptMessageQueue.length), e
            }, e.prototype.sendMessageToNative = function(e) {
                if ("1" !== String(e.JSSDK) && this.nativeMethodInvoker) {
                    var t = this.nativeMethodInvoker(e);
                    if (t) {
                        var n = JSON.parse(t);
                        this.handleMessageFromNative(n)
                    }
                } else this.javascriptMessageQueue.push(e), this.dispatchMessageIFrame || this.tryCreateIFrames(), this.dispatchMessageIFrame.src = "" + this.scheme + this.dispatchMessagePath
            }, e.prototype.registerCallback = function(e, t) {
                var n = String(this.callbackId++);
                return this.callbackMap[n] = {
                    method: e,
                    callback: t
                }, n
            }, e.prototype.deregisterCallback = function(e) {
                delete this.callbackMap[e]
            }, e.prototype.tryCreateIFrames = function() {
                this.dispatchMessageIFrame = this.createIFrame(this.dispatchMessageIFrameId), this.setResultIFrame = this.createIFrame(this.setResultIFrameId)
            }, e.prototype.createIFrame = function(e) {
                var t = document.getElementById(e);
                return t && "IFRAME" === t.tagName || ((t = document.createElement("iframe")).style.display = "none", t.id = e, document.documentElement.appendChild(t)), t
            }, e
        }(),
        Qs = "2.2.15",
        Zs = "undefined" != typeof __PIA_WORKER__ ? new Function("return this")() : "undefined" != typeof window ? window : {},
        $s = void 0 !== Zs && Zs.navigator ? Zs.navigator.userAgent : "",
        el = (!!$s.match(/(newsarticle|videoarticle|lv|faceu|ulike|beauty_me_|faceu-os|ulike-os|beauty_me_oversea_|retouch)\/([\d.]+)/i) || /super|automobile/gi.test($s)) && !/webcast/gi.test($s) && !/luckycatversion/gi.test($s),
        tl = !!$s.match(/(faceu)\/([\d.]+)/i) || /gsdk/gi.test($s) || /PIANativeWorker/gi.test($s),
        nl = !!$s.match(/ttad\/0/i),
        rl = !!$s.match(/aweme|trill|musical_ly|phoenix_\d+|TikTokNow_\d+/i),
        il = !!$s.match(/live_stream/i),
        ol = !!$s.match(/Webcast/i),
        al = !!$s.match(/super/i),
        cl = !!$s.match(/life_service_merchant/i),
        ul = /super/gi.test($s);

    function sl() {
        var e;
        if (el) return Zs.JSBridge && Zs.JSBridge.on ? e = Zs.JSBridge.on : Zs.JS2NativeBridge && Zs.JS2NativeBridge.on ? e = function(e) {
            var t = {
                JSSDK: Qs,
                __msg_type: "event",
                __callback_id: e,
                func: e
            };
            Zs.JS2NativeBridge.on(e, JSON.stringify(t))
        } : Zs.webkit && Zs.webkit.messageHandlers && Zs.webkit.messageHandlers.onMethodParams ? e = function(e) {
            var t = {
                JSSDK: Qs,
                __msg_type: "event",
                __callback_id: e,
                func: e
            };
            Zs.webkit.messageHandlers.onMethodParams.postMessage(t)
        } : Zs.onMethodParams && (e = function(e) {
            var t = {
                JSSDK: Qs,
                __msg_type: "event",
                __callback_id: e,
                func: e
            };
            return Zs.onMethodParams(e, t)
        }), e
    }

    function ll(e, t) {
        if (("string" != typeof t || !0 !== /^(x|tc)\./.test(t)) && (rl || il || ol || cl)) {
            var n = e.__params;
            Zs.JS2NativeBridge && Zs.JS2NativeBridge._invokeMethod && (e.__params = Xs({
                code: n.code
            }, n.data))
        }
    }
    var fl = function(e) {
            function t() {
                var t = e.call(this, {
                    version: Qs,
                    scheme: "bytedance://",
                    listenNativeEvent: !0,
                    dispatchMessageIFrameId: "__JSBridgeIframe_1.0__",
                    setResultIFrameId: "__JSBridgeIframe_SetResult_1.0__",
                    nativeEventListener: sl(),
                    callbackProcessor: ll
                }) || this;
                return t.publicApi = {
                    call: t.call.bind(t),
                    on: t.on.bind(t),
                    once: t.once.bind(t),
                    off: t.off.bind(t),
                    trigger: t.trigger.bind(t),
                    _fetchQueue: t.fetchJavaScriptMessageQueue.bind(t),
                    _handleMessageFromToutiao: t.handleMessageFromNative.bind(t)
                }, t
            }
            return Ks(t, e), t.prototype.exposePublicApiToGlobal = function() {
                Zs.ToutiaoJSBridge = Object.assign(Zs.ToutiaoJSBridge || {}, this.publicApi)
            }, t
        }(zs),
        dl = function(e) {
            function t(t) {
                var n, r = e.call(this, {
                    version: Qs,
                    nativeMethodInvoker: (Zs.JS2NativeBridge && Zs.JS2NativeBridge._invokeMethod ? n = function(e) {
                        return Zs.JS2NativeBridge._invokeMethod(JSON.stringify(e))
                    } : Zs.ToutiaoJSBridge && Zs.ToutiaoJSBridge.invokeMethod ? n = function(e) {
                        return Zs.ToutiaoJSBridge.invokeMethod(JSON.stringify(e))
                    } : Zs.JS2NativeBridge && Zs.JS2NativeBridge.call ? n = function(e) {
                        return Zs.JS2NativeBridge.call(e.func, JSON.stringify(e))
                    } : Zs.webkit && Zs.webkit.messageHandlers && Zs.webkit.messageHandlers.callMethodParams ? n = function(e) {
                        Zs.webkit.messageHandlers.callMethodParams.postMessage(e)
                    } : Zs.callMethodParams && (n = function(e) {
                        return Zs.callMethodParams(e.func, e)
                    }), n),
                    nativeEventListener: sl(),
                    scheme: al ? "bds://" : ul ? "bytedance://" : el || Zs.JSBridge && Zs.JSBridge._invokeMethod ? "nativeapp://" : "bytedance://",
                    listenNativeEvent: el,
                    callbackProcessor: ll
                }) || this;
                return r.toutiaoLegacyJSB = t, r.publicApi = {
                    call: r.call.bind(r),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    trigger: r.trigger.bind(r),
                    _fetchQueue: r.fetchJavaScriptMessageQueue.bind(r),
                    _handleMessageFromApp: r.handleMessageFromNative.bind(r),
                    _handleMessageFromToutiao: r.handleMessageFromNative.bind(r)
                }, r
            }
            return Ks(t, e), t.prototype.call = function(t, n, r, i) {
                void 0 === i && (i = Qs), this.isLegacyCall(t) ? this.toutiaoLegacyJSB.call(t, n, r, i) : e.prototype.call.call(this, t, n, r, i)
            }, t.prototype.on = function(t, n, r, i) {
                return void 0 === r && (r = !1), (i || {}).useLegacy || this.isLegacyCall(t) ? this.toutiaoLegacyJSB.on(t, n, r) : e.prototype.on.call(this, t, n, r)
            }, t.prototype.once = function(t, n) {
                return this.isLegacyCall(t) ? this.toutiaoLegacyJSB.once(t, n) : e.prototype.once.call(this, t, n)
            }, t.prototype.off = function(t, n) {
                return this.isLegacyCall(t) ? this.toutiaoLegacyJSB.off(t, n) : e.prototype.off.call(this, t, n)
            }, t.prototype.trigger = function(t, n) {
                return this.isLegacyCall(t) ? this.toutiaoLegacyJSB.trigger(t, n) : e.prototype.trigger.call(this, t, n)
            }, t.prototype.exposePublicApiToGlobal = function() {
                var e = this;
                Zs.JSBridge = Object.assign(Zs.JSBridge || {}, this.publicApi), Zs.__DISABLE_JSB_PROTOCAL2__ || (Zs.Native2JSBridge = Object.assign(Zs.Native2JSBridge || {}, this.publicApi)), ul ? Zs.ToutiaoJSBridge = Object.assign(Zs.ToutiaoJSBridge || {}, this.publicApi) : (el || nl) && this.toutiaoLegacyJSB ? this.toutiaoLegacyJSB.exposePublicApiToGlobal() : Zs.ToutiaoJSBridge = Object.assign(Zs.ToutiaoJSBridge || {}, this.publicApi), Zs.parent !== Zs && Zs.addEventListener && Zs.addEventListener("message", (function(t) {
                    t && t.data && t.data.__callback_id && e.handleMessageFromNative(t.data)
                }), !1), Object.defineProperties(Zs, {
                    JSBridge: {
                        writable: !1
                    },
                    Native2JSBridge: {
                        writable: !1
                    },
                    ToutiaoJSBridge: {
                        writable: !1
                    }
                }), Object.freeze(Zs.JSBridge), Object.freeze(Zs.Native2JSBridge), Object.freeze(Zs.ToutiaoJSBridge)
            }, t.prototype.isLegacyCall = function(e) {
                return !(!e || "string" != typeof e || !this.toutiaoLegacyJSB) && (!!nl || !tl && !ul && (el && e.indexOf(".") < 0))
            }, t
        }(zs);

    function pl(e, t) {
        if (null == e) throw new TypeError("Cannot convert first argument to object");
        for (var n = Object(e), r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            if (null != i)
                for (var o = Object.keys(Object(i)), a = 0, c = o.length; a < c; a++) {
                    var u = o[a],
                        s = Object.getOwnPropertyDescriptor(i, u);
                    void 0 !== s && s.enumerable && (n[u] = i[u])
                }
        }
        return n
    }({
        assign: pl,
        polyfill: function() {
            Object.assign || Object.defineProperty(Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: pl
            })
        }
    }).polyfill();
    var hl = new dl(new fl);
    try {
        hl.exposePublicApiToGlobal()
    } catch (Ki) {}
    var _l = hl.publicApi;
    globalThis.window && (window.CustomEvent || function() {
        var e = function(e, t) {
            var n;
            return t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            }, (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
        };
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }());
    var vl, gl = function(e) {
            var n, r, i;
            return r = function(e) {
                var t = document.createElement("iframe");
                t.style.display = "none", t.src = e, document.body.appendChild(t), setTimeout((function() {
                    document.body.removeChild(t)
                }), 100)
            }, n = window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.pacific ? function(e, t) {
                i = {
                    action: e,
                    parameters: (t = t || {}).params,
                    print: !!t.print
                }, "string" == typeof t.callback ? i.callback = {
                    type: 0,
                    name: t.callback,
                    parameters: ["key"]
                } : i.callback = t.callback, window.webkit.messageHandlers.pacific.postMessage(i)
            } : function(n, i) {
                var o, a, c, u = [];
                if (o = ((i = i || {}).protocol || "sslocal") + "://" + n, i.callback && (i.params = i.params || {}, i.params.callback = i.callback), i.params) {
                    for (a in c = i.params)
                        if (c.hasOwnProperty(a)) {
                            var s = c[a];
                            "object" == t(s) && (s = JSON.stringify(s)), u.push(encodeURIComponent(a) + "=" + encodeURIComponent(s))
                        }
                    u.push("r=" + (Math.random() + "").slice(2)), o += "?" + u.join("&")
                }
                e ? (i.debugCall && i.debugCall(n, i.params), (console.dir || console.log)(o)) : r(o)
            }, {
                call: function(t, r, i) {
                    var o = r = r || {};
                    if (i && "function" == typeof i) {
                        var a = t + "DidFinish" + (e ? "" : "_" + Math.random().toString(36).slice(2));
                        document.addEventListener(a, (function e(t) {
                            "success" === t.detail.message && i(t.detail.data), document.removeEventListener(a, e)
                        }))
                    }
                    n(t, {
                        callback: a,
                        params: o
                    })
                }
            }
        }(!!window.globalConfig && window.globalConfig.isDebug),
        yl = gl,
        ml = "HistoryObserver";
    ! function(e) {
        e.DYNAMIC_WEB_PAGEVIEW = "dynamic_web_pageview"
    }(vl || (vl = {}));
    var El = ["GoogleTagManagerClient", "GoogleTagManagerServer"];

    function bl(e, t) {
        var n = history[e];
        return function() {
            var e = Array.prototype.slice.call(arguments);
            n.apply(history, e), t()
        }
    }

    function wl(e) {
        var t = e.options,
            n = e.plugins;
        return t && !1 !== t.historyObserver && n && n[ml]
    }

    function Il(e, t) {
        var n = Oi().url,
            r = e.context.getPageInfo().url;
        if (n !== r) {
            var i, o = e.context.setPageInfo(n, r);
            o && o.pageIndex && ro(o.pageIndex), e.reporters.filter((i = vl.DYNAMIC_WEB_PAGEVIEW, function(e) {
                var t = e.plugins;
                return !!(wl(e) && t[ml] && t[ml][i])
            })).forEach((function(e) {
                setTimeout((function() {
                    e.page(t)
                }))
            }))
        }
    }
    var Tl = function(e, n, r, i) {
            var o, a = arguments.length,
                c = a < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, r) : i;
            if ("object" === ("undefined" == typeof Reflect ? "undefined" : t(Reflect)) && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, n, r, i);
            else
                for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (c = (a < 3 ? o(c) : a > 3 ? o(n, r, c) : o(n, r)) || c);
            return a > 3 && c && Object.defineProperty(n, r, c), c
        },
        Ol = function(e, t) {
            return function(n, r) {
                t(n, r, e)
            }
        },
        Sl = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r) {
                var o;
                return i(this, n), (o = t.call(this, {
                    name: ml,
                    reporters: r,
                    context: e
                })).enableListenSPAHistoryChange = !1, o.listenSPAHistoryChange = ci((function() {
                    var e, t = function() {
                            o.enableListenSPAHistoryChange && o.notifyObservers({
                                tf: mr.HISTORY_CHANGE
                            })
                        },
                        n = (e = t, function() {
                            setTimeout(e)
                        });
                    window.addEventListener("popstate", n), history.pushState = bl("pushState", t), history.replaceState = bl("replaceState", t)
                })), o.dynamicWebPageviewHandler = Il.bind(null, f(o)), o
            }
            return a(n, [{
                key: "initListener",
                value: function(e) {
                    this.enableListenSPAHistoryChange = function(e) {
                        if (!e) return !1;
                        var t = $r(),
                            n = e.getReporterPartner();
                        return !(t && !El.includes(t) || n && e.isPartnerReporter() && !El.includes(n))
                    }(e), this.enableListenSPAHistoryChange && this.listenSPAHistoryChange()
                }
            }, {
                key: "pixelSend",
                value: function(e, t) {
                    var n = this.reporters.find((function(t) {
                        return t.getReporterId() === e
                    }));
                    n && wl(n) && (t && "pageview" === t.toLowerCase() && this.addObserver(this.dynamicWebPageviewHandler), this.initListener(n))
                }
            }, {
                key: "pageUrlWillChange",
                value: function() {
                    this.enableListenSPAHistoryChange ? this.notifyObservers({
                        tf: mr.HISTORY_CHANGE
                    }) : this.notifyObservers({
                        tf: mr.URL_CHANGE,
                        event_experiment: "pageview"
                    })
                }
            }]), n
        }(Go);
    Sl = Tl([A.injectable(), Ol(0, A.inject(Sr.CONTEXT)), Ol(1, A.inject(Sr.TTQ_REPORTERS))], Sl);
    var Nl = [{
            identifier: Sr.HISTORY_OBSERVER,
            to: Sl,
            name: "HistoryObserver"
        }],
        Al = Xr(),
        Rl = (null == Al ? void 0 : Al._container) || new A.Container,
        Pl = (null == Al ? void 0 : Al._container) ? Vo.REBIND : Vo.BIND;
    Si();
    var Cl = Rl[Pl](Sr.ENV),
        kl = Rl[Pl](Ir.SignalType);
    Rl[Pl](Ir.ID), Rl[Pl](Ir.Type), Rl[Pl](Ir.Options), Rl[Pl](Ir.Plugins), Rl[Pl](Ir.Rules), Rl[Pl](Ir.Info);
    var Ml = Rl[Pl](Ir.WebLibraryInfo),
        Ll = Rl[Pl](Sr.TTQ_GLOBAL_OPTIONS);
    try {
        if (!Rl.get(Sr.TTQ_GLOBAL_OPTIONS)) throw new Error("")
    } catch (e) {
        Ll.toConstantValue({})
    }
    var Dl = function(e, t) {
            var n = function(e) {
                    return {
                        name: "pixel.js",
                        version: "2.2.0",
                        options: e
                    }
                }(),
                r = Ni();
            Ml.toConstantValue(n), Cl.toConstantValue(t), kl.toConstantValue(r), !e || e._mounted || Rl.isBound(Sr.JS_BRIDGE) || Ai(t) && (Ri(t) ? Rl.bind(Sr.JS_BRIDGE).toConstantValue(function() {
                if (window && window.ToutiaoJSBridge && window.ToutiaoJSBridge.call) return window.ToutiaoJSBridge
            }() || _l) : Rl.bind(Sr.JS_BRIDGE).toConstantValue(yl))
        },
        xl = function(e) {
            (null == e ? void 0 : e._container) || (Rl.bind(Sr.TTQ).to(ua).inSingletonScope(), Rl.bind(Sr.CONTEXT).to(fa).inSingletonScope(), Rl.bind(Sr.REPORTER).to(ra), Rl.bind(Sr.TTQ_REPORTERS).toConstantValue([]), Rl.bind(Sr.REPORT_SERVICE).to(Ma).inSingletonScope(), Rl.bind(Sr.AD_SERVICE).to(ha).inSingletonScope(), Rl.bind(Sr.APP_SERVICE).to(ga).inSingletonScope(), Rl.bind(Sr.BRIDGE_SERVICE).to(Ta).inSingletonScope(), Rl.bind(Sr.HTTP_SERVICE).to(Pa).inSingletonScope(), Rl.bind(Ir.IsOnsitePage).toConstantValue({
                value: !1
            }), Rl.bind(Sr.COOKIE_SERVICE).to(xa).inSingletonScope(), Rl.bind(Sr.CONSENT_SERVICE).to(Na).inSingletonScope()), e && !e._container && (e._container = Rl)
        },
        jl = function() {
            Ls.forEach((function(e) {
                var t = e.to,
                    n = e.name,
                    r = void 0 === n ? "" : n,
                    i = e.required,
                    o = void 0 !== i && i,
                    a = e.identifier;
                !o && !ti(r) || Rl.isBound(a) || Rl.bind(a).to(t).inSingletonScope()
            }))
        },
        Ul = function() {
            Nl.forEach((function(e) {
                var t = e.to,
                    n = e.name,
                    r = void 0 === n ? "" : n,
                    i = e.identifier;
                ti(r) && !Rl.isBound(i) && Rl.bind(i).to(t).inSingletonScope()
            }))
        },
        Fl = function(e) {
            return e && e.Math == Math && e
        },
        Bl = Fl("object" == typeof globalThis && globalThis) || Fl("object" == typeof window && window) || Fl("object" == typeof self && self) || Fl("object" == typeof S && S) || Function("return this")(),
        ql = {},
        Gl = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        Vl = !Gl((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        Hl = {},
        Jl = {}.propertyIsEnumerable,
        Wl = Object.getOwnPropertyDescriptor,
        Kl = Wl && !Jl.call({
            1: 2
        }, 1);
    Hl.f = Kl ? function(e) {
        var t = Wl(this, e);
        return !!t && t.enumerable
    } : Jl;
    var Yl = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        Xl = {}.toString,
        zl = function(e) {
            return Xl.call(e).slice(8, -1)
        },
        Ql = zl,
        Zl = "".split,
        $l = Gl((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(e) {
            return "String" == Ql(e) ? Zl.call(e, "") : Object(e)
        } : Object,
        ef = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        },
        tf = $l,
        nf = ef,
        rf = function(e) {
            return tf(nf(e))
        },
        of = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        },
        af = of ,
        cf = function(e, t) {
            if (!af(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !af(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !af(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !af(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        },
        uf = {}.hasOwnProperty,
        sf = function(e, t) {
            return uf.call(e, t)
        },
        lf = of ,
        ff = Bl.document,
        df = lf(ff) && lf(ff.createElement),
        pf = function(e) {
            return df ? ff.createElement(e) : {}
        },
        hf = pf,
        _f = !Vl && !Gl((function() {
            return 7 != Object.defineProperty(hf("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        vf = Vl,
        gf = Hl,
        yf = Yl,
        mf = rf,
        Ef = cf,
        bf = sf,
        wf = _f,
        If = Object.getOwnPropertyDescriptor;
    ql.f = vf ? If : function(e, t) {
        if (e = mf(e), t = Ef(t, !0), wf) try {
            return If(e, t)
        } catch (e) {}
        if (bf(e, t)) return yf(!gf.f.call(e, t), e[t])
    };
    var Tf = {},
        Of = of ,
        Sf = function(e) {
            if (!Of(e)) throw TypeError(String(e) + " is not an object");
            return e
        },
        Nf = Vl,
        Af = _f,
        Rf = Sf,
        Pf = cf,
        Cf = Object.defineProperty;
    Tf.f = Nf ? Cf : function(e, t, n) {
        if (Rf(e), t = Pf(t, !0), Rf(n), Af) try {
            return Cf(e, t, n)
        } catch (e) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (e[t] = n.value), e
    };
    var kf = Tf,
        Mf = Yl,
        Lf = Vl ? function(e, t, n) {
            return kf.f(e, t, Mf(1, n))
        } : function(e, t, n) {
            return e[t] = n, e
        },
        Df = {
            exports: {}
        },
        xf = Bl,
        jf = Lf,
        Uf = function(e, t) {
            try {
                jf(xf, e, t)
            } catch (n) {
                xf[e] = t
            }
            return t
        },
        Ff = Uf,
        Bf = "__core-js_shared__",
        qf = Bl[Bf] || Ff(Bf, {}),
        Gf = qf,
        Vf = Function.toString;
    "function" != typeof Gf.inspectSource && (Gf.inspectSource = function(e) {
        return Vf.call(e)
    });
    var Hf = Gf.inspectSource,
        Jf = Hf,
        Wf = Bl.WeakMap,
        Kf = "function" == typeof Wf && /native code/.test(Jf(Wf)),
        Yf = {
            exports: {}
        },
        Xf = qf;
    (Yf.exports = function(e, t) {
        return Xf[e] || (Xf[e] = void 0 !== t ? t : {})
    })("versions", []).push({
        version: "3.6.4",
        mode: "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    });
    var zf, Qf, Zf, $f = 0,
        ed = Math.random(),
        td = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++$f + ed).toString(36)
        },
        nd = Yf.exports,
        rd = td,
        id = nd("keys"),
        od = function(e) {
            return id[e] || (id[e] = rd(e))
        },
        ad = {},
        cd = Kf,
        ud = of ,
        sd = Lf,
        ld = sf,
        fd = od,
        dd = ad,
        pd = Bl.WeakMap;
    if (cd) {
        var hd = new pd,
            _d = hd.get,
            vd = hd.has,
            gd = hd.set;
        zf = function(e, t) {
            return gd.call(hd, e, t), t
        }, Qf = function(e) {
            return _d.call(hd, e) || {}
        }, Zf = function(e) {
            return vd.call(hd, e)
        }
    } else {
        var yd = fd("state");
        dd[yd] = !0, zf = function(e, t) {
            return sd(e, yd, t), t
        }, Qf = function(e) {
            return ld(e, yd) ? e[yd] : {}
        }, Zf = function(e) {
            return ld(e, yd)
        }
    }
    var md = {
            set: zf,
            get: Qf,
            has: Zf,
            enforce: function(e) {
                return Zf(e) ? Qf(e) : zf(e, {})
            },
            getterFor: function(e) {
                return function(t) {
                    var n;
                    if (!ud(t) || (n = Qf(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        },
        Ed = Bl,
        bd = Lf,
        wd = sf,
        Id = Uf,
        Td = Hf,
        Od = md.get,
        Sd = md.enforce,
        Nd = String(String).split("String");
    (Df.exports = function(e, t, n, r) {
        var i = !!r && !!r.unsafe,
            o = !!r && !!r.enumerable,
            a = !!r && !!r.noTargetGet;
        "function" == typeof n && ("string" != typeof t || wd(n, "name") || bd(n, "name", t), Sd(n).source = Nd.join("string" == typeof t ? t : "")), e !== Ed ? (i ? !a && e[t] && (o = !0) : delete e[t], o ? e[t] = n : bd(e, t, n)) : o ? e[t] = n : Id(t, n)
    })(Function.prototype, "toString", (function() {
        return "function" == typeof this && Od(this).source || Td(this)
    }));
    var Ad = Bl,
        Rd = Ad,
        Pd = Bl,
        Cd = function(e) {
            return "function" == typeof e ? e : void 0
        },
        kd = function(e, t) {
            return arguments.length < 2 ? Cd(Rd[e]) || Cd(Pd[e]) : Rd[e] && Rd[e][t] || Pd[e] && Pd[e][t]
        },
        Md = {},
        Ld = Math.ceil,
        Dd = Math.floor,
        xd = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? Dd : Ld)(e)
        },
        jd = xd,
        Ud = Math.min,
        Fd = function(e) {
            return e > 0 ? Ud(jd(e), 9007199254740991) : 0
        },
        Bd = xd,
        qd = Math.max,
        Gd = Math.min,
        Vd = rf,
        Hd = Fd,
        Jd = function(e, t) {
            var n = Bd(e);
            return n < 0 ? qd(n + t, 0) : Gd(n, t)
        },
        Wd = function(e) {
            return function(t, n, r) {
                var i, o = Vd(t),
                    a = Hd(o.length),
                    c = Jd(r, a);
                if (e && n != n) {
                    for (; a > c;)
                        if ((i = o[c++]) != i) return !0
                } else
                    for (; a > c; c++)
                        if ((e || c in o) && o[c] === n) return e || c || 0;
                return !e && -1
            }
        },
        Kd = {
            includes: Wd(!0),
            indexOf: Wd(!1)
        },
        Yd = sf,
        Xd = rf,
        zd = Kd.indexOf,
        Qd = ad,
        Zd = function(e, t) {
            var n, r = Xd(e),
                i = 0,
                o = [];
            for (n in r) !Yd(Qd, n) && Yd(r, n) && o.push(n);
            for (; t.length > i;) Yd(r, n = t[i++]) && (~zd(o, n) || o.push(n));
            return o
        },
        $d = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        ep = Zd,
        tp = $d.concat("length", "prototype");
    Md.f = Object.getOwnPropertyNames || function(e) {
        return ep(e, tp)
    };
    var np = {};
    np.f = Object.getOwnPropertySymbols;
    var rp, ip = Md,
        op = np,
        ap = Sf,
        cp = kd("Reflect", "ownKeys") || function(e) {
            var t = ip.f(ap(e)),
                n = op.f;
            return n ? t.concat(n(e)) : t
        },
        up = sf,
        sp = cp,
        lp = ql,
        fp = Tf,
        dp = Gl,
        pp = /#|\.prototype\./,
        hp = function(e, t) {
            var n = vp[_p(e)];
            return n == yp || n != gp && ("function" == typeof t ? dp(t) : !!t)
        },
        _p = hp.normalize = function(e) {
            return String(e).replace(pp, ".").toLowerCase()
        },
        vp = hp.data = {},
        gp = hp.NATIVE = "N",
        yp = hp.POLYFILL = "P",
        mp = hp,
        Ep = Bl,
        bp = ql.f,
        wp = Lf,
        Ip = Df.exports,
        Tp = Uf,
        Op = function(e, t) {
            for (var n = sp(t), r = fp.f, i = lp.f, o = 0; o < n.length; o++) {
                var a = n[o];
                up(e, a) || r(e, a, i(t, a))
            }
        },
        Sp = mp,
        Np = function(e, t) {
            var n, r, i, o, a, c = e.target,
                u = e.global,
                s = e.stat;
            if (n = u ? Ep : s ? Ep[c] || Tp(c, {}) : (Ep[c] || {}).prototype)
                for (r in t) {
                    if (o = t[r], i = e.noTargetGet ? (a = bp(n, r)) && a.value : n[r], !Sp(u ? r : c + (s ? "." : "#") + r, e.forced) && void 0 !== i) {
                        if (typeof o == typeof i) continue;
                        Op(o, i)
                    }(e.sham || i && i.sham) && wp(o, "sham", !0), Ip(n, r, o, e)
                }
        },
        Ap = Gl,
        Rp = !!Object.getOwnPropertySymbols && !Ap((function() {
            return !String(Symbol())
        })),
        Pp = Rp && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Cp = zl,
        kp = Array.isArray || function(e) {
            return "Array" == Cp(e)
        },
        Mp = ef,
        Lp = function(e) {
            return Object(Mp(e))
        },
        Dp = Zd,
        xp = $d,
        jp = Object.keys || function(e) {
            return Dp(e, xp)
        },
        Up = Tf,
        Fp = Sf,
        Bp = jp,
        qp = Vl ? Object.defineProperties : function(e, t) {
            Fp(e);
            for (var n, r = Bp(t), i = r.length, o = 0; i > o;) Up.f(e, n = r[o++], t[n]);
            return e
        },
        Gp = kd("document", "documentElement"),
        Vp = Sf,
        Hp = qp,
        Jp = $d,
        Wp = ad,
        Kp = Gp,
        Yp = pf,
        Xp = od("IE_PROTO"),
        zp = function() {},
        Qp = function(e) {
            return "<script>" + e + "</" + "script>"
        },
        Zp = function() {
            try {
                rp = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, t;
            Zp = rp ? function(e) {
                e.write(Qp("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }(rp) : ((t = Yp("iframe")).style.display = "none", Kp.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(Qp("document.F=Object")), e.close(), e.F);
            for (var n = Jp.length; n--;) delete Zp.prototype[Jp[n]];
            return Zp()
        };
    Wp[Xp] = !0;
    var $p = Object.create || function(e, t) {
            var n;
            return null !== e ? (zp.prototype = Vp(e), n = new zp, zp.prototype = null, n[Xp] = e) : n = Zp(), void 0 === t ? n : Hp(n, t)
        },
        eh = {},
        th = rf,
        nh = Md.f,
        rh = {}.toString,
        ih = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    eh.f = function(e) {
        return ih && "[object Window]" == rh.call(e) ? function(e) {
            try {
                return nh(e)
            } catch (e) {
                return ih.slice()
            }
        }(e) : nh(th(e))
    };
    var oh = Bl,
        ah = Yf.exports,
        ch = sf,
        uh = td,
        sh = Rp,
        lh = Pp,
        fh = ah("wks"),
        dh = oh.Symbol,
        ph = lh ? dh : dh && dh.withoutSetter || uh,
        hh = function(e) {
            return ch(fh, e) || (sh && ch(dh, e) ? fh[e] = dh[e] : fh[e] = ph("Symbol." + e)), fh[e]
        },
        _h = {},
        vh = hh;
    _h.f = vh;
    var gh = Ad,
        yh = sf,
        mh = _h,
        Eh = Tf.f,
        bh = Tf.f,
        wh = sf,
        Ih = hh("toStringTag"),
        Th = function(e, t, n) {
            e && !wh(e = n ? e : e.prototype, Ih) && bh(e, Ih, {
                configurable: !0,
                value: t
            })
        },
        Oh = function(e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        },
        Sh = Oh,
        Nh = function(e, t, n) {
            if (Sh(e), void 0 === t) return e;
            switch (n) {
                case 0:
                    return function() {
                        return e.call(t)
                    };
                case 1:
                    return function(n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function(n, r) {
                        return e.call(t, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return e.call(t, n, r, i)
                    }
            }
            return function() {
                return e.apply(t, arguments)
            }
        },
        Ah = of ,
        Rh = kp,
        Ph = hh("species"),
        Ch = Nh,
        kh = $l,
        Mh = Lp,
        Lh = Fd,
        Dh = function(e, t) {
            var n;
            return Rh(e) && ("function" != typeof(n = e.constructor) || n !== Array && !Rh(n.prototype) ? Ah(n) && null === (n = n[Ph]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
        },
        xh = [].push,
        jh = function(e) {
            var t = 1 == e,
                n = 2 == e,
                r = 3 == e,
                i = 4 == e,
                o = 6 == e,
                a = 5 == e || o;
            return function(c, u, s, l) {
                for (var f, d, p = Mh(c), h = kh(p), _ = Ch(u, s, 3), v = Lh(h.length), g = 0, y = l || Dh, m = t ? y(c, v) : n ? y(c, 0) : void 0; v > g; g++)
                    if ((a || g in h) && (d = _(f = h[g], g, p), e))
                        if (t) m[g] = d;
                        else if (d) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return f;
                    case 6:
                        return g;
                    case 2:
                        xh.call(m, f)
                } else if (i) return !1;
                return o ? -1 : r || i ? i : m
            }
        },
        Uh = {
            forEach: jh(0),
            map: jh(1),
            filter: jh(2),
            some: jh(3),
            every: jh(4),
            find: jh(5),
            findIndex: jh(6)
        },
        Fh = Np,
        Bh = Bl,
        qh = kd,
        Gh = Vl,
        Vh = Rp,
        Hh = Pp,
        Jh = Gl,
        Wh = sf,
        Kh = kp,
        Yh = of ,
        Xh = Sf,
        zh = Lp,
        Qh = rf,
        Zh = cf,
        $h = Yl,
        e_ = $p,
        t_ = jp,
        n_ = Md,
        r_ = eh,
        i_ = np,
        o_ = ql,
        a_ = Tf,
        c_ = Hl,
        u_ = Lf,
        s_ = Df.exports,
        l_ = Yf.exports,
        f_ = ad,
        d_ = td,
        p_ = hh,
        h_ = _h,
        __ = function(e) {
            var t = gh.Symbol || (gh.Symbol = {});
            yh(t, e) || Eh(t, e, {
                value: mh.f(e)
            })
        },
        v_ = Th,
        g_ = md,
        y_ = Uh.forEach,
        m_ = od("hidden"),
        E_ = "Symbol",
        b_ = p_("toPrimitive"),
        w_ = g_.set,
        I_ = g_.getterFor(E_),
        T_ = Object.prototype,
        O_ = Bh.Symbol,
        S_ = qh("JSON", "stringify"),
        N_ = o_.f,
        A_ = a_.f,
        R_ = r_.f,
        P_ = c_.f,
        C_ = l_("symbols"),
        k_ = l_("op-symbols"),
        M_ = l_("string-to-symbol-registry"),
        L_ = l_("symbol-to-string-registry"),
        D_ = l_("wks"),
        x_ = Bh.QObject,
        j_ = !x_ || !x_.prototype || !x_.prototype.findChild,
        U_ = Gh && Jh((function() {
            return 7 != e_(A_({}, "a", {
                get: function() {
                    return A_(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function(e, t, n) {
            var r = N_(T_, t);
            r && delete T_[t], A_(e, t, n), r && e !== T_ && A_(T_, t, r)
        } : A_,
        F_ = function(e, t) {
            var n = C_[e] = e_(O_.prototype);
            return w_(n, {
                type: E_,
                tag: e,
                description: t
            }), Gh || (n.description = t), n
        },
        B_ = Hh ? function(e) {
            return "symbol" == typeof e
        } : function(e) {
            return Object(e) instanceof O_
        },
        q_ = function(e, t, n) {
            e === T_ && q_(k_, t, n), Xh(e);
            var r = Zh(t, !0);
            return Xh(n), Wh(C_, r) ? (n.enumerable ? (Wh(e, m_) && e[m_][r] && (e[m_][r] = !1), n = e_(n, {
                enumerable: $h(0, !1)
            })) : (Wh(e, m_) || A_(e, m_, $h(1, {})), e[m_][r] = !0), U_(e, r, n)) : A_(e, r, n)
        },
        G_ = function(e, t) {
            Xh(e);
            var n = Qh(t),
                r = t_(n).concat(W_(n));
            return y_(r, (function(t) {
                Gh && !V_.call(n, t) || q_(e, t, n[t])
            })), e
        },
        V_ = function(e) {
            var t = Zh(e, !0),
                n = P_.call(this, t);
            return !(this === T_ && Wh(C_, t) && !Wh(k_, t)) && (!(n || !Wh(this, t) || !Wh(C_, t) || Wh(this, m_) && this[m_][t]) || n)
        },
        H_ = function(e, t) {
            var n = Qh(e),
                r = Zh(t, !0);
            if (n !== T_ || !Wh(C_, r) || Wh(k_, r)) {
                var i = N_(n, r);
                return !i || !Wh(C_, r) || Wh(n, m_) && n[m_][r] || (i.enumerable = !0), i
            }
        },
        J_ = function(e) {
            var t = R_(Qh(e)),
                n = [];
            return y_(t, (function(e) {
                Wh(C_, e) || Wh(f_, e) || n.push(e)
            })), n
        },
        W_ = function(e) {
            var t = e === T_,
                n = R_(t ? k_ : Qh(e)),
                r = [];
            return y_(n, (function(e) {
                !Wh(C_, e) || t && !Wh(T_, e) || r.push(C_[e])
            })), r
        };
    (Vh || (O_ = function() {
        if (this instanceof O_) throw TypeError("Symbol is not a constructor");
        var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
            t = d_(e),
            n = function(e) {
                this === T_ && n.call(k_, e), Wh(this, m_) && Wh(this[m_], t) && (this[m_][t] = !1), U_(this, t, $h(1, e))
            };
        return Gh && j_ && U_(T_, t, {
            configurable: !0,
            set: n
        }), F_(t, e)
    }, s_(O_.prototype, "toString", (function() {
        return I_(this).tag
    })), s_(O_, "withoutSetter", (function(e) {
        return F_(d_(e), e)
    })), c_.f = V_, a_.f = q_, o_.f = H_, n_.f = r_.f = J_, i_.f = W_, h_.f = function(e) {
        return F_(p_(e), e)
    }, Gh && (A_(O_.prototype, "description", {
        configurable: !0,
        get: function() {
            return I_(this).description
        }
    }), s_(T_, "propertyIsEnumerable", V_, {
        unsafe: !0
    }))), Fh({
        global: !0,
        wrap: !0,
        forced: !Vh,
        sham: !Vh
    }, {
        Symbol: O_
    }), y_(t_(D_), (function(e) {
        __(e)
    })), Fh({
        target: E_,
        stat: !0,
        forced: !Vh
    }, {
        for: function(e) {
            var t = String(e);
            if (Wh(M_, t)) return M_[t];
            var n = O_(t);
            return M_[t] = n, L_[n] = t, n
        },
        keyFor: function(e) {
            if (!B_(e)) throw TypeError(e + " is not a symbol");
            if (Wh(L_, e)) return L_[e]
        },
        useSetter: function() {
            j_ = !0
        },
        useSimple: function() {
            j_ = !1
        }
    }), Fh({
        target: "Object",
        stat: !0,
        forced: !Vh,
        sham: !Gh
    }, {
        create: function(e, t) {
            return void 0 === t ? e_(e) : G_(e_(e), t)
        },
        defineProperty: q_,
        defineProperties: G_,
        getOwnPropertyDescriptor: H_
    }), Fh({
        target: "Object",
        stat: !0,
        forced: !Vh
    }, {
        getOwnPropertyNames: J_,
        getOwnPropertySymbols: W_
    }), Fh({
        target: "Object",
        stat: !0,
        forced: Jh((function() {
            i_.f(1)
        }))
    }, {
        getOwnPropertySymbols: function(e) {
            return i_.f(zh(e))
        }
    }), S_) && Fh({
        target: "JSON",
        stat: !0,
        forced: !Vh || Jh((function() {
            var e = O_();
            return "[null]" != S_([e]) || "{}" != S_({
                a: e
            }) || "{}" != S_(Object(e))
        }))
    }, {
        stringify: function(e, t, n) {
            for (var r, i = [e], o = 1; arguments.length > o;) i.push(arguments[o++]);
            if (r = t, (Yh(t) || void 0 !== e) && !B_(e)) return Kh(t) || (t = function(e, t) {
                if ("function" == typeof r && (t = r.call(this, e, t)), !B_(t)) return t
            }), i[1] = t, S_.apply(null, i)
        }
    });
    O_.prototype[b_] || u_(O_.prototype, b_, O_.prototype.valueOf), v_(O_, E_), f_[m_] = !0;
    var K_ = Vl,
        Y_ = Gl,
        X_ = jp,
        z_ = np,
        Q_ = Hl,
        Z_ = Lp,
        $_ = $l,
        ev = Object.assign,
        tv = Object.defineProperty,
        nv = !ev || Y_((function() {
            if (K_ && 1 !== ev({
                    b: 1
                }, ev(tv({}, "a", {
                    enumerable: !0,
                    get: function() {
                        tv(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var e = {},
                t = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            return e[n] = 7, r.split("").forEach((function(e) {
                t[e] = e
            })), 7 != ev({}, e)[n] || X_(ev({}, t)).join("") != r
        })) ? function(e, t) {
            for (var n = Z_(e), r = arguments.length, i = 1, o = z_.f, a = Q_.f; r > i;)
                for (var c, u = $_(arguments[i++]), s = o ? X_(u).concat(o(u)) : X_(u), l = s.length, f = 0; l > f;) c = s[f++], K_ && !a.call(u, c) || (n[c] = u[c]);
            return n
        } : ev,
        rv = nv;
    Np({
        target: "Object",
        stat: !0,
        forced: Object.assign !== rv
    }, {
        assign: rv
    }), Np({
        target: "Object",
        stat: !0,
        sham: !Vl
    }, {
        create: $p
    });
    Np({
        target: "Object",
        stat: !0,
        forced: !Vl,
        sham: !Vl
    }, {
        defineProperty: Tf.f
    });
    Np({
        target: "Object",
        stat: !0,
        forced: !Vl,
        sham: !Vl
    }, {
        defineProperties: qp
    });
    var iv = Vl,
        ov = jp,
        av = rf,
        cv = Hl.f,
        uv = function(e) {
            return function(t) {
                for (var n, r = av(t), i = ov(r), o = i.length, a = 0, c = []; o > a;) n = i[a++], iv && !cv.call(r, n) || c.push(e ? [n, r[n]] : r[n]);
                return c
            }
        },
        sv = {
            entries: uv(!0),
            values: uv(!1)
        },
        lv = sv.entries;
    Np({
        target: "Object",
        stat: !0
    }, {
        entries: function(e) {
            return lv(e)
        }
    });
    var fv = !Gl((function() {
            return Object.isExtensible(Object.preventExtensions({}))
        })),
        dv = {
            exports: {}
        },
        pv = ad,
        hv = of ,
        _v = sf,
        vv = Tf.f,
        gv = fv,
        yv = td("meta"),
        mv = 0,
        Ev = Object.isExtensible || function() {
            return !0
        },
        bv = function(e) {
            vv(e, yv, {
                value: {
                    objectID: "O" + ++mv,
                    weakData: {}
                }
            })
        },
        wv = dv.exports = {
            REQUIRED: !1,
            fastKey: function(e, t) {
                if (!hv(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                if (!_v(e, yv)) {
                    if (!Ev(e)) return "F";
                    if (!t) return "E";
                    bv(e)
                }
                return e[yv].objectID
            },
            getWeakData: function(e, t) {
                if (!_v(e, yv)) {
                    if (!Ev(e)) return !0;
                    if (!t) return !1;
                    bv(e)
                }
                return e[yv].weakData
            },
            onFreeze: function(e) {
                return gv && wv.REQUIRED && Ev(e) && !_v(e, yv) && bv(e), e
            }
        };
    pv[yv] = !0;
    var Iv = Np,
        Tv = fv,
        Ov = Gl,
        Sv = of ,
        Nv = dv.exports.onFreeze,
        Av = Object.freeze;
    Iv({
        target: "Object",
        stat: !0,
        forced: Ov((function() {
            Av(1)
        })),
        sham: !Tv
    }, {
        freeze: function(e) {
            return Av && Sv(e) ? Av(Nv(e)) : e
        }
    });
    var Rv = {
            exports: {}
        },
        Pv = {},
        Cv = Pv,
        kv = hh("iterator"),
        Mv = Array.prototype,
        Lv = {};
    Lv[hh("toStringTag")] = "z";
    var Dv = "[object z]" === String(Lv),
        xv = Dv,
        jv = zl,
        Uv = hh("toStringTag"),
        Fv = "Arguments" == jv(function() {
            return arguments
        }()),
        Bv = xv ? jv : function(e) {
            var t, n, r;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), Uv)) ? n : Fv ? jv(t) : "Object" == (r = jv(t)) && "function" == typeof t.callee ? "Arguments" : r
        },
        qv = Bv,
        Gv = Pv,
        Vv = hh("iterator"),
        Hv = Sf,
        Jv = Sf,
        Wv = function(e) {
            return void 0 !== e && (Cv.Array === e || Mv[kv] === e)
        },
        Kv = Fd,
        Yv = Nh,
        Xv = function(e) {
            if (null != e) return e[Vv] || e["@@iterator"] || Gv[qv(e)]
        },
        zv = function(e, t, n, r) {
            try {
                return r ? t(Hv(n)[0], n[1]) : t(n)
            } catch (t) {
                var i = e.return;
                throw void 0 !== i && Hv(i.call(e)), t
            }
        },
        Qv = function(e, t) {
            this.stopped = e, this.result = t
        };
    (Rv.exports = function(e, t, n, r, i) {
        var o, a, c, u, s, l, f, d = Yv(t, n, r ? 2 : 1);
        if (i) o = e;
        else {
            if ("function" != typeof(a = Xv(e))) throw TypeError("Target is not iterable");
            if (Wv(a)) {
                for (c = 0, u = Kv(e.length); u > c; c++)
                    if ((s = r ? d(Jv(f = e[c])[0], f[1]) : d(e[c])) && s instanceof Qv) return s;
                return new Qv(!1)
            }
            o = a.call(e)
        }
        for (l = o.next; !(f = l.call(o)).done;)
            if ("object" == typeof(s = zv(o, d, f.value, r)) && s && s instanceof Qv) return s;
        return new Qv(!1)
    }).stop = function(e) {
        return new Qv(!0, e)
    };
    var Zv = cf,
        $v = Tf,
        eg = Yl,
        tg = function(e, t, n) {
            var r = Zv(t);
            r in e ? $v.f(e, r, eg(0, n)) : e[r] = n
        },
        ng = Np,
        rg = Rv.exports,
        ig = tg;
    ng({
        target: "Object",
        stat: !0
    }, {
        fromEntries: function(e) {
            var t = {};
            return rg(e, (function(e, n) {
                ig(t, e, n)
            }), void 0, !0), t
        }
    });
    var og = Np,
        ag = Gl,
        cg = rf,
        ug = ql.f,
        sg = Vl,
        lg = ag((function() {
            ug(1)
        }));
    og({
        target: "Object",
        stat: !0,
        forced: !sg || lg,
        sham: !sg
    }, {
        getOwnPropertyDescriptor: function(e, t) {
            return ug(cg(e), t)
        }
    });
    var fg = cp,
        dg = rf,
        pg = ql,
        hg = tg;
    Np({
        target: "Object",
        stat: !0,
        sham: !Vl
    }, {
        getOwnPropertyDescriptors: function(e) {
            for (var t, n, r = dg(e), i = pg.f, o = fg(r), a = {}, c = 0; o.length > c;) void 0 !== (n = i(r, t = o[c++])) && hg(a, t, n);
            return a
        }
    });
    var _g = Np,
        vg = Gl,
        gg = eh.f;
    _g({
        target: "Object",
        stat: !0,
        forced: vg((function() {
            return !Object.getOwnPropertyNames(1)
        }))
    }, {
        getOwnPropertyNames: gg
    });
    var yg = !Gl((function() {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })),
        mg = sf,
        Eg = Lp,
        bg = yg,
        wg = od("IE_PROTO"),
        Ig = Object.prototype,
        Tg = bg ? Object.getPrototypeOf : function(e) {
            return e = Eg(e), mg(e, wg) ? e[wg] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? Ig : null
        },
        Og = Lp,
        Sg = Tg,
        Ng = yg;
    Np({
        target: "Object",
        stat: !0,
        forced: Gl((function() {
            Sg(1)
        })),
        sham: !Ng
    }, {
        getPrototypeOf: function(e) {
            return Sg(Og(e))
        }
    });
    var Ag = Object.is || function(e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    };
    Np({
        target: "Object",
        stat: !0
    }, {
        is: Ag
    });
    var Rg = Np,
        Pg = Gl,
        Cg = of ,
        kg = Object.isExtensible;
    Rg({
        target: "Object",
        stat: !0,
        forced: Pg((function() {
            kg(1)
        }))
    }, {
        isExtensible: function(e) {
            return !!Cg(e) && (!kg || kg(e))
        }
    });
    var Mg = Np,
        Lg = Gl,
        Dg = of ,
        xg = Object.isFrozen;
    Mg({
        target: "Object",
        stat: !0,
        forced: Lg((function() {
            xg(1)
        }))
    }, {
        isFrozen: function(e) {
            return !Dg(e) || !!xg && xg(e)
        }
    });
    var jg = Np,
        Ug = Gl,
        Fg = of ,
        Bg = Object.isSealed;
    jg({
        target: "Object",
        stat: !0,
        forced: Ug((function() {
            Bg(1)
        }))
    }, {
        isSealed: function(e) {
            return !Fg(e) || !!Bg && Bg(e)
        }
    });
    var qg = Lp,
        Gg = jp;
    Np({
        target: "Object",
        stat: !0,
        forced: Gl((function() {
            Gg(1)
        }))
    }, {
        keys: function(e) {
            return Gg(qg(e))
        }
    });
    var Vg = Np,
        Hg = of ,
        Jg = dv.exports.onFreeze,
        Wg = fv,
        Kg = Gl,
        Yg = Object.preventExtensions;
    Vg({
        target: "Object",
        stat: !0,
        forced: Kg((function() {
            Yg(1)
        })),
        sham: !Wg
    }, {
        preventExtensions: function(e) {
            return Yg && Hg(e) ? Yg(Jg(e)) : e
        }
    });
    var Xg = Np,
        zg = of ,
        Qg = dv.exports.onFreeze,
        Zg = fv,
        $g = Gl,
        ey = Object.seal;
    Xg({
        target: "Object",
        stat: !0,
        forced: $g((function() {
            ey(1)
        })),
        sham: !Zg
    }, {
        seal: function(e) {
            return ey && zg(e) ? ey(Qg(e)) : e
        }
    });
    var ty = of ,
        ny = Sf,
        ry = function(e) {
            if (!ty(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
            return e
        },
        iy = Object.setPrototypeOf || ("__proto__" in {} ? function() {
            var e, t = !1,
                n = {};
            try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
            } catch (e) {}
            return function(n, r) {
                return ny(n), ry(r), t ? e.call(n, r) : n.__proto__ = r, n
            }
        }() : void 0);
    Np({
        target: "Object",
        stat: !0
    }, {
        setPrototypeOf: iy
    });
    var oy = sv.values;
    Np({
        target: "Object",
        stat: !0
    }, {
        values: function(e) {
            return oy(e)
        }
    });
    var ay = Bv,
        cy = Dv ? {}.toString : function() {
            return "[object " + ay(this) + "]"
        },
        uy = Dv,
        sy = Df.exports,
        ly = cy;
    uy || sy(Object.prototype, "toString", ly, {
        unsafe: !0
    });
    var fy = Bl,
        dy = !Gl((function() {
            var e = Math.random();
            __defineSetter__.call(null, e, (function() {})), delete fy[e]
        })),
        py = Lp,
        hy = Oh,
        _y = Tf;
    Vl && Np({
        target: "Object",
        proto: !0,
        forced: dy
    }, {
        __defineGetter__: function(e, t) {
            _y.f(py(this), e, {
                get: hy(t),
                enumerable: !0,
                configurable: !0
            })
        }
    });
    var vy = Lp,
        gy = Oh,
        yy = Tf;
    Vl && Np({
        target: "Object",
        proto: !0,
        forced: dy
    }, {
        __defineSetter__: function(e, t) {
            yy.f(vy(this), e, {
                set: gy(t),
                enumerable: !0,
                configurable: !0
            })
        }
    });
    var my = Np,
        Ey = Vl,
        by = dy,
        wy = Lp,
        Iy = cf,
        Ty = Tg,
        Oy = ql.f;
    Ey && my({
        target: "Object",
        proto: !0,
        forced: by
    }, {
        __lookupGetter__: function(e) {
            var t, n = wy(this),
                r = Iy(e, !0);
            do {
                if (t = Oy(n, r)) return t.get
            } while (n = Ty(n))
        }
    });
    var Sy = Np,
        Ny = Vl,
        Ay = dy,
        Ry = Lp,
        Py = cf,
        Cy = Tg,
        ky = ql.f;

    function My(e) {
        var t = this.constructor;
        return this.then((function(n) {
            return t.resolve(e()).then((function() {
                return n
            }))
        }), (function(n) {
            return t.resolve(e()).then((function() {
                return t.reject(n)
            }))
        }))
    }

    function Ly(e) {
        return new this((function(t, n) {
            if (!e || void 0 === e.length) return n(new TypeError(typeof e + " " + e + " is not iterable(cannot read property Symbol(Symbol.iterator))"));
            var r = Array.prototype.slice.call(e);
            if (0 === r.length) return t([]);
            var i = r.length;

            function o(e, n) {
                if (n && ("object" == typeof n || "function" == typeof n)) {
                    var a = n.then;
                    if ("function" == typeof a) return void a.call(n, (function(t) {
                        o(e, t)
                    }), (function(n) {
                        r[e] = {
                            status: "rejected",
                            reason: n
                        }, 0 == --i && t(r)
                    }))
                }
                r[e] = {
                    status: "fulfilled",
                    value: n
                }, 0 == --i && t(r)
            }
            for (var a = 0; a < r.length; a++) o(a, r[a])
        }))
    }

    function Dy(e, t) {
        this.name = "AggregateError", this.errors = e, this.message = t || ""
    }

    function xy(e) {
        var t = this;
        return new t((function(n, r) {
            if (!e || void 0 === e.length) return r(new TypeError("Promise.any accepts an array"));
            var i = Array.prototype.slice.call(e);
            if (0 === i.length) return r();
            for (var o = [], a = 0; a < i.length; a++) try {
                t.resolve(i[a]).then(n).catch((function(e) {
                    o.push(e), o.length === i.length && r(new Dy(o, "All promises were rejected"))
                }))
            } catch (e) {
                r(e)
            }
        }))
    }
    Ny && Sy({
        target: "Object",
        proto: !0,
        forced: Ay
    }, {
        __lookupSetter__: function(e) {
            var t, n = Ry(this),
                r = Py(e, !0);
            do {
                if (t = ky(n, r)) return t.set
            } while (n = Cy(n))
        }
    }), Th(Math, "Math", !0), Th(Bl.JSON, "JSON", !0), Ad.Object, Dy.prototype = Error.prototype;
    var jy = setTimeout;

    function Uy(e) {
        return Boolean(e && void 0 !== e.length)
    }

    function Fy() {}

    function By(e) {
        if (!(this instanceof By)) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], Wy(e, this)
    }

    function qy(e, t) {
        for (; 3 === e._state;) e = e._value;
        0 !== e._state ? (e._handled = !0, By._immediateFn((function() {
            var n = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null !== n) {
                var r;
                try {
                    r = n(e._value)
                } catch (e) {
                    return void Vy(t.promise, e)
                }
                Gy(t.promise, r)
            } else(1 === e._state ? Gy : Vy)(t.promise, e._value)
        }))) : e._deferreds.push(t)
    }

    function Gy(e, t) {
        try {
            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
                var n = t.then;
                if (t instanceof By) return e._state = 3, e._value = t, void Hy(e);
                if ("function" == typeof n) return void Wy((r = n, i = t, function() {
                    r.apply(i, arguments)
                }), e)
            }
            e._state = 1, e._value = t, Hy(e)
        } catch (t) {
            Vy(e, t)
        }
        var r, i
    }

    function Vy(e, t) {
        e._state = 2, e._value = t, Hy(e)
    }

    function Hy(e) {
        2 === e._state && 0 === e._deferreds.length && By._immediateFn((function() {
            e._handled || By._unhandledRejectionFn(e._value)
        }));
        for (var t = 0, n = e._deferreds.length; t < n; t++) qy(e, e._deferreds[t]);
        e._deferreds = null
    }

    function Jy(e, t, n) {
        this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
    }

    function Wy(e, t) {
        var n = !1;
        try {
            e((function(e) {
                n || (n = !0, Gy(t, e))
            }), (function(e) {
                n || (n = !0, Vy(t, e))
            }))
        } catch (e) {
            if (n) return;
            n = !0, Vy(t, e)
        }
    }
    By.prototype.catch = function(e) {
        return this.then(null, e)
    }, By.prototype.then = function(e, t) {
        var n = new this.constructor(Fy);
        return qy(this, new Jy(e, t, n)), n
    }, By.prototype.finally = My, By.all = function(e) {
        return new By((function(t, n) {
            if (!Uy(e)) return n(new TypeError("Promise.all accepts an array"));
            var r = Array.prototype.slice.call(e);
            if (0 === r.length) return t([]);
            var i = r.length;

            function o(e, a) {
                try {
                    if (a && ("object" == typeof a || "function" == typeof a)) {
                        var c = a.then;
                        if ("function" == typeof c) return void c.call(a, (function(t) {
                            o(e, t)
                        }), n)
                    }
                    r[e] = a, 0 == --i && t(r)
                } catch (e) {
                    n(e)
                }
            }
            for (var a = 0; a < r.length; a++) o(a, r[a])
        }))
    }, By.any = xy, By.allSettled = Ly, By.resolve = function(e) {
        return e && "object" == typeof e && e.constructor === By ? e : new By((function(t) {
            t(e)
        }))
    }, By.reject = function(e) {
        return new By((function(t, n) {
            n(e)
        }))
    }, By.race = function(e) {
        return new By((function(t, n) {
            if (!Uy(e)) return n(new TypeError("Promise.race accepts an array"));
            for (var r = 0, i = e.length; r < i; r++) By.resolve(e[r]).then(t, n)
        }))
    }, By._immediateFn = "function" == typeof setImmediate && function(e) {
        setImmediate(e)
    } || function(e) {
        jy(e, 0)
    }, By._unhandledRejectionFn = function(e) {
        "undefined" != typeof console && console
    };
    var Ky = function() {
        if ("undefined" != typeof self) return self;
        if ("undefined" != typeof window) return window;
        if ("undefined" != typeof global) return global;
        throw new Error("unable to locate global object")
    }();
    "function" != typeof Ky.Promise ? Ky.Promise = By : (Ky.Promise.prototype.finally || (Ky.Promise.prototype.finally = My), Ky.Promise.allSettled || (Ky.Promise.allSettled = Ly), Ky.Promise.any || (Ky.Promise.any = xy)),
        function() {
            if ("undefined" != typeof window) try {
                var e = new window.CustomEvent("test", {
                    cancelable: !0
                });
                if (e.preventDefault(), !0 !== e.defaultPrevented) throw new Error("Could not prevent default")
            } catch (e) {
                var t = function(e, t) {
                    var n, r;
                    return (t = t || {}).bubbles = !!t.bubbles, t.cancelable = !!t.cancelable, (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r = n.preventDefault, n.preventDefault = function() {
                        r.call(this);
                        try {
                            Object.defineProperty(this, "defaultPrevented", {
                                get: function() {
                                    return !0
                                }
                            })
                        } catch (e) {
                            this.defaultPrevented = !0
                        }
                    }, n
                };
                t.prototype = window.Event.prototype, window.CustomEvent = t
            }
        }(),
        function() {
            if ("object" == typeof window)
                if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                    get: function() {
                        return this.intersectionRatio > 0
                    }
                });
                else {
                    var e = window.document;
                    n.prototype.THROTTLE_TIMEOUT = 100, n.prototype.POLL_INTERVAL = null, n.prototype.USE_MUTATION_OBSERVER = !0, n.prototype.observe = function(e) {
                        if (!this._observationTargets.some((function(t) {
                                return t.element == e
                            }))) {
                            if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                            this._registerInstance(), this._observationTargets.push({
                                element: e,
                                entry: null
                            }), this._monitorIntersections(), this._checkForIntersections()
                        }
                    }, n.prototype.unobserve = function(e) {
                        this._observationTargets = this._observationTargets.filter((function(t) {
                            return t.element != e
                        })), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                    }, n.prototype.disconnect = function() {
                        this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                    }, n.prototype.takeRecords = function() {
                        var e = this._queuedEntries.slice();
                        return this._queuedEntries = [], e
                    }, n.prototype._initThresholds = function(e) {
                        var t = e || [0];
                        return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
                            if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                            return e !== n[t - 1]
                        }))
                    }, n.prototype._parseRootMargin = function(e) {
                        var t = (e || "0px").split(/\s+/).map((function(e) {
                            var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                            if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                            return {
                                value: parseFloat(t[1]),
                                unit: t[2]
                            }
                        }));
                        return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
                    }, n.prototype._monitorIntersections = function() {
                        this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (r(window, "resize", this._checkForIntersections, !0), r(e, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }))))
                    }, n.prototype._unmonitorIntersections = function() {
                        this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, i(window, "resize", this._checkForIntersections, !0), i(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                    }, n.prototype._checkForIntersections = function() {
                        var e = this._rootIsInDom(),
                            n = e ? this._getRootRect() : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            };
                        this._observationTargets.forEach((function(r) {
                            var i = r.element,
                                a = o(i),
                                c = this._rootContainsTarget(i),
                                u = r.entry,
                                s = e && c && this._computeTargetAndRootIntersection(i, n),
                                l = r.entry = new t({
                                    time: window.performance && performance.now && performance.now(),
                                    target: i,
                                    boundingClientRect: a,
                                    rootBounds: n,
                                    intersectionRect: s
                                });
                            u ? e && c ? this._hasCrossedThreshold(u, l) && this._queuedEntries.push(l) : u && u.isIntersecting && this._queuedEntries.push(l) : this._queuedEntries.push(l)
                        }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                    }, n.prototype._computeTargetAndRootIntersection = function(t, n) {
                        if ("none" != window.getComputedStyle(t).display) {
                            for (var r, i, a, u, s, l, f, d, p = o(t), h = c(t), _ = !1; !_;) {
                                var v = null,
                                    g = 1 == h.nodeType ? window.getComputedStyle(h) : {};
                                if ("none" == g.display) return;
                                if (h == this.root || h == e ? (_ = !0, v = n) : h != e.body && h != e.documentElement && "visible" != g.overflow && (v = o(h)), v && (r = v, i = p, a = void 0, u = void 0, s = void 0, l = void 0, f = void 0, d = void 0, a = Math.max(r.top, i.top), u = Math.min(r.bottom, i.bottom), s = Math.max(r.left, i.left), l = Math.min(r.right, i.right), d = u - a, !(p = (f = l - s) >= 0 && d >= 0 && {
                                        top: a,
                                        bottom: u,
                                        left: s,
                                        right: l,
                                        width: f,
                                        height: d
                                    }))) break;
                                h = c(h)
                            }
                            return p
                        }
                    }, n.prototype._getRootRect = function() {
                        var t;
                        if (this.root) t = o(this.root);
                        else {
                            var n = e.documentElement,
                                r = e.body;
                            t = {
                                top: 0,
                                left: 0,
                                right: n.clientWidth || r.clientWidth,
                                width: n.clientWidth || r.clientWidth,
                                bottom: n.clientHeight || r.clientHeight,
                                height: n.clientHeight || r.clientHeight
                            }
                        }
                        return this._expandRectByRootMargin(t)
                    }, n.prototype._expandRectByRootMargin = function(e) {
                        var t = this._rootMarginValues.map((function(t, n) {
                                return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
                            })),
                            n = {
                                top: e.top - t[0],
                                right: e.right + t[1],
                                bottom: e.bottom + t[2],
                                left: e.left - t[3]
                            };
                        return n.width = n.right - n.left, n.height = n.bottom - n.top, n
                    }, n.prototype._hasCrossedThreshold = function(e, t) {
                        var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                            r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                        if (n !== r)
                            for (var i = 0; i < this.thresholds.length; i++) {
                                var o = this.thresholds[i];
                                if (o == n || o == r || o < n != o < r) return !0
                            }
                    }, n.prototype._rootIsInDom = function() {
                        return !this.root || a(e, this.root)
                    }, n.prototype._rootContainsTarget = function(t) {
                        return a(this.root || e, t)
                    }, n.prototype._registerInstance = function() {}, n.prototype._unregisterInstance = function() {}, window.IntersectionObserver = n, window.IntersectionObserverEntry = t
                }
            function t(e) {
                this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }, this.isIntersecting = !!e.intersectionRect;
                var t = this.boundingClientRect,
                    n = t.width * t.height,
                    r = this.intersectionRect,
                    i = r.width * r.height;
                this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0
            }

            function n(e, t) {
                var n, r, i, o = t || {};
                if ("function" != typeof e) throw new Error("callback must be a function");
                if (o.root && 1 != o.root.nodeType) throw new Error("root must be an Element");
                this._checkForIntersections = (n = this._checkForIntersections.bind(this), r = this.THROTTLE_TIMEOUT, i = null, function() {
                    i || (i = setTimeout((function() {
                        n(), i = null
                    }), r))
                }), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(o.rootMargin), this.thresholds = this._initThresholds(o.threshold), this.root = o.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
                    return e.value + e.unit
                })).join(" ")
            }

            function r(e, t, n, r) {
                "function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
            }

            function i(e, t, n, r) {
                "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
            }

            function o(e) {
                var t;
                try {
                    t = e.getBoundingClientRect()
                } catch (e) {}
                return t ? (t.width && t.height || (t = {
                    top: t.top,
                    right: t.right,
                    bottom: t.bottom,
                    left: t.left,
                    width: t.right - t.left,
                    height: t.bottom - t.top
                }), t) : {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    width: 0,
                    height: 0
                }
            }

            function a(e, t) {
                for (var n = t; n;) {
                    if (n == e) return !0;
                    n = c(n)
                }
                return !1
            }

            function c(e) {
                var t = e.parentNode;
                return t && 11 == t.nodeType && t.host ? t.host : t && t.assignedSlot ? t.assignedSlot.parentNode : t
            }
        }();
    var Yy, Xy = ["", "webkit", "Moz", "MS", "ms", "o"],
        zy = window,
        Qy = void 0 !== function(e, t) {
            var n, r, i = t[0].toUpperCase() + t.slice(1),
                o = 0;
            for (; o < Xy.length;) {
                if ((r = (n = Xy[o]) ? n + i : t) in e) return e[r];
                o++
            }
            return
        }(zy, "PointerEvent"),
        Zy = "ontouchstart" in zy;
    ! function(e) {
        e[e.Default = 0] = "Default", e[e.Start = 1] = "Start", e[e.Move = 2] = "Move", e[e.End = 4] = "End", e[e.Cancle = 8] = "Cancle"
    }(Yy || (Yy = {}));
    var $y = {
        pointer: {
            events: ["pointerdown", "pointermove", "pointerup", "pointercancel"],
            handler: function(e) {
                var t = e.type,
                    n = {
                        status: Yy.Default,
                        timestamp: Date.now(),
                        position: [e.clientX, e.clientY]
                    };
                return t !== this.events[0] || 0 !== e.button && "touch" !== e.pointerType ? t === this.events[1] ? n.status = Yy.Move : t === this.events[2] ? n.status = Yy.End : t === this.events[3] && (n.status = Yy.Cancle) : n.status = Yy.Start, n
            }
        },
        touch: {
            events: ["touchstart", "touchmove", "touchend", "touchcancel"],
            handler: function(e) {
                var t = e.type;
                if (1 !== e.changedTouches.length) return null;
                var n = {
                    status: Yy.Default,
                    timestamp: Date.now(),
                    position: [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
                };
                return t === this.events[0] ? n.status = Yy.Start : t === this.events[1] ? n.status = Yy.Move : t === this.events[2] ? n.status = Yy.End : t === this.events[3] && (n.status = Yy.Cancle), n.status === Yy.Default ? null : n
            }
        },
        mouse: {
            events: ["mousedown", "mousemove", "mouseup"],
            handler: function(e) {
                var t = e.type,
                    n = {
                        status: Yy.Default,
                        timestamp: Date.now(),
                        position: [e.clientX, e.clientY]
                    };
                return t === this.events[0] && 0 === e.button ? n.status = Yy.Start : t === this.events[1] ? n.status = Yy.Move : t === this.events[2] && (n.status = Yy.End), n.status & Yy.Move && 1 !== e.which && (n.status = Yy.End), n.status === Yy.Default ? null : n
            }
        }
    };
    "MSPointerEvent" in zy && !("PointerEvent" in zy) && ($y.pointer.events = ["MSPointerDown", "MSPointerMove", "MSPointerUp", "MSPointerCancel"]);
    var em = 250,
        tm = 9;

    function nm(e, t, n) {
        for (var r = 0; r < e.length; r++) document.addEventListener(e[r], t, n)
    }
    var rm, im, om = function(e, t) {
        var n = function(t) {
            var n, r, i;
            return function(o) {
                var a = $y[t].handler(o);
                if (null !== a) {
                    if (a.status & Yy.Start) return n = Yy.Start, r = a.timestamp, void(i = a.position);
                    if (a.status & Yy.End) n & Yy.Start && a.timestamp - r < em && Math.sqrt(Math.pow(a.position[0] - i[0], 2) + Math.pow(a.position[1] - i[1], 2)) < tm && e(o);
                    else if (a.status & Yy.Move && n & Yy.Start) return
                }
                n = 0, r = 0, i = [0, 0]
            }
        };
        Qy ? nm($y.pointer.events, n("pointer"), t) : Zy ? nm($y.touch.events, n("touch"), t) : nm($y.mouse.events, n("mouse"), t)
    };
    ! function(e) {
        e.V1 = "v1", e.V2 = "v2"
    }(rm || (rm = {})),
    function(e) {
        e.ELEMENT_V2 = "ELEMENT_V2", e.IMG_SRC = "IMG_SRC", e.TOKENIZE_TEXT = "TOKENIZE_TEXT", e.PAGE_URL_V2 = "PAGE_URL_V2"
    }(im || (im = {}));
    var am = function(e, t, n) {
            var r = document.querySelectorAll(t);
            for (var i in r)
                if (n) {
                    if (Object.is(i, e)) return !0
                } else if (!Object.is(i, e)) return !0;
            return !1
        },
        cm = function(e) {
            var t = document.createRange(),
                n = document.body ? document.body : document.head;
            t.selectNode(n);
            var r = t.createContextualFragment(e);
            n.appendChild(r)
        },
        um = function(e, t, n) {
            var r = function() {
                    var e = {},
                        t = new Promise((function(t, n) {
                            e.resolve = t, e.reject = n
                        }));
                    return e.promise = t, e
                }(),
                i = new IntersectionObserver((function(e) {
                    e.forEach((function(e) {
                        if (e.isIntersecting) {
                            var i = {
                                result: e.isIntersecting,
                                curValue: t,
                                condition: n
                            };
                            r.resolve(i)
                        }
                    }))
                }), {
                    root: null,
                    rootMargin: "0px",
                    threshold: .5
                });
            return i.observe(e), r.promise
        };

    function sm(e, t) {
        var n = history[e],
            r = "".concat(e, "-").concat(t);
        return function() {
            n.apply(history, arguments);
            var e = new CustomEvent(r, {
                detail: arguments
            });
            window.dispatchEvent(e)
        }
    }
    var lm = function(e) {
            history.pushState = sm("pushState", e), history.replaceState = sm("replaceState", e)
        },
        fm = function(e, t) {
            var n = e.getComputedStyle(t);
            return "none" !== n.display && ("visible" === n.visibility && !(Number(n.opacity) < .1))
        },
        dm = function(e) {
            var t = e;
            if ("string" == typeof e) try {
                t = decodeURI(e)
            } catch (n) {
                t = e
            }
            return t
        },
        pm = function(e, t) {
            try {
                var n = new URL(e);
                return n.searchParams.delete(t), n.toString()
            } catch (t) {
                return e
            }
        },
        hm = '"pixelMethod":"standard"',
        _m = function(e, t) {
            try {
                var n = e.split(hm),
                    r = "";
                return t && (r += ',"is_button":"true"'), r ? n[0] + hm + r + n[1] : e
            } catch (t) {
                return e
            }
        },
        vm = function(e) {
            try {
                var t = e.split(hm);
                return t[0] + hm + ',"is_standard_mode":"1"' + t[1]
            } catch (t) {
                return e
            }
        },
        gm = function(e, t) {
            try {
                var n = e.split(hm),
                    r = ',"eb_version":"' + t + '"';
                return n[0] + hm + r + n[1]
            } catch (t) {
                return e
            }
        },
        ym = /[\-!$><-==&_\/\?\.,0-9:; \]\[%~\"\{\}\)\(\+\@\^\`]/g,
        mm = /((([a-z])(?=[A-Z]))|(([A-Z])(?=[A-Z][a-z])))/g,
        Em = /\s+/g,
        bm = {
            TOKENIZE_TEXT: "rule_compute_tokenize_text_error",
            IMG_SRC: "rule_compute_img_src_error",
            ELEMENT_V2: "rule_compute_element_v2_xpath_error"
        },
        wm = function(e) {
            var t;
            return null === e ? null : (null === (t = e.innerText) || void 0 === t ? void 0 : t.length) > 0 ? function(e) {
                return e.replace(ym, " ").replace(mm, (function(e) {
                    return "".concat(e, " ")
                })).replace(Em, " ").toLowerCase().trim()
            }(e.innerText) : null
        },
        Im = function(e, t) {
            var n;
            return (null === (n = wm(e)) || void 0 === n ? void 0 : n.toLowerCase()) === t
        },
        Tm = function(e, t) {
            return function(e) {
                var t, n;
                if ("IMG" === e.tagName) return e.getAttribute("src") || "";
                if (window.getComputedStyle) {
                    var r = window.getComputedStyle(e).getPropertyValue("background-image");
                    if (null !== r && "none" !== r && r.length > 0) return r
                }
                return "INPUT" === e.tagName && e.getAttribute("src") || (null === (n = null === (t = e.getElementsByTagName("img")) || void 0 === t ? void 0 : t[0]) || void 0 === n ? void 0 : n.getAttribute("src")) || null
            }(e) === t
        },
        Om = function(e, t) {
            var n;
            return !!(null === (n = null == e ? void 0 : e.matches) || void 0 === n ? void 0 : n.call(e, t))
        },
        Sm = function(e, t, n, r) {
            var i = !1,
                o = null,
                a = null;
            switch (t) {
                case "TOKENIZE_TEXT":
                    a = Im;
                    break;
                case "IMG_SRC":
                    a = Tm;
                    break;
                case "ELEMENT_V2":
                    a = Om
            }
            for (var c = 0; c < 5 && !["HTML", "BODY"].includes(null == e ? void 0 : e.tagName); c++) {
                if ((null == e ? void 0 : e.matches("input[type='button'], input[type='image'], input[type='submit'], button, [class*=btn], [class*=Btn], [class*=button], [class*=Button], [role*=button], [href^='tel: '], [href^='callto: '], [href^='mailto: '], [href^='sms: '], [href^='skype: '], [href^='whatsapp: '], [id*=btn], [id*=Btn], [id*=button], [id*=Button], a")) && (null == a ? void 0 : a(e, n))) {
                    i = !0, o = e;
                    break
                }
                e = e.parentElement
            }
            return r ? o : i
        };
    String.prototype.startsWith || Object.defineProperty(String.prototype, "startsWith", {
        value: function(e, t) {
            return t = !t || t < 0 ? 0 : +t, this.substring(t, t + e.length) === e
        }
    }), String.prototype.endsWith || (String.prototype.endsWith = function(e, t) {
        return (void 0 === t || t > this.length) && (t = this.length), this.substring(t - e.length, t) === e
    });
    var Nm = function(e, t, n, r) {
            switch (t) {
                case "EQUALS":
                    if ([im.TOKENIZE_TEXT, im.IMG_SRC, im.ELEMENT_V2].includes(r)) try {
                        return Sm(e, r, n, !1)
                    } catch (e) {
                        return Ki(Nr.CUSTOM_ERROR, e, {
                            custom_name: "eb_jelly_error",
                            custom_enum: bm[r]
                        }), !1
                    } else if ("ELEMENT" == r) try {
                        for (var i = document.querySelectorAll(n), o = Array.prototype.slice.call(i), a = 0; a < o.length; a++)
                            if (o[a].contains(e)) return !0
                    } catch (e) {
                        return Ki(Nr.CUSTOM_ERROR, e, {
                            custom_name: "eb_jelly_error",
                            custom_enum: "rule_compute_element_xpath_error"
                        }), !1
                    }
                    if (n.split(";").filter((function(t) {
                            return e == t
                        })).length > 0) return !0;
                    break;
                case "LT":
                    if (e < n) return !0;
                    break;
                case "GT":
                    if (e > n) return !0;
                    break;
                case "LT_OR_EQUAL":
                    if (e <= n) return !0;
                    break;
                case "GT_OR_EQUAL":
                    if (e >= n) return !0;
                    break;
                case "CONTAINS":
                    if (n.split(";").filter((function(t) {
                            return (null == t ? void 0 : t.length) > 0 && e.indexOf(t) > -1
                        })).length > 0) return !0;
                    break;
                case "DOES_NOT_EQUAL":
                    if (0 == n.split(";").filter((function(t) {
                            return e == t
                        })).length) return !0;
                    break;
                case "DOES_NOT_CONTAIN":
                    if (-1 == e.indexOf(n)) return !0;
                    break;
                case "STARTS_WITH":
                    if (e.startsWith(n)) return !0;
                    break;
                case "ENDS_WITH":
                    if (e.endsWith(n)) return !0;
                    break;
                case "MATCHES_REGEX":
                    if (n.test(e)) return !0;
                    break;
                case "MATCHES_REGEX_IGNORE_CASE":
                    if (!n.test(e)) return !0;
                    break;
                case "MATCHES_CSS_SELECTOR":
                    if (am(e, n, !0)) return !0;
                    break;
                case "DOSE_NOT_MATCHES_CSS_SELECTOR":
                    if (am(e, n, !1)) return !0
            }
            return !1
        },
        Am = {
            click: ["ELEMENT", "TOKENIZE_TEXT", "IMG_SRC", "ELEMENT_V2", "ELEMENT_CLASSES", "ELEMENT_ID", "ELEMENT_TARGET", "ElEMENT_URL", "ELEMENT_TEXT"],
            pageview: ["PAGE_URL", "PAGE_URL_V2", "PAGE_HOSTNAME", "PAGE_PATH", "REFERRER"],
            visibility: ["ELEMENT", "ELEMENT_CLASSES", "ELEMENT_ID"],
            history_change: ["NEW_HISTORY_FRAGMENT", "OLD_HISTORY_FRAGMENT", "NEW_HISTORY_STATE", "OLD_HISTORY_STATE", "HISTORY_SOURCE"]
        },
        Rm = "ttclid",
        Pm = function() {
            function e() {
                i(this, e)
            }
            return a(e, [{
                key: "dispatcher",
                value: function(e, t, n, r) {
                    var i, o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : document,
                        a = t.variable_type,
                        c = T("visibility" == e ? ["pageview", "history_change", "visibility"] : ["pageview", "history_change", "click"]);
                    try {
                        for (c.s(); !(i = c.n()).done;) {
                            var u = i.value;
                            if (Am[u].indexOf(a) > -1) {
                                var s = void 0;
                                switch (u) {
                                    case "click":
                                        s = this.click(a, n);
                                        break;
                                    case "pageview":
                                        s = this.pageview(a);
                                        break;
                                    case "history_change":
                                        s = this.history_change(a, n, r);
                                        break;
                                    case "visibility":
                                        s = this.visibility(a, t.value, o)
                                }
                                return s
                            }
                        }
                    } catch (e) {
                        c.e(e)
                    } finally {
                        c.f()
                    }
                }
            }, {
                key: "click",
                value: function(e, t) {
                    var n;
                    if (!t) return !1;
                    switch (e) {
                        case "ELEMENT":
                        case "ELEMENT_V2":
                        case "TOKENIZE_TEXT":
                        case "IMG_SRC":
                        case "ELEMENT_TARGET":
                            n = t.target;
                            break;
                        case "ELEMENT_CLASSES":
                            n = t.target.className;
                            break;
                        case "ELEMENT_ID":
                            n = t.target.id;
                            break;
                        case "ElEMENT_URL":
                            n = t.target.href || t.target.src || "";
                            break;
                        case "ELEMENT_TEXT":
                            n = t.target.text || "";
                            break;
                        default:
                            n = null
                    }
                    return n
                }
            }, {
                key: "pageview",
                value: function(e) {
                    var t;
                    switch (e) {
                        case "PAGE_URL":
                        case "PAGE_URL_V2":
                            t = pm(location.href, Rm);
                            break;
                        case "PAGE_HOSTNAME":
                            t = location.hostname;
                            break;
                        case "PAGE_PATH":
                            t = location.pathname;
                            break;
                        case "REFERRER":
                            t = pm(document.referrer, Rm);
                            break;
                        default:
                            t = null
                    }
                    return t
                }
            }, {
                key: "history_change",
                value: function(e, t, n) {
                    var r;
                    switch (e) {
                        case "NEW_HISTORY_FRAGMENT":
                            r = location.hash;
                            break;
                        case "OLD_HISTORY_FRAGMENT":
                            r = n.old_hash;
                            break;
                        case "NEW_HISTORY_STATE":
                            r = history.state;
                            break;
                        case "OLD_HISTORY_STATE":
                            r = n.old_state;
                            break;
                        case "HISTORY_SOURCE":
                            r = t.type;
                            break;
                        default:
                            r = null
                    }
                    return r
                }
            }, {
                key: "visibility",
                value: function(e, t) {
                    var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
                    switch (e) {
                        case "ELEMENT_ID":
                            n = "#" + t;
                            break;
                        case "ELEMENT_CLASS":
                            n = "." + t;
                            break;
                        case "ELEMENT":
                            n = t;
                            break;
                        default:
                            n = null
                    }
                    return r.querySelector(n)
                }
            }]), e
        }(),
        Cm = {
            exports: {}
        };
    ! function(e) {
        function t(e) {
            if (e) return function(e) {
                for (var n in t.prototype) e[n] = t.prototype[n];
                return e
            }(e)
        }
        e.exports = t, t.prototype.on = t.prototype.addEventListener = function(e, t) {
            return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
        }, t.prototype.once = function(e, t) {
            function n() {
                this.off(e, n), t.apply(this, arguments)
            }
            return n.fn = t, this.on(e, n), this
        }, t.prototype.off = t.prototype.removeListener = t.prototype.removeAllListeners = t.prototype.removeEventListener = function(e, t) {
            if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
            var n, r = this._callbacks["$" + e];
            if (!r) return this;
            if (1 == arguments.length) return delete this._callbacks["$" + e], this;
            for (var i = 0; i < r.length; i++)
                if ((n = r[i]) === t || n.fn === t) {
                    r.splice(i, 1);
                    break
                }
            return 0 === r.length && delete this._callbacks["$" + e], this
        }, t.prototype.emit = function(e) {
            this._callbacks = this._callbacks || {};
            for (var t = new Array(arguments.length - 1), n = this._callbacks["$" + e], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            if (n) {
                r = 0;
                for (var i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, t)
            }
            return this
        }, t.prototype.listeners = function(e) {
            return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
        }, t.prototype.hasListeners = function(e) {
            return !!this.listeners(e).length
        }
    }(Cm);
    var km, Mm, Lm = Cm.exports,
        Dm = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r) {
                var o;
                return i(this, n), (o = t.call(this)).BaseConf = e, o.SDK_ID = r, o.BaseConf.forEach((function(e) {
                    e.id = e.code_id, e.conditions = e.conditions || [], e.conditions.forEach((function(e) {
                        e.result = !1
                    }))
                })), o
            }
            return a(n, [{
                key: "sendDebugEvent",
                value: function(e, t, n) {
                    var r = this.BaseConf,
                        i = [];
                    r.forEach((function(e) {
                        e.code_id == t && (e.conditions = n), i.push(e)
                    }));
                    var o = {
                        sdk_id: this.SDK_ID,
                        event_name: e,
                        data: i
                    };
                    this.emit("jelly_message", o)
                }
            }]), n
        }(Lm);
    ! function(e) {
        e[e.WRONG = -1] = "WRONG", e[e.KEEP = 0] = "KEEP", e[e.ARRAY = -2] = "ARRAY", e[e.TURNINTOINTEGER = 1] = "TURNINTOINTEGER", e[e.TURNINTODECIMAL = 2] = "TURNINTODECIMAL"
    }(km || (km = {})),
    function(e) {
        e[e.CLICK_EVENT = 0] = "CLICK_EVENT", e[e.DESTINATION_URL = 1] = "DESTINATION_URL"
    }(Mm || (Mm = {}));
    var xm, jm = function(e) {
            var t, n = {};
            try {
                if (e.currency && (n.currency = e.currency), e.value) {
                    document.querySelectorAll(e.value).length;
                    var r = document.querySelector(e.value);
                    (null == r ? void 0 : r.innerHTML) && (n.ori_value = r.innerHTML, n.value = Um(null === (t = r.innerHTML) || void 0 === t ? void 0 : t.trim(), e.value_index, e.value_parsing_method))
                }
                if (e.contents && void 0 !== e.contents[0].content_type && (1 === e.contents[0].content_type && (n.content_type = "product"), 2 === e.contents[0].content_type && (n.content_type = "product_group")), e.contents && e.contents[0].content_name) {
                    var i = document.querySelector(e.contents[0].content_name);
                    n.content_name = null == i ? void 0 : i.innerHTML
                }
                if (e.contents && e.contents[0].content_id)
                    if (e.contents[0].content_from === Mm.CLICK_EVENT) {
                        var o = document.querySelector(e.contents[0].content_id);
                        n.content_id = null == o ? void 0 : o.innerHTML
                    } else if (e.contents[0].content_from === Mm.DESTINATION_URL) {
                    var a = new URL(location.href);
                    if (e.contents[0].content_id.startsWith("path")) {
                        var c = a.pathname.split("/"),
                            u = e.contents[0].content_id.split("|")[1];
                        n.content_id = c[u]
                    }
                    if (e.contents[0].content_id.startsWith("search")) {
                        var s = new URLSearchParams(a.search),
                            l = e.contents[0].content_id.split("|")[1];
                        n.content_id = s.get(l)
                    }
                }
                return n
            } catch (e) {
                return Ki(Nr.CUSTOM_ERROR, e, {
                    custom_name: "eb_jelly_error",
                    custom_enum: "dynamicParameter_v1_error"
                }), n
            }
        },
        Um = function(e, t, n) {
            var r = "";
            if (-1 === t || void 0 === t) {
                var i = Bm(e)[0];
                r = void 0 !== i ? Fm(i, n) : ""
            } else {
                var o = Bm(e)[t];
                r = void 0 !== o ? Fm(o, n) : ""
            }
            return r
        },
        Fm = function(e, t) {
            var n = "";
            if (t !== km.KEEP && t !== km.WRONG || (n = e), t === km.TURNINTOINTEGER && (n = e.replace(/[,\.]/g, "")), t === km.TURNINTODECIMAL) {
                var r = e.split(/[,\.]/g),
                    i = "";
                r.forEach((function(e, t) {
                    t < r.length - 1 ? i += e : i += "." + e
                })), n = i
            }
            return n
        },
        Bm = function(e) {
            for (var t, n = /[\d|\.|,]+/gm, r = []; null !== (t = n.exec(e));) t.index === n.lastIndex && n.lastIndex++, t.forEach((function(e) {
                r.push(e)
            }));
            return r
        },
        qm = function(e, t, n) {
            try {
                var r = e.split(hm),
                    i = "";
                return Object.keys(t).forEach((function(e) {
                    null === t[e] && void 0 === t[e] || (i += ',"' + e + '":"' + ("value" !== e ? encodeURIComponent(t[e]) : t[e]) + '"')
                })), n && (i += ',"dynamic_parameter_config":' + JSON.stringify(n)), i ? r[0] + hm + i + r[1] : e
            } catch (t) {
                return Ki(Nr.CUSTOM_ERROR, t, {
                    custom_name: "eb_jelly_error",
                    custom_enum: "dynamicParameter_v1_transform_code_error"
                }), e
            }
        },
        Gm = function(e, t) {
            var n, r;
            if (!e || "" === e) return null;
            var i, o = null === (n = e.match(/closest\$([^$]+)\$/)) || void 0 === n ? void 0 : n[1],
                a = null === (r = e.match(/children\$([^$]+)\$/)) || void 0 === r ? void 0 : r[1];
            if (t && o && a) {
                Element.prototype.closest || (Element.prototype.closest = function(e) {
                    var t = this;
                    if (!document.contains(t)) return null;
                    do {
                        if (t.matches(e)) return t;
                        t = t.parentElement || t.parentNode
                    } while (null !== t && 1 === t.nodeType);
                    return null
                });
                var c = t.closest(o);
                i = null == c ? void 0 : c.querySelector(a)
            } else i = t && a ? t.querySelector(a) : document.querySelector(e);
            return i
        },
        Vm = function(e, t) {
            var n, r = {};
            try {
                if (e.currency && (r.currency = e.currency), e.value) {
                    var i = Gm(e.value, t);
                    (null == i ? void 0 : i.innerHTML) && (r.ori_value = i.innerHTML, r.value = Um(null === (n = i.innerHTML) || void 0 === n ? void 0 : n.trim(), e.value_index, e.value_parsing_method)), r.value || Wi(Nr.CUSTOM_INFO, {
                        custom_name: "eb_jelly_info",
                        custom_enum: "dynamic_parameter_v2_value_empty",
                        extJSON: {
                            selector: e.value
                        }
                    })
                }
                return e.contents && e.contents.length > 0 && (r.contents = [], function(e, t, n) {
                    e.map((function(e) {
                        var r = e.content_type,
                            i = e.content_id,
                            o = e.content_from,
                            a = {};
                        if (r && (1 === r ? a.content_type = "product" : 2 === r && (a.content_type = "product_group")), i) {
                            if (o === Mm.CLICK_EVENT) {
                                var c = Gm(i, n);
                                (null == c ? void 0 : c.innerText) && (a.content_id = null == c ? void 0 : c.innerText)
                            } else if (o === Mm.DESTINATION_URL) {
                                var u = new URL(location.href);
                                if (i.startsWith("path")) {
                                    var s = u.pathname.split("/"),
                                        l = i.split("|")[1];
                                    a.content_id = s[l]
                                }
                                if (i.startsWith("search")) {
                                    var f = new URLSearchParams(u.search),
                                        d = i.split("|")[1];
                                    a.content_id = f.get(d) || void 0
                                }
                            }
                            a.content_id || Wi(Nr.CUSTOM_INFO, {
                                custom_name: "eb_jelly_info",
                                custom_enum: "dynamic_parameter_v2_content_id_empty",
                                extJSON: {
                                    selector: i
                                }
                            })
                        }
                        o && (a.content_from = o), t.push(a)
                    }))
                }(e.contents, r.contents, t)), r
            } catch (e) {
                return Ki(Nr.CUSTOM_ERROR, e, {
                    custom_name: "eb_jelly_error",
                    custom_enum: "dynamicParameter_v2_error"
                }), r
            }
        },
        Hm = function(e, t, n) {
            try {
                var r = e.split(hm),
                    i = "";
                return Object.keys(t).forEach((function(e) {
                    if (null !== t[e] || void 0 !== t[e])
                        if ("contents" === e) {
                            var n = t[e];
                            i += ',"' + e + '":[', null == n || n.map((function(e, t) {
                                i += "{";
                                var r = Object.keys(e);
                                r.forEach((function(t, n) {
                                    "content_id" === t && e[t] && (e[t] = encodeURIComponent(e[t])), i += '"' + t + '":"' + e[t] + '"' + (n === (null == r ? void 0 : r.length) - 1 ? "" : ",")
                                })), i += "}" + (t === (null == n ? void 0 : n.length) - 1 ? "" : ",")
                            })), i += "]"
                        } else i += ',"' + e + '":"' + ("value" !== e ? encodeURIComponent(t[e]) : t[e]) + '"'
                })), n && (i += ',"dynamic_parameter_config":' + JSON.stringify(n)), i ? r[0] + hm + i + r[1] : e
            } catch (t) {
                return Ki(Nr.CUSTOM_ERROR, t, {
                    custom_name: "eb_jelly_error",
                    custom_enum: "dynamicParameter_v2_transform_error"
                }), e
            }
        },
        Jm = new Pm,
        Wm = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r, o, a) {
                var c;
                return i(this, n), (c = t.call(this)).on("jelly_message", a), c.SendEvent = new Dm(r, o), c.SendEvent.on("jelly_message", (function(e) {
                    c.emit("jelly_message", e)
                })), c.CLICK = e.CLICK || [], c.PAGEVIEW = e.PAGEVIEW || [], c.VISIBILITY = e.VISIBILITY || [], c.HISTORY_CHANGE = e.HISTORY_CHANGE || [], c.SDK_ID = o || "", c.click(), c.pageview(), c.visibility(), c
            }
            return a(n, [{
                key: "dispatcher",
                value: function(e, t, n, r) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                            var i = {
                                taskName: window.ttq._pf_tn || "event_builder_dispatcher",
                                functionName: window.ttq._pf_tn && "event_builder_dispatcher",
                                start: performance.now()
                            };
                            window.ttq._pf_tn || (window.ttq._pf_tn = "event_builder_dispatcher")
                        }
                    } catch (e) {}
                    if (t) {
                        var o, a, c = T(t);
                        try {
                            for (c.s(); !(o = c.n()).done;) {
                                var u, s = o.value,
                                    l = [],
                                    f = T(s.conditions);
                                try {
                                    for (f.s(); !(u = f.n()).done;) {
                                        var d = u.value,
                                            p = Jm.dispatcher(e, d, n, r),
                                            h = Nm(p, d.operator, d.value, d.variable_type);
                                        if ("history_change" !== e && "pageview" !== e || (h = h || Nm(dm(p), d.operator, d.value, d.variable_type)), h) {
                                            var _ = !1,
                                                v = (a = d.variable_type, Object.values(im).includes(a) ? rm.V2 : rm.V1);
                                            try {
                                                _ = ["ELEMENT", im.TOKENIZE_TEXT, im.IMG_SRC, im.ELEMENT_V2].includes(d.variable_type) && vi(p)
                                            } catch (e) {
                                                _ = !1, Ki(Nr.CUSTOM_ERROR, e, {
                                                    custom_name: "button_check_jelly_error",
                                                    custom_enum: "auto_click",
                                                    extJSON: {
                                                        element: p
                                                    }
                                                })
                                            }
                                            var g = _m(s.code, _);
                                            if (g = vm(g), g = gm(g, v), d.dynamic_parameter) try {
                                                var y = void 0,
                                                    m = void 0;
                                                switch (d.variable_type) {
                                                    case im.PAGE_URL_V2:
                                                        y = Vm(d.dynamic_parameter, null), m = Hm(g, y, d.dynamic_parameter);
                                                        break;
                                                    case im.ELEMENT_V2:
                                                    case im.TOKENIZE_TEXT:
                                                    case im.IMG_SRC:
                                                        var E = Sm(p, d.variable_type, d.value, !0);
                                                        y = Vm(d.dynamic_parameter, E), m = Hm(g, y, d.dynamic_parameter);
                                                        break;
                                                    default:
                                                        y = jm(d.dynamic_parameter), m = qm(g, y, d.dynamic_parameter)
                                                }
                                                cm(m)
                                            } catch (e) {
                                                e(Nr.CUSTOM_ERROR, e, {
                                                    custom_name: "eb_jelly_error",
                                                    custom_enum: "dynamic_parameter_code_concat"
                                                }), cm(g)
                                            } else cm(g);
                                            this.SendEvent.sendDebugEvent("jelly." + e, s.code_id, l)
                                        }
                                        l.push(Object.assign(d, {
                                            cur_value: p,
                                            result: h
                                        }))
                                    }
                                } catch (e) {
                                    f.e(e)
                                } finally {
                                    f.f()
                                }
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        try {
                            window.ttq && window.ttq._ppf && (i.end = performance.now(), window.ttq._ppf.push(i), "event_builder_dispatcher" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                        } catch (e) {}
                    }
                }
            }, {
                key: "click",
                value: function() {
                    var e = this;
                    om((function(t) {
                        e.dispatcher("click", e.CLICK, t)
                    }), !0)
                }
            }, {
                key: "pageview",
                value: function() {
                    this.dispatcher("pageview", this.PAGEVIEW), this.history_change(this.PAGEVIEW)
                }
            }, {
                key: "history_change",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.HISTORY_CHANGE,
                        t = this,
                        n = history.state,
                        r = location.hash,
                        i = location.href;
                    lm(this.SDK_ID), window.addEventListener("pushState-".concat(this.SDK_ID), (function(r) {
                        if (location.href != i) {
                            var o = {
                                old_state: n
                            };
                            t.dispatcher("history_change", e, r, o), n = history.state, i = location.href
                        }
                    })), window.addEventListener("replaceState-".concat(this.SDK_ID), (function() {
                        if (location.href != i) {
                            var r = {
                                old_state: n
                            };
                            t.dispatcher("history_change", e, r), n = history.state, i = location.href
                        }
                    })), window.addEventListener("popstate", (function(n) {
                        if (location.href != i) {
                            var o = {
                                old_hash: r
                            };
                            t.dispatcher("history_change", e, n, o), r = location.hash, i = location.href
                        }
                    }))
                }
            }, {
                key: "visibility",
                value: function() {
                    if (!(this.VISIBILITY.length < 1)) {
                        var e = this.VISIBILITY,
                            t = this.SendEvent.sendDebugEvent.bind(this.SendEvent);
                        new MutationObserver(Km(e, t, window)).observe(document, {
                            childList: !0,
                            characterData: !0,
                            subtree: !0,
                            attributes: !0
                        });
                        for (var n = document.getElementsByTagName("iframe"), r = 0; r < n.length; r++) try {
                            var i = n[r].contentWindow;
                            if (null != i) new MutationObserver(Km(e, t, i)).observe(i.document, {
                                childList: !0,
                                characterData: !0,
                                subtree: !0,
                                attributes: !0
                            })
                        } catch (e) {}
                    }
                }
            }]), n
        }(Lm),
        Km = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = {};
            return function() {
                e.forEach((function(e) {
                    var i = !0,
                        o = [],
                        a = [];
                    e.conditions.forEach((function(e) {
                        if (Am.visibility.indexOf(e.variable_type) > -1) {
                            var t = Jm.dispatcher("visibility", e, null, null, n.document),
                                c = "_" + e.value;
                            t && fm(n, t) && !r[c] && (o.push(um(t, "", e)), r[c] = !0)
                        } else {
                            var u = Jm.dispatcher("visibility", e),
                                s = Nm(u, e.operator, e.value, e.variable_type);
                            s || (i = !1), a.push(Object.assign(e, {
                                cur_value: u,
                                result: s
                            }))
                        }
                    })), o.length > 0 && Promise.all(o).then((function(n) {
                        var r, o = !0,
                            c = T(n);
                        try {
                            for (c.s(); !(r = c.n()).done;) {
                                var u = r.value;
                                a.push(Object.assign(u.condition, {
                                    cur_value: u.curValue,
                                    result: u.result
                                })), u.result && i || (o = !1)
                            }
                        } catch (e) {
                            c.e(e)
                        } finally {
                            c.f()
                        }
                        o && cm(e.code), t("jelly.visibility", e.code_id, a)
                    }), (function() {}))
                }))
            }
        },
        Ym = function(e) {
            u(n, e);
            var t = p(n);

            function n(e, r) {
                var o;
                if (i(this, n), (o = t.call(this)).BaseConf = r, o.SDK_ID = e, window.jelly_tool_events && window.jelly_tool_events.length && window.jelly_tool_events.forEach((function(e) {
                        o.on(e.name, e.callback)
                    })), o.emit("jelly_event", {
                        SDK_ID: e,
                        BaseConf: r || []
                    }), o.BaseConf instanceof Array) {
                    if (self._jelly_sdks = self._jelly_sdks || {}, self._jelly_sdks[e]) return d(o);
                    self._jelly_sdks[e] = !0;
                    var a = o.dispatch();
                    o.trigger = new Wm(a, r, e, (function(e) {
                        o.emit("jelly_message", e)
                    }))
                }
                return o
            }
            return a(n, [{
                key: "dispatch",
                value: function() {
                    var e = {
                        CLICK: [],
                        PAGEVIEW: [],
                        VISIBILITY: [],
                        HISTORY_CHANGE: []
                    };
                    return this.BaseConf.forEach((function(t) {
                        var n = {
                            code_id: t.code_id,
                            code: t.code,
                            conditions: t.conditions || []
                        };
                        void 0 !== t.trigger_type && e[t.trigger_type] && e[t.trigger_type].push(n)
                    })), e
                }
            }]), n
        }(Lm);
    window.TiktokJelly = Ym;
    var Xm = Yr();
    try {
        ! function() {
            try {
                if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) {
                    var e = {
                        taskName: window.ttq._pf_tn || "init",
                        functionName: window.ttq._pf_tn && "init",
                        start: performance.now()
                    };
                    window.ttq._pf_tn || (window.ttq._pf_tn = "init")
                }
            } catch (e) {}
            var t = Xi().pixelCode,
                n = Xr(),
                r = Si(),
                i = Ni();
            if (function(e, t, n) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var r = {
                            taskName: window.ttq._pf_tn,
                            functionName: "initAllModule",
                            start: performance.now()
                        }
                    } catch (e) {}
                    Dl(e, n), Wo(t, e), Ul(), xl(e), jl(), Js(t, e);
                    try {
                        window.ttq && window.ttq._ppf && (r.end = performance.now(), window.ttq._ppf.push(r))
                    } catch (e) {}
                }(n, Rl, r), ti("Monitor")) {
                var o = function() {
                    try {
                        return Rl.get(Sr.MONITOR_PLUGIN) || null
                    } catch (e) {
                        return null
                    }
                }();
                null == o || o.info(Nr.BEFORE_INIT, {
                    pixelCode: t,
                    extJSON: {
                        stack: Ei(t)
                    }
                })
            }
            if (n) {
                n._mounted ? (Wi(Nr.HANDLE_CACHE, {
                    pixelCode: t
                }), Yo(Rl, n)) : (xm = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : vr.OFFSITE;
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var r = {
                            taskName: window.ttq._pf_tn,
                            functionName: "webTtqFactory",
                            start: performance.now()
                        }
                    } catch (e) {}
                    Ho(e, Sr.ENV, t), Ho(e, Ir.SignalType, n);
                    var i = e.get(Sr.TTQ);
                    try {
                        window.ttq && window.ttq._ppf && (r.end = performance.now(), window.ttq._ppf.push(r))
                    } catch (e) {}
                    return i
                }(Rl, r, i), window[Xm] = function(e, t) {
                    try {
                        if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var n = {
                            taskName: window.ttq._pf_tn,
                            functionName: "mergeWebGlobalTtq",
                            start: performance.now()
                        }
                    } catch (e) {}["getReporter", "usePlugin", "getPlugin", "resetCookieExpires"].forEach((function(n) {
                        e[n] = function() {
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                            return t[n].apply(t, r)
                        }
                    })), e.context = t.context, e.reporters = t.reporters;
                    try {
                        window.ttq && window.ttq._ppf && (n.end = performance.now(), window.ttq._ppf.push(n))
                    } catch (e) {}
                    return e
                }(n, xm), n.resetCookieExpires && n.resetCookieExpires(), Yo(Rl, xm), Ko(xm));
                var a = Rl.get(Ir.IsOnsitePage);
                a.value = i === vr.ONSITE || n.reporters.every((function(e) {
                        return e.isOnsite()
                    })), Rl.rebind(Ir.IsOnsitePage).toConstantValue(a),
                    function(e) {
                        try {
                            if (window.ttq && !window.ttq._ppf && (window.ttq._ppf = []), window.ttq && window.ttq._ppf) var t = {
                                taskName: window.ttq._pf_tn,
                                functionName: "handlePixelRules",
                                start: performance.now()
                            }
                        } catch (e) {}
                        e.reporters.forEach((function(e) {
                            e.rules && new Ym(e.getReporterId(), e.rules)
                        }));
                        try {
                            window.ttq && window.ttq._ppf && (t.end = performance.now(), window.ttq._ppf.push(t))
                        } catch (e) {}
                    }(n);
                try {
                    window.ttq && window.ttq._ppf && (e.end = performance.now(), window.ttq._ppf.push(e), "init" === window.ttq._pf_tn && (window.ttq._pf_tn = ""))
                } catch (e) {}
            }
        }()
    } catch (Du) {
        Ki(Nr.INIT_ERROR, Du)
    }
}();