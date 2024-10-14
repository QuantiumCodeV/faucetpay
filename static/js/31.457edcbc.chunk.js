(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [31, 4, 18, 187],
  {
    101: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      }),
        n.d(t, "b", function () {
          return d;
        });
      var i = n(17),
        r = n(1),
        a = n(4),
        o = n(3),
        s = n(67),
        c = n(32),
        l = n(29),
        u = (function () {
          var e = Object(a.a)(
            Object(r.a)().mark(function e(t) {
              var n;
              return Object(r.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.next = 2),
                        s.c.get("/".concat(t, "/get-configuration"))
                      );
                    case 2:
                      return (n = e.sent), e.abrupt("return", n.data);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        d = function (e) {
          var t = Object(l.a)("/".concat(e, "/get-configuration"), {
              method: "GET",
              transformResponse: function (e) {
                var t = JSON.parse(e);
                if (t.success)
                  return {
                    limits: t.data,
                    allowedCoins: t.data.map(function (e) {
                      return e.coin;
                    }),
                  };
                c.b.error(t.message);
              },
            }),
            n = Object(i.a)(t, 2),
            r = n[0],
            a = n[1],
            s = a.isLoading,
            u = a.data;
          return (
            Object(o.useEffect)(
              function () {
                e && r();
              },
              [e]
            ),
            {
              loading: s,
              data: null === u || void 0 === u ? void 0 : u.limits,
              allowedCoins:
                null === u || void 0 === u ? void 0 : u.allowedCoins,
            }
          );
        };
    },
    103: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        toggleWrapper: "style_toggleWrapper__3Ytxj",
        moonImage: "style_moonImage__2oBZN",
      };
    },
    105: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return h;
      });
      var i = n(3),
        r = n(15),
        a = n(16),
        o = n(19),
        s = n(17),
        c = n(20),
        l = n(152),
        u = n.n(l),
        d = n(0),
        b = [
          "onChange",
          "value",
          "name",
          "checked",
          "label",
          "disabled",
          "className",
          "classes",
        ],
        p = function (e) {
          var t = e.onChange,
            n = e.value,
            l = e.name,
            p = e.checked,
            f = e.label,
            m = e.disabled,
            h = e.className,
            v = e.classes,
            j = Object(c.a)(e, b),
            g = Object(i.useState)(!1),
            O = Object(s.a)(g, 2),
            x = O[0],
            _ = O[1];
          return Object(d.jsxs)("label", {
            className: Object(r.a)(
              u.a.label,
              null === v || void 0 === v ? void 0 : v.root,
              h,
              Object(o.a)(
                {},
                (null === v || void 0 === v ? void 0 : v.rootChecked) || "",
                p
              )
            ),
            children: [
              Object(d.jsxs)("div", {
                className: Object(r.a)(
                  u.a.radio,
                  null === v || void 0 === v ? void 0 : v.radio,
                  Object(o.a)({}, u.a.radioPressed, x)
                ),
                children: [
                  Object(d.jsx)(
                    "input",
                    Object(a.a)(
                      Object(a.a)({}, j),
                      {},
                      {
                        type: "radio",
                        onChange: t,
                        value: n,
                        name: l,
                        className: u.a.input,
                        checked: p,
                        disabled: m,
                        onMouseDown: function () {
                          return _(!0);
                        },
                        onMouseUp: function () {
                          return _(!1);
                        },
                        onMouseLeave: function () {
                          return _(!1);
                        },
                      }
                    )
                  ),
                  Object(d.jsx)("div", {
                    className: Object(r.a)(
                      u.a.round,
                      null === v || void 0 === v ? void 0 : v.round,
                      Object(o.a)({}, u.a.roundChecked, p)
                    ),
                  }),
                ],
              }),
              Object(d.jsx)("span", {
                className: Object(r.a)(
                  u.a.labelText,
                  null === v || void 0 === v ? void 0 : v.label
                ),
                children: f,
              }),
            ],
          });
        },
        f = n(153),
        m = n.n(f),
        h = function (e) {
          var t = e.labels,
            n = e.values,
            a = e.topLabel,
            o = e.disabled,
            s = e.onChange,
            c = e.value,
            l = e.nestedComponents,
            u = void 0 === l ? {} : l,
            b = e.radioTopLabels,
            f = void 0 === b ? [] : b,
            h = e.name,
            v = e.className,
            j = e.classes,
            g = n.map(function (e, n) {
              var a = Object(d.jsxs)(
                i.Fragment,
                {
                  children: [
                    u[n] ? u[n] : null,
                    Object(d.jsx)(p, {
                      name: h,
                      value: e,
                      onChange: s,
                      checked: c === e,
                      label: t[n],
                      disabled: o,
                      classes: null === j || void 0 === j ? void 0 : j.radio,
                    }),
                  ],
                },
                "".concat(h, "_").concat(e)
              );
              return f[n]
                ? Object(d.jsxs)(
                    "div",
                    {
                      className: Object(r.a)(
                        m.a.radioTopLabel,
                        null === j || void 0 === j ? void 0 : j.radioTopLabel
                      ),
                      children: [Object(d.jsx)("span", { children: f[n] }), a],
                    },
                    "".concat(h, "_").concat(e)
                  )
                : a;
            }),
            O = u[n.length];
          return (
            O && g.push(O),
            Object(d.jsxs)("div", {
              className: Object(r.a)(
                m.a.radioGroup,
                null === j || void 0 === j ? void 0 : j.root,
                v
              ),
              children: [
                a &&
                  Object(d.jsx)("label", { className: m.a.label, children: a }),
                g,
              ],
            })
          );
        };
    },
    106: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      n(3);
      var i = n(95),
        r = n.n(i),
        a = n(23),
        o = n(21),
        s = n(103),
        c = n.n(s),
        l = n(0),
        u = function (e) {
          var t = e.checked,
            n = e.setChecked,
            i = e.colors,
            s = void 0 === i ? a.p.standard : i,
            u = e.height,
            d = void 0 === u ? 28 : u,
            b = e.width,
            p = void 0 === b ? 52 : b,
            f = e.radius,
            m = void 0 === f ? 14 : f,
            h = e.diameter,
            v = void 0 === h ? 20 : h,
            j = Object(o.n)().isLight;
          return Object(l.jsx)("div", {
            className: c.a.toggleWrapper,
            children: Object(l.jsx)(r.a, {
              "aria-label": "Toggle",
              onChange: function (e) {
                n(e);
              },
              checked: t,
              className: c.a.toggle,
              handleDiameter: v,
              height: d,
              width: p,
              borderRadius: m,
              activeBoxShadow: "0px 1px 1px rgba(0,0,0,0.1)",
              offColor: j ? s.light.offColor.bg : s.dark.offColor.bg,
              onColor: j ? s.light.onColor.bg : s.dark.onColor.bg,
              offHandleColor: j
                ? s.light.offColor.handle
                : s.dark.offColor.handle,
              onHandleColor: j
                ? s.light.offColor.handle
                : s.dark.offColor.handle,
              uncheckedIcon: Object(l.jsx)("div", {}),
              checkedIcon: Object(l.jsx)("div", {}),
            }),
          });
        };
    },
    108: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var i = n(3),
        r = n(40),
        a = n(166),
        o = (function (e) {
          return (
            (e[(e.KeyA = 0)] = "KeyA"),
            (e[(e.KeyS = 1)] = "KeyS"),
            (e[(e.Space = 2)] = "Space"),
            e
          );
        })(o || {}),
        s = Object(r.a)("key"),
        c = function (e) {
          var t = Object(a.a)().isHotkeyActive;
          Object(i.useEffect)(
            function () {
              var n = function (e) {
                  var n;
                  return (
                    !t ||
                    "INPUT" ===
                      (null === e ||
                      void 0 === e ||
                      null === (n = e.target) ||
                      void 0 === n
                        ? void 0
                        : n.tagName) ||
                    "true" ===
                      (null === e || void 0 === e ? void 0 : e.target)
                        .contentEditable
                  );
                },
                i = function (e) {
                  s(e) && !n(e) && e.code in o && e.preventDefault();
                },
                r = function (t) {
                  if (s(t) && !n(t)) {
                    var i = t.code;
                    if (i in o) {
                      t.preventDefault();
                      var r = e.callbackKeyA,
                        a = e.callbackKeyS,
                        c = e.callbackSpace;
                      switch (i) {
                        case "KeyA":
                          r && r();
                          break;
                        case "KeyS":
                          a && a();
                          break;
                        case "Space":
                          c && c();
                      }
                    }
                  }
                };
              return (
                window.addEventListener("keydown", i),
                window.addEventListener("keyup", r),
                function () {
                  window.removeEventListener("keydown", i),
                    window.removeEventListener("keyup", r);
                }
              );
            },
            [t, e]
          );
        };
    },
    110: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return o;
        }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "d", function () {
          return c;
        }),
        n.d(t, "e", function () {
          return l;
        }),
        n.d(t, "f", function () {
          return u;
        }),
        n.d(t, "g", function () {
          return d;
        }),
        n.d(t, "h", function () {
          return b;
        }),
        n.d(t, "i", function () {
          return p;
        }),
        n.d(t, "j", function () {
          return f;
        });
      var i = n(3),
        r = n(163),
        a = Object(r.a)(
          Object(i.lazy)(function () {
            return n.e(131).then(n.bind(null, 196));
          })
        ),
        o =
          (Object(r.a)(
            Object(i.lazy)(function () {
              return n.e(132).then(n.bind(null, 197));
            })
          ),
          Object(r.a)(
            Object(i.lazy)(function () {
              return n.e(133).then(n.bind(null, 198));
            })
          )),
        s = Object(r.a)(
          Object(i.lazy)(function () {
            return n.e(134).then(n.bind(null, 199));
          })
        ),
        c = Object(r.a)(
          Object(i.lazy)(function () {
            return n.e(135).then(n.bind(null, 200));
          })
        ),
        l = Object(r.a)(
          Object(i.lazy)(function () {
            return n.e(136).then(n.bind(null, 201));
          })
        ),
        u = Object(r.a)(
          Object(i.lazy)(function () {
            return n.e(137).then(n.bind(null, 202));
          })
        ),
        d = Object(r.a)(
          Object(i.lazy)(function () {
            return n.e(138).then(n.bind(null, 203));
          })
        ),
        b = Object(r.a)(
          Object(i.lazy)(function () {
            return n.e(139).then(n.bind(null, 204));
          })
        ),
        p = Object(r.a)(
          Object(i.lazy)(function () {
            return n.e(140).then(n.bind(null, 205));
          })
        ),
        f = Object(r.a)(
          Object(i.lazy)(function () {
            return n.e(141).then(n.bind(null, 206));
          })
        );
    },
    113: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var i = n(16),
        r = (n(3), n(15)),
        a = n(106),
        o = n(115),
        s = n.n(o),
        c = n(0),
        l = function (e) {
          var t = e.toggle,
            n = e.setToggle,
            o = e.className,
            l = e.firstWord,
            u = e.secondWord,
            d = e.toggleColor,
            b = e.activeClass,
            p = e.params,
            f = e.anotherFormat;
          return Object(c.jsxs)("div", {
            className: Object(r.a)(s.a.toggleWrapper, o),
            children: [
              l
                ? Object(c.jsx)("div", {
                    className: Object(r.a)(
                      s.a.toggle_manual,
                      f
                        ? t
                          ? b || s.a.toggle_active
                          : ""
                        : t
                        ? ""
                        : b || s.a.toggle_active
                    ),
                    onClick: function () {
                      n(!1);
                    },
                    children: l,
                  })
                : null,
              Object(c.jsx)(
                a.a,
                Object(i.a)({ checked: t, setChecked: n, colors: d }, p)
              ),
              u
                ? Object(c.jsx)("div", {
                    className: Object(r.a)(
                      s.a.toggle_auto,
                      f
                        ? t
                          ? ""
                          : b || s.a.toggle_active
                        : t
                        ? b || s.a.toggle_active
                        : ""
                    ),
                    onClick: function () {
                      return n(!0);
                    },
                    children: u,
                  })
                : null,
            ],
          });
        };
    },
    115: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        toggleWrapper: "style_toggleWrapper__u80hM",
        toggle_manual: "style_toggle_manual__3XPgB",
        toggle_auto: "style_toggle_auto__1N_KU",
        toggle_active: "style_toggle_active__3Bf4f",
      };
    },
    116: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        root: "style_root__2iC6T",
        checkbox: "style_checkbox__fqUhH",
        checkboxChecked: "style_checkboxChecked__3VjD1",
        input: "style_input__3y-mK",
        icon: "style_icon__1_ygG",
        iconChecked: "style_iconChecked__2L-Od",
        label: "style_label__FfVM-",
      };
    },
    118: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return b;
      });
      var i = n(16),
        r = n(19),
        a = n(20),
        o = (n(3), n(15)),
        s = n(22),
        c = n(116),
        l = n.n(c),
        u = n(0),
        d = ["classes", "label", "checked", "onChange", "className"],
        b = function (e) {
          var t,
            n = e.classes,
            c = e.label,
            b = e.checked,
            p = e.onChange,
            f = e.className,
            m = Object(a.a)(e, d);
          return (
            (t = c
              ? "string" === typeof c || "number" === typeof c
                ? Object(u.jsx)("span", {
                    className: Object(o.a)(
                      null === n || void 0 === n ? void 0 : n.label,
                      l.a.label
                    ),
                    children: c,
                  })
                : c
              : null),
            Object(u.jsxs)("label", {
              className: Object(o.a)(
                null === n || void 0 === n ? void 0 : n.root,
                l.a.root,
                f
              ),
              children: [
                Object(u.jsxs)("div", {
                  className: Object(o.a)(
                    l.a.checkbox,
                    null === n || void 0 === n ? void 0 : n.checkbox,
                    Object(r.a)(
                      {},
                      Object(o.a)(
                        l.a.checkboxChecked,
                        null === n || void 0 === n ? void 0 : n.checked
                      ),
                      b
                    )
                  ),
                  children: [
                    Object(u.jsx)(
                      "input",
                      Object(i.a)(
                        Object(i.a)({}, m),
                        {},
                        {
                          onChange: p
                            ? function (e) {
                                return p(e, e.target.checked);
                              }
                            : void 0,
                          type: "checkbox",
                          checked: b,
                          className: Object(o.a)(
                            null === n || void 0 === n ? void 0 : n.input,
                            l.a.input
                          ),
                        }
                      )
                    ),
                    Object(u.jsx)(s.g, {
                      className: Object(o.a)(
                        l.a.icon,
                        null === n || void 0 === n ? void 0 : n.icon,
                        Object(r.a)({}, l.a.iconChecked, b)
                      ),
                    }),
                  ],
                }),
                t,
              ],
            })
          );
        };
    },
    125: function (e, t, n) {
      "use strict";
      var i = n(84);
      n.d(t, "c", function () {
        return i.a;
      });
      var r = n(81);
      n.d(t, "a", function () {
        return r.a;
      }),
        n.d(t, "b", function () {
          return r.b;
        }),
        n.d(t, "d", function () {
          return r.g;
        }),
        n.d(t, "e", function () {
          return r.i;
        });
      n(85);
    },
    126: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        wrapper: "style_wrapper__3yhB5",
        tableWrapper: "style_tableWrapper__1MClY",
        emptyRow: "style_emptyRow__11yPR",
        tableColumn: "style_tableColumn__fS46Y",
        pagination: "style_pagination__2zN3G",
        headerWrapper: "style_headerWrapper__1BlMx",
        rawWrapper: "style_rawWrapper__2nnNl",
        value: "style_value__2Zt9d",
        loader: "style_loader__2LF0C",
        circular: "style_circular__3xZHx",
        infinityPagination: "style_infinityPagination__2SG7U",
      };
    },
    127: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var i = n(34),
        r = n(3),
        a = [
          "dice",
          "roulette",
          "limbo",
          "plinko",
          "crash",
          "blackjack",
          "mines",
          "towers",
          "slots",
          "diamonds",
        ].reduce(function (e, t) {
          return (e[t] = t), e;
        }, {}),
        o = function () {
          var e = Object(i.h)().pathname;
          return Object(r.useMemo)(
            function () {
              var t = e.split("/"),
                n = t[t.length - 1].toLocaleLowerCase();
              return a[n];
            },
            [e]
          );
        };
    },
    128: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var i = function (e, t) {
        for (var n = Array(Math.max(0, e)), i = 0; i < e; i++) n[i] = t(i);
        return n;
      };
    },
    129: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var i = function (e, t, n) {
        return Math.min(Math.max(e, t), n);
      };
    },
    131: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        button: "style_button__4sGXe",
        skip: "style_skip__3mRc2",
      };
    },
    132: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        wrapper: "styles_wrapper__HyksF",
        title: "styles_title__1Ila7",
        description: "styles_description__17Orj",
      };
    },
    133: function (e, t, n) {
      e.exports = {
        root: "style_root__G4Zsw",
        element: "style_element__bIf6_",
        card: "style_card__ZZ9kq",
        name: "style_name__3RO2H",
        value: "style_value__1fsIT",
        coin: "style_coin__1tNFO",
      };
    },
    134: function (e, t, n) {},
    135: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return A;
      });
      var i = n(16),
        r = n(30),
        a = n(17),
        o = n(3),
        s = n.n(o),
        c = n(15),
        l = n(54),
        u = n(37),
        d = n(55),
        b = n(20),
        p = n(18),
        f = n(22),
        m = n(131),
        h = n.n(m),
        v = n(0),
        j = [
          "maxButtonVisible",
          "showPrevNextButton",
          "showFirstLastPage",
          "page",
          "pageAmount",
          "classes",
          "onChange",
          "disabled",
        ],
        g = function (e) {
          var t = e.className;
          return Object(v.jsx)("span", {
            className: Object(c.a)(h.a.skip, t),
            children: "...",
          });
        },
        O = function (e) {
          var t = e.maxButtonVisible,
            n = void 0 === t ? 3 : t,
            r = e.showPrevNextButton,
            a = e.showFirstLastPage,
            o = e.page,
            l = e.pageAmount,
            u = e.classes,
            d = e.onChange,
            m = e.disabled,
            O = Object(b.a)(e, j),
            x = function () {
              for (
                var e = [],
                  t = Math.floor(n / 2),
                  i = Math.max(o - t, 1),
                  r = Math.min(o + t, l),
                  b = function (t) {
                    var n = t === o,
                      s = Object(v.jsx)(
                        p.a,
                        {
                          onClick: function () {
                            return d && d(t);
                          },
                          disabled: n || m,
                          className: Object(c.a)(
                            null === u || void 0 === u ? void 0 : u.button,
                            h.a.button,
                            n && [
                              h.a.active,
                              null === u || void 0 === u
                                ? void 0
                                : u.activePage,
                            ]
                          ),
                          children: t,
                        },
                        t
                      );
                    ((1 === t || t === l) && a) ||
                      (e.push(s),
                      t === r && r + 1 < l
                        ? e.push(
                            Object(v.jsx)(g, {
                              className:
                                null === u || void 0 === u ? void 0 : u.skip,
                            })
                          )
                        : t === i &&
                          i - 1 > 1 &&
                          e.splice(
                            e.length - 2,
                            0,
                            Object(v.jsx)(g, {
                              className:
                                null === u || void 0 === u ? void 0 : u.skip,
                            })
                          ));
                  },
                  f = i;
                f <= r;
                f++
              )
                b(f);
              return Object(v.jsx)(v.Fragment, {
                children: e.map(function (e) {
                  return Object(v.jsx)(s.a.Fragment, { children: e }, e.key);
                }),
              });
            },
            _ = 1 === o || m,
            y = o === l || m;
          return Object(v.jsxs)(
            "div",
            Object(i.a)(
              Object(i.a)(
                {
                  className: Object(c.a)(
                    h.a.root,
                    null === u || void 0 === u ? void 0 : u.root
                  ),
                },
                O
              ),
              {},
              {
                children: [
                  r &&
                    Object(v.jsx)(p.a, {
                      onClick: function () {
                        return d && d(Math.max(1, o - 1));
                      },
                      disabled: _,
                      className: Object(c.a)(
                        null === u || void 0 === u ? void 0 : u.button,
                        h.a.button
                      ),
                      children: Object(v.jsx)(f.J, {}),
                    }),
                  a &&
                    Object(v.jsx)(p.a, {
                      onClick: function () {
                        return d && d(1);
                      },
                      disabled: _,
                      className: Object(c.a)(
                        null === u || void 0 === u ? void 0 : u.button,
                        h.a.button,
                        1 === o && [
                          h.a.active,
                          null === u || void 0 === u ? void 0 : u.activePage,
                        ]
                      ),
                      children: "1",
                    }),
                  Object(v.jsx)(x, {}),
                  a &&
                    1 !== l &&
                    Object(v.jsx)(p.a, {
                      onClick: function () {
                        return d && d(l);
                      },
                      disabled: y,
                      className: Object(c.a)(
                        null === u || void 0 === u ? void 0 : u.button,
                        h.a.button,
                        o === l && [
                          h.a.active,
                          null === u || void 0 === u ? void 0 : u.activePage,
                        ]
                      ),
                      children: l,
                    }),
                  r &&
                    Object(v.jsx)(p.a, {
                      onClick: function () {
                        return d && d(Math.min(l, o + 1));
                      },
                      disabled: y,
                      className: Object(c.a)(
                        null === u || void 0 === u ? void 0 : u.button,
                        h.a.button
                      ),
                      children: Object(v.jsx)(f.J, {}),
                    }),
                ],
              }
            )
          );
        },
        x = n(132),
        _ = n.n(x),
        y = function (e) {
          var t = e.description,
            n = e.classes;
          return Object(v.jsxs)("div", {
            className: Object(c.a)(
              _.a.wrapper,
              null === n || void 0 === n ? void 0 : n.root
            ),
            children: [
              Object(v.jsx)("span", {
                className: Object(c.a)(
                  _.a.title,
                  null === n || void 0 === n ? void 0 : n.title
                ),
                children: "Whoops!",
              }),
              Object(v.jsx)("div", {
                className: Object(c.a)(
                  _.a.description,
                  null === n || void 0 === n ? void 0 : n.description
                ),
                children: t || "There are no data to show you.",
              }),
              Object(v.jsx)("img", {
                className: null === n || void 0 === n ? void 0 : n.image,
                src: "/images/empty.webp",
                alt: "empty",
              }),
            ],
          });
        },
        w = n(26),
        N = n(133),
        C = n.n(N),
        M = function (e) {
          var t = e.content,
            n = e.classes;
          return Object(v.jsx)("div", {
            className: Object(c.a)(
              C.a.root,
              null === n || void 0 === n ? void 0 : n.row
            ),
            children: t.map(function (e, t) {
              var i = e.name,
                r = e.value,
                a = e.coinName;
              return Object(v.jsxs)(
                "div",
                {
                  className: C.a.element,
                  children: [
                    Object(v.jsx)("div", {
                      className: Object(c.a)(
                        C.a.card,
                        C.a.name,
                        null === n || void 0 === n ? void 0 : n.header
                      ),
                      children: i,
                    }),
                    Object(v.jsxs)("div", {
                      className: Object(c.a)(
                        C.a.card,
                        C.a.value,
                        null === n || void 0 === n ? void 0 : n.value
                      ),
                      children: [
                        a &&
                          Object(v.jsx)(w.a, { className: C.a.coin, coin: a }),
                        r,
                      ],
                    }),
                  ],
                },
                "".concat(i, "--").concat(r)
              );
            }),
          });
        },
        k = n(134),
        E = n.n(k),
        L = function (e) {
          var t = e.content,
            n = e.pagination,
            i = e.loading,
            r = e.classes,
            a = e.className;
          return Object(v.jsxs)("div", {
            className: Object(c.a)(E.a.root, a),
            children: [
              t.map(function (e) {
                return Object(v.jsx)(M, { content: e, classes: r });
              }),
              n &&
                t.length > 0 &&
                Object(v.jsx)(O, {
                  page: n.page,
                  pageAmount: n.pageAmount,
                  onChange: n.setPage,
                  disabled: i,
                  showFirstLastPage: !0,
                  showPrevNextButton: !0,
                  classes: {
                    root: Object(c.a)("standardPagination", E.a.pagination),
                    button: "standardPagination_button",
                    activePage: "standardPagination_active",
                  },
                }),
            ],
          });
        },
        H = n(126),
        S = n.n(H),
        A = function (e) {
          var t = e.classes,
            n = e.styles,
            s = e.columns,
            b = e.rows,
            p = e.pagination,
            f = e.infinityPagination,
            m = e.loading,
            h = void 0 !== m && m,
            j = e.RawWrapper,
            g = e.isMobile,
            x = e.empty,
            _ = e.skeletonRows,
            w = void 0 === _ ? 5 : _,
            N = e.includeHeader,
            C = void 0 === N || N,
            M = e.withoutDefaultStyles,
            k = e.compact,
            E = void 0 === k ? 0 : k,
            H = e.circular,
            A = void 0 === H || H,
            F = e.rowOnClick,
            W = Object(l.b)(E),
            P = s.reduce(function (e, t) {
              return (e[t.field] = t), e;
            }, {}),
            T = function (e) {
              return Object.entries(e).sort(function (e, t) {
                var n = Object(a.a)(e, 1)[0],
                  i = Object(a.a)(t, 1)[0];
                for (var r in s) {
                  var o = s[r];
                  if (n === o.field) return -1;
                  if (i === o.field) return 1;
                }
                return 0;
              });
            },
            B = function (e, n, i, r) {
              if ("__typename" !== e) {
                var a = P[e];
                return null !== a && void 0 !== a && a.valueRender
                  ? a.valueRender(n, h, i, r, g)
                  : h
                  ? Object(v.jsx)("div", { className: "skeleton" })
                  : (function (e, t) {
                      return "string" === typeof e || "number" === typeof e
                        ? Object(v.jsx)("div", {
                            className: Object(c.a)(S.a.value, t),
                            children: e,
                          })
                        : Object(v.jsx)(v.Fragment, {});
                    })(n, null === t || void 0 === t ? void 0 : t.tile);
              }
            },
            I = function () {
              return p && b.length > 0
                ? Object(v.jsx)(O, {
                    page: p.page,
                    pageAmount: p.pageAmount,
                    onChange: p.setPage,
                    disabled: h,
                    showFirstLastPage: !0,
                    showPrevNextButton: !0,
                    style: {
                      justifyContent:
                        "left" ===
                        (null === p || void 0 === p ? void 0 : p.direction)
                          ? "flex-start"
                          : "right" ===
                            (null === p || void 0 === p ? void 0 : p.direction)
                          ? "flex-end"
                          : "center",
                    },
                    classes: {
                      root: Object(c.a)(
                        "standardPagination",
                        S.a.pagination,
                        null === t || void 0 === t ? void 0 : t.pagination
                      ),
                      button: "standardPagination_button",
                      activePage: Object(c.a)(
                        "standardPagination_active",
                        null === t || void 0 === t ? void 0 : t.paginationActive
                      ),
                    },
                  })
                : null;
            };
          return Object(v.jsxs)("div", {
            className: Object(c.a)(
              S.a.wrapper,
              null === t || void 0 === t ? void 0 : t.global
            ),
            style: { "--table-column-count": s.length },
            children: [
              "top" === (null === p || void 0 === p ? void 0 : p.position) &&
                Object(v.jsx)(I, {}),
              W
                ? Object(v.jsx)(L, {
                    classes: null === t || void 0 === t ? void 0 : t.compact,
                    className:
                      null === t || void 0 === t ? void 0 : t.compactWrapper,
                    content: b.reduce(function (e, t, n, i) {
                      var r = T(t)
                        .filter(function (e) {
                          var t = Object(a.a)(e, 2),
                            n = t[0],
                            i = t[1];
                          return (
                            "string" === typeof i ||
                            "number" === typeof i ||
                            !!P[n] ||
                            !!P[n].valueRender
                          );
                        })
                        .map(function (e) {
                          var t = Object(a.a)(e, 2),
                            r = t[0],
                            o = t[1],
                            s = P[r];
                          return {
                            name:
                              (null === s || void 0 === s
                                ? void 0
                                : s.headerName) || r,
                            value:
                              null !== s && void 0 !== s && s.valueRender
                                ? null === s || void 0 === s
                                  ? void 0
                                  : s.valueRender(o, h, i[n], n)
                                : o,
                          };
                        });
                      return e.push(r), e;
                    }, []),
                  })
                : Object(v.jsxs)("div", {
                    className: Object(c.a)(
                      S.a.tableWrapper,
                      !M && "standardTable",
                      null === t || void 0 === t ? void 0 : t.root
                    ),
                    style: null === n || void 0 === n ? void 0 : n.root,
                    children: [
                      C &&
                        Object(v.jsx)("div", {
                          className: Object(c.a)(
                            S.a.headerWrapper,
                            !M && "standardTable_header",
                            null === t || void 0 === t ? void 0 : t.header
                          ),
                          style: null === n || void 0 === n ? void 0 : n.header,
                          children: s.map(function (e, n) {
                            return e.headerName
                              ? Object(v.jsx)(
                                  "span",
                                  {
                                    className:
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.hTile,
                                    children: e.headerRender
                                      ? e.headerRender(e.headerName)
                                      : e.headerName,
                                  },
                                  "key_#".concat(n)
                                )
                              : null;
                          }),
                        }),
                      h || 0 !== b.length
                        ? (function () {
                            if (!h || b.length > 0) return b;
                            for (
                              var e = s.map(function (e) {
                                  return e.field;
                                }),
                                t = [],
                                n = 0;
                              n < w;
                              n++
                            ) {
                              var i,
                                a = {},
                                o = Object(r.a)(e);
                              try {
                                for (o.s(); !(i = o.n()).done; ) {
                                  a[i.value] = "";
                                }
                              } catch (c) {
                                o.e(c);
                              } finally {
                                o.f();
                              }
                              t.push(a);
                            }
                            return t;
                          })().map(function (e, i, r) {
                            return j
                              ? Object(v.jsx)(j, { data: e, loading: h }, i)
                              : Object(v.jsx)(
                                  "div",
                                  {
                                    className: Object(c.a)(
                                      S.a.rawWrapper,
                                      !M && "standardTable_row",
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.row
                                    ),
                                    onClick: function () {
                                      return F && F(e);
                                    },
                                    style:
                                      null === n || void 0 === n
                                        ? void 0
                                        : n.row,
                                    children: T(e)
                                      .sort(function (e, t) {
                                        var n = Object(a.a)(e, 1)[0],
                                          i = Object(a.a)(t, 1)[0];
                                        for (var r in s) {
                                          var o = s[r];
                                          if (n === o.field) return -1;
                                          if (i === o.field) return 1;
                                        }
                                        return 0;
                                      })
                                      .map(function (t, n) {
                                        var r = Object(a.a)(t, 2),
                                          s = r[0],
                                          c = r[1];
                                        return Object(v.jsx)(
                                          o.Fragment,
                                          { children: B(s, c, e, i) },
                                          "Key_".concat(s, "_").concat(n)
                                        );
                                      }),
                                  },
                                  "rawWrapperKey_#".concat(i)
                                );
                          })
                        : null !== x && void 0 !== x && x.disable
                        ? null
                        : Object(v.jsx)(y, {
                            description:
                              null === x || void 0 === x
                                ? void 0
                                : x.description,
                            classes:
                              null === x || void 0 === x ? void 0 : x.classes,
                          }),
                    ],
                  }),
              "top" !== (null === p || void 0 === p ? void 0 : p.position) &&
                Object(v.jsx)(I, {}),
              f &&
                Object(v.jsx)("div", {
                  className: S.a.infinityPagination,
                  children: Object(v.jsx)(d.a, Object(i.a)({}, f)),
                }),
              h && A && Object(v.jsx)(u.a, { size: 86, className: S.a.loader }),
            ],
          });
        };
    },
    136: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var i = n(16),
        r = n(34),
        a = n(23),
        o = n(21),
        s = n(97),
        c = n(0);
      function l(e) {
        return function (t) {
          var n = Object(o.i)(),
            l = n.user,
            u = n.isUserDataLoading,
            d = Object(o.k)(),
            b = d.gameAccess,
            p = d.gameAgreed,
            f = Object(r.h)().pathname,
            m =
              l && !b
                ? Object(c.jsx)(r.a, {
                    to: { pathname: a.m.startPage.pathName },
                  })
                : l && !p.value
                ? Object(c.jsx)(r.a, {
                    to: {
                      pathname: a.m.gamingDisclaimerPage.pathName,
                      state: { pathname: f },
                    },
                  })
                : Object(c.jsx)(e, Object(i.a)({}, t));
          return u || p.isLoading || null === b ? Object(c.jsx)(s.a, {}) : m;
        };
      }
    },
    1366: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "LimboPage", function () {
          return Ve;
        });
      var i = n(82),
        r = n(136),
        a = n(125),
        o = n(17),
        s = n(15),
        c = n(23),
        l = n(390),
        u = n(101),
        d = n(3),
        b = { manager: {} },
        p = n.n(d).a.createContext(b),
        f = n(21),
        m = n(1),
        h = n(16),
        v = n(4),
        j = n(24),
        g = n(25),
        O = n(67),
        x = n(129),
        _ = n(99),
        y = n(32),
        w = n(154),
        N = (function () {
          var e = Object(v.a)(
            Object(m.a)().mark(function e(t) {
              var n, i, r;
              return Object(m.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), O.c.get("limbo/get-configuration");
                    case 2:
                      (n = e.sent),
                        null !== (i = n.data) &&
                          void 0 !== i &&
                          i.data &&
                          ((r = i.data.reduce(function (e, t) {
                            return (
                              (e[t.coin] = {
                                coin: t.coin,
                                maximum_bet: Number(t.maximum_bet),
                                maximum_profit: Number(t.maximum_profit),
                                minimum_bet: Number(t.minimum_bet),
                              }),
                              e
                            );
                          }, {})),
                          t(r));
                    case 5:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        C = function (e, t) {
          var n = e * t - e;
          return (n && n !== 1 / 0) || (n = 0), Number(n.toFixed(8));
        },
        M = { min: 1.01, max: 1e6 },
        k = { max: 96.04, min: 0 },
        E = function (e) {
          var t = k,
            n = t.max,
            i = t.min,
            r = parseFloat((9700 / (100 * e)).toFixed(5));
          return Object(x.a)(r, i, n);
        },
        L = function (e) {
          var t = 9700 / (100 * Number(e.toFixed(5)));
          return (t = Object(x.a)(t, M.min, M.max)), Number(t.toFixed(2));
        },
        H = "limboBetAmount",
        S = "limboPayout",
        A = function () {
          try {
            return {
              betAmount: Number(localStorage.getItem(H) || 0),
              payout: Number(localStorage.getItem(S) || 0),
            };
          } catch (e) {
            return { betAmount: 0, payout: 0 };
          }
        },
        F = n(65),
        W = n(66),
        P = n(87),
        T = "CHANGE_MANUAL_BET_VALUE",
        B = "CHANGE_ROCKET",
        I = "CHANGE_AUTO",
        R = "CHANGE_AUTO_OPERATIONS",
        D = "CHANGE_AUTO_LIMITS",
        G = (function (e) {
          Object(F.a)(n, e);
          var t = Object(W.a)(n);
          function n(e) {
            var i;
            return (
              Object(j.a)(this, n),
              ((i = t.call(this)).manager = void 0),
              (i.manager = e),
              i
            );
          }
          return (
            Object(g.a)(n, [
              {
                key: "setManualValues",
                value: function (e, t) {
                  var n = this.manager.panel.manual;
                  switch (((n[e] = Number(t)), e)) {
                    case "betAmount":
                    default:
                      break;
                    case "payout":
                      n.chance = E(n.payout);
                      break;
                    case "chance":
                      (n.payout = L(n.chance)),
                        (n.chance = E(n.payout)),
                        (n.payout = L(n.chance));
                  }
                  (n.profit = C(n.betAmount, n.payout)),
                    (function (e) {
                      var t = e.betAmount,
                        n = e.payout;
                      t && localStorage.setItem(H, "" + t),
                        n && localStorage.setItem(S, "" + n);
                    })({ betAmount: n.betAmount, payout: n.payout }),
                    this.emit(T, n);
                },
              },
              {
                key: "manualValuesListener",
                value: function (e) {
                  var t = this;
                  return (
                    this.addListener(T, e),
                    function () {
                      t.removeListener(T, e);
                    }
                  );
                },
              },
              {
                key: "setRocket",
                value: function (e, t) {
                  var n = this.manager.panel.auto.sys.isOpen;
                  this.emit(B, { value: e, isWin: t, isAuto: n });
                },
              },
              {
                key: "rocketListener",
                value: function (e) {
                  var t = this;
                  return (
                    this.addListener(B, e),
                    function () {
                      t.removeListener(B, e);
                    }
                  );
                },
              },
              {
                key: "setAuto",
                value: function (e) {
                  var t = this.manager.panel.auto;
                  this.emitAutoLimits(t.limits),
                    (t.sys = Object(h.a)(Object(h.a)({}, t.sys), e)),
                    this.emit(I, t.sys);
                },
              },
              {
                key: "autoListener",
                value: function (e) {
                  var t = this;
                  return (
                    this.addListener(I, e),
                    function () {
                      t.removeListener(I, e);
                    }
                  );
                },
              },
              {
                key: "setAutoValues",
                value: function (e) {
                  (this.manager.panel.auto.operations = e), this.emit(R, e);
                },
              },
              {
                key: "autoValuesListener",
                value: function (e) {
                  var t = this;
                  return (
                    this.addListener(R, e),
                    function () {
                      t.removeListener(R, e);
                    }
                  );
                },
              },
              {
                key: "emitAutoLimits",
                value: function (e) {
                  this.emit(D, e);
                },
              },
              {
                key: "setAutoLimits",
                value: function (e) {
                  (this.manager.panel.auto.limits = e), this.emitAutoLimits(e);
                },
              },
              {
                key: "autoLimitsListener",
                value: function (e) {
                  var t = this;
                  return (
                    this.addListener(D, e),
                    function () {
                      t.removeListener(D, e);
                    }
                  );
                },
              },
            ]),
            n
          );
        })(P.EventEmitter),
        V = (function () {
          function e(t, n) {
            var i = this;
            Object(j.a)(this, e),
              (this.panel = {
                manual: {
                  betAmount: A().betAmount || 0.1,
                  profit: 0.1,
                  chance: 48.5,
                  payout: A().payout || 0.1,
                },
                auto: {
                  sys: { isOpen: !1, isStarted: !1, baseBet: 0.1 },
                  operations: {
                    onLoss: {
                      betPercent: 100,
                      cashout: 1.9,
                      isCashout: !1,
                      variant: 1,
                    },
                    onWin: {
                      betPercent: 0,
                      cashout: 1.9,
                      isCashout: !1,
                      variant: 1,
                    },
                  },
                  limits: { numberOfBets: 0, stopOnLoss: 0, stopOnWin: 0 },
                  usage: { numberOfBets: 0, profit: 0 },
                },
                limits: {},
              }),
              (this.emitter = void 0),
              (this.seed = void 0),
              (this.coinsManager = void 0),
              (this.seed = t),
              (this.coinsManager = n),
              N(function (e) {
                i.panel.limits = e;
                var t = (n.selectedCoin || {}).symbol;
                if (!t)
                  try {
                    var r = JSON.parse(
                      localStorage.getItem("selectedCoin") || "null"
                    );
                    t = r ? r.symbol : "GEM";
                  } catch (b) {
                    t = "GEM";
                  }
                if (t && e[t]) {
                  var a = e[t],
                    o = a.maximum_bet,
                    s = a.minimum_bet,
                    c = A(),
                    l = c.betAmount,
                    u = c.payout;
                  i.emitter.setManualValues(
                    "betAmount",
                    Object(x.a)(l, Number(s), Number(o))
                  );
                  var d = Object(x.a)(u, Number(M.min), Number(M.max));
                  i.emitter.setManualValues("payout", d),
                    i.emitter.setManualValues("chance", E(d));
                }
              }),
              (this.emitter = new G(this));
          }
          return (
            Object(g.a)(e, [
              {
                key: "onClick",
                value: function () {
                  var e = this.panel,
                    t = e.auto,
                    n = e.manual,
                    i = t.sys,
                    r = t.usage;
                  if (i.isOpen) {
                    for (var a in ((i.baseBet = n.betAmount),
                    this.emitter.setAuto({ isStarted: !i.isStarted }),
                    r))
                      r[a] && (r[a] = 0);
                    this.playAuto();
                  } else this.play();
                },
              },
              {
                key: "play",
                value: (function () {
                  var e = Object(v.a)(
                    Object(m.a)().mark(function e() {
                      var t, n, i, r, a, o, s, c, l, u, d, b, p, f, v;
                      return Object(m.a)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t = this.seed),
                                  (n = t.userSeed),
                                  (i = t.setUserSeed),
                                  (r = t.incrementNonce),
                                  (a = t.isClientSeedSetManually),
                                  (o = this.panel),
                                  o.auto,
                                  (s = o.manual),
                                  (c = s.betAmount),
                                  (l = s.payout),
                                  (u = this.coinsManager.selectedCoin || {}),
                                  (d = u.symbol))
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return e.abrupt("return");
                              case 6:
                                return (
                                  (b = {
                                    client_seed: n,
                                    bet_amt: c.toFixed(8),
                                    coin: d,
                                    target_payout: l.toFixed(2),
                                  }),
                                  (e.next = 9),
                                  O.c.post("limbo/play", b)
                                );
                              case 9:
                                return (
                                  (p = e.sent),
                                  null !== (f = p.data) &&
                                  void 0 !== f &&
                                  f.success
                                    ? ((v = Number(f.data.profit)),
                                      this.rocketLaunch(
                                        f.data.crash_point,
                                        v >= 0
                                      ),
                                      _.a.addBet({ amount: c, profit: v }),
                                      this.coinsManager.updateCoinBalance(
                                        +f.data.balance,
                                        d
                                      ))
                                    : y.b.error({
                                        message: f.message,
                                        timeOut: 4e3,
                                      }),
                                  a ? r() : i(),
                                  e.abrupt(
                                    "return",
                                    Object(h.a)(
                                      Object(h.a)({}, f.data),
                                      {},
                                      {
                                        coin: d,
                                        success: f.success,
                                        message: f.message,
                                      }
                                    )
                                  )
                                );
                              case 14:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "playAuto",
                value: (function () {
                  var e = Object(v.a)(
                    Object(m.a)().mark(function e() {
                      var t,
                        n,
                        i,
                        r,
                        a,
                        o,
                        s,
                        c,
                        l,
                        u,
                        d,
                        b,
                        p,
                        f,
                        v,
                        j,
                        g,
                        O,
                        _,
                        N,
                        M,
                        k,
                        E,
                        L,
                        H,
                        S,
                        A,
                        F,
                        W,
                        P,
                        T,
                        B = this;
                      return Object(m.a)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.panel.auto.sys.isStarted) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                return (
                                  (t = function () {
                                    B.emitter.emitAutoLimits(
                                      B.panel.auto.limits
                                    ),
                                      B.emitter.setAuto({ isStarted: !1 });
                                  }),
                                  (e.prev = 3),
                                  (e.next = 6),
                                  this.play()
                                );
                              case 6:
                                if (
                                  null === (n = e.sent) ||
                                  void 0 === n ||
                                  !n.success
                                ) {
                                  e.next = 44;
                                  break;
                                }
                                (i = n.win),
                                  (r = n.coin),
                                  (a = n.profit),
                                  (o = n.balance),
                                  (s = this.panel),
                                  (c = s.limits),
                                  (l = s.manual),
                                  (u = s.auto),
                                  (d = c[r]),
                                  (b = d.maximum_bet),
                                  (p = d.minimum_bet),
                                  (f = l.betAmount),
                                  (v = l.payout),
                                  (j = u.operations[i ? "onWin" : "onLoss"]),
                                  (g = j.variant),
                                  (O = j.isCashout),
                                  (_ = j.cashout),
                                  (N = j.betPercent),
                                  (M = u.limits),
                                  (k = u.usage),
                                  (E = u.sys),
                                  (k.profit += Number(a)),
                                  (k.numberOfBets += 1),
                                  (e.t0 = g),
                                  (e.next =
                                    0 === e.t0
                                      ? 19
                                      : 2 === e.t0
                                      ? 28
                                      : (e.t0, 30));
                                break;
                              case 19:
                                if (
                                  ((L = f + f * (N / 100)),
                                  (L = Object(x.a)(
                                    Number(L.toFixed(8)),
                                    p,
                                    Math.min(b)
                                  )),
                                  this.emitter.setManualValues("betAmount", L),
                                  this.emitter.setManualValues(
                                    "profit",
                                    C(L, v)
                                  ),
                                  !(L > Number(o)))
                                ) {
                                  e.next = 27;
                                  break;
                                }
                                return (
                                  t(),
                                  y.b.info({
                                    message:
                                      "Auto mode is stopped due to insufficient balance",
                                    timeOut: 8e3,
                                  }),
                                  e.abrupt("return")
                                );
                              case 27:
                                return e.abrupt("break", 32);
                              case 28:
                                return t(), e.abrupt("return");
                              case 30:
                                return (
                                  this.emitter.setManualValues(
                                    "betAmount",
                                    E.baseBet
                                  ),
                                  e.abrupt("break", 32)
                                );
                              case 32:
                                if (
                                  (O &&
                                    ((H = Number(_.toFixed(2))),
                                    this.emitter.setManualValues("payout", H)),
                                  (S = M.numberOfBets),
                                  (A = M.stopOnLoss),
                                  (F = M.stopOnWin),
                                  (W = A && k.profit <= -1 * A),
                                  (P = F && k.profit >= F),
                                  (T = S && S - k.numberOfBets <= 0),
                                  !(W || P || T))
                                ) {
                                  e.next = 38;
                                  break;
                                }
                                return t(), e.abrupt("return");
                              case 38:
                                return (
                                  E.isStarted &&
                                    S &&
                                    this.emitter.emitAutoLimits(
                                      Object(h.a)(
                                        Object(h.a)({}, M),
                                        {},
                                        { numberOfBets: S - k.numberOfBets }
                                      )
                                    ),
                                  (e.next = 41),
                                  Object(w.a)(1 / 4)
                                );
                              case 41:
                                this.playAuto(), (e.next = 46);
                                break;
                              case 44:
                                t(),
                                  null !== n &&
                                    void 0 !== n &&
                                    n.message &&
                                    y.b.error({
                                      message: n.message,
                                      timeOut: 1 / 0,
                                    });
                              case 46:
                                e.next = 53;
                                break;
                              case 48:
                                (e.prev = 48),
                                  (e.t1 = e.catch(3)),
                                  t(),
                                  console.error(
                                    " >>> limbo auto play error. ",
                                    e.t1
                                  ),
                                  y.b.error({
                                    message: "Something went wrong",
                                    timeOut: 1 / 0,
                                  });
                              case 53:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[3, 48]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "rocketLaunch",
                value: function (e, t) {
                  this.emitter.setRocket(e, t);
                },
              },
            ]),
            e
          );
        })(),
        Z = n(0),
        U = function (e) {
          var t,
            n = e.children,
            i = Object(f.m)(),
            r = Object(f.j)(),
            a = Object(d.useMemo)(function () {
              return new V(i, r);
            }, []);
          return (
            (a.seed = i),
            Object(d.useEffect)(function () {
              return function () {
                null === a ||
                  void 0 === a ||
                  a.emitter.setAuto({ isStarted: !1 }),
                  null === a || void 0 === a || a.emitter.removeAllListeners();
              };
            }, []),
            Object(d.useEffect)(
              function () {
                a.coinsManager = r;
              },
              [
                null === (t = r.selectedCoin) || void 0 === t
                  ? void 0
                  : t.symbol,
              ]
            ),
            a
              ? Object(Z.jsx)(p.Provider, {
                  value: { manager: a },
                  children: n,
                })
              : null
          );
        },
        q = function () {
          var e = z().manager,
            t = Object(d.useState)(!1),
            n = Object(o.a)(t, 2),
            i = n[0],
            r = n[1];
          return (
            Object(d.useEffect)(function () {
              var t = e.emitter.autoListener(function (e) {
                var t = e.isStarted;
                return r(t);
              });
              return function () {
                t();
              };
            }, []),
            {
              isStarted: i,
              setStarted: function (t) {
                return e.emitter.setAuto({ isOpen: t });
              },
            }
          );
        };
      function z() {
        return Object(d.useContext)(p);
      }
      var Y = n(182),
        K = n(113),
        X = n(108),
        J = n(297),
        $ = n(361),
        Q = n(924),
        ee = n.n(Q),
        te = function (e) {
          var t = e.isMobile,
            n = e.allowedCoins,
            i = e.gameLimits,
            r = q().isStarted,
            a = z().manager,
            s = Object(f.j)().selectedCoin,
            c = Object(d.useState)({
              bet: a.panel.manual.betAmount.toFixed(8),
              profit: a.panel.manual.profit.toFixed(8),
              payout: a.panel.manual.payout.toFixed(2),
              chance: a.panel.manual.chance.toFixed(5),
            }),
            l = Object(o.a)(c, 2),
            u = l[0],
            b = l[1],
            p = Object(d.useMemo)(
              function () {
                var e = { min: 0, max: 1, maxProfit: 0 };
                if (i) {
                  var t = i.find(function (e) {
                    return (
                      e.coin ===
                      (null === s || void 0 === s ? void 0 : s.symbol)
                    );
                  });
                  t &&
                    (e = {
                      min: Number(t.minimum_bet),
                      max: Number(t.maximum_bet),
                      maxProfit: Number(t.maximum_profit),
                    });
                }
                return e;
              },
              [null === s || void 0 === s ? void 0 : s.symbol, i]
            ),
            m = function (e) {
              var t = p.max,
                n = p.min;
              a.emitter.setManualValues("betAmount", Object(x.a)(e, n, t));
            };
          return (
            Object(d.useEffect)(function () {
              var e = a.emitter.manualValuesListener(function (e) {
                var t = e.chance,
                  n = e.payout,
                  i = e.betAmount,
                  r = e.profit;
                b({
                  bet: i.toFixed(8),
                  profit: r.toFixed(8),
                  chance: t.toFixed(5),
                  payout: n.toFixed(2),
                });
              });
              return function () {
                e();
              };
            }, []),
            Object(Z.jsx)($.a, {
              disabled: r,
              params: { disableChance: r },
              coinsFilter: n,
              bet: u.bet,
              profit: u.profit,
              payout: u.payout,
              chance: u.chance,
              limits: p,
              setFieldValue: function (e, t) {
                switch (e) {
                  case "bet":
                    return b(function (e) {
                      return Object(h.a)(Object(h.a)({}, e), {}, { bet: t });
                    });
                  case "chance":
                    return b(function (e) {
                      return Object(h.a)(Object(h.a)({}, e), {}, { chance: t });
                    });
                  case "payout":
                    return b(function (e) {
                      return Object(h.a)(Object(h.a)({}, e), {}, { payout: t });
                    });
                  default:
                    return;
                }
              },
              blurFieldValue: function (e, t) {
                switch (e) {
                  case "bet":
                    m(t);
                    break;
                  case "chance":
                    !(function (e) {
                      var t = k,
                        n = t.max,
                        i = t.min,
                        r = Number(Object(x.a)(Number(e), i, n).toFixed(5));
                      a.emitter.setManualValues("chance", r);
                    })(t);
                    break;
                  case "payout":
                    !(function (e) {
                      var t = M,
                        n = t.max,
                        i = t.min,
                        r = Number(Object(x.a)(Number(e), i, n).toFixed(2));
                      a.emitter.setManualValues("payout", r);
                    })(t);
                }
              },
              inputClass: ee.a.limbo_betInput,
              titleClass: ee.a.limbo_betTitle,
              oppClass: ee.a.limbo_opportunity,
              isMobile: t,
              labels: { payout: "multiplier" },
            })
          );
        },
        ne = n(19),
        ie = n(41),
        re = /[0-9]*\.?[0-9]*/g,
        ae = function (e) {
          return e
            ? e
                .replace(/[^(\d+(?:.\-\d{1,2})?)$]/g, "")
                .replace(/,{1,}|\.{2,}/g, ".")
            : e || "";
        },
        oe = function (e) {
          if (!e) return e || "";
          var t = e.match(/^[^.]+?(?=\.0*$)|^[^.]+?\..*?(?=0*$)|^[^.]*$/g);
          return t ? t[0] : e;
        },
        se = n(105),
        ce = n(118),
        le = n(27),
        ue = (function (e) {
          return (
            (e[(e.CHANGE_BET_BY = 0)] = "CHANGE_BET_BY"),
            (e[(e.RESET = 1)] = "RESET"),
            (e[(e.STOP = 2)] = "STOP"),
            e
          );
        })({}),
        de = n(640),
        be = n.n(de),
        pe = n(925),
        fe = n.n(pe),
        me = function (e) {
          var t = e.label,
            n = e.value,
            i = e.onChange,
            r = e.disabled;
          return Object(Z.jsxs)("div", {
            className: fe.a.pnlOption,
            children: [
              Object(Z.jsx)(se.a, {
                disabled: r,
                className: fe.a.radioGroup,
                classes: { radio: { root: fe.a.radio } },
                topLabel: t,
                name: "limbo_on_".concat(t),
                labels: [
                  "Change Bet By (%)",
                  "Reset to Base Bet",
                  "Stop Betting",
                ],
                values: [ue.CHANGE_BET_BY, ue.RESET, ue.STOP],
                value: n.variant,
                onChange: function (e) {
                  i(
                    Object(h.a)(
                      Object(h.a)({}, n),
                      {},
                      { variant: Number(e.target.value) }
                    )
                  );
                },
                nestedComponents: {
                  1: Object(Z.jsx)(ie.a, {
                    classes: { root: be.a.input },
                    onChange: function (e) {
                      i(
                        Object(h.a)(
                          Object(h.a)({}, n),
                          {},
                          { betPercent: String(ae(e.target.value)) }
                        )
                      );
                    },
                    value: n.betPercent,
                    onBlur: function (e) {
                      var t = Number(e.target.value);
                      i(
                        Object(h.a)(
                          Object(h.a)({}, n),
                          {},
                          { betPercent: String(Object(le.a)(t, 2)) }
                        )
                      );
                    },
                    disabled: r,
                  }),
                },
              }),
              Object(Z.jsx)(ce.a, {
                disabled: r,
                className: fe.a.checkbox,
                classes: { label: fe.a.checkboxLabel },
                label: "Change Payout To:",
                onChange: function () {
                  i(
                    Object(h.a)(
                      Object(h.a)({}, n),
                      {},
                      { isCashout: !n.isCashout }
                    )
                  );
                },
                checked: n.isCashout,
              }),
              Object(Z.jsx)(ie.a, {
                disabled: r,
                onChange: function (e) {
                  i(
                    Object(h.a)(
                      Object(h.a)({}, n),
                      {},
                      { cashout: String(ae(e.target.value)) }
                    )
                  );
                },
                value: n.cashout,
                onBlur: function (e) {
                  var t = Number(e.target.value);
                  i(
                    Object(h.a)(
                      Object(h.a)({}, n),
                      {},
                      { cashout: String(oe(String(t))) }
                    )
                  );
                },
                classes: { root: be.a.input },
              }),
            ],
          });
        },
        he = n(926),
        ve = n.n(he),
        je = function () {
          var e = z().manager,
            t = Object(f.j)().selectedCoin,
            n = q().isStarted,
            i = Object(d.useState)(e.panel.auto.operations),
            r = Object(o.a)(i, 2),
            a = r[0],
            s = r[1],
            c = Object(d.useState)(function () {
              var t = e.panel.auto.limits;
              return {
                numberOfBets: "" + t.numberOfBets,
                stopOnLoss: "" + t.stopOnLoss,
                stopOnWin: "" + t.stopOnWin,
              };
            }),
            l = Object(o.a)(c, 2),
            u = l[0],
            b = l[1],
            p = function (t, n) {
              var i = n.betPercent,
                r = n.cashout,
                a = n.isCashout,
                o = n.variant,
                s = e.panel.auto.operations;
              (s["win" === t ? "onWin" : "onLoss"] = {
                betPercent: Number(i),
                cashout: Number(r),
                isCashout: a,
                variant: o,
              }),
                e.emitter.setAutoValues(s);
            },
            m = function (e, t) {
              var n = (function (e) {
                var t = (e = e.replace(",", ".")).match(re);
                return t && t[0] ? t[0] : "";
              })("" + t);
              b(function (t) {
                return Object(h.a)(
                  Object(h.a)({}, t),
                  {},
                  Object(ne.a)({}, e, n)
                );
              });
            },
            v = function (t, n) {
              var i = 0;
              (i = "numberOfBets" === t ? Math.floor(+n) : +(+n).toFixed(8)),
                e.emitter.setAutoLimits(
                  Object(h.a)(
                    Object(h.a)({}, e.panel.auto.limits),
                    {},
                    Object(ne.a)({}, t, i)
                  )
                );
            };
          return (
            Object(d.useEffect)(function () {
              var t = e.emitter.autoValuesListener(function (e) {
                  s(Object(h.a)({}, e));
                }),
                n = e.emitter.autoLimitsListener(function (e) {
                  var t = e.numberOfBets,
                    n = e.stopOnLoss,
                    i = e.stopOnWin;
                  b({
                    numberOfBets: "" + t,
                    stopOnLoss: n.toFixed(8),
                    stopOnWin: i.toFixed(8),
                  });
                });
              return (
                e.emitter.setAutoLimits(e.panel.auto.limits),
                function () {
                  t(), n();
                }
              );
            }, []),
            Object(d.useEffect)(
              function () {
                e.emitter.setAutoLimits(e.panel.auto.limits);
              },
              [t]
            ),
            Object(Z.jsxs)("div", {
              className: ve.a.auto,
              children: [
                Object(Z.jsxs)("div", {
                  className: ve.a.pnlOptions,
                  children: [
                    Object(Z.jsx)(me, {
                      onChange: function (e) {
                        return p("win", e);
                      },
                      value: a.onWin,
                      label: "ON WIN",
                      disabled: n,
                    }),
                    Object(Z.jsx)(me, {
                      onChange: function (e) {
                        return p("loss", e);
                      },
                      value: a.onLoss,
                      label: "ON LOSS",
                      disabled: n,
                    }),
                  ],
                }),
                Object(Z.jsxs)("div", {
                  className: ve.a.inputGroup,
                  children: [
                    Object(Z.jsx)(ie.a, {
                      classes: { root: be.a.input },
                      topLabel: "Number Of Bets",
                      onChange: function (e) {
                        var t,
                          n = e.target;
                        return (t = n.value), m("numberOfBets", t);
                      },
                      onBlur: function (e) {
                        var t = e.target;
                        return v("numberOfBets", t.value);
                      },
                      value: u.numberOfBets,
                      disabled: n,
                    }),
                    Object(Z.jsx)(ie.a, {
                      classes: { root: be.a.input },
                      topLabel: "Stop on Profit",
                      onChange: function (e) {
                        var t,
                          n = e.target;
                        return (t = n.value), m("stopOnWin", t);
                      },
                      onBlur: function (e) {
                        var t = e.target;
                        return v("stopOnWin", t.value);
                      },
                      value: u.stopOnWin,
                      disabled: n,
                    }),
                    Object(Z.jsx)(ie.a, {
                      classes: { root: be.a.input },
                      topLabel: "Stop on Loss",
                      onChange: function (e) {
                        var t,
                          n = e.target;
                        return (t = n.value), m("stopOnLoss", t);
                      },
                      onBlur: function (e) {
                        var t = e.target;
                        return v("stopOnLoss", t.value);
                      },
                      value: u.stopOnLoss,
                      disabled: n,
                    }),
                  ],
                }),
              ],
            })
          );
        },
        ge = n(927),
        Oe = n.n(ge),
        xe = function (e) {
          var t = e.isMobile,
            n = Object(u.b)("limbo"),
            i = n.data,
            r = void 0 === i ? [] : i,
            a = n.allowedCoins,
            b = void 0 === a ? [] : a,
            p = Object(l.useLocalStorage)("access-token"),
            f = Object(o.a)(p, 1)[0],
            m = q().isStarted,
            h = (function () {
              var e = z().manager,
                t = Object(d.useState)(!1),
                n = Object(o.a)(t, 2),
                i = n[0],
                r = n[1];
              return (
                Object(d.useEffect)(function () {
                  var t = e.emitter.autoListener(function (e) {
                    var t = e.isOpen;
                    r(t);
                  });
                  return function () {
                    t();
                  };
                }, []),
                {
                  isAuto: i,
                  setAuto: function (t) {
                    e.emitter.setAuto({ isOpen: t, isStarted: !1 });
                  },
                }
              );
            })(),
            v = h.isAuto,
            j = h.setAuto,
            g = z().manager,
            O = function () {
              f
                ? g.onClick()
                : y.b.error({ message: "You need to log in", timeOut: 2e3 });
            };
          Object(X.a)({ callbackSpace: O });
          return Object(Z.jsxs)("div", {
            className: Oe.a.limboControllerWrapper,
            children: [
              Object(Z.jsx)(J.a, {
                onClick: O,
                className: Object(s.a)(Oe.a.purpleButton, Oe.a.betButton),
                children: v ? (m ? "STOP AUTOBET" : "START AUTOBET") : "BET",
              }),
              Object(Z.jsx)(K.a, {
                toggle: v,
                setToggle: j,
                className: Oe.a.limboToggle,
                firstWord: c.j.toggleWords.manual,
                secondWord: c.j.toggleWords.auto,
              }),
              Object(Z.jsxs)("div", {
                className: Oe.a.controller,
                children: [
                  Object(Z.jsx)(Y.a, { game: "limbo", limits: r }),
                  Object(Z.jsx)(te, {
                    isMobile: t,
                    gameLimits: r,
                    allowedCoins: b,
                  }),
                  v && Object(Z.jsx)(je, {}),
                ],
              }),
            ],
          });
        },
        _e = n(928),
        ye = n.n(_e),
        we = Number(ye.a.rocketAnimationTime),
        Ne = Number(ye.a.fireAnimationTime),
        Ce = [],
        Me = function (e) {
          var t = e.isStarted,
            n = e.setNoStarted,
            i = Object(d.useState)(!1),
            r = Object(o.a)(i, 2),
            a = r[0],
            c = r[1];
          return (
            Object(d.useEffect)(
              function () {
                if (t) {
                  var e = setTimeout(function () {
                    c(!0);
                    var e = setTimeout(function () {
                      n(), c(!1);
                    }, Ne);
                    Ce.push(e);
                  }, we);
                  Ce.push(e);
                }
              },
              [t]
            ),
            Object(d.useEffect)(function () {
              return function () {
                Ce.forEach(function (e) {
                  return clearTimeout(e);
                });
              };
            }, []),
            Object(Z.jsxs)(Z.Fragment, {
              children: [
                Object(Z.jsx)("img", {
                  className: Object(s.a)(
                    ye.a.rocket,
                    Object(ne.a)({}, ye.a.flying, t)
                  ),
                  src: "/images/limbo/rocket.webp",
                  alt: "ship",
                }),
                Object(Z.jsx)("img", {
                  className: Object(s.a)(
                    ye.a.fire,
                    Object(ne.a)({}, ye.a.burning, t)
                  ),
                  src: "/images/limbo/fire.svg",
                  alt: "fire",
                }),
                Object(Z.jsx)("div", {
                  className: ""
                    .concat(ye.a.explosion, " ")
                    .concat(a ? ye.a.burn : ye.a.noBurn),
                }),
                Object(Z.jsx)("div", {
                  className: Object(s.a)(
                    ye.a.shadow,
                    Object(ne.a)({}, ye.a.flyShadow, t)
                  ),
                }),
              ],
            })
          );
        },
        ke = n(929),
        Ee = n.n(ke),
        Le = function (e) {
          var t = e.value,
            n = e.formatValue,
            i = e.duration,
            r = e.begin;
          return Object(Z.jsx)(Ee.a, {
            value: Number(t),
            formatValue: n,
            duration: i,
            begin: r,
          });
        },
        He = n(930),
        Se = n.n(He),
        Ae = function (e) {
          var t = e.rollerState,
            n = Math.max(Number(t.value), 1),
            i = Object(d.useState)("1.00"),
            r = Object(o.a)(i, 2),
            a = r[0],
            c = r[1];
          return (
            Object(d.useEffect)(
              function () {
                t.value !== a && c("1.00");
              },
              [t.value]
            ),
            Object(Z.jsxs)("div", {
              className: Se.a.root,
              children: [
                Object(Z.jsx)("span", {
                  className: Se.a.title,
                  children: "multiplier",
                }),
                Object(Z.jsx)("h1", {
                  className: Object(s.a)(
                    Se.a.payText,
                    Object(ne.a)({}, Se.a.lose, !t.isWin)
                  ),
                  children: t.isAuto
                    ? Object(Z.jsxs)("span", { children: [n.toFixed(2), "x"] })
                    : Object(Z.jsx)(Le, {
                        value: Number(a),
                        formatValue: function (e) {
                          return e <= 1
                            ? (c(n.toFixed(2)), "1.00x")
                            : "".concat(e.toFixed(2), "x");
                        },
                        duration: we,
                        begin: function () {
                          c(n.toFixed(2));
                        },
                      }),
                }),
              ],
            })
          );
        },
        Fe = n(931),
        We = n.n(Fe),
        Pe = function () {
          var e = z().manager,
            t = Object(d.useState)(!1),
            n = Object(o.a)(t, 2),
            i = n[0],
            r = n[1],
            a = Object(d.useState)({ value: "1.00", isWin: !0, isAuto: !1 }),
            s = Object(o.a)(a, 2),
            c = s[0],
            l = s[1];
          return (
            Object(d.useEffect)(function () {
              var t = e.emitter.rocketListener(function (e) {
                var t = e.isAuto,
                  n = e.isWin,
                  i = e.value;
                l({ isAuto: t, isWin: n, value: i }), r(!0);
              });
              return function () {
                return t();
              };
            }, []),
            Object(Z.jsxs)("div", {
              className: We.a.root,
              children: [
                Object(Z.jsx)(Ae, { rollerState: c }),
                Object(Z.jsx)(Me, {
                  isStarted: !c.isAuto && i,
                  setNoStarted: function () {
                    return r(!1);
                  },
                }),
              ],
            })
          );
        },
        Te = n(54),
        Be = n(932),
        Ie = n.n(Be),
        Re = function () {
          var e = Object(Te.a)(c.i);
          return Object(Z.jsx)("div", {
            className: Ie.a.limboGameWrapper,
            children: Object(Z.jsxs)(U, {
              children: [
                Object(Z.jsx)(Pe, {}),
                Object(Z.jsx)(xe, { isMobile: e }),
              ],
            }),
          });
        },
        De = n(933),
        Ge = n.n(De),
        Ve = function () {
          return Object(Z.jsxs)(f.f, {
            game: "limbo",
            children: [
              Object(Z.jsxs)(i.a, {
                children: [
                  Object(Z.jsx)("title", { children: "Limbo | FaucetPay" }),
                  Object(Z.jsx)("meta", { name: "title", content: "Limbo" }),
                  Object(Z.jsx)("meta", {
                    name: "description",
                    content:
                      "Select your cashout point and let the rocket fly. FaucetPay limbo game comes with a new opportunity to get more out of your portfolio. ",
                  }),
                  Object(Z.jsx)("meta", {
                    name: "keywords",
                    content:
                      "FaucetPay Limbo, Crypto Limbo, crypto gambling, Free gambling, Bitcoin Limbo, Doge Limbo, BNB Limbo, wagering crypto, free wager crypto, no deposit bonus, ",
                  }),
                ],
              }),
              Object(Z.jsxs)("main", {
                className: Ge.a.limboPageWrapper,
                children: [Object(Z.jsx)(Re, {}), Object(Z.jsx)(a.c, {})],
              }),
            ],
          });
        };
      t.default = Object(r.a)(Ve);
    },
    140: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var i = n(16),
        r = n(17),
        a = n(3),
        o = n(15),
        s = n(128),
        c = n(156),
        l = n(141),
        u = n.n(l),
        d = n(0),
        b = function (e, t) {
          return e > t ? ">" : "<";
        },
        p = function (e) {
          var t,
            n = e.children,
            l = e.index,
            p = Object(a.useRef)(null),
            f = Object(a.useState)({ index: l, direction: ">", isAnimate: !1 }),
            m = Object(r.a)(f, 2),
            h = m[0],
            v = m[1],
            j = Object(a.useRef)(l),
            g = Object(a.useRef)(null),
            O = Object(a.useMemo)(function () {
              return Object(c.a)();
            }, []),
            x = O.clearTimeouts,
            _ = O.pushTimeout,
            y = a.Children.map(n, function (e) {
              return e;
            });
          return (
            Object(a.useEffect)(
              function () {
                (j.current !== l || h.isAnimate) &&
                  (x(),
                  h.isAnimate
                    ? (g.current = l)
                    : v({ index: l, direction: b(l, h.index), isAnimate: !0 }));
              },
              [l]
            ),
            Object(a.useEffect)(function () {
              return x;
            }, []),
            y
              ? Object(d.jsx)("div", {
                  className: Object(o.a)(u.a.wrapper),
                  ref: p,
                  children: Object(d.jsx)("div", {
                    onAnimationEnd: function () {
                      v(function (e) {
                        return Object(i.a)(
                          Object(i.a)({}, e),
                          {},
                          { isAnimate: !1 }
                        );
                      }),
                        (j.current = l),
                        null !== g.current &&
                          _(function () {
                            v(function (e) {
                              var t = g.current;
                              return (
                                (g.current = null),
                                (j.current = e.index),
                                {
                                  isAnimate: !0,
                                  direction: b(t, e.index),
                                  index: t,
                                }
                              );
                            });
                          }, 0);
                    },
                    className: Object(o.a)(
                      u.a.root,
                      h.isAnimate && (">" === h.direction ? u.a.next : u.a.prev)
                    ),
                    children: h.isAnimate
                      ? Object(s.a)(2, function (e) {
                          var t,
                            n = h.direction,
                            i = h.index,
                            r = 0,
                            a = !1;
                          ">" === n
                            ? ((r = 0 === e ? j.current : i), e || (a = !0))
                            : ((r = 0 === e ? i : j.current), e && (a = !0));
                          var o = y[r];
                          return Object(d.jsx)(
                            "div",
                            {
                              className: u.a.element,
                              style: {
                                maxWidth:
                                  null === (t = p.current) || void 0 === t
                                    ? void 0
                                    : t.offsetWidth,
                              },
                              children: o,
                            },
                            ""
                              .concat(r, "_")
                              .concat(y.length)
                              .concat(a ? "_animated" : "")
                          );
                        })
                      : Object(d.jsx)(
                          "div",
                          {
                            className: u.a.element,
                            style: h.isAnimate
                              ? {
                                  maxWidth:
                                    null === (t = p.current) || void 0 === t
                                      ? void 0
                                      : t.offsetWidth,
                                }
                              : void 0,
                            children: y[h.index],
                          },
                          "".concat(h.index, "_").concat(y.length)
                        ),
                  }),
                })
              : null
          );
        };
    },
    141: function (e, t, n) {
      e.exports = {
        wrapper: "style_wrapper__3-xIC",
        root: "style_root__1uxDh",
        element: "style_element__1N6cL",
        prev: "style_prev__3J7BA",
        next: "style_next__1j3Tr",
        move: "style_move__10fwg",
      };
    },
    142: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        statisticButton: "style_statisticButton__390BE",
        statisticButton_active: "style_statisticButton_active__PN_x4",
      };
    },
    143: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        root: "style_root__2v6eT",
        buttonGroup: "style_buttonGroup__2V9FT",
        fairnessBtn: "style_fairnessBtn__1TlQ3",
      };
    },
    144: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        wageringWrapper: "style_wageringWrapper__2FUqC",
        title: "style_title__1X_0l",
        description: "style_description__3-GjB",
      };
    },
    145: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        gameCardWrapper: "style_gameCardWrapper__rjKHL",
        title: "style_title__kwSiq",
        dataWrapper: "style_dataWrapper__5xOS2",
      };
    },
    146: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        root: "style_root__2joxI",
      };
    },
    147: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        tableWrapper: "style_tableWrapper__1u2h3",
        secondColumn: "style_secondColumn__1C-8T",
        infoWrapper: "style_infoWrapper__2uZOn",
        medalWrapper: "style_medalWrapper__2XEBo",
        medal: "style_medal__1PdXD",
        previousButton: "style_previousButton__1QotG",
        amount: "style_amount__1WZ5o",
        valueElement: "style_valueElement__1GlJC",
        tableTitle: "style_tableTitle__2-p7B",
        tableHeader: "style_tableHeader__K0cIe",
        showMoreButton: "style_showMoreButton__2aXfq",
        titleWrapper: "style_titleWrapper__1mofW",
        dialog: "style_dialog__2kWMR",
        modalTitle: "style_modalTitle__2lLMH",
        modalDate: "style_modalDate__2DXPV",
        modalTableWrapper: "style_modalTableWrapper__3Ctqi",
      };
    },
    148: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        cellsRow: "style_cellsRow__FmivY",
        cell: "style_cell__1UYmn",
        tableText: "style_tableText__xGOM4",
        header: "style_header__3jxW5",
        row: "style_row__1DqXl",
        coinImg: "style_coinImg__1XwKE",
        coinCell: "style_coinCell__2udCH",
        win: "style_win__1-pwK",
        loss: "style_loss__3PWO_",
      };
    },
    149: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        gameStatisticWrapper: "gameStatistic_gameStatisticWrapper__2SfVQ",
        swipWrapper: "gameStatistic_swipWrapper__ILJla",
      };
    },
    152: function (e, t, n) {
      e.exports = {
        radio: "style_radio__sJfY6",
        radioPressed: "style_radioPressed__1ng7H",
        input: "style_input__3MU2L",
        round: "style_round__3AdBI",
        roundChecked: "style_roundChecked__jLing",
        root: "style_root__3naRd",
        label: "style_label__1osXo",
        labelText: "style_labelText__33WhY",
      };
    },
    153: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        label: "style_label__dcrIG",
        radioGroup: "style_radioGroup__2sJDI",
        radioTopLabel: "style_radioTopLabel__15id8",
      };
    },
    165: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var i = n(20),
        r = n(43),
        a = n(3),
        o = ["disable"],
        s = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : [],
            n = arguments.length > 2 ? arguments[2] : void 0,
            s = Object(a.useRef)(null),
            c = Object(a.useCallback)(function (e) {
              e && (s.current = e);
            }, Object(r.a)(t));
          return (
            Object(a.useEffect)(
              function () {
                var t = n || {},
                  r = t.disable,
                  a = void 0 !== r && r,
                  c = Object(i.a)(t, o);
                if (s.current && s.current instanceof Element && !a) {
                  var l = new ResizeObserver(e);
                  return (
                    l.observe(s.current, c),
                    function () {
                      s.current && l.unobserve(s.current);
                    }
                  );
                }
              },
              [c, s]
            ),
            { elementRef: s, setNode: c }
          );
        };
    },
    166: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var i = n(3),
        r = n(246);
      function a() {
        return Object(i.useContext)(r.a);
      }
    },
    181: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        root: "style_root__1QAix",
        button: "style_button__ptCvR",
        darkButton: "style_darkButton__2d9hy",
      };
    },
    182: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return O;
      });
      var i = n(17),
        r = n(3),
        a = n(15),
        o = n(101),
        s = n(31),
        c = n(16),
        l = n(20),
        u = n(18),
        d = n(0),
        b = ["children"],
        p = function (e) {
          var t = e.children,
            n = Object(l.a)(e, b);
          return Object(d.jsx)(
            u.a,
            Object(c.a)(Object(c.a)({}, n), {}, { children: t })
          );
        },
        f = Object(r.lazy)(function () {
          return Object(s.a)(n.e(117).then(n.bind(null, 392)));
        }),
        m = Object(r.lazy)(function () {
          return Object(s.a)(n.e(118).then(n.bind(null, 1439)));
        }),
        h = Object(r.lazy)(function () {
          return Object(s.a)(n.e(110).then(n.bind(null, 1440)));
        }),
        v = n(110),
        j = n(181),
        g = n.n(j),
        O = function (e) {
          var t = e.game,
            n = e.limits,
            s = e.dark,
            c = Object(r.useState)(!1),
            l = Object(i.a)(c, 2),
            u = l[0],
            b = l[1],
            j = Object(r.useState)(!1),
            O = Object(i.a)(j, 2),
            x = O[0],
            _ = O[1],
            y = Object(r.useState)(!1),
            w = Object(i.a)(y, 2),
            N = w[0],
            C = w[1],
            M = Object(o.b)(n ? null : t).data,
            k = [
              {
                Icon: v.c,
                callBack: function () {
                  return b(!u);
                },
              },
              {
                Icon: v.d,
                callBack: function () {
                  return _(!x);
                },
              },
              {
                Icon: v.g,
                callBack: function () {
                  return C(!N);
                },
              },
            ];
          return Object(d.jsxs)(d.Fragment, {
            children: [
              Object(d.jsx)("div", {
                className: g.a.root,
                children: k.map(function (e, i) {
                  var r = e.Icon,
                    o = e.callBack;
                  return 2 !== i || t || n
                    ? Object(d.jsx)(
                        p,
                        {
                          className: Object(a.a)(
                            g.a.button,
                            s && g.a.darkButton
                          ),
                          onClick: o,
                          children: Object(d.jsx)(r, {}),
                        },
                        "button_#".concat(i)
                      )
                    : null;
                }),
              }),
              u
                ? Object(d.jsx)(r.Suspense, {
                    fallback: null,
                    children: Object(d.jsx)(m, {
                      isOpen: u,
                      handleClose: function () {
                        return b(!1);
                      },
                    }),
                  })
                : null,
              x
                ? Object(d.jsx)(r.Suspense, {
                    fallback: null,
                    children: Object(d.jsx)(h, {
                      isOpen: x,
                      onClose: function () {
                        return _(!1);
                      },
                    }),
                  })
                : null,
              N
                ? Object(d.jsx)(r.Suspense, {
                    fallback: null,
                    children: Object(d.jsx)(f, {
                      isOpen: N,
                      handleClose: function () {
                        return C(!1);
                      },
                      limits: n || M || [],
                    }),
                  })
                : null,
            ],
          });
        };
    },
    26: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var i = n(16),
        r = n(20),
        a = n(51),
        o = n.n(a),
        s = n(0),
        c = ["coin", "alt", "className"],
        l = function (e) {
          var t = e.coin,
            n = e.alt,
            a = e.className,
            l = Object(r.a)(e, c);
          return t
            ? "usd" === (null === t || void 0 === t ? void 0 : t.toLowerCase())
              ? Object(s.jsx)("p", { className: o.a.usd, children: "USD" })
              : Object(s.jsx)(
                  "img",
                  Object(i.a)(
                    Object(i.a)(
                      {
                        src: "https://cdn.faucetpay.io/coins/".concat(
                          (t || "").toLowerCase(),
                          ".png"
                        ),
                        alt: n || t,
                      },
                      l
                    ),
                    {},
                    { className: a }
                  )
                )
            : null;
        };
    },
    27: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var i = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
        if (!e && 0 !== e) return "".concat(e);
        var n = Number(e).toFixed(t),
          i = n.match(/^[^.]+?(?=\.0*$)|^[^.]+?\..*?(?=0*$)|^[^.]*$/g);
        return i ? i[0] : n;
      };
    },
    28: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "a", function () {
          return r;
        });
      var i = (function (e) {
          return (e[(e.TOP = 0)] = "TOP"), (e[(e.BOTTOM = 1)] = "BOTTOM"), e;
        })({}),
        r = (function (e) {
          return (
            (e[(e.CENTER = 0)] = "CENTER"),
            (e[(e.LEFT = 1)] = "LEFT"),
            (e[(e.RIGHT = 2)] = "RIGHT"),
            e
          );
        })({});
    },
    280: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        alert: "style_alert__18G4k",
        buttons: "style_buttons__1dWS5",
      };
    },
    281: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        gameButton: "styles_gameButton__2bqY_",
      };
    },
    297: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var i = n(16),
        r = n(20),
        a = (n(3), n(15)),
        o = n(18),
        s = n(281),
        c = n.n(s),
        l = n(0),
        u = ["children"],
        d = function (e) {
          var t = e.children,
            n = Object(r.a)(e, u);
          return Object(l.jsx)(
            o.a,
            Object(i.a)(
              Object(i.a)({}, n),
              {},
              {
                className: Object(a.a)(c.a.gameButton, n.className),
                children: t,
              }
            )
          );
        };
    },
    299: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var i = n(50),
        r = n(18),
        a = n(280),
        o = n.n(a),
        s = n(0),
        c = function (e) {
          var t = e.isOpen,
            n = e.onClose,
            a = e.warningMessage,
            c = void 0 === a ? "Are you sure?" : a,
            l = e.callback;
          return Object(s.jsx)(i.a, {
            onClose: n,
            isOpen: t,
            classes: { dialog: o.a.alert },
            children: Object(s.jsxs)("div", {
              children: [
                Object(s.jsx)("h1", { children: c }),
                Object(s.jsxs)("div", {
                  className: o.a.buttons,
                  children: [
                    Object(s.jsx)(r.a, {
                      onClick: function () {
                        l(), n();
                      },
                      children: "Yes",
                    }),
                    Object(s.jsx)(r.a, { onClick: n, children: "No" }),
                  ],
                }),
              ],
            }),
          });
        };
    },
    327: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        formWrapper: "style_formWrapper__2lNzV",
        chanceInput: "style_chanceInput__WEHz4",
        coinSelect: "style_coinSelect__3x1Uf",
        betAmount: "style_betAmount__2UFo_",
        profit: "style_profit__3chLa",
        payoutInput: "style_payoutInput__22pc3",
        payout: "style_payout__1oMY6",
        chance: "style_chance__3RW4z",
        input: "style_input__1r4z7",
      };
    },
    33: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return m;
      }),
        n.d(t, "a", function () {
          return h;
        });
      var i = n(19),
        r = n(17),
        a = n(3),
        o = n(1467),
        s = n(15),
        c = n(47),
        l = n(36),
        u = n(35),
        d = n(22),
        b = n(62),
        p = n.n(b),
        f = n(0),
        m = Object(a.createContext)({ setValue: function () {}, value: "" }),
        h = function (e) {
          var t = e.children,
            n = e.onChange,
            b = e.onCloseCallback,
            h = e.value,
            v = e.className,
            j = e.frontComponent,
            g = e.classes,
            O = e.disabled,
            x = e.topLabel,
            _ = e.errors,
            y = e.optionsScrollCallback,
            w = e.optionsWidth,
            N = e.optionsPosition,
            C = Object(a.useState)(!1),
            M = Object(r.a)(C, 2),
            k = M[0],
            E = M[1],
            L = Object(a.useRef)({
              left: 0,
              top: 0,
              selectHeight: 0,
              selectWidth: 0,
            }),
            H = Object(a.useRef)(null),
            S = function () {
              E(!1), b && b();
            };
          return (
            Object(c.a)("scroll", S, document),
            Object(a.useEffect)(
              function () {
                if (H.current && y && k) {
                  var e = Object(o.a)(H.current, "scroll").subscribe(y);
                  return function () {
                    e.unsubscribe();
                  };
                }
              },
              [k]
            ),
            Object(f.jsxs)("div", {
              className: Object(s.a)(
                v,
                p.a.select,
                null === g || void 0 === g ? void 0 : g.root
              ),
              onClick: function (e) {
                if (!O) {
                  var t = e.currentTarget.getBoundingClientRect(),
                    n = t.top,
                    i = t.left,
                    r = t.height,
                    a = t.width;
                  (L.current = {
                    top:
                      n +
                      (null !== N && void 0 !== N && N.top
                        ? null === N || void 0 === N
                          ? void 0
                          : N.top
                        : 0),
                    left:
                      i +
                      (null !== N && void 0 !== N && N.left
                        ? null === N || void 0 === N
                          ? void 0
                          : N.left
                        : 0),
                    selectHeight: r,
                    selectWidth: a,
                  }),
                    E(!0);
                }
              },
              children: [
                x &&
                  Object(f.jsx)("label", {
                    className: Object(s.a)(
                      p.a.topLabel,
                      null === g || void 0 === g ? void 0 : g.topLabel
                    ),
                    children: x,
                  }),
                _ &&
                  Object(f.jsx)(l.a, {
                    className: null === g || void 0 === g ? void 0 : g.error,
                    errors: _,
                  }),
                j ||
                  Object(f.jsx)("div", {
                    className: p.a.labelWrapper,
                    children: Object(f.jsx)("span", {
                      className: null === g || void 0 === g ? void 0 : g.label,
                      children: h,
                    }),
                  }),
                Object(f.jsx)(d.p, {
                  className: Object(s.a)(
                    p.a.arrow,
                    null === g || void 0 === g ? void 0 : g.arrow,
                    Object(i.a)({}, p.a.arrowOpen, k)
                  ),
                }),
                Object(f.jsx)(m.Provider, {
                  value: {
                    setValue: function (e) {
                      n(e), S();
                    },
                    value: h,
                  },
                  children: k
                    ? Object(f.jsx)(u.a, {
                        curtainOnClick: S,
                        children: Object(f.jsx)("div", {
                          ref: function (e) {
                            e &&
                              (!(function (e, t, n, i) {
                                var r,
                                  a,
                                  o = t.top + t.selectHeight,
                                  s = e.offsetHeight,
                                  c = window.innerHeight - o,
                                  l = o;
                                c < s && (l -= s - c + 10),
                                  (e.style.top = "".concat(
                                    null !==
                                      (r =
                                        null === i || void 0 === i
                                          ? void 0
                                          : i.top) && void 0 !== r
                                      ? r
                                      : l,
                                    "px"
                                  )),
                                  (e.style.left = "".concat(
                                    null !==
                                      (a =
                                        null === i || void 0 === i
                                          ? void 0
                                          : i.left) && void 0 !== a
                                      ? a
                                      : t.left,
                                    "px"
                                  )),
                                  (e.style.width = "".concat(
                                    null !== n && void 0 !== n
                                      ? n
                                      : t.selectWidth,
                                    "px"
                                  ));
                              })(e, L.current, w),
                              (H.current = e));
                          },
                          className: Object(s.a)(
                            p.a.optionContainer,
                            null === g || void 0 === g ? void 0 : g.options
                          ),
                          children: a.Children.count(t)
                            ? t
                            : Object(f.jsx)("div", {
                                className: Object(s.a)(
                                  p.a.noOptionsItem,
                                  null === g || void 0 === g
                                    ? void 0
                                    : g.noOptionItem
                                ),
                                children: "No matches found",
                              }),
                        }),
                      })
                    : null,
                }),
              ],
            })
          );
        };
    },
    35: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var i = n(11),
        r = n(15),
        a = n(44),
        o = n(47),
        s = n(40),
        c = n(45),
        l = n.n(c),
        u = n(0),
        d = Object(s.a)("key"),
        b = function (e) {
          e.stopPropagation();
        },
        p = Object(a.a)(),
        f = function (e) {
          var t = e.children,
            n = e.background,
            a = void 0 === n ? "transparent" : n,
            s = e.curtainOnClick,
            c = e.curtainOnMove,
            f = e.classes;
          return (
            Object(o.a)("keydown", function (e) {
              e.stopPropagation(),
                d(e) &&
                  "Escape" === (null === e || void 0 === e ? void 0 : e.key) &&
                  s &&
                  s();
            }),
            p
              ? Object(i.createPortal)(
                  Object(u.jsx)("div", {
                    className: Object(r.a)(
                      l.a.root,
                      null === f || void 0 === f ? void 0 : f.root
                    ),
                    onClick: b,
                    children: Object(u.jsxs)("div", {
                      className: Object(r.a)(
                        l.a.container,
                        null === f || void 0 === f ? void 0 : f.container
                      ),
                      children: [
                        Object(u.jsx)("div", {
                          onPointerMove: c,
                          onClick: function () {
                            s && s();
                          },
                          className: Object(r.a)(
                            l.a.curtain,
                            "transparent" === a
                              ? l.a.curtain__transparent
                              : l.a.curtain__dark,
                            null === f || void 0 === f ? void 0 : f.curtain
                          ),
                        }),
                        t,
                      ],
                    }),
                  }),
                  p
                )
              : null
          );
        };
    },
    36: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var i = n(15),
        r = n(0),
        a = function (e) {
          var t = e.errors,
            n = e.className;
          return Object(r.jsx)("span", {
            className: Object(i.a)("inputErrorText", n),
            children: Array.isArray(t) ? t.join(", ") : t,
          });
        };
    },
    361: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return g;
      });
      var i = n(16),
        r = n(17),
        a = n(3),
        o = n(15),
        s = n(41),
        c = n(75),
        l = n(108),
        u = n(129),
        d = n(27),
        b = n(165),
        p = n(21),
        f = n(299),
        m = n(327),
        h = n.n(m),
        v = n(0),
        j = {
          bet: "Bet Amount",
          profit: "Profit on win",
          payout: "Payout",
          chance: "Win Chance",
        },
        g = function (e) {
          var t = e.bet,
            n = e.profit,
            m = e.payout,
            g = e.chance,
            O = void 0 === g ? "0" : g,
            x = e.setFieldValue,
            _ = e.blurFieldValue,
            y = e.params,
            w = e.labels,
            N = e.limits,
            C = e.disabled,
            M = e.coinsFilter,
            k = e.classes,
            E = Object(a.useState)(!1),
            L = Object(r.a)(E, 2),
            H = L[0],
            S = L[1],
            A = Object(p.j)().selectedCoin,
            F = Object(i.a)(Object(i.a)({}, j), w),
            W = function (e) {
              return x("bet", "".concat(e));
            },
            P = function (e) {
              return x("chance", "".concat(e));
            },
            T = function (e) {
              return x("payout", "".concat(e));
            },
            B = function (e) {
              var t = Number(e),
                n = N || {},
                i = n.max,
                r = void 0 === i ? t : i,
                a = n.min,
                o = Math.min(
                  (null === A || void 0 === A ? void 0 : A.balance) || r,
                  r
                );
              return Object(d.a)(Object(u.a)(t, a || t, o));
            },
            I = function () {
              var e = t / 2;
              _ ? _("bet", B(e)) : W(B(e));
            },
            R = function () {
              var e = 2 * t;
              _ ? _("bet", B(e)) : W(B(e));
            };
          Object(a.useEffect)(
            function () {
              N && (_ ? _("bet", B(t)) : W(B(t)));
            },
            [N]
          ),
            Object(l.a)({ callbackKeyA: I, callbackKeyS: R });
          var D = Object(b.a)(function (e) {
            var t = Object(r.a)(e, 1)[0],
              n = t.contentRect.width,
              i = t.target;
            i.style.gridTemplateAreas =
              n < 680
                ? '"coinSelect coinSelect coinSelect coinSelect coinSelect coinSelect"\n        "betAmount betAmount betAmount betAmount betAmount betAmount"\n        "profitOnWin profitOnWin payout payout opportunity opportunity"'
                : "";
          }, []).setNode;
          return Object(v.jsxs)("div", {
            className: h.a.formWrapper,
            ref: D,
            children: [
              Object(v.jsx)(f.a, {
                isOpen: H,
                onClose: function () {
                  S(!1);
                },
                callback: function () {
                  var e = (null === N || void 0 === N ? void 0 : N.max) || "1";
                  _ ? _("bet", B(e)) : W(B(e));
                },
              }),
              Object(v.jsx)(c.a, {
                coinsFilter: M,
                className: h.a.coinSelect,
                isEnableBalanceAnimation: !0,
                classes: null === k || void 0 === k ? void 0 : k.coinSelect,
              }),
              Object(v.jsx)(s.a, {
                disabled: C,
                onChange: function (e) {
                  var t = e.target;
                  return W(t.value);
                },
                onBlur: function (e) {
                  return _ ? _("bet", B(e.target.value)) : W(B(e.target.value));
                },
                type: "number",
                topLabel: F.bet,
                value: t,
                className: h.a.betAmount,
                classes: { root: h.a.input },
                buttonHandlers: {
                  max: function () {
                    return S(!0);
                  },
                  min: function () {
                    var e =
                      (null === N || void 0 === N ? void 0 : N.min) || "0";
                    _ ? _("bet", B(e)) : W(B(e));
                  },
                  half: I,
                  double: R,
                },
              }),
              Object(v.jsx)(s.a, {
                topLabel: F.profit,
                className: h.a.profit,
                disabled: !0,
                value:
                  Number(n) >
                  ((null === N || void 0 === N ? void 0 : N.maxProfit) || 1 / 0)
                    ? (null === N || void 0 === N ? void 0 : N.maxProfit) ||
                      1 / 0
                    : Number(n).toFixed(8),
                classes: { root: h.a.input },
                type: "number",
              }),
              Object(v.jsx)(s.a, {
                disabled: C,
                onChange: function (e) {
                  var t = e.target;
                  return T(t.value);
                },
                onBlur: function (e) {
                  var t,
                    n = e.target;
                  return (
                    (t = n.value),
                    _ ? _("payout", "".concat(t)) : P(Object(d.a)(t, 2))
                  );
                },
                type: "number",
                topLabel: F.payout,
                value: m,
                classes: { root: Object(o.a)(h.a.payoutInput, h.a.input) },
                className: h.a.payout,
              }),
              Object(v.jsx)(s.a, {
                onChange: function (e) {
                  var t = e.target;
                  return P(t.value);
                },
                onBlur: function (e) {
                  var t,
                    n = e.target;
                  return (
                    (t = n.value),
                    _
                      ? _("chance", "".concat(t))
                      : T(
                          Object(d.a)(
                            t,
                            (null === y || void 0 === y
                              ? void 0
                              : y.payoutFixedValue) || 5
                          )
                        )
                  );
                },
                type: "number",
                classes: { root: Object(o.a)(h.a.chanceInput, h.a.input) },
                className: h.a.chance,
                topLabel: F.chance,
                value: O,
                disabled:
                  (null === y || void 0 === y ? void 0 : y.disableChance) || C,
              }),
            ],
          });
        };
    },
    37: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      }),
        n.d(t, "b", function () {
          return b;
        });
      var i = n(16),
        r = n(3),
        a = n(15),
        o = n(0),
        s = function (e, t) {
          return Object(o.jsx)(
            "svg",
            Object(i.a)(
              Object(i.a)(
                {
                  width: "38",
                  height: "38",
                  viewBox: "0 0 38 38",
                  stroke: "currentColor",
                  ref: t,
                },
                e
              ),
              {},
              {
                children: Object(o.jsx)("g", {
                  fill: "none",
                  fillRule: "evenodd",
                  children: Object(o.jsxs)("g", {
                    transform: "translate(1 1)",
                    strokeWidth: "2",
                    children: [
                      Object(o.jsx)("circle", {
                        strokeOpacity: ".5",
                        cx: "18",
                        cy: "18",
                        r: "18",
                      }),
                      Object(o.jsx)("path", {
                        d: "M36 18c0-9.94-8.06-18-18-18",
                        children: Object(o.jsx)("animateTransform", {
                          attributeName: "transform",
                          type: "rotate",
                          from: "0 18 18",
                          to: "360 18 18",
                          dur: "1s",
                          repeatCount: "indefinite",
                        }),
                      }),
                    ],
                  }),
                }),
              }
            )
          );
        },
        c = Object(r.forwardRef)(s),
        l = n(49),
        u = n.n(l),
        d = function (e) {
          var t = e.size,
            n = e.color,
            r = e.className,
            s = e.style,
            l = "number" === typeof t ? "".concat(t, "px") : t;
          return Object(o.jsx)(c, {
            id: "loader",
            className: Object(a.a)(u.a.loader, r),
            style: Object(i.a)(Object(i.a)({}, s), {}, { color: n }),
            ref: function (e) {
              if (e) {
                var t = e.getBoundingClientRect(),
                  n = t.height,
                  i = t.width,
                  r = Math.min(n, i);
                r || (r = 40),
                  (e.style.width = l || "".concat(r, "px")),
                  (e.style.height = l || "".concat(r, "px"));
              }
            },
          });
        },
        b = d;
    },
    40: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var i = function (e) {
        return function (t) {
          if (!t) return !1;
          var n = t[e];
          return !!n || 0 === n;
        };
      };
    },
    41: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return v;
      });
      var i = n(16),
        r = n(19),
        a = n(20),
        o = n(15),
        s = n(46),
        c = n(69),
        l = n(26),
        u = n(18),
        d = n(22),
        b = n(79),
        p = n.n(b),
        f = n(0),
        m = [
          "topLabel",
          "topValue",
          "coin",
          "coinIsLeftward",
          "withRefreshIcon",
          "withInfinityIcon",
          "textAdornment",
          "value",
          "showUSD",
          "warningModal",
          "className",
          "buttonHandlers",
          "classes",
          "buttonClass",
          "refreshIconClass",
          "onRefreshActionHandler",
          "type",
          "onChange",
          "onBlur",
          "topLabelClass",
          "allowNegativeNumbers",
        ],
        h = function (e, t) {
          var n = e.max,
            i = e.min,
            r = e.half,
            a = e.double;
          return Object(f.jsxs)(f.Fragment, {
            children: [
              i &&
                Object(f.jsx)(u.a, {
                  className: Object(o.a)("menuPurpleButton", t),
                  onClick: e.min,
                  children: "min",
                }),
              r &&
                Object(f.jsx)(u.a, {
                  className: Object(o.a)("menuPurpleButton", t),
                  onClick: e.half,
                  children: "1/2",
                }),
              a &&
                Object(f.jsx)(u.a, {
                  className: Object(o.a)("menuPurpleButton", t),
                  onClick: e.double,
                  children: "2x",
                }),
              n &&
                Object(f.jsx)(u.a, {
                  className: Object(o.a)("menuPurpleButton", t),
                  onClick: e.max,
                  children: "max",
                }),
            ],
          });
        },
        v = function (e) {
          var t = e.topLabel,
            n = e.topValue,
            u = e.coin,
            b = e.coinIsLeftward,
            v = e.withRefreshIcon,
            j = e.withInfinityIcon,
            g = e.textAdornment,
            O = e.value,
            x = e.showUSD,
            _ = e.warningModal,
            y = e.className,
            w = e.buttonHandlers,
            N = e.classes,
            C = e.buttonClass,
            M = e.refreshIconClass,
            k = e.onRefreshActionHandler,
            E = e.type,
            L = e.onChange,
            H = e.onBlur,
            S = e.topLabelClass,
            A = e.allowNegativeNumbers,
            F = void 0 !== A && A,
            W = Object(a.a)(e, m),
            P = u
              ? Object(r.a)(
                  {},
                  b ? "startAdornment" : "endAdornment",
                  Object(f.jsx)(c.a, {
                    position: b ? "start" : "end",
                    children: Object(f.jsx)(l.a, {
                      className: p.a.coin,
                      coin: u,
                      draggable: !1,
                    }),
                  })
                )
              : (!v && !j) || W.disabled
              ? null
              : {
                  endAdornment: Object(f.jsx)(c.a, {
                    position: "end",
                    children: v
                      ? Object(f.jsx)(d.G, {
                          onClick: k,
                          className: Object(o.a)(p.a.refreshIcon, M),
                        })
                      : Object(f.jsx)(d.x, {}),
                  }),
                },
            T =
              w && !W.disabled
                ? {
                    endAdornment: Object(f.jsx)(c.a, {
                      position: "end",
                      className: Object(o.a)(p.a.buttons, p.a.desktopButtons),
                      children: h(w, C),
                    }),
                  }
                : null,
            B = g
              ? {
                  startAdornment: Object(f.jsx)(c.a, {
                    className: p.a.textAdornment,
                    position: "start",
                    children: g,
                  }),
                }
              : null,
            I =
              "number" === E && L
                ? function (e) {
                    e.target.value = e.target.value.replace(",", ".").trim();
                    var t = Number(e.target.value);
                    (t || 0 === t || (F && "-" === e.target.value)) && L(e);
                  }
                : L;
          return Object(f.jsxs)("div", {
            className: Object(o.a)(p.a.root, y),
            children: [
              (t || n) &&
                Object(f.jsxs)("div", {
                  className: Object(o.a)(p.a.topLabel, S),
                  children: [
                    t
                      ? Object(f.jsx)("label", {
                          className: Object(o.a)(
                            null === N || void 0 === N ? void 0 : N.label,
                            Object(r.a)({}, p.a.fullWidth, !n)
                          ),
                          children: t,
                        })
                      : null,
                    n ? Object(f.jsx)("span", { children: n }) : null,
                  ],
                }),
              _ || null,
              Object(f.jsx)(
                s.a,
                Object(i.a)(
                  Object(i.a)(
                    Object(i.a)(
                      Object(i.a)(
                        {
                          classes: {
                            root: Object(o.a)(
                              p.a.input,
                              null === N || void 0 === N ? void 0 : N.root
                            ),
                            input:
                              null === N || void 0 === N ? void 0 : N.input,
                            errors:
                              null === N || void 0 === N ? void 0 : N.errors,
                            disabled: p.a.inputDisabled,
                          },
                          value: O && "".concat(x ? "$" : "").concat(O),
                          type: "text",
                          onChange: I,
                          onBlur: function (e) {
                            var t = String(O);
                            "number" === E &&
                              "-" === t.replace("$", "") &&
                              ((e.target.value = "0"), I && I(e)),
                              H && H(e);
                          },
                        },
                        P
                      ),
                      T
                    ),
                    B
                  ),
                  W
                )
              ),
              w && !W.disabled
                ? Object(f.jsx)("div", {
                    className: Object(o.a)(p.a.mobileButtons, p.a.buttons),
                    children: h(w, C),
                  })
                : null,
            ],
          });
        };
    },
    42: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return r;
        });
      var i = function (e, t) {
          var n, i;
          if (
            e.loading !== t.loading ||
            e.isMobile !== t.isMobile ||
            (null === (n = e.pagination) || void 0 === n
              ? void 0
              : n.pageAmount) !==
              (null === (i = t.pagination) || void 0 === i
                ? void 0
                : i.pageAmount)
          )
            return !1;
          var r = e.rows,
            a = t.rows;
          if (r.length !== a.length) return !1;
          if (e.includeHeader !== t.includeHeader) return !1;
          try {
            for (var o = 0; o < r.length; o++) {
              var s = Object.values(r[o]),
                c = Object.values(a[o]);
              if (s.length !== c.length) return !1;
              for (var l = 0; l < s.length; l++) if (s[l] !== c[l]) return !1;
            }
          } catch (u) {
            return !0;
          }
          return !0;
        },
        r = function (e) {
          return null == e;
        };
    },
    44: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var i = function () {
        var e = document.getElementById("pop-up");
        if (!e) {
          console.warn('There is no "#pop-up" element in the DOM tree');
          var t = document.createElement("div");
          t.setAttribute("id", "pop-up"), document.body.appendChild(t), (e = t);
        }
        return e;
      };
    },
    45: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        root: "style_root__3NCA8",
        curtain: "style_curtain__35fo1",
        curtain__transparent: "style_curtain__transparent__1llnV",
        curtain__dark: "style_curtain__dark__3R5g5",
        container: "style_container__8N2Qx",
      };
    },
    46: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var i = n(16),
        r = n(19),
        a = n(20),
        o = n(3),
        s = n(15),
        c = n(36),
        l = n(0),
        u = [
          "className",
          "value",
          "onChange",
          "classes",
          "endAdornment",
          "startAdornment",
          "onBlur",
          "disabled",
          "type",
          "errors",
          "readOnly",
        ],
        d = Object(o.forwardRef)(function (e, t) {
          var n = e.className,
            o = e.value,
            d = e.onChange,
            b = e.classes,
            p = e.endAdornment,
            f = e.startAdornment,
            m = e.onBlur,
            h = e.disabled,
            v = e.type,
            j = e.errors,
            g = e.readOnly,
            O = Object(a.a)(e, u),
            x = "string" === typeof j || Array.isArray(j);
          return Object(l.jsxs)("label", {
            className: Object(s.a)(
              "baseInput_root",
              null === b || void 0 === b ? void 0 : b.root,
              n,
              Object(r.a)({}, "baseInput_readOnly", g)
            ),
            children: [
              f,
              Object(l.jsx)(
                "input",
                Object(i.a)(
                  Object(i.a)({}, O),
                  {},
                  {
                    className: Object(s.a)(
                      "baseInput_input",
                      null === b || void 0 === b ? void 0 : b.input
                    ),
                    ref: t,
                    value: o,
                    onChange: d,
                    onBlur: m,
                    disabled: h,
                    type: v,
                    readOnly: g,
                  }
                )
              ),
              p,
              x
                ? Object(l.jsx)(c.a, {
                    errors: j,
                    className: null === b || void 0 === b ? void 0 : b.errors,
                  })
                : j,
            ],
          });
        });
    },
    48: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var i = n(16),
        r = n(3),
        a = n(33),
        o = function (e) {
          var t = e.children,
            n = e.value,
            o = Object(r.useContext)(a.b).setValue,
            s = r.Children.only(t);
          return Object(r.cloneElement)(
            t,
            Object(i.a)(
              Object(i.a)({}, s.props),
              {},
              {
                ref: function (e) {
                  var t;
                  "function" ===
                  typeof (null === s || void 0 === s ? void 0 : s.ref)
                    ? s.ref(e)
                    : null !== (t = s.ref) &&
                      void 0 !== t &&
                      t.hasOwnProperty("current") &&
                      (s.ref.current = e);
                },
                onClick: function () {
                  return o(n);
                },
              }
            )
          );
        };
    },
    49: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        loader: "style_loader__iNURN",
      };
    },
    50: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var i = n(19),
        r = n(17),
        a = n(3),
        o = n(15),
        s = n(35),
        c = n(100),
        l = n(120),
        u = n(18),
        d = n(22),
        b = n(72),
        p = n.n(b),
        f = n(0),
        m = function (e) {
          var t,
            n = e.isOpen,
            b = e.onClose,
            m = e.children,
            h = e.withCloseIcon,
            v = e.classes,
            j = void 0 === v ? {} : v,
            g = e.loading,
            O = Object(a.useState)(!1),
            x = Object(r.a)(O, 2),
            _ = x[0],
            y = x[1],
            w = Object(a.useRef)(null),
            N = Object(a.useState)(!0),
            C = Object(r.a)(N, 2),
            M = C[0],
            k = C[1];
          Object(a.useEffect)(
            function () {
              return (
                n &&
                  (k(!n),
                  document.body.style.setProperty("--page-overflow", "hidden")),
                function () {
                  document.body.style.setProperty("--page-overflow", "auto");
                }
              );
            },
            [n]
          );
          var E = function (e) {
            if (w.current) {
              var t = w.current.offsetHeight;
              y(e <= t + 50);
            } else y(!1);
          };
          return (
            Object(a.useEffect)(
              function () {
                w.current && E(window.innerHeight);
              },
              [w, n, g]
            ),
            Object(a.useEffect)(function () {
              var e = c.a.subscribe(function (e) {
                var t = e.height;
                return E(t);
              });
              return function () {
                e.unsubscribe();
              };
            }, []),
            M && !n
              ? null
              : Object(f.jsx)(s.a, {
                  background: "dark",
                  curtainOnClick: b,
                  classes: {
                    container: Object(o.a)(
                      p.a.dialogContainer,
                      j.container,
                      ((t = {}),
                      Object(i.a)(t, p.a.close, !n),
                      Object(i.a)(t, p.a.topPosition, _),
                      t)
                    ),
                    curtain: p.a.curtain,
                  },
                  children: Object(f.jsxs)("div", {
                    ref: function (e) {
                      Object(l.a)(e, w);
                    },
                    onAnimationEnd: function (e) {
                      e.animationName === p.a.closeAnimation && k(!0);
                    },
                    className: Object(o.a)(
                      p.a.dialog,
                      h ? p.a.radial : p.a.standard,
                      j.dialog,
                      Object(i.a)({}, p.a.close, !n)
                    ),
                    children: [
                      h &&
                        Object(f.jsx)(u.a, {
                          onClick: b,
                          className: Object(o.a)(
                            p.a.closeIcon,
                            "dialogCloseIcon"
                          ),
                          children: Object(f.jsx)(d.j, {}),
                        }),
                      m,
                    ],
                  }),
                })
          );
        };
    },
    51: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        usd: "style_usd__1ktyr",
      };
    },
    52: function (e, t, n) {
      var i;
      !(function (r) {
        "use strict";
        var a,
          o,
          s,
          c = 9e15,
          l = 1e9,
          u = "0123456789abcdef",
          d =
            "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
          b =
            "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
          p = {
            precision: 20,
            rounding: 4,
            modulo: 1,
            toExpNeg: -7,
            toExpPos: 21,
            minE: -c,
            maxE: c,
            crypto: !1,
          },
          f = !0,
          m = "[DecimalError] ",
          h = m + "Invalid argument: ",
          v = m + "Precision limit exceeded",
          j = m + "crypto unavailable",
          g = "[object Decimal]",
          O = Math.floor,
          x = Math.pow,
          _ = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
          y = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
          w = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
          N = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          C = 1e7,
          M = 7,
          k = d.length - 1,
          E = b.length - 1,
          L = { toStringTag: g };
        function H(e) {
          var t,
            n,
            i,
            r = e.length - 1,
            a = "",
            o = e[0];
          if (r > 0) {
            for (a += o, t = 1; t < r; t++)
              (i = e[t] + ""), (n = M - i.length) && (a += G(n)), (a += i);
            (o = e[t]), (n = M - (i = o + "").length) && (a += G(n));
          } else if (0 === o) return "0";
          for (; o % 10 === 0; ) o /= 10;
          return a + o;
        }
        function S(e, t, n) {
          if (e !== ~~e || e < t || e > n) throw Error(h + e);
        }
        function A(e, t, n, i) {
          var r, a, o, s;
          for (a = e[0]; a >= 10; a /= 10) --t;
          return (
            --t < 0
              ? ((t += M), (r = 0))
              : ((r = Math.ceil((t + 1) / M)), (t %= M)),
            (a = x(10, M - t)),
            (s = e[r] % a | 0),
            null == i
              ? t < 3
                ? (0 == t ? (s = (s / 100) | 0) : 1 == t && (s = (s / 10) | 0),
                  (o =
                    (n < 4 && 99999 == s) ||
                    (n > 3 && 49999 == s) ||
                    5e4 == s ||
                    0 == s))
                : (o =
                    (((n < 4 && s + 1 == a) || (n > 3 && s + 1 == a / 2)) &&
                      ((e[r + 1] / a / 100) | 0) == x(10, t - 2) - 1) ||
                    ((s == a / 2 || 0 == s) && 0 == ((e[r + 1] / a / 100) | 0)))
              : t < 4
              ? (0 == t
                  ? (s = (s / 1e3) | 0)
                  : 1 == t
                  ? (s = (s / 100) | 0)
                  : 2 == t && (s = (s / 10) | 0),
                (o = ((i || n < 4) && 9999 == s) || (!i && n > 3 && 4999 == s)))
              : (o =
                  (((i || n < 4) && s + 1 == a) ||
                    (!i && n > 3 && s + 1 == a / 2)) &&
                  ((e[r + 1] / a / 1e3) | 0) == x(10, t - 3) - 1),
            o
          );
        }
        function F(e, t, n) {
          for (var i, r, a = [0], o = 0, s = e.length; o < s; ) {
            for (r = a.length; r--; ) a[r] *= t;
            for (a[0] += u.indexOf(e.charAt(o++)), i = 0; i < a.length; i++)
              a[i] > n - 1 &&
                (void 0 === a[i + 1] && (a[i + 1] = 0),
                (a[i + 1] += (a[i] / n) | 0),
                (a[i] %= n));
          }
          return a.reverse();
        }
        (L.absoluteValue = L.abs =
          function () {
            var e = new this.constructor(this);
            return e.s < 0 && (e.s = 1), P(e);
          }),
          (L.ceil = function () {
            return P(new this.constructor(this), this.e + 1, 2);
          }),
          (L.clampedTo = L.clamp =
            function (e, t) {
              var n = this,
                i = n.constructor;
              if (((e = new i(e)), (t = new i(t)), !e.s || !t.s))
                return new i(NaN);
              if (e.gt(t)) throw Error(h + t);
              return n.cmp(e) < 0 ? e : n.cmp(t) > 0 ? t : new i(n);
            }),
          (L.comparedTo = L.cmp =
            function (e) {
              var t,
                n,
                i,
                r,
                a = this,
                o = a.d,
                s = (e = new a.constructor(e)).d,
                c = a.s,
                l = e.s;
              if (!o || !s)
                return c && l
                  ? c !== l
                    ? c
                    : o === s
                    ? 0
                    : !o ^ (c < 0)
                    ? 1
                    : -1
                  : NaN;
              if (!o[0] || !s[0]) return o[0] ? c : s[0] ? -l : 0;
              if (c !== l) return c;
              if (a.e !== e.e) return (a.e > e.e) ^ (c < 0) ? 1 : -1;
              for (
                t = 0, n = (i = o.length) < (r = s.length) ? i : r;
                t < n;
                ++t
              )
                if (o[t] !== s[t]) return (o[t] > s[t]) ^ (c < 0) ? 1 : -1;
              return i === r ? 0 : (i > r) ^ (c < 0) ? 1 : -1;
            }),
          (L.cosine = L.cos =
            function () {
              var e,
                t,
                n = this,
                i = n.constructor;
              return n.d
                ? n.d[0]
                  ? ((e = i.precision),
                    (t = i.rounding),
                    (i.precision = e + Math.max(n.e, n.sd()) + M),
                    (i.rounding = 1),
                    (n = (function (e, t) {
                      var n, i, r;
                      if (t.isZero()) return t;
                      (i = t.d.length),
                        i < 32
                          ? (r = (1 / $(4, (n = Math.ceil(i / 3)))).toString())
                          : ((n = 16), (r = "2.3283064365386962890625e-10"));
                      (e.precision += n), (t = J(e, 1, t.times(r), new e(1)));
                      for (var a = n; a--; ) {
                        var o = t.times(t);
                        t = o.times(o).minus(o).times(8).plus(1);
                      }
                      return (e.precision -= n), t;
                    })(i, Q(i, n))),
                    (i.precision = e),
                    (i.rounding = t),
                    P(2 == s || 3 == s ? n.neg() : n, e, t, !0))
                  : new i(1)
                : new i(NaN);
            }),
          (L.cubeRoot = L.cbrt =
            function () {
              var e,
                t,
                n,
                i,
                r,
                a,
                o,
                s,
                c,
                l,
                u = this,
                d = u.constructor;
              if (!u.isFinite() || u.isZero()) return new d(u);
              for (
                f = !1,
                  (a = u.s * x(u.s * u, 1 / 3)) && Math.abs(a) != 1 / 0
                    ? (i = new d(a.toString()))
                    : ((n = H(u.d)),
                      (a = ((e = u.e) - n.length + 1) % 3) &&
                        (n += 1 == a || -2 == a ? "0" : "00"),
                      (a = x(n, 1 / 3)),
                      (e = O((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                      ((i = new d(
                        (n =
                          a == 1 / 0
                            ? "5e" + e
                            : (n = a.toExponential()).slice(
                                0,
                                n.indexOf("e") + 1
                              ) + e)
                      )).s = u.s)),
                  o = (e = d.precision) + 3;
                ;

              )
                if (
                  ((l = (c = (s = i).times(s).times(s)).plus(u)),
                  (i = W(l.plus(u).times(s), l.plus(c), o + 2, 1)),
                  H(s.d).slice(0, o) === (n = H(i.d)).slice(0, o))
                ) {
                  if (
                    "9999" != (n = n.slice(o - 3, o + 1)) &&
                    (r || "4999" != n)
                  ) {
                    (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                      (P(i, e + 1, 1), (t = !i.times(i).times(i).eq(u)));
                    break;
                  }
                  if (!r && (P(s, e + 1, 0), s.times(s).times(s).eq(u))) {
                    i = s;
                    break;
                  }
                  (o += 4), (r = 1);
                }
              return (f = !0), P(i, e, d.rounding, t);
            }),
          (L.decimalPlaces = L.dp =
            function () {
              var e,
                t = this.d,
                n = NaN;
              if (t) {
                if (
                  ((n = ((e = t.length - 1) - O(this.e / M)) * M), (e = t[e]))
                )
                  for (; e % 10 == 0; e /= 10) n--;
                n < 0 && (n = 0);
              }
              return n;
            }),
          (L.dividedBy = L.div =
            function (e) {
              return W(this, new this.constructor(e));
            }),
          (L.dividedToIntegerBy = L.divToInt =
            function (e) {
              var t = this.constructor;
              return P(W(this, new t(e), 0, 1, 1), t.precision, t.rounding);
            }),
          (L.equals = L.eq =
            function (e) {
              return 0 === this.cmp(e);
            }),
          (L.floor = function () {
            return P(new this.constructor(this), this.e + 1, 3);
          }),
          (L.greaterThan = L.gt =
            function (e) {
              return this.cmp(e) > 0;
            }),
          (L.greaterThanOrEqualTo = L.gte =
            function (e) {
              var t = this.cmp(e);
              return 1 == t || 0 === t;
            }),
          (L.hyperbolicCosine = L.cosh =
            function () {
              var e,
                t,
                n,
                i,
                r,
                a = this,
                o = a.constructor,
                s = new o(1);
              if (!a.isFinite()) return new o(a.s ? 1 / 0 : NaN);
              if (a.isZero()) return s;
              (n = o.precision),
                (i = o.rounding),
                (o.precision = n + Math.max(a.e, a.sd()) + 4),
                (o.rounding = 1),
                (r = a.d.length) < 32
                  ? (t = (1 / $(4, (e = Math.ceil(r / 3)))).toString())
                  : ((e = 16), (t = "2.3283064365386962890625e-10")),
                (a = J(o, 1, a.times(t), new o(1), !0));
              for (var c, l = e, u = new o(8); l--; )
                (c = a.times(a)), (a = s.minus(c.times(u.minus(c.times(u)))));
              return P(a, (o.precision = n), (o.rounding = i), !0);
            }),
          (L.hyperbolicSine = L.sinh =
            function () {
              var e,
                t,
                n,
                i,
                r = this,
                a = r.constructor;
              if (!r.isFinite() || r.isZero()) return new a(r);
              if (
                ((t = a.precision),
                (n = a.rounding),
                (a.precision = t + Math.max(r.e, r.sd()) + 4),
                (a.rounding = 1),
                (i = r.d.length) < 3)
              )
                r = J(a, 2, r, r, !0);
              else {
                (e = (e = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | e),
                  (r = J(a, 2, (r = r.times(1 / $(5, e))), r, !0));
                for (var o, s = new a(5), c = new a(16), l = new a(20); e--; )
                  (o = r.times(r)),
                    (r = r.times(s.plus(o.times(c.times(o).plus(l)))));
              }
              return (a.precision = t), (a.rounding = n), P(r, t, n, !0);
            }),
          (L.hyperbolicTangent = L.tanh =
            function () {
              var e,
                t,
                n = this,
                i = n.constructor;
              return n.isFinite()
                ? n.isZero()
                  ? new i(n)
                  : ((e = i.precision),
                    (t = i.rounding),
                    (i.precision = e + 7),
                    (i.rounding = 1),
                    W(n.sinh(), n.cosh(), (i.precision = e), (i.rounding = t)))
                : new i(n.s);
            }),
          (L.inverseCosine = L.acos =
            function () {
              var e,
                t = this,
                n = t.constructor,
                i = t.abs().cmp(1),
                r = n.precision,
                a = n.rounding;
              return -1 !== i
                ? 0 === i
                  ? t.isNeg()
                    ? R(n, r, a)
                    : new n(0)
                  : new n(NaN)
                : t.isZero()
                ? R(n, r + 4, a).times(0.5)
                : ((n.precision = r + 6),
                  (n.rounding = 1),
                  (t = t.asin()),
                  (e = R(n, r + 4, a).times(0.5)),
                  (n.precision = r),
                  (n.rounding = a),
                  e.minus(t));
            }),
          (L.inverseHyperbolicCosine = L.acosh =
            function () {
              var e,
                t,
                n = this,
                i = n.constructor;
              return n.lte(1)
                ? new i(n.eq(1) ? 0 : NaN)
                : n.isFinite()
                ? ((e = i.precision),
                  (t = i.rounding),
                  (i.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4),
                  (i.rounding = 1),
                  (f = !1),
                  (n = n.times(n).minus(1).sqrt().plus(n)),
                  (f = !0),
                  (i.precision = e),
                  (i.rounding = t),
                  n.ln())
                : new i(n);
            }),
          (L.inverseHyperbolicSine = L.asinh =
            function () {
              var e,
                t,
                n = this,
                i = n.constructor;
              return !n.isFinite() || n.isZero()
                ? new i(n)
                : ((e = i.precision),
                  (t = i.rounding),
                  (i.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6),
                  (i.rounding = 1),
                  (f = !1),
                  (n = n.times(n).plus(1).sqrt().plus(n)),
                  (f = !0),
                  (i.precision = e),
                  (i.rounding = t),
                  n.ln());
            }),
          (L.inverseHyperbolicTangent = L.atanh =
            function () {
              var e,
                t,
                n,
                i,
                r = this,
                a = r.constructor;
              return r.isFinite()
                ? r.e >= 0
                  ? new a(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN)
                  : ((e = a.precision),
                    (t = a.rounding),
                    (i = r.sd()),
                    Math.max(i, e) < 2 * -r.e - 1
                      ? P(new a(r), e, t, !0)
                      : ((a.precision = n = i - r.e),
                        (r = W(r.plus(1), new a(1).minus(r), n + e, 1)),
                        (a.precision = e + 4),
                        (a.rounding = 1),
                        (r = r.ln()),
                        (a.precision = e),
                        (a.rounding = t),
                        r.times(0.5)))
                : new a(NaN);
            }),
          (L.inverseSine = L.asin =
            function () {
              var e,
                t,
                n,
                i,
                r = this,
                a = r.constructor;
              return r.isZero()
                ? new a(r)
                : ((t = r.abs().cmp(1)),
                  (n = a.precision),
                  (i = a.rounding),
                  -1 !== t
                    ? 0 === t
                      ? (((e = R(a, n + 4, i).times(0.5)).s = r.s), e)
                      : new a(NaN)
                    : ((a.precision = n + 6),
                      (a.rounding = 1),
                      (r = r
                        .div(new a(1).minus(r.times(r)).sqrt().plus(1))
                        .atan()),
                      (a.precision = n),
                      (a.rounding = i),
                      r.times(2)));
            }),
          (L.inverseTangent = L.atan =
            function () {
              var e,
                t,
                n,
                i,
                r,
                a,
                o,
                s,
                c,
                l = this,
                u = l.constructor,
                d = u.precision,
                b = u.rounding;
              if (l.isFinite()) {
                if (l.isZero()) return new u(l);
                if (l.abs().eq(1) && d + 4 <= E)
                  return ((o = R(u, d + 4, b).times(0.25)).s = l.s), o;
              } else {
                if (!l.s) return new u(NaN);
                if (d + 4 <= E)
                  return ((o = R(u, d + 4, b).times(0.5)).s = l.s), o;
              }
              for (
                u.precision = s = d + 10,
                  u.rounding = 1,
                  e = n = Math.min(28, (s / M + 2) | 0);
                e;
                --e
              )
                l = l.div(l.times(l).plus(1).sqrt().plus(1));
              for (
                f = !1,
                  t = Math.ceil(s / M),
                  i = 1,
                  c = l.times(l),
                  o = new u(l),
                  r = l;
                -1 !== e;

              )
                if (
                  ((r = r.times(c)),
                  (a = o.minus(r.div((i += 2)))),
                  (r = r.times(c)),
                  void 0 !== (o = a.plus(r.div((i += 2)))).d[t])
                )
                  for (e = t; o.d[e] === a.d[e] && e--; );
              return (
                n && (o = o.times(2 << (n - 1))),
                (f = !0),
                P(o, (u.precision = d), (u.rounding = b), !0)
              );
            }),
          (L.isFinite = function () {
            return !!this.d;
          }),
          (L.isInteger = L.isInt =
            function () {
              return !!this.d && O(this.e / M) > this.d.length - 2;
            }),
          (L.isNaN = function () {
            return !this.s;
          }),
          (L.isNegative = L.isNeg =
            function () {
              return this.s < 0;
            }),
          (L.isPositive = L.isPos =
            function () {
              return this.s > 0;
            }),
          (L.isZero = function () {
            return !!this.d && 0 === this.d[0];
          }),
          (L.lessThan = L.lt =
            function (e) {
              return this.cmp(e) < 0;
            }),
          (L.lessThanOrEqualTo = L.lte =
            function (e) {
              return this.cmp(e) < 1;
            }),
          (L.logarithm = L.log =
            function (e) {
              var t,
                n,
                i,
                r,
                a,
                o,
                s,
                c,
                l = this,
                u = l.constructor,
                d = u.precision,
                b = u.rounding;
              if (null == e) (e = new u(10)), (t = !0);
              else {
                if (((n = (e = new u(e)).d), e.s < 0 || !n || !n[0] || e.eq(1)))
                  return new u(NaN);
                t = e.eq(10);
              }
              if (((n = l.d), l.s < 0 || !n || !n[0] || l.eq(1)))
                return new u(
                  n && !n[0] ? -1 / 0 : 1 != l.s ? NaN : n ? 0 : 1 / 0
                );
              if (t)
                if (n.length > 1) a = !0;
                else {
                  for (r = n[0]; r % 10 === 0; ) r /= 10;
                  a = 1 !== r;
                }
              if (
                ((f = !1),
                (o = z(l, (s = d + 5))),
                (i = t ? I(u, s + 10) : z(e, s)),
                A((c = W(o, i, s, 1)).d, (r = d), b))
              )
                do {
                  if (
                    ((o = z(l, (s += 10))),
                    (i = t ? I(u, s + 10) : z(e, s)),
                    (c = W(o, i, s, 1)),
                    !a)
                  ) {
                    +H(c.d).slice(r + 1, r + 15) + 1 == 1e14 &&
                      (c = P(c, d + 1, 0));
                    break;
                  }
                } while (A(c.d, (r += 10), b));
              return (f = !0), P(c, d, b);
            }),
          (L.minus = L.sub =
            function (e) {
              var t,
                n,
                i,
                r,
                a,
                o,
                s,
                c,
                l,
                u,
                d,
                b,
                p = this,
                m = p.constructor;
              if (((e = new m(e)), !p.d || !e.d))
                return (
                  p.s && e.s
                    ? p.d
                      ? (e.s = -e.s)
                      : (e = new m(e.d || p.s !== e.s ? p : NaN))
                    : (e = new m(NaN)),
                  e
                );
              if (p.s != e.s) return (e.s = -e.s), p.plus(e);
              if (
                ((l = p.d),
                (b = e.d),
                (s = m.precision),
                (c = m.rounding),
                !l[0] || !b[0])
              ) {
                if (b[0]) e.s = -e.s;
                else {
                  if (!l[0]) return new m(3 === c ? -0 : 0);
                  e = new m(p);
                }
                return f ? P(e, s, c) : e;
              }
              if (
                ((n = O(e.e / M)),
                (u = O(p.e / M)),
                (l = l.slice()),
                (a = u - n))
              ) {
                for (
                  (d = a < 0)
                    ? ((t = l), (a = -a), (o = b.length))
                    : ((t = b), (n = u), (o = l.length)),
                    a > (i = Math.max(Math.ceil(s / M), o) + 2) &&
                      ((a = i), (t.length = 1)),
                    t.reverse(),
                    i = a;
                  i--;

                )
                  t.push(0);
                t.reverse();
              } else {
                for (
                  (d = (i = l.length) < (o = b.length)) && (o = i), i = 0;
                  i < o;
                  i++
                )
                  if (l[i] != b[i]) {
                    d = l[i] < b[i];
                    break;
                  }
                a = 0;
              }
              for (
                d && ((t = l), (l = b), (b = t), (e.s = -e.s)),
                  o = l.length,
                  i = b.length - o;
                i > 0;
                --i
              )
                l[o++] = 0;
              for (i = b.length; i > a; ) {
                if (l[--i] < b[i]) {
                  for (r = i; r && 0 === l[--r]; ) l[r] = C - 1;
                  --l[r], (l[i] += C);
                }
                l[i] -= b[i];
              }
              for (; 0 === l[--o]; ) l.pop();
              for (; 0 === l[0]; l.shift()) --n;
              return l[0]
                ? ((e.d = l), (e.e = B(l, n)), f ? P(e, s, c) : e)
                : new m(3 === c ? -0 : 0);
            }),
          (L.modulo = L.mod =
            function (e) {
              var t,
                n = this,
                i = n.constructor;
              return (
                (e = new i(e)),
                !n.d || !e.s || (e.d && !e.d[0])
                  ? new i(NaN)
                  : !e.d || (n.d && !n.d[0])
                  ? P(new i(n), i.precision, i.rounding)
                  : ((f = !1),
                    9 == i.modulo
                      ? ((t = W(n, e.abs(), 0, 3, 1)).s *= e.s)
                      : (t = W(n, e, 0, i.modulo, 1)),
                    (t = t.times(e)),
                    (f = !0),
                    n.minus(t))
              );
            }),
          (L.naturalExponential = L.exp =
            function () {
              return q(this);
            }),
          (L.naturalLogarithm = L.ln =
            function () {
              return z(this);
            }),
          (L.negated = L.neg =
            function () {
              var e = new this.constructor(this);
              return (e.s = -e.s), P(e);
            }),
          (L.plus = L.add =
            function (e) {
              var t,
                n,
                i,
                r,
                a,
                o,
                s,
                c,
                l,
                u,
                d = this,
                b = d.constructor;
              if (((e = new b(e)), !d.d || !e.d))
                return (
                  d.s && e.s
                    ? d.d || (e = new b(e.d || d.s === e.s ? d : NaN))
                    : (e = new b(NaN)),
                  e
                );
              if (d.s != e.s) return (e.s = -e.s), d.minus(e);
              if (
                ((l = d.d),
                (u = e.d),
                (s = b.precision),
                (c = b.rounding),
                !l[0] || !u[0])
              )
                return u[0] || (e = new b(d)), f ? P(e, s, c) : e;
              if (
                ((a = O(d.e / M)),
                (i = O(e.e / M)),
                (l = l.slice()),
                (r = a - i))
              ) {
                for (
                  r < 0
                    ? ((n = l), (r = -r), (o = u.length))
                    : ((n = u), (i = a), (o = l.length)),
                    r > (o = (a = Math.ceil(s / M)) > o ? a + 1 : o + 1) &&
                      ((r = o), (n.length = 1)),
                    n.reverse();
                  r--;

                )
                  n.push(0);
                n.reverse();
              }
              for (
                (o = l.length) - (r = u.length) < 0 &&
                  ((r = o), (n = u), (u = l), (l = n)),
                  t = 0;
                r;

              )
                (t = ((l[--r] = l[r] + u[r] + t) / C) | 0), (l[r] %= C);
              for (t && (l.unshift(t), ++i), o = l.length; 0 == l[--o]; )
                l.pop();
              return (e.d = l), (e.e = B(l, i)), f ? P(e, s, c) : e;
            }),
          (L.precision = L.sd =
            function (e) {
              var t,
                n = this;
              if (void 0 !== e && e !== !!e && 1 !== e && 0 !== e)
                throw Error(h + e);
              return (
                n.d
                  ? ((t = D(n.d)), e && n.e + 1 > t && (t = n.e + 1))
                  : (t = NaN),
                t
              );
            }),
          (L.round = function () {
            var e = this,
              t = e.constructor;
            return P(new t(e), e.e + 1, t.rounding);
          }),
          (L.sine = L.sin =
            function () {
              var e,
                t,
                n = this,
                i = n.constructor;
              return n.isFinite()
                ? n.isZero()
                  ? new i(n)
                  : ((e = i.precision),
                    (t = i.rounding),
                    (i.precision = e + Math.max(n.e, n.sd()) + M),
                    (i.rounding = 1),
                    (n = (function (e, t) {
                      var n,
                        i = t.d.length;
                      if (i < 3) return t.isZero() ? t : J(e, 2, t, t);
                      (n = (n = 1.4 * Math.sqrt(i)) > 16 ? 16 : 0 | n),
                        (t = t.times(1 / $(5, n))),
                        (t = J(e, 2, t, t));
                      for (
                        var r, a = new e(5), o = new e(16), s = new e(20);
                        n--;

                      )
                        (r = t.times(t)),
                          (t = t.times(a.plus(r.times(o.times(r).minus(s)))));
                      return t;
                    })(i, Q(i, n))),
                    (i.precision = e),
                    (i.rounding = t),
                    P(s > 2 ? n.neg() : n, e, t, !0))
                : new i(NaN);
            }),
          (L.squareRoot = L.sqrt =
            function () {
              var e,
                t,
                n,
                i,
                r,
                a,
                o = this,
                s = o.d,
                c = o.e,
                l = o.s,
                u = o.constructor;
              if (1 !== l || !s || !s[0])
                return new u(
                  !l || (l < 0 && (!s || s[0])) ? NaN : s ? o : 1 / 0
                );
              for (
                f = !1,
                  0 == (l = Math.sqrt(+o)) || l == 1 / 0
                    ? (((t = H(s)).length + c) % 2 == 0 && (t += "0"),
                      (l = Math.sqrt(t)),
                      (c = O((c + 1) / 2) - (c < 0 || c % 2)),
                      (i = new u(
                        (t =
                          l == 1 / 0
                            ? "5e" + c
                            : (t = l.toExponential()).slice(
                                0,
                                t.indexOf("e") + 1
                              ) + c)
                      )))
                    : (i = new u(l.toString())),
                  n = (c = u.precision) + 3;
                ;

              )
                if (
                  ((i = (a = i).plus(W(o, a, n + 2, 1)).times(0.5)),
                  H(a.d).slice(0, n) === (t = H(i.d)).slice(0, n))
                ) {
                  if (
                    "9999" != (t = t.slice(n - 3, n + 1)) &&
                    (r || "4999" != t)
                  ) {
                    (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                      (P(i, c + 1, 1), (e = !i.times(i).eq(o)));
                    break;
                  }
                  if (!r && (P(a, c + 1, 0), a.times(a).eq(o))) {
                    i = a;
                    break;
                  }
                  (n += 4), (r = 1);
                }
              return (f = !0), P(i, c, u.rounding, e);
            }),
          (L.tangent = L.tan =
            function () {
              var e,
                t,
                n = this,
                i = n.constructor;
              return n.isFinite()
                ? n.isZero()
                  ? new i(n)
                  : ((e = i.precision),
                    (t = i.rounding),
                    (i.precision = e + 10),
                    (i.rounding = 1),
                    ((n = n.sin()).s = 1),
                    (n = W(n, new i(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                    (i.precision = e),
                    (i.rounding = t),
                    P(2 == s || 4 == s ? n.neg() : n, e, t, !0))
                : new i(NaN);
            }),
          (L.times = L.mul =
            function (e) {
              var t,
                n,
                i,
                r,
                a,
                o,
                s,
                c,
                l,
                u = this,
                d = u.constructor,
                b = u.d,
                p = (e = new d(e)).d;
              if (((e.s *= u.s), !b || !b[0] || !p || !p[0]))
                return new d(
                  !e.s || (b && !b[0] && !p) || (p && !p[0] && !b)
                    ? NaN
                    : b && p
                    ? 0 * e.s
                    : e.s / 0
                );
              for (
                n = O(u.e / M) + O(e.e / M),
                  (c = b.length) < (l = p.length) &&
                    ((a = b), (b = p), (p = a), (o = c), (c = l), (l = o)),
                  a = [],
                  i = o = c + l;
                i--;

              )
                a.push(0);
              for (i = l; --i >= 0; ) {
                for (t = 0, r = c + i; r > i; )
                  (s = a[r] + p[i] * b[r - i - 1] + t),
                    (a[r--] = s % C | 0),
                    (t = (s / C) | 0);
                a[r] = (a[r] + t) % C | 0;
              }
              for (; !a[--o]; ) a.pop();
              return (
                t ? ++n : a.shift(),
                (e.d = a),
                (e.e = B(a, n)),
                f ? P(e, d.precision, d.rounding) : e
              );
            }),
          (L.toBinary = function (e, t) {
            return ee(this, 2, e, t);
          }),
          (L.toDecimalPlaces = L.toDP =
            function (e, t) {
              var n = this,
                i = n.constructor;
              return (
                (n = new i(n)),
                void 0 === e
                  ? n
                  : (S(e, 0, l),
                    void 0 === t ? (t = i.rounding) : S(t, 0, 8),
                    P(n, e + n.e + 1, t))
              );
            }),
          (L.toExponential = function (e, t) {
            var n,
              i = this,
              r = i.constructor;
            return (
              void 0 === e
                ? (n = T(i, !0))
                : (S(e, 0, l),
                  void 0 === t ? (t = r.rounding) : S(t, 0, 8),
                  (n = T((i = P(new r(i), e + 1, t)), !0, e + 1))),
              i.isNeg() && !i.isZero() ? "-" + n : n
            );
          }),
          (L.toFixed = function (e, t) {
            var n,
              i,
              r = this,
              a = r.constructor;
            return (
              void 0 === e
                ? (n = T(r))
                : (S(e, 0, l),
                  void 0 === t ? (t = a.rounding) : S(t, 0, 8),
                  (n = T((i = P(new a(r), e + r.e + 1, t)), !1, e + i.e + 1))),
              r.isNeg() && !r.isZero() ? "-" + n : n
            );
          }),
          (L.toFraction = function (e) {
            var t,
              n,
              i,
              r,
              a,
              o,
              s,
              c,
              l,
              u,
              d,
              b,
              p = this,
              m = p.d,
              v = p.constructor;
            if (!m) return new v(p);
            if (
              ((l = n = new v(1)),
              (i = c = new v(0)),
              (o = (a = (t = new v(i)).e = D(m) - p.e - 1) % M),
              (t.d[0] = x(10, o < 0 ? M + o : o)),
              null == e)
            )
              e = a > 0 ? t : l;
            else {
              if (!(s = new v(e)).isInt() || s.lt(l)) throw Error(h + s);
              e = s.gt(t) ? (a > 0 ? t : l) : s;
            }
            for (
              f = !1,
                s = new v(H(m)),
                u = v.precision,
                v.precision = a = m.length * M * 2;
              (d = W(s, t, 0, 1, 1)), 1 != (r = n.plus(d.times(i))).cmp(e);

            )
              (n = i),
                (i = r),
                (r = l),
                (l = c.plus(d.times(r))),
                (c = r),
                (r = t),
                (t = s.minus(d.times(r))),
                (s = r);
            return (
              (r = W(e.minus(n), i, 0, 1, 1)),
              (c = c.plus(r.times(l))),
              (n = n.plus(r.times(i))),
              (c.s = l.s = p.s),
              (b =
                W(l, i, a, 1).minus(p).abs().cmp(W(c, n, a, 1).minus(p).abs()) <
                1
                  ? [l, i]
                  : [c, n]),
              (v.precision = u),
              (f = !0),
              b
            );
          }),
          (L.toHexadecimal = L.toHex =
            function (e, t) {
              return ee(this, 16, e, t);
            }),
          (L.toNearest = function (e, t) {
            var n = this,
              i = n.constructor;
            if (((n = new i(n)), null == e)) {
              if (!n.d) return n;
              (e = new i(1)), (t = i.rounding);
            } else {
              if (
                ((e = new i(e)),
                void 0 === t ? (t = i.rounding) : S(t, 0, 8),
                !n.d)
              )
                return e.s ? n : e;
              if (!e.d) return e.s && (e.s = n.s), e;
            }
            return (
              e.d[0]
                ? ((f = !1), (n = W(n, e, 0, t, 1).times(e)), (f = !0), P(n))
                : ((e.s = n.s), (n = e)),
              n
            );
          }),
          (L.toNumber = function () {
            return +this;
          }),
          (L.toOctal = function (e, t) {
            return ee(this, 8, e, t);
          }),
          (L.toPower = L.pow =
            function (e) {
              var t,
                n,
                i,
                r,
                a,
                o,
                s = this,
                c = s.constructor,
                l = +(e = new c(e));
              if (!s.d || !e.d || !s.d[0] || !e.d[0]) return new c(x(+s, l));
              if ((s = new c(s)).eq(1)) return s;
              if (((i = c.precision), (a = c.rounding), e.eq(1)))
                return P(s, i, a);
              if (
                (t = O(e.e / M)) >= e.d.length - 1 &&
                (n = l < 0 ? -l : l) <= 9007199254740991
              )
                return (
                  (r = V(c, s, n, i)), e.s < 0 ? new c(1).div(r) : P(r, i, a)
                );
              if ((o = s.s) < 0) {
                if (t < e.d.length - 1) return new c(NaN);
                if (
                  (0 == (1 & e.d[t]) && (o = 1),
                  0 == s.e && 1 == s.d[0] && 1 == s.d.length)
                )
                  return (s.s = o), s;
              }
              return (t =
                0 != (n = x(+s, l)) && isFinite(n)
                  ? new c(n + "").e
                  : O(l * (Math.log("0." + H(s.d)) / Math.LN10 + s.e + 1))) >
                c.maxE + 1 || t < c.minE - 1
                ? new c(t > 0 ? o / 0 : 0)
                : ((f = !1),
                  (c.rounding = s.s = 1),
                  (n = Math.min(12, (t + "").length)),
                  (r = q(e.times(z(s, i + n)), i)).d &&
                    A((r = P(r, i + 5, 1)).d, i, a) &&
                    ((t = i + 10),
                    +H((r = P(q(e.times(z(s, t + n)), t), t + 5, 1)).d).slice(
                      i + 1,
                      i + 15
                    ) +
                      1 ==
                      1e14 && (r = P(r, i + 1, 0))),
                  (r.s = o),
                  (f = !0),
                  (c.rounding = a),
                  P(r, i, a));
            }),
          (L.toPrecision = function (e, t) {
            var n,
              i = this,
              r = i.constructor;
            return (
              void 0 === e
                ? (n = T(i, i.e <= r.toExpNeg || i.e >= r.toExpPos))
                : (S(e, 1, l),
                  void 0 === t ? (t = r.rounding) : S(t, 0, 8),
                  (n = T(
                    (i = P(new r(i), e, t)),
                    e <= i.e || i.e <= r.toExpNeg,
                    e
                  ))),
              i.isNeg() && !i.isZero() ? "-" + n : n
            );
          }),
          (L.toSignificantDigits = L.toSD =
            function (e, t) {
              var n = this.constructor;
              return (
                void 0 === e
                  ? ((e = n.precision), (t = n.rounding))
                  : (S(e, 1, l), void 0 === t ? (t = n.rounding) : S(t, 0, 8)),
                P(new n(this), e, t)
              );
            }),
          (L.toString = function () {
            var e = this,
              t = e.constructor,
              n = T(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
            return e.isNeg() && !e.isZero() ? "-" + n : n;
          }),
          (L.truncated = L.trunc =
            function () {
              return P(new this.constructor(this), this.e + 1, 1);
            }),
          (L.valueOf = L.toJSON =
            function () {
              var e = this,
                t = e.constructor,
                n = T(e, e.e <= t.toExpNeg || e.e >= t.toExpPos);
              return e.isNeg() ? "-" + n : n;
            });
        var W = (function () {
          function e(e, t, n) {
            var i,
              r = 0,
              a = e.length;
            for (e = e.slice(); a--; )
              (i = e[a] * t + r), (e[a] = i % n | 0), (r = (i / n) | 0);
            return r && e.unshift(r), e;
          }
          function t(e, t, n, i) {
            var r, a;
            if (n != i) a = n > i ? 1 : -1;
            else
              for (r = a = 0; r < n; r++)
                if (e[r] != t[r]) {
                  a = e[r] > t[r] ? 1 : -1;
                  break;
                }
            return a;
          }
          function n(e, t, n, i) {
            for (var r = 0; n--; )
              (e[n] -= r),
                (r = e[n] < t[n] ? 1 : 0),
                (e[n] = r * i + e[n] - t[n]);
            for (; !e[0] && e.length > 1; ) e.shift();
          }
          return function (i, r, a, s, c, l) {
            var u,
              d,
              b,
              p,
              f,
              m,
              h,
              v,
              j,
              g,
              x,
              _,
              y,
              w,
              N,
              k,
              E,
              L,
              H,
              S,
              A = i.constructor,
              F = i.s == r.s ? 1 : -1,
              W = i.d,
              T = r.d;
            if (!W || !W[0] || !T || !T[0])
              return new A(
                i.s && r.s && (W ? !T || W[0] != T[0] : T)
                  ? (W && 0 == W[0]) || !T
                    ? 0 * F
                    : F / 0
                  : NaN
              );
            for (
              l
                ? ((f = 1), (d = i.e - r.e))
                : ((l = C), (f = M), (d = O(i.e / f) - O(r.e / f))),
                H = T.length,
                E = W.length,
                g = (j = new A(F)).d = [],
                b = 0;
              T[b] == (W[b] || 0);
              b++
            );
            if (
              (T[b] > (W[b] || 0) && d--,
              null == a
                ? ((w = a = A.precision), (s = A.rounding))
                : (w = c ? a + (i.e - r.e) + 1 : a),
              w < 0)
            )
              g.push(1), (m = !0);
            else {
              if (((w = (w / f + 2) | 0), (b = 0), 1 == H)) {
                for (p = 0, T = T[0], w++; (b < E || p) && w--; b++)
                  (N = p * l + (W[b] || 0)),
                    (g[b] = (N / T) | 0),
                    (p = N % T | 0);
                m = p || b < E;
              } else {
                for (
                  (p = (l / (T[0] + 1)) | 0) > 1 &&
                    ((T = e(T, p, l)),
                    (W = e(W, p, l)),
                    (H = T.length),
                    (E = W.length)),
                    k = H,
                    _ = (x = W.slice(0, H)).length;
                  _ < H;

                )
                  x[_++] = 0;
                (S = T.slice()).unshift(0), (L = T[0]), T[1] >= l / 2 && ++L;
                do {
                  (p = 0),
                    (u = t(T, x, H, _)) < 0
                      ? ((y = x[0]),
                        H != _ && (y = y * l + (x[1] || 0)),
                        (p = (y / L) | 0) > 1
                          ? (p >= l && (p = l - 1),
                            1 ==
                              (u = t(
                                (h = e(T, p, l)),
                                x,
                                (v = h.length),
                                (_ = x.length)
                              )) && (p--, n(h, H < v ? S : T, v, l)))
                          : (0 == p && (u = p = 1), (h = T.slice())),
                        (v = h.length) < _ && h.unshift(0),
                        n(x, h, _, l),
                        -1 == u &&
                          (u = t(T, x, H, (_ = x.length))) < 1 &&
                          (p++, n(x, H < _ ? S : T, _, l)),
                        (_ = x.length))
                      : 0 === u && (p++, (x = [0])),
                    (g[b++] = p),
                    u && x[0] ? (x[_++] = W[k] || 0) : ((x = [W[k]]), (_ = 1));
                } while ((k++ < E || void 0 !== x[0]) && w--);
                m = void 0 !== x[0];
              }
              g[0] || g.shift();
            }
            if (1 == f) (j.e = d), (o = m);
            else {
              for (b = 1, p = g[0]; p >= 10; p /= 10) b++;
              (j.e = b + d * f - 1), P(j, c ? a + j.e + 1 : a, s, m);
            }
            return j;
          };
        })();
        function P(e, t, n, i) {
          var r,
            a,
            o,
            s,
            c,
            l,
            u,
            d,
            b,
            p = e.constructor;
          e: if (null != t) {
            if (!(d = e.d)) return e;
            for (r = 1, s = d[0]; s >= 10; s /= 10) r++;
            if ((a = t - r) < 0)
              (a += M),
                (o = t),
                (c = ((u = d[(b = 0)]) / x(10, r - o - 1)) % 10 | 0);
            else if ((b = Math.ceil((a + 1) / M)) >= (s = d.length)) {
              if (!i) break e;
              for (; s++ <= b; ) d.push(0);
              (u = c = 0), (r = 1), (o = (a %= M) - M + 1);
            } else {
              for (u = s = d[b], r = 1; s >= 10; s /= 10) r++;
              c =
                (o = (a %= M) - M + r) < 0
                  ? 0
                  : (u / x(10, r - o - 1)) % 10 | 0;
            }
            if (
              ((i =
                i ||
                t < 0 ||
                void 0 !== d[b + 1] ||
                (o < 0 ? u : u % x(10, r - o - 1))),
              (l =
                n < 4
                  ? (c || i) && (0 == n || n == (e.s < 0 ? 3 : 2))
                  : c > 5 ||
                    (5 == c &&
                      (4 == n ||
                        i ||
                        (6 == n &&
                          (a > 0 ? (o > 0 ? u / x(10, r - o) : 0) : d[b - 1]) %
                            10 &
                            1) ||
                        n == (e.s < 0 ? 8 : 7)))),
              t < 1 || !d[0])
            )
              return (
                (d.length = 0),
                l
                  ? ((t -= e.e + 1),
                    (d[0] = x(10, (M - (t % M)) % M)),
                    (e.e = -t || 0))
                  : (d[0] = e.e = 0),
                e
              );
            if (
              (0 == a
                ? ((d.length = b), (s = 1), b--)
                : ((d.length = b + 1),
                  (s = x(10, M - a)),
                  (d[b] = o > 0 ? ((u / x(10, r - o)) % x(10, o) | 0) * s : 0)),
              l)
            )
              for (;;) {
                if (0 == b) {
                  for (a = 1, o = d[0]; o >= 10; o /= 10) a++;
                  for (o = d[0] += s, s = 1; o >= 10; o /= 10) s++;
                  a != s && (e.e++, d[0] == C && (d[0] = 1));
                  break;
                }
                if (((d[b] += s), d[b] != C)) break;
                (d[b--] = 0), (s = 1);
              }
            for (a = d.length; 0 === d[--a]; ) d.pop();
          }
          return (
            f &&
              (e.e > p.maxE
                ? ((e.d = null), (e.e = NaN))
                : e.e < p.minE && ((e.e = 0), (e.d = [0]))),
            e
          );
        }
        function T(e, t, n) {
          if (!e.isFinite()) return Y(e);
          var i,
            r = e.e,
            a = H(e.d),
            o = a.length;
          return (
            t
              ? (n && (i = n - o) > 0
                  ? (a = a.charAt(0) + "." + a.slice(1) + G(i))
                  : o > 1 && (a = a.charAt(0) + "." + a.slice(1)),
                (a = a + (e.e < 0 ? "e" : "e+") + e.e))
              : r < 0
              ? ((a = "0." + G(-r - 1) + a),
                n && (i = n - o) > 0 && (a += G(i)))
              : r >= o
              ? ((a += G(r + 1 - o)),
                n && (i = n - r - 1) > 0 && (a = a + "." + G(i)))
              : ((i = r + 1) < o && (a = a.slice(0, i) + "." + a.slice(i)),
                n &&
                  (i = n - o) > 0 &&
                  (r + 1 === o && (a += "."), (a += G(i)))),
            a
          );
        }
        function B(e, t) {
          var n = e[0];
          for (t *= M; n >= 10; n /= 10) t++;
          return t;
        }
        function I(e, t, n) {
          if (t > k) throw ((f = !0), n && (e.precision = n), Error(v));
          return P(new e(d), t, 1, !0);
        }
        function R(e, t, n) {
          if (t > E) throw Error(v);
          return P(new e(b), t, n, !0);
        }
        function D(e) {
          var t = e.length - 1,
            n = t * M + 1;
          if ((t = e[t])) {
            for (; t % 10 == 0; t /= 10) n--;
            for (t = e[0]; t >= 10; t /= 10) n++;
          }
          return n;
        }
        function G(e) {
          for (var t = ""; e--; ) t += "0";
          return t;
        }
        function V(e, t, n, i) {
          var r,
            a = new e(1),
            o = Math.ceil(i / M + 4);
          for (f = !1; ; ) {
            if (
              (n % 2 && te((a = a.times(t)).d, o) && (r = !0),
              0 === (n = O(n / 2)))
            ) {
              (n = a.d.length - 1), r && 0 === a.d[n] && ++a.d[n];
              break;
            }
            te((t = t.times(t)).d, o);
          }
          return (f = !0), a;
        }
        function Z(e) {
          return 1 & e.d[e.d.length - 1];
        }
        function U(e, t, n) {
          for (var i, r = new e(t[0]), a = 0; ++a < t.length; ) {
            if (!(i = new e(t[a])).s) {
              r = i;
              break;
            }
            r[n](i) && (r = i);
          }
          return r;
        }
        function q(e, t) {
          var n,
            i,
            r,
            a,
            o,
            s,
            c,
            l = 0,
            u = 0,
            d = 0,
            b = e.constructor,
            p = b.rounding,
            m = b.precision;
          if (!e.d || !e.d[0] || e.e > 17)
            return new b(
              e.d
                ? e.d[0]
                  ? e.s < 0
                    ? 0
                    : 1 / 0
                  : 1
                : e.s
                ? e.s < 0
                  ? 0
                  : e
                : NaN
            );
          for (
            null == t ? ((f = !1), (c = m)) : (c = t), s = new b(0.03125);
            e.e > -2;

          )
            (e = e.times(s)), (d += 5);
          for (
            c += i = ((Math.log(x(2, d)) / Math.LN10) * 2 + 5) | 0,
              n = a = o = new b(1),
              b.precision = c;
            ;

          ) {
            if (
              ((a = P(a.times(e), c, 1)),
              (n = n.times(++u)),
              H((s = o.plus(W(a, n, c, 1))).d).slice(0, c) ===
                H(o.d).slice(0, c))
            ) {
              for (r = d; r--; ) o = P(o.times(o), c, 1);
              if (null != t) return (b.precision = m), o;
              if (!(l < 3 && A(o.d, c - i, p, l)))
                return P(o, (b.precision = m), p, (f = !0));
              (b.precision = c += 10), (n = a = s = new b(1)), (u = 0), l++;
            }
            o = s;
          }
        }
        function z(e, t) {
          var n,
            i,
            r,
            a,
            o,
            s,
            c,
            l,
            u,
            d,
            b,
            p = 1,
            m = e,
            h = m.d,
            v = m.constructor,
            j = v.rounding,
            g = v.precision;
          if (m.s < 0 || !h || !h[0] || (!m.e && 1 == h[0] && 1 == h.length))
            return new v(h && !h[0] ? -1 / 0 : 1 != m.s ? NaN : h ? 0 : m);
          if (
            (null == t ? ((f = !1), (u = g)) : (u = t),
            (v.precision = u += 10),
            (i = (n = H(h)).charAt(0)),
            !(Math.abs((a = m.e)) < 15e14))
          )
            return (
              (l = I(v, u + 2, g).times(a + "")),
              (m = z(new v(i + "." + n.slice(1)), u - 10).plus(l)),
              (v.precision = g),
              null == t ? P(m, g, j, (f = !0)) : m
            );
          for (; (i < 7 && 1 != i) || (1 == i && n.charAt(1) > 3); )
            (i = (n = H((m = m.times(e)).d)).charAt(0)), p++;
          for (
            a = m.e,
              i > 1
                ? ((m = new v("0." + n)), a++)
                : (m = new v(i + "." + n.slice(1))),
              d = m,
              c = o = m = W(m.minus(1), m.plus(1), u, 1),
              b = P(m.times(m), u, 1),
              r = 3;
            ;

          ) {
            if (
              ((o = P(o.times(b), u, 1)),
              H((l = c.plus(W(o, new v(r), u, 1))).d).slice(0, u) ===
                H(c.d).slice(0, u))
            ) {
              if (
                ((c = c.times(2)),
                0 !== a && (c = c.plus(I(v, u + 2, g).times(a + ""))),
                (c = W(c, new v(p), u, 1)),
                null != t)
              )
                return (v.precision = g), c;
              if (!A(c.d, u - 10, j, s))
                return P(c, (v.precision = g), j, (f = !0));
              (v.precision = u += 10),
                (l = o = m = W(d.minus(1), d.plus(1), u, 1)),
                (b = P(m.times(m), u, 1)),
                (r = s = 1);
            }
            (c = l), (r += 2);
          }
        }
        function Y(e) {
          return String((e.s * e.s) / 0);
        }
        function K(e, t) {
          var n, i, r;
          for (
            (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
              (i = t.search(/e/i)) > 0
                ? (n < 0 && (n = i),
                  (n += +t.slice(i + 1)),
                  (t = t.substring(0, i)))
                : n < 0 && (n = t.length),
              i = 0;
            48 === t.charCodeAt(i);
            i++
          );
          for (r = t.length; 48 === t.charCodeAt(r - 1); --r);
          if ((t = t.slice(i, r))) {
            if (
              ((r -= i),
              (e.e = n = n - i - 1),
              (e.d = []),
              (i = (n + 1) % M),
              n < 0 && (i += M),
              i < r)
            ) {
              for (i && e.d.push(+t.slice(0, i)), r -= M; i < r; )
                e.d.push(+t.slice(i, (i += M)));
              (t = t.slice(i)), (i = M - t.length);
            } else i -= r;
            for (; i--; ) t += "0";
            e.d.push(+t),
              f &&
                (e.e > e.constructor.maxE
                  ? ((e.d = null), (e.e = NaN))
                  : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
          } else (e.e = 0), (e.d = [0]);
          return e;
        }
        function X(e, t) {
          var n, i, r, o, s, c, l, u, d;
          if (t.indexOf("_") > -1) {
            if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), N.test(t)))
              return K(e, t);
          } else if ("Infinity" === t || "NaN" === t)
            return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
          if (y.test(t)) (n = 16), (t = t.toLowerCase());
          else if (_.test(t)) n = 2;
          else {
            if (!w.test(t)) throw Error(h + t);
            n = 8;
          }
          for (
            (o = t.search(/p/i)) > 0
              ? ((l = +t.slice(o + 1)), (t = t.substring(2, o)))
              : (t = t.slice(2)),
              s = (o = t.indexOf(".")) >= 0,
              i = e.constructor,
              s &&
                ((o = (c = (t = t.replace(".", "")).length) - o),
                (r = V(i, new i(n), o, 2 * o))),
              o = d = (u = F(t, n, C)).length - 1;
            0 === u[o];
            --o
          )
            u.pop();
          return o < 0
            ? new i(0 * e.s)
            : ((e.e = B(u, d)),
              (e.d = u),
              (f = !1),
              s && (e = W(e, r, 4 * c)),
              l && (e = e.times(Math.abs(l) < 54 ? x(2, l) : a.pow(2, l))),
              (f = !0),
              e);
        }
        function J(e, t, n, i, r) {
          var a,
            o,
            s,
            c,
            l = e.precision,
            u = Math.ceil(l / M);
          for (f = !1, c = n.times(n), s = new e(i); ; ) {
            if (
              ((o = W(s.times(c), new e(t++ * t++), l, 1)),
              (s = r ? i.plus(o) : i.minus(o)),
              (i = W(o.times(c), new e(t++ * t++), l, 1)),
              void 0 !== (o = s.plus(i)).d[u])
            ) {
              for (a = u; o.d[a] === s.d[a] && a--; );
              if (-1 == a) break;
            }
            (a = s), (s = i), (i = o), (o = a);
          }
          return (f = !0), (o.d.length = u + 1), o;
        }
        function $(e, t) {
          for (var n = e; --t; ) n *= e;
          return n;
        }
        function Q(e, t) {
          var n,
            i = t.s < 0,
            r = R(e, e.precision, 1),
            a = r.times(0.5);
          if ((t = t.abs()).lte(a)) return (s = i ? 4 : 1), t;
          if ((n = t.divToInt(r)).isZero()) s = i ? 3 : 2;
          else {
            if ((t = t.minus(n.times(r))).lte(a))
              return (s = Z(n) ? (i ? 2 : 3) : i ? 4 : 1), t;
            s = Z(n) ? (i ? 1 : 4) : i ? 3 : 2;
          }
          return t.minus(r).abs();
        }
        function ee(e, t, n, i) {
          var r,
            a,
            s,
            c,
            d,
            b,
            p,
            f,
            m,
            h = e.constructor,
            v = void 0 !== n;
          if (
            (v
              ? (S(n, 1, l), void 0 === i ? (i = h.rounding) : S(i, 0, 8))
              : ((n = h.precision), (i = h.rounding)),
            e.isFinite())
          ) {
            for (
              v
                ? ((r = 2),
                  16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2))
                : (r = t),
                (s = (p = T(e)).indexOf(".")) >= 0 &&
                  ((p = p.replace(".", "")),
                  ((m = new h(1)).e = p.length - s),
                  (m.d = F(T(m), 10, r)),
                  (m.e = m.d.length)),
                a = d = (f = F(p, 10, r)).length;
              0 == f[--d];

            )
              f.pop();
            if (f[0]) {
              if (
                (s < 0
                  ? a--
                  : (((e = new h(e)).d = f),
                    (e.e = a),
                    (f = (e = W(e, m, n, i, 0, r)).d),
                    (a = e.e),
                    (b = o)),
                (s = f[n]),
                (c = r / 2),
                (b = b || void 0 !== f[n + 1]),
                (b =
                  i < 4
                    ? (void 0 !== s || b) &&
                      (0 === i || i === (e.s < 0 ? 3 : 2))
                    : s > c ||
                      (s === c &&
                        (4 === i ||
                          b ||
                          (6 === i && 1 & f[n - 1]) ||
                          i === (e.s < 0 ? 8 : 7)))),
                (f.length = n),
                b)
              )
                for (; ++f[--n] > r - 1; ) (f[n] = 0), n || (++a, f.unshift(1));
              for (d = f.length; !f[d - 1]; --d);
              for (s = 0, p = ""; s < d; s++) p += u.charAt(f[s]);
              if (v) {
                if (d > 1)
                  if (16 == t || 8 == t) {
                    for (s = 16 == t ? 4 : 3, --d; d % s; d++) p += "0";
                    for (d = (f = F(p, r, t)).length; !f[d - 1]; --d);
                    for (s = 1, p = "1."; s < d; s++) p += u.charAt(f[s]);
                  } else p = p.charAt(0) + "." + p.slice(1);
                p = p + (a < 0 ? "p" : "p+") + a;
              } else if (a < 0) {
                for (; ++a; ) p = "0" + p;
                p = "0." + p;
              } else if (++a > d) for (a -= d; a--; ) p += "0";
              else a < d && (p = p.slice(0, a) + "." + p.slice(a));
            } else p = v ? "0p+0" : "0";
            p = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + p;
          } else p = Y(e);
          return e.s < 0 ? "-" + p : p;
        }
        function te(e, t) {
          if (e.length > t) return (e.length = t), !0;
        }
        function ne(e) {
          return new this(e).abs();
        }
        function ie(e) {
          return new this(e).acos();
        }
        function re(e) {
          return new this(e).acosh();
        }
        function ae(e, t) {
          return new this(e).plus(t);
        }
        function oe(e) {
          return new this(e).asin();
        }
        function se(e) {
          return new this(e).asinh();
        }
        function ce(e) {
          return new this(e).atan();
        }
        function le(e) {
          return new this(e).atanh();
        }
        function ue(e, t) {
          (e = new this(e)), (t = new this(t));
          var n,
            i = this.precision,
            r = this.rounding,
            a = i + 4;
          return (
            e.s && t.s
              ? e.d || t.d
                ? !t.d || e.isZero()
                  ? ((n = t.s < 0 ? R(this, i, r) : new this(0)).s = e.s)
                  : !e.d || t.isZero()
                  ? ((n = R(this, a, 1).times(0.5)).s = e.s)
                  : t.s < 0
                  ? ((this.precision = a),
                    (this.rounding = 1),
                    (n = this.atan(W(e, t, a, 1))),
                    (t = R(this, a, 1)),
                    (this.precision = i),
                    (this.rounding = r),
                    (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                  : (n = this.atan(W(e, t, a, 1)))
                : ((n = R(this, a, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
              : (n = new this(NaN)),
            n
          );
        }
        function de(e) {
          return new this(e).cbrt();
        }
        function be(e) {
          return P((e = new this(e)), e.e + 1, 2);
        }
        function pe(e, t, n) {
          return new this(e).clamp(t, n);
        }
        function fe(e) {
          if (!e || "object" !== typeof e) throw Error(m + "Object expected");
          var t,
            n,
            i,
            r = !0 === e.defaults,
            a = [
              "precision",
              1,
              l,
              "rounding",
              0,
              8,
              "toExpNeg",
              -c,
              0,
              "toExpPos",
              0,
              c,
              "maxE",
              0,
              c,
              "minE",
              -c,
              0,
              "modulo",
              0,
              9,
            ];
          for (t = 0; t < a.length; t += 3)
            if (((n = a[t]), r && (this[n] = p[n]), void 0 !== (i = e[n]))) {
              if (!(O(i) === i && i >= a[t + 1] && i <= a[t + 2]))
                throw Error(h + n + ": " + i);
              this[n] = i;
            }
          if (((n = "crypto"), r && (this[n] = p[n]), void 0 !== (i = e[n]))) {
            if (!0 !== i && !1 !== i && 0 !== i && 1 !== i)
              throw Error(h + n + ": " + i);
            if (i) {
              if (
                "undefined" == typeof crypto ||
                !crypto ||
                (!crypto.getRandomValues && !crypto.randomBytes)
              )
                throw Error(j);
              this[n] = !0;
            } else this[n] = !1;
          }
          return this;
        }
        function me(e) {
          return new this(e).cos();
        }
        function he(e) {
          return new this(e).cosh();
        }
        function ve(e, t) {
          return new this(e).div(t);
        }
        function je(e) {
          return new this(e).exp();
        }
        function ge(e) {
          return P((e = new this(e)), e.e + 1, 3);
        }
        function Oe() {
          var e,
            t,
            n = new this(0);
          for (f = !1, e = 0; e < arguments.length; )
            if ((t = new this(arguments[e++])).d)
              n.d && (n = n.plus(t.times(t)));
            else {
              if (t.s) return (f = !0), new this(1 / 0);
              n = t;
            }
          return (f = !0), n.sqrt();
        }
        function xe(e) {
          return e instanceof a || (e && e.toStringTag === g) || !1;
        }
        function _e(e) {
          return new this(e).ln();
        }
        function ye(e, t) {
          return new this(e).log(t);
        }
        function we(e) {
          return new this(e).log(2);
        }
        function Ne(e) {
          return new this(e).log(10);
        }
        function Ce() {
          return U(this, arguments, "lt");
        }
        function Me() {
          return U(this, arguments, "gt");
        }
        function ke(e, t) {
          return new this(e).mod(t);
        }
        function Ee(e, t) {
          return new this(e).mul(t);
        }
        function Le(e, t) {
          return new this(e).pow(t);
        }
        function He(e) {
          var t,
            n,
            i,
            r,
            a = 0,
            o = new this(1),
            s = [];
          if (
            (void 0 === e ? (e = this.precision) : S(e, 1, l),
            (i = Math.ceil(e / M)),
            this.crypto)
          )
            if (crypto.getRandomValues)
              for (t = crypto.getRandomValues(new Uint32Array(i)); a < i; )
                (r = t[a]) >= 429e7
                  ? (t[a] = crypto.getRandomValues(new Uint32Array(1))[0])
                  : (s[a++] = r % 1e7);
            else {
              if (!crypto.randomBytes) throw Error(j);
              for (t = crypto.randomBytes((i *= 4)); a < i; )
                (r =
                  t[a] +
                  (t[a + 1] << 8) +
                  (t[a + 2] << 16) +
                  ((127 & t[a + 3]) << 24)) >= 214e7
                  ? crypto.randomBytes(4).copy(t, a)
                  : (s.push(r % 1e7), (a += 4));
              a = i / 4;
            }
          else for (; a < i; ) s[a++] = (1e7 * Math.random()) | 0;
          for (
            i = s[--a],
              e %= M,
              i && e && ((r = x(10, M - e)), (s[a] = ((i / r) | 0) * r));
            0 === s[a];
            a--
          )
            s.pop();
          if (a < 0) (n = 0), (s = [0]);
          else {
            for (n = -1; 0 === s[0]; n -= M) s.shift();
            for (i = 1, r = s[0]; r >= 10; r /= 10) i++;
            i < M && (n -= M - i);
          }
          return (o.e = n), (o.d = s), o;
        }
        function Se(e) {
          return P((e = new this(e)), e.e + 1, this.rounding);
        }
        function Ae(e) {
          return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
        }
        function Fe(e) {
          return new this(e).sin();
        }
        function We(e) {
          return new this(e).sinh();
        }
        function Pe(e) {
          return new this(e).sqrt();
        }
        function Te(e, t) {
          return new this(e).sub(t);
        }
        function Be() {
          var e = 0,
            t = arguments,
            n = new this(t[e]);
          for (f = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
          return (f = !0), P(n, this.precision, this.rounding);
        }
        function Ie(e) {
          return new this(e).tan();
        }
        function Re(e) {
          return new this(e).tanh();
        }
        function De(e) {
          return P((e = new this(e)), e.e + 1, 1);
        }
        (a = (function e(t) {
          var n, i, r;
          function a(e) {
            var t,
              n,
              i,
              r = this;
            if (!(r instanceof a)) return new a(e);
            if (((r.constructor = a), xe(e)))
              return (
                (r.s = e.s),
                void (f
                  ? !e.d || e.e > a.maxE
                    ? ((r.e = NaN), (r.d = null))
                    : e.e < a.minE
                    ? ((r.e = 0), (r.d = [0]))
                    : ((r.e = e.e), (r.d = e.d.slice()))
                  : ((r.e = e.e), (r.d = e.d ? e.d.slice() : e.d)))
              );
            if ("number" === (i = typeof e)) {
              if (0 === e)
                return (r.s = 1 / e < 0 ? -1 : 1), (r.e = 0), void (r.d = [0]);
              if (
                (e < 0 ? ((e = -e), (r.s = -1)) : (r.s = 1),
                e === ~~e && e < 1e7)
              ) {
                for (t = 0, n = e; n >= 10; n /= 10) t++;
                return void (f
                  ? t > a.maxE
                    ? ((r.e = NaN), (r.d = null))
                    : t < a.minE
                    ? ((r.e = 0), (r.d = [0]))
                    : ((r.e = t), (r.d = [e]))
                  : ((r.e = t), (r.d = [e])));
              }
              return 0 * e !== 0
                ? (e || (r.s = NaN), (r.e = NaN), void (r.d = null))
                : K(r, e.toString());
            }
            if ("string" !== i) throw Error(h + e);
            return (
              45 === (n = e.charCodeAt(0))
                ? ((e = e.slice(1)), (r.s = -1))
                : (43 === n && (e = e.slice(1)), (r.s = 1)),
              N.test(e) ? K(r, e) : X(r, e)
            );
          }
          if (
            ((a.prototype = L),
            (a.ROUND_UP = 0),
            (a.ROUND_DOWN = 1),
            (a.ROUND_CEIL = 2),
            (a.ROUND_FLOOR = 3),
            (a.ROUND_HALF_UP = 4),
            (a.ROUND_HALF_DOWN = 5),
            (a.ROUND_HALF_EVEN = 6),
            (a.ROUND_HALF_CEIL = 7),
            (a.ROUND_HALF_FLOOR = 8),
            (a.EUCLID = 9),
            (a.config = a.set = fe),
            (a.clone = e),
            (a.isDecimal = xe),
            (a.abs = ne),
            (a.acos = ie),
            (a.acosh = re),
            (a.add = ae),
            (a.asin = oe),
            (a.asinh = se),
            (a.atan = ce),
            (a.atanh = le),
            (a.atan2 = ue),
            (a.cbrt = de),
            (a.ceil = be),
            (a.clamp = pe),
            (a.cos = me),
            (a.cosh = he),
            (a.div = ve),
            (a.exp = je),
            (a.floor = ge),
            (a.hypot = Oe),
            (a.ln = _e),
            (a.log = ye),
            (a.log10 = Ne),
            (a.log2 = we),
            (a.max = Ce),
            (a.min = Me),
            (a.mod = ke),
            (a.mul = Ee),
            (a.pow = Le),
            (a.random = He),
            (a.round = Se),
            (a.sign = Ae),
            (a.sin = Fe),
            (a.sinh = We),
            (a.sqrt = Pe),
            (a.sub = Te),
            (a.sum = Be),
            (a.tan = Ie),
            (a.tanh = Re),
            (a.trunc = De),
            void 0 === t && (t = {}),
            t && !0 !== t.defaults)
          )
            for (
              r = [
                "precision",
                "rounding",
                "toExpNeg",
                "toExpPos",
                "maxE",
                "minE",
                "modulo",
                "crypto",
              ],
                n = 0;
              n < r.length;

            )
              t.hasOwnProperty((i = r[n++])) || (t[i] = this[i]);
          return a.config(t), a;
        })(p)),
          (a.prototype.constructor = a),
          (a.default = a.Decimal = a),
          (d = new a(d)),
          (b = new a(b)),
          void 0 ===
            (i = function () {
              return a;
            }.call(t, n, t, e)) || (e.exports = i);
      })();
    },
    53: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return l;
      }),
        n.d(t, "a", function () {
          return b;
        }),
        n.d(t, "c", function () {
          return N;
        }),
        n.d(t, "b", function () {
          return E;
        });
      var i = n(3),
        r = n.n(i),
        a = n(15),
        o = n(57),
        s = n.n(o),
        c = n(0),
        l = function (e) {
          var t = e.row,
            n = e.columns,
            r = e.loading,
            o = e.isMobile,
            l = e.withoutDefaultStyles,
            u = e.className;
          return Object(c.jsx)("div", {
            className: Object(a.a)(
              s.a.rowWrapper,
              !l && "standardTable_row",
              u
            ),
            children: n.map(function (e, n) {
              return r
                ? Object(c.jsx)(
                    "div",
                    { className: "skeleton" },
                    "".concat(e.field, "_").concat(n)
                  )
                : Object.keys(t).includes(e.field)
                ? e.valueRender
                  ? Object(c.jsx)(
                      i.Fragment,
                      {
                        children: e.valueRender({
                          index: n,
                          loading: r,
                          src: t,
                          mobile: o,
                          value: t[e.field],
                        }),
                      },
                      "".concat(e.field, "_").concat(n)
                    )
                  : Object(c.jsx)(
                      "span",
                      { children: t[e.field] },
                      "".concat(e.field, "_").concat(n)
                    )
                : null;
            }),
          });
        },
        u = n(58),
        d = n.n(u),
        b = function (e) {
          var t = e.description,
            n = e.classes;
          return Object(c.jsxs)("div", {
            className: Object(a.a)(
              d.a.wrapper,
              null === n || void 0 === n ? void 0 : n.root
            ),
            children: [
              Object(c.jsx)("span", {
                className: Object(a.a)(
                  d.a.title,
                  null === n || void 0 === n ? void 0 : n.title
                ),
                children: "Whoops!",
              }),
              Object(c.jsx)("div", {
                className: Object(a.a)(
                  d.a.description,
                  null === n || void 0 === n ? void 0 : n.description
                ),
                children: t || "There are no data to show you.",
              }),
              Object(c.jsx)("img", {
                className: null === n || void 0 === n ? void 0 : n.image,
                src: "/images/empty.webp",
                alt: "empty",
              }),
            ],
          });
        },
        p = n(16),
        f = n(20),
        m = n(18),
        h = n(22),
        v = n(59),
        j = n.n(v),
        g = [
          "maxButtonVisible",
          "showPrevNextButton",
          "showFirstLastPage",
          "page",
          "pageAmount",
          "classes",
          "onChange",
          "disabled",
        ],
        O = function (e) {
          var t = e.className;
          return Object(c.jsx)("span", {
            className: Object(a.a)(j.a.skip, t),
            children: "...",
          });
        },
        x = function (e) {
          var t = e.maxButtonVisible,
            n = void 0 === t ? 3 : t,
            i = e.showPrevNextButton,
            o = e.showFirstLastPage,
            s = e.page,
            l = e.pageAmount,
            u = e.classes,
            d = e.onChange,
            b = e.disabled,
            v = Object(f.a)(e, g),
            x = function () {
              for (
                var e = [],
                  t = Math.floor(n / 2),
                  i = Math.max(s - t, 1),
                  p = Math.min(s + t, l),
                  f = function (t) {
                    var n = t === s,
                      r = Object(c.jsx)(
                        m.a,
                        {
                          onClick: function () {
                            return d && d(t);
                          },
                          disabled: n || b,
                          className: Object(a.a)(
                            null === u || void 0 === u ? void 0 : u.button,
                            j.a.button,
                            n && [
                              j.a.active,
                              null === u || void 0 === u
                                ? void 0
                                : u.activePage,
                            ]
                          ),
                          children: t,
                        },
                        t
                      );
                    ((1 === t || t === l) && o) ||
                      (e.push(r),
                      t === p && p + 1 < l
                        ? e.push(
                            Object(c.jsx)(O, {
                              className:
                                null === u || void 0 === u ? void 0 : u.skip,
                            })
                          )
                        : t === i &&
                          i - 1 > 1 &&
                          e.splice(
                            e.length - 2,
                            0,
                            Object(c.jsx)(O, {
                              className:
                                null === u || void 0 === u ? void 0 : u.skip,
                            })
                          ));
                  },
                  h = i;
                h <= p;
                h++
              )
                f(h);
              return Object(c.jsx)(c.Fragment, {
                children: e.map(function (t, n) {
                  return Object(c.jsx)(
                    r.a.Fragment,
                    { children: t },
                    "".concat(t.key, "_").concat(n, "_").concat(e.length)
                  );
                }),
              });
            },
            _ = 1 === s || b,
            y = s === l || b;
          return Object(c.jsxs)(
            "div",
            Object(p.a)(
              Object(p.a)(
                {
                  className: Object(a.a)(
                    j.a.root,
                    null === u || void 0 === u ? void 0 : u.root
                  ),
                },
                v
              ),
              {},
              {
                children: [
                  i &&
                    Object(c.jsx)(m.a, {
                      onClick: function () {
                        return d && d(Math.max(1, s - 1));
                      },
                      disabled: _,
                      className: Object(a.a)(
                        null === u || void 0 === u ? void 0 : u.button,
                        j.a.button
                      ),
                      children: Object(c.jsx)(h.J, {}),
                    }),
                  o &&
                    Object(c.jsx)(m.a, {
                      onClick: function () {
                        return d && d(1);
                      },
                      disabled: _,
                      className: Object(a.a)(
                        null === u || void 0 === u ? void 0 : u.button,
                        j.a.button,
                        1 === s && [
                          j.a.active,
                          null === u || void 0 === u ? void 0 : u.activePage,
                        ]
                      ),
                      children: "1",
                    }),
                  Object(c.jsx)(x, {}),
                  o &&
                    l > 1 &&
                    Object(c.jsx)(m.a, {
                      onClick: function () {
                        return d && d(l);
                      },
                      disabled: y,
                      className: Object(a.a)(
                        null === u || void 0 === u ? void 0 : u.button,
                        j.a.button,
                        s === l && [
                          j.a.active,
                          null === u || void 0 === u ? void 0 : u.activePage,
                        ]
                      ),
                      children: l,
                    }),
                  i &&
                    Object(c.jsx)(m.a, {
                      onClick: function () {
                        return d && d(Math.min(l, s + 1));
                      },
                      disabled: y,
                      className: Object(a.a)(
                        null === u || void 0 === u ? void 0 : u.button,
                        j.a.button
                      ),
                      children: Object(c.jsx)(h.J, {}),
                    }),
                ],
              }
            )
          );
        },
        _ = n(28),
        y = n(60),
        w = n.n(y),
        N = function (e) {
          var t = e.page,
            n = e.pageAmount,
            i = e.setPage,
            r = e.loading,
            o = e.direction,
            s = e.classes;
          return Object(c.jsx)(x, {
            page: t,
            pageAmount: n,
            onChange: i,
            disabled: r,
            showFirstLastPage: !0,
            showPrevNextButton: !0,
            style: {
              justifyContent:
                o === _.a.LEFT
                  ? "flex-start"
                  : o === _.a.RIGHT
                  ? "flex-end"
                  : "center",
            },
            classes: {
              root: Object(a.a)(
                "standardPagination",
                w.a.pagination,
                null === s || void 0 === s ? void 0 : s.pagination
              ),
              button: "standardPagination_button",
              activePage: Object(a.a)(
                "standardPagination_active",
                null === s || void 0 === s ? void 0 : s.paginationActive
              ),
            },
          });
        },
        C = n(42),
        M = n(61),
        k = n.n(M),
        E = function (e) {
          var t = e.data,
            n = e.loading,
            i = e.cardTypes,
            r = e.classes;
          return Object(c.jsx)("div", {
            className: Object(a.a)(
              k.a.wrapper,
              "standardTableCard",
              null === r || void 0 === r ? void 0 : r.row
            ),
            children: i.map(function (e, i) {
              return Object(c.jsxs)(
                "div",
                {
                  className: Object(a.a)(
                    k.a.cardValueWrapper,
                    null !== r && void 0 !== r && r.elements
                      ? null === r || void 0 === r
                        ? void 0
                        : r.elements[i]
                      : ""
                  ),
                  children: [
                    Object(c.jsx)("span", {
                      className: k.a.cardTitle,
                      children: e.headerName,
                    }),
                    !t || Object(C.b)(t[e.field])
                      ? Object(c.jsx)("div", { className: "skeleton" })
                      : e.valueRender
                      ? e.valueRender({
                          value: t[e.field],
                          loading: n,
                          src: t,
                          index: i,
                          mobile: !0,
                        })
                      : n
                      ? Object(c.jsx)("div", { className: "skeleton" })
                      : Object(c.jsx)("span", {
                          className: "cardValue",
                          children: t[e.field],
                        }),
                  ],
                },
                "".concat(e.field, "__").concat(i)
              );
            }),
          });
        };
    },
    55: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var i = n(15),
        r = n(18),
        a = n(22),
        o = n(56),
        s = n.n(o),
        c = n(0),
        l = function (e) {
          var t = e.currentPage,
            n = e.isNextPageExist,
            o = e.setPage,
            l = e.className,
            u = Number(t);
          return Object(c.jsxs)("div", {
            className: Object(i.a)(s.a.infinityPagination, l),
            children: [
              Object(c.jsx)(r.a, {
                disabled: u <= 1,
                onClick: function () {
                  return o(u - 1);
                },
                children: Object(c.jsx)(a.p, {}),
              }),
              Object(c.jsx)(r.a, {
                disabled: !n,
                onClick: function () {
                  return o(u + 1);
                },
                children: Object(c.jsx)(a.p, {}),
              }),
            ],
          });
        };
    },
    56: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        infinityPagination: "style_infinityPagination__oNkra",
      };
    },
    57: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        rowWrapper: "style_rowWrapper__3zn_i",
      };
    },
    58: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        wrapper: "styles_wrapper__2NARE",
        title: "styles_title__163RY",
        description: "styles_description__35S5N",
      };
    },
    59: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        button: "style_button__ilHkP",
        skip: "style_skip__Bq5pO",
      };
    },
    60: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        pagination: "style_pagination__1yOml",
      };
    },
    61: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        wrapper: "style_wrapper__6fuBt",
        cardValueWrapper: "style_cardValueWrapper__2gUA0",
        cardTitle: "style_cardTitle__3u3ae",
      };
    },
    62: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        select: "style_select__1SCn2",
        labelWrapper: "style_labelWrapper__1XecV",
        topLabel: "style_topLabel__154X5",
        arrow: "style_arrow__2T4YY",
        arrowOpen: "style_arrowOpen__1eSQN",
        optionContainer: "style_optionContainer__3aCvv",
        expandSelect: "style_expandSelect__3_3EW",
        noOptionsItem: "style_noOptionsItem__1kpIk",
      };
    },
    640: function (e, t, n) {
      e.exports = { input: "input_input__1JMN1" };
    },
    69: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return b;
      });
      var i = n(16),
        r = n(19),
        a = n(20),
        o = n(3),
        s = n(15),
        c = n(73),
        l = n.n(c),
        u = n(0),
        d = ["children", "position"],
        b = Object(o.forwardRef)(function (e, t) {
          var n = e.children,
            o = e.position,
            c = Object(a.a)(e, d);
          return Object(u.jsx)(
            "div",
            Object(i.a)(
              Object(i.a)({ ref: t }, c),
              {},
              {
                className: Object(s.a)(
                  l.a.adornmentRoot,
                  Object(r.a)({}, l.a.start, "start" === o),
                  Object(r.a)({}, l.a.end, "end" === o),
                  c.className
                ),
                children: n,
              }
            )
          );
        });
    },
    72: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        dialogContainer: "style_dialogContainer__si-_-",
        paperOpenAnimation: "style_paperOpenAnimation__5pp-n",
        topPosition: "style_topPosition__1nwdA",
        close: "style_close__1ZXLA",
        curtain: "style_curtain__2GrGT",
        dialog: "style_dialog__2iD0i",
        openAnimation: "style_openAnimation__2hvo8",
        open: "style_open__1-JCn",
        closeAnimation: "style_closeAnimation__22MKm",
        fullScreen: "style_fullScreen__3ejYw",
        standard: "style_standard__1F-TE",
        radial: "style_radial__abEQi",
        standardCloseIcon: "style_standardCloseIcon__19REk",
        closeIcon: "style_closeIcon__1aQkG",
      };
    },
    73: function (e, t, n) {
      e.exports = {
        adornmentRoot: "style_adornmentRoot___ksbz",
        start: "style_start__2S3AY",
        end: "style_end__XVH_Y",
      };
    },
    75: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return _;
      });
      var i = n(16),
        r = n(30),
        a = n(20),
        o = n(3),
        s = n(15),
        c = n(21),
        l = n(27),
        u = n(33),
        d = n(48),
        b = n(26),
        p = n(1),
        f = n(4),
        m = n(17),
        h = n(23),
        v = n(71),
        j = n(31),
        g = n(0),
        O = Object(j.b)(function () {
          return Promise.all([n.e(4), n.e(120)]).then(n.bind(null, 1438));
        }),
        x = [
          "withoutLabel",
          "className",
          "classes",
          "selectorClassName",
          "withoutBalance",
          "shortDescription",
          "formatString",
          "coinsFilter",
          "label",
          "error",
          "optionsPosition",
          "isEnableBalanceAnimation",
          "optionsWidth",
          "optionsCoords",
          "disabled",
          "customCoin",
          "customSetCoin",
          "frontComponent",
        ],
        _ = function (e) {
          var t = e.withoutLabel,
            j = e.className,
            _ = e.classes,
            y = e.selectorClassName,
            w = e.withoutBalance,
            N = e.shortDescription,
            C = e.formatString,
            M = void 0 === C ? "b s" : C,
            k = e.coinsFilter,
            E = (e.label, e.error),
            L = e.optionsPosition,
            H = e.isEnableBalanceAnimation,
            S = void 0 !== H && H,
            A = e.optionsWidth,
            F = e.optionsCoords,
            W = e.disabled,
            P = e.customCoin,
            T = e.customSetCoin,
            B = e.frontComponent,
            I = Object(a.a)(e, x),
            R = Object(c.j)(),
            D = R.selectedCoin,
            G = R.coins,
            V = R.setSelectedCoin,
            Z = Object(o.useMemo)(
              function () {
                return P || D;
              },
              [P, D]
            ),
            U = Object(o.useMemo)(
              function () {
                return T || V;
              },
              [T, V]
            ),
            q = (function (e, t) {
              var i = Object(o.useState)([]),
                a = Object(m.a)(i, 2),
                s = a[0],
                c = a[1],
                l = Object(o.useRef)({
                  previousBalance: null,
                  profitParts: new Map(),
                });
              return (
                Object(o.useEffect)(
                  function () {
                    if (t && null !== e && void 0 !== e && e.balance) {
                      var i = (function () {
                        var t = Object(f.a)(
                          Object(p.a)().mark(function t() {
                            var i, a, o, s, u, d, b, f;
                            return Object(p.a)().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (
                                      ((i = function () {
                                        l.current.previousBalance = {
                                          balance: e.balance,
                                          symbol: e.symbol,
                                        };
                                      }),
                                      (a = l.current),
                                      (o = a.previousBalance),
                                      (s = a.profitParts),
                                      o && o.symbol === e.symbol)
                                    ) {
                                      t.next = 5;
                                      break;
                                    }
                                    return i(), t.abrupt("return");
                                  case 5:
                                    return (
                                      (t.next = 7),
                                      Promise.all([n.e(4), n.e(18)]).then(
                                        n.bind(null, 77)
                                      )
                                    );
                                  case 7:
                                    if (
                                      ((u = t.sent),
                                      (d = u.DECIMAL_ZERO),
                                      (b = u.toDecimal),
                                      !(f = b(e.balance)
                                        .minus(o.balance)
                                        .toDecimalPlaces(h.a)).equals(d))
                                    ) {
                                      t.next = 13;
                                      break;
                                    }
                                    return t.abrupt("return");
                                  case 13:
                                    i(),
                                      s.set(Object(v.a)(6), f),
                                      (function e() {
                                        var t,
                                          n = [],
                                          i = Object(r.a)(s.entries());
                                        try {
                                          var a = function () {
                                            var i = Object(m.a)(t.value, 2),
                                              r = i[0],
                                              a = i[1];
                                            n.push(
                                              Object(g.jsx)(
                                                O,
                                                {
                                                  amount: a,
                                                  onExitAnimationEnd:
                                                    function () {
                                                      s.delete(r), e();
                                                    },
                                                },
                                                r
                                              )
                                            );
                                          };
                                          for (i.s(); !(t = i.n()).done; ) a();
                                        } catch (o) {
                                          i.e(o);
                                        } finally {
                                          i.f();
                                        }
                                        c(n);
                                      })();
                                  case 17:
                                  case "end":
                                    return t.stop();
                                }
                            }, t);
                          })
                        );
                        return function () {
                          return t.apply(this, arguments);
                        };
                      })();
                      i();
                    }
                  },
                  [
                    null === e || void 0 === e ? void 0 : e.balance,
                    null === e || void 0 === e ? void 0 : e.symbol,
                    t,
                  ]
                ),
                s
              );
            })(Z, S);
          Object(o.useEffect)(
            function () {
              null !== k &&
                void 0 !== k &&
                k.length &&
                -1 ===
                  k.indexOf(
                    (null === Z || void 0 === Z ? void 0 : Z.symbol) || ""
                  ) &&
                U(k[0]);
            },
            [k, Z]
          );
          var z = Object(o.useMemo)(
            function () {
              if (!G.length) return [];
              var e,
                t = k ? new Set(k) : null,
                n = [],
                i = Object(r.a)(G);
              try {
                var a = function () {
                  var i = e.value;
                  if (!(!t || t.has(i.symbol))) return 1;
                  var r = { n: i.name, s: i.symbol, b: Object(l.a)(i.balance) },
                    a = M.replace(/n|s|b/g, function (e) {
                      return r[e];
                    });
                  n.push(
                    Object(g.jsx)(
                      d.a,
                      {
                        value: i.symbol,
                        children: Object(g.jsxs)("div", {
                          className: Object(s.a)(
                            "coinSelect_item",
                            null === _ || void 0 === _ ? void 0 : _.item
                          ),
                          children: [
                            Object(g.jsx)(b.a, {
                              className: "coinSelect_coinImg",
                              coin: i.symbol,
                            }),
                            Object(g.jsx)("span", {
                              className: "coinSelect_balance",
                              children: a,
                            }),
                          ],
                        }),
                      },
                      "".concat(i.name, "_").concat(i.symbol)
                    )
                  );
                };
                for (i.s(); !(e = i.n()).done; ) a();
              } catch (o) {
                i.e(o);
              } finally {
                i.f();
              }
              return n;
            },
            [k, G]
          );
          return Object(g.jsxs)(
            "div",
            Object(i.a)(
              Object(i.a)({}, I),
              {},
              {
                className: Object(s.a)("coinSelect_root", j),
                children: [
                  !t &&
                    Object(g.jsx)("label", {
                      className: Object(s.a)(
                        "coinSelect_label",
                        null === _ || void 0 === _ ? void 0 : _.title
                      ),
                      children: "coin",
                    }),
                  Object(g.jsx)(u.a, {
                    onChange: U,
                    disabled: W,
                    value:
                      (null === Z || void 0 === Z ? void 0 : Z.symbol) || "BTC",
                    className: Object(s.a)("coinSelect_select", y),
                    optionsPosition: L,
                    optionsWidth: A,
                    classes: Object(i.a)(
                      {
                        arrow: Object(s.a)(
                          "coinSelect_arrow",
                          null === _ || void 0 === _ ? void 0 : _.arrow
                        ),
                        root: null === _ || void 0 === _ ? void 0 : _.wrapper,
                        frontComponent: "frontSelectCoinImg",
                        options:
                          null === _ || void 0 === _ ? void 0 : _.options,
                      },
                      _
                    ),
                    errors: E,
                    frontComponent: B
                      ? Object(g.jsx)(B, { selectedCoin: Z })
                      : Object(g.jsxs)("div", {
                          className: Object(s.a)(
                            "coinSelect_selectFront",
                            null === _ || void 0 === _
                              ? void 0
                              : _.frontComponent
                          ),
                          children: [
                            !N &&
                              Object(g.jsxs)(g.Fragment, {
                                children: [
                                  Object(g.jsx)(b.a, {
                                    className: Object(s.a)(
                                      "coinSelect_coinImg",
                                      null === _ || void 0 === _
                                        ? void 0
                                        : _.coinImg
                                    ),
                                    coin:
                                      (null === Z || void 0 === Z
                                        ? void 0
                                        : Z.symbol) || "BTC",
                                  }),
                                  Object(g.jsx)("span", {
                                    className: Object(s.a)(
                                      "coinSelect_coinName",
                                      null === _ || void 0 === _
                                        ? void 0
                                        : _.label
                                    ),
                                    children:
                                      null === Z || void 0 === Z
                                        ? void 0
                                        : Z.name,
                                  }),
                                ],
                              }),
                            Object(g.jsxs)("span", {
                              className: "coinSelect_coinSymbol",
                              children: [
                                "(",
                                (null === P || void 0 === P
                                  ? void 0
                                  : P.symbol) ||
                                  (null === Z || void 0 === Z
                                    ? void 0
                                    : Z.symbol),
                                ")",
                              ],
                            }),
                            w
                              ? null
                              : Object(g.jsxs)("div", {
                                  className: Object(s.a)(
                                    "coinSelect_balance",
                                    null === _ || void 0 === _
                                      ? void 0
                                      : _.label
                                  ),
                                  children: [
                                    S && q,
                                    Object(g.jsx)("span", {
                                      children: Object(l.a)(
                                        (null === Z || void 0 === Z
                                          ? void 0
                                          : Z.balance) || 0
                                      ),
                                    }),
                                  ],
                                }),
                          ],
                        }),
                    optionsCoords: F,
                    children: z,
                  }),
                ],
              }
            )
          );
        };
    },
    77: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "toDecimal", function () {
          return o;
        });
      var i = n(52);
      for (var r in i)
        ["default", "toDecimal"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return i[e];
            });
          })(r);
      var a = n(94);
      n.d(t, "DECIMAL_ZERO", function () {
        return a.a;
      });
      var o = function (e) {
        return new i.Decimal("" === e ? 0 : e);
      };
    },
    79: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        root: "style_root__1vpFf",
        input: "style_input__3sKpF",
        inputDisabled: "style_inputDisabled__20hDi",
        topLabel: "style_topLabel__2yXX-",
        fullWidth: "style_fullWidth__I8pqw",
        coin: "style_coin__4gNUu",
        refreshIcon: "style_refreshIcon__23Ky7",
        desktopButtons: "style_desktopButtons__1KgHC",
        textAdornment: "style_textAdornment__3vugk",
        mobileButtons: "style_mobileButtons__33mZ7",
      };
    },
    81: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return P;
      }),
        n.d(t, "g", function () {
          return S;
        }),
        n.d(t, "j", function () {
          return T;
        }),
        n.d(t, "b", function () {
          return B;
        }),
        n.d(t, "i", function () {
          return I;
        }),
        n.d(t, "d", function () {
          return R;
        }),
        n.d(t, "a", function () {
          return D;
        }),
        n.d(t, "f", function () {
          return We;
        }),
        n.d(t, "h", function () {
          return Pe.a;
        }),
        n.d(t, "c", function () {
          return Te;
        });
      var i,
        r,
        a,
        o,
        s,
        c,
        l,
        u,
        d,
        b,
        p,
        f,
        m,
        h,
        v,
        j,
        g = n(31),
        O = n(16),
        x = n(3),
        _ = n.n(x),
        y = n(34),
        w = n(18),
        N = n(21),
        C = n(20),
        M = n(15),
        k = n(142),
        E = n.n(k),
        L = n(0),
        H = ["className", "active", "children"],
        S = function (e) {
          var t = e.className,
            n = e.active,
            i = e.children,
            r = Object(C.a)(e, H);
          return Object(L.jsx)(
            w.a,
            Object(O.a)(
              Object(O.a)({}, r),
              {},
              {
                className: Object(M.a)(
                  E.a.statisticButton,
                  n && E.a.statisticButton_active,
                  t
                ),
                children: i,
              }
            )
          );
        },
        A = n(143),
        F = n.n(A),
        W = [
          "History",
          "All bets",
          "Your bets",
          "Wagering race",
          "Affiliate battle",
        ],
        P = function (e) {
          var t = e.selectedId,
            n = e.setSelectedId,
            i = e.currentGame,
            r = e.isLogIn,
            a = e.customButtons,
            o = Object(N.m)().fairness,
            s = Object(y.g)();
          return Object(L.jsxs)("div", {
            className: F.a.root,
            children: [
              Object(L.jsx)("div", {
                className: F.a.buttonGroup,
                children: (a || W).map(function (e, a) {
                  return ("crash" !== i && 0 === a) || (!r && 2 === a)
                    ? null
                    : Object(L.jsx)(
                        _.a.Fragment,
                        {
                          children: Object(L.jsx)(S, {
                            onClick: function () {
                              return n(a);
                            },
                            active: t === a,
                            children: e,
                          }),
                        },
                        "button_".concat(e, "_id_").concat(a)
                      );
                }),
              }),
              r &&
                o &&
                Object(L.jsx)(w.a, {
                  className: F.a.fairnessBtn,
                  onClick: function () {
                    var e = s.location,
                      t = new URLSearchParams(e.search);
                    t.set("modal", "fairness"),
                      s.push(
                        Object(O.a)(
                          Object(O.a)({}, e),
                          {},
                          { search: t.toString() }
                        )
                      );
                  },
                  children: "Fairness",
                }),
            ],
          });
        },
        T = Object(g.b)(function () {
          return n.e(93).then(n.bind(null, 1460));
        }),
        B = Object(g.b)(function () {
          return n.e(98).then(n.bind(null, 1432));
        }),
        I = Object(g.b)(function () {
          return n.e(121).then(n.bind(null, 1433));
        }),
        R = Object(g.b)(function () {
          return Promise.all([n.e(9), n.e(17), n.e(77)]).then(
            n.bind(null, 1434)
          );
        }),
        D = Object(g.b)(function () {
          return n.e(115).then(n.bind(null, 1435));
        }),
        G = ["title", "titleId"];
      function V() {
        return (
          (V = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
              }),
          V.apply(this, arguments)
        );
      }
      function Z(e, t) {
        if (null == e) return {};
        var n,
          i,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              r = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (n = a[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function U(e, t) {
        var n = e.title,
          g = e.titleId,
          O = Z(e, G);
        return x.createElement(
          "svg",
          V(
            {
              width: 44,
              height: 33,
              viewBox: "0 0 44 33",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": g,
            },
            O
          ),
          n ? x.createElement("title", { id: g }, n) : null,
          i ||
            (i = x.createElement("path", {
              d: "M43.9373 11.0713L42.6173 14.2534C42.0201 15.6992 41.4151 17.1527 40.818 18.6063L39.1915 22.5349C39.0844 22.8014 38.8403 22.9882 38.5551 23.0221C37.0676 23.1486 35.5792 22.7902 34.3122 22.0006C32.9295 21.0977 31.6537 20.0406 30.5093 18.8499C29.3694 17.6575 28.096 16.6003 26.7143 15.6992C25.8276 15.1552 24.8327 14.8119 23.7992 14.6934L22.9114 12.5484L23.815 10.3798C24.4121 8.92623 25.0171 7.47265 25.6143 6.02692C26.2114 4.58119 26.8243 3.11975 27.4214 1.66616C29.0555 1.40819 30.7277 1.75156 32.1279 2.6326C33.5081 3.53575 34.7813 4.59277 35.9229 5.78334C37.0673 6.97409 38.3431 8.0311 39.7258 8.93409C40.7885 9.58869 42.006 9.94932 43.2537 9.9791C43.5101 9.99201 43.744 10.1294 43.8802 10.347C44.0164 10.5646 44.0377 10.835 43.9373 11.0713Z",
              fill: "white",
            })),
          r ||
            (r = x.createElement("path", {
              d: "M30.3208 6.98521C29.7237 8.4388 29.1213 9.89238 28.5137 11.346C27.1164 10.4649 25.4466 10.1215 23.8151 10.3795C24.4122 8.92595 25.0172 7.47236 25.6144 6.02663C27.2475 5.76633 28.9196 6.1069 30.3208 6.98521Z",
              fill: "#141536",
            })),
          a ||
            (a = x.createElement("path", {
              d: "M35.923 5.78307C35.3259 7.23666 34.7208 8.68238 34.1158 10.136C32.9759 8.94357 31.7025 7.88636 30.3208 6.98522C30.9258 5.5395 31.523 4.08591 32.128 2.63232C33.5082 3.53548 34.7814 4.5925 35.923 5.78307Z",
              fill: "#141536",
            })),
          o ||
            (o = x.createElement("path", {
              d: "M32.3166 14.4891C31.7115 15.9427 31.1144 17.3963 30.5094 18.8498C29.3695 17.6574 28.0961 16.6002 26.7144 15.6991C27.3115 14.2455 27.9165 12.7919 28.5137 11.3462C29.8981 12.2439 31.1742 13.2985 32.3166 14.4891Z",
              fill: "#141536",
            })),
          s ||
            (s = x.createElement("path", {
              d: "M37.9187 13.287C37.3137 14.7406 36.7166 16.1863 36.1116 17.6399C34.7295 16.7392 33.4561 15.6819 32.3165 14.4891C32.9137 13.0434 33.5187 11.5898 34.1158 10.1362C35.2602 11.327 36.536 12.384 37.9187 13.287Z",
              fill: "#141536",
            })),
          c ||
            (c = x.createElement("path", {
              d: "M43.9373 11.0712L42.6173 14.2534C40.9858 14.5107 39.3163 14.1673 37.9187 13.287L39.7259 8.93408C40.7885 9.58868 42.006 9.94931 43.2538 9.97909C43.5101 9.992 43.7441 10.1293 43.8803 10.347C44.0165 10.5646 44.0378 10.835 43.9373 11.0712Z",
              fill: "#141536",
            })),
          l ||
            (l = x.createElement("path", {
              d: "M40.818 18.6061L39.1916 22.5347C39.0844 22.8012 38.8404 22.988 38.5552 23.0218C37.0677 23.1483 35.5792 22.79 34.3123 22.0004L36.1116 17.6396C37.5118 18.5207 39.184 18.8641 40.818 18.6061Z",
              fill: "#141536",
            })),
          u ||
            (u = x.createElement("path", {
              d: "M28.1208 1.57165C28.1215 1.77988 28.0787 1.98596 27.995 2.17666C27.4686 3.45738 26.9343 4.74597 26.4 6.02669C25.8029 7.47242 25.1979 8.92601 24.6007 10.3796L23.6971 12.5482L22 16.6575L15.9735 31.2091C15.6415 32.0119 14.7216 32.3936 13.9188 32.0616C13.116 31.7296 12.7344 30.8097 13.0663 30.0069L19.415 14.6932V14.6854L20.3028 12.556V12.5482L22 8.44672L25.0957 0.974502C25.3809 0.280222 26.1173 -0.115454 26.8536 0.0299064C27.59 0.175266 28.1208 0.821077 28.1208 1.57165Z",
              fill: "#141536",
            })),
          d ||
            (d = x.createElement("path", {
              d: "M21.9921 14.7327C20.3581 14.4747 18.6859 14.8181 17.2857 15.6992C15.9039 16.6003 14.6305 17.6575 13.4906 18.8499C12.3463 20.0406 11.0705 21.0977 9.68774 22.0006C8.42079 22.7902 6.93232 23.1486 5.44484 23.0221C5.1596 22.9882 4.91555 22.8014 4.8084 22.5349L3.18196 18.6063C2.58481 17.1527 1.9798 15.6992 1.38265 14.2534L0.0626412 11.0713C-0.0378042 10.835 -0.0164995 10.5646 0.119702 10.347C0.255904 10.1294 0.489824 9.99201 0.746219 9.9791C1.99397 9.94932 3.21144 9.58869 4.27411 8.93409C5.65686 8.0311 6.93266 6.97409 8.07701 5.78334C9.21863 4.59277 10.4918 3.53575 11.872 2.6326C13.2722 1.75156 14.9444 1.40819 16.5785 1.66616C17.1757 3.11975 17.7781 4.57333 18.3857 6.02692C18.9828 7.47265 19.5878 8.92623 20.185 10.3798C20.7821 11.8334 21.3871 13.2791 21.9921 14.7327Z",
              fill: "white",
            })),
          b ||
            (b = x.createElement("path", {
              d: "M20.185 10.3795C18.5534 10.1215 16.8836 10.4649 15.4864 11.346C14.8814 9.89238 14.279 8.4388 13.6792 6.98521C15.0804 6.1069 16.7525 5.76633 18.3857 6.02663C18.9828 7.47236 19.5878 8.92595 20.185 10.3795Z",
              fill: "#141536",
            })),
          p ||
            (p = x.createElement("path", {
              d: "M13.6792 6.98522C12.2975 7.88636 11.0241 8.94357 9.88419 10.136C9.27918 8.68238 8.67418 7.23666 8.07703 5.78307C9.21865 4.5925 10.4918 3.53548 11.8721 2.63232C12.4771 4.08591 13.0742 5.5395 13.6792 6.98522Z",
              fill: "#141536",
            })),
          f ||
            (f = x.createElement("path", {
              d: "M17.2857 15.6991C15.9039 16.6002 14.6305 17.6574 13.4906 18.8498C12.8856 17.3963 12.2885 15.9427 11.6835 14.4891C12.8259 13.2985 14.102 12.2439 15.4864 11.3462C16.0835 12.7919 16.6885 14.2455 17.2857 15.6991Z",
              fill: "#141536",
            })),
          m ||
            (m = x.createElement("path", {
              d: "M11.6835 14.4891C10.5439 15.6819 9.2705 16.7392 7.88846 17.6399C7.28345 16.1863 6.6863 14.7406 6.0813 13.287C7.46405 12.384 8.73985 11.327 9.88419 10.1362C10.4813 11.5898 11.0863 13.0434 11.6835 14.4891Z",
              fill: "#141536",
            })),
          h ||
            (h = x.createElement("path", {
              d: "M6.08127 13.287C4.68369 14.1673 3.01421 14.5107 1.38265 14.2534L0.0626412 11.0712C-0.0378042 10.835 -0.0164995 10.5646 0.119702 10.347C0.255904 10.1293 0.489824 9.992 0.746219 9.97909C1.99397 9.94931 3.21144 9.58868 4.27411 8.93408L6.08127 13.287Z",
              fill: "#141536",
            })),
          v ||
            (v = x.createElement("path", {
              d: "M9.68779 22.0004C8.42084 22.79 6.93237 23.1483 5.44489 23.0218C5.15964 22.988 4.9156 22.8012 4.80845 22.5347L3.18201 18.6061C4.81609 18.8641 6.48828 18.5207 7.88848 17.6396L9.68779 22.0004Z",
              fill: "#141536",
            })),
          j ||
            (j = x.createElement("path", {
              d: "M30.0851 32.0577C29.6997 32.219 29.2659 32.2201 28.8796 32.0609C28.4933 31.9017 28.1864 31.5951 28.0265 31.2091L22.0001 16.6575L21.2065 14.7325L20.3029 12.556V12.5482L19.3993 10.3796L17.6 6.02669L16.005 2.17666C15.9214 1.98596 15.8785 1.77988 15.8793 1.57165C15.8793 0.821077 16.41 0.175266 17.1464 0.0299064C17.8828 -0.115454 18.6191 0.280222 18.9043 0.974502L22.0001 8.44672L23.6972 12.5482L24.5851 14.6932L30.9337 30.0069C31.2644 30.8076 30.8849 31.7248 30.0851 32.0577Z",
              fill: "#141536",
            }))
        );
      }
      var q,
        z,
        Y = x.forwardRef(U),
        K = (n.p, n(144)),
        X = n.n(K),
        J = function (e) {
          var t = e.text,
            n = e.title,
            i = e.icon,
            r = e.classes;
          return Object(L.jsxs)("div", {
            className: Object(M.a)(
              X.a.wageringWrapper,
              null === r || void 0 === r ? void 0 : r.messageCard
            ),
            children: [
              i && Object(L.jsx)(Y, {}),
              n && Object(L.jsx)("div", { className: X.a.title, children: n }),
              Object(L.jsx)("div", { className: X.a.description, children: t }),
            ],
          });
        },
        $ = n(145),
        Q = n.n($),
        ee = function (e) {
          var t = e.title,
            n = e.children;
          return Object(L.jsxs)("div", {
            className: Q.a.gameCardWrapper,
            children: [
              Object(L.jsx)("div", { className: Q.a.title, children: t }),
              Object(L.jsx)("div", { className: Q.a.dataWrapper, children: n }),
            ],
          });
        },
        te = n(179),
        ne = n(146),
        ie = n.n(ne),
        re = function (e) {
          var t = [
            { value: e.days, name: "DAYS" },
            { value: e.hours, name: "HOURS" },
            { value: e.minutes, name: "MIN" },
            { value: e.seconds, name: "SEC" },
          ];
          return Object(L.jsx)("div", {
            className: ie.a.root,
            children: t.map(function (e) {
              var t = e.value,
                n = e.name;
              return t <= 0 && "DAYS" === n
                ? null
                : Object(L.jsxs)(
                    x.Fragment,
                    {
                      children: [
                        Object(L.jsx)("span", { children: " ".concat(t, " ") }),
                        n,
                      ],
                    },
                    n
                  );
            }),
          });
        },
        ae = function (e) {
          var t = e.time;
          return t
            ? Object(L.jsx)(te.a, { overtime: !0, date: t, renderer: re })
            : Object(L.jsx)("span", { children: "processing..." });
        },
        oe = n(17),
        se = ["title", "titleId"];
      function ce() {
        return (
          (ce = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
              }),
          ce.apply(this, arguments)
        );
      }
      function le(e, t) {
        if (null == e) return {};
        var n,
          i,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              r = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (n = a[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function ue(e, t) {
        var n = e.title,
          i = e.titleId,
          r = le(e, se);
        return x.createElement(
          "svg",
          ce(
            {
              width: "34px",
              height: "37px",
              viewBox: "0 0 34 37",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              className: "style_medal__2p2vo",
              ref: t,
              "aria-labelledby": i,
            },
            r
          ),
          n ? x.createElement("title", { id: i }, n) : null,
          q ||
            (q = x.createElement(
              "defs",
              null,
              x.createElement("circle", {
                id: "threePlaceCircle-2",
                cx: 16.9673077,
                cy: 14.6534188,
                r: 14.6534188,
              }),
              x.createElement("path", {
                d: "M5.09636752,0.0508547009 L0.0544871795,8.79059829 L5.93910256,8.47820513 L8.61260684,13.7307692 L13.2767094,5.64487179 C9.93482906,4.78034188 7.06517094,2.76794872 5.09636752,0.0508547009 Z",
                id: "threePlace-3",
              }),
              x.createElement("path", {
                d: "M28.8673077,0.00726495726 C26.9130342,2.73162393 24.0433761,4.75128205 20.7087607,5.63034188 L25.3873932,13.7307692 L28.0608974,8.47820513 L33.9455128,8.79059829 L28.8673077,0.00726495726 Z",
                id: "threePlaceCircle-4",
              })
            )),
          z ||
            (z = x.createElement(
              "g",
              {
                stroke: "none",
                strokeWidth: 1,
                fill: "none",
                fillRule: "evenodd",
              },
              x.createElement(
                "g",
                { transform: "translate(-584.000000, -893.000000)" },
                x.createElement(
                  "g",
                  { transform: "translate(33.000000, 41.000000)" },
                  x.createElement(
                    "g",
                    { transform: "translate(3.000000, 829.000000)" },
                    x.createElement(
                      "g",
                      { transform: "translate(522.000000, 0.000000)" },
                      x.createElement(
                        "g",
                        { transform: "translate(26.000000, 23.000000)" },
                        x.createElement(
                          "g",
                          { fillRule: "nonzero" },
                          x.createElement("use", {
                            fill: "#E4A060",
                            xlinkHref: "#threePlaceCircle-2",
                          }),
                          x.createElement("use", {
                            fillOpacity: 1,
                            xlinkHref: "#threePlaceCircle-2",
                          })
                        ),
                        x.createElement(
                          "g",
                          {
                            transform: "translate(0.000000, 23.175214)",
                            fillRule: "nonzero",
                          },
                          x.createElement(
                            "g",
                            null,
                            x.createElement("use", {
                              fill: "#EB9961",
                              xlinkHref: "#threePlace-3",
                            }),
                            x.createElement("use", {
                              xlinkHref: "#threePlace-3",
                            })
                          ),
                          x.createElement(
                            "g",
                            null,
                            x.createElement("use", {
                              fill: "#EB9961",
                              xlinkHref: "#threePlaceCircle-4",
                            }),
                            x.createElement("use", {
                              xlinkHref: "#threePlaceCircle-4",
                            })
                          )
                        ),
                        x.createElement("circle", {
                          fill: "#FFFFFF",
                          fillRule: "nonzero",
                          cx: 16.9673077,
                          cy: 14.6534188,
                          r: 10.6213675,
                        }),
                        x.createElement(
                          "text",
                          {
                            fontFamily: "Gilroy-Extrabold, Gilroy",
                            fontSize: 13,
                            fontWeight: 600,
                            fill: "#E2854A",
                          },
                          x.createElement(
                            "tspan",
                            { x: 13.425, y: 17 },
                            "\n\t\t\t\t\t\t\t\t\t3\n\t\t\t\t\t\t\t\t"
                          )
                        )
                      )
                    )
                  )
                )
              )
            ))
        );
      }
      var de,
        be,
        pe = x.forwardRef(ue),
        fe = (n.p, ["title", "titleId"]);
      function me() {
        return (
          (me = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
              }),
          me.apply(this, arguments)
        );
      }
      function he(e, t) {
        if (null == e) return {};
        var n,
          i,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              r = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (n = a[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function ve(e, t) {
        var n = e.title,
          i = e.titleId,
          r = he(e, fe);
        return x.createElement(
          "svg",
          me(
            {
              width: "34px",
              height: "37px",
              viewBox: "0 0 34 37",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              className: "style_medal__2p2vo",
              ref: t,
              "aria-labelledby": i,
            },
            r
          ),
          n ? x.createElement("title", { id: i }, n) : null,
          de ||
            (de = x.createElement(
              "defs",
              null,
              x.createElement(
                "linearGradient",
                {
                  x1: "50%",
                  y1: "0%",
                  x2: "50%",
                  y2: "100%",
                  id: "secondPlaceGradient",
                },
                x.createElement("stop", { stopColor: "#E2E2E2", offset: "0%" }),
                x.createElement("stop", {
                  stopColor: "#C0C0C0",
                  offset: "100%",
                })
              )
            )),
          be ||
            (be = x.createElement(
              "g",
              {
                stroke: "none",
                strokeWidth: 1,
                fill: "none",
                fillRule: "evenodd",
              },
              x.createElement(
                "g",
                { transform: "translate(-323.000000, -893.000000)" },
                x.createElement(
                  "g",
                  { transform: "translate(33.000000, 41.000000)" },
                  x.createElement(
                    "g",
                    { transform: "translate(3.000000, 829.000000)" },
                    x.createElement(
                      "g",
                      { transform: "translate(261.000000, 0.000000)" },
                      x.createElement(
                        "g",
                        { transform: "translate(26.000000, 23.000000)" },
                        x.createElement("circle", {
                          fill: "url(#secondPlaceGradient)",
                          fillRule: "nonzero",
                          cx: 16.9673077,
                          cy: 14.6534188,
                          r: 14.6534188,
                        }),
                        x.createElement(
                          "g",
                          {
                            transform: "translate(0.000000, 23.175214)",
                            fill: "#C9C9C9",
                            fillRule: "nonzero",
                          },
                          x.createElement("path", {
                            d: "M5.09636752,0.0508547009 L0.0544871795,8.79059829 L5.93910256,8.47820513 L8.61260684,13.7307692 L13.2767094,5.64487179 C9.93482906,4.78034188 7.06517094,2.76794872 5.09636752,0.0508547009 Z",
                          }),
                          x.createElement("path", {
                            d: "M28.8673077,0.00726495726 C26.9130342,2.73162393 24.0433761,4.75128205 20.7087607,5.63034188 L25.3873932,13.7307692 L28.0608974,8.47820513 L33.9455128,8.79059829 L28.8673077,0.00726495726 Z",
                          })
                        ),
                        x.createElement("circle", {
                          fill: "#FFFFFF",
                          fillRule: "nonzero",
                          cx: 16.9673077,
                          cy: 14.6534188,
                          r: 10.6213675,
                        }),
                        x.createElement(
                          "text",
                          {
                            fontFamily: "Gilroy-Extrabold, Gilroy",
                            fontSize: 13,
                            fontWeight: 600,
                            fill: "#9C9C9C",
                          },
                          x.createElement(
                            "tspan",
                            { x: 13.5355, y: 17 },
                            "\n\t\t\t\t\t\t\t\t\t2\n\t\t\t\t\t\t\t\t"
                          )
                        )
                      )
                    )
                  )
                )
              )
            ))
        );
      }
      var je,
        ge,
        Oe = x.forwardRef(ve),
        xe = (n.p, ["title", "titleId"]);
      function _e() {
        return (
          (_e = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
              }),
          _e.apply(this, arguments)
        );
      }
      function ye(e, t) {
        if (null == e) return {};
        var n,
          i,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              i,
              r = {},
              a = Object.keys(e);
            for (i = 0; i < a.length; i++)
              (n = a[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (n = a[i]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function we(e, t) {
        var n = e.title,
          i = e.titleId,
          r = ye(e, xe);
        return x.createElement(
          "svg",
          _e(
            {
              width: "34px",
              height: "37px",
              viewBox: "0 0 34 37",
              xmlns: "http://www.w3.org/2000/svg",
              xmlnsXlink: "http://www.w3.org/1999/xlink",
              className: "style_medal__2p2vo",
              ref: t,
              "aria-labelledby": i,
            },
            r
          ),
          n ? x.createElement("title", { id: i }, n) : null,
          je ||
            (je = x.createElement(
              "defs",
              null,
              x.createElement("circle", {
                id: "firstPlaceCircle",
                cx: 16.9673077,
                cy: 14.6534188,
                r: 14.6534188,
              })
            )),
          ge ||
            (ge = x.createElement(
              "g",
              { transform: "translate(-62.000000, -893.000000)" },
              x.createElement(
                "g",
                { transform: "translate(33.000000, 41.000000)" },
                x.createElement(
                  "g",
                  { transform: "translate(3.000000, 829.000000)" },
                  x.createElement(
                    "g",
                    { transform: "translate(26.000000, 23.000000)" },
                    x.createElement(
                      "g",
                      { fillRule: "nonzero" },
                      x.createElement("use", {
                        fill: "#FFAE00",
                        xlinkHref: "#firstPlaceCircle",
                      }),
                      x.createElement("use", {
                        xlinkHref: "#firstPlaceCircle",
                        fill: "rgb(255, 174, 0)",
                      })
                    ),
                    x.createElement(
                      "g",
                      {
                        transform: "translate(0.000000, 23.175214)",
                        fill: "#FFA200",
                        fillRule: "nonzero",
                      },
                      x.createElement("path", {
                        d: "M5.09636752,0.0508547009 L0.0544871795,8.79059829 L5.93910256,8.47820513 L8.61260684,13.7307692 L13.2767094,5.64487179 C9.93482906,4.78034188 7.06517094,2.76794872 5.09636752,0.0508547009 Z",
                      }),
                      x.createElement("path", {
                        d: "M28.8673077,0.00726495726 C26.9130342,2.73162393 24.0433761,4.75128205 20.7087607,5.63034188 L25.3873932,13.7307692 L28.0608974,8.47820513 L33.9455128,8.79059829 L28.8673077,0.00726495726 Z",
                      })
                    ),
                    x.createElement("circle", {
                      fill: "#FFFFFF",
                      fillRule: "nonzero",
                      cx: 16.9673077,
                      cy: 14.6534188,
                      r: 10.6213675,
                    }),
                    x.createElement(
                      "text",
                      {
                        id: 1,
                        fontFamily: "Gilroy-Extrabold, Gilroy",
                        fontSize: 13,
                        fontWeight: 600,
                        fill: "#FFA200",
                      },
                      x.createElement(
                        "tspan",
                        { x: 14.3805, y: 17 },
                        "\n\t\t\t\t\t\t\t1\n\t\t\t\t\t\t"
                      )
                    )
                  )
                )
              )
            ))
        );
      }
      var Ne = x.forwardRef(we),
        Ce = (n.p, n(29)),
        Me = n(124),
        ke = n(83),
        Ee = n(50),
        Le = n(53),
        He = n(147),
        Se = n.n(He),
        Ae = [Ne, Oe, pe],
        Fe = [
          {
            field: "rank",
            headerName: "Rank",
            valueRender: function (e) {
              var t = Number(e) - 1;
              if (Ae[t]) {
                var n = Ae[t];
                return Object(L.jsx)("span", {
                  className: Se.a.medalWrapper,
                  children: Object(L.jsx)(n, { className: Se.a.medal }),
                });
              }
              return Object(L.jsx)("span", {
                className: Se.a.medalWrapper,
                children: e,
              });
            },
          },
          { field: "user", headerName: "Player" },
          {
            field: "reward",
            headerName: "Reward",
            valueRender: function (e, t) {
              return Object(L.jsx)("span", {
                className: Object(M.a)(Se.a.amount, Se.a.valueElement),
                children: !t && e,
              });
            },
          },
          {
            field: "total",
            headerName: "Total Wagered",
            valueRender: function (e, t) {
              return Object(L.jsx)("span", {
                className: Object(M.a)(Se.a.amount, Se.a.valueElement),
                children: !t && e,
              });
            },
          },
        ],
        We = function (e) {
          var t = e.explanation,
            n = e.type,
            i = e.title,
            r = e.timeStamp,
            a = e.money,
            o = e.withIcon,
            s = e.tableData,
            c = e.classes,
            l = e.loading,
            u = e.showMoreButton,
            d = Object(x.useState)(!1),
            b = Object(oe.a)(d, 2),
            p = b[0],
            f = b[1],
            m = function () {
              f(
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              );
            },
            h = Object(Ce.a)("/games/get-previous-".concat(n), {
              method: "POST",
              transformResponse: function (e) {
                var t,
                  n = JSON.parse(e);
                return {
                  page: n.leaderboard.current_page,
                  totalPages: n.leaderboard.total_pages,
                  endTime: ""
                    .concat(
                      Object(Me.a)(
                        "ddS",
                        new Date(1e3 * n.leaderboard.contest_data.end_time)
                      ),
                      " "
                    )
                    .concat(
                      Object(Me.a)(
                        "mmmm yyyy",
                        new Date(1e3 * n.leaderboard.contest_data.end_time)
                      )
                    ),
                  list: n.success
                    ? ((t = n.leaderboard.contest_data.leaderboard),
                      t.map(function (e) {
                        return {
                          rank: e.position,
                          reward: ""
                            .concat(e.reward_usd, " USD + ")
                            .concat(Object(ke.a)(e.reward_rp), " RP"),
                          total: "".concat(
                            Object(ke.a)(
                              Number(
                                e.today_usd_wagered_referred_users ||
                                  e.today_usd_wagered
                              )
                            ),
                            " USD"
                          ),
                          user: e.user_name,
                        };
                      }))
                    : [],
                };
              },
            }),
            v = Object(oe.a)(h, 2),
            j = v[0],
            g = v[1],
            O = g.data,
            _ = g.isLoading,
            y = function () {
              j({
                data: {
                  page:
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1,
                },
              });
            };
          return (
            Object(x.useEffect)(
              function () {
                p && y(null === O || void 0 === O ? void 0 : O.page);
              },
              [p]
            ),
            Object(L.jsxs)(L.Fragment, {
              children: [
                Object(L.jsxs)("div", {
                  className: Se.a.infoWrapper,
                  children: [
                    Object(L.jsxs)("div", {
                      className: Se.a.firstColumn,
                      children: [
                        Object(L.jsx)(J, {
                          title: i,
                          text: t,
                          icon: o,
                          classes: c,
                        }),
                        Object(L.jsx)(ee, {
                          title: "Contest ends in",
                          children: Object(L.jsx)(ae, { time: r }),
                        }),
                        a
                          ? Object(L.jsxs)(ee, {
                              title: a.title || "Total amount wagered",
                              children: [
                                Object(L.jsx)("span", {
                                  className: Se.a.amount,
                                  children: a.amount,
                                }),
                                " ",
                                a.coinSymbol,
                              ],
                            })
                          : null,
                        Object(L.jsx)(w.a, {
                          onClick: function () {
                            return m(!0);
                          },
                          className: Se.a.previousButton,
                          children: "Previous Round",
                        }),
                      ],
                    }),
                    Object(L.jsxs)("div", {
                      className: Se.a.secondColumn,
                      children: [
                        Object(L.jsxs)("div", {
                          className: Se.a.titleWrapper,
                          children: [
                            Object(L.jsx)("h1", {
                              className: Se.a.tableTitle,
                              children: "Current Ranking",
                            }),
                            u &&
                              Object(L.jsx)(w.a, {
                                onClick: u.setIsOpen,
                                className: Se.a.showMoreButton,
                                children: u.isOpen ? "Show Less" : "Show More",
                              }),
                          ],
                        }),
                        Object(L.jsx)("div", {
                          className: Se.a.tableWrapper,
                          children: Object(L.jsx)(Pe.a, {
                            grid: "minmax(30px, 100px) minmax(70px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr)",
                            classes: {
                              header: Object(M.a)(
                                Se.a.tableHeader,
                                null === c || void 0 === c ? void 0 : c.header
                              ),
                              row: Object(M.a)(
                                Se.a.row,
                                null === c || void 0 === c ? void 0 : c.row
                              ),
                              global: Se.a.table,
                            },
                            columns: Fe,
                            values: s,
                            loading: l,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                Object(L.jsxs)(Ee.a, {
                  isOpen: p,
                  onClose: function () {
                    return m(!1);
                  },
                  classes: { dialog: Se.a.dialog },
                  withCloseIcon: !0,
                  children: [
                    Object(L.jsx)("span", {
                      className: Se.a.modalTitle,
                      children: "Previous Round",
                    }),
                    Object(L.jsxs)("span", {
                      className: Se.a.modalDate,
                      children: [
                        "Date: ",
                        null === O || void 0 === O ? void 0 : O.endTime,
                      ],
                    }),
                    Object(L.jsx)("div", {
                      className: Se.a.modalTableWrapper,
                      children: Object(L.jsx)(Pe.a, {
                        grid: "minmax(30px, 100px) minmax(70px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr)",
                        classes: {
                          header: Object(M.a)(
                            Se.a.tableHeader,
                            null === c || void 0 === c ? void 0 : c.header
                          ),
                          row: Object(M.a)(
                            Se.a.row,
                            null === c || void 0 === c ? void 0 : c.row
                          ),
                          global: Se.a.table,
                        },
                        columns: Fe,
                        values:
                          (null === O || void 0 === O ? void 0 : O.list) || [],
                        loading: _,
                      }),
                    }),
                    Object(L.jsx)(Le.c, {
                      loading: _,
                      page: (null === O || void 0 === O ? void 0 : O.page) || 1,
                      pageAmount:
                        (null === O || void 0 === O ? void 0 : O.totalPages) ||
                        1,
                      setPage: y,
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Pe = n(91),
        Te = Object(g.b)(function () {
          return n.e(82).then(n.bind(null, 1458));
        });
    },
    83: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var i = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { maximumFractionDigits: 8 },
          n = "object" === typeof t ? t : { maximumFractionDigits: t };
        return e.toLocaleString("en-US", n);
      };
    },
    84: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return f;
      }),
        n.d(t, "a", function () {
          return m;
        });
      var i = n(16),
        r = n(17),
        a = n(3),
        o = n(127),
        s = n(21),
        c = n(140),
        l = n(81),
        u = n(149),
        d = n.n(u),
        b = n(0),
        p = Object(a.createContext)({ openBetInfoModal: function () {} }),
        f = function () {
          return Object(a.useContext)(p);
        },
        m = function () {
          var e = Object(a.useState)(1),
            t = Object(r.a)(e, 2),
            n = t[0],
            u = t[1],
            f = Object(o.a)(),
            m = Object(s.i)().user,
            h = Object(a.useState)({ isOpen: !1, betId: 0, game: "" }),
            v = Object(r.a)(h, 2),
            j = v[0],
            g = v[1];
          return Object(b.jsxs)("div", {
            className: d.a.gameStatisticWrapper,
            children: [
              Object(b.jsxs)(p.Provider, {
                value: {
                  openBetInfoModal: function (e, t) {
                    g(function (n) {
                      return Object(i.a)(
                        Object(i.a)({}, n),
                        {},
                        {
                          isOpen: !0,
                          betId: e,
                          game: null !== t && void 0 !== t ? t : n.game,
                        }
                      );
                    });
                  },
                },
                children: [
                  Object(b.jsx)(l.e, {
                    selectedId: n,
                    setSelectedId: u,
                    currentGame: f,
                    isLogIn: !!m,
                  }),
                  Object(b.jsxs)(c.a, {
                    index: n,
                    children: [
                      "crash" === f
                        ? Object(b.jsx)(l.d, {})
                        : Object(b.jsx)(a.Fragment, {}),
                      Object(b.jsx)(l.b, { displayed: 1 === n }),
                      m
                        ? Object(b.jsx)(l.j, { displayed: 2 === n })
                        : Object(b.jsx)(a.Fragment, {}),
                      Object(b.jsx)(l.i, {}),
                      Object(b.jsx)(l.a, {}),
                    ],
                  }),
                ],
              }),
              Object(b.jsx)(
                l.c,
                Object(i.a)(
                  Object(i.a)({}, j),
                  {},
                  {
                    onClose: function () {
                      g(function (e) {
                        return Object(i.a)(
                          Object(i.a)({}, e),
                          {},
                          { isOpen: !1 }
                        );
                      });
                    },
                  }
                )
              ),
            ],
          });
        };
    },
    85: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return c;
        });
      var i = n(77),
        r = n(23),
        a = function (e, t, n) {
          var a = Object(i.toDecimal)(e)
            .mul(t)
            .minus(e)
            .toDecimalPlaces(r.a, 1);
          return n ? a.toFixed(a.decimalPlaces()) : a;
        },
        o = n(715),
        s = n(1415),
        c = function (e, t) {
          return Object(o.a)(e).pipe(Object(s.a)(t)).subscribe(t);
        };
    },
    91: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var i = n(16),
        r = n(20),
        a = n(3),
        o = n(15),
        s = n(135),
        c = n(26),
        l = n(84),
        u = n(148),
        d = n.n(u),
        b = n(0),
        p = [
          "columns",
          "values",
          "classes",
          "grid",
          "loading",
          "isOpenBetModalOnClick",
        ],
        f = function (e) {
          var t = e.columns,
            n = e.values,
            u = e.classes,
            f = e.grid,
            m = e.loading,
            h = e.isOpenBetModalOnClick,
            v = Object(r.a)(e, p),
            j = Object(a.useMemo)(
              function () {
                var e = f || "repeat(".concat(t.length, ", 1fr)");
                return {
                  header: { gridTemplateColumns: e },
                  row: { gridTemplateColumns: e },
                };
              },
              [t, f]
            ),
            g = (Object(l.b)() || {}).openBetInfoModal;
          return Object(b.jsx)(
            s.a,
            Object(i.a)(
              Object(i.a)({}, v),
              {},
              {
                loading: m,
                classes: Object(i.a)(
                  Object(i.a)({}, u),
                  {},
                  {
                    root: Object(o.a)(
                      d.a.root,
                      null === u || void 0 === u ? void 0 : u.root
                    ),
                    header: Object(o.a)(
                      d.a.header,
                      d.a.tableText,
                      d.a.cellsRow,
                      null === u || void 0 === u ? void 0 : u.header
                    ),
                    row: Object(o.a)(
                      d.a.row,
                      d.a.tableText,
                      d.a.cellsRow,
                      null === u || void 0 === u ? void 0 : u.row
                    ),
                  }
                ),
                empty: {
                  description:
                    "Currently there is no information about the results of the games.",
                },
                styles: j,
                columns: t.map(function (e) {
                  return Object(i.a)(
                    Object(i.a)({}, e),
                    {},
                    {
                      valueRender:
                        e.valueRender ||
                        ((t = e.highlightWinValue),
                        (n = e.coinRender),
                        (r = h ? g : void 0),
                        function (e, i, a) {
                          return i
                            ? Object(b.jsx)(b.Fragment, {})
                            : Object(b.jsx)("span", {
                                className: Object(o.a)(
                                  d.a.cell,
                                  t && a
                                    ? Number(a.profit) < 0
                                      ? d.a.loss
                                      : d.a.win
                                    : "",
                                  { cursorPointer: r }
                                ),
                                onClick:
                                  r &&
                                  function () {
                                    var e;
                                    r(
                                      a.id ||
                                        (null === (e = a.bet) || void 0 === e
                                          ? void 0
                                          : e.id)
                                    );
                                  },
                                children:
                                  a && n
                                    ? Object(b.jsxs)(b.Fragment, {
                                        children: [
                                          Object(b.jsx)("span", {
                                            className: d.a.coinCell,
                                            children: e,
                                          }),
                                          Object(b.jsx)(c.a, {
                                            coin: a.coin.symbol,
                                            className: d.a.coinImg,
                                          }),
                                        ],
                                      })
                                    : e,
                              });
                        }),
                    }
                  );
                  var t, n, r;
                }),
                rows: n || [],
                skeletonRows: 10,
                includeHeader: !0,
                withoutDefaultStyles: !0,
              }
            )
          );
        };
    },
    924: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        betWrapper: "style_betWrapper__324oM",
        limbo_betInput: "style_limbo_betInput__2QQur",
        limbo_betTitle: "style_limbo_betTitle__1W8qu",
        limbo_opportunity: "style_limbo_opportunity__2ckOJ",
      };
    },
    925: function (e, t, n) {
      e.exports = {
        pnlOption: "style_pnlOption__2OoNx",
        radioGroup: "style_radioGroup__3Ld-i",
        radio: "style_radio__1VH6X",
        checkbox: "style_checkbox__1xv6U",
        checkboxLabel: "style_checkboxLabel__3cB2B",
      };
    },
    926: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        pnlOptions: "style_pnlOptions__1I3sG",
        radioGroup: "style_radioGroup___gQNu",
        radio: "style_radio__Kiwue",
        inputGroup: "style_inputGroup__38gYz",
      };
    },
    927: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        limboControllerWrapper: "style_limboControllerWrapper__3OUOJ",
        betButton: "style_betButton__2tn9e",
        limboToggle: "style_limboToggle__Wq_eo",
        betWrapper: "style_betWrapper__TIu4K",
        limbo_betInput: "style_limbo_betInput__1ydjZ",
        limbo_betTitle: "style_limbo_betTitle__1OGyh",
        limbo_opportunity: "style_limbo_opportunity__2XKDt",
        limboForm: "style_limboForm__1pmoN",
        controller: "style_controller__womeN",
      };
    },
    928: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        rocketAnimationTime: "1000",
        fireAnimationTime: "500",
        rocket: "style_rocket__3u_BI",
        preStart: "style_preStart__Z-04k",
        flying: "style_flying__gbW3G",
        fly: "style_fly__rsGFi",
        explosion: "style_explosion__129f3",
        burn: "style_burn__OKfYl",
        noBurn: "style_noBurn__3L8l9",
        fire: "style_fire__fLjYI",
        leftFire: "style_leftFire__1SC8z",
        rightFire: "style_rightFire__o_SG1",
        burning: "style_burning__Rdf7b",
        shadow: "style_shadow__182_1",
        flyShadow: "style_flyShadow__1udwl",
      };
    },
    930: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        root: "style_root__2VB0Y",
        payText: "style_payText__Ww7Rw",
        title: "style_title__3jOwC",
        lose: "style_lose__1q3Z8",
      };
    },
    931: function (e, t, n) {
      e.exports = { root: "style_root__1QjHD", footer: "style_footer__1iBYS" };
    },
    932: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        limboGameWrapper: "style_limboGameWrapper__25u6v",
      };
    },
    933: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        limboPageWrapper: "style_limboPageWrapper__1_ruz",
      };
    },
    94: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var i = n(52),
        r = new i.Decimal(0);
    },
    97: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var i = n(10),
        r = n(0),
        a = function () {
          return Object(r.jsx)(i.LoaderWithLogo, { transparent: !0 });
        };
    },
    99: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var i = (function (e) {
          return (e.GET_DATA = "GET_DATA"), (e.GET_DOTS = "GET_DOTS"), e;
        })({}),
        r = n(24),
        a = n(25),
        o = n(87),
        s = function (e, t, n) {
          var i = String(e).length,
            r = String(t).length,
            a = 8 + Math.max(i, r),
            o = Number("1".padEnd(a, "0"));
          switch (n) {
            default:
            case "add":
              return (Math.floor(e * o) + Math.floor(t * o)) / o;
            case "remove":
              return (Math.floor(e * o) - Math.floor(t * o)) / o;
          }
        },
        c = function (e, t) {
          var n = Number("1".padEnd(t + 1, "0"));
          return Math.round(e * n) / n;
        },
        l = new ((function () {
          function e() {
            Object(r.a)(this, e),
              (this.emitter = new o.EventEmitter()),
              (this.graphDots = [0]),
              (this.generalLiveData = { amount: 0, profit: 0 }),
              (this.statistics = { wins: 0, loses: 0 });
          }
          return (
            Object(a.a)(e, [
              {
                key: "addBet",
                value: function (e) {
                  var t = c(e.amount, 8),
                    n = c(e.profit, 8);
                  (this.generalLiveData.amount = s(
                    t,
                    this.generalLiveData.amount,
                    "add"
                  )),
                    (this.generalLiveData.profit = s(
                      n,
                      this.generalLiveData.profit,
                      "add"
                    )),
                    n < 0
                      ? (this.statistics.loses += 1)
                      : (this.statistics.wins += 1);
                  var r = this.generalLiveData,
                    a = this.statistics,
                    o = this.graphDots;
                  this.graphDots.push(r.profit),
                    this.emitter.emit(i.GET_DATA, {
                      generalLiveData: r,
                      statistics: a,
                    }),
                    this.emitter.emit(i.GET_DOTS, o);
                },
              },
              {
                key: "restart",
                value: function () {
                  this.reset();
                },
              },
              {
                key: "reset",
                value: function () {
                  (this.generalLiveData = { amount: 0, profit: 0 }),
                    (this.statistics = { loses: 0, wins: 0 }),
                    (this.graphDots = [0]);
                  var e = this.generalLiveData,
                    t = this.statistics,
                    n = this.graphDots;
                  this.emitter.emit(i.GET_DATA, {
                    generalLiveData: e,
                    statistics: t,
                  }),
                    this.emitter.emit(i.GET_DOTS, n);
                },
              },
              {
                key: "open",
                value: function () {
                  var e = this.generalLiveData,
                    t = this.statistics,
                    n = this.graphDots;
                  this.emitter.emit(i.GET_DATA, {
                    generalLiveData: e,
                    statistics: t,
                  }),
                    this.emitter.emit(i.GET_DOTS, n);
                },
              },
              {
                key: "getData",
                value: function (e) {
                  var t = this;
                  return (
                    this.emitter.addListener(i.GET_DATA, e),
                    function () {
                      t.emitter.removeListener(i.GET_DATA, e);
                    }
                  );
                },
              },
              {
                key: "getDots",
                value: function (e) {
                  var t = this;
                  return (
                    this.emitter.addListener(i.GET_DOTS, e),
                    function () {
                      t.emitter.removeListener(i.GET_DOTS, e);
                    }
                  );
                },
              },
            ]),
            e
          );
        })())();
    },
  },
]);
//# sourceMappingURL=31.457edcbc.chunk.js.map
