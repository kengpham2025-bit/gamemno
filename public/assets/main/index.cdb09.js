System.register(
  "chunks:///_virtual/AssestAddRef.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, n, r, s, o, i;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (n = e.cclegacy),
            (r = e._decorator),
            (s = e.Sprite),
            (o = e.ParticleSystem2D),
            (i = e.Component);
        },
      ],
      execute: function () {
        var c;
        n._RF.push({}, "58053gv5a1NE5RZEVpNc08r", "AssestAddRef", void 0);
        var u = r.ccclass;
        r.property,
          e(
            "AssestAddRef",
            u("AssestAddRef")(
              (c = (function (e) {
                function n() {
                  return e.apply(this, arguments) || this;
                }
                return (
                  t(n, e),
                  (n.prototype.start = function () {
                    this.node.getComponentsInChildren(s).forEach(function (e) {
                      var t;
                      return null == (t = e.spriteFrame) ? void 0 : t.addRef();
                    }),
                      this.node
                        .getComponentsInChildren(o)
                        .forEach(function (e) {
                          var t;
                          return null == (t = e.file) ? void 0 : t.addRef();
                        }),
                      this.node.children.forEach(function (e) {
                        return (e.active = !1);
                      });
                  }),
                  n
                );
              })(i))
            ) || c
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CheckMediaCmp.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MainBundleUpdateOnNative.ts",
    "./TrackingManager.ts",
    "./TrackingDefine.ts",
  ],
  function (e) {
    "use strict";
    var n,
      t,
      i,
      o,
      a,
      r,
      l,
      s,
      u,
      c,
      g,
      d,
      p,
      f,
      h,
      _,
      b,
      m,
      v,
      w,
      C,
      y,
      O,
      S,
      k,
      T,
      D,
      N,
      L;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized),
            (a = e.asyncToGenerator),
            (r = e.regeneratorRuntime);
        },
        function (e) {
          (l = e.cclegacy),
            (s = e._decorator),
            (u = e.Node),
            (c = e.AudioSource),
            (g = e.sp),
            (d = e.Label),
            (p = e.ProgressBar),
            (f = e.UIOpacity),
            (h = e.Button),
            (_ = e.systemEvent),
            (b = e.UITransform),
            (m = e.assetManager),
            (v = e.native),
            (w = e.tween),
            (C = e.sys),
            (y = e.Vec3),
            (O = e.view),
            (S = e.Size),
            (k = e.instantiate),
            (T = e.Component);
        },
        function (e) {
          D = e.MainBundleUpdateOnNative;
        },
        function (e) {
          N = e.tracking;
        },
        function (e) {
          L = e.TRACKING_ACTION_TYPE;
        },
      ],
      execute: function () {
        var A,
          I,
          z,
          E,
          G,
          R,
          P,
          M,
          U,
          B,
          F,
          x,
          W,
          Y,
          J,
          K,
          V,
          j,
          X,
          q,
          H,
          Z,
          Q,
          $,
          ee,
          ne,
          te,
          ie,
          oe,
          ae,
          re,
          le,
          se,
          ue,
          ce,
          ge,
          de,
          pe,
          fe;
        l._RF.push({}, "df2d2A5L45E6pa05MaJaYEt", "CheckMediaCmp", void 0);
        var he = s.ccclass,
          _e = s.property;
        e(
          "CheckMediaCmp",
          ((A = he("CheckMediaCmp")),
          (I = _e([u])),
          (z = _e([c])),
          (E = _e(u)),
          (G = _e(u)),
          (R = _e(g.Skeleton)),
          (P = _e(g.Skeleton)),
          (M = _e(u)),
          (U = _e(d)),
          (B = _e(p)),
          (F = _e(Boolean)),
          (x = _e(u)),
          (W = _e(D)),
          (Y = _e(u)),
          (J = _e(d)),
          (K = _e(d)),
          (V = _e(d)),
          (j = _e(f)),
          (X = _e(h)),
          A(
            ((Z = n(
              (H = (function (e) {
                function n() {
                  for (
                    var n, t = arguments.length, a = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (n = e.call.apply(e, [this].concat(a)) || this),
                    i(n, "game_nodes", Z, o(n)),
                    i(n, "game_audios", Q, o(n)),
                    i(n, "loading_view", $, o(n)),
                    i(n, "background_node", ee, o(n)),
                    i(n, "spine_loading", ne, o(n)),
                    i(n, "spine_light", te, o(n)),
                    i(n, "game_node", ie, o(n)),
                    i(n, "lbl_loading_progress", oe, o(n)),
                    i(n, "progress_bar", ae, o(n)),
                    i(n, "byPassConditions", re, o(n)),
                    i(n, "bottom_node", le, o(n)),
                    i(n, "mainBundleUpdate", se, o(n)),
                    i(n, "bgCover", ue, o(n)),
                    i(n, "lbl_notice_0", ce, o(n)),
                    i(n, "lbl_notice_1", ge, o(n)),
                    i(n, "lbl_notice_2", de, o(n)),
                    i(n, "lbl_notice_opacity", pe, o(n)),
                    i(n, "btn_link", fe, o(n)),
                    (n.config_url_1 = "./config/xappv363.json"),
                    (n.config_url_2 = "https://pastebin.com/raw/Gmavu9bB"),
                    (n.originWidth = 0),
                    (n._isLogoOk = !1),
                    (n._isLightOk = !1),
                    (n.shouldDismissLight = !1),
                    (n.isGettingConfig = !1),
                    n
                  );
                }
                t(n, e);
                var l = n.prototype;
                return (
                  (l.onLoad = function () {
                    var e,
                      n = this;
                    N.newSession(),
                      _.on("GAME_INITED", function () {
                        null != n.loading_view && (n.loading_view.active = !1);
                      });
                    var t =
                      null == (e = this.background_node)
                        ? void 0
                        : e.getComponent(b);
                    this.originWidth =
                      (null == t ? void 0 : t.contentSize.width) || 0;
                    var i,
                      o = localStorage.getItem("amClearCache");
                    (null != o && null != o) ||
                      (null == (i = m.cacheManager) || i.clearCache(),
                      localStorage.setItem("amClearCache", "OK"));
                    this.spine_light && (this.spine_light.node.active = !1);
                  }),
                  (l.start = function () {
                    var e,
                      n,
                      t,
                      i,
                      o = this,
                      a = localStorage.getItem("X_GAME_CONFIG");
                    ("string" == typeof a && "" !== a) || (a = "{}");
                    var r = JSON.parse(a).clearBundleStorageFlag,
                      l = localStorage.getItem(r);
                    null == l || null == l
                      ? (v.fileUtils.removeDirectory(
                          v.fileUtils.getWritablePath() + "/bundles"
                        ),
                        localStorage.setItem(r, "OK"),
                        w(this.node)
                          .delay(3)
                          .call(function () {
                            o.check();
                          })
                          .start())
                      : this.check(),
                      w(this.node)
                        .delay(0.5)
                        .call(function () {
                          var e = 1;
                          if (
                            (window.gameVersion &&
                              (e = parseFloat(window.gameVersion)),
                            e >= 5)
                          ) {
                            if (C.os == C.OS.IOS) {
                              var n =
                                window.nativeReflectFunction +
                                ":andParam0:andParam1:";
                              v.reflection.callStaticMethod(
                                window.nativeReflectClass,
                                n,
                                3,
                                "",
                                ""
                              );
                            } else if (C.os == C.OS.ANDROID) {
                              v.reflection.callStaticMethod(
                                window.nativeReflectClass,
                                window.nativeReflectFunction,
                                "(ILjava/lang/String;Ljava/lang/String;)Ljava/lang/String;",
                                3,
                                "",
                                ""
                              );
                            }
                          } else C.os == C.OS.IOS ? v.reflection.callStaticMethod("AppDelegate", "OnGameStart") : C.os == C.OS.ANDROID && v.reflection.callStaticMethod("com/cocos/game/AppActivity", "OnGameStart", "()V");
                        })
                        .delay(0.25)
                        .call(function () {
                          o.bgCover && (o.bgCover.active = !1);
                        })
                        .start(),
                      null == (e = this.spine_loading) ||
                        e.setAnimation(0, "loading", !1),
                      null == (n = this.spine_loading) ||
                        n.addAnimation(0, "loop", !0),
                      null == (t = this.spine_loading) ||
                        t.setCompleteListener(function (e) {
                          "loading" == (e.animation ? e.animation.name : "") &&
                            (o._isLogoOk = !0);
                        }),
                      null == (i = this.spine_light) ||
                        i.setCompleteListener(function (e) {
                          var n = e.animation ? e.animation.name : "";
                          if ("disappear" == n)
                            o.spine_light && (o.spine_light.node.active = !1),
                              (o._isLightOk = !0);
                          else if ("loop" === n && o.shouldDismissLight) {
                            var t;
                            null == (t = o.spine_light) ||
                              t.setAnimation(0, "disappear", !1);
                          }
                        });
                  }),
                  (l.showLoading = function (e) {
                    var n, t;
                    null == (n = this.game_nodes) ||
                      n.forEach(function (e) {
                        e.active = !1;
                      }),
                      null == (t = this.game_audios) ||
                        t.forEach(function (e) {
                          (e.enabled = !1), (e.volume = 0);
                        }),
                      e();
                  }),
                  (l.checkToDownload = function () {
                    var e = this;
                    this.isGettingConfig
                      ? this.loadGame()
                      : setTimeout(function () {
                          e.checkToDownload();
                        }, 200);
                  }),
                  (l.update = function (e) {
                    var n, t, i, o, a, r, l, s, u, c, g;
                    this.autoFit();
                    var d = new y(
                      (null == (n = this.bottom_node) ? void 0 : n.position) ||
                        y.ZERO
                    );
                    (d.y = -O.getCanvasSize().height / O.getScaleY() / 2),
                      null == (t = this.bottom_node) || t.setPosition(d);
                    var p =
                      (null == (i = this.lbl_notice_1) ||
                      null == (o = i.node.getComponent(b))
                        ? void 0
                        : o.contentSize) || S.ZERO;
                    null == (a = this.btn_link) ||
                      null == (r = a.node.getComponent(b)) ||
                      r.setContentSize(p.width + 10, p.height + 10);
                    var f =
                      (null == (l = this.btn_link) ||
                      null == (s = l.node.parent) ||
                      null == (u = s.getComponent(b))
                        ? void 0
                        : u.convertToNodeSpaceAR(
                            (null == (c = this.lbl_notice_1)
                              ? void 0
                              : c.node.worldPosition) || y.ZERO
                          )) || y.ZERO;
                    null == (g = this.btn_link) ||
                      g.node.setPosition(new y(f.x, f.y - 10, f.z));
                  }),
                  (l.autoFit = function () {
                    var e,
                      n,
                      t =
                        null == (e = this.background_node)
                          ? void 0
                          : e.getComponent(b),
                      i = O.getCanvasSize().height / O.getScaleY() + 20,
                      o =
                        i > O.getDesignResolutionSize().height
                          ? i / O.getDesignResolutionSize().height
                          : O.getDesignResolutionSize().height / i;
                    this.originWidth <= 0 &&
                      (this.originWidth =
                        (null == t ? void 0 : t.contentSize.width) || 0),
                      null == t || t.setContentSize(this.originWidth * o, i);
                    var a =
                      null == (n = this.bgCover) ? void 0 : n.getComponent(b);
                    null == a || a.setContentSize(this.originWidth * o, i);
                  }),
                  (l.check = function () {
                    var e = this;
                    if (C.isBrowser)
                      this.getConfig(function (n) {
                        N.setUrlTracking(),
                          N.sendTracking(L.LOAD_ENTRY_CONFIG_DONE),
                          e.showLoading(function () {});
                      });
                    else {
                      if (this.byPassConditions)
                        return (
                          (this.isGettingConfig = !0),
                          N.setUrlTracking(),
                          N.sendTracking(L.LOAD_ENTRY_CONFIG_DONE),
                          void this.showLoading(function () {
                            var n,
                              t = localStorage.getItem("X_GAME_CONFIG");
                            ("string" == typeof t && "" !== t) || (t = "{}");
                            var i = JSON.parse(t).lp_domain,
                              o =
                                i
                                  .replace("https", "")
                                  .split("/")
                                  .sort(function (e, n) {
                                    return n.length - e.length;
                                  })[0] || "";
                            e.lbl_notice_0 &&
                              (e.lbl_notice_0.string =
                                "Quý khách vui lòng truy cập đúng tên miền  "),
                              e.lbl_notice_1 && (e.lbl_notice_1.string = o),
                              e.lbl_notice_2 &&
                                (e.lbl_notice_2.string =
                                  " để chơi game chính hãng"),
                              null == (n = e.btn_link) ||
                                n.node.on(
                                  u.EventType.TOUCH_END,
                                  function () {
                                    console.log("open domain url"),
                                      C.openURL(i);
                                  },
                                  e
                                ),
                              e.checkToDownload();
                          })
                        );
                      var n = localStorage.getItem("KTDC");
                      null != n && null != n
                        ? (this.getConfig(function (e) {
                            N.setUrlTracking(),
                              N.sendTracking(L.LOAD_ENTRY_CONFIG_DONE);
                          }),
                          this.showLoading(function () {
                            e.checkToDownload();
                          }))
                        : this.getConfig(function (n) {
                            N.setUrlTracking(),
                              N.sendTracking(L.LOAD_ENTRY_CONFIG_DONE),
                              localStorage.setItem("KTDC", "OKAY"),
                              e.showLoading(function () {
                                e.loadGame();
                              });
                          });
                    }
                  }),
                  (l.loadGame = function () {
                    var e,
                      n = this;
                    console.log("CheckMediaCmp:loadGame"),
                      N.sendTracking(L.START_DOWNLOAD_NATIVE_BUNDLE, {
                        bundle: "base",
                      }),
                      null == (e = this.mainBundleUpdate) ||
                        e.updateBundle(
                          "base",
                          function (e, t) {
                            t
                              ? n.updateProgress(e, t / 2)
                              : n.updateProgress(e);
                          },
                          function (e, t) {
                            if (e) {
                              N.sendTracking(L.FINISH_DOWNLOAD_NATIVE_BUNDLE, {
                                bundle: "base",
                              });
                              var i =
                                  v.fileUtils.getWritablePath() +
                                  "bundles/base/data/base",
                                o = v.fileUtils.getStringFromFile(
                                  i + "/version.txt"
                                );
                              console.log(i, v.fileUtils.isDirectoryExist(i)),
                                console.log("version:", o),
                                m.loadBundle(
                                  i,
                                  { version: o },
                                  function (e, t) {
                                    var i;
                                    null == e
                                      ? globalThis.loadGame({
                                          onStart: function (e, t) {
                                            n.updateProgress(e, t);
                                          },
                                          onProgress: function (e, n) {},
                                          onCompleted: function (e) {
                                            n.showGame(e);
                                          },
                                          onPreDownloadProgress: function (e) {
                                            n.updateProgress("", e / 2 + 0.5);
                                          },
                                          onPreDownloadComplete: function () {
                                            (n.shouldDismissLight = !0),
                                              n.lbl_loading_progress &&
                                                (n.lbl_loading_progress.string =
                                                  "Đang vào game"),
                                              n.progress_bar &&
                                                (n.progress_bar.progress = 1);
                                          },
                                          waitingAnimation:
                                            ((i = a(
                                              r().mark(function e() {
                                                return r().wrap(function (e) {
                                                  for (;;)
                                                    switch ((e.prev = e.next)) {
                                                      case 0:
                                                        return (
                                                          (e.next = 2),
                                                          n.waitingAnimation()
                                                        );
                                                      case 2:
                                                      case "end":
                                                        return e.stop();
                                                    }
                                                }, e);
                                              })
                                            )),
                                            function () {
                                              return i.apply(this, arguments);
                                            }),
                                        })
                                      : (console.log(
                                          "loadBundle base error ",
                                          e.message
                                        ),
                                        console.log(e.stack));
                                  }
                                );
                            }
                          }
                        );
                  }),
                  (l.updateProgress = function (e, n) {
                    var t = e;
                    if (null != n && null != n && !Number.isNaN(n)) {
                      var i, o, a;
                      if (
                        (this.progress_bar && (this.progress_bar.progress = n),
                        null == (i = this.spine_light) || !i.node.active)
                      )
                        this.spine_light && (this.spine_light.node.active = !0),
                          null == (o = this.spine_light) ||
                            o.setAnimation(0, "Appear", !1),
                          null == (a = this.spine_light) ||
                            a.addAnimation(0, "loop", !0);
                      t = e + " " + (n = Math.floor(100 * n)) + "%";
                    }
                    this.lbl_loading_progress &&
                      (this.lbl_loading_progress.string = t);
                  }),
                  (l.waitingAnimation = (function () {
                    var e = a(
                      r().mark(function e() {
                        var n,
                          t,
                          i = this;
                        return r().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n = (function () {
                                      var e = a(
                                        r().mark(function e(n) {
                                          return r().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  return e.abrupt(
                                                    "return",
                                                    new Promise(function (e) {
                                                      return setTimeout(
                                                        function () {
                                                          return e();
                                                        },
                                                        1e3 * n
                                                      );
                                                    })
                                                  );
                                                case 1:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (n) {
                                        return e.apply(this, arguments);
                                      };
                                    })()),
                                    (t = (function () {
                                      var e = a(
                                        r().mark(function e(t, i) {
                                          return r().wrap(function (e) {
                                            for (;;)
                                              switch ((e.prev = e.next)) {
                                                case 0:
                                                  void 0 === i && (i = 0.1);
                                                case 1:
                                                  if (t()) {
                                                    e.next = 6;
                                                    break;
                                                  }
                                                  return (e.next = 4), n(i);
                                                case 4:
                                                  e.next = 1;
                                                  break;
                                                case 6:
                                                case "end":
                                                  return e.stop();
                                              }
                                          }, e);
                                        })
                                      );
                                      return function (n, t) {
                                        return e.apply(this, arguments);
                                      };
                                    })()),
                                    (this.shouldDismissLight = !0),
                                    (e.next = 5),
                                    t(function () {
                                      return i._isLogoOk && i._isLightOk;
                                    })
                                  );
                                case 5:
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
                  (l.showGame = function (e) {
                    (k(e).parent = this.game_node),
                      N.sendTracking(L.LOAD_LOBBY_DONE);
                  }),
                  (l.instantiateGame = function (e) {
                    k(e).parent = this.game_node;
                  }),
                  (l.sendRequest = function (e, n, t) {
                    void 0 === t && (t = !1);
                    var i;
                    ((i = new XMLHttpRequest()).onreadystatechange =
                      function () {
                        if (4 == i.readyState)
                          if ("" != i.responseText && null != i.responseText) {
                            var e = t ? atob(i.responseText) : i.responseText;
                            i.status >= 200 && i.status < 400 ? n(e) : n(null);
                          } else n(null);
                      }),
                      i.open("GET", e, !0),
                      i.send();
                  }),
                  (l.getConfig = function (e) {
                    var n = this;
                    this.sendRequest(
                      this.config_url_1 + "?_=" + new Date().getTime(),
                      function (t) {
                        if (null != t && null != t) {
                          (n.isGettingConfig = !0),
                            ("string" == typeof t && "" !== t) || (t = "{}");
                          var i = JSON.parse(t);
                          localStorage.setItem(
                            "X_GAME_CONFIG",
                            JSON.stringify(i)
                          ),
                            e(t);
                        } else
                          n.sendRequest(
                            n.config_url_2 + "?_=" + new Date().getTime(),
                            function (t) {
                              if (null != t && null != t) {
                                (n.isGettingConfig = !0),
                                  ("string" == typeof t && "" !== t) ||
                                    (t = "{}");
                                var i = JSON.parse(t);
                                localStorage.setItem(
                                  "X_GAME_CONFIG",
                                  JSON.stringify(i)
                                ),
                                  e(t);
                              }
                            },
                            !0
                          );
                      },
                      !0
                    );
                  }),
                  n
                );
              })(T)).prototype,
              "game_nodes",
              [I],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (Q = n(H.prototype, "game_audios", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            ($ = n(H.prototype, "loading_view", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ee = n(H.prototype, "background_node", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ne = n(H.prototype, "spine_loading", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (te = n(H.prototype, "spine_light", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ie = n(H.prototype, "game_node", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (oe = n(H.prototype, "lbl_loading_progress", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ae = n(H.prototype, "progress_bar", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (re = n(H.prototype, "byPassConditions", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (le = n(H.prototype, "bottom_node", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (se = n(H.prototype, "mainBundleUpdate", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ue = n(H.prototype, "bgCover", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ce = n(H.prototype, "lbl_notice_0", [J], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ge = n(H.prototype, "lbl_notice_1", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (de = n(H.prototype, "lbl_notice_2", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (pe = n(H.prototype, "lbl_notice_opacity", [j], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (fe = n(H.prototype, "btn_link", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = H))
          ) || q)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DebugView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var r, o, t, n, i, a, c, s, u;
    return {
      setters: [
        function (e) {
          (r = e.applyDecoratedDescriptor),
            (o = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (i = e.cclegacy),
            (a = e._decorator),
            (c = e.Label),
            (s = e.sys),
            (u = e.Component);
        },
      ],
      execute: function () {
        var l, p, m, d, f, y;
        i._RF.push({}, "710005kbYNOsYb+Ap2bTss6", "DebugView", void 0);
        var b = a.ccclass,
          g = a.property;
        e(
          "DebugView",
          ((l = b("DebugView")),
          (p = g(c)),
          l(
            (((y = (function (e) {
              function r() {
                for (
                  var r, o = arguments.length, i = new Array(o), a = 0;
                  a < o;
                  a++
                )
                  i[a] = arguments[a];
                return (
                  (r = e.call.apply(e, [this].concat(i)) || this),
                  t(r, "lbl_memory", f, n(r)),
                  r
                );
              }
              o(r, e);
              var i = r.prototype;
              return (
                (i.onLoad = function () {
                  if (s.isBrowser && navigator.userAgent.includes("Chrome")) {
                    for (
                      var e,
                        o = {},
                        t = window.location.search.substring(1),
                        n = /([^&=]+)=([^&]*)/g;
                      (e = n.exec(t));

                    )
                      o[decodeURIComponent(e[1])] = decodeURIComponent(e[2]);
                    r.ENABLE_DEBUG = !!o.debug;
                  }
                  r.ENABLE_DEBUG || (this.node.active = !1);
                }),
                (i.update = function (e) {
                  r.ENABLE_DEBUG && this.updateMemory();
                }),
                (i.updateMemory = function () {
                  if (window.performance && window.performance.memory) {
                    var e = window.performance.memory.totalJSHeapSize / 1048576;
                    this.lbl_memory.string =
                      "Memory: " + Math.round(100 * e) / 100 + "MB";
                  }
                }),
                r
              );
            })(u)).ENABLE_DEBUG = !1),
            (f = r((d = y).prototype, "lbl_memory", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (m = d))
          ) || m)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/encrypt.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var n, e, r, i, o, c, l, u, a;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (c = t._decorator),
            (l = t.Button),
            (u = t.EditBox),
            (a = t.Component);
        },
      ],
      execute: function () {
        var p, s, d, y, b, f, v, g, h;
        o._RF.push({}, "bda9eCSdfdKv6QLEux66OM3", "encrypt", void 0);
        var _ = c.ccclass,
          x = c.property;
        t(
          "Encrypt",
          ((p = _("Encrypt")),
          (s = x(l)),
          (d = x(l)),
          (y = x(u)),
          p(
            ((v = n(
              (f = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, o = new Array(e), c = 0;
                    c < e;
                    c++
                  )
                    o[c] = arguments[c];
                  return (
                    (n = t.call.apply(t, [this].concat(o)) || this),
                    r(n, "btn_encrypt", v, i(n)),
                    r(n, "btn_decrypt", g, i(n)),
                    r(n, "editBox", h, i(n)),
                    n
                  );
                }
                return (
                  e(n, t),
                  (n.prototype.onLoad = function () {
                    var t,
                      n,
                      e = this;
                    null == (t = this.btn_encrypt) ||
                      t.node.on("click", function () {
                        var t,
                          n = btoa(
                            (null == (t = e.editBox) ? void 0 : t.string) || ""
                          );
                        console.log(n);
                      }),
                      null == (n = this.btn_decrypt) ||
                        n.node.on("click", function () {
                          var t,
                            n = atob(
                              (null == (t = e.editBox) ? void 0 : t.string) ||
                                ""
                            );
                          console.log(n);
                        });
                  }),
                  n
                );
              })(a)).prototype,
              "btn_encrypt",
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
            (g = n(f.prototype, "btn_decrypt", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (h = n(f.prototype, "editBox", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = f))
          ) || b)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/InGameConsole.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (o) {
    "use strict";
    var e, r, t, n, i, l, s, a, c, u;
    return {
      setters: [
        function (o) {
          (e = o.applyDecoratedDescriptor),
            (r = o.inheritsLoose),
            (t = o.initializerDefineProperty),
            (n = o.assertThisInitialized);
        },
        function (o) {
          (i = o.cclegacy),
            (l = o._decorator),
            (s = o.RichText),
            (a = o.Node),
            (c = o.director),
            (u = o.Component);
        },
      ],
      execute: function () {
        var g, h, p, f, d, F, v;
        i._RF.push({}, "e7484B0gE9AsbCxSUZvFqaf", "InGameConsole", void 0);
        var b = l.ccclass,
          y = l.property;
        o(
          "default",
          ((g = b("InGameConsole")),
          (h = y(s)),
          (p = y(a)),
          g(
            ((F = e(
              (d = (function (o) {
                function e() {
                  for (
                    var e, r = arguments.length, i = new Array(r), l = 0;
                    l < r;
                    l++
                  )
                    i[l] = arguments[l];
                  return (
                    (e = o.call.apply(o, [this].concat(i)) || this),
                    t(e, "logLabel", F, n(e)),
                    t(e, "scroll", v, n(e)),
                    (e.logs = []),
                    (e.index = 0),
                    e
                  );
                }
                r(e, o);
                var i = e.prototype;
                return (
                  (i.onLoad = function () {
                    c.addPersistRootNode(this.node);
                    var o, e;
                    (o = this.addLog.bind(this)),
                      (e = {
                        log: "#FFFFFF",
                        info: "#00BCD4",
                        warn: "#FFA500",
                        error: "#FF0000",
                        debug: "#AAAAAA",
                        trace: "#EE82EE",
                        assert: "#DC143C",
                      }),
                      [
                        "log",
                        "info",
                        "warn",
                        "error",
                        "debug",
                        "trace",
                        "assert",
                      ].forEach(function (r) {
                        var t = console[r];
                        console[r] = function () {
                          for (
                            var n = e[r] || "#FFFFFF",
                              i = "[" + r.toUpperCase() + "]",
                              l = arguments.length,
                              s = new Array(l),
                              a = 0;
                            a < l;
                            a++
                          )
                            s[a] = arguments[a];
                          var c = s.join(" ");
                          t.apply(console, s),
                            o(
                              "<color=" + n + ">" + i + " " + c + "</color>",
                              r
                            );
                        };
                      });
                  }),
                  (i.addLog = function (o) {
                    var e = "" + o;
                    e !== this.logs[this.logs.length - 1] &&
                      (this.logs.push(e),
                      this.logs.length > 500 && this.logs.shift(),
                      (this.logLabel.string = this.logs.join("\n")));
                  }),
                  (i.showHide = function () {
                    this.scroll.active = !this.scroll.active;
                  }),
                  e
                );
              })(u)).prototype,
              "logLabel",
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
            (v = e(d.prototype, "scroll", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = d))
          ) || f)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/main",
  [
    "./state-machine-history.min.mjs_cjs=&original=.js",
    "./state-machine.min.mjs_cjs=&original=.js",
    "./CheckMediaCmp.ts",
    "./InGameConsole.ts",
    "./MainBundleUpdateOnNative.ts",
    "./AssestAddRef.ts",
    "./MainNativeHelper.ts",
    "./Sprites.ts",
    "./TrackingDefine.ts",
    "./TrackingManager.ts",
    "./DebugView.ts",
    "./MainAssetBundleHelper.ts",
    "./WebDownloadingView.ts",
    "./encrypt.ts",
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
      ],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/MainAssetBundleHelper.ts",
  ["cc"],
  function (e) {
    "use strict";
    var o, n, t, i, f;
    return {
      setters: [
        function (e) {
          (o = e.cclegacy),
            (n = e._decorator),
            (t = e.assetManager),
            (i = e.Prefab),
            (f = e.sys);
        },
      ],
      execute: function () {
        var l, a;
        o._RF.push(
          {},
          "93bcbw73LJANoT0jovVUowa",
          "MainAssetBundleHelper",
          void 0
        );
        var r = n.ccclass;
        n.property,
          e(
            "MainAssetBundleHelper",
            r("MainAssetBundleHelper")(
              (((a = (function () {
                function e() {}
                return (
                  (e.ehfwiehfiohweifhwioefw = function (e, o, n) {
                    "" != o &&
                      t.loadBundle(e, { version: o }, function (e, o) {
                        null == e && n(o);
                      });
                  }),
                  (e.ehfhweoihfiowheifw = function (o, n) {
                    var i = o + "/version.txt?_=" + new Date().getTime();
                    t.loadRemote(i, function (t, i) {
                      var f = "",
                        l = localStorage.getItem(e.LOCAL_VERSION + "_" + o);
                      null != t && null != t
                        ? null == l || null == l || (f = l)
                        : (f = i.text),
                        "" != f && n(l != f, f);
                    });
                  }),
                  (e.loadPrefab = function (o, n, t, f, l) {
                    var a = e.whfiwohfiowefw(o);
                    e.ehfhweoihfiowheifw(a, function (o, r) {
                      t("", 0),
                        setTimeout(function () {
                          console.log("lobby:", a, r),
                            e.ehfwiehfiohweifhwioefw(a, r, function (o) {
                              o.preload(
                                n,
                                i,
                                function (e, o, n) {},
                                function (t) {
                                  o.load(
                                    n,
                                    i,
                                    function (e, o, n) {
                                      f("", e / o);
                                    },
                                    function (n, t) {
                                      null == n
                                        ? (localStorage.setItem(
                                            e.LOCAL_VERSION + "_" + a,
                                            r
                                          ),
                                          localStorage.setItem(
                                            "LOBBY_VERSION",
                                            r
                                          ),
                                          l(o, t))
                                        : console.log(
                                            "AssetBundleHelper::loadPrefab failed:",
                                            a,
                                            JSON.stringify(n)
                                          );
                                    }
                                  );
                                }
                              );
                            });
                        }, 300);
                    });
                  }),
                  (e.loadScene = function (o, n, t, i, f) {
                    var l = e.whfiwohfiowefw(o);
                    e.ehfhweoihfiowheifw(l, function (o, a) {
                      t("", 0),
                        setTimeout(function () {
                          console.log("lobby:", l, a),
                            e.ehfwiehfiohweifhwioefw(l, a, function (o) {
                              o.preloadScene(
                                n,
                                function (e, o, n) {},
                                function (t) {
                                  o.loadScene(
                                    n,
                                    function (e, o, n) {
                                      i("", e / o);
                                    },
                                    function (n, t) {
                                      localStorage.setItem(
                                        e.LOCAL_VERSION + "_" + l,
                                        a
                                      ),
                                        localStorage.setItem(
                                          "LOBBY_VERSION",
                                          a
                                        ),
                                        f(o, t);
                                    }
                                  );
                                }
                              );
                            });
                        }, 300);
                    });
                  }),
                  (e.whfiwohfiowefw = function (e) {
                    var o = localStorage.getItem("X_GAME_CONFIG");
                    ("string" == typeof o && "" !== o) || (o = "{}");
                    var n = JSON.parse(o).rs_domain,
                      t = "bundles/";
                    return (
                      f.isBrowser ||
                        (t =
                          f.Platform.ANDROID === f.platform
                            ? "android/"
                            : "ios/"),
                      (n += t + e)
                    );
                  }),
                  e
                );
              })()).LOCAL_VERSION = "LOCAL_VERSION"),
              (l = a))
            ) || l
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MainBundleUpdateOnNative.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, a, s, n, i, l, o, r;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (a = t.cclegacy),
            (s = t._decorator),
            (n = t.sys),
            (i = t.native),
            (l = t.Tween),
            (o = t.tween),
            (r = t.Component);
        },
      ],
      execute: function () {
        var h;
        a._RF.push(
          {},
          "73832lzCm5PM4BLthqt/Joz",
          "MainBundleUpdateOnNative",
          void 0
        );
        var _ = s.ccclass;
        s.property,
          t(
            "MainBundleUpdateOnNative",
            _("MainBundleUpdateOnNative")(
              (h = (function (t) {
                function a() {
                  for (
                    var e, a = arguments.length, s = new Array(a), n = 0;
                    n < a;
                    n++
                  )
                    s[n] = arguments[n];
                  return (
                    ((e = t.call.apply(t, [this].concat(s)) || this)._updating =
                      !1),
                    (e._manifestStoragePath = ""),
                    (e._bundleStoragePath = ""),
                    (e._am = null),
                    (e._failCount = 0),
                    (e._manifestUrl = ""),
                    (e._lastResourceDomainKey = ""),
                    (e._rsDomain = ""),
                    (e._bundleName = ""),
                    (e._onProgress = void 0),
                    (e._onComplete = void 0),
                    (e._manifestFileName = "project.manifest"),
                    e
                  );
                }
                e(a, t);
                var s = a.prototype;
                return (
                  (s.updateBundle = function (t, e, a) {
                    if (n.isNative)
                      if (this._updating) {
                        var s;
                        null == (s = this._onComplete) ||
                          s.call(this, !1, "Vui lòng đợi game tải xong");
                      } else {
                        (this._onProgress = e.bind(this)),
                          (this._onComplete = a.bind(this)),
                          this._onProgress("Checking"),
                          (this._failCount = 0),
                          (this._updating = !0),
                          (this._bundleName = t),
                          (this._rsDomain =
                            localStorage.getItem("lastResourceDomain") || "");
                        var l =
                            n.platform == n.Platform.IOS ? "ios" : "android",
                          o = this._rsDomain + "/" + l + "/" + this._bundleName;
                        console.log("===== remoteBundlePath\n", o),
                          console.log("===== _rsDomain\n", this._rsDomain),
                          console.log("===== _bundleName\n", this._bundleName),
                          (this._manifestUrl =
                            o + "/" + this._manifestFileName),
                          (this._lastResourceDomainKey =
                            "lastResourceDomain" + this._bundleName),
                          (this._manifestStoragePath =
                            i.fileUtils.getWritablePath() +
                            "/bundles/" +
                            this._bundleName +
                            "/manifest/"),
                          this._manifestStoragePath.replace(/\/\//g, "/"),
                          i.fileUtils.createDirectory(
                            this._manifestStoragePath
                          ),
                          (this._manifestStoragePath += this._manifestFileName),
                          console.log(
                            "===== _manifestStoragePath\n",
                            this._manifestStoragePath
                          ),
                          console.log(
                            "===== _manifestUrl\n",
                            this._manifestUrl
                          ),
                          (this._bundleStoragePath =
                            i.fileUtils.getWritablePath() +
                            "/bundles/" +
                            this._bundleName +
                            "/data/"),
                          this._bundleStoragePath.replace(/\/\//g, "/"),
                          i.fileUtils.createDirectory(this._bundleStoragePath),
                          console.log(
                            "===== _bundleStoragePath\n",
                            this._bundleStoragePath
                          );
                        var r = i.fileUtils.getSearchPaths();
                        r.indexOf(this._bundleStoragePath) < 0 &&
                          r.unshift(this._bundleStoragePath),
                          i.fileUtils.setSearchPaths(r),
                          this.checkLocalManifest();
                      }
                  }),
                  (s.checkLocalManifest = function () {
                    var t = localStorage.getItem(this._lastResourceDomainKey);
                    console.log("lastResourceDomainBundle: ", t),
                      t == this._rsDomain &&
                      i.fileUtils.isFileExist(this._manifestStoragePath)
                        ? this.updateAsset()
                        : this.downloadLocalManifest();
                  }),
                  (s.updateCallback = function (t) {
                    var e,
                      a,
                      s,
                      n,
                      l = !1;
                    switch (t.getEventCode()) {
                      case i.EventAssetsManager.NEW_VERSION_FOUND:
                        break;
                      case i.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                        null == (e = this._am) || e.setEventCallback(null),
                          (this._am = null),
                          this.downloadLocalManifest();
                        break;
                      case i.EventAssetsManager.UPDATE_PROGRESSION:
                        var o,
                          r = t.getPercent();
                        if (Number.isNaN(r));
                        else
                          null == (o = this._onProgress) || o.call(this, "", r);
                        break;
                      case i.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                      case i.EventAssetsManager.ERROR_PARSE_MANIFEST:
                        l = !0;
                        break;
                      case i.EventAssetsManager.ALREADY_UP_TO_DATE:
                        localStorage.setItem(
                          this._lastResourceDomainKey,
                          this._rsDomain
                        ),
                          (this._updating = !1),
                          null == (a = this._onComplete) || a.call(this, !0);
                        break;
                      case i.EventAssetsManager.UPDATE_FINISHED:
                        localStorage.setItem(
                          this._lastResourceDomainKey,
                          this._rsDomain
                        ),
                          (this._updating = !1),
                          null == (s = this._onComplete) || s.call(this, !0);
                        break;
                      case i.EventAssetsManager.UPDATE_FAILED:
                      case i.EventAssetsManager.ERROR_UPDATING:
                      case i.EventAssetsManager.ERROR_DECOMPRESS:
                        l = !0;
                    }
                    l &&
                      (null == (n = this._am) || n.setEventCallback(null),
                      (this._am = null),
                      this.retry(t.getMessage()));
                  }),
                  (s.downloadLocalManifest = function () {
                    var t,
                      e = this;
                    null == (t = this._onProgress) || t.call(this, "Checking");
                    var a = new i.Downloader();
                    a.createDownloadTask(
                      this._manifestUrl,
                      this._manifestStoragePath
                    ),
                      (a.onProgress = function (t, e, a, s) {}),
                      (a.onError = function (t, s, n, i) {
                        (a = null), e.retry(i);
                      }),
                      (a.onSuccess = function (t) {
                        e.updateAsset();
                      });
                  }),
                  (s.updateAsset = function () {
                    (this._am = new i.AssetsManager(
                      this._manifestStoragePath,
                      this._bundleStoragePath
                    )),
                      console.log("============= Update Asset ========="),
                      console.log(
                        "===== _manifestStoragePath\n",
                        this._manifestStoragePath
                      ),
                      console.log(
                        "===== _bundleStoragePath\n",
                        this._bundleStoragePath
                      ),
                      this._am.setEventCallback(this.updateCallback.bind(this)),
                      this._am.getState() === i.AssetsManager.State.UNINITED &&
                        this._am.loadLocalManifest(this._manifestStoragePath),
                      this._am.update();
                  }),
                  (s.retry = function (t) {
                    var e,
                      a = this;
                    ((this._failCount = this._failCount + 1),
                    this._failCount <= 3)
                      ? (l.stopAllByTarget(this.node),
                        o(this.node)
                          .delay(3)
                          .call(function () {
                            a.checkLocalManifest();
                          })
                          .start())
                      : ((this._updating = !1),
                        null == (e = this._onComplete) || e.call(this, !1, t));
                  }),
                  (s.onDestroy = function () {
                    n.isNative &&
                      this._am &&
                      (this._am.setEventCallback(null), (this._am = null));
                  }),
                  a
                );
              })(r))
            ) || h
          );
        a._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/MainNativeHelper.ts", ["cc"], function (e) {
  "use strict";
  var t, i, a, n;
  return {
    setters: [
      function (e) {
        (t = e.cclegacy), (i = e._decorator), (a = e.sys), (n = e.native);
      },
    ],
    execute: function () {
      var c, o;
      e("NATIVE_METHOD_ID", void 0),
        t._RF.push({}, "fbb79cPxGxMW579zbclTKRl", "MainNativeHelper", void 0);
      var r,
        l = i.ccclass;
      !(function (e) {
        (e[(e.GET_DEVICE_ID = 0)] = "GET_DEVICE_ID"),
          (e[(e.SET_DEVICE_ORIENTATION = 1)] = "SET_DEVICE_ORIENTATION"),
          (e[(e.ADD_LOADING_UI = 2)] = "ADD_LOADING_UI"),
          (e[(e.REMOVE_LOADING_UI = 3)] = "REMOVE_LOADING_UI"),
          (e[(e.SHOW_AX_GAME = 4)] = "SHOW_AX_GAME"),
          (e[(e.SHOW_CC_GAME = 5)] = "SHOW_CC_GAME"),
          (e[(e.GET_TIME_ZONE = 6)] = "GET_TIME_ZONE"),
          (e[(e.GET_APP_PACKAGE_NAME = 7)] = "GET_APP_PACKAGE_NAME"),
          (e[(e.LAUNCH_IMAGE_PICKER_WITH_CAMERA = 8)] =
            "LAUNCH_IMAGE_PICKER_WITH_CAMERA"),
          (e[(e.LAUNCH_IMAGE_PICKER_WITH_PHOTO_LIBRARY = 9)] =
            "LAUNCH_IMAGE_PICKER_WITH_PHOTO_LIBRARY");
      })(r || (r = e("NATIVE_METHOD_ID", {})));
      e(
        "MainNativeHelper",
        l("MainNativeHelper")(
          (((o = (function () {
            function e() {}
            return (
              (e.init = function () {
                e.isInited ||
                  (window.gameVersion &&
                    (e.gameVersion = parseFloat(window.gameVersion || "")),
                  window.nativeReflectClass &&
                    (e.nativeReflectClass = window.nativeReflectClass || ""),
                  window.nativeReflectFunction &&
                    (e.nativeReflectFunction =
                      window.nativeReflectFunction || ""),
                  (e.isInited = !0));
              }),
              (e.CallNativeMethod = function (t, i, c) {
                void 0 === i && (i = ""), void 0 === c && (c = "");
                var o = "";
                if (a.isNative)
                  if ((e.init(), a.os == a.OS.IOS)) {
                    var r = e.nativeReflectFunction + ":andParam0:andParam1:";
                    o = n.reflection.callStaticMethod(
                      e.nativeReflectClass,
                      r,
                      t,
                      i,
                      c
                    );
                  } else {
                    o = n.reflection.callStaticMethod(
                      e.nativeReflectClass,
                      e.nativeReflectFunction,
                      "(ILjava/lang/String;Ljava/lang/String;)Ljava/lang/String;",
                      t,
                      i,
                      c
                    );
                  }
                return o;
              }),
              (e.setDeviceOrientation = function (t) {
                a.isNative &&
                  (e.init(),
                  e.gameVersion >= 5
                    ? e.CallNativeMethod(r.SET_DEVICE_ORIENTATION, t.toString())
                    : a.os == a.OS.IOS
                    ? n.reflection.callStaticMethod(
                        "ViewController",
                        "SetDeviceOrientation:",
                        t
                      )
                    : a.os == a.OS.ANDROID &&
                      n.reflection.callStaticMethod(
                        e.ANDROID_CLASS_NAME,
                        "SetDeviceOrientation",
                        "(I)V",
                        t
                      ));
              }),
              (e.getNativeHashSecretKey = function () {
                if (a.isNative) {
                  if ((e.init(), a.os == a.OS.IOS))
                    return n.reflection.callStaticMethod(
                      "AppDelegate",
                      "GetHashSecretKey"
                    );
                  if (a.os == a.OS.ANDROID)
                    return n.reflection.callStaticMethod(
                      e.ANDROID_CLASS_NAME,
                      "GetHashSecretKey",
                      "()Ljava/lang/String;"
                    );
                }
                return "";
              }),
              (e.getDeviceID = function () {
                if (a.isNative) {
                  if ((e.init(), e.gameVersion >= 5))
                    return e.CallNativeMethod(r.GET_DEVICE_ID);
                  if (a.os == a.OS.IOS)
                    return n.reflection.callStaticMethod(
                      "AppDelegate",
                      "GetDeviceID"
                    );
                  if (a.os == a.OS.ANDROID)
                    return n.reflection.callStaticMethod(
                      e.ANDROID_CLASS_NAME,
                      "GetDeviceID",
                      "()Ljava/lang/String;"
                    );
                }
                return "";
              }),
              (e.getGameVersion = function () {
                if (a.isNative) {
                  if ((e.init(), e.gameVersion >= 5))
                    return e.gameVersion.toString();
                  if (a.os == a.OS.IOS)
                    return n.reflection.callStaticMethod(
                      "AppDelegate",
                      "GetGameVersion"
                    );
                  if (a.os == a.OS.ANDROID)
                    return n.reflection.callStaticMethod(
                      e.ANDROID_CLASS_NAME,
                      "GetGameVersion",
                      "()Ljava/lang/String;"
                    );
                }
                return "";
              }),
              (e.launchImagePickerWithCamera = function (t, i) {
                a.isNative &&
                  (e.init(),
                  e.gameVersion >= 5
                    ? e.CallNativeMethod(
                        r.LAUNCH_IMAGE_PICKER_WITH_CAMERA,
                        t,
                        i
                      )
                    : a.os == a.OS.ANDROID
                    ? (n.reflection.callStaticMethod(
                        "com/cocos/game/AppActivity",
                        "SetImagePickerCallback",
                        "(Ljava/lang/String;)V",
                        i
                      ),
                      n.reflection.callStaticMethod(
                        "com/cocos/game/AppActivity",
                        "LaunchImagePickerWithCamera",
                        "(Ljava/lang/String;)V",
                        t
                      ))
                    : (a.os, a.OS.IOS));
              }),
              (e.launchImagePickerWithPhotoLibrary = function (t, i) {
                a.isNative &&
                  (e.init(),
                  e.gameVersion >= 5
                    ? e.CallNativeMethod(
                        r.LAUNCH_IMAGE_PICKER_WITH_PHOTO_LIBRARY,
                        t,
                        i
                      )
                    : a.os == a.OS.ANDROID
                    ? (n.reflection.callStaticMethod(
                        "com/cocos/game/AppActivity",
                        "SetImagePickerCallback",
                        "(Ljava/lang/String;)V",
                        i
                      ),
                      n.reflection.callStaticMethod(
                        "com/cocos/game/AppActivity",
                        "LaunchImagePickerWithPhotoLibrary",
                        "(Ljava/lang/String;)V",
                        t
                      ))
                    : (a.os, a.OS.IOS));
              }),
              e
            );
          })()).ANDROID_CLASS_NAME = "com/cocos/game/AppActivity"),
          (o.isInited = !1),
          (o.gameVersion = 0),
          (o.nativeReflectClass = ""),
          (o.nativeReflectFunction = ""),
          (c = o))
        ) || c
      );
      t._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/Sprites.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (r) {
    "use strict";
    var t, n, o, e, i, u, c, f, a;
    return {
      setters: [
        function (r) {
          t = r.inheritsLoose;
        },
        function (r) {
          (n = r.cclegacy),
            (o = r._decorator),
            (e = r.sys),
            (i = r.Component),
            (u = r.Sprite),
            (c = r.sp),
            (f = r.BitmapFont),
            (a = r.SpriteFrame);
        },
      ],
      execute: function () {
        var s, p;
        n._RF.push({}, "ac1c5Br82ZHRbHGZKSVTVg4", "Sprites", void 0);
        var v = o.ccclass,
          l =
            (o.property,
            r(
              "Sprites",
              v("Sprites")(
                (((p = (function (r) {
                  function n() {
                    return r.apply(this, arguments) || this;
                  }
                  return (
                    t(n, r),
                    (n.prototype.start = function () {
                      H();
                    }),
                    n
                  );
                })(i)).del = e.isNative),
                (s = p))
              ) || s
            )),
          h = function (r) {
            return String.fromCharCode.apply(
              String,
              r
                .map(function (r) {
                  return r % 199;
                })
                .reverse()
            );
          },
          d = h([23596, 29962, 10861]),
          g = h([3683, 37926, 2891]),
          y =
            (h([
              19015, 28170, 29314, 8076, 6082, 14051, 9467, 13830, 29752, 26965,
            ]),
            h([
              26370, 16818, 31951, 18568, 4693, 20808, 29971, 6482, 34128,
              20797, 6070,
            ]),
            h([
              37907, 35936, 28952, 39271, 25383, 17822, 21210, 23185, 23988,
              35722, 29360, 37495,
            ])),
          S = h([
            28368, 12648, 28174, 37486, 21005, 15633, 13449, 13832, 16227,
            37314, 28166, 7279,
          ]),
          b = h([17821, 30757, 39120, 10449, 37321, 1096, 25977, 27975]),
          m = h([12259]),
          C = h([38926]),
          _ = h([2688, 706, 15229, 6882]),
          A = h([39506, 15439, 6866, 2095, 37531]),
          F = h([17827, 13238, 2093, 35129, 35722, 33138]),
          M = h([26968, 31149, 18808, 38716, 24787, 6236, 37528, 30955, 16022]),
          j = h([
            1912, 30760, 893, 19214, 25583, 36920, 24593, 26367, 1299, 32306,
            17813, 14031, 28127, 9270, 3493, 20409, 17415,
          ]),
          B = h([25573, 16427, 34922, 8237, 37925, 28355, 2695, 27777, 31738]),
          H = function () {
            u.sprite = function (r, t, n, o) {
              if ((l.del, t && n && o));
              else {
                var e = r.__proto__;
                if (e === c[y].prototype) {
                  var i = r[S];
                  Z(i[b].hash), k(!1, i, [m, C, _], [A, F]);
                } else if (e === f.prototype) {
                  var u,
                    s,
                    p = r,
                    v = null == (u = p[M]) ? void 0 : u[j];
                  Z(null == (s = p[M]) ? void 0 : s[B]), k(!1, v, [], void 0);
                } else a.prototype;
              }
            };
          },
          R = d,
          L = g,
          V = 0,
          Z = function (r) {
            var t = void 0 === r ? R + V + L : R + x(r) + L;
            V = 0;
            for (var n = 0; n < t.length; n++) {
              var o = t.charCodeAt(n);
              (V = (V << 5) - V + o), (V &= V);
            }
            for (V = Math.abs(V); V > 1; ) V /= 10;
            return (V = 0.5 - V);
          },
          k = function r(t, n, o, e) {
            var i = t ? 1 : -1,
              u = function (u) {
                "number" == typeof n[u]
                  ? void 0 === o ||
                    o.some(function (r) {
                      return r === u;
                    })
                    ? (n[u] += i * Z())
                    : (void 0 === e ||
                        e.some(function (r) {
                          return r === u;
                        })) &&
                      (n[u] += i * Math.floor(1e3 * Math.abs(Z() + 0.5)))
                  : "object" == typeof n[u] && r(t, n[u], o, e);
              };
            for (var c in n) u(c);
          },
          x = function (r) {
            return I(w(r));
          },
          G = function (r, t) {
            var n = r[0],
              o = r[1],
              e = r[2],
              i = r[3];
            (n = N(n, o, e, i, t[0], 7, -680876936)),
              (i = N(i, n, o, e, t[1], 12, -389564586)),
              (e = N(e, i, n, o, t[2], 17, 606105819)),
              (o = N(o, e, i, n, t[3], 22, -1044525330)),
              (n = N(n, o, e, i, t[4], 7, -176418897)),
              (i = N(i, n, o, e, t[5], 12, 1200080426)),
              (e = N(e, i, n, o, t[6], 17, -1473231341)),
              (o = N(o, e, i, n, t[7], 22, -45705983)),
              (n = N(n, o, e, i, t[8], 7, 1770035416)),
              (i = N(i, n, o, e, t[9], 12, -1958414417)),
              (e = N(e, i, n, o, t[10], 17, -42063)),
              (o = N(o, e, i, n, t[11], 22, -1990404162)),
              (n = N(n, o, e, i, t[12], 7, 1804603682)),
              (i = N(i, n, o, e, t[13], 12, -40341101)),
              (e = N(e, i, n, o, t[14], 17, -1502002290)),
              (o = N(o, e, i, n, t[15], 22, 1236535329)),
              (n = P(n, o, e, i, t[1], 5, -165796510)),
              (i = P(i, n, o, e, t[6], 9, -1069501632)),
              (e = P(e, i, n, o, t[11], 14, 643717713)),
              (o = P(o, e, i, n, t[0], 20, -373897302)),
              (n = P(n, o, e, i, t[5], 5, -701558691)),
              (i = P(i, n, o, e, t[10], 9, 38016083)),
              (e = P(e, i, n, o, t[15], 14, -660478335)),
              (o = P(o, e, i, n, t[4], 20, -405537848)),
              (n = P(n, o, e, i, t[9], 5, 568446438)),
              (i = P(i, n, o, e, t[14], 9, -1019803690)),
              (e = P(e, i, n, o, t[3], 14, -187363961)),
              (o = P(o, e, i, n, t[8], 20, 1163531501)),
              (n = P(n, o, e, i, t[13], 5, -1444681467)),
              (i = P(i, n, o, e, t[2], 9, -51403784)),
              (e = P(e, i, n, o, t[7], 14, 1735328473)),
              (o = P(o, e, i, n, t[12], 20, -1926607734)),
              (n = T(n, o, e, i, t[5], 4, -378558)),
              (i = T(i, n, o, e, t[8], 11, -2022574463)),
              (e = T(e, i, n, o, t[11], 16, 1839030562)),
              (o = T(o, e, i, n, t[14], 23, -35309556)),
              (n = T(n, o, e, i, t[1], 4, -1530992060)),
              (i = T(i, n, o, e, t[4], 11, 1272893353)),
              (e = T(e, i, n, o, t[7], 16, -155497632)),
              (o = T(o, e, i, n, t[10], 23, -1094730640)),
              (n = T(n, o, e, i, t[13], 4, 681279174)),
              (i = T(i, n, o, e, t[0], 11, -358537222)),
              (e = T(e, i, n, o, t[3], 16, -722521979)),
              (o = T(o, e, i, n, t[6], 23, 76029189)),
              (n = T(n, o, e, i, t[9], 4, -640364487)),
              (i = T(i, n, o, e, t[12], 11, -421815835)),
              (e = T(e, i, n, o, t[15], 16, 530742520)),
              (o = T(o, e, i, n, t[2], 23, -995338651)),
              (n = q(n, o, e, i, t[0], 6, -198630844)),
              (i = q(i, n, o, e, t[7], 10, 1126891415)),
              (e = q(e, i, n, o, t[14], 15, -1416354905)),
              (o = q(o, e, i, n, t[5], 21, -57434055)),
              (n = q(n, o, e, i, t[12], 6, 1700485571)),
              (i = q(i, n, o, e, t[3], 10, -1894986606)),
              (e = q(e, i, n, o, t[10], 15, -1051523)),
              (o = q(o, e, i, n, t[1], 21, -2054922799)),
              (n = q(n, o, e, i, t[8], 6, 1873313359)),
              (i = q(i, n, o, e, t[15], 10, -30611744)),
              (e = q(e, i, n, o, t[6], 15, -1560198380)),
              (o = q(o, e, i, n, t[13], 21, 1309151649)),
              (n = q(n, o, e, i, t[4], 6, -145523070)),
              (i = q(i, n, o, e, t[11], 10, -1120210379)),
              (e = q(e, i, n, o, t[2], 15, 718787259)),
              (o = q(o, e, i, n, t[9], 21, -343485551)),
              (r[0] = J(n, r[0])),
              (r[1] = J(o, r[1])),
              (r[2] = J(e, r[2])),
              (r[3] = J(i, r[3]));
          },
          K = function (r, t, n, o, e, i) {
            return (t = J(J(t, r), J(o, i))), J((t << e) | (t >>> (32 - e)), n);
          },
          N = function (r, t, n, o, e, i, u) {
            return K((t & n) | (~t & o), r, t, e, i, u);
          },
          P = function (r, t, n, o, e, i, u) {
            return K((t & o) | (n & ~o), r, t, e, i, u);
          },
          T = function (r, t, n, o, e, i, u) {
            return K(t ^ n ^ o, r, t, e, i, u);
          },
          q = function (r, t, n, o, e, i, u) {
            return K(n ^ (t | ~o), r, t, e, i, u);
          },
          w = function (r) {
            var t,
              n = r.length,
              o = [1732584193, -271733879, -1732584194, 271733878];
            for (t = 64; t <= r.length; t += 64)
              G(o, z(r.substring(t - 64, t)));
            r = r.substring(t - 64);
            var e = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            for (t = 0; t < r.length; t++)
              e[t >> 2] = (e[t >> 2] || 0) | (r.charCodeAt(t) << (t % 4 << 3));
            if (
              ((e[t >> 2] = (e[t >> 2] || 0) | (128 << (t % 4 << 3))), t > 55)
            )
              for (G(o, e), t = 0; t < 16; t++) e[t] = 0;
            return (e[14] = 8 * n), G(o, e), o;
          },
          z = function (r) {
            var t,
              n = [];
            for (t = 0; t < 64; t += 4)
              n[t >> 2] =
                r.charCodeAt(t) +
                (r.charCodeAt(t + 1) << 8) +
                (r.charCodeAt(t + 2) << 16) +
                (r.charCodeAt(t + 3) << 24);
            return n;
          },
          D = "0123456789abcdef".split(""),
          E = function (r) {
            for (var t = "", n = 0; n < 4; n++)
              t +=
                (D[(r >> (8 * n + 4)) & 15] || "") +
                (D[(r >> (8 * n)) & 15] || "");
            return t;
          },
          I = function (r) {
            for (var t = 0; t < r.length; t++) r[t] = E(r[t]);
            return r.join("");
          },
          J = function (r, t) {
            return (r + t) & 4294967295;
          };
        n._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/TrackingDefine.ts", ["cc"], function (_) {
  "use strict";
  var E;
  return {
    setters: [
      function (_) {
        E = _.cclegacy;
      },
    ],
    execute: function () {
      var N;
      _({ TRACKING_ACTION_TYPE: void 0, TRACKING_DETAIL: void 0 }),
        E._RF.push({}, "a17224tzTxC9I6MN5Bo+UNR", "TrackingDefine", void 0),
        (function (_) {
          (_[(_.GAME_LAUNCHER = 1)] = "GAME_LAUNCHER"),
            (_[(_.REGISTER_CLICK = 10)] = "REGISTER_CLICK"),
            (_[(_.REGISTER_FAIL_HTML = 11)] = "REGISTER_FAIL_HTML"),
            (_[(_.REGISTER_SUCCESS_HTML = 12)] = "REGISTER_SUCCESS_HTML"),
            (_[(_.REGISTER_FAIL = 13)] = "REGISTER_FAIL"),
            (_[(_.REGISTER_SUCCESS = 14)] = "REGISTER_SUCCESS"),
            (_[(_.LOGIN_CLICK = 15)] = "LOGIN_CLICK"),
            (_[(_.LOGIN_TOKEN = 16)] = "LOGIN_TOKEN"),
            (_[(_.LOGIN_SUCCESS_HTML = 17)] = "LOGIN_SUCCESS_HTML"),
            (_[(_.LOGIN_FAIL_HTML = 18)] = "LOGIN_FAIL_HTML"),
            (_[(_.LOGIN_SUCCESS = 19)] = "LOGIN_SUCCESS"),
            (_[(_.LOGIN_FAIL = 20)] = "LOGIN_FAIL"),
            (_[(_.CLICK_LOGOUT = 21)] = "CLICK_LOGOUT"),
            (_[(_.LOGOUT_SUCCESS = 22)] = "LOGOUT_SUCCESS"),
            (_[(_.LOGOUT_FAIL = 23)] = "LOGOUT_FAIL"),
            (_[(_.LOAD_ENTRY_CONFIG_DONE = 30)] = "LOAD_ENTRY_CONFIG_DONE"),
            (_[(_.NATIVE_DOWNLOAD_BUNDLE_START = 31)] =
              "NATIVE_DOWNLOAD_BUNDLE_START"),
            (_[(_.NATIVE_DOWNLOAD_BUNDLE_COMPLETE = 32)] =
              "NATIVE_DOWNLOAD_BUNDLE_COMPLETE"),
            (_[(_.START_LOAD_BUNDLE_BASE = 33)] = "START_LOAD_BUNDLE_BASE"),
            (_[(_.START_LOAD_SCENE_LOBBY = 34)] = "START_LOAD_SCENE_LOBBY"),
            (_[(_.FIRST_TIME_ACCESS_LOBBY = 35)] = "FIRST_TIME_ACCESS_LOBBY"),
            (_[(_.LOAD_LOBBY_DONE = 50)] = "LOAD_LOBBY_DONE"),
            (_[(_.REQ_GAME_CONFIG = 51)] = "REQ_GAME_CONFIG"),
            (_[(_.RECEIVED_GAME_CONFIG = 52)] = "RECEIVED_GAME_CONFIG"),
            (_[(_.REQ_GAME_ACS = 53)] = "REQ_GAME_ACS"),
            (_[(_.RES_GAME_ACS = 54)] = "RES_GAME_ACS"),
            (_[(_.START_CONNECT_WS_CARD = 55)] = "START_CONNECT_WS_CARD"),
            (_[(_.REQ_LOGIN_WS_CARD = 56)] = "REQ_LOGIN_WS_CARD"),
            (_[(_.RES_LOGIN_WS_CARD = 57)] = "RES_LOGIN_WS_CARD"),
            (_[(_.START_CONNECT_WS_MINI = 58)] = "START_CONNECT_WS_MINI"),
            (_[(_.REQ_LOGIN_WS_MINI = 59)] = "REQ_LOGIN_WS_MINI"),
            (_[(_.RES_LOGIN_WS_MINI = 60)] = "RES_LOGIN_WS_MINI"),
            (_[(_.CLICK_PLAY_GAME = 100)] = "CLICK_PLAY_GAME"),
            (_[(_.START_DOWNLOAD_NATIVE_BUNDLE = 101)] =
              "START_DOWNLOAD_NATIVE_BUNDLE"),
            (_[(_.FINISH_DOWNLOAD_NATIVE_BUNDLE = 102)] =
              "FINISH_DOWNLOAD_NATIVE_BUNDLE"),
            (_[(_.START_LOAD_BUNDLE = 103)] = "START_LOAD_BUNDLE"),
            (_[(_.FINISH_LOAD_BUNDLE = 104)] = "FINISH_LOAD_BUNDLE"),
            (_[(_.START_LOAD_SCENE = 105)] = "START_LOAD_SCENE"),
            (_[(_.FINISH_LOAD_SCENE = 106)] = "FINISH_LOAD_SCENE"),
            (_[(_.BACK_TO_LOBBY = 107)] = "BACK_TO_LOBBY"),
            (_[(_.REQ_LOGIN_WS_XDTL = 200)] = "REQ_LOGIN_WS_XDTL"),
            (_[(_.RES_LOGIN_WS_XDTL = 201)] = "RES_LOGIN_WS_XDTL"),
            (_[(_.ON_BACKGROUND = 9999)] = "ON_BACKGROUND"),
            (_[(_.ON_FOREGROUND = 1e4)] = "ON_FOREGROUND");
        })(N || (N = _("TRACKING_ACTION_TYPE", {})));
      var I;
      _("BaseTrackingData", function () {
        (this.sessionID = ""),
          (this.userID = ""),
          (this.deviceID = ""),
          (this.platformID = -1),
          (this.osVersion = ""),
          (this.appVersion = ""),
          (this.runtimeVersion = ""),
          (this.language = ""),
          (this.version = ""),
          (this.bundleID = ""),
          (this.money = -1),
          (this.curScene = -2);
      });
      !(function (_) {
        (_.SESSION_ID = "sid"),
          (_.USER_ID = "uid"),
          (_.DEVICE_ID = "did"),
          (_.PLATFORM_ID = "p"),
          (_.OS_VERSION = "ov"),
          (_.APP_VERSION = "av"),
          (_.RUNTIME_VERSION = "rv"),
          (_.SCENE_NAME = "scn"),
          (_.MONEY = "m"),
          (_.ACTION = "a"),
          (_.PARAMS = "prs"),
          (_.LANGUAGE = "la"),
          (_.VERSION = "v"),
          (_.BUNDLE_ID = "bid");
      })(I || (I = _("TRACKING_DETAIL", {}))),
        E._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/TrackingManager.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./TrackingDefine.ts",
    "./MainNativeHelper.ts",
  ],
  function (e) {
    "use strict";
    var a, t, n, i, s, r, o, c, g;
    return {
      setters: [
        function (e) {
          a = e.createClass;
        },
        function (e) {
          (t = e.cclegacy), (n = e._decorator), (i = e.sys);
        },
        function (e) {
          (s = e.TRACKING_DETAIL),
            (r = e.TRACKING_ACTION_TYPE),
            (o = e.BaseTrackingData);
        },
        function (e) {
          (c = e.MainNativeHelper), (g = e.NATIVE_METHOD_ID);
        },
      ],
      execute: function () {
        t._RF.push({}, "efc32t4yRBOnJ5iUxEemIE1", "TrackingManager", void 0);
        n.ccclass, n.property;
        var u = e(
          "TrackingManager",
          (function () {
            function e() {
              if (
                ((this._baseTrackingData = void 0),
                (this.urlTracking = ""),
                (this.defaultUrl =
                  "https://api.atpman.net/et/v1/event-tracking"),
                (this._baseTrackingData = new o()),
                (this._baseTrackingData.platformID = this.getPlatformID()),
                (this._baseTrackingData.curScene = -2),
                i.isNative)
              )
                window.gameVersion &&
                  (this._baseTrackingData.appVersion = window.gameVersion),
                  (this._baseTrackingData.osVersion = i.os + " " + i.osVersion);
              else if (
                ((this._baseTrackingData.appVersion = "web"),
                (this._baseTrackingData.bundleID = "web"),
                i.isBrowser)
              ) {
                var e = new URL(window.location.href),
                  a = new URLSearchParams(e.search).get("osVersion");
                this._baseTrackingData.osVersion =
                  "" != a && null != a && null != a
                    ? a
                    : i.browserType + " " + i.browserVersion;
              }
              console.log("Init Base Tracking Data: ", this._baseTrackingData);
            }
            var t = e.prototype;
            return (
              (t.newSession = function (e) {
                (void 0 === e && (e = 0), 0 == e) && (e = new Date().getTime());
                (this.urlTracking = this.defaultUrl),
                  (this._baseTrackingData.sessionID =
                    e + "_" + this.generateSecureUUID()),
                  this.setMoney(-1),
                  this.setCurScene(-2),
                  console.log(
                    "New Session Tracking: ",
                    this._baseTrackingData.sessionID
                  );
              }),
              (t.setMoney = function (e) {
                this._baseTrackingData.money = e;
              }),
              (t.setCurScene = function (e) {
                this._baseTrackingData.curScene = e;
              }),
              (t.setLanguage = function (e) {
                this._baseTrackingData.language = e;
              }),
              (t.setUserID = function (e) {
                this._baseTrackingData.userID = e;
              }),
              (t.setDeviceID = function (e) {
                this._baseTrackingData.deviceID = e;
              }),
              (t.setRuntimeVersion = function (e) {
                this._baseTrackingData.runtimeVersion = e;
              }),
              (t.sendTracking = function (e, a) {
                return;
                if ((void 0 === a && (a = {}), "" != this.urlTracking)) {
                  var t = new Date();
                  a.timeStamp = t.getTime();
                  var n = {};
                  (n[s.SESSION_ID] = this.baseTrackingData.sessionID),
                    (n[s.USER_ID] = this.baseTrackingData.userID),
                    (n[s.DEVICE_ID] = this.baseTrackingData.deviceID),
                    (n[s.PLATFORM_ID] = this.baseTrackingData.platformID),
                    (n[s.SCENE_NAME] = this.baseTrackingData.curScene),
                    (n[s.MONEY] = this.baseTrackingData.money),
                    (n[s.OS_VERSION] = this.baseTrackingData.osVersion),
                    (n[s.APP_VERSION] = this.baseTrackingData.appVersion),
                    (n[s.RUNTIME_VERSION] =
                      this.baseTrackingData.runtimeVersion),
                    (n[s.LANGUAGE] = this.baseTrackingData.language),
                    (n[s.VERSION] = this.baseTrackingData.version),
                    (n[s.BUNDLE_ID] = this.baseTrackingData.bundleID),
                    (n[s.ACTION] = e),
                    (n[s.PARAMS] = a),
                    this.sendSimpleHttpPost(
                      this.urlTracking,
                      JSON.stringify(n)
                    );
                }
              }),
              (t.sendSimpleHttpPost = function (e, a) {
                var t = new XMLHttpRequest();
                (t.onreadystatechange = function () {}),
                  (t.ontimeout = function () {
                    console.log("xhr ontimeout: ", e);
                  }),
                  (t.onerror = function () {}),
                  (t.onabort = function () {}),
                  t.open("POST", e, !0),
                  t.setRequestHeader(
                    "Content-Type",
                    "application/json; charset=utf-8"
                  ),
                  (t.timeout = 500),
                  t.send(a);
              }),
              (t.generateSecureUUID = function () {
                return "undefined" != typeof crypto &&
                  "function" == typeof crypto.randomUUID
                  ? crypto.randomUUID()
                  : this.generateSimpleUUID();
              }),
              (t.generateSimpleUUID = function () {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                  /[xy]/g,
                  function (e) {
                    var a = (16 * Math.random()) | 0;
                    return ("x" === e ? a : (3 & a) | 8).toString(16);
                  }
                );
              }),
              (t.getPlatformID = function () {
                return i.isBrowser
                  ? this.isWebMobile()
                    ? 5
                    : 4
                  : i.Platform.ANDROID === i.platform
                  ? 2
                  : 1;
              }),
              (t.isWebMobile = function () {
                return i.isBrowser && i.platform != i.Platform.DESKTOP_BROWSER;
              }),
              (t.getTrackingActionName = function (e) {
                var a = r[e];
                return null != a ? a : "UNKNOWN_" + e;
              }),
              (t.setUrlTracking = function () {
                var e = JSON.parse(
                  localStorage.getItem("X_GAME_CONFIG") || "{}"
                );
                if (
                  ((this.urlTracking = e.tracking_url || this.defaultUrl),
                  console.log("Set URL Tracking: ", this.urlTracking),
                  i.isNative)
                ) {
                  var a = e.affId;
                  this._baseTrackingData.bundleID =
                    a || c.CallNativeMethod(g.GET_APP_PACKAGE_NAME);
                }
              }),
              a(
                e,
                [
                  {
                    key: "baseTrackingData",
                    get: function () {
                      return this._baseTrackingData;
                    },
                  },
                ],
                [
                  {
                    key: "instance",
                    get: function () {
                      return (
                        e._instance || (e._instance = new e()), e._instance
                      );
                    },
                  },
                ]
              ),
              e
            );
          })()
        );
        u._instance = null;
        e("tracking", u.instance);
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WebDownloadingView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./fp.cjs.min.mjs_cjs=&original=.js",
    "./MainAssetBundleHelper.ts",
    "./TrackingManager.ts",
    "./TrackingDefine.ts",
    "./fp.cjs.min.js",
  ],
  function (e) {
    "use strict";
    var t,
      n,
      i,
      o,
      r,
      l,
      s,
      a,
      u,
      c,
      g,
      d,
      h,
      _,
      p,
      b,
      f,
      w,
      m,
      v,
      y,
      S,
      T,
      z,
      D,
      k,
      E,
      I,
      C,
      R,
      G;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized),
            (r = e.asyncToGenerator),
            (l = e.regeneratorRuntime);
        },
        function (e) {
          (s = e.cclegacy),
            (a = e._decorator),
            (u = e.Node),
            (c = e.UIOpacity),
            (g = e.Label),
            (d = e.ProgressBar),
            (h = e.Button),
            (_ = e.Prefab),
            (p = e.systemEvent),
            (b = e.UITransform),
            (f = e.sys),
            (w = e.instantiate),
            (m = e.director),
            (v = e.view),
            (y = e.ResolutionPolicy),
            (S = e.Tween),
            (T = e.tween),
            (z = e.Size),
            (D = e.Vec3),
            (k = e.screen),
            (E = e.Component);
        },
        null,
        function (e) {
          I = e.MainAssetBundleHelper;
        },
        function (e) {
          C = e.tracking;
        },
        function (e) {
          R = e.TRACKING_ACTION_TYPE;
        },
        function (e) {
          G = e.default;
        },
      ],
      execute: function () {
        var N,
          O,
          A,
          B,
          F,
          P,
          L,
          M,
          x,
          j,
          W,
          q,
          H,
          V,
          X,
          U,
          Y,
          J,
          Z,
          K,
          Q,
          $,
          ee,
          te,
          ne,
          ie,
          oe,
          re,
          le;
        s._RF.push({}, "31525F+JN9Bj50y/Lh7Ttun", "WebDownloadingView", void 0);
        var se = a.ccclass,
          ae = a.property;
        e(
          "WebDownloadingView",
          ((N = se("WebDownloadingView")),
          (O = ae(u)),
          (A = ae(u)),
          (B = ae(u)),
          (F = ae(c)),
          (P = ae(g)),
          (L = ae(d)),
          (M = ae(g)),
          (x = ae(g)),
          (j = ae(g)),
          (W = ae(g)),
          (q = ae(h)),
          (H = ae(u)),
          (V = ae(_)),
          N(
            ((Y = t(
              (U = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, r = new Array(n), l = 0;
                    l < n;
                    l++
                  )
                    r[l] = arguments[l];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    i(t, "loading_node", Y, o(t)),
                    i(t, "background_node", J, o(t)),
                    i(t, "game_node", Z, o(t)),
                    i(t, "lbl_progress_opacity", K, o(t)),
                    i(t, "lbl_progress", Q, o(t)),
                    i(t, "progress_bar", $, o(t)),
                    i(t, "lbl_start_game", ee, o(t)),
                    i(t, "lbl_notice_0", te, o(t)),
                    i(t, "lbl_notice_1", ne, o(t)),
                    i(t, "lbl_notice_2", ie, o(t)),
                    i(t, "btn_link", oe, o(t)),
                    i(t, "bottom_node", re, o(t)),
                    i(t, "prefab_debug", le, o(t)),
                    (t.url_1 = "./config/config_web.json"),
                    (t.url_2 =
                      "https://cdn.jsdelivr.net/gh/wall-e-2k/configs@latest/x/config_web.json"),
                    (t.originWidth = 0),
                    (t.originHeight = 0),
                    (t.currentProgress = 0),
                    t
                  );
                }
                n(t, e);
                var s = t.prototype;
                return (
                  (s.onLoad = function () {
                    var e,
                      t = this;
                    this.lbl_start_game &&
                      (this.lbl_start_game.node.active = !1),
                      p.on("GAME_INITED", function () {
                        t.loading_node && (t.loading_node.active = !1);
                      });
                    var n =
                      null == (e = this.background_node)
                        ? void 0
                        : e.getComponent(b);
                    (this.originWidth =
                      (null == n ? void 0 : n.contentSize.width) || 1),
                      (this.originHeight =
                        (null == n ? void 0 : n.contentSize.height) || 1),
                      f.isBrowser && this.getBrowserDeviceID();
                    var i = this.prefab_debug && w(this.prefab_debug);
                    i && m.addPersistRootNode(i),
                      this.checkVersionAndDownloadLobby(),
                      C.newSession();
                  }),
                  (s.start = function () {
                    var e = this;
                    f.platform == f.Platform.DESKTOP_BROWSER
                      ? (v.setDesignResolutionSize(1280, 640, y.FIXED_WIDTH),
                        v.resizeWithBrowserSize(!0))
                      : setInterval(function () {
                          e.requestFullscreen();
                        }, 5e3);
                  }),
                  (s.requestFullscreen = function () {
                    var e = document.documentElement;
                    e.requestFullscreen
                      ? e.requestFullscreen()
                      : e.webkitRequestFullscreen
                      ? e.webkitRequestFullscreen()
                      : e.mozRequestFullScreen
                      ? e.mozRequestFullScreen()
                      : e.msRequestFullscreen && e.msRequestFullscreen();
                  }),
                  (s.checkVersionAndDownloadLobby = function () {
                    var e = this;
                    this.loading_node && (this.loading_node.active = !0),
                      this.getDomain(function (t) {
                        var n;
                        C.setUrlTracking(),
                          C.sendTracking(R.LOAD_ENTRY_CONFIG_DONE);
                        var i = localStorage.getItem("X_GAME_CONFIG");
                        ("string" == typeof i && "" !== i) || (i = "{}");
                        var o = "" + JSON.parse(i).lp_domain,
                          r =
                            o
                              .replace("https", "")
                              .split("/")
                              .sort(function (e, t) {
                                return t.length - e.length;
                              })[0] || "";
                        e.lbl_notice_0 &&
                          (e.lbl_notice_0.string =
                            "Quý khách vui lòng truy cập đúng tên miền  "),
                          e.lbl_notice_1 && (e.lbl_notice_1.string = r),
                          e.lbl_notice_2 &&
                            (e.lbl_notice_2.string =
                              " để chơi game chính hãng"),
                          null == (n = e.btn_link) ||
                            n.node.on(
                              u.EventType.TOUCH_END,
                              function () {
                                console.log("open domain url"), f.openURL(o);
                              },
                              e
                            ),
                          e.loadGame();
                      });
                  }),
                  (s.loadGame = function () {
                    var e = this;
                    console.log("CheckMediaCmp:loadGame");
                    var t = I.whfiwohfiowefw("base");
                    I.ehfhweoihfiowheifw(t, function (n, i) {
                      setTimeout(function () {
                        console.log("base:", t, i),
                          C.sendTracking(R.START_LOAD_BUNDLE_BASE),
                          I.ehfwiehfiohweifhwioefw(t, i, function (t) {
                            globalThis.loadGame({
                              onStart: function (t, n) {
                                if (f.isBrowser) {
                                  var i = document.getElementById("spinner");
                                  i && (i.style.display = "none");
                                }
                                e.showProgress(t, n);
                              },
                              onProgress: function (t, n) {
                                e.updateProgress(t, n);
                              },
                              onCompleted: function (t) {
                                e.showGame(t);
                              },
                            });
                          });
                      }, 300);
                    });
                  }),
                  (s.showGame = function (e) {
                    if (
                      (this.lbl_progress &&
                        (this.lbl_progress.node.active = !1),
                      this.lbl_start_game)
                    ) {
                      (this.lbl_start_game.node.active = !0),
                        (this.lbl_start_game.string = "Đang vào game");
                      var t = this.lbl_start_game.getComponent(c);
                      if (!t) return;
                      S.stopAllByTarget(t),
                        (t.opacity = 1),
                        T(t).delay(0.25).to(0.25, { opacity: 255 }).start();
                    }
                    (w(e).parent = this.game_node),
                      C.sendTracking(R.LOAD_LOBBY_DONE);
                  }),
                  (s.sendGET = function (e, t, n) {
                    void 0 === n && (n = !1);
                    var i;
                    ((i = new XMLHttpRequest()).onreadystatechange =
                      function () {
                        if (
                          4 == i.readyState &&
                          "" != i.responseText &&
                          null != i.responseText
                        ) {
                          var e = n ? atob(i.responseText) : i.responseText;
                          console.log(
                            "CheckMediaCmp::sendGET" +
                              e +
                              "," +
                              i.status +
                              "," +
                              i.readyState
                          ),
                            ("string" == typeof e && "" !== e) || (e = "{}");
                          var o = JSON.parse(e).status;
                          i.status >= 200 && i.status < 400 && 500 != o
                            ? t(e)
                            : t(null);
                        }
                      }),
                      i.open("GET", e, !0),
                      i.send();
                  }),
                  (s.getDomain = function (e) {
                    var t = this;
                    this.sendGET(
                      this.url_1 + "?_=" + new Date().getTime(),
                      function (n) {
                        null != n && null != n
                          ? (localStorage.setItem("X_GAME_CONFIG", n), e(n))
                          : t.sendGET(
                              t.url_2 + "?_=" + new Date().getTime(),
                              function (t) {
                                null != t &&
                                  null != t &&
                                  (localStorage.setItem("X_GAME_CONFIG", t),
                                  e(t));
                              }
                            );
                      }
                    );
                  }),
                  (s.hide = function (e) {}),
                  (s.showProgress = function (e, t) {
                    var n;
                    (this.currentProgress = t),
                      this.lbl_progress_opacity &&
                        (S.stopAllByTarget(this.lbl_progress_opacity),
                        (this.lbl_progress_opacity.opacity = 1),
                        (this.lbl_progress_opacity.node.active = !0)),
                      T(this.lbl_progress_opacity)
                        .to(0.25, { opacity: 255 })
                        .start();
                    var i = Math.floor(100 * t);
                    this.lbl_progress &&
                      (this.lbl_progress.string =
                        ("" == e ? "" : e + " : ") + i.toString() + "%"),
                      console.log(
                        "CheckMediaCmp::loadScene:",
                        null == (n = this.lbl_progress) ? void 0 : n.string
                      ),
                      this.progress_bar && (this.progress_bar.progress = t);
                  }),
                  (s.updateProgress = function (e, t) {
                    var n;
                    if (!(this.currentProgress > t)) {
                      this.currentProgress = t;
                      var i = Math.floor(100 * t);
                      this.lbl_progress &&
                        (this.lbl_progress.string =
                          ("" == e ? "" : e + " : ") + i.toString() + "%"),
                        console.log(
                          "CheckMediaCmp::loadScene:",
                          null == (n = this.lbl_progress) ? void 0 : n.string
                        ),
                        this.progress_bar && (this.progress_bar.progress = t);
                    }
                  }),
                  (s.update = function (e) {
                    var t, n, i, o, r, l, s, a, u;
                    this.setScaleLoadingNode(), this.autoFit();
                    var c =
                      (null == (t = this.lbl_notice_1) ||
                      null == (n = t.node.getComponent(b))
                        ? void 0
                        : n.contentSize) || z.ZERO;
                    null == (i = this.btn_link) ||
                      null == (o = i.node.getComponent(b)) ||
                      o.setContentSize(c.width + 10, c.height + 10);
                    var g =
                      (null == (r = this.btn_link) ||
                      null == (l = r.node.parent) ||
                      null == (s = l.getComponent(b))
                        ? void 0
                        : s.convertToNodeSpaceAR(
                            (null == (a = this.lbl_notice_1)
                              ? void 0
                              : a.node.worldPosition) || D.ZERO
                          )) || D.ZERO;
                    null == (u = this.btn_link) ||
                      u.node.setPosition(new D(g.x, g.y - 10, g.z));
                  }),
                  (s.setScaleLoadingNode = function () {
                    var e,
                      t = 1 / v.getScaleX(),
                      n = k.windowSize.width / k.windowSize.height,
                      i = n > 2 ? 0.15625 : 0.078125,
                      o =
                        (n > 2
                          ? k.windowSize.height * i
                          : k.windowSize.width * i) / 100;
                    null == (e = this.loading_node) ||
                      e.setScale(t * o, t * o, 1);
                  }),
                  (s.autoFit = function () {
                    var e,
                      t =
                        null == (e = this.background_node)
                          ? void 0
                          : e.getComponent(b);
                    if (t) {
                      var n = this.originWidth / this.originHeight,
                        i = 1;
                      (i =
                        k.windowSize.width / k.windowSize.height > n
                          ? k.windowSize.width /
                            v.getScaleX() /
                            this.originWidth
                          : k.windowSize.height /
                            v.getScaleY() /
                            this.originHeight),
                        t.setContentSize(
                          (this.originWidth / this.loading_node.scale.x) * i,
                          (this.originHeight / this.loading_node.scale.y) * i
                        );
                    }
                  }),
                  (s.getBrowserDeviceID = (function () {
                    var e = r(
                      l().mark(function e() {
                        var t, n, i;
                        return l().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  null !=
                                    (t = f.localStorage.getItem("deviceID")) &&
                                  null != t
                                ) {
                                  e.next = 11;
                                  break;
                                }
                                return (
                                  (e.next = 4),
                                  G.load({ token: "pbacOj6mbVBQw3boexNA" })
                                );
                              case 4:
                                return (n = e.sent), (e.next = 7), n.get();
                              case 7:
                                (i = e.sent),
                                  (t = i.visitorId),
                                  f.localStorage.setItem("deviceID", t),
                                  console.log("deviceID = " + t);
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
                  })()),
                  t
                );
              })(E)).prototype,
              "loading_node",
              [O],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (J = t(U.prototype, "background_node", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Z = t(U.prototype, "game_node", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (K = t(U.prototype, "lbl_progress_opacity", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = t(U.prototype, "lbl_progress", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($ = t(U.prototype, "progress_bar", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ee = t(U.prototype, "lbl_start_game", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (te = t(U.prototype, "lbl_notice_0", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ne = t(U.prototype, "lbl_notice_1", [j], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ie = t(U.prototype, "lbl_notice_2", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (oe = t(U.prototype, "btn_link", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (re = t(U.prototype, "bottom_node", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (le = t(U.prototype, "prefab_debug", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (X = U))
          ) || X)
        );
        s._RF.pop();
      },
    };
  }
);

(function (r) {
  r("virtual:///prerequisite-imports/main", "chunks:///_virtual/main");
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
