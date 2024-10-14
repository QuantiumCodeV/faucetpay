(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [83],
  {
    1274: function (e, t, n) {
      var r = n(703),
        i = n(1275),
        o = n(673),
        a = n(1286);
      i = "function" === typeof i.default ? i.default : i;
      var s = { lowerCaseAttributeNames: !1 };
      function l(e, t) {
        if ("string" !== typeof e)
          throw new TypeError("First argument must be a string");
        return "" === e ? [] : a(i(e, (t = t || {}).htmlparser2 || s), t);
      }
      (l.domToReact = a),
        (l.htmlToDOM = i),
        (l.attributesToProps = o),
        (l.Comment = r.Comment),
        (l.Element = r.Element),
        (l.ProcessingInstruction = r.ProcessingInstruction),
        (l.Text = r.Text),
        (e.exports = l),
        (l.default = l);
    },
    1275: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return a;
        });
      var r = n(1276),
        i = n(1277).formatDOM,
        o = /<(![a-zA-Z\s]+)>/;
      function a(e) {
        if ("string" !== typeof e)
          throw new TypeError("First argument must be a string");
        if ("" === e) return [];
        var t,
          n = e.match(o);
        return n && n[1] && (t = n[1]), i(r(e), null, t);
      }
    },
    1276: function (e, t) {
      var n = "html",
        r = "head",
        i = "body",
        o = /<([a-zA-Z]+[0-9]?)/,
        a = /<head[^]*>/i,
        s = /<body[^]*>/i,
        l = function () {
          throw new Error(
            "This browser does not support `document.implementation.createHTMLDocument`"
          );
        },
        c = function () {
          throw new Error(
            "This browser does not support `DOMParser.prototype.parseFromString`"
          );
        },
        u = "object" === typeof window && window.DOMParser;
      if ("function" === typeof u) {
        var d = new u();
        l = c = function (e, t) {
          return (
            t && (e = "<" + t + ">" + e + "</" + t + ">"),
            d.parseFromString(e, "text/html")
          );
        };
      }
      if ("object" === typeof document && document.implementation) {
        var f = document.implementation.createHTMLDocument();
        l = function (e, t) {
          return t
            ? ((f.documentElement.querySelector(t).innerHTML = e), f)
            : ((f.documentElement.innerHTML = e), f);
        };
      }
      var h,
        p =
          "object" === typeof document
            ? document.createElement("template")
            : {};
      p.content &&
        (h = function (e) {
          return (p.innerHTML = e), p.content.childNodes;
        }),
        (e.exports = function (e) {
          var t,
            u,
            d,
            f,
            p = e.match(o);
          switch ((p && p[1] && (t = p[1].toLowerCase()), t)) {
            case n:
              return (
                (u = c(e)),
                a.test(e) ||
                  ((d = u.querySelector(r)) && d.parentNode.removeChild(d)),
                s.test(e) ||
                  ((d = u.querySelector(i)) && d.parentNode.removeChild(d)),
                u.querySelectorAll(n)
              );
            case r:
            case i:
              return (
                (f = (u = l(e)).querySelectorAll(t)),
                s.test(e) && a.test(e) ? f[0].parentNode.childNodes : f
              );
            default:
              return h ? h(e) : (d = l(e, i).querySelector(i)).childNodes;
          }
        });
    },
    1277: function (e, t, n) {
      for (
        var r,
          i = n(703),
          o = n(1278).CASE_SENSITIVE_TAG_NAMES,
          a = i.Comment,
          s = i.Element,
          l = i.ProcessingInstruction,
          c = i.Text,
          u = {},
          d = 0,
          f = o.length;
        d < f;
        d++
      )
        (r = o[d]), (u[r.toLowerCase()] = r);
      function h(e) {
        for (var t, n = {}, r = 0, i = e.length; r < i; r++)
          n[(t = e[r]).name] = t.value;
        return n;
      }
      function p(e) {
        var t = (function (e) {
          return u[e];
        })((e = e.toLowerCase()));
        return t || e;
      }
      (t.formatAttributes = h),
        (t.formatDOM = function e(t, n, r) {
          n = n || null;
          for (var i, o = [], u = 0, d = t.length; u < d; u++) {
            var f,
              m = t[u];
            switch (m.nodeType) {
              case 1:
                (i = p(m.nodeName)),
                  ((f = new s(i, h(m.attributes))).children = e(
                    "template" === i ? m.content.childNodes : m.childNodes,
                    f
                  ));
                break;
              case 3:
                f = new c(m.nodeValue);
                break;
              case 8:
                f = new a(m.nodeValue);
                break;
              default:
                continue;
            }
            var g = o[u - 1] || null;
            g && (g.next = f),
              (f.parent = n),
              (f.prev = g),
              (f.next = null),
              o.push(f);
          }
          return (
            r &&
              (((f = new l(
                r.substring(0, r.indexOf(" ")).toLowerCase(),
                r
              )).next = o[0] || null),
              (f.parent = n),
              o.unshift(f),
              o[1] && (o[1].prev = o[0])),
            o
          );
        });
    },
    1278: function (e, t) {
      t.CASE_SENSITIVE_TAG_NAMES = [
        "animateMotion",
        "animateTransform",
        "clipPath",
        "feBlend",
        "feColorMatrix",
        "feComponentTransfer",
        "feComposite",
        "feConvolveMatrix",
        "feDiffuseLighting",
        "feDisplacementMap",
        "feDropShadow",
        "feFlood",
        "feFuncA",
        "feFuncB",
        "feFuncG",
        "feFuncR",
        "feGaussianBlur",
        "feImage",
        "feMerge",
        "feMergeNode",
        "feMorphology",
        "feOffset",
        "fePointLight",
        "feSpecularLighting",
        "feSpotLight",
        "feTile",
        "feTurbulence",
        "foreignObject",
        "linearGradient",
        "radialGradient",
        "textPath",
      ];
    },
    1279: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null == n) return;
            var r,
              i,
              o = [],
              a = !0,
              s = !1;
            try {
              for (
                n = n.call(e);
                !(a = (r = n.next()).done) &&
                (o.push(r.value), !t || o.length !== t);
                a = !0
              );
            } catch (l) {
              (s = !0), (i = l);
            } finally {
              try {
                a || null == n.return || n.return();
              } finally {
                if (s) throw i;
              }
            }
            return o;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return i(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return i(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function i(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      Object.defineProperty(t, "__esModule", { value: !0 });
      function o(e, t, n, r, i, o, a) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = i),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = o),
          (this.removeEmptyString = a);
      }
      var a = {};
      [
        "children",
        "dangerouslySetInnerHTML",
        "defaultValue",
        "defaultChecked",
        "innerHTML",
        "suppressContentEditableWarning",
        "suppressHydrationWarning",
        "style",
      ].forEach(function (e) {
        a[e] = new o(e, 0, !1, e, null, !1, !1);
      }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = r(e, 2),
            n = t[0],
            i = t[1];
          a[n] = new o(n, 1, !1, i, null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            a[e] = new o(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          a[e] = new o(e, 2, !1, e, null, !1, !1);
        }),
        [
          "allowFullScreen",
          "async",
          "autoFocus",
          "autoPlay",
          "controls",
          "default",
          "defer",
          "disabled",
          "disablePictureInPicture",
          "disableRemotePlayback",
          "formNoValidate",
          "hidden",
          "loop",
          "noModule",
          "noValidate",
          "open",
          "playsInline",
          "readOnly",
          "required",
          "reversed",
          "scoped",
          "seamless",
          "itemScope",
        ].forEach(function (e) {
          a[e] = new o(e, 3, !1, e.toLowerCase(), null, !1, !1);
        }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          a[e] = new o(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          a[e] = new o(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          a[e] = new o(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          a[e] = new o(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var s = /[\-\:]([a-z])/g,
        l = function (e) {
          return e[1].toUpperCase();
        };
      [
        "accent-height",
        "alignment-baseline",
        "arabic-form",
        "baseline-shift",
        "cap-height",
        "clip-path",
        "clip-rule",
        "color-interpolation",
        "color-interpolation-filters",
        "color-profile",
        "color-rendering",
        "dominant-baseline",
        "enable-background",
        "fill-opacity",
        "fill-rule",
        "flood-color",
        "flood-opacity",
        "font-family",
        "font-size",
        "font-size-adjust",
        "font-stretch",
        "font-style",
        "font-variant",
        "font-weight",
        "glyph-name",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "horiz-adv-x",
        "horiz-origin-x",
        "image-rendering",
        "letter-spacing",
        "lighting-color",
        "marker-end",
        "marker-mid",
        "marker-start",
        "overline-position",
        "overline-thickness",
        "paint-order",
        "panose-1",
        "pointer-events",
        "rendering-intent",
        "shape-rendering",
        "stop-color",
        "stop-opacity",
        "strikethrough-position",
        "strikethrough-thickness",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-linejoin",
        "stroke-miterlimit",
        "stroke-opacity",
        "stroke-width",
        "text-anchor",
        "text-decoration",
        "text-rendering",
        "underline-position",
        "underline-thickness",
        "unicode-bidi",
        "unicode-range",
        "units-per-em",
        "v-alphabetic",
        "v-hanging",
        "v-ideographic",
        "v-mathematical",
        "vector-effect",
        "vert-adv-y",
        "vert-origin-x",
        "vert-origin-y",
        "word-spacing",
        "writing-mode",
        "xmlns:xlink",
        "x-height",
      ].forEach(function (e) {
        var t = e.replace(s, l);
        a[t] = new o(t, 1, !1, e, null, !1, !1);
      }),
        [
          "xlink:actuate",
          "xlink:arcrole",
          "xlink:role",
          "xlink:show",
          "xlink:title",
          "xlink:type",
        ].forEach(function (e) {
          var t = e.replace(s, l);
          a[t] = new o(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
        }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(s, l);
          a[t] = new o(
            t,
            1,
            !1,
            e,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          a[e] = new o(e, 1, !1, e.toLowerCase(), null, !1, !1);
        });
      (a.xlinkHref = new o(
        "xlinkHref",
        1,
        !1,
        "xlink:href",
        "http://www.w3.org/1999/xlink",
        !0,
        !1
      )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          a[e] = new o(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var c = n(1280),
        u = c.CAMELCASE,
        d = c.SAME,
        f = c.possibleStandardNames,
        h = RegExp.prototype.test.bind(
          new RegExp(
            "^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
          )
        ),
        p = Object.keys(f).reduce(function (e, t) {
          var n = f[t];
          return (
            n === d
              ? (e[t] = t)
              : n === u
              ? (e[t.toLowerCase()] = t)
              : (e[t] = n),
            e
          );
        }, {});
      (t.BOOLEAN = 3),
        (t.BOOLEANISH_STRING = 2),
        (t.NUMERIC = 5),
        (t.OVERLOADED_BOOLEAN = 4),
        (t.POSITIVE_NUMERIC = 6),
        (t.RESERVED = 0),
        (t.STRING = 1),
        (t.getPropertyInfo = function (e) {
          return a.hasOwnProperty(e) ? a[e] : null;
        }),
        (t.isCustomAttribute = h),
        (t.possibleStandardNames = p);
    },
    1280: function (e, t) {
      t.SAME = 0;
      (t.CAMELCASE = 1),
        (t.possibleStandardNames = {
          accept: 0,
          acceptCharset: 1,
          "accept-charset": "acceptCharset",
          accessKey: 1,
          action: 0,
          allowFullScreen: 1,
          alt: 0,
          as: 0,
          async: 0,
          autoCapitalize: 1,
          autoComplete: 1,
          autoCorrect: 1,
          autoFocus: 1,
          autoPlay: 1,
          autoSave: 1,
          capture: 0,
          cellPadding: 1,
          cellSpacing: 1,
          challenge: 0,
          charSet: 1,
          checked: 0,
          children: 0,
          cite: 0,
          class: "className",
          classID: 1,
          className: 1,
          cols: 0,
          colSpan: 1,
          content: 0,
          contentEditable: 1,
          contextMenu: 1,
          controls: 0,
          controlsList: 1,
          coords: 0,
          crossOrigin: 1,
          dangerouslySetInnerHTML: 1,
          data: 0,
          dateTime: 1,
          default: 0,
          defaultChecked: 1,
          defaultValue: 1,
          defer: 0,
          dir: 0,
          disabled: 0,
          disablePictureInPicture: 1,
          disableRemotePlayback: 1,
          download: 0,
          draggable: 0,
          encType: 1,
          enterKeyHint: 1,
          for: "htmlFor",
          form: 0,
          formMethod: 1,
          formAction: 1,
          formEncType: 1,
          formNoValidate: 1,
          formTarget: 1,
          frameBorder: 1,
          headers: 0,
          height: 0,
          hidden: 0,
          high: 0,
          href: 0,
          hrefLang: 1,
          htmlFor: 1,
          httpEquiv: 1,
          "http-equiv": "httpEquiv",
          icon: 0,
          id: 0,
          innerHTML: 1,
          inputMode: 1,
          integrity: 0,
          is: 0,
          itemID: 1,
          itemProp: 1,
          itemRef: 1,
          itemScope: 1,
          itemType: 1,
          keyParams: 1,
          keyType: 1,
          kind: 0,
          label: 0,
          lang: 0,
          list: 0,
          loop: 0,
          low: 0,
          manifest: 0,
          marginWidth: 1,
          marginHeight: 1,
          max: 0,
          maxLength: 1,
          media: 0,
          mediaGroup: 1,
          method: 0,
          min: 0,
          minLength: 1,
          multiple: 0,
          muted: 0,
          name: 0,
          noModule: 1,
          nonce: 0,
          noValidate: 1,
          open: 0,
          optimum: 0,
          pattern: 0,
          placeholder: 0,
          playsInline: 1,
          poster: 0,
          preload: 0,
          profile: 0,
          radioGroup: 1,
          readOnly: 1,
          referrerPolicy: 1,
          rel: 0,
          required: 0,
          reversed: 0,
          role: 0,
          rows: 0,
          rowSpan: 1,
          sandbox: 0,
          scope: 0,
          scoped: 0,
          scrolling: 0,
          seamless: 0,
          selected: 0,
          shape: 0,
          size: 0,
          sizes: 0,
          span: 0,
          spellCheck: 1,
          src: 0,
          srcDoc: 1,
          srcLang: 1,
          srcSet: 1,
          start: 0,
          step: 0,
          style: 0,
          summary: 0,
          tabIndex: 1,
          target: 0,
          title: 0,
          type: 0,
          useMap: 1,
          value: 0,
          width: 0,
          wmode: 0,
          wrap: 0,
          about: 0,
          accentHeight: 1,
          "accent-height": "accentHeight",
          accumulate: 0,
          additive: 0,
          alignmentBaseline: 1,
          "alignment-baseline": "alignmentBaseline",
          allowReorder: 1,
          alphabetic: 0,
          amplitude: 0,
          arabicForm: 1,
          "arabic-form": "arabicForm",
          ascent: 0,
          attributeName: 1,
          attributeType: 1,
          autoReverse: 1,
          azimuth: 0,
          baseFrequency: 1,
          baselineShift: 1,
          "baseline-shift": "baselineShift",
          baseProfile: 1,
          bbox: 0,
          begin: 0,
          bias: 0,
          by: 0,
          calcMode: 1,
          capHeight: 1,
          "cap-height": "capHeight",
          clip: 0,
          clipPath: 1,
          "clip-path": "clipPath",
          clipPathUnits: 1,
          clipRule: 1,
          "clip-rule": "clipRule",
          color: 0,
          colorInterpolation: 1,
          "color-interpolation": "colorInterpolation",
          colorInterpolationFilters: 1,
          "color-interpolation-filters": "colorInterpolationFilters",
          colorProfile: 1,
          "color-profile": "colorProfile",
          colorRendering: 1,
          "color-rendering": "colorRendering",
          contentScriptType: 1,
          contentStyleType: 1,
          cursor: 0,
          cx: 0,
          cy: 0,
          d: 0,
          datatype: 0,
          decelerate: 0,
          descent: 0,
          diffuseConstant: 1,
          direction: 0,
          display: 0,
          divisor: 0,
          dominantBaseline: 1,
          "dominant-baseline": "dominantBaseline",
          dur: 0,
          dx: 0,
          dy: 0,
          edgeMode: 1,
          elevation: 0,
          enableBackground: 1,
          "enable-background": "enableBackground",
          end: 0,
          exponent: 0,
          externalResourcesRequired: 1,
          fill: 0,
          fillOpacity: 1,
          "fill-opacity": "fillOpacity",
          fillRule: 1,
          "fill-rule": "fillRule",
          filter: 0,
          filterRes: 1,
          filterUnits: 1,
          floodOpacity: 1,
          "flood-opacity": "floodOpacity",
          floodColor: 1,
          "flood-color": "floodColor",
          focusable: 0,
          fontFamily: 1,
          "font-family": "fontFamily",
          fontSize: 1,
          "font-size": "fontSize",
          fontSizeAdjust: 1,
          "font-size-adjust": "fontSizeAdjust",
          fontStretch: 1,
          "font-stretch": "fontStretch",
          fontStyle: 1,
          "font-style": "fontStyle",
          fontVariant: 1,
          "font-variant": "fontVariant",
          fontWeight: 1,
          "font-weight": "fontWeight",
          format: 0,
          from: 0,
          fx: 0,
          fy: 0,
          g1: 0,
          g2: 0,
          glyphName: 1,
          "glyph-name": "glyphName",
          glyphOrientationHorizontal: 1,
          "glyph-orientation-horizontal": "glyphOrientationHorizontal",
          glyphOrientationVertical: 1,
          "glyph-orientation-vertical": "glyphOrientationVertical",
          glyphRef: 1,
          gradientTransform: 1,
          gradientUnits: 1,
          hanging: 0,
          horizAdvX: 1,
          "horiz-adv-x": "horizAdvX",
          horizOriginX: 1,
          "horiz-origin-x": "horizOriginX",
          ideographic: 0,
          imageRendering: 1,
          "image-rendering": "imageRendering",
          in2: 0,
          in: 0,
          inlist: 0,
          intercept: 0,
          k1: 0,
          k2: 0,
          k3: 0,
          k4: 0,
          k: 0,
          kernelMatrix: 1,
          kernelUnitLength: 1,
          kerning: 0,
          keyPoints: 1,
          keySplines: 1,
          keyTimes: 1,
          lengthAdjust: 1,
          letterSpacing: 1,
          "letter-spacing": "letterSpacing",
          lightingColor: 1,
          "lighting-color": "lightingColor",
          limitingConeAngle: 1,
          local: 0,
          markerEnd: 1,
          "marker-end": "markerEnd",
          markerHeight: 1,
          markerMid: 1,
          "marker-mid": "markerMid",
          markerStart: 1,
          "marker-start": "markerStart",
          markerUnits: 1,
          markerWidth: 1,
          mask: 0,
          maskContentUnits: 1,
          maskUnits: 1,
          mathematical: 0,
          mode: 0,
          numOctaves: 1,
          offset: 0,
          opacity: 0,
          operator: 0,
          order: 0,
          orient: 0,
          orientation: 0,
          origin: 0,
          overflow: 0,
          overlinePosition: 1,
          "overline-position": "overlinePosition",
          overlineThickness: 1,
          "overline-thickness": "overlineThickness",
          paintOrder: 1,
          "paint-order": "paintOrder",
          panose1: 0,
          "panose-1": "panose1",
          pathLength: 1,
          patternContentUnits: 1,
          patternTransform: 1,
          patternUnits: 1,
          pointerEvents: 1,
          "pointer-events": "pointerEvents",
          points: 0,
          pointsAtX: 1,
          pointsAtY: 1,
          pointsAtZ: 1,
          prefix: 0,
          preserveAlpha: 1,
          preserveAspectRatio: 1,
          primitiveUnits: 1,
          property: 0,
          r: 0,
          radius: 0,
          refX: 1,
          refY: 1,
          renderingIntent: 1,
          "rendering-intent": "renderingIntent",
          repeatCount: 1,
          repeatDur: 1,
          requiredExtensions: 1,
          requiredFeatures: 1,
          resource: 0,
          restart: 0,
          result: 0,
          results: 0,
          rotate: 0,
          rx: 0,
          ry: 0,
          scale: 0,
          security: 0,
          seed: 0,
          shapeRendering: 1,
          "shape-rendering": "shapeRendering",
          slope: 0,
          spacing: 0,
          specularConstant: 1,
          specularExponent: 1,
          speed: 0,
          spreadMethod: 1,
          startOffset: 1,
          stdDeviation: 1,
          stemh: 0,
          stemv: 0,
          stitchTiles: 1,
          stopColor: 1,
          "stop-color": "stopColor",
          stopOpacity: 1,
          "stop-opacity": "stopOpacity",
          strikethroughPosition: 1,
          "strikethrough-position": "strikethroughPosition",
          strikethroughThickness: 1,
          "strikethrough-thickness": "strikethroughThickness",
          string: 0,
          stroke: 0,
          strokeDasharray: 1,
          "stroke-dasharray": "strokeDasharray",
          strokeDashoffset: 1,
          "stroke-dashoffset": "strokeDashoffset",
          strokeLinecap: 1,
          "stroke-linecap": "strokeLinecap",
          strokeLinejoin: 1,
          "stroke-linejoin": "strokeLinejoin",
          strokeMiterlimit: 1,
          "stroke-miterlimit": "strokeMiterlimit",
          strokeWidth: 1,
          "stroke-width": "strokeWidth",
          strokeOpacity: 1,
          "stroke-opacity": "strokeOpacity",
          suppressContentEditableWarning: 1,
          suppressHydrationWarning: 1,
          surfaceScale: 1,
          systemLanguage: 1,
          tableValues: 1,
          targetX: 1,
          targetY: 1,
          textAnchor: 1,
          "text-anchor": "textAnchor",
          textDecoration: 1,
          "text-decoration": "textDecoration",
          textLength: 1,
          textRendering: 1,
          "text-rendering": "textRendering",
          to: 0,
          transform: 0,
          typeof: 0,
          u1: 0,
          u2: 0,
          underlinePosition: 1,
          "underline-position": "underlinePosition",
          underlineThickness: 1,
          "underline-thickness": "underlineThickness",
          unicode: 0,
          unicodeBidi: 1,
          "unicode-bidi": "unicodeBidi",
          unicodeRange: 1,
          "unicode-range": "unicodeRange",
          unitsPerEm: 1,
          "units-per-em": "unitsPerEm",
          unselectable: 0,
          vAlphabetic: 1,
          "v-alphabetic": "vAlphabetic",
          values: 0,
          vectorEffect: 1,
          "vector-effect": "vectorEffect",
          version: 0,
          vertAdvY: 1,
          "vert-adv-y": "vertAdvY",
          vertOriginX: 1,
          "vert-origin-x": "vertOriginX",
          vertOriginY: 1,
          "vert-origin-y": "vertOriginY",
          vHanging: 1,
          "v-hanging": "vHanging",
          vIdeographic: 1,
          "v-ideographic": "vIdeographic",
          viewBox: 1,
          viewTarget: 1,
          visibility: 0,
          vMathematical: 1,
          "v-mathematical": "vMathematical",
          vocab: 0,
          widths: 0,
          wordSpacing: 1,
          "word-spacing": "wordSpacing",
          writingMode: 1,
          "writing-mode": "writingMode",
          x1: 0,
          x2: 0,
          x: 0,
          xChannelSelector: 1,
          xHeight: 1,
          "x-height": "xHeight",
          xlinkActuate: 1,
          "xlink:actuate": "xlinkActuate",
          xlinkArcrole: 1,
          "xlink:arcrole": "xlinkArcrole",
          xlinkHref: 1,
          "xlink:href": "xlinkHref",
          xlinkRole: 1,
          "xlink:role": "xlinkRole",
          xlinkShow: 1,
          "xlink:show": "xlinkShow",
          xlinkTitle: 1,
          "xlink:title": "xlinkTitle",
          xlinkType: 1,
          "xlink:type": "xlinkType",
          xmlBase: 1,
          "xml:base": "xmlBase",
          xmlLang: 1,
          "xml:lang": "xmlLang",
          xmlns: 0,
          "xml:space": "xmlSpace",
          xmlnsXlink: 1,
          "xmlns:xlink": "xmlnsXlink",
          xmlSpace: 1,
          y1: 0,
          y2: 0,
          y: 0,
          yChannelSelector: 1,
          z: 0,
          zoomAndPan: 1,
        });
    },
    1281: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      t.__esModule = !0;
      var i = r(n(1282)),
        o = n(1285);
      t.default = function (e, t) {
        var n = {};
        return e && "string" === typeof e
          ? ((0, i.default)(e, function (e, r) {
              e && r && (n[(0, o.camelCase)(e, t)] = r);
            }),
            n)
          : n;
      };
    },
    1282: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(1283);
      t.default = r;
    },
    1283: function (e, t, n) {
      var r = n(1284);
      function i(e, t) {
        var n,
          i = null;
        if (!e || "string" !== typeof e) return i;
        for (
          var o, a, s = r(e), l = "function" === typeof t, c = 0, u = s.length;
          c < u;
          c++
        )
          (o = (n = s[c]).property),
            (a = n.value),
            l ? t(o, a, n) : a && (i || (i = {}), (i[o] = a));
        return i;
      }
      (e.exports = i), (e.exports.default = i);
    },
    1284: function (e, t) {
      var n = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
        r = /\n/g,
        i = /^\s*/,
        o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
        a = /^:\s*/,
        s = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
        l = /^[;\s]*/,
        c = /^\s+|\s+$/g,
        u = "";
      function d(e) {
        return e ? e.replace(c, u) : u;
      }
      e.exports = function (e, t) {
        if ("string" !== typeof e)
          throw new TypeError("First argument must be a string");
        if (!e) return [];
        t = t || {};
        var c = 1,
          f = 1;
        function h(e) {
          var t = e.match(r);
          t && (c += t.length);
          var n = e.lastIndexOf("\n");
          f = ~n ? e.length - n : f + e.length;
        }
        function p() {
          var e = { line: c, column: f };
          return function (t) {
            return (t.position = new m(e)), k(), t;
          };
        }
        function m(e) {
          (this.start = e),
            (this.end = { line: c, column: f }),
            (this.source = t.source);
        }
        m.prototype.content = e;
        var g = [];
        function y(n) {
          var r = new Error(t.source + ":" + c + ":" + f + ": " + n);
          if (
            ((r.reason = n),
            (r.filename = t.source),
            (r.line = c),
            (r.column = f),
            (r.source = e),
            !t.silent)
          )
            throw r;
          g.push(r);
        }
        function v(t) {
          var n = t.exec(e);
          if (n) {
            var r = n[0];
            return h(r), (e = e.slice(r.length)), n;
          }
        }
        function k() {
          v(i);
        }
        function x(e) {
          var t;
          for (e = e || []; (t = b()); ) !1 !== t && e.push(t);
          return e;
        }
        function b() {
          var t = p();
          if ("/" == e.charAt(0) && "*" == e.charAt(1)) {
            for (
              var n = 2;
              u != e.charAt(n) &&
              ("*" != e.charAt(n) || "/" != e.charAt(n + 1));

            )
              ++n;
            if (((n += 2), u === e.charAt(n - 1)))
              return y("End of comment missing");
            var r = e.slice(2, n - 2);
            return (
              (f += 2),
              h(r),
              (e = e.slice(n)),
              (f += 2),
              t({ type: "comment", comment: r })
            );
          }
        }
        function w() {
          var e = p(),
            t = v(o);
          if (t) {
            if ((b(), !v(a))) return y("property missing ':'");
            var r = v(s),
              i = e({
                type: "declaration",
                property: d(t[0].replace(n, u)),
                value: r ? d(r[0].replace(n, u)) : u,
              });
            return v(l), i;
          }
        }
        return (
          k(),
          (function () {
            var e,
              t = [];
            for (x(t); (e = w()); ) !1 !== e && (t.push(e), x(t));
            return t;
          })()
        );
      };
    },
    1285: function (e, t, n) {
      "use strict";
      (t.__esModule = !0), (t.camelCase = void 0);
      var r = /^--[a-zA-Z0-9-]+$/,
        i = /-([a-z])/g,
        o = /^[^-]+$/,
        a = /^-(webkit|moz|ms|o|khtml)-/,
        s = /^-(ms)-/,
        l = function (e, t) {
          return t.toUpperCase();
        },
        c = function (e, t) {
          return "".concat(t, "-");
        };
      t.camelCase = function (e, t) {
        return (
          void 0 === t && (t = {}),
          (function (e) {
            return !e || o.test(e) || r.test(e);
          })(e)
            ? e
            : ((e = e.toLowerCase()),
              (e = t.reactCompat ? e.replace(s, c) : e.replace(a, c)).replace(
                i,
                l
              ))
        );
      };
    },
    1286: function (e, t, n) {
      var r = n(3),
        i = n(673),
        o = n(674),
        a = o.setStyleProp,
        s = o.canTextBeChildOfNode;
      function l(e) {
        return (
          o.PRESERVE_CUSTOM_ATTRIBUTES &&
          "tag" === e.type &&
          o.isCustomComponent(e.name, e.attribs)
        );
      }
      e.exports = function e(t, n) {
        for (
          var o,
            c,
            u,
            d,
            f,
            h = (n = n || {}).library || r,
            p = h.cloneElement,
            m = h.createElement,
            g = h.isValidElement,
            y = [],
            v = "function" === typeof n.replace,
            k = n.trim,
            x = 0,
            b = t.length;
          x < b;
          x++
        )
          if (((o = t[x]), v && g((u = n.replace(o)))))
            b > 1 && (u = p(u, { key: u.key || x })), y.push(u);
          else if ("text" !== o.type) {
            switch (
              ((d = o.attribs),
              l(o) ? a(d.style, d) : d && (d = i(d, o.name)),
              (f = null),
              o.type)
            ) {
              case "script":
              case "style":
                o.children[0] &&
                  (d.dangerouslySetInnerHTML = { __html: o.children[0].data });
                break;
              case "tag":
                "textarea" === o.name && o.children[0]
                  ? (d.defaultValue = o.children[0].data)
                  : o.children && o.children.length && (f = e(o.children, n));
                break;
              default:
                continue;
            }
            b > 1 && (d.key = x), y.push(m(o.name, d, f));
          } else {
            if ((c = !o.data.trim().length) && o.parent && !s(o.parent))
              continue;
            if (k && c) continue;
            y.push(o.data);
          }
        return 1 === y.length ? y[0] : y;
      };
    },
    250: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "domToReact", function () {
          return i;
        }),
        n.d(t, "htmlToDOM", function () {
          return o;
        }),
        n.d(t, "attributesToProps", function () {
          return a;
        }),
        n.d(t, "Comment", function () {
          return s;
        }),
        n.d(t, "Element", function () {
          return l;
        }),
        n.d(t, "ProcessingInstruction", function () {
          return c;
        }),
        n.d(t, "Text", function () {
          return u;
        });
      var r = n(1274),
        i = r.domToReact,
        o = r.htmlToDOM,
        a = r.attributesToProps,
        s = r.Comment,
        l = r.Element,
        c = r.ProcessingInstruction,
        u = r.Text;
      t.default = r;
    },
    673: function (e, t, n) {
      var r = n(1279),
        i = n(674),
        o = ["checked", "value"],
        a = ["input", "select", "textarea"],
        s = { reset: !0, submit: !0 };
      function l(e) {
        return r.possibleStandardNames[e];
      }
      e.exports = function (e, t) {
        var n,
          c,
          u,
          d,
          f,
          h = {},
          p = (e = e || {}).type && s[e.type];
        for (n in e)
          if (((u = e[n]), r.isCustomAttribute(n))) h[n] = u;
          else if ((d = l((c = n.toLowerCase()))))
            switch (
              ((f = r.getPropertyInfo(d)),
              -1 === o.indexOf(d) ||
                -1 === a.indexOf(t) ||
                p ||
                (d = l("default" + c)),
              (h[d] = u),
              f && f.type)
            ) {
              case r.BOOLEAN:
                h[d] = !0;
                break;
              case r.OVERLOADED_BOOLEAN:
                "" === u && (h[d] = !0);
            }
          else i.PRESERVE_CUSTOM_ATTRIBUTES && (h[n] = u);
        return i.setStyleProp(e.style, h), h;
      };
    },
    674: function (e, t, n) {
      var r = n(3),
        i = n(1281).default;
      var o = { reactCompat: !0 };
      var a = r.version.split(".")[0] >= 16,
        s = new Set([
          "tr",
          "tbody",
          "thead",
          "tfoot",
          "colgroup",
          "table",
          "head",
          "html",
          "frameset",
        ]);
      e.exports = {
        PRESERVE_CUSTOM_ATTRIBUTES: a,
        invertObject: function (e, t) {
          if (!e || "object" !== typeof e)
            throw new TypeError("First argument must be an object");
          var n,
            r,
            i = "function" === typeof t,
            o = {},
            a = {};
          for (n in e)
            (r = e[n]),
              i && (o = t(n, r)) && 2 === o.length
                ? (a[o[0]] = o[1])
                : "string" === typeof r && (a[r] = n);
          return a;
        },
        isCustomComponent: function (e, t) {
          if (-1 === e.indexOf("-")) return t && "string" === typeof t.is;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        },
        setStyleProp: function (e, t) {
          if (null !== e && void 0 !== e)
            try {
              t.style = i(e, o);
            } catch (n) {
              t.style = {};
            }
        },
        canTextBeChildOfNode: function (e) {
          return !s.has(e.name);
        },
        elementsWithNoTextChildren: s,
      };
    },
    703: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "Node", function () {
          return c;
        }),
        n.d(t, "DataNode", function () {
          return u;
        }),
        n.d(t, "Text", function () {
          return d;
        }),
        n.d(t, "Comment", function () {
          return f;
        }),
        n.d(t, "ProcessingInstruction", function () {
          return h;
        }),
        n.d(t, "NodeWithChildren", function () {
          return p;
        }),
        n.d(t, "CDATA", function () {
          return m;
        }),
        n.d(t, "Document", function () {
          return g;
        }),
        n.d(t, "Element", function () {
          return y;
        }),
        n.d(t, "isTag", function () {
          return v;
        }),
        n.d(t, "isCDATA", function () {
          return k;
        }),
        n.d(t, "isText", function () {
          return x;
        }),
        n.d(t, "isComment", function () {
          return b;
        }),
        n.d(t, "isDirective", function () {
          return w;
        }),
        n.d(t, "isDocument", function () {
          return S;
        }),
        n.d(t, "hasChildren", function () {
          return C;
        }),
        n.d(t, "cloneNode", function () {
          return O;
        }),
        n.d(t, "DomHandler", function () {
          return A;
        });
      var r,
        i = n(24),
        o = n(25);
      !(function (e) {
        (e.Root = "root"),
          (e.Text = "text"),
          (e.Directive = "directive"),
          (e.Comment = "comment"),
          (e.Script = "script"),
          (e.Style = "style"),
          (e.Tag = "tag"),
          (e.CDATA = "cdata"),
          (e.Doctype = "doctype");
      })(r || (r = {}));
      r.Root,
        r.Text,
        r.Directive,
        r.Comment,
        r.Script,
        r.Style,
        r.Tag,
        r.CDATA,
        r.Doctype;
      var a = n(16),
        s = n(65),
        l = n(66),
        c = (function () {
          function e() {
            Object(i.a)(this, e),
              (this.parent = null),
              (this.prev = null),
              (this.next = null),
              (this.startIndex = null),
              (this.endIndex = null);
          }
          return (
            Object(o.a)(e, [
              {
                key: "parentNode",
                get: function () {
                  return this.parent;
                },
                set: function (e) {
                  this.parent = e;
                },
              },
              {
                key: "previousSibling",
                get: function () {
                  return this.prev;
                },
                set: function (e) {
                  this.prev = e;
                },
              },
              {
                key: "nextSibling",
                get: function () {
                  return this.next;
                },
                set: function (e) {
                  this.next = e;
                },
              },
              {
                key: "cloneNode",
                value: function () {
                  return O(
                    this,
                    arguments.length > 0 &&
                      void 0 !== arguments[0] &&
                      arguments[0]
                  );
                },
              },
            ]),
            e
          );
        })(),
        u = (function (e) {
          Object(s.a)(n, e);
          var t = Object(l.a)(n);
          function n(e) {
            var r;
            return Object(i.a)(this, n), ((r = t.call(this)).data = e), r;
          }
          return (
            Object(o.a)(n, [
              {
                key: "nodeValue",
                get: function () {
                  return this.data;
                },
                set: function (e) {
                  this.data = e;
                },
              },
            ]),
            n
          );
        })(c),
        d = (function (e) {
          Object(s.a)(n, e);
          var t = Object(l.a)(n);
          function n() {
            var e;
            return (
              Object(i.a)(this, n),
              ((e = t.apply(this, arguments)).type = r.Text),
              e
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: "nodeType",
                get: function () {
                  return 3;
                },
              },
            ]),
            n
          );
        })(u),
        f = (function (e) {
          Object(s.a)(n, e);
          var t = Object(l.a)(n);
          function n() {
            var e;
            return (
              Object(i.a)(this, n),
              ((e = t.apply(this, arguments)).type = r.Comment),
              e
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: "nodeType",
                get: function () {
                  return 8;
                },
              },
            ]),
            n
          );
        })(u),
        h = (function (e) {
          Object(s.a)(n, e);
          var t = Object(l.a)(n);
          function n(e, o) {
            var a;
            return (
              Object(i.a)(this, n),
              ((a = t.call(this, o)).name = e),
              (a.type = r.Directive),
              a
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: "nodeType",
                get: function () {
                  return 1;
                },
              },
            ]),
            n
          );
        })(u),
        p = (function (e) {
          Object(s.a)(n, e);
          var t = Object(l.a)(n);
          function n(e) {
            var r;
            return Object(i.a)(this, n), ((r = t.call(this)).children = e), r;
          }
          return (
            Object(o.a)(n, [
              {
                key: "firstChild",
                get: function () {
                  var e;
                  return null !== (e = this.children[0]) && void 0 !== e
                    ? e
                    : null;
                },
              },
              {
                key: "lastChild",
                get: function () {
                  return this.children.length > 0
                    ? this.children[this.children.length - 1]
                    : null;
                },
              },
              {
                key: "childNodes",
                get: function () {
                  return this.children;
                },
                set: function (e) {
                  this.children = e;
                },
              },
            ]),
            n
          );
        })(c),
        m = (function (e) {
          Object(s.a)(n, e);
          var t = Object(l.a)(n);
          function n() {
            var e;
            return (
              Object(i.a)(this, n),
              ((e = t.apply(this, arguments)).type = r.CDATA),
              e
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: "nodeType",
                get: function () {
                  return 4;
                },
              },
            ]),
            n
          );
        })(p),
        g = (function (e) {
          Object(s.a)(n, e);
          var t = Object(l.a)(n);
          function n() {
            var e;
            return (
              Object(i.a)(this, n),
              ((e = t.apply(this, arguments)).type = r.Root),
              e
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: "nodeType",
                get: function () {
                  return 9;
                },
              },
            ]),
            n
          );
        })(p),
        y = (function (e) {
          Object(s.a)(n, e);
          var t = Object(l.a)(n);
          function n(e, o) {
            var a,
              s =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [],
              l =
                arguments.length > 3 && void 0 !== arguments[3]
                  ? arguments[3]
                  : "script" === e
                  ? r.Script
                  : "style" === e
                  ? r.Style
                  : r.Tag;
            return (
              Object(i.a)(this, n),
              ((a = t.call(this, s)).name = e),
              (a.attribs = o),
              (a.type = l),
              a
            );
          }
          return (
            Object(o.a)(n, [
              {
                key: "nodeType",
                get: function () {
                  return 1;
                },
              },
              {
                key: "tagName",
                get: function () {
                  return this.name;
                },
                set: function (e) {
                  this.name = e;
                },
              },
              {
                key: "attributes",
                get: function () {
                  var e = this;
                  return Object.keys(this.attribs).map(function (t) {
                    var n, r;
                    return {
                      name: t,
                      value: e.attribs[t],
                      namespace:
                        null === (n = e["x-attribsNamespace"]) || void 0 === n
                          ? void 0
                          : n[t],
                      prefix:
                        null === (r = e["x-attribsPrefix"]) || void 0 === r
                          ? void 0
                          : r[t],
                    };
                  });
                },
              },
            ]),
            n
          );
        })(p);
      function v(e) {
        return (
          (t = e).type === r.Tag || t.type === r.Script || t.type === r.Style
        );
        var t;
      }
      function k(e) {
        return e.type === r.CDATA;
      }
      function x(e) {
        return e.type === r.Text;
      }
      function b(e) {
        return e.type === r.Comment;
      }
      function w(e) {
        return e.type === r.Directive;
      }
      function S(e) {
        return e.type === r.Root;
      }
      function C(e) {
        return Object.prototype.hasOwnProperty.call(e, "children");
      }
      function O(e) {
        var t,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (x(e)) t = new d(e.data);
        else if (b(e)) t = new f(e.data);
        else if (v(e)) {
          var r = n ? T(e.children) : [],
            i = new y(e.name, Object(a.a)({}, e.attribs), r);
          r.forEach(function (e) {
            return (e.parent = i);
          }),
            null != e.namespace && (i.namespace = e.namespace),
            e["x-attribsNamespace"] &&
              (i["x-attribsNamespace"] = Object(a.a)(
                {},
                e["x-attribsNamespace"]
              )),
            e["x-attribsPrefix"] &&
              (i["x-attribsPrefix"] = Object(a.a)({}, e["x-attribsPrefix"])),
            (t = i);
        } else if (k(e)) {
          var o = n ? T(e.children) : [],
            s = new m(o);
          o.forEach(function (e) {
            return (e.parent = s);
          }),
            (t = s);
        } else if (S(e)) {
          var l = n ? T(e.children) : [],
            c = new g(l);
          l.forEach(function (e) {
            return (e.parent = c);
          }),
            e["x-mode"] && (c["x-mode"] = e["x-mode"]),
            (t = c);
        } else {
          if (!w(e)) throw new Error("Not implemented yet: ".concat(e.type));
          var u = new h(e.name, e.data);
          null != e["x-name"] &&
            ((u["x-name"] = e["x-name"]),
            (u["x-publicId"] = e["x-publicId"]),
            (u["x-systemId"] = e["x-systemId"])),
            (t = u);
        }
        return (
          (t.startIndex = e.startIndex),
          (t.endIndex = e.endIndex),
          null != e.sourceCodeLocation &&
            (t.sourceCodeLocation = e.sourceCodeLocation),
          t
        );
      }
      function T(e) {
        for (
          var t = e.map(function (e) {
              return O(e, !0);
            }),
            n = 1;
          n < t.length;
          n++
        )
          (t[n].prev = t[n - 1]), (t[n - 1].next = t[n]);
        return t;
      }
      var E = { withStartIndices: !1, withEndIndices: !1, xmlMode: !1 },
        A = (function () {
          function e(t, n, r) {
            Object(i.a)(this, e),
              (this.dom = []),
              (this.root = new g(this.dom)),
              (this.done = !1),
              (this.tagStack = [this.root]),
              (this.lastNode = null),
              (this.parser = null),
              "function" === typeof n && ((r = n), (n = E)),
              "object" === typeof t && ((n = t), (t = void 0)),
              (this.callback = null !== t && void 0 !== t ? t : null),
              (this.options = null !== n && void 0 !== n ? n : E),
              (this.elementCB = null !== r && void 0 !== r ? r : null);
          }
          return (
            Object(o.a)(e, [
              {
                key: "onparserinit",
                value: function (e) {
                  this.parser = e;
                },
              },
              {
                key: "onreset",
                value: function () {
                  (this.dom = []),
                    (this.root = new g(this.dom)),
                    (this.done = !1),
                    (this.tagStack = [this.root]),
                    (this.lastNode = null),
                    (this.parser = null);
                },
              },
              {
                key: "onend",
                value: function () {
                  this.done ||
                    ((this.done = !0),
                    (this.parser = null),
                    this.handleCallback(null));
                },
              },
              {
                key: "onerror",
                value: function (e) {
                  this.handleCallback(e);
                },
              },
              {
                key: "onclosetag",
                value: function () {
                  this.lastNode = null;
                  var e = this.tagStack.pop();
                  this.options.withEndIndices &&
                    (e.endIndex = this.parser.endIndex),
                    this.elementCB && this.elementCB(e);
                },
              },
              {
                key: "onopentag",
                value: function (e, t) {
                  var n = this.options.xmlMode ? r.Tag : void 0,
                    i = new y(e, t, void 0, n);
                  this.addNode(i), this.tagStack.push(i);
                },
              },
              {
                key: "ontext",
                value: function (e) {
                  var t = this.lastNode;
                  if (t && t.type === r.Text)
                    (t.data += e),
                      this.options.withEndIndices &&
                        (t.endIndex = this.parser.endIndex);
                  else {
                    var n = new d(e);
                    this.addNode(n), (this.lastNode = n);
                  }
                },
              },
              {
                key: "oncomment",
                value: function (e) {
                  if (this.lastNode && this.lastNode.type === r.Comment)
                    this.lastNode.data += e;
                  else {
                    var t = new f(e);
                    this.addNode(t), (this.lastNode = t);
                  }
                },
              },
              {
                key: "oncommentend",
                value: function () {
                  this.lastNode = null;
                },
              },
              {
                key: "oncdatastart",
                value: function () {
                  var e = new d(""),
                    t = new m([e]);
                  this.addNode(t), (e.parent = t), (this.lastNode = e);
                },
              },
              {
                key: "oncdataend",
                value: function () {
                  this.lastNode = null;
                },
              },
              {
                key: "onprocessinginstruction",
                value: function (e, t) {
                  var n = new h(e, t);
                  this.addNode(n);
                },
              },
              {
                key: "handleCallback",
                value: function (e) {
                  if ("function" === typeof this.callback)
                    this.callback(e, this.dom);
                  else if (e) throw e;
                },
              },
              {
                key: "addNode",
                value: function (e) {
                  var t = this.tagStack[this.tagStack.length - 1],
                    n = t.children[t.children.length - 1];
                  this.options.withStartIndices &&
                    (e.startIndex = this.parser.startIndex),
                    this.options.withEndIndices &&
                      (e.endIndex = this.parser.endIndex),
                    t.children.push(e),
                    n && ((e.prev = n), (n.next = e)),
                    (e.parent = t),
                    (this.lastNode = null);
                },
              },
            ]),
            e
          );
        })();
      t.default = A;
    },
  },
]);
//# sourceMappingURL=83.aa972a72.chunk.js.map
