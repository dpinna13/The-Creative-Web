/* eslint-disable */
/**
@license @nocompile
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function() {
    /*

      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    'use strict';
    var w;

    function aa(a) { var b = 0; return function() { return b < a.length ? { done: !1, value: a[b++] } : { done: !0 } } }

    function ca(a) { var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator]; return b ? b.call(a) : { next: aa(a) } }

    function da(a) { for (var b, c = []; !(b = a.next()).done;) c.push(b.value); return c }
    var ea = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
        ha = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) { a != Array.prototype && a != Object.prototype && (a[b] = c.value) };

    function ia() {
        ia = function() {};
        ea.Symbol || (ea.Symbol = ja)
    }

    function ma(a, b) {
        this.a = a;
        ha(this, "description", { configurable: !0, writable: !0, value: b })
    }
    ma.prototype.toString = function() { return this.a };
    var ja = function() {
        function a(c) { if (this instanceof a) throw new TypeError("Symbol is not a constructor"); return new ma("jscomp_symbol_" + (c || "") + "_" + b++, c) }
        var b = 0;
        return a
    }();

    function na() {
        ia();
        var a = ea.Symbol.iterator;
        a || (a = ea.Symbol.iterator = ea.Symbol("Symbol.iterator"));
        "function" != typeof Array.prototype[a] && ha(Array.prototype, a, { configurable: !0, writable: !0, value: function() { return oa(aa(this)) } });
        na = function() {}
    }

    function oa(a) {
        na();
        a = { next: a };
        a[ea.Symbol.iterator] = function() { return this };
        return a
    }
    var pa;
    if ("function" == typeof Object.setPrototypeOf) pa = Object.setPrototypeOf;
    else {
        var ta;
        a: {
            var ua = { Fa: !0 },
                wa = {};
            try {
                wa.__proto__ = ua;
                ta = wa.Fa;
                break a
            } catch (a) {}
            ta = !1
        }
        pa = ta ? function(a, b) { a.__proto__ = b; if (a.__proto__ !== b) throw new TypeError(a + " is not extensible"); return a } : null
    }
    var xa = pa;

    function ya() {
        this.f = !1;
        this.b = null;
        this.U = void 0;
        this.a = 1;
        this.F = 0;
        this.c = null
    }

    function za(a) {
        if (a.f) throw new TypeError("Generator is already running");
        a.f = !0
    }
    ya.prototype.u = function(a) { this.U = a };

    function Aa(a, b) {
        a.c = { Ia: b, Ma: !0 };
        a.a = a.F
    }
    ya.prototype.return = function(a) {
        this.c = { return: a };
        this.a = this.F
    };

    function Ba(a, b) { a.a = 3; return { value: b } }

    function Ca(a) {
        this.a = new ya;
        this.b = a
    }

    function Da(a, b) {
        za(a.a);
        var c = a.a.b;
        if (c) return Ea(a, "return" in c ? c["return"] : function(d) { return { value: d, done: !0 } }, b, a.a.return);
        a.a.return(b);
        return Fa(a)
    }

    function Ea(a, b, c, d) {
        try { var e = b.call(a.a.b, c); if (!(e instanceof Object)) throw new TypeError("Iterator result " + e + " is not an object"); if (!e.done) return a.a.f = !1, e; var f = e.value } catch (g) { return a.a.b = null, Aa(a.a, g), Fa(a) }
        a.a.b = null;
        d.call(a.a, f);
        return Fa(a)
    }

    function Fa(a) {
        for (; a.a.a;) try { var b = a.b(a.a); if (b) return a.a.f = !1, { value: b.value, done: !1 } } catch (c) { a.a.U = void 0, Aa(a.a, c) }
        a.a.f = !1;
        if (a.a.c) {
            b = a.a.c;
            a.a.c = null;
            if (b.Ma) throw b.Ia;
            return { value: b.return, done: !0 }
        }
        return { value: void 0, done: !0 }
    }

    function Ga(a) {
        this.next = function(b) {
            za(a.a);
            a.a.b ? b = Ea(a, a.a.b.next, b, a.a.u) : (a.a.u(b), b = Fa(a));
            return b
        };
        this.throw = function(b) {
            za(a.a);
            a.a.b ? b = Ea(a, a.a.b["throw"], b, a.a.u) : (Aa(a.a, b), b = Fa(a));
            return b
        };
        this.return = function(b) { return Da(a, b) };
        na();
        this[Symbol.iterator] = function() { return this }
    }

    function Ha(a, b) {
        b = new Ga(new Ca(b));
        xa && xa(b, a.prototype);
        return b
    }
    Array.from || (Array.from = function(a) { return [].slice.call(a) });
    Object.assign || (Object.assign = function(a) {
        for (var b = [].slice.call(arguments, 1), c = 0, d; c < b.length; c++)
            if (d = b[c])
                for (var e = a, f = d, g = Object.getOwnPropertyNames(f), h = 0; h < g.length; h++) d = g[h], e[d] = f[d];
        return a
    });
    (function() {
        if (! function() {
                var f = document.createEvent("Event");
                f.initEvent("foo", !0, !0);
                f.preventDefault();
                return f.defaultPrevented
            }()) {
            var a = Event.prototype.preventDefault;
            Event.prototype.preventDefault = function() { this.cancelable && (a.call(this), Object.defineProperty(this, "defaultPrevented", { get: function() { return !0 }, configurable: !0 })) }
        }
        var b = /Trident/.test(navigator.userAgent);
        if (!window.Event || b && "function" !== typeof window.Event) {
            var c = window.Event;
            window.Event = function(f, g) {
                g = g || {};
                var h = document.createEvent("Event");
                h.initEvent(f, !!g.bubbles, !!g.cancelable);
                return h
            };
            if (c) {
                for (var d in c) window.Event[d] = c[d];
                window.Event.prototype = c.prototype
            }
        }
        if (!window.CustomEvent || b && "function" !== typeof window.CustomEvent) window.CustomEvent = function(f, g) {
            g = g || {};
            var h = document.createEvent("CustomEvent");
            h.initCustomEvent(f, !!g.bubbles, !!g.cancelable, g.detail);
            return h
        }, window.CustomEvent.prototype = window.Event.prototype;
        if (!window.MouseEvent || b && "function" !== typeof window.MouseEvent) {
            b = window.MouseEvent;
            window.MouseEvent =
                function(f, g) {
                    g = g || {};
                    var h = document.createEvent("MouseEvent");
                    h.initMouseEvent(f, !!g.bubbles, !!g.cancelable, g.view || window, g.detail, g.screenX, g.screenY, g.clientX, g.clientY, g.ctrlKey, g.altKey, g.shiftKey, g.metaKey, g.button, g.relatedTarget);
                    return h
                };
            if (b)
                for (var e in b) window.MouseEvent[e] = b[e];
            window.MouseEvent.prototype = b.prototype
        }
    })();
    (function() {
        function a() {}

        function b(p, t) {
            if (!p.childNodes.length) return [];
            switch (p.nodeType) {
                case Node.DOCUMENT_NODE:
                    return F.call(p, t);
                case Node.DOCUMENT_FRAGMENT_NODE:
                    return C.call(p, t);
                default:
                    return r.call(p, t)
            }
        }
        var c = "undefined" === typeof HTMLTemplateElement,
            d = !(document.createDocumentFragment().cloneNode() instanceof DocumentFragment),
            e = !1;
        /Trident/.test(navigator.userAgent) && function() {
            function p(z, S) {
                if (z instanceof DocumentFragment)
                    for (var cb; cb = z.firstChild;) D.call(this, cb, S);
                else D.call(this,
                    z, S);
                return z
            }
            e = !0;
            var t = Node.prototype.cloneNode;
            Node.prototype.cloneNode = function(z) {
                z = t.call(this, z);
                this instanceof DocumentFragment && (z.__proto__ = DocumentFragment.prototype);
                return z
            };
            DocumentFragment.prototype.querySelectorAll = HTMLElement.prototype.querySelectorAll;
            DocumentFragment.prototype.querySelector = HTMLElement.prototype.querySelector;
            Object.defineProperties(DocumentFragment.prototype, {
                nodeType: { get: function() { return Node.DOCUMENT_FRAGMENT_NODE }, configurable: !0 },
                localName: {
                    get: function() {},
                    configurable: !0
                },
                nodeName: { get: function() { return "#document-fragment" }, configurable: !0 }
            });
            var D = Node.prototype.insertBefore;
            Node.prototype.insertBefore = p;
            var K = Node.prototype.appendChild;
            Node.prototype.appendChild = function(z) { z instanceof DocumentFragment ? p.call(this, z, null) : K.call(this, z); return z };
            var ba = Node.prototype.removeChild,
                ka = Node.prototype.replaceChild;
            Node.prototype.replaceChild = function(z, S) { z instanceof DocumentFragment ? (p.call(this, z, S), ba.call(this, S)) : ka.call(this, z, S); return S };
            Document.prototype.createDocumentFragment =
                function() {
                    var z = this.createElement("df");
                    z.__proto__ = DocumentFragment.prototype;
                    return z
                };
            var qa = Document.prototype.importNode;
            Document.prototype.importNode = function(z, S) {
                S = qa.call(this, z, S || !1);
                z instanceof DocumentFragment && (S.__proto__ = DocumentFragment.prototype);
                return S
            }
        }();
        var f = Node.prototype.cloneNode,
            g = Document.prototype.createElement,
            h = Document.prototype.importNode,
            k = Node.prototype.removeChild,
            l = Node.prototype.appendChild,
            m = Node.prototype.replaceChild,
            q = DOMParser.prototype.parseFromString,
            H = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML") || { get: function() { return this.innerHTML }, set: function(p) { this.innerHTML = p } },
            E = Object.getOwnPropertyDescriptor(window.Node.prototype, "childNodes") || { get: function() { return this.childNodes } },
            r = Element.prototype.querySelectorAll,
            F = Document.prototype.querySelectorAll,
            C = DocumentFragment.prototype.querySelectorAll,
            N = function() {
                if (!c) {
                    var p = document.createElement("template"),
                        t = document.createElement("template");
                    t.content.appendChild(document.createElement("div"));
                    p.content.appendChild(t);
                    p = p.cloneNode(!0);
                    return 0 === p.content.childNodes.length || 0 === p.content.firstChild.content.childNodes.length || d
                }
            }();
        if (c) {
            var y = document.implementation.createHTMLDocument("template"),
                X = !0,
                v = document.createElement("style");
            v.textContent = "template{display:none;}";
            var ra = document.head;
            ra.insertBefore(v, ra.firstElementChild);
            a.prototype = Object.create(HTMLElement.prototype);
            var fa = !document.createElement("div").hasOwnProperty("innerHTML");
            a.S = function(p) {
                if (!p.content && p.namespaceURI ===
                    document.documentElement.namespaceURI) {
                    p.content = y.createDocumentFragment();
                    for (var t; t = p.firstChild;) l.call(p.content, t);
                    if (fa) p.__proto__ = a.prototype;
                    else if (p.cloneNode = function(D) { return a.b(this, D) }, X) try { n(p), I(p) } catch (D) { X = !1 }
                    a.a(p.content)
                }
            };
            var sa = { option: ["select"], thead: ["table"], col: ["colgroup", "table"], tr: ["tbody", "table"], th: ["tr", "tbody", "table"], td: ["tr", "tbody", "table"] },
                n = function(p) {
                    Object.defineProperty(p, "innerHTML", {
                        get: function() { return va(this) },
                        set: function(t) {
                            var D = sa[(/<([a-z][^/\0>\x20\t\r\n\f]+)/i.exec(t) || ["", ""])[1].toLowerCase()];
                            if (D)
                                for (var K = 0; K < D.length; K++) t = "<" + D[K] + ">" + t + "</" + D[K] + ">";
                            y.body.innerHTML = t;
                            for (a.a(y); this.content.firstChild;) k.call(this.content, this.content.firstChild);
                            t = y.body;
                            if (D)
                                for (K = 0; K < D.length; K++) t = t.lastChild;
                            for (; t.firstChild;) l.call(this.content, t.firstChild)
                        },
                        configurable: !0
                    })
                },
                I = function(p) {
                    Object.defineProperty(p, "outerHTML", {
                        get: function() { return "<template>" + this.innerHTML + "</template>" },
                        set: function(t) {
                            if (this.parentNode) {
                                y.body.innerHTML = t;
                                for (t = this.ownerDocument.createDocumentFragment(); y.body.firstChild;) l.call(t,
                                    y.body.firstChild);
                                m.call(this.parentNode, t, this)
                            } else throw Error("Failed to set the 'outerHTML' property on 'Element': This element has no parent node.");
                        },
                        configurable: !0
                    })
                };
            n(a.prototype);
            I(a.prototype);
            a.a = function(p) { p = b(p, "template"); for (var t = 0, D = p.length, K; t < D && (K = p[t]); t++) a.S(K) };
            document.addEventListener("DOMContentLoaded", function() { a.a(document) });
            Document.prototype.createElement = function() { var p = g.apply(this, arguments); "template" === p.localName && a.S(p); return p };
            DOMParser.prototype.parseFromString =
                function() {
                    var p = q.apply(this, arguments);
                    a.a(p);
                    return p
                };
            Object.defineProperty(HTMLElement.prototype, "innerHTML", {
                get: function() { return va(this) },
                set: function(p) {
                    H.set.call(this, p);
                    a.a(this)
                },
                configurable: !0,
                enumerable: !0
            });
            var la = /[&\u00A0"]/g,
                Xb = /[&\u00A0<>]/g,
                db = function(p) {
                    switch (p) {
                        case "&":
                            return "&amp;";
                        case "<":
                            return "&lt;";
                        case ">":
                            return "&gt;";
                        case '"':
                            return "&quot;";
                        case "\u00a0":
                            return "&nbsp;"
                    }
                };
            v = function(p) { for (var t = {}, D = 0; D < p.length; D++) t[p[D]] = !0; return t };
            var Ra = v("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
                eb = v("style script xmp iframe noembed noframes plaintext noscript".split(" ")),
                va = function(p, t) {
                    "template" === p.localName && (p = p.content);
                    for (var D = "", K = t ? t(p) : E.get.call(p), ba = 0, ka = K.length, qa; ba < ka && (qa = K[ba]); ba++) {
                        a: {
                            var z = qa;
                            var S = p;
                            var cb = t;
                            switch (z.nodeType) {
                                case Node.ELEMENT_NODE:
                                    for (var Yb = z.localName, fb = "<" + Yb, cg = z.attributes, ud = 0; S = cg[ud]; ud++) fb += " " + S.name + '="' + S.value.replace(la, db) + '"';
                                    fb += ">";
                                    z = Ra[Yb] ? fb : fb + va(z, cb) + "</" + Yb + ">";
                                    break a;
                                case Node.TEXT_NODE:
                                    z = z.data;
                                    z = S && eb[S.localName] ?
                                        z : z.replace(Xb, db);
                                    break a;
                                case Node.COMMENT_NODE:
                                    z = "\x3c!--" + z.data + "--\x3e";
                                    break a;
                                default:
                                    throw window.console.error(z), Error("not implemented");
                            }
                        }
                        D += z
                    }
                    return D
                }
        }
        if (c || N) {
            a.b = function(p, t) {
                var D = f.call(p, !1);
                this.S && this.S(D);
                t && (l.call(D.content, f.call(p.content, !0)), u(D.content, p.content));
                return D
            };
            var u = function(p, t) {
                    if (t.querySelectorAll && (t = b(t, "template"), 0 !== t.length)) {
                        p = b(p, "template");
                        for (var D = 0, K = p.length, ba, ka; D < K; D++) ka = t[D], ba = p[D], a && a.S && a.S(ka), m.call(ba.parentNode, G.call(ka, !0), ba)
                    }
                },
                G = Node.prototype.cloneNode = function(p) {
                    if (!e && d && this instanceof DocumentFragment)
                        if (p) var t = J.call(this.ownerDocument, this, !0);
                        else return this.ownerDocument.createDocumentFragment();
                    else this.nodeType === Node.ELEMENT_NODE && "template" === this.localName && this.namespaceURI == document.documentElement.namespaceURI ? t = a.b(this, p) : t = f.call(this, p);
                    p && u(t, this);
                    return t
                },
                J = Document.prototype.importNode = function(p, t) {
                    t = t || !1;
                    if ("template" === p.localName) return a.b(p, t);
                    var D = h.call(this, p, t);
                    if (t) {
                        u(D,
                            p);
                        p = b(D, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]');
                        for (var K, ba = 0; ba < p.length; ba++) {
                            K = p[ba];
                            t = g.call(document, "script");
                            t.textContent = K.textContent;
                            for (var ka = K.attributes, qa = 0, z; qa < ka.length; qa++) z = ka[qa], t.setAttribute(z.name, z.value);
                            m.call(K.parentNode, t, K)
                        }
                    }
                    return D
                }
        }
        c && (window.HTMLTemplateElement = a)
    })();
    var Ia = setTimeout;

    function Ja() {}

    function Ka(a, b) { return function() { a.apply(b, arguments) } }

    function x(a) {
        if (!(this instanceof x)) throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof a) throw new TypeError("not a function");
        this.K = 0;
        this.pa = !1;
        this.w = void 0;
        this.V = [];
        La(a, this)
    }

    function Ma(a, b) {
        for (; 3 === a.K;) a = a.w;
        0 === a.K ? a.V.push(b) : (a.pa = !0, Na(function() {
            var c = 1 === a.K ? b.Oa : b.Pa;
            if (null === c)(1 === a.K ? Oa : Pa)(b.na, a.w);
            else {
                try { var d = c(a.w) } catch (e) { Pa(b.na, e); return }
                Oa(b.na, d)
            }
        }))
    }

    function Oa(a, b) {
        try {
            if (b === a) throw new TypeError("A promise cannot be resolved with itself.");
            if (b && ("object" === typeof b || "function" === typeof b)) {
                var c = b.then;
                if (b instanceof x) {
                    a.K = 3;
                    a.w = b;
                    Qa(a);
                    return
                }
                if ("function" === typeof c) { La(Ka(c, b), a); return }
            }
            a.K = 1;
            a.w = b;
            Qa(a)
        } catch (d) { Pa(a, d) }
    }

    function Pa(a, b) {
        a.K = 2;
        a.w = b;
        Qa(a)
    }

    function Qa(a) {
        2 === a.K && 0 === a.V.length && Na(function() { a.pa || "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a.w) });
        for (var b = 0, c = a.V.length; b < c; b++) Ma(a, a.V[b]);
        a.V = null
    }

    function Sa(a, b, c) {
        this.Oa = "function" === typeof a ? a : null;
        this.Pa = "function" === typeof b ? b : null;
        this.na = c
    }

    function La(a, b) { var c = !1; try { a(function(d) { c || (c = !0, Oa(b, d)) }, function(d) { c || (c = !0, Pa(b, d)) }) } catch (d) { c || (c = !0, Pa(b, d)) } }
    x.prototype["catch"] = function(a) { return this.then(null, a) };
    x.prototype.then = function(a, b) {
        var c = new this.constructor(Ja);
        Ma(this, new Sa(a, b, c));
        return c
    };
    x.prototype["finally"] = function(a) { var b = this.constructor; return this.then(function(c) { return b.resolve(a()).then(function() { return c }) }, function(c) { return b.resolve(a()).then(function() { return b.reject(c) }) }) };

    function Ta(a) {
        return new x(function(b, c) {
            function d(h, k) {
                try {
                    if (k && ("object" === typeof k || "function" === typeof k)) { var l = k.then; if ("function" === typeof l) { l.call(k, function(m) { d(h, m) }, c); return } }
                    e[h] = k;
                    0 === --f && b(e)
                } catch (m) { c(m) }
            }
            if (!a || "undefined" === typeof a.length) throw new TypeError("Promise.all accepts an array");
            var e = Array.prototype.slice.call(a);
            if (0 === e.length) return b([]);
            for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
        })
    }

    function Ua(a) { return a && "object" === typeof a && a.constructor === x ? a : new x(function(b) { b(a) }) }

    function Va(a) { return new x(function(b, c) { c(a) }) }

    function Wa(a) { return new x(function(b, c) { for (var d = 0, e = a.length; d < e; d++) a[d].then(b, c) }) }
    var Na = "function" === typeof setImmediate && function(a) { setImmediate(a) } || function(a) { Ia(a, 0) };
    /*
     
     Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    if (!window.Promise) {
        window.Promise = x;
        x.prototype.then = x.prototype.then;
        x.all = Ta;
        x.race = Wa;
        x.resolve = Ua;
        x.reject = Va;
        var Xa = document.createTextNode(""),
            Ya = [];
        (new MutationObserver(function() {
            for (var a = Ya.length, b = 0; b < a; b++) Ya[b]();
            Ya.splice(0, a)
        })).observe(Xa, { characterData: !0 });
        Na = function(a) {
            Ya.push(a);
            Xa.textContent = 0 < Xa.textContent.length ? "" : "a"
        }
    };
    /*
      Copyright (C) 2015 by WebReflection
     
     Permission is hereby granted, free of charge, to any person obtaining a copy
     of this software and associated documentation files (the "Software"), to deal
     in the Software without restriction, including without limitation the rights
     to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
     copies of the Software, and to permit persons to whom the Software is
     furnished to do so, subject to the following conditions:
     
     The above copyright notice and this permission notice shall be included in
     all copies or substantial portions of the Software.
     
     THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
     IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
     FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
     AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
     LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
     OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
     THE SOFTWARE.
     
     */
    (function(a, b) {
        if (!(b in a)) {
            var c = typeof global === typeof c ? window : global,
                d = 0,
                e = "" + Math.random(),
                f = "__\u0001symbol@@" + e,
                g = a.getOwnPropertyNames,
                h = a.getOwnPropertyDescriptor,
                k = a.create,
                l = a.keys,
                m = a.freeze || a,
                q = a.defineProperty,
                H = a.defineProperties,
                E = h(a, "getOwnPropertyNames"),
                r = a.prototype,
                F = r.hasOwnProperty,
                C = r.propertyIsEnumerable,
                N = r.toString,
                y = function(u, G, J) {
                    F.call(u, f) || q(u, f, { enumerable: !1, configurable: !1, writable: !1, value: {} });
                    u[f]["@@" + G] = J
                },
                X = function(u, G) {
                    var J = k(u);
                    g(G).forEach(function(p) {
                        sa.call(G,
                            p) && Ra(J, p, G[p])
                    });
                    return J
                },
                v = function() {},
                ra = function(u) { return u != f && !F.call(la, u) },
                fa = function(u) { return u != f && F.call(la, u) },
                sa = function(u) { var G = "" + u; return fa(G) ? F.call(this, G) && this[f]["@@" + G] : C.call(this, u) },
                n = function(u) {
                    q(r, u, {
                        enumerable: !1,
                        configurable: !0,
                        get: v,
                        set: function(G) {
                            va(this, u, { enumerable: !1, configurable: !0, writable: !0, value: G });
                            y(this, u, !0)
                        }
                    });
                    return m(la[u] = q(a(u), "constructor", Xb))
                },
                I = function(u) {
                    if (this && this !== c) throw new TypeError("Symbol is not a constructor");
                    return n("__\u0001symbol:".concat(u ||
                        "", e, ++d))
                },
                la = k(null),
                Xb = { value: I },
                db = function(u) { return la[u] },
                Ra = function(u, G, J) {
                    var p = "" + G;
                    if (fa(p)) {
                        G = va;
                        if (J.enumerable) {
                            var t = k(J);
                            t.enumerable = !1
                        } else t = J;
                        G(u, p, t);
                        y(u, p, !!J.enumerable)
                    } else q(u, G, J);
                    return u
                },
                eb = function(u) { return g(u).filter(fa).map(db) };
            E.value = Ra;
            q(a, "defineProperty", E);
            E.value = eb;
            q(a, b, E);
            E.value = function(u) { return g(u).filter(ra) };
            q(a, "getOwnPropertyNames", E);
            E.value = function(u, G) {
                var J = eb(G);
                J.length ? l(G).concat(J).forEach(function(p) { sa.call(G, p) && Ra(u, p, G[p]) }) : H(u,
                    G);
                return u
            };
            q(a, "defineProperties", E);
            E.value = sa;
            q(r, "propertyIsEnumerable", E);
            E.value = I;
            q(c, "Symbol", E);
            E.value = function(u) { u = "__\u0001symbol:".concat("__\u0001symbol:", u, e); return u in r ? la[u] : n(u) };
            q(I, "for", E);
            E.value = function(u) { if (ra(u)) throw new TypeError(u + " is not a symbol"); return F.call(la, u) ? u.slice(20, -e.length) : void 0 };
            q(I, "keyFor", E);
            E.value = function(u, G) {
                var J = h(u, G);
                J && fa(G) && (J.enumerable = sa.call(u, G));
                return J
            };
            q(a, "getOwnPropertyDescriptor", E);
            E.value = function(u, G) {
                return 1 ===
                    arguments.length ? k(u) : X(u, G)
            };
            q(a, "create", E);
            E.value = function() { var u = N.call(this); return "[object String]" === u && fa(this) ? "[object Symbol]" : u };
            q(r, "toString", E);
            try { var va = k(q({}, "__\u0001symbol:", { get: function() { return q(this, "__\u0001symbol:", { value: !1 })["__\u0001symbol:"] } }))["__\u0001symbol:"] || q } catch (u) {
                va = function(G, J, p) {
                    var t = h(r, J);
                    delete r[J];
                    q(G, J, p);
                    q(r, J, t)
                }
            }
        }
    })(Object, "getOwnPropertySymbols");
    (function(a) {
        var b = a.defineProperty,
            c = a.prototype,
            d = c.toString,
            e;
        "iterator match replace search split hasInstance isConcatSpreadable unscopables species toPrimitive toStringTag".split(" ").forEach(function(f) {
            if (!(f in Symbol)) switch (b(Symbol, f, { value: Symbol(f) }), f) {
                case "toStringTag":
                    e = a.getOwnPropertyDescriptor(c, "toString"), e.value = function() {
                        var g = d.call(this),
                            h = this[Symbol.toStringTag];
                        return "undefined" === typeof h ? g : "[object " + h + "]"
                    }, b(c, "toString", e)
            }
        })
    })(Object, Symbol);
    (function(a, b, c) {
        function d() { return this }
        b[a] || (b[a] = function() {
            var e = 0,
                f = this,
                g = { next: function() { var h = f.length <= e; return h ? { done: h } : { done: h, value: f[e++] } } };
            g[a] = d;
            return g
        });
        c[a] || (c[a] = function() {
            var e = String.fromCodePoint,
                f = this,
                g = 0,
                h = f.length,
                k = {
                    next: function() {
                        var l = h <= g,
                            m = l ? "" : e(f.codePointAt(g));
                        g += m.length;
                        return l ? { done: l } : { done: l, value: m }
                    }
                };
            k[a] = d;
            return k
        })
    })(Symbol.iterator, Array.prototype, String.prototype);
    /*
     
     Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    var Za = Object.prototype.toString;
    Object.prototype.toString = function() { return void 0 === this ? "[object Undefined]" : null === this ? "[object Null]" : Za.call(this) };
    Object.keys = function(a) { return Object.getOwnPropertyNames(a).filter(function(b) { return (b = Object.getOwnPropertyDescriptor(a, b)) && b.enumerable }) };
    var $a = window.Symbol.iterator;
    String.prototype[$a] && String.prototype.codePointAt || (String.prototype[$a] = function ab() {
        var b, c = this;
        return Ha(ab, function(d) {
            1 == d.a && (b = 0);
            if (3 != d.a) return b < c.length ? d = Ba(d, c[b]) : (d.a = 0, d = void 0), d;
            b++;
            d.a = 2
        })
    });
    Set.prototype[$a] || (Set.prototype[$a] = function bb() {
        var b, c = this,
            d;
        return Ha(bb, function(e) {
            1 == e.a && (b = [], c.forEach(function(f) { b.push(f) }), d = 0);
            if (3 != e.a) return d < b.length ? e = Ba(e, b[d]) : (e.a = 0, e = void 0), e;
            d++;
            e.a = 2
        })
    });
    Map.prototype[$a] || (Map.prototype[$a] = function gb() {
        var b, c = this,
            d;
        return Ha(gb, function(e) {
            1 == e.a && (b = [], c.forEach(function(f, g) { b.push([g, f]) }), d = 0);
            if (3 != e.a) return d < b.length ? e = Ba(e, b[d]) : (e.a = 0, e = void 0), e;
            d++;
            e.a = 2
        })
    });
    /*
     
      Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    window.WebComponents = window.WebComponents || { flags: {} };
    var hb = document.querySelector('script[src*="webcomponents-bundle"]'),
        ib = /wc-(.+)/,
        A = {};
    if (!A.noOpts) {
        location.search.slice(1).split("&").forEach(function(a) {
            a = a.split("=");
            var b;
            a[0] && (b = a[0].match(ib)) && (A[b[1]] = a[1] || !0)
        });
        if (hb)
            for (var jb = 0, kb = void 0; kb = hb.attributes[jb]; jb++) "src" !== kb.name && (A[kb.name] = kb.value || !0);
        if (A.log && A.log.split) {
            var lb = A.log.split(",");
            A.log = {};
            lb.forEach(function(a) { A.log[a] = !0 })
        } else A.log = {}
    }
    window.WebComponents.flags = A;
    var mb = A.shadydom;
    if (mb) {
        window.ShadyDOM = window.ShadyDOM || {};
        window.ShadyDOM.force = mb;
        var nb = A.noPatch;
        window.ShadyDOM.noPatch = "true" === nb ? !0 : nb
    }
    var ob = A.register || A.ce;
    ob && window.customElements && (window.customElements.forcePolyfill = ob);
    /*
     
     Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
     This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
     The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
     The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
     Code distributed by Google as part of the polymer project is also
     subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
     */
    function pb() {}
    pb.prototype.toJSON = function() { return {} };

    function B(a) { a.__shady || (a.__shady = new pb); return a.__shady }

    function L(a) { return a && a.__shady };
    var M = window.ShadyDOM || {};
    M.Ka = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
    var qb = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");
    M.D = !!(qb && qb.configurable && qb.get);
    M.ia = M.force || !M.Ka;
    M.G = M.noPatch || !1;
    M.ma = M.preferPerformance;
    M.la = "on-demand" === M.G;
    M.ya = navigator.userAgent.match("Trident");

    function rb(a) { return (a = L(a)) && void 0 !== a.firstChild }

    function O(a) { return a instanceof ShadowRoot }

    function sb(a) { return (a = (a = L(a)) && a.root) && tb(a) }
    var ub = Element.prototype,
        vb = ub.matches || ub.matchesSelector || ub.mozMatchesSelector || ub.msMatchesSelector || ub.oMatchesSelector || ub.webkitMatchesSelector,
        wb = document.createTextNode(""),
        xb = 0,
        yb = [];
    (new MutationObserver(function() { for (; yb.length;) try { yb.shift()() } catch (a) { throw wb.textContent = xb++, a; } })).observe(wb, { characterData: !0 });

    function zb(a) {
        yb.push(a);
        wb.textContent = xb++
    }
    var Ab = !!document.contains;

    function Bb(a, b) {
        for (; b;) {
            if (b == a) return !0;
            b = b.__shady_parentNode
        }
        return !1
    }

    function Cb(a) {
        for (var b = a.length - 1; 0 <= b; b--) {
            var c = a[b],
                d = c.getAttribute("id") || c.getAttribute("name");
            d && "length" !== d && isNaN(d) && (a[d] = c)
        }
        a.item = function(e) { return a[e] };
        a.namedItem = function(e) {
            if ("length" !== e && isNaN(e) && a[e]) return a[e];
            for (var f = ca(a), g = f.next(); !g.done; g = f.next())
                if (g = g.value, (g.getAttribute("id") || g.getAttribute("name")) == e) return g;
            return null
        };
        return a
    }

    function Db(a) { var b = []; for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) b.push(a); return b }

    function Eb(a) { var b = []; for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b.push(a); return b }

    function Fb(a, b, c) {
        c.configurable = !0;
        if (c.value) a[b] = c.value;
        else try { Object.defineProperty(a, b, c) } catch (d) {}
    }

    function P(a, b, c, d) { c = void 0 === c ? "" : c; for (var e in b) d && 0 <= d.indexOf(e) || Fb(a, c + e, b[e]) }

    function Gb(a, b) { for (var c in b) c in a && Fb(a, c, b[c]) }

    function Q(a) {
        var b = {};
        Object.getOwnPropertyNames(a).forEach(function(c) { b[c] = Object.getOwnPropertyDescriptor(a, c) });
        return b
    };
    var Hb = [],
        Ib;

    function Jb(a) {
        Ib || (Ib = !0, zb(Kb));
        Hb.push(a)
    }

    function Kb() { Ib = !1; for (var a = !!Hb.length; Hb.length;) Hb.shift()(); return a }
    Kb.list = Hb;

    function Lb() {
        this.a = !1;
        this.addedNodes = [];
        this.removedNodes = [];
        this.ba = new Set
    }

    function Mb(a) { a.a || (a.a = !0, zb(function() { a.flush() })) }
    Lb.prototype.flush = function() {
        if (this.a) {
            this.a = !1;
            var a = this.takeRecords();
            a.length && this.ba.forEach(function(b) { b(a) })
        }
    };
    Lb.prototype.takeRecords = function() {
        if (this.addedNodes.length || this.removedNodes.length) {
            var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];
            this.addedNodes = [];
            this.removedNodes = [];
            return a
        }
        return []
    };

    function Nb(a, b) {
        var c = B(a);
        c.W || (c.W = new Lb);
        c.W.ba.add(b);
        var d = c.W;
        return { Ca: b, P: d, Da: a, takeRecords: function() { return d.takeRecords() } }
    }

    function Ob(a) {
        var b = a && a.P;
        b && (b.ba.delete(a.Ca), b.ba.size || (B(a.Da).W = null))
    }

    function Pb(a, b) { var c = b.getRootNode(); return a.map(function(d) { var e = c === d.target.getRootNode(); if (e && d.addedNodes) { if (e = Array.from(d.addedNodes).filter(function(f) { return c === f.getRootNode() }), e.length) return d = Object.create(d), Object.defineProperty(d, "addedNodes", { value: e, configurable: !0 }), d } else if (e) return d }).filter(function(d) { return d }) };
    var Qb = /[&\u00A0"]/g,
        Rb = /[&\u00A0<>]/g;

    function Sb(a) {
        switch (a) {
            case "&":
                return "&amp;";
            case "<":
                return "&lt;";
            case ">":
                return "&gt;";
            case '"':
                return "&quot;";
            case "\u00a0":
                return "&nbsp;"
        }
    }

    function Tb(a) { for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0; return b }
    var Ub = Tb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
        Vb = Tb("style script xmp iframe noembed noframes plaintext noscript".split(" "));

    function Wb(a, b) {
        "template" === a.localName && (a = a.content);
        for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g = void 0; e < f && (g = d[e]); e++) {
            a: {
                var h = g;
                var k = a,
                    l = b;
                switch (h.nodeType) {
                    case Node.ELEMENT_NODE:
                        k = h.localName;
                        for (var m = "<" + k, q = h.attributes, H = 0, E; E = q[H]; H++) m += " " + E.name + '="' + E.value.replace(Qb, Sb) + '"';
                        m += ">";
                        h = Ub[k] ? m : m + Wb(h, l) + "</" + k + ">";
                        break a;
                    case Node.TEXT_NODE:
                        h = h.data;
                        h = k && Vb[k.localName] ? h : h.replace(Rb, Sb);
                        break a;
                    case Node.COMMENT_NODE:
                        h = "\x3c!--" + h.data + "--\x3e";
                        break a;
                    default:
                        throw window.console.error(h),
                            Error("not implemented");
                }
            }
            c += h
        }
        return c
    };
    var Zb = M.D,
        $b = { querySelector: function(a) { return this.__shady_native_querySelector(a) }, querySelectorAll: function(a) { return this.__shady_native_querySelectorAll(a) } },
        ac = {};

    function bc(a) { ac[a] = function(b) { return b["__shady_native_" + a] } }

    function cc(a, b) { P(a, b, "__shady_native_"); for (var c in b) bc(c) }

    function R(a, b) {
        b = void 0 === b ? [] : b;
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = Object.getOwnPropertyDescriptor(a, d);
            e && (Object.defineProperty(a, "__shady_native_" + d, e), e.value ? $b[d] || ($b[d] = e.value) : bc(d))
        }
    }
    var dc = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
        ec = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1),
        fc = document.implementation.createHTMLDocument("inert");

    function gc(a) { for (var b; b = a.__shady_native_firstChild;) a.__shady_native_removeChild(b) }
    var hc = ["firstElementChild", "lastElementChild", "children", "childElementCount"],
        ic = ["querySelector", "querySelectorAll"];

    function jc() {
        var a = ["dispatchEvent", "addEventListener", "removeEventListener"];
        window.EventTarget ? R(window.EventTarget.prototype, a) : (R(Node.prototype, a), R(Window.prototype, a));
        Zb ? R(Node.prototype, "parentNode firstChild lastChild previousSibling nextSibling childNodes parentElement textContent".split(" ")) : cc(Node.prototype, {
            parentNode: { get: function() { dc.currentNode = this; return dc.parentNode() } },
            firstChild: { get: function() { dc.currentNode = this; return dc.firstChild() } },
            lastChild: {
                get: function() {
                    dc.currentNode =
                        this;
                    return dc.lastChild()
                }
            },
            previousSibling: { get: function() { dc.currentNode = this; return dc.previousSibling() } },
            nextSibling: { get: function() { dc.currentNode = this; return dc.nextSibling() } },
            childNodes: {
                get: function() {
                    var b = [];
                    dc.currentNode = this;
                    for (var c = dc.firstChild(); c;) b.push(c), c = dc.nextSibling();
                    return b
                }
            },
            parentElement: { get: function() { ec.currentNode = this; return ec.parentNode() } },
            textContent: {
                get: function() {
                    switch (this.nodeType) {
                        case Node.ELEMENT_NODE:
                        case Node.DOCUMENT_FRAGMENT_NODE:
                            for (var b =
                                    document.createTreeWalker(this, NodeFilter.SHOW_TEXT, null, !1), c = "", d; d = b.nextNode();) c += d.nodeValue;
                            return c;
                        default:
                            return this.nodeValue
                    }
                },
                set: function(b) {
                    if ("undefined" === typeof b || null === b) b = "";
                    switch (this.nodeType) {
                        case Node.ELEMENT_NODE:
                        case Node.DOCUMENT_FRAGMENT_NODE:
                            gc(this);
                            (0 < b.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_native_insertBefore(document.createTextNode(b), void 0);
                            break;
                        default:
                            this.nodeValue = b
                    }
                }
            }
        });
        R(Node.prototype, "appendChild insertBefore removeChild replaceChild cloneNode contains".split(" "));
        R(HTMLElement.prototype, ["parentElement", "contains"]);
        a = {
            firstElementChild: { get: function() { ec.currentNode = this; return ec.firstChild() } },
            lastElementChild: { get: function() { ec.currentNode = this; return ec.lastChild() } },
            children: {
                get: function() {
                    var b = [];
                    ec.currentNode = this;
                    for (var c = ec.firstChild(); c;) b.push(c), c = ec.nextSibling();
                    return Cb(b)
                }
            },
            childElementCount: { get: function() { return this.children ? this.children.length : 0 } }
        };
        Zb ? (R(Element.prototype, hc), R(Element.prototype, ["previousElementSibling", "nextElementSibling",
            "innerHTML", "className"
        ]), R(HTMLElement.prototype, ["children", "innerHTML", "className"])) : (cc(Element.prototype, a), cc(Element.prototype, {
            previousElementSibling: { get: function() { ec.currentNode = this; return ec.previousSibling() } },
            nextElementSibling: { get: function() { ec.currentNode = this; return ec.nextSibling() } },
            innerHTML: {
                get: function() { return Wb(this, Db) },
                set: function(b) {
                    var c = "template" === this.localName ? this.content : this;
                    gc(c);
                    var d = this.localName || "div";
                    d = this.namespaceURI && this.namespaceURI !== fc.namespaceURI ?
                        fc.createElementNS(this.namespaceURI, d) : fc.createElement(d);
                    d.innerHTML = b;
                    for (b = "template" === this.localName ? d.content : d; d = b.__shady_native_firstChild;) c.__shady_native_insertBefore(d, void 0)
                }
            },
            className: { get: function() { return this.getAttribute("class") || "" }, set: function(b) { this.setAttribute("class", b) } }
        }));
        R(Element.prototype, "setAttribute getAttribute hasAttribute removeAttribute focus blur".split(" "));
        R(Element.prototype, ic);
        R(HTMLElement.prototype, ["focus", "blur"]);
        window.HTMLTemplateElement &&
            R(window.HTMLTemplateElement.prototype, ["innerHTML"]);
        Zb ? R(DocumentFragment.prototype, hc) : cc(DocumentFragment.prototype, a);
        R(DocumentFragment.prototype, ic);
        Zb ? (R(Document.prototype, hc), R(Document.prototype, ["activeElement"])) : cc(Document.prototype, a);
        R(Document.prototype, ["importNode", "getElementById"]);
        R(Document.prototype, ic)
    };
    var kc = Q({get childNodes() { return this.__shady_childNodes }, get firstChild() { return this.__shady_firstChild }, get lastChild() { return this.__shady_lastChild }, get childElementCount() { return this.__shady_childElementCount }, get children() { return this.__shady_children }, get firstElementChild() { return this.__shady_firstElementChild }, get lastElementChild() { return this.__shady_lastElementChild }, get shadowRoot() { return this.__shady_shadowRoot } }),
        lc = Q({get textContent() { return this.__shady_textContent },
            set textContent(a) {
                this.__shady_textContent =
                    a
            },
            get innerHTML() { return this.__shady_innerHTML },
            set innerHTML(a) { return this.__shady_innerHTML = a }
        }),
        mc = Q({get parentElement() { return this.__shady_parentElement },
            get parentNode() { return this.__shady_parentNode },
            get nextSibling() { return this.__shady_nextSibling },
            get previousSibling() { return this.__shady_previousSibling },
            get nextElementSibling() { return this.__shady_nextElementSibling },
            get previousElementSibling() { return this.__shady_previousElementSibling },
            get className() { return this.__shady_className },
            set className(a) { return this.__shady_className = a }
        });

    function nc(a) {
        for (var b in a) {
            var c = a[b];
            c && (c.enumerable = !1)
        }
    }
    nc(kc);
    nc(lc);
    nc(mc);
    var oc = M.D || !0 === M.G,
        pc = oc ? function() {} : function(a) {
            var b = B(a);
            b.Aa || (b.Aa = !0, Gb(a, mc))
        },
        qc = oc ? function() {} : function(a) {
            var b = B(a);
            b.za || (b.za = !0, Gb(a, kc), window.customElements && !M.G || Gb(a, lc))
        };
    var rc = "__eventWrappers" + Date.now(),
        sc = function() { var a = Object.getOwnPropertyDescriptor(Event.prototype, "composed"); return a ? function(b) { return a.get.call(b) } : null }(),
        tc = function() {
            function a() {}
            var b = !1,
                c = {get capture() { b = !0; return !1 } };
            window.addEventListener("test", a, c);
            window.removeEventListener("test", a, c);
            return b
        }();

    function uc(a) { if (a && "object" === typeof a) { var b = !!a.capture; var c = !!a.once; var d = !!a.passive; var e = a.O } else b = !!a, d = c = !1; return { wa: e, capture: b, once: c, passive: d, ua: tc ? a : b } }
    var vc = {
            blur: !0,
            focus: !0,
            focusin: !0,
            focusout: !0,
            click: !0,
            dblclick: !0,
            mousedown: !0,
            mouseenter: !0,
            mouseleave: !0,
            mousemove: !0,
            mouseout: !0,
            mouseover: !0,
            mouseup: !0,
            wheel: !0,
            beforeinput: !0,
            input: !0,
            keydown: !0,
            keyup: !0,
            compositionstart: !0,
            compositionupdate: !0,
            compositionend: !0,
            touchstart: !0,
            touchend: !0,
            touchmove: !0,
            touchcancel: !0,
            pointerover: !0,
            pointerenter: !0,
            pointerdown: !0,
            pointermove: !0,
            pointerup: !0,
            pointercancel: !0,
            pointerout: !0,
            pointerleave: !0,
            gotpointercapture: !0,
            lostpointercapture: !0,
            dragstart: !0,
            drag: !0,
            dragenter: !0,
            dragleave: !0,
            dragover: !0,
            drop: !0,
            dragend: !0,
            DOMActivate: !0,
            DOMFocusIn: !0,
            DOMFocusOut: !0,
            keypress: !0
        },
        wc = { DOMAttrModified: !0, DOMAttributeNameChanged: !0, DOMCharacterDataModified: !0, DOMElementNameChanged: !0, DOMNodeInserted: !0, DOMNodeInsertedIntoDocument: !0, DOMNodeRemoved: !0, DOMNodeRemovedFromDocument: !0, DOMSubtreeModified: !0 };

    function xc(a) { return a instanceof Node ? a.__shady_getRootNode() : a }

    function yc(a, b) {
        var c = [],
            d = a;
        for (a = xc(a); d;) c.push(d), d.__shady_assignedSlot ? d = d.__shady_assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d = d.host : d = d.__shady_parentNode;
        c[c.length - 1] === document && c.push(window);
        return c
    }

    function zc(a) { a.__composedPath || (a.__composedPath = yc(a.target, !0)); return a.__composedPath }

    function Ac(a, b) {
        if (!O) return a;
        a = yc(a, !0);
        for (var c = 0, d, e = void 0, f, g = void 0; c < b.length; c++)
            if (d = b[c], f = xc(d), f !== e && (g = a.indexOf(f), e = f), !O(f) || -1 < g) return d
    }

    function Bc(a) {
        function b(c, d) {
            c = new a(c, d);
            c.__composed = d && !!d.composed;
            return c
        }
        b.__proto__ = a;
        b.prototype = a.prototype;
        return b
    }
    var Cc = { focus: !0, blur: !0 };

    function Dc(a) { return a.__target !== a.target || a.__relatedTarget !== a.relatedTarget }

    function Ec(a, b, c) {
        if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c])
            for (var d = 0, e;
                (e = c[d]) && (!Dc(a) || a.target !== a.relatedTarget) && (e.call(b, a), !a.__immediatePropagationStopped); d++);
    }

    function Fc(a) {
        var b = a.composedPath();
        Object.defineProperty(a, "currentTarget", { get: function() { return d }, configurable: !0 });
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c];
            Ec(a, d, "capture");
            if (a.ea) return
        }
        Object.defineProperty(a, "eventPhase", { get: function() { return Event.AT_TARGET } });
        var e;
        for (c = 0; c < b.length; c++) {
            d = b[c];
            var f = L(d);
            f = f && f.root;
            if (0 === c || f && f === e)
                if (Ec(a, d, "bubble"), d !== window && (e = d.__shady_getRootNode()), a.ea) break
        }
    }

    function Gc(a, b, c, d, e, f) {
        for (var g = 0; g < a.length; g++) {
            var h = a[g],
                k = h.type,
                l = h.capture,
                m = h.once,
                q = h.passive;
            if (b === h.node && c === k && d === l && e === m && f === q) return g
        }
        return -1
    }

    function Hc(a) { Kb(); return this.__shady_native_dispatchEvent(a) }

    function Ic(a, b, c) {
        var d = uc(c),
            e = d.capture,
            f = d.once,
            g = d.passive,
            h = d.wa;
        d = d.ua;
        if (b) {
            var k = typeof b;
            if ("function" === k || "object" === k)
                if ("object" !== k || b.handleEvent && "function" === typeof b.handleEvent) {
                    if (wc[a]) return this.__shady_native_addEventListener(a, b, d);
                    var l = h || this;
                    if (h = b[rc]) { if (-1 < Gc(h, l, a, e, f, g)) return } else b[rc] = [];
                    h = function(m) {
                        f && this.__shady_removeEventListener(a, b, c);
                        m.__target || Jc(m);
                        if (l !== this) {
                            var q = Object.getOwnPropertyDescriptor(m, "currentTarget");
                            Object.defineProperty(m, "currentTarget", { get: function() { return l }, configurable: !0 })
                        }
                        m.__previousCurrentTarget = m.currentTarget;
                        if (!O(l) && "slot" !== l.localName || -1 != m.composedPath().indexOf(l))
                            if (m.composed || -1 < m.composedPath().indexOf(l))
                                if (Dc(m) && m.target === m.relatedTarget) m.eventPhase === Event.BUBBLING_PHASE && m.stopImmediatePropagation();
                                else if (m.eventPhase === Event.CAPTURING_PHASE || m.bubbles || m.target === l || l instanceof Window) {
                            var H = "function" === k ? b.call(l, m) : b.handleEvent && b.handleEvent(m);
                            l !== this && (q ? (Object.defineProperty(m, "currentTarget",
                                q), q = null) : delete m.currentTarget);
                            return H
                        }
                    };
                    b[rc].push({ node: l, type: a, capture: e, once: f, passive: g, $a: h });
                    Cc[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || { capture: [], bubble: [] }, this.__handlers[a][e ? "capture" : "bubble"].push(h)) : this.__shady_native_addEventListener(a, h, d)
                }
        }
    }

    function Kc(a, b, c) {
        if (b) {
            var d = uc(c);
            c = d.capture;
            var e = d.once,
                f = d.passive,
                g = d.wa;
            d = d.ua;
            if (wc[a]) return this.__shady_native_removeEventListener(a, b, d);
            var h = g || this;
            g = void 0;
            var k = null;
            try { k = b[rc] } catch (l) {}
            k && (e = Gc(k, h, a, c, e, f), -1 < e && (g = k.splice(e, 1)[0].$a, k.length || (b[rc] = void 0)));
            this.__shady_native_removeEventListener(a, g || b, d);
            g && Cc[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][c ? "capture" : "bubble"], b = a.indexOf(g), -1 < b && a.splice(b, 1))
        }
    }

    function Lc() { for (var a in Cc) window.__shady_native_addEventListener(a, function(b) { b.__target || (Jc(b), Fc(b)) }, !0) }
    var Mc = Q({get composed() { void 0 === this.__composed && (sc ? this.__composed = "focusin" === this.type || "focusout" === this.type || sc(this) : !1 !== this.isTrusted && (this.__composed = vc[this.type])); return this.__composed || !1 },
        composedPath: function() { this.__composedPath || (this.__composedPath = yc(this.__target, this.composed)); return this.__composedPath },
        get target() { return Ac(this.currentTarget || this.__previousCurrentTarget, this.composedPath()) },
        get relatedTarget() {
            if (!this.__relatedTarget) return null;
            this.__relatedTargetComposedPath ||
                (this.__relatedTargetComposedPath = yc(this.__relatedTarget, !0));
            return Ac(this.currentTarget || this.__previousCurrentTarget, this.__relatedTargetComposedPath)
        },
        stopPropagation: function() {
            Event.prototype.stopPropagation.call(this);
            this.ea = !0
        },
        stopImmediatePropagation: function() {
            Event.prototype.stopImmediatePropagation.call(this);
            this.ea = this.__immediatePropagationStopped = !0
        }
    });

    function Jc(a) {
        a.__target = a.target;
        a.__relatedTarget = a.relatedTarget;
        if (M.D) {
            var b = Object.getPrototypeOf(a);
            if (!b.hasOwnProperty("__shady_patchedProto")) {
                var c = Object.create(b);
                c.__shady_sourceProto = b;
                P(c, Mc);
                b.__shady_patchedProto = c
            }
            a.__proto__ = b.__shady_patchedProto
        } else P(a, Mc)
    }
    var Nc = Bc(Event),
        Oc = Bc(CustomEvent),
        Pc = Bc(MouseEvent);

    function Qc() {
        if (!sc && Object.getOwnPropertyDescriptor(Event.prototype, "isTrusted")) {
            var a = function() {
                var b = new MouseEvent("click", { bubbles: !0, cancelable: !0, composed: !0 });
                this.__shady_dispatchEvent(b)
            };
            Element.prototype.click ? Element.prototype.click = a : HTMLElement.prototype.click && (HTMLElement.prototype.click = a)
        }
    }
    var Rc = Object.getOwnPropertyNames(Document.prototype).filter(function(a) { return "on" === a.substring(0, 2) });

    function Sc(a, b) { return { index: a, X: [], aa: b } }

    function Tc(a, b, c, d) {
        var e = 0,
            f = 0,
            g = 0,
            h = 0,
            k = Math.min(b - e, d - f);
        if (0 == e && 0 == f) a: {
            for (g = 0; g < k; g++)
                if (a[g] !== c[g]) break a;g = k
        }
        if (b == a.length && d == c.length) {
            h = a.length;
            for (var l = c.length, m = 0; m < k - g && Uc(a[--h], c[--l]);) m++;
            h = m
        }
        e += g;
        f += g;
        b -= h;
        d -= h;
        if (0 == b - e && 0 == d - f) return [];
        if (e == b) { for (b = Sc(e, 0); f < d;) b.X.push(c[f++]); return [b] }
        if (f == d) return [Sc(e, b - e)];
        k = e;
        g = f;
        d = d - g + 1;
        h = b - k + 1;
        b = Array(d);
        for (l = 0; l < d; l++) b[l] = Array(h), b[l][0] = l;
        for (l = 0; l < h; l++) b[0][l] = l;
        for (l = 1; l < d; l++)
            for (m = 1; m < h; m++)
                if (a[k + m - 1] === c[g + l - 1]) b[l][m] =
                    b[l - 1][m - 1];
                else {
                    var q = b[l - 1][m] + 1,
                        H = b[l][m - 1] + 1;
                    b[l][m] = q < H ? q : H
                }
        k = b.length - 1;
        g = b[0].length - 1;
        d = b[k][g];
        for (a = []; 0 < k || 0 < g;) 0 == k ? (a.push(2), g--) : 0 == g ? (a.push(3), k--) : (h = b[k - 1][g - 1], l = b[k - 1][g], m = b[k][g - 1], q = l < m ? l < h ? l : h : m < h ? m : h, q == h ? (h == d ? a.push(0) : (a.push(1), d = h), k--, g--) : q == l ? (a.push(3), k--, d = l) : (a.push(2), g--, d = m));
        a.reverse();
        b = void 0;
        k = [];
        for (g = 0; g < a.length; g++) switch (a[g]) {
            case 0:
                b && (k.push(b), b = void 0);
                e++;
                f++;
                break;
            case 1:
                b || (b = Sc(e, 0));
                b.aa++;
                e++;
                b.X.push(c[f]);
                f++;
                break;
            case 2:
                b || (b = Sc(e,
                    0));
                b.aa++;
                e++;
                break;
            case 3:
                b || (b = Sc(e, 0)), b.X.push(c[f]), f++
        }
        b && k.push(b);
        return k
    }

    function Uc(a, b) { return a === b };
    var Vc = Q({ dispatchEvent: Hc, addEventListener: Ic, removeEventListener: Kc });
    var Wc = null;

    function Xc() { Wc || (Wc = window.ShadyCSS && window.ShadyCSS.ScopingShim); return Wc || null }

    function Yc(a, b, c) { var d = Xc(); return d && "class" === b ? (d.setElementClass(a, c), !0) : !1 }

    function Zc(a, b) {
        var c = Xc();
        c && c.unscopeNode(a, b)
    }

    function $c(a, b) { var c = Xc(); if (!c) return !0; if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE) { c = !0; for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) c = c && $c(a, b); return c } return a.nodeType !== Node.ELEMENT_NODE ? !0 : c.currentScopeForNode(a) === b }

    function ad(a) { if (a.nodeType !== Node.ELEMENT_NODE) return ""; var b = Xc(); return b ? b.currentScopeForNode(a) : "" }

    function bd(a, b) {
        if (a)
            for (a.nodeType === Node.ELEMENT_NODE && b(a), a = a.__shady_firstChild; a; a = a.__shady_nextSibling) a.nodeType === Node.ELEMENT_NODE && bd(a, b)
    };
    var cd = window.document,
        dd = M.ma,
        ed = Object.getOwnPropertyDescriptor(Node.prototype, "isConnected"),
        fd = ed && ed.get;

    function gd(a) { for (var b; b = a.__shady_firstChild;) a.__shady_removeChild(b) }

    function hd(a) {
        var b = L(a);
        if (b && void 0 !== b.da)
            for (b = a.__shady_firstChild; b; b = b.__shady_nextSibling) hd(b);
        if (a = L(a)) a.da = void 0
    }

    function id(a) {
        var b = a;
        a && "slot" === a.localName && (b = (b = (b = L(a)) && b.T) && b.length ? b[0] : id(a.__shady_nextSibling));
        return b
    }

    function jd(a, b, c) {
        if (a = (a = L(a)) && a.W) {
            if (b)
                if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
                    for (var d = 0, e = b.childNodes.length; d < e; d++) a.addedNodes.push(b.childNodes[d]);
                else a.addedNodes.push(b);
            c && a.removedNodes.push(c);
            Mb(a)
        }
    }
    var qd = Q({get parentNode() {
            var a = L(this);
            a = a && a.parentNode;
            return void 0 !== a ? a : this.__shady_native_parentNode
        },
        get firstChild() {
            var a = L(this);
            a = a && a.firstChild;
            return void 0 !== a ? a : this.__shady_native_firstChild
        },
        get lastChild() {
            var a = L(this);
            a = a && a.lastChild;
            return void 0 !== a ? a : this.__shady_native_lastChild
        },
        get nextSibling() {
            var a = L(this);
            a = a && a.nextSibling;
            return void 0 !== a ? a : this.__shady_native_nextSibling
        },
        get previousSibling() {
            var a = L(this);
            a = a && a.previousSibling;
            return void 0 !== a ? a : this.__shady_native_previousSibling
        },
        get childNodes() {
            if (rb(this)) { var a = L(this); if (!a.childNodes) { a.childNodes = []; for (var b = this.__shady_firstChild; b; b = b.__shady_nextSibling) a.childNodes.push(b) } var c = a.childNodes } else c = this.__shady_native_childNodes;
            c.item = function(d) { return c[d] };
            return c
        },
        get parentElement() {
            var a = L(this);
            (a = a && a.parentNode) && a.nodeType !== Node.ELEMENT_NODE && (a = null);
            return void 0 !== a ? a : this.__shady_native_parentElement
        },
        get isConnected() {
            if (fd && fd.call(this)) return !0;
            if (this.nodeType == Node.DOCUMENT_FRAGMENT_NODE) return !1;
            var a = this.ownerDocument;
            if (Ab) { if (a.__shady_native_contains(this)) return !0 } else if (a.documentElement && a.documentElement.__shady_native_contains(this)) return !0;
            for (a = this; a && !(a instanceof Document);) a = a.__shady_parentNode || (O(a) ? a.host : void 0);
            return !!(a && a instanceof Document)
        },
        get textContent() { if (rb(this)) { for (var a = [], b = this.__shady_firstChild; b; b = b.__shady_nextSibling) b.nodeType !== Node.COMMENT_NODE && a.push(b.__shady_textContent); return a.join("") } return this.__shady_native_textContent },
        set textContent(a) {
            if ("undefined" ===
                typeof a || null === a) a = "";
            switch (this.nodeType) {
                case Node.ELEMENT_NODE:
                case Node.DOCUMENT_FRAGMENT_NODE:
                    if (!rb(this) && M.D) {
                        var b = this.__shady_firstChild;
                        (b != this.__shady_lastChild || b && b.nodeType != Node.TEXT_NODE) && gd(this);
                        this.__shady_native_textContent = a
                    } else gd(this), (0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.__shady_insertBefore(document.createTextNode(a));
                    break;
                default:
                    this.nodeValue = a
            }
        },
        insertBefore: function(a, b) {
            if (this.ownerDocument !== cd && a.ownerDocument !== cd) return this.__shady_native_insertBefore(a,
                b), a;
            if (a === this) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");
            if (b) {
                var c = L(b);
                c = c && c.parentNode;
                if (void 0 !== c && c !== this || void 0 === c && b.__shady_native_parentNode !== this) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
            }
            if (b === a) return a;
            jd(this, a);
            var d = [],
                e = (c = kd(this)) ? c.host.localName : ad(this),
                f = a.__shady_parentNode;
            if (f) {
                var g = ad(a);
                var h = !!c || !kd(a) ||
                    dd && void 0 !== this.__noInsertionPoint;
                f.__shady_removeChild(a, h)
            }
            f = !0;
            var k = (!dd || void 0 === a.__noInsertionPoint && void 0 === this.__noInsertionPoint) && !$c(a, e),
                l = c && !a.__noInsertionPoint && (!dd || a.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
            if (l || k) k && (g = g || ad(a)), bd(a, function(m) {
                l && "slot" === m.localName && d.push(m);
                if (k) {
                    var q = g;
                    Xc() && (q && Zc(m, q), (q = Xc()) && q.scopeNode(m, e))
                }
            });
            d.length && (ld(c), c.c.push.apply(c.c, d instanceof Array ? d : da(ca(d))), md(c));
            rb(this) && (nd(a, this, b), c = L(this), sb(this) ? (md(c.root),
                f = !1) : c.root && (f = !1));
            f ? (c = O(this) ? this.host : this, b ? (b = id(b), c.__shady_native_insertBefore(a, b)) : c.__shady_native_appendChild(a)) : a.ownerDocument !== this.ownerDocument && this.ownerDocument.adoptNode(a);
            return a
        },
        appendChild: function(a) { if (this != a || !O(a)) return this.__shady_insertBefore(a) },
        removeChild: function(a, b) {
            b = void 0 === b ? !1 : b;
            if (this.ownerDocument !== cd) return this.__shady_native_removeChild(a);
            if (a.__shady_parentNode !== this) throw Error("The node to be removed is not a child of this node: " + a);
            jd(this, null, a);
            var c = kd(a),
                d = c && od(c, a),
                e = L(this);
            if (rb(this) && (pd(a, this), sb(this))) { md(e.root); var f = !0 }
            if (Xc() && !b && c && a.nodeType !== Node.TEXT_NODE) {
                var g = ad(a);
                bd(a, function(h) { Zc(h, g) })
            }
            hd(a);
            c && ((b = this && "slot" === this.localName) && (f = !0), (d || b) && md(c));
            f || (f = O(this) ? this.host : this, (!e.root && "slot" !== a.localName || f === a.__shady_native_parentNode) && f.__shady_native_removeChild(a));
            return a
        },
        replaceChild: function(a, b) {
            this.__shady_insertBefore(a, b);
            this.__shady_removeChild(b);
            return a
        },
        cloneNode: function(a) {
            if ("template" ==
                this.localName) return this.__shady_native_cloneNode(a);
            var b = this.__shady_native_cloneNode(!1);
            if (a && b.nodeType !== Node.ATTRIBUTE_NODE) { a = this.__shady_firstChild; for (var c; a; a = a.__shady_nextSibling) c = a.__shady_cloneNode(!0), b.__shady_appendChild(c) }
            return b
        },
        getRootNode: function(a) {
            if (this && this.nodeType) {
                var b = B(this),
                    c = b.da;
                void 0 === c && (O(this) ? (c = this, b.da = c) : (c = (c = this.__shady_parentNode) ? c.__shady_getRootNode(a) : this, document.documentElement.__shady_native_contains(this) && (b.da = c)));
                return c
            }
        },
        contains: function(a) { return Bb(this, a) }
    });
    var sd = Q({get assignedSlot() {
            var a = this.__shady_parentNode;
            (a = a && a.__shady_shadowRoot) && rd(a);
            return (a = L(this)) && a.assignedSlot || null
        }
    });

    function td(a, b, c) {
        var d = [];
        vd(a, b, c, d);
        return d
    }

    function vd(a, b, c, d) {
        for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) {
            var e;
            if (e = a.nodeType === Node.ELEMENT_NODE) {
                e = a;
                var f = b,
                    g = c,
                    h = d,
                    k = f(e);
                k && h.push(e);
                g && g(k) ? e = k : (vd(e, f, g, h), e = void 0)
            }
            if (e) break
        }
    }
    var wd = Q({get firstElementChild() { var a = L(this); if (a && void 0 !== a.firstChild) { for (a = this.__shady_firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling; return a } return this.__shady_native_firstElementChild },
            get lastElementChild() { var a = L(this); if (a && void 0 !== a.lastChild) { for (a = this.__shady_lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling; return a } return this.__shady_native_lastElementChild },
            get children() {
                return rb(this) ? Cb(Array.prototype.filter.call(Eb(this),
                    function(a) { return a.nodeType === Node.ELEMENT_NODE })) : this.__shady_native_children
            },
            get childElementCount() { var a = this.__shady_children; return a ? a.length : 0 }
        }),
        xd = Q({
            querySelector: function(a) { return td(this, function(b) { return vb.call(b, a) }, function(b) { return !!b })[0] || null },
            querySelectorAll: function(a, b) {
                if (b) { b = Array.prototype.slice.call(this.__shady_native_querySelectorAll(a)); var c = this.__shady_getRootNode(); return Cb(b.filter(function(d) { return d.__shady_getRootNode() == c })) }
                return Cb(td(this, function(d) {
                    return vb.call(d,
                        a)
                }))
            }
        }),
        yd = M.ma && !M.G ? Object.assign({}, wd) : wd;
    Object.assign(wd, xd);
    var zd = window.document;

    function Ad(a, b) {
        if ("slot" === b) a = a.__shady_parentNode, sb(a) && md(L(a).root);
        else if ("slot" === a.localName && "name" === b && (b = kd(a))) {
            if (b.a) {
                Bd(b);
                var c = a.Ba,
                    d = Cd(a);
                if (d !== c) {
                    c = b.b[c];
                    var e = c.indexOf(a);
                    0 <= e && c.splice(e, 1);
                    c = b.b[d] || (b.b[d] = []);
                    c.push(a);
                    1 < c.length && (b.b[d] = Dd(c))
                }
            }
            md(b)
        }
    }
    var Ed = Q({get previousElementSibling() { var a = L(this); if (a && void 0 !== a.previousSibling) { for (a = this.__shady_previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_previousSibling; return a } return this.__shady_native_previousElementSibling },
            get nextElementSibling() { var a = L(this); if (a && void 0 !== a.nextSibling) { for (a = this.__shady_nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.__shady_nextSibling; return a } return this.__shady_native_nextElementSibling },
            get slot() { return this.getAttribute("slot") },
            set slot(a) { this.__shady_setAttribute("slot", a) },
            get className() { return this.getAttribute("class") || "" },
            set className(a) { this.__shady_setAttribute("class", a) },
            setAttribute: function(a, b) { this.ownerDocument !== zd ? this.__shady_native_setAttribute(a, b) : Yc(this, a, b) || (this.__shady_native_setAttribute(a, b), Ad(this, a)) },
            removeAttribute: function(a) {
                this.ownerDocument !== zd ? this.__shady_native_removeAttribute(a) : Yc(this, a, "") ? "" === this.getAttribute(a) && this.__shady_native_removeAttribute(a) : (this.__shady_native_removeAttribute(a),
                    Ad(this, a))
            }
        }),
        Jd = Q({
            attachShadow: function(a) {
                if (!this) throw Error("Must provide a host.");
                if (!a) throw Error("Not enough arguments.");
                if (a.shadyUpgradeFragment && !M.ya) {
                    var b = a.shadyUpgradeFragment;
                    b.__proto__ = ShadowRoot.prototype;
                    Fd(b, this, a);
                    Gd(b, b);
                    a = b.__noInsertionPoint ? null : b.querySelectorAll("slot");
                    b.__noInsertionPoint = void 0;
                    if (a && a.length) {
                        var c = b;
                        ld(c);
                        c.c.push.apply(c.c, a instanceof Array ? a : da(ca(a)));
                        md(b)
                    }
                    b.host.__shady_native_appendChild(b)
                } else b = new Hd(Id, this, a);
                return this.__CE_shadowRoot =
                    b
            },
            get shadowRoot() { var a = L(this); return a && a.Sa || null }
        });
    Object.assign(Ed, Jd);
    var Kd = document.implementation.createHTMLDocument("inert"),
        Ld = Q({get innerHTML() { return rb(this) ? Wb("template" === this.localName ? this.content : this, Eb) : this.__shady_native_innerHTML },
            set innerHTML(a) {
                if ("template" === this.localName) this.__shady_native_innerHTML = a;
                else {
                    gd(this);
                    var b = this.localName || "div";
                    b = this.namespaceURI && this.namespaceURI !== Kd.namespaceURI ? Kd.createElementNS(this.namespaceURI, b) : Kd.createElement(b);
                    for (M.D ? b.__shady_native_innerHTML = a : b.innerHTML = a; a = b.__shady_firstChild;) this.__shady_insertBefore(a)
                }
            }
        });
    var Md = Q({
        blur: function() {
            var a = L(this);
            (a = (a = a && a.root) && a.activeElement) ? a.__shady_blur(): this.__shady_native_blur()
        }
    });
    M.ma || Rc.forEach(function(a) {
        Md[a] = {
            set: function(b) {
                var c = B(this),
                    d = a.substring(2);
                c.N || (c.N = {});
                c.N[a] && this.removeEventListener(d, c.N[a]);
                this.__shady_addEventListener(d, b);
                c.N[a] = b
            },
            get: function() { var b = L(this); return b && b.N && b.N[a] },
            configurable: !0
        }
    });
    var Nd = Q({
        assignedNodes: function(a) {
            if ("slot" === this.localName) {
                var b = this.__shady_getRootNode();
                b && O(b) && rd(b);
                return (b = L(this)) ? (a && a.flatten ? b.T : b.assignedNodes) || [] : []
            }
        },
        addEventListener: function(a, b, c) {
            if ("slot" !== this.localName || "slotchange" === a) Ic.call(this, a, b, c);
            else {
                "object" !== typeof c && (c = { capture: !!c });
                var d = this.__shady_parentNode;
                if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
                c.O = this;
                d.__shady_addEventListener(a, b, c)
            }
        },
        removeEventListener: function(a,
            b, c) {
            if ("slot" !== this.localName || "slotchange" === a) Kc.call(this, a, b, c);
            else {
                "object" !== typeof c && (c = { capture: !!c });
                var d = this.__shady_parentNode;
                if (!d) throw Error("ShadyDOM cannot attach event to slot unless it has a `parentNode`");
                c.O = this;
                d.__shady_removeEventListener(a, b, c)
            }
        }
    });
    var Od = Q({ getElementById: function(a) { return "" === a ? null : td(this, function(b) { return b.id == a }, function(b) { return !!b })[0] || null } });
    var Pd = Q({get activeElement() { var a = M.D ? document.__shady_native_activeElement : document.activeElement; if (!a || !a.nodeType) return null; var b = !!O(this); if (!(this === document || b && this.host !== a && this.host.__shady_native_contains(a))) return null; for (b = kd(a); b && b !== this;) a = b.host, b = kd(a); return this === document ? b ? null : a : b === this ? a : null } });
    var Qd = window.document,
        Rd = Q({
            importNode: function(a, b) {
                if (a.ownerDocument !== Qd || "template" === a.localName) return this.__shady_native_importNode(a, b);
                var c = this.__shady_native_importNode(a, !1);
                if (b)
                    for (a = a.__shady_firstChild; a; a = a.__shady_nextSibling) b = this.__shady_importNode(a, !0), c.__shady_appendChild(b);
                return c
            }
        });
    var Sd = Q({ dispatchEvent: Hc, addEventListener: Ic.bind(window), removeEventListener: Kc.bind(window) });
    var Td = {};
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "parentElement") && (Td.parentElement = qd.parentElement);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "contains") && (Td.contains = qd.contains);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "children") && (Td.children = wd.children);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML") && (Td.innerHTML = Ld.innerHTML);
    Object.getOwnPropertyDescriptor(HTMLElement.prototype, "className") && (Td.className = Ed.className);
    var Ud = { EventTarget: [Vc], Node: [qd, window.EventTarget ? null : Vc], Text: [sd], Comment: [sd], CDATASection: [sd], ProcessingInstruction: [sd], Element: [Ed, wd, sd, !M.D || "innerHTML" in Element.prototype ? Ld : null, window.HTMLSlotElement ? null : Nd], HTMLElement: [Md, Td], HTMLSlotElement: [Nd], DocumentFragment: [yd, Od], Document: [Rd, yd, Od, Pd], Window: [Sd] },
        Vd = M.D ? null : ["innerHTML", "textContent"];

    function Wd(a, b, c, d) { b.forEach(function(e) { return a && e && P(a, e, c, d) }) }

    function Xd(a) {
        var b = a ? null : Vd,
            c;
        for (c in Ud) Wd(window[c] && window[c].prototype, Ud[c], a, b)
    }["Text", "Comment", "CDATASection", "ProcessingInstruction"].forEach(function(a) {
        var b = window[a],
            c = Object.create(b.prototype);
        c.__shady_protoIsPatched = !0;
        Wd(c, Ud.EventTarget);
        Wd(c, Ud.Node);
        Ud[a] && Wd(c, Ud[a]);
        b.prototype.__shady_patchedProto = c
    });

    function Yd(a) {
        a.__shady_protoIsPatched = !0;
        Wd(a, Ud.EventTarget);
        Wd(a, Ud.Node);
        Wd(a, Ud.Element);
        Wd(a, Ud.HTMLElement);
        Wd(a, Ud.HTMLSlotElement);
        return a
    };
    var Zd = M.la,
        $d = M.D;

    function ae(a, b) {
        if (Zd && !a.__shady_protoIsPatched && !O(a)) {
            var c = Object.getPrototypeOf(a),
                d = c.hasOwnProperty("__shady_patchedProto") && c.__shady_patchedProto;
            d || (d = Object.create(c), Yd(d), c.__shady_patchedProto = d);
            Object.setPrototypeOf(a, d)
        }
        $d || (1 === b ? pc(a) : 2 === b && qc(a))
    }

    function be(a, b, c, d) {
        ae(a, 1);
        d = d || null;
        var e = B(a),
            f = d ? B(d) : null;
        e.previousSibling = d ? f.previousSibling : b.__shady_lastChild;
        if (f = L(e.previousSibling)) f.nextSibling = a;
        if (f = L(e.nextSibling = d)) f.previousSibling = a;
        e.parentNode = b;
        d ? d === c.firstChild && (c.firstChild = a) : (c.lastChild = a, c.firstChild || (c.firstChild = a));
        c.childNodes = null
    }

    function nd(a, b, c) {
        ae(b, 2);
        var d = B(b);
        void 0 !== d.firstChild && (d.childNodes = null);
        if (a.nodeType === Node.DOCUMENT_FRAGMENT_NODE)
            for (a = a.__shady_native_firstChild; a; a = a.__shady_native_nextSibling) be(a, b, d, c);
        else be(a, b, d, c)
    }

    function pd(a, b) {
        var c = B(a);
        b = B(b);
        a === b.firstChild && (b.firstChild = c.nextSibling);
        a === b.lastChild && (b.lastChild = c.previousSibling);
        a = c.previousSibling;
        var d = c.nextSibling;
        a && (B(a).nextSibling = d);
        d && (B(d).previousSibling = a);
        c.parentNode = c.previousSibling = c.nextSibling = void 0;
        void 0 !== b.childNodes && (b.childNodes = null)
    }

    function Gd(a, b) {
        var c = B(a);
        if (b || void 0 === c.firstChild) {
            c.childNodes = null;
            var d = c.firstChild = a.__shady_native_firstChild;
            c.lastChild = a.__shady_native_lastChild;
            ae(a, 2);
            c = d;
            for (d = void 0; c; c = c.__shady_native_nextSibling) {
                var e = B(c);
                e.parentNode = b || a;
                e.nextSibling = c.__shady_native_nextSibling;
                e.previousSibling = d || null;
                d = c;
                ae(c, 1)
            }
        }
    };
    var ce = Q({
        addEventListener: function(a, b, c) {
            "object" !== typeof c && (c = { capture: !!c });
            c.O = c.O || this;
            this.host.__shady_addEventListener(a, b, c)
        },
        removeEventListener: function(a, b, c) {
            "object" !== typeof c && (c = { capture: !!c });
            c.O = c.O || this;
            this.host.__shady_removeEventListener(a, b, c)
        }
    });

    function de(a, b) {
        P(a, ce, b);
        P(a, Pd, b);
        P(a, Ld, b);
        P(a, wd, b);
        M.G && !b ? (P(a, qd, b), P(a, Od, b)) : M.D || (P(a, mc), P(a, kc), P(a, lc))
    };
    var Id = {},
        ee = M.deferConnectionCallbacks && "loading" === document.readyState,
        fe;

    function ge(a) {
        var b = [];
        do b.unshift(a); while (a = a.__shady_parentNode);
        return b
    }

    function Hd(a, b, c) {
        if (a !== Id) throw new TypeError("Illegal constructor");
        this.a = null;
        Fd(this, b, c)
    }

    function Fd(a, b, c) {
        a.host = b;
        a.mode = c && c.mode;
        Gd(a.host);
        b = B(a.host);
        b.root = a;
        b.Sa = "closed" !== a.mode ? a : null;
        b = B(a);
        b.firstChild = b.lastChild = b.parentNode = b.nextSibling = b.previousSibling = null;
        if (M.preferPerformance)
            for (; b = a.host.__shady_native_firstChild;) a.host.__shady_native_removeChild(b);
        else md(a)
    }

    function md(a) { a.R || (a.R = !0, Jb(function() { return rd(a) })) }

    function rd(a) {
        var b;
        if (b = a.R) {
            for (var c; a;) a: { a.R && (c = a), b = a;a = b.host.__shady_getRootNode(); if (O(a) && (b = L(b.host)) && 0 < b.Z) break a;a = void 0 }
            b = c
        }(c = b) && c._renderSelf()
    }
    Hd.prototype._renderSelf = function() {
        var a = ee;
        ee = !0;
        this.R = !1;
        if (this.a) {
            Bd(this);
            for (var b = 0, c; b < this.a.length; b++) {
                c = this.a[b];
                var d = L(c),
                    e = d.assignedNodes;
                d.assignedNodes = [];
                d.T = [];
                if (d.ra = e)
                    for (d = 0; d < e.length; d++) {
                        var f = L(e[d]);
                        f.fa = f.assignedSlot;
                        f.assignedSlot === c && (f.assignedSlot = null)
                    }
            }
            for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) he(this, b);
            for (b = 0; b < this.a.length; b++) {
                c = this.a[b];
                e = L(c);
                if (!e.assignedNodes.length)
                    for (d = c.__shady_firstChild; d; d = d.__shady_nextSibling) he(this,
                        d, c);
                (d = (d = L(c.__shady_parentNode)) && d.root) && (tb(d) || d.R) && d._renderSelf();
                ie(this, e.T, e.assignedNodes);
                if (d = e.ra) {
                    for (f = 0; f < d.length; f++) L(d[f]).fa = null;
                    e.ra = null;
                    d.length > e.assignedNodes.length && (e.ha = !0)
                }
                e.ha && (e.ha = !1, je(this, c))
            }
            c = this.a;
            b = [];
            for (e = 0; e < c.length; e++) d = c[e].__shady_parentNode, (f = L(d)) && f.root || !(0 > b.indexOf(d)) || b.push(d);
            for (c = 0; c < b.length; c++) {
                f = b[c];
                e = f === this ? this.host : f;
                d = [];
                for (f = f.__shady_firstChild; f; f = f.__shady_nextSibling)
                    if ("slot" == f.localName)
                        for (var g = L(f).T, h = 0; h <
                            g.length; h++) d.push(g[h]);
                    else d.push(f);
                f = Db(e);
                g = Tc(d, d.length, f, f.length);
                for (var k = h = 0, l = void 0; h < g.length && (l = g[h]); h++) {
                    for (var m = 0, q = void 0; m < l.X.length && (q = l.X[m]); m++) q.__shady_native_parentNode === e && e.__shady_native_removeChild(q), f.splice(l.index + k, 1);
                    k -= l.aa
                }
                k = 0;
                for (l = void 0; k < g.length && (l = g[k]); k++)
                    for (h = f[l.index], m = l.index; m < l.index + l.aa; m++) q = d[m], e.__shady_native_insertBefore(q, h), f.splice(m, 0, q)
            }
        }
        if (!M.preferPerformance && !this.qa)
            for (b = this.host.__shady_firstChild; b; b = b.__shady_nextSibling) c =
                L(b), b.__shady_native_parentNode !== this.host || "slot" !== b.localName && c.assignedSlot || this.host.__shady_native_removeChild(b);
        this.qa = !0;
        ee = a;
        fe && fe()
    };

    function he(a, b, c) {
        var d = B(b),
            e = d.fa;
        d.fa = null;
        c || (c = (a = a.b[b.__shady_slot || "__catchall"]) && a[0]);
        c ? (B(c).assignedNodes.push(b), d.assignedSlot = c) : d.assignedSlot = void 0;
        e !== d.assignedSlot && d.assignedSlot && (B(d.assignedSlot).ha = !0)
    }

    function ie(a, b, c) {
        for (var d = 0, e = void 0; d < c.length && (e = c[d]); d++)
            if ("slot" == e.localName) {
                var f = L(e).assignedNodes;
                f && f.length && ie(a, b, f)
            } else b.push(c[d])
    }

    function je(a, b) {
        b.__shady_native_dispatchEvent(new Event("slotchange"));
        b = L(b);
        b.assignedSlot && je(a, b.assignedSlot)
    }

    function ld(a) {
        a.c = a.c || [];
        a.a = a.a || [];
        a.b = a.b || {}
    }

    function Bd(a) {
        if (a.c && a.c.length) {
            for (var b = a.c, c, d = 0; d < b.length; d++) {
                var e = b[d];
                Gd(e);
                var f = e.__shady_parentNode;
                Gd(f);
                f = L(f);
                f.Z = (f.Z || 0) + 1;
                f = Cd(e);
                a.b[f] ? (c = c || {}, c[f] = !0, a.b[f].push(e)) : a.b[f] = [e];
                a.a.push(e)
            }
            if (c)
                for (var g in c) a.b[g] = Dd(a.b[g]);
            a.c = []
        }
    }

    function Cd(a) { var b = a.name || a.getAttribute("name") || "__catchall"; return a.Ba = b }

    function Dd(a) { return a.sort(function(b, c) { b = ge(b); for (var d = ge(c), e = 0; e < b.length; e++) { c = b[e]; var f = d[e]; if (c !== f) return b = Eb(c.__shady_parentNode), b.indexOf(c) - b.indexOf(f) } }) }

    function od(a, b) {
        if (a.a) {
            Bd(a);
            var c = a.b,
                d;
            for (d in c)
                for (var e = c[d], f = 0; f < e.length; f++) {
                    var g = e[f];
                    if (Bb(b, g)) {
                        e.splice(f, 1);
                        var h = a.a.indexOf(g);
                        0 <= h && (a.a.splice(h, 1), (h = L(g.__shady_parentNode)) && h.Z && h.Z--);
                        f--;
                        g = L(g);
                        if (h = g.T)
                            for (var k = 0; k < h.length; k++) {
                                var l = h[k],
                                    m = l.__shady_native_parentNode;
                                m && m.__shady_native_removeChild(l)
                            }
                        g.T = [];
                        g.assignedNodes = [];
                        h = !0
                    }
                }
            return h
        }
    }

    function tb(a) { Bd(a); return !(!a.a || !a.a.length) }
    (function(a) {
        a.__proto__ = DocumentFragment.prototype;
        de(a, "__shady_");
        de(a);
        Object.defineProperties(a, { nodeType: { value: Node.DOCUMENT_FRAGMENT_NODE, configurable: !0 }, nodeName: { value: "#document-fragment", configurable: !0 }, nodeValue: { value: null, configurable: !0 } });
        ["localName", "namespaceURI", "prefix"].forEach(function(b) { Object.defineProperty(a, b, { value: void 0, configurable: !0 }) });
        ["ownerDocument", "baseURI", "isConnected"].forEach(function(b) {
            Object.defineProperty(a, b, {
                get: function() { return this.host[b] },
                configurable: !0
            })
        })
    })(Hd.prototype);
    if (window.customElements && M.ia && !M.preferPerformance) {
        var ke = new Map;
        fe = function() {
            var a = [];
            ke.forEach(function(d, e) { a.push([e, d]) });
            ke.clear();
            for (var b = 0; b < a.length; b++) {
                var c = a[b][0];
                a[b][1] ? c.__shadydom_connectedCallback() : c.__shadydom_disconnectedCallback()
            }
        };
        ee && document.addEventListener("readystatechange", function() {
            ee = !1;
            fe()
        }, { once: !0 });
        var le = function(a, b, c) {
                var d = 0,
                    e = "__isConnected" + d++;
                if (b || c) a.prototype.connectedCallback = a.prototype.__shadydom_connectedCallback = function() {
                    ee ? ke.set(this, !0) : this[e] || (this[e] = !0, b && b.call(this))
                }, a.prototype.disconnectedCallback = a.prototype.__shadydom_disconnectedCallback = function() { ee ? this.isConnected || ke.set(this, !1) : this[e] && (this[e] = !1, c && c.call(this)) };
                return a
            },
            me = window.customElements.define,
            define = function(a, b) {
                var c = b.prototype.connectedCallback,
                    d = b.prototype.disconnectedCallback;
                me.call(window.customElements, a, le(b, c, d));
                b.prototype.connectedCallback = c;
                b.prototype.disconnectedCallback = d
            };
        window.customElements.define = define;
        Object.defineProperty(window.CustomElementRegistry.prototype,
            "define", { value: define, configurable: !0 })
    }

    function kd(a) { a = a.__shady_getRootNode(); if (O(a)) return a };

    function ne(a) { this.node = a }
    w = ne.prototype;
    w.addEventListener = function(a, b, c) { return this.node.__shady_addEventListener(a, b, c) };
    w.removeEventListener = function(a, b, c) { return this.node.__shady_removeEventListener(a, b, c) };
    w.appendChild = function(a) { return this.node.__shady_appendChild(a) };
    w.insertBefore = function(a, b) { return this.node.__shady_insertBefore(a, b) };
    w.removeChild = function(a) { return this.node.__shady_removeChild(a) };
    w.replaceChild = function(a, b) { return this.node.__shady_replaceChild(a, b) };
    w.cloneNode = function(a) { return this.node.__shady_cloneNode(a) };
    w.getRootNode = function(a) { return this.node.__shady_getRootNode(a) };
    w.contains = function(a) { return this.node.__shady_contains(a) };
    w.dispatchEvent = function(a) { return this.node.__shady_dispatchEvent(a) };
    w.setAttribute = function(a, b) { this.node.__shady_setAttribute(a, b) };
    w.getAttribute = function(a) { return this.node.__shady_native_getAttribute(a) };
    w.hasAttribute = function(a) { return this.node.__shady_native_hasAttribute(a) };
    w.removeAttribute = function(a) { this.node.__shady_removeAttribute(a) };
    w.attachShadow = function(a) { return this.node.__shady_attachShadow(a) };
    w.focus = function() { this.node.__shady_native_focus() };
    w.blur = function() { this.node.__shady_blur() };
    w.importNode = function(a, b) { if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_importNode(a, b) };
    w.getElementById = function(a) { if (this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_getElementById(a) };
    w.querySelector = function(a) { return this.node.__shady_querySelector(a) };
    w.querySelectorAll = function(a, b) { return this.node.__shady_querySelectorAll(a, b) };
    w.assignedNodes = function(a) { if ("slot" === this.node.localName) return this.node.__shady_assignedNodes(a) };
    ea.Object.defineProperties(ne.prototype, {
        activeElement: { configurable: !0, enumerable: !0, get: function() { if (O(this.node) || this.node.nodeType === Node.DOCUMENT_NODE) return this.node.__shady_activeElement } },
        _activeElement: { configurable: !0, enumerable: !0, get: function() { return this.activeElement } },
        host: { configurable: !0, enumerable: !0, get: function() { if (O(this.node)) return this.node.host } },
        parentNode: { configurable: !0, enumerable: !0, get: function() { return this.node.__shady_parentNode } },
        firstChild: {
            configurable: !0,
            enumerable: !0,
            get: function() { return this.node.__shady_firstChild }
        },
        lastChild: { configurable: !0, enumerable: !0, get: function() { return this.node.__shady_lastChild } },
        nextSibling: { configurable: !0, enumerable: !0, get: function() { return this.node.__shady_nextSibling } },
        previousSibling: { configurable: !0, enumerable: !0, get: function() { return this.node.__shady_previousSibling } },
        childNodes: { configurable: !0, enumerable: !0, get: function() { return this.node.__shady_childNodes } },
        parentElement: {
            configurable: !0,
            enumerable: !0,
            get: function() { return this.node.__shady_parentElement }
        },
        firstElementChild: { configurable: !0, enumerable: !0, get: function() { return this.node.__shady_firstElementChild } },
        lastElementChild: { configurable: !0, enumerable: !0, get: function() { return this.node.__shady_lastElementChild } },
        nextElementSibling: { configurable: !0, enumerable: !0, get: function() { return this.node.__shady_nextElementSibling } },
        previousElementSibling: { configurable: !0, enumerable: !0, get: function() { return this.node.__shady_previousElementSibling } },
        children: { configurable: !0, enumerable: !0, get: function() { return this.node.__shady_children } },
        childElementCount: { configurable: !0, enumerable: !0, get: function() { return this.node.__shady_childElementCount } },
        shadowRoot: { configurable: !0, enumerable: !0, get: function() { return this.node.__shady_shadowRoot } },
        assignedSlot: { configurable: !0, enumerable: !0, get: function() { return this.node.__shady_assignedSlot } },
        isConnected: { configurable: !0, enumerable: !0, get: function() { return this.node.__shady_isConnected } },
        innerHTML: {
            configurable: !0,
            enumerable: !0,
            get: function() { return this.node.__shady_innerHTML },
            set: function(a) { this.node.__shady_innerHTML = a }
        },
        textContent: { configurable: !0, enumerable: !0, get: function() { return this.node.__shady_textContent }, set: function(a) { this.node.__shady_textContent = a } },
        slot: { configurable: !0, enumerable: !0, get: function() { return this.node.__shady_slot }, set: function(a) { this.node.__shady_slot = a } },
        className: {
            configurable: !0,
            enumerable: !0,
            get: function() { return this.node.__shady_className },
            set: function(a) {
                return this.node.__shady_className =
                    a
            }
        }
    });
    Rc.forEach(function(a) { Object.defineProperty(ne.prototype, a, { get: function() { return this.node["__shady_" + a] }, set: function(b) { this.node["__shady_" + a] = b }, configurable: !0 }) });
    var oe = new WeakMap;

    function pe(a) {
        if (O(a) || a instanceof ne) return a;
        var b = oe.get(a);
        b || (b = new ne(a), oe.set(a, b));
        return b
    };
    if (M.ia) {
        var qe = M.D ? function(a) { return a } : function(a) {
                qc(a);
                pc(a);
                return a
            },
            ShadyDOM = {
                inUse: M.ia,
                patch: qe,
                isShadyRoot: O,
                enqueue: Jb,
                flush: Kb,
                flushInitial: function(a) {!a.qa && a.R && rd(a) },
                settings: M,
                filterMutations: Pb,
                observeChildren: Nb,
                unobserveChildren: Ob,
                deferConnectionCallbacks: M.deferConnectionCallbacks,
                preferPerformance: M.preferPerformance,
                handlesDynamicScoping: !0,
                wrap: M.G ? pe : qe,
                wrapIfNeeded: !0 === M.G ? pe : function(a) { return a },
                Wrapper: ne,
                composedPath: zc,
                noPatch: M.G,
                patchOnDemand: M.la,
                nativeMethods: $b,
                nativeTree: ac,
                patchElementProto: Yd
            };
        window.ShadyDOM = ShadyDOM;
        jc();
        Xd("__shady_");
        Object.defineProperty(document, "_activeElement", Pd.activeElement);
        P(Window.prototype, Sd, "__shady_");
        M.G ? M.la && P(Element.prototype, Jd) : (Xd(), Qc());
        Lc();
        window.Event = Nc;
        window.CustomEvent = Oc;
        window.MouseEvent = Pc;
        window.ShadowRoot = Hd
    };
    var re = window.Document.prototype.createElement,
        se = window.Document.prototype.createElementNS,
        te = window.Document.prototype.importNode,
        ue = window.Document.prototype.prepend,
        ve = window.Document.prototype.append,
        we = window.DocumentFragment.prototype.prepend,
        xe = window.DocumentFragment.prototype.append,
        ye = window.Node.prototype.cloneNode,
        ze = window.Node.prototype.appendChild,
        Ae = window.Node.prototype.insertBefore,
        Be = window.Node.prototype.removeChild,
        Ce = window.Node.prototype.replaceChild,
        De = Object.getOwnPropertyDescriptor(window.Node.prototype,
            "textContent"),
        Ee = window.Element.prototype.attachShadow,
        Fe = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
        Ge = window.Element.prototype.getAttribute,
        He = window.Element.prototype.setAttribute,
        Ie = window.Element.prototype.removeAttribute,
        Je = window.Element.prototype.getAttributeNS,
        Ke = window.Element.prototype.setAttributeNS,
        Le = window.Element.prototype.removeAttributeNS,
        Me = window.Element.prototype.insertAdjacentElement,
        Ne = window.Element.prototype.insertAdjacentHTML,
        Oe = window.Element.prototype.prepend,
        Pe = window.Element.prototype.append,
        Qe = window.Element.prototype.before,
        Re = window.Element.prototype.after,
        Se = window.Element.prototype.replaceWith,
        Te = window.Element.prototype.remove,
        Ue = window.HTMLElement,
        Ve = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
        We = window.HTMLElement.prototype.insertAdjacentElement,
        Xe = window.HTMLElement.prototype.insertAdjacentHTML;
    var Ye = new Set;
    "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ").forEach(function(a) { return Ye.add(a) });

    function Ze(a) {
        var b = Ye.has(a);
        a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
        return !b && a
    }
    var $e = document.contains ? document.contains.bind(document) : document.documentElement.contains.bind(document.documentElement);

    function T(a) { var b = a.isConnected; if (void 0 !== b) return b; if ($e(a)) return !0; for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0); return !(!a || !(a.__CE_isImportDocument || a instanceof Document)) }

    function af(a) {
        var b = a.children;
        if (b) return Array.prototype.slice.call(b);
        b = [];
        for (a = a.firstChild; a; a = a.nextSibling) a.nodeType === Node.ELEMENT_NODE && b.push(a);
        return b
    }

    function bf(a, b) { for (; b && b !== a && !b.nextSibling;) b = b.parentNode; return b && b !== a ? b.nextSibling : null }

    function cf(a, b, c) {
        for (var d = a; d;) {
            if (d.nodeType === Node.ELEMENT_NODE) {
                var e = d;
                b(e);
                var f = e.localName;
                if ("link" === f && "import" === e.getAttribute("rel")) {
                    d = e.import;
                    void 0 === c && (c = new Set);
                    if (d instanceof Node && !c.has(d))
                        for (c.add(d), d = d.firstChild; d; d = d.nextSibling) cf(d, b, c);
                    d = bf(a, e);
                    continue
                } else if ("template" === f) { d = bf(a, e); continue }
                if (e = e.__CE_shadowRoot)
                    for (e = e.firstChild; e; e = e.nextSibling) cf(e, b, c)
            }
            d = d.firstChild ? d.firstChild : bf(a, d)
        }
    }

    function U(a, b, c) { a[b] = c };

    function df(a) {
        var b = document;
        this.b = a;
        this.a = b;
        this.P = void 0;
        ef(this.b, this.a);
        "loading" === this.a.readyState && (this.P = new MutationObserver(this.c.bind(this)), this.P.observe(this.a, { childList: !0, subtree: !0 }))
    }

    function ff(a) { a.P && a.P.disconnect() }
    df.prototype.c = function(a) {
        var b = this.a.readyState;
        "interactive" !== b && "complete" !== b || ff(this);
        for (b = 0; b < a.length; b++)
            for (var c = a[b].addedNodes, d = 0; d < c.length; d++) ef(this.b, c[d])
    };

    function gf() {
        var a = this;
        this.a = this.w = void 0;
        this.b = new Promise(function(b) {
            a.a = b;
            a.w && b(a.w)
        })
    }
    gf.prototype.resolve = function(a) {
        if (this.w) throw Error("Already resolved.");
        this.w = a;
        this.a && this.a(a)
    };

    function V(a) {
        this.f = new Map;
        this.u = new Map;
        this.ta = new Map;
        this.U = !1;
        this.b = a;
        this.ja = new Map;
        this.c = function(b) { return b() };
        this.a = !1;
        this.F = [];
        this.va = a.f ? new df(a) : void 0
    }
    w = V.prototype;
    w.Qa = function(a, b) {
        var c = this;
        if (!(b instanceof Function)) throw new TypeError("Custom element constructor getters must be functions.");
        hf(this, a);
        this.f.set(a, b);
        this.F.push(a);
        this.a || (this.a = !0, this.c(function() { return jf(c) }))
    };
    w.define = function(a, b) {
        var c = this;
        if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
        hf(this, a);
        kf(this, a, b);
        this.F.push(a);
        this.a || (this.a = !0, this.c(function() { return jf(c) }))
    };

    function hf(a, b) { if (!Ze(b)) throw new SyntaxError("The element name '" + b + "' is not valid."); if (lf(a, b)) throw Error("A custom element with name '" + b + "' has already been defined."); if (a.U) throw Error("A custom element is already being defined."); }

    function kf(a, b, c) {
        a.U = !0;
        var d;
        try {
            var e = function(m) { var q = f[m]; if (void 0 !== q && !(q instanceof Function)) throw Error("The '" + m + "' callback must be a function."); return q },
                f = c.prototype;
            if (!(f instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
            var g = e("connectedCallback");
            var h = e("disconnectedCallback");
            var k = e("adoptedCallback");
            var l = (d = e("attributeChangedCallback")) && c.observedAttributes || []
        } catch (m) { throw m; } finally { a.U = !1 }
        c = {
            localName: b,
            constructorFunction: c,
            connectedCallback: g,
            disconnectedCallback: h,
            adoptedCallback: k,
            attributeChangedCallback: d,
            observedAttributes: l,
            constructionStack: []
        };
        a.u.set(b, c);
        a.ta.set(c.constructorFunction, c);
        return c
    }
    w.upgrade = function(a) { ef(this.b, a) };

    function jf(a) {
        if (!1 !== a.a) {
            a.a = !1;
            for (var b = [], c = a.F, d = new Map, e = 0; e < c.length; e++) d.set(c[e], []);
            ef(a.b, document, {
                upgrade: function(k) {
                    if (void 0 === k.__CE_state) {
                        var l = k.localName,
                            m = d.get(l);
                        m ? m.push(k) : a.u.has(l) && b.push(k)
                    }
                }
            });
            for (e = 0; e < b.length; e++) mf(a.b, b[e]);
            for (e = 0; e < c.length; e++) {
                for (var f = c[e], g = d.get(f), h = 0; h < g.length; h++) mf(a.b, g[h]);
                (f = a.ja.get(f)) && f.resolve(void 0)
            }
            c.length = 0
        }
    }
    w.get = function(a) { if (a = lf(this, a)) return a.constructorFunction };
    w.whenDefined = function(a) {
        if (!Ze(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name."));
        var b = this.ja.get(a);
        if (b) return b.b;
        b = new gf;
        this.ja.set(a, b);
        var c = this.u.has(a) || this.f.has(a);
        a = -1 === this.F.indexOf(a);
        c && a && b.resolve(void 0);
        return b.b
    };
    w.polyfillWrapFlushCallback = function(a) {
        this.va && ff(this.va);
        var b = this.c;
        this.c = function(c) { return a(function() { return b(c) }) }
    };

    function lf(a, b) { var c = a.u.get(b); if (c) return c; if (c = a.f.get(b)) { a.f.delete(b); try { return kf(a, b, c()) } catch (d) { nf(d) } } }
    window.CustomElementRegistry = V;
    V.prototype.define = V.prototype.define;
    V.prototype.upgrade = V.prototype.upgrade;
    V.prototype.get = V.prototype.get;
    V.prototype.whenDefined = V.prototype.whenDefined;
    V.prototype.polyfillDefineLazy = V.prototype.Qa;
    V.prototype.polyfillWrapFlushCallback = V.prototype.polyfillWrapFlushCallback;

    function of() {
        var a = pf && pf.noDocumentConstructionObserver,
            b = pf && pf.shadyDomFastWalk;
        this.b = [];
        this.c = [];
        this.a = !1;
        this.shadyDomFastWalk = b;
        this.f = !a
    }

    function qf(a, b, c, d) {
        var e = window.ShadyDOM;
        if (a.shadyDomFastWalk && e && e.inUse) {
            if (b.nodeType === Node.ELEMENT_NODE && c(b), b.querySelectorAll)
                for (a = e.nativeMethods.querySelectorAll.call(b, "*"), b = 0; b < a.length; b++) c(a[b])
        } else cf(b, c, d)
    }

    function rf(a, b) {
        a.a = !0;
        a.b.push(b)
    }

    function sf(a, b) {
        a.a = !0;
        a.c.push(b)
    }

    function tf(a, b) { a.a && qf(a, b, function(c) { return uf(a, c) }) }

    function uf(a, b) { if (a.a && !b.__CE_patched) { b.__CE_patched = !0; for (var c = 0; c < a.b.length; c++) a.b[c](b); for (c = 0; c < a.c.length; c++) a.c[c](b) } }

    function vf(a, b) {
        var c = [];
        qf(a, b, function(e) { return c.push(e) });
        for (b = 0; b < c.length; b++) {
            var d = c[b];
            1 === d.__CE_state ? a.connectedCallback(d) : mf(a, d)
        }
    }

    function wf(a, b) {
        var c = [];
        qf(a, b, function(e) { return c.push(e) });
        for (b = 0; b < c.length; b++) {
            var d = c[b];
            1 === d.__CE_state && a.disconnectedCallback(d)
        }
    }

    function ef(a, b, c) {
        c = void 0 === c ? {} : c;
        var d = c.Za,
            e = c.upgrade || function(g) { return mf(a, g) },
            f = [];
        qf(a, b, function(g) {
            a.a && uf(a, g);
            if ("link" === g.localName && "import" === g.getAttribute("rel")) {
                var h = g.import;
                h instanceof Node && (h.__CE_isImportDocument = !0, h.__CE_registry = document.__CE_registry);
                h && "complete" === h.readyState ? h.__CE_documentLoadHandled = !0 : g.addEventListener("load", function() {
                    var k = g.import;
                    if (!k.__CE_documentLoadHandled) {
                        k.__CE_documentLoadHandled = !0;
                        var l = new Set;
                        d && (d.forEach(function(m) { return l.add(m) }),
                            l.delete(k));
                        ef(a, k, { Za: l, upgrade: e })
                    }
                })
            } else f.push(g)
        }, d);
        for (b = 0; b < f.length; b++) e(f[b])
    }

    function mf(a, b) {
        try {
            var c = b.ownerDocument,
                d = c.__CE_registry;
            var e = d && (c.defaultView || c.__CE_isImportDocument) ? lf(d, b.localName) : void 0;
            if (e && void 0 === b.__CE_state) {
                e.constructionStack.push(b);
                try { try { if (new e.constructorFunction !== b) throw Error("The custom element constructor did not produce the element being upgraded."); } finally { e.constructionStack.pop() } } catch (k) { throw b.__CE_state = 2, k; }
                b.__CE_state = 1;
                b.__CE_definition = e;
                if (e.attributeChangedCallback && b.hasAttributes()) {
                    var f = e.observedAttributes;
                    for (e = 0; e < f.length; e++) {
                        var g = f[e],
                            h = b.getAttribute(g);
                        null !== h && a.attributeChangedCallback(b, g, null, h, null)
                    }
                }
                T(b) && a.connectedCallback(b)
            }
        } catch (k) { nf(k) }
    }
    of.prototype.connectedCallback = function(a) { var b = a.__CE_definition; if (b.connectedCallback) try { b.connectedCallback.call(a) } catch (c) { nf(c) } };
    of.prototype.disconnectedCallback = function(a) { var b = a.__CE_definition; if (b.disconnectedCallback) try { b.disconnectedCallback.call(a) } catch (c) { nf(c) } };
    of.prototype.attributeChangedCallback = function(a, b, c, d, e) { var f = a.__CE_definition; if (f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b)) try { f.attributeChangedCallback.call(a, b, c, d, e) } catch (g) { nf(g) } };

    function xf(a, b, c, d) {
        var e = b.__CE_registry;
        if (e && (null === d || "http://www.w3.org/1999/xhtml" === d) && (e = lf(e, c))) try {
            var f = new e.constructorFunction;
            if (void 0 === f.__CE_state || void 0 === f.__CE_definition) throw Error("Failed to construct '" + c + "': The returned value was not constructed with the HTMLElement constructor.");
            if ("http://www.w3.org/1999/xhtml" !== f.namespaceURI) throw Error("Failed to construct '" + c + "': The constructed element's namespace must be the HTML namespace.");
            if (f.hasAttributes()) throw Error("Failed to construct '" +
                c + "': The constructed element must not have any attributes.");
            if (null !== f.firstChild) throw Error("Failed to construct '" + c + "': The constructed element must not have any children.");
            if (null !== f.parentNode) throw Error("Failed to construct '" + c + "': The constructed element must not have a parent node.");
            if (f.ownerDocument !== b) throw Error("Failed to construct '" + c + "': The constructed element's owner document is incorrect.");
            if (f.localName !== c) throw Error("Failed to construct '" + c + "': The constructed element's local name is incorrect.");
            return f
        } catch (g) { return nf(g), b = null === d ? re.call(b, c) : se.call(b, d, c), Object.setPrototypeOf(b, HTMLUnknownElement.prototype), b.__CE_state = 2, b.__CE_definition = void 0, uf(a, b), b }
        b = null === d ? re.call(b, c) : se.call(b, d, c);
        uf(a, b);
        return b
    }

    function nf(a) {
        var b = a.message,
            c = a.sourceURL || a.fileName || "",
            d = a.line || a.lineNumber || 0,
            e = a.column || a.columnNumber || 0,
            f = void 0;
        void 0 === ErrorEvent.prototype.initErrorEvent ? f = new ErrorEvent("error", { cancelable: !0, message: b, filename: c, lineno: d, colno: e, error: a }) : (f = document.createEvent("ErrorEvent"), f.initErrorEvent("error", !1, !0, b, c, d), f.preventDefault = function() { Object.defineProperty(this, "defaultPrevented", { configurable: !0, get: function() { return !0 } }) });
        void 0 === f.error && Object.defineProperty(f, "error", { configurable: !0, enumerable: !0, get: function() { return a } });
        window.dispatchEvent(f);
        f.defaultPrevented || console.error(a)
    };
    var yf = new function() {};

    function zf(a) {
        window.HTMLElement = function() {
            function b() {
                var c = this.constructor;
                var d = document.__CE_registry.ta.get(c);
                if (!d) throw Error("Failed to construct a custom element: The constructor was not registered with `customElements`.");
                var e = d.constructionStack;
                if (0 === e.length) return e = re.call(document, d.localName), Object.setPrototypeOf(e, c.prototype), e.__CE_state = 1, e.__CE_definition = d, uf(a, e), e;
                var f = e.length - 1,
                    g = e[f];
                if (g === yf) throw Error("Failed to construct '" + d.localName + "': This element was already constructed.");
                e[f] = yf;
                Object.setPrototypeOf(g, c.prototype);
                uf(a, g);
                return g
            }
            b.prototype = Ue.prototype;
            Object.defineProperty(b.prototype, "constructor", { writable: !0, configurable: !0, enumerable: !1, value: b });
            return b
        }()
    };

    function Af(a, b, c) {
        function d(e) {
            return function(f) {
                for (var g = [], h = 0; h < arguments.length; ++h) g[h] = arguments[h];
                h = [];
                for (var k = [], l = 0; l < g.length; l++) {
                    var m = g[l];
                    m instanceof Element && T(m) && k.push(m);
                    if (m instanceof DocumentFragment)
                        for (m = m.firstChild; m; m = m.nextSibling) h.push(m);
                    else h.push(m)
                }
                e.apply(this, g);
                for (g = 0; g < k.length; g++) wf(a, k[g]);
                if (T(this))
                    for (g = 0; g < h.length; g++) k = h[g], k instanceof Element && vf(a, k)
            }
        }
        void 0 !== c.prepend && U(b, "prepend", d(c.prepend));
        void 0 !== c.append && U(b, "append", d(c.append))
    };

    function Bf(a) {
        U(Document.prototype, "createElement", function(b) { return xf(a, this, b, null) });
        U(Document.prototype, "importNode", function(b, c) {
            b = te.call(this, b, !!c);
            this.__CE_registry ? ef(a, b) : tf(a, b);
            return b
        });
        U(Document.prototype, "createElementNS", function(b, c) { return xf(a, this, c, b) });
        Af(a, Document.prototype, { prepend: ue, append: ve })
    };

    function Cf(a) {
        function b(c, d) {
            Object.defineProperty(c, "textContent", {
                enumerable: d.enumerable,
                configurable: !0,
                get: d.get,
                set: function(e) {
                    if (this.nodeType === Node.TEXT_NODE) d.set.call(this, e);
                    else {
                        var f = void 0;
                        if (this.firstChild) {
                            var g = this.childNodes,
                                h = g.length;
                            if (0 < h && T(this)) { f = Array(h); for (var k = 0; k < h; k++) f[k] = g[k] }
                        }
                        d.set.call(this, e);
                        if (f)
                            for (e = 0; e < f.length; e++) wf(a, f[e])
                    }
                }
            })
        }
        U(Node.prototype, "insertBefore", function(c, d) {
            if (c instanceof DocumentFragment) {
                var e = af(c);
                c = Ae.call(this, c, d);
                if (T(this))
                    for (d =
                        0; d < e.length; d++) vf(a, e[d]);
                return c
            }
            e = c instanceof Element && T(c);
            d = Ae.call(this, c, d);
            e && wf(a, c);
            T(this) && vf(a, c);
            return d
        });
        U(Node.prototype, "appendChild", function(c) {
            if (c instanceof DocumentFragment) {
                var d = af(c);
                c = ze.call(this, c);
                if (T(this))
                    for (var e = 0; e < d.length; e++) vf(a, d[e]);
                return c
            }
            d = c instanceof Element && T(c);
            e = ze.call(this, c);
            d && wf(a, c);
            T(this) && vf(a, c);
            return e
        });
        U(Node.prototype, "cloneNode", function(c) {
            c = ye.call(this, !!c);
            this.ownerDocument.__CE_registry ? ef(a, c) : tf(a, c);
            return c
        });
        U(Node.prototype,
            "removeChild",
            function(c) {
                var d = c instanceof Element && T(c),
                    e = Be.call(this, c);
                d && wf(a, c);
                return e
            });
        U(Node.prototype, "replaceChild", function(c, d) {
            if (c instanceof DocumentFragment) {
                var e = af(c);
                c = Ce.call(this, c, d);
                if (T(this))
                    for (wf(a, d), d = 0; d < e.length; d++) vf(a, e[d]);
                return c
            }
            e = c instanceof Element && T(c);
            var f = Ce.call(this, c, d),
                g = T(this);
            g && wf(a, d);
            e && wf(a, c);
            g && vf(a, c);
            return f
        });
        De && De.get ? b(Node.prototype, De) : rf(a, function(c) {
            b(c, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    for (var d = [], e = this.firstChild; e; e =
                        e.nextSibling) e.nodeType !== Node.COMMENT_NODE && d.push(e.textContent);
                    return d.join("")
                },
                set: function(d) {
                    for (; this.firstChild;) Be.call(this, this.firstChild);
                    null != d && "" !== d && ze.call(this, document.createTextNode(d))
                }
            })
        })
    };

    function Df(a) {
        function b(d) {
            return function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                g = [];
                for (var h = [], k = 0; k < f.length; k++) {
                    var l = f[k];
                    l instanceof Element && T(l) && h.push(l);
                    if (l instanceof DocumentFragment)
                        for (l = l.firstChild; l; l = l.nextSibling) g.push(l);
                    else g.push(l)
                }
                d.apply(this, f);
                for (f = 0; f < h.length; f++) wf(a, h[f]);
                if (T(this))
                    for (f = 0; f < g.length; f++) h = g[f], h instanceof Element && vf(a, h)
            }
        }
        var c = Element.prototype;
        void 0 !== Qe && U(c, "before", b(Qe));
        void 0 !== Re && U(c, "after", b(Re));
        void 0 !==
            Se && U(c, "replaceWith", function(d) {
                for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
                f = [];
                for (var g = [], h = 0; h < e.length; h++) {
                    var k = e[h];
                    k instanceof Element && T(k) && g.push(k);
                    if (k instanceof DocumentFragment)
                        for (k = k.firstChild; k; k = k.nextSibling) f.push(k);
                    else f.push(k)
                }
                h = T(this);
                Se.apply(this, e);
                for (e = 0; e < g.length; e++) wf(a, g[e]);
                if (h)
                    for (wf(a, this), e = 0; e < f.length; e++) g = f[e], g instanceof Element && vf(a, g)
            });
        void 0 !== Te && U(c, "remove", function() {
            var d = T(this);
            Te.call(this);
            d && wf(a, this)
        })
    };

    function Ef(a) {
        function b(e, f) {
            Object.defineProperty(e, "innerHTML", {
                enumerable: f.enumerable,
                configurable: !0,
                get: f.get,
                set: function(g) {
                    var h = this,
                        k = void 0;
                    T(this) && (k = [], qf(a, this, function(q) { q !== h && k.push(q) }));
                    f.set.call(this, g);
                    if (k)
                        for (var l = 0; l < k.length; l++) {
                            var m = k[l];
                            1 === m.__CE_state && a.disconnectedCallback(m)
                        }
                    this.ownerDocument.__CE_registry ? ef(a, this) : tf(a, this);
                    return g
                }
            })
        }

        function c(e, f) {
            U(e, "insertAdjacentElement", function(g, h) {
                var k = T(h);
                g = f.call(this, g, h);
                k && wf(a, h);
                T(g) && vf(a, h);
                return g
            })
        }

        function d(e, f) {
            function g(h, k) { for (var l = []; h !== k; h = h.nextSibling) l.push(h); for (k = 0; k < l.length; k++) ef(a, l[k]) }
            U(e, "insertAdjacentHTML", function(h, k) {
                h = h.toLowerCase();
                if ("beforebegin" === h) {
                    var l = this.previousSibling;
                    f.call(this, h, k);
                    g(l || this.parentNode.firstChild, this)
                } else if ("afterbegin" === h) l = this.firstChild, f.call(this, h, k), g(this.firstChild, l);
                else if ("beforeend" === h) l = this.lastChild, f.call(this, h, k), g(l || this.firstChild, null);
                else if ("afterend" === h) l = this.nextSibling, f.call(this, h, k), g(this.nextSibling,
                    l);
                else throw new SyntaxError("The value provided (" + String(h) + ") is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'.");
            })
        }
        Ee && U(Element.prototype, "attachShadow", function(e) { e = Ee.call(this, e); if (a.a && !e.__CE_patched) { e.__CE_patched = !0; for (var f = 0; f < a.b.length; f++) a.b[f](e) } return this.__CE_shadowRoot = e });
        Fe && Fe.get ? b(Element.prototype, Fe) : Ve && Ve.get ? b(HTMLElement.prototype, Ve) : sf(a, function(e) {
            b(e, {
                enumerable: !0,
                configurable: !0,
                get: function() { return ye.call(this, !0).innerHTML },
                set: function(f) {
                    var g = "template" === this.localName,
                        h = g ? this.content : this,
                        k = se.call(document, this.namespaceURI, this.localName);
                    for (k.innerHTML = f; 0 < h.childNodes.length;) Be.call(h, h.childNodes[0]);
                    for (f = g ? k.content : k; 0 < f.childNodes.length;) ze.call(h, f.childNodes[0])
                }
            })
        });
        U(Element.prototype, "setAttribute", function(e, f) {
            if (1 !== this.__CE_state) return He.call(this, e, f);
            var g = Ge.call(this, e);
            He.call(this, e, f);
            f = Ge.call(this, e);
            a.attributeChangedCallback(this, e, g, f, null)
        });
        U(Element.prototype, "setAttributeNS",
            function(e, f, g) {
                if (1 !== this.__CE_state) return Ke.call(this, e, f, g);
                var h = Je.call(this, e, f);
                Ke.call(this, e, f, g);
                g = Je.call(this, e, f);
                a.attributeChangedCallback(this, f, h, g, e)
            });
        U(Element.prototype, "removeAttribute", function(e) {
            if (1 !== this.__CE_state) return Ie.call(this, e);
            var f = Ge.call(this, e);
            Ie.call(this, e);
            null !== f && a.attributeChangedCallback(this, e, f, null, null)
        });
        U(Element.prototype, "removeAttributeNS", function(e, f) {
            if (1 !== this.__CE_state) return Le.call(this, e, f);
            var g = Je.call(this, e, f);
            Le.call(this,
                e, f);
            var h = Je.call(this, e, f);
            g !== h && a.attributeChangedCallback(this, f, g, h, e)
        });
        We ? c(HTMLElement.prototype, We) : Me && c(Element.prototype, Me);
        Xe ? d(HTMLElement.prototype, Xe) : Ne && d(Element.prototype, Ne);
        Af(a, Element.prototype, { prepend: Oe, append: Pe });
        Df(a)
    };
    var pf = window.customElements;

    function Ff() {
        var a = new of;
        zf(a);
        Bf(a);
        Af(a, DocumentFragment.prototype, { prepend: we, append: xe });
        Cf(a);
        Ef(a);
        a = new V(a);
        document.__CE_registry = a;
        Object.defineProperty(window, "customElements", { configurable: !0, enumerable: !0, value: a })
    }
    pf && !pf.forcePolyfill && "function" == typeof pf.define && "function" == typeof pf.get || Ff();
    window.__CE_installPolyfill = Ff;

    function Gf() {
        this.end = this.start = 0;
        this.rules = this.parent = this.previous = null;
        this.cssText = this.parsedCssText = "";
        this.atRule = !1;
        this.type = 0;
        this.parsedSelector = this.selector = this.keyframesName = ""
    }

    function Hf(a) {
        var b = a = a.replace(If, "").replace(Jf, ""),
            c = new Gf;
        c.start = 0;
        c.end = b.length;
        for (var d = c, e = 0, f = b.length; e < f; e++)
            if ("{" === b[e]) {
                d.rules || (d.rules = []);
                var g = d,
                    h = g.rules[g.rules.length - 1] || null;
                d = new Gf;
                d.start = e + 1;
                d.parent = g;
                d.previous = h;
                g.rules.push(d)
            } else "}" === b[e] && (d.end = e + 1, d = d.parent || c);
        return Kf(c, a)
    }

    function Kf(a, b) {
        var c = b.substring(a.start, a.end - 1);
        a.parsedCssText = a.cssText = c.trim();
        a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = Lf(c), c = c.replace(Mf, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = Nf : c.match(Of) && (a.type = Pf, a.keyframesName = a.selector.split(Mf).pop()) : a.type = 0 === c.indexOf("--") ? Qf : Rf);
        if (c = a.rules)
            for (var d = 0, e = c.length, f = void 0; d < e && (f = c[d]); d++) Kf(f,
                b);
        return a
    }

    function Lf(a) { return a.replace(/\\([0-9a-f]{1,6})\s/gi, function(b, c) { b = c; for (c = 6 - b.length; c--;) b = "0" + b; return "\\" + b }) }

    function Sf(a, b, c) {
        c = void 0 === c ? "" : c;
        var d = "";
        if (a.cssText || a.rules) {
            var e = a.rules,
                f;
            if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));
            if (f) { f = 0; for (var g = e.length, h = void 0; f < g && (h = e[f]); f++) d = Sf(h, b, d) } else b ? b = a.cssText : (b = a.cssText, b = b.replace(Tf, "").replace(Uf, ""), b = b.replace(Vf, "").replace(Wf, "")), (d = b.trim()) && (d = "  " + d + "\n")
        }
        d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n"));
        return c
    }
    var Rf = 1,
        Pf = 7,
        Nf = 4,
        Qf = 1E3,
        If = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
        Jf = /@import[^;]*;/gim,
        Tf = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
        Uf = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
        Vf = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
        Wf = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
        Of = /^@[^\s]*keyframes/,
        Mf = /\s+/g;
    var W = !(window.ShadyDOM && window.ShadyDOM.inUse),
        Xf;

    function Yf(a) { Xf = a && a.shimcssproperties ? !1 : W || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)")) }
    var Zf;
    window.ShadyCSS && void 0 !== window.ShadyCSS.cssBuild && (Zf = window.ShadyCSS.cssBuild);
    var $f = !(!window.ShadyCSS || !window.ShadyCSS.disableRuntime);
    window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? Xf = window.ShadyCSS.nativeCss : window.ShadyCSS ? (Yf(window.ShadyCSS), window.ShadyCSS = void 0) : Yf(window.WebComponents && window.WebComponents.flags);
    var Y = Xf;
    var ag = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
        bg = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
        dg = /(--[\w-]+)\s*([:,;)]|$)/gi,
        eg = /(animation\s*:)|(animation-name\s*:)/,
        fg = /@media\s(.*)/,
        gg = /\{[^}]*\}/g;
    var hg = new Set;

    function ig(a, b) {
        if (!a) return "";
        "string" === typeof a && (a = Hf(a));
        b && jg(a, b);
        return Sf(a, Y)
    }

    function kg(a) {!a.__cssRules && a.textContent && (a.__cssRules = Hf(a.textContent)); return a.__cssRules || null }

    function lg(a) { return !!a.parent && a.parent.type === Pf }

    function jg(a, b, c, d) {
        if (a) {
            var e = !1,
                f = a.type;
            if (d && f === Nf) {
                var g = a.selector.match(fg);
                g && (window.matchMedia(g[1]).matches || (e = !0))
            }
            f === Rf ? b(a) : c && f === Pf ? c(a) : f === Qf && (e = !0);
            if ((a = a.rules) && !e)
                for (e = 0, f = a.length, g = void 0; e < f && (g = a[e]); e++) jg(g, b, c, d)
        }
    }

    function mg(a, b, c, d) {
        var e = document.createElement("style");
        b && e.setAttribute("scope", b);
        e.textContent = a;
        ng(e, c, d);
        return e
    }
    var og = null;

    function pg(a) {
        a = document.createComment(" Shady DOM styles for " + a + " ");
        var b = document.head;
        b.insertBefore(a, (og ? og.nextSibling : null) || b.firstChild);
        return og = a
    }

    function ng(a, b, c) {
        b = b || document.head;
        b.insertBefore(a, c && c.nextSibling || b.firstChild);
        og ? a.compareDocumentPosition(og) === Node.DOCUMENT_POSITION_PRECEDING && (og = a) : og = a
    }

    function qg(a, b) {
        for (var c = 0, d = a.length; b < d; b++)
            if ("(" === a[b]) c++;
            else if (")" === a[b] && 0 === --c) return b;
        return -1
    }

    function rg(a, b) {
        var c = a.indexOf("var(");
        if (-1 === c) return b(a, "", "", "");
        var d = qg(a, c + 3),
            e = a.substring(c + 4, d);
        c = a.substring(0, c);
        a = rg(a.substring(d + 1), b);
        d = e.indexOf(",");
        return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a)
    }

    function sg(a, b) { W ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b) }
    var tg = window.ShadyDOM && window.ShadyDOM.wrap || function(a) { return a };

    function ug(a) {
        var b = a.localName,
            c = "";
        b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);
        return { is: b, Y: c }
    }

    function vg(a) {
        for (var b = [], c = "", d = 0; 0 <= d && d < a.length; d++)
            if ("(" === a[d]) {
                var e = qg(a, d);
                c += a.slice(d, e + 1);
                d = e
            } else "," === a[d] ? (b.push(c), c = "") : c += a[d];
        c && b.push(c);
        return b
    }

    function wg(a) {
        if (void 0 !== Zf) return Zf;
        if (void 0 === a.__cssBuild) {
            var b = a.getAttribute("css-build");
            if (b) a.__cssBuild = b;
            else {
                a: {
                    b = "template" === a.localName ? a.content.firstChild : a.firstChild;
                    if (b instanceof Comment && (b = b.textContent.trim().split(":"), "css-build" === b[0])) { b = b[1]; break a }
                    b = ""
                }
                if ("" !== b) {
                    var c = "template" === a.localName ? a.content.firstChild : a.firstChild;
                    c.parentNode.removeChild(c)
                }
                a.__cssBuild = b
            }
        }
        return a.__cssBuild || ""
    }

    function xg(a) { a = void 0 === a ? "" : a; return "" !== a && Y ? W ? "shadow" === a : "shady" === a : !1 };

    function yg() {}

    function zg(a, b) { Ag(Bg, a, function(c) { Cg(c, b || "") }) }

    function Ag(a, b, c) {
        b.nodeType === Node.ELEMENT_NODE && c(b);
        var d;
        "template" === b.localName ? d = (b.content || b._content || b).childNodes : d = b.children || b.childNodes;
        if (d)
            for (b = 0; b < d.length; b++) Ag(a, d[b], c)
    }

    function Cg(a, b, c) {
        if (b)
            if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));
            else if (a.getAttribute) {
            var d = a.getAttribute("class");
            c ? d && (b = d.replace("style-scope", "").replace(b, ""), sg(a, b)) : sg(a, (d ? d + " " : "") + "style-scope " + b)
        }
    }

    function Dg(a, b, c) {
        Ag(Bg, a, function(d) {
            Cg(d, b, !0);
            Cg(d, c)
        })
    }

    function Eg(a, b) { Ag(Bg, a, function(c) { Cg(c, b || "", !0) }) }

    function Fg(a, b, c, d, e) {
        var f = Bg;
        e = void 0 === e ? "" : e;
        "" === e && (W || "shady" === (void 0 === d ? "" : d) ? e = ig(b, c) : (a = ug(a), e = Gg(f, b, a.is, a.Y, c) + "\n\n"));
        return e.trim()
    }

    function Gg(a, b, c, d, e) {
        var f = Hg(c, d);
        c = c ? "." + c : "";
        return ig(b, function(g) {
            g.c || (g.selector = g.B = Ig(a, g, a.b, c, f), g.c = !0);
            e && e(g, c, f)
        })
    }

    function Hg(a, b) { return b ? "[is=" + a + "]" : a }

    function Ig(a, b, c, d, e) { var f = vg(b.selector); if (!lg(b)) { b = 0; for (var g = f.length, h = void 0; b < g && (h = f[b]); b++) f[b] = c.call(a, h, d, e) } return f.filter(function(k) { return !!k }).join(",") }

    function Jg(a) { return a.replace(Kg, function(b, c, d) {-1 < d.indexOf("+") ? d = d.replace(/\+/g, "___") : -1 < d.indexOf("___") && (d = d.replace(/___/g, "+")); return ":" + c + "(" + d + ")" }) }

    function Lg(a) {
        for (var b = [], c; c = a.match(Mg);) {
            var d = c.index,
                e = qg(a, d);
            if (-1 === e) throw Error(c.input + " selector missing ')'");
            c = a.slice(d, e + 1);
            a = a.replace(c, "\ue000");
            b.push(c)
        }
        return { oa: a, matches: b }
    }

    function Ng(a, b) { var c = a.split("\ue000"); return b.reduce(function(d, e, f) { return d + e + c[f + 1] }, c[0]) }
    yg.prototype.b = function(a, b, c) {
        var d = !1;
        a = a.trim();
        var e = Kg.test(a);
        e && (a = a.replace(Kg, function(h, k, l) { return ":" + k + "(" + l.replace(/\s/g, "") + ")" }), a = Jg(a));
        var f = Mg.test(a);
        if (f) {
            var g = Lg(a);
            a = g.oa;
            g = g.matches
        }
        a = a.replace(Og, ":host $1");
        a = a.replace(Pg, function(h, k, l) { d || (h = Qg(l, k, b, c), d = d || h.stop, k = h.Ga, l = h.value); return k + l });
        f && (a = Ng(a, g));
        e && (a = Jg(a));
        return a = a.replace(Rg, function(h, k, l, m) { return '[dir="' + l + '"] ' + k + m + ", " + k + '[dir="' + l + '"]' + m })
    };

    function Qg(a, b, c, d) {
        var e = a.indexOf("::slotted");
        0 <= a.indexOf(":host") ? a = Sg(a, d) : 0 !== e && (a = c ? Tg(a, c) : a);
        c = !1;
        0 <= e && (b = "", c = !0);
        if (c) {
            var f = !0;
            c && (a = a.replace(Ug, function(g, h) { return " > " + h }))
        }
        return { value: a, Ga: b, stop: f }
    }

    function Tg(a, b) {
        a = a.split(/(\[.+?\])/);
        for (var c = [], d = 0; d < a.length; d++)
            if (1 === d % 2) c.push(a[d]);
            else { var e = a[d]; if ("" !== e || d !== a.length - 1) e = e.split(":"), e[0] += b, c.push(e.join(":")) }
        return c.join("")
    }

    function Sg(a, b) { var c = a.match(Vg); return (c = c && c[2].trim() || "") ? c[0].match(Wg) ? a.replace(Vg, function(d, e, f) { return b + f }) : c.split(Wg)[0] === b ? c : "should_not_match" : a.replace(":host", b) }

    function Xg(a) { ":root" === a.selector && (a.selector = "html") }
    yg.prototype.c = function(a) { return a.match(":host") ? "" : a.match("::slotted") ? this.b(a, ":not(.style-scope)") : Tg(a.trim(), ":not(.style-scope)") };
    ea.Object.defineProperties(yg.prototype, { a: { configurable: !0, enumerable: !0, get: function() { return "style-scope" } } });
    var Kg = /:(nth[-\w]+)\(([^)]+)\)/,
        Pg = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
        Wg = /[[.:#*]/,
        Og = /^(::slotted)/,
        Vg = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
        Ug = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
        Rg = /(.*):dir\((?:(ltr|rtl))\)(.*)/,
        Mg = /:(?:matches|any|-(?:webkit|moz)-any)/,
        Bg = new yg;

    function Yg(a, b, c, d, e) {
        this.J = a || null;
        this.b = b || null;
        this.ka = c || [];
        this.H = null;
        this.cssBuild = e || "";
        this.Y = d || "";
        this.a = this.I = this.M = null
    }

    function Zg(a) { return a ? a.__styleInfo : null }

    function $g(a, b) { return a.__styleInfo = b }
    Yg.prototype.c = function() { return this.J };
    Yg.prototype._getStyleRules = Yg.prototype.c;

    function ah(a) { var b = this.matches || this.matchesSelector || this.mozMatchesSelector || this.msMatchesSelector || this.oMatchesSelector || this.webkitMatchesSelector; return b && b.call(this, a) }
    var bh = /:host\s*>\s*/,
        ch = navigator.userAgent.match("Trident");

    function dh() {}

    function eh(a) {
        var b = {},
            c = [],
            d = 0;
        jg(a, function(f) {
            fh(f);
            f.index = d++;
            f = f.A.cssText;
            for (var g; g = dg.exec(f);) { var h = g[1]; ":" !== g[2] && (b[h] = !0) }
        }, function(f) { c.push(f) });
        a.b = c;
        a = [];
        for (var e in b) a.push(e);
        return a
    }

    function fh(a) {
        if (!a.A) {
            var b = {},
                c = {};
            gh(a, c) && (b.L = c, a.rules = null);
            b.cssText = a.parsedCssText.replace(gg, "").replace(ag, "");
            a.A = b
        }
    }

    function gh(a, b) {
        var c = a.A;
        if (c) { if (c.L) return Object.assign(b, c.L), !0 } else {
            c = a.parsedCssText;
            for (var d; a = ag.exec(c);) {
                d = (a[2] || a[3]).trim();
                if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d;
                d = !0
            }
            return d
        }
    }

    function hh(a, b, c) {
        b && (b = 0 <= b.indexOf(";") ? ih(a, b, c) : rg(b, function(d, e, f, g) {
            if (!e) return d + g;
            (e = hh(a, c[e], c)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = hh(a, c[f] || f, c) || f;
            return d + (e || "") + g
        }));
        return b && b.trim() || ""
    }

    function ih(a, b, c) {
        b = b.split(";");
        for (var d = 0, e, f; d < b.length; d++)
            if (e = b[d]) {
                bg.lastIndex = 0;
                if (f = bg.exec(e)) e = hh(a, c[f[1]], c);
                else if (f = e.indexOf(":"), -1 !== f) {
                    var g = e.substring(f);
                    g = g.trim();
                    g = hh(a, g, c) || g;
                    e = e.substring(0, f) + g
                }
                b[d] = e && e.lastIndexOf(";") === e.length - 1 ? e.slice(0, -1) : e || ""
            }
        return b.join(";")
    }

    function jh(a, b) {
        var c = {},
            d = [];
        jg(a, function(e) {
            e.A || fh(e);
            var f = e.B || e.parsedSelector;
            b && e.A.L && f && ah.call(b, f) && (gh(e, c), e = e.index, f = parseInt(e / 32, 10), d[f] = (d[f] || 0) | 1 << e % 32)
        }, null, !0);
        return { L: c, key: d }
    }

    function kh(a, b, c, d) {
        b.A || fh(b);
        if (b.A.L) {
            var e = ug(a);
            a = e.is;
            e = e.Y;
            e = a ? Hg(a, e) : "html";
            var f = b.parsedSelector;
            var g = !!f.match(bh) || "html" === e && -1 < f.indexOf("html");
            var h = 0 === f.indexOf(":host") && !g;
            "shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e));
            if (g || h) c = e, h && (b.B || (b.B = Ig(Bg, b, Bg.b, a ? "." + a : "", e)), c = b.B || e), g && "html" === e && (c = b.B || b.u), d({ oa: c, Na: h, ab: g })
        }
    }

    function lh(a, b, c) {
        var d = {},
            e = {};
        jg(b, function(f) { kh(a, f, c, function(g) { ah.call(a._element || a, g.oa) && (g.Na ? gh(f, d) : gh(f, e)) }) }, null, !0);
        return { Ta: e, La: d }
    }

    function mh(a, b, c, d) {
        var e = ug(b),
            f = Hg(e.is, e.Y),
            g = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"),
            h = Zg(b);
        e = h.J;
        h = h.cssBuild;
        var k = nh(e, d);
        return Fg(b, e, function(l) {
            var m = "";
            l.A || fh(l);
            l.A.cssText && (m = ih(a, l.A.cssText, c));
            l.cssText = m;
            if (!W && !lg(l) && l.cssText) {
                var q = m = l.cssText;
                null == l.sa && (l.sa = eg.test(m));
                if (l.sa)
                    if (null == l.ca) { l.ca = []; for (var H in k) q = k[H], q = q(m), m !== q && (m = q, l.ca.push(H)) } else {
                        for (H = 0; H < l.ca.length; ++H) q = k[l.ca[H]], m = q(m);
                        q = m
                    }
                l.cssText = q;
                l.B =
                    l.B || l.selector;
                m = "." + d;
                H = vg(l.B);
                q = 0;
                for (var E = H.length, r = void 0; q < E && (r = H[q]); q++) H[q] = r.match(g) ? r.replace(f, m) : m + " " + r;
                l.selector = H.join(",")
            }
        }, h)
    }

    function nh(a, b) {
        a = a.b;
        var c = {};
        if (!W && a)
            for (var d = 0, e = a[d]; d < a.length; e = a[++d]) {
                var f = e,
                    g = b;
                f.f = new RegExp("\\b" + f.keyframesName + "(?!\\B|-)", "g");
                f.a = f.keyframesName + "-" + g;
                f.B = f.B || f.selector;
                f.selector = f.B.replace(f.keyframesName, f.a);
                c[e.keyframesName] = oh(e)
            }
        return c
    }

    function oh(a) { return function(b) { return b.replace(a.f, a.a) } }

    function ph(a, b) {
        var c = qh,
            d = kg(a);
        a.textContent = ig(d, function(e) {
            var f = e.cssText = e.parsedCssText;
            e.A && e.A.cssText && (f = f.replace(Tf, "").replace(Uf, ""), e.cssText = ih(c, f, b))
        })
    }
    ea.Object.defineProperties(dh.prototype, { a: { configurable: !0, enumerable: !0, get: function() { return "x-scope" } } });
    var qh = new dh;
    var rh = {},
        sh = window.customElements;
    if (sh && !W && !$f) {
        var th = sh.define;
        sh.define = function(a, b, c) {
            rh[a] || (rh[a] = pg(a));
            th.call(sh, a, b, c)
        }
    };

    function uh() { this.cache = {} }
    uh.prototype.store = function(a, b, c, d) {
        var e = this.cache[a] || [];
        e.push({ L: b, styleElement: c, I: d });
        100 < e.length && e.shift();
        this.cache[a] = e
    };

    function vh() {}
    var wh = new RegExp(Bg.a + "\\s*([^\\s]*)");

    function xh(a) { return (a = (a.classList && a.classList.value ? a.classList.value : a.getAttribute("class") || "").match(wh)) ? a[1] : "" }

    function yh(a) { var b = tg(a).getRootNode(); return b === a || b === a.ownerDocument ? "" : (a = b.host) ? ug(a).is : "" }

    function zh(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (c.target !== document.documentElement && c.target !== document.head)
                for (var d = 0; d < c.addedNodes.length; d++) {
                    var e = c.addedNodes[d];
                    if (e.nodeType === Node.ELEMENT_NODE) {
                        var f = e.getRootNode(),
                            g = xh(e);
                        if (g && f === e.ownerDocument && ("style" !== e.localName && "template" !== e.localName || "" === wg(e))) Eg(e, g);
                        else if (f instanceof ShadowRoot)
                            for (f = yh(e), f !== g && Dg(e, g, f), e = window.ShadyDOM.nativeMethods.querySelectorAll.call(e, ":not(." + Bg.a + ")"), g = 0; g < e.length; g++) {
                                f = e[g];
                                var h = yh(f);
                                h && Cg(f, h)
                            }
                    }
                }
        }
    }
    if (!(W || window.ShadyDOM && window.ShadyDOM.handlesDynamicScoping)) {
        var Ah = new MutationObserver(zh),
            Bh = function(a) { Ah.observe(a, { childList: !0, subtree: !0 }) };
        if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Bh(document);
        else {
            var Ch = function() { Bh(document.body) };
            window.HTMLImports ? window.HTMLImports.whenReady(Ch) : requestAnimationFrame(function() {
                if ("loading" === document.readyState) {
                    var a = function() {
                        Ch();
                        document.removeEventListener("readystatechange", a)
                    };
                    document.addEventListener("readystatechange",
                        a)
                } else Ch()
            })
        }
        vh = function() { zh(Ah.takeRecords()) }
    };
    var Dh = {};
    var Eh = Promise.resolve();

    function Fh(a) { if (a = Dh[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1 }

    function Gh(a) { return a._applyShimCurrentVersion === a._applyShimNextVersion }

    function Hh(a) {
        a._applyShimValidatingVersion = a._applyShimNextVersion;
        a._validating || (a._validating = !0, Eh.then(function() {
            a._applyShimCurrentVersion = a._applyShimNextVersion;
            a._validating = !1
        }))
    };
    var Ih = {},
        Jh = new uh;

    function Z() {
        this.F = {};
        this.c = document.documentElement;
        var a = new Gf;
        a.rules = [];
        this.f = $g(this.c, new Yg(a));
        this.u = !1;
        this.a = this.b = null
    }
    w = Z.prototype;
    w.flush = function() { vh() };
    w.Ja = function(a) { return kg(a) };
    w.Xa = function(a) { return ig(a) };
    w.prepareTemplate = function(a, b, c) {
        this.prepareTemplateDom(a, b);
        this.prepareTemplateStyles(a, b, c)
    };
    w.prepareTemplateStyles = function(a, b, c) {
        if (!a._prepared && !$f) {
            W || rh[b] || (rh[b] = pg(b));
            a._prepared = !0;
            a.name = b;
            a.extends = c;
            Dh[b] = a;
            var d = wg(a),
                e = xg(d);
            c = { is: b, extends: c };
            for (var f = [], g = a.content.querySelectorAll("style"), h = 0; h < g.length; h++) {
                var k = g[h];
                if (k.hasAttribute("shady-unscoped")) {
                    if (!W) {
                        var l = k.textContent;
                        hg.has(l) || (hg.add(l), l = k.cloneNode(!0), document.head.appendChild(l));
                        k.parentNode.removeChild(k)
                    }
                } else f.push(k.textContent), k.parentNode.removeChild(k)
            }
            f = f.join("").trim() + (Ih[b] || "");
            Kh(this);
            if (!e) {
                if (g = !d) g = bg.test(f) || ag.test(f), bg.lastIndex = 0, ag.lastIndex = 0;
                h = Hf(f);
                g && Y && this.b && this.b.transformRules(h, b);
                a._styleAst = h
            }
            g = [];
            Y || (g = eh(a._styleAst));
            if (!g.length || Y) h = W ? a.content : null, b = rh[b] || null, d = Fg(c, a._styleAst, null, d, e ? f : ""), d = d.length ? mg(d, c.is, h, b) : null, a._style = d;
            a.a = g
        }
    };
    w.Ra = function(a, b) { Ih[b] = a.join(" ") };
    w.prepareTemplateDom = function(a, b) {
        if (!$f) {
            var c = wg(a);
            W || "shady" === c || a._domPrepared || (a._domPrepared = !0, zg(a.content, b))
        }
    };

    function Lh(a) {
        var b = ug(a),
            c = b.is;
        b = b.Y;
        var d = rh[c] || null,
            e = Dh[c];
        if (e) {
            c = e._styleAst;
            var f = e.a;
            e = wg(e);
            b = new Yg(c, d, f, b, e);
            $g(a, b);
            return b
        }
    }

    function Mh(a) {
        !a.a && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.a = window.ShadyCSS.CustomStyleInterface, a.a.transformCallback = function(b) { a.xa(b) }, a.a.validateCallback = function() {
            requestAnimationFrame(function() {
                (a.a.enqueued || a.u) && a.flushCustomStyles()
            })
        })
    }

    function Kh(a) {
        if (!a.b && window.ShadyCSS && window.ShadyCSS.ApplyShim) {
            a.b = window.ShadyCSS.ApplyShim;
            a.b.invalidCallback = Fh;
            var b = !0
        } else b = !1;
        Mh(a);
        return b
    }
    w.flushCustomStyles = function() {
        if (!$f) {
            var a = Kh(this);
            if (this.a) {
                var b = this.a.processStyles();
                if ((a || this.a.enqueued) && !xg(this.f.cssBuild)) {
                    if (Y) {
                        if (!this.f.cssBuild)
                            for (a = 0; a < b.length; a++) {
                                var c = this.a.getStyleForCustomStyle(b[a]);
                                if (c && Y && this.b) {
                                    var d = kg(c);
                                    Kh(this);
                                    this.b.transformRules(d);
                                    c.textContent = ig(d)
                                }
                            }
                    } else {
                        Nh(this, b);
                        Oh(this, this.c, this.f);
                        for (a = 0; a < b.length; a++)(c = this.a.getStyleForCustomStyle(b[a])) && ph(c, this.f.M);
                        this.u && this.styleDocument()
                    }
                    this.a.enqueued = !1
                }
            }
        }
    };

    function Nh(a, b) {
        b = b.map(function(c) { return a.a.getStyleForCustomStyle(c) }).filter(function(c) { return !!c });
        b.sort(function(c, d) { c = d.compareDocumentPosition(c); return c & Node.DOCUMENT_POSITION_FOLLOWING ? 1 : c & Node.DOCUMENT_POSITION_PRECEDING ? -1 : 0 });
        a.f.J.rules = b.map(function(c) { return kg(c) })
    }
    w.styleElement = function(a, b) {
        if ($f) {
            if (b) {
                Zg(a) || $g(a, new Yg(null));
                var c = Zg(a);
                c.H = c.H || {};
                Object.assign(c.H, b);
                Ph(this, a, c)
            }
        } else if (c = Zg(a) || Lh(a))
            if (a !== this.c && (this.u = !0), b && (c.H = c.H || {}, Object.assign(c.H, b)), Y) Ph(this, a, c);
            else if (this.flush(), Oh(this, a, c), c.ka && c.ka.length) {
            b = ug(a).is;
            var d;
            a: {
                if (d = Jh.cache[b])
                    for (var e = d.length - 1; 0 <= e; e--) {
                        var f = d[e];
                        b: {
                            var g = c.ka;
                            for (var h = 0; h < g.length; h++) { var k = g[h]; if (f.L[k] !== c.M[k]) { g = !1; break b } }
                            g = !0
                        }
                        if (g) { d = f; break a }
                    }
                d = void 0
            }
            g = d ? d.styleElement :
                null;
            e = c.I;
            (f = d && d.I) || (f = this.F[b] = (this.F[b] || 0) + 1, f = b + "-" + f);
            c.I = f;
            f = c.I;
            h = qh;
            h = g ? g.textContent || "" : mh(h, a, c.M, f);
            k = Zg(a);
            var l = k.a;
            l && !W && l !== g && (l._useCount--, 0 >= l._useCount && l.parentNode && l.parentNode.removeChild(l));
            W ? k.a ? (k.a.textContent = h, g = k.a) : h && (g = mg(h, f, a.shadowRoot, k.b)) : g ? g.parentNode || (ch && -1 < h.indexOf("@media") && (g.textContent = h), ng(g, null, k.b)) : h && (g = mg(h, f, null, k.b));
            g && (g._useCount = g._useCount || 0, k.a != g && g._useCount++, k.a = g);
            f = g;
            W || (g = c.I, k = h = a.getAttribute("class") || "", e && (k =
                h.replace(new RegExp("\\s*x-scope\\s*" + e + "\\s*", "g"), " ")), k += (k ? " " : "") + "x-scope " + g, h !== k && sg(a, k));
            d || Jh.store(b, c.M, f, c.I)
        }
    };

    function Ph(a, b, c) {
        var d = ug(b).is;
        if (c.H) {
            var e = c.H,
                f;
            for (f in e) null === f ? b.style.removeProperty(f) : b.style.setProperty(f, e[f])
        }
        e = Dh[d];
        if (!(!e && b !== a.c || e && "" !== wg(e)) && e && e._style && !Gh(e)) {
            if (Gh(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) Kh(a), a.b && a.b.transformRules(e._styleAst, d), e._style.textContent = Fg(b, c.J), Hh(e);
            W && (a = b.shadowRoot) && (a = a.querySelector("style")) && (a.textContent = Fg(b, c.J));
            c.J = e._styleAst
        }
    }

    function Qh(a, b) { return (b = tg(b).getRootNode().host) ? Zg(b) || Lh(b) ? b : Qh(a, b) : a.c }

    function Oh(a, b, c) {
        var d = Qh(a, b),
            e = Zg(d),
            f = e.M;
        d === a.c || f || (Oh(a, d, e), f = e.M);
        a = Object.create(f || null);
        d = lh(b, c.J, c.cssBuild);
        b = jh(e.J, b).L;
        Object.assign(a, d.La, b, d.Ta);
        b = c.H;
        for (var g in b)
            if ((e = b[g]) || 0 === e) a[g] = e;
        g = qh;
        b = Object.getOwnPropertyNames(a);
        for (e = 0; e < b.length; e++) d = b[e], a[d] = hh(g, a[d], a);
        c.M = a
    }
    w.styleDocument = function(a) { this.styleSubtree(this.c, a) };
    w.styleSubtree = function(a, b) {
        var c = tg(a),
            d = c.shadowRoot,
            e = a === this.c;
        (d || e) && this.styleElement(a, b);
        if (a = e ? c : d)
            for (a = Array.from(a.querySelectorAll("*")).filter(function(f) { return tg(f).shadowRoot }), b = 0; b < a.length; b++) this.styleSubtree(a[b])
    };
    w.xa = function(a) {
        var b = this,
            c = wg(a);
        c !== this.f.cssBuild && (this.f.cssBuild = c);
        if (!xg(c)) {
            var d = kg(a);
            jg(d, function(e) {
                if (W) Xg(e);
                else {
                    var f = Bg;
                    e.selector = e.parsedSelector;
                    Xg(e);
                    e.selector = e.B = Ig(f, e, f.c, void 0, void 0)
                }
                Y && "" === c && (Kh(b), b.b && b.b.transformRule(e))
            });
            Y ? a.textContent = ig(d) : this.f.J.rules.push(d)
        }
    };
    w.getComputedStyleValue = function(a, b) {
        var c;
        Y || (c = (Zg(a) || Zg(Qh(this, a))).M[b]);
        return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : ""
    };
    w.Wa = function(a, b) {
        var c = tg(a).getRootNode(),
            d;
        b ? d = ("string" === typeof b ? b : String(b)).split(/\s/) : d = [];
        b = c.host && c.host.localName;
        if (!b && (c = a.getAttribute("class"))) {
            c = c.split(/\s/);
            for (var e = 0; e < c.length; e++)
                if (c[e] === Bg.a) { b = c[e + 1]; break }
        }
        b && d.push(Bg.a, b);
        Y || (b = Zg(a)) && b.I && d.push(qh.a, b.I);
        sg(a, d.join(" "))
    };
    w.Ea = function(a) { return Zg(a) };
    w.Va = function(a, b) { Cg(a, b) };
    w.Ya = function(a, b) { Cg(a, b, !0) };
    w.Ua = function(a) { return yh(a) };
    w.Ha = function(a) { return xh(a) };
    Z.prototype.flush = Z.prototype.flush;
    Z.prototype.prepareTemplate = Z.prototype.prepareTemplate;
    Z.prototype.styleElement = Z.prototype.styleElement;
    Z.prototype.styleDocument = Z.prototype.styleDocument;
    Z.prototype.styleSubtree = Z.prototype.styleSubtree;
    Z.prototype.getComputedStyleValue = Z.prototype.getComputedStyleValue;
    Z.prototype.setElementClass = Z.prototype.Wa;
    Z.prototype._styleInfoForNode = Z.prototype.Ea;
    Z.prototype.transformCustomStyleForDocument = Z.prototype.xa;
    Z.prototype.getStyleAst = Z.prototype.Ja;
    Z.prototype.styleAstToString = Z.prototype.Xa;
    Z.prototype.flushCustomStyles = Z.prototype.flushCustomStyles;
    Z.prototype.scopeNode = Z.prototype.Va;
    Z.prototype.unscopeNode = Z.prototype.Ya;
    Z.prototype.scopeForNode = Z.prototype.Ua;
    Z.prototype.currentScopeForNode = Z.prototype.Ha;
    Z.prototype.prepareAdoptedCssText = Z.prototype.Ra;
    Object.defineProperties(Z.prototype, { nativeShadow: { get: function() { return W } }, nativeCss: { get: function() { return Y } } });
    var Rh = new Z,
        Sh, Th;
    window.ShadyCSS && (Sh = window.ShadyCSS.ApplyShim, Th = window.ShadyCSS.CustomStyleInterface);
    window.ShadyCSS = {
        ScopingShim: Rh,
        prepareTemplate: function(a, b, c) {
            Rh.flushCustomStyles();
            Rh.prepareTemplate(a, b, c)
        },
        prepareTemplateDom: function(a, b) { Rh.prepareTemplateDom(a, b) },
        prepareTemplateStyles: function(a, b, c) {
            Rh.flushCustomStyles();
            Rh.prepareTemplateStyles(a, b, c)
        },
        styleSubtree: function(a, b) {
            Rh.flushCustomStyles();
            Rh.styleSubtree(a, b)
        },
        styleElement: function(a) {
            Rh.flushCustomStyles();
            Rh.styleElement(a)
        },
        styleDocument: function(a) {
            Rh.flushCustomStyles();
            Rh.styleDocument(a)
        },
        flushCustomStyles: function() { Rh.flushCustomStyles() },
        getComputedStyleValue: function(a, b) { return Rh.getComputedStyleValue(a, b) },
        nativeCss: Y,
        nativeShadow: W,
        cssBuild: Zf,
        disableRuntime: $f
    };
    Sh && (window.ShadyCSS.ApplyShim = Sh);
    Th && (window.ShadyCSS.CustomStyleInterface = Th);
    (function(a) {
        function b(r) { "" == r && (f.call(this), this.i = !0); return r.toLowerCase() }

        function c(r) { var F = r.charCodeAt(0); return 32 < F && 127 > F && -1 == [34, 35, 60, 62, 63, 96].indexOf(F) ? r : encodeURIComponent(r) }

        function d(r) { var F = r.charCodeAt(0); return 32 < F && 127 > F && -1 == [34, 35, 60, 62, 96].indexOf(F) ? r : encodeURIComponent(r) }

        function e(r, F, C) {
            function N(la) { sa.push(la) }
            var y = F || "scheme start",
                X = 0,
                v = "",
                ra = !1,
                fa = !1,
                sa = [];
            a: for (;
                (void 0 != r[X - 1] || 0 == X) && !this.i;) {
                var n = r[X];
                switch (y) {
                    case "scheme start":
                        if (n && q.test(n)) v +=
                            n.toLowerCase(), y = "scheme";
                        else if (F) { N("Invalid scheme."); break a } else {
                            v = "";
                            y = "no scheme";
                            continue
                        }
                        break;
                    case "scheme":
                        if (n && H.test(n)) v += n.toLowerCase();
                        else if (":" == n) {
                            this.h = v;
                            v = "";
                            if (F) break a;
                            void 0 !== l[this.h] && (this.C = !0);
                            y = "file" == this.h ? "relative" : this.C && C && C.h == this.h ? "relative or authority" : this.C ? "authority first slash" : "scheme data"
                        } else if (F) { void 0 != n && N("Code point not allowed in scheme: " + n); break a } else {
                            v = "";
                            X = 0;
                            y = "no scheme";
                            continue
                        }
                        break;
                    case "scheme data":
                        "?" == n ? (this.o = "?",
                            y = "query") : "#" == n ? (this.v = "#", y = "fragment") : void 0 != n && "\t" != n && "\n" != n && "\r" != n && (this.ga += c(n));
                        break;
                    case "no scheme":
                        if (C && void 0 !== l[C.h]) { y = "relative"; continue } else N("Missing scheme."), f.call(this), this.i = !0;
                        break;
                    case "relative or authority":
                        if ("/" == n && "/" == r[X + 1]) y = "authority ignore slashes";
                        else {
                            N("Expected /, got: " + n);
                            y = "relative";
                            continue
                        }
                        break;
                    case "relative":
                        this.C = !0;
                        "file" != this.h && (this.h = C.h);
                        if (void 0 == n) {
                            this.j = C.j;
                            this.m = C.m;
                            this.l = C.l.slice();
                            this.o = C.o;
                            this.s = C.s;
                            this.g = C.g;
                            break a
                        } else if ("/" == n || "\\" == n) "\\" == n && N("\\ is an invalid code point."), y = "relative slash";
                        else if ("?" == n) this.j = C.j, this.m = C.m, this.l = C.l.slice(), this.o = "?", this.s = C.s, this.g = C.g, y = "query";
                        else if ("#" == n) this.j = C.j, this.m = C.m, this.l = C.l.slice(), this.o = C.o, this.v = "#", this.s = C.s, this.g = C.g, y = "fragment";
                        else {
                            y = r[X + 1];
                            var I = r[X + 2];
                            if ("file" != this.h || !q.test(n) || ":" != y && "|" != y || void 0 != I && "/" != I && "\\" != I && "?" != I && "#" != I) this.j = C.j, this.m = C.m, this.s = C.s, this.g = C.g, this.l = C.l.slice(), this.l.pop();
                            y =
                                "relative path";
                            continue
                        }
                        break;
                    case "relative slash":
                        if ("/" == n || "\\" == n) "\\" == n && N("\\ is an invalid code point."), y = "file" == this.h ? "file host" : "authority ignore slashes";
                        else {
                            "file" != this.h && (this.j = C.j, this.m = C.m, this.s = C.s, this.g = C.g);
                            y = "relative path";
                            continue
                        }
                        break;
                    case "authority first slash":
                        if ("/" == n) y = "authority second slash";
                        else {
                            N("Expected '/', got: " + n);
                            y = "authority ignore slashes";
                            continue
                        }
                        break;
                    case "authority second slash":
                        y = "authority ignore slashes";
                        if ("/" != n) {
                            N("Expected '/', got: " +
                                n);
                            continue
                        }
                        break;
                    case "authority ignore slashes":
                        if ("/" != n && "\\" != n) { y = "authority"; continue } else N("Expected authority, got: " + n);
                        break;
                    case "authority":
                        if ("@" == n) {
                            ra && (N("@ already seen."), v += "%40");
                            ra = !0;
                            for (n = 0; n < v.length; n++) I = v[n], "\t" == I || "\n" == I || "\r" == I ? N("Invalid whitespace in authority.") : ":" == I && null === this.g ? this.g = "" : (I = c(I), null !== this.g ? this.g += I : this.s += I);
                            v = ""
                        } else if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n) {
                            X -= v.length;
                            v = "";
                            y = "host";
                            continue
                        } else v += n;
                        break;
                    case "file host":
                        if (void 0 ==
                            n || "/" == n || "\\" == n || "?" == n || "#" == n) { 2 != v.length || !q.test(v[0]) || ":" != v[1] && "|" != v[1] ? (0 != v.length && (this.j = b.call(this, v), v = ""), y = "relative path start") : y = "relative path"; continue } else "\t" == n || "\n" == n || "\r" == n ? N("Invalid whitespace in file host.") : v += n;
                        break;
                    case "host":
                    case "hostname":
                        if (":" != n || fa)
                            if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n) {
                                this.j = b.call(this, v);
                                v = "";
                                y = "relative path start";
                                if (F) break a;
                                continue
                            } else "\t" != n && "\n" != n && "\r" != n ? ("[" == n ? fa = !0 : "]" == n && (fa = !1), v += n) : N("Invalid code point in host/hostname: " +
                                n);
                        else if (this.j = b.call(this, v), v = "", y = "port", "hostname" == F) break a;
                        break;
                    case "port":
                        if (/[0-9]/.test(n)) v += n;
                        else if (void 0 == n || "/" == n || "\\" == n || "?" == n || "#" == n || F) {
                            "" != v && (v = parseInt(v, 10), v != l[this.h] && (this.m = v + ""), v = "");
                            if (F) break a;
                            y = "relative path start";
                            continue
                        } else "\t" == n || "\n" == n || "\r" == n ? N("Invalid code point in port: " + n) : (f.call(this), this.i = !0);
                        break;
                    case "relative path start":
                        "\\" == n && N("'\\' not allowed in path.");
                        y = "relative path";
                        if ("/" != n && "\\" != n) continue;
                        break;
                    case "relative path":
                        if (void 0 !=
                            n && "/" != n && "\\" != n && (F || "?" != n && "#" != n)) "\t" != n && "\n" != n && "\r" != n && (v += c(n));
                        else {
                            "\\" == n && N("\\ not allowed in relative path.");
                            if (I = m[v.toLowerCase()]) v = I;
                            ".." == v ? (this.l.pop(), "/" != n && "\\" != n && this.l.push("")) : "." == v && "/" != n && "\\" != n ? this.l.push("") : "." != v && ("file" == this.h && 0 == this.l.length && 2 == v.length && q.test(v[0]) && "|" == v[1] && (v = v[0] + ":"), this.l.push(v));
                            v = "";
                            "?" == n ? (this.o = "?", y = "query") : "#" == n && (this.v = "#", y = "fragment")
                        }
                        break;
                    case "query":
                        F || "#" != n ? void 0 != n && "\t" != n && "\n" != n && "\r" != n && (this.o +=
                            d(n)) : (this.v = "#", y = "fragment");
                        break;
                    case "fragment":
                        void 0 != n && "\t" != n && "\n" != n && "\r" != n && (this.v += n)
                }
                X++
            }
        }

        function f() {
            this.s = this.ga = this.h = "";
            this.g = null;
            this.m = this.j = "";
            this.l = [];
            this.v = this.o = "";
            this.C = this.i = !1
        }

        function g(r, F) {
            void 0 === F || F instanceof g || (F = new g(String(F)));
            this.a = r;
            f.call(this);
            e.call(this, this.a.replace(/^[ \t\r\n\f]+|[ \t\r\n\f]+$/g, ""), null, F)
        }
        var h = !1;
        try {
            var k = new URL("b", "http://a");
            k.pathname = "c%20d";
            h = "http://a/c%20d" === k.href
        } catch (r) {}
        if (!h) {
            var l = Object.create(null);
            l.ftp = 21;
            l.file = 0;
            l.gopher = 70;
            l.http = 80;
            l.https = 443;
            l.ws = 80;
            l.wss = 443;
            var m = Object.create(null);
            m["%2e"] = ".";
            m[".%2e"] = "..";
            m["%2e."] = "..";
            m["%2e%2e"] = "..";
            var q = /[a-zA-Z]/,
                H = /[a-zA-Z0-9\+\-\.]/;
            g.prototype = {
                toString: function() { return this.href },
                get href() { if (this.i) return this.a; var r = ""; if ("" != this.s || null != this.g) r = this.s + (null != this.g ? ":" + this.g : "") + "@"; return this.protocol + (this.C ? "//" + r + this.host : "") + this.pathname + this.o + this.v },
                set href(r) {
                    f.call(this);
                    e.call(this, r)
                },
                get protocol() {
                    return this.h +
                        ":"
                },
                set protocol(r) { this.i || e.call(this, r + ":", "scheme start") },
                get host() { return this.i ? "" : this.m ? this.j + ":" + this.m : this.j },
                set host(r) {!this.i && this.C && e.call(this, r, "host") },
                get hostname() { return this.j },
                set hostname(r) {!this.i && this.C && e.call(this, r, "hostname") },
                get port() { return this.m },
                set port(r) {!this.i && this.C && e.call(this, r, "port") },
                get pathname() { return this.i ? "" : this.C ? "/" + this.l.join("/") : this.ga },
                set pathname(r) {!this.i && this.C && (this.l = [], e.call(this, r, "relative path start")) },
                get search() {
                    return this.i ||
                        !this.o || "?" == this.o ? "" : this.o
                },
                set search(r) {!this.i && this.C && (this.o = "?", "?" == r[0] && (r = r.slice(1)), e.call(this, r, "query")) },
                get hash() { return this.i || !this.v || "#" == this.v ? "" : this.v },
                set hash(r) { this.i || (r ? (this.v = "#", "#" == r[0] && (r = r.slice(1)), e.call(this, r, "fragment")) : this.v = "") },
                get origin() {
                    var r;
                    if (this.i || !this.h) return "";
                    switch (this.h) {
                        case "data":
                        case "file":
                        case "javascript":
                        case "mailto":
                            return "null"
                    }
                    return (r = this.host) ? this.h + "://" + r : ""
                }
            };
            var E = a.URL;
            E && (g.createObjectURL = function(r) {
                return E.createObjectURL.apply(E,
                    arguments)
            }, g.revokeObjectURL = function(r) { E.revokeObjectURL(r) });
            a.URL = g
        }
    })(window);
    Object.getOwnPropertyDescriptor(Node.prototype, "baseURI") || Object.defineProperty(Node.prototype, "baseURI", { get: function() { var a = (this.ownerDocument || this).querySelector("base[href]"); return a && a.href || window.location.href }, configurable: !0, enumerable: !0 });
    var Uh = document.createElement("style");
    Uh.textContent = "body {transition: opacity ease-in 0.2s; } \nbody[unresolved] {opacity: 0; display: block; overflow: hidden; position: relative; } \n";
    var Vh = document.querySelector("head");
    Vh.insertBefore(Uh, Vh.firstChild);
    var Wh = window.customElements,
        Xh = !1,
        Yh = null;
    Wh.polyfillWrapFlushCallback && Wh.polyfillWrapFlushCallback(function(a) {
        Yh = a;
        Xh && a()
    });

    function Zh() {
        window.HTMLTemplateElement.bootstrap && window.HTMLTemplateElement.bootstrap(window.document);
        Yh && Yh();
        Xh = !0;
        window.WebComponents.ready = !0;
        document.dispatchEvent(new CustomEvent("WebComponentsReady", { bubbles: !0 }))
    }
    "complete" !== document.readyState ? (window.addEventListener("load", Zh), window.addEventListener("DOMContentLoaded", function() {
        window.removeEventListener("load", Zh);
        Zh()
    })) : Zh();
}).call(this);