(function() {
    try {
        (function(rd) {
            function Wj(a) {
                return a.replace(Xj, function(c, b, d, e) {
                    return "" + b + e
                })
            }

            function sd(a, c) {
                if (!c) return !1;
                var b = Q(a);
                return (new RegExp(c)).test("" + b.pathname + b.hash + b.search)
            }

            function Yj(a, c) {
                return Ha(a, c, function(b) {
                    var d = n(b, "settings.dr");
                    return {
                        Yg: Zj(a, d),
                        isEnabled: n(b, "settings.auto_goals")
                    }
                })
            }

            function ak(a, c) {
                function b() {
                    var m = l + "0",
                        p = l + "1";
                    h[m] ? h[p] ? (l = l.slice(0, -1), --k) : (g[p] = e(8), h[p] = 1) : (g[m] = e(8), h[m] = 1)
                }

                function d() {
                    var m = l + "1";
                    h[l + "0"] ? h[m] ? (l = l.slice(0, -1), --k) : (l += "1",
                        h[l] = 1) : (l += "0", h[l] = 1)
                }

                function e(m) {
                    void 0 === m && (m = 1);
                    var p = f.slice(k, k + m);
                    k += m;
                    return p
                }
                for (var f = jg(a, c, ""), g = {}, h = {}, k = 1, l = ""; k < f.length - 1;)("0" === e() ? d : b)();
                return g
            }

            function bk(a, c, b, d, e) {
                b = ze(a, a.document.body, b);
                d = ze(a, a.document.body, d);
                H(e.target, [b, d]) && Ae(a, c)
            }

            function kg(a, c, b, d) {
                (b = ck(a, d, b)) && Ae(a, c, b)
            }

            function lg(a, c) {
                var b = mg(a, c);
                return dk(a, b)
            }

            function mg(a, c) {
                var b = ze(a, a.document.body, c);
                return b ? ek(a, b) : ""
            }

            function Ae(a, c, b) {
                (c = La(a, c)) && c.params(Ac(["__ym", "dr", b || u(ng, fk)(a)]))
            }

            function ze(a, c, b) {
                var d = null;
                try {
                    d = b ? hc(a, c, b) : d
                } catch (e) {}
                return d
            }

            function jg(a, c, b) {
                try {
                    var d = ka(a.atob(c));
                    return y(function(e) {
                        e = e.charCodeAt(0).toString(2);
                        return og("0", 8 - e.length) + e
                    }, d).join(b)
                } catch (e) {
                    return ""
                }
            }

            function ng(a) {
                return Wa(a, 10, 99)
            }

            function ek(a, c) {
                if (!c) return "";
                var b = [],
                    d = n(a, "document");
                Be(a, c, function(e) {
                    e.nodeType === d.TEXT_NODE && e.textContent ? b.push(e.textContent.trim()) : e instanceof HTMLImageElement && e.alt && b.push(e.alt.trim())
                });
                return 0 === b.length ? "" : b.join(" ")
            }

            function gk(a,
                c, b) {
                var d;
                a = pg(a, c);
                return (d = {}, d.mf = "https://adstat.yandex.ru/track?service=metrika&id=" + a, d.rt = "https://" + a + ".mc.yandex.ru/watch/3/1", d)[b]
            }

            function hk(a, c, b, d) {
                d = n(d, "target");
                (d = Ab("button,input", a, d)) && "submit" === d.type && (d = qg(a, d)) && (b.push(d), X(a, M([!1, a, c, b, d], rg), 300))
            }

            function rg(a, c, b, d, e) {
                var f = sb(c)(e, d),
                    g = -1 !== f;
                if (a || g) g && d.splice(f, 1), a = sg(c, e), a = "?" + Bc(a), d = M([c, b, "Form goal. Counter " + b.id + ". Form: " + a + "."], tg), Ce(c, b, "form", d)(a)
            }

            function tg(a, c, b) {
                return ik(a, c).then(function(d) {
                    d &&
                        Bb(a, c, b)()
                })
            }

            function jk(a) {
                a = kk(a);
                return ca(a) ? F("x", a) : a
            }

            function lk(a) {
                return F("x", mk(a) || [])
            }

            function mk(a) {
                var c = n(a, "speechSynthesis.getVoices");
                if (!c) return "";
                a = C(c, a.speechSynthesis);
                return Qb(function(b) {
                    return y(w(b, n), nk)
                }, a())
            }

            function ok(a) {
                if (a = pk(a)) try {
                    for (var c = [], b = 0; b < ug.length; b += 1) {
                        var d = a(ug[b]);
                        c.push(d)
                    }
                    var e = c
                } catch (f) {
                    e = []
                } else e = [];
                return e ? F("x", e) : ""
            }

            function qk(a) {
                var c = rk(a);
                return c ? F("x", y(function(b) {
                    b = c[b];
                    return F("x", y(u(O, da("concat", ""), w(b, n)), ["matches",
                        "media"
                    ]))
                }, ea(c))) : ""
            }

            function sk(a, c) {
                var b = c.Lg;
                if (!tk(a, b)) return "";
                var d = [];
                var e = uk(a, b);
                if (null != e) try {
                    var f = e.toDataURL()
                } catch (I) {
                    f = ""
                } else f = "";
                (e = f) && d.push(e);
                var g = b.getContextAttributes();
                try {
                    var h = Da(b.getSupportedExtensions, "getSupportedExtensions") ? b.getSupportedExtensions() || [] : []
                } catch (I) {
                    h = []
                }
                h = F(";", h);
                e = De(b.getParameter(b.ALIASED_LINE_WIDTH_RANGE), b);
                f = De(b.getParameter(b.ALIASED_POINT_SIZE_RANGE), b);
                var k = b.getParameter(b.ALPHA_BITS);
                g = g && g.antialias ? "yes" : "no";
                var l = b.getParameter(b.BLUE_BITS),
                    m = b.getParameter(b.DEPTH_BITS),
                    p = b.getParameter(b.GREEN_BITS),
                    q = b.getExtension("EXT_texture_filter_anisotropic") || b.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || b.getExtension("MOZ_EXT_texture_filter_anisotropic");
                if (q) {
                    var r = b.getParameter(q.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                    0 === r && (r = 2)
                }
                r = {
                    yj: h,
                    "webgl aliased line width range": e,
                    "webgl aliased point size range": f,
                    "webgl alpha bits": k,
                    "webgl antialiasing": g,
                    "webgl blue bits": l,
                    "webgl depth bits": m,
                    "webgl green bits": p,
                    "webgl max anisotropy": q ?
                        r : null,
                    "webgl max combined texture image units": b.getParameter(b.MAX_COMBINED_TEXTURE_IMAGE_UNITS),
                    "webgl max cube map texture size": b.getParameter(b.MAX_CUBE_MAP_TEXTURE_SIZE),
                    "webgl max fragment uniform vectors": b.getParameter(b.MAX_FRAGMENT_UNIFORM_VECTORS),
                    "webgl max render buffer size": b.getParameter(b.MAX_RENDERBUFFER_SIZE),
                    "webgl max texture image units": b.getParameter(b.MAX_TEXTURE_IMAGE_UNITS),
                    "webgl max texture size": b.getParameter(b.MAX_TEXTURE_SIZE),
                    "webgl max varying vectors": b.getParameter(b.MAX_VARYING_VECTORS),
                    "webgl max vertex attribs": b.getParameter(b.MAX_VERTEX_ATTRIBS),
                    "webgl max vertex texture image units": b.getParameter(b.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
                    "webgl max vertex uniform vectors": b.getParameter(b.MAX_VERTEX_UNIFORM_VECTORS),
                    "webgl max viewport dims": De(b.getParameter(b.MAX_VIEWPORT_DIMS), b),
                    "webgl red bits": b.getParameter(b.RED_BITS),
                    "webgl renderer": b.getParameter(b.RENDERER),
                    "webgl shading language version": b.getParameter(b.SHADING_LANGUAGE_VERSION),
                    "webgl stencil bits": b.getParameter(b.STENCIL_BITS),
                    "webgl vendor": b.getParameter(b.VENDOR),
                    "webgl version": b.getParameter(b.VERSION)
                };
                Ee(d, r, ": ");
                a: {
                    try {
                        var t = b.getExtension("WEBGL_debug_renderer_info");
                        if (t) {
                            var x = {
                                "webgl unmasked vendor": b.getParameter(t.UNMASKED_VENDOR_WEBGL),
                                "webgl unmasked renderer": b.getParameter(t.UNMASKED_RENDERER_WEBGL)
                            };
                            break a
                        }
                    } catch (I) {}
                    x = {}
                }
                Ee(d, x);
                if (!b.getShaderPrecisionFormat) return F("~", d);
                Ee(d, vk(b));
                return F("~", d)
            }

            function Ee(a, c, b) {
                void 0 === b && (b = ":");
                z(function(d) {
                    return a.push("" + d[0] + b + d[1])
                }, Aa(c))
            }

            function wk(a) {
                var c =
                    xk(a);
                return c ? J(function(b, d, e) {
                    d = "" + (e + 1);
                    var f = c.supportsVersion;
                    return P(f) ? f.call(c, e + 1) ? b + d : b + "0" : b
                }, "", yk(19)) + c.canMakePayments() : ""
            }

            function xk(a) {
                var c = n(a, "ApplePaySession"),
                    b = Q(a).protocol;
                return !c || "https:" !== b || tb(a) ? "" : c
            }

            function zk(a, c) {
                var b = Ja(a),
                    d = "wv2rf:" + T(c),
                    e = c.lb,
                    f = Fe(a),
                    g = b.l(d),
                    h = c.Vi;
                return R(f) || Ma(g) ? la(function(k, l) {
                    Ha(a, c, function(m) {
                        var p = n(m, "settings.webvisor.forms");
                        f = Fe(a) || n(m, "settings.eu");
                        b.o(d, Ge(p));
                        l({
                            lb: e,
                            lf: !!f,
                            Ef: !!p,
                            fg: h
                        })
                    })
                }) : He({
                    lb: e,
                    lf: f,
                    Ef: !!parseInt(g,
                        10),
                    fg: h
                })
            }

            function Ak() {
                var a = J(function(c, b) {
                    c[b[0]] = {
                        Xc: 0,
                        Ig: 1 / b[1]
                    };
                    return c
                }, {}, [
                    ["blur", .0034],
                    ["change", .0155],
                    ["click", .01095],
                    ["deviceRotation", 2E-4],
                    ["focus", .0061],
                    ["mousemove", .5132],
                    ["scroll", .4795],
                    ["selection", .0109],
                    ["touchcancel", 2E-4],
                    ["touchend", .0265],
                    ["touchforcechange", .0233],
                    ["touchmove", .1442],
                    ["touchstart", .027],
                    ["zoom", .0014]
                ]);
                return {
                    Cg: function(c) {
                        if (c.length) return {
                            type: "activity",
                            data: J(function(b, d) {
                                var e = a[d];
                                return Math.round(b + e.Xc * e.Ig)
                            }, 0, ea(a))
                        }
                    },
                    hi: function(c) {
                        c &&
                            (c = a[c.data.type]) && (c.Xc += 1)
                    }
                }
            }

            function Bk(a, c, b, d) {
                function e() {
                    l || (l = !0, vg(a, m, function(q) {
                        f(q[0], q[1])
                    }, 20, 200, "s.w2.sf.ms"), m = [])
                }

                function f(q, r) {
                    h(q, c, r)["catch"](A(a, "s.w2.p"))
                }

                function g() {
                    var q = !1;
                    return J(function(r, t, x) {
                        p = Ie(function(I, aa) {
                            return I[2].partNum - aa[2].partNum
                        }, p);
                        t = t[2];
                        q = q || t.end;
                        return r && x + 1 === t.partNum
                    }, !0, p) && q
                }
                void 0 === d && (d = Rb);
                var h = ma(a, "W", c),
                    k = !1,
                    l = !1,
                    m = [],
                    p = [];
                X(a, e, 5E3);
                return function(q, r, t, x) {
                    r = {
                        F: d(t),
                        H: sa(),
                        Y: r,
                        kf: b
                    };
                    if ("m" === q)
                        if (r.H.o("bt", 1), k) f(r, x);
                        else {
                            var I =
                                J(function(ua, Ia) {
                                    var Cb = "page" === Ia.type && !Ia.L,
                                        ic = "eof" === Ia.data.type,
                                        Je = Cb && !!Ia.partNum;
                                    return {
                                        $c: ua.$c || Je,
                                        Zc: ua.Zc || Cb,
                                        Yc: ua.Yc || ic
                                    }
                                }, {
                                    Zc: !1,
                                    Yc: !1,
                                    $c: !1
                                }, t);
                            q = I.Zc;
                            var aa = I.Yc;
                            I = I.$c;
                            q && (I ? (p.push([r, x, t[0]]), g() && (z(function(ua) {
                                return f(ua[0], ua[1])
                            }, p), k = !0, p = [])) : (k = !0, f(r, x)));
                            l ? q || f(r, x) : (q || m.push([r, x]), (k || aa) && e())
                        }
                    else f(r, x)
                }
            }

            function Ck(a) {
                if (a.type && a.event) switch (a.type) {
                    case "page":
                        var c = a.data,
                            b = c.ta,
                            d = c.Mc,
                            e = c.content;
                        delete c.ta;
                        delete c.Mc;
                        delete c.content;
                        c = {
                            type: "page",
                            data: {
                                L: a.L || 0,
                                content: e,
                                ta: b,
                                Mc: d,
                                V: c
                            }
                        };
                        a.K && (c.K = a.K);
                        return c;
                    case "event":
                        a: {
                            c = {
                                type: "event",
                                K: a.K,
                                data: {
                                    L: a.L,
                                    type: a.event,
                                    V: {}
                                }
                            };b = B({}, a.data);
                            switch (a.event) {
                                case "zoom":
                                    c.data.V = {
                                        mg: {
                                            x: 0,
                                            y: 0,
                                            level: 0
                                        },
                                        og: b,
                                        duration: 1
                                    };
                                    break;
                                case "keystroke":
                                    c.data.V = b.pc;
                                    break;
                                case "deviceRotation":
                                case "resize":
                                    c.data.V = b;
                                    break;
                                case "windowfocus":
                                case "windowblur":
                                case "focus":
                                    c.data.target = b.target;
                                    c.data.V = null;
                                    break;
                                case "touchmove":
                                case "touchstart":
                                case "touchend":
                                case "touchcancel":
                                case "touchforcechange":
                                case "scroll":
                                case "change":
                                case "click":
                                case "mousemove":
                                case "mousedown":
                                case "mouseup":
                                case "selection":
                                case "stylechange":
                                    c.data.target =
                                        b.target;
                                    delete b.target;
                                    c.data.V = b;
                                    break;
                                case "srcset":
                                    a = {
                                        type: "mutation",
                                        K: a.K,
                                        data: {
                                            L: a.L,
                                            V: {
                                                va: [{
                                                    Wc: [{
                                                        id: b.target,
                                                        kb: {
                                                            src: {
                                                                tc: "",
                                                                n: b.value,
                                                                r: !1
                                                            }
                                                        },
                                                        ra: 0
                                                    }]
                                                }],
                                                index: 0
                                            }
                                        }
                                    };
                                    break a
                            }
                            a = c
                        }
                        break;
                    case "mutation":
                        return Dk(a)
                }
                return a
            }

            function Dk(a) {
                var c = B({}, a.data),
                    b = [];
                switch (a.event) {
                    case "tc":
                        b = [{
                            d: [{
                                id: c.target,
                                Rb: {
                                    tc: "",
                                    n: c.value
                                },
                                ra: c.index
                            }]
                        }];
                        break;
                    case "ac":
                        b = [{
                            Wc: [{
                                id: c.target,
                                kb: J(function(d, e) {
                                    var f = e[1];
                                    d[e[0]] = {
                                        tc: "",
                                        n: f,
                                        r: wa(f)
                                    };
                                    return d
                                }, {}, Aa(c.attributes)),
                                ra: c.index
                            }]
                        }];
                        break;
                    case "re":
                        b = [{
                            Ee: y(function(d) {
                                return {
                                    id: d,
                                    ra: c.index
                                }
                            }, c.za)
                        }];
                        break;
                    case "ad":
                        b = [{
                            He: y(function(d) {
                                return {
                                    id: d.id,
                                    uf: d.name,
                                    wf: d.tf,
                                    Pd: d.parent,
                                    Sd: d.Ud,
                                    Jd: d.next,
                                    kb: d.attributes,
                                    ra: c.index,
                                    Rb: d.content,
                                    Ha: d.hidden
                                }
                            }, c.za)
                        }]
                }
                return {
                    type: "mutation",
                    K: a.K,
                    data: {
                        L: a.L,
                        V: {
                            va: b,
                            index: c.index
                        }
                    }
                }
            }

            function Ek(a) {
                return {
                    ph: function() {
                        var c = a.document.querySelector("base[href]");
                        return c ? c.getAttribute("href") : null
                    },
                    rh: function() {
                        if (a.document.doctype) {
                            var c = B({
                                    name: "html",
                                    publicId: "",
                                    systemId: ""
                                }, a.document.doctype),
                                b = c.publicId,
                                d = c.systemId;
                            return "<!DOCTYPE " + F("", [c.name, b ? ' PUBLIC "' + b + '"' : "", !b && d ? " SYSTEM" : "", d ? ' "' + d + '"' : ""]) + ">"
                        }
                        return null
                    },
                    Ch: function() {
                        try {
                            if (!a.sessionStorage) return null;
                            var c = a.sessionStorage.getItem("__vw_tab_guid"),
                                b = !1;
                            try {
                                var d = a.opener ? a.opener.sessionStorage : null;
                                b = !!d && c === d.getItem("__vw_tab_guid")
                            } catch (e) {
                                b = !0
                            }
                            if (!c || b) c = wg(), a.sessionStorage.setItem("__vw_tab_guid", c);
                            return c
                        } catch (e) {
                            return null
                        }
                    }
                }
            }

            function Fk(a, c, b) {
                var d = Cc(a),
                    e = na(a),
                    f = tb(a),
                    g = c.pd(),
                    h = !n(a, "postMessage") ||
                    f && !n(a, "parent.postMessage"),
                    k = w(d, O);
                if (h) {
                    if (!g) return X(a, C(d.R, d, "i", {
                        ha: !1
                    }), 10), {
                        od: k,
                        Qf: D,
                        stop: D
                    };
                    Db(ob())
                }
                d.C("sr", function(r) {
                    var t, x = xg(a, r.source);
                    x && Ke(a, r.source, (t = {}, t.type = "\u043d", t.frameId = c.ga().T(x), t))
                });
                d.C("sd", function(r) {
                    var t = r.data;
                    r = r.source;
                    (a === r || xg(a, r)) && d.R("sdr", {
                        data: t.data,
                        L: t.frameId
                    })
                });
                if (f && !g) {
                    var l = !1,
                        m = 0,
                        p = function() {
                            var r;
                            Ke(a, a.parent, (r = {}, r.type = "sr", r));
                            m = X(a, p, 100, "if.i")
                        };
                    p();
                    var q = function(r) {
                        d.ba("\u043d", q);
                        oa(a, m);
                        var t = jc(a, r.origin).host;
                        l ||
                            r.source !== a.parent || !r.data.frameId || "about:blank" !== Q(a).host && !H(t, b) || (l = !0, d.R("i", {
                                L: r.data.frameId,
                                ha: !0
                            }))
                    };
                    d.C("\u043d", q);
                    X(a, function() {
                        d.ba("\u043d", q);
                        oa(a, m);
                        l || (l = !0, d.R("i", {
                            ha: !1
                        }))
                    }, 2E3, "if.r")
                }
                e = e.C(a, ["message"], function(r) {
                    var t = pb(a, r.data);
                    t && t.type && H(t.type, Gk) && d.R(t.type, {
                        data: t,
                        source: r.source,
                        origin: r.origin
                    })
                });
                return {
                    od: k,
                    Qf: function(r) {
                        var t;
                        return Ke(a, a.parent, (t = {}, t.frameId = c.pd(), t.data = r, t.type = "sd", t))
                    },
                    stop: e
                }
            }

            function xg(a, c) {
                try {
                    return $a(u(U("contentWindow"),
                        xa(c)), ka(a.document.querySelectorAll("iframe")))
                } catch (b) {
                    return null
                }
            }

            function Ke(a, c, b) {
                a = gb(a, b);
                c.postMessage(a, "*")
            }

            function wg() {
                return Eb() + Eb() + "-" + Eb() + "-" + Eb() + "-" + Eb() + "-" + Eb() + Eb() + Eb()
            }

            function Eb() {
                return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
            }

            function Hk(a, c) {
                if (Na(c)) return c;
                var b = a.textContent;
                if (Na(b)) return b;
                b = a.data;
                if (Na(b)) return b;
                b = a.nodeValue;
                return Na(b) ? b : ""
            }

            function Ik(a, c, b, d, e) {
                void 0 === d && (d = {});
                void 0 === e && (e = ya(c));
                var f = B(J(function(g, h) {
                    g[h.name] =
                        h.value;
                    return g
                }, {}, ka(c.attributes)), d);
                B(f, Jk(c, e, f));
                if (d = J(function(g, h) {
                        var k = h[0],
                            l = td(a, c, k, h[1], b, e),
                            m = l.value;
                        wa(m) ? delete f[k] : f[k] = m;
                        return g || l.Ad
                    }, !1, Aa(f)) && Dc(c)) f.width = d.width, f.height = d.height;
                return f
            }

            function Jk(a, c, b) {
                var d = {};
                ud(a) ? d.value = a.value || b.value : "IMG" !== c || b.src || (d.src = "");
                return d
            }

            function td(a, c, b, d, e, f) {
                void 0 === f && (f = ya(c));
                var g = {
                    Ad: !1,
                    value: d
                };
                if (ud(c)) "value" === b ? !wa(d) && "" !== d && (b = e.lf, e = e.Ef, f = Ec(a, c), (e ? kc(a, c, b) : !vd(c)) || f) && (g.Ad = f, g.value = F("", y(w("\u2022",
                    O), ("" + d).split("")))) : "checked" === b && H((c.getAttribute("type") || "").toLowerCase(), Kk) && (g.value = c.checked ? "checked" : null);
                else if ("IMG" === f && "src" === b)(f = Ec(a, c)) ? (g.Ad = f, g.value = Lk) : g.value = (c.getAttribute("srcset") ? c.currentSrc : "") || c.src;
                else if ("A" === f && "href" === b) g.value = d ? "#" : "";
                else if (H(b, ["srcset", "integrity", "crossorigin", "password"]) || 2 < b.length && 0 === yg(b, "on") || "IFRAME" === f && "src" === b || "SCRIPT" === f && H(b, ["src", "type"])) g.value = null;
                return g
            }

            function Le(a, c, b, d) {
                void 0 === d && (d = "wv2");
                return {
                    G: function(e, f) {
                        return A(a, d + "." + b + "." + f, e, void 0, c)
                    }
                }
            }

            function Mk(a, c) {
                var b = a.document;
                if (H(b.readyState, ["interactive", "complete"])) ub(a, c);
                else {
                    var d = na(a),
                        e = d.C,
                        f = d.Gb,
                        g = function() {
                            f(b, ["DOMContentLoaded"], g);
                            f(a, ["load"], g);
                            c()
                        };
                    e(b, ["DOMContentLoaded"], g);
                    e(a, ["load"], g)
                }
            }

            function Nk(a, c) {
                var b = Ok(a),
                    d = ma(a, "r", c),
                    e = A(a, "rts.p");
                return Ha(a, c, C(J, null, function(f, g) {
                    var h = {
                        id: g.Sg,
                        Z: g.Z
                    };
                    h = d({
                        Y: g.ri,
                        H: sa(g.Hg),
                        F: g.N,
                        Cb: g.Cb
                    }, h, g.yi)["catch"](e);
                    return f.then(w(h, O))
                }, L.resolve(""), b))["catch"](e)
            }

            function zg(a, c, b) {
                c = Fc(a, void 0, c);
                c = Ag(a, c.l("phc_settings") || "");
                var d = n(c, "clientId"),
                    e = n(c, "orderId"),
                    f = n(c, "service_id"),
                    g = n(c, "phones") || [];
                return d && e && g ? Pk(a, b.Le, {
                    dg: Qk
                }).Gf(g).then(function(h) {
                    return Rk(b, {
                        ob: d,
                        yb: e,
                        Vf: f
                    }, h.da, g, h.ja)
                })["catch"](function() {}) : L.resolve()
            }

            function Qk(a, c, b) {
                a = Sk(b.Dc);
                if ("href" === b.$d) {
                    var d = b.cb;
                    c = d.href;
                    b = c.replace(a, b.Ma);
                    if (c !== b) return d.href = b, !0
                } else if ((a = null === (d = b.cb.textContent) || void 0 === d ? void 0 : d.replace(a, b.Ma)) && a !== b.cb.textContent) return b.cb.textContent =
                    a, !0;
                return !1
            }

            function Rk(a, c, b, d, e) {
                var f;
                c.ob && c.yb && (c.ob === a.ob && c.yb === a.yb || B(a, c, {
                    da: {},
                    Ta: !0
                }), 0 < e && Sa(a.ja, [e]), z(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = +(a.da[l] && a.da[l][g] ? a.da[l][g] : 0);
                    B(a.da, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, d), z(function(g) {
                    var h, k, l = g[0];
                    g = g[1];
                    var m = 1 + (a.da[l] ? a.da[l][g] : 0);
                    B(a.da, (h = {}, h[l] = (k = {}, k[g] = m, k), h))
                }, b), a.pf && (a.Ta || b.length) && ((c = La(a.b, a.Le)) && c.params("__ym", "phc", (f = {}, f.clientId = a.ob, f.orderId = a.yb, f.service_id = a.Vf, f.phones = a.da, f.performance = a.ja,
                    f)), a.Ta = !1))
            }

            function Tk(a, c) {
                try {
                    var b = c.origin
                } catch (e) {}
                if (b) {
                    var d = Ta(u(Xa, la(b)), [/^http:\/\/([\w\-.]+\.)?webvisor\.com\/?$/, /^https:\/\/([\w\-.]+\.)?metri[kc]a\.yandex\.(ru|ua|by|kz|com|com\.tr)\/?$/]);
                    b = H(b.replace(/\/?$/, "/"), Uk);
                    if (d || b) d = pb(a, c.data), "appendremote" === n(d, "action") && ("3" === n(d, "version") || b ? Bg(a, c, d, !1) : Cg(n(d, "resource") || "") && Bg(a, c, d, !0))
                }
            }

            function Vk(a, c) {
                var b = ab(a);
                if (b) {
                    b = b("div");
                    var d = Sb(a);
                    if (d) {
                        b.innerHTML = '<iframe name="RemoteIframe" allowtransparency="true" style="position: absolute; left: -999px; top: -999px; width: 1px; height: 1px;"></iframe>';
                        var e = b.firstChild;
                        e.onload = function() {
                            lc(e.contentWindow, {
                                src: c
                            })
                        };
                        a._ym__remoteIframeEl = e;
                        d.appendChild(b);
                        b.removeChild(e);
                        var f = null;
                        b.attachShadow ? f = b.attachShadow({
                            mode: "open"
                        }) : b.createShadowRoot ? f = b.createShadowRoot() : b.webkitCreateShadowRoot && (f = b.webkitCreateShadowRoot());
                        f ? f.appendChild(e) : (d.appendChild(e), a._ym__remoteIframeContainer = e)
                    }
                }
            }

            function Dg(a, c, b) {
                var d;
                c = Eg(a, c, {
                    dg: Wk,
                    $h: (d = {}, d.href = !0, d)
                });
                b = V(Boolean, y(function(f) {
                    return "*" === f ? f : Gc(f)
                }, b));
                var e = y(u(O, da("concat", [""]),
                    Xk("reverse"), Ea), b);
                b = Hc(a);
                d = Fg(a, b, 1E3);
                c = C(c.Gf, c, e, !1);
                d.C(c);
                Yk(a, b);
                Gg(a, b);
                c()
            }

            function Wk(a, c, b) {
                var d = ab(a),
                    e = b.cb,
                    f = b.Dc,
                    g = e.parentNode,
                    h = e.textContent;
                if ("text" === b.$d && h && d && g) {
                    b = d("SPAN");
                    Hg(b);
                    var k = h.split(""),
                        l = h.replace(/\s/g, "").length;
                    z(da("appendChild", b), J(function(m, p) {
                        var q = m.je,
                            r = m.kg,
                            t = d("SPAN");
                        t.innerHTML = p;
                        var x = Zk.test(p);
                        Hg(t);
                        x && (t.style.opacity = "" + (l - r - 1) / l);
                        q.push(t);
                        return {
                            je: q,
                            kg: r + (x ? 1 : 0)
                        }
                    }, {
                        je: [],
                        kg: 0
                    }, k).je);
                    $k(a, c, b, f);
                    g.insertBefore(b, e);
                    e.textContent = "";
                    return !0
                }
                return !1
            }

            function $k(a, c, b, d) {
                function e() {
                    z(w(["style", "opacity", ""], Ac), ka(b.childNodes));
                    if (c) {
                        var k = La(a, c);
                        k && k.extLink("tel:" + d, {})
                    }
                    g();
                    h()
                }
                var f = na(a),
                    g = D,
                    h = D;
                g = f.C(b, ["mouseenter"], function(k) {
                    if (k.target === b) {
                        var l = X(a, e, 200, "ph.h.e");
                        (h || D)();
                        h = f.C(b, ["mouseleave"], function(m) {
                            m.target === b && oa(a, l)
                        })
                    }
                })
            }

            function Gg(a, c) {
                return wd(a).then(function() {
                    var b, d = a.document.body,
                        e = (b = {}, b.attributes = !0, b.childList = !0, b.subtree = !0, b);
                    pa("MutationObserver", a.MutationObserver) && (new MutationObserver(c.R)).observe(d,
                        e)
                })
            }

            function Yk(a, c) {
                return na(a).C(a, ["load"], c.R)
            }

            function Eg(a, c, b) {
                function d(k) {
                    var l;
                    return f(a, c, k) ? null === (l = h[k.Dc]) || void 0 === l ? void 0 : l.Qc : null
                }
                var e, f = b.dg;
                b = b.$h;
                var g = void 0 === b ? (e = {}, e.href = !0, e.text = !0, e) : b,
                    h;
                return {
                    Gf: function(k) {
                        return new L(function(l, m) {
                            k && k.length || m();
                            h = Ig()(k);
                            l(wd(a).then(function() {
                                var p = ba(a),
                                    q = p(W),
                                    r = g.href ? al(a, h) : [],
                                    t = g.text ? Jg(a, h) : [];
                                return {
                                    da: V(ca, V(Boolean, y(d, r.concat(t)))),
                                    ja: p(W) - q
                                }
                            })["catch"](function() {
                                return {
                                    da: [],
                                    ja: 0
                                }
                            }))
                        })
                    }
                }
            }

            function al(a,
                c) {
                var b = a.document.body;
                if (!b) return [];
                var d = Kg(c);
                return J(function(e, f) {
                    var g = n(f, "href"),
                        h = decodeURI(g || "");
                    if ("tel:" === h.slice(0, 4)) {
                        var k = (d.exec(h) || [])[0],
                            l = k ? Gc(k) : "",
                            m = c[l];
                        R(m) || !l && "*" !== m.Qc[0] || (e.push({
                            $d: "href",
                            cb: f,
                            Dc: l,
                            Ma: Lg(k, c[l].Ma),
                            Ki: g
                        }), g = Gc(h.slice(4)), l = Ig()([l ? m.Qc : [g, ""]]), e.push.apply(e, Jg(a, l, f)))
                    }
                    return e
                }, [], ka(b.querySelectorAll("a")))
            }

            function Jg(a, c, b) {
                void 0 === b && (b = a.document.body);
                if (!b) return [];
                var d = [],
                    e = Kg(c);
                Be(a, b, function(f) {
                    if (f !== b && "script" !== (n(f, "parentNode.nodeName") ||
                            "").toLowerCase()) {
                        var g = V(Boolean, e.exec(f.textContent || "") || []);
                        z(function(h) {
                            var k = Gc(h);
                            R(c[k]) || d.push({
                                $d: "text",
                                cb: f,
                                Dc: k,
                                Ma: Lg(h, c[k].Ma),
                                Ki: f.textContent || ""
                            })
                        }, g)
                    }
                }, function(f) {
                    return e.test(f.textContent || "") ? 1 : 0
                }, a.NodeFilter.SHOW_TEXT);
                return d
            }

            function Ig() {
                return Ic(function(a, c) {
                    var b = y(Gc, c),
                        d = b[0];
                    b = b[1];
                    a[d] = {
                        Ma: b,
                        Qc: c
                    };
                    var e = Mg(d);
                    e !== d && (a[e] = {
                        Ma: Mg(b),
                        Qc: c
                    });
                    return a
                }, {})
            }

            function Lg(a, c) {
                for (var b = [], d = a.split(""), e = c.split(""), f = 0, g = 0; g < a.length && !(f >= e.length); g += 1) {
                    var h =
                        d[g];
                    "0" <= h && "9" >= h ? (b.push(e[f]), f += 1) : b.push(d[g])
                }
                return F("", b) + c.slice(f + 1)
            }

            function Mg(a) {
                var c = {
                    7: "8",
                    8: "7"
                };
                return 11 === a.length && c[a[0]] ? "" + c[a[0]] + a.slice(1) : a
            }

            function Kg(a) {
                return new RegExp("(?:" + F("|", y(Ng, ea(a))) + ")")
            }

            function Og(a, c, b, d) {
                if (c) {
                    var e = [];
                    c && (a.document.documentElement.contains(c) ? Be(a, c, da("push", e), d) : Sa(e, Pg(a, c, d)));
                    z(b, e)
                }
            }

            function Be(a, c, b, d, e) {
                function f(g) {
                    return P(d) ? d(g) ? a.NodeFilter.FILTER_ACCEPT : a.NodeFilter.FILTER_REJECT : a.NodeFilter.FILTER_ACCEPT
                }
                void 0 ===
                    e && (e = -1);
                if (P(b) && f(c) === a.NodeFilter.FILTER_ACCEPT && (b(c), !Me(c)))
                    for (c = a.document.createTreeWalker(c, e, d ? {
                            acceptNode: f
                        } : null, !1); c.nextNode() && !1 !== b(c.currentNode););
            }

            function Pg(a, c, b) {
                var d = [],
                    e = u(O, da("push", d));
                P(b) ? (b = b(c), (wa(b) || b === a.NodeFilter.FILTER_ACCEPT) && e(c)) : e(c);
                if (c.childNodes && 0 < c.childNodes.length) {
                    c = c.childNodes;
                    b = 0;
                    for (var f = c.length; b < f; b += 1) {
                        var g = Pg(a, c[b]);
                        z(e, g)
                    }
                }
                return d
            }

            function wd(a, c) {
                function b(e) {
                    n(c, d) ? e() : X(a, w(e, b), 100)
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." :
                    "") + "document.body";
                return new L(b)
            }

            function bl(a, c) {
                function b(e) {
                    n(c, d) ? e() : X(a, w(e, b), 100)
                }
                void 0 === c && (c = a);
                var d = (c.nodeType ? "contentWindow." : "") + "document.body";
                return la(function(e, f) {
                    b(f)
                })
            }

            function sg(a, c, b) {
                return Qg(a, c, ["i", "n", "p"], void 0, b)
            }

            function cl(a, c, b) {
                var d, e;
                var f = n(b, "ecommerce") || {};
                var g = n(b, "event") || "";
                f = (g = Rg[g]) ? Ne(g, f, "items") : void 0;
                if (!f) a: {
                        f = b;!ca(b) && xd(a, mc(b)) && (f = Ba(f));
                        if (ca(f) && (a = Rg[f[1]], "event" === f[0] && a)) {
                            f = Ne(a, f[2], "items");
                            break a
                        }
                        f = void 0
                    }(b = f || dl(b)) &&
                    c && c((d = {}, d.__ym = (e = {}, e.ecommerce = [b], e), d))
            }

            function dl(a) {
                var c = n(a, "ecommerce") || {};
                a = V(Fb(el), ea(c));
                a = J(function(b, d) {
                    b[d] = c[d];
                    return b
                }, {}, a);
                return ea(a).length ? a : void 0
            }

            function fl(a, c, b) {
                var d = !1,
                    e = "";
                if (!nc(c)) return vb(b, "Ecommerce data should be an object"), d;
                var f = c.goods;
                switch (a) {
                    case "detail":
                    case "add":
                    case "remove":
                        ca(f) && f.length ? (d = yd(function(g) {
                                return nc(g) && (Na(g.id) || xd(b, g.id) || Na(g.name))
                            }, f)) || (e = "All items in 'goods' should be objects and contain 'id' or 'name' field") :
                            e = "Ecommerce data should contain 'goods' non-empty array";
                        break;
                    case "purchase":
                        xd(b, c.id) || Na(c.id) ? d = !0 : e = "Purchase object should contain string or number 'id' field"
                }
                vb(b, e);
                return d
            }

            function Ne(a, c, b) {
                var d, e;
                if (c) {
                    var f = c.purchase || c;
                    c = ea(f);
                    var g = f[b];
                    if (g) {
                        var h = (d = {}, d[a] = (e = {}, e.products = y(gl, g), e), d);
                        1 < c.length && (h[a].actionField = J(function(k, l) {
                            if (l === b) return k;
                            if ("currency" === l) return h.currencyCode = f.currency, k;
                            k[Oe[l] || l] = f[l];
                            return k
                        }, {}, c));
                        return h
                    }
                }
            }

            function gl(a) {
                var c = {};
                z(function(b) {
                    var d =
                        Oe[b] || b; - 1 !== b.indexOf("item_category") ? (d = Oe.item_category, c[d] = c[d] ? c[d] + ("/" + a[b]) : a[b]) : c[d] = a[b]
                }, ea(a));
                return c
            }

            function hl(a, c) {
                var b = Sg(a),
                    d = T(c),
                    e = b[d];
                e || (e = {}, b[d] = e);
                e.Lh = !0;
                if (b = e.Wf) d = Tg(a), z(d, b)
            }

            function il(a, c, b, d) {
                var e;
                if (a = La(a, b)) {
                    var f = d.data;
                    b = "" + b.id;
                    var g = d.sended || [];
                    d.sended || (d.sended = g);
                    H(b, g) || !a.params || d.counter && "" + d.counter !== b || (a.params(f), g.push(b), d.parent && c.Tf((e = {}, e.type = "params", e.data = f, e)))
                }
            }

            function jl(a, c, b) {
                if (b && (b = Ug(a, b), b = Vg(a, b))) {
                    b = "?" + Bc(b);
                    var d = Bb(a, c, "Button goal. Counter " + c.id + ". Button: " + b + ".");
                    Ce(a, c, "btn", d)(b)
                }
            }

            function kl(a, c) {
                var b = Ja(a);
                if ("" !== b.l("cc")) return 0;
                var d = w("cc", b.o);
                d(0);
                var e = ba(a),
                    f = S(a);
                f = u(U(Oa({
                    Fc: 1
                }) + ".c"), Jc(function(g) {
                    d(g + "&" + e(hb))
                }), w("cc", f.o));
                ma(a, "6", c)({}).then(f)["catch"](u(Jc(function() {
                    var g = e(hb);
                    b.o("cc", "&" + g)
                }), A(a, "cc")))
            }

            function ll(a, c) {
                var b;
                a((b = {}, b.clickmap = R(c) ? !0 : c, b))
            }

            function ml(a, c, b, d, e) {
                function f() {
                    k && k.stop()
                }
                if (!c.Oa) return L.resolve(D);
                var g = ma(a, "4", c),
                    h = {
                        F: {
                            "wv-type": "0"
                        },
                        H: sa()
                    };
                b = new nl(a, b, function(l, m, p) {
                    if (g) {
                        m = "wv-data=" + Wg(l, !0);
                        for (var q = l.length, r = 0, t = 255, x = 255, I, aa, ua; q;) {
                            I = 21 < q ? 21 : q;
                            q -= I;
                            do aa = "string" === typeof l ? l.charCodeAt(r) : l[r], r += 1, 255 < aa && (ua = aa >> 8, aa &= 255, aa ^= ua), t += aa, x += t; while (--I);
                            t = (t & 255) + (t >> 8);
                            x = (x & 255) + (x >> 8)
                        }
                        l = (t & 255) + (t >> 8) << 8 | (x & 255) + (x >> 8);
                        g(B({}, h, {
                            Y: m,
                            F: {
                                "wv-check": 65535 === l ? 0 : l,
                                "wv-type": "0"
                            }
                        }), c, p)["catch"](A(a, "m.n.m.s"))
                    }
                });
                var k = ol(a, b, d, e);
                return Ha(a, c, function(l) {
                    l && S(a).o("isEU", n(l, "settings.eu"));
                    !Pe(a) && k && Xg(a, l) && k.start();
                    return f
                })
            }

            function Xg(a, c) {
                var b = Gb(a),
                    d = b.l("visorc");
                H(d, ["w", "b"]) || (d = "");
                Yg(a) && Zg(a, Kc, "visorc") && !pl.test(ib(a) || "") || (d = "b");
                var e = n(c, "settings.webvisor.recp");
                if (!a.isFinite(e) || 0 > e || 1 < e) d = "w";
                d || (d = S(a).l("hitId") % 1E4 / 1E4 < e ? "w" : "b");
                b.o("visorc", d, 30);
                return "w" === d
            }

            function ol(a, c, b, d) {
                var e = a.document,
                    f = [],
                    g = na(a),
                    h = ":submit" + Math.random(),
                    k = [],
                    l = C(c.flush, c),
                    m = Ca(function(r, t) {
                        A(a, "hfv." + r, function() {
                            try {
                                var x = t.type
                            } catch (I) {
                                return
                            }
                            x = H(x, d);
                            c.push(t, {
                                type: r
                            });
                            x && l()
                        })()
                    }),
                    p = A(a, "sfv",
                        function() {
                            if (!Qe(a)) {
                                var r = b(a),
                                    t = ql(a);
                                z(function(x) {
                                    f.push(g.C(x.target, [x.event], m(x.type)))
                                }, r);
                                z(function(x) {
                                    f.push(g.C(x.target, [x.event], A(a, "hff." + x.type + "." + x.event, function(I) {
                                        z(la({
                                            b: a,
                                            ea: I,
                                            flush: l
                                        }), x.M)
                                    })))
                                }, t);
                                k = $g(a, "form", e);
                                e.attachEvent && (r = $g(a, "form *", e), z(function(x) {
                                    f.push(g.C(x, ["submit"], m("form")))
                                }, k), z(function(x) {
                                    Re(x) && f.push(g.C(x, ["change"], m("formInput")))
                                }, r));
                                z(function(x) {
                                    var I = x.submit;
                                    if (P(I) || "object" === typeof I && rl.test("" + I)) x[h] = I, x.submit = A(a, "fv", function() {
                                        var aa = {
                                            target: x,
                                            type: "submit"
                                        };
                                        m("document")(aa);
                                        return x[h]()
                                    })
                                }, k)
                            }
                        }),
                    q = A(a, "ufv", function() {
                        z(Ea, f);
                        z(function(r) {
                            r && (r.submit = r[h])
                        }, k);
                        c.flush()
                    });
                return {
                    start: p,
                    stop: q
                }
            }

            function sl(a, c) {
                var b = V(function(e) {
                        return 0 < e.M.length
                    }, c),
                    d = ah({
                        target: a.document,
                        type: "document"
                    });
                return y(u(O, d, tl(a)), b)
            }

            function bh(a, c) {
                var b = a.b,
                    d = [],
                    e = c.form;
                if (!c[Ka] && e) {
                    var f = e.elements;
                    e = e.length;
                    for (var g = 0; g < e; g += 1) {
                        var h = f[g];
                        zd(h) && !h[Ka] && Sa(d, Tb(b, h))
                    }
                } else Sa(d, Tb(b, c));
                return d
            }

            function Se(a) {
                if (Lc) {
                    Lc = !1;
                    var c =
                        jb(a.b),
                        b = [];
                    Ya(a.b, b, 15) ? a = [] : (N(b, c), a = b);
                    return a
                }
            }

            function ch(a) {
                if (!Lc) {
                    Lc = !0;
                    a = jb(a.b);
                    var c = [];
                    wb(c, 14);
                    N(c, a);
                    return c
                }
            }

            function ul(a, c, b) {
                var d = c[Ka];
                if (d) {
                    a: {
                        var e = jb(a),
                            f = c[Ka];
                        if (0 < f) {
                            var g = [];
                            c = Te(a, c);
                            var h = Ub[f],
                                k = c[0] + "x" + c[1],
                                l = c[2] + "x" + c[3];
                            if (k !== h.Af) {
                                h.Af = k;
                                if (Ya(a, g, 9)) {
                                    a = [];
                                    break a
                                }
                                N(g, e);
                                N(g, f);
                                N(g, c[0]);
                                N(g, c[1])
                            }
                            if (l !== h.size) {
                                h.size = l;
                                if (Ya(a, g, 10)) {
                                    a = [];
                                    break a
                                }
                                N(g, e);
                                N(g, f);
                                N(g, c[2]);
                                N(g, c[3])
                            }
                            if (g.length) {
                                a = g;
                                break a
                            }
                        }
                        a = []
                    }
                    Sa(b, a)
                }
                return d
            }

            function kc(a, c, b) {
                void 0 ===
                    b && (b = !1);
                if ("button" === c.getAttribute("type")) return !1;
                var d = vd(c),
                    e = Ad(c);
                a = dh(a, c) || b && e;
                return !d && a
            }

            function dh(a, c) {
                return eh(a, c) || Mc(a, c) ? !0 : Ec(a, c)
            }

            function Ad(a) {
                if (!a) return !1;
                var c = a.placeholder,
                    b = a.type;
                a = V(fh, [a.className, a.id, a.name]);
                return b && H(b, vl) || Ta(Xa(wl), a) || fh(c) && xl.test(c)
            }

            function fh(a) {
                return !!(a && 2 < a.length)
            }

            function ud(a) {
                try {
                    var c = ya(a);
                    if (H(c, Ue)) {
                        if ("INPUT" === c) {
                            var b = a.type;
                            return !b || H(b.toLocaleLowerCase(), yl)
                        }
                        return !0
                    }
                } catch (d) {}
                return !1
            }

            function gh(a, c) {
                return c &&
                    Vb("(ym-disable-submit|-metrika-noform)", c)
            }

            function vd(a) {
                return a && Vb("ym-record-keys", a)
            }

            function zl(a, c) {
                return F("", y(function(b) {
                    return a.isNaN(b) ? Al.test(b) ? (b = b.toUpperCase() === b ? Bl : Cl, String.fromCharCode(Wa(a, b[0], b[1]))) : b : "" + Wa(a, 0, 9)
                }, c.split("")))
            }

            function Ec(a, c) {
                if (wa(c)) return !1;
                if (Me(c)) {
                    var b = c.parentNode;
                    return (wa(b) ? 0 : 11 === b.nodeType) ? !1 : Ec(a, c.parentNode)
                }
                if (Dl.test(c.className)) return !0;
                b = hh(a);
                if (!b) return !1;
                var d = b.call(c, ".ym-hide-content *");
                return d && (El.test(c.className) ||
                    b.call(c, ".ym-hide-content .ym-show-content *")) ? !1 : d
            }

            function Fl(a, c, b, d, e) {
                var f;
                c = {
                    H: sa(),
                    F: (f = {}, f["page-url"] = c, f["pointer-click"] = b, f)
                };
                d(c, e)["catch"](A(a, "c.s.c"))
            }

            function Gl(a, c, b, d, e) {
                if (Nc(a, "ymDisabledClickmap") || Qe(a) || !c || !c.element) return !1;
                a = ya(c.element);
                if (e && !e(c.element, a) || H(c.button, [2, 3]) && "A" !== a || Ta(xa(a), d)) return !1;
                d = c.element;
                if (c && b) {
                    if (50 > c.time - b.time) return !1;
                    e = Math.abs(b.position.x - c.position.x);
                    a = Math.abs(b.position.y - c.position.y);
                    c = c.time - b.time;
                    if (b.element ===
                        d && 2 > e && 2 > a && 1E3 > c) return !1
                }
                for (; d;) {
                    if (Hl(d)) return !1;
                    d = d.parentElement
                }
                return !0
            }

            function Il(a, c) {
                var b = null;
                try {
                    if (b = c.target || c.srcElement) !b.ownerDocument && b.documentElement ? b = b.documentElement : b.ownerDocument !== a.document && (b = null)
                } catch (d) {}
                return b
            }

            function Jl(a) {
                var c = a.which;
                a = a.button;
                return c || void 0 === a ? c : 1 === a || 3 === a ? 1 : 2 === a ? 3 : 4 === a ? 2 : 0
            }

            function ih(a, c) {
                var b = Sb(a),
                    d = Ve(a);
                return {
                    x: c.pageX || c.clientX + d.x - (b.clientLeft || 0) || 0,
                    y: c.pageY || c.clientY + d.y - (b.clientTop || 0) || 0
                }
            }

            function Kl(a) {
                var c =
                    A(a, "i.clch", Ll);
                na(a).C(a.document, ["click"], C(c, null, a), {
                    passive: !1
                });
                return function(b) {
                    var d = qa.Pa,
                        e = a.Ya[qa.Nb],
                        f = !!e._informer;
                    e._informer = B({
                        domain: "informer.yandex.ru"
                    }, b);
                    f || lc(a, {
                        src: d + "//informer.yandex.ru/metrika/informer.js"
                    })
                }
            }

            function Ml(a) {
                var c = void 0;
                void 0 === c && (c = Nl);
                var b = n(a, "navigator") || {};
                c = y(w(b, n), c);
                c = F("x", c);
                try {
                    var d = n(a, "navigator.getGamepads");
                    var e = Da(d, "getGamepads") && a.navigator.getGamepads() || []
                } catch (f) {
                    e = []
                }
                return c + "x" + mc(e)
            }

            function Ol(a) {
                try {
                    var c = mc(a) ? a : [];
                    return F(",", [a.name, a.description, u(ka, oc(Boolean), kb(Pl), Oc(","))(c)])
                } catch (b) {
                    return ""
                }
            }

            function Pl(a) {
                return F(",", [a.description, a.suffixes, a.type])
            }

            function vk(a) {
                return J(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    c[d + " precision"] = n(e, "precision") || "n";
                    c[d + " precision rangeMin"] = n(e, "rangeMin") || "n";
                    c[d + " precision rangeMax"] = n(e, "rangeMax") || "n";
                    return c
                }, {}, [
                    ["webgl vertex shader high float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_FLOAT)],
                    ["webgl vertex shader medium", a.getShaderPrecisionFormat(a.VERTEX_SHADER,
                        a.MEDIUM_FLOAT)],
                    ["webgl vertex shader low float", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_FLOAT)],
                    ["webgl fragment shader high float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_FLOAT)],
                    ["webgl fragment shader medium float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_FLOAT)],
                    ["webgl fragment shader low float", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_FLOAT)],
                    ["webgl vertex shader high int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.HIGH_INT)],
                    ["webgl vertex shader medium int",
                        a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.MEDIUM_INT)
                    ],
                    ["webgl vertex shader low int", a.getShaderPrecisionFormat(a.VERTEX_SHADER, a.LOW_INT)],
                    ["webgl fragment shader high int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.HIGH_INT)],
                    ["webgl fragment shader medium int", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.MEDIUM_INT)],
                    ["webgl fragment shader low int precision", a.getShaderPrecisionFormat(a.FRAGMENT_SHADER, a.LOW_INT)]
                ])
            }

            function uk(a, c) {
                var b = c.createBuffer();
                if (!b || !c.getParameter || !pa("getParameter",
                        c.getParameter)) return "";
                c.bindBuffer(c.ARRAY_BUFFER, b);
                var d = new a.Float32Array(Ql);
                c.bufferData(c.ARRAY_BUFFER, d, c.STATIC_DRAW);
                b.Rh = 3;
                b.ei = 3;
                d = c.createProgram();
                var e = c.createShader(c.VERTEX_SHADER);
                if (!d || !e) return "";
                c.shaderSource(e, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}");
                c.compileShader(e);
                c.attachShader(d, e);
                e = c.createShader(c.FRAGMENT_SHADER);
                if (!e) return "";
                c.shaderSource(e, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}");
                c.compileShader(e);
                c.attachShader(d, e);
                c.linkProgram(d);
                c.useProgram(d);
                d.cj = c.getAttribLocation(d, "attrVertex");
                d.gi = c.getUniformLocation(d, "uniformOffset");
                c.enableVertexAttribArray(d.Rj);
                c.vertexAttribPointer(d.cj, b.Rh, c.FLOAT, !1, 0, 0);
                c.uniform2f(d.gi, 1, 1);
                c.drawArrays(c.TRIANGLE_STRIP, 0, b.ei);
                return c.canvas
            }

            function tk(a, c) {
                if (!P(a.Float32Array)) return !1;
                var b =
                    n(c, "canvas");
                if (!b || !pa("toDataUrl", b.toDataURL)) return !1;
                try {
                    c.createBuffer()
                } catch (d) {
                    return !1
                }
                return !0
            }

            function De(a, c) {
                c.clearColor(0, 0, 0, 1);
                c.enable(c.DEPTH_TEST);
                c.depthFunc(c.LEQUAL);
                c.clear(c.COLOR_BUFFER_BIT | c.DEPTH_BUFFER_BIT);
                return "[" + n(a, "0") + ", " + n(a, "1") + "]"
            }

            function Rl(a) {
                a = n(a, "screen") || {};
                return F("x", y(w(a, n), Sl))
            }

            function rk(a) {
                var c = n(a, "matchMedia");
                if (!c || !pa("matchMedia", c)) return "";
                var b = da("matchMedia", a);
                return J(function(d, e) {
                    d[e] = b("(" + e + ")");
                    return d
                }, {}, Tl)
            }

            function kk(a) {
                a =
                    ab(a);
                if (!a) return "";
                a = a("video");
                try {
                    var c = da("canPlayType", a),
                        b = Qb(function(d) {
                            return y(u(O, da("concat", d + "; codecs=")), Ul)
                        }, jh);
                    return y(c, [].concat(jh, b))
                } catch (d) {
                    return "canPlayType"
                }
            }

            function Vl(a) {
                a = n(a, "navigator") || {};
                return a.doNotTrack || a.msDoNotTrack || "unknown"
            }

            function Wl(a, c, b, d, e) {
                var f = e(W);
                return Xl(a, b, c)(Hb(function(g) {
                    z(function(h) {
                        We(a, "d.s", h)
                    }, g);
                    g = e(hb);
                    d.o("ds", g)
                }, function(g) {
                    var h = g.Fc,
                        k = g.host;
                    if (n(h, "settings")) return Db(ob("ds.e"));
                    d.o("ds", e(hb));
                    g = e(W) - f;
                    k = k[1];
                    var l,
                        m;
                    h = sa((l = {}, l.di = h, l.dit = g, l.dip = k, l));
                    l = (m = {}, m["page-url"] = Q(a).href, m);
                    return ma(a, "S", kh)({
                        H: h,
                        F: l
                    }, kh)["catch"](A(a, "ds.rs"))
                }))
            }

            function Yl(a, c, b, d, e) {
                return new L(function(f, g) {
                    var h = S(a);
                    if (h.l("dSync", !1)) return g();
                    h.o("dSync", !0);
                    h = d.l("ds", 0);
                    h = parseInt("" + h, 10);
                    return 60 >= c(hb) - h ? g() : Zl(a) ? f(void 0) : lh(e) ? g() : f($l(a, b))
                })
            }

            function Xl(a, c, b) {
                var d = ma(a, "s", c);
                return am(y(function(e) {
                    return bm(d(cm, y(function(f) {
                        var g = f[1],
                            h = f[2];
                        f = F("", y(function(k) {
                            return String.fromCharCode(k.charCodeAt(0) +
                                10)
                        }, f[0].split("")));
                        return "http" + (h ? "s" : "") + "://" + f + ":" + g + "/p"
                    }, e), {
                        lg: !1,
                        Ai: !0
                    }).then(function(f) {
                        return B({}, f, {
                            host: e[f.aj]
                        })
                    }))
                }, b))
            }

            function dm(a, c, b) {
                var d = c || {},
                    e = ma(a, "u", b),
                    f = Ja(a);
                return {
                    l: function(g, h) {
                        return R(d[g]) ? f.l(g, h) : d[g]
                    },
                    o: function(g, h) {
                        var k, l = "" + h;
                        d[g] = l;
                        f.o(g, l);
                        return e({
                            F: (k = {}, k.key = g, k.value = l, k)
                        }, [qa.Pa + "//mc.yandex.com/user_storage_set"], {})["catch"](A(a, "u.d.s.s"))
                    }
                }
            }

            function em(a, c) {
                if (a.Ti()) {
                    var b = null;
                    try {
                        b = c.target || c.srcElement
                    } catch (t) {}
                    if (b) {
                        3 === b.nodeType &&
                            (b = b.parentNode);
                        for (var d = b && b.nodeName && ("" + b.nodeName).toLowerCase(); n(b, "parentNode.nodeName") && ("a" !== d && "area" !== d || !b.href && !b.getAttribute("xlink:href"));) d = (b = b.parentNode) && b.nodeName && ("" + b.nodeName).toLowerCase();
                        var e = b.href ? b : null
                    } else e = null;
                    if (e && !Vb("ym-disable-tracklink", e)) {
                        var f = a.b,
                            g = a.globalStorage;
                        b = a.Tg;
                        var h = a.Ug,
                            k = a.Jh,
                            l = a.sender,
                            m = a.gh,
                            p = h.$b,
                            q = e.href;
                        d = Wb(e && e.innerHTML && e.innerHTML.replace(/<\/?[^>]+>/gi, ""));
                        d = q === d ? "" : d;
                        if (Vb("ym-external-link", e)) Bd(f, h, {
                            url: q,
                            ub: !0,
                            title: d,
                            sender: l
                        });
                        else {
                            p = p ? jc(f, p).hostname : Q(f).hostname;
                            m = RegExp("\\.(" + F("|", y(fm, m)) + ")$", "i");
                            var r = e.protocol + "//" + e.hostname + e.pathname;
                            m = mh.test(r) || mh.test(q) || m.test(q) || m.test(r);
                            e = e.hostname;
                            nh(p) === nh(e) ? m ? Bd(f, h, {
                                url: q,
                                mc: !0,
                                title: d,
                                sender: l
                            }) : ((k = (f = g.l("pai", D)()) && f + "-" + k) && b.o("pai", k), d && b.o("il", Wb(d).slice(0, 100))) : q && gm.test(q) || Bd(f, h, {
                                url: q,
                                rc: !0,
                                ub: !0,
                                mc: m,
                                title: d,
                                sender: l
                            })
                        }
                    }
                }
            }

            function Bd(a, c, b, d) {
                var e, f = sa();
                b.mc && f.o("dl", "1");
                b.ub && f.o("ln", "1");
                f = {
                    H: f,
                    title: b.title,
                    rc: !!b.rc,
                    N: b.N,
                    F: (e = {}, e["page-url"] = b.url, e["page-ref"] = c.$b || Q(a).href, e)
                };
                e = "Link";
                b.mc ? e = b.ub ? "Ext link - File" : "File" : b.ub && (e = "Ext link");
                b.sender(f, c).then(d || D).then(Bb(a, c, e + ". Counter " + c.id + ". Url: " + b.url, b))["catch"](A(a, "cl.p.s")).then(M([a, b.Qa || D, b.b], Ib))
            }

            function hm(a, c) {
                var b, d, e = (b = {}, b.string = !0, b.object = !0, b["boolean"] = c, b)[typeof c] || !1;
                a((d = {}, d.trackLinks = e, d))
            }

            function Cd(a, c) {
                return u(oh(c), Xe(a))
            }

            function Pc(a, c) {
                return u(im(c), Xe(a))
            }

            function Xe(a) {
                a = S(a);
                var c = a.l("dsjf") ||
                    la({});
                a.Na("dsjf", c);
                return c
            }

            function ph(a) {
                var c = Ye(a).isEnabled,
                    b = !1;
                try {
                    b = (b = 2 === (new a.Blob(["\u00e4"])).size) && 2 === (new a.Blob([new a.Uint8Array([1, 2])])).size
                } catch (d) {}
                return yd(Boolean, [!c, b, a.Uint8Array, n(a, "Uint8Array.prototype.slice")])
            }

            function Ze(a, c) {
                var b = c[1][3],
                    d = 0,
                    e = new a.Uint8Array(c[0]);
                return Xb([b], function(f, g) {
                    if (!f) return e;
                    f[0](a, f[2], e, d);
                    d += f[1];
                    g.push(f[3]);
                    return e
                })
            }

            function Dd(a, c, b) {
                a = c(b);
                c = [D, 0, 0];
                var d = [0, c, c, void 0];
                return Xb(a, function(e, f) {
                    var g = e[0],
                        h = e[1],
                        k = e[2];
                    if (0 === g) return k(d, h), d;
                    if (void 0 === h || null === h) return d;
                    var l = g >> 3;
                    if (g & 1) Yb(d, bb(l)), h = k(h), l & 2 && Yb(d, bb(h[1])), Yb(d, h);
                    else if (g & 4)
                        for (g = h.length - 1; 0 <= g;) {
                            var m = k(h[g]);
                            m.push([0, 0, $e]);
                            m.push([0, bb(l), Yb]);
                            m.unshift([0, 0, af]);
                            f.push.apply(f, m);
                            --g
                        } else if (g & 2) {
                            k = e[2];
                            var p = e[3],
                                q = e[4],
                                r = e[5],
                                t = ea(h);
                            for (g = t.length - 1; 0 <= g;) m = t[g], m = [
                                [0, 0, af],
                                [q, h[m], r],
                                [k, m, p],
                                [0, 0, $e],
                                [0, bb(l), Yb]
                            ], f.push.apply(f, m), --g
                        } else m = k(h), m.push([0, 0, $e]), m.push([0, bb(l), Yb]), m.unshift([0, 0, af]), f.push.apply(f,
                            m);
                    return d
                })
            }

            function af(a) {
                var c = a[1],
                    b = a[0],
                    d = a[2];
                a[3] ? (a[0] = a[3][0], a[1] = a[3][1], a[2] = a[3][2], a[3] = a[3][3]) : (a[0] = 0, a[1] = [D, 0, 0], a[2] = a[1]);
                Yb(a, bb(b));
                b && (a[2][3] = c[3], a[2] = d, a[0] += b)
            }

            function $e(a) {
                a[3] = [a[0], a[1], a[2], a[3]];
                a[1] = [D, 0, 0];
                a[2] = a[1];
                a[0] = 0
            }

            function Yb(a, c) {
                a[0] += c[1];
                a[2][3] = c;
                a[2] = c
            }

            function bf(a) {
                return [
                    [385, a.Ag, bb],
                    [336, a.ui, jm],
                    [272, a.Dg, km],
                    [208, a.event, lm],
                    [144, a.Zh, mm],
                    [80, a.page, nm]
                ]
            }

            function om(a) {
                return [
                    [321, a.end, xb],
                    [273, a.Pg, pm],
                    [193, a.page, G],
                    [144, a.data, bf],
                    [65,
                        a.K, G
                    ]
                ]
            }

            function qh(a) {
                return [
                    [84, a.buffer, om]
                ]
            }

            function qm(a) {
                return [
                    [129, a.position, G],
                    [81, a.name, K]
                ]
            }

            function rm(a) {
                return [
                    [81, a.name, K]
                ]
            }

            function sm(a) {
                return [
                    [81, a.name, K]
                ]
            }

            function km(a) {
                return [
                    [593, a.Zi, K],
                    [532, a.Bi, qm],
                    [449, a.Ke, G],
                    [401, a.ti, K],
                    [340, a.Ni, rm],
                    [276, a.Fg, sm],
                    [209, a.ni, K],
                    [145, a.oi, K],
                    [65, a.id, bb]
                ]
            }

            function tm(a) {
                return [
                    [513, a.Ke, G],
                    [489, a.Wh, Qc],
                    [385, a.Xa, G],
                    [321, a.height, G],
                    [257, a.width, G],
                    [193, a.y, G],
                    [129, a.x, G],
                    [65, a.id, bb]
                ]
            }

            function jm(a) {
                return [
                    [129, a.Xa, G],
                    [84, a.Eg, tm]
                ]
            }

            function um(a) {
                return [
                    [81, a.hash, K]
                ]
            }

            function vm(a) {
                return [
                    [209, a.stack, K],
                    [145, a.xj, K],
                    [81, a.code, K]
                ]
            }

            function wm(a) {
                return [
                    [193, a.orientation, G],
                    [129, a.height, G],
                    [65, a.width, G]
                ]
            }

            function xm(a) {
                return [
                    [84, a.pc, zm]
                ]
            }

            function zm(a) {
                return [
                    [273, a.qc, K],
                    [193, a.nf, xb],
                    [145, a.key, K],
                    [65, a.id, G]
                ]
            }

            function Am(a) {
                return [
                    [145, a.value, K],
                    [81, a.Kj, K]
                ]
            }

            function Bm(a) {
                return [
                    [149, a.Kb, K],
                    [81, a.method, K]
                ]
            }

            function Cm(a) {
                return [
                    [257, a.ab, G],
                    [193, a.bb, G],
                    [129, a.height, G],
                    [65, a.width, G]
                ]
            }

            function Dm(a) {
                return [
                    [144,
                        a.og, rh
                    ],
                    [80, a.mg, rh]
                ]
            }

            function rh(a) {
                return [
                    [193, a.y, G],
                    [129, a.x, G],
                    [105, a.level, Qc]
                ]
            }

            function Em(a) {
                return [
                    [84, a.touches, Fm]
                ]
            }

            function Fm(a) {
                return [
                    [297, a.force, Qc],
                    [233, a.y, Qc],
                    [169, a.x, Qc],
                    [81, a.id, K]
                ]
            }

            function Gm(a) {
                return [
                    [193, a.hidden, xb],
                    [129, a.checked, xb],
                    [81, a.value, K]
                ]
            }

            function Hm(a) {
                return [
                    [257, a.Pe, G],
                    [193, a.Xf, G],
                    [129, a.end, G],
                    [65, a.start, G]
                ]
            }

            function Im() {
                return []
            }

            function Jm(a) {
                return [
                    [193, a.page, xb],
                    [129, a.y, G],
                    [65, a.x, G]
                ]
            }

            function Km(a) {
                return [
                    [129, a.y, G],
                    [65, a.x, G]
                ]
            }

            function Lm(a) {
                return [
                    [84,
                        a.va, Mm
                    ]
                ]
            }

            function Mm(a) {
                return [
                    [257, a.index, G],
                    [209, a.Od, K],
                    [145, a.style, K],
                    [65, a.target, G]
                ]
            }

            function lm(a) {
                return [
                    [1168, a.Ii, Lm],
                    [1104, a.Ih, um],
                    [1040, a.fh, vm],
                    [976, a.Xg, wm],
                    [912, a.Th, xm],
                    [848, a.xi, Cm],
                    [784, a.gj, Dm],
                    [720, a.Lj, Am],
                    [656, a.Hj, Bm],
                    [592, a.Oi, Em],
                    [528, a.Mg, Gm],
                    [464, a.Di, Hm],
                    [400, a.dj, Im],
                    [336, a.Ci, Jm],
                    [272, a.Xh, Km],
                    [193, a.L, Ed],
                    [129, a.target, Ed],
                    [65, a.type, bb]
                ]
            }

            function mm(a) {
                return [
                    [257, a.L, Ed],
                    [208, a.V, Nm],
                    [129, a.K, G],
                    [65, a.target, G]
                ]
            }

            function Nm(a) {
                return [
                    [148, a.va, Om],
                    [65, a.index,
                        G
                    ]
                ]
            }

            function Om(a) {
                return [
                    [276, a.d, Pm],
                    [212, a.Wc, Qm],
                    [148, a.He, Rm],
                    [84, a.Ee, Sm]
                ]
            }

            function Pm(a) {
                return [
                    [193, a.ra, G],
                    [144, a.Rb, sh],
                    [65, a.id, G]
                ]
            }

            function Qm(a) {
                return [
                    [193, a.ra, G],
                    [146, a.kb, 81, K, 144, sh],
                    [65, a.id, G]
                ]
            }

            function sh(a) {
                return [
                    [193, a.r, xb],
                    [145, a.n, K],
                    [81, a.tc, K]
                ]
            }

            function Rm(a) {
                return [
                    [641, a.Ha, xb],
                    [577, a.ra, G],
                    [513, a.Jd, G],
                    [465, a.Rb, K],
                    [402, a.kb, 81, K, 145, K],
                    [321, a.Sd, G],
                    [273, a.wf, K],
                    [193, a.Pd, G],
                    [145, a.uf, K],
                    [65, a.id, G]
                ]
            }

            function Sm(a) {
                return [
                    [321, a.ra, G],
                    [257, a.Pd, G],
                    [193, a.Jd, G],
                    [129,
                        a.Sd, G
                    ],
                    [65, a.id, G]
                ]
            }

            function nm(a) {
                return [
                    [321, a.ta, Tm],
                    [273, a.Mc, K],
                    [193, a.L, Ed],
                    [148, a.content, Um],
                    [80, a.V, Vm]
                ]
            }

            function Um(a) {
                return [
                    [513, a.hidden, xb],
                    [449, a.Ud, G],
                    [385, a.next, G],
                    [337, a.content, K],
                    [257, a.parent, G],
                    [210, a.attributes, 81, K, 145, K],
                    [145, a.name, K],
                    [65, a.id, G]
                ]
            }

            function Vm(a) {
                return [
                    [724, a.Dj, Wm],
                    [656, a.location, Xm],
                    [592, a.viewport, th],
                    [528, a.screen, th],
                    [449, a.df, xb],
                    [401, a.Ie, K],
                    [337, a.referrer, K],
                    [273, a.gg, K],
                    [209, a.Fe, K],
                    [145, a.title, K],
                    [81, a.doctype, K]
                ]
            }

            function Wm(a) {
                return [
                    [133,
                        a.scroll, G
                    ],
                    [65, a.target, G]
                ]
            }

            function Xm(a) {
                return [
                    [209, a.path, K],
                    [145, a.protocol, K],
                    [81, a.host, K]
                ]
            }

            function th(a) {
                return [
                    [129, a.height, G],
                    [65, a.width, G]
                ]
            }

            function K(a) {
                var c = Ym({}, a, [], 0);
                return c ? [Zm, c, a] : [uh, 1, 0]
            }

            function pm(a) {
                return [$m, a.length, a]
            }

            function xb(a) {
                return [uh, 1, a ? 1 : 0]
            }

            function Tm(a) {
                a = vh(a);
                var c = a[0],
                    b = a[1],
                    d = (b >>> 28 | c << 4) >>> 0;
                c >>>= 24;
                return [wh, 0 === c ? 0 === d ? 16384 > b ? 128 > b ? 1 : 2 : 2097152 > b ? 3 : 4 : 16384 > d ? 128 > d ? 5 : 6 : 2097152 > d ? 7 : 8 : 128 > c ? 9 : 10, a]
            }

            function Qc(a) {
                return [an, 4, a]
            }

            function Ed(a) {
                return bb((a <<
                    1 ^ a >> 31) >>> 0)
            }

            function G(a) {
                return 0 > a ? [wh, 10, vh(a)] : bb(a)
            }

            function bb(a) {
                return [bn, 128 > a ? 1 : 16384 > a ? 2 : 2097152 > a ? 3 : 268435456 > a ? 4 : 5, a]
            }

            function bn(a, c, b, d) {
                for (a = c; 127 < a;) b[d++] = a & 127 | 128, a >>>= 7;
                b[d] = a
            }

            function uh(a, c, b, d) {
                b[d] = c
            }

            function $m(a, c, b, d) {
                for (a = 0; a < c.length; ++a) b[d + a] = c[a]
            }

            function xh(a) {
                return function(c, b, d, e) {
                    for (var f, g = 0, h = 0; h < b.length; ++h)
                        if (c = b.charCodeAt(h), 128 > c) a ? g += 1 : d[e++] = c;
                        else {
                            if (2048 > c) {
                                if (a) {
                                    g += 2;
                                    continue
                                }
                                d[e++] = c >> 6 | 192
                            } else {
                                if (55296 === (c & 64512) && 56320 === ((f = b.charCodeAt(h +
                                        1)) & 64512)) {
                                    if (a) {
                                        g += 4;
                                        continue
                                    }
                                    c = 65536 + ((c & 1023) << 10) + (f & 1023);
                                    ++h;
                                    d[e++] = c >> 18 | 240;
                                    d[e++] = c >> 12 & 63 | 128
                                } else {
                                    if (a) {
                                        g += 3;
                                        continue
                                    }
                                    d[e++] = c >> 12 | 224
                                }
                                d[e++] = c >> 6 & 63 | 128
                            }
                            d[e++] = c & 63 | 128
                        }
                    return a ? g : e
                }
            }

            function an(a, c, b, d) {
                return cn(a)(a, c, b, d)
            }

            function dn(a, c, b, d) {
                var e = 0 > c ? 1 : 0;
                e && (c = -c);
                if (0 === c) Rc(0 < 1 / c ? 0 : 2147483648, b, d);
                else if (a.isNaN(c)) Rc(2143289344, b, d);
                else if (3.4028234663852886E38 < c) Rc((e << 31 | 2139095040) >>> 0, b, d);
                else if (1.1754943508222875E-38 > c) Rc((e << 31 | a.Math.round(c / 1.401298464324817E-45)) >>>
                    0, b, d);
                else {
                    var f = a.Math.floor(a.Math.log(c) / Math.LN2);
                    Rc((e << 31 | f + 127 << 23 | Math.round(c * a.Math.pow(2, -f) * 8388608) & 8388607) >>> 0, b, d)
                }
            }

            function Rc(a, c, b) {
                c[b] = a & 255;
                c[b + 1] = a >>> 8 & 255;
                c[b + 2] = a >>> 16 & 255;
                c[b + 3] = a >>> 24
            }

            function wh(a, c, b, d) {
                a = c[0];
                for (c = c[1]; a;) b[d++] = c & 127 | 128, c = (c >>> 7 | a << 25) >>> 0, a >>>= 7;
                for (; 127 < c;) b[d++] = c & 127 | 128, c >>>= 7;
                b[d++] = c
            }

            function vh(a) {
                if (!a) return [0, 0];
                var c = 0 > a;
                c && (a = -a);
                var b = a >>> 0;
                a = (a - b) / 4294967296 >>> 0;
                c && (a = ~a >>> 0, b = ~b >>> 0, 4294967295 < ++b && (b = 0, 4294967295 < ++a && (a = 0)));
                return [a,
                    b
                ]
            }

            function Fd(a) {
                return ca(a) ? y(Fd, a) : wa(a) || "object" !== typeof a ? a : J(function(c, b) {
                    var d = b[0],
                        e = b[1],
                        f = en[d];
                    R(f) && (f = d);
                    e = H(f, fn) ? e : Fd(e);
                    f ? c[f] = e : c[d] = e;
                    return c
                }, {}, Aa(a))
            }

            function Bb(a, c, b, d) {
                return yh(c) ? D : w(M(fa([a], d ? [b + ". Params:", d] : [b]), vb), Ea)
            }

            function vb() {
                var a = Ba(arguments),
                    c = a.slice(1);
                Gd(a[0]).log.apply(vb, c)
            }

            function Ye(a) {
                var c = Gb(a),
                    b = Q(a);
                c = "1" === c.l("debug");
                b = -1 < b.href.indexOf("_ym_debug=1");
                a = a._ym_debug;
                return {
                    Gh: c,
                    Oh: a || b,
                    isEnabled: Ta(Boolean, [c, a, b])
                }
            }

            function gn(a, c, b) {
                var d;
                (d = ta[c]) || (d = Fa);
                d = d.slice();
                d.unshift(hn);
                d.unshift(jn);
                return y(u(zh([a, c, b]), Ea), d)
            }

            function Ah(a, c) {
                var b = Q(a),
                    d = b.href,
                    e = b.host,
                    f = -1;
                if (!Na(c) || R(c)) return d;
                b = c.replace(Bh, "");
                if (-1 !== b.search(kn)) return b;
                var g = b.charAt(0);
                if ("?" === g && (f = d.search(/\?/), -1 === f) || "#" === g && (f = d.search(/#/), -1 === f)) return d + b;
                if (-1 !== f) return d.substr(0, f) + b;
                if ("/" === g) {
                    if (f = d.indexOf(e), -1 !== f) return d.substr(0, f + e.length) + b
                } else return d = d.split("/"), d[d.length - 1] = b, F("/", d);
                return ""
            }

            function Ch(a) {
                return {
                    $: function(c,
                        b) {
                        if (!c.H) return b();
                        var d = S(a).l("fid");
                        !Dh && d && (Sc(c, "fid", d), Dh = !0);
                        return b()
                    }
                }
            }

            function Eh(a) {
                return {
                    $: function(c, b) {
                        var d = c.H;
                        if (d) {
                            var e = S(a).l("adBlockEnabled");
                            e && d.o("adb", e)
                        }
                        b()
                    }
                }
            }

            function jn(a) {
                return {
                    $: function(c, b) {
                        Pe(a) || b()
                    }
                }
            }

            function Pe(a) {
                var c;
                return c = (c = !!S(a).l("oo")) || Qe(a)
            }

            function ln(a) {
                a = mn(a);
                return nn[a] || a
            }

            function on(a) {
                a = Fh(a);
                return pn[a] || "com"
            }

            function La(a, c) {
                var b = S(a).l("counters", {}),
                    d = T(c);
                return b[d]
            }

            function hn(a, c, b) {
                return {
                    $: function(d, e) {
                        qn(a, d, b, e)
                    }
                }
            }

            function qn(a, c, b, d) {
                var e = c.H;
                if (b.ej || !e) d();
                else {
                    var f = cf(a),
                        g = Fc(a, "");
                    d = u(function() {
                        var r = Gh(f);
                        r = "" + r + rn(r, g);
                        e.o("gdpr", r);
                        Sc(c, "gdpr", r)
                    }, d);
                    if (3 === b.id) d();
                    else {
                        var h = S(a),
                            k = h.l("f1");
                        if (k) k(d);
                        else if (k = (k = Gh(f)) ? y(w(Hd, n), k.split(",")) : [], Hh(k)) d();
                        else {
                            var l = df(a),
                                m = Q(a),
                                p = l && (-1 !== m.href.indexOf("yagdprcheck=1") || g.l("yaGdprCheck"));
                            m = g.l("gdpr");
                            g.l("yandex_login") ? (k.push("13"), g.o("gdpr", pc, 525600)) : l ? H(m, Jb) ? m === ef ? k.push("12") : k.push("3") : Ih(a) || Id(a) ? k.push("17") : sn(a) && k.push("28") :
                                k.push("14");
                            var q = w(f, tn);
                            Hh(k) ? (z(q, k), d()) : (Jd.push(d), h.o("f1", function(r, t) {
                                var x = 0;
                                if (t) {
                                    var I = gb(a, t) || "";
                                    x += I.length
                                }
                                Jd.push(r);
                                1E6 >= x && Jd.push(r)
                            }), (0, Jh[0])(a).then(U("params.eu")).then(function(r) {
                                if (r || p) {
                                    g.o("gdpr_popup", ef);
                                    un(a, b);
                                    if (tb(a)) return vn(a, q, b);
                                    var t = Kh(a, f);
                                    if (t) return wn(a, q, t, b)
                                }
                                r || q("8");
                                return L.resolve({
                                    value: pc,
                                    Bd: !0
                                })
                            }).then(function(r) {
                                g.Ub("gdpr_popup");
                                if (r) {
                                    var t = r.value;
                                    r = r.Bd;
                                    H(t, Jb) && g.o("gdpr", t, r ? void 0 : 525600)
                                }
                                t = Xb(Jd, Ea);
                                Zb(a, t, 20)(Hb(A(a, "gdr"), D));
                                h.o("f1",
                                    Ea)
                            })["catch"](A(a, "gdp.a")))
                        }
                    }
                }
            }

            function vn(a, c, b) {
                var d = Kd(a, b);
                return new L(function(e) {
                    var f;
                    if (d) {
                        var g = d.X,
                            h = u(w("4", c), w(null, e)),
                            k = X(a, h, 2E3, "gdp.f.t");
                        d.Tf((f = {}, f.type = "isYandex", f)).then(function(l) {
                            l.isYandex ? (c("5"), g.C(F(",", fa(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], ff)), function(m) {
                                e({
                                    value: Lh(m[1].type)
                                })
                            })) : (c("6"), e(null))
                        })["catch"](h).then(M([a, k], oa))
                    } else e({
                        value: ef,
                        Bd: !0
                    })
                })
            }

            function un(a, c) {
                var b = Kd(a, c);
                b && b.X.C("isYandex", function() {
                    var d;
                    return d = {
                            type: "isYandex"
                        },
                        d.isYandex = df(a), d
                });
                return b
            }

            function wn(a, c, b, d) {
                var e = xn(a, d.fj),
                    f = Kd(a, d);
                if (!f) return L.resolve({
                    value: pc,
                    Bd: !0
                });
                var g = lc(a, {
                    src: "https://yastatic.net/s3/gdpr/popup/v2/" + e + ".js"
                });
                return new L(function(h, k) {
                    g ? (c("7"), g.onerror = function() {
                        var l;
                        c("9");
                        f.Sf((l = {}, l.type = "GDPR-ok-view-default", l));
                        h(null)
                    }, g.onload = function() {
                        c("10");
                        b.C(F(",", fa(["GDPR-ok-view-default", "GDPR-ok-view-detailed"], ff)), function(l) {
                            var m;
                            l = l.type;
                            f.Sf((m = {}, m.type = l, m));
                            h({
                                value: Lh(l)
                            })
                        })
                    }) : (c("9"), k(ob("gdp.e")))
                })
            }

            function xn(a, c) {
                var b = c || Fh(a);
                return H(b, yn) ? b : "en"
            }

            function Mh(a, c) {
                var b = Nh(a, c),
                    d = [],
                    e = [];
                if (!b) return null;
                var f = zn(a, b.ce),
                    g = An(f);
                b.X.C("initToParent", function(h) {
                    g(d, b.mb[h[1].counterId])
                }).C("parentConnect", function(h) {
                    g(e, b.zb[h[1].counterId])
                });
                return {
                    X: b.X,
                    Oj: function(h, k) {
                        return new L(function(l, m) {
                            b.ce(h, k, function(p, q) {
                                l([p, q])
                            });
                            X(a, w(ob(), m), 5100, "is.o")
                        })
                    },
                    Sf: function(h) {
                        var k = {
                            Uf: [],
                            ue: [],
                            data: h
                        };
                        d.push(k);
                        return f(b.mb, k, h)
                    },
                    Tf: function(h) {
                        var k = {
                            Uf: [],
                            ue: [],
                            data: h
                        };
                        e.push(k);
                        return f(b.zb, k, h)
                    }
                }
            }

            function Ld() {
                return function(a, c, b) {
                    return {
                        $: function(d, e) {
                            var f, g = d.H,
                                h = d.F;
                            if (g && h) {
                                var k = H(h["wv-type"], Bn);
                                if (!h["wv-type"] || k) {
                                    var l = ba(a);
                                    g.ie("rqnl", 1);
                                    g = g.b();
                                    for (var m = Tc(a), p = 1; m[p];) p += 1;
                                    d.Cb = p;
                                    m[p] = (f = {}, f.protocol = qa.Pa, f.host = "mc.yandex.com", f.resource = k ? "webvisor" : "watch", f.postParams = d.Y, f.time = l(W), f.counterType = b.Z, f.params = h, f.browserInfo = g, f.counterId = b.id, f.ghid = qc(a), f);
                                    gf(a)
                                }
                            }
                            e()
                        },
                        Ea: function(d, e) {
                            Oh(a, d);
                            e()
                        }
                    }
                }
            }

            function Oh(a, c) {
                var b = Tc(a);
                c.H && !Ma(b) &&
                    (delete b[c.Cb], gf(a))
            }

            function gf(a) {
                var c = Tc(a);
                Ja(a).o("retryReqs", c)
            }

            function Md(a, c, b) {
                var d = Nd(a, c, b);
                return function(e, f, g) {
                    var h = B({
                        H: sa()
                    }, e);
                    h.F || (h.F = {});
                    var k = h.F;
                    k.wmode = "0";
                    k["wv-part"] = "" + g;
                    k["wv-hit"] = k["wv-hit"] || "" + qc(a);
                    k["page-url"] = k["page-url"] || a.location.href;
                    e = k["wv-type"] ? L.resolve(k["wv-type"]) : Cn(a, f, h);
                    k.rn = k.rn || "" + Wa(a);
                    return e.then(function(l) {
                        var m;
                        k["wv-type"] = l;
                        l = "webvisor/" + f.id;
                        return d(B(h, {
                            F: k
                        }), l, {
                            Ab: (m = {}, m["Content-Type"] = "text/plain", m),
                            jg: "POST"
                        })
                    })
                }
            }

            function Cn(a,
                c, b) {
                return Ha(a, c, function(d) {
                    var e = b.kf;
                    d = !!n(d, "settings.publisher.schema");
                    var f = "4",
                        g = "2";
                    e && (f = "5", g = "3");
                    e = !!b.H.l("bt");
                    return d && !e ? f : g
                })
            }

            function Dn(a, c, b, d) {
                c = d.l("cc");
                d = M(["cc", ""], d.o);
                if (c) {
                    var e = c.split("&");
                    c = e[0];
                    if ((e = (e = e[1]) && parseInt(e, 10)) && 1440 < ba(a)(hb) - e) return d();
                    b.o("cc", c)
                } else xa(0)(c) || d()
            }

            function En(a, c, b, d) {
                return Ha(a, c, function(e) {
                    if ("0" === n(e, "settings.pcs") && !Uc(a))
                        if (e = d.l("zzlc"), R(e) || Ma(e) || "na" === e) {
                            e = "ru";
                            var f = Ph(a, 68),
                                g = Qh(a, 79);
                            if (f || g) e = "md";
                            if (f = ab(a)) {
                                var h =
                                    f("iframe");
                                B(h.style, {
                                    display: "none",
                                    width: "1px",
                                    height: "1px",
                                    visibility: "hidden"
                                });
                                h.src = "https://mc.yandex." + e + Fn("L21ldHJpa2EvenpsYy5odG1s");
                                if (e = Sb(a)) {
                                    e.appendChild(h);
                                    var k = 0,
                                        l = na(a).C(a, ["message"], A(a, "zz.m", function(m) {
                                            (m = n(m, "data")) && m.substr && "__ym__zz" === m.substr(0, 8) && (rc(h), m = m.substr(8), d.o("zzlc", m), b.o("zzlc", m), l(), oa(a, k))
                                        }));
                                    k = X(a, u(l, w(h, rc)), 3E3)
                                }
                            }
                        } else b.o("zzlc", e)
                })
            }

            function Ha(a, c, b) {
                a = T(c);
                return Rh()(Gn(a)).then(b)
            }

            function Hn(a, c, b) {
                c = T(c);
                a = hf(a);
                b = B({
                    ih: a(W)
                }, b);
                return Rh()(In(c,
                    b))
            }

            function Jn(a, c, b) {
                var d, e;
                c = $a(w(a, n), Kn);
                c = R(c) ? null : n(a, c);
                if (n(a, "navigator.onLine") && c && c && n(c, "prototype.constructor.name")) {
                    var f = new c((d = {}, d.iceServers = [], d));
                    a = n(f, "createDataChannel");
                    P(a) && (C(a, f, "y.metrika")(), a = n(f, "createOffer"), P(a) && !a.length && (a = C(a, f)(), d = n(a, "then"), P(d) && C(d, a, function(g) {
                        var h = n(f, "setLocalDescription");
                        P(h) && C(h, f, g, D, D)()
                    })(), B(f, (e = {}, e.onicecandidate = function() {
                        var g, h = n(f, "close");
                        if (P(h)) {
                            h = C(h, f);
                            try {
                                var k = (g = n(f, "localDescription.sdp")) && g.match(/c=IN\s[\w\d]+\s([\w\d:.]+)/)
                            } catch (l) {
                                f.onicecandidate =
                                    D;
                                "closed" !== f.iceConnectionState && h();
                                return
                            }
                            k && 0 < k.length && (g = $b(k[1]), b.o("pp", g));
                            f.onicecandidate = D;
                            h()
                        }
                    }, e))))
                }
            }

            function Ln(a, c, b) {
                var d, e = Nh(a, c);
                if (e) {
                    e.X.C("gpu-get", function() {
                        var h;
                        return h = {}, h.type = "gpu-get", h.pu = b.l("pu"), h
                    });
                    var f = n(a, "opener");
                    if (f) {
                        var g = X(a, M([a, c, b], Sh), 200, "pu.m");
                        e.ce(f, (d = {}, d.type = "gpu-get", d), function(h, k) {
                            var l = n(k, "pu");
                            l && (oa(a, g), b.o("pu", l))
                        })
                    } else Sh(a, c, b)
                }
            }

            function Sh(a, c, b) {
                var d = n(a, "location.host");
                a = jf(a, c);
                b.o("pu", "" + $b(d) + a)
            }

            function Mn(a, c) {
                var b =
                    Od(a);
                c.C("initToParent", function(d) {
                    var e = d[1];
                    b.mb[e.counterId] = {
                        info: e,
                        window: d[0].source
                    }
                }).C("initToChild", function(d) {
                    var e = d[0];
                    d = d[1];
                    e.source === a.parent && c.R("parentConnect", [e, d])
                }).C("parentConnect", function(d) {
                    var e = d[1];
                    e.counterId && (b.zb[e.counterId] = {
                        info: e,
                        window: d[0].source
                    })
                })
            }

            function kf(a, c, b) {
                return {
                    $: function(d, e) {
                        var f = d.H;
                        if (f && (!b || b.Rf)) {
                            var g = a.document.title;
                            d.title && (g = d.title);
                            var h = Kb("getElementsByTagName", a.document);
                            "string" !== typeof g && h && (g = h("title"), g = (g = n(g,
                                "0.innerHtml")) ? g : "");
                            g = g.slice(0, qa.sg);
                            f.o("t", g)
                        }
                        e()
                    }
                }
            }

            function ac(a) {
                void 0 === a && (a = Nn);
                return function(c, b, d) {
                    return {
                        $: function(e, f) {
                            var g = e.H,
                                h = e.F;
                            if (g && h) {
                                var k = Sc(e);
                                z(function(l) {
                                    var m = cb[l],
                                        p = "bi",
                                        q = g;
                                    cb[l] || (m = Th[l], p = "tel", q = k);
                                    m && (m = E(p + ":" + l, m, null)(c, d, e), q.ie(l, m))
                                }, a)
                            }
                            f()
                        }
                    }
                }
            }

            function qc(a) {
                var c = S(a),
                    b = c.l("hitId");
                b || (b = Wa(a), c.o("hitId", b));
                return b
            }

            function On(a, c, b, d, e, f, g, h) {
                var k = b.l(f);
                wa(k) && (b.o(f, g), e(a, c, b, d), k = b.l(f, g));
                R(h) || h.ie(f, "" + k);
                return k
            }

            function Pn(a, c) {
                if (Vc(a)) {
                    var b =
                        ib(a).match(Qn);
                    if (b && b.length) return b[1] === c
                }
                return !1
            }

            function Ph(a, c) {
                if (Wc(a) && c) {
                    var b = ib(a).match(Rn);
                    if (b && b.length) return +b[1] >= c
                }
                return !1
            }

            function Qh(a, c) {
                var b = ib(a);
                return b && (b = b.match(Sn)) && 1 < b.length ? parseInt(b[1], 10) >= c : !1
            }

            function Wg(a, c) {
                void 0 === c && (c = !1);
                for (var b = a.length, d = b - b % 3, e = [], f = 0; f < d; f += 3) {
                    var g = (a[f] << 16) + (a[f + 1] << 8) + a[f + 2];
                    e.push.apply(e, ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 18 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >>
                        12 & 63
                    ], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [g & 63]])
                }
                switch (b - d) {
                    case 1:
                        b = a[d] << 4;
                        e.push.apply(e, ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 6 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "=", "="]);
                        break;
                    case 2:
                        b = (a[d] << 10) + (a[d + 1] << 2), e.push.apply(e, ["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >> 12 & 63], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b >>
                            6 & 63
                        ], "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=" [b & 63], "="])
                }
                e = e.join("");
                return c ? Uh(e, !0) : e
            }

            function Fn(a, c) {
                void 0 === c && (c = !1);
                var b = a,
                    d = "",
                    e = 0;
                if (!b) return "";
                for (c && (b = Uh(b)); b.length % 4;) b += "=";
                do {
                    var f = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        g = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++)),
                        k = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(b.charAt(e++));
                    if (0 > f || 0 > g || 0 > h || 0 > k) return null;
                    var l = f << 18 | g << 12 | h << 6 | k;
                    f = l >> 16 & 255;
                    g = l >> 8 & 255;
                    l &= 255;
                    d = 64 === h ? d + String.fromCharCode(f) : 64 === k ? d + String.fromCharCode(f, g) : d + String.fromCharCode(f, g, l)
                } while (e < b.length);
                return d
            }

            function Uh(a, c) {
                void 0 === c && (c = !1);
                return a ? a.replace(c ? /[+/=]/g : /[-*_]/g, function(b) {
                    return Tn[b] || b
                }) : ""
            }

            function Vh(a, c) {
                var b = a.length ? y(function(d, e) {
                    var f = c[e];
                    return f === d ? null : f
                }, a) : c;
                a.length =
                    0;
                z(u(O, da("push", a)), c);
                return V(xa(null), b).length === a.length ? null : b
            }

            function Wh(a, c, b) {
                return y(function(d) {
                    var e = d[0],
                        f = d[1];
                    if (P(e)) return e(a, c) || null;
                    if (P(f)) return null;
                    var g = !(!c[e] || !c[f]);
                    !g && 2 === d.length && (g = 0 === c[e] && 0 === c[f]) && (g = d[1], g = !(Xh[d[0]] || Xh[g]));
                    return g ? (d = Math.round(c[e]) - Math.round(c[f]), 0 > d || 36E5 < d ? null : d) : 1 === d.length && c[e] ? Math.round(c[e]) : null
                }, b)
            }

            function Xc(a, c, b) {
                return {
                    $: function(d, e) {
                        var f = Yh(b),
                            g = d.H;
                        g ? g.l("pv") && !g.l("ar") ? (f.Te = g, e()) : f.jc ? f.jc.push(e) : e() :
                            e()
                    },
                    Ea: function(d, e) {
                        var f = d.H,
                            g = d.zi,
                            h = Yh(b);
                        if (f) {
                            var k = h.jc;
                            h.Te === f && k && (g && S(a).o("isEU", n(g, "settings.eu")), z(Ea, k), h.jc = null)
                        }
                        e()
                    }
                }
            }

            function lf(a) {
                return {
                    $: function(c, b) {
                        var d = a.document,
                            e = c.H;
                        if (e && mf(a)) {
                            var f = na(a),
                                g = function(h) {
                                    mf(a) || (f.Gb(d, Zh, g), b());
                                    return h
                                };
                            f.C(d, Zh, g);
                            e.o("pr", "1")
                        } else b()
                    }
                }
            }

            function Pa(a, c, b) {
                var d = Nd(a, c, b);
                return function(e, f) {
                    var g, h = B({
                            H: sa()
                        }, e),
                        k = h.F,
                        l = h.H;
                    k = (g = {}, g["page-url"] = k && k["page-url"] || "", g.charset = "utf-8", g);
                    "0" !== f.Z && (k["cnt-class"] = f.Z);
                    g =
                        B(h, {
                            F: B(h.F || {}, k)
                        });
                    h = "";
                    if (g.H) {
                        k = T(f);
                        k = nf(f)[k] || {};
                        var m = k.status;
                        "rt" === k.Df && m ? (1 === m && (h = pg(a, f) + "."), g.H.o("rt", m)) : h = ""
                    }
                    B(g, {
                        ef: h
                    });
                    return d(g, "watch/" + f.id, {
                        Be: !(!l.l("pv") || l.l("ar") || l.l("wh"))
                    })
                }
            }

            function Nd(a, c, b) {
                var d = bc(a, c);
                return function(e, f, g) {
                    void 0 === g && (g = {});
                    var h = Un(a);
                    e.ef && (h = "" + e.ef + h);
                    f = [qa.Pa + "//" + (h || "mc.yandex.com") + "/" + f];
                    return of(a, b, e, !0).then(M([e, f, g], d)).then(function(k) {
                        e.zi = k.Fc;
                        return of(a, b, e).then(w(k.Fc, O))
                    })
                }
            }

            function Un(a) {
                var c = "mc.yandex.com",
                    b =
                    n(a, "document.referrer");
                if (!b) return c;
                (a = jc(a, b).host.match(/(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/)) ? (a = a[0].split("yandex").reverse()[0].substring(1), a = H(a, $h) ? a : !1) : a = !1;
                return "mc.yandex." + (a || "com")
            }

            function Vn(a, c) {
                return a && c ? ai(a) === ai(c) : a || c ? !1 : !0
            }

            function ai(a) {
                return (a.split(":")[1] || "").replace(/^\/*/, "").replace(/^www\./, "").split("/")[0]
            }

            function of (a, c, b, d) {
                void 0 === d && (d = !1);
                return new L(function(e, f) {
                    function g(l, m) {
                        m();
                        e()
                    }
                    var h = c.slice();
                    h.push({
                        $: g,
                        Ea: g
                    });
                    var k = Xb(h, function(l,
                        m) {
                        var p = d ? l.$ : l.Ea;
                        if (p) try {
                            p(b, m)
                        } catch (q) {
                            k(Wn), f(q)
                        } else m()
                    });
                    k(bi)
                })
            }

            function ub(a, c, b) {
                var d = b || "as";
                if (a.postMessage && !a.attachEvent) {
                    b = na(a);
                    var e = "__ym__promise_" + Wa(a) + "_" + Wa(a),
                        f = D;
                    d = A(a, d, function(g) {
                        try {
                            var h = g.data
                        } catch (k) {
                            return
                        }
                        h === e && (f(), g.stopPropagation && g.stopPropagation(), c())
                    });
                    f = b.C(a, ["message"], d);
                    a.postMessage(e, "*")
                } else X(a, c, 0, d)
            }

            function vg(a, c, b, d, e, f) {
                void 0 === d && (d = 1);
                void 0 === e && (e = 200);
                void 0 === f && (f = "itc");
                c = Xb(c, b);
                Zb(a, c, d, e)(Hb(A(a, f), D))
            }

            function Xn(a) {
                a.flush = !0
            }

            function Zb(a, c, b, d, e) {
                function f(g, h) {
                    function k() {
                        try {
                            var m = c(e(a, b));
                            l = l.concat(m)
                        } catch (p) {
                            g(p)
                        }
                        c(Yn);
                        if (c(Yc)) return h(l);
                        f.flush ? (c(e(a, 1E4)), h(l)) : X(a, k, d)
                    }
                    var l = [];
                    k()
                }
                void 0 === b && (b = 1);
                void 0 === d && (d = 200);
                void 0 === e && (e = ci);
                return la(f)
            }

            function He(a) {
                return la(function(c, b) {
                    b(a)
                })
            }

            function bm(a) {
                return la(function(c, b) {
                    a.then(b, c)
                })
            }

            function Zn(a) {
                var c = [],
                    b = 0;
                return la(function(d, e) {
                    z(function(f, g) {
                        f(Hb(d, function(h) {
                            try {
                                c[g] = h, b += 1, b === a.length && e(c)
                            } catch (k) {
                                d(k)
                            }
                        }))
                    }, a)
                })
            }

            function am(a) {
                var c = [],
                    b = !1;
                return la(function(d, e) {
                    function f(g) {
                        c.push(g) === a.length && d(c)
                    }
                    z(function(g) {
                        g(Hb(f, function(h) {
                            if (!b) try {
                                e(h), b = !0
                            } catch (k) {
                                f(k)
                            }
                        }))
                    }, a)
                })
            }

            function Xb(a, c) {
                void 0 === c && (c = O);
                return la({
                    Ia: a,
                    Cd: c,
                    me: !1,
                    ia: 0
                })
            }

            function bi(a) {
                function c() {
                    function d() {
                        b = !0;
                        a.ia += 1
                    }
                    b = !1;
                    a.Cd(a.Ia[a.ia], function() {
                        d()
                    });
                    b || (a.ia += 1, d = C(bi, null, a))
                }
                for (var b = !0; !Yc(a) && b;) c()
            }

            function ci(a, c) {
                return function(b) {
                    var d = ba(a),
                        e = d(W);
                    return di(function(f, g) {
                        d(W) - e >= c && g(ei)
                    }, b)
                }
            }

            function Pd(a, c) {
                return function(b) {
                    var d =
                        ba(a),
                        e = d(W);
                    return Qd(function(f) {
                        d(W) - e >= c && ei(f)
                    })(b)
                }
            }

            function Qd(a) {
                return function(c) {
                    for (var b; c.Ia.length && !Yc(c);) b = c.Ia.pop(), b = c.Cd(b, c.Ia), a(c);
                    return b
                }
            }

            function $n(a) {
                Yc(a) && Db(Zc("i"));
                var c = a.Cd(a.Ia[a.ia]);
                a.ia += 1;
                return c
            }

            function Yn(a) {
                a.me = !1
            }

            function ei(a) {
                a.me = !0
            }

            function Wn(a) {
                a.ia = a.Ia.length
            }

            function Yc(a) {
                return a.me || a.Ia.length <= a.ia
            }

            function bc(a, c) {
                return function(b, d, e) {
                    void 0 === e && (e = {});
                    return fi(a, c, d, b, B(e, {
                        wa: b.wa || [],
                        Y: e.Y || b.Y
                    }))
                }
            }

            function fi(a, c, b, d, e, f, g) {
                var h;
                void 0 === f && (f = 0);
                void 0 === g && (g = 0);
                var k = B({}, e),
                    l = c[g],
                    m = l[0];
                l = l[1];
                var p = B({}, d.F),
                    q = ba(a);
                d.H && (p["browser-info"] = sa(d.H.b()).o("st", q(Rd)).Aa());
                p.t || (q = Sc(d, "ti", m).Aa()) && (p.t = q);
                q = b[f];
                k.Ab && k.Ab["Content-Type"] || !k.Y || (k.Ab = B({}, k.Ab, (h = {}, h["Content-Type"] = "application/x-www-form-urlencoded", h)), k.Y = "site-info=" + pf(k.Y));
                k.jg = k.Y ? "POST" : "GET";
                k.Bb = p;
                k.wa.push(m);
                return l("" + q + (d.ai ? "/1" : ""), k).then(function(r) {
                    return {
                        Fc: r,
                        aj: f
                    }
                })["catch"](function(r) {
                    var t = g + 1 >= c.length,
                        x = f + 1 >= b.length;
                    t && x && Db(r);
                    return fi(a, c, b, d, e, !x && t ? f + 1 : f, t ? 0 : g + 1)
                })
            }

            function gi(a, c) {
                var b = c.Fd,
                    d = b || "uid";
                b = b ? a.location.hostname : void 0;
                var e = Gb(a),
                    f = Ja(a),
                    g = ba(a),
                    h = g(Rd),
                    k = hi(a, c),
                    l = k[0];
                k = k[1];
                var m = e.l("d");
                ii(a, c);
                var p = !1;
                !k && l && (k = l, p = !0);
                if (!k) k = F("", [g(Rd), Wa(a)]), p = !0;
                else if (!m || 15768E3 < h - parseInt(m, 10)) p = !0;
                p && !c.Za && (e.o(d, k, 525600, b), e.o("d", "" + h, 525600, b));
                f.o(d, k);
                return k
            }

            function hi(a, c) {
                var b = Ja(a),
                    d = Gb(a),
                    e = c.Fd || "uid";
                return [b.l(e), d.l(e)]
            }

            function jb(a) {
                a = ba(a);
                return Math.round(a(qf) /
                    50)
            }

            function qf(a) {
                var c = a.ja,
                    b = c[1];
                a = c[0] && b ? b() : W(a) - a.Kh;
                return Math.round(a)
            }

            function Rd(a) {
                return Math.round(W(a) / 1E3)
            }

            function hb(a) {
                return Math.floor(W(a) / 1E3 / 60)
            }

            function W(a) {
                var c = a.xe;
                return 0 !== c ? c : rf(a.b, a.ja)
            }

            function hf(a) {
                var c = na(a),
                    b = ji(a),
                    d = {
                        b: a,
                        xe: 0,
                        ja: b,
                        Kh: rf(a, b)
                    },
                    e = b[1];
                b[0] && e || c.C(a, ["beforeunload", "unload"], function() {
                    0 === d.xe && (d.xe = rf(a, d.ja))
                });
                return la(d)
            }

            function ao(a) {
                return (10 >= a ? "0" : "") + a
            }

            function ki(a, c, b) {
                void 0 === c && (c = "");
                void 0 === b && (b = "_ym");
                var d = "" + b + c +
                    "_";
                return {
                    zd: bo(a),
                    l: function(e, f) {
                        var g = li(a, "" + d + e);
                        return Ma(g) && !R(f) ? f : g
                    },
                    o: function(e, f) {
                        mi(a, "" + d + e, f);
                        return this
                    },
                    Ub: function(e) {
                        ni(a, "" + d + e);
                        return this
                    }
                }
            }

            function mi(a, c, b) {
                var d = sf(a);
                a = gb(a, b);
                if (!Ma(a)) try {
                    d.setItem(c, a)
                } catch (e) {}
            }

            function li(a, c) {
                var b = sf(a);
                try {
                    return pb(a, b.getItem(c))
                } catch (d) {}
                return null
            }

            function ni(a, c) {
                var b = sf(a);
                try {
                    b.removeItem(c)
                } catch (d) {}
            }

            function sf(a) {
                try {
                    return a.localStorage
                } catch (c) {}
                return null
            }

            function Yg(a, c, b) {
                Sd(a, "metrika_enabled", "1", 0, c,
                    b);
                (b = Kc(a, "metrika_enabled")) && Sd(a, "metrika_enabled", "", -100, c, void 0);
                return !!b
            }

            function Kc(a, c) {
                var b = null;
                try {
                    b = a.document.cookie
                } catch (d) {
                    return null
                }
                return (b = (new RegExp("(?:^|;\\s*)" + c + "=([^;]*)")).exec(b)) && 2 <= b.length ? decodeURIComponent(b[1]) : null
            }

            function Zg(a, c, b) {
                H(b, ["gdpr", "gdpr_popup", "metrika_enabled"]) ? a = !0 : (b = cf(a), b = oi(b), a = c(a, "gdpr"), a = V(Fb(co), b).length ? !0 : H(a, [pc, eo]));
                return a
            }

            function Lh(a) {
                if (H(a, ["GDPR-ok-view-default", "GDPR-ok-view-detailed"])) return pc;
                a = a.replace("GDPR-ok-view-detailed-",
                    "");
                return H(a, Jb) ? a : pc
            }

            function Kh(a, c, b) {
                void 0 === b && (b = O);
                var d = Cc(a);
                b(d);
                var e = w(d, fo);
                Td(a, c, function(f) {
                    f.C(e)
                });
                return d
            }

            function fo(a, c) {
                var b = n(c, "ymetrikaEvent");
                b && a.R(n(b, "type"), b)
            }

            function Td(a, c, b, d) {
                void 0 === b && (b = D);
                void 0 === d && (d = !1);
                var e = Hc(a);
                if (c && P(c.push)) {
                    var f = c.push;
                    c.push = function() {
                        var g = Ba(arguments),
                            h = g[0];
                        d && e.R(h);
                        g = f.apply(c, g);
                        d || e.R(h);
                        return g
                    };
                    b(e);
                    z(e.R, c);
                    return e
                }
            }

            function cf(a) {
                a = S(a);
                var c = a.l("dataLayer", []);
                a.o("dataLayer", c);
                return c
            }

            function tn(a, c) {
                var b,
                    d;
                a.push((b = {}, b.ymetrikaEvent = (d = {}, d.type = c, d), b))
            }

            function Fg(a, c, b) {
                function d() {
                    f = 0;
                    g && (g = !1, f = X(a, d, b), e.R(h))
                }
                var e = Hc(a),
                    f, g = !1,
                    h;
                c.C(function(k) {
                    g = !0;
                    h = k;
                    f || d();
                    return D
                });
                return e
            }

            function go(a, c) {
                return a.clearInterval(c)
            }

            function ho(a, c, b, d) {
                return a.setInterval(A(a, "i.err." + (d || "def"), c), b)
            }

            function X(a, c, b, d) {
                return Ud(a, A(a, "d.err." + (d || "def"), c), b)
            }

            function Cc(a) {
                var c = {};
                return {
                    C: function(b, d) {
                        z(function(e) {
                            n(c, e) || (c[e] = Hc(a));
                            c[e].C(d)
                        }, b.split(","));
                        return this
                    },
                    ba: function(b,
                        d) {
                        z(function(e) {
                            n(c, e) && c[e].ba(d)
                        }, b.split(","));
                        return this
                    },
                    R: function(b, d) {
                        return J(function(e, f) {
                            return n(c, f) ? e.concat(A(a, "e." + f, c[f].R)(d)) : e
                        }, [], b.split(","))
                    }
                }
            }

            function Hc(a) {
                var c = [],
                    b = {};
                b.Gj = c;
                b.C = u(da("push", c), w(b, O));
                b.ba = u(tf(sb(a))(c), tf(da("splice", c))(1), w(b, O));
                b.R = u(O, tf(Ea), io(c));
                return b
            }

            function E(a, c, b) {
                return function() {
                    return A(arguments[0], a, c, b).apply(this, arguments)
                }
            }

            function A(a, c, b, d, e) {
                var f = b || Db;
                return function() {
                    var g = d;
                    try {
                        g = f.apply(e || null, arguments)
                    } catch (h) {
                        We(a,
                            c, h)
                    }
                    return g
                }
            }

            function rf(a, c) {
                var b = c || ji(a),
                    d = b[0];
                b = b[1];
                return !isNaN(d) && P(b) ? Math.round(b() + d) : a.Date.now ? a.Date.now() : (new a.Date).getTime()
            }

            function ji(a) {
                a = uf(a);
                var c = n(a, "timing.navigationStart"),
                    b = n(a, "now");
                b && (b = C(b, a));
                return [c, b]
            }

            function uf(a) {
                return n(a, "performance") || n(a, "webkitPerformance")
            }

            function We(a, c, b) {
                var d, e, f, g, h;
                if (!(.01 >= a.Math.random())) {
                    var k = "u.a.e",
                        l = "";
                    b && ("object" === typeof b ? (k = b.message, l = "string" === typeof b.stack && b.stack.replace(/\n/g, "\\n") || "n.s.e.s") : k =
                        "" + b);
                    if (!(jo(k) || Ta(u(da("indexOf", k), xa(-1), cc), ko) || lo(k) && .1 <= a.Math.random())) {
                        c = (d = {}, d.jserrs = (e = {}, e[qa.Fa] = (f = {}, f[k] = (g = {}, g[c] = (h = {}, h[a.location.href] = l, h), g), f), e), d);
                        a: {
                            var m;d = qa.Pa + "//mc.yandex.com/watch/" + qa.pg;
                            try {
                                var p = vf(a, "er")[0];
                                var q = void 0 === p ? [] : p;
                                var r = q[1];
                                var t = void 0 === r ? null : r
                            } catch (x) {
                                break a
                            }
                            p = (m = {}, m["browser-info"] = "ar:1:pv:1:v:" + qa.Fa + ":vf:" + $c.version, m["page-url"] = a.location && "" + a.location.href, m);a = gb(a, c);
                            if (t && a) t(d, {
                                Bb: p,
                                wa: [],
                                Y: "site-info=" + pf(a)
                            })["catch"](D)
                        }
                    }
                }
            }

            function yb(a) {
                return y(function(c) {
                    return !c || H(c, a) ? c : 0
                }, dc)
            }

            function pi(a) {
                var c = n(a, "navigator.sendBeacon");
                return c && pa("sendBeacon", c) && !Id(a) ? mo(a, C(c, n(a, "navigator"))) : !1
            }

            function wf(a) {
                return ab(a) ? no(a) : !1
            }

            function Sc(a, c, b) {
                void 0 === b && (b = null);
                a.ne || (a.ne = oo());
                c && !Ma(b) && a.ne.o(c, b);
                return a.ne
            }

            function po(a, c) {
                try {
                    delete a[c]
                } catch (b) {
                    a[c] = void 0
                }
            }

            function Wa(a, c, b) {
                var d = R(b);
                R(c) && d ? (d = 1, c = 1073741824) : d ? d = 1 : (d = c, c = b);
                return a.Math.floor(a.Math.random() * (c - d)) + d
            }

            function xd(a, c) {
                return a.isFinite(c) &&
                    !a.isNaN(c) && "[object Number]" === xf(c)
            }

            function ad(a) {
                var c = ab(a);
                return c ? qo(a, c) : !1
            }

            function Vg(a, c, b) {
                var d = ya(c);
                return d && Qg(a, c, V(Boolean, ["p", ro[d], "c"]), qi(a), b)
            }

            function Ug(a, c) {
                var b = Ab(yf, a, c);
                if (!b) {
                    var d = Ab("div", a, c);
                    d && (zb(yf + ",div", a, d).length || (b = d))
                }
                return b
            }

            function Qg(a, c, b, d, e) {
                return J(function(f, g) {
                    var h = null;
                    g in ri ? h = c.getAttribute && c.getAttribute(ri[g]) : g in sc && (h = "p" === g ? sc[g](a, c, e) : "c" === g ? sc[g](a, c, d) : sc[g](a, c));
                    h && (h = h.slice(0, si[g] || 100), f[g] = zf[g] ? "" + $b(h) : h);
                    return f
                }, {}, b)
            }

            function $g(a, c, b) {
                if (a.document.querySelectorAll && pa("querySelectorAll", n(a, "Element.prototype.querySelectorAll"))) return ka(b.querySelectorAll(c));
                var d = ti(c.split(" "), b);
                return V(function(e, f) {
                    return sb(a)(e, d) === f
                }, d)
            }

            function ti(a, c) {
                var b = fa(a),
                    d = b.shift();
                if (!d) return [];
                d = c.getElementsByTagName(d);
                return b.length ? Qb(w(b, ti), ka(d)) : ka(d)
            }

            function hc(a, c, b) {
                return (a = zb(b, a, c)) && a.length ? a[0] : null
            }

            function zb(a, c, b) {
                return b ? (a = b.querySelectorAll(a)) ? ka(a) : [] : []
            }

            function lc(a, c) {
                var b =
                    a.document,
                    d = B({
                        type: "text/javascript",
                        charset: "utf-8",
                        async: !0
                    }, c),
                    e = ab(a);
                if (e) {
                    var f = e("script");
                    ui(Aa, kb(function(l) {
                        var m = l[0];
                        l = l[1];
                        "async" === m && l ? f.async = !0 : f[m] = l
                    }))(d);
                    try {
                        var g = Kb("getElementsByTagName", b),
                            h = g("head")[0];
                        if (!h) {
                            var k = g("html")[0];
                            h = e("head");
                            k && k.appendChild(h)
                        }
                        h.insertBefore(f, h.firstChild);
                        return f
                    } catch (l) {}
                }
            }

            function so(a, c) {
                var b = ca(a) ? a : [a];
                c = c || document;
                if (c.querySelectorAll) {
                    var d = F(", ", y(function(e) {
                        return "." + e
                    }, b));
                    return ka(c.querySelectorAll(d))
                }
                if (c.getElementsByClassName) return Qb(u(da("getElementsByClassName",
                    c), ka), b);
                d = c.getElementsByTagName("*");
                b = "(" + F("|", b) + ")";
                return V(w(b, Vb), ka(d))
            }

            function vi(a, c, b) {
                for (var d = "", e = wi(), f = ya(c) || "*"; c && c.parentNode && !H(f, ["BODY", "HTML"]);) d += e[f] || "*", d += xi(a, c, b) || "", c = c.parentElement, f = ya(c) || "*";
                return Wb(d, 128)
            }

            function xi(a, c, b) {
                if (a = Vd(a, c)) {
                    a = a.childNodes;
                    for (var d = c && c.nodeName, e = 0, f = 0; f < a.length; f += 1)
                        if (d === (a[f] && a[f].nodeName)) {
                            if (c === a[f]) return e;
                            b && a[f] === b || (e += 1)
                        }
                }
                return 0
            }

            function Vd(a, c) {
                var b = n(a, "document");
                if (!c || c === b.documentElement) return null;
                if (c === ec(a)) return b.documentElement;
                b = null;
                try {
                    b = c.parentNode
                } catch (d) {}
                return b
            }

            function Te(a, c) {
                var b = Af(a, c),
                    d = b.left;
                b = b.top;
                var e = Wd(a, c);
                return [d, b, e[0], e[1]]
            }

            function Wd(a, c) {
                var b = n(a, "document");
                if (c === ec(a) || c === b.documentElement) {
                    b = Sb(a);
                    var d = bd(a);
                    return [Math.max(b.scrollWidth, d[0]), Math.max(b.scrollHeight, d[1])]
                }
                return (b = Dc(c)) ? [b.width, b.height] : [c.offsetWidth, c.offsetHeight]
            }

            function Af(a, c) {
                var b = c,
                    d = n(a, "document"),
                    e = ya(b);
                if (!b || !b.ownerDocument || "PARAM" === e || b === ec(a) || b === d.documentElement) return {
                    left: 0,
                    top: 0
                };
                if (d = b.getBoundingClientRect && Dc(b)) return b = Ve(a), {
                    left: Math.round(d.left + b.x),
                    top: Math.round(d.top + b.y)
                };
                for (e = d = 0; b;) d += b.offsetLeft, e += b.offsetTop, b = b.offsetParent;
                return {
                    left: d,
                    top: e
                }
            }

            function Ab(a, c, b) {
                if (!(c && c.Element && c.Element.prototype && c.document)) return null;
                if (c.Element.prototype.closest && pa("closest", c.Element.prototype.closest) && b.closest) return b.closest(a);
                var d = hh(c);
                if (d) {
                    for (; b && 1 === b.nodeType && !d.call(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                if (c.document.querySelectorAll &&
                    pa("querySelectorAll", n(c, "Element.prototype.querySelectorAll"))) {
                    for (a = ka((c.document || c.ownerDocument).querySelectorAll(a)); b && 1 === b.nodeType && -1 === sb(c)(b, a);) b = b.parentElement || b.parentNode;
                    return b && 1 === b.nodeType ? b : null
                }
                return null
            }

            function yi(a) {
                return Xd(a) && !Ta(xa(a.type), to) ? Yd(a) ? !a.checked : !a.value : uo(a) ? !a.value : vo(a) ? 0 > a.selectedIndex : !0
            }

            function ya(a) {
                if (a) try {
                    var c = a.nodeName;
                    if (Na(c)) return c;
                    c = a.tagName;
                    if (Na(c)) return c
                } catch (b) {}
            }

            function zi(a, c) {
                var b = a.document.getElementsByTagName("form");
                return sb(a)(c, ka(b))
            }

            function wo(a, c, b) {
                b = Kb("dispatchEvent", b || a.document);
                var d = null,
                    e = n(a, "Event.prototype.constructor");
                if (e && (pa("(Event|Object|constructor)", e) || Zd(a) && "[object Event]" === "" + e)) try {
                    d = new a.Event(c)
                } catch (f) {
                    if ((a = Kb("createEvent", n(a, "document"))) && P(a)) {
                        try {
                            d = a(c)
                        } catch (g) {}
                        d && d.initEvent && d.initEvent(c, !1, !1)
                    }
                }
                d && b(d)
            }

            function Dc(a) {
                try {
                    return a.getBoundingClientRect && a.getBoundingClientRect()
                } catch (c) {
                    return "object" === typeof c && null !== c && 16389 === (c.xf && c.xf & 65535) ? {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        width: 0,
                        height: 0,
                        right: 0
                    } : null
                }
            }

            function Ve(a) {
                var c = ec(a),
                    b = n(a, "document");
                return {
                    x: a.pageXOffset || b.documentElement && b.documentElement.scrollLeft || c && c.scrollLeft || 0,
                    y: a.pageYOffset || b.documentElement && b.documentElement.scrollTop || c && c.scrollTop || 0
                }
            }

            function bd(a) {
                var c = Bf(a);
                if (c) {
                    var b = c[2];
                    return [a.Math.round(c[0] * b), a.Math.round(c[1] * b)]
                }
                c = Sb(a);
                return [n(c, "clientWidth") || a.innerWidth, n(c, "clientHeight") || a.innerHeight]
            }

            function Bf(a) {
                var c = n(a, "visualViewport.width"),
                    b = n(a,
                        "visualViewport.height");
                a = n(a, "visualViewport.scale");
                return wa(c) || wa(b) ? null : [Math.floor(c), Math.floor(b), a]
            }

            function Sb(a) {
                var c = n(a, "document") || {},
                    b = c.documentElement;
                return "CSS1Compat" === c.compatMode ? b : ec(a) || b
            }

            function ec(a) {
                a = n(a, "document");
                try {
                    return a.getElementsByTagName("body")[0]
                } catch (c) {
                    return null
                }
            }

            function Vb(a, c) {
                try {
                    return (new RegExp("(?:^|\\s)" + a + "(?:\\s|$)")).test(c.className)
                } catch (b) {
                    return !1
                }
            }

            function fc(a) {
                var c;
                try {
                    if (c = a.target || a.srcElement) !c.ownerDocument && c.documentElement ?
                        c = c.documentElement : c.ownerDocument !== document && (c = null)
                } catch (b) {}
                return c
            }

            function rc(a) {
                var c = a && a.parentNode;
                c && c.removeChild(a)
            }

            function Me(a) {
                if (wa(a)) return !1;
                a = a.nodeType;
                return 3 === a || 8 === a
            }

            function Lb(a) {
                var c;
                if (c = n(a, "XMLHttpRequest"))
                    if (c = "withCredentials" in new a.XMLHttpRequest) {
                        a: {
                            if (xo.test(a.location.host) && a.opera && P(a.opera.version) && (c = a.opera.version(), "string" === typeof c && "12" === c.split(".")[0])) {
                                c = !0;
                                break a
                            }
                            c = !1
                        }
                        c = !c
                    }
                return c ? yo(a) : !1
            }

            function zo(a, c, b, d, e, f, g, h) {
                if (4 === c.readyState)
                    if (200 ===
                        c.status || e || g(b), e) 200 === c.status ? f(c.responseText) : g(Zc("http." + c.status + ".st." + c.statusText + ".rt." + ("" + c.responseText).substring(0, 50)));
                    else {
                        e = null;
                        if (d) try {
                            (e = pb(a, c.responseText)) || g(b)
                        } catch (k) {
                            g(b)
                        }
                        f(e)
                    }
                return h
            }

            function Ai(a, c, b) {
                (b = Bc(b)) && (a += "?" + b);
                c.Y && (a += (b ? "&" : "?") + c.Y);
                return a
            }

            function gb(a, c) {
                try {
                    return a.JSON.stringify(c)
                } catch (b) {
                    return null
                }
            }

            function Bc(a) {
                return a ? u(Aa, Ic(function(c, b) {
                    var d = b[0],
                        e = b[1];
                    R(e) || wa(e) || c.push(d + "=" + pf(e));
                    return c
                }, []), Oc("&"))(a) : ""
            }

            function pf(a) {
                try {
                    return encodeURIComponent(a)
                } catch (c) {}
                a =
                    F("", V(function(c) {
                        return 55296 >= c.charCodeAt(0)
                    }, a.split("")));
                return encodeURIComponent(a)
            }

            function Cf() {
                var a = Ba(arguments);
                return Db(ob(a))
            }

            function ob(a) {
                var c = "";
                ca(a) ? c = F(".", a) : Na(a) && (c = a);
                return Zc("err.kn(" + qa.Fa + ")" + c)
            }

            function Ao(a) {
                this.message = a
            }

            function Bi(a, c, b, d, e) {
                var f = a.addEventListener && a.removeEventListener,
                    g = !f && a.attachEvent && a.detachEvent;
                if (f || g)
                    if (e = e ? f ? "removeEventListener" : "detachEvent" : f ? "addEventListener" : "attachEvent", f) a[e](c, b, d);
                    else a[e]("on" + c, b)
            }

            function Q(a) {
                return J(function(c,
                    b) {
                    var d = n(a, "location." + b);
                    c[b] = d ? "" + d : "";
                    return c
                }, {}, Bo)
            }

            function Ci(a) {
                return function(c) {
                    var b = c || {};
                    return {
                        b: w(b, O),
                        l: function(d, e) {
                            var f = b[d];
                            return R(f) && !R(e) ? e : f
                        },
                        o: function(d, e) {
                            b[d] = e;
                            return this
                        },
                        ie: function(d, e) {
                            return "" === e || wa(e) ? this : this.o(d, e)
                        },
                        Aa: w(b, a)
                    }
                }
            }

            function Co(a, c, b, d, e) {
                var f = "object" === typeof a ? a : {
                    id: a,
                    Z: d,
                    Ob: e,
                    N: b
                };
                a = J(function(g, h) {
                    var k = h[1],
                        l = k.bi;
                    k = f[k.zf];
                    g[h[0]] = l ? l(k) : k;
                    return g
                }, {}, Aa(c));
                Di(a, a.N || {});
                return a
            }

            function Do(a, c) {
                return J(function(b, d) {
                    b[c[d[0]].zf] =
                        d[1];
                    return b
                }, {}, Aa(a))
            }

            function Ei(a) {
                a = T(a);
                return Mb[a] && Mb[a].Qi
            }

            function Di(a, c) {
                var b = T(a),
                    d = n(c, "__ym.turbo_page"),
                    e = n(c, "__ym.turbo_page_id");
                Mb[b] || (Mb[b] = {});
                if (d || e) Mb[b].Qi = d, Mb[b].Ri = e
            }

            function Eo(a) {
                return $d(a) || cd(a) || /mobile/i.test(ib(a)) || !R(n(a, "orientation"))
            }

            function mf(a) {
                return H("prerender", y(w(n(a, "document"), n), ["webkitVisibilityState", "visibilityState"]))
            }

            function Fo(a) {
                for (var c = [], b = a.length - 1; 0 <= b; --b) c[a.length - 1 - b] = a[b];
                return c
            }

            function Sa(a, c) {
                z(u(O, da("push", a)),
                    c);
                return a
            }

            function Ie(a, c) {
                return Array.prototype.sort.call(c, a)
            }

            function ka(a) {
                return a ? ca(a) ? a : ae ? ae(a) : "number" === typeof a.length && 0 <= a.length ? Fi(a) : [] : []
            }

            function yk(a) {
                if (0 > a) return [];
                for (var c = [], b = 0; b <= a; b += 1) c.push(b);
                return c
            }

            function Go(a, c) {
                if (!Wc(a)) return !0;
                try {
                    c.call({
                        0: !0,
                        length: -Math.pow(2, 32) + 1
                    }, function() {
                        throw 1;
                    })
                } catch (b) {
                    return !1
                }
                return !0
            }

            function be(a, c, b) {
                return b ? a : c
            }

            function Ib(a, c, b) {
                try {
                    if (P(c)) {
                        var d = Ba(arguments).slice(3);
                        wa(b) ? c.apply(void 0, d) : C.apply(void 0, fa([c,
                            b
                        ], d))()
                    }
                } catch (e) {
                    Ud(a, w(e, Db), 0)
                }
            }

            function Db(a) {
                throw a;
            }

            function Ud(a, c, b) {
                return Kb("setTimeout", a)(c, b)
            }

            function oa(a, c) {
                return Kb("clearTimeout", a)(c)
            }

            function ce() {
                return []
            }

            function Rb() {
                return {}
            }

            function Kb(a, c) {
                var b = n(c, a),
                    d = n(c, "constructor.prototype." + a) || b;
                try {
                    if (d && d.apply) return function() {
                        return d.apply(c, arguments)
                    }
                } catch (e) {
                    return b
                }
                return d
            }

            function tc(a, c) {
                return function() {
                    var b = Ba(arguments),
                        d = b[0];
                    b = b.slice(1);
                    var e = S(d),
                        f = e.l("m700", {}),
                        g = n(f, a);
                    g || (g = v(c), f[a] = g, e.o("m700",
                        f));
                    return g.apply(void 0, fa([d], b))
                }
            }

            function Ea(a, c) {
                return c ? a(c) : a()
            }

            function v(a, c) {
                var b = [],
                    d = [];
                var e = c ? c : O;
                return function() {
                    var f = Ba(arguments),
                        g = e.apply(void 0, f),
                        h = Gi(g, d);
                    if (-1 !== h) return b[h];
                    f = a.apply(void 0, f);
                    b.push(f);
                    d.push(g);
                    return f
                }
            }

            function cc(a) {
                return !a
            }

            function qb(a, c) {
                return c
            }

            function O(a) {
                return a
            }

            function sb(a) {
                if (Df) return Df;
                var c = !1;
                try {
                    c = [].indexOf && 0 === [void 0].indexOf(void 0)
                } catch (d) {}
                var b = a.Array && a.Array.prototype && Da(a.Array.prototype.indexOf, "indexOf");
                return Df =
                    a = c && b ? function(d, e) {
                        return b.call(e, d)
                    } : Ho
            }

            function Ho(a, c) {
                for (var b = 0; b < c.length; b += 1)
                    if (c[b] === a) return b;
                return -1
            }

            function Io(a, c) {
                for (var b = "", d = 0; d < c; d += 1) b += a;
                return b
            }

            function Jo(a) {
                return R(a) ? [] : dd(function(c, b) {
                    c.push([b, a[b]]);
                    return c
                }, [], Hi(a))
            }

            function Ko(a, c) {
                return dd(function(b, d, e) {
                    d = a(d, e);
                    return b.concat(ca(d) ? d : [d])
                }, [], c)
            }

            function Lo(a, c) {
                return dd(function(b, d, e) {
                    b.push(a(d, e));
                    return b
                }, [], c)
            }

            function Mo() {
                var a = Ba(arguments),
                    c = a[0];
                for (a = a.slice(1); a.length;) {
                    var b = a.shift(),
                        d;
                    for (d in b) Nc(b, d) && (c[d] = b[d]);
                    Nc(b, "toString") && (c.toString = b.toString)
                }
                return c
            }

            function Hi(a) {
                var c = [],
                    b;
                for (b in a) Nc(a, b) && c.push(b);
                return c
            }

            function No(a, c) {
                return 1 <= Ii(xa(a), c).length
            }

            function Ii(a, c) {
                return dd(function(b, d, e) {
                    a(d, e) && b.push(d);
                    return b
                }, [], c)
            }

            function Nc(a, c) {
                return wa(a) ? !1 : Ef.call(a, c)
            }

            function ca(a) {
                if (ed) return ed(a);
                (ed = Da(Array.isArray, "isArray")) || (ed = Oo);
                return ed(a)
            }

            function u() {
                var a = Ba(arguments),
                    c = a.shift();
                return function() {
                    var b = c.apply(void 0, arguments);
                    return J(Ji, b, a)
                }
            }

            function Ac(a, c) {
                void 0 === c && (c = {});
                if (!a || 1 > a.length) return c;
                J(function(b, d, e) {
                    if (e === a.length - 1) return b;
                    e === a.length - 2 ? b[d] = a[e + 1] : b[d] || (b[d] = {});
                    return b[d]
                }, c, a);
                return c
            }

            function n(a, c) {
                return a ? J(function(b, d) {
                    if (wa(b)) return b;
                    try {
                        return b[d]
                    } catch (e) {}
                    return null
                }, a, c.split(".")) : null
            }

            function Ic(a, c) {
                return M([a, c], J)
            }

            function Xa(a) {
                return da("test", a)
            }

            function da(a, c) {
                return C(c[a], c)
            }

            function w(a, c) {
                return M([a], c)
            }

            function M(a, c) {
                return C.apply(void 0, fa([c, null],
                    a))
            }

            function Po() {
                var a = Ba(arguments),
                    c = a[0],
                    b = a[1],
                    d = a.slice(2);
                return function() {
                    var e = fa(d, Ba(arguments));
                    if (Function.prototype.call) return Function.prototype.call.apply(c, fa([b], e));
                    if (b) {
                        for (var f = "_b"; b[f];) f += "_" + f.length;
                        b[f] = c;
                        e = b[f] && Ki(f, e, b);
                        delete b[f];
                        return e
                    }
                    return Ki(c, e)
                }
            }

            function Ki(a, c, b) {
                void 0 === c && (c = []);
                b = b || {};
                var d = c.length,
                    e = a;
                P(e) && (e = "d", b[e] = a);
                var f;
                d ? 1 === d ? f = b[e](c[0]) : 2 === d ? f = b[e](c[0], c[1]) : 3 === d ? f = b[e](c[0], c[1], c[2]) : 4 === d && (f = b[e](c[0], c[1], c[2], c[3])) : f = b[e]();
                return f
            }

            function dd(a, c, b) {
                for (var d = 0, e = b.length; d < e;) c = a(c, b[d], d), d += 1;
                return c
            }

            function nc(a) {
                return !Ma(a) && !R(a) && "[object Object]" === xf(a)
            }

            function wa(a) {
                return R(a) || Ma(a)
            }

            function P(a) {
                return "function" === typeof a
            }

            function tf(a) {
                return ha(function(c, b) {
                    return a(b, c)
                })
            }

            function ha() {
                var a = Ba(arguments),
                    c = a.shift();
                return function() {
                    var b = Ba(arguments);
                    return c.length > b.length + a.length ? ha.apply(void 0, fa([c], a, b)) : c.apply(void 0, fa(a, b))
                }
            }

            function de(a) {
                return function(c) {
                    return function(b) {
                        return a(b,
                            c)
                    }
                }
            }

            function Ca(a) {
                return function(c) {
                    return function(b) {
                        return a(c, b)
                    }
                }
            }

            function Ji(a, c) {
                return c(a)
            }

            function Qo(a, c) {
                for (var b = "", d = 0; d < c.length; d += 1) b += "" + (d ? a : "") + c[d];
                return b
            }

            function Ba(a) {
                if (ae) try {
                    return ae(a)
                } catch (c) {}
                return Fi(a)
            }

            function Fi(a) {
                for (var c = a.length, b = [], d = 0; d < c; d += 1) b.push(a[d]);
                return b
            }

            function Ff(a, c) {
                Ff = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, d) {
                    b.__proto__ = d
                } || function(b, d) {
                    for (var e in d) d.hasOwnProperty(e) && (b[e] = d[e])
                };
                return Ff(a, c)
            }

            function fm(a) {
                return a.replace(/\^/g,
                    "\\^").replace(/\$/g, "\\$").replace(/\./g, "\\.").replace(/\[/g, "\\[").replace(/\]/g, "\\]").replace(/\|/g, "\\|").replace(/\(/g, "\\(").replace(/\)/g, "\\)").replace(/\?/g, "\\?").replace(/\*/g, "\\*").replace(/\+/g, "\\+").replace(/\{/g, "\\{").replace(/\}/g, "\\}")
            }

            function Wb(a, c) {
                if (a) {
                    var b = ("" + a).replace(Bh, "");
                    return c && b.length > c ? b.substr(0, c) : b
                }
                return ""
            }

            function fk(a) {
                return "" + a
            }

            function ee(a, c) {
                return !(!a || -1 === yg(a, c))
            }

            function yg(a, c) {
                if (Li) var b = Li.call(a, c);
                else a: {
                    b = 0;
                    for (var d = a.length - c.length,
                            e = 0; e < a.length; e += 1) {
                        b = a[e] === c[b] ? b + 1 : 0;
                        if (b === c.length) {
                            b = e - c.length + 1;
                            break a
                        }
                        if (!b && e > d) break
                    }
                    b = -1
                }
                return b
            }

            function Na(a) {
                return "string" === typeof a
            }

            function xf(a) {
                return Object.prototype.toString.call(a)
            }

            function Da(a, c) {
                return pa(c, a) && a
            }

            function pa(a, c) {
                var b = fe(a, c);
                c && !b && Gf.push([a, c]);
                return b
            }

            function fe(a, c) {
                if (!c || "function" !== typeof c) return !1;
                var b = new RegExp("function\\s*(" + a + ")?\\s*\\(\\)\\s*\\{\\s*\\[native[\\s-]code\\]\\s*\\}", "i");
                try {
                    return b.test("" + c)
                } catch (d) {}
                return !1
            }

            function D() {}

            function za(a, c) {
                function b() {
                    this.constructor = a
                }
                Ff(a, c);
                a.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
            }

            function fa() {
                for (var a = 0, c = 0, b = arguments.length; c < b; c++) a += arguments[c].length;
                a = Array(a);
                var d = 0;
                for (c = 0; c < b; c++)
                    for (var e = arguments[c], f = 0, g = e.length; f < g; f++, d++) a[d] = e[f];
                return a
            }

            function $b(a) {
                a = "" + a;
                for (var c = 2166136261, b = a.length, d = 0; d < b; d += 1) c ^= a.charCodeAt(d), c += (c << 1) + (c << 4) + (c << 7) + (c << 8) + (c << 24);
                return c >>> 0
            }

            function Ro() {}

            function So(a, c) {
                return function() {
                    a.apply(c,
                        arguments)
                }
            }

            function va(a) {
                if (!(this instanceof va)) throw new TypeError("Promises must be constructed via new");
                if ("function" !== typeof a) throw new TypeError("not a function");
                this.ua = 0;
                this.Ce = !1;
                this.Da = void 0;
                this.ib = [];
                Mi(a, this)
            }

            function Ni(a, c) {
                for (; 3 === a.ua;) a = a.Da;
                0 === a.ua ? a.ib.push(c) : (a.Ce = !0, va.De(function() {
                    var b = 1 === a.ua ? c.ii : c.ki;
                    if (null === b)(1 === a.ua ? Hf : fd)(c.Ka, a.Da);
                    else {
                        try {
                            var d = b(a.Da)
                        } catch (e) {
                            fd(c.Ka, e);
                            return
                        }
                        Hf(c.Ka, d)
                    }
                }))
            }

            function Hf(a, c) {
                try {
                    if (c === a) throw new TypeError("A promise cannot be resolved with itself.");
                    if (c && ("object" === typeof c || "function" === typeof c)) {
                        var b = c.then;
                        if (c instanceof va) {
                            a.ua = 3;
                            a.Da = c;
                            If(a);
                            return
                        }
                        if ("function" === typeof b) {
                            Mi(So(b, c), a);
                            return
                        }
                    }
                    a.ua = 1;
                    a.Da = c;
                    If(a)
                } catch (d) {
                    fd(a, d)
                }
            }

            function fd(a, c) {
                a.ua = 2;
                a.Da = c;
                If(a)
            }

            function If(a) {
                2 === a.ua && 0 === a.ib.length && va.De(function() {
                    a.Ce || va.zg(a.Da)
                });
                for (var c = 0, b = a.ib.length; c < b; c++) Ni(a, a.ib[c]);
                a.ib = null
            }

            function To(a, c, b) {
                this.ii = "function" === typeof a ? a : null;
                this.ki = "function" === typeof c ? c : null;
                this.Ka = b
            }

            function Mi(a, c) {
                var b = !1;
                try {
                    a(function(d) {
                        b || (b = !0, Hf(c, d))
                    }, function(d) {
                        b || (b = !0, fd(c, d))
                    })
                } catch (d) {
                    b || (b = !0, fd(c, d))
                }
            }

            function pb(a, c) {
                if (!c) return null;
                try {
                    return a.JSON.parse(c)
                } catch (b) {
                    return null
                }
            }

            function Sd(a, c, b, d, e, f) {
                if (Zg(a, Kc, c)) {
                    c = [c + "=" + encodeURIComponent(b)];
                    c = c.concat(Uo(a));
                    d && (b = new Date, b.setTime(b.getTime() + 6E4 * d), c.push("expires=" + b.toUTCString()));
                    e && (d = e.replace(Vo, ""), c.push("domain=" + d));
                    c.push("path=" + (f || "/"));
                    f = F(";", c);
                    try {
                        a.document.cookie = f
                    } catch (g) {}
                }
            }

            function Fc(a, c, b) {
                void 0 === c && (c =
                    "_ym_");
                void 0 === b && (b = "");
                var d = Wo(a),
                    e = 1 === (d || "").split(".").length ? d : "." + d,
                    f = b ? "_" + b : "";
                return {
                    Ub: function(g, h, k) {
                        Sd(a, "" + c + g + f, "", -100, h || e, k);
                        return this
                    },
                    l: function(g) {
                        return Kc(a, "" + c + g + f)
                    },
                    o: function(g, h, k, l, m) {
                        Sd(a, "" + c + g + f, h, k, l || e, m);
                        return this
                    }
                }
            }

            function jc(a, c) {
                var b = Xo(a);
                return b ? (b.href = c, {
                    protocol: b.protocol,
                    host: b.host,
                    port: b.port,
                    hostname: b.hostname,
                    hash: b.hash,
                    search: b.search,
                    query: b.search.replace(/^\?/, ""),
                    pathname: b.pathname || "/",
                    path: (b.pathname || "/") + b.search,
                    href: b.href
                }) : {}
            }

            function db(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] * c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] * c[3];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[2] += a[3] * c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] * c[3];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[2] * c[2];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[1] += a[3] * c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] * c[3] + a[1] * c[2] + a[2] * c[1] + a[3] * c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function Nb(a, c) {
                a = [a[0] >>> 16, a[0] & 65535, a[1] >>> 16, a[1] & 65535];
                c = [c[0] >>> 16, c[0] & 65535, c[1] >>> 16, c[1] & 65535];
                var b = [0, 0, 0, 0];
                b[3] += a[3] + c[3];
                b[2] += b[3] >>> 16;
                b[3] &= 65535;
                b[2] += a[2] + c[2];
                b[1] += b[2] >>> 16;
                b[2] &= 65535;
                b[1] += a[1] + c[1];
                b[0] += b[1] >>> 16;
                b[1] &= 65535;
                b[0] += a[0] + c[0];
                b[0] &= 65535;
                return [b[0] << 16 | b[1], b[2] << 16 | b[3]]
            }

            function uc(a, c) {
                c %= 64;
                if (32 === c) return [a[1], a[0]];
                if (32 > c) return [a[0] << c | a[1] >>> 32 - c, a[1] << c | a[0] >>> 32 - c];
                c -= 32;
                return [a[1] << c | a[0] >>> 32 - c, a[0] << c | a[1] >>> 32 - c]
            }

            function Za(a, c) {
                c %= 64;
                return 0 === c ? a :
                    32 > c ? [a[0] << c | a[1] >>> 32 - c, a[1] << c] : [a[1] << c - 32, 0]
            }

            function ia(a, c) {
                return [a[0] ^ c[0], a[1] ^ c[1]]
            }

            function Oi(a) {
                a = ia(a, [0, a[0] >>> 1]);
                a = db(a, [4283543511, 3981806797]);
                a = ia(a, [0, a[0] >>> 1]);
                a = db(a, [3301882366, 444984403]);
                return a = ia(a, [0, a[0] >>> 1])
            }

            function Yo(a, c) {
                void 0 === c && (c = 210);
                var b = a || "",
                    d = c || 0,
                    e = b.length % 16,
                    f = b.length - e,
                    g = [0, d];
                d = [0, d];
                var h = [2277735313, 289559509],
                    k = [1291169091, 658871167],
                    l;
                for (l = 0; l < f; l += 16) {
                    var m = [b.charCodeAt(l + 4) & 255 | (b.charCodeAt(l + 5) & 255) << 8 | (b.charCodeAt(l + 6) & 255) << 16 |
                        (b.charCodeAt(l + 7) & 255) << 24, b.charCodeAt(l) & 255 | (b.charCodeAt(l + 1) & 255) << 8 | (b.charCodeAt(l + 2) & 255) << 16 | (b.charCodeAt(l + 3) & 255) << 24
                    ];
                    var p = [b.charCodeAt(l + 12) & 255 | (b.charCodeAt(l + 13) & 255) << 8 | (b.charCodeAt(l + 14) & 255) << 16 | (b.charCodeAt(l + 15) & 255) << 24, b.charCodeAt(l + 8) & 255 | (b.charCodeAt(l + 9) & 255) << 8 | (b.charCodeAt(l + 10) & 255) << 16 | (b.charCodeAt(l + 11) & 255) << 24];
                    m = db(m, h);
                    m = uc(m, 31);
                    m = db(m, k);
                    g = ia(g, m);
                    g = uc(g, 27);
                    g = Nb(g, d);
                    g = Nb(db(g, [0, 5]), [0, 1390208809]);
                    p = db(p, k);
                    p = uc(p, 33);
                    p = db(p, h);
                    d = ia(d, p);
                    d = uc(d, 31);
                    d = Nb(d, g);
                    d = Nb(db(d, [0, 5]), [0, 944331445])
                }
                m = [0, 0];
                p = [0, 0];
                switch (e) {
                    case 15:
                        p = ia(p, Za([0, b.charCodeAt(l + 14)], 48));
                    case 14:
                        p = ia(p, Za([0, b.charCodeAt(l + 13)], 40));
                    case 13:
                        p = ia(p, Za([0, b.charCodeAt(l + 12)], 32));
                    case 12:
                        p = ia(p, Za([0, b.charCodeAt(l + 11)], 24));
                    case 11:
                        p = ia(p, Za([0, b.charCodeAt(l + 10)], 16));
                    case 10:
                        p = ia(p, Za([0, b.charCodeAt(l + 9)], 8));
                    case 9:
                        p = ia(p, [0, b.charCodeAt(l + 8)]), p = db(p, k), p = uc(p, 33), p = db(p, h), d = ia(d, p);
                    case 8:
                        m = ia(m, Za([0, b.charCodeAt(l + 7)], 56));
                    case 7:
                        m = ia(m, Za([0, b.charCodeAt(l + 6)],
                            48));
                    case 6:
                        m = ia(m, Za([0, b.charCodeAt(l + 5)], 40));
                    case 5:
                        m = ia(m, Za([0, b.charCodeAt(l + 4)], 32));
                    case 4:
                        m = ia(m, Za([0, b.charCodeAt(l + 3)], 24));
                    case 3:
                        m = ia(m, Za([0, b.charCodeAt(l + 2)], 16));
                    case 2:
                        m = ia(m, Za([0, b.charCodeAt(l + 1)], 8));
                    case 1:
                        m = ia(m, [0, b.charCodeAt(l)]), m = db(m, h), m = uc(m, 31), m = db(m, k), g = ia(g, m)
                }
                g = ia(g, [0, b.length]);
                d = ia(d, [0, b.length]);
                g = Nb(g, d);
                d = Nb(d, g);
                g = Oi(g);
                d = Oi(d);
                g = Nb(g, d);
                d = Nb(d, g);
                return ("00000000" + (g[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (g[1] >>> 0).toString(16)).slice(-8) + ("00000000" +
                    (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
            }

            function gd(a, c, b) {
                var d = c.getAttribute("itemtype");
                b = zb('[itemprop~="' + b + '"]', a, c);
                return d ? V(function(e) {
                    return e.parentNode && Ab("[itemtype]", a, e.parentNode) === c
                }, b) : b
            }

            function Ua(a, c, b) {
                return (a = gd(a, c, b)) && a.length ? a[0] : null
            }

            function Qa(a) {
                if (!a) return "";
                a = ca(a) ? a : [a];
                return a.length ? a[0].getAttribute("content") || a[0].innerText || "" : ""
            }

            function Pi(a) {
                return a ? a.attributes && a.getAttribute("datetime") ? a.getAttribute("datetime") :
                    Qa(a) : ""
            }

            function Qi(a) {
                return (a = Q(a).hash.split("#")[1]) ? a.split("?")[0] : ""
            }

            function Zo(a, c) {
                var b = Qi(a);
                Ri = ho(a, function() {
                    var d = Qi(a);
                    d !== b && (c(), b = d)
                }, 200, "t.h");
                return C(go, null, a, Ri)
            }

            function $o(a, c, b) {
                var d, e, f = c.Z,
                    g = c.ye,
                    h = c.$b,
                    k = S(a),
                    l = sa((d = {}, d.wh = "1", d.pv = "1", d));
                "1" === f && a.yg && a.yg.jj && l.o("ad", "1");
                g && l.o("ut", "1");
                f = k.l("lastReferrer");
                d = Q(a).href;
                h = {
                    F: (e = {}, e["page-url"] = h || d, e["page-ref"] = f, e),
                    H: l
                };
                b(h, c)["catch"](A(a, "g.s"));
                k.o("lastReferrer", d)
            }

            function ap(a, c) {
                if (Zd(a)) return oa(a,
                    c);
                Jf[c] = !0;
                return oa(a, ge[c] || 0)
            }

            function bp(a, c, b) {
                function d() {
                    Jf[t] = !0;
                    f(!1);
                    c()
                }

                function e() {
                    oa(a, ge[t]);
                    if (Jf[t]) f(!1);
                    else {
                        var I = Math.max(0, b - (m ? p : p + h(W) - q));
                        I ? ge[t] = X(a, d, I, "u.t.d.c") : d()
                    }
                }

                function f(I) {
                    z(function(aa) {
                        var ua = aa[0],
                            Ia = aa[1];
                        aa = aa[2];
                        I ? r.C(ua, Ia, aa) : r.Gb(ua, Ia, aa)
                    }, x)
                }
                var g = w(!1, f);
                if (Zd(a)) return {
                    id: X(a, c, b, "u.t.d"),
                    Oe: g
                };
                var h = ba(a),
                    k = !1,
                    l = !1,
                    m = !0,
                    p = 0,
                    q = h(W),
                    r = na(a),
                    t = Si;
                Si += 1;
                ge[t] = 0;
                var x = [
                    [a, ["blur"], function() {
                        m = k = l = !0;
                        p += h(W) - q;
                        q = h(W);
                        e()
                    }],
                    [a, ["focus"], function() {
                        k ||
                            l || (p = 0);
                        q = h(W);
                        k = l = !0;
                        m = !1;
                        e()
                    }],
                    [a.document, ["click", "mousemove", "keydown", "scroll"], function() {
                        l || (k = !0, m = !1, l = !0, e())
                    }]
                ];
                f(!0);
                e();
                return {
                    id: t,
                    Oe: g
                }
            }

            function Ll(a, c) {
                var b, d = fc(c),
                    e = qa.Nb;
                if (d && Vb("ym-advanced-informer", d)) {
                    var f = d.getAttribute("data-lang"),
                        g = parseInt(d.getAttribute("data-cid") || "", 10);
                    if (g || 0 === g) n(a, "Ya." + e + ".informer")((b = {}, b.i = d, b.id = g, b.lang = f, b)), b = c || window.event, b.preventDefault ? b.preventDefault() : b.returnValue = !1
                }
            }

            function Mc(a, c, b) {
                a = c && (ee(c.className, "ym-disable-keys") ||
                    ee(c.className, "-metrika-nokeys"));
                return b && c ? a || !!so(["ym-disable-keys", "-metrika-nokeys"], c).length : a
            }

            function eh(a, c) {
                return Xd(c) ? "password" === c.type || c.name && H(c.name.toLowerCase(), Ti) || c.id && H(c.id.toLowerCase(), Ti) : !1
            }

            function Ui(a, c) {
                var b = Math.max(0, Math.min(c, 65535));
                Sa(a, [b >> 8, b & 255])
            }

            function wb(a, c) {
                Sa(a, [c & 255])
            }

            function Ya(a, c, b) {
                return -1 !== sb(a)(b, cp) ? (wb(c, b), !1) : !0
            }

            function N(a, c) {
                for (var b = Math.max(0, c | 0); 127 < b;) Sa(a, [b & 127 | 128]), b >>= 7;
                Sa(a, [b])
            }

            function Kf(a, c) {
                N(a, c.length);
                for (var b = 0; b < c.length; b += 1) N(a, c.charCodeAt(b))
            }

            function Lf(a, c) {
                var b = c;
                255 < b.length && (b = b.substr(0, 255));
                a.push(b.length);
                for (var d = 0; d < b.length; d += 1) Ui(a, b.charCodeAt(d))
            }

            function dp(a, c) {
                var b = [];
                if (Ya(a, b, 27)) return [];
                N(b, c);
                return b
            }

            function ep(a, c) {
                var b = ya(c);
                if (!b) return c[Ka] = -1, null;
                var d = +c[Ka];
                if (!isFinite(d) || 0 >= d) return null;
                if (c.attributes)
                    for (var e = c; e;) {
                        if (e.attributes.qj) return null;
                        e = e.parentElement
                    }
                e = 64;
                var f = Vd(a, c),
                    g = f && f[Ka] ? f[Ka] : 0;
                0 > g && (g = 0);
                b = (b || "").toUpperCase();
                var h =
                    fp()[b];
                h || (e |= 2);
                var k = xi(a, c);
                k || (e |= 4);
                var l = Te(a, c);
                (f = f ? Te(a, f) : null) && l[0] === f[0] && l[1] === f[1] && l[2] === f[2] && l[3] === f[3] && (e |= 8);
                Ub[d].Af = l[0] + "x" + l[1];
                Ub[d].size = l[2] + "x" + l[3];
                c.id && "string" === typeof c.id && (e |= 32);
                f = [];
                if (Ya(a, f, 1)) return null;
                N(f, d);
                wb(f, e);
                N(f, g);
                h ? wb(f, h) : Lf(f, b);
                k && N(f, k);
                e & 8 || (N(f, l[0]), N(f, l[1]), N(f, l[2]), N(f, l[3]));
                e & 32 && Lf(f, c.id);
                wb(f, 0);
                return f
            }

            function gp(a, c) {
                var b = c[Ka];
                if (!b || 0 > b || !Re(c) || !c.form || gh(a, c.form)) return [];
                var d = zi(a, c.form);
                if (0 > d) return [];
                if (Xd(c)) {
                    var e = {
                        text: 0,
                        color: 0,
                        Tb: 0,
                        wj: 0,
                        "datetime-local": 0,
                        email: 0,
                        xf: 0,
                        Nj: 0,
                        search: 0,
                        Qj: 0,
                        time: 0,
                        url: 0,
                        month: 0,
                        Sj: 0,
                        password: 2,
                        Mj: 3,
                        tj: 4,
                        file: 6,
                        image: 7
                    };
                    e = e[c.type]
                } else {
                    e = {
                        nj: 1,
                        oj: 5
                    };
                    var f = ya(c);
                    e = R(f) ? "" : e[f]
                }
                if ("number" !== typeof e) return [];
                f = -1;
                for (var g = c.form.elements, h = g.length, k = 0, l = 0; k < h; k += 1)
                    if (g[k].name === c.name) {
                        if (g[k] === c) {
                            f = l;
                            break
                        }
                        l += 1
                    }
                if (0 > f) return [];
                g = [];
                if (Ya(a, g, 7)) return [];
                N(g, b);
                N(g, d);
                N(g, e);
                Kf(g, c.name || "");
                N(g, f);
                return g
            }

            function hp(a, c, b) {
                var d = zi(a, b);
                if (0 > d) return [];
                var e = b.elements,
                    f = e.length;
                b = [];
                for (var g = 0; g < f; g += 1)
                    if (!yi(e[g])) {
                        var h = e[g][Ka];
                        h && 0 < h && b.push(h)
                    }
                e = [];
                if (Ya(a, e, 11)) return [];
                N(e, c);
                N(e, d);
                N(e, b.length);
                for (a = 0; a < b.length; a += 1) N(e, b[a]);
                return e
            }

            function Tb(a, c, b) {
                void 0 === b && (b = []);
                for (var d = []; c && !ul(a, c, b); c = Vd(a, c)) d.push(c);
                z(function(e) {
                    Ub.ad += 1;
                    var f = Ub.ad;
                    e[Ka] = f;
                    Ub[f] = {};
                    f = ep(a, e);
                    e = gp(a, e);
                    f && e && (Sa(b, f), Sa(b, e))
                }, ip(d));
                return b
            }

            function jp(a) {
                var c = a.ea;
                if (!Lc || c && !c.fromElement) return ch(a)
            }

            function kp(a) {
                var c = a.ea;
                if (c && !c.toElement) return Se(a)
            }

            function Vi(a) {
                var c = fc(a.ea);
                if (c && zd(c)) {
                    var b = bh(a, c);
                    var d = jb(a.b),
                        e = [];
                    Ya(a.b, e, 17) ? a = [] : (N(e, d), N(e, c[Ka]), a = e);
                    return fa(b, a)
                }
            }

            function Wi(a) {
                var c = a.b,
                    b = a.ea.target;
                if (b && zd(b)) {
                    c = Tb(c, b);
                    var d = jb(a.b),
                        e = [];
                    Ya(a.b, e, 18) ? a = [] : (N(e, d), N(e, b[Ka]), a = e);
                    return fa(c, a)
                }
            }

            function Xi(a) {
                var c = a.b,
                    b = fc(a.ea);
                if (!b || eh(c, b) || Mc(c, b)) return [];
                if (Re(b)) {
                    var d = S(c).l("isEU"),
                        e = kc(c, b, d);
                    d = kc(c, b);
                    if (Yd(b)) var f = b.checked;
                    else f = b.value, f = e ? F("", Yi(f.split(""))) : f;
                    c = Tb(c, b);
                    e = jb(a.b);
                    var g = [];
                    Ya(a.b, g,
                        39) ? a = [] : (N(g, e), N(g, b[Ka]), Lf(g, String(f)), wb(g, d ? 1 : 0), a = g);
                    return fa(c, a)
                }
            }

            function he(a) {
                var c = a.b,
                    b = a.ea,
                    d = fc(b);
                if (!d || "SCROLLBAR" === d.nodeName) return [];
                var e = [],
                    f = w(e, Sa);
                d && zd(d) ? f(bh(a, d)) : f(Tb(c, d));
                var g = ih(c, b);
                a = jb(a.b);
                f = b.type;
                var h = [g.x, g.y];
                g = b.which;
                b = b.button;
                var k;
                var l = Wd(c, d);
                var m = l[0];
                for (l = l[1]; d && (!m || !l);)
                    if (d = Vd(c, d)) l = Wd(c, d), m = l[0], l = l[1];
                d ? (m = d[Ka], !m || 0 > m ? c = [] : (l = (k = {}, k.mousemove = 2, k.click = 32, k.dblclick = 33, k.mousedown = 4, k.mouseup = 30, k.touch = 12, k)[f]) ? (k = [], d = Af(c, d),
                    Ya(c, k, l) ? c = [] : (N(k, a), N(k, m), N(k, Math.max(0, h[0] - d.left)), N(k, Math.max(0, h[1] - d.top)), /^mouse(up|down)|click$/.test(f) && (c = g || b, wb(k, 2 > c ? 1 : c === (g ? 2 : 4) ? 4 : 2)), c = k)) : c = []) : c = [];
                return fa(e, c)
            }

            function lp(a) {
                var c = null,
                    b = a.b,
                    d = b.document;
                if (b.getSelection) {
                    d = void 0;
                    try {
                        d = b.getSelection()
                    } catch (g) {
                        return []
                    }
                    if (Ma(d)) return [];
                    var e = "" + d;
                    c = d.anchorNode
                } else d.selection && d.selection.createRange && (d = d.selection.createRange(), e = d.text, c = d.parentElement());
                if ("string" !== typeof e) return [];
                try {
                    for (; c && 1 !== c.nodeType;) c =
                        c.parentNode
                } catch (g) {
                    return []
                }
                if (!c) return [];
                d = kc(b, c) || Mc(b, c, !0);
                c = c.getElementsByTagName("*");
                for (var f = 0; f < c.length && !d;) d = c[f], d = kc(b, d) || Mc(b, d, !0), f += 1;
                if (e !== Mf) return Mf = e, d = d ? F("", Yi(e.split(""))) : e, e = jb(a.b), 0 === d.length ? d = b = "" : 100 >= d.length ? (b = d, d = "") : 200 >= d.length ? (b = d.substr(0, 100), d = d.substr(100)) : (b = d.substr(0, 97), d = d.substr(d.length - 97)), c = [], Ya(a.b, c, 29) ? a = [] : (N(c, e), Kf(c, b), Kf(c, d), a = c), a
            }

            function mp(a) {
                return fa(he(a), lp(a) || [])
            }

            function Zi(a) {
                return (a.shiftKey ? 2 : 0) | (a.ctrlKey ?
                    4 : 0) | (a.altKey ? 1 : 0) | (a.metaKey ? 8 : 0) | (a.ctrlKey || a.altKey ? 16 : 0)
            }

            function $i(a) {
                var c = [];
                Nf || (Nf = !0, Mf && c.push.apply(c, dp(a.b, jb(a.b))), ub(a.b, function() {
                    Nf = !1
                }, "fv.c"));
                return c
            }

            function aj(a, c, b, d) {
                var e = fc(c);
                if (!e || dh(a, e)) return [];
                var f = vd(e),
                    g = Ad(e);
                c = kc(a, e);
                var h = S(a);
                if (!f && (g && h.l("isEU") || Mc(a, e))) a = [];
                else {
                    f = Tb(a, e);
                    h = jb(a);
                    g = [];
                    if (Ya(a, g, 38)) a = [];
                    else {
                        N(g, h);
                        Ui(g, b);
                        wb(g, d);
                        a = e[Ka];
                        if (!a || 0 > a) a = 0;
                        N(g, a);
                        wb(g, c ? 1 : 0);
                        a = g
                    }
                    a = fa(f, a)
                }
                return a
            }

            function np(a) {
                var c = a.b,
                    b = a.ea,
                    d = b.keyCode,
                    e = Zi(b),
                    f = [],
                    g = w(f, Sa);
                if ({
                        3: 1,
                        8: 1,
                        9: 1,
                        13: 1,
                        16: 1,
                        17: 1,
                        18: 1,
                        19: 1,
                        20: 1,
                        27: 1,
                        33: 1,
                        34: 1,
                        35: 1,
                        36: 1,
                        37: 1,
                        38: 1,
                        39: 1,
                        40: 1,
                        45: 1,
                        46: 1,
                        91: 1,
                        92: 1,
                        93: 1,
                        106: 1,
                        110: 1,
                        111: 1,
                        144: 1,
                        145: 1
                    }[d] || 112 <= d && 123 >= d || 96 <= d && 105 >= d || e & 16) 19 === d && 4 === (e & -17) && (d = 144), g(aj(c, b, d, e | 16)), Of = !1, ub(c, function() {
                    Of = !0
                }, "fv.kd"), !(67 === d && e & 4) || e & 1 || e & 2 || g($i(a));
                return f
            }

            function op(a) {
                var c = a.b;
                a = a.ea;
                var b = [];
                Of && !Pf && 0 !== a.which && (b.push.apply(b, aj(c, a, a.charCode || a.keyCode, Zi(a))), Pf = !0, ub(c, function() {
                    Pf = !1
                }, "fv.kp"));
                return b
            }

            function bj(a) {
                var c =
                    a.b,
                    b = fc(a.ea);
                if (!b || gh(c, b)) return [];
                var d = [];
                if ("FORM" === b.nodeName) {
                    for (var e = b.elements, f = 0; f < e.length; f += 1) yi(e[f]) || d.push.apply(d, Tb(c, e[f]));
                    d.push.apply(d, hp(c, jb(a.b), b))
                }
                return d
            }

            function pp(a) {
                var c = a.flush;
                a = fc(a.ea);
                "BODY" === ya(a) && c()
            }

            function ie(a, c, b) {
                return function() {
                    var d = La(a, c),
                        e = Ba(arguments);
                    if (d) return b.apply(void 0, e)
                }
            }

            function qp(a, c, b) {
                return function() {
                    var d = La(a, c),
                        e = Ba(arguments);
                    b.apply(void 0, e);
                    return d
                }
            }

            function rp(a, c, b, d) {
                return function() {
                    for (var e = [], f = 0; f <
                        arguments.length; f++) e[f] = arguments[f];
                    f = yd(function(g) {
                        return !1 === g
                    }, e);
                    return 0 < e.length && f || !b.length || !d ? d : u.apply(void 0, J(function(g, h, k) {
                        return !1 === e[k] ? g : g.concat(function() {
                            for (var l = [], m = 0; m < arguments.length; m++) l[m] = arguments[m];
                            return h.apply(void 0, fa([a, c], l))
                        })
                    }, [], b))(d)
                }
            }
            var $c = {
                    construct: "Metrika2",
                    callbackPostfix: "2",
                    version: "4bjmbg3ayomqwinwev"
                },
                Gf = [],
                Li = Da(String.prototype.indexOf, "indexOf"),
                Bh = /^\s+|\s+$/g,
                ae = Da(Array.from, "from"),
                cj = Da(Array.prototype.join, "join"),
                F = cj ? function(a,
                    c) {
                    return cj.call(c, a)
                } : Qo,
                xa = Ca(function(a, c) {
                    return a === c
                }),
                Jc = Ca(function(a, c) {
                    a(c);
                    return c
                }),
                Oc = Ca(F),
                la = Ca(Ji),
                Ma = xa(null),
                R = xa(void 0),
                dj = Da(Function.prototype.bind, "bind"),
                C = dj ? function() {
                    var a = Ba(arguments);
                    return dj.apply(a[0], fa([a[1]], a.slice(2)))
                } : Po,
                zh = Ca(M),
                Xk = Ca(da),
                ej = Da(Array.prototype.reduce, "reduce"),
                J = ej ? function(a, c, b) {
                    return ej.call(b, a, c)
                } : dd,
                U = de(n),
                mc = U("length"),
                ui = u,
                ed, Oo = u(xf, xa("[object Array]")),
                Ef = Object.prototype.hasOwnProperty,
                Aa = Object.entries ? function(a) {
                    return a ?
                        Object.entries(a) : []
                } : Jo,
                ea = Object.keys ? Object.keys : Hi,
                B = Object.assign || Mo,
                ah = Ca(function(a, c) {
                    return B({}, a, c)
                }),
                Df, Gi = sb(window),
                sp = de(Gi),
                S = v(function(a) {
                    a = a.Ya = a.Ya || {};
                    var c = a._metrika = a._metrika || {};
                    return {
                        Na: function(b, d) {
                            Ef.call(c, b) || (c[b] = d);
                            return this
                        },
                        o: function(b, d) {
                            c[b] = d;
                            return this
                        },
                        l: function(b, d) {
                            var e = c[b];
                            return Ef.call(c, b) || R(d) ? e : d
                        }
                    }
                }),
                yd = Array.prototype.every ? function(a, c) {
                    return Array.prototype.every.call(c, a)
                } : function(a, c) {
                    return J(function(b, d) {
                        return b ? a(d) : !1
                    }, !0, c)
                },
                fj = Da(Array.prototype.filter, "filter"),
                V = fj ? function(a, c) {
                    return fj.call(c, a)
                } : Ii,
                oc = Ca(V),
                $a = be(function(a, c) {
                    return Array.prototype.find.call(c, a)
                }, function(a, c) {
                    for (var b = 0; b < c.length; b += 1)
                        if (a.call(c, c[b], b)) return c[b]
                }, pa("find", Array.prototype.find)),
                H = Array.prototype.includes ? function(a, c) {
                    return Array.prototype.includes.call(c, a)
                } : No,
                Fb = de(H),
                gj = v(function(a) {
                    a = n(a, "navigator") || {};
                    var c = n(a, "userAgent") || "";
                    return {
                        jf: -1 < (n(a, "vendor") || "").indexOf("Apple"),
                        ig: c
                    }
                }),
                Wc = v(function(a) {
                    var c =
                        n(a, "document.documentElement.style");
                    a = n(a, "InstallTrigger");
                    return !(!(c && "MozAppearance" in c) || wa(a))
                }),
                hj = Da(Array.prototype.map, "map"),
                y = hj && Go(window, Array.prototype.map) ? function(a, c) {
                    return c && 0 < c.length ? hj.call(c, a) : []
                } : Lo,
                z = y,
                Qb = Array.prototype.flatMap ? function(a, c) {
                    return Array.prototype.flatMap.call(c, a)
                } : Ko,
                kb = Ca(y),
                io = de(y),
                Ta = be(function(a, c) {
                    return Array.prototype.some.call(c, a)
                }, function(a, c) {
                    for (var b = 0; b < c.length; b += 1)
                        if (b in c && a.call(c, c[b], b)) return !0;
                    return !1
                }, pa("some", Array.prototype.some)),
                je = v(sb),
                tp = Ca(Ie),
                ij = Da(Array.prototype.reverse, "reverse"),
                ip = ij ? function(a) {
                    return ij.call(a)
                } : Fo,
                Uc = v(u(U("String.fromCharCode"), w("fromCharCode", pa), cc)),
                ib = v(U("navigator.userAgent")),
                $d = v(u(ib, Xa(/ipad|iphone|ipod/i))),
                Qf = v(function(a) {
                    return n(a, "navigator.platform") || ""
                }),
                Ih = v(function(a) {
                    a = gj(a);
                    var c = a.ig;
                    return a.jf && (!c.match(/Safari/) && c.match(/Mobile/) || c.match(/CFNetwork\/[0-9][0-9.]*.*Darwin\/[0-9][0-9.]*/) || -1 !== c.indexOf("FB_IAB") || -1 !== c.indexOf("FBAV") || -1 !== c.indexOf("OKApp") ||
                        -1 !== c.indexOf("GSA/"))
                }),
                Vc = v(function(a) {
                    a = gj(a);
                    var c = a.ig;
                    return a.jf && !c.match("CriOS")
                }),
                Id = v(u(ib, da("test", /Android.*Version\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]|Android.*Version\/[0-9][0-9.]*\s(?:Mobile\s)?Safari\/[0-9][0-9.]*\sChrome\/[0-9][0-9.]*|; wv\).*Chrome\/[0-9][0-9.]*\sMobile/))),
                up = /Chrome\/(\d+)\./,
                vp = v(function(a) {
                    return (a = (n(a, "navigator.userAgent") || "").match(up)) && a.length ? 76 <= parseInt(a[1], 10) : !1
                }),
                cd = v(function(a) {
                    var c = (ib(a) || "").toLowerCase();
                    a = Qf(a);
                    return !(-1 === c.indexOf("android") ||
                        -1 === c.indexOf(c, "mobile") || !/^android|linux armv/i.test(a))
                }),
                wp = "other none unknown wifi ethernet bluetooth cellular wimax mixed".split(" "),
                xp = v(function(a) {
                    var c = n(a, "navigator.connection.type");
                    if (R(c)) return null;
                    a = je(a)(c, wp);
                    return -1 === a ? c : "" + a
                }),
                Zd = v(u(U("document.addEventListener"), cc)),
                jj = v(function(a) {
                    var c = n(a, "navigator") || {};
                    return J(function(b, d) {
                        return b || n(c, d)
                    }, "", ["language", "userLanguage", "browserLanguage", "systemLanguage"])
                }),
                Fh = v(function(a) {
                    var c = n(a, "navigator") || {};
                    a = jj(a);
                    Na(a) || (a = "", c = n(c, "languages.0"), Na(c) && (a = c));
                    return a.toLowerCase().split("-")[0]
                }),
                tb = v(function(a) {
                    var c = !1;
                    try {
                        c = a.top !== a
                    } catch (b) {}
                    return c
                }),
                yp = v(function(a) {
                    var c = !1;
                    try {
                        c = a.top.contentWindow
                    } catch (b) {}
                    return c
                }),
                zp = v(function(a) {
                    var c = !1;
                    try {
                        c = a.navigator.javaEnabled()
                    } catch (b) {}
                    return c
                }),
                Ap = v(function(a) {
                    var c = "__webdriver_evaluate __selenium_evaluate __webdriver_script_function __webdriver_script_func __webdriver_script_fn __fxdriver_evaluate __driver_unwrapped __webdriver_unwrapped __driver_evaluate __selenium_unwrapped __fxdriver_unwrapped".split(" "),
                        b = n(a, "external");
                    b = -1 !== (n(b, "toString") ? "" + b.toString() : "").indexOf("Sequentum");
                    var d = n(a, "document.documentElement"),
                        e = ["selenium", "webdriver", "driver"];
                    return !!(Ta(w(a, n), ["_selenium", "callSelenium", "_Selenium_IDE_Recorder"]) || Ta(w(n(a, "document"), n), c) || b || d && Ta(C(d.getAttribute, d), e))
                }),
                Bp = v(function(a) {
                    return !!(Ta(w(a, n), ["_phantom", "__nightmare", "callPhantom"]) || /(PhantomJS)|(HeadlessChrome)/.test(ib(a)) || n(a, "navigator.webdriver") || n(a, "isChrome") && !n(a, "chrome"))
                }),
                Cp = v(function(a) {
                    return yd(w(a,
                        n), ["ia_document.shareURL", "ia_document.referrer"])
                }),
                Dp = v(function(a) {
                    a = n(a, "navigator.plugins");
                    return !!(a && mc(a) && Ta(u(U("name"), Xa(/Chrome PDF Viewer/)), a))
                }),
                Ep = new RegExp(F("|", "yandex.com/bots;Googlebot;APIs-Google;Mediapartners-Google;AdsBot-Google;FeedFetcher-Google;Google-Read-Aloud;DuplexWeb-Google;Google Favicon;googleweblight;Mail.RU_Bot;StackRambler;Slurp;msnbot;bingbot;www.baidu.com/search/spi_?der.htm".split(";")).replace(/[./]/g, "\\$&")),
                sn = v(u(U("navigator.userAgent"), Xa(Ep))),
                ke =
                v(function(a) {
                    var c = ib(a) || "",
                        b = c.match(/Mac OS X ([0-9]+)_([0-9]+)/);
                    b = b ? [+b[1], +b[2]] : [0, 0];
                    c = c.match(/iPhone OS ([1-9]+)_([0-9]+)/);
                    return 14 <= (c ? +c[1] : 0) ? !0 : ($d(a) || 10 < b[0] || 10 === b[0] && 13 <= b[1]) && Vc(a)
                }),
                Fp = $c.construct,
                Rf = Zd(window),
                qa = {
                    vg: 24226447,
                    pg: 26302566,
                    xg: 51533966,
                    kj: 65446441,
                    Pa: "https:",
                    Fa: "700",
                    Nb: Fp,
                    ug: Rf ? 512 : 2048,
                    rg: Rf ? 512 : 2048,
                    sg: Rf ? 100 : 400,
                    lj: 100,
                    mj: "noindex"
                },
                Mb = {},
                T = v(function(a) {
                    return a.id + ":" + a.Z
                }),
                Ga = {
                    id: "id",
                    ye: "ut",
                    Z: "type",
                    Fd: "ldc",
                    Za: "nck",
                    $b: "url",
                    nh: "referrer"
                },
                Gp = /^\d+$/,
                Ob = {
                    id: function(a) {
                        a = "" + (a || "0");
                        Gp.test(a) || (a = "0");
                        try {
                            var c = parseInt(a, 10)
                        } catch (b) {
                            c = 0
                        }
                        return c
                    },
                    Z: function(a) {
                        return "" + (a || 0 === a ? a : "0")
                    },
                    Za: Boolean,
                    ye: Boolean
                };
            Ga.Ob = "defer";
            Ob.Ob = Boolean;
            Ga.ej = "yaDisableGDPR";
            Ga.fj = "yaGDPRLang";
            Ga.exp = "experiments";
            Ga.hd = "ecommerce";
            Ob.hd = function(a) {
                if (a) return !0 === a ? "dataLayer" : "" + a
            };
            Ga.N = "params";
            Ga.Sc = "userParams";
            Ga.Jb = "accurateTrackBounce";
            Ga.eg = "triggerEvent";
            Ob.eg = Boolean;
            Ga.Rf = "sendTitle";
            Ob.Rf = function(a) {
                return !!a || R(a)
            };
            Ga.te = "trackHash";
            Ob.te = Boolean;
            Ga.Qg = "clickmap";
            Ga.Oa = "webvisor";
            Ob.Oa = Boolean;
            Ga.Vi = "trustedDomains";
            Ga.lb = "childIframe";
            Ob.lb = Boolean;
            Ga.Pc = "trackLinks";
            Ga.Zg = "enableAll";
            var kj = J(function(a, c) {
                    var b = c[0];
                    a[b] = {
                        zf: c[1],
                        bi: Ob[b]
                    };
                    return a
                }, {}, Aa(Ga)),
                sa = Ci(function(a) {
                    var c = "";
                    a = J(function(b, d) {
                        var e = d[0],
                            f = "" + e + ":" + d[1];
                        "t" === e ? c = f : b.push(f);
                        return b
                    }, [], Aa(a));
                    c && a.push(c);
                    return F(":", a)
                }),
                Bo = "hash host hostname href pathname port protocol search".split(" "),
                $h = "ru ua by kz az kg lv md tj tm uz ee fr co.il com.ge com.am com.tr".split(" "),
                mn = v(function(a) {
                    a = Q(a).hostname.split(".");
                    return a[a.length - 1]
                }),
                Hp = v(function(a) {
                    return -1 !== Q(a).hostname.search(/(?:^|\.)(?:ya|yandex|beru|kinopoisk|edadeal)\.(?:\w+|com?\.\w+)$/)
                }),
                nh = v(function(a) {
                    return (a ? a.replace(/^www\./, "") : "").toLowerCase()
                }),
                Ip = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|deli\.yango\.com|yastatic\.net|meteum\.ai|.*\.yandex|turbopages\.org|turbo\.site)$/,
                df = v(function(a) {
                    a = Q(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(Ip));
                    return c
                }),
                Jp = /^(.*\.)?((yandex(-team)?)\.(com?\.)?[a-z]+|(auto|kinopoisk|beru|bringly)\.ru|ya\.(ru|cc)|yadi\.sk|.*\.yandex|turbopages\.org|turbo\.site)$/,
                Zl = v(function(a) {
                    a = Q(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(Jp));
                    return c
                }),
                Kp = /(?:^|\.)(?:ya|yandex)\.(?:\w+|com?\.\w+)$/,
                Lp = v(function(a) {
                    a = Q(a).hostname;
                    var c = !1;
                    a && (c = -1 !== a.search(Kp));
                    return c
                }),
                Uo = v(function(a) {
                    var c = [];
                    vp(a) && "https:" === Q(a).protocol && (c.push("SameSite=None"), c.push("Secure"));
                    return c
                }),
                Mp = v(function(a) {
                    var c = !1;
                    if (!a.addEventListener) return c;
                    try {
                        var b = Object.defineProperty({}, "passive", {
                            get: function() {
                                c = !0;
                                return 1
                            }
                        });
                        a.addEventListener("test", D, b)
                    } catch (d) {}
                    return c
                }),
                Np = Ca(function(a, c) {
                    return a ? B({
                        capture: !0,
                        passive: !0
                    }, c || {}) : !!c
                }),
                na = v(function(a) {
                    a = Mp(a);
                    var c = Np(a),
                        b = {};
                    return B(b, {
                        C: function(d, e, f, g) {
                            z(function(h) {
                                var k = c(g);
                                Bi(d, h, f, k, !1)
                            }, e);
                            return C(b.Gb, b, d, e, f, g)
                        },
                        Gb: function(d, e, f, g) {
                            z(function(h) {
                                var k = c(g);
                                Bi(d, h, f, k, !0)
                            }, e)
                        }
                    })
                }),
                Op = setTimeout;
            va.prototype["catch"] = function(a) {
                return this.then(null, a)
            };
            va.prototype.then =
                function(a, c) {
                    var b = new this.constructor(Ro);
                    Ni(this, new To(a, c, b));
                    return b
                };
            va.prototype["finally"] = function(a) {
                var c = this.constructor;
                return this.then(function(b) {
                    return c.resolve(a()).then(function() {
                        return b
                    })
                }, function(b) {
                    return c.resolve(a()).then(function() {
                        return c.reject(b)
                    })
                })
            };
            va.all = function(a) {
                return new va(function(c, b) {
                    function d(h, k) {
                        try {
                            if (k && ("object" === typeof k || "function" === typeof k)) {
                                var l = k.then;
                                if ("function" === typeof l) {
                                    l.call(k, function(m) {
                                        d(h, m)
                                    }, b);
                                    return
                                }
                            }
                            e[h] = k;
                            0 === --f &&
                                c(e)
                        } catch (m) {
                            b(m)
                        }
                    }
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.all accepts an array"));
                    var e = Array.prototype.slice.call(a);
                    if (0 === e.length) return c([]);
                    for (var f = e.length, g = 0; g < e.length; g++) d(g, e[g])
                })
            };
            va.resolve = function(a) {
                return a && "object" === typeof a && a.constructor === va ? a : new va(function(c) {
                    c(a)
                })
            };
            va.reject = function(a) {
                return new va(function(c, b) {
                    b(a)
                })
            };
            va.race = function(a) {
                return new va(function(c, b) {
                    if (!a || "undefined" === typeof a.length) return b(new TypeError("Promise.race accepts an array"));
                    for (var d = 0, e = a.length; d < e; d++) va.resolve(a[d]).then(c, b)
                })
            };
            va.De = "function" === typeof setImmediate && function(a) {
                setImmediate(a)
            } || function(a) {
                Op(a, 0)
            };
            va.zg = function(a) {
                "undefined" !== typeof console && console && console.warn("Possible Unhandled Promise Rejection:", a)
            };
            var L = window.Promise,
                Pp = Da(L, "Promise"),
                lj = Da(n(L, "resolve"), "resolve"),
                mj = Da(n(L, "reject"), "reject"),
                nj = Da(n(L, "all"), "all");
            if (H(!1, [Pp, lj, mj, nj])) L = va;
            else {
                var le = function(a) {
                    return new Promise(a)
                };
                le.resolve = C(lj, L);
                le.reject = C(mj,
                    L);
                le.all = C(nj, L);
                L = le
            }
            var ko = ["http.0.st..rt.", "network error occurred", "send beacon", "Content Security Policy", "DOM Exception 18"],
                hd, Zc = function(a) {
                    return function(c) {
                        if (hd) return new hd(c);
                        if (pa("Error", a.Error)) return hd = a.Error, new a.Error(c);
                        hd = Ao;
                        return new hd(c)
                    }
                }(window),
                lo = Xa(/^http./),
                jo = Xa(/^err.kn/),
                xo = /[^a-z0-9.:-]/,
                yo = ha(function(a, c, b) {
                    var d, e = new a.XMLHttpRequest,
                        f = b.Y,
                        g = B(b.Be ? (d = {}, d.wmode = "7", d) : {}, b.Bb);
                    return new L(function(h, k) {
                        e.open(b.jg || "GET", c + "?" + Bc(g), !0);
                        e.withCredentials = !1 !== b.lg;
                        b.Nc && (e.timeout = b.Nc);
                        ui(Aa, kb(function(m) {
                            e.setRequestHeader(m[0], m[1])
                        }))(b.Ab);
                        var l = ha(zo)(a, e, ob(b.wa), b.Be, b.Ai, h, k);
                        e.onreadystatechange = l;
                        try {
                            e.send(f)
                        } catch (m) {}
                    })
                }),
                Qp = v(function(a) {
                    a = n(a, "document") || {};
                    return ("" + (a.characterSet || a.charset || "")).toLowerCase()
                }),
                ab = v(u(U("document"), w("createElement", Kb))),
                hh = v(function(a) {
                    var c = n(a, "Element.prototype");
                    return c ? (a = $a(function(b) {
                            return pa(b, c[b])
                        }, ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"])) ?
                        c[a] : null : null
                }),
                Rp = xa("INPUT"),
                Xd = u(ya, Rp),
                Sp = xa("TEXTAREA"),
                uo = u(ya, Sp),
                Tp = xa("SELECT"),
                vo = u(ya, Tp),
                Yd = u(U("type"), Xa(/^(checkbox|radio)$/)),
                Re = u(ya, Xa(/^INPUT|SELECT|TEXTAREA$/)),
                zd = u(ya, Xa(/^INPUT|SELECT|TEXTAREA|BUTTON$/)),
                Ue = "INPUT CHECKBOX RADIO TEXTAREA SELECT PROGRESS".split(" "),
                to = ["submit", "image", "hidden"],
                Up = ha(Ab),
                oj = "A B BIG BODY BUTTON DD DIV DL DT EM FIELDSET FORM H1 H2 H3 H4 H5 H6 HR I IMG INPUT LI OL P PRE SELECT SMALL SPAN STRONG SUB SUP TABLE TBODY TD TEXTAREA TFOOT TH THEAD TR U UL ABBR AREA BLOCKQUOTE CAPTION CENTER CITE CODE CANVAS DFN EMBED FONT INS KBD LEGEND LABEL MAP OBJECT Q S SAMP STRIKE TT ARTICLE AUDIO ASIDE FOOTER HEADER MENU METER NAV PROGRESS SECTION TIME VIDEO NOINDEX NOBR MAIN svg circle clippath ellipse defs foreignobject g glyph glyphref image line lineargradient marker mask path pattern polygon polyline radialgradient rect set text textpath title".split(" "),
                wi = v(function() {
                    for (var a = 59, c = {}, b = 0; b < oj.length; b += 1) c[oj[b]] = String.fromCharCode(a), a += 1;
                    return c
                }),
                pj = ha(zb),
                si = {},
                zf = {};
            si.p = 500;
            var ri = {
                i: "id",
                n: "name",
                h: "href",
                ty: "type"
            };
            zf.h = !0;
            zf.c = !0;
            var sc = {};
            sc.p = vi;
            sc.c = function(a, c, b) {
                (a = Wb(n(c, "textContent"))) && b && (b = b(c), b.length && Ta(u(U("textContent"), Wb, xa(a)), b) && (a = ""));
                Xd(c) && (a = Wb(c.getAttribute && c.getAttribute("value") || a));
                return a
            };
            var vc, yf = "button," + y(function(a) {
                    return 'input[type="' + a + '"]'
                }, ["button", "submit", "reset", "file"]).join(",") +
                ",a",
                qi = pj(yf),
                ro = (vc = {}, vc.A = "h", vc.BUTTON = "i", vc.DIV = "i", vc.INPUT = "ty", vc),
                qo = ha(function(a, c, b, d) {
                    return new L(function(e, f) {
                        var g = Sb(a),
                            h = c("img"),
                            k = u(w(h, rc), w(ob(d.wa), f)),
                            l = Ud(a, k, d.Nc || 3E3);
                        h.onerror = k;
                        h.onload = u(w(h, rc), w(null, e), M([a, l], oa));
                        k = B({}, d.Bb);
                        delete k.wmode;
                        h.src = Ai(b, d, k);
                        Vc(a) && (B(h.style, {
                            position: "absolute",
                            visibility: "hidden",
                            width: "0px",
                            height: "0px"
                        }), g.appendChild(h))
                    })
                }),
                no = ha(function(a, c, b) {
                    return new L(function(d, e) {
                        var f, g, h = "_ymjsp" + Wa(a),
                            k = B((f = {}, f.callback = h,
                                f), b.Bb),
                            l = M([a, h], po);
                        a[h] = function(p) {
                            try {
                                l(), rc(m), d(p)
                            } catch (q) {
                                e(q)
                            }
                        };
                        k.wmode = "5";
                        var m = lc(a, (g = {}, g.src = Ai(c, b, k), g));
                        if (!m) return l(), e(Zc("jp.s"));
                        f = w(m, rc);
                        f = u(f, w(ob(b.wa), e));
                        g = Ud(a, f, b.Nc || 1E4);
                        g = M([a, g], oa);
                        m.onload = g;
                        m.onerror = u(l, g, f)
                    })
                }),
                mo = ha(function(a, c, b, d) {
                    return new L(function(e, f) {
                        if (!n(a, "navigator.onLine")) return f();
                        var g = B(d.Bb, {
                            "force-urlencoded": 1
                        });
                        return c(b + "?" + Bc(g), d.Y) ? e("") : f()
                    })
                }),
                oo = Ci(function(a) {
                    a = Aa(a);
                    return F("", y(function(c) {
                        var b = c[0];
                        c = c[1];
                        return Ma(c) ?
                            "" : b + "(" + c + ")"
                    }, a))
                }),
                id;
            var dc = [pi, 0, Lb, wf, ad];
            var qj = [Lb];
            qj.push(wf);
            var rj = yb(qj),
                wc = yb([ad]),
                Vp = yb([pi, ad]),
                me = yb([0, Lb, wf, ad]);
            var ra = (id = {}, id.h = rj, id.f = rj, id.er = wc, id);
            ra.d = wc;
            ra.s = yb([Lb]);
            ra.S = ra.s;
            ra.u = wc;
            ra.pi = wc;
            ra.m = Vp;
            ra["2"] = dc;
            ra["6"] = yb([0, Lb]);
            ra.t = dc;
            ra.a = me;
            ra.n = dc;
            ra.p = yb([0, Lb]);
            ra["4"] = yb([0, Lb, ad]);
            ra.r = me;
            ra["1"] = me;
            ra.g = me;
            ra.c = wc;
            ra.e = dc;
            ra.adb = wc;
            ra.W = yb([0, Lb]);
            ra["5"] = dc;
            var vf = v(function(a, c) {
                    var b;
                    (b = c ? ra[c] : dc) || (b = []);
                    b = J(function(d, e, f) {
                        (e = e && e(a)) && d.push([f, e]);
                        return d
                    }, [], b);
                    b.length || Cf();
                    return b
                }, qb),
                Jb = ["0", "1", "2", "3"],
                pc = Jb[0],
                ef = Jb[1],
                eo = Jb[2],
                ff = y(u(O, da("concat", "GDPR-ok-view-detailed-")), Jb),
                Hd = fa("GDPR-ok GDPR-cross GDPR-cancel 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 GDPR-settings GDPR-ok-view-default GDPR-ok-view-detailed 21 22 23".split(" "), ff, ["28"]),
                co = "3 13 14 15 16 17 28".split(" "),
                oi = u(kb(U("ymetrikaEvent.type")), oc(Fb(Hd))),
                Vo = /:\d+$/,
                Wo = v(function(a) {
                    var c = (Q(a).host || "").split(".");
                    return 1 === c.length ? c[0] : J(function(b, d, e) {
                        e += 1;
                        2 <=
                            e && !b && (e = F(".", c.slice(-e)), Yg(a, e) && (b = e));
                        return b
                    }, "", c)
                }),
                Gb = v(Fc),
                bo = v(function(a) {
                    mi(a, "_ymBRC", "1");
                    var c = "1" !== li(a, "_ymBRC");
                    c || ni(a, "_ymBRC");
                    return c
                }),
                Ja = v(ki),
                jd = v(ki, function(a, c, b) {
                    return "" + c + b
                }),
                ba = v(hf),
                ii = tc("r", function(a, c) {
                    var b = hi(a, c),
                        d = b[0];
                    return !b[1] && d
                }),
                jf = v(gi, function(a, c) {
                    return "{" + c.Fd + c.Za
                }),
                nf = v(Rb, T),
                pg = u(jf, $b),
                di = ha(function(a, c) {
                    for (var b = []; !Yc(c);) {
                        var d = $n(c);
                        a(d, function(e) {
                            return e(c)
                        });
                        b.push(d)
                    }
                    return b
                }),
                Hb = ha(function(a, c, b) {
                    return b(a, c)
                }),
                Sf = ha(function(a,
                    c) {
                    return la(function(b, d) {
                        return c(b, function(e) {
                            try {
                                d(a(e))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                ne = ha(function(a, c) {
                    return la(function(b, d) {
                        return c(b, function(e) {
                            try {
                                a(e)(Hb(b, d))
                            } catch (f) {
                                b(f)
                            }
                        })
                    })
                }),
                Xo = v(function(a) {
                    if (a = ab(a)) return a("a")
                }),
                Zh = ["webkitvisibilitychange", "visibilitychange"],
                rb = M([1, null], be),
                Ge = M([1, 0], be),
                Yh = v(function() {
                    return {
                        Te: null,
                        jc: []
                    }
                }, T),
                eb, Wp = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart", "requestStart"],
                    ["responseEnd", "responseStart"],
                    ["fetchStart"],
                    ["redirectEnd", "redirectStart"],
                    ["redirectCount"],
                    ["domInteractive", "responseEnd"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete"],
                    ["loadEventStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart"]
                ],
                Xh = (eb = {}, eb.responseEnd = 1, eb.domInteractive = 1, eb.domContentLoadedEventStart = 1, eb.domContentLoadedEventEnd = 1, eb.domComplete = 1, eb.loadEventStart = 1, eb.loadEventEnd = 1, eb.unloadEventStart = 1, eb.unloadEventEnd = 1, eb.secureConnectionStart = 1, eb),
                Xp = v(ce),
                Tn = {
                    "*": "+",
                    "-": "/",
                    pj: "=",
                    "+": "*",
                    "/": "-",
                    "=": "_"
                },
                kd = v(function(a) {
                    a = n(a, "console");
                    var c = n(a, "log");
                    c = fe("log", c) ? C(c, a) : D;
                    var b = n(a, "warn");
                    b = fe("warn", b) ? C(b, a) : c;
                    var d = n(a, "error");
                    a = fe("error", d) ? C(d, a) : c;
                    return {
                        log: c,
                        error: a,
                        warn: b
                    }
                }),
                Yp = E("p.cd", function(a) {
                    if (cd(a) || $d(a)) {
                        var c = Ja(a);
                        if (wa(c.l("jn"))) {
                            c.o("jn", !1);
                            var b = a.uj || Vc(a) ? function() {} : /./;
                            a = kd(a);
                            b.toString = function() {
                                c.o("jn", !0);
                                return "Yandex.Metrika counter is initialized"
                            };
                            a.log("%c%s", "color: inherit", b)
                        }
                    }
                }),
                Rn = /Firefox\/([0-9]+)/,
                Qn = /([0-9\\.]+) Safari/,
                Zp = /\sYptp\/\d\.(\d+)\s/,
                Sn = /Edg\/(\d+)\./,
                sj = v(function(a) {
                    var c;
                    a: {
                        if ((c = ib(a)) && (c = Zp.exec(c)) && 1 < c.length) {
                            c = parseInt(c[1], 10);
                            break a
                        }
                        c = 0
                    }
                    return 50 <= c && 99 >= c || Qh(a, 79) ? !1 : !ke(a) || Ih(a)
                }),
                ug = "monospace;sans-serif;serif;Andale Mono;Arial;Arial Black;Arial Hebrew;Arial MT;Arial Narrow;Arial Rounded MT Bold;Arial Unicode MS;Bitstream Vera Sans Mono;Book Antiqua;Bookman Old Style;Calibri;Cambria;Cambria Math;Century;Century Gothic;Century Schoolbook;Comic Sans;Comic Sans MS;Consolas;Courier;Courier New;Garamond;Geneva;Georgia;Helvetica;Helvetica Neue;Impact;Lucida Bright;Lucida Calligraphy;Lucida Console;Lucida Fax;LUCIDA GRANDE;Lucida Handwriting;Lucida Sans;Lucida Sans Typewriter;Lucida Sans Unicode;Microsoft Sans Serif;Monaco;Monotype Corsiva;MS Gothic;MS Outlook;MS PGothic;MS Reference Sans Serif;MS Sans Serif;MS Serif;MYRIAD;MYRIAD PRO;Palatino;Palatino Linotype;Segoe Print;Segoe Script;Segoe UI;Segoe UI Light;Segoe UI Semibold;Segoe UI Symbol;Tahoma;Times;Times New Roman;Times New Roman PS;Trebuchet MS;Verdana;Wingdings;Wingdings 2;Wingdings 3".split(";"),
                pk = v(function(a) {
                    a = ab(a)("canvas");
                    var c = n(a, "getContext");
                    if (!c) return null;
                    try {
                        var b = C(c, a)("2d");
                        b.font = "72px mmmmmmmmmmlli";
                        var d = b.measureText("mmmmmmmmmmlli").width;
                        return function(e) {
                            b.font = "72px " + e;
                            return b.measureText("mmmmmmmmmmlli").width === d
                        }
                    } catch (e) {
                        return null
                    }
                }),
                tj = Da(String.prototype.repeat, "repeat"),
                og = tj ? function(a, c) {
                    return tj.call(a, c)
                } : Io,
                uj = /\/$/,
                $p = v(u(ba, la(function(a) {
                    return -(new a.b.Date).getTimezoneOffset()
                }))),
                aq = u(ba, la(function(a) {
                    a = new a.b.Date;
                    return F("", y(ao, [a.getFullYear(),
                        a.getMonth() + 1, a.getDate(), a.getHours(), a.getMinutes(), a.getSeconds()
                    ]))
                })),
                bq = u(ba, la(Rd)),
                vj = v(u(ba, la(function(a) {
                    return a.ja[0]
                }))),
                cq = v(Rb),
                dq = v(Rb),
                eq = v(function(a) {
                    var c = n(a, "webkitRequestFileSystem");
                    if (P(c) && !cd(a)) return (new L(C(c, a, 0, 0))).then(function() {
                        var d = n(a, "navigator.storage") || {};
                        return d.estimate ? d.estimate() : {}
                    }).then(function(d) {
                        return (d = d.quota) && 12E7 > d ? !0 : !1
                    })["catch"](w(!0, O));
                    if (Wc(a)) return c = n(a, "navigator.serviceWorker"), L.resolve(R(c));
                    c = n(a, "openDatabase");
                    if (Vc(a) &&
                        P(c)) {
                        var b = !1;
                        try {
                            c(null, null, null, null)
                        } catch (d) {
                            b = !0
                        }
                        return L.resolve(b)
                    }
                    return L.resolve(!n(a, "indexedDB") && (n(a, "PointerEvent") || n(a, "MSPointerEvent")))
                }),
                fq = /(\?|&)turbo_uid=([\w\d]+)($|&)/,
                gq = v(function(a, c) {
                    var b = Gb(a),
                        d = Q(a).search.match(fq);
                    return d && 2 <= d.length ? (d = d[2], c.Za || b.o("turbo_uid", d), d) : (b = b.l("turbo_uid")) ? b : ""
                }),
                hq = v(function(a) {
                    return P(n(a, "yandex.getSiteUid")) ? a.yandex.getSiteUid() : null
                }),
                iq = [
                    ["domainLookupEnd", "domainLookupStart"],
                    ["connectEnd", "connectStart"],
                    ["responseStart",
                        "requestStart"
                    ],
                    ["responseEnd", "responseStart"],
                    ["fetchStart", "navigationStart"],
                    ["redirectEnd", "redirectStart"],
                    [function(a, c) {
                        return n(c, "redirectCount") || n(a, "navigation.redirectCount")
                    }],
                    ["domInteractive", "domLoading"],
                    ["domContentLoadedEventEnd", "domContentLoadedEventStart"],
                    ["domComplete", "navigationStart"],
                    ["loadEventStart", "navigationStart"],
                    ["loadEventEnd", "loadEventStart"],
                    ["domContentLoadedEventStart", "navigationStart"]
                ],
                jq = v(ce),
                Z, lb, kq = v(function(a) {
                    a = S(a);
                    var c = a.l("counterNum", 0) + 1;
                    a.o("counterNum", c);
                    return c
                }, u(qb, T)),
                cb = (Z = {}, Z.vf = w($c.version, O), Z.nt = xp, Z.fp = function(a, c, b) {
                    if (b.F && b.F.nohit) return null;
                    c = T(c);
                    b = cq(a);
                    if (b[c]) return null;
                    a: {
                        var d = vj(a),
                            e = n(a, "performance.getEntriesByType");
                        if (P(e)) {
                            if (a = V(u(O, U("name"), xa("first-contentful-paint")), e.call(a.performance, "paint")), a.length) {
                                a = a[0].startTime;
                                break a
                            }
                        } else {
                            e = n(a, "chrome.loadTimes");
                            if (P(e) && (e = e.call(a.chrome), e = n(e, "firstPaintTime"), d && e)) {
                                a = 1E3 * e - d;
                                break a
                            }
                            if (a = n(a, "performance.timing.msFirstPaint")) {
                                a -= d;
                                break a
                            }
                        }
                        a = void 0
                    }
                    return a ? (b[c] = a, Math.round(a)) : null
                }, Z.fu = function(a, c, b) {
                    var d = b.F;
                    if (!d) return null;
                    c = (n(a, "document.referrer") || "").replace(uj, "");
                    b = (d["page-ref"] || "").replace(uj, "");
                    d = d["page-url"];
                    a = Q(a).href !== d;
                    c = c !== b;
                    b = 0;
                    a && c ? b = 3 : c ? b = 1 : a && (b = 2);
                    return b
                }, Z.en = Qp, Z.la = jj, Z.ut = function(a, c, b) {
                    var d = b.rc;
                    (b = b.F) && (Lp(a) || c.ye || d) && (b.ut = "noindex");
                    return null
                }, Z.v = w(qa.Fa, O), Z.cn = kq, Z.dp = function(a) {
                    var c = S(a),
                        b = c.l("bt", {});
                    if (R(c.l("bt"))) {
                        var d = n(a, "navigator.getBattery");
                        try {
                            b.p = d ? d.call(a.navigator) :
                                null
                        } catch (e) {}
                        c.o("bt", b);
                        b.p && b.p.then && b.p.then(function(e) {
                            b.bj = e.charging && 0 === e.chargingTime
                        })
                    }
                    return b.bj ? "1" : "0"
                }, Z.ls = v(function(a, c) {
                    var b = jd(a, c.id),
                        d = ba(a),
                        e = b.l("lsid");
                    return +e ? e : (d = Wa(a, 0, d(W)), b.o("lsid", d), d)
                }, qb), Z.hid = qc, Z.z = $p, Z.i = aq, Z.et = bq, Z.c = u(U("navigator.cookieEnabled"), rb), Z.rn = u(O, Wa), Z.rqn = function(a, c, b) {
                    b = b.F;
                    if (!b || b.nohit) return null;
                    a = jd(a, c.id);
                    c = (a.l("reqNum", 0) || 0) + 1;
                    a.o("reqNum", c);
                    if (a.l("reqNum") === c) return c;
                    a.Ub("reqNum");
                    return null
                }, Z.u = jf, Z.tp = u(qb, Ei,
                    rb), Z.tpid = u(qb, function(a) {
                    a = T(a);
                    return Mb[a] && Mb[a].Ri || null
                }), Z.w = function(a) {
                    a = bd(a);
                    return a[0] + "x" + a[1]
                }, Z.s = function(a) {
                    var c = n(a, "screen");
                    if (c) {
                        a = n(c, "width");
                        var b = n(c, "height");
                        c = n(c, "colorDepth") || n(c, "pixelDepth");
                        return F("x", [a, b, c])
                    }
                    return null
                }, Z.sk = U("devicePixelRatio"), Z.ifr = u(tb, rb), Z.j = u(zp, rb), Z.sti = function(a) {
                    return tb(a) ? yp(a) ? "1" : null : null
                }, Z),
                Th = {};
            cb.pri = function(a) {
                if (Id(a)) return null;
                var c = dq(a),
                    b = c.Cf;
                R(b) && (c.Cf = null, eq(a).then(function(d) {
                    c.Cf = d
                }));
                return b ? 1 : null
            };
            B(cb, (lb = {}, lb.iss = u(Ap, rb), lb.hdl = u(Bp, rb), lb.iia = u(Cp, rb), lb.cpf = u(Dp, rb), lb.ntf = v(function(a) {
                a: switch (n(a, "Notification.permission")) {
                    case "denied":
                        a = !1;
                        break a;
                    case "granted":
                        a = !0;
                        break a;
                    default:
                        a = null
                }
                return Ma(a) ? null : a ? 2 : 1
            }), lb.eu = function(a) {
                return S(a).l("isEU")
            }, lb.ns = vj, lb.np = function(a) {
                if (Wa(a, 0, 100)) a = null;
                else {
                    a = Wb(Qf(a), 100);
                    for (var c = [], b = 0; b < a.length; b++) {
                        var d = a.charCodeAt(b);
                        128 > d ? c.push(d) : (127 < d && 2048 > d ? c.push(d >> 6 | 192) : (c.push(d >> 12 | 224), c.push(d >> 6 & 63 | 128)), c.push(d & 63 | 128))
                    }
                    a =
                        Wg(c)
                }
                return a
            }, lb.re = u(function(a, c) {
                return !c.Za && ii(a, c)
            }, rb), lb));
            cb.ds = function(a, c, b) {
                b = b.F;
                if ((void 0 === b ? {} : b).nohit) return null;
                a = uf(a);
                c = T(c);
                if (!a) return null;
                b = n(a, "timing");
                if (!b) return null;
                a = Wh(a, b, iq);
                c = jq(c);
                return (c = Vh(c, a)) && F(",", c)
            };
            cb.dsn = function(a, c, b) {
                b = b.F;
                if ((void 0 === b ? {} : b).nohit) return null;
                a = uf(a);
                c = T(c);
                if (!a) return null;
                b = null;
                if (P(a.getEntriesByType)) {
                    var d = n(a.getEntriesByType("navigation"), "0");
                    d && (b = d)
                }
                if (!b) return null;
                a = Wh(a, b, Wp);
                c = Xp(c);
                return (c = Vh(c, a)) && F(",",
                    c)
            };
            cb.bu = hq;
            cb.td = gq;
            cb.wv = w(2, O);
            cb.co = function(a) {
                return Ge(S(a).l("jn"))
            };
            var Nn = ea(cb).concat(ea(Th));
            cb.we = function(a, c) {
                return rb(c.Oa)
            };
            var Kn = ["RTCPeerConnection", "mozRTCPeerConnection", "webkitRTCPeerConnection"],
                Od = v(function() {
                    return {
                        zb: {},
                        pending: {},
                        mb: {}
                    }
                }),
                Tf = U("postMessage"),
                lq = ha(function(a, c, b, d) {
                    var e, f = {
                        Tb: ba(a)(W),
                        key: a.Math.random(),
                        dir: 0
                    };
                    b.length && (f.Tb = parseInt(b[0], 10), f.key = parseFloat(b[1]), f.dir = parseInt(b[2], 10));
                    B(d, c);
                    c = (e = {
                        data: d
                    }, e.__yminfo = F(":", ["__yminfo", f.Tb, f.key,
                        f.dir
                    ]), e);
                    return {
                        V: f,
                        Zf: gb(a, c) || ""
                    }
                }),
                mq = ha(function(a, c, b, d, e) {
                    c = c(d);
                    var f = Od(a),
                        g = F(":", [c.V.Tb, c.V.key]);
                    if (Tf(b)) {
                        f.pending[g] = e;
                        try {
                            b.postMessage(c.Zf, "*")
                        } catch (h) {
                            delete f.pending[g];
                            return
                        }
                        X(a, function() {
                            delete f.pending[g]
                        }, 5E3, "if.s")
                    }
                }),
                nq = E("s.f", mq),
                oq = ha(function(a, c, b, d, e, f) {
                    var g = null,
                        h = null,
                        k = Od(a),
                        l = null;
                    try {
                        g = pb(a, f.data), h = g.__yminfo, l = g.data
                    } catch (m) {
                        return
                    }
                    if (!wa(h) && h.substring && "__yminfo" === h.substring(0, 8) && !wa(l) && (g = h.split(":"), 4 === g.length))
                        if (h = c.id, c = g[1], a = g[2],
                            g = g[3], !ca(l) && l.type && "0" === g && l.counterId) {
                            if (!l.toCounter || l.toCounter == h) {
                                k = null;
                                try {
                                    k = f.source
                                } catch (m) {}!Ma(k) && Tf(k) && (f = d.R(l.type, [f, l]), e = y(u(O, ah(e)), f.concat([{}])), l = b([c, a, l.counterId], e), k.postMessage(l.Zf, "*"))
                            }
                        } else g === "" + h && ca(l) && V(function(m) {
                            return !(!m.hid || !m.counterId)
                        }, l).length === l.length && (b = k.pending[F(":", [c, a])]) && b.apply(null, [f].concat(l))
                }),
                pq = E("s.fh", oq),
                Nh = v(function(a, c) {
                    var b, d = Kb("getElementsByTagName", n(a, "document")),
                        e = Od(a),
                        f = Tf(a),
                        g = Cc(a),
                        h = na(a);
                    if (!d ||
                        !f) return null;
                    d = d.call(a.document, "iframe");
                    f = (b = {}, b.counterId = c.id, b.hid = "" + qc(a), b);
                    Mn(a, g);
                    b = lq(a, f);
                    var k = nq(a, b([]));
                    z(function(l) {
                        var m = null;
                        try {
                            m = l.contentWindow
                        } catch (p) {}
                        m && k(m, {
                            type: "initToChild"
                        }, function(p, q) {
                            g.R("initToParent", [p, q])
                        })
                    }, d);
                    tb(a) && k(a.parent, {
                        type: "initToParent"
                    }, function(l, m) {
                        g.R("parentConnect", [l, m])
                    });
                    h.C(a, ["message"], pq(a, c, b, g, f));
                    return {
                        X: g,
                        zb: e.zb,
                        mb: e.mb,
                        ce: k
                    }
                }, u(qb, T)),
                In = ha(function(a, c, b) {
                    var d = b[a];
                    d ? (d.vi = c, d.Jf = !0, d.If ? d.If(c) : d.Ka = L.resolve(c)) : b[a] = {
                        Ka: L.resolve(c),
                        vi: c,
                        Jf: !0
                    }
                }),
                Gn = ha(function(a, c) {
                    if (!c[a]) {
                        var b, d = new L(function(e) {
                            b = e
                        });
                        c[a] = {
                            If: b,
                            Ka: d,
                            Jf: !1
                        }
                    }
                    return c[a].Ka
                }),
                Rh = v(u(Rb, la)),
                Uf = v(function(a, c, b) {
                    var d = S(a);
                    c = Ja(a);
                    var e = [];
                    b = M([a, b, d, c], On);
                    Id(a) || Pn(a, "14.1") || e.push(M([Jn, "pp", ""], b));
                    var f = sj(a) && !Ph(a, 68);
                    f || e.push(M([Ln, "pu", ""], b));
                    f || c.zd || ke(a) || (e.push(M([En, "zzlc", "na"], b)), e.push(M([Dn, "cc", ""], b)));
                    return e.length ? {
                        Ea: function(g, h) {
                            if (0 === d.l("isEU")) try {
                                z(u(O, Ea), e)
                            } catch (k) {}
                            h()
                        },
                        $: function(g, h) {
                            var k = g.H;
                            if (k &&
                                0 === d.l("isEU")) try {
                                z(la(k), e)
                            } catch (l) {}
                            h()
                        }
                    } : {}
                }, function(a, c, b) {
                    return T(b)
                }),
                Tc = tc("retryReqs", function(a) {
                    return Ja(a).l("retryReqs", {})
                }),
                Bn = ["0"],
                Ok = E("g.r", function(a) {
                    var c = ba(a),
                        b = Tc(a),
                        d = c(W),
                        e = qc(a);
                    return J(function(f, g) {
                        var h = g[0],
                            k = g[1];
                        k && !k.d && k.ghid && k.ghid !== e && k.time && 500 < d - k.time && k.time + 864E5 > d && 2 >= k.browserInfo.rqnl && (k.d = 1, f.push({
                            protocol: k.protocol,
                            host: k.host,
                            yi: k.resource,
                            ri: k.postParams,
                            N: k.params,
                            Hg: k.browserInfo,
                            Bj: k.ghid,
                            time: k.time,
                            Cb: parseInt(h, 10),
                            Sg: k.counterId,
                            Z: k.counterType
                        }));
                        return f
                    }, [], Aa(b))
                }),
                Jh = [],
                zn = ha(function(a, c, b, d, e) {
                    return (new L(function(f, g) {
                        var h = ea(b),
                            k = u(d.resolve ? d.resolve : O, Jc(f)),
                            l = u(d.reject ? d.reject : O, Jc(g));
                        d.resolve = k;
                        d.reject = l;
                        z(function(m) {
                            var p;
                            d.ue.push(m);
                            var q = b[m],
                                r = X(a, w(ob(), l), 5100, "is.m");
                            c(q.window, B(e, (p = {}, p.toCounter = parseInt(m, 10), p)), function(t, x) {
                                oa(a, r);
                                d.Uf.push(m);
                                d.resolve && d.resolve(x)
                            })
                        }, h)
                    }))["catch"](A(a, "if.b"))
                }),
                An = ha(function(a, c, b) {
                    c = V(function(d) {
                        return !H(b.info.counterId, d.ue)
                    }, c);
                    z(function(d) {
                        var e;
                        b.info.counterId && a((e = {}, e[b.info.counterId] = b, e), d, d.data)
                    }, c)
                }),
                Kd = v(Mh, u(qb, T)),
                yn = "ru en et fi lt lv pl fr no sr".split(" "),
                Jd = [],
                Gh = u(oi, kb(sp(Hd)), Oc(",")),
                Hh = u(oc(Fb(Hd)), mc, Boolean),
                rn = v(function(a, c) {
                    var b = c.l("gdpr");
                    return H(b, Jb) ? "-" + b : ""
                }),
                wj = v(ce),
                fb, Va, nn = (fb = {}, fb.am = "com.am", fb.tr = "com.tr", fb.ge = "com.ge", fb.il = "co.il", fb["\u0440\u0444"] = "ru", fb["xn--p1ai"] = "ru", fb["\u0443\u043a\u0440"] = "ua", fb["xn--j1amh"] = "ua", fb["\u0431\u0435\u043b"] = "by", fb["xn--90ais"] = "by", fb),
                xj = {
                    "mc.edadeal.ru": {
                        Bc: /^([^/]+\.)?edadeal\.ru$/,
                        pe: "ru"
                    },
                    "mc.yandexsport.ru": {
                        Bc: /^([^/]+\.)?yandexsport\.ru$/,
                        pe: "ru"
                    },
                    "mc.beru.ru": {
                        Bc: /^([^/]+\.)?beru\.ru$/,
                        pe: "ru"
                    },
                    "mc.kinopoisk.ru": {
                        Bc: /^([^/]+\.)?kinopoisk\.ru$/,
                        pe: "ru"
                    }
                },
                pn = (Va = {}, Va.ka = "ge", Va.ro = "md", Va.tg = "tj", Va.tk = "tm", Va.et = "ee", Va.hy = "com.am", Va.he = "co.li", Va.ky = "kg", Va.uk = "ua", Va.be = "by", Va.tr = "com.tr", Va.kk = "kz", Va),
                yj = v(ce),
                qq = v(function() {
                    var a = u(oc(u(O, xa("ru"), cc)), Ic(function(c, b) {
                        c[b] = ["mc.yandex." + b];
                        return c
                    }, {}))($h);
                    z(function(c) {
                        c = c[0];
                        a[c] = [c]
                    }, Aa(xj));
                    a.com = ["mc.yandex.com"];
                    return a
                }),
                rq = v(function(a) {
                    var c = Q(a).hostname;
                    return (a = $a(function(b) {
                        return b[1].Bc.test(c)
                    }, Aa(xj))) ? a[0] : ""
                }),
                sq = Ca(function(a, c) {
                    var b = Hp(c),
                        d = on(c),
                        e = rq(c) || ln(c),
                        f = ba(c),
                        g = Ja(c),
                        h = g.l("synced", {});
                    b = b ? [e, d] : [];
                    b.unshift("com");
                    h && (b = V(function(k) {
                        var l = (h[k] || 1) + 1440 < f(hb);
                        l && delete h[k];
                        return l
                    }, b));
                    g.o("synced", h);
                    return J(function(k, l) {
                        z(function(m) {
                            k.push({
                                domain: m,
                                Vh: l
                            })
                        }, a[l] || []);
                        return k
                    }, [], b)
                }),
                tq = function(a, c) {
                    return function(b) {
                        var d = qq(),
                            e = sq(d);
                        return ke(b) || Wc(b) ? {} : {
                            $: function(f,
                                g) {
                                var h = f.H,
                                    k = S(b);
                                if (tb(b) || !h || !h.l("pv")) return g();
                                h = e(b);
                                if (!h.length) return g();
                                k.l("startSync") ? yj(b).push(g) : (k.o("startSync", !0), a(b, h).then(g, u(Jc(g), A(b, c)))["catch"](D))
                            }
                        }
                    }
                }(function(a, c) {
                    var b = ba(a),
                        d = S(a),
                        e = Ja(a),
                        f = vf(a, "c"),
                        g = bc(a, f);
                    return J(function(h, k) {
                        function l() {
                            var q = e.l("synced");
                            d.o("startSync", !1);
                            q && (q[k.Vh] = p, e.o("synced", q));
                            z(Ea, yj(a))
                        }
                        var m = g({
                                wa: ["sync.cook"]
                            }, [qa.Pa + "//" + k.domain + "/sync_cookie_image_check"], {
                                Nc: 1500
                            }),
                            p;
                        m.then(function() {
                            p = b(hb);
                            l()
                        })["catch"](function() {
                            p =
                                b(hb) - 1435;
                            l()
                        });
                        m = w(m, O);
                        return h.then(m)
                    }, L.resolve(""), c)["catch"](A(a, "ctl"))
                }, "sy.c"),
                uq = Xa(/^.+\.mtproxy\.yandex\.net$/),
                Qe = v(function(a) {
                    if ("MetrikaPlayer" === a.name) return !0;
                    a = Q(a).hostname;
                    return uq(a)
                }),
                Dh = !1,
                kn = /^[a-z][\w.+-]+:/i,
                zj = {},
                oe, Fa = [lf, Xc, ac(), kf],
                Aj = "et w v z i u vf".split(" ");
            Aj.push("we");
            var Vf = ac(Aj);
            Fa.push(tq);
            Fa.unshift(function(a, c, b) {
                return {
                    Ea: function(d, e) {
                        var f = La(a, b);
                        (f = f && f.userParams) && d.Sc && f(d.Sc);
                        e()
                    }
                }
            });
            Fa.unshift(function(a, c, b) {
                return {
                    $: function(d, e) {
                        if (d.N &&
                            (Di(b, d.N), !d.Y && d.H && d.F)) {
                            var f = gb(a, d.N),
                                g = wj(a),
                                h = d.H.l("pv");
                            f && !d.F.nohit && (h ? encodeURIComponent(f).length > qa.rg ? g.push([d.H, d.N]) : d.F["site-info"] = f : (d.Y = f, d.ai = !0))
                        }
                        e()
                    },
                    Ea: function(d, e) {
                        var f = wj(a),
                            g = La(a, b),
                            h = g && g.params;
                        h && (g = V(u(U("0"), xa(d.H)), f), z(function(k) {
                            h(k[1]);
                            k = je(a)(k, f);
                            f.splice(k, 1)
                        }, g));
                        e()
                    }
                }
            });
            Fa.push(Eh);
            Fa.push(Ch);
            Fa.push(Uf);
            Fa.push(function(a) {
                return {
                    $: function(c, b) {
                        var d = c.H,
                            e = Ja(a).l("fip");
                        e && d && (d.o("fip", e), Sc(c, "fip", Ge(e)));
                        b()
                    }
                }
            });
            Fa.push(Ld());
            var ta = (oe = {},
                oe.h = Fa, oe.er = [], oe);
            ta.adb = [];
            var Bj = [ac(), kf];
            Bj.push(Uf);
            ta.f = Bj;
            ta["2"] = Fa;
            ta["1"] = function(a, c) {
                return V(u(Fb(c), cc), a)
            }(Fa, [kf]);
            ta.a = Fa;
            ta.g = Fa;
            ta.e = Fa;
            var Cj = [Xc];
            Cj.push(function() {
                return function(a) {
                    return {
                        $: function(c, b) {
                            var d = c.H,
                                e = void 0 === d ? sa() : d,
                                f = c.Cb,
                                g = Tc(a);
                            d = e.l("rqnl", 0) + 1;
                            e.o("rqnl", d);
                            if (e = n(g, F(".", [f, "browserInfo"]))) e.rqnl = d, gf(a);
                            b()
                        },
                        Ea: function(c, b) {
                            Oh(a, c);
                            b()
                        }
                    }
                }
            }());
            ta.r = Cj;
            var Wf = [];
            Wf.push(Vf);
            Wf.push(Ld());
            ta.p = Wf;
            ta["6"] = [Xc];
            ta.t = Fa;
            ta["4"] = [Vf];
            ta.W = [Vf];
            var ld = [lf, Xc, ac()];
            ld.push(Eh);
            ld.push(Uf);
            ld.push(Ch);
            ld.push(Ld());
            ta.n = ld;
            ta.d = [ac(["hid", "u", "v", "vf"])];
            ta.m = [ac(["u", "v", "vf"]), Ld()];
            ta.s = [];
            ta.u = [];
            ta.S = [ac(["v", "hid", "u", "vf", "rn"])];
            ta.pi = [];
            Fa.unshift(function(a, c, b) {
                return {
                    $: function(d, e) {
                        var f = d.H,
                            g = d.F;
                        if (!f || !g) return e();
                        !zj[b.id] && f.l("pv") && b.exp && !g.nohit && (g.exp = b.exp, zj[b.id] = !0);
                        f = g["page-ref"];
                        var h = g["page-url"];
                        f && h !== f ? g["page-ref"] = Ah(a, f) : delete g["page-ref"];
                        g["page-url"] = Ah(a, h).slice(0, qa.ug);
                        return e()
                    }
                }
            });
            ta["5"] = V(u(Fb([lf,
                Xc
            ]), cc), Fa);
            var pe, Dj = C(L.reject, L, ob()),
                ja = (pe = {}, pe.h = Pa, pe.er = w(Dj, O), pe);
            ja.a = Pa;
            ja.p = Md;
            ja["4"] = Md;
            ja.f = Pa;
            ja.n = Pa;
            ja["6"] = function(a, c, b) {
                var d = bc(a, c);
                return function(e) {
                    return of(a, b, e, !0).then(M([e, ["https://mc.yandex.md/cc"], {
                        Be: !0,
                        lg: !1
                    }], d))
                }
            };
            ja["1"] = Pa;
            ja.n = Pa;
            ja.c = bc;
            ja.g = Pa;
            ja.e = Pa;
            ja["2"] = Pa;
            ja.r = function(a, c, b) {
                var d = Md(a, c, b),
                    e = Pa(a, c, b);
                return function(f, g, h) {
                    return "webvisor" === h ? d(f, g, f.F["wv-part"]) : e(f, g)
                }
            };
            ja.adb = Nd;
            ja.s = bc;
            ja.S = Pa;
            ja.u = bc;
            ja.pi = bc;
            ja.m = function(a, c, b) {
                return function(d,
                    e) {
                    var f, g = d.F;
                    g = (f = {}, f["page-url"] = g && g["page-url"] || "", f);
                    f = B(d, {
                        F: B(d.F || {}, g)
                    });
                    return Nd(a, c, b)(f, "clmap/" + e.id)["catch"](A(a, "c.m"))
                }
            };
            ja.d = Pa;
            ja.t = Pa;
            ja.W = Md;
            ja["5"] = Pa;
            var ma = E("g.sen", function(a, c, b) {
                    var d = vf(a, c);
                    b = gn(a, c, b);
                    var e = ja[c],
                        f = e ? e(a, d, b) : Pa(a, d, b);
                    return function() {
                        var g = Ba(arguments),
                            h = g.slice(1);
                        g = B(g[0], {
                            wa: [c]
                        });
                        return f.apply(void 0, fa([g], h))
                    }
                }, Dj),
                yh = v(u(U("id"), Fb([26812653])), T),
                vq = E("dc.init", function(a) {
                    var c = Q(a),
                        b = kd(a),
                        d = Gb(a),
                        e = Ye(a),
                        f = e.Oh;
                    e = e.Gh;
                    f && !e && d.o("debug",
                        "1", void 0, c.host);
                    return Pe(a) || !f && !e ? {
                        log: D,
                        warn: D,
                        error: D
                    } : b
                }),
                Gd = v(vq),
                wq = A(window, "h.p", function(a, c) {
                    var b, d, e = ma(a, "h", c),
                        f = c.$b || "" + Q(a).href,
                        g = c.nh || a.document.referrer,
                        h = {
                            H: sa((b = {}, b.pv = 1, b)),
                            F: (d = {}, d["page-url"] = f, d["page-ref"] = g, d)
                        };
                    h.N = c.N;
                    h.Sc = c.Sc;
                    c.Ob && h.F && (h.F.nohit = "1");
                    return e(h, c).then(function(k) {
                        k && (c.Ob || Bb(a, c, "PageView. Counter " + c.id + ". URL: " + f + ". Referrer: " + g, c.N)(), ub(a, M([a, c, k], Hn)))
                    })["catch"](A(a, "h.g.s"))
                }),
                md = v(Rb, T),
                xq = E("p.ar", function(a, c) {
                    var b = ma(a, "a",
                        c);
                    return function(d, e, f, g, h, k) {
                        var l, m, p = {
                            F: {},
                            H: sa((l = {}, l.pv = 1, l.ar = 1, l))
                        };
                        d && (e = nc(e) ? {
                            title: e.title,
                            Ff: e.referer,
                            N: e.params,
                            Qa: e.callback,
                            b: e.ctx
                        } : {
                            title: e,
                            Ff: f,
                            N: g,
                            Qa: h,
                            b: k
                        }, f = md(c), f.url !== d && (f.wi = f.url, f.url = d), d = d || Q(a).href, f = e.Ff || f.wi || a.document.referrer, g = Bb(a, c, "PageView. Counter " + c.id + ". URL: " + d + ". Referrer: " + f, e.N), b(B(p, {
                            N: e.N,
                            title: e.title,
                            F: B(p.F, (m = {}, m["page-url"] = d, m["page-ref"] = f, m))
                        }), c).then(g)["catch"](A(a, "p.ar.s")).then(M([a, e.Qa || D, e.b], Ib)))
                    }
                }),
                en = {
                    K: "stamp",
                    L: "frameId",
                    V: "meta",
                    Ie: "base",
                    df: "hasBase",
                    Fe: "address",
                    gg: "ua",
                    Ud: "prev",
                    tf: "namespace",
                    pc: "keystrokes",
                    nf: "isMeta",
                    qc: "modifier",
                    bb: "pageWidth",
                    ab: "pageHeight",
                    Xf: "startNode",
                    Pe: "endNode",
                    mg: "zoomFrom",
                    og: "zoomTo",
                    level: "level",
                    duration: "duration",
                    ra: "i",
                    tc: "o",
                    n: "n",
                    r: "r",
                    Rb: "ct",
                    kb: "at",
                    uf: "nm",
                    wf: "ns",
                    Pd: "pa",
                    Sd: "pr",
                    Jd: "nx",
                    Ha: "h",
                    va: "changes",
                    Ee: "a",
                    He: "b",
                    Wc: "c",
                    Od: "op"
                },
                fn = ["attributes", "attrs"],
                qe = function() {
                    function a(c) {
                        this.b = c
                    }
                    a.prototype.Aa = function(c) {
                        var b = Fd(c);
                        c = y(C(this.Ba, this), b);
                        return He(gb(this.b,
                            y(function(d, e) {
                                var f;
                                return B({}, b[e], (f = {}, f.data = d, f))
                            }, c)))
                    };
                    a.prototype.Ba = function(c) {
                        var b = c.data;
                        "string" !== typeof b && (b = gb(this.b, Fd(c.data)));
                        return b
                    };
                    a.prototype.Ga = function(c) {
                        return encodeURIComponent(c).length
                    };
                    a.prototype.Lc = function(c, b) {
                        for (var d = Math.ceil(c.length / b), e = [], f = 0; f < b; f += 1) e.push(c.slice(f * d, d * (f + 1)));
                        return e
                    };
                    a.prototype.isEnabled = function() {
                        return !!this.b.JSON
                    };
                    return a
                }(),
                cn = v(function(a) {
                    function c(f, g, h, k) {
                        d[0] = g;
                        h[k] = e[3];
                        h[k + 1] = e[2];
                        h[k + 2] = e[1];
                        h[k + 3] = e[0]
                    }

                    function b(f,
                        g, h, k) {
                        d[0] = g;
                        h[k] = e[0];
                        h[k + 1] = e[1];
                        h[k + 2] = e[2];
                        h[k + 3] = e[3]
                    }
                    if ("undefined" === typeof a.Float32Array || "undefined" === typeof a.Uint8Array) return dn;
                    var d = new Float32Array([-0]),
                        e = new Uint8Array(d.buffer);
                    return 128 === e[3] ? b : c
                }),
                Zm = xh(!1),
                Ym = xh(!0),
                yq = {
                    Ni: "topics",
                    ti: "publicationDate",
                    oi: "pageUrlCanonical",
                    Zi: "updateDate",
                    Fg: "authors",
                    Dg: "articleInfo",
                    Bi: "rubric",
                    ui: "publishersHeader",
                    Xa: "involvedTime",
                    ni: "pageTitle",
                    Wh: "maxScrolled",
                    Ke: "chars",
                    Eg: "articleMeta"
                },
                zq = function() {
                    function a(c) {
                        this.b = c;
                        this.vb =
                            u(Aa, Ic(function(b, d) {
                                b[d[1]] = d[0];
                                return b
                            }, {}))(yq)
                    }
                    a.prototype.ag = function(c) {
                        var b, d = this.Td(c.data);
                        return {
                            K: ba(this.b)(qf),
                            data: (b = {}, b[this.vb[c.type]] = d, b)
                        }
                    };
                    a.prototype.Td = function(c) {
                        var b = this;
                        return ca(c) ? y(C(this.Td, this), c) : nc(c) ? u(Aa, Ic(function(d, e) {
                            var f = e[0];
                            d[b.vb[f] || f] = b.Td(e[1]);
                            return d
                        }, {}))(c) : c
                    };
                    a.prototype.Ba = function(c) {
                        return Dd(this.b, bf, this.ag(c))(Qd(D))
                    };
                    a.prototype.Ga = function(c) {
                        return c[0]
                    };
                    a.prototype.Lc = function(c) {
                        return [c]
                    };
                    a.prototype.Aa = function(c) {
                        var b =
                            this;
                        c = Dd(this.b, qh, {
                            buffer: y(C(this.ag, this), c)
                        });
                        return Zb(this.b, c, 20, 100, Pd)(ne(function(d) {
                            d = Ze(b.b, d.slice(-4));
                            return Zb(b.b, d, 20, 100, Pd)
                        }))(Sf(function(d) {
                            return d[d.length - 1]
                        }))
                    };
                    a.prototype.isEnabled = function() {
                        return ph(this.b)
                    };
                    return a
                }(),
                Ej = function() {
                    function a(c, b, d) {
                        this.Ne = 0;
                        this.Rd = 1;
                        this.Tc = 5E3;
                        this.b = c;
                        this.ma = b;
                        this.ee = d
                    }
                    a.prototype.Kc = function() {
                        this.Ne = X(this.b, u(C(this.flush, this), C(this.Kc, this)), this.Tc, "b.f")
                    };
                    a.prototype.send = function(c, b) {
                        this.ee(c, b || [], this.Rd);
                        this.Rd +=
                            1
                    };
                    a.prototype.push = function() {};
                    a.prototype.flush = function() {};
                    return a
                }(),
                Xf, Yf = (Xf = function(a) {
                    function c(b, d, e, f) {
                        void 0 === f && (f = 0);
                        d = a.call(this, b, d, e) || this;
                        d.se = 0;
                        d.jb = 0;
                        d.qe = 0;
                        d.buffer = [];
                        d.Tc = 2E3;
                        d.X = Cc(b);
                        d.Kc();
                        d.qe = f;
                        return d
                    }
                    za(c, a);
                    c.prototype.Xe = function(b) {
                        return V(Boolean, this.X.R("ag", b))
                    };
                    c.prototype.We = function(b, d) {
                        var e = this;
                        b(Hb(A(this.b, "wv2.b.st"), function(f) {
                            e.send(f, d)
                        }))
                    };
                    c.prototype.Hi = function(b, d) {
                        var e = this;
                        oa(this.b, this.Ne);
                        var f = Math.ceil(this.ma.Ga(d) / 63E4),
                            g = this.ma.Lc(d,
                                f);
                        z(function(h, k) {
                            var l, m = B({}, b, (l = {}, l.data = h, l.partNum = k + 1, l.end = k + 1 === f, l));
                            l = e.ma.Aa([m], !1);
                            e.We(l, [m])
                        }, g);
                        this.Kc()
                    };
                    c.prototype.send = function(b, d) {
                        this.X.R("se", d);
                        a.prototype.send.call(this, b, d)
                    };
                    c.nd = function(b, d, e, f, g) {
                        c.Vc["" + b + d] || (this.Vc[d] = new c(g, f, e, "m" === d ? 31457280 : 0));
                        return this.Vc[d]
                    };
                    c.prototype.Qh = function() {
                        return this.qe && this.se >= this.qe
                    };
                    c.prototype.push = function(b) {
                        var d = this;
                        if (!this.Qh()) {
                            this.X.R("p", b);
                            var e = this.ma.Ba(b),
                                f = this.ma.Ga(e);
                            7E5 < f ? this.Hi(b, e) : (e = this.Xe(this.buffer.concat([b])),
                                e = J(function(g, h) {
                                    return g + d.ma.Ga(d.ma.Ba(h))
                                }, 0, e), this.jb + e + f >= 7E5 * .7 && this.flush(), this.buffer.push(b), this.jb += f)
                        }
                    };
                    c.prototype.C = function(b, d) {
                        this.X.C(b, d)
                    };
                    c.prototype.ba = function(b, d) {
                        this.X.ba(b, d)
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer.concat(this.Xe(this.buffer));
                        if (b.length) {
                            this.buffer = [];
                            this.se += this.jb;
                            this.jb = 0;
                            var d = this.ma.Aa(b);
                            this.We(d, b)
                        }
                    };
                    return c
                }(Ej), Xf.Vc = {}, Xf),
                nd, Zf = (nd = {}, nd[1] = 500, nd[2] = 500, nd[3] = 0, nd),
                $f = function() {
                    function a(c) {
                        var b, d = this;
                        this.id = "a";
                        this.yd = !1;
                        this.qb = {};
                        this.eb = {
                            "schema.org": "Article NewsArticle Movie BlogPosting Review Recipe Answer".split(" "),
                            yf: ["article"]
                        };
                        this.ve = (b = {}, b.Answer = 3, b.Review = 2, b);
                        this.Rg = v(function(e, f) {
                            vb(d.b, "Warning: content has only " + f.chars + " chars. Required " + Zf[f.type], f)
                        });
                        this.b = c;
                        this.root = Sb(c)
                    }
                    a.prototype.xa = function(c) {
                        return c.element
                    };
                    a.prototype.Ye = function(c, b) {
                        var d = this,
                            e;
                        A(this.b, "P.s." + b, function() {
                            e = d.qb[b].call(d, c)
                        })();
                        return e
                    };
                    a.prototype.si = function(c) {
                        var b = B({}, c);
                        this.yd && !b.id && H(c.type, [3, 2]) && (c = F(", ", y(U("name"), b.authors || [])), b.pageTitle = c + ": " + b.pageTitle);
                        b.pageTitle || (b.pageTitle = this.Dh(b.pb));
                        b.pageUrlCanonical || (c = b.id, b.pageUrlCanonical = ("string" !== typeof c ? 0 : /^(https?:)\/\//.test(c)) ? b.id : this.Ah());
                        b.id || (b.id = b.pageTitle || b.pageUrlCanonical);
                        return b
                    };
                    a.prototype.oa = function(c) {
                        var b = this,
                            d = {},
                            e = this.xa(c);
                        if (!e) return null;
                        d.type = c.type;
                        z(function(g) {
                            d[g] = b.Ye(c, g)
                        }, ea(this.qb));
                        var f = ba(this.b);
                        d.stamp = f(qf);
                        d.element = c.element;
                        d.pb = e;
                        d = this.si(d);
                        d.id = d.id ? $b(d.id) :
                            1;
                        d.update = function(g) {
                            return b.xa(c) ? b.Ye(c, g) : void 0
                        };
                        return d
                    };
                    a.prototype.Dh = function(c) {
                        for (var b = 1; 5 >= b; b += 1) {
                            var d = Qa(hc(this.b, c, "h" + b));
                            if (d) return d
                        }
                    };
                    a.prototype.Ah = function() {
                        var c = hc(this.b, this.root, '[rel="canonical"]');
                        if (c) return c.href
                    };
                    a.prototype.bf = function() {
                        return 1
                    };
                    a.prototype.Zb = function() {
                        return []
                    };
                    a.prototype.hh = function() {
                        var c = this,
                            b = this.Zb(),
                            d = 1;
                        return J(function(e, f) {
                            var g = c.oa({
                                element: f,
                                type: c.bf(f)
                            }) || [];
                            ca(g) || (g = [g]);
                            g = J(function(h, k) {
                                var l = h.values,
                                    m = h.ff;
                                k &&
                                    k.chars > Zf[k.type] && !H(k.id, m) ? (l.push(k), m.push(k.id)) : k && k.chars <= Zf[k.type] && c.Rg(k.id, k);
                                return {
                                    values: l,
                                    ff: m
                                }
                            }, {
                                values: [],
                                ff: y(U("id"), e)
                            }, g).values;
                            return e.concat(y(function(h) {
                                var k;
                                h = B((k = {
                                    index: d,
                                    de: !1
                                }, k.involvedTime = 0, k), h);
                                d += 1;
                                return h
                            }, g))
                        }, [], b)
                    };
                    return a
                }(),
                Fj = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "j";
                        d.yd = !0;
                        d.Me = F(",", ['script[type="application/ld+json"]', 'script[type="application/json+ld"]', 'script[type="ld+json"]', 'script[type="json+ld"]']);
                        d.qb = (b = {}, b.id = function(e) {
                            var f = e.data["@id"];
                            e = e.data.mainEntity || e.data.mainEntityOfPage;
                            !f && e && (f = e["@id"]);
                            return f
                        }, b.chars = function(e) {
                            return "string" === typeof e.data.text ? e.data.text.length : this.xa(e).innerText.length
                        }, b.authors = function(e) {
                            var f = [];
                            f = f.concat(this.Yb(e.data, "author"));
                            f = f.concat(this.Yb(e.data.mainEntity, "author"));
                            return f.concat(this.Yb(e.data.mainEntityOfPage, "author"))
                        }, b.pageTitle = function(e) {
                            var f = e.data.headline || "";
                            e.data.rj && (f += " " + e.data.alternativeHeadline);
                            "" ===
                            f && (e.data.name ? f = e.data.name : e.data.itemReviewed && (f = e.data.itemReviewed));
                            3 === e.type && e.data.parentItem && (f = e.data.parentItem.text);
                            return f
                        }, b.updateDate = function(e) {
                            return e.data.dateModified || ""
                        }, b.publicationDate = function(e) {
                            return e.data.datePublished || ""
                        }, b.pageUrlCanonical = function(e) {
                            return e.data.url
                        }, b.topics = function(e) {
                            return this.Yb(e.data, "about", ["name", "alternateName"])
                        }, b.rubric = function(e) {
                            var f = this,
                                g = this.xa(e);
                            e = V(Boolean, y(function(h) {
                                if (h = pb(f.b, h.innerText)) {
                                    var k = f.Ze(h);
                                    if (k) return J(function(l, m) {
                                        return l ? l : "BreadcrumbList" === m["@type"] ? m : l
                                    }, null, k);
                                    if ("BreadcrumbList" === h["@type"]) return h
                                }
                                return null
                            }, [e.element].concat(ka(zb(this.Me, this.b, document.body === g ? document.documentElement : g)))));
                            return e.length && (e = e[0].itemListElement, ca(e)) ? V(Boolean, y(function(h) {
                                return h.item && !f.b.isNaN(h.position) ? {
                                    name: h.item.name || h.name,
                                    position: h.position
                                } : null
                            }, e)) : []
                        }, b);
                        return d
                    }
                    za(c, a);
                    c.prototype.Yb = function(b, d, e) {
                        void 0 === e && (e = ["name"]);
                        if (!b || !b[d]) return [];
                        b = ca(b[d]) ?
                            b[d] : [b[d]];
                        b = V(Boolean, y(function(f) {
                            return f ? "string" === typeof f ? f : J(function(g, h) {
                                return g || f[h]
                            }, "", e) : null
                        }, b));
                        return y(function(f) {
                            var g;
                            return g = {}, g.name = f, g
                        }, b)
                    };
                    c.prototype.xa = function(b) {
                        var d = b.element,
                            e = b.data["@id"],
                            f = b.data.url;
                        b = null;
                        f && "string" === typeof f && (b = this.Se(f));
                        !b && e && "string" === typeof e && (b = this.Se(e));
                        b || (b = e = d.parentNode, !Ab("head", this.b, d) && e && 0 !== e.innerText.length) || (b = this.b.document.body);
                        return b
                    };
                    c.prototype.Se = function(b) {
                        try {
                            var d = jc(this.b, b).hash;
                            if (d) {
                                var e =
                                    hc(this.b, this.b.document.body, d);
                                if (e) return e
                            }
                        } catch (f) {}
                        return null
                    };
                    c.prototype.Qd = function(b) {
                        return this.ve[b["@type"]] || 1
                    };
                    c.prototype.oa = function(b) {
                        var d = this,
                            e = b.element;
                        if (!b.data && (b.data = pb(this.b, e.innerText), !b.data || !/schema\.org/.test(b.data["@context"]) && !ca(b.data))) return null;
                        var f = this.Ze(b.data);
                        if (f) return y(function(h) {
                            if (!H(h["@type"], d.eb["schema.org"])) return null;
                            h = {
                                element: e,
                                data: h,
                                type: d.Qd(h)
                            };
                            return a.prototype.oa.call(d, h)
                        }, f);
                        if ("QAPage" === b.data["@type"]) {
                            var g =
                                b.data.mainEntity || b.data.mainEntityOfPage;
                            if (!g) return null
                        }
                        "Question" === b.data["@type"] && (g = b.data);
                        return g ? (b = Qb(w(g, n), ["acceptedAnswer", "suggestedAnswer"]), y(function(h) {
                            var k;
                            if (!h || !H(h["@type"], d.eb["schema.org"])) return null;
                            h = {
                                element: e,
                                type: d.Qd(h),
                                data: B((k = {}, k.parentItem = g, k), h)
                            };
                            return a.prototype.oa.call(d, h)
                        }, b)) : H(b.data["@type"], this.eb["schema.org"]) ? a.prototype.oa.call(this, B(b, {
                            type: this.Qd(b.data)
                        })) : null
                    };
                    c.prototype.Zb = function() {
                        return zb(this.Me, this.b, this.root)
                    };
                    c.prototype.Ze =
                        function(b) {
                            return ca(b) && b || b && ca(b["@graph"]) && b["@graph"]
                        };
                    return c
                }($f),
                ag = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.id = "s";
                        d.yd = !0;
                        d.Wi = da("exec", new RegExp("schema.org\\/(" + F("|", ea(d.ve)) + ")$"));
                        d.qb = (b = {}, b.id = function(e) {
                            e = e.element;
                            var f = Ua(this.b, e, "identifier");
                            return f ? Qa(f) : (f = Ua(this.b, e, "mainEntityOfPage")) && f.getAttribute("itemid") ? f.getAttribute("itemid") : null
                        }, b.chars = function(e) {
                            var f = 0;
                            e = e.element;
                            for (var g = ["articleBody", "reviewBody", "recipeInstructions",
                                    "description", "text"
                                ], h = 0; h < g.length; h += 1) {
                                var k = Ua(this.b, e, g[h]);
                                if (k) {
                                    f = Qa(k).length;
                                    break
                                }
                            }
                            0 === f && e.innerText && (f += e.innerText.length);
                            return f
                        }, b.topics = function(e) {
                            var f = this,
                                g = gd(this.b, e.element, "about");
                            return y(function(h) {
                                var k = {
                                    name: Qa(h)
                                };
                                if (g = Ua(f.b, h, "name")) k.name = Qa(g);
                                return k
                            }, g)
                        }, b.rubric = function(e) {
                            var f = this;
                            (e = hc(this.b, e.element, '[itemtype$="schema.org/BreadcrumbList"]')) || (e = hc(this.b, this.root, '[itemtype$="schema.org/BreadcrumbList"]'));
                            return e ? y(function(g) {
                                return {
                                    name: Qa(Ua(f.b,
                                        g, "name")),
                                    position: Qa(Ua(f.b, g, "position"))
                                }
                            }, gd(this.b, e, "itemListElement")) : []
                        }, b.updateDate = function(e) {
                            return (e = Ua(this.b, e.element, "dateModified")) ? Pi(e) : ""
                        }, b.publicationDate = function(e) {
                            return (e = Ua(this.b, e.element, "datePublished")) ? Pi(e) : ""
                        }, b.pageUrlCanonical = function(e) {
                            e = gd(this.b, e.element, "url");
                            return e.length ? e[0].href ? e[0].href : Qa(e) : null
                        }, b.pageTitle = function(e) {
                            var f = "",
                                g = e.element,
                                h = Ua(this.b, g, "headline");
                            h && (f += Qa(h));
                            (h = Ua(this.b, g, "alternativeHeadline")) && (f += " " + Qa(h));
                            "" ===
                            f && ((h = Ua(this.b, g, "name")) || (h = Ua(this.b, g, "itemReviewed")), h && (f += Qa(h)));
                            3 === e.type && (e = Ab('[itemtype$="schema.org/Question"]', this.b, g)) && (e = Ua(this.b, e, "text")) && (f += Qa(e));
                            return f
                        }, b.authors = function(e) {
                            var f = this;
                            e = gd(this.b, e.element, "author");
                            return y(function(g) {
                                    var h, k = (h = {}, h.name = "", h);
                                    /.+schema.org\/(Person|Organization)/.test(g.getAttribute("itemtype") || "") && (h = Ua(f.b, g, "name")) && (k.name = Qa(h));
                                    k.name || (k.name = g.getAttribute("content") || g.innerText || g.getAttribute("href"));
                                    return k
                                },
                                e)
                        }, b);
                        return d
                    }
                    za(c, a);
                    c.prototype.bf = function(b) {
                        b = b.getAttribute("itemtype") || "";
                        return (b = this.Wi(b)) ? this.ve[b[1]] : 1
                    };
                    c.prototype.oa = function(b) {
                        return b.element && b.element.innerText && b.element.innerText.length ? a.prototype.oa.call(this, b) : null
                    };
                    c.prototype.Zb = function() {
                        var b = F(",", y(function(d) {
                            return '[itemtype$="schema.org/' + d + '"]'
                        }, this.eb["schema.org"]));
                        return zb(b, this.b, this.root)
                    };
                    return c
                }($f),
                Gj = function(a) {
                    function c(b) {
                        var d;
                        b = a.call(this, b) || this;
                        b.id = "o";
                        b.qb = (d = {}, d.chars = function(e) {
                            e =
                                this.xa(e);
                            return e.innerText ? e.innerText.length : 0
                        }, d.authors = function(e) {
                            return this.md(e.data.author)
                        }, d.pageTitle = function(e) {
                            return this.ec(e.data.title) || ""
                        }, d.updateDate = function(e) {
                            return this.ec(e.data.modified_time)
                        }, d.publicationDate = function(e) {
                            return this.ec(e.data.published_time)
                        }, d.pageUrlCanonical = function(e) {
                            return this.ec(e.data.url)
                        }, d.rubric = function(e) {
                            return this.md(e.data.section)
                        }, d.topics = function(e) {
                            return this.md(e.data.tag)
                        }, d);
                        b.$g = new RegExp("^(og:)?((" + F("|", b.eb.yf) +
                            "):)?");
                        return b
                    }
                    za(c, a);
                    c.prototype.md = function(b) {
                        var d;
                        return b ? ca(b) ? y(function(e) {
                            var f;
                            return f = {}, f.name = e, f
                        }, b) : [(d = {}, d.name = b, d)] : []
                    };
                    c.prototype.ec = function(b) {
                        return ca(b) ? b.length ? b[0] : null : b
                    };
                    c.prototype.Zb = function() {
                        var b = zb('meta[property="og:type"]', this.b, this.b.document.body);
                        return [this.b.document.head].concat(b)
                    };
                    c.prototype.sh = function(b) {
                        var d = this,
                            e = b.element,
                            f = {},
                            g = this.xa(b);
                        e = zb("meta[property]", this.b, e === this.b.document.head ? e : g);
                        if (e.length) z(function(h) {
                            try {
                                if (h.parentNode ===
                                    g || h.parentNode === d.b.document.head) {
                                    var k = h.getAttribute("property").replace(d.$g, ""),
                                        l = Qa(h);
                                    f[k] ? ca(f[k]) ? f[k].push(l) : f[k] = [f[k], l] : f[k] = l
                                }
                            } catch (m) {
                                We(d.b, "og.ed", m)
                            }
                        }, e);
                        else return null;
                        return H(f.type, this.eb.yf) ? B(b, {
                            data: f
                        }) : null
                    };
                    c.prototype.xa = function(b) {
                        b = b.element;
                        var d = this.b.document;
                        return b === d.head ? d.body : b.parentNode
                    };
                    c.prototype.oa = function(b) {
                        return (b = this.sh(b)) ? a.prototype.oa.call(this, b) : null
                    };
                    return c
                }($f),
                Hj = "resize scroll mousemove mousedown click windowfocus keydown orientationchange change focus touchmove touchstart".split(" "),
                Aq = function() {
                    function a(c, b, d, e) {
                        this.nc = !1;
                        this.V = {};
                        this.scroll = {
                            x: 0,
                            y: 0
                        };
                        this.Xa = this.sf = 0;
                        this.Hd = this.Bf = "";
                        this.ca = [];
                        this.Ca = 0;
                        this.hb = {
                            Ha: 0,
                            ze: 0
                        };
                        this.buffer = d;
                        this.Ib = C(this.Ib, this);
                        this.ac = C(this.ac, this);
                        this.vc = C(this.vc, this);
                        this.b = c;
                        this.cd = e;
                        this.Gc = b;
                        this.Dd = "pai" + b.id;
                        this.rb();
                        this.Qe = na(this.b);
                        this.time = ba(this.b);
                        this.hg();
                        this.fc = S(this.b)
                    }
                    a.prototype.start = function() {
                        var c = this;
                        if (!this.nc) {
                            this.buffer.C("ag", this.ac);
                            this.buffer.C("se", this.vc);
                            this.Ji();
                            var b = this.fc.l(this.Dd, []),
                                d = !b.length;
                            b.push(C(this.Sh, this));
                            this.fc.Na(this.Dd, b);
                            d && this.Lf();
                            this.fc.Na("pai", function() {
                                return c.ca.length ? J(function(e, f) {
                                    return (e.Hc || 0) <= (f.Hc || 0) ? f : e
                                }, c.ca[0], c.ca.slice(1)).id : 0
                            });
                            this.Ib({
                                type: "page",
                                target: this.b
                            })
                        }
                    };
                    a.prototype.stop = function() {
                        this.buffer.ba("se", this.vc);
                        this.buffer.ba("ag", this.ac);
                        this.Xi();
                        this.nc = !0
                    };
                    a.prototype.qf = function(c) {
                        return Ab("html", this.b, c) !== this.b.document.documentElement
                    };
                    a.prototype.Lf = function() {
                        var c = this;
                        A(this.b, "p.ic" + this.Gc.id, function() {
                            if (!c.nc) {
                                var b =
                                    c.fc.l(c.Dd),
                                    d = c.Gc.hh();
                                z(function(e) {
                                    var f = y(function(g) {
                                        return B({}, g)
                                    }, d);
                                    P(e) && e(f)
                                }, b);
                                c.Ca = X(c.b, C(c.Lf, c), 1E3, "p")
                            }
                        })()
                    };
                    a.prototype.Sh = function(c) {
                        this.nc || (this.Yi(c), this.$i(), this.Ei())
                    };
                    a.prototype.Ib = function(c) {
                        var b = this;
                        A(this.b, "p.ec." + this.Gc.id, function() {
                            try {
                                var d = c.type;
                                var e = c.target
                            } catch (l) {
                                return
                            }
                            var f = "page" === d;
                            if ("scroll" === d || f) {
                                var g = [b.b, b.b.document, b.b.document.documentElement, ec(b.b)];
                                H(e, g) && b.rb()
                            }("resize" === d || f) && b.hg();
                            d = b.time(W);
                            var h = Math.min(d - b.sf, 5E3);
                            b.Xa += Math.round(h);
                            b.sf = d;
                            if (b.V && b.scroll && b.hb) {
                                var k = b.hb.Ha * b.hb.ze;
                                b.ca = y(function(l) {
                                    var m = B({}, l),
                                        p = b.V[m.id],
                                        q = Dc(l.pb);
                                    if (!p || b.qf(m.element) || !q) return m;
                                    l = b.b.Math;
                                    p = l.max((b.scroll.y + b.hb.Ha - p.y) / p.height, 0);
                                    var r = q.height * q.width;
                                    q = b.Jg(q);
                                    m.Hc = q / k;
                                    m.visibility = q / r;
                                    if (.9 <= m.visibility || .1 <= m.Hc) m.involvedTime += h;
                                    m.maxScrolled = l.round(1E4 * p) / 1E4;
                                    return m
                                }, b.ca)
                            }
                        })()
                    };
                    a.prototype.Jg = function(c) {
                        var b = c.top,
                            d = c.bottom,
                            e = c.left,
                            f = this.hb,
                            g = f.ze;
                        f = f.Ha;
                        var h = this.b.Math;
                        c = h.min(h.max(c.right,
                            0), g) - h.min(h.max(e, 0), g);
                        return (h.min(h.max(d, 0), f) - h.min(h.max(b, 0), f)) * c
                    };
                    a.prototype.Yi = function(c) {
                        var b = y(function(d) {
                            return d.id
                        }, this.ca);
                        this.ca = this.ca.concat(V(function(d) {
                            return !H(d.id, b)
                        }, c))
                    };
                    a.prototype.hg = function() {
                        var c = Bf(this.b) || bd(this.b);
                        this.hb = {
                            ze: c[0],
                            Ha: c[1]
                        }
                    };
                    a.prototype.$i = function() {
                        var c = this;
                        A(this.b, "p.um." + this.Gc.id, function() {
                            var b = [];
                            c.rb();
                            c.V = J(function(d, e) {
                                var f;
                                if (c.qf(e.element)) b.push(e), delete d[e.id];
                                else {
                                    var g = (f = {}, f.id = e.id, f.involvedTime = Math.max(e.involvedTime,
                                        0), f.maxScrolled = e.maxScrolled || 0, f.chars = e.update ? e.update("chars") || 0 : 0, f);
                                    e.pb && (f = Dc(e.pb)) && (g.x = Math.max(Math.round(f.left) + c.scroll.x, 0), g.y = Math.max(Math.round(f.top) + c.scroll.y, 0), g.width = Math.round(f.width), g.height = Math.round(f.height));
                                    d[e.id] = g
                                }
                                return d
                            }, {}, c.ca);
                            z(function(d) {
                                d = je(c.b)(d, c.ca);
                                c.ca.splice(d, 1)
                            }, b)
                        })()
                    };
                    a.prototype.vc = function() {
                        this.Bf = this.Hd
                    };
                    a.prototype.ac = function() {
                        var c, b, d = y(w(this.V, n), ea(this.V));
                        return d.length && (this.Hd = gb(this.b, d), this.Bf !== this.Hd) ? (c = {}, c.type = "publishersHeader", c.data = (b = {}, b.articleMeta = d || [], b.involvedTime = this.Xa, b), c) : null
                    };
                    a.prototype.Ei = function() {
                        var c = this;
                        if (this.ca.length) {
                            var b = V(function(d) {
                                return !d.de
                            }, this.ca);
                            z(function(d) {
                                var e, f = B({}, d);
                                delete f.pb;
                                delete f.de;
                                delete f.index;
                                delete f.involvedTime;
                                delete f.visibility;
                                delete f.Hc;
                                delete f.maxScrolled;
                                delete f.update;
                                delete f.element;
                                delete f.type;
                                c.buffer.push((e = {}, e.type = "articleInfo", e.stamp = f.stamp, e.data = f, e));
                                d.de = !0
                            }, b);
                            b.length && vb(this.b, "Publisher content info found: ",
                                b)
                        }
                    };
                    a.prototype.Ji = function() {
                        this.Qe.C(this.b, Hj, this.Ib)
                    };
                    a.prototype.Xi = function() {
                        this.Qe.Gb(this.b, Hj, this.Ib)
                    };
                    a.prototype.rb = function() {
                        this.scroll = {
                            x: this.b.pageXOffset || n(this.b, "document.documentElement.scrollLeft") || 0,
                            y: this.b.pageYOffset || n(this.b, "document.documentElement.scrollLeft") || 0
                        }
                    };
                    return a
                }(),
                od = {};
            Fj && (od.json_ld = Fj);
            ag && (od.schema = ag, od.microdata = ag);
            Gj && (od.opengraph = Gj);
            var Bq = E("p.p", function(a, c) {
                    function b(l, m, p) {
                        e(B({}, k, {
                            Y: l
                        }), c, p)["catch"](A(a, "s.ww.p"))
                    }
                    if (!pa("querySelectorAll",
                            a.document.querySelectorAll)) return L.resolve();
                    var d = [new qe(a)];
                    d.unshift(new zq(a));
                    var e = ma(a, "p", c),
                        f = $a(function(l) {
                            return l.isEnabled()
                        }, d);
                    d = sa();
                    var g = jd(a, c.id),
                        h = g.l("pai");
                    h && (g.Ub("pai"), d.o("pai", h));
                    var k = {
                        F: {},
                        H: d,
                        kf: !(f instanceof qe)
                    };
                    return Ha(a, c, A(a, "ps.s", function(l) {
                        if (l = n(l, "settings.publisher.schema")) {
                            l = Ei(c) ? "microdata" : l;
                            var m = od[l];
                            if (m && f) {
                                var p = T(c),
                                    q = Yf.nd(p, "e", b, f, a);
                                m = new m(a);
                                (new Aq(a, m, q, p)).start();
                                vb(a, 'Publishers analytics schema "' + l + '"')
                            }
                        }
                    }))
                }),
                oh = ha(function(a,
                    c) {
                    return c[a] || {}
                }),
                im = ha(function(a, c, b) {
                    var d = oh(a, b);
                    b[a] = B(d, c)
                }),
                Cq = ha(function(a, c) {
                    delete c[a]
                }),
                Dq = E("c.c.cc", function(a) {
                    var c = S(a),
                        b = u(w(a, Cd), Ea, function(d) {
                            var e;
                            return B({}, d, (e = {}, e.oldCode = !!a.ya_cid, e.clickmap = d.clickmap && !!d.clickmap, e))
                        });
                    return A(a, "g.c.cc", u(C(c.l, c, "counters", {}), ea, kb(b)))
                }),
                Eq = E("gt.c.rs", function(a, c) {
                    var b, d = T(c),
                        e = Pc(a, d),
                        f = c.id,
                        g = c.Z,
                        h = c.Qg,
                        k = c.Oa,
                        l = c.te;
                    d = u(w(d, Cq), Xe(a));
                    e((b = {}, b.id = f, b.type = +g, b.clickmap = h, b.webvisor = !!k, b.trackHash = !!l, b));
                    return d
                }),
                Ri, Fq = E("th.e", function(a, c) {
                    function b() {
                        f || (h = Nc(a, "onhashchange") ? na(a).C(a, ["hashchange"], g) : Zo(a, g))
                    }
                    var d = ma(a, "t", c),
                        e = Pc(a, T(c)),
                        f = !1,
                        g = A(a, "h.h.ch", C($o, null, a, c, d)),
                        h = D;
                    c.te && (b(), f = !0);
                    return {
                        Si: A(a, "tr.hs.h", function(k) {
                            var l;
                            k ? b() : h();
                            f = !!k;
                            e((l = {}, l.trackHash = f, l))
                        }),
                        unsubscribe: h
                    }
                }),
                Gq = {
                    1882689622: 1,
                    2318205080: 1,
                    3115871109: 1,
                    3604875100: 1,
                    339366994: 1,
                    2890452365: 1,
                    849340123: 1,
                    173872646: 1,
                    2343947156: 1,
                    655012937: 1,
                    3724710748: 1,
                    3364370932: 1,
                    1996539654: 1,
                    2065498185: 1,
                    823651274: 1,
                    12282461: 1,
                    1555719328: 1,
                    1417229093: 1,
                    138396985: 1
                },
                Si = 1,
                Jf = {},
                ge = {},
                Iq = E("nb.p", function(a, c) {
                    function b(I) {
                        k() || (I = "number" === typeof I ? I : 15E3, I = bp(a, d(!1), I), r = I.id, x = I.Oe, l())
                    }

                    function d(I) {
                        return function(aa) {
                            var ua, Ia, Cb;
                            void 0 === aa && (aa = (ua = {}, ua.ctx = {}, ua.callback = D, ua));
                            if (I || !q && !h.zd) {
                                q = !0;
                                l();
                                r && ap(a, r);
                                var ic = m(W);
                                ua = (parseInt(h.l("lastHit"), 10) || 0) < ic - 18E5;
                                var Je = .1 > Math.random();
                                h.o("lastHit", ic);
                                ic = sa((Ia = {}, Ia.nb = "1", Ia.cl = t, Ia.ar = "1", Ia));
                                Ia = md(c);
                                Ia = {
                                    F: (Cb = {}, Cb["page-url"] = Ia.url || Q(a).href,
                                        Cb),
                                    H: ic
                                };
                                Cb = kd(a).warn;
                                !aa.callback && aa.ctx && Cb('"callback" argument missing');
                                (I || ua || Je || !Vn(a.location.href, a.document.referrer)) && f(Ia, c).then(function() {
                                    if (!I) {
                                        var xc = .002,
                                            yc = c.id === qa.vg ? 1 : .002,
                                            zc, re, bg, se, cg;
                                        void 0 === xc && (xc = 1);
                                        void 0 === yc && (yc = 1);
                                        var pd = a.performance;
                                        if (pd && P(pd.getEntriesByType) && (xc = Math.random() > xc, yc = Math.random() > yc, !xc || !yc)) {
                                            pd = a.performance.getEntriesByType("resource");
                                            for (var te = {}, dg = {}, ue = {}, eg = 0; eg < pd.length; eg += 1) {
                                                var mb = pd[eg],
                                                    ve = mb.name.replace(/^https?:\/\//,
                                                        "").split("?")[0],
                                                    Hq = $b(ve),
                                                    Ij = (zc = {}, zc.dns = Math.round(mb.domainLookupEnd - mb.domainLookupStart), zc.tcp = Math.round(mb.connectEnd - mb.connectStart), zc.duration = Math.round(mb.duration), zc.response = Math.round(mb.responseEnd - mb.requestStart), zc);
                                                "script" !== mb.initiatorType || xc || (dg[ve] = B(Ij, (re = {}, re.name = mb.name, re.decodedBodySize = mb.decodedBodySize, re)));
                                                !Gq[Hq] || te[ve] || yc || (te[ve] = B(Ij, (bg = {}, bg.pages = a.location.href, bg)))
                                            }
                                            ea(te).length && (ue.timings8 = te);
                                            ea(dg).length && (ue.scripts = dg);
                                            if (ea(ue).length) ma(a,
                                                "d", c)({
                                                H: sa((se = {}, se.ar = "1", se.pv = "1", se)),
                                                Y: gb(a, ue) || void 0,
                                                F: (cg = {}, cg["page-url"] = a.location && "" + a.location.href, cg)
                                            }, {
                                                id: qa.xg,
                                                Z: "0"
                                            })["catch"](A(a, "r.tim.ng2"))
                                        }
                                    }
                                }).then(M([a, aa.callback, aa.ctx], Ib), A(a, "l.o.l"))
                            }
                        }
                    }
                    var e, f = ma(a, "n", c),
                        g = T(c),
                        h = jd(a, c.id),
                        k = w(Cd(a, g), u(Ea, U("accurateTrackBounce"))),
                        l = w((e = {}, e.accurateTrackBounce = !0, e), Pc(a, g)),
                        m = ba(a),
                        p = m(W),
                        q = !1,
                        r = 0,
                        t = 0,
                        x;
                    Ha(a, c, function(I) {
                        t = I.ih - p
                    });
                    c.Jb && b(c.Jb);
                    return {
                        ci: d(!0),
                        Jb: b,
                        gd: x
                    }
                }),
                fg = ["yandex_metrika_callback" + $c.callbackPostfix,
                    "yandex_metrika_callbacks" + $c.callbackPostfix
                ],
                Jq = E("cb.i", function(a) {
                    var c = fg[0],
                        b = fg[1];
                    if (P(a[c])) a[c]();
                    "object" === typeof a[b] && z(function(d, e) {
                        a[b][e] = null;
                        Ib(a, d)
                    }, a[b]);
                    z(function(d) {
                        try {
                            delete a[d]
                        } catch (e) {
                            a[d] = void 0
                        }
                    }, fg)
                }),
                Jj = {
                    Cj: Xa(/[/&=?#]/)
                },
                Ce = E("go.in", function(a, c, b, d) {
                    void 0 === b && (b = "goal");
                    return function(e, f, g, h) {
                        var k, l;
                        if (!(!e || Jj[b] && Jj[b](e))) {
                            var m = f,
                                p = g || D;
                            P(f) && (p = f, m = void 0, h = g);
                            f = Bb(a, c, "Reach goal. Counter: " + c.id + ". Goal id: " + e, m);
                            g = "goal" === b;
                            var q = ma(a, "g", c);
                            var r =
                                b;
                            var t = Q(a);
                            var x = t.hostname;
                            t = t.href;
                            var I = md(c).url;
                            I && (t = jc(a, I), x = t.hostname, t = t.href);
                            r = [r + "://" + x + "/" + e, t || ""];
                            e = r[0];
                            r = r[1];
                            q({
                                N: m,
                                H: sa((k = {}, k.ar = 1, k)),
                                F: (l = {}, l["page-url"] = e, l["page-ref"] = r, l)
                            }, c).then(u(g ? f || D : D, d || D))["catch"](A(a, "g.s")).then(C(Ib, null, a, p, h))
                        }
                    }
                }),
                gm = /^ *(data|javascript):/i,
                mh = new RegExp(F("", ["\\.(" + F("|", "3gp 7z aac ac3 acs ai avi ape apk asf bmp bz2 cab cdr crc32 css csv cue divx dmg djvu? doc(x|m|b)? emf eps exe flac? flv iso swf gif t?gz jpe?g? js m3u8? m4a mp(3|4|e?g?) m4v md5 mkv mov msi ods og(g|m|v) psd rar rss rtf sea sfv sit sha1 svg tar tif?f torrent ts txt vob wave? wma wmv wmf webm ppt(x|m|b)? xls(x|m|b)? pdf phps png xpi g?zip".split(" ")) +
                    ")$"
                ]), "i"),
                Kq = Ca(function(a, c) {
                    Na(c) ? a.push(c) : z(u(O, da("push", a)), c)
                }),
                Lq = E("cl.p", function(a, c) {
                    function b(m, p, q, r) {
                        void 0 === r && (r = {});
                        q ? Bd(a, c, {
                            url: q,
                            ub: !0,
                            mc: m,
                            rc: p,
                            sender: d,
                            b: r.ctx,
                            Qa: r.callback,
                            title: r.title,
                            N: r.params
                        }) : f.warn("Empty link")
                    }
                    var d = ma(a, "2", c),
                        e = [],
                        f = kd(a),
                        g = T(c),
                        h = A(a, "s.s.tr", w(Pc(a, g), hm));
                    g = {
                        b: a,
                        Ug: c,
                        gh: e,
                        sender: d,
                        globalStorage: S(a),
                        Tg: jd(a, c.id),
                        Jh: qc(a),
                        Ti: w(Cd(a, g), u(Ea, U("trackLinks")))
                    };
                    g = A(a, "cl.p.c", w(g, em));
                    g = na(a).C(a, ["click"], g);
                    c.Pc && h(c.Pc);
                    var k = A(a, "file.clc",
                            M([!0, !1], b)),
                        l = A(a, "e.l.l.clc", M([!1, !0], b));
                    e = A(a, "add.f.e.clc", Kq(e));
                    return {
                        file: k,
                        bh: l,
                        Bg: e,
                        Pc: h,
                        gd: g
                    }
                }),
                Mq = [
                    [
                        ["'(-$&$&$'", 30102, 0],
                        ["'(-$&$&$'", 29009, 0]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1],
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                Nq = [
                    [
                        ["oWdZ[nc[jh_YW$Yec", 30103, 1]
                    ],
                    [
                        ["oWdZ[nc[jh_YW$Yec", 29010, 1]
                    ]
                ],
                cm = {
                    F: {
                        t: 'UV|L7,!"T[rwe&D_>ZIb\\aW#98Y.PC6k'
                    }
                },
                kh = {
                    id: 42822899,
                    Z: "0"
                },
                $l = tc("csp", function(a, c) {
                    return ma(a, "s", c)({}, ["https://ymetrica1.com/watch/3/1"])
                }),
                lh = u(U("settings.pcs"), xa("1")),
                Oq = E("s", function(a,
                    c) {
                    return Ha(a, c, function(b) {
                        var d = ba(a),
                            e = dm(a, b.userData, c),
                            f = cd(a),
                            g = u(Qf, Fb(["iPhone", "iPad"]))(a);
                        return (f || g) && Yl(a, d, c, e, b).then(function() {
                            if (f) var h = Mq;
                            else if (g) h = Nq;
                            else return;
                            return Wl(a, h, c, e, d)
                        }, D)
                    })
                }),
                Pq = v(u(U("performance.memory.jsHeapSizeLimit"), da("concat", ""))),
                jh = "video/ogg video/mp4 video/webm audio/x-aiff audio/x-m4a audio/mpeg audio/aac audio/wav audio/ogg audio/mp4".split(" "),
                Ul = "theora vorbis 1 avc1.4D401E mp4a.40.2 vp8.0 mp4a.40.5".split(" "),
                Tl = "prefers-reduced-motion;prefers-reduced-transparency;prefers-color-scheme: dark;prefers-color-scheme: light;pointer: none;pointer: coarse;pointer: fine;any-pointer: none;any-pointer: coarse;any-pointer: fine;scan: interlace;scan: progressive;color-gamut: srgb;color-gamut: p3;color-gamut: rec2020;update: fast;update: slow;update: none;grid: 0;grid: 2;hover: hover;inverted-colors: inverted;inverted-colors: none".split(";"),
                Sl = ["availWidth", "availHeight", "availTop"],
                Qq = ["webgl", "experimental-webgl"],
                Ql = [-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0],
                Nl = "appName vendor deviceMemory hardwareConcurrency maxTouchPoints appVersion productSub appCodeName vendorSub".split(" "),
                Hl = Ca(Vb)("(ym-disable-clickmap|ym-clickmap-ignore)"),
                Rq = E("clm.p", function(a, c) {
                    if (Uc(a)) return D;
                    var b = ma(a, "m", c),
                        d = T(c),
                        e = ba(a),
                        f = e(W),
                        g = w(Cd(a, d), u(Ea, U("clickmap"))),
                        h, k = null;
                    d = A(a, "clm.p.c", function(l) {
                        var m = g();
                        if (m) {
                            var p = "object" === typeof m ? m : {},
                                q = p.filter;
                            m = p.isTrackHash || !1;
                            var r = y(function(x) {
                                return ("" + x).toUpperCase()
                            }, p.ignoreTags || []);
                            R(h) && (h = p.quota || null);
                            var t = !!p.quota;
                            l = {
                                element: Il(a, l),
                                position: ih(a, l),
                                button: Jl(l),
                                time: e(W)
                            };
                            p = Q(a).href;
                            if (Gl(a, l, k, r, q)) {
                                if (t) {
                                    if (!h) return;
                                    --h
                                }
                                r = Wd(a, l.element);
                                q = r[0];
                                r = r[1];
                                t = Af(a, l.element);
                                q = ["rn", Wa(a), "x", Math.floor(65535 * (l.position.x - t.left) / (q || 1)), "y", Math.floor(65535 * (l.position.y - t.top) / (r || 1)), "t", Math.floor((l.time - f) / 100), "p", vi(a, l.element), "X", l.position.x, "Y", l.position.y];
                                q = F(":", q);
                                m && (q += ":wh:1");
                                Fl(a, p, q, b, c);
                                k = l
                            }
                        }
                    });
                    return na(a).C(n(a, "document"), ["click"], d)
                }),
                Sq = v(function(a) {
                    var c = S(a),
                        b = c.l("isEU");
                    if (R(b)) {
                        var d = parseInt(Kc(a, "is_gdpr") || "", 10);
                        if (H(d, [0, 1])) c.o("isEU", d), b = !!d;
                        else if (a = Ja(a).l("wasSynced"), a = n(a, "params.eu")) c.o("isEU", a), b = !!a
                    }
                    return b
                }, function(a) {
                    return S(a).l("isEU")
                }),
                Fe = E("i.e", Sq),
                Tq = function() {
                    function a(c, b) {
                        this.b = c;
                        this.qh = b
                    }
                    a.prototype.Aa = function(c) {
                        return He(Qb(C(this.Ba, this), c))
                    };
                    a.prototype.Ba = function(c, b) {
                        var d = this,
                            e = [],
                            f = this.qh(this.b,
                                b && b.type, c.type);
                        f && (e = Qb(function(g) {
                            return g({
                                b: d.b,
                                ea: c
                            }) || []
                        }, f));
                        return e
                    };
                    a.prototype.Ga = function(c) {
                        return c.length
                    };
                    a.prototype.Lc = function(c) {
                        return [c]
                    };
                    a.prototype.isEnabled = function() {
                        return !0
                    };
                    return a
                }(),
                nl = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.buffer = [];
                        b.qg = 7500;
                        b.Tc = 3E4;
                        b.Kc();
                        return b
                    }
                    za(c, a);
                    c.prototype.push = function(b, d) {
                        var e = this.ma.Ba(b, d);
                        Sa(this.buffer, e);
                        this.ma.Ga(this.buffer) > this.qg && this.flush()
                    };
                    c.prototype.flush = function() {
                        var b = this.buffer;
                        b.length &&
                            (this.send(b), this.buffer = [])
                    };
                    return c
                }(Ej),
                Ka = "metrikaId_" + Math.random(),
                Ub = {
                    ad: 0
                },
                Kj = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state contact.*".split(" "),
                vl = ["email", "tel"],
                Dl = /ym-hide-content/,
                El = /ym-show-content/,
                Al = /^[\w\u0410-\u042f\u0430-\u044f]$/,
                Bl = [65, 90],
                Cl = [97, 122],
                yl = "color radio checkbox date datetime-local email month number password range search tel text time url week".split(" "),
                wl = new RegExp("(" + F("|", Kj) + ")", "i"),
                Ti = ["password", "passwd", "pswd"],
                xl = new RegExp("(" + F("|", Kj.concat("\u0438\u043c\u044f \u0444\u0430\u043c\u0438\u043b\u0438\u044f \u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0434\u0435\u043a\u0441 \u0442\u0435\u043b\u0435\u0444\u043e\u043d \u0430\u0434\u0440\u0435\u0441 \u043f\u0430\u0441\u043f\u043e\u0440\u0442 \u043d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f(-|\\.|_|\\s){0,2}\u043f\u043e\u0447\u0442\u0430 \u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2}\u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f \u0434\u043e\u043c \u0443\u043b\u0438\u0446\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0433\u043e\u0440\u043e\u0434 \u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(" "))) +
                    ")", "i"),
                fp = v(function() {
                    var a;
                    return a = {}, a.A = 1, a.ABBR = 2, a.ACRONYM = 3, a.ADDRESS = 4, a.APPLET = 5, a.AREA = 6, a.B = 7, a.BASE = 8, a.BASEFONT = 9, a.BDO = 10, a.BIG = 11, a.BLOCKQUOTE = 12, a.BODY = 13, a.BR = 14, a.BUTTON = 15, a.CAPTION = 16, a.CENTER = 17, a.CITE = 18, a.CODE = 19, a.COL = 20, a.COLGROUP = 21, a.DD = 22, a.DEL = 23, a.DFN = 24, a.DIR = 25, a.DIV = 26, a.DL = 27, a.DT = 28, a.EM = 29, a.FIELDSET = 30, a.FONT = 31, a.FORM = 32, a.FRAME = 33, a.FRAMESET = 34, a.H1 = 35, a.H2 = 36, a.H3 = 37, a.H4 = 38, a.H5 = 39, a.H6 = 40, a.HEAD = 41, a.HR = 42, a.HTML = 43, a.I = 44, a.IFRAME = 45, a.IMG = 46, a.INPUT =
                        47, a.INS = 48, a.ISINDEX = 49, a.KBD = 50, a.LABEL = 51, a.LEGEND = 52, a.LI = 53, a.LINK = 54, a.MAP = 55, a.MENU = 56, a.META = 57, a.NOFRAMES = 58, a.NOSCRIPT = 59, a.OBJECT = 60, a.OL = 61, a.OPTGROUP = 62, a.OPTION = 63, a.P = 64, a.PARAM = 65, a.PRE = 66, a.Q = 67, a.S = 68, a.SAMP = 69, a.SCRIPT = 70, a.SELECT = 71, a.SMALL = 72, a.SPAN = 73, a.STRIKE = 74, a.STRONG = 75, a.STYLE = 76, a.SUB = 77, a.SUP = 78, a.TABLE = 79, a.TBODY = 80, a.TD = 81, a.TEXTAREA = 82, a.TFOOT = 83, a.TH = 84, a.THEAD = 85, a.TITLE = 86, a.TR = 87, a.TT = 88, a.U = 89, a.UL = 90, a.VAR = 91, a.NOINDEX = 100, a
                }),
                cp = [17, 18, 38, 32, 39, 15, 11, 7, 1],
                Uq =
                function() {
                    var a = "first(-|\\.|_|\\s){0,2}name last(-|\\.|_|\\s){0,2}name zip postal phone address passport (bank|credit)(-|\\.|_|\\s){0,2}card card(-|\\.|_|\\s){0,2}number card(-|\\.|_|\\s){0,2}holder cvv card(-|\\.|_|\\s){0,2}exp card(-|\\.|_|\\s){0,2}name card.*month card.*year card.*month card.*year password email birth(-|\\.|_|\\s){0,2}(day|date) second(-|\\.|_|\\s){0,2}name third(-|\\.|_|\\s){0,2}name patronymic middle(-|\\.|_|\\s){0,2}name birth(-|\\.|_|\\s){0,2}place house street city flat state".split(" ");
                    return {
                        Aj: new RegExp("(" + F("|", a) + ")", "i"),
                        Jj: new RegExp("(" + F("|", a.concat("\u0438\u043c\u044f;\u0444\u0430\u043c\u0438\u043b\u0438\u044f;\u043e\u0442\u0447\u0435\u0441\u0442\u0432\u043e;\u0438\u043d\u0434\u0435\u043a\u0441;\u0442\u0435\u043b\u0435\u0444\u043e\u043d;\u0430\u0434\u0440\u0435\u0441;\u043f\u0430\u0441\u043f\u043e\u0440\u0442;\u041d\u043e\u043c\u0435\u0440(-|\\.|_|\\s){0,2}\u043a\u0430\u0440\u0442\u044b;\u0434\u0430\u0442\u0430(-|\\.|_|\\s){0,2} \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f;\u0434\u043e\u043c;\u0443\u043b\u0438\u0446\u0430;\u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430;\u0433\u043e\u0440\u043e\u0434;\u043e\u0431\u043b\u0430\u0441\u0442\u044c".split(";"))) +
                            ")", "i"),
                        zj: /ym-record-keys/i,
                        fi: "\u2022",
                        Ij: 88
                    }
                }(),
                Yi = kb(w(Uq.fi, O)),
                Lc = !0,
                Mf = "",
                Nf = !1,
                Of = !0,
                Pf = !1,
                tl = Ca(function(a, c) {
                    var b = M([a, "efv." + c.event], A);
                    c.M = y(u(O, b), c.M);
                    return c
                }),
                Lj = v(function(a) {
                    var c = [],
                        b = [],
                        d = [];
                    a.document.attachEvent && !a.opera && (c.push(Se), b.push(jp), b.push(kp));
                    a.document.addEventListener ? c.push(Wi) : (b.push(Vi), d.push(Wi));
                    c = fa([{
                        target: a,
                        type: "window",
                        event: "beforeunload",
                        M: [D]
                    }, {
                        target: a,
                        type: "window",
                        event: "unload",
                        M: [D]
                    }, {
                        event: "click",
                        M: [he]
                    }, {
                        event: "dblclick",
                        M: [he]
                    }, {
                        event: "mousedown",
                        M: [he]
                    }, {
                        event: "mouseup",
                        M: [mp]
                    }, {
                        event: "keydown",
                        M: [np]
                    }, {
                        event: "keypress",
                        M: [op]
                    }, {
                        event: "copy",
                        M: [$i]
                    }, {
                        event: "blur",
                        M: c
                    }, {
                        event: "focusin",
                        M: b
                    }, {
                        event: "focusout",
                        M: d
                    }], !a.document.attachEvent || a.opera ? [{
                        target: a,
                        type: "window",
                        event: "focus",
                        M: [ch]
                    }, {
                        target: a,
                        type: "window",
                        event: "blur",
                        M: [Se]
                    }] : [], a.document.addEventListener ? [{
                        event: "focus",
                        M: [Vi]
                    }, {
                        event: "change",
                        M: [Xi]
                    }, {
                        event: "submit",
                        M: [bj]
                    }] : [{
                        type: "formInput",
                        event: "change",
                        M: [Xi]
                    }, {
                        type: "form",
                        event: "submit",
                        M: [bj]
                    }]);
                    return sl(a, c)
                }),
                ql =
                v(function(a) {
                    return fa(ec(a) ? [{
                        target: a,
                        type: "document",
                        event: "mouseleave",
                        M: [pp]
                    }] : [])
                }),
                Vq = ["submit", "beforeunload", "unload"],
                Wq = v(function(a, c) {
                    var b = c(a);
                    return J(function(d, e) {
                        d[e.type + ":" + e.event] = e.M;
                        return d
                    }, {}, b)
                }),
                Xq = w(Lj, function(a, c, b, d) {
                    return Wq(c, a)[b + ":" + d] || []
                }),
                rl = /^\s*function submit\(\)/,
                pl = /opera mini/i,
                Yq = E("fw.p", function(a, c) {
                    if (!c.Oa) return L.resolve(D);
                    var b = new Tq(a, Xq);
                    return ml(a, c, b, Lj, Vq)
                }),
                Zq = E("pr.p", function(a, c) {
                    var b, d;
                    if (mf(a)) {
                        var e = ma(a, "5", c),
                            f = sa((b = {}, b.pq =
                                1, b.ar = 1, b));
                        e({
                            H: f,
                            F: (d = {}, d["page-url"] = Q(a).href, d["page-ref"] = n(a, "document.referrer") || "", d)
                        }, c)["catch"](A(a, "pr.p.s"))
                    }
                }),
                Oa = u(ea, U("0")),
                $q = E("c.m.p", function(a, c) {
                    var b = T(c);
                    return w(Pc(a, b), ll)
                }),
                ar = E("e.a.p", function(a, c) {
                    var b = La(a, c);
                    b = M([u(O, la(!0)), V(Boolean, y(w(b, n), ["clickmap", "trackLinks", "accurateTrackBounce"]))], y);
                    c.Zg && b();
                    return b
                }),
                br = E("cc.i", function(a, c) {
                    var b = M([a, c], kl);
                    b = M([a, b, 300], X);
                    Ha(a, c, b)
                }),
                cr = E("s.f.i", function(a, c) {
                    return Ha(a, c, function(b) {
                        if (n(b, "settings.button_goals") ||
                            -1 !== Q(a).href.indexOf("yagoalsbuttons=1")) na(a).C(a, ["click"], A(a, "c.t.c", u(U("target"), M([a, c], ie(a, c, jl))))), Bb(a, c, "Button goal. Counter " + c.id + ". Init.")()
                    })
                }),
                dr = E("p.fh", function(a, c) {
                    var b, d;
                    void 0 === c && (c = !0);
                    var e = Ja(a),
                        f = ba(a),
                        g = e.l("wasSynced"),
                        h = {
                            id: 3,
                            Z: "0"
                        };
                    return c && g && g.time + 864E5 > f(W) ? L.resolve(g) : ma(a, "f", h)({
                        H: sa((b = {}, b.pv = 1, b)),
                        F: (d = {}, d["page-url"] = Q(a).href, d["page-ref"] = a.document.referrer, d)
                    }, h).then(function(k) {
                        var l;
                        k = (l = {}, l.time = f(W), l.params = n(k, "settings"), l.bkParams =
                            n(k, "userData"), l);
                        e.o("wasSynced", k);
                        return k
                    })["catch"](A(a, "f.h"))
                }),
                er = E("pa.int", function(a, c) {
                    return A(a, "pa.c", function() {
                        var b, d;
                        var e = Ba(arguments),
                            f = D;
                        var g = null;
                        var h = e.length;
                        if (0 !== e.length && e[0]) {
                            var k = e.slice(-1)[0];
                            P(k) && (f = k, h = e.length + -1);
                            var l = e.slice(-2)[0];
                            P(l) && (f = l, g = k, h = e.length + -2);
                            h = e.slice(0, h);
                            g = {
                                Vg: g,
                                Qa: f,
                                N: 1 === h.length ? e[0] : Ac(h)
                            }
                        } else g = void 0;
                        if (g && (e = g.Vg, f = g.N, g = g.Qa, nc(f) || ca(f))) {
                            h = ma(a, "1", c);
                            k = md(c).url;
                            l = n(f, "__ym.user_id");
                            var m = ea(f),
                                p = H("__ymu", m),
                                q = H("__ym",
                                    m) && l;
                            m = !yh(c);
                            l = Bb(a, c, q ? "Set user id " + l : (p ? "User p" : "P") + "arams. Counter " + c.id, q ? void 0 : JSON.stringify(f));
                            h({
                                N: f,
                                H: sa((b = {}, b.pa = 1, b.ar = 1, b)),
                                F: (d = {}, d["page-url"] = k || Q(a).href, d)
                            }, c).then(m ? l : D)["catch"](A(a, "p.s")).then(C(Ib, null, a, g, e))
                        }
                    })
                }),
                fr = E("exps.int", function(a, c) {
                    return A(a, "e.m", function(b, d, e) {
                        var f, g;
                        void 0 === d && (d = D);
                        if (b && 0 < b.length) {
                            var h = ma(a, "e", c),
                                k = md(c).url;
                            return h({
                                H: sa((f = {}, f.ex = 1, f.ar = 1, f)),
                                F: (g = {}, g["page-url"] = k || Q(a).href, g.exp = b, g)
                            }, c).then(C(Ib, null, a, d, e), A(a,
                                "exps.s"))
                        }
                    })
                }),
                gr = E("y.p", function(a, c) {
                    var b = Mh(a, c);
                    if (b) {
                        var d = cf(a),
                            e = M([a, b, c], il);
                        Kh(a, d, function(f) {
                            f.C("params", e)
                        });
                        b.X.C("params", u(U("1"), e))
                    }
                }),
                hr = tc("is", function(a) {
                    var c = Gb(a),
                        b = "" + qa.Fa + $b("Wjw75ghm7fa7JW8p");
                    if (Q(a).hash.substring(1, b.length + 1) === b || c.l("debug_build") === qa.Fa) return c.o("debug_build", qa.Fa), lc(a, {
                        src: "https://yastatic.net/metrika-static-watch/tag.js"
                    })
                }),
                Sg = v(Rb),
                ir = u(da("exec", /counterID=(\d+)/), U("1")),
                Tg = Ca(function(a, c) {
                    var b = Sg(a),
                        d = ka(c),
                        e = d[0],
                        f = d[1];
                    d = d.slice(2);
                    if (f) {
                        var g = "" + e;
                        var h = {
                            id: 1,
                            Z: "0"
                        };
                        var k = ir(g);
                        k ? h.id = k : -1 === g.indexOf(":") ? h.id = parseInt(g, 10) : (g = g.split(":"), k = g[1], h.id = parseInt(g[0], 10), h.Z = k);
                        h = [La(a, h), h];
                        g = h[0];
                        h = h[1];
                        k = T(h);
                        b[k] || (b[k] = {});
                        b = b[k];
                        "init" === f ? (e = "yaCounter" + h.id, a[e] || (f = d[0], hr(a) || (a[e] = new a.Ya[qa.Nb](B({}, f, h))))) : g && g[f] && b.Lh ? g[f].apply(g, d) : (h = b.Wf, h || (h = [], b.Wf = h), h.push(fa([e, f], d)))
                    }
                }),
                nb, gc, Oe = (nb = {}, nb.transaction_id = "id", nb.item_id = "id", nb.item_name = "name", nb.item_brand = "brand", nb.promotion_name = "coupon", nb.index =
                    "position", nb.item_variant = "variant", nb.value = "revenue", nb.item_category = "category", nb),
                Rg = (gc = {}, gc.view_item = "detail", gc.add_to_cart = "add", gc.remove_from_cart = "remove", gc.begin_checkout = "checkout", gc.purchase = "purchase", gc),
                el = "currencyCode add delete remove purchase checkout detail".split(" "),
                Mj = E("dl.w", function(a, c, b) {
                    var d;
                    Td(a, a[c], function(e) {
                        b(e)
                    }) || (d = X(a, function() {
                        Mj(a, c, b)
                    }, 1E3, "ec.dl"));
                    return C(oa, null, a, d)
                }),
                jr = E("p.e", function(a, c) {
                    var b = La(a, c);
                    if (b && c.hd) {
                        b = C(b.params, b);
                        var d =
                            A(a, "h.ee", M([a, b], cl));
                        return Mj(a, c.hd, function(e) {
                            e.C(d)
                        })
                    }
                }),
                kr = E("fid", function(a) {
                    var c, b = D;
                    if (!P(a.PerformanceObserver)) return b;
                    var d = S(a);
                    if (d.l("fido")) return b;
                    d.o("fido", !0);
                    var e = new a.PerformanceObserver(A(a, "fid", function(f) {
                        f = f.getEntries()[0];
                        d.o("fid", a.Math.round(100 * (f.processingStart - f.startTime)));
                        b()
                    }));
                    b = function() {
                        return e.disconnect()
                    };
                    try {
                        e.observe((c = {}, c.type = "first-input", c.buffered = !0, c))
                    } catch (f) {}
                    return b
                }),
                we = ha(function(a, c, b, d) {
                    var e, f;
                    (b = La(c, b)) && fl(a, d, c) && (c =
                        C(b.params, b), (a = Ne(a, d, "goods")) && c && c((e = {}, e.__ym = (f = {}, f.ecommerce = [a], f), e)))
                }),
                lr = E("ecm.a", we("add")),
                mr = E("ecm.r", we("remove")),
                nr = E("ecm.d", we("detail")),
                or = E("ecm.p", we("purchase")),
                qg = Up("form"),
                pr = pj("form"),
                Ng = v(function(a) {
                    return F("[^\\d<>]*", a.split(""))
                }),
                Sk = v(function(a) {
                    return new RegExp(Ng(a), "g")
                }),
                Gc = u(w("replace", da), zh([/\D/g, ""]), Ea),
                Zk = /\S/,
                Hg = w(["style", "display:inline;margin:0;padding:0;font-size:inherit;color:inherit;line-height:inherit"], Ac),
                Uk = ["https://iframe-toloka.com/"],
                Cg = Xa(/^https:\/\/(yastatic\.net\/s3\/metrika|s3\.mds\.yandex\.net\/internal-metrika-betas|[\w-]+\.dev\.webvisor\.com|[\w-]+\.dev\.metrika\.yandex\.ru)\/(\w|-|\/|(\.)(?!\.))+\.js$/),
                qr = ["form", "button", "phone"],
                Bg = v(function(a, c, b, d) {
                    var e, f, g, h = b.resource,
                        k = b.data;
                    k = void 0 === k ? "" : k;
                    if (b.inline) {
                        c = S(a);
                        var l = {};
                        l.getCachedTags = wi;
                        l.form = (e = {}, e.closest = w(a, qg), e.select = w(a, pr), e.getData = w(a, sg), e);
                        l.button = (f = {}, f.closest = w(a, Ug), f.select = w(a, qi), f.getData = w(a, Vg), f);
                        l.phone = (g = {}, g.hidePhones = M([a,
                            null, [k]
                        ], Dg), g);
                        c.o("_u", l);
                        d ? b = h : (d = b.lang, d = void 0 === d ? "" : d, e = b.appVersion, e = void 0 === e ? "" : e, f = b.fileId, f = void 0 === f ? "" : f, b = b.beta, b = void 0 === b ? !1 : b, e = F(".", u(kb(u(O, parseInt)), oc(Boolean))(e.split("."))), H(f, qr) && H(d, ["ru", "en", "tr"]) ? (b = (b ? "https://s3.mds.yandex.net/internal-metrika-betas" : "https://yastatic.net/s3/metrika") + (e ? "/" + e : "") + "/form-selector/" + (f + "_" + d + ".js"), b = Cg(b) ? b : "") : b = "");
                        b && lc(a, {
                            src: b
                        })
                    } else a._ym__postMessageEvent = c, a._ym__inpageMode = b.inpageMode, a._ym__initMessage = b.initMessage,
                        Vk(a, b.resource)
                }, function(a, c, b) {
                    return b.id
                }),
                Nj = v(function(a) {
                    return Uc(a) || !pa("querySelectorAll", a.document.querySelectorAll)
                }),
                Pk = v(Eg),
                Ag = v(pb, qb),
                rr = E("phc.p", function(a, c) {
                    return Nj(a) ? D : Ha(a, c, function(b) {
                        var d = c.id,
                            e = Fc(a, void 0, d),
                            f = e.l("phc_settings") || "";
                        if (b = n(b, "settings.phchange")) {
                            var g = gb(a, b) || "";
                            g !== f && e.o("phc_settings", g)
                        } else f && (b = Ag(a, f));
                        e = n(b, "clientId");
                        f = n(b, "orderId");
                        b = n(b, "phones") || [];
                        e && f && b.length && (f = {
                                ob: "",
                                yb: "",
                                Vf: 0,
                                da: {},
                                ja: [],
                                pf: !1,
                                Ta: !0,
                                b: a,
                                Le: c
                            }, B(f, {
                                pf: !0
                            }),
                            zg(a, d, f), b = Hc(a), e = Fg(a, b, 1E3), d = C(zg, null, a, d, f), e.C(d), Gg(a, b))
                    })
                }),
                sr = E("phc.h", function(a, c) {
                    return Eo(a) || Nj(a) ? null : Ha(a, c, function(b) {
                        if (!n(b, "settings.phchange")) {
                            var d = Fc(a, "").l("yaHidePhones");
                            d = d ? pb(a, d) : "";
                            (b = n(b, "settings.phhide") || d) && Dg(a, c, b)
                        }
                    })
                }),
                tr = E("up.int", function(a, c) {
                    return A(a, "up.c", function(b, d, e) {
                        var f, g = La(a, c),
                            h = Gd(a).warn;
                        g ? nc(b) ? (b = (f = {}, f.__ymu = b, f), (f = g.params) && f(b, d || D, e)) : h("Wrong user params") : h("No counter instance found")
                    })
                }),
                ur = E("trigger.in", function(a,
                    c) {
                    c.eg && ub(a, M([a, "yacounter" + c.id + "inited"], wo), "t.i")
                }),
                vr = E("destruct.e", function(a, c, b) {
                    return function() {
                        var d = S(a),
                            e = c.id;
                        z(function(f, g) {
                            return P(f) && A(a, "dest.fr." + g, f)()
                        }, b);
                        delete d.l("counters")[T(c)];
                        delete a["yaCounter" + e]
                    }
                }),
                wr = E("fip", function(a, c) {
                    if (!sj(a) || Wc(a)) {
                        var b = Ja(a);
                        if (!b.l("fip")) {
                            var d = u(kb(u(function(e, f) {
                                return E("fip." + f, e)(a)
                            }, C(Yo, null))), Oc("-"))(c);
                            b.o("fip", d)
                        }
                    }
                }),
                xr = w("9-d5ve+.r%7", O),
                yr = E("ad", function(a, c) {
                    if (!c.Za) {
                        var b = S(a);
                        if (!b.l("adBlockEnabled")) {
                            var d =
                                function(m) {
                                    H(m, ["2", "1"]) && b.o("adBlockEnabled", m)
                                },
                                e = Gb(a),
                                f = e.l("isad");
                            if (f) d(f);
                            else {
                                var g = w("adStatus", b.o),
                                    h = function(m) {
                                        m = m ? "1" : "2";
                                        d(m);
                                        g("complete");
                                        e.o("isad", m, 1200);
                                        return m
                                    },
                                    k = ma(a, "adb", c);
                                if (!b.l("adStatus")) {
                                    g("process");
                                    var l = "metrika/a" + xr().replace(/[^a-v]+/g, "") + "t.gif";
                                    Mk(a, function() {
                                        return k({}, l).then(w(!1, h))["catch"](w(!0, h))
                                    })
                                }
                            }
                        }
                    }
                }),
                zr = E("pa.plgn", function(a, c) {
                    var b = Kd(a, c);
                    b && b.X.C("pluginInfo", A(a, "c.plgn", function() {
                        return Do(c, kj)
                    }))
                }),
                Ar = E("suid.int", function(a, c) {
                    return A(a,
                        "suid.c",
                        function(b, d, e) {
                            var f = La(a, c),
                                g = kd(a);
                            Na(b) || xd(a, b) ? (b = Ac(["__ym", "user_id", b]), f.params(b, d || D, e)) : g.error("Incorrect user ID")
                        })
                }),
                Br = E("guid.int", function(a, c) {
                    return A(a, "guid.c", function(b) {
                        var d = gi(a, c);
                        b && Ib(a, b, null, d);
                        return d
                    })
                }),
                Ra = function() {
                    function a(c, b, d) {
                        this.Uh = "wv2.c";
                        this.xb = [];
                        this.qa = {};
                        this.b = c;
                        this.J = Le(c, this, d, this.Uh);
                        this.D = b;
                        this.Sa = this.D.uh();
                        this.start = this.J.G(this.start, "st");
                        this.stop = this.J.G(this.stop, "sp")
                    }
                    a.prototype.start = function() {
                        var c = this;
                        this.xb =
                            y(function(b) {
                                var d = b[0],
                                    e = b[1];
                                b = P(e) ? e : e.vd;
                                e = P(e) ? c.b : e.target;
                                b = C(c.J.G(b, d), c);
                                return c.Sa.C(e, [d], b)
                            }, Aa(this.qa))
                    };
                    a.prototype.stop = function() {
                        z(Ea, this.xb)
                    };
                    a.prototype.T = function(c) {
                        return this.D.ga().T(c)
                    };
                    return a
                }(),
                Lk = F("", ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQA", "AAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="]),
                Kk = ["checkbox", "radio"],
                gg = U("location.href"),
                Cr = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.fa = {
                            elements: [],
                            attributes: []
                        };
                        d.index =
                            0;
                        d.Kd = d.J.G(d.Kd, "o");
                        d.dd = d.J.G(d.dd, "io");
                        d.Uc = d.J.G(d.Uc, "ao");
                        d.Xd = d.J.G(d.Xd, "a");
                        d.Vd = d.J.G(d.Vd, "at");
                        d.Yd = d.J.G(d.Yd, "r");
                        d.Wd = d.J.G(d.Wd, "c");
                        d.uc = new b.MutationObserver(d.Kd);
                        return d
                    }
                    za(c, a);
                    c.prototype.start = function() {
                        this.uc.observe(this.b.document.documentElement, {
                            attributes: !0,
                            characterData: !0,
                            childList: !0,
                            subtree: !0,
                            attributeOldValue: !0,
                            characterDataOldValue: !0
                        })
                    };
                    c.prototype.stop = function() {
                        this.uc.disconnect()
                    };
                    c.prototype.Uc = function(b) {
                        var d = b.target;
                        b = b.attributeName;
                        var e =
                            this.fa.elements.indexOf(d); - 1 === e && (e = this.fa.elements.push(d) - 1, this.fa.attributes[e] = {});
                        this.fa.attributes[e] || (this.fa.attributes[e] = {});
                        e = this.fa.attributes[e];
                        var f = d.getAttribute(b);
                        e[b] = td(this.b, d, b, f, this.D.cc()).value
                    };
                    c.prototype.dd = function(b) {
                        function d(k) {
                            var l = sb(e.b)(k, f);
                            return -1 === l ? (f.push(k), k = {
                                kd: {}
                            }, g.push(k), k) : g[l]
                        }
                        var e = this,
                            f = [],
                            g = [];
                        z(function(k) {
                            var l = k.attributeName,
                                m = k.removedNodes,
                                p = k.oldValue,
                                q = k.target,
                                r = k.nextSibling,
                                t = k.previousSibling;
                            switch (k.type) {
                                case "attributes":
                                    e.Uc(k);
                                    var x = d(q);
                                    x.kd[l] || (x.kd[l] = td(e.b, q, l, p, e.D.cc()).value);
                                    break;
                                case "childList":
                                    m && z(function(I) {
                                        x = d(I);
                                        x.Ue || B(x, {
                                            Ue: q,
                                            lh: r ? r : void 0,
                                            mh: t ? t : void 0
                                        })
                                    }, ka(m));
                                    break;
                                case "characterData":
                                    x = d(q), x.Ve || (x.Ve = p)
                            }
                        }, b);
                        var h = this.D.ga();
                        z(function(k, l) {
                            h.fe(k, g[l])
                        }, f)
                    };
                    c.prototype.Kd = function(b) {
                        var d = this;
                        if (gg(this.b)) {
                            var e = this.D.K();
                            this.dd(b);
                            z(function(f) {
                                var g = f.addedNodes,
                                    h = f.removedNodes,
                                    k = f.target;
                                switch (f.type) {
                                    case "childList":
                                        h && h.length && d.Yd(ka(h), e);
                                        g && g.length && d.Xd(ka(g), e);
                                        break;
                                    case "characterData":
                                        d.Wd(k,
                                            e)
                                }
                            }, b);
                            this.Vd(e)
                        } else this.stop()
                    };
                    c.prototype.Vd = function(b) {
                        var d = this;
                        z(function(e, f) {
                            var g = d.bc();
                            d.D.O("mutation", {
                                index: g,
                                attributes: d.fa.attributes[f],
                                target: d.T(e)
                            }, "ac", b)
                        }, this.fa.elements);
                        this.fa.elements = [];
                        this.fa.attributes = []
                    };
                    c.prototype.Xd = function(b, d) {
                        var e = this,
                            f = this.bc();
                        this.D.ga().ic({
                            za: b,
                            Jc: function(g) {
                                g = y(function(h) {
                                    h = B({}, h);
                                    delete h.node;
                                    return h
                                }, g);
                                e.D.O("mutation", {
                                    index: f,
                                    za: g
                                }, "ad", d)
                            }
                        })
                    };
                    c.prototype.Yd = function(b, d) {
                        var e = this,
                            f = this.bc(),
                            g = this.D.ga(),
                            h = y(function(k) {
                                var l =
                                    g.removeNode(k);
                                Og(e.b, k, function(m) {
                                    g.removeNode(m)
                                });
                                return l
                            }, b);
                        this.D.O("mutation", {
                            index: f,
                            za: h
                        }, "re", d)
                    };
                    c.prototype.Wd = function(b, d) {
                        var e = this.bc();
                        this.D.O("mutation", {
                            value: b.textContent,
                            target: this.T(b),
                            index: e
                        }, "tc", d)
                    };
                    c.prototype.bc = function() {
                        var b = this.index;
                        this.index += 1;
                        return b
                    };
                    return c
                }(Ra),
                Dr = function() {
                    function a(c, b) {
                        var d = this;
                        this.Wb = [];
                        this.Xb = {};
                        this.Id = 1;
                        this.Ca = 0;
                        this.$a = {};
                        this.lc = {};
                        this.removeNode = function(f) {
                            var g = d.T(f),
                                h = ya(f);
                            if (h) return h = "NR:" + h.toLowerCase(),
                                d.Xb[h] && d.X.R(h, {
                                    data: {
                                        node: f,
                                        id: g
                                    }
                                }), g
                        };
                        this.Va = function(f) {
                            var g = ya(f);
                            if (g) {
                                var h = f.__ym_indexer;
                                h || (h = d.Id, f.__ym_indexer = h, d.Id += 1, g = "NA:" + g.toLowerCase(), d.Xb[g] && d.X.R(g, {
                                    data: {
                                        node: f,
                                        id: h
                                    }
                                }));
                                return h
                            }
                            return null
                        };
                        this.b = c;
                        var e = Le(c, this, "i");
                        this.X = Cc(c);
                        this.options = b;
                        this.start = e.G(this.start, "st");
                        this.stop = e.G(this.stop, "sp");
                        this.T = e.G(this.T, "i");
                        this.fe = e.G(this.fe, "o");
                        this.ic = e.G(this.ic, "a");
                        this.removeNode = e.G(this.removeNode, "r");
                        this.aa = e.G(this.aa, "s")
                    }
                    a.prototype.fe = function(c,
                        b) {
                        var d = this.Va(c);
                        Ma(d) || (this.lc[d] && this.T(c), this.lc[d] = b)
                    };
                    a.prototype.C = function(c, b, d) {
                        c = "" + b + c;
                        this.Xb[c] = !0;
                        this.X.C(c, d)
                    };
                    a.prototype.ba = function(c, b, d) {
                        c = "" + b + c;
                        delete this.Xb[c];
                        this.X.ba(c, d)
                    };
                    a.prototype.start = function() {
                        this.Ca = X(this.b, u(C(this.aa, this, !1), this.start), 50, "i.s")
                    };
                    a.prototype.stop = function() {
                        this.flush();
                        oa(this.b, this.Ca);
                        this.Wb = []
                    };
                    a.prototype.ic = function(c) {
                        var b = this,
                            d = [],
                            e = 0,
                            f = {
                                Jc: c.Jc,
                                result: [],
                                kc: 0,
                                za: d
                            };
                        this.Wb.push(f);
                        z(function(g) {
                            Og(b.b, g, function(h) {
                                var k =
                                    b.Va(h);
                                Ma(k) || (d.push(h), b.$a[k] && b.T(h), b.$a[k] = {
                                    node: h,
                                    event: f,
                                    Ui: e
                                }, e += 1)
                            })
                        }, c.za)
                    };
                    a.prototype.T = function(c) {
                        if (c === this.b) return 0;
                        var b = this.Va(c),
                            d = this.$a[b],
                            e = this.oh(b),
                            f = e.Ue,
                            g = e.kd,
                            h = e.Ve,
                            k = e.lh,
                            l = e.mh;
                        if (d) {
                            e = d.event;
                            d = d.Ui;
                            var m = this.b.document.documentElement === c;
                            k = k || c.nextSibling;
                            var p = l || c.previousSibling;
                            l = !m && k ? this.Va(k) : null;
                            p = !m && p ? this.Va(p) : null;
                            m = this.b;
                            k = this.options;
                            f = this.Va(f || c.parentNode || c.parentElement) || 0;
                            var q = void 0;
                            void 0 === p && (p = null);
                            void 0 === l && (l = null);
                            void 0 ===
                                g && (g = {});
                            void 0 === q && (q = ya(c));
                            if (R(q)) c = void 0;
                            else {
                                f = {
                                    id: b,
                                    Ud: p !== f ? p : null,
                                    next: l !== f ? l : null,
                                    parent: f,
                                    name: q.toLowerCase(),
                                    node: c
                                };
                                if (Me(c)) {
                                    if (h = Hk(c, h), f.attributes = {}, f.content = h)
                                        if (c = Ec(m, c)) f.content = "" !== h.trim() ? zl(m, h) : h, f.hidden = c
                                } else {
                                    f.attributes = Ik(m, c, k, g, q);
                                    if (h = ud(c) && Ad(c)) f.hidden = h;
                                    c.namespaceURI && ee(c.namespaceURI, "svg") && (f.tf = c.namespaceURI)
                                }
                                c = f
                            }
                            if (R(c)) return;
                            delete this.$a[b];
                            e.result[d] = c;
                            e.kc += 1;
                            e.za.length === e.kc && e.Jc(e.result)
                        }
                        return b
                    };
                    a.prototype.flush = function() {
                        this.aa(!0)
                    };
                    a.prototype.aa = function(c) {
                        var b = this;
                        if (gg(this.b)) {
                            var d = ea(this.$a);
                            d = y(function(e) {
                                return b.$a[e].node
                            }, d);
                            d = Xb(d, this.T);
                            c = c ? di(D) : ci(this.b, 20);
                            d(c);
                            this.Wb = V(function(e) {
                                return e.kc !== e.result.length
                            }, this.Wb)
                        }
                    };
                    a.prototype.oh = function(c) {
                        if (Ma(c)) return {};
                        var b = this.lc[c];
                        return b ? (delete this.lc[c], b) : {}
                    };
                    return a
                }(),
                Er = ["input", "change", "keyup", "paste", "cut"],
                Fr = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.inputs = {};
                        b.fd = !1;
                        b.wc = b.J.G(b.wc, "ii");
                        b.xc = b.J.G(b.xc, "ir");
                        b.Cc =
                            b.J.G(b.Cc, "ri");
                        b.Rc = b.J.G(b.Rc, "ur");
                        b.ud = b.J.G(b.ud, "ce");
                        b.hc = b.J.G(b.hc, "vc");
                        return b
                    }
                    za(c, a);
                    c.prototype.start = function() {
                        var b = this,
                            d = this.D.ga();
                        this.fd = this.Ng();
                        z(function(e) {
                            e = e.toLowerCase();
                            d.C(e, "NA:", C(b.wc, b));
                            d.C(e, "NR:", C(b.xc, b))
                        }, Ue);
                        this.xb = [this.Sa.C(this.b.document, Er, C(this.ud, this)), function() {
                            z(function(e) {
                                e = e.toLowerCase();
                                d.ba(e, "NA:", b.wc);
                                d.ba(e, "NR:", b.xc)
                            }, Ue);
                            z(b.Rc, ea(b.inputs))
                        }]
                    };
                    c.prototype.Rc = function(b) {
                        if (this.fd) {
                            var d = this.inputs[b];
                            d && (b = d.li, d = d.element,
                                b && this.b.Object.defineProperty(d, this.dc(d), b))
                        }
                    };
                    c.prototype.xc = function(b) {
                        b && this.Rc(b.data.id)
                    };
                    c.prototype.wc = function(b) {
                        b && (b = b.data, this.Cc(b.node, b.id))
                    };
                    c.prototype.dc = function(b) {
                        return Yd(b) ? "checked" : "value"
                    };
                    c.prototype.ud = function(b) {
                        if (b = b.target) {
                            var d = this.dc(b);
                            this.hc(b[d], b)
                        }
                    };
                    c.prototype.hc = function(b, d) {
                        var e = this.T(d),
                            f = this.inputs[e];
                        if (!f && (f = this.Cc(f, e), !f)) return;
                        e = f.Og;
                        var g = f.value,
                            h = this.dc(d);
                        b && !H(typeof b, ["string", "boolean", "number"]) || b === g || (g = td(this.b, d, h,
                            b, this.D.cc()).value, e ? this.D.O("event", {
                            target: this.T(d),
                            checked: !!b
                        }, "change") : (e = vd(d), h = Ad(d), this.D.O("event", {
                            value: g,
                            hidden: h && !e,
                            target: this.T(d)
                        }, "change")), f.value = b)
                    };
                    c.prototype.Cc = function(b, d) {
                        var e = this;
                        if (!ud(b) || "__ym_input_override_test" === b.getAttribute("class") || this.inputs[d]) return null;
                        var f = Yd(b),
                            g = this.dc(b),
                            h = {
                                element: b,
                                Og: f,
                                value: b[g]
                            };
                        this.inputs[d] = h;
                        this.fd && ub(this.b, function() {
                            var k = e.b.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), g) || {},
                                l = e.b.Object.getOwnPropertyDescriptor(b,
                                    g) || {},
                                m = B({}, k, l);
                            if (pa("((set)?(\\s?" + g + ")?)?", m.set)) {
                                try {
                                    e.b.Object.defineProperty(b, g, B({}, m, {
                                        configurable: !0,
                                        set: function(p) {
                                            e.hc(p, this);
                                            return m.set.call(this, p)
                                        }
                                    }))
                                } catch (p) {}
                                h.li = m
                            }
                        });
                        return h
                    };
                    c.prototype.Ng = function() {
                        var b = !0,
                            d = ab(this.b)("input");
                        try {
                            d = ab(this.b)("input");
                            d.value = "INPUT_VALUE";
                            d.style.setProperty("display", "none", "important");
                            d.setAttribute("type", "text");
                            d.setAttribute("class", "__ym_input_override_test");
                            var e = this.b.Object.getOwnPropertyDescriptor(Object.getPrototypeOf(d),
                                    "value") || {},
                                f = this.b.Object.getOwnPropertyDescriptor(d, "value") || {},
                                g = B({}, e, f);
                            this.b.Object.defineProperty(d, "value", B({}, g, {
                                configurable: !0,
                                set: function(h) {
                                    return g.set.call(d, h)
                                }
                            }));
                            "INPUT_VALUE" !== d.value && (b = !1);
                            d.value = "INPUT_TEST";
                            "INPUT_TEST" !== d.value && (b = !1)
                        } catch (h) {
                            b = !1
                        }
                        return b
                    };
                    return c
                }(Ra),
                Gr = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.Ja = {
                            width: 0,
                            height: 0,
                            ab: 0,
                            bb: 0,
                            orientation: 0
                        };
                        d.qa = (b = {}, b.resize = function() {
                            var e = this.sd();
                            this.Hh(e) && (this.Ja =
                                e, this.Pf(e))
                        }, b.orientationchange = function() {
                            var e = this.sd();
                            this.Ja.orientation !== e.orientation && (this.Ja = e, this.Fi(e))
                        }, b);
                        return d
                    }
                    za(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.Of()
                    };
                    c.prototype.rf = function(b) {
                        return !b.height || !b.width || !b.bb || !b.ab
                    };
                    c.prototype.Hh = function(b) {
                        return b.height !== this.Ja.height || b.width !== this.Ja.width
                    };
                    c.prototype.sd = function() {
                        var b = this.D.Ua(),
                            d = bd(this.b),
                            e = d[0];
                        d = d[1];
                        b = b.rd();
                        return {
                            width: e,
                            height: d,
                            bb: b ? b.scrollWidth : 0,
                            ab: b ? b.scrollHeight : 0,
                            orientation: this.D.Ua().xh()
                        }
                    };
                    c.prototype.Fi = function(b) {
                        var d;
                        void 0 === d && (d = this.D.K());
                        this.D.O("event", {
                            width: b.width,
                            height: b.height,
                            orientation: b.orientation
                        }, "deviceRotation", d)
                    };
                    c.prototype.Pf = function(b, d) {
                        void 0 === d && (d = this.D.K());
                        this.D.O("event", {
                            width: b.width,
                            height: b.height,
                            bb: b.bb,
                            ab: b.ab
                        }, "resize", d)
                    };
                    c.prototype.Of = function() {
                        var b = this.sd();
                        this.rf(b) ? X(this.b, C(this.Of, this), 300) : (this.rf(this.Ja) && (this.Ja = b), this.Pf(b, 0))
                    };
                    return c
                }(Ra),
                xe = function() {
                    function a(c) {
                        this.index =
                            0;
                        this.gb = {};
                        this.b = c
                    }
                    a.prototype.Qb = function(c, b, d) {
                        void 0 === d && (d = {});
                        var e = ba(this.b),
                            f = this.index;
                        this.index += 1;
                        this.gb[f] = {
                            Ca: 0,
                            Db: !1,
                            jh: c,
                            Kb: [],
                            Ed: e(W)
                        };
                        var g = this;
                        return function() {
                            var h = Ba(arguments),
                                k = d.Ta && !g.gb[f].Db,
                                l = g.gb[f];
                            oa(g.b, l.Ca);
                            l.Kb = h;
                            l.Db = !0;
                            var m = e(W);
                            if (k || m - l.Ed >= b) c.apply(void 0, h), l.Ed = m;
                            l.Ca = X(g.b, function() {
                                k || (c.apply(void 0, h), l.Ed = e(W));
                                l.Db = !1;
                                l.Kb = []
                            }, b, "th")
                        }
                    };
                    a.prototype.flush = function() {
                        var c = this;
                        z(function(b) {
                            var d = c.gb[b],
                                e = d.Ca,
                                f = d.jh,
                                g = d.Kb;
                            d.Db && (c.gb[b].Db = !1, f.apply(void 0, g), oa(c.b, e))
                        }, ea(this.gb))
                    };
                    return a
                }(),
                Hr = function(a) {
                    function c(b, d, e) {
                        var f;
                        d = a.call(this, b, d, e) || this;
                        d.bg = [];
                        d.Ae = {
                            x: 0,
                            y: 0
                        };
                        d.qa = (f = {}, f.scroll = function(g) {
                            if (this.D.Ua().hf()) this.Ac(g);
                            else {
                                var h = g.target,
                                    k = V(function(l) {
                                        return l[0] === h
                                    }, this.bg).pop();
                                k ? k = k[1] : (k = this.na.Qb(C(this.Ac, this), 100, {
                                    Ta: !0
                                }), this.bg.push([h, k]));
                                k(g)
                            }
                        }, f);
                        d.na = new xe(b);
                        d.Ac = d.J.G(d.Ac, "o");
                        return d
                    }
                    za(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.D.O("event", {
                            x: Math.max(this.b.scrollX,
                                0),
                            y: Math.max(this.b.scrollY, 0),
                            page: !0,
                            target: -1
                        }, "scroll", 0)
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.na.flush()
                    };
                    c.prototype.Ac = function(b) {
                        var d = this.D.Ua().rd();
                        b = b.target;
                        var e = this.rb(b);
                        d = Ta(xa(b), [d, this.b, this.b.document]);
                        var f = Math.max(e.left, 0);
                        e = Math.max(e.top, 0);
                        if (d) {
                            if (this.Ae.x === f && this.Ae.y === e) return;
                            this.Ae = {
                                x: f,
                                y: e
                            }
                        }
                        this.D.O("event", {
                            x: f,
                            y: e,
                            page: d,
                            target: d ? -1 : this.T(b)
                        }, "scroll")
                    };
                    c.prototype.rb = function(b) {
                        var d = {
                            left: 0,
                            top: 0
                        };
                        if (!b) return d;
                        if (b.window ===
                            b) return {
                            top: b.scrollY || 0,
                            left: b.scrollX || 0
                        };
                        var e = b.ownerDocument || b,
                            f = b.documentElement,
                            g = e.defaultView || e.parentWindow,
                            h = e.body;
                        return b !== e || (b = this.D.Ua().rd(), b) ? H(b, [f, h]) ? {
                            top: b.scrollTop || g.scrollY,
                            left: b.scrollLeft || g.scrollX
                        } : {
                            top: b.scrollTop || 0,
                            left: b.scrollLeft || 0
                        } : d
                    };
                    return c
                }(Ra),
                Ir = ["mousemove", "mousedown", "mouseup", "click"],
                Jr = function(a) {
                    function c(b, d, e) {
                        var f = a.call(this, b, d, e) || this;
                        f.qa = J(function(g, h) {
                            g[h] = f.ji;
                            return g
                        }, {}, Ir);
                        f.na = new xe(b);
                        f.sc = f.J.G(f.sc, "n");
                        f.Li = f.J.G(f.na.Qb(C(f.sc,
                            f), 100), "t");
                        return f
                    }
                    za(c, a);
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.na.flush()
                    };
                    c.prototype.ji = function(b) {
                        var d = null;
                        try {
                            d = b.type
                        } catch (e) {
                            return
                        }
                        "mousemove" === d ? this.Li(b) : this.sc(b)
                    };
                    c.prototype.sc = function(b) {
                        var d = b.type,
                            e = b.clientX;
                        e = void 0 === e ? null : e;
                        var f = b.clientY;
                        f = void 0 === f ? null : f;
                        b = b.target || this.b.document.elementFromPoint(e, f);
                        this.D.O("event", {
                            x: e || 0,
                            y: f || 0,
                            target: this.T(b)
                        }, d)
                    };
                    return c
                }(Ra),
                Kr = ["focus", "blur"],
                Lr = function(a) {
                    function c() {
                        var b = null !== a && a.apply(this,
                            arguments) || this;
                        b.qa = J(function(d, e) {
                            d[e] = b.kh;
                            return d
                        }, {}, Kr);
                        return b
                    }
                    za(c, a);
                    c.prototype.kh = function(b) {
                        var d = b.target;
                        b = b.type;
                        this.D.O("event", {
                            target: this.T(d === this.b ? this.b.document.documentElement : d)
                        }, b)
                    };
                    return c
                }(Ra),
                Mr = v(function(a) {
                    var c = Da(a.getSelection, "getSelection");
                    return c ? C(c, a) : D
                }),
                Nr = u(Mr, Ea),
                Or = ["mousemove", "touchmove", "mousedown", "touchdown", "select"],
                Pr = /text|search|password|tel|url/,
                Qr = function(a) {
                    function c() {
                        var b = null !== a && a.apply(this, arguments) || this;
                        b.wd = !1;
                        b.qa =
                            J(function(d, e) {
                                d[e] = b.Fh;
                                return d
                            }, {}, Or);
                        return b
                    }
                    za(c, a);
                    c.prototype.Fh = function(b) {
                        var d = this.D,
                            e = b.type,
                            f = b.which;
                        b = b.target;
                        if ("mousemove" !== e || 1 === f)(e = "select" === e ? this.Bh(b) : this.zh()) && e.start !== e.end ? (this.wd = !0, d.O("event", e, "selection")) : this.wd && (this.wd = !1, d.O("event", {
                            start: 0,
                            end: 0
                        }, "selection"))
                    };
                    c.prototype.zh = function() {
                        var b = Nr(this.b);
                        if (b && 0 < b.rangeCount) {
                            b = b.getRangeAt(0) || this.b.document.createRange();
                            var d = this.T(b.startContainer),
                                e = this.T(b.endContainer);
                            if (!R(d) && !R(e)) return {
                                start: b.startOffset,
                                end: b.endOffset,
                                Xf: d,
                                Pe: e
                            }
                        }
                    };
                    c.prototype.Bh = function(b) {
                        if (Pr.test(b.type || "")) {
                            var d = this.T(b);
                            if (!R(d)) return {
                                start: b.selectionStart,
                                end: b.selectionEnd,
                                target: d
                            }
                        }
                    };
                    return c
                }(Ra),
                Rr = {
                    focus: "windowfocus",
                    blur: "windowblur"
                },
                Sr = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.visibility = null;
                        R(b.b.document.hidden) ? R(b.b.document.msHidden) ? R(b.b.document.webkitHidden) || (b.visibility = {
                                hidden: "webkitHidden",
                                event: "webkitvisibilitychange"
                            }) : b.visibility = {
                                hidden: "msHidden",
                                event: "msvisibilitychange"
                            } :
                            b.visibility = {
                                hidden: "hidden",
                                event: "visibilitychange"
                            };
                        b.handleEvent = b.J.G(b.handleEvent, "e");
                        return b
                    }
                    za(c, a);
                    c.prototype.start = function() {
                        this.xb = [this.Sa.C(this.b, this.visibility ? [this.visibility.event] : ["focus", "blur"], C(this.handleEvent, this))]
                    };
                    c.prototype.handleEvent = function(b) {
                        this.D.O("event", {}, Rr[this.visibility ? this.b.document[this.visibility.hidden] ? "blur" : "focus" : b.type])
                    };
                    return c
                }(Ra),
                Tr = ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"],
                Ur = function(a) {
                    function c(b,
                        d, e) {
                        var f, g = a.call(this, b, d, e) || this;
                        g.Oc = {};
                        g.scrolling = !1;
                        g.Mf = 0;
                        g.qa = J(function(h, k) {
                            h[k] = {
                                vd: g.Pi,
                                target: g.b.document
                            };
                            return h
                        }, (f = {}, f.scroll = {
                            vd: function() {
                                var h = this;
                                this.scrolling = !0;
                                oa(this.b, this.Mf);
                                this.Mf = X(this.b, function() {
                                    h.scrolling = !1
                                }, 150)
                            },
                            target: g.b.document
                        }, f), Tr);
                        g.na = new xe(b);
                        g.wb = g.J.G(g.wb, "nh");
                        g.Mi = g.J.G(g.na.Qb(g.wb, g.D.Ua().hf() ? 0 : 50, {
                            Ta: !0
                        }), "th");
                        return g
                    }
                    za(c, a);
                    c.prototype.Pi = function(b) {
                        var d = this,
                            e = "touchcancel" === b.type || "touchend" === b.type;
                        b.changedTouches &&
                            0 < b.changedTouches.length && z(function(f) {
                                var g = d.Eh(f);
                                f.__ym_touch_id = g;
                                e && delete d.Oc[f.identifier]
                            }, ka(b.changedTouches));
                        "touchmove" === b.type ? this.scrolling ? this.wb(b) : this.Mi(b, this.D.K()) : this.wb(b)
                    };
                    c.prototype.Eh = function(b) {
                        this.Oc[b.identifier] || (this.Oc[b.identifier] = wg());
                        return this.Oc[b.identifier]
                    };
                    c.prototype.wb = function(b, d) {
                        void 0 === d && (d = this.D.K());
                        var e = b.type,
                            f = y(function(g) {
                                return {
                                    id: g.__ym_touch_id,
                                    x: Math.round(g.clientX),
                                    y: Math.round(g.clientY),
                                    force: g.force
                                }
                            }, ka(b.changedTouches));
                        0 < f.length && this.D.O("event", {
                            touches: f,
                            target: this.T(b.target)
                        }, e, d)
                    };
                    return c
                }(Ra),
                Vr = function(a) {
                    function c() {
                        var b, d = null !== a && a.apply(this, arguments) || this;
                        d.qa = (b = {}, b.load = {
                            vd: function(e) {
                                e = e.target;
                                "IMG" === ya(e) && e.getAttribute("srcset") && this.D.O("event", {
                                    target: this.T(e),
                                    value: e.currentSrc
                                }, "srcset")
                            },
                            target: d.b.document
                        }, b);
                        return d
                    }
                    za(c, a);
                    return c
                }(Ra),
                Wr = function(a) {
                    function c(b, d, e) {
                        d = a.call(this, b, d, e) || this;
                        d.ng = 1;
                        d.na = new xe(b);
                        d.Mb = d.J.G(d.Mb, "z");
                        return d
                    }
                    za(c, a);
                    c.prototype.start =
                        function() {
                            if (this.cf()) {
                                a.prototype.start.call(this);
                                this.Mb();
                                var b = this.Sa.C(n(this.b, "visualViewport"), ["resize"], this.na.Qb(this.Mb, 10));
                                this.xb.push(b)
                            }
                        };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        this.na.flush()
                    };
                    c.prototype.Mb = function() {
                        var b = this.cf();
                        b && b !== this.ng && (this.ng = b, this.Gi(b))
                    };
                    c.prototype.cf = function() {
                        var b = Bf(this.b);
                        return b ? b[2] : null
                    };
                    c.prototype.Gi = function(b) {
                        var d = Ve(this.b);
                        this.D.O("event", {
                            x: d.x,
                            y: d.y,
                            level: b
                        }, "zoom")
                    };
                    return c
                }(Ra),
                qd, ye = {
                    91: "super",
                    93: "super",
                    224: "super",
                    18: "alt",
                    17: "ctrl",
                    16: "shift",
                    9: "tab",
                    8: "backspace",
                    46: "delete"
                },
                Oj = {
                    "super": 1,
                    vj: 2,
                    alt: 3,
                    shift: 4,
                    Pj: 5,
                    "delete": 6,
                    sj: 6
                },
                Xr = [4, 9, 8, 32, 37, 38, 39, 40, 46],
                Pj = (qd = {}, qd["1"] = {
                    91: "&#8984;",
                    93: "&#8984;",
                    224: "&#8984;",
                    18: "&#8997;",
                    17: "&#8963;",
                    16: "&#8679;",
                    9: "&#8677;",
                    8: "&#9003;",
                    46: "&#9003;"
                }, qd["2"] = {
                    91: "&#xff;",
                    93: "&#xff;",
                    224: "&#xff;",
                    18: "Alt",
                    17: "Ctrl",
                    16: "Shift",
                    9: "Tab",
                    8: "Backspace",
                    46: "Delete"
                }, qd.Yh = {
                    32: "SPACEBAR",
                    37: "&larr;",
                    38: "&uarr;",
                    39: "&rarr;",
                    40: "&darr;",
                    13: "Enter"
                }, qd),
                Yr = /flash/,
                Zr = /ym-disable-keys/,
                $r = /^&#/,
                as = function(a) {
                    function c(b, d, e) {
                        var f;
                        d = a.call(this, b, d, e) || this;
                        d.Wa = {};
                        d.ya = 0;
                        d.sa = [];
                        d.$f = [];
                        d.Vb = 0;
                        d.Hf = 0;
                        d.qa = (f = {}, f.keydown = function(g) {
                            if (this.oc(g) && !this.Ph(g)) {
                                var h = g.keyCode;
                                g.repeat || this.Wa[h] || (this.Wa[g.keyCode] = !0, ye[g.keyCode] && !this.ya ? (this.ya += 1, this.ke(g), this.reset(300)) : this.ya ? (this.Kg(), this.Zd(g), this.jd()) : (this.reset(), this.Zd(g)))
                            }
                        }, f.keyup = function(g) {
                            if (this.oc(g)) {
                                var h = g.keyCode,
                                    k = ye[g.keyCode];
                                this.Wa[g.keyCode] && (this.Wa[h] = !1);
                                k && this.ya && (this.ya = 0, this.Wa = {});
                                1 === this.sa.length && (g = this.sa[0], H(g.keyCode, Xr) && (this.Ic([g], !0), this.reset()));
                                this.sa = V(u(xa(h), cc), this.sa);
                                oa(this.b, this.Vb)
                            }
                        }, f);
                        d.wg = -1 !== (n(b, "navigator.appVersion") || "").indexOf("Mac") ? "1" : "2";
                        d.oc = d.J.G(d.oc, "v");
                        d.jd = d.J.G(d.jd, "ec");
                        d.Ic = d.J.G(d.Ic, "sk");
                        d.qd = d.J.G(d.qd, "gk");
                        d.ke = d.J.G(d.ke, "sc");
                        d.Lb = d.J.G(d.Lb, "cc");
                        d.reset = d.J.G(d.reset, "r");
                        d.Ec = d.J.G(d.Ec, "rs");
                        return d
                    }
                    za(c, a);
                    c.prototype.oc = function(b) {
                        var d = this.b.document.activeElement;
                        b = b.target;
                        return !Ta(Boolean, [d && "OBJECT" === d.nodeName && Yr.test(d.getAttribute("type") || ""), "INPUT" === b.nodeName && "password" === b.getAttribute("type") && Zr.test(b.className)])
                    };
                    c.prototype.jd = function() {
                        this.$f = this.sa.slice(0);
                        oa(this.b, this.Vb);
                        this.Vb = X(this.b, w(this.$f, C(this.Ic, this)), 0, "e.c")
                    };
                    c.prototype.Ic = function(b, d) {
                        void 0 === d && (d = !1);
                        if (1 < b.length || d) {
                            var e = this.qd(b);
                            this.D.O("event", {
                                pc: e
                            }, "keystroke")
                        }
                    };
                    c.prototype.qd = function(b) {
                        var d = this;
                        b = y(function(e) {
                            e = e.keyCode;
                            var f = ye[e],
                                g =
                                d.vh(e);
                            return {
                                id: e,
                                key: g,
                                nf: !!f && $r.test(g),
                                qc: f
                            }
                        }, b);
                        return Ie(function(e, f) {
                            return (Oj[e.qc] || 100) - (Oj[f.qc] || 100)
                        }, b)
                    };
                    c.prototype.vh = function(b) {
                        return Pj[this.wg][b] || Pj.Yh[b] || String.fromCharCode(b)
                    };
                    c.prototype.Zd = function(b) {
                        H(b, this.sa) || this.sa.push(b)
                    };
                    c.prototype.ke = function(b) {
                        this.Zd(b);
                        this.Lb()
                    };
                    c.prototype.Lb = function() {
                        this.ya ? X(this.b, this.Lb, 100) : this.sa = []
                    };
                    c.prototype.Kg = function() {
                        oa(this.b, this.Hf)
                    };
                    c.prototype.reset = function(b) {
                        b ? this.Hf = X(this.b, C(this.Ec, this), b) : this.Ec()
                    };
                    c.prototype.Ec = function() {
                        this.ya = 0;
                        this.sa = [];
                        this.Wa = {};
                        oa(this.b, this.Vb)
                    };
                    c.prototype.Ph = function(b) {
                        return b.target && "INPUT" === b.target.nodeName ? b.shiftKey || 32 === b.keyCode || "shift" === ye[b.keyCode] : !1
                    };
                    return c
                }(Ra),
                Gk = ["sr", "sd", "\u043d"],
                bs = /allow-same-origin/,
                cs = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.Eb = [];
                        b.ld = {};
                        b.Ld = b.J.G(b.Ld, "fi");
                        b.Md = b.J.G(b.Md, "sd");
                        b.Nd = b.J.G(b.Nd, "src");
                        b.uc = new MutationObserver(b.Nd);
                        return b
                    }
                    za(c, a);
                    c.prototype.start = function() {
                        a.prototype.start.call(this);
                        this.D.cc().lb && this.D.ga().C("iframe", "NA:", C(this.Ld, this));
                        this.D.$e().od().C("sdr", C(this.Md, this))
                    };
                    c.prototype.stop = function() {
                        a.prototype.stop.call(this);
                        z(function(b) {
                            b.D.stop()
                        }, this.Eb)
                    };
                    c.prototype.Nd = function(b) {
                        var d = b.pop().target;
                        if (b = $a(function(f) {
                                return f.gf === d
                            }, this.Eb)) {
                            this.Eb = V(function(f) {
                                return f.gf !== d
                            }, this.Eb);
                            var e = b.D.pd();
                            try {
                                b.D.stop()
                            } catch (f) {}
                            this.Pb(d, e)
                        }
                    };
                    c.prototype.Ld = function(b) {
                        if (b) {
                            var d = b.data.node;
                            this.uc.observe(d, {
                                attributes: !0,
                                attributeFilter: ["src"]
                            });
                            this.Pb(d, b.data.id)
                        }
                    };
                    c.prototype.Pb = function(b, d) {
                        var e = this;
                        if (this.Nh(b)) wd(this.b, b).then(function() {
                            var f = e.D.Pb(b.contentWindow, d);
                            e.Eb.push({
                                D: f,
                                gf: b
                            })
                        })["catch"](D)
                    };
                    c.prototype.Md = function(b) {
                        var d = this,
                            e = b.L;
                        b = b.data;
                        this.ld[e] || (this.ld[e] = {
                            data: []
                        });
                        var f = this.ld[e];
                        f.data = f.data.concat(b);
                        this.b.isNaN(f.ed) && z(function(g) {
                            "page" === g.type && (f.ed = g.data.ta - d.D.af())
                        }, f.data);
                        this.b.isNaN(f.ed) || (this.D.aa(y(function(g) {
                            g.K += f.ed;
                            g.K = d.b.Math.max(0, g.K);
                            return g
                        }, f.data)), f.data = [])
                    };
                    c.prototype.Nh =
                        function(b) {
                            var d = b.getAttribute("src"),
                                e = b.getAttribute("sandbox");
                            return e && !e.match(bs) || d && "about:blank" !== d && (d = jc(this.b, d).host) && Q(this.b).host !== d ? !1 : n(b, "contentWindow.location.href")
                        };
                    return c
                }(Ra),
                ds = function(a) {
                    function c(b, d, e) {
                        b = a.call(this, b, d, e) || this;
                        b.ae = b.J.G(b.ae, "ps");
                        return b
                    }
                    za(c, a);
                    c.prototype.start = function() {
                        this.D.ga().ic({
                            za: [this.b.document.documentElement],
                            Jc: this.ae
                        })
                    };
                    c.prototype.ae = function(b) {
                        var d = this.D.yh(),
                            e = d.ph(),
                            f = Q(this.b),
                            g = f.host,
                            h = f.protocol;
                        f = f.pathname;
                        var k = bd(this.b),
                            l = k[0];
                        k = k[1];
                        this.D.O("page", {
                            content: y(function(m) {
                                m = B({}, m);
                                delete m.node;
                                return m
                            }, b),
                            Ie: e || "",
                            df: !!e,
                            viewport: {
                                width: l,
                                height: k
                            },
                            title: this.b.document.title,
                            doctype: d.rh() || "",
                            Fe: this.b.location.href,
                            gg: this.b.navigator.userAgent,
                            referrer: this.b.document.referrer,
                            screen: {
                                width: this.b.screen.width,
                                height: this.b.screen.height
                            },
                            location: {
                                host: g,
                                protocol: h,
                                path: f
                            },
                            ta: this.D.af(),
                            Mc: d.Ch()
                        }, "page", 0)
                    };
                    return c
                }(Ra),
                es = ["addRule", "removeRule", "insertRule", "deleteRule"],
                hg = [
                    [function(a) {
                        function c(b,
                            d, e) {
                            b = a.call(this, b, d, e) || this;
                            b.La = {};
                            b.Fb = {};
                            b.Ge = 0;
                            b.yc = b.J.G(b.yc, "a");
                            b.fb = b.J.G(b.fb, "sr");
                            b.zc = b.J.G(b.zc, "r");
                            b.aa = b.J.G(b.aa, "d");
                            return b
                        }
                        za(c, a);
                        c.prototype.start = function() {
                            var b = this.D.ga();
                            b.C("style", "NA:", this.yc);
                            b.C("style", "NR:", this.zc);
                            this.aa()
                        };
                        c.prototype.stop = function() {
                            var b = this;
                            a.prototype.stop.call(this);
                            var d = this.D.ga();
                            d.ba("style", "NA:", this.yc);
                            d.ba("style", "NR:", this.zc);
                            this.aa();
                            oa(this.b, this.Ge);
                            z(function(e) {
                                b.La[e].sheet && b.Kf(b.La[e].sheet)
                            }, ea(this.La));
                            this.La = {}
                        };
                        c.prototype.aa = function() {
                            var b = this;
                            z(function(d) {
                                var e = d[0];
                                d = d[1];
                                if (d.length) {
                                    for (var f = [], g = d[0].K, h = [], k = 0; k < d.length; k += 1) {
                                        var l = d[k],
                                            m = l.K;
                                        delete l.K;
                                        m <= g + 50 ? f.push(l) : (h.push(f), g = m, f = [l])
                                    }
                                    f.length && h.push(f);
                                    h.length && z(function(p) {
                                        b.D.O("event", {
                                            target: parseInt(e, 10),
                                            va: p
                                        }, "stylechange", g)
                                    }, h);
                                    delete b.Fb[e]
                                }
                            }, Aa(this.Fb));
                            this.Ge = X(this.b, this.aa, 100)
                        };
                        c.prototype.fb = function(b, d, e, f, g) {
                            void 0 === f && (f = "");
                            void 0 === g && (g = -1);
                            this.Fb[b] || (this.Fb[b] = []);
                            this.Fb[b].push({
                                Od: d,
                                style: f,
                                index: g,
                                K: e
                            })
                        };
                        c.prototype.mi = function(b, d) {
                            var e = this,
                                f = b.addRule,
                                g = b.removeRule,
                                h = b.insertRule,
                                k = b.deleteRule;
                            P(f) && (b.addRule = function(l, m, p) {
                                e.fb(d, "a", e.D.K(), l + "{" + m + "}", p);
                                return f.call(b, l, m, p)
                            });
                            P(g) && (b.removeRule = function(l) {
                                e.fb(d, "r", e.D.K(), "", l);
                                return g.call(b, l)
                            });
                            P(h) && (b.insertRule = function(l, m) {
                                e.fb(d, "a", e.D.K(), l, m);
                                return h.call(b, l, m)
                            });
                            P(k) && (b.deleteRule = function(l) {
                                e.fb(d, "r", e.D.K(), "", l);
                                return k.call(b, l)
                            })
                        };
                        c.prototype.Kf = function(b) {
                            var d = this;
                            z(function(e) {
                                var f =
                                    d.b.CSSStyleSheet.prototype[e];
                                P(f) && (b[e] = C(f, b))
                            }, es)
                        };
                        c.prototype.dh = function(b) {
                            try {
                                return b.cssRules || b.rules
                            } catch (d) {
                                return null
                            }
                        };
                        c.prototype.yc = function(b) {
                            var d = b.data;
                            b = d.id;
                            d = d.node;
                            if (d.sheet && !d.getAttribute("src") && !d.innerText) {
                                var e = d.sheet,
                                    f = this.dh(e);
                                if (f && f.length) {
                                    for (var g = [], h = 0; h < f.length; h += 1) g.push({
                                        style: f[h].cssText,
                                        index: h,
                                        Od: "a"
                                    });
                                    this.D.O("event", {
                                        va: g,
                                        target: b
                                    }, "stylechange")
                                }
                                this.mi(e, b);
                                this.La[b] = d
                            }
                        };
                        c.prototype.zc = function(b) {
                            b = b.data.id;
                            var d = this.La[b];
                            d && (delete this.La[b],
                                d.sheet && this.Kf(d.sheet))
                        };
                        return c
                    }(Ra), "ss"],
                    [Fr, "in"],
                    [Cr, "mu"],
                    [Gr, "r"],
                    [Hr, "sc"],
                    [Jr, "mo"],
                    [Lr, "f"],
                    [Qr, "se"],
                    [Sr, "wf"],
                    [Ur, "t"],
                    [Vr, "src"],
                    [Wr, "z"],
                    [as, "ks"]
                ];
            hg.push([cs, "if"]);
            hg.push([ds, "pa"]);
            var fs = v(function(a) {
                    var c = a.document;
                    return {
                        rd: function() {
                            if (c.scrollingElement) return c.scrollingElement;
                            var b = 0 === c.compatMode.indexOf("CSS1") ? c.documentElement : c.body;
                            return n(c, "documentElement.scrollHeight") >= n(c, "body.scrollHeight") ? b : null
                        },
                        xh: function() {
                            var b = a.screen;
                            if (!b) return 0;
                            var d =
                                $a(w(b, n), ["orientation", "mozOrientation", "msOrientation"]);
                            return n(b, d + ".angle") || 0
                        },
                        Fj: w(a, tb),
                        hf: w(a, cd),
                        Ej: w(a, $d)
                    }
                }),
                gs = function() {
                    function a(c, b) {
                        var d = this;
                        this.tb = 0;
                        this.Sb = [];
                        this.sb = null;
                        this.ha = this.Hb = this.Yf = !1;
                        this.ta = 0;
                        this.yh = function() {
                            return d.page
                        };
                        this.pd = function() {
                            return d.tb
                        };
                        this.af = function() {
                            return d.ta
                        };
                        this.uh = function() {
                            return d.Sa
                        };
                        this.$e = function() {
                            return d.sb
                        };
                        this.ga = function() {
                            return d.xd
                        };
                        this.K = function() {
                            return d.oe ? d.b.Math.max(d.oe(W) - d.ta, 0) : 0
                        };
                        this.cc = function() {
                            return d.options
                        };
                        this.Ua = function() {
                            return d.Gg
                        };
                        this.O = function(f, g, h, k) {
                            void 0 === k && (k = d.K());
                            f = d.th(f, g, h, k);
                            d.aa(f)
                        };
                        this.th = function(f, g, h, k) {
                            void 0 === k && (k = d.K());
                            return {
                                type: f,
                                data: g,
                                K: k,
                                L: d.tb,
                                event: h
                            }
                        };
                        this.aa = function(f) {
                            f = ca(f) ? f : [f];
                            d.Yf && !d.Hb ? d.ha ? (f = y(function(g) {
                                return g.L ? g : B(g, {
                                    L: d.tb
                                })
                            }, f), d.$e().Qf(f)) : (f = y(Ck, f), d.ee(f)) : d.Sb = d.Sb.concat(f)
                        };
                        this.b = c;
                        var e = Le(c, this, "R");
                        this.le = e.G(this.le, "s");
                        this.aa = e.G(this.aa, "sd");
                        e = S(c);
                        e.l("wv2e") && Cf();
                        e.o("wv2e", !0);
                        this.options = b;
                        this.Sa = na(c);
                        this.xd =
                            new Dr(this.b, b);
                        this.Gg = fs(c);
                        this.Je = y(function(f) {
                            return new f[0](c, d, f[1])
                        }, hg);
                        this.Mh();
                        this.page = Ek(this.b);
                        this.le()
                    }
                    a.prototype.start = function(c) {
                        this.Yf = !0;
                        this.ee = c;
                        this.Nf()
                    };
                    a.prototype.stop = function() {
                        gg(this.b) && (z(function(c) {
                            return c.stop()
                        }, this.Je), this.xd.stop(), this.sb && this.sb.stop(), this.ha || this.O("event", {}, "eof"))
                    };
                    a.prototype.Pb = function(c, b) {
                        var d = new a(c, B({}, this.options, {
                            L: b
                        }));
                        d.start(D);
                        return d
                    };
                    a.prototype.Mh = function() {
                        var c = this;
                        this.ha = !!this.options.L;
                        this.tb =
                            this.options.L || 0;
                        this.Hb = !this.ha;
                        var b = this.options.fg || [];
                        b.push(Q(this.b).host);
                        this.sb = Fk(this.b, this, b);
                        b = this.sb.od();
                        tb(this.b) ? this.Hb && b.C("i", function(d) {
                            c.ha = d.ha;
                            c.Hb = !1;
                            d.L && (c.tb = d.L);
                            c.Nf()
                        }) : this.Hb = this.ha = !1
                    };
                    a.prototype.Nf = function() {
                        var c = this.Sb.splice(0, this.Sb.length);
                        this.aa(c)
                    };
                    a.prototype.le = function() {
                        this.oe = hf(this.b);
                        this.ta = this.oe(W);
                        z(function(c) {
                            c.start()
                        }, this.Je);
                        this.xd.start()
                    };
                    return a
                }(),
                Y, hs = (Y = {}, Y.mousemove = 0, Y.mouseup = 1, Y.mousedown = 2, Y.click = 3, Y.scroll =
                    4, Y.windowblur = 5, Y.windowfocus = 6, Y.focus = 7, Y.blur = 8, Y.eof = 9, Y.selection = 10, Y.change = 11, Y.input = 12, Y.touchmove = 13, Y.touchstart = 14, Y.touchend = 15, Y.touchcancel = 16, Y.touchforcechange = 17, Y.canvasMethod = 18, Y.canvasProperty = 19, Y.zoom = 20, Y.resize = 21, Y.mediaMethod = 22, Y.mediaProperty = 23, Y.keystroke = 24, Y.deviceRotation = 25, Y.fatalError = 26, Y.hashchange = 27, Y.stylechange = 28, Y),
                ig = Ca(function(a, c) {
                    var b;
                    return b = {}, b[Oa(a)] = c, b
                }),
                is = function() {
                    function a(c) {
                        var b;
                        this.isSync = !1;
                        this.Ra = [];
                        this.Re = [];
                        this.b = c;
                        this.vb =
                            (b = {}, b.event = C(this.ah, this), b.page = ig({
                                page: 1
                            }), b.mutation = ig({
                                Zh: 1
                            }), b.activity = ig({
                                Ag: 1
                            }), b);
                        this.Re = [
                            [
                                ["scroll"], {
                                    Ci: 1
                                }
                            ],
                            [
                                ["selection"], {
                                    Di: 1
                                }
                            ],
                            [
                                ["change", "input"], {
                                    Mg: 1
                                }
                            ],
                            [
                                ["keystroke"], {
                                    Th: 1
                                }, {
                                    pc: 1
                                }
                            ],
                            [
                                ["zoom"], {
                                    gj: 1
                                }
                            ],
                            [
                                ["resize"], {
                                    xi: 1
                                }
                            ],
                            [
                                ["windowfocus", "windowblur", "focus", "blur", "eof"], {
                                    dj: 1
                                }
                            ],
                            [
                                ["mousemove", "mouseup", "mousedown", "click"], {
                                    Xh: 1
                                }
                            ],
                            [
                                ["deviceRotation"], {
                                    Xg: 1
                                }
                            ],
                            [
                                ["fatalError"], {
                                    fh: 1
                                }
                            ],
                            [
                                ["touchmove", "touchstart", "touchend", "touchcancel", "touchforcechange"], {
                                    Oi: 1
                                }, {
                                    touches: 1
                                }, {
                                    touches: 1
                                }
                            ],
                            [
                                ["hashchange"], {
                                    Ih: 1
                                }
                            ],
                            [
                                ["stylechange"], {
                                    Ii: 1
                                }, {
                                    va: 1
                                }, {
                                    va: 1
                                }
                            ]
                        ]
                    }
                    a.prototype.ah = function(c) {
                        var b, d, e = c.type,
                            f = $a(u(U("0"), w(e, H)), this.Re);
                        f || Db(Zc("vem." + e));
                        "eof" === e && (this.isSync = !0, z(la(Xn), this.Ra));
                        var g = f[1],
                            h = f[2];
                        f = f[3];
                        var k = c.V;
                        return {
                            event: (b = {
                                type: hs[e],
                                target: c.target,
                                L: c.L
                            }, b[Oa(g)] = h ? (d = {}, d[Oa(h)] = f ? k[Oa(f)] : k, d) : k, b)
                        }
                    };
                    a.prototype.Aa = function(c, b) {
                        var d = this;
                        void 0 === b && (b = !1);
                        var e = Xb(c, function(h) {
                                var k = !R(h.partNum);
                                return {
                                    data: k ? void 0 : d.vb[h.type](h.data),
                                    Pg: k ? h.data : void 0,
                                    page: h.partNum,
                                    end: h.end,
                                    K: h.K
                                }
                            }),
                            f = this.isSync || b ? Infinity : 10;
                        e = Zb(this.b, e, f);
                        var g = [e];
                        this.Ra.push(e);
                        return e(ne(function(h) {
                            h = Dd(d.b, qh, {
                                buffer: h
                            });
                            h = Zb(d.b, h, f, 100, Pd);
                            g.push(h);
                            d.Ra.push(h);
                            return h
                        }))(ne(function(h) {
                            h = Ze(d.b, h.slice(-4));
                            h = Zb(d.b, h, f, 100, Pd);
                            g.push(h);
                            d.Ra.push(h);
                            return h
                        }))(Sf(function(h) {
                            h = h[h.length - 1];
                            z(function(k) {
                                k = je(d.b)(k, d.Ra);
                                d.Ra.splice(k, 1)
                            }, g);
                            return h
                        }))
                    };
                    a.prototype.Ba = function(c) {
                        return Dd(this.b, bf, this.vb[c.type](c.data))(Qd(D))
                    };
                    a.prototype.Ga = function(c) {
                        return c[0]
                    };
                    a.prototype.Lc = function(c, b) {
                        for (var d = Ze(this.b, c)(Qd(D)), e = Math.ceil(d.length / b), f = [], g = 0; g < b; g += 1) f.push(d.slice(g * e, e * (g + 1)));
                        return f
                    };
                    a.prototype.isEnabled = function() {
                        return ph(this.b)
                    };
                    return a
                }(),
                js = E("w2", function(a, c) {
                    var b = S(a),
                        d = T(c);
                    if (c.Oa && !Uc(a) && a.MutationObserver && pa("Element", a.Element)) {
                        pa("MutationObserver", a.MutationObserver) || Gd(a).warn("MutationObserver is overriden, webvisor is not guaranteed to work in this environment");
                        var e = la(function(g, h) {
                                Ha(a, c, h)["catch"](g)
                            }),
                            f = bl(a)(ne(M([a,
                                c
                            ], zk)))(Sf(function(g) {
                                return new gs(a, g)
                            }));
                        Zn([f, e])(Hb(A(a, "wv2.R.c"), function(g) {
                            function h() {
                                l || (l = !0, k && k.stop())
                            }
                            var k = g[0];
                            g = g[1];
                            var l = !1,
                                m = b.l("wv2Counter");
                            if (!Xg(a, g) || m) h();
                            else if (na(a).C(a, ["beforeunload", "unload"], h), b.o("wv2Counter", d), b.o("stopRecorder", h), g = [new qe(a)], g.unshift(new is(a)), g = $a(function(t) {
                                    return t.isEnabled()
                                }, g)) {
                                m = Bk(a, c, !(g instanceof qe), function() {
                                    return {}
                                });
                                var p = Yf.nd(d, "m", w("m", m), g, a),
                                    q = Yf.nd(d, "e", w("e", m), g, a);
                                g = Ak();
                                m = g.hi;
                                q.C("ag", g.Cg);
                                q.C("p",
                                    m);
                                var r = kb(function(t) {
                                    "eof" === n(t, "data.type") ? (q.push(t), p.push(t), q.flush(), p.flush()) : ("event" === t.type ? q : p).push(t)
                                });
                                X(a, h, 864E5);
                                ub(a, function() {
                                    k.start(r)
                                })
                            }
                        }))
                    }
                }),
                ks = Ca(function(a, c) {
                    0 === parseFloat(n(c, "settings.c_recp")) && (a.Gd.o("ymoo" + a.cd, a.cg(hb)), a.bd && a.bd.destruct && a.bd.destruct())
                }),
                ls = E("wsa", function(a, c) {
                    var b = {
                            cd: T(c),
                            bd: La(a, c),
                            cg: ba(a),
                            Gd: Ja(a)
                        },
                        d = b.cg(hb);
                    if (b.Gd.zd) return !1;
                    var e = b.Gd.l("ymoo" + b.cd);
                    if (e && 30 > d - e) return !0;
                    Ha(a, c, ks(b))["catch"](A(a, "d.f"));
                    return !1
                }),
                ms =
                u(function(a) {
                    a = n(a, "navigator.plugins") || [];
                    return mc(a) ? u(ka, oc(Boolean), tp(function(c, b) {
                        return c.name > b.name ? 1 : 2
                    }), kb(Ol))(a) : ""
                }, Oc(",")),
                ns = function(a) {
                    return function(c) {
                        var b = ab(c);
                        if (!b) return "";
                        b = b("canvas");
                        var d = [],
                            e = a(),
                            f = e.eh;
                        e = e.Wg;
                        try {
                            var g = da("getContext", b);
                            d = y(u(O, g), e)
                        } catch (h) {
                            return ""
                        }
                        return (g = $a(O, d)) ? f(c, {
                            canvas: b,
                            Lg: g
                        }) : ""
                    }
                }(function() {
                    return {
                        Wg: Qq,
                        eh: sk
                    }
                }),
                nk = ["name", "lang", "localService", "voiceURI", "default"],
                ik = v(function(a, c) {
                    return Ha(a, c, U("settings.form_goals"))
                }, qb),
                os = w(!0, rg),
                ps = E("s.f.i", function(a, c) {
                    var b = [];
                    na(a).C(a, ["click"], A(a, "s.f.c", M([a, c, b], hk)));
                    na(a).C(a, ["submit"], A(a, "s.f.e", u(U("target"), M([a, c, b], os))));
                    tg(a, c, "Form goal. Counter " + c.id + ". Init.")
                }),
                qs = tc("isp.stat", function(a, c, b) {
                    var d, e = T(c);
                    e = nf(c)[e].Df;
                    return ma(a, "pi", c)({
                        H: sa((d = {}, d[e] = 1, d))
                    }, [b])
                }),
                rs = tc("isp", function(a, c) {
                    Ha(a, c, function(b) {
                        var d = $a(function(h) {
                            return n(b, "settings." + h)
                        }, ["rt", "mf"]);
                        if (d && ke(a)) {
                            var e = lh(b) && !df(a),
                                f = T(c),
                                g = nf(c);
                            g[f] = {
                                Df: d,
                                status: e ? 3 : 4
                            };
                            if (!e) return d =
                                gk(a, c, d), qs(a, c, d).then(function() {
                                    g[f].status = 1
                                })["catch"](function() {
                                    g[f].status = 2
                                })
                        }
                    })["catch"](A(a, "l.isp"))
                }),
                Qj = /[^\d]/g,
                ss = /[^\d.,]/g,
                ts = /[.,]$/,
                dk = E("ep.pp", function(a, c) {
                    if (!c) return 0;
                    a: {
                        var b = c.replace(ss, "").replace(ts, "");
                        var d = "0" === b[b.length - 1];
                        for (var e = b.length; 0 < e && !(3 < b.length - e + 1 && d); --e) {
                            var f = b[e - 1];
                            if (H(f, [",", "."])) {
                                d = f;
                                break a
                            }
                        }
                        d = ""
                    }
                    b = d ? c.split(d) : [c];
                    d = d ? b[1] : "00";
                    b = parseFloat(b[0].replace(Qj, "") + "." + d.replace(Qj, ""));
                    d = Math.pow(10, 8) - .01;
                    a.isNaN(b) ? b = 0 : (b = Math.min(b, d),
                        b = Math.max(b, 0));
                    return b
                }),
                us = [
                    [
                        ["EUR", "\u20ac"], "978"
                    ],
                    [
                        ["USD", "\u0423\\.\u0415\\.", "\\$"], "840"
                    ],
                    [
                        ["UAH", "\u0413\u0420\u041d", "\u20b4"], "980"
                    ],
                    ["\u0422\u0413 KZT \u20b8 \u0422\u04a2\u0413 TENGE \u0422\u0415\u041d\u0413\u0415".split(" "), "398"],
                    [
                        ["GBP", "\u00a3", "UKL"], "826"
                    ],
                    ["RUR RUB \u0420 \u0420\u0423\u0411 \u20bd P \u0420UB P\u0423\u0411 P\u0423B PY\u0411 \u0420Y\u0411 \u0420\u0423B P\u0423\u0411".split(" "), "643"]
                ],
                vs = v(function(a) {
                    return new RegExp(a.join("|"), "i")
                }),
                ws = E("ep.cp", function(a) {
                    if (!a) return "643";
                    var c = a.replace(/\s/g, "");
                    return (a = $a(function(b) {
                        return vs(b[0]).test(c)
                    }, us)) ? a[1] : "643"
                }),
                ck = E("ep.en", function(a, c, b) {
                    a = ng(a);
                    c = "" + 100 * c + b + a;
                    b = 16 - c.length;
                    if (0 > b) return "";
                    c = og("0", b) + c;
                    b = c.slice(0, 8);
                    c = c.slice(-8);
                    b = (+b ^ 92844).toString(35);
                    c = (+c ^ 92844).toString(35);
                    return "" + b + "z" + c
                }),
                Rj = u(mg, ws),
                Sj = E("ep.ctp", function(a, c, b, d) {
                    var e = Rj(a, b),
                        f = lg(a, d);
                    kg(a, c, e, f);
                    pa("MutationObserver", a.MutationObserver) && (new MutationObserver(function() {
                        var g = Rj(a, b),
                            h = lg(a, d);
                        if (e !== g || f !== h) e = g, f = h, kg(a, c, e,
                            f)
                    })).observe(a.document.body, {
                        attributes: !0,
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }),
                xs = E("ep.chp", function(a, c, b, d, e) {
                    b && Ae(a, c);
                    return d || e ? na(a).C(a.document, ["click"], A(a, "ep.chp.cl", M([a, c, d, e], bk))) : D
                }),
                Zj = E("ep.dec", function(a, c) {
                    if (!c || Uc(a)) return [];
                    var b = jg(a, c, " ").split(" "),
                        d = b[1],
                        e = b[2],
                        f = b.slice(3);
                    b = parseInt(b[0], 2);
                    if (1 === b) b = "AT5T6ku06kEsXK3iyBRgo6lk8rCtX4Kjf0qpRe74vtAplOkkpSi8E9FDTBJlIV6szGuWawyILrLlztwl4KEqs1pNFvNdtIrYtROBN1gSGS1adp+myrzmZKoqErtCv20WyWiRlEqZQUzvV3sRa1nScmlxptwLLY7o";
                    else if (2 === b) b = "Cy2FcreLJLpYXW3BXFJqldVsGMwDcBw2BGnHL5uj1TKstzse3piMo3Osz+EqDotgqs1TIoZvKtMKDaSRFztgUS8qkqZcaETgKWM54tCpTXjV5vW5OrjBpC0jF4mspUBQGd95fNSfv+vz+g+Hze33Hg8by+Yen1PP6zsdl7PQCwX9mf+f7FMb9x/Pw+v2Pp8Xy74eTwuBwTt913u4On1XW6hxOO5nIzFam00tC218S0kaeugpqST+XliLOlMoTpRQkuewUxoy4CT3efWtdFjSAAm+1BkjIhyeU4vGOf13a6U8wzNY4bGo6DIUemE7N3SBojDr7ezXahpWF022y8mma1NuTnZbq8XZZlPStejfG/CsbPhV6/bSnA==";
                    else return [];
                    b = ak(a, b);
                    f = f.join("");
                    e = parseInt(d + e, 2);
                    var g = "";
                    d = "";
                    for (var h = 0; d.length < e && f[h];) g += f[h],
                        b[g] && (d += String.fromCharCode(parseInt(b[g], 2)), g = ""), h += 1;
                    b = "";
                    for (e = 0; e < d.length;) f = d.charCodeAt(e), 128 > f ? (b += String.fromCharCode(f), e++) : 191 < f && 224 > f ? (g = d.charCodeAt(e + 1), b += String.fromCharCode((f & 31) << 6 | g & 63), e += 2) : (g = d.charCodeAt(e + 1), b += String.fromCharCode((f & 15) << 12 | (g & 63) << 6 | d.charCodeAt(e + 2) & 63), e += 3);
                    d = pb(a, b);
                    return ca(d) ? d : []
                }),
                ys = E("ep.i", function(a, c) {
                    return pa("querySelectorAll", a.document.querySelectorAll) ? Yj(a, c).then(function(b) {
                        var d = b.Yg,
                            e = d[0],
                            f = d[1],
                            g = d[2],
                            h = d[3],
                            k = d[4],
                            l = d[5],
                            m = d[6],
                            p = d[7],
                            q = d[8],
                            r = d[9];
                        if (!b.isEnabled) return L.resolve(D);
                        var t = sd(a, e),
                            x = sd(a, h),
                            I = sd(a, m),
                            aa = sd(a, q),
                            ua = "" + e + f + g === "" + h + k + l;
                        return wd(a).then(function() {
                            t && Sj(a, c, f, g);
                            x && !ua && Sj(a, c, k, l);
                            return xs(a, c, I || aa, p, r)
                        })
                    }) : L.resolve(D)
                }),
                zs = /[\*\.\?\(\)]/g,
                As = v(function(a, c, b) {
                    try {
                        var d = b.replace("\\s", " ").replace(zs, "");
                        Gd(a).warn('Function "' + d + '" has been overriden, this may cause issues with Metrika counter')
                    } catch (e) {}
                }, qb),
                Bs = E("r.nn", function(a) {
                    Ye(a).isEnabled && Td(a, Gf, function(c) {
                        c.C(function(b) {
                            As(a,
                                b[1], b[0]);
                            Gf.splice(100)
                        })
                    })
                });
            "function" == typeof Promise && Promise.resolve();
            var Xj = /(.*[\\?&])(ysclid=[^&]+&?)(.*)/,
                Cs = E("yid.e", function(a) {
                    var c = Q(a),
                        b = c.href;
                    if (ee(c.search, "ysclid")) {
                        c = Wj(b);
                        var d;
                        (null === (d = null === a || void 0 === a ? void 0 : a.history) || void 0 === d ? 0 : d.replaceState) && pa("replaceState", a.history.replaceState) && a.history.replaceState(void 0, "", c)
                    }
                }),
                Pb = S(window);
            Pb.Na("hitParam", {});
            Pb.Na("lastReferrer", window.location.href);
            Pb.Na("getCounters", Dq(window));
            Jh.push(dr);
            var Tj = function() {
                return function(a,
                    c, b, d) {
                    var e = this;
                    return A(window, "c.i", function() {
                        function f(I) {
                            return ie(h, k, I)(h, k)
                        }

                        function g(I) {
                            return rp(h, k, r, I)
                        }(!window || isNaN(a) && !a) && Cf();
                        var h = window,
                            k = Co(a, kj, c, b, d);
                        k.id || vb(h, "Invalid Metrika id: " + k.id);
                        var l = T(k),
                            m = Pb.l("counters", {}),
                            p = [],
                            q = [],
                            r = [ie, qp];
                        if (m[l]) return vb(h, "Duplicate counter " + l + " initialization"), m[l];
                        var t = !1,
                            x = Pb.l("hitParam", {});
                        x[l] && (t = !("1" !== k.Z || m[l]));
                        x[l] = 1;
                        e._webvisor = k.Oa || !1;
                        m[l] = e;
                        Pb.o("counters", m);
                        Pb.Na("counter", e);
                        x = Eq(window, k);
                        p.push(x);
                        Fe(window);
                        ls(window, k) && delete m[l];
                        f(yr);
                        wr(h, [ns, ms, wk, Vl, ok, Ml, Pq, Rl, lk, jk, qk]);
                        q.push(w(Yp, f));
                        f(wq);
                        q.push(w(Nk, f));
                        f(rr);
                        f(sr);
                        e.hit = g(xq(h, k))();
                        e.params = g(er(h, k))();
                        l = f(Fq);
                        p.push(n(l, Oa({
                            unsubscribe: 1
                        })));
                        e.trackHash = ie(h, k, n(l, Oa({
                            Si: 1
                        })));
                        e.reachGoal = g(Ce(h, k))();
                        e.experiments = g(fr(h, k))();
                        f(ur);
                        q.push(w(Bq, f));
                        t || q.push(w(Yq, f));
                        t = f(Iq);
                        p.push(n(t, Oa({
                            gd: 1
                        })));
                        e.notBounce = g(n(t, Oa({
                            ci: 1
                        })))();
                        e.accurateTrackBounce = g(n(t, Oa({
                            Jb: 1
                        })))();
                        f(gr);
                        t = f(Lq);
                        p.push(n(t, Oa({
                            gd: 1
                        })));
                        e.extLink = g(n(t, Oa({
                            bh: 1
                        })))();
                        e.addFileExtension = g(n(t, Oa({
                            Bg: 1
                        })))();
                        e.file = g(n(t, Oa({
                            file: 1
                        })))();
                        e.trackLinks = g(n(t, Oa({
                            Pc: 1
                        })))();
                        p.push(jr(h, k));
                        p.push(kr(h));
                        e.ecommerceAdd = g(lr(h, k))();
                        e.ecommerceRemove = g(mr(h, k))();
                        e.ecommerceDetail = g(nr(h, k))();
                        e.ecommercePurchase = g(or(h, k))();
                        t = f(tr);
                        e.userParams = g(t || D)();
                        e.destruct = g(vr(h, k, p))(!0, !1);
                        f(zr);
                        f(Oq);
                        t = f(Ar);
                        e.setUserID = g(t || D)();
                        e.getClientID = f(Br) || D;
                        p.push(f(Rq));
                        e.clickmap = g($q(h, k))();
                        (t = f(ys)) && t.then(da("push", p));
                        f(Zq);
                        e.enableAll = g(ar(h, k))();
                        f(ps);
                        f(rs);
                        f(br);
                        f(cr);
                        f(Cs);
                        ub(h, M([h, q, Ea, 1, 10, "a.i"], vg));
                        f(hl);
                        f(js);
                        Bs(h)
                    })()
                }
            }();
            (function(a) {
                var c = S(a);
                c.l("i") || (c.o("i", !0), na(a).C(a, ["message"], w(a, Tk)))
            })(window);
            if (window.Ya && Tj) {
                var Uj = qa.Nb;
                window.Ya[Uj] = Tj;
                Jq(window);
                var Vj = window.Ya[Uj];
                Vj.informer = Kl(window);
                Vj.counters = Pb.l("getCounters")
            }(function(a) {
                var c = n(a, "ym");
                if (c) {
                    var b = n(c, "a");
                    b || (c.a = [], b = c.a);
                    var d = Tg(a);
                    Td(a, b, function(e) {
                        e.C(d)
                    }, !0)
                }
            })(window);
            rd.hj = 1;
            rd.ij = 10;
            return rd
        })({})
    } catch (rd) {};
}).call(this)