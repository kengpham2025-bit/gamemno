System.register(
  "chunks:///_virtual/BaseMiniGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./DragView.ts",
  ],
  function (e) {
    "use strict";
    var n, i, t, o, r, a, c, l, u, s, d, _, p, f, v, m;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (a = e._decorator),
            (c = e.Node),
            (l = e.sys),
            (u = e.view),
            (s = e.Tween),
            (d = e.tween),
            (_ = e.Vec3),
            (p = e.UIOpacity);
        },
        function (e) {
          f = e.CommonPopup;
        },
        function (e) {
          v = e.GameConfigManager;
        },
        function (e) {
          m = e.default;
        },
      ],
      execute: function () {
        var g, h, b, w, y, k, T, z, B, S, C, D, P;
        r._RF.push({}, "66a2cqNPDtBN7sSh4pu0O5N", "BaseMiniGameView", void 0);
        var A = a.ccclass,
          M = a.property;
        e(
          "default",
          ((g = A("BaseMiniGameView")),
          (h = M(c)),
          (b = M(c)),
          (w = M([c])),
          (y = M(c)),
          (k = M(m)),
          g(
            ((B = n(
              (z = (function (e) {
                function n() {
                  for (
                    var n, i = arguments.length, r = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (n = e.call.apply(e, [this].concat(r)) || this),
                    t(n, "outside_click_node", B, o(n)),
                    t(n, "inner_click_node", S, o(n)),
                    t(n, "blur_node", C, o(n)),
                    t(n, "scale_node", D, o(n)),
                    t(n, "main_drag_view", P, o(n)),
                    n
                  );
                }
                i(n, e);
                var r = n.prototype;
                return (
                  (r.isCanDeactiveRoot = function () {
                    return !0;
                  }),
                  (r.onLoad = function () {
                    var e,
                      n,
                      i = this;
                    null == (e = this.outside_click_node) ||
                      e.on(c.EventType.TOUCH_START, function () {
                        i.outside_click_node &&
                          (i.outside_click_node.active = !1),
                          i.minimize();
                      }),
                      null == (n = this.inner_click_node) ||
                        n.on(c.EventType.TOUCH_END, function () {
                          var e;
                          (null != (e = i.main_drag_view) && e.is_moving) ||
                            (i.outside_click_node &&
                              (i.outside_click_node.active = !0),
                            i.minimize(!1));
                        }),
                      this.scale_node &&
                        (this.scale_node.scale = v.getPopupScale()),
                      l.isBrowser &&
                        u.setResizeCallback(function () {
                          var e;
                          null == (e = i.main_drag_view) ||
                            e.checkAndSnapToBorder();
                        });
                  }),
                  (r.minimize = function (e) {
                    var n = this;
                    (void 0 === e && (e = !0),
                    s.stopAllByTarget(this.scale_node || void 0),
                    e)
                      ? d(this.scale_node)
                          .sequence(
                            d().to(0.2, { scale: new _(0.5, 0.5, 0.5) }),
                            d().call(function () {
                              var e;
                              null == (e = n.main_drag_view) ||
                                e.checkAndSnapToBorder();
                            })
                          )
                          .start()
                      : d(this.scale_node)
                          .sequence(
                            d().to(0.2, { scale: v.getPopupScale() }),
                            d().call(function () {
                              var e;
                              null == (e = n.main_drag_view) ||
                                e.checkAndSnapToBorder();
                            })
                          )
                          .start();
                  }),
                  (r.IsLiveStreamOverlap = function (n) {
                    return !!e.prototype.IsLiveStreamOverlap.call(this, n);
                  }),
                  (r.blur = function (e) {
                    void 0 === e && (e = !0),
                      this.blur_node.forEach(function (n) {
                        var i = n.getComponent(p);
                        i && (i.opacity = e ? 100 : 255);
                      });
                  }),
                  n
                );
              })(f)).prototype,
              "outside_click_node",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (S = n(z.prototype, "inner_click_node", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = n(z.prototype, "blur_node", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (D = n(z.prototype, "scale_node", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = n(z.prototype, "main_drag_view", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = z))
          ) || T)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BatCmp.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./DragView.ts"],
  function (n) {
    "use strict";
    var o, i, t, e, s, a, r, l;
    return {
      setters: [
        function (n) {
          o = n.inheritsLoose;
        },
        function (n) {
          (i = n.cclegacy),
            (t = n._decorator),
            (e = n.Vec3),
            (s = n.UITransform),
            (a = n.Node),
            (r = n.Component);
        },
        function (n) {
          l = n.default;
        },
      ],
      execute: function () {
        var u;
        i._RF.push({}, "2daf9IXt3xFa6fhmeS2qBDT", "BatCmp", void 0);
        var c = t.ccclass;
        n(
          "default",
          c("BatCmp")(
            (u = (function (n) {
              function i() {
                for (
                  var o, i = arguments.length, t = new Array(i), s = 0;
                  s < i;
                  s++
                )
                  t[s] = arguments[s];
                return (
                  ((o = n.call.apply(n, [this].concat(t)) || this).onOpenBat =
                    function () {}),
                  (o.originalPos = e.ZERO),
                  o
                );
              }
              o(i, n);
              var t = i.prototype;
              return (
                (t.init = function () {
                  var n = this;
                  this.originalPos = new e(this.node.position);
                  var o = this.node.getComponent(s),
                    i = null == o ? void 0 : o.getBoundingBox();
                  this.node.on(a.EventType.TOUCH_MOVE, function (o) {
                    (l.DISABLE = !0),
                      (n.node.position = new e(
                        n.node.position.x + o.getDelta().x,
                        n.node.position.y + o.getDelta().y,
                        0
                      )),
                      (n.node.position.x >
                        1.5 * ((null == i ? void 0 : i.xMax) || 0) ||
                        n.node.position.x <
                          1.5 * ((null == i ? void 0 : i.xMin) || 0) ||
                        n.node.position.y >
                          1.5 * ((null == i ? void 0 : i.yMax) || 0) ||
                        n.node.position.y <
                          1.5 * ((null == i ? void 0 : i.yMin) || 0)) &&
                        n.onOpenBat();
                  }),
                    this.node.on(a.EventType.TOUCH_END, function () {
                      (l.DISABLE = !1), n.node.setPosition(n.originalPos);
                    }),
                    this.node.on(a.EventType.TOUCH_CANCEL, function () {
                      (l.DISABLE = !1), n.node.setPosition(n.originalPos);
                    });
                }),
                (t.hide = function () {
                  setTimeout(function () {
                    l.DISABLE = !1;
                  }, 500),
                    null == this.originalPos &&
                      (this.originalPos = new e(this.node.position)),
                    this.node.setPosition(this.originalPos),
                    (this.node.active = !1),
                    (this.onOpenBat = function () {});
                }),
                i
              );
            })(r))
          ) || u
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CCButtonLoader.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CCComponentLoader.ts"],
  function (e) {
    "use strict";
    var t, i, n, r, o, a, l;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy), (a = e._decorator);
        },
        function (e) {
          l = e.default;
        },
      ],
      execute: function () {
        var u, s, c, p, b, f, _, m, d, g, y, h, z, w, L;
        o._RF.push({}, "6604f1KVStOhapZ1JnR0jSQ", "CCButtonLoader", void 0);
        var C = a.ccclass,
          B = a.property;
        e(
          "default",
          ((u = C("CCButtonLoader")),
          (s = B(String)),
          (c = B(String)),
          u(
            ((f = t(
              (b = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, o = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    n(t, "asset_path_normal", f, r(t)),
                    n(t, "insetTop_normal", _, r(t)),
                    n(t, "insetBottom_normal", m, r(t)),
                    n(t, "insetLeft_normal", d, r(t)),
                    n(t, "insetRight_normal", g, r(t)),
                    n(t, "asset_path_disable", y, r(t)),
                    n(t, "insetTop_disable", h, r(t)),
                    n(t, "insetBottom_disable", z, r(t)),
                    n(t, "insetLeft_disable", w, r(t)),
                    n(t, "insetRight_disable", L, r(t)),
                    (t.button = null),
                    t
                  );
                }
                i(t, e);
                var o = t.prototype;
                return (
                  (o.init = function () {}),
                  (o.getPaths = function () {
                    return [];
                  }),
                  t
                );
              })(l)).prototype,
              "asset_path_normal",
              [s],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "";
                },
              }
            )),
            (_ = t(b.prototype, "insetTop_normal", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (m = t(b.prototype, "insetBottom_normal", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (d = t(b.prototype, "insetLeft_normal", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (g = t(b.prototype, "insetRight_normal", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (y = t(b.prototype, "asset_path_disable", [c], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (h = t(b.prototype, "insetTop_disable", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (z = t(b.prototype, "insetBottom_disable", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (w = t(b.prototype, "insetLeft_disable", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (L = t(b.prototype, "insetRight_disable", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (p = b))
          ) || p)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CCComponentLoader.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var n, e, o, r;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (o = t._decorator), (r = t.Component);
        },
      ],
      execute: function () {
        var c;
        e._RF.push({}, "02d2dbtfktBLbe6ObO7J5GY", "CCComponentLoader", void 0);
        var u = o.ccclass;
        t(
          "default",
          u("CCComponentLoader")(
            (c = (function (t) {
              function e() {
                return t.apply(this, arguments) || this;
              }
              n(e, t);
              var o = e.prototype;
              return (
                (o.init = function () {}),
                (o.getPaths = function () {
                  return [];
                }),
                e
              );
            })(r))
          ) || c
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CCMiniGameCommonPopup.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, n, o, i, r, u, a, l, c;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (u = e._decorator),
            (a = e.Label),
            (l = e.Button),
            (c = e.Component);
        },
      ],
      execute: function () {
        var p, s, f, m, b, y, C, g, h;
        r._RF.push(
          {},
          "4609d2BeDBJbIcpiLbwoKTf",
          "CCMiniGameCommonPopup",
          void 0
        );
        var d = u.ccclass,
          v = u.property;
        e(
          "default",
          ((p = d("CCMiniGameCommonPopup")),
          (s = v(a)),
          (f = v(l)),
          (m = v(l)),
          p(
            ((C = t(
              (y = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, r = new Array(n), u = 0;
                    u < n;
                    u++
                  )
                    r[u] = arguments[u];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    o(t, "message", C, i(t)),
                    o(t, "closebutton", g, i(t)),
                    o(t, "confirmbutton", h, i(t)),
                    t
                  );
                }
                n(t, e);
                var r = t.prototype;
                return (
                  (r.show = function (e, t, n) {}), (r.hide = function () {}), t
                );
              })(c)).prototype,
              "message",
              [s],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (g = t(y.prototype, "closebutton", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (h = t(y.prototype, "confirmbutton", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = y))
          ) || b)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CCMiniGameRoot.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameConfigManager.ts",
    "./MiniGameNodeController.ts",
    "./MiniGameNetworkHandler.ts",
    "./EventManager.ts",
    "./State.ts",
    "./Utils.ts",
    "./BundleManager.ts",
    "./Define.ts",
    "./PersistManager.ts",
    "./SocketManager.ts",
  ],
  function (n) {
    "use strict";
    var i,
      e,
      t,
      a,
      o,
      r,
      _,
      s,
      m,
      c,
      l,
      d,
      u,
      g,
      f,
      p,
      h,
      v,
      M,
      I,
      b,
      y,
      S,
      G,
      P;
    return {
      setters: [
        function (n) {
          (i = n.applyDecoratedDescriptor),
            (e = n.inheritsLoose),
            (t = n.initializerDefineProperty),
            (a = n.assertThisInitialized),
            (o = n.createClass);
        },
        function (n) {
          (r = n.cclegacy),
            (_ = n._decorator),
            (s = n.Node),
            (m = n.Prefab),
            (c = n.log),
            (l = n.instantiate),
            (d = n.UITransform),
            (u = n.Component);
        },
        function (n) {
          g = n.GameConfigManager;
        },
        function (n) {
          f = n.default;
        },
        function (n) {
          p = n.MiniGameNetworkHandler;
        },
        function (n) {
          (h = n.eventManager), (v = n.EventKey);
        },
        function (n) {
          M = n.state;
        },
        function (n) {
          I = n.removeFromParentAndDestroy;
        },
        function (n) {
          b = n.bundleManager;
        },
        function (n) {
          (y = n.Bundle), (S = n.LazyPriority);
        },
        function (n) {
          G = n.PersistManager;
        },
        function (n) {
          P = n.MessageRequest;
        },
      ],
      execute: function () {
        var C, N, E, H, z, w, T, W, k, D;
        r._RF.push({}, "5756fh1+PRNDr6zBsRB0hbb", "CCMiniGameRoot", void 0);
        var L = _.ccclass,
          R = _.property;
        n(
          "CCMiniGameRoot",
          ((C = L("CCMiniGameRoot")),
          (N = R(s)),
          (E = R(m)),
          (H = R(m)),
          C(
            (((D = (function (n) {
              function i() {
                for (
                  var i, e = arguments.length, o = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  o[r] = arguments[r];
                return (
                  (i = n.call.apply(n, [this].concat(o)) || this),
                  t(i, "mini_game_node", T, a(i)),
                  (i.mini_game_node_instance = null),
                  (i.is_game_run_in_background = !1),
                  t(i, "prefab_mini_game_node", W, a(i)),
                  t(i, "prefab_mini_game_node_portrait", k, a(i)),
                  (i._isPortrait = void 0),
                  (i._portraitScale = 1),
                  (i._waitingUpdatePortraitMode = !1),
                  i
                );
              }
              e(i, n);
              var r = i.prototype;
              return (
                (r.updatePortrait = function (n, e, t, a) {
                  var o;
                  if (
                    (void 0 === e && (e = 1),
                    void 0 === t && (t = 0),
                    void 0 === a && (a = !0),
                    this.prefab_mini_game_node &&
                      this.prefab_mini_game_node_portrait)
                  ) {
                    void 0 === n &&
                      (this.update(0),
                      (n = i.WIN_SIZE_WIDTH < i.WIN_SIZE_HEIGHT));
                    var r = a && void 0 !== this._isPortrait,
                      _ = this._isPortrait !== n;
                    if (((this._isPortrait = n), _)) {
                      var s, m;
                      if (
                        (c("CCMiniGameRoot isPortrait=", n, e),
                        (this._portraitScale = e),
                        this.mini_game_node && I(this.mini_game_node),
                        (this.mini_game_node = l(
                          n
                            ? this.prefab_mini_game_node_portrait
                            : this.prefab_mini_game_node
                        )),
                        this.node.addChild(this.mini_game_node),
                        (this.mini_game_node_instance =
                          null == (s = this.mini_game_node)
                            ? void 0
                            : s.getComponent(f)),
                        n)
                      ) {
                        var u, g, p;
                        null == (u = this.mini_game_node) ||
                          u.children.forEach(function (n) {
                            return n.setScale(e, e);
                          });
                        var h =
                          null == (g = this.mini_game_node_instance) ||
                          null == (p = g.getCloseNode())
                            ? void 0
                            : p.getComponent(d);
                        null == h || h.setContentSize(110 * e, 100 * e);
                      }
                      null == (m = this.mini_game_node_instance) ||
                        m.activeMiniGameNode(),
                        r && this.login();
                    }
                    null == (o = this.mini_game_node_instance) ||
                      o.adjustPosition(t);
                  } else void 0 !== n && (this._waitingUpdatePortraitMode = n);
                }),
                (i.getInstance = function () {
                  return i._instance;
                }),
                (r.closeMiniGameNode = function () {
                  this.mini_game_node_instance &&
                    ((this.mini_game_node_instance.node.active = !1),
                    this.mini_game_node_instance.forceAllMachineStop(),
                    this.mini_game_node_instance.closeAll());
                }),
                (r.closeMiniGameNode2 = function () {
                  this.mini_game_node_instance &&
                    (this.mini_game_node_instance.node.active = !1);
                }),
                (r.onLoad = function () {
                  var n,
                    e = this;
                  (i._instance = this),
                    (this.mini_game_node_instance =
                      null == (n = this.mini_game_node)
                        ? void 0
                        : n.getComponent(f)),
                    this.updatePortrait(!1),
                    (M.minigameIsShowingGame = function () {
                      var n;
                      return (
                        (null == (n = e.mini_game_node_instance)
                          ? void 0
                          : n.IsShowingGame()) || !1
                      );
                    }),
                    (M.minigamesIsOverlap = function (n) {
                      var i;
                      return (
                        (null == (i = e.mini_game_node_instance)
                          ? void 0
                          : i.IsOverlap(n)) || !1
                      );
                    }),
                    h.on(
                      v.SocketLoginMini,
                      this,
                      function () {
                        return e.login();
                      },
                      !0
                    ),
                    h.on(v.LazyMini, this, function (n, i) {
                      var t,
                        a,
                        o = n[0],
                        r = n[1];
                      h.off(e, v.LazyMini),
                        (e.prefab_mini_game_node =
                          o || e.prefab_mini_game_node),
                        (e.prefab_mini_game_node_portrait =
                          r || e.prefab_mini_game_node_portrait);
                      var _ =
                        null == (t = e.mini_game_node_instance)
                          ? void 0
                          : t.getState();
                      e.updatePortrait(e._waitingUpdatePortraitMode),
                        _ &&
                          (null == (a = e.mini_game_node_instance) ||
                            a.setState(_)),
                        i.forEach(function (n) {
                          var i;
                          "open" === n &&
                            (e.openMiniGameNode(),
                            null == (i = e.mini_game_node_instance) ||
                              i.open());
                        });
                    }),
                    b.loadLazy(y.mini_lazy);
                }),
                (r.update = function (n) {
                  (i.WIN_SIZE_WIDTH = G.getInstance().WIN_SIZE_WIDTH || 0),
                    (i.WIN_SIZE_HEIGHT = G.getInstance().WIN_SIZE_HEIGHT || 0);
                }),
                (r.onDestroy = function () {
                  (i._instance = null),
                    (M.minigameIsShowingGame = function () {
                      return !1;
                    }),
                    (M.minigamesIsOverlap = function () {
                      return !1;
                    });
                }),
                (r.clickOpen = function () {
                  var n;
                  null == (n = this.mini_game_node_instance) || n.open(),
                    this.prefab_mini_game_node ||
                      b.loadLazy(y.mini_lazy, S.MiniClick, "open");
                }),
                (r.openMiniGameNode = function () {
                  this.mini_game_node_instance &&
                    ((this.mini_game_node_instance.node.active = !0),
                    this.mini_game_node_instance.forceAllMachineStop(!0, !1));
                }),
                (r.openMiniGameNode2 = function () {
                  this.mini_game_node_instance &&
                    (this.mini_game_node_instance.node.active = !0);
                }),
                (r.login = function () {
                  var n;
                  p.IsNewSocket()
                    ? p.init(g.MiniWSURL)
                    : (null == (n = i.getInstance()) || n.openMiniGameNode(),
                      p.login());
                }),
                (r.logout = function () {
                  var n = [P.LogOut_Type, "MiniGame"];
                  p.send(n);
                }),
                (i.sendMiniGamePing = function (n) {
                  void 0 === n && (n = 0);
                  var i = n + 1,
                    e = { id: 0 },
                    t = [P.Ping_Type, "Simms", i, 0, e];
                  p.send(t);
                }),
                (i.subscribeSlots = function (n) {
                  void 0 === n && (n = !0);
                  var i = 10001;
                  n || (i = 10002);
                  var e = {};
                  e.cmd = i;
                  var t = [P.ZonePlugin_Type, "MiniGame", "lobbyPlugin", e];
                  p.send(t);
                }),
                o(
                  i,
                  [
                    {
                      key: "isPortrait",
                      get: function () {
                        return !!this._isPortrait;
                      },
                    },
                    {
                      key: "portraitScale",
                      get: function () {
                        return this._portraitScale;
                      },
                    },
                  ],
                  [
                    {
                      key: "instance",
                      get: function () {
                        return i._instance;
                      },
                    },
                  ]
                ),
                i
              );
            })(u))._instance = null),
            (D.WIN_SIZE_WIDTH = 0),
            (D.WIN_SIZE_HEIGHT = 0),
            (T = i((w = D).prototype, "mini_game_node", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = i(w.prototype, "prefab_mini_game_node", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = i(w.prototype, "prefab_mini_game_node_portrait", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = w))
          ) || z)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CCSpriteFrameLoader.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CCComponentLoader.ts"],
  function (e) {
    "use strict";
    var t, r, i, n, o, a, u;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy), (a = e._decorator);
        },
        function (e) {
          u = e.default;
        },
      ],
      execute: function () {
        var l, c, s, p, f, b, m, g, h;
        o._RF.push(
          {},
          "a90333ocoNNnK6xniFXmkhm",
          "CCSpriteFrameLoader",
          void 0
        );
        var y = a.ccclass,
          d = a.property;
        e(
          "default",
          ((l = y("CCSpriteFrameLoader")),
          (c = d(String)),
          l(
            ((f = t(
              (p = (function (e) {
                function t() {
                  for (
                    var t, r = arguments.length, o = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    i(t, "asset_path", f, n(t)),
                    i(t, "insetTop", b, n(t)),
                    i(t, "insetBottom", m, n(t)),
                    i(t, "insetLeft", g, n(t)),
                    i(t, "insetRight", h, n(t)),
                    (t.sprite = null),
                    t
                  );
                }
                r(t, e);
                var o = t.prototype;
                return (
                  (o.init = function () {}),
                  (o.getPaths = function () {
                    return [];
                  }),
                  t
                );
              })(u)).prototype,
              "asset_path",
              [c],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return "";
                },
              }
            )),
            (b = t(p.prototype, "insetTop", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (m = t(p.prototype, "insetBottom", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (g = t(p.prototype, "insetLeft", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (h = t(p.prototype, "insetRight", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (s = p))
          ) || s)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ChatItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./TaiXiuChatView.ts",
    "./State.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, r, o, s, a, l, h, u, c, d;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (s = t._decorator),
            (a = t.Label),
            (l = t.UITransform),
            (h = t.Color),
            (u = t.Component);
        },
        function (t) {
          c = t.default;
        },
        function (t) {
          d = t.state;
        },
      ],
      execute: function () {
        var m, f, g, _, p, x, y, T, v, I, b;
        o._RF.push({}, "947410bQjhPfZBbhHbekeaU", "ChatItemView", void 0);
        var S = s.ccclass,
          z = s.property;
        t(
          "default",
          ((m = S("ChatItemView")),
          (f = z(a)),
          (g = z(a)),
          (_ = z(l)),
          (p = z(l)),
          m(
            ((T = e(
              (y = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "txt_display", T, r(e)),
                    n(e, "txt_message", v, r(e)),
                    n(e, "nodeTranform", I, r(e)),
                    n(e, "txt_message_transform", b, r(e)),
                    (e.IS_DIRTY = !0),
                    (e.originNodeHeight = 0),
                    e
                  );
                }
                i(e, t);
                var o = e.prototype;
                return (
                  (o.getUITransform = function () {
                    return this.nodeTranform;
                  }),
                  (o.update = function (t) {
                    var e, i, n, r, o, s, a, l, h, u;
                    (this.nodeTranform &&
                      (this.originNodeHeight =
                        this.nodeTranform.contentSize.height),
                    null == (e = this.nodeTranform) ||
                      e.setContentSize(
                        (null == (i = this.txt_message_transform)
                          ? void 0
                          : i.contentSize.width) || 0,
                        (null == (n = this.txt_message_transform)
                          ? void 0
                          : n.contentSize.height) || 0
                      ),
                    (null == (r = this.nodeTranform)
                      ? void 0
                      : r.contentSize.height) != this.originNodeHeight) &&
                      ((this.originNodeHeight =
                        (null == (h = this.nodeTranform)
                          ? void 0
                          : h.contentSize.height) || 0),
                      null == (u = c.getInstance()) || u.markAsDirty());
                    this.IS_DIRTY &&
                      (null == (o = this.nodeTranform)
                        ? void 0
                        : o.contentSize.width) ==
                        (null == (s = this.txt_message_transform)
                          ? void 0
                          : s.contentSize.width) &&
                      (null == (a = this.nodeTranform)
                        ? void 0
                        : a.contentSize.height) ==
                        (null == (l = this.txt_message_transform)
                          ? void 0
                          : l.contentSize.height) &&
                      (this.IS_DIRTY = !1);
                  }),
                  (o.isDirty = function () {
                    return this.IS_DIRTY;
                  }),
                  (o.show = function (t, e) {
                    var i;
                    this.txt_display && (this.txt_display.node.active = !0),
                      (null != t && null != t && "" != t) ||
                        ((t = "??????"),
                        this.txt_display &&
                          (this.txt_display.node.active = !1)),
                      null == e && (e = "??????"),
                      (e = this.codeToEmote(e));
                    var n = new h(255, 117, 243, 255);
                    t.length > 4 && "[TOP" == t.substr(0, 4) && (n = h.GREEN);
                    t === d.displayName && (n = h.YELLOW),
                      this.txt_display && (this.txt_display.color = n),
                      this.txt_display && (this.txt_display.string = t + ":"),
                      null != (i = this.txt_display) && i.node.active
                        ? (this.txt_message &&
                            (this.txt_message.color = h.WHITE),
                          this.txt_message &&
                            (this.txt_message.string = t + ": " + e))
                        : (this.txt_message && (this.txt_message.color = h.RED),
                          this.txt_message && (this.txt_message.string = e)),
                      (this.IS_DIRTY = !0);
                  }),
                  (o.codeToEmote = function (t) {
                    return t.replace(/:emoji_([0-9A-F]+):/g, function (t, e) {
                      var i = parseInt(e, 16);
                      return String.fromCodePoint(i);
                    });
                  }),
                  e
                );
              })(u)).prototype,
              "txt_display",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (v = e(y.prototype, "txt_message", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(y.prototype, "nodeTranform", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = e(y.prototype, "txt_message_transform", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = y))
          ) || x)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Downloader.ts",
  ["cc", "./PersistManager.ts"],
  function (e) {
    "use strict";
    var t, n, r, a, o;
    return {
      setters: [
        function (e) {
          (t = e.cclegacy),
            (n = e.assetManager),
            (r = e.SpriteFrame),
            (a = e.Texture2D);
        },
        function (e) {
          o = e.PersistManager;
        },
      ],
      execute: function () {
        t._RF.push({}, "1d8859GvwFEDL6Gr0cL0Ypp", "Downloader", void 0);
        e(
          "default",
          (function () {
            function e() {}
            return (
              (e.loadRemoteSpriteFrame = function (e, t) {
                o.getInstance().getAvatar(e, t);
              }),
              (e.loadRemoteSpriteFrame2 = function (e, t, o) {
                n.loadRemote(e, function (e, n) {
                  if (null == e) {
                    var i = new r(),
                      u = new a();
                    (u.image = n), (i.texture = u), (i.name = t), o(i);
                  }
                });
              }),
              e
            );
          })()
        );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DragonBall_SlotMachineCmp.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./LineSpriteComponent.ts",
    "./DragonBall_SlotMachineColumn.ts",
  ],
  function (n) {
    "use strict";
    var t, e, i, l, o, a, r, s, u, c, p, h, f, d;
    return {
      setters: [
        function (n) {
          (t = n.applyDecoratedDescriptor),
            (e = n.inheritsLoose),
            (i = n.initializerDefineProperty),
            (l = n.assertThisInitialized);
        },
        function (n) {
          (o = n.cclegacy),
            (a = n._decorator),
            (r = n.Tween),
            (s = n.tween),
            (u = n.Vec3),
            (c = n.Color),
            (p = n.Component);
        },
        function (n) {
          h = n.default;
        },
        function (n) {
          (f = n.default), (d = n.SlotMachineState);
        },
      ],
      execute: function () {
        var m, v, g, y, C, S, E;
        o._RF.push(
          {},
          "75ea0l8pLBN9qkhb2KB2KkI",
          "DragonBall_SlotMachineCmp",
          void 0
        );
        var w = a.ccclass,
          L = a.property;
        n(
          "default",
          ((m = L([f])),
          (v = L(h)),
          w(
            (((E = (function (n) {
              function t() {
                for (
                  var t, e = arguments.length, o = new Array(e), a = 0;
                  a < e;
                  a++
                )
                  o[a] = arguments[a];
                return (
                  (t = n.call.apply(n, [this].concat(o)) || this),
                  i(t, "colums", C, l(t)),
                  i(t, "lineCmp", S, l(t)),
                  (t.onMachineStopped = function () {}),
                  (t.isHasData = !1),
                  t
                );
              }
              e(t, n);
              var o = t.prototype;
              return (
                (o.init = function (n) {
                  var t = this;
                  this.colums.forEach(function (t, e) {
                    var i = n[e];
                    t.init(i);
                  }),
                    (this.colums[this.colums.length - 1].onStopped =
                      function () {
                        return t.onMachineStopped();
                      });
                }),
                (o.spin = function () {
                  var n, t;
                  (this.isHasData = !1),
                    null == (n = this.lineCmp) || n.clear(),
                    r.stopAllByTarget(
                      (null == (t = this.lineCmp) ? void 0 : t.node) || void 0
                    ),
                    this.colums.forEach(function (n) {
                      return n.spin();
                    });
                }),
                (o.stop = function (n) {
                  this.isHasData = !0;
                  var t = [0.6, 1.2, 1.8, 2.2, 2.6];
                  this.colums.forEach(function (e, i) {
                    var l = e;
                    r.stopAllByTarget(l.node);
                    var o = [n[i], n[i + 5], n[i + 10]];
                    s(l.node)
                      .sequence(
                        s().delay(t[i]),
                        s().call(function () {
                          l.stop(o);
                        })
                      )
                      .start();
                  });
                }),
                (o.stopImmediatelyByButton = function (n, t) {
                  (this.isHasData = !0),
                    this.colums.forEach(function (e, i) {
                      var l = e;
                      if (l.getstate() == d.SPINNING) {
                        r.stopAllByTarget(l.node);
                        var o = [n[i], n[i + 5], n[i + 10]];
                        s(l.node)
                          .sequence(
                            s().delay(t[i]),
                            s().call(function () {
                              l.stop(o);
                            })
                          )
                          .start();
                      }
                    });
                }),
                (o.stopImmediately = function (n, t) {
                  (this.isHasData = !0),
                    this.colums.forEach(function (e, i) {
                      var l = e;
                      r.stopAllByTarget(l.node);
                      var o = [n[i], n[i + 5], n[i + 10]];
                      s(l.node)
                        .sequence(
                          s().delay(t[i]),
                          s().call(function () {
                            l.stop(o);
                          })
                        )
                        .start();
                    });
                }),
                (o.isStopped = function () {
                  return (
                    this.colums.filter(function (n) {
                      return n.getstate() == d.STOPPED;
                    }).length >= this.colums.length
                  );
                }),
                (o.isSpinning = function () {
                  return (
                    this.colums.filter(function (n) {
                      return n.getstate() == d.SPINNING;
                    }).length >= this.colums.length
                  );
                }),
                (o.showLines = function (n, t, e, i) {
                  var l,
                    o,
                    a,
                    u = this;
                  null == (l = this.lineCmp) || l.clear(),
                    r.stopAllByTarget(
                      (null == (o = this.lineCmp) ? void 0 : o.node) || void 0
                    );
                  var c = 0,
                    p = t / n.length;
                  n.forEach(function (n) {
                    var t,
                      e = s(null == (t = u.lineCmp) ? void 0 : t.node).sequence(
                        s().delay(c),
                        s().call(function () {
                          u.drawLine(n, !1);
                        })
                      );
                    (c += p), null == e || e.start();
                  }),
                    s(null == (a = this.lineCmp) ? void 0 : a.node)
                      .sequence(
                        s().delay(t + e),
                        s().call(function () {
                          null == i || i();
                        })
                      )
                      .start();
                }),
                (o.showEachLines = function (n, e) {
                  var i,
                    l,
                    o = this;
                  void 0 === e && (e = 0),
                    null == (i = this.lineCmp) || i.clear(),
                    r.stopAllByTarget(
                      (null == (l = this.lineCmp) ? void 0 : l.node) || void 0
                    );
                  var a = 0;
                  n.forEach(function (i, l) {
                    var r;
                    s(null == (r = o.lineCmp) ? void 0 : r.node)
                      .sequence(
                        s().delay(a),
                        s().call(function () {
                          var n;
                          o.drawLine(i, !0);
                          var e = null == (n = t.LINE) ? void 0 : n[i];
                          null == e ||
                            e.forEach(function (n, t) {
                              o.colums[t].showAnimFx(n);
                            });
                        }),
                        s().delay(e),
                        s().call(function () {
                          var t;
                          l == n.length - 1 &&
                            (null == (t = o.lineCmp) || t.clear());
                        })
                      )
                      .start(),
                      (a += e);
                  });
                }),
                (o.showLine = function (n) {
                  var t;
                  null == (t = this.lineCmp) || t.clear(), this.drawLine(n, !0);
                }),
                (o.drawLine = function (n, e) {
                  var i,
                    l,
                    o = this;
                  console.log("DMM drawline id", n);
                  var a = null == (i = t.LINE) ? void 0 : i[n],
                    r =
                      (null == a
                        ? void 0
                        : a.map(function (n, t) {
                            return o.colums[t].getLineWorldPosition()[n];
                          })) || [];
                  null == (l = this.lineCmp) ||
                    l.draw(
                      r.map(function (n) {
                        return new u(
                          null == n ? void 0 : n.x,
                          null == n ? void 0 : n.y,
                          0
                        );
                      }),
                      8,
                      c.WHITE,
                      null,
                      e
                    );
                }),
                t
              );
            })(p)).SPIN_SPEED = 1500),
            (E.TIME_TO_SHOW_RESULT = 0.05),
            (E.LINE = [
              [2, 2, 2],
              [1, 1, 1],
              [0, 0, 0],
              [2, 0, 2],
              [0, 2, 0],
              [2, 1, 2],
              [2, 1, 0],
              [0, 1, 2],
              [1, 0, 1],
              [1, 2, 1],
              [0, 1, 0],
              [2, 2, 1],
              [1, 1, 0],
              [1, 1, 2],
              [0, 0, 1],
              [1, 2, 2],
              [0, 1, 1],
              [2, 1, 1],
              [1, 0, 0],
              [2, 0, 1],
            ]),
            (C = t((y = E).prototype, "colums", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (S = t(y.prototype, "lineCmp", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = y))
          ) || g)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DragonBall_SlotMachineColumn.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./DragonBallGameView.ts",
    "./DragonBall_SlotMachineCmp.ts",
    "./DragonBall_SlotMachineItemView.ts",
  ],
  function (t) {
    "use strict";
    var i, o, n, e, s, a, r, p, c, l, u, _, h, m, f;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (a = t._decorator),
            (r = t.Node),
            (p = t.Layout),
            (c = t.UITransform),
            (l = t.Vec3),
            (u = t.tween),
            (_ = t.Component);
        },
        function (t) {
          h = t.default;
        },
        function (t) {
          m = t.default;
        },
        function (t) {
          f = t.default;
        },
      ],
      execute: function () {
        var d, y, g, v, S, P, I, E, b;
        t("SlotMachineState", void 0),
          s._RF.push(
            {},
            "62b3cgv2IpIJ5UF9UYN32dP",
            "DragonBall_SlotMachineColumn",
            void 0
          ),
          (function (t) {
            (t[(t.SPINNING = 0)] = "SPINNING"),
              (t[(t.CHECK_TO_STOP = 1)] = "CHECK_TO_STOP"),
              (t[(t.STOPPING = 2)] = "STOPPING"),
              (t[(t.STOPPED = 3)] = "STOPPED");
          })(b || (b = t("SlotMachineState", {})));
        var C = a.ccclass,
          T = a.property;
        t(
          "default",
          ((d = T([r])),
          (y = T([r])),
          (g = T(p)),
          C(
            ((P = i(
              (S = (function (t) {
                function i() {
                  for (
                    var i, o = arguments.length, s = new Array(o), a = 0;
                    a < o;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(s)) || this),
                    n(i, "item_node", P, e(i)),
                    n(i, "lineNodes", I, e(i)),
                    n(i, "layout", E, e(i)),
                    (i.state = b.STOPPED),
                    (i.item_position_y_limited = 0),
                    (i.item_position_y_top = 0),
                    (i.item_position_y_bottom = 0),
                    (i.item_position_y_stop = 0),
                    (i.item_top = null),
                    (i.bouncing_offset = 0),
                    (i.onStopped = function () {}),
                    i
                  );
                }
                o(i, t);
                var s = i.prototype;
                return (
                  (s.getLineWorldPosition = function () {
                    return this.lineNodes.map(function (t) {
                      var i,
                        o = null == (i = t.parent) ? void 0 : i.getComponent(c);
                      return null == o
                        ? void 0
                        : o.convertToWorldSpaceAR(new l(t.position));
                    });
                  }),
                  (s.showAnimFx = function (t) {
                    var i,
                      o =
                        null == (i = this.item_top)
                          ? void 0
                          : i.getComponentsInChildren(f);
                    null == o || o[t].playFxAnim();
                  }),
                  (s.onLoad = function () {
                    var t;
                    this.item_node.forEach(function (t, i) {
                      t.name = "item (" + i + ")";
                    }),
                      (this.item_position_y_bottom =
                        this.item_node[0].position.y);
                    var i = this.item_node[0].getComponent(c);
                    (this.bouncing_offset =
                      ((null == i ? void 0 : i.contentSize.height) || 0) / 20 ||
                      0),
                      (this.item_position_y_stop =
                        this.item_position_y_bottom - this.bouncing_offset),
                      (this.item_position_y_top =
                        this.item_node[this.item_node.length - 1].position.y),
                      (this.item_position_y_limited =
                        this.item_position_y_bottom -
                        ((null == i ? void 0 : i.contentSize.height) || 0) -
                        ((null == (t = this.layout) ? void 0 : t.spacingY) ||
                          0));
                  }),
                  (s.init = function (t) {
                    (this.state = b.STOPPED),
                      this.item_node.forEach(function (t) {
                        t.getComponentsInChildren(f).forEach(function (t) {
                          return t.init();
                        });
                      }),
                      this.getBotomItem()
                        .getComponentsInChildren(f)
                        .forEach(function (i, o) {
                          i.init(t[o]);
                        });
                  }),
                  (s.spin = function () {
                    (this.item_top = this.getTopItem()),
                      this.item_node.forEach(function (t) {
                        t.getComponentsInChildren(f).forEach(function (t) {
                          return t.blur();
                        });
                      }),
                      (this.state = b.SPINNING);
                  }),
                  (s.stop = function (t) {
                    (this.item_top = this.getTopItem()),
                      this.item_top
                        .getComponentsInChildren(f)
                        .forEach(function (i, o) {
                          i.setItem(t[o]), i.bright();
                        }),
                      (this.state = b.CHECK_TO_STOP);
                  }),
                  (s.getstate = function () {
                    return this.state;
                  }),
                  (s.update = function (t) {
                    switch (this.state) {
                      case b.SPINNING:
                        this.spinning(t);
                        break;
                      case b.CHECK_TO_STOP:
                        this.checkToStop(t);
                    }
                  }),
                  (s.getTopItem = function () {
                    var t = this.item_node[0];
                    return (
                      this.item_node.forEach(function (i) {
                        i.position.y >= t.position.y && (t = i);
                      }),
                      t
                    );
                  }),
                  (s.getBotomItem = function () {
                    var t = this.item_node[0];
                    return (
                      this.item_node.forEach(function (i) {
                        i.position.y <= t.position.y && (t = i);
                      }),
                      t
                    );
                  }),
                  (s.spinning = function (t) {
                    var i = this,
                      o = !1;
                    this.item_node.forEach(function (n) {
                      var e = n.position;
                      (e.y -= m.SPIN_SPEED * t),
                        e.y <= i.item_position_y_limited &&
                          ((e.y = i.item_position_y_top), (o = !0)),
                        (n.position = e);
                    }),
                      o && this.sort();
                  }),
                  (s.sort = function () {
                    this.item_node = this.item_node.sort(function (t, i) {
                      return t.position.y < i.position.y ? -1 : 1;
                    });
                  }),
                  (s.checkToStop = function (t) {
                    var i,
                      o = this;
                    this.item_node.forEach(function (i) {
                      var n = new l(i.position);
                      (n.y -= m.SPIN_SPEED * t),
                        n.y <= o.item_position_y_limited &&
                          (n.y = o.item_position_y_top),
                        (i.position = n);
                    }),
                      ((null == (i = this.item_top) ? void 0 : i.position.y) ||
                        0) <= this.item_position_y_stop &&
                        (this.bounce(), (this.state = b.STOPPING));
                  }),
                  (s.bounce = function () {
                    var t,
                      i = this;
                    this.sort();
                    var o =
                        (null == (t = this.item_top) ? void 0 : t.position) ||
                        l.ZERO,
                      n = new l(o);
                    (n.y = this.item_position_y_stop),
                      this.item_top && (this.item_top.position = n),
                      this.item_node.forEach(function (t, o) {
                        var n;
                        if (
                          t.name != (null == (n = i.item_top) ? void 0 : n.name)
                        ) {
                          var e = new l(t.position);
                          if (0 == o) {
                            var s,
                              a = i.item_node[o + 1].getComponent(c);
                            e.y =
                              i.item_node[o + 1].position.y -
                                (((null == (s = i.layout)
                                  ? void 0
                                  : s.spacingY) || 0) +
                                  ((null == a
                                    ? void 0
                                    : a.contentSize.height) || 0)) || 0;
                          } else {
                            var r,
                              p = i.item_node[o - 1].getComponent(c);
                            e.y =
                              i.item_node[o - 1].position.y +
                              ((null == (r = i.layout) ? void 0 : r.spacingY) ||
                                0) +
                              ((null == p ? void 0 : p.contentSize.height) ||
                                0);
                          }
                          t.position = e;
                        }
                      });
                    var e =
                      Math.abs(this.item_position_y_stop) -
                      Math.abs(this.item_position_y_bottom);
                    this.item_node.forEach(function (t) {
                      u(t)
                        .sequence(
                          u().by(0.1, { position: new l(0, e, 0) }),
                          u().call(function () {
                            var t;
                            (i.state = b.STOPPED),
                              null == i.onStopped || i.onStopped(),
                              (null != (t = h.getInstance()) && t.isFast()) ||
                                i.item_node.forEach(function (t) {
                                  var o,
                                    n = t.getComponentsInChildren(f);
                                  t.name !=
                                  (null == (o = i.item_top) ? void 0 : o.name)
                                    ? n.forEach(function (t, i) {
                                        t.disable();
                                      })
                                    : n.forEach(function (t, i) {
                                        t.playFxAnim();
                                      });
                                });
                          })
                        )
                        .start();
                    });
                  }),
                  i
                );
              })(_)).prototype,
              "item_node",
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (I = i(S.prototype, "lineNodes", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (E = i(S.prototype, "layout", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = S))
          ) || v)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DragonBall_SlotMachineItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameUtils.ts",
    "./DragonBallGameView.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, l, s, o, r, a, d, u, m, c, h;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (l = e.assertThisInitialized);
        },
        function (e) {
          (s = e.cclegacy),
            (o = e._decorator),
            (r = e.Sprite),
            (a = e.sp),
            (d = e.tween),
            (u = e.Tween),
            (m = e.Component);
        },
        function (e) {
          c = e.default;
        },
        function (e) {
          h = e.default;
        },
      ],
      execute: function () {
        var _, p, f, b, g, v, y;
        s._RF.push(
          {},
          "bbac3niih1DSqOHR53yOt2v",
          "DragonBall_SlotMachineItemView",
          void 0
        );
        var I = e(
            "DragonBallItem",
            (function () {
              function e() {
                this.code = 0;
              }
              var t = e.prototype;
              return (
                (t.decodeItem = function (e) {
                  this.code = e;
                }),
                (t.getResourceNormalName = function (e) {
                  void 0 === e && (e = !1);
                  var t = h.getInstance(),
                    i = ((null == t ? void 0 : t.getBetIndex()) || 0) + 1;
                  return (
                    (this.code < 1 || this.code > 3) && (i = 1),
                    "dball_symbol_" +
                      i +
                      "_" +
                      this.code.toString() +
                      (e ? ".png" : "")
                  );
                }),
                (t.getAnimationName = function (e) {
                  var t = h.getInstance(),
                    i = ((null == t ? void 0 : t.getBetIndex()) || 0) + 1;
                  return (
                    (this.code < 1 || this.code > 3) && (i = 1),
                    "dball_symbol_" + i + "_" + this.code.toString()
                  );
                }),
                (t.getResourceBlurName = function (e) {
                  void 0 === e && (e = !1);
                  var t = h.getInstance(),
                    i = ((null == t ? void 0 : t.getBetIndex()) || 0) + 1,
                    n = "";
                  if (this.code >= 4 && this.code <= 7)
                    (i = 1), this.code >= 4 && this.code <= 6 && (n = "_x");
                  else if (this.code >= 8)
                    return (
                      "dball_x_symbol_blur_" + i + "_0" + (e ? ".png" : "")
                    );
                  return (
                    "dball" +
                    n +
                    "_symbol_blur_" +
                    i +
                    "_" +
                    this.code.toString() +
                    (e ? ".png" : "")
                  );
                }),
                e
              );
            })()
          ),
          k = o.ccclass,
          x = o.property;
        e(
          "default",
          ((_ = x(r)),
          (p = x(a.Skeleton)),
          k(
            ((g = t(
              (b = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, s = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    s[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    n(t, "spr_item", g, l(t)),
                    n(t, "skeleton", v, l(t)),
                    n(t, "is_limit_random", y, l(t)),
                    (t.limited_random_symbols = [4, 5, 6, 8]),
                    (t.item = null),
                    t
                  );
                }
                i(t, e);
                var s = t.prototype;
                return (
                  (s.init = function (e) {
                    if (
                      (void 0 === e && (e = null),
                      (this.item = new I()),
                      null == e)
                    )
                      if (this.is_limit_random) {
                        var t =
                          this.limited_random_symbols[
                            c.getRandomInt(
                              0,
                              this.limited_random_symbols.length
                            )
                          ];
                        this.item.decodeItem(t);
                      } else this.item.decodeItem(c.getRandomInt(0, 9));
                    else this.item.decodeItem(e);
                    this.playFxAnim();
                  }),
                  (s.setItem = function (e) {
                    null != e && (this.item = e);
                  }),
                  (s.disable = function (e) {
                    void 0 === e && (e = !0), (this.node.active = !e);
                  }),
                  (s.blur = function () {
                    var e, t, i;
                    this.disable(!1),
                      this.spr_item && (this.spr_item.enabled = !0),
                      this.skeleton && (this.skeleton.enabled = !1);
                    var n =
                      (null == (e = this.item)
                        ? void 0
                        : e.getResourceBlurName()) || "";
                    null != (t = this.spr_item) &&
                      t.spriteFrame &&
                      (this.spr_item.spriteFrame =
                        (null == (i = h.getInstance())
                          ? void 0
                          : i.loaded_item_blur.filter(function (e) {
                              return e.name.indexOf(n) >= 0;
                            })[0]) || null);
                  }),
                  (s.bright = function () {
                    var e, t, i;
                    this.disable(!1),
                      this.spr_item && (this.spr_item.enabled = !0),
                      this.skeleton && (this.skeleton.enabled = !1);
                    var n =
                      (null == (e = this.item)
                        ? void 0
                        : e.getResourceNormalName()) || "";
                    null != (t = this.spr_item) &&
                      t.spriteFrame &&
                      (this.spr_item.spriteFrame =
                        (null == (i = h.getInstance())
                          ? void 0
                          : i.loaded_item_normal.filter(function (e) {
                              return e.name.indexOf(n) >= 0;
                            })[0]) || null);
                  }),
                  (s.playFxAnim = function () {
                    var e,
                      t,
                      i,
                      n,
                      l,
                      s = this;
                    if (
                      (this.item && this.item.code < 4) ||
                      (this.item && this.item.code > 7)
                    )
                      this.bright();
                    else {
                      this.disable(!1),
                        this.spr_item && (this.spr_item.enabled = !1),
                        this.skeleton && (this.skeleton.enabled = !0);
                      var o =
                          (null == (e = this.item)
                            ? void 0
                            : e.getAnimationName()) || "",
                        r =
                          null == (t = h.getInstance())
                            ? void 0
                            : t.loaded_spine_data.filter(function (e) {
                                return e.name.indexOf(o) >= 0;
                              })[0];
                      this.skeleton && r && (this.skeleton.skeletonData = r),
                        null == (i = this.skeleton) ||
                          i.setAnimation(0, "symbolFx", !1);
                      var a = d(
                        null == (n = this.skeleton) ? void 0 : n.node
                      ).sequence(
                        d().delay(1.333),
                        d().call(function () {
                          var e;
                          null == (e = s.skeleton) ||
                            e.setAnimation(0, "idle", !0);
                        })
                      );
                      u.stopAllByTarget(
                        (null == (l = this.skeleton) ? void 0 : l.node) ||
                          void 0
                      ),
                        a.start();
                    }
                  }),
                  (s.hide = function () {
                    this.spr_item && (this.spr_item.enabled = !1),
                      this.skeleton && (this.skeleton.enabled = !1);
                  }),
                  t
                );
              })(m)).prototype,
              "spr_item",
              [_],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (v = t(b.prototype, "skeleton", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {},
            })),
            (y = t(b.prototype, "is_limit_random", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (f = b))
          ) || f)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DragonBallBetHistoryDetail.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./KimCuong_SlotMachineItemView.ts",
    "./LineSpriteComponent.ts",
    "./DragonBallGameView.ts",
    "./DragonBall_SlotMachineCmp.ts",
    "./DragonBall_SlotMachineItemView.ts",
  ],
  function (n) {
    "use strict";
    var e, t, i, o, l, r, a, u, c, s, p, f, d, m, h, v, b, g, w, y;
    return {
      setters: [
        function (n) {
          (e = n.applyDecoratedDescriptor),
            (t = n.inheritsLoose),
            (i = n.initializerDefineProperty),
            (o = n.assertThisInitialized);
        },
        function (n) {
          (l = n.cclegacy),
            (r = n._decorator),
            (a = n.Label),
            (u = n.Button),
            (c = n.Node),
            (s = n.Tween),
            (p = n.tween),
            (f = n.UITransform),
            (d = n.Vec3),
            (m = n.Color),
            (h = n.Component);
        },
        function (n) {
          v = n.default;
        },
        function (n) {
          b = n.default;
        },
        function (n) {
          g = n.default;
        },
        function (n) {
          w = n.default;
        },
        function (n) {
          y = n.DragonBallItem;
        },
      ],
      execute: function () {
        var _, C, B, I, D, k, L, S, M, z, V, E;
        l._RF.push(
          {},
          "7f0e5WaknlAF5CBJkFMyIsU",
          "DragonBallBetHistoryDetail",
          void 0
        );
        var T = r.ccclass,
          F = r.property;
        n(
          "default",
          ((_ = F(a)),
          (C = F(u)),
          (B = F(b)),
          (I = F([v])),
          (D = F([c])),
          T(
            ((S = e(
              (L = (function (n) {
                function e() {
                  for (
                    var e, t = arguments.length, l = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    l[r] = arguments[r];
                  return (
                    (e = n.call.apply(n, [this].concat(l)) || this),
                    i(e, "lbl_phien", S, o(e)),
                    i(e, "btn_prev", M, o(e)),
                    i(e, "lineCmp", z, o(e)),
                    i(e, "kimCuong_SlotMachineItemViews", V, o(e)),
                    i(e, "linePos", E, o(e)),
                    (e.onBack = function () {}),
                    e
                  );
                }
                t(e, n);
                var l = e.prototype;
                return (
                  (l.onLoad = function () {
                    var n,
                      e = this;
                    null == (n = this.btn_prev) ||
                      n.node.on("click", function () {
                        return e.onBack && e.onBack();
                      });
                  }),
                  (l.show = function (n, e, t) {
                    var i = this;
                    this.lbl_phien && (this.lbl_phien.string = "#" + n),
                      e
                        .map(function (n) {
                          var e = new y();
                          return e.decodeItem(n), e;
                        })
                        .forEach(function (n, e) {
                          var t,
                            o = n.getResourceNormalName(),
                            l =
                              null == (t = g.getInstance())
                                ? void 0
                                : t.loaded_item_normal.filter(function (n) {
                                    return n.name.indexOf(o) >= 0;
                                  })[0];
                          l &&
                            i.kimCuong_SlotMachineItemViews[e].setSpriteFrame(
                              l
                            );
                        }),
                      (this.node.active = !0),
                      this.showEachLines(t, 1);
                  }),
                  (l.showEachLines = function (n, e) {
                    var t,
                      i,
                      o = this;
                    void 0 === e && (e = 0),
                      null == (t = this.lineCmp) || t.clear(),
                      s.stopAllByTarget(
                        (null == (i = this.lineCmp) ? void 0 : i.node) || void 0
                      );
                    var l = 0;
                    n.forEach(function (n) {
                      var t;
                      p(null == (t = o.lineCmp) ? void 0 : t.node)
                        .sequence(
                          p().delay(l),
                          p().call(function () {
                            o.drawLine(n, !0);
                          })
                        )
                        .start(),
                        (l += e);
                    });
                  }),
                  (l.drawLine = function (n, e) {
                    var t,
                      i,
                      o,
                      l = this,
                      r = null == (t = w.LINE) ? void 0 : t[n],
                      a =
                        (null == r
                          ? void 0
                          : r.map(function (n, e) {
                              var t,
                                i = l.linePos[e + 3 * n],
                                o =
                                  null == (t = i.parent)
                                    ? void 0
                                    : t.getComponent(f);
                              return null == o
                                ? void 0
                                : o.convertToWorldSpaceAR(i.position);
                            })) || [];
                    null == (i = this.lineCmp) ||
                      i.draw(
                        a.map(function (n) {
                          return new d(
                            (null == n ? void 0 : n.x) || 0,
                            (null == n ? void 0 : n.y) || 0,
                            0
                          );
                        }),
                        5,
                        m.WHITE,
                        null == (o = this.node.parent) ? void 0 : o.parent,
                        e
                      );
                  }),
                  e
                );
              })(h)).prototype,
              "lbl_phien",
              [_],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (M = e(L.prototype, "btn_prev", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(L.prototype, "lineCmp", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = e(L.prototype, "kimCuong_SlotMachineItemViews", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (E = e(L.prototype, "linePos", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (k = L))
          ) || k)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DragonBallBetHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./Define.ts",
    "./StringUtils.ts",
    "./KimCuongBetHistoryItemView.ts",
    "./DragonBallBetHistoryDetail.ts",
    "./HttpManager.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, o, a, r, l, s, u, c, g, h, p, d, f, m, b, B;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (r = t._decorator),
            (l = t.Button),
            (s = t.Label),
            (u = t.Node),
            (c = t.UIOpacity);
        },
        function (t) {
          g = t.CommonPopup;
        },
        function (t) {
          h = t.GameConfigManager;
        },
        function (t) {
          p = t.GameID;
        },
        function (t) {
          d = t.StringUtils;
        },
        function (t) {
          f = t.default;
        },
        function (t) {
          m = t.default;
        },
        function (t) {
          (b = t.HttpCommand), (B = t.httpManager);
        },
      ],
      execute: function () {
        var y, _, v, D, w, H, L, P, N, T, I, C, S, k;
        a._RF.push(
          {},
          "9dc3eRwLdlJVIefcmhSI+vi",
          "DragonBallBetHistoryView",
          void 0
        );
        var z = r.ccclass,
          x = r.property,
          R = function () {
            (this.bet = 0),
              (this.sessionID = 0),
              (this.money = 0),
              (this.totalBet = 0),
              (this.numLines = 0),
              (this.symbols = []),
              (this.payoutLines = []),
              (this.betTime = "");
          };
        t(
          "default",
          ((y = x(l)),
          (_ = x(l)),
          (v = x(s)),
          (D = x(u)),
          (w = x(u)),
          (H = x([u])),
          z(
            ((N = e(
              (P = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, a = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    i(e, "btn_prev", N, o(e)),
                    i(e, "btn_next", T, o(e)),
                    i(e, "lbl_page", I, o(e)),
                    i(e, "dragonBallBetHistoryDetailNode", C, o(e)),
                    i(e, "dragonBallBetingNode", S, o(e)),
                    i(e, "item_nodes", k, o(e)),
                    (e._bets = []),
                    (e.currentPage = 1),
                    (e.max_pages = 0),
                    (e.item_views = []),
                    (e.dragonBallBetHistoryDetail = null),
                    e
                  );
                }
                n(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    var e,
                      n,
                      i,
                      o,
                      a = this;
                    this.setOffsetStreamNative(!0),
                      t.prototype.onLoad.call(this),
                      null == (e = this.btn_close) ||
                        e.node.on("click", function () {
                          a.hide();
                        }),
                      null == (n = this.btn_prev) ||
                        n.node.on("click", function () {
                          a.currentPage > 1 &&
                            ((a.currentPage -= 1),
                            a.lbl_page &&
                              (a.lbl_page.string = a.currentPage + "")),
                            a.fetchHistory(!1);
                        }),
                      null == (i = this.btn_next) ||
                        i.node.on("click", function () {
                          a.currentPage < a.max_pages &&
                            ((a.currentPage += 1),
                            a.lbl_page &&
                              (a.lbl_page.string = a.currentPage + "")),
                            a.fetchHistory(!1);
                        }),
                      (this.dragonBallBetHistoryDetail =
                        (null == (o = this.dragonBallBetHistoryDetailNode)
                          ? void 0
                          : o.getComponent(m)) || null),
                      this.dragonBallBetHistoryDetail &&
                        (this.dragonBallBetHistoryDetail.onBack = function () {
                          a.backToBetting();
                        });
                  }),
                  (a.goToFirstPage = function () {
                    (this.currentPage = 1),
                      this.lbl_page &&
                        (this.lbl_page.string = this.currentPage + "");
                  }),
                  (a.fetchHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0), t && this.goToFirstPage();
                    var n = (this.currentPage - 1) * this.item_nodes.length,
                      i =
                        h.SAdomainURL +
                        b.BET_HISTORY_URL.replace(
                          "%gameid%",
                          p.DRAGONBALL.toString()
                        ).replace("%skip%", n.toString());
                    B.sendGET({
                      url: i,
                      onCompleted: function (t) {
                        e._bets = [];
                        var n = JSON.parse(t).data,
                          i = n.items,
                          o = n.count;
                        e.max_pages = Math.ceil(o / e.item_nodes.length);
                        for (var a = 0; a < i.length; a++) {
                          var r = i[a],
                            l = new R();
                          (l.sessionID = r.sessionId),
                            (l.bet = r.betting),
                            (l.money = r.money),
                            (l.totalBet = r.totalBet),
                            (l.numLines = r.numLines);
                          var s = r.createdTime,
                            u = new Date(s);
                          (l.betTime = d.formatTime(u)),
                            (l.symbols = []),
                            (l.payoutLines = []);
                          for (var c = r.symbols, g = 0; g < c.length; g++)
                            l.symbols.push(c[g] + "");
                          for (
                            var h = r.payoutLines, p = 0;
                            p < h.length;
                            p++
                          ) {
                            var f = h[p].id;
                            l.payoutLines.push(f);
                          }
                          e._bets.push(l);
                        }
                        e.showBetHistory();
                      },
                    });
                  }),
                  (a.showBetHistory = function () {
                    var t = this;
                    this.item_views.length <= 0 &&
                      (this.item_views = this.item_nodes.map(function (t) {
                        return t.getComponent(f);
                      })),
                      this.item_views.forEach(function (e, n) {
                        var i = t._bets[n];
                        if (null != i && null != i) {
                          var o = null == e ? void 0 : e.node.getComponent(c);
                          o && (o.opacity = 255),
                            null == e ||
                              e.show(
                                i.sessionID,
                                i.betTime,
                                i.bet,
                                i.numLines,
                                i.totalBet,
                                i.payoutLines.length,
                                i.money,
                                i.symbols,
                                i.payoutLines,
                                function (e, n, i) {
                                  t.showDetail(e, n, i);
                                }
                              );
                        } else null == e || e.hide();
                      }),
                      this.backToBetting(),
                      this.show();
                  }),
                  (a.showDetail = function (t, e, n) {
                    var i;
                    this.dragonBallBetingNode &&
                      (this.dragonBallBetingNode.active = !1),
                      null == (i = this.dragonBallBetHistoryDetail) ||
                        i.show(t, e, n);
                  }),
                  (a.backToBetting = function () {
                    this.dragonBallBetingNode &&
                      (this.dragonBallBetingNode.active = !0),
                      this.dragonBallBetHistoryDetailNode &&
                        (this.dragonBallBetHistoryDetailNode.active = !1);
                  }),
                  e
                );
              })(g)).prototype,
              "btn_prev",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (T = e(P.prototype, "btn_next", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(P.prototype, "lbl_page", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = e(P.prototype, "dragonBallBetHistoryDetailNode", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = e(P.prototype, "dragonBallBetingNode", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = e(P.prototype, "item_nodes", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (L = P))
          ) || L)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DragonBallBetRankView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./Define.ts",
    "./StringUtils.ts",
    "./KimCuongBetRankItemView.ts",
    "./HttpManager.ts",
  ],
  function (e) {
    "use strict";
    var t, n, r, i, a, o, l, c, u, s, p, g, _, f, m, h;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (o = e._decorator),
            (l = e.Button),
            (c = e.Label),
            (u = e.UIOpacity);
        },
        function (e) {
          s = e.CommonPopup;
        },
        function (e) {
          p = e.GameConfigManager;
        },
        function (e) {
          g = e.GameID;
        },
        function (e) {
          _ = e.StringUtils;
        },
        function (e) {
          f = e.default;
        },
        function (e) {
          (m = e.HttpCommand), (h = e.httpManager);
        },
      ],
      execute: function () {
        var b, d, y, v, k, w, R, D, T, B;
        a._RF.push(
          {},
          "1ca58A8SGlGJI7lTD86r/OH",
          "DragonBallBetRankView",
          void 0
        );
        var L = o.ccclass,
          C = o.property,
          N = function () {
            (this.rank = 0),
              (this.money = 0),
              (this.displayName = ""),
              (this.bet = 0),
              (this.type = 0),
              (this.betTime = "");
          };
        e(
          "default",
          ((b = C([f])),
          (d = C(l)),
          (y = C(l)),
          (v = C(c)),
          L(
            ((R = t(
              (w = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, a = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(a)) || this),
                    r(t, "item_views", R, i(t)),
                    r(t, "btn_prev", D, i(t)),
                    r(t, "btn_next", T, i(t)),
                    r(t, "lbl_current_page", B, i(t)),
                    (t._rank = []),
                    (t.current_page = 1),
                    (t.maxPage = 0),
                    t
                  );
                }
                n(t, e);
                var a = t.prototype;
                return (
                  (a.onLoad = function () {
                    var t,
                      n,
                      r,
                      i = this;
                    this.setOffsetStreamNative(!0),
                      e.prototype.onLoad.call(this),
                      null == (t = this.btn_close) ||
                        t.node.on("click", function () {
                          i.hide();
                        }),
                      null == (n = this.btn_prev) ||
                        n.node.on("click", function () {
                          i.current_page <= 1 ||
                            ((i.current_page -= 1),
                            i.lbl_current_page &&
                              (i.lbl_current_page.string = i.current_page + ""),
                            i.fetchRank(!1));
                        }),
                      null == (r = this.btn_next) ||
                        r.node.on("click", function () {
                          i.current_page >= i.maxPage ||
                            ((i.current_page += 1),
                            i.lbl_current_page &&
                              (i.lbl_current_page.string = i.current_page + ""),
                            i.fetchRank(!1));
                        });
                  }),
                  (a.fetchRank = function (e) {
                    var t = this;
                    void 0 === e && (e = !0),
                      e &&
                        ((this.current_page = 1),
                        this.lbl_current_page &&
                          (this.lbl_current_page.string =
                            this.current_page + ""));
                    var n = 6 * (this.current_page - 1),
                      r =
                        p.SAdomainURL +
                        m.BET_RANK_TOP_URL.replace(
                          "%gameid%",
                          g.DRAGONBALL + ""
                        ).replace("%skip%", n.toString());
                    h.sendGET({
                      url: r,
                      onCompleted: function (e) {
                        t._rank = [];
                        var n = JSON.parse(e).data,
                          r = n.items,
                          i = n.count;
                        t.maxPage = Math.ceil(i / 6);
                        for (var a = 0; a < r.length; a++) {
                          var o = r[a],
                            l = new N();
                          (l.bet = o.betting),
                            (l.displayName = o.displayName),
                            (l.money = o.money),
                            (l.type = o.description);
                          var c = o.createdTime,
                            u = new Date(c);
                          (l.betTime = _.formatTime(u)), t._rank.push(l);
                        }
                        t.showRank();
                      },
                    });
                  }),
                  (a.showRank = function () {
                    var e = this;
                    this.item_views.forEach(function (t, n) {
                      var r = e._rank[n],
                        i = t.node.getComponent(u);
                      null != r && null != r
                        ? (i && (i.opacity = 255),
                          t.show(
                            r.betTime,
                            r.displayName,
                            r.bet,
                            r.money,
                            r.type
                          ))
                        : i && (i.opacity = 0);
                    }),
                      this.show();
                  }),
                  t
                );
              })(s)).prototype,
              "item_views",
              [b],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (D = t(w.prototype, "btn_prev", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = t(w.prototype, "btn_next", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = t(w.prototype, "lbl_current_page", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = w))
          ) || k)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DragonBallGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonInfoPopup.ts",
    "./MiniGameNodeController.ts",
    "./DragonBallMessageHandler.ts",
    "./MiniGameNetworkHandler.ts",
    "./Define.ts",
    "./SpinButtonCmp.ts",
    "./StringUtils.ts",
    "./BaseMiniGameView.ts",
    "./KimCuongNoHuView.ts",
    "./DragonBallBetHistoryView.ts",
    "./DragonBallBetRankView.ts",
    "./DragonBall_SlotMachineCmp.ts",
    "./DragonBall_SlotMachineItemView.ts",
    "./PersistManager.ts",
    "./SocketManager.ts",
    "./State.ts",
  ],
  function (t) {
    "use strict";
    var n,
      i,
      e,
      o,
      a,
      l,
      s,
      r,
      u,
      c,
      p,
      h,
      f,
      d,
      _,
      g,
      b,
      m,
      k,
      v,
      y,
      w,
      B,
      S,
      C,
      I,
      j,
      M,
      R,
      H,
      D,
      N,
      L;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (l = t._decorator),
            (s = t.Label),
            (r = t.Button),
            (u = t.Toggle),
            (c = t.sp),
            (p = t.SpriteFrame),
            (h = t.tween),
            (f = t.Tween),
            (d = t.UIOpacity);
        },
        function (t) {
          _ = t.CommonInfoPopup;
        },
        function (t) {
          g = t.default;
        },
        function (t) {
          (b = t.default), (m = t.DragonBall_Message);
        },
        function (t) {
          k = t.MiniGameNetworkHandler;
        },
        function (t) {
          v = t.GameID;
        },
        function (t) {
          y = t.default;
        },
        function (t) {
          w = t.StringUtils;
        },
        function (t) {
          B = t.default;
        },
        function (t) {
          S = t.default;
        },
        function (t) {
          C = t.default;
        },
        function (t) {
          I = t.default;
        },
        function (t) {
          j = t.default;
        },
        function (t) {
          M = t.DragonBallItem;
        },
        function (t) {
          R = t.PersistManager;
        },
        function (t) {
          (H = t.socketManager), (D = t.MessageRequest);
        },
        function (t) {
          (N = t.state), (L = t.NetworkState);
        },
      ],
      execute: function () {
        var V,
          z,
          A,
          J,
          E,
          P,
          T,
          G,
          O,
          q,
          x,
          U,
          F,
          K,
          Z,
          Q,
          W,
          X,
          Y,
          $,
          tt,
          nt,
          it,
          et,
          ot,
          at,
          lt,
          st,
          rt,
          ut,
          ct,
          pt,
          ht,
          ft,
          dt,
          _t,
          gt;
        a._RF.push({}, "53363oi8lxFF582RWEZL8AP", "DragonBallGameView", void 0);
        var bt = l.ccclass,
          mt = l.property,
          kt = function () {
            (this.aid = 0), (this.jackpot = 0), (this.bet = 0);
          };
        t(
          "default",
          ((V = mt(s)),
          (z = mt(C)),
          (A = mt(I)),
          (J = mt([r])),
          (E = mt(r)),
          (P = mt(r)),
          (T = mt(r)),
          (G = mt(y)),
          (O = mt(s)),
          (q = mt(j)),
          (x = mt(u)),
          (U = mt(u)),
          (F = mt(S)),
          (K = mt(_)),
          (Z = mt([c.SkeletonData])),
          (Q = mt([p])),
          (W = mt([p])),
          bt(
            (((gt = (function (t) {
              function n() {
                for (
                  var n, i = arguments.length, a = new Array(i), l = 0;
                  l < i;
                  l++
                )
                  a[l] = arguments[l];
                return (
                  (n = t.call.apply(t, [this].concat(a)) || this),
                  e(n, "lblJackpot", $, o(n)),
                  e(n, "dragonBallBetHistoryView", tt, o(n)),
                  e(n, "dragonBallBetRankView", nt, o(n)),
                  e(n, "btn_chips", it, o(n)),
                  (n.chip_values = [500, 1e3, 1e4]),
                  e(n, "btn_rank", et, o(n)),
                  e(n, "btn_bet_history", ot, o(n)),
                  e(n, "btn_help", at, o(n)),
                  e(n, "btn_spin", lt, o(n)),
                  e(n, "lbl_result_amount", st, o(n)),
                  e(n, "dragonBall_SlotMachineCmp", rt, o(n)),
                  e(n, "tog_auto", ut, o(n)),
                  e(n, "tog_fast", ct, o(n)),
                  e(n, "kimCuongNoHuView", pt, o(n)),
                  e(n, "commonInfoPopup", ht, o(n)),
                  e(n, "loaded_spine_data", ft, o(n)),
                  e(n, "loaded_item_normal", dt, o(n)),
                  e(n, "loaded_item_blur", _t, o(n)),
                  (n._aid = 1),
                  (n.bet = 0),
                  (n._jackpotInfos = []),
                  (n.jackpot_amount = 0),
                  (n.jackpot_tween = null),
                  (n.symbols = []),
                  (n.rewards = []),
                  (n.lineArr = []),
                  (n.moneyExchange = 0),
                  (n.wonJackpot = !1),
                  (n.random_symbol = [
                    [8, 1, 8],
                    [3, 7, 2],
                    [0, 3, 0],
                    [5, 8, 5],
                    [6, 8, 6],
                  ]),
                  (n.isHasResult = !0),
                  n
                );
              }
              i(n, t);
              var a = n.prototype;
              return (
                (a.isSpinning = function () {
                  var t;
                  return null == (t = this.dragonBall_SlotMachineCmp)
                    ? void 0
                    : t.isSpinning();
                }),
                (a.isFast = function () {
                  var t, n;
                  return (
                    (null == (t = this.tog_fast) ? void 0 : t.isChecked) ||
                    (null == (n = this.btn_spin) ? void 0 : n.isStop())
                  );
                }),
                (a.forceMachineStop = function (t) {
                  var n;
                  void 0 === t && (t = !0),
                    null != (n = this.tog_auto) &&
                      n.isChecked &&
                      t &&
                      (this.tog_auto.isChecked = !1),
                    this.stop([]);
                }),
                (a.turnOffAutoSpin = function () {
                  this.tog_auto && (this.tog_auto.isChecked = !1);
                }),
                (a.getBetIndex = function () {
                  return this.chip_values.indexOf(this.bet);
                }),
                (a.onLoad = function () {
                  var i,
                    e,
                    o,
                    a,
                    l,
                    s,
                    r = this;
                  t.prototype.onLoad.call(this),
                    (n.instance = this),
                    (b.onResultError = function (t) {
                      R.showNoti(t, r.node), r.forceMachineStop();
                    }),
                    (this.bet = this.chip_values[0]),
                    this.init(),
                    this.btn_spin &&
                      (this.btn_spin.onSpin = function () {
                        var t;
                        null != (t = r.dragonBall_SlotMachineCmp) &&
                          t.isStopped() &&
                          r.spin();
                      }),
                    this.btn_spin &&
                      (this.btn_spin.onStop = function () {
                        var t;
                        null != (t = r.dragonBall_SlotMachineCmp) &&
                          t.isHasData &&
                          r.dragonBall_SlotMachineCmp.stopImmediatelyByButton(
                            r.symbols,
                            [0.1, 0.1, 0.1, 0.5, 0.5]
                          );
                      }),
                    null == (i = this.btn_spin) ||
                      i.node.on("click", function () {
                        var t;
                        null == (t = r.btn_spin) || t.press();
                      }),
                    null == (e = this.btn_rank) ||
                      e.node.on("click", function () {
                        r.showRank();
                      }),
                    null == (o = this.btn_bet_history) ||
                      o.node.on("click", function () {
                        r.showBetHistory();
                      }),
                    null == (a = this.btn_help) ||
                      a.node.on("click", function () {
                        var t;
                        null == (t = r.commonInfoPopup) || t.show();
                      }),
                    null == (l = this.btn_close) ||
                      l.node.on("click", function () {
                        r.hide();
                      }),
                    this.btn_chips.forEach(function (t, n) {
                      var i = n;
                      t.node.on("click", function () {
                        var t;
                        null != (t = r.dragonBall_SlotMachineCmp) &&
                        t.isStopped()
                          ? (r.highlightBet(i),
                            (r.bet = r.chip_values[i]),
                            r.subscribeJackpot(),
                            r.dragonBall_SlotMachineCmp.init(r.random_symbol))
                          : R.showNoti("Đang Quay");
                      });
                    }),
                    null == (s = this.tog_auto) ||
                      s.node.on("toggle", function () {
                        var t, n;
                        null != (t = r.tog_auto) &&
                          t.isChecked &&
                          null != (n = r.dragonBall_SlotMachineCmp) &&
                          n.isStopped() &&
                          r.spin();
                      }),
                    this.dragonBall_SlotMachineCmp &&
                      (this.dragonBall_SlotMachineCmp.onMachineStopped =
                        function () {
                          var t,
                            n = h(r)
                              .delay(
                                null != (t = r.tog_auto) && t.isChecked
                                  ? 0.5
                                  : 0
                              )
                              .call(function () {
                                r.showResult(function () {
                                  var t, n, i;
                                  if (
                                    null != (t = r.tog_auto) &&
                                    t.isChecked &&
                                    null != (n = r.dragonBall_SlotMachineCmp) &&
                                    n.isStopped()
                                  )
                                    r.spin();
                                  else if (
                                    null != (i = r.dragonBall_SlotMachineCmp) &&
                                    i.isStopped()
                                  ) {
                                    var e = r.rewards.map(function (t) {
                                      return t.lid;
                                    });
                                    r.dragonBall_SlotMachineCmp.showEachLines(
                                      e,
                                      1
                                    );
                                  }
                                });
                              }),
                            i =
                              r.moneyExchange > 0
                                ? n
                                : h(r).sequence(
                                    h().delay(0.5),
                                    h().call(function () {
                                      var t, n;
                                      null != (t = r.tog_auto) &&
                                        t.isChecked &&
                                        null !=
                                          (n = r.dragonBall_SlotMachineCmp) &&
                                        n.isStopped() &&
                                        r.spin();
                                    })
                                  );
                          h(r)
                            .sequence(
                              h().call(function () {
                                var t;
                                null == (t = r.btn_spin) || t.reset();
                              }),
                              i
                            )
                            .start(),
                            H.sendRefreshMoney();
                        });
                }),
                (a.reSpin = function () {
                  this.IsRespin() && this.spin();
                }),
                (a.highlightBet = function (t) {
                  this.btn_chips.forEach(function (n, i) {
                    n.node.children[1].active = i == t;
                  });
                }),
                (a.showResult = function (t) {
                  var n,
                    i,
                    e,
                    o,
                    a,
                    l,
                    s,
                    r,
                    u,
                    c,
                    p,
                    _ = this,
                    g = this.rewards.map(function (t) {
                      return t.lid;
                    }),
                    b = null != (n = this.tog_fast) && n.isChecked ? 0 : 0.7;
                  null == (i = this.dragonBall_SlotMachineCmp) ||
                    i.showLines(g, b, 0.3, function () {}),
                    f.stopAllByTarget(
                      (null == (e = this.lbl_result_amount)
                        ? void 0
                        : e.node) || void 0
                    );
                  var m =
                    null == (o = this.lbl_result_amount)
                      ? void 0
                      : o.node.getComponent(d);
                  f.stopAllByTarget(m || void 0),
                    this.lbl_result_amount &&
                      (this.lbl_result_amount.string =
                        "+" + w.formatNumber(this.moneyExchange));
                  var k = h(
                      null == (a = this.lbl_result_amount) ? void 0 : a.node
                    ).sequence(
                      h().call(function () {
                        var t;
                        null == (t = _.kimCuongNoHuView) ||
                          t.show(_.moneyExchange);
                      }),
                      null != (l = this.tog_auto) && l.isChecked
                        ? h(
                            null == (s = this.lbl_result_amount)
                              ? void 0
                              : s.node
                          ).sequence(
                            h().delay(14.5),
                            h().call(function () {
                              var t;
                              null == (t = _.kimCuongNoHuView) || t.hide();
                            })
                          )
                        : h(
                            null == (r = this.lbl_result_amount)
                              ? void 0
                              : r.node
                          ).sequence(
                            h().delay(2.5),
                            h().call(function () {
                              var t;
                              null == (t = _.kimCuongNoHuView) ||
                                t.activeClick();
                            })
                          )
                    ),
                    v = h(
                      null == (u = this.lbl_result_amount) ? void 0 : u.node
                    ).sequence(
                      h().call(function () {
                        var t,
                          n =
                            null == (t = _.lbl_result_amount)
                              ? void 0
                              : t.node.getComponent(d);
                        n && (n.opacity = 255);
                      }),
                      h().delay(
                        null != (c = this.tog_fast) && c.isChecked ? 0 : 1.5
                      )
                    ),
                    y = (this.wonJackpot ? k : v) || new f();
                  h(null == (p = this.lbl_result_amount) ? void 0 : p.node)
                    .sequence(
                      h().delay(b),
                      y,
                      h().call(function () {
                        var n, i;
                        t(),
                          h(
                            null == (n = _.lbl_result_amount)
                              ? void 0
                              : n.node.getComponent(d)
                          )
                            .delay(
                              null != (i = _.tog_fast) && i.isChecked ? 1.5 : 0
                            )
                            .to(0.5, { opacity: 0 })
                            .start();
                      })
                    )
                    .start();
                }),
                (n.getInstance = function () {
                  return n.instance;
                }),
                (a.showRank = function () {
                  var t;
                  null == (t = this.dragonBallBetRankView) || t.fetchRank();
                }),
                (a.spin = function () {
                  if (this.isHasResult) {
                    var t, n;
                    if (
                      null == (t = this.dragonBall_SlotMachineCmp) ||
                      !t.isStopped()
                    )
                      return void R.showNoti(
                        "Đang Quay",
                        this.node,
                        v.DRAGONBALL
                      );
                    null == (n = this.dragonBall_SlotMachineCmp) || n.spin();
                  }
                  if (k.IsOpen()) {
                    if (((this.isHasResult = !0), this.lineArr.length <= 0))
                      return void R.showNoti("Vui lòng chọn dòng");
                    f.stopAllByTarget(this), this.requestSpin();
                  } else this.isHasResult = !1;
                }),
                (a.IsRespin = function () {
                  return (
                    !!this.node.active &&
                    !this.isHasResult &&
                    null != n.instance &&
                    N.socketState != L.Unlogged
                  );
                }),
                (a.requestSpin = function () {
                  var t = {};
                  (t.cmd = m.SPIN_RESULT),
                    (t.b = this.bet),
                    (t.aid = this._aid),
                    (t.ls = this.lineArr),
                    (t.gid = v.DRAGONBALL);
                  var n = [
                    D.ZonePlugin_Type,
                    "MiniGame",
                    "slotMachinePlugin",
                    t,
                  ];
                  k.send(n);
                }),
                (a.stop = function (t) {
                  var n,
                    i = this;
                  null != (n = this.dragonBall_SlotMachineCmp) &&
                    n.isSpinning() &&
                    (0 == t.length &&
                      ((this.moneyExchange = 0), (this.rewards = [])),
                    h(this)
                      .sequence(
                        h().delay(j.TIME_TO_SHOW_RESULT),
                        h().call(function () {
                          var n, e, o, a;
                          (null != (n = i.tog_fast) && n.isChecked) ||
                          (null != (e = i.btn_spin) && e.isStop())
                            ? null == (o = i.dragonBall_SlotMachineCmp) ||
                              o.stopImmediately(t, [0.1, 0.1, 0.1, 0.1, 0.1])
                            : null == (a = i.dragonBall_SlotMachineCmp) ||
                              a.stop(t);
                        })
                      )
                      .start());
                }),
                (a.showBetHistory = function () {
                  var t;
                  null == (t = this.dragonBallBetHistoryView) ||
                    t.fetchHistory();
                }),
                (a.setLines = function (t) {
                  (this.lineArr =
                    t.map(function (t) {
                      return t.lid;
                    }) || []),
                    (j.LINE = t.map(function (t) {
                      return t.poss;
                    }));
                }),
                (a.receiveData = function (t, n, i, e) {
                  (this._aid = t),
                    (this.symbols = e.map(function (t) {
                      var n = new M();
                      return n.decodeItem(t), n;
                    })),
                    (this.rewards = i),
                    (this.moneyExchange = n),
                    (this.wonJackpot =
                      this.rewards.filter(function (t) {
                        return 1 == t.iJ;
                      }).length > 0),
                    this.stop(this.symbols);
                }),
                (a.subscribeJackpot = function (t) {
                  void 0 === t && (t = !0);
                  var n = m.SUBSCRIBE_JACKPOT;
                  t || (n = m.UNSUBSCRIBE_JACKPOT);
                  var i = {};
                  (i.cmd = n), (i.gid = v.DRAGONBALL);
                  var e = [
                    D.ZonePlugin_Type,
                    "MiniGame",
                    "slotMachinePlugin",
                    i,
                  ];
                  k.send(e);
                }),
                (a.updateJackpot = function (t, n) {
                  void 0 === n && (n = !1), n && (this._jackpotInfos = []);
                  for (var i = 0; i < t.length; i++) {
                    var e = t[i],
                      o = e.J,
                      a = e.aid,
                      l = e.b;
                    if (n) {
                      var s = new kt();
                      (s.jackpot = o || 0),
                        (s.aid = a || 0),
                        (s.bet = l || 0),
                        this._jackpotInfos.push(s);
                    } else
                      for (var r = 0; r < this._jackpotInfos.length; r++)
                        if (
                          this._jackpotInfos[r].aid == a &&
                          this._jackpotInfos[r].bet == l
                        ) {
                          this._jackpotInfos[r].jackpot = o || 0;
                          break;
                        }
                  }
                  if (n) {
                    for (var u = [], c = 0; c < this._jackpotInfos.length; c++)
                      if (1 == this._jackpotInfos[c].aid) {
                        var p = new kt();
                        (p.jackpot = this._jackpotInfos[c].jackpot),
                          (p.aid = this._jackpotInfos[c].aid),
                          (p.bet = this._jackpotInfos[c].bet),
                          u.push(p);
                      }
                    for (var h = 0; h < this._jackpotInfos.length; h++)
                      if (2 == this._jackpotInfos[h].aid) {
                        var f = new kt();
                        (f.jackpot = this._jackpotInfos[h].jackpot),
                          (f.aid = this._jackpotInfos[h].aid),
                          (f.bet = this._jackpotInfos[h].bet),
                          u.push(f);
                      }
                    for (var d = 1, _ = 0; _ < u.length - 1; _++) {
                      for (var g = _ + 1; g < u.length; g++)
                        if (
                          u[_].aid == d &&
                          u[g].aid == d &&
                          u[g].bet < u[_].bet
                        ) {
                          var b = u[_].bet,
                            m = u[_].jackpot;
                          (u[_].bet = u[g].bet),
                            (u[_].jackpot = u[g].jackpot),
                            (u[g].bet = b),
                            (u[g].jackpot = m),
                            (g = _ + 1);
                        }
                      _ == u.length - 2 && 1 == d && ((_ = 0), (d = 2));
                    }
                    this._jackpotInfos = u;
                  }
                  this.updateJackpotLabels(!n);
                }),
                (a.updateJackpotLabels = function (t) {
                  for (var n = this, i = 0; i < this._jackpotInfos.length; i++)
                    if (
                      this._jackpotInfos[i].aid == this._aid &&
                      this._jackpotInfos[i].bet == this.bet
                    ) {
                      var e;
                      if ((null == (e = this.jackpot_tween) || e.stop(), t)) {
                        var o = { a: this.jackpot_amount };
                        (this.jackpot_tween = h(o)
                          .to(
                            0.5,
                            { a: this._jackpotInfos[i].jackpot },
                            {
                              progress: function (t, i, e, o) {
                                return (
                                  null != n.lblJackpot &&
                                    (n.lblJackpot.string =
                                      w.formatNumber(Math.floor(e)) + " "),
                                  t + (i - t) * o
                                );
                              },
                            }
                          )
                          .start()),
                          (this.jackpot_amount = this._jackpotInfos[i].jackpot);
                      } else
                        (this.jackpot_amount = this._jackpotInfos[i].jackpot),
                          this.lblJackpot &&
                            (this.lblJackpot.string =
                              w.formatNumber(this.jackpot_amount) + " ");
                      break;
                    }
                }),
                (a.isCanDeactiveRoot = function () {
                  return !0; //!this.tog_auto?.isChecked;
                }),
                (a.show = function () {
                  var n,
                    i = this;
                  return (
                    b.subscribe(),
                    null == (n = g.getInstance()) ||
                      n.bringGameViewToTop(this, !0),
                    t.prototype.show.call(this, function () {
                      var t;
                      i.isCanDeactiveRoot() &&
                        (null == (t = i.dragonBall_SlotMachineCmp) ||
                          t.init(i.random_symbol));
                    }),
                    !0
                  );
                }),
                (a.hide = function () {
                  (this.isHasResult = !0), t.prototype.hide.call(this);
                }),
                (a.init = function () {
                  t.prototype.init.call(this),
                    t.prototype.hideImmediately.call(this);
                }),
                (a.IsLiveStreamOverlap = function (n) {
                  return !!t.prototype.IsLiveStreamOverlap.call(this, n);
                }),
                (a.onDestroy = function () {
                  n.instance = null;
                }),
                n
              );
            })(B)).instance = null),
            ($ = n((Y = gt).prototype, "lblJackpot", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (tt = n(Y.prototype, "dragonBallBetHistoryView", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (nt = n(Y.prototype, "dragonBallBetRankView", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (it = n(Y.prototype, "btn_chips", [J], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (et = n(Y.prototype, "btn_rank", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ot = n(Y.prototype, "btn_bet_history", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (at = n(Y.prototype, "btn_help", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (lt = n(Y.prototype, "btn_spin", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (st = n(Y.prototype, "lbl_result_amount", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (rt = n(Y.prototype, "dragonBall_SlotMachineCmp", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ut = n(Y.prototype, "tog_auto", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ct = n(Y.prototype, "tog_fast", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (pt = n(Y.prototype, "kimCuongNoHuView", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ht = n(Y.prototype, "commonInfoPopup", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ft = n(Y.prototype, "loaded_spine_data", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (dt = n(Y.prototype, "loaded_item_normal", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (_t = n(Y.prototype, "loaded_item_blur", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (X = Y))
          ) || X)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DragonBallHelpView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./TaiXiuPopupCmp.ts"],
  function (t) {
    "use strict";
    var n, e, r, i, o, a, l, c, u;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy), (a = t._decorator), (l = t.Sprite), (c = t.Button);
        },
        function (t) {
          u = t.default;
        },
      ],
      execute: function () {
        var s, p, h, f, _, d, b, g, y, v, w, m;
        o._RF.push({}, "2e3a2xWo4dIR7cWbDvu6U0s", "DragonBallHelpView", void 0);
        var x = a.ccclass,
          z = a.property;
        t(
          "default",
          ((s = z([String])),
          (p = z(l)),
          (h = z(c)),
          (f = z(c)),
          (_ = z(c)),
          x(
            ((g = n(
              (b = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, o = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (n = t.call.apply(t, [this].concat(o)) || this),
                    r(n, "content_paths", g, i(n)),
                    r(n, "content", y, i(n)),
                    r(n, "btn_close", v, i(n)),
                    r(n, "btn_prev", w, i(n)),
                    r(n, "btn_next", m, i(n)),
                    (n.current_page = 0),
                    (n.load_content = []),
                    n
                  );
                }
                e(n, t);
                var o = n.prototype;
                return (
                  (o.isHelpSprite = function (t) {
                    return (
                      this.content_paths.filter(function (n) {
                        return n.indexOf(t) >= 0;
                      }).length > 0
                    );
                  }),
                  (o.getContentPaths = function () {
                    return this.content_paths;
                  }),
                  (o.addDownloadedContent = function (t) {
                    this.load_content.push(t);
                  }),
                  (o.onLoad = function () {
                    var n,
                      e,
                      r,
                      i = this;
                    t.prototype.onLoad.call(this),
                      (this.original_scale = this.node.scale),
                      null == (n = this.btn_close) ||
                        n.node.on("click", function () {
                          i.hide();
                        }),
                      null == (e = this.btn_prev) ||
                        e.node.on("click", function () {
                          i.current_page <= 0
                            ? (i.current_page = i.content_paths.length - 1)
                            : (i.current_page -= 1),
                            i.loadContent();
                        }),
                      null == (r = this.btn_next) ||
                        r.node.on("click", function () {
                          i.current_page >= i.content_paths.length - 1
                            ? (i.current_page = 0)
                            : (i.current_page += 1),
                            i.loadContent();
                        });
                  }),
                  (o.loadContent = function () {
                    var t = this.content_paths[this.current_page];
                    this.content &&
                      (this.content.spriteFrame = this.load_content.filter(
                        function (n) {
                          return n.name.indexOf(t) >= 0;
                        }
                      )[0]);
                  }),
                  (o.showHelp = function () {
                    (this.current_page = 0), this.loadContent(), this.show();
                  }),
                  n
                );
              })(u)).prototype,
              "content_paths",
              [s],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (y = n(b.prototype, "content", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = n(b.prototype, "btn_close", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = n(b.prototype, "btn_prev", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = n(b.prototype, "btn_next", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = b))
          ) || d)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DragonBallMessageHandler.ts",
  [
    "cc",
    "./DragonBallGameView.ts",
    "./Define.ts",
    "./MiniGameNetworkHandler.ts",
    "./EventManager.ts",
    "./SocketManager.ts",
  ],
  function (e) {
    "use strict";
    var n, a, s, l, t, u, r, i, o;
    return {
      setters: [
        function (e) {
          (n = e.cclegacy), (a = e._decorator);
        },
        function (e) {
          s = e.default;
        },
        function (e) {
          l = e.GameID;
        },
        function (e) {
          t = e.MiniGameNetworkHandler;
        },
        function (e) {
          (u = e.eventManager), (r = e.subEventKey), (i = e.EventKey);
        },
        function (e) {
          o = e.MessageRequest;
        },
      ],
      execute: function () {
        var c, S, _;
        e("DragonBall_Message", void 0),
          n._RF.push(
            {},
            "9acb0vAwv5JlY2Qu81xq8qo",
            "DragonBallMessageHandler",
            void 0
          ),
          (function (e) {
            (e[(e.SPIN_RESULT = 1302)] = "SPIN_RESULT"),
              (e[(e.UPDATE_JACKPOT = 1304)] = "UPDATE_JACKPOT"),
              (e[(e.SUBSCRIBE_JACKPOT = 1300)] = "SUBSCRIBE_JACKPOT"),
              (e[(e.UNSUBSCRIBE_JACKPOT = 1301)] = "UNSUBSCRIBE_JACKPOT"),
              (e[(e.AUTO_SPIN = 1303)] = "AUTO_SPIN"),
              (e[(e.CANCEL_AUTO_SPIN = 1305)] = "CANCEL_AUTO_SPIN"),
              (e[(e.SPIN_FREE = 1308)] = "SPIN_FREE");
          })(_ || (_ = e("DragonBall_Message", {})));
        var g = a.ccclass;
        e(
          "default",
          g(
            (((S = (function () {
              function e() {}
              return (
                (e.subscribe = function (e) {
                  void 0 === e && (e = !0);
                  var n = _.SUBSCRIBE_JACKPOT;
                  e || (n = _.UNSUBSCRIBE_JACKPOT);
                  var a = { cmd: n, gid: l.DRAGONBALL },
                    s = [o.ZonePlugin_Type, "MiniGame", "slotMachinePlugin", a];
                  t.send(s);
                }),
                (e.handleMessage = function (n) {
                  var a = s.getInstance(),
                    t = n[1],
                    o = t.cmd;
                  if (o == _.SPIN_RESULT) {
                    if (null != t.mgs && null != t.mgs) {
                      var c = t.mgs;
                      return void (
                        null == e.onResultError || e.onResultError(c)
                      );
                    }
                    var S = t.wls || [],
                      g = t.aid || 0,
                      A = t.mX || 0,
                      v = t.sbs || [];
                    t.sid, t.fss;
                    null != a && null != a && a.receiveData(g, A, S, v);
                  } else if (o == _.UPDATE_JACKPOT) {
                    var E = t.Js || [];
                    null != a && null != a && a.updateJackpot(E);
                    var P = [];
                    P.push(E[0].J || 0),
                      P.push(E[1].J || 0),
                      P.push(E[E.length > 3 ? 3 : 2].J || 0),
                      u.emit(
                        r(i.JackpotUpdateGame, "%gameID", l.DRAGONBALL),
                        P
                      );
                  } else if (o == _.SUBSCRIBE_JACKPOT) {
                    var d = t.ls;
                    null != a && null != a && d && a.setLines(d),
                      null == a || a.reSpin();
                    var J = t.Js || [];
                    t.as;
                    null != t.asb && null != t.asb && (t.asb, t.asaid, t.asls),
                      null != a && null != a && a.updateJackpot(J, !0);
                    var f = [];
                    f.push(J[0].J || 0),
                      f.push(J[1].J || 0),
                      f.push(J[J.length > 3 ? 3 : 2].J || 0),
                      u.emit(
                        r(i.JackpotUpdateGame, "%gameID", l.DRAGONBALL),
                        f
                      );
                  }
                }),
                e
              );
            })()).onResultError = function (e) {}),
            (c = S))
          ) || c
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DragView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CCMiniGameRoot.ts",
    "./MiniGameNodeController.ts",
  ],
  function (n) {
    "use strict";
    var o, t, e, i, r, s, a, l, u, c, d, f, h, p;
    return {
      setters: [
        function (n) {
          (o = n.applyDecoratedDescriptor),
            (t = n.inheritsLoose),
            (e = n.initializerDefineProperty),
            (i = n.assertThisInitialized);
        },
        function (n) {
          (r = n.cclegacy),
            (s = n._decorator),
            (a = n.Node),
            (l = n.Vec2),
            (u = n.Vec3),
            (c = n.UITransform),
            (d = n.tween),
            (f = n.Component);
        },
        function (n) {
          h = n.CCMiniGameRoot;
        },
        function (n) {
          p = n.default;
        },
      ],
      execute: function () {
        var y, v, g, _, x, m, C, b;
        r._RF.push({}, "d7e917bLldLbotowPX0QzUj", "DragView", void 0);
        var D = s.ccclass,
          I = s.property;
        n(
          "default",
          ((y = D("DragView")),
          (v = I(a)),
          (g = I(l)),
          y(
            (((b = (function (n) {
              function o() {
                for (
                  var o, t = arguments.length, r = new Array(t), s = 0;
                  s < t;
                  s++
                )
                  r[s] = arguments[s];
                return (
                  (o = n.call.apply(n, [this].concat(r)) || this),
                  e(o, "bounding_node", m, i(o)),
                  (o.offset = 0),
                  e(o, "offsetCustom", C, i(o)),
                  (o.is_moving = !1),
                  o
                );
              }
              t(o, n);
              var r = o.prototype;
              return (
                (r.onLoad = function () {
                  var n = this;
                  this.node.on(a.EventType.TOUCH_MOVE, function (t) {
                    var e;
                    if (
                      !(
                        o.DISABLE ||
                        (Math.abs(t.getDelta().x) < 5 &&
                          Math.abs(t.getDelta().y) < 5)
                      )
                    ) {
                      n.is_moving = !0;
                      var i =
                          null == n.bounding_node ? n.node : n.bounding_node,
                        r =
                          null != (e = p.getInstance()) && e.isReverse()
                            ? 1
                            : -1;
                      i.position = new u(
                        i.position.x + r * t.getUIDelta().x * 1,
                        i.position.y + r * t.getUIDelta().y * 1,
                        0
                      );
                    }
                  }),
                    this.node.on(a.EventType.TOUCH_END, function () {
                      n.checkAndSnapToBorder();
                    }),
                    this.node.on(a.EventType.TOUCH_CANCEL, function () {
                      n.checkAndSnapToBorder();
                    });
                }),
                (r.checkAndSnapToBorder = function () {
                  if (!o.DISABLE) {
                    this.is_moving = !1;
                    var n =
                        null == this.bounding_node
                          ? this.node
                          : this.bounding_node,
                      t = new u(n.position),
                      e = n.getComponent(c),
                      i = ((null == e ? void 0 : e.width) || 0) * n.scale.x,
                      r = ((null == e ? void 0 : e.height) || 0) * n.scale.x,
                      s = h.WIN_SIZE_WIDTH,
                      a = h.WIN_SIZE_HEIGHT;
                    t.x - i * ((null == e ? void 0 : e.anchorPoint.x) || 0) <
                    -s / 2
                      ? ((t.x =
                          -s / 2 +
                          i * ((null == e ? void 0 : e.anchorPoint.x) || 0)),
                        (t.x -= this.offsetCustom.x))
                      : t.x +
                          i *
                            (1 -
                              ((null == e ? void 0 : e.anchorPoint.x) || 0)) >
                          s / 2 &&
                        ((t.x =
                          s / 2 -
                          i *
                            (1 -
                              ((null == e ? void 0 : e.anchorPoint.x) || 0))),
                        (t.x += this.offsetCustom.x)),
                      t.y - r * ((null == e ? void 0 : e.anchorPoint.y) || 0) <
                      -a / 2
                        ? ((t.y =
                            -a / 2 +
                            r * ((null == e ? void 0 : e.anchorPoint.y) || 0)),
                          (t.y += this.offset),
                          (t.y -= this.offsetCustom.y))
                        : t.y +
                            r *
                              (1 -
                                ((null == e ? void 0 : e.anchorPoint.y) || 0)) >
                            a / 2 &&
                          ((t.y =
                            a / 2 -
                            r *
                              (1 -
                                ((null == e ? void 0 : e.anchorPoint.y) || 0))),
                          (t.y += this.offset),
                          (t.y += this.offsetCustom.y)),
                      d(n)
                        .to(0.2, { position: new u(t.x, t.y, 0) })
                        .start();
                  }
                }),
                (r.setOffset = function (n) {
                  (this.offset = n), this.checkAndSnapToBorder();
                }),
                o
              );
            })(f)).DISABLE = !1),
            (m = o((x = b).prototype, "bounding_node", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = o(x.prototype, "offsetCustom", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new l(0, 0);
              },
            })),
            (_ = x))
          ) || _)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/KimCuong_SlotMachineCmp.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./LineSpriteComponent.ts",
    "./KimCuong_SlotMachineColumn.ts",
  ],
  function (n) {
    "use strict";
    var e, t, i, l, o, r, u, a, c, s, f, h, p, m, d, v, g, b;
    return {
      setters: [
        function (n) {
          (e = n.applyDecoratedDescriptor),
            (t = n.inheritsLoose),
            (i = n.initializerDefineProperty),
            (l = n.assertThisInitialized);
        },
        function (n) {
          (o = n.cclegacy),
            (r = n._decorator),
            (u = n.Node),
            (a = n.Button),
            (c = n.Tween),
            (s = n.tween),
            (f = n.Label),
            (h = n.Vec3),
            (p = n.UITransform),
            (m = n.Color),
            (d = n.Component);
        },
        function (n) {
          v = n.default;
        },
        function (n) {
          (g = n.default), (b = n.SlotMachineState);
        },
      ],
      execute: function () {
        var C, y, N, E, L, S, w, _, T, I, F, M, R, x;
        o._RF.push(
          {},
          "1c558m2/NFGupHxi/oqj+L3",
          "KimCuong_SlotMachineCmp",
          void 0
        );
        var D = r.ccclass,
          P = r.property;
        n(
          "default",
          ((C = D("KimCuongSlotMachineCmp")),
          (y = P([g])),
          (N = P(v)),
          (E = P(u)),
          (L = P(u)),
          (S = P([a])),
          C(
            (((x = (function (n) {
              function e() {
                for (
                  var e, t = arguments.length, o = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  o[r] = arguments[r];
                return (
                  (e = n.call.apply(n, [this].concat(o)) || this),
                  i(e, "colums", T, l(e)),
                  i(e, "lineCmp", I, l(e)),
                  i(e, "lineNumberLeft", F, l(e)),
                  i(e, "lineNumberRight", M, l(e)),
                  i(e, "line_buttons", R, l(e)),
                  (e.onMachineStopped = function () {}),
                  (e.lineNumberNode = []),
                  (e.default_items = [
                    [0, 1, 2],
                    [1, 2, 3],
                    [3, 4, 5],
                  ]),
                  (e.playDefaultFx = !1),
                  e
                );
              }
              t(e, n);
              var o = e.prototype;
              return (
                (o.onLoad = function () {
                  var n,
                    e = this;
                  null == (n = this.line_buttons) ||
                    n.forEach(function (n, t) {
                      n.node.on("click", function () {
                        var n;
                        null == (n = e.lineCmp) || n.clear(),
                          e.drawLine(t, !1),
                          c.stopAllByTarget(e.node || void 0),
                          s(e.node)
                            .delay(1)
                            .call(function () {
                              var n;
                              null == (n = e.lineCmp) || n.clear();
                            })
                            .start();
                      });
                    });
                }),
                (o.init = function () {
                  var n,
                    e,
                    t = this;
                  this.colums.forEach(function (n, e) {
                    return n.init(t.default_items[e]);
                  }),
                    (this.colums[this.colums.length - 1].onStopped =
                      function () {
                        return t.onMachineStopped();
                      });
                  var i = [];
                  null == (n = this.lineNumberLeft) ||
                    n.children.forEach(function (n) {
                      return i.push(n);
                    });
                  var l = [];
                  null == (e = this.lineNumberRight) ||
                    e.children.forEach(function (n) {
                      return l.push(n);
                    }),
                    i.forEach(function (n) {
                      return t.lineNumberNode.push(n);
                    }),
                    l.forEach(function (n) {
                      return t.lineNumberNode.push(n);
                    }),
                    this.lineNumberNode.sort(function (n, e) {
                      var t = n.getComponentInChildren(f),
                        i = +((null == t ? void 0 : t.string) || ""),
                        l = e.getComponentInChildren(f);
                      return i > +((null == l ? void 0 : l.string) || "")
                        ? 1
                        : -1;
                    });
                }),
                (o.playFxWhenFirst = function () {
                  this.playDefaultFx ||
                    ((this.playDefaultFx = !0),
                    this.colums.forEach(function (n) {
                      return n.playFx();
                    }));
                }),
                (o.spin = function () {
                  var n, e;
                  null == (n = this.lineCmp) || n.clear(),
                    c.stopAllByTarget(
                      (null == (e = this.lineCmp) ? void 0 : e.node) || void 0
                    ),
                    this.colums.forEach(function (n) {
                      return n.spin();
                    });
                }),
                (o.stop = function (n) {
                  var e = [0.6, 1.2, 1.8];
                  this.colums.forEach(function (t, i) {
                    var l = t,
                      o = [n[i], n[i + 3], n[i + 6]];
                    s(l.node)
                      .sequence(
                        s().delay(e[i]),
                        s().call(function () {
                          l.stop(o);
                        })
                      )
                      .start();
                  });
                }),
                (o.stopImmediately = function (n) {
                  var e = [0, 0, 0];
                  this.colums.forEach(function (t, i) {
                    var l = t,
                      o = [n[i], n[i + 3], n[i + 6]];
                    s(l.node)
                      .sequence(
                        s().delay(e[i]),
                        s().call(function () {
                          l.stop(o);
                        })
                      )
                      .start();
                  });
                }),
                (o.isStopped = function () {
                  return (
                    this.colums.filter(function (n) {
                      return n.getstate() == b.STOPPED;
                    }).length >= this.colums.length
                  );
                }),
                (o.isSpinning = function () {
                  return (
                    this.colums.filter(function (n) {
                      return n.getstate() == b.SPINNING;
                    }).length >= this.colums.length
                  );
                }),
                (o.showLines = function (n, e, t, i) {
                  var l,
                    o,
                    r,
                    u = this;
                  null == (l = this.lineCmp) || l.clear(),
                    c.stopAllByTarget(
                      (null == (o = this.lineCmp) ? void 0 : o.node) || void 0
                    );
                  var a = 0,
                    f = e / n.length;
                  n.forEach(function (n) {
                    var e;
                    s(null == (e = u.lineCmp) ? void 0 : e.node)
                      .sequence(
                        s().delay(a),
                        s().call(function () {
                          u.drawLine(n, !1);
                        })
                      )
                      .start(),
                      (a += f);
                  }),
                    s(null == (r = this.lineCmp) ? void 0 : r.node)
                      .sequence(
                        s().delay(e + t),
                        s().call(function () {
                          null == i || i();
                        })
                      )
                      .start();
                }),
                (o.showEachLines = function (n, e) {
                  var t,
                    i,
                    l = this;
                  void 0 === e && (e = 0),
                    null == (t = this.lineCmp) || t.clear(),
                    c.stopAllByTarget(
                      (null == (i = this.lineCmp) ? void 0 : i.node) || void 0
                    );
                  var o = 0;
                  n.forEach(function (n) {
                    var t;
                    s(null == (t = l.lineCmp) ? void 0 : t.node)
                      .sequence(
                        s().delay(o),
                        s().call(function () {
                          l.drawLine(n, !0);
                        })
                      )
                      .start(),
                      (o += e);
                  });
                }),
                (o.showLine = function (n) {
                  var e;
                  null == (e = this.lineCmp) || e.clear(), this.drawLine(n, !0);
                }),
                (o.clearLine = function () {
                  var n;
                  null == (n = this.lineCmp) || n.clear();
                }),
                (o.drawLine = function (n, t) {
                  var i,
                    l,
                    o = this,
                    r = e.LINE[n].map(function (n, e) {
                      var t = o.colums[e].getLineWorldPosition();
                      return (null == t ? void 0 : t[n]) || h.ZERO;
                    }),
                    u =
                      null == (i = this.lineNumberNode[n].parent)
                        ? void 0
                        : i.getComponent(p),
                    a =
                      (null == u
                        ? void 0
                        : u.convertToWorldSpaceAR(
                            new h(this.lineNumberNode[n].position)
                          )) || h.ZERO;
                  n >= 10 ? r.push(a) : r.unshift(a),
                    null == (l = this.lineCmp) ||
                      l.draw(
                        r.map(function (n) {
                          return new h(n.x, n.y, 0);
                        }),
                        5,
                        m.WHITE,
                        null,
                        t
                      );
                }),
                e
              );
            })(d)).SPIN_SPEED = 1500),
            (x.TIME_TO_SHOW_RESULT = 0.05),
            (x.LINE = [
              [2, 2, 2],
              [1, 1, 1],
              [0, 0, 0],
              [2, 0, 2],
              [0, 2, 0],
              [2, 1, 2],
              [2, 1, 0],
              [0, 1, 2],
              [1, 0, 1],
              [1, 2, 1],
              [0, 1, 0],
              [2, 2, 1],
              [1, 1, 0],
              [1, 1, 2],
              [0, 0, 1],
              [1, 2, 2],
              [0, 1, 1],
              [2, 1, 1],
              [1, 0, 0],
              [2, 0, 1],
            ]),
            (T = e((_ = x).prototype, "colums", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (I = e(_.prototype, "lineCmp", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = e(_.prototype, "lineNumberLeft", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = e(_.prototype, "lineNumberRight", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = e(_.prototype, "line_buttons", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (w = _))
          ) || w)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/KimCuong_SlotMachineColumn.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./KimCuongGameView.ts",
    "./KimCuong_SlotMachineCmp.ts",
    "./KimCuong_SlotMachineItemView.ts",
  ],
  function (t) {
    "use strict";
    var i, o, n, e, s, a, r, u, c, p, h, l, m, f, _, y, d;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (a = t._decorator),
            (r = t.Node),
            (u = t.Layout),
            (c = t.Sprite),
            (p = t.UITransform),
            (h = t.Vec3),
            (l = t.tween),
            (m = t.Component);
        },
        function (t) {
          f = t.default;
        },
        function (t) {
          _ = t.default;
        },
        function (t) {
          (y = t.default), (d = t.KimCuongItem);
        },
      ],
      execute: function () {
        var g, v, S, C, I, P, E, b, T;
        t("SlotMachineState", void 0),
          s._RF.push(
            {},
            "f1da2aYPxRAvJx6FC9BrA4k",
            "KimCuong_SlotMachineColumn",
            void 0
          );
        var N,
          O = a.ccclass,
          w = a.property;
        !(function (t) {
          (t[(t.SPINNING = 0)] = "SPINNING"),
            (t[(t.CHECK_TO_STOP = 1)] = "CHECK_TO_STOP"),
            (t[(t.STOPPING = 2)] = "STOPPING"),
            (t[(t.STOPPED = 3)] = "STOPPED");
        })(N || (N = t("SlotMachineState", {})));
        t(
          "default",
          ((g = O("KimCuongSlotMachineColumn")),
          (v = w([r])),
          (S = w(r)),
          (C = w(u)),
          g(
            ((E = i(
              (P = (function (t) {
                function i() {
                  for (
                    var i, o = arguments.length, s = new Array(o), a = 0;
                    a < o;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(s)) || this),
                    n(i, "items", E, e(i)),
                    n(i, "lineNode", b, e(i)),
                    n(i, "layout", T, e(i)),
                    (i.state = N.STOPPED),
                    (i.item_position_y_limited = 0),
                    (i.item_position_y_top = 0),
                    (i.item_position_y_bottom = 0),
                    (i.item_position_y_stop = 0),
                    (i.item_top = null),
                    (i.bouncing_offset = 0),
                    (i.distance = 0),
                    (i.onStopped = function () {}),
                    i
                  );
                }
                o(i, t);
                var s = i.prototype;
                return (
                  (s.getLineWorldPosition = function () {
                    var t;
                    return null == (t = this.lineNode)
                      ? void 0
                      : t.getComponentsInChildren(c).map(function (t) {
                          var i,
                            o =
                              null == (i = t.node.parent)
                                ? void 0
                                : i.getComponent(p);
                          return null == o
                            ? void 0
                            : o.convertToWorldSpaceAR(new h(t.node.position));
                        });
                  }),
                  (s.onLoad = function () {
                    var t, i;
                    this.item_position_y_bottom = this.items[0].position.y;
                    var o = this.items[0].getComponent(p);
                    (this.bouncing_offset =
                      ((null == o ? void 0 : o.contentSize.height) || 0) / 20),
                      (this.item_position_y_stop =
                        this.item_position_y_bottom - this.bouncing_offset),
                      (this.item_position_y_top =
                        this.items[this.items.length - 1].position.y),
                      (this.item_position_y_limited =
                        this.item_position_y_bottom -
                        (((null == o ? void 0 : o.contentSize.height) || 0) +
                          ((null == (t = this.layout) ? void 0 : t.spacingY) ||
                            0)));
                    var n = this.items[0].getComponent(p);
                    this.distance =
                      ((null == (i = this.layout) ? void 0 : i.spacingY) || 0) +
                      3 * ((null == n ? void 0 : n.contentSize.height) || 0);
                  }),
                  (s.init = function (t) {
                    (this.state = N.STOPPED),
                      this.items.forEach(function (t) {
                        t.getComponentsInChildren(y).forEach(function (t) {
                          return t.init();
                        });
                      }),
                      this.getBottomItem()
                        .getComponentsInChildren(y)
                        .forEach(function (i, o) {
                          var n = new d();
                          n.decodeItem(t[o]), i.setItem(n), i.bright();
                        });
                  }),
                  (s.playFx = function () {
                    var t = this.getBottomItem();
                    this.items.forEach(function (i) {
                      var o = i.getComponentsInChildren(y);
                      i.name != t.name
                        ? o.forEach(function (t, i) {
                            t.disable();
                          })
                        : o.forEach(function (t, i) {
                            t.playFx();
                          });
                    });
                  }),
                  (s.spin = function () {
                    (this.item_top = this.getTopItem()),
                      this.items.forEach(function (t) {
                        t.getComponentsInChildren(y).forEach(function (t) {
                          return t.blur();
                        });
                      }),
                      (this.state = N.SPINNING);
                  }),
                  (s.stop = function (t) {
                    (this.item_top = this.getTopItem()),
                      this.item_top
                        .getComponentsInChildren(y)
                        .forEach(function (i, o) {
                          i.setItem(t[o]), i.bright();
                        }),
                      (this.state = N.CHECK_TO_STOP);
                  }),
                  (s.getstate = function () {
                    return this.state;
                  }),
                  (s.update = function (t) {
                    switch (this.state) {
                      case N.SPINNING:
                        this.spinning(t);
                        break;
                      case N.CHECK_TO_STOP:
                        this.checkToStop(t);
                    }
                  }),
                  (s.getTopItem = function () {
                    var t = this.items[0];
                    return (
                      this.items.forEach(function (i) {
                        i.position.y >= t.position.y && (t = i);
                      }),
                      t
                    );
                  }),
                  (s.getBottomItem = function () {
                    var t = this.items[0];
                    return (
                      this.items.forEach(function (i) {
                        i.position.y < t.position.y && (t = i);
                      }),
                      t
                    );
                  }),
                  (s.spinning = function (t) {
                    var i = this,
                      o = !1;
                    this.items.forEach(function (n) {
                      var e = new h(n.position);
                      (e.y -= _.SPIN_SPEED * t),
                        e.y <= i.item_position_y_limited &&
                          ((e.y = i.item_position_y_top), (o = !0)),
                        (n.position = e);
                    }),
                      o && this.sort();
                  }),
                  (s.sort = function () {
                    this.items = this.items.sort(function (t, i) {
                      return t.position.y < i.position.y ? -1 : 1;
                    });
                  }),
                  (s.checkToStop = function (t) {
                    var i,
                      o = this;
                    this.items.forEach(function (i) {
                      var n = new h(i.position);
                      (n.y -= _.SPIN_SPEED * t),
                        n.y <= o.item_position_y_limited &&
                          (n.y = o.item_position_y_top),
                        (i.position = n);
                    }),
                      ((null == (i = this.item_top) ? void 0 : i.position.y) ||
                        0) <= this.item_position_y_stop &&
                        (this.bounce(), (this.state = N.STOPPING));
                  }),
                  (s.bounce = function () {
                    var t,
                      i,
                      o = this;
                    this.sort();
                    null == (t = this.item_top) || t.position;
                    var n = new h();
                    (n.y = this.item_position_y_stop),
                      null == (i = this.item_top) || i.setPosition(n),
                      this.items.forEach(function (t, i) {
                        var n;
                        if (
                          t.name != (null == (n = o.item_top) ? void 0 : n.name)
                        ) {
                          var e = new h(t.position);
                          if (0 == i) {
                            var s,
                              a = o.items[i + 1].getComponent(p),
                              r =
                                (null == a ? void 0 : a.contentSize.height) ||
                                0;
                            e.y =
                              o.items[i + 1].position.y -
                                (((null == (s = o.layout)
                                  ? void 0
                                  : s.spacingY) || 0) +
                                  r) || 0;
                          } else {
                            var u,
                              c = o.items[i - 1].getComponent(p),
                              l =
                                (null == c ? void 0 : c.contentSize.height) ||
                                0;
                            e.y =
                              o.items[i - 1].position.y +
                                ((null == (u = o.layout)
                                  ? void 0
                                  : u.spacingY) || 0) +
                                l || 0;
                          }
                          t.position = e;
                        }
                      });
                    var e =
                      Math.abs(this.item_position_y_stop) -
                      Math.abs(this.item_position_y_bottom);
                    this.items.forEach(function (t) {
                      l(t)
                        .sequence(
                          l().by(0.1, { position: new h(0, e, 0) }),
                          l().call(function () {
                            var t;
                            (o.state = N.STOPPED),
                              o.onStopped(),
                              (null != (t = f.getInstance()) &&
                                t.isFastSpin()) ||
                                o.items.forEach(function (t) {
                                  var i,
                                    n = t.getComponentsInChildren(y);
                                  t.name !=
                                  (null == (i = o.item_top) ? void 0 : i.name)
                                    ? n.forEach(function (t, i) {
                                        t.disable();
                                      })
                                    : n.forEach(function (t, i) {
                                        t.playFx();
                                      });
                                });
                          })
                        )
                        .start();
                    });
                  }),
                  i
                );
              })(m)).prototype,
              "items",
              [v],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (b = i(P.prototype, "lineNode", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = i(P.prototype, "layout", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = P))
          ) || I)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/KimCuong_SlotMachineItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameUtils.ts",
    "./KimCuongGameView.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, r, o, s, a, l, m, u, c;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (s = t._decorator),
            (a = t.Sprite),
            (l = t.sp),
            (m = t.Component);
        },
        function (t) {
          u = t.default;
        },
        function (t) {
          c = t.default;
        },
      ],
      execute: function () {
        var h, p, d, _, f, b, g;
        o._RF.push(
          {},
          "cbc2c+n2hhCqZATw58Or8+9",
          "KimCuong_SlotMachineItemView",
          void 0
        );
        var v = s.ccclass,
          y = s.property,
          I = t(
            "KimCuongItem",
            (function () {
              function t() {
                this.code = 0;
              }
              var i = t.prototype;
              return (
                (i.decodeItem = function (t) {
                  this.code = t;
                }),
                (i.getResourceNormalName = function (t) {
                  return (
                    void 0 === t && (t = !1),
                    "tps_symbol_" + this.code.toString() + (t ? ".png" : "")
                  );
                }),
                (i.getResourceBlurName = function (t) {
                  return (
                    void 0 === t && (t = !1),
                    "tps_symbol_blur_" +
                      this.code.toString() +
                      (t ? ".png" : "")
                  );
                }),
                t
              );
            })()
          );
        t(
          "default",
          ((h = v("KimCuongSlotMachineItemView")),
          (p = y(a)),
          (d = y(l.Skeleton)),
          h(
            ((b = i(
              (f = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, o = new Array(e), s = 0;
                    s < e;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    n(i, "spr_item", b, r(i)),
                    n(i, "anim_item", g, r(i)),
                    (i.item = null),
                    i
                  );
                }
                e(i, t);
                var o = i.prototype;
                return (
                  (o.init = function () {
                    (this.item = new I()),
                      this.item.decodeItem(u.getRandomInt(0, 6)),
                      this.bright();
                  }),
                  (o.setItem = function (t) {
                    null != t && (this.item = t);
                  }),
                  (o.disable = function (t) {
                    void 0 === t && (t = !0), (this.node.active = !t);
                  }),
                  (o.blur = function () {
                    var t, i;
                    this.disable(!1),
                      this.spr_item && (this.spr_item.enabled = !0),
                      this.anim_item && (this.anim_item.enabled = !1);
                    var e =
                      null == (t = this.item)
                        ? void 0
                        : t.getResourceBlurName();
                    this.spr_item &&
                      (this.spr_item.spriteFrame =
                        (null == (i = c.getInstance())
                          ? void 0
                          : i.loaded_item_blur.filter(function (t) {
                              return t.name.indexOf(e || "") >= 0;
                            })[0]) || null);
                  }),
                  (o.bright = function () {
                    var t, i;
                    this.disable(!1),
                      this.spr_item && (this.spr_item.enabled = !0),
                      null != this.anim_item && (this.anim_item.enabled = !1);
                    var e =
                      null == (t = this.item)
                        ? void 0
                        : t.getResourceNormalName();
                    this.spr_item &&
                      (this.spr_item.spriteFrame =
                        (null == (i = c.getInstance())
                          ? void 0
                          : i.loaded_item_normal.filter(function (t) {
                              return t.name.indexOf(e || "") >= 0;
                            })[0]) || null);
                  }),
                  (o.playFx = function () {
                    var t,
                      i,
                      e,
                      n,
                      r = this;
                    if (null != this.anim_item) {
                      this.disable(!1),
                        (this.anim_item.enabled = !0),
                        this.spr_item && (this.spr_item.enabled = !1),
                        (this.anim_item.skeletonData =
                          (null == (t = c.getInstance())
                            ? void 0
                            : t.loaded_anim_item[
                                (null == (i = this.item) ? void 0 : i.code) || 0
                              ]) || new l.SkeletonData());
                      this.anim_item.setAnimation(0, "symbolFx", !1);
                      null == (e = this.anim_item) ||
                        e.setStartListener(function (t) {
                          t.animation && t.animation.name;
                        }),
                        null == (n = this.anim_item) ||
                          n.setCompleteListener(function (t) {
                            "symbolFx" ==
                              (t.animation ? t.animation.name : "") &&
                              setTimeout(function () {
                                var t;
                                null == (t = r.anim_item) ||
                                  t.setAnimation(0, "idle", !0);
                              }, 100);
                          });
                    }
                  }),
                  (o.setSpriteFrame = function (t) {
                    this.spr_item && (this.spr_item.spriteFrame = t);
                  }),
                  i
                );
              })(m)).prototype,
              "spr_item",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (g = i(f.prototype, "anim_item", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = f))
          ) || _)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/KimCuongBetHistoryDetail.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./LineSpriteComponent.ts",
    "./KimCuong_SlotMachineCmp.ts",
    "./KimCuong_SlotMachineItemView.ts",
  ],
  function (n) {
    "use strict";
    var e, t, i, o, r, l, a, u, c, s, p, h, m, f, d, v, g, C;
    return {
      setters: [
        function (n) {
          (e = n.applyDecoratedDescriptor),
            (t = n.inheritsLoose),
            (i = n.initializerDefineProperty),
            (o = n.assertThisInitialized);
        },
        function (n) {
          (r = n.cclegacy),
            (l = n._decorator),
            (a = n.Label),
            (u = n.Button),
            (c = n.Tween),
            (s = n.tween),
            (p = n.UITransform),
            (h = n.Vec3),
            (m = n.Color),
            (f = n.Component);
        },
        function (n) {
          d = n.default;
        },
        function (n) {
          v = n.default;
        },
        function (n) {
          (g = n.default), (C = n.KimCuongItem);
        },
      ],
      execute: function () {
        var b, w, y, _, I, k, B, L, S, M, V;
        r._RF.push(
          {},
          "d0636BaeVtPpYg3Q5q2Y0YC",
          "KimCuongBetHistoryDetail",
          void 0
        );
        var z = l.ccclass,
          D = l.property;
        n(
          "default",
          ((b = z("KimCuongBetHistoryDetail")),
          (w = D(a)),
          (y = D(u)),
          (_ = D(d)),
          (I = D([g])),
          b(
            ((L = e(
              (B = (function (n) {
                function e() {
                  for (
                    var e, t = arguments.length, r = new Array(t), l = 0;
                    l < t;
                    l++
                  )
                    r[l] = arguments[l];
                  return (
                    (e = n.call.apply(n, [this].concat(r)) || this),
                    i(e, "lbl_phien", L, o(e)),
                    i(e, "btn_prev", S, o(e)),
                    i(e, "lineCmp", M, o(e)),
                    i(e, "kimCuong_SlotMachineItemViews", V, o(e)),
                    (e.onBack = function () {}),
                    e
                  );
                }
                t(e, n);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    var n,
                      e = this;
                    null == (n = this.btn_prev) ||
                      n.node.on("click", function () {
                        return null == e.onBack ? void 0 : e.onBack();
                      });
                  }),
                  (r.show = function (n, e, t) {
                    var i = this;
                    this.lbl_phien && (this.lbl_phien.string = "#" + n),
                      e
                        .map(function (n) {
                          var e = new C();
                          return e.decodeItem(n), e;
                        })
                        .forEach(function (n, e) {
                          i.kimCuong_SlotMachineItemViews[e].setItem(n),
                            i.kimCuong_SlotMachineItemViews[e].bright();
                        }),
                      (this.node.active = !0),
                      this.showEachLines(t, 1);
                  }),
                  (r.showEachLines = function (n, e) {
                    var t,
                      i,
                      o = this;
                    void 0 === e && (e = 0),
                      null == (t = this.lineCmp) || t.clear(),
                      c.stopAllByTarget(
                        (null == (i = this.lineCmp) ? void 0 : i.node) || void 0
                      );
                    var r = 0;
                    n.forEach(function (n) {
                      var t;
                      s(null == (t = o.lineCmp) ? void 0 : t.node)
                        .sequence(
                          s().delay(r),
                          s().call(function () {
                            o.drawLine(n, !0);
                          })
                        )
                        .start(),
                        (r += e);
                    });
                  }),
                  (r.drawLine = function (n, e) {
                    var t,
                      i,
                      o = this,
                      r =
                        v.LINE[n].map(function (n, e) {
                          var t,
                            i = o.kimCuong_SlotMachineItemViews[e + 3 * n],
                            r =
                              null == (t = i.node.parent)
                                ? void 0
                                : t.getComponent(p);
                          return null == r
                            ? void 0
                            : r.convertToWorldSpaceAR(i.node.position);
                        }) || [];
                    null == (t = this.lineCmp) ||
                      t.draw(
                        r.map(function (n) {
                          return new h(
                            null == n ? void 0 : n.x,
                            null == n ? void 0 : n.y,
                            0
                          );
                        }),
                        6,
                        m.WHITE,
                        null == (i = this.node.parent) ? void 0 : i.parent,
                        e
                      );
                  }),
                  e
                );
              })(f)).prototype,
              "lbl_phien",
              [w],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (S = e(B.prototype, "btn_prev", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = e(B.prototype, "lineCmp", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = e(B.prototype, "kimCuong_SlotMachineItemViews", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (k = B))
          ) || k)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/KimCuongBetHistoryItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./StringUtils.ts",
    "./MiniGameNodeController.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, o, c, r, h, _, u, l, a, s;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (c = t.cclegacy),
            (r = t._decorator),
            (h = t.Label),
            (_ = t.Button),
            (u = t.Color),
            (l = t.Component);
        },
        function (t) {
          a = t.StringUtils;
        },
        function (t) {
          s = t.default;
        },
      ],
      execute: function () {
        var p,
          x,
          g,
          b,
          d,
          f,
          m,
          v,
          y,
          w,
          z,
          S,
          C,
          H,
          B,
          I,
          D,
          K,
          L,
          N,
          V,
          W,
          k,
          F,
          M,
          P,
          R;
        c._RF.push(
          {},
          "5236aWmDz1HfJWe1Ycug0qY",
          "KimCuongBetHistoryItemView",
          void 0
        );
        var T = r.ccclass,
          U = r.property;
        t(
          "default",
          ((p = T("KimCuongBetHistoryItemView")),
          (x = U(h)),
          (g = U(h)),
          (b = U(h)),
          (d = U(h)),
          (f = U(h)),
          (m = U(h)),
          (v = U(_)),
          (y = U(h)),
          (w = U(h)),
          (z = U(h)),
          (S = U(h)),
          (C = U(h)),
          p(
            ((I = i(
              (B = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, c = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    c[r] = arguments[r];
                  return (
                    (i = t.call.apply(t, [this].concat(c)) || this),
                    n(i, "txt_phien_title", I, o(i)),
                    n(i, "txt_phien_time", D, o(i)),
                    n(i, "txt_phien_datcuoc", K, o(i)),
                    n(i, "txt_phien_solinecuoc", L, o(i)),
                    n(i, "txt_phien_tongcuoc", N, o(i)),
                    n(i, "txt_phien_solinetrung", V, o(i)),
                    n(i, "btn_chitiet", W, o(i)),
                    n(i, "txt_phien_tienthang", k, o(i)),
                    n(i, "txt_soline", F, o(i)),
                    n(i, "txt_cuoc", M, o(i)),
                    n(i, "txt_tongcuoc", P, o(i)),
                    n(i, "txt_thang", R, o(i)),
                    i
                  );
                }
                e(i, t);
                var c = i.prototype;
                return (
                  (c.show = function (t, i, e, n, o, c, r, h, _, l) {
                    var p;
                    this.btn_chitiet && (this.btn_chitiet.node.active = !0),
                      this.txt_phien_title &&
                        (this.txt_phien_title.string = "#" + t.toString()),
                      this.txt_phien_time &&
                        (this.txt_phien_time.string = i.toString()),
                      this.txt_phien_datcuoc &&
                        (this.txt_phien_datcuoc.string = a.formatNumber(e)),
                      this.txt_phien_solinecuoc &&
                        (this.txt_phien_solinecuoc.string = n.toString()),
                      this.txt_phien_tongcuoc &&
                        (this.txt_phien_tongcuoc.string = o.toString()),
                      this.txt_phien_solinetrung &&
                        (this.txt_phien_solinetrung.string = c.toString()),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.color = u.WHITE),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.string = a.formatNumber(r)),
                      null == (p = this.btn_chitiet) ||
                        p.node.on("click", function () {
                          null == l || l(t, h, _);
                        }),
                      this.txt_phien_title &&
                        (this.txt_phien_title.node.active = !0),
                      this.txt_phien_time &&
                        (this.txt_phien_time.node.active = !0),
                      this.txt_phien_datcuoc &&
                        (this.txt_phien_datcuoc.node.active = !0),
                      this.txt_phien_solinecuoc &&
                        (this.txt_phien_solinecuoc.node.active = !0),
                      this.txt_phien_tongcuoc &&
                        (this.txt_phien_tongcuoc.node.active = !0),
                      this.txt_phien_solinetrung &&
                        (this.txt_phien_solinetrung.node.active = !0),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.node.active = !0),
                      s.portrait &&
                        (this.txt_cuoc && (this.txt_cuoc.node.active = !0),
                        this.txt_soline && (this.txt_soline.node.active = !0),
                        this.txt_tongcuoc &&
                          (this.txt_tongcuoc.node.active = !0),
                        this.txt_thang && (this.txt_thang.node.active = !0));
                  }),
                  (c.hide = function () {
                    this.btn_chitiet && (this.btn_chitiet.node.active = !1),
                      this.txt_phien_title &&
                        (this.txt_phien_title.node.active = !1),
                      this.txt_phien_time &&
                        (this.txt_phien_time.node.active = !1),
                      this.txt_phien_datcuoc &&
                        (this.txt_phien_datcuoc.node.active = !1),
                      this.txt_phien_solinecuoc &&
                        (this.txt_phien_solinecuoc.node.active = !1),
                      this.txt_phien_tongcuoc &&
                        (this.txt_phien_tongcuoc.node.active = !1),
                      this.txt_phien_solinetrung &&
                        (this.txt_phien_solinetrung.node.active = !1),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.node.active = !1),
                      s.portrait &&
                        (this.txt_cuoc && (this.txt_cuoc.node.active = !1),
                        this.txt_soline && (this.txt_soline.node.active = !1),
                        this.txt_tongcuoc &&
                          (this.txt_tongcuoc.node.active = !1),
                        this.txt_thang && (this.txt_thang.node.active = !1));
                  }),
                  i
                );
              })(l)).prototype,
              "txt_phien_title",
              [x],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (D = i(B.prototype, "txt_phien_time", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (K = i(B.prototype, "txt_phien_datcuoc", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = i(B.prototype, "txt_phien_solinecuoc", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = i(B.prototype, "txt_phien_tongcuoc", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = i(B.prototype, "txt_phien_solinetrung", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = i(B.prototype, "btn_chitiet", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = i(B.prototype, "txt_phien_tienthang", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = i(B.prototype, "txt_soline", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = i(B.prototype, "txt_cuoc", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = i(B.prototype, "txt_tongcuoc", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = i(B.prototype, "txt_thang", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = B))
          ) || H)
        );
        c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/KimCuongBetHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./Define.ts",
    "./StringUtils.ts",
    "./KimCuongBetHistoryDetail.ts",
    "./KimCuongBetHistoryItemView.ts",
    "./HttpManager.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, r, s, a, l, u, g, c, m, h, p, f, b, y, d;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (s = t._decorator),
            (a = t.Button),
            (l = t.Label),
            (u = t.Node),
            (g = t.UIOpacity);
        },
        function (t) {
          c = t.CommonPopup;
        },
        function (t) {
          m = t.GameConfigManager;
        },
        function (t) {
          h = t.GameID;
        },
        function (t) {
          p = t.StringUtils;
        },
        function (t) {
          f = t.default;
        },
        function (t) {
          b = t.default;
        },
        function (t) {
          (y = t.HttpCommand), (d = t.httpManager);
        },
      ],
      execute: function () {
        var v, B, _, C, k, H, w, D, P, L, T, N, S, I, z;
        r._RF.push(
          {},
          "1dbc6roRXBPGr4kQFYTAcY0",
          "KimCuongBetHistoryView",
          void 0
        );
        var x = s.ccclass,
          R = s.property,
          G = function () {
            (this.bet = 0),
              (this.sessionID = 0),
              (this.money = 0),
              (this.totalBet = 0),
              (this.numLines = 0),
              (this.symbols = []),
              (this.payoutLines = []),
              (this.betTime = "");
          };
        t(
          "default",
          ((v = x("KimCuongBetHistoryView")),
          (B = R(a)),
          (_ = R(a)),
          (C = R(l)),
          (k = R(u)),
          (H = R(u)),
          (w = R([u])),
          v(
            ((L = e(
              (P = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    n(e, "btn_prev", L, o(e)),
                    n(e, "btn_next", T, o(e)),
                    n(e, "lbl_page", N, o(e)),
                    n(e, "kimCuongBetHistoryDetailNode", S, o(e)),
                    n(e, "kimCuongBetingNode", I, o(e)),
                    n(e, "item_nodes", z, o(e)),
                    (e._bets = []),
                    (e.currentPage = 1),
                    (e.max_pages = 0),
                    (e.item_views = []),
                    (e.kimCuongBetHistoryDetail = null),
                    e
                  );
                }
                i(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    var e,
                      i,
                      n,
                      o = this;
                    this.setOffsetStreamNative(!0),
                      t.prototype.onLoad.call(this),
                      null == (e = this.btn_prev) ||
                        e.node.on("click", function () {
                          o.currentPage > 1 &&
                            ((o.currentPage -= 1),
                            o.lbl_page &&
                              (o.lbl_page.string = o.currentPage + "")),
                            o.fetchHistory(!1);
                        }),
                      null == (i = this.btn_next) ||
                        i.node.on("click", function () {
                          o.currentPage < o.max_pages &&
                            ((o.currentPage += 1),
                            o.lbl_page &&
                              (o.lbl_page.string = o.currentPage + "")),
                            o.fetchHistory(!1);
                        }),
                      (this.kimCuongBetHistoryDetail =
                        (null == (n = this.kimCuongBetHistoryDetailNode)
                          ? void 0
                          : n.getComponent(f)) || null),
                      this.kimCuongBetHistoryDetail &&
                        (this.kimCuongBetHistoryDetail.onBack = function () {
                          o.backToBetting();
                        });
                  }),
                  (r.goToFirstPage = function () {
                    (this.currentPage = 1),
                      this.lbl_page &&
                        (this.lbl_page.string = this.currentPage.toString());
                  }),
                  (r.fetchHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0), t && this.goToFirstPage();
                    var i = (this.currentPage - 1) * this.item_nodes.length,
                      n =
                        m.SAdomainURL +
                        y.BET_HISTORY_URL.replace(
                          "%gameid%",
                          h.TRUNGPS.toString()
                        ).replace("%skip%", i.toString());
                    d.sendGET({
                      url: n,
                      onCompleted: function (i) {
                        e._bets = [];
                        var n = JSON.parse(i).data,
                          o = n.items;
                        if (null != o) {
                          var r = n.count;
                          e.max_pages = Math.ceil(r / e.item_nodes.length);
                          for (var s = 0; s < o.length; s++) {
                            var a = o[s],
                              l = new G();
                            (l.sessionID = a.sessionId),
                              (l.bet = a.betting),
                              (l.money = a.money),
                              (l.totalBet = a.totalBet),
                              (l.numLines = a.numLines);
                            var u = a.createdTime,
                              g = new Date(u);
                            (l.betTime = p.formatTime(g)),
                              (l.symbols = []),
                              (l.payoutLines = []);
                            for (var c = a.symbols, m = 0; m < c.length; m++)
                              l.symbols.push(c[m]);
                            for (
                              var h = a.payoutLines, f = 0;
                              f < h.length;
                              f++
                            ) {
                              var b = h[f].id;
                              l.payoutLines.push(b);
                            }
                            e._bets.push(l);
                          }
                          e.showBetHistory(t);
                        }
                      },
                    });
                  }),
                  (r.showBetHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0),
                      this.item_views.length <= 0 &&
                        (this.item_views = this.item_nodes.map(function (t) {
                          return t.getComponent(b);
                        })),
                      this.item_views.forEach(function (t, i) {
                        var n = e._bets[i];
                        if (null != n && null != n) {
                          var o = null == t ? void 0 : t.node.getComponent(g);
                          o && (o.opacity = 255),
                            null == t ||
                              t.show(
                                n.sessionID,
                                n.betTime,
                                n.bet,
                                n.numLines,
                                n.totalBet,
                                n.payoutLines.length,
                                n.money,
                                n.symbols,
                                n.payoutLines,
                                function (t, i, n) {
                                  e.showDetail(t, i, n);
                                }
                              );
                        } else null == t || t.hide();
                      }),
                      this.backToBetting(),
                      t && this.show();
                  }),
                  (r.showDetail = function (t, e, i) {
                    this.kimCuongBetingNode &&
                      (this.kimCuongBetingNode.active = !1),
                      this.kimCuongBetHistoryDetail &&
                        this.kimCuongBetHistoryDetail.show(t, e, i);
                  }),
                  (r.backToBetting = function () {
                    this.kimCuongBetingNode &&
                      (this.kimCuongBetingNode.active = !0),
                      this.kimCuongBetHistoryDetailNode &&
                        (this.kimCuongBetHistoryDetailNode.active = !1);
                  }),
                  e
                );
              })(c)).prototype,
              "btn_prev",
              [B],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (T = e(P.prototype, "btn_next", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(P.prototype, "lbl_page", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = e(P.prototype, "kimCuongBetHistoryDetailNode", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(P.prototype, "kimCuongBetingNode", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(P.prototype, "item_nodes", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (D = P))
          ) || D)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/KimCuongBetRankItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var e, i, n, r, o, a, s, u, _, l;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (a = t._decorator),
            (s = t.Label),
            (u = t.Color),
            (_ = t.Component);
        },
        function (t) {
          l = t.StringUtils;
        },
      ],
      execute: function () {
        var c, m, x, h, p, b, f, g, y, w, d, v, z;
        o._RF.push(
          {},
          "b8e2eyQO4dMOZg+w3O0jIbr",
          "KimCuongBetRankItemView",
          void 0
        );
        var I = a.ccclass,
          S = a.property;
        t(
          "default",
          ((c = I("KimCuongBetRankItemView")),
          (m = S(s)),
          (x = S(s)),
          (h = S(s)),
          (p = S(s)),
          (b = S(s)),
          c(
            ((y = e(
              (g = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "txt_time", y, r(e)),
                    n(e, "txt_username", w, r(e)),
                    n(e, "txt_bet", d, r(e)),
                    n(e, "txt_win_amount", v, r(e)),
                    n(e, "txt_type", z, r(e)),
                    e
                  );
                }
                i(e, t);
                var o = e.prototype;
                return (
                  (o.show = function (t, e, i, n, r) {
                    this.txt_time && (this.txt_time.string = t.toString()),
                      this.txt_username &&
                        (this.txt_username.string = e.toString()),
                      this.txt_bet && (this.txt_bet.string = l.formatNumber(i)),
                      this.txt_win_amount &&
                        (this.txt_win_amount.color = u.WHITE),
                      this.txt_win_amount &&
                        (this.txt_win_amount.string = l.formatNumber(n)),
                      this.txt_type && (this.txt_type.string = r.toString()),
                      this.txt_time && (this.txt_time.node.active = !0),
                      this.txt_username && (this.txt_username.node.active = !0),
                      this.txt_bet && (this.txt_bet.node.active = !0),
                      this.txt_win_amount &&
                        (this.txt_win_amount.node.active = !0),
                      this.txt_type && (this.txt_type.node.active = !0);
                  }),
                  (o.hide = function () {
                    this.txt_time && (this.txt_time.node.active = !1),
                      this.txt_username && (this.txt_username.node.active = !1),
                      this.txt_bet && (this.txt_bet.node.active = !1),
                      this.txt_win_amount &&
                        (this.txt_win_amount.node.active = !1),
                      this.txt_type && (this.txt_type.node.active = !1);
                  }),
                  e
                );
              })(_)).prototype,
              "txt_time",
              [m],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (w = e(g.prototype, "txt_username", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = e(g.prototype, "txt_bet", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = e(g.prototype, "txt_win_amount", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(g.prototype, "txt_type", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = g))
          ) || f)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/KimCuongBetRankView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./Define.ts",
    "./StringUtils.ts",
    "./KimCuongBetRankItemView.ts",
    "./HttpManager.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, r, a, o, u, l, c, s, p, g, _, m, f, h;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (u = t.Button),
            (l = t.Label),
            (c = t.UIOpacity);
        },
        function (t) {
          s = t.CommonPopup;
        },
        function (t) {
          p = t.GameConfigManager;
        },
        function (t) {
          g = t.GameID;
        },
        function (t) {
          _ = t.StringUtils;
        },
        function (t) {
          m = t.default;
        },
        function (t) {
          (f = t.HttpCommand), (h = t.httpManager);
        },
      ],
      execute: function () {
        var b, d, v, y, k, w, R, C, S, T, P;
        a._RF.push(
          {},
          "2a6a2HTbPZGKaGGgClGz8mx",
          "KimCuongBetRankView",
          void 0
        );
        var x = o.ccclass,
          G = o.property,
          N = function () {
            (this.rank = 0),
              (this.money = 0),
              (this.displayName = ""),
              (this.bet = 0),
              (this.type = 0),
              (this.betTime = "");
          };
        t(
          "default",
          ((b = x("KimCuongBetRankView")),
          (d = G([m])),
          (v = G(u)),
          (y = G(u)),
          (k = G(l)),
          b(
            ((C = e(
              (R = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, a = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    i(e, "item_views", C, r(e)),
                    i(e, "btn_prev", S, r(e)),
                    i(e, "btn_next", T, r(e)),
                    i(e, "lbl_current_page", P, r(e)),
                    (e._rank = []),
                    (e.current_page = 1),
                    (e.maxPage = 0),
                    e
                  );
                }
                n(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    var e,
                      n = this;
                    this.setOffsetStreamNative(!0),
                      t.prototype.onLoad.call(this),
                      null == (e = this.btn_prev) ||
                        e.node.on("click", function () {
                          n.current_page <= 1 ||
                            ((n.current_page -= 1),
                            n.lbl_current_page &&
                              (n.lbl_current_page.string =
                                n.current_page.toString()),
                            n.fetchRank(!1));
                        }),
                      this.btn_next &&
                        this.btn_next.node.on("click", function () {
                          n.current_page >= n.maxPage ||
                            ((n.current_page += 1),
                            n.lbl_current_page &&
                              (n.lbl_current_page.string =
                                n.current_page.toString()),
                            n.fetchRank(!1));
                        });
                  }),
                  (a.fetchRank = function (t) {
                    var e = this;
                    void 0 === t && (t = !0),
                      t &&
                        ((this.current_page = 1),
                        this.lbl_current_page &&
                          (this.lbl_current_page.string =
                            this.current_page.toString()));
                    var n = 6 * (this.current_page - 1),
                      i =
                        p.SAdomainURL +
                        f.BET_RANK_TOP_URL.replace(
                          "%gameid%",
                          g.TRUNGPS.toString()
                        ).replace("%skip%", n.toString());
                    h.sendGET({
                      url: i,
                      onCompleted: function (n) {
                        e._rank = [];
                        var i = JSON.parse(n).data,
                          r = i.items;
                        if (null != r) {
                          var a = i.count;
                          e.maxPage = Math.ceil(a / 6);
                          for (var o = 0; o < r.length; o++) {
                            var u = r[o],
                              l = new N();
                            (l.bet = u.betting),
                              (l.displayName = u.displayName),
                              (l.money = u.money),
                              (l.type = u.description);
                            var c = u.createdTime,
                              s = new Date(c);
                            (l.betTime = _.formatTime(s)), e._rank.push(l);
                          }
                          e.showRank(t);
                        }
                      },
                    });
                  }),
                  (a.showRank = function (t) {
                    var e = this;
                    void 0 === t && (t = !0),
                      this.item_views.forEach(function (t, n) {
                        var i = e._rank[n];
                        if (null != i && null != i) {
                          var r = t.node.getComponent(c);
                          r && (r.opacity = 255),
                            t.show(
                              i.betTime,
                              i.displayName,
                              i.bet,
                              i.money,
                              i.type
                            );
                        } else t.hide();
                      }),
                      t && this.show();
                  }),
                  e
                );
              })(s)).prototype,
              "item_views",
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (S = e(R.prototype, "btn_prev", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = e(R.prototype, "btn_next", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = e(R.prototype, "lbl_current_page", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = R))
          ) || w)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/KimCuongGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SoundManager.ts",
    "./CommonInfoPopup.ts",
    "./MiniGameNodeController.ts",
    "./KimCuongMessageHandler.ts",
    "./MiniPokerMessageHandler.ts",
    "./MiniGameNetworkHandler.ts",
    "./Define.ts",
    "./StringUtils.ts",
    "./BaseMiniGameView.ts",
    "./KimCuongBetHistoryView.ts",
    "./KimCuongBetRankView.ts",
    "./KimCuongLineSelectionView.ts",
    "./KimCuongNoHuView.ts",
    "./KimCuong_SlotMachineCmp.ts",
    "./KimCuong_SlotMachineItemView.ts",
    "./PersistManager.ts",
    "./SocketManager.ts",
    "./EventManager.ts",
    "./State.ts",
  ],
  function (t) {
    "use strict";
    var n,
      e,
      i,
      o,
      l,
      a,
      u,
      r,
      s,
      c,
      p,
      h,
      f,
      d,
      g,
      m,
      _,
      b,
      k,
      v,
      C,
      w,
      y,
      S,
      M,
      I,
      j,
      R,
      N,
      z,
      P,
      V,
      T,
      H,
      B,
      L,
      x,
      E,
      G,
      U,
      J;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (l = t.cclegacy),
            (a = t._decorator),
            (u = t.Label),
            (r = t.Button),
            (s = t.Node),
            (c = t.Sprite),
            (p = t.Toggle),
            (h = t.SpriteFrame),
            (f = t.sp),
            (d = t.AudioClip),
            (g = t.tween),
            (m = t.Tween),
            (_ = t.UIOpacity),
            (b = t.UITransform),
            (k = t.Vec3);
        },
        function (t) {
          v = t.SoundManager;
        },
        function (t) {
          C = t.CommonInfoPopup;
        },
        function (t) {
          w = t.default;
        },
        function (t) {
          y = t.default;
        },
        function (t) {
          S = t.MiniPoker_Message;
        },
        function (t) {
          M = t.MiniGameNetworkHandler;
        },
        function (t) {
          I = t.GameID;
        },
        function (t) {
          j = t.StringUtils;
        },
        function (t) {
          R = t.default;
        },
        function (t) {
          N = t.default;
        },
        function (t) {
          z = t.default;
        },
        function (t) {
          P = t.default;
        },
        function (t) {
          V = t.default;
        },
        function (t) {
          T = t.default;
        },
        function (t) {
          H = t.KimCuongItem;
        },
        function (t) {
          B = t.PersistManager;
        },
        function (t) {
          (L = t.socketManager), (x = t.MessageRequest);
        },
        function (t) {
          (E = t.eventManager), (G = t.EventKey);
        },
        function (t) {
          (U = t.state), (J = t.NetworkState);
        },
      ],
      execute: function () {
        var A,
          K,
          O,
          q,
          D,
          F,
          Z,
          Q,
          W,
          Y,
          X,
          $,
          tt,
          nt,
          et,
          it,
          ot,
          lt,
          at,
          ut,
          rt,
          st,
          ct,
          pt,
          ht,
          ft,
          dt,
          gt,
          mt,
          _t,
          bt,
          kt,
          vt,
          Ct,
          wt,
          yt,
          St,
          Mt,
          It,
          jt,
          Rt,
          Nt,
          zt,
          Pt,
          Vt,
          Tt,
          Ht,
          Bt,
          Lt,
          xt;
        l._RF.push({}, "105b5U1AshNabC9YLOR+TRc", "KimCuongGameView", void 0);
        var Et = a.ccclass,
          Gt = a.property,
          Ut = function () {
            (this.aid = 0), (this.jackpot = 0), (this.bet = 0);
          };
        t(
          "default",
          ((A = Et("KimCuongGameView")),
          (K = Gt(u)),
          (O = Gt(N)),
          (q = Gt(z)),
          (D = Gt([r])),
          (F = Gt(r)),
          (Z = Gt(r)),
          (Q = Gt(r)),
          (W = Gt(r)),
          (Y = Gt(r)),
          (X = Gt(s)),
          ($ = Gt(c)),
          (tt = Gt(u)),
          (nt = Gt(T)),
          (et = Gt(p)),
          (it = Gt(p)),
          (ot = Gt(V)),
          (lt = Gt(P)),
          (at = Gt(u)),
          (ut = Gt([h])),
          (rt = Gt([h])),
          (st = Gt([f.SkeletonData])),
          (ct = Gt(d)),
          (pt = Gt(C)),
          A(
            (((xt = (function (t) {
              function n() {
                for (
                  var n, e = arguments.length, l = new Array(e), a = 0;
                  a < e;
                  a++
                )
                  l[a] = arguments[a];
                return (
                  (n = t.call.apply(t, [this].concat(l)) || this),
                  i(n, "lblJackpot", dt, o(n)),
                  i(n, "kimCuongBetHistoryView", gt, o(n)),
                  i(n, "kimCuongBetRankView", mt, o(n)),
                  i(n, "btn_chips", _t, o(n)),
                  (n.chip_values = [100, 1e3, 5e3, 1e4]),
                  i(n, "btn_rank", bt, o(n)),
                  i(n, "btn_bet_history", kt, o(n)),
                  i(n, "btn_help", vt, o(n)),
                  i(n, "btn_spin", Ct, o(n)),
                  i(n, "btn_line", wt, o(n)),
                  i(n, "result_node", yt, o(n)),
                  i(n, "result_bg", St, o(n)),
                  i(n, "lbl_result_amount", Mt, o(n)),
                  i(n, "kimCuong_SlotMachineCmp", It, o(n)),
                  i(n, "tog_auto", jt, o(n)),
                  i(n, "tog_fast", Rt, o(n)),
                  i(n, "kimCuongNoHuView", Nt, o(n)),
                  i(n, "kimCuongLineSelectionView", zt, o(n)),
                  i(n, "line_num_text", Pt, o(n)),
                  i(n, "loaded_item_normal", Vt, o(n)),
                  i(n, "loaded_item_blur", Tt, o(n)),
                  i(n, "loaded_anim_item", Ht, o(n)),
                  i(n, "win_sfx", Bt, o(n)),
                  i(n, "commonInfoPopup", Lt, o(n)),
                  (n.bet = 0),
                  (n._jackpotInfos = []),
                  (n.jackpot_amount = 0),
                  (n.jackpot_tween = null),
                  (n.symbols = []),
                  (n.rewards = []),
                  (n.lineArr = [
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    17, 18, 19,
                  ]),
                  (n.moneyExchange = 0),
                  (n.wonJackpot = !1),
                  (n._aid = 1),
                  (n.isHasResult = !0),
                  n
                );
              }
              e(n, t);
              var l = n.prototype;
              return (
                (l.isSpinning = function () {
                  var t;
                  return null == (t = this.kimCuong_SlotMachineCmp)
                    ? void 0
                    : t.isSpinning();
                }),
                (l.forceMachineStop = function (t) {
                  var n;
                  void 0 === t && (t = !0),
                    null != (n = this.tog_auto) &&
                      n.isChecked &&
                      t &&
                      (this.tog_auto.isChecked = !1),
                    this.stop([]);
                }),
                (l.turnOffAutoSpin = function () {
                  this.tog_auto && (this.tog_auto.isChecked = !1);
                }),
                (l.isFastSpin = function () {
                  var t;
                  return null == (t = this.tog_fast) ? void 0 : t.isChecked;
                }),
                (l.onLoad = function () {
                  var e,
                    i,
                    o,
                    l,
                    a,
                    u,
                    r,
                    s = this;
                  t.prototype.onLoad.call(this),
                    (n.instance = this),
                    (y.onResultError = function (t) {
                      B.showNoti(t, s.node, I.TRUNGPS), s.forceMachineStop();
                    }),
                    this.result_node && (this.result_node.active = !1),
                    (this.bet = this.chip_values[0]),
                    this.init(),
                    null == (e = this.btn_spin) ||
                      e.node.on("click", function () {
                        var t;
                        null != (t = s.kimCuong_SlotMachineCmp) && t.isStopped()
                          ? s.spin()
                          : B.showNoti("Đang Quay", s.node, I.TRUNGPS);
                      }),
                    E.on(G.MiniLogged, this, function () {
                      s.IsRespin() ? s.requestSpin() : s.forceMachineStop();
                    }),
                    null == (i = this.btn_rank) ||
                      i.node.on("click", function () {
                        s.showRank();
                      }),
                    null == (o = this.btn_line) ||
                      o.node.on("click", function () {
                        var t;
                        null == (t = s.kimCuongLineSelectionView) || t.show();
                      }),
                    null == (l = this.btn_bet_history) ||
                      l.node.on("click", function () {
                        s.showBetHistory();
                      }),
                    null == (a = this.btn_help) ||
                      a.node.on("click", function () {
                        var t;
                        null == (t = s.commonInfoPopup) ||
                          t.showInfo(I.TRUNGPS);
                      }),
                    this.btn_chips.forEach(function (t, n) {
                      var e = n;
                      t.node.on("click", function () {
                        var t, n;
                        null == (t = s.kimCuong_SlotMachineCmp) ||
                        !t.isStopped() ||
                        (null != (n = s.tog_auto) && n.isChecked)
                          ? B.showNoti("Đang Quay", s.node, I.TRUNGPS)
                          : (s.highlightBet(e),
                            (s.bet = s.chip_values[e]),
                            s.subscribeJackpot());
                      });
                    }),
                    null == (u = this.tog_auto) ||
                      u.node.on("toggle", function () {
                        var t, n;
                        null != (t = s.tog_auto) &&
                          t.isChecked &&
                          null != (n = s.kimCuong_SlotMachineCmp) &&
                          n.isStopped() &&
                          s.spin();
                      }),
                    this.kimCuong_SlotMachineCmp &&
                      (this.kimCuong_SlotMachineCmp.onMachineStopped =
                        function () {
                          var t = g(s.node).call(function () {
                            s.showResult(function () {
                              var t, n, e;
                              if (
                                null != (t = s.tog_auto) &&
                                t.isChecked &&
                                null != (n = s.kimCuong_SlotMachineCmp) &&
                                n.isStopped()
                              )
                                s.spin();
                              else if (
                                null != (e = s.kimCuong_SlotMachineCmp) &&
                                e.isStopped()
                              ) {
                                var i = s.rewards.map(function (t) {
                                  return t.lid;
                                });
                                s.kimCuong_SlotMachineCmp.showEachLines(i, 1);
                              }
                            });
                          });
                          (s.moneyExchange > 0
                            ? t
                            : g(s.node).sequence(
                                g().delay(0.5),
                                g().call(function () {
                                  var t, n;
                                  null != (t = s.tog_auto) &&
                                    t.isChecked &&
                                    null != (n = s.kimCuong_SlotMachineCmp) &&
                                    n.isStopped() &&
                                    s.spin();
                                })
                              )
                          ).start(),
                            L.sendRefreshMoney();
                        }),
                    null == (r = this.kimCuong_SlotMachineCmp) || r.init();
                }),
                (l.highlightBet = function (t) {
                  this.btn_chips.forEach(function (n, e) {
                    n.node.children[1].active = e == t;
                  });
                }),
                (l.showResult = function (t) {
                  var n,
                    e,
                    i,
                    o,
                    l,
                    a,
                    u,
                    r,
                    s,
                    c,
                    p,
                    h = this;
                  this.result_node && (this.result_node.active = !0);
                  var f = this.rewards.map(function (t) {
                      return t.lid;
                    }),
                    d = null != (n = this.tog_fast) && n.isChecked ? 0 : 0.7;
                  null == (e = this.kimCuong_SlotMachineCmp) ||
                    e.showLines(f, d, 0.3, function () {}),
                    m.stopAllByTarget(this.result_node || void 0);
                  var C =
                    null == (i = this.result_node) ? void 0 : i.getComponent(_);
                  m.stopAllByTarget(C || void 0),
                    this.lbl_result_amount &&
                      (this.lbl_result_amount.string =
                        "+" + j.formatNumber(this.moneyExchange));
                  var w =
                    null == (o = this.result_bg)
                      ? void 0
                      : o.node.getComponent(_);
                  w && (w.opacity = 0),
                    null == (l = this.result_bg) ||
                      l.scheduleOnce(function () {
                        var t,
                          n,
                          e,
                          i,
                          o =
                            null == (t = h.lbl_result_amount)
                              ? void 0
                              : t.node.getComponent(b),
                          l = Math.max(
                            ((null == o ? void 0 : o.width) || 0) + 100,
                            (null == (n = h.result_bg) ||
                            null == (e = n.spriteFrame)
                              ? void 0
                              : e.originalSize.width) || 0
                          ),
                          a =
                            null == (i = h.result_bg)
                              ? void 0
                              : i.node.getComponent(b);
                        a && (a.width = l || 0), w && (w.opacity = 255);
                      }, 0);
                  var y = g(this.result_node).sequence(
                      g().call(function () {
                        var t;
                        null == (t = h.kimCuongNoHuView) ||
                          t.show(h.moneyExchange);
                      }),
                      null != (a = this.tog_auto) && a.isChecked
                        ? g(this.result_node).sequence(
                            g().delay(14.5),
                            g().call(function () {
                              var t;
                              null == (t = h.kimCuongNoHuView) || t.hide();
                            })
                          )
                        : g(this.result_node).sequence(
                            g().delay(2.5),
                            g().call(function () {
                              var t;
                              null == (t = h.kimCuongNoHuView) ||
                                t.activeClick();
                            })
                          )
                    ),
                    S =
                      (null == (u = this.result_node) ? void 0 : u.position) ||
                      k.ZERO,
                    M = new k(S);
                  (M.y = -240),
                    null == (r = this.result_node) || r.setPosition(M);
                  var I = g(this.result_node).sequence(
                      g().call(function () {
                        var t;
                        h.IsOpened() &&
                          h.win_sfx &&
                          v.getInstance().playAdditionalSfx(h.win_sfx);
                        var n =
                          null == (t = h.result_node)
                            ? void 0
                            : t.getComponent(_);
                        n && (n.opacity = 255);
                      }),
                      g().by(
                        0.5,
                        { position: new k(0, 20, 0) },
                        { easing: "expoOut" }
                      ),
                      g().delay(
                        null != (s = this.tog_fast) && s.isChecked ? 0 : 1.5
                      )
                    ),
                    R = g(this.result_node).sequence(
                      g().delay(d),
                      this.wonJackpot ? y : I,
                      g().call(function () {
                        return null == t ? void 0 : t();
                      })
                    );
                  g(null == (c = this.result_node) ? void 0 : c.getComponent(_))
                    .sequence(
                      g().delay(d),
                      g().delay(
                        null != (p = this.tog_fast) && p.isChecked ? 0.5 : 2
                      ),
                      g().call(function () {
                        var t;
                        g(
                          null == (t = h.result_node)
                            ? void 0
                            : t.getComponent(_)
                        )
                          .to(0.3, { opacity: 1 })
                          .call(function () {
                            h.result_node && (h.result_node.active = !1);
                          })
                          .start();
                      })
                    )
                    .start(),
                    R.start();
                }),
                (n.getInstance = function () {
                  return n.instance;
                }),
                (l.showRank = function () {
                  var t;
                  null == (t = this.kimCuongBetRankView) || t.fetchRank();
                }),
                (l.spin = function () {
                  var t;
                  this.lineArr.length <= 0
                    ? B.showNoti("Vui lòng chọn dòng", this.node, I.TRUNGPS)
                    : (m.stopAllByTarget(this.node),
                      null == (t = this.kimCuong_SlotMachineCmp) || t.spin(),
                      this.requestSpin());
                }),
                (l.IsRespin = function () {
                  return (
                    !!this.node.active &&
                    !this.isHasResult &&
                    null != n.instance &&
                    U.socketState != J.Unlogged
                  );
                }),
                (l.requestSpin = function () {
                  var t = {};
                  (t.cmd = S.SPIN_RESULT),
                    (t.b = this.bet),
                    (t.aid = this._aid),
                    (t.ls = this.lineArr),
                    (t.gid = I.TRUNGPS);
                  var n = [
                    x.ZonePlugin_Type,
                    "MiniGame",
                    "slotMachinePlugin",
                    t,
                  ];
                  M.IsOpen()
                    ? ((this.isHasResult = !0), M.send(n))
                    : (this.isHasResult = !1);
                }),
                (l.stop = function (t) {
                  var n,
                    e = this;
                  null != (n = this.kimCuong_SlotMachineCmp) &&
                    n.isSpinning() &&
                    (0 == t.length &&
                      ((this.moneyExchange = 0), (this.rewards = [])),
                    g(this.node)
                      .sequence(
                        g().delay(T.TIME_TO_SHOW_RESULT),
                        g().call(function () {
                          var n, i, o;
                          null != (n = e.tog_fast) && n.isChecked
                            ? null == (i = e.kimCuong_SlotMachineCmp) ||
                              i.stopImmediately(t)
                            : null == (o = e.kimCuong_SlotMachineCmp) ||
                              o.stop(t);
                        })
                      )
                      .start());
                }),
                (l.showBetHistory = function () {
                  var t;
                  null == (t = this.kimCuongBetHistoryView) || t.fetchHistory();
                }),
                (l.setLines = function (t) {
                  (this.lineArr = t),
                    this.line_num_text &&
                      (this.line_num_text.string = t.length.toString());
                }),
                (l.receiveData = function (t, n, e, i) {
                  (this._aid = t),
                    (this.symbols = i.map(function (t) {
                      var n = new H();
                      return n.decodeItem(t), n;
                    })),
                    (this.rewards = e),
                    (this.moneyExchange = n),
                    (this.wonJackpot =
                      this.rewards.filter(function (t) {
                        return 1 == t;
                      }).length > 0),
                    this.stop(this.symbols);
                }),
                (l.subscribeJackpot = function (t) {
                  void 0 === t && (t = !0);
                  var n = S.SUBSCRIBE_JACKPOT;
                  t || (n = S.UNSUBSCRIBE_JACKPOT);
                  var e = {};
                  (e.cmd = n), (e.gid = I.TRUNGPS);
                  var i = [
                    x.ZonePlugin_Type,
                    "MiniGame",
                    "slotMachinePlugin",
                    e,
                  ];
                  M.send(i);
                }),
                (l.updateJackpot = function (t, n) {
                  void 0 === n && (n = !1), n && (this._jackpotInfos = []);
                  for (var e = 0; e < t.length; e++) {
                    var i = t[e],
                      o = i.J,
                      l = i.aid,
                      a = i.b;
                    if (n) {
                      var u = new Ut();
                      (u.jackpot = o || 0),
                        (u.aid = l || 0),
                        (u.bet = a || 0),
                        this._jackpotInfos.push(u);
                    } else
                      for (var r = 0; r < this._jackpotInfos.length; r++)
                        if (
                          this._jackpotInfos[r].aid == l &&
                          this._jackpotInfos[r].bet == a
                        ) {
                          this._jackpotInfos[r].jackpot = o || 0;
                          break;
                        }
                  }
                  if (n) {
                    for (var s = [], c = 0; c < this._jackpotInfos.length; c++)
                      if (1 == this._jackpotInfos[c].aid) {
                        var p = new Ut();
                        (p.jackpot = this._jackpotInfos[c].jackpot),
                          (p.aid = this._jackpotInfos[c].aid),
                          (p.bet = this._jackpotInfos[c].bet),
                          s.push(p);
                      }
                    for (var h = 0; h < this._jackpotInfos.length; h++)
                      if (2 == this._jackpotInfos[h].aid) {
                        var f = new Ut();
                        (f.jackpot = this._jackpotInfos[h].jackpot),
                          (f.aid = this._jackpotInfos[h].aid),
                          (f.bet = this._jackpotInfos[h].bet),
                          s.push(f);
                      }
                    for (var d = 1, g = 0; g < s.length - 1; g++) {
                      for (var m = g + 1; m < s.length; m++)
                        if (
                          s[g].aid == d &&
                          s[m].aid == d &&
                          s[m].bet < s[g].bet
                        ) {
                          var _ = s[g].bet,
                            b = s[g].jackpot;
                          (s[g].bet = s[m].bet),
                            (s[g].jackpot = s[m].jackpot),
                            (s[m].bet = _),
                            (s[m].jackpot = b),
                            (m = g + 1);
                        }
                      g == s.length - 2 && 1 == d && ((g = 0), (d = 2));
                    }
                    this._jackpotInfos = s;
                  }
                  this.updateJackpotLabels(!n);
                }),
                (l.updateJackpotLabels = function (t) {
                  for (var n = this, e = 0; e < this._jackpotInfos.length; e++)
                    if (
                      this._jackpotInfos[e].aid == this._aid &&
                      this._jackpotInfos[e].bet == this.bet
                    ) {
                      var i;
                      if ((null == (i = this.jackpot_tween) || i.stop(), t)) {
                        var o = { a: this.jackpot_amount };
                        (this.jackpot_tween = g(o)
                          .to(
                            0.5,
                            { a: this._jackpotInfos[e].jackpot },
                            {
                              progress: function (t, e, i, o) {
                                return (
                                  null != n.lblJackpot &&
                                    (n.lblJackpot.string = j.formatNumber(
                                      Math.floor(i)
                                    )),
                                  t + (e - t) * o
                                );
                              },
                            }
                          )
                          .start()),
                          (this.jackpot_amount = this._jackpotInfos[e].jackpot);
                      } else
                        (this.jackpot_amount = this._jackpotInfos[e].jackpot),
                          this.lblJackpot &&
                            (this.lblJackpot.string = j.formatNumber(
                              this.jackpot_amount
                            ));
                      break;
                    }
                }),
                (l.isCanDeactiveRoot = function () {
                  return !0; //!this.tog_auto?.isChecked;
                }),
                (l.show = function () {
                  var n,
                    e = this;
                  return (
                    y.subscribe(),
                    null == (n = w.getInstance()) ||
                      n.bringGameViewToTop(this, !0),
                    t.prototype.show.call(this, function () {
                      var t;
                      null == (t = e.kimCuong_SlotMachineCmp) ||
                        t.playFxWhenFirst();
                    }),
                    !0
                  );
                }),
                (l.hide = function () {
                  var n;
                  (this.isHasResult = !0),
                    null == (n = this.kimCuong_SlotMachineCmp) || n.clearLine(),
                    t.prototype.hide.call(this);
                }),
                (l.init = function () {
                  t.prototype.init.call(this),
                    t.prototype.hideImmediately.call(this);
                }),
                (l.IsLiveStreamOverlap = function (n) {
                  return !!t.prototype.IsLiveStreamOverlap.call(this, n);
                }),
                (l.onDestroy = function () {
                  n.instance = null;
                }),
                n
              );
            })(R)).instance = null),
            (dt = n((ft = xt).prototype, "lblJackpot", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (gt = n(ft.prototype, "kimCuongBetHistoryView", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (mt = n(ft.prototype, "kimCuongBetRankView", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_t = n(ft.prototype, "btn_chips", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (bt = n(ft.prototype, "btn_rank", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (kt = n(ft.prototype, "btn_bet_history", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (vt = n(ft.prototype, "btn_help", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ct = n(ft.prototype, "btn_spin", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (wt = n(ft.prototype, "btn_line", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (yt = n(ft.prototype, "result_node", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (St = n(ft.prototype, "result_bg", [$], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Mt = n(ft.prototype, "lbl_result_amount", [tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (It = n(ft.prototype, "kimCuong_SlotMachineCmp", [nt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (jt = n(ft.prototype, "tog_auto", [et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Rt = n(ft.prototype, "tog_fast", [it], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Nt = n(ft.prototype, "kimCuongNoHuView", [ot], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (zt = n(ft.prototype, "kimCuongLineSelectionView", [lt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pt = n(ft.prototype, "line_num_text", [at], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Vt = n(ft.prototype, "loaded_item_normal", [ut], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Tt = n(ft.prototype, "loaded_item_blur", [rt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Ht = n(ft.prototype, "loaded_anim_item", [st], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Bt = n(ft.prototype, "win_sfx", [ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Lt = n(ft.prototype, "commonInfoPopup", [pt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ht = ft))
          ) || ht)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/KimCuongHelpView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CommonPopup.ts"],
  function (e) {
    "use strict";
    var o, n, i, t;
    return {
      setters: [
        function (e) {
          o = e.inheritsLoose;
        },
        function (e) {
          (n = e.cclegacy), (i = e._decorator);
        },
        function (e) {
          t = e.CommonPopup;
        },
      ],
      execute: function () {
        var u;
        n._RF.push({}, "c430cdfZgNLyorGKaEZm1eo", "KimCuongHelpView", void 0);
        var c = i.ccclass;
        e(
          "KimCuongHelpView",
          c("KimCuongHelpView")(
            (u = (function (e) {
              function n() {
                return e.apply(this, arguments) || this;
              }
              return o(n, e), n;
            })(t))
          ) || u
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/KimCuongLineSelectionView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./KimCuongGameView.ts",
  ],
  function (n) {
    "use strict";
    var e, t, i, o, l, a, u, r, c, s, g;
    return {
      setters: [
        function (n) {
          (e = n.applyDecoratedDescriptor),
            (t = n.inheritsLoose),
            (i = n.initializerDefineProperty),
            (o = n.assertThisInitialized);
        },
        function (n) {
          (l = n.cclegacy),
            (a = n._decorator),
            (u = n.Node),
            (r = n.Toggle),
            (c = n.log);
        },
        function (n) {
          s = n.CommonPopup;
        },
        function (n) {
          g = n.default;
        },
      ],
      execute: function () {
        var h, f, _, b, p, d, m, y, C, w, v, L, k;
        l._RF.push(
          {},
          "00873bzi0BEMIg/Er6EtIol",
          "KimCuongLineSelectionView",
          void 0
        );
        var I = a.ccclass,
          V = a.property;
        n(
          "default",
          ((h = I("KimCuongLineSelectionView")),
          (f = V(u)),
          (_ = V(r)),
          (b = V(r)),
          (p = V(r)),
          (d = V(r)),
          h(
            ((C = e(
              (y = (function (n) {
                function e() {
                  for (
                    var e, t = arguments.length, l = new Array(t), a = 0;
                    a < t;
                    a++
                  )
                    l[a] = arguments[a];
                  return (
                    (e = n.call.apply(n, [this].concat(l)) || this),
                    i(e, "line_selection_node", C, o(e)),
                    i(e, "btn_chan", w, o(e)),
                    i(e, "btn_le", v, o(e)),
                    i(e, "btn_tatca", L, o(e)),
                    i(e, "btn_huy", k, o(e)),
                    (e.line_toggle = []),
                    e
                  );
                }
                t(e, n);
                var l = e.prototype;
                return (
                  (l.onLoad = function () {
                    var e,
                      t,
                      i,
                      o,
                      l,
                      a,
                      u = this;
                    n.prototype.onLoad.call(this),
                      this.line_toggle &&
                        (this.line_toggle =
                          (null == (e = this.line_selection_node)
                            ? void 0
                            : e.getComponentsInChildren(r)) || null),
                      this.btn_tatca && (this.btn_tatca.isChecked = !0),
                      null == (t = this.line_toggle) ||
                        t.forEach(function (n, e) {
                          n.node.on("toggle", function () {
                            u.updateLineInGameView();
                          }),
                            u.btn_chan && (u.btn_chan.isChecked = !1),
                            u.btn_le && (u.btn_le.isChecked = !1),
                            u.btn_tatca && (u.btn_tatca.isChecked = !1),
                            u.btn_huy && (u.btn_huy.isChecked = !1);
                        }),
                      null == (i = this.btn_chan) ||
                        i.node.on("toggle", function () {
                          var n;
                          null == (n = u.line_toggle) ||
                            n.forEach(function (n, e) {
                              n.isChecked = e % 2 == 0;
                            }),
                            u.updateLineInGameView();
                        }),
                      null == (o = this.btn_le) ||
                        o.node.on("toggle", function () {
                          var n;
                          null == (n = u.line_toggle) ||
                            n.forEach(function (n, e) {
                              n.isChecked = e % 2 != 0;
                            }),
                            u.updateLineInGameView();
                        }),
                      null == (l = this.btn_tatca) ||
                        l.node.on("toggle", function () {
                          var n;
                          null == (n = u.line_toggle) ||
                            n.forEach(function (n, e) {
                              n.isChecked = !1;
                            }),
                            u.updateLineInGameView();
                        }),
                      null == (a = this.btn_huy) ||
                        a.node.on("toggle", function () {
                          var n;
                          null == (n = u.line_toggle) ||
                            n.forEach(function (n, e) {
                              n.isChecked = !0;
                            }),
                            u.updateLineInGameView();
                        });
                  }),
                  (l.updateLineInGameView = function () {
                    var n,
                      e,
                      t = [];
                    null == (n = this.line_toggle) ||
                      n.forEach(function (n, e) {
                        n.isChecked || t.push(e);
                      }),
                      c(JSON.stringify(t)),
                      null == (e = g.getInstance()) || e.setLines(t);
                  }),
                  e
                );
              })(s)).prototype,
              "line_selection_node",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (w = e(y.prototype, "btn_chan", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = e(y.prototype, "btn_le", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(y.prototype, "btn_tatca", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = e(y.prototype, "btn_huy", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = y))
          ) || m)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/KimCuongMessageHandler.ts",
  [
    "cc",
    "./KimCuongGameView.ts",
    "./Define.ts",
    "./MiniGameNetworkHandler.ts",
    "./MiniPokerMessageHandler.ts",
    "./EventManager.ts",
    "./SocketManager.ts",
  ],
  function (e) {
    "use strict";
    var n, a, s, t, u, i, l, r, o, c;
    return {
      setters: [
        function (e) {
          (n = e.cclegacy), (a = e._decorator);
        },
        function (e) {
          s = e.default;
        },
        function (e) {
          t = e.GameID;
        },
        function (e) {
          u = e.MiniGameNetworkHandler;
        },
        function (e) {
          i = e.MiniPoker_Message;
        },
        function (e) {
          (l = e.eventManager), (r = e.subEventKey), (o = e.EventKey);
        },
        function (e) {
          c = e.MessageRequest;
        },
      ],
      execute: function () {
        var g, S;
        e("KimCuong_Message", void 0),
          n._RF.push(
            {},
            "afe40N13+tDCL+dCNYIiVYd",
            "KimCuongMessageHandler",
            void 0
          );
        var d,
          C = a.ccclass;
        !(function (e) {
          (e[(e.SPIN_RESULT = 1302)] = "SPIN_RESULT"),
            (e[(e.UPDATE_JACKPOT = 1304)] = "UPDATE_JACKPOT"),
            (e[(e.SUBSCRIBE_JACKPOT = 1300)] = "SUBSCRIBE_JACKPOT"),
            (e[(e.UNSUBSCRIBE_JACKPOT = 1301)] = "UNSUBSCRIBE_JACKPOT"),
            (e[(e.AUTO_SPIN = 1303)] = "AUTO_SPIN"),
            (e[(e.CANCEL_AUTO_SPIN = 1305)] = "CANCEL_AUTO_SPIN"),
            (e[(e.SPIN_FREE = 1308)] = "SPIN_FREE");
        })(d || (d = e("KimCuong_Message", {})));
        e(
          "default",
          C("KimCuongMessageHandler")(
            (((S = (function () {
              function e() {}
              return (
                (e.subscribe = function (e) {
                  void 0 === e && (e = !0);
                  var n = i.SUBSCRIBE_JACKPOT;
                  e || (n = i.UNSUBSCRIBE_JACKPOT);
                  var a = {};
                  (a.cmd = n), (a.gid = t.TRUNGPS);
                  var s = [
                    c.ZonePlugin_Type,
                    "MiniGame",
                    "slotMachinePlugin",
                    a,
                  ];
                  u.send(s);
                }),
                (e.handleMessage = function (n) {
                  var a = n[1],
                    u = a.cmd,
                    i = s.getInstance();
                  if (u == d.SPIN_RESULT) {
                    if (null != a.mgs && null != a.mgs) {
                      var c = a.mgs;
                      return void (
                        null == e.onResultError || e.onResultError(c)
                      );
                    }
                    var g = a.wls || [],
                      S = a.aid || 0,
                      C = a.mX || 0,
                      P = a.sbs || [];
                    null != i && null != i && i.receiveData(S, C, g, P);
                  } else if (u == d.UPDATE_JACKPOT) {
                    var _ = a.Js || [];
                    null != i && null != i && i.updateJackpot(_);
                    var v = [];
                    v.push(_[0].J || 0),
                      v.push(_[1].J || 0),
                      v.push(_[_.length > 3 ? 3 : 2].J || 0),
                      l.emit(r(o.JackpotUpdateGame, "%gameID", t.TRUNGPS), v);
                  } else if (u == d.SUBSCRIBE_JACKPOT) {
                    var E = a.Js;
                    a.as;
                    null != a.asb && null != a.abs && (a.asb, a.asaid),
                      null != i && null != i && i.updateJackpot(E || [], !0);
                    var U = [];
                    U.push((null == E ? void 0 : E[0].J) || 0),
                      U.push((null == E ? void 0 : E[1].J) || 0),
                      U.push(
                        (null == E ? void 0 : E[E.length > 3 ? 3 : 2].J) || 0
                      ),
                      l.emit(r(o.JackpotUpdateGame, "%gameID", t.TRUNGPS), U);
                  }
                }),
                e
              );
            })()).onResultError = function (e) {}),
            (g = S))
          ) || g
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/KimCuongNoHuView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SoundManager.ts",
    "./StringUtils.ts",
    "./BlinkCmp.ts",
    "./EventManager.ts",
  ],
  function (n) {
    "use strict";
    var t, i, e, o, l, a, r, u, s, c, h, f, d, p, g, v, _, b, y, m;
    return {
      setters: [
        function (n) {
          (t = n.applyDecoratedDescriptor),
            (i = n.inheritsLoose),
            (e = n.initializerDefineProperty),
            (o = n.assertThisInitialized);
        },
        function (n) {
          (l = n.cclegacy),
            (a = n._decorator),
            (r = n.Node),
            (u = n.Sprite),
            (s = n.Label),
            (c = n.AudioClip),
            (h = n.Tween),
            (f = n.Vec3),
            (d = n.UIOpacity),
            (p = n.tween),
            (g = n.Component);
        },
        function (n) {
          v = n.SoundManager;
        },
        function (n) {
          _ = n.StringUtils;
        },
        function (n) {
          b = n.default;
        },
        function (n) {
          (y = n.eventManager), (m = n.EventKey);
        },
      ],
      execute: function () {
        var w, F, k, x, B, M, H, C, z, A, N, S, T, q, E, L, V;
        l._RF.push({}, "5e426fc6mVOQqFA8Eqca/We", "KimCuongNoHuView", void 0);
        var K = a.ccclass,
          O = a.property;
        n(
          "default",
          ((w = K("KimCuongNoHuView")),
          (F = O(r)),
          (k = O(r)),
          (x = O(u)),
          (B = O(b)),
          (M = O(u)),
          (H = O(s)),
          (C = O(c)),
          w(
            ((N = t(
              (A = (function (n) {
                function t() {
                  for (
                    var t, i = arguments.length, l = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    l[a] = arguments[a];
                  return (
                    (t = n.call.apply(n, [this].concat(l)) || this),
                    e(t, "root", N, o(t)),
                    e(t, "black_screen", S, o(t)),
                    e(t, "noHuMoneyBg", T, o(t)),
                    e(t, "glow", q, o(t)),
                    e(t, "finishFx", E, o(t)),
                    e(t, "nohu_win_amount", L, o(t)),
                    e(t, "nohu_bgm", V, o(t)),
                    (t.win_amount_tween = null),
                    (t.activated_click = !1),
                    t
                  );
                }
                i(t, n);
                var l = t.prototype;
                return (
                  (l.onLoad = function () {
                    var n,
                      t = this;
                    null == (n = this.black_screen) ||
                      n.on("click", function () {
                        t.activated_click && t.hide();
                      });
                  }),
                  (l.activeClick = function () {
                    this.black_screen && (this.black_screen.active = !0),
                      (this.activated_click = !0);
                  }),
                  (l.show = function (n) {
                    var t,
                      i,
                      e,
                      o,
                      l,
                      a,
                      r,
                      u,
                      s,
                      c,
                      g = this;
                    this.nohu_bgm && v.getInstance().playBgm(this.nohu_bgm),
                      this.root && (this.root.active = !0),
                      this.black_screen && (this.black_screen.active = !0),
                      (this.activated_click = !1),
                      h.stopAllByTarget(
                        null == (t = this.noHuMoneyBg) ? void 0 : t.node
                      ),
                      h.stopAllByTarget(
                        null == (i = this.finishFx) ? void 0 : i.node
                      ),
                      h.stopAllByTarget(
                        null == (e = this.glow) ? void 0 : e.node
                      ),
                      null == (o = this.win_amount_tween) || o.stop(),
                      this.finishFx && (this.finishFx.node.active = !1),
                      this.finishFx &&
                        this.finishFx.node.setScale(new f(3, 3, 3));
                    var b =
                      null == (l = this.finishFx)
                        ? void 0
                        : l.node.getComponent(d);
                    b && (b.opacity = 255),
                      p(null == (a = this.finishFx) ? void 0 : a.node)
                        .sequence(
                          p().delay(0.4),
                          p().call(function () {
                            g.finishFx && (g.finishFx.node.active = !0);
                          }),
                          p().to(0.3, { scale: f.ONE })
                        )
                        .start();
                    var y =
                        (null == (r = this.noHuMoneyBg)
                          ? void 0
                          : r.node.position) || f.ZERO,
                      m = new f(y);
                    (m.y = -485),
                      null == (u = this.noHuMoneyBg) || u.node.setPosition(m),
                      p(null == (s = this.noHuMoneyBg) ? void 0 : s.node)
                        .sequence(
                          p().delay(0.6),
                          p().to(0.3, { position: new f(0, -260, 0) })
                        )
                        .start(),
                      null == (c = this.glow) || c.run();
                    this.win_amount_tween = p({ a: 0 })
                      .to(
                        2,
                        { a: n },
                        {
                          progress: function (n, t, i, e) {
                            return (
                              g.nohu_win_amount &&
                                (g.nohu_win_amount.string = _.formatNumber(
                                  Math.floor(i)
                                )),
                              n + (t - n) * e
                            );
                          },
                        }
                      )
                      .call(function () {
                        g.nohu_win_amount &&
                          (g.nohu_win_amount.string = _.formatNumber(
                            Math.floor(n)
                          ));
                      })
                      .start();
                    var w = this.node.getComponent(d);
                    w && (w.opacity = 255);
                  }),
                  (l.hide = function () {
                    var n,
                      t,
                      i,
                      e,
                      o,
                      l,
                      a = this;
                    this.black_screen && (this.black_screen.active = !1),
                      (this.activated_click = !1),
                      h.stopAllByTarget(
                        (null == (n = this.noHuMoneyBg) ? void 0 : n.node) ||
                          void 0
                      ),
                      h.stopAllByTarget(
                        (null == (t = this.finishFx) ? void 0 : t.node) ||
                          void 0
                      ),
                      null == (i = this.glow) || i.stop(),
                      p(null == (e = this.finishFx) ? void 0 : e.node)
                        .sequence(
                          p().to(0.3, { scale: new f(3, 3, 3) }),
                          p().call(function () {
                            a.finishFx && (a.finishFx.node.active = !1),
                              a.root && (a.root.active = !1),
                              y.emitLast(m.MusicPlay);
                          })
                        )
                        .start(),
                      p(
                        null == (o = this.finishFx)
                          ? void 0
                          : o.node.getComponent(d)
                      )
                        .to(0.3, { opacity: 1 })
                        .start(),
                      p(null == (l = this.noHuMoneyBg) ? void 0 : l.node)
                        .sequence(
                          p().call(function () {}),
                          p().to(0.3, { position: new f(0, -485, 0) })
                        )
                        .start();
                  }),
                  t
                );
              })(g)).prototype,
              "root",
              [F],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (S = t(A.prototype, "black_screen", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = t(A.prototype, "noHuMoneyBg", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = t(A.prototype, "glow", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = t(A.prototype, "finishFx", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = t(A.prototype, "nohu_win_amount", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = t(A.prototype, "nohu_bgm", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = A))
          ) || z)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LineSpriteComponent.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var n, t, r, o, i, l, a, u, c, p, s, f;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (i = e.cclegacy),
            (l = e._decorator),
            (a = e.Node),
            (u = e.UITransform),
            (c = e.Vec3),
            (p = e.instantiate),
            (s = e.Sprite),
            (f = e.Component);
        },
      ],
      execute: function () {
        var v, h, m, y, d, g, _;
        i._RF.push(
          {},
          "be4c4rrLphD4bJFNbuMUsMA",
          "LineSpriteComponent",
          void 0
        );
        var b = l.ccclass,
          C = l.property;
        e(
          "default",
          ((v = b("LineSpriteComponent")),
          (h = C(a)),
          (m = C(a)),
          v(
            ((g = n(
              (d = (function (e) {
                function n() {
                  for (
                    var n, t = arguments.length, i = new Array(t), l = 0;
                    l < t;
                    l++
                  )
                    i[l] = arguments[l];
                  return (
                    (n = e.call.apply(e, [this].concat(i)) || this),
                    r(n, "sample", g, o(n)),
                    r(n, "line_root", _, o(n)),
                    (n.root_parent = null),
                    n
                  );
                }
                t(n, e);
                var i = n.prototype;
                return (
                  (i.draw = function (e, n, t, r, o) {
                    var i,
                      l = this;
                    void 0 === r && (r = null),
                      void 0 === o && (o = !0),
                      (e =
                        null == (i = e)
                          ? void 0
                          : i.map(function (e) {
                              var n, t;
                              return null == (n = l.line_root) ||
                                null == (t = n.getComponent(u))
                                ? void 0
                                : t.convertToNodeSpaceAR(e || c.ZERO);
                            })),
                      (this.root_parent = r),
                      o && this.clear(),
                      e.forEach(function (r, o) {
                        if (o < e.length - 1) {
                          var i = r,
                            a = e[o + 1],
                            f = p(l.sample);
                          f &&
                            i &&
                            a &&
                            (f.position = new c(
                              i.x + (a.x - i.x) / 2,
                              i.y + (a.y - i.y) / 2,
                              0
                            )),
                            f && (f.parent = l.line_root);
                          var v = f && f.getComponent(s);
                          v && (v.color = t), f && (f.active = !0);
                          var h = (a && i && a.x - i.x) || 0,
                            m = (a && i && a.y - i.y) || 0,
                            y = new c(h, m, 0);
                          y = y.normalize();
                          var d = c.angle(y, c.RIGHT) * (180 / Math.PI);
                          (d *= a && i && a.y > i.y ? 1 : -1),
                            null == f || f.setRotationFromEuler(new c(0, 0, d));
                          var g = new c(h, m, 0),
                            _ = null == f ? void 0 : f.getComponent(u);
                          null == _ || _.setContentSize(g.length(), n);
                        }
                      });
                  }),
                  (i.clear = function () {
                    var e;
                    null == (e = this.line_root) ||
                      e.getComponentsInChildren(s).forEach(function (e) {
                        return e.node.destroy();
                      });
                  }),
                  n
                );
              })(f)).prototype,
              "sample",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (_ = n(d.prototype, "line_root", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = d))
          ) || y)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/mini",
  [
    "./CCMiniGameRoot.ts",
    "./CCButtonLoader.ts",
    "./CCComponentLoader.ts",
    "./CCSpriteFrameLoader.ts",
    "./Downloader.ts",
    "./BaseMiniGameView.ts",
    "./DragonBallBetHistoryDetail.ts",
    "./DragonBallBetHistoryView.ts",
    "./DragonBallBetRankView.ts",
    "./DragonBallGameView.ts",
    "./DragonBallHelpView.ts",
    "./DragonBall_SlotMachineCmp.ts",
    "./DragonBall_SlotMachineColumn.ts",
    "./DragonBall_SlotMachineItemView.ts",
    "./KimCuongBetHistoryDetail.ts",
    "./KimCuongBetHistoryItemView.ts",
    "./KimCuongBetHistoryView.ts",
    "./KimCuongBetRankItemView.ts",
    "./KimCuongBetRankView.ts",
    "./KimCuongGameView.ts",
    "./KimCuongHelpView.ts",
    "./KimCuongLineSelectionView.ts",
    "./KimCuongNoHuView.ts",
    "./KimCuong_SlotMachineCmp.ts",
    "./KimCuong_SlotMachineColumn.ts",
    "./KimCuong_SlotMachineItemView.ts",
    "./MiniPokerBetHistoryItemView.ts",
    "./MiniPokerBetHistoryView.ts",
    "./MiniPokerBetRankItemView.ts",
    "./MiniPokerBetRankView.ts",
    "./MiniPokerGameView.ts",
    "./MiniPokerInfoView.ts",
    "./MiniPokerNoHuView.ts",
    "./MiniPoker_SlotMachineCmp.ts",
    "./MiniPoker_SlotMachineColumn.ts",
    "./MiniPoker_SlotMachineItemView.ts",
    "./BatCmp.ts",
    "./ChatItemView.ts",
    "./TaiXiuBetRankView.ts",
    "./TaiXiuChatView.ts",
    "./TaiXiuGameView.ts",
    "./TaiXiuInfoView.ts",
    "./TaiXiuJackpotHistoryView.ts",
    "./TaiXiuJackpotRankItemView.ts",
    "./TaiXiuNoHuView.ts",
    "./TaiXiuPopupCmp.ts",
    "./TaiXiuQuickChatItem.ts",
    "./TaixiuJackpotHistoryItemView.ts",
    "./MiniTet_SlotMachineCmp.ts",
    "./MiniTet_SlotMachineColumn.ts",
    "./MiniTet_SlotMachineItemView.ts",
    "./TetGameView.ts",
    "./TrenDuoiBetHistoryItemView.ts",
    "./TrenDuoiBetHistoryView.ts",
    "./TrenDuoiBetRankItemView.ts",
    "./TrenDuoiBetRankView.ts",
    "./TrenDuoiGameView.ts",
    "./TrenDuoiNoHuView.ts",
    "./TrenDuoiResultItem.ts",
    "./TrenDuoi_SlotMachineCmp.ts",
    "./TrenDuoi_SlotMachineItemView.ts",
    "./WCGameView.ts",
    "./WCGameViewAlone.ts",
    "./WCGiftPopup.ts",
    "./WCInfo.ts",
    "./WCItemView.ts",
    "./MiniGameClose.ts",
    "./MiniGameNodeController.ts",
    "./MiniGamePopup.ts",
    "./DragonBallMessageHandler.ts",
    "./KimCuongMessageHandler.ts",
    "./MiniPokerMessageHandler.ts",
    "./TaiXiuMessageHandler.ts",
    "./TrenDuoiMessageHandler.ts",
    "./MiniGameGameNetworkReconnectHandler.ts",
    "./MiniGameNetworkHandler.ts",
    "./TaiXiuData.ts",
    "./UnitTest.ts",
    "./CCMiniGameCommonPopup.ts",
    "./DragView.ts",
    "./LineSpriteComponent.ts",
    "./MiniGameNodeDragView.ts",
    "./SpinButtonCmp.ts",
    "./TaiXiuBetHistoryItemView.ts",
    "./TaiXiuBetHistoryView.ts",
    "./TaiXiuBetRankItemView.ts",
    "./TaiXiuSessionAnalyticsItemView.ts",
    "./TaiXiuSessionAnalyticsView.ts",
    "./TaiXiuSessionHistoryDiceItemView.ts",
    "./TaiXiuSessionHistoryResultItemView.ts",
    "./TaiXiuSessionHistoryResultSumItemView.ts",
    "./TaiXiuSessionHistorySumItemView.ts",
    "./TaiXiuSessionHistoryView.ts",
  ],
  function () {
    "use strict";
    return {
      setters: [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
      ],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/MiniGameClose.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SoundButtonCmp.ts"],
  function (e) {
    "use strict";
    var n, i, t, o, r, l, u, a, c, s, _;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (l = e._decorator),
            (u = e.Node),
            (a = e.Label),
            (c = e.sp),
            (s = e.Component);
        },
        function (e) {
          _ = e.default;
        },
      ],
      execute: function () {
        var p, d, f, b, m, y, g, z, w, h, v, x, C, k, M, D, G;
        r._RF.push({}, "0f55bWlxslHYYj7fea5JzeV", "MiniGameClose", void 0);
        var L = l.ccclass,
          S = l.property;
        e(
          "default",
          ((p = L("MiniGameClose")),
          (d = S(_)),
          (f = S(u)),
          (b = S(u)),
          (m = S(a)),
          (y = S(u)),
          (g = S(u)),
          (z = S(c.Skeleton)),
          p(
            ((v = n(
              (h = (function (e) {
                function n() {
                  for (
                    var n, i = arguments.length, r = new Array(i), l = 0;
                    l < i;
                    l++
                  )
                    r[l] = arguments[l];
                  return (
                    (n = e.call.apply(e, [this].concat(r)) || this),
                    t(n, "btn_open_sound_cmp", v, o(n)),
                    t(n, "closed_node", x, o(n)),
                    t(n, "time_in_closed_node", C, o(n)),
                    t(n, "txt_time_in_closed_node", k, o(n)),
                    t(n, "tai_in_closed_node", M, o(n)),
                    t(n, "xiu_in_closed_node", D, o(n)),
                    t(n, "skel_icon", G, o(n)),
                    n
                  );
                }
                return i(n, e), n;
              })(s)).prototype,
              "btn_open_sound_cmp",
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (x = n(h.prototype, "closed_node", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = n(h.prototype, "time_in_closed_node", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = n(h.prototype, "txt_time_in_closed_node", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = n(h.prototype, "tai_in_closed_node", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = n(h.prototype, "xiu_in_closed_node", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = n(h.prototype, "skel_icon", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = h))
          ) || w)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniGameGameNetworkReconnectHandler.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CCMiniGameRoot.ts",
    "./MiniGameNetworkHandler.ts",
  ],
  function (n) {
    "use strict";
    var e, t, o, i, c, a, s, r, l, h, u;
    return {
      setters: [
        function (n) {
          e = n.inheritsLoose;
        },
        function (n) {
          (t = n.cclegacy),
            (o = n._decorator),
            (i = n.game),
            (c = n.Game),
            (a = n.log),
            (s = n.tween),
            (r = n.Tween),
            (l = n.Component);
        },
        function (n) {
          h = n.CCMiniGameRoot;
        },
        function (n) {
          u = n.MiniGameNetworkHandler;
        },
      ],
      execute: function () {
        var G, f;
        t._RF.push(
          {},
          "e9fb5dJ67pGlbB/YBFCqc2L",
          "MiniGameGameNetworkReconnectHandler",
          void 0
        );
        var m = o.ccclass;
        o.property,
          n(
            "MiniGameGameNetworkReconnectHandler",
            m("MiniGameGameNetworkReconnectHandler")(
              (((f = (function (n) {
                function t() {
                  for (
                    var e, t = arguments.length, o = new Array(t), i = 0;
                    i < t;
                    i++
                  )
                    o[i] = arguments[i];
                  return (
                    ((e =
                      n.call.apply(n, [this].concat(o)) || this).pingID = 0),
                    e
                  );
                }
                e(t, n),
                  (t.getInstance = function () {
                    return t.instance;
                  });
                var o = t.prototype;
                return (
                  (o.onLoad = function () {
                    (t.instance = this), this.registerGlobalGameEvent();
                  }),
                  (o.onDestroy = function () {
                    try {
                      (t.instance = null),
                        this.offGlobalGameEvent(),
                        this.stopCheckConnection();
                    } catch (n) {}
                  }),
                  (o.registerGlobalGameEvent = function () {
                    i.on(c.EVENT_HIDE, this.onHideGame, this),
                      i.on(c.EVENT_SHOW, this.onShowGame, this);
                  }),
                  (o.offGlobalGameEvent = function () {
                    i.off(c.EVENT_HIDE, this.onHideGame, this),
                      i.off(c.EVENT_SHOW, this.onShowGame, this);
                  }),
                  (o.onHideGame = function () {}),
                  (o.onShowGame = function () {
                    a("MiniGameGameNetworkReconnectHandler::onShowGame"),
                      this.checkConnection(this.pingID + 1, 0);
                  }),
                  (o.checkConnection = function (n, e) {
                    void 0 === e && (e = 5),
                      (this.pingID = n),
                      this.stopCheckConnection(),
                      s(this.node)
                        .repeat(
                          100,
                          s(this.node)
                            .delay(e)
                            .call(function () {
                              h.sendMiniGamePing(n);
                            })
                            .delay(3)
                            .call(function () {
                              u.reconnect();
                            })
                        )
                        .start();
                  }),
                  (o.stopCheckConnection = function () {
                    r.stopAllByTarget(this.node);
                  }),
                  (o.loggedOut = function () {
                    this.stopCheckConnection();
                  }),
                  t
                );
              })(l)).instance = null),
              (G = f))
            ) || G
          );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniGameNetworkHandler.ts",
  [
    "cc",
    "./CCMiniGameRoot.ts",
    "./MiniGameNodeController.ts",
    "./State.ts",
    "./Define.ts",
    "./SocketManager.ts",
    "./GameConfigManager.ts",
    "./PersistManager.ts",
    "./TrackingManager.ts",
    "./TrackingDefine.ts",
  ],
  function (e) {
    "use strict";
    var n, t, o, a, i, s, r, c, l, u, g, f, w, M;
    return {
      setters: [
        function (e) {
          (n = e.cclegacy), (t = e.log), (o = e.sys), (a = e.url);
        },
        function (e) {
          i = e.CCMiniGameRoot;
        },
        function (e) {
          s = e.default;
        },
        function (e) {
          (r = e.state), (c = e.NetworkState);
        },
        function (e) {
          l = e.StorageKey;
        },
        function (n) {
          u = n.MessageRequest;
          var t = {};
          (t.MessageRequest = n.MessageRequest),
            (t.MessageResponse = n.MessageResponse),
            e(t);
        },
        function (e) {
          g = e.GameConfigManager;
        },
        function (e) {
          f = e.PersistManager;
        },
        function (e) {
          w = e.tracking;
        },
        function (e) {
          M = e.TRACKING_ACTION_TYPE;
        },
      ],
      execute: function () {
        n._RF.push(
          {},
          "2862aCyENxJ44uCiSPt6RvZ",
          "MiniGameNetworkHandler",
          void 0
        );
        var d = e(
          "MiniGameNetworkHandler",
          (function () {
            function e() {}
            return (
              (e.IsNewSocket = function () {
                return null == e.ws || e.ws.readyState !== WebSocket.OPEN;
              }),
              (e.IsOpen = function () {
                return null !== e.ws && e.ws.readyState === WebSocket.OPEN;
              }),
              (e.init = function (n) {
                t(
                  "MiniGameNetworkHandler::Connecting to mini game server:" + n
                ),
                  w.sendTracking(M.START_CONNECT_WS_MINI),
                  null != e.ws && e.close();
                try {
                  o.Platform.ANDROID === o.platform
                    ? (e.ws = new WebSocket(
                        n,
                        null,
                        a.raw("resources/cacert.pem")
                      ))
                    : (e.ws = new WebSocket(n));
                } catch (e) {
                  t("MiniGameNetworkHandler::exception", e);
                }
                var r = e.ws;
                r &&
                  (r.onopen = function (o) {
                    var a;
                    t(
                      "MiniGameNetworkHandler::Connected to mini game server " +
                        n +
                        "," +
                        this.readyState
                    ),
                      null == (a = i.getInstance()) || a.openMiniGameNode2(),
                      e.login(),
                      (e.CLOSE_BY_MANUAL = !1);
                  }),
                  r &&
                    (r.onmessage = function (e) {
                      s.handleMiniGameMessage(e.data);
                    }),
                  e.ws &&
                    (e.ws.onerror = function (e) {
                      var n;
                      t("MiniGameNetworkHandler::Send Text fired an error:", e),
                        null == (n = s.getInstance()) ||
                          n.forceAllMachineStop();
                    }),
                  e.ws &&
                    (e.ws.onclose = function (e) {
                      t("MiniGameNetworkHandler::WebSocket instance closed. 1");
                    });
              }),
              (e.login = function () {
                var n = r.username,
                  o = r.password,
                  a = r.loginInfo,
                  i = r.signature,
                  s = {};
                (s.info = a), (s.signature = i), t(a, i);
                var c = [u.LogIn_Type, "MiniGame", n, o, s];
                e.send(c);
              }),
              (e.reconnect = function () {
                r.socketState != c.Unlogged &&
                  (f.getInstance().showLoading(),
                  "true" == localStorage.getItem(l.isLastLoginSucceed) &&
                    (t("MiniGameNetworkHandler::reconnect"),
                    e.init(g.MiniWSURL)));
              }),
              (e.send = function (n) {
                var t;
                if (
                  null != n &&
                  null != n &&
                  (null == (t = e.ws) ? void 0 : t.readyState) ===
                    WebSocket.OPEN
                )
                  try {
                    var o;
                    null == (o = e.ws) || o.send(JSON.stringify(n));
                  } catch (e) {}
              }),
              (e.close = function () {
                var n;
                (e.CLOSE_BY_MANUAL = !0), null == (n = e.ws) || n.close();
                var t = e.ws;
                t && (t.onopen = null),
                  t && (t.onmessage = null),
                  t && (t.onerror = null),
                  t && (t.onclose = null),
                  (e.ws = null);
              }),
              e
            );
          })()
        );
        (d.ws = null), (d.CLOSE_BY_MANUAL = !1), n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniGameNodeController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GamePlatformManager.ts",
    "./MiniGamePopup.ts",
    "./CCMiniGameRoot.ts",
    "./DragonBallGameView.ts",
    "./KimCuongGameView.ts",
    "./MiniPokerGameView.ts",
    "./TaiXiuGameView.ts",
    "./TetGameView.ts",
    "./TrenDuoiGameView.ts",
    "./WCGameView.ts",
    "./BigLoadingView.ts",
    "./DragonBallMessageHandler.ts",
    "./KimCuongMessageHandler.ts",
    "./MiniPokerMessageHandler.ts",
    "./TaiXiuMessageHandler.ts",
    "./TrenDuoiMessageHandler.ts",
    "./MiniGameNetworkHandler.ts",
    "./Define.ts",
    "./MiniGameNodeDragView.ts",
    "./BundleUpdateOnNative.ts",
    "./SocketManager.ts",
    "./State.ts",
    "./PersistManager.ts",
    "./EventManager.ts",
    "./BundleManager.ts",
    "./MiniGameGameNetworkReconnectHandler.ts",
    "./MiniGameClose.ts",
    "./TrackingManager.ts",
    "./TrackingDefine.ts",
  ],
  function (e) {
    "use strict";
    var n,
      t,
      i,
      o,
      s,
      l,
      a,
      r,
      _,
      d,
      u,
      c,
      h,
      p,
      g,
      m,
      b,
      v,
      I,
      f,
      S,
      E,
      w,
      k,
      N,
      T,
      G,
      C,
      P,
      A,
      O,
      M,
      y,
      H,
      x,
      R,
      D,
      B,
      W,
      z,
      Z,
      L,
      U,
      V,
      X,
      F,
      K,
      J,
      Y,
      j,
      q,
      Q,
      $,
      ee,
      ne,
      te,
      ie,
      oe,
      se,
      le,
      ae,
      re;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized),
            (s = e.createClass),
            (l = e.asyncToGenerator),
            (a = e.regeneratorRuntime);
        },
        function (e) {
          (r = e.cclegacy),
            (_ = e._decorator),
            (d = e.Node),
            (u = e.Button),
            (c = e.Label),
            (h = e.Prefab),
            (p = e.ProgressBar),
            (g = e.sp),
            (m = e.log),
            (b = e.tween),
            (v = e.UITransform),
            (I = e.sys),
            (f = e.view),
            (S = e.Vec3),
            (E = e.Tween),
            (w = e.Component),
            (k = e.instantiate),
            (N = e.native),
            (T = e.assetManager);
        },
        function (e) {
          G = e.GamePlatformManager;
        },
        function (e) {
          C = e.MiniGamePopup;
        },
        function (e) {
          P = e.CCMiniGameRoot;
        },
        function (e) {
          A = e.default;
        },
        function (e) {
          O = e.default;
        },
        function (e) {
          M = e.default;
        },
        function (e) {
          y = e.TaiXiuGameView;
        },
        function (e) {
          H = e.default;
        },
        function (e) {
          x = e.default;
        },
        function (e) {
          R = e.default;
        },
        function (e) {
          D = e.BigLoadingView;
        },
        function (e) {
          B = e.default;
        },
        function (e) {
          W = e.default;
        },
        function (e) {
          z = e.default;
        },
        function (e) {
          Z = e.TaiXiuMessageHandler;
        },
        function (e) {
          L = e.default;
        },
        function (e) {
          U = e.MiniGameNetworkHandler;
        },
        function (e) {
          (V = e.Bundle), (X = e.GameID), (F = e.getBundleInfo);
        },
        function (e) {
          K = e.default;
        },
        function (e) {
          J = e.BundleUpdateOnNative;
        },
        function (e) {
          (Y = e.MessageResponse),
            (j = e.GLOBAL_MESSAGE),
            (q = e.socketManager);
        },
        function (e) {
          (Q = e.state), ($ = e.NetworkState);
        },
        function (e) {
          ee = e.PersistManager;
        },
        function (e) {
          (ne = e.eventManager), (te = e.EventKey), (ie = e.subEventKey);
        },
        function (e) {
          oe = e.bundleManager;
        },
        function (e) {
          se = e.MiniGameGameNetworkReconnectHandler;
        },
        function (e) {
          le = e.default;
        },
        function (e) {
          ae = e.tracking;
        },
        function (e) {
          re = e.TRACKING_ACTION_TYPE;
        },
      ],
      execute: function () {
        var _e,
          de,
          ue,
          ce,
          he,
          pe,
          ge,
          me,
          be,
          ve,
          Ie,
          fe,
          Se,
          Ee,
          we,
          ke,
          Ne,
          Te,
          Ge,
          Ce,
          Pe,
          Ae,
          Oe,
          Me,
          ye,
          He,
          xe,
          Re,
          De,
          Be,
          We,
          ze,
          Ze,
          Le,
          Ue,
          Ve,
          Xe,
          Fe,
          Ke,
          Je,
          Ye,
          je,
          qe,
          Qe,
          $e,
          en,
          nn,
          tn,
          on,
          sn,
          ln,
          an,
          rn,
          _n,
          dn,
          un,
          cn,
          hn,
          pn,
          gn,
          mn,
          bn,
          vn,
          In,
          fn,
          Sn,
          En,
          wn,
          kn,
          Nn,
          Tn,
          Gn,
          Cn,
          Pn,
          An,
          On,
          Mn,
          yn;
        e("DOWNLOAD_STATE", void 0),
          r._RF.push(
            {},
            "0e1849VDNhBQormv1Bt2frU",
            "MiniGameNodeController",
            void 0
          );
        var Hn,
          xn = _.ccclass,
          Rn = _.property;
        !(function (e) {
          (e[(e.UNDOWNLOADED = 0)] = "UNDOWNLOADED"),
            (e[(e.DOWNLOADING = 1)] = "DOWNLOADING"),
            (e[(e.DOWNLOADED = 2)] = "DOWNLOADED"),
            (e[(e.CACHED = 3)] = "CACHED");
        })(Hn || (Hn = e("DOWNLOAD_STATE", {})));
        e(
          "default",
          ((_e = xn("MiniGameNodeController")),
          (de = Rn(d)),
          (ue = Rn(u)),
          (ce = Rn(C)),
          (he = Rn(d)),
          (pe = Rn(c)),
          (ge = Rn(d)),
          (me = Rn(d)),
          (be = Rn(d)),
          (ve = Rn(h)),
          (Ie = Rn(h)),
          (fe = Rn(h)),
          (Se = Rn(h)),
          (Ee = Rn(h)),
          (we = Rn(d)),
          (ke = Rn(d)),
          (Ne = Rn(d)),
          (Te = Rn(d)),
          (Ge = Rn(d)),
          (Ce = Rn(c)),
          (Pe = Rn(c)),
          (Ae = Rn(c)),
          (Oe = Rn(c)),
          (Me = Rn(c)),
          (ye = Rn(p)),
          (He = Rn(p)),
          (xe = Rn(p)),
          (Re = Rn(p)),
          (De = Rn(p)),
          (Be = Rn(u)),
          (We = Rn(u)),
          (ze = Rn(u)),
          (Ze = Rn(u)),
          (Le = Rn(u)),
          (Ue = Rn(u)),
          (Ve = Rn(d)),
          (Xe = Rn(g.SkeletonData)),
          (Fe = Rn(J)),
          _e(
            (((yn = (function (e) {
              function n() {
                for (
                  var n, t = arguments.length, s = new Array(t), l = 0;
                  l < t;
                  l++
                )
                  s[l] = arguments[l];
                return (
                  (n = e.call.apply(e, [this].concat(s)) || this),
                  i(n, "miniGameCloseNode", Ye, o(n)),
                  (n.miniGameClose = null),
                  i(n, "btn_close", je, o(n)),
                  i(n, "opened_node", qe, o(n)),
                  i(n, "time_in_opened_node", Qe, o(n)),
                  i(n, "txt_time_in_opened_node", $e, o(n)),
                  i(n, "tai_in_opened_node", en, o(n)),
                  i(n, "xiu_in_opened_node", nn, o(n)),
                  i(n, "taixiu_node", tn, o(n)),
                  i(n, "prefab_mnpk", on, o(n)),
                  i(n, "prefab_manslot", sn, o(n)),
                  i(n, "prefab_tet", ln, o(n)),
                  i(n, "prefab_caothap", an, o(n)),
                  i(n, "prefab_db", rn, o(n)),
                  i(n, "mnpk_progress_node", _n, o(n)),
                  i(n, "manslot_progress_node", dn, o(n)),
                  i(n, "caothap_progress_node", un, o(n)),
                  i(n, "pokemon_progress_node", cn, o(n)),
                  i(n, "tet_progress_node", hn, o(n)),
                  i(n, "lbl_mnpk_progress", pn, o(n)),
                  i(n, "lbl_manslot_progress", gn, o(n)),
                  i(n, "lbl_caothap_progress", mn, o(n)),
                  i(n, "lbl_pokemon_progress", bn, o(n)),
                  i(n, "lbl_tet_progress", vn, o(n)),
                  i(n, "proBar_mnpk_progress", In, o(n)),
                  i(n, "proBar_manslot_progress", fn, o(n)),
                  i(n, "proBar_caothap_progress", Sn, o(n)),
                  i(n, "proBar_pokemon_progress", En, o(n)),
                  i(n, "proBar_tet_progress", wn, o(n)),
                  i(n, "btn_game_tai_xiu", kn, o(n)),
                  i(n, "btn_game_tet", Nn, o(n)),
                  i(n, "btn_game_mini_poker", Tn, o(n)),
                  i(n, "btn_game_kimcuong", Gn, o(n)),
                  i(n, "btn_game_caothap", Cn, o(n)),
                  i(n, "btn_game_db", Pn, o(n)),
                  i(n, "mini_game_node", An, o(n)),
                  i(n, "miniCloseData", On, o(n)),
                  i(n, "bundleUpdateOnNative", Mn, o(n)),
                  (n.onMiniGameReceivedMsgCb = null),
                  (n.mini_game_view_stack = []),
                  (n.time_in_closed_node_origin_pos = null),
                  (n.result_in_closed_node_origin_pos = null),
                  (n.progressTargets = [5]),
                  (n.uiTransform = null),
                  (n.isPortraitGame = !1),
                  n
                );
              }
              t(n, e);
              var r = n.prototype;
              return (
                (r.lazyCb = function () {
                  this.btn_close,
                    this.opened_node,
                    this.time_in_opened_node,
                    this.txt_time_in_opened_node,
                    this.tai_in_opened_node,
                    this.xiu_in_opened_node,
                    this.mnpk_progress_node,
                    this.manslot_progress_node,
                    this.caothap_progress_node,
                    this.pokemon_progress_node,
                    this.lbl_mnpk_progress,
                    this.lbl_manslot_progress,
                    this.lbl_caothap_progress,
                    this.lbl_pokemon_progress,
                    this.proBar_mnpk_progress,
                    this.proBar_manslot_progress,
                    this.proBar_caothap_progress,
                    this.proBar_pokemon_progress,
                    this.btn_game_tai_xiu,
                    this.btn_game_mini_poker,
                    this.btn_game_kimcuong,
                    this.btn_game_caothap,
                    this.btn_game_db;
                }),
                (n.showMessage = function (e, n, t, i) {
                  this.portrait &&
                    ("Số dư của bạn không khả dụng để đặt cược" === e
                      ? (e = "Số dư không đủ để đặt")
                      : "Bạn đã đặt Tài thì không được đặt Xỉu" === e
                      ? (e = "Đặt Tài thì không đặt Xỉu")
                      : "Bạn đã đặt Xỉu thì không được đặt Tài" === e &&
                        (e = "Đặt Xỉu thì không đặt Tài")),
                    ee.showNoti(e, n, t, i);
                }),
                (r.releasedAssetBundle = function (e) {
                  switch (e) {
                    case V.slot_mnpk.name:
                      var n,
                        t =
                          null == (n = this.mini_game_node)
                            ? void 0
                            : n.getComponentInChildren(M);
                      t &&
                        (t.hideImmediately(),
                        t.destroy(),
                        (this.prefab_mnpk = null),
                        m("releasedAssetBundle:", e));
                      break;
                    case V.slot_man.name:
                      var i,
                        o =
                          null == (i = this.mini_game_node)
                            ? void 0
                            : i.getComponentInChildren(O);
                      o &&
                        (o.hideImmediately(),
                        o.destroy(),
                        (this.prefab_manslot = null),
                        m("releasedAssetBundle:", e));
                      break;
                    case V.trenduoi.name:
                      var s,
                        l =
                          null == (s = this.mini_game_node)
                            ? void 0
                            : s.getComponentInChildren(x);
                      l &&
                        (l.hideImmediately(),
                        l.destroy(),
                        (this.prefab_caothap = null),
                        m("releasedAssetBundle:", e));
                      break;
                    case V.dragonball.name:
                      var a,
                        r =
                          null == (a = this.mini_game_node)
                            ? void 0
                            : a.getComponentInChildren(A);
                      r &&
                        (r.hideImmediately(),
                        r.destroy(),
                        (this.prefab_db = null),
                        m("releasedAssetBundle:", e));
                  }
                }),
                (r.showMiniGame = (function () {
                  var e = l(
                    a().mark(function e(t) {
                      var i,
                        o,
                        s,
                        l,
                        r,
                        _,
                        d,
                        u,
                        c,
                        p,
                        g,
                        b,
                        v,
                        f,
                        S,
                        E,
                        w,
                        G,
                        C = this;
                      return a().wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (Q.socketState != $.Unlogged) {
                                  e.next = 3;
                                  break;
                                }
                                return (
                                  Q.isRefreshingInBackground ||
                                    ee.getInstance().showLoginPopup(),
                                  e.abrupt("return")
                                );
                              case 3:
                                (e.t0 = t),
                                  (e.next =
                                    e.t0 === X.TAIXIU
                                      ? 6
                                      : e.t0 === X.MINIPOKER
                                      ? 10
                                      : e.t0 === X.TRUNGPS
                                      ? 22
                                      : e.t0 === X.TET
                                      ? 34
                                      : e.t0 === X.CAOTHAP
                                      ? 36
                                      : e.t0 === X.DRAGONBALL
                                      ? 48
                                      : 60);
                                break;
                              case 6:
                                return (
                                  (o =
                                    null == (i = this.taixiu_node)
                                      ? void 0
                                      : i.getComponent(y)),
                                  (null == o ? void 0 : o.show()) &&
                                    this.close(),
                                  e.abrupt("break", 60)
                                );
                              case 10:
                                if (null != this.prefab_mnpk) {
                                  e.next = 17;
                                  break;
                                }
                                return (
                                  (Q.isLoadingMiniGame = !0),
                                  (e.next = 14),
                                  oe
                                    .loadPrefab({
                                      bundle: V.slot_mnpk,
                                      prefab:
                                        "prefab_minipoker" +
                                        (n.portrait ? "_portrait" : ""),
                                      emitProgress: ie(
                                        te.GameUpdateProgress,
                                        "%gameID",
                                        t
                                      ),
                                      onProgress: function (e) {
                                        var i;
                                        null == (i = n.getInstance()) ||
                                          i.updateProgress(t, e),
                                          m("LobbyAssetBundleHelper:" + e);
                                      },
                                    })
                                    .then(function (e) {
                                      m(
                                        "LobbyAssetBundleHelper completed:" + e
                                      ),
                                        e &&
                                          ((C.prefab_mnpk = e),
                                          C.showMiniGame(t));
                                    })
                                );
                              case 14:
                                (Q.isLoadingMiniGame = !1), (e.next = 21);
                                break;
                              case 17:
                                null == (l = M.getInstance()) &&
                                  (((r =
                                    this.prefab_mnpk &&
                                    k(this.prefab_mnpk)).parent =
                                    this.mini_game_node),
                                  (l = r.getComponent(M))),
                                  (null == (s = l) ? void 0 : s.show()) &&
                                    this.close();
                              case 21:
                                return e.abrupt("break", 60);
                              case 22:
                                if (null != this.prefab_manslot) {
                                  e.next = 29;
                                  break;
                                }
                                return (
                                  (Q.isLoadingMiniGame = !0),
                                  (e.next = 26),
                                  oe
                                    .loadPrefab({
                                      bundle: V.slot_man,
                                      prefab:
                                        "prefab_man" +
                                        (n.portrait ? "_portrait" : ""),
                                      emitProgress: ie(
                                        te.GameUpdateProgress,
                                        "%gameID",
                                        t
                                      ),
                                      onProgress: function (e) {
                                        var i;
                                        null == (i = n.getInstance()) ||
                                          i.updateProgress(t, e),
                                          m("LobbyAssetBundleHelper:" + e);
                                      },
                                    })
                                    .then(function (e) {
                                      m(
                                        "LobbyAssetBundleHelper completed:" + e
                                      ),
                                        e &&
                                          ((C.prefab_manslot = e),
                                          C.showMiniGame(t));
                                    })
                                );
                              case 26:
                                (Q.isLoadingMiniGame = !1), (e.next = 33);
                                break;
                              case 29:
                                null == (d = O.getInstance()) &&
                                  (((u = k(this.prefab_manslot)).parent =
                                    this.mini_game_node),
                                  (d = u.getComponent(O))),
                                  (null == (_ = d) ? void 0 : _.show()) &&
                                    this.close();
                              case 33:
                                return e.abrupt("break", 60);
                              case 34:
                                return (
                                  null == this.prefab_tet
                                    ? I.isNative &&
                                      (null ==
                                        (c = this.bundleUpdateOnNative) ||
                                        c.updateBundle(
                                          "slot_event_tet",
                                          function (e, i) {
                                            var o;
                                            null == (o = n.getInstance()) ||
                                              o.updateProgress(t, i || 0),
                                              ne.emit(
                                                ie(
                                                  te.GameUpdateProgress,
                                                  "%gameID",
                                                  t
                                                ),
                                                i
                                              );
                                          },
                                          function (e, i) {
                                            var o;
                                            if (
                                              (null == (o = n.getInstance()) ||
                                                o.updateProgress(t, 1),
                                              ne.emit(
                                                ie(
                                                  te.GameUpdateProgress,
                                                  "%gameID",
                                                  t
                                                ),
                                                1
                                              ),
                                              e)
                                            ) {
                                              var s =
                                                  N.fileUtils.getWritablePath() +
                                                  "/bundles/slot_event_tet/data/slot_event_tet",
                                                l =
                                                  N.fileUtils.getStringFromFile(
                                                    s + "/version.txt"
                                                  );
                                              T.loadBundle(
                                                s,
                                                { version: l },
                                                function (e, n) {
                                                  null == e &&
                                                    n.load(
                                                      "prefab_tet",
                                                      h,
                                                      function (e, n, t) {},
                                                      function (e, n) {
                                                        null == e
                                                          ? ((C.prefab_tet = n),
                                                            C.showMiniGame(t))
                                                          : ee.showNoti(
                                                              "Có lỗi xảy ra, vui lòng thử lại sau!"
                                                            );
                                                      }
                                                    );
                                                }
                                              );
                                            } else {
                                              var a =
                                                "Có lỗi xảy ra, vui lòng thử lại sau!";
                                              i && (a = i), ee.showNoti(a);
                                            }
                                          }
                                        ))
                                    : (null == (g = H.getInstance()) &&
                                        (((b = k(this.prefab_tet)).parent =
                                          this.mini_game_node),
                                        (g = b.getComponent(H))),
                                      (null == (p = g) ? void 0 : p.show()) &&
                                        this.close()),
                                  e.abrupt("break", 60)
                                );
                              case 36:
                                if (null != this.prefab_caothap) {
                                  e.next = 43;
                                  break;
                                }
                                return (
                                  (Q.isLoadingMiniGame = !0),
                                  (e.next = 40),
                                  oe
                                    .loadPrefab({
                                      bundle: V.trenduoi,
                                      prefab:
                                        "prefab_trenduoi" +
                                        (n.portrait ? "_portrait" : ""),
                                      emitProgress: ie(
                                        te.GameUpdateProgress,
                                        "%gameID",
                                        t
                                      ),
                                      onProgress: function (e) {
                                        var i;
                                        null == (i = n.getInstance()) ||
                                          i.updateProgress(t, e),
                                          m("LobbyAssetBundleHelper:" + e);
                                      },
                                    })
                                    .then(function (e) {
                                      m(
                                        "LobbyAssetBundleHelper completed:" + e
                                      ),
                                        e &&
                                          ((C.prefab_caothap = e),
                                          C.showMiniGame(t));
                                    })
                                );
                              case 40:
                                (Q.isLoadingMiniGame = !1), (e.next = 47);
                                break;
                              case 43:
                                null == (f = x.getInstance()) &&
                                  (((S = k(this.prefab_caothap)).parent =
                                    this.mini_game_node),
                                  (f = S.getComponent(x))),
                                  (null == (v = f) ? void 0 : v.show()) &&
                                    this.close();
                              case 47:
                                return e.abrupt("break", 60);
                              case 48:
                                if (null != this.prefab_db) {
                                  e.next = 55;
                                  break;
                                }
                                return (
                                  (Q.isLoadingMiniGame = !0),
                                  (e.next = 52),
                                  oe
                                    .loadPrefab({
                                      bundle: V.dragonball,
                                      prefab:
                                        "prefab_dragonball" +
                                        (n.portrait ? "_portrait" : ""),
                                      emitProgress: ie(
                                        te.GameUpdateProgress,
                                        "%gameID",
                                        t
                                      ),
                                      onProgress: function (e) {
                                        var i;
                                        null == (i = n.getInstance()) ||
                                          i.updateProgress(t, e),
                                          m("LobbyAssetBundleHelper:" + e);
                                      },
                                    })
                                    .then(function (e) {
                                      m(
                                        "LobbyAssetBundleHelper completed:" + e
                                      ),
                                        e &&
                                          ((C.prefab_db = e),
                                          C.showMiniGame(t));
                                    })
                                );
                              case 52:
                                (Q.isLoadingMiniGame = !1), (e.next = 59);
                                break;
                              case 55:
                                null == (w = A.getInstance()) &&
                                  (((G = k(this.prefab_db)).parent =
                                    this.mini_game_node),
                                  (w = G.getComponent(A))),
                                  (null == (E = w) ? void 0 : E.show()) &&
                                    this.close();
                              case 59:
                                return e.abrupt("break", 60);
                              case 60:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (n) {
                    return e.apply(this, arguments);
                  };
                })()),
                (r.hideMiniGame = function (e) {
                  switch (e) {
                    case X.TAIXIU:
                      var n, t;
                      null == (n = this.taixiu_node) ||
                        null == (t = n.getComponent(y)) ||
                        t.hide();
                      break;
                    case X.MINIPOKER:
                      var i;
                      if (null != M.getInstance())
                        null == (i = M.getInstance()) || i.hide();
                      break;
                    case X.TRUNGPS:
                      var o;
                      if (null != O.getInstance())
                        null == (o = O.getInstance()) || o.hide();
                      break;
                    case X.TET:
                      var s;
                      if (null != R.getInstance())
                        null == (s = R.getInstance()) || s.forceClose();
                  }
                }),
                (r.updateProgress = function (e, n) {
                  var t = this;
                  switch (e) {
                    case X.MINIPOKER:
                      if (
                        null != this.mnpk_progress_node &&
                        null != this.lbl_mnpk_progress
                      ) {
                        if (null == n || null == n || Number.isNaN(n)) return;
                        if (this.progressTargets[0] == n) return;
                        (this.progressTargets[0] = n),
                          this.proBar_mnpk_progress &&
                            (this.proBar_mnpk_progress.progress = n),
                          (this.mnpk_progress_node.active = n > 0),
                          b(this.mnpk_progress_node)
                            .delay(0.2)
                            .call(function () {
                              t.mnpk_progress_node &&
                                (t.mnpk_progress_node.active = n < 1);
                            })
                            .start(),
                          (this.lbl_mnpk_progress.string =
                            Math.floor(100 * n).toString() + "%");
                      }
                      break;
                    case X.TRUNGPS:
                      if (
                        null != this.manslot_progress_node &&
                        null != this.lbl_manslot_progress
                      ) {
                        if (null == n || null == n || Number.isNaN(n)) return;
                        if (this.progressTargets[1] == n) return;
                        (this.progressTargets[1] = n),
                          this.proBar_manslot_progress &&
                            (this.proBar_manslot_progress.progress = n),
                          (this.manslot_progress_node.active = n > 0),
                          b(this.mnpk_progress_node)
                            .delay(0.2)
                            .call(function () {
                              t.manslot_progress_node &&
                                (t.manslot_progress_node.active = n < 1);
                            })
                            .start(),
                          (this.lbl_manslot_progress.string =
                            Math.floor(100 * n).toString() + "%");
                      }
                      break;
                    case X.CAOTHAP:
                      if (
                        null != this.caothap_progress_node &&
                        null != this.lbl_caothap_progress
                      ) {
                        if (null == n || null == n || Number.isNaN(n)) return;
                        if (this.progressTargets[2] == n) return;
                        (this.progressTargets[2] = n),
                          this.proBar_caothap_progress &&
                            (this.proBar_caothap_progress.progress = n),
                          (this.caothap_progress_node.active = n > 0),
                          b(this.caothap_progress_node)
                            .delay(0.2)
                            .call(function () {
                              t.caothap_progress_node &&
                                (t.caothap_progress_node.active = n < 1);
                            })
                            .start(),
                          (this.lbl_caothap_progress.string =
                            Math.floor(100 * n).toString() + "%");
                      }
                      break;
                    case X.DRAGONBALL:
                      if (
                        null != this.pokemon_progress_node &&
                        null != this.lbl_pokemon_progress
                      ) {
                        if (null == n || null == n || Number.isNaN(n)) return;
                        if (this.progressTargets[3] == n) return;
                        (this.progressTargets[3] = n),
                          this.proBar_pokemon_progress &&
                            (this.proBar_pokemon_progress.progress = n),
                          (this.pokemon_progress_node.active = n > 0),
                          b(this.pokemon_progress_node)
                            .delay(0.2)
                            .call(function () {
                              t.pokemon_progress_node &&
                                (t.pokemon_progress_node.active = n < 1);
                            })
                            .start(),
                          (this.lbl_pokemon_progress.string =
                            Math.floor(100 * n).toString() + "%");
                      }
                      break;
                    case X.TET:
                      if (
                        null != this.tet_progress_node &&
                        null != this.lbl_tet_progress
                      ) {
                        if (null == n || null == n || Number.isNaN(n)) return;
                        if (this.progressTargets[4] == n) return;
                        (this.progressTargets[4] = n),
                          this.proBar_tet_progress &&
                            (this.proBar_tet_progress.progress = n),
                          (this.tet_progress_node.active = n > 0),
                          b(this.tet_progress_node)
                            .delay(0.2)
                            .call(function () {
                              t.tet_progress_node &&
                                (t.tet_progress_node.active = n < 1);
                            })
                            .start(),
                          (this.lbl_tet_progress.string =
                            Math.floor(100 * n).toString() + "%");
                      }
                  }
                }),
                (r.onLoad = function () {
                  var e,
                    t,
                    i,
                    o,
                    s,
                    l,
                    a,
                    r,
                    _,
                    d,
                    u,
                    c,
                    h,
                    p,
                    g,
                    m,
                    b,
                    E,
                    w = this;
                  this.miniGameClose =
                    (null == (e = this.miniGameCloseNode)
                      ? void 0
                      : e.getComponent(le)) || null;
                  var k =
                    null == (t = this.miniGameClose) ? void 0 : t.skel_icon;
                  k &&
                    this.miniCloseData &&
                    (k.node.removeAllChildren(),
                    (k.skeletonData = this.miniCloseData),
                    k.setAnimation(0, "animation", !0)),
                    this.node &&
                      (this.uiTransform = this.closed_node.getComponent(v)),
                    I.isBrowser &&
                      this.bundleUpdateOnNative &&
                      (this.bundleUpdateOnNative.node.active = !1),
                    (n.instance = this),
                    (K.onClick = function () {
                      var e, n;
                      null == (e = w.btn_open_sound_cmp) || e.playSfx(),
                        null == (n = P.getInstance()) || n.clickOpen();
                    }),
                    null == (i = this.btn_close) ||
                      i.node.on("click", function () {
                        w.close();
                      }),
                    null == (o = this.btn_game_tai_xiu) ||
                      o.node.on("click", function () {
                        w.showMiniGame(X.TAIXIU);
                      }),
                    null == (s = this.btn_game_tet) ||
                      s.node.on("click", function () {
                        w.showMiniGame(X.TET);
                      }),
                    null == (l = this.btn_game_mini_poker) ||
                      l.node.on("click", function () {
                        w.showMiniGame(X.MINIPOKER);
                      }),
                    null == (a = this.btn_game_kimcuong) ||
                      a.node.on("click", function () {
                        w.showMiniGame(X.TRUNGPS);
                      }),
                    null == (r = this.btn_game_caothap) ||
                      r.node.on("click", function () {
                        w.showMiniGame(X.CAOTHAP);
                      }),
                    null == (_ = this.btn_game_db) ||
                      _.node.on("click", function () {
                        w.showMiniGame(X.DRAGONBALL);
                      }),
                    (P.WIN_SIZE_WIDTH =
                      f.getCanvasSize().width / f.getScaleX()),
                    (P.WIN_SIZE_HEIGHT =
                      f.getCanvasSize().height / f.getScaleY());
                  var N = new S(
                    (null == (d = this.closed_node)
                      ? void 0
                      : d.getPosition()) || S.ZERO
                  );
                  (N.y =
                    -P.WIN_SIZE_HEIGHT / 2 +
                    ((null == (u = this.closed_node) ||
                    null == (c = u.getComponent(v))
                      ? void 0
                      : c.contentSize.height) || 0) /
                      2),
                    (N.x =
                      P.WIN_SIZE_WIDTH / 2 -
                      ((null == (h = this.closed_node) ||
                      null == (p = h.getComponent(v))
                        ? void 0
                        : p.contentSize.width) || 0) /
                        2),
                    null == (g = this.closed_node) || g.setPosition(N),
                    this.closed_node && (this.closed_node.active = !1),
                    (this.time_in_closed_node_origin_pos =
                      (null == (m = this.time_in_closed_node)
                        ? void 0
                        : m.getPosition()) || S.ZERO),
                    (this.result_in_closed_node_origin_pos =
                      (null == (b = this.tai_in_closed_node) ||
                      null == (E = b.parent)
                        ? void 0
                        : E.getPosition()) || S.ZERO),
                    ne.on(te.MiniSocketSend, this, function (e) {
                      U.send(e);
                    }),
                    ne.on(te.ReleasedAssetBundle, this, function (e) {
                      return w.releasedAssetBundle(e);
                    }),
                    ne.on(te.MiniCloseNode, this, function () {
                      return w.close();
                    });
                }),
                (r.checkOrientation = function () {
                  I.isBrowser &&
                    (n.portrait || this.isPortraitGame
                      ? window.matchMedia("(orientation: portrait)").matches
                        ? this.node.setRotationFromEuler(0, 0, 0)
                        : G.isWebMobile()
                        ? this.node.setRotationFromEuler(0, 0, -180)
                        : this.node.setRotationFromEuler(0, 0, 0)
                      : this.node.setRotationFromEuler(0, 0, 0));
                }),
                (r.adjustPosition = function (e) {
                  switch (
                    ((this.isPortraitGame = !1), (this.node.scale = S.ONE), e)
                  ) {
                    case X.CA:
                    case X.ALADIN:
                      var n,
                        t,
                        i,
                        o,
                        s = new S(
                          (null == (n = this.closed_node)
                            ? void 0
                            : n.getPosition()) || S.ZERO
                        );
                      (s.y = P.WIN_SIZE_HEIGHT / 4),
                        (s.x =
                          P.WIN_SIZE_WIDTH / 2 -
                          ((null == (t = this.closed_node) ||
                          null == (i = t.getComponent(v))
                            ? void 0
                            : i.contentSize.width) || 0) /
                            2),
                        null == (o = this.closed_node) || o.setPosition(s);
                      break;
                    case X.SICBO:
                      var l,
                        a,
                        r,
                        _,
                        d = new S(
                          (null == (l = this.closed_node)
                            ? void 0
                            : l.getPosition()) || S.ZERO
                        );
                      (d.x = 525),
                        (d.y =
                          P.WIN_SIZE_HEIGHT / 2 -
                          ((null == (a = this.closed_node) ||
                          null == (r = a.getComponent(v))
                            ? void 0
                            : r.contentSize.height) || 0) /
                            2),
                        null == (_ = this.closed_node) || _.setPosition(d);
                      break;
                    case X.AXIE:
                      var u,
                        c,
                        h = new S(
                          (null == (u = this.closed_node)
                            ? void 0
                            : u.getPosition()) || S.ZERO
                        );
                      (h.x = 530),
                        (h.y = 270),
                        null == (c = this.closed_node) || c.setPosition(h);
                      break;
                    case X.LANHAILOC:
                      var p,
                        g,
                        m,
                        b,
                        f = new S(
                          (null == (p = this.closed_node)
                            ? void 0
                            : p.getPosition()) || S.ZERO
                        );
                      (f.x =
                        -P.WIN_SIZE_WIDTH / 2 +
                        ((null == (g = this.closed_node) ||
                        null == (m = g.getComponent(v))
                          ? void 0
                          : m.contentSize.width) || 0) /
                          2),
                        (f.y = 290),
                        null == (b = this.closed_node) || b.setPosition(f);
                      break;
                    case X.THAN_BAI:
                      var E,
                        w,
                        k,
                        N,
                        T = new S(
                          (null == (E = this.closed_node)
                            ? void 0
                            : E.getPosition()) || S.ZERO
                        );
                      (T.x =
                        P.WIN_SIZE_WIDTH / 2 -
                        ((null == (w = this.closed_node) ||
                        null == (k = w.getComponent(v))
                          ? void 0
                          : k.contentSize.width) || 0) /
                          2),
                        (T.y = -80),
                        null == (N = this.closed_node) || N.setPosition(T);
                      break;
                    case X.TRUTIEN:
                      var G, C, A, O, M, y;
                      this.isPortraitGame = !0;
                      var H = new S(
                        (null == (G = this.closed_node)
                          ? void 0
                          : G.getPosition()) || S.ZERO
                      );
                      (H.x =
                        P.WIN_SIZE_WIDTH / 2 -
                        ((null == (C = this.closed_node) ||
                        null == (A = C.getComponent(v))
                          ? void 0
                          : A.contentSize.width) || 0) /
                          2),
                        (H.y =
                          P.WIN_SIZE_HEIGHT / 2 -
                          ((null == (O = this.closed_node) ||
                          null == (M = O.getComponent(v))
                            ? void 0
                            : M.contentSize.height) || 0) /
                            2),
                        null == (y = this.closed_node) || y.setPosition(H);
                      break;
                    case X.LOBBY:
                      var x,
                        R,
                        D,
                        B,
                        W,
                        z,
                        Z = new S(
                          (null == (x = this.closed_node)
                            ? void 0
                            : x.getPosition()) || S.ZERO
                        );
                      (Z.y =
                        -P.WIN_SIZE_HEIGHT / 2 +
                        ((null == (R = this.closed_node) ||
                        null == (D = R.getComponent(v))
                          ? void 0
                          : D.contentSize.height) || 0) /
                          2),
                        (Z.x =
                          P.WIN_SIZE_WIDTH / 2 -
                          ((null == (B = this.closed_node) ||
                          null == (W = B.getComponent(v))
                            ? void 0
                            : W.contentSize.width) || 0) /
                            2),
                        null == (z = this.closed_node) || z.setPosition(Z);
                      break;
                    case X.LODE:
                      var L,
                        U,
                        V,
                        K,
                        J,
                        Y,
                        j = new S(
                          (null == (L = this.closed_node)
                            ? void 0
                            : L.getPosition()) || S.ZERO
                        );
                      (j.x =
                        -P.WIN_SIZE_WIDTH / 2 +
                        ((null == (U = this.closed_node) ||
                        null == (V = U.getComponent(v))
                          ? void 0
                          : V.contentSize.width) || 0) /
                          2),
                        (j.y =
                          -P.WIN_SIZE_HEIGHT / 2 +
                          ((null == (K = this.closed_node) ||
                          null == (J = K.getComponent(v))
                            ? void 0
                            : J.contentSize.height) || 0) /
                            2),
                        null == (Y = this.closed_node) || Y.setPosition(j);
                      break;
                    case X.BAU_CUA_FULL:
                    case X.XOCDIA:
                      var q,
                        Q,
                        $,
                        ee,
                        ie = new S(
                          (null == (q = this.closed_node)
                            ? void 0
                            : q.getPosition()) || S.ZERO
                        );
                      (ie.y =
                        P.WIN_SIZE_HEIGHT / 2 -
                        ((null == (Q = this.closed_node) ||
                        null == ($ = Q.getComponent(v))
                          ? void 0
                          : $.contentSize.height) || 0) /
                          2),
                        (ie.x = P.WIN_SIZE_WIDTH / 8),
                        null == (ee = this.closed_node) || ee.setPosition(ie);
                      break;
                    case X.BAUCUABIG5:
                      var oe,
                        se,
                        le,
                        ae,
                        re = new S(
                          (null == (oe = this.closed_node)
                            ? void 0
                            : oe.getPosition()) || S.ZERO
                        );
                      (re.y = 0),
                        (re.x =
                          P.WIN_SIZE_WIDTH / 2 -
                          ((null == (se = this.closed_node) ||
                          null == (le = se.getComponent(v))
                            ? void 0
                            : le.contentSize.width) || 0) /
                            2),
                        null == (ae = this.closed_node) || ae.setPosition(re);
                      break;
                    case X.BAUCUA_LIVESTREAM:
                      var _e,
                        de,
                        ue,
                        ce,
                        he = new S(
                          (null == (_e = this.closed_node)
                            ? void 0
                            : _e.getPosition()) || S.ZERO
                        );
                      (he.y =
                        P.WIN_SIZE_HEIGHT / 2 -
                        ((null == (de = this.closed_node) ||
                        null == (ue = de.getComponent(v))
                          ? void 0
                          : ue.contentSize.height) || 0) /
                          2),
                        (he.x = -238),
                        null == (ce = this.closed_node) || ce.setPosition(he);
                      break;
                    case X.XOCDIA_LIVESTREAM:
                    case X.XOCDIA_LIVESTREAM_2:
                      if (I.isNative) {
                        var pe, ge, me, be, ve, Ie;
                        this.isPortraitGame = !0;
                        var fe = new S(
                          (null == (pe = this.closed_node)
                            ? void 0
                            : pe.getPosition()) || S.ZERO
                        );
                        (fe.y =
                          -P.WIN_SIZE_HEIGHT / 2 +
                          ((null == (ge = this.closed_node) ||
                          null == (me = ge.getComponent(v))
                            ? void 0
                            : me.contentSize.height) || 0) /
                            2 +
                          90),
                          (fe.x =
                            -P.WIN_SIZE_WIDTH / 2 +
                            ((null == (be = this.closed_node) ||
                            null == (ve = be.getComponent(v))
                              ? void 0
                              : ve.contentSize.width) || 0) /
                              2),
                          null == (Ie = this.closed_node) || Ie.setPosition(fe);
                        break;
                      }
                      var Se,
                        Ee,
                        we,
                        ke,
                        Ne,
                        Te,
                        Ge = new S(
                          (null == (Se = this.closed_node)
                            ? void 0
                            : Se.getPosition()) || S.ZERO
                        );
                      (Ge.y =
                        P.WIN_SIZE_HEIGHT / 2 -
                        ((null == (Ee = this.closed_node) ||
                        null == (we = Ee.getComponent(v))
                          ? void 0
                          : we.contentSize.height) || 0) /
                          2 -
                        40),
                        (Ge.x =
                          -P.WIN_SIZE_WIDTH / 2 -
                          ((null == (ke = this.closed_node) ||
                          null == (Ne = ke.getComponent(v))
                            ? void 0
                            : Ne.contentSize.width) || 0) /
                            2 +
                          400),
                        null == (Te = this.closed_node) || Te.setPosition(Ge);
                      break;
                    case X.XOCDIA_TULINH:
                      var Ce,
                        Pe,
                        Ae,
                        Oe,
                        Me = new S(
                          (null == (Ce = this.closed_node)
                            ? void 0
                            : Ce.getPosition()) || S.ZERO
                        );
                      (Me.y = 0),
                        (Me.x =
                          P.WIN_SIZE_WIDTH / 2 -
                          ((null == (Pe = this.closed_node) ||
                          null == (Ae = Pe.getComponent(v))
                            ? void 0
                            : Ae.contentSize.width) || 0) /
                            2),
                        null == (Oe = this.closed_node) || Oe.setPosition(Me);
                      break;
                    case X.SAM:
                    case X.TIENLEN:
                    case X.BINH:
                      var ye,
                        He,
                        xe,
                        Re,
                        De,
                        Be,
                        We = new S(
                          (null == (ye = this.closed_node)
                            ? void 0
                            : ye.getPosition()) || S.ZERO
                        );
                      (We.y =
                        P.WIN_SIZE_HEIGHT / 2 -
                        ((null == (He = this.closed_node) ||
                        null == (xe = He.getComponent(v))
                          ? void 0
                          : xe.contentSize.height) || 0) /
                          2),
                        (We.x =
                          P.WIN_SIZE_WIDTH / 2 -
                          (((null == (Re = this.closed_node) ||
                          null == (De = Re.getComponent(v))
                            ? void 0
                            : De.contentSize.width) || 0) /
                            2) *
                            3.5),
                        null == (Be = this.closed_node) || Be.setPosition(We);
                      break;
                    case X.RONGHO:
                      var ze,
                        Ze,
                        Le,
                        Ue,
                        Ve,
                        Xe,
                        Fe = new S(
                          (null == (ze = this.closed_node)
                            ? void 0
                            : ze.getPosition()) || S.ZERO
                        );
                      (Fe.y =
                        P.WIN_SIZE_HEIGHT / 2 -
                        ((null == (Ze = this.closed_node) ||
                        null == (Le = Ze.getComponent(v))
                          ? void 0
                          : Le.contentSize.height) || 0) /
                          2),
                        (Fe.x =
                          -P.WIN_SIZE_WIDTH / 2 +
                          (((null == (Ue = this.closed_node) ||
                          null == (Ve = Ue.getComponent(v))
                            ? void 0
                            : Ve.contentSize.width) || 0) /
                            2) *
                            5),
                        null == (Xe = this.closed_node) || Xe.setPosition(Fe);
                      break;
                    case X.PHOM:
                      var Ke,
                        Je,
                        Ye,
                        je,
                        qe,
                        Qe,
                        $e = new S(
                          (null == (Ke = this.closed_node)
                            ? void 0
                            : Ke.getPosition()) || S.ZERO
                        );
                      ($e.y =
                        P.WIN_SIZE_HEIGHT / 2 -
                        ((null == (Je = this.closed_node) ||
                        null == (Ye = Je.getComponent(v))
                          ? void 0
                          : Ye.contentSize.height) || 0) /
                          2),
                        ($e.x =
                          P.WIN_SIZE_WIDTH / 2 -
                          (((null == (je = this.closed_node) ||
                          null == (qe = je.getComponent(v))
                            ? void 0
                            : qe.contentSize.width) || 0) /
                            2) *
                            3.5),
                        null == (Qe = this.closed_node) || Qe.setPosition($e);
                      break;
                    case X.POKER:
                    case X.LIENG:
                    case X.XITO:
                      var en,
                        nn,
                        tn,
                        on,
                        sn = new S(
                          (null == (en = this.closed_node)
                            ? void 0
                            : en.getPosition()) || S.ZERO
                        );
                      (sn.y =
                        P.WIN_SIZE_HEIGHT / 2 -
                        ((null == (nn = this.closed_node) ||
                        null == (tn = nn.getComponent(v))
                          ? void 0
                          : tn.contentSize.height) || 0) /
                          2),
                        (sn.x = 120),
                        null == (on = this.closed_node) || on.setPosition(sn);
                      break;
                    case X.DIABLO:
                    case X.BIGCITY:
                    case X.MIB:
                    case X.ASPHALT:
                      var ln,
                        an,
                        rn,
                        _n,
                        dn,
                        un,
                        cn = new S(
                          (null == (ln = this.closed_node)
                            ? void 0
                            : ln.getPosition()) || S.ZERO
                        );
                      (cn.y =
                        P.WIN_SIZE_HEIGHT / 4 +
                        ((null == (an = this.closed_node) ||
                        null == (rn = an.getComponent(v))
                          ? void 0
                          : rn.contentSize.height) || 0) /
                          2),
                        (cn.x =
                          P.WIN_SIZE_WIDTH / 2 -
                          ((null == (_n = this.closed_node) ||
                          null == (dn = _n.getComponent(v))
                            ? void 0
                            : dn.contentSize.width) || 0) /
                            2),
                        null == (un = this.closed_node) || un.setPosition(cn);
                      break;
                    case X.TAIXIULIVESTREAM:
                    case X.TAIXIULIVESTREAM_2:
                      if (I.isNative) {
                        var hn, pn, gn, mn, bn, vn;
                        this.isPortraitGame = !0;
                        var In = new S(
                          (null == (hn = this.closed_node)
                            ? void 0
                            : hn.getPosition()) || S.ZERO
                        );
                        (In.y =
                          -P.WIN_SIZE_HEIGHT / 2 +
                          ((null == (pn = this.closed_node) ||
                          null == (gn = pn.getComponent(v))
                            ? void 0
                            : gn.contentSize.height) || 0) /
                            2 +
                          120),
                          (In.x =
                            -P.WIN_SIZE_WIDTH / 2 +
                            ((null == (mn = this.closed_node) ||
                            null == (bn = mn.getComponent(v))
                              ? void 0
                              : bn.contentSize.width) || 0) /
                              2),
                          null == (vn = this.closed_node) || vn.setPosition(In);
                        break;
                      }
                      var fn,
                        Sn,
                        En,
                        wn,
                        kn,
                        Nn,
                        Tn = new S(
                          (null == (fn = this.closed_node)
                            ? void 0
                            : fn.getPosition()) || S.ZERO
                        );
                      (Tn.y =
                        P.WIN_SIZE_HEIGHT / 2 -
                        ((null == (Sn = this.closed_node) ||
                        null == (En = Sn.getComponent(v))
                          ? void 0
                          : En.contentSize.height) || 0) /
                          2 -
                        40),
                        (Tn.x =
                          -P.WIN_SIZE_WIDTH / 2 -
                          ((null == (wn = this.closed_node) ||
                          null == (kn = wn.getComponent(v))
                            ? void 0
                            : kn.contentSize.width) || 0) /
                            2 +
                          400),
                        null == (Nn = this.closed_node) || Nn.setPosition(Tn);
                      break;
                    case X.DUA_NGUA:
                      var Gn, Cn, Pn, An, On, Mn;
                      I.isNative && (this.isPortraitGame = !0);
                      var yn = new S(
                        (null == (Gn = this.closed_node)
                          ? void 0
                          : Gn.getPosition()) || S.ZERO
                      );
                      (yn.x =
                        P.WIN_SIZE_WIDTH / 2 -
                        ((null == (Cn = this.closed_node) ||
                        null == (Pn = Cn.getComponent(v))
                          ? void 0
                          : Pn.contentSize.width) || 0) /
                          2),
                        (yn.y =
                          P.WIN_SIZE_HEIGHT / 2 -
                          ((null == (An = this.closed_node) ||
                          null == (On = An.getComponent(v))
                            ? void 0
                            : On.contentSize.height) || 0) /
                            2),
                        null == (Mn = this.closed_node) || Mn.setPosition(yn);
                      break;
                    case X.BAYTAMCHIN_THETHAO:
                      var Hn, xn;
                      if (
                        ((this.isPortraitGame =
                          null ==
                            (Hn =
                              null == (xn = F(X.BAYTAMCHIN_THETHAO))
                                ? void 0
                                : xn.isPortrait) || Hn),
                        this.isPortraitGame)
                      ) {
                        var Rn,
                          Dn,
                          Bn,
                          Wn,
                          zn,
                          Zn,
                          Ln = new S(
                            (null == (Rn = this.closed_node)
                              ? void 0
                              : Rn.getPosition()) || S.ZERO
                          );
                        (Ln.y =
                          +P.WIN_SIZE_HEIGHT / 2 -
                          ((null == (Dn = this.closed_node) ||
                          null == (Bn = Dn.getComponent(v))
                            ? void 0
                            : Bn.contentSize.height) || 0) /
                            2 -
                          0),
                          (Ln.x =
                            -P.WIN_SIZE_WIDTH / 2 +
                            ((null == (Wn = this.closed_node) ||
                            null == (zn = Wn.getComponent(v))
                              ? void 0
                              : zn.contentSize.width) || 0) /
                              2 +
                            170),
                          null == (Zn = this.closed_node) || Zn.setPosition(Ln);
                      } else {
                        var Un,
                          Vn,
                          Xn,
                          Fn,
                          Kn,
                          Jn,
                          Yn = new S(
                            (null == (Un = this.closed_node)
                              ? void 0
                              : Un.getPosition()) || S.ZERO
                          );
                        (Yn.y =
                          P.WIN_SIZE_HEIGHT / 2 -
                          ((null == (Vn = this.closed_node) ||
                          null == (Xn = Vn.getComponent(v))
                            ? void 0
                            : Xn.contentSize.height) || 0) /
                            2),
                          (Yn.x =
                            P.WIN_SIZE_WIDTH / 2 -
                            ((null == (Fn = this.closed_node) ||
                            null == (Kn = Fn.getComponent(v))
                              ? void 0
                              : Kn.contentSize.width) || 0) /
                              2),
                          null == (Jn = this.closed_node) || Jn.setPosition(Yn);
                      }
                      break;
                    case X.VOLTA_GAME:
                      var jn, qn, Qn, $n, et, nt;
                      this.isPortraitGame = !1;
                      var tt = new S(
                        (null == (jn = this.closed_node)
                          ? void 0
                          : jn.getPosition()) || S.ZERO
                      );
                      (tt.y =
                        +P.WIN_SIZE_HEIGHT / 2 -
                        ((null == (qn = this.closed_node) ||
                        null == (Qn = qn.getComponent(v))
                          ? void 0
                          : Qn.contentSize.height) || 0) /
                          2),
                        (tt.x =
                          P.WIN_SIZE_WIDTH / 2 -
                          ((null == ($n = this.closed_node) ||
                          null == (et = $n.getComponent(v))
                            ? void 0
                            : et.contentSize.width) || 0) /
                            2),
                        null == (nt = this.closed_node) || nt.setPosition(tt);
                      break;
                    case X.C5_RONGHO_LIVESTREAM:
                      var it, ot, st, lt, at, rt;
                      this.isPortraitGame = !1;
                      var _t = new S(
                        (null == (it = this.closed_node)
                          ? void 0
                          : it.getPosition()) || S.ZERO
                      );
                      (_t.y =
                        -P.WIN_SIZE_HEIGHT / 2 +
                        ((null == (ot = this.closed_node) ||
                        null == (st = ot.getComponent(v))
                          ? void 0
                          : st.contentSize.height) || 0) /
                          2),
                        (_t.x =
                          -P.WIN_SIZE_WIDTH / 2 +
                          ((null == (lt = this.closed_node) ||
                          null == (at = lt.getComponent(v))
                            ? void 0
                            : at.contentSize.width) || 0) /
                            2),
                        null == (rt = this.closed_node) || rt.setPosition(_t);
                      break;
                    case X.C5_BAUCUA_LIVE:
                      var dt, ut, ct, ht, pt, gt;
                      this.isPortraitGame = !1;
                      var mt = new S(
                        (null == (dt = this.closed_node)
                          ? void 0
                          : dt.getPosition()) || S.ZERO
                      );
                      (mt.y =
                        +P.WIN_SIZE_HEIGHT / 2 -
                        ((null == (ut = this.closed_node) ||
                        null == (ct = ut.getComponent(v))
                          ? void 0
                          : ct.contentSize.height) || 0) /
                          2),
                        (mt.x =
                          +P.WIN_SIZE_WIDTH / 2 -
                          ((null == (ht = this.closed_node) ||
                          null == (pt = ht.getComponent(v))
                            ? void 0
                            : pt.contentSize.width) || 0) /
                            2),
                        null == (gt = this.closed_node) || gt.setPosition(mt);
                      break;
                    case X.C5_XOCDIALIVE:
                      var bt, vt, It, ft, St, Et;
                      this.isPortraitGame = !1;
                      var wt = new S(
                        (null == (bt = this.closed_node)
                          ? void 0
                          : bt.getPosition()) || S.ZERO
                      );
                      (wt.y =
                        +P.WIN_SIZE_HEIGHT / 2 -
                        ((null == (vt = this.closed_node) ||
                        null == (It = vt.getComponent(v))
                          ? void 0
                          : It.contentSize.height) || 0) /
                          2),
                        (wt.x =
                          +P.WIN_SIZE_WIDTH / 2 -
                          ((null == (ft = this.closed_node) ||
                          null == (St = ft.getComponent(v))
                            ? void 0
                            : St.contentSize.width) || 0) /
                            2),
                        null == (Et = this.closed_node) || Et.setPosition(wt);
                      break;
                    case X.C5_SICBO_LIVESTREAM:
                      var kt, Nt, Tt, Gt;
                      this.isPortraitGame = !1;
                      var Ct = new S(
                        (null == (kt = this.closed_node)
                          ? void 0
                          : kt.getPosition()) || S.ZERO
                      );
                      (Ct.y = -140),
                        (Ct.x =
                          +P.WIN_SIZE_WIDTH / 2 -
                          ((null == (Nt = this.closed_node) ||
                          null == (Tt = Nt.getComponent(v))
                            ? void 0
                            : Tt.contentSize.width) || 0) /
                            2),
                        null == (Gt = this.closed_node) || Gt.setPosition(Ct);
                      break;
                    case X.EVO_GAMES:
                    case X.VIA_GAMES:
                    case X.SEXY_GAMES:
                    case X.VIVO_GAMES:
                      this.node.scale = S.ZERO;
                      break;
                    default:
                      ne.emit(te.AUTO_FIT_MINI_NODE);
                  }
                }),
                (r.onDestroy = function () {
                  n.instance = null;
                }),
                (r.onBackground = function () {
                  ae.sendTracking(re.ON_BACKGROUND);
                }),
                (r.onForeground = function () {
                  ae.sendTracking(re.ON_FOREGROUND);
                }),
                (r.start = function () {}),
                (r.update = function (e) {}),
                (r.isReverse = function () {
                  return (
                    !I.isBrowser ||
                    (!n.portrait && !this.isPortraitGame) ||
                    !(
                      !window.matchMedia("(orientation: portrait)").matches &&
                      G.isWebMobile()
                    )
                  );
                }),
                (r.activeMiniGameNode = function () {
                  this.closed_node && (this.closed_node.active = !0);
                }),
                (r.open = function (e) {
                  var n,
                    t,
                    i = this;
                  if (
                    (void 0 === e && (e = !0),
                    null == (n = this.opened_node) || !n.IsOpened())
                  ) {
                    var o = b(this.closed_node).sequence(
                      b().to(0.2, { scale: S.ZERO }),
                      b().call(function () {
                        i.closed_node && (i.closed_node.active = !1);
                      })
                    );
                    e
                      ? o.start()
                      : (this.closed_node && (this.closed_node.scale = S.ZERO),
                        this.closed_node && (this.closed_node.active = !1)),
                      null == (t = this.opened_node) || t.show();
                  }
                }),
                (r.close = function () {
                  var e,
                    n,
                    t = this;
                  (null != (e = this.closed_node) && e.active) ||
                    (this.closed_node && (this.closed_node.active = !0),
                    null == (n = this.opened_node) ||
                      n.hide(function () {
                        b(t.closed_node).to(0.2, { scale: S.ONE }).start();
                      }));
                }),
                (r.closeAll = function () {
                  this.close(),
                    this.hideMiniGame(X.TAIXIU),
                    this.hideMiniGame(X.TRUNGPS),
                    this.hideMiniGame(X.MINIPOKER),
                    this.hideMiniGame(X.CAOTHAP),
                    this.hideMiniGame(X.DRAGONBALL),
                    this.hideMiniGame(X.TET);
                }),
                (r.turnOffAutoSpin = function () {
                  var e, n;
                  null != M.getInstance() &&
                    (null == (e = M.getInstance()) || e.turnOffAutoSpin());
                  null != O.getInstance() &&
                    (null == (n = O.getInstance()) || n.turnOffAutoSpin());
                }),
                (r.forceAllMachineStop = function (e, n) {
                  var t, i, o, s, l, a;
                  (void 0 === e && (e = !0),
                  void 0 === n && (n = !0),
                  null != M.getInstance()) &&
                    (null == (t = M.getInstance()) || t.forceMachineStop(e),
                    n && (null == (i = M.getInstance()) || i.hide()));
                  null != O.getInstance() &&
                    (null == (o = O.getInstance()) || o.forceMachineStop(e),
                    n && (null == (s = O.getInstance()) || s.hide()));
                  null != A.getInstance() &&
                    (null == (l = A.getInstance()) || l.forceMachineStop(e),
                    n && (null == (a = A.getInstance()) || a.hide()));
                }),
                (r.getClosedNodePosition = function () {
                  var e;
                  return null == (e = this.closed_node) ? void 0 : e.position;
                }),
                (r.getCloseNode = function () {
                  return this.closed_node;
                }),
                (r.getOpenedNode = function () {
                  var e;
                  return null == (e = this.opened_node) ? void 0 : e.node;
                }),
                (r.bringGameViewToTop = function (e, n) {
                  var t, i;
                  n
                    ? (e.node.parent &&
                        e.node.setSiblingIndex(
                          e.node.parent.children.length - 1
                        ),
                      this.mini_game_view_stack.push(e),
                      e.blur(!1),
                      this.mini_game_view_stack.length > 0 &&
                        (null == (t = this.mini_game_node) ||
                          t.setSiblingIndex(2)))
                    : (e.node.setSiblingIndex(0),
                      this.mini_game_view_stack.splice(
                        this.mini_game_view_stack.indexOf(e),
                        1
                      ),
                      this.mini_game_view_stack.length <= 0 &&
                        (null == (i = this.mini_game_node) ||
                          i.setSiblingIndex(0)));
                }),
                (n.handleMiniGameMessage = function (e) {
                  try {
                    var n = (e = JSON.parse(e + ""))[0],
                      t = e[1];
                    switch (n) {
                      case Y.LogIn_Response:
                        var i = e[1];
                        if (
                          (ae.sendTracking(re.RES_LOGIN_WS_MINI, {
                            status: !!i,
                          }),
                          i)
                        ) {
                          var o, s, l, a, r, _, d;
                          if (
                            (m("=== Logged In minigame SUCCEED ==="),
                            Z.subcribeTaiXiu(),
                            P.subscribeSlots(),
                            null != (o = x.getInstance()) &&
                              o.IsShowing() &&
                              L.subcribe(),
                            null != (s = O.getInstance()) &&
                              s.IsShowing() &&
                              W.subscribe(),
                            null != (l = M.getInstance()) &&
                              l.IsShowing() &&
                              z.subscribe(),
                            null != (a = A.getInstance()) &&
                              a.IsShowing() &&
                              B.subscribe(),
                            null != (r = D.getInstance()) && r.isShowing())
                          )
                            null == (d = D.getInstance()) ||
                              d.hide(!0, function () {});
                          ne.emitLast(te.MiniLogged),
                            null == (_ = se.getInstance()) ||
                              _.checkConnection(1),
                            q.sendRefreshMoney();
                        } else m("=== Logged In minigame FAILED ===");
                        ee.getInstance().hideLoading();
                        break;
                      case Y.LogOut_Response:
                        break;
                      case Y.Extension_Response:
                        var u,
                          c = (null == (u = e[1]) ? void 0 : u.cmd) || 0;
                        if (c == j.BROADCAST_MESSAGE) {
                          for (
                            var h = null == t ? void 0 : t.mgs,
                              p = (null == t ? void 0 : t.params) || [],
                              g = [],
                              b = 0;
                            b < p.length;
                            b++
                          ) {
                            var v = p[b] || 0;
                            g.push(v);
                          }
                          ne.emit(te.CallLobbyShowFloatingString, h, g);
                        } else if (1e4 == c) {
                          var I,
                            f = (null == (I = e[1]) ? void 0 : I.Js) || [];
                          ne.emit(te.JackpotUpdateAll, f);
                          var S = [];
                          S.push(X.MINIPOKER),
                            S.push(X.TRUNGPS),
                            S.push(X.CAOTHAP),
                            S.push(X.DRAGONBALL),
                            S.push(X.DIABLO),
                            S.push(X.BIGCITY),
                            S.push(X.ASPHALT),
                            S.push(X.MIB),
                            S.push(X.ALADIN),
                            S.push(X.CA),
                            S.push(X.THAN_BAI),
                            S.forEach(function (e) {
                              var n = f.filter(function (n) {
                                return n.gid == e;
                              });
                              n = n.sort(function (e, n) {
                                return (e.b || 0) > (n.b || 0) ? 1 : -1;
                              });
                              var t,
                                i,
                                o,
                                s,
                                l = [];
                              e == X.ALADIN
                                ? l.push(
                                    (null == (t = n[2]) ? void 0 : t.J) || 0
                                  )
                                : (l.push(
                                    (null == (i = n[0]) ? void 0 : i.J) || 0
                                  ),
                                  l.push(
                                    (null == (o = n[1]) ? void 0 : o.J) || 0
                                  ),
                                  l.push(
                                    (null == (s = n[n.length > 3 ? 3 : 2])
                                      ? void 0
                                      : s.J) || 0
                                  ));
                              n &&
                                n.length > 0 &&
                                ne.emit(
                                  ie(te.JackpotUpdateGame, "%gameID", e),
                                  l
                                );
                            });
                        } else if (c == j.USER_INFO) {
                          null == (E = e[1]) || E.As,
                            null == (w = e[1]) || w.chip,
                            null == (k = e[1]) || k.gold,
                            null == (N = e[1]) || N.vip,
                            null == (T = e[1]) || T.id;
                          var E,
                            w,
                            k,
                            N,
                            T,
                            G,
                            C,
                            y,
                            H,
                            R,
                            U = null == (G = e[1]) ? void 0 : G.dn;
                          null == (C = e[1]) || C.uid,
                            null == (y = e[1]) || y.ph,
                            null == (H = e[1]) || H.a,
                            null == (R = e[1]) || R.am;
                          Q.displayName = U || "";
                        } else if (c == j.ERROR_MESSAGE) {
                          var V = "",
                            F = e[1] || {};
                          F.mgs && (V = F.mgs),
                            V.length > 0
                              ? ee.showNoti(V)
                              : ee.showNoti("Đã có lỗi xảy ra.!");
                        } else if (
                          (c >= 1e3 && c < 1100) ||
                          (c >= 2e3 && c < 2100)
                        ) {
                          var K = this.getInstance();
                          K && Z.handleMessage(e, K);
                        } else if (c >= 1300 && c < 1400) {
                          var J = e[1],
                            $ = null == J ? void 0 : J.gid;
                          $ == X.TRUNGPS
                            ? W.handleMessage(e)
                            : $ == X.MINIPOKER
                            ? z.handleMessage(e)
                            : $ == X.DRAGONBALL
                            ? B.handleMessage(e)
                            : ne.emitLast(te.SocketMessage, e);
                        } else if (c >= 1500 && c < 1600) L.handleMessage(e);
                        else if (310 == c) {
                          var oe,
                            le = ((null == (oe = e[1]) ? void 0 : oe.As) || {})
                              .gold;
                          void 0 !== le && ne.emit(te.RefreshMoney, le);
                        }
                        break;
                      case Y.Ping_Response:
                        var _e,
                          de = e[1];
                        null == (_e = se.getInstance()) ||
                          _e.checkConnection(de);
                    }
                  } catch (e) {}
                }),
                (n.getInstance = function () {
                  var e;
                  if (null != P.getInstance())
                    return null == (e = P.getInstance())
                      ? void 0
                      : e.getComponentInChildren(n);
                }),
                (r.showTaiXiuResult = function (e) {
                  this.tai_in_closed_node &&
                    (this.tai_in_closed_node.active = e),
                    this.xiu_in_closed_node &&
                      (this.xiu_in_closed_node.active = !e),
                    this.time_in_closed_node &&
                      (this.time_in_closed_node.active = !1),
                    this.tai_in_opened_node &&
                      (this.tai_in_opened_node.active = e),
                    this.xiu_in_opened_node &&
                      (this.xiu_in_opened_node.active = !e),
                    this.time_in_opened_node &&
                      (this.time_in_opened_node.active = !1);
                }),
                (r.startGameTaiXiu = function (e) {
                  this.tai_in_opened_node &&
                    (this.tai_in_opened_node.active = !1),
                    this.xiu_in_opened_node &&
                      (this.xiu_in_opened_node.active = !1),
                    this.time_in_opened_node &&
                      (this.time_in_opened_node.active = !0),
                    this.txt_time_in_opened_node &&
                      (this.txt_time_in_opened_node.string = e + ""),
                    this.tai_in_closed_node &&
                      (this.tai_in_closed_node.active = !1),
                    this.xiu_in_closed_node &&
                      (this.xiu_in_closed_node.active = !1),
                    this.time_in_closed_node &&
                      (this.time_in_closed_node.active = !0),
                    this.txt_time_in_closed_node &&
                      (this.txt_time_in_closed_node.string = e + "");
                }),
                (r.IsShowingGame = function () {
                  var e, n, t, i, o, s, l;
                  return (
                    (null == (e = y.getInstance()) ? void 0 : e.IsShowing()) ||
                    (null == (n = M.getInstance()) ? void 0 : n.IsShowing()) ||
                    (null == (t = x.getInstance()) ? void 0 : t.IsShowing()) ||
                    (null == (i = O.getInstance()) ? void 0 : i.IsShowing()) ||
                    (null == (o = A.getInstance()) ? void 0 : o.IsShowing()) ||
                    (null == (s = this.opened_node) ? void 0 : s.IsShowing()) ||
                    (null == (l = H.getInstance()) ? void 0 : l.IsShowing()) ||
                    !1
                  );
                }),
                (r.IsOverlap = function (e) {
                  var n, t, i, o, s;
                  return (
                    (null == (n = y.getInstance())
                      ? void 0
                      : n.IsLiveStreamOverlap(e)) ||
                    (null == (t = M.getInstance())
                      ? void 0
                      : t.IsLiveStreamOverlap(e)) ||
                    (null == (i = x.getInstance())
                      ? void 0
                      : i.IsLiveStreamOverlap(e)) ||
                    (null == (o = O.getInstance())
                      ? void 0
                      : o.IsLiveStreamOverlap(e)) ||
                    (null == (s = A.getInstance())
                      ? void 0
                      : s.IsLiveStreamOverlap(e)) ||
                    this.MiniIsOverlap(e) ||
                    !1
                  );
                }),
                (r.MiniIsOverlap = function (e) {
                  var n;
                  return (
                    !!this.opened_node &&
                    (null == (n = this.uiTransform)
                      ? void 0
                      : n.getBoundingBox().intersects(e.getBoundingBox()))
                  );
                }),
                (r.getInstanceTaiXiu = function () {
                  var e;
                  return null == (e = this.taixiu_node)
                    ? void 0
                    : e.getComponent(y);
                }),
                (r.getState = function () {
                  var e, n, t, i, o, s, l, a, r, _, d, u;
                  return {
                    active: this.node.active,
                    closed_node:
                      (null == (e = this.closed_node) ? void 0 : e.active) ||
                      !1,
                    closePos:
                      (null == (n = this.closed_node)
                        ? void 0
                        : n.getPosition().clone()) || S.ZERO,
                    time_in_closed_node_origin_pos:
                      (null == (t = this.time_in_closed_node_origin_pos)
                        ? void 0
                        : t.clone()) || S.ZERO,
                    result_in_closed_node_origin_pos:
                      (null == (i = this.result_in_closed_node_origin_pos)
                        ? void 0
                        : i.clone()) || S.ZERO,
                    tai_in_opened_node:
                      (null == (o = this.tai_in_opened_node)
                        ? void 0
                        : o.active) || !1,
                    xiu_in_opened_node:
                      (null == (s = this.xiu_in_opened_node)
                        ? void 0
                        : s.active) || !1,
                    time_in_opened_node:
                      (null == (l = this.time_in_opened_node)
                        ? void 0
                        : l.active) || !1,
                    txt_time_in_opened_node:
                      (null == (a = this.txt_time_in_opened_node)
                        ? void 0
                        : a.string) || "",
                    tai_in_closed_node:
                      (null == (r = this.tai_in_closed_node)
                        ? void 0
                        : r.active) || !1,
                    xiu_in_closed_node:
                      (null == (_ = this.xiu_in_closed_node)
                        ? void 0
                        : _.active) || !1,
                    time_in_closed_node:
                      (null == (d = this.time_in_closed_node)
                        ? void 0
                        : d.active) || !1,
                    txt_time_in_closed_node:
                      (null == (u = this.txt_time_in_closed_node)
                        ? void 0
                        : u.string) || "",
                  };
                }),
                (r.setState = function (e) {
                  var n, t, i;
                  m("Set mini game node state", e),
                    (this.node.active = e.active),
                    this.closed_node &&
                      (this.closed_node.active = e.closed_node),
                    null == (n = this.closed_node) || n.setPosition(e.closePos),
                    this.closed_node && E.stopAllByTarget(this.closed_node),
                    null == (t = this.closed_node) ||
                      null == (i = t.getComponent(K)) ||
                      i.checkAndSnapToBorder(),
                    (this.time_in_closed_node_origin_pos =
                      e.time_in_closed_node_origin_pos),
                    (this.result_in_closed_node_origin_pos =
                      e.result_in_closed_node_origin_pos),
                    this.tai_in_opened_node &&
                      (this.tai_in_opened_node.active = e.tai_in_opened_node),
                    this.xiu_in_opened_node &&
                      (this.xiu_in_opened_node.active = e.xiu_in_opened_node),
                    this.time_in_opened_node &&
                      (this.time_in_opened_node.active = e.time_in_opened_node),
                    this.txt_time_in_opened_node &&
                      (this.txt_time_in_opened_node.string =
                        e.txt_time_in_opened_node),
                    this.tai_in_closed_node &&
                      (this.tai_in_closed_node.active = e.tai_in_closed_node),
                    this.xiu_in_closed_node &&
                      (this.xiu_in_closed_node.active = e.xiu_in_closed_node),
                    this.time_in_closed_node &&
                      (this.time_in_closed_node.active = e.time_in_closed_node),
                    this.txt_time_in_closed_node &&
                      (this.txt_time_in_closed_node.string =
                        e.txt_time_in_closed_node),
                    Z.subcribeTaiXiu();
                }),
                s(
                  n,
                  [
                    {
                      key: "btn_open_sound_cmp",
                      get: function () {
                        var e;
                        return null == (e = this.miniGameClose)
                          ? void 0
                          : e.btn_open_sound_cmp;
                      },
                    },
                    {
                      key: "closed_node",
                      get: function () {
                        var e;
                        return null == (e = this.miniGameClose)
                          ? void 0
                          : e.closed_node;
                      },
                    },
                    {
                      key: "time_in_closed_node",
                      get: function () {
                        var e;
                        return null == (e = this.miniGameClose)
                          ? void 0
                          : e.time_in_closed_node;
                      },
                    },
                    {
                      key: "txt_time_in_closed_node",
                      get: function () {
                        var e;
                        return null == (e = this.miniGameClose)
                          ? void 0
                          : e.txt_time_in_closed_node;
                      },
                    },
                    {
                      key: "tai_in_closed_node",
                      get: function () {
                        var e;
                        return null == (e = this.miniGameClose)
                          ? void 0
                          : e.tai_in_closed_node;
                      },
                    },
                    {
                      key: "xiu_in_closed_node",
                      get: function () {
                        var e;
                        return null == (e = this.miniGameClose)
                          ? void 0
                          : e.xiu_in_closed_node;
                      },
                    },
                  ],
                  [
                    {
                      key: "portrait",
                      get: function () {
                        var e;
                        return !(
                          null == (e = P.getInstance()) || !e.isPortrait
                        );
                      },
                    },
                  ]
                ),
                n
              );
            })(w)).instance = null),
            (Ye = n((Je = yn).prototype, "miniGameCloseNode", [de], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (je = n(Je.prototype, "btn_close", [ue], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (qe = n(Je.prototype, "opened_node", [ce], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Qe = n(Je.prototype, "time_in_opened_node", [he], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($e = n(Je.prototype, "txt_time_in_opened_node", [pe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (en = n(Je.prototype, "tai_in_opened_node", [ge], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (nn = n(Je.prototype, "xiu_in_opened_node", [me], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (tn = n(Je.prototype, "taixiu_node", [be], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (on = n(Je.prototype, "prefab_mnpk", [ve], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (sn = n(Je.prototype, "prefab_manslot", [Ie], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ln = n(Je.prototype, "prefab_tet", [fe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (an = n(Je.prototype, "prefab_caothap", [Se], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (rn = n(Je.prototype, "prefab_db", [Ee], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_n = n(Je.prototype, "mnpk_progress_node", [we], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (dn = n(Je.prototype, "manslot_progress_node", [ke], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (un = n(Je.prototype, "caothap_progress_node", [Ne], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (cn = n(Je.prototype, "pokemon_progress_node", [Te], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (hn = n(Je.prototype, "tet_progress_node", [Ge], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (pn = n(Je.prototype, "lbl_mnpk_progress", [Ce], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (gn = n(Je.prototype, "lbl_manslot_progress", [Pe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (mn = n(Je.prototype, "lbl_caothap_progress", [Ae], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (bn = n(Je.prototype, "lbl_pokemon_progress", [Oe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (vn = n(Je.prototype, "lbl_tet_progress", [Me], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (In = n(Je.prototype, "proBar_mnpk_progress", [ye], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (fn = n(Je.prototype, "proBar_manslot_progress", [He], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Sn = n(Je.prototype, "proBar_caothap_progress", [xe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (En = n(Je.prototype, "proBar_pokemon_progress", [Re], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (wn = n(Je.prototype, "proBar_tet_progress", [De], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (kn = n(Je.prototype, "btn_game_tai_xiu", [Be], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Nn = n(Je.prototype, "btn_game_tet", [We], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Tn = n(Je.prototype, "btn_game_mini_poker", [ze], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Gn = n(Je.prototype, "btn_game_kimcuong", [Ze], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Cn = n(Je.prototype, "btn_game_caothap", [Le], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pn = n(Je.prototype, "btn_game_db", [Ue], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (An = n(Je.prototype, "mini_game_node", [Ve], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (On = n(Je.prototype, "miniCloseData", [Xe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Mn = n(Je.prototype, "bundleUpdateOnNative", [Fe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ke = Je))
          ) || Ke)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniGameNodeDragView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CCMiniGameRoot.ts",
    "./MiniGameNodeController.ts",
    "./EventManager.ts",
  ],
  function (e) {
    "use strict";
    var n, o, t, i, c, r, d, s, a, _, u, h, I, l, p, v, T;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (o = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (c = e.cclegacy),
            (r = e._decorator),
            (d = e.Node),
            (s = e.Vec3),
            (a = e.sys),
            (_ = e.view),
            (u = e.UITransform),
            (h = e.tween),
            (I = e.Component);
        },
        function (e) {
          l = e.CCMiniGameRoot;
        },
        function (e) {
          p = e.default;
        },
        function (e) {
          (v = e.eventManager), (T = e.EventKey);
        },
      ],
      execute: function () {
        var S, m, E, f, g, x;
        c._RF.push(
          {},
          "a0f1briJ25PvYMM4FLHXNhQ",
          "MiniGameNodeDragView",
          void 0
        );
        var N = r.ccclass,
          y = r.property;
        e(
          "default",
          ((S = N("MiniGameNodeDragView")),
          (m = y(d)),
          S(
            (((x = (function (e) {
              function n() {
                for (
                  var n, o = arguments.length, c = new Array(o), r = 0;
                  r < o;
                  r++
                )
                  c[r] = arguments[r];
                return (
                  (n = e.call.apply(e, [this].concat(c)) || this),
                  t(n, "move_node", g, i(n)),
                  (n.touch_moved = !1),
                  (n.node_start_position = s.ZERO),
                  n
                );
              }
              o(n, e);
              var c = n.prototype;
              return (
                (c.onLoad = function () {
                  var e = this;
                  this.node.on(d.EventType.TOUCH_START, function (n) {
                    var o;
                    e.node_start_position = new s(
                      (null == (o = e.move_node) ? void 0 : o.position) ||
                        s.ZERO
                    );
                  }),
                    this.node.on(d.EventType.TOUCH_MOVE, function (n) {
                      var o,
                        t,
                        i,
                        c,
                        r =
                          null != (o = p.getInstance()) && o.isReverse()
                            ? 1
                            : -1;
                      null == (t = e.move_node) ||
                        t.setPosition(
                          new s(
                            e.move_node.position.x + r * n.getUIDelta().x,
                            e.move_node.position.y + r * n.getUIDelta().y,
                            0
                          )
                        ),
                        (Math.abs(
                          ((null == (i = e.move_node)
                            ? void 0
                            : i.position.x) || 0) - e.node_start_position.x
                        ) > 10 ||
                          Math.abs(
                            ((null == (c = e.move_node)
                              ? void 0
                              : c.position.y) || 0) - e.node_start_position.y
                          ) > 10) &&
                          (e.touch_moved = !0);
                    }),
                    this.node.on(d.EventType.TOUCH_END, function () {
                      e.checkAndSnapToBorder(),
                        e.touch_moved || (n.onClick && n.onClick()),
                        (e.touch_moved = !1);
                    }),
                    this.node.on(d.EventType.TOUCH_CANCEL, function () {
                      e.checkAndSnapToBorder(), (e.touch_moved = !1);
                    }),
                    a.isBrowser &&
                      (window.addEventListener("resize", function () {
                        e.checkAndSnapToBorder(),
                          v.emit(T.JackpotResize),
                          setTimeout(function () {
                            e.checkAndSnapToBorder(), v.emit(T.JackpotResize);
                          }, 1e3);
                      }),
                      _.setResizeCallback(function () {
                        e.checkAndSnapToBorder(),
                          v.emit(T.JackpotResize),
                          setTimeout(function () {
                            e.checkAndSnapToBorder(), v.emit(T.JackpotResize);
                          }, 1e3);
                      })),
                    v.on(T.AUTO_FIT_MINI_NODE, this, function () {
                      e.checkAndSnapToBorder();
                    });
                }),
                (c.checkAndSnapToBorder = function () {
                  var e,
                    n,
                    o = new s(
                      (null == (e = this.move_node) ? void 0 : e.position) ||
                        s.ZERO
                    ),
                    t =
                      null == (n = this.move_node) ? void 0 : n.getComponent(u);
                  t &&
                  t.getBoundingBox().yMin <
                    -l.WIN_SIZE_HEIGHT / 2 + t.contentSize.height / 2
                    ? ((o.y =
                        -l.WIN_SIZE_HEIGHT / 2 + t.contentSize.height / 2),
                      t.getBoundingBox().xMin <
                      -l.WIN_SIZE_WIDTH / 2 + t.contentSize.width
                        ? (o.x =
                            -l.WIN_SIZE_WIDTH / 2 + t.contentSize.width / 2)
                        : t.getBoundingBox().xMax >
                            l.WIN_SIZE_WIDTH / 2 - t.contentSize.width &&
                          (o.x =
                            l.WIN_SIZE_WIDTH / 2 - t.contentSize.width / 2))
                    : t &&
                      t.getBoundingBox().yMax >
                        l.WIN_SIZE_HEIGHT / 2 - t.contentSize.height / 2
                    ? ((o.y = l.WIN_SIZE_HEIGHT / 2 - t.contentSize.height / 2),
                      t.getBoundingBox().xMin <
                      -l.WIN_SIZE_WIDTH / 2 + t.contentSize.width
                        ? (o.x =
                            -l.WIN_SIZE_WIDTH / 2 + t.contentSize.width / 2)
                        : t.getBoundingBox().xMax >
                            l.WIN_SIZE_WIDTH / 2 - t.contentSize.width &&
                          (o.x =
                            l.WIN_SIZE_WIDTH / 2 - t.contentSize.width / 2))
                    : this.move_node && this.move_node.position.x < 0
                    ? (o.x =
                        -l.WIN_SIZE_WIDTH / 2 +
                        ((null == t ? void 0 : t.contentSize.width) || 0) / 2)
                    : (o.x =
                        l.WIN_SIZE_WIDTH / 2 -
                        ((null == t ? void 0 : t.contentSize.width) || 0) / 2),
                    h(this.move_node)
                      .to(0.2, { position: new s(o.x, o.y, o.z) })
                      .start();
                }),
                (c.onDestroy = function () {
                  v.off(this, T.AUTO_FIT_MINI_NODE);
                }),
                n
              );
            })(I)).onClick = null),
            (g = n((f = x).prototype, "move_node", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = f))
          ) || E)
        );
        c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniGamePopup.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CommonPopup.ts"],
  function (o) {
    "use strict";
    var n, e, i, t;
    return {
      setters: [
        function (o) {
          n = o.inheritsLoose;
        },
        function (o) {
          (e = o.cclegacy), (i = o._decorator);
        },
        function (o) {
          t = o.CommonPopup;
        },
      ],
      execute: function () {
        var u;
        e._RF.push({}, "4001d9xomRLeqBFhUbv6ekb", "MiniGamePopup", void 0);
        var c = i.ccclass;
        o(
          "MiniGamePopup",
          c("MiniGamePopup")(
            (u = (function (o) {
              function e() {
                return o.apply(this, arguments) || this;
              }
              return n(e, o), e;
            })(t))
          ) || u
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniPoker_SlotMachineCmp.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MiniPoker_SlotMachineColumn.ts",
  ],
  function (t) {
    "use strict";
    var n, i, e, o, r, c, u, s, l, a;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (c = t._decorator),
            (u = t.tween),
            (s = t.Component);
        },
        function (t) {
          (l = t.default), (a = t.SlotMachineState);
        },
      ],
      execute: function () {
        var p, f, h, m, S, d;
        r._RF.push(
          {},
          "afc78U3lz1HaqL6RHiIQAq8",
          "MiniPoker_SlotMachineCmp",
          void 0
        );
        var g = c.ccclass,
          M = c.property;
        t(
          "default",
          ((p = g("MiniPokerSlotMachineCmp")),
          (f = M([l])),
          p(
            (((d = (function (t) {
              function n() {
                for (
                  var n, i = arguments.length, r = new Array(i), c = 0;
                  c < i;
                  c++
                )
                  r[c] = arguments[c];
                return (
                  (n = t.call.apply(t, [this].concat(r)) || this),
                  e(n, "colums", S, o(n)),
                  (n.onMachineStopped = function () {}),
                  n
                );
              }
              i(n, t);
              var r = n.prototype;
              return (
                (r.init = function () {
                  var t = this;
                  this.colums.forEach(function (t) {
                    return t.init();
                  }),
                    (this.colums[this.colums.length - 1].onStopped =
                      function () {
                        return t.onMachineStopped();
                      });
                }),
                (r.spin = function () {
                  this.colums.forEach(function (t) {
                    return t.spin();
                  });
                }),
                (r.stop = function (t) {
                  var n = [0, 0.6, 1.2, 2, 3];
                  this.colums.forEach(function (i, e) {
                    var o = i,
                      r = t[e];
                    u(o.node)
                      .sequence(
                        u().delay(n[e]),
                        u().call(function () {
                          o.stop(r);
                        })
                      )
                      .start();
                  });
                }),
                (r.stopImmediately = function (t) {
                  this.colums.forEach(function (n, i) {
                    n.stop(t[i]);
                  });
                }),
                (r.isStopped = function () {
                  return (
                    this.colums.filter(function (t) {
                      return t.getstate() == a.STOPPED;
                    }).length >= this.colums.length
                  );
                }),
                (r.isSpinning = function () {
                  return (
                    this.colums.filter(function (t) {
                      return t.getstate() == a.SPINNING;
                    }).length >= this.colums.length
                  );
                }),
                n
              );
            })(s)).SPIN_SPEED = 1e3),
            (d.TIME_TO_SHOW_RESULT = 0.05),
            (S = n((m = d).prototype, "colums", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (h = m))
          ) || h)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniPoker_SlotMachineColumn.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MiniPoker_SlotMachineCmp.ts",
    "./MiniPoker_SlotMachineItemView.ts",
  ],
  function (t) {
    "use strict";
    var i, o, n, e, s, r, p, a, h, c, u, _, m;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (r = t._decorator),
            (p = t.Layout),
            (a = t.UITransform),
            (h = t.Vec3),
            (c = t.tween),
            (u = t.Component);
        },
        function (t) {
          _ = t.default;
        },
        function (t) {
          m = t.default;
        },
      ],
      execute: function () {
        var l, y, d, f, S, P, v;
        t("SlotMachineState", void 0),
          s._RF.push(
            {},
            "3c69bI7eu5Pr7tiRWrCxAn5",
            "MiniPoker_SlotMachineColumn",
            void 0
          );
        var g,
          T = r.ccclass,
          E = r.property;
        !(function (t) {
          (t[(t.SPINNING = 0)] = "SPINNING"),
            (t[(t.CHECK_TO_STOP = 1)] = "CHECK_TO_STOP"),
            (t[(t.STOPPING = 2)] = "STOPPING"),
            (t[(t.STOPPED = 3)] = "STOPPED");
        })(g || (g = t("SlotMachineState", {})));
        t(
          "default",
          ((l = T("MiniPokerSlotMachineColumn")),
          (y = E([m])),
          (d = E(p)),
          l(
            ((P = i(
              (S = (function (t) {
                function i() {
                  for (
                    var i, o = arguments.length, s = new Array(o), r = 0;
                    r < o;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (i = t.call.apply(t, [this].concat(s)) || this),
                    n(i, "items", P, e(i)),
                    n(i, "layout", v, e(i)),
                    (i.state = g.STOPPED),
                    (i.item_position_y_limited = 0),
                    (i.item_position_y_top = 0),
                    (i.item_position_y_bottom = 0),
                    (i.item_position_y_stop = 0),
                    (i.item_top = null),
                    (i.onStopped = function () {}),
                    i
                  );
                }
                o(i, t);
                var s = i.prototype;
                return (
                  (s.onLoad = function () {
                    var t, i;
                    this.item_position_y_bottom = this.items[0].node.position.y;
                    var o = this.items[0].node.getComponent(a),
                      n = (null == o ? void 0 : o.contentSize.height) || 0;
                    (this.item_position_y_stop =
                      this.item_position_y_bottom - n / 20),
                      (this.item_position_y_top =
                        this.items[this.items.length - 1].node.position.y),
                      (this.item_position_y_limited =
                        this.item_position_y_bottom -
                        ((null == (t = this.items[0].node.getComponent(a))
                          ? void 0
                          : t.contentSize.height) || 0) -
                        ((null == (i = this.layout) ? void 0 : i.spacingY) ||
                          0));
                  }),
                  (s.init = function () {
                    (this.state = g.STOPPED),
                      this.items.forEach(function (t) {
                        return t.init();
                      });
                  }),
                  (s.spin = function () {
                    (this.item_top = this.getTopItem()),
                      this.items.forEach(function (t) {
                        return t.blur();
                      }),
                      (this.state = g.SPINNING);
                  }),
                  (s.stop = function (t) {
                    (this.item_top = this.getTopItem()),
                      this.item_top.setCard(t),
                      this.item_top.bright(),
                      (this.state = g.CHECK_TO_STOP);
                  }),
                  (s.getstate = function () {
                    return this.state;
                  }),
                  (s.update = function (t) {
                    switch (this.state) {
                      case g.SPINNING:
                        this.spinning(t);
                        break;
                      case g.CHECK_TO_STOP:
                        this.checkToStop(t);
                    }
                  }),
                  (s.getTopItem = function () {
                    var t = this.items[0];
                    return (
                      this.items.forEach(function (i) {
                        i.node.position.y >= t.node.position.y && (t = i);
                      }),
                      t
                    );
                  }),
                  (s.getBottomItem = function () {
                    var t = this.items[0];
                    return (
                      this.items.forEach(function (i) {
                        i.node.position.y < t.node.position.y && (t = i);
                      }),
                      t
                    );
                  }),
                  (s.spinning = function (t) {
                    var i = this,
                      o = !1;
                    this.items.forEach(function (n) {
                      var e = new h(n.node.position);
                      (e.y -= _.SPIN_SPEED * t),
                        e.y <= i.item_position_y_limited &&
                          ((e.y = i.item_position_y_top),
                          (i.item_top = n),
                          (o = !0)),
                        (n.node.position = e);
                    }),
                      o && this.sort();
                  }),
                  (s.sort = function () {
                    this.items = this.items.sort(function (t, i) {
                      return t.node.position.y < i.node.position.y ? -1 : 1;
                    });
                  }),
                  (s.checkToStop = function (t) {
                    var i,
                      o = this;
                    this.items.forEach(function (i) {
                      var n = new h(i.node.position);
                      (n.y -= _.SPIN_SPEED * t),
                        n.y <= o.item_position_y_limited &&
                          (n.y = o.item_position_y_top),
                        (i.node.position = n);
                    }),
                      ((null == (i = this.item_top)
                        ? void 0
                        : i.node.position.y) || 0) <=
                        this.item_position_y_stop &&
                        (this.bounce(), (this.state = g.STOPPING));
                  }),
                  (s.bounce = function () {
                    var t,
                      i = this;
                    this.sort();
                    var o =
                        (null == (t = this.item_top)
                          ? void 0
                          : t.node.position) || h.ZERO,
                      n = new h(o);
                    (n.y = this.item_position_y_stop),
                      this.item_top && (this.item_top.node.position = n),
                      this.items.forEach(function (t, o) {
                        var n;
                        if (
                          t.name != (null == (n = i.item_top) ? void 0 : n.name)
                        ) {
                          var e = new h(t.node.position);
                          if (0 == o) {
                            var s,
                              r = i.items[o + 1].node.getComponent(a);
                            e.y =
                              i.items[o + 1].node.position.y -
                              (((null == (s = i.layout)
                                ? void 0
                                : s.spacingY) || 0) +
                                ((null == r ? void 0 : r.contentSize.height) ||
                                  0));
                          } else {
                            var p,
                              c = i.items[o - 1].node.getComponent(a);
                            e.y =
                              i.items[o - 1].node.position.y +
                              ((null == (p = i.layout) ? void 0 : p.spacingY) ||
                                0) +
                              ((null == c ? void 0 : c.contentSize.height) ||
                                0);
                          }
                          t.node.position = e;
                        }
                      });
                    var e =
                      Math.abs(this.item_position_y_stop) -
                      Math.abs(this.item_position_y_bottom);
                    this.items.forEach(function (t) {
                      c(t.node)
                        .sequence(
                          c().by(0.1, { position: new h(0, e, 0) }),
                          c().call(function () {
                            (i.state = g.STOPPED), i.onStopped();
                          })
                        )
                        .start();
                    });
                  }),
                  i
                );
              })(u)).prototype,
              "items",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (v = i(S.prototype, "layout", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = S))
          ) || f)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniPoker_SlotMachineItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Define.ts",
    "./MauBinh_CardLib.ts",
    "./MiniPokerGameView.ts",
  ],
  function (e) {
    "use strict";
    var t, i, r, n, a, o, l, u, c, s, d;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (o = e._decorator),
            (l = e.Sprite),
            (u = e.Component);
        },
        function (e) {
          c = e.GameID;
        },
        function (e) {
          s = e.GameCard;
        },
        function (e) {
          d = e.default;
        },
      ],
      execute: function () {
        var f, h, p, m, _, b, v;
        a._RF.push(
          {},
          "1d416TbuE5AcIUPUHN2To+a",
          "MiniPoker_SlotMachineItemView",
          void 0
        );
        var g = o.ccclass,
          y = o.property;
        e(
          "default",
          ((f = g("MiniPokerSlotMachineItemView")),
          (h = y(l)),
          (p = y(Number)),
          f(
            ((b = t(
              (_ = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, a = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(a)) || this),
                    r(t, "spr_item", b, n(t)),
                    r(t, "default_code", v, n(t)),
                    (t.card = null),
                    t
                  );
                }
                i(t, e);
                var a = t.prototype;
                return (
                  (a.init = function () {
                    (this.card = new s()),
                      null != this.default_code &&
                        this.card.decodeCard(this.default_code, c.BINH),
                      this.bright();
                  }),
                  (a.setCard = function (e) {
                    if (null == e)
                      return (
                        (this.card = new s()),
                        void (
                          null != this.default_code &&
                          this.card.decodeCard(this.default_code, c.BINH)
                        )
                      );
                    this.card = e;
                  }),
                  (a.blur = function () {
                    var e,
                      t,
                      i =
                        (null == (e = this.card)
                          ? void 0
                          : e.getResourceName()) + "_blur" || "";
                    this.spr_item &&
                      (this.spr_item.spriteFrame =
                        (null == (t = d.getInstance())
                          ? void 0
                          : t.loaded_card_blur.filter(function (e) {
                              return e.name.indexOf(i) >= 0;
                            })[0]) || null);
                  }),
                  (a.bright = function () {
                    var e,
                      t,
                      i =
                        (null == (e = this.card)
                          ? void 0
                          : e.getResourceName()) || "";
                    this.spr_item &&
                      (this.spr_item.spriteFrame =
                        (null == (t = d.getInstance())
                          ? void 0
                          : t.loaded_card_normal.filter(function (e) {
                              return e.name.indexOf(i) >= 0;
                            })[0]) || null);
                  }),
                  t
                );
              })(u)).prototype,
              "spr_item",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (v = t(_.prototype, "default_code", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = _))
          ) || m)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniPokerBetHistoryItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./StringUtils.ts",
    "./MiniPokerGameView.ts",
    "./MiniGameNodeController.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, r, o, a, c, h, _, s, p, l, u, x;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (a = t._decorator),
            (c = t.Label),
            (h = t.Sprite),
            (_ = t.Color),
            (s = t.UIOpacity),
            (p = t.Component);
        },
        function (t) {
          l = t.StringUtils;
        },
        function (t) {
          u = t.default;
        },
        function (t) {
          x = t.default;
        },
      ],
      execute: function () {
        var d, f, g, m, b, v, y, w, z, I, k, M, P, S, C, H, B, N, V;
        o._RF.push(
          {},
          "a380539wtZKkYpserieITeC",
          "MiniPokerBetHistoryItemView",
          void 0
        );
        var D = a.ccclass,
          F = a.property;
        t(
          "default",
          ((d = D("MiniPokerBetHistoryItemView")),
          (f = F(c)),
          (g = F(c)),
          (m = F(c)),
          (b = F(c)),
          (v = F([h])),
          (y = F(c)),
          (w = F(c)),
          (z = F(c)),
          d(
            ((M = i(
              (k = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, o = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    n(i, "txt_phien_title", M, r(i)),
                    n(i, "txt_phien_time", P, r(i)),
                    n(i, "txt_phien_datcuoc", S, r(i)),
                    n(i, "txt_phien_tienthang", C, r(i)),
                    n(i, "spr_cards", H, r(i)),
                    n(i, "txt_cuoc", B, r(i)),
                    n(i, "txt_win", N, r(i)),
                    n(i, "txt_phien", V, r(i)),
                    i
                  );
                }
                e(i, t);
                var o = i.prototype;
                return (
                  (o.show = function (t, i, e, n, r) {
                    var o = this;
                    this.txt_phien_title &&
                      (this.txt_phien_title.string = "#" + t.toString()),
                      this.txt_phien_time &&
                        (this.txt_phien_time.string = i.toString()),
                      this.txt_phien_datcuoc &&
                        (this.txt_phien_datcuoc.string = l.formatNumber(e)),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.color = _.WHITE),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.string = l.formatNumber(n)),
                      r.forEach(function (t, i) {
                        var e,
                          n =
                            (null == (e = u.getInstance())
                              ? void 0
                              : e.loaded_card_normal.filter(function (i) {
                                  return (
                                    i.name.indexOf(t.getResourceName()) >= 0
                                  );
                                })[0]) || null,
                          r = o.spr_cards[i].node.getComponent(s);
                        !r || (null != n && null != n)
                          ? r && (r.opacity = 255)
                          : (r.opacity = 1),
                          (o.spr_cards[i].spriteFrame = n);
                      }),
                      this.txt_phien_title &&
                        (this.txt_phien_title.node.active = !0),
                      this.txt_phien_time &&
                        (this.txt_phien_time.node.active = !0),
                      this.txt_phien_datcuoc &&
                        (this.txt_phien_datcuoc.node.active = !0),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.node.active = !0),
                      this.spr_cards[0].node.parent &&
                        (this.spr_cards[0].node.parent.active = !0),
                      x.portrait &&
                        (this.txt_cuoc && (this.txt_cuoc.node.active = !0),
                        this.txt_win && (this.txt_win.node.active = !0),
                        this.txt_phien && (this.txt_phien.node.active = !0));
                  }),
                  (o.hide = function () {
                    this.txt_phien_title &&
                      (this.txt_phien_title.node.active = !1),
                      this.txt_phien_time &&
                        (this.txt_phien_time.node.active = !1),
                      this.txt_phien_datcuoc &&
                        (this.txt_phien_datcuoc.node.active = !1),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.node.active = !1),
                      this.spr_cards[0].node.parent &&
                        (this.spr_cards[0].node.parent.active = !1),
                      x.portrait &&
                        (this.txt_cuoc && (this.txt_cuoc.node.active = !1),
                        this.txt_win && (this.txt_win.node.active = !1),
                        this.txt_phien && (this.txt_phien.node.active = !1));
                  }),
                  i
                );
              })(p)).prototype,
              "txt_phien_title",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (P = i(k.prototype, "txt_phien_time", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = i(k.prototype, "txt_phien_datcuoc", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = i(k.prototype, "txt_phien_tienthang", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = i(k.prototype, "spr_cards", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (B = i(k.prototype, "txt_cuoc", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = i(k.prototype, "txt_win", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = i(k.prototype, "txt_phien", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = k))
          ) || I)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniPokerBetHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./Define.ts",
    "./MauBinh_CardLib.ts",
    "./StringUtils.ts",
    "./MiniPokerBetHistoryItemView.ts",
    "./HttpManager.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, r, o, a, s, l, u, c, p, g, f, h, m, b, d, _;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (a = t._decorator),
            (s = t.Button),
            (l = t.Label),
            (u = t.Node),
            (c = t.UIOpacity);
        },
        function (t) {
          p = t.CommonPopup;
        },
        function (t) {
          g = t.GameConfigManager;
        },
        function (t) {
          f = t.GameID;
        },
        function (t) {
          h = t.GameCard;
        },
        function (t) {
          m = t.StringUtils;
        },
        function (t) {
          b = t.default;
        },
        function (t) {
          (d = t.HttpCommand), (_ = t.httpManager);
        },
      ],
      execute: function () {
        var v, y, P, w, H, C, I, M, S, B, T;
        o._RF.push(
          {},
          "a3edbEkjk9N+7WHFGim2qCN",
          "MiniPokerBetHistoryView",
          void 0
        );
        var k = a.ccclass,
          D = a.property,
          L = function () {
            (this.bet = 0),
              (this.sessionID = 0),
              (this.money = 0),
              (this.cards = []),
              (this.betTime = "");
          };
        t(
          "default",
          ((v = k("MiniPokerBetHistoryView")),
          (y = D(s)),
          (P = D(s)),
          (w = D(l)),
          (H = D([u])),
          v(
            ((M = e(
              (I = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    i(e, "btn_prev", M, r(e)),
                    i(e, "btn_next", S, r(e)),
                    i(e, "lbl_page", B, r(e)),
                    i(e, "item_nodes", T, r(e)),
                    (e._bets = []),
                    (e.currentPage = 1),
                    (e.max_pages = 0),
                    (e.item_views = []),
                    e
                  );
                }
                n(e, t);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    var e,
                      n,
                      i = this;
                    this.setOffsetStreamNative(!0),
                      t.prototype.onLoad.call(this),
                      null == (e = this.btn_prev) ||
                        e.node.on("click", function () {
                          i.currentPage > 1 &&
                            ((i.currentPage -= 1),
                            i.lbl_page &&
                              (i.lbl_page.string = i.currentPage.toString())),
                            i.fetchHistory(!1);
                        }),
                      null == (n = this.btn_next) ||
                        n.node.on("click", function () {
                          i.currentPage < i.max_pages &&
                            ((i.currentPage += 1),
                            i.lbl_page &&
                              (i.lbl_page.string = i.currentPage.toString())),
                            i.fetchHistory(!1);
                        });
                  }),
                  (o.goToFirstPage = function () {
                    (this.currentPage = 1),
                      this.lbl_page &&
                        (this.lbl_page.string = this.currentPage.toString());
                  }),
                  (o.fetchHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0), t && this.goToFirstPage();
                    var n = (this.currentPage - 1) * this.item_nodes.length,
                      i =
                        g.SAdomainURL +
                        d.BET_HISTORY_URL.replace(
                          "%gameid%",
                          f.MINIPOKER.toString()
                        ).replace("%skip%", n.toString());
                    _.sendGET({
                      url: i,
                      onCompleted: function (n) {
                        e._bets = [];
                        var i = JSON.parse(n).data,
                          r = i.items;
                        if (null != r) {
                          var o = i.count;
                          e.max_pages = Math.ceil(o / e.item_nodes.length);
                          for (var a = 0; a < r.length; a++) {
                            var s = r[a],
                              l = new L();
                            (l.sessionID = s.sessionId),
                              (l.bet = s.betting),
                              (l.money = s.money);
                            var u = s.createdTime,
                              c = new Date(u);
                            (l.betTime = m.formatTime(c)), (l.cards = []);
                            for (var p = s.symbols, g = 0; g < p.length; g++)
                              l.cards.push(p[g]);
                            e._bets.push(l);
                          }
                          e.showBetHistory(t);
                        }
                      },
                    });
                  }),
                  (o.showBetHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0);
                    var n = this.item_nodes.map(function (t) {
                      return t.getComponent(b);
                    });
                    this.item_views.length <= 0 && (this.item_views = n),
                      this.item_views.forEach(function (t, n) {
                        var i = e._bets[n];
                        if (null != i && null != i) {
                          var r = null == t ? void 0 : t.node.getComponent(c);
                          r && (r.opacity = 255);
                          var o = i.cards.map(function (t) {
                            var e = new h();
                            return e.decodeCard(t, f.BINH), e;
                          });
                          null == t ||
                            t.show(i.sessionID, i.betTime, i.bet, i.money, o);
                        } else null == t || t.hide();
                      }),
                      t && this.show();
                  }),
                  e
                );
              })(p)).prototype,
              "btn_prev",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (S = e(I.prototype, "btn_next", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = e(I.prototype, "lbl_page", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = e(I.prototype, "item_nodes", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (C = I))
          ) || C)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniPokerBetRankItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var e, i, n, r, o, a, s, u, _, l;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (a = t._decorator),
            (s = t.Label),
            (u = t.Color),
            (_ = t.Component);
        },
        function (t) {
          l = t.StringUtils;
        },
      ],
      execute: function () {
        var c, x, h, m, p, b, f, y, w, g, d, v, z;
        o._RF.push(
          {},
          "72a27QlbHBIsbInnd3zWl+N",
          "MiniPokerBetRankItemView",
          void 0
        );
        var k = a.ccclass,
          I = a.property;
        t(
          "default",
          ((c = k("MiniPokerBetRankItemView")),
          (x = I(s)),
          (h = I(s)),
          (m = I(s)),
          (p = I(s)),
          (b = I(s)),
          c(
            ((w = e(
              (y = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "txt_time", w, r(e)),
                    n(e, "txt_username", g, r(e)),
                    n(e, "txt_bet", d, r(e)),
                    n(e, "txt_win_amount", v, r(e)),
                    n(e, "txt_type", z, r(e)),
                    e
                  );
                }
                i(e, t);
                var o = e.prototype;
                return (
                  (o.show = function (t, e, i, n, r) {
                    this.txt_time && (this.txt_time.string = t.toString()),
                      this.txt_username &&
                        (this.txt_username.string = e.toString()),
                      this.txt_bet && (this.txt_bet.string = l.formatNumber(i)),
                      this.txt_win_amount &&
                        (this.txt_win_amount.color = u.WHITE),
                      this.txt_win_amount &&
                        (this.txt_win_amount.string = l.formatNumber(n)),
                      this.txt_type && (this.txt_type.string = r.toString()),
                      this.txt_time && (this.txt_time.node.active = !0),
                      this.txt_username && (this.txt_username.node.active = !0),
                      this.txt_bet && (this.txt_bet.node.active = !0),
                      this.txt_win_amount &&
                        (this.txt_win_amount.node.active = !0),
                      this.txt_type && (this.txt_type.node.active = !0);
                  }),
                  (o.hide = function () {
                    this.txt_time && (this.txt_time.node.active = !1),
                      this.txt_username && (this.txt_username.node.active = !1),
                      this.txt_bet && (this.txt_bet.node.active = !1),
                      this.txt_win_amount &&
                        (this.txt_win_amount.node.active = !1),
                      this.txt_type && (this.txt_type.node.active = !1);
                  }),
                  e
                );
              })(_)).prototype,
              "txt_time",
              [x],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (g = e(y.prototype, "txt_username", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = e(y.prototype, "txt_bet", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = e(y.prototype, "txt_win_amount", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(y.prototype, "txt_type", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = y))
          ) || f)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniPokerBetRankView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./Define.ts",
    "./StringUtils.ts",
    "./MiniPokerBetRankItemView.ts",
    "./HttpManager.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, r, a, o, l, c, u, p, s, g, f, _, m, h;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (o = e._decorator),
            (l = e.Button),
            (c = e.Label),
            (u = e.UIOpacity);
        },
        function (e) {
          p = e.CommonPopup;
        },
        function (e) {
          s = e.GameConfigManager;
        },
        function (e) {
          g = e.GameID;
        },
        function (e) {
          f = e.StringUtils;
        },
        function (e) {
          _ = e.default;
        },
        function (e) {
          (m = e.HttpCommand), (h = e.httpManager);
        },
      ],
      execute: function () {
        var b, d, v, y, k, w, R, P, S, M, T;
        a._RF.push(
          {},
          "28b5fKpJSpFlKcWl3lca3QX",
          "MiniPokerBetRankView",
          void 0
        );
        var N = o.ccclass,
          x = o.property,
          B = function () {
            (this.rank = 0),
              (this.money = 0),
              (this.displayName = ""),
              (this.bet = 0),
              (this.type = 0),
              (this.betTime = "");
          };
        e(
          "default",
          ((b = N("MiniPokerBetRankView")),
          (d = x([_])),
          (v = x(l)),
          (y = x(l)),
          (k = x(c)),
          b(
            ((P = t(
              (R = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, a = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(a)) || this),
                    i(t, "item_views", P, r(t)),
                    i(t, "btn_prev", S, r(t)),
                    i(t, "btn_next", M, r(t)),
                    i(t, "lbl_current_page", T, r(t)),
                    (t._rank = []),
                    (t.current_page = 1),
                    (t.maxPage = 0),
                    t
                  );
                }
                n(t, e);
                var a = t.prototype;
                return (
                  (a.onLoad = function () {
                    var t,
                      n,
                      i = this;
                    this.setOffsetStreamNative(!0),
                      e.prototype.onLoad.call(this),
                      null == (t = this.btn_prev) ||
                        t.node.on("click", function () {
                          i.current_page <= 1 ||
                            ((i.current_page -= 1),
                            i.lbl_current_page &&
                              (i.lbl_current_page.string =
                                i.current_page.toString()),
                            i.fetchRank(!1));
                        }),
                      null == (n = this.btn_next) ||
                        n.node.on("click", function () {
                          i.current_page >= i.maxPage ||
                            ((i.current_page += 1),
                            i.lbl_current_page &&
                              (i.lbl_current_page.string =
                                i.current_page.toString()),
                            i.fetchRank(!1));
                        });
                  }),
                  (a.fetchRank = function (e) {
                    var t = this;
                    void 0 === e && (e = !0),
                      e &&
                        ((this.current_page = 1),
                        this.lbl_current_page &&
                          (this.lbl_current_page.string =
                            this.current_page.toString()));
                    var n = 6 * (this.current_page - 1),
                      i =
                        s.SAdomainURL +
                        m.BET_RANK_TOP_URL.replace(
                          "%gameid%",
                          g.MINIPOKER.toString()
                        ).replace("%skip%", n.toString());
                    h.sendGET({
                      url: i,
                      onCompleted: function (n) {
                        t._rank = [];
                        var i = JSON.parse(n).data,
                          r = i.items;
                        if (null != r) {
                          var a = i.count;
                          t.maxPage = Math.ceil(a / 6);
                          for (var o = 0; o < r.length; o++) {
                            var l = r[o],
                              c = new B();
                            (c.bet = l.betting),
                              (c.displayName = l.displayName),
                              (c.money = l.money),
                              (c.type = l.description);
                            var u = l.createdTime,
                              p = new Date(u);
                            (c.betTime = f.formatTime(p)), t._rank.push(c);
                          }
                          t.showRank(e);
                        }
                      },
                    });
                  }),
                  (a.showRank = function (e) {
                    var t = this;
                    void 0 === e && (e = !0),
                      this.item_views.forEach(function (e, n) {
                        var i = t._rank[n];
                        if (null != i && null != i) {
                          var r = e.node.getComponent(u);
                          r && (r.opacity = 255),
                            e.show(
                              i.betTime,
                              i.displayName,
                              i.bet,
                              i.money,
                              i.type
                            );
                        } else e.hide();
                      }),
                      e && this.show();
                  }),
                  t
                );
              })(p)).prototype,
              "item_views",
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (S = t(R.prototype, "btn_prev", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = t(R.prototype, "btn_next", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = t(R.prototype, "lbl_current_page", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = R))
          ) || w)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniPokerGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SoundManager.ts",
    "./CommonInfoPopup.ts",
    "./MiniGameNodeController.ts",
    "./MiniPokerMessageHandler.ts",
    "./MiniGameNetworkHandler.ts",
    "./Define.ts",
    "./MauBinh_CardLib.ts",
    "./StringUtils.ts",
    "./BaseMiniGameView.ts",
    "./MiniPokerBetHistoryView.ts",
    "./MiniPokerBetRankView.ts",
    "./MiniPokerNoHuView.ts",
    "./MiniPoker_SlotMachineCmp.ts",
    "./PersistManager.ts",
    "./SocketManager.ts",
    "./EventManager.ts",
    "./State.ts",
  ],
  function (t) {
    "use strict";
    var i,
      n,
      e,
      o,
      a,
      r,
      l,
      s,
      u,
      c,
      p,
      h,
      f,
      _,
      d,
      b,
      m,
      k,
      g,
      v,
      y,
      w,
      S,
      M,
      I,
      P,
      C,
      j,
      H,
      R,
      N,
      T,
      E,
      B,
      z,
      U,
      A,
      O,
      V,
      x;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (r = t._decorator),
            (l = t.Label),
            (s = t.Button),
            (u = t.Node),
            (c = t.Animation),
            (p = t.Toggle),
            (h = t.SpriteFrame),
            (f = t.AudioClip),
            (_ = t.tween),
            (d = t.Tween),
            (b = t.UIOpacity),
            (m = t.Vec3);
        },
        function (t) {
          k = t.SoundManager;
        },
        function (t) {
          g = t.CommonInfoPopup;
        },
        function (t) {
          v = t.default;
        },
        function (t) {
          (y = t.default), (w = t.MiniPoker_Message);
        },
        function (t) {
          S = t.MiniGameNetworkHandler;
        },
        function (t) {
          M = t.GameID;
        },
        function (t) {
          (I = t.default), (P = t.MAU_BINH_RESULT), (C = t.GameCard);
        },
        function (t) {
          j = t.StringUtils;
        },
        function (t) {
          H = t.default;
        },
        function (t) {
          R = t.default;
        },
        function (t) {
          N = t.default;
        },
        function (t) {
          T = t.default;
        },
        function (t) {
          E = t.default;
        },
        function (t) {
          B = t.PersistManager;
        },
        function (t) {
          (z = t.socketManager), (U = t.MessageRequest);
        },
        function (t) {
          (A = t.eventManager), (O = t.EventKey);
        },
        function (t) {
          (V = t.state), (x = t.NetworkState);
        },
      ],
      execute: function () {
        var J,
          L,
          G,
          q,
          K,
          D,
          F,
          Q,
          Z,
          W,
          Y,
          X,
          $,
          tt,
          it,
          nt,
          et,
          ot,
          at,
          rt,
          lt,
          st,
          ut,
          ct,
          pt,
          ht,
          ft,
          _t,
          dt,
          bt,
          mt,
          kt,
          gt,
          vt,
          yt,
          wt,
          St,
          Mt,
          It,
          Pt,
          Ct,
          jt,
          Ht,
          Rt,
          Nt,
          Tt;
        a._RF.push({}, "29658cf5wRFxp/x7Wny4LCJ", "MiniPokerGameView", void 0);
        var Et = r.ccclass,
          Bt = r.property,
          zt = function () {
            (this.aid = 0), (this.jackpot = 0), (this.bet = 0);
          };
        t(
          "default",
          ((J = Et("MiniPokerGameView")),
          (L = Bt(l)),
          (G = Bt(R)),
          (q = Bt(N)),
          (K = Bt([s])),
          (D = Bt(s)),
          (F = Bt(s)),
          (Q = Bt(s)),
          (Z = Bt(s)),
          (W = Bt(s)),
          (Y = Bt(u)),
          (X = Bt(l)),
          ($ = Bt(l)),
          (tt = Bt(E)),
          (it = Bt(c)),
          (nt = Bt(p)),
          (et = Bt(p)),
          (ot = Bt(T)),
          (at = Bt([h])),
          (rt = Bt([h])),
          (lt = Bt(f)),
          (st = Bt(g)),
          J(
            (((Tt = (function (t) {
              function i() {
                for (
                  var i, n = arguments.length, a = new Array(n), r = 0;
                  r < n;
                  r++
                )
                  a[r] = arguments[r];
                return (
                  (i = t.call.apply(t, [this].concat(a)) || this),
                  e(i, "lblJackpot", pt, o(i)),
                  e(i, "miniPokerBetHistoryView", ht, o(i)),
                  e(i, "miniPokerBetRankView", ft, o(i)),
                  e(i, "btn_chips", _t, o(i)),
                  (i.chip_values = [100, 1e3, 5e3, 1e4]),
                  e(i, "btn_rank", dt, o(i)),
                  e(i, "btn_bet_history", bt, o(i)),
                  e(i, "btn_help", mt, o(i)),
                  e(i, "btn_spin", kt, o(i)),
                  e(i, "btn_spin_mini", gt, o(i)),
                  e(i, "result_node", vt, o(i)),
                  e(i, "lbl_result_text", yt, o(i)),
                  e(i, "lbl_result_amount", wt, o(i)),
                  e(i, "miniPoker_SlotMachineCmp", St, o(i)),
                  e(i, "anim_spin", Mt, o(i)),
                  e(i, "tog_auto", It, o(i)),
                  e(i, "tog_fast", Pt, o(i)),
                  e(i, "miniPokerNoHuView", Ct, o(i)),
                  e(i, "loaded_card_normal", jt, o(i)),
                  e(i, "loaded_card_blur", Ht, o(i)),
                  e(i, "win_sfx", Rt, o(i)),
                  (i.isHasResult = !0),
                  e(i, "commonInfoPopup", Nt, o(i)),
                  (i._aid = 1),
                  (i.bet = 0),
                  (i._jackpotInfos = []),
                  (i.jackpot_amount = 0),
                  (i.jackpot_tween = null),
                  (i.cards = []),
                  (i.moneyExchange = 0),
                  (i.wonJackpot = 0),
                  (i._holdSpinTime = 0),
                  (i._isHoldingSpin = !1),
                  i
                );
              }
              n(i, t);
              var a = i.prototype;
              return (
                (a.isSpinning = function () {
                  var t;
                  return null == (t = this.miniPoker_SlotMachineCmp)
                    ? void 0
                    : t.isSpinning();
                }),
                (a.forceMachineStop = function (t) {
                  var i;
                  void 0 === t && (t = !0),
                    null != (i = this.tog_auto) &&
                      i.isChecked &&
                      t &&
                      (this.tog_auto.isChecked = !1),
                    this.stop([]);
                }),
                (a.turnOffAutoSpin = function () {
                  this.tog_auto && (this.tog_auto.isChecked = !1);
                }),
                (a.onLoad = function () {
                  var n,
                    e,
                    o,
                    a,
                    r,
                    l = this;
                  t.prototype.onLoad.call(this),
                    (i.instance = this),
                    (y.onResultError = function (t) {
                      B.showNoti(t, l.node, M.MINIPOKER), l.forceMachineStop();
                    }),
                    (this.bet = this.chip_values[0]),
                    this.init(),
                    this.btn_spin &&
                      this.btn_spin.node.on("click", function () {
                        var t;
                        null != (t = l.miniPoker_SlotMachineCmp) &&
                        t.isStopped()
                          ? l.spin()
                          : B.showNoti("Đang Quay", l.node, M.MINIPOKER);
                      }),
                    this.btn_spin_mini &&
                      (this.btn_spin_mini.node.on(
                        u.EventType.TOUCH_START,
                        function () {
                          (l._isHoldingSpin = !0), (l._holdSpinTime = 0);
                        }
                      ),
                      this.btn_spin_mini.node.on(
                        u.EventType.TOUCH_END,
                        function () {
                          var t, i;
                          ((l._isHoldingSpin = !1),
                          (l._holdSpinTime = 0),
                          null != (t = l.tog_auto) && t.isChecked)
                            ? (l.tog_auto.isChecked = !1)
                            : null != (i = l.miniPoker_SlotMachineCmp) &&
                              i.isStopped()
                            ? l.spin()
                            : B.showNoti("Đang Quay", l.node, M.MINIPOKER);
                        }
                      ),
                      this.btn_spin_mini.node.on(
                        u.EventType.TOUCH_CANCEL,
                        function () {
                          var t;
                          (l._isHoldingSpin = !1),
                            (l._holdSpinTime = 0),
                            null != (t = l.tog_auto) &&
                              t.isChecked &&
                              (l.tog_auto.isChecked = !1);
                        }
                      )),
                    null == (n = this.btn_rank) ||
                      n.node.on("click", function () {
                        l.showRank();
                      }),
                    null == (e = this.btn_bet_history) ||
                      e.node.on("click", function () {
                        l.showBetHistory();
                      }),
                    null == (o = this.btn_help) ||
                      o.node.on("click", function () {
                        var t;
                        null == (t = l.commonInfoPopup) ||
                          t.showInfo(M.MINIPOKER);
                      }),
                    this.btn_chips.forEach(function (t, i) {
                      var n = i;
                      t.node.on("click", function () {
                        var t, i;
                        null == (t = l.miniPoker_SlotMachineCmp) ||
                        !t.isStopped() ||
                        (null != (i = l.tog_auto) && i.isChecked)
                          ? B.showNoti("Đang Quay", l.node, M.MINIPOKER)
                          : (l.highlightBet(n),
                            (l.bet = l.chip_values[n]),
                            l.subscribeJackpot());
                      });
                    }),
                    null == (a = this.tog_auto) ||
                      a.node.on("toggle", function () {
                        l._checkAutoSpin();
                      }),
                    this.miniPoker_SlotMachineCmp &&
                      (this.miniPoker_SlotMachineCmp.onMachineStopped =
                        function () {
                          var t,
                            i = _(l).sequence(
                              _().call(function () {
                                var t;
                                null == (t = l.miniPokerNoHuView) ||
                                  t.show(l.cards, l.moneyExchange);
                              }),
                              null != (t = l.tog_auto) && t.isChecked
                                ? _(l).sequence(
                                    _().delay(14.5),
                                    _().call(function () {
                                      var t;
                                      null == (t = l.miniPokerNoHuView) ||
                                        t.hide();
                                    })
                                  )
                                : _(l).sequence(
                                    _().delay(6.5),
                                    _().call(function () {
                                      var t;
                                      null == (t = l.miniPokerNoHuView) ||
                                        t.activeClick();
                                    })
                                  )
                            ),
                            n = l.wonJackpot
                              ? i
                              : _(l).call(function () {
                                  l.showResult();
                                });
                          _(l)
                            .sequence(
                              n,
                              _().delay(0.5),
                              _().call(function () {
                                var t, i;
                                null != (t = l.tog_auto) &&
                                  t.isChecked &&
                                  null != (i = l.miniPoker_SlotMachineCmp) &&
                                  i.isStopped() &&
                                  l.spin();
                              })
                            )
                            .start(),
                            z.sendRefreshMoney();
                        }),
                    null == (r = this.miniPoker_SlotMachineCmp) || r.init(),
                    this.result_node && (this.result_node.active = !1),
                    A.on(O.MiniLogged, this, function () {
                      l.IsRespin() ? l.requestSpin() : l.forceMachineStop();
                    });
                }),
                (a.highlightBet = function (t) {
                  this.btn_chips.forEach(function (i, n) {
                    i.node.children[1].active = n == t;
                  });
                }),
                (a.showResult = function () {
                  var t,
                    i,
                    n,
                    e,
                    o,
                    a = this,
                    r = I.getPokerMiniResult(this.cards);
                  if (!(r == P.MAU_THAU || this.moneyExchange <= 0)) {
                    r == P.THUNG_PHA_SANH ||
                      r == P.TU_QUY ||
                      r == P.THUNG ||
                      r == P.SANH ||
                      P.CU_LU;
                    this.result_node && (this.result_node.active = !0),
                      d.stopAllByTarget(this.result_node || void 0);
                    var l =
                      null == (t = this.result_node)
                        ? void 0
                        : t.getComponent(b);
                    d.stopAllByTarget(l || void 0);
                    var s =
                        (null == (i = this.result_node)
                          ? void 0
                          : i.position) || m.ZERO,
                      u = new m(s);
                    (u.y = -175),
                      null == (n = this.result_node) || n.setPosition(u);
                    var c = I.getPokerMiniResultString(this.cards);
                    this.lbl_result_text && (this.lbl_result_text.string = c),
                      this.lbl_result_amount &&
                        (this.lbl_result_amount.string =
                          "+" + j.formatNumber(this.moneyExchange));
                    var p =
                      null == (e = this.result_node)
                        ? void 0
                        : e.getComponent(b);
                    p && (p.opacity = 255),
                      this.IsOpened() &&
                        this.win_sfx &&
                        k.getInstance().playAdditionalSfx(this.win_sfx),
                      _(this.result_node)
                        .sequence(
                          _().by(0.3, { position: new m(0, 20, 0) }),
                          _().delay(
                            null != (o = this.tog_fast) && o.isChecked ? 0.5 : 1
                          ),
                          _().call(function () {
                            var t;
                            _(
                              null == (t = a.result_node)
                                ? void 0
                                : t.getComponent(b)
                            )
                              .to(0.3, { opacity: 1 })
                              .start();
                          })
                        )
                        .start();
                  }
                }),
                (i.getInstance = function () {
                  return i.instance;
                }),
                (a.showRank = function () {
                  var t;
                  null == (t = this.miniPokerBetRankView) || t.fetchRank();
                }),
                (a._checkAutoSpin = function () {
                  var t, i;
                  null != (t = this.tog_auto) &&
                    t.isChecked &&
                    null != (i = this.miniPoker_SlotMachineCmp) &&
                    i.isStopped() &&
                    this.spin();
                }),
                (a.spin = function () {
                  var t;
                  this.anim_spin && this.anim_spin.play(),
                    null == (t = this.miniPoker_SlotMachineCmp) || t.spin(),
                    this.requestSpin();
                }),
                (a.IsRespin = function () {
                  return (
                    !!this.node.active &&
                    !this.isHasResult &&
                    null != i.instance &&
                    V.socketState != x.Unlogged
                  );
                }),
                (a.requestSpin = function () {
                  this.moneyExchange = 0;
                  var t = {};
                  (t.cmd = w.SPIN_RESULT),
                    (t.b = this.bet),
                    (t.aid = this._aid);
                  (t.ls = [0]), (t.gid = M.MINIPOKER);
                  var i = [
                    U.ZonePlugin_Type,
                    "MiniGame",
                    "slotMachinePlugin",
                    t,
                  ];
                  S.send(i);
                }),
                (a.stop = function (t) {
                  var i,
                    n = this;
                  null != (i = this.miniPoker_SlotMachineCmp) &&
                    i.isSpinning() &&
                    _(this)
                      .sequence(
                        _().delay(E.TIME_TO_SHOW_RESULT),
                        _().call(function () {
                          var i, e, o;
                          null != (i = n.tog_fast) && i.isChecked
                            ? null == (e = n.miniPoker_SlotMachineCmp) ||
                              e.stopImmediately(t)
                            : null == (o = n.miniPoker_SlotMachineCmp) ||
                              o.stop(t);
                        })
                      )
                      .start();
                }),
                (a.showBetHistory = function () {
                  var t;
                  null == (t = this.miniPokerBetHistoryView) ||
                    t.fetchHistory();
                }),
                (a.receiveData = function (t, i, n, e) {
                  (this._aid = t),
                    (this.cards = n.map(function (t) {
                      var i = new C();
                      return i.decodeCard(t, M.BINH), i;
                    })),
                    (this.moneyExchange = i),
                    (this.wonJackpot = e),
                    this.stop(this.cards);
                }),
                (a.subscribeJackpot = function (t) {
                  void 0 === t && (t = !0);
                  var i = w.SUBSCRIBE_JACKPOT;
                  t || (i = w.UNSUBSCRIBE_JACKPOT);
                  var n = {};
                  (n.cmd = i), (n.gid = M.MINIPOKER);
                  var e = [
                    U.ZonePlugin_Type,
                    "MiniGame",
                    "slotMachinePlugin",
                    n,
                  ];
                  S.send(e);
                }),
                (a.updateJackpot = function (t, i) {
                  void 0 === i && (i = !1), i && (this._jackpotInfos = []);
                  for (var n = 0; n < t.length; n++) {
                    var e = t[n],
                      o = e.J || "",
                      a = e.aid,
                      r = e.b;
                    if (i) {
                      var l = new zt();
                      (l.jackpot = +o || 0),
                        (l.aid = a || 0),
                        (l.bet = r || 0),
                        this._jackpotInfos.push(l);
                    } else
                      for (var s = 0; s < this._jackpotInfos.length; s++)
                        if (
                          this._jackpotInfos[s].aid == a &&
                          this._jackpotInfos[s].bet == r
                        ) {
                          this._jackpotInfos[s].jackpot = +o || 0;
                          break;
                        }
                  }
                  if (i) {
                    for (var u = [], c = 0; c < this._jackpotInfos.length; c++)
                      if (1 == this._jackpotInfos[c].aid) {
                        var p = new zt();
                        (p.jackpot = this._jackpotInfos[c].jackpot),
                          (p.aid = this._jackpotInfos[c].aid),
                          (p.bet = this._jackpotInfos[c].bet),
                          u.push(p);
                      }
                    for (var h = 0; h < this._jackpotInfos.length; h++)
                      if (2 == this._jackpotInfos[h].aid) {
                        var f = new zt();
                        (f.jackpot = this._jackpotInfos[h].jackpot),
                          (f.aid = this._jackpotInfos[h].aid),
                          (f.bet = this._jackpotInfos[h].bet),
                          u.push(f);
                      }
                    for (var _ = 1, d = 0; d < u.length - 1; d++) {
                      for (var b = d + 1; b < u.length; b++)
                        if (
                          u[d].aid == _ &&
                          u[b].aid == _ &&
                          u[b].bet < u[d].bet
                        ) {
                          var m = u[d].bet,
                            k = u[d].jackpot;
                          (u[d].bet = u[b].bet),
                            (u[d].jackpot = u[b].jackpot),
                            (u[b].bet = m),
                            (u[b].jackpot = k),
                            (b = d + 1);
                        }
                      d == u.length - 2 && 1 == _ && ((d = 0), (_ = 2));
                    }
                    this._jackpotInfos = u;
                  }
                  this.updateJackpotLabels(!i);
                }),
                (a.updateJackpotLabels = function (t) {
                  for (var i = this, n = 0; n < this._jackpotInfos.length; n++)
                    if (
                      this._jackpotInfos[n].aid == this._aid &&
                      this._jackpotInfos[n].bet == this.bet
                    ) {
                      var e;
                      if ((null == (e = this.jackpot_tween) || e.stop(), t)) {
                        var o = { a: this.jackpot_amount };
                        (this.jackpot_tween = _(o)
                          .to(
                            2,
                            { a: this._jackpotInfos[n].jackpot },
                            {
                              progress: function (t, n, e, o) {
                                return (
                                  null != i.lblJackpot &&
                                    (i.lblJackpot.string = j.formatNumber(
                                      Math.floor(e)
                                    )),
                                  t + (n - t) * o
                                );
                              },
                            }
                          )
                          .start()),
                          (this.jackpot_amount = this._jackpotInfos[n].jackpot);
                      } else
                        (this.jackpot_amount = this._jackpotInfos[n].jackpot),
                          this.lblJackpot &&
                            (this.lblJackpot.string = j.formatNumber(
                              this.jackpot_amount
                            ));
                      break;
                    }
                }),
                (a.isCanDeactiveRoot = function () {
                  return !0; //!this.tog_auto?.isChecked;
                }),
                (a.IsLiveStreamOverlap = function (i) {
                  return !!t.prototype.IsLiveStreamOverlap.call(this, i);
                }),
                (a.show = function () {
                  var i;
                  return (
                    y.subscribe(),
                    null == (i = v.getInstance()) ||
                      i.bringGameViewToTop(this, !0),
                    t.prototype.show.call(this),
                    !0
                  );
                }),
                (a.hide = function () {
                  (this.isHasResult = !0), t.prototype.hide.call(this);
                }),
                (a.init = function () {
                  t.prototype.init.call(this),
                    t.prototype.hideImmediately.call(this);
                }),
                (a.onDestroy = function () {
                  i.instance = null;
                }),
                (a.update = function (t) {
                  var i;
                  if (
                    this._isHoldingSpin &&
                    ((this._holdSpinTime += t),
                    this._holdSpinTime >= 1 &&
                      (null == (i = this.tog_auto) || !i.isChecked))
                  ) {
                    if (
                      (this.tog_auto && (this.tog_auto.isChecked = !0),
                      this.btn_spin_mini)
                    ) {
                      var n = this.btn_spin_mini.node.children[0];
                      n && (n.active = !0);
                    }
                    this._checkAutoSpin();
                  }
                }),
                i
              );
            })(H)).instance = null),
            (pt = i((ct = Tt).prototype, "lblJackpot", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ht = i(ct.prototype, "miniPokerBetHistoryView", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ft = i(ct.prototype, "miniPokerBetRankView", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_t = i(ct.prototype, "btn_chips", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (dt = i(ct.prototype, "btn_rank", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (bt = i(ct.prototype, "btn_bet_history", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (mt = i(ct.prototype, "btn_help", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (kt = i(ct.prototype, "btn_spin", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (gt = i(ct.prototype, "btn_spin_mini", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (vt = i(ct.prototype, "result_node", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (yt = i(ct.prototype, "lbl_result_text", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (wt = i(ct.prototype, "lbl_result_amount", [$], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (St = i(ct.prototype, "miniPoker_SlotMachineCmp", [tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Mt = i(ct.prototype, "anim_spin", [it], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (It = i(ct.prototype, "tog_auto", [nt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pt = i(ct.prototype, "tog_fast", [et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ct = i(ct.prototype, "miniPokerNoHuView", [ot], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (jt = i(ct.prototype, "loaded_card_normal", [at], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Ht = i(ct.prototype, "loaded_card_blur", [rt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Rt = i(ct.prototype, "win_sfx", [lt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Nt = i(ct.prototype, "commonInfoPopup", [st], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ut = ct))
          ) || ut)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniPokerInfoView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CommonPopup.ts"],
  function (n) {
    "use strict";
    var o, e, i, t;
    return {
      setters: [
        function (n) {
          o = n.inheritsLoose;
        },
        function (n) {
          (e = n.cclegacy), (i = n._decorator);
        },
        function (n) {
          t = n.CommonPopup;
        },
      ],
      execute: function () {
        var r;
        e._RF.push({}, "b21fd8Bc9ZLPYHTM49nX2Vw", "MiniPokerInfoView", void 0);
        var c = i.ccclass;
        n(
          "default",
          c("MiniPokerInfoView")(
            (r = (function (n) {
              function e() {
                return n.apply(this, arguments) || this;
              }
              return o(e, n), e;
            })(t))
          ) || r
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniPokerMessageHandler.ts",
  [
    "cc",
    "./MiniPokerGameView.ts",
    "./Define.ts",
    "./MiniGameNetworkHandler.ts",
    "./EventManager.ts",
    "./SocketManager.ts",
  ],
  function (e) {
    "use strict";
    var n, a, t, s, i, u, r, l, o;
    return {
      setters: [
        function (e) {
          (n = e.cclegacy), (a = e._decorator);
        },
        function (e) {
          t = e.default;
        },
        function (e) {
          s = e.GameID;
        },
        function (e) {
          i = e.MiniGameNetworkHandler;
        },
        function (e) {
          (u = e.eventManager), (r = e.subEventKey), (l = e.EventKey);
        },
        function (e) {
          o = e.MessageRequest;
        },
      ],
      execute: function () {
        var c, P;
        e("MiniPoker_Message", void 0),
          n._RF.push(
            {},
            "c2407D428pC6KFaPumY7Xxk",
            "MiniPokerMessageHandler",
            void 0
          );
        var E,
          S = a.ccclass;
        !(function (e) {
          (e[(e.SPIN_RESULT = 1302)] = "SPIN_RESULT"),
            (e[(e.UPDATE_JACKPOT = 1304)] = "UPDATE_JACKPOT"),
            (e[(e.SUBSCRIBE_JACKPOT = 1300)] = "SUBSCRIBE_JACKPOT"),
            (e[(e.UNSUBSCRIBE_JACKPOT = 1301)] = "UNSUBSCRIBE_JACKPOT"),
            (e[(e.AUTO_SPIN = 1303)] = "AUTO_SPIN"),
            (e[(e.CANCEL_AUTO_SPIN = 1305)] = "CANCEL_AUTO_SPIN"),
            (e[(e.SPIN_FREE = 1308)] = "SPIN_FREE");
        })(E || (E = e("MiniPoker_Message", {})));
        e(
          "default",
          S("MiniPokerMessageHandler")(
            (((P = (function () {
              function e() {}
              return (
                (e.subscribe = function (e) {
                  void 0 === e && (e = !0);
                  var n = E.SUBSCRIBE_JACKPOT;
                  e || (n = E.UNSUBSCRIBE_JACKPOT);
                  var a = {};
                  (a.cmd = n), (a.gid = s.MINIPOKER);
                  var t = [
                    o.ZonePlugin_Type,
                    "MiniGame",
                    "slotMachinePlugin",
                    a,
                  ];
                  i.send(t);
                }),
                (e.handleMessage = function (n) {
                  var a = t.getInstance(),
                    i = n[1],
                    o = i.cmd;
                  if (o == E.SPIN_RESULT) {
                    if (null != i.mgs && null != i.mgs) {
                      var c = i.mgs;
                      return void (
                        null == e.onResultError || e.onResultError(c)
                      );
                    }
                    var P = i.sbs || [],
                      S = i.aid || 0,
                      _ = i.mX || 0,
                      d = i.iJ || 0;
                    null != a && null != a && a.receiveData(S, _, P, d);
                  } else if (o == E.UPDATE_JACKPOT) {
                    var v = i.Js || [];
                    null != a && null != a && a.updateJackpot(v);
                    var I = [];
                    I.push(v[0].J || 0),
                      I.push(v[1].J || 0),
                      I.push(v[v.length > 3 ? 3 : 2].J || 0),
                      u.emit(r(l.JackpotUpdateGame, "%gameID", s.MINIPOKER), I);
                  } else if (o == E.SUBSCRIBE_JACKPOT) {
                    var g = i.Js;
                    i.as;
                    null != i.asb && null != i.abs && (i.asb, i.asaid),
                      null != a && null != a && a.updateJackpot(g || [], !0);
                    var J = [];
                    J.push((null == g ? void 0 : g[0].J) || 0),
                      J.push((null == g ? void 0 : g[1].J) || 0),
                      J.push(
                        (null == g ? void 0 : g[g.length > 3 ? 3 : 2].J) || 0
                      ),
                      u.emit(r(l.JackpotUpdateGame, "%gameID", s.MINIPOKER), J);
                  }
                }),
                e
              );
            })()).onResultError = function (e) {}),
            (c = P))
          ) || c
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniPokerNoHuView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SoundManager.ts",
    "./GameConfigManager.ts",
    "./StringUtils.ts",
    "./BlinkCmp.ts",
    "./MiniPokerGameView.ts",
    "./EventManager.ts",
  ],
  function (n) {
    "use strict";
    var e, t, i, o, r, a, l, u, c, s, d, h, f, p, g, _, v, b, w, y, m, k;
    return {
      setters: [
        function (n) {
          (e = n.applyDecoratedDescriptor),
            (t = n.inheritsLoose),
            (i = n.initializerDefineProperty),
            (o = n.assertThisInitialized);
        },
        function (n) {
          (r = n.cclegacy),
            (a = n._decorator),
            (l = n.Node),
            (u = n.Sprite),
            (c = n.Label),
            (s = n.AudioClip),
            (d = n.Tween),
            (h = n.Vec3),
            (f = n.UIOpacity),
            (p = n.tween),
            (g = n.Component);
        },
        function (n) {
          _ = n.SoundManager;
        },
        function (n) {
          v = n.GameConfigManager;
        },
        function (n) {
          b = n.StringUtils;
        },
        function (n) {
          w = n.default;
        },
        function (n) {
          y = n.default;
        },
        function (n) {
          (m = n.eventManager), (k = n.EventKey);
        },
      ],
      execute: function () {
        var M, x, F, B, z, H, P, A, C, N, T, S, L, q, E, O, V, G, I, R, D;
        r._RF.push({}, "0a562Qz3ipPrLTN2uGLq05A", "MiniPokerNoHuView", void 0);
        var U = a.ccclass,
          j = a.property;
        n(
          "default",
          ((M = U("MiniPokerNoHuView")),
          (x = j(l)),
          (F = j(l)),
          (B = j(u)),
          (z = j(w)),
          (H = j(u)),
          (P = j(c)),
          (A = j(l)),
          (C = j([u])),
          (N = j(s)),
          M(
            ((L = e(
              (S = (function (n) {
                function e() {
                  for (
                    var e, t = arguments.length, r = new Array(t), a = 0;
                    a < t;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = n.call.apply(n, [this].concat(r)) || this),
                    i(e, "root", L, o(e)),
                    i(e, "black_screen", q, o(e)),
                    i(e, "noHuMoneyBg", E, o(e)),
                    i(e, "glow", O, o(e)),
                    i(e, "finishFx", V, o(e)),
                    i(e, "nohu_win_amount", G, o(e)),
                    i(e, "card_node", I, o(e)),
                    i(e, "spr_cards", R, o(e)),
                    i(e, "nohu_bgm", D, o(e)),
                    (e.win_amount_tween = null),
                    (e.activated_click = !1),
                    e
                  );
                }
                t(e, n);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    var n,
                      e = this;
                    null == (n = this.black_screen) ||
                      n.on("click", function () {
                        e.activated_click && e.hide();
                      });
                  }),
                  (r.activeClick = function () {
                    this.black_screen && (this.black_screen.active = !0),
                      (this.activated_click = !0);
                  }),
                  (r.show = function (n, e) {
                    var t,
                      i,
                      o,
                      r,
                      a,
                      l,
                      u,
                      c,
                      s,
                      g,
                      v,
                      w = this;
                    this.card_node && (this.card_node.active = !1),
                      _.getInstance().playBgm(this.nohu_bgm),
                      this.root && (this.root.active = !0),
                      this.black_screen && (this.black_screen.active = !0),
                      (this.activated_click = !1),
                      d.stopAllByTarget(
                        null == (t = this.noHuMoneyBg) ? void 0 : t.node
                      ),
                      d.stopAllByTarget(
                        null == (i = this.finishFx) ? void 0 : i.node
                      ),
                      d.stopAllByTarget(
                        null == (o = this.glow) ? void 0 : o.node
                      ),
                      d.stopAllByTarget(this.card_node || void 0),
                      null == (r = this.win_amount_tween) || r.stop(),
                      this.finishFx && (this.finishFx.node.active = !1),
                      null == (a = this.finishFx) ||
                        a.node.setScale(new h(3, 3, 3));
                    var m =
                      null == (l = this.finishFx)
                        ? void 0
                        : l.node.getComponent(f);
                    m && (m.opacity = 255),
                      p(null == (u = this.finishFx) ? void 0 : u.node)
                        .sequence(
                          p().delay(0.4),
                          p().call(function () {
                            w.finishFx && (w.finishFx.node.active = !0);
                          }),
                          p().to(0.3, { scale: h.ONE }),
                          p().call(function () {
                            var e;
                            n.forEach(function (n, e) {
                              var t,
                                i = n.getResourceName();
                              w.spr_cards &&
                                (w.spr_cards[e].spriteFrame =
                                  (null == (t = y.getInstance())
                                    ? void 0
                                    : t.loaded_card_normal.filter(function (n) {
                                        return n.name.indexOf(i) >= 0;
                                      })[0]) || null);
                            }),
                              null == (e = w.card_node) ||
                                e.setPosition(new h(36, 255, 0)),
                              w.card_node && (w.card_node.active = !0);
                          })
                        )
                        .start();
                    var k =
                        (null == (c = this.noHuMoneyBg)
                          ? void 0
                          : c.node.position) || h.ZERO,
                      M = new h(k);
                    (M.y = -485),
                      null == (s = this.noHuMoneyBg) || s.node.setPosition(M),
                      p(null == (g = this.noHuMoneyBg) ? void 0 : g.node)
                        .sequence(
                          p().delay(0.6),
                          p().to(0.3, { position: new h(0, -260, 0) })
                        )
                        .start(),
                      null == (v = this.glow) || v.run();
                    this.win_amount_tween = p({ a: 0 })
                      .to(
                        2,
                        { a: e },
                        {
                          progress: function (n, e, t, i) {
                            return (
                              w.nohu_win_amount &&
                                (w.nohu_win_amount.string = b.formatNumber(
                                  Math.floor(t)
                                )),
                              n + (e - n) * i
                            );
                          },
                        }
                      )
                      .call(function () {
                        w.nohu_win_amount &&
                          (w.nohu_win_amount.string = b.formatNumber(
                            Math.floor(e)
                          ));
                      })
                      .start();
                    var x = this.node.getComponent(f);
                    x && (x.opacity = 255);
                  }),
                  (r.hide = function () {
                    var n,
                      e,
                      t,
                      i,
                      o,
                      r,
                      a = this;
                    this.black_screen && (this.black_screen.active = !1),
                      (this.activated_click = !1),
                      d.stopAllByTarget(
                        (null == (n = this.noHuMoneyBg) ? void 0 : n.node) ||
                          void 0
                      ),
                      d.stopAllByTarget(
                        (null == (e = this.finishFx) ? void 0 : e.node) ||
                          void 0
                      ),
                      null == (t = this.glow) || t.stop(),
                      p(null == (i = this.finishFx) ? void 0 : i.node)
                        .sequence(
                          p().to(0.3, { scale: new h(3, 3, 3) }),
                          p().call(function () {
                            a.finishFx && (a.finishFx.node.active = !1),
                              a.root && (a.root.active = !1),
                              m.emitLast(k.MusicPlay);
                          })
                        )
                        .start(),
                      p(
                        null == (o = this.finishFx)
                          ? void 0
                          : o.node.getComponent(f)
                      )
                        .to(0.3, { opacity: 1 })
                        .start(),
                      p(null == (r = this.noHuMoneyBg) ? void 0 : r.node)
                        .sequence(
                          p().call(function () {}),
                          p().to(0.3, { position: new h(0, -485, 0) })
                        )
                        .start(),
                      p(this.card_node)
                        .to(
                          0.3,
                          { position: new h(36, v.getSizeHeight(), 0) },
                          { easing: "expoOut" }
                        )
                        .call(function () {
                          a.card_node && (a.card_node.active = !1);
                        })
                        .start();
                  }),
                  e
                );
              })(g)).prototype,
              "root",
              [x],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (q = e(S.prototype, "black_screen", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = e(S.prototype, "noHuMoneyBg", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = e(S.prototype, "glow", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = e(S.prototype, "finishFx", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = e(S.prototype, "nohu_win_amount", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(S.prototype, "card_node", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = e(S.prototype, "spr_cards", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (D = e(S.prototype, "nohu_bgm", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = S))
          ) || T)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniTet_SlotMachineCmp.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MiniTet_SlotMachineColumn.ts",
  ],
  function (t) {
    "use strict";
    var n, e, i, o, c, r, u, s, l, a;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (c = t.cclegacy),
            (r = t._decorator),
            (u = t.tween),
            (s = t.Component);
        },
        function (t) {
          (l = t.default), (a = t.SlotMachineState);
        },
      ],
      execute: function () {
        var p, f, h, m, S, d;
        c._RF.push(
          {},
          "033e1ZazEtD3Z9b/ZHHHYNw",
          "MiniTet_SlotMachineCmp",
          void 0
        );
        var g = r.ccclass,
          M = r.property;
        t(
          "IconTet",
          (function () {
            function t() {
              this.code = 0;
            }
            return (
              (t.prototype.getResourceName = function () {
                return this.code;
              }),
              t
            );
          })()
        ),
          t(
            "default",
            ((p = g("MiniTet_SlotMachineCmp")),
            (f = M([l])),
            p(
              (((d = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, c = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    c[r] = arguments[r];
                  return (
                    (n = t.call.apply(t, [this].concat(c)) || this),
                    i(n, "colums", S, o(n)),
                    (n.onMachineStopped = function () {}),
                    n
                  );
                }
                e(n, t);
                var c = n.prototype;
                return (
                  (c.init = function () {
                    var t = this;
                    this.colums.forEach(function (t) {
                      return t.init();
                    }),
                      (this.colums[this.colums.length - 1].onStopped =
                        function () {
                          return t.onMachineStopped();
                        });
                  }),
                  (c.spin = function () {
                    this.colums.forEach(function (t) {
                      return t.spin();
                    });
                  }),
                  (c.stop = function (t) {
                    var n = [0, 0.6, 1.2, 2, 3];
                    this.colums.forEach(function (e, i) {
                      var o = e,
                        c = t[i];
                      u(o.node)
                        .sequence(
                          u().delay(n[i]),
                          u().call(function () {
                            o.stop(c);
                          })
                        )
                        .start();
                    });
                  }),
                  (c.stopImmediately = function (t) {
                    this.colums.forEach(function (n, e) {
                      n.stop(t[e]);
                    });
                  }),
                  (c.isStopped = function () {
                    return (
                      this.colums.filter(function (t) {
                        return t.getstate() == a.STOPPED;
                      }).length >= this.colums.length
                    );
                  }),
                  (c.isSpinning = function () {
                    return (
                      this.colums.filter(function (t) {
                        return t.getstate() == a.SPINNING;
                      }).length >= this.colums.length
                    );
                  }),
                  n
                );
              })(s)).SPIN_SPEED = 1e3),
              (d.TIME_TO_SHOW_RESULT = 0.05),
              (S = n((m = d).prototype, "colums", [f], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              })),
              (h = m))
            ) || h)
          );
        c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniTet_SlotMachineColumn.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MiniTet_SlotMachineCmp.ts",
    "./MiniTet_SlotMachineItemView.ts",
  ],
  function (t) {
    "use strict";
    var i, o, n, e, s, p, a, r, h, c, u, _, m;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (p = t._decorator),
            (a = t.Layout),
            (r = t.UITransform),
            (h = t.Vec3),
            (c = t.tween),
            (u = t.Component);
        },
        function (t) {
          _ = t.default;
        },
        function (t) {
          m = t.default;
        },
      ],
      execute: function () {
        var l, y, f, d, S, v, P;
        t("SlotMachineState", void 0),
          s._RF.push(
            {},
            "8f6acqg8/5FkpvzNZmvf/Vc",
            "MiniTet_SlotMachineColumn",
            void 0
          );
        var T,
          g = p.ccclass,
          E = p.property;
        !(function (t) {
          (t[(t.SPINNING = 0)] = "SPINNING"),
            (t[(t.CHECK_TO_STOP = 1)] = "CHECK_TO_STOP"),
            (t[(t.STOPPING = 2)] = "STOPPING"),
            (t[(t.STOPPED = 3)] = "STOPPED");
        })(T || (T = t("SlotMachineState", {})));
        t(
          "default",
          ((l = g("MiniTet_SlotMachineColumn")),
          (y = E([m])),
          (f = E(a)),
          l(
            ((v = i(
              (S = (function (t) {
                function i() {
                  for (
                    var i, o = arguments.length, s = new Array(o), p = 0;
                    p < o;
                    p++
                  )
                    s[p] = arguments[p];
                  return (
                    (i = t.call.apply(t, [this].concat(s)) || this),
                    n(i, "items", v, e(i)),
                    n(i, "layout", P, e(i)),
                    (i.state = T.STOPPED),
                    (i.item_position_y_limited = 0),
                    (i.item_position_y_top = 0),
                    (i.item_position_y_bottom = 0),
                    (i.item_position_y_stop = 0),
                    (i.item_top = null),
                    (i.onStopped = function () {}),
                    i
                  );
                }
                o(i, t);
                var s = i.prototype;
                return (
                  (s.onLoad = function () {
                    var t, i, o;
                    (this.item_position_y_bottom =
                      this.items[0].node.position.y),
                      (this.item_position_y_stop =
                        this.item_position_y_bottom -
                        ((null == (t = this.items[0].node.getComponent(r))
                          ? void 0
                          : t.contentSize.height) || 0) /
                          20),
                      (this.item_position_y_top =
                        this.items[this.items.length - 1].node.position.y),
                      (this.item_position_y_limited =
                        this.item_position_y_bottom -
                        ((null == (i = this.items[0].node.getComponent(r))
                          ? void 0
                          : i.contentSize.height) || 0) -
                        ((null == (o = this.layout) ? void 0 : o.spacingY) ||
                          0));
                  }),
                  (s.init = function () {
                    (this.state = T.STOPPED),
                      this.items.forEach(function (t) {
                        return t.init();
                      });
                  }),
                  (s.spin = function () {
                    (this.item_top = this.getTopItem()),
                      this.items.forEach(function (t) {
                        return t.blur();
                      }),
                      (this.state = T.SPINNING);
                  }),
                  (s.stop = function (t) {
                    (this.item_top = this.getTopItem()),
                      this.item_top.setCard(t),
                      this.item_top.bright(),
                      (this.state = T.CHECK_TO_STOP);
                  }),
                  (s.getstate = function () {
                    return this.state;
                  }),
                  (s.update = function (t) {
                    switch (this.state) {
                      case T.SPINNING:
                        this.spinning(t);
                        break;
                      case T.CHECK_TO_STOP:
                        this.checkToStop(t);
                    }
                  }),
                  (s.getTopItem = function () {
                    var t = this.items[0];
                    return (
                      this.items.forEach(function (i) {
                        i.node.position.y >= t.node.position.y && (t = i);
                      }),
                      t
                    );
                  }),
                  (s.getBottomItem = function () {
                    var t = this.items[0];
                    return (
                      this.items.forEach(function (i) {
                        i.node.position.y < t.node.position.y && (t = i);
                      }),
                      t
                    );
                  }),
                  (s.spinning = function (t) {
                    var i = this,
                      o = !1;
                    this.items.forEach(function (n) {
                      var e = new h(n.node.position);
                      (e.y -= _.SPIN_SPEED * t),
                        e.y <= i.item_position_y_limited &&
                          ((e.y = i.item_position_y_top),
                          (i.item_top = n),
                          (o = !0)),
                        (n.node.position = e);
                    }),
                      o && this.sort();
                  }),
                  (s.sort = function () {
                    this.items = this.items.sort(function (t, i) {
                      return t.node.position.y < i.node.position.y ? -1 : 1;
                    });
                  }),
                  (s.checkToStop = function (t) {
                    var i,
                      o = this;
                    this.items.forEach(function (i) {
                      var n = new h(i.node.position);
                      (n.y -= _.SPIN_SPEED * t),
                        n.y <= o.item_position_y_limited &&
                          (n.y = o.item_position_y_top),
                        (i.node.position = n);
                    }),
                      ((null == (i = this.item_top)
                        ? void 0
                        : i.node.position.y) || 0) <=
                        this.item_position_y_stop &&
                        (this.bounce(), (this.state = T.STOPPING));
                  }),
                  (s.bounce = function () {
                    var t,
                      i = this;
                    this.sort();
                    var o = new h(
                      (null == (t = this.item_top)
                        ? void 0
                        : t.node.position) || h.ZERO
                    );
                    (o.y = this.item_position_y_stop),
                      this.item_top && (this.item_top.node.position = o),
                      this.items.forEach(function (t, o) {
                        var n;
                        if (
                          t.name != (null == (n = i.item_top) ? void 0 : n.name)
                        ) {
                          var e,
                            s,
                            p,
                            a,
                            c = new h(t.node.position);
                          if (0 == o)
                            c.y =
                              i.items[o + 1].node.position.y -
                              (((null == (e = i.layout)
                                ? void 0
                                : e.spacingY) || 0) +
                                ((null ==
                                (s = i.items[o + 1].node.getComponent(r))
                                  ? void 0
                                  : s.contentSize.height) || 0));
                          else
                            c.y =
                              i.items[o - 1].node.position.y +
                              ((null == (p = i.layout) ? void 0 : p.spacingY) ||
                                0) +
                              ((null ==
                              (a = i.items[o - 1].node.getComponent(r))
                                ? void 0
                                : a.contentSize.height) || 0);
                          t.node.position = c;
                        }
                      });
                    var n = Math.abs(
                      Math.abs(this.item_position_y_stop) -
                        Math.abs(this.item_position_y_bottom)
                    );
                    this.items.forEach(function (t) {
                      c(t.node)
                        .sequence(
                          c().by(0.1, { position: new h(0, n, 0) }),
                          c().call(function () {
                            (i.state = T.STOPPED), i.onStopped();
                          })
                        )
                        .start();
                    });
                  }),
                  i
                );
              })(u)).prototype,
              "items",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (P = i(S.prototype, "layout", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = S))
          ) || d)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MiniTet_SlotMachineItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameUtils.ts",
    "./TetGameView.ts",
    "./MiniTet_SlotMachineCmp.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, r, l, o, a, c, u, s, d;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy),
            (o = e._decorator),
            (a = e.Sprite),
            (c = e.Component);
        },
        function (e) {
          u = e.default;
        },
        function (e) {
          s = e.default;
        },
        function (e) {
          d = e.IconTet;
        },
      ],
      execute: function () {
        var f, p, m, h, _, g, v;
        l._RF.push(
          {},
          "c93571IpnJCf6X1CFmwB9dR",
          "MiniTet_SlotMachineItemView",
          void 0
        );
        var b = o.ccclass,
          w = o.property;
        e(
          "default",
          ((f = b("MiniTet_SlotMachineItemView")),
          (p = w(a)),
          (m = w(Number)),
          f(
            ((g = t(
              (_ = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, l = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    l[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(l)) || this),
                    n(t, "spr_item", g, r(t)),
                    n(t, "default_code", v, r(t)),
                    (t.card = null),
                    t
                  );
                }
                i(t, e);
                var l = t.prototype;
                return (
                  (l.init = function () {
                    var e;
                    (this.card = new d()),
                      (this.card.code = u.getRandomInt(
                        1,
                        (null == (e = s.getInstance())
                          ? void 0
                          : e.loaded_icon_normal.length) || 0
                      )),
                      this.bright();
                  }),
                  (l.setCard = function (e) {
                    this.card = null != e ? e : new d();
                  }),
                  (l.blur = function () {
                    var e,
                      t,
                      i =
                        (null == (e = this.card)
                          ? void 0
                          : e.getResourceName()) + "_blur";
                    this.spr_item &&
                      (this.spr_item.spriteFrame =
                        (null == (t = s.getInstance())
                          ? void 0
                          : t.loaded_icon_blur.filter(function (e) {
                              return e.name.indexOf(i) >= 0;
                            })[0]) || null);
                  }),
                  (l.bright = function () {
                    var e,
                      t,
                      i =
                        null == (e = this.card) ? void 0 : e.getResourceName();
                    this.spr_item &&
                      (this.spr_item.spriteFrame =
                        (null == (t = s.getInstance())
                          ? void 0
                          : t.loaded_icon_normal.filter(function (e) {
                              return e.name.indexOf(i + "") >= 0;
                            })[0]) || null);
                  }),
                  t
                );
              })(c)).prototype,
              "spr_item",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (v = t(_.prototype, "default_code", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (h = _))
          ) || h)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SpinButtonCmp.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var n, i, r, e, o, s, p, u, l, a;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (s = t._decorator),
            (p = t.SpriteFrame),
            (u = t.Button),
            (l = t.Sprite),
            (a = t.Component);
        },
      ],
      execute: function () {
        var c, h, b, f, m, v, d, _, y;
        o._RF.push({}, "917962MWehHtpoEbCxiB05W", "SpinButtonCmp", void 0);
        var S = s.ccclass,
          g = s.property;
        t(
          "default",
          ((c = S("SpinButtonCmp")),
          (h = g(p)),
          (b = g(p)),
          (f = g(u)),
          c(
            ((d = n(
              (v = (function (t) {
                function n() {
                  for (
                    var n, i = arguments.length, o = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (n = t.call.apply(t, [this].concat(o)) || this),
                    r(n, "spr_spin", d, e(n)),
                    r(n, "spr_stop", _, e(n)),
                    r(n, "button", y, e(n)),
                    (n.spr = null),
                    (n.onSpin = function () {}),
                    (n.onStop = function () {}),
                    n
                  );
                }
                i(n, t);
                var o = n.prototype;
                return (
                  (o.onLoad = function () {
                    var t;
                    this.spr =
                      (null == (t = this.button)
                        ? void 0
                        : t.target.getComponent(l)) || null;
                  }),
                  (o.reset = function () {
                    this.spr && (this.spr.spriteFrame = this.spr_spin),
                      this.button && (this.button.interactable = !0);
                  }),
                  (o.press = function () {
                    var t, n, i, r, e, o;
                    (null == (t = this.spr) || null == (n = t.spriteFrame)
                      ? void 0
                      : n.name) ==
                    (null == (i = this.spr_spin) ? void 0 : i.name)
                      ? (this.spr && (this.spr.spriteFrame = this.spr_stop),
                        this.onSpin())
                      : (null == (r = this.spr) || null == (e = r.spriteFrame)
                          ? void 0
                          : e.name) ==
                          (null == (o = this.spr_stop) ? void 0 : o.name) &&
                        (this.onStop(),
                        this.button && (this.button.interactable = !1));
                  }),
                  (o.isStop = function () {
                    var t, n, i, r;
                    return (
                      (null == (t = this.spr) || null == (n = t.spriteFrame)
                        ? void 0
                        : n.name) ==
                        (null == (i = this.spr_stop) ? void 0 : i.name) &&
                      0 == (null == (r = this.button) ? void 0 : r.interactable)
                    );
                  }),
                  n
                );
              })(a)).prototype,
              "spr_spin",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (_ = n(v.prototype, "spr_stop", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = n(v.prototype, "button", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = v))
          ) || m)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuBetHistoryItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var i, e, n, a, r, _, u, o, c, l, h;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (_ = t._decorator),
            (u = t.Label),
            (o = t.RichText),
            (c = t.Color),
            (l = t.Component);
        },
        function (t) {
          h = t.StringUtils;
        },
      ],
      execute: function () {
        var s,
          p,
          x,
          d,
          b,
          f,
          v,
          g,
          m,
          E,
          M,
          y,
          N,
          B,
          w,
          I,
          R,
          z,
          T,
          U,
          k,
          D,
          q,
          C,
          F,
          L,
          P,
          A,
          H;
        r._RF.push(
          {},
          "d89fb1VcehKh54M7zMGytZ3",
          "TaiXiuBetHistoryItemView",
          void 0
        );
        var S = _.ccclass,
          V = _.property;
        t(
          "default",
          ((s = S("TaiXiuBetHistoryItemView")),
          (p = V(u)),
          (x = V(u)),
          (d = V(u)),
          (b = V(u)),
          (f = V(u)),
          (v = V(u)),
          (g = V(u)),
          (m = V(u)),
          (E = V(o)),
          (M = V(u)),
          (y = V(u)),
          (N = V(u)),
          (B = V(Boolean)),
          s(
            ((R = i(
              (I = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, r = new Array(e), _ = 0;
                    _ < e;
                    _++
                  )
                    r[_] = arguments[_];
                  return (
                    (i = t.call.apply(t, [this].concat(r)) || this),
                    n(i, "txt_phien_title", R, a(i)),
                    n(i, "txt_phien_time", z, a(i)),
                    n(i, "txt_title_cuadat_tai", T, a(i)),
                    n(i, "txt_phien_cuadat_tai", U, a(i)),
                    n(i, "txt_title_cuadat_xiu", k, a(i)),
                    n(i, "txt_phien_cuadat_xiu", D, a(i)),
                    n(i, "txt_phien_ketqua", q, a(i)),
                    n(i, "txt_phien_tienthang", C, a(i)),
                    n(i, "richTxt_cuadat", F, a(i)),
                    n(i, "txt_cuoc", L, a(i)),
                    n(i, "txt_tra", P, a(i)),
                    n(i, "txt_ketqua", A, a(i)),
                    n(i, "is_portrait", H, a(i)),
                    (i.EID_MAPPING_NAME = {
                      EVEN: "Chẵn",
                      ODD: "Lẻ",
                      BIG: "Tài",
                      SMALL: "Xỉu",
                      DICE_TRIPLE: "Bộ ba",
                      NUMBER_4: "Ô 4",
                      NUMBER_5: "Ô 5",
                      NUMBER_6: "Ô 6",
                      NUMBER_7: "Ô 7",
                      NUMBER_8: "Ô 8",
                      NUMBER_9: "Ô 9",
                      NUMBER_10: "Ô 10",
                      NUMBER_11: "Ô 11",
                      NUMBER_12: "Ô 12",
                      NUMBER_13: "Ô 13",
                      NUMBER_14: "Ô 14",
                      NUMBER_15: "Ô 15",
                      NUMBER_16: "Ô 16",
                      NUMBER_17: "Ô 17",
                      DICE_1: "Mặt 1",
                      DICE_2: "Mặt 2",
                      DICE_3: "Mặt 3",
                      DICE_4: "Mặt 4",
                      DICE_5: "Mặt 5",
                      DICE_6: "Mặt 6",
                    }),
                    i
                  );
                }
                e(i, t);
                var r = i.prototype;
                return (
                  (r.show = function (t, i, e, n, a, r, _, u, o, l, s, p, x) {
                    var d = this;
                    if (
                      (void 0 === s && (s = -1),
                      void 0 === p && (p = 7),
                      void 0 === x && (x = !1),
                      (this.txt_phien_title.string = "#" + t),
                      (this.txt_phien_time.string = i),
                      this.richTxt_cuadat)
                    ) {
                      var b = "";
                      o.forEach(function (t, i) {
                        var e =
                          "<color=#FFFFFF>{value1} :</color><color=#FFF25C> {value2}</color>".replace(
                            "{value1}",
                            d.EID_MAPPING_NAME[t.eid]
                          );
                        (e = e.replace("{value2}", h.formatMoneyNumber(t.b))),
                          (b += e + (i < o.length - 1 ? ", " : "")),
                          i > 0 && (i + 1) % p == 0 && (b += "\n");
                      }),
                        (this.richTxt_cuadat.fontSize =
                          o.length > 10 ? 18 : 20),
                        (this.richTxt_cuadat.string = b),
                        (this.richTxt_cuadat.node.active = !0);
                    } else
                      (this.txt_title_cuadat_tai.node.active = _ > 0),
                        (this.txt_phien_cuadat_tai.node.active = _ > 0),
                        (this.txt_title_cuadat_xiu.node.active = u > 0),
                        (this.txt_phien_cuadat_xiu.node.active = u > 0),
                        (this.txt_phien_cuadat_tai.string = h.formatNumber(_)),
                        (this.txt_phien_cuadat_xiu.string = h.formatNumber(u));
                    var f =
                      "(" +
                      (n + a + r > 10 ? "Tài" : "Xỉu") +
                      "-" +
                      ((n + a + r) % 2 == 0 ? "Chẵn" : "Lẻ") +
                      ")";
                    if (((f = (x ? "\n" : "") + f), 1 == s))
                      this.txt_phien_ketqua.string =
                        null == n ? "Chờ kết quả" : n + "-" + a + "-" + r + f;
                    else {
                      var v = "";
                      2 == s
                        ? (v = "Đã Huỷ")
                        : 3 == s &&
                          (v = n + "-" + a + "-" + r + " " + f + "\n(Đã Đổi)"),
                        (this.txt_phien_ketqua.string = v);
                    }
                    (this.txt_phien_tienthang.color = c.WHITE),
                      (this.txt_phien_tienthang.string =
                        (l < 0 ? "-" : "") + h.formatNumber(l)),
                      (this.txt_phien_title.node.active = !0),
                      (this.txt_phien_time.node.active = !0),
                      (this.txt_phien_ketqua.node.active = !0),
                      (this.txt_phien_tienthang.node.active = !0),
                      this.is_portrait &&
                        (this.txt_cuoc && (this.txt_cuoc.node.active = !0),
                        this.txt_tra && (this.txt_tra.node.active = !0),
                        this.txt_ketqua && (this.txt_ketqua.node.active = !0));
                  }),
                  (r.hide = function () {
                    (this.txt_phien_title.node.active = !1),
                      (this.txt_phien_time.node.active = !1),
                      (this.txt_phien_ketqua.node.active = !1),
                      (this.txt_phien_tienthang.node.active = !1),
                      null != this.txt_title_cuadat_tai &&
                        ((this.txt_title_cuadat_tai.node.active = !1),
                        (this.txt_title_cuadat_xiu.node.active = !1),
                        (this.txt_phien_cuadat_tai.node.active = !1),
                        (this.txt_phien_cuadat_xiu.node.active = !1)),
                      this.richTxt_cuadat &&
                        (this.richTxt_cuadat.node.active = !1),
                      this.is_portrait &&
                        (this.txt_cuoc && (this.txt_cuoc.node.active = !1),
                        this.txt_tra && (this.txt_tra.node.active = !1),
                        this.txt_ketqua && (this.txt_ketqua.node.active = !1));
                  }),
                  i
                );
              })(l)).prototype,
              "txt_phien_title",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (z = i(I.prototype, "txt_phien_time", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = i(I.prototype, "txt_title_cuadat_tai", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = i(I.prototype, "txt_phien_cuadat_tai", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = i(I.prototype, "txt_title_cuadat_xiu", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = i(I.prototype, "txt_phien_cuadat_xiu", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = i(I.prototype, "txt_phien_ketqua", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = i(I.prototype, "txt_phien_tienthang", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = i(I.prototype, "richTxt_cuadat", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = i(I.prototype, "txt_cuoc", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = i(I.prototype, "txt_tra", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = i(I.prototype, "txt_ketqua", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = i(I.prototype, "is_portrait", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (w = I))
          ) || w)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuBetHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./TaiXiuBetHistoryItemView.ts",
    "./CommonPopup.ts",
    "./StringUtils.ts",
    "./PersistManager.ts",
    "./TaiXiuData.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, r, s, o, a, l, u, c, h, g, p, b;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (o = t._decorator),
            (a = t.Button),
            (l = t.Label),
            (u = t.UIOpacity);
        },
        function (t) {
          c = t.default;
        },
        function (t) {
          h = t.CommonPopup;
        },
        function (t) {
          g = t.StringUtils;
        },
        function (t) {
          p = t.PersistManager;
        },
        function (t) {
          b = t.TaiXiuBetResult;
        },
      ],
      execute: function () {
        var f, _, m, d, v, w, y, x, P, B, S, T, H;
        s._RF.push(
          {},
          "de8fbuzaq1Fwo3aar11ArP2",
          "TaiXiuBetHistoryView",
          void 0
        );
        var z = o.ccclass,
          D = o.property;
        t(
          "default",
          ((f = z("TaiXiuBetHistoryView")),
          (_ = D([c])),
          (m = D(a)),
          (d = D(a)),
          (v = D(l)),
          (w = D(Boolean)),
          f(
            ((P = e(
              (x = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    s[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    n(e, "item_views", P, r(e)),
                    n(e, "btn_prev", B, r(e)),
                    n(e, "btn_next", S, r(e)),
                    n(e, "lbl_page", T, r(e)),
                    n(e, "is_txlivestream", H, r(e)),
                    (e._bets = []),
                    (e.currentPage = 1),
                    (e.max_item = 6),
                    (e.max_pages = 500),
                    e
                  );
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.getPagesCount = function () {
                    return this.is_txlivestream
                      ? this.max_pages
                      : this._bets.length / this.max_item +
                          (this._bets.length % this.max_item > 0 ? 1 : 0);
                  }),
                  (s.onLoad = function () {
                    var e = this;
                    this.setOffsetStreamNative(!0),
                      t.prototype.onLoad.call(this),
                      this.btn_prev &&
                        this.btn_prev.node.on("click", function () {
                          e.currentPage - 1 > 0 &&
                            ((e.currentPage -= 1),
                            e.lbl_page &&
                              (e.lbl_page.string = e.currentPage.toString())),
                            e.showBetHistory(!1);
                        }),
                      this.btn_next &&
                        this.btn_next.node.on("click", function () {
                          e.currentPage + 1 < e.getPagesCount() &&
                            ((e.currentPage += 1),
                            e.lbl_page &&
                              (e.lbl_page.string = e.currentPage.toString())),
                            e.showBetHistory(!1);
                        }),
                      (this.max_item = this.item_views.length);
                  }),
                  (s.goToFirstPage = function () {
                    (this.currentPage = 1),
                      this.lbl_page &&
                        (this.lbl_page.string = this.currentPage.toString());
                  }),
                  (s.fetchHistory = function (t, e) {
                    this.goToFirstPage(), (this._bets = []);
                    for (var i = 0; i < t.length; i++) {
                      var n = t[i],
                        r = n.d1,
                        s = n.d2,
                        o = n.d3,
                        a = n.sid,
                        l = n.wm,
                        u = n.bs,
                        c = n.crt,
                        h = new Date(c),
                        p = g.formatTime(h),
                        f = new b();
                      (f.sessionID = a), (f.d1 = r), (f.d2 = s), (f.d3 = o);
                      for (var _ = 0; _ < u.length; _++) {
                        var m = u[_],
                          d = m.b;
                        1 == m.eid ? (f.taiBet = d) : (f.xiuBet = d);
                      }
                      (f.received = l),
                        (f.betTime = p),
                        (f.gs = 1),
                        this._bets.push(f);
                    }
                    this.showBetHistory();
                  }),
                  (s.bindAndShowBetHistory = function (t, e) {
                    var i = this;
                    (this._bets = t),
                      (this.max_pages = e / this.max_item + 1),
                      this.item_views.forEach(function (t, e) {
                        var n = t.node.getComponent(u),
                          r = i._bets[e];
                        null != r && null != r
                          ? (n && (n.opacity = 255),
                            t.show(
                              r.sessionID,
                              r.betTime,
                              r.eid,
                              r.d1,
                              r.d2,
                              r.d3,
                              r.taiBet,
                              r.xiuBet,
                              r.bet,
                              r.received,
                              r.gs
                            ))
                          : (n && (n.opacity = 1), t.hide());
                      }),
                      this.IsShowing() ||
                        (this.setResolutionScale(this.fixedScale), this.show()),
                      p.getInstance().hideLoading();
                  }),
                  (s.showBetHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0),
                      this.item_views.forEach(function (t, i) {
                        var n = t.node.getComponent(u),
                          r = (e.currentPage - 1) * e.max_item,
                          s = e._bets[i + r];
                        null != s && null != s
                          ? (n && (n.opacity = 255),
                            t.show(
                              s.sessionID,
                              s.betTime,
                              s.eid,
                              s.d1,
                              s.d2,
                              s.d3,
                              s.taiBet,
                              s.xiuBet,
                              s.bet,
                              s.received,
                              s.gs
                            ))
                          : (n && (n.opacity = 1), t.hide());
                      }),
                      t &&
                        (this.setResolutionScale(this.fixedScale), this.show());
                  }),
                  e
                );
              })(h)).prototype,
              "item_views",
              [_],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (B = e(x.prototype, "btn_prev", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = e(x.prototype, "btn_next", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = e(x.prototype, "lbl_page", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = e(x.prototype, "is_txlivestream", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (y = x))
          ) || y)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuBetRankItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var e, n, i, r, a, o, u, s, c, l;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (u = t.Label),
            (s = t.Sprite),
            (c = t.Component);
        },
        function (t) {
          l = t.StringUtils;
        },
      ],
      execute: function () {
        var p, _, h, f, m, d, v, x, k, b, g;
        a._RF.push(
          {},
          "c6456o1l+dFhJ9f8N1kpnWK",
          "TaiXiuBetRankItemView",
          void 0
        );
        var w = o.ccclass,
          y = o.property;
        t(
          "default",
          ((p = w("TaiXiuBetRankItemView")),
          (_ = y(u)),
          (h = y(s)),
          (f = y(u)),
          (m = y(u)),
          p(
            ((x = e(
              (v = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, a = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    i(e, "txt_rank", x, r(e)),
                    i(e, "spr_rank", k, r(e)),
                    i(e, "txt_username", b, r(e)),
                    i(e, "txt_win_amount", g, r(e)),
                    e
                  );
                }
                n(e, t);
                var a = e.prototype;
                return (
                  (a.show = function (t, e, n) {
                    (this.txt_username.node.active = !0),
                      (this.txt_win_amount.node.active = !0),
                      t > 3
                        ? ((this.txt_rank.node.active = !0),
                          (this.spr_rank.node.active = !1),
                          (this.txt_rank.string = t.toString()))
                        : ((this.txt_rank.node.active = !1),
                          (this.spr_rank.node.active = !0)),
                      (this.txt_username.string = e.toString()),
                      (this.txt_win_amount.string = isNaN(n)
                        ? n
                        : l.formatNumber(n));
                  }),
                  (a.hide = function () {
                    (this.txt_rank.node.active = !1),
                      (this.spr_rank.node.active = !1),
                      (this.txt_username.node.active = !1),
                      (this.txt_win_amount.node.active = !1);
                  }),
                  e
                );
              })(c)).prototype,
              "txt_rank",
              [_],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (k = e(v.prototype, "spr_rank", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = e(v.prototype, "txt_username", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = e(v.prototype, "txt_win_amount", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = v))
          ) || d)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuBetRankView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./TaiXiuBetRankItemView.ts",
    "./HttpManager.ts",
  ],
  function (t) {
    "use strict";
    var n, e, a, i, o, r, s, u, c, p, l, f;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (a = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy), (r = t._decorator), (s = t.UIOpacity);
        },
        function (t) {
          u = t.CommonPopup;
        },
        function (t) {
          c = t.GameConfigManager;
        },
        function (t) {
          p = t.default;
        },
        function (t) {
          (l = t.HttpCommand), (f = t.httpManager);
        },
      ],
      execute: function () {
        var m, h, d, v, y;
        o._RF.push({}, "50c70auM3dD8b5s2NpLoiQj", "TaiXiuBetRankView", void 0);
        var k = r.ccclass,
          _ = r.property,
          g = t("TaiXiuRankResult", function () {
            (this.rank = 0), (this.displayName = ""), (this.amount = 0);
          });
        t(
          "default",
          ((m = k("TaiXiuBetRankView")),
          (h = _([p])),
          m(
            ((y = n(
              (v = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, o = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (n = t.call.apply(t, [this].concat(o)) || this),
                    a(n, "item_views", y, i(n)),
                    (n._rank = []),
                    n
                  );
                }
                e(n, t);
                var o = n.prototype;
                return (
                  (o.onLoad = function () {
                    this.setOffsetStreamNative(!0),
                      t.prototype.onLoad.call(this);
                  }),
                  (o.fetchRank = function () {
                    var t = this,
                      n = c.SAdomainURL + l.BET_RANK_URL_TAI_XIU;
                    f.sendGET({
                      url: n,
                      onCompleted: function (n) {
                        t._rank = [];
                        var e = JSON.parse(n).data;
                        if (null != e) {
                          for (var a = e.topUsers, i = 0; i < a.length; i++) {
                            var o = a[i],
                              r = new g();
                            (r.rank = i + 1),
                              (r.displayName = o.displayName),
                              (r.amount = o.income),
                              t._rank.push(r);
                          }
                          t.showRank();
                        }
                      },
                    });
                  }),
                  (o.showRank = function () {
                    var t = this;
                    this.item_views.forEach(function (n, e) {
                      var a = t._rank[e];
                      if (null != a && null != a) {
                        var i = n.node.getComponent(s);
                        i && (i.opacity = 255),
                          n.show(a.rank, a.displayName, a.amount);
                      } else {
                        var o = n.node.getComponent(s);
                        o && (o.opacity = 1);
                      }
                    }),
                      this.show();
                  }),
                  n
                );
              })(u)).prototype,
              "item_views",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (d = v))
          ) || d)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuChatView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameConfigManager.ts",
    "./GamePlatformManager.ts",
    "./TaiXiuMessageHandler.ts",
    "./MiniGameNetworkHandler.ts",
    "./ChatItemView.ts",
    "./State.ts",
    "./SocketManager.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, u, a, o, l, s, r, c, h, d, _, D, f, p, g, m, y, C, v, b, F;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (u = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (l = t.Node),
            (s = t.EditBox),
            (r = t.ScrollView),
            (c = t.UITransform),
            (h = t.Button),
            (d = t.Vec3),
            (_ = t.Tween),
            (D = t.tween),
            (f = t.UIOpacity),
            (p = t.Component);
        },
        function (t) {
          g = t.GameConfigManager;
        },
        function (t) {
          m = t.GamePlatformManager;
        },
        function (t) {
          y = t.TaiXiuKhongCan_Message;
        },
        function (t) {
          C = t.MiniGameNetworkHandler;
        },
        function (t) {
          v = t.default;
        },
        function (t) {
          b = t.state;
        },
        function (t) {
          F = t.MessageRequest;
        },
      ],
      execute: function () {
        var w, E, A, B, x, z, T, S, k, M, q, P, U, I, H, G, R, V, L, X, O;
        a._RF.push({}, "6b631WUJlFHr5xMHQUpwYRF", "TaiXiuChatView", void 0);
        var Z = o.ccclass,
          N = o.property;
        t(
          "default",
          ((w = Z("TaiXiuChatView")),
          (E = N(l)),
          (A = N(s)),
          (B = N(r)),
          (x = N(c)),
          (z = N(l)),
          (T = N(l)),
          (S = N(h)),
          (k = N([v])),
          w(
            (((O = (function (t) {
              function e() {
                for (
                  var e, i = arguments.length, a = new Array(i), o = 0;
                  o < i;
                  o++
                )
                  a[o] = arguments[o];
                return (
                  (e = t.call.apply(t, [this].concat(a)) || this),
                  n(e, "chat_item", P, u(e)),
                  n(e, "edbChat", U, u(e)),
                  n(e, "scr_chat", I, u(e)),
                  n(e, "scr_chat_transform", H, u(e)),
                  n(e, "node_quickchat", G, u(e)),
                  n(e, "node_listchat", R, u(e)),
                  n(e, "btn_quickchat", V, u(e)),
                  n(e, "loaded_chat_items", L, u(e)),
                  n(e, "spacing_chat", X, u(e)),
                  (e.isScrolling = !1),
                  (e.is_chat_layout_dirty = !1),
                  (e.is_loaded_history = !1),
                  (e.lastest_node_position = null),
                  e
                );
              }
              i(e, t),
                (e.getInstance = function () {
                  return e.instance;
                });
              var a = e.prototype;
              return (
                (a.onLoad = function () {
                  var t,
                    i,
                    n,
                    u,
                    a = this;
                  (this.lastest_node_position = new d(this.node.position)),
                    (e.instance = this),
                    null == (t = this.scr_chat) ||
                      t.node.on("scroll-began", function () {
                        _.stopAllByTarget(a.node), (a.isScrolling = !0);
                      }),
                    null == (i = this.scr_chat) ||
                      i.node.on("scroll-ended", function () {
                        D(a.node)
                          .sequence(
                            D().delay(0.5),
                            D().call(function () {
                              a.isScrolling = !1;
                            })
                          )
                          .start();
                      }),
                    null == (n = this.edbChat) ||
                      n.node.on("editing-did-began", function () {
                        b.isDisplayingTextInput = !0;
                      }),
                    null == (u = this.btn_quickchat) ||
                      u.node.on("click", function () {
                        a.node_listchat &&
                          (a.node_listchat.active = !a.node_listchat.active),
                          a.node_quickchat &&
                            (a.node_quickchat.active =
                              !a.node_quickchat.active);
                      });
                }),
                (a.update = function (t) {
                  this.updateLayoutChat();
                }),
                (a.markAsDirty = function () {
                  this.is_chat_layout_dirty = !0;
                }),
                (a.updateLayoutChat = function () {
                  var t,
                    e = this;
                  if (
                    null != this.loaded_chat_items &&
                    0 != this.loaded_chat_items.length
                  ) {
                    var i = this.loaded_chat_items
                      .map(function (t) {
                        var e;
                        return (
                          (null == t || null == (e = t.getUITransform())
                            ? void 0
                            : e.contentSize.height) || 0
                        );
                      })
                      .reduce(function (t, i) {
                        return t + i + e.spacing_chat;
                      });
                    if (
                      (null == (t = this.scr_chat_transform) ||
                        t.setContentSize(
                          this.scr_chat_transform.contentSize.width,
                          i - 10
                        ),
                      this.is_chat_layout_dirty)
                    ) {
                      var n;
                      if (
                        !(
                          0 ==
                          this.loaded_chat_items.filter(function (t) {
                            return null == t ? void 0 : t.isDirty();
                          }).length
                        )
                      )
                        return;
                      this.loaded_chat_items.forEach(function (t, i) {
                        if (
                          (_.stopAllByTarget(
                            (null == t ? void 0 : t.node) || void 0
                          ),
                          i > 0)
                        ) {
                          var n = e.loaded_chat_items[i - 1],
                            u =
                              (null == n ? void 0 : n.node.position) || d.ZERO,
                            a = new d(u.x, u.y, u.z),
                            o = e.loaded_chat_items[i - 1],
                            l = null == o ? void 0 : o.getUITransform(),
                            s =
                              (null == l ? void 0 : l.contentSize.height) || 0;
                          (a.y -= s + e.spacing_chat),
                            null == t || t.node.setPosition(a);
                        }
                      });
                      for (
                        var u = [],
                          a = 0,
                          o = this.loaded_chat_items.length - 1;
                        o >= 0;
                        o--
                      ) {
                        var l = this.loaded_chat_items[o],
                          s = (null == l ? void 0 : l.node.position) || d.ZERO,
                          r = this.loaded_chat_items[o],
                          c = null == r ? void 0 : r.getUITransform();
                        a +=
                          ((null == c ? void 0 : c.contentSize.height) || 0) +
                          this.spacing_chat;
                        var h = new d(s.x, s.y, s.z);
                        (h.y = a + 5), u.push(h);
                      }
                      (u = u.reverse()),
                        m.isWebDesktop()
                          ? this.loaded_chat_items.forEach(function (t, e) {
                              null == t ||
                                t.node.setPosition(
                                  new d(u[e].x, u[e].y, u[e].z)
                                );
                            })
                          : this.loaded_chat_items.forEach(function (t, e) {
                              D(null == t ? void 0 : t.node)
                                .to(0.2, {
                                  position: new d(u[e].x, u[e].y, u[e].z),
                                })
                                .start();
                            }),
                        null == (n = this.scr_chat) || n.scrollToBottom(),
                        (this.is_chat_layout_dirty = !1),
                        this.is_loaded_history || (this.is_loaded_history = !0);
                    }
                  }
                }),
                (a.isUpdatable = function () {
                  return (
                    this.is_loaded_history &&
                    !this.isScrolling &&
                    !this.is_chat_layout_dirty
                  );
                }),
                (a.loadChatHistory = function (t) {
                  for (
                    var e =
                        t.length > this.loaded_chat_items.length
                          ? this.loaded_chat_items.length
                          : t.length,
                      i = t.length - e;
                    i <= t.length - 1;
                    i++
                  ) {
                    var n = t[i],
                      u = n.fu || "",
                      a = n.mgs || "",
                      o = this.loaded_chat_items.shift();
                    o && (o.node.active = !0),
                      null == o || o.show(u, a),
                      o && this.loaded_chat_items.push(o);
                  }
                  this.is_chat_layout_dirty = !0;
                }),
                (a.updateChat = function (t) {
                  for (
                    var e =
                        t.length > this.loaded_chat_items.length
                          ? this.loaded_chat_items.length
                          : t.length,
                      i = 0;
                    i < e;
                    i++
                  ) {
                    var n = t[i],
                      u = n.fu || "",
                      a = n.mgs || "",
                      o = this.loaded_chat_items.shift();
                    o && (o.node.active = !0),
                      o &&
                        this.chat_item &&
                        (o.node.parent = this.chat_item.parent),
                      null == o || o.show(u, a),
                      o && this.loaded_chat_items.push(o);
                  }
                  this.is_chat_layout_dirty = !0;
                }),
                (a.sendMes = function () {
                  var t,
                    e = null == (t = this.edbChat) ? void 0 : t.string;
                  if ((console.log("sendMessage:", e), null != e && "" != e)) {
                    this.edbChat && (this.edbChat.string = "");
                    var i = {};
                    (i.cmd = y.CHAT), (i.mgs = e);
                    var n = [
                      F.ZonePlugin_Type,
                      "MiniGame",
                      "taixiuUnbalancedPlugin",
                      i,
                    ];
                    C.send(n);
                  }
                }),
                (a.open = function () {
                  _.stopAllByTarget(this.node);
                  var t = this.node.getComponent(f);
                  _.stopAllByTarget(t || void 0);
                  var e = g.getPopupScale();
                  this.node.setScale(new d(0.9 * e.x, 0.9 * e.x, 0.9 * e.x)),
                    D(this.node)
                      .to(0.2, {
                        scale: new d(1.1 * e.x, 1.1 * e.x, 1.1 * e.x),
                      })
                      .to(0.2, { scale: new d(e.x, e.x, e.x) })
                      .start(),
                    t && (t.opacity = 1),
                    D(this.node.getComponent(f))
                      .to(0.2, { opacity: 255 }, { easing: "linear" })
                      .call(function () {})
                      .start();
                }),
                (a.close = function () {
                  var t = this.node.getComponent(f);
                  t && (t.opacity = 1), (this.node.scale = d.ZERO);
                }),
                (a.emoteToCode = function (t) {
                  return t.replace(
                    /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])/g,
                    function (t) {
                      var e,
                        i =
                          null == (e = t.codePointAt(0))
                            ? void 0
                            : e.toString(16).toUpperCase();
                      return i ? ":emoji_" + i + ":" : t;
                    }
                  );
                }),
                e
              );
            })(p)).instance = null),
            (P = e((q = O).prototype, "chat_item", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = e(q.prototype, "edbChat", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(q.prototype, "scr_chat", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = e(q.prototype, "scr_chat_transform", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = e(q.prototype, "node_quickchat", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = e(q.prototype, "node_listchat", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = e(q.prototype, "btn_quickchat", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(q.prototype, "loaded_chat_items", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (X = e(q.prototype, "spacing_chat", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 5;
              },
            })),
            (M = q))
          ) || M)
        );
        a._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/TaiXiuData.ts", ["cc"], function (i) {
  "use strict";
  var t;
  return {
    setters: [
      function (i) {
        t = i.cclegacy;
      },
    ],
    execute: function () {
      t._RF.push({}, "e0528u5AvdMX51ZF+BX/A2p", "TaiXiuData", void 0);
      i("TaiXiuInfo", function () {
        (this.totalTaiBeting = void 0),
          (this.totalXiuBeting = void 0),
          (this.totalTaiUser = void 0),
          (this.totalXiuUser = void 0),
          (this.aid = void 0),
          (this.thisPlayerTaiBet = void 0),
          (this.thisPlayerXiuBet = void 0),
          (this.availableMoney = void 0);
      }),
        i("TaiXiuResult", function () {
          (this.d1 = void 0),
            (this.d2 = void 0),
            (this.d3 = void 0),
            (this.sessionID = void 0),
            (this.time = void 0);
        }),
        i("TaiXiuBetResult", function () {
          (this.taiBet = 0),
            (this.xiuBet = 0),
            (this.bet = void 0),
            (this.refunded = void 0),
            (this.received = void 0),
            (this.eid = void 0),
            (this.d1 = void 0),
            (this.d2 = void 0),
            (this.d3 = void 0),
            (this.sessionID = void 0),
            (this.betTime = void 0),
            (this.gs = void 0);
        }),
        i("TaiXiuRankResult", function () {
          (this.rank = void 0),
            (this.displayName = void 0),
            (this.amount = void 0);
        });
      t._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/TaiXiuGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SoundManager.ts",
    "./MiniGameNodeController.ts",
    "./TaiXiuMessageHandler.ts",
    "./MiniGameNetworkHandler.ts",
    "./GameUtils.ts",
    "./Define.ts",
    "./StringUtils.ts",
    "./BaseMiniGameView.ts",
    "./BatCmp.ts",
    "./TaiXiuBetHistoryView.ts",
    "./TaiXiuBetRankView.ts",
    "./TaiXiuChatView.ts",
    "./TaiXiuSessionAnalyticsView.ts",
    "./TaiXiuSessionHistoryView.ts",
    "./CommonInfoPopup.ts",
    "./State.ts",
    "./PersistManager.ts",
    "./EventManager.ts",
    "./SocketManager.ts",
  ],
  function (t) {
    "use strict";
    var e,
      i,
      n,
      a,
      o,
      r,
      s,
      u,
      l,
      c,
      _,
      h,
      b,
      d,
      f,
      p,
      m,
      g,
      y,
      v,
      w,
      x,
      T,
      M,
      I,
      B,
      k,
      S,
      X,
      C,
      N,
      z,
      A,
      P,
      D,
      F,
      E,
      V,
      R,
      G,
      H,
      U;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (r = t._decorator),
            (s = t.Label),
            (u = t.Node),
            (l = t.sp),
            (c = t.Toggle),
            (_ = t.SpriteFrame),
            (h = t.Button),
            (b = t.AudioClip),
            (d = t.Vec3),
            (f = t.Tween),
            (p = t.tween),
            (m = t.UIOpacity),
            (g = t.log),
            (y = t.Sprite),
            (v = t.Color);
        },
        function (t) {
          w = t.SoundManager;
        },
        function (t) {
          x = t.default;
        },
        function (t) {
          (T = t.TaiXiuKhongCan_Message), (M = t.TaiXiuMessageHandler);
        },
        function (t) {
          I = t.MiniGameNetworkHandler;
        },
        function (t) {
          B = t.default;
        },
        function (t) {
          k = t.GameID;
        },
        function (t) {
          S = t.StringUtils;
        },
        function (t) {
          X = t.default;
        },
        function (t) {
          C = t.default;
        },
        function (t) {
          N = t.default;
        },
        function (t) {
          z = t.default;
        },
        function (t) {
          A = t.default;
        },
        function (t) {
          P = t.default;
        },
        function (t) {
          D = t.default;
        },
        function (t) {
          F = t.CommonInfoPopup;
        },
        function (t) {
          E = t.state;
        },
        function (t) {
          V = t.PersistManager;
        },
        function (t) {
          (R = t.eventManager), (G = t.EventKey);
        },
        function (t) {
          (H = t.socketManager), (U = t.MessageRequest);
        },
      ],
      execute: function () {
        var q,
          O,
          L,
          K,
          Y,
          Z,
          W,
          j,
          J,
          Q,
          $,
          tt,
          et,
          it,
          nt,
          at,
          ot,
          rt,
          st,
          ut,
          lt,
          ct,
          _t,
          ht,
          bt,
          dt,
          ft,
          pt,
          mt,
          gt,
          yt,
          vt,
          wt,
          xt,
          Tt,
          Mt,
          It,
          Bt,
          kt,
          St,
          Xt,
          Ct,
          Nt,
          zt,
          At,
          Pt,
          Dt,
          Ft,
          Et,
          Vt,
          Rt,
          Gt,
          Ht,
          Ut,
          qt,
          Ot,
          Lt,
          Kt,
          Yt,
          Zt,
          Wt,
          jt,
          Jt,
          Qt,
          $t,
          te,
          ee,
          ie,
          ne,
          ae,
          oe,
          re,
          se,
          ue,
          le,
          ce,
          _e,
          he,
          be,
          de,
          fe,
          pe,
          me,
          ge,
          ye,
          ve,
          we,
          xe,
          Te,
          Me,
          Ie,
          Be,
          ke,
          Se,
          Xe,
          Ce,
          Ne,
          ze,
          Ae,
          Pe,
          De,
          Fe,
          Ee,
          Ve,
          Re,
          Ge,
          He,
          Ue,
          qe,
          Oe,
          Le,
          Ke,
          Ye,
          Ze;
        o._RF.push({}, "3d788Y0jftLQZ/UJic1IDA/", "TaiXiuGameView", void 0);
        var We,
          je = r.ccclass,
          Je = r.property,
          Qe = t("TaiXiuInfo", function () {
            (this.totalTaiBeting = 0),
              (this.totalXiuBeting = 0),
              (this.totalTaiUser = 0),
              (this.totalXiuUser = 0),
              (this.aid = 0),
              (this.thisPlayerTaiBet = 0),
              (this.thisPlayerXiuBet = 0),
              (this.availableMoney = 0);
          }),
          $e = t("TaiXiuResult", function () {
            (this.d1 = 0),
              (this.d2 = 0),
              (this.d3 = 0),
              (this.sessionID = 0),
              (this.time = 0);
          });
        !(function (t) {
          (t[(t.ChuaDat = 0)] = "ChuaDat"),
            (t[(t.DatTai = 1)] = "DatTai"),
            (t[(t.DatXiu = 2)] = "DatXiu");
        })(We || (We = {}));
        t(
          "TaiXiuGameView",
          ((q = je("TaiXiuGameView")),
          (O = Je(s)),
          (L = Je(s)),
          (K = Je(s)),
          (Y = Je(s)),
          (Z = Je(s)),
          (W = Je(s)),
          (j = Je(s)),
          (J = Je(u)),
          (Q = Je(l.Skeleton)),
          ($ = Je(l.Skeleton)),
          (tt = Je(l.Skeleton)),
          (et = Je(A)),
          (it = Je(N)),
          (nt = Je(z)),
          (at = Je(P)),
          (ot = Je(D)),
          (rt = Je(u)),
          (st = Je(u)),
          (ut = Je(u)),
          (lt = Je(u)),
          (ct = Je([c])),
          (_t = Je([_])),
          (ht = Je([_])),
          (bt = Je(h)),
          (dt = Je(h)),
          (ft = Je(s)),
          (pt = Je(s)),
          (mt = Je(s)),
          (gt = Je(s)),
          (yt = Je([h])),
          (vt = Je([s])),
          (wt = Je(h)),
          (xt = Je(h)),
          (Tt = Je(h)),
          (Mt = Je(h)),
          (It = Je(h)),
          (Bt = Je(h)),
          (kt = Je(h)),
          (St = Je(h)),
          (Xt = Je(h)),
          (Ct = Je(h)),
          (Nt = Je(u)),
          (zt = Je(u)),
          (At = Je(s)),
          (Pt = Je(c)),
          (Dt = Je(C)),
          (Ft = Je(u)),
          (Et = Je(u)),
          (Vt = Je(b)),
          (Rt = Je(b)),
          (Gt = Je(b)),
          (Ht = Je(b)),
          (Ut = Je(F)),
          (qt = Je(h)),
          (Ot = Je(h)),
          q(
            (((Ze = (function (t) {
              function e() {
                for (
                  var e, i = arguments.length, o = new Array(i), r = 0;
                  r < i;
                  r++
                )
                  o[r] = arguments[r];
                return (
                  (e = t.call.apply(t, [this].concat(o)) || this),
                  n(e, "lblSession", Yt, a(e)),
                  n(e, "taiPlayersCount", Zt, a(e)),
                  n(e, "xiuPlayersCount", Wt, a(e)),
                  n(e, "currentTaiMoney", jt, a(e)),
                  n(e, "currentXiuMoney", Jt, a(e)),
                  n(e, "remainTimeToBetting", Qt, a(e)),
                  n(e, "remainTimeToStartNew", $t, a(e)),
                  n(e, "remainTimeToStartNewBG", te, a(e)),
                  n(e, "dice1", ee, a(e)),
                  n(e, "dice2", ie, a(e)),
                  n(e, "dice3", ne, a(e)),
                  n(e, "taiXiuChatView", ae, a(e)),
                  n(e, "taiXiuBetHistoryView", oe, a(e)),
                  n(e, "taiXiuBetRankView", re, a(e)),
                  n(e, "taiXiuSessionAnalyticsView", se, a(e)),
                  n(e, "taiXiuSessionHistoryView", ue, a(e)),
                  n(e, "tai_default", le, a(e)),
                  n(e, "tai_on", ce, a(e)),
                  n(e, "xiu_default", _e, a(e)),
                  n(e, "xiu_on", he, a(e)),
                  n(e, "toggle_results", be, a(e)),
                  n(e, "sprFrame_kq_tai", de, a(e)),
                  n(e, "sprFrame_kq_xiu", fe, a(e)),
                  n(e, "btn_bet_tai", pe, a(e)),
                  n(e, "btn_bet_xiu", me, a(e)),
                  n(e, "txt_bet_tai_amount", ge, a(e)),
                  n(e, "txt_bet_xiu_amount", ye, a(e)),
                  n(e, "txt_bet_tai_current_amount", ve, a(e)),
                  n(e, "txt_bet_xiu_current_amount", we, a(e)),
                  n(e, "btn_chips", xe, a(e)),
                  n(e, "lbl_chips", Te, a(e)),
                  (e.chip_values = [1e3, 1e4, 5e4, 1e5, 5e5, 5e6, 1e7, 5e7]),
                  n(e, "btn_all_in", Me, a(e)),
                  n(e, "btn_bet_ok", Ie, a(e)),
                  n(e, "btn_rank", Be, a(e)),
                  n(e, "btn_bet_history", ke, a(e)),
                  n(e, "btn_session_history", Se, a(e)),
                  n(e, "btn_help", Xe, a(e)),
                  n(e, "btn_chat", Ce, a(e)),
                  n(e, "btn_huy", Ne, a(e)),
                  n(e, "btn_session_analytics", ze, a(e)),
                  n(e, "btn_event", Ae, a(e)),
                  n(e, "bet_panel", Pe, a(e)),
                  n(e, "result_node", De, a(e)),
                  n(e, "refundMoney", Fe, a(e)),
                  n(e, "btn_nan", Ee, a(e)),
                  n(e, "batCmp", Ve, a(e)),
                  n(e, "bound_1", Re, a(e)),
                  n(e, "bound_2", Ge, a(e)),
                  n(e, "session_start_sfx", He, a(e)),
                  n(e, "bet_succeed_sfx", Ue, a(e)),
                  n(e, "roi_xi_ngau", qe, a(e)),
                  n(e, "win_sfx", Oe, a(e)),
                  n(e, "commonInfoPopup", Le, a(e)),
                  (e._infos = []),
                  (e._results = []),
                  (e._aid = 1),
                  (e._sessionID = 0),
                  (e._sessionIDAnalytics = -99),
                  (e._playing = !1),
                  (e._inputingMoney = 0),
                  (e.timeForBetting = 0),
                  (e.timeForPaying = 0),
                  (e.state = We.ChuaDat),
                  (e.isShowFirstTime = !0),
                  (e.cauPosition = []),
                  (e.currentJackpot = 0),
                  n(e, "btn_prev_session", Ke, a(e)),
                  n(e, "btn_next_session", Ye, a(e)),
                  (e.hasResult = !1),
                  e
                );
              }
              i(e, t);
              var o = e.prototype;
              return (
                (o.onLoad = function () {
                  var i,
                    n,
                    a,
                    o,
                    r,
                    s,
                    u,
                    l,
                    c,
                    _,
                    h,
                    b,
                    f,
                    p,
                    m = this;
                  t.prototype.onLoad.call(this),
                    (e.instance = this),
                    this.init(),
                    (this.cauPosition = this.toggle_results.map(function (t) {
                      return new d(t.node.position);
                    })),
                    null == (i = this.btn_bet_tai) ||
                      i.node.on("click", function () {
                        var t, e;
                        m.btn_bet_tai && (m.btn_bet_tai.node.active = !1),
                          m.btn_bet_xiu && (m.btn_bet_xiu.node.active = !0),
                          null != (t = m.txt_bet_tai_amount) &&
                            t.node.parent &&
                            (m.txt_bet_tai_amount.node.parent.active = !0),
                          null != (e = m.txt_bet_xiu_amount) &&
                            e.node.parent &&
                            (m.txt_bet_xiu_amount.node.parent.active = !1),
                          m.showBetPanel(),
                          (m.state = We.DatTai);
                      }),
                    null == (n = this.btn_bet_xiu) ||
                      n.node.on("click", function () {
                        var t, e;
                        m.btn_bet_xiu && (m.btn_bet_xiu.node.active = !1),
                          m.btn_bet_tai && (m.btn_bet_tai.node.active = !0),
                          null != (t = m.txt_bet_tai_amount) &&
                            t.node.parent &&
                            (m.txt_bet_tai_amount.node.parent.active = !1),
                          null != (e = m.txt_bet_xiu_amount) &&
                            e.node.parent &&
                            (m.txt_bet_xiu_amount.node.parent.active = !0),
                          m.showBetPanel(),
                          (m.state = We.DatXiu);
                      }),
                    null == (a = this.btn_huy) ||
                      a.node.on("click", function () {
                        m.showBetPanel(!1);
                      }),
                    null == (o = this.btn_rank) ||
                      o.node.on("click", function () {
                        m.showRank();
                      }),
                    null == (r = this.btn_bet_history) ||
                      r.node.on("click", function () {
                        m.showBetHistory();
                      }),
                    null == (s = this.btn_session_history) ||
                      s.node.on("click", function () {
                        var t;
                        null == (t = m.taiXiuSessionHistoryView) || t.show();
                      }),
                    null == (u = this.btn_help) ||
                      u.node.on("click", function () {
                        var t;
                        null == (t = m.commonInfoPopup) || t.showInfo(k.TAIXIU);
                      }),
                    null == (l = this.btn_chat) ||
                      l.node.on("click", function () {
                        var t;
                        null == (t = m.taiXiuChatView) || t.open();
                      }),
                    null == (c = this.btn_session_analytics) ||
                      c.node.on("click", function () {
                        (m._sessionIDAnalytics = m._sessionID - 1),
                          V.getInstance().showLoading();
                        var t = {};
                        (t.cmd = T.SESSION_ANALYTIC),
                          (t.sid = m._sessionIDAnalytics),
                          (t.aid = m._aid);
                        var e = [
                          U.ZonePlugin_Type,
                          "MiniGame",
                          "taixiuUnbalancedPlugin",
                          t,
                        ];
                        I.send(e);
                      }),
                    null == (_ = this.btn_event) ||
                      _.node.on("click", function () {}),
                    null == (h = this.btn_bet_ok) ||
                      h.node.on("click", function () {
                        if (m._playing)
                          if (0 != m._inputingMoney) {
                            var t = {};
                            (t.cmd = T.BET),
                              (t.b = m._inputingMoney),
                              (t.aid = m._aid),
                              (t.sid = m._sessionID),
                              (m._inputingMoney = 0),
                              m.txt_bet_tai_amount &&
                                (m.txt_bet_tai_amount.string = "0"),
                              m.txt_bet_xiu_amount &&
                                (m.txt_bet_xiu_amount.string = "0");
                            var e = 1;
                            m.state == We.DatXiu && (e = 2), (t.eid = e);
                            var i = [
                              U.ZonePlugin_Type,
                              "MiniGame",
                              "taixiuUnbalancedPlugin",
                              t,
                            ];
                            I.send(i);
                          } else
                            V.showNoti(
                              "Vui lòng nhập tiền đặt!",
                              m.main,
                              k.TAIXIU
                            );
                        else
                          V.showNoti(
                            "Phiên mới chưa bắt đầu!",
                            m.main,
                            k.TAIXIU
                          );
                      }),
                    this.btn_chips.forEach(function (t, e) {
                      var i = e;
                      t.node.on("click", function () {
                        var t, e;
                        (m._inputingMoney += m.chip_values[i]),
                          null != (t = m.txt_bet_tai_amount) &&
                          null != (e = t.node.parent) &&
                          e.active
                            ? (m.txt_bet_tai_amount.string = S.formatNumber(
                                m._inputingMoney
                              ))
                            : m.txt_bet_xiu_amount &&
                              (m.txt_bet_xiu_amount.string = S.formatNumber(
                                m._inputingMoney
                              ));
                      });
                    }),
                    null == (b = this.btn_all_in) ||
                      b.node.on("click", function () {
                        var t, e;
                        (m._inputingMoney = E.gold),
                          null != (t = m.txt_bet_tai_amount) &&
                          null != (e = t.node.parent) &&
                          e.active
                            ? (m.txt_bet_tai_amount.string = S.formatNumber(
                                m._inputingMoney
                              ))
                            : m.txt_bet_xiu_amount &&
                              (m.txt_bet_xiu_amount.string = S.formatNumber(
                                m._inputingMoney
                              ));
                      }),
                    this.result_node && (this.result_node.active = !1),
                    null == (f = this.btn_prev_session) ||
                      f.node.on("click", function () {
                        V.getInstance().showLoading(),
                          m.sendSessionAnalyticsCallback(-1);
                      }),
                    null == (p = this.btn_next_session) ||
                      p.node.on("click", function () {
                        V.getInstance().showLoading(),
                          m.sendSessionAnalyticsCallback(1);
                      });
                }),
                (o.onDestroy = function () {
                  e.instance = null;
                }),
                (o.showBetPanel = function (t) {
                  var e, i, n, a, o;
                  (void 0 === t && (t = !0),
                  this.bet_panel && (this.bet_panel.active = t),
                  null != (e = this.bet_panel) && e.active)
                    ? null == (i = this.main_drag_view) || i.setOffset(100)
                    : null == (n = this.main_drag_view) || n.setOffset(0);
                  t
                    ? ((this._inputingMoney = 0),
                      this.txt_bet_tai_amount &&
                        (this.txt_bet_tai_amount.string = "0"),
                      this.txt_bet_xiu_amount &&
                        (this.txt_bet_xiu_amount.string = "0"),
                      this.btn_chips.forEach(function (t) {
                        f.stopAllByTarget(t.node),
                          t.node.setScale(d.ONE),
                          p(t.node)
                            .to(0.2, { scale: new d(0.9, 0.9, 0.9) })
                            .to(0.2, { scale: d.ONE })
                            .start();
                      }),
                      this.lbl_chips.forEach(function (t) {
                        f.stopAllByTarget(t.node),
                          t.node.setScale(d.ONE),
                          p(t.node)
                            .to(0.2, { scale: new d(0.9, 0.9, 0.9) })
                            .to(0.2, { scale: d.ONE })
                            .start();
                      }))
                    : (this.btn_bet_tai && (this.btn_bet_tai.node.active = !0),
                      this.btn_bet_xiu && (this.btn_bet_xiu.node.active = !0),
                      null != (a = this.txt_bet_tai_amount) &&
                        a.node.parent &&
                        (this.txt_bet_tai_amount.node.parent.active = !1),
                      null != (o = this.txt_bet_xiu_amount) &&
                        o.node.parent &&
                        (this.txt_bet_xiu_amount.node.parent.active = !1));
                }),
                (e.getInstance = function () {
                  var t;
                  return null == (t = x.getInstance())
                    ? void 0
                    : t.getInstanceTaiXiu();
                }),
                (o.subcribleInfo = function (
                  t,
                  e,
                  i,
                  n,
                  a,
                  o,
                  r,
                  s,
                  u,
                  l,
                  c,
                  _,
                  h,
                  b
                ) {
                  if (
                    ((this.timeForBetting = l),
                    (this.timeForPaying = c),
                    (this._sessionID = t),
                    this.stop_all_main_game_action(),
                    this.setCau(n),
                    1 == e)
                  );
                  else if (2 == e) this.startNewGame(t, i);
                  else if (3 == e) {
                    var d = this._results[this._results.length - 1],
                      f = d.d1,
                      p = d.d2,
                      m = d.d3;
                    this.showResult(f, p, m, !1, !1),
                      this.prepareForNewGame(i),
                      this.lblSession && (this.lblSession.string = "#" + t);
                  }
                  this.updateBetInfo(a);
                }),
                (o.prepareForNewGame = function (t) {
                  var e = this;
                  this.stop_all_main_game_action(),
                    this.remainTimeToStartNew &&
                      (this.remainTimeToStartNew.node.active = !0),
                    this.remainTimeToStartNewBG &&
                      (this.remainTimeToStartNewBG.active = !0),
                    (t = Math.floor(t)),
                    p(this.node)
                      .repeat(
                        t + 1,
                        p().sequence(
                          p().call(function () {
                            var i, n;
                            null == (i = e.remainTimeToStartNew) ||
                              i.node.setScale(new d(1.5, 1.5, 1)),
                              p(
                                (null == (n = e.remainTimeToStartNew)
                                  ? void 0
                                  : n.node) || void 0
                              )
                                .to(0.1, { scale: d.ONE })
                                .start(),
                              e.remainTimeToStartNew &&
                                (e.remainTimeToStartNew.string = t.toString());
                          }),
                          p().delay(1),
                          p().call(function () {
                            (t -= 1) < 0 && (t = 0);
                          })
                        )
                      )
                      .start();
                }),
                (o.startNewGame = function (t, e) {
                  var i,
                    n,
                    a,
                    o = this;
                  if (
                    (void 0 === e && (e = -1),
                    (this.hasResult = !1),
                    this.stop_all_main_game_action(),
                    R.emit(G.START_NEW_SESSION_EVENT_KEY),
                    this.updateCau(!1),
                    H.sendRefreshMoney(),
                    null == (i = this.batCmp) || i.hide(),
                    (this._playing = !0),
                    (this._sessionID = t),
                    -1 == e)
                  ) {
                    var r;
                    if (this.IsOpened())
                      V.showNoti("Bắt đầu phiên mới.", this.main, k.TAIXIU, 0),
                        null == (r = w.getInstance()) ||
                          r.playSfx(this.session_start_sfx);
                    this.taiPlayersCount && (this.taiPlayersCount.string = "0"),
                      this.xiuPlayersCount &&
                        (this.xiuPlayersCount.string = "0"),
                      this.currentTaiMoney &&
                        (this.currentTaiMoney.string = "0"),
                      this.currentXiuMoney &&
                        (this.currentXiuMoney.string = "0");
                  }
                  this.remainTimeToBetting &&
                    (this.remainTimeToBetting.enabled = !0),
                    this.remainTimeToStartNew &&
                      (this.remainTimeToStartNew.node.active = !1),
                    this.remainTimeToStartNewBG &&
                      (this.remainTimeToStartNewBG.active = !1),
                    this.tai_default && (this.tai_default.active = !0),
                    this.xiu_default && (this.xiu_default.active = !0),
                    this.tai_on && (this.tai_on.active = !1),
                    this.xiu_on && (this.xiu_on.active = !1),
                    this.toggle_results.forEach(function (t) {
                      var e, i;
                      f.stopAllByTarget(t),
                        f.stopAllByTarget(
                          (null == (e = t.checkMark)
                            ? void 0
                            : e.node.getComponent(m)) || void 0
                        );
                      var n =
                        null == (i = t.checkMark)
                          ? void 0
                          : i.node.getComponent(m);
                      n && (n.opacity = 1),
                        t.node.children[2] && (t.node.children[2].active = !1);
                    }),
                    null != (n = this.txt_bet_tai_current_amount) &&
                      n.node.parent &&
                      (this.txt_bet_tai_current_amount.node.parent.active = !1),
                    null != (a = this.txt_bet_xiu_current_amount) &&
                      a.node.parent &&
                      (this.txt_bet_xiu_current_amount.node.parent.active = !1),
                    this.dice1 && (this.dice1.node.active = !1),
                    this.dice2 && (this.dice2.node.active = !1),
                    this.dice3 && (this.dice3.node.active = !1),
                    (e = Math.floor(e)),
                    this.lblSession && (this.lblSession.string = "#" + t);
                  var s = -1 == e ? this.timeForBetting : e,
                    u = p()
                      .call(function () {
                        var t;
                        o.remainTimeToBetting &&
                          (o.remainTimeToBetting.string =
                            (s < 10 ? "0" : "") + s.toString()),
                          null == (t = x.getInstance()) || t.startGameTaiXiu(s),
                          (s -= 1) < 0 &&
                            ((s = 0),
                            setTimeout(function () {
                              o.hasResult;
                            }, 2e3));
                      })
                      .then(p().delay(1));
                  p(this.node)
                    .repeat(s + 2, u)
                    .start(),
                    this.result_node && (this.result_node.active = !1);
                }),
                (o.fetchHistory = function (t, e) {
                  var i;
                  this._aid == e &&
                    (null == (i = this.taiXiuBetHistoryView) ||
                      i.fetchHistory(t, e));
                }),
                (o.fetchThongKe = function (t, e, i, n, a, o) {
                  var r;
                  null == (r = this.taiXiuSessionAnalyticsView) ||
                    r.showSessionAnalytics(t, e, i, n, a, o, this._aid);
                }),
                (o.showNoti = function (t) {
                  V.showNoti(t, this.main, k.TAIXIU);
                }),
                (o.updateBetInfo = function (t, e) {
                  var i, n;
                  void 0 === e && (e = !0),
                    e && (this._infos = []),
                    1 == t[0].eid
                      ? ((i = t[0]), (n = t[1]))
                      : ((i = t[1]), (n = t[0]));
                  var a = i.v,
                    o = i.bc,
                    r = n.v,
                    s = n.bc,
                    u = new Qe();
                  (u.aid = 1),
                    (u.totalTaiBeting = a || 0),
                    (u.totalXiuBeting = r || 0),
                    (u.totalTaiUser = o || 0),
                    (u.totalXiuUser = s || 0),
                    (u.thisPlayerTaiBet = 0),
                    (u.thisPlayerXiuBet = 0),
                    null != i.b &&
                      null != i.b &&
                      ((u.thisPlayerTaiBet = i.b),
                      (u.thisPlayerXiuBet = n.b || 0)),
                    this._infos.push(u),
                    this.updateLabels();
                }),
                (o.updateLabels = function () {
                  for (var t = 0; t < this._infos.length; t++)
                    if (this._infos[t].aid == this._aid) {
                      var e,
                        i,
                        n,
                        a,
                        o,
                        r,
                        s,
                        u,
                        l = this._infos[t].totalTaiBeting,
                        c = this._infos[t].totalXiuBeting,
                        _ = this._infos[t].totalTaiUser,
                        h = this._infos[t].totalXiuUser,
                        b = this._infos[t].thisPlayerTaiBet,
                        m = this._infos[t].thisPlayerXiuBet;
                      this._infos[t].availableMoney;
                      if (
                        S.formatNumber(l) !=
                        (null == (e = this.currentTaiMoney) ? void 0 : e.string)
                      )
                        this.currentTaiMoney &&
                          (this.currentTaiMoney.string = S.formatNumber(l)),
                          this.currentTaiMoney &&
                            (this.currentTaiMoney.node.scale = d.ONE),
                          f.stopAllByTarget(
                            null == (n = this.currentTaiMoney) ? void 0 : n.node
                          ),
                          p(
                            null == (a = this.currentTaiMoney) ? void 0 : a.node
                          )
                            .sequence(
                              p().to(0.2, { scale: new d(1.1, 1.1, 1) }),
                              p().to(0.2, { scale: d.ONE })
                            )
                            .start();
                      if (
                        S.formatNumber(c) !=
                        (null == (i = this.currentXiuMoney) ? void 0 : i.string)
                      )
                        this.currentXiuMoney &&
                          (this.currentXiuMoney.string = S.formatNumber(c)),
                          this.currentXiuMoney &&
                            (this.currentXiuMoney.node.scale = d.ONE),
                          f.stopAllByTarget(
                            null == (o = this.currentXiuMoney) ? void 0 : o.node
                          ),
                          p(
                            null == (r = this.currentXiuMoney) ? void 0 : r.node
                          )
                            .sequence(
                              p().to(0.2, { scale: new d(1.1, 1.1, 1) }),
                              p().to(0.2, { scale: d.ONE })
                            )
                            .start();
                      if ((R.emit(G.UPDATE_BET_EVENT_KEY, l, c), b > 0))
                        null != (s = this.txt_bet_tai_current_amount) &&
                          s.node.parent &&
                          (this.txt_bet_tai_current_amount.node.parent.active =
                            !0),
                          this.txt_bet_tai_current_amount &&
                            (this.txt_bet_tai_current_amount.string =
                              S.formatNumber(b));
                      if (m > 0)
                        null != (u = this.txt_bet_xiu_current_amount) &&
                          u.node.parent &&
                          (this.txt_bet_xiu_current_amount.node.parent.active =
                            !0),
                          this.txt_bet_xiu_current_amount &&
                            (this.txt_bet_xiu_current_amount.string =
                              S.formatNumber(m));
                      this.taiPlayersCount &&
                        (this.taiPlayersCount.string = _.toString()),
                        this.xiuPlayersCount &&
                          (this.xiuPlayersCount.string = h.toString());
                    }
                }),
                (o.stop_all_main_game_action = function () {
                  f.stopAllByTarget(this.node);
                }),
                (o.showResult = function (t, e, i, n, a) {
                  var o,
                    r = this;
                  (this.hasResult = !0),
                    g("show result"),
                    this.stop_all_main_game_action(),
                    null == (o = this.batCmp) || o.hide(),
                    (this._playing = !1);
                  var s = 3;
                  a || (s = 0);
                  var u = function () {
                      r.prepareForNewGame(r.timeForPaying - 2.6 - s),
                        r.dice1 && (r.dice1.node.active = !0),
                        r.dice2 && (r.dice2.node.active = !0),
                        r.dice3 && (r.dice3.node.active = !0);
                      var n = "#1 END_F" + t,
                        a = "#2 END_F" + e,
                        o = "#3 END_F" + i;
                      if (
                        (r.dice1 && r.dice1.setAnimation(0, n, !1),
                        r.dice2 && r.dice2.setAnimation(0, a, !1),
                        r.dice3 && r.dice3.setAnimation(0, o, !1),
                        !r._results.some(function (t) {
                          return t.sessionID == r._sessionID;
                        }))
                      ) {
                        var u = new $e();
                        (u.d1 = t),
                          (u.d2 = e),
                          (u.d3 = i),
                          (u.sessionID = r._sessionID),
                          r._results.push(u);
                      }
                    },
                    l = function () {
                      var n,
                        a,
                        o,
                        s = t + e + i > 10;
                      if (
                        (null == (n = x.getInstance()) || n.showTaiXiuResult(s),
                        R.emit(G.UPDATE_RESULT_EVENT_KEY, s),
                        null == (a = r.batCmp) || a.hide(),
                        t + e + i > 10
                          ? (r.tai_default && (r.tai_default.active = !1),
                            r.xiu_default && (r.xiu_default.active = !0),
                            r.tai_on && (r.tai_on.active = !0),
                            r.xiu_on && (r.xiu_on.active = !1))
                          : (r.tai_default && (r.tai_default.active = !0),
                            r.xiu_default && (r.xiu_default.active = !1),
                            r.tai_on && (r.tai_on.active = !1),
                            r.xiu_on && (r.xiu_on.active = !0)),
                        "" != (null == (o = r.refundMoney) ? void 0 : o.string))
                      ) {
                        var u, l, c;
                        r.result_node && (r.result_node.active = !0),
                          null == (u = r.result_node) ||
                            u.setPosition(new d(0, -145, 0));
                        var _ =
                          null == (l = r.result_node)
                            ? void 0
                            : l.getComponent(m);
                        _ && (_.opacity = 255),
                          p(r.result_node)
                            .sequence(
                              p().by(0.5, { position: new d(0, 45, 0) }),
                              p().call(function () {
                                H.sendRefreshMoney();
                              }),
                              p().delay(4),
                              p().call(function () {
                                var t;
                                p(
                                  null == (t = r.result_node)
                                    ? void 0
                                    : t.getComponent(m)
                                )
                                  .to(0.3, { opacity: 1 })
                                  .start();
                              })
                            )
                            .start(),
                          r.win_sfx &&
                            (null == (c = w.getInstance()) ||
                              c.playAdditionalSfx(r.win_sfx));
                      }
                      r.updateCau();
                    };
                  if (n) {
                    p(this.node)
                      .sequence(
                        p().delay(s),
                        p().call(function () {
                          var n, a, o, s, u;
                          r.remainTimeToBetting &&
                            (r.remainTimeToBetting.enabled = !1),
                            null == (n = r.dice1) ||
                              null == (a = n.node.parent) ||
                              a.setRotationFromEuler(
                                new d(0, 0, B.getRandomInt(-360, 360))
                              ),
                            r.dice1 && (r.dice1.node.active = !0),
                            r.dice2 && (r.dice2.node.active = !0),
                            r.dice3 && (r.dice3.node.active = !0);
                          var l = "#1 WHITE_F" + t,
                            c = "#2 WHITE_F" + e,
                            _ = "#3 WHITE_F" + i;
                          null == (o = r.dice1) || o.setAnimation(0, l, !1),
                            null == (s = r.dice2) || s.setAnimation(0, c, !1),
                            null == (u = r.dice3) || u.setAnimation(0, _, !1);
                        }),
                        p().delay(1.45),
                        p().call(function () {
                          var t;
                          r.IsOpened() &&
                            r.roi_xi_ngau &&
                            (null == (t = w.getInstance()) ||
                              t.playAdditionalSfx(r.roi_xi_ngau));
                        }),
                        p().delay(1.6 - 1.45),
                        p().call(function () {
                          var t;
                          null != (t = r.btn_nan) &&
                            t.isChecked &&
                            (r.batCmp && (r.batCmp.node.active = !0),
                            r.batCmp && (r.batCmp.onOpenBat = l));
                        }),
                        p().delay(1),
                        p().call(function () {
                          var t;
                          u(), (null != (t = r.btn_nan) && t.isChecked) || l();
                        })
                      )
                      .start();
                  } else
                    this.remainTimeToBetting &&
                      (this.remainTimeToBetting.enabled = !1),
                      u(),
                      l();
                }),
                (o.setCau = function (t) {
                  this._results = [];
                  for (var e = 0; e < t.length; e++) {
                    var i = t[e],
                      n = i.d1,
                      a = i.d2,
                      o = i.d3,
                      r = i.sid || 0,
                      s = new $e();
                    (s.d1 = n),
                      (s.d2 = a),
                      (s.d3 = o),
                      (s.sessionID = r),
                      this._results.push(s);
                  }
                  this.updateCau(!1);
                }),
                (o.setJackpot = function (t) {
                  this.currentJackpot = t;
                }),
                (o.noHu = function (t) {
                  for (var e = 0; e < t.length; e++) {
                    var i = t[e];
                    i.uid, i.jw;
                  }
                }),
                (o.loadChatHistory = function (t) {
                  var e;
                  null == (e = this.taiXiuChatView) || e.loadChatHistory(t);
                }),
                (o.updateChat = function (t) {
                  var e;
                  null == (e = this.taiXiuChatView) || e.updateChat(t);
                }),
                (o.updateResultMoney = function (t) {
                  var i,
                    n = t.bs || null;
                  n && (null == (i = e.getInstance()) || i.updateBetInfo(n));
                  var a = t.d1,
                    o = t.d2,
                    r = t.d3;
                  this.showResult(a, o, r, !0, !1);
                  var s = 0;
                  null != t.wm && null != t.wm && (s = t.wm),
                    (this._playing = !1),
                    (this._inputingMoney = 0),
                    this.txt_bet_tai_amount &&
                      (this.txt_bet_tai_amount.string = "0"),
                    this.txt_bet_xiu_amount &&
                      (this.txt_bet_xiu_amount.string = "0"),
                    this.refundMoney &&
                      (this.refundMoney.string =
                        s > 0 ? "+" + S.formatNumber(s) : "");
                }),
                (o.updateCau = function (t) {
                  var e,
                    i = this;
                  if (
                    (void 0 === t && (t = !0),
                    null == (e = this.taiXiuSessionHistoryView) ||
                      e.setHistory(this._results),
                    this.toggle_results.forEach(function (t) {
                      var e, i;
                      f.stopAllByTarget(t),
                        f.stopAllByTarget(
                          (null == (e = t.checkMark)
                            ? void 0
                            : e.node.getComponent(m)) || void 0
                        );
                      var n =
                        null == (i = t.checkMark)
                          ? void 0
                          : i.node.getComponent(m);
                      n && (n.opacity = 1),
                        t.node.children[2] && (t.node.children[2].active = !1),
                        (t.node.active = !0);
                    }),
                    t)
                  ) {
                    var n = (function () {
                      var t = i.toggle_results.sort(function (t, e) {
                          return t.node.position.x < e.node.position.x ? -1 : 1;
                        }),
                        e = 0;
                      i._results.length > t.length &&
                        (e = i._results.length - t.length);
                      for (
                        var n = function (n) {
                            var a =
                              i._results[n].d1 +
                              i._results[n].d2 +
                              i._results[n].d3;
                            if (n == i._results.length - 1)
                              f.stopAllByTarget(t[0].node),
                                (t[0].node.active = !1),
                                t[0].node.setPosition(new d(170.5, 40, 0)),
                                p(t[0].node)
                                  .delay(0.2)
                                  .call(function () {
                                    var e;
                                    if (a > 10) {
                                      var n,
                                        o = t[0].target.getComponent(y);
                                      o &&
                                        (o.spriteFrame = i.sprFrame_kq_tai[0]);
                                      var r =
                                        null == (n = t[0].checkMark)
                                          ? void 0
                                          : n.node.getComponent(y);
                                      r &&
                                        (r.spriteFrame = i.sprFrame_kq_tai[1]);
                                    } else {
                                      var s,
                                        u = t[0].target.getComponent(y);
                                      u &&
                                        (u.spriteFrame = i.sprFrame_kq_xiu[0]);
                                      var l =
                                        null == (s = t[0].checkMark)
                                          ? void 0
                                          : s.node.getComponent(y);
                                      l &&
                                        (l.spriteFrame = i.sprFrame_kq_xiu[1]);
                                    }
                                    (t[0].node.active = !0),
                                      p(
                                        null == (e = t[0].checkMark)
                                          ? void 0
                                          : e.node.getComponent(m)
                                      )
                                        .repeatForever(
                                          p().sequence(
                                            p().to(0.3, { opacity: 255 }),
                                            p().to(0.3, { opacity: 0 })
                                          )
                                        )
                                        .start();
                                  })
                                  .to(0.2, { position: new d(170.5, 0, 0) })
                                  .start();
                            else {
                              var o,
                                r,
                                u = n - e + 1,
                                l = null;
                              t[u].node.children[2] &&
                                (l = t[u].node.children[2].getComponent(s)),
                                l && (l.node.active = !1);
                              var c = t[u].target.getComponent(y);
                              c && a > 10
                                ? (c.spriteFrame = i.sprFrame_kq_tai[0])
                                : c && (c.spriteFrame = i.sprFrame_kq_xiu[0]),
                                f.stopAllByTarget(
                                  (null == (o = t[u].checkMark)
                                    ? void 0
                                    : o.node.getComponent(m)) || void 0
                                );
                              var _ =
                                null == (r = t[u].checkMark)
                                  ? void 0
                                  : r.node.getComponent(m);
                              _ && (_.opacity = 1);
                              var h = i.cauPosition[u - 1] || d.ZERO;
                              f.stopAllByTarget(t[u].node),
                                p(t[u].node)
                                  .to(0.2, { position: new d(h.x, h.y, h.z) })
                                  .start();
                            }
                          },
                          a = e;
                        a < i._results.length;
                        a++
                      )
                        n(a);
                      return { v: void 0 };
                    })();
                    if ("object" == typeof n) return n.v;
                  }
                  var a = this.toggle_results.sort(function (t, e) {
                      return t.node.position.x < e.node.position.x ? -1 : 1;
                    }),
                    o = 0;
                  this._results.length > a.length &&
                    (o = this._results.length - a.length);
                  for (var r = o; r < this._results.length; r++) {
                    var u = this._results[r].d1,
                      l = this._results[r].d2,
                      c = this._results[r].d3,
                      _ = r - o;
                    f.stopAllByTarget(a[_]);
                    var h = u + l + c,
                      b = a[_].target.getComponent(y);
                    b && h > 10
                      ? (b.spriteFrame = this.sprFrame_kq_tai[0])
                      : b && (b.spriteFrame = this.sprFrame_kq_xiu[0]);
                    var g = null;
                    if (
                      (a[_].node.children[2] &&
                        (g = a[_].node.children[2].getComponent(s)),
                      g && (g.node.active = !1),
                      r == this._results.length - 1)
                    ) {
                      var w,
                        x,
                        T =
                          null == (w = a[_].checkMark)
                            ? void 0
                            : w.node.getComponent(y);
                      T && h > 10
                        ? (T.spriteFrame = this.sprFrame_kq_tai[1])
                        : T && (T.spriteFrame = this.sprFrame_kq_xiu[1]),
                        g &&
                          ((g.node.active = !0),
                          (g.color = h > 10 ? v.WHITE : v.BLACK),
                          (g.string = h.toString())),
                        p(
                          null == (x = a[_].checkMark)
                            ? void 0
                            : x.node.getComponent(m)
                        )
                          .repeatForever(
                            p().sequence(
                              p().to(0.3, { opacity: 255 }),
                              p().to(0.3, { opacity: 0 })
                            )
                          )
                          .start();
                    }
                    var M = this.cauPosition[_];
                    a[_].node.setPosition(M);
                  }
                }),
                (o.updateThisPlayerBetting = function (t, e, i, n, a, o, r) {
                  var s;
                  (void 0 === r && (r = !0), i > 0 && r) &&
                    (V.showNoti("Đặt cược thành công!", this.main, k.TAIXIU, 1),
                    null == (s = w.getInstance()) ||
                      s.playSfx(this.bet_succeed_sfx));
                  for (var u = 0; u < this._infos.length; u++)
                    if (this._infos[u].aid == t)
                      if (1 == e) {
                        if (
                          ((this._infos[u].thisPlayerTaiBet = i),
                          (this._infos[u].totalTaiBeting = n),
                          (this._infos[u].totalTaiUser = a),
                          this._aid == t)
                        ) {
                          var l;
                          if (i > 0)
                            null != (l = this.txt_bet_tai_current_amount) &&
                              l.node.parent &&
                              (this.txt_bet_tai_current_amount.node.parent.active =
                                !0),
                              this.txt_bet_tai_current_amount &&
                                (this.txt_bet_tai_current_amount.string =
                                  S.formatNumber(i));
                          this.currentTaiMoney &&
                            (this.currentTaiMoney.string = S.formatNumber(
                              this._infos[u].totalTaiBeting
                            )),
                            this.currentXiuMoney &&
                              (this.currentXiuMoney.string = S.formatNumber(
                                this._infos[u].totalXiuBeting
                              ));
                        }
                      } else if (
                        ((this._infos[u].thisPlayerXiuBet = i),
                        (this._infos[u].totalXiuBeting = n),
                        (this._infos[u].totalXiuUser = a),
                        this._aid == t)
                      ) {
                        var c;
                        if (i > 0)
                          null != (c = this.txt_bet_xiu_current_amount) &&
                            c.node.parent &&
                            (this.txt_bet_xiu_current_amount.node.parent.active =
                              !0),
                            this.txt_bet_xiu_current_amount &&
                              (this.txt_bet_xiu_current_amount.string =
                                S.formatNumber(i));
                        this.currentTaiMoney &&
                          (this.currentTaiMoney.string = S.formatNumber(
                            this._infos[u].totalTaiBeting
                          )),
                          this.currentXiuMoney &&
                            (this.currentXiuMoney.string = S.formatNumber(
                              this._infos[u].totalXiuBeting
                            ));
                      }
                }),
                (o.showRank = function () {
                  var t;
                  null == (t = this.taiXiuBetRankView) || t.fetchRank();
                }),
                (o.showBetHistory = function () {
                  V.getInstance().showLoading();
                  var t = {};
                  (t.cmd = T.GET_BET_HISTORY),
                    (t.L = 500),
                    (t.S = 0),
                    (t.aid = this._aid);
                  var e = [
                    U.ZonePlugin_Type,
                    "MiniGame",
                    "taixiuUnbalancedPlugin",
                    t,
                  ];
                  I.send(e);
                }),
                (o.isCanDeactiveRoot = function () {
                  return !0;
                }),
                (o.IsLiveStreamOverlap = function (e) {
                  var i;
                  return (
                    !!t.prototype.IsLiveStreamOverlap.call(this, e) ||
                    !(
                      null == (i = this.taiXiuSessionAnalyticsView) ||
                      !i.IsShowing()
                    )
                  );
                }),
                (o.sendSessionAnalyticsCallback = function (t) {
                  (this._sessionIDAnalytics += t),
                    this._sessionIDAnalytics >= this._sessionID &&
                      (this._sessionIDAnalytics = this._sessionID),
                    this._sessionIDAnalytics <= 0 &&
                      (this._sessionIDAnalytics = 0);
                  var e = {};
                  (e.cmd = T.SESSION_ANALYTIC),
                    (e.sid = this._sessionIDAnalytics),
                    (e.aid = this._aid);
                  var i = [
                    U.ZonePlugin_Type,
                    "MiniGame",
                    "taixiuUnbalancedPlugin",
                    e,
                  ];
                  I.send(i),
                    this._sessionIDAnalytics >= this._sessionID &&
                      (this._sessionIDAnalytics = this._sessionID - 1);
                }),
                (o.show = function () {
                  var e,
                    i = this;
                  return (
                    this.isShowFirstTime &&
                      ((this.isShowFirstTime = !1), M.subcribeTaiXiu()),
                    null == (e = x.getInstance()) ||
                      e.bringGameViewToTop(this, !0),
                    t.prototype.show.call(this, function () {
                      var t;
                      null == (t = i.taiXiuChatView) || t.open();
                    }),
                    !0
                  );
                }),
                (o.hide = function () {
                  var e;
                  t.prototype.hide.call(this),
                    null == (e = this.taiXiuChatView) || e.close();
                }),
                (o.init = function () {
                  var e;
                  null == (e = this.batCmp) || e.init(),
                    t.prototype.init.call(this),
                    t.prototype.hideImmediately.call(this);
                }),
                e
              );
            })(X)).instance = null),
            (Yt = e((Kt = Ze).prototype, "lblSession", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Zt = e(Kt.prototype, "taiPlayersCount", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Wt = e(Kt.prototype, "xiuPlayersCount", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (jt = e(Kt.prototype, "currentTaiMoney", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Jt = e(Kt.prototype, "currentXiuMoney", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Qt = e(Kt.prototype, "remainTimeToBetting", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($t = e(Kt.prototype, "remainTimeToStartNew", [j], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (te = e(Kt.prototype, "remainTimeToStartNewBG", [J], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ee = e(Kt.prototype, "dice1", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ie = e(Kt.prototype, "dice2", [$], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ne = e(Kt.prototype, "dice3", [tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ae = e(Kt.prototype, "taiXiuChatView", [et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (oe = e(Kt.prototype, "taiXiuBetHistoryView", [it], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (re = e(Kt.prototype, "taiXiuBetRankView", [nt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (se = e(Kt.prototype, "taiXiuSessionAnalyticsView", [at], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ue = e(Kt.prototype, "taiXiuSessionHistoryView", [ot], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (le = e(Kt.prototype, "tai_default", [rt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ce = e(Kt.prototype, "tai_on", [st], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_e = e(Kt.prototype, "xiu_default", [ut], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (he = e(Kt.prototype, "xiu_on", [lt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (be = e(Kt.prototype, "toggle_results", [ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (de = e(Kt.prototype, "sprFrame_kq_tai", [_t], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (fe = e(Kt.prototype, "sprFrame_kq_xiu", [ht], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (pe = e(Kt.prototype, "btn_bet_tai", [bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (me = e(Kt.prototype, "btn_bet_xiu", [dt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ge = e(Kt.prototype, "txt_bet_tai_amount", [ft], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ye = e(Kt.prototype, "txt_bet_xiu_amount", [pt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ve = e(Kt.prototype, "txt_bet_tai_current_amount", [mt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (we = e(Kt.prototype, "txt_bet_xiu_current_amount", [gt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (xe = e(Kt.prototype, "btn_chips", [yt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Te = e(Kt.prototype, "lbl_chips", [vt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Me = e(Kt.prototype, "btn_all_in", [wt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ie = e(Kt.prototype, "btn_bet_ok", [xt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Be = e(Kt.prototype, "btn_rank", [Tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ke = e(Kt.prototype, "btn_bet_history", [Mt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Se = e(Kt.prototype, "btn_session_history", [It], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Xe = e(Kt.prototype, "btn_help", [Bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ce = e(Kt.prototype, "btn_chat", [kt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ne = e(Kt.prototype, "btn_huy", [St], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ze = e(Kt.prototype, "btn_session_analytics", [Xt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ae = e(Kt.prototype, "btn_event", [Ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pe = e(Kt.prototype, "bet_panel", [Nt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (De = e(Kt.prototype, "result_node", [zt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Fe = e(Kt.prototype, "refundMoney", [At], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ee = e(Kt.prototype, "btn_nan", [Pt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ve = e(Kt.prototype, "batCmp", [Dt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Re = e(Kt.prototype, "bound_1", [Ft], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ge = e(Kt.prototype, "bound_2", [Et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (He = e(Kt.prototype, "session_start_sfx", [Vt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ue = e(Kt.prototype, "bet_succeed_sfx", [Rt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (qe = e(Kt.prototype, "roi_xi_ngau", [Gt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Oe = e(Kt.prototype, "win_sfx", [Ht], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Le = e(Kt.prototype, "commonInfoPopup", [Ut], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ke = e(Kt.prototype, "btn_prev_session", [qt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ye = e(Kt.prototype, "btn_next_session", [Ot], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Lt = Kt))
          ) || Lt)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuInfoView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CommonPopup.ts"],
  function (n) {
    "use strict";
    var i, o, t, e;
    return {
      setters: [
        function (n) {
          i = n.inheritsLoose;
        },
        function (n) {
          (o = n.cclegacy), (t = n._decorator);
        },
        function (n) {
          e = n.CommonPopup;
        },
      ],
      execute: function () {
        var u;
        o._RF.push({}, "63b3933aJJK15UFkLVfnbvn", "TaiXiuInfoView", void 0);
        var c = t.ccclass;
        n(
          "default",
          c("TaiXiuInfoView")(
            (u = (function (n) {
              function o() {
                return n.apply(this, arguments) || this;
              }
              return i(o, n), o;
            })(e))
          ) || u
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaixiuJackpotHistoryItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./StringUtils.ts",
    "./TaiXiuJackpotHistoryView.ts",
  ],
  function (t) {
    "use strict";
    var i, e, r, n, o, a, s, u, l, p, c, h, _, d, m;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (a = t._decorator),
            (s = t.Label),
            (u = t.Button),
            (l = t.Node),
            (p = t.Sprite),
            (c = t.SpriteFrame),
            (h = t.Color),
            (_ = t.Component);
        },
        function (t) {
          d = t.StringUtils;
        },
        function (t) {
          m = t.default;
        },
      ],
      execute: function () {
        var f, b, y, w, g, x, F, H, k, J, v, V, z, X, S, T, C, I, D;
        o._RF.push(
          {},
          "d0fa8C1u4ZBbYJdRH7erCGf",
          "TaixiuJackpotHistoryItemView",
          void 0
        );
        var L = a.ccclass,
          B = a.property;
        t(
          "default",
          ((f = L("TaixiuJackpotHistoryItemView")),
          (b = B(s)),
          (y = B(s)),
          (w = B(u)),
          (g = B(l)),
          (x = B(p)),
          (F = B(p)),
          (H = B(p)),
          (k = B([c])),
          f(
            ((V = i(
              (v = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, o = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    r(i, "txt_phien_time", V, n(i)),
                    r(i, "txt_phien_tienhu", z, n(i)),
                    r(i, "btn_detail", X, n(i)),
                    r(i, "taiXiuJackpotHistoryView_node", S, n(i)),
                    (i.taiXiuJackpotHistoryView = null),
                    r(i, "spr_d1", T, n(i)),
                    r(i, "spr_d2", C, n(i)),
                    r(i, "spr_d3", I, n(i)),
                    r(i, "spriteFrame_dice", D, n(i)),
                    (i.users = []),
                    (i.time = ""),
                    i
                  );
                }
                e(i, t);
                var o = i.prototype;
                return (
                  (o.onLoad = function () {
                    var t,
                      i,
                      e = this,
                      r =
                        null == (t = this.taiXiuJackpotHistoryView_node)
                          ? void 0
                          : t.getComponent(m);
                    this.taiXiuJackpotHistoryView &&
                      (this.taiXiuJackpotHistoryView = r || null),
                      null == (i = this.btn_detail) ||
                        i.node.on("click", function () {
                          var t;
                          null == (t = e.taiXiuJackpotHistoryView) ||
                            t.showDetail(e.users, +e.time);
                        });
                  }),
                  (o.show = function (t, i, e, r, n) {
                    this.txt_phien_time &&
                      (this.txt_phien_time.string = t.toString()),
                      this.txt_phien_tienhu &&
                        (this.txt_phien_tienhu.color = h.WHITE),
                      this.txt_phien_tienhu &&
                        (this.txt_phien_tienhu.string = d.formatNumber(e));
                    var o = r[0] - 1,
                      a = r[1] - 1,
                      s = r[2] - 1;
                    o < this.spriteFrame_dice.length &&
                      this.spr_d1 &&
                      (this.spr_d1.spriteFrame = this.spriteFrame_dice[o]),
                      a < this.spriteFrame_dice.length &&
                        this.spr_d2 &&
                        (this.spr_d2.spriteFrame = this.spriteFrame_dice[a]),
                      s < this.spriteFrame_dice.length &&
                        this.spr_d3 &&
                        (this.spr_d3.spriteFrame = this.spriteFrame_dice[s]),
                      (this.users = n),
                      (this.time = i);
                  }),
                  i
                );
              })(_)).prototype,
              "txt_phien_time",
              [b],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (z = i(v.prototype, "txt_phien_tienhu", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (X = i(v.prototype, "btn_detail", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = i(v.prototype, "taiXiuJackpotHistoryView_node", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = i(v.prototype, "spr_d1", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = i(v.prototype, "spr_d2", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = i(v.prototype, "spr_d3", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = i(v.prototype, "spriteFrame_dice", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (J = v))
          ) || J)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuJackpotHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./StringUtils.ts",
    "./TaixiuJackpotHistoryItemView.ts",
    "./TaiXiuJackpotRankItemView.ts",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./HttpManager.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, r, o, a, l, s, u, c, p, _, h, m, f, d;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (a = t._decorator),
            (l = t.Button),
            (s = t.Label),
            (u = t.Node),
            (c = t.UIOpacity);
        },
        function (t) {
          p = t.StringUtils;
        },
        function (t) {
          _ = t.default;
        },
        function (t) {
          h = t.default;
        },
        function (t) {
          m = t.CommonPopup;
        },
        function (t) {
          f = t.GameConfigManager;
        },
        function (t) {
          d = t.httpManager;
        },
      ],
      execute: function () {
        var g, b, y, v, w, k, P, z, H, T, C, J, S, M, N, I, L, U, j, x, D;
        o._RF.push(
          {},
          "6a8b9nrIYFKz6bheJuy41CG",
          "TaiXiuJackpotHistoryView",
          void 0
        );
        var F = a.ccclass,
          V = a.property,
          X = function () {
            (this.money = 0),
              (this.uid = ""),
              (this.displayName = ""),
              (this.customerId = ""),
              (this.avaUrl = ""),
              (this.platform = 0);
          },
          G = function () {
            (this.time = ""),
              (this.time2 = ""),
              (this.jackpotMoney = 0),
              (this.users = []),
              (this.results = []);
          };
        t(
          "default",
          ((g = F("TaiXiuJackpotHistoryView")),
          (b = V(l)),
          (y = V(l)),
          (v = V(l)),
          (w = V(s)),
          (k = V(s)),
          (P = V(u)),
          (z = V(u)),
          (H = V([u])),
          (T = V([u])),
          g(
            ((S = e(
              (J = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "btn_prev", S, r(e)),
                    n(e, "btn_prev_detail", M, r(e)),
                    n(e, "btn_next", N, r(e)),
                    n(e, "lbl_page", I, r(e)),
                    n(e, "lbl_time_detail", L, r(e)),
                    n(e, "history_node", U, r(e)),
                    n(e, "rank_node", j, r(e)),
                    n(e, "item_nodes", x, r(e)),
                    n(e, "rank_item_nodes", D, r(e)),
                    (e._bets = []),
                    (e.currentPage = 1),
                    (e.item_views = []),
                    (e.rank_item_views = []),
                    e
                  );
                }
                i(e, t);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    var e,
                      i,
                      n,
                      r = this;
                    t.prototype.onLoad.call(this),
                      null == (e = this.btn_prev) ||
                        e.node.on("click", function () {
                          r.currentPage > 1 &&
                            ((r.currentPage -= 1),
                            r.lbl_page &&
                              (r.lbl_page.string = r.currentPage.toString())),
                            r.fetchHistory(!1);
                        }),
                      null == (i = this.btn_prev_detail) ||
                        i.node.on("click", function () {
                          r.rank_node && (r.rank_node.active = !1),
                            r.lbl_time_detail &&
                              (r.lbl_time_detail.node.active = !1),
                            r.history_node && (r.history_node.active = !0);
                        }),
                      null == (n = this.btn_next) ||
                        n.node.on("click", function () {
                          r.item_views.filter(function (t) {
                            var e;
                            return (
                              1 ==
                              (null == t || null == (e = t.node.getComponent(c))
                                ? void 0
                                : e.opacity)
                            );
                          }).length > 0 ||
                            ((r.currentPage += 1),
                            r.lbl_page &&
                              (r.lbl_page.string = r.currentPage.toString())),
                            r.fetchHistory(!1);
                        });
                  }),
                  (o.goToFirstPage = function () {
                    (this.currentPage = 1),
                      this.lbl_page &&
                        (this.lbl_page.string = this.currentPage.toString());
                  }),
                  (o.fetchHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0), t && this.goToFirstPage();
                    var i = 6 * (this.currentPage - 1),
                      n = f.SAdomainURL;
                    (n += "?command=fetchTXUJackpotHistory"),
                      (n += "&limit="),
                      (n += "6"),
                      (n += "&skip="),
                      (n += i.toString()),
                      d.sendGET({
                        url: n,
                        onCompleted: function (i) {
                          e._bets = [];
                          for (
                            var n = JSON.parse(i).data.items, r = 0;
                            r < n.length;
                            r++
                          ) {
                            for (
                              var o = n[r],
                                a = o.winners,
                                l = new G(),
                                s = 0,
                                u = 0;
                              u < a.length;
                              u++
                            ) {
                              var c = a[u],
                                _ = new X();
                              (_.money = c.jackpotWin),
                                (_.displayName = c.displayName),
                                l.users.push(_),
                                (s += _.money);
                            }
                            l.jackpotMoney = s;
                            var h = o.timestamp,
                              m = new Date(h);
                            (l.time = p.formatTime(m)),
                              (l.time2 = p.formatTime2(m));
                            for (
                              var f = o.results, d = [], g = 0;
                              g < f.length;
                              g++
                            ) {
                              var b = f[g];
                              d.push(b);
                            }
                            (l.results = d), e._bets.push(l);
                          }
                          e.showJackpotHistory(t);
                        },
                      });
                  }),
                  (o.showJackpotHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0),
                      this.item_views.length <= 0 &&
                        (this.item_views = this.item_nodes.map(function (t) {
                          return t.getComponent(_);
                        })),
                      this.item_views.forEach(function (t, i) {
                        var n = e._bets[i],
                          r = null == t ? void 0 : t.node.getComponent(c);
                        null != n && null != n
                          ? (r && (r.opacity = 255),
                            null == t ||
                              t.show(
                                Number(n.time),
                                n.time2,
                                n.jackpotMoney,
                                n.results,
                                n.users
                              ))
                          : r && (r.opacity = 1);
                      }),
                      t && this.show();
                  }),
                  (o.showDetail = function (t, e) {
                    this.rank_item_views.length <= 0 &&
                      (this.rank_item_views = this.rank_item_nodes.map(
                        function (t) {
                          return t.getComponent(h);
                        }
                      )),
                      this.rank_item_views.forEach(function (e, i) {
                        var n = t[i],
                          r = null == e ? void 0 : e.node.getComponent(c);
                        null != n && null != n
                          ? (r && (r.opacity = 255),
                            null == e || e.show(i + 1, n.displayName, n.money))
                          : r && (r.opacity = 1);
                      }),
                      this.lbl_time_detail &&
                        (this.lbl_time_detail.node.active = !0),
                      this.lbl_time_detail &&
                        (this.lbl_time_detail.string = e.toString()),
                      this.rank_node && (this.rank_node.active = !0),
                      this.history_node && (this.history_node.active = !1);
                  }),
                  e
                );
              })(m)).prototype,
              "btn_prev",
              [b],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (M = e(J.prototype, "btn_prev_detail", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(J.prototype, "btn_next", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(J.prototype, "lbl_page", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(J.prototype, "lbl_time_detail", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = e(J.prototype, "history_node", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = e(J.prototype, "rank_node", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = e(J.prototype, "item_nodes", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (D = e(J.prototype, "rank_item_nodes", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (C = J))
          ) || C)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuJackpotRankItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var n, i, e, r, a, o, u, s, l, c, p;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (u = t.Label),
            (s = t.Sprite),
            (l = t.Color),
            (c = t.Component);
        },
        function (t) {
          p = t.StringUtils;
        },
      ],
      execute: function () {
        var _, h, m, f, k, x, b, w, g, y, d;
        a._RF.push(
          {},
          "ed5b6HQ6XxCU4QZj2u+IOve",
          "TaiXiuJackpotRankItemView",
          void 0
        );
        var v = o.ccclass,
          z = o.property;
        t(
          "default",
          ((_ = v("TaiXiuJackpotRankItemView")),
          (h = z(u)),
          (m = z(s)),
          (f = z(u)),
          (k = z(u)),
          _(
            ((w = n(
              (b = (function (t) {
                function n() {
                  for (
                    var n, i = arguments.length, a = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (n = t.call.apply(t, [this].concat(a)) || this),
                    e(n, "txt_rank", w, r(n)),
                    e(n, "spr_rank", g, r(n)),
                    e(n, "txt_username", y, r(n)),
                    e(n, "txt_win_amount", d, r(n)),
                    n
                  );
                }
                return (
                  i(n, t),
                  (n.prototype.show = function (t, n, i) {
                    t > 3
                      ? (this.txt_rank && (this.txt_rank.node.active = !0),
                        this.spr_rank && (this.spr_rank.node.active = !1))
                      : (this.txt_rank && (this.txt_rank.node.active = !1),
                        this.spr_rank && (this.spr_rank.node.active = !0)),
                      this.txt_username &&
                        (this.txt_username.string = n.toString()),
                      this.txt_win_amount &&
                        (this.txt_win_amount.color = l.WHITE),
                      this.txt_win_amount &&
                        (this.txt_win_amount.string = p.formatNumber(i));
                  }),
                  n
                );
              })(c)).prototype,
              "txt_rank",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (g = n(b.prototype, "spr_rank", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = n(b.prototype, "txt_username", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = n(b.prototype, "txt_win_amount", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = b))
          ) || x)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuMessageHandler.ts",
  [
    "cc",
    "./TaiXiuGameView.ts",
    "./MiniGameNetworkHandler.ts",
    "./PersistManager.ts",
    "./SocketManager.ts",
    "./EventManager.ts",
  ],
  function (e) {
    "use strict";
    var t, a, n, i, s, T, r, E, l, _;
    return {
      setters: [
        function (e) {
          (t = e.cclegacy), (a = e.log), (n = e.tween);
        },
        function (e) {
          i = e.TaiXiuGameView;
        },
        function (e) {
          s = e.MiniGameNetworkHandler;
        },
        function (e) {
          T = e.PersistManager;
        },
        function (e) {
          (r = e.socketManager), (E = e.MessageRequest);
        },
        function (e) {
          (l = e.eventManager), (_ = e.EventKey);
        },
      ],
      execute: function () {
        var u, c;
        e({ TaiXiuKhongCan_Message: void 0, TaiXiu_Message: void 0 }),
          t._RF.push(
            {},
            "99490I3iFlIH72WfkvJNGaZ",
            "TaiXiuMessageHandler",
            void 0
          ),
          (function (e) {
            (e[(e.SUBSCRIBE_INFO = 1005)] = "SUBSCRIBE_INFO"),
              (e[(e.BET = 1e3)] = "BET"),
              (e[(e.SHOW_RESULT = 1003)] = "SHOW_RESULT"),
              (e[(e.CALCULATE_RESULT_MONEY = 1004)] = "CALCULATE_RESULT_MONEY"),
              (e[(e.START_GAME = 1002)] = "START_GAME"),
              (e[(e.SESSION_ANALYTIC = 1007)] = "SESSION_ANALYTIC"),
              (e[(e.UPDATE_BET_INFO = 1008)] = "UPDATE_BET_INFO"),
              (e[(e.GET_BET_HISTORY = 1009)] = "GET_BET_HISTORY"),
              (e[(e.CHAT = 1011)] = "CHAT"),
              (e[(e.BET_FREE = 1010)] = "BET_FREE");
          })(u || (u = e("TaiXiu_Message", {}))),
          (function (e) {
            (e[(e.SUBSCRIBE_INFO = 2e3)] = "SUBSCRIBE_INFO"),
              (e[(e.BET = 2002)] = "BET"),
              (e[(e.SHOW_RESULT = 2016)] = "SHOW_RESULT"),
              (e[(e.CALCULATE_RESULT_MONEY = 2006)] = "CALCULATE_RESULT_MONEY"),
              (e[(e.START_GAME = 2005)] = "START_GAME"),
              (e[(e.SESSION_ANALYTIC = 2009)] = "SESSION_ANALYTIC"),
              (e[(e.UPDATE_BET_INFO = 2007)] = "UPDATE_BET_INFO"),
              (e[(e.GET_BET_HISTORY = 2004)] = "GET_BET_HISTORY"),
              (e[(e.CHAT = 2008)] = "CHAT"),
              (e[(e.UPDATE_JACKPOT = 2011)] = "UPDATE_JACKPOT"),
              (e[(e.WIN_JACKPOT = 2010)] = "WIN_JACKPOT");
          })(c || (c = e("TaiXiuKhongCan_Message", {})));
        var o = e(
          "TaiXiuMessageHandler",
          (function () {
            function e() {}
            return (
              (e.subcribeTaiXiu = function () {
                var e = {};
                e.cmd = c.SUBSCRIBE_INFO;
                var t = [
                  E.ZonePlugin_Type,
                  "MiniGame",
                  "taixiuUnbalancedPlugin",
                  e,
                ];
                s.send(t);
              }),
              (e.handleMessage = function (e, t) {
                var n = e[1];
                if (n) {
                  var s = n.cmd;
                  if (s == c.SUBSCRIBE_INFO) {
                    var E,
                      l = n.sid || 0,
                      _ = n.gS || 0,
                      u = n.rmT || 0;
                    u /= 1e3;
                    var o = n.tFB || 0,
                      S = n.tFP || 0;
                    (o /= 1e3), (S /= 1e3);
                    var I = n.htr || [],
                      g = n.bs || [],
                      A = n.ag || 0,
                      h = n.ac || !1,
                      d = (n.fbn, n.fba || 0);
                    4;
                    var f = n.enableEvent || 0,
                      v = "",
                      R = "";
                    f && ((v = n.eventMgs || ""), (R = n.eventUrl || ""));
                    var N = n.cH || [];
                    if (
                      (null == (E = i.getInstance()) || E.loadChatHistory(N),
                      null != n.J && null != n.J)
                    ) {
                      var O,
                        B = n.J;
                      null == (O = i.getInstance()) || O.setJackpot(B);
                    }
                    var C = i.getInstance();
                    if (C)
                      C.subcribleInfo(l, _, u, I, g, A, h, 4, d, o, S, f, v, R);
                    else if (((this.timeForBetting = o), 2 == _))
                      t && this.startNewGame(t, u);
                    else if (3 == _) {
                      var M = I[I.length - 1];
                      M && t && this.showResult(t, M.d1, M.d2, M.d3);
                    }
                  } else if (s == c.UPDATE_JACKPOT) {
                    var U,
                      L = n.J || 0;
                    null == (U = i.getInstance()) || U.setJackpot(L);
                  } else if (s == c.WIN_JACKPOT) {
                    var H,
                      G = n.ps || [];
                    null == (H = i.getInstance()) || H.noHu(G);
                  } else if (s == c.BET) {
                    a("beet");
                    for (var P = n.bs || [], m = 0; m < P.length; m++) {
                      var F,
                        w = P[m] || {},
                        y = w.eid || 0,
                        Y = w.b || 0,
                        b = w.v || 0,
                        p = w.bc || 0;
                      null == (F = i.getInstance()) ||
                        F.updateThisPlayerBetting(1, y, Y, b, p, 0);
                    }
                    r.sendRefreshMoney();
                  } else if (1010 == s);
                  else if (s == c.SHOW_RESULT) {
                    var X = n.d1 || 0,
                      J = n.d2 || 0,
                      K = n.d3 || 0,
                      k = i.getInstance();
                    k
                      ? k.showResult(X, J, K, !0, !1)
                      : t && this.showResult(t, X, J, K);
                  } else if (s == c.CALCULATE_RESULT_MONEY) {
                    var D = i.getInstance();
                    D
                      ? D.updateResultMoney(n)
                      : t && this.showResult(t, n.d1, n.d2, n.d3);
                  } else if (s == c.START_GAME) {
                    var W = n.sid || 0,
                      V = i.getInstance();
                    V
                      ? V.startNewGame(W)
                      : (T.showNoti("Bắt đầu phiên mới."),
                        t && this.startNewGame(t, this.timeForBetting));
                  } else if (s == c.SESSION_ANALYTIC) {
                    var x;
                    T.getInstance().hideLoading();
                    var Z,
                      q = n.bs || [],
                      j = n.sid + "",
                      z = n.d1,
                      Q = n.d2,
                      $ = n.d3,
                      ee = n.st || 0;
                    if (!n.ended)
                      return void (
                        null == (Z = i.getInstance()) ||
                        Z.showNoti("Phiên chưa kết thúc")
                      );
                    null == (x = i.getInstance()) ||
                      x.fetchThongKe(q, j, z, Q, $, ee);
                  } else if (s == c.UPDATE_BET_INFO) {
                    var te,
                      ae = n.bs || [];
                    null == (te = i.getInstance()) || te.updateBetInfo(ae);
                  } else if (s == c.GET_BET_HISTORY) {
                    var ne;
                    T.getInstance().hideLoading();
                    var ie = n.items || [],
                      se = n.aid || 0;
                    null == (ne = i.getInstance()) || ne.fetchHistory(ie, se);
                  } else if (s == c.CHAT) {
                    var Te;
                    if ((this.chat_array.push(n), this.chat_array.length > 0))
                      null == (Te = i.getInstance()) ||
                        Te.updateChat(this.chat_array),
                        (this.chat_array = []);
                  }
                } else a("TaiXiuMessageHandler: dict is null");
              }),
              (e.startNewGame = function (e, t) {
                (t = Math.floor(t)),
                  e.startGameTaiXiu(t),
                  n(e)
                    .repeat(
                      t + 2,
                      n(e)
                        .call(function () {
                          e.startGameTaiXiu(t), (t -= 1) < 0 && (t = 0);
                        })
                        .then(n().delay(1))
                    )
                    .start();
              }),
              (e.showResult = function (e, t, a, i) {
                n(e.node)
                  .delay(2.6)
                  .call(function () {
                    var n = t + a + i > 10;
                    e.showTaiXiuResult(n), l.emit(_.UPDATE_RESULT_EVENT_KEY, n);
                  })
                  .start();
              }),
              e
            );
          })()
        );
        (o.chat_array = []), (o.timeForBetting = 0), t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuNoHuView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./StringUtils.ts",
    "./BlinkCmp.ts",
    "./SoundManager.ts",
    "./GameConfigManager.ts",
    "./EventManager.ts",
  ],
  function (n) {
    "use strict";
    var t, i, e, o, l, a, u, r, s, c, h, f, g, d, p, v, y, b, _, w, m;
    return {
      setters: [
        function (n) {
          (t = n.applyDecoratedDescriptor),
            (i = n.inheritsLoose),
            (e = n.initializerDefineProperty),
            (o = n.assertThisInitialized);
        },
        function (n) {
          (l = n.cclegacy),
            (a = n._decorator),
            (u = n.Node),
            (r = n.Sprite),
            (s = n.Label),
            (c = n.AudioClip),
            (h = n.Tween),
            (f = n.Vec3),
            (g = n.tween),
            (d = n.UIOpacity),
            (p = n.Component);
        },
        function (n) {
          v = n.StringUtils;
        },
        function (n) {
          y = n.default;
        },
        function (n) {
          b = n.SoundManager;
        },
        function (n) {
          _ = n.GameConfigManager;
        },
        function (n) {
          (w = n.eventManager), (m = n.EventKey);
        },
      ],
      execute: function () {
        var x, B, H, k, F, M, T, z, C, A, S, N, O, E, P, L, V, q, I;
        l._RF.push({}, "14948IH96VMF4OhmPEzy6y8", "TaiXiuNoHuView", void 0);
        var R = a.ccclass,
          D = a.property;
        n(
          "default",
          ((x = R("TaiXiuNoHuView")),
          (B = D(u)),
          (H = D(u)),
          (k = D(r)),
          (F = D(r)),
          (M = D(y)),
          (T = D(r)),
          (z = D(s)),
          (C = D(c)),
          x(
            ((N = t(
              (S = (function (n) {
                function t() {
                  for (
                    var t, i = arguments.length, l = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    l[a] = arguments[a];
                  return (
                    (t = n.call.apply(n, [this].concat(l)) || this),
                    e(t, "root", N, o(t)),
                    e(t, "black_screen", O, o(t)),
                    e(t, "noHuBgText", E, o(t)),
                    e(t, "noHuMoneyBg", P, o(t)),
                    e(t, "glow", L, o(t)),
                    e(t, "finishFx", V, o(t)),
                    e(t, "nohu_win_amount", q, o(t)),
                    e(t, "nohu_bgm", I, o(t)),
                    (t.win_amount_tween = null),
                    (t.activated_click = !1),
                    t
                  );
                }
                i(t, n);
                var l = t.prototype;
                return (
                  (l.onLoad = function () {
                    var n,
                      t = this;
                    null == (n = this.black_screen) ||
                      n.on("click", function () {
                        t.activated_click && t.hide();
                      });
                  }),
                  (l.activeClick = function () {
                    this.black_screen && (this.black_screen.active = !0),
                      (this.activated_click = !0);
                  }),
                  (l.show = function (n) {
                    var t,
                      i,
                      e,
                      o,
                      l,
                      a,
                      u,
                      r,
                      s,
                      c,
                      p,
                      y,
                      w,
                      m = this;
                    this.nohu_bgm && b.getInstance().playBgm(this.nohu_bgm),
                      this.root && (this.root.active = !0),
                      this.black_screen && (this.black_screen.active = !0),
                      (this.activated_click = !1),
                      h.stopAllByTarget(
                        null == (t = this.noHuBgText) ? void 0 : t.node
                      ),
                      h.stopAllByTarget(
                        null == (i = this.noHuMoneyBg) ? void 0 : i.node
                      ),
                      h.stopAllByTarget(
                        null == (e = this.finishFx) ? void 0 : e.node
                      ),
                      h.stopAllByTarget(
                        null == (o = this.glow) ? void 0 : o.node
                      ),
                      null == (l = this.win_amount_tween) || l.stop(),
                      null == (a = this.noHuBgText) ||
                        a.node.setPosition(new f(-_.getSizeWidth(), 0, 0)),
                      g(null == (u = this.noHuBgText) ? void 0 : u.node)
                        .to(0.4, { position: f.ZERO }, { easing: "expoOut" })
                        .start(),
                      this.finishFx && (this.finishFx.node.active = !1),
                      this.finishFx &&
                        this.finishFx.node.setScale(new f(3, 3, 3));
                    var x =
                      null == (r = this.finishFx)
                        ? void 0
                        : r.node.getComponent(d);
                    x && (x.opacity = 255),
                      g(null == (s = this.finishFx) ? void 0 : s.node)
                        .sequence(
                          g().delay(0.4),
                          g().call(function () {
                            m.finishFx && (m.finishFx.node.active = !0);
                          }),
                          g().to(0.3, { scale: f.ONE })
                        )
                        .start();
                    var B =
                        (null == (c = this.noHuMoneyBg)
                          ? void 0
                          : c.node.position) || f.ZERO,
                      H = new f(B);
                    (H.y = -485),
                      null == (p = this.noHuMoneyBg) || p.node.setPosition(H),
                      g(null == (y = this.noHuMoneyBg) ? void 0 : y.node)
                        .sequence(
                          g().delay(0.6),
                          g().to(0.3, { position: new f(0, -260, 0) })
                        )
                        .start(),
                      null == (w = this.glow) || w.run();
                    this.win_amount_tween = g({ a: 0 })
                      .to(
                        2,
                        { a: n },
                        {
                          progress: function (n, t, i, e) {
                            return (
                              m.nohu_win_amount &&
                                (m.nohu_win_amount.string = v.formatNumber(
                                  Math.floor(i)
                                )),
                              n + (t - n) * e
                            );
                          },
                        }
                      )
                      .call(function () {
                        m.nohu_win_amount &&
                          (m.nohu_win_amount.string = v.formatNumber(
                            Math.floor(n)
                          ));
                      })
                      .delay(2)
                      .call(function () {
                        m.activeClick();
                      })
                      .start();
                    var k = this.node.getComponent(d);
                    k && (k.opacity = 255);
                  }),
                  (l.hide = function () {
                    var n,
                      t,
                      i,
                      e,
                      o,
                      l,
                      a,
                      u,
                      r = this;
                    this.black_screen && (this.black_screen.active = !1),
                      (this.activated_click = !1),
                      h.stopAllByTarget(
                        null == (n = this.noHuBgText) ? void 0 : n.node
                      ),
                      h.stopAllByTarget(
                        null == (t = this.noHuMoneyBg) ? void 0 : t.node
                      ),
                      h.stopAllByTarget(
                        null == (i = this.finishFx) ? void 0 : i.node
                      ),
                      null == (e = this.glow) || e.stop(),
                      g(null == (o = this.noHuBgText) ? void 0 : o.node)
                        .to(
                          0.4,
                          { position: new f(-_.getSizeWidth(), 0, 0) },
                          { easing: "expoOut" }
                        )
                        .call(function () {
                          r.root && (r.root.active = !1),
                            w.emitLast(m.MusicPlay);
                        })
                        .start(),
                      g(null == (l = this.finishFx) ? void 0 : l.node)
                        .sequence(
                          g().to(0.3, { scale: new f(3, 3, 3) }),
                          g().call(function () {
                            r.finishFx && (r.finishFx.node.active = !1);
                          })
                        )
                        .start(),
                      g(
                        null == (a = this.finishFx)
                          ? void 0
                          : a.node.getComponent(d)
                      )
                        .to(0.3, { opacity: 1 })
                        .start(),
                      g(null == (u = this.noHuMoneyBg) ? void 0 : u.node)
                        .sequence(
                          g().call(function () {}),
                          g().to(0.3, { position: new f(0, -485, 0) })
                        )
                        .start();
                  }),
                  t
                );
              })(p)).prototype,
              "root",
              [B],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (O = t(S.prototype, "black_screen", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = t(S.prototype, "noHuBgText", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = t(S.prototype, "noHuMoneyBg", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = t(S.prototype, "glow", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = t(S.prototype, "finishFx", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = t(S.prototype, "nohu_win_amount", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = t(S.prototype, "nohu_bgm", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = S))
          ) || A)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuPopupCmp.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var o, i, e, n, s, a, l, r, c, p, d, u, h;
    return {
      setters: [
        function (t) {
          (o = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (a = t._decorator),
            (l = t.Node),
            (r = t.Vec3),
            (c = t.Tween),
            (p = t.UITransform),
            (d = t.UIOpacity),
            (u = t.tween),
            (h = t.Component);
        },
      ],
      execute: function () {
        var f, y, g, v, _;
        s._RF.push({}, "67df6jukxNHTKW0nLHfCeKU", "TaiXiuPopupCmp", void 0);
        var w = a.ccclass,
          O = a.property;
        t(
          "default",
          ((f = w("TaiXiuPopupCmp")),
          (y = O(l)),
          f(
            ((_ = o(
              (v = (function (t) {
                function o() {
                  for (
                    var o, i = arguments.length, s = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (o = t.call.apply(t, [this].concat(s)) || this),
                    e(o, "black_screen", _, n(o)),
                    (o.original_scale = r.ONE),
                    (o.start_position = r.ZERO),
                    (o.follow_with_node = null),
                    (o.isOpened = !1),
                    o
                  );
                }
                i(o, t);
                var s = o.prototype;
                return (
                  (s.onLoad = function () {
                    var t,
                      o = this;
                    null == (t = this.black_screen) ||
                      t.on("click", function () {
                        o.hide();
                      });
                  }),
                  (s.followNode = function (t) {
                    this.follow_with_node = t;
                  }),
                  (s.show = function () {
                    var t,
                      o,
                      i = this;
                    if (!this.isOpened && this.isTotallyClosed()) {
                      c.stopAllByTarget(this.node), (this.isOpened = !0);
                      var e =
                          null == (t = this.follow_with_node) ||
                          null == (o = t.parent)
                            ? void 0
                            : o.getComponent(p),
                        n =
                          (this.follow_with_node &&
                            (null == e
                              ? void 0
                              : e.convertToWorldSpaceAR(
                                  this.follow_with_node.position
                                ))) ||
                          r.ZERO;
                      (this.start_position = n), (this.node.active = !0);
                      var s = this.node.getComponent(d);
                      s && (s.opacity = 0),
                        (this.node.scale = r.ZERO),
                        this.node.setWorldPosition(this.start_position),
                        u(this.node)
                          .parallel(
                            u().to(
                              0.3,
                              { position: r.ZERO },
                              { easing: "linear" }
                            ),
                            u().to(0.3, { scale: r.ONE }, { easing: "linear" })
                          )
                          .start(),
                        u(this.node.getComponent(d))
                          .to(0.3, { opacity: 255 }, { easing: "circIn" })
                          .call(function () {
                            var t = i.node.getComponent(d);
                            t && (t.opacity = 255);
                          })
                          .start();
                    }
                  }),
                  (s.hide = function () {
                    if (this.isOpened && this.isTotallyOpened()) {
                      c.stopAllByTarget(this.node), (this.isOpened = !1);
                      var t = this.node.getComponent(d);
                      t && (t.opacity = 255),
                        (this.node.scale = this.original_scale);
                      var o = this,
                        i = u(this.node).parallel(
                          u().to(
                            0.4,
                            { worldPosition: this.start_position },
                            { easing: "linear" }
                          ),
                          u().to(0.4, { scale: r.ZERO }, { easing: "linear" })
                        );
                      u(this.node)
                        .sequence(
                          i,
                          u().delay(0.2),
                          u().call(function () {
                            o.node.active = !1;
                          })
                        )
                        .start(),
                        u(this.node.getComponent(d))
                          .to(0.3, { opacity: 1 }, { easing: "circOut" })
                          .start();
                    }
                  }),
                  (s.isTotallyOpened = function () {
                    var t;
                    return (
                      255 ==
                      (null == (t = this.node.getComponent(d))
                        ? void 0
                        : t.opacity)
                    );
                  }),
                  (s.isTotallyClosed = function () {
                    var t;
                    return (
                      1 ==
                      (null == (t = this.node.getComponent(d))
                        ? void 0
                        : t.opacity)
                    );
                  }),
                  o
                );
              })(h)).prototype,
              "black_screen",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (g = v))
          ) || g)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuQuickChatItem.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./TaiXiuMessageHandler.ts",
    "./MiniGameNetworkHandler.ts",
    "./SocketManager.ts",
  ],
  function (e) {
    "use strict";
    var i, t, n, a, c, r, o, u, l, s, d, h;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (a = e.assertThisInitialized);
        },
        function (e) {
          (c = e.cclegacy),
            (r = e._decorator),
            (o = e.Label),
            (u = e.Node),
            (l = e.Component);
        },
        function (e) {
          s = e.TaiXiuKhongCan_Message;
        },
        function (e) {
          d = e.MiniGameNetworkHandler;
        },
        function (e) {
          h = e.MessageRequest;
        },
      ],
      execute: function () {
        var p, f, _, b, g, k, v, m, y;
        c._RF.push(
          {},
          "2bd1fvLGGpIiIciBylV/HuI",
          "TaiXiuQuickChatItem",
          void 0
        );
        var q = r.ccclass,
          M = r.property;
        e(
          "default",
          ((p = q("TaiXiuQuickChatItem")),
          (f = M(o)),
          (_ = M(u)),
          (b = M(u)),
          p(
            ((v = i(
              (k = (function (e) {
                function i() {
                  for (
                    var i, t = arguments.length, c = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    c[r] = arguments[r];
                  return (
                    (i = e.call.apply(e, [this].concat(c)) || this),
                    n(i, "lbl_quickchat", v, a(i)),
                    n(i, "node_quickchat", m, a(i)),
                    n(i, "node_listchat", y, a(i)),
                    i
                  );
                }
                return (
                  t(i, e),
                  (i.prototype.onLoad = function () {
                    var e = this;
                    this.node.on("click", function () {
                      var i,
                        t = {};
                      (t.cmd = s.CHAT),
                        (t.mgs =
                          null == (i = e.lbl_quickchat) ? void 0 : i.string);
                      var n = [
                        h.ZonePlugin_Type,
                        "MiniGame",
                        "taixiuUnbalancedPlugin",
                        t,
                      ];
                      d.send(n),
                        e.node_listchat &&
                          (e.node_listchat.active = !e.node_listchat.active),
                        e.node_quickchat &&
                          (e.node_quickchat.active = !e.node_quickchat.active);
                    });
                  }),
                  i
                );
              })(l)).prototype,
              "lbl_quickchat",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (m = i(k.prototype, "node_quickchat", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = i(k.prototype, "node_listchat", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = k))
          ) || g)
        );
        c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuSessionAnalyticsItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var e, i, n, c, a, r, o, u, s;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (c = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (r = t._decorator),
            (o = t.Label),
            (u = t.Component);
        },
        function (t) {
          s = t.StringUtils;
        },
      ],
      execute: function () {
        var _, h, p, l, d, x, m, f, b, y, v;
        a._RF.push(
          {},
          "d4bd3mUtA5Cx6eq5BdI3ADX",
          "TaiXiuSessionAnalyticsItemView",
          void 0
        );
        var g = r.ccclass,
          w = r.property;
        t(
          "default",
          ((_ = g("TaiXiuSessionAnalyticsItemView")),
          (h = w(o)),
          (p = w(o)),
          (l = w(o)),
          (d = w(o)),
          _(
            ((f = e(
              (m = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "txt_phien_username", f, c(e)),
                    n(e, "txt_phien_time", b, c(e)),
                    n(e, "txt_phien_datcuoc", y, c(e)),
                    n(e, "txt_phien_cuadatcuoc", v, c(e)),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.show = function (t, e, i, n, c) {
                    (this.txt_phien_username.string = e),
                      (this.txt_phien_time.string = t),
                      (this.txt_phien_datcuoc.string = s.formatMoneyNumber(i)),
                      this.txt_phien_cuadatcuoc &&
                        (this.txt_phien_cuadatcuoc.string = c),
                      (this.txt_phien_username.node.active = !0),
                      (this.txt_phien_time.node.active = !0),
                      (this.txt_phien_datcuoc.node.active = !0),
                      this.txt_phien_cuadatcuoc &&
                        (this.txt_phien_cuadatcuoc.node.active = !0);
                  }),
                  (a.hide = function () {
                    (this.txt_phien_username.node.active = !1),
                      (this.txt_phien_time.node.active = !1),
                      (this.txt_phien_datcuoc.node.active = !1),
                      this.txt_phien_cuadatcuoc &&
                        (this.txt_phien_cuadatcuoc.node.active = !1);
                  }),
                  e
                );
              })(u)).prototype,
              "txt_phien_username",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (b = e(m.prototype, "txt_phien_time", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = e(m.prototype, "txt_phien_datcuoc", [l], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = e(m.prototype, "txt_phien_cuadatcuoc", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = m))
          ) || x)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuSessionAnalyticsView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./TaiXiuSessionAnalyticsItemView.ts",
    "./CommonPopup.ts",
    "./StringUtils.ts",
    "./BlinkCmp.ts",
    "./ScaleCmp.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, r, a, o, u, l, s, _, c, p, g, h, b, m;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (u = t.Label),
            (l = t.Sprite),
            (s = t.SpriteFrame),
            (_ = t.Button),
            (c = t.UIOpacity);
        },
        function (t) {
          p = t.default;
        },
        function (t) {
          g = t.CommonPopup;
        },
        function (t) {
          h = t.StringUtils;
        },
        function (t) {
          b = t.default;
        },
        function (t) {
          m = t.default;
        },
      ],
      execute: function () {
        var f,
          d,
          x,
          w,
          y,
          v,
          P,
          T,
          S,
          z,
          K,
          k,
          X,
          F,
          D,
          C,
          L,
          A,
          N,
          I,
          E,
          U,
          V,
          B,
          M,
          O,
          H,
          J,
          R,
          j,
          Y,
          q,
          G,
          Q,
          W,
          Z,
          $,
          tt,
          it,
          et,
          nt,
          rt,
          at;
        a._RF.push(
          {},
          "d8cf69tkyNOYL7LwxaU2vLm",
          "TaiXiuSessionAnalyticsView",
          void 0
        );
        var ot = o.ccclass,
          ut = o.property,
          lt = t("TaiXiuAnalyticsDict", function () {
            (this.refund = void 0),
              (this.bet = void 0),
              (this.displayName = void 0),
              (this.time = void 0),
              (this.eid = void 0);
          });
        t(
          "default",
          ((f = ot("TaiXiuSessionAnalyticsView")),
          (d = ut([p])),
          (x = ut([p])),
          (w = ut(b)),
          (y = ut(b)),
          (v = ut(m)),
          (P = ut(m)),
          (T = ut(m)),
          (S = ut(m)),
          (z = ut(u)),
          (K = ut(u)),
          (k = ut(l)),
          (X = ut(l)),
          (F = ut(l)),
          (D = ut([s])),
          (C = ut(_)),
          (L = ut(_)),
          (A = ut(u)),
          (N = ut(_)),
          (I = ut(_)),
          (E = ut(u)),
          f(
            ((B = i(
              (V = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, a = new Array(e), o = 0;
                    o < e;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (i = t.call.apply(t, [this].concat(a)) || this),
                    n(i, "tai_item_views", B, r(i)),
                    n(i, "xiu_item_views", M, r(i)),
                    n(i, "tai_blink_cmp", O, r(i)),
                    n(i, "xiu_blink_cmp", H, r(i)),
                    n(i, "tai_scale_cmp", J, r(i)),
                    n(i, "xiu_scale_cmp", R, r(i)),
                    n(i, "chan_scale_cmp", j, r(i)),
                    n(i, "le_scale_cmp", Y, r(i)),
                    n(i, "txt_session", q, r(i)),
                    n(i, "txt_sum", G, r(i)),
                    n(i, "spr_d1", Q, r(i)),
                    n(i, "spr_d2", W, r(i)),
                    n(i, "spr_d3", Z, r(i)),
                    n(i, "sprFrame_dices", $, r(i)),
                    n(i, "btn_prev_tai", tt, r(i)),
                    n(i, "btn_next_tai", it, r(i)),
                    n(i, "lbl_page_tai", et, r(i)),
                    n(i, "btn_prev_xiu", nt, r(i)),
                    n(i, "btn_next_xiu", rt, r(i)),
                    n(i, "lbl_page_xiu", at, r(i)),
                    (i.currentPage_tai = 1),
                    (i.currentPage_xiu = 1),
                    (i.max_item = 7),
                    (i._thongKeTai = []),
                    (i._thongKeXiu = []),
                    (i._aid = 1),
                    (i._sessionID = ""),
                    i
                  );
                }
                e(i, t);
                var a = i.prototype;
                return (
                  (a.getPageTai = function () {
                    return (
                      Math.floor(this._thongKeTai.length / this.max_item) +
                      (this._thongKeTai.length % this.max_item != 0 ? 1 : 0)
                    );
                  }),
                  (a.getPageXiu = function () {
                    return (
                      Math.floor(this._thongKeXiu.length / this.max_item) +
                      (this._thongKeXiu.length % this.max_item != 0 ? 1 : 0)
                    );
                  }),
                  (a.onLoad = function () {
                    var i = this;
                    this.setOffsetStreamNative(!1),
                      t.prototype.onLoad.call(this),
                      this.btn_close &&
                        this.btn_close.node.on("click", function () {
                          i.hide();
                        }),
                      this.btn_prev_tai &&
                        this.btn_prev_tai.node.on("click", function () {
                          i.currentPage_tai - 1 > 0 &&
                            ((i.currentPage_tai -= 1),
                            i.lbl_page_tai &&
                              (i.lbl_page_tai.string =
                                i.currentPage_tai.toString() +
                                "/" +
                                i.getPageTai().toString())),
                            i.showThongKe(1);
                        }),
                      this.btn_next_tai &&
                        this.btn_next_tai.node.on("click", function () {
                          i.currentPage_tai + 1 <= i.getPageTai() &&
                            ((i.currentPage_tai += 1),
                            i.lbl_page_tai &&
                              (i.lbl_page_tai.string =
                                i.currentPage_tai.toString() +
                                "/" +
                                i.getPageTai().toString())),
                            i.showThongKe(1);
                        }),
                      this.btn_prev_xiu &&
                        this.btn_prev_xiu.node.on("click", function () {
                          i.currentPage_xiu - 1 > 0 &&
                            ((i.currentPage_xiu -= 1),
                            i.lbl_page_xiu &&
                              (i.lbl_page_xiu.string =
                                i.currentPage_xiu.toString() +
                                "/" +
                                i.getPageXiu().toString())),
                            i.showThongKe(2);
                        }),
                      this.btn_next_xiu &&
                        this.btn_next_xiu.node.on("click", function () {
                          i.currentPage_xiu + 1 <= i.getPageXiu() &&
                            ((i.currentPage_xiu += 1),
                            i.lbl_page_xiu &&
                              (i.lbl_page_xiu.string =
                                i.currentPage_xiu.toString() +
                                "/" +
                                i.getPageXiu().toString())),
                            i.showThongKe(2);
                        });
                  }),
                  (a.showSessionAnalytics = function (t, i, e, n, r, a, o) {
                    (this._sessionID = i),
                      (this._aid = o),
                      (this.currentPage_tai = 1),
                      (this.currentPage_xiu = 1);
                    var u = h.formatTimeJustDate(new Date(a)),
                      l = e + n + r;
                    l > 10
                      ? (this.tai_blink_cmp &&
                          (this.tai_blink_cmp.node.active = !0),
                        this.xiu_blink_cmp &&
                          (this.xiu_blink_cmp.node.active = !1))
                      : (this.tai_blink_cmp &&
                          (this.tai_blink_cmp.node.active = !1),
                        this.xiu_blink_cmp &&
                          (this.xiu_blink_cmp.node.active = !0)),
                      (this.spr_d1.spriteFrame = this.sprFrame_dices[e - 1]),
                      (this.spr_d2.spriteFrame = this.sprFrame_dices[n - 1]),
                      (this.spr_d3.spriteFrame = this.sprFrame_dices[r - 1]),
                      this.txt_sum && (this.txt_sum.string = l),
                      this.txt_session &&
                        (this.txt_session.string = "#" + i + " (" + u + ")"),
                      (this._thongKeTai = []),
                      (this._thongKeXiu = []);
                    for (var s = 0; s < t.length; s++)
                      for (
                        var _ = t[s],
                          c = _.dn,
                          p = _.crt,
                          g = h.formatTimeJustHours(new Date(p)),
                          b = _.bs,
                          m = 0;
                        m < b.length;
                        m++
                      ) {
                        var f = b[m],
                          d = f.b;
                        if (1 == f.eid) {
                          var x = new lt();
                          (x.bet = d),
                            (x.displayName = c),
                            (x.time = g),
                            this._thongKeTai.push(x);
                        } else {
                          var w = new lt();
                          (w.bet = d),
                            (w.displayName = c),
                            (w.time = g),
                            this._thongKeXiu.push(w);
                        }
                      }
                    this.showThongKe(1),
                      this.showThongKe(2),
                      (this.lbl_page_tai.string =
                        this.currentPage_tai.toString() +
                        "/" +
                        this.getPageTai().toString()),
                      (this.lbl_page_xiu.string =
                        this.currentPage_xiu.toString() +
                        "/" +
                        this.getPageXiu().toString()),
                      this.root.active ? this.showImmediately() : this.show();
                  }),
                  (a.showThongKe = function (t) {
                    var i = this;
                    if (1 == t) {
                      this.tai_item_views.forEach(function (t, e) {
                        var n = (i.currentPage_tai - 1) * i.max_item,
                          r = i._thongKeTai[e + n];
                        null != r && null != r
                          ? ((t.node.getComponent(c).opacity = 255),
                            t.show(
                              r.time,
                              r.displayName,
                              r.bet,
                              r.refund,
                              r.eid
                            ))
                          : ((t.node.getComponent(c).opacity = 1), t.hide());
                      });
                      this._thongKeTai.forEach(function (t) {
                        t.bet, t.refund;
                      });
                    } else {
                      this.xiu_item_views.forEach(function (t, e) {
                        var n = (i.currentPage_xiu - 1) * i.max_item,
                          r = i._thongKeXiu[e + n];
                        null != r && null != r
                          ? ((t.node.getComponent(c).opacity = 255),
                            t.show(
                              r.time,
                              r.displayName,
                              r.bet,
                              r.refund,
                              r.eid
                            ))
                          : ((t.node.getComponent(c).opacity = 1), t.hide());
                      });
                      this._thongKeXiu.forEach(function (t) {
                        t.bet, t.refund;
                      });
                    }
                  }),
                  i
                );
              })(g)).prototype,
              "tai_item_views",
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (M = i(V.prototype, "xiu_item_views", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (O = i(V.prototype, "tai_blink_cmp", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = i(V.prototype, "xiu_blink_cmp", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = i(V.prototype, "tai_scale_cmp", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = i(V.prototype, "xiu_scale_cmp", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = i(V.prototype, "chan_scale_cmp", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = i(V.prototype, "le_scale_cmp", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = i(V.prototype, "txt_session", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = i(V.prototype, "txt_sum", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = i(V.prototype, "spr_d1", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = i(V.prototype, "spr_d2", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Z = i(V.prototype, "spr_d3", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($ = i(V.prototype, "sprFrame_dices", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (tt = i(V.prototype, "btn_prev_tai", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (it = i(V.prototype, "btn_next_tai", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (et = i(V.prototype, "lbl_page_tai", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (nt = i(V.prototype, "btn_prev_xiu", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (rt = i(V.prototype, "btn_next_xiu", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (at = i(V.prototype, "lbl_page_xiu", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = V))
          ) || U)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuSessionHistoryDiceItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, i, o, n, s;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (i = t.cclegacy), (o = t._decorator), (n = t.Vec3), (s = t.Component);
        },
      ],
      execute: function () {
        var r;
        i._RF.push(
          {},
          "f7029/xr15C+4txvUZsFEK9",
          "TaiXiuSessionHistoryDiceItemView",
          void 0
        );
        var c = o.ccclass;
        o.property,
          t(
            "default",
            c("TaiXiuSessionHistoryDiceItemView")(
              (r = (function (t) {
                function i() {
                  for (
                    var e, i = arguments.length, o = new Array(i), n = 0;
                    n < i;
                    n++
                  )
                    o[n] = arguments[n];
                  return (
                    ((e = t.call.apply(t, [this].concat(o)) || this).lowest_y =
                      -80),
                    e
                  );
                }
                e(i, t);
                var o = i.prototype;
                return (
                  (o.one_offset_y = function () {
                    return 30;
                  }),
                  (o.show = function (t) {
                    this.node.active = !0;
                    var e = (t - 1) * this.one_offset_y();
                    this.node.setPosition(
                      new n(this.node.position.x, this.lowest_y + e, 0)
                    );
                  }),
                  (o.hide = function () {
                    this.node.active = !1;
                  }),
                  i
                );
              })(s))
            ) || r
          );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuSessionHistoryResultItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var r, t, i, s, n, o, u, a, l;
    return {
      setters: [
        function (e) {
          (r = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (s = e.assertThisInitialized);
        },
        function (e) {
          (n = e.cclegacy),
            (o = e._decorator),
            (u = e.SpriteFrame),
            (a = e.Sprite),
            (l = e.Component);
        },
      ],
      execute: function () {
        var c, p, f, _, m, h, y;
        n._RF.push(
          {},
          "e903auLXKRF1KcKxPmN0bN+",
          "TaiXiuSessionHistoryResultItemView",
          void 0
        );
        var F = o.ccclass,
          b = o.property;
        e(
          "default",
          ((c = F("TaiXiuSessionHistoryResultItemView")),
          (p = b([u])),
          (f = b(a)),
          c(
            ((h = r(
              (m = (function (e) {
                function r() {
                  for (
                    var r, t = arguments.length, n = new Array(t), o = 0;
                    o < t;
                    o++
                  )
                    n[o] = arguments[o];
                  return (
                    (r = e.call.apply(e, [this].concat(n)) || this),
                    i(r, "sprFrame_ico_result", h, s(r)),
                    i(r, "spr_result", y, s(r)),
                    r
                  );
                }
                t(r, e);
                var n = r.prototype;
                return (
                  (n.show = function (e, r) {
                    this.spr_result.spriteFrame =
                      e > 10
                        ? this.sprFrame_ico_result[0]
                        : this.sprFrame_ico_result[1];
                  }),
                  (n.hide = function () {
                    this.node.active = !1;
                  }),
                  r
                );
              })(l)).prototype,
              "sprFrame_ico_result",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (y = r(m.prototype, "spr_result", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = m))
          ) || _)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuSessionHistoryResultSumItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, r, i, s, l, o, n, u, a, c, p;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (s = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy),
            (o = e._decorator),
            (n = e.SpriteFrame),
            (u = e.Sprite),
            (a = e.Label),
            (c = e.Color),
            (p = e.Component);
        },
      ],
      execute: function () {
        var _, m, h, b, f, y, d, v, F, R, g;
        l._RF.push(
          {},
          "c566aBzFPxKsqRPhKyhDMXT",
          "TaiXiuSessionHistoryResultSumItemView",
          void 0
        );
        var w = o.ccclass,
          S = o.property;
        e(
          "default",
          ((_ = w("TaiXiuSessionHistoryResultSumItemView")),
          (m = S([n])),
          (h = S(u)),
          (b = S(a)),
          (f = S(Boolean)),
          _(
            ((v = t(
              (d = (function (e) {
                function t() {
                  for (
                    var t, r = arguments.length, l = new Array(r), o = 0;
                    o < r;
                    o++
                  )
                    l[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(l)) || this),
                    i(t, "sprFrame_ico_result", v, s(t)),
                    i(t, "spr_result", F, s(t)),
                    i(t, "lbl_sum_result", R, s(t)),
                    i(t, "isReverseColor", g, s(t)),
                    t
                  );
                }
                r(t, e);
                var l = t.prototype;
                return (
                  (l.show = function (e, t, r) {
                    (this.lbl_sum_result.string = t),
                      t > 10
                        ? ((this.spr_result.spriteFrame =
                            this.sprFrame_ico_result[0]),
                          (this.lbl_sum_result.color = this.isReverseColor
                            ? c.WHITE
                            : c.BLACK))
                        : ((this.spr_result.spriteFrame =
                            this.sprFrame_ico_result[1]),
                          (this.lbl_sum_result.color = this.isReverseColor
                            ? c.BLACK
                            : c.WHITE)),
                      (this.lbl_sum_result.node.parent = this.node.parent),
                      this.lbl_sum_result.node.setPosition(this.node.position),
                      (this.lbl_sum_result.node.active = !0);
                  }),
                  (l.hide = function () {
                    (this.node.active = !1),
                      (this.lbl_sum_result.node.active = !1);
                  }),
                  t
                );
              })(p)).prototype,
              "sprFrame_ico_result",
              [m],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (F = t(d.prototype, "spr_result", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = t(d.prototype, "lbl_sum_result", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = t(d.prototype, "isReverseColor", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (y = d))
          ) || y)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuSessionHistorySumItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var i, t, s, o, r, n, u, a, l, c, m, b;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (s = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (n = e._decorator),
            (u = e.Sprite),
            (a = e.Label),
            (l = e.SpriteFrame),
            (c = e.Color),
            (m = e.Vec3),
            (b = e.Component);
        },
      ],
      execute: function () {
        var p, h, _, f, g, d, y, v, w, F, S;
        r._RF.push(
          {},
          "f2a7cY7mR5HG4+Rp8qTxG6J",
          "TaiXiuSessionHistorySumItemView",
          void 0
        );
        var C = n.ccclass,
          R = n.property;
        e(
          "default",
          ((p = C("TaiXiuSessionHistorySumItemView")),
          (h = R(u)),
          (_ = R(a)),
          (f = R([l])),
          (g = R(Boolean)),
          p(
            ((v = i(
              (y = (function (e) {
                function i() {
                  for (
                    var i, t = arguments.length, r = new Array(t), n = 0;
                    n < t;
                    n++
                  )
                    r[n] = arguments[n];
                  return (
                    (i = e.call.apply(e, [this].concat(r)) || this),
                    s(i, "bg_sum", v, o(i)),
                    s(i, "lb_sum", w, o(i)),
                    s(i, "sprFrame_bg_sum", F, o(i)),
                    s(i, "isReverseColor", S, o(i)),
                    (i.lowest_y = -76),
                    i
                  );
                }
                t(i, e);
                var r = i.prototype;
                return (
                  (r.one_offset_y = function () {
                    return Math.abs(152 / 15);
                  }),
                  (r.show = function (e, i) {
                    (this.node.active = !0),
                      (this.bg_sum.node.active = !0),
                      (this.lb_sum.node.active = !0),
                      e > 10
                        ? ((this.bg_sum.spriteFrame = this.sprFrame_bg_sum[0]),
                          (this.lb_sum.color = this.isReverseColor
                            ? c.WHITE
                            : c.BLACK))
                        : ((this.bg_sum.spriteFrame = this.sprFrame_bg_sum[1]),
                          (this.lb_sum.color = this.isReverseColor
                            ? c.BLACK
                            : c.WHITE)),
                      (this.lb_sum.string = e);
                    var t = (e - 3) * this.one_offset_y();
                    this.node.setPosition(
                      new m(this.node.position.x, this.lowest_y + t, 0)
                    ),
                      this.bg_sum.node.setPosition(this.node.getPosition()),
                      this.lb_sum.node.setPosition(this.node.getPosition());
                  }),
                  (r.hide = function () {
                    (this.bg_sum.node.active = !1),
                      (this.lb_sum.node.active = !1),
                      (this.node.active = !1);
                  }),
                  i
                );
              })(b)).prototype,
              "bg_sum",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (w = i(y.prototype, "lb_sum", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = i(y.prototype, "sprFrame_bg_sum", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (S = i(y.prototype, "isReverseColor", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (d = y))
          ) || d)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuSessionHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./TaiXiuSessionHistoryDiceItemView.ts",
    "./TaiXiuSessionHistoryResultItemView.ts",
    "./TaiXiuSessionHistoryResultSumItemView.ts",
    "./TaiXiuSessionHistorySumItemView.ts",
    "./CommonPopup.ts",
    "./LineSpriteComponent.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, o, r, s, u, a, l, c, p, h, d, m, f, w, g, _, b, y;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (s = e._decorator),
            (u = e.Label),
            (a = e.Button),
            (l = e.Node),
            (c = e.Toggle),
            (p = e.UITransform),
            (h = e.Vec3),
            (d = e.Color),
            (m = e.instantiate);
        },
        function (e) {
          f = e.default;
        },
        function (e) {
          w = e.default;
        },
        function (e) {
          g = e.default;
        },
        function (e) {
          _ = e.default;
        },
        function (e) {
          b = e.CommonPopup;
        },
        function (e) {
          y = e.default;
        },
      ],
      execute: function () {
        var v,
          S,
          I,
          H,
          V,
          X,
          D,
          z,
          C,
          R,
          T,
          E,
          x,
          L,
          k,
          P,
          A,
          W,
          N,
          j,
          B,
          F,
          M,
          O,
          G,
          Q,
          U,
          Y,
          Z,
          q,
          J,
          K,
          $,
          ee,
          te,
          ie,
          ne,
          oe,
          re,
          se,
          ue,
          ae,
          le;
        r._RF.push(
          {},
          "a79dfbZdVdPiIteTadQki2j",
          "TaiXiuSessionHistoryView",
          void 0
        );
        var ce = s.ccclass,
          pe = s.property;
        e(
          "default",
          ((v = ce("TaiXiuSessionHistoryView")),
          (S = pe(u)),
          (I = pe(u)),
          (H = pe(a)),
          (V = pe(a)),
          (X = pe([_])),
          (D = pe(l)),
          (z = pe(l)),
          (C = pe(l)),
          (R = pe(u)),
          (T = pe(u)),
          (E = pe(l)),
          (x = pe(l)),
          (L = pe(l)),
          (k = pe(y)),
          (P = pe(y)),
          (A = pe(y)),
          (W = pe(y)),
          (N = pe(c)),
          (j = pe(c)),
          (B = pe(c)),
          v(
            ((O = t(
              (M = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, r = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    n(t, "lb_recent_session", O, o(t)),
                    n(t, "lb_recent_result", G, o(t)),
                    n(t, "btn_prev", Q, o(t)),
                    n(t, "btn_next", U, o(t)),
                    n(t, "taiXiuSessionHistorySumItemViews", Y, o(t)),
                    n(t, "taiXiuSessionHistoryDiceItemView", Z, o(t)),
                    (t.taiXiuSessionHistoryDiceItemViews = []),
                    n(t, "content_result", q, o(t)),
                    n(t, "content_sum", J, o(t)),
                    n(t, "content_sum_total_tai", K, o(t)),
                    n(t, "content_sum_total_xiu", $, o(t)),
                    n(t, "page_1", ee, o(t)),
                    n(t, "page_2", te, o(t)),
                    n(t, "label_parent_1", ie, o(t)),
                    n(t, "sumLineCmp", ne, o(t)),
                    n(t, "d1linecmp", oe, o(t)),
                    n(t, "d2linecmp", re, o(t)),
                    n(t, "d3linecmp", se, o(t)),
                    n(t, "tog_d1", ue, o(t)),
                    n(t, "tog_d2", ae, o(t)),
                    n(t, "tog_d3", le, o(t)),
                    (t.taiXiuSessionHistoryResultItemView = []),
                    (t.taiXiuSessionHistoryResultSumItemView = []),
                    (t._result = []),
                    t
                  );
                }
                i(t, e);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    var t = this;
                    this.setOffsetStreamNative(!0),
                      e.prototype.onLoad.call(this),
                      this.btn_close.node.on("click", function () {
                        t.hide();
                      }),
                      this.tog_d1.node.on("toggle", function () {
                        t.draw();
                      }),
                      this.tog_d2.node.on("toggle", function () {
                        t.draw();
                      }),
                      this.tog_d3.node.on("toggle", function () {
                        t.draw();
                      }),
                      this.btn_prev.node.on("click", function () {
                        (t.page_1.active = !0),
                          (t.page_2.active = !1),
                          (t.btn_prev.node.active = !1),
                          (t.btn_next.node.active = !0);
                      }),
                      this.btn_next.node.on("click", function () {
                        (t.page_1.active = !1),
                          (t.page_2.active = !0),
                          (t.btn_prev.node.active = !0),
                          (t.btn_next.node.active = !1);
                      });
                  }),
                  (r.showD1 = function (e) {
                    var t = this;
                    void 0 === e && (e = !0);
                    var i = this.taiXiuSessionHistoryDiceItemViews.map(
                      function (e) {
                        return e.children[0].getComponent(f);
                      }
                    );
                    if (e) {
                      i.forEach(function (e, i) {
                        var n = t._result[t._result.length - 1 - i].d1;
                        e.show(n);
                      });
                      var n = i.map(function (e) {
                        var t = e.node.parent
                          .getComponent(p)
                          .convertToWorldSpaceAR(e.node.position);
                        return new h(t.x, t.y, 0);
                      });
                      this.d1linecmp.draw(n, 2, d.MAGENTA, this.node);
                    } else
                      i.forEach(function (e, t) {
                        e.hide();
                      }),
                        this.d1linecmp.clear();
                  }),
                  (r.showD2 = function (e) {
                    var t = this;
                    void 0 === e && (e = !0);
                    var i = this.taiXiuSessionHistoryDiceItemViews.map(
                      function (e) {
                        return e.children[1].getComponent(f);
                      }
                    );
                    if (e) {
                      i.forEach(function (e, i) {
                        var n = t._result[t._result.length - 1 - i].d2;
                        e.show(n);
                      });
                      var n = i.map(function (e) {
                        var t = e.node.parent
                          .getComponent(p)
                          .convertToWorldSpaceAR(e.node.position);
                        return new h(t.x, t.y, 0);
                      });
                      this.d2linecmp.draw(n, 2, d.YELLOW, this.node);
                    } else
                      i.forEach(function (e, t) {
                        e.hide();
                      }),
                        this.d2linecmp.clear();
                  }),
                  (r.showD3 = function (e) {
                    var t = this;
                    void 0 === e && (e = !0);
                    var i = this.taiXiuSessionHistoryDiceItemViews.map(
                      function (e) {
                        return e.children[2].getComponent(f);
                      }
                    );
                    if (e) {
                      i.forEach(function (e, i) {
                        var n = t._result[t._result.length - 1 - i].d3;
                        e.show(n);
                      });
                      var n = i.map(function (e) {
                        var t = e.node.parent
                          .getComponent(p)
                          .convertToWorldSpaceAR(e.node.position);
                        return new h(t.x, t.y, 0);
                      });
                      this.d3linecmp.draw(n, 2, d.RED, this.node);
                    } else
                      i.forEach(function (e, t) {
                        e.hide();
                      }),
                        this.d3linecmp.clear();
                  }),
                  (r.setHistory = function (e) {
                    var t = this;
                    (this._result = e),
                      this.taiXiuSessionHistoryResultItemView.length <= 0 &&
                        (this.taiXiuSessionHistoryResultItemView =
                          this.content_result.getComponentsInChildren(w)),
                      this.taiXiuSessionHistoryResultSumItemView.length <= 0 &&
                        (this.taiXiuSessionHistoryResultSumItemView =
                          this.content_sum.getComponentsInChildren(g));
                    var i = e[e.length - 1];
                    this.lb_recent_session.string =
                      "Phiên gần nhất: #" + i.sessionID.toString();
                    var n = i.d1 + i.d2 + i.d3;
                    (this.lb_recent_result.string =
                      (n > 10 ? "Tài" : "Xỉu") +
                      "(" +
                      i.d1 +
                      "-" +
                      i.d2 +
                      "-" +
                      i.d3 +
                      ")"),
                      this.taiXiuSessionHistorySumItemViews.forEach(function (
                        e
                      ) {
                        e.hide();
                      }),
                      this.taiXiuSessionHistoryDiceItemViews.forEach(function (
                        e
                      ) {
                        e.active = !1;
                      });
                    var o = e.slice(e.length - 21, e.length);
                    o.forEach(function (e, i) {
                      var n = null;
                      if (i >= t.taiXiuSessionHistorySumItemViews.length) {
                        var r = m(t.taiXiuSessionHistorySumItemViews[0].node);
                        (r.parent =
                          t.taiXiuSessionHistorySumItemViews[0].node.parent),
                          (n = r.getComponent(_)),
                          t.taiXiuSessionHistorySumItemViews.push(n);
                      } else n = t.taiXiuSessionHistorySumItemViews[i];
                      var s =
                        o[o.length - 1 - i].d1 +
                        o[o.length - 1 - i].d2 +
                        o[o.length - 1 - i].d3;
                      n.node.setPosition(
                        new h(-42 - 31 * i, n.node.position.y, 0)
                      ),
                        (n.node.active = !0),
                        n.show(s, 0 == i);
                      var u = null;
                      if (i >= t.taiXiuSessionHistoryDiceItemViews.length) {
                        var a = m(t.taiXiuSessionHistoryDiceItemView);
                        (a.parent = t.taiXiuSessionHistoryDiceItemView.parent),
                          a.setPosition(new h(-53 - 31 * i, a.position.y, 0)),
                          t.taiXiuSessionHistoryDiceItemViews.push(a),
                          (u = a);
                      } else u = t.taiXiuSessionHistoryDiceItemViews[i];
                      u.active = !0;
                    });
                    for (var r = [], s = e.length - 1, u = 0; u < 20; u++) {
                      for (
                        var a = [],
                          l = e[s].d1 + e[s].d2 + e[s].d3 > 10,
                          c = s - 5,
                          p = s;
                        p > c;
                        p--
                      )
                        if (e[p]) {
                          if (e[p].d1 + e[p].d2 + e[p].d3 > 10 != l) {
                            s -= 1;
                            break;
                          }
                          (s = p), a.splice(0, 0, e[p].d1 + e[p].d2 + e[p].d3);
                        }
                      a.length > 0 && r.push(a), a.length >= 5 && (s -= 1);
                    }
                    r.forEach(function (e, i) {
                      for (var n = 5 * i, o = 0; o < 5; o++) {
                        var r = n + o;
                        if (o < e.length) {
                          t.taiXiuSessionHistoryResultSumItemView[
                            r
                          ].node.active = !0;
                          var s = e[o];
                          t.taiXiuSessionHistoryResultSumItemView[r].show(
                            t.label_parent_1,
                            s,
                            0 == i && o == e.length - 1
                          );
                        } else
                          t.taiXiuSessionHistoryResultSumItemView[r].hide();
                      }
                    });
                    var d = 0,
                      f = 0,
                      b = e.length - 1;
                    this.taiXiuSessionHistoryResultItemView.forEach(function (
                      i,
                      n
                    ) {
                      if (e[b - n]) {
                        var o = e[b - n].d1 + e[b - n].d2 + e[b - n].d3;
                        (i.node.active = !0),
                          i.show(
                            o,
                            n == t.taiXiuSessionHistoryResultItemView.length - 1
                          ),
                          o > 10 ? (d += 1) : (f += 1);
                      }
                    }),
                      (this.content_sum_total_tai.string = d.toString()),
                      (this.content_sum_total_xiu.string = f.toString()),
                      this.draw();
                  }),
                  (r.draw = function () {
                    var e = this.taiXiuSessionHistorySumItemViews.map(function (
                      e
                    ) {
                      var t = e.node.parent
                        .getComponent(p)
                        .convertToWorldSpaceAR(e.node.position);
                      return new h(t.x, t.y, 0);
                    });
                    this.sumLineCmp.draw(e, 2, d.WHITE, this.node),
                      this.tog_d1.isChecked ? this.showD1() : this.showD1(!1),
                      this.tog_d2.isChecked ? this.showD2() : this.showD2(!1),
                      this.tog_d3.isChecked ? this.showD3() : this.showD3(!1);
                  }),
                  (r.show = function (t) {
                    var i = this;
                    void 0 === t && (t = function () {}),
                      e.prototype.show.call(this, t),
                      setTimeout(function () {
                        i.draw();
                      }, 100);
                  }),
                  t
                );
              })(b)).prototype,
              "lb_recent_session",
              [S],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (G = t(M.prototype, "lb_recent_result", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = t(M.prototype, "btn_prev", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = t(M.prototype, "btn_next", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = t(M.prototype, "taiXiuSessionHistorySumItemViews", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Z = t(M.prototype, "taiXiuSessionHistoryDiceItemView", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = t(M.prototype, "content_result", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = t(M.prototype, "content_sum", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (K = t(M.prototype, "content_sum_total_tai", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($ = t(M.prototype, "content_sum_total_xiu", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ee = t(M.prototype, "page_1", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (te = t(M.prototype, "page_2", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ie = t(M.prototype, "label_parent_1", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ne = t(M.prototype, "sumLineCmp", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (oe = t(M.prototype, "d1linecmp", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (re = t(M.prototype, "d2linecmp", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (se = t(M.prototype, "d3linecmp", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ue = t(M.prototype, "tog_d1", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ae = t(M.prototype, "tog_d2", [j], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (le = t(M.prototype, "tog_d3", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = M))
          ) || F)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TetGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MiniGameNodeController.ts",
    "./BaseMiniGameView.ts",
    "./WCGiftPopup.ts",
    "./WCInfo.ts",
    "./MiniTet_SlotMachineCmp.ts",
    "./SoundManager.ts",
    "./GameConfigManager.ts",
    "./PersistManager.ts",
    "./HttpManager.ts",
    "./State.ts",
    "./SocketManager.ts",
  ],
  function (n) {
    "use strict";
    var t, e, i, r, o, a, u, l, s, c, p, f, m, h, _, d, b, g, y, w, v, M, S;
    return {
      setters: [
        function (n) {
          (t = n.applyDecoratedDescriptor),
            (e = n.inheritsLoose),
            (i = n.initializerDefineProperty),
            (r = n.assertThisInitialized);
        },
        function (n) {
          (o = n.cclegacy),
            (a = n._decorator),
            (u = n.Label),
            (l = n.Button),
            (s = n.SpriteFrame),
            (c = n.AudioClip),
            (p = n.tween);
        },
        function (n) {
          f = n.default;
        },
        function (n) {
          m = n.default;
        },
        function (n) {
          h = n.WCGiftPopup;
        },
        function (n) {
          _ = n.WCInfo;
        },
        function (n) {
          (d = n.default), (b = n.IconTet);
        },
        function (n) {
          g = n.SoundManager;
        },
        function (n) {
          y = n.GameConfigManager;
        },
        function (n) {
          w = n.PersistManager;
        },
        function (n) {
          v = n.httpManager;
        },
        function (n) {
          M = n.state;
        },
        function (n) {
          S = n.socketManager;
        },
      ],
      execute: function () {
        var T,
          C,
          N,
          R,
          G,
          L,
          z,
          I,
          P,
          U,
          E,
          W,
          q,
          x,
          D,
          V,
          k,
          A,
          F,
          H,
          O,
          B,
          J,
          j;
        o._RF.push({}, "cf66c7FsVJLjqe6MCH7W3Az", "TetGameView", void 0);
        var K = a.ccclass,
          Q = a.property;
        n(
          "default",
          ((T = K("TetGameView")),
          (C = Q(u)),
          (N = Q(u)),
          (R = Q(h)),
          (G = Q(l)),
          (L = Q(l)),
          (z = Q(_)),
          (I = Q([s])),
          (P = Q([s])),
          (U = Q(c)),
          (E = Q(d)),
          T(
            (((j = (function (n) {
              function t() {
                for (
                  var t, e = arguments.length, o = new Array(e), a = 0;
                  a < e;
                  a++
                )
                  o[a] = arguments[a];
                return (
                  (t = n.call.apply(n, [this].concat(o)) || this),
                  i(t, "lbl_remain_turn_1", x, r(t)),
                  i(t, "lbl_remain_turn_2", D, r(t)),
                  i(t, "wcGiftPopup", V, r(t)),
                  i(t, "btn_tut", k, r(t)),
                  i(t, "btn_spin", A, r(t)),
                  i(t, "wcInfo", F, r(t)),
                  i(t, "loaded_icon_normal", H, r(t)),
                  i(t, "loaded_icon_blur", O, r(t)),
                  i(t, "win_sfx", B, r(t)),
                  i(t, "miniTet_SlotMachineCmp", J, r(t)),
                  (t.current_turn = 0),
                  (t.money = 0),
                  t
                );
              }
              e(t, n),
                (t.getInstance = function () {
                  return t.instance;
                });
              var o = t.prototype;
              return (
                (o.onLoad = function () {
                  var n,
                    e,
                    i,
                    r = this;
                  (t.instance = this),
                    null == (n = this.btn_tut) ||
                      n.node.on("click", function () {
                        var n;
                        null == (n = r.wcInfo) || n.show();
                      }),
                    null == (e = this.btn_spin) ||
                      e.node.on("click", function () {
                        var n;
                        null != (n = r.miniTet_SlotMachineCmp) && n.isStopped()
                          ? r.current_turn <= 0
                            ? w.showNoti("Không đủ lượt quay!", r.node)
                            : r.spin()
                          : w.showNoti("Đang Quay", r.node);
                      }),
                    this.miniTet_SlotMachineCmp &&
                      (this.miniTet_SlotMachineCmp.onMachineStopped =
                        function () {
                          r.showResult();
                        }),
                    null == (i = this.miniTet_SlotMachineCmp) || i.init();
                }),
                (o.showResult = function () {
                  var n;
                  this.money > 0 &&
                    (this.win_sfx &&
                      g.getInstance().playAdditionalSfx(this.win_sfx),
                    null == (n = this.wcGiftPopup) || n.showInfo(this.money),
                    S.sendRefreshMoney());
                }),
                (o.updateRemainTurn = function () {
                  this.lbl_remain_turn_1 &&
                    (this.lbl_remain_turn_1.string =
                      this.current_turn.toString()),
                    this.lbl_remain_turn_2 &&
                      (this.lbl_remain_turn_2.string =
                        this.current_turn.toString());
                }),
                (o.getUserTetEventURL = function () {
                  return (
                    y.MissionDomainURL +
                    "/api/tet-event/user?displayName=%dName%&userName=%uName%"
                  );
                }),
                (o.subscribe = function () {
                  var n = this,
                    t = this.getUserTetEventURL();
                  (t = (t = t.replace("%dName%", M.displayName)).replace(
                    "%uName%",
                    M.username
                  )),
                    v.sendGET({
                      url: t,
                      useLoading: !1,
                      onCompleted: function (t) {
                        var e = JSON.parse(t);
                        if (1 == e.returnCode) {
                          var i = e.data.numberRemainSlot;
                          (n.current_turn = i), n.updateRemainTurn();
                        } else {
                          var r = e.returnMessage;
                          w.showNoti(r);
                        }
                      },
                    });
                }),
                (o.spin = function () {
                  var n;
                  null == (n = this.miniTet_SlotMachineCmp) || n.spin(),
                    this.requestSpin();
                }),
                (o.getPlayTetEventURL = function () {
                  return (
                    y.MissionDomainURL +
                    "/api/tet-event/play?displayName=%dName%&userName=%uName%"
                  );
                }),
                (o.requestSpin = function () {
                  var n = this,
                    t = this.getPlayTetEventURL();
                  (t = (t = t.replace("%dName%", M.displayName)).replace(
                    "%uName%",
                    M.username
                  )),
                    v.sendGET({
                      url: t,
                      useLoading: !1,
                      onCompleted: function (t) {
                        var e = JSON.parse(t);
                        if (1 == e.returnCode) {
                          var i = e.data;
                          if (null == i)
                            return (
                              w.showNoti("Không đủ lượt quay!", n.node),
                              void n.stop([])
                            );
                          var r = i.numberRemainSlot;
                          (n.current_turn = r),
                            n.updateRemainTurn(),
                            (n.money =
                              null == i.promotionWinner
                                ? 0
                                : i.promotionWinner);
                          var o = i.playResult.map(function (n) {
                            var t = new b();
                            return (t.code = n), t;
                          });
                          n.stop(o);
                        } else {
                          var a = e.returnMessage;
                          w.showNoti(a), n.stop([]);
                        }
                      },
                    });
                }),
                (o.stop = function (n) {
                  var t,
                    e = this;
                  null != (t = this.miniTet_SlotMachineCmp) &&
                    t.isSpinning() &&
                    p(this.node)
                      .sequence(
                        p().delay(d.TIME_TO_SHOW_RESULT),
                        p().call(function () {
                          var t;
                          null == (t = e.miniTet_SlotMachineCmp) || t.stop(n);
                        })
                      )
                      .start();
                }),
                (o.continue = function () {}),
                (o.show = function () {
                  var t;
                  return (
                    this.subscribe(),
                    null == (t = f.getInstance()) ||
                      t.bringGameViewToTop(this, !0),
                    n.prototype.show.call(this),
                    !0
                  );
                }),
                (o.hide = function () {
                  var t;
                  null != (t = this.miniTet_SlotMachineCmp) && t.isStopped()
                    ? n.prototype.hide.call(this)
                    : w.showNoti("Đang Quay", this.node);
                }),
                (o.forceClose = function () {
                  n.prototype.hide.call(this);
                }),
                (o.init = function () {
                  n.prototype.init.call(this),
                    n.prototype.hideImmediately.call(this);
                }),
                (o.onDestroy = function () {
                  t.instance = null;
                }),
                t
              );
            })(m)).instance = null),
            (x = t((q = j).prototype, "lbl_remain_turn_1", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = t(q.prototype, "lbl_remain_turn_2", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = t(q.prototype, "wcGiftPopup", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = t(q.prototype, "btn_tut", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = t(q.prototype, "btn_spin", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = t(q.prototype, "wcInfo", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = t(q.prototype, "loaded_icon_normal", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (O = t(q.prototype, "loaded_icon_blur", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (B = t(q.prototype, "win_sfx", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = t(q.prototype, "miniTet_SlotMachineCmp", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = q))
          ) || W)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TrenDuoi_SlotMachineCmp.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./TrenDuoi_SlotMachineItemView.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, o, r, l, a, u, c, s;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (l = e._decorator),
            (a = e.Tween),
            (u = e.tween),
            (c = e.Component);
        },
        function (e) {
          s = e.default;
        },
      ],
      execute: function () {
        var h, p, d, f;
        r._RF.push(
          {},
          "c9dcfVOCNFPA6J2pAlvh9WE",
          "TrenDuoi_SlotMachineCmp",
          void 0
        );
        var v = l.ccclass,
          m = l.property;
        e(
          "default",
          ((h = m(s)),
          v(
            ((f = t(
              (d = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, r = new Array(i), l = 0;
                    l < i;
                    l++
                  )
                    r[l] = arguments[l];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    n(t, "trenDuoi_SlotMachineItemView", f, o(t)),
                    (t.onMachineStopped = function () {}),
                    t
                  );
                }
                i(t, e);
                var r = t.prototype;
                return (
                  (r.reset = function () {
                    var e;
                    null == (e = this.trenDuoi_SlotMachineItemView) ||
                      e.reset();
                  }),
                  (r.refresh = function () {
                    var e;
                    null == (e = this.trenDuoi_SlotMachineItemView) ||
                      e.refresh();
                  }),
                  (r.spin = function () {
                    var e,
                      t,
                      i,
                      n = this;
                    a.stopAllByTarget(
                      (null == (e = this.trenDuoi_SlotMachineItemView)
                        ? void 0
                        : e.node) || void 0
                    );
                    var o = u(
                      null == (t = this.trenDuoi_SlotMachineItemView)
                        ? void 0
                        : t.node
                    ).sequence(
                      u().call(function () {
                        var e;
                        null == (e = n.trenDuoi_SlotMachineItemView) ||
                          e.randomize();
                      }),
                      u().delay(0.02)
                    );
                    u(
                      null == (i = this.trenDuoi_SlotMachineItemView)
                        ? void 0
                        : i.node
                    )
                      .repeatForever(o)
                      .start();
                  }),
                  (r.stop = function (e) {
                    var t, i;
                    a.stopAllByTarget(
                      (null == (t = this.trenDuoi_SlotMachineItemView)
                        ? void 0
                        : t.node) || void 0
                    ),
                      null == (i = this.trenDuoi_SlotMachineItemView) ||
                        i.setCard(e);
                  }),
                  (r.isStopped = function () {
                    var e;
                    return null == (e = this.trenDuoi_SlotMachineItemView)
                      ? void 0
                      : e.isHiddenCard();
                  }),
                  t
                );
              })(c)).prototype,
              "trenDuoi_SlotMachineItemView",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (p = d))
          ) || p)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TrenDuoi_SlotMachineItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameUtils.ts",
    "./Define.ts",
    "./TrenDuoiGameView.ts",
    "./MauBinh_CardLib.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, r, a, o, s, c, u, l, d, h, p;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (s = t.Sprite),
            (c = t.UIOpacity),
            (u = t.Component);
        },
        function (t) {
          l = t.default;
        },
        function (t) {
          d = t.GameID;
        },
        function (t) {
          h = t.default;
        },
        function (t) {
          p = t.GameCard;
        },
      ],
      execute: function () {
        var f, m, v, g;
        a._RF.push(
          {},
          "9cab9DfqIhBKbT3vfsdSqmi",
          "TrenDuoi_SlotMachineItemView",
          void 0
        );
        var _ = o.ccclass,
          b = o.property;
        t(
          "default",
          ((f = b(s)),
          _(
            ((g = e(
              (v = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "spr_item", g, r(e)),
                    (e.card = null),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.reset = function () {
                    (this.card = new p()),
                      this.card.decodeCard(-1e3, d.TIENLEN),
                      this.bright();
                    var t = this.node.getComponent(c);
                    t && (t.opacity = 255);
                  }),
                  (a.refresh = function () {
                    this.bright();
                    var t = this.node.getComponent(c);
                    t && (t.opacity = 255);
                  }),
                  (a.randomize = function () {
                    (this.card = new p()),
                      this.card.decodeCard(l.getRandomInt(0, 53), d.TIENLEN),
                      this.bright();
                    var t = this.node.getComponent(c);
                    t && (t.opacity = 190);
                  }),
                  (a.setCard = function (t) {
                    null != t && null != t && (this.card = t);
                    var e = this.node.getComponent(c);
                    e && (e.opacity = 255), this.bright();
                  }),
                  (a.blur = function () {
                    var t,
                      e,
                      i,
                      n =
                        (null == (t = this.card)
                          ? void 0
                          : t.getResourceName()) + "_blur";
                    null != (e = this.spr_item) &&
                      e.spriteFrame &&
                      (this.spr_item.spriteFrame =
                        (null == (i = h.getInstance())
                          ? void 0
                          : i.loaded_card_blur.filter(function (t) {
                              return t.name.indexOf(n) >= 0;
                            })[0]) || null);
                  }),
                  (a.bright = function () {
                    var t,
                      e,
                      i =
                        null == (t = this.card) ? void 0 : t.getResourceName();
                    this.spr_item &&
                      (this.spr_item.spriteFrame =
                        (null == (e = h.getInstance())
                          ? void 0
                          : e.loaded_card_normal.filter(function (t) {
                              return t.name.indexOf(i || "") >= 0;
                            })[0]) || null);
                  }),
                  (a.isHiddenCard = function () {
                    var t;
                    return null == (t = this.card) ? void 0 : t.isHiddenCard();
                  }),
                  e
                );
              })(u)).prototype,
              "spr_item",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (m = v))
          ) || m)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TrenDuoiBetHistoryItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./StringUtils.ts",
    "./TrenDuoiGameView.ts",
    "./MiniGameNodeController.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, o, r, h, a, _, s, c, u, l, p;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (h = t._decorator),
            (a = t.Label),
            (_ = t.Sprite),
            (s = t.UIOpacity),
            (c = t.Component);
        },
        function (t) {
          u = t.StringUtils;
        },
        function (t) {
          l = t.default;
        },
        function (t) {
          p = t.default;
        },
      ],
      execute: function () {
        var x,
          b,
          g,
          d,
          f,
          m,
          v,
          y,
          w,
          z,
          D,
          S,
          I,
          T,
          F,
          H,
          N,
          U,
          B,
          C,
          L,
          R,
          V,
          j;
        r._RF.push(
          {},
          "3ce94xsxjdIsJH/ry+5F7sU",
          "TrenDuoiBetHistoryItemView",
          void 0
        );
        var G = h.ccclass,
          M = h.property;
        t(
          "default",
          ((x = M(a)),
          (b = M(a)),
          (g = M(a)),
          (d = M(a)),
          (f = M(a)),
          (m = M(a)),
          (v = M(_)),
          (y = M(a)),
          (w = M(a)),
          (z = M(a)),
          (D = M(a)),
          G(
            ((T = i(
              (I = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, r = new Array(e), h = 0;
                    h < e;
                    h++
                  )
                    r[h] = arguments[h];
                  return (
                    (i = t.call.apply(t, [this].concat(r)) || this),
                    n(i, "txt_phien_session", T, o(i)),
                    n(i, "txt_phien_time", F, o(i)),
                    n(i, "txt_phien_chon", H, o(i)),
                    n(i, "txt_phien_buocthang", N, o(i)),
                    n(i, "txt_phien_buoc", U, o(i)),
                    n(i, "txt_phien_tienthang", B, o(i)),
                    n(i, "result_card", C, o(i)),
                    n(i, "txt_chon", L, o(i)),
                    n(i, "txt_buoc", R, o(i)),
                    n(i, "txt_thang", V, o(i)),
                    n(i, "txt_buocthang", j, o(i)),
                    i
                  );
                }
                e(i, t);
                var r = i.prototype;
                return (
                  (r.show = function (t, i, e, n, o, r, h) {
                    var a, _;
                    this.txt_phien_session &&
                      (this.txt_phien_session.node.active = !0),
                      this.txt_phien_time &&
                        (this.txt_phien_time.node.active = !0),
                      this.txt_phien_chon &&
                        (this.txt_phien_chon.node.active = !0),
                      this.txt_phien_buoc &&
                        (this.txt_phien_buoc.node.active = !0),
                      this.txt_phien_buocthang &&
                        (this.txt_phien_buocthang.node.active = !0),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.node.active = !0),
                      this.result_card && (this.result_card.node.active = !0),
                      p.portrait &&
                        (this.txt_chon && (this.txt_chon.node.active = !0),
                        this.txt_buoc && (this.txt_buoc.node.active = !0),
                        this.txt_thang && (this.txt_thang.node.active = !0),
                        this.txt_buocthang &&
                          (this.txt_buocthang.node.active = !0)),
                      this.txt_phien_session &&
                        (this.txt_phien_session.string = "#" + t.toString()),
                      this.txt_phien_time &&
                        (this.txt_phien_time.string = i.toString()),
                      this.txt_phien_chon &&
                        (this.txt_phien_chon.string =
                          1 == e ? "Trên" : -1 == e ? "Dưới" : ""),
                      this.txt_phien_buoc &&
                        (this.txt_phien_buoc.string = n.toString()),
                      this.txt_phien_buocthang &&
                        (this.txt_phien_buocthang.string = u.formatNumber(o)),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.string = u.formatNumber(r));
                    var c =
                        null == (a = l.getInstance())
                          ? void 0
                          : a.loaded_card_normal.filter(function (t) {
                              return t.name.indexOf(h.getResourceName()) >= 0;
                            })[0],
                      x =
                        null == (_ = this.result_card)
                          ? void 0
                          : _.node.getComponent(s);
                    (x && null == c) || (null == c && x)
                      ? (x.opacity = 0)
                      : x && (x.opacity = 255),
                      this.result_card &&
                        (this.result_card.spriteFrame = c || null);
                  }),
                  (r.hide = function () {
                    this.txt_phien_session &&
                      (this.txt_phien_session.node.active = !1),
                      this.txt_phien_time &&
                        (this.txt_phien_time.node.active = !1),
                      this.txt_phien_chon &&
                        (this.txt_phien_chon.node.active = !1),
                      this.txt_phien_buoc &&
                        (this.txt_phien_buoc.node.active = !1),
                      this.txt_phien_buocthang &&
                        (this.txt_phien_buocthang.node.active = !1),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.node.active = !1),
                      this.result_card && (this.result_card.node.active = !1),
                      p.portrait &&
                        (this.txt_chon && (this.txt_chon.node.active = !1),
                        this.txt_buoc && (this.txt_buoc.node.active = !1),
                        this.txt_thang && (this.txt_thang.node.active = !1),
                        this.txt_buocthang &&
                          (this.txt_buocthang.node.active = !1));
                  }),
                  i
                );
              })(c)).prototype,
              "txt_phien_session",
              [x],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (F = i(I.prototype, "txt_phien_time", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = i(I.prototype, "txt_phien_chon", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = i(I.prototype, "txt_phien_buocthang", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = i(I.prototype, "txt_phien_buoc", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = i(I.prototype, "txt_phien_tienthang", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = i(I.prototype, "result_card", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = i(I.prototype, "txt_chon", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = i(I.prototype, "txt_buoc", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = i(I.prototype, "txt_thang", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = i(I.prototype, "txt_buocthang", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = I))
          ) || S)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TrenDuoiBetHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Define.ts",
    "./StringUtils.ts",
    "./TrenDuoiBetHistoryItemView.ts",
    "./MauBinh_CardLib.ts",
    "./GameConfigManager.ts",
    "./CommonPopup.ts",
    "./HttpManager.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, r, o, a, s, u, l, c, p, g, h, f, m, b, d, _;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (a = t._decorator),
            (s = t.Button),
            (u = t.Label),
            (l = t.Node),
            (c = t.UIOpacity);
        },
        function (t) {
          p = t.GameID;
        },
        function (t) {
          g = t.StringUtils;
        },
        function (t) {
          h = t.default;
        },
        function (t) {
          f = t.GameCard;
        },
        function (t) {
          m = t.GameConfigManager;
        },
        function (t) {
          b = t.CommonPopup;
        },
        function (t) {
          (d = t.HttpCommand), (_ = t.httpManager);
        },
      ],
      execute: function () {
        var v, y, w, P, T, H, B, C, D, I;
        o._RF.push(
          {},
          "8acdbJkhnpNEbmcO5hmKkPO",
          "TrenDuoiBetHistoryView",
          void 0
        );
        var S = function () {
            (this.bet = 0),
              (this.sessionID = 0),
              (this.money = 0),
              (this.card = 0),
              (this.valueBet = 0),
              (this.betTime = ""),
              (this.turn = 0);
          },
          L = a.ccclass,
          x = a.property;
        t(
          "default",
          ((v = x(s)),
          (y = x(s)),
          (w = x(u)),
          (P = x([l])),
          L(
            ((B = e(
              (H = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    i(e, "btn_prev", B, r(e)),
                    i(e, "btn_next", C, r(e)),
                    i(e, "lbl_page", D, r(e)),
                    i(e, "item_nodes", I, r(e)),
                    (e._bets = []),
                    (e.currentPage = 1),
                    (e.max_pages = 0),
                    (e.item_views = []),
                    e
                  );
                }
                n(e, t);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    var e,
                      n,
                      i = this;
                    this.setOffsetStreamNative(!0),
                      t.prototype.onLoad.call(this),
                      null == (e = this.btn_prev) ||
                        e.node.on("click", function () {
                          i.currentPage > 1 &&
                            ((i.currentPage -= 1),
                            i.lbl_page &&
                              (i.lbl_page.string = i.currentPage.toString())),
                            i.fetchHistory(!1);
                        }),
                      null == (n = this.btn_next) ||
                        n.node.on("click", function () {
                          i.currentPage < i.max_pages &&
                            ((i.currentPage += 1),
                            i.lbl_page &&
                              (i.lbl_page.string = i.currentPage.toString())),
                            i.fetchHistory(!1);
                        });
                  }),
                  (o.goToFirstPage = function () {
                    (this.currentPage = 1),
                      this.lbl_page &&
                        (this.lbl_page.string = this.currentPage.toString());
                  }),
                  (o.fetchHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0), t && this.goToFirstPage();
                    var n = (this.currentPage - 1) * this.item_nodes.length,
                      i =
                        m.SAdomainURL +
                        d.BET_HISTORY_CAOTHAP.replace("%skip%", n.toString());
                    _.sendGET({
                      url: i,
                      onCompleted: function (t) {
                        e._bets = [];
                        var n = JSON.parse(t).data,
                          i = n.items,
                          r = n.count;
                        e.max_pages = Math.ceil(r / e.item_nodes.length);
                        for (var o = 0; o < i.length; o++) {
                          var a = i[o],
                            s = new S();
                          (s.sessionID = a.sessionId),
                            (s.bet = a.betting),
                            (s.money = a.credit);
                          var u = a.createdTime;
                          (s.card = a.itemId),
                            (s.turn = a.turn),
                            (s.valueBet = a.predictId);
                          var l = new Date(u);
                          (s.betTime = g.formatTime(l)), e._bets.push(s);
                        }
                        e.showBetHistory();
                      },
                    });
                  }),
                  (o.showBetHistory = function () {
                    var t = this;
                    this.item_views.length <= 0 &&
                      (this.item_views = this.item_nodes.map(function (t) {
                        return t.getComponent(h);
                      })),
                      this.item_views.forEach(function (e, n) {
                        var i = t._bets[n],
                          r = null == e ? void 0 : e.node.getComponent(c);
                        if (null != i && null != i) {
                          r && (r.opacity = 255);
                          var o = new f();
                          o.decodeCard(i.card, p.TIENLEN),
                            null == e ||
                              e.show(
                                i.sessionID,
                                i.betTime,
                                i.valueBet,
                                i.turn,
                                i.bet,
                                i.money,
                                o
                              );
                        } else r && (r.opacity = 0);
                      }),
                      this.show();
                  }),
                  e
                );
              })(b)).prototype,
              "btn_prev",
              [v],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (C = e(H.prototype, "btn_next", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = e(H.prototype, "lbl_page", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(H.prototype, "item_nodes", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (T = H))
          ) || T)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TrenDuoiBetRankItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var e, i, n, r, o, u, a, l, s;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (u = t._decorator),
            (a = t.Label),
            (l = t.Component);
        },
        function (t) {
          s = t.StringUtils;
        },
      ],
      execute: function () {
        var c, p, _, f, m, b, x, g, h, y, w, z;
        o._RF.push(
          {},
          "7f7f74tyOFMfI6rjRLBYi80",
          "TrenDuoiBetRankItemView",
          void 0
        );
        var d = u.ccclass,
          v = u.property;
        t(
          "default",
          ((c = v(a)),
          (p = v(a)),
          (_ = v(a)),
          (f = v(a)),
          (m = v(a)),
          d(
            ((g = e(
              (x = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), u = 0;
                    u < i;
                    u++
                  )
                    o[u] = arguments[u];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "txt_time", g, r(e)),
                    n(e, "txt_username", h, r(e)),
                    n(e, "txt_bet", y, r(e)),
                    n(e, "txt_win_amount", w, r(e)),
                    n(e, "txt_type", z, r(e)),
                    e
                  );
                }
                return (
                  i(e, t),
                  (e.prototype.show = function (t, e, i, n, r) {
                    this.txt_time && (this.txt_time.string = t.toString()),
                      this.txt_username &&
                        (this.txt_username.string = e.toString()),
                      this.txt_bet && (this.txt_bet.string = s.formatNumber(i)),
                      this.txt_win_amount &&
                        (this.txt_win_amount.string = s.formatNumber(n)),
                      this.txt_type && (this.txt_type.string = r.toString());
                  }),
                  e
                );
              })(l)).prototype,
              "txt_time",
              [c],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (h = e(x.prototype, "txt_username", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = e(x.prototype, "txt_bet", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = e(x.prototype, "txt_win_amount", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(x.prototype, "txt_type", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = x))
          ) || b)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TrenDuoiBetRankView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./StringUtils.ts",
    "./TrenDuoiBetRankItemView.ts",
    "./HttpManager.ts",
    "./GameConfigManager.ts",
    "./CommonPopup.ts",
  ],
  function (t) {
    "use strict";
    var e, n, r, i, a, o, c, l, u, s, p, g, _, f, h;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (c = t.Button),
            (l = t.Label),
            (u = t.UIOpacity);
        },
        function (t) {
          s = t.StringUtils;
        },
        function (t) {
          p = t.default;
        },
        function (t) {
          (g = t.HttpCommand), (_ = t.httpManager);
        },
        function (t) {
          f = t.GameConfigManager;
        },
        function (t) {
          h = t.CommonPopup;
        },
      ],
      execute: function () {
        var m, b, d, y, v, k, w, R, T, S;
        a._RF.push(
          {},
          "ca641JPEs9IYq1CzWtFY4re",
          "TrenDuoiBetRankView",
          void 0
        );
        var C = o.ccclass,
          P = o.property,
          x = function () {
            (this.rank = 0),
              (this.money = 0),
              (this.displayName = ""),
              (this.bet = 0),
              (this.type = 0),
              (this.betTime = "");
          };
        t(
          "default",
          ((m = P([p])),
          (b = P(c)),
          (d = P(c)),
          (y = P(l)),
          C(
            ((w = e(
              (k = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, a = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    r(e, "item_views", w, i(e)),
                    r(e, "btn_prev", R, i(e)),
                    r(e, "btn_next", T, i(e)),
                    r(e, "lbl_current_page", S, i(e)),
                    (e._rank = []),
                    (e.current_page = 1),
                    (e.maxPage = 0),
                    e
                  );
                }
                n(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    var e,
                      n,
                      r,
                      i = this;
                    this.setOffsetStreamNative(!0),
                      t.prototype.onLoad.call(this),
                      null == (e = this.btn_close) ||
                        e.node.on("click", function () {
                          i.hide();
                        }),
                      null == (n = this.btn_prev) ||
                        n.node.on("click", function () {
                          i.current_page <= 1 ||
                            ((i.current_page -= 1),
                            i.lbl_current_page &&
                              (i.lbl_current_page.string =
                                i.current_page.toString()),
                            i.fetchRank(!1));
                        }),
                      null == (r = this.btn_next) ||
                        r.node.on("click", function () {
                          i.current_page >= i.maxPage ||
                            ((i.current_page += 1),
                            i.lbl_current_page &&
                              (i.lbl_current_page.string =
                                i.current_page.toString()),
                            i.fetchRank(!1));
                        });
                  }),
                  (a.fetchRank = function (t) {
                    var e = this;
                    void 0 === t && (t = !0),
                      t &&
                        ((this.current_page = 1),
                        this.lbl_current_page &&
                          (this.lbl_current_page.string =
                            this.current_page.toString()));
                    var n = 6 * (this.current_page - 1),
                      r =
                        f.SAdomainURL +
                        g.BET_RANK_URL_CAOTHAP.replace("%skip%", n.toString());
                    _.sendGET({
                      url: r,
                      onCompleted: function (t) {
                        e._rank = [];
                        var n = JSON.parse(t).data,
                          r = n.items,
                          i = n.count;
                        e.maxPage = Math.ceil(i / 6);
                        for (var a = 0; a < r.length; a++) {
                          var o = r[a],
                            c = new x();
                          (c.bet = o.betting),
                            (c.displayName = o.displayName),
                            (c.money = o.credit),
                            (c.type = o.description);
                          var l = o.createdTime,
                            u = new Date(l);
                          (c.betTime = s.formatTime(u)), e._rank.push(c);
                        }
                        e.showRank();
                      },
                    });
                  }),
                  (a.showRank = function () {
                    var t = this;
                    this.item_views.forEach(function (e, n) {
                      var r = t._rank[n],
                        i = e.node.getComponent(u);
                      null != r && null != r
                        ? (i && (i.opacity = 255),
                          e.show(
                            r.betTime,
                            r.displayName,
                            r.bet,
                            r.money,
                            r.type
                          ))
                        : i && (i.opacity = 0);
                    }),
                      this.show();
                  }),
                  e
                );
              })(h)).prototype,
              "item_views",
              [m],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (R = e(k.prototype, "btn_prev", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = e(k.prototype, "btn_next", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = e(k.prototype, "lbl_current_page", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = k))
          ) || v)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TrenDuoiGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MiniGameNodeController.ts",
    "./TrenDuoiMessageHandler.ts",
    "./Define.ts",
    "./StringUtils.ts",
    "./BaseMiniGameView.ts",
    "./TrenDuoiBetHistoryView.ts",
    "./TrenDuoiBetRankView.ts",
    "./TrenDuoiNoHuView.ts",
    "./TrenDuoiResultItem.ts",
    "./TrenDuoi_SlotMachineCmp.ts",
    "./CommonInfoPopup.ts",
    "./MauBinh_CardLib.ts",
    "./PersistManager.ts",
    "./SocketManager.ts",
  ],
  function (t) {
    "use strict";
    var e,
      i,
      n,
      o,
      l,
      r,
      a,
      s,
      u,
      c,
      h,
      b,
      m,
      p,
      f,
      d,
      _,
      g,
      v,
      w,
      L,
      k,
      y,
      P,
      T,
      I,
      S,
      j,
      D,
      N;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (l = t.cclegacy),
            (r = t._decorator),
            (a = t.Label),
            (s = t.Button),
            (u = t.Node),
            (c = t.SpriteFrame),
            (h = t.Sprite),
            (b = t.Tween),
            (m = t.tween),
            (p = t.UIOpacity),
            (f = t.Vec3);
        },
        function (t) {
          d = t.default;
        },
        function (t) {
          (_ = t.default), (g = t.UpDown_Message);
        },
        function (t) {
          v = t.GameID;
        },
        function (t) {
          w = t.StringUtils;
        },
        function (t) {
          L = t.default;
        },
        function (t) {
          k = t.default;
        },
        function (t) {
          y = t.default;
        },
        function (t) {
          P = t.default;
        },
        function (t) {
          T = t.default;
        },
        function (t) {
          I = t.default;
        },
        function (t) {
          S = t.CommonInfoPopup;
        },
        function (t) {
          j = t.GameCard;
        },
        function (t) {
          D = t.PersistManager;
        },
        function (t) {
          N = t.socketManager;
        },
      ],
      execute: function () {
        var M,
          V,
          R,
          A,
          C,
          H,
          z,
          B,
          G,
          J,
          O,
          q,
          U,
          E,
          x,
          F,
          W,
          K,
          Q,
          X,
          Y,
          Z,
          $,
          tt,
          et,
          it,
          nt,
          ot,
          lt,
          rt,
          at,
          st,
          ut,
          ct,
          ht,
          bt,
          mt,
          pt,
          ft,
          dt,
          _t,
          gt,
          vt,
          wt,
          Lt,
          kt,
          yt,
          Pt,
          Tt,
          It,
          St,
          jt,
          Dt,
          Nt,
          Mt;
        l._RF.push({}, "26864hrSLpND4cRHNrnJgV/", "TrenDuoiGameView", void 0);
        var Vt = function () {
            (this.aid = 0), (this.jackpot = 0), (this.bet = 0);
          },
          Rt = r.ccclass,
          At = r.property;
        t(
          "default",
          ((M = At(a)),
          (V = At(k)),
          (R = At(y)),
          (A = At([s])),
          (C = At(s)),
          (H = At(s)),
          (z = At(s)),
          (B = At(s)),
          (G = At(s)),
          (J = At(s)),
          (O = At(s)),
          (q = At(u)),
          (U = At(a)),
          (E = At(a)),
          (x = At(a)),
          (F = At(a)),
          (W = At(a)),
          (K = At(a)),
          (Q = At(P)),
          (X = At(S)),
          (Y = At(I)),
          (Z = At([s])),
          ($ = At([c])),
          (tt = At(u)),
          (et = At([c])),
          (it = At([c])),
          Rt(
            (((Mt = (function (t) {
              function e() {
                for (
                  var e, i = arguments.length, l = new Array(i), r = 0;
                  r < i;
                  r++
                )
                  l[r] = arguments[r];
                return (
                  (e = t.call.apply(t, [this].concat(l)) || this),
                  n(e, "lblJackpot", lt, o(e)),
                  n(e, "trenDuoiBetHistoryView", rt, o(e)),
                  n(e, "trenDuoiBetRankView", at, o(e)),
                  n(e, "btn_chips", st, o(e)),
                  (e.chip_values = [1e3, 1e4, 5e4, 1e5, 5e5]),
                  n(e, "btn_rank", ut, o(e)),
                  n(e, "btn_bet_history", ct, o(e)),
                  n(e, "btn_help", ht, o(e)),
                  n(e, "btn_spin", bt, o(e)),
                  n(e, "btn_up", mt, o(e)),
                  n(e, "btn_down", pt, o(e)),
                  n(e, "btn_luotmoi", ft, o(e)),
                  n(e, "result_node", dt, o(e)),
                  n(e, "mLblTimer", _t, o(e)),
                  n(e, "mLblStatus", gt, o(e)),
                  n(e, "mLblHighPrice", vt, o(e)),
                  n(e, "mLblMidPrice", wt, o(e)),
                  n(e, "mLblLowPrice", Lt, o(e)),
                  n(e, "lbl_result_amount", kt, o(e)),
                  n(e, "trenDuoiNoHuView", yt, o(e)),
                  n(e, "commonInfoPopup", Pt, o(e)),
                  n(e, "trenduoi_SlotMachineCmp", Tt, o(e)),
                  n(e, "mVecAAA", It, o(e)),
                  n(e, "loaded_card_normal", St, o(e)),
                  n(e, "result_panel", jt, o(e)),
                  n(e, "loaded_card_blur", Dt, o(e)),
                  n(e, "loaded_ico_result", Nt, o(e)),
                  (e._aid = 1),
                  (e.bet = 0),
                  (e._jackpotInfos = []),
                  (e.jackpot_amount = 0),
                  (e.jackpot_tween = null),
                  (e.mSessionID = 0),
                  (e.mUpDownValue = 0),
                  (e.mIsGameOver = !1),
                  (e.mIsPlaying = !1),
                  (e.mIsWinJackpot = !1),
                  (e.mTimeToCountDown = 120),
                  (e.mVecResult = []),
                  (e.mNumOfA = 0),
                  (e.result_items = []),
                  e
                );
              }
              i(e, t);
              var l = e.prototype;
              return (
                (l.getCurBetValue = function () {
                  return this.bet;
                }),
                (l.getSessionID = function () {
                  return this.mSessionID;
                }),
                (l.getUpDownValue = function () {
                  return this.mUpDownValue;
                }),
                (l.onLoad = function () {
                  var i,
                    n,
                    o,
                    l,
                    r,
                    a,
                    s,
                    u,
                    c,
                    h = this;
                  t.prototype.onLoad.call(this),
                    (e.instance = this),
                    (this.bet = this.chip_values[0]),
                    this.init(),
                    null == (i = this.btn_rank) ||
                      i.node.on("click", function () {
                        h.showRank();
                      }),
                    null == (n = this.btn_bet_history) ||
                      n.node.on("click", function () {
                        h.showBetHistory();
                      }),
                    null == (o = this.btn_help) ||
                      o.node.on("click", function () {
                        var t;
                        null == (t = h.commonInfoPopup) || t.show();
                      }),
                    null == (l = this.btn_close) ||
                      l.node.on("click", function () {
                        h.hide();
                      }),
                    null == (r = this.btn_spin) ||
                      r.node.on("click", function () {
                        h.reqStartGame();
                      }),
                    null == (a = this.btn_up) ||
                      a.node.on("click", function () {
                        (h.mUpDownValue = 1), h.reqStartNewTurn();
                      }),
                    null == (s = this.btn_down) ||
                      s.node.on("click", function () {
                        (h.mUpDownValue = -1), h.reqStartNewTurn();
                      }),
                    null == (u = this.btn_luotmoi) ||
                      u.node.on("click", function () {
                        h.reqStopGame();
                      }),
                    this.btn_chips.forEach(function (t, e) {
                      var i = e;
                      t.node.on("click", function () {
                        var t;
                        null != (t = h.trenduoi_SlotMachineCmp) && t.isStopped()
                          ? (h.highlightBet(i),
                            (h.bet = h.chip_values[i]),
                            h.mLblMidPrice &&
                              (h.mLblMidPrice.string = w.formatNumber(h.bet)),
                            h.updateJackpotLabels(!1))
                          : D.showNoti("Ván chơi chưa kết thúc!");
                      });
                    }),
                    this.result_items &&
                      (this.result_items =
                        null == (c = this.result_panel)
                          ? void 0
                          : c.getComponentsInChildren(T)),
                    this.resetAll();
                }),
                (l.highlightBet = function (t) {
                  this.btn_chips.forEach(function (e, i) {
                    e.node.children[1].active = i == t;
                  });
                }),
                (l.reqStartGame = function () {
                  this.mIsPlaying ||
                    ((this.mIsPlaying = !0),
                    this.mLblStatus && (this.mLblStatus.string = ""),
                    this.spin(),
                    _.sendMessage(g.START_GAME));
                }),
                (l.reqStartNewTurn = function () {
                  this.spin(), _.sendMessage(g.START_ROUND);
                }),
                (l.reqStopGame = function () {
                  _.sendMessage(g.STOP_GAME);
                }),
                (e.getInstance = function () {
                  return e.instance;
                }),
                (l.showRank = function () {
                  var t;
                  null == (t = this.trenDuoiBetRankView) || t.fetchRank();
                }),
                (l.spin = function () {
                  var t;
                  this.btn_down && (this.btn_down.interactable = !1),
                    this.btn_up && (this.btn_up.interactable = !1),
                    this.btn_luotmoi && (this.btn_luotmoi.interactable = !1),
                    this.btn_spin && (this.btn_spin.node.active = !1),
                    this.stopTimer(),
                    null == (t = this.trenduoi_SlotMachineCmp) || t.spin();
                }),
                (l.showBetHistory = function () {
                  var t;
                  null == (t = this.trenDuoiBetHistoryView) || t.fetchHistory();
                }),
                (l.show = function () {
                  var e;
                  return (
                    _.subcribe(),
                    null == (e = d.getInstance()) ||
                      e.bringGameViewToTop(this, !0),
                    t.prototype.show.call(this, function () {}),
                    !0
                  );
                }),
                (l.hide = function () {
                  t.prototype.hide.call(this);
                }),
                (l.init = function () {
                  t.prototype.init.call(this),
                    t.prototype.hideImmediately.call(this);
                }),
                (l.resetAll = function () {
                  var t, e, i, n, o, l;
                  (this.mVecResult = []),
                    this.mLblTimer && (this.mLblTimer.string = "02:00"),
                    this.mLblStatus && (this.mLblStatus.node.active = !0),
                    this.mLblStatus &&
                      (this.mLblStatus.string = "Nhấn Play để bắt đầu."),
                    this.mLblMidPrice &&
                      (this.mLblMidPrice.string = w.formatNumber(this.bet)),
                    (this.mIsGameOver = !1),
                    (this.mIsPlaying = !1),
                    null != (t = this.mLblHighPrice) &&
                      t.node.parent &&
                      (this.mLblHighPrice.node.parent.active = !1),
                    null != (e = this.mLblLowPrice) &&
                      e.node.parent &&
                      (this.mLblLowPrice.node.parent.active = !1),
                    this.highlightBet(this.chip_values.indexOf(this.bet)),
                    this.btn_spin && (this.btn_spin.node.active = !0),
                    this.btn_luotmoi && (this.btn_luotmoi.interactable = !1);
                  var r =
                    null == (i = this.btn_luotmoi)
                      ? void 0
                      : i.target.getComponent(h);
                  r &&
                    (r.grayscale = !(
                      null != (n = this.btn_luotmoi) && n.interactable
                    )),
                    this.btn_down && (this.btn_down.interactable = !1),
                    this.btn_up && (this.btn_up.interactable = !1),
                    null == (o = this.trenduoi_SlotMachineCmp) || o.reset(),
                    (this.mNumOfA = 0),
                    this.updateNumA(),
                    this.hideResultPanel(),
                    null == (l = this.trenduoi_SlotMachineCmp) || l.stop(null),
                    b.stopAllByTarget(this.node);
                }),
                (l.updateNumA = function () {
                  var t = this;
                  this.mVecAAA.forEach(function (e, i) {
                    e.interactable = i < t.mNumOfA;
                  });
                }),
                (l.updateResultPanel = function () {
                  var t,
                    e,
                    i = this,
                    n = this.mVecResult;
                  this.mVecResult.length >
                    ((null == (t = this.result_items) ? void 0 : t.length) ||
                      0) &&
                    (n = n.slice(
                      this.mVecResult.length -
                        ((null == (e = this.result_items)
                          ? void 0
                          : e.length) || 0),
                      this.mVecResult.length
                    ));
                  n.forEach(function (t, e) {
                    var n, o;
                    null == (n = i.result_items) ||
                      null == (o = n[e]) ||
                      o.show(t);
                  });
                }),
                (l.hideResultPanel = function () {
                  var t;
                  null == (t = this.result_items) ||
                    t.forEach(function (t) {
                      return t.hide();
                    });
                }),
                (l.onUpdateResult = function (t, e) {
                  var i,
                    n = this;
                  if (null != this.mVecResult) {
                    var o = Math.floor(t / 4) + 1;
                    1 == o && (o = 14), 15 == o && (o = 2);
                    var l = o;
                    14 == l &&
                      this.mNumOfA < this.mVecAAA.length &&
                      (this.mNumOfA++, this.updateNumA()),
                      this.mVecResult.push(t),
                      this.updateResultPanel();
                    var r = new j();
                    if (
                      (r.decodeCard(t, v.TIENLEN),
                      null == (i = this.trenduoi_SlotMachineCmp) || i.stop(r),
                      this.mIsGameOver)
                    )
                      this.onGameOver();
                    else {
                      var a, s;
                      this.btn_up && (this.btn_up.interactable = 14 != l),
                        this.btn_down && (this.btn_down.interactable = 2 != l),
                        this.btn_luotmoi &&
                          (this.btn_luotmoi.interactable =
                            this.mVecResult.length > 1);
                      var u,
                        c =
                          null == (a = this.btn_luotmoi)
                            ? void 0
                            : a.target.getComponent(h);
                      if (
                        (c &&
                          (c.grayscale = !(
                            null != (s = this.btn_luotmoi) && s.interactable
                          )),
                        this.startTimer(),
                        this.mIsWinJackpot && e > 0)
                      )
                        this.lblJackpot &&
                          (this.lblJackpot.string = w.formatNumber(e)),
                          m(
                            null == (u = this.trenDuoiNoHuView)
                              ? void 0
                              : u.node
                          )
                            .sequence(
                              m().call(function () {
                                var t;
                                null == (t = n.trenDuoiNoHuView) || t.show(e);
                              }),
                              m().sequence(
                                m().delay(2.5),
                                m().call(function () {
                                  var t;
                                  (n.mIsWinJackpot = !1),
                                    null == (t = n.trenDuoiNoHuView) ||
                                      t.activeClick();
                                })
                              )
                            )
                            .start(),
                          m(this.node)
                            .sequence(
                              m().delay(3),
                              m().call(function () {
                                _.subcribe();
                              })
                            )
                            .start();
                    }
                  }
                }),
                (l.onGameOver = function () {
                  var t, e;
                  this.hideResultPanel(),
                    this.mLblStatus &&
                      (this.mLblStatus.string = "Bạn đã thua!"),
                    this.mLblStatus && (this.mLblStatus.node.active = !0),
                    this.stopTimer(),
                    this.btn_down && (this.btn_down.interactable = !1),
                    this.btn_up && (this.btn_up.interactable = !1),
                    this.btn_luotmoi && (this.btn_luotmoi.interactable = !1);
                  var i =
                    null == (t = this.btn_luotmoi)
                      ? void 0
                      : t.target.getComponent(h);
                  i &&
                    (i.grayscale = !(
                      null != (e = this.btn_luotmoi) && e.interactable
                    )),
                    m(this.node)
                      .sequence(
                        m().delay(3),
                        m().call(function () {
                          _.subcribe();
                        })
                      )
                      .start(),
                    N.sendRefreshMoney();
                }),
                (l.updateTimer = function () {
                  var t = Math.floor(this.mTimeToCountDown / 60),
                    e = Math.floor(this.mTimeToCountDown % 60),
                    i = t.toString(),
                    n = e.toString();
                  t < 10 && (i = "0" + i),
                    e < 10 && (n = "0" + n),
                    this.mLblTimer && (this.mLblTimer.string = i + ":" + n);
                }),
                (l.startTimer = function () {
                  var t,
                    e,
                    i,
                    n = this;
                  this.updateTimer(),
                    b.stopAllByTarget(
                      (null == (t = this.mLblTimer) ? void 0 : t.node) || void 0
                    );
                  var o = m(
                    (null == (e = this.mLblTimer) ? void 0 : e.node) || void 0
                  ).sequence(
                    m().delay(1),
                    m().call(function () {
                      var t;
                      0 != n.mTimeToCountDown
                        ? (n.mTimeToCountDown--, n.updateTimer())
                        : b.stopAllByTarget(
                            null == (t = n.mLblTimer) ? void 0 : t.node
                          );
                    })
                  );
                  m(null == (i = this.mLblTimer) ? void 0 : i.node)
                    .repeatForever(o)
                    .start();
                }),
                (l.stopTimer = function () {
                  var t;
                  b.stopAllByTarget(
                    null == (t = this.mLblTimer) ? void 0 : t.node
                  ),
                    (this.mTimeToCountDown = 120),
                    this.updateTimer();
                }),
                (l.resInfoGame = function (t, e, i, n, o) {
                  if (
                    (this.updateJackpot(t),
                    this.resetAll(),
                    null != e && null != e)
                  ) {
                    var l, r;
                    this.mLblStatus && (this.mLblStatus.node.active = !1);
                    var a = e,
                      s = a.items || [],
                      u = a.sid,
                      c = a.crd || 0,
                      h = a.b;
                    (this.mSessionID = u || 0),
                      null != (l = this.mLblHighPrice) &&
                        l.node.parent &&
                        (this.mLblHighPrice.node.parent.active = !0),
                      this.mLblHighPrice &&
                        (this.mLblHighPrice.string = w.formatNumber(n)),
                      this.mLblMidPrice &&
                        (this.mLblMidPrice.string = w.formatNumber(c)),
                      null != (r = this.mLblLowPrice) &&
                        r.node.parent &&
                        (this.mLblLowPrice.node.parent.active = !0),
                      this.mLblLowPrice &&
                        (this.mLblLowPrice.string = w.formatNumber(o)),
                      (this.bet = h || 0),
                      this.highlightBet(this.chip_values.indexOf(this.bet));
                    for (var b = 0; b < s.length; b++)
                      this.onUpdateResult(s[b], 0);
                    this.btn_spin && (this.btn_spin.node.active = !1),
                      (this.mTimeToCountDown = i / 1e3),
                      this.startTimer();
                  }
                }),
                (l.resStartGame = function (t, e, i, n, o, l, r) {
                  var a = this;
                  (this.mSessionID = n),
                    m(this.node)
                      .sequence(
                        m().delay(0.5),
                        m().call(function () {
                          var i, n;
                          a.onUpdateResult(t, 0),
                            null != (i = a.mLblHighPrice) &&
                              i.node.parent &&
                              (a.mLblHighPrice.node.parent.active = !0),
                            a.mLblHighPrice &&
                              (a.mLblHighPrice.string = w.formatNumber(o)),
                            a.mLblMidPrice &&
                              (a.mLblMidPrice.string = w.formatNumber(e)),
                            null != (n = a.mLblLowPrice) &&
                              n.node.parent &&
                              (a.mLblLowPrice.node.parent.active = !0),
                            a.mLblLowPrice &&
                              (a.mLblLowPrice.string = w.formatNumber(l));
                        })
                      )
                      .start();
                }),
                (l.resStartNewRound = function (t, e, i, n, o, l, r, a, s, u) {
                  var c = this;
                  (this.mIsGameOver = r),
                    (this.mIsWinJackpot = a),
                    this.stopTimer(),
                    (this.mSessionID = n),
                    m(this.node)
                      .sequence(
                        m().delay(0.5),
                        m().call(function () {
                          var i, n;
                          c.onUpdateResult(t, s),
                            null != (i = c.mLblHighPrice) &&
                              i.node.parent &&
                              (c.mLblHighPrice.node.parent.active = !0),
                            c.mLblHighPrice &&
                              (c.mLblHighPrice.string = w.formatNumber(o)),
                            c.mLblMidPrice &&
                              (c.mLblMidPrice.string = w.formatNumber(e)),
                            null != (n = c.mLblLowPrice) &&
                              n.node.parent &&
                              (c.mLblLowPrice.node.parent.active = !0),
                            c.mLblLowPrice &&
                              (c.mLblLowPrice.string = w.formatNumber(l)),
                            u &&
                              (c.btn_down && (c.btn_down.interactable = !1),
                              c.btn_up && (c.btn_up.interactable = !1));
                        })
                      )
                      .start();
                }),
                (l.resStopGame = function (t) {
                  var e,
                    i,
                    n,
                    o,
                    l,
                    r,
                    a = this,
                    s = w.formatNumber(t);
                  this.lbl_result_amount &&
                    (this.lbl_result_amount.string = "+" + s),
                    this.hideResultPanel(),
                    b.stopAllByTarget(this.result_node || void 0),
                    b.stopAllByTarget(
                      (null == (e = this.result_node)
                        ? void 0
                        : e.getComponent(p)) || void 0
                    ),
                    null == (i = this.result_node) ||
                      i.setPosition(
                        new f(
                          null == (n = this.result_node)
                            ? void 0
                            : n.position.x,
                          -95,
                          0
                        )
                      );
                  var u =
                    null == (o = this.result_node) ? void 0 : o.getComponent(p);
                  u && (u.opacity = 255),
                    m(this.result_node)
                      .sequence(
                        m().by(
                          0.5,
                          { position: new f(0, 20, 0) },
                          { easing: "expoOut" }
                        ),
                        m().delay(1.5),
                        m().call(function () {
                          var t;
                          m(
                            null == (t = a.result_node)
                              ? void 0
                              : t.getComponent(p)
                          )
                            .to(0.5, { opacity: 0 })
                            .start();
                        })
                      )
                      .start();
                  var c =
                    "Bạn thắng " +
                    s +
                    " sau " +
                    this.mVecResult.length +
                    " lần lật bài!";
                  this.btn_luotmoi && (this.btn_luotmoi.interactable = !1);
                  var d =
                    null == (l = this.btn_luotmoi)
                      ? void 0
                      : l.target.getComponent(h);
                  d &&
                    (d.grayscale = !(
                      null != (r = this.btn_luotmoi) && r.interactable
                    )),
                    this.btn_up && (this.btn_up.interactable = !1),
                    this.btn_down && (this.btn_down.interactable = !1),
                    this.mLblStatus && (this.mLblStatus.node.active = !0),
                    this.mLblStatus && (this.mLblStatus.string = c),
                    m(this.node)
                      .sequence(
                        m().delay(3),
                        m().call(function () {
                          _.subcribe(), a.stopTimer();
                        })
                      )
                      .start(),
                    N.sendRefreshMoney();
                }),
                (l.updateJackpot = function (t) {
                  var e = !1;
                  0 == this._jackpotInfos.length && (e = !0);
                  for (var i = 0; i < t.length; i++) {
                    var n = t[i],
                      o = n.J,
                      l = n.aid,
                      r = n.b;
                    if (e) {
                      var a = new Vt();
                      (a.jackpot = o || 0),
                        (a.aid = l || 0),
                        (a.bet = r || 0),
                        this._jackpotInfos.push(a);
                    } else
                      for (var s = 0; s < this._jackpotInfos.length; s++)
                        if (
                          this._jackpotInfos[s].aid == l &&
                          this._jackpotInfos[s].bet == r
                        ) {
                          this._jackpotInfos[s].jackpot = o || 0;
                          break;
                        }
                  }
                  if (e) {
                    for (var u = [], c = 0; c < this._jackpotInfos.length; c++)
                      if (1 == this._jackpotInfos[c].aid) {
                        var h = new Vt();
                        (h.jackpot = this._jackpotInfos[c].jackpot),
                          (h.aid = this._jackpotInfos[c].aid),
                          (h.bet = this._jackpotInfos[c].bet),
                          u.push(h);
                      }
                    for (var b = 0; b < this._jackpotInfos.length; b++)
                      if (2 == this._jackpotInfos[b].aid) {
                        var m = new Vt();
                        (m.jackpot = this._jackpotInfos[b].jackpot),
                          (m.aid = this._jackpotInfos[b].aid),
                          (m.bet = this._jackpotInfos[b].bet),
                          u.push(m);
                      }
                    for (var p = 1, f = 0; f < u.length - 1; f++) {
                      for (var d = f + 1; d < u.length; d++)
                        if (
                          u[f].aid == p &&
                          u[d].aid == p &&
                          u[d].bet < u[f].bet
                        ) {
                          var _ = u[f].bet,
                            g = u[f].jackpot;
                          (u[f].bet = u[d].bet),
                            (u[f].jackpot = u[d].jackpot),
                            (u[d].bet = _),
                            (u[d].jackpot = g),
                            (d = f + 1);
                        }
                      f == u.length - 2 && 1 == p && ((f = 0), (p = 2));
                    }
                    this._jackpotInfos = u;
                  }
                  this.updateJackpotLabels(!e);
                }),
                (l.updateJackpotLabels = function (t) {
                  for (var e = this, i = 0; i < this._jackpotInfos.length; i++)
                    if (
                      this._jackpotInfos[i].aid == this._aid &&
                      this._jackpotInfos[i].bet == this.bet
                    ) {
                      var n;
                      if ((null == (n = this.jackpot_tween) || n.stop(), t)) {
                        var o = { a: this.jackpot_amount };
                        (this.jackpot_tween = m(o)
                          .to(
                            0.5,
                            { a: this._jackpotInfos[i].jackpot },
                            {
                              progress: function (t, i, n, o) {
                                return (
                                  null != e.lblJackpot &&
                                    (e.lblJackpot.string = w.formatNumber(
                                      Math.floor(n)
                                    )),
                                  t + (i - t) * o
                                );
                              },
                            }
                          )
                          .start()),
                          (this.jackpot_amount = this._jackpotInfos[i].jackpot);
                      } else
                        (this.jackpot_amount = this._jackpotInfos[i].jackpot),
                          this.lblJackpot &&
                            (this.lblJackpot.string = w.formatNumber(
                              this.jackpot_amount
                            ));
                      break;
                    }
                }),
                (l.IsLiveStreamOverlap = function (e) {
                  return !!t.prototype.IsLiveStreamOverlap.call(this, e);
                }),
                (l.onDestroy = function () {
                  e.instance = null;
                }),
                e
              );
            })(L)).instance = null),
            (lt = e((ot = Mt).prototype, "lblJackpot", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (rt = e(ot.prototype, "trenDuoiBetHistoryView", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (at = e(ot.prototype, "trenDuoiBetRankView", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (st = e(ot.prototype, "btn_chips", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (ut = e(ot.prototype, "btn_rank", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ct = e(ot.prototype, "btn_bet_history", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ht = e(ot.prototype, "btn_help", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (bt = e(ot.prototype, "btn_spin", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (mt = e(ot.prototype, "btn_up", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (pt = e(ot.prototype, "btn_down", [J], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ft = e(ot.prototype, "btn_luotmoi", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (dt = e(ot.prototype, "result_node", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_t = e(ot.prototype, "mLblTimer", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (gt = e(ot.prototype, "mLblStatus", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (vt = e(ot.prototype, "mLblHighPrice", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (wt = e(ot.prototype, "mLblMidPrice", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Lt = e(ot.prototype, "mLblLowPrice", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (kt = e(ot.prototype, "lbl_result_amount", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (yt = e(ot.prototype, "trenDuoiNoHuView", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pt = e(ot.prototype, "commonInfoPopup", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Tt = e(ot.prototype, "trenduoi_SlotMachineCmp", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (It = e(ot.prototype, "mVecAAA", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (St = e(ot.prototype, "loaded_card_normal", [$], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (jt = e(ot.prototype, "result_panel", [tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Dt = e(ot.prototype, "loaded_card_blur", [et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Nt = e(ot.prototype, "loaded_ico_result", [it], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (nt = ot))
          ) || nt)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TrenDuoiMessageHandler.ts",
  [
    "cc",
    "./TrenDuoiGameView.ts",
    "./MiniGameNetworkHandler.ts",
    "./PersistManager.ts",
    "./SocketManager.ts",
  ],
  function (e) {
    "use strict";
    var n, a, s, t, r, u;
    return {
      setters: [
        function (e) {
          (n = e.cclegacy), (a = e._decorator);
        },
        function (e) {
          s = e.default;
        },
        function (e) {
          t = e.MiniGameNetworkHandler;
        },
        function (e) {
          r = e.PersistManager;
        },
        function (e) {
          u = e.MessageRequest;
        },
      ],
      execute: function () {
        var l, i;
        e("UpDown_Message", void 0),
          n._RF.push(
            {},
            "1a560xaIfVEVJNgolTcjCYH",
            "TrenDuoiMessageHandler",
            void 0
          ),
          (function (e) {
            (e[(e.INFO_GAME = 1500)] = "INFO_GAME"),
              (e[(e.START_GAME = 1501)] = "START_GAME"),
              (e[(e.START_ROUND = 1502)] = "START_ROUND"),
              (e[(e.STOP_GAME = 1503)] = "STOP_GAME"),
              (e[(e.UPDATE_JAR = 1504)] = "UPDATE_JAR");
          })(i || (i = e("UpDown_Message", {})));
        var c = a.ccclass;
        a.property,
          e(
            "default",
            c(
              (l = (function () {
                function e() {}
                return (
                  (e.subcribe = function () {
                    e.sendMessage(i.INFO_GAME);
                  }),
                  (e.handleMessage = function (e) {
                    var n = e[1],
                      a = n.cmd,
                      t = s.getInstance();
                    switch (a) {
                      case i.INFO_GAME:
                        var u = n.Js || [],
                          l = null,
                          c = -1,
                          o = 0,
                          d = 0;
                        null != n.ss &&
                          ((l = n.ss), (o = n.up || 0), (d = n.down || 0)),
                          null != n.rmT && (c = n.rmT),
                          null != t &&
                            null != t &&
                            t.resInfoGame(u, l, c, o, d);
                        break;
                      case i.START_GAME:
                        if (null != n.mgs) {
                          var g = n.mgs;
                          return (
                            r.showNoti(g),
                            void (null != t && null != t && t.resetAll())
                          );
                        }
                        var T = n.iid || 0,
                          A = n.crd || 0,
                          M = n.b || 0,
                          _ = n.aid || 0,
                          v = n.sid || 0,
                          G = n.up || 0,
                          f = n.down || 0;
                        null != t &&
                          null != t &&
                          t.resStartGame(T, A, M, v, G, f, _);
                        break;
                      case i.START_ROUND:
                        var R = n.iid || 0,
                          S = n.crd || 0,
                          E = n.b || 0,
                          p = (n.aid, n.sid || 0),
                          D = n.up || 0,
                          I = n.down || 0,
                          m = n.iF || !1,
                          w = n.iJ || !1,
                          N = n.ng || 0,
                          b = 0;
                        w && (b = n.J || 0),
                          null != t &&
                            null != t &&
                            t.resStartNewRound(R, S, E, p, D, I, m, w, b, N);
                        break;
                      case i.STOP_GAME:
                        if (null != n.crd) {
                          var O = n.crd;
                          null != t && null != t && t.resStopGame(O);
                        }
                        break;
                      case i.UPDATE_JAR:
                        var k = n.Js || [];
                        null != t && null != t && t.updateJackpot(k);
                    }
                  }),
                  (e.sendMessage = function (e) {
                    var n = {};
                    switch (((n.cmd = e), e)) {
                      case i.INFO_GAME:
                        break;
                      case i.START_GAME:
                        var a;
                        (n.aid = 1),
                          (n.b =
                            null == (a = s.getInstance())
                              ? void 0
                              : a.getCurBetValue());
                        break;
                      case i.START_ROUND:
                        var r, l, c;
                        (n.aid = 1),
                          (n.b =
                            null == (r = s.getInstance())
                              ? void 0
                              : r.getCurBetValue()),
                          (n.sid =
                            null == (l = s.getInstance())
                              ? void 0
                              : l.getSessionID()),
                          (n.udr =
                            null == (c = s.getInstance())
                              ? void 0
                              : c.getUpDownValue());
                        break;
                      case i.STOP_GAME:
                        var o;
                        n.sid =
                          null == (o = s.getInstance())
                            ? void 0
                            : o.getSessionID();
                    }
                    var d = [u.ZonePlugin_Type, "MiniGame", "updownPlugin", n];
                    t.send(d);
                  }),
                  e
                );
              })())
            ) || l
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TrenDuoiNoHuView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./StringUtils.ts",
    "./BlinkCmp.ts",
    "./SoundManager.ts",
    "./EventManager.ts",
  ],
  function (n) {
    "use strict";
    var t, i, e, o, l, a, r, u, s, c, h, f, p, d, g, v, y, _, b, w, m;
    return {
      setters: [
        function (n) {
          (t = n.applyDecoratedDescriptor),
            (i = n.inheritsLoose),
            (e = n.initializerDefineProperty),
            (o = n.assertThisInitialized);
        },
        function (n) {
          (l = n.cclegacy),
            (a = n._decorator),
            (r = n.Node),
            (u = n.Sprite),
            (s = n.Label),
            (c = n.AudioClip),
            (h = n.sys),
            (f = n.Vec3),
            (p = n.Tween),
            (d = n.UIOpacity),
            (g = n.tween),
            (v = n.Component);
        },
        function (n) {
          y = n.StringUtils;
        },
        function (n) {
          _ = n.default;
        },
        function (n) {
          b = n.SoundManager;
        },
        function (n) {
          (w = n.eventManager), (m = n.EventKey);
        },
      ],
      execute: function () {
        var k, M, F, x, B, H, z, S, T, A, C, N, L, q, D, I;
        l._RF.push({}, "cce44Rv2qpL/63aA7pfIMM0", "TrenDuoiNoHuView", void 0);
        var O = a.ccclass,
          E = a.property;
        n(
          "default",
          ((k = E(r)),
          (M = E(r)),
          (F = E(u)),
          (x = E(_)),
          (B = E(u)),
          (H = E(s)),
          (z = E(c)),
          O(
            ((A = t(
              (T = (function (n) {
                function t() {
                  for (
                    var t, i = arguments.length, l = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    l[a] = arguments[a];
                  return (
                    (t = n.call.apply(n, [this].concat(l)) || this),
                    e(t, "root", A, o(t)),
                    e(t, "black_screen", C, o(t)),
                    e(t, "noHuMoneyBg", N, o(t)),
                    e(t, "glow", L, o(t)),
                    e(t, "finishFx", q, o(t)),
                    e(t, "nohu_win_amount", D, o(t)),
                    e(t, "nohu_bgm", I, o(t)),
                    (t.win_amount_tween = null),
                    (t.activated_click = !1),
                    t
                  );
                }
                i(t, n);
                var l = t.prototype;
                return (
                  (l.onLoad = function () {
                    var n,
                      t = this;
                    null == (n = this.black_screen) ||
                      n.on("click", function () {
                        t.activated_click && t.hide();
                      });
                  }),
                  (l.activeClick = function () {
                    this.black_screen && (this.black_screen.active = !0),
                      (this.activated_click = !0);
                  }),
                  (l.show = function (n) {
                    var t,
                      i,
                      e,
                      o,
                      l,
                      a,
                      r,
                      u,
                      s,
                      c,
                      v,
                      _ = this;
                    h.isNative &&
                      h.os == h.OS.IOS &&
                      (this.node.scale = new f(0.9, 0.9, 0.9)),
                      b.getInstance().playBgm(this.nohu_bgm || null),
                      this.root && (this.root.active = !0),
                      this.black_screen && (this.black_screen.active = !0),
                      (this.activated_click = !1),
                      p.stopAllByTarget(
                        null == (t = this.noHuMoneyBg) ? void 0 : t.node
                      ),
                      p.stopAllByTarget(
                        null == (i = this.finishFx) ? void 0 : i.node
                      ),
                      p.stopAllByTarget(
                        null == (e = this.glow) ? void 0 : e.node
                      ),
                      null == (o = this.win_amount_tween) || o.stop(),
                      this.finishFx && (this.finishFx.node.active = !1),
                      null == (l = this.finishFx) ||
                        l.node.setScale(new f(3, 3, 3));
                    var w =
                      null == (a = this.finishFx)
                        ? void 0
                        : a.node.getComponent(d);
                    w && (w.opacity = 255),
                      g(null == (r = this.finishFx) ? void 0 : r.node)
                        .sequence(
                          g().delay(0.4),
                          g().call(function () {
                            _.finishFx && (_.finishFx.node.active = !0);
                          }),
                          g().to(0.3, { scale: f.ONE })
                        )
                        .start();
                    var m = new f(
                      (null == (u = this.noHuMoneyBg)
                        ? void 0
                        : u.node.position) || f.ZERO
                    );
                    (m.y = -485),
                      null == (s = this.noHuMoneyBg) || s.node.setPosition(m),
                      g(null == (c = this.noHuMoneyBg) ? void 0 : c.node)
                        .sequence(
                          g().delay(0.6),
                          g().to(0.3, { position: new f(0, -260, 0) })
                        )
                        .start(),
                      null == (v = this.glow) || v.run();
                    this.win_amount_tween = g({ a: 0 })
                      .to(
                        2,
                        { a: n },
                        {
                          progress: function (n, t, i, e) {
                            return (
                              _.nohu_win_amount &&
                                (_.nohu_win_amount.string = y.formatNumber(
                                  Math.floor(i)
                                )),
                              n + (t - n) * e
                            );
                          },
                        }
                      )
                      .call(function () {
                        _.nohu_win_amount &&
                          (_.nohu_win_amount.string = y.formatNumber(
                            Math.floor(n)
                          ));
                      })
                      .start();
                    var k = this.node.getComponent(d);
                    k && (k.opacity = 255);
                  }),
                  (l.hide = function () {
                    var n,
                      t,
                      i,
                      e,
                      o,
                      l,
                      a = this;
                    this.black_screen && (this.black_screen.active = !1),
                      (this.activated_click = !1),
                      p.stopAllByTarget(
                        null == (n = this.noHuMoneyBg) ? void 0 : n.node
                      ),
                      p.stopAllByTarget(
                        null == (t = this.finishFx) ? void 0 : t.node
                      ),
                      null == (i = this.glow) || i.stop(),
                      g(null == (e = this.finishFx) ? void 0 : e.node)
                        .sequence(
                          g().to(0.3, { scale: new f(3, 3, 3) }),
                          g().call(function () {
                            a.finishFx && (a.finishFx.node.active = !1),
                              a.root && (a.root.active = !1),
                              w.emitLast(m.MusicPlay);
                          })
                        )
                        .start(),
                      g(
                        null == (o = this.finishFx)
                          ? void 0
                          : o.node.getComponent(d)
                      )
                        .to(0.3, { opacity: 1 })
                        .start(),
                      g(null == (l = this.noHuMoneyBg) ? void 0 : l.node)
                        .sequence(
                          g().call(function () {}),
                          g().to(0.3, { position: new f(0, -485, 0) })
                        )
                        .start();
                  }),
                  t
                );
              })(v)).prototype,
              "root",
              [k],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (C = t(T.prototype, "black_screen", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = t(T.prototype, "noHuMoneyBg", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = t(T.prototype, "glow", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = t(T.prototype, "finishFx", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = t(T.prototype, "nohu_win_amount", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = t(T.prototype, "nohu_bgm", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = T))
          ) || S)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TrenDuoiResultItem.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./TrenDuoiGameView.ts"],
  function (t) {
    "use strict";
    var e, i, n, r, o, c, a, u, l, s;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (c = t._decorator),
            (a = t.Sprite),
            (u = t.Label),
            (l = t.Component);
        },
        function (t) {
          s = t.default;
        },
      ],
      execute: function () {
        var p, f, h, d, v, b;
        o._RF.push({}, "08eb2KzNdxGIpbMoaFugJT6", "TrenDuoiResultItem", void 0);
        var g = c.ccclass,
          y = c.property;
        t(
          "default",
          ((p = y(a)),
          (f = y(u)),
          g(
            ((v = e(
              (d = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), c = 0;
                    c < i;
                    c++
                  )
                    o[c] = arguments[c];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "icon", v, r(e)),
                    n(e, "text", b, r(e)),
                    e
                  );
                }
                i(e, t);
                var o = e.prototype;
                return (
                  (o.show = function (t) {
                    var e = Math.floor(t % 4) + 1,
                      i = Math.floor(t / 4) + 1;
                    if ((15 == i && (i = 2), i > 0)) {
                      var n,
                        r = i.toString();
                      11 == i
                        ? (r = "J")
                        : 12 == i
                        ? (r = "Q")
                        : 13 == i
                        ? (r = "K")
                        : (14 != i && 1 != i) || (r = "A"),
                        this.text && (this.text.string = r);
                      var o = "";
                      1 == e && (o = "ct_bich"),
                        2 == e && (o = "ct_tep"),
                        3 == e && (o = "ct_ro"),
                        4 == e && (o = "ct_co"),
                        this.icon &&
                          (this.icon.spriteFrame =
                            (null == (n = s.getInstance())
                              ? void 0
                              : n.loaded_ico_result.filter(function (t) {
                                  return t.name.indexOf(o) >= 0;
                                })[0]) || null);
                    }
                    this.node.active = !0;
                  }),
                  (o.hide = function () {
                    this.node.active = !1;
                  }),
                  e
                );
              })(l)).prototype,
              "icon",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (b = e(d.prototype, "text", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (h = d))
          ) || h)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/UnitTest.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameConfigManager.ts",
    "./CCMiniGameRoot.ts",
    "./Define.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, r, o, a, l, s, u, c, g, f, p, y;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (a = e._decorator),
            (l = e.Sprite),
            (s = e.sys),
            (u = e.Tween),
            (c = e.tween),
            (g = e.Component);
        },
        function (e) {
          f = e.GameConfigManager;
        },
        function (e) {
          p = e.CCMiniGameRoot;
        },
        function (e) {
          y = e.StorageKey;
        },
      ],
      execute: function () {
        var b, v, d, h, m, k, T, C, S;
        o._RF.push({}, "514b5SCHgFG1KTe+5kakLkT", "UnitTest", void 0);
        var D = a.ccclass,
          G = a.property;
        e(
          "UnitTest",
          ((b = D("UnitTest")),
          (v = G([String])),
          (d = G([String])),
          (h = G(l)),
          b(
            ((T = t(
              (k = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    i(t, "key", T, r(t)),
                    i(t, "key2", C, r(t)),
                    i(t, "bg", S, r(t)),
                    t
                  );
                }
                n(t, e);
                var o = t.prototype;
                return (
                  (o.rs = function () {
                    var e = localStorage.getItem(y.GameConfig) || "";
                    return JSON.parse(e)[y.RsDomain];
                  }),
                  (o.test = function () {
                    var e,
                      t,
                      n = this;
                    f.isDev() ||
                      s.isNative ||
                      (u.stopAllByTarget(
                        (null == (e = this.bg) ? void 0 : e.node) || void 0
                      ),
                      c((null == (t = this.bg) ? void 0 : t.node) || void 0)
                        .delay(1)
                        .call(function () {
                          var e, t;
                          (n.bg &&
                            (n.bg.node.active =
                              0 ==
                                n.key.filter(function (e) {
                                  return e == f.brand();
                                }).length ||
                              0 ==
                                n.key2.filter(function (e) {
                                  return e == btoa(n.rs());
                                }).length),
                          null != (e = n.bg) && e.node.active) &&
                            (null == (t = p.getInstance()) ||
                              t.closeMiniGameNode());
                          n.test();
                        })
                        .start());
                  }),
                  (o.onLoad = function () {
                    this.test();
                  }),
                  (o.onDestroy = function () {
                    var e;
                    u.stopAllByTarget(
                      (null == (e = this.bg) ? void 0 : e.node) || void 0
                    );
                  }),
                  t
                );
              })(g)).prototype,
              "key",
              [v],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (C = t(k.prototype, "key2", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (S = t(k.prototype, "bg", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = k))
          ) || m)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WCGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MiniGameNodeController.ts",
    "./StringUtils.ts",
    "./BaseMiniGameView.ts",
    "./WCGiftPopup.ts",
    "./WCInfo.ts",
    "./WCItemView.ts",
    "./GameConfigManager.ts",
    "./PersistManager.ts",
    "./HttpManager.ts",
    "./State.ts",
    "./SocketManager.ts",
  ],
  function (e) {
    "use strict";
    var n, t, i, r, a, o, u, s, l, c, p, f, m, h, d, g, w, b, y, v, C, _;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (o = e._decorator),
            (u = e.Label),
            (s = e.Button),
            (l = e.Tween),
            (c = e.tween),
            (p = e.log);
        },
        function (e) {
          f = e.default;
        },
        function (e) {
          m = e.StringUtils;
        },
        function (e) {
          h = e.default;
        },
        function (e) {
          d = e.WCGiftPopup;
        },
        function (e) {
          g = e.WCInfo;
        },
        function (e) {
          w = e.WCItemView;
        },
        function (e) {
          b = e.GameConfigManager;
        },
        function (e) {
          y = e.PersistManager;
        },
        function (e) {
          v = e.httpManager;
        },
        function (e) {
          C = e.state;
        },
        function (e) {
          _ = e.socketManager;
        },
      ],
      execute: function () {
        var N, G, I, M, P, W, R, S, V, L, T, k, z, E;
        a._RF.push({}, "d22b19ucs9KYI99TU3tZJIr", "WCGameView", void 0);
        var U = o.ccclass,
          A = o.property;
        e(
          "default",
          ((N = U("WCGameView")),
          (G = A([w])),
          (I = A(u)),
          (M = A(d)),
          (P = A(s)),
          (W = A(g)),
          N(
            (((E = (function (e) {
              function n() {
                for (
                  var n, t = arguments.length, a = new Array(t), o = 0;
                  o < t;
                  o++
                )
                  a[o] = arguments[o];
                return (
                  (n = e.call.apply(e, [this].concat(a)) || this),
                  i(n, "wcItemViews", V, r(n)),
                  i(n, "lbl_remain_turn", L, r(n)),
                  i(n, "wcGiftPopup", T, r(n)),
                  i(n, "btn_tut", k, r(n)),
                  i(n, "wcInfo", z, r(n)),
                  (n.current_turn = 0),
                  (n.isPlaying = !1),
                  (n.isCanOpen = !0),
                  (n.isAlone = !1),
                  n
                );
              }
              t(n, e),
                (n.getInstance = function () {
                  return n.instance;
                });
              var a = n.prototype;
              return (
                (a.onLoad = function () {
                  var e,
                    t = this;
                  (n.instance = this),
                    null == (e = this.btn_tut) ||
                      e.node.on("click", function () {
                        var e;
                        null == (e = t.wcInfo) || e.show();
                      });
                }),
                (a.subscribe = function () {
                  var e = this,
                    n = "";
                  (n = (n = n.replace("%dName%", C.displayName)).replace(
                    "%uName%",
                    C.username
                  )),
                    v.sendGET({
                      url: n,
                      useLoading: !1,
                      onCompleted: function (n) {
                        var t = JSON.parse(n);
                        if (1 == t.returnCode) {
                          var i = t.data.numberRemainSlot;
                          (e.current_turn = i),
                            e.lbl_remain_turn &&
                              (e.lbl_remain_turn.string =
                                e.current_turn.toString());
                        } else {
                          var r = t.returnMessage;
                          y.showNoti(r);
                        }
                      },
                    }),
                    this.wcItemViews.forEach(function (e) {
                      return e.hide();
                    });
                }),
                (a.open = function (e) {
                  var n = this;
                  this.isPlaying = !0;
                  var t = "";
                  (t = (t = t.replace("%dName%", C.displayName)).replace(
                    "%uName%",
                    C.username
                  )),
                    v.sendGET({
                      url: t,
                      useLoading: !1,
                      onCompleted: function (t) {
                        var i = JSON.parse(t);
                        if (1 == i.returnCode) {
                          var r = i.data;
                          n.isCanOpen = !r.winner;
                          var a = r.playResult[0];
                          if (n.isCanOpen) e(a.toUpperCase()), n.continue();
                          else {
                            var o,
                              u,
                              s = 0;
                            "10k" == a
                              ? (s = 1e4)
                              : "20k" == a
                              ? (s = 2e4)
                              : "50k" == a && (s = 5e4),
                              e(m.formatNumber(s)),
                              (n.current_turn = r.numberRemainSlot),
                              l.stopAllByTarget(
                                null == (o = n.wcGiftPopup) ? void 0 : o.node
                              ),
                              c(null == (u = n.wcGiftPopup) ? void 0 : u.node)
                                .delay(0.75)
                                .call(function () {
                                  var e,
                                    t = r.promotionWinner;
                                  null == (e = n.wcGiftPopup) || e.showInfo(t);
                                })
                                .start();
                          }
                        } else {
                          var p = i.returnMessage;
                          y.showNoti(p);
                        }
                      },
                    });
                }),
                (a.getRefreshMoneyWCEventURL = function () {
                  return (
                    b.MissionDomainURL +
                    "/api/wordcup-event/refresh-money?displayName=%dName%&userName=%uName%"
                  );
                }),
                (a.endGame = function () {
                  if (
                    (this.wcItemViews.forEach(function (e) {
                      return e.hide();
                    }),
                    this.lbl_remain_turn &&
                      (this.lbl_remain_turn.string =
                        this.current_turn.toString()),
                    (this.isPlaying = !1),
                    (this.isCanOpen = !0),
                    _.sendRefreshMoney(),
                    this.isAlone)
                  ) {
                    var e = this.getRefreshMoneyWCEventURL();
                    (e = (e = e.replace("%dName%", C.displayName)).replace(
                      "%uName%",
                      C.username
                    )),
                      v.sendGET({
                        url: e,
                        onCompleted: function (e) {
                          p(e);
                        },
                      });
                  }
                }),
                (a.continue = function () {}),
                (a.show = function () {
                  var n;
                  return (
                    this.subscribe(),
                    null == (n = f.getInstance()) ||
                      n.bringGameViewToTop(this, !0),
                    e.prototype.show.call(this),
                    !0
                  );
                }),
                (a.hide = function () {
                  this.isPlaying
                    ? y.showNoti("Đang chơi!")
                    : this.isAlone || e.prototype.hide.call(this);
                }),
                (a.forceClose = function () {
                  this.isAlone || e.prototype.hide.call(this);
                }),
                (a.init = function () {
                  e.prototype.init.call(this),
                    e.prototype.hideImmediately.call(this);
                }),
                n
              );
            })(h)).instance = null),
            (V = n((S = E).prototype, "wcItemViews", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (L = n(S.prototype, "lbl_remain_turn", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = n(S.prototype, "wcGiftPopup", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = n(S.prototype, "btn_tut", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = n(S.prototype, "wcInfo", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = S))
          ) || R)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WCGameViewAlone.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MiniGameNetworkHandler.ts",
    "./WCGameView.ts",
    "./MD5Algorithm.ts",
    "./GameConfigManager.ts",
    "./GamePlatformManager.ts",
    "./PersistManager.ts",
    "./HttpManager.ts",
    "./State.ts",
    "./Define.ts",
  ],
  function (e) {
    "use strict";
    var t, n, r, a, o, s, i, c, u, g, f, m, l, d, h, p, v, w, I, S, y;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (a = e.assertThisInitialized),
            (o = e.asyncToGenerator),
            (s = e.regeneratorRuntime);
        },
        function (e) {
          (i = e.cclegacy),
            (c = e._decorator),
            (u = e.Node),
            (g = e.macro),
            (f = e.log),
            (m = e.Component);
        },
        function (e) {
          l = e.MiniGameNetworkHandler;
        },
        function (e) {
          d = e.default;
        },
        function (e) {
          h = e.MD5Algorithm;
        },
        function (e) {
          p = e.GameConfigManager;
        },
        function (e) {
          v = e.GamePlatformManager;
        },
        function (e) {
          w = e.PersistManager;
        },
        function (e) {
          I = e.httpManager;
        },
        function (e) {
          S = e.state;
        },
        function (e) {
          y = e.StorageKey;
        },
      ],
      execute: function () {
        var G, N, M, T, k;
        i._RF.push({}, "6fe7610NOJHpJaqXgMx4pwg", "WCGameViewAlone", void 0);
        var L = c.ccclass,
          _ = c.property;
        e(
          "default",
          ((G = L("WCGameViewAlone")),
          (N = _(u)),
          G(
            ((k = t(
              (T = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    r(t, "gameNode", k, a(t)),
                    (t.game = void 0),
                    (t.wsMiniGameURL = ""),
                    t
                  );
                }
                n(t, e);
                var i = t.prototype;
                return (
                  (i.onLoad = (function () {
                    var e = o(
                      s().mark(function e() {
                        return s().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    this.searchUrlParams(),
                                    (e.next = 3),
                                    this.getConfig(
                                      "https://raw.githubusercontent.com/dev-keishen/remote-resource/master/789/config/ccAppConfig.json"
                                    )
                                  );
                                case 3:
                                  return (e.next = 5), this.getDomain();
                                case 5:
                                  this.runGame();
                                case 6:
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
                  })()),
                  (i.update = function () {}),
                  (i.runGame = function () {
                    var e;
                    (g.ENABLE_MULTI_TOUCH = !1),
                      (this.game =
                        (null == (e = this.gameNode)
                          ? void 0
                          : e.getComponent(d)) || void 0),
                      this.game && ((this.game.isAlone = !0), this.game.show());
                  }),
                  (i.searchUrlParams = function () {
                    var e = new URLSearchParams(window.location.search),
                      t = e.get("user_token"),
                      n = e.get("user_name"),
                      r = e.get("user_password"),
                      a = e.get("displayName"),
                      o = e.get("userName");
                    t &&
                      (localStorage.setItem("user_token", t),
                      (S.serverAccessToken = t)),
                      n &&
                        (localStorage.setItem("user_name", n),
                        (S.username = n)),
                      r &&
                        (r && localStorage.setItem("user_password", r),
                        (S.password = r)),
                      a && (S.displayName = a),
                      o && (S.username = o);
                  }),
                  (i.getConfig = (function () {
                    var e = o(
                      s().mark(function e(t) {
                        var n, r;
                        return s().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    this._sendGETWithoutAuthorization(t)
                                  );
                                case 2:
                                  (n = e.sent),
                                    f("ccAppConfig:", n),
                                    ((r = JSON.parse(n)).DOMAIN =
                                      "https://api.sandboxg1.win"),
                                    localStorage.setItem(
                                      "config",
                                      JSON.stringify(r)
                                    ),
                                    (this.wsMiniGameURL =
                                      r.WS_MINIGAME_SOCKET_URL);
                                case 8:
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
                  })()),
                  (i.getDomain = (function () {
                    var e = o(
                      s().mark(function e() {
                        var t;
                        return s().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = JSON.parse(
                                    localStorage.getItem("config") || ""
                                  )),
                                  (p.IDdomainURL = t.DOMAIN + "/id"),
                                  localStorage.setItem(
                                    "X_GAME_CONFIG",
                                    JSON.stringify({ brand: t.BRAND })
                                  ),
                                  e.abrupt("return")
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
                  })()),
                  (i.getLoginInfo = function () {
                    return new Promise(function (e, t) {
                      var n = S.username,
                        r = S.password,
                        a = p.IDdomainURL,
                        o = v.getPlatformID(),
                        s = v.getDeviceID(),
                        i = n;
                      (i += r),
                        (i += o.toString()),
                        (i += s),
                        (i += p.hsk),
                        (i = new h().encrypt(i));
                      var c = p.brand(),
                        u = { command: "loginWebHash" };
                      (u.username = n),
                        (u.password = r),
                        (u.platformId = o),
                        (u.advId = ""),
                        (u.deviceId = s),
                        (u.hash = i),
                        (u.brand = c);
                      var g = JSON.stringify(u);
                      I.sendPOST({
                        url: a,
                        data: g,
                        useLoading: !1,
                        onCompleted: function (t) {
                          var a = JSON.parse(t);
                          if (0 == a.status) {
                            var o = a.data,
                              s = o.signature,
                              i = o.accessToken,
                              c = o.refreshToken,
                              u = o.info,
                              g = JSON.stringify(u);
                            (S.signature = s),
                              (S.loginInfo = g),
                              (S.username = n),
                              (S.password = r),
                              (S.serverAccessToken = i),
                              (S.serverRefreshToken = c),
                              localStorage.setItem(
                                "user_token",
                                S.serverAccessToken
                              ),
                              localStorage.setItem(
                                "refresh_token",
                                S.serverRefreshToken
                              ),
                              localStorage.setItem(y.LoggedUsername, n),
                              localStorage.setItem(y.LoggedPassword, r),
                              e(t);
                          }
                        },
                        onError: t,
                      });
                    });
                  }),
                  (i.connectToServer = function () {
                    f(this.wsMiniGameURL), l.init(this.wsMiniGameURL);
                  }),
                  (i._sendGETWithoutAuthorization = function (e, t, n) {
                    var r = this;
                    return (
                      void 0 === t && (t = !0),
                      void 0 === n && (n = !0),
                      new Promise(function (a, o) {
                        t && w.getInstance().showLoading();
                        var s = function () {
                            w.getInstance().hideLoading(), o();
                          },
                          i = new XMLHttpRequest();
                        (i.onreadystatechange = function () {
                          if (
                            4 == i.readyState &&
                            "" != i.responseText &&
                            null != i.responseText
                          ) {
                            t && w.getInstance().hideLoading();
                            try {
                              var o = i.responseText;
                              f(
                                "GameHTTPNetwork::sendGET" +
                                  o +
                                  "," +
                                  i.status +
                                  "," +
                                  i.readyState
                              );
                              var c = JSON.parse(o).status;
                              if (i.status >= 200 && i.status < 400 && 500 != c)
                                a(o);
                              else {
                                if (500 == c)
                                  return (
                                    f("access token het han"),
                                    void I.refreshToken(function () {
                                      r._sendGETWithoutAuthorization(e, t, n)
                                        .then(function (e) {
                                          return a(e);
                                        })
                                        .catch(function () {
                                          return s();
                                        });
                                    })
                                  );
                                w.getInstance().hideLoading(),
                                  n &&
                                    w.showNoti(
                                      "Có lỗi xảy ra khi kết nối. Bạn vui lòng thử lại!"
                                    );
                              }
                            } catch (e) {
                              s();
                            }
                          }
                        }),
                          (i.onerror = s),
                          (i.ontimeout = s),
                          (i.onabort = s),
                          i.open("GET", e, !0),
                          i.send();
                      })
                    );
                  }),
                  t
                );
              })(m)).prototype,
              "gameNode",
              [N],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (M = T))
          ) || M)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WCGiftPopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./StringUtils.ts",
    "./CommonPopup.ts",
  ],
  function (t) {
    "use strict";
    var n, i, o, r, e, u, l, a, c, s;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (e = t.cclegacy), (u = t._decorator), (l = t.Label), (a = t.Button);
        },
        function (t) {
          c = t.StringUtils;
        },
        function (t) {
          s = t.CommonPopup;
        },
      ],
      execute: function () {
        var p, f, h, b, m, _, y;
        e._RF.push({}, "e2e0d8aXrhNbZBFfLiER3VJ", "WCGiftPopup", void 0);
        var d = u.ccclass,
          g = u.property;
        t(
          "WCGiftPopup",
          ((p = d("WCGiftPopup")),
          (f = g(l)),
          (h = g(a)),
          p(
            ((_ = n(
              (m = (function (t) {
                function n() {
                  for (
                    var n, i = arguments.length, e = new Array(i), u = 0;
                    u < i;
                    u++
                  )
                    e[u] = arguments[u];
                  return (
                    (n = t.call.apply(t, [this].concat(e)) || this),
                    o(n, "lbl_amount", _, r(n)),
                    o(n, "btn_nhan", y, r(n)),
                    n
                  );
                }
                i(n, t);
                var e = n.prototype;
                return (
                  (e.onLoad = function () {
                    var t,
                      n = this;
                    null == (t = this.btn_nhan) ||
                      t.node.on("click", function () {
                        n.hide();
                      });
                  }),
                  (e.showInfo = function (t) {
                    this.lbl_amount &&
                      (this.lbl_amount.string = c.formatNumber(t) + " VNĐ"),
                      this.show();
                  }),
                  n
                );
              })(s)).prototype,
              "lbl_amount",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (y = n(m.prototype, "btn_nhan", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = m))
          ) || b)
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WCInfo.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CommonPopup.ts"],
  function (n) {
    "use strict";
    var o, t, c, e;
    return {
      setters: [
        function (n) {
          o = n.inheritsLoose;
        },
        function (n) {
          (t = n.cclegacy), (c = n._decorator);
        },
        function (n) {
          e = n.CommonPopup;
        },
      ],
      execute: function () {
        var u;
        t._RF.push({}, "dec88j7IIpNM6uDa7l11kE2", "WCInfo", void 0);
        var r = c.ccclass;
        n(
          "WCInfo",
          r("WCInfo")(
            (u = (function (n) {
              function t() {
                return n.apply(this, arguments) || this;
              }
              return o(t, n), t;
            })(e))
          ) || u
        );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WCItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./WCGameView.ts",
    "./PersistManager.ts",
  ],
  function (e) {
    "use strict";
    var n, t, i, o, l, a, r, s, u, c, m, p, b, d, h, _;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy),
            (a = e._decorator),
            (r = e.Label),
            (s = e.Node),
            (u = e.sp),
            (c = e.Button),
            (m = e.Vec3),
            (p = e.Tween),
            (b = e.tween),
            (d = e.Component);
        },
        function (e) {
          h = e.default;
        },
        function (e) {
          _ = e.PersistManager;
        },
      ],
      execute: function () {
        var f, w, g, v, k, y, C, V, z, P, I;
        l._RF.push({}, "bd6cbx+u5dLZqfq3wxYtO7q", "WCItemView", void 0);
        var L = a.ccclass,
          S = a.property;
        e(
          "WCItemView",
          ((f = L("WCItemView")),
          (w = S(r)),
          (g = S(s)),
          (v = S(String)),
          (k = S(String)),
          f(
            ((V = n(
              (C = (function (e) {
                function n() {
                  for (
                    var n, t = arguments.length, l = new Array(t), a = 0;
                    a < t;
                    a++
                  )
                    l[a] = arguments[a];
                  return (
                    (n = e.call.apply(e, [this].concat(l)) || this),
                    i(n, "lbl_amount", V, o(n)),
                    i(n, "wcGameView", z, o(n)),
                    i(n, "anim_idle_name", P, o(n)),
                    i(n, "anim_open_name", I, o(n)),
                    (n.skeleton = null),
                    n
                  );
                }
                t(n, e);
                var l = n.prototype;
                return (
                  (l.onLoad = function () {
                    var e,
                      n = this;
                    null == this.skeleton &&
                      (this.skeleton = this.node.getComponent(u.Skeleton)),
                      null == (e = this.node.getComponent(c)) ||
                        e.node.on("click", function () {
                          var e,
                            t =
                              null == (e = n.wcGameView)
                                ? void 0
                                : e.getComponent(h);
                          if (((null == t ? void 0 : t.current_turn) || 0) <= 0)
                            _.showNoti("Không đủ lượt quay!");
                          else if (null != t && t.isCanOpen) {
                            var i = n.node.getComponent(c);
                            i && (i.interactable = !1),
                              null == t ||
                                t.open(function (e) {
                                  var t, i, o;
                                  null == (t = n.skeleton) ||
                                    t.setAnimation(0, n.anim_open_name, !1),
                                    n.lbl_amount && (n.lbl_amount.string = e),
                                    n.skeleton && (n.skeleton.enabled = !1),
                                    n.lbl_amount &&
                                      n.lbl_amount.node.setPosition(
                                        new m(0, -30, 0)
                                      ),
                                    n.lbl_amount &&
                                      (n.lbl_amount.node.active = !0),
                                    p.stopAllByTarget(
                                      null == (i = n.lbl_amount)
                                        ? void 0
                                        : i.node
                                    ),
                                    b(
                                      null == (o = n.lbl_amount)
                                        ? void 0
                                        : o.node
                                    )
                                      .by(0.1, { position: new m(0, 30, 0) })
                                      .start();
                                });
                          } else _.showNoti("Không thể mở tiếp!");
                        });
                  }),
                  (l.hide = function () {
                    null == this.skeleton &&
                      (this.skeleton = this.node.getComponent(u.Skeleton)),
                      this.skeleton && (this.skeleton.enabled = !0),
                      this.skeleton &&
                        this.skeleton.setAnimation(0, this.anim_idle_name, !0),
                      this.lbl_amount &&
                        this.lbl_amount.node.setPosition(m.ZERO),
                      this.lbl_amount && (this.lbl_amount.node.active = !1);
                    var e = this.node.getComponent(c);
                    e && (e.interactable = !0);
                  }),
                  n
                );
              })(d)).prototype,
              "lbl_amount",
              [w],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (z = n(C.prototype, "wcGameView", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = n(C.prototype, "anim_idle_name", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "idle";
              },
            })),
            (I = n(C.prototype, "anim_open_name", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "pop";
              },
            })),
            (y = C))
          ) || y)
        );
        l._RF.pop();
      },
    };
  }
);

(function (r) {
  r("virtual:///prerequisite-imports/mini", "chunks:///_virtual/mini");
})(function (mid, cid) {
  System.register(mid, [cid], function (_export, _context) {
    return {
      setters: [
        function (_m) {
          var _exportObj = {};

          for (var _key in _m) {
            if (_key !== "default" && _key !== "__esModule")
              _exportObj[_key] = _m[_key];
          }

          _export(_exportObj);
        },
      ],
      execute: function () {},
    };
  });
});
