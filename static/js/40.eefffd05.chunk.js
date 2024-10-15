(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [40, 188],
  {
    10: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(312);
      n.d(t, "LoaderWithLogo", function () {
        return a.LoaderWithLogo;
      });
    },
    100: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var a = n(1467),
        r = n(1468),
        i = n(412),
        c = Object(a.a)(window, "resize").pipe(
          Object(r.a)(500),
          Object(i.a)(function (e) {
            var t, n;
            return {
              width:
                null === (t = e.target) || void 0 === t ? void 0 : t.innerWidth,
              height:
                null === (n = e.target) || void 0 === n
                  ? void 0
                  : n.innerHeight,
            };
          })
        );
    },
    12: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "isInIFrame", function () {
          return a;
        });
      var a = function () {
        return window.location !== window.parent.location;
      };
    },
    120: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a = function (e, t) {
        "function" === typeof t ? t(e) : t && (t.current = e);
      };
    },
    124: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return O;
      });
      var a = n(30),
        r = function (e) {
          return String(e).length < 2 ? "0" + e : e;
        },
        i = {
          0: { full: "January", short: "Jan" },
          1: { full: "February", short: "Feb" },
          2: { full: "March", short: "Mar" },
          3: { full: "April", short: "Apr" },
          4: { full: "May", short: "May" },
          5: { full: "June", short: "Jun" },
          6: { full: "July", short: "Jul" },
          7: { full: "August", short: "Aug" },
          8: { full: "September", short: "Sep" },
          9: { full: "October", short: "Oct" },
          10: { full: "November", short: "Nov" },
          11: { full: "December", short: "Dec" },
        },
        c = {
          0: { full: "Sunday", short: "Sun" },
          1: { full: "Monday", short: "Mon" },
          2: { full: "Tuesday", short: "Tue" },
          3: { full: "Wednesday", short: "Wed" },
          4: { full: "Thursday", short: "Thu" },
          5: { full: "Friday", short: "Fri" },
          6: { full: "Saturday", short: "Sat" },
        },
        o = function (e, t) {
          var n = t.getFullYear();
          return "yyyy" === e ? String(n) : String(n).slice(2);
        },
        u = function (e) {
          return "yy" === e || "yyyy" === e;
        },
        s = function (e, t) {
          var n = t.getMonth();
          if ("mmmm" === e) return i[n].full;
          if ("mmm" === e) return i[n].short;
          var a = String(n + 1);
          return r(a);
        },
        l = function (e) {
          return "mm" === e || "mmm" === e || "mmmm" === e;
        },
        d = function (e, t) {
          var n = t.getDay();
          if ("dddd" === e) return c[n].full;
          if ("ddd" === e) return c[n].short;
          var a = String(t.getDate());
          return "dd" === e ? r(a) : a;
        },
        b = function (e, t) {
          var n = t.getHours();
          if ("HH" === e) return r(n);
          var a = n > 12 ? n - 12 : n;
          return "h" === e ? a : r(a);
        },
        f = function (e) {
          return "hh" === e || "h" === e || "HH" === e;
        },
        m = function (e) {
          var t = e % 100;
          if (t >= 11 && t <= 13) return "th";
          switch (e % 10) {
            case 1:
              return "st";
            case 2:
              return "nd";
            case 3:
              return "rd";
            default:
              return "th";
          }
        },
        h = function (e, t) {
          return t.getHours() <= 12
            ? "tt" === e
              ? "am"
              : "a"
            : "tt" === e
            ? "pm"
            : "p";
        },
        p = function (e) {
          return "tt" === e || "t" === e;
        },
        O = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "yyyy-mm-dd",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : new Date(),
            n = e.match(
              /(y{2,}|m{2,}|d{1,}|h{1,}|H{2,}|M{2,}|s{2,}|l{1,}|S{1,}|t{1,})|([^ymdhHMsSlt]+)/g
            ),
            i = new Date(t),
            c = "";
          if (null === n) return c;
          var O,
            j,
            g = Object(a.a)(n);
          try {
            for (g.s(); !(O = g.n()).done; ) {
              var v = O.value;
              switch (v) {
                case "MM":
                  c += r(String(i.getMinutes()));
                  break;
                case "ss":
                  c += r(String(i.getSeconds()));
                  break;
                case "l":
                  c += String(i.getMilliseconds());
                  break;
                case "S":
                  c += m(i.getDate());
                  break;
                default:
                  "d" === (j = v) || "dd" === j || "ddd" === j || "dddd" === j
                    ? (c += d(v, i))
                    : l(v)
                    ? (c += s(v, i))
                    : u(v)
                    ? (c += o(v, i))
                    : f(v)
                    ? (c += b(v, i))
                    : p(v)
                    ? (c += h(v, i))
                    : (c += v);
              }
            }
          } catch (y) {
            g.e(y);
          } finally {
            g.f();
          }
          return c;
        };
    },
    130: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      });
      var a = n(16),
        r = n(20),
        i = n(24),
        c = n(25),
        o = n(408),
        u = n(717),
        s = n(412),
        l = n(547),
        d = n(419),
        b = ["timeOut"],
        f = (function (e) {
          return (e.CHANGE = "change"), (e.REMOVE = "remove"), e;
        })(f || {}),
        m = new ((function () {
          function e() {
            Object(i.a)(this, e),
              (this.notifier = void 0),
              (this.notificationsStorage = void 0),
              (this.removingNotifications = void 0),
              (this.timeouts = {}),
              (this.warning = this.createNotificationEvent(l.a.WARNING)),
              (this.success = this.createNotificationEvent(l.a.SUCCESS)),
              (this.error = this.createNotificationEvent(l.a.ERROR)),
              (this.info = this.createNotificationEvent(l.a.INFO)),
              (this.notifier = new o.b()),
              (this.notificationsStorage = new Map()),
              (this.removingNotifications = new Set());
          }
          return (
            Object(c.a)(e, [
              {
                key: "isRemovingNotification",
                value: function (e) {
                  return this.removingNotifications.has(e);
                },
              },
              {
                key: "stop",
                value: function (e) {
                  var t = this.timeouts[e];
                  t && (clearTimeout(t), delete this.timeouts[e]);
                },
              },
              {
                key: "play",
                value: function (e, t) {
                  var n = this,
                    a = setTimeout(function () {
                      n.deleteNotificationRequest(e);
                    }, t);
                  this.timeouts[e] = a;
                },
              },
              {
                key: "createNotificationEvent",
                value: function (e) {
                  var t = this;
                  return function (n) {
                    return (
                      Array.isArray(n) && (n = n[0]),
                      t.createNotification(
                        "string" === typeof n ? { message: n } : n,
                        e
                      )
                    );
                  };
                },
              },
              {
                key: "createNotification",
                value: function (e, t) {
                  var n = e.timeOut,
                    i = void 0 === n ? 3500 : n,
                    c = Object(r.a)(e, b),
                    o = new d.a(
                      Object(a.a)(
                        Object(a.a)({}, c),
                        {},
                        { manager: this, type: t, timeOut: i }
                      )
                    );
                  return (
                    this.notificationsStorage.set(o.id, o),
                    this.raiseChangeEvent(),
                    o.timeOut &&
                      o.timeOut !== 1 / 0 &&
                      this.play(o.id, o.timeOut),
                    o
                  );
                },
              },
              {
                key: "deleteNotification",
                value: function (e) {
                  this.notificationsStorage.has(e) &&
                    (this.removingNotifications.delete(e),
                    this.notificationsStorage.delete(e),
                    this.raiseChangeEvent());
                },
              },
              {
                key: "deleteNotificationRequest",
                value: function (e) {
                  this.removingNotifications.add(e), this.raiseRemoveEvent(e);
                },
              },
              {
                key: "raiseChangeEvent",
                value: function () {
                  this.notifier.next({
                    type: f.CHANGE,
                    notifications: Array.from(
                      this.notificationsStorage.values()
                    ),
                  });
                },
              },
              {
                key: "raiseRemoveEvent",
                value: function (e) {
                  this.notifier.next({ type: f.REMOVE, notificationId: e });
                },
              },
              {
                key: "changeEventSubscription",
                value: function (e) {
                  return this.notifier
                    .pipe(
                      Object(u.a)(function (e) {
                        return e.type === f.CHANGE;
                      }),
                      Object(s.a)(function (e) {
                        return e.notifications;
                      })
                    )
                    .subscribe(e);
                },
              },
              {
                key: "removeEventSubscription",
                value: function (e) {
                  return this.notifier
                    .pipe(
                      Object(u.a)(function (e) {
                        return e.type === f.REMOVE;
                      }),
                      Object(s.a)(function (e) {
                        return e.notificationId;
                      })
                    )
                    .subscribe(e);
                },
              },
            ]),
            e
          );
        })())();
    },
    1464: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(34),
        r = n(39),
        i = n(545),
        c = n(32),
        o = n(3),
        u = n(21),
        s = n(17),
        l = n(246),
        d = n(0),
        b = function (e) {
          var t = e.children,
            n = Object(o.useState)(
              JSON.parse(localStorage.getItem("isHotkeysEnabled") || "false")
            ),
            a = Object(s.a)(n, 2),
            r = a[0],
            i = a[1];
          return Object(d.jsx)(l.a.Provider, {
            value: { isHotkeyActive: r, setIsHotkeyActive: i },
            children: t,
          });
        },
        f = function (e) {
          var t = e.children;
          return Object(d.jsx)(d.Fragment, {
            children: Object(d.jsx)(u.a, {
              children: Object(d.jsx)(u.c, {
                children: Object(d.jsx)(u.b, {
                  children: Object(d.jsx)(u.d, {
                    children: Object(d.jsx)(b, {
                      children: Object(d.jsx)(u.e, {
                        children: Object(d.jsx)(u.g, { children: t }),
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        },
        m = n(698),
        h = n(355),
        p = n(354),
        O = n(739),
        j = n.n(O);
      t.default = function () {
        return Object(d.jsxs)(d.Fragment, {
          children: [
            Object(d.jsx)(c.a, {}),
            Object(d.jsx)(r.a, {
              children: Object(d.jsx)(f, {
                children: Object(d.jsx)(h.a, {
                  children: Object(d.jsxs)(a.d, {
                    children: [
                      p.i.map(function (e) {
                        return e.isDynamic
                          ? Object(d.jsx)(
                              a.b,
                              {
                                path: e.from,
                                render: function (t) {
                                  var n = t.match.params;
                                  return Object(d.jsx)(a.a, {
                                    to: e.to.replace(":code", n.code || ""),
                                  });
                                },
                              },
                              "".concat(e.from, "_").concat(e.to)
                            )
                          : Object(d.jsx)(
                              a.b,
                              {
                                path: e.from,
                                children: Object(d.jsx)(a.a, { to: e.to }),
                              },
                              "".concat(e.from, "_").concat(e.to)
                            );
                      }),
                      i.a.map(function (e, t) {
                        return Object(d.jsx)(
                          a.b,
                          {
                            path: e.path,
                            component: function () {
                              var t = e.component;
                              return Object(d.jsxs)(d.Fragment, {
                                children: [
                                  Object(d.jsx)("div", {
                                    className: j.a.pageContentWrapper,
                                    children: Object(d.jsx)(t, {}),
                                  }),
                                  Object(d.jsx)(m.c, {}),
                                ],
                              });
                            },
                            exact: e.exact,
                          },
                          "".concat(e.path, "_").concat(t)
                        );
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      };
    },
    154: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return a;
      });
      var a = function (e) {
        return new Promise(function (t) {
          return setTimeout(function () {
            return t(null);
          }, 1e3 * e);
        });
      };
      t.a = a;
    },
    156: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a = function () {
        var e = [];
        return {
          pushTimeout: function (t) {
            var n = setTimeout(
              function () {
                t();
              },
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
            );
            e.push(n);
          },
          clearTimeouts: function () {
            e.forEach(function (e) {
              clearTimeout(e);
            }),
              (e.length = 0);
          },
        };
      };
    },
    163: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var a = n(16),
        r = n(3),
        i = n(0),
        c = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : null;
          return function (n) {
            return Object(i.jsx)(r.Suspense, {
              fallback: t,
              children: Object(i.jsx)(e, Object(a.a)({}, n)),
            });
          };
        };
    },
    170: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a = function () {
        var e = [];
        return {
          pushInterval: function (t) {
            var n = setInterval(
              function () {
                t();
              },
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
            );
            e.push(n);
          },
          clearIntervals: function () {
            e.forEach(function (e) {
              clearInterval(e);
            }),
              (e.length = 0);
          },
        };
      };
    },
    18: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n(16),
        r = n(20),
        i = n(3),
        c = n(15),
        o = n(0),
        u = [
          "children",
          "className",
          "base",
          "classes",
          "waveColor",
          "loading",
          "withoutAnimation",
          "component",
        ],
        s = Object(i.forwardRef)(function (e, t) {
          var n = e.children,
            s = e.className,
            l = (e.base, e.classes),
            d = e.waveColor,
            b = e.loading,
            f = e.withoutAnimation,
            m = e.component,
            h = Object(r.a)(e, u),
            p = Object(i.useRef)(null);
          Object(i.useImperativeHandle)(t, function () {
            return p.current;
          });
          var O = Object(i.useCallback)(
            Object(i.forwardRef)(function (e, t) {
              return m
                ? Object(o.jsx)(
                    m,
                    Object(a.a)(Object(a.a)({}, e), {}, { ref: t })
                  )
                : Object(o.jsx)(
                    "button",
                    Object(a.a)(
                      Object(a.a)({ type: "button" }, e),
                      {},
                      { ref: t }
                    )
                  );
            }),
            []
          );
          return Object(o.jsx)(
            O,
            Object(a.a)(
              Object(a.a)(
                {
                  ref: p,
                  className: Object(c.a)(
                    "baseButton",
                    s,
                    null === l || void 0 === l ? void 0 : l.root
                  ),
                },
                h
              ),
              {},
              {
                onMouseDown: f
                  ? void 0
                  : function (e) {
                      var t = e.clientX,
                        n = e.clientY,
                        a = e.currentTarget.getBoundingClientRect();
                      if (p.current) {
                        var r = document.createElement("span");
                        p.current.appendChild(r),
                          (r.className = "baseButton__waveAnimation"),
                          d && (r.style.background = d),
                          (r.style.left = "".concat(t - a.left, "px")),
                          (r.style.top = "".concat(n - a.top, "px")),
                          (r.onanimationend = function () {
                            r.remove();
                          });
                      }
                    },
                children: b ? "Loading..." : n,
              }
            )
          );
        });
    },
    188: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return S;
      }),
        n.d(t, "a", function () {
          return h;
        }),
        n.d(t, "b", function () {
          return f;
        });
      var a = n(30),
        r = n(43),
        i = n(19),
        c = n(1),
        o = n(17),
        u = n(4),
        s = n(24),
        l = n(25),
        d = n(720),
        b = n(209),
        f = function (e, t) {
          for (var n = [], a = 0; ; ) {
            var r = e.slice(a, a + t);
            if (!r.length) break;
            n.push(r), (a += t);
          }
          return n;
        },
        m = Object(l.a)(function e(t) {
          var n = t.value,
            a = t.next,
            r = void 0 === a ? null : a,
            i = t.previous,
            c = void 0 === i ? null : i,
            o = t.key;
          Object(s.a)(this, e),
            (this.value = void 0),
            (this.next = void 0),
            (this.previous = void 0),
            (this.key = void 0),
            (this.value = n),
            (this.next = r),
            (this.previous = c),
            o && (this.key = o);
        }),
        h = (function () {
          function e() {
            Object(s.a)(this, e),
              (this.head = void 0),
              (this.tail = void 0),
              (this.listLength = void 0),
              (this.itemKeysStore = void 0),
              (this.head = null),
              (this.tail = null),
              (this.listLength = 0),
              (this.itemKeysStore = {});
          }
          return (
            Object(l.a)(e, [
              {
                key: "length",
                get: function () {
                  return this.listLength;
                },
              },
              {
                key: "addNodeToKeysStore",
                value: function (e, t) {
                  t && (this.itemKeysStore[t] = e);
                },
              },
              {
                key: "removeNodeFromKeysStore",
                value: function (e) {
                  e && delete this.itemKeysStore[e];
                },
              },
              {
                key: "prepend",
                value: function (e, t) {
                  var n = new m({ value: e, next: this.head, key: t });
                  this.addNodeToKeysStore(n, t),
                    (this.head = n),
                    this.head.next && (this.head.next.previous = this.head),
                    this.tail || (this.tail = n),
                    this.listLength++;
                },
              },
              {
                key: "append",
                value: function (e, t) {
                  var n = new m({ value: e, key: t });
                  this.addNodeToKeysStore(n, t),
                    this.tail &&
                      ((n.previous = this.tail), (this.tail.next = n)),
                    (this.tail = n),
                    this.head || (this.head = n),
                    this.listLength++;
                },
              },
              {
                key: "deleteFirst",
                value: function () {
                  var e;
                  if (null !== (e = this.head) && void 0 !== e && e.next)
                    return (
                      this.removeNodeFromKeysStore(this.head.key),
                      (this.head = this.head.next),
                      (this.head.previous = null),
                      void this.listLength--
                    );
                  this.clear();
                },
              },
              {
                key: "deleteLast",
                value: function () {
                  var e;
                  if (null !== (e = this.tail) && void 0 !== e && e.previous)
                    return (
                      this.removeNodeFromKeysStore(this.tail.key),
                      (this.tail = this.tail.previous),
                      (this.tail.next = null),
                      void this.listLength--
                    );
                  this.clear();
                },
              },
              {
                key: "deleteByKey",
                value: function (e) {
                  var t = this.itemKeysStore[e];
                  if (t) {
                    if (t === this.head) return this.deleteFirst();
                    if (t === this.tail) return this.deleteLast();
                    t.next && (t.next.previous = t.previous),
                      t.previous && (t.previous.next = t.next),
                      this.removeNodeFromKeysStore(e),
                      this.listLength--;
                  }
                },
              },
              {
                key: "getByKey",
                value: function (e) {
                  var t;
                  return null === (t = this.itemKeysStore[e]) || void 0 === t
                    ? void 0
                    : t.value;
                },
              },
              {
                key: "isKeyExist",
                value: function (e) {
                  return !!this.itemKeysStore[e];
                },
              },
              {
                key: "clear",
                value: function () {
                  (this.head = null),
                    (this.tail = null),
                    (this.listLength = 0),
                    (this.itemKeysStore = {});
                },
              },
              {
                key: "values",
                value: Object(c.a)().mark(function e() {
                  var t;
                  return Object(c.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            t = this.head;
                          case 1:
                            if (t) {
                              e.next = 4;
                              break;
                            }
                            return e.abrupt("return");
                          case 4:
                            return (e.next = 6), t.value;
                          case 6:
                            (t = t.next), (e.next = 1);
                            break;
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                }),
              },
            ]),
            e
          );
        })(),
        p = (function () {
          var e = Object(u.a)(
            Object(c.a)().mark(function e(t, n) {
              var a, r;
              return Object(c.a)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (Number.isInteger(n) && !(n <= 0)) {
                          e.next = 2;
                          break;
                        }
                        throw new Error("invalid argument - retriesCount");
                      case 2:
                        a = 0;
                      case 3:
                        if (!(a < n)) {
                          e.next = 18;
                          break;
                        }
                        return (e.prev = 4), (e.next = 7), t();
                      case 7:
                        return (r = e.sent), e.abrupt("return", r);
                      case 11:
                        if (((e.prev = 11), (e.t0 = e.catch(4)), n - 1 !== a)) {
                          e.next = 15;
                          break;
                        }
                        throw e.t0;
                      case 15:
                        a++, (e.next = 3);
                        break;
                      case 18:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[4, 11]]
              );
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        O = new RegExp(
          "Lighthouse|bot|spider|GTmetrix|crawl|APIs-Google|AdsBot|Googlebot|Insights|mediapartners|Google Favicon|FeedFetcher|Google-Read-Aloud|DuplexWeb-Google|googleweblight|bing|yandex|baidu|duckduck|yahoo|ecosia|ia_archiver|facebook|instagram|pinterest|reddit|slack|twitter|whatsapp|youtube|semrush|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|bingbot|slurp|java|wget|curl|Commons-HttpClient|Python-urllib|libwww|httpunit|nutch|phpcrawl|msnbot|jyxobot|FAST-WebCrawler|FAST Enterprise Crawler|biglotron|teoma|convera|seekbot|gigablast|exabot|ngbot|ia_archiver|GingerCrawler|webmon |httrack|webcrawler|grub|UsineNouvelleCrawler|antibot|netresearchserver|speedy|fluffy|bibnum|findlink|msrbot|panscient|yacybot|AISearchBot|IOI|ips-agent|tagoobot|MJ12bot|dotbot|woriobot|yanga|buzzbot|mlbot|yandexbot|purebot|Linguee Bot|Voyager|CyberPatrol|voilabot|baiduspider|citeseerxbot|spbot|twengabot|postrank|turnitinbot|scribdbot|page2rss|sitebot|linkdex|Adidxbot|blekkobot|ezooms|dotbot|Mail|RU_Bot|discobot|heritrix|findthatfile|europarchive|NerdByNature|sistrix crawler|ahrefsbot|Aboundex|domaincrawler|wbsearchbot|summify|ccbot|edisterbot|seznambot|ec2linkfinder|gslfbot|aihitbot|intelium_bot|facebookexternalhit|yeti|RetrevoPageAnalyzer|lb-spider|sogou|lssbot|careerbot|wotbox|wocbot|ichiro|DuckDuckBot|lssrocketcrawler|drupact|webcompanycrawler|acoonbot|openindexspider|gnam gnam spider|web-archive-net|backlinkcrawler|coccoc|integromedb|content crawler spider|toplistbot|seokicks-robot|it2media-domain-crawler|ip-web-crawler|siteexplorer|elisabot|proximic|changedetection|blexbot|arabot|WeSEE:Search|niki-bot|CrystalSemanticsBot|rogerbot|psbot|InterfaxScanBot|Lipperhey SEO Service|CC Metadata Scaper|g00g1e|GrapeshotCrawler|urlappendbot|brainobot|fr-crawler|binlar|SimpleCrawler|Livelapbot|Twitterbot|cXensebot|smtbot|bnf|fr_bot|A6-Indexer|ADmantX|Facebot|OrangeBot|memorybot|AdvBot|MegaIndex|SemanticScholarBot|ltx71|nerdybot|xovibot|BUbiNG|Qwantify|archive.org_bot|Applebot|TweetmemeBot|crawler4j|findxbot|SemrushBot|yoozBot|lipperhey|y!j-asr|Domain Re-Animator Bot|AddThis",
          "i"
        ),
        j = n(124),
        g = (function () {
          var e = navigator.userAgent;
          return O.test(e);
        })(),
        v = (function (e) {
          return (
            (e[(e.NOT_LOADED = 0)] = "NOT_LOADED"),
            (e[(e.PENDING = 1)] = "PENDING"),
            (e[(e.LOADED = 2)] = "LOADED"),
            e
          );
        })(v || {}),
        y = (function () {
          function e() {
            var t = this;
            Object(s.a)(this, e),
              (this.firebase = void 0),
              (this.firebasePackageDownloadStatus = void 0),
              (this.user = void 0),
              (this.messageQueue = void 0),
              (this.storedLimit = void 0),
              (this.error = function (e, n) {
                if (!g) {
                  var a = new Error().stack,
                    r = "";
                  if ("string" === typeof e) r = e + a;
                  else if (
                    e instanceof Error ||
                    (null !== e && void 0 !== e && e.message) ||
                    (null !== e && void 0 !== e && e.stack)
                  ) {
                    var i, c;
                    r = JSON.stringify({
                      message:
                        null !== (i = e.message) && void 0 !== i ? i : null,
                      stack: null !== (c = e.stack) && void 0 !== c ? c : null,
                    });
                  } else if (
                    "function" ===
                    typeof (null === e || void 0 === e ? void 0 : e.toString)
                  )
                    r = e.toString();
                  else
                    try {
                      r = JSON.stringify(e);
                    } catch (l) {
                      r = "unsupported error type:" + typeof e;
                    }
                  var o = n || {},
                    u = o.custom,
                    s = o.place;
                  Object(b.a)(
                    t.sendError({
                      errorTrace: r,
                      message: "".concat(r).slice(0, 25),
                      custom: u,
                      place: s,
                    }),
                    function (e) {
                      console.error(">> Error on errorTracker error: ", e);
                    }
                  );
                }
              }),
              (this.messageQueue = new h()),
              (this.storedLimit = 50),
              (this.firebase = null),
              (this.user = null),
              (this.firebasePackageDownloadStatus = v.NOT_LOADED);
          }
          return (
            Object(l.a)(e, [
              {
                key: "setUser",
                value: function (e) {
                  this.user = e;
                },
              },
              {
                key: "init",
                value: (function () {
                  var e = Object(u.a)(
                    Object(c.a)().mark(function e() {
                      var t, a, r, i, u;
                      return Object(c.a)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (this.firebasePackageDownloadStatus =
                                    v.PENDING),
                                  (e.next = 4),
                                  p(function () {
                                    return Promise.all([
                                      Promise.all([n.e(14), n.e(258)]).then(
                                        n.bind(null, 1426)
                                      ),
                                      Promise.all([n.e(14), n.e(259)]).then(
                                        n.bind(null, 1469)
                                      ),
                                    ]);
                                  }, 5)
                                );
                              case 4:
                                (t = e.sent),
                                  (a = Object(o.a)(t, 2)),
                                  (r = a[0].initializeApp),
                                  (i = a[1]),
                                  (this.firebasePackageDownloadStatus =
                                    v.LOADED),
                                  (u = r(d)),
                                  (this.firebase = {
                                    app: u,
                                    storeModule: i,
                                    store: i.getFirestore(u),
                                  }),
                                  this.sendPendingErrors(),
                                  (e.next = 17);
                                break;
                              case 14:
                                (e.prev = 14),
                                  (e.t0 = e.catch(0)),
                                  console.error(
                                    "error when try import firebase app: ",
                                    e.t0
                                  );
                              case 17:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[0, 14]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "sendError",
                value: (function () {
                  var e = Object(u.a)(
                    Object(c.a)().mark(function e(t) {
                      var n, a, r, o, u, s, l, d, b;
                      return Object(c.a)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (console.log("err", t),
                                  this.firebasePackageDownloadStatus ===
                                    v.NOT_LOADED && this.init(),
                                  this.firebase)
                                ) {
                                  e.next = 6;
                                  break;
                                }
                                return (
                                  this.messageQueue.length ===
                                    this.storedLimit &&
                                    this.messageQueue.deleteFirst(),
                                  this.messageQueue.append(t),
                                  e.abrupt("return")
                                );
                              case 6:
                                return (
                                  (a = t.errorTrace),
                                  (r = t.custom),
                                  (o = t.message),
                                  (u = t.place),
                                  (s = null !== o && void 0 !== o ? o : a),
                                  (l = Date.now()),
                                  (d = Object(j.a)("HH:MM:ss dd.mm.yyyy")),
                                  (b = this.firebase.storeModule.doc(
                                    this.firebase.store,
                                    "Errors",
                                    s
                                  )),
                                  (e.next = 13),
                                  this.firebase.storeModule.setDoc(
                                    b,
                                    Object(i.a)(
                                      {},
                                      " - "
                                        .concat(d, " - ")
                                        .concat(
                                          (null === (n = this.user) ||
                                          void 0 === n
                                            ? void 0
                                            : n.userId) || "",
                                          " - "
                                        )
                                        .concat(s),
                                      {
                                        timestamp: l,
                                        user: this.user,
                                        error: JSON.stringify({
                                          place: u || "",
                                          name: o || "",
                                          trace: a || "",
                                          fields: r || "custom",
                                        }),
                                      }
                                    ),
                                    { merge: !0 }
                                  )
                                );
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "sendPendingErrors",
                value: (function () {
                  var e = Object(u.a)(
                    Object(c.a)().mark(function e() {
                      var t,
                        n,
                        i,
                        o,
                        u = this;
                      return Object(c.a)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (this.messageQueue.length && this.firebase) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                (t = f(
                                  Object(r.a)(this.messageQueue.values()),
                                  5
                                )),
                                  this.messageQueue.clear(),
                                  (n = Object(a.a)(t)),
                                  (e.prev = 5),
                                  n.s();
                              case 7:
                                if ((i = n.n()).done) {
                                  e.next = 13;
                                  break;
                                }
                                return (
                                  (o = i.value),
                                  (e.next = 11),
                                  Object(b.a)(
                                    Promise.all(
                                      o.map(function (e) {
                                        return u.sendError(e);
                                      })
                                    ),
                                    function (e) {
                                      console.log(
                                        "send error - ".concat(
                                          null === e || void 0 === e
                                            ? void 0
                                            : e.message
                                        )
                                      );
                                    }
                                  )
                                );
                              case 11:
                                e.next = 7;
                                break;
                              case 13:
                                e.next = 18;
                                break;
                              case 15:
                                (e.prev = 15), (e.t0 = e.catch(5)), n.e(e.t0);
                              case 18:
                                return (e.prev = 18), n.f(), e.finish(18);
                              case 21:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[5, 15, 18, 21]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        S = new y();
    },
    209: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      }),
        n.d(t, "b", function () {
          return o;
        });
      var a = n(43),
        r = n(1),
        i = n(4),
        c = (function () {
          var e = Object(i.a)(
            Object(r.a)().mark(function e(t, n) {
              var a;
              return Object(r.a)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.prev = 0), (e.next = 3), t;
                      case 3:
                        return (a = e.sent), e.abrupt("return", a);
                      case 7:
                        (e.prev = 7), (e.t0 = e.catch(0)), n && n(e.t0);
                      case 10:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[0, 7]]
              );
            })
          );
          return function (t, n) {
            return e.apply(this, arguments);
          };
        })(),
        o = function (e, t, n) {
          try {
            return e.apply(void 0, Object(a.a)(t));
          } catch (r) {
            n && n(r);
          }
        };
    },
    21: function (e, t, n) {
      "use strict";
      n.d(t, "i", function () {
        return w;
      }),
        n.d(t, "a", function () {
          return S;
        }),
        n.d(t, "b", function () {
          return C;
        }),
        n.d(t, "j", function () {
          return E;
        }),
        n.d(t, "l", function () {
          return A;
        }),
        n.d(t, "d", function () {
          return M;
        }),
        n.d(t, "n", function () {
          return R;
        }),
        n.d(t, "g", function () {
          return L;
        }),
        n.d(t, "f", function () {
          return H.b;
        }),
        n.d(t, "m", function () {
          return D;
        }),
        n.d(t, "h", function () {
          return G.a;
        }),
        n.d(t, "k", function () {
          return U;
        }),
        n.d(t, "c", function () {
          return K;
        }),
        n.d(t, "e", function () {
          return V.b;
        });
      var a = n(3),
        r = n.n(a),
        i = n(19),
        c = n(16),
        o = n(17),
        u = n(1),
        s = n(4),
        l = n(34),
        d = n(1452),
        b = n(23),
        f = n(67),
        m = n(29),
        h = n(32),
        p = n(209),
        O = n(188),
        j = n(12),
        g = n(0),
        v = Object(a.createContext)({
          user: null,
          isUserDataLoading: !1,
          logout: function () {},
          autoLogout: function () {},
          login: (function () {
            var e = Object(s.a)(
              Object(u.a)().mark(function e() {
                return Object(u.a)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt("return", void 0);
                      case 1:
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
          refreshUserInfo: (function () {
            var e = Object(s.a)(
              Object(u.a)().mark(function e() {
                return Object(u.a)().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt("return", void 0);
                      case 1:
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
          updateUserSeed: function () {},
          loading: !1,
          setNeedTfa: function () {},
          setUser: function () {},
          needTfa: !1,
          wsToken: null,
        }),
        y = "refresh-time",
        S = function (e) {
          var t = e.children,
            n = Object(l.g)(),
            r = Object(a.useState)(null),
            S = Object(o.a)(r, 2),
            w = S[0],
            x = S[1],
            _ = Object(a.useState)(null),
            P = Object(o.a)(_, 2),
            k = P[0],
            N = P[1],
            C = Object(m.a)("/account/refresh-token", {
              method: "POST",
              onSuccess: function (e) {
                e.success &&
                  (localStorage.setItem(b.q.access, e.new_token),
                  localStorage.setItem(y, String(Date.now())));
              },
            }),
            E = Object(o.a)(C, 1)[0],
            z = Object(a.useState)(!1),
            I = Object(o.a)(z, 2),
            M = I[0],
            A = I[1],
            T = Object(a.useState)(!1),
            L = Object(o.a)(T, 2),
            R = L[0],
            B = L[1],
            H = Object(a.useState)(!1),
            D = Object(o.a)(H, 2),
            G = D[0],
            F = D[1],
            U = (function () {
              var e = Object(s.a)(
                Object(u.a)().mark(function e(t) {
                  var n;
                  return Object(u.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), B(!0), (e.next = 4), t();
                          case 4:
                            return (n = e.sent), e.abrupt("return", n);
                          case 6:
                            return (e.prev = 6), B(!1), e.finish(6);
                          case 9:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, , 6, 9]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            W = (function () {
              var e = Object(s.a)(
                Object(u.a)().mark(function e(t) {
                  var n, a;
                  return Object(u.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            A(!0),
                            (e.next = 3),
                            Object(p.a)(
                              f.c.get("/account/get-socket-token", {
                                cancelToken:
                                  null === t || void 0 === t ? void 0 : t.token,
                              })
                            )
                          );
                        case 3:
                          null !== (a = e.sent) &&
                            void 0 !== a &&
                            null !== (n = a.data) &&
                            void 0 !== n &&
                            n.socket_token &&
                            N(a.data.socket_token),
                            A(!1);
                        case 6:
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
            K = (function () {
              var e = Object(s.a)(
                Object(u.a)().mark(function e() {
                  var t, a;
                  return Object(u.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), f.c.post("/account/logout");
                        case 2:
                          (t = e.sent),
                            (a = t.data).success && h.b.success(a.message),
                            localStorage.removeItem(b.q.access),
                            localStorage.removeItem(b.q.refresh),
                            n.push(b.m.startPage.pathName),
                            x(null);
                        case 9:
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
          Object(a.useEffect)(
            function () {
              Object(j.isInIFrame)() && w && K(),
                O.c.setUser(w && { userId: w.user_id, userName: w.user_name });
            },
            [w]
          );
          var V = (function () {
              var e = Object(s.a)(
                Object(u.a)().mark(function e(t) {
                  return Object(u.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), f.c.post("/account/resend-2fa-code")
                          );
                        case 2:
                          F(!0), h.b.warning(t), n.push(b.m.loginPage.pathName);
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
            q = (function () {
              var e = Object(s.a)(
                Object(u.a)().mark(function e() {
                  var t, n;
                  return Object(u.a)().wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (localStorage.getItem(b.q.access)) {
                              e.next = 3;
                              break;
                            }
                            return e.abrupt("return", !1);
                          case 3:
                            return (
                              w || A(!0),
                              (e.prev = 4),
                              (e.next = 7),
                              f.c.post("/account/get-user-information")
                            );
                          case 7:
                            if (
                              ((t = e.sent), w || A(!1), !(n = t.data).success)
                            ) {
                              e.next = 13;
                              break;
                            }
                            return (
                              x(n.user_information), e.abrupt("return", !0)
                            );
                          case 13:
                            e.next = 18;
                            break;
                          case 15:
                            (e.prev = 15), (e.t0 = e.catch(4)), A(!1);
                          case 18:
                            return e.abrupt("return", !1);
                          case 19:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 15]]
                  );
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            J = (function () {
              var e = Object(s.a)(
                Object(u.a)().mark(function e(t) {
                  var n, a, r;
                  return Object(u.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            A(!0),
                            (e.next = 3),
                            f.c.post("/account/login", {
                              user_email: t.login,
                              password: t.password,
                              captcha_response: t.captcha_response,
                            })
                          );
                        case 3:
                          if (((n = e.sent), !(a = n.data).success)) {
                            e.next = 10;
                            break;
                          }
                          return (
                            (r = a.token),
                            localStorage.setItem(b.q.access, r),
                            (e.next = 10),
                            q()
                          );
                        case 10:
                          return A(!1), e.abrupt("return", a);
                        case 12:
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
            Q = function (e) {
              var t =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              localStorage.getItem(b.q.access) &&
                (t ? h.b.warning(e) : h.b.success(e),
                x(null),
                localStorage.removeItem(b.q.access),
                n.push(b.m.loginPage.pathName));
            };
          Object(a.useEffect)(function () {
            return (
              U(
                Object(s.a)(
                  Object(u.a)().mark(function e() {
                    return Object(u.a)().wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), q();
                          case 2:
                            if (!e.sent) {
                              e.next = 5;
                              break;
                            }
                            return e.abrupt("return");
                          case 5:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                )
              ),
              f.d.subscribe({
                next: (function () {
                  var e = Object(s.a)(
                    Object(u.a)().mark(function e(t) {
                      return Object(u.a)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), V(String(t));
                            case 2:
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
              }),
              f.a.subscribe({
                next: (function () {
                  var e = Object(s.a)(
                    Object(u.a)().mark(function e(t) {
                      return Object(u.a)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              Q(String(t));
                            case 1:
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
              }),
              function () {
                f.d.unsubscribe(), f.a.unsubscribe();
              }
            );
          }, []),
            Object(a.useEffect)(
              function () {
                if (w) {
                  var e = localStorage.getItem(y),
                    t = !1;
                  localStorage.getItem(b.q.access) &&
                    e &&
                    Date.now() - Number(e) > 36e5 &&
                    (t = !0),
                    Z(t);
                  var n = d.a.CancelToken.source();
                  return (
                    W(n),
                    function () {
                      n.cancel(), N(null);
                    }
                  );
                }
              },
              [w]
            );
          var Z = function e() {
            w &&
              ((!(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0]) &&
                E(),
              setTimeout(e, 36e5));
          };
          return Object(g.jsx)(v.Provider, {
            value: {
              user: w,
              login: J,
              isUserDataLoading: R,
              logout: K,
              autoLogout: Q,
              refreshUserInfo: q,
              updateUserSeed: function (e, t) {
                var n = "server_seed_".concat(t);
                x(function (t) {
                  return (
                    t &&
                    Object(c.a)(Object(c.a)({}, t), {}, Object(i.a)({}, n, e))
                  );
                });
              },
              loading: M,
              needTfa: G,
              setNeedTfa: F,
              setUser: x,
              wsToken: k,
            },
            children: t,
          });
        },
        w = function () {
          return Object(a.useContext)(v);
        },
        x = n(43),
        _ = n(717),
        P = n(1418),
        k = (function (e) {
          return (e.COINS = "coins"), (e.SELECTED_COIN = "selectedCoin"), e;
        })({}),
        N = Object(a.createContext)({
          getCoins: function () {},
          setSelectedCoinFromSymbol: function () {},
          updateCoinBalance: function () {},
          coinsObserver: new P.a({
            coins: [],
            selectedCoin: "BTC",
            updatedValue: k.COINS,
          }),
          isLoaded: { current: !1 },
        }),
        C = function (e) {
          var t = e.children,
            n = w(),
            r = n.user,
            i = n.loading,
            o = Object(a.useRef)([]),
            l = Object(a.useRef)(!1),
            d = Object(a.useRef)(!1),
            b = Object(a.useMemo)(function () {
              return new P.a({
                coins: [],
                selectedCoin: localStorage.getItem("selectedCurrency") || "BTC",
                updatedValue: k.COINS,
              });
            }, []),
            m = function (e) {
              var t =
                "string" === typeof e
                  ? { selectedCoin: e, updatedValue: k.SELECTED_COIN }
                  : { coins: e, updatedValue: k.COINS };
              b.next(Object(c.a)(Object(c.a)({}, b.getValue()), t));
            },
            h = (function () {
              var e = Object(s.a)(
                Object(u.a)().mark(function e() {
                  var t;
                  return Object(u.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2), Object(p.a)(f.c.get("/coins/get-all"))
                          );
                        case 2:
                          null !== (t = e.sent) &&
                            void 0 !== t &&
                            t.data.coins &&
                            (o.current = t.data.coins.map(function (e) {
                              return Object(c.a)(
                                Object(c.a)({}, e),
                                {},
                                {
                                  price: Number(e.price),
                                  normal_withdrawal_fee: Number(
                                    e.normal_withdrawal_fee
                                  ),
                                  priority_withdrawal_fee: Number(
                                    e.priority_withdrawal_fee
                                  ),
                                  normal_minimum_withdrawal: Number(
                                    e.normal_minimum_withdrawal
                                  ),
                                  priority_minimum_withdrawal: Number(
                                    e.priority_minimum_withdrawal
                                  ),
                                  minimum_deposit_amount: Number(
                                    e.minimum_deposit_amount
                                  ),
                                  confirmations_required: Number(
                                    e.confirmations_required
                                  ),
                                }
                              );
                            }));
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
            O = (function () {
              var e = Object(s.a)(
                Object(u.a)().mark(function e() {
                  var t, n, a;
                  return Object(u.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (o.current.length) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (((t = []), !r)) {
                            e.next = 9;
                            break;
                          }
                          return (
                            (e.next = 6),
                            Object(p.a)(f.c.get("/coins/get-balances"))
                          );
                        case 6:
                          (n = e.sent),
                            (t =
                              (null === n || void 0 === n
                                ? void 0
                                : n.data.coins) || []).length &&
                              (d.current = !0);
                        case 9:
                          (a = o.current.reduce(function (e, n) {
                            var a;
                            return (
                              e.push(
                                Object(c.a)(
                                  Object(c.a)({}, n),
                                  {},
                                  {
                                    balance: Number(
                                      (null ===
                                        (a = t.find(function (e) {
                                          return e.coin === n.symbol;
                                        })) || void 0 === a
                                        ? void 0
                                        : a.balance) || 0
                                    ),
                                  }
                                )
                              ),
                              e
                            );
                          }, [])) && m(a);
                        case 11:
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
            j = Object(a.useRef)(null);
          return (
            Object(a.useEffect)(
              function () {
                var e = (function () {
                  var e = Object(s.a)(
                    Object(u.a)().mark(function e() {
                      return Object(u.a)().wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (o.current.length) {
                                e.next = 4;
                                break;
                              }
                              return (
                                j.current || (j.current = h()),
                                (e.next = 4),
                                j.current
                              );
                            case 4:
                              return (e.next = 6), O();
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
                })();
                r ? l.current || (e(), (l.current = !!r)) : e();
              },
              [r]
            ),
            Object(a.useEffect)(
              function () {
                i || r || (d.current = !0);
              },
              [i]
            ),
            Object(g.jsx)(N.Provider, {
              value: {
                getCoins: O,
                setSelectedCoinFromSymbol: function (e) {
                  e && (localStorage.setItem("selectedCurrency", e), m(e));
                },
                updateCoinBalance: function (e, t) {
                  var n = b.getValue().coins,
                    a = n.find(function (e) {
                      return e.symbol.toLowerCase() === t.toLocaleLowerCase();
                    });
                  a && ((a.balance = e), m(n));
                },
                coinsObserver: b,
                isLoaded: d,
              },
              children: t,
            })
          );
        },
        E = function () {
          var e = Object(a.useContext)(N),
            t = e.setSelectedCoinFromSymbol,
            n = e.coinsObserver,
            r = e.getCoins,
            i = e.updateCoinBalance,
            c = e.isLoaded,
            u = Object(a.useState)([]),
            s = Object(o.a)(u, 2),
            l = s[0],
            d = s[1],
            b = Object(a.useState)(""),
            f = Object(o.a)(b, 2),
            m = f[0],
            h = f[1],
            p = Object(a.useState)(c.current),
            O = Object(o.a)(p, 2),
            j = O[0],
            g = O[1];
          Object(a.useEffect)(function () {
            var e = n.getValue(),
              t = e.selectedCoin,
              a = e.coins;
            d(a), h(t);
            var r = [
              n
                .pipe(
                  Object(_.a)(function (e) {
                    return e.updatedValue === k.COINS;
                  })
                )
                .subscribe(function (e) {
                  d(Object(x.a)(e.coins)), c.current && g(!0);
                }),
              n
                .pipe(
                  Object(_.a)(function (e) {
                    return e.updatedValue === k.SELECTED_COIN;
                  })
                )
                .subscribe(function (e) {
                  h(e.selectedCoin);
                }),
            ];
            return function () {
              return r.forEach(function (e) {
                return e.unsubscribe();
              });
            };
          }, []);
          return {
            selectedCoin:
              l.find(function (e) {
                return e.symbol === m;
              }) ||
              (l.length > 0 && l[0]) ||
              null,
            setSelectedCoin: t,
            coins: l,
            getCoins: r,
            updateSelectedCoinBalance: function (e) {
              m && i(e, m);
            },
            updateCoinBalance: i,
            isLoaded: j,
          };
        },
        z = r.a.createContext(navigator.onLine),
        I = n(47),
        M = function (e) {
          var t = e.children,
            n = Object(a.useState)(navigator.onLine),
            r = Object(o.a)(n, 2),
            i = r[0],
            c = r[1];
          return (
            Object(I.a)("online", function () {
              return c(!0);
            }),
            Object(I.a)("offline", function () {
              return c(!1);
            }),
            Object(g.jsx)(z.Provider, { value: i, children: t })
          );
        };
      function A() {
        return Object(a.useContext)(z);
      }
      var T = Object(a.createContext)({
          isLight: "light" === localStorage.getItem("color-scheme"),
          setIsLight: function () {},
        }),
        L = function (e) {
          var t = e.children,
            n = Object(a.useState)(
              "light" === localStorage.getItem("color-scheme")
            ),
            r = Object(o.a)(n, 2),
            i = r[0],
            c = r[1];
          return (
            Object(a.useEffect)(
              function () {
                i
                  ? ((document.body.className = "light"),
                    localStorage.setItem("color-scheme", "light"))
                  : ((document.body.className = ""),
                    localStorage.setItem("color-scheme", "dark"));
              },
              [i]
            ),
            Object(g.jsx)(T.Provider, {
              value: { isLight: i, setIsLight: c },
              children: t,
            })
          );
        },
        R = function () {
          return Object(a.useContext)(T);
        },
        B = n(553),
        H = n(316);
      function D() {
        var e = Object(a.useContext)(B.a);
        if (!e) throw new Error("useSeed using outside provider");
        return e;
      }
      var G = n(368),
        F = Object(a.createContext)({
          gameAccess: null,
          gameAgreed: { value: !1, isLoading: !1 },
          updateAgreed: function () {},
        }),
        U = function () {
          return Object(a.useContext)(F);
        },
        W = "gameAccess",
        K = function (e) {
          var t,
            n = e.children,
            r = Object(a.useState)(
              (function (e) {
                switch (e) {
                  case "true":
                    return !0;
                  case "false":
                    return !1;
                  default:
                    return null;
                }
              })(localStorage.getItem(W))
            ),
            i = Object(o.a)(r, 2),
            c = i[0],
            u = i[1],
            s = w().user,
            l = A(),
            d = Object(m.a)("/games/has-agreed"),
            b = Object(o.a)(d, 2),
            f = b[0],
            h = b[1],
            p = h.data,
            O = h.isLoading,
            j = Object(m.a)("/games/can-access", {
              method: "GET",
              onSuccess: function (e) {
                var t,
                  n =
                    null !==
                      (t =
                        null === e || void 0 === e ? void 0 : e.can_access) &&
                    void 0 !== t &&
                    t;
                u(n), localStorage.setItem(W, JSON.stringify(n));
              },
            }),
            v = Object(o.a)(j, 2),
            y = v[0],
            S = v[1].data;
          return (
            Object(a.useEffect)(
              function () {
                l && !S && y();
              },
              [l, S]
            ),
            Object(a.useEffect)(
              function () {
                s && f();
              },
              [null === s || void 0 === s ? void 0 : s.user_id]
            ),
            Object(g.jsx)(F.Provider, {
              value: {
                gameAccess: c,
                gameAgreed: {
                  value:
                    null !==
                      (t = null === p || void 0 === p ? void 0 : p.agreed) &&
                    void 0 !== t &&
                    t,
                  isLoading: O,
                },
                updateAgreed: f,
              },
              children: n,
            })
          );
        },
        V = n(317);
    },
    22: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "b", function () {
          return c;
        }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return u;
        }),
        n.d(t, "e", function () {
          return s;
        }),
        n.d(t, "f", function () {
          return l;
        }),
        n.d(t, "g", function () {
          return d;
        }),
        n.d(t, "h", function () {
          return b;
        }),
        n.d(t, "i", function () {
          return f;
        }),
        n.d(t, "j", function () {
          return m;
        }),
        n.d(t, "k", function () {
          return h;
        }),
        n.d(t, "l", function () {
          return p;
        }),
        n.d(t, "m", function () {
          return O;
        }),
        n.d(t, "n", function () {
          return j;
        }),
        n.d(t, "o", function () {
          return g;
        }),
        n.d(t, "p", function () {
          return v;
        }),
        n.d(t, "q", function () {
          return y;
        }),
        n.d(t, "r", function () {
          return S;
        }),
        n.d(t, "s", function () {
          return w;
        }),
        n.d(t, "t", function () {
          return x;
        }),
        n.d(t, "u", function () {
          return _;
        }),
        n.d(t, "x", function () {
          return P;
        }),
        n.d(t, "y", function () {
          return k;
        }),
        n.d(t, "z", function () {
          return N;
        }),
        n.d(t, "A", function () {
          return C;
        }),
        n.d(t, "B", function () {
          return E;
        }),
        n.d(t, "C", function () {
          return z;
        }),
        n.d(t, "D", function () {
          return I;
        }),
        n.d(t, "E", function () {
          return M;
        }),
        n.d(t, "F", function () {
          return A;
        }),
        n.d(t, "G", function () {
          return T;
        }),
        n.d(t, "H", function () {
          return L;
        }),
        n.d(t, "I", function () {
          return R;
        }),
        n.d(t, "J", function () {
          return B;
        }),
        n.d(t, "K", function () {
          return H;
        }),
        n.d(t, "L", function () {
          return D;
        }),
        n.d(t, "M", function () {
          return G;
        }),
        n.d(t, "O", function () {
          return F;
        }),
        n.d(t, "P", function () {
          return U;
        }),
        n.d(t, "Q", function () {
          return W;
        }),
        n.d(t, "R", function () {
          return K;
        }),
        n.d(t, "S", function () {
          return V;
        }),
        n.d(t, "T", function () {
          return q;
        }),
        n.d(t, "U", function () {
          return J;
        }),
        n.d(t, "V", function () {
          return Q;
        }),
        n.d(t, "X", function () {
          return Z;
        }),
        n.d(t, "w", function () {
          return Y;
        }),
        n.d(t, "v", function () {
          return X;
        }),
        n.d(t, "N", function () {
          return $;
        }),
        n.d(t, "W", function () {
          return ee;
        });
      var a = n(163),
        r = n(3),
        i = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(191).then(n.bind(null, 561));
          })
        ),
        c = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(192).then(n.bind(null, 326));
          })
        ),
        o = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(193).then(n.bind(null, 562));
          })
        ),
        u = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(194).then(n.bind(null, 563));
          })
        ),
        s = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(195).then(n.bind(null, 564));
          })
        ),
        l = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(196).then(n.bind(null, 565));
          })
        ),
        d = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(197).then(n.bind(null, 566));
          })
        ),
        b = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(198).then(n.bind(null, 567));
          })
        ),
        f = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(199).then(n.bind(null, 568));
          })
        ),
        m = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(201).then(n.bind(null, 569));
          })
        ),
        h =
          (Object(a.a)(
            Object(r.lazy)(function () {
              return n.e(200).then(n.bind(null, 376));
            })
          ),
          Object(a.a)(
            Object(r.lazy)(function () {
              return n.e(202).then(n.bind(null, 570));
            })
          )),
        p = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(203).then(n.bind(null, 571));
          })
        ),
        O = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(204).then(n.bind(null, 572));
          })
        ),
        j = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(205).then(n.bind(null, 573));
          })
        ),
        g =
          (Object(a.a)(
            Object(r.lazy)(function () {
              return n.e(206).then(n.bind(null, 377));
            })
          ),
          Object(a.a)(
            Object(r.lazy)(function () {
              return n.e(207).then(n.bind(null, 574));
            })
          )),
        v = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(208).then(n.bind(null, 575));
          })
        ),
        y = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(209).then(n.bind(null, 576));
          })
        ),
        S = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(210).then(n.bind(null, 577));
          })
        ),
        w = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(211).then(n.bind(null, 578));
          })
        ),
        x = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(212).then(n.bind(null, 579));
          })
        ),
        _ =
          (Object(a.a)(
            Object(r.lazy)(function () {
              return n.e(213).then(n.bind(null, 580));
            })
          ),
          Object(a.a)(
            Object(r.lazy)(function () {
              return n.e(214).then(n.bind(null, 581));
            })
          )),
        P =
          (Object(a.a)(
            Object(r.lazy)(function () {
              return n.e(215).then(n.bind(null, 582));
            })
          ),
          Object(a.a)(
            Object(r.lazy)(function () {
              return n.e(218).then(n.bind(null, 583));
            })
          )),
        k = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(219).then(n.bind(null, 584));
          })
        ),
        N = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(220).then(n.bind(null, 585));
          })
        ),
        C = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(221).then(n.bind(null, 586));
          })
        ),
        E = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(222).then(n.bind(null, 587));
          })
        ),
        z = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(223).then(n.bind(null, 588));
          })
        ),
        I = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(224).then(n.bind(null, 589));
          })
        ),
        M = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(225).then(n.bind(null, 590));
          })
        ),
        A = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(226).then(n.bind(null, 591));
          })
        ),
        T =
          (Object(a.a)(
            Object(r.lazy)(function () {
              return n.e(227).then(n.bind(null, 378));
            })
          ),
          Object(a.a)(
            Object(r.lazy)(function () {
              return n.e(228).then(n.bind(null, 592));
            })
          )),
        L = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(229).then(n.bind(null, 593));
          })
        ),
        R = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(230).then(n.bind(null, 594));
          })
        ),
        B =
          (Object(a.a)(
            Object(r.lazy)(function () {
              return n.e(231).then(n.bind(null, 379));
            })
          ),
          Object(a.a)(
            Object(r.lazy)(function () {
              return n.e(232).then(n.bind(null, 595));
            })
          )),
        H = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(233).then(n.bind(null, 596));
          })
        ),
        D = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(234).then(n.bind(null, 597));
          })
        ),
        G =
          (Object(a.a)(
            Object(r.lazy)(function () {
              return n.e(235).then(n.bind(null, 380));
            })
          ),
          Object(a.a)(
            Object(r.lazy)(function () {
              return n.e(236).then(n.bind(null, 598));
            })
          )),
        F = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(238).then(n.bind(null, 599));
          })
        ),
        U = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(239).then(n.bind(null, 600));
          })
        ),
        W = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(240).then(n.bind(null, 601));
          })
        ),
        K =
          (Object(a.a)(
            Object(r.lazy)(function () {
              return n.e(241).then(n.bind(null, 602));
            })
          ),
          Object(a.a)(
            Object(r.lazy)(function () {
              return n.e(242).then(n.bind(null, 603));
            })
          )),
        V = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(243).then(n.bind(null, 604));
          })
        ),
        q = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(244).then(n.bind(null, 605));
          })
        ),
        J = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(245).then(n.bind(null, 606));
          })
        ),
        Q = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(246).then(n.bind(null, 607));
          })
        ),
        Z = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(248).then(n.bind(null, 608));
          })
        ),
        Y = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(217).then(n.bind(null, 609));
          })
        ),
        X = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(216).then(n.bind(null, 610));
          })
        ),
        $ = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(237).then(n.bind(null, 611));
          })
        ),
        ee = Object(a.a)(
          Object(r.lazy)(function () {
            return n.e(247).then(n.bind(null, 612));
          })
        );
    },
    23: function (e, t, n) {
      "use strict";
      n.d(t, "k", function () {
        return a.g;
      }),
        n.d(t, "a", function () {
          return a.a;
        }),
        n.d(t, "b", function () {
          return a.b;
        }),
        n.d(t, "c", function () {
          return a.c;
        }),
        n.d(t, "d", function () {
          return a.d;
        }),
        n.d(t, "q", function () {
          return a.k;
        }),
        n.d(t, "m", function () {
          return a.h;
        }),
        n.d(t, "o", function () {
          return a.j;
        }),
        n.d(t, "g", function () {
          return a.f;
        }),
        n.d(t, "e", function () {
          return a.e;
        }),
        n.d(t, "j", function () {
          return r.d;
        }),
        n.d(t, "l", function () {
          return r.e;
        }),
        n.d(t, "n", function () {
          return r.f;
        }),
        n.d(t, "h", function () {
          return r.b;
        }),
        n.d(t, "f", function () {
          return r.a;
        }),
        n.d(t, "i", function () {
          return r.c;
        }),
        n.d(t, "p", function () {
          return r.g;
        });
      var a = n(354),
        r = n(525);
    },
    246: function (e, t, n) {
      "use strict";
      var a = n(3),
        r = { setIsHotkeyActive: function () {}, isHotkeyActive: !1 },
        i = n.n(a).a.createContext(r);
      t.a = i;
    },
    274: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      n(3);
      var a = n(0),
        r = function (e) {
          var t = e.sourceSrc,
            n = e.imgSrc,
            r = e.alt,
            i = e.className;
          return Object(a.jsxs)("picture", {
            className: i,
            children: [
              Object(a.jsx)("source", { srcSet: t }),
              Object(a.jsx)("img", { src: n, alt: r }),
            ],
          });
        };
    },
    29: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var a = n(1),
        r = n(16),
        i = n(20),
        c = n(4),
        o = n(17),
        u = n(3),
        s = n(1452),
        l = n(209),
        d = n(67),
        b = ["onSuccess", "onError", "isClearDataBeforeNextRequest"],
        f = function (e, t) {
          var n = Object(u.useState)({ isLoading: !1 }),
            f = Object(o.a)(n, 2),
            m = f[0],
            h = f[1],
            p = Object(u.useRef)(null),
            O = (function () {
              var n = Object(c.a)(
                Object(a.a)().mark(function n(c) {
                  var o, u, f, m, O, j, g, v, y, S;
                  return Object(a.a)().wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (u = (o = t || {}).onSuccess),
                              (f = o.onError),
                              (m = o.isClearDataBeforeNextRequest),
                              (O = Object(i.a)(o, b)),
                              (n.prev = 1),
                              null === (j = p.current) ||
                                void 0 === j ||
                                j.cancel(),
                              (p.current = s.a.CancelToken.source()),
                              h(function (e) {
                                return m
                                  ? { isLoading: !0 }
                                  : { isLoading: !0, data: e.data };
                              }),
                              (n.next = 7),
                              d.c.request(
                                Object(r.a)(
                                  Object(r.a)(
                                    { url: e, cancelToken: p.current.token },
                                    O
                                  ),
                                  c
                                )
                              )
                            );
                          case 7:
                            return (
                              (g = n.sent),
                              h({ isLoading: !1, data: g.data }),
                              (v = Object(l.b)(JSON.parse, [g.config.data])),
                              u && Object(l.b)(u, [g.data, v]),
                              n.abrupt("return", g)
                            );
                          case 14:
                            (n.prev = 14),
                              (n.t0 = n.catch(1)),
                              (y = s.a.isCancel(n.t0)),
                              (S = { isLoading: !1 }),
                              y || (S.error = n.t0),
                              h(S),
                              !y && f && Object(l.b)(f, [n.t0]);
                          case 21:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[1, 14]]
                  );
                })
              );
              return function (e) {
                return n.apply(this, arguments);
              };
            })();
          return [O, m];
        };
    },
    301: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return a;
      }),
        n.d(t, "b", function () {
          return r;
        }),
        n.d(t, "c", function () {
          return i;
        }),
        n.d(t, "d", function () {
          return c;
        }),
        n.d(t, "a", function () {
          return o;
        });
      var a = (function (e) {
          return (e.GIF = "gif"), (e.TEXT = "text"), (e.RAIN = "rain"), e;
        })({}),
        r = (function (e) {
          return (
            (e.TEXT_MESSAGE_RECEIVED = "message_received"),
            (e.GIF_MESSAGE_RECEIVED = "gif_received"),
            (e.RAIN_MESSAGE_RECEIVED = "rain_received"),
            (e.SERVER_MESSAGE_RECEIVED = "server_message"),
            (e.LAST_MESSAGES_RECEIVED = "last_messages"),
            (e.SET_USER_PARAMETERS = "set_user_parameters"),
            (e.ACTIVE_USERS_COUNT = "set_active_users_count"),
            (e.REMOVE_MESSAGE = "remove_message"),
            e
          );
        })({}),
        i = (function (e) {
          return (
            (e.INITIALIZATION = "initialization"),
            (e.CHANGE_CHANNEL = "change_channel"),
            (e.GET_OLDER_MESSAGES = "get_older_messages"),
            (e.SEND_TEXT_MESSAGE = "send_message"),
            (e.SEND_GIF_MESSAGE = "send_gif"),
            (e.RAIN = "rain"),
            (e.REMOVE_MESSAGE = "remove_message"),
            (e.BAN_USER = "ban_user"),
            (e.UNBAN_USER = "unban_user"),
            e
          );
        })({}),
        c = (function (e) {
          return (
            (e.MUTE_USER = "ban"),
            (e.UNMUTE_USER = "unban"),
            (e.REMOVE_MESSAGE = "remove"),
            e
          );
        })({}),
        o = (function (e) {
          return (
            (e.ENGLISH = "English"),
            (e.SPANISH = "Spanish"),
            (e.RUSSIAN = "Russian"),
            (e.PORTUGUESE = "Portuguese"),
            (e.FILIPINO = "Filipino"),
            (e.INDONESIAN = "Indonesian"),
            e
          );
        })({});
    },
    31: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      }),
        n.d(t, "b", function () {
          return b;
        });
      var a = n(16),
        r = n(20),
        i = n(1),
        c = n(4),
        o = n(3),
        u = n(154),
        s = n(0),
        l = ["fallBack"],
        d = (function () {
          var e = Object(c.a)(
            Object(i.a)().mark(function e(t) {
              var n,
                a,
                r = arguments;
              return Object(i.a)().wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n = r.length > 1 && void 0 !== r[1] ? r[1] : 3),
                          (e.prev = 1),
                          (e.next = 4),
                          t
                        );
                      case 4:
                        return (a = e.sent), e.abrupt("return", a);
                      case 8:
                        return (
                          (e.prev = 8),
                          (e.t0 = e.catch(1)),
                          (e.next = 12),
                          Object(u.b)(0.5)
                        );
                      case 12:
                        if (1 !== n) {
                          e.next = 14;
                          break;
                        }
                        throw e.t0;
                      case 14:
                        return e.abrupt("return", d(t, n - 1));
                      case 15:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[1, 8]]
              );
            })
          );
          return function (t) {
            return e.apply(this, arguments);
          };
        })(),
        b = function (e) {
          var t = Object(o.lazy)(function () {
            return d(e());
          });
          return Object(o.forwardRef)(function (e, n) {
            var i = e.fallBack,
              c = Object(r.a)(e, l);
            return Object(s.jsx)(o.Suspense, {
              fallback: i || null,
              children: Object(s.jsx)(
                t,
                Object(a.a)(Object(a.a)({}, c), {}, { ref: n })
              ),
            });
          });
        };
    },
    312: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "LoaderWithLogo", function () {
          return h;
        });
      var a = n(17),
        r = n(3),
        i = n(15),
        c = n(170),
        o = n(274),
        u = n.p + "static/media/wallet.2d6239fc.webp",
        s = n.p + "static/media/wallet.22635a31.png",
        l = n.p + "static/media/coins.3891d043.webp",
        d = n.p + "static/media/coins.5a24b382.png",
        b = n(313),
        f = n.n(b),
        m = n(0),
        h = function (e) {
          var t,
            n = e.transparent,
            b = void 0 !== n && n,
            h = e.className,
            p = (e.builtIn, Object(r.useState)(33)),
            O = Object(a.a)(p, 2),
            j = O[0],
            g = O[1],
            v =
              null !== (t = localStorage.getItem("color-scheme")) &&
              void 0 !== t
                ? t
                : "",
            y = Object(c.a)(),
            S = y.clearIntervals,
            w = y.pushInterval;
          return (
            Object(r.useEffect)(
              function () {
                return (
                  w(function () {
                    g(function (e) {
                      return e + 1;
                    });
                  }, 10),
                  99 === j && S(),
                  function () {
                    S();
                  }
                );
              },
              [j]
            ),
            Object(m.jsx)("div", {
              className: Object(i.a)(f.a.main_wrapper, !b && f.a[v], h),
              children: Object(m.jsxs)("div", {
                className: f.a.wrapper,
                children: [
                  Object(m.jsxs)("div", {
                    className: f.a.logo,
                    children: [
                      Object(m.jsx)("span", { children: "Faucet" }),
                      Object(m.jsx)("span", {
                        className: f.a.logo_blue,
                        children: "Pay",
                      }),
                    ],
                  }),
                  Object(m.jsxs)("div", {
                    className: f.a.external_circle,
                    children: [
                      Object(m.jsx)("div", { className: f.a.inner_circle }),
                      Object(m.jsxs)("div", {
                        className: f.a.content,
                        children: [
                          Object(m.jsx)("div", {
                            className: f.a.coins_wrapper,
                            children: Object(m.jsx)(o.a, {
                              sourceSrc: l,
                              imgSrc: d,
                              className: f.a.coins,
                            }),
                          }),
                          Object(m.jsx)(o.a, {
                            sourceSrc: u,
                            imgSrc: s,
                            className: f.a.wallet,
                          }),
                          Object(m.jsx)("div", {
                            className: f.a.status_wrapper,
                            children: Object(m.jsx)("div", {
                              className: f.a.status,
                              style: {
                                "--load-status-percent": "".concat(j, "%"),
                              },
                            }),
                          }),
                          Object(m.jsxs)("span", {
                            className: f.a.percent,
                            children: [j, "%"],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            })
          );
        };
      t.default = h;
    },
    313: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        main_wrapper: "style_main_wrapper__1mgxl",
        light: "style_light__2IKCa",
        dark: "style_dark__3_8Lw",
        wrapper: "style_wrapper__176lD",
        logo: "style_logo__37CFg",
        logo_blue: "style_logo_blue__STeZs",
        external_circle: "style_external_circle__q3LNm",
        inner_circle: "style_inner_circle__1aXP9",
        content: "style_content__mviAd",
        coins_wrapper: "style_coins_wrapper__3mrSG",
        coins: "style_coins__3uHSa",
        wallet: "style_wallet__3PSg5",
        status_wrapper: "style_status_wrapper__eh3Uq",
        status: "style_status__36_Bq",
        percent: "style_percent__3VAjE",
      };
    },
    316: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return j;
      }),
        n.d(t, "b", function () {
          return g;
        });
      var a = n(1),
        r = n(4),
        i = n(16),
        c = n(17),
        o = n(3),
        u = n(731),
        s = n.n(u),
        l = n(209),
        d = n(71),
        b = n(67),
        f = n(368),
        m = n(554),
        h = n(553),
        p = n(0),
        O = Object(o.lazy)(function () {
          return Promise.all([n.e(0), n.e(70)]).then(n.bind(null, 1153));
        }),
        j = "isClientSeedSetManually",
        g = function (e) {
          var t = e.withoutFairness,
            n = e.game,
            u = e.children,
            g = Object(o.useState)({
              seed: Object(f.a)(),
              isSetManually: JSON.parse(localStorage.getItem(j)) || !1,
            }),
            v = Object(c.a)(g, 2),
            y = v[0],
            S = v[1],
            w = Object(o.useState)({ seed: "", nonce: 0 }),
            x = Object(c.a)(w, 2),
            _ = x[0],
            P = x[1],
            k = Object(o.useState)(!1),
            N = Object(c.a)(k, 2),
            C = N[0],
            E = N[1],
            z = function (e) {
              localStorage.setItem(j, JSON.stringify(e));
            },
            I = (function () {
              var e = Object(r.a)(
                Object(a.a)().mark(function e(t) {
                  var r,
                    i,
                    c,
                    o = arguments;
                  return Object(a.a)().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (i = o.length > 1 && void 0 !== o[1] && o[1]),
                            E(!0),
                            (e.next = 4),
                            Object(l.a)(
                              b.c.get(
                                "/"
                                  .concat(t || n, "/")
                                  .concat(i ? "rotate-seed" : "get-seed")
                              )
                            )
                          );
                        case 4:
                          (c = e.sent),
                            E(!1),
                            null !== c &&
                              void 0 !== c &&
                              null !== (r = c.data) &&
                              void 0 !== r &&
                              r.data.current_seed_hashed &&
                              P(function (e) {
                                var t = {
                                  seed: c.data.data.current_seed_hashed,
                                  nonce: Number(c.data.data.games_played) + 1,
                                };
                                return s()(e, t) ? e : t;
                              });
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(p.jsxs)(h.a.Provider, {
            value: {
              fairness: !t,
              userSeed: y.seed,
              setUserSeed: function () {
                var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : Object(d.a)(),
                  t = arguments.length > 1 ? arguments[1] : void 0;
                localStorage.setItem(m.a.localUserSeedName, e);
                var n = { seed: e };
                "boolean" === typeof t && ((n.isSetManually = t), z(t)),
                  S(function (e) {
                    return Object(i.a)(Object(i.a)({}, e), n);
                  });
              },
              isClientSeedSetManually: y.isSetManually,
              setIsClientSeedSetManually: function (e) {
                z(e),
                  S(function (t) {
                    return Object(i.a)(
                      Object(i.a)({}, t),
                      {},
                      { isSetManually: e }
                    );
                  });
              },
              nonce: _.nonce,
              serverSeed: _.seed,
              setServerSeed: function (e) {
                P(function (t) {
                  return Object(i.a)(Object(i.a)({}, t), {}, { seed: e });
                });
              },
              isServerSeedLoading: C,
              loadServerSeed: function (e) {
                return I(e);
              },
              rotateServerSeed: function (e) {
                return I(e, !0);
              },
              incrementNonce: function () {
                C ||
                  P(function (e) {
                    return Object(i.a)(
                      Object(i.a)({}, e),
                      {},
                      { nonce: e.nonce + 1 }
                    );
                  });
              },
            },
            children: [
              u,
              Object(p.jsx)(o.Suspense, {
                fallback: null,
                children: Object(p.jsx)(O, {}),
              }),
            ],
          });
        };
    },
    317: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      }),
        n.d(t, "b", function () {
          return d;
        });
      var a = n(17),
        r = n(3),
        i = n(34),
        c = n(23),
        o = n(32),
        u = n(29),
        s = n(0),
        l = Object(r.createContext)({
          setActiveAd: function () {},
          ads: [],
          getAds: function () {},
          adsLoading: !1,
          completeSession: function () {},
          completeLoading: !1,
        }),
        d = function (e) {
          var t = e.children,
            n = Object(i.g)(),
            d = Object(r.useState)([]),
            b = Object(a.a)(d, 2),
            f = b[0],
            m = b[1],
            h = Object(r.useRef)("0"),
            p = Object(u.a)("/ptc/get-ads", {
              method: "GET",
              onSuccess: function (e) {
                e.success
                  ? (0 === e.ads.length &&
                      o.b.error({
                        message:
                          "There are no ads available for you to click right now. Please come back in a few hours!",
                        timeOut: 6e3,
                      }),
                    m(e.ads))
                  : o.b.error(e.message);
              },
            }),
            O = Object(a.a)(p, 2),
            j = O[0],
            g = O[1].isLoading,
            v = Object(u.a)("/ptc/complete-session", {
              method: "POST",
              onSuccess: function (e) {
                e.success &&
                  (h.current
                    ? m(
                        f.filter(function (e) {
                          return e.id !== h.current;
                        })
                      )
                    : j()),
                  o.b[e.success ? "success" : "error"](e.message),
                  n.replace(c.m.paidToClickPage.pathName);
              },
            }),
            y = Object(a.a)(v, 2),
            S = y[0],
            w = y[1].isLoading;
          return Object(s.jsx)(l.Provider, {
            value: {
              ads: f,
              adsLoading: g,
              completeLoading: w,
              completeSession: function (e, t) {
                S({ data: { session_key: t, captcha_response: e } });
              },
              getAds: j,
              setActiveAd: function (e) {
                h.current = e;
              },
            },
            children: t,
          });
        };
    },
    318: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "d", function () {
          return o;
        }),
        n.d(t, "i", function () {
          return u;
        }),
        n.d(t, "r", function () {
          return s;
        }),
        n.d(t, "D", function () {
          return l;
        }),
        n.d(t, "G", function () {
          return d;
        }),
        n.d(t, "e", function () {
          return b;
        }),
        n.d(t, "f", function () {
          return f;
        }),
        n.d(t, "g", function () {
          return m;
        }),
        n.d(t, "h", function () {
          return h;
        }),
        n.d(t, "j", function () {
          return p;
        }),
        n.d(t, "k", function () {
          return O;
        }),
        n.d(t, "l", function () {
          return j;
        }),
        n.d(t, "m", function () {
          return g;
        }),
        n.d(t, "n", function () {
          return v;
        }),
        n.d(t, "o", function () {
          return y;
        }),
        n.d(t, "p", function () {
          return S;
        }),
        n.d(t, "q", function () {
          return w;
        }),
        n.d(t, "s", function () {
          return x;
        }),
        n.d(t, "t", function () {
          return _;
        }),
        n.d(t, "u", function () {
          return P;
        }),
        n.d(t, "v", function () {
          return k;
        }),
        n.d(t, "w", function () {
          return N;
        }),
        n.d(t, "x", function () {
          return C;
        }),
        n.d(t, "y", function () {
          return E;
        }),
        n.d(t, "z", function () {
          return z;
        }),
        n.d(t, "A", function () {
          return I;
        }),
        n.d(t, "B", function () {
          return M;
        }),
        n.d(t, "C", function () {
          return A;
        }),
        n.d(t, "E", function () {
          return T;
        }),
        n.d(t, "F", function () {
          return L;
        }),
        n.d(t, "H", function () {
          return R;
        }),
        n.d(t, "I", function () {
          return B;
        }),
        n.d(t, "a", function () {
          return H;
        });
      var a = n(3),
        r = n(163),
        i = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(148).then(n.bind(null, 1159));
          })
        ),
        c = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(149).then(n.bind(null, 1160));
          })
        ),
        o = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(150).then(n.bind(null, 1161));
          })
        ),
        u = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(156).then(n.bind(null, 1162));
          })
        ),
        s = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(166).then(n.bind(null, 1163));
          })
        ),
        l = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(178).then(n.bind(null, 1164));
          })
        ),
        d = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(182).then(n.bind(null, 1165));
          })
        ),
        b = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(151).then(n.bind(null, 1166));
          })
        ),
        f =
          (Object(r.a)(
            Object(a.lazy)(function () {
              return n.e(152).then(n.bind(null, 1167));
            })
          ),
          Object(r.a)(
            Object(a.lazy)(function () {
              return n.e(153).then(n.bind(null, 1168));
            })
          )),
        m = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(154).then(n.bind(null, 1169));
          })
        ),
        h = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(155).then(n.bind(null, 1170));
          })
        ),
        p = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(157).then(n.bind(null, 1171));
          })
        ),
        O = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(158).then(n.bind(null, 1172));
          })
        ),
        j = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(159).then(n.bind(null, 1173));
          })
        ),
        g =
          (Object(r.a)(
            Object(a.lazy)(function () {
              return n.e(160).then(n.bind(null, 1174));
            })
          ),
          Object(r.a)(
            Object(a.lazy)(function () {
              return n.e(161).then(n.bind(null, 1175));
            })
          )),
        v = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(162).then(n.bind(null, 1176));
          })
        ),
        y = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(163).then(n.bind(null, 1177));
          })
        ),
        S = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(164).then(n.bind(null, 1178));
          })
        ),
        w = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(165).then(n.bind(null, 1179));
          })
        ),
        x = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(167).then(n.bind(null, 1180));
          })
        ),
        _ = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(168).then(n.bind(null, 1181));
          })
        ),
        P = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(169).then(n.bind(null, 1182));
          })
        ),
        k = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(170).then(n.bind(null, 1183));
          })
        ),
        N = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(171).then(n.bind(null, 1184));
          })
        ),
        C = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(172).then(n.bind(null, 1185));
          })
        ),
        E = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(173).then(n.bind(null, 1186));
          })
        ),
        z = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(174).then(n.bind(null, 1187));
          })
        ),
        I = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(175).then(n.bind(null, 1188));
          })
        ),
        M = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(176).then(n.bind(null, 1189));
          })
        ),
        A = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(177).then(n.bind(null, 1190));
          })
        ),
        T = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(179).then(n.bind(null, 1191));
          })
        ),
        L = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(180).then(n.bind(null, 1192));
          })
        ),
        R =
          (Object(r.a)(
            Object(a.lazy)(function () {
              return n.e(181).then(n.bind(null, 1193));
            })
          ),
          Object(r.a)(
            Object(a.lazy)(function () {
              return n.e(183).then(n.bind(null, 1194));
            })
          ),
          Object(r.a)(
            Object(a.lazy)(function () {
              return n.e(184).then(n.bind(null, 1195));
            })
          )),
        B = Object(r.a)(
          Object(a.lazy)(function () {
            return n.e(185).then(n.bind(null, 1196));
          })
        ),
        H =
          (Object(r.a)(
            Object(a.lazy)(function () {
              return n.e(186).then(n.bind(null, 1197));
            })
          ),
          Object(r.a)(
            Object(a.lazy)(function () {
              return n.e(147).then(n.bind(null, 1198));
            })
          ));
    },
    319: function (e, t, n) {
      "use strict";
      var a = n(425);
      n.d(t, "a", function () {
        return a.a;
      }),
        n.d(t, "b", function () {
          return a.b;
        }),
        n.d(t, "c", function () {
          return a.c;
        }),
        n.d(t, "d", function () {
          return a.d;
        });
    },
    32: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      }),
        n.d(t, "b", function () {
          return u.a;
        });
      var a = n(17),
        r = n(3),
        i = n(31),
        c = n(546),
        o = n.n(c),
        u = n(130),
        s = n(718),
        l = n.n(s),
        d = n(0),
        b =
          (n(419),
          Object(i.b)(function () {
            return n.e(142).then(n.bind(null, 1425));
          })),
        f = function () {
          var e = Object(r.useState)([]),
            t = Object(a.a)(e, 2),
            n = t[0],
            i = t[1],
            c = Object(r.useRef)({});
          return (
            Object(r.useEffect)(function () {
              var e = u.a.changeEventSubscription(function (e) {
                  i(e);
                }),
                t = u.a.removeEventSubscription(function (e) {
                  var t = c.current[e];
                  t && t.classList.add(o.a.remove);
                });
              return function () {
                e.unsubscribe(), t.unsubscribe();
              };
            }, []),
            Object(d.jsx)("div", {
              className: l.a.notifyBar,
              children: Object(d.jsx)(r.Suspense, {
                fallback: null,
                children: n.map(function (e) {
                  return Object(d.jsx)(
                    b,
                    {
                      ref: function (t) {
                        t && (c.current[e.id] = t);
                      },
                      onClose: function () {
                        return e.closingRequest();
                      },
                      message: e.message,
                      type: e.type,
                      title: e.title,
                      icon: e.icon,
                      backgroundColor: e.backgroundColor,
                      smallTitle: e.smallTitle,
                      removeNotification: e.isRemoving,
                      onCloseAnimationEnd: function () {
                        delete c.current[e.id], e.instantlyClose();
                      },
                      playWhenLeave: e.play,
                      pauseWhenOver: e.stop,
                      timeout: e.timeOut,
                    },
                    e.id
                  );
                }),
              }),
            })
          );
        };
    },
    354: function (e, t, n) {
      "use strict";
      n.d(t, "g", function () {
        return r;
      }),
        n.d(t, "a", function () {
          return i;
        }),
        n.d(t, "b", function () {
          return c;
        }),
        n.d(t, "c", function () {
          return o;
        }),
        n.d(t, "d", function () {
          return u;
        }),
        n.d(t, "k", function () {
          return s;
        }),
        n.d(t, "h", function () {
          return l;
        }),
        n.d(t, "i", function () {
          return d;
        }),
        n.d(t, "j", function () {
          return f;
        }),
        n.d(t, "f", function () {
          return m;
        }),
        n.d(t, "e", function () {
          return h;
        });
      var a = function (e, t) {
          return { pathName: e, pageName: t };
        },
        r = 90,
        i = 8,
        c =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        o = /^(?=.*[\d@#$%&?!(){}\[\]\\\|\/<>=\+-.,:;'"*])(?=.*[a-zA-Z]).{8,}$/,
        u = "referrerId",
        s = {
          access: "access-token",
          refresh: "refresh-token",
          tfa: "tfa-token",
          tfaMessage: "tfa-message",
          userEmail: "user-email",
        },
        l = {
          startPage: a("/", "faucetpay"),
          confirmEmailChangePage: a(
            "/account/change-email",
            "confirm email change"
          ),
          confirmEmailPage: a("/account/confirm-email", "confirm email"),
          faucetPage: a("/page/faucet-list", "faucet list"),
          signUpPage: a("/account/register"),
          dashboardPage: a("/page/user-admin", "Dashboard"),
          offerwallPage: a("/offerwall"),
          paidToClickPage: a("/ptc", "paid to click"),
          advertisePaidToClickPage: a("/advertise/ptc", "paid to click"),
          offerwallHistoryPage: a("/offerwall/history"),
          offerwallFaqPage: a("/offerwall/faq"),
          loginPage: a("/account/login"),
          exchangePage: a("/exchange", "Exchange"),
          plinkoPage: a("/plinko"),
          crashPage: a("/crash"),
          affiliatePage: a(
            "/faucet/custom-link-creator",
            "custom link creator"
          ),
          invitePage: a("/faucet/referral-programme", "referral programme"),
          dicePage: a("/dice"),
          advancedDicePage: a("/advanced-dice"),
          limboPage: a("/limbo"),
          roulettePage: a("/roulette"),
          faucetDashboardPage: a("/page/faucet-admin", "faucet dashboard"),
          fundsManagerPage: a(
            "/page/faucet-admin/funds-management",
            "Funds Manager"
          ),
          confirmPasswordChangePage: a("/account/confirm-password-change"),
          depositPage: a("/deposit"),
          withdrawPage: a("/withdraw"),
          linkedAddressesPage: a("/linked-addresses"),
          settingsPage: a("/account/settings"),
          fundsAllocatorPage: a(
            "/account/balance-allocation",
            "Funds Allocator"
          ),
          faucetManagePage: a("/page/faucet-admin/manage"),
          reportPage: a("/report", "Report abuse"),
          pooledStakingPage: a("/fey/pooled-staking", "pooled staking"),
          stakingPage: a("/fey/pooled-staking/stake", "stake"),
          myStakesPage: a("/fey/pooled-staking/my-stakes", "my stakes"),
          myStakeViewPage: a("/fey/pooled-staking/my-stakes/stake", "stake"),
          rewardPointsPage: a("/page/reward-points", "reward points"),
          sponsoredListingPage: a(
            "/advertise/sponsored-listing",
            "Sponsored Listing"
          ),
          apiPage: a("/page/api-documentation", "API Documentation"),
          feesPage: a("/page/fees", "Fees"),
          transferPage: a("/transfer", "p2p transfer"),
          merchantPage: a("/merchant", "Merchant"),
          webscrPage: a("/merchant/webscr", "webscr"),
          addressCheckerPage: a("/page/balance", "address checker"),
          contactUsPage: a("/page/open-ticket", "contact us"),
          contactWithFreyaPage: a("/page/contact-us", "contact us"),
          faucetScriptsPage: a("/page/faucet-scripts", "faucet scripts"),
          ptcViewPage: a("/ptc/view"),
          termsAndConditionsPage: a(
            "/legal/terms-conditions",
            "Terms and Conditions"
          ),
          gamingDisclaimerPage: a("/gaming-disclaimer", "gaming disclaimer"),
          privacyPolicyPage: a("/legal/privacy-policy", "Privacy Policy"),
          recoveryPasswordPage: a("/account/reset-password"),
          newStatisticsPage: a("/advertise/statistics", "statistics"),
          newSponsoredListingPage: a(
            "/advertise/statistics/sponsored-listing",
            "sponsored listing"
          ),
          newPtcPage: a("/advertise/statistics/ptc", "ptc"),
          pressPage: a("/legal/press", "Press"),
          transactionHistoryPage: a(
            "/merchant/transaction-history",
            "transaction history"
          ),
          disableTfaPage: a("/page/disable-2fa", "disable 2fa"),
          chartRiderPage: a("/chart-rider", "chart rider"),
          blackJackPage: a("/blackjack", "black jack"),
          videoPockerPage: a("/video-pocker", "video pocker"),
          diamondsPage: a("/diamonds", "Diamonds"),
          priceFormulationPage: a(
            "/chart-rider/provably-fair",
            "provably fair"
          ),
          minesPage: a("/mines", "mines"),
          towersPage: a("/towers", "towers"),
          ssoAuthPage: a("/sso", "sso auth"),
          slotGame: a("/slot:id", "slot"),
          slotsList: a("/slots", "slots"),
          adNetwork: a("/ad-network", "ad network"),
        },
        d = [
          {
            from: "/page/user-admin/deposit",
            to: "".concat(l.dashboardPage.pathName, "/wallet?modal=deposit"),
          },
          {
            from: "/page/user-admin/withdraw",
            to: "".concat(l.dashboardPage.pathName, "/wallet?modal=withdraw"),
          },
          {
            from: "/faucet/wager-mining",
            to: "".concat(l.dashboardPage.pathName, "/wager-mining"),
          },
          {
            from: "/fey/stake/:code",
            to: "".concat(l.stakingPage.pathName, "/:code"),
            isDynamic: !0,
          },
          {
            from: "/fey/entry/:code",
            to: "".concat(l.myStakeViewPage.pathName, "/:code"),
            isDynamic: !0,
          },
          { from: "/fey/my-stakes", to: l.myStakesPage.pathName },
        ],
        b = function (e) {
          return {
            sourceSrc: "/images/startPage/".concat(e, ".webp"),
            imgSrc: "/images/startPage/".concat(e, ".png"),
          };
        },
        f = [
          {
            id: 1,
            title: "Faucet List",
            description:
              "Choose from our enormous list of 600+ faucets to claim from. We have a faucet list for each currency we support.",
            src: b("faucet"),
          },
          {
            id: 2,
            title: "Affiliate Programme",
            description:
              "Refer your friends, family and other people to increase your monthly income many folds. Earn money passively!",
            src: b("affiliate"),
          },
          {
            id: 3,
            title: "Exchange",
            description:
              "Use our cryptocurrency exchange to convert your cryptocurrencies in a matter of seconds! In a blink of an eye!",
            src: b("exchange"),
          },
          {
            id: 4,
            title: "Games",
            description:
              "Love games? Sounds great! Win big in our games: Dice, Crash, Limbo Plinko and Roulette",
            src: b("games"),
          },
          {
            id: 5,
            title: "Multiple Cryptos",
            description:
              "Our platform supports all the major currencies such as Bitcoin, Ethereum, Dogecoin, Litecoin and more!",
            src: b("cryptos"),
          },
          {
            id: 6,
            title: "Faucet API",
            description:
              "Are you looking to start your own faucet? Harness\n      the power of our robust faucet API to pay your users.",
            src: b("api"),
          },
          {
            id: 7,
            title: "Advertising",
            description:
              "Get high-quality traffic from our users at FaucetPay which results in great conversions and leads for your business.",
            src: b("offer"),
          },
          {
            id: 8,
            title: "Paid to Click",
            description:
              "You can take some time and click on the advertisements available on our website to earn some additional income.",
            src: b("paid-click"),
          },
          {
            id: 9,
            title: "Offers and Surveys",
            description:
              "Are you looking to make any serious income? Try out our offer walls where you can earn $10 and more every day.",
            src: b("offers"),
          },
          {
            id: 10,
            title: "Merchant API",
            description:
              "We offer a Merchant API that lets you accept cryptocurrencies easily and process them just like any other form of payment.",
            src: b("merchant"),
          },
        ],
        m = {
          telegramGroup: "https://t.me/FaucetpayOfficial",
          faq: "https://faq.faucetpay.io/",
        },
        h = [
          { name: "Afghanistan", code: "AF" },
          { name: "\xc5land Islands", code: "AX" },
          { name: "Albania", code: "AL" },
          { name: "Algeria", code: "DZ" },
          { name: "American Samoa", code: "AS" },
          { name: "AndorrA", code: "AD" },
          { name: "Angola", code: "AO" },
          { name: "Anguilla", code: "AI" },
          { name: "Antarctica", code: "AQ" },
          { name: "Antigua and Barbuda", code: "AG" },
          { name: "Argentina", code: "AR" },
          { name: "Armenia", code: "AM" },
          { name: "Aruba", code: "AW" },
          { name: "Australia", code: "AU" },
          { name: "Austria", code: "AT" },
          { name: "Azerbaijan", code: "AZ" },
          { name: "Bahamas", code: "BS" },
          { name: "Bahrain", code: "BH" },
          { name: "Bangladesh", code: "BD" },
          { name: "Barbados", code: "BB" },
          { name: "Belarus", code: "BY" },
          { name: "Belgium", code: "BE" },
          { name: "Belize", code: "BZ" },
          { name: "Benin", code: "BJ" },
          { name: "Bermuda", code: "BM" },
          { name: "Bhutan", code: "BT" },
          { name: "Bolivia", code: "BO" },
          { name: "Bosnia and Herzegovina", code: "BA" },
          { name: "Botswana", code: "BW" },
          { name: "Bouvet Island", code: "BV" },
          { name: "Brazil", code: "BR" },
          { name: "British Indian Ocean Territory", code: "IO" },
          { name: "Brunei Darussalam", code: "BN" },
          { name: "Bulgaria", code: "BG" },
          { name: "Burkina Faso", code: "BF" },
          { name: "Burundi", code: "BI" },
          { name: "Cambodia", code: "KH" },
          { name: "Cameroon", code: "CM" },
          { name: "Canada", code: "CA" },
          { name: "Cape Verde", code: "CV" },
          { name: "Cayman Islands", code: "KY" },
          { name: "Central African Republic", code: "CF" },
          { name: "Chad", code: "TD" },
          { name: "Chile", code: "CL" },
          { name: "China", code: "CN" },
          { name: "Christmas Island", code: "CX" },
          { name: "Cocos (Keeling) Islands", code: "CC" },
          { name: "Colombia", code: "CO" },
          { name: "Comoros", code: "KM" },
          { name: "Congo", code: "CG" },
          { name: "Congo, The Democratic Republic of the", code: "CD" },
          { name: "Cook Islands", code: "CK" },
          { name: "Costa Rica", code: "CR" },
          { name: "Cote D'Ivoire", code: "CI" },
          { name: "Croatia", code: "HR" },
          { name: "Cuba", code: "CU" },
          { name: "Cyprus", code: "CY" },
          { name: "Czech Republic", code: "CZ" },
          { name: "Denmark", code: "DK" },
          { name: "Djibouti", code: "DJ" },
          { name: "Dominica", code: "DM" },
          { name: "Dominican Republic", code: "DO" },
          { name: "Ecuador", code: "EC" },
          { name: "Egypt", code: "EG" },
          { name: "El Salvador", code: "SV" },
          { name: "Equatorial Guinea", code: "GQ" },
          { name: "Eritrea", code: "ER" },
          { name: "Estonia", code: "EE" },
          { name: "Ethiopia", code: "ET" },
          { name: "Falkland Islands (Malvinas)", code: "FK" },
          { name: "Faroe Islands", code: "FO" },
          { name: "Fiji", code: "FJ" },
          { name: "Finland", code: "FI" },
          { name: "France", code: "FR" },
          { name: "French Guiana", code: "GF" },
          { name: "French Polynesia", code: "PF" },
          { name: "French Southern Territories", code: "TF" },
          { name: "Gabon", code: "GA" },
          { name: "Gambia", code: "GM" },
          { name: "Georgia", code: "GE" },
          { name: "Germany", code: "DE" },
          { name: "Ghana", code: "GH" },
          { name: "Gibraltar", code: "GI" },
          { name: "Greece", code: "GR" },
          { name: "Greenland", code: "GL" },
          { name: "Grenada", code: "GD" },
          { name: "Guadeloupe", code: "GP" },
          { name: "Guam", code: "GU" },
          { name: "Guatemala", code: "GT" },
          { name: "Guernsey", code: "GG" },
          { name: "Guinea", code: "GN" },
          { name: "Guinea-Bissau", code: "GW" },
          { name: "Guyana", code: "GY" },
          { name: "Haiti", code: "HT" },
          { name: "Heard Island and Mcdonald Islands", code: "HM" },
          { name: "Holy See (Vatican City State)", code: "VA" },
          { name: "Honduras", code: "HN" },
          { name: "Hong Kong", code: "HK" },
          { name: "Hungary", code: "HU" },
          { name: "Iceland", code: "IS" },
          { name: "India", code: "IN" },
          { name: "Indonesia", code: "ID" },
          { name: "Iran, Islamic Republic Of", code: "IR" },
          { name: "Iraq", code: "IQ" },
          { name: "Ireland", code: "IE" },
          { name: "Isle of Man", code: "IM" },
          { name: "Israel", code: "IL" },
          { name: "Italy", code: "IT" },
          { name: "Jamaica", code: "JM" },
          { name: "Japan", code: "JP" },
          { name: "Jersey", code: "JE" },
          { name: "Jordan", code: "JO" },
          { name: "Kazakhstan", code: "KZ" },
          { name: "Kenya", code: "KE" },
          { name: "Kiribati", code: "KI" },
          { name: "Korea, Democratic People'S Republic of", code: "KP" },
          { name: "Korea, Republic of", code: "KR" },
          { name: "Kuwait", code: "KW" },
          { name: "Kyrgyzstan", code: "KG" },
          { name: "Lao People'S Democratic Republic", code: "LA" },
          { name: "Latvia", code: "LV" },
          { name: "Lebanon", code: "LB" },
          { name: "Lesotho", code: "LS" },
          { name: "Liberia", code: "LR" },
          { name: "Libyan Arab Jamahiriya", code: "LY" },
          { name: "Liechtenstein", code: "LI" },
          { name: "Lithuania", code: "LT" },
          { name: "Luxembourg", code: "LU" },
          { name: "Macao", code: "MO" },
          { name: "Macedonia, The Former Yugoslav Republic of", code: "MK" },
          { name: "Madagascar", code: "MG" },
          { name: "Malawi", code: "MW" },
          { name: "Malaysia", code: "MY" },
          { name: "Maldives", code: "MV" },
          { name: "Mali", code: "ML" },
          { name: "Malta", code: "MT" },
          { name: "Marshall Islands", code: "MH" },
          { name: "Martinique", code: "MQ" },
          { name: "Mauritania", code: "MR" },
          { name: "Mauritius", code: "MU" },
          { name: "Mayotte", code: "YT" },
          { name: "Mexico", code: "MX" },
          { name: "Micronesia, Federated States of", code: "FM" },
          { name: "Moldova, Republic of", code: "MD" },
          { name: "Monaco", code: "MC" },
          { name: "Mongolia", code: "MN" },
          { name: "Montserrat", code: "MS" },
          { name: "Morocco", code: "MA" },
          { name: "Mozambique", code: "MZ" },
          { name: "Myanmar", code: "MM" },
          { name: "Namibia", code: "NA" },
          { name: "Nauru", code: "NR" },
          { name: "Nepal", code: "NP" },
          { name: "Netherlands", code: "NL" },
          { name: "Netherlands Antilles", code: "AN" },
          { name: "New Caledonia", code: "NC" },
          { name: "New Zealand", code: "NZ" },
          { name: "Nicaragua", code: "NI" },
          { name: "Niger", code: "NE" },
          { name: "Nigeria", code: "NG" },
          { name: "Niue", code: "NU" },
          { name: "Norfolk Island", code: "NF" },
          { name: "Northern Mariana Islands", code: "MP" },
          { name: "Norway", code: "NO" },
          { name: "Oman", code: "OM" },
          { name: "Pakistan", code: "PK" },
          { name: "Palau", code: "PW" },
          { name: "Palestinian Territory, Occupied", code: "PS" },
          { name: "Panama", code: "PA" },
          { name: "Papua New Guinea", code: "PG" },
          { name: "Paraguay", code: "PY" },
          { name: "Peru", code: "PE" },
          { name: "Philippines", code: "PH" },
          { name: "Pitcairn", code: "PN" },
          { name: "Poland", code: "PL" },
          { name: "Portugal", code: "PT" },
          { name: "Puerto Rico", code: "PR" },
          { name: "Qatar", code: "QA" },
          { name: "Reunion", code: "RE" },
          { name: "Romania", code: "RO" },
          { name: "Russian Federation", code: "RU" },
          { name: "RWANDA", code: "RW" },
          { name: "Saint Helena", code: "SH" },
          { name: "Saint Kitts and Nevis", code: "KN" },
          { name: "Saint Lucia", code: "LC" },
          { name: "Saint Pierre and Miquelon", code: "PM" },
          { name: "Saint Vincent and the Grenadines", code: "VC" },
          { name: "Samoa", code: "WS" },
          { name: "San Marino", code: "SM" },
          { name: "Sao Tome and Principe", code: "ST" },
          { name: "Saudi Arabia", code: "SA" },
          { name: "Senegal", code: "SN" },
          { name: "Serbia and Montenegro", code: "CS" },
          { name: "Seychelles", code: "SC" },
          { name: "Sierra Leone", code: "SL" },
          { name: "Singapore", code: "SG" },
          { name: "Slovakia", code: "SK" },
          { name: "Slovenia", code: "SI" },
          { name: "Solomon Islands", code: "SB" },
          { name: "Somalia", code: "SO" },
          { name: "South Africa", code: "ZA" },
          { name: "South Georgia and the South Sandwich Islands", code: "GS" },
          { name: "Spain", code: "ES" },
          { name: "Sri Lanka", code: "LK" },
          { name: "Sudan", code: "SD" },
          { name: "Suriname", code: "SR" },
          { name: "Svalbard and Jan Mayen", code: "SJ" },
          { name: "Swaziland", code: "SZ" },
          { name: "Sweden", code: "SE" },
          { name: "Switzerland", code: "CH" },
          { name: "Syrian Arab Republic", code: "SY" },
          { name: "Taiwan, Province of China", code: "TW" },
          { name: "Tajikistan", code: "TJ" },
          { name: "Tanzania, United Republic of", code: "TZ" },
          { name: "Thailand", code: "TH" },
          { name: "Timor-Leste", code: "TL" },
          { name: "Togo", code: "TG" },
          { name: "Tokelau", code: "TK" },
          { name: "Tonga", code: "TO" },
          { name: "Trinidad and Tobago", code: "TT" },
          { name: "Tunisia", code: "TN" },
          { name: "Turkey", code: "TR" },
          { name: "Turkmenistan", code: "TM" },
          { name: "Turks and Caicos Islands", code: "TC" },
          { name: "Tuvalu", code: "TV" },
          { name: "Uganda", code: "UG" },
          { name: "Ukraine", code: "UA" },
          { name: "United Arab Emirates", code: "AE" },
          { name: "United Kingdom", code: "GB" },
          { name: "United States", code: "US" },
          { name: "United States Minor Outlying Islands", code: "UM" },
          { name: "Uruguay", code: "UY" },
          { name: "Uzbekistan", code: "UZ" },
          { name: "Vanuatu", code: "VU" },
          { name: "Venezuela", code: "VE" },
          { name: "Viet Nam", code: "VN" },
          { name: "Virgin Islands, British", code: "VG" },
          { name: "Virgin Islands, U.S.", code: "VI" },
          { name: "Wallis and Futuna", code: "WF" },
          { name: "Western Sahara", code: "EH" },
          { name: "Yemen", code: "YE" },
          { name: "Zambia", code: "ZM" },
          { name: "Zimbabwe", code: "ZW" },
        ];
    },
    355: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return N;
      }),
        n.d(t, "a", function () {
          return E;
        });
      var a = n(19),
        r = n(30),
        i = n(17),
        c = n(34),
        o = n(1467),
        u = n(15),
        s = n(3),
        l = n(54),
        d = n(89),
        b = n(21),
        f = n(67),
        m = n(23),
        h = n(545),
        p = n(424),
        O = n(698),
        j = n(31),
        g = n(120),
        v = n(10),
        y = n(319),
        S = n(738),
        w = n.n(S),
        x = n(0),
        _ = Object(s.lazy)(function () {
          return Object(j.a)(
            Promise.all([n.e(0), n.e(8), n.e(36), n.e(4), n.e(42)]).then(
              n.bind(null, 1453)
            )
          );
        }),
        P = Object(s.createContext)({ visible: !0, chatIsOpen: !1 }),
        k = [
          m.m.signUpPage.pathName,
          m.m.loginPage.pathName,
          m.m.recoveryPasswordPage.pathName,
        ],
        N = function () {
          return Object(s.useContext)(P);
        },
        C = "chatIsOpenOnPagesWithGames",
        E = function (e) {
          var t,
            n = e.children,
            j = Object(l.b)(y.d),
            S = Object(s.useState)(0),
            N = Object(i.a)(S, 2),
            E = N[0],
            z = N[1],
            I = Object(b.n)(),
            M = I.isLight,
            A = I.setIsLight,
            T = Object(d.a)(),
            L = T.width,
            R = T.height,
            B = Object(c.h)(),
            H = Object(s.useRef)(),
            D = Object(s.useRef)(j),
            G = Object(s.useRef)(null);
          D.current = j;
          var F = Object(b.i)().wsToken,
            U = Object(s.useState)(!1),
            W = Object(i.a)(U, 2),
            K = W[0],
            V = W[1],
            q = localStorage.getItem(C),
            J = Object(s.useState)(!q || "true" === q),
            Q = Object(i.a)(J, 2),
            Z = Q[0],
            Y = Q[1],
            X = Object(s.useState)(!0),
            $ = Object(i.a)(X, 2),
            ee = $[0],
            te = $[1],
            ne = Object(s.useState)(!1),
            ae = Object(i.a)(ne, 2),
            re = ae[0],
            ie = ae[1],
            ce = function () {
              var e = Object(p.a)().hidden;
              return document[e] ? te(!1) : te(!0);
            },
            oe = Object(s.useMemo)(
              function () {
                return k.includes(B.pathname);
              },
              [B]
            ),
            ue = function (e) {
              Y(e), localStorage.setItem(C, JSON.stringify(e));
            },
            se = Object(s.useMemo)(
              function () {
                var e,
                  t = B.pathname.split(":")[0];
                return !(
                  null ===
                    (e = h.a.find(function (e) {
                      if ("string" === typeof e.path)
                        return e.path.split(":")[0] === t;
                      if (Array.isArray(e.path)) {
                        var n,
                          a = Object(r.a)(e.path);
                        try {
                          for (a.s(); !(n = a.n()).done; ) {
                            if (n.value.split(":")[0] === t) return !0;
                          }
                        } catch (i) {
                          a.e(i);
                        } finally {
                          a.f();
                        }
                        return !1;
                      }
                      return !1;
                    })) ||
                  void 0 === e ||
                  !e.withChat
                );
              },
              [B.pathname]
            ),
            le = function (e) {
              var t, n;
              e ||
                (e =
                  (null === (n = document.scrollingElement) || void 0 === n
                    ? void 0
                    : n.scrollTop) || 0);
              var a =
                  null === (t = document.scrollingElement) || void 0 === t
                    ? void 0
                    : t.querySelector("#page-layout"),
                r = D.current ? y.c : y.a,
                i =
                  window.innerHeight +
                  e -
                  ((null === a || void 0 === a ? void 0 : a.scrollHeight) ||
                    0) +
                  y.a;
              z(i > 0 ? Math.min(r, i) : 0);
            };
          Object(s.useEffect)(
            function () {
              if (G.current) {
                var e = Object(o.a)(G.current, "scroll").subscribe(function () {
                    var e,
                      t =
                        (null === (e = G.current) || void 0 === e
                          ? void 0
                          : e.scrollTop) || 0;
                    le(t), 0 === t ? V(!1) : t > 0 && V(!0);
                  }),
                  t = Object(p.a)().event;
                return (
                  document.addEventListener(t, ce),
                  function () {
                    e.unsubscribe(), document.removeEventListener(t, ce);
                  }
                );
              }
            },
            [G]
          ),
            Object(s.useEffect)(
              function () {
                se && Z && !re && ie(!0);
              },
              [se, Z]
            ),
            Object(s.useEffect)(
              function () {
                var e;
                null === (e = G.current) ||
                  void 0 === e ||
                  e.scrollTo({ behavior: "smooth", top: 0 }),
                  le();
              },
              [B.pathname]
            );
          var de = Object(s.useCallback)(function (e) {
            if (e instanceof Element) {
              var t = new ResizeObserver(function (e) {
                Object(i.a)(e, 1)[0].target;
                le();
              });
              t.observe(e), Object(g.a)(e, G), (H.current = t);
            }
          }, []);
          return (
            Object(s.useEffect)(function () {
              return function () {
                var e;
                G.current &&
                  (null === (e = H.current) ||
                    void 0 === e ||
                    e.unobserve(G.current));
              };
            }, []),
            Object(s.useEffect)(
              function () {
                se && le();
              },
              [L, R]
            ),
            Object(s.useEffect)(
              function () {
                if (se)
                  return (
                    f.b.openConnection(),
                    function () {
                      f.b.closeConnection();
                    }
                  );
              },
              [se]
            ),
            Object(s.useEffect)(
              function () {
                if (se)
                  return (
                    !F && f.b.initialized && f.b.closeAndReconnect(),
                    F
                      ? (f.b.setToken(F),
                        f.b.initUser(),
                        function () {
                          f.b.setToken(null);
                        })
                      : void 0
                  );
              },
              [F, se]
            ),
            Object(x.jsxs)(P.Provider, {
              value: { visible: ee, chatIsOpen: se && Z },
              children: [
                !oe &&
                  Object(x.jsx)(O.d, {
                    darkMode: M,
                    setDarkMode: A,
                    isScroll: K,
                  }),
                B.pathname !== m.m.ssoAuthPage.pathName &&
                  Object(x.jsxs)("div", {
                    ref: de,
                    id: "page-layout",
                    className: Object(u.a)(
                      w.a.pageLayoutWrapper,
                      ((t = {}),
                      Object(a.a)(t, w.a.chatOpen, se && Z),
                      Object(a.a)(t, w.a.withoutHeader, oe),
                      t)
                    ),
                    children: [
                      Object(x.jsx)(O.a, {}),
                      Object(x.jsx)(s.Suspense, {
                        fallback: Object(x.jsx)(v.LoaderWithLogo, {
                          transparent: !0,
                        }),
                        children: n,
                      }),
                      re &&
                        Object(x.jsx)(s.Suspense, {
                          fallback: null,
                          children: Object(x.jsx)(_, {
                            active: se && Z,
                            closeChat: function () {
                              return ue(!1);
                            },
                          }),
                        }),
                      se &&
                        Object(x.jsx)(O.b, {
                          setOpenChat: function () {
                            return ue(!Z);
                          },
                          toAllowChat: function () {
                            return ie(!0);
                          },
                          isAllowChat: re,
                          isChatOpen: Z,
                          position: E,
                        }),
                    ],
                  }),
              ],
            })
          );
        };
    },
    356: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n(39),
        r = n(23),
        i = n(22),
        c = n(736),
        o = n.n(c),
        u = n(0),
        s = function (e) {
          var t = e.className;
          return Object(u.jsx)(a.b, {
            to: { pathname: r.m.startPage.pathName },
            "aria-label": "faucetpay homepage",
            className: t,
            children: Object(u.jsx)(i.v, { className: o.a.logo }),
          });
        };
    },
    368: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var a = n(71),
        r = n(554),
        i = function () {
          var e = localStorage.getItem(r.a.localUserSeedName);
          return (
            e ||
              ((e = Object(a.a)()),
              localStorage.setItem(r.a.localUserSeedName, e)),
            e
          );
        };
    },
    419: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var a = n(24),
        r = n(25),
        i = (function () {
          function e(t) {
            var n = this,
              r = t.type,
              i = t.timeOut,
              c = t.message,
              o = t.title,
              u = t.manager,
              s = t.icon,
              l = t.smallTitle,
              d = t.backgroundColor;
            Object(a.a)(this, e),
              (this.manager = void 0),
              (this.id = void 0),
              (this.type = void 0),
              (this.message = void 0),
              (this.timeOut = void 0),
              (this.title = void 0),
              (this.icon = void 0),
              (this.smallTitle = void 0),
              (this.backgroundColor = void 0),
              (this.instantlyClose = function () {
                n.manager.deleteNotification(n.id);
              }),
              (this.stop = function () {
                n.manager.stop(n.id);
              }),
              (this.play = function () {
                n.timeOut !== 1 / 0 && n.manager.play(n.id, n.timeOut);
              }),
              (this.id = Date.now()),
              (this.type = r),
              (this.message = c),
              (this.timeOut = i),
              (this.title = o),
              (this.manager = u),
              (this.icon = s),
              (this.smallTitle = l),
              (this.backgroundColor = d);
          }
          return (
            Object(r.a)(e, [
              {
                key: "isRemoving",
                get: function () {
                  return this.manager.isRemovingNotification(this.id);
                },
              },
              {
                key: "closingRequest",
                value: function () {
                  this.manager.deleteNotificationRequest(this.id);
                },
              },
            ]),
            e
          );
        })();
    },
    423: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        headerWrapper: "style_headerWrapper__1rkwL",
        mobileButtonWrapper: "style_mobileButtonWrapper__-nzbT",
        burgerButton: "style_burgerButton__3NxJW",
        header_purple: "style_header_purple__J8xdR",
        header_mobile: "style_header_mobile__1CRI-",
        fill_background: "style_fill_background__2PIzc",
        header_dark: "style_header_dark__2p4uQ",
        multiplyBtcIcon: "style_multiplyBtcIcon__1mZ-g",
      };
    },
    424: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a = function () {
        return "undefined" !== typeof document.msHidden
          ? { hidden: "msHidden", event: "msvisibilitychange" }
          : "undefined" !== typeof document.webkitHidden
          ? { hidden: "webkitHidden", event: "webkitvisibilitychange" }
          : { hidden: "hidden", event: "visibilitychange" };
      };
    },
    425: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return c;
        }),
        n.d(t, "d", function () {
          return o;
        }),
        n.d(t, "b", function () {
          return u;
        });
      var a = n(737),
        r = n.n(a),
        i =
          (parseInt(r.a.headerHeight),
          parseInt(r.a.mobileHeader),
          parseInt(r.a.footerHeight)),
        c = parseInt(r.a.mobileFooterHeight),
        o = parseInt(r.a.mobileWidth),
        u = parseInt(r.a.inviteMobile2);
      parseInt(r.a.gameMobile1), parseInt(r.a.gameMobile4);
    },
    47: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var a = n(3),
        r = function (e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : window,
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = Object(a.useRef)(t);
          Object(a.useEffect)(
            function () {
              i.current = t;
            },
            [t]
          ),
            Object(a.useEffect)(
              function () {
                if (n && n.addEventListener) {
                  var t = function (e) {
                    return i.current(e);
                  };
                  return (
                    n.addEventListener(e, t, r),
                    function () {
                      n.removeEventListener(e, t);
                    }
                  );
                }
              },
              [e, n]
            );
        };
    },
    525: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return r;
      }),
        n.d(t, "e", function () {
          return i;
        }),
        n.d(t, "f", function () {
          return c;
        }),
        n.d(t, "b", function () {
          return o;
        }),
        n.d(t, "a", function () {
          return u;
        }),
        n.d(t, "c", function () {
          return s;
        }),
        n.d(t, "g", function () {
          return f;
        });
      var a = n(354),
        r =
          (a.h.faucetPage.pathName,
          a.h.offerwallPage.pathName,
          a.h.paidToClickPage.pathName,
          a.h.invitePage.pathName,
          a.h.dicePage.pathName,
          a.h.crashPage.pathName,
          a.h.limboPage.pathName,
          a.h.roulettePage.pathName,
          a.h.plinkoPage.pathName,
          {
            loading: "Loading...",
            zero: "0.00000000",
            toggleWords: {
              manual: "Manual",
              auto: "Auto",
              effects: "Effects",
              trends: "Trends",
              high: "High",
              low: "Low",
            },
            toggleGameStyle: { bg: "#555477", handle: "#FFFFFF" },
          }),
        i = 900,
        c = 1150,
        o = 1250,
        u = 650,
        s = 1050,
        l = "#B9B9FF",
        d = "#ffffff",
        b = "#343455",
        f = {
          standard: {
            light: {
              offColor: { bg: l, handle: d },
              onColor: { bg: l, handle: d },
            },
            dark: {
              offColor: { bg: b, handle: d },
              onColor: { bg: b, handle: d },
            },
          },
          faucet: {
            light: {
              offColor: { bg: "#AAAABB", handle: d },
              onColor: { bg: "#A6A5F9", handle: d },
            },
            dark: {
              offColor: { bg: "#3A3B55", handle: d },
              onColor: { bg: "#444292", handle: d },
            },
          },
        };
    },
    54: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return c;
      });
      var a = n(17),
        r = n(3),
        i = n(100),
        c = function (e) {
          var t = Object(r.useState)(!1),
            n = Object(a.a)(t, 2),
            c = n[0],
            o = n[1];
          return (
            Object(r.useEffect)(function () {
              o(window.innerWidth <= e);
              var t = i.a.subscribe(function (t) {
                o(t.width <= e);
              });
              return function () {
                return t.unsubscribe();
              };
            }, []),
            c
          );
        };
      t.a = c;
    },
    545: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return le;
      });
      var a = n(3),
        r = n(23),
        i = n(31),
        c = Object(a.lazy)(function () {
          return Object(i.a)(n.e(128).then(n.bind(null, 754)));
        }),
        o = Object(a.lazy)(function () {
          return Object(i.a)(n.e(119).then(n.bind(null, 755)));
        }),
        u = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(5), n.e(4), n.e(21)]).then(
              n.bind(null, 1370)
            )
          );
        }),
        s = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(16), n.e(59)]).then(
              n.bind(null, 1395)
            )
          );
        }),
        l = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(4), n.e(50)]).then(
              n.bind(null, 1376)
            )
          );
        }),
        d = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(3), n.e(7), n.e(39)]).then(
              n.bind(null, 1380)
            )
          );
        }),
        b = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(43)]).then(n.bind(null, 1381))
          );
        }),
        f = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(44)]).then(n.bind(null, 1393))
          );
        }),
        m = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(69)]).then(
              n.bind(null, 1404)
            )
          );
        }),
        h = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(48)]).then(n.bind(null, 1384))
          );
        }),
        p = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(13), n.e(76)]).then(
              n.bind(null, 1396)
            )
          );
        }),
        O = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(5), n.e(4), n.e(30)]).then(
              n.bind(null, 697)
            )
          );
        }),
        j = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(1), n.e(2), n.e(3), n.e(81)]).then(
              n.bind(null, 1405)
            )
          );
        }),
        g = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(16), n.e(74)]).then(
              n.bind(null, 1400)
            )
          );
        }),
        v = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(5), n.e(107), n.e(31)]).then(
              n.bind(null, 1366)
            )
          );
        }),
        y = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(5), n.e(4), n.e(29)]).then(
              n.bind(null, 1379)
            )
          );
        }),
        S = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(5), n.e(4), n.e(23)]).then(
              n.bind(null, 1368)
            )
          );
        }),
        w = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(41)]).then(
              n.bind(null, 1385)
            )
          );
        }),
        x = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(49)]).then(
              n.bind(null, 961)
            )
          );
        }),
        _ = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(52)]).then(n.bind(null, 1386))
          );
        }),
        P = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(2), n.e(3), n.e(10), n.e(37)]).then(
              n.bind(null, 1367)
            )
          );
        }),
        k = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(58)]).then(
              n.bind(null, 1382)
            )
          );
        }),
        N = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(33)]).then(
              n.bind(null, 1372)
            )
          );
        }),
        C = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(47)]).then(n.bind(null, 1401))
          );
        }),
        E = Object(a.lazy)(function () {
          return Object(i.a)(n.e(124).then(n.bind(null, 1011)));
        }),
        z = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(51)]).then(
              n.bind(null, 1013)
            )
          );
        }),
        I = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(53)]).then(
              n.bind(null, 1015)
            )
          );
        }),
        M = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(1), n.e(65)]).then(n.bind(null, 1017))
          );
        }),
        A = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(1), n.e(64)]).then(n.bind(null, 1019))
          );
        }),
        T = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(45)]).then(n.bind(null, 1397))
          );
        }),
        L = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(11), n.e(46)]).then(
              n.bind(null, 1371)
            )
          );
        }),
        R = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(11)]).then(n.bind(null, 524))
          );
        }),
        B = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(1), n.e(66)]).then(n.bind(null, 1040))
          );
        }),
        H = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(56)]).then(
              n.bind(null, 1042)
            )
          );
        }),
        D = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(1), n.e(72)]).then(n.bind(null, 1373))
          );
        }),
        G = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(1), n.e(96)]).then(n.bind(null, 1398))
          );
        }),
        F = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(13), n.e(125)]).then(n.bind(null, 1052))
          );
        }),
        U = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(1), n.e(103)]).then(n.bind(null, 1054))
          );
        }),
        W = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(1), n.e(102)]).then(n.bind(null, 1057))
          );
        }),
        K = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(1), n.e(92)]).then(n.bind(null, 1060))
          );
        }),
        V = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(2), n.e(3), n.e(94)]).then(n.bind(null, 1062))
          );
        }),
        q = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(2), n.e(3), n.e(91)]).then(n.bind(null, 1063))
          );
        }),
        J = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(35)]).then(
              n.bind(null, 1369)
            )
          );
        }),
        Q = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(10), n.e(85)]).then(
              n.bind(null, 1402)
            )
          );
        }),
        Z = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(1), n.e(62)]).then(n.bind(null, 1406))
          );
        }),
        Y = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(1), n.e(101)]).then(n.bind(null, 1081))
          );
        }),
        X = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(2), n.e(3), n.e(55)]).then(
              n.bind(null, 1084)
            )
          );
        }),
        $ = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(6), n.e(4), n.e(32)]).then(
              n.bind(null, 1086)
            )
          );
        }),
        ee = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(2), n.e(3), n.e(7), n.e(25)]).then(
              n.bind(null, 1394)
            )
          );
        }),
        te = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(5), n.e(4), n.e(24)]).then(
              n.bind(null, 1383)
            )
          );
        }),
        ne = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(5), n.e(4), n.e(27)]).then(
              n.bind(null, 1389)
            )
          );
        }),
        ae = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(5), n.e(4), n.e(28)]).then(
              n.bind(null, 1390)
            )
          );
        }),
        re = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(9), n.e(67)]).then(
              n.bind(null, 1387)
            )
          );
        }),
        ie = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(5), n.e(4), n.e(26)]).then(
              n.bind(null, 1391)
            )
          );
        }),
        ce = Object(a.lazy)(function () {
          return Object(i.a)(n.e(129).then(n.bind(null, 1137)));
        }),
        oe = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(108), n.e(4), n.e(34)]).then(
              n.bind(null, 1374)
            )
          );
        }),
        ue = Object(a.lazy)(function () {
          return Object(i.a)(
            Promise.all([n.e(0), n.e(1), n.e(80)]).then(n.bind(null, 1392))
          );
        }),
        se = Object(a.lazy)(function () {
          return Object(i.a)(n.e(84).then(n.bind(null, 1378)));
        }),
        le = [
          { path: r.m.crashPage.pathName, component: u, withChat: !0 },
          {
            path: "".concat(r.m.confirmEmailChangePage.pathName, "/:hash"),
            component: c,
          },
          {
            path: "".concat(r.m.confirmEmailPage.pathName, "/:hash"),
            component: o,
          },
          {
            path: r.m.transactionHistoryPage.pathName,
            component: Z,
            noLogInRedirectPath: r.m.loginPage.pathName,
          },
          {
            path: r.m.dashboardPage.pathName,
            component: s,
            noLogInRedirectPath: r.m.loginPage.pathName,
          },
          { path: r.m.exchangePage.pathName, component: l },
          { path: r.m.faucetPage.pathName, component: d },
          { path: r.m.affiliatePage.pathName, component: f },
          { path: r.m.invitePage.pathName, component: b },
          { path: r.m.loginPage.pathName, component: m },
          { path: r.m.offerwallPage.pathName, component: h },
          { path: "".concat(r.m.ptcViewPage.pathName, "/:id"), component: F },
          { path: r.m.paidToClickPage.pathName, component: p },
          { path: r.m.plinkoPage.pathName, component: O, withChat: !0 },
          { path: r.m.signUpPage.pathName, component: j },
          { path: r.m.limboPage.pathName, component: v, withChat: !0 },
          { path: r.m.dicePage.pathName, component: y, withChat: !0 },
          { path: r.m.advancedDicePage.pathName, component: $ },
          { path: r.m.roulettePage.pathName, component: S, withChat: !0 },
          {
            path: r.m.fundsManagerPage.pathName,
            component: x,
            noLogInRedirectPath: r.m.loginPage.pathName,
          },
          {
            path: r.m.fundsAllocatorPage.pathName,
            component: _,
            noLogInRedirectPath: r.m.loginPage.pathName,
          },
          {
            path: r.m.faucetManagePage.pathName,
            component: P,
            noLogInRedirectPath: r.m.loginPage.pathName,
          },
          {
            path: r.m.faucetDashboardPage.pathName,
            component: w,
            noLogInRedirectPath: r.m.loginPage.pathName,
          },
          {
            path: r.m.settingsPage.pathName,
            component: k,
            noLogInRedirectPath: r.m.loginPage.pathName,
          },
          { path: r.m.pooledStakingPage.pathName, component: N },
          { path: r.m.rewardPointsPage.pathName, component: C },
          {
            path: r.m.advertisePaidToClickPage.pathName,
            component: z,
            noLogInRedirectPath: r.m.loginPage.pathName,
          },
          {
            path: r.m.sponsoredListingPage.pathName,
            component: I,
            noLogInRedirectPath: r.m.loginPage.pathName,
          },
          {
            path: r.m.reportPage.pathName,
            component: Q,
            noLogInRedirectPath: r.m.loginPage.pathName,
          },
          { path: r.m.apiPage.pathName, component: M },
          { path: r.m.feesPage.pathName, component: A },
          { path: r.m.transferPage.pathName, component: T },
          { path: r.m.webscrPage.pathName, component: R },
          { path: r.m.merchantPage.pathName, component: L },
          {
            path: "".concat(r.m.addressCheckerPage.pathName, "/:address"),
            component: B,
          },
          { path: r.m.contactUsPage.pathName, component: H },
          { path: r.m.contactWithFreyaPage.pathName, component: D },
          { path: r.m.faucetScriptsPage.pathName, component: G },
          { path: r.m.startPage.pathName, component: g, exact: !0 },
          { path: r.m.termsAndConditionsPage.pathName, component: U },
          { path: r.m.privacyPolicyPage.pathName, component: W },
          { path: r.m.gamingDisclaimerPage.pathName, component: K },
          {
            path: "".concat(r.m.recoveryPasswordPage.pathName, "/:hash"),
            component: V,
          },
          { path: r.m.recoveryPasswordPage.pathName, component: q },
          { path: r.m.newStatisticsPage.pathName, component: J },
          { path: r.m.pressPage.pathName, component: Y },
          { path: r.m.disableTfaPage.pathName, component: X },
          { path: r.m.priceFormulationPage.pathName, component: ee },
          { path: r.m.blackJackPage.pathName, component: ae, withChat: !0 },
          { path: r.m.videoPockerPage.pathName, component: re },
          { path: r.m.diamondsPage.pathName, component: ie, withChat: !0 },
          { path: r.m.towersPage.pathName, component: ne, withChat: !0 },
          { path: r.m.minesPage.pathName, component: te, withChat: !0 },
          {
            path: "".concat(r.m.ssoAuthPage.pathName, "/:key"),
            component: ce,
            withChat: !1,
          },
          { path: r.m.slotsList.pathName, component: ue, withChat: !1 },
          { path: r.m.slotGame.pathName, component: oe, withChat: !0 },
          { path: r.m.adNetwork.pathName, component: se },
          { path: "*", component: E },
        ];
    },
    546: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        root: "style_root__1djSC",
        moveOut: "style_moveOut__1g7Wi",
        remove: "style_remove__1Aed3",
        notifyBarLeaveAnimation: "style_notifyBarLeaveAnimation__1ZMT6",
        info: "style_info__2636H",
        success: "style_success__WB1ND",
        warning: "style_warning__2L8ZD",
        error: "style_error__3neC2",
        icon: "style_icon__19Zbr",
        messageContainer: "style_messageContainer__3QyVf",
        smallTitle: "style_smallTitle__2aRZb",
        close: "style_close__1kiaz",
        line: "style_line__2wehm",
        play: "style_play___UKYA",
      };
    },
    547: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a = (function (e) {
        return (
          (e[(e.INFO = 0)] = "INFO"),
          (e[(e.SUCCESS = 1)] = "SUCCESS"),
          (e[(e.WARNING = 2)] = "WARNING"),
          (e[(e.ERROR = 3)] = "ERROR"),
          e
        );
      })({});
    },
    553: function (e, t, n) {
      "use strict";
      var a = n(3),
        r = n.n(a).a.createContext(null);
      t.a = r;
    },
    554: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a = (function (e) {
        return (e.localUserSeedName = "fp-userSeed"), e;
      })({});
    },
    67: function (e, t, n) {
      "use strict";
      n.d(t, "d", function () {
        return R;
      }),
        n.d(t, "a", function () {
          return B;
        }),
        n.d(t, "c", function () {
          return D;
        }),
        n.d(t, "b", function () {
          return F;
        });
      var a = n(190),
        r = n.n(a),
        i = n(408),
        c = n(1452),
        o = n(23),
        u = n(32),
        s = n(1),
        l = n(4),
        d = n(16),
        b = n(24),
        f = n(25),
        m = n(273),
        h = n(239),
        p = n(65),
        O = n(66),
        j = n(719),
        g = n(1463),
        v = n(301),
        y = n(17),
        S = n(30),
        w = n(715),
        x = n(1415),
        _ = n(1416),
        P = n(1417),
        k = n(1411),
        N = n(1412),
        C = n(1414),
        E = n(717),
        z = n(1413),
        I = n(71),
        M = (function (e) {
          return (
            (e[(e.NormalClosure = 1e3)] = "NormalClosure"),
            (e[(e.GoingAway = 1001)] = "GoingAway"),
            (e[(e.ProtocolError = 1002)] = "ProtocolError"),
            (e[(e.UnsupportedData = 1003)] = "UnsupportedData"),
            (e[(e.Reserved = 1004)] = "Reserved"),
            (e[(e.NoStatusRcvd = 1005)] = "NoStatusRcvd"),
            (e[(e.AbnormalClosure = 1006)] = "AbnormalClosure"),
            e
          );
        })(M || {}),
        A = (function (e) {
          Object(p.a)(n, e);
          var t = Object(O.a)(n);
          function n(e) {
            var a,
              r =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 5e3,
              c =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 10;
            return (
              Object(b.a)(this, n),
              ((a = t.call(this)).reconnectionObservable = void 0),
              (a.wsSubjectConfig = void 0),
              (a.socket = void 0),
              (a.connectionObserver = void 0),
              (a.connectionStatus = void 0),
              (a.isConnectedToWebSocket = void 0),
              (a.isReconnectToWebsocket = void 0),
              (a.lastCloseStatusCode = void 0),
              (a.reconnectInterval = void 0),
              (a.reconnectAttempts = void 0),
              (a.notSentMessagesQueue = void 0),
              (a.messagesQueueMaxSize = 10),
              (a.innerSubscriptions = void 0),
              (a.isReconnectToWebsocket = !0),
              (a.lastCloseStatusCode = null),
              (a.notSentMessagesQueue = new Map()),
              (a.innerSubscriptions = new Set()),
              (a.reconnectInterval = r),
              (a.reconnectAttempts = c),
              (a.socket = null),
              (a.reconnectionObservable = null),
              (a.connectionObserver = new i.b()),
              (a.connectionStatus = a.connectionObserver.pipe(
                Object(k.a)(),
                Object(N.a)()
              )),
              (a.isConnectedToWebSocket = !1),
              (a.wsSubjectConfig = {
                url: e,
                closeObserver: {
                  next: function (e) {
                    (a.lastCloseStatusCode = e.code),
                      (a.socket = null),
                      a.connectionObserver.next(!1);
                  },
                },
                openObserver: {
                  next: function (e) {
                    (a.isReconnectToWebsocket = !0),
                      a.connectionObserver.next(!0);
                    var t,
                      n = Object(S.a)(a.notSentMessagesQueue.entries());
                    try {
                      for (n.s(); !(t = n.n()).done; ) {
                        var r,
                          i = Object(y.a)(t.value, 2),
                          c = i[0],
                          o = i[1];
                        null === (r = a.socket) || void 0 === r || r.next(o),
                          a.notSentMessagesQueue.delete(c);
                      }
                    } catch (u) {
                      n.e(u);
                    } finally {
                      n.f();
                    }
                  },
                },
              }),
              a.innerSubscriptions.add(
                a.connectionStatus.subscribe(function (e) {
                  (a.isConnectedToWebSocket = e),
                    a.reconnectionObservable || e
                      ? a.reconnectionObservable &&
                        e &&
                        (a.reconnectionObservable = null)
                      : a.reconnect();
                })
              ),
              a
            );
          }
          return (
            Object(f.a)(n, [
              {
                key: "isConnected",
                get: function () {
                  return this.isConnectedToWebSocket;
                },
              },
              {
                key: "connect",
                value: function () {
                  var e = this;
                  (this.socket = new z.a(this.wsSubjectConfig)),
                    this.socket.subscribe({
                      next: function (t) {
                        e.next(t);
                      },
                      error: function (t) {
                        e.socket || e.reconnect();
                      },
                    });
                },
              },
              {
                key: "reconnect",
                value: function () {
                  var e = this;
                  if (this.isReconnectToWebsocket) {
                    this.reconnectionObservable = Object(w.a)(
                      this.reconnectInterval
                    ).pipe(
                      Object(C.a)(function (t, n) {
                        return (
                          n < e.reconnectAttempts &&
                          !e.socket &&
                          e.isReconnectToWebsocket
                        );
                      })
                    );
                    var t = this.reconnectionObservable
                      .pipe(
                        Object(x.a)(function () {
                          e.lastCloseStatusCode !== M.AbnormalClosure &&
                            e.connect();
                        })
                      )
                      .subscribe({
                        next: function () {
                          e.connect();
                        },
                        error: function () {
                          (e.reconnectionObservable = null),
                            e.socket ||
                              (e.complete(), e.connectionObserver.complete());
                        },
                        complete: function () {
                          e.innerSubscriptions.delete(t);
                        },
                      });
                    this.innerSubscriptions.add(t);
                  }
                },
              },
              {
                key: "flowify",
                value: function () {
                  var e = this,
                    t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = t.subMsg,
                    a = t.unsubMsg,
                    r = t.messageFilter;
                  return Object(_.a)(function () {
                    var t,
                      i = null;
                    n &&
                      (i =
                        null !== (t = e.send(n())) && void 0 !== t ? t : null);
                    return e.pipe(
                      Object(E.a)(
                        r ||
                          function () {
                            return !0;
                          }
                      ),
                      Object(P.a)(function () {
                        i && e.removeFromMessageQueue(i), a && e.send(a(), !1);
                      })
                    );
                  });
                },
              },
              {
                key: "send",
                value: function (e) {
                  var t,
                    n =
                      !(arguments.length > 1 && void 0 !== arguments[1]) ||
                      arguments[1];
                  if (!this.socket && n) return this.addMessageToQueue(e);
                  null === (t = this.socket) || void 0 === t || t.next(e);
                },
              },
              {
                key: "addMessageToQueue",
                value: function (e) {
                  if (
                    this.notSentMessagesQueue.size === this.messagesQueueMaxSize
                  ) {
                    var t = this.notSentMessagesQueue.keys(),
                      n = Object(y.a)(t, 1)[0];
                    this.notSentMessagesQueue.delete(n);
                  }
                  var a = Object(I.a)(6);
                  return this.notSentMessagesQueue.set(a, e), a;
                },
              },
              {
                key: "removeFromMessageQueue",
                value: function (e) {
                  this.notSentMessagesQueue.delete(e);
                },
              },
              {
                key: "closeAndReconnect",
                value: function () {
                  var e;
                  (this.isReconnectToWebsocket = !0),
                    null === (e = this.socket) || void 0 === e || e.complete();
                },
              },
              {
                key: "closeConnection",
                value: function () {
                  var e;
                  (this.isReconnectToWebsocket = !1),
                    null === (e = this.socket) || void 0 === e || e.complete();
                },
              },
              {
                key: "openConnection",
                value: function () {
                  this.socket || this.connect();
                },
              },
              {
                key: "complete",
                value: function () {
                  var e;
                  this.innerSubscriptions.forEach(function (e) {
                    e.closed || e.unsubscribe();
                  }),
                    this.connectionObserver.complete(),
                    null === (e = this.socket) || void 0 === e || e.complete(),
                    Object(m.a)(
                      Object(h.a)(n.prototype),
                      "complete",
                      this
                    ).call(this);
                },
              },
            ]),
            n
          );
        })(i.b),
        T = (function (e) {
          Object(p.a)(n, e);
          var t = Object(O.a)(n);
          function n() {
            var e;
            Object(b.a)(this, n);
            for (var a = arguments.length, r = new Array(a), i = 0; i < a; i++)
              r[i] = arguments[i];
            return (
              ((e = t.call.apply(t, [this].concat(r))).userChatParams = void 0),
              (e.wsToken = void 0),
              (e.isUserInitialized = void 0),
              (e.initializeUserSubscription = void 0),
              (e.initializeUserObserver = void 0),
              (e.userChatParams = e.getDefaultChatParams()),
              (e.wsToken = null),
              (e.isUserInitialized = !1),
              (e.initializeUserSubscription = null),
              (e.initializeUserObserver = new j.a(1)),
              e.connectionStatus.subscribe(function (t) {
                e.lostConnectionHandler(t);
              }),
              e
            );
          }
          return (
            Object(f.a)(n, [
              {
                key: "initialized",
                get: function () {
                  return this.isUserInitialized;
                },
              },
              {
                key: "lostConnectionHandler",
                value: function (e) {
                  var t;
                  e
                    ? null !== (t = this.initializeUserSubscription) &&
                      void 0 !== t &&
                      t.closed &&
                      this.initUser()
                    : (this.unsubscribeFromInitUserSubscription(),
                      this.clearInitialization(),
                      this.initializeNotification());
                },
              },
              {
                key: "getDefaultChatParams",
                value: function () {
                  return { isStreamer: null, isModerator: null, level: null };
                },
              },
              {
                key: "setToken",
                value: function (e) {
                  this.wsToken = e;
                },
              },
              {
                key: "unsubscribeFromInitUserSubscription",
                value: function () {
                  this.initializeUserSubscription &&
                    !this.initializeUserSubscription.closed &&
                    this.initializeUserSubscription.unsubscribe();
                },
              },
              {
                key: "clearInitialization",
                value: function () {
                  (this.userChatParams = this.getDefaultChatParams()),
                    (this.isUserInitialized = !1);
                },
              },
              {
                key: "initializeNotification",
                value: function () {
                  this.initializeUserObserver.next(
                    Object(d.a)(
                      Object(d.a)({}, this.userChatParams),
                      {},
                      { initialized: this.isUserInitialized }
                    )
                  );
                },
              },
              {
                key: "initUser",
                value: (function () {
                  var e = Object(l.a)(
                    Object(s.a)().mark(function e() {
                      var t = this;
                      return Object(s.a)().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  (this.unsubscribeFromInitUserSubscription(),
                                  this.wsToken)
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                return e.abrupt("return");
                              case 3:
                                this.initializeUserSubscription = this.flowify({
                                  subMsg: function () {
                                    return {
                                      type: v.c.INITIALIZATION,
                                      socket_token: t.wsToken,
                                    };
                                  },
                                  messageFilter: function (e) {
                                    return (
                                      (null === e || void 0 === e
                                        ? void 0
                                        : e.action) === v.b.SET_USER_PARAMETERS
                                    );
                                  },
                                })
                                  .pipe(Object(g.a)())
                                  .subscribe(function (e) {
                                    (t.userChatParams.isModerator =
                                      !!e.chat_moderator),
                                      (t.userChatParams.isStreamer =
                                        !!e.streamer),
                                      (t.userChatParams.level = e.level),
                                      (t.isUserInitialized = !0),
                                      t.initializeNotification();
                                  });
                              case 4:
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
                key: "complete",
                value: function () {
                  this.initializeUserObserver.complete(),
                    Object(m.a)(
                      Object(h.a)(n.prototype),
                      "complete",
                      this
                    ).call(this);
                },
              },
            ]),
            n
          );
        })(A),
        L = n(188),
        R = new i.b(),
        B = new i.b(),
        H = r()(function (e) {
          return u.b.error(e);
        }, 200),
        D = c.a.create({ baseURL: "https://api.quantiumcode.online/api", timeout: 3e4 });
      D.interceptors.request.use(function (e) {
        var t = localStorage.getItem(o.q.access);
        return t && (e.headers.Authorization = "Bearer ".concat(t)), e;
      });
      var G = function (e) {
        (e["2fa_required"] && R.next(e.message), e.bad_token) &&
          (localStorage.getItem(o.q.access)
            ? (localStorage.removeItem(o.q.access),
              H(e.message),
              (window.location.href =
                window.location.origin + o.m.loginPage.pathName))
            : H("You need to log in to access these features."),
          B.next(e.message));
      };
      D.interceptors.response.use(
        function (e) {
          var t = (null === e || void 0 === e ? void 0 : e.data) || {};
          return G(t), e;
        },
        function (e) {
          var t,
            n =
              (null === e ||
              void 0 === e ||
              null === (t = e.response) ||
              void 0 === t
                ? void 0
                : t.data) || {};
          return (
            L.c.error("api error", { custom: { data: e } }),
            G(n),
            Promise.reject(e)
          );
        }
      );
      var F = new T("wss://socket.faucetpay.io/chat/");
    },
    698: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return m;
      }),
        n.d(t, "b", function () {
          return x;
        }),
        n.d(t, "c", function () {
          return G;
        }),
        n.d(t, "d", function () {
          return te;
        });
      var a,
        r = n(15),
        i = n(3),
        c = n(163),
        o = Object(c.a)(
          Object(i.lazy)(function () {
            return n.e(143).then(n.bind(null, 1427));
          })
        ),
        u = Object(c.a)(
          Object(i.lazy)(function () {
            return n.e(144).then(n.bind(null, 1428));
          })
        ),
        s = Object(c.a)(
          Object(i.lazy)(function () {
            return n.e(145).then(n.bind(null, 1429));
          })
        ),
        l = Object(c.a)(
          Object(i.lazy)(function () {
            return n.e(146).then(n.bind(null, 1430));
          })
        ),
        d = n(732),
        b = n.n(d),
        f = n(0),
        m = function () {
          return Object(f.jsxs)("div", {
            className: b.a.backgroundWrapper,
            children: [
              Object(f.jsx)(o, {
                className: Object(r.a)(b.a.circle, b.a.bigCircle),
              }),
              Object(f.jsx)(u, {
                className: Object(r.a)(b.a.circle, b.a.mediumCircle_1),
              }),
              Object(f.jsx)(s, {
                className: Object(r.a)(b.a.circle, b.a.mediumCircle_2),
              }),
              Object(f.jsx)(l, {
                className: Object(r.a)(b.a.circle, b.a.smallCircle),
              }),
            ],
          });
        },
        h = n(19),
        p = n(156),
        O = n(18),
        j = n(22),
        g = n(733),
        v = n.n(g),
        y = Object(p.a)(),
        S = y.clearTimeouts,
        w = y.pushTimeout,
        x = function (e) {
          var t = e.setOpenChat,
            n = e.toAllowChat,
            a = e.isAllowChat,
            c = e.isChatOpen,
            o = e.position;
          return (
            Object(i.useEffect)(function () {
              return S;
            }, []),
            Object(f.jsx)("div", {
              style: { bottom: "".concat(35 + o, "px") },
              className: Object(r.a)(v.a.wrapper, Object(h.a)({}, v.a.hide, c)),
              children: Object(f.jsxs)(O.a, {
                onClick: function (e) {
                  var r;
                  "touch" ===
                  (null === (r = e.nativeEvent) || void 0 === r
                    ? void 0
                    : r.pointerType)
                    ? a
                      ? t()
                      : (n(),
                        w(function () {
                          t();
                        }, 150))
                    : t();
                },
                onMouseOver: function (e) {
                  var t, a;
                  (null !== (t = e.nativeEvent) &&
                    void 0 !== t &&
                    null !== (a = t.sourceCapabilities) &&
                    void 0 !== a &&
                    a.firesTouchEvents) ||
                    n();
                },
                className: Object(r.a)("purpleButton", v.a.chatButton),
                children: [
                  Object(f.jsx)(j.f, {}),
                  Object(f.jsx)("span", { children: "CHAT" }),
                ],
              }),
            })
          );
        },
        _ = n(16),
        P = n(39),
        k = n(23),
        N = ["title", "titleId"];
      function C() {
        return (
          (C = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          C.apply(this, arguments)
        );
      }
      function E(e, t) {
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
          r = e.titleId,
          c = E(e, N);
        return i.createElement(
          "svg",
          C(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": r,
            },
            c
          ),
          n ? i.createElement("title", { id: r }, n) : null,
          a ||
            (a = i.createElement("path", {
              d: "M12 0C5.37058 0 0 5.37135 0 12C0 18.6286 5.37135 24 12 24C18.6294 24 24 18.6286 24 12C24 5.37135 18.6286 0 12 0ZM17.8939 8.22116L15.9244 17.5022C15.7788 18.1603 15.3871 18.3197 14.8405 18.0101L11.8405 15.799L10.3935 17.1925C10.2341 17.352 10.0986 17.4875 9.7889 17.4875L10.0018 14.4341L15.5613 9.4111C15.8036 9.19819 15.5079 9.07742 15.1881 9.29032L8.31716 13.6157L5.35587 12.6914C4.71252 12.4885 4.69781 12.048 5.49135 11.7383L17.0609 7.27665C17.5982 7.0831 18.0674 7.40748 17.8932 8.22039L17.8939 8.22116Z",
              fill: "#B9B9CA",
            }))
        );
      }
      var I,
        M = i.forwardRef(z),
        A = (n.p, ["title", "titleId"]);
      function T() {
        return (
          (T = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var a in n)
                    Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                }
                return e;
              }),
          T.apply(this, arguments)
        );
      }
      function L(e, t) {
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
          a = e.titleId,
          r = L(e, A);
        return i.createElement(
          "svg",
          T(
            {
              width: 24,
              height: 24,
              viewBox: "0 0 24 24",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ref: t,
              "aria-labelledby": a,
            },
            r
          ),
          n ? i.createElement("title", { id: a }, n) : null,
          I ||
            (I = i.createElement("path", {
              d: "M12 0C5.37321 0 0 5.37321 0 12C0 18.6268 5.37321 24 12 24C18.6268 24 24 18.6268 24 12C24 5.37321 18.6268 0 12 0ZM17.767 9.04554C17.775 9.17143 17.775 9.30268 17.775 9.43125C17.775 13.3634 14.7804 17.8929 9.30804 17.8929C7.62054 17.8929 6.05625 17.4027 4.73839 16.5589C4.97946 16.5857 5.20982 16.5964 5.45625 16.5964C6.84911 16.5964 8.12946 16.125 9.15 15.3268C7.84286 15.3 6.74464 14.4429 6.36964 13.2643C6.82768 13.3313 7.24018 13.3313 7.71161 13.2107C7.03855 13.074 6.43359 12.7084 5.99951 12.1762C5.56542 11.644 5.32898 10.9779 5.33036 10.2911V10.2536C5.72411 10.4759 6.1875 10.6125 6.67232 10.6313C6.26476 10.3596 5.93051 9.99164 5.69923 9.5599C5.46794 9.12817 5.34676 8.64603 5.34643 8.15625C5.34643 7.60179 5.49107 7.09554 5.75089 6.65625C6.49795 7.5759 7.43017 8.32806 8.48696 8.86384C9.54375 9.39961 10.7014 9.70702 11.8848 9.76607C11.4643 7.74375 12.975 6.10714 14.7911 6.10714C15.6482 6.10714 16.4196 6.46607 16.9634 7.04464C17.6357 6.91875 18.2786 6.66696 18.8518 6.32946C18.6295 7.01786 18.1634 7.59911 17.5446 7.96607C18.1446 7.90179 18.7232 7.73571 19.2589 7.50268C18.8545 8.09732 18.3482 8.625 17.767 9.04554Z",
              fill: "#B9B9CA",
            }))
        );
      }
      var B = i.forwardRef(R),
        H = (n.p, n(734)),
        D = n.n(H),
        G = function () {
          return Object(f.jsxs)("footer", {
            className: Object(r.a)(D.a.wrapper),
            children: [
              Object(f.jsxs)("div", {
                className: D.a.socialMedia,
                children: [
                  Object(f.jsxs)("div", {
                    className: D.a.socialWrapper,
                    children: [
                      Object(f.jsx)(O.a, {
                        classes: { root: D.a.socialButton },
                        component: Object(i.forwardRef)(function (e, t) {
                          return Object(f.jsx)(
                            "a",
                            Object(_.a)(
                              Object(_.a)({ "aria-label": "Telegram" }, e),
                              {},
                              {
                                ref: t,
                                href: "https://t.me/FaucetPayOfficial",
                                target: "_blank",
                              }
                            )
                          );
                        }),
                        className: D.a.socialButton,
                        children: Object(f.jsx)(M, {}),
                      }),
                      Object(f.jsx)(O.a, {
                        classes: { root: D.a.socialButton },
                        component: Object(i.forwardRef)(function (e, t) {
                          return Object(f.jsx)(
                            "a",
                            Object(_.a)(
                              Object(_.a)({}, e),
                              {},
                              {
                                "aria-label": "Twitter",
                                ref: t,
                                href: "https://twitter.com/faucetpayio",
                                target: "_blank",
                              }
                            )
                          );
                        }),
                        className: D.a.socialButton,
                        children: Object(f.jsx)(B, {}),
                      }),
                    ],
                  }),
                  Object(f.jsx)("span", {
                    children: "\xa9 Basilisk Entertainment S.R.L",
                  }),
                ],
              }),
              Object(f.jsxs)("div", {
                className: D.a.termsWrapper,
                children: [
                  Object(f.jsx)("a", {
                    href: "https://faucetpay.io/blog",
                    children: "Blog",
                  }),
                  Object(f.jsx)(P.b, {
                    to: { pathname: k.m.pressPage.pathName },
                    children: "Press",
                  }),
                  Object(f.jsx)(P.b, {
                    to: { pathname: k.m.termsAndConditionsPage.pathName },
                    children: "Terms & Conditions",
                  }),
                  Object(f.jsx)(P.b, {
                    to: { pathname: k.m.privacyPolicyPage.pathName },
                    children: "Privacy Policy",
                  }),
                ],
              }),
            ],
          });
        },
        F = n(17),
        U = n(34),
        W = n(708),
        K = n(54),
        V = n(21),
        q = n(31),
        J = n(356),
        Q = n(318),
        Z = n(423),
        Y = n.n(Z),
        X = Object(i.lazy)(function () {
          return Object(q.a)(
            Promise.all([n.e(0), n.e(79)]).then(n.bind(null, 1461))
          );
        }),
        $ = Object(i.lazy)(function () {
          return Object(q.a)(
            Promise.all([n.e(0), n.e(88)]).then(n.bind(null, 1431))
          );
        }),
        ee = Object(i.lazy)(function () {
          return Object(q.a)(
            Promise.all([n.e(0), n.e(99)]).then(n.bind(null, 1158))
          );
        }),
        te = function (e) {
          var t = e.darkMode,
            n = e.setDarkMode,
            a = e.isScroll,
            c = Object(i.useState)(!1),
            o = Object(F.a)(c, 2),
            u = o[0],
            s = o[1],
            l = Object(U.h)(),
            d = Object(V.i)(),
            b = d.user,
            m = d.logout,
            h = Object(K.b)(k.n),
            p = function (e) {
              return e.includes(l.pathname);
            };
          return Object(f.jsx)("div", {
            className: Object(r.a)(
              Y.a.headerWrapper,
              h ? Y.a.header_mobile : "",
              (p([k.m.startPage.pathName, k.m.dashboardPage.pathName]) || a) &&
                h
                ? Y.a.header_purple
                : "",
              h ? "" : Y.a.header_dark,
              p([k.m.startPage.pathName]) ? "" : Y.a.dashboard_header
            ),
            children: Object(f.jsxs)(i.Suspense, {
              fallback: Object(f.jsx)(W.a, {}),
              children: [
                Object(f.jsx)(J.a, {}),
                h
                  ? Object(f.jsxs)("div", {
                      className: Y.a.mobileButtonWrapper,
                      children: [
                        b && Object(f.jsx)(ee, { logout: m }),
                        Object(f.jsx)(O.a, {
                          "aria-label": "Mobile Menu",
                          onClick: function () {
                            return s(!0);
                          },
                          className: Y.a.burgerButton,
                          children: Object(f.jsx)(Q.e, {}),
                        }),
                        Object(f.jsx)($, {
                          darkMode: t,
                          setDarkMode: n,
                          setOpen: function () {
                            return s(!1);
                          },
                          open: u,
                        }),
                      ],
                    })
                  : Object(f.jsx)(X, { darkMode: t, setDarkMode: n }),
              ],
            }),
          });
        };
    },
    708: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      });
      var a = n(15),
        r = n(22),
        i = n(735),
        c = n.n(i),
        o = n(0),
        u = function () {
          return Object(o.jsxs)("div", {
            className: c.a.loadingWrapper,
            children: [
              Object(o.jsx)("span", {
                className: Object(a.a)("skeleton", c.a.loading),
              }),
              Object(o.jsx)(r.b, { className: c.a.arrow }),
            ],
          });
        },
        s = function () {
          return Object(o.jsx)(o.Fragment, {
            children: (function () {
              for (var e = [], t = 0; t < 6; t++)
                e.push(Object(o.jsx)(u, {}, t));
              return e;
            })(),
          });
        };
    },
    71: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        r = function () {
          for (
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 64,
              t = "",
              n = 0;
            n < e;
            n++
          )
            t += a.charAt(Math.floor(62 * Math.random()));
          return t;
        };
    },
    718: function (e, t, n) {
      e.exports = { notifyBar: "style_notifyBar__1685_" };
    },
    720: function (e) {
      e.exports = JSON.parse(
        '{"apiKey":"AIzaSyCBFu5Urm9lCW-eGOk0pRZ0NwT6QMmCtqg","authDomain":"fp-frontend.firebaseapp.com","projectId":"fp-frontend","storageBucket":"fp-frontend.appspot.com","messagingSenderId":"961570049034","appId":"1:961570049034:web:21f1577e4fbb4aaab2a3f3","measurementId":"G-XHBR3DC9TC"}'
      );
    },
    732: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        backgroundWrapper: "style_backgroundWrapper__OGssw",
        circle: "style_circle__3gn_i",
        bigCircle: "style_bigCircle__1Wj8K",
        bigOval: "style_bigOval__1Tr41",
        mediumCircle_1: "style_mediumCircle_1__8-kqe",
        mediumOval_1: "style_mediumOval_1__1mXnJ",
        mediumCircle_2: "style_mediumCircle_2__1QEeg",
        mediumOval_2: "style_mediumOval_2__32-cQ",
        smallCircle: "style_smallCircle__n1isG",
        smallOval: "style_smallOval__1FsBw",
      };
    },
    733: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        wrapper: "style_wrapper__3H0TD",
        chatButton: "style_chatButton__qvafw",
        hide: "style_hide__2U9VS",
      };
    },
    734: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        wrapper: "style_wrapper__2AoSb",
        socialButton: "style_socialButton__1u_-T",
        socialMedia: "style_socialMedia__ls2Ms",
        socialWrapper: "style_socialWrapper__2igV8",
        termsWrapper: "style_termsWrapper__1oeZc",
      };
    },
    735: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        loadingWrapper: "style_loadingWrapper__3SXOe",
        arrow: "style_arrow__1C792",
        loading: "style_loading__3TPYg",
        loader: "style_loader__32g8f",
        circular: "style_circular__2_Bzt",
      };
    },
    736: function (e, t, n) {
      e.exports = { logo: "style_logo__3Ug2L" };
    },
    737: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
      };
    },
    738: function (e, t, n) {
      e.exports = {
        headerHeight: "90px",
        mobileHeader: "90px",
        footerHeight: "80px",
        mobileFooterHeight: "150px",
        mobileWidth: "900px",
        inviteMobile2: "600px",
        gameMobile1: "1050px",
        gameMobile4: "800px",
        pageLayoutWrapper: "style_pageLayoutWrapper__2cp_8",
        withoutHeader: "style_withoutHeader__15gQY",
        chatOpen: "style_chatOpen__1o_OB",
        transparent_footer: "style_transparent_footer__FHhII",
      };
    },
    739: function (e, t, n) {},
    89: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return c;
      });
      var a = n(17),
        r = n(3),
        i = n(100),
        c = function (e) {
          var t = Object(r.useState)({ width: 0, height: 0 }),
            n = Object(a.a)(t, 2),
            c = n[0],
            o = n[1];
          return (
            Object(r.useEffect)(function () {
              var t = function () {
                e
                  ? e()
                  : o({ width: window.innerWidth, height: window.innerHeight });
              };
              t();
              var n = i.a.subscribe(t);
              return function () {
                return n.unsubscribe();
              };
            }, []),
            c
          );
        };
    },
  },
]);
//# sourceMappingURL=40.eefffd05.chunk.js.map
