!function (e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
        if (!e.document)throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function (e, t) {
    var n = [], a = n.slice, i = n.concat, r = n.push, o = n.indexOf, s = {}, l = s.toString, c = s.hasOwnProperty,
        d = {}, u = "1.11.2", f = function (e, t) {
            return new f.fn.init(e, t)
        }, p = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, h = /^-ms-/, g = /-([\da-z])/gi, m = function (e, t) {
            return t.toUpperCase()
        };
    f.fn = f.prototype = {
        jquery: u, constructor: f, selector: "", length: 0, toArray: function () {
            return a.call(this)
        }, get: function (e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : a.call(this)
        }, pushStack: function (e) {
            var t = f.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return f.each(this, e, t)
        }, map: function (e) {
            return this.pushStack(f.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, slice: function () {
            return this.pushStack(a.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: r, sort: n.sort, splice: n.splice
    }, f.extend = f.fn.extend = function () {
        var e, t, n, a, i, r, o = arguments[0] || {}, s = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof o && (c = o, o = arguments[s] || {}, s++), "object" == typeof o || f.isFunction(o) || (o = {}), s === l && (o = this, s--); l > s; s++)if (null != (i = arguments[s]))for (a in i)e = o[a], n = i[a], o !== n && (c && n && (f.isPlainObject(n) || (t = f.isArray(n))) ? (t ? (t = !1, r = e && f.isArray(e) ? e : []) : r = e && f.isPlainObject(e) ? e : {}, o[a] = f.extend(c, r, n)) : void 0 !== n && (o[a] = n));
        return o
    }, f.extend({
        expando: "jQuery" + (u + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
            throw new Error(e)
        }, noop: function () {
        }, isFunction: function (e) {
            return "function" === f.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === f.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !f.isArray(e) && e - parseFloat(e) + 1 >= 0
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, isPlainObject: function (e) {
            var t;
            if (!e || "object" !== f.type(e) || e.nodeType || f.isWindow(e))return !1;
            try {
                if (e.constructor && !c.call(e, "constructor") && !c.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (n) {
                return !1
            }
            if (d.ownLast)for (t in e)return c.call(e, t);
            for (t in e);
            return void 0 === t || c.call(e, t)
        }, type: function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? s[l.call(e)] || "object" : typeof e
        }, globalEval: function (t) {
            t && f.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(h, "ms-").replace(g, m)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, n) {
            var a, i = 0, r = e.length, o = v(e);
            if (n) {
                if (o)for (; r > i && (a = t.apply(e[i], n), a !== !1); i++); else for (i in e)if (a = t.apply(e[i], n), a === !1)break
            } else if (o)for (; r > i && (a = t.call(e[i], i, e[i]), a !== !1); i++); else for (i in e)if (a = t.call(e[i], i, e[i]), a === !1)break;
            return e
        }, trim: function (e) {
            return null == e ? "" : (e + "").replace(p, "")
        }, makeArray: function (e, t) {
            var n = t || [];
            return null != e && (v(Object(e)) ? f.merge(n, "string" == typeof e ? [e] : e) : r.call(n, e)), n
        }, inArray: function (e, t, n) {
            var a;
            if (t) {
                if (o)return o.call(t, e, n);
                for (a = t.length, n = n ? 0 > n ? Math.max(0, a + n) : n : 0; a > n; n++)if (n in t && t[n] === e)return n
            }
            return -1
        }, merge: function (e, t) {
            for (var n = +t.length, a = 0, i = e.length; n > a;)e[i++] = t[a++];
            if (n !== n)for (; void 0 !== t[a];)e[i++] = t[a++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            for (var a, i = [], r = 0, o = e.length, s = !n; o > r; r++)a = !t(e[r], r), a !== s && i.push(e[r]);
            return i
        }, map: function (e, t, n) {
            var a, r = 0, o = e.length, s = v(e), l = [];
            if (s)for (; o > r; r++)a = t(e[r], r, n), null != a && l.push(a); else for (r in e)a = t(e[r], r, n), null != a && l.push(a);
            return i.apply([], l)
        }, guid: 1, proxy: function (e, t) {
            var n, i, r;
            return "string" == typeof t && (r = e[t], t = e, e = r), f.isFunction(e) ? (n = a.call(arguments, 2), i = function () {
                return e.apply(t || this, n.concat(a.call(arguments)))
            }, i.guid = e.guid = e.guid || f.guid++, i) : void 0
        }, now: function () {
            return +new Date
        }, support: d
    }), f.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        s["[object " + t + "]"] = t.toLowerCase()
    });
    function v(e) {
        var t = e.length, n = f.type(e);
        return "function" !== n && !f.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
    }

    var y = function (e) {
        var t, n, a, i, r, o, s, l, c, d, u, f, p, h, g, m, v, y, w, $ = "sizzle" + 1 * new Date, b = e.document, x = 0,
            k = 0, C = se(), _ = se(), T = se(), j = function (e, t) {
                return e === t && (u = !0), 0
            }, S = 1 << 31, E = {}.hasOwnProperty, z = [], N = z.pop, D = z.push, q = z.push, A = z.slice,
            L = function (e, t) {
                for (var n = 0, a = e.length; a > n; n++)if (e[n] === t)return n;
                return -1
            },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]", O = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", U = O.replace("w", "w#"),
            P = "\\[" + M + "*(" + O + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + U + "))|)" + M + "*\\]",
            F = ":(" + O + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"), H = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            R = new RegExp("^" + M + "*," + M + "*"), W = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            X = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(F),
            J = new RegExp("^" + U + "$"), Q = {
                ID: new RegExp("^#(" + O + ")"),
                CLASS: new RegExp("^\\.(" + O + ")"),
                TAG: new RegExp("^(" + O.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + P),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + I + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            }, Y = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), ae = function (e, t, n) {
                var a = "0x" + t - 65536;
                return a !== a || n ? t : 0 > a ? String.fromCharCode(a + 65536) : String.fromCharCode(a >> 10 | 55296, 1023 & a | 56320)
            }, ie = function () {
                f()
            };
        try {
            q.apply(z = A.call(b.childNodes), b.childNodes), z[b.childNodes.length].nodeType
        } catch (re) {
            q = {
                apply: z.length ? function (e, t) {
                    D.apply(e, A.call(t))
                } : function (e, t) {
                    for (var n = e.length, a = 0; e[n++] = t[a++];);
                    e.length = n - 1
                }
            }
        }
        function oe(e, t, a, i) {
            var r, s, c, d, u, h, v, y, x, k;
            if ((t ? t.ownerDocument || t : b) !== p && f(t), t = t || p, a = a || [], d = t.nodeType, "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d)return a;
            if (!i && g) {
                if (11 !== d && (r = K.exec(e)))if (c = r[1]) {
                    if (9 === d) {
                        if (s = t.getElementById(c), !s || !s.parentNode)return a;
                        if (s.id === c)return a.push(s), a
                    } else if (t.ownerDocument && (s = t.ownerDocument.getElementById(c)) && w(t, s) && s.id === c)return a.push(s), a
                } else {
                    if (r[2])return q.apply(a, t.getElementsByTagName(e)), a;
                    if ((c = r[3]) && n.getElementsByClassName)return q.apply(a, t.getElementsByClassName(c)), a
                }
                if (n.qsa && (!m || !m.test(e))) {
                    if (y = v = $, x = t, k = 1 !== d && e, 1 === d && "object" !== t.nodeName.toLowerCase()) {
                        for (h = o(e), (v = t.getAttribute("id")) ? y = v.replace(te, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", u = h.length; u--;)h[u] = y + ve(h[u]);
                        x = ee.test(e) && ge(t.parentNode) || t, k = h.join(",")
                    }
                    if (k)try {
                        return q.apply(a, x.querySelectorAll(k)), a
                    } catch (C) {
                    } finally {
                        v || t.removeAttribute("id")
                    }
                }
            }
            return l(e.replace(H, "$1"), t, a, i)
        }

        function se() {
            var e = [];

            function t(n, i) {
                return e.push(n + " ") > a.cacheLength && delete t[e.shift()], t[n + " "] = i
            }

            return t
        }

        function le(e) {
            return e[$] = !0, e
        }

        function ce(e) {
            var t = p.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var n = e.split("|"), i = e.length; i--;)a.attrHandle[n[i]] = t
        }

        function ue(e, t) {
            var n = t && e,
                a = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || S) - (~e.sourceIndex || S);
            if (a)return a;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function fe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function pe(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function he(e) {
            return le(function (t) {
                return t = +t, le(function (n, a) {
                    for (var i, r = e([], n.length, t), o = r.length; o--;)n[i = r[o]] && (n[i] = !(a[i] = n[i]))
                })
            })
        }

        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }

        n = oe.support = {}, r = oe.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, f = oe.setDocument = function (e) {
            var t, i, o = e ? e.ownerDocument || e : b;
            return o !== p && 9 === o.nodeType && o.documentElement ? (p = o, h = o.documentElement, i = o.defaultView, i && i !== i.top && (i.addEventListener ? i.addEventListener("unload", ie, !1) : i.attachEvent && i.attachEvent("onunload", ie)), g = !r(o), n.attributes = ce(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), n.getElementsByTagName = ce(function (e) {
                return e.appendChild(o.createComment("")), !e.getElementsByTagName("*").length
            }), n.getElementsByClassName = Z.test(o.getElementsByClassName), n.getById = ce(function (e) {
                return h.appendChild(e).id = $, !o.getElementsByName || !o.getElementsByName($).length
            }), n.getById ? (a.find.ID = function (e, t) {
                if ("undefined" != typeof t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, a.filter.ID = function (e) {
                var t = e.replace(ne, ae);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete a.find.ID, a.filter.ID = function (e) {
                var t = e.replace(ne, ae);
                return function (e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), a.find.TAG = n.getElementsByTagName ? function (e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : n.qsa ? t.querySelectorAll(e) : void 0
            } : function (e, t) {
                var n, a = [], i = 0, r = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = r[i++];)1 === n.nodeType && a.push(n);
                    return a
                }
                return r
            }, a.find.CLASS = n.getElementsByClassName && function (e, t) {
                    return g ? t.getElementsByClassName(e) : void 0
                }, v = [], m = [], (n.qsa = Z.test(o.querySelectorAll)) && (ce(function (e) {
                h.appendChild(e).innerHTML = "<a id='" + $ + "'></a><select id='" + $ + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || m.push("\\[" + M + "*(?:value|" + I + ")"), e.querySelectorAll("[id~=" + $ + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), e.querySelectorAll("a#" + $ + "+*").length || m.push(".#.+[+~]")
            }), ce(function (e) {
                var t = o.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + M + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || m.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), m.push(",.*:")
            })), (n.matchesSelector = Z.test(y = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) && ce(function (e) {
                n.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), v.push("!=", F)
            }), m = m.length && new RegExp(m.join("|")), v = v.length && new RegExp(v.join("|")), t = Z.test(h.compareDocumentPosition), w = t || Z.test(h.contains) ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, a = t && t.parentNode;
                return e === a || !(!a || 1 !== a.nodeType || !(n.contains ? n.contains(a) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(a)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, j = t ? function (e, t) {
                if (e === t)return u = !0, 0;
                var a = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return a ? a : (a = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & a || !n.sortDetached && t.compareDocumentPosition(e) === a ? e === o || e.ownerDocument === b && w(b, e) ? -1 : t === o || t.ownerDocument === b && w(b, t) ? 1 : d ? L(d, e) - L(d, t) : 0 : 4 & a ? -1 : 1)
            } : function (e, t) {
                if (e === t)return u = !0, 0;
                var n, a = 0, i = e.parentNode, r = t.parentNode, s = [e], l = [t];
                if (!i || !r)return e === o ? -1 : t === o ? 1 : i ? -1 : r ? 1 : d ? L(d, e) - L(d, t) : 0;
                if (i === r)return ue(e, t);
                for (n = e; n = n.parentNode;)s.unshift(n);
                for (n = t; n = n.parentNode;)l.unshift(n);
                for (; s[a] === l[a];)a++;
                return a ? ue(s[a], l[a]) : s[a] === b ? -1 : l[a] === b ? 1 : 0
            }, o) : p
        }, oe.matches = function (e, t) {
            return oe(e, null, null, t)
        }, oe.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== p && f(e), t = t.replace(X, "='$1']"), !(!n.matchesSelector || !g || v && v.test(t) || m && m.test(t)))try {
                var a = y.call(e, t);
                if (a || n.disconnectedMatch || e.document && 11 !== e.document.nodeType)return a
            } catch (i) {
            }
            return oe(t, p, null, [e]).length > 0
        }, oe.contains = function (e, t) {
            return (e.ownerDocument || e) !== p && f(e), w(e, t)
        }, oe.attr = function (e, t) {
            (e.ownerDocument || e) !== p && f(e);
            var i = a.attrHandle[t.toLowerCase()],
                r = i && E.call(a.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
            return void 0 !== r ? r : n.attributes || !g ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, oe.uniqueSort = function (e) {
            var t, a = [], i = 0, r = 0;
            if (u = !n.detectDuplicates, d = !n.sortStable && e.slice(0), e.sort(j), u) {
                for (; t = e[r++];)t === e[r] && (i = a.push(r));
                for (; i--;)e.splice(a[i], 1)
            }
            return d = null, e
        }, i = oe.getText = function (e) {
            var t, n = "", a = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += i(e)
                } else if (3 === r || 4 === r)return e.nodeValue
            } else for (; t = e[a++];)n += i(t);
            return n
        }, a = oe.selectors = {
            cacheLength: 50,
            createPseudo: le,
            match: Q,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(ne, ae), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, ae), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[6] && e[2];
                    return Q.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = o(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ne, ae).toLowerCase();
                    return "*" === e ? function () {
                        return !0
                    } : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                }, CLASS: function (e) {
                    var t = C[e + " "];
                    return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && C(e, function (e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, t, n) {
                    return function (a) {
                        var i = oe.attr(a, e);
                        return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i.replace(B, " ") + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"))
                    }
                }, CHILD: function (e, t, n, a, i) {
                    var r = "nth" !== e.slice(0, 3), o = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === a && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, l) {
                        var c, d, u, f, p, h, g = r !== o ? "nextSibling" : "previousSibling", m = t.parentNode,
                            v = s && t.nodeName.toLowerCase(), y = !l && !s;
                        if (m) {
                            if (r) {
                                for (; g;) {
                                    for (u = t; u = u[g];)if (s ? u.nodeName.toLowerCase() === v : 1 === u.nodeType)return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [o ? m.firstChild : m.lastChild], o && y) {
                                for (d = m[$] || (m[$] = {}), c = d[e] || [], p = c[0] === x && c[1], f = c[0] === x && c[2], u = p && m.childNodes[p]; u = ++p && u && u[g] || (f = p = 0) || h.pop();)if (1 === u.nodeType && ++f && u === t) {
                                    d[e] = [x, p, f];
                                    break
                                }
                            } else if (y && (c = (t[$] || (t[$] = {}))[e]) && c[0] === x) f = c[1]; else for (; (u = ++p && u && u[g] || (f = p = 0) || h.pop()) && ((s ? u.nodeName.toLowerCase() !== v : 1 !== u.nodeType) || !++f || (y && ((u[$] || (u[$] = {}))[e] = [x, f]), u !== t)););
                            return f -= i, f === a || f % a === 0 && f / a >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, i = a.pseudos[e] || a.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return i[$] ? i(t) : i.length > 1 ? (n = [e, e, "", t], a.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function (e, n) {
                        for (var a, r = i(e, t), o = r.length; o--;)a = L(e, r[o]), e[a] = !(n[a] = r[o])
                    }) : function (e) {
                        return i(e, 0, n)
                    }) : i
                }
            },
            pseudos: {
                not: le(function (e) {
                    var t = [], n = [], a = s(e.replace(H, "$1"));
                    return a[$] ? le(function (e, t, n, i) {
                        for (var r, o = a(e, null, i, []), s = e.length; s--;)(r = o[s]) && (e[s] = !(t[s] = r))
                    }) : function (e, i, r) {
                        return t[0] = e, a(t, null, r, n), t[0] = null, !n.pop()
                    }
                }), has: le(function (e) {
                    return function (t) {
                        return oe(e, t).length > 0
                    }
                }), contains: le(function (e) {
                    return e = e.replace(ne, ae), function (t) {
                        return (t.textContent || t.innerText || i(t)).indexOf(e) > -1
                    }
                }), lang: le(function (e) {
                    return J.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(ne, ae).toLowerCase(), function (t) {
                        var n;
                        do if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === h
                }, focus: function (e) {
                    return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeType < 6)return !1;
                    return !0
                }, parent: function (e) {
                    return !a.pseudos.empty(e)
                }, header: function (e) {
                    return G.test(e.nodeName)
                }, input: function (e) {
                    return Y.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                }, first: he(function () {
                    return [0]
                }), last: he(function (e, t) {
                    return [t - 1]
                }), eq: he(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: he(function (e, t) {
                    for (var n = 0; t > n; n += 2)e.push(n);
                    return e
                }), odd: he(function (e, t) {
                    for (var n = 1; t > n; n += 2)e.push(n);
                    return e
                }), lt: he(function (e, t, n) {
                    for (var a = 0 > n ? n + t : n; --a >= 0;)e.push(a);
                    return e
                }), gt: he(function (e, t, n) {
                    for (var a = 0 > n ? n + t : n; ++a < t;)e.push(a);
                    return e
                })
            }
        }, a.pseudos.nth = a.pseudos.eq;
        for (t in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})a.pseudos[t] = fe(t);
        for (t in{submit: !0, reset: !0})a.pseudos[t] = pe(t);
        function me() {
        }

        me.prototype = a.filters = a.pseudos, a.setFilters = new me, o = oe.tokenize = function (e, t) {
            var n, i, r, o, s, l, c, d = _[e + " "];
            if (d)return t ? 0 : d.slice(0);
            for (s = e, l = [], c = a.preFilter; s;) {
                (!n || (i = R.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(r = [])), n = !1, (i = W.exec(s)) && (n = i.shift(), r.push({
                    value: n,
                    type: i[0].replace(H, " ")
                }), s = s.slice(n.length));
                for (o in a.filter)!(i = Q[o].exec(s)) || c[o] && !(i = c[o](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: o,
                    matches: i
                }), s = s.slice(n.length));
                if (!n)break
            }
            return t ? s.length : s ? oe.error(e) : _(e, l).slice(0)
        };
        function ve(e) {
            for (var t = 0, n = e.length, a = ""; n > t; t++)a += e[t].value;
            return a
        }

        function ye(e, t, n) {
            var a = t.dir, i = n && "parentNode" === a, r = k++;
            return t.first ? function (t, n, r) {
                for (; t = t[a];)if (1 === t.nodeType || i)return e(t, n, r)
            } : function (t, n, o) {
                var s, l, c = [x, r];
                if (o) {
                    for (; t = t[a];)if ((1 === t.nodeType || i) && e(t, n, o))return !0
                } else for (; t = t[a];)if (1 === t.nodeType || i) {
                    if (l = t[$] || (t[$] = {}), (s = l[a]) && s[0] === x && s[1] === r)return c[2] = s[2];
                    if (l[a] = c, c[2] = e(t, n, o))return !0
                }
            }
        }

        function we(e) {
            return e.length > 1 ? function (t, n, a) {
                for (var i = e.length; i--;)if (!e[i](t, n, a))return !1;
                return !0
            } : e[0]
        }

        function $e(e, t, n) {
            for (var a = 0, i = t.length; i > a; a++)oe(e, t[a], n);
            return n
        }

        function be(e, t, n, a, i) {
            for (var r, o = [], s = 0, l = e.length, c = null != t; l > s; s++)(r = e[s]) && (!n || n(r, a, i)) && (o.push(r), c && t.push(s));
            return o
        }

        function xe(e, t, n, a, i, r) {
            return a && !a[$] && (a = xe(a)), i && !i[$] && (i = xe(i, r)), le(function (r, o, s, l) {
                var c, d, u, f = [], p = [], h = o.length, g = r || $e(t || "*", s.nodeType ? [s] : s, []),
                    m = !e || !r && t ? g : be(g, f, e, s, l), v = n ? i || (r ? e : h || a) ? [] : o : m;
                if (n && n(m, v, s, l), a)for (c = be(v, p), a(c, [], s, l), d = c.length; d--;)(u = c[d]) && (v[p[d]] = !(m[p[d]] = u));
                if (r) {
                    if (i || e) {
                        if (i) {
                            for (c = [], d = v.length; d--;)(u = v[d]) && c.push(m[d] = u);
                            i(null, v = [], c, l)
                        }
                        for (d = v.length; d--;)(u = v[d]) && (c = i ? L(r, u) : f[d]) > -1 && (r[c] = !(o[c] = u))
                    }
                } else v = be(v === o ? v.splice(h, v.length) : v), i ? i(null, o, v, l) : q.apply(o, v)
            })
        }

        function ke(e) {
            for (var t, n, i, r = e.length, o = a.relative[e[0].type], s = o || a.relative[" "], l = o ? 1 : 0, d = ye(function (e) {
                return e === t
            }, s, !0), u = ye(function (e) {
                return L(t, e) > -1
            }, s, !0), f = [function (e, n, a) {
                var i = !o && (a || n !== c) || ((t = n).nodeType ? d(e, n, a) : u(e, n, a));
                return t = null, i
            }]; r > l; l++)if (n = a.relative[e[l].type]) f = [ye(we(f), n)]; else {
                if (n = a.filter[e[l].type].apply(null, e[l].matches), n[$]) {
                    for (i = ++l; r > i && !a.relative[e[i].type]; i++);
                    return xe(l > 1 && we(f), l > 1 && ve(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(H, "$1"), n, i > l && ke(e.slice(l, i)), r > i && ke(e = e.slice(i)), r > i && ve(e))
                }
                f.push(n)
            }
            return we(f)
        }

        function Ce(e, t) {
            var n = t.length > 0, i = e.length > 0, r = function (r, o, s, l, d) {
                var u, f, h, g = 0, m = "0", v = r && [], y = [], w = c, $ = r || i && a.find.TAG("*", d),
                    b = x += null == w ? 1 : Math.random() || .1, k = $.length;
                for (d && (c = o !== p && o); m !== k && null != (u = $[m]); m++) {
                    if (i && u) {
                        for (f = 0; h = e[f++];)if (h(u, o, s)) {
                            l.push(u);
                            break
                        }
                        d && (x = b)
                    }
                    n && ((u = !h && u) && g--, r && v.push(u))
                }
                if (g += m, n && m !== g) {
                    for (f = 0; h = t[f++];)h(v, y, o, s);
                    if (r) {
                        if (g > 0)for (; m--;)v[m] || y[m] || (y[m] = N.call(l));
                        y = be(y)
                    }
                    q.apply(l, y), d && !r && y.length > 0 && g + t.length > 1 && oe.uniqueSort(l)
                }
                return d && (x = b, c = w), v
            };
            return n ? le(r) : r
        }

        return s = oe.compile = function (e, t) {
            var n, a = [], i = [], r = T[e + " "];
            if (!r) {
                for (t || (t = o(e)), n = t.length; n--;)r = ke(t[n]), r[$] ? a.push(r) : i.push(r);
                r = T(e, Ce(i, a)), r.selector = e
            }
            return r
        }, l = oe.select = function (e, t, i, r) {
            var l, c, d, u, f, p = "function" == typeof e && e, h = !r && o(e = p.selector || e);
            if (i = i || [], 1 === h.length) {
                if (c = h[0] = h[0].slice(0), c.length > 2 && "ID" === (d = c[0]).type && n.getById && 9 === t.nodeType && g && a.relative[c[1].type]) {
                    if (t = (a.find.ID(d.matches[0].replace(ne, ae), t) || [])[0], !t)return i;
                    p && (t = t.parentNode), e = e.slice(c.shift().value.length)
                }
                for (l = Q.needsContext.test(e) ? 0 : c.length; l-- && (d = c[l], !a.relative[u = d.type]);)if ((f = a.find[u]) && (r = f(d.matches[0].replace(ne, ae), ee.test(c[0].type) && ge(t.parentNode) || t))) {
                    if (c.splice(l, 1), e = r.length && ve(c), !e)return q.apply(i, r), i;
                    break
                }
            }
            return (p || s(e, h))(r, t, !g, i, ee.test(e) && ge(t.parentNode) || t), i
        }, n.sortStable = $.split("").sort(j).join("") === $, n.detectDuplicates = !!u, f(), n.sortDetached = ce(function (e) {
            return 1 & e.compareDocumentPosition(p.createElement("div"))
        }), ce(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function (e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), n.attributes && ce(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || de("value", function (e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }), ce(function (e) {
            return null == e.getAttribute("disabled")
        }) || de(I, function (e, t, n) {
            var a;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (a = e.getAttributeNode(t)) && a.specified ? a.value : null
        }), oe
    }(e);
    f.find = y, f.expr = y.selectors, f.expr[":"] = f.expr.pseudos, f.unique = y.uniqueSort, f.text = y.getText, f.isXMLDoc = y.isXML, f.contains = y.contains;
    var w = f.expr.match.needsContext, $ = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, b = /^.[^:#\[\.,]*$/;

    function x(e, t, n) {
        if (f.isFunction(t))return f.grep(e, function (e, a) {
            return !!t.call(e, a, e) !== n
        });
        if (t.nodeType)return f.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (b.test(t))return f.filter(t, e, n);
            t = f.filter(t, e)
        }
        return f.grep(e, function (e) {
            return f.inArray(e, t) >= 0 !== n
        })
    }

    f.filter = function (e, t, n) {
        var a = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === a.nodeType ? f.find.matchesSelector(a, e) ? [a] : [] : f.find.matches(e, f.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, f.fn.extend({
        find: function (e) {
            var t, n = [], a = this, i = a.length;
            if ("string" != typeof e)return this.pushStack(f(e).filter(function () {
                for (t = 0; i > t; t++)if (f.contains(a[t], this))return !0
            }));
            for (t = 0; i > t; t++)f.find(e, a[t], n);
            return n = this.pushStack(i > 1 ? f.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
        }, filter: function (e) {
            return this.pushStack(x(this, e || [], !1))
        }, not: function (e) {
            return this.pushStack(x(this, e || [], !0))
        }, is: function (e) {
            return !!x(this, "string" == typeof e && w.test(e) ? f(e) : e || [], !1).length
        }
    });
    var k, C = e.document, _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, T = f.fn.init = function (e, t) {
        var n, a;
        if (!e)return this;
        if ("string" == typeof e) {
            if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : _.exec(e), !n || !n[1] && t)return !t || t.jquery ? (t || k).find(e) : this.constructor(t).find(e);
            if (n[1]) {
                if (t = t instanceof f ? t[0] : t, f.merge(this, f.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), $.test(n[1]) && f.isPlainObject(t))for (n in t)f.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                return this
            }
            if (a = C.getElementById(n[2]), a && a.parentNode) {
                if (a.id !== n[2])return k.find(e);
                this.length = 1, this[0] = a
            }
            return this.context = C, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : f.isFunction(e) ? "undefined" != typeof k.ready ? k.ready(e) : e(f) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), f.makeArray(e, this))
    };
    T.prototype = f.fn, k = f(C);
    var j = /^(?:parents|prev(?:Until|All))/, S = {children: !0, contents: !0, next: !0, prev: !0};
    f.extend({
        dir: function (e, t, n) {
            for (var a = [], i = e[t]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !f(i).is(n));)1 === i.nodeType && a.push(i), i = i[t];
            return a
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }), f.fn.extend({
        has: function (e) {
            var t, n = f(e, this), a = n.length;
            return this.filter(function () {
                for (t = 0; a > t; t++)if (f.contains(this, n[t]))return !0
            })
        }, closest: function (e, t) {
            for (var n, a = 0, i = this.length, r = [], o = w.test(e) || "string" != typeof e ? f(e, t || this.context) : 0; i > a; a++)for (n = this[a]; n && n !== t; n = n.parentNode)if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && f.find.matchesSelector(n, e))) {
                r.push(n);
                break
            }
            return this.pushStack(r.length > 1 ? f.unique(r) : r)
        }, index: function (e) {
            return e ? "string" == typeof e ? f.inArray(this[0], f(e)) : f.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            return this.pushStack(f.unique(f.merge(this.get(), f(e, t))))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    });
    function E(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    f.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return f.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return f.dir(e, "parentNode", n)
        }, next: function (e) {
            return E(e, "nextSibling")
        }, prev: function (e) {
            return E(e, "previousSibling")
        }, nextAll: function (e) {
            return f.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return f.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return f.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return f.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return f.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return f.sibling(e.firstChild)
        }, contents: function (e) {
            return f.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : f.merge([], e.childNodes)
        }
    }, function (e, t) {
        f.fn[e] = function (n, a) {
            var i = f.map(this, t, n);
            return "Until" !== e.slice(-5) && (a = n), a && "string" == typeof a && (i = f.filter(a, i)), this.length > 1 && (S[e] || (i = f.unique(i)), j.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    });
    var z = /\S+/g, N = {};

    function D(e) {
        var t = N[e] = {};
        return f.each(e.match(z) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    f.Callbacks = function (e) {
        e = "string" == typeof e ? N[e] || D(e) : f.extend({}, e);
        var t, n, a, i, r, o, s = [], l = !e.once && [], c = function (u) {
            for (n = e.memory && u, a = !0, r = o || 0, o = 0, i = s.length, t = !0; s && i > r; r++)if (s[r].apply(u[0], u[1]) === !1 && e.stopOnFalse) {
                n = !1;
                break
            }
            t = !1, s && (l ? l.length && c(l.shift()) : n ? s = [] : d.disable())
        }, d = {
            add: function () {
                if (s) {
                    var a = s.length;
                    !function r(t) {
                        f.each(t, function (t, n) {
                            var a = f.type(n);
                            "function" === a ? e.unique && d.has(n) || s.push(n) : n && n.length && "string" !== a && r(n)
                        })
                    }(arguments), t ? i = s.length : n && (o = a, c(n))
                }
                return this
            }, remove: function () {
                return s && f.each(arguments, function (e, n) {
                    for (var a; (a = f.inArray(n, s, a)) > -1;)s.splice(a, 1), t && (i >= a && i--, r >= a && r--)
                }), this
            }, has: function (e) {
                return e ? f.inArray(e, s) > -1 : !(!s || !s.length)
            }, empty: function () {
                return s = [], i = 0, this
            }, disable: function () {
                return s = l = n = void 0, this
            }, disabled: function () {
                return !s
            }, lock: function () {
                return l = void 0, n || d.disable(), this
            }, locked: function () {
                return !l
            }, fireWith: function (e, n) {
                return !s || a && !l || (n = n || [], n = [e, n.slice ? n.slice() : n], t ? l.push(n) : c(n)), this
            }, fire: function () {
                return d.fireWith(this, arguments), this
            }, fired: function () {
                return !!a
            }
        };
        return d
    }, f.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", f.Callbacks("once memory"), "resolved"], ["reject", "fail", f.Callbacks("once memory"), "rejected"], ["notify", "progress", f.Callbacks("memory")]],
                n = "pending", a = {
                    state: function () {
                        return n
                    }, always: function () {
                        return i.done(arguments).fail(arguments), this
                    }, then: function () {
                        var e = arguments;
                        return f.Deferred(function (n) {
                            f.each(t, function (t, r) {
                                var o = f.isFunction(e[t]) && e[t];
                                i[r[1]](function () {
                                    var e = o && o.apply(this, arguments);
                                    e && f.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[r[0] + "With"](this === a ? n.promise() : this, o ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    }, promise: function (e) {
                        return null != e ? f.extend(e, a) : a
                    }
                }, i = {};
            return a.pipe = a.then, f.each(t, function (e, r) {
                var o = r[2], s = r[3];
                a[r[1]] = o.add, s && o.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[r[0]] = function () {
                    return i[r[0] + "With"](this === i ? a : this, arguments), this
                }, i[r[0] + "With"] = o.fireWith
            }), a.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, i, r = 0, o = a.call(arguments), s = o.length,
                l = 1 !== s || e && f.isFunction(e.promise) ? s : 0, c = 1 === l ? e : f.Deferred(),
                d = function (e, n, i) {
                    return function (r) {
                        n[e] = this, i[e] = arguments.length > 1 ? a.call(arguments) : r, i === t ? c.notifyWith(n, i) : --l || c.resolveWith(n, i)
                    }
                };
            if (s > 1)for (t = new Array(s), n = new Array(s), i = new Array(s); s > r; r++)o[r] && f.isFunction(o[r].promise) ? o[r].promise().done(d(r, i, o)).fail(c.reject).progress(d(r, n, t)) : --l;
            return l || c.resolveWith(i, o), c.promise()
        }
    });
    var q;
    f.fn.ready = function (e) {
        return f.ready.promise().done(e), this
    }, f.extend({
        isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? f.readyWait++ : f.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--f.readyWait : !f.isReady) {
                if (!C.body)return setTimeout(f.ready);
                f.isReady = !0, e !== !0 && --f.readyWait > 0 || (q.resolveWith(C, [f]), f.fn.triggerHandler && (f(C).triggerHandler("ready"), f(C).off("ready")))
            }
        }
    });
    function A() {
        C.addEventListener ? (C.removeEventListener("DOMContentLoaded", L, !1), e.removeEventListener("load", L, !1)) : (C.detachEvent("onreadystatechange", L), e.detachEvent("onload", L))
    }

    function L() {
        (C.addEventListener || "load" === event.type || "complete" === C.readyState) && (A(), f.ready())
    }

    f.ready.promise = function (t) {
        if (!q)if (q = f.Deferred(), "complete" === C.readyState) setTimeout(f.ready); else if (C.addEventListener) C.addEventListener("DOMContentLoaded", L, !1), e.addEventListener("load", L, !1); else {
            C.attachEvent("onreadystatechange", L), e.attachEvent("onload", L);
            var n = !1;
            try {
                n = null == e.frameElement && C.documentElement
            } catch (a) {
            }
            n && n.doScroll && !function i() {
                if (!f.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    A(), f.ready()
                }
            }()
        }
        return q.promise(t)
    };
    var I, M = "undefined";
    for (I in f(d))break;
    d.ownLast = "0" !== I, d.inlineBlockNeedsLayout = !1, f(function () {
        var e, t, n, a;
        n = C.getElementsByTagName("body")[0], n && n.style && (t = C.createElement("div"), a = C.createElement("div"), a.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(a).appendChild(t), typeof t.style.zoom !== M && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", d.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(a))
    }), function () {
        var e = C.createElement("div");
        if (null == d.deleteExpando) {
            d.deleteExpando = !0;
            try {
                delete e.test
            } catch (t) {
                d.deleteExpando = !1
            }
        }
        e = null
    }(), f.acceptData = function (e) {
        var t = f.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || t !== !0 && e.getAttribute("classid") === t)
    };
    var O = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, U = /([A-Z])/g;

    function P(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var a = "data-" + t.replace(U, "-$1").toLowerCase();
            if (n = e.getAttribute(a), "string" == typeof n) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : O.test(n) ? f.parseJSON(n) : n)
                } catch (i) {
                }
                f.data(e, t, n)
            } else n = void 0
        }
        return n
    }

    function F(e) {
        var t;
        for (t in e)if (("data" !== t || !f.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
        return !0
    }

    function B(e, t, a, i) {
        if (f.acceptData(e)) {
            var r, o, s = f.expando, l = e.nodeType, c = l ? f.cache : e, d = l ? e[s] : e[s] && s;
            if (d && c[d] && (i || c[d].data) || void 0 !== a || "string" != typeof t)return d || (d = l ? e[s] = n.pop() || f.guid++ : s), c[d] || (c[d] = l ? {} : {toJSON: f.noop}), ("object" == typeof t || "function" == typeof t) && (i ? c[d] = f.extend(c[d], t) : c[d].data = f.extend(c[d].data, t)), o = c[d], i || (o.data || (o.data = {}), o = o.data), void 0 !== a && (o[f.camelCase(t)] = a), "string" == typeof t ? (r = o[t], null == r && (r = o[f.camelCase(t)])) : r = o, r
        }
    }

    function H(e, t, n) {
        if (f.acceptData(e)) {
            var a, i, r = e.nodeType, o = r ? f.cache : e, s = r ? e[f.expando] : f.expando;
            if (o[s]) {
                if (t && (a = n ? o[s] : o[s].data)) {
                    f.isArray(t) ? t = t.concat(f.map(t, f.camelCase)) : t in a ? t = [t] : (t = f.camelCase(t), t = t in a ? [t] : t.split(" ")), i = t.length;
                    for (; i--;)delete a[t[i]];
                    if (n ? !F(a) : !f.isEmptyObject(a))return
                }
                (n || (delete o[s].data, F(o[s]))) && (r ? f.cleanData([e], !0) : d.deleteExpando || o != o.window ? delete o[s] : o[s] = null)
            }
        }
    }

    f.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (e) {
            return e = e.nodeType ? f.cache[e[f.expando]] : e[f.expando], !!e && !F(e)
        },
        data: function (e, t, n) {
            return B(e, t, n)
        },
        removeData: function (e, t) {
            return H(e, t)
        },
        _data: function (e, t, n) {
            return B(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return H(e, t, !0)
        }
    }), f.fn.extend({
        data: function (e, t) {
            var n, a, i, r = this[0], o = r && r.attributes;
            if (void 0 === e) {
                if (this.length && (i = f.data(r), 1 === r.nodeType && !f._data(r, "parsedAttrs"))) {
                    for (n = o.length; n--;)o[n] && (a = o[n].name, 0 === a.indexOf("data-") && (a = f.camelCase(a.slice(5)), P(r, a, i[a])));
                    f._data(r, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function () {
                f.data(this, e)
            }) : arguments.length > 1 ? this.each(function () {
                f.data(this, e, t)
            }) : r ? P(r, e, f.data(r, e)) : void 0
        }, removeData: function (e) {
            return this.each(function () {
                f.removeData(this, e)
            })
        }
    }), f.extend({
        queue: function (e, t, n) {
            var a;
            return e ? (t = (t || "fx") + "queue", a = f._data(e, t), n && (!a || f.isArray(n) ? a = f._data(e, t, f.makeArray(n)) : a.push(n)), a || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = f.queue(e, t), a = n.length, i = n.shift(), r = f._queueHooks(e, t), o = function () {
                f.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), a--), i && ("fx" === t && n.unshift("inprogress"), delete r.stop, i.call(e, o, r)), !a && r && r.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return f._data(e, n) || f._data(e, n, {
                    empty: f.Callbacks("once memory").add(function () {
                        f._removeData(e, t + "queue"), f._removeData(e, n)
                    })
                })
        }
    }), f.fn.extend({
        queue: function (e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? f.queue(this[0], e) : void 0 === t ? this : this.each(function () {
                var n = f.queue(this, e, t);
                f._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && f.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                f.dequeue(this, e)
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, t) {
            var n, a = 1, i = f.Deferred(), r = this, o = this.length, s = function () {
                --a || i.resolveWith(r, [r])
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)n = f._data(r[o], e + "queueHooks"), n && n.empty && (a++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var R = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, W = ["Top", "Right", "Bottom", "Left"], X = function (e, t) {
        return e = t || e, "none" === f.css(e, "display") || !f.contains(e.ownerDocument, e)
    }, V = f.access = function (e, t, n, a, i, r, o) {
        var s = 0, l = e.length, c = null == n;
        if ("object" === f.type(n)) {
            i = !0;
            for (s in n)f.access(e, t, s, n[s], !0, r, o)
        } else if (void 0 !== a && (i = !0, f.isFunction(a) || (o = !0), c && (o ? (t.call(e, a), t = null) : (c = t, t = function (e, t, n) {
                return c.call(f(e), n)
            })), t))for (; l > s; s++)t(e[s], n, o ? a : a.call(e[s], s, t(e[s], n)));
        return i ? e : c ? t.call(e) : l ? t(e[0], n) : r
    }, J = /^(?:checkbox|radio)$/i;
    !function () {
        var e = C.createElement("input"), t = C.createElement("div"), n = C.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d.leadingWhitespace = 3 === t.firstChild.nodeType, d.tbody = !t.getElementsByTagName("tbody").length, d.htmlSerialize = !!t.getElementsByTagName("link").length, d.html5Clone = "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), d.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", d.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", d.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, d.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function () {
                d.noCloneEvent = !1
            }), t.cloneNode(!0).click()), null == d.deleteExpando) {
            d.deleteExpando = !0;
            try {
                delete t.test
            } catch (a) {
                d.deleteExpando = !1
            }
        }
    }(), function () {
        var t, n, a = C.createElement("div");
        for (t in{
            submit: !0,
            change: !0,
            focusin: !0
        })n = "on" + t, (d[t + "Bubbles"] = n in e) || (a.setAttribute(n, "t"), d[t + "Bubbles"] = a.attributes[n].expando === !1);
        a = null
    }();
    var Q = /^(?:input|select|textarea)$/i, Y = /^key/, G = /^(?:mouse|pointer|contextmenu)|click/,
        Z = /^(?:focusinfocus|focusoutblur)$/, K = /^([^.]*)(?:\.(.+)|)$/;

    function ee() {
        return !0
    }

    function te() {
        return !1
    }

    function ne() {
        try {
            return C.activeElement
        } catch (e) {
        }
    }

    f.event = {
        global: {},
        add: function (e, t, n, a, i) {
            var r, o, s, l, c, d, u, p, h, g, m, v = f._data(e);
            if (v) {
                for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = f.guid++), (o = v.events) || (o = v.events = {}), (d = v.handle) || (d = v.handle = function (e) {
                    return typeof f === M || e && f.event.triggered === e.type ? void 0 : f.event.dispatch.apply(d.elem, arguments)
                }, d.elem = e), t = (t || "").match(z) || [""], s = t.length; s--;)r = K.exec(t[s]) || [], h = m = r[1], g = (r[2] || "").split(".").sort(), h && (c = f.event.special[h] || {}, h = (i ? c.delegateType : c.bindType) || h, c = f.event.special[h] || {}, u = f.extend({
                    type: h,
                    origType: m,
                    data: a,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && f.expr.match.needsContext.test(i),
                    namespace: g.join(".")
                }, l), (p = o[h]) || (p = o[h] = [], p.delegateCount = 0, c.setup && c.setup.call(e, a, g, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), c.add && (c.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, u) : p.push(u), f.event.global[h] = !0);
                e = null
            }
        },
        remove: function (e, t, n, a, i) {
            var r, o, s, l, c, d, u, p, h, g, m, v = f.hasData(e) && f._data(e);
            if (v && (d = v.events)) {
                for (t = (t || "").match(z) || [""], c = t.length; c--;)if (s = K.exec(t[c]) || [], h = m = s[1], g = (s[2] || "").split(".").sort(), h) {
                    for (u = f.event.special[h] || {}, h = (a ? u.delegateType : u.bindType) || h, p = d[h] || [], s = s[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;)o = p[r], !i && m !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || a && a !== o.selector && ("**" !== a || !o.selector) || (p.splice(r, 1), o.selector && p.delegateCount--, u.remove && u.remove.call(e, o));
                    l && !p.length && (u.teardown && u.teardown.call(e, g, v.handle) !== !1 || f.removeEvent(e, h, v.handle), delete d[h])
                } else for (h in d)f.event.remove(e, h + t[c], n, a, !0);
                f.isEmptyObject(d) && (delete v.handle, f._removeData(e, "events"))
            }
        },
        trigger: function (t, n, a, i) {
            var r, o, s, l, d, u, p, h = [a || C], g = c.call(t, "type") ? t.type : t,
                m = c.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = u = a = a || C, 3 !== a.nodeType && 8 !== a.nodeType && !Z.test(g + f.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), o = g.indexOf(":") < 0 && "on" + g, t = t[f.expando] ? t : new f.Event(g, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = m.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = a), n = null == n ? [t] : f.makeArray(n, [t]), d = f.event.special[g] || {}, i || !d.trigger || d.trigger.apply(a, n) !== !1)) {
                if (!i && !d.noBubble && !f.isWindow(a)) {
                    for (l = d.delegateType || g, Z.test(l + g) || (s = s.parentNode); s; s = s.parentNode)h.push(s), u = s;
                    u === (a.ownerDocument || C) && h.push(u.defaultView || u.parentWindow || e)
                }
                for (p = 0; (s = h[p++]) && !t.isPropagationStopped();)t.type = p > 1 ? l : d.bindType || g, r = (f._data(s, "events") || {})[t.type] && f._data(s, "handle"), r && r.apply(s, n), r = o && s[o], r && r.apply && f.acceptData(s) && (t.result = r.apply(s, n), t.result === !1 && t.preventDefault());
                if (t.type = g, !i && !t.isDefaultPrevented() && (!d._default || d._default.apply(h.pop(), n) === !1) && f.acceptData(a) && o && a[g] && !f.isWindow(a)) {
                    u = a[o], u && (a[o] = null), f.event.triggered = g;
                    try {
                        a[g]()
                    } catch (v) {
                    }
                    f.event.triggered = void 0, u && (a[o] = u)
                }
                return t.result
            }
        },
        dispatch: function (e) {
            e = f.event.fix(e);
            var t, n, i, r, o, s = [], l = a.call(arguments), c = (f._data(this, "events") || {})[e.type] || [],
                d = f.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !d.preDispatch || d.preDispatch.call(this, e) !== !1) {
                for (s = f.event.handlers.call(this, e, c), t = 0; (r = s[t++]) && !e.isPropagationStopped();)for (e.currentTarget = r.elem, o = 0; (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, n = ((f.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, l), void 0 !== n && (e.result = n) === !1 && (e.preventDefault(), e.stopPropagation()));
                return d.postDispatch && d.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, t) {
            var n, a, i, r, o = [], s = t.delegateCount, l = e.target;
            if (s && l.nodeType && (!e.button || "click" !== e.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (i = [], r = 0; s > r; r++)a = t[r], n = a.selector + " ", void 0 === i[n] && (i[n] = a.needsContext ? f(n, this).index(l) >= 0 : f.find(n, this, null, [l]).length), i[n] && i.push(a);
                i.length && o.push({elem: l, handlers: i})
            }
            return s < t.length && o.push({elem: this, handlers: t.slice(s)}), o
        },
        fix: function (e) {
            if (e[f.expando])return e;
            var t, n, a, i = e.type, r = e, o = this.fixHooks[i];
            for (o || (this.fixHooks[i] = o = G.test(i) ? this.mouseHooks : Y.test(i) ? this.keyHooks : {}), a = o.props ? this.props.concat(o.props) : this.props, e = new f.Event(r), t = a.length; t--;)n = a[t], e[n] = r[n];
            return e.target || (e.target = r.srcElement || C), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, o.filter ? o.filter(e, r) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, t) {
                var n, a, i, r = t.button, o = t.fromElement;
                return null == e.pageX && null != t.clientX && (a = e.target.ownerDocument || C, i = a.documentElement, n = a.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !e.relatedTarget && o && (e.relatedTarget = o === e.target ? t.toElement : o), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== ne() && this.focus)try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === ne() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return f.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (e) {
                    return f.nodeName(e.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, a) {
            var i = f.extend(new f.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            a ? f.event.trigger(i, null, t) : f.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, f.removeEvent = C.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var a = "on" + t;
        e.detachEvent && (typeof e[a] === M && (e[a] = null), e.detachEvent(a, n))
    }, f.Event = function (e, t) {
        return this instanceof f.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? ee : te) : this.type = e, t && f.extend(this, t), this.timeStamp = e && e.timeStamp || f.now(), void(this[f.expando] = !0)) : new f.Event(e, t)
    }, f.Event.prototype = {
        isDefaultPrevented: te,
        isPropagationStopped: te,
        isImmediatePropagationStopped: te,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = ee, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = ee, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = ee, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (e, t) {
        f.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, a = this, i = e.relatedTarget, r = e.handleObj;
                return (!i || i !== a && !f.contains(a, i)) && (e.type = r.origType, n = r.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), d.submitBubbles || (f.event.special.submit = {
        setup: function () {
            return !f.nodeName(this, "form") && void f.event.add(this, "click._submit keypress._submit", function (e) {
                    var t = e.target, n = f.nodeName(t, "input") || f.nodeName(t, "button") ? t.form : void 0;
                    n && !f._data(n, "submitBubbles") && (f.event.add(n, "submit._submit", function (e) {
                        e._submit_bubble = !0
                    }), f._data(n, "submitBubbles", !0))
                })
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && f.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return !f.nodeName(this, "form") && void f.event.remove(this, "._submit")
        }
    }), d.changeBubbles || (f.event.special.change = {
        setup: function () {
            return Q.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (f.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), f.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), f.event.simulate("change", this, e, !0)
            })), !1) : void f.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Q.test(t.nodeName) && !f._data(t, "changeBubbles") && (f.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || f.event.simulate("change", this.parentNode, e, !0)
                }), f._data(t, "changeBubbles", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return f.event.remove(this, "._change"), !Q.test(this.nodeName)
        }
    }), d.focusinBubbles || f.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = function (e) {
            f.event.simulate(t, e.target, f.event.fix(e), !0)
        };
        f.event.special[t] = {
            setup: function () {
                var a = this.ownerDocument || this, i = f._data(a, t);
                i || a.addEventListener(e, n, !0), f._data(a, t, (i || 0) + 1)
            }, teardown: function () {
                var a = this.ownerDocument || this, i = f._data(a, t) - 1;
                i ? f._data(a, t, i) : (a.removeEventListener(e, n, !0), f._removeData(a, t))
            }
        }
    }), f.fn.extend({
        on: function (e, t, n, a, i) {
            var r, o;
            if ("object" == typeof e) {
                "string" != typeof t && (n = n || t, t = void 0);
                for (r in e)this.on(r, t, n, e[r], i);
                return this
            }
            if (null == n && null == a ? (a = t, n = t = void 0) : null == a && ("string" == typeof t ? (a = n, n = void 0) : (a = n, n = t, t = void 0)), a === !1) a = te; else if (!a)return this;
            return 1 === i && (o = a, a = function (e) {
                return f().off(e), o.apply(this, arguments)
            }, a.guid = o.guid || (o.guid = f.guid++)), this.each(function () {
                f.event.add(this, e, a, n, t)
            })
        }, one: function (e, t, n, a) {
            return this.on(e, t, n, a, 1)
        }, off: function (e, t, n) {
            var a, i;
            if (e && e.preventDefault && e.handleObj)return a = e.handleObj, f(e.delegateTarget).off(a.namespace ? a.origType + "." + a.namespace : a.origType, a.selector, a.handler), this;
            if ("object" == typeof e) {
                for (i in e)this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t, t = void 0), n === !1 && (n = te), this.each(function () {
                f.event.remove(this, e, n, t)
            })
        }, trigger: function (e, t) {
            return this.each(function () {
                f.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? f.event.trigger(e, t, n, !0) : void 0
        }
    });
    function ae(e) {
        var t = ie.split("|"), n = e.createDocumentFragment();
        if (n.createElement)for (; t.length;)n.createElement(t.pop());
        return n
    }

    var ie = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        re = / jQuery\d+="(?:null|\d+)"/g, oe = new RegExp("<(?:" + ie + ")[\\s/>]", "i"), se = /^\s+/,
        le = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ce = /<([\w:]+)/,
        de = /<tbody/i, ue = /<|&#?\w+;/, fe = /<(?:script|style|link)/i, pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        he = /^$|\/(?:java|ecma)script/i, ge = /^true\/(.*)/, me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ve = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: d.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        }, ye = ae(C), we = ye.appendChild(C.createElement("div"));
    ve.optgroup = ve.option, ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead, ve.th = ve.td;
    function $e(e, t) {
        var n, a, i = 0,
            r = typeof e.getElementsByTagName !== M ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== M ? e.querySelectorAll(t || "*") : void 0;
        if (!r)for (r = [], n = e.childNodes || e; null != (a = n[i]); i++)!t || f.nodeName(a, t) ? r.push(a) : f.merge(r, $e(a, t));
        return void 0 === t || t && f.nodeName(e, t) ? f.merge([e], r) : r
    }

    function be(e) {
        J.test(e.type) && (e.defaultChecked = e.checked)
    }

    function xe(e, t) {
        return f.nodeName(e, "table") && f.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function ke(e) {
        return e.type = (null !== f.find.attr(e, "type")) + "/" + e.type, e
    }

    function Ce(e) {
        var t = ge.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _e(e, t) {
        for (var n, a = 0; null != (n = e[a]); a++)f._data(n, "globalEval", !t || f._data(t[a], "globalEval"))
    }

    function Te(e, t) {
        if (1 === t.nodeType && f.hasData(e)) {
            var n, a, i, r = f._data(e), o = f._data(t, r), s = r.events;
            if (s) {
                delete o.handle, o.events = {};
                for (n in s)for (a = 0, i = s[n].length; i > a; a++)f.event.add(t, n, s[n][a])
            }
            o.data && (o.data = f.extend({}, o.data))
        }
    }

    function je(e, t) {
        var n, a, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !d.noCloneEvent && t[f.expando]) {
                i = f._data(t);
                for (a in i.events)f.removeEvent(t, a, i.handle);
                t.removeAttribute(f.expando)
            }
            "script" === n && t.text !== e.text ? (ke(t).text = e.text, Ce(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), d.html5Clone && e.innerHTML && !f.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && J.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    f.extend({
        clone: function (e, t, n) {
            var a, i, r, o, s, l = f.contains(e.ownerDocument, e);
            if (d.html5Clone || f.isXMLDoc(e) || !oe.test("<" + e.nodeName + ">") ? r = e.cloneNode(!0) : (we.innerHTML = e.outerHTML, we.removeChild(r = we.firstChild)), !(d.noCloneEvent && d.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || f.isXMLDoc(e)))for (a = $e(r), s = $e(e), o = 0; null != (i = s[o]); ++o)a[o] && je(i, a[o]);
            if (t)if (n)for (s = s || $e(e), a = a || $e(r), o = 0; null != (i = s[o]); o++)Te(i, a[o]); else Te(e, r);
            return a = $e(r, "script"), a.length > 0 && _e(a, !l && $e(e, "script")), a = s = i = null, r
        }, buildFragment: function (e, t, n, a) {
            for (var i, r, o, s, l, c, u, p = e.length, h = ae(t), g = [], m = 0; p > m; m++)if (r = e[m], r || 0 === r)if ("object" === f.type(r)) f.merge(g, r.nodeType ? [r] : r); else if (ue.test(r)) {
                for (s = s || h.appendChild(t.createElement("div")), l = (ce.exec(r) || ["", ""])[1].toLowerCase(), u = ve[l] || ve._default, s.innerHTML = u[1] + r.replace(le, "<$1></$2>") + u[2], i = u[0]; i--;)s = s.lastChild;
                if (!d.leadingWhitespace && se.test(r) && g.push(t.createTextNode(se.exec(r)[0])), !d.tbody)for (r = "table" !== l || de.test(r) ? "<table>" !== u[1] || de.test(r) ? 0 : s : s.firstChild, i = r && r.childNodes.length; i--;)f.nodeName(c = r.childNodes[i], "tbody") && !c.childNodes.length && r.removeChild(c);
                for (f.merge(g, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
                s = h.lastChild
            } else g.push(t.createTextNode(r));
            for (s && h.removeChild(s), d.appendChecked || f.grep($e(g, "input"), be), m = 0; r = g[m++];)if ((!a || -1 === f.inArray(r, a)) && (o = f.contains(r.ownerDocument, r), s = $e(h.appendChild(r), "script"), o && _e(s), n))for (i = 0; r = s[i++];)he.test(r.type || "") && n.push(r);
            return s = null, h
        }, cleanData: function (e, t) {
            for (var a, i, r, o, s = 0, l = f.expando, c = f.cache, u = d.deleteExpando, p = f.event.special; null != (a = e[s]); s++)if ((t || f.acceptData(a)) && (r = a[l], o = r && c[r])) {
                if (o.events)for (i in o.events)p[i] ? f.event.remove(a, i) : f.removeEvent(a, i, o.handle);
                c[r] && (delete c[r], u ? delete a[l] : typeof a.removeAttribute !== M ? a.removeAttribute(l) : a[l] = null, n.push(r))
            }
        }
    }), f.fn.extend({
        text: function (e) {
            return V(this, function (e) {
                return void 0 === e ? f.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(e))
            }, null, e, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = xe(this, e);
                    t.appendChild(e)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = xe(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, a = e ? f.filter(e, this) : this, i = 0; null != (n = a[i]); i++)t || 1 !== n.nodeType || f.cleanData($e(n)), n.parentNode && (t && f.contains(n.ownerDocument, n) && _e($e(n, "script")), n.parentNode.removeChild(n));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && f.cleanData($e(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                e.options && f.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function () {
                return f.clone(this, e, t)
            })
        }, html: function (e) {
            return V(this, function (e) {
                var t = this[0] || {}, n = 0, a = this.length;
                if (void 0 === e)return 1 === t.nodeType ? t.innerHTML.replace(re, "") : void 0;
                if (!("string" != typeof e || fe.test(e) || !d.htmlSerialize && oe.test(e) || !d.leadingWhitespace && se.test(e) || ve[(ce.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(le, "<$1></$2>");
                    try {
                        for (; a > n; n++)t = this[n] || {}, 1 === t.nodeType && (f.cleanData($e(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (i) {
                    }
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function () {
            var e = arguments[0];
            return this.domManip(arguments, function (t) {
                e = this.parentNode, f.cleanData($e(this)), e && e.replaceChild(t, this)
            }), e && (e.length || e.nodeType) ? this : this.remove()
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, t) {
            e = i.apply([], e);
            var n, a, r, o, s, l, c = 0, u = this.length, p = this, h = u - 1, g = e[0], m = f.isFunction(g);
            if (m || u > 1 && "string" == typeof g && !d.checkClone && pe.test(g))return this.each(function (n) {
                var a = p.eq(n);
                m && (e[0] = g.call(this, n, a.html())), a.domManip(e, t)
            });
            if (u && (l = f.buildFragment(e, this[0].ownerDocument, !1, this), n = l.firstChild, 1 === l.childNodes.length && (l = n), n)) {
                for (o = f.map($e(l, "script"), ke), r = o.length; u > c; c++)a = l, c !== h && (a = f.clone(a, !0, !0), r && f.merge(o, $e(a, "script"))), t.call(this[c], a, c);
                if (r)for (s = o[o.length - 1].ownerDocument, f.map(o, Ce), c = 0; r > c; c++)a = o[c], he.test(a.type || "") && !f._data(a, "globalEval") && f.contains(s, a) && (a.src ? f._evalUrl && f._evalUrl(a.src) : f.globalEval((a.text || a.textContent || a.innerHTML || "").replace(me, "")));
                l = n = null
            }
            return this
        }
    }), f.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        f.fn[e] = function (e) {
            for (var n, a = 0, i = [], o = f(e), s = o.length - 1; s >= a; a++)n = a === s ? this : this.clone(!0), f(o[a])[t](n), r.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Se, Ee = {};

    function ze(t, n) {
        var a, i = f(n.createElement(t)).appendTo(n.body),
            r = e.getDefaultComputedStyle && (a = e.getDefaultComputedStyle(i[0])) ? a.display : f.css(i[0], "display");
        return i.detach(), r
    }

    function Ne(e) {
        var t = C, n = Ee[e];
        return n || (n = ze(e, t), "none" !== n && n || (Se = (Se || f("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), t = (Se[0].contentWindow || Se[0].contentDocument).document, t.write(), t.close(), n = ze(e, t), Se.detach()), Ee[e] = n), n
    }

    !function () {
        var e;
        d.shrinkWrapBlocks = function () {
            if (null != e)return e;
            e = !1;
            var t, n, a;
            return n = C.getElementsByTagName("body")[0], n && n.style ? (t = C.createElement("div"), a = C.createElement("div"), a.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(a).appendChild(t), typeof t.style.zoom !== M && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(C.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(a), e) : void 0
        }
    }();
    var De, qe, Ae = /^margin/, Le = new RegExp("^(" + R + ")(?!px)[a-z%]+$", "i"), Ie = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (De = function (t) {
        return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    }, qe = function (e, t, n) {
        var a, i, r, o, s = e.style;
        return n = n || De(e), o = n ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== o || f.contains(e.ownerDocument, e) || (o = f.style(e, t)), Le.test(o) && Ae.test(t) && (a = s.width, i = s.minWidth, r = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = a, s.minWidth = i, s.maxWidth = r)), void 0 === o ? o : o + ""
    }) : C.documentElement.currentStyle && (De = function (e) {
            return e.currentStyle
        }, qe = function (e, t, n) {
            var a, i, r, o, s = e.style;
            return n = n || De(e), o = n ? n[t] : void 0, null == o && s && s[t] && (o = s[t]), Le.test(o) && !Ie.test(t) && (a = s.left, i = e.runtimeStyle, r = i && i.left, r && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : o, o = s.pixelLeft + "px", s.left = a, r && (i.left = r)), void 0 === o ? o : o + "" || "auto"
        });
    function Me(e, t) {
        return {
            get: function () {
                var n = e();
                if (null != n)return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    !function () {
        var t, n, a, i, r, o, s;
        if (t = C.createElement("div"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = t.getElementsByTagName("a")[0], n = a && a.style) {
            n.cssText = "float:left;opacity:.5", d.opacity = "0.5" === n.opacity, d.cssFloat = !!n.cssFloat, t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", d.clearCloneStyle = "content-box" === t.style.backgroundClip, d.boxSizing = "" === n.boxSizing || "" === n.MozBoxSizing || "" === n.WebkitBoxSizing, f.extend(d, {
                reliableHiddenOffsets: function () {
                    return null == o && l(), o
                }, boxSizingReliable: function () {
                    return null == r && l(), r
                }, pixelPosition: function () {
                    return null == i && l(), i
                }, reliableMarginRight: function () {
                    return null == s && l(), s
                }
            });
            function l() {
                var t, n, a, l;
                n = C.getElementsByTagName("body")[0], n && n.style && (t = C.createElement("div"), a = C.createElement("div"), a.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(a).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i = r = !1, s = !0, e.getComputedStyle && (i = "1%" !== (e.getComputedStyle(t, null) || {}).top, r = "4px" === (e.getComputedStyle(t, null) || {width: "4px"}).width, l = t.appendChild(C.createElement("div")), l.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", l.style.marginRight = l.style.width = "0", t.style.width = "1px", s = !parseFloat((e.getComputedStyle(l, null) || {}).marginRight), t.removeChild(l)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l = t.getElementsByTagName("td"), l[0].style.cssText = "margin:0;border:0;padding:0;display:none", o = 0 === l[0].offsetHeight, o && (l[0].style.display = "", l[1].style.display = "none", o = 0 === l[0].offsetHeight), n.removeChild(a))
            }
        }
    }(), f.swap = function (e, t, n, a) {
        var i, r, o = {};
        for (r in t)o[r] = e.style[r], e.style[r] = t[r];
        i = n.apply(e, a || []);
        for (r in t)e.style[r] = o[r];
        return i
    };
    var Oe = /alpha\([^)]*\)/i, Ue = /opacity\s*=\s*([^)]*)/, Pe = /^(none|table(?!-c[ea]).+)/,
        Fe = new RegExp("^(" + R + ")(.*)$", "i"), Be = new RegExp("^([+-])=(" + R + ")", "i"),
        He = {position: "absolute", visibility: "hidden", display: "block"},
        Re = {letterSpacing: "0", fontWeight: "400"}, We = ["Webkit", "O", "Moz", "ms"];

    function Xe(e, t) {
        if (t in e)return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), a = t, i = We.length; i--;)if (t = We[i] + n, t in e)return t;
        return a
    }

    function Ve(e, t) {
        for (var n, a, i, r = [], o = 0, s = e.length; s > o; o++)a = e[o], a.style && (r[o] = f._data(a, "olddisplay"), n = a.style.display, t ? (r[o] || "none" !== n || (a.style.display = ""), "" === a.style.display && X(a) && (r[o] = f._data(a, "olddisplay", Ne(a.nodeName)))) : (i = X(a), (n && "none" !== n || !i) && f._data(a, "olddisplay", i ? n : f.css(a, "display"))));
        for (o = 0; s > o; o++)a = e[o], a.style && (t && "none" !== a.style.display && "" !== a.style.display || (a.style.display = t ? r[o] || "" : "none"));
        return e
    }

    function Je(e, t, n) {
        var a = Fe.exec(t);
        return a ? Math.max(0, a[1] - (n || 0)) + (a[2] || "px") : t
    }

    function Qe(e, t, n, a, i) {
        for (var r = n === (a ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; 4 > r; r += 2)"margin" === n && (o += f.css(e, n + W[r], !0, i)), a ? ("content" === n && (o -= f.css(e, "padding" + W[r], !0, i)), "margin" !== n && (o -= f.css(e, "border" + W[r] + "Width", !0, i))) : (o += f.css(e, "padding" + W[r], !0, i), "padding" !== n && (o += f.css(e, "border" + W[r] + "Width", !0, i)));
        return o
    }

    function Ye(e, t, n) {
        var a = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, r = De(e),
            o = d.boxSizing && "border-box" === f.css(e, "boxSizing", !1, r);
        if (0 >= i || null == i) {
            if (i = qe(e, t, r), (0 > i || null == i) && (i = e.style[t]), Le.test(i))return i;
            a = o && (d.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + Qe(e, t, n || (o ? "border" : "content"), a, r) + "px"
    }

    f.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = qe(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": d.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, t, n, a) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, r, o, s = f.camelCase(t), l = e.style;
                if (t = f.cssProps[s] || (f.cssProps[s] = Xe(l, s)), o = f.cssHooks[t] || f.cssHooks[s], void 0 === n)return o && "get" in o && void 0 !== (i = o.get(e, !1, a)) ? i : l[t];
                if (r = typeof n, "string" === r && (i = Be.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(f.css(e, t)), r = "number"), null != n && n === n && ("number" !== r || f.cssNumber[s] || (n += "px"), d.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(e, n, a)))))try {
                    l[t] = n
                } catch (c) {
                }
            }
        },
        css: function (e, t, n, a) {
            var i, r, o, s = f.camelCase(t);
            return t = f.cssProps[s] || (f.cssProps[s] = Xe(e.style, s)), o = f.cssHooks[t] || f.cssHooks[s], o && "get" in o && (r = o.get(e, !0, n)), void 0 === r && (r = qe(e, t, a)), "normal" === r && t in Re && (r = Re[t]), "" === n || n ? (i = parseFloat(r), n === !0 || f.isNumeric(i) ? i || 0 : r) : r
        }
    }), f.each(["height", "width"], function (e, t) {
        f.cssHooks[t] = {
            get: function (e, n, a) {
                return n ? Pe.test(f.css(e, "display")) && 0 === e.offsetWidth ? f.swap(e, He, function () {
                    return Ye(e, t, a)
                }) : Ye(e, t, a) : void 0
            }, set: function (e, n, a) {
                var i = a && De(e);
                return Je(e, n, a ? Qe(e, t, a, d.boxSizing && "border-box" === f.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), d.opacity || (f.cssHooks.opacity = {
        get: function (e, t) {
            return Ue.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, a = e.currentStyle, i = f.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                r = a && a.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === f.trim(r.replace(Oe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || a && !a.filter) || (n.filter = Oe.test(r) ? r.replace(Oe, i) : r + " " + i)
        }
    }), f.cssHooks.marginRight = Me(d.reliableMarginRight, function (e, t) {
        return t ? f.swap(e, {display: "inline-block"}, qe, [e, "marginRight"]) : void 0
    }), f.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        f.cssHooks[e + t] = {
            expand: function (n) {
                for (var a = 0, i = {}, r = "string" == typeof n ? n.split(" ") : [n]; 4 > a; a++)i[e + W[a] + t] = r[a] || r[a - 2] || r[0];
                return i
            }
        }, Ae.test(e) || (f.cssHooks[e + t].set = Je)
    }), f.fn.extend({
        css: function (e, t) {
            return V(this, function (e, t, n) {
                var a, i, r = {}, o = 0;
                if (f.isArray(t)) {
                    for (a = De(e), i = t.length; i > o; o++)r[t[o]] = f.css(e, t[o], !1, a);
                    return r
                }
                return void 0 !== n ? f.style(e, t, n) : f.css(e, t)
            }, e, t, arguments.length > 1)
        }, show: function () {
            return Ve(this, !0)
        }, hide: function () {
            return Ve(this)
        }, toggle: function (e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
                X(this) ? f(this).show() : f(this).hide()
            })
        }
    });
    function Ge(e, t, n, a, i) {
        return new Ge.prototype.init(e, t, n, a, i)
    }

    f.Tween = Ge,
        Ge.prototype = {
            constructor: Ge, init: function (e, t, n, a, i, r) {
                this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = a, this.unit = r || (f.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var e = Ge.propHooks[this.prop];
                return e && e.get ? e.get(this) : Ge.propHooks._default.get(this)
            }, run: function (e) {
                var t, n = Ge.propHooks[this.prop];
                return this.pos = t = this.options.duration ? f.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ge.propHooks._default.set(this), this
            }
        }, Ge.prototype.init.prototype = Ge.prototype, Ge.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = f.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                f.fx.step[e.prop] ? f.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[f.cssProps[e.prop]] || f.cssHooks[e.prop]) ? f.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, Ge.propHooks.scrollTop = Ge.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, f.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, f.fx = Ge.prototype.init, f.fx.step = {};
    var Ze, Ke, et = /^(?:toggle|show|hide)$/, tt = new RegExp("^(?:([+-])=|)(" + R + ")([a-z%]*)$", "i"),
        nt = /queueHooks$/, at = [lt], it = {
            "*": [function (e, t) {
                var n = this.createTween(e, t), a = n.cur(), i = tt.exec(t), r = i && i[3] || (f.cssNumber[e] ? "" : "px"),
                    o = (f.cssNumber[e] || "px" !== r && +a) && tt.exec(f.css(n.elem, e)), s = 1, l = 20;
                if (o && o[3] !== r) {
                    r = r || o[3], i = i || [], o = +a || 1;
                    do s = s || ".5", o /= s, f.style(n.elem, e, o + r); while (s !== (s = n.cur() / a) && 1 !== s && --l)
                }
                return i && (o = n.start = +o || +a || 0, n.unit = r, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
            }]
        };

    function rt() {
        return setTimeout(function () {
            Ze = void 0
        }), Ze = f.now()
    }

    function ot(e, t) {
        var n, a = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = W[i], a["margin" + n] = a["padding" + n] = e;
        return t && (a.opacity = a.width = e), a
    }

    function st(e, t, n) {
        for (var a, i = (it[t] || []).concat(it["*"]), r = 0, o = i.length; o > r; r++)if (a = i[r].call(n, t, e))return a
    }

    function lt(e, t, n) {
        var a, i, r, o, s, l, c, u, p = this, h = {}, g = e.style, m = e.nodeType && X(e), v = f._data(e, "fxshow");
        n.queue || (s = f._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, p.always(function () {
            p.always(function () {
                s.unqueued--, f.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [g.overflow, g.overflowX, g.overflowY], c = f.css(e, "display"), u = "none" === c ? f._data(e, "olddisplay") || Ne(e.nodeName) : c, "inline" === u && "none" === f.css(e, "float") && (d.inlineBlockNeedsLayout && "inline" !== Ne(e.nodeName) ? g.zoom = 1 : g.display = "inline-block")), n.overflow && (g.overflow = "hidden", d.shrinkWrapBlocks() || p.always(function () {
            g.overflow = n.overflow[0], g.overflowX = n.overflow[1], g.overflowY = n.overflow[2]
        }));
        for (a in t)if (i = t[a], et.exec(i)) {
            if (delete t[a], r = r || "toggle" === i, i === (m ? "hide" : "show")) {
                if ("show" !== i || !v || void 0 === v[a])continue;
                m = !0
            }
            h[a] = v && v[a] || f.style(e, a)
        } else c = void 0;
        if (f.isEmptyObject(h)) "inline" === ("none" === c ? Ne(e.nodeName) : c) && (g.display = c); else {
            v ? "hidden" in v && (m = v.hidden) : v = f._data(e, "fxshow", {}), r && (v.hidden = !m), m ? f(e).show() : p.done(function () {
                f(e).hide()
            }), p.done(function () {
                var t;
                f._removeData(e, "fxshow");
                for (t in h)f.style(e, t, h[t])
            });
            for (a in h)o = st(m ? v[a] : 0, a, p), a in v || (v[a] = o.start, m && (o.end = o.start, o.start = "width" === a || "height" === a ? 1 : 0))
        }
    }

    function ct(e, t) {
        var n, a, i, r, o;
        for (n in e)if (a = f.camelCase(n), i = t[a], r = e[n], f.isArray(r) && (i = r[1], r = e[n] = r[0]), n !== a && (e[a] = r, delete e[n]), o = f.cssHooks[a], o && "expand" in o) {
            r = o.expand(r), delete e[a];
            for (n in r)n in e || (e[n] = r[n], t[n] = i)
        } else t[a] = i
    }

    function dt(e, t, n) {
        var a, i, r = 0, o = at.length, s = f.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (i)return !1;
            for (var t = Ze || rt(), n = Math.max(0, c.startTime + c.duration - t), a = n / c.duration || 0, r = 1 - a, o = 0, l = c.tweens.length; l > o; o++)c.tweens[o].run(r);
            return s.notifyWith(e, [c, r, n]), 1 > r && l ? n : (s.resolveWith(e, [c]), !1)
        }, c = s.promise({
            elem: e,
            props: f.extend({}, t),
            opts: f.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ze || rt(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var a = f.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(a), a
            },
            stop: function (t) {
                var n = 0, a = t ? c.tweens.length : 0;
                if (i)return this;
                for (i = !0; a > n; n++)c.tweens[n].run(1);
                return t ? s.resolveWith(e, [c, t]) : s.rejectWith(e, [c, t]), this
            }
        }), d = c.props;
        for (ct(d, c.opts.specialEasing); o > r; r++)if (a = at[r].call(c, e, d, c.opts))return a;
        return f.map(d, st, c), f.isFunction(c.opts.start) && c.opts.start.call(e, c), f.fx.timer(f.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }

    f.Animation = f.extend(dt, {
        tweener: function (e, t) {
            f.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, a = 0, i = e.length; i > a; a++)n = e[a], it[n] = it[n] || [], it[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? at.unshift(e) : at.push(e)
        }
    }), f.speed = function (e, t, n) {
        var a = e && "object" == typeof e ? f.extend({}, e) : {
            complete: n || !n && t || f.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !f.isFunction(t) && t
        };
        return a.duration = f.fx.off ? 0 : "number" == typeof a.duration ? a.duration : a.duration in f.fx.speeds ? f.fx.speeds[a.duration] : f.fx.speeds._default, (null == a.queue || a.queue === !0) && (a.queue = "fx"), a.old = a.complete, a.complete = function () {
            f.isFunction(a.old) && a.old.call(this), a.queue && f.dequeue(this, a.queue)
        }, a
    }, f.fn.extend({
        fadeTo: function (e, t, n, a) {
            return this.filter(X).css("opacity", 0).show().end().animate({opacity: t}, e, n, a)
        }, animate: function (e, t, n, a) {
            var i = f.isEmptyObject(e), r = f.speed(t, n, a), o = function () {
                var t = dt(this, f.extend({}, e), r);
                (i || f._data(this, "finish")) && t.stop(!0)
            };
            return o.finish = o, i || r.queue === !1 ? this.each(o) : this.queue(r.queue, o)
        }, stop: function (e, t, n) {
            var a = function (e) {
                var t = e.stop;
                delete e.stop, t(n)
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, i = null != e && e + "queueHooks", r = f.timers, o = f._data(this);
                if (i) o[i] && o[i].stop && a(o[i]); else for (i in o)o[i] && o[i].stop && nt.test(i) && a(o[i]);
                for (i = r.length; i--;)r[i].elem !== this || null != e && r[i].queue !== e || (r[i].anim.stop(n), t = !1, r.splice(i, 1));
                (t || !n) && f.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = f._data(this), a = n[e + "queue"], i = n[e + "queueHooks"], r = f.timers,
                    o = a ? a.length : 0;
                for (n.finish = !0, f.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;)r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
                for (t = 0; o > t; t++)a[t] && a[t].finish && a[t].finish.call(this);
                delete n.finish
            })
        }
    }), f.each(["toggle", "show", "hide"], function (e, t) {
        var n = f.fn[t];
        f.fn[t] = function (e, a, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ot(t, !0), e, a, i)
        }
    }), f.each({
        slideDown: ot("show"),
        slideUp: ot("hide"),
        slideToggle: ot("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        f.fn[e] = function (e, n, a) {
            return this.animate(t, e, n, a)
        }
    }), f.timers = [], f.fx.tick = function () {
        var e, t = f.timers, n = 0;
        for (Ze = f.now(); n < t.length; n++)e = t[n], e() || t[n] !== e || t.splice(n--, 1);
        t.length || f.fx.stop(), Ze = void 0
    }, f.fx.timer = function (e) {
        f.timers.push(e), e() ? f.fx.start() : f.timers.pop()
    }, f.fx.interval = 13, f.fx.start = function () {
        Ke || (Ke = setInterval(f.fx.tick, f.fx.interval))
    }, f.fx.stop = function () {
        clearInterval(Ke), Ke = null
    }, f.fx.speeds = {slow: 600, fast: 200, _default: 400}, f.fn.delay = function (e, t) {
        return e = f.fx ? f.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var a = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(a)
            }
        })
    }, function () {
        var e, t, n, a, i;
        t = C.createElement("div"), t.setAttribute("className", "t"), t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", a = t.getElementsByTagName("a")[0], n = C.createElement("select"), i = n.appendChild(C.createElement("option")), e = t.getElementsByTagName("input")[0], a.style.cssText = "top:1px", d.getSetAttribute = "t" !== t.className, d.style = /top/.test(a.getAttribute("style")), d.hrefNormalized = "/a" === a.getAttribute("href"), d.checkOn = !!e.value, d.optSelected = i.selected, d.enctype = !!C.createElement("form").enctype, n.disabled = !0, d.optDisabled = !i.disabled, e = C.createElement("input"), e.setAttribute("value", ""), d.input = "" === e.getAttribute("value"), e.value = "t", e.setAttribute("type", "radio"), d.radioValue = "t" === e.value
    }();
    var ut = /\r/g;
    f.fn.extend({
        val: function (e) {
            var t, n, a, i = this[0];
            return arguments.length ? (a = f.isFunction(e), this.each(function (n) {
                var i;
                1 === this.nodeType && (i = a ? e.call(this, n, f(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : f.isArray(i) && (i = f.map(i, function (e) {
                        return null == e ? "" : e + ""
                    })), t = f.valHooks[this.type] || f.valHooks[this.nodeName.toLowerCase()], t && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = f.valHooks[i.type] || f.valHooks[i.nodeName.toLowerCase()], t && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ut, "") : null == n ? "" : n)) : void 0
        }
    }), f.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = f.find.attr(e, "value");
                    return null != t ? t : f.trim(f.text(e))
                }
            }, select: {
                get: function (e) {
                    for (var t, n, a = e.options, i = e.selectedIndex, r = "select-one" === e.type || 0 > i, o = r ? null : [], s = r ? i + 1 : a.length, l = 0 > i ? s : r ? i : 0; s > l; l++)if (n = a[l], !(!n.selected && l !== i || (d.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && f.nodeName(n.parentNode, "optgroup"))) {
                        if (t = f(n).val(), r)return t;
                        o.push(t)
                    }
                    return o
                }, set: function (e, t) {
                    for (var n, a, i = e.options, r = f.makeArray(t), o = i.length; o--;)if (a = i[o], f.inArray(f.valHooks.option.get(a), r) >= 0)try {
                        a.selected = n = !0
                    } catch (s) {
                        a.scrollHeight
                    } else a.selected = !1;
                    return n || (e.selectedIndex = -1), i
                }
            }
        }
    }), f.each(["radio", "checkbox"], function () {
        f.valHooks[this] = {
            set: function (e, t) {
                return f.isArray(t) ? e.checked = f.inArray(f(e).val(), t) >= 0 : void 0
            }
        }, d.checkOn || (f.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var ft, pt, ht = f.expr.attrHandle, gt = /^(?:checked|selected)$/i, mt = d.getSetAttribute, vt = d.input;
    f.fn.extend({
        attr: function (e, t) {
            return V(this, f.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                f.removeAttr(this, e)
            })
        }
    }), f.extend({
        attr: function (e, t, n) {
            var a, i, r = e.nodeType;
            if (e && 3 !== r && 8 !== r && 2 !== r)return typeof e.getAttribute === M ? f.prop(e, t, n) : (1 === r && f.isXMLDoc(e) || (t = t.toLowerCase(), a = f.attrHooks[t] || (f.expr.match.bool.test(t) ? pt : ft)), void 0 === n ? a && "get" in a && null !== (i = a.get(e, t)) ? i : (i = f.find.attr(e, t), null == i ? void 0 : i) : null !== n ? a && "set" in a && void 0 !== (i = a.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void f.removeAttr(e, t))
        }, removeAttr: function (e, t) {
            var n, a, i = 0, r = t && t.match(z);
            if (r && 1 === e.nodeType)for (; n = r[i++];)a = f.propFix[n] || n, f.expr.match.bool.test(n) ? vt && mt || !gt.test(n) ? e[a] = !1 : e[f.camelCase("default-" + n)] = e[a] = !1 : f.attr(e, n, ""), e.removeAttribute(mt ? n : a)
        }, attrHooks: {
            type: {
                set: function (e, t) {
                    if (!d.radioValue && "radio" === t && f.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        }
    }), pt = {
        set: function (e, t, n) {
            return t === !1 ? f.removeAttr(e, n) : vt && mt || !gt.test(n) ? e.setAttribute(!mt && f.propFix[n] || n, n) : e[f.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, f.each(f.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = ht[t] || f.find.attr;
        ht[t] = vt && mt || !gt.test(t) ? function (e, t, a) {
            var i, r;
            return a || (r = ht[t], ht[t] = i, i = null != n(e, t, a) ? t.toLowerCase() : null, ht[t] = r), i
        } : function (e, t, n) {
            return n ? void 0 : e[f.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }), vt && mt || (f.attrHooks.value = {
        set: function (e, t, n) {
            return f.nodeName(e, "input") ? void(e.defaultValue = t) : ft && ft.set(e, t, n)
        }
    }), mt || (ft = {
        set: function (e, t, n) {
            var a = e.getAttributeNode(n);
            return a || e.setAttributeNode(a = e.ownerDocument.createAttribute(n)), a.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    }, ht.id = ht.name = ht.coords = function (e, t, n) {
        var a;
        return n ? void 0 : (a = e.getAttributeNode(t)) && "" !== a.value ? a.value : null
    }, f.valHooks.button = {
        get: function (e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        }, set: ft.set
    }, f.attrHooks.contenteditable = {
        set: function (e, t, n) {
            ft.set(e, "" !== t && t, n)
        }
    }, f.each(["width", "height"], function (e, t) {
        f.attrHooks[t] = {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })), d.style || (f.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || void 0
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    });
    var yt = /^(?:input|select|textarea|button|object)$/i, wt = /^(?:a|area)$/i;
    f.fn.extend({
        prop: function (e, t) {
            return V(this, f.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = f.propFix[e] || e, this.each(function () {
                try {
                    this[e] = void 0, delete this[e]
                } catch (t) {
                }
            })
        }
    }), f.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, t, n) {
            var a, i, r, o = e.nodeType;
            if (e && 3 !== o && 8 !== o && 2 !== o)return r = 1 !== o || !f.isXMLDoc(e), r && (t = f.propFix[t] || t, i = f.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (a = i.set(e, n, t)) ? a : e[t] = n : i && "get" in i && null !== (a = i.get(e, t)) ? a : e[t]
        }, propHooks: {
            tabIndex: {
                get: function (e) {
                    var t = f.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : yt.test(e.nodeName) || wt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }), d.hrefNormalized || f.each(["href", "src"], function (e, t) {
        f.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    }), d.optSelected || (f.propHooks.selected = {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    }), f.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        f.propFix[this.toLowerCase()] = this
    }), d.enctype || (f.propFix.enctype = "encoding");
    var $t = /[\t\r\n\f]/g;
    f.fn.extend({
        addClass: function (e) {
            var t, n, a, i, r, o, s = 0, l = this.length, c = "string" == typeof e && e;
            if (f.isFunction(e))return this.each(function (t) {
                f(this).addClass(e.call(this, t, this.className))
            });
            if (c)for (t = (e || "").match(z) || []; l > s; s++)if (n = this[s], a = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace($t, " ") : " ")) {
                for (r = 0; i = t[r++];)a.indexOf(" " + i + " ") < 0 && (a += i + " ");
                o = f.trim(a), n.className !== o && (n.className = o)
            }
            return this
        }, removeClass: function (e) {
            var t, n, a, i, r, o, s = 0, l = this.length, c = 0 === arguments.length || "string" == typeof e && e;
            if (f.isFunction(e))return this.each(function (t) {
                f(this).removeClass(e.call(this, t, this.className))
            });
            if (c)for (t = (e || "").match(z) || []; l > s; s++)if (n = this[s], a = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace($t, " ") : "")) {
                for (r = 0; i = t[r++];)for (; a.indexOf(" " + i + " ") >= 0;)a = a.replace(" " + i + " ", " ");
                o = e ? f.trim(a) : "", n.className !== o && (n.className = o)
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(f.isFunction(e) ? function (n) {
                f(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)for (var t, a = 0, i = f(this), r = e.match(z) || []; t = r[a++];)i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else(n === M || "boolean" === n) && (this.className && f._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : f._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, a = this.length; a > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace($t, " ").indexOf(t) >= 0)return !0;
            return !1
        }
    }), f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        f.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), f.fn.extend({
        hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, a) {
            return this.on(t, e, n, a)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var bt = f.now(), xt = /\?/,
        kt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    f.parseJSON = function (t) {
        if (e.JSON && e.JSON.parse)return e.JSON.parse(t + "");
        var n, a = null, i = f.trim(t + "");
        return i && !f.trim(i.replace(kt, function (e, t, i, r) {
            return n && t && (a = 0), 0 === a ? e : (n = i || t, a += !r - !i, "")
        })) ? Function("return " + i)() : f.error("Invalid JSON: " + t)
    }, f.parseXML = function (t) {
        var n, a;
        if (!t || "string" != typeof t)return null;
        try {
            e.DOMParser ? (a = new DOMParser, n = a.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || f.error("Invalid XML: " + t), n
    };
    var Ct, _t, Tt = /#.*$/, jt = /([?&])_=[^&]*/, St = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Et = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, zt = /^(?:GET|HEAD)$/, Nt = /^\/\//,
        Dt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, qt = {}, At = {}, Lt = "*/".concat("*");
    try {
        _t = location.href
    } catch (It) {
        _t = C.createElement("a"), _t.href = "", _t = _t.href
    }
    Ct = Dt.exec(_t.toLowerCase()) || [];
    function Mt(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var a, i = 0, r = t.toLowerCase().match(z) || [];
            if (f.isFunction(n))for (; a = r[i++];)"+" === a.charAt(0) ? (a = a.slice(1) || "*", (e[a] = e[a] || []).unshift(n)) : (e[a] = e[a] || []).push(n)
        }
    }

    function Ot(e, t, n, a) {
        var i = {}, r = e === At;

        function o(s) {
            var l;
            return i[s] = !0, f.each(e[s] || [], function (e, s) {
                var c = s(t, n, a);
                return "string" != typeof c || r || i[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), o(c), !1)
            }), l
        }

        return o(t.dataTypes[0]) || !i["*"] && o("*")
    }

    function Ut(e, t) {
        var n, a, i = f.ajaxSettings.flatOptions || {};
        for (a in t)void 0 !== t[a] && ((i[a] ? e : n || (n = {}))[a] = t[a]);
        return n && f.extend(!0, e, n), e
    }

    function Pt(e, t, n) {
        for (var a, i, r, o, s = e.contents, l = e.dataTypes; "*" === l[0];)l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)for (o in s)if (s[o] && s[o].test(i)) {
            l.unshift(o);
            break
        }
        if (l[0] in n) r = l[0]; else {
            for (o in n) {
                if (!l[0] || e.converters[o + " " + l[0]]) {
                    r = o;
                    break
                }
                a || (a = o)
            }
            r = r || a
        }
        return r ? (r !== l[0] && l.unshift(r), n[r]) : void 0
    }

    function Ft(e, t, n, a) {
        var i, r, o, s, l, c = {}, d = e.dataTypes.slice();
        if (d[1])for (o in e.converters)c[o.toLowerCase()] = e.converters[o];
        for (r = d.shift(); r;)if (e.responseFields[r] && (n[e.responseFields[r]] = t), !l && a && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift())if ("*" === r) r = l; else if ("*" !== l && l !== r) {
            if (o = c[l + " " + r] || c["* " + r], !o)for (i in c)if (s = i.split(" "), s[1] === r && (o = c[l + " " + s[0]] || c["* " + s[0]])) {
                o === !0 ? o = c[i] : c[i] !== !0 && (r = s[0], d.unshift(s[1]));
                break
            }
            if (o !== !0)if (o && e["throws"]) t = o(t); else try {
                t = o(t)
            } catch (u) {
                return {state: "parsererror", error: o ? u : "No conversion from " + l + " to " + r}
            }
        }
        return {state: "success", data: t}
    }

    f.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: _t,
            type: "GET",
            isLocal: Et.test(Ct[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Lt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": f.parseJSON, "text xml": f.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? Ut(Ut(e, f.ajaxSettings), t) : Ut(f.ajaxSettings, e)
        },
        ajaxPrefilter: Mt(qt),
        ajaxTransport: Mt(At),
        ajax: function (e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var n, a, i, r, o, s, l, c, d = f.ajaxSetup({}, t), u = d.context || d,
                p = d.context && (u.nodeType || u.jquery) ? f(u) : f.event, h = f.Deferred(),
                g = f.Callbacks("once memory"), m = d.statusCode || {}, v = {}, y = {}, w = 0, $ = "canceled", b = {
                    readyState: 0, getResponseHeader: function (e) {
                        var t;
                        if (2 === w) {
                            if (!c)for (c = {}; t = St.exec(r);)c[t[1].toLowerCase()] = t[2];
                            t = c[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    }, getAllResponseHeaders: function () {
                        return 2 === w ? r : null
                    }, setRequestHeader: function (e, t) {
                        var n = e.toLowerCase();
                        return w || (e = y[n] = y[n] || e, v[e] = t), this
                    }, overrideMimeType: function (e) {
                        return w || (d.mimeType = e), this
                    }, statusCode: function (e) {
                        var t;
                        if (e)if (2 > w)for (t in e)m[t] = [m[t], e[t]]; else b.always(e[b.status]);
                        return this
                    }, abort: function (e) {
                        var t = e || $;
                        return l && l.abort(t), k(0, t), this
                    }
                };
            if (h.promise(b).complete = g.add, b.success = b.done, b.error = b.fail, d.url = ((e || d.url || _t) + "").replace(Tt, "").replace(Nt, Ct[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = f.trim(d.dataType || "*").toLowerCase().match(z) || [""], null == d.crossDomain && (n = Dt.exec(d.url.toLowerCase()), d.crossDomain = !(!n || n[1] === Ct[1] && n[2] === Ct[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Ct[3] || ("http:" === Ct[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = f.param(d.data, d.traditional)), Ot(qt, d, t, b), 2 === w)return b;
            s = f.event && d.global, s && 0 === f.active++ && f.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !zt.test(d.type), i = d.url, d.hasContent || (d.data && (i = d.url += (xt.test(i) ? "&" : "?") + d.data, delete d.data), d.cache === !1 && (d.url = jt.test(i) ? i.replace(jt, "$1_=" + bt++) : i + (xt.test(i) ? "&" : "?") + "_=" + bt++)), d.ifModified && (f.lastModified[i] && b.setRequestHeader("If-Modified-Since", f.lastModified[i]), f.etag[i] && b.setRequestHeader("If-None-Match", f.etag[i])), (d.data && d.hasContent && d.contentType !== !1 || t.contentType) && b.setRequestHeader("Content-Type", d.contentType), b.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Lt + "; q=0.01" : "") : d.accepts["*"]);
            for (a in d.headers)b.setRequestHeader(a, d.headers[a]);
            if (d.beforeSend && (d.beforeSend.call(u, b, d) === !1 || 2 === w))return b.abort();
            $ = "abort";
            for (a in{success: 1, error: 1, complete: 1})b[a](d[a]);
            if (l = Ot(At, d, t, b)) {
                b.readyState = 1, s && p.trigger("ajaxSend", [b, d]), d.async && d.timeout > 0 && (o = setTimeout(function () {
                    b.abort("timeout")
                }, d.timeout));
                try {
                    w = 1, l.send(v, k)
                } catch (x) {
                    if (!(2 > w))throw x;
                    k(-1, x)
                }
            } else k(-1, "No Transport");
            function k(e, t, n, a) {
                var c, v, y, $, x, k = t;
                2 !== w && (w = 2, o && clearTimeout(o), l = void 0, r = a || "", b.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, n && ($ = Pt(d, b, n)), $ = Ft(d, $, b, c), c ? (d.ifModified && (x = b.getResponseHeader("Last-Modified"), x && (f.lastModified[i] = x), x = b.getResponseHeader("etag"), x && (f.etag[i] = x)), 204 === e || "HEAD" === d.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = $.state, v = $.data, y = $.error, c = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), b.status = e, b.statusText = (t || k) + "", c ? h.resolveWith(u, [v, k, b]) : h.rejectWith(u, [b, k, y]), b.statusCode(m), m = void 0, s && p.trigger(c ? "ajaxSuccess" : "ajaxError", [b, d, c ? v : y]), g.fireWith(u, [b, k]), s && (p.trigger("ajaxComplete", [b, d]), --f.active || f.event.trigger("ajaxStop")))
            }

            return b
        },
        getJSON: function (e, t, n) {
            return f.get(e, t, n, "json")
        },
        getScript: function (e, t) {
            return f.get(e, void 0, t, "script")
        }
    }), f.each(["get", "post"], function (e, t) {
        f[t] = function (e, n, a, i) {
            return f.isFunction(n) && (i = i || a, a = n, n = void 0), f.ajax({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: a
            })
        }
    }), f._evalUrl = function (e) {
        return f.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, f.fn.extend({
        wrapAll: function (e) {
            if (f.isFunction(e))return this.each(function (t) {
                f(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = f(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return this.each(f.isFunction(e) ? function (t) {
                f(this).wrapInner(e.call(this, t))
            } : function () {
                var t = f(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = f.isFunction(e);
            return this.each(function (n) {
                f(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
            }).end()
        }
    }), f.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !d.reliableHiddenOffsets() && "none" === (e.style && e.style.display || f.css(e, "display"))
    }, f.expr.filters.visible = function (e) {
        return !f.expr.filters.hidden(e)
    };
    var Bt = /%20/g, Ht = /\[\]$/, Rt = /\r?\n/g, Wt = /^(?:submit|button|image|reset|file)$/i,
        Xt = /^(?:input|select|textarea|keygen)/i;

    function Vt(e, t, n, a) {
        var i;
        if (f.isArray(t)) f.each(t, function (t, i) {
            n || Ht.test(e) ? a(e, i) : Vt(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, a)
        }); else if (n || "object" !== f.type(t)) a(e, t); else for (i in t)Vt(e + "[" + i + "]", t[i], n, a)
    }

    f.param = function (e, t) {
        var n, a = [], i = function (e, t) {
            t = f.isFunction(t) ? t() : null == t ? "" : t, a[a.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = f.ajaxSettings && f.ajaxSettings.traditional), f.isArray(e) || e.jquery && !f.isPlainObject(e)) f.each(e, function () {
            i(this.name, this.value)
        }); else for (n in e)Vt(n, e[n], t, i);
        return a.join("&").replace(Bt, "+")
    }, f.fn.extend({
        serialize: function () {
            return f.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = f.prop(this, "elements");
                return e ? f.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !f(this).is(":disabled") && Xt.test(this.nodeName) && !Wt.test(e) && (this.checked || !J.test(e))
            }).map(function (e, t) {
                var n = f(this).val();
                return null == n ? null : f.isArray(n) ? f.map(n, function (e) {
                    return {name: t.name, value: e.replace(Rt, "\r\n")}
                }) : {name: t.name, value: n.replace(Rt, "\r\n")}
            }).get()
        }
    }), f.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function () {
        return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Gt() || Zt()
    } : Gt;
    var Jt = 0, Qt = {}, Yt = f.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function () {
        for (var e in Qt)Qt[e](void 0, !0)
    }), d.cors = !!Yt && "withCredentials" in Yt, Yt = d.ajax = !!Yt, Yt && f.ajaxTransport(function (e) {
        if (!e.crossDomain || d.cors) {
            var t;
            return {
                send: function (n, a) {
                    var i, r = e.xhr(), o = ++Jt;
                    if (r.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)for (i in e.xhrFields)r[i] = e.xhrFields[i];
                    e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (i in n)void 0 !== n[i] && r.setRequestHeader(i, n[i] + "");
                    r.send(e.hasContent && e.data || null), t = function (n, i) {
                        var s, l, c;
                        if (t && (i || 4 === r.readyState))if (delete Qt[o], t = void 0, r.onreadystatechange = f.noop, i) 4 !== r.readyState && r.abort(); else {
                            c = {}, s = r.status, "string" == typeof r.responseText && (c.text = r.responseText);
                            try {
                                l = r.statusText
                            } catch (d) {
                                l = ""
                            }
                            s || !e.isLocal || e.crossDomain ? 1223 === s && (s = 204) : s = c.text ? 200 : 404
                        }
                        c && a(s, l, c, r.getAllResponseHeaders())
                    }, e.async ? 4 === r.readyState ? setTimeout(t) : r.onreadystatechange = Qt[o] = t : t()
                }, abort: function () {
                    t && t(void 0, !0)
                }
            }
        }
    });
    function Gt() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function Zt() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    f.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return f.globalEval(e), e
            }
        }
    }), f.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), f.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var t, n = C.head || f("head")[0] || C.documentElement;
            return {
                send: function (a, i) {
                    t = C.createElement("script"), t.async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, t.onload = t.onreadystatechange = function (e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"))
                    }, n.insertBefore(t, n.firstChild)
                }, abort: function () {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var Kt = [], en = /(=)\?(?=&|$)|\?\?/;
    f.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Kt.pop() || f.expando + "_" + bt++;
            return this[e] = !0, e
        }
    }), f.ajaxPrefilter("json jsonp", function (t, n, a) {
        var i, r, o,
            s = t.jsonp !== !1 && (en.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && en.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = f.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(en, "$1" + i) : t.jsonp !== !1 && (t.url += (xt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
            return o || f.error(i + " was not called"), o[0]
        }, t.dataTypes[0] = "json", r = e[i], e[i] = function () {
            o = arguments
        }, a.always(function () {
            e[i] = r, t[i] && (t.jsonpCallback = n.jsonpCallback, Kt.push(i)), o && f.isFunction(r) && r(o[0]), o = r = void 0
        }), "script") : void 0
    }), f.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || C;
        var a = $.exec(e), i = !n && [];
        return a ? [t.createElement(a[1])] : (a = f.buildFragment([e], t, i), i && i.length && f(i).remove(), f.merge([], a.childNodes))
    };
    var tn = f.fn.load;
    f.fn.load = function (e, t, n) {
        if ("string" != typeof e && tn)return tn.apply(this, arguments);
        var a, i, r, o = this, s = e.indexOf(" ");
        return s >= 0 && (a = f.trim(e.slice(s, e.length)), e = e.slice(0, s)), f.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), o.length > 0 && f.ajax({
            url: e,
            type: r,
            dataType: "html",
            data: t
        }).done(function (e) {
            i = arguments, o.html(a ? f("<div>").append(f.parseHTML(e)).find(a) : e)
        }).complete(n && function (e, t) {
                o.each(n, i || [e.responseText, t, e])
            }), this
    }, f.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        f.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), f.expr.filters.animated = function (e) {
        return f.grep(f.timers, function (t) {
            return e === t.elem
        }).length
    };
    var nn = e.document.documentElement;

    function an(e) {
        return f.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow)
    }

    f.offset = {
        setOffset: function (e, t, n) {
            var a, i, r, o, s, l, c, d = f.css(e, "position"), u = f(e), p = {};
            "static" === d && (e.style.position = "relative"), s = u.offset(), r = f.css(e, "top"), l = f.css(e, "left"), c = ("absolute" === d || "fixed" === d) && f.inArray("auto", [r, l]) > -1, c ? (a = u.position(), o = a.top, i = a.left) : (o = parseFloat(r) || 0, i = parseFloat(l) || 0), f.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (p.top = t.top - s.top + o), null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : u.css(p)
        }
    }, f.fn.extend({
        offset: function (e) {
            if (arguments.length)return void 0 === e ? this : this.each(function (t) {
                f.offset.setOffset(this, e, t)
            });
            var t, n, a = {top: 0, left: 0}, i = this[0], r = i && i.ownerDocument;
            return r ? (t = r.documentElement, f.contains(t, i) ? (typeof i.getBoundingClientRect !== M && (a = i.getBoundingClientRect()), n = an(r), {
                top: a.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: a.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : a) : void 0
        }, position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, a = this[0];
                return "fixed" === f.css(a, "position") ? t = a.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), f.nodeName(e[0], "html") || (n = e.offset()), n.top += f.css(e[0], "borderTopWidth", !0), n.left += f.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - f.css(a, "marginTop", !0),
                    left: t.left - n.left - f.css(a, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || nn; e && !f.nodeName(e, "html") && "static" === f.css(e, "position");)e = e.offsetParent;
                return e || nn
            })
        }
    }), f.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, t) {
        var n = /Y/.test(t);
        f.fn[e] = function (a) {
            return V(this, function (e, a, i) {
                var r = an(e);
                return void 0 === i ? r ? t in r ? r[t] : r.document.documentElement[a] : e[a] : void(r ? r.scrollTo(n ? f(r).scrollLeft() : i, n ? i : f(r).scrollTop()) : e[a] = i)
            }, e, a, arguments.length, null)
        }
    }), f.each(["top", "left"], function (e, t) {
        f.cssHooks[t] = Me(d.pixelPosition, function (e, n) {
            return n ? (n = qe(e, t), Le.test(n) ? f(e).position()[t] + "px" : n) : void 0
        })
    }), f.each({Height: "height", Width: "width"}, function (e, t) {
        f.each({padding: "inner" + e, content: t, "": "outer" + e}, function (n, a) {
            f.fn[a] = function (a, i) {
                var r = arguments.length && (n || "boolean" != typeof a),
                    o = n || (a === !0 || i === !0 ? "margin" : "border");
                return V(this, function (t, n, a) {
                    var i;
                    return f.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === a ? f.css(t, n, o) : f.style(t, n, a, o)
                }, t, r ? a : void 0, r, null)
            }
        })
    }), f.fn.size = function () {
        return this.length
    }, f.fn.andSelf = f.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return f
    });
    var rn = e.jQuery, on = e.$;
    return f.noConflict = function (t) {
        return e.$ === f && (e.$ = on), t && e.jQuery === f && (e.jQuery = rn), f
    }, typeof t === M && (e.jQuery = e.$ = f), f
}), !function (e, t, n) {
    "use strict";
    !function a(e, t, n) {
        function i(o, s) {
            if (!t[o]) {
                if (!e[o]) {
                    var l = "function" == typeof require && require;
                    if (!s && l)return l(o, !0);
                    if (r)return r(o, !0);
                    var c = new Error("Cannot find module '" + o + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var d = t[o] = {exports: {}};
                e[o][0].call(d.exports, function (t) {
                    var n = e[o][1][t];
                    return i(n ? n : t)
                }, d, d.exports, a, e, t, n)
            }
            return t[o].exports
        }

        for (var r = "function" == typeof require && require, o = 0; o < n.length; o++)i(n[o]);
        return i
    }({
        1: [function (a) {
            var i, r, o, s, l = function (e) {
                    return e && e.__esModule ? e : {"default": e}
                }, c = a("./modules/handle-dom"), d = a("./modules/utils"), u = a("./modules/handle-swal-dom"),
                f = a("./modules/handle-click"), p = a("./modules/handle-key"), h = l(p),
                g = a("./modules/default-params"), m = l(g), v = a("./modules/set-params"), y = l(v);
            o = s = function () {
                function a(e) {
                    var t = o;
                    return t[e] === n ? m["default"][e] : t[e]
                }

                var o = arguments[0];
                if (c.addClass(t.body, "stop-scrolling"), u.resetInput(), o === n)return d.logStr("SweetAlert expects at least 1 attribute!"), !1;
                var l = d.extend({}, m["default"]);
                switch (typeof o) {
                    case"string":
                        l.title = o, l.text = arguments[1] || "", l.type = arguments[2] || "";
                        break;
                    case"object":
                        if (o.title === n)return d.logStr('Missing "title" argument!'), !1;
                        l.title = o.title;
                        for (var p in m["default"])l[p] = a(p);
                        l.confirmButtonText = l.showCancelButton ? "Confirm" : m["default"].confirmButtonText, l.confirmButtonText = a("confirmButtonText"), l.doneFunction = arguments[1] || null;
                        break;
                    default:
                        return d.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof o), !1
                }
                y["default"](l), u.fixVerticalPosition(), u.openModal(arguments[1]);
                for (var g = u.getModal(), v = g.querySelectorAll("button"), w = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], $ = function (e) {
                    return f.handleButton(e, l, g)
                }, b = 0; b < v.length; b++)for (var x = 0; x < w.length; x++) {
                    var k = w[x];
                    v[b][k] = $
                }
                u.getOverlay().onclick = $, i = e.onkeydown;
                var C = function (e) {
                    return h["default"](e, l, g)
                };
                e.onkeydown = C, e.onfocus = function () {
                    setTimeout(function () {
                        r !== n && (r.focus(), r = n)
                    }, 0)
                }, s.enableButtons()
            }, o.setDefaults = s.setDefaults = function (e) {
                if (!e)throw new Error("userParams is required");
                if ("object" != typeof e)throw new Error("userParams has to be a object");
                d.extend(m["default"], e)
            }, o.close = s.close = function () {
                var a = u.getModal();
                c.fadeOut(u.getOverlay(), 5), c.fadeOut(a, 5), c.removeClass(a, "showSweetAlert"), c.addClass(a, "hideSweetAlert"), c.removeClass(a, "visible");
                var o = a.querySelector(".sa-icon.sa-success");
                c.removeClass(o, "animate"), c.removeClass(o.querySelector(".sa-tip"), "animateSuccessTip"), c.removeClass(o.querySelector(".sa-long"), "animateSuccessLong");
                var s = a.querySelector(".sa-icon.sa-error");
                c.removeClass(s, "animateErrorIcon"), c.removeClass(s.querySelector(".sa-x-mark"), "animateXMark");
                var l = a.querySelector(".sa-icon.sa-warning");
                return c.removeClass(l, "pulseWarning"), c.removeClass(l.querySelector(".sa-body"), "pulseWarningIns"), c.removeClass(l.querySelector(".sa-dot"), "pulseWarningIns"), setTimeout(function () {
                    var e = a.getAttribute("data-custom-class");
                    c.removeClass(a, e)
                }, 300), c.removeClass(t.body, "stop-scrolling"), e.onkeydown = i, e.previousActiveElement && e.previousActiveElement.focus(), r = n, clearTimeout(a.timeout), !0
            }, o.showInputError = s.showInputError = function (e) {
                var t = u.getModal(), n = t.querySelector(".sa-input-error");
                c.addClass(n, "show");
                var a = t.querySelector(".sa-error-container");
                c.addClass(a, "show"), a.querySelector("p").innerHTML = e, setTimeout(function () {
                    o.enableButtons()
                }, 1), t.querySelector("input").focus()
            }, o.resetInputError = s.resetInputError = function (e) {
                if (e && 13 === e.keyCode)return !1;
                var t = u.getModal(), n = t.querySelector(".sa-input-error");
                c.removeClass(n, "show");
                var a = t.querySelector(".sa-error-container");
                c.removeClass(a, "show")
            }, o.disableButtons = s.disableButtons = function () {
                var e = u.getModal(), t = e.querySelector("button.confirm"), n = e.querySelector("button.cancel");
                t.disabled = !0, n.disabled = !0
            }, o.enableButtons = s.enableButtons = function () {
                var e = u.getModal(), t = e.querySelector("button.confirm"), n = e.querySelector("button.cancel");
                t.disabled = !1, n.disabled = !1
            }, "undefined" != typeof e ? e.sweetAlert = e.swal = o : d.logStr("SweetAlert is a frontend module!")
        }, {
            "./modules/default-params": 2,
            "./modules/handle-click": 3,
            "./modules/handle-dom": 4,
            "./modules/handle-key": 5,
            "./modules/handle-swal-dom": 6,
            "./modules/set-params": 8,
            "./modules/utils": 9
        }], 2: [function (e, t, n) {
            Object.defineProperty(n, "__esModule", {value: !0});
            var a = {
                title: "",
                text: "",
                type: null,
                allowOutsideClick: !1,
                showConfirmButton: !0,
                showCancelButton: !1,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                confirmButtonText: "OK",
                confirmButtonColor: "#8CD4F5",
                cancelButtonText: "Cancel",
                imageUrl: null,
                imageSize: null,
                timer: null,
                customClass: "",
                html: !1,
                animation: !0,
                allowEscapeKey: !0,
                inputType: "text",
                inputPlaceholder: "",
                inputValue: "",
                showLoaderOnConfirm: !1
            };
            n["default"] = a, t.exports = n["default"]
        }, {}], 3: [function (t, n, a) {
            Object.defineProperty(a, "__esModule", {value: !0});
            var i = t("./utils"), r = (t("./handle-swal-dom"), t("./handle-dom")), o = function (t, n, a) {
                function o(e) {
                    h && n.confirmButtonColor && (p.style.backgroundColor = e)
                }

                var c, d, u, f = t || e.event, p = f.target || f.srcElement, h = -1 !== p.className.indexOf("confirm"),
                    g = -1 !== p.className.indexOf("sweet-overlay"), m = r.hasClass(a, "visible"),
                    v = n.doneFunction && "true" === a.getAttribute("data-has-done-function");
                switch (h && n.confirmButtonColor && (c = n.confirmButtonColor, d = i.colorLuminance(c, -.04), u = i.colorLuminance(c, -.14)), f.type) {
                    case"mouseover":
                        o(d);
                        break;
                    case"mouseout":
                        o(c);
                        break;
                    case"mousedown":
                        o(u);
                        break;
                    case"mouseup":
                        o(d);
                        break;
                    case"focus":
                        var y = a.querySelector("button.confirm"), w = a.querySelector("button.cancel");
                        h ? w.style.boxShadow = "none" : y.style.boxShadow = "none";
                        break;
                    case"click":
                        var $ = a === p, b = r.isDescendant(a, p);
                        if (!$ && !b && m && !n.allowOutsideClick)break;
                        h && v && m ? s(a, n) : v && m || g ? l(a, n) : r.isDescendant(a, p) && "BUTTON" === p.tagName && sweetAlert.close()
                }
            }, s = function (e, t) {
                var n = !0;
                r.hasClass(e, "show-input") && (n = e.querySelector("input").value, n || (n = "")), t.doneFunction(n), t.closeOnConfirm && sweetAlert.close(), t.showLoaderOnConfirm && sweetAlert.disableButtons()
            }, l = function (e, t) {
                var n = String(t.doneFunction).replace(/\s/g, ""),
                    a = "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10);
                a && t.doneFunction(!1), t.closeOnCancel && sweetAlert.close()
            };
            a["default"] = {handleButton: o, handleConfirm: s, handleCancel: l}, n.exports = a["default"]
        }, {"./handle-dom": 4, "./handle-swal-dom": 6, "./utils": 9}], 4: [function (n, a, i) {
            Object.defineProperty(i, "__esModule", {value: !0});
            var r = function (e, t) {
                return new RegExp(" " + t + " ").test(" " + e.className + " ")
            }, o = function (e, t) {
                r(e, t) || (e.className += " " + t)
            }, s = function (e, t) {
                var n = " " + e.className.replace(/[\t\r\n]/g, " ") + " ";
                if (r(e, t)) {
                    for (; n.indexOf(" " + t + " ") >= 0;)n = n.replace(" " + t + " ", " ");
                    e.className = n.replace(/^\s+|\s+$/g, "")
                }
            }, l = function (e) {
                var n = t.createElement("div");
                return n.appendChild(t.createTextNode(e)), n.innerHTML
            }, c = function (e) {
                e.style.opacity = "", e.style.display = "block"
            }, d = function (e) {
                if (e && !e.length)return c(e);
                for (var t = 0; t < e.length; ++t)c(e[t])
            }, u = function (e) {
                e.style.opacity = "", e.style.display = "none"
            }, f = function (e) {
                if (e && !e.length)return u(e);
                for (var t = 0; t < e.length; ++t)u(e[t])
            }, p = function (e, t) {
                for (var n = t.parentNode; null !== n;) {
                    if (n === e)return !0;
                    n = n.parentNode
                }
                return !1
            }, h = function (e) {
                e.style.left = "-9999px", e.style.display = "block";
                var t, n = e.clientHeight;
                return t = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(e).getPropertyValue("padding-top"), 10) : parseInt(e.currentStyle.padding), e.style.left = "", e.style.display = "none", "-" + parseInt((n + t) / 2) + "px"
            }, g = function (e, t) {
                if (+e.style.opacity < 1) {
                    t = t || 16, e.style.opacity = 0, e.style.display = "block";
                    var n = +new Date, a = function (e) {
                        function t() {
                            return e.apply(this, arguments)
                        }

                        return t.toString = function () {
                            return e.toString()
                        }, t
                    }(function () {
                        e.style.opacity = +e.style.opacity + (new Date - n) / 100, n = +new Date, +e.style.opacity < 1 && setTimeout(a, t)
                    });
                    a()
                }
                e.style.display = "block"
            }, m = function (e, t) {
                t = t || 16, e.style.opacity = 1;
                var n = +new Date, a = function (e) {
                    function t() {
                        return e.apply(this, arguments)
                    }

                    return t.toString = function () {
                        return e.toString()
                    }, t
                }(function () {
                    e.style.opacity = +e.style.opacity - (new Date - n) / 100, n = +new Date, +e.style.opacity > 0 ? setTimeout(a, t) : e.style.display = "none"
                });
                a()
            }, v = function (n) {
                if ("function" == typeof MouseEvent) {
                    var a = new MouseEvent("click", {view: e, bubbles: !1, cancelable: !0});
                    n.dispatchEvent(a)
                } else if (t.createEvent) {
                    var i = t.createEvent("MouseEvents");
                    i.initEvent("click", !1, !1), n.dispatchEvent(i)
                } else t.createEventObject ? n.fireEvent("onclick") : "function" == typeof n.onclick && n.onclick()
            }, y = function (t) {
                "function" == typeof t.stopPropagation ? (t.stopPropagation(), t.preventDefault()) : e.event && e.event.hasOwnProperty("cancelBubble") && (e.event.cancelBubble = !0)
            };
            i.hasClass = r, i.addClass = o, i.removeClass = s, i.escapeHtml = l, i._show = c, i.show = d, i._hide = u, i.hide = f, i.isDescendant = p, i.getTopMargin = h, i.fadeIn = g, i.fadeOut = m, i.fireClick = v, i.stopEventPropagation = y
        }, {}], 5: [function (t, a, i) {
            Object.defineProperty(i, "__esModule", {value: !0});
            var r = t("./handle-dom"), o = t("./handle-swal-dom"), s = function (t, a, i) {
                var s = t || e.event, l = s.keyCode || s.which, c = i.querySelector("button.confirm"),
                    d = i.querySelector("button.cancel"), u = i.querySelectorAll("button[tabindex]");
                if (-1 !== [9, 13, 32, 27].indexOf(l)) {
                    for (var f = s.target || s.srcElement, p = -1, h = 0; h < u.length; h++)if (f === u[h]) {
                        p = h;
                        break
                    }
                    9 === l ? (f = -1 === p ? c : p === u.length - 1 ? u[0] : u[p + 1], r.stopEventPropagation(s), f.focus(), a.confirmButtonColor && o.setFocusStyle(f, a.confirmButtonColor)) : 13 === l ? ("INPUT" === f.tagName && (f = c, c.focus()), f = -1 === p ? c : n) : 27 === l && a.allowEscapeKey === !0 ? (f = d, r.fireClick(f, s)) : f = n
                }
            };
            i["default"] = s, a.exports = i["default"]
        }, {"./handle-dom": 4, "./handle-swal-dom": 6}], 6: [function (n, a, i) {
            var r = function (e) {
                return e && e.__esModule ? e : {"default": e}
            };
            Object.defineProperty(i, "__esModule", {value: !0});
            var o = n("./utils"), s = n("./handle-dom"), l = n("./default-params"), c = r(l), d = n("./injected-html"),
                u = r(d), f = ".sweet-alert", p = ".sweet-overlay", h = function () {
                    var e = t.createElement("div");
                    for (e.innerHTML = u["default"]; e.firstChild;)t.body.appendChild(e.firstChild)
                }, g = function (e) {
                    function t() {
                        return e.apply(this, arguments)
                    }

                    return t.toString = function () {
                        return e.toString()
                    }, t
                }(function () {
                    var e = t.querySelector(f);
                    return e || (h(), e = g()), e
                }), m = function () {
                    var e = g();
                    return e ? e.querySelector("input") : void 0
                }, v = function () {
                    return t.querySelector(p)
                }, y = function (e, t) {
                    var n = o.hexToRgb(t);
                    e.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
                }, w = function (n) {
                    var a = g();
                    s.fadeIn(v(), 10), s.show(a), s.addClass(a, "showSweetAlert"), s.removeClass(a, "hideSweetAlert"), e.previousActiveElement = t.activeElement;
                    var i = a.querySelector("button.confirm");
                    i.focus(), setTimeout(function () {
                        s.addClass(a, "visible")
                    }, 500);
                    var r = a.getAttribute("data-timer");
                    if ("null" !== r && "" !== r) {
                        var o = n;
                        a.timeout = setTimeout(function () {
                            var e = (o || null) && "true" === a.getAttribute("data-has-done-function");
                            e ? o(null) : sweetAlert.close()
                        }, r)
                    }
                }, $ = function () {
                    var e = g(), t = m();
                    s.removeClass(e, "show-input"), t.value = c["default"].inputValue, t.setAttribute("type", c["default"].inputType), t.setAttribute("placeholder", c["default"].inputPlaceholder), b()
                }, b = function (e) {
                    if (e && 13 === e.keyCode)return !1;
                    var t = g(), n = t.querySelector(".sa-input-error");
                    s.removeClass(n, "show");
                    var a = t.querySelector(".sa-error-container");
                    s.removeClass(a, "show")
                }, x = function () {
                    var e = g();
                    e.style.marginTop = s.getTopMargin(g())
                };
            i.sweetAlertInitialize = h, i.getModal = g, i.getOverlay = v, i.getInput = m, i.setFocusStyle = y, i.openModal = w, i.resetInput = $, i.resetInputError = b, i.fixVerticalPosition = x
        }, {"./default-params": 2, "./handle-dom": 4, "./injected-html": 7, "./utils": 9}], 7: [function (e, t, n) {
            Object.defineProperty(n, "__esModule", {value: !0});
            var a = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>';
            n["default"] = a, t.exports = n["default"]
        }, {}], 8: [function (e, t, a) {
            Object.defineProperty(a, "__esModule", {value: !0});
            var i = e("./utils"), r = e("./handle-swal-dom"), o = e("./handle-dom"),
                s = ["error", "warning", "info", "success", "input", "prompt"], l = function (e) {
                    var t = r.getModal(), a = t.querySelector("h2"), l = t.querySelector("p"),
                        c = t.querySelector("button.cancel"), d = t.querySelector("button.confirm");
                    if (a.innerHTML = e.html ? e.title : o.escapeHtml(e.title).split("\n").join("<br>"), l.innerHTML = e.html ? e.text : o.escapeHtml(e.text || "").split("\n").join("<br>"), e.text && o.show(l), e.customClass) o.addClass(t, e.customClass), t.setAttribute("data-custom-class", e.customClass); else {
                        var u = t.getAttribute("data-custom-class");
                        o.removeClass(t, u), t.setAttribute("data-custom-class", "")
                    }
                    if (o.hide(t.querySelectorAll(".sa-icon")), e.type && !i.isIE8()) {
                        var f = function () {
                            for (var a = !1, i = 0; i < s.length; i++)if (e.type === s[i]) {
                                a = !0;
                                break
                            }
                            if (!a)return logStr("Unknown alert type: " + e.type), {v: !1};
                            var l = ["success", "error", "warning", "info"], c = n;
                            -1 !== l.indexOf(e.type) && (c = t.querySelector(".sa-icon.sa-" + e.type), o.show(c));
                            var d = r.getInput();
                            switch (e.type) {
                                case"success":
                                    o.addClass(c, "animate"), o.addClass(c.querySelector(".sa-tip"), "animateSuccessTip"), o.addClass(c.querySelector(".sa-long"), "animateSuccessLong");
                                    break;
                                case"error":
                                    o.addClass(c, "animateErrorIcon"), o.addClass(c.querySelector(".sa-x-mark"), "animateXMark");
                                    break;
                                case"warning":
                                    o.addClass(c, "pulseWarning"), o.addClass(c.querySelector(".sa-body"), "pulseWarningIns"), o.addClass(c.querySelector(".sa-dot"), "pulseWarningIns");
                                    break;
                                case"input":
                                case"prompt":
                                    d.setAttribute("type", e.inputType), d.value = e.inputValue, d.setAttribute("placeholder", e.inputPlaceholder), o.addClass(t, "show-input"), setTimeout(function () {
                                        d.focus(), d.addEventListener("keyup", swal.resetInputError)
                                    }, 400)
                            }
                        }();
                        if ("object" == typeof f)return f.v
                    }
                    if (e.imageUrl) {
                        var p = t.querySelector(".sa-icon.sa-custom");
                        p.style.backgroundImage = "url(" + e.imageUrl + ")", o.show(p);
                        var h = 80, g = 80;
                        if (e.imageSize) {
                            var m = e.imageSize.toString().split("x"), v = m[0], y = m[1];
                            v && y ? (h = v, g = y) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + e.imageSize)
                        }
                        p.setAttribute("style", p.getAttribute("style") + "width:" + h + "px; height:" + g + "px")
                    }
                    t.setAttribute("data-has-cancel-button", e.showCancelButton), e.showCancelButton ? c.style.display = "inline-block" : o.hide(c), t.setAttribute("data-has-confirm-button", e.showConfirmButton), e.showConfirmButton ? d.style.display = "inline-block" : o.hide(d), e.cancelButtonText && (c.innerHTML = o.escapeHtml(e.cancelButtonText)), e.confirmButtonText && (d.innerHTML = o.escapeHtml(e.confirmButtonText)), e.confirmButtonColor && (d.style.backgroundColor = e.confirmButtonColor, d.style.borderLeftColor = e.confirmLoadingButtonColor, d.style.borderRightColor = e.confirmLoadingButtonColor, r.setFocusStyle(d, e.confirmButtonColor)), t.setAttribute("data-allow-outside-click", e.allowOutsideClick);
                    var w = !!e.doneFunction;
                    t.setAttribute("data-has-done-function", w), e.animation ? "string" == typeof e.animation ? t.setAttribute("data-animation", e.animation) : t.setAttribute("data-animation", "pop") : t.setAttribute("data-animation", "none"), t.setAttribute("data-timer", e.timer)
                };
            a["default"] = l, t.exports = a["default"]
        }, {"./handle-dom": 4, "./handle-swal-dom": 6, "./utils": 9}], 9: [function (t, n, a) {
            Object.defineProperty(a, "__esModule", {value: !0});
            var i = function (e, t) {
                for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n]);
                return e
            }, r = function (e) {
                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return t ? parseInt(t[1], 16) + ", " + parseInt(t[2], 16) + ", " + parseInt(t[3], 16) : null
            }, o = function () {
                return e.attachEvent && !e.addEventListener
            }, s = function (t) {
                e.console && e.console.log("SweetAlert: " + t)
            }, l = function (e, t) {
                e = String(e).replace(/[^0-9a-f]/gi, ""), e.length < 6 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), t = t || 0;
                var n, a, i = "#";
                for (a = 0; 3 > a; a++)n = parseInt(e.substr(2 * a, 2), 16), n = Math.round(Math.min(Math.max(0, n + n * t), 255)).toString(16), i += ("00" + n).substr(n.length);
                return i
            };
            a.extend = i, a.hexToRgb = r, a.isIE8 = o, a.logStr = s, a.colorLuminance = l
        }, {}]
    }, {}, [1]), "function" == typeof define && define.amd ? define(function () {
        return sweetAlert
    }) : "undefined" != typeof module && module.exports && (module.exports = sweetAlert)
}(window, document), !function (e, t, n) {
    var a, i, r, o, s = t.ActiveXObject && !t.XMLHttpRequest, l = function () {
        }, c = 0, d = /^url:/, u = t.document, f = "JDG" + +new Date,
        p = '<table class="ui_border"><tbody><tr><td class="ui_lt"></td><td class="ui_t"></td><td class="ui_rt"></td></tr><tr><td class="ui_l"></td><td class="ui_c"><div class="ui_inner"><table class="ui_dialog"><tbody><tr><td colspan="2"><div class="ui_title_bar"><div class="ui_title" unselectable="on"></div><div class="ui_title_buttons"><a class="ui_min" href="javascript:void(0);" title="最小化"><b class="ui_min_b"></b></a><a class="ui_max" href="javascript:void(0);" title="最大化"><b class="ui_max_b"></b></a><a class="ui_res" href="javascript:void(0);" title="还原"><b class="ui_res_b"></b><b class="ui_res_t"></b></a><a class="ui_close" href="javascript:void(0);" title="关闭(esc键)">×</a></div></div></td></tr><tr><td class="ui_icon"></td><td class="ui_main"><div class="ui_content"></div></td></tr><tr><td colspan="2"><div class="ui_buttons"></div></td></tr></tbody></table></div></td><td class="ui_r"></td></tr><tr><td class="ui_lb"></td><td class="ui_b"></td><td class="ui_rb"></td></tr></tbody></table>',
        h = (function (e, t, n) {
            for (var a = e.length; t < a && (n = u.querySelector ? e[t].src : e[t].getAttribute("src", 4), n.substr(n.lastIndexOf("/")).indexOf("lhgdialog") === -1); t++);
            n = n.split("?"), r = n[1], n[0].substr(0, n[0].lastIndexOf("/") + 1)
        }(u.getElementsByTagName("script"), 0), function (e) {
            if (r)for (var t, n = r.split("&"), a = 0, i = n.length; a < i; a++)if (t = n[a].split("="), e === t[0])return t[1];
            return null
        }), g = h("skin") || "default", m = function (e) {
            try {
                o = e.top.document, o.getElementsByTagName
            } catch (t) {
                return o = e.document, e
            }
            return "true" === h("self") || o.getElementsByTagName("frameset").length > 0 ? (o = e.document, e) : e.top
        }(t), v = o.documentElement, y = "BackCompat" === o.compatMode;
    _$doc = e(o), _$top = e(m), _$html = e(o.getElementsByTagName("html")[0]);
    try {
        o.execCommand("BackgroundImageCache", !1, !0)
    } catch (e) {
    }
    !function (e) {
        if (!e) {
            var t = o.getElementsByTagName("head")[0], n = o.createElement("link");
            n.href = "//lapp.xinli001.com/skins/" + g + ".css", n.rel = "stylesheet", n.id = "lhgdialoglink", t.insertBefore(n, t.lastChild)
        }
    }(o.getElementById("lhgdialoglink")), s && function (e) {
        "fixed" !== _$html.css(e) && _$html.css({
            zoom: 1,
            backgroundImage: "url(about:blank)",
            backgroundAttachment: "fixed"
        })
    }("backgroundAttachment");
    var w = function (e) {
        e = e || {};
        var t, i = w.setting;
        for (var r in i)e[r] === n && (e[r] = i[r]);
        return e.id = e.id || f + c, (t = w.list[e.id]) ? t.zindex().focus() : (e.button = e.button || [], e.ok && e.button.push({
            id: "ok",
            name: e.okVal,
            callback: e.ok,
            focus: e.focus
        }), e.cancel && e.button.push({
            id: "cancel",
            name: e.cancelVal,
            callback: e.cancel
        }), w.setting.zIndex = e.zIndex, c++, w.list[e.id] = a ? a._init(e) : new w.fn._init(e))
    };
    w.fn = w.prototype = {
        constructor: w, _init: function (e) {
            var n, i = this, r = e.content, o = d.test(r);
            return i.opener = t, i.config = e, i.DOM = n = i.DOM || i._getDOM(), i.closed = !1, i.data = e.data, e.icon && !o ? (e.min = !1, e.max = !1, n.icon[0].style.display = "", n.icon[0].innerHTML = '<img src="' + e.path + "skins/icons/" + e.icon + '" class="ui_icon_bg"/>') : n.icon[0].style.display = "none", n.wrap.addClass(e.skin), n.rb[0].style.cursor = e.resize ? "se-resize" : "auto", n.title[0].style.cursor = e.drag ? "move" : "auto", n.max[0].style.display = e.max ? "inline-block" : "none", n.min[0].style.display = e.min ? "inline-block" : "none", n.close[0].style.display = e.cancel === !1 ? "none" : "inline-block", n.content[0].style.padding = e.padding, i.button.apply(i, e.button), i.title(e.title).content(r, !0, o).size(e.width, e.height).position(e.left, e.top).time(e.time)[e.show ? "show" : "hide"](!0).zindex(), e.focus && i.focus(), e.lock && i.lock(), i._ie6PngFix()._addEvent(), a = null, !o && e.init && e.init.call(i, t), i
        }, button: function () {
            for (var t, n, a, i, r, s = this, l = s.DOM, c = l.buttons[0], d = "ui_state_highlight", u = s._listeners = s._listeners || {}, p = [].slice.call(arguments), h = 0; h < p.length; h++)t = p[h], n = t.name, a = t.id || n, i = !u[a], r = i ? o.createElement("input") : u[a].elem, r.type = "button", u[a] || (u[a] = {}), n && (r.value = n), t.callback && (u[a].callback = t.callback), t.focus && (s._focus && s._focus.removeClass(d), s._focus = e(r).addClass(d), s.focus()), r[f + "callback"] = a, r.disabled = !!t.disabled, i && (u[a].elem = r, c.appendChild(r));
            return c.style.display = p.length ? "" : "none", s._ie6SelectFix(), s
        }, title: function (e) {
            if (e === n)return this;
            var t = this.DOM, a = t.border, i = t.title[0];
            return e === !1 ? (i.style.display = "none", i.innerHTML = "", a.addClass("ui_state_tips")) : (i.style.display = "", i.innerHTML = e, a.removeClass("ui_state_tips")), this
        }, content: function (e, t, a) {
            if (e === n)return this;
            var i = this, r = i.DOM, o = r.wrap[0], s = o.offsetWidth, l = o.offsetHeight, c = parseInt(o.style.left),
                d = parseInt(o.style.top), u = o.style.width, f = r.content, p = w.setting.content;
            return a ? (f[0].innerHTML = p, i._iframe(e.split("url:")[1])) : f.html(e), t || (o.style.left = "0px", s = o.offsetWidth - s, l = o.offsetHeight - l, c -= s / 2, d -= l / 2, o.style.left = Math.max(c, 0) + "px", o.style.top = Math.max(d, 0) + "px", u && "auto" !== u && (o.style.width = o.offsetWidth + "px"), i._autoPositionType()), i._ie6SelectFix(), i
        }, size: function (e, t) {
            var n = this, a = n.DOM, i = a.wrap[0], r = a.main[0].style;
            return i.style.width = "auto", "number" == typeof e && (e += "px"), "number" == typeof t && (t += "px"), r.width = e, r.height = t, "auto" !== e && (i.style.width = i.offsetWidth + "px"), n._ie6SelectFix(), n
        }, position: function (e, t) {
            var a = this, i = a.config, r = a.DOM.wrap[0], o = r.style, l = !s && i.fixed, c = s && i.fixed,
                d = _$top.scrollLeft(), u = _$top.scrollTop(), f = l ? 0 : d, p = l ? 0 : u, h = _$top.width(),
                g = _$top.height(), m = r.offsetWidth, v = r.offsetHeight;
            return (e || 0 === e) && (a._left = e.toString().indexOf("%") !== -1 ? e : null, e = a._toNumber(e, h - m), "number" == typeof e && (e = c ? e += d : e + f, e = Math.max(e, f) + "px"), o.left = e), (t || 0 === t) && (a._top = t.toString().indexOf("%") !== -1 ? t : null, t = a._toNumber(t, g - v), "number" == typeof t && (t = c ? t += u : t + p, t = Math.max(t, p) + "px"), o.top = t), e !== n && t !== n && a._autoPositionType(), a
        }, time: function (e, t) {
            var n = this, a = n._timer;
            return a && clearTimeout(a), t && t.call(n), e && (n._timer = setTimeout(function () {
                n._click("cancel")
            }, 1e3 * e)), n
        }, show: function (t) {
            return this.DOM.wrap[0].style.visibility = "visible", this.DOM.border.addClass("ui_state_visible"), !t && this._lock && (e("#ldg_lockmask", o)[0].style.display = ""), this
        }, hide: function (t) {
            return this.DOM.wrap[0].style.visibility = "hidden", this.DOM.border.removeClass("ui_state_visible"), !t && this._lock && (e("#ldg_lockmask", o)[0].style.display = "none"), this
        }, zindex: function () {
            var e = this, t = e.DOM, n = e._load, a = w.focus, i = w.setting.zIndex++;
            return t.wrap[0].style.zIndex = i, a && a.DOM.border.removeClass("ui_state_focus"), w.focus = e, t.border.addClass("ui_state_focus"), n && n.style.zIndex && (n.style.display = "none"), a && a !== e && a.iframe && (a._load.style.display = ""), e
        }, focus: function () {
            try {
                elemFocus = this._focus && this._focus[0] || this.DOM.close[0], elemFocus && elemFocus.focus()
            } catch (e) {
            }
            return this
        }, lock: function () {
            var t, n = this, a = w.setting.zIndex - 1, i = (n.config, e("#ldg_lockmask", o)[0]), r = i ? i.style : "",
                l = s ? "absolute" : "fixed";
            return i || (t = '<iframe src="javascript:\'\'" style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;filter:alpha(opacity=0)"></iframe>', i = o.createElement("div"), i.id = "ldg_lockmask", i.style.cssText = "position:" + l + ";left:0;top:0;width:100%;height:100%;overflow:hidden;", r = i.style, s && (i.innerHTML = t), o.body.appendChild(i)), "absolute" === l && (r.width = _$top.width(), r.height = _$top.height(), r.top = _$top.scrollTop(), r.left = _$top.scrollLeft(), n._setFixed(i)), r.zIndex = a, r.display = "", n.zindex(), n.DOM.border.addClass("ui_state_lock"), n._lock = !0, n
        }, unlock: function () {
            var t = this, n = t.config, a = e("#ldg_lockmask", o)[0];
            if (a && t._lock) {
                if (n.parent && n.parent._lock) {
                    var i = n.parent.DOM.wrap[0].style.zIndex;
                    a.style.zIndex = parseInt(i, 10) - 1
                } else a.style.display = "none";
                t.DOM.border.removeClass("ui_state_lock")
            }
            return t._lock = !1, t
        }, close: function () {
            var n = this, i = n.DOM, r = i.wrap, o = w.list, s = n.config.close;
            if (n.time(), n.iframe) {
                if ("function" == typeof s && s.call(n, n.iframe.contentWindow, t) === !1)return n;
                e(n.iframe).unbind("load", n._fmLoad).attr("src", "javascript:''").remove(), i.content.removeClass("ui_state_full"), n._frmTimer && clearTimeout(n._frmTimer)
            } else if ("function" == typeof s && s.call(n, t) === !1)return n;
            if (n.unlock(), n._maxState && (_$html.removeClass("ui_lock_scroll"), i.res[0].style.display = "none"), w.focus === n && (w.focus = null), n._removeEvent(), delete o[n.config.id], a) r.remove(); else {
                a = n, n._minState && (i.main[0].style.display = "", i.buttons[0].style.display = "", i.dialog[0].style.width = ""), i.wrap[0].style.cssText = "left:0;top:0;", i.wrap[0].className = "", i.border.removeClass("ui_state_focus"), i.title[0].innerHTML = "", i.content.html(""), i.icon[0].innerHTML = "", i.buttons[0].innerHTML = "", n.hide(!0)._setAbsolute();
                for (var l in n)n.hasOwnProperty(l) && "DOM" !== l && delete n[l]
            }
            return n.closed = !0, n
        }, max: function () {
            var e, t = this, n = t.DOM, a = n.wrap[0].style, i = n.main[0].style, r = n.rb[0].style,
                o = n.title[0].style, l = t.config, c = _$top.scrollTop(), d = _$top.scrollLeft();
            return t._maxState ? (_$html.removeClass("ui_lock_scroll"), a.top = t._or.t, a.left = t._or.l, t.size(t._or.w, t._or.h)._autoPositionType(), l.drag = t._or.d, l.resize = t._or.r, r.cursor = t._or.rc, o.cursor = t._or.tc, n.res[0].style.display = "none", n.max[0].style.display = "inline-block", delete t._or, t._maxState = !1) : (_$html.addClass("ui_lock_scroll"), t._minState && t.min(), t._or = {
                t: a.top,
                l: a.left,
                w: i.width,
                h: i.height,
                d: l.drag,
                r: l.resize,
                rc: r.cursor,
                tc: o.cursor
            }, a.top = c + "px", a.left = d + "px", e = t._maxSize(), t.size(e.w, e.h)._setAbsolute(), s && y && (a.width = _$top.width() + "px"), l.drag = !1, l.resize = !1, r.cursor = "auto", o.cursor = "auto", n.max[0].style.display = "none", n.res[0].style.display = "inline-block", t._maxState = !0), t
        }, min: function () {
            var e = this, t = e.DOM, n = t.main[0].style, a = t.buttons[0].style, i = t.dialog[0].style,
                r = t.rb[0].style.cursor, o = e.config.resize;
            return e._minState ? (n.display = "", a.display = e._minRz.btn, i.width = "", o = e._minRz, r.cursor = e._minRz.rzs ? "se-resize" : "auto", delete e._minRz, e._minState = !1) : (e._maxState && e.max(), e._minRz = {
                rzs: o,
                btn: a.display
            }, n.display = "none", a.display = "none", i.width = n.width, r.cursor = "auto", o = !1, e._minState = !0), e._ie6SelectFix(), e
        }, get: function (e, t) {
            return w.list[e] ? 1 === t ? w.list[e] : w.list[e].content || null : null
        }, reload: function (t, n, a) {
            t = t || i;
            try {
                t.location.href = n ? n : t.location.href
            } catch (i) {
                n = this.iframe.src, e(this.iframe).attr("src", n)
            }
            return a && a.call(this), this
        }, _iframe: function (t) {
            var n, a, i, r, l, c, d, u = this, f = u.DOM.content, p = u.config, h = u._load = e(".ui_loading", f[0])[0],
                g = "position:absolute;left:-9999em;border:none 0;background:transparent",
                v = "width:100%;height:100%;border:none 0;";
            if (p.cache === !1) {
                var y = (new Date).getTime(), w = t.replace(/([?&])_=[^&]*/, "$1_=" + y);
                t = w + (w === t ? (/\?/.test(t) ? "&" : "?") + "_=" + y : "")
            }
            n = u.iframe = o.createElement("iframe"), n.name = p.id, n.style.cssText = g, n.setAttribute("frameborder", 0, 0), a = e(n), f[0].appendChild(n), u._frmTimer = setTimeout(function () {
                a.attr("src", t)
            }, 1);
            var $ = u._fmLoad = function () {
                f.addClass("ui_state_full");
                var e = u.DOM, t = (e.lt[0].offsetHeight, e.main[0].style);
                h.style.cssText = "display:none;position:absolute;background:#FFF;opacity:0;filter:alpha(opacity=0);z-index:1;width:" + t.width + ";height:" + t.height + ";";
                try {
                    i = u.content = n.contentWindow, r = a(i.document), l = a(i.document.body)
                } catch (a) {
                    return void(n.style.cssText = v)
                }
                c = "auto" === p.width ? r.width() + (s ? 0 : parseInt(l.css("marginLeft"))) : p.width, d = "auto" === p.height ? r.height() : p.height, setTimeout(function () {
                    n.style.cssText = v
                }, 0), u._maxState || u.size(c, d).position(p.left, p.top), h.style.width = t.width, h.style.height = t.height, p.init && p.init.call(u, i, m)
            };
            u.iframe.api = u, a.bind("load", $)
        }, _getDOM: function () {
            var t = o.createElement("div"), n = o.body;
            t.style.cssText = "position:absolute;left:0;top:0;visibility:hidden;", t.innerHTML = p;
            for (var a, i = 0, r = {wrap: e(t)}, s = t.getElementsByTagName("*"), l = s.length; i < l; i++)(a = s[i].className.split("ui_")[1]) && (r[a] = e(s[i]));
            return n.insertBefore(t, n.firstChild), r
        }, _toNumber: function (e, t) {
            return "number" == typeof e ? e : (e.indexOf("%") !== -1 && (e = parseInt(t * e.split("%")[0] / 100)), e)
        }, _maxSize: function () {
            var e, t, n = this, a = n.DOM, i = a.wrap[0], r = a.main[0];
            return e = _$top.width() - i.offsetWidth + r.offsetWidth, t = _$top.height() - i.offsetHeight + r.offsetHeight, {
                w: e,
                h: t
            }
        }, _ie6PngFix: function () {
            if (s)for (var e, t, n, a, i = 0, r = w.setting.path + "/skins/", o = this.DOM.wrap[0].getElementsByTagName("*"); i < o.length; i++)e = o[i], (t = e.currentStyle.png) && (n = r + t, a = e.runtimeStyle, a.backgroundImage = "none", a.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + n + "',sizingMethod='scale')");
            return this
        }, _ie6SelectFix: s ? function () {
            var e = this.DOM.wrap, t = e[0], n = n + "iframeMask", a = e[n], i = t.offsetWidth, r = t.offsetHeight;
            i += "px", r += "px", a ? (a.style.width = i, a.style.height = r) : (a = t.appendChild(o.createElement("iframe")), e[n] = a, a.src = "javascript:''", a.style.cssText = "position:absolute;z-index:-1;left:0;top:0;filter:alpha(opacity=0);width:" + i + ";height:" + r)
        } : l, _autoPositionType: function () {
            this[this.config.fixed ? "_setFixed" : "_setAbsolute"]()
        }, _setFixed: function (e) {
            var t = e ? e.style : this.DOM.wrap[0].style;
            if (s) {
                var n = _$top.scrollLeft(), a = _$top.scrollTop(), i = parseInt(t.left) - n, r = parseInt(t.top) - a,
                    o = y ? "this.ownerDocument.body" : "this.ownerDocument.documentElement";
                this._setAbsolute(), t.setExpression("left", o + ".scrollLeft +" + i), t.setExpression("top", o + ".scrollTop +" + r)
            } else t.position = "fixed"
        }, _setAbsolute: function () {
            var e = this.DOM.wrap[0].style;
            s && (e.removeExpression("left"), e.removeExpression("top")), e.position = "absolute"
        }, _click: function (e) {
            var n = this, a = n._listeners[e] && n._listeners[e].callback;
            return "function" != typeof a || a.call(n, t) !== !1 ? n.close() : n
        }, _reset: function () {
            var n, a = !!t.ActiveXObject, i = this, r = _$top.width(), l = _$top.height(), c = i._winSize || r * l,
                d = i._lockDocW || r, u = i._left, f = i._top;
            if (!a || (i._lock && s && e("#ldg_lockmask", o).css({
                    width: r + "px",
                    height: l + 17 + "px"
                }), newWidth = i._lockDocW = r, n = i._winSize = r * l, c !== n)) {
                if (i._maxState) {
                    var p = i._maxSize();
                    i.size(p.w, p.h)
                }
                a && 17 === Math.abs(d - newWidth) || (u || f) && i.position(u, f)
            }
        }, _addEvent: function () {
            var e, t = this, n = t.config, a = t.DOM;
            t._winResize = function () {
                e && clearTimeout(e), e = setTimeout(function () {
                    t._reset()
                }, 140)
            }, _$top.bind("resize", t._winResize), a.wrap.bind("click", function (e) {
                var n, i = e.target;
                return !i.disabled && (i === a.close[0] ? (t._click("cancel"), !1) : i === a.max[0] || i === a.res[0] || i === a.max_b[0] || i === a.res_b[0] || i === a.res_t[0] ? (t.max(), !1) : i === a.min[0] || i === a.min_b[0] ? (t.min(), !1) : void((n = i[f + "callback"]) && t._click(n)))
            }).bind("mousedown", function (e) {
                t.zindex();
                var i = e.target;
                if (n.drag !== !1 && i === a.title[0] || n.resize !== !1 && i === a.rb[0])return $(e), !1
            }), n.max && a.title.bind("dblclick", function () {
                return t.max(), !1
            })
        }, _removeEvent: function () {
            var e = this, t = e.DOM;
            t.wrap.unbind(), t.title.unbind(), _$top.unbind("resize", e._winResize)
        }
    }, w.fn._init.prototype = w.fn, w.focus = null, w.list = {}, i = function (e) {
        var t = (e.target, w.focus), n = e.keyCode;
        t && t.config.esc && t.config.cancel !== !1 && 27 === n && t._click(t.config.cancelVal)
    }, _$doc.bind("keydown", i), m != t && e(t).bind("unload", function () {
        var t = w.list;
        for (var n in t)t[n] && t[n].close();
        a && a.DOM.wrap.remove(), _$doc.unbind("keydown", i), e("#ldg_lockmask", o)[0] && e("#ldg_lockmask", o).remove(), e("#ldg_dragmask", o)[0] && e("#ldg_dragmask", o).remove()
    }), w.setting = {
        content: '<div class="ui_loading"><span>loading...</span></div>',
        title: "视窗 ",
        button: null,
        ok: null,
        cancel: null,
        init: null,
        close: null,
        okVal: "确定",
        cancelVal: "取消",
        skin: "",
        esc: !0,
        show: !0,
        width: "auto",
        height: "auto",
        icon: null,
        path: "http://lapp.xinli001.com/",
        lock: !1,
        focus: !0,
        parent: null,
        padding: "10px",
        fixed: !1,
        left: "50%",
        top: "38.2%",
        max: !0,
        min: !0,
        zIndex: 1976,
        resize: !0,
        drag: !0,
        cache: !0,
        data: null,
        extendDrag: !1
    };
    var $, b = "setCapture" in v, x = "onlosecapture" in v;
    w.dragEvent = {
        onstart: l, start: function (e) {
            var t = w.dragEvent;
            return _$doc.bind("mousemove", t.move).bind("mouseup", t.end), t._sClientX = e.clientX,
                t._sClientY = e.clientY, t.onstart(e.clientX, e.clientY), !1
        }, onmove: l, move: function (e) {
            var t = w.dragEvent;
            return t.onmove(e.clientX - t._sClientX, e.clientY - t._sClientY), !1
        }, onend: l, end: function (e) {
            var t = w.dragEvent;
            return _$doc.unbind("mousemove", t.move).unbind("mouseup", t.end), t.onend(e.clientX, e.clientY), !1
        }
    }, $ = function (t) {
        var n, a, i, r, l, c, d = w.focus, u = d.config, f = d.DOM, p = f.wrap[0], h = f.title, g = f.main[0],
            v = w.dragEvent, y = "getSelection" in m ? function () {
                m.getSelection().removeAllRanges()
            } : function () {
                try {
                    o.selection.empty()
                } catch (e) {
                }
            };
        v.onstart = function (e, t) {
            c ? (a = g.offsetWidth, i = g.offsetHeight) : (r = p.offsetLeft, l = p.offsetTop), _$doc.bind("dblclick", v.end), !s && x ? h.bind("losecapture", v.end) : _$top.bind("blur", v.end), b && h[0].setCapture(), f.border.addClass("ui_state_drag"), d.focus()
        }, v.onmove = function (t, o) {
            if (c) {
                var s = p.style, f = g.style, h = t + a, m = o + i;
                s.width = "auto", u.width = f.width = Math.max(0, h) + "px", s.width = p.offsetWidth + "px", u.height = f.height = Math.max(0, m) + "px", d._load && e(d._load).css({
                    width: f.width,
                    height: f.height
                })
            } else {
                var f = p.style, v = t + r, w = o + l;
                u.left = Math.max(n.minX, Math.min(n.maxX, v)), u.top = Math.max(n.minY, Math.min(n.maxY, w)), f.left = u.left + "px", f.top = u.top + "px"
            }
            y()
        }, v.onend = function (e, t) {
            _$doc.unbind("dblclick", v.end), !s && x ? h.unbind("losecapture", v.end) : _$top.unbind("blur", v.end), b && h[0].releaseCapture(), s && d._autoPositionType(), f.border.removeClass("ui_state_drag")
        }, c = t.target === f.rb[0], n = function (e) {
            var t = p.offsetWidth, n = h[0].offsetHeight || 20, a = _$top.width(), i = _$top.height(),
                r = e ? 0 : _$top.scrollLeft(), o = e ? 0 : _$top.scrollTop();
            return maxX = a - t + r, maxY = i - n + o, {minX: r, minY: o, maxX: maxX, maxY: maxY}
        }("fixed" === p.style.position), v.start(t)
    }, e(function () {
        setTimeout(function () {
            c || w({left: "-9999em", time: 9, fixed: !1, lock: !1, focus: !1})
        }, 150), w.setting.extendDrag && function (e) {
            var t = o.createElement("div"), n = t.style, a = s ? "absolute" : "fixed";
            t.id = "ldg_dragmask", n.cssText = "display:none;position:" + a + ";left:0;top:0;width:100%;height:100%;cursor:move;filter:alpha(opacity=0);opacity:0;background:#FFF;pointer-events:none;", o.body.appendChild(t), e._start = e.start, e._end = e.end, e.start = function () {
                var t = w.focus, i = t.DOM.main[0], r = t.iframe;
                e._start.apply(this, arguments), n.display = "block", n.zIndex = w.setting.zIndex + 3, "absolute" === a && (n.width = _$top.width() + "px", n.height = _$top.height() + "px", n.left = _$doc.scrollLeft() + "px", n.top = _$doc.scrollTop() + "px"), r && i.offsetWidth * i.offsetHeight > 307200 && (i.style.visibility = "hidden")
            }, e.end = function () {
                var t = w.focus;
                e._end.apply(this, arguments), n.display = "none", t && (t.DOM.main[0].style.visibility = "visible")
            }
        }(w.dragEvent)
    }), e.fn.dialog = function () {
        var e = arguments;
        return this.bind("click", function () {
            return w.apply(this, e), !1
        }), this
    }, t.lhgdialog = e.dialog = w
}(this.jQuery || this.lhgcore, this), function (e, t, n) {
    var a = function () {
        return t.setting.zIndex
    };
    t.alert = function (e, n, i) {
        return t({
            title: e.title || "警告",
            id: e.id || "Alert",
            zIndex: a(),
            icon: e.icon || "alert.gif",
            fixed: e.fixed || !0,
            lock: e.lock || !0,
            content: e.content || "",
            ok: !0,
            resize: !1,
            close: n,
            parent: i || null
        })
    }, t.confirm = function (e, n, i, r) {
        return t({
            title: e.title || "确认",
            id: "confirm.gif",
            zIndex: a(),
            icon: e.icon,
            fixed: !0,
            lock: !0,
            content: e.content,
            resize: !1,
            min: !1,
            max: !1,
            okVal: e.okVal || "确认",
            cancelVal: e.cancelVal || "取消",
            parent: r || null,
            ok: function (e) {
                return n.call(this, e)
            },
            cancel: function (e) {
                return i && i.call(this, e)
            }
        })
    }, t.prompt = function (e, n, i, r) {
        i = i || "";
        var o;
        return t({
            title: "提问",
            id: "Prompt",
            zIndex: a(),
            icon: "prompt.gif",
            fixed: !0,
            lock: !0,
            parent: r || null,
            content: ['<div style="margin-bottom:5px;font-size:12px">', e, "</div>", "<div>", '<input value="', i, '" style="width:18em;padding:6px 4px" />', "</div>"].join(""),
            init: function () {
                o = this.DOM.content[0].getElementsByTagName("input")[0], o.select(), o.focus()
            },
            ok: function (e) {
                return n && n.call(this, o.value, e)
            },
            cancel: !0
        })
    }, t.tips = function (e, n, i, r) {
        var o = i ? function () {
            this.DOM.icon[0].innerHTML = '<img src="' + this.config.path + "skins/icons/" + i + '" class="ui_icon_bg"/>', this.DOM.icon[0].style.display = "", r && (this.config.close = r)
        } : function () {
            this.DOM.icon[0].style.display = "none", r && (this.config.close = r)
        };
        return t({
            id: "Tips",
            zIndex: a(),
            title: !1,
            cancel: !1,
            fixed: !0,
            lock: !1,
            resize: !1
        }).content(e).time(n || 1.5, o)
    }
}(this.jQuery || this.lhgcore, this.lhgdialog), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, n, a, i) {
        return jQuery.easing[jQuery.easing.def](e, t, n, a, i)
    },
    easeInQuad: function (e, t, n, a, i) {
        return a * (t /= i) * t + n
    },
    easeOutQuad: function (e, t, n, a, i) {
        return -a * (t /= i) * (t - 2) + n
    },
    easeInOutQuad: function (e, t, n, a, i) {
        return (t /= i / 2) < 1 ? a / 2 * t * t + n : -a / 2 * (--t * (t - 2) - 1) + n
    },
    easeInCubic: function (e, t, n, a, i) {
        return a * (t /= i) * t * t + n
    },
    easeOutCubic: function (e, t, n, a, i) {
        return a * ((t = t / i - 1) * t * t + 1) + n
    },
    easeInOutCubic: function (e, t, n, a, i) {
        return (t /= i / 2) < 1 ? a / 2 * t * t * t + n : a / 2 * ((t -= 2) * t * t + 2) + n
    },
    easeInQuart: function (e, t, n, a, i) {
        return a * (t /= i) * t * t * t + n
    },
    easeOutQuart: function (e, t, n, a, i) {
        return -a * ((t = t / i - 1) * t * t * t - 1) + n
    },
    easeInOutQuart: function (e, t, n, a, i) {
        return (t /= i / 2) < 1 ? a / 2 * t * t * t * t + n : -a / 2 * ((t -= 2) * t * t * t - 2) + n
    },
    easeInQuint: function (e, t, n, a, i) {
        return a * (t /= i) * t * t * t * t + n
    },
    easeOutQuint: function (e, t, n, a, i) {
        return a * ((t = t / i - 1) * t * t * t * t + 1) + n
    },
    easeInOutQuint: function (e, t, n, a, i) {
        return (t /= i / 2) < 1 ? a / 2 * t * t * t * t * t + n : a / 2 * ((t -= 2) * t * t * t * t + 2) + n
    },
    easeInSine: function (e, t, n, a, i) {
        return -a * Math.cos(t / i * (Math.PI / 2)) + a + n
    },
    easeOutSine: function (e, t, n, a, i) {
        return a * Math.sin(t / i * (Math.PI / 2)) + n
    },
    easeInOutSine: function (e, t, n, a, i) {
        return -a / 2 * (Math.cos(Math.PI * t / i) - 1) + n
    },
    easeInExpo: function (e, t, n, a, i) {
        return 0 == t ? n : a * Math.pow(2, 10 * (t / i - 1)) + n
    },
    easeOutExpo: function (e, t, n, a, i) {
        return t == i ? n + a : a * (-Math.pow(2, -10 * t / i) + 1) + n
    },
    easeInOutExpo: function (e, t, n, a, i) {
        return 0 == t ? n : t == i ? n + a : (t /= i / 2) < 1 ? a / 2 * Math.pow(2, 10 * (t - 1)) + n : a / 2 * (-Math.pow(2, -10 * --t) + 2) + n
    },
    easeInCirc: function (e, t, n, a, i) {
        return -a * (Math.sqrt(1 - (t /= i) * t) - 1) + n
    },
    easeOutCirc: function (e, t, n, a, i) {
        return a * Math.sqrt(1 - (t = t / i - 1) * t) + n
    },
    easeInOutCirc: function (e, t, n, a, i) {
        return (t /= i / 2) < 1 ? -a / 2 * (Math.sqrt(1 - t * t) - 1) + n : a / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n
    },
    easeInElastic: function (e, t, n, a, i) {
        var r = 1.70158, o = 0, s = a;
        if (0 == t)return n;
        if (1 == (t /= i))return n + a;
        if (o || (o = .3 * i), s < Math.abs(a)) {
            s = a;
            var r = o / 4
        } else var r = o / (2 * Math.PI) * Math.asin(a / s);
        return -(s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - r) * (2 * Math.PI) / o)) + n
    },
    easeOutElastic: function (e, t, n, a, i) {
        var r = 1.70158, o = 0, s = a;
        if (0 == t)return n;
        if (1 == (t /= i))return n + a;
        if (o || (o = .3 * i), s < Math.abs(a)) {
            s = a;
            var r = o / 4
        } else var r = o / (2 * Math.PI) * Math.asin(a / s);
        return s * Math.pow(2, -10 * t) * Math.sin((t * i - r) * (2 * Math.PI) / o) + a + n
    },
    easeInOutElastic: function (e, t, n, a, i) {
        var r = 1.70158, o = 0, s = a;
        if (0 == t)return n;
        if (2 == (t /= i / 2))return n + a;
        if (o || (o = i * (.3 * 1.5)), s < Math.abs(a)) {
            s = a;
            var r = o / 4
        } else var r = o / (2 * Math.PI) * Math.asin(a / s);
        return t < 1 ? -.5 * (s * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - r) * (2 * Math.PI) / o)) + n : s * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - r) * (2 * Math.PI) / o) * .5 + a + n
    },
    easeInBack: function (e, t, n, a, i, r) {
        return void 0 == r && (r = 1.70158), a * (t /= i) * t * ((r + 1) * t - r) + n
    },
    easeOutBack: function (e, t, n, a, i, r) {
        return void 0 == r && (r = 1.70158), a * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + n
    },
    easeInOutBack: function (e, t, n, a, i, r) {
        return void 0 == r && (r = 1.70158), (t /= i / 2) < 1 ? a / 2 * (t * t * (((r *= 1.525) + 1) * t - r)) + n : a / 2 * ((t -= 2) * t * (((r *= 1.525) + 1) * t + r) + 2) + n
    },
    easeInBounce: function (e, t, n, a, i) {
        return a - jQuery.easing.easeOutBounce(e, i - t, 0, a, i) + n
    },
    easeOutBounce: function (e, t, n, a, i) {
        return (t /= i) < 1 / 2.75 ? a * (7.5625 * t * t) + n : t < 2 / 2.75 ? a * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? a * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : a * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n
    },
    easeInOutBounce: function (e, t, n, a, i) {
        return t < i / 2 ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, a, i) + n : .5 * jQuery.easing.easeOutBounce(e, 2 * t - i, 0, a, i) + .5 * a + n
    }
}), function (e, t, n, a) {
    var i = "glide", r = {
        autoplay: 4e3,
        animationTime: 500,
        arrows: !0,
        arrowsWrapperClass: "slider-arrows",
        arrowMainClass: "slider-arrow",
        arrowRightClass: "slider-arrow--right",
        arrowRightText: "next",
        arrowLeftClass: "slider-arrow--left",
        arrowLeftText: "prev",
        nav: !0,
        navCenter: !0,
        navClass: "slider-nav",
        navItemClass: "slider-nav__item",
        navCurrentItemClass: "slider-nav__item--current",
        touchDistance: 60,
        slideCurrentItemClass: "slide__item--current"
    };

    function o(a, i) {
        var o = this;
        return o.options = e.extend({}, r, i), o.parent = a, o.wrapper = o.parent.children(), o.slides = o.wrapper.children(), o.currentSlide = 0, o.CSS3support = !0, o.init(), o.build(), o.play(), o.options.touchDistance && o.swipe(), e(n).on("keyup", function (e) {
            39 === e.keyCode && o.slide(1), 37 === e.keyCode && o.slide(-1)
        }), o.parent.add(o.arrows).add(o.nav).on("mouseover mouseout", function (e) {
            o.pause(), "mouseout" === e.type && o.play()
        }), e(t).on("resize", function () {
            o.init(), o.slide(0)
        }), {
            current: function () {
                return -o.currentSlide + 1
            }, play: function () {
                o.play()
            }, pause: function () {
                o.pause()
            }, next: function (e) {
                o.slide(1, !1, e)
            }, prev: function (e) {
                o.slide(-1, !1, e)
            }, jump: function (e, t) {
                o.slide(e - 1, !0, t)
            }, nav: function (e) {
                o.navWrapper && o.navWrapper.remove(), o.options.nav = e ? e : o.options.nav, o.navigation()
            }, arrows: function (e) {
                o.arrowsWrapper && o.arrowsWrapper.remove(), o.options.arrows = e ? e : o.options.arrows, o.arrows()
            }
        }
    }

    o.prototype.build = function () {
        var e = this;
        e.options.arrows && e.arrows(), e.options.nav && e.navigation()
    }, o.prototype.navigation = function () {
        var t = this;
        try {
            if (t.slides.length > 1) {
                var n = t.options, a = t.options.nav === !0 ? t.parent : t.options.nav;
                t.navWrapper = e("<div />", {"class": n.navClass}).appendTo(a);
                for (var i, r = t.navWrapper, o = 0; o < t.slides.length; o++)i = e("<a />", {
                    href: "#",
                    "class": n.navItemClass,
                    "data-distance": o
                }).appendTo(r), r[o + 1] = i;
                var s = r.children();
                s.eq(0).addClass(n.navCurrentItemClass), t.slides.eq(0).addClass(n.slideCurrentItemClass), n.navCenter && r.css({
                    left: "50%",
                    width: s.outerWidth(!0) * s.length,
                    "margin-left": -r.outerWidth(!0) / 2
                }), s.on("click touchstart", function (n) {
                    n.preventDefault(), t.slide(e(this).data("distance"), !0)
                })
            }
        } catch (l) {
        }
    }, o.prototype.arrows = function () {
        var t = this;
        try {
            if (t.slides.length > 1) {
                var n = t.options, a = t.options.arrows === !0 ? t.parent : t.options.arrows;
                t.arrowsWrapper = e("<div />", {"class": n.arrowsWrapperClass}).appendTo(a);
                var i = t.arrowsWrapper;
                i.right = e("<a />", {
                    href: "#",
                    "class": n.arrowMainClass + " " + n.arrowRightClass,
                    "data-distance": "1",
                    html: n.arrowRightText
                }).appendTo(i), i.left = e("<a />", {
                    href: "#",
                    "class": n.arrowMainClass + " " + n.arrowLeftClass,
                    "data-distance": "-1",
                    html: n.arrowLeftText
                }).appendTo(i), i.children().on("click touchstart", function (n) {
                    n.preventDefault(), t.slide(e(this).data("distance"), !1)
                })
            }
        } catch (r) {
        }
    }, o.prototype.slide = function (e, t, n) {
        var a = this, i = t ? 0 : a.currentSlide, r = -(a.slides.length - 1), o = a.options.navCurrentItemClass,
            s = a.slides.spread;
        slideCurrentClass = a.options.slideCurrentItemClass, a.pause(), 0 === i && e === -1 ? i = r : i === r && 1 === e ? i = 0 : i += -e;
        var l = s * i + "px";
        a.CSS3support ? a.wrapper.css({
            "-webkit-transform": "translate3d(" + l + ", 0px, 0px)",
            "-moz-transform": "translate3d(" + l + ", 0px, 0px)",
            "-ms-transform": "translate3d(" + l + ", 0px, 0px)",
            "-o-transform": "translate3d(" + l + ", 0px, 0px)",
            transform: "translate3d(" + l + ", 0px, 0px)"
        }) : a.wrapper.stop().animate({"margin-left": l}, a.options.animationTime), a.options.nav && a.navWrapper.children().eq(-i).addClass(o).siblings().removeClass(o), a.currentSlide = i, a.slides.eq(-i).addClass(slideCurrentClass).siblings().removeClass(slideCurrentClass), "undefined" !== n && "function" == typeof n && n(), a.play()
    }, o.prototype.play = function () {
        var e = this;
        e.options.autoplay && (e.auto = setInterval(function () {
            e.slide(1, !1)
        }, e.options.autoplay))
    }, o.prototype.pause = function () {
        this.options.autoplay && (this.auto = clearInterval(this.auto))
    }, o.prototype.swipe = function () {
        var e, t, n, a, i, r, o, s, l, c, d, u, f, p = this, h = 180 / Math.PI;
        p.parent.on("touchstart", function (t) {
            e = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], n = e.pageX, a = e.pageY
        }), p.parent.on("touchmove", function (t) {
            e = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0], i = e.pageX, r = e.pageY, c = i - n, d = r - a, u = Math.abs(c << 2), f = Math.abs(d << 2), o = Math.sqrt(u + f), s = Math.sqrt(f), l = Math.asin(s / o), l * h < 32 && t.preventDefault()
        }), p.parent.on("touchend", function (a) {
            e = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0], t = e.pageX - n, t > p.options.touchDistance ? p.slide(-1) : t < -p.options.touchDistance && p.slide(1)
        })
    }, o.prototype.init = function () {
        var e = this, t = e.parent.width();
        e.slides.spread = t, e.wrapper.width(t * e.slides.length), e.slides.width(e.slides.spread), s("transition") && s("transform") || (e.CSS3support = !1)
    };
    function s(e) {
        var i = !1, r = "Khtml ms O Moz Webkit".split(" "), o = n.createElement("div"), s = null;
        if (e = e.toLowerCase(), o.style[e] !== a && (i = !0), i === !1) {
            s = e.charAt(0).toUpperCase() + e.substr(1);
            for (var l = 0; l < r.length; l++)if (o.style[r[l] + s] !== a) {
                i = !0;
                break
            }
        }
        return t.opera && t.opera.version() < 13 && (i = !1), i
    }

    e.fn[i] = function (t) {
        return this.each(function () {
            e.data(this, "api_" + i) || e.data(this, "api_" + i, new o(e(this), t))
        })
    }
}(jQuery, window, document), function (e, t, n) {
    "use strict";
    e.fn.scrollUp = function (t) {
        e.data(n.body, "scrollUp") || (e.data(n.body, "scrollUp", !0), e.fn.scrollUp.init(t))
    }, e.fn.scrollUp.init = function (a) {
        var i, r, o, s, l, c, d, u = e.fn.scrollUp.settings = e.extend({}, e.fn.scrollUp.defaults, a), f = !1;
        switch (d = u.scrollTrigger ? e(u.scrollTrigger) : e("<a/>", {
            id: u.scrollName,
            href: "#top"
        }), u.scrollTitle && d.attr("title", u.scrollTitle), d.appendTo("body"), u.scrollImg || u.scrollTrigger || d.html(u.scrollText), d.css({
            display: "none",
            position: "fixed",
            zIndex: u.zIndex
        }), u.activeOverlay && e("<div/>", {id: u.scrollName + "-active"}).css({
            position: "absolute",
            top: u.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + u.activeOverlay,
            zIndex: u.zIndex
        }).appendTo("body"), u.animation) {
            case"fade":
                i = "fadeIn", r = "fadeOut", o = u.animationSpeed;
                break;
            case"slide":
                i = "slideDown", r = "slideUp", o = u.animationSpeed;
                break;
            default:
                i = "show", r = "hide", o = 0
        }
        s = "top" === u.scrollFrom ? u.scrollDistance : e(n).height() - e(t).height() - u.scrollDistance, l = e(t).scroll(function () {
            e(t).scrollTop() > s ? f || (d[i](o), f = !0) : f && (d[r](o), f = !1)
        }), u.scrollTarget ? "number" == typeof u.scrollTarget ? c = u.scrollTarget : "string" == typeof u.scrollTarget && (c = Math.floor(e(u.scrollTarget).offset().top)) : c = 0, console.log(u.scrollTargetClick), u.scrollTargetClick ? (console.log("scrollTargetClick handler"), e(u.scrollTargetClick).click(function (t) {
            t.preventDefault(), e("html, body").animate({scrollTop: c}, u.scrollSpeed, u.easingType)
        })) : (console.log("self click handler"), d.click(function (t) {
            t.preventDefault(), e("html, body").animate({scrollTop: c}, u.scrollSpeed, u.easingType)
        }))
    }, e.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTargetClick: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, e.fn.scrollUp.destroy = function (a) {
        e.removeData(n.body, "scrollUp"), e("#" + e.fn.scrollUp.settings.scrollName).remove(), e("#" + e.fn.scrollUp.settings.scrollName + "-active").remove(), e.fn.jquery.split(".")[1] >= 7 ? e(t).off("scroll", a) : e(t).unbind("scroll", a)
    }, e.scrollUp = e.fn.scrollUp
}(jQuery, window, document), window.Modernizr = function (e, t, n) {
    function a(e) {
        w.cssText = e
    }

    function i(e, t) {
        return a(k.join(e + ";") + (t || ""))
    }

    function r(e, t) {
        return typeof e === t
    }

    function o(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function s(e, t) {
        for (var a in e) {
            var i = e[a];
            if (!o(i, "-") && w[i] !== n)return "pfx" != t || i
        }
        return !1
    }

    function l(e, t, a) {
        for (var i in e) {
            var o = t[e[i]];
            if (o !== n)return a === !1 ? e[i] : r(o, "function") ? o.bind(a || t) : o
        }
        return !1
    }

    function c(e, t, n) {
        var a = e.charAt(0).toUpperCase() + e.slice(1), i = (e + " " + _.join(a + " ") + a).split(" ");
        return r(t, "string") || r(t, "undefined") ? s(i, t) : (i = (e + " " + T.join(a + " ") + a).split(" "), l(i, t, n))
    }

    function d() {
        h.input = function (n) {
            for (var a = 0, i = n.length; a < i; a++)z[n[a]] = n[a] in $;
            return z.list && (z.list = !!t.createElement("datalist") && !!e.HTMLDataListElement), z
        }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), h.inputtypes = function (e) {
            for (var a, i, r, o = 0, s = e.length; o < s; o++)$.setAttribute("type", i = e[o]), a = "text" !== $.type, a && ($.value = b, $.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(i) && $.style.WebkitAppearance !== n ? (m.appendChild($), r = t.defaultView, a = r.getComputedStyle && "textfield" !== r.getComputedStyle($, null).WebkitAppearance && 0 !== $.offsetHeight, m.removeChild($)) : /^(search|tel)$/.test(i) || (a = /^(url|email)$/.test(i) ? $.checkValidity && $.checkValidity() === !1 : $.value != b)), E[e[o]] = !!a;
            return E
        }("search tel url email datetime date month week time datetime-local number range color".split(" "))
    }

    var u, f, p = "2.8.3", h = {}, g = !0, m = t.documentElement, v = "modernizr", y = t.createElement(v), w = y.style,
        $ = t.createElement("input"), b = ":)", x = {}.toString, k = " -webkit- -moz- -o- -ms- ".split(" "),
        C = "Webkit Moz O ms", _ = C.split(" "), T = C.toLowerCase().split(" "),
        j = {svg: "http://www.w3.org/2000/svg"}, S = {}, E = {}, z = {}, N = [], D = N.slice,
        q = function (e, n, a, i) {
            var r, o, s, l, c = t.createElement("div"), d = t.body, u = d || t.createElement("body");
            if (parseInt(a, 10))for (; a--;)s = t.createElement("div"), s.id = i ? i[a] : v + (a + 1), c.appendChild(s);
            return r = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""), c.id = v, (d ? c : u).innerHTML += r, u.appendChild(c), d || (u.style.background = "", u.style.overflow = "hidden", l = m.style.overflow, m.style.overflow = "hidden", m.appendChild(u)), o = n(c, e), d ? c.parentNode.removeChild(c) : (u.parentNode.removeChild(u), m.style.overflow = l), !!o
        }, A = function (t) {
            var n = e.matchMedia || e.msMatchMedia;
            if (n)return n(t) && n(t).matches || !1;
            var a;
            return q("@media " + t + " { #" + v + " { position: absolute; } }", function (t) {
                a = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
            }), a
        }, L = function () {
            function e(e, i) {
                i = i || t.createElement(a[e] || "div"), e = "on" + e;
                var o = e in i;
                return o || (i.setAttribute || (i = t.createElement("div")), i.setAttribute && i.removeAttribute && (i.setAttribute(e, ""), o = r(i[e], "function"), r(i[e], "undefined") || (i[e] = n), i.removeAttribute(e))), i = null, o
            }

            var a = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return e
        }(), I = {}.hasOwnProperty;
    f = r(I, "undefined") || r(I.call, "undefined") ? function (e, t) {
        return t in e && r(e.constructor.prototype[t], "undefined")
    } : function (e, t) {
        return I.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function (e) {
        var t = this;
        if ("function" != typeof t)throw new TypeError;
        var n = D.call(arguments, 1), a = function () {
            if (this instanceof a) {
                var i = function () {
                };
                i.prototype = t.prototype;
                var r = new i, o = t.apply(r, n.concat(D.call(arguments)));
                return Object(o) === o ? o : r
            }
            return t.apply(e, n.concat(D.call(arguments)))
        };
        return a
    }), S.flexbox = function () {
        return c("flexWrap")
    }, S.canvas = function () {
        var e = t.createElement("canvas");
        return !!e.getContext && !!e.getContext("2d")
    }, S.canvastext = function () {
        return !!h.canvas && !!r(t.createElement("canvas").getContext("2d").fillText, "function")
    }, S.webgl = function () {
        return !!e.WebGLRenderingContext
    }, S.touch = function () {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : q(["@media (", k.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (e) {
            n = 9 === e.offsetTop
        }), n
    }, S.geolocation = function () {
        return "geolocation" in navigator
    }, S.postmessage = function () {
        return !!e.postMessage
    }, S.websqldatabase = function () {
        return !!e.openDatabase
    }, S.indexedDB = function () {
        return !!c("indexedDB", e)
    }, S.hashchange = function () {
        return L("hashchange", e) && (t.documentMode === n || t.documentMode > 7)
    }, S.history = function () {
        return !!e.history && !!history.pushState
    }, S.draganddrop = function () {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, S.websockets = function () {
        return "WebSocket" in e || "MozWebSocket" in e
    }, S.rgba = function () {
        return a("background-color:rgba(150,255,150,.5)"), o(w.backgroundColor, "rgba")
    }, S.hsla = function () {
        return a("background-color:hsla(120,40%,100%,.5)"), o(w.backgroundColor, "rgba") || o(w.backgroundColor, "hsla")
    }, S.multiplebgs = function () {
        return a("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(w.background)
    }, S.backgroundsize = function () {
        return c("backgroundSize")
    }, S.borderimage = function () {
        return c("borderImage")
    }, S.borderradius = function () {
        return c("borderRadius")
    }, S.boxshadow = function () {
        return c("boxShadow")
    }, S.textshadow = function () {
        return "" === t.createElement("div").style.textShadow
    }, S.opacity = function () {
        return i("opacity:.55"), /^0.55$/.test(w.opacity)
    }, S.cssanimations = function () {
        return c("animationName")
    }, S.csscolumns = function () {
        return c("columnCount")
    }, S.cssgradients = function () {
        var e = "background-image:", t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            n = "linear-gradient(left top,#9f9, white);";
        return a((e + "-webkit- ".split(" ").join(t + e) + k.join(n + e)).slice(0, -e.length)), o(w.backgroundImage, "gradient")
    }, S.cssreflections = function () {
        return c("boxReflect")
    }, S.csstransforms = function () {
        return !!c("transform")
    }, S.csstransforms3d = function () {
        var e = !!c("perspective");
        return e && "webkitPerspective" in m.style && q("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function (t, n) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }), e
    }, S.csstransitions = function () {
        return c("transition")
    }, S.fontface = function () {
        var e;
        return q('@font-face {font-family:"font";src:url("https://")}', function (n, a) {
            var i = t.getElementById("smodernizr"), r = i.sheet || i.styleSheet,
                o = r ? r.cssRules && r.cssRules[0] ? r.cssRules[0].cssText : r.cssText || "" : "";
            e = /src/i.test(o) && 0 === o.indexOf(a.split(" ")[0])
        }), e
    }, S.generatedcontent = function () {
        var e;
        return q(["#", v, "{font:0/0 a}#", v, ':after{content:"', b, '";visibility:hidden;font:3px/1 a}'].join(""), function (t) {
            e = t.offsetHeight >= 3
        }), e
    }, S.video = function () {
        var e = t.createElement("video"), n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch (a) {
        }
        return n
    }, S.audio = function () {
        var e = t.createElement("audio"), n = !1;
        try {
            (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch (a) {
        }
        return n
    }, S.localstorage = function () {
        try {
            return localStorage.setItem(v, v), localStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, S.sessionstorage = function () {
        try {
            return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), !0
        } catch (e) {
            return !1
        }
    }, S.webworkers = function () {
        return !!e.Worker
    }, S.applicationcache = function () {
        return !!e.applicationCache
    }, S.svg = function () {
        return !!t.createElementNS && !!t.createElementNS(j.svg, "svg").createSVGRect
    }, S.inlinesvg = function () {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == j.svg
    }, S.smil = function () {
        return !!t.createElementNS && /SVGAnimate/.test(x.call(t.createElementNS(j.svg, "animate")))
    }, S.svgclippaths = function () {
        return !!t.createElementNS && /SVGClipPath/.test(x.call(t.createElementNS(j.svg, "clipPath")))
    };
    for (var M in S)f(S, M) && (u = M.toLowerCase(), h[u] = S[M](), N.push((h[u] ? "" : "no-") + u));
    return h.input || d(), h.addTest = function (e, t) {
        if ("object" == typeof e)for (var a in e)f(e, a) && h.addTest(a, e[a]); else {
            if (e = e.toLowerCase(), h[e] !== n)return h;
            t = "function" == typeof t ? t() : t, "undefined" != typeof g && g && (m.className += " " + (t ? "" : "no-") + e), h[e] = t
        }
        return h
    }, a(""), y = $ = null, function (e, t) {
        function n(e, t) {
            var n = e.createElement("p"), a = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", a.insertBefore(n.lastChild, a.firstChild)
        }

        function a() {
            var e = y.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function i(e) {
            var t = v[e[g]];
            return t || (t = {}, m++, e[g] = m, v[m] = t), t
        }

        function r(e, n, a) {
            if (n || (n = t), d)return n.createElement(e);
            a || (a = i(n));
            var r;
            return r = a.cache[e] ? a.cache[e].cloneNode() : h.test(e) ? (a.cache[e] = a.createElem(e)).cloneNode() : a.createElem(e), !r.canHaveChildren || p.test(e) || r.tagUrn ? r : a.frag.appendChild(r)
        }

        function o(e, n) {
            if (e || (e = t), d)return e.createDocumentFragment();
            n = n || i(e);
            for (var r = n.frag.cloneNode(), o = 0, s = a(), l = s.length; o < l; o++)r.createElement(s[o]);
            return r
        }

        function s(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function (n) {
                return y.shivMethods ? r(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + a().join().replace(/[\w\-]+/g, function (e) {
                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
                }) + ");return n}")(y, t.frag)
        }

        function l(e) {
            e || (e = t);
            var a = i(e);
            return y.shivCSS && !c && !a.hasCSS && (a.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), d || s(e, a), e
        }

        var c, d, u = "3.7.0", f = e.html5 || {},
            p = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            g = "_html5shiv", m = 0, v = {};
        !function () {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", c = "hidden" in e, d = 1 == e.childNodes.length || function () {
                        t.createElement("a");
                        var e = t.createDocumentFragment();
                        return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                    }()
            } catch (n) {
                c = !0, d = !0
            }
        }();
        var y = {
            elements: f.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: u,
            shivCSS: f.shivCSS !== !1,
            supportsUnknownElements: d,
            shivMethods: f.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: r,
            createDocumentFragment: o
        };
        e.html5 = y, l(t)
    }(this, t), h._version = p, h._prefixes = k, h._domPrefixes = T, h._cssomPrefixes = _, h.mq = A, h.hasEvent = L, h.testProp = function (e) {
        return s([e])
    }, h.testAllProps = c, h.testStyles = q, h.prefixed = function (e, t, n) {
        return t ? c(e, t, n) : c(e, "pfx")
    }, m.className = m.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (g ? " js " + N.join(" ") : ""), h
}(this, this.document), function (e, t, n) {
    function a(e) {
        return "[object Function]" == m.call(e)
    }

    function i(e) {
        return "string" == typeof e
    }

    function r() {
    }

    function o(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function s() {
        var e = v.shift();
        y = 1, e ? e.t ? h(function () {
            ("c" == e.t ? f.injectCss : f.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), s()) : y = 0
    }

    function l(e, n, a, i, r, l, c) {
        function d(t) {
            if (!p && o(u.readyState) && (w.r = p = 1, !y && s(), u.onload = u.onreadystatechange = null, t)) {
                "img" != e && h(function () {
                    b.removeChild(u)
                }, 50);
                for (var a in T[n])T[n].hasOwnProperty(a) && T[n][a].onload()
            }
        }

        var c = c || f.errorTimeout, u = t.createElement(e), p = 0, m = 0, w = {t: a, s: n, e: r, a: l, x: c};
        1 === T[n] && (m = 1, T[n] = []), "object" == e ? u.data = n : (u.src = n, u.type = e), u.width = u.height = "0", u.onerror = u.onload = u.onreadystatechange = function () {
            d.call(this, m)
        }, v.splice(i, 0, w), "img" != e && (m || 2 === T[n] ? (b.insertBefore(u, $ ? null : g), h(d, c)) : T[n].push(u))
    }

    function c(e, t, n, a, r) {
        return y = 0, t = t || "j", i(e) ? l("c" == t ? k : x, e, t, this.i++, n, a, r) : (v.splice(this.i++, 0, e), 1 == v.length && s()), this
    }

    function d() {
        var e = f;
        return e.loader = {load: c, i: 0}, e
    }

    var u, f, p = t.documentElement, h = e.setTimeout, g = t.getElementsByTagName("script")[0], m = {}.toString, v = [],
        y = 0, w = "MozAppearance" in p.style, $ = w && !!t.createRange().compareNode, b = $ ? p : g.parentNode,
        p = e.opera && "[object Opera]" == m.call(e.opera), p = !!t.attachEvent && !p,
        x = w ? "object" : p ? "script" : "img", k = p ? "script" : x, C = Array.isArray || function (e) {
                return "[object Array]" == m.call(e)
            }, _ = [], T = {}, j = {
            timeout: function (e, t) {
                return t.length && (e.timeout = t[0]), e
            }
        };
    f = function (e) {
        function t(e) {
            var t, n, a, e = e.split("!"), i = _.length, r = e.pop(), o = e.length,
                r = {url: r, origUrl: r, prefixes: e};
            for (n = 0; n < o; n++)a = e[n].split("="), (t = j[a.shift()]) && (r = t(r, a));
            for (n = 0; n < i; n++)r = _[n](r);
            return r
        }

        function o(e, i, r, o, s) {
            var l = t(e), c = l.autoCallback;
            l.url.split(".").pop().split("?").shift(), l.bypass || (i && (i = a(i) ? i : i[e] || i[o] || i[e.split("/").pop().split("?")[0]]), l.instead ? l.instead(e, i, r, o, s) : (T[l.url] ? l.noexec = !0 : T[l.url] = 1, r.load(l.url, l.forceCSS || !l.forceJS && "css" == l.url.split(".").pop().split("?").shift() ? "c" : n, l.noexec, l.attrs, l.timeout), (a(i) || a(c)) && r.load(function () {
                d(), i && i(l.origUrl, s, o), c && c(l.origUrl, s, o), T[l.url] = 2
            })))
        }

        function s(e, t) {
            function n(e, n) {
                if (e) {
                    if (i(e)) n || (u = function () {
                        var e = [].slice.call(arguments);
                        f.apply(this, e), p()
                    }), o(e, u, t, 0, c); else if (Object(e) === e)for (l in s = function () {
                        var t, n = 0;
                        for (t in e)e.hasOwnProperty(t) && n++;
                        return n
                    }(), e)e.hasOwnProperty(l) && (!n && !--s && (a(u) ? u = function () {
                        var e = [].slice.call(arguments);
                        f.apply(this, e), p()
                    } : u[l] = function (e) {
                        return function () {
                            var t = [].slice.call(arguments);
                            e && e.apply(this, t), p()
                        }
                    }(f[l])), o(e[l], u, t, l, c))
                } else!n && p()
            }

            var s, l, c = !!e.test, d = e.load || e.both, u = e.callback || r, f = u, p = e.complete || r;
            n(c ? e.yep : e.nope, !!d), d && n(d)
        }

        var l, c, u = this.yepnope.loader;
        if (i(e)) o(e, 0, u, 0); else if (C(e))for (l = 0; l < e.length; l++)c = e[l], i(c) ? o(c, 0, u, 0) : C(c) ? f(c) : Object(c) === c && s(c, u); else Object(e) === e && s(e, u)
    }, f.addPrefix = function (e, t) {
        j[e] = t
    }, f.addFilter = function (e) {
        _.push(e)
    }, f.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", u = function () {
        t.removeEventListener("DOMContentLoaded", u, 0), t.readyState = "complete"
    }, 0)), e.yepnope = d(), e.yepnope.executeStack = s, e.yepnope.injectJs = function (e, n, a, i, l, c) {
        var d, u, p = t.createElement("script"), i = i || f.errorTimeout;
        p.src = e;
        for (u in a)p.setAttribute(u, a[u]);
        n = c ? s : n || r, p.onreadystatechange = p.onload = function () {
            !d && o(p.readyState) && (d = 1, n(), p.onload = p.onreadystatechange = null)
        }, h(function () {
            d || (d = 1, n(1))
        }, i), l ? p.onload() : g.parentNode.insertBefore(p, g)
    }, e.yepnope.injectCss = function (e, n, a, i, o, l) {
        var c, i = t.createElement("link"), n = l ? s : n || r;
        i.href = e, i.rel = "stylesheet", i.type = "text/css";
        for (c in a)i.setAttribute(c, a[c]);
        o || (g.parentNode.insertBefore(i, g), h(n, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
}, $(function () {
    $(".gh").click(function () {
        $(".header").hasClass("selected") ? $(".header").removeClass("selected") : $(".header").addClass("selected")
    })
}), $(function () {
    $(".slider .inner").bind("swipeleft", function () {
    }), $(".slider .inner").bind("swiperight", function () {
    }), $(".header .nav li").hover(function () {
        $(this).hasClass("droplist") && $(this).find("dl").show()
    }, function () {
        $(this).hasClass("droplist") && $(this).find("dl").hide()
    }), $("#header-auth-user-div").delegate("li", "mouseover", function () {
        $(this).addClass("selected")
    }), $("#header-auth-user-div").delegate("li", "mouseout", function () {
        $(this).removeClass("selected")
    }), $(".header .info li").hover(function () {
        $(this).addClass("selected")
    }, function () {
        $(this).removeClass("selected")
    }), $(".header .text").focus(function () {
        "搜索" == $(this).val() && $(this).val(""), $(this).parent().parent().addClass("sear-selected")
    }), $(".header .text").blur(function () {
        "" == $(this).val() && $(this).val("搜索"), $(this).parent().parent().removeClass("sear-selected")
    }), $(".details .texts .digg").click(function () {
        return $(this).addClass("digg-selected"), !1
    }), $(".hblock .nav li").hover(function () {
        fb = $(this).parent().parent().parent(), fb.find(".nav li").removeClass("selected").eq($(this).index()).addClass("selected"), fb.find(".body").hide().eq($(this).index()).show(), fb.find(".foot").hide().eq($(this).index()).show()
    }), $(".hmod .nav li").hover(function () {
        fm = $(this).parent().parent().parent(), fm.find(".nav li").removeClass("selected").eq($(this).index()).addClass("selected"), fm.find(".body").hide().eq($(this).index()).show(), fm.find(".foot").hide().eq($(this).index()).show()
    }), $(".artype .nav li").not(".selected").hover(function () {
        $(".artype .nav li.selected").addClass("curr"), $(".artype .nav li").removeClass("hover").removeClass("selected").eq($(this).index()).addClass("hover"), $(".artype .body").hide().eq($(this).index()).show()
    }, function () {
        $(".artype .nav li").removeClass("hover").removeClass("selected");
        var e = $(".artype .nav li.curr");
        e.addClass("selected"), $(".artype .body").hide().eq(e.index()).show()
    }), $(".artype .nav li").click(function () {
        $(".artype .nav li").removeClass("hover").removeClass("selected").removeClass("curr").eq($(this).index()).addClass("selected").addClass("curr")
    }), $(".arlist .nav li").not(".nojs").click(function () {
        $(".arlist .nav li").removeClass("selected").eq($(this).index()).addClass("selected"), $(".arlist .list").hide().eq($(this).data("index")).show()
    }), $(".jg-jj .foot").click(function () {
        return $(".jg-jj").hasClass("selected") ? $(".jg-jj").removeClass("selected") : $(".jg-jj").addClass("selected"),
            !1
    }), $(".jg-view .desc i.arrow").click(function () {
        return $(".jg-view .desc .jj").hasClass("selected") ? ($(this).parent().find(".content").css({height: "auto"}), $(".jg-view .desc .jj").removeClass("selected")) : ($(this).parent().find(".content").css({height: "20px"}), $(".jg-view .desc .jj").addClass("selected")), !1
    }), $(".jg-nav li").click(function () {
        return $(".jg-nav li").removeClass("selected"), $(this).addClass("selected"), $(".jg-nav li").each(function () {
            $($(this).find("a").attr("href")).hide()
        }), $($(this).find("a").attr("href")).show(), !1
    }), $(".jg a[rel=more]").click(function () {
        var e = $(this);
        return $(".jg-nav li").each(function () {
            e.attr("href") == $(this).find("a").attr("href") ? ($(this).addClass("selected"), $($(this).find("a").attr("href")).show()) : ($(this).removeClass("selected"), $($(this).find("a").attr("href")).hide())
        }), !1
    }), $(".jg-view .desc li").hover(function () {
        $(this).addClass("active")
    }, function () {
        $(this).removeClass("active")
    }), $(".jg-view #edit").click(function () {
        return $(".jg-view .desc").hide(), $(".jg-view .desc-edit").show(), !1
    }), $(".zhsz-tab li").click(function () {
        return $(".zhsz-tab li").removeClass("selected"), $(this).addClass("selected"), $(".zhsz-tab li").each(function () {
            $($(this).find("a").attr("href")).hide()
        }), $($(this).find("a").attr("href")).show(), !1
    }), $(".jg-sc .head dd, .jg-ceshi .head dd").click(function () {
        return $(this).siblings().removeClass("selected"), $(this).addClass("selected"), $(".jg-sc .body").hide().eq($(this).index()).show(), $(".jg-sc .foot").hide().eq($(this).index()).show(), !1
    }), $(".jgzx tr:even").find("td,th").css("background", "#fafafa"), $(":checkbox:checked").parent(".f-checkbox").addClass("selected"), $(".f-checkbox").mousedown(function () {
        $(this).hasClass("selected") ? $(this).removeClass("selected") : $(this).addClass("selected")
    }), $(":radio:checked").parent(".f-radio").addClass("selected"), $(":radio").click(function () {
        $(":radio[name='" + $(this).attr("name") + "']").parent(".f-radio").removeClass("selected"), $(this).parent(".f-radio").addClass("selected")
    }), $(".y-user-f .hd dd").click(function () {
        $(".y-user-f .hd dd").removeClass("selected"), $(this).addClass("selected"), $(".y-user-f .hd dd .f-radio").removeClass("selected").find("input").attr("checked", !1), $(this).find(".f-radio").addClass("selected").find("input").attr("checked", "checked")
    })
});
try {
    var log = console.log
} catch (e) {
    var console = {};
    console.log = function () {
    }
}
window.zhuge = window.zhuge || [], window.zhuge.methods = "_init debug identify track trackLink trackForm page".split(" "), window.zhuge.factory = function (e) {
    return function () {
        var t = Array.prototype.slice.call(arguments);
        return t.unshift(e), window.zhuge.push(t), window.zhuge
    }
};
for (var i = 0; i < window.zhuge.methods.length; i++) {
    var key = window.zhuge.methods[i];
    window.zhuge[key] = window.zhuge.factory(key)
}
window.zhuge.load = function (e, t) {
    if (!document.getElementById("zhuge-js")) {
        var n = document.createElement("script"), a = new Date,
            i = a.getFullYear().toString() + a.getMonth().toString() + a.getDate().toString();
        n.type = "text/javascript", n.id = "zhuge-js", n.async = !0, n.src = ("http:" == location.protocol ? "http://sdk.zhugeio.com/zhuge-lastest.min.js?v=" : "https://zgsdk.zhugeio.com/zhuge-lastest.min.js?v=") + i;
        var r = document.getElementsByTagName("script")[0];
        r.parentNode.insertBefore(n, r), window.zhuge._init(e, t)
    }
}, window.zhuge.load("18f5038ab49c4ae4918641ae36d67496"), window.loginUserId && (zhuge.identify(String(window.loginUserId)), console.log(window.loginUserId));
try {
    var log = console.log
} catch (e) {
    var console = {};
    console.log = function () {
    }
}
window.onerror = function (e, t, n) {
    console.log({"信息": e, "网址": t, "行数": n})
}, $.fn.inchtml = function () {
    var e = parseInt($(this).html());
    $(this).html(e + 1)
}, $.fn.dechtml = function () {
    var e = parseInt($(this).html());
    $(this).html(e - 1)
};
var yiUtils = {
    randomNumber: function (e, t) {
        var n = e - t, a = Math.random();
        return e + Math.round(a * n)
    }, randomString: function (e) {
        for (var t = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], n = "", a = 0; a < e; a++) {
            var i = Math.ceil(35 * Math.random());
            n += t[i]
        }
        return n
    }, getCookie: function (e) {
    }, setCookie: function (e, t) {
    }, removeCookie: function (e) {
    }, getLocalStorage: function (e) {
    }, setLocalStorage: function (e, t) {
    }, removeLocalStorage: function (e) {
    }, cutString: function (e, t, n) {
    }, getUtf8Length: function (e) {
        var t = 0;
        if ("undefined" == typeof e)return t;
        for (var n = 0; n < e.length; n++) {
            var a = e.charCodeAt(n);
            a < 128 ? t++ : a > 127 && a < 2048 ? t++ : t++
        }
        return t
    }, getStringLength: function (e) {
        var t = 0;
        return "undefined" == typeof e || null == e ? t : "string" == typeof e ? e.length : t
    }
}, yiValidator = {
    isEmpty: function (e) {
        return "undefined" == typeof e || null == e || ("string" == typeof e ? 0 === e.length : "number" == typeof e ? isNaN(e) : void 0)
    }, isEmail: function (e) {
        var t = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return t.test(e) === !0
    }, isPhone: function (e) {
        var t = /^1[0-9]{10}$/;
        return t.test(e) === !0
    }
}, yiUikit = {
    dialog: function (e, t) {
        var n = $(e), a = {},
            i = ($.extend(a, t), "yidialog" + yiUtils.randomString(20), $('<div class="hide" id="overlay"></div>'));
        return this.init = function () {
            n.css("margin-left", -n.width() / 2), $(".dialog .close, #overlay").click(this.close), $("a[rel=dialog]").click(this.open)
        }, this.close = function () {
            n.addClass("hide"), i.addClass("hide"), i.remove()
        }, this.open = function () {
            this.init(), $("body").append(i), n.removeClass("hide"), i.removeClass("hide")
        }, this
    }, loginDialog: function () {
        window.loginWin.show()
    }, messageDialog: function (e, t) {
        var n = "#message_dialog", a = this.dialog(n);
        a.open();
        var i = $(n).find("form"), r = i.attr("action") || "/ajax/post-user-message.json";
        i.bind("submit", function () {
            return !i.data("loading") && (i.data("loading", !0), $.ajax({
                    url: r,
                    type: "post",
                    data: i.serialize(),
                    success: function (e) {
                        e && 0 == e.code ? (swal(e.message, "", "success"), i.find("input[name='content']").html(""), a.close()) : swal(e.message, "", "error")
                    },
                    complete: function () {
                        i.data("loading", !1)
                    },
                    error: function () {
                        swal("网络出错", "", "error")
                    }
                }), !1)
        })
    }, newShowDialog: function (e) {
        var t = e.layoutClass || "y-expert-m", n = e.element || "y-expert-p", a = e.content || "确认吗？",
            i = e.confirm || "确认", r = e.cannel || "取消", o = {};
        return this.opts = $.extend(o, e), this.init = function () {
            $("#" + n).find(".bd").html(a).siblings(".ft").children("#dialog-confirm").text(i).siblings(".dialog-cancel").text(r), $("." + t).fadeIn(), $("#" + n).addClass("show")
        }, this.init(), this
    }
}, yiPlugin = {
    createdFlashUpload: function (e) {
        $(e).each(function (e) {
            var t = $(this), n = t.data("type"), a = t.data("name"), i = t.data("size");
            i || (i = 0), n && a && t.flashuploadbutton2({
                type: n, name: a, size: i, start: function () {
                    $("#" + a + "progress").show(), $("#" + a + "progress").html("0%")
                }, progress: function (e, t, n) {
                    var a = parseInt(100 * t / n);
                    $("#" + e + "progress").html(a + "%")
                }, complete: function (e, t) {
                    t = t.replace("http://imagexinli.b0.upaiyun.com/", "http://image.xinli001.com/"), $("#" + e).val(t), $("#" + e + "preview").prop("src", t + "!120"), $("#" + e + "progress").hide()
                }, error: function (e, t) {
                    console.log(t), swal("图片太大了")
                }
            })
        })
    }, createFlashUploadEditor: function (e, t, n) {
        $(e).each(function (e) {
            var a = $(this), i = a.data("type"), r = a.data("name"), o = a.data("size");
            o || (o = 0), i && r && a.flashuploadbutton2({
                type: i, name: r, size: o, start: function () {
                    $("#" + r + "progress").show(), $("#" + r + "progress").html("0%")
                }, progress: function (e, t, n) {
                    var a = parseInt(100 * t / n);
                    $("#" + e + "progress").html(a + "%")
                }, complete: function (e, a) {
                    a = a.replace("http://imagexinli.b0.upaiyun.com/", "http://image.xinli001.com/"), $("#" + e).val(a), $("#" + e + "preview").prop("src", a + t), $("#" + e + "progress").hide(), window.ImageEditor.complete = function (n) {
                        $("#" + e).val(n), $("#" + e + "preview").prop("src", n + t), ImageEditor.dialog.close(), console.log(n)
                    }, window.flashEditor = yiPlugin.createdFlashEditor(n, a + "!600"), window.ImageEditor.dialog = $.dialog({
                        title: "截图",
                        content: flashEditor.html,
                        ok: function () {
                            return flashEditor.uploadImage(), !1
                        },
                        cancel: !0
                    })
                }, error: function (e, t) {
                    console.log(t), swal("图片太大了")
                }
            })
        })
    }, createdFlashEditor: function (e, t) {
        ImageEditor.loadDone = function () {
            console.log("load done")
        }, ImageEditor.loadStart = function () {
            console.log("load start")
        }, ImageEditor.initDone = function () {
            console.log("init done")
        }, ImageEditor.error = function (e) {
            console.log(e)
        };
        var n = $.flasheditor({bili: e, url: t});
        return n
    }
};
$(function () {
    headerAuthUserUrl && $.get(headerAuthUserUrl, function (e) {
        $("#header-auth-user-div").html(e)
    }), $.scrollUp({
        animation: "fade",
        scrollTrigger: "#aside-tools",
        scrollTargetClick: "#aside-tools .item3"
    }), $(".aside-tools li").hover(function () {
        $(this).addClass("hover")
    }, function () {
        $(this).removeClass("hover")
    }), $(".aside-tools .item2 a").click(function () {
        var e = $(this);
        return !e.data("locked") && (e.data("locked", !0), $.dialog({
                title: "问题反馈",
                content: $("#fk-form"),
                ok: function () {
                    var t = $("#fk-form textarea").val();
                    if ("" == t)return alert("请输入反馈内容"), !1;
                    var n = $("#fk-form input:text").val(), a = "/guest/feedback";
                    return $.post(a, {content: t, phone: n}, function (e) {
                        $("#fk-form textarea").val(""), alert("感谢您的反馈")
                    }), e.data("locked", !1), !0
                },
                cancel: function () {
                    e.data("locked", !1)
                }
            }), !1)
    })
});
var pageName = pageName || "";
if (console.log("module:load:" + pageName), window.activePhone = {
        close: function () {
            return $(".activePhone").fadeOut(500), $(".mask").fadeOut(500), !1
        }, show: function () {
            if ($(".activePhone").length > 0)return $(".activePhone").fadeIn(500), $(".mask").fadeIn(500), !1;
            var e = $("<div></div>").addClass("mask").css("display", "none"),
                t = $("<div></div>").addClass("activePhone").css("display", "none").html('<div class="head"><span>绑定手机号</span><a class="close" href="javascript:;"><i></i></a></div><div class="body"><p class="desc">*绑定手机号，可方便使用壹心理的私信功能，与专家和其他用户进行沟通和互动。</p><form action="/ajax/account-bind-phone" method="post"><div class="input-group"><input type="text" name="phone" class="input_full" placeholder="11位手机号" id="bind_phone"><p class="tip" id="bind_phone-tip"></p></div><div class="input-group"><input type="text" name="validcode" class="input_sm fl" placeholder="6位验证码" id="login_phonecode"><a href="jiavascript:;" class="js-sendPhoneCode inputBtn_sm fr">获取验证码</a><p class="tip fl" id="login_phonecode-tip"></p></div><div class="submit-group"><a class="js-submit_phone btn_blue" href="javascript:;">完成</a></div></form><p class="notice">*绑定后，该手机号可用于登录壹心理</p></div>'),
                n = function (e) {
                    var t = new RegExp(/^1[0-9]{10}$/);
                    return t.test(e)
                };
            t.find(".close").on("click", function () {
                t.fadeOut(500), e.fadeOut(500)
            }), t.find(".js-submit_phone").on("click", function () {
                return t.find("form").submit(), !1
            }), t.find("form").on("submit", function () {
                var e = $(this);
                if (e.data("lock"))return !1;
                var a = t.find("#bind_phone"), i = a.val(), r = t.find("#bind_phone-tip"),
                    o = t.find("#login_phonecode"), s = t.find("#login_phonecode-tip"), l = o.val();
                if ("" == i)return r.text("手机号不能为空"), a.addClass("error"), !1;
                if (!n(i))return r.text("手机号格式有误"), a.addClass("error"), !1;
                if ("" == l)return s.text("验证码不能为空"), o.addClass("error"), !1;
                r.text(""), a.removeClass("error"), s.text(""), o.removeClass("error");
                var c = e.attr("action"), d = e.serialize();
                return e.data("lock", !0), $.post(c, d, function (t) {
                    e.data("lock", !1), 0 == t.code ? ($(".activePhone").fadeOut(1200), $(".mask").fadeOut(1200), yiUikit.messageDialog(), $.dialogs.toast({
                        text: t.message,
                        mask: !1
                    })) : (s.text(t.message), o.addClass("error"))
                }), !1
            }), t.find(".js-sendPhoneCode").on("click", function () {
                var e, a, i = $(this), r = t.find("#bind_phone"), o = r.val(), s = t.find("#bind_phone-tip"),
                    l = t.find("#login_phonecode");
                t.find("#login_phonecode-tip"), l.val();
                if (i.data("lock"))return !1;
                if ("" == o)return s.text("手机号不能为空"), r.addClass("error"), !1;
                if (!n(o))return s.text("手机号格式有误"), r.addClass("error"), !1;
                if (s.text(""), r.removeClass("error"), i.hasClass("disabled"))return !1;
                i.data("lock", !0), $.post("/ajax/send-login-validcode", {phone: o}, function (t) {
                    i.data("lock", !1), t.code ? (s.text(t.message), r.addClass("error")) : (s.text(""), r.removeClass("error"), a = 60, e = setInterval(c, 1e3), i.addClass("disabled"))
                });
                function c() {
                    a--;
                    var t = i;
                    a > 0 ? t.html(a + "s后重新获取") : (t.html("获取验证码"), clearInterval(e), i.removeClass("disabled"))
                }
            }), e.appendTo($("body")).fadeIn(500), t.appendTo($("body")).fadeIn(500)
        }
    }, $.extend({
        dialogs: {
            toast: function (e) {
                var t = {mask: !0, maskClose: !0, text: "", time: 3e3};
                $.extend(t, e);
                var n = $("<div></div>").addClass("jqdialog toast"),
                    a = $(".jqdialog.mask").length > 0 ? $(".jqdialog.mask") : $("<div></div>").addClass("jqdialog mask"),
                    i = $("body");
                t.mask && (a.appendTo(i).fadeIn(500), t.maskClose && a.on("touchend", function () {
                    n.animate({opacity: "0"}, 500, function () {
                        $(this).remove(), a.fadeOut(500)
                    })
                })), n.text(t.text).appendTo(i).animate({opacity: ".8"}, 500, function () {
                    setTimeout(function () {
                        n.animate({opacity: "0"}, 500, function () {
                            $(this).remove(), a.fadeOut(500)
                        })
                    }, t.time)
                })
            }, alert: function (e) {
                var t = {
                    mask: !0,
                    maskClose: !1,
                    html: "",
                    title: "",
                    btnText: "确认",
                    btnCall: void 0,
                    btnCallData: void 0,
                    css: void 0
                };
                $.extend(t, e);
                var n = $("<div></div>").addClass("jqdialog alert"),
                    a = $(".jqdialog.mask").length > 0 ? $(".jqdialog.mask") : $("<div></div>").addClass("jqdialog mask"),
                    i = $("body");
                if (t.mask && (a.appendTo(i).fadeIn(500), t.maskClose && a.on("touchend", function () {
                        n.animate({opacity: "0"}, 500, function () {
                            $(this).remove(), a.fadeOut(500)
                        })
                    })), "" != t.title) {
                    $("<div></div>").addClass("head").text(t.title).appendTo(n)
                }
                var r = ($("<div></div>").addClass("body").html(t.html).appendTo(n), $("<div></div>").addClass("foot").appendTo(n)),
                    o = $("<a></a>").attr("href", "javascript:;").addClass("jqdialogBtn").text(t.btnText).appendTo(r);
                o.on("touchend", function () {
                    n.animate({opacity: "0"}, 500, function () {
                        $(this).remove(), a.fadeOut(500), void 0 != t.btnCall & "function" == typeof t.btnCall && (void 0 != t.btnCallData ? t.btnCall(t.btnCallData) : t.btnCall())
                    })
                }), n.appendTo(i).css(t.css).css({opacity: "0"}).animate({opacity: "1"}, 500)
            }, confirm: function (e) {
                var t = {
                    mask: !0,
                    maskClose: !1,
                    html: "",
                    title: "",
                    btn1Text: "确认",
                    btn1Call: void 0,
                    btn1CallData: void 0,
                    btn2Text: "确认",
                    btn2Call: void 0,
                    btn2CallData: void 0,
                    css: void 0
                };
                $.extend(t, e);
                var n = $("<div></div>").addClass("jqdialog confirm"),
                    a = $(".jqdialog.mask").length > 0 ? $(".jqdialog.mask") : $("<div></div>").addClass("jqdialog mask"),
                    i = $("body");
                if (t.mask && (a.appendTo(i).fadeIn(500), t.maskClose && a.on("touchend", function () {
                        n.animate({opacity: "0"}, 500, function () {
                            $(this).remove(), a.fadeOut(500)
                        })
                    })), "" != t.title) {
                    $("<div></div>").addClass("head").text(t.title).appendTo(n)
                }
                var r = ($("<div></div>").addClass("body").html(t.html).appendTo(n), $("<div></div>").addClass("foot").appendTo(n)),
                    o = $("<a></a>").attr("href", "javascript:;").addClass("jqdialogBtn").text(t.btn1Text).appendTo(r),
                    s = $("<a></a>").attr("href", "javascript:;").addClass("jqdialogBtn").text(t.btn2Text).appendTo(r);
                o.on("touchend", function () {
                    n.animate({opacity: "0"}, 500, function () {
                        $(this).remove(), a.fadeOut(500), void 0 != t.btn1Call & "function" == typeof t.btn1Call && (void 0 != t.btn1CallData ? t.btn1Call(t.btn1CallData) : t.btn1Call())
                    })
                }), s.on("touchend", function () {
                    n.animate({opacity: "0"}, 500, function () {
                        $(this).remove(), a.fadeOut(500), void 0 != t.btn2Call & "function" == typeof t.btn2Call && (void 0 != t.btn2CallData ? t.btn2Call(t.btn2CallData) : t.btn2Call())
                    })
                }), n.appendTo(i).css(t.css).css({opacity: "0"}).animate({opacity: "1"}, 500)
            }
        }
    }), window.loginWin = {
        hadInit: !1, init: function () {
            $win = $(".loginWin"), $win.find(".login-form").tab(".login-form .body"), $win.find(".js-showThirdParty").on("click", function () {
                var e = $(this);
                e.hasClass("close") ? ($win.find(".login-box .thirdParty-cont").animate({height: 0}, 500), $win.find(".js-showThirdParty").removeClass("close")) : ($win.find(".login-box .thirdParty-cont").animate({height: "52px"}, 500), $win.find(".js-showThirdParty").addClass("close"))
            }), $win.find(".head .close").on("click", function () {
                $win.fadeOut(500)
            }), $win.find(".js-submit_phone").on("click", function () {
                var e = $(this);
                if (e.data("lock"))return !1;
                var t = $.trim($("#login_phone").val()), n = $.trim($("#login_phonecode").val()),
                    a = $("#login_phone-tip"), i = $("#login_phonecode-tip"), r = 2;
                if ("" == t)return $("#login_phone").addClass("error"), a.text("手机号不能为空"), !1;
                if (!checkPhone(t))return $("#login_phone").addClass("error"), a.text("手机号格式有误"), !1;
                if ($("#login_phone").removeClass("error"), a.text(""), r--, "" == n)return $("#login_validcode").addClass("error"), i.text("验证码不能为空"), !1;
                if ($("#login_validcode").removeClass("error"), i.text(""), r--, 0 == r) {
                    console.log("ok");
                    var o = $win.find("form"), s = o.serialize(), l = o.attr("action");
                    e.data("lock", !0), $.ajax({
                        url: l,
                        data: s,
                        dataType: "jsonp",
                        jsonp: "callback",
                        success: function (t) {
                            e.data("lock", !1), t.code == -11 && (i.text(t.message), $("#fpsw_validcode").addClass("error")), 0 == t.code && (window.loginWin.close(), $.dialogs.toast({
                                text: t.message,
                                mask: !1
                            }), window.loginSuccess && window.loginSuccess.call())
                        }
                    })
                }
                return !1
            }), $win.find(".js-submit_accout").on("click", function () {
                var e = $(this);
                if (e.data("lock"))return !1;
                var t = $.trim($("#login_accout").val()), n = $.trim($("#login_password").val()),
                    a = $("#login_accout-tip"), i = $("#login_password-tip"), r = new RegExp(/^\S+@\S+$/),
                    o = new RegExp(/^1\d{10}$/), s = 2;
                if ("" == t)return $win.find("#login_accout").addClass("error"), a.text("账号不能为空"), !1;
                if (!o.test(t) && !r.test(t))return $("#login_username").addClass("error"), a.text("账号格式有误"), !1;
                if ($win.find("#login_accout").removeClass("error"), a.text(""), s--, "" == n)return $win.find("#login_password").addClass("error"), i.text("密码不能为空"), !1;
                if ($win.find("#login_password").removeClass("error"), i.text(""), s--, 0 == s) {
                    console.log("ok");
                    var l = $win.find("form"), c = l.serialize(), d = l.attr("action");
                    e.data("lock", !0), $.ajax({
                        url: d,
                        data: c,
                        jsonp: "callback",
                        dataType: "jsonp",
                        success: function (t) {
                            e.data("lock", !1), t.code == -11 && (i.text(t.message), $("#login_password").addClass("error")), 0 == t.code && (console.log(t.next), window.loginWin.close(), $.dialogs.toast({
                                text: t.message,
                                mask: !1
                            }), window.loginSuccess && window.loginSuccess.call())
                        }
                    })
                }
                return !1
            }), checkPhone = function (e) {
                var t = new RegExp(/^1[0-9]{10}$/);
                return t.test(e)
            }, $win.find(".js-sendPhoneCode").on("click", function () {
                var e = $(this), t = 60;
                if (e.data("lock"))return !1;
                var n = $win.find("#login_phone"), a = n.val(), i = $win.find("#login_phone-tip");
                $win.find("#login_phonecode");
                if ("" == a)return i.text("手机号不能为空"), n.addClass("error"), !1;
                if (n.removeClass("error"), i.text(""), !checkPhone(a))return i.text("手机号格式有误"), n.addClass("error"), !1;
                n.removeClass("error"), i.text(""), i.text(""), n.removeClass("error"), e.data("lock", !0);
                var r = e.data("url");
                return $.ajax({
                    url: r, jsonp: "callback", dataType: "jsonp", data: {account: a}, success: function (a) {
                        if (a.code) i.text(a.message), n.addClass("error"), e.data("lock", !1); else {
                            $.dialogs.toast({
                                text: "验证码发送成功",
                                mask: !1
                            }), i.text(""), n.removeClass("error"), e.addClass("disabled");
                            var r = setInterval(function () {
                                e.text(--t + "s后重新获取"), t == -1 && (clearInterval(r), e.removeClass("disabled").text("获取验证码"), e.data("lock", !1))
                            }, 1e3)
                        }
                    }
                }), !1
            }), this.hadInit = !0
        }, show: function () {
            this.hadInit || this.init(), $win = $(".loginWin"), $win.fadeIn(500)
        }, close: function () {
            $win.fadeOut(500)
        }
    }, $.fn.tab = function (e) {
        var t = ($(this), $(this).find(".js-tab")), n = $(e).find(".js-tabcont");
        t.on("click", {tabconts: n}, function (e) {
            var n = t.index($(this));
            return t.removeClass("selected"), $(this).addClass("selected"), e.data.tabconts.removeClass("selected"), e.data.tabconts.eq(n).addClass("selected"), !1
        })
    }, "object" != typeof JSON && (JSON = {}), function () {
        "use strict";
        var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            rx_four = /(?:^|:|,)(?:\s*\[)+/g,
            rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
            rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

        function f(e) {
            return e < 10 ? "0" + e : e
        }

        function this_value() {
            return this.valueOf()
        }

        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function () {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
        }, Boolean.prototype.toJSON = this_value, Number.prototype.toJSON = this_value, String.prototype.toJSON = this_value);
        var gap, indent, meta, rep;

        function quote(e) {
            return rx_escapable.lastIndex = 0, rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function (e) {
                    var t = meta[e];
                    return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                }) + '"' : '"' + e + '"'
        }

        function str(e, t) {
            var n, a, i, r, o, s = gap, l = t[e];
            switch (l && "object" == typeof l && "function" == typeof l.toJSON && (l = l.toJSON(e)), "function" == typeof rep && (l = rep.call(t, e, l)), typeof l) {
                case"string":
                    return quote(l);
                case"number":
                    return isFinite(l) ? String(l) : "null";
                case"boolean":
                case"null":
                    return String(l);
                case"object":
                    if (!l)return "null";
                    if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(l)) {
                        for (r = l.length, n = 0; n < r; n += 1)o[n] = str(n, l) || "null";
                        return i = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + s + "]" : "[" + o.join(",") + "]", gap = s, i
                    }
                    if (rep && "object" == typeof rep)for (r = rep.length, n = 0; n < r; n += 1)"string" == typeof rep[n] && (a = rep[n], i = str(a, l), i && o.push(quote(a) + (gap ? ": " : ":") + i)); else for (a in l)Object.prototype.hasOwnProperty.call(l, a) && (i = str(a, l), i && o.push(quote(a) + (gap ? ": " : ":") + i));
                    return i = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + s + "}" : "{" + o.join(",") + "}", gap = s, i
            }
        }

        "function" != typeof JSON.stringify && (meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, JSON.stringify = function (e, t, n) {
            var a;
            if (gap = "", indent = "", "number" == typeof n)for (a = 0; a < n; a += 1)indent += " "; else"string" == typeof n && (indent = n);
            if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))throw new Error("JSON.stringify");
            return str("", {"": e})
        }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
            var j;

            function walk(e, t) {
                var n, a, i = e[t];
                if (i && "object" == typeof i)for (n in i)Object.prototype.hasOwnProperty.call(i, n) && (a = walk(i, n), void 0 !== a ? i[n] = a : delete i[n]);
                return reviver.call(e, t, i)
            }

            if (text = String(text), rx_dangerous.lastIndex = 0, rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function (e) {
                    return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                })), rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({"": j}, "") : j;
            throw new SyntaxError("JSON.parse")
        })
    }(), "www/article/detail" == pageName) {
    function getArticleCommentList(e) {
        var t = $(this);
        return t.data("loading", !0), $.ajax({
            url: articleCommentListUrl,
            data: {article_id: articleId, page: e},
            success: function (n) {
                t.data("page", e);
                var a = $(n);
                $("#comment-list").append(a), a.each(function () {
                    initArticleComment.call($(this))
                }), 1 == e && a.length > 0 && $(".detail-plist").show(), (0 == a.length || a.length < 10) && $(".detail-plist .more").hide()
            },
            error: function () {
            },
            complete: function () {
                t.data("loading", !1)
            }
        }), !1
    }

    function toggleZan() {
        var e = $(this);
        return e.data("loading", !0), $.ajax({
            url: toggleArticleZanUrl,
            type: "post",
            data: {article_id: articleId},
            success: function (e) {
                if (console.log(e), 40001 == e.code) yiUikit.loginDialog(); else if (0 == e.code) {
                    var t = parseInt($("#zannum").html());
                    1 == e.data.is_like ? (t++, $("#zannum").parent().addClass("digg-selected")) : 0 == e.data.is_like && (t--, $("#zannum").parent().removeClass("digg-selected")), $("#zannum").html(t)
                } else swal(e.message)
            },
            error: function () {
                swal("网络错误，请重试", "", "error")
            },
            complete: function () {
                e.data("loading", !1)
            }
        }), !1
    }

    function toggleFavoriteArticle() {
        var e = $(this);
        return e.data("loading", !0), $.ajax({
            url: toggleArticleFavoriteUrl,
            type: "post",
            data: {article_id: articleId},
            success: function (t) {
                if (40001 == t.code) yiUikit.loginDialog(); else if (0 == t.code) {
                    var n = $("#favnum").html() || 0;
                    1 == t.data.is_fav ? (n++, $("#favnum").html(n), e.parent().addClass("fav-selected")) : 0 == t.data.is_fav && (n > 0 && n--, console.log(n), $("#favnum").html(n), e.parent().removeClass("fav-selected"))
                } else swal(t.message)
            },
            error: function () {
                swal("网络错误，请重试", "", "error")
            },
            complete: function () {
                e.data("loading", !1)
            }
        }), !1
    }

    function addArticleComment() {
        var e = $(this), t = e.find("textarea"), n = $.trim(t.val());
        if ("" == n)return swal("请输入评论内容", "", "warning"), !1;
        e.data("loading", !0);
        var a = (e.find("input:submit"), e.serialize()), i = e.attr("action");
        $.ajax({
            url: i, data: a, type: "post", success: function (e) {
                if (40001 == e.code) yiUikit.loginDialog(); else if (20002 == e.code) swal(e.message, "", "warning"); else {
                    var n = $(e);
                    $("#comment-list").prepend(n), initArticleComment.call(n), $(".detail-plist").show(), t.val("")
                }
            }, error: function () {
                swal("网络错误，请重试", "", "error")
            }, complete: function () {
                e.data("loading", !1)
            }
        })
    }

    function addArticleCommentReply() {
        var e = $(this), t = e.find("textarea"), n = $.trim(t.val());
        if ("" == n)return swal("请输入回复内容", "", "warning"), !1;
        e.data("loading", !0);
        var a = (e.find("input:submit"), e.serialize()), i = e.attr("action");
        $.ajax({
            url: i, data: a, type: "post", success: function (n) {
                if (40001 == n.code) yiUikit.loginDialog(); else if (20002 == n.code) swal(n.message, "", "warning"); else {
                    var a = $(n);
                    $("#comment-list").prepend(a), initArticleComment.call(a), $(".detail-plist").show(), t.val(""), e.parent().hide()
                }
            }, error: function () {
                swal("网络错误，请重试", "", "error")
            }, complete: function () {
                e.data("loading", !1)
            }
        })
    }

    function toggleCommentZan() {
        var e = $(this);
        e.data("loading", !0);
        var t = e.data("pk");
        return $.ajax({
            type: "post", url: toggleCommentZanUrl, data: {comment_id: t}, success: function (t) {
                0 == t.data.is_like ? e.find("span").dechtml() : e.find("span").inchtml(), swal(t.message, "", "success")
            }, complete: function () {
                e.data("loading", !1)
            }
        }), !1
    }

    function jubaoComment() {
        var e = $(this);
        e.data("loading", !0);
        var t = e.data("pk");
        return $.ajax({
            type: "post", url: jubaoCommentUrl, data: {comment_id: t}, success: function (e) {
                swal(e.message, "", "success")
            }, complete: function () {
                e.data("loading", !1)
            }
        }), !1
    }

    function toggleXiangZixun() {
        var e = $(this);
        e.data("loading", !0);
        var t = e.data("user-id");
        $.ajax({
            url: toggleXiangZixunUrl, type: "post", data: {user_id: t || 0}, success: function (e) {
                0 == e.code && swal(e.message, "", "success")
            }, error: function () {
                swal("网络错误，请重试", "", "error")
            }, complete: function () {
                e.data("loading", !1)
            }
        })
    }

    function initArticleComment() {
        var e = $(this), t = e.find("form.reply-form"), n = e.find("div.form");
        e.find(".ico-com").click(function () {
            return n.toggle(), $(this).parent().toggleClass("selected"), !1
        }), t.find("input:button").click(function () {
            return n.hide(), !1
        }), t.submit(function () {
            return !$(this).data("loading") && (addArticleCommentReply.call($(this)), !1)
        }), e.find(".ico-zan").click(function () {
            return !$(this).data("loading") && (toggleCommentZan.call($(this)), !1)
        }), e.find(".ico-jubao").click(function () {
            return !$(this).data("loading") && (!!confirm("你确定举报吗") && (jubaoComment.call($(this)), !1))
        })
    }

    function autofixVideoFrame() {
        var e = $(".details .texts"), t = 40, n = e.innerWidth() - t;
        e.find("iframe").each(function (e) {
            parseInt($(this).width()) > parseInt(n) && ($(this).attr("width", n), $(this).css("width", n + "px"))
        })
    }

    $(function () {
        $.get(articleUserStatusUrl, {article_id: articleId}, function (e) {
            var t = e.data;
            t.is_zan && $("#zan-btn").addClass("digg-selected"), t.is_favorite && $("#fav-btn").addClass("fav-selected"), $("#viewnum").html(t.viewnum), $("#commentnum").html(t.commentnum), $("#zannum").html(t.zannum), $("#favnum").html(t.favoritenum), $("#commentnum_dibu").html(t.commentnum), t.is_owner && $("#edit").show()
        }), autofixVideoFrame(), getArticleCommentList(1), $(".detail-plist .more a").click(function () {
            if ($(this).data("loading"))return !1;
            var e = $(this).data("page");
            return e++, getArticleCommentList.call($(this), e), !1
        }), $("form.comment-form").submit(function () {
            return !$(this).data("loading") && (addArticleComment.call($(this)), !1)
        }), $(".tags").delegate("a", "click", function () {
            var e = $(this).data("tag") || "", t = window.articleListPage;
            window.slug && (t += "/" + window.slug + "/"), t += "?tag=" + e, console.log(t), window.location.href = t
        }), $("#zannum").click(function () {
            return console.log("click"), !$(this).data("loading") && (toggleZan.call($(this)), !1)
        }), $("#btn-toggle-favorite").click(function () {
            return !$(this).data("loading") && (toggleFavoriteArticle.call($(this)), !1)
        }), $("#btn-xiang-zixun").click(function () {
            return !$(this).data("loading") && (toggleXiangZixun.call($(this)), !1)
        })
    })
}
if ("www/article/list" == pageName) {
    function getArticleList(e, t) {
        var n = $(this);
        return n.data("loading", !0), $.ajax({
            url: articleListUrl,
            data: {slug: slug, tag: tag, flag: e, page: t},
            success: function (a) {
                n.data("page", t);
                var i = $(a);
                $("#" + e + "-list ul").append(i), 0 == i.length && n.hide()
            },
            error: function () {
                swal("网络错误，请重试", "", "error")
            },
            complete: function () {
                n.data("loading", !1)
            }
        }), !1
    }

    $(function () {
        $(".arlist .more a").click(function () {
            if ($(this).data("loading"))return !1;
            var e = $(this).data("page"), t = $(this).data("flag");
            return getArticleList.call($(this), t, e), e++, !1
        }), $(".tag").delegate("a", "click", function () {
            var e = $(this).data("url") || "";
            window.location.href = e
        }), $(".selector-tag li").click(function () {
            var e = $(this).data("url") || "";
            window.location.href = e
        }), $(".btn-zixun-toggle").on("click", function () {
            var e = $(this), t = e.find(".counter"), n = parseInt(t.html());
            if (e.data("loading"))return !1;
            var a = e.data("user-id");
            e.addClass("selected"), $.ajax({
                url: toggleZixunUrl,
                type: "post",
                data: {user_id: a || 0},
                success: function (e) {
                    0 == e.code && (e.data.is_like ? t.html(n + 1) : t.html(n - 1))
                },
                error: function () {
                    swal("网络错误，请重试", "", "error")
                },
                complete: function () {
                    e.data("loading", !1)
                }
            })
        })
    })
}
if ("fm/index" == pageName) {
    function setBShareScript() {
        bShare.entries = [], bShare.addEntry({
            url: window.broadcast.absolute_url,
            summary: window.broadcast.content,
            pic: window.broadcast.cover
        })
    }

    function getBroadcast(e) {
        var t = {};
        t.pk = e;
        var n = broadcastUrl, a = ui.dialog("正在努力加载中").show();
        $.getJSON(n, t, function (e) {
            if (a.hide(), !(e.code < 0)) {
                window.broadcast = e.data, window.duration = e.data.duration, window.range = e.data.range, window.broadcast_pk = e.data.id, window.broadcast_url = e.data.url, window.background = e.data.background + "!pcfmbg", window.jingXuanId = e.data.jingxuan_id, getBroadcastPkList(), $("#flashInput").val(flashUrl.replace("{pk}", broadcast_pk)), $("#flashTA").val(flashText.replace("{pk}", broadcast_pk)), appendQQShare(), $("#fmtime").text("-00:00"), $("#background").fillmore({
                    src: window.background,
                    speed: "fast"
                }), $("#commentA").html("评论(" + e.data.commentnum + ")"), $("#favoriteA").html("收藏(" + e.data.favnum + ")");
                var t = $("title").html(), n = t.split(" ");
                n[0] = e.data.title, t = n.join(" "), document.title = t, $("#fmTitle").html(e.data.title);
                var i = $("#fmAbout").children(), r = $(i.get(0));
                r.html("主播：" + e.data.speak), "" == e.data.speak_url && (e.data.speak_url = "#"), r.attr("href", e.data.speak_url);
                var o = e.data.content, s = $(i.get(2)), l = $(i.get(1));
                e.data.word ? (l.html("作者：" + e.data.word), "" == e.data.word_url && (e.data.word_url = "#"), l.attr("href", e.data.word_url)) : l.css("display", "none");
                try {
                    e.data.word_url.length > 0 && (o += '<a href="{{url}}" target="_blank">阅读原文&raquo;</a>'.replace("{{url}}", e.data.word_url))
                } catch (c) {
                }
                s.html(o), $("#fmAbout a").unbind("click"), $("#fmAbout a[href=#]").click(function () {
                    return !1
                }), player.start(window.broadcast_url), getCommentShow(), checkFavorite(), getLastestComment()
            }
        })
    }

    function getBroadcastPkList() {
        var e = {};
        e.pk = window.broadcast_pk, e.id = window.jingXuanId;
        var t = broadcastPkListUrl;
        $.get(t, e, function (e) {
            window.broadcast_list = e.data
        })
    }

    function checkLogin() {
        var e = parseInt($("#userinfoSpan a.p_name").data("l"));
        return 1 == e
    }

    function checkCommentForm() {
        var e = $(this);
        if (e.data("loading"))return !1;
        var t = (e.find("input:submit"), e.find("textarea")), n = $.trim(t.val());
        if ("" == n)return slidemsg("请输入内容"), !1;
        var a = e.serialize(), i = commentUrl;
        return e.data("loading", !0), $.post(i, a, function (n) {
            switch (e.data("loading", !1), n.code) {
                case-1:
                    showLoginBox(), window.loginSuccess = function () {
                        isLogin = !0, checkCommentForm.call(e), getUserinfo()
                    };
                    break;
                case-2:
                    slidemsg("请输入内容");
                    break;
                case 0:
                    var a = emotions(n.data);
                    $("#commentsUl").prepend(a), bindCommentAddFun(), bindReplyBtn(), t.val(""), slidemsg("发表成功")
            }
        }), !1
    }

    function getCommentList() {
        var e = $(this);
        if (e.data("loading"))return !1;
        var t = $(this).prev(), n = parseInt(t.data("p"));
        n++;
        var a = {};
        a.pk = window.broadcast_pk, a.p = n, a.page = a.p;
        var i = 0;
        2 == arguments.length && (a.p = 1, a.lpk = arguments[1], i = a.lpk), a.page = a.p;
        var r = commentListUrl, o = e.html();
        return e.html("正在努力加载中"), e.data("loading", !0), $.get(r, a, function (a) {
            e.data("loading", !1), t.data("p", n), e.html(o), a = emotions(a), i > 0 ? t.prepend(a) : (t.append(a), "" == $.trim(a) && e.hide()), bindCommentAddFun(), bindReplyBtn()
        }), !1
    }

    function checkSpeakerCommentForm() {
        var e = $(this);
        if (e.data("loading"))return !1;
        var t = e.find("textarea"), n = $.trim(t.val());
        if ("" == n)return slidemsg("请输入内容"), !1;
        var a = e.serialize(), i = speakerCommentUrl;
        return e.data("loading", !0), $.post(i, a, function (n) {
            switch (e.data("loading", !1), n.code) {
                case-1:
                    showLoginBox(), window.loginSuccess = function () {
                        isLogin = !0, checkSpeakerCommentForm.call(e), getUserinfo()
                    };
                    break;
                case-2:
                    slidemsg("请输入内容");
                    break;
                case 0:
                    var a = emotions(n.data);
                    $("#speakercommentsUl").prepend(a), bindSpeakerCommentAddFun(), t.val(""), slidemsg("发表成功")
            }
        }), !1
    }

    function getSpeakerCommentList() {
        var e = $(this);
        if (e.data("loading"))return !1;
        var t = e.prev(), n = parseInt(t.data("p"));
        n++;
        var a = {};
        a.pk = e.data("pk"), a.p = n, a.page = n;
        var i = speakerCommentListUrl, r = e.html();
        return e.html("正在努力加载中"), e.data("loading", !0), $.get(i, a, function (a) {
            e.data("loading", !1), t.data("p", n), a = emotions(a), t.append(a), e.html(r), "" == $.trim(a) && e.hide(), bindSpeakerCommentAddFun()
        }), !1
    }

    function keywordHighlight(e, t) {
        var n = new RegExp(e, "g");
        return t = t.replace(n, '<font class="keyword">' + e + "</font>")
    }

    function emotions(e) {
        var t = /\[(jingya|cry|keai|xingfen|deyi|chou|heilian|yiduo|sanduo|shui|nu|yun|kiss|shuiww|yiwen|xiu|cute|xie|zhayan|ghost|huaixiu|heng|huachi|jiong)\]/g;
        return e.replace(t, '<img src="' + lappUrl + 'images/expression/$1.png"/>')
    }

    function checkSearchForm() {
        var e = $(this);
        if (e.data("loading"))return !1;
        var t = e.find("input[name=q]"), n = $.trim(t.val());
        if ("" == n)return slidemsg("请输入内容"), !1;
        var a = e.serialize(), i = searchUrl;
        return $("#searchSpan").html(loadingHtml1), e.data("loading", !0), $.get(i, a, function (t) {
            e.data("loading", !1), t = keywordHighlight(n, t), $("#searchSpan").html(t), $("#searchSpan").find(".getmore").click(getSearchList), bindBroadcast()
        }), !1
    }

    function getSearchList() {
        var e = $("#searchForm"), t = $(this);
        if (t.data("loading"))return !1;
        var n = t.prev(), a = e.find("input[name=q]"), i = $.trim(a.val()), r = {};
        r.q = i;
        var o = searchUrl, s = parseInt(n.data("p"));
        s++, r.p = s, r.page = s;
        var l = t.html();
        return t.html("正在努力加载中"), t.data("loading", !0), $.get(o, r, function (e) {
            t.data("loading", !1), n.data("p", s), t.html(l), e = keywordHighlight(i, e), n.append(e), "" == $.trim(e) && n.next().hide(), bindBroadcast()
        }), !1
    }

    function getUserinfo() {
        var e = {}, t = userinfoUrl;
        $.get(t, e, function (e) {
            switch ($("#userinfoSpan").html(e.data), e.code) {
                case 0:
                    isLogin = !0;
                    break;
                case-1:
                    $("#userinfoSpan a").click(function () {
                        return showLoginBox(), window.loginSuccess = function () {
                            isLogin = !0, getUserinfo()
                        }, !1
                    })
            }
        })
    }

    function RequestPermission(e) {
        window.webkitNotifications.requestPermission(e)
    }

    function showNotification() {
        if (window.webkitNotifications)if (window.webkitNotifications.checkPermission() > 0) RequestPermission(showNotification); else {
            var e = window.broadcast.cover, t = window.broadcast.title;
            window.notification = window.webkitNotifications.createNotification(e, t, "有新评论啦"), window.notification.onshow = function () {
                setTimeout("notification.cancel()", 5e3)
            }, window.notification.show()
        }
    }

    function getLastestComment() {
        var e = {};
        e.pk = broadcast_pk;
        var t = lastestCommentUrl;
        $.getJSON(t, e, function (e) {
            if (0 == e.code) {
                var t = parseInt(e.pk);
                if (t != lastComment) {
                    var n = emotions(e.data);
                    $("#newCommentDiv").html(n), $("#newCommentDiv").show(), showNotification(), lastComment = t;
                    var a = $("#commentsUl li");
                    if (a.length > 0) {
                        var i = parseInt($(a[0]).data("pk"));
                        if (t > 0 && t != i) {
                            var r = $("#commentDiv .getmore");
                            getCommentList.call(r, r, i)
                        }
                    }
                }
            }
        })
    }

    function playBroadcast() {
        var e = $(this), t = e.parents("ul"), n = $(t[0]), a = [], r = n.find("a.broadcast_title"), o = r.length;
        for (i = 0; i < o; i++)a.push($(r[i]).data("pk"));
        window.broadcast_list = a;
        var s = e.data("pk");
        getBroadcast(s)
    }

    function getTagShow() {
        var e = {}, t = $(this).data("name");
        t || (t = $(this).html()), e.p = $(this).attr("class"), e.page = e.p, e.n = t;
        var n = tagshowUrl, a = $("#detail").html();
        return $("#detail").html(loadingHtml1), $.get(n, e, function (e) {
            $("#detail").html(e), 20 == $("#broadcastsUl").children().length && ($("#broadcastsUl").next().css("display", "block"), $("#broadcastsUl").next().click(function () {
                return getBroadcastList.call(this, t), !1
            })), $("#detail .back_btn").click(function () {
                return $("#detail").html(a), $("#focus").length > 0 ? solveLastest() : $(".moodlist a").click(getTagShow), !1
            }), bindBroadcast()
        }), !1
    }

    function getCommentShow() {
        var e = {};
        e.pk = window.broadcast_pk;
        var t = commentshowUrl;
        return $("#commentDiv").html(loadingHtml1), $.get(t, e, function (e) {
            e = emotions(e), $("#commentDiv").html(e), $("#commentDiv .getmore").click(getCommentList), bindReplyBtn(), bindCommentAddFun(), bindCommentForm()
        }), !1
    }

    function checkSpeakerSearchForm() {
        var e = $(this);
        if (e.data("loading"))return !1;
        var t = e.find("input[name=q]"), n = $.trim(t.val()), a = e.serialize(), i = speakerListUrl;
        return $("#searchSpan").html(loadingHtml1), e.data("loading", !0), $.get(i, a, function (t) {
            e.data("loading", !1), n && (t = keywordHighlight(n, t)), $("#searchSpan").html(t), $("#speakersUl .host_name").click(getSpeakerShow)
        }), !1
    }

    function getSpeakerList() {
        var e = $(this);
        if (e.data("loading"))return !1;
        var t = e.prev(), n = {}, a = speakerListUrl, i = parseInt(t.data("p"));
        i++, n.p = i, n.page = n.p;
        var r = e.html();
        return e.html("正在努力加载中"), e.data("loading", !0), $.get(a, n, function (n) {
            e.data("loading", !1), t.data("p", i), e.html(r), t.append(n), "" == $.trim(n) && t.next().hide(), $("#speakersUl .host_name").click(getSpeakerShow)
        }), !1
    }

    function getSpeakerShow() {
        var e = $(this).data("pk"), t = {};
        t.pk = e;
        var n = speakerShowUrl, a = $("#detail").html();
        return $("#detail").html(loadingHtml1), $.get(n, t, function (e) {
            e = emotions(e), $("#detail").html(e), $("#host_switcher").switcher(), bindSpeakerCommentReplyBtn(), bindSpeakerCommentAddFun(), bindSpeakerCommentForm(), bindBroadcast(), $("#detail .speakercomment_list .getmore").click(getSpeakerCommentList), $("#detail .broadcast_list .getmore").click(function () {
                var e = $(this).data("pk");
                return getBroadcastList.call($(this), null, e), !1
            }), $("#detail .host_photo .back_btn").click(function () {
                return $("#detail").html(a), solveHost(), !1
            })
        }), !1
    }

    function getBroadcastList(e, t) {
        var n = $(this);
        if (n.data("loading"))return !1;
        var a = $(this).prev(), i = void 0 == a.data("p") ? 1 : parseInt(a.data("p"));
        i++;
        var r = {};
        r.p = i, r.page = r.p, e && (r.n = e), t && (r.s = t);
        var o = broadcastListUrl, s = n.html();
        return n.html("正在努力加载中"), n.data("loading", !0), $.get(o, r, function (e) {
            n.data("loading", !1), a.data("p", i), n.html(s), a.append(e), "" == $.trim(e) && a.next().hide(), bindBroadcast()
        }), !1
    }

    function checkFavorite() {
        var e = {};
        e.pk = broadcast_pk;
        var t = checkFavoriteUrl;
        $.get(t, e, function (e) {
            switch (e.code) {
                case 0:
                    $("#favoriteA").addClass("collected");
                    break;
                default:
                    $("#favoriteA").removeClass("collected")
            }
        })
    }

    function toggleFavoriteFM() {
        var e = $(this);
        if (e.data("lock"))return !1;
        var t = this, n = {};
        n.pk = broadcast_pk;
        var a = toggleFavoriteUrl;
        return e.data("lock", !0), $.get(a, n, function (n) {
            switch (e.data("lock", !1), n.code) {
                case-1:
                    showLoginBox(), window.loginSuccess = function () {
                        isLogin = !0, toggleFavoriteFM.call(t), getUserinfo()
                    };
                    break;
                case 0:
                    $("#favoriteA").addClass("collected"), slidemsg("收藏成功");
                    break;
                default:
                    $("#favoriteA").removeClass("collected"), slidemsg("已取消收藏")
            }
        }), !1
    }

    function bindBroadcast() {
    }

    function bindReplyBtn() {
        $("#commentsUl .reply_btn").click(function () {
            return $(this).next().toggle(), $("#posshowContent").hide(), !1
        })
    }

    function bindSpeakerCommentReplyBtn() {
        $("#speakercommentsUl .reply_btn").click(function () {
            return $(this).next().toggle(), $("#posshowContent").hide(), !1
        })
    }

    function bindCommentForm() {
        $("form.comment_form").submit(checkCommentForm)
    }

    function bindSpeakerCommentForm() {
        $("form.speakercomment_form").submit(checkSpeakerCommentForm)
    }

    function bindCommentAddFun() {
        $("#commentDiv .addfun").posshow({
            callback: function (e) {
                var t = $(this);
                t.find("a").unbind("click"), t.find("a").click(function () {
                    var t = "[" + this.className + "]", n = e.parent().prev();
                    return n.val(n.val() + t), !1
                })
            }
        })
    }

    function bindSpeakerCommentAddFun() {
        $(".speakercomment_list .addfun").posshow({
            callback: function (e) {
                var t = $(this);
                t.find("a").unbind("click"), t.find("a").click(function () {
                    var t = "[" + this.className + "]", n = e.parent().prev();
                    return n.val(n.val() + t), !1
                })
            }
        })
    }

    function solveLastest() {
        $("#focus").fishslider(), $("#switcher").switcher(), $("#focus .focusbox .item a").click(getTagShow), $(".lastest_list .getmore").click(function () {
            return getBroadcastList.call(this), !1
        }), bindBroadcast()
    }

    function solveHost() {
        $("#speakersUl .host_name").click(getSpeakerShow), $("#detail form.search").submit(checkSpeakerSearchForm), $("#detail .getmore").click(getSpeakerList)
    }

    function playPrev() {
        if (!isLogin)return showLoginBox(), void(window.loginSuccess = function () {
            isLogin = !0, playPrev.call(), getUserinfo()
        });
        var e = (window.broadcast_list.indexOf(window.broadcast_pk) - 1 + window.broadcast_list.length) % window.broadcast_list.length,
            t = window.broadcast_list[e];
        location.href = "/" + t
    }

    function playNext() {
        if (!isLogin)return showLoginBox(), void(window.loginSuccess = function () {
            isLogin = !0, playNext.call(), getUserinfo()
        });
        var e = window.broadcast_list.indexOf(window.broadcast_pk);
        e = (e + 1) % window.broadcast_list.length;
        var t = window.broadcast_list[e];
        location.href = "/" + t
    }

    function getHash() {
        var e = location.hash, t = 0;
        "" != e && (t = parseInt(e.slice(1)), t || (t = 0));
        var n = !1;
        return t != broadcast_pk && (n = !0, broadcast_pk = t), n
    }

    function getFragment(e) {
        $("#detail").html(loadingHtml1);
        var t = {t: $.now()}, n = fragmentUrl;
        t.n = e, $.get(n, t, function (t) {
            $("#detail").html(t), "lastest" == e && solveLastest(), "host" == e && solveHost(), $(".moodlist a").click(getTagShow), "search" == e && $("#searchForm").submit(checkSearchForm)
        })
    }

    function appendQQShare() {
        var e = {
            url: "http://fm.xinli001.com/" + broadcast_pk,
            desc: broadcast.content,
            title: "",
            summary: "",
            pics: broadcast.cover,
            flash: "",
            site: "",
            style: "101",
            width: 96,
            height: 24
        }, t = [];
        for (var n in e)t.push(n + "=" + encodeURIComponent(e[n] || ""));
        var a = ['<a class="qcShareQQDiv" href="http://connect.qq.com/widget/shareqq/index.html?', t.join("&"), '" target="_blank">分享到QQ</a>'].join("");
        $("#qqshareDiv").html(a)
    }

    function showLoginBox() {
        window.loginWin.show()
    }

    var flashUrl, isLogin, $sharewin, loadingHtml1, sharewinDialog, duration, lastComment = 0, player;
    $(function () {
        loadingHtml1 = '<div style="color:#999999;margin-top:50%;margin-left:100px;"> <img src="http://lapp.xinli001.com/images/fm/loading.gif"/> 温暖时刻即将到来</div>', $sharewin = $("#sharewinDiv"), lastComment = 0, flashUrl = "http://fm.xinli001.com/{pk}/miniplayer.swf", flashText = '<embed src="http://fm.xinli001.com/{pk}/miniplayer.swf" quality="high" width="300" height="37" type="application/x-shockwave-flash"></embed>', isLogin = checkLogin(), Modernizr.audio.mp3 || $(".ietips").show(), $("#menuright .menuitem").radio({
            callback: function (e) {
                var t = $(this).data("name");
                e && getFragment(t), Modernizr.csstransitions ? $("#menuright").addClass("right_show") : ($("#detail").show(), $("#detail").animate({width: "350px"}))
            }
        }), $("#commentA").click(function () {
            return Modernizr.csstransitions ? $("#commentDiv").addClass("comment_list_show") : ($("#commentDiv").show(), $("#commentDiv").animate({width: "400px"})), !1
        }), $("#downloadA").click(function () {
            if (broadcast_pk <= 0)return !1;
            var e = mediaDownloadUrl + "?pk=" + broadcast_pk;
            return window.open(e), !1
        }), $("#favoriteA").click(toggleFavoriteFM), $("#shareA").click(function () {
            return sharewinDialog = ui.dialog($sharewin).effect("slide").modal().overlay().show(), !1
        }), $("#closeshare").click(function () {
            return sharewinDialog.hide(), !1
        }), $sharewin.find(".flashtext").click(function () {
            return this.select(), !1
        }), $("#flashUrlA").click(function () {
            return window.clipboardData ? (window.clipboardData.clearData(), window.clipboardData.setData("Text", $sharewin.find(".sw_ins").val())) : alert("请使用Ctrl+C复制"), !1
        }), $("#flashTextA").click(function () {
            return window.clipboardData ? (window.clipboardData.clearData(), window.clipboardData.setData("Text", $sharewin.find(".sw_txt").val())) : alert("请使用Ctrl+C复制"), !1
        }), $("#background").click(function () {
            return Modernizr.csstransitions ? $("#commentDiv").hasClass("comment_list_show") ? $("#commentDiv").removeClass("comment_list_show") : $("#menuright").removeClass("right_show") : $("#commentDiv").is(":hidden") ? $("#detail").animate({width: "0px"}, function () {
                $(this).hide()
            }) : $("#commentDiv").animate({width: "0px"}, "fast", function () {
                $(this).hide()
            }), !1
        }), $("#share_tool_handle").click(function () {
            return $("#share_win").show(), !1
        }), $("#closeshare").click(function () {
            return $("#share_win").hide(), !1
        }), $("#dragItemX").draggable({
            lock: "y", callback: function (e) {
                player.play(e)
            }
        }), $("#playerDiv .playbtn").click(function () {
            return player.playOrPause(), !1
        }), $("#playerDiv .prebtn").click(function () {
            return playPrev(), !1
        }), $("#playerDiv .nextbtn").click(function () {
            return playNext(), !1
        }), $("#adclose").click(function () {
            return $("#adhelp").hide(), !1
        }), Modernizr.csstransitions || ($("#commentDiv").width(0), $("#commentDiv").hide(), $("#detail").width(0), $("#detail").hide());
        function e(e) {
            e = parseInt(e), e >= 0 || (e = 0);
            var t = parseInt(e / 60), n = e % 60;
            t < 10 && (t = "0" + t), n < 10 && (n = "0" + n), $("#fmtime").text("-" + t + ":" + n)
        }

        player = $.player({
            onPlaying: function (t) {
                $("#playerDiv .pr_played").css("width", t + "%"), $("#dragItemX").data("xui-dragging") || $("#dragItemX").css("left", t + "%"), !duration && this.duration && ($.get(durationUrl, {
                    d: this.duration,
                    pk: broadcast_pk
                }), duration = this.duration), e(this.duration - this.currentTime)
            }, onBuffering: function (e) {
                $("#playerDiv .pr_playing").css("width", e + "%")
            }, onPlay: function () {
                $("#playerDiv .playbtn").removeClass("pause"), $("#playerDiv .playbtn").addClass("play")
            }, onPause: function () {
                $("#playerDiv .playbtn").removeClass("play"), $("#playerDiv .playbtn").addClass("pause")
            }, onComplete: function () {
                playNext()
            }, onSeeking: function () {
                window.seekingDialog = ui.dialog("正在努力缓冲中").effect("slide").show()
            }, onSeeked: function () {
                window.seekingDialog.hide()
            }
        }), getBroadcast(broadcast_pk), getUserinfo(), setInterval(getLastestComment, 1e4)
    })
}
if ("fm/nj/add" == pageName) {
    $(document).ready(function () {
        categoryMainChange(), $("#category_id").change(function () {
            tagsMainJson = [], categoryMainChange()
        }), $(document).on("change", ".new-filter-tags", function () {
            var e = $(this), t = e.val(), n = $.inArray(t, tagsMainJson);
            return n < 0 && tagsMainJson.push(e.val()), tagsMainJson.length > 3 ? (alert("最多只能选择3个标签"), $(this).removeAttr("checked"), tagsMainJson.splice($.inArray(e.val(), tagsMainJson), 1), !1) : void($(this).is(":checked") ? $(this).siblings(".filter-tags-name").removeAttr("disabled") : (tagsMainJson.splice($.inArray(e.val(), tagsMainJson), 1), $(this).siblings(".filter-tags-name").attr("disabled", !0)))
        })
    });
    function categoryMainChange() {
        var e = $("#category_id option:selected").val(), t = tagsJson[e], n = $("#tags-main-list");
        if (n.html(""), void 0 == t)return n.hide(), !1;
        n.show();
        var a = ['<label class="checkbox-inline">', '<input type="checkbox" class="new-filter-tags" name="new_tags[]" value="{{tag}}"> {{tag_name}}', '<input type="hidden" class="filter-tags-name" name="tags_name[]" value="{{tag_name}}" disabled>', "</label>"].join("");
        if ("undefined" != typeof t) {
            for (i = 0; i < t.length; i++) {
                var r = t[i].custome_tag_id, o = t[i].name, s = a.replace(/{{tag_name}}/gi, o),
                    l = s.replace(/{{tag}}/gi, r);
                $("#tags-main-list").append(l)
            }
            if ("undefined" != typeof categoryMainId && categoryMainId == e) {
                var c = $("#tags-main-list input");
                c.each(function () {
                    var e = $(this).val(), t = $.inArray(e, tagsMainJson);
                    t >= 0 ? ($(this).attr("checked", !0), $(this).siblings(".filter-tags-name").removeAttr("disabled")) : $(this).siblings(".filter-tags-name").attr("disabled", !0)
                })
            }
        }
    }
}
if ("www/index" == pageName && $(function () {
        $.get(indexAuthUserUrl, function (e) {
            $("#index-auth-user-div").html(e)
        });
        $(".hslide").glide({
            animationTime: 500,
            arrows: !0,
            arrowRightText: "",
            arrowLeftText: "",
            nav: !0,
            navCenter: !0,
            navClass: "slider-nav",
            navItemClass: "slider-nav__item",
            navCurrentItemClass: "slider-nav__item--current"
        });
        $(".hdyxl .ico-weixin").hover(function () {
            $(".focus_weixin").show()
        }, function () {
            $(".focus_weixin").hide()
        }), $(".hdyxl .ico-phone").hover(function () {
            $(".focus_mobile").show()
        }, function () {
            $(".focus_mobile").hide()
        })
    }), "account/login" == pageName && $(function () {
        var e = function (e) {
            e.appendTo("#popup-captcha"), e.onReady(function (t) {
                e.show()
            }), e.onSuccess(function () {
                var t = e.getValidate();
                if (!t)return void $.dialogs.toast({text: "请先完成验证！", mask: !1});
                var n = $("#send_validcode"), a = $.trim($("#login_phone").val());
                $.post(checkGeetestUrl, {
                    account: a,
                    geetest_challenge: t.geetest_challenge,
                    geetest_validate: t.geetest_validate,
                    geetest_seccode: t.geetest_seccode
                }, function (e) {
                    if (null == e.code) {
                        n.data("lock", !0);
                        var t = 60, a = setInterval(function () {
                            n.text(--t + "s后重新获取"), t == -1 && (clearInterval(a), n.removeClass("disabled").text("获取验证码"), n.data("lock", !1))
                        }, 1e3);
                        n.addClass("disabled")
                    } else n.data("lock", !1), $.dialogs.toast({text: e.message, mask: !1})
                })
            })
        };
        $(".login-form").tab(".login-form .body"), $(".js-showThirdParty").on("click", function () {
            var e = $(this);
            e.hasClass("close") ? ($(".login-box .thirdParty-cont").animate({height: 0}, 500), $(".js-showThirdParty").removeClass("close")) : ($(".login-box .thirdParty-cont").animate({height: "52px"}, 500), $(".js-showThirdParty").addClass("close"))
        });
        var t = $("#agree");
        t.change(function () {
            $(this).is(":checked") ? $(this).val(1) : $(this).val(0)
        }), $(".js-submit_phone").on("click", function () {
            var e = $(this);
            if (e.data("lock"))return !1;
            var n = $.trim($("#login_phone").val()), a = $.trim($("#login_validcode").val()), i = $("#login_phone-tip"),
                r = $("#login_validcode-tip"), o = new RegExp(/^1\d{10}$/), s = 3, l = t.val(), c = $(".is_agree-tip");
            if ("" == n ? ($("#login_phone").addClass("error"), i.text("手机号不能为空")) : o.test(n) ? ($("#login_phone").removeClass("error"), i.text(""), s--) : ($("#login_phone").addClass("error"), i.text("手机号格式有误")), "" == a ? ($("#login_validcode").addClass("error"), r.text("验证码不能为空")) : ($("#login_validcode").removeClass("error"), r.text(""), s--), 0 == l ? ($("#login_agree").addClass("error"), c.text("请勾选同意协议")) : ($("#login_agree").removeClass("error"), c.text(""), s--), 0 == s) {
                console.log("ok");
                var d = $("#form1"), u = d.serialize(), f = d.attr("action");
                e.data("lock", !0), $.post(f, u, function (t) {
                    e.data("lock", !1), t.code == -11 && (r.text(t.message), $("#fpsw_validcode").addClass("error")), 0 == t.code && ("" != channel_name && "" != channel_id && zhuge.track("测评_PC渠道_登录数", {
                        channel_id: channel_id,
                        channel_name: channel_name
                    }), window.location.href = t.next)
                })
            }
            return !1
        }), $(".js-submit_accout").on("click", function () {
            var e = $(this);
            if (e.data("lock"))return !1;
            var t = $.trim($("#login_username").val()), n = $.trim($("#login_password").val()),
                a = $("#login_username-tip"), i = $("#login_password-tip"), r = new RegExp(/^\w{5,}$/),s=1;
                
            if ("" == t ? ($("#login_username").addClass("error"), a.text("账号不能为空")) : r.test(t) ? ($("#login_username").removeClass("error"), a.text(""), s--) : ($("#login_username").addClass("error"), a.text("账号格式有误")), "" == n ? ($("#login_password").addClass("error"), i.text("密码不能为空")) : ($("#login_password").removeClass("error"), i.text(""), s--), 0 == s) {
                console.log("ok");
                var l = $("#form2"), c = l.serialize(), d = l.attr("action");
                e.data("lock", !0), $.post(d, c, function (t) {
                    e.data("lock", !1), t.code == -11 && (i.text(t.message), $("#login_password").addClass("error")), 0 == t.code && (console.log(t.next), "" != channel_name && "" != channel_id && zhuge.track("测评_PC渠道_登录数", {
                        channel_id: channel_id,
                        channel_name: channel_name
                    }), window.location.href = t.next)
                })
            }
            return !1
        }), $("#validi").on("click", ".js-sendPhoneCode", function () {
            var t = $.trim($("#login_phone").val()), n = $("#login_phone-tip"), a = new RegExp(/^1\d{10}$/);
            if ("" == t)return $("#login_phone").addClass("error"), n.text("手机号不能为空"), !1;
            if (!a.test(t))return $("#login_phone").addClass("error"), n.text("手机号格式有误"), !1;
            var i = $(this);
            i.data("lock") || $.ajax({
                url: getGeetestUrl + "?t=" + (new Date).getTime(),
                type: "get",
                dataType: "jsonp",
                success: function (t) {
                    initGeetest({gt: t.gt, challenge: t.challenge, product: "popup"}, e)
                }
            })
        })
    }), "account/forgetpwd" == pageName && $(function () {
        $(".js-submit-fpsw_account").on("click", function () {
            var e = $(this);
            if (e.data("lock"))return !1;
            var t = $.trim($("#fpsw_account").val()), n = $("#fpsw_account-tip"), a = new RegExp(/^1\d{10}$/),
                i = new RegExp(/^\S+@\S+$/);
            if ("" == t)return n.text("账号不能为空"), $("#fpsw_account").siblings(".icon").removeClass("good").addClass("error"), void $("#fpsw_account").addClass("error");
            if (a.test(t) || i.test(t)) {
                n.text(""), $("#fpsw_account").removeClass("error");
                var r = $("form"), o = r.serialize(), s = r.attr("action");
                e.data("lock", !0), $.post(s, o, function (t) {
                    e.data("lock", !1), t.code == -11 && (n.text(t.message), $("#fpsw_account").siblings(".icon").removeClass("good").addClass("error"), $("#fpsw_account").addClass("error")), 0 == t.code && (window.location.href = t.next)
                })
            } else n.text("账号格式有误"), $("#fpsw_account").siblings(".icon").removeClass("good").addClass("error"), $("#fpsw_account").addClass("error");
            return !1
        })
    }), "account/forgetemail" == pageName && $(function () {
        $(".js-submit_resendEmail").on("click", function () {
            var e = $(this);
            if (!e.data("lock")) {
                e.data("lock", !0);
                var t = e.data("url"), n = e.data("account");
                return $.post(t, {account: n}, function (t) {
                    e.data("lock", !1), null == t.code ? $.dialogs.toast({
                        text: "验证信息已重新发送",
                        mask: !1
                    }) : $.dialogs.toast({text: t.message, mask: !1})
                }), !1
            }
        })
    }), "account/forgetphone" == pageName && $(function () {
        $(".js-submit-rspsw_account").on("click", function () {
            var e = $(this);
            e.data("lock", !0);
            var t = $.trim($("#fpsw_password").val()), n = $("#fpsw_password-tip"), a = n.siblings(".icon"),
                i = $.trim($("#fpsw_password1").val()), r = $("#fpsw_password1-tip"), o = r.siblings(".icon"), s = 2,
                l = new RegExp(/^\S{6,15}$/), c = $.trim($("#fpsw_validcode").val()), d = $("#fpsw_validcode-tip"),
                u = d.siblings(".icon"), s = 3;
            if ("" == t)return n.text("密码不能为空"), $("#fpsw_password").addClass("error"), a.removeClass("good").addClass("error"), !1;
            if ("" == i)return r.text("密码不能为空"), $("#fpsw_password1").addClass("error"), o.removeClass("good").addClass("error"), !1;
            if ("" == c)return d.text("验证码不能为空"), $("#fpsw_validcode").addClass("error"), u.removeClass("good").addClass("error"), !1;
            if (d.text(""), $("#fpsw_validcode").removeClass("error"), u.removeClass("error").addClass("good"), s--, !l.test(t))return n.text("请使用6-15位数字和字母组合"), $("#fpsw_password").addClass("error"), a.removeClass("good").addClass("error"), !1;
            if (n.text(""), $("#fpsw_password").removeClass("error"), a.removeClass("error").addClass("good"), s--, !l.test(i))return r.text("请使用6-15位数字和字母组合"), $("#fpsw_password1").addClass("error"), o.removeClass("good").addClass("error"), !1;
            if (t != i)return r.text("两次密码不一致"), $("#fpsw_password1").addClass("error"), o.removeClass("good").addClass("error"), !1;
            r.text(""), $("#fpsw_password1").removeClass("error"), o.removeClass("error").addClass("good"), s--, 0 == s && $(".findPsw-box").addClass("done");
            var f = $("form"), p = f.serialize(), h = f.attr("action");
            return $.post(h, p, function (t) {
                e.data("lock", !1), t.code == -11 && (d.text(t.message), $("#fpsw_validcode").addClass("error"), u.removeClass("good").addClass("error")), 0 == t.code && (window.location.href = t.next)
            }), !1
        }), $(".js-sendPhoneCode").on("click", function () {
            var e = $(this);
            if (!e.data("lock")) {
                e.data("lock", !0);
                var t = e.data("url"), n = e.data("account");
                $.post(t, {account: n}, function (t) {
                    if (null == t.code) {
                        var n = 60, a = setInterval(function () {
                            e.text(--n + "s后重新获取"), n == -1 && (clearInterval(a), e.removeClass("disabled").text("获取验证码"), e.data("lock", !1))
                        }, 1e3);
                        e.addClass("disabled")
                    } else e.data("lock", !1), $.dialog.tip(t.message)
                })
            }
        })
    }), "account/resetpwd" == pageName && $(function () {
        $(".js-submit-rspsw_account").on("click", function () {
            var e = $(this);
            if (e.data("lock"))return !1;
            e.data("lock", !0);
            var t = $.trim($("#fpsw_password").val()), n = $("#fpsw_password-tip"), a = n.siblings(".icon"),
                i = $.trim($("#fpsw_password1").val()), r = $("#fpsw_password1-tip"), o = r.siblings(".icon"), s = 2,
                l = new RegExp(/^\S{6,15}$/);
            "" == t && (n.text("密码不能为空"), $("#fpsw_password").addClass("error"), a.removeClass("good").addClass("error")), "" == i && (r.text("密码不能为空"), $("#fpsw_password1").removeClass("error"), o.removeClass("error").addClass("good")), l.test(t) ? (n.text(""), $("#fpsw_password").removeClass("error"), a.removeClass("error").addClass("good"), s--) : (n.text("请使用6-15位数字和字母组合"), $("#fpsw_password").addClass("error"), a.removeClass("good").addClass("error")), t != i ? (r.text("两次密码不一致"), $("#fpsw_password1").removeClass("error"), o.removeClass("error").addClass("good")) : (r.text(""), $("#fpsw_password1").removeClass("error"), o.removeClass("error").addClass("good"), s--), 0 == s && $(".findPsw-box").addClass("done");
            var c = $("form"), d = c.serialize(), u = c.attr("action");
            return $.post(u, d, function (t) {
                e.data("lock", !1), 0 == t.code && (window.location.href = t.next)
            }), !1
        })
    }), "account/resetsuccess" == pageName && $(function () {
        setTimeout(function () {
            var e = $(".js-jpsw_login").attr("href");
            location.href = e
        }, 5e3)
    }), "account/registerbindphone" == pageName && $(function () {
        var e = function (e) {
            e.appendTo("#popup-captcha"), e.onReady(function (t) {
                e.show()
            }), e.onSuccess(function () {
                var t = e.getValidate();
                if (!t)return void $.dialogs.toast({text: "请先完成验证！", mask: !1});
                var n = $("#send_validcode"), a = $.trim($("#login_phone").val());
                $.post(checkGeetestUrl, {
                    account: a,
                    geetest_challenge: t.geetest_challenge,
                    geetest_validate: t.geetest_validate,
                    geetest_seccode: t.geetest_seccode
                }, function (e) {
                    if (null == e.code) {
                        n.data("lock", !0);
                        var t = 60, a = setInterval(function () {
                            n.text(--t + "s后重新获取"), t == -1 && (clearInterval(a), n.removeClass("disabled").text("获取验证码"), n.data("lock", !1))
                        }, 1e3);
                        n.addClass("disabled")
                    } else n.data("lock", !1), $.dialogs.toast({text: e.message, mask: !1})
                })
            })
        };
        $(".js-submit_phone").on("click", function () {
            var e = $(this);
            if (e.data("lock"))return !1;
            var t = $.trim($("#login_phone").val()), n = $.trim($("#login_validcode").val()), a = $("#login_phone-tip"),
                i = $("#login_validcode-tip"), r = new RegExp(/^1\d{10}$/), o = 2;
            if ("" == t ? ($("#login_phone").addClass("error"), a.text("手机号不能为空")) : r.test(t) ? ($("#login_phone").removeClass("error"), a.text(""), o--) : ($("#login_phone").addClass("error"), a.text("手机号格式有误")), "" == n ? ($("#login_validcode").addClass("error"), i.text("验证码不能为空")) : ($("#login_validcode").removeClass("error"), i.text(""), o--), 0 == o) {
                console.log("ok");
                var s = $("#form1"), l = s.serialize(), c = s.attr("action");
                e.data("lock", !0), $.post(c, l, function (t) {
                    e.data("lock", !1), 0 != t.code && (i.text(t.message), $("#fpsw_validcode").addClass("error")), 0 == t.code && (window.location.href = t.next)
                })
            }
            return !1
        }), $("#validi").on("click", ".js-sendPhoneCode", function () {
            var t = $.trim($("#login_phone").val()), n = $("#login_phone-tip"), a = new RegExp(/^1\d{10}$/);
            if ("" == t)return $("#login_phone").addClass("error"), n.text("手机号不能为空"), !1;
            if (!a.test(t))return $("#login_phone").addClass("error"), n.text("手机号格式有误"), !1;
            var i = $(this);
            i.data("lock") || $.ajax({
                url: getGeetestUrl + "?t=" + (new Date).getTime(),
                type: "get",
                dataType: "jsonp",
                success: function (t) {
                    initGeetest({gt: t.gt, challenge: t.challenge, product: "popup"}, e)
                }
            })
        })
    }), "www/qa/detail" == pageName && $(function () {
        $(".qaTopicAnswerList").on("click", ".qaTopicAnswerItem .doAnswer", function () {
            $(this).parents(".answerAble").addClass("editing")
        }), $(".qaTopicAnswerList").on("click", ".qaTopicAnswerItem .doCancle", function () {
            $(this).css({display: "block"})
        });
        var lock = !0;
        $(".qaTopicAnswerList").on("click", ".qaTopicAnswerItem .answerInput .btn", function () {
            var e = $(this), t = e.hasClass("doSubmit");
            if (t) {
                if (1 == lock) {
                    lock = !1;
                    var n = e.siblings("textarea").val(), a = e.siblings("input").attr("data-teacher-id"),
                        i = e.siblings("input").attr("data-topic-id"), r = e.siblings("input").attr("data-question-id");
                    $.ajax({
                        url: "/qa/post-answer.json",
                        type: "post",
                        data: {content: n, teacher_id: a, topic_id: i, question_id: r},
                        dataType: "json",
                        success: function (e) {
                            0 == e.code ? window.location.href = window.location.href : (lock = !0, alert(e.message))
                        }
                    })
                }
            } else e.parents(".answerAble").removeClass("editing")
        }), $(".qaTopicAnswerList").on("click", ".qaTopicAnswerItem .answerEd .link", function () {
            var e = $(this), t = 1 * e.find("span").text() + 1, n = e.attr("data-user-id"),
                a = e.attr("data-answer-id");
            $.ajax({
                url: "/qa/post-jiehuo-zan.json",
                type: "post",
                data: {user_id: n, answer_id: a},
                dataType: "json",
                success: function (n) {
                    0 == n.code ? e.find("span").text(t) : alert(n.message)
                }
            })
        }), $(".qaTopicAnswerList").on("click", ".qaTopicAnswerItem .banEd .link", function () {
            var e = $(this), t = e.attr("data-question-id");
            $.dialog.confirm({content: "是否屏蔽此问答？"}, function (n) {
                $.ajax({
                    url: "/qa/post-jiehuo-shield.json", data: {id: t}, dataType: "json", success: function () {
                        e.parents(".qaTopicAnswerItem").remove()
                    }
                })
            })
        }), $("#tabPannel").on("click", ".tab", function () {
            var e = $(this), t = $("#tabPannel .tab"), n = $("#tabPannel .tabcont"), a = t.index(e);
            t.removeClass("active"), e.addClass("active"), n.removeClass("active"), n.eq(a).addClass("active")
        });
        var page1 = 1, page2 = 1;
        $("#tabPannel").on("click", ".all-answer .btn", function () {
            var _this = $(this), text = _this.text(), $ul = _this.parent().siblings("ul.qaTopicAnswerList"), limit = 10,
                offset = page1 * limit;
            page1++, $.ajax({
                url: "/qa/get-more-answer.json",
                data: {id: topicId, offset: offset, limit: limit},
                beforeSend: function () {
                    _this.text("正在加载")
                },
                success: function (obj) {
                    obj && (obj = eval("(" + obj + ")"), $.each(obj, function (e, t) {
                        var n = '<li class="qaTopicAnswerItem"><div class="head"><div class="avatar"><img src="' + t.user.avatar + '" alt=""></div><span class="userName left">' + t.user.nickname + '</span><span class="date right">' + t.created + '</span></div><div class="body"><div class="qDesc"><p>' + t.content + "</p></div></div>";
                        0 == _flag || 1 == _flag ? n = n + '<div class="foot answerEd"><div class="answerBrand">答</div><div class="answerCont"><div class="answerText">' + t.an_content + '</div><div class="answerInfo"><span class="left date">' + t.an_created + '</span><a href="javascript:;" class="right link" data-answer-id="' + t.answer_id + '" data-user-id="' + userId + '">有用（<span>' + t.zannum + "</span>）</a></div></div></div>" : 2 == _flag && (n = n + '<div class="foot banEd"><div class="answerInfo"><a href="javascript:;" data-question-id="' + t.id + '" class="right link">屏蔽此提问</a></div></div>'), n += "</li>", $(n).appendTo($ul)
                    }), 0 == obj.length && (text = "没有更多了"))
                },
                complete: function () {
                    _this.text(text)
                }
            })
        }), $("#tabPannel").on("click", ".no-answer .btn", function () {
            var _this = $(this), text = _this.text(), $ul = _this.parent().siblings("ul.qaTopicAnswerList"), limit = 10;
            page2++;
            var offset = page2 * limit;
            $.ajax({
                url: "/qa/get-more-no-answer.json",
                data: {id: topicId, offset: offset, limit: limit},
                beforeSend: function () {
                    _this.text("正在加载")
                },
                success: function (obj) {
                    obj = eval("(" + obj + ")"), $.each(obj, function (e, t) {
                        console.log(t);
                        var n = '<li class="qaTopicAnswerItem"><div class="head"><div class="avatar"><img src="' + t.user.avatar + '" alt=""></div><span class="userName left">' + t.user.nickname + '</span><span class="date right">' + t.created + '</span></div><div class="body"><div class="qDesc"><p>' + t.content + "</p></div></div>";
                        1 == _flag ? n = n + '<div class="foot answerAble editing"><div class="answerInput"><textarea></textarea><input type="hidden" data-question-id="' + t.id + '" data-topic-id="' + t.topic_id + '" data-teacher-id="' + userId + '" /><a class="btn  btn-success right doSubmit">提交</a><a class="btn  right doCancle">取消</a></div><a class="btn  btn-primary right doAnswer">马上回答</a></div>' : 2 == _flag && (n = n + '<div class="foot banEd"><div class="answerInfo"><a href="javascript:;" data-question-id="' + t.id + '" class="right link">屏蔽此提问</a></div></div>'), n += "</li>", $(n).appendTo($ul)
                    }), 0 == obj.length && (text = "没有更多了")
                },
                complete: function () {
                    _this.text(text)
                }
            })
        })
    }), "qa/index" == pageName) {
    function getQaVips() {
        console.log("qa getQaVips start");
        var e = $(this);
        if (e.data("lock"))return !1;
        e.data("lock", !0);
        var t = e.data("url");
        return $.get(t, function (t) {
            e.data("lock", !1), $("#id_qa_vip_list").html(t)
        }), !1
    }

    $(function () {
        console.log("qa start"), $("#vipsbtn").click(getQaVips)
    })
}
if ("qa/ask" == pageName) {
    function changeHotCeshi() {
        console.log("qa changeHotCeshi start");
        var e = $(this);
        if (e.data("lock"))return !1;
        e.data("lock", !0);
        var t = e.data("page"), n = e.data("url");
        return $.get(n, {page: t}, function (n) {
            e.data("lock", !1), $("#id_hot_ceshi_list").html(n), e.data("page", t + 1)
        }), !1
    }

    function checkForm() {
        console.log("qa checkForm start");
        var e = $(this);
        if (e.data("lock"))return !1;
        var t = 0, n = $("#id_title").val();
        0 == n.length || n.length > 30 ? ($("#id_title").addClass("ein"), t++) : $("#id_title").removeClass("ein");
        var a = $("#id_content").val();
        0 == a ? ($("#id_content").addClass("ein"), t++) : $("#id_content").removeClass("ein");
        var i = $("input[name=category_id]:checked");
        if (0 == i.length ? ($("#id_category_msg").html("请选择问答分类"), t++) : $("#id_category_msg").html(""), t > 0)return !1;
        var r = e.serialize(), o = e.attr("action");
        return e.data("lock", !0), $.post(o, r, function (t) {
            return e.data("lock", !1), 41003 == t.code ? void $.dialogs.toast({
                text: t.message,
                mask: !1
            }) : void(location.href = t.next)
        }), !1
    }

    $(function () {
        console.log("qa start"), $("#hotceshibtn").click(changeHotCeshi), $("#id_ask_form").submit(checkForm)
    })
}
if ("qa/show" == pageName) {
    function checkCommentForm() {
        var e = $(this);
        if (e.data("lock"))return !1;
        var t = $("#id_content").val();
        if (0 == t.length)return $("#id_content").addClass("ein"), !1;
        $("#id_content").removeClass("ein");
        var n = e.serialize(), a = e.attr("action");
        return e.data("lock", !0), $.post(a, n, function (t) {
            e.data("lock", !1), 40001 == t.code ? window.loginWin.show() : ($("#id_answer_list").prepend(t), $("#id_content").val(""))
        }), !1
    }

    function doVote(e) {
        var t = $(e);
        if (t.data("lock"))return !1;
        t.data("lock", !0);
        var n = t.attr("href");
        return $.post(n, function (e) {
            if (t.data("lock", !1), 0 == e.code) {
                t.removeClass("fgrey");
                var n = parseInt(t.find("span").text()) + 1;
                t.find("span").text(n)
            }
            40001 == e.code && window.loginWin.show()
        }), !1
    }

    function toggleReply(e) {
        var t = $(e);
        return t.parent().find(".topic_list").toggle(), !1
    }

    function doReply(e) {
        var t = $(e);
        if (t.data("lock"))return !1;
        var n = t.find("textarea");
        if (0 == n.length)return t.find("textarea").addClass("ein"), !1;
        t.find("textarea").removeClass("ein");
        var a = t.serialize(), i = t.attr("action");
        return t.data("lock", !0), $.post(i, a, function (e) {
            t.data("lock", !1), 40001 == e.code ? window.loginWin.show() : (t.parent().parent().prepend(e), t.find("textarea").val(""))
        }), !1
    }

    function getItemsByPage(e) {
        var t = $("#id_answer_list");
        return !t.data("lock") && (t.data("lock", !0), $.get(answerListUrl, {page: e}, function (e) {
                t.data("lock", !1), t.html(e), location.href = "#answers"
            }), !1)
    }

    $(function () {
        console.log("qa start"), $("#id_answer_form").submit(checkCommentForm)
    })
}
if ("www/teacher/list" == pageName && $(function () {
        function e(e, t) {
            var n = $(this);
            return n.data("loading", !0), $.ajax({
                url: teacherListUrl,
                data: {
                    slug: selector.slug || "",
                    tag: selector.tag || "",
                    flag: selector.sort || "",
                    city: selector.city || "",
                    page: t
                },
                success: function (e) {
                    n.data("page", t);
                    var a = $(e);
                    $(".teacherList ul").append(a), 0 == a.length && n.hide()
                },
                error: function () {
                    swal("网络错误，请重试", "", "error")
                },
                complete: function () {
                    n.data("loading", !1)
                }
            }), !1
        }

        $(".teacherList .foot .more").click(function () {
            if ($(this).data("loading"))return !1;
            var t = $(this).data("page");
            t++;
            var n = $(this).data("flag");
            return e.call($(this), n, t), !1
        }), $(".zjb-nav .city i.arrow").click(function () {
            var e = $(this).closest(".tag");
            e.hasClass("open") ? e.removeClass("open") : e.addClass("open")
        }), $(".selector-tag li").click(function () {
            var e = $(this).data("tag") || "";
            $("#selector-form input[name='tag']").val(e), $("#selector-form").submit()
        }), $(".selector-city li").click(function () {
            var e = $(this).data("city") || "";
            $("#selector-form input[name='city']").val(e), $("#selector-form").submit()
        }), $(".selector-way li").click(function () {
            var e = $(this).data("way") || "";
            $("#selector-form input[name='waytype']").val(e), $("#selector-form").submit()
        }), $(".selector-sort li").click(function () {
            var e = $(this).data("sort");
            $("#selector-form input[name='sort']").val(e), $("#selector-form").submit()
        })
    }), "www/teacher/list2" == pageName && $(function () {
        function e() {
            $.get(teacherSideListUrl, function (e) {
                var t = e.data.myself_block || "";
                "" != t && $(".add_expert_list li.cutline").before($(t))
            })
        }

        function t(e) {
            var t = $(this);
            return t.data("loading", !0), $.ajax({
                url: teacherListUrl,
                data: {template: "teacher-side-item", sort: "new", page: e, size: 5},
                success: function (n) {
                    t.data("page", e);
                    var a = $(n);
                    $(".add_side_expert .body ul").html(a), 0 == a.length && t.hide()
                },
                error: function () {
                    swal("网络错误，请重试", "", "error")
                },
                complete: function () {
                    t.data("loading", !1)
                }
            }), !1
        }

        function n(e, t) {
            var n = $(this);
            n.data("loading", !0);
            var a = $("#selector-form");
            return $.ajax({
                url: teacherListUrl,
                data: {
                    slug: a.find("input[name='slug']").val() || "",
                    tag: a.find("input[name='tag']").val() || "",
                    flag: a.find("input[name='sort']").val() || "",
                    city: a.find("input[name='city']").val() || "",
                    name: a.find("input[name='name']").val() || "",
                    page: t
                },
                success: function (e) {
                    n.data("page", t);
                    var a = $(e);
                    $(".add_expert_list ul").append(a), 0 == a.length && n.hide()
                },
                error: function () {
                    swal("网络错误，请重试", "", "error")
                },
                complete: function () {
                    n.data("loading", !1)
                }
            }), !1
        }

        var a = $(".add_expert_nav li.selected").data("sort") || "";
        "date" == a && e(), $(".add_side_expert .foot .more").click(function () {
            if ($(this).data("loading"))return !1;
            var e = $(this).data("page");
            return e++, t.call($(this), e), !1
        }), $(".add_expert_list .foot .more").click(function () {
            if ($(this).data("loading"))return !1;
            var e = $(this).data("page");
            e++;
            var t = $(this).data("flag");
            return n.call($(this), t, e), !1
        }), $(".zjb-nav .city i.arrow").click(function () {
            var e = $(this).closest(".tag");
            e.hasClass("open") ? e.removeClass("open") : e.addClass("open")
        }), $(".selector-tag li").click(function () {
            var e = $(this).data("tag") || "";
            $("#selector-form input[name='tag']").val(e), $("#selector-form").submit()
        }), $(".selector-city li").click(function () {
            var e = $(this).data("city") || "";
            $("#selector-form input[name='city']").val(e), $("#selector-form").submit()
        }), $(".selector-way li").click(function () {
            var e = $(this).data("way") || "";
            $("#selector-form input[name='waytype']").val(e), $("#selector-form").submit()
        }), $(".add_expert_nav li").click(function () {
            var e = $(this).data("sort");
            $("#selector-form input[name='sort']").val(e), $("#selector-form").submit()
        })
    }), "www/user/article/post" == pageName) {
    var editor;
    window.UEDITOR_DEFAULT_TOOLBAR = [["fullscreen", "undo", "redo", "bold", "italic", "|", "link", "unlink", "simpleupload", "|"]], window.UEDITOR_SERVER_URL = ueditorConfigURL;
    var isEnableCaptcha = !1;
    $(function () {
        if ($("#geetest-captcha").length > 0) {
            var e = new window.Geetest({
                gt: geeTestConfig.gt || "",
                challenge: geeTestConfig.challenge || "",
                product: "embed"
            });
            e.appendTo("#geetest-captcha"), isEnableCaptcha = !0
        }
        window.editor = editor = UE.getEditor("ueditor"), editor.execCommand("pasteplain", !0), editor.ready(function () {
            console.log("fire:ue:savedraft"), articleId || editor.execCommand("drafts")
        }), editor.addListener("afterautosave", function () {
            console.log("fire:ue:afterautosave");
            var e = new Date, t = e.getHours() + ":" + n(e.getMinutes()) + ":" + n(e.getSeconds());

            function n(e) {
                return e < 10 ? 0 + e : e
            }

            $(".save-draft").show(), $(".save-draft span").html(t)
        });
        function t() {
            var e = $(".category_list"), t = e.val() || "", n = [];
            if (t)for (var a = tagList[t], i = 0; i < a.length; i++)n.push('<dd><a data-category-id="' + t + '" data-tag="' + a[i].id + '" href="javascript:;">' + a[i].name + "</a></dd>");
            n.length > 0 ? $(".tag_list").show() : $(".tag_list").hide(), $(".tag_list dl").html(n.join(""))
        }

        function n() {
            var e = article ? article.tags_main : "";
            $(".tag_list dd").each(function (t) {
                var n = $(this).find("a").text() || "", a = e.split(",");
                $.inArray(n, a) !== -1 && $(this).addClass("selected")
            })
        }

        function a() {
            var e = $(".tag_list input[name='tags_main']"), t = $(".tag_list input[name='tags_idlist']"), n = [],
                a = [];
            return $(this).toggleClass("selected"), $(".tag_list dd.selected").each(function (e) {
                var t = $(this).find("a").text() || "", i = $(this).find("a").attr("data-tag") || 0;
                n.push(t), a.push(i)
            }), $(".tag_list dd.selected").size() > 3 ? (swal("最多选择3个标签", "", "warning"), $(this).removeClass("selected"), !1) : (e.val(n.join(",")), void t.val(a.join(",")))
        }

        function i() {
            $(".jinput-flashupload").each(function (e) {
                var t = $(this), n = t.data("type"), a = t.data("name"), i = t.data("size") ? t.data("size") : 0;
                n && a && t.flashuploadbutton2({
                    type: n, name: a, size: i, start: function () {
                        $("#cover-progress").show(), $("#cover-progress").html("0%")
                    }, progress: function (e, t, n) {
                        var a = parseInt(100 * t / n);
                        $("#cover-progress").html(a + "%")
                    }, error: function (e, t, n) {
                        switch (t) {
                            case-1:
                                swal("图片不能大于4M", "", "error");
                                break;
                            case-2:
                                swal("图片上传中", "", "error");
                                break;
                            case-10:
                                swal("图片格式不正确", "", "error");
                                break;
                            default:
                                swal("图片上传失败，code:" + n, "", "error")
                        }
                    }, complete: function (e, t) {
                        console.log(e), console.log(t), t = t.replace("http://imagexinli.b0.upaiyun.com/", "http://image.xinli001.com/"), $("#" + e).val(t), $("#" + e + "preview").prop("src", t + "!120"), $("#cover-progress").hide()
                    }
                })
            })
        }

        function r() {
            var e = $("form"), t = $.trim(e.find("input[name='title']").val()) || "",
                n = $.trim(e.find("input[name='cover']").val()) || "",
                a = $.trim(e.find("textarea[name='content']").val()) || "",
                i = $.trim(e.find(".category_list").val()) || "",
                r = $.trim(e.find("input[name='tags_main']").val()) || "", o = 0;
            if ("" == t || t.length > 35 ? ($(".title-tip").fadeIn(), o += 1) : $(".title-tip").hide(), "" == n ? ($(".cover-tip").fadeIn(), o += 1) : $(".cover-tip").hide(), "" == a ? ($(".content-tip").fadeIn(), o += 1) : $(".content-tip").hide(), "" == i || "" == r ? ($(".category-tip").fadeIn(), o += 1) : $(".category-tip").hide(), isEnableCaptcha) {
                var s = $("#geetest-captcha");
                s.data("valid", !1);
                var l = s.find(".geetest_challenge").val(), c = s.find(".geetest_validate").val(),
                    d = s.find(".geetest_seccode").val();
                l && c && d ? $(".captcha-tip").hide() : ($(".captcha-tip").fadeIn(), o += 1)
            }
            return 0 == o && (console.log("fire:ue:clearlocaldata"), editor.execCommand("clearlocaldata"), !0)
        }

        i(), t(), n(), $(".category_list").on("change", t), $("form").on("submit", r), $(".tag_list dl").delegate("dd", "click", a), $("input[name='title']").bind("keyup change", function () {
            var e = $(this).attr("maxlength"), t = $(this).val(), n = yiUtils.getStringLength(t);
            n > e ? $(".title-tip").show() : $(".title-tip").hide(), $("form .text-wp .counter").html(n + "/" + e)
        })
    })
}
if ("www/user/index" == pageName) {
    function switchTab() {
        var e = location.hash.replace("#", "");
        if ("" != e) {
            var t = $(".jg-nav li a[href='#" + e + "']");
            $(".jg-nav li").removeClass("selected"), t.parent().addClass("selected"), $(".jg-nav li").each(function () {
                $($(this).find("a").attr("href")).hide()
            }), $(t.attr("href")).show()
        }
    }

    $(function () {
        $(".jgceshi .head dd").click(function () {
            return $(".jgceshi .head dd").removeClass("selected"), $(this).addClass("selected"), $(".jgceshi .body").hide().eq($(this).index()).show(), $(".jgceshi .foot").hide().eq($(this).index()).show(), !1
        }), $.get(userPageStatusUrl, {user_id: userId}, function (e) {
            if (!(e.code < 0)) {
                var t = e.data;
                t.is_follow && ($("#btn-follow").addClass("selected"), $("#btn-follow").html("已关注")), t.kaizixunnum && $("#kaizixunnum").html(e.kaizixunnum), t.can_jin && $("#jin-btn-div").show()
            }
        }), switchTab(), $(window).on("hashchange", switchTab), $(document).on("click", ".article-del", function () {
            $this = $(this), id = $this.data("id"), confirm("确定删除该文章？") && $.ajax({
                url: articleDeleteUrl,
                type: "post",
                data: {article_id: id},
                success: function (e) {
                    0 == e.code ? ($(".article-li-" + id).hide(), $.dialogs.toast({
                        text: e.message,
                        mask: !1
                    })) : $.dialogs.toast({text: e.message, mask: !1})
                },
                error: function () {
                    $.dialogs.toast({text: "网络错误，请重试", mask: !1})
                }
            })
        }), $(".edit-btn").bind("click", function () {
            var e = $(this).data("field");
            $("." + e + "-edit").hide(), $("." + e + "-edit-field").show()
        }), $(".edit-form").bind("submit", function () {
            var e = $(this);
            if (e.data("loading"))return !1;
            var t = e.serialize(), n = e.serializeArray(), a = e.data("field");
            return $.ajax({
                url: updateUserProfileUrl, type: "post", data: t, success: function (e) {
                    0 == e.code ? ($("." + a + "-edit").show(), $("." + a + "-edit-field").hide(), $("." + a + "-edit").find("span.content").html(n[0].value)) : swal(e.message, "", "error")
                }, error: function () {
                    swal("网络错误，请重试", "", "error")
                }, complete: function () {
                    e.data("loading", !1)
                }
            }), !1
        }), $("#btn-message").on("click", function () {
            var e = $(this);
            return !e.data("loading") && (e.data("loading", !0), void $.ajax({
                    url: "/ajax/user-auth.json",
                    success: function (e) {
                        0 == e.code ? yiUikit.messageDialog() : 40001 == e.code ? yiUikit.loginDialog() : 20001 == e.code ? window.activePhone.show() : swal(e.message, "", "error")
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                }))
        }), $("#btn-follow").on("click", function () {
            console.log("event:click:follow");
            var e = $(this);
            return !e.data("loading") && void $.ajax({
                    url: toggleFollowUrl,
                    type: "post",
                    data: {user_id: userId || 0},
                    success: function (t) {
                        40001 == t.code ? yiUikit.loginDialog() : 0 == t.code && (t.data.is_follow ? e.html("已关注") : e.html("关注"))
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })
        }), $("#btn-support").on("click", function () {
            console.log("event:click:support");
            var e = $(this);
            return !e.data("loading") && void $.ajax({
                    url: kaiZixunUrl,
                    type: "post",
                    data: {user_id: userId || 0},
                    success: function (t) {
                        if (0 == t.code) {
                            if (e.data("clicked", !0), !e.data("clicked")) {
                                var n = parseInt($(".jg-ktzx big").html());
                                n++, $(".jg-ktzx big").html(n)
                            }
                            swal("已支持开通", "", "success")
                        }
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })
        }), $("#btn-xiang-zixun").on("click", function () {
            var e = $(this);
            if (e.data("loading"))return !1;
            var t = e.data("user-id");
            $.ajax({
                url: toggleXiangZixunUrl, type: "post", data: {user_id: t || 0}, success: function (e) {
                    0 == e.code && swal(e.message, "", "success")
                }, error: function () {
                    swal("网络错误，请重试", "", "error")
                }, complete: function () {
                    e.data("loading", !1)
                }
            })
        }), $("#more-article").on("click", function () {
            var e = $(this);
            if (e.data("loading"))return !1;
            var t = e.data("page") || 1;
            return t++, e.data("loading", !0), $.ajax({
                url: articleListUrl,
                data: {user_id: userId || 0, page: t},
                success: function (n) {
                    e.data("page", t);
                    var a = $(n);
                    $("#wz .body ul").append(a), 0 == a.length && e.hide()
                },
                error: function () {
                    swal("网络错误，请重试", "", "error")
                },
                complete: function () {
                    e.data("loading", !1)
                }
            }), !1
        }), $("#more-huodong").on("click", function () {
            var e = $(this);
            if (e.data("loading"))return !1;
            var t = e.data("page") || 1;
            return t++, e.data("loading", !0), $.ajax({
                url: huodongListUrl,
                data: {user_id: userId || 0, page: t},
                success: function (n) {
                    e.data("page", t);
                    var a = $(n);
                    $("#hd .body ul").append(a), 0 == a.length && e.hide()
                },
                error: function () {
                    swal("网络错误，请重试", "", "error")
                },
                complete: function () {
                    e.data("loading", !1)
                }
            }), !1
        }), $("#more-question").on("click", function () {
            var e = $(this);
            if (e.data("loading"))return !1;
            var t = e.data("page") || 1;
            return t++, e.data("loading", !0), $.ajax({
                url: questionListUrl,
                data: {user_id: userId || 0, page: t},
                success: function (n) {
                    e.data("page", t);
                    var a = $(n);
                    $("#tw .body ul").append(a), 0 == a.length && e.hide()
                },
                error: function () {
                    swal("网络错误，请重试", "", "error")
                },
                complete: function () {
                    e.data("loading", !1)
                }
            }), !1
        }), $("#more-answer").on("click", function () {
            var e = $(this);
            if (e.data("loading"))return !1;
            var t = e.data("page") || 1;
            return t++, e.data("loading", !0), $.ajax({
                url: answerListUrl,
                data: {user_id: userId || 0, page: t},
                success: function (n) {
                    e.data("page", t);
                    var a = $(n);
                    $("#hd2 .body ul").append(a), 0 == a.length && e.hide()
                },
                error: function () {
                    swal("网络错误，请重试", "", "error")
                },
                complete: function () {
                    e.data("loading", !1)
                }
            }), !1
        }), $(".more-favorite").on("click", function () {
            var e = $(this);
            if (e.data("loading"))return !1;
            var t = e.data("type"), n = e.data("page") || 1, a = e.data("type-class");
            return n++, e.data("loading", !0), $.ajax({
                url: favoriteListUrl,
                data: {user_id: userId || 0, page: n, type: t},
                success: function (t) {
                    e.data("page", n);
                    var i = $(t);
                    $("#sc ." + a).append(i), 0 == i.length && e.hide()
                },
                error: function () {
                    swal("网络错误，请重试", "", "error")
                },
                complete: function () {
                    e.data("loading", !1)
                }
            }), !1
        }), $("#more-yuyue").on("click", function () {
            var e = $(this);
            if (e.data("loading"))return !1;
            var t = e.data("page") || 1;
            return t++, e.data("loading", !0), $.ajax({
                url: yuyueListUrl,
                data: {user_id: userId || 0, page: t},
                success: function (n) {
                    e.data("page", t);
                    var a = $(n);
                    $("#zx table").append(a), 0 == a.length && e.hide()
                },
                error: function () {
                    swal("网络错误，请重试", "", "error")
                },
                complete: function () {
                    e.data("loading", !1)
                }
            }), !1
        }), $(".more-ceshi").on("click", function () {
            var e = $(this);
            if (e.data("loading"))return !1;
            var t = e.data("page") || 1;
            return t++, e.data("loading", !0), $.ajax({
                url: ceshiListUrl,
                data: {user_id: userId || 0, page: t, is_fufei: e.data("type")},
                success: function (n) {
                    e.data("page", t);
                    var a = $(n);
                    $("#ceshi .body ul").append(a), 0 == a.length && e.hide()
                },
                error: function () {
                    swal("网络错误，请重试", "", "error")
                },
                complete: function () {
                    e.data("loading", !1)
                }
            }), !1
        })
    })
}
if ("www/user/setting/info/avatar" == pageName && $(function () {
        yiPlugin.createFlashUploadEditor(".jinput-flashupload", "!200x200", "a"), $("#user-avatar-form").bind("submit", e);
        function e() {
            var e = $(this);
            return !e.data("loading") && (e.validate({
                    rules: {avatar: {required: !0}},
                    messages: {avatar: {required: "请上传头像"}},
                    errorElement: "div",
                    errorClass: "tip"
                }), e.valid() && (e.data("loading", !0), $.ajax({
                    url: updateUserProfileUrl,
                    type: "post",
                    data: e.serialize(),
                    success: function (e) {
                        0 == e.code ? swal(e.message, "", "success") : swal(e.message, "", "error")
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })), !1)
        }
    }), "www/user/setting/info/changeWithdraw" == pageName && $(function () {
        $("#change-withdraw-password-form").bind("submit", e);
        function e() {
            var e = $(this);
            if (e.data("loading"))return !1;
            var t = {
                alipay: e.find("input[name='alipay']").val(),
                alipay_name: e.find("input[name='alipay_name']").val(),
                alipay_idcard: e.find("input[name='alipay_idcard']").val(),
                password: e.find("input[name='password']").val()
            };
            return $(".tips").hide(), e.data("is-valid", !0), "" == t.alipay && (e.data("is-valid", !1), $(".alipay-tips").show()), "" == t.alipay_name && (e.data("is-valid", !1), $(".alipay-name-tips").show()), "" == t.alipay_idcard && (e.data("is-valid", !1), $(".alipay-idcard-tips").show()), "" == t.password && (e.data("is-valid", !1), $(".password-tips").show()), e.data("loading", !0), e.data("is-valid") && $.ajax({
                url: changeWithdrawUrl,
                type: "post",
                data: e.serialize(),
                success: function (t) {
                    0 == t.code ? swal(t.message, "", "success") : swal(t.message, "", "error"), e.data("loading", !1)
                },
                error: function () {
                    swal("网络错误，请重试", "", "error")
                }
            }), !1
        }
    }), "www/user/setting/info/daren" == pageName && $(function () {
        var e = $("#daren-form");
        e.bind("submit", a), $("#zizhi-other").bind("propertychange input", function () {
            $("#zizhi-other-radio").val($(this).val())
        }), $(".j_countword").bind("propertychange input", t).each(t), $(".j_validation").bind("propertychange input", n);
        function t() {
            var e = $.trim($(this).val());
            $(this).closest("li").find(".hints i").html(yiUtils.getStringLength(e))
        }

        function n() {
            var t = !0, n = {
                gender: e.find("input[name='gender']:checked").val() || "",
                zizhi: e.find("input[name='zizhi']").val() || "",
                cert_sn: e.find("input[name='cert_sn']").val() || "",
                price: e.find("select[name='price']").val() || "",
                experience: e.find("textarea[name='experience']").val(),
                service_time: e.find("textarea[name='service_time']").val()
            };
            return $(".tip").removeClass("warning"), "" == n.gender && (t = !1, $(".gender-tip").addClass("warning").show()), "" == n.zizhi && (t = !1, $(".zizhi-tip").addClass("warning").show()), "" == n.cert_sn && (t = !1, $(".cert-sn-tip").addClass("warning").show()), "" == n.price && (t = !1, $(".price-tip").addClass("warning")), ("" == n.experience || yiUtils.getStringLength(n.experience) > 300) && (t = !1, $(".experience-tip").addClass("warning")), ("" == n.service_time || yiUtils.getStringLength(n.service_time) > 100) && (t = !1, $(".service-time-tip").addClass("warning")), t
        }

        function a() {
            var e = $(this);
            return !e.data("loading") && (console.log(n(e)), n(e) ? (zhuge.track("开始提交倾听信息"), e.data("loading", !0), $.ajax({
                    url: updateDaRenProfileUrl,
                    type: "post",
                    data: e.serialize(),
                    success: function (e) {
                        0 == e.code ? (swal(e.message, "", "success"), zhuge.track("成功提交倾听信息")) : (swal(e.message, "", "error"), zhuge.track("失败提交倾听信息", {"信息": e.message}))
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error"), zhuge.track("错误提交倾听信息")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })) : zhuge.track("提交倾听信息表单错误"), !1)
        }
    }), "www/user/setting/info/doctor" == pageName && $(function () {
        var e = $("#doctor-form");
        "1" == show && (e.bind("submit", a), $("#doctor-form .wp input[type='checkbox'] + label").bind("click", t));
        function t() {
            var e = $(this).parent().find("input[type='checkbox']");
            e.data("category-id");
            e.prop("checked") ? e.prop("checked", !1) : e.prop("checked", !0);
            var t = $("#doctor-form .wp input[type='checkbox']:checked").size();
            if (t > 2)return swal("选择分类不能超过2个", "", "warning"), e.prop("checked", !1), !1
        }

        function n() {
            var t = !0, n = {categorys: e.find("input[name='categorys[]']:checked").val() || ""};
            return $(".tip").removeClass("warning"), "" == n.categorys && (t = !1, $(".category-tip").addClass("warning").text("*擅长领域最少选择一个").css("font-size", "14px").show()), t
        }

        function a() {
            var e = $(this);
            return !e.data("loading") && (n(e) ? (zhuge.track("开始提交百度医生申请信息"), e.data("loading", !0), $.ajax({
                    url: updateDoctorProfileUrl,
                    type: "post",
                    data: e.serialize(),
                    success: function (e) {
                        0 == e.code ? (swal(e.message, "", "success"), zhuge.track("成功提交百度医生申请信息"), window.location.reload()) : (swal(e.message, "", "error"), zhuge.track("失败提交百度医生申请信息", {"信息": e.message}))
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error"), zhuge.track("错误提交百度医生申请信息")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })) : zhuge.track("提交百度医生申请信息表单错误"), !1)
        }
    }), "www/user/setting/info" == pageName && $(function () {
        var e = null, t = null;
        $("select[name='province']").data("province").length > 0 && (e = $("select[name='province']").data("province")), $("select[name='city']").data("city").length > 0 && (t = $("select[name='city']").data("city")), new PCAS("province", "city", e, t);
        function n() {
            var e = $.trim($(this).val());
            $(this).closest("li").find(".hints i").html(yiUtils.getStringLength(e))
        }

        function a() {
            var e = $("#user-profile-form"), t = !0, n = {
                nickname: e.find("input[name='nickname']"),
                honor: e.find("input[name='honor']"),
                brief: e.find("[name='brief']")
            }, a = {nickname: {required: "请填写姓名"}, brief: {required: "请填写头衔"}};
            return $(".tip").removeClass("warning"), "" === n.nickname.val() ? (t = !1, $(".nickname-tip").addClass("warning").text(a.nickname.required)) : $(".nickname-tip").text(""), ("" === n.honor.val() || yiUtils.getStringLength(n.honor.val()) > 20) && (t = !1, $(".honor-tip").addClass("warning")), "" === n.brief.val() ? (t = !1, $(".brief-tip").addClass("warning").text(a.brief.required)) : $(".brief-tip").text(""), t
        }

        function i() {
            var e = $(this);
            return !e.data("loading") && (a() && (e.data("loading", !0), $.ajax({
                    url: updateUserProfileUrl,
                    type: "post",
                    data: e.serialize(),
                    success: function (e) {
                        0 == e.code ? swal(e.message, "", "success") : swal(e.message, "", "error")
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })), !1)
        }

        $("#user-profile-form").bind("submit", i), $(".j_countword").bind("propertychange input", n).each(n), $(".j_validation").bind("propertychange input", a)
    }), "www/user/setting/info/loginPwd" == pageName && $(function () {
        function e() {
            var e = $(this);
            if (e.data("loading"))return !1;
            e.validate({
                rules: {
                    old_password: {required: !0},
                    password: {required: !0},
                    password_confirmation: {required: !0, equalTo: "#password"}
                },
                messages: {
                    old_password: {required: "原始密码不能为空"},
                    password: {required: "新密码不能为空"},
                    password_confirmation: {required: "请填写确认新密码", equalTo: "两次密码不一致"}
                },
                errorElement: "h5",
                errorClass: "err"
            });
            var t = $("#user-password-form input[name=password_confirmation]"),
                n = $("#user-password-form input[name=password_confirmation]").siblings(".err");
            return n.text(""), e.valid() && (e.data("loading", !0), $.ajax({
                url: updateUserPasswordUrl,
                type: "post",
                data: e.serialize(),
                success: function (e) {
                    return 0 != e.code ? (n.length > 0 ? n.text(e.message) : $("<h5></h5>").addClass("err").text(e.message).appendTo(t.parent()), !1) : void $.dialogs.toast({
                        text: "修改成功",
                        mask: !1
                    })
                },
                error: function () {
                    $.dialogs.toast({text: "网络错误，请重试", mask: !1})
                },
                complete: function () {
                    e.data("loading", !1)
                }
            })), !1
        }

        $("#user-password-form").bind("submit", e)
    }), "www/user/setting/info/member" == pageName && $(function () {
        function e() {
            var e = $(this), t = {url: $("#member-url").val() || ""};
            return !e.data("loading") && void $.ajax({
                    url: addJigouMemberUrl,
                    type: "post",
                    data: t,
                    success: function (e) {
                        0 == e.code ? (swal(e.message, "", "success"), $(".jgcy-list").append(e.data.template)) : swal(e.message, "", "error")
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })
        }

        function t() {
            var e = $(this), t = {user_id: e.data("user-id") || 0};
            return !e.data("loading") && void $.ajax({
                    url: removeJigouMemberUrl,
                    type: "post",
                    data: t,
                    success: function (t) {
                        0 == t.code ? (swal(t.message, "", "success"), e.closest("dd").remove()) : swal(t.message, "", "error")
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })
        }

        $("#btn-add-member").bind("click", e), $(".jgcy-list").delegate(".btn-remove-member", "click", t)
    }), "www/user/setting/info/phone" == pageName) {
    var second = 0, handler;
    $(function () {
        $("#edit-btn").click(function () {
            return $(".edit-panel").show(), $(".show-panel").hide(), !1
        }), $("#cancel-edit-btn").on("click", function () {
            return $(".edit-panel").hide(), $(".show-panel").show(), !1
        }), $("#finish-edit-btn").click(function () {
            var e = $("#user-mobile-form"), t = e.find(".edit-panel input[name='phone']").val(),
                n = e.find(".edit-panel input[name='oldphone']").val(),
                a = e.find(".edit-panel input[name='validcode']").val(),
                i = e.find(".edit-panel input[name='oldphone']").length > 0;
            console.log(i), e.validate({
                rules: {
                    oldphone: {required: i},
                    phone: {required: !0},
                    validcode: {required: !0}
                },
                messages: {
                    oldphone: {required: "手机号不能为空"},
                    phone: {required: "手机号不能为空"},
                    validcode: {required: "验证码不能为空"}
                },
                errorElement: "h5",
                errorClass: "err"
            }), $_oldphone = $("#phone").data("phone"), $oldphone = $("#user-mobile-form input[name=oldphone]").val();
            var r = $("#user-mobile-form input[name=oldphone]"),
                o = $("#user-mobile-form input[name=oldphone]").siblings(".err");
            return "" != $_oldphone && $_oldphone != $oldphone ? (o.length > 0 ? (o.text("原手机号有误"), o.show()) : $("<h5></h5>").addClass("err").text("原手机号有误").appendTo(r.parent()), !1) : (o.hide(), e.valid() && $.ajax({
                url: updateUserBindingPhone,
                type: "post",
                data: {phone: t, oldphone: n, validcode: a},
                success: function (e) {
                    if (0 != e.code) {
                        var t = $("#user-mobile-form input[name=validcode]"),
                            n = $("#user-mobile-form input[name=validcode]").siblings(".err");
                        return n.length > 0 ? (n.text(e.message), n.show()) : $("<h5></h5>").addClass("err").text(e.message).appendTo(t.parent()), !1
                    }
                    $.dialogs.toast({text: e.message, mask: !1}), setTimeout(function () {
                        location.reload()
                    }, 1e3)
                }
            }), !1)
        });
        function e() {
            var e = ($(this), $("#user-mobile-form")), t = /^1[0-9]{10}$/;
            if (second > 0)return !1;
            var n = e.find('.edit-panel input[name="phone"]').val(), a = $("#user-mobile-form input[name=phone]"),
                i = $("#user-mobile-form input[name=phone]").siblings(".err");
            if ("" == n)return i.length > 0 ? i.text("手机号不能为空") : $("<h5></h5>").addClass("err").text("手机号不能为空").appendTo(a.parent()), !1;
            if (i.hide(), !t.test(n))return i.length > 0 ? i.text("手机号格式有误") : $("<h5></h5>").addClass("err").text("手机号格式有误").appendTo(a.parent()), !1;
            i.hide(), $_oldphone = $("#phone").data("phone"), $oldphone = $("#user-mobile-form input[name=oldphone]").val();
            var r = $("#user-mobile-form input[name=oldphone]"),
                o = $("#user-mobile-form input[name=oldphone]").siblings(".err");
            if ("" != $_oldphone && $_oldphone != $oldphone)return o.length > 0 ? (o.text("原手机号有误"), o.show()) : $("<h5></h5>").addClass("err").text("原手机号有误").appendTo(r.parent()), !1;
            o.hide();
            var s = {phone: n, t: $.now()};
            $.ajax({
                url: getUpdatePhoneValidCode, data: s, type: "post", success: function (e) {
                    0 == e.code ? (second = 60, handler = setInterval(l, 1e3), $("#send-validcode").addClass("disabled"), $.dialogs.toast({
                        text: "验证码发送成功",
                        mask: !1
                    })) : i.length > 0 ? (i.text(e.message), i.show()) : $("<h5></h5>").addClass("err").text(e.message).appendTo(a.parent())
                }
            });
            function l() {
                second--;
                var e = $("#send-validcode");
                second > 0 ? e.html("已发送(" + second + ")") : (e.html("发送验证码"), clearInterval(handler), $("#send-validcode").removeClass("disabled"))
            }

            return !1
        }

        $("#send-validcode").bind("click", e)
    })
}
if ("www/user/setting/info/qingting" == pageName && $(function () {
        var e = $("#qingting-form");
        e.bind("submit", a), e.find(".wp input[type='checkbox'] + label").bind("click", i), $("#zizhi-other").bind("propertychange input", function () {
            $("#zizhi-other-radio").val($(this).val())
        }), $(".j_countword").bind("propertychange input", t).each(t), $(".j_validation").bind("propertychange input", n), r();
        function t() {
            var e = $.trim($(this).val());
            $(this).closest("li").find(".hints i").html(yiUtils.getStringLength(e))
        }

        function n() {
            var t = !0, n = {
                zizhi: e.find("input[name='zizhi']").val(),
                categorys: e.find("input[name='categorys']").val(),
                qianming: e.find("input[name='qianming']").val(),
                content: e.find("textarea[name='content']").val()
            };
            return $(".tip").removeClass("warning"), "" == n.zizhi && (t = !1, $(".zizhi-tip").addClass("warning")), "" == n.categorys && (t = !1, $(".categorys-tip").addClass("warning")), ("" == n.qianming || yiUtils.getStringLength(n.qianming) > 25) && (t = !1, $(".qianming-tip").addClass("warning")), ("" == n.content || yiUtils.getStringLength(n.content) > 300) && (t = !1, $(".content-tip").addClass("warning")), t
        }

        function a() {
            var e = $(this);
            return !e.data("loading") && (n(e) ? (zhuge.track("开始提交倾听信息"), e.data("loading", !0), $.ajax({
                    url: updateQingTingProfileUrl,
                    type: "post",
                    data: e.serialize(),
                    success: function (e) {
                        0 == e.code ? (swal(e.message, "", "success"), zhuge.track("成功提交倾听信息")) : (swal(e.message, "", "error"), zhuge.track("失败提交倾听信息", {"信息": e.message}))
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error"), zhuge.track("错误提交倾听信息")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })) : zhuge.track("提交倾听信息表单错误"), !1)
        }

        function i() {
            var t = $(this).parent().find("input[type='checkbox']");
            t.prop("checked") ? t.prop("checked", !1) : t.prop("checked", !0);
            var n = e.find(".categorys .wp input[type='checkbox']:checked").size();
            return n > 4 ? (swal("选择分类不能超过4个", "", "warning"), t.prop("checked", !1), !1) : void r()
        }

        function r() {
            var t = e.find(".categorys .wp input[type='checkbox']:checked").size();
            t > 0 ? $(".zclx").show() : $(".zclx").hide();
            var n = [];
            e.find(".categorys .wp input[type='checkbox']").each(function () {
                var e = $(this).data("category-id") || 0;
                $(this).prop("checked") && n.push(e)
            }), e.find("input[name='categorys']").val(n.join(","))
        }
    }), window.ImageEditor = {}, "www/user/setting/info/teacher" == pageName && $(function () {
        var e = [];
        yiPlugin.createFlashUploadEditor(".jinput-flashupload", "!720x405", "b");
        function t() {
            var e = parseFloat($(this).val());
            e <= 0 ? $(this).val("") : (isNaN(e) && (e = ""), $(this).val(e))
        }

        function n() {
            var e = $(this).parent().find("input[type='checkbox']");
            e.data("category-id");
            e.prop("checked") ? e.prop("checked", !1) : e.prop("checked", !0);
            var t = $("#teacher-profile-form .wp input[type='checkbox']:checked").size();
            return t > 3 ? (swal("选择分类不能超过3个", "", "warning"), e.prop("checked", !1), !1) : void a()
        }

        function a() {
            var t = [], n = $("#teacher-profile-form .wp input[type='checkbox']:checked").size();
            n > 0 ? $(".zclx").show() : $(".zclx").hide();
            var a = [];
            $("#teacher-profile-form .wp input[type='checkbox']").each(function () {
                var n = $(this).data("category-id") || 0, i = $(this).data("category-name") || 0,
                    r = categoryTagList[n] || [];
                if ("undefined" == typeof e[n] && (e[n] = []), $(this).prop("checked")) {
                    if (n) {
                        t.push("<dl>"), t.push("<dt>" + i + "</dt>");
                        for (var o = 0; o < r.length; o++) {
                            var s = e[n] || [], l = teacher.tags || "", c = l.split(","), d = "";
                            $.inArray(r[o], s) == -1 && $.inArray(r[o], c) == -1 || (d = 'class="selected"', $.inArray(r[o], e[n]) == -1 && e[n].push(r[o])), t.push("<dd><a " + d + ' data-category-id="' + n + '" data-tag-name="' + r[o] + '" href="javascript:;">' + r[o] + "</a></dd>")
                        }
                        t.push("</dl>"), a.push(n)
                    }
                } else e[n] = []
            }), $("#teacher-profile-form .zclx .inner").html(t.join("")), $("#teacher-profile-form input[name='zhuanchangs']").val(a.join(",")), r()
        }

        function i() {
            var t = $(this), n = t.data("tag-name"), a = t.data("category-id"), i = $.inArray(n, e[a]);
            t.hasClass("selected") ? (t.removeClass("selected"), e[a].splice(i, 1)) : (t.addClass("selected"), e[a].push(n));
            var o = $("#teacher-profile-form a[data-category-id='" + a + "'].selected").size();
            o > 5 && (swal("每个分类标签不能超过5个", "", "warning"), t.removeClass("selected"), e[a].splice(i, 1)), r()
        }

        function r() {
            var t = [];
            for (var n in e)for (var a in e[n])t.push(e[n][a]);
            var i = t.join(",");
            $("#teacher-profile-form input[name='tags']").val(i)
        }

        function o() {
            var e = $.trim($(this).val());
            $(this).closest("li").find(".hints i").html(yiUtils.getStringLength(e))
        }

        function s() {
            var e = $("#teacher-profile-form"), t = !0;
            errorposition = "";
            var n = {
                cover: e.find("input[name='cover']").val(),
                zhuanchangs: e.find("input[name='zhuanchangs']").val(),
                yuyinjiage: e.find("input[name='yuyinjiage']").val(),
                shipinjiage: e.find("input[name='shipinjiage']").val(),
                mianjiage: e.find("input[name='mianjiage']").val(),
                summary: $.trim(e.find("input[name='summary']").val()),
                profess_qualify: $.trim(e.find("input[name='profess_qualify']").val()),
                good_at_field: $.trim(e.find("textarea[name='good_at_field']").val()),
                consult_qualify: $.trim(e.find("textarea[name='consult_qualify']").val()),
                consult_experience: $.trim(e.find("textarea[name='consult_experience']").val()),
                consult_way: $.trim(e.find("textarea[name='consult_way']").val()),
                career_experience: $.trim(e.find("textarea[name='career_experience']").val()),
                books: $.trim(e.find("textarea[name='books']").val()),
                others: $.trim(e.find("textarea[name='others']").val())
            };
            $(".tip").removeClass("warning"), "" == n.cover && (t = !1, errorposition = "avatar", $(".img-tip").addClass("warning")), "" == n.zhuanchangs && (t = !1, errorposition = "zhuanchangs", $(".category-tip").addClass("warning"));
            var a = 0;
            return (n.yuyinjiage === -1 || "" != n.yuyinjiage && n.yuyinjiage > 0) && a++, (n.shipinjiage === -1 || "" != n.shipinjiage && n.shipinjiage > 0) && a++, (n.mianjiage === -1 || "" != n.mianjiage && n.mianjiage > 0) && a++, a < 1 && (t = !1, errorposition = "zixunprice", $(".price-tip").addClass("warning")), ("" == n.summary || yiUtils.getStringLength(n.summary) > 35) && (t = !1, errorposition = "oneworld", $(".summary-tip").addClass("warning")), ("" == n.profess_qualify || yiUtils.getStringLength(n.profess_qualify) > 20) && (t = !1, errorposition = "zhuanyequa", $(".profess-qualify-tip").addClass("warning")), ("" == n.good_at_field || yiUtils.getStringLength(n.good_at_field) < 30 || yiUtils.getStringLength(n.good_at_field) > 2e3) && (t = !1, errorposition = "goodfield", $(".good-at-field-tip").addClass("warning")), ("" == n.consult_qualify || yiUtils.getStringLength(n.consult_qualify) < 30 || yiUtils.getStringLength(n.consult_qualify) > 2e3) && (t = !1, errorposition = "eduqua", $(".consult-qualify-tip").addClass("warning")), ("" == n.consult_experience || yiUtils.getStringLength(n.consult_experience) < 30 || yiUtils.getStringLength(n.consult_experience) > 2e3) && (t = !1, errorposition = "zixunexp", $(".consult-experience-tip").addClass("warning")), ("" == n.consult_way || yiUtils.getStringLength(n.consult_way) < 30 || yiUtils.getStringLength(n.consult_way) > 2e3) && (t = !1, errorposition = "zixunway",
                $(".consult-way-tip").addClass("warning")), yiUtils.getStringLength(n.career_experience) > 2e3 && (t = !1, errorposition = "personexp", $(".career-experience-tip").addClass("warning")), yiUtils.getStringLength(n.books) > 2e3 && (t = !1, errorposition = "artibook", $(".books-tip").addClass("warning")), yiUtils.getStringLength(n.others) > 2e3 && (t = !1, errorposition = "buchong", $(".others-tip").addClass("warning")), t
        }

        function l() {
            var e = $(this);
            return !e.data("loading") && (s(), errorposition && $("html,body").animate({scrollTop: $("#" + errorposition).offset().top}, 1e3), s(e) ? (zhuge.track("开始提交专业信息"), e.data("loading", !0), $.ajax({
                    url: updateTeacherProfileUrl,
                    type: "post",
                    data: e.serialize(),
                    success: function (e) {
                        0 == e.code ? (swal(e.message, "", "success"), zhuge.track("成功提交专业信息")) : (swal(e.message, "", "error"), zhuge.track("失败提交专业信息", {"信息": e.message}))
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error"), zhuge.track("错误提交专业信息")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })) : zhuge.track("提交专业信息表单错误"), !1)
        }

        $("#teacher-profile-form input[name='yuyinjiage'],#teacher-profile-form input[name='shipinjiage'],#teacher-profile-form input[name='mianjiage']").bind("blur", t).each(t), $("#teacher-profile-form").bind("submit", l), $("#teacher-profile-form .wp input[type='checkbox']").bind("change", a).trigger("change"), $("#teacher-profile-form .wp input[type='checkbox'] + label").bind("click", n), $("#teacher-profile-form .zclx").delegate("a", "click", i), $(".j_countword").bind("propertychange input", o).each(o), $(".j_validation").bind("propertychange input", s)
    }), "www/user/setting/info/topic" == pageName && $(function () {
        function e() {
            var e = $.trim($(this).val());
            $(this).closest("dd").find(".hints i").html(yiUtils.getStringLength(e))
        }

        function t() {
            var e = $(this).closest("li");
            e.hasClass("selected") ? e.removeClass("selected").find(".tags_id").attr("disabled", !0) : e.addClass("selected").find(".tags_id").removeAttr("disabled");
            var t = $(".classify li.selected").size();
            if (t > 3)return swal("标签不能大于3个", "", "warning"), e.removeClass("selected"), !1;
            var n = [];
            $(".classify li.selected").each(function () {
                n.push($(this).find("a").html())
            }), $("#edit-topic-form input[name='tags']").val(n.join(","))
        }

        function n() {
            var e = $(this).val(), t = $(this).html(), n = newTagsList[e] || [];
            console.log(newTagsList);
            var a = [];
            for (var i in n) {
                var r = n[i], o = r == t ? "selected" : "";
                a.push("<li class='" + o + "'><a href='javascript:;'>" + r.name + "</a><input type='hidden' class='tags_id' name='tag_id[]' value='" + r.custome_tag_id + "' disabled></li>")
            }
            $(".classify ul").html(a.join(""))
        }

        function a() {
            var e = $(this).data("id"), t = $(this).data("status"), n = 1 == t ? "申请删除话题" : "确认删除该话题";
            $.dialog.confirm({content: n}, function (t) {
                $.ajax({
                    url: removeTeacherTopicUrl, type: "post", data: {id: e}, success: function (e) {
                        0 == e.code ? (setTimeout(function () {
                            location.reload()
                        }, 1e3), swal("话题已提交审核，将在7个工作日内完成审核", "", "success")) : swal(e.message, "", "warning")
                    }
                })
            })
        }

        function i() {
            var e = $(this).data("id");
            $(window).scrollTop($(".topics .uc-curr").offset().top), $.ajax({
                url: getTeacherTopicUrl,
                data: {id: e},
                success: function (t) {
                    if (0 == t.code) {
                        var n = $("#edit-topic-form");
                        n.find("input[name='id']").val(e), n.find("input[name='title']").val(t.data.title).prop("disabled", !1), n.find("textarea[name='brief']").val(t.data.brief).prop("disabled", !1), n.find("textarea[name='description']").val(t.data.description).prop("disabled", !1), n.find("input[name='tags']").val(t.data.tags), n.find("select[name='category_id'] option").each(function () {
                            var e = t.data.category_id;
                            $(this).val() === e && $(this).prop("selected", !0)
                        }), n.find("select[name='category_id']").trigger("change").prop("disabled", !1), n.find("input[type='submit']").prop("disabled", !1), n.find(".classify li").each(function () {
                            var e = t.data.tags || "", n = $(this).find("a").html();
                            e.indexOf(n) !== -1 && $(this).addClass("selected")
                        })
                    }
                }
            })
        }

        function r() {
            var e = $("#edit-topic-form"), t = !0, n = {
                title: e.find("input[name='title']").val(),
                brief: e.find("textarea[name='brief']").val(),
                description: e.find("textarea[name='description']").val(),
                category_id: e.find("select[name='category_id']").val(),
                tags: e.find("input[name='tags']").val()
            };
            return $(".title-tip,.brief-tip,.desc-tip,.category-tip,.tag-tip").addClass("f-tip"), ("" == n.title || yiUtils.getStringLength(n.title) > 25) && (t = !1, $(".title-tip").removeClass("f-tip")), ("" == n.brief || yiUtils.getStringLength(n.brief) < 50 || yiUtils.getStringLength(n.brief) > 1e3) && (t = !1, $(".brief-tip").removeClass("f-tip")), ("" == n.description || yiUtils.getStringLength(n.description) < 50 || yiUtils.getStringLength(n.description) > 1e3) && (t = !1, $(".desc-tip").removeClass("f-tip")), "" != n.category_id && "" != n.tags || (t = !1, $(".category-tip").removeClass("f-tip")), t
        }

        function o() {
            var e = $(this);
            return !e.data("loading") && (r(e) && (e.data("loading", !0), $.ajax({
                    url: updateTeacherTopicUrl,
                    type: "post",
                    data: e.serialize(),
                    success: function (e) {
                        0 == e.code && setTimeout(function () {
                            location.reload()
                        }, 1e3), swal(e.message, "", "success")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })), !1)
        }

        $(".btn-edit").bind("click", i), $(".btn-delete").bind("click", a), $("#edit-topic-form").bind("submit", o), $("select[name='category_id']").bind("change", n), $(".classify").delegate("a", "click", t), $(".j_countword").bind("propertychange input", e).each(e), $(".j_validation").bind("propertychange input", r)
    }), "www/user/setting/info/withdrawPwd" == pageName && $(function () {
        function e() {
            var e = $(this);
            return !e.data("loading") && (e.validate({
                    rules: {password: {required: !0}, validcode: {required: !0}},
                    messages: {password: {required: "请填写提现密码"}, validcode: {required: "请填写短信验证码"}},
                    errorElement: "div",
                    errorClass: "tips err"
                }), e.data("loading", !0), e.valid() && $.ajax({
                    url: processWithdrawPasswordUrl,
                    type: "post",
                    data: e.serialize(),
                    success: function (t) {
                        0 == t.code ? swal(t.message, "", "success") : swal(t.message, "", "error"), e.data("loading", !1)
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    }
                }), !1)
        }

        var t, n = 120;

        function a() {
            n--;
            var e = $(".btn-gtcode");
            n > 0 ? e.html(n + "秒重新获取") : (e.html("发送验证码"), e.prop("loading", !1), clearInterval(t))
        }

        function i() {
            var e = $(this);
            if (e.data("loading"))return !1;
            var n = e.data("phone") || "";
            if ("" == n)return $.dialog.tips("手机号不能为空"), !1;
            var i = /^1[0-9]{10}$/;
            return i.test(n) === !1 ? ($.dialog.tips("手机号格式不正确"), !1) : (t = setInterval(a, 1e3), e.data("loading", !0), void $.ajax({
                url: sendWithdrawValidCode,
                type: "post",
                data: {phone: n},
                success: function (t) {
                    0 == t.code ? swal(t.message, "", "success") : swal(t.message, "", "error"), e.data("loading", !1)
                },
                error: function () {
                    swal("网络错误，请重试", "", "error")
                }
            }))
        }

        function r() {
            var e = $(this);
            return !e.data("loading") && (e.validate({
                    rules: {
                        alipay: {required: !0},
                        alipay_name: {required: !0},
                        alipay_idcard: {required: !0},
                        password: {required: !0, rangelength: [6, 16]},
                        password_confirmation: {required: !0, rangelength: [6, 16], equalTo: "#password"}
                    },
                    messages: {
                        alipay: {required: "请填写支付宝账号"},
                        alipay_name: {required: "请输入本人身份证姓名"},
                        alipay_idcard: {required: "请输入本人身份证号码"},
                        password: {required: "请填写提现密码", rangelength: "提现密码长度为6-16位"},
                        password_confirmation: {required: "请填写确定提现密码", rangelength: "提现密码长度为6-16位", equalTo: "提现密码不匹配"}
                    },
                    errorElement: "div",
                    errorClass: "tips err"
                }), e.valid() && (e.data("loading", !0), $.ajax({
                    url: initWithdrawPasswordUrl,
                    type: "post",
                    data: e.serialize(),
                    success: function (e) {
                        0 == e.code ? (setTimeout(function () {
                            location.reload()
                        }, 1e3), swal(e.message, "", "success")) : swal(e.message, "", "error")
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })), !1)
        }

        $("#init-withdraw-password-form").bind("submit", r), $("#proccess-withdraw-password-form").bind("submit", e), $(".btn-gtcode").bind("click", i)
    }), window.ImageEditor = {}, "www/user/setting/info/yida" == pageName && $(function () {
        var e = [];

        function t() {
            var e = $(this).parent().find("input[type='checkbox']");
            e.data("category-id");
            e.prop("checked") ? e.prop("checked", !1) : e.prop("checked", !0);
            var t = $("#teacher-profile-form .wp input[type='checkbox']:checked").size();
            return t > 3 ? (swal("选择分类不能超过3个", "", "warning"), e.prop("checked", !1), !1) : void n()
        }

        function n() {
            var t = [], n = $("#teacher-profile-form .wp input[type='checkbox']:checked").size();
            n > 0 ? $(".zclx").show() : $(".zclx").hide();
            var a = [];
            $("#teacher-profile-form .wp input[type='checkbox']").each(function () {
                var n = $(this).data("category-id") || 0, i = $(this).data("category-name") || 0,
                    r = categoryTagList[n] || [];
                if ("undefined" == typeof e[n] && (e[n] = []), $(this).prop("checked")) {
                    if (n) {
                        t.push("<dl>"), t.push("<dt>" + i + "</dt><br>");
                        for (var o = 0; o < r.length; o++) {
                            var s = (e[n] || [], "");
                            for (var l in e[n])r[o].id == e[n][l] && (s = " class='selected' ");
                            for (var l in Tags)r[o].id == Tags[l].tag_id && (s = " class='selected' "), Tags[l].tag_parent_id == n && (e[n][l] = Tags[l].tag_id);
                            t.push("<dd><a " + s + ' data-category-id="' + n + '" data-tag-id="' + r[o].id + '" data-tag-name="' + r[o].name + '" href="javascript:;">' + r[o].name + "</a></dd>")
                        }
                        t.push("</dl>"), a.push(n)
                    }
                } else e[n] = [], Tags[n] = []
            }), $("#teacher-profile-form .zclx .inner").html(t.join("")), i()
        }

        function a() {
            var t = $(this), n = (t.data("tag-name"), t.data("category-id")), a = t.data("tag-id"),
                r = $.inArray(a, e[n]);
            t.hasClass("selected") ? (t.removeClass("selected"), e[n].splice(r, 1)) : (t.addClass("selected"), e[n].push(a));
            var o = $("#teacher-profile-form a[data-category-id='" + n + "'].selected").size();
            o > 3 && (swal("每个分类标签不能超过3个", "", "warning"), t.removeClass("selected"), e[n].splice(r, 1)), i()
        }

        function i() {
            var t = [];
            for (var n in e)for (var a in e[n])t.push(n + ":" + e[n][a]);
            var i = t.join(",");
            $("#teacher-profile-form input[name='tags']").val(i)
        }

        $(".j_countword").bind("propertychange input", r).each(r), $("#teacher-profile-form .wp input[type='checkbox']").bind("change", n).trigger("change"), $("#teacher-profile-form .wp input[type='checkbox'] + label").bind("click", t), $("#teacher-profile-form .zclx").delegate("a", "click", a);
        function r() {
            var e = $.trim($(this).val()), t = $(this).attr("data-max");
            inputlength = yiUtils.getStringLength(e), inputlength <= t && $(this).closest("li").find(".hints i").css("color", "black"), $(this).closest("li").find(".hints i").html(yiUtils.getStringLength(e)), inputlength > t && $(this).closest("li").find(".hints i").css("color", "red")
        }
    }), "www/user/setting/info/zuojia" == pageName && $(function () {
        var e = $("#zuojia-form");
        "1" == show && e.bind("submit", n), "1" != status && "2" != status || (e.find("input").attr("readonly", !0), e.find('input[type="radio"],input[type="checkbox"]').attr("disabled", !0));
        function t() {
            var t = !0, n = {
                gzh_name: e.find("input[name='gzh_name']").val() || "",
                gzh_id: e.find("input[name='gzh_id']").val() || "",
                gzh_id_article_link: e.find("input[name='gzh_id_article_link']").val() || "",
                gzh_type: e.find("input[name='gzh_type']:checked").val() || "",
                album: e.find("input[name='album']:checked").val() || "",
                read: e.find("input[name='read']:checked").val() || "",
                contact_name: e.find("input[name='contact_name']").val() || "",
                contact_phone: e.find("input[name='contact_phone']").val() || "",
                contact_email: e.find("input[name='contact_email']").val() || "",
                is_agree: e.find("input[name='is_agree']").val() || ""
            }, a = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/, i = /^1[0-9]{10}$/;
            return $(".tip").removeClass("warning").hide(), "" == n.gzh_name && (t = !1, $(".gzh_name-tip").addClass("warning").text("*请输入公众号名称").css("font-size", "14px").show()), "" == n.gzh_id && (t = !1, $(".gzh_id-tip").addClass("warning").text("*请输入微信号ID").css("font-size", "14px").show()), "" == n.gzh_id_article_link && (t = !1, $(".gzh_id_article_link-tip").addClass("warning").text("*请输入经典公众号文章链接").css("font-size", "14px").show()), "" == n.gzh_type && (t = !1, $(".gzh_type-tip").addClass("warning").text("*请选择类型").css("font-size", "14px").show()), "" == n.album && (t = !1, $(".album-tip").addClass("warning").text("*请选择订阅用户量").css("font-size", "14px").show()), "" == n.read && (t = !1, $(".read-tip").addClass("warning").text("*请选择文章平均阅读量").css("font-size", "14px").show()), "" == n.contact_name && (t = !1, $(".contact_name-tip").addClass("warning").text("*请输入联系人姓名").css("font-size", "14px").show()), "" == n.contact_phone && (t = !1, $(".contact_phone-tip").addClass("warning").text("*请输入联系人电话").css("font-size", "14px").show()), i.test(n.contact_phone) || (t = !1, $(".contact_phone-tip").addClass("warning").text("*手机号码错误").css("font-size", "14px").show()), "" == n.contact_email && (t = !1, $(".contact_email-tip").addClass("warning").text("*请输入联系人邮箱").css("font-size", "14px").show()), a.test(n.contact_email) || (t = !1, $(".contact_email-tip").addClass("warning").text("*邮箱格式错误").css("font-size", "14px").show()), "" == n.is_agree && (t = !1, $(".is_agree-tip").addClass("warning").text("*请勾选同意专栏作者入驻协议").css("font-size", "14px").show()), t
        }

        function n() {
            var e = $(this);
            return !e.data("loading") && (t(e) ? (zhuge.track("开始提交专栏作者申请信息"), e.data("loading", !0), $.ajax({
                    url: updateZuojiaAppleUrl,
                    type: "post",
                    data: e.serialize(),
                    success: function (e) {
                        0 == e.code ? (swal(e.message, "", "success"), zhuge.track("成功提交专栏作者申请信息"), window.location.reload()) : (swal(e.message, "", "error"), zhuge.track("失败提交专栏作者申请信息", {"信息": e.message}))
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error"), zhuge.track("错误提交专栏作者申请信息")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })) : zhuge.track("提交专栏作者申请信息表单错误"), !1)
        }
    }), "www/user/setting" == pageName) {
    var selectedTags = [];
    $(function () {
        var e = null, t = null;
        $("select[name='province']").data("province").length > 0 && (e = $("select[name='province']").data("province")), $("select[name='city']").data("city").length > 0 && (t = $("select[name='city']").data("city")), new PCAS("province", "city", e, t), l(), $("#user-profile-form").bind("submit", n), $("#user-avatar-form").bind("submit", a), $("#user-password-form").bind("submit", i), $("#btn-add-member").bind("click", o), $(".jgcy-list").delegate(".btn-remove-member", "click", s), $("#teacher-profile-form").bind("submit", r), $("#teacher-profile-form .wp input[type='checkbox']").bind("change", d), $("#teacher-profile-form .wp input[type='checkbox'] + label").bind("click", c), $("#teacher-profile-form .zclx").delegate("a", "click", u), d();
        function n() {
            var e = $(this);
            return !e.data("loading") && (e.validate({
                    rules: {nickname: {required: !0}, introduce: {required: !0}},
                    messages: {nickname: {required: "请填写姓名"}, introduce: {required: "请填写头衔"}},
                    errorElement: "div",
                    errorClass: "tip"
                }), e.valid() && (e.data("loading", !0), $.ajax({
                    url: updateUserProfileUrl,
                    type: "post",
                    data: e.serialize(),
                    success: function (e) {
                        0 == e.code ? swal(e.message, "", "success") : swal(e.message, "", "error")
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })), !1)
        }

        function a() {
            var e = $(this);
            return !e.data("loading") && (e.validate({
                    rules: {avatar: {required: !0}},
                    messages: {avatar: {required: "请上传头像"}},
                    errorElement: "div",
                    errorClass: "tip"
                }), e.valid() && (e.data("loading", !0), $.ajax({
                    url: updateUserProfileUrl,
                    type: "post",
                    data: e.serialize(),
                    success: function (e) {
                        0 == e.code ? swal(e.message, "", "success") : swal(e.message, "", "error")
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })), !1)
        }

        function i() {
            var e = $(this);
            return !e.data("loading") && (e.validate({
                    rules: {
                        old_password: {required: !0},
                        password: {required: !0},
                        password_confirmation: {required: !0, equalTo: "#password"}
                    },
                    messages: {
                        old_password: {required: "请填写旧密码"},
                        password: {required: "请填写新密码"},
                        password_confirmation: {required: "请填写确定新密码", equalTo: "确认密码不匹配"}
                    },
                    errorElement: "div",
                    errorClass: "tip"
                }), e.valid() && (e.data("loading", !0), $.ajax({
                    url: updateUserPasswordUrl,
                    type: "post",
                    data: e.serialize(),
                    success: function (e) {
                        0 == e.code ? swal(e.message, "", "success") : swal(e.message, "", "error")
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })), !1)
        }

        function r() {
            var e = $(this);
            return !e.data("loading") && (e.data("loading", !0), $.ajax({
                    url: updateTeacherProfileUrl,
                    type: "post",
                    data: e.serialize(),
                    success: function (e) {
                        0 == e.code ? swal(e.message, "", "success") : swal(e.message, "", "error")
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                }), !1)
        }

        function o() {
            var e = $(this), t = {url: $("#member-url").val() || ""};
            return !e.data("loading") && void $.ajax({
                    url: addJigouMemberUrl,
                    type: "post",
                    data: t,
                    success: function (e) {
                        0 == e.code ? (swal(e.message, "", "success"), $(".jgcy-list").append(e.data.template)) : swal(e.message, "", "error")
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })
        }

        function s() {
            var e = $(this), t = {user_id: e.data("user-id") || 0};
            return !e.data("loading") && void $.ajax({
                    url: removeJigouMemberUrl,
                    type: "post",
                    data: t,
                    success: function (t) {
                        0 == t.code ? (swal(t.message, "", "success"), e.closest("dd").remove()) : swal(t.message, "", "error")
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })
        }

        function l() {
            $(".jinput-flashupload").each(function (e) {
                var t = $(this), n = t.data("type"), a = t.data("name");
                n && a && t.flashuploadbutton2({
                    type: n, name: a, start: function () {
                        $("#" + a + "progress").show(), $("#" + a + "progress div").css("width", "0%")
                    }, progress: function (e, t, n) {
                        var a = parseInt(100 * t / n);
                        $("#" + e + "progress div").css("width", a + "%")
                    }, complete: function (e, t) {
                        console.log(e), console.log(t), t = t.replace("http://imagexinli.b0.upaiyun.com/", "http://image.xinli001.com/"), $("#" + e).val(t), $("#" + e + "preview").prop("src", t + "!300"), $("#" + e + "progress").hide(), $("#" + e + "progress div").css("width", "0%")
                    }
                })
            })
        }

        function c() {
            var e = $(this).parent().find("input[type='checkbox']");
            e.data("category-id");
            e.prop("checked") ? e.prop("checked", !1) : e.prop("checked", !0), d()
        }

        function d() {
            var e = [], t = $("#teacher-profile-form .wp input[type='checkbox']:checked").size();
            t > 0 ? $(".zclx").show() : $(".zclx").hide();
            var n = [];
            $("#teacher-profile-form .wp input[type='checkbox']").each(function () {
                var t = $(this).data("category-id") || 0, a = $(this).data("category-name") || 0,
                    i = categoryTagList[t] || [];
                if ("undefined" == typeof selectedTags[t] && (selectedTags[t] = []), $(this).prop("checked")) {
                    if (t) {
                        e.push("<dl>"), e.push("<dt>" + a + "</dt>");
                        for (var r = 0; r < i.length; r++) {
                            var o = selectedTags[t] || [], s = teacher.tags || "", l = s.split(","), c = "";
                            $.inArray(i[r], o) == -1 && $.inArray(i[r], l) == -1 || (c = 'class="selected"', $.inArray(i[r], selectedTags[t]) == -1 && selectedTags[t].push(i[r])), e.push("<dd><a " + c + ' data-category-id="' + t + '" data-tag-name="' + i[r] + '" href="javascript:;">' + i[r] + "</a></dd>")
                        }
                        e.push("</dl>"), n.push(t)
                    }
                } else selectedTags[t] = []
            }), console.log(selectedTags), $("#teacher-profile-form .zclx .inner").html(e.join("")), $("#teacher-profile-form .wp input[name='zhuanchangs']").val(n.join(",")), f()
        }

        function u() {
            var e = $(this), t = e.data("tag-name"), n = e.data("category-id"), a = $.inArray(t, selectedTags[n]);
            e.hasClass("selected") ? (e.removeClass("selected"), selectedTags[n].splice(a, 1)) : (e.addClass("selected"), selectedTags[n].push(t));
            var i = $("#teacher-profile-form a[data-category-id='" + n + "'].selected").size();
            i > 5 && (swal("每个分类标签不能超过5个", "", "warning"), e.removeClass("selected"), selectedTags[n].splice(a, 1)), f()
        }

        function f() {
            var e = [];
            for (var t in selectedTags)for (var n in selectedTags[t])e.push(selectedTags[t][n]);
            var a = e.join(",");
            console.log(a), $("#teacher-profile-form input[name='tags']").val(a)
        }
    })
}
if ("www/user/setting/message/chat" == pageName && $(function () {
        function e() {
            var e = $(this);
            return !e.data("loading") && (e.validate({
                    rules: {content: {required: !0}},
                    messages: {content: {required: "请填写内容"}},
                    errorElement: "div",
                    errorClass: "err"
                }), e.valid() && (e.data("loading", !0), $.ajax({
                    url: postUserMessageUrl,
                    type: "post",
                    data: e.serialize(),
                    success: function (e) {
                        0 == e.code ? (swal(e.message, "", "success"), location.reload()) : swal(e.message, "", "error")
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                })), !1)
        }

        $("#message-chat-reply-form").bind("submit", e)
    }), "www/user/setting/yuyue" == pageName && $(function () {
        var e = '<form id="cancel-form" action="" method="post"><p><textarea class="cancel_content" name="cancel_content" style="width: 450px;padding:5px 10px; height:130px;margin:10px 0;resize:none;"></textarea></p></form>',
            t = {id: yuyueId || 0, userId: userId || 0};
        $("#accept-yuyue").on("click", function () {
            console.log("test"), $.dialog.confirm({content: "是否接受预约？"}, function (e) {
                console.log("test-in-dialog!"), $.ajax({
                    url: acceptYuyueUrl,
                    type: "POST",
                    data: t,
                    success: function (e) {
                        return 0 == e.code ? (swal(e.message, "", "success"), $(".sa-confirm-button-container").on("click", ".confirm", function () {
                            location.reload()
                        })) : swal(e.message, "", "warning"), !0
                    }
                })
            })
        }), $("#cancel-yuyue, #denied-yuyue").click(function () {
            var n = $(this).attr("id");
            $.dialog({
                title: "取消/拒绝原因", content: e, ok: function () {
                    var e = $(this.DOM.content).find(".cancel_content").val();
                    return "" == e ? ($.dialog.tips("内容不能为空！", 1, ""), !1) : (t.content = e, t.status = "denied-yuyue" == n ? 2 : 5, void $.ajax({
                        url: cancelYuyueUrl,
                        type: "POST",
                        data: t,
                        success: function (e) {
                            return 0 == e.code ? (swal(e.message, "", "success"), $(".sa-confirm-button-container").on("click", ".confirm", function () {
                                location.reload()
                            })) : swal(e.message, "", "warning"), !0
                        }
                    }))
                }, cancel: !0, lock: !0
            })
        }), $("#userCancel").click(function () {
            $.dialog.confirm({content: "你确定取消预约？"}, function (e) {
                $.ajax({
                    url: userCancelUrl, type: "POST", data: t, success: function (e) {
                        return 0 == e.code ? (swal(e.message, "", "success"), $(".sa-confirm-button-container").on("click", ".confirm", function () {
                            location.reload()
                        })) : swal(e.message, "", "warning"), !0
                    }
                })
            })
        }), $("#complete-tips").click(function () {
            $.dialog.confirm({content: "是否发送提醒？"}, function (e) {
                $.ajax({
                    url: tipsCompleteUrl, type: "GET", data: t, success: function (e) {
                        return 0 == e.code ? ($("#complete-tips").css("background", "#eee").unbind("click"), swal(e.message, "", "success")) : swal(e.message, "", "warning"), !0
                    }
                })
            })
        }), $("#green-yuyue-complete").click(function () {
            $.dialog.confirm({title: "请确认咨询是否已完成", content: "确认后，您支付的咨询费用将通过壹心理平台转入专家账户"}, function (e) {
                $.ajax({
                    url: YuYueCompleteUrl, type: "POST", data: t, success: function (e) {
                        return 0 == e.code ? (swal(e.message, "", "success"), $(".sa-confirm-button-container").on("click", ".confirm", function () {
                            location.reload()
                        })) : swal(e.message, "", "warning"), !0
                    }
                })
            })
        }), $("#btn-message").on("click", function () {
            var e = $(this);
            return !e.data("loading") && (e.data("loading", !0), void $.ajax({
                    url: "/ajax/user-auth.json",
                    success: function (e) {
                        0 == e.code ? yiUikit.messageDialog() : 40001 == e.code ? yiUikit.loginDialog() : 20001 == e.code ? window.activePhone.show() : swal(e.message, "", "error")
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                }))
        }), $("#tips-teacher-confirm").click(function () {
            var e = $(this);
            $.ajax({
                url: tipsTeacherCompleteUrl, type: "GET", data: t, success: function (t) {
                    0 == t.code ? (swal(t.message, "", "success"), e.css({
                        "border-color": "#eee",
                        color: "#999999"
                    }).text("已提醒专家").unbind("click")) : swal(t.message, "", "warning")
                }
            })
        })
    }), "www/user/setting/yuyue/list" == pageName && $(function () {
        function e(e) {
            var t = {id: parseInt(e.data("id")) || 0, userId: parseInt(e.data("user-id")) || 0};
            return t
        }

        $(".accept-yuyue").click(function () {
            var t = $(this);
            $.dialog.confirm({content: "是否接受预约？"}, function (n) {
                $.ajax({
                    url: acceptYuyueUrl, type: "POST", data: e(t), success: function (e) {
                        return 0 == e.code ? (swal(e.message, "", "success"), $(".sa-confirm-button-container").on("click", ".confirm", function () {
                            location.reload()
                        })) : swal(e.message, "", "warning"), !0
                    }
                })
            })
        }), $(".cancel-yuyue, .denied-yuyue").click(function () {
            var t = $(this), n = $(this).attr("id");
            $.dialog({
                title: "取消/拒绝原因",
                content: '<form id="cancel-form" action="" method="post"><p><textarea class="cancel_content" name="cancel_content" style="width: 450px;padding:5px 10px; height:130px;margin:10px 0;resize:none;"></textarea></p></form>',
                ok: function () {
                    var a = $(this.DOM.content).find(".cancel_content").val();
                    if ("" == a)return $.dialog.tips("内容不能为空！", 1, ""), !1;
                    var i = e(t);
                    i.content = a, i.status = "denied-yuyue" == n ? 2 : 5, $.ajax({
                        url: cancelYuyueUrl,
                        type: "POST",
                        data: i,
                        success: function (e) {
                            return 0 == e.code ? (swal(e.message, "", "success"), $(".sa-confirm-button-container").on("click", ".confirm", function () {
                                location.reload()
                            })) : swal(e.message, "", "warning"), !0
                        }
                    })
                },
                cancel: !0,
                lock: !0
            })
        }), $(".complete-tips").click(function () {
            var t = $(this);
            $.dialog.confirm({content: "是否发送提醒？"}, function (n) {
                $.ajax({
                    url: tipsCompleteUrl, type: "GET", data: e(t), success: function (e) {
                        return 0 == e.code ? ($("#complete-tips").css("background", "#eee").unbind("click"), swal(e.message, "", "success")) : swal(e.message, "", "warning"), !0
                    }
                })
            })
        }), $(".green-yuyue-complete").click(function () {
            var t = $(this);
            $.dialog.confirm({title: "请确认咨询是否已完成", content: "确认后，您支付的咨询费用将通过壹心理平台转入专家账户"}, function (n) {
                $.ajax({
                    url: YuYueCompleteUrl, type: "POST", data: e(t), success: function (e) {
                        return 0 == e.code ? (swal(e.message, "", "success"), $(".sa-confirm-button-container").on("click", ".confirm", function () {
                            location.reload()
                        })) : swal(e.message, "", "warning"), !0
                    }
                })
            })
        }), $(".tips-teacher-confirm").click(function () {
            var t = $(this);
            $.ajax({
                url: tipsTeacherCompleteUrl, type: "GET", data: e(t), success: function (e) {
                    0 == e.code ? (swal(e.message, "", "success"), t.css({color: "#fff"}).text("已提醒专家").unbind("click")) : swal(e.message, "", "warning")
                }
            })
        })
    }), "www/zx/yuyue/comment" == pageName && $(function () {
        var e = $("#comment-form");
        e.submit(function () {
            var e = $(this).find("#comment-content").val();
            $(this).find("input[name='score']:checked").val();
            return "" == e || void 0 == e ? ($(this).find("#comment-content").next(".tips").html("评论内容不能为空!"), !1) : ($.ajax({
                url: $(this).attr("action"),
                type: $(this).attr("method"),
                data: $(this).serialize(),
                success: function (e) {
                    0 == e.code ? location.href = e.data : swal(e.msg, "", "warning")
                }
            }), !1)
        }), $("#btn-message").on("click", function () {
            var e = $(this);
            return !e.data("loading") && (e.data("loading", !0), void $.ajax({
                    url: "/ajax/user-auth.json",
                    success: function (e) {
                        0 == e.code ? yiUikit.messageDialog() : 40001 == e.code ? yiUikit.loginDialog() : 20001 == e.code ? window.activePhone.show() : swal(e.message, "", "error")
                    },
                    error: function () {
                        swal("网络错误，请重试", "", "error")
                    },
                    complete: function () {
                        e.data("loading", !1)
                    }
                }))
        })
    }), "www/zx/yuyue/zhifu/weixin" == pageName) {
    $.post(pollingDingdanUrl, {id: dingdanId}, function (e) {
        0 != e.code && (_interval = self.setInterval("clock()", 1e3))
    }, "JSON");
    function clock() {
        $.post(pollingDingdanUrl, {id: dingdanId}, function (e) {
            0 == e.code && (clearInterval(_interval), $.dialog.tips(e.message, 1, "", function () {
                location.reload()
            }))
        }, "JSON")
    }
}