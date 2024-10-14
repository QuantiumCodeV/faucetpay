(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [34, 18],
  {
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
    106: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      n(3);
      var a = n(95),
        r = n.n(a),
        i = n(23),
        o = n(21),
        l = n(103),
        c = n.n(l),
        s = n(0),
        u = function (e) {
          var t = e.checked,
            n = e.setChecked,
            a = e.colors,
            l = void 0 === a ? i.p.standard : a,
            u = e.height,
            d = void 0 === u ? 28 : u,
            b = e.width,
            p = void 0 === b ? 52 : b,
            f = e.radius,
            m = void 0 === f ? 14 : f,
            j = e.diameter,
            v = void 0 === j ? 20 : j,
            h = Object(o.n)().isLight;
          return Object(s.jsx)("div", {
            className: c.a.toggleWrapper,
            children: Object(s.jsx)(r.a, {
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
              offColor: h ? l.light.offColor.bg : l.dark.offColor.bg,
              onColor: h ? l.light.onColor.bg : l.dark.onColor.bg,
              offHandleColor: h
                ? l.light.offColor.handle
                : l.dark.offColor.handle,
              onHandleColor: h
                ? l.light.offColor.handle
                : l.dark.offColor.handle,
              uncheckedIcon: Object(s.jsx)("div", {}),
              checkedIcon: Object(s.jsx)("div", {}),
            }),
          });
        };
    },
    113: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n(16),
        r = (n(3), n(15)),
        i = n(106),
        o = n(115),
        l = n.n(o),
        c = n(0),
        s = function (e) {
          var t = e.toggle,
            n = e.setToggle,
            o = e.className,
            s = e.firstWord,
            u = e.secondWord,
            d = e.toggleColor,
            b = e.activeClass,
            p = e.params,
            f = e.anotherFormat;
          return Object(c.jsxs)("div", {
            className: Object(r.a)(l.a.toggleWrapper, o),
            children: [
              s
                ? Object(c.jsx)("div", {
                    className: Object(r.a)(
                      l.a.toggle_manual,
                      f
                        ? t
                          ? b || l.a.toggle_active
                          : ""
                        : t
                        ? ""
                        : b || l.a.toggle_active
                    ),
                    onClick: function () {
                      n(!1);
                    },
                    children: s,
                  })
                : null,
              Object(c.jsx)(
                i.a,
                Object(a.a)({ checked: t, setChecked: n, colors: d }, p)
              ),
              u
                ? Object(c.jsx)("div", {
                    className: Object(r.a)(
                      l.a.toggle_auto,
                      f
                        ? t
                          ? ""
                          : b || l.a.toggle_active
                        : t
                        ? b || l.a.toggle_active
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
    1138: function (e, t, n) {
      e.exports = { customFullScreen: "style_customFullScreen__3niTK" };
    },
    1139: function (e, t, n) {
      e.exports = {
        footer: "style_footer__26zyh",
        starButton: "style_starButton__1DYtN",
        starButton_filled: "style_starButton_filled__2YdVs",
        left: "style_left__2nfmK",
        right: "style_right__MwxwN",
        buttons: "style_buttons__28P5z",
        button: "style_button__YcFLg",
        centerButton: "style_centerButton__Vnocb",
        select: "style_select__1LBMs",
        front: "style_front__1x4EF",
        symbol: "style_symbol__3wGQK",
        paper: "style_paper__3905p",
      };
    },
    1140: function (e, t, n) {
      e.exports = {
        content: "style_content__SGWrd",
        background: "style_background__y1ahS",
        msg: "style_msg__18pXd",
        buttons: "style_buttons__3r7PA",
        btn: "style_btn__2JlhH",
      };
    },
    1141: function (e, t, n) {
      e.exports = {
        game: "style_game__mJ3SI",
        header: "style_header__3R8-7",
        content: "style_content__3MfjM",
        switchWrapper: "style_switchWrapper__SXtZy",
        footer: "style_footer__xpiVJ",
        frame: "style_frame__2w4bt",
        frame_load: "style_frame_load__2ztq4",
        loader: "style_loader__1DJL6",
      };
    },
    1142: function (e, t, n) {
      e.exports = { root: "style_root__O6189" };
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
    125: function (e, t, n) {
      "use strict";
      var a = n(84);
      n.d(t, "c", function () {
        return a.a;
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
      var a = n(34),
        r = n(3),
        i = [
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
          var e = Object(a.h)().pathname;
          return Object(r.useMemo)(
            function () {
              var t = e.split("/"),
                n = t[t.length - 1].toLocaleLowerCase();
              return i[n];
            },
            [e]
          );
        };
    },
    128: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a = function (e, t) {
        for (var n = Array(Math.max(0, e)), a = 0; a < e; a++) n[a] = t(a);
        return n;
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
        return F;
      });
      var a = n(16),
        r = n(30),
        i = n(17),
        o = n(3),
        l = n.n(o),
        c = n(15),
        s = n(54),
        u = n(37),
        d = n(55),
        b = n(20),
        p = n(18),
        f = n(22),
        m = n(131),
        j = n.n(m),
        v = n(0),
        h = [
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
          return Object(v.jsx)("span", {
            className: Object(c.a)(j.a.skip, t),
            children: "...",
          });
        },
        x = function (e) {
          var t = e.maxButtonVisible,
            n = void 0 === t ? 3 : t,
            r = e.showPrevNextButton,
            i = e.showFirstLastPage,
            o = e.page,
            s = e.pageAmount,
            u = e.classes,
            d = e.onChange,
            m = e.disabled,
            x = Object(b.a)(e, h),
            g = function () {
              for (
                var e = [],
                  t = Math.floor(n / 2),
                  a = Math.max(o - t, 1),
                  r = Math.min(o + t, s),
                  b = function (t) {
                    var n = t === o,
                      l = Object(v.jsx)(
                        p.a,
                        {
                          onClick: function () {
                            return d && d(t);
                          },
                          disabled: n || m,
                          className: Object(c.a)(
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
                    ((1 === t || t === s) && i) ||
                      (e.push(l),
                      t === r && r + 1 < s
                        ? e.push(
                            Object(v.jsx)(O, {
                              className:
                                null === u || void 0 === u ? void 0 : u.skip,
                            })
                          )
                        : t === a &&
                          a - 1 > 1 &&
                          e.splice(
                            e.length - 2,
                            0,
                            Object(v.jsx)(O, {
                              className:
                                null === u || void 0 === u ? void 0 : u.skip,
                            })
                          ));
                  },
                  f = a;
                f <= r;
                f++
              )
                b(f);
              return Object(v.jsx)(v.Fragment, {
                children: e.map(function (e) {
                  return Object(v.jsx)(l.a.Fragment, { children: e }, e.key);
                }),
              });
            },
            _ = 1 === o || m,
            y = o === s || m;
          return Object(v.jsxs)(
            "div",
            Object(a.a)(
              Object(a.a)(
                {
                  className: Object(c.a)(
                    j.a.root,
                    null === u || void 0 === u ? void 0 : u.root
                  ),
                },
                x
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
                        j.a.button
                      ),
                      children: Object(v.jsx)(f.J, {}),
                    }),
                  i &&
                    Object(v.jsx)(p.a, {
                      onClick: function () {
                        return d && d(1);
                      },
                      disabled: _,
                      className: Object(c.a)(
                        null === u || void 0 === u ? void 0 : u.button,
                        j.a.button,
                        1 === o && [
                          j.a.active,
                          null === u || void 0 === u ? void 0 : u.activePage,
                        ]
                      ),
                      children: "1",
                    }),
                  Object(v.jsx)(g, {}),
                  i &&
                    1 !== s &&
                    Object(v.jsx)(p.a, {
                      onClick: function () {
                        return d && d(s);
                      },
                      disabled: y,
                      className: Object(c.a)(
                        null === u || void 0 === u ? void 0 : u.button,
                        j.a.button,
                        o === s && [
                          j.a.active,
                          null === u || void 0 === u ? void 0 : u.activePage,
                        ]
                      ),
                      children: s,
                    }),
                  r &&
                    Object(v.jsx)(p.a, {
                      onClick: function () {
                        return d && d(Math.min(s, o + 1));
                      },
                      disabled: y,
                      className: Object(c.a)(
                        null === u || void 0 === u ? void 0 : u.button,
                        j.a.button
                      ),
                      children: Object(v.jsx)(f.J, {}),
                    }),
                ],
              }
            )
          );
        },
        g = n(132),
        _ = n.n(g),
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
        C = n(26),
        w = n(133),
        N = n.n(w),
        E = function (e) {
          var t = e.content,
            n = e.classes;
          return Object(v.jsx)("div", {
            className: Object(c.a)(
              N.a.root,
              null === n || void 0 === n ? void 0 : n.row
            ),
            children: t.map(function (e, t) {
              var a = e.name,
                r = e.value,
                i = e.coinName;
              return Object(v.jsxs)(
                "div",
                {
                  className: N.a.element,
                  children: [
                    Object(v.jsx)("div", {
                      className: Object(c.a)(
                        N.a.card,
                        N.a.name,
                        null === n || void 0 === n ? void 0 : n.header
                      ),
                      children: a,
                    }),
                    Object(v.jsxs)("div", {
                      className: Object(c.a)(
                        N.a.card,
                        N.a.value,
                        null === n || void 0 === n ? void 0 : n.value
                      ),
                      children: [
                        i &&
                          Object(v.jsx)(C.a, { className: N.a.coin, coin: i }),
                        r,
                      ],
                    }),
                  ],
                },
                "".concat(a, "--").concat(r)
              );
            }),
          });
        },
        k = n(134),
        M = n.n(k),
        P = function (e) {
          var t = e.content,
            n = e.pagination,
            a = e.loading,
            r = e.classes,
            i = e.className;
          return Object(v.jsxs)("div", {
            className: Object(c.a)(M.a.root, i),
            children: [
              t.map(function (e) {
                return Object(v.jsx)(E, { content: e, classes: r });
              }),
              n &&
                t.length > 0 &&
                Object(v.jsx)(x, {
                  page: n.page,
                  pageAmount: n.pageAmount,
                  onChange: n.setPage,
                  disabled: a,
                  showFirstLastPage: !0,
                  showPrevNextButton: !0,
                  classes: {
                    root: Object(c.a)("standardPagination", M.a.pagination),
                    button: "standardPagination_button",
                    activePage: "standardPagination_active",
                  },
                }),
            ],
          });
        },
        H = n(126),
        L = n.n(H),
        F = function (e) {
          var t = e.classes,
            n = e.styles,
            l = e.columns,
            b = e.rows,
            p = e.pagination,
            f = e.infinityPagination,
            m = e.loading,
            j = void 0 !== m && m,
            h = e.RawWrapper,
            O = e.isMobile,
            g = e.empty,
            _ = e.skeletonRows,
            C = void 0 === _ ? 5 : _,
            w = e.includeHeader,
            N = void 0 === w || w,
            E = e.withoutDefaultStyles,
            k = e.compact,
            M = void 0 === k ? 0 : k,
            H = e.circular,
            F = void 0 === H || H,
            S = e.rowOnClick,
            W = Object(s.b)(M),
            R = l.reduce(function (e, t) {
              return (e[t.field] = t), e;
            }, {}),
            B = function (e) {
              return Object.entries(e).sort(function (e, t) {
                var n = Object(i.a)(e, 1)[0],
                  a = Object(i.a)(t, 1)[0];
                for (var r in l) {
                  var o = l[r];
                  if (n === o.field) return -1;
                  if (a === o.field) return 1;
                }
                return 0;
              });
            },
            I = function (e, n, a, r) {
              if ("__typename" !== e) {
                var i = R[e];
                return null !== i && void 0 !== i && i.valueRender
                  ? i.valueRender(n, j, a, r, O)
                  : j
                  ? Object(v.jsx)("div", { className: "skeleton" })
                  : (function (e, t) {
                      return "string" === typeof e || "number" === typeof e
                        ? Object(v.jsx)("div", {
                            className: Object(c.a)(L.a.value, t),
                            children: e,
                          })
                        : Object(v.jsx)(v.Fragment, {});
                    })(n, null === t || void 0 === t ? void 0 : t.tile);
              }
            },
            T = function () {
              return p && b.length > 0
                ? Object(v.jsx)(x, {
                    page: p.page,
                    pageAmount: p.pageAmount,
                    onChange: p.setPage,
                    disabled: j,
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
                        L.a.pagination,
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
              L.a.wrapper,
              null === t || void 0 === t ? void 0 : t.global
            ),
            style: { "--table-column-count": l.length },
            children: [
              "top" === (null === p || void 0 === p ? void 0 : p.position) &&
                Object(v.jsx)(T, {}),
              W
                ? Object(v.jsx)(P, {
                    classes: null === t || void 0 === t ? void 0 : t.compact,
                    className:
                      null === t || void 0 === t ? void 0 : t.compactWrapper,
                    content: b.reduce(function (e, t, n, a) {
                      var r = B(t)
                        .filter(function (e) {
                          var t = Object(i.a)(e, 2),
                            n = t[0],
                            a = t[1];
                          return (
                            "string" === typeof a ||
                            "number" === typeof a ||
                            !!R[n] ||
                            !!R[n].valueRender
                          );
                        })
                        .map(function (e) {
                          var t = Object(i.a)(e, 2),
                            r = t[0],
                            o = t[1],
                            l = R[r];
                          return {
                            name:
                              (null === l || void 0 === l
                                ? void 0
                                : l.headerName) || r,
                            value:
                              null !== l && void 0 !== l && l.valueRender
                                ? null === l || void 0 === l
                                  ? void 0
                                  : l.valueRender(o, j, a[n], n)
                                : o,
                          };
                        });
                      return e.push(r), e;
                    }, []),
                  })
                : Object(v.jsxs)("div", {
                    className: Object(c.a)(
                      L.a.tableWrapper,
                      !E && "standardTable",
                      null === t || void 0 === t ? void 0 : t.root
                    ),
                    style: null === n || void 0 === n ? void 0 : n.root,
                    children: [
                      N &&
                        Object(v.jsx)("div", {
                          className: Object(c.a)(
                            L.a.headerWrapper,
                            !E && "standardTable_header",
                            null === t || void 0 === t ? void 0 : t.header
                          ),
                          style: null === n || void 0 === n ? void 0 : n.header,
                          children: l.map(function (e, n) {
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
                      j || 0 !== b.length
                        ? (function () {
                            if (!j || b.length > 0) return b;
                            for (
                              var e = l.map(function (e) {
                                  return e.field;
                                }),
                                t = [],
                                n = 0;
                              n < C;
                              n++
                            ) {
                              var a,
                                i = {},
                                o = Object(r.a)(e);
                              try {
                                for (o.s(); !(a = o.n()).done; ) {
                                  i[a.value] = "";
                                }
                              } catch (c) {
                                o.e(c);
                              } finally {
                                o.f();
                              }
                              t.push(i);
                            }
                            return t;
                          })().map(function (e, a, r) {
                            return h
                              ? Object(v.jsx)(h, { data: e, loading: j }, a)
                              : Object(v.jsx)(
                                  "div",
                                  {
                                    className: Object(c.a)(
                                      L.a.rawWrapper,
                                      !E && "standardTable_row",
                                      null === t || void 0 === t
                                        ? void 0
                                        : t.row
                                    ),
                                    onClick: function () {
                                      return S && S(e);
                                    },
                                    style:
                                      null === n || void 0 === n
                                        ? void 0
                                        : n.row,
                                    children: B(e)
                                      .sort(function (e, t) {
                                        var n = Object(i.a)(e, 1)[0],
                                          a = Object(i.a)(t, 1)[0];
                                        for (var r in l) {
                                          var o = l[r];
                                          if (n === o.field) return -1;
                                          if (a === o.field) return 1;
                                        }
                                        return 0;
                                      })
                                      .map(function (t, n) {
                                        var r = Object(i.a)(t, 2),
                                          l = r[0],
                                          c = r[1];
                                        return Object(v.jsx)(
                                          o.Fragment,
                                          { children: I(l, c, e, a) },
                                          "Key_".concat(l, "_").concat(n)
                                        );
                                      }),
                                  },
                                  "rawWrapperKey_#".concat(a)
                                );
                          })
                        : null !== g && void 0 !== g && g.disable
                        ? null
                        : Object(v.jsx)(y, {
                            description:
                              null === g || void 0 === g
                                ? void 0
                                : g.description,
                            classes:
                              null === g || void 0 === g ? void 0 : g.classes,
                          }),
                    ],
                  }),
              "top" !== (null === p || void 0 === p ? void 0 : p.position) &&
                Object(v.jsx)(T, {}),
              f &&
                Object(v.jsx)("div", {
                  className: L.a.infinityPagination,
                  children: Object(v.jsx)(d.a, Object(a.a)({}, f)),
                }),
              j && F && Object(v.jsx)(u.a, { size: 86, className: L.a.loader }),
            ],
          });
        };
    },
    136: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n(16),
        r = n(34),
        i = n(23),
        o = n(21),
        l = n(97),
        c = n(0);
      function s(e) {
        return function (t) {
          var n = Object(o.i)(),
            s = n.user,
            u = n.isUserDataLoading,
            d = Object(o.k)(),
            b = d.gameAccess,
            p = d.gameAgreed,
            f = Object(r.h)().pathname,
            m =
              s && !b
                ? Object(c.jsx)(r.a, {
                    to: { pathname: i.m.startPage.pathName },
                  })
                : s && !p.value
                ? Object(c.jsx)(r.a, {
                    to: {
                      pathname: i.m.gamingDisclaimerPage.pathName,
                      state: { pathname: f },
                    },
                  })
                : Object(c.jsx)(e, Object(a.a)({}, t));
          return u || p.isLoading || null === b ? Object(c.jsx)(l.a, {}) : m;
        };
      }
    },
    1374: function (e, t, n) {
      "use strict";
      n.r(t);
      var a,
        r = n(3),
        i = n(21),
        o = n(125),
        l = n(136),
        c = n(717),
        s = n(1463),
        u = n(67),
        d = n(1),
        b = n(4),
        p = n(17),
        f = n(390),
        m = n.n(f),
        j = n(34),
        v = n(15),
        h = n(16),
        O = [
          "requestFullscreen",
          "mozRequestFullScreen",
          "webkitRequestFullScreen",
          "msRequestFullscreen",
        ],
        x = (function () {
          var e = Object(b.a)(
            Object(d.a)().mark(function e(t) {
              var n;
              return Object(d.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (t) {
                        e.next = 2;
                        break;
                      }
                      return e.abrupt("return");
                    case 2:
                      if (
                        !(n = O.find(function (e) {
                          var n = e;
                          return !!t[n] && n;
                        }))
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (e.next = 6), t[n]();
                    case 6:
                      return e.abrupt("return", e.sent);
                    case 7:
                      throw {
                        message: "the device does not support fullScreen",
                      };
                    case 8:
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
        g = [
          "exitFullscreen",
          "mozCancelFullScreen",
          "mozExitFullscreen",
          "webkitExitFullscreen",
          "webkitCancelFullScreen",
          "msCancelFullScreen",
          "msExitFullscreen",
        ],
        _ = (function () {
          var e = Object(b.a)(
            Object(d.a)().mark(function e() {
              var t;
              return Object(d.a)().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        !(t = g.find(function (e) {
                          var t = e;
                          if (document[t]) return t;
                        }))
                      ) {
                        e.next = 5;
                        break;
                      }
                      return (e.next = 4), document[t]();
                    case 4:
                      return e.abrupt("return", e.sent);
                    case 5:
                      throw {
                        message:
                          "exitFullscreen function does not support in this device",
                      };
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        y = n(1138),
        C = n.n(y),
        w = n(0),
        N = "fullScreen",
        E = Object(r.forwardRef)(function (e, t) {
          var n = e.children,
            a = e.warnAboutIsFullScreen,
            i = Object(j.g)(),
            o = Object(r.useState)(!1),
            l = Object(p.a)(o, 2),
            c = l[0],
            s = l[1],
            u = Object(r.useState)(!1),
            f = Object(p.a)(u, 2),
            m = f[0],
            O = f[1],
            g = Object(r.useRef)(null),
            y = Object(r.useRef)(null),
            E = r.Children.map(n, function (e) {
              var t;
              return Object(r.cloneElement)(
                e,
                Object(h.a)(
                  Object(h.a)({}, e.props),
                  {},
                  {
                    ref: function (t) {
                      g.current = t;
                      var n = e.ref;
                      return (
                        "function" === typeof n ? n(t) : n && (n.current = t), t
                      );
                    },
                    className: Object(v.a)(
                      m && C.a.customFullScreen,
                      null === (t = e.props) || void 0 === t
                        ? void 0
                        : t.className
                    ),
                  }
                )
              );
            }),
            k = function (e) {
              var t = new URLSearchParams(i.location.search);
              e ? t.set(N, "enable") : t.delete(N),
                i.push(
                  Object(h.a)(
                    Object(h.a)({}, i.location),
                    {},
                    { search: t.toString() }
                  )
                );
            },
            M = (function () {
              var e = Object(b.a)(
                Object(d.a)().mark(function e() {
                  return Object(d.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), x(g.current);
                          case 3:
                            return e.abrupt("return", e.sent);
                          case 6:
                            (e.prev = 6),
                              (e.t0 = e.catch(0)),
                              console.error("enterFullscreen error: ", e.t0),
                              k(!0);
                          case 10:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 6]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            P = (function () {
              var e = Object(b.a)(
                Object(d.a)().mark(function e() {
                  return Object(d.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), _();
                          case 3:
                            e.next = 9;
                            break;
                          case 5:
                            (e.prev = 5),
                              (e.t0 = e.catch(0)),
                              console.error("exitFullscreen error: ", e.t0),
                              k(!1);
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 5]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(r.useEffect)(
              function () {
                var e = function () {
                  var e = document.fullscreenElement;
                  (y.current = e), s(!!e);
                };
                return (
                  document.addEventListener("fullscreenchange", e),
                  function () {
                    document.removeEventListener("fullscreenchange", e);
                  }
                );
              },
              [g]
            ),
            Object(r.useEffect)(
              function () {
                a && a(c);
              },
              [c]
            ),
            Object(r.useEffect)(
              function () {
                var e = !!new URLSearchParams(i.location.search).get(N);
                O(e);
                var t = function (e) {
                    "Escape" === e.code && k(!1);
                  },
                  n = function () {
                    return window.removeEventListener("keyup", t);
                  };
                return (
                  e ? window.addEventListener("keyup", t) : n(),
                  function () {
                    n();
                  }
                );
              },
              [i.location.search]
            ),
            Object(r.useImperativeHandle)(t, function () {
              return {
                enterFullscreen: M,
                exitFullscreen: P,
                fullScreenElement: y.current,
                currentElement: g.current,
              };
            }),
            Object(w.jsx)(w.Fragment, { children: E })
          );
        }),
        k = n(113),
        M = n(32),
        P = n(37),
        H = n(75),
        L = n(18),
        F = ["title", "titleId"];
      function S() {
        return (
          (S = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          S.apply(this, arguments)
        );
      }
      function W(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++)
              (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function R(e, t) {
        var n = e.title,
          i = e.titleId,
          o = W(e, F);
        return r.createElement(
          "svg",
          S(
            {
              width: 18,
              height: 18,
              viewBox: "0 0 18 18",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": i,
            },
            o
          ),
          n ? r.createElement("title", { id: i }, n) : null,
          a ||
            (a = r.createElement("path", {
              d: "M9 12.9525L13.635 15.75L12.405 10.4775L16.5 6.93L11.1075 6.4725L9 1.5L6.8925 6.4725L1.5 6.93L5.595 10.4775L4.365 15.75L9 12.9525Z",
              stroke: "currentColor",
              fill: "currentColor",
            }))
        );
      }
      var B,
        I,
        T = r.forwardRef(R),
        A = (n.p, ["title", "titleId"]);
      function Z() {
        return (
          (Z = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          Z.apply(this, arguments)
        );
      }
      function D(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++)
              (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function V(e, t) {
        var n = e.title,
          a = e.titleId,
          i = D(e, A);
        return r.createElement(
          "svg",
          Z(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": a,
            },
            i
          ),
          n ? r.createElement("title", { id: a }, n) : null,
          B ||
            (B = r.createElement(
              "g",
              { clipPath: "url(#clip0_2948_14159)" },
              r.createElement("circle", {
                cx: 12,
                cy: 12,
                r: 10.25,
                stroke: "currentColor",
                strokeWidth: 1.5,
              }),
              r.createElement("path", {
                d: "M9.00244 9.00253C9.00244 8.40616 9.27884 7.83421 9.77082 7.41251C10.2628 6.99081 10.9301 6.75391 11.6259 6.75391H12.3754C13.0712 6.75391 13.7385 6.99081 14.2304 7.41251C14.7224 7.83421 14.9988 8.40616 14.9988 9.00253C15.0264 9.48918 14.8952 9.97161 14.6248 10.3772C14.3544 10.7827 13.9596 11.0895 13.4997 11.2512C13.0399 11.4667 12.6451 11.8757 12.3747 12.4165C12.1043 12.9572 11.973 13.6005 12.0006 14.2493",
                stroke: "currentColor",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              }),
              r.createElement("path", {
                d: "M12.0005 17.25V17.2575",
                stroke: "currentColor",
                strokeWidth: 1.5,
                strokeLinecap: "round",
                strokeLinejoin: "round",
              })
            )),
          I ||
            (I = r.createElement(
              "defs",
              null,
              r.createElement(
                "clipPath",
                { id: "clip0_2948_14159" },
                r.createElement("rect", {
                  width: 24,
                  height: 24,
                  fill: "currentColor",
                })
              )
            ))
        );
      }
      var G,
        z,
        X = r.forwardRef(V),
        U = (n.p, ["title", "titleId"]);
      function Y() {
        return (
          (Y = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          Y.apply(this, arguments)
        );
      }
      function J(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++)
              (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function q(e, t) {
        var n = e.title,
          a = e.titleId,
          i = J(e, U);
        return r.createElement(
          "svg",
          Y(
            {
              width: 22,
              height: 22,
              viewBox: "0 0 22 22",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": a,
            },
            i
          ),
          n ? r.createElement("title", { id: a }, n) : null,
          G ||
            (G = r.createElement("path", {
              d: "M3.4375 2.06388L7.5625 2.068C7.74484 2.068 7.9197 2.14043 8.04864 2.26936C8.17757 2.3983 8.25 2.57316 8.25 2.7555C8.25 2.93784 8.17757 3.1127 8.04864 3.24164C7.9197 3.37057 7.74484 3.443 7.5625 3.443L3.4375 3.43887V7.5625C3.4375 7.74484 3.36507 7.9197 3.23614 8.04864C3.1072 8.17757 2.93234 8.25 2.75 8.25C2.56766 8.25 2.3928 8.17757 2.26386 8.04864C2.13493 7.9197 2.0625 7.74484 2.0625 7.5625V2.0625H3.4375V2.06388ZM3.4375 19.9361V19.9375H2.0625V14.4375C2.0625 14.2552 2.13493 14.0803 2.26386 13.9514C2.3928 13.8224 2.56766 13.75 2.75 13.75C2.93234 13.75 3.1072 13.8224 3.23614 13.9514C3.36507 14.0803 3.4375 14.2552 3.4375 14.4375V18.5611L7.5625 18.557C7.74484 18.557 7.9197 18.6294 8.04864 18.7584C8.17757 18.8873 8.25 19.0622 8.25 19.2445C8.25 19.4268 8.17757 19.6017 8.04864 19.7306C7.9197 19.8596 7.74484 19.932 7.5625 19.932L3.4375 19.9361ZM18.5625 2.06388V2.0625H19.9375V7.5625C19.9375 7.74484 19.8651 7.9197 19.7361 8.04864C19.6072 8.17757 19.4323 8.25 19.25 8.25C19.0677 8.25 18.8928 8.17757 18.7639 8.04864C18.6349 7.9197 18.5625 7.74484 18.5625 7.5625V3.43887L14.4375 3.443C14.2552 3.443 14.0803 3.37057 13.9514 3.24164C13.8224 3.1127 13.75 2.93784 13.75 2.7555C13.75 2.57316 13.8224 2.3983 13.9514 2.26936C14.0803 2.14043 14.2552 2.068 14.4375 2.068L18.5625 2.06388ZM18.5625 19.9361L14.4375 19.932C14.2552 19.932 14.0803 19.8596 13.9514 19.7306C13.8224 19.6017 13.75 19.4268 13.75 19.2445C13.75 19.0622 13.8224 18.8873 13.9514 18.7584C14.0803 18.6294 14.2552 18.557 14.4375 18.557L18.5625 18.5611V14.4375C18.5625 14.2552 18.6349 14.0803 18.7639 13.9514C18.8928 13.8224 19.0677 13.75 19.25 13.75C19.4323 13.75 19.6072 13.8224 19.7361 13.9514C19.8651 14.0803 19.9375 14.2552 19.9375 14.4375V19.9375H18.5625V19.9361Z",
              fill: "currentColor",
            })),
          z ||
            (z = r.createElement("rect", {
              x: 8.25,
              y: 8.25,
              width: 5.5,
              height: 5.5,
              rx: 1,
              fill: "currentColor",
            }))
        );
      }
      var K,
        Q = r.forwardRef(q),
        $ = (n.p, n(1139)),
        ee = n.n($),
        te = n(26),
        ne = n(175),
        ae = function (e) {
          var t = e.className,
            n = e.onFullScreen,
            a = e.likes,
            i = e.doILikeIt,
            o = e.game_id,
            l = e.maxProfit,
            c = Object(r.useRef)(null),
            s = Object(r.useState)(i),
            f = Object(p.a)(s, 2),
            m = f[0],
            j = f[1],
            h = Object(r.useState)(a),
            O = Object(p.a)(h, 2),
            x = O[0],
            g = O[1],
            _ = Object(r.useState)(!1),
            y = Object(p.a)(_, 2),
            C = y[0],
            N = y[1],
            E = (function () {
              var e = Object(b.a)(
                Object(d.a)().mark(function e() {
                  return Object(d.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            j(!0),
                            g(function (e) {
                              return e + 1;
                            }),
                            (e.next = 4),
                            u.c.post("basilisk/like", { game_id: o })
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            k = (function () {
              var e = Object(b.a)(
                Object(d.a)().mark(function e() {
                  return Object(d.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            j(!1),
                            g(function (e) {
                              return Math.max(e - 1, 0);
                            }),
                            (e.next = 4),
                            u.c.post("basilisk/unlike", { game_id: o })
                          );
                        case 4:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          return (
            Object(r.useEffect)(
              function () {
                j(i), g(a);
              },
              [i, a]
            ),
            Object(w.jsxs)("div", {
              className: Object(v.a)(t, ee.a.footer),
              children: [
                Object(w.jsxs)("button", {
                  className: ee.a.left,
                  onClick: function () {
                    m ? k() : E();
                  },
                  children: [
                    Object(w.jsx)(T, {
                      className: Object(v.a)(
                        ee.a.starButton,
                        m && ee.a.starButton_filled
                      ),
                    }),
                    Object(w.jsx)("span", {
                      children: " ".concat(x, " Favorite"),
                    }),
                  ],
                }),
                Object(w.jsxs)("div", {
                  className: ee.a.right,
                  children: [
                    Object(w.jsx)(H.a, {
                      withoutLabel: !0,
                      className: ee.a.select,
                      frontComponent: re,
                    }),
                    Object(w.jsxs)("div", {
                      className: ee.a.buttons,
                      children: [
                        Object(w.jsx)(L.a, {
                          ref: c,
                          onClick: function () {
                            return N(!0);
                          },
                          className: Object(v.a)(
                            ee.a.button,
                            ee.a.centerButton
                          ),
                          children: Object(w.jsx)(X, {}),
                        }),
                        Object(w.jsx)(L.a, {
                          onClick: n,
                          className: ee.a.button,
                          children: Object(w.jsx)(Q, {}),
                        }),
                      ],
                    }),
                  ],
                }),
                Object(w.jsx)(ne.a, {
                  isOpen: C,
                  onClose: function () {
                    return N(!1);
                  },
                  background: "transparent",
                  position: { top: -20 },
                  paper: { className: ee.a.paper },
                  anchor: c.current,
                  children: Object(w.jsx)("span", {
                    children: l
                      ? "Max Profit: ".concat(l, "$")
                      : "Game session not started",
                  }),
                }),
              ],
            })
          );
        },
        re = function (e) {
          var t = e.selectedCoin;
          return t
            ? Object(w.jsxs)("div", {
                className: ee.a.front,
                children: [
                  Object(w.jsx)(te.a, {
                    width: 16,
                    coin: null === t || void 0 === t ? void 0 : t.symbol,
                  }),
                  Object(w.jsx)("span", {
                    className: ee.a.symbol,
                    children: t.symbol,
                  }),
                  Object(w.jsx)("span", { children: (+t.balance).toFixed(8) }),
                ],
              })
            : null;
        },
        ie = n(1140),
        oe = n.n(ie),
        le = n.p + "static/media/BG.fa415343.webp",
        ce = ["title", "titleId"];
      function se() {
        return (
          (se = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          se.apply(this, arguments)
        );
      }
      function ue(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++)
              (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function de(e, t) {
        var n = e.title,
          a = e.titleId,
          i = ue(e, ce);
        return r.createElement(
          "svg",
          se(
            {
              width: 22,
              height: 22,
              viewBox: "0 0 22 22",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": a,
            },
            i
          ),
          n ? r.createElement("title", { id: a }, n) : null,
          K ||
            (K = r.createElement("path", {
              d: "M10.9997 20.1654C5.93692 20.1654 1.83301 16.0614 1.83301 10.9987C1.83301 5.93595 5.93692 1.83203 10.9997 1.83203C16.0624 1.83203 20.1663 5.93595 20.1663 10.9987C20.1608 16.0587 16.0597 20.1599 10.9997 20.1654ZM3.66634 11.1564C3.68718 13.0943 4.47433 14.9453 5.85578 16.3046C7.23722 17.664 9.1006 18.4212 11.0387 18.4108C12.9767 18.4003 14.8319 17.6231 16.1986 16.249C17.5654 14.8749 18.3326 13.0156 18.3326 11.0775C18.3326 9.13944 17.5654 7.28015 16.1986 5.90604C14.8319 4.53192 12.9767 3.75472 11.0387 3.7443C9.1006 3.73389 7.23722 4.4911 5.85578 5.85044C4.47433 7.20979 3.68718 9.06072 3.66634 10.9987V11.1564ZM9.16634 15.1237V6.8737L14.6663 10.9987L9.16634 15.1237Z",
              fill: "currentColor",
            }))
        );
      }
      var be = r.forwardRef(de),
        pe =
          (n.p,
          function (e) {
            var t = e.freePlay,
              n = e.realPlay;
            return Object(w.jsxs)("div", {
              className: oe.a.content,
              children: [
                Object(w.jsx)("img", {
                  src: le,
                  alt: "background",
                  loading: "lazy",
                  className: oe.a.background,
                }),
                Object(w.jsxs)("div", {
                  className: oe.a.msg,
                  children: [
                    Object(w.jsx)("span", {
                      children:
                        "Entering a third-party game. The balance of the selected currency will be displayed in USD, and if you change currency while playing, the game will refresh and restart.",
                    }),
                    Object(w.jsxs)("div", {
                      className: oe.a.buttons,
                      children: [
                        Object(w.jsxs)(L.a, {
                          className: oe.a.btn,
                          onClick: n,
                          children: [Object(w.jsx)(be, {}), " Real Play"],
                        }),
                        Object(w.jsxs)(L.a, {
                          className: oe.a.btn,
                          onClick: t,
                          children: [Object(w.jsx)(be, {}), " Free Play"],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          }),
        fe = n(1141),
        me = n.n(fe),
        je = function () {
          var e = Object(r.useRef)(null),
            t = m()("access-token"),
            n = Object(p.a)(t, 1)[0],
            a = Object(i.j)().selectedCoin,
            o = Object(r.useState)(!0),
            l = Object(p.a)(o, 2),
            c = l[0],
            s = l[1],
            f = Object(r.useState)(!1),
            h = Object(p.a)(f, 2),
            O = h[0],
            x = h[1],
            g = Object(r.useState)(),
            _ = Object(p.a)(g, 2),
            y = _[0],
            C = _[1],
            N = Object(r.useState)(),
            H = Object(p.a)(N, 2),
            L = H[0],
            F = H[1],
            S = Object(j.g)().location,
            W = Object(r.useMemo)(
              function () {
                var e = S.pathname.split(":");
                return Object(p.a)(e, 2)[1] || "";
              },
              [S.pathname]
            );
          Object(r.useEffect)(function () {
            var e = (function () {
              var e = Object(b.a)(
                Object(d.a)().mark(function e() {
                  var t, a;
                  return Object(d.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            u.c.post("basilisk/get-game-info", {
                              token: n,
                              game_id: W,
                            })
                          );
                        case 2:
                          (t = e.sent), (a = t.data) && C(a);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
            e();
          }, []);
          var R = (function () {
              var e = Object(b.a)(
                Object(d.a)().mark(function e(t) {
                  var r, i, o, l;
                  return Object(d.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            x(!0),
                            (e.next = 3),
                            u.c.post("basilisk/create-session", {
                              token: n,
                              game_id: W,
                              coin:
                                null === a || void 0 === a ? void 0 : a.symbol,
                              is_demo: t ? 1 : 0,
                            })
                          );
                        case 3:
                          (r = e.sent),
                            (i = r.data),
                            s(!t),
                            i.success
                              ? ((o = i.session_url),
                                (l = i.slots_max_profit),
                                F({ session_url: o, slots_max_profit: l }))
                              : i.message && (M.b.error(i.message), s(!!t)),
                            x(!1);
                        case 8:
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
            B = function () {
              return R(!0);
            },
            I = function () {
              return R(!1);
            };
          return (
            Object(r.useEffect)(
              function () {
                L && c && R(!c);
              },
              [null === a || void 0 === a ? void 0 : a.symbol]
            ),
            Object(w.jsxs)("div", {
              className: me.a.game,
              children: [
                Object(w.jsx)("div", {
                  className: me.a.header,
                  children: Object(w.jsxs)("div", {
                    className: me.a.switchWrapper,
                    children: [
                      Object(w.jsx)("span", { children: "Free Play" }),
                      Object(w.jsx)(k.a, {
                        toggle: c,
                        setToggle: function () {
                          s(function (e) {
                            return !e;
                          }),
                            c ? B() : I();
                        },
                      }),
                      Object(w.jsx)("span", { children: "Real Play" }),
                    ],
                  }),
                }),
                Object(w.jsx)(E, {
                  ref: e,
                  children: Object(w.jsxs)("div", {
                    className: me.a.content,
                    children: [
                      O &&
                        Object(w.jsx)("div", {
                          className: me.a.loader,
                          children: Object(w.jsx)(P.b, { size: 100 }),
                        }),
                      L
                        ? Object(w.jsx)("iframe", {
                            className: Object(v.a)(
                              me.a.frame,
                              O && me.a.frame_load
                            ),
                            src: L.session_url,
                            title:
                              (null === y || void 0 === y ? void 0 : y.name) ||
                              "Game",
                          })
                        : Object(w.jsx)(pe, { freePlay: B, realPlay: I }),
                    ],
                  }),
                }),
                Object(w.jsx)(ae, {
                  doILikeIt:
                    (null === y || void 0 === y ? void 0 : y.do_i_like_it) ||
                    !1,
                  likes: (null === y || void 0 === y ? void 0 : y.likes) || 0,
                  className: me.a.footer,
                  onFullScreen: function () {
                    var t;
                    null === (t = e.current) ||
                      void 0 === t ||
                      t.enterFullscreen();
                  },
                  game_id: W,
                  maxProfit:
                    null === L || void 0 === L ? void 0 : L.slots_max_profit,
                }),
              ],
            })
          );
        },
        ve = n(1142),
        he = n.n(ve);
      t.default = Object(l.a)(function () {
        return (
          (function () {
            var e = Object(i.j)().getCoins;
            Object(r.useEffect)(function () {
              var t = [],
                n = function () {
                  var n = u.b
                    .flowify({
                      messageFilter: function (e) {
                        return "balance_refresh" === e.action;
                      },
                    })
                    .subscribe(function () {
                      e();
                    });
                  t.push(n);
                };
              return (
                u.b.isConnected
                  ? n()
                  : t.push(
                      u.b.connectionStatus
                        .pipe(
                          Object(c.a)(function (e) {
                            return e;
                          }),
                          Object(s.a)()
                        )
                        .subscribe(function () {
                          n();
                        })
                    ),
                function () {
                  t.forEach(function (e) {
                    e.closed || e.unsubscribe();
                  });
                }
              );
            }, []);
          })(),
          Object(w.jsxs)("div", {
            className: he.a.root,
            children: [
              Object(w.jsx)(je, {}),
              Object(w.jsx)(i.f, {
                game: "slots",
                withoutFairness: !0,
                children: Object(w.jsx)(o.c, {}),
              }),
            ],
          })
        );
      });
    },
    140: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var a = n(16),
        r = n(17),
        i = n(3),
        o = n(15),
        l = n(128),
        c = n(156),
        s = n(141),
        u = n.n(s),
        d = n(0),
        b = function (e, t) {
          return e > t ? ">" : "<";
        },
        p = function (e) {
          var t,
            n = e.children,
            s = e.index,
            p = Object(i.useRef)(null),
            f = Object(i.useState)({ index: s, direction: ">", isAnimate: !1 }),
            m = Object(r.a)(f, 2),
            j = m[0],
            v = m[1],
            h = Object(i.useRef)(s),
            O = Object(i.useRef)(null),
            x = Object(i.useMemo)(function () {
              return Object(c.a)();
            }, []),
            g = x.clearTimeouts,
            _ = x.pushTimeout,
            y = i.Children.map(n, function (e) {
              return e;
            });
          return (
            Object(i.useEffect)(
              function () {
                (h.current !== s || j.isAnimate) &&
                  (g(),
                  j.isAnimate
                    ? (O.current = s)
                    : v({ index: s, direction: b(s, j.index), isAnimate: !0 }));
              },
              [s]
            ),
            Object(i.useEffect)(function () {
              return g;
            }, []),
            y
              ? Object(d.jsx)("div", {
                  className: Object(o.a)(u.a.wrapper),
                  ref: p,
                  children: Object(d.jsx)("div", {
                    onAnimationEnd: function () {
                      v(function (e) {
                        return Object(a.a)(
                          Object(a.a)({}, e),
                          {},
                          { isAnimate: !1 }
                        );
                      }),
                        (h.current = s),
                        null !== O.current &&
                          _(function () {
                            v(function (e) {
                              var t = O.current;
                              return (
                                (O.current = null),
                                (h.current = e.index),
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
                      j.isAnimate && (">" === j.direction ? u.a.next : u.a.prev)
                    ),
                    children: j.isAnimate
                      ? Object(l.a)(2, function (e) {
                          var t,
                            n = j.direction,
                            a = j.index,
                            r = 0,
                            i = !1;
                          ">" === n
                            ? ((r = 0 === e ? h.current : a), e || (i = !0))
                            : ((r = 0 === e ? a : h.current), e && (i = !0));
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
                              .concat(i ? "_animated" : "")
                          );
                        })
                      : Object(d.jsx)(
                          "div",
                          {
                            className: u.a.element,
                            style: j.isAnimate
                              ? {
                                  maxWidth:
                                    null === (t = p.current) || void 0 === t
                                      ? void 0
                                      : t.offsetWidth,
                                }
                              : void 0,
                            children: y[j.index],
                          },
                          "".concat(j.index, "_").concat(y.length)
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
    175: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var a = n(16),
        r = n(17),
        i = n(3),
        o = n(15),
        l = n(35),
        c = n(234),
        s = n.n(c),
        u = n(0),
        d = function (e) {
          var t = e.children,
            n = e.anchor,
            c = e.isOpen,
            d = e.onClose,
            b = e.onMove,
            p = e.background,
            f = void 0 === p ? "black" : p,
            m = e.paper,
            j = e.position,
            v = e.popupRootClasses,
            h = e.disableScroll,
            O = Object(i.useState)(null),
            x = Object(r.a)(O, 2),
            g = x[0],
            _ = x[1],
            y = Object(i.useState)(c),
            C = Object(r.a)(y, 2),
            w = C[0],
            N = C[1];
          if (
            (Object(i.useEffect)(
              function () {
                return (
                  c
                    ? (N(!0), h && (document.body.style.overflow = "hidden"))
                    : h && (document.body.style.overflow = ""),
                  function () {
                    h && (document.body.style.overflow = "");
                  }
                );
              },
              [c, h]
            ),
            !w)
          )
            return null;
          var E = (function () {
            if (n && g) {
              var e = n.getBoundingClientRect(),
                t = e.top,
                a = e.left;
              return (
                (t += null !== j && void 0 !== j && j.top ? j.top : 0) < 0 &&
                  (t = 0),
                (a += null !== j && void 0 !== j && j.left ? j.left : 0) < 0 &&
                  (a = 0),
                a + g.offsetWidth > window.innerWidth &&
                  (a = window.innerWidth - g.offsetWidth),
                t + g.offsetHeight > window.innerHeight &&
                  (t = window.innerHeight - g.offsetHeight),
                { top: t, left: a }
              );
            }
            return { top: 0, left: 0 };
          })();
          return Object(u.jsx)(l.a, {
            background: f,
            curtainOnClick: d,
            curtainOnMove: b,
            classes: v,
            children: Object(u.jsx)(
              "div",
              Object(a.a)(
                Object(a.a)(
                  {
                    ref: function (e) {
                      return _(e);
                    },
                    onAnimationEnd: function (e) {
                      !c && w && N(!1);
                    },
                    style: Object(a.a)(
                      Object(a.a)(
                        {},
                        null === m || void 0 === m ? void 0 : m.style
                      ),
                      {},
                      {
                        transform: "translate("
                          .concat(E.left, "px, ")
                          .concat(E.top, "px)"),
                      }
                    ),
                  },
                  m
                ),
                {},
                {
                  className: Object(o.a)(
                    s.a.root,
                    null === m || void 0 === m ? void 0 : m.className,
                    c && w && s.a.open,
                    !c && w && s.a.close
                  ),
                  children: t,
                }
              )
            ),
          });
        };
    },
    234: function (e, t, n) {
      e.exports = {
        root: "style_root__Ofw7z",
        open: "style_open__2MXnY",
        openAnimation: "style_openAnimation__3f--8",
        close: "style_close__rN2Gr",
        closeAnimation: "style_closeAnimation__3l4t3",
      };
    },
    26: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n(16),
        r = n(20),
        i = n(51),
        o = n.n(i),
        l = n(0),
        c = ["coin", "alt", "className"],
        s = function (e) {
          var t = e.coin,
            n = e.alt,
            i = e.className,
            s = Object(r.a)(e, c);
          return t
            ? "usd" === (null === t || void 0 === t ? void 0 : t.toLowerCase())
              ? Object(l.jsx)("p", { className: o.a.usd, children: "USD" })
              : Object(l.jsx)(
                  "img",
                  Object(a.a)(
                    Object(a.a)(
                      {
                        src: "https://cdn.faucetpay.io/coins/".concat(
                          (t || "").toLowerCase(),
                          ".png"
                        ),
                        alt: n || t,
                      },
                      s
                    ),
                    {},
                    { className: i }
                  )
                )
            : null;
        };
    },
    27: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a = function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
        if (!e && 0 !== e) return "".concat(e);
        var n = Number(e).toFixed(t),
          a = n.match(/^[^.]+?(?=\.0*$)|^[^.]+?\..*?(?=0*$)|^[^.]*$/g);
        return a ? a[0] : n;
      };
    },
    28: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      }),
        n.d(t, "a", function () {
          return r;
        });
      var a = (function (e) {
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
    33: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return m;
      }),
        n.d(t, "a", function () {
          return j;
        });
      var a = n(19),
        r = n(17),
        i = n(3),
        o = n(1467),
        l = n(15),
        c = n(47),
        s = n(36),
        u = n(35),
        d = n(22),
        b = n(62),
        p = n.n(b),
        f = n(0),
        m = Object(i.createContext)({ setValue: function () {}, value: "" }),
        j = function (e) {
          var t = e.children,
            n = e.onChange,
            b = e.onCloseCallback,
            j = e.value,
            v = e.className,
            h = e.frontComponent,
            O = e.classes,
            x = e.disabled,
            g = e.topLabel,
            _ = e.errors,
            y = e.optionsScrollCallback,
            C = e.optionsWidth,
            w = e.optionsPosition,
            N = Object(i.useState)(!1),
            E = Object(r.a)(N, 2),
            k = E[0],
            M = E[1],
            P = Object(i.useRef)({
              left: 0,
              top: 0,
              selectHeight: 0,
              selectWidth: 0,
            }),
            H = Object(i.useRef)(null),
            L = function () {
              M(!1), b && b();
            };
          return (
            Object(c.a)("scroll", L, document),
            Object(i.useEffect)(
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
              className: Object(l.a)(
                v,
                p.a.select,
                null === O || void 0 === O ? void 0 : O.root
              ),
              onClick: function (e) {
                if (!x) {
                  var t = e.currentTarget.getBoundingClientRect(),
                    n = t.top,
                    a = t.left,
                    r = t.height,
                    i = t.width;
                  (P.current = {
                    top:
                      n +
                      (null !== w && void 0 !== w && w.top
                        ? null === w || void 0 === w
                          ? void 0
                          : w.top
                        : 0),
                    left:
                      a +
                      (null !== w && void 0 !== w && w.left
                        ? null === w || void 0 === w
                          ? void 0
                          : w.left
                        : 0),
                    selectHeight: r,
                    selectWidth: i,
                  }),
                    M(!0);
                }
              },
              children: [
                g &&
                  Object(f.jsx)("label", {
                    className: Object(l.a)(
                      p.a.topLabel,
                      null === O || void 0 === O ? void 0 : O.topLabel
                    ),
                    children: g,
                  }),
                _ &&
                  Object(f.jsx)(s.a, {
                    className: null === O || void 0 === O ? void 0 : O.error,
                    errors: _,
                  }),
                h ||
                  Object(f.jsx)("div", {
                    className: p.a.labelWrapper,
                    children: Object(f.jsx)("span", {
                      className: null === O || void 0 === O ? void 0 : O.label,
                      children: j,
                    }),
                  }),
                Object(f.jsx)(d.p, {
                  className: Object(l.a)(
                    p.a.arrow,
                    null === O || void 0 === O ? void 0 : O.arrow,
                    Object(a.a)({}, p.a.arrowOpen, k)
                  ),
                }),
                Object(f.jsx)(m.Provider, {
                  value: {
                    setValue: function (e) {
                      n(e), L();
                    },
                    value: j,
                  },
                  children: k
                    ? Object(f.jsx)(u.a, {
                        curtainOnClick: L,
                        children: Object(f.jsx)("div", {
                          ref: function (e) {
                            e &&
                              (!(function (e, t, n, a) {
                                var r,
                                  i,
                                  o = t.top + t.selectHeight,
                                  l = e.offsetHeight,
                                  c = window.innerHeight - o,
                                  s = o;
                                c < l && (s -= l - c + 10),
                                  (e.style.top = "".concat(
                                    null !==
                                      (r =
                                        null === a || void 0 === a
                                          ? void 0
                                          : a.top) && void 0 !== r
                                      ? r
                                      : s,
                                    "px"
                                  )),
                                  (e.style.left = "".concat(
                                    null !==
                                      (i =
                                        null === a || void 0 === a
                                          ? void 0
                                          : a.left) && void 0 !== i
                                      ? i
                                      : t.left,
                                    "px"
                                  )),
                                  (e.style.width = "".concat(
                                    null !== n && void 0 !== n
                                      ? n
                                      : t.selectWidth,
                                    "px"
                                  ));
                              })(e, P.current, C),
                              (H.current = e));
                          },
                          className: Object(l.a)(
                            p.a.optionContainer,
                            null === O || void 0 === O ? void 0 : O.options
                          ),
                          children: i.Children.count(t)
                            ? t
                            : Object(f.jsx)("div", {
                                className: Object(l.a)(
                                  p.a.noOptionsItem,
                                  null === O || void 0 === O
                                    ? void 0
                                    : O.noOptionItem
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
      var a = n(11),
        r = n(15),
        i = n(44),
        o = n(47),
        l = n(40),
        c = n(45),
        s = n.n(c),
        u = n(0),
        d = Object(l.a)("key"),
        b = function (e) {
          e.stopPropagation();
        },
        p = Object(i.a)(),
        f = function (e) {
          var t = e.children,
            n = e.background,
            i = void 0 === n ? "transparent" : n,
            l = e.curtainOnClick,
            c = e.curtainOnMove,
            f = e.classes;
          return (
            Object(o.a)("keydown", function (e) {
              e.stopPropagation(),
                d(e) &&
                  "Escape" === (null === e || void 0 === e ? void 0 : e.key) &&
                  l &&
                  l();
            }),
            p
              ? Object(a.createPortal)(
                  Object(u.jsx)("div", {
                    className: Object(r.a)(
                      s.a.root,
                      null === f || void 0 === f ? void 0 : f.root
                    ),
                    onClick: b,
                    children: Object(u.jsxs)("div", {
                      className: Object(r.a)(
                        s.a.container,
                        null === f || void 0 === f ? void 0 : f.container
                      ),
                      children: [
                        Object(u.jsx)("div", {
                          onPointerMove: c,
                          onClick: function () {
                            l && l();
                          },
                          className: Object(r.a)(
                            s.a.curtain,
                            "transparent" === i
                              ? s.a.curtain__transparent
                              : s.a.curtain__dark,
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
        return i;
      });
      var a = n(15),
        r = n(0),
        i = function (e) {
          var t = e.errors,
            n = e.className;
          return Object(r.jsx)("span", {
            className: Object(a.a)("inputErrorText", n),
            children: Array.isArray(t) ? t.join(", ") : t,
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
      var a = n(16),
        r = n(3),
        i = n(15),
        o = n(0),
        l = function (e, t) {
          return Object(o.jsx)(
            "svg",
            Object(a.a)(
              Object(a.a)(
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
        c = Object(r.forwardRef)(l),
        s = n(49),
        u = n.n(s),
        d = function (e) {
          var t = e.size,
            n = e.color,
            r = e.className,
            l = e.style,
            s = "number" === typeof t ? "".concat(t, "px") : t;
          return Object(o.jsx)(c, {
            id: "loader",
            className: Object(i.a)(u.a.loader, r),
            style: Object(a.a)(Object(a.a)({}, l), {}, { color: n }),
            ref: function (e) {
              if (e) {
                var t = e.getBoundingClientRect(),
                  n = t.height,
                  a = t.width,
                  r = Math.min(n, a);
                r || (r = 40),
                  (e.style.width = s || "".concat(r, "px")),
                  (e.style.height = s || "".concat(r, "px"));
              }
            },
          });
        },
        b = d;
    },
    40: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a = function (e) {
        return function (t) {
          if (!t) return !1;
          var n = t[e];
          return !!n || 0 === n;
        };
      };
    },
    42: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return r;
        });
      var a = function (e, t) {
          var n, a;
          if (
            e.loading !== t.loading ||
            e.isMobile !== t.isMobile ||
            (null === (n = e.pagination) || void 0 === n
              ? void 0
              : n.pageAmount) !==
              (null === (a = t.pagination) || void 0 === a
                ? void 0
                : a.pageAmount)
          )
            return !1;
          var r = e.rows,
            i = t.rows;
          if (r.length !== i.length) return !1;
          if (e.includeHeader !== t.includeHeader) return !1;
          try {
            for (var o = 0; o < r.length; o++) {
              var l = Object.values(r[o]),
                c = Object.values(i[o]);
              if (l.length !== c.length) return !1;
              for (var s = 0; s < l.length; s++) if (l[s] !== c[s]) return !1;
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
        return a;
      });
      var a = function () {
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
    48: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var a = n(16),
        r = n(3),
        i = n(33),
        o = function (e) {
          var t = e.children,
            n = e.value,
            o = Object(r.useContext)(i.b).setValue,
            l = r.Children.only(t);
          return Object(r.cloneElement)(
            t,
            Object(a.a)(
              Object(a.a)({}, l.props),
              {},
              {
                ref: function (e) {
                  var t;
                  "function" ===
                  typeof (null === l || void 0 === l ? void 0 : l.ref)
                    ? l.ref(e)
                    : null !== (t = l.ref) &&
                      void 0 !== t &&
                      t.hasOwnProperty("current") &&
                      (l.ref.current = e);
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
      var a = n(19),
        r = n(17),
        i = n(3),
        o = n(15),
        l = n(35),
        c = n(100),
        s = n(120),
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
            j = e.withCloseIcon,
            v = e.classes,
            h = void 0 === v ? {} : v,
            O = e.loading,
            x = Object(i.useState)(!1),
            g = Object(r.a)(x, 2),
            _ = g[0],
            y = g[1],
            C = Object(i.useRef)(null),
            w = Object(i.useState)(!0),
            N = Object(r.a)(w, 2),
            E = N[0],
            k = N[1];
          Object(i.useEffect)(
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
          var M = function (e) {
            if (C.current) {
              var t = C.current.offsetHeight;
              y(e <= t + 50);
            } else y(!1);
          };
          return (
            Object(i.useEffect)(
              function () {
                C.current && M(window.innerHeight);
              },
              [C, n, O]
            ),
            Object(i.useEffect)(function () {
              var e = c.a.subscribe(function (e) {
                var t = e.height;
                return M(t);
              });
              return function () {
                e.unsubscribe();
              };
            }, []),
            E && !n
              ? null
              : Object(f.jsx)(l.a, {
                  background: "dark",
                  curtainOnClick: b,
                  classes: {
                    container: Object(o.a)(
                      p.a.dialogContainer,
                      h.container,
                      ((t = {}),
                      Object(a.a)(t, p.a.close, !n),
                      Object(a.a)(t, p.a.topPosition, _),
                      t)
                    ),
                    curtain: p.a.curtain,
                  },
                  children: Object(f.jsxs)("div", {
                    ref: function (e) {
                      Object(s.a)(e, C);
                    },
                    onAnimationEnd: function (e) {
                      e.animationName === p.a.closeAnimation && k(!0);
                    },
                    className: Object(o.a)(
                      p.a.dialog,
                      j ? p.a.radial : p.a.standard,
                      h.dialog,
                      Object(a.a)({}, p.a.close, !n)
                    ),
                    children: [
                      j &&
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
    53: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return s;
      }),
        n.d(t, "a", function () {
          return b;
        }),
        n.d(t, "c", function () {
          return w;
        }),
        n.d(t, "b", function () {
          return M;
        });
      var a = n(3),
        r = n.n(a),
        i = n(15),
        o = n(57),
        l = n.n(o),
        c = n(0),
        s = function (e) {
          var t = e.row,
            n = e.columns,
            r = e.loading,
            o = e.isMobile,
            s = e.withoutDefaultStyles,
            u = e.className;
          return Object(c.jsx)("div", {
            className: Object(i.a)(
              l.a.rowWrapper,
              !s && "standardTable_row",
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
                      a.Fragment,
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
            className: Object(i.a)(
              d.a.wrapper,
              null === n || void 0 === n ? void 0 : n.root
            ),
            children: [
              Object(c.jsx)("span", {
                className: Object(i.a)(
                  d.a.title,
                  null === n || void 0 === n ? void 0 : n.title
                ),
                children: "Whoops!",
              }),
              Object(c.jsx)("div", {
                className: Object(i.a)(
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
        j = n(22),
        v = n(59),
        h = n.n(v),
        O = [
          "maxButtonVisible",
          "showPrevNextButton",
          "showFirstLastPage",
          "page",
          "pageAmount",
          "classes",
          "onChange",
          "disabled",
        ],
        x = function (e) {
          var t = e.className;
          return Object(c.jsx)("span", {
            className: Object(i.a)(h.a.skip, t),
            children: "...",
          });
        },
        g = function (e) {
          var t = e.maxButtonVisible,
            n = void 0 === t ? 3 : t,
            a = e.showPrevNextButton,
            o = e.showFirstLastPage,
            l = e.page,
            s = e.pageAmount,
            u = e.classes,
            d = e.onChange,
            b = e.disabled,
            v = Object(f.a)(e, O),
            g = function () {
              for (
                var e = [],
                  t = Math.floor(n / 2),
                  a = Math.max(l - t, 1),
                  p = Math.min(l + t, s),
                  f = function (t) {
                    var n = t === l,
                      r = Object(c.jsx)(
                        m.a,
                        {
                          onClick: function () {
                            return d && d(t);
                          },
                          disabled: n || b,
                          className: Object(i.a)(
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
                    ((1 === t || t === s) && o) ||
                      (e.push(r),
                      t === p && p + 1 < s
                        ? e.push(
                            Object(c.jsx)(x, {
                              className:
                                null === u || void 0 === u ? void 0 : u.skip,
                            })
                          )
                        : t === a &&
                          a - 1 > 1 &&
                          e.splice(
                            e.length - 2,
                            0,
                            Object(c.jsx)(x, {
                              className:
                                null === u || void 0 === u ? void 0 : u.skip,
                            })
                          ));
                  },
                  j = a;
                j <= p;
                j++
              )
                f(j);
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
            _ = 1 === l || b,
            y = l === s || b;
          return Object(c.jsxs)(
            "div",
            Object(p.a)(
              Object(p.a)(
                {
                  className: Object(i.a)(
                    h.a.root,
                    null === u || void 0 === u ? void 0 : u.root
                  ),
                },
                v
              ),
              {},
              {
                children: [
                  a &&
                    Object(c.jsx)(m.a, {
                      onClick: function () {
                        return d && d(Math.max(1, l - 1));
                      },
                      disabled: _,
                      className: Object(i.a)(
                        null === u || void 0 === u ? void 0 : u.button,
                        h.a.button
                      ),
                      children: Object(c.jsx)(j.J, {}),
                    }),
                  o &&
                    Object(c.jsx)(m.a, {
                      onClick: function () {
                        return d && d(1);
                      },
                      disabled: _,
                      className: Object(i.a)(
                        null === u || void 0 === u ? void 0 : u.button,
                        h.a.button,
                        1 === l && [
                          h.a.active,
                          null === u || void 0 === u ? void 0 : u.activePage,
                        ]
                      ),
                      children: "1",
                    }),
                  Object(c.jsx)(g, {}),
                  o &&
                    s > 1 &&
                    Object(c.jsx)(m.a, {
                      onClick: function () {
                        return d && d(s);
                      },
                      disabled: y,
                      className: Object(i.a)(
                        null === u || void 0 === u ? void 0 : u.button,
                        h.a.button,
                        l === s && [
                          h.a.active,
                          null === u || void 0 === u ? void 0 : u.activePage,
                        ]
                      ),
                      children: s,
                    }),
                  a &&
                    Object(c.jsx)(m.a, {
                      onClick: function () {
                        return d && d(Math.min(s, l + 1));
                      },
                      disabled: y,
                      className: Object(i.a)(
                        null === u || void 0 === u ? void 0 : u.button,
                        h.a.button
                      ),
                      children: Object(c.jsx)(j.J, {}),
                    }),
                ],
              }
            )
          );
        },
        _ = n(28),
        y = n(60),
        C = n.n(y),
        w = function (e) {
          var t = e.page,
            n = e.pageAmount,
            a = e.setPage,
            r = e.loading,
            o = e.direction,
            l = e.classes;
          return Object(c.jsx)(g, {
            page: t,
            pageAmount: n,
            onChange: a,
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
              root: Object(i.a)(
                "standardPagination",
                C.a.pagination,
                null === l || void 0 === l ? void 0 : l.pagination
              ),
              button: "standardPagination_button",
              activePage: Object(i.a)(
                "standardPagination_active",
                null === l || void 0 === l ? void 0 : l.paginationActive
              ),
            },
          });
        },
        N = n(42),
        E = n(61),
        k = n.n(E),
        M = function (e) {
          var t = e.data,
            n = e.loading,
            a = e.cardTypes,
            r = e.classes;
          return Object(c.jsx)("div", {
            className: Object(i.a)(
              k.a.wrapper,
              "standardTableCard",
              null === r || void 0 === r ? void 0 : r.row
            ),
            children: a.map(function (e, a) {
              return Object(c.jsxs)(
                "div",
                {
                  className: Object(i.a)(
                    k.a.cardValueWrapper,
                    null !== r && void 0 !== r && r.elements
                      ? null === r || void 0 === r
                        ? void 0
                        : r.elements[a]
                      : ""
                  ),
                  children: [
                    Object(c.jsx)("span", {
                      className: k.a.cardTitle,
                      children: e.headerName,
                    }),
                    !t || Object(N.b)(t[e.field])
                      ? Object(c.jsx)("div", { className: "skeleton" })
                      : e.valueRender
                      ? e.valueRender({
                          value: t[e.field],
                          loading: n,
                          src: t,
                          index: a,
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
                "".concat(e.field, "__").concat(a)
              );
            }),
          });
        };
    },
    55: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n(15),
        r = n(18),
        i = n(22),
        o = n(56),
        l = n.n(o),
        c = n(0),
        s = function (e) {
          var t = e.currentPage,
            n = e.isNextPageExist,
            o = e.setPage,
            s = e.className,
            u = Number(t);
          return Object(c.jsxs)("div", {
            className: Object(a.a)(l.a.infinityPagination, s),
            children: [
              Object(c.jsx)(r.a, {
                disabled: u <= 1,
                onClick: function () {
                  return o(u - 1);
                },
                children: Object(c.jsx)(i.p, {}),
              }),
              Object(c.jsx)(r.a, {
                disabled: !n,
                onClick: function () {
                  return o(u + 1);
                },
                children: Object(c.jsx)(i.p, {}),
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
    75: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return _;
      });
      var a = n(16),
        r = n(30),
        i = n(20),
        o = n(3),
        l = n(15),
        c = n(21),
        s = n(27),
        u = n(33),
        d = n(48),
        b = n(26),
        p = n(1),
        f = n(4),
        m = n(17),
        j = n(23),
        v = n(71),
        h = n(31),
        O = n(0),
        x = Object(h.b)(function () {
          return Promise.all([n.e(4), n.e(120)]).then(n.bind(null, 1438));
        }),
        g = [
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
            h = e.className,
            _ = e.classes,
            y = e.selectorClassName,
            C = e.withoutBalance,
            w = e.shortDescription,
            N = e.formatString,
            E = void 0 === N ? "b s" : N,
            k = e.coinsFilter,
            M = (e.label, e.error),
            P = e.optionsPosition,
            H = e.isEnableBalanceAnimation,
            L = void 0 !== H && H,
            F = e.optionsWidth,
            S = e.optionsCoords,
            W = e.disabled,
            R = e.customCoin,
            B = e.customSetCoin,
            I = e.frontComponent,
            T = Object(i.a)(e, g),
            A = Object(c.j)(),
            Z = A.selectedCoin,
            D = A.coins,
            V = A.setSelectedCoin,
            G = Object(o.useMemo)(
              function () {
                return R || Z;
              },
              [R, Z]
            ),
            z = Object(o.useMemo)(
              function () {
                return B || V;
              },
              [B, V]
            ),
            X = (function (e, t) {
              var a = Object(o.useState)([]),
                i = Object(m.a)(a, 2),
                l = i[0],
                c = i[1],
                s = Object(o.useRef)({
                  previousBalance: null,
                  profitParts: new Map(),
                });
              return (
                Object(o.useEffect)(
                  function () {
                    if (t && null !== e && void 0 !== e && e.balance) {
                      var a = (function () {
                        var t = Object(f.a)(
                          Object(p.a)().mark(function t() {
                            var a, i, o, l, u, d, b, f;
                            return Object(p.a)().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if (
                                      ((a = function () {
                                        s.current.previousBalance = {
                                          balance: e.balance,
                                          symbol: e.symbol,
                                        };
                                      }),
                                      (i = s.current),
                                      (o = i.previousBalance),
                                      (l = i.profitParts),
                                      o && o.symbol === e.symbol)
                                    ) {
                                      t.next = 5;
                                      break;
                                    }
                                    return a(), t.abrupt("return");
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
                                        .toDecimalPlaces(j.a)).equals(d))
                                    ) {
                                      t.next = 13;
                                      break;
                                    }
                                    return t.abrupt("return");
                                  case 13:
                                    a(),
                                      l.set(Object(v.a)(6), f),
                                      (function e() {
                                        var t,
                                          n = [],
                                          a = Object(r.a)(l.entries());
                                        try {
                                          var i = function () {
                                            var a = Object(m.a)(t.value, 2),
                                              r = a[0],
                                              i = a[1];
                                            n.push(
                                              Object(O.jsx)(
                                                x,
                                                {
                                                  amount: i,
                                                  onExitAnimationEnd:
                                                    function () {
                                                      l.delete(r), e();
                                                    },
                                                },
                                                r
                                              )
                                            );
                                          };
                                          for (a.s(); !(t = a.n()).done; ) i();
                                        } catch (o) {
                                          a.e(o);
                                        } finally {
                                          a.f();
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
                      a();
                    }
                  },
                  [
                    null === e || void 0 === e ? void 0 : e.balance,
                    null === e || void 0 === e ? void 0 : e.symbol,
                    t,
                  ]
                ),
                l
              );
            })(G, L);
          Object(o.useEffect)(
            function () {
              null !== k &&
                void 0 !== k &&
                k.length &&
                -1 ===
                  k.indexOf(
                    (null === G || void 0 === G ? void 0 : G.symbol) || ""
                  ) &&
                z(k[0]);
            },
            [k, G]
          );
          var U = Object(o.useMemo)(
            function () {
              if (!D.length) return [];
              var e,
                t = k ? new Set(k) : null,
                n = [],
                a = Object(r.a)(D);
              try {
                var i = function () {
                  var a = e.value;
                  if (!(!t || t.has(a.symbol))) return 1;
                  var r = { n: a.name, s: a.symbol, b: Object(s.a)(a.balance) },
                    i = E.replace(/n|s|b/g, function (e) {
                      return r[e];
                    });
                  n.push(
                    Object(O.jsx)(
                      d.a,
                      {
                        value: a.symbol,
                        children: Object(O.jsxs)("div", {
                          className: Object(l.a)(
                            "coinSelect_item",
                            null === _ || void 0 === _ ? void 0 : _.item
                          ),
                          children: [
                            Object(O.jsx)(b.a, {
                              className: "coinSelect_coinImg",
                              coin: a.symbol,
                            }),
                            Object(O.jsx)("span", {
                              className: "coinSelect_balance",
                              children: i,
                            }),
                          ],
                        }),
                      },
                      "".concat(a.name, "_").concat(a.symbol)
                    )
                  );
                };
                for (a.s(); !(e = a.n()).done; ) i();
              } catch (o) {
                a.e(o);
              } finally {
                a.f();
              }
              return n;
            },
            [k, D]
          );
          return Object(O.jsxs)(
            "div",
            Object(a.a)(
              Object(a.a)({}, T),
              {},
              {
                className: Object(l.a)("coinSelect_root", h),
                children: [
                  !t &&
                    Object(O.jsx)("label", {
                      className: Object(l.a)(
                        "coinSelect_label",
                        null === _ || void 0 === _ ? void 0 : _.title
                      ),
                      children: "coin",
                    }),
                  Object(O.jsx)(u.a, {
                    onChange: z,
                    disabled: W,
                    value:
                      (null === G || void 0 === G ? void 0 : G.symbol) || "BTC",
                    className: Object(l.a)("coinSelect_select", y),
                    optionsPosition: P,
                    optionsWidth: F,
                    classes: Object(a.a)(
                      {
                        arrow: Object(l.a)(
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
                    errors: M,
                    frontComponent: I
                      ? Object(O.jsx)(I, { selectedCoin: G })
                      : Object(O.jsxs)("div", {
                          className: Object(l.a)(
                            "coinSelect_selectFront",
                            null === _ || void 0 === _
                              ? void 0
                              : _.frontComponent
                          ),
                          children: [
                            !w &&
                              Object(O.jsxs)(O.Fragment, {
                                children: [
                                  Object(O.jsx)(b.a, {
                                    className: Object(l.a)(
                                      "coinSelect_coinImg",
                                      null === _ || void 0 === _
                                        ? void 0
                                        : _.coinImg
                                    ),
                                    coin:
                                      (null === G || void 0 === G
                                        ? void 0
                                        : G.symbol) || "BTC",
                                  }),
                                  Object(O.jsx)("span", {
                                    className: Object(l.a)(
                                      "coinSelect_coinName",
                                      null === _ || void 0 === _
                                        ? void 0
                                        : _.label
                                    ),
                                    children:
                                      null === G || void 0 === G
                                        ? void 0
                                        : G.name,
                                  }),
                                ],
                              }),
                            Object(O.jsxs)("span", {
                              className: "coinSelect_coinSymbol",
                              children: [
                                "(",
                                (null === R || void 0 === R
                                  ? void 0
                                  : R.symbol) ||
                                  (null === G || void 0 === G
                                    ? void 0
                                    : G.symbol),
                                ")",
                              ],
                            }),
                            C
                              ? null
                              : Object(O.jsxs)("div", {
                                  className: Object(l.a)(
                                    "coinSelect_balance",
                                    null === _ || void 0 === _
                                      ? void 0
                                      : _.label
                                  ),
                                  children: [
                                    L && X,
                                    Object(O.jsx)("span", {
                                      children: Object(s.a)(
                                        (null === G || void 0 === G
                                          ? void 0
                                          : G.balance) || 0
                                      ),
                                    }),
                                  ],
                                }),
                          ],
                        }),
                    optionsCoords: S,
                    children: U,
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
      var a = n(52);
      for (var r in a)
        ["default", "toDecimal"].indexOf(r) < 0 &&
          (function (e) {
            n.d(t, e, function () {
              return a[e];
            });
          })(r);
      var i = n(94);
      n.d(t, "DECIMAL_ZERO", function () {
        return i.a;
      });
      var o = function (e) {
        return new a.Decimal("" === e ? 0 : e);
      };
    },
    81: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return R;
      }),
        n.d(t, "g", function () {
          return L;
        }),
        n.d(t, "j", function () {
          return B;
        }),
        n.d(t, "b", function () {
          return I;
        }),
        n.d(t, "i", function () {
          return T;
        }),
        n.d(t, "d", function () {
          return A;
        }),
        n.d(t, "a", function () {
          return Z;
        }),
        n.d(t, "f", function () {
          return We;
        }),
        n.d(t, "h", function () {
          return Re.a;
        }),
        n.d(t, "c", function () {
          return Be;
        });
      var a,
        r,
        i,
        o,
        l,
        c,
        s,
        u,
        d,
        b,
        p,
        f,
        m,
        j,
        v,
        h,
        O = n(31),
        x = n(16),
        g = n(3),
        _ = n.n(g),
        y = n(34),
        C = n(18),
        w = n(21),
        N = n(20),
        E = n(15),
        k = n(142),
        M = n.n(k),
        P = n(0),
        H = ["className", "active", "children"],
        L = function (e) {
          var t = e.className,
            n = e.active,
            a = e.children,
            r = Object(N.a)(e, H);
          return Object(P.jsx)(
            C.a,
            Object(x.a)(
              Object(x.a)({}, r),
              {},
              {
                className: Object(E.a)(
                  M.a.statisticButton,
                  n && M.a.statisticButton_active,
                  t
                ),
                children: a,
              }
            )
          );
        },
        F = n(143),
        S = n.n(F),
        W = [
          "History",
          "All bets",
          "Your bets",
          "Wagering race",
          "Affiliate battle",
        ],
        R = function (e) {
          var t = e.selectedId,
            n = e.setSelectedId,
            a = e.currentGame,
            r = e.isLogIn,
            i = e.customButtons,
            o = Object(w.m)().fairness,
            l = Object(y.g)();
          return Object(P.jsxs)("div", {
            className: S.a.root,
            children: [
              Object(P.jsx)("div", {
                className: S.a.buttonGroup,
                children: (i || W).map(function (e, i) {
                  return ("crash" !== a && 0 === i) || (!r && 2 === i)
                    ? null
                    : Object(P.jsx)(
                        _.a.Fragment,
                        {
                          children: Object(P.jsx)(L, {
                            onClick: function () {
                              return n(i);
                            },
                            active: t === i,
                            children: e,
                          }),
                        },
                        "button_".concat(e, "_id_").concat(i)
                      );
                }),
              }),
              r &&
                o &&
                Object(P.jsx)(C.a, {
                  className: S.a.fairnessBtn,
                  onClick: function () {
                    var e = l.location,
                      t = new URLSearchParams(e.search);
                    t.set("modal", "fairness"),
                      l.push(
                        Object(x.a)(
                          Object(x.a)({}, e),
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
        B = Object(O.b)(function () {
          return n.e(93).then(n.bind(null, 1460));
        }),
        I = Object(O.b)(function () {
          return n.e(98).then(n.bind(null, 1432));
        }),
        T = Object(O.b)(function () {
          return n.e(121).then(n.bind(null, 1433));
        }),
        A = Object(O.b)(function () {
          return Promise.all([n.e(9), n.e(17), n.e(77)]).then(
            n.bind(null, 1434)
          );
        }),
        Z = Object(O.b)(function () {
          return n.e(115).then(n.bind(null, 1435));
        }),
        D = ["title", "titleId"];
      function V() {
        return (
          (V = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          V.apply(this, arguments)
        );
      }
      function G(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++)
              (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function z(e, t) {
        var n = e.title,
          O = e.titleId,
          x = G(e, D);
        return g.createElement(
          "svg",
          V(
            {
              width: 44,
              height: 33,
              viewBox: "0 0 44 33",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": O,
            },
            x
          ),
          n ? g.createElement("title", { id: O }, n) : null,
          a ||
            (a = g.createElement("path", {
              d: "M43.9373 11.0713L42.6173 14.2534C42.0201 15.6992 41.4151 17.1527 40.818 18.6063L39.1915 22.5349C39.0844 22.8014 38.8403 22.9882 38.5551 23.0221C37.0676 23.1486 35.5792 22.7902 34.3122 22.0006C32.9295 21.0977 31.6537 20.0406 30.5093 18.8499C29.3694 17.6575 28.096 16.6003 26.7143 15.6992C25.8276 15.1552 24.8327 14.8119 23.7992 14.6934L22.9114 12.5484L23.815 10.3798C24.4121 8.92623 25.0171 7.47265 25.6143 6.02692C26.2114 4.58119 26.8243 3.11975 27.4214 1.66616C29.0555 1.40819 30.7277 1.75156 32.1279 2.6326C33.5081 3.53575 34.7813 4.59277 35.9229 5.78334C37.0673 6.97409 38.3431 8.0311 39.7258 8.93409C40.7885 9.58869 42.006 9.94932 43.2537 9.9791C43.5101 9.99201 43.744 10.1294 43.8802 10.347C44.0164 10.5646 44.0377 10.835 43.9373 11.0713Z",
              fill: "white",
            })),
          r ||
            (r = g.createElement("path", {
              d: "M30.3208 6.98521C29.7237 8.4388 29.1213 9.89238 28.5137 11.346C27.1164 10.4649 25.4466 10.1215 23.8151 10.3795C24.4122 8.92595 25.0172 7.47236 25.6144 6.02663C27.2475 5.76633 28.9196 6.1069 30.3208 6.98521Z",
              fill: "#141536",
            })),
          i ||
            (i = g.createElement("path", {
              d: "M35.923 5.78307C35.3259 7.23666 34.7208 8.68238 34.1158 10.136C32.9759 8.94357 31.7025 7.88636 30.3208 6.98522C30.9258 5.5395 31.523 4.08591 32.128 2.63232C33.5082 3.53548 34.7814 4.5925 35.923 5.78307Z",
              fill: "#141536",
            })),
          o ||
            (o = g.createElement("path", {
              d: "M32.3166 14.4891C31.7115 15.9427 31.1144 17.3963 30.5094 18.8498C29.3695 17.6574 28.0961 16.6002 26.7144 15.6991C27.3115 14.2455 27.9165 12.7919 28.5137 11.3462C29.8981 12.2439 31.1742 13.2985 32.3166 14.4891Z",
              fill: "#141536",
            })),
          l ||
            (l = g.createElement("path", {
              d: "M37.9187 13.287C37.3137 14.7406 36.7166 16.1863 36.1116 17.6399C34.7295 16.7392 33.4561 15.6819 32.3165 14.4891C32.9137 13.0434 33.5187 11.5898 34.1158 10.1362C35.2602 11.327 36.536 12.384 37.9187 13.287Z",
              fill: "#141536",
            })),
          c ||
            (c = g.createElement("path", {
              d: "M43.9373 11.0712L42.6173 14.2534C40.9858 14.5107 39.3163 14.1673 37.9187 13.287L39.7259 8.93408C40.7885 9.58868 42.006 9.94931 43.2538 9.97909C43.5101 9.992 43.7441 10.1293 43.8803 10.347C44.0165 10.5646 44.0378 10.835 43.9373 11.0712Z",
              fill: "#141536",
            })),
          s ||
            (s = g.createElement("path", {
              d: "M40.818 18.6061L39.1916 22.5347C39.0844 22.8012 38.8404 22.988 38.5552 23.0218C37.0677 23.1483 35.5792 22.79 34.3123 22.0004L36.1116 17.6396C37.5118 18.5207 39.184 18.8641 40.818 18.6061Z",
              fill: "#141536",
            })),
          u ||
            (u = g.createElement("path", {
              d: "M28.1208 1.57165C28.1215 1.77988 28.0787 1.98596 27.995 2.17666C27.4686 3.45738 26.9343 4.74597 26.4 6.02669C25.8029 7.47242 25.1979 8.92601 24.6007 10.3796L23.6971 12.5482L22 16.6575L15.9735 31.2091C15.6415 32.0119 14.7216 32.3936 13.9188 32.0616C13.116 31.7296 12.7344 30.8097 13.0663 30.0069L19.415 14.6932V14.6854L20.3028 12.556V12.5482L22 8.44672L25.0957 0.974502C25.3809 0.280222 26.1173 -0.115454 26.8536 0.0299064C27.59 0.175266 28.1208 0.821077 28.1208 1.57165Z",
              fill: "#141536",
            })),
          d ||
            (d = g.createElement("path", {
              d: "M21.9921 14.7327C20.3581 14.4747 18.6859 14.8181 17.2857 15.6992C15.9039 16.6003 14.6305 17.6575 13.4906 18.8499C12.3463 20.0406 11.0705 21.0977 9.68774 22.0006C8.42079 22.7902 6.93232 23.1486 5.44484 23.0221C5.1596 22.9882 4.91555 22.8014 4.8084 22.5349L3.18196 18.6063C2.58481 17.1527 1.9798 15.6992 1.38265 14.2534L0.0626412 11.0713C-0.0378042 10.835 -0.0164995 10.5646 0.119702 10.347C0.255904 10.1294 0.489824 9.99201 0.746219 9.9791C1.99397 9.94932 3.21144 9.58869 4.27411 8.93409C5.65686 8.0311 6.93266 6.97409 8.07701 5.78334C9.21863 4.59277 10.4918 3.53575 11.872 2.6326C13.2722 1.75156 14.9444 1.40819 16.5785 1.66616C17.1757 3.11975 17.7781 4.57333 18.3857 6.02692C18.9828 7.47265 19.5878 8.92623 20.185 10.3798C20.7821 11.8334 21.3871 13.2791 21.9921 14.7327Z",
              fill: "white",
            })),
          b ||
            (b = g.createElement("path", {
              d: "M20.185 10.3795C18.5534 10.1215 16.8836 10.4649 15.4864 11.346C14.8814 9.89238 14.279 8.4388 13.6792 6.98521C15.0804 6.1069 16.7525 5.76633 18.3857 6.02663C18.9828 7.47236 19.5878 8.92595 20.185 10.3795Z",
              fill: "#141536",
            })),
          p ||
            (p = g.createElement("path", {
              d: "M13.6792 6.98522C12.2975 7.88636 11.0241 8.94357 9.88419 10.136C9.27918 8.68238 8.67418 7.23666 8.07703 5.78307C9.21865 4.5925 10.4918 3.53548 11.8721 2.63232C12.4771 4.08591 13.0742 5.5395 13.6792 6.98522Z",
              fill: "#141536",
            })),
          f ||
            (f = g.createElement("path", {
              d: "M17.2857 15.6991C15.9039 16.6002 14.6305 17.6574 13.4906 18.8498C12.8856 17.3963 12.2885 15.9427 11.6835 14.4891C12.8259 13.2985 14.102 12.2439 15.4864 11.3462C16.0835 12.7919 16.6885 14.2455 17.2857 15.6991Z",
              fill: "#141536",
            })),
          m ||
            (m = g.createElement("path", {
              d: "M11.6835 14.4891C10.5439 15.6819 9.2705 16.7392 7.88846 17.6399C7.28345 16.1863 6.6863 14.7406 6.0813 13.287C7.46405 12.384 8.73985 11.327 9.88419 10.1362C10.4813 11.5898 11.0863 13.0434 11.6835 14.4891Z",
              fill: "#141536",
            })),
          j ||
            (j = g.createElement("path", {
              d: "M6.08127 13.287C4.68369 14.1673 3.01421 14.5107 1.38265 14.2534L0.0626412 11.0712C-0.0378042 10.835 -0.0164995 10.5646 0.119702 10.347C0.255904 10.1293 0.489824 9.992 0.746219 9.97909C1.99397 9.94931 3.21144 9.58868 4.27411 8.93408L6.08127 13.287Z",
              fill: "#141536",
            })),
          v ||
            (v = g.createElement("path", {
              d: "M9.68779 22.0004C8.42084 22.79 6.93237 23.1483 5.44489 23.0218C5.15964 22.988 4.9156 22.8012 4.80845 22.5347L3.18201 18.6061C4.81609 18.8641 6.48828 18.5207 7.88848 17.6396L9.68779 22.0004Z",
              fill: "#141536",
            })),
          h ||
            (h = g.createElement("path", {
              d: "M30.0851 32.0577C29.6997 32.219 29.2659 32.2201 28.8796 32.0609C28.4933 31.9017 28.1864 31.5951 28.0265 31.2091L22.0001 16.6575L21.2065 14.7325L20.3029 12.556V12.5482L19.3993 10.3796L17.6 6.02669L16.005 2.17666C15.9214 1.98596 15.8785 1.77988 15.8793 1.57165C15.8793 0.821077 16.41 0.175266 17.1464 0.0299064C17.8828 -0.115454 18.6191 0.280222 18.9043 0.974502L22.0001 8.44672L23.6972 12.5482L24.5851 14.6932L30.9337 30.0069C31.2644 30.8076 30.8849 31.7248 30.0851 32.0577Z",
              fill: "#141536",
            }))
        );
      }
      var X,
        U,
        Y = g.forwardRef(z),
        J = (n.p, n(144)),
        q = n.n(J),
        K = function (e) {
          var t = e.text,
            n = e.title,
            a = e.icon,
            r = e.classes;
          return Object(P.jsxs)("div", {
            className: Object(E.a)(
              q.a.wageringWrapper,
              null === r || void 0 === r ? void 0 : r.messageCard
            ),
            children: [
              a && Object(P.jsx)(Y, {}),
              n && Object(P.jsx)("div", { className: q.a.title, children: n }),
              Object(P.jsx)("div", { className: q.a.description, children: t }),
            ],
          });
        },
        Q = n(145),
        $ = n.n(Q),
        ee = function (e) {
          var t = e.title,
            n = e.children;
          return Object(P.jsxs)("div", {
            className: $.a.gameCardWrapper,
            children: [
              Object(P.jsx)("div", { className: $.a.title, children: t }),
              Object(P.jsx)("div", { className: $.a.dataWrapper, children: n }),
            ],
          });
        },
        te = n(179),
        ne = n(146),
        ae = n.n(ne),
        re = function (e) {
          var t = [
            { value: e.days, name: "DAYS" },
            { value: e.hours, name: "HOURS" },
            { value: e.minutes, name: "MIN" },
            { value: e.seconds, name: "SEC" },
          ];
          return Object(P.jsx)("div", {
            className: ae.a.root,
            children: t.map(function (e) {
              var t = e.value,
                n = e.name;
              return t <= 0 && "DAYS" === n
                ? null
                : Object(P.jsxs)(
                    g.Fragment,
                    {
                      children: [
                        Object(P.jsx)("span", { children: " ".concat(t, " ") }),
                        n,
                      ],
                    },
                    n
                  );
            }),
          });
        },
        ie = function (e) {
          var t = e.time;
          return t
            ? Object(P.jsx)(te.a, { overtime: !0, date: t, renderer: re })
            : Object(P.jsx)("span", { children: "processing..." });
        },
        oe = n(17),
        le = ["title", "titleId"];
      function ce() {
        return (
          (ce = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          ce.apply(this, arguments)
        );
      }
      function se(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++)
              (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function ue(e, t) {
        var n = e.title,
          a = e.titleId,
          r = se(e, le);
        return g.createElement(
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
              "aria-labelledby": a,
            },
            r
          ),
          n ? g.createElement("title", { id: a }, n) : null,
          X ||
            (X = g.createElement(
              "defs",
              null,
              g.createElement("circle", {
                id: "threePlaceCircle-2",
                cx: 16.9673077,
                cy: 14.6534188,
                r: 14.6534188,
              }),
              g.createElement("path", {
                d: "M5.09636752,0.0508547009 L0.0544871795,8.79059829 L5.93910256,8.47820513 L8.61260684,13.7307692 L13.2767094,5.64487179 C9.93482906,4.78034188 7.06517094,2.76794872 5.09636752,0.0508547009 Z",
                id: "threePlace-3",
              }),
              g.createElement("path", {
                d: "M28.8673077,0.00726495726 C26.9130342,2.73162393 24.0433761,4.75128205 20.7087607,5.63034188 L25.3873932,13.7307692 L28.0608974,8.47820513 L33.9455128,8.79059829 L28.8673077,0.00726495726 Z",
                id: "threePlaceCircle-4",
              })
            )),
          U ||
            (U = g.createElement(
              "g",
              {
                stroke: "none",
                strokeWidth: 1,
                fill: "none",
                fillRule: "evenodd",
              },
              g.createElement(
                "g",
                { transform: "translate(-584.000000, -893.000000)" },
                g.createElement(
                  "g",
                  { transform: "translate(33.000000, 41.000000)" },
                  g.createElement(
                    "g",
                    { transform: "translate(3.000000, 829.000000)" },
                    g.createElement(
                      "g",
                      { transform: "translate(522.000000, 0.000000)" },
                      g.createElement(
                        "g",
                        { transform: "translate(26.000000, 23.000000)" },
                        g.createElement(
                          "g",
                          { fillRule: "nonzero" },
                          g.createElement("use", {
                            fill: "#E4A060",
                            xlinkHref: "#threePlaceCircle-2",
                          }),
                          g.createElement("use", {
                            fillOpacity: 1,
                            xlinkHref: "#threePlaceCircle-2",
                          })
                        ),
                        g.createElement(
                          "g",
                          {
                            transform: "translate(0.000000, 23.175214)",
                            fillRule: "nonzero",
                          },
                          g.createElement(
                            "g",
                            null,
                            g.createElement("use", {
                              fill: "#EB9961",
                              xlinkHref: "#threePlace-3",
                            }),
                            g.createElement("use", {
                              xlinkHref: "#threePlace-3",
                            })
                          ),
                          g.createElement(
                            "g",
                            null,
                            g.createElement("use", {
                              fill: "#EB9961",
                              xlinkHref: "#threePlaceCircle-4",
                            }),
                            g.createElement("use", {
                              xlinkHref: "#threePlaceCircle-4",
                            })
                          )
                        ),
                        g.createElement("circle", {
                          fill: "#FFFFFF",
                          fillRule: "nonzero",
                          cx: 16.9673077,
                          cy: 14.6534188,
                          r: 10.6213675,
                        }),
                        g.createElement(
                          "text",
                          {
                            fontFamily: "Gilroy-Extrabold, Gilroy",
                            fontSize: 13,
                            fontWeight: 600,
                            fill: "#E2854A",
                          },
                          g.createElement(
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
        pe = g.forwardRef(ue),
        fe = (n.p, ["title", "titleId"]);
      function me() {
        return (
          (me = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          me.apply(this, arguments)
        );
      }
      function je(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++)
              (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function ve(e, t) {
        var n = e.title,
          a = e.titleId,
          r = je(e, fe);
        return g.createElement(
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
              "aria-labelledby": a,
            },
            r
          ),
          n ? g.createElement("title", { id: a }, n) : null,
          de ||
            (de = g.createElement(
              "defs",
              null,
              g.createElement(
                "linearGradient",
                {
                  x1: "50%",
                  y1: "0%",
                  x2: "50%",
                  y2: "100%",
                  id: "secondPlaceGradient",
                },
                g.createElement("stop", { stopColor: "#E2E2E2", offset: "0%" }),
                g.createElement("stop", {
                  stopColor: "#C0C0C0",
                  offset: "100%",
                })
              )
            )),
          be ||
            (be = g.createElement(
              "g",
              {
                stroke: "none",
                strokeWidth: 1,
                fill: "none",
                fillRule: "evenodd",
              },
              g.createElement(
                "g",
                { transform: "translate(-323.000000, -893.000000)" },
                g.createElement(
                  "g",
                  { transform: "translate(33.000000, 41.000000)" },
                  g.createElement(
                    "g",
                    { transform: "translate(3.000000, 829.000000)" },
                    g.createElement(
                      "g",
                      { transform: "translate(261.000000, 0.000000)" },
                      g.createElement(
                        "g",
                        { transform: "translate(26.000000, 23.000000)" },
                        g.createElement("circle", {
                          fill: "url(#secondPlaceGradient)",
                          fillRule: "nonzero",
                          cx: 16.9673077,
                          cy: 14.6534188,
                          r: 14.6534188,
                        }),
                        g.createElement(
                          "g",
                          {
                            transform: "translate(0.000000, 23.175214)",
                            fill: "#C9C9C9",
                            fillRule: "nonzero",
                          },
                          g.createElement("path", {
                            d: "M5.09636752,0.0508547009 L0.0544871795,8.79059829 L5.93910256,8.47820513 L8.61260684,13.7307692 L13.2767094,5.64487179 C9.93482906,4.78034188 7.06517094,2.76794872 5.09636752,0.0508547009 Z",
                          }),
                          g.createElement("path", {
                            d: "M28.8673077,0.00726495726 C26.9130342,2.73162393 24.0433761,4.75128205 20.7087607,5.63034188 L25.3873932,13.7307692 L28.0608974,8.47820513 L33.9455128,8.79059829 L28.8673077,0.00726495726 Z",
                          })
                        ),
                        g.createElement("circle", {
                          fill: "#FFFFFF",
                          fillRule: "nonzero",
                          cx: 16.9673077,
                          cy: 14.6534188,
                          r: 10.6213675,
                        }),
                        g.createElement(
                          "text",
                          {
                            fontFamily: "Gilroy-Extrabold, Gilroy",
                            fontSize: 13,
                            fontWeight: 600,
                            fill: "#9C9C9C",
                          },
                          g.createElement(
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
      var he,
        Oe,
        xe = g.forwardRef(ve),
        ge = (n.p, ["title", "titleId"]);
      function _e() {
        return (
          (_e = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          _e.apply(this, arguments)
        );
      }
      function ye(e, t) {
        if (null == e) return {};
        var n,
          a,
          r = (function (e, t) {
            if (null == e) return {};
            var n,
              a,
              r = {},
              i = Object.keys(e);
            for (a = 0; a < i.length; a++)
              (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (a = 0; a < i.length; a++)
            (n = i[a]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      function Ce(e, t) {
        var n = e.title,
          a = e.titleId,
          r = ye(e, ge);
        return g.createElement(
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
              "aria-labelledby": a,
            },
            r
          ),
          n ? g.createElement("title", { id: a }, n) : null,
          he ||
            (he = g.createElement(
              "defs",
              null,
              g.createElement("circle", {
                id: "firstPlaceCircle",
                cx: 16.9673077,
                cy: 14.6534188,
                r: 14.6534188,
              })
            )),
          Oe ||
            (Oe = g.createElement(
              "g",
              { transform: "translate(-62.000000, -893.000000)" },
              g.createElement(
                "g",
                { transform: "translate(33.000000, 41.000000)" },
                g.createElement(
                  "g",
                  { transform: "translate(3.000000, 829.000000)" },
                  g.createElement(
                    "g",
                    { transform: "translate(26.000000, 23.000000)" },
                    g.createElement(
                      "g",
                      { fillRule: "nonzero" },
                      g.createElement("use", {
                        fill: "#FFAE00",
                        xlinkHref: "#firstPlaceCircle",
                      }),
                      g.createElement("use", {
                        xlinkHref: "#firstPlaceCircle",
                        fill: "rgb(255, 174, 0)",
                      })
                    ),
                    g.createElement(
                      "g",
                      {
                        transform: "translate(0.000000, 23.175214)",
                        fill: "#FFA200",
                        fillRule: "nonzero",
                      },
                      g.createElement("path", {
                        d: "M5.09636752,0.0508547009 L0.0544871795,8.79059829 L5.93910256,8.47820513 L8.61260684,13.7307692 L13.2767094,5.64487179 C9.93482906,4.78034188 7.06517094,2.76794872 5.09636752,0.0508547009 Z",
                      }),
                      g.createElement("path", {
                        d: "M28.8673077,0.00726495726 C26.9130342,2.73162393 24.0433761,4.75128205 20.7087607,5.63034188 L25.3873932,13.7307692 L28.0608974,8.47820513 L33.9455128,8.79059829 L28.8673077,0.00726495726 Z",
                      })
                    ),
                    g.createElement("circle", {
                      fill: "#FFFFFF",
                      fillRule: "nonzero",
                      cx: 16.9673077,
                      cy: 14.6534188,
                      r: 10.6213675,
                    }),
                    g.createElement(
                      "text",
                      {
                        id: 1,
                        fontFamily: "Gilroy-Extrabold, Gilroy",
                        fontSize: 13,
                        fontWeight: 600,
                        fill: "#FFA200",
                      },
                      g.createElement(
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
      var we = g.forwardRef(Ce),
        Ne = (n.p, n(29)),
        Ee = n(124),
        ke = n(83),
        Me = n(50),
        Pe = n(53),
        He = n(147),
        Le = n.n(He),
        Fe = [we, xe, pe],
        Se = [
          {
            field: "rank",
            headerName: "Rank",
            valueRender: function (e) {
              var t = Number(e) - 1;
              if (Fe[t]) {
                var n = Fe[t];
                return Object(P.jsx)("span", {
                  className: Le.a.medalWrapper,
                  children: Object(P.jsx)(n, { className: Le.a.medal }),
                });
              }
              return Object(P.jsx)("span", {
                className: Le.a.medalWrapper,
                children: e,
              });
            },
          },
          { field: "user", headerName: "Player" },
          {
            field: "reward",
            headerName: "Reward",
            valueRender: function (e, t) {
              return Object(P.jsx)("span", {
                className: Object(E.a)(Le.a.amount, Le.a.valueElement),
                children: !t && e,
              });
            },
          },
          {
            field: "total",
            headerName: "Total Wagered",
            valueRender: function (e, t) {
              return Object(P.jsx)("span", {
                className: Object(E.a)(Le.a.amount, Le.a.valueElement),
                children: !t && e,
              });
            },
          },
        ],
        We = function (e) {
          var t = e.explanation,
            n = e.type,
            a = e.title,
            r = e.timeStamp,
            i = e.money,
            o = e.withIcon,
            l = e.tableData,
            c = e.classes,
            s = e.loading,
            u = e.showMoreButton,
            d = Object(g.useState)(!1),
            b = Object(oe.a)(d, 2),
            p = b[0],
            f = b[1],
            m = function () {
              f(
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
              );
            },
            j = Object(Ne.a)("/games/get-previous-".concat(n), {
              method: "POST",
              transformResponse: function (e) {
                var t,
                  n = JSON.parse(e);
                return {
                  page: n.leaderboard.current_page,
                  totalPages: n.leaderboard.total_pages,
                  endTime: ""
                    .concat(
                      Object(Ee.a)(
                        "ddS",
                        new Date(1e3 * n.leaderboard.contest_data.end_time)
                      ),
                      " "
                    )
                    .concat(
                      Object(Ee.a)(
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
            v = Object(oe.a)(j, 2),
            h = v[0],
            O = v[1],
            x = O.data,
            _ = O.isLoading,
            y = function () {
              h({
                data: {
                  page:
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 1,
                },
              });
            };
          return (
            Object(g.useEffect)(
              function () {
                p && y(null === x || void 0 === x ? void 0 : x.page);
              },
              [p]
            ),
            Object(P.jsxs)(P.Fragment, {
              children: [
                Object(P.jsxs)("div", {
                  className: Le.a.infoWrapper,
                  children: [
                    Object(P.jsxs)("div", {
                      className: Le.a.firstColumn,
                      children: [
                        Object(P.jsx)(K, {
                          title: a,
                          text: t,
                          icon: o,
                          classes: c,
                        }),
                        Object(P.jsx)(ee, {
                          title: "Contest ends in",
                          children: Object(P.jsx)(ie, { time: r }),
                        }),
                        i
                          ? Object(P.jsxs)(ee, {
                              title: i.title || "Total amount wagered",
                              children: [
                                Object(P.jsx)("span", {
                                  className: Le.a.amount,
                                  children: i.amount,
                                }),
                                " ",
                                i.coinSymbol,
                              ],
                            })
                          : null,
                        Object(P.jsx)(C.a, {
                          onClick: function () {
                            return m(!0);
                          },
                          className: Le.a.previousButton,
                          children: "Previous Round",
                        }),
                      ],
                    }),
                    Object(P.jsxs)("div", {
                      className: Le.a.secondColumn,
                      children: [
                        Object(P.jsxs)("div", {
                          className: Le.a.titleWrapper,
                          children: [
                            Object(P.jsx)("h1", {
                              className: Le.a.tableTitle,
                              children: "Current Ranking",
                            }),
                            u &&
                              Object(P.jsx)(C.a, {
                                onClick: u.setIsOpen,
                                className: Le.a.showMoreButton,
                                children: u.isOpen ? "Show Less" : "Show More",
                              }),
                          ],
                        }),
                        Object(P.jsx)("div", {
                          className: Le.a.tableWrapper,
                          children: Object(P.jsx)(Re.a, {
                            grid: "minmax(30px, 100px) minmax(70px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr)",
                            classes: {
                              header: Object(E.a)(
                                Le.a.tableHeader,
                                null === c || void 0 === c ? void 0 : c.header
                              ),
                              row: Object(E.a)(
                                Le.a.row,
                                null === c || void 0 === c ? void 0 : c.row
                              ),
                              global: Le.a.table,
                            },
                            columns: Se,
                            values: l,
                            loading: s,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                Object(P.jsxs)(Me.a, {
                  isOpen: p,
                  onClose: function () {
                    return m(!1);
                  },
                  classes: { dialog: Le.a.dialog },
                  withCloseIcon: !0,
                  children: [
                    Object(P.jsx)("span", {
                      className: Le.a.modalTitle,
                      children: "Previous Round",
                    }),
                    Object(P.jsxs)("span", {
                      className: Le.a.modalDate,
                      children: [
                        "Date: ",
                        null === x || void 0 === x ? void 0 : x.endTime,
                      ],
                    }),
                    Object(P.jsx)("div", {
                      className: Le.a.modalTableWrapper,
                      children: Object(P.jsx)(Re.a, {
                        grid: "minmax(30px, 100px) minmax(70px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr)",
                        classes: {
                          header: Object(E.a)(
                            Le.a.tableHeader,
                            null === c || void 0 === c ? void 0 : c.header
                          ),
                          row: Object(E.a)(
                            Le.a.row,
                            null === c || void 0 === c ? void 0 : c.row
                          ),
                          global: Le.a.table,
                        },
                        columns: Se,
                        values:
                          (null === x || void 0 === x ? void 0 : x.list) || [],
                        loading: _,
                      }),
                    }),
                    Object(P.jsx)(Pe.c, {
                      loading: _,
                      page: (null === x || void 0 === x ? void 0 : x.page) || 1,
                      pageAmount:
                        (null === x || void 0 === x ? void 0 : x.totalPages) ||
                        1,
                      setPage: y,
                    }),
                  ],
                }),
              ],
            })
          );
        },
        Re = n(91),
        Be = Object(O.b)(function () {
          return n.e(82).then(n.bind(null, 1458));
        });
    },
    83: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a = function (e) {
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
      var a = n(16),
        r = n(17),
        i = n(3),
        o = n(127),
        l = n(21),
        c = n(140),
        s = n(81),
        u = n(149),
        d = n.n(u),
        b = n(0),
        p = Object(i.createContext)({ openBetInfoModal: function () {} }),
        f = function () {
          return Object(i.useContext)(p);
        },
        m = function () {
          var e = Object(i.useState)(1),
            t = Object(r.a)(e, 2),
            n = t[0],
            u = t[1],
            f = Object(o.a)(),
            m = Object(l.i)().user,
            j = Object(i.useState)({ isOpen: !1, betId: 0, game: "" }),
            v = Object(r.a)(j, 2),
            h = v[0],
            O = v[1];
          return Object(b.jsxs)("div", {
            className: d.a.gameStatisticWrapper,
            children: [
              Object(b.jsxs)(p.Provider, {
                value: {
                  openBetInfoModal: function (e, t) {
                    O(function (n) {
                      return Object(a.a)(
                        Object(a.a)({}, n),
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
                  Object(b.jsx)(s.e, {
                    selectedId: n,
                    setSelectedId: u,
                    currentGame: f,
                    isLogIn: !!m,
                  }),
                  Object(b.jsxs)(c.a, {
                    index: n,
                    children: [
                      "crash" === f
                        ? Object(b.jsx)(s.d, {})
                        : Object(b.jsx)(i.Fragment, {}),
                      Object(b.jsx)(s.b, { displayed: 1 === n }),
                      m
                        ? Object(b.jsx)(s.j, { displayed: 2 === n })
                        : Object(b.jsx)(i.Fragment, {}),
                      Object(b.jsx)(s.i, {}),
                      Object(b.jsx)(s.a, {}),
                    ],
                  }),
                ],
              }),
              Object(b.jsx)(
                s.c,
                Object(a.a)(
                  Object(a.a)({}, h),
                  {},
                  {
                    onClose: function () {
                      O(function (e) {
                        return Object(a.a)(
                          Object(a.a)({}, e),
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
        return i;
      }),
        n.d(t, "b", function () {
          return c;
        });
      var a = n(77),
        r = n(23),
        i = function (e, t, n) {
          var i = Object(a.toDecimal)(e)
            .mul(t)
            .minus(e)
            .toDecimalPlaces(r.a, 1);
          return n ? i.toFixed(i.decimalPlaces()) : i;
        },
        o = n(715),
        l = n(1415),
        c = function (e, t) {
          return Object(o.a)(e).pipe(Object(l.a)(t)).subscribe(t);
        };
    },
    91: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var a = n(16),
        r = n(20),
        i = n(3),
        o = n(15),
        l = n(135),
        c = n(26),
        s = n(84),
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
            j = e.isOpenBetModalOnClick,
            v = Object(r.a)(e, p),
            h = Object(i.useMemo)(
              function () {
                var e = f || "repeat(".concat(t.length, ", 1fr)");
                return {
                  header: { gridTemplateColumns: e },
                  row: { gridTemplateColumns: e },
                };
              },
              [t, f]
            ),
            O = (Object(s.b)() || {}).openBetInfoModal;
          return Object(b.jsx)(
            l.a,
            Object(a.a)(
              Object(a.a)({}, v),
              {},
              {
                loading: m,
                classes: Object(a.a)(
                  Object(a.a)({}, u),
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
                styles: h,
                columns: t.map(function (e) {
                  return Object(a.a)(
                    Object(a.a)({}, e),
                    {},
                    {
                      valueRender:
                        e.valueRender ||
                        ((t = e.highlightWinValue),
                        (n = e.coinRender),
                        (r = j ? O : void 0),
                        function (e, a, i) {
                          return a
                            ? Object(b.jsx)(b.Fragment, {})
                            : Object(b.jsx)("span", {
                                className: Object(o.a)(
                                  d.a.cell,
                                  t && i
                                    ? Number(i.profit) < 0
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
                                      i.id ||
                                        (null === (e = i.bet) || void 0 === e
                                          ? void 0
                                          : e.id)
                                    );
                                  },
                                children:
                                  i && n
                                    ? Object(b.jsxs)(b.Fragment, {
                                        children: [
                                          Object(b.jsx)("span", {
                                            className: d.a.coinCell,
                                            children: e,
                                          }),
                                          Object(b.jsx)(c.a, {
                                            coin: i.coin.symbol,
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
    97: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var a = n(10),
        r = n(0),
        i = function () {
          return Object(r.jsx)(a.LoaderWithLogo, { transparent: !0 });
        };
    },
  },
]);
//# sourceMappingURL=34.4c9d42f6.chunk.js.map
