System.register(
  "chunks:///_virtual/AnimLoading789.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./AnimLoading789Partial.ts"],
  function (n) {
    "use strict";
    var i, t, e, o, r, a, c, s;
    return {
      setters: [
        function (n) {
          (i = n.applyDecoratedDescriptor),
            (t = n.inheritsLoose),
            (e = n.initializerDefineProperty),
            (o = n.assertThisInitialized);
        },
        function (n) {
          (r = n.cclegacy), (a = n._decorator), (c = n.Component);
        },
        function (n) {
          s = n.AnimLoading789Partial;
        },
      ],
      execute: function () {
        var u, l, p, f, d;
        r._RF.push({}, "3de46GGz31P+IrhS9PXVOYC", "AnimLoading789", void 0);
        var m = a.ccclass,
          h = a.property;
        n(
          "AnimLoading789",
          ((u = m("AnimLoading789")),
          (l = h([s])),
          u(
            ((d = i(
              (f = (function (n) {
                function i() {
                  for (
                    var i, t = arguments.length, r = new Array(t), a = 0;
                    a < t;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (i = n.call.apply(n, [this].concat(r)) || this),
                    e(i, "animNodes", d, o(i)),
                    i
                  );
                }
                t(i, n);
                var r = i.prototype;
                return (
                  (r.onEnable = function () {
                    this.animNodes.forEach(function (n, i) {
                      n.play(0.2 * i);
                    });
                  }),
                  (r.onDisable = function () {
                    this.animNodes.forEach(function (n) {
                      n.reset();
                    });
                  }),
                  i
                );
              })(c)).prototype,
              "animNodes",
              [l],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (p = f))
          ) || p)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/AnimLoading789Partial.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, n, a, i, r, o, s, l, c, u, g;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (a = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (o = e._decorator),
            (s = e.Node),
            (l = e.tween),
            (c = e.Vec3),
            (u = e.Tween),
            (g = e.Component);
        },
      ],
      execute: function () {
        var d, p, N, y, f;
        r._RF.push(
          {},
          "6b08f+yvrJB3I6QTe5Wy/2/",
          "AnimLoading789Partial",
          void 0
        );
        var h = o.ccclass,
          v = o.property;
        e(
          "AnimLoading789Partial",
          ((d = h("AnimLoading789Partial")),
          (p = v(s)),
          d(
            ((f = t(
              (y = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, r = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    r[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    a(t, "targetNode", f, i(t)),
                    t
                  );
                }
                n(t, e);
                var r = t.prototype;
                return (
                  (r.play = function (e) {
                    var t = this;
                    void 0 === e && (e = 0),
                      this.reset(),
                      l(this.targetNode)
                        .delay(e)
                        .call(function () {
                          l(t.targetNode)
                            .sequence(
                              l(t.targetNode).to(
                                0.2,
                                { scale: new c(1.2, 0.8, 1) },
                                { easing: "sineOut" }
                              ),
                              l(t.targetNode).parallel(
                                l(t.targetNode).sequence(
                                  l(t.targetNode).to(
                                    0.2,
                                    { scale: new c(0.8, 1.2, 1) },
                                    { easing: "sineOut" }
                                  ),
                                  l(t.targetNode).to(
                                    0.2,
                                    { scale: new c(1, 1, 1) },
                                    { easing: "sineOut" }
                                  )
                                ),
                                l(t.targetNode).to(
                                  0.5,
                                  { position: new c(0, 30, 0) },
                                  { easing: "sineInOut" }
                                )
                              ),
                              l(t.targetNode).to(
                                0.5,
                                { position: new c(0, 0, 0) },
                                { easing: "sineInOut" }
                              )
                            )
                            .repeatForever()
                            .start();
                        })
                        .start();
                  }),
                  (r.reset = function () {
                    var e, t;
                    u.stopAllByTarget(this.targetNode),
                      null == (e = this.targetNode) || e.setPosition(0, 0, 0),
                      null == (t = this.targetNode) || t.setScale(1, 1, 1);
                  }),
                  t
                );
              })(g)).prototype,
              "targetNode",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (N = y))
          ) || N)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/AuthenHandler.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConfigManager.ts"],
  function (e, n) {
    "use strict";
    var t, r, a, i;
    return {
      setters: [
        function (e) {
          (t = e.asyncToGenerator), (r = e.regeneratorRuntime);
        },
        function (e) {
          a = e.cclegacy;
        },
        function (e) {
          i = e.GameConfigManager;
        },
      ],
      execute: function () {
        a._RF.push({}, "996e2+BUzFMg5IljmRKRTK0", "AuthenHandler", void 0),
          (e(
            "AuthenHandler",
            (function () {
              function e() {
                (this.authenLogin = null),
                  (this.onSuccess = null),
                  (this.onFailure = null);
              }
              (e.getLib = (function () {
                var e = t(
                  r().mark(function e() {
                    var t, a, u, o, s, c;
                    return r().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((e.prev = 0),
                                (t = i.appName().toLowerCase()),
                                (a = atob("c2FuZGJveA==")),
                                !t.includes(a))
                              ) {
                                e.next = 11;
                                break;
                              }
                              return (
                                (e.next = 6), n.import("./auth-lib-dev.es.js")
                              );
                            case 6:
                              return (
                                (u = e.sent),
                                (o = u.OAuthIframe),
                                e.abrupt("return", o)
                              );
                            case 11:
                              return (
                                (e.next = 13), n.import("./auth-lib-prod.es.js")
                              );
                            case 13:
                              return (
                                (s = e.sent),
                                (c = s.OAuthIframe),
                                e.abrupt("return", c)
                              );
                            case 16:
                              e.next = 21;
                              break;
                            case 18:
                              throw (
                                ((e.prev = 18),
                                (e.t0 = e.catch(0)),
                                new Error(
                                  "Authentication library loading failed"
                                ))
                              );
                            case 21:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      null,
                      [[0, 18]]
                    );
                  })
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
                (e.create = (function () {
                  var n = t(
                    r().mark(function n() {
                      var t, a, u, o, s, c;
                      return r().wrap(function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (!e.instance) {
                                n.next = 2;
                                break;
                              }
                              return n.abrupt("return", e.instance);
                            case 2:
                              return (
                                (e.instance = new e()), (n.next = 5), e.getLib()
                              );
                            case 5:
                              return (
                                (t = n.sent),
                                (a = i.getLoginConfig()),
                                (u = a.clientId),
                                (o = a.authorizationEndpoint),
                                (s = a.tokenEndpoint),
                                (c =
                                  window.location.href.split("?")[0] +
                                  "callback.html"),
                                (n.next = 14),
                                t.create({
                                  authorizationEndpoint: o,
                                  clientId: u,
                                  redirectUri: c,
                                  tokenEndpoint: s,
                                  onLoaded: function () {
                                    return console.log("iframe loaded");
                                  },
                                  onLoginSuccess: function (n) {
                                    0 == n.status &&
                                      e.instance.onSuccess(n.data);
                                  },
                                  onLoginFailure: function (n) {
                                    e.instance.onFailure(n);
                                  },
                                })
                              );
                            case 14:
                              return (
                                (e.instance.authenLogin = n.sent),
                                n.abrupt("return", e.instance)
                              );
                            case 16:
                            case "end":
                              return n.stop();
                          }
                      }, n);
                    })
                  );
                  return function () {
                    return n.apply(this, arguments);
                  };
                })());
              var a = e.prototype;
              return (
                (a.setOnSuccess = function (e) {
                  this.onSuccess = e;
                }),
                (a.setOnFailure = function (e) {
                  this.onFailure = e;
                }),
                (a.doLogin = function (e) {
                  zzPayload = {
                    type: "login",
                    username: e.username.toLowerCase(),
                    password: e.password,
                    brand: e.brand,
                    deviceId: e.deviceId,
                    platformId: e.platformId,
                    timestamp: e.timestamp,
                    command: "loginWebHash",
                  };
                  this.authenLogin.doAuthen({
                    type: "login",
                    username: e.username.toLowerCase(),
                    password: e.password,
                    brand: e.brand,
                    deviceId: e.deviceId,
                    platformId: e.platformId,
                    timestamp: e.timestamp,
                  });
                }),
                (a.doRegister = function (e) {
                  zzPayload = {
                    type: "register",
                    username: e.username.toLowerCase(),
                    password: e.password,
                    brand: e.brand,
                    advid: e.advId,
                    bundle: e.bundle,
                    command: "registerWebHash",
                    deviceId: e.deviceId,
                    platformId: e.platformId,
                    hash: e.hash,
                    displayName: e.displayName,
                    os: e.os,
                    timestamp: e.timestamp,
                    userAgent: e.userAgent,
                    alsoLogin: e.alsoLogin,
                    affId: e.affId || "",
                    utmSource: e.utmSource || "",
                    utmMedium: e.utmMedium || "",
                    utmCampaign: e.utmCampaign || "",
                    utmContent: e.utmContent || "",
                    utmTerm: e.utmTerm || "",
                  };
                  this.authenLogin.doAuthen({
                    type: "register",
                    username: e.username.toLowerCase(),
                    password: e.password,
                    brand: e.brand,
                    advid: e.advId,
                    bundle: e.bundle,
                    command: "registerWebHash",
                    deviceId: e.deviceId,
                    platformId: e.platformId,
                    hash: e.hash,
                    displayName: e.displayName,
                    os: e.os,
                    timestamp: e.timestamp,
                    userAgent: e.userAgent,
                    alsoLogin: e.alsoLogin,
                    affId: e.affId || "",
                    utmSource: e.utmSource || "",
                    utmMedium: e.utmMedium || "",
                    utmCampaign: e.utmCampaign || "",
                    utmContent: e.utmContent || "",
                    utmTerm: e.utmTerm || "",
                  });
                }),
                e
              );
            })()
          ).instance = null),
          a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/AutoFormatEditBox.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var i, e, r, o, n, l, a, u, c, s;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (n = t.cclegacy),
            (l = t._decorator),
            (a = t.EditBox),
            (u = t.Label),
            (c = t.Component);
        },
        function (t) {
          s = t.StringUtils;
        },
      ],
      execute: function () {
        var p, b, f, d, x, g, h, m, y;
        n._RF.push({}, "604c92CbbZLzI+7ihgJHNkI", "AutoFormatEditBox", void 0);
        var L = l.ccclass,
          v = l.property;
        t(
          "AutoFormatEditBox",
          ((p = L("AutoFormatEditBox")),
          (b = v(a)),
          (f = v(u)),
          (d = v(u)),
          p(
            ((h = i(
              (g = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, n = new Array(e), l = 0;
                    l < e;
                    l++
                  )
                    n[l] = arguments[l];
                  return (
                    (i = t.call.apply(t, [this].concat(n)) || this),
                    r(i, "editbox", h, o(i)),
                    r(i, "placeHolder", m, o(i)),
                    r(i, "fixLabel", y, o(i)),
                    i
                  );
                }
                return (
                  e(i, t),
                  (i.prototype.update = function (t) {
                    var i,
                      e,
                      r =
                        (null == (i = this.editbox) ? void 0 : i.string) || "";
                    (r = s.formatNumber(+r)),
                      "" != (null == (e = this.editbox) ? void 0 : e.string)
                        ? this.fixLabel && (this.fixLabel.string = r)
                        : this.fixLabel && (this.fixLabel.string = "");
                  }),
                  i
                );
              })(c)).prototype,
              "editbox",
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
            (m = i(g.prototype, "placeHolder", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = i(g.prototype, "fixLabel", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = g))
          ) || x)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/AvatarFrames.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (r) {
    "use strict";
    var e, t, a, i, n, o, c, l;
    return {
      setters: [
        function (r) {
          (e = r.applyDecoratedDescriptor),
            (t = r.inheritsLoose),
            (a = r.initializerDefineProperty),
            (i = r.assertThisInitialized);
        },
        function (r) {
          (n = r.cclegacy),
            (o = r._decorator),
            (c = r.SpriteFrame),
            (l = r.Component);
        },
      ],
      execute: function () {
        var s, u, p, f, v, m, y;
        n._RF.push({}, "b9284+fvQVKSLf3XHVFoX+n", "AvatarFrames", void 0);
        var b = o.ccclass,
          F = o.property;
        r(
          "AvatarFrames",
          ((s = b("AvatarFrames")),
          (u = F(c)),
          (p = F(c)),
          s(
            ((m = e(
              (v = (function (r) {
                function e() {
                  for (
                    var e, t = arguments.length, n = new Array(t), o = 0;
                    o < t;
                    o++
                  )
                    n[o] = arguments[o];
                  return (
                    (e = r.call.apply(r, [this].concat(n)) || this),
                    a(e, "avatars", m, i(e)),
                    a(e, "avatarDefault", y, i(e)),
                    e
                  );
                }
                return t(e, r), e;
              })(l)).prototype,
              "avatars",
              [u],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (y = e(v.prototype, "avatarDefault", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = v))
          ) || f)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BackgroundScale.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConfigManager.ts"],
  function (i) {
    "use strict";
    var t, e, n, o, r, h, s, a, g, c, l;
    return {
      setters: [
        function (i) {
          (t = i.applyDecoratedDescriptor),
            (e = i.inheritsLoose),
            (n = i.initializerDefineProperty),
            (o = i.assertThisInitialized);
        },
        function (i) {
          (r = i.cclegacy),
            (h = i._decorator),
            (s = i.UITransform),
            (a = i.view),
            (g = i.Vec3),
            (c = i.Component);
        },
        function (i) {
          l = i.GameConfigManager;
        },
      ],
      execute: function () {
        var u, d, f, p, S, z, v;
        r._RF.push({}, "019c0oKHKFAmKAGcFzLze5k", "BackgroundScale", void 0);
        var m = h.ccclass,
          H = h.property;
        i(
          "BackgroundScale",
          ((u = m("BackgroundScale")),
          (d = H(Boolean)),
          (f = H(Boolean)),
          u(
            ((z = t(
              (S = (function (i) {
                function t() {
                  for (
                    var t, e = arguments.length, r = new Array(e), h = 0;
                    h < e;
                    h++
                  )
                    r[h] = arguments[h];
                  return (
                    (t = i.call.apply(i, [this].concat(r)) || this),
                    n(t, "useScale", z, o(t)),
                    n(t, "fitDesignHeight", v, o(t)),
                    (t.originWidth = 0),
                    (t.originHeight = 0),
                    (t.originRatio = 0),
                    t
                  );
                }
                e(t, i);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    var i, t;
                    (this.originWidth =
                      (null == (i = this.node.getComponent(s))
                        ? void 0
                        : i.contentSize.width) || 0),
                      (this.originHeight =
                        (null == (t = this.node.getComponent(s))
                          ? void 0
                          : t.contentSize.height) || 0),
                      (this.originRatio = this.originWidth / this.originHeight),
                      a.on("canvas-resize", this.autoFit, this);
                  }),
                  (r.start = function () {
                    this.autoFit();
                  }),
                  (r.onDestroy = function () {
                    a.off("canvas-resize", this.autoFit, this);
                  }),
                  (r.update = function (i) {
                    this.autoFit();
                  }),
                  (r.autoFit = function () {
                    if (this.useScale) {
                      l.getSizeWidth() / l.getSizeHeight() <= 1.5 &&
                        this.node.setScale(new g(1.55, 1.55, 1.55));
                    } else {
                      var i,
                        t,
                        e = l.getSizeHeight(),
                        n = a.getDesignResolutionSize();
                      if (this.originWidth <= 0)
                        this.originWidth =
                          (null == (i = this.node.getComponent(s))
                            ? void 0
                            : i.contentSize.width) || 0;
                      if (this.originHeight <= 0)
                        this.originHeight =
                          (null == (t = this.node.getComponent(s))
                            ? void 0
                            : t.contentSize.height) || 0;
                      this.originRatio <= 0 &&
                        this.originHeight > 0 &&
                        (this.originRatio =
                          this.originWidth / this.originHeight);
                      var o,
                        r,
                        h = 0;
                      if (this.fitDesignHeight)
                        null == (o = this.node.getComponent(s)) ||
                          o.setContentSize(
                            n.height * this.originRatio,
                            n.height
                          );
                      else
                        (h = e > n.height ? e / n.height : n.height / e),
                          null == (r = this.node.getComponent(s)) ||
                            r.setContentSize(this.originWidth * h, e);
                      this.node.setWorldScale(1, 1, 1);
                    }
                  }),
                  t
                );
              })(c)).prototype,
              "useScale",
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              }
            )),
            (v = t(S.prototype, "fitDesignHeight", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (p = S))
          ) || p)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/base",
  [
    "./Config.ts",
    "./Define.ts",
    "./GameConfigManager.ts",
    "./State.ts",
    "./AuthenHandler.ts",
    "./BasePuppet.ts",
    "./DemLa_CardLib.ts",
    "./GamePlatformManager.ts",
    "./GameUtils.ts",
    "./MD5Algorithm.ts",
    "./MauBinh_CardLib.ts",
    "./NativeHelper.ts",
    "./Sam_CardLib.ts",
    "./StringUtils.ts",
    "./SyncWebSocket.ts",
    "./Utils.ts",
    "./BundleManager.ts",
    "./EventManager.ts",
    "./HttpManager.ts",
    "./PersistManager.ts",
    "./SocketManager.ts",
    "./SocketReconnectHandler.ts",
    "./SoundManager.ts",
    "./AnimLoading789.ts",
    "./AnimLoading789Partial.ts",
    "./AutoFormatEditBox.ts",
    "./AvatarFrames.ts",
    "./BackgroundScale.ts",
    "./BaseFullScreenGameView.ts",
    "./BauCuaBetEntry.ts",
    "./BigLoadingView.ts",
    "./BlinkCmp.ts",
    "./BubbleChat.ts",
    "./BubblePopup.ts",
    "./BundleUpdateOnNative.ts",
    "./CardItem.ts",
    "./CardPooling.ts",
    "./ChipItem.ts",
    "./ChipPanel.ts",
    "./ChipPooling.ts",
    "./CommonInfoPopup.ts",
    "./CommonPopup.ts",
    "./DockPanel.ts",
    "./DropDown.ts",
    "./FixHeight.ts",
    "./FixSkeleton.ts",
    "./FloatStringCmp.ts",
    "./FormatEditBox.ts",
    "./G1_CanvasScaleByOrientation.ts",
    "./G1_CustomCanvasSize.ts",
    "./GameBaiPlayerView.ts",
    "./GameListItem.ts",
    "./GetSharedResource.ts",
    "./InfoPopup.ts",
    "./InvitationPlayerView.ts",
    "./J_ScrollView.ts",
    "./JackpotItemView.ts",
    "./JumpingCmp.ts",
    "./LineCmp.ts",
    "./LineDrawer.ts",
    "./LoadingView.ts",
    "./LoginPopup.ts",
    "./NotiView.ts",
    "./NotiViewForPortrait.ts",
    "./OTPPopup.ts",
    "./PersistentNodeController.ts",
    "./PlayerView.ts",
    "./ScaleCmp.ts",
    "./ScrollViewInfoPopup.ts",
    "./SettingPopup.ts",
    "./SharedResources.ts",
    "./SoundButtonCmp.ts",
    "./SpriteSwapToggle.ts",
    "./TransitionFadeScreen.ts",
    "./UIBackgroundScale.ts",
    "./UIScale.ts",
    "./WebViewPopup.ts",
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
      ],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/BaseFullScreenGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BundleManager.ts",
    "./EventManager.ts",
    "./SocketManager.ts",
    "./State.ts",
    "./PersistManager.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, o, r, s, a, c, u, h, f, l, m, g, d, v, p;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (s = e._decorator),
            (a = e.Node),
            (c = e.game),
            (u = e.Game),
            (h = e.Component);
        },
        function (e) {
          f = e.bundleManager;
        },
        function (e) {
          (l = e.eventManager), (m = e.EventKey);
        },
        function (e) {
          g = e.socketManager;
        },
        function (e) {
          (d = e.state), (v = e.NetworkState);
        },
        function (e) {
          p = e.PersistManager;
        },
      ],
      execute: function () {
        var y, E, w, I, G, S, _, b;
        r._RF.push(
          {},
          "c7706S/y9xOL61iBcEJBIwq",
          "BaseFullScreenGameView",
          void 0
        );
        var k = s.ccclass,
          V = s.property;
        e(
          "BaseFullScreenGameView",
          ((y = k("BaseFullScreenGameView")),
          (E = V(a)),
          (w = V(a)),
          y(
            (((b = (function (e) {
              function t() {
                for (
                  var t, n = arguments.length, r = new Array(n), s = 0;
                  s < n;
                  s++
                )
                  r[s] = arguments[s];
                return (
                  (t = e.call.apply(e, [this].concat(r)) || this),
                  i(t, "back_screen", S, o(t)),
                  i(t, "root", _, o(t)),
                  (t.gameID = -2),
                  (t.previousGameView = null),
                  (t.refreshMoneyCb = []),
                  (t.isRefreshingInBackground = !1),
                  (t.time = 0),
                  t
                );
              }
              n(t, e),
                (t.getView = function () {
                  return this._current;
                });
              var r = t.prototype;
              return (
                (r.onLoad = function () {
                  var e = this;
                  (t._current = this),
                    l.on(m.RefreshMoney, this, function (t) {
                      e.handleRefreshMoney(t);
                    }),
                    l.on(m.SocketClosed, this, function () {
                      return e.onSocketClosed();
                    }),
                    c.off(u.EVENT_SHOW, this.GameEventShow, this),
                    c.off(u.EVENT_HIDE, this.GameEventHide, this),
                    c.on(u.EVENT_SHOW, this.GameEventShow, this),
                    c.on(u.EVENT_HIDE, this.GameEventHide, this);
                }),
                (r.GameEventShow = function () {
                  var e = (new Date().getTime() - this.time) / 1e3;
                  (this.time = new Date().getTime()),
                    this.handleBackGameFromInterupt(e);
                }),
                (r.GameEventHide = function () {
                  this.time = new Date().getTime();
                }),
                (r.update = function (e) {
                  this.time = new Date().getTime();
                }),
                (r.onSocketClosed = function () {}),
                (r.onDestroy = function () {
                  l.off(this, m.RefreshMoney),
                    l.off(this, m.SocketClosed),
                    c.off(u.EVENT_SHOW, this.GameEventShow, this),
                    c.off(u.EVENT_HIDE, this.GameEventHide, this);
                }),
                (r.getGameID = function () {
                  return this.gameID;
                }),
                (r.getChipPooling = function () {
                  return null;
                }),
                (r.getVisiblePlayerByID = function (e) {}),
                (r.getVisiblePlayerByUserName = function (e) {}),
                (r.getPlayerByUID = function (e) {}),
                (r.getPreviousGameView = function () {
                  return this.previousGameView;
                }),
                (r.setPreviousGameView = function (e) {
                  this.previousGameView = e;
                }),
                (r.playBgmMusic = function () {}),
                (r.sendBet = function (e, t) {}),
                (r.leaveRoom = function () {
                  l.emit(m.InfoPopupHide),
                    f.runLobby(),
                    (d.is_showing_notice = !1);
                }),
                (r.resetUI = function () {}),
                (r.initUI = function () {}),
                (r.handleRefreshMoney = function (e) {}),
                (r.handleLoggedIn = function () {}),
                (r.handleBackGameFromInterupt = function (e) {}),
                (r.handleMessage = function (e) {}),
                (r.handleLeaveRoomResponse = function (e) {
                  this.leaveRoom();
                }),
                (r.forceLeaveRoom = function () {
                  d.socketState !== v.Unlogged
                    ? (p.getInstance().showLoading(), this.leaveRoom())
                    : this.leaveRoom();
                }),
                (r.show = function () {
                  g.sendRefreshMoney(),
                    this.initUI(),
                    this.back_screen && (this.back_screen.active = !0),
                    this.root && (this.root.active = !0),
                    l.emit(m.InvitePopupHide),
                    l.emit(m.JackpotHide);
                }),
                (r.hide = function () {
                  this.back_screen &&
                    this.root &&
                    this.resetUI &&
                    ((this.back_screen.active = !1),
                    (this.root.active = !1),
                    this.resetUI());
                }),
                (r.isEnd = function () {
                  return !1;
                }),
                t
              );
            })(h))._current = void 0),
            (S = t((G = b).prototype, "back_screen", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = t(G.prototype, "root", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = G))
          ) || I)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BasePuppet.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, n, i, o, s, r, a, c, l;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (s = e.cclegacy),
            (r = e._decorator),
            (a = e.UITransform),
            (c = e.Node),
            (l = e.Component);
        },
      ],
      execute: function () {
        var u, p, v, A, h, y, f, N;
        s._RF.push({}, "a2793TNL1lH8Jd8LZxVwIzk", "BasePuppet", void 0);
        var b = r.ccclass,
          O = r.property;
        e(
          "BasePuppet",
          ((u = b("BasePuppet")),
          (p = O(a)),
          u(
            ((h = t(
              (A = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, s = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    i(t, "base", h, o(t)),
                    i(t, "sizeReverse", y, o(t)),
                    i(t, "isActiveOnly", f, o(t)),
                    i(t, "isNotActiveOnly", N, o(t)),
                    t
                  );
                }
                n(t, e);
                var s = t.prototype;
                return (
                  (s.onLoad = function () {
                    e.prototype.onLoad && e.prototype.onLoad.call(this);
                    var t = this.base;
                    (this.base = void 0), t && this.connect(t);
                  }),
                  (s.connect = function (e) {
                    var t = this;
                    if (!this.base) {
                      this.base = e;
                      var n = this.base.node;
                      if (n) {
                        var i = this.node.getComponent(a),
                          o = this.isNotActiveOnly
                            ? function () {
                                t.node.active = !n.active;
                              }
                            : function () {
                                t.node.active = n.active;
                              },
                          s =
                            this.isActiveOnly || this.isNotActiveOnly
                              ? function () {
                                  return 0;
                                }
                              : function () {
                                  t.node.setPosition(
                                    n.position.x,
                                    n.position.y
                                  ),
                                    (t.node.angle = n.angle),
                                    t.node.setScale(n.scale.x, n.scale.y);
                                },
                          r =
                            this.isActiveOnly || this.isNotActiveOnly
                              ? function () {
                                  return 0;
                                }
                              : function () {
                                  return t.node.setPosition(
                                    n.position.x,
                                    n.position.y
                                  );
                                },
                          l =
                            this.isActiveOnly || this.isNotActiveOnly
                              ? function () {
                                  return 0;
                                }
                              : function () {
                                  t.node.angle = n.angle;
                                },
                          u =
                            this.isActiveOnly || this.isNotActiveOnly
                              ? function () {
                                  return 0;
                                }
                              : function () {
                                  return t.node.setScale(n.scale.x, n.scale.y);
                                },
                          p = c.EventType;
                        if (
                          (p.ACTIVE_IN_HIERARCHY_CHANGED &&
                            n.on(p.ACTIVE_IN_HIERARCHY_CHANGED, o),
                          p.TRANSFORM_CHANGED && n.on(p.TRANSFORM_CHANGED, s),
                          p.POSITION_CHANGED && n.on(p.POSITION_CHANGED, r),
                          p.ROTATION_CHANGED && n.on(p.ROTATION_CHANGED, l),
                          p.SCALE_CHANGED && n.on(p.SCALE_CHANGED, u),
                          o(),
                          s(),
                          r(),
                          l(),
                          u(),
                          this.isActiveOnly || this.isNotActiveOnly)
                        );
                        else if (this.sizeReverse) {
                          var v = function () {
                            return (
                              i &&
                              t.base &&
                              t.base.setContentSize(i.width, i.height)
                            );
                          };
                          this.node.on(c.EventType.SIZE_CHANGED, v), v();
                        } else {
                          var A = function () {
                            return (
                              i &&
                              t.base &&
                              i.setContentSize(t.base.width, t.base.height)
                            );
                          };
                          n.on(c.EventType.SIZE_CHANGED, A), A();
                        }
                        var h = function () {
                          return (
                            i &&
                            t.base &&
                            i.setAnchorPoint(t.base.anchorX, t.base.anchorY)
                          );
                        };
                        n.on(c.EventType.ANCHOR_CHANGED, h), h();
                      }
                    }
                  }),
                  t
                );
              })(l)).prototype,
              "base",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {},
              }
            )),
            (y = t(A.prototype, "sizeReverse", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (f = t(A.prototype, "isActiveOnly", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (N = t(A.prototype, "isNotActiveOnly", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (v = A))
          ) || v)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BauCuaBetEntry.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./StringUtils.ts",
    "./ChipPanel.ts",
    "./BlinkCmp.ts",
    "./GameUtils.ts",
    "./SoundManager.ts",
    "./ChipPooling.ts",
    "./BaseFullScreenGameView.ts",
  ],
  function (t) {
    "use strict";
    var n,
      o,
      e,
      i,
      l,
      r,
      a,
      s,
      u,
      c,
      p,
      h,
      g,
      d,
      f,
      v,
      m,
      y,
      b,
      C,
      _,
      P,
      w,
      R,
      B;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (l = t.cclegacy),
            (r = t._decorator),
            (a = t.Vec3),
            (s = t.Sprite),
            (u = t.Node),
            (c = t.Label),
            (p = t.Button),
            (h = t.UITransform),
            (g = t.Tween),
            (d = t.UIOpacity),
            (f = t.Color),
            (v = t.tween),
            (m = t.log),
            (y = t.Component);
        },
        function (t) {
          b = t.StringUtils;
        },
        function (t) {
          C = t.ChipPanel;
        },
        function (t) {
          _ = t.default;
        },
        function (t) {
          P = t.default;
        },
        function (t) {
          w = t.SoundManager;
        },
        function (t) {
          R = t.ChipPooling;
        },
        function (t) {
          B = t.BaseFullScreenGameView;
        },
      ],
      execute: function () {
        var O,
          E,
          x,
          S,
          I,
          Z,
          F,
          A,
          M,
          T,
          z,
          N,
          k,
          q,
          D,
          V,
          G,
          U,
          W,
          L,
          H,
          X,
          j,
          Q,
          J,
          K,
          Y;
        l._RF.push({}, "45a10zX/0tPn6ZFcQ+vxkXZ", "BauCuaBetEntry", void 0);
        var $ = r.ccclass,
          tt = r.property,
          nt = t("RandomPos", function () {
            (this.pos = a.ZERO), (this.chips = []);
          });
        t(
          "BauCuaBetEntry",
          ((O = $("BauCuaBetEntry")),
          (E = tt(s)),
          (x = tt(u)),
          (S = tt(c)),
          (I = tt(c)),
          (Z = tt(p)),
          (F = tt(C)),
          (A = tt(c)),
          (M = tt(Number)),
          (T = tt(Boolean)),
          (z = tt(u)),
          (N = tt(u)),
          (k = tt(R)),
          O(
            ((V = n(
              (D = (function (t) {
                function n() {
                  for (
                    var n, o = arguments.length, l = new Array(o), r = 0;
                    r < o;
                    r++
                  )
                    l[r] = arguments[r];
                  return (
                    (n = t.call.apply(t, [this].concat(l)) || this),
                    e(n, "spr_noglow", V, i(n)),
                    e(n, "glow", G, i(n)),
                    e(n, "lbl_total_bet", U, i(n)),
                    e(n, "lbl_my_bet", W, i(n)),
                    e(n, "button", L, i(n)),
                    e(n, "chipPanel", H, i(n)),
                    e(n, "lbl_rate", X, i(n)),
                    e(n, "eid", j, i(n)),
                    e(n, "useShortFormat", Q, i(n)),
                    e(n, "random_pos", J, i(n)),
                    e(n, "dealer_chip_pos", K, i(n)),
                    e(n, "chipPooling", Y, i(n)),
                    (n.currentBet = 0),
                    (n.listBetCoin = []),
                    (n.blink = null),
                    (n.totalBet = 0),
                    (n.random_chip_data = []),
                    n
                  );
                }
                o(n, t);
                var l = n.prototype;
                return (
                  (l.onLoad = function () {
                    var t,
                      n,
                      o = this;
                    this.blink &&
                      (this.blink =
                        (null == (t = this.glow)
                          ? void 0
                          : t.getComponent(_)) || null),
                      null == (n = this.button) ||
                        n.node.on("click", function () {
                          o.sendBet();
                        });
                  }),
                  (l.createRandomChipData = function () {
                    var t, n, o, e;
                    if (null != this.random_pos) {
                      this.random_chip_data = [];
                      for (
                        var i =
                            ((null == (t = this.random_pos.getComponent(h))
                              ? void 0
                              : t.getBoundingBox().xMin) || 0) + 30,
                          l =
                            ((null == (n = this.random_pos.getComponent(h))
                              ? void 0
                              : n.getBoundingBox().xMax) || 0) + 30,
                          r =
                            ((null == (o = this.random_pos.getComponent(h))
                              ? void 0
                              : o.getBoundingBox().yMin) || 0) + 20,
                          s =
                            ((null == (e = this.random_pos.getComponent(h))
                              ? void 0
                              : e.getBoundingBox().yMax) || 0) + 20,
                          u = Math.abs(l - i),
                          c = Math.abs(s - r),
                          p = 0;
                        p < 5;
                        p++
                      )
                        for (var g = i + p * (u / 5), d = 0; d < 5; d++) {
                          var f = new a(g, r + d * (c / 5), 0),
                            v = new nt();
                          (v.pos = f),
                            (v.chips = []),
                            this.random_chip_data.push(v);
                        }
                    }
                  }),
                  (l.getRandomPosition = function () {
                    var t, n;
                    if (null == this.random_pos) return a.ZERO;
                    var o,
                      e,
                      i = this.random_pos.position.x,
                      l = this.random_pos.position.y,
                      r =
                        (null == (t = this.random_pos.getComponent(h))
                          ? void 0
                          : t.contentSize.width) || 0,
                      s =
                        (null == (n = this.random_pos.getComponent(h))
                          ? void 0
                          : n.contentSize.height) || 0;
                    return (
                      (o = P.getRandomInt(-r / 2, r / 2)),
                      (e = P.getRandomInt(-s / 2, s / 2)),
                      new a((i += o), (l += e), 0)
                    );
                  }),
                  (l.getRandomPosition2 = function () {
                    var t,
                      n,
                      o = 0,
                      e = 0;
                    return (
                      (t = P.getRandomInt(-37.5, 37.5)),
                      (n = P.getRandomInt(-37.5, 37.5)),
                      new a((o += t), (e += n), 0)
                    );
                  }),
                  (l.sendBet = function () {
                    var t,
                      n,
                      o =
                        (null == (t = this.chipPanel)
                          ? void 0
                          : t.getSelectedBetValue()) || 0;
                    o <= 0 ||
                      null == (n = B.getView()) ||
                      n.sendBet(this.eid, o);
                  }),
                  (l.setRate = function (t) {
                    null != this.lbl_rate &&
                      ((this.lbl_rate.node.active = !0),
                      (this.lbl_rate.string = "1:" + t));
                  }),
                  (l.hideAll = function () {
                    var t, n;
                    g.stopAllByTarget(this.node),
                      this.listBetCoin.forEach(function (t) {
                        g.stopAllByTarget(t),
                          g.stopAllByTarget(t.getComponent(d) || void 0);
                      }),
                      (this.listBetCoin = []),
                      this.createRandomChipData(),
                      (this.currentBet = 0),
                      (this.totalBet = 0),
                      null != (t = this.lbl_total_bet) &&
                        t.node.parent &&
                        (this.lbl_total_bet.node.parent.active = !1),
                      null != (n = this.lbl_my_bet) &&
                        n.node.parent &&
                        (this.lbl_my_bet.node.parent.active = !1),
                      this.showGlow(!1);
                  }),
                  (l.resetUI = function () {
                    this.showGlow(!1);
                  }),
                  (l.gray = function () {
                    this.spr_noglow &&
                      (this.spr_noglow.color = new f(150, 150, 150, 255));
                  }),
                  (l.ungray = function () {
                    this.spr_noglow &&
                      (this.spr_noglow.color = new f(255, 255, 255, 255));
                  }),
                  (l.showGlow = function (t) {
                    var n, o;
                    (void 0 === t && (t = !0), null == this.blink) &&
                      (this.blink =
                        (null == (n = this.glow)
                          ? void 0
                          : n.getComponent(_)) || null);
                    t && (null == (o = this.blink) || o.run());
                    this.ungray(), this.glow && (this.glow.active = t);
                  }),
                  (l.showGlowOnce = function (t) {
                    var n, o;
                    (void 0 === t && (t = !0), null == this.blink) &&
                      (this.blink =
                        (null == (n = this.glow)
                          ? void 0
                          : n.getComponent(_)) || null);
                    t && (null == (o = this.blink) || o.runOnce());
                    this.ungray(), this.glow && (this.glow.active = t);
                  }),
                  (l.isGlowing = function () {
                    var t;
                    return null == (t = this.glow) ? void 0 : t.active;
                  }),
                  (l.setTotalBet = function (t) {
                    var n;
                    (this.totalBet = t),
                      null != (n = this.lbl_total_bet) &&
                        n.node.parent &&
                        (this.lbl_total_bet.node.parent.active = t > 0),
                      this.lbl_total_bet &&
                        (this.lbl_total_bet.string = this.useShortFormat
                          ? b.formatMoneyNumber(t)
                          : b.formatNumber(t));
                  }),
                  (l.setTotalBet2 = function (t) {
                    var n;
                    (this.totalBet = t),
                      null != (n = this.lbl_total_bet) &&
                        n.node.parent &&
                        (this.lbl_total_bet.node.parent.active = !0),
                      this.lbl_total_bet &&
                        (this.lbl_total_bet.string = this.useShortFormat
                          ? b.formatMoneyNumber(t)
                          : b.formatNumber(t));
                  }),
                  (l.getTotalBet = function () {
                    return this.totalBet;
                  }),
                  (l.setCurrentBet = function (t) {
                    var n;
                    (this.currentBet += t),
                      null != (n = this.lbl_my_bet) &&
                        n.node.parent &&
                        (this.lbl_my_bet.node.parent.active = !0),
                      this.lbl_my_bet &&
                        (this.lbl_my_bet.string = this.useShortFormat
                          ? b.formatMoneyNumber(this.currentBet)
                          : b.formatNumber(this.currentBet));
                  }),
                  (l.getCurrentBet = function () {
                    return this.currentBet;
                  }),
                  (l.setCurrentBet2 = function (t) {
                    var n;
                    (this.currentBet = t),
                      null != (n = this.lbl_my_bet) &&
                        n.node.parent &&
                        (this.lbl_my_bet.node.parent.active = t > 0),
                      this.lbl_my_bet &&
                        (this.lbl_my_bet.string = this.useShortFormat
                          ? b.formatMoneyNumber(this.currentBet)
                          : b.formatNumber(this.currentBet));
                  }),
                  (l.getEID = function () {
                    return this.eid;
                  }),
                  (l.addCoin = function (t) {
                    this.listBetCoin.push(t);
                  }),
                  (l.getChipPooling = function () {
                    return this.chipPooling;
                  }),
                  (l.getChip = function (t) {
                    var n,
                      o,
                      e = {},
                      i =
                        null == (n = this.chipPooling) ? void 0 : n.getChip2(t),
                      l = a.ZERO;
                    if (i) l = this.getFixedRandomPositionAtEntry(i);
                    else {
                      var r = this.getLastestChipInRandomPosition();
                      (i = r.chip), (l = r.pos || a.ZERO);
                    }
                    return (
                      i && (null == (o = this.chipPooling) || o.topOnChip(i)),
                      (e.newCoin = i),
                      (e.desPos = l),
                      e
                    );
                  }),
                  (l.getRandomChip = function () {
                    var t,
                      n,
                      o = {},
                      e =
                        null == (t = this.chipPooling)
                          ? void 0
                          : t.getRandomChip2(),
                      i = a.ZERO;
                    if (e) i = this.getFixedRandomPositionAtEntry(e);
                    else {
                      var l = this.getLastestChipInRandomPosition();
                      (e = l.chip), (i = l.pos || a.ZERO);
                    }
                    return (
                      e && (null == (n = this.chipPooling) || n.topOnChip(e)),
                      (o.newCoin = e),
                      (o.desPos = i),
                      o
                    );
                  }),
                  (l.getFixedRandomPositionAtEntry = function (t) {
                    var n = this.random_chip_data.filter(function (t) {
                        return t.chips.length < 2;
                      }),
                      o = n[P.getRandomInt(0, n.length)];
                    return o
                      ? (this.addCoin(t),
                        o.chips.push(t),
                        new a(o.pos.x, o.pos.y, 0))
                      : a.ZERO;
                  }),
                  (l.getLastestChipInRandomPosition = function () {
                    var t = this.random_chip_data.filter(function (t) {
                        return (
                          t.chips.length > 1 &&
                          0 ==
                            t.chips.filter(function (t) {
                              return "flying" == t.name;
                            }).length
                        );
                      }),
                      n = t[P.getRandomInt(0, t.length)],
                      o = { chip: null };
                    if (((o.pos = a.ZERO), n)) {
                      var e = n.chips.shift();
                      (o.chip = e),
                        (o.pos = new a(n.pos.x, n.pos.y, 0)),
                        e && n.chips.push(e);
                    }
                    return o;
                  }),
                  (l.payChipsForDealer = function (t, n, o) {
                    for (
                      var e = this,
                        i = t ? this.listBetCoin : [],
                        l = function (t) {
                          var l = t,
                            r = i[l];
                          if (!r) return "continue";
                          g.stopAllByTarget(r),
                            g.stopAllByTarget(
                              (null == r ? void 0 : r.getComponent(d)) || void 0
                            );
                          var s = new a(
                            e.random_pos
                              ? e.random_pos.position
                              : e.node.position
                          );
                          v(r)
                            .sequence(
                              v().call(function () {
                                0 == t && o && w.getInstance().playSfx(n);
                              }),
                              v()
                                .to(0.3, { position: s })
                                .call(function () {}),
                              v().delay(0.2),
                              v().call(function () {
                                var t = null == r ? void 0 : r.getComponent(d);
                                v(t).to(0.4, { opacity: 0 }).start();
                              }),
                              v()
                                .delay(0.4)
                                .call(function () {
                                  var t,
                                    n = new a(r.position);
                                  (n.y = s.y + 3 * l),
                                    r.setPosition(n),
                                    r.setSiblingIndex(
                                      ((null == (t = r.parent)
                                        ? void 0
                                        : t.children.length) || 0) - 1
                                    );
                                }),
                              v()
                                .delay(0.1)
                                .call(function () {
                                  var e = r.getComponent(d);
                                  e && (e.opacity = 1),
                                    0 == t && o && w.getInstance().playSfx(n),
                                    v(e).to(0.7, { opacity: 255 }).start();
                                }),
                              v()
                                .delay(0.7)
                                .call(function () {
                                  0 == t && o && w.getInstance().playSfx(n);
                                })
                                .to(0.5, {
                                  position: e.dealer_chip_pos
                                    ? e.dealer_chip_pos.position
                                    : a.ZERO,
                                }),
                              v().call(function () {
                                var t = r.getComponent(d);
                                v(t).to(0.5, { opacity: 0 }).start();
                              })
                            )
                            .start();
                        },
                        r = 0;
                      r < i.length;
                      r++
                    )
                      l(r);
                  }),
                  (l.getRandomPositionAtEntry = function () {
                    var t = 0,
                      n = 0,
                      o = P.getRandomInt(-75, 75),
                      e = P.getRandomInt(-50, 50);
                    return new a((t += o), (n += e), 0);
                  }),
                  (l.payChipsForHidden = function (t, n) {
                    var o = this;
                    g.stopAllByTarget(this.node);
                    v(this.node)
                      .delay(2.7)
                      .call(function () {
                        for (
                          var n = 0,
                            e = function (e) {
                              var i = o.listBetCoin[e];
                              if (!i) return "continue";
                              n < 80
                                ? v(i)
                                    .sequence(
                                      v().to(
                                        1,
                                        { position: o.getRandomPosition2() },
                                        { easing: "expoOut" }
                                      ),
                                      v().delay(0.5 + 0.03 * n),
                                      v().call(function () {
                                        var t = i.getComponent(d);
                                        g.stopAllByTarget(t || void 0),
                                          v(t)
                                            .to(
                                              0.4,
                                              { opacity: 0 },
                                              { easing: "expoIn" }
                                            )
                                            .start();
                                      }),
                                      v()
                                        .to(0.4, { position: new a(t) })
                                        .to(0.2, { scale: a.ZERO })
                                        .call(function () {
                                          i.active = !1;
                                        })
                                    )
                                    .start()
                                : v(i)
                                    .sequence(
                                      v().to(
                                        0.5,
                                        { position: a.ZERO },
                                        { easing: "expoOut" }
                                      ),
                                      v().call(function () {
                                        (i.scale = a.ZERO), (i.active = !1);
                                      })
                                    )
                                    .start();
                              n++;
                            },
                            i = o.listBetCoin.length - 1;
                          i >= 0;
                          i--
                        )
                          e(i);
                      })
                      .start();
                  }),
                  (l.payChipsForPlayersByUName = function (t, n) {
                    var o = this;
                    try {
                      var e,
                        i = B.getView(),
                        l =
                          null == i ? void 0 : i.getVisiblePlayerByUserName(t);
                      if (null == l) return;
                      var r = [],
                        u = l.shakeDiskCoinsPath.filter(function (t) {
                          return t.eid == o.eid;
                        });
                      if (null == u || null == u || u.length <= 0)
                        return void m("No shake coin!");
                      null == (e = u[0]) ||
                        e.coins.forEach(function (t) {
                          var n,
                            o,
                            e,
                            l,
                            u =
                              null == i || null == (n = i.getChipPooling())
                                ? void 0
                                : n.getPayChip(
                                    (null == (o = t.getComponent(s)) ||
                                    null == (e = o.spriteFrame)
                                      ? void 0
                                      : e.name) || ""
                                  );
                          u &&
                            (null == i ||
                              null == (l = i.getChipPooling()) ||
                              l.topOnChip(u),
                            u.setPosition(
                              new a(t.position.x, t.position.y, t.position.z)
                            ),
                            (u.active = !0),
                            r.push(u));
                          t.active = !1;
                        });
                      for (var c = [], p = 0; p < r.length; p++) {
                        var g,
                          d,
                          f,
                          y,
                          b,
                          C =
                            null == i || null == (g = i.getChipPooling())
                              ? void 0
                              : g.getPayChip(
                                  (null == (d = r[p]) ||
                                  null == (f = d.getComponent(s)) ||
                                  null == (y = f.spriteFrame)
                                    ? void 0
                                    : y.name) || ""
                                );
                        if (C)
                          null == i ||
                            null == (b = i.getChipPooling()) ||
                            b.topOnChip(C),
                            C.setPosition(a.ZERO),
                            (C.active = !1),
                            c.push(C);
                      }
                      v(l.node)
                        .sequence(
                          v(l.node).delay(2.7),
                          v(l.node).call(function () {
                            v(l.node)
                              .sequence(
                                v(l.node).call(function () {
                                  for (
                                    var t,
                                      e,
                                      i,
                                      s,
                                      u,
                                      c,
                                      p,
                                      g =
                                        null == l ||
                                        null == (t = l.getMoneyPositions()[0])
                                          ? void 0
                                          : t.position,
                                      d =
                                        g &&
                                        (null ==
                                          (e = l.getIconMoneyPosition()) ||
                                        null == (i = e.parent) ||
                                        null == (s = i.getComponent(h))
                                          ? void 0
                                          : s.convertToWorldSpaceAR(g)),
                                      f =
                                        (null == o.getChipPooling()
                                          ? g
                                          : null == (u = o.getChipPooling()) ||
                                            null == (c = u.node.parent) ||
                                            null == (p = c.getComponent(h))
                                          ? void 0
                                          : p.convertToNodeSpaceAR(
                                              d || a.ZERO
                                            )) || a.ZERO,
                                      m = 0;
                                    m < r.length;
                                    m++
                                  ) {
                                    var y = r[m];
                                    if (y)
                                      (y.active = !0),
                                        v(y)
                                          .call(function () {
                                            w.getInstance().playSfx(n);
                                          })
                                          .to(
                                            0.9,
                                            {
                                              position: new a(
                                                f.x,
                                                f.y + 3 * m,
                                                f.z
                                              ),
                                            },
                                            { easing: "expoOut" }
                                          )
                                          .start();
                                  }
                                }),
                                v(l.node).delay(0.5),
                                v(l.node).call(function () {
                                  try {
                                    for (
                                      var t,
                                        e,
                                        i,
                                        r,
                                        s,
                                        u,
                                        p,
                                        g =
                                          null == l ||
                                          null == (t = l.getMoneyPositions()[1])
                                            ? void 0
                                            : t.position,
                                        d =
                                          (g &&
                                            (null ==
                                              (e = l.getIconMoneyPosition()) ||
                                            null == (i = e.parent) ||
                                            null == (r = i.getComponent(h))
                                              ? void 0
                                              : r.convertToWorldSpaceAR(g))) ||
                                          a.ZERO,
                                        f =
                                          (null == o.getChipPooling()
                                            ? g
                                            : null ==
                                                (s = o.getChipPooling()) ||
                                              null == (u = s.node.parent) ||
                                              null == (p = u.getComponent(h))
                                            ? void 0
                                            : p.convertToNodeSpaceAR(d)) ||
                                          a.ZERO,
                                        y = 0;
                                      y < c.length;
                                      y++
                                    ) {
                                      var b = c[y];
                                      if (b)
                                        if (((b.active = !0), null != b))
                                          try {
                                            v(b)
                                              .call(function () {
                                                w.getInstance().playSfx(n);
                                              })
                                              .to(
                                                0.9,
                                                {
                                                  position: new a(
                                                    f.x,
                                                    f.y + 3 * y,
                                                    f.z
                                                  ),
                                                },
                                                { easing: "expoOut" }
                                              )
                                              .start();
                                          } catch (t) {}
                                        else m("can't find coin");
                                    }
                                  } catch (t) {
                                    m(
                                      "some error occur in payChipsForPlayers1"
                                    );
                                  }
                                }),
                                v(l.node).delay(1.5),
                                v(l.node).call(function () {
                                  try {
                                    for (
                                      var t,
                                        n,
                                        e,
                                        i,
                                        s,
                                        u,
                                        p,
                                        g =
                                          (null ==
                                          (t = l.getIconMoneyPosition())
                                            ? void 0
                                            : t.position) || a.ZERO,
                                        d =
                                          (null ==
                                            (n = l.getIconMoneyPosition()) ||
                                          null == (e = n.parent) ||
                                          null == (i = e.getComponent(h))
                                            ? void 0
                                            : i.convertToWorldSpaceAR(g)) ||
                                          a.ZERO,
                                        f =
                                          (null == o.getChipPooling()
                                            ? g
                                            : null ==
                                                (s = o.getChipPooling()) ||
                                              null == (u = s.node.parent) ||
                                              null == (p = u.getComponent(h))
                                            ? void 0
                                            : p.convertToNodeSpaceAR(d)) ||
                                          a.ZERO,
                                        y = 0;
                                      y < c.length;
                                      y++
                                    ) {
                                      var b = c[y];
                                      if (b)
                                        (b.active = !0),
                                          v(b)
                                            .sequence(
                                              v().call(function () {}),
                                              v()
                                                .to(
                                                  0.2,
                                                  { position: new a(f) },
                                                  { easing: "linear" }
                                                )
                                                .to(0.2, { scale: a.ZERO })
                                            )
                                            .start();
                                    }
                                    for (var C = 0; C < r.length; C++) {
                                      var _ = r[C];
                                      v(_)
                                        .sequence(
                                          v().call(function () {}),
                                          v()
                                            .to(
                                              0.2,
                                              { position: new a(f) },
                                              { easing: "linear" }
                                            )
                                            .to(0.2, { scale: a.ZERO })
                                        )
                                        .start();
                                    }
                                  } catch (t) {
                                    m(
                                      "some error occur in payChipsForPlayers2"
                                    );
                                  }
                                })
                              )
                              .start();
                          }),
                          v(l.node).call(function () {
                            l.showWinFx(0.9, 4, !1);
                          })
                        )
                        .start();
                    } catch (t) {
                      m("some error occur in payChipsForPlayers4");
                    }
                  }),
                  (l.payChipsForPlayers = function (t, n) {
                    var o = this;
                    try {
                      var e,
                        i = B.getView(),
                        l = null == i ? void 0 : i.getVisiblePlayerByID(t);
                      if (null == l) return;
                      var r = [],
                        u = l.shakeDiskCoinsPath.filter(function (t) {
                          return t.eid == o.eid;
                        });
                      if (null == u || null == u || u.length <= 0)
                        return void m("No shake coin!");
                      null == (e = u[0]) ||
                        e.coins.forEach(function (t) {
                          var n,
                            o,
                            e,
                            l,
                            u =
                              null == i || null == (n = i.getChipPooling())
                                ? void 0
                                : n.getPayChip(
                                    (null == (o = t.getComponent(s)) ||
                                    null == (e = o.spriteFrame)
                                      ? void 0
                                      : e.name) || ""
                                  );
                          u &&
                            (null == i ||
                              null == (l = i.getChipPooling()) ||
                              l.topOnChip(u),
                            u.setPosition(
                              new a(t.position.x, t.position.y, t.position.z)
                            ),
                            r.push(u));
                          t.active = !1;
                        });
                      for (var c = [], p = 0; p < r.length; p++) {
                        var g,
                          d,
                          f,
                          y,
                          b,
                          C =
                            null == i || null == (g = i.getChipPooling())
                              ? void 0
                              : g.getPayChip(
                                  (null == (d = r[p]) ||
                                  null == (f = d.getComponent(s)) ||
                                  null == (y = f.spriteFrame)
                                    ? void 0
                                    : y.name) || ""
                                );
                        if (C)
                          null == i ||
                            null == (b = i.getChipPooling()) ||
                            b.topOnChip(C),
                            C.setPosition(a.ZERO),
                            (C.active = !1),
                            c.push(C);
                      }
                      v(l.node)
                        .sequence(
                          v().delay(2.7),
                          v().call(function () {
                            v(l.node)
                              .sequence(
                                v().delay(0.5),
                                v().call(function () {
                                  try {
                                    for (
                                      var t,
                                        e,
                                        i,
                                        r,
                                        s,
                                        u,
                                        p,
                                        g =
                                          null == l ||
                                          null == (t = l.getMoneyPositions()[1])
                                            ? void 0
                                            : t.position,
                                        d =
                                          (g &&
                                            (null ==
                                              (e = l.getIconMoneyPosition()) ||
                                            null == (i = e.parent) ||
                                            null == (r = i.getComponent(h))
                                              ? void 0
                                              : r.convertToWorldSpaceAR(g))) ||
                                          a.ZERO,
                                        f =
                                          (null == o.getChipPooling()
                                            ? g
                                            : null ==
                                                (s = o.getChipPooling()) ||
                                              null == (u = s.node.parent) ||
                                              null == (p = u.getComponent(h))
                                            ? void 0
                                            : p.convertToNodeSpaceAR(d)) ||
                                          a.ZERO,
                                        y = 0;
                                      y < c.length;
                                      y++
                                    ) {
                                      var b = c[y];
                                      if (b)
                                        if (((b.active = !0), null != b))
                                          try {
                                            v(b)
                                              .call(function () {
                                                w.getInstance().playSfx(n);
                                              })
                                              .to(
                                                0.9,
                                                {
                                                  position: new a(
                                                    f.x,
                                                    f.y + 3 * y,
                                                    f.z
                                                  ),
                                                },
                                                { easing: "expoOut" }
                                              )
                                              .start();
                                          } catch (t) {}
                                        else m("can't find coin");
                                    }
                                  } catch (t) {
                                    m(
                                      "some error occur in payChipsForPlayers1"
                                    );
                                  }
                                }),
                                v().delay(1.5),
                                v().call(function () {
                                  try {
                                    for (
                                      var t,
                                        n,
                                        e,
                                        i,
                                        s,
                                        u,
                                        p,
                                        g =
                                          (null ==
                                          (t = l.getIconMoneyPosition())
                                            ? void 0
                                            : t.position) || a.ZERO,
                                        d =
                                          (null ==
                                            (n = l.getIconMoneyPosition()) ||
                                          null == (e = n.parent) ||
                                          null == (i = e.getComponent(h))
                                            ? void 0
                                            : i.convertToWorldSpaceAR(g)) ||
                                          a.ZERO,
                                        f =
                                          (null == o.getChipPooling()
                                            ? g
                                            : null ==
                                                (s = o.getChipPooling()) ||
                                              null == (u = s.node.parent) ||
                                              null == (p = u.getComponent(h))
                                            ? void 0
                                            : p.convertToNodeSpaceAR(d)) ||
                                          a.ZERO,
                                        y = 0;
                                      y < c.length;
                                      y++
                                    ) {
                                      var b = c[y];
                                      if (b)
                                        (b.active = !0),
                                          v(b)
                                            .sequence(
                                              v().call(function () {}),
                                              v()
                                                .to(
                                                  0.2,
                                                  { position: new a(f) },
                                                  { easing: "linear" }
                                                )
                                                .to(0.2, { scale: a.ZERO })
                                            )
                                            .start();
                                    }
                                    for (var C = 0; C < r.length; C++) {
                                      var _ = r[C];
                                      v(_)
                                        .sequence(
                                          v().call(function () {}),
                                          v()
                                            .to(
                                              0.2,
                                              { position: new a(f) },
                                              { easing: "linear" }
                                            )
                                            .to(0.2, { scale: a.ZERO })
                                        )
                                        .start();
                                    }
                                  } catch (t) {
                                    m(
                                      "some error occur in payChipsForPlayers2"
                                    );
                                  }
                                })
                              )
                              .start();
                          }),
                          v().call(function () {
                            l.showWinFx(0.9, 4, !1);
                          }),
                          v().call(function () {
                            try {
                              for (
                                var t,
                                  e,
                                  i,
                                  s,
                                  u,
                                  c,
                                  p,
                                  g =
                                    null == l ||
                                    null == (t = l.getMoneyPositions()[0])
                                      ? void 0
                                      : t.position,
                                  d =
                                    (g &&
                                      (null == (e = l.getIconMoneyPosition()) ||
                                      null == (i = e.parent) ||
                                      null == (s = i.getComponent(h))
                                        ? void 0
                                        : s.convertToWorldSpaceAR(g))) ||
                                    a.ZERO,
                                  f =
                                    (null == o.getChipPooling()
                                      ? g
                                      : null == (u = o.getChipPooling()) ||
                                        null == (c = u.node.parent) ||
                                        null == (p = c.getComponent(h))
                                      ? void 0
                                      : p.convertToNodeSpaceAR(d)) || a.ZERO,
                                  y = 0;
                                y < r.length;
                                y++
                              ) {
                                var b = r[y];
                                if (b)
                                  (b.active = !0),
                                    v(b)
                                      .call(function () {
                                        w.getInstance().playSfx(n);
                                      })
                                      .to(
                                        0.9,
                                        {
                                          position: new a(
                                            f.x,
                                            f.y + 3 * y,
                                            f.z
                                          ),
                                        },
                                        { easing: "expoOut" }
                                      )
                                      .start();
                              }
                            } catch (t) {
                              m("some error occur in payChipsForPlayers3");
                            }
                          })
                        )
                        .start();
                    } catch (t) {
                      m("some error occur in payChipsForPlayers4");
                    }
                  }),
                  n
                );
              })(y)).prototype,
              "spr_noglow",
              [E],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (G = n(D.prototype, "glow", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = n(D.prototype, "lbl_total_bet", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = n(D.prototype, "lbl_my_bet", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = n(D.prototype, "button", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = n(D.prototype, "chipPanel", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (X = n(D.prototype, "lbl_rate", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = n(D.prototype, "eid", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (Q = n(D.prototype, "useShortFormat", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (J = n(D.prototype, "random_pos", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (K = n(D.prototype, "dealer_chip_pos", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = n(D.prototype, "chipPooling", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = D))
          ) || q)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigLoadingView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SoundManager.ts",
    "./TransitionFadeScreen.ts",
    "./GameConfigManager.ts",
    "./GamePlatformManager.ts",
    "./HttpManager.ts",
    "./EventManager.ts",
    "./State.ts",
    "./SocketManager.ts",
    "./PersistManager.ts",
    "./Define.ts",
    "./Config.ts",
    "./TrackingManager.ts",
    "./TrackingDefine.ts",
  ],
  function (n) {
    "use strict";
    var e,
      t,
      o,
      i,
      a,
      r,
      s,
      l,
      u,
      c,
      g,
      d,
      f,
      m,
      p,
      _,
      v,
      I,
      h,
      L,
      C,
      E,
      S,
      w,
      G,
      M;
    return {
      setters: [
        function (n) {
          (e = n.applyDecoratedDescriptor),
            (t = n.inheritsLoose),
            (o = n.initializerDefineProperty),
            (i = n.assertThisInitialized);
        },
        function (n) {
          (a = n.cclegacy),
            (r = n._decorator),
            (s = n.Node),
            (l = n.systemEvent),
            (u = n.sys),
            (c = n.error),
            (g = n.Component);
        },
        function (n) {
          d = n.SoundManager;
        },
        function (n) {
          f = n.TransitionFadeScreen;
        },
        function (n) {
          m = n.GameConfigManager;
        },
        function (n) {
          p = n.GamePlatformManager;
        },
        function (n) {
          _ = n.httpManager;
        },
        function (n) {
          (v = n.eventManager), (I = n.EventKey);
        },
        function (n) {
          (h = n.state), (L = n.NetworkState);
        },
        function (n) {
          C = n.socketManager;
        },
        function (n) {
          E = n.PersistManager;
        },
        function (n) {
          S = n.StorageKey;
        },
        function (n) {
          w = n.config;
        },
        function (n) {
          G = n.tracking;
        },
        function (n) {
          M = n.TRACKING_ACTION_TYPE;
        },
      ],
      execute: function () {
        var R, T, D, N, y, U;
        a._RF.push({}, "48867HKOpJFqYHolLReZAPC", "BigLoadingView", void 0);
        var b = r.ccclass,
          k = r.property;
        n(
          "BigLoadingView",
          ((R = b("BigLoadingView")),
          (T = k(s)),
          R(
            (((U = (function (n) {
              function e() {
                for (
                  var e, t = arguments.length, a = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  a[r] = arguments[r];
                return (
                  (e = n.call.apply(n, [this].concat(a)) || this),
                  o(e, "root", y, i(e)),
                  (e.lastLoggedIn = !1),
                  (e.IS_CHEAT = !1),
                  (e.url_1 = "./config/config_ios.json"),
                  (e.url_2 = "https://pastebin.com/raw/mN2YTP5D"),
                  e
                );
              }
              t(e, n),
                (e.getInstance = function () {
                  return e.instance;
                });
              var a = e.prototype;
              return (
                (a.isShowing = function () {
                  var n;
                  return null == (n = this.root) ? void 0 : n.active;
                }),
                (a.onLoad = function () {
                  (e.instance = this),
                    localStorage.removeItem("LoggedUsername"),
                    localStorage.removeItem("LoggedPassword");
                }),
                (a.onDestroy = function () {
                  (e.instance = null), l.off("GAME_INITED");
                }),
                (a.load = function () {
                  var n = this;
                  d.getInstance().reload(),
                    v.emitLast(I.MusicPlay),
                    E.getInstance()
                      ? this.reLogin()
                      : this.loadConfig(function () {
                          (n.lastLoggedIn && !h.isLobbyLoggedIn) || n.hide(!1);
                        });
                }),
                (a.GetPhishingDomain = function () {
                  return w.phishing_domain;
                }),
                (a.getDomain = function (n) {
                  var e = this;
                  _.sendGET({
                    url: this.url_1 + "?_=" + new Date().getTime(),
                    onCompleted: function (t) {
                      null != t && null != t
                        ? (localStorage.setItem("X_GAME_CONFIG", t), n(t))
                        : _.sendGET({
                            url: e.url_2 + "?_=" + new Date().getTime(),
                            onCompleted: function (e) {
                              null != e &&
                                null != e &&
                                (localStorage.setItem("X_GAME_CONFIG", e),
                                n(e));
                            },
                          });
                    },
                  });
                }),
                (a.showIntro = function () {
                  this.root && (this.root.active = !1), this.loadConfig();
                }),
                (a.reLogin = function () {
                  this.fadeout(),
                    h.socketState == L.Logged &&
                      (v.emit(I.CallLobbyLoadUserInfo),
                      v.emit(I.CallLobbyOnLoggedIn, !1),
                      C.sendRefreshMoney()),
                    this.loadConfig();
                }),
                (a.hide = function (n, e) {
                  var t;
                  if (
                    (void 0 === e && (e = function () {}),
                    null == (t = f.getInstance()) ||
                      t.fadeOutFix(function () {}, 0.3),
                    v.emitLast(I.MusicPlay),
                    this.root && (this.root.active = !1),
                    l.emit("GAME_INITED"),
                    e(),
                    u.isBrowser)
                  ) {
                    var o = document.getElementById("spinner");
                    o && (o.style.display = "none");
                  }
                }),
                (a.fadeout = function () {
                  this.root && (this.root.active = !1);
                }),
                (a.DIS_URL = function () {
                  var n = localStorage.getItem(S.GameConfig) || "";
                  return (
                    JSON.parse(n).host_domain +
                    "distributor?command=regdis&bundle=%bundle%&appName=%appName%"
                  );
                }),
                (a.CONFIG_URL = function () {
                  var n = localStorage.getItem(S.GameConfig) || "";
                  return (
                    JSON.parse(n).host_domain +
                    "acs?command=get-bid&distId=%distId%&versionId=%versionId%&platformId=%platformId%&appId=%appId%"
                  );
                }),
                (a.loadConfig = function (n) {
                  var e = this;
                  void 0 === n && (n = function () {});
                  var t = this.DIS_URL(),
                    o = m.bundleID,
                    i = m.appName();
                  (t = (t = t.replace("%bundle%", o)).replace("%appName%", i)),
                    G.sendTracking(M.REQ_GAME_CONFIG),
                    _.sendGET({
                      url: t,
                      useLoading: !1,
                      showNoti: !1,
                      onCompleted: function (t) {
                        G.sendTracking(M.RECEIVED_GAME_CONFIG, { status: !0 });
                        var o = JSON.parse(t).data,
                          i = o.distId,
                          a = o.applicationId;
                        (m.disID = i), (m.appID = a);
                        var r = e.CONFIG_URL();
                        (r = (r = (r = (r = r.replace(
                          "%versionId%",
                          m.gameConfigVersion.toString()
                        )).replace("%distId%", i)).replace(
                          "%appId%",
                          a
                        )).replace(
                          "%platformId%",
                          p.getPlatformID().toString()
                        )),
                          G.sendTracking(M.REQ_GAME_ACS),
                          _.sendGET({
                            url: r,
                            useLoading: !1,
                            showNoti: !1,
                            onCompleted: function (t) {
                              e.parseConfig(t, n),
                                G.sendTracking(M.RECEIVED_GAME_CONFIG, {
                                  status: !0,
                                });
                            },
                            onError: function () {
                              return G.sendTracking(M.RECEIVED_GAME_CONFIG, {
                                status: !1,
                              });
                            },
                          });
                      },
                      onError: function () {
                        return G.sendTracking(M.RECEIVED_GAME_CONFIG, {
                          status: !1,
                        });
                      },
                    });
                }),
                (a.parseConfig = function (n, e) {
                  var t = this;
                  void 0 === e && (e = function () {});
                  var o = JSON.parse(n),
                    i = o.data;
                  if (0 == o.status) {
                    var a = i.config;
                    (m.helpURL = a.gameRulesUrl),
                      (m.liveChatURL = a.liveChatUrl),
                      (m.fanpageURL = a.fanpage),
                      this.setConfig(a);
                    var r,
                      s = a.hotlines;
                    if (null != s && null != s)
                      m.hotlineNumber =
                        s.length > 0 && null != (r = s[0]) ? r : "";
                    var l = a.servers;
                    if (null != l && null != l) {
                      var c = l[0].websocketEndpoint;
                      m.MainWSURL = l.length > 0 ? c : "";
                    }
                    var g = a.miniGameServer;
                    null != g &&
                      null != g &&
                      (m.MiniWSURL = g.websocketEndpoint);
                    var d = a.livestreamConfigs || {},
                      f = d.tx_livestream_ws;
                    null != f && null != f && (m.txLiveStreamWsUrl = f);
                    var p = d.xd_livestream_ws;
                    null != p && null != p && (m.xdLiveStreamWsUrl = p),
                      (m.getStreamTokenUrl = d.get_stream_token_url || "");
                    var _ = a.shakedisk_ws_url;
                    null != _ &&
                      null != _ &&
                      ((m.XDTLWSURL = _), (m.BCB5WSURL = _));
                    var h = a.services;
                    null != h &&
                      null != h &&
                      ((m.IDdomainURL = h.id),
                      (m.SAdomainURL = h.sa),
                      (m.CTTdomainURL = h.paygate),
                      (m.MissionDomainURL = h.mission));
                    var L = a.lodeConfigs;
                    null != L &&
                      null != L &&
                      (m.LDSTURL = L.lodesieutocEndpoint),
                      null != L &&
                        null != L &&
                        L.lodeEndpoint &&
                        (m.LDURL = L.lodeEndpoint);
                    var C = a.dragonTiger;
                    null != C &&
                      null != C &&
                      (m.RongHoWSURL = C.websocketEndpoint);
                    var E = localStorage.getItem("data_from_lp");
                    u.isBrowser
                      ? window.location.origin.indexOf("gwin.info") >= 0 &&
                        (E = "")
                      : (E = ""),
                      null != E && null != E && "" != E
                        ? v.emit(I.DataFromLandingPage, E, e)
                        : v
                            .emitLastWithReturn(I.CallLobbyAutoLoginAcc)
                            .then(function (n) {
                              (t.lastLoggedIn = n || !1),
                                t.lastLoggedIn || (null != e && e());
                            });
                  }
                }),
                (a.setConfig = function (n) {
                  try {
                    (w.phishing_domain = n.phishing_domain),
                      (w.sport_domain = n.services.sport),
                      (w.ws_sport_domain = n.sportConfigs.ws_sport_domain),
                      (w.top_sport_domain = n.sportConfigs.top_sport_domain),
                      (w.xd_livestream_ws_url =
                        n.livestreamConfigs.xd_livestream_ws),
                      (w.tx_livestream_ws_url =
                        n.livestreamConfigs.tx_livestream_ws);
                  } catch (n) {
                    c("setConfig error", n);
                  }
                }),
                e
              );
            })(g)).instance = null),
            (y = e((N = U).prototype, "root", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = N))
          ) || D)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BlinkCmp.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, i, o, r, a, n, c, p, s, l;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (n = t._decorator),
            (c = t.UIOpacity),
            (p = t.tween),
            (s = t.Tween),
            (l = t.Component);
        },
      ],
      execute: function () {
        var u, y, h, d, f, m, N, b, v, g, w, z, B, T, C;
        a._RF.push({}, "30794hggfJHs5jKXkE0PSVE", "BlinkCmp", void 0);
        var F = n.ccclass,
          k = n.property;
        t(
          "default",
          ((u = F("BlinkCmp")),
          (y = k(Number)),
          (h = k(Boolean)),
          (d = k(Number)),
          (f = k(Number)),
          (m = k(Number)),
          (N = k(Number)),
          u(
            ((g = e(
              (v = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), n = 0;
                    n < i;
                    n++
                  )
                    a[n] = arguments[n];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    o(e, "time", g, r(e)),
                    o(e, "useRepeatForever", w, r(e)),
                    o(e, "repeatTime", z, r(e)),
                    o(e, "from", B, r(e)),
                    o(e, "to", T, r(e)),
                    o(e, "delay", C, r(e)),
                    (e.opacityNode = null),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    this.opacityNode = this.node.getComponent(c);
                  }),
                  (a.start = function () {
                    var t = this;
                    if (this.useRepeatForever) {
                      var e = p().sequence(
                        p().to(this.time, { opacity: this.to }),
                        p().delay(this.delay),
                        p().to(this.time, { opacity: this.from })
                      );
                      p(this.opacityNode).repeatForever(e).start();
                    } else {
                      var i = p().sequence(
                        p().to(this.time, { opacity: this.to }),
                        p().to(this.time, { opacity: this.from })
                      );
                      p()
                        .sequence(
                          p().repeat(this.repeatTime, i),
                          p().call(function () {
                            t.opacityNode && (t.opacityNode.opacity = 1);
                          })
                        )
                        .start();
                    }
                  }),
                  (a.run = function (t) {
                    void 0 === t && (t = 0),
                      null == this.opacityNode &&
                        (this.opacityNode = this.node.getComponent(c)),
                      s.stopAllByTarget(this.opacityNode || void 0),
                      this.opacityNode && (this.opacityNode.opacity = t),
                      this.start();
                  }),
                  (a.runOnce = function (t) {
                    var e = this;
                    void 0 === t && (t = 0),
                      null == this.opacityNode &&
                        (this.opacityNode = this.node.getComponent(c)),
                      s.stopAllByTarget(this.opacityNode || void 0),
                      this.opacityNode && (this.opacityNode.opacity = t),
                      p(this.opacityNode)
                        .to(this.time, { opacity: this.to })
                        .to(this.time, { opacity: this.from })
                        .call(function () {
                          e.node.active = !1;
                        })
                        .start();
                  }),
                  (a.stop = function (t) {
                    void 0 === t && (t = 0.3),
                      s.stopAllByTarget(this.opacityNode || void 0),
                      this.opacityNode && (this.opacityNode.opacity = 255),
                      p(this.opacityNode).to(t, { opacity: 1 }).start();
                  }),
                  e
                );
              })(l)).prototype,
              "time",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return 0.25;
                },
              }
            )),
            (w = e(v.prototype, "useRepeatForever", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (z = e(v.prototype, "repeatTime", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 6;
              },
            })),
            (B = e(v.prototype, "from", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (T = e(v.prototype, "to", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 255;
              },
            })),
            (C = e(v.prototype, "delay", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (b = v))
          ) || b)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BubbleChat.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GamePlatformManager.ts"],
  function (t) {
    "use strict";
    var e, n, o, i, a, r, c, l, s, _, h, u, p, d, f, b, y, m, g;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (r = t._decorator),
            (c = t.UITransform),
            (l = t.Node),
            (s = t.UIOpacity),
            (_ = t.Label),
            (h = t.sp),
            (u = t.Sprite),
            (p = t.SpriteFrame),
            (d = t.Tween),
            (f = t.Vec3),
            (b = t.tween),
            (y = t.Size),
            (m = t.Component);
        },
        function (t) {
          g = t.GamePlatformManager;
        },
      ],
      execute: function () {
        var v,
          w,
          z,
          F,
          B,
          E,
          O,
          A,
          T,
          N,
          S,
          k,
          C,
          x,
          R,
          D,
          I,
          Z,
          q,
          L,
          P,
          G,
          M,
          U,
          W,
          j,
          H;
        a._RF.push({}, "97188GNpc5K5oZUEe+6cdOA", "BubbleChat", void 0);
        var K = r.ccclass,
          V = r.property;
        t(
          "BubbleChat",
          ((v = K("BubbleChat")),
          (w = V(c)),
          (z = V(c)),
          (F = V(l)),
          (B = V(s)),
          (E = V(_)),
          (O = V(h.Skeleton)),
          (A = V(Number)),
          (T = V(Number)),
          (N = V(u)),
          (S = V(u)),
          (k = V([p])),
          (C = V([p])),
          v(
            ((D = e(
              (R = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, a = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    o(e, "background", D, i(e)),
                    o(e, "lbl_content_transform", I, i(e)),
                    o(e, "chat_content_node", Z, i(e)),
                    o(e, "chat_content_node_opacity", q, i(e)),
                    o(e, "lbl_content", L, i(e)),
                    o(e, "emo", P, i(e)),
                    o(e, "x_offset", G, i(e)),
                    o(e, "y_offset", M, i(e)),
                    o(e, "spr_bg_content", U, i(e)),
                    o(e, "spr_arrow", W, i(e)),
                    o(e, "sprFrame_bg", j, i(e)),
                    o(e, "sprFrame_arrow", H, i(e)),
                    e
                  );
                }
                n(e, t);
                var a = e.prototype;
                return (
                  (a.showEmo = function (t) {
                    if (null != this.emo) {
                      (this.node.active = !0), (this.emo.node.active = !0);
                      this.emo.setAnimation(0, t, !1);
                      var e = this;
                      this.emo.setCompleteListener(function (t) {
                        t.animation && t.animation.name;
                        e.emo && (e.emo.node.active = !1);
                      });
                    }
                  }),
                  (a.show = function (t, e, n, o, i) {
                    var a,
                      r,
                      c = this;
                    void 0 === n && (n = 5), void 0 === o && (o = 0);
                    for (var l = 1; l <= 30; l++) {
                      var s = "emo_";
                      if (t == (s += l.toString()))
                        return void (l <= 16 && e && this.showEmo(t));
                    }
                    ((this.node.active = !0),
                    o <= this.sprFrame_bg.length - 1 &&
                      o <= this.sprFrame_arrow.length - 1) &&
                      (this.spr_bg_content &&
                        (this.spr_bg_content.spriteFrame =
                          null != (a = this.sprFrame_bg[o])
                            ? a
                            : this.spr_bg_content.spriteFrame),
                      this.spr_arrow &&
                        (this.spr_arrow.spriteFrame =
                          null != (r = this.sprFrame_arrow[o])
                            ? r
                            : this.spr_arrow.spriteFrame));
                    d.stopAllByTarget(this.chat_content_node || void 0),
                      d.stopAllByTarget(
                        this.chat_content_node_opacity || void 0
                      );
                    var _ = "",
                      h = t.split(" ");
                    if (h.length > 5)
                      for (var u = h.length / 5, p = 0; p <= u; ) {
                        for (
                          var y = 5 * p, m = y + 5, v = y;
                          v < m && null != h[v];
                          v++
                        )
                          _ += h[v] + " ";
                        _ += ++p < u ? "\n" : "";
                      }
                    else _ = t;
                    (this.lbl_content && (this.lbl_content.string = _),
                    g.isWebDesktop())
                      ? (this.chat_content_node &&
                          (this.chat_content_node.scale = f.ONE),
                        this.chat_content_node_opacity &&
                          (this.chat_content_node_opacity.opacity = 1),
                        b(this.chat_content_node_opacity)
                          .sequence(
                            b(this.chat_content_node_opacity).to(0.25, {
                              opacity: 255,
                            }),
                            b().call(function () {
                              b(c.chat_content_node_opacity)
                                .delay(n)
                                .call(function () {
                                  c.hide();
                                })
                                .start();
                            })
                          )
                          .start())
                      : (this.chat_content_node &&
                          (this.chat_content_node.scale = f.ZERO),
                        this.chat_content_node_opacity &&
                          (this.chat_content_node_opacity.opacity = 255),
                        b(this.chat_content_node)
                          .sequence(
                            b().to(
                              0.25,
                              { scale: f.ONE },
                              { easing: "expoOut" }
                            ),
                            b().call(function () {
                              b(c.chat_content_node)
                                .delay(n)
                                .call(function () {
                                  c.hide();
                                })
                                .start();
                            })
                          )
                          .start());
                  }),
                  (a.hide = function () {
                    var t = this;
                    (d.stopAllByTarget(this.chat_content_node || void 0),
                    d.stopAllByTarget(this.chat_content_node_opacity || void 0),
                    g.isWebDesktop())
                      ? (this.chat_content_node &&
                          (this.chat_content_node.scale = f.ONE),
                        this.chat_content_node_opacity &&
                          (this.chat_content_node_opacity.opacity = 255),
                        b(this.chat_content_node_opacity)
                          .sequence(
                            b().delay(0.1),
                            b().call(function () {
                              b(t.chat_content_node_opacity)
                                .to(0.2, { opacity: 1 })
                                .start();
                            })
                          )
                          .start())
                      : (this.chat_content_node &&
                          (this.chat_content_node.scale = f.ONE),
                        this.chat_content_node_opacity &&
                          (this.chat_content_node_opacity.opacity = 255),
                        b(this.chat_content_node)
                          .sequence(
                            b().call(function () {
                              b(t.chat_content_node)
                                .to(
                                  0.25,
                                  { scale: f.ZERO },
                                  { easing: "expoIn" }
                                )
                                .call(function () {})
                                .start();
                            }),
                            b().delay(0.1),
                            b().call(function () {
                              b(t.chat_content_node_opacity)
                                .to(0.2, { opacity: 1 })
                                .call(function () {
                                  t.node.active = !1;
                                })
                                .start();
                            })
                          )
                          .start());
                  }),
                  (a.hideImmedialy = function () {
                    d.stopAllByTarget(this.chat_content_node || void 0),
                      d.stopAllByTarget(
                        this.chat_content_node_opacity || void 0
                      ),
                      this.chat_content_node &&
                        (this.chat_content_node.scale = f.ZERO),
                      this.chat_content_node_opacity &&
                        (this.chat_content_node_opacity.opacity = 1),
                      (this.node.active = !1),
                      this.emo && (this.emo.node.active = !1);
                  }),
                  (a.update = function (t) {
                    var e,
                      n,
                      o =
                        (null == (e = this.lbl_content_transform)
                          ? void 0
                          : e.contentSize) || y.ZERO,
                      i = new y(
                        o.width + this.x_offset,
                        o.height + this.y_offset
                      );
                    null == (n = this.background) || n.setContentSize(i);
                  }),
                  e
                );
              })(m)).prototype,
              "background",
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
            (I = e(R.prototype, "lbl_content_transform", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Z = e(R.prototype, "chat_content_node", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = e(R.prototype, "chat_content_node_opacity", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(R.prototype, "lbl_content", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = e(R.prototype, "emo", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = e(R.prototype, "x_offset", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 30;
              },
            })),
            (M = e(R.prototype, "y_offset", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 20;
              },
            })),
            (U = e(R.prototype, "spr_bg_content", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = e(R.prototype, "spr_arrow", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = e(R.prototype, "sprFrame_bg", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (H = e(R.prototype, "sprFrame_arrow", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (x = R))
          ) || x)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BubblePopup.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var i, e, n, a, o, l, r, s, c, u, p, h;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (l = t._decorator),
            (r = t.Node),
            (s = t.Tween),
            (c = t.UIOpacity),
            (u = t.Vec3),
            (p = t.tween),
            (h = t.Component);
        },
      ],
      execute: function () {
        var m, v, d, y, b;
        o._RF.push({}, "a2bd3dC3lNNn7rcssbuGcWc", "BubblePopup", void 0);
        var f = l.ccclass,
          g = l.property;
        t(
          "BubblePopup",
          ((m = f("BubblePopup")),
          (v = g(r)),
          m(
            ((b = i(
              (y = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, o = new Array(e), l = 0;
                    l < e;
                    l++
                  )
                    o[l] = arguments[l];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    n(i, "main", b, a(i)),
                    i
                  );
                }
                e(i, t);
                var o = i.prototype;
                return (
                  (o.show = function () {
                    var t, i, e;
                    if (null != (t = this.main) && t.active) this.hide();
                    else {
                      s.stopAllByTarget(this.main || void 0);
                      var n =
                        null == (i = this.main) ? void 0 : i.getComponent(c);
                      s.stopAllByTarget(n || void 0),
                        this.main && (this.main.active = !0),
                        null == (e = this.main) || e.setScale(u.ZERO),
                        n && (n.opacity = 255),
                        p(this.main)
                          .to(0.12, { scale: u.ONE })
                          .to(0.1, { scale: new u(0.9, 0.9, 0.9) })
                          .to(0.1, { scale: u.ONE })
                          .start();
                    }
                  }),
                  (o.hide = function () {
                    var t,
                      i,
                      e,
                      n = this;
                    s.stopAllByTarget(this.main || void 0);
                    var a =
                      null == (t = this.main) ? void 0 : t.getComponent(c);
                    s.stopAllByTarget(a || void 0),
                      a && (a.opacity = 255),
                      null == (i = this.main) || i.setScale(u.ONE),
                      p(this.main)
                        .to(0.2, { scale: u.ZERO })
                        .call(function () {
                          n.main && (n.main.active = !1);
                        })
                        .start(),
                      p(null == (e = this.main) ? void 0 : e.getComponent(c))
                        .to(0.2, { opacity: 1 })
                        .start();
                  }),
                  i
                );
              })(h)).prototype,
              "main",
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
            (d = y))
          ) || d)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BundleManager.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Define.ts",
    "./EventManager.ts",
    "./PersistManager.ts",
    "./TransitionFadeScreen.ts",
    "./SocketManager.ts",
    "./HttpManager.ts",
    "./State.ts",
    "./BundleUpdateOnNative.ts",
    "./NativeHelper.ts",
    "./TrackingManager.ts",
    "./TrackingDefine.ts",
  ],
  function (e) {
    "use strict";
    var n,
      t,
      r,
      i,
      a,
      o,
      s,
      u,
      l,
      c,
      d,
      f,
      h,
      g,
      p,
      y,
      _,
      b,
      v,
      m,
      w,
      k,
      x,
      D,
      P,
      L,
      z,
      N,
      S,
      A,
      B;
    return {
      setters: [
        function (e) {
          (n = e.extends),
            (t = e.createClass),
            (r = e.asyncToGenerator),
            (i = e.regeneratorRuntime),
            (a = e.createForOfIteratorHelperLoose);
        },
        function (e) {
          (o = e.cclegacy),
            (s = e.Node),
            (u = e.director),
            (l = e.SceneAsset),
            (c = e.Prefab),
            (d = e.sys),
            (f = e.assetManager),
            (h = e.Canvas),
            (g = e.native),
            (p = e.view),
            (y = e.ResolutionPolicy);
        },
        function (e) {
          (_ = e.StorageKey),
            (b = e.LazyPriority),
            (v = e.Bundle),
            (m = e.DesignResolution);
        },
        function (e) {
          (w = e.eventManager), (k = e.EventKey);
        },
        function (e) {
          x = e.PersistManager;
        },
        function (e) {
          D = e.TransitionFadeScreen;
        },
        function (e) {
          P = e.socketManager;
        },
        function (e) {
          L = e.httpManager;
        },
        function (e) {
          z = e.state;
        },
        function (e) {
          N = e.BundleUpdateOnNative;
        },
        function (e) {
          S = e.NativeHelper;
        },
        function (e) {
          A = e.tracking;
        },
        function (e) {
          B = e.TRACKING_ACTION_TYPE;
        },
      ],
      execute: function () {
        o._RF.push({}, "e29d6JmqjdD7pfLIPpSrWfY", "BundleManager", void 0);
        var C = e(
          "BundleManager",
          (function () {
            function e() {
              var e = this;
              (this.isWaitingAnimation = !1),
                (this.delayDestroy = 0.01),
                (this.lazyStep = 0.1),
                (this.timeFadeScene = 0.25),
                (this.delaySubBundle = 0.1),
                (this._delay_list = []),
                (this._native_bundleUpdateOnNative = void 0),
                (this._web_versionCache = {}),
                (this._list = []),
                (this._releaseList = []),
                (this._isDownloading = !1),
                (this._isDestroying = !1),
                (this._lazyWaiting = []),
                (this._lazyDownloaded = new Set()),
                (this._lazyDt = 0),
                (this._lazyLock = !0),
                (this._lastWithoutDelayString = ""),
                (this._isLoading = !1),
                (this._isRunning = !1),
                (this._isFistLoadGame = !0),
                (this.loadPrefabFromBundle = function () {
                  return e.bundle_loadPrefab.apply(e, arguments);
                }),
                (this.release = function () {
                  return e.destroyUnused();
                }),
                (this.isBundleLoaded = function (n) {
                  return e._list.some(function (e) {
                    return e.name === n;
                  });
                });
            }
            e.getInstance = function () {
              return (
                this._instance || (this._instance = new e()), this._instance
              );
            };
            var o = e.prototype;
            return (
              (o.showWaring = function (e) {
                x.showNoti("Xin vui lòng đợi game tải xong."),
                  e && console.log("Warning loading...", e);
              }),
              (o.delay = function (e) {
                var n = this;
                return new Promise(function (t) {
                  return n._delay_list.push({ remaining: e, resolve: t });
                });
              }),
              (o.delayUntil = function (e) {
                var n = this;
                return new Promise(function (t) {
                  return n._delay_list.push({ check: e, resolve: t });
                });
              }),
              (o._delayTick = function (e) {
                for (var n = this._delay_list.length - 1; n >= 0; n--) {
                  var t = this._delay_list[n];
                  if (t) {
                    void 0 !== t.remaining &&
                      t.remaining > 0 &&
                      (t.remaining -= e);
                    var r = void 0 === t.remaining || t.remaining <= 0,
                      i = void 0 === t.check || t.check();
                    r && i && (t.resolve(), this._delay_list.splice(n, 1));
                  }
                }
              }),
              (o.native_lazyInitBundleUpdateOnNative = function () {
                if (!this._native_bundleUpdateOnNative) {
                  var e = new s();
                  (this._native_bundleUpdateOnNative = e.addComponent(N)),
                    u.addPersistRootNode(e);
                }
              }),
              (o.native_updateBundles = (function () {
                var e = r(
                  i().mark(function e(n) {
                    var t,
                      r,
                      a,
                      o,
                      s,
                      u,
                      l = this;
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = n.bundles),
                                (r = n.onProgress),
                                (a = n.onComplete),
                                this.native_lazyInitBundleUpdateOnNative(),
                                (o = t.length),
                                (s = i().mark(function e(n) {
                                  var a;
                                  return i().wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          if ((a = t[n])) {
                                            e.next = 4;
                                            break;
                                          }
                                          return (
                                            (u = n),
                                            e.abrupt("return", "continue")
                                          );
                                        case 4:
                                          return (
                                            console.log(
                                              "Start downloading bundle:",
                                              a.name
                                            ),
                                            A.sendTracking(
                                              B.START_DOWNLOAD_NATIVE_BUNDLE,
                                              { bundleName: a.name }
                                            ),
                                            (e.next = 8),
                                            new Promise(function (e, t) {
                                              var i;
                                              null ==
                                                (i =
                                                  l._native_bundleUpdateOnNative) ||
                                                i.updateBundle(
                                                  a.name,
                                                  function (e, t) {
                                                    null == r ||
                                                      r((n + (t || 0)) / o);
                                                  },
                                                  function (n, r) {
                                                    n
                                                      ? (A.sendTracking(
                                                          B.FINISH_DOWNLOAD_NATIVE_BUNDLE,
                                                          { bundleName: a.name }
                                                        ),
                                                        console.log(
                                                          "Successfully downloaded bundle:",
                                                          a.name
                                                        ),
                                                        e())
                                                      : (console.error(
                                                          "Error downloading bundle:",
                                                          a.name,
                                                          r
                                                        ),
                                                        t(new Error(r)));
                                                  }
                                                );
                                            })
                                              .then(function () {
                                                return n++;
                                              })
                                              .catch(function (e) {
                                                console.log(e.message),
                                                  console.log(
                                                    "Retry downloading bundle:",
                                                    a.name
                                                  );
                                              })
                                          );
                                        case 8:
                                          u = n;
                                        case 9:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })),
                                (u = 0);
                            case 5:
                              if (!(u < o)) {
                                e.next = 12;
                                break;
                              }
                              return e.delegateYield(s(u), "t0", 7);
                            case 7:
                              if ("continue" !== e.t0) {
                                e.next = 10;
                                break;
                              }
                              return e.abrupt("continue", 10);
                            case 10:
                              e.next = 5;
                              break;
                            case 12:
                              null == a || a();
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
                return function (n) {
                  return e.apply(this, arguments);
                };
              })()),
              (o.native_loadBundle = (function () {
                var e = r(
                  i().mark(function e(n) {
                    var t, r, a, o;
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = n.bundle),
                                (r = n.onProgress),
                                (a = n.isPredownloaded),
                                void 0 !== a && a)
                              ) {
                                e.next = 4;
                                break;
                              }
                              return (
                                (e.next = 4),
                                this.native_updateBundles({
                                  bundles: [t],
                                  onProgress: r,
                                })
                              );
                            case 4:
                              return (
                                (o = t.name),
                                e.abrupt(
                                  "return",
                                  new Promise(function (e) {
                                    var n =
                                        g.fileUtils.getWritablePath() +
                                        "bundles/" +
                                        o +
                                        "/data/" +
                                        o,
                                      t = g.fileUtils.getStringFromFile(
                                        n + "/version.txt"
                                      );
                                    console.log(
                                      o,
                                      n,
                                      g.fileUtils.isDirectoryExist(n)
                                    ),
                                      console.log(o, "Version:", t),
                                      f.loadBundle(
                                        n,
                                        { version: t },
                                        function (n, t) {
                                          n
                                            ? (console.log(
                                                "LoadBundle failed:",
                                                o,
                                                JSON.stringify(n)
                                              ),
                                              console.log(n.stack),
                                              e(void 0))
                                            : (console.log("LoadBundle:", o, t),
                                              e(t));
                                        }
                                      );
                                  })
                                )
                              );
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
                return function (n) {
                  return e.apply(this, arguments);
                };
              })()),
              (o.web_getUrl = function (e) {
                var n = localStorage.getItem(_.GameConfig) || "";
                return JSON.parse(n)[_.RsDomain] + "bundles/" + e.name;
              }),
              (o.web_getVersion = (function () {
                var e = r(
                  i().mark(function e(n) {
                    var t, r, a, o, s, u, l;
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              (t = n.url),
                                (r = n.isSkipVersionCheck),
                                (a = n.useLoading),
                                (o = void 0 !== a && a),
                                (e.next = 3);
                              break;
                            case 3:
                              if (
                                ((s = ""),
                                (u =
                                  t + "/version.txt?_=" + new Date().getTime()),
                                !r || !this._web_versionCache[t])
                              ) {
                                e.next = 9;
                                break;
                              }
                              (s = this._web_versionCache[t]), (e.next = 13);
                              break;
                            case 9:
                              return (
                                (e.next = 11),
                                L.sendGET({
                                  url: u,
                                  sendAuthorization: !1,
                                  useLoading: o,
                                })
                              );
                            case 11:
                              (s = e.sent) && (this._web_versionCache[t] = s);
                            case 13:
                              if (
                                ((l = localStorage.getItem(
                                  _.LocalVersion + "_" + t
                                )),
                                !s && l && (s = l),
                                !s)
                              ) {
                                e.next = 20;
                                break;
                              }
                              return e.abrupt("return", {
                                version: s,
                                isNew: s === l,
                              });
                            case 20:
                              return e.abrupt("return", void 0);
                            case 22:
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
              (o.web_loadBundle = (function () {
                var e = r(
                  i().mark(function e(n) {
                    var t, r, a, o, s;
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (t = n.bundle),
                                (r = n.onFileProgress),
                                (a = this.web_getUrl(t)),
                                (e.next = 4),
                                this.web_getVersion({
                                  url: a,
                                  isSkipVersionCheck: !!t.isSkipVersionCheck,
                                })
                              );
                            case 4:
                              if (((e.t0 = e.sent), e.t0)) {
                                e.next = 7;
                                break;
                              }
                              e.t0 = { version: "" };
                            case 7:
                              return (
                                (o = e.t0),
                                (s = o.version),
                                e.abrupt(
                                  "return",
                                  new Promise(function (e) {
                                    f.loadBundle(
                                      a,
                                      { version: s, onFileProgress: r },
                                      function (n, t) {
                                        n
                                          ? e(void 0)
                                          : (localStorage.setItem(
                                              _.LocalVersion + "_" + a,
                                              s
                                            ),
                                            e(t));
                                      }
                                    );
                                  })
                                )
                              );
                            case 10:
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
              (o.bundle_loadScene = function (e) {
                var n = e.bundle,
                  t = e.scene,
                  r = e.onProgress,
                  i = t;
                return (
                  A.sendTracking(B.START_LOAD_SCENE, {
                    bundleName: n.name,
                    sceneName: i,
                  }),
                  new Promise(function (e) {
                    t
                      ? n.loadScene(
                          t,
                          l,
                          function (e, n, t) {
                            return null == r ? void 0 : r(e / n);
                          },
                          function (t, r) {
                            t
                              ? e(void 0)
                              : (A.sendTracking(B.FINISH_LOAD_SCENE, {
                                  bundleName: n.name,
                                  sceneName: i,
                                }),
                                e(r));
                          }
                        )
                      : e(void 0);
                  })
                );
              }),
              (o.bundle_loadPrefab = function (e) {
                var n = e.bundle,
                  t = e.prefab,
                  r = e.onProgress;
                return new Promise(function (e) {
                  n.load(
                    t,
                    c,
                    function (e, n, t) {
                      return null == r ? void 0 : r(e / n);
                    },
                    function (n, t) {
                      return e(n ? void 0 : t);
                    }
                  );
                });
              }),
              (o._loadTree = (function () {
                var e = r(
                  i().mark(function e(n, t, r, o, s, u) {
                    var l,
                      c,
                      f,
                      h,
                      g,
                      p,
                      y,
                      _,
                      b,
                      v,
                      m,
                      w,
                      k = this;
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                (void 0 === r && (r = !1),
                                !this._list.some(function (e) {
                                  return e.name === n.name;
                                }))
                              ) {
                                e.next = 5;
                                break;
                              }
                              if (!(l = this.assetManager_getBundle(n))) {
                                e.next = 5;
                                break;
                              }
                              return e.abrupt("return", [l]);
                            case 5:
                              if (!this._isDownloading) {
                                e.next = 8;
                                break;
                              }
                              return this.showWaring(n), e.abrupt("return", []);
                            case 8:
                              if (!this._isDestroying) {
                                e.next = 11;
                                break;
                              }
                              return (
                                (e.next = 11),
                                this.delayUntil(function () {
                                  return !k._isDestroying;
                                })
                              );
                            case 11:
                              if (
                                ((this._isDownloading = !0),
                                (c = []),
                                (function e(n) {
                                  (c = c.filter(function (e) {
                                    return e.name !== n.name;
                                  })).push(n),
                                    n.depend &&
                                      (Array.isArray(n.depend)
                                        ? n.depend
                                        : [n.depend]
                                      ).forEach(function (t) {
                                        (n.priority || 1) >=
                                          (t.priority || 1) &&
                                          x.alert({
                                            error: "priority",
                                            bundle: n.name,
                                            priority: n.priority,
                                            depend: {
                                              bundle: t.name,
                                              priority: t.priority,
                                            },
                                          }),
                                          e(t);
                                      });
                                })(n),
                                n.isAddon ||
                                  z.backToLobbyFromGameRoom ||
                                  (f = this._releaseList).push.apply(
                                    f,
                                    this._list.filter(function (e) {
                                      return !(
                                        c.some(function (n) {
                                          return n.name === e.name;
                                        }) || e.isPersistent
                                      );
                                    })
                                  ),
                                (z.backToLobbyFromGameRoom = !1),
                                (h = c
                                  .filter(function (e) {
                                    return !k._list.some(function (n) {
                                      return n.name === e.name;
                                    });
                                  })
                                  .reverse()),
                                console.log(
                                  "load",
                                  h.map(function (e) {
                                    return e.name;
                                  })
                                ),
                                (p = []),
                                (y = 0),
                                (_ = 0),
                                (b = function (e) {
                                  void 0 === e && (e = 0),
                                    (_ = e) < 0.01 && (_ = 0.01),
                                    t && t((y + _) / h.length);
                                }),
                                !d.isNative || !r)
                              ) {
                                e.next = 29;
                                break;
                              }
                              return (
                                (e.next = 26),
                                this.native_updateBundles({
                                  bundles: h,
                                  onProgress: o,
                                  onComplete: s,
                                })
                              );
                            case 26:
                              if (!u || !this.isWaitingAnimation) {
                                e.next = 29;
                                break;
                              }
                              return (e.next = 29), u();
                            case 29:
                              v = a(h);
                            case 30:
                              if ((m = v()).done) {
                                e.next = 53;
                                break;
                              }
                              if (
                                ((w = m.value),
                                A.sendTracking(B.START_LOAD_BUNDLE, {
                                  bundleName: w.name,
                                }),
                                !d.isNative)
                              ) {
                                e.next = 39;
                                break;
                              }
                              return (
                                (e.next = 36),
                                this.native_loadBundle({
                                  bundle: w,
                                  onProgress: r ? function () {} : b,
                                  isPredownloaded: r,
                                })
                              );
                            case 36:
                              (g = e.sent), (e.next = 42);
                              break;
                            case 39:
                              return (
                                (e.next = 41),
                                this.web_loadBundle({
                                  bundle: w,
                                  onFileProgress: function (e, n) {
                                    return b(e / n);
                                  },
                                })
                              );
                            case 41:
                              g = e.sent;
                            case 42:
                              if (!g) {
                                e.next = 49;
                                break;
                              }
                              A.sendTracking(B.FINISH_LOAD_BUNDLE, {
                                bundleName: w.name,
                              }),
                                p.push(g),
                                this._list.push(w),
                                (y += 1),
                                (e.next = 51);
                              break;
                            case 49:
                              return (
                                (this._isDownloading = !1),
                                e.abrupt("return", [])
                              );
                            case 51:
                              e.next = 30;
                              break;
                            case 53:
                              return (
                                (this._isDownloading = !1),
                                e.abrupt("return", p)
                              );
                            case 56:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function (n, t, r, i, a, o) {
                  return e.apply(this, arguments);
                };
              })()),
              (o.destroy = function (e) {
                if (!d.isNative) {
                  (this._list = this._list.filter(function (n) {
                    return n.name !== e.name;
                  })),
                    console.log("destroyBundle", e.name),
                    w.emit(k.ReleasedAssetBundle, e.name);
                  var n = f.getBundle(e.name);
                  null == n || n.releaseUnusedAssets(), n && f.removeBundle(n);
                }
              }),
              (o.destroyUnused = (function () {
                var e = r(
                  i().mark(function e() {
                    var n,
                      t = this;
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this._isDownloading) {
                                e.next = 2;
                                break;
                              }
                              return e.abrupt("return");
                            case 2:
                              if (!this._isDestroying) {
                                e.next = 4;
                                break;
                              }
                              return e.abrupt("return");
                            case 4:
                              return (
                                (this._isDestroying = !0),
                                (e.next = 7),
                                this.delay(this.delayDestroy)
                              );
                            case 7:
                              this._releaseList.forEach(function (e) {
                                return t.destroy(e);
                              }),
                                (this._releaseList = []),
                                null == (n = f.cacheManager) || n.clearCache(),
                                d.garbageCollect(),
                                (this._isDestroying = !1);
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
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (o.assetManager_getBundle = function (e) {
                var n = [];
                !(function e(t) {
                  n.some(function (e) {
                    return e.name === t.name;
                  }) ||
                    (n.push(t),
                    t.depend &&
                      (Array.isArray(t.depend) ? t.depend : [t.depend]).forEach(
                        e
                      ));
                })(e);
                for (var t = 0, r = n; t < r.length; t++) {
                  var i = r[t];
                  if (!f.getBundle(i.name))
                    return void (
                      i.name !== e.name &&
                      console.log("assetManager_getBundle failed:", i.name)
                    );
                }
                return f.getBundle(e.name) || void 0;
              }),
              (o.enableLazy = function () {
                this._lazyLock = !1;
              }),
              (o.loadLazy = function (e, t, r) {
                var i = this._lazyWaiting.find(function (n) {
                  return n.lazyEvent === e.lazyEvent;
                });
                (console.log(
                  "loadLazy",
                  i ? "edit" : "new",
                  e.name,
                  t || b.None,
                  r || "",
                  this
                ),
                i)
                  ? ((i.lazyPriority || b.None) < (t || b.None) &&
                      (i.lazyPriority = t),
                    r &&
                      (Array.isArray(r) ? r : [r]).forEach(function (e) {
                        var n;
                        return null == (n = i.actions) ? void 0 : n.add(e);
                      }))
                  : this._lazyWaiting.unshift(
                      n({}, e, {
                        lazyPriority: t || e.lazyPriority,
                        isDownloading: !1,
                        actions: new Set(r ? (Array.isArray(r) ? r : [r]) : []),
                      })
                    );
              }),
              (o._lazyTick = function (e) {
                var n = this;
                if (
                  ((this._lazyDt += e),
                  !this._isDownloading &&
                    !this._isDestroying &&
                    this._lazyWaiting.length)
                ) {
                  this._lazyWaiting.forEach(function (e) {
                    if (
                      !e.isDownloading &&
                      n._lazyDownloaded.has(e.name) &&
                      w.isExist(e.lazyEvent || k.Null)
                    ) {
                      var t = n.assetManager_getBundle(e);
                      t &&
                        (console.log("loadLazy fast", e),
                        (e.isDownloading = !0),
                        n._lazyComplete([t]));
                    }
                  });
                  var t = this._lazyWaiting.some(function (e) {
                    return (e.lazyPriority || b.None) > b.WithoutDelay;
                  });
                  if ((this._lazyDt >= this.lazyStep && !this._lazyLock) || t) {
                    this._lazyWaiting.sort(function (e, n) {
                      return (
                        (n.lazyPriority || b.None) - (e.lazyPriority || b.None)
                      );
                    });
                    for (
                      var r = function (e) {
                          var t = n._lazyWaiting[e];
                          if (t && !t.isDownloading) {
                            if (
                              !w.isExist(t.lazyEvent || k.Null) &&
                              t.lazyPriority !== b.WithoutCondition
                            )
                              return "continue";
                            console.log("loadLazy full", t, n._lazyDt),
                              (t.isDownloading = !0),
                              n
                                ._loadTree(
                                  t,
                                  t.onProgress,
                                  t.predownloadAll,
                                  t.onPreDownloadProgres,
                                  t.onPreDownloadComplete,
                                  t.waitingAnimation
                                )
                                .then(function (e) {
                                  e.length > 0
                                    ? n._lazyComplete(e)
                                    : ((n._lazyDt = 0), (t.isDownloading = !1));
                                });
                          }
                          return "break";
                        },
                        i = 0;
                      i < this._lazyWaiting.length;
                      i++
                    ) {
                      var a = r(i);
                      if ("continue" !== a && "break" === a) break;
                    }
                  }
                }
              }),
              (o._lazyComplete = function (e) {
                var n = this;
                e.forEach(function (e) {
                  var t = n._lazyWaiting.find(function (n) {
                    return n.name === e.name;
                  });
                  t &&
                    Promise.all(
                      (t.lazyPrefabList || []).map(function (t) {
                        return n.bundle_loadPrefab({ bundle: e, prefab: t });
                      })
                    ).then(function (e) {
                      var r,
                        i = t.lazyEvent || k.Null,
                        a = [e, [].concat(t.actions || [])];
                      (r = console).log.apply(r, ["loadLazy", i].concat(a)),
                        w.emit.apply(w, [i].concat(a)),
                        (n._lazyWaiting = n._lazyWaiting.filter(function (e) {
                          return e.name !== t.name;
                        })),
                        n._lazyDownloaded.add(t.name),
                        (n._lazyDt = 0);
                    });
                });
              }),
              (o.loadNow = (function () {
                var e = r(
                  i().mark(function e() {
                    var t,
                      r,
                      a,
                      o,
                      s,
                      u,
                      l,
                      c,
                      d,
                      f = this,
                      h = arguments;
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              for (
                                t = h.length, r = new Array(t), a = 0;
                                a < t;
                                a++
                              )
                                r[a] = h[a];
                              return (
                                (o = r[0]),
                                (s = r[1]),
                                (u = r[2]),
                                (l = r[3]),
                                (c = r[4]),
                                (d = r[5]),
                                this.loadLazy(
                                  n({}, o, {
                                    isDownloading: !1,
                                    actions: new Set(),
                                    onProgress: s,
                                    predownloadAll: u,
                                    onPreDownloadProgres: l,
                                    onPreDownloadComplete: c,
                                    waitingAnimation: d,
                                  }),
                                  b.WithoutCondition
                                ),
                                (e.next = 5),
                                this.delayUntil(function () {
                                  return !!f._list.some(function (e) {
                                    return e.name === o.name;
                                  });
                                })
                              );
                            case 5:
                              return e.abrupt(
                                "return",
                                this.assetManager_getBundle(o)
                              );
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
              (o.loadScene = (function () {
                var e = r(
                  i().mark(function e(n) {
                    var t,
                      r,
                      a,
                      o,
                      s,
                      u,
                      l,
                      c,
                      d = this;
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = n.bundle),
                                (r = n.scene),
                                (a = n.emitProgress),
                                (o = n.onProgress),
                                !this._isLoading)
                              ) {
                                e.next = 4;
                                break;
                              }
                              return this.showWaring(t), e.abrupt("return");
                            case 4:
                              if (!this._isDestroying) {
                                e.next = 7;
                                break;
                              }
                              return (
                                (e.next = 7),
                                this.delayUntil(function () {
                                  return !d._isDestroying;
                                })
                              );
                            case 7:
                              return (
                                (this._isLoading = !0),
                                (s = !1),
                                (u = function (e) {
                                  var n = e / 2 + (s ? 0.5 : 0);
                                  n > 0 && a && w.emit(a, n), null == o || o(n);
                                })(0.001),
                                (e.next = 13),
                                this.loadNow(t, u)
                              );
                            case 13:
                              if (((l = e.sent), (s = !0), (e.t0 = l), !e.t0)) {
                                e.next = 20;
                                break;
                              }
                              return (
                                (e.next = 19),
                                this.bundle_loadScene({
                                  bundle: l,
                                  scene:
                                    r ||
                                    ((t.scene &&
                                      (Array.isArray(t.scene)
                                        ? t.scene
                                        : [t.scene])) ||
                                      [])[0] ||
                                    "",
                                  onProgress: u,
                                })
                              );
                            case 19:
                              e.t0 = e.sent;
                            case 20:
                              return (
                                (c = e.t0),
                                u(1),
                                (this._isLoading = !1),
                                e.abrupt("return", c)
                              );
                            case 24:
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
              (o.loadPrefab = (function () {
                var e = r(
                  i().mark(function e(n) {
                    var t,
                      r,
                      a,
                      o,
                      s,
                      u,
                      l,
                      c,
                      d,
                      f,
                      h,
                      g,
                      p,
                      y = this;
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = n.bundle),
                                (r = n.prefab),
                                (a = n.emitProgress),
                                (o = n.onProgress),
                                (s = n.preDownloadAll),
                                (u = void 0 !== s && s),
                                (l = n.onPreDownloadProgress),
                                (c = n.onPreDownloadComplete),
                                (d = n.waitingAnimation),
                                !this._isLoading)
                              ) {
                                e.next = 4;
                                break;
                              }
                              return this.showWaring(t), e.abrupt("return");
                            case 4:
                              if (!this._isDestroying) {
                                e.next = 7;
                                break;
                              }
                              return (
                                (e.next = 7),
                                this.delayUntil(function () {
                                  return !y._isDestroying;
                                })
                              );
                            case 7:
                              return (
                                (this._isLoading = !0),
                                (f = !1),
                                (h = function (e) {
                                  var n = e / 2 + (f ? 0.5 : 0);
                                  n > 0 && a && w.emit(a, n), null == o || o(n);
                                })(0.001),
                                (e.next = 13),
                                this.loadNow(t, h, u, l, c, d)
                              );
                            case 13:
                              if (((g = e.sent), (f = !0), (e.t0 = g), !e.t0)) {
                                e.next = 20;
                                break;
                              }
                              return (
                                (e.next = 19),
                                this.bundle_loadPrefab({
                                  bundle: g,
                                  prefab: r,
                                  onProgress: h,
                                })
                              );
                            case 19:
                              e.t0 = e.sent;
                            case 20:
                              return (
                                (p = e.t0),
                                h(1),
                                (this._isLoading = !1),
                                e.abrupt("return", p)
                              );
                            case 24:
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
              (o.runScene = (function () {
                var e = r(
                  i().mark(function e(n) {
                    var t,
                      a,
                      o,
                      s,
                      l,
                      c,
                      d,
                      f,
                      h,
                      g = this;
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((t = n.bundle),
                                (a = n.scene),
                                (o = n.emitProgress),
                                (s = n.fade),
                                (l = n.isForce),
                                (c = n.fadeWait),
                                (d = n.fadeCheck),
                                (f = n.runSceneCondition),
                                (h = n.beforeRunScene),
                                !this._isRunning)
                              ) {
                                e.next = 4;
                                break;
                              }
                              return this.showWaring(t), e.abrupt("return");
                            case 4:
                              return (
                                (this._isRunning = !0),
                                e.abrupt(
                                  "return",
                                  new Promise(function (e) {
                                    var n,
                                      p = (function () {
                                        var n = r(
                                          i().mark(function n() {
                                            var p, y, _, b;
                                            return i().wrap(function (n) {
                                              for (;;)
                                                switch ((n.prev = n.next)) {
                                                  case 0:
                                                    return (
                                                      (n.next = 2),
                                                      g.loadScene({
                                                        bundle: t,
                                                        scene: a,
                                                        emitProgress: o,
                                                      })
                                                    );
                                                  case 2:
                                                    if (
                                                      ((p = n.sent), !f || f())
                                                    ) {
                                                      n.next = 6;
                                                      break;
                                                    }
                                                    return (
                                                      (g._isRunning = !1),
                                                      n.abrupt("return")
                                                    );
                                                  case 6:
                                                    !p ||
                                                    (!l &&
                                                      z.isLoggedInOtherDevice)
                                                      ? ((g._isRunning = !1),
                                                        e(void 0))
                                                      : ((y = function () {
                                                          u.runScene(
                                                            p,
                                                            function () {
                                                              return null == h
                                                                ? void 0
                                                                : h();
                                                            },
                                                            r(
                                                              i().mark(
                                                                function e(
                                                                  n,
                                                                  t
                                                                ) {
                                                                  var r;
                                                                  return i().wrap(
                                                                    function (
                                                                      e
                                                                    ) {
                                                                      for (;;)
                                                                        switch (
                                                                          (e.prev =
                                                                            e.next)
                                                                        ) {
                                                                          case 0:
                                                                            if (
                                                                              !s
                                                                            ) {
                                                                              e.next = 10;
                                                                              break;
                                                                            }
                                                                            if (
                                                                              !c
                                                                            ) {
                                                                              e.next = 4;
                                                                              break;
                                                                            }
                                                                            return (
                                                                              (e.next = 4),
                                                                              g.delay(
                                                                                c
                                                                              )
                                                                            );
                                                                          case 4:
                                                                            if (
                                                                              !d
                                                                            ) {
                                                                              e.next = 7;
                                                                              break;
                                                                            }
                                                                            return (
                                                                              (e.next = 7),
                                                                              g.delayUntil(
                                                                                d
                                                                              )
                                                                            );
                                                                          case 7:
                                                                            null ==
                                                                              (r =
                                                                                D.getInstance()) ||
                                                                              r.fadeOut(
                                                                                function () {
                                                                                  return _(
                                                                                    t
                                                                                  );
                                                                                },
                                                                                g.timeFadeScene
                                                                              ),
                                                                              (e.next = 11);
                                                                            break;
                                                                          case 10:
                                                                            _(
                                                                              t
                                                                            );
                                                                          case 11:
                                                                          case "end":
                                                                            return e.stop();
                                                                        }
                                                                    },
                                                                    e
                                                                  );
                                                                }
                                                              )
                                                            )
                                                          );
                                                        }),
                                                        (_ = function (n) {
                                                          g.destroyUnused(),
                                                            (g._isRunning = !1),
                                                            l ||
                                                              w.emit(
                                                                k.RunSceneSuccesses
                                                              ),
                                                            e(n),
                                                            console.log(
                                                              "runScene",
                                                              n
                                                            );
                                                        }),
                                                        "scene" === s
                                                          ? null ==
                                                              (b =
                                                                D.getInstance()) ||
                                                            b.fadeIn(y, 0.25)
                                                          : y());
                                                  case 7:
                                                  case "end":
                                                    return n.stop();
                                                }
                                            }, n);
                                          })
                                        );
                                        return function () {
                                          return n.apply(this, arguments);
                                        };
                                      })();
                                    "bundle" === s
                                      ? null == (n = D.getInstance()) ||
                                        n.fadeIn(p, 0.25)
                                      : p();
                                  })
                                )
                              );
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
                return function (n) {
                  return e.apply(this, arguments);
                };
              })()),
              (o.runLobby = (function () {
                var e = r(
                  i().mark(function e() {
                    var n = this;
                    return i().wrap(
                      function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (!this._isRunning) {
                                e.next = 4;
                                break;
                              }
                              return (
                                (e.next = 3),
                                this.delayUntil(function () {
                                  return !n._isRunning;
                                })
                              );
                            case 3:
                              return e.abrupt("return");
                            case 4:
                              return (
                                w.emit(k.MiniCloseNode),
                                x.getInstance().showLoading("lobby"),
                                (this._lazyLock = !0),
                                (e.next = 9),
                                this.runScene({
                                  bundle: v.lobby,
                                  isForce: !0,
                                  fade: "scene",
                                  fadeCheck: function () {
                                    return (
                                      z.isLobbyReady &&
                                      n.isEmptyWithoutDelayList
                                    );
                                  },
                                  beforeRunScene: function () {
                                    z.isPortrait &&
                                      d.isNative &&
                                      (S.setDeviceOrientation(1),
                                      p.setDesignResolutionSize(
                                        m.Width,
                                        m.Height,
                                        y.FIXED_WIDTH
                                      ));
                                  },
                                })
                              );
                            case 9:
                              x.getInstance().hideLoading("lobby"),
                                P.sendRefreshMoney(),
                                w.emitLast(k.CallLobbyAutoLoginAcc);
                            case 12:
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
              (o.loadGame = function (e) {
                var n,
                  t,
                  r = e.onStart,
                  i = e.onProgress,
                  a = e.onCompleted,
                  o = e.onPreDownloadProgress,
                  s = e.onPreDownloadComplete,
                  l = e.waitingAnimation;
                if (this._isFistLoadGame) {
                  (this._isFistLoadGame = !1),
                    (z.isLobbyFromLoading = !0),
                    r("", 0);
                  var c =
                    null == (n = u.getScene()) ||
                    null == (t = n.getChildByName("Canvas"))
                      ? void 0
                      : t.getComponent(h);
                  null == c ||
                    c.schedule(function () {
                      return W.tick();
                    }),
                    W.loadPrefab({
                      bundle: v.lobby,
                      prefab: "init",
                      onProgress: (function (e) {
                        function n(n) {
                          return e.apply(this, arguments);
                        }
                        return (
                          (n.toString = function () {
                            return e.toString();
                          }),
                          n
                        );
                      })(function (e) {
                        return i("", e);
                      }),
                      preDownloadAll: !0,
                      onPreDownloadProgress: o,
                      onPreDownloadComplete: s,
                      waitingAnimation: l,
                    }).then(function (e) {
                      null == c || c.unscheduleAllCallbacks(),
                        e ? a(e) : console.error("loadPrefab failed");
                    });
                }
              }),
              (o.tick = function (e) {
                void 0 === e && (e = this.lazyStep),
                  this._delayTick(e),
                  this._lazyTick(e);
              }),
              t(e, [
                {
                  key: "isEmptyWithoutDelayList",
                  get: function () {
                    var e = this._lazyWaiting
                        .filter(function (e) {
                          return (e.lazyPriority || b.None) >= b.WithoutDelay;
                        })
                        .map(function (e) {
                          return e.name;
                        }),
                      n = e.join(", ");
                    return (
                      n !== this._lastWithoutDelayString &&
                        ((this._lastWithoutDelayString = n),
                        console.log("withoutDelayList", n)),
                      0 === e.length
                    );
                  },
                },
              ]),
              e
            );
          })()
        );
        C._instance = void 0;
        var W = e("bundleManager", C.getInstance());
        (globalThis.loadGame = W.loadGame.bind(W)), o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BundleUpdateOnNative.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./State.ts"],
  function (t) {
    "use strict";
    var e, a, s, i, n, o, l, r, h, c;
    return {
      setters: [
        function (t) {
          (e = t.inheritsLoose), (a = t.createClass);
        },
        function (t) {
          (s = t.cclegacy),
            (i = t._decorator),
            (n = t.sys),
            (o = t.native),
            (l = t.Tween),
            (r = t.tween),
            (h = t.Component);
        },
        function (t) {
          c = t.state;
        },
      ],
      execute: function () {
        var _;
        s._RF.push(
          {},
          "41215lZxEBEAZsLM+ausw9B",
          "BundleUpdateOnNative",
          void 0
        );
        var u = i.ccclass;
        t(
          "BundleUpdateOnNative",
          u("BundleUpdateOnNative")(
            (_ = (function (t) {
              function s() {
                for (
                  var e, a = arguments.length, s = new Array(a), i = 0;
                  i < a;
                  i++
                )
                  s[i] = arguments[i];
                return (
                  ((e = t.call.apply(t, [this].concat(s)) || this)._updating =
                    !1),
                  (e._manifestStoragePath = ""),
                  (e._bundleStoragePath = ""),
                  (e._am = void 0),
                  (e._failCount = 0),
                  (e._manifestUrl = ""),
                  (e._lastResourceDomainKey = ""),
                  (e._rsDomain = ""),
                  (e._bundleName = ""),
                  (e._onProgress = function () {}),
                  (e._onComplete = function () {}),
                  (e._manifestFileName = "project.manifest"),
                  e
                );
              }
              e(s, t);
              var i = s.prototype;
              return (
                (i.updateBundle = function (t, e, a) {
                  if (n.isNative)
                    if (this._updating)
                      this._onComplete(!1, "Vui lòng đợi game tải xong");
                    else {
                      (this._onProgress = e.bind(this)),
                        (this._onComplete = a.bind(this)),
                        this._onProgress("Checking", 0.01),
                        (this._failCount = 0),
                        (this._updating = !0),
                        (c.isNativeDownloading = !0),
                        (this._bundleName = t),
                        (this._rsDomain =
                          localStorage.getItem("lastResourceDomain") || "");
                      var s = n.platform == n.Platform.IOS ? "ios" : "android",
                        i = this._rsDomain + "/" + s + "/" + this._bundleName;
                      (this._manifestUrl = i + "/" + this._manifestFileName),
                        (this._lastResourceDomainKey =
                          "lastResourceDomain" + this._bundleName),
                        (this._manifestStoragePath =
                          o.fileUtils.getWritablePath() +
                          "/bundles/" +
                          this._bundleName +
                          "/manifest/"),
                        this._manifestStoragePath.replace(/\/\//g, "/"),
                        o.fileUtils.createDirectory(this._manifestStoragePath),
                        (this._manifestStoragePath += this._manifestFileName),
                        (this._bundleStoragePath =
                          o.fileUtils.getWritablePath() +
                          "/bundles/" +
                          this._bundleName +
                          "/data/"),
                        this._bundleStoragePath.replace(/\/\//g, "/"),
                        o.fileUtils.createDirectory(this._bundleStoragePath);
                      var l = o.fileUtils.getSearchPaths();
                      l.indexOf(this._bundleStoragePath) < 0 &&
                        l.unshift(this._bundleStoragePath),
                        o.fileUtils.setSearchPaths(l),
                        this.checkLocalManifest();
                    }
                }),
                (i.checkLocalManifest = function () {
                  var t = localStorage.getItem(this._lastResourceDomainKey);
                  console.log("lastResourceDomainBundle: ", t),
                    t == this._rsDomain &&
                    o.fileUtils.isFileExist(this._manifestStoragePath)
                      ? this.updateAsset()
                      : this.downloadLocalManifest();
                }),
                (i.updateCallback = function (t) {
                  var e,
                    a,
                    s = !1;
                  switch (t.getEventCode()) {
                    case o.EventAssetsManager.NEW_VERSION_FOUND:
                      break;
                    case o.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                      null == (e = this._am) || e.setEventCallback(null),
                        (this._am = void 0),
                        this.downloadLocalManifest();
                      break;
                    case o.EventAssetsManager.UPDATE_PROGRESSION:
                      var i = t.getPercent();
                      Number.isNaN(i)
                        ? this._onProgress("Downloading")
                        : this._onProgress("Downloading", i);
                      break;
                    case o.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                    case o.EventAssetsManager.ERROR_PARSE_MANIFEST:
                      s = !0;
                      break;
                    case o.EventAssetsManager.ALREADY_UP_TO_DATE:
                    case o.EventAssetsManager.UPDATE_FINISHED:
                      localStorage.setItem(
                        this._lastResourceDomainKey,
                        this._rsDomain
                      ),
                        (this._updating = !1),
                        (c.isNativeDownloading = !1),
                        this._onComplete(!0);
                      break;
                    case o.EventAssetsManager.UPDATE_FAILED:
                    case o.EventAssetsManager.ERROR_UPDATING:
                    case o.EventAssetsManager.ERROR_DECOMPRESS:
                      s = !0;
                  }
                  s &&
                    (null == (a = this._am) || a.setEventCallback(null),
                    (this._am = void 0),
                    this.retry(t.getMessage()));
                }),
                (i.downloadLocalManifest = function () {
                  var t = this;
                  this._onProgress("Checking", 0.01);
                  var e = new o.Downloader();
                  e.createDownloadTask(
                    this._manifestUrl,
                    this._manifestStoragePath
                  ),
                    (e.onProgress = function (t, e, a, s) {}),
                    (e.onError = function (a, s, i, n) {
                      (e = new o.Downloader()), t.retry(n);
                    }),
                    (e.onSuccess = function (e) {
                      t.updateAsset();
                    });
                }),
                (i.updateAsset = function () {
                  (this._am = new o.AssetsManager(
                    this._manifestStoragePath,
                    this._bundleStoragePath
                  )),
                    this._am.setEventCallback(this.updateCallback.bind(this)),
                    this._am.getState() === o.AssetsManager.State.UNINITED &&
                      this._am.loadLocalManifest(this._manifestStoragePath),
                    this._am.update();
                }),
                (i.retry = function (t) {
                  var e = this;
                  (this._failCount = this._failCount + 1),
                    this._failCount <= 3
                      ? (l.stopAllByTarget(this.node),
                        r(this.node)
                          .delay(3)
                          .call(function () {
                            e.checkLocalManifest();
                          })
                          .start())
                      : ((this._updating = !1),
                        (c.isNativeDownloading = !1),
                        this._onComplete(!1, t));
                }),
                (i.onDestroy = function () {
                  n.isNative &&
                    this._am &&
                    (this._am.setEventCallback(null), (this._am = void 0));
                }),
                a(s, [
                  {
                    key: "isDownloading",
                    get: function () {
                      return this._updating;
                    },
                  },
                ]),
                s
              );
            })(h))
          ) || _
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CardItem.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts"],
  function (t) {
    "use strict";
    var e, r, i, n, s, o, c, a, l, d, u, h, p, f, _;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (r = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (o = t._decorator),
            (c = t.Sprite),
            (a = t.Button),
            (l = t.SpriteFrame),
            (d = t.Vec3),
            (u = t.Color),
            (h = t.Tween),
            (p = t.Component);
        },
        function (t) {
          (f = t.eventManager), (_ = t.EventKey);
        },
      ],
      execute: function () {
        var v, m, b, g, S, C, y, I, E;
        s._RF.push({}, "52d19nOijBGoqu+3PdUtl+l", "CardItem", void 0);
        var F = o.ccclass,
          O = o.property;
        t(
          "CardItem",
          ((v = F("CardItem")),
          (m = O(c)),
          (b = O(a)),
          (g = O([l])),
          v(
            ((y = e(
              (C = (function (t) {
                function e() {
                  for (
                    var e, r = arguments.length, s = new Array(r), o = 0;
                    o < r;
                    o++
                  )
                    s[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    i(e, "spr_card", y, n(e)),
                    i(e, "button", I, n(e)),
                    i(e, "sprFrame_cards", E, n(e)),
                    (e.card = null),
                    (e.isSelected = !1),
                    (e.locked_position = d.ZERO),
                    (e._zOrder = 0),
                    e
                  );
                }
                r(e, t);
                var s = e.prototype;
                return (
                  (s.setAsHideCard = function () {
                    var t;
                    this.spr_card &&
                      (this.spr_card.spriteFrame =
                        null != (t = this.sprFrame_cards[0])
                          ? t
                          : this.spr_card.spriteFrame),
                      this.spr_card && (this.spr_card.color = u.WHITE);
                  }),
                  (s.setInteractable = function (t) {
                    this.button && (this.button.interactable = t);
                  }),
                  (s.reset = function () {
                    h.stopAllByTarget(this.node),
                      this.setAsHideCard(),
                      (this.isSelected = !1),
                      this.setInteractable(!1),
                      this.hide();
                  }),
                  (s.onClick = function () {
                    this.isSelected = !this.isSelected;
                    var t = new d(this.locked_position);
                    (t.y += this.isSelected ? 20 : 0),
                      this.node.setPosition(t),
                      this.isSelected
                        ? f.emit(_.CARD_SELECTED, this)
                        : f.emit(_.CARD_UNSELECTED, this);
                  }),
                  (s.getSelected = function () {
                    return this.isSelected;
                  }),
                  (s.cannotBeSelected = function () {
                    (this.isSelected = !1),
                      this.node.setPosition(this.locked_position),
                      this.setGray(),
                      this.setInteractable(!1);
                  }),
                  (s.selected = function (t) {
                    void 0 === t && (t = !0), (this.isSelected = t);
                    var e = new d(this.locked_position);
                    (e.y += this.isSelected ? 20 : 0), this.node.setPosition(e);
                  }),
                  (s.setGray = function () {
                    this.spr_card && (this.spr_card.color = u.GRAY);
                  }),
                  (s.setWhite = function () {
                    this.spr_card && (this.spr_card.color = u.WHITE);
                  }),
                  (s.lockPosition = function (t) {
                    this.locked_position = new d(t);
                  }),
                  (s.canBeSelected = function (t) {
                    void 0 === t && (t = !1),
                      t &&
                        ((this.isSelected = !1),
                        this.node.setPosition(this.locked_position)),
                      this.spr_card && (this.spr_card.color = u.WHITE),
                      this.setInteractable(!0);
                  }),
                  (s.show = function () {
                    var t = this;
                    if (null != this.card) {
                      var e,
                        r = this.sprFrame_cards.filter(function (e) {
                          var r;
                          return (
                            e.name.indexOf(
                              (null == (r = t.card)
                                ? void 0
                                : r.getResourceName()) || ""
                            ) >= 0
                          );
                        });
                      if (r.length > 0)
                        this.spr_card &&
                          (this.spr_card.spriteFrame =
                            null != (e = r[0]) ? e : this.spr_card.spriteFrame);
                      else this.setAsHideCard();
                    }
                    (this.node.active = !0),
                      this.spr_card && (this.spr_card.color = u.WHITE);
                  }),
                  (s.hide = function () {
                    (this.node.active = !1),
                      this.spr_card && (this.spr_card.color = u.WHITE);
                  }),
                  (s.setCard = function (t) {
                    this.card = t;
                  }),
                  (s.getCard = function () {
                    return this.card;
                  }),
                  (s.getCode = function () {
                    return null == this.card ? -1 : this.card.serverCode;
                  }),
                  (s.setAsOnTop = function () {
                    var t;
                    this.node.setSiblingIndex(
                      ((null == (t = this.node.parent)
                        ? void 0
                        : t.children.length) || 0) - 1
                    );
                  }),
                  (s.isCanSelect = function () {
                    var t;
                    return !(null == (t = this.button) || !t.interactable);
                  }),
                  (s.getColor = function () {
                    var t;
                    return null == (t = this.spr_card) ? void 0 : t.color;
                  }),
                  (s.setLocalZOrder = function (t) {
                    var r, i;
                    (this._zOrder = t),
                      null == (r = this.node) ||
                        null == (i = r.parent) ||
                        i.children
                          .map(function (t) {
                            return t.getComponent(e);
                          })
                          .sort(function (t, e) {
                            return (
                              ((null == t ? void 0 : t._zOrder) || 0) -
                              ((null == e ? void 0 : e._zOrder) || 0)
                            );
                          })
                          .forEach(function (t, e, r) {
                            var i;
                            return null == t || null == (i = t.node)
                              ? void 0
                              : i.setSiblingIndex(r.length);
                          });
                  }),
                  (s.getLocalZOrder = function () {
                    return this._zOrder;
                  }),
                  e
                );
              })(p)).prototype,
              "spr_card",
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
            (I = e(C.prototype, "button", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = e(C.prototype, "sprFrame_cards", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (S = C))
          ) || S)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CardPooling.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CardItem.ts"],
  function (e) {
    "use strict";
    var t, n, o, r, i, a, l, d, c, s, u;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (i = e.cclegacy),
            (a = e._decorator),
            (l = e.instantiate),
            (d = e.Vec3),
            (c = e.Tween),
            (s = e.Component);
        },
        function (e) {
          u = e.CardItem;
        },
      ],
      execute: function () {
        var p, f, h, v, _;
        i._RF.push({}, "9eb0bXmVghMdYaMVoNl+bpZ", "CardPooling", void 0);
        var m = a.ccclass,
          g = a.property;
        e(
          "CardPooling",
          ((p = m("CardPooling")),
          (f = g(u)),
          p(
            ((_ = t(
              (v = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, i = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    i[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    o(t, "card_template", _, r(t)),
                    (t.pooled_card = []),
                    t
                  );
                }
                n(t, e);
                var i = t.prototype;
                return (
                  (i.onLoad = function () {
                    for (var e = 0; e < 52; e++) {
                      var t,
                        n,
                        o = l(
                          null == (t = this.card_template) ? void 0 : t.node
                        );
                      if (o) {
                        (o.name = "card_00" + e),
                          (o.parent =
                            (null == (n = this.card_template)
                              ? void 0
                              : n.node.parent) || null),
                          (o.active = !1);
                        var r = o.getComponent(u);
                        r && this.pooled_card.push(r);
                      }
                    }
                  }),
                  (i.getPooledCard = function () {
                    var e = this.pooled_card.filter(function (e) {
                      return !e.node.active;
                    });
                    if (e.length > 0) {
                      var t,
                        n = e[0];
                      return (
                        null == n || n.setAsHideCard(),
                        null == n ||
                          n.node.setSiblingIndex(this.pooled_card.length - 1),
                        null == n ||
                          n.node.setPosition(
                            (null == (t = this.card_template)
                              ? void 0
                              : t.node.position) || d.ZERO
                          ),
                        n
                      );
                    }
                    return null;
                  }),
                  (i.stopAllTweenAndReleaseAllCard = function () {
                    this.pooled_card.forEach(function (e) {
                      (e.node.active = !1), c.stopAllByTarget(e.node);
                    });
                  }),
                  (i.reset = function () {
                    var e = this;
                    this.pooled_card.forEach(function (t) {
                      var n, o;
                      t.reset(),
                        t.node.setScale(
                          (null == (n = e.card_template)
                            ? void 0
                            : n.node.scale) || d.ZERO
                        ),
                        t.node.setPosition(
                          (null == (o = e.card_template)
                            ? void 0
                            : o.node.position) || d.ZERO
                        );
                    });
                  }),
                  (i.clearCardsNotInTheseCards = function (e) {
                    var t = this;
                    this.pooled_card.forEach(function (n) {
                      var o;
                      e.filter(function (e) {
                        return e.name == n.name;
                      }).length <= 0 &&
                        (n.reset(),
                        n.node.setPosition(
                          (null == (o = t.card_template)
                            ? void 0
                            : o.node.position) || d.ZERO
                        ));
                    });
                  }),
                  t
                );
              })(s)).prototype,
              "card_template",
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
            (h = v))
          ) || h)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ChipItem.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (i) {
    "use strict";
    var e, t, n, o, l, r, a, s, c, u, h, p, b;
    return {
      setters: [
        function (i) {
          (e = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (n = i.initializerDefineProperty),
            (o = i.assertThisInitialized);
        },
        function (i) {
          (l = i.cclegacy),
            (r = i._decorator),
            (a = i.Label),
            (s = i.Node),
            (c = i.Button),
            (u = i.Vec3),
            (h = i.UIOpacity),
            (p = i.Component);
        },
        function (i) {
          b = i.StringUtils;
        },
      ],
      execute: function () {
        var g, v, f, y, d, w, S, m, _, P, x, z, C, I, L;
        l._RF.push({}, "0c226J9uYhEibR5WaFLLVeK", "ChipItem", void 0);
        var N = r.ccclass,
          G = r.property;
        i(
          "ChipItem",
          ((g = N("ChipItem")),
          (v = G(a)),
          (f = G(s)),
          (y = G(c)),
          (d = G(u)),
          (w = G(Boolean)),
          (S = G()),
          g(
            ((P = e(
              (_ = (function (i) {
                function e() {
                  for (
                    var e, t = arguments.length, l = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    l[r] = arguments[r];
                  return (
                    (e = i.call.apply(i, [this].concat(l)) || this),
                    n(e, "lbl_value", P, o(e)),
                    n(e, "glow", x, o(e)),
                    n(e, "button", z, o(e)),
                    n(e, "lblPos", C, o(e)),
                    n(e, "useGray", I, o(e)),
                    n(e, "opaticyNoSelect", L, o(e)),
                    (e.value = 0),
                    (e.originScale = u.ZERO),
                    e
                  );
                }
                t(e, i);
                var l = e.prototype;
                return (
                  (l.onLoad = function () {
                    var i,
                      e = this,
                      t = new u();
                    this.node.getPosition(t),
                      (t.x += this.lblPos.x),
                      (t.y += this.lblPos.y),
                      null == (i = this.lbl_value) || i.node.setPosition(t),
                      this.node.on("position-changed", function () {
                        var i,
                          t = new u();
                        e.node.getPosition(t),
                          (t.x += e.lblPos.x),
                          (t.y += e.lblPos.y),
                          null == (i = e.lbl_value) || i.node.setPosition(t);
                      }),
                      (this.originScale = new u(this.node.scale));
                  }),
                  (l.show = function (i, e) {
                    var t;
                    (this.value = i),
                      (this.node.active = !0),
                      this.lbl_value &&
                        ((this.lbl_value.string = b.formatMoneyNumber(i)),
                        (this.lbl_value.node.active = !0)),
                      this.glow && (this.glow.active = !1),
                      null == (t = this.button) ||
                        t.node.on("click", function () {
                          null == e || e();
                        });
                  }),
                  (l.selected = function (i) {
                    if (
                      (void 0 === i && (i = !0),
                      this.glow && (this.glow.active = i),
                      this.useGray)
                    ) {
                      var e = this.node.getComponent(h);
                      e && (e.opacity = i ? 255 : this.opaticyNoSelect);
                    }
                  }),
                  (l.selected2 = function (i, e) {
                    if (
                      (void 0 === i && (i = !0),
                      void 0 === e && (e = !1),
                      this.glow && (this.glow.active = i),
                      (this.node.scale = i
                        ? new u(
                            1.2 * this.originScale.x,
                            1.2 * this.originScale.x,
                            1.2 * this.originScale.x
                          )
                        : this.originScale),
                      e &&
                        this.lbl_value &&
                        (this.lbl_value.node.scale = i
                          ? new u(
                              1.2 * this.originScale.x,
                              1.2 * this.originScale.x,
                              1.2 * this.originScale.x
                            )
                          : this.originScale),
                      this.useGray)
                    ) {
                      var t = this.node.getComponent(h);
                      t && (t.opacity = i ? 255 : this.opaticyNoSelect);
                    }
                  }),
                  (l.hide = function () {
                    this.node.active = !1;
                  }),
                  e
                );
              })(p)).prototype,
              "lbl_value",
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
            (x = e(_.prototype, "glow", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(_.prototype, "button", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = e(_.prototype, "lblPos", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new u(0, 15.733, 0);
              },
            })),
            (I = e(_.prototype, "useGray", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (L = e(_.prototype, "opaticyNoSelect", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 150;
              },
            })),
            (m = _))
          ) || m)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ChipPanel.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./ChipItem.ts"],
  function (e) {
    "use strict";
    var t, n, i, r, o, s, c, l, h, u, a, p, d;
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
            (s = e._decorator),
            (c = e.Node),
            (l = e.Button),
            (h = e.Vec3),
            (u = e.Tween),
            (a = e.tween),
            (p = e.Component);
        },
        function (e) {
          d = e.ChipItem;
        },
      ],
      execute: function () {
        var f, v, x, m, g, I, b, C, _, y, P, w, M;
        o._RF.push({}, "c7bfe+/sN1Mo7P8Hg1rfeDT", "ChipPanel", void 0);
        var z = s.ccclass,
          B = s.property;
        e(
          "ChipPanel",
          ((f = z("ChipPanel")),
          (v = B([d])),
          (x = B(c)),
          (m = B(l)),
          (g = B(l)),
          (I = B(h)),
          f(
            ((_ = t(
              (C = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    i(t, "chip_items", _, r(t)),
                    i(t, "content", y, r(t)),
                    i(t, "btn_prev", P, r(t)),
                    i(t, "btn_next", w, r(t)),
                    (t.maxIndex = 3),
                    (t.minIndex = 0),
                    (t.currentIndex = 2),
                    (t.values = []),
                    (t.isMoving = !1),
                    i(t, "originContentPos", M, r(t)),
                    t
                  );
                }
                n(t, e);
                var o = t.prototype;
                return (
                  (o.onLoad = function () {
                    var e,
                      t,
                      n = this,
                      i =
                        this.chip_items[0] && this.chip_items[1]
                          ? Math.abs(
                              this.chip_items[1].node.position.x -
                                this.chip_items[0].node.position.x
                            )
                          : 0;
                    null == (e = this.btn_prev) ||
                      e.node.on("click", function () {
                        n.values.length < 0 ||
                          n.isMoving ||
                          (n.currentIndex > 0 &&
                            (n.currentIndex--,
                            n.currentIndex < n.minIndex &&
                              (n.moveContent(i), n.minIndex--, n.maxIndex--)),
                          n.selectedChip());
                      }),
                      null == (t = this.btn_next) ||
                        t.node.on("click", function () {
                          n.values.length < 0 ||
                            n.isMoving ||
                            (n.currentIndex < n.values.length - 1 &&
                              (n.currentIndex++,
                              n.currentIndex > n.maxIndex &&
                                (n.moveContent(-i),
                                n.minIndex++,
                                n.maxIndex++)),
                            n.selectedChip());
                        });
                  }),
                  (o.selectedChip = function () {
                    var e = this;
                    this.currentIndex >= this.chip_items.length ||
                      this.chip_items.forEach(function (t, n) {
                        e.currentIndex == n ? t.selected() : t.selected(!1);
                      });
                  }),
                  (o.selectedChip2 = function (e) {
                    var t = this;
                    void 0 === e && (e = !1),
                      this.currentIndex >= this.chip_items.length ||
                        this.chip_items.forEach(function (n, i) {
                          t.currentIndex == i
                            ? n.selected2(!0, e)
                            : n.selected2(!1, e);
                        });
                  }),
                  (o.moveContent = function (e) {
                    var t = this;
                    (this.isMoving = !0),
                      u.stopAllByTarget(this.content || void 0),
                      a(this.content)
                        .by(0.1, { position: new h(e, 0, 0) })
                        .call(function () {
                          t.isMoving = !1;
                        })
                        .start();
                  }),
                  (o.getSelectedBetValue = function () {
                    return this.values.length <= 0 ||
                      this.currentIndex >= this.values.length
                      ? 0
                      : this.values[this.currentIndex] || 0;
                  }),
                  (o.reset = function () {
                    var e;
                    u.stopAllByTarget(this.content || void 0),
                      (this.currentIndex = 2),
                      (this.maxIndex = 3),
                      (this.minIndex = 0),
                      null == (e = this.content) ||
                        e.setPosition(this.originContentPos);
                  }),
                  (o.initChipPanel = function (e, t, n) {
                    var i = this;
                    void 0 === n && (n = !1),
                      this.reset(),
                      this.values && (this.values = e),
                      this.chip_items.forEach(function (r, o) {
                        var s = o;
                        o < e.length && e[o]
                          ? r.show(e[o], function () {
                              (i.currentIndex = s),
                                t ? i.selectedChip2(n) : i.selectedChip();
                            })
                          : r.hide();
                      }),
                      t ? this.selectedChip2(n) : this.selectedChip();
                  }),
                  t
                );
              })(p)).prototype,
              "chip_items",
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
            (y = t(C.prototype, "content", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = t(C.prototype, "btn_prev", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = t(C.prototype, "btn_next", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = t(C.prototype, "originContentPos", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new h(-232, 11, 0);
              },
            })),
            (b = C))
          ) || b)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ChipPooling.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, i, n, r, o, s, p, a, l, h, u, c, f, m, g;
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
            (p = t.SpriteFrame),
            (a = t.Node),
            (l = t.instantiate),
            (h = t.Sprite),
            (u = t.randomRangeInt),
            (c = t.Tween),
            (f = t.UIOpacity),
            (m = t.Vec3),
            (g = t.Component);
        },
      ],
      execute: function () {
        var d, v, _, C, y, N, b, F, P;
        o._RF.push({}, "f8583UhVPhN6Y4YQzv+QzMX", "ChipPooling", void 0);
        var z = s.ccclass,
          A = s.property;
        t(
          "ChipPooling",
          ((d = z("ChipPooling")),
          (v = A([p])),
          (_ = A(Number)),
          (C = A(a)),
          d(
            ((b = e(
              (N = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "chip_sprite_frames", b, r(e)),
                    n(e, "count", F, r(e)),
                    n(e, "chip_template", P, r(e)),
                    (e.usingNodes = []),
                    (e.runtimeNodes = []),
                    (e._pool = []),
                    e
                  );
                }
                i(e, t);
                var o = e.prototype;
                return (
                  (o.pool = function () {
                    var t;
                    for (this._pool = [], t = 0; t < this.count; t++) {
                      var e = l(this.chip_template);
                      e && (e.active = !1), e && this._pool.push(e);
                    }
                  }),
                  (o.getChip = function (t, e) {
                    void 0 === e && (e = !1);
                    var i = null;
                    if (this._pool.length > 0 && !e) {
                      if ((i = this._pool.pop() || null)) {
                        var n,
                          r = i.getComponent(h);
                        r &&
                          (r.spriteFrame =
                            null != (n = this.chip_sprite_frames[t])
                              ? n
                              : r.spriteFrame),
                          (i.active = !1),
                          this.usingNodes.push(i);
                      }
                    } else {
                      var o,
                        s,
                        p =
                          null == (o = i = l(this.chip_template))
                            ? void 0
                            : o.getComponent(h);
                      p &&
                        (p.spriteFrame =
                          null != (s = this.chip_sprite_frames[t])
                            ? s
                            : p.spriteFrame),
                        i && (i.active = !1),
                        i && this.runtimeNodes.push(i);
                    }
                    return i && this.node.addChild(i), i;
                  }),
                  (o.getRandomChip = function () {
                    var t = u(0, this.chip_sprite_frames.length);
                    return this.getChip(t);
                  }),
                  (o.getChip2 = function (t, e) {
                    void 0 === e && (e = !1);
                    var i = null;
                    if (this._pool.length > 0) {
                      if ((i = this._pool.pop() || null)) {
                        var n,
                          r = i.getComponent(h);
                        r &&
                          (r.spriteFrame =
                            null != (n = this.chip_sprite_frames[t])
                              ? n
                              : r.spriteFrame),
                          (i.active = !1),
                          this.usingNodes.push(i);
                      }
                    } else {
                      if (!e) return;
                      var o,
                        s,
                        p =
                          null == (o = i = l(this.chip_template))
                            ? void 0
                            : o.getComponent(h);
                      p &&
                        (p.spriteFrame =
                          null != (s = this.chip_sprite_frames[t])
                            ? s
                            : p.spriteFrame),
                        i && (i.active = !1),
                        i && this.runtimeNodes.push(i);
                    }
                    return i && this.node.addChild(i), i;
                  }),
                  (o.getRandomChip2 = function () {
                    var t = u(0, this.chip_sprite_frames.length);
                    return this.getChip2(t);
                  }),
                  (o.topOnChip = function (t) {
                    t && t.setSiblingIndex(this.node.children.length);
                  }),
                  (o.getPayChip = function (t) {
                    var e = -1,
                      i = 0;
                    for (i = 0; i < this.chip_sprite_frames.length; i++) {
                      var n;
                      if (
                        (null == (n = this.chip_sprite_frames[i])
                          ? void 0
                          : n.name) === t
                      ) {
                        e = i;
                        break;
                      }
                    }
                    return this.getChip(e);
                  }),
                  (o.activeAll = function (t) {
                    var e = this;
                    void 0 === t && (t = !0),
                      this.runtimeNodes.forEach(function (t) {
                        if (null != t && null != t) {
                          c.stopAllByTarget(t);
                          var e = t.getComponent(f);
                          e && (e.opacity = 255),
                            c.stopAllByTarget(e || void 0),
                            t.destroy();
                        }
                      }),
                      (this.runtimeNodes = []),
                      this.usingNodes.forEach(function (i) {
                        c.stopAllByTarget(i);
                        var n = i.getComponent(f);
                        n && (n.opacity = 255),
                          c.stopAllByTarget(n || void 0),
                          (i.scale = m.ONE),
                          (i.active = t),
                          e._pool.push(i),
                          (i.name = "standing");
                      }),
                      (this.usingNodes = []);
                  }),
                  (o.clear = function () {
                    this._pool = [];
                  }),
                  e
                );
              })(g)).prototype,
              "chip_sprite_frames",
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
            (F = e(N.prototype, "count", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1e3;
              },
            })),
            (P = e(N.prototype, "chip_template", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = N))
          ) || y)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CommonInfoPopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Define.ts",
    "./CommonPopup.ts",
  ],
  function (e) {
    "use strict";
    var t, s, o, n, i, h, a, p, c, r;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (s = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (i = e.cclegacy), (h = e._decorator), (a = e.Node), (p = e.Sprite);
        },
        function (e) {
          c = e.GameID;
        },
        function (e) {
          r = e.CommonPopup;
        },
      ],
      execute: function () {
        var l, d, _, u, f;
        i._RF.push({}, "39a91vVDfZEh5OlKPb1/UxP", "CommonInfoPopup", void 0);
        var v = h.ccclass,
          m = h.property;
        e(
          "CommonInfoPopup",
          ((l = v("CommonInfoPopup")),
          (d = m([a])),
          l(
            ((f = t(
              (u = (function (e) {
                function t() {
                  for (
                    var t, s = arguments.length, i = new Array(s), h = 0;
                    h < s;
                    h++
                  )
                    i[h] = arguments[h];
                  return (
                    (t = e.call.apply(e, [this].concat(i)) || this),
                    o(t, "node_helps", f, n(t)),
                    t
                  );
                }
                s(t, e);
                var i = t.prototype;
                return (
                  (i.onLoad = function () {
                    this.setOffsetStreamNative(!0),
                      e.prototype.onLoad.call(this);
                  }),
                  (i.setImage = function (e, t) {
                    this.node_helps[e] &&
                      (this.node_helps[e].getComponent(p).spriteFrame = t);
                  }),
                  (i.showInfo = function (e) {
                    switch (
                      (this.node_helps.forEach(function (e) {
                        e && (e.active = !1);
                      }),
                      e)
                    ) {
                      case c.TAIXIU:
                        this.node_helps[0] && (this.node_helps[0].active = !0);
                        break;
                      case c.TRUNGPS:
                        this.node_helps[1] && (this.node_helps[1].active = !0);
                        break;
                      case c.MINIPOKER:
                        this.node_helps[2] && (this.node_helps[2].active = !0);
                        break;
                      case c.RONGHO:
                        this.node_helps[3] && (this.node_helps[3].active = !0);
                        break;
                      case c.TIENLEN:
                        this.node_helps[4] && (this.node_helps[4].active = !0);
                        break;
                      case c.SAM:
                        this.node_helps[5] && (this.node_helps[5].active = !0);
                        break;
                      case c.POKER:
                        this.node_helps[6] && (this.node_helps[6].active = !0);
                        break;
                      case c.LIENG:
                        this.node_helps[7] && (this.node_helps[7].active = !0);
                        break;
                      case c.XITO:
                        this.node_helps[8] && (this.node_helps[8].active = !0);
                        break;
                      case c.BINH:
                        this.node_helps[9] && (this.node_helps[9].active = !0);
                        break;
                      case c.PHOM:
                        this.node_helps[10] &&
                          (this.node_helps[10].active = !0);
                        break;
                      case c.XOCDIA:
                        this.node_helps[11] &&
                          (this.node_helps[11].active = !0);
                    }
                    this.show();
                  }),
                  t
                );
              })(r)).prototype,
              "node_helps",
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
            (_ = u))
          ) || _)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CommonPopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameConfigManager.ts",
    "./GamePlatformManager.ts",
    "./Define.ts",
    "./State.ts",
  ],
  function (i) {
    "use strict";
    var e,
      t,
      n,
      o,
      l,
      a,
      s,
      r,
      c,
      u,
      h,
      p,
      d,
      f,
      m,
      b,
      _,
      g,
      y,
      v,
      S,
      O,
      w,
      x,
      k;
    return {
      setters: [
        function (i) {
          (e = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (n = i.initializerDefineProperty),
            (o = i.assertThisInitialized);
        },
        function (i) {
          (l = i.cclegacy),
            (a = i._decorator),
            (s = i.Button),
            (r = i.Label),
            (c = i.Node),
            (u = i.view),
            (h = i.sys),
            (p = i.UITransform),
            (d = i.UIOpacity),
            (f = i.director),
            (m = i.Sprite),
            (b = i.Color),
            (_ = i.Tween),
            (g = i.Vec3),
            (y = i.tween),
            (v = i.Component);
        },
        function (i) {
          S = i.GameConfigManager;
        },
        function (i) {
          O = i.GamePlatformManager;
        },
        function (i) {
          (w = i.DesignResolution), (x = i.GameID);
        },
        function (i) {
          k = i.state;
        },
      ],
      execute: function () {
        var N,
          P,
          C,
          I,
          R,
          z,
          B,
          T,
          D,
          H,
          A,
          F,
          M,
          U,
          E,
          W,
          G,
          L,
          K,
          V,
          X,
          Y,
          Z,
          j,
          J,
          q,
          Q,
          $,
          ii,
          ei,
          ti,
          ni,
          oi,
          li,
          ai,
          si,
          ri,
          ci,
          ui,
          hi,
          pi;
        l._RF.push({}, "22a9fpXD0JDWrTp320ayN49", "CommonPopup", void 0);
        var di = a.ccclass,
          fi = a.property;
        i(
          "CommonPopup",
          ((N = di("CommonPopup")),
          (P = fi(s)),
          (C = fi(s)),
          (I = fi(r)),
          (R = fi(c)),
          (z = fi(c)),
          (B = fi(c)),
          (T = fi(Boolean)),
          (D = fi(Boolean)),
          (H = fi(Boolean)),
          (A = fi(Boolean)),
          (F = fi(Boolean)),
          (M = fi(Number)),
          (U = fi(Boolean)),
          (E = fi(Number)),
          (W = fi(Number)),
          (G = fi(Number)),
          (L = fi(Number)),
          (K = fi(Boolean)),
          (V = fi(Boolean)),
          N(
            ((Z = e(
              (Y = (function (i) {
                function e() {
                  for (
                    var e, t = arguments.length, l = new Array(t), a = 0;
                    a < t;
                    a++
                  )
                    l[a] = arguments[a];
                  return (
                    (e = i.call.apply(i, [this].concat(l)) || this),
                    n(e, "btn_close", Z, o(e)),
                    n(e, "btn_ok", j, o(e)),
                    n(e, "lbl_message", J, o(e)),
                    n(e, "black_screen", q, o(e)),
                    n(e, "main", Q, o(e)),
                    n(e, "root", $, o(e)),
                    n(e, "canClickOutSide", ii, o(e)),
                    n(e, "useHideImmediately", ei, o(e)),
                    n(e, "useFixedScale", ti, o(e)),
                    n(e, "isNativeUseFixedScale", ni, o(e)),
                    n(e, "dontScale", oi, o(e)),
                    n(e, "fixedScale", li, o(e)),
                    n(e, "isNewResolution", ai, o(e)),
                    n(e, "delay_time_to_allow_click_outside", si, o(e)),
                    n(e, "origin_pos_x", ri, o(e)),
                    n(e, "origin_pos_y", ci, o(e)),
                    n(e, "origin_pos_z", ui, o(e)),
                    n(e, "isPortrait", hi, o(e)),
                    (e.uiTransform = null),
                    (e.uiOpacity = null),
                    (e.inited = !1),
                    (e.onOK = null),
                    (e.onCancel = null),
                    (e.onHide = null),
                    (e.isOpened = !1),
                    (e.resolutionScale = 1),
                    n(e, "isOffsetStreamNative", pi, o(e)),
                    (e.offsetStreamNativeY = 0),
                    e
                  );
                }
                t(e, i);
                var l = e.prototype;
                return (
                  (l.IsOpened = function () {
                    return this.isOpened;
                  }),
                  (l.IsShowing = function () {
                    var i;
                    return null == (i = this.root) ? void 0 : i.active;
                  }),
                  (l.IsOverlap = function (i) {
                    var e;
                    return (
                      !!this.IsOpened() &&
                      (null == (e = this.uiTransform)
                        ? void 0
                        : e.getBoundingBox().intersects(i.getBoundingBox()))
                    );
                  }),
                  (l.IsLiveStreamOverlap = function (i) {
                    return !!this.IsOverlap(i);
                  }),
                  (l.onLoad = function () {
                    var i,
                      e = this,
                      t =
                        null == (i = this.black_screen)
                          ? void 0
                          : i.getComponent(s);
                    null != t &&
                      (null == t ||
                        t.node.on("click", function () {
                          e.canClickOutSide &&
                            e.isOpened &&
                            (null == e.onCancel
                              ? e.isPortrait
                                ? e.hideImmediately()
                                : e.hide()
                              : e.onCancel());
                        })),
                      (this.resolutionScale = this.isNewResolution
                        ? this.getNewResScale()
                        : u.getDesignResolutionSize().width /
                          (this.isPortrait ? w.HeightOld : w.WidthOld));
                  }),
                  (l.getNewResScale = function () {
                    return h.isMobile ? 1 : 0.9;
                  }),
                  (l.init = function () {
                    var i = this;
                    this.main && (this.uiTransform = this.main.getComponent(p)),
                      this.main && (this.uiOpacity = this.main.getComponent(d)),
                      null != this.btn_close &&
                        this.btn_close.node.on("click", function () {
                          (i.black_screen.getComponent(s).interactable = !0),
                            null == i.onCancel
                              ? i.isPortrait
                                ? i.hideImmediately()
                                : i.hide()
                              : i.onCancel();
                        }),
                      null != this.btn_ok &&
                        this.btn_ok.node.on("click", function () {
                          null == i.onOK || i.onOK(),
                            (i.black_screen.getComponent(s).interactable = !0);
                        }),
                      (this.inited = !0);
                  }),
                  (l.setOffsetStreamNative = function (i) {
                    this.isOffsetStreamNative = i;
                  }),
                  (l.checkOffsetStreamNative = function () {
                    if (
                      this.isOffsetStreamNative &&
                      h.isNative &&
                      (!h.isNative ||
                        k.lastGameId === x.TAIXIULIVESTREAM ||
                        k.lastGameId === x.XOCDIA_LIVESTREAM) &&
                      this.uiTransform &&
                      h.os == h.OS.IOS
                    ) {
                      var i, e, t;
                      this.offsetStreamNativeY =
                        ((null == (i = this.uiTransform) ? void 0 : i.height) /
                          4) *
                        -1;
                      var n =
                        null == (e = this.main) ? void 0 : e.position.clone();
                      (n.y += this.offsetStreamNativeY),
                        n && (null == (t = this.main) || t.setPosition(n));
                    }
                  }),
                  (l.setPopup = function (i, e, t, n) {
                    void 0 === e && (e = null),
                      void 0 === t && (t = null),
                      void 0 === n && (n = !0),
                      null != this.lbl_message &&
                        ((this.lbl_message.string = i),
                        null == e
                          ? this.btn_ok && (this.btn_ok.node.active = !1)
                          : (this.btn_ok && (this.btn_ok.node.active = !0),
                            (this.onOK = e)),
                        null == t
                          ? this.btn_close && (this.btn_close.node.active = !1)
                          : (this.btn_close &&
                              (this.btn_close.node.active = !0),
                            (this.onCancel = t)),
                        (this.black_screen.getComponent(s).interactable = n));
                  }),
                  (l.isCanDeactiveRoot = function () {
                    return !0;
                  }),
                  (l.reCalculateResScale = function () {
                    if (!this.isNewResolution) {
                      var i = u.getDesignResolutionSize(),
                        e = i.width < i.height;
                      this.setResolutionScale(
                        i.width / (e ? w.HeightOld : w.WidthOld)
                      );
                    }
                  }),
                  (l.show = function (i) {
                    var e,
                      t,
                      n,
                      o,
                      l,
                      a = this;
                    if (
                      (void 0 === i && (i = function () {}),
                      f.emit("HAS_POPUP_SHOW", this.node.name),
                      this.inited || this.init(),
                      null == this.root ||
                        !this.root.active ||
                        !this.uiOpacity ||
                        1 == this.uiOpacity.opacity)
                    ) {
                      null != this.root &&
                        this.isCanDeactiveRoot() &&
                        (this.root.active = !0),
                        this.node.setSiblingIndex(
                          ((null == (e = this.node.parent)
                            ? void 0
                            : e.children.length) || 0) - 1
                        );
                      var s =
                        null == (t = this.black_screen)
                          ? void 0
                          : t.getComponent(m);
                      null != s && null != s && (s.color = new b(0, 0, 0, 255));
                      var r,
                        c =
                          null == (n = this.black_screen)
                            ? void 0
                            : n.getComponent(d);
                      if (null == c || null == c)
                        c =
                          null == (r = this.black_screen)
                            ? void 0
                            : r.addComponent(d);
                      null != c && null != c && (c.opacity = 200),
                        this.black_screen && (this.black_screen.active = !0),
                        _.stopAllByTarget(this.main || void 0),
                        _.stopAllByTarget(this.uiOpacity || void 0);
                      var u = 0.2,
                        p = S.getPopupScale().clone();
                      if (
                        (((this.useFixedScale && O.isWebMobile()) ||
                          (this.useFixedScale && this.isPortrait) ||
                          (this.isNativeUseFixedScale && h.isNative)) &&
                          (p = new g(
                            this.fixedScale,
                            this.fixedScale,
                            this.fixedScale
                          )),
                        (p.x *= this.resolutionScale),
                        (p.y *= this.resolutionScale),
                        this.isNewResolution &&
                          ((p.x = this.getNewResScale()), (p.y = p.x)),
                        null == (o = this.main) ||
                          o.setPosition(
                            new g(
                              this.origin_pos_x,
                              this.origin_pos_y,
                              this.origin_pos_z
                            )
                          ),
                        null == (l = this.main) ||
                          l.setScale(new g(0.9 * p.x, 0.9 * p.x, 0.9 * p.x)),
                        this.isPortrait)
                      )
                        y(this.main)
                          .to(u, { scale: new g(p.x, p.x, p.x) })
                          .start();
                      else
                        y(this.main)
                          .to(u, {
                            scale: new g(1.1 * p.x, 1.1 * p.x, 1.1 * p.x),
                          })
                          .to(u, { scale: new g(p.x, p.x, p.x) })
                          .start();
                      this.uiOpacity && (this.uiOpacity.opacity = 1),
                        y(this.uiOpacity)
                          .to(u, { opacity: 255 }, { easing: "linear" })
                          .call(function () {
                            null == i || i();
                          })
                          .delay(this.delay_time_to_allow_click_outside)
                          .call(function () {
                            a.isOpened = !0;
                          })
                          .start(),
                        this.checkOffsetStreamNative();
                    }
                  }),
                  (l.showImmediately = function (i) {
                    var e,
                      t,
                      n = this;
                    f.emit("HAS_POPUP_SHOW", this.node.name),
                      this.inited || this.init(),
                      null != this.root &&
                        this.isCanDeactiveRoot() &&
                        (this.root.active = !0),
                      this.node.parent &&
                        this.node.setSiblingIndex(
                          this.node.parent.children.length - 1
                        ),
                      this.black_screen && (this.black_screen.active = !0),
                      _.stopAllByTarget(this.main || void 0),
                      _.stopAllByTarget(this.uiOpacity || void 0),
                      this.uiOpacity && (this.uiOpacity.opacity = 255),
                      null == (e = this.main) ||
                        e.setPosition(
                          new g(
                            this.origin_pos_x,
                            this.origin_pos_y,
                            this.origin_pos_z
                          )
                        );
                    var o = S.getPopupScale().clone();
                    (this.dontScale ||
                      (this.useFixedScale && O.isWebMobile())) &&
                      (o = new g(
                        this.fixedScale,
                        this.fixedScale,
                        this.fixedScale
                      )),
                      (o.x *= this.resolutionScale),
                      (o.y *= this.resolutionScale),
                      this.isNewResolution &&
                        ((o.x = this.getNewResScale()), (o.y = o.x)),
                      null == (t = this.main) || t.setScale(o),
                      y(this.main)
                        .delay(this.delay_time_to_allow_click_outside)
                        .call(function () {
                          n.isOpened = !0;
                        })
                        .start();
                  }),
                  (l.hide = function (i) {
                    var e,
                      t,
                      n = this;
                    if (
                      (void 0 === i && (i = function () {}),
                      f.emit("HAS_POPUP_HIDE"),
                      this.useHideImmediately)
                    )
                      this.hideImmediately(i);
                    else if (
                      this.inited ||
                      (null != (e = this.black_screen) && e.active)
                    ) {
                      this.black_screen && (this.black_screen.active = !1),
                        _.stopAllByTarget(this.main || void 0),
                        _.stopAllByTarget(this.uiOpacity || void 0),
                        this.uiOpacity && (this.uiOpacity.opacity = 255);
                      var o = S.getPopupScale().clone();
                      this.useFixedScale &&
                        O.isWebMobile() &&
                        (o = new g(
                          this.fixedScale,
                          this.fixedScale,
                          this.fixedScale
                        )),
                        (o.x *= this.resolutionScale),
                        (o.y *= this.resolutionScale),
                        this.isNewResolution &&
                          ((o.x = this.getNewResScale()), (o.y = o.x)),
                        null == (t = this.main) || t.setScale(o);
                      y(this.uiOpacity)
                        .to(0.25, { opacity: 1 }, { easing: "linear" })
                        .call(function () {
                          var e;
                          null != n.root &&
                            n.isCanDeactiveRoot() &&
                            (n.root.active = !1),
                            null == (e = n.main) || e.setScale(g.ZERO),
                            null == i || i(),
                            null == n.onHide || n.onHide(),
                            (n.isOpened = !1);
                        })
                        .start();
                    }
                  }),
                  (l.hideImmediately = function (i) {
                    var e, t;
                    void 0 === i && (i = function () {}),
                      f.emit("HAS_POPUP_HIDE"),
                      this.inited &&
                        ((this.isOpened = !1),
                        this.black_screen && (this.black_screen.active = !1),
                        _.stopAllByTarget(this.main || void 0),
                        _.stopAllByTarget(this.uiOpacity || void 0),
                        this.uiOpacity && (this.uiOpacity.opacity = 1),
                        null == (e = this.main) || e.setScale(g.ZERO),
                        null != this.root &&
                          this.isCanDeactiveRoot() &&
                          (this.root.active = !1),
                        null == i || i(),
                        null == (t = this.onHide) || t.call(this));
                  }),
                  (l.setResolutionScale = function (i) {
                    this.resolutionScale = i;
                  }),
                  e
                );
              })(v)).prototype,
              "btn_close",
              [P],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (j = e(Y.prototype, "btn_ok", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = e(Y.prototype, "lbl_message", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = e(Y.prototype, "black_screen", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = e(Y.prototype, "main", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($ = e(Y.prototype, "root", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ii = e(Y.prototype, "canClickOutSide", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (ei = e(Y.prototype, "useHideImmediately", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (ti = e(Y.prototype, "useFixedScale", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (ni = e(Y.prototype, "isNativeUseFixedScale", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (oi = e(Y.prototype, "dontScale", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (li = e(Y.prototype, "fixedScale", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0.8;
              },
            })),
            (ai = e(Y.prototype, "isNewResolution", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (si = e(Y.prototype, "delay_time_to_allow_click_outside", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (ri = e(Y.prototype, "origin_pos_x", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (ci = e(Y.prototype, "origin_pos_y", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (ui = e(Y.prototype, "origin_pos_z", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (hi = e(Y.prototype, "isPortrait", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (pi = e(Y.prototype, "isOffsetStreamNative", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (X = Y))
          ) || X)
        );
        l._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/Config.ts", ["cc"], function (t) {
  "use strict";
  var i;
  return {
    setters: [
      function (t) {
        i = t.cclegacy;
      },
    ],
    execute: function () {
      i._RF.push({}, "b6985XYxCNH1o05h2OKY7sF", "Config", void 0);
      t(
        "config",
        new (function () {
          (this.phishing_domain = []),
            (this.sport_domain = ""),
            (this.ws_sport_domain = ""),
            (this.top_sport_domain = ""),
            (this.xd_livestream_ws_url = ""),
            (this.tx_livestream_ws_url = "");
        })()
      );
      i._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/Define.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./EventManager.ts"],
  function (e) {
    "use strict";
    var i, o, n, a;
    return {
      setters: [
        function (e) {
          i = e.extends;
        },
        function (e) {
          (o = e.cclegacy), (n = e.sys);
        },
        function (e) {
          a = e.EventKey;
        },
      ],
      execute: function () {
        e("getBundleInfo", function (e) {
          if (e === v.TIENLEN) return i({}, L.card, { scene: t.tlmn });
          if (e === v.SAM) return i({}, L.card, { scene: t.sam });
          if (e === v.BINH) return i({}, L.card, { scene: t.binh });
          if (e === v.LIENG)
            return i({}, L.card, { scene: t.lieng, isBuyIn: !0 });
          if (e === v.POKER)
            return i({}, L.card, { scene: t.poker, isBuyIn: !0 });
          if (e === v.XITO)
            return i({}, L.card, { scene: t.xito, isBuyIn: !0 });
          if (e === v.PHOM) return i({}, L.card, { scene: t.phom });
          if (e === v.XOCDIA) return L.xocdia;
          if (e === v.BAU_CUA_FULL) return L.baucua;
          if (e === v.XOCDIA_TULINH) return L.xocdia_squidgame;
          if (e === v.RONGHO) return L.rongho;
          if (e === v.BAUCUABIG5) return L.baucuabig5;
          if (e === v.TAIXIULIVESTREAM || e === v.TAIXIULIVESTREAM_2)
            return n.isNative
              ? i({}, L.taixiu_livestream, {
                  scene: t.taixiu_livestream_portrait,
                  isPortrait: !0,
                })
              : L.taixiu_livestream;
          if (e === v.XOCDIA_LIVESTREAM || e === v.XOCDIA_LIVESTREAM_2)
            return n.isNative
              ? i({}, L.xocdia_livestream, {
                  scene: t.xocdia_livestream_portrait,
                  isPortrait: !0,
                })
              : L.xocdia_livestream;
          if (e === v.MINIPOKER) return L.slot_mnpk;
          if (e === v.TRUNGPS) return L.slot_man;
          if (e === v.ASPHALT) return L.slot_dc;
          if (e === v.MIB) return L.slot_angrybird;
          if (e === v.CAOTHAP) return L.trenduoi;
          if (e === v.BIGCITY) return L.slot_pvz;
          if (e === v.DIABLO) return L.slot_naruto;
          if (e === v.DRAGONBALL) return L.dragonball;
          if (e === v.BAYTAMCHIN_THETHAO)
            return n.isNative || n.isMobile
              ? L.sportbook
              : i({}, L.sportbook, { isPortrait: !1, scene: t.sb_web });
          if (e === v.VOLTA_GAME) return L.volta;
          if (e === v.LODE) return L.lode;
          if (e === v.LODESIEUTOC) return L.lodesieutoc;
          if (e === v.CA) return L.mitek_fish;
          if (e === v.ALADIN) return L.mitek_aladin;
          if (e === v.SICBO) return L.mitek_sicbo;
          if (e === v.TRUTIEN) return L.mitek_trutien;
          if (e === v.AXIE) return L.mitek_axie;
          if (e === v.LANHAILOC) return L.mitek_lanhailoc;
          if (e === v.XI_SPIDER) return L.mitek_xispider;
          if (e === v.DUA_NGUA) return L.mitek_duangua;
          if (e === v.THAN_BAI) return L.mitek_thanbai;
          if (e === v.C5_BACCARAT_LIVESTREAM) return L.c5_baccarat_livestream;
          if (e === v.C5_RONGHO_LIVESTREAM) return L.c5_rongho_livestream;
          if (e === v.C5_BAUCUA_LIVE) return L.c5_baucua_livestream;
          if (e === v.C5_XOCDIALIVE) return L.c5_xocdia_livestream;
          if (e === v.C5_SICBO_LIVESTREAM) return L.c5_sicbo_livestream;
          if (e === v.EVO_GAMES)
            return n.isNative ||
              (n.isBrowser && n.platform === n.Platform.MOBILE_BROWSER)
              ? i({}, L.evo_games, {
                  scene: t.evo_games_portrait,
                  isPortrait: !0,
                })
              : L.evo_games;
          if (e === v.VIA_GAMES)
            return n.isNative ||
              (n.isBrowser && n.platform === n.Platform.MOBILE_BROWSER)
              ? i({}, L.via_games, {
                  scene: t.via_games_portrait,
                  isPortrait: !0,
                })
              : L.via_games;
          if (e === v.SEXY_GAMES)
            return n.isNative ||
              (n.isBrowser && n.platform === n.Platform.MOBILE_BROWSER)
              ? i({}, L.sexy_games, {
                  scene: t.sexy_games_portrait,
                  isPortrait: !0,
                })
              : L.sexy_games;
          if (e === v.VIVO_GAMES)
            return n.isNative ||
              (n.isBrowser && n.platform === n.Platform.MOBILE_BROWSER)
              ? i({}, L.vivo_games, {
                  scene: t.vivo_games_portrait,
                  isPortrait: !0,
                })
              : L.vivo_games;
        }),
          o._RF.push({}, "bf1bbscrJpMq48mfrdqNAL4", "Define", void 0);
        e("StorageKey", {
          GameConfig: "X_GAME_CONFIG",
          LocalVersion: "LocalVersion",
          RsDomain: "rs_domain",
          RsStaticDomain: "rs_static_domain",
          Music: "enableBackgroundMusic",
          SoundFX: "enableSound",
          LoggedUsername: "EBUFWEUIFWEBWHEHWVHDWEHVDWEV1",
          LoggedPassword: "EBUFWEUIFWEBWHEHWVHDWEHVDWEV2",
          isLastLoginSucceed: "IS_LAST_LOGIN_SUCCEED",
        });
        var t = e("SceneName", {
            lobby: "game",
            sb: "Sb",
            sb_web: "Sb_landscape",
            rongho: "RongHoScene",
            baucua: "BauCuaScene",
            baucuabig5: "BauCuaBig5Scene",
            xocdia: "XocDiaScene",
            xocdia_squidgame: "XocDiaSquidGameScene",
            xocdia_livestream: "xd_live",
            xocdia_livestream_portrait: "xd_live_portrait",
            taixiu_livestream: "tx_live",
            taixiu_livestream_portrait: "tx_live_portrait",
            lode: "LoDe",
            lodesieutoc: "lodesieutoc",
            poker: "poker",
            lieng: "lieng",
            xito: "xito",
            binh: "binh",
            phom: "phom",
            tlmn: "tlmn",
            sam: "sam",
            slot_angrybird: "AngryBirdScene",
            slot_dc: "DCScene",
            slot_naruto: "NarutoScene",
            slot_pvz: "PVZScene",
            mitek_axie: "g9938L",
            mitek_aladin: "g9976L",
            mitek_sicbo: "R3986L",
            mitek_lanhailoc: "g9930L",
            mitek_fish: "Scenes/g1998",
            mitek_thanbai: "g9881L",
            mitek_trutien: "g9937P",
            mitek_duangua: "scenes/g6996L",
            mitek_xispider: "R3965L",
            volta: "volta",
            c5_baccarat_livestream: "c5_baccarat_livestream",
            c5_rongho_livestream: "c5_rongholive",
            c5baucualive: "c5baucualive",
            c5xocdialive: "C5XocDiaLiveScene",
            c5_sicbo_livestream: "c5-sicbo-livestream",
            evo_games_landscape: "evo_games_Landscape",
            evo_games_portrait: "evo_games_Portrait",
            via_games_landscape: "via_games_Landscape",
            via_games_portrait: "via_games_Portrait",
            sexy_games_landscape: "sexy_games_Landscape",
            sexy_games_portrait: "sexy_games_Portrait",
            vivo_games_landscape: "vivo_games_Landscape",
            vivo_games_portrait: "vivo_games_Portrait",
          }),
          r = n.platform === n.Platform.ANDROID ? "-tiny" : "",
          s = r || (n.isNative ? "-tiny" : ""),
          m = e("Priority", {
            Game_Icon: 1,
            Room_LobbyLazy_Money_MitekCommon: 2,
            Lobby_MiniLazy_MitekMock: 3,
            Mini: 4,
            BaseSub: 5,
            Base: 6,
          }),
          _ = e("LazyPriority", {
            None: 0,
            Prefab2: 1,
            Spine4: 2,
            Spine3: 3,
            Spine2: 4,
            Mini: 5,
            Money: 6,
            Lobby: 7,
            Common: 8,
            Phone: 9,
            Pc: 10,
            Prefab1: 11,
            Spine1: 12,
            Sprite: 13,
            WithoutDelay: 14,
            ListScroll: 15,
            MoneyClick: 16,
            JackpotClick: 17,
            PopupClick: 18,
            MiniClick: 19,
            PopupCommonClick: 20,
            WithoutCondition: 21,
          }),
          c = { name: "base", isPersistent: !0, priority: m.Base },
          d = {
            common: {
              name: "base-common",
              isPersistent: !0,
              priority: m.BaseSub,
              depend: c,
              isAddon: !0,
              lazyEvent: a.LazyCommon,
              lazyPriority: _.Common,
              lazyPrefabList: ["avatar", "dialog", "info", "login", "otp"],
            },
            font: {
              name: "base-font",
              isPersistent: !0,
              priority: m.BaseSub,
              isAddon: !0,
              depend: c,
            },
            bet: { name: "base-bet", priority: m.BaseSub, depend: c },
            table: { name: "base-table", priority: m.BaseSub, depend: c },
            livestream: {
              name: "base-livestream",
              priority: m.BaseSub,
              depend: c,
            },
            slot: { name: "base-slot", priority: m.BaseSub, depend: c },
            card: { name: "base-card", priority: m.BaseSub },
          },
          l = { name: "mini", priority: m.Mini, isPersistent: !0, depend: c },
          p = {
            name: "mini-lazy",
            priority: m.Lobby_MiniLazy_MitekMock,
            depend: [l, d.common],
            isPersistent: !0,
            isAddon: !0,
            lazyEvent: a.LazyMini,
            lazyPriority: _.Mini,
            lazyPrefabList: ["mini_landscape", "mini_portrait"],
          },
          b = { name: "mock", priority: m.Lobby_MiniLazy_MitekMock },
          y = {
            name: "lobby",
            scene: t.lobby,
            priority: m.Lobby_MiniLazy_MitekMock,
            depend: l,
          },
          g = {
            name: "room",
            isAddon: !0,
            priority: m.Room_LobbyLazy_Money_MitekCommon,
            depend: [d.table, d.common, d.font],
            prefab: "room",
          },
          u = {
            name: "cc-common",
            priority: m.Room_LobbyLazy_Money_MitekCommon,
            depend: [b, l],
          },
          L = e("Bundle", {
            base_common: d.common,
            base_table: d.table,
            lobby: y,
            lobby_lazy: {
              name: "lobby-lazy",
              priority: m.Room_LobbyLazy_Money_MitekCommon,
              depend: [y, d.common],
              isAddon: !0,
              lazyEvent: a.LazyLobby,
              lazyPriority: _.Lobby,
              lazyPrefabList: ["popup"],
            },
            lobby_money: {
              name: "lobby-money",
              priority: m.Room_LobbyLazy_Money_MitekCommon,
              depend: [y, d.common],
              isAddon: !0,
              lazyEvent: a.LazyMoney,
              lazyPriority: _.Money,
              lazyPrefabList: ["topup", "cashout", "crypto", "verify"],
            },
            lobby_phone: {
              name: "lobby-phone" + s,
              priority: m.Room_LobbyLazy_Money_MitekCommon,
              depend: y,
              isAddon: !0,
              isSkipVersionCheck: !0,
              lazyEvent: a.LazyPhone,
              lazyPriority: _.Phone,
              lazyPrefabList: ["icon"],
            },
            lobby_pc: {
              name: "lobby-pc",
              priority: m.Room_LobbyLazy_Money_MitekCommon,
              depend: y,
              isAddon: !0,
              isSkipVersionCheck: !0,
              lazyEvent: a.LazyPc,
              lazyPriority: _.Pc,
              lazyPrefabList: ["icon"],
            },
            lobby_prefab1: {
              name: "lobby-prefab1",
              priority: m.Room_LobbyLazy_Money_MitekCommon,
              depend: y,
              isAddon: !0,
              isSkipVersionCheck: !0,
              lazyEvent: a.LazyPrefab1,
              lazyPriority: _.Prefab1,
              lazyPrefabList: ["icon"],
            },
            lobby_prefab2: {
              name: "lobby-prefab2",
              priority: m.Room_LobbyLazy_Money_MitekCommon,
              depend: y,
              isAddon: !0,
              isSkipVersionCheck: !0,
              lazyEvent: a.LazyPrefab2,
              lazyPriority: _.Prefab2,
              lazyPrefabList: ["icon"],
            },
            lobby_spine1: {
              name: "lobby-spine1" + s,
              priority: m.Room_LobbyLazy_Money_MitekCommon,
              depend: y,
              isAddon: !0,
              isSkipVersionCheck: !0,
              lazyEvent: a.LazySpine1,
              lazyPriority: _.Spine1,
              lazyPrefabList: ["icon"],
            },
            lobby_spine1_pc: {
              name: "lobby-spine1-pc",
              priority: m.Room_LobbyLazy_Money_MitekCommon,
              depend: y,
              isAddon: !0,
              isSkipVersionCheck: !0,
              lazyEvent: a.LazySpine1,
              lazyPriority: _.Spine1,
              lazyPrefabList: ["icon"],
            },
            lobby_spine2: {
              name: "lobby-spine2" + r,
              priority: m.Room_LobbyLazy_Money_MitekCommon,
              depend: y,
              isAddon: !0,
              isSkipVersionCheck: !0,
              lazyEvent: a.LazySpine2,
              lazyPriority: _.Spine2,
              lazyPrefabList: ["icon"],
            },
            lobby_spine2_pc: {
              name: "lobby-spine2-pc",
              priority: m.Room_LobbyLazy_Money_MitekCommon,
              depend: y,
              isAddon: !0,
              isSkipVersionCheck: !0,
              lazyEvent: a.LazySpine2,
              lazyPriority: _.Spine2,
              lazyPrefabList: ["icon"],
            },
            lobby_spine3: {
              name: "lobby-spine3" + r,
              priority: m.Room_LobbyLazy_Money_MitekCommon,
              depend: y,
              isAddon: !0,
              isSkipVersionCheck: !0,
              lazyEvent: a.LazySpine3,
              lazyPriority: _.Spine3,
              lazyPrefabList: ["icon"],
            },
            lobby_spine3_pc: {
              name: "lobby-spine3-pc",
              priority: m.Room_LobbyLazy_Money_MitekCommon,
              depend: y,
              isAddon: !0,
              isSkipVersionCheck: !0,
              lazyEvent: a.LazySpine3,
              lazyPriority: _.Spine3,
              lazyPrefabList: ["icon"],
            },
            lobby_spine4: {
              name: "lobby-spine4" + r,
              priority: m.Room_LobbyLazy_Money_MitekCommon,
              depend: y,
              isAddon: !0,
              isSkipVersionCheck: !0,
              lazyEvent: a.LazySpine4,
              lazyPriority: _.Spine4,
              lazyPrefabList: ["icon"],
            },
            lobby_spine4_pc: {
              name: "lobby-spine4-pc",
              priority: m.Room_LobbyLazy_Money_MitekCommon,
              depend: y,
              isAddon: !0,
              isSkipVersionCheck: !0,
              lazyEvent: a.LazySpine4,
              lazyPriority: _.Spine4,
              lazyPrefabList: ["icon"],
            },
            lobby_sprite: {
              name: "lobby-sprite",
              priority: m.Room_LobbyLazy_Money_MitekCommon,
              depend: y,
              isAddon: !0,
              isSkipVersionCheck: !0,
              lazyEvent: a.LazySprite,
              lazyPriority: _.Sprite,
              lazyPrefabList: ["icon"],
            },
            lobby_sprite_pc: {
              name: "lobby-sprite-pc",
              priority: m.Room_LobbyLazy_Money_MitekCommon,
              depend: y,
              isAddon: !0,
              isSkipVersionCheck: !0,
              lazyEvent: a.LazySprite,
              lazyPriority: _.Sprite,
              lazyPrefabList: ["icon"],
            },
            room: g,
            card: {
              name: "card",
              depend: [g, d.card, d.table, l, d.bet],
              prefab: "bookRoom",
            },
            mini_lazy: p,
            slot_mnpk: {
              name: "slot-mnpk",
              depend: [d.slot, p, d.common, d.font, d.card, d.bet],
              isAddon: !0,
            },
            slot_man: {
              name: "slot-man",
              depend: [d.slot, p, d.common, d.font, d.bet],
              isAddon: !0,
            },
            slot_event_tet: {
              name: "slot_event_tet",
              depend: [l, d.common, d.font],
              isAddon: !0,
            },
            trenduoi: {
              name: "trenduoi",
              depend: [p, d.common, d.font, d.card, d.bet],
              isAddon: !0,
            },
            dragonball: {
              name: "slot-dragonball",
              depend: [d.slot, p, d.common, d.font, d.bet],
              isAddon: !0,
            },
            sportbook: {
              name: "sportbook",
              loading: "sb.png",
              scene: t.sb,
              isPortrait: !0,
              depend: [l, d.common],
            },
            volta: {
              name: "volta_game",
              scene: t.volta,
              depend: [l, d.common, d.font],
            },
            xocdia_squidgame: {
              name: "xocdia-squidgame",
              loading: "xdconmuc.png",
              depend: [d.bet, d.common, d.font],
              scene: t.xocdia_squidgame,
            },
            rongho: {
              name: "rongho",
              loading: "rongho.png",
              depend: [d.bet, d.common, d.font],
              scene: t.rongho,
            },
            baucua: {
              name: "baucua",
              loading: "baucuafull.png",
              depend: [d.bet, d.table, d.common, d.font],
              scene: t.baucua,
            },
            baucuabig5: {
              name: "baucuabig5",
              loading: "baucuabig5.png",
              depend: [d.bet, l, d.common, d.font],
              scene: t.baucuabig5,
            },
            xocdia: {
              name: "xocdia",
              depend: [d.bet, d.table, g],
              scene: t.xocdia,
              prefab: "LC_XD",
              isRoomList: !0,
            },
            taixiu_livestream: {
              name: "taixiu-livestream",
              loading: "txlive.png",
              depend: [d.livestream, d.bet, l, d.common, d.font],
              scene: t.taixiu_livestream,
            },
            xocdia_livestream: {
              name: "xocdia-livestream",
              loading: "xdlive.png",
              depend: [d.livestream, d.bet, l, d.common, d.font],
              scene: t.xocdia_livestream,
            },
            slot_angrybird: {
              name: "slot-angrybird",
              loading: "angrybird.png",
              depend: [d.slot, d.common, d.font],
              scene: t.slot_angrybird,
            },
            slot_dc: {
              name: "slot-dc",
              loading: "jldc.png",
              depend: [d.slot, d.common, d.font],
              scene: t.slot_dc,
            },
            slot_naruto: {
              name: "slot-naruto",
              loading: "naruto.png",
              depend: [d.slot, d.common, d.font],
              scene: t.slot_naruto,
            },
            slot_pvz: {
              name: "slot-pvz",
              loading: "pvz.png",
              depend: [d.slot, d.common, d.font],
              scene: t.slot_pvz,
            },
            lode: {
              name: "lode",
              loading: "lode.png",
              depend: [d.common, d.font],
              scene: t.lode,
            },
            lodesieutoc: {
              name: "lodesieutoc",
              depend: [l, d.common, d.font],
              scene: t.lodesieutoc,
            },
            mitek_axie: {
              name: "cc30-axie-infinity-9938",
              loading: "axie.png",
              depend: u,
              scene: t.mitek_axie,
            },
            mitek_aladin: {
              name: "cc30-aladin-9976",
              loading: "aladdin.png",
              depend: u,
              scene: t.mitek_aladin,
            },
            mitek_sicbo: {
              name: "cc30-sicbo-dp-3986",
              loading: "sicboDP.png",
              depend: u,
              scene: t.mitek_sicbo,
            },
            mitek_lanhailoc: {
              name: "cc30-lanphatloc-9930",
              loading: "lanhailoc.png",
              depend: u,
              scene: t.mitek_lanhailoc,
            },
            mitek_fish: {
              name: "cc30-fish2-1998",
              loading: "fish.png",
              depend: u,
              scene: t.mitek_fish,
            },
            mitek_thanbai: {
              name: "cc30-thanbaimientay-9881",
              loading: "thanbai.png",
              depend: u,
              scene: t.mitek_thanbai,
            },
            mitek_trutien: {
              name: "cc30-trutien-9937",
              isPortrait: !0,
              loading: "trutien.png",
              depend: u,
              scene: t.mitek_trutien,
            },
            mitek_duangua: {
              name: "cc30-dua-ngua-may-xeng-6996",
              isPortrait: !0,
              loading: "duangua.png",
              depend: u,
              scene: t.mitek_duangua,
            },
            mitek_xispider: {
              name: "cc30-xi-spider-3965",
              loading: "xism.png",
              depend: u,
              scene: t.mitek_xispider,
            },
            c5_baccarat_livestream: {
              name: "c5_baccaratlivestream",
              loading: "c5_bcrl.png",
              depend: l,
              scene: t.c5_baccarat_livestream,
            },
            c5_rongho_livestream: {
              name: "c5-rongho-livestream",
              loading: "c5_rhl.png",
              depend: l,
              scene: t.c5_rongho_livestream,
            },
            c5_baucua_livestream: {
              name: "c5-baucua-livestream",
              loading: "lode.png",
              depend: c,
              scene: t.c5baucualive,
            },
            c5_xocdia_livestream: {
              name: "c5-xocdialivestream",
              loading: "lode.png",
              depend: c,
              scene: t.c5xocdialive,
            },
            c5_sicbo_livestream: {
              name: "c5-sicbo-livestream",
              loading: "c5_sblive_loading.png",
              depend: c,
              scene: t.c5_sicbo_livestream,
            },
            evo_games: {
              name: "ncc_evo_games",
              loading: "evo_games.png",
              depend: c,
              scene: t.evo_games_landscape,
            },
            via_games: {
              name: "ncc_via_games",
              loading: "via_games.png",
              depend: c,
              scene: t.via_games_landscape,
            },
            sexy_games: {
              name: "ncc_sexy_games",
              loading: "sexy_games.png",
              depend: c,
              scene: t.sexy_games_landscape,
            },
            vivo_games: {
              name: "ncc_vivo_games",
              loading: "vivo_games.png",
              depend: c,
              scene: t.vivo_games_landscape,
            },
          });
        var v = e("GameID", {
          LOBBY: -1,
          TIENLEN: 1,
          SAM: 2,
          BACAY: 3,
          BINH: 4,
          LIENG: 5,
          POKER: 6,
          XITO: 7,
          PHOM: 8,
          XOCDIA: 9,
          BLACK_JACK: 11,
          BAU_CUA_FULL: 12,
          XOCDIA_TULINH: 14,
          RONGHO: 15,
          BAUCUABIG5: 16,
          CHAN_GTS: 20,
          TAIXIU: 100,
          TAIXIULIVESTREAM: 103,
          XOCDIA_LIVESTREAM: 104,
          BAUCUA_LIVESTREAM: 110,
          MINIPOKER: 199,
          TET: 200,
          TRUNGPS: 202,
          ASPHALT: 204,
          MIB: 205,
          CAOTHAP: 206,
          BIGCITY: 217,
          DIABLO: 218,
          DRAGONBALL: 219,
          BAYTAMCHIN_THETHAO: 300,
          VOLTA_GAME: 313,
          LIVECASINO: 300,
          LODE: 302,
          LODESIEUTOC: 303,
          TAIXIULIVESTREAM_2: 305,
          XOCDIA_LIVESTREAM_2: 306,
          BAUCUA_LIVESTREAM2: 309,
          C5_BACCARAT_LIVESTREAM: 324,
          C5_RONGHO_LIVESTREAM: 320,
          CA: 400,
          ALADIN: 401,
          SICBO: 406,
          TRUTIEN: 414,
          AXIE: 416,
          LANHAILOC: 417,
          XI_SPIDER: 423,
          DUA_NGUA: 425,
          THAN_BAI: 428,
          S_THETHAO: 1001,
          A_THETHAO: 1002,
          C5_BAUCUA_LIVE: 323,
          C5_XOCDIALIVE: 321,
          C5_SICBO_LIVESTREAM: 322,
          EVO_GAMES: 250,
          VIA_GAMES: 251,
          SEXY_GAMES: 252,
          VIVO_GAMES: 253,
        });
        e("DesignResolution", {
          Width: 1280,
          Height: 640,
          WidthOld: 1560,
          HeightOld: 720,
        });
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DemLa_CardLib.ts",
  ["cc", "./Define.ts", "./MauBinh_CardLib.ts"],
  function (r) {
    "use strict";
    var e, t, n, i;
    return {
      setters: [
        function (r) {
          (e = r.cclegacy), (t = r._decorator);
        },
        function (r) {
          n = r.GameID;
        },
        function (r) {
          i = r.GameCard;
        },
      ],
      execute: function () {
        var u;
        e._RF.push({}, "554dcR4AABPd4pSTlcTNNNU", "DemLa_CardLib", void 0);
        var h = t.ccclass;
        t.property,
          r(
            "default",
            h("DemLa_CardLib")(
              (u = (function () {
                function r() {}
                return (
                  (r.getCombination = function (e, t, n, u) {
                    for (var h = [], o = 0; o < n; o++) {
                      var a = new i();
                      h.push(a);
                    }
                    r.combinationUtil(e, t, n, 0, h, 0, u);
                  }),
                  (r.combinationUtil = function (e, t, u, h, o, a, s) {
                    if (h == u) {
                      var N = [];
                      return (
                        o.forEach(function (r) {
                          var e = new i();
                          e.decodeCard(r.serverCode, n.TIENLEN), N.push(e);
                        }),
                        s.push(N),
                        N
                      );
                    }
                    if (!(a >= t)) {
                      var f = e[a];
                      (o[h] = f),
                        r.combinationUtil(e, t, u, h + 1, o, a + 1, s),
                        r.combinationUtil(e, t, u, h, o, a + 1, s);
                    }
                  }),
                  (r.sortVector = function (r, e) {
                    if (e)
                      for (var t = 0; t < r.length - 1; ) {
                        var n = r[t],
                          i = n.N,
                          u = n.S,
                          h = void 0;
                        for (h = t + 1; h < r.length; h++) {
                          var o = r[h],
                            a = o.N,
                            s = o.S;
                          if (i > a) {
                            var N = n;
                            (r[t] = r[h]), (r[h] = N), (t = 0);
                            break;
                          }
                          if (i == a && u < s) {
                            var f = n;
                            (r[t] = r[h]), (r[h] = f), (t = 0);
                            break;
                          }
                        }
                        (0 == t && h != r.length) || t++;
                      }
                    else
                      for (var g = 0; g < r.length - 1; ) {
                        var l = r[g],
                          c = l.N,
                          v = l.S,
                          p = void 0;
                        for (p = g + 1; p < r.length; p++) {
                          var S = r[p],
                            d = S.N,
                            m = S.S;
                          if (c > d) {
                            var H = l;
                            (r[g] = r[p]), (r[p] = H), (g = 0);
                            break;
                          }
                          if (c == d && v > m) {
                            var P = l;
                            (r[g] = r[p]), (r[p] = P), (g = 0);
                            break;
                          }
                        }
                        (0 == g && p != r.length) || g++;
                      }
                    return r;
                  }),
                  (r.sortList = function (r) {
                    if (0 == r.length) return r;
                    for (var e = 0; e < r.length - 1; ) {
                      var t = r[e],
                        n = void 0;
                      for (n = e + 1; n < r.length; n++) {
                        if (t > r[n]) {
                          var i = t;
                          (r[e] = r[n]), (r[n] = i), (e = 0);
                          break;
                        }
                      }
                      (0 == e && n != r.length) || e++;
                    }
                    return r;
                  }),
                  (r.getRecommendCards2 = function (e, t) {
                    for (var n = [], i = 1; i <= t.length; i++)
                      r.getCombination(t, t.length, i, n);
                    var u = [];
                    n.forEach(function (e) {
                      (e = r.sortVector(e, !1)),
                        (r.isPairs(e) ||
                          r.isStraight(e) ||
                          r.isThreePairsStraight(e) ||
                          r.isFourPairsStraight(e) ||
                          r.isFourOfAKind(e) ||
                          r.isThreeOfAKind(e)) &&
                          u.push(e);
                    });
                    for (var h = [], o = 0; o < u.length; o++) {
                      var a = u[o];
                      a &&
                        a.filter(function (r) {
                          return (
                            (t = r),
                            e.filter(function (r) {
                              return r.serverCode == t.serverCode;
                            }).length > 0
                          );
                          var t;
                        }).length >= e.length &&
                        a.length > h.length &&
                        (h = a);
                    }
                    return h;
                  }),
                  (r.getRecommendCards = function (e, t) {
                    var n = [];
                    if (1 == (e = r.sortVector(e, !1)).length) {
                      var u = e[0];
                      if (15 == u.N) {
                        if ((n = r.getHigherFours2(0, t)).length > 0) return n;
                        var h = new i();
                        if (
                          ((h.N = 3),
                          (h.S = 1),
                          (n = r.getHigherFourPairs(h, t)).length > 0)
                        )
                          return n;
                        if ((n = r.getHigherThreePairs(h, t)).length > 0)
                          return n;
                        for (var o = 0; o < t.length; o++) {
                          var a = t[o];
                          if (15 == a.N && a.S > u.S) return n.push(a), n;
                        }
                      } else
                        for (var s = 0; s < t.length; s++) {
                          var N = t[s];
                          if (N.N > u.N) {
                            n.push(N);
                            break;
                          }
                          if (N.N == u.N && N.S > u.S) {
                            n.push(N);
                            break;
                          }
                        }
                      return n;
                    }
                    if (r.isPairs(e)) {
                      if ((n = r.getHigherPairs(e, t)).length > 0) return n;
                      if (15 == e[0].N) {
                        if ((n = r.getHigherFours2(0, t)).length > 0) return n;
                        var f = new i();
                        if (
                          ((f.N = 3),
                          (f.S = 1),
                          (n = r.getHigherFourPairs(f, t)).length > 0)
                        )
                          return n;
                      }
                    } else {
                      if (r.isThreeOfAKind(e)) return r.getHigherThrees(e, t);
                      if (r.isFourOfAKind(e)) {
                        if ((n = r.getHigherFours(e, t)).length > 0) return n;
                        var g = new i();
                        if (
                          ((g.N = 3),
                          (g.S = 1),
                          (n = r.getHigherFourPairs(g, t)).length > 0)
                        )
                          return n;
                      } else if (r.isThreePairsStraight(e)) {
                        var l = new i();
                        if (
                          ((l.N = 3),
                          (l.S = 1),
                          (n = r.getHigherFourPairs(l, t)).length < 1 &&
                            (n = r.getHigherThreePairs2(e, t)),
                          n.length < 1)
                        )
                          return r.getHigherFours2(0, t);
                      } else {
                        if (r.isStraight(e)) return r.getHigherStraight(e, t);
                        if (r.isFourPairsStraight(e))
                          return r.getHigherFourPairs2(e, t);
                      }
                    }
                    return n;
                  }),
                  (r.isStraight = function (r) {
                    var e = !0;
                    if (r.length < 3) return !1;
                    for (var t = 0; t < r.length - 1; t++) {
                      var n = r[t].N,
                        i = r[t + 1].N;
                      if (15 == n || 15 == i) return !1;
                      e = e && n + 1 == i;
                    }
                    return e;
                  }),
                  (r.isStraight_Sam = function (e) {
                    var t = [],
                      n = [];
                    return (
                      e.forEach(function (r) {
                        t.push(15 == r.N ? 2 : r.N),
                          n.push(15 == r.N ? 2 : 14 == r.N ? 1 : r.N);
                      }),
                      !!r.checkSanh_sam(t) || !!r.checkSanh_sam(n)
                    );
                  }),
                  (r.checkSanh_sam = function (e) {
                    if (e.length < 3) return !1;
                    for (
                      var t = !0, n = (e = r.sortList(e))[0], i = 1;
                      i < e.length;
                      i++
                    )
                      t = t && e[i] == n + i;
                    return t;
                  }),
                  (r.loaiboxamvatuquy = function (e) {
                    e = r.sortVector(e, !0);
                    for (var t = [], n = 0, i = 0, u = 0; u < e.length; u++)
                      n == e[u].N
                        ? ++i < 3 && t.push(e[u])
                        : ((i = 1), (n = e[u].N), t.push(e[u]));
                    return (e = r.sortVector(e, !1)), t;
                  }),
                  (r.loaiboxamdoivatuquy = function (e) {
                    e = r.sortVector(e, !0);
                    for (var t = [], n = 0, i = 0, u = 0; u < e.length; u++)
                      n == e[u].N
                        ? ++i < 2 && t.push(e[u])
                        : ((i = 1), (n = e[u].N), t.push(e[u]));
                    return (e = r.sortVector(e, !1)), t;
                  }),
                  (r.isPairs = function (r) {
                    return 2 == r.length && r[0].N == r[1].N;
                  }),
                  (r.isThreeOfAKind = function (r) {
                    return (
                      3 == r.length && r[0].N == r[1].N && r[1].N == r[2].N
                    );
                  }),
                  (r.isFourOfAKind = function (r) {
                    return (
                      4 == r.length &&
                      r[0].N == r[1].N &&
                      r[1].N == r[2].N &&
                      r[2].N == r[3].N
                    );
                  }),
                  (r.isThreePairsStraight = function (r) {
                    if (6 != r.length) return !1;
                    var e = !1;
                    return (
                      r.forEach(function (r) {
                        15 == r.N && (e = !0);
                      }),
                      !e &&
                        r[0].N == r[1].N &&
                        r[1].N == r[2].N - 1 &&
                        r[1].N == r[3].N - 1 &&
                        r[1].N == r[4].N - 2 &&
                        r[1].N == r[5].N - 2
                    );
                  }),
                  (r.isFourPairsStraight = function (r) {
                    if (8 != r.length) return !1;
                    var e = !1;
                    return (
                      r.forEach(function (r) {
                        15 == r.N && (e = !0);
                      }),
                      !e &&
                        r[0].N == r[1].N &&
                        r[1].N == r[2].N - 1 &&
                        r[1].N == r[3].N - 1 &&
                        r[1].N == r[4].N - 2 &&
                        r[1].N == r[5].N - 2 &&
                        r[1].N == r[6].N - 3 &&
                        r[1].N == r[7].N - 3
                    );
                  }),
                  (r.getHigherStraight = function (e, t, n) {
                    void 0 === n && (n = !1);
                    var i = r.loaiboxamdoivatuquy(t);
                    t = r.sortVector(t, !1);
                    var u = [];
                    if (i.length < e.length) return u;
                    for (var h = 0; h < i.length - 1; h++)
                      if (!(i[h].N < e[0].N || (i[h].N == e[0].N && n))) {
                        if (i.length - h < e.length) break;
                        for (var o = 0; o < e.length; o++) {
                          var a = o;
                          if (o > 0)
                            for (
                              ;
                              h + a < i.length - 1 && u[o - 1].N == i[h + a].N;

                            )
                              a++;
                          if (o < e.length - 1) u.push(i[h + a]);
                          else if (
                            i[h + a].N == e[o].N &&
                            i[h + a].S < e[o].S
                          ) {
                            for (
                              var s = a;
                              h + s < i.length - 1 &&
                              e[o].N == i[h + s].N &&
                              i[h + s].S < e[o].S;

                            )
                              s++;
                            s > a && s--, u.push(i[h + s]);
                          } else u.push(i[h + a]);
                        }
                        if (
                          u.length == e.length &&
                          (n ? r.isStraight_Sam(u) : r.isStraight(u))
                        ) {
                          if (u[0].N != e[0].N) return u;
                          if (u[e.length - 1].S > e[e.length - 1].S) return u;
                          u = [];
                        } else u = [];
                      }
                    return u;
                  }),
                  (r.getHigherPairs = function (e, t, n) {
                    void 0 === n && (n = !1);
                    var i = [];
                    if (t.length < 2) return i;
                    t = r.sortVector(t, !1);
                    for (var u = 0; u < t.length - 1; u++)
                      if (
                        !(
                          t[u].N < e[0].N ||
                          (t[u].N == e[0].N && n) ||
                          t[u].N != t[u + 1].N
                        )
                      ) {
                        if (t[u].N != e[0].N)
                          return i.push(t[u]), i.push(t[u + 1]), i;
                        if (t[u + 1].S > e[1].S)
                          return i.push(t[u]), i.push(t[u + 1]), i;
                      }
                    return i;
                  }),
                  (r.getHigherThrees = function (e, t, n) {
                    void 0 === n && (n = !1);
                    var i = [];
                    if (t.length < 3) return i;
                    t = r.sortVector(t, !1);
                    for (var u = 0; u < t.length - 2; u++)
                      if (
                        !(
                          t[u].N < e[0].N ||
                          (t[u].N == e[0].N && n) ||
                          t[u].N != t[u + 1].N ||
                          t[u + 1].N != t[u + 2].N
                        )
                      ) {
                        if (t[u].N != e[0].N)
                          return (
                            i.push(t[u]), i.push(t[u + 1]), i.push(t[u + 2]), i
                          );
                        if (t[u + 2].S > e[2].S)
                          return (
                            i.push(t[u]), i.push(t[u + 1]), i.push(t[u + 2]), i
                          );
                      }
                    return i;
                  }),
                  (r.getHigherFours = function (e, t) {
                    return r.getHigherFours2(e[0].N, t);
                  }),
                  (r.getHigherFours2 = function (e, t) {
                    var n = [];
                    if (t.length < 4) return n;
                    t = r.sortVector(t, !1);
                    for (var i = 0; i < t.length - 3; i++)
                      if (
                        !(t[i].N < e) &&
                        t[i].N == t[i + 1].N &&
                        t[i + 1].N == t[i + 2].N &&
                        t[i + 2].N == t[i + 3].N
                      )
                        return (
                          n.push(t[i]),
                          n.push(t[i + 1]),
                          n.push(t[i + 2]),
                          n.push(t[i + 3]),
                          n
                        );
                    return n;
                  }),
                  (r.getHigherThreePairs = function (e, t, n) {
                    void 0 === n && (n = !1), (t = r.sortVector(t, !1));
                    var i = r.loaiboxamvatuquy(t),
                      u = [];
                    if (i.length < 6) return u;
                    for (var h = 0; h < i.length - 5; h++)
                      if (
                        !(
                          i[h].N < e.N - 2 ||
                          (i[h].N == e.N - 2 && n) ||
                          i[h].N != i[h + 1].N ||
                          i[h].N != i[h + 2].N - 1 ||
                          i[h].N != i[h + 3].N - 1 ||
                          i[h].N != i[h + 4].N - 2 ||
                          i[h].N != i[h + 5].N - 2 ||
                          15 == i[h + 5].N
                        )
                      ) {
                        if (i[h].N != e.N - 2)
                          return (
                            u.push(i[h]),
                            u.push(i[h + 1]),
                            u.push(i[h + 2]),
                            u.push(i[h + 3]),
                            u.push(i[h + 4]),
                            u.push(i[h + 5]),
                            u
                          );
                        if (i[h + 5].S > e.S)
                          return (
                            u.push(i[h]),
                            u.push(i[h + 1]),
                            u.push(i[h + 2]),
                            u.push(i[h + 3]),
                            u.push(i[h + 4]),
                            u.push(i[h + 5]),
                            u
                          );
                      }
                    return u;
                  }),
                  (r.getHigherFourPairs = function (e, t, n) {
                    void 0 === n && (n = !1), (t = r.sortVector(t, !1));
                    var i = r.loaiboxamvatuquy(t),
                      u = [];
                    if (i.length < 8) return u;
                    for (var h = 0; h < i.length - 7; h++)
                      if (
                        !(
                          i[h].N < e.N - 3 ||
                          (i[h].N == e.N - 3 && n) ||
                          i[h].N != i[h + 1].N ||
                          i[h].N != i[h + 2].N - 1 ||
                          i[h].N != i[h + 3].N - 1 ||
                          i[h].N != i[h + 4].N - 2 ||
                          i[h].N != i[h + 5].N - 2 ||
                          i[h].N != i[h + 6].N - 3 ||
                          i[h].N != i[h + 7].N - 3
                        )
                      ) {
                        if (i[h].N != e.N - 3)
                          return (
                            u.push(i[h]),
                            u.push(i[h + 1]),
                            u.push(i[h + 2]),
                            u.push(i[h + 3]),
                            u.push(i[h + 4]),
                            u.push(i[h + 5]),
                            u.push(i[h + 6]),
                            u.push(i[h + 7]),
                            u
                          );
                        if (i[h + 7].S > e.S)
                          return (
                            u.push(i[h]),
                            u.push(i[h + 1]),
                            u.push(i[h + 2]),
                            u.push(i[h + 3]),
                            u.push(i[h + 4]),
                            u.push(i[h + 5]),
                            u.push(i[h + 6]),
                            u.push(i[h + 7]),
                            u
                          );
                      }
                    return u;
                  }),
                  (r.getHigherThreePairs2 = function (e, t, n) {
                    return (
                      void 0 === n && (n = !1),
                      r.getHigherThreePairs(e[e.length - 1], t, n)
                    );
                  }),
                  (r.getHigherFourPairs2 = function (e, t, n) {
                    return (
                      void 0 === n && (n = !1),
                      r.getHigherFourPairs(e[e.length - 1], t, n)
                    );
                  }),
                  r
                );
              })())
            ) || u
          );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DockPanel.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConfigManager.ts"],
  function (e) {
    "use strict";
    var t, i, n, o, r, a, c, s, l;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy), (a = e._decorator), (c = e.Vec3), (s = e.Component);
        },
        function (e) {
          l = e.GameConfigManager;
        },
      ],
      execute: function () {
        var u, f, p, h, y, g, b, P;
        e("DOCK_TYPE", void 0),
          r._RF.push({}, "b2460n2v2BJMJxBBj5vD3pt", "DockPanel", void 0);
        var T,
          d = a.ccclass,
          O = a.property;
        !(function (e) {
          (e[(e.TOP = 0)] = "TOP"), (e[(e.BOTTOM = 1)] = "BOTTOM");
        })(T || (T = e("DOCK_TYPE", {})));
        e(
          "DockPanel",
          ((u = d("DockPanel")),
          (f = O(Number)),
          (p = O(c)),
          u(
            ((g = t(
              (y = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, r = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    n(t, "dock_type", g, o(t)),
                    n(t, "scale", b, o(t)),
                    n(t, "offset", P, o(t)),
                    t
                  );
                }
                return (
                  i(t, e),
                  (t.prototype.update = function (e) {
                    var t = new c(this.node.position);
                    switch (this.dock_type) {
                      case T.TOP:
                        t.y = l.getSizeHeight(this.scale) / 2;
                        break;
                      case T.BOTTOM:
                        t.y = -l.getSizeHeight(this.scale) / 2;
                    }
                    (t.x += this.offset.x),
                      (t.y += this.offset.y),
                      (t.z += this.offset.z),
                      this.node.setPosition(t);
                  }),
                  t
                );
              })(s)).prototype,
              "dock_type",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return T.TOP;
                },
              }
            )),
            (b = t(y.prototype, "scale", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1;
              },
            })),
            (P = t(y.prototype, "offset", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new c(0, 0, 0);
              },
            })),
            (h = y))
          ) || h)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DropDown.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var l, n, t, o, i, r, s, c, a, u, p, d;
    return {
      setters: [
        function (e) {
          (l = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (i = e.cclegacy),
            (r = e._decorator),
            (s = e.ScrollView),
            (c = e.Vec3),
            (a = e.UIOpacity),
            (u = e.Tween),
            (p = e.tween),
            (d = e.Component);
        },
      ],
      execute: function () {
        var v, w, h, V, y;
        i._RF.push({}, "4c12esvZ25DrqjUOwgvUU9B", "DropDown", void 0);
        var f = r.ccclass,
          g = r.property;
        e(
          "DropDown",
          ((v = f("DropDown")),
          (w = g(s)),
          v(
            ((y = l(
              (V = (function (e) {
                function l() {
                  for (
                    var l, n = arguments.length, i = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    i[r] = arguments[r];
                  return (
                    (l = e.call.apply(e, [this].concat(i)) || this),
                    t(l, "scrollView", y, o(l)),
                    l
                  );
                }
                n(l, e);
                var i = l.prototype;
                return (
                  (i.pushItems = function (e) {
                    var l,
                      n,
                      t = this;
                    null == (l = this.scrollView) ||
                      null == (n = l.content) ||
                      n.destroyAllChildren(),
                      e.forEach(function (e) {
                        var l;
                        (e.parent =
                          (null == (l = t.scrollView) ? void 0 : l.content) ||
                          null),
                          (e.active = !0);
                      });
                  }),
                  (i.isOpening = function () {
                    var e, l, n;
                    return null == (e = this.scrollView) ||
                      null == (l = e.node) ||
                      null == (n = l.parent)
                      ? void 0
                      : n.active;
                  }),
                  (i.open = function () {
                    var e, l, n, t, o, i, r, s, d;
                    if (
                      null == (e = this.scrollView) ||
                      null == (l = e.node.parent) ||
                      !l.active
                    ) {
                      null != (n = this.scrollView) &&
                        n.node.parent &&
                        (this.scrollView.node.parent.active = !0),
                        null == (t = this.scrollView) ||
                          null == (o = t.node.parent) ||
                          o.setScale(new c(1, 0, 1));
                      var v =
                        null == (i = this.scrollView) ||
                        null == (r = i.node.parent)
                          ? void 0
                          : r.getComponent(a);
                      v && (v.opacity = 1),
                        u.stopAllByTarget(
                          (null == (s = this.scrollView)
                            ? void 0
                            : s.node.parent) || void 0
                        ),
                        u.stopAllByTarget(v || void 0);
                      var w = p(
                        null == (d = this.scrollView) ? void 0 : d.node.parent
                      ).sequence(
                        p().call(function () {
                          p(v)
                            .sequence(
                              p().delay(0.1),
                              p().to(0.2, { opacity: 255 })
                            )
                            .start();
                        }),
                        p().to(0.25, { scale: c.ONE }, { easing: "expoOut" })
                      );
                      null == w || w.start();
                    }
                  }),
                  (i.close = function (e) {
                    var l,
                      n,
                      t,
                      o,
                      i,
                      r,
                      s = this;
                    if ((void 0 === e && (e = !0), !e)) {
                      var d, v, w, h, V, y;
                      null == (d = this.scrollView) ||
                        null == (v = d.node.parent) ||
                        v.setScale(new c(1, 0, 1));
                      var f =
                        null == (w = this.scrollView) ||
                        null == (h = w.node.parent)
                          ? void 0
                          : h.getComponent(a);
                      return (
                        f && (f.opacity = 1),
                        null != (V = this.scrollView) &&
                          V.node.parent &&
                          (this.scrollView.node.parent.active = !1),
                        u.stopAllByTarget(
                          (null == (y = this.scrollView)
                            ? void 0
                            : y.node.parent) || void 0
                        ),
                        void u.stopAllByTarget(f || void 0)
                      );
                    }
                    null == (l = this.scrollView) ||
                      null == (n = l.node.parent) ||
                      n.setScale(c.ONE);
                    var g =
                      null == (t = this.scrollView) ||
                      null == (o = t.node.parent)
                        ? void 0
                        : o.getComponent(a);
                    g && (g.opacity = 255),
                      u.stopAllByTarget(
                        (null == (i = this.scrollView)
                          ? void 0
                          : i.node.parent) || void 0
                      ),
                      u.stopAllByTarget(g || void 0),
                      p(null == (r = this.scrollView) ? void 0 : r.node.parent)
                        .sequence(
                          p().call(function () {
                            p(g)
                              .sequence(
                                p().delay(0.1),
                                p().to(0.2, { opacity: 1 }),
                                p().call(function () {
                                  var e;
                                  null != (e = s.scrollView) &&
                                    e.node.parent &&
                                    (s.scrollView.node.parent.active = !1);
                                })
                              )
                              .start();
                          }),
                          p().to(
                            0.25,
                            { scale: new c(1, 0, 1) },
                            { easing: "expoIn" }
                          ),
                          p.call(function () {})
                        )
                        .start();
                  }),
                  (i.scrollToTop = function () {
                    this.scrollView.scrollToTop();
                  }),
                  l
                );
              })(d)).prototype,
              "scrollView",
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
            (h = V))
          ) || h)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/EventManager.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var o, t, n, a, i;
    return {
      setters: [
        function (e) {
          (o = e.asyncToGenerator), (t = e.regeneratorRuntime);
        },
        function (e) {
          (n = e.cclegacy), (a = e._decorator), (i = e.log);
        },
      ],
      execute: function () {
        var r, l;
        n._RF.push({}, "257deqg2T1Kwp8wIyvWkVtV", "EventManager", void 0);
        var s = a.ccclass,
          c =
            (e("EventKey", {
              Null: "Null",
              SocketLoginMini: "SocketLoginMini",
              SocketLogout: "SocketLogout",
              SocketUnlogged: "SocketUnlogged",
              SocketJoinRoom: "SocketJoinRoom",
              SocketLeaveRoom: "SocketLeaveRoom",
              SocketMessage: "SocketMessage",
              SocketMessageRoomList: "SocketMessageRoomList",
              SocketClosed: "SocketClosed",
              MiniLogged: "MiniLogged",
              GameUpdateProgress: "update-progress-%gameID",
              GameSocketSend: "GameSocketSend",
              GameShowThongKe: "GameShowThongKe",
              JackpotHide: "JackpotHide",
              JackpotUpdateGame: "update-jackpot-%gameID",
              JackpotUpdateAll: "JackpotUpdateAll",
              JackpotResize: "JackpotResize",
              InfoPopupHide: "InfoPopupHide",
              InvitePopupHide: "InvitePopupHide",
              RefreshMoney: "REFRESH_MONEY",
              RefreshUserOnline: "RefreshUserOnline",
              RefreshGameSetting: "RefreshGameSetting",
              MusicPlay: "PlayMusic",
              MusicToggle: "BGM_TOGGLED",
              SoundToggle: "SFX_TOGGLED",
              TransitionScene: "TransitionScene",
              ReleasedAssetBundle: "ReleasedAssetBundle",
              RunSceneSuccesses: "RunSceneSuccesses",
              ForceLogoutSockets: "ForceLeaveSockets",
              IsShowingInvitePopup: "IsShowingInvitePopup",
              DataFromLandingPage: "DataFromLandingPage",
              CallLobbyShowFloatingString: "CallLobbyShowFloatingString",
              CallLobbyOnLoggedIn: "CallLobbyOnLoggedIn",
              CallLobbyLoadUserInfo: "CallLobbyLoadUserInfo",
              CallLobbyAutoLoginAcc: "CallLobbyAutoLoginAcc",
              CallLobbyCreateJackpotNode: "CallLobbyCreateJackpotNode",
              CallLobbyGamePlayManagerLogin: "CallLobbyGamePlayManagerLoggin",
              CallLobbyJoinRoom: "CallLobbyJoinRoom",
              CallLobbyShowGameList: "CallLobbyShowGameList",
              CallLobbyHideAllPopup: "CallLobyHideAllPopup",
              CallLobbyShowTopupPopup: "CallLobbyShowTopupPopup",
              CallLobbyShowCashoutPopup: "CallLobbyShowCashoutPopup",
              CallLobbyShowCryptoPopup: "CallLobbyShowCryptoPopup",
              CallLobbyShowVerifyPopup: "CallLobbyShowVerifyPopup",
              CallFetchTaiXiuLiveStreamHistory:
                "CallFetchTaiXiuLiveStreamHistory",
              CallRefreshMoney: "CallRefreshMoney",
              CARD_SELECTED: "CARD_SELECTED",
              CARD_UNSELECTED: "CARD_UNSELECTED",
              UPDATE_BET_EVENT_KEY: "update-bet-taixiu",
              START_NEW_SESSION_EVENT_KEY: "start-new-session-taixiu",
              UPDATE_RESULT_EVENT_KEY: "update-result-taixiu",
              AUTO_FIT_MINI_NODE: "AUTO_FIT_MINI_NODE",
              VERIFIED_ACCOUNT: "VERIFIED_ACCOUNT",
              LOGGED_IN_OTHER_DEVICE: "LOGGED_IN_OTHER_DEVICE",
              GetRooms: "GetRooms",
              GetRoomsInterupt: "GetRoomsInterupt",
              ReloadRooms: "ReloadRooms",
              HideRoomListImmediately: "HideRoomListImmediately",
              HideRoomLogo: "HideRoomLogo",
              JoinRoomWithGameID: "JoinRoomWithGameID",
              ExitToLobbyFromRoomListView: "ExitToLobbyFromRoomListView",
              ShowBookRoom: "ShowBookRoom",
              SendBookRoom: "SendBookRoom",
              SendLCXD: "SendLCXD",
              MiniSocketSend: "MiniSocketSend",
              MiniCloseNode: "MiniCloseNode",
              IsMiniDownload: "IsMiniDownload",
              LazyCommon: "LazyCommon",
              LazyMini: "LazyMini",
              LazyLobby: "LazyLobby",
              LazyMoney: "LazyMoney",
              LazyPhone: "LazyPhone",
              LazyPc: "LazyPc",
              LazyPrefab1: "LazyPrefab1",
              LazyPrefab2: "LazyPrefab2",
              LazySpine1: "LazySpine1",
              LazySpine2: "LazySpine2",
              LazySpine3: "LazySpine3",
              LazySpine4: "LazySpine4",
              LazySprite: "LazySprite",
            }),
            e("subEventKey", function (e, o, t) {
              return e.replace(o, "" + t);
            }),
            e(
              "EventManager",
              s("EventManager")(
                (((l = (function () {
                  function e() {
                    (this._list = {}), (this.isLogEnabled = !1);
                  }
                  e.getInstance = function () {
                    return (
                      this._instance || (this._instance = new e()),
                      this._instance
                    );
                  };
                  var n = e.prototype;
                  return (
                    (n.on = function (e, o, t, n) {
                      var a = this;
                      void 0 === n && (n = !1);
                      var r = o;
                      if (!r.autoOffEvent) {
                        var l;
                        r.autoOffEvent = !0;
                        var s =
                          null == (l = r.onDestroy)
                            ? void 0
                            : l.bind(r.onDestroy);
                        r.onDestroy = function () {
                          null == s || s(),
                            a.isLogEnabled && i("EventManager auto off"),
                            a.off(o);
                        };
                      }
                      this._list[e] || (this._list[e] = []),
                        n
                          ? this._list[e].unshift({ component: o, callback: t })
                          : this._list[e].push({ component: o, callback: t }),
                        this.isLogEnabled && i("EventManager.on", e, o);
                    }),
                    (n.off = function (e, o) {
                      for (var t in this._list) {
                        var n,
                          a = t;
                        (o && o !== a) ||
                          (this._list[a] =
                            null == (n = this._list[a])
                              ? void 0
                              : n.filter(function (o) {
                                  return o.component !== e;
                                }));
                      }
                      this.isLogEnabled && i("EventManager.off", o || "all", e);
                    }),
                    (n.isExist = function (e) {
                      var o;
                      return !(null == (o = this._list[e]) || !o.length);
                    }),
                    (n.emit = (function () {
                      var e = o(
                        t().mark(function e(o) {
                          var n,
                            a,
                            r,
                            l,
                            s,
                            c = arguments;
                          return t().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    for (
                                      a = c.length,
                                        r = new Array(a > 1 ? a - 1 : 0),
                                        l = 1;
                                      l < a;
                                      l++
                                    )
                                      r[l - 1] = c[l];
                                    return (
                                      (s = !1),
                                      null == (n = this._list[o]) ||
                                        n.forEach(function (e) {
                                          e.callback.apply(void 0, r), (s = !0);
                                        }),
                                      s ||
                                        (this.isLogEnabled &&
                                          i.apply(
                                            void 0,
                                            [
                                              "EventManager.emit NOT-EXIST",
                                              o,
                                            ].concat(r)
                                          )),
                                      e.abrupt("return", s)
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
                      return function (o) {
                        return e.apply(this, arguments);
                      };
                    })()),
                    (n.emitLast = (function () {
                      var e = o(
                        t().mark(function e(o) {
                          var n,
                            a,
                            r,
                            l,
                            s,
                            c = arguments;
                          return t().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    for (
                                      n = this._list[o] || [],
                                        a = n[n.length - 1],
                                        r = c.length,
                                        l = new Array(r > 1 ? r - 1 : 0),
                                        s = 1;
                                      s < r;
                                      s++
                                    )
                                      l[s - 1] = c[s];
                                    return (
                                      null == a || a.callback.apply(a, l),
                                      a ||
                                        (this.isLogEnabled &&
                                          i.apply(
                                            void 0,
                                            [
                                              "EventManager.emitLast NOT-EXIST",
                                              o,
                                            ].concat(l)
                                          )),
                                      e.abrupt("return", !!a)
                                    );
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
                      return function (o) {
                        return e.apply(this, arguments);
                      };
                    })()),
                    (n.emitLastWithReturn = (function () {
                      var e = o(
                        t().mark(function e(o) {
                          var n,
                            a,
                            r,
                            l,
                            s,
                            c,
                            u = arguments;
                          return t().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    for (
                                      n = this._list[o] || [],
                                        a = n[n.length - 1],
                                        r = u.length,
                                        l = new Array(r > 1 ? r - 1 : 0),
                                        s = 1;
                                      s < r;
                                      s++
                                    )
                                      l[s - 1] = u[s];
                                    return (
                                      (c =
                                        null == a
                                          ? void 0
                                          : a.callback.apply(a, l)),
                                      a ||
                                        (this.isLogEnabled &&
                                          i.apply(
                                            void 0,
                                            [
                                              "EventManager.emitLastWithReturn NOT-EXIST",
                                              o,
                                            ].concat(l)
                                          )),
                                      e.abrupt("return", c)
                                    );
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
                      return function (o) {
                        return e.apply(this, arguments);
                      };
                    })()),
                    e
                  );
                })())._instance = void 0),
                (r = l))
              ) || r
            ));
        e("eventManager", c.getInstance());
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FixHeight.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var n, o, i, e, r, a, l, s, c;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (a = t._decorator),
            (l = t.UITransform),
            (s = t.Vec3),
            (c = t.Component);
        },
      ],
      execute: function () {
        var u, p, d, h, y, f, m;
        r._RF.push({}, "aed733qwyRLRLQtb5QdIP4n", "FixHeight", void 0);
        var v = a.ccclass,
          b = a.property;
        t(
          "FixHeight",
          ((u = v("FixHeight")),
          (p = b(l)),
          (d = b(l)),
          u(
            ((f = n(
              (y = (function (t) {
                function n() {
                  for (
                    var n, o = arguments.length, r = new Array(o), a = 0;
                    a < o;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (n = t.call.apply(t, [this].concat(r)) || this),
                    i(n, "contrainsBy_top", f, e(n)),
                    i(n, "contrainsBy_bottom", m, e(n)),
                    (n.uiTransform = null),
                    n
                  );
                }
                o(n, t);
                var r = n.prototype;
                return (
                  (r.onLoad = function () {
                    this.uiTransform = this.getComponent(l);
                  }),
                  (r.update = function (t) {
                    var n,
                      o,
                      i,
                      e,
                      r,
                      a,
                      c,
                      u =
                        null == (n = this.contrainsBy_top) ||
                        null == (o = n.node.parent)
                          ? void 0
                          : o.getComponent(l),
                      p =
                        (null == u
                          ? void 0
                          : u.convertToWorldSpaceAR(
                              (null == (i = this.contrainsBy_top)
                                ? void 0
                                : i.node.position) || s.ZERO
                            )) || s.ZERO,
                      d =
                        null == (e = this.contrainsBy_bottom) ||
                        null == (r = e.node.parent)
                          ? void 0
                          : r.getComponent(l),
                      h =
                        (null == d
                          ? void 0
                          : d.convertToWorldSpaceAR(
                              (null == (a = this.contrainsBy_bottom)
                                ? void 0
                                : a.node.position) || s.ZERO
                            )) || s.ZERO,
                      y = Math.abs(p.y - h.y);
                    null == (c = this.uiTransform) ||
                      c.setContentSize(this.uiTransform.contentSize.width, y);
                  }),
                  n
                );
              })(c)).prototype,
              "contrainsBy_top",
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
            (m = n(y.prototype, "contrainsBy_bottom", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (h = y))
          ) || h)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FixSkeleton.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, n, o, i, s, l, c, r;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (n = e.cclegacy),
            (o = e._decorator),
            (i = e.sp),
            (s = e.sys),
            (l = e.Color),
            (c = e.UIOpacity),
            (r = e.Component);
        },
      ],
      execute: function () {
        var a;
        n._RF.push({}, "5fe6fSeLJdM0ZKgCUKh9qBd", "FixSkeleton", void 0);
        var u = o.ccclass;
        e(
          "FixSkeleton",
          u("FixSkeleton")(
            (a = (function (e) {
              function n() {
                for (
                  var t, n = arguments.length, o = new Array(n), i = 0;
                  i < n;
                  i++
                )
                  o[i] = arguments[i];
                return (
                  ((t = e.call.apply(e, [this].concat(o)) || this).skeleton =
                    null),
                  t
                );
              }
              t(n, e);
              var o = n.prototype;
              return (
                (o.onLoad = function () {
                  (this.skeleton = this.node.getComponent(i.Skeleton)),
                    null != this.skeleton &&
                      null != this.skeleton &&
                      (s.isBrowser
                        ? this.skeleton.setAnimationCacheMode(
                            i.AnimationCacheMode.REALTIME
                          )
                        : this.skeleton.setAnimationCacheMode(
                            i.AnimationCacheMode.PRIVATE_CACHE
                          ));
                }),
                (o.setOpacity = function (e, t) {
                  void 0 === t && (t = 1),
                    null != this.skeleton &&
                      ((this.skeleton.color = new l(255, 255, 255, e * t)),
                      this.node.children.forEach(function (n) {
                        var o = n.getComponent(c);
                        null != o && (o.opacity = e * t);
                      }));
                }),
                n
              );
            })(r))
          ) || a
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FloatStringCmp.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var n, e, o, l, i, r, a, s, c, h, u, f, p, g;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (l = t.assertThisInitialized);
        },
        function (t) {
          (i = t.cclegacy),
            (r = t._decorator),
            (a = t.Node),
            (s = t.UITransform),
            (c = t.Label),
            (h = t.Color),
            (u = t.Vec3),
            (f = t.tween),
            (p = t.UIOpacity),
            (g = t.Component);
        },
      ],
      execute: function () {
        var w, m, d, b, v, _, T, y, C;
        i._RF.push({}, "b3fc18yycxLB5GxRocrzwYg", "FloatStringCmp", void 0);
        var S = r.ccclass,
          z = r.property;
        t(
          "FloatStringCmp",
          ((w = S("FloatStringCmp")),
          (m = z(a)),
          (d = z(s)),
          (b = z(c)),
          w(
            ((T = n(
              (_ = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, i = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    i[r] = arguments[r];
                  return (
                    (n = t.call.apply(t, [this].concat(i)) || this),
                    o(n, "content", T, l(n)),
                    o(n, "clip_transform", y, l(n)),
                    o(n, "lbl_for_thongbao", C, l(n)),
                    (n.messageToShow = [[]]),
                    (n.showTween = null),
                    (n.fadeTween = null),
                    (n.listColor = [
                      new h(255, 255, 255),
                      new h(0, 255, 0),
                      new h(255, 255, 255),
                      new h(255, 255, 0),
                      new h(255, 255, 255),
                    ]),
                    n
                  );
                }
                e(n, t);
                var i = n.prototype;
                return (
                  (i.showMessage = function (t) {
                    var n,
                      e,
                      o,
                      l = this;
                    if (
                      (this.clip_transform &&
                        (this.clip_transform.node.active = !0),
                      this.messageToShow.push(t),
                      null == this.showTween && null == this.fadeTween)
                    ) {
                      var i = new u(300, -5, 0),
                        r = new u(i),
                        a = 0,
                        g =
                          null == (n = this.content)
                            ? void 0
                            : n.getComponent(s);
                      g && (r.x = -g.contentSize.width / 2),
                        null == (e = this.content) || e.setPosition(r),
                        this.content &&
                          (this.fadeTween = f(
                            this.content.getComponent(p)
                          ).repeatForever(
                            f(this.content.getComponent(p))
                              .call(function () {
                                if (a >= l.messageToShow.length) l.hide();
                                else {
                                  var t,
                                    n,
                                    e,
                                    o =
                                      null != (t = l.messageToShow[a]) ? t : [];
                                  if (o.length <= 0)
                                    a++,
                                      (o =
                                        null != (e = l.messageToShow[a])
                                          ? e
                                          : []);
                                  var i,
                                    r,
                                    s =
                                      null == (n = l.content)
                                        ? void 0
                                        : n.getComponentsInChildren(c);
                                  if (
                                    (null == s ||
                                      s.forEach(function (t) {
                                        t.node.active = !1;
                                      }),
                                    1 == o.length)
                                  )
                                    l.lbl_for_thongbao &&
                                      (l.lbl_for_thongbao.node.active = !0),
                                      l.lbl_for_thongbao &&
                                        (l.lbl_for_thongbao.string =
                                          null !=
                                          (i =
                                            null == (r = o[0])
                                              ? void 0
                                              : r.trim())
                                            ? i
                                            : "");
                                  else
                                    o.forEach(function (t, n) {
                                      var e;
                                      if (
                                        s &&
                                        l.lbl_for_thongbao &&
                                        s[n] &&
                                        (null == (e = s[n])
                                          ? void 0
                                          : e.name) !=
                                          l.lbl_for_thongbao.name &&
                                        n < s.length &&
                                        ((s[n].string =
                                          null == t ? void 0 : t.trim()),
                                        (s[n].node.active = !0),
                                        0 != l.listColor.length)
                                      ) {
                                        var o =
                                          n >= l.listColor.length
                                            ? l.listColor[0]
                                            : l.listColor[n];
                                        o &&
                                          (s[n].color = new h(
                                            o.r,
                                            o.g,
                                            o.b,
                                            o.a
                                          ));
                                      }
                                    }),
                                      (l.listColor = []);
                                  a++;
                                }
                              })
                              .delay(0.1)
                              .call(function () {
                                var t,
                                  n,
                                  e =
                                    null == (t = l.content)
                                      ? void 0
                                      : t.getComponent(s);
                                e && (r.x = -e.contentSize.width / 2),
                                  null == (n = l.content) || n.setPosition(r);
                              })
                              .to(0.5, { opacity: 255 })
                              .delay(5)
                              .to(0.5, { opacity: 1 })
                          )),
                        null == (o = this.fadeTween) || o.start();
                    }
                  }),
                  (i.hide = function () {
                    null != this.showTween &&
                      (this.showTween.stop(), (this.showTween = null)),
                      null != this.fadeTween &&
                        (this.fadeTween.stop(), (this.fadeTween = null)),
                      this.clip_transform &&
                        (this.clip_transform.node.active = !1),
                      (this.messageToShow = []);
                  }),
                  (i.calculateTime = function () {
                    return 6;
                  }),
                  n
                );
              })(g)).prototype,
              "content",
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
            (y = n(_.prototype, "clip_transform", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = n(_.prototype, "lbl_for_thongbao", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = _))
          ) || v)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FormatEditBox.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var n, o, i, r, e, c;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy),
            (i = t._decorator),
            (r = t.EditBox),
            (e = t.Component);
        },
        function (t) {
          c = t.StringUtils;
        },
      ],
      execute: function () {
        var u;
        o._RF.push({}, "0ea029iivRD3ZCxiSIECRMM", "FormatEditBox", void 0);
        var s = i.ccclass;
        t(
          "FormatEditBox",
          s("FormatEditBox")(
            (u = (function (t) {
              function o() {
                for (
                  var n, o = arguments.length, i = new Array(o), r = 0;
                  r < o;
                  r++
                )
                  i[r] = arguments[r];
                return (
                  ((n = t.call.apply(t, [this].concat(i)) || this).edt = null),
                  n
                );
              }
              return (
                n(o, t),
                (o.prototype.onLoad = function () {
                  var t = this.node.getComponent(r);
                  (null == t ? void 0 : t.inputMode) == r.InputMode.NUMERIC &&
                    t.node.on("text-changed", function () {
                      t.string = c.formatNumber(+t.string);
                    });
                }),
                o
              );
            })(e))
          ) || u
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/G1_CanvasScaleByOrientation.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (i) {
    "use strict";
    var e, t, n, o, s, r, a, h, u, c, l, g, d, w, f, S, R;
    return {
      setters: [
        function (i) {
          (e = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (n = i.initializerDefineProperty),
            (o = i.assertThisInitialized);
        },
        function (i) {
          (s = i.cclegacy),
            (r = i._decorator),
            (a = i.Canvas),
            (h = i.Widget),
            (u = i.sys),
            (c = i.view),
            (l = i.macro),
            (g = i.director),
            (d = i.screen),
            (w = i.log),
            (f = i.ResolutionPolicy),
            (S = i.Camera),
            (R = i.Component);
        },
      ],
      execute: function () {
        var D, b, z, p, v, m, O, y, T, I, N, _, A, E, C;
        s._RF.push(
          {},
          "0a6baajH9VLDZDlLARSB0I/",
          "G1_CanvasScaleByOrientation",
          void 0
        );
        var H = r.ccclass,
          P = r.property;
        i(
          "G1_CanvasScaleByOrientation",
          ((D = H("G1_CanvasScaleByOrientation")),
          (b = P(a)),
          (z = P(h)),
          D(
            ((m = e(
              (v = (function (i) {
                function e() {
                  for (
                    var e, t = arguments.length, s = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (e = i.call.apply(i, [this].concat(s)) || this),
                    n(e, "autoOrientation", m, o(e)),
                    n(e, "isPortrait", O, o(e)),
                    n(e, "canvas", y, o(e)),
                    n(e, "fitByOrientation", T, o(e)),
                    n(e, "useCustomDesignResolution", I, o(e)),
                    n(e, "customDSWidth", N, o(e)),
                    n(e, "customDSHeight", _, o(e)),
                    n(e, "widgetNodes", A, o(e)),
                    n(e, "isDebug", E, o(e)),
                    n(e, "minScreenRatio", C, o(e)),
                    (e._thisOnResized = function () {}),
                    (e.innerSize = { width: 0, height: 0 }),
                    e
                  );
                }
                t(e, i);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    if (
                      ((this.innerSize = {
                        width: window.innerWidth,
                        height: window.innerHeight,
                      }),
                      (this._thisOnResized = this.onScreenResized.bind(this)),
                      u.isBrowser
                        ? window.addEventListener("resize", this._thisOnResized)
                        : c.on("canvas-resize", this._thisOnResized),
                      !u.isNative)
                    ) {
                      var i = document.getElementById("div_full_screen");
                      this.isPortrait && i && (i.style.visibility = "hidden"),
                        this.autoOrientation
                          ? c.setOrientation(l.ORIENTATION_AUTO)
                          : this.isPortrait
                          ? c.setOrientation(l.ORIENTATION_PORTRAIT)
                          : c.setOrientation(l.ORIENTATION_LANDSCAPE);
                    }
                  }),
                  (s.start = function () {
                    if (u.isMobile) {
                      var i = new Event("gameShow");
                      window.dispatchEvent(i);
                    }
                    u.isNative &&
                      g.emit(
                        "INTEGRATION_SET_CANVAS_ORIENT",
                        this.isPortrait ? 0 : 1
                      ),
                      this.scaleCanvasByOrientation();
                  }),
                  (s.scaleCanvasByOrientation = function () {
                    var i = window ? window.innerWidth : d.windowSize.width,
                      e = window ? window.innerHeight : d.windowSize.height;
                    if (
                      (this.autoOrientation
                        ? (this.isPortrait = i < e)
                        : this.isPortrait
                        ? c.setOrientation(l.ORIENTATION_PORTRAIT)
                        : c.setOrientation(l.ORIENTATION_LANDSCAPE),
                      this.canvas)
                    ) {
                      if (
                        (this.isDebug && w("Canvas after update: "),
                        this.isDebug && w(this.canvas),
                        (this.canvas.alignCanvasWithScreen = !0),
                        this.fitByOrientation)
                      ) {
                        var t = this.useCustomDesignResolution
                            ? this.customDSWidth / this.customDSHeight
                            : c.getDesignResolutionSize().width /
                              c.getDesignResolutionSize().height,
                          n = i / e;
                        if (window && u.isMobile && u.isBrowser) {
                          var o = this.isLandscapeScreen();
                          n = this.isPortrait
                            ? o
                              ? e / i
                              : i / e
                            : o
                            ? window.innerWidth / window.innerHeight
                            : window.innerHeight / window.innerWidth;
                        }
                        this.isDebug &&
                          w(
                            "[TestResize]View size width: " +
                              i +
                              ", height: " +
                              e +
                              "  Design Resolution: W: " +
                              c.getDesignResolutionSize().width +
                              ", H: " +
                              c.getDesignResolutionSize().height +
                              ",  Screen Ratio: " +
                              n +
                              ", Design Ratio: " +
                              t +
                              ", minScreenRatio: " +
                              this.minScreenRatio
                          ),
                          this.isPortrait
                            ? (n < t
                                ? (c.setDesignResolutionSize(
                                    c.getDesignResolutionSize().width,
                                    c.getDesignResolutionSize().height,
                                    f.FIXED_WIDTH
                                  ),
                                  this.isDebug && w("CANVAS FIT WIDTH"))
                                : (c.setDesignResolutionSize(
                                    c.getDesignResolutionSize().width,
                                    c.getDesignResolutionSize().height,
                                    f.FIXED_HEIGHT
                                  ),
                                  this.isDebug && w("CANVAS FIT HEIGHT")),
                              this.rotateRootPortraitGame())
                            : n < t && n >= this.minScreenRatio
                            ? (c.setDesignResolutionSize(
                                c.getDesignResolutionSize().width,
                                c.getDesignResolutionSize().height,
                                f.FIXED_WIDTH
                              ),
                              this.isDebug && w("[TestResize]CANVAS FIT WIDTH"))
                            : (c.setDesignResolutionSize(
                                c.getDesignResolutionSize().width,
                                c.getDesignResolutionSize().height,
                                f.FIXED_HEIGHT
                              ),
                              this.isDebug &&
                                w("[TestResize]CANVAS FIT HEIGHT"));
                      }
                    } else this.isDebug && w("No canvas component");
                    if (this.widgetNodes.length > 0)
                      for (var s = 0; s < this.widgetNodes.length; s++) {
                        if (this.widgetNodes[s]) {
                          var r = this.widgetNodes[s];
                          null == r || r.updateAlignment();
                        }
                      }
                  }),
                  (s.onScreenResized = function () {
                    var i = this;
                    this.scheduleOnce(function () {
                      i.scaleCanvasByOrientation();
                    }, 0.5);
                  }),
                  (s.isLandscapeScreen = function () {
                    if (
                      u.isMobile &&
                      u.isBrowser &&
                      "function" == typeof window.matchMedia
                    ) {
                      if (window.matchMedia("(orientation: landscape)").matches)
                        return !0;
                      if (window.matchMedia("(orientation: portrait)").matches)
                        return !1;
                    }
                    return !0;
                  }),
                  (s.isShowKeyboard = function () {
                    return (
                      (window.innerWidth * window.innerHeight) /
                        (this.innerSize.width * this.innerSize.height) <
                      0.8
                    );
                  }),
                  (s.rotateRootPortraitGame = function () {
                    if (this.isPortrait && u.isMobile && u.isBrowser) {
                      var i =
                        this.isLandscapeScreen() && !this.isShowKeyboard();
                      this.node.children.forEach(function (e) {
                        e.getComponent(S) || (e.angle = i ? 180 : 0);
                      });
                    }
                  }),
                  (s.onDestroy = function () {
                    u.isBrowser
                      ? window.removeEventListener(
                          "resize",
                          this._thisOnResized
                        )
                      : c.off("canvas-resize", this._thisOnResized);
                  }),
                  e
                );
              })(R)).prototype,
              "autoOrientation",
              [P],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              }
            )),
            (O = e(v.prototype, "isPortrait", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (y = e(v.prototype, "canvas", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = e(v.prototype, "fitByOrientation", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (I = e(v.prototype, "useCustomDesignResolution", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (N = e(v.prototype, "customDSWidth", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1560;
              },
            })),
            (_ = e(v.prototype, "customDSHeight", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 720;
              },
            })),
            (A = e(v.prototype, "widgetNodes", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (E = e(v.prototype, "isDebug", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (C = e(v.prototype, "minScreenRatio", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (p = v))
          ) || p)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/G1_CustomCanvasSize.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./G1_CanvasScaleByOrientation.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, o, a, s, r, u, l, c, h;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (s = t._decorator),
            (r = t.view),
            (u = t.ResolutionPolicy),
            (l = t.sys),
            (c = t.Component);
        },
        function (t) {
          h = t.G1_CanvasScaleByOrientation;
        },
      ],
      execute: function () {
        var d, p, v, f, g;
        a._RF.push(
          {},
          "9c7d6mF2lxMAphIneUb9Yvw",
          "G1_CustomCanvasSize",
          void 0
        );
        var m = s.ccclass,
          C = s.property;
        t(
          "G1_CustomCanvasSize",
          m("G1_CustomCanvasSize")(
            ((v = i(
              (p = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, a = new Array(e), s = 0;
                    s < e;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (i = t.call.apply(t, [this].concat(a)) || this),
                    n(i, "customDSWidth", v, o(i)),
                    n(i, "customDSHeight", f, o(i)),
                    n(i, "isPortrait", g, o(i)),
                    (i._defaultDesignResolution = { width: 0, height: 0 }),
                    (i._defaultResolutionPolicy = null),
                    (i._thisOnResized = function () {}),
                    (i._canvasScaleComp = null),
                    i
                  );
                }
                e(i, t);
                var a = i.prototype;
                return (
                  (a.onLoad = function () {
                    (this._canvasScaleComp =
                      this.node.scene.getComponentInChildren(h)),
                      this.updateCustomCanvasSize(),
                      this.updateWindowOrientation();
                  }),
                  (a.start = function () {
                    this.scaleCanvasByOrientation(0.1);
                  }),
                  (a.updateCustomCanvasSize = function () {
                    var t = r.getDesignResolutionSize();
                    (this._defaultDesignResolution.width = t.width),
                      (this._defaultDesignResolution.height = t.height),
                      (this._defaultResolutionPolicy = r.getResolutionPolicy());
                    var i = this.isPortrait ? u.FIXED_HEIGHT : u.FIXED_WIDTH;
                    r.setDesignResolutionSize(
                      this.customDSWidth,
                      this.customDSHeight,
                      i
                    );
                  }),
                  (a.updateWindowOrientation = function () {
                    if (!l.isNative && window && this.isMobile()) {
                      var t = new CustomEvent("orientationchange", {
                        detail: { type: "manualCall" },
                      });
                      window.dispatchEvent(t);
                    }
                  }),
                  (a.scaleCanvasByOrientation = function (t) {
                    var i = this;
                    this.scheduleOnce(function () {
                      i._canvasScaleComp &&
                        i._canvasScaleComp.scaleCanvasByOrientation();
                    }, t);
                  }),
                  (a.isMobile = function () {
                    var t =
                      null !=
                      navigator.userAgent.match(
                        /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
                      );
                    return t;
                  }),
                  (a.onDestroy = function () {
                    var t = this._defaultDesignResolution,
                      i = t.width,
                      e = t.height;
                    r.setDesignResolutionSize(
                      i,
                      e,
                      this._defaultResolutionPolicy || 0
                    ),
                      this.updateWindowOrientation();
                  }),
                  i
                );
              })(c)).prototype,
              "customDSWidth",
              [C],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return 1560;
                },
              }
            )),
            (f = i(p.prototype, "customDSHeight", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 720;
              },
            })),
            (g = i(p.prototype, "isPortrait", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (d = p))
          ) || d
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GameBaiPlayerView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BubbleChat.ts",
    "./PlayerView.ts",
  ],
  function (e) {
    "use strict";
    var t, r, n, i, s, a, o, l, u, c, d, p, h;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (s = e.cclegacy),
            (a = e._decorator),
            (o = e.Node),
            (l = e.ProgressBar),
            (u = e.Tween),
            (c = e.tween),
            (d = e.Vec3);
        },
        function (e) {
          p = e.BubbleChat;
        },
        function (e) {
          h = e.PlayerView;
        },
      ],
      execute: function () {
        var g, f, v, m, w, _, y, C, b, B, T, P, x;
        s._RF.push({}, "61f2aWYKNNGX7URr2T4Bp/t", "GameBaiPlayerView", void 0);
        var z = a.ccclass,
          I = a.property;
        e(
          "GameBaiPlayerView",
          ((g = z("GameBaiPlayerView")),
          (f = I(o)),
          (v = I(l)),
          (m = I(o)),
          (w = I(Number)),
          (_ = I(p)),
          g(
            ((b = t(
              (C = (function (e) {
                function t() {
                  for (
                    var t, r = arguments.length, s = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    n(t, "card_pos", b, i(t)),
                    n(t, "progressBar", B, i(t)),
                    n(t, "nodeTimer", T, i(t)),
                    n(t, "maxTime", P, i(t)),
                    n(t, "resultText", x, i(t)),
                    (t.cards = []),
                    (t._state = 0),
                    (t._remainingCard = 0),
                    (t.prgress_tween = null),
                    t
                  );
                }
                r(t, e);
                var s = t.prototype;
                return (
                  (s.getCardPos = function () {
                    return this.card_pos;
                  }),
                  (s.setCardPos = function (e) {
                    var t;
                    null == (t = this.card_pos) || t.setPosition(e);
                  }),
                  (s.addCard = function (e, t) {
                    void 0 === t && (t = !1),
                      e.setInteractable(t),
                      this.cards.push(e);
                  }),
                  (s.getSelectedCards = function () {
                    return this.cards.filter(function (e) {
                      return e.getSelected();
                    });
                  }),
                  (s.getPlayerCard = function () {
                    return this.cards;
                  }),
                  (s.getCountPosibleToSelect = function () {
                    return this.cards.filter(function (e) {
                      return e.isCanSelect();
                    }).length;
                  }),
                  (s.setCurrentState = function (e, t) {
                    (this._state = e), (this._remainingCard = t);
                  }),
                  (s.getCurrentState = function () {
                    return this._state;
                  }),
                  (s.getRemainingCard = function () {
                    return this._remainingCard;
                  }),
                  (s.showResultText = function (e, t, r) {
                    var n;
                    void 0 === t && (t = 5),
                      void 0 === r && (r = 1),
                      "" != e &&
                        null != e &&
                        null != e &&
                        (null == (n = this.resultText) || n.show(e, !1, t, r));
                  }),
                  (s.startCountDown = function (e) {
                    var t,
                      r,
                      n,
                      i,
                      s,
                      a,
                      o,
                      l,
                      p,
                      h = this;
                    u.stopAllByTarget(this.nodeTimer || void 0),
                      u.stopAllByTarget(
                        null == (t = this.spr_avatar) ? void 0 : t.node
                      ),
                      this.nodeTimer && (this.nodeTimer.active = !0),
                      null != this.prgress_tween &&
                        null != this.prgress_tween &&
                        this.prgress_tween.stop(),
                      c(null == (r = this.spr_avatar) ? void 0 : r.node)
                        .sequence(
                          c().to(0.1, {
                            scale: new d(
                              ((null == (n = this.spr_avatar)
                                ? void 0
                                : n.node.scale.x) || 0) +
                                0.3 *
                                  ((null == (i = this.spr_avatar)
                                    ? void 0
                                    : i.node.scale.x) || 0),
                              ((null == (s = this.spr_avatar)
                                ? void 0
                                : s.node.scale.y) || 0) +
                                0.3 *
                                  ((null == (a = this.spr_avatar)
                                    ? void 0
                                    : a.node.scale.y) || 0),
                              ((null == (o = this.spr_avatar)
                                ? void 0
                                : o.node.scale.z) || 0) +
                                0.3 *
                                  ((null == (l = this.spr_avatar)
                                    ? void 0
                                    : l.node.scale.z) || 0)
                            ),
                          }),
                          c().to(0.1, {
                            scale: new d(
                              (null == (p = this.spr_avatar)
                                ? void 0
                                : p.node.scale) || d.ZERO
                            ),
                          })
                        )
                        .start();
                    var g = Math.floor(e);
                    this.progressBar &&
                      (this.progressBar.progress = g / this.maxTime),
                      c(this.nodeTimer)
                        .repeat(
                          g,
                          c().sequence(
                            c().call(function () {
                              var e;
                              null != h.prgress_tween &&
                                null != h.prgress_tween &&
                                h.prgress_tween.stop();
                              var t = {
                                a:
                                  null == (e = h.progressBar)
                                    ? void 0
                                    : e.progress,
                              };
                              (h.prgress_tween = c(t).to(
                                1,
                                { a: (g - 1) / h.maxTime },
                                {
                                  progress: function (e, t, r, n) {
                                    return (
                                      null != h.progressBar &&
                                        null != h.progressBar &&
                                        (h.progressBar.progress = r),
                                      e + (t - e) * n
                                    );
                                  },
                                }
                              )),
                                h.prgress_tween.start();
                            }),
                            c().delay(1),
                            c().call(function () {
                              g -= 1;
                            })
                          )
                        )
                        .start();
                  }),
                  (s.stopCountDown = function () {
                    this.nodeTimer && (this.nodeTimer.active = !1),
                      this.progressBar && (this.progressBar.progress = 0);
                  }),
                  (s.resetUI = function () {
                    (this.cards = []),
                      this.stopCountDown(),
                      this.ready(!1),
                      this.showButtonGetout(!1),
                      this.hideFxImmediately();
                  }),
                  (s.getCardItemWithCode = function (e) {
                    var t = this.cards.filter(function (t) {
                      return t.getCode() == e;
                    });
                    return t.length > 0 ? t[0] : null;
                  }),
                  (s.removeCardItemWithCode = function (e) {
                    this.cards = this.cards.filter(function (t) {
                      return t.getCode() != e;
                    });
                  }),
                  (s.popCard = function () {
                    return this.cards.pop();
                  }),
                  (s.rearrangeCard = function () {
                    for (
                      var e = this,
                        t = function (t) {
                          var r,
                            n = new d(
                              (null == (r = e.getCardPos())
                                ? void 0
                                : r.position) || d.ZERO
                            );
                          n.x += 80 * t;
                          var i = e.cards[t];
                          if (i && i.node.position.x != n.x) {
                            u.stopAllByTarget(i.node);
                            var s = d.distance(i.node.position, n) / 900;
                            c(i.node)
                              .sequence(
                                c().call(function () {
                                  i.setInteractable(!1);
                                }),
                                c().to(s, { position: n }),
                                c().call(function () {
                                  i.lockPosition(n), i.setInteractable(!0);
                                })
                              )
                              .start();
                          }
                        },
                        r = 0;
                      r < this.cards.length;
                      r++
                    )
                      t(r);
                  }),
                  t
                );
              })(h)).prototype,
              "card_pos",
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
            (B = t(C.prototype, "progressBar", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = t(C.prototype, "nodeTimer", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = t(C.prototype, "maxTime", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 20;
              },
            })),
            (x = t(C.prototype, "resultText", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = C))
          ) || y)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GameConfigManager.ts",
  ["cc", "./Define.ts", "./Config.ts"],
  function (e) {
    "use strict";
    var t, n, i, a, o, r, s;
    return {
      setters: [
        function (e) {
          (t = e.cclegacy),
            (n = e._decorator),
            (i = e.sys),
            (a = e.Vec3),
            (o = e.view);
        },
        function (e) {
          r = e.StorageKey;
        },
        function (e) {
          s = e.config;
        },
      ],
      execute: function () {
        var c, g;
        t._RF.push({}, "b0b67h/uDZPxoh4+i427otM", "GameConfigManager", void 0);
        var u = n.ccclass;
        e(
          "GameConfigManager",
          u("GameConfigManager")(
            (((g = (function () {
              function e() {}
              return (
                (e.getJackpotsUnloggedURL = function () {
                  if (
                    !this.jackpotsUnloggedURL ||
                    0 == this.jackpotsUnloggedURL.length
                  ) {
                    var e = localStorage.getItem(r.GameConfig) || "",
                      t = JSON.parse(e);
                    this.jackpotsUnloggedURL = t.jackpots_url;
                  }
                  return this.jackpotsUnloggedURL;
                }),
                (e.getDeleteHistoryURL = function () {
                  if (
                    !this.deleteHistoryURL ||
                    0 == this.deleteHistoryURL.length
                  ) {
                    var e = localStorage.getItem(r.GameConfig) || "",
                      t = JSON.parse(e);
                    this.deleteHistoryURL = t.cleanup_url;
                  }
                  return this.deleteHistoryURL;
                }),
                (e.getSportDomainURL = function () {
                  return s.sport_domain;
                }),
                (e.getHSK = function () {
                  return i.isNative ? e.hska : e.hsk;
                }),
                (e.appName = function () {
                  var e = localStorage.getItem(r.GameConfig) || "",
                    t = JSON.parse(e).appName;
                  return t;
                }),
                (e.brand = function () {
                  var e = localStorage.getItem(r.GameConfig) || "",
                    t = JSON.parse(e).brand;
                  return t;
                }),
                (e.GetSuffix = function () {
                  return this.suffix;
                }),
                (e.isDev = function () {
                  var t = localStorage.getItem(r.GameConfig) || "";
                  JSON.parse(t);
                  return "sandbox" == e.appName();
                }),
                (e.getPopupScale = function () {
                  return i.platform == i.Platform.DESKTOP_BROWSER || i.isNative
                    ? new a(0.9, 0.9, 0.9)
                    : a.ONE;
                }),
                (e.getOriginalDesignResolutionWidth = function () {
                  return 1560;
                }),
                (e.getOriginalDesignResolutionHeight = function () {
                  return 720;
                }),
                (e.getSizeWidth = function (e) {
                  return (
                    void 0 === e && (e = 1),
                    (o.getCanvasSize().width / o.getScaleX()) * e
                  );
                }),
                (e.getSizeHeight = function (e) {
                  return (
                    void 0 === e && (e = 1),
                    (o.getCanvasSize().height / o.getScaleY()) * e
                  );
                }),
                (e.canOpenVideoSound = function () {
                  return i.isBrowser && i.isMobile
                    ? i.os == i.OS.ANDROID
                    : i.browserType != i.BrowserType.SAFARI ||
                        e.isPassPolicySafari;
                }),
                (e.getXocDiaLiveStreamTipRank = function () {
                  return e.getXDLivestreamDomainURL() + "top-user-tip";
                }),
                (e.getTaiXiuLiveStreamWSURL = function () {
                  return s.tx_livestream_ws_url;
                }),
                (e.getXocDiaLiveStreamWSURL = function () {
                  return s.xd_livestream_ws_url;
                }),
                (e.getSportWSDomainURL = function () {
                  return s.ws_sport_domain;
                }),
                (e.getSportTopDomainURL = function () {
                  return s.top_sport_domain;
                }),
                (e.getXDLivestreamDomainURL = function () {
                  if (0 == this.xdLivestreamDomainURL.length) {
                    var e = localStorage.getItem(r.GameConfig) || "",
                      t = JSON.parse(e);
                    this.xdLivestreamDomainURL = t.xd_livestream_domain;
                  }
                  return this.xdLivestreamDomainURL;
                }),
                (e.verifySmartPayOTPURL = function () {
                  var t = e.suffix + "verifyLoginSmartPayOTP";
                  return e.CTTdomainURL + t;
                }),
                (e.addURLParam = function (e) {
                  return "&" + e + "=%" + e + "%";
                }),
                (e.getCaptchaURL = function () {
                  var t = e.suffix + "getCaptcha&sessionId=%sessionId%";
                  return e.IDdomainURL + t;
                }),
                (e.getLoginConfig = function () {
                  var e = localStorage.getItem("X_GAME_CONFIG") || "{}";
                  return JSON.parse(e).loginConfig;
                }),
                (e.getEventGameDataURL = function () {
                  return (
                    e.MissionDomainURL +
                    "/api/independent-day/progress?displayName=%dName%&userName=%uName%"
                  );
                }),
                e
              );
            })()).jackpotsUnloggedURL = ""),
            (g.deleteHistoryURL = ""),
            (g.MissionDomainURL = ""),
            (g.IDdomainURL = ""),
            (g.SAdomainURL = ""),
            (g.CTTdomainURL = ""),
            (g.MainWSURL = ""),
            (g.MiniWSURL = ""),
            (g.RongHoWSURL = ""),
            (g.BCB5WSURL = ""),
            (g.XDTLWSURL = ""),
            (g.liveChatURL = ""),
            (g.fanpageURL = ""),
            (g.helpURL = ""),
            (g.hotlineNumber = ""),
            (g.LDSTURL = ""),
            (g.LDURL = ""),
            (g.getStreamTokenUrl = ""),
            (g.txLiveStreamWsUrl = ""),
            (g.xdLiveStreamWsUrl = ""),
            (g.hsk = "YICQFXSBCASEMZWKJBQH"),
            (g.hska = ""),
            (g.bundleID = "com.gamebai.sunclub"),
            (g.gameConfigVersion = 20),
            (g.disID = ""),
            (g.appID = ""),
            (g.IS_REJECT_ALL = !1),
            (g.suffix = "?command="),
            (g._bankAccs = []),
            (g._bankInfos = []),
            (g._allBankInfos = []),
            (g._depositTypes = []),
            (g._autoIBInfos = []),
            (g._codePayAccs = []),
            (g._codePayBankAccs = []),
            (g._codePayEwalAccs = []),
            (g._cryptoAccs = []),
            (g._eWalletAccs = []),
            (g._eWalletInfos = []),
            (g._allEWalletInfos = []),
            (g._nmList = []),
            (g._coNMList = []),
            (g._needVerifyBankAccount = !1),
            (g._verifiedAccountHolders = []),
            (g._verifiedAccountInfos = []),
            (g.fixedCodePay = ""),
            (g.bankHelpUrl = ""),
            (g.cryptoHelpUrl = ""),
            (g.eWalletHelpUrl = ""),
            (g.smartLinkHelpUrl = ""),
            (g.codePayHelpUrl = ""),
            (g.sSportURL = ""),
            (g.totpSecretKey = ""),
            (g.minCK = 0),
            (g.taxCK = 0),
            (g.batCK = !1),
            (g.isPassPolicySafari = !1),
            (g.sportTopDomainURL = ""),
            (g.xdLivestreamDomainURL = ""),
            (c = g))
          ) || c
        );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GameListItem.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, i, o, r, a, n, l, d, s;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (n = e._decorator),
            (l = e.Node),
            (d = e.UITransform),
            (s = e.Component);
        },
      ],
      execute: function () {
        var c, h, u, p, b;
        a._RF.push({}, "19ccbOovbdOSZtSKIQjSbHh", "GameListItem", void 0);
        var w = n.ccclass,
          v = n.property;
        e(
          "GameListItem",
          ((c = w("GameListItem")),
          (h = v(l)),
          c(
            ((b = t(
              (p = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, a = new Array(i), n = 0;
                    n < i;
                    n++
                  )
                    a[n] = arguments[n];
                  return (
                    (t = e.call.apply(e, [this].concat(a)) || this),
                    o(t, "drawableNode", b, r(t)),
                    t
                  );
                }
                return (
                  i(t, e),
                  (t.prototype.updateVisibility = function (e, t, i, o) {
                    var r,
                      a,
                      n = this.node.getComponent(d),
                      l = null == n ? void 0 : n.contentSize,
                      s =
                        null == (r = this.node.parent) ||
                        null == (a = r.getComponent(d))
                          ? void 0
                          : a.convertToWorldSpaceAR(this.node.getPosition());
                    s &&
                    l &&
                    (s.x + (this.node.worldScale.x * l.width) / 2 < e ||
                      s.x - (this.node.worldScale.x * l.width) / 2 > t)
                      ? this.drawableNode && (this.drawableNode.active = !1)
                      : this.drawableNode && (this.drawableNode.active = !0),
                      s &&
                      l &&
                      (s.y + (this.node.worldScale.y * l.height) / 2 < i ||
                        s.y - (this.node.worldScale.y * l.height) / 2 > o)
                        ? this.drawableNode && (this.drawableNode.active = !1)
                        : this.drawableNode && (this.drawableNode.active = !0);
                  }),
                  t
                );
              })(s)).prototype,
              "drawableNode",
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
            (u = p))
          ) || u)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GamePlatformManager.ts",
  ["cc", "./GameConfigManager.ts", "./NativeHelper.ts"],
  function (T) {
    "use strict";
    var P, e, M, b, A, a;
    return {
      setters: [
        function (T) {
          (P = T.cclegacy), (e = T._decorator), (M = T.sys), (b = T.log);
        },
        function (T) {
          A = T.GameConfigManager;
        },
        function (T) {
          a = T.NativeHelper;
        },
      ],
      execute: function () {
        var S, B;
        P._RF.push(
          {},
          "ab5ccQq8UxGdbQiEkEzj7vz",
          "GamePlatformManager",
          void 0
        );
        var i = e.ccclass;
        T(
          "GamePlatformManager",
          i("GamePlatformManager")(
            (((B = (function () {
              function T() {}
              return (
                (T.getPlatformID = function () {
                  return M.isBrowser
                    ? T.isWebMobile()
                      ? 5
                      : 4
                    : M.Platform.ANDROID === M.platform
                    ? 2
                    : 1;
                }),
                (T.getDeviceID = function () {
                  if (!M.isBrowser) return a.getDeviceID();
                  var T = M.localStorage.getItem(this.DEVICE_ID_KEY);
                  return (null != T && null != T) || (T = ""), T;
                }),
                (T.isWebMobile = function () {
                  return (
                    M.isBrowser && M.platform != M.Platform.DESKTOP_BROWSER
                  );
                }),
                (T.isIpadMobile = function () {
                  if (!M.isBrowser && M.Platform.ANDROID != M.platform) {
                    var T = A.getSizeWidth(),
                      P = A.getSizeHeight();
                    if (
                      T / P <= 4 / 3 ||
                      (2732 == T && 2048 == P) ||
                      (2732 == P && 2048 == T) ||
                      (2224 == T && 1668 == P) ||
                      (1668 == P && 2224 == T)
                    )
                      return !0;
                  }
                  return !1;
                }),
                (T.isTabletBrowser = function () {
                  if (!T.isWebMobile()) return !1;
                  var P = window.navigator.userAgent;
                  if (P.match(/iPad/i)) return !0;
                  var e = JSON.stringify(T.tabletsReg),
                    M = JSON.parse(e),
                    b = [];
                  for (var A in M) b.push(A);
                  return (
                    b.forEach(function (T) {
                      if (P.match(M[T])) return !0;
                    }),
                    !1
                  );
                }),
                (T.isWebDesktop = function () {
                  return (
                    M.isBrowser && M.platform == M.Platform.DESKTOP_BROWSER
                  );
                }),
                (T.getOSVersion = function () {
                  return (
                    b(
                      "getOSVersion:",
                      M.browserType,
                      M.browserVersion,
                      M.os,
                      M.osVersion
                    ),
                    M.isBrowser
                      ? M.browserType + " " + M.browserVersion
                      : M.os + " " + M.osVersion
                  );
                }),
                (T.getSessionID = function () {
                  var T = document.cookie.match(/JSESSIONID=[^;]+/);
                  return null != T
                    ? T instanceof Array
                      ? T[0].substring(11)
                      : T.substring(11)
                    : T;
                }),
                T
              );
            })()).tabletsReg = {
              iPad: "iPad|iPad.*Mobile",
              NexusTablet: "Android.*Nexus[\\s]+(7|9|10)",
              GoogleTablet: "Android.*Pixel C",
              SamsungTablet:
                "SAMSUNG.*Tablet|Galaxy.*Tab|SC-01C|GT-P1000|GT-P1003|GT-P1010|GT-P3105|GT-P6210|GT-P6800|GT-P6810|GT-P7100|GT-P7300|GT-P7310|GT-P7500|GT-P7510|SCH-I800|SCH-I815|SCH-I905|SGH-I957|SGH-I987|SGH-T849|SGH-T859|SGH-T869|SPH-P100|GT-P3100|GT-P3108|GT-P3110|GT-P5100|GT-P5110|GT-P6200|GT-P7320|GT-P7511|GT-N8000|GT-P8510|SGH-I497|SPH-P500|SGH-T779|SCH-I705|SCH-I915|GT-N8013|GT-P3113|GT-P5113|GT-P8110|GT-N8010|GT-N8005|GT-N8020|GT-P1013|GT-P6201|GT-P7501|GT-N5100|GT-N5105|GT-N5110|SHV-E140K|SHV-E140L|SHV-E140S|SHV-E150S|SHV-E230K|SHV-E230L|SHV-E230S|SHW-M180K|SHW-M180L|SHW-M180S|SHW-M180W|SHW-M300W|SHW-M305W|SHW-M380K|SHW-M380S|SHW-M380W|SHW-M430W|SHW-M480K|SHW-M480S|SHW-M480W|SHW-M485W|SHW-M486W|SHW-M500W|GT-I9228|SCH-P739|SCH-I925|GT-I9200|GT-P5200|GT-P5210|GT-P5210X|SM-T311|SM-T310|SM-T310X|SM-T210|SM-T210R|SM-T211|SM-P600|SM-P601|SM-P605|SM-P900|SM-P901|SM-T217|SM-T217A|SM-T217S|SM-P6000|SM-T3100|SGH-I467|XE500|SM-T110|GT-P5220|GT-I9200X|GT-N5110X|GT-N5120|SM-P905|SM-T111|SM-T2105|SM-T315|SM-T320|SM-T320X|SM-T321|SM-T520|SM-T525|SM-T530NU|SM-T230NU|SM-T330NU|SM-T900|XE500T1C|SM-P605V|SM-P905V|SM-T337V|SM-T537V|SM-T707V|SM-T807V|SM-P600X|SM-P900X|SM-T210X|SM-T230|SM-T230X|SM-T325|GT-P7503|SM-T531|SM-T330|SM-T530|SM-T705|SM-T705C|SM-T535|SM-T331|SM-T800|SM-T700|SM-T537|SM-T807|SM-P907A|SM-T337A|SM-T537A|SM-T707A|SM-T807A|SM-T237|SM-T807P|SM-P607T|SM-T217T|SM-T337T|SM-T807T|SM-T116NQ|SM-T116BU|SM-P550|SM-T350|SM-T550|SM-T9000|SM-P9000|SM-T705Y|SM-T805|GT-P3113|SM-T710|SM-T810|SM-T815|SM-T360|SM-T533|SM-T113|SM-T335|SM-T715|SM-T560|SM-T670|SM-T677|SM-T377|SM-T567|SM-T357T|SM-T555|SM-T561|SM-T713|SM-T719|SM-T813|SM-T819|SM-T580|SM-T355Y?|SM-T280|SM-T817A|SM-T820|SM-W700|SM-P580|SM-T587|SM-P350|SM-P555M|SM-P355M|SM-T113NU|SM-T815Y|SM-T585|SM-T285|SM-T825|SM-W708|SM-T835|SM-T830|SM-T837V|SM-T720|SM-T510|SM-T387V|SM-P610|SM-T290|SM-T515|SM-T590|SM-T595|SM-T725|SM-T817P|SM-P585N0|SM-T395|SM-T295|SM-T865|SM-P610N|SM-P615|SM-T970|SM-T380|SM-T5950|SM-T905|SM-T231|SM-T500|SM-T860",
              Kindle:
                "Kindle|Silk.*Accelerated|Android.*\\b(KFOT|KFTT|KFJWI|KFJWA|KFOTE|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|WFJWAE|KFSAWA|KFSAWI|KFASWI|KFARWI|KFFOWI|KFGIWI|KFMEWI)\\b|Android.*Silk/[0-9.]+ like Chrome/[0-9.]+ (?!Mobile)",
              SurfaceTablet: "Windows NT [0-9.]+; ARM;.*(Tablet|ARMBJS)",
              HPTablet:
                "HP Slate (7|8|10)|HP ElitePad 900|hp-tablet|EliteBook.*Touch|HP 8|Slate 21|HP SlateBook 10",
              AsusTablet:
                "^.*PadFone((?!Mobile).)*$|Transformer|TF101|TF101G|TF300T|TF300TG|TF300TL|TF700T|TF700KL|TF701T|TF810C|ME171|ME301T|ME302C|ME371MG|ME370T|ME372MG|ME172V|ME173X|ME400C|Slider SL101|\\bK00F\\b|\\bK00C\\b|\\bK00E\\b|\\bK00L\\b|TX201LA|ME176C|ME102A|\\bM80TA\\b|ME372CL|ME560CG|ME372CG|ME302KL| K010 | K011 | K017 | K01E |ME572C|ME103K|ME170C|ME171C|\\bME70C\\b|ME581C|ME581CL|ME8510C|ME181C|P01Y|PO1MA|P01Z|\\bP027\\b|\\bP024\\b|\\bP00C\\b",
              BlackBerryTablet: "PlayBook|RIM Tablet",
              HTCtablet:
                "HTC_Flyer_P512|HTC Flyer|HTC Jetstream|HTC-P715a|HTC EVO View 4G|PG41200|PG09410",
              MotorolaTablet:
                "xoom|sholest|MZ615|MZ605|MZ505|MZ601|MZ602|MZ603|MZ604|MZ606|MZ607|MZ608|MZ609|MZ615|MZ616|MZ617",
              NookTablet:
                "Android.*Nook|NookColor|nook browser|BNRV200|BNRV200A|BNTV250|BNTV250A|BNTV400|BNTV600|LogicPD Zoom2",
              AcerTablet:
                "Android.*; \\b(A100|A101|A110|A200|A210|A211|A500|A501|A510|A511|A700|A701|W500|W500P|W501|W501P|W510|W511|W700|G100|G100W|B1-A71|B1-710|B1-711|A1-810|A1-811|A1-830)\\b|W3-810|\\bA3-A10\\b|\\bA3-A11\\b|\\bA3-A20\\b|\\bA3-A30|A3-A40",
              ToshibaTablet:
                "Android.*(AT100|AT105|AT200|AT205|AT270|AT275|AT300|AT305|AT1S5|AT500|AT570|AT700|AT830)|TOSHIBA.*FOLIO",
              LGTablet:
                "\\bL-06C|LG-V909|LG-V900|LG-V700|LG-V510|LG-V500|LG-V410|LG-V400|LG-VK810\\b",
              FujitsuTablet:
                "Android.*\\b(F-01D|F-02F|F-05E|F-10D|M532|Q572)\\b",
              PrestigioTablet:
                "PMP3170B|PMP3270B|PMP3470B|PMP7170B|PMP3370B|PMP3570C|PMP5870C|PMP3670B|PMP5570C|PMP5770D|PMP3970B|PMP3870C|PMP5580C|PMP5880D|PMP5780D|PMP5588C|PMP7280C|PMP7280C3G|PMP7280|PMP7880D|PMP5597D|PMP5597|PMP7100D|PER3464|PER3274|PER3574|PER3884|PER5274|PER5474|PMP5097CPRO|PMP5097|PMP7380D|PMP5297C|PMP5297C_QUAD|PMP812E|PMP812E3G|PMP812F|PMP810E|PMP880TD|PMT3017|PMT3037|PMT3047|PMT3057|PMT7008|PMT5887|PMT5001|PMT5002",
              LenovoTablet:
                "Lenovo TAB|Idea(Tab|Pad)( A1|A10| K1|)|ThinkPad([ ]+)?Tablet|YT3-850M|YT3-X90L|YT3-X90F|YT3-X90X|Lenovo.*(S2109|S2110|S5000|S6000|K3011|A3000|A3500|A1000|A2107|A2109|A1107|A5500|A7600|B6000|B8000|B8080)(-|)(FL|F|HV|H|)|TB-X103F|TB-X304X|TB-X304F|TB-X304L|TB-X505F|TB-X505L|TB-X505X|TB-X605F|TB-X605L|TB-8703F|TB-8703X|TB-8703N|TB-8704N|TB-8704F|TB-8704X|TB-8704V|TB-7304F|TB-7304I|TB-7304X|Tab2A7-10F|Tab2A7-20F|TB2-X30L|YT3-X50L|YT3-X50F|YT3-X50M|YT-X705F|YT-X703F|YT-X703L|YT-X705L|YT-X705X|TB2-X30F|TB2-X30L|TB2-X30M|A2107A-F|A2107A-H|TB3-730F|TB3-730M|TB3-730X|TB-7504F|TB-7504X|TB-X704F|TB-X104F|TB3-X70F|TB-X705F|TB-8504F|TB3-X70L|TB3-710F|TB-X704L",
              DellTablet:
                "Venue 11|Venue 8|Venue 7|Dell Streak 10|Dell Streak 7",
              YarvikTablet:
                "Android.*\\b(TAB210|TAB211|TAB224|TAB250|TAB260|TAB264|TAB310|TAB360|TAB364|TAB410|TAB411|TAB420|TAB424|TAB450|TAB460|TAB461|TAB464|TAB465|TAB467|TAB468|TAB07-100|TAB07-101|TAB07-150|TAB07-151|TAB07-152|TAB07-200|TAB07-201-3G|TAB07-210|TAB07-211|TAB07-212|TAB07-214|TAB07-220|TAB07-400|TAB07-485|TAB08-150|TAB08-200|TAB08-201-3G|TAB08-201-30|TAB09-100|TAB09-211|TAB09-410|TAB10-150|TAB10-201|TAB10-211|TAB10-400|TAB10-410|TAB13-201|TAB274EUK|TAB275EUK|TAB374EUK|TAB462EUK|TAB474EUK|TAB9-200)\\b",
              MedionTablet:
                "Android.*\\bOYO\\b|LIFE.*(P9212|P9514|P9516|S9512)|LIFETAB",
              ArnovaTablet:
                "97G4|AN10G2|AN7bG3|AN7fG3|AN8G3|AN8cG3|AN7G3|AN9G3|AN7dG3|AN7dG3ST|AN7dG3ChildPad|AN10bG3|AN10bG3DT|AN9G2",
              IntensoTablet: "INM8002KP|INM1010FP|INM805ND|Intenso Tab|TAB1004",
              IRUTablet: "M702pro",
              MegafonTablet: "MegaFon V9|\\bZTE V9\\b|Android.*\\bMT7A\\b",
              EbodaTablet: "E-Boda (Supreme|Impresspeed|Izzycomm|Essential)",
              AllViewTablet:
                "Allview.*(Viva|Alldro|City|Speed|All TV|Frenzy|Quasar|Shine|TX1|AX1|AX2)",
              ArchosTablet:
                "\\b(101G9|80G9|A101IT)\\b|Qilive 97R|Archos5|\\bARCHOS (70|79|80|90|97|101|FAMILYPAD|)(b|c|)(G10| Cobalt| TITANIUM(HD|)| Xenon| Neon|XSK| 2| XS 2| PLATINUM| CARBON|GAMEPAD)\\b",
              AinolTablet:
                "NOVO7|NOVO8|NOVO10|Novo7Aurora|Novo7Basic|NOVO7PALADIN|novo9-Spark",
              NokiaLumiaTablet: "Lumia 2520",
              SonyTablet:
                "Sony.*Tablet|Xperia Tablet|Sony Tablet S|SO-03E|SGPT12|SGPT13|SGPT114|SGPT121|SGPT122|SGPT123|SGPT111|SGPT112|SGPT113|SGPT131|SGPT132|SGPT133|SGPT211|SGPT212|SGPT213|SGP311|SGP312|SGP321|EBRD1101|EBRD1102|EBRD1201|SGP351|SGP341|SGP511|SGP512|SGP521|SGP541|SGP551|SGP621|SGP641|SGP612|SOT31|SGP771|SGP611|SGP612|SGP712",
              PhilipsTablet:
                "\\b(PI2010|PI3000|PI3100|PI3105|PI3110|PI3205|PI3210|PI3900|PI4010|PI7000|PI7100)\\b",
              CubeTablet:
                "Android.*(K8GT|U9GT|U10GT|U16GT|U17GT|U18GT|U19GT|U20GT|U23GT|U30GT)|CUBE U8GT",
              CobyTablet:
                "MID1042|MID1045|MID1125|MID1126|MID7012|MID7014|MID7015|MID7034|MID7035|MID7036|MID7042|MID7048|MID7127|MID8042|MID8048|MID8127|MID9042|MID9740|MID9742|MID7022|MID7010",
              MIDTablet:
                "M9701|M9000|M9100|M806|M1052|M806|T703|MID701|MID713|MID710|MID727|MID760|MID830|MID728|MID933|MID125|MID810|MID732|MID120|MID930|MID800|MID731|MID900|MID100|MID820|MID735|MID980|MID130|MID833|MID737|MID960|MID135|MID860|MID736|MID140|MID930|MID835|MID733|MID4X10",
              MSITablet:
                "MSI \\b(Primo 73K|Primo 73L|Primo 81L|Primo 77|Primo 93|Primo 75|Primo 76|Primo 73|Primo 81|Primo 91|Primo 90|Enjoy 71|Enjoy 7|Enjoy 10)\\b",
              SMiTTablet:
                "Android.*(\\bMID\\b|MID-560|MTV-T1200|MTV-PND531|MTV-P1101|MTV-PND530)",
              RockChipTablet:
                "Android.*(RK2818|RK2808A|RK2918|RK3066)|RK2738|RK2808A",
              FlyTablet: "IQ310|Fly Vision",
              bqTablet:
                "Android.*(bq)?.*\\b(Elcano|Curie|Edison|Maxwell|Kepler|Pascal|Tesla|Hypatia|Platon|Newton|Livingstone|Cervantes|Avant|Aquaris ([E|M]10|M8))\\b|Maxwell.*Lite|Maxwell.*Plus",
              HuaweiTablet:
                "MediaPad|MediaPad 7 Youth|IDEOS S7|S7-201c|S7-202u|S7-101|S7-103|S7-104|S7-105|S7-106|S7-201|S7-Slim|M2-A01L|BAH-L09|BAH-W09|AGS-L09|CMR-AL19",
              NecTablet: "\\bN-06D|\\bN-08D",
              PantechTablet: "Pantech.*P4100",
              BronchoTablet: "Broncho.*(N701|N708|N802|a710)",
              VersusTablet: "TOUCHPAD.*[78910]|\\bTOUCHTAB\\b",
              ZyncTablet: "z1000|Z99 2G|z930|z990|z909|Z919|z900",
              PositivoTablet: "TB07STA|TB10STA|TB07FTA|TB10FTA",
              NabiTablet: "Android.*\\bNabi",
              KoboTablet:
                "Kobo Touch|\\bK080\\b|\\bVox\\b Build|\\bArc\\b Build",
              DanewTablet:
                "DSlide.*\\b(700|701R|702|703R|704|802|970|971|972|973|974|1010|1012)\\b",
              TexetTablet:
                "NaviPad|TB-772A|TM-7045|TM-7055|TM-9750|TM-7016|TM-7024|TM-7026|TM-7041|TM-7043|TM-7047|TM-8041|TM-9741|TM-9747|TM-9748|TM-9751|TM-7022|TM-7021|TM-7020|TM-7011|TM-7010|TM-7023|TM-7025|TM-7037W|TM-7038W|TM-7027W|TM-9720|TM-9725|TM-9737W|TM-1020|TM-9738W|TM-9740|TM-9743W|TB-807A|TB-771A|TB-727A|TB-725A|TB-719A|TB-823A|TB-805A|TB-723A|TB-715A|TB-707A|TB-705A|TB-709A|TB-711A|TB-890HD|TB-880HD|TB-790HD|TB-780HD|TB-770HD|TB-721HD|TB-710HD|TB-434HD|TB-860HD|TB-840HD|TB-760HD|TB-750HD|TB-740HD|TB-730HD|TB-722HD|TB-720HD|TB-700HD|TB-500HD|TB-470HD|TB-431HD|TB-430HD|TB-506|TB-504|TB-446|TB-436|TB-416|TB-146SE|TB-126SE",
              PlaystationTablet: "Playstation.*(Portable|Vita)",
              TrekstorTablet:
                "ST10416-1|VT10416-1|ST70408-1|ST702xx-1|ST702xx-2|ST80208|ST97216|ST70104-2|VT10416-2|ST10216-2A|SurfTab",
              PyleAudioTablet:
                "\\b(PTBL10CEU|PTBL10C|PTBL72BC|PTBL72BCEU|PTBL7CEU|PTBL7C|PTBL92BC|PTBL92BCEU|PTBL9CEU|PTBL9CUK|PTBL9C)\\b",
              AdvanTablet:
                "Android.* \\b(E3A|T3X|T5C|T5B|T3E|T3C|T3B|T1J|T1F|T2A|T1H|T1i|E1C|T1-E|T5-A|T4|E1-B|T2Ci|T1-B|T1-D|O1-A|E1-A|T1-A|T3A|T4i)\\b ",
              DanyTechTablet:
                "Genius Tab G3|Genius Tab S2|Genius Tab Q3|Genius Tab G4|Genius Tab Q4|Genius Tab G-II|Genius TAB GII|Genius TAB GIII|Genius Tab S1",
              GalapadTablet: "Android [0-9.]+; [a-z-]+; \\bG1\\b",
              MicromaxTablet:
                "Funbook|Micromax.*\\b(P250|P560|P360|P362|P600|P300|P350|P500|P275)\\b",
              KarbonnTablet:
                "Android.*\\b(A39|A37|A34|ST8|ST10|ST7|Smart Tab3|Smart Tab2)\\b",
              AllFineTablet:
                "Fine7 Genius|Fine7 Shine|Fine7 Air|Fine8 Style|Fine9 More|Fine10 Joy|Fine11 Wide",
              PROSCANTablet:
                "\\b(PEM63|PLT1023G|PLT1041|PLT1044|PLT1044G|PLT1091|PLT4311|PLT4311PL|PLT4315|PLT7030|PLT7033|PLT7033D|PLT7035|PLT7035D|PLT7044K|PLT7045K|PLT7045KB|PLT7071KG|PLT7072|PLT7223G|PLT7225G|PLT7777G|PLT7810K|PLT7849G|PLT7851G|PLT7852G|PLT8015|PLT8031|PLT8034|PLT8036|PLT8080K|PLT8082|PLT8088|PLT8223G|PLT8234G|PLT8235G|PLT8816K|PLT9011|PLT9045K|PLT9233G|PLT9735|PLT9760G|PLT9770G)\\b",
              YONESTablet:
                "BQ1078|BC1003|BC1077|RK9702|BC9730|BC9001|IT9001|BC7008|BC7010|BC708|BC728|BC7012|BC7030|BC7027|BC7026",
              ChangJiaTablet:
                "TPC7102|TPC7103|TPC7105|TPC7106|TPC7107|TPC7201|TPC7203|TPC7205|TPC7210|TPC7708|TPC7709|TPC7712|TPC7110|TPC8101|TPC8103|TPC8105|TPC8106|TPC8203|TPC8205|TPC8503|TPC9106|TPC9701|TPC97101|TPC97103|TPC97105|TPC97106|TPC97111|TPC97113|TPC97203|TPC97603|TPC97809|TPC97205|TPC10101|TPC10103|TPC10106|TPC10111|TPC10203|TPC10205|TPC10503",
              GUTablet: "TX-A1301|TX-M9002|Q702|kf026",
              PointOfViewTablet:
                "TAB-P506|TAB-navi-7-3G-M|TAB-P517|TAB-P-527|TAB-P701|TAB-P703|TAB-P721|TAB-P731N|TAB-P741|TAB-P825|TAB-P905|TAB-P925|TAB-PR945|TAB-PL1015|TAB-P1025|TAB-PI1045|TAB-P1325|TAB-PROTAB[0-9]+|TAB-PROTAB25|TAB-PROTAB26|TAB-PROTAB27|TAB-PROTAB26XL|TAB-PROTAB2-IPS9|TAB-PROTAB30-IPS9|TAB-PROTAB25XXL|TAB-PROTAB26-IPS10|TAB-PROTAB30-IPS10",
              OvermaxTablet:
                "OV-(SteelCore|NewBase|Basecore|Baseone|Exellen|Quattor|EduTab|Solution|ACTION|BasicTab|TeddyTab|MagicTab|Stream|TB-08|TB-09)|Qualcore 1027",
              HCLTablet:
                "HCL.*Tablet|Connect-3G-2.0|Connect-2G-2.0|ME Tablet U1|ME Tablet U2|ME Tablet G1|ME Tablet X1|ME Tablet Y2|ME Tablet Sync",
              DPSTablet: "DPS Dream 9|DPS Dual 7",
              VistureTablet:
                "V97 HD|i75 3G|Visture V4( HD)?|Visture V5( HD)?|Visture V10",
              CrestaTablet:
                "CTP(-)?810|CTP(-)?818|CTP(-)?828|CTP(-)?838|CTP(-)?888|CTP(-)?978|CTP(-)?980|CTP(-)?987|CTP(-)?988|CTP(-)?989",
              MediatekTablet: "\\bMT8125|MT8389|MT8135|MT8377\\b",
              ConcordeTablet: "Concorde([ ]+)?Tab|ConCorde ReadMan",
              GoCleverTablet:
                "GOCLEVER TAB|A7GOCLEVER|M1042|M7841|M742|R1042BK|R1041|TAB A975|TAB A7842|TAB A741|TAB A741L|TAB M723G|TAB M721|TAB A1021|TAB I921|TAB R721|TAB I720|TAB T76|TAB R70|TAB R76.2|TAB R106|TAB R83.2|TAB M813G|TAB I721|GCTA722|TAB I70|TAB I71|TAB S73|TAB R73|TAB R74|TAB R93|TAB R75|TAB R76.1|TAB A73|TAB A93|TAB A93.2|TAB T72|TAB R83|TAB R974|TAB R973|TAB A101|TAB A103|TAB A104|TAB A104.2|R105BK|M713G|A972BK|TAB A971|TAB R974.2|TAB R104|TAB R83.3|TAB A1042",
              ModecomTablet:
                "FreeTAB 9000|FreeTAB 7.4|FreeTAB 7004|FreeTAB 7800|FreeTAB 2096|FreeTAB 7.5|FreeTAB 1014|FreeTAB 1001 |FreeTAB 8001|FreeTAB 9706|FreeTAB 9702|FreeTAB 7003|FreeTAB 7002|FreeTAB 1002|FreeTAB 7801|FreeTAB 1331|FreeTAB 1004|FreeTAB 8002|FreeTAB 8014|FreeTAB 9704|FreeTAB 1003",
              VoninoTablet:
                "\\b(Argus[ _]?S|Diamond[ _]?79HD|Emerald[ _]?78E|Luna[ _]?70C|Onyx[ _]?S|Onyx[ _]?Z|Orin[ _]?HD|Orin[ _]?S|Otis[ _]?S|SpeedStar[ _]?S|Magnet[ _]?M9|Primus[ _]?94[ _]?3G|Primus[ _]?94HD|Primus[ _]?QS|Android.*\\bQ8\\b|Sirius[ _]?EVO[ _]?QS|Sirius[ _]?QS|Spirit[ _]?S)\\b",
              ECSTablet: "V07OT2|TM105A|S10OT1|TR10CS1",
              StorexTablet: "eZee[_']?(Tab|Go)[0-9]+|TabLC7|Looney Tunes Tab",
              VodafoneTablet:
                "SmartTab([ ]+)?[0-9]+|SmartTabII10|SmartTabII7|VF-1497|VFD 1400",
              EssentielBTablet: "Smart[ ']?TAB[ ]+?[0-9]+|Family[ ']?TAB2",
              RossMoorTablet:
                "RM-790|RM-997|RMD-878G|RMD-974R|RMT-705A|RMT-701|RME-601|RMT-501|RMT-711",
              iMobileTablet: "i-mobile i-note",
              TolinoTablet: "tolino tab [0-9.]+|tolino shine",
              AudioSonicTablet: "\\bC-22Q|T7-QC|T-17B|T-17P\\b",
              AMPETablet: "Android.* A78 ",
              SkkTablet: "Android.* (SKYPAD|PHOENIX|CYCLOPS)",
              TecnoTablet: "TECNO P9|TECNO DP8D",
              JXDTablet:
                "Android.* \\b(F3000|A3300|JXD5000|JXD3000|JXD2000|JXD300B|JXD300|S5800|S7800|S602b|S5110b|S7300|S5300|S602|S603|S5100|S5110|S601|S7100a|P3000F|P3000s|P101|P200s|P1000m|P200m|P9100|P1000s|S6600b|S908|P1000|P300|S18|S6600|S9100)\\b",
              iJoyTablet:
                "Tablet (Spirit 7|Essentia|Galatea|Fusion|Onix 7|Landa|Titan|Scooby|Deox|Stella|Themis|Argon|Unique 7|Sygnus|Hexen|Finity 7|Cream|Cream X2|Jade|Neon 7|Neron 7|Kandy|Scape|Saphyr 7|Rebel|Biox|Rebel|Rebel 8GB|Myst|Draco 7|Myst|Tab7-004|Myst|Tadeo Jones|Tablet Boing|Arrow|Draco Dual Cam|Aurix|Mint|Amity|Revolution|Finity 9|Neon 9|T9w|Amity 4GB Dual Cam|Stone 4GB|Stone 8GB|Andromeda|Silken|X2|Andromeda II|Halley|Flame|Saphyr 9,7|Touch 8|Planet|Triton|Unique 10|Hexen 10|Memphis 4GB|Memphis 8GB|Onix 10)",
              FX2Tablet: "FX2 PAD7|FX2 PAD10",
              XoroTablet:
                "KidsPAD 701|PAD[ ]?712|PAD[ ]?714|PAD[ ]?716|PAD[ ]?717|PAD[ ]?718|PAD[ ]?720|PAD[ ]?721|PAD[ ]?722|PAD[ ]?790|PAD[ ]?792|PAD[ ]?900|PAD[ ]?9715D|PAD[ ]?9716DR|PAD[ ]?9718DR|PAD[ ]?9719QR|PAD[ ]?9720QR|TelePAD1030|Telepad1032|TelePAD730|TelePAD731|TelePAD732|TelePAD735Q|TelePAD830|TelePAD9730|TelePAD795|MegaPAD 1331|MegaPAD 1851|MegaPAD 2151",
              ViewsonicTablet:
                "ViewPad 10pi|ViewPad 10e|ViewPad 10s|ViewPad E72|ViewPad7|ViewPad E100|ViewPad 7e|ViewSonic VB733|VB100a",
              VerizonTablet: "QTAQZ3|QTAIR7|QTAQTZ3|QTASUN1|QTASUN2|QTAXIA1",
              OdysTablet:
                "LOOX|XENO10|ODYS[ -](Space|EVO|Xpress|NOON)|\\bXELIO\\b|Xelio10Pro|XELIO7PHONETAB|XELIO10EXTREME|XELIOPT2|NEO_QUAD10",
              CaptivaTablet: "CAPTIVA PAD",
              IconbitTablet:
                "NetTAB|NT-3702|NT-3702S|NT-3702S|NT-3603P|NT-3603P|NT-0704S|NT-0704S|NT-3805C|NT-3805C|NT-0806C|NT-0806C|NT-0909T|NT-0909T|NT-0907S|NT-0907S|NT-0902S|NT-0902S",
              TeclastTablet:
                "T98 4G|\\bP80\\b|\\bX90HD\\b|X98 Air|X98 Air 3G|\\bX89\\b|P80 3G|\\bX80h\\b|P98 Air|\\bX89HD\\b|P98 3G|\\bP90HD\\b|P89 3G|X98 3G|\\bP70h\\b|P79HD 3G|G18d 3G|\\bP79HD\\b|\\bP89s\\b|\\bA88\\b|\\bP10HD\\b|\\bP19HD\\b|G18 3G|\\bP78HD\\b|\\bA78\\b|\\bP75\\b|G17s 3G|G17h 3G|\\bP85t\\b|\\bP90\\b|\\bP11\\b|\\bP98t\\b|\\bP98HD\\b|\\bG18d\\b|\\bP85s\\b|\\bP11HD\\b|\\bP88s\\b|\\bA80HD\\b|\\bA80se\\b|\\bA10h\\b|\\bP89\\b|\\bP78s\\b|\\bG18\\b|\\bP85\\b|\\bA70h\\b|\\bA70\\b|\\bG17\\b|\\bP18\\b|\\bA80s\\b|\\bA11s\\b|\\bP88HD\\b|\\bA80h\\b|\\bP76s\\b|\\bP76h\\b|\\bP98\\b|\\bA10HD\\b|\\bP78\\b|\\bP88\\b|\\bA11\\b|\\bA10t\\b|\\bP76a\\b|\\bP76t\\b|\\bP76e\\b|\\bP85HD\\b|\\bP85a\\b|\\bP86\\b|\\bP75HD\\b|\\bP76v\\b|\\bA12\\b|\\bP75a\\b|\\bA15\\b|\\bP76Ti\\b|\\bP81HD\\b|\\bA10\\b|\\bT760VE\\b|\\bT720HD\\b|\\bP76\\b|\\bP73\\b|\\bP71\\b|\\bP72\\b|\\bT720SE\\b|\\bC520Ti\\b|\\bT760\\b|\\bT720VE\\b|T720-3GE|T720-WiFi",
              OndaTablet:
                "\\b(V975i|Vi30|VX530|V701|Vi60|V701s|Vi50|V801s|V719|Vx610w|VX610W|V819i|Vi10|VX580W|Vi10|V711s|V813|V811|V820w|V820|Vi20|V711|VI30W|V712|V891w|V972|V819w|V820w|Vi60|V820w|V711|V813s|V801|V819|V975s|V801|V819|V819|V818|V811|V712|V975m|V101w|V961w|V812|V818|V971|V971s|V919|V989|V116w|V102w|V973|Vi40)\\b[\\s]+|V10 \\b4G\\b",
              JaytechTablet: "TPC-PA762",
              BlaupunktTablet: "Endeavour 800NG|Endeavour 1010",
              DigmaTablet:
                "\\b(iDx10|iDx9|iDx8|iDx7|iDxD7|iDxD8|iDsQ8|iDsQ7|iDsQ8|iDsD10|iDnD7|3TS804H|iDsQ11|iDj7|iDs10)\\b",
              EvolioTablet:
                "ARIA_Mini_wifi|Aria[ _]Mini|Evolio X10|Evolio X7|Evolio X8|\\bEvotab\\b|\\bNeura\\b",
              LavaTablet: "QPAD E704|\\bIvoryS\\b|E-TAB IVORY|\\bE-TAB\\b",
              AocTablet:
                "MW0811|MW0812|MW0922|MTK8382|MW1031|MW0831|MW0821|MW0931|MW0712",
              MpmanTablet:
                "MP11 OCTA|MP10 OCTA|MPQC1114|MPQC1004|MPQC994|MPQC974|MPQC973|MPQC804|MPQC784|MPQC780|\\bMPG7\\b|MPDCG75|MPDCG71|MPDC1006|MP101DC|MPDC9000|MPDC905|MPDC706HD|MPDC706|MPDC705|MPDC110|MPDC100|MPDC99|MPDC97|MPDC88|MPDC8|MPDC77|MP709|MID701|MID711|MID170|MPDC703|MPQC1010",
              CelkonTablet:
                "CT695|CT888|CT[\\s]?910|CT7 Tab|CT9 Tab|CT3 Tab|CT2 Tab|CT1 Tab|C820|C720|\\bCT-1\\b",
              WolderTablet:
                "miTab \\b(DIAMOND|SPACE|BROOKLYN|NEO|FLY|MANHATTAN|FUNK|EVOLUTION|SKY|GOCAR|IRON|GENIUS|POP|MINT|EPSILON|BROADWAY|JUMP|HOP|LEGEND|NEW AGE|LINE|ADVANCE|FEEL|FOLLOW|LIKE|LINK|LIVE|THINK|FREEDOM|CHICAGO|CLEVELAND|BALTIMORE-GH|IOWA|BOSTON|SEATTLE|PHOENIX|DALLAS|IN 101|MasterChef)\\b",
              MediacomTablet:
                "M-MPI10C3G|M-SP10EG|M-SP10EGP|M-SP10HXAH|M-SP7HXAH|M-SP10HXBH|M-SP8HXAH|M-SP8MXA",
              MiTablet: "\\bMI PAD\\b|\\bHM NOTE 1W\\b",
              NibiruTablet: "Nibiru M1|Nibiru Jupiter One",
              NexoTablet:
                "NEXO NOVA|NEXO 10|NEXO AVIO|NEXO FREE|NEXO GO|NEXO EVO|NEXO 3G|NEXO SMART|NEXO KIDDO|NEXO MOBI",
              LeaderTablet:
                "TBLT10Q|TBLT10I|TBL-10WDKB|TBL-10WDKBO2013|TBL-W230V2|TBL-W450|TBL-W500|SV572|TBLT7I|TBA-AC7-8G|TBLT79|TBL-8W16|TBL-10W32|TBL-10WKB|TBL-W100",
              UbislateTablet: "UbiSlate[\\s]?7C",
              PocketBookTablet: "Pocketbook",
              KocasoTablet: "\\b(TB-1207)\\b",
              HisenseTablet: "\\b(F5281|E2371)\\b",
              Hudl: "Hudl HT7S3|Hudl 2",
              TelstraTablet: "T-Hub2",
              GenericTablet:
                "Android.*\\b97D\\b|Tablet(?!.*PC)|BNTV250A|MID-WCDMA|LogicPD Zoom2|\\bA7EB\\b|CatNova8|A1_07|CT704|CT1002|\\bM721\\b|rk30sdk|\\bEVOTAB\\b|M758A|ET904|ALUMIUM10|Smartfren Tab|Endeavour 1010|Tablet-PC-4|Tagi Tab|\\bM6pro\\b|CT1020W|arc 10HD|\\bTP750\\b|\\bQTAQZ3\\b|WVT101|TM1088|KT107",
            }),
            (B.DEVICE_ID_KEY = "deviceID"),
            (S = B))
          ) || S
        );
        P._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/GameUtils.ts", ["cc"], function (t) {
  "use strict";
  var e, n;
  return {
    setters: [
      function (t) {
        (e = t.cclegacy), (n = t._decorator);
      },
    ],
    execute: function () {
      var c;
      e._RF.push({}, "bc747wBd6VFlYlC0VM3Uhk3", "GameUtils", void 0);
      var r = n.ccclass;
      t(
        "default",
        r("GameUtils")(
          (c = (function () {
            function t() {}
            return (
              (t.getRandomInt = function (t, e) {
                return (
                  (t = Math.ceil(t)),
                  (e = Math.floor(e)),
                  Math.floor(Math.random() * (e - t) + t)
                );
              }),
              (t.isTablet = function () {
                return !1;
              }),
              t
            );
          })())
        ) || c
      );
      e._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/GetSharedResource.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var r, t, i, n, o, c, a;
    return {
      setters: [
        function (e) {
          (r = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy), (c = e._decorator), (a = e.Component);
        },
      ],
      execute: function () {
        var u, s, l, p, y, f, d;
        o._RF.push({}, "d7ed96w6vJCipicX9Gy+RRv", "GetSharedResource", void 0);
        var h,
          R = c.ccclass,
          S = c.property;
        !(function (e) {
          (e[(e.SPRITE = 0)] = "SPRITE"),
            (e[(e.SKELETON = 1)] = "SKELETON"),
            (e[(e.FONT = 2)] = "FONT");
        })(h || (h = {}));
        e(
          "GetSharedResource",
          ((u = R("GetSharedResource")),
          (s = S(String)),
          (l = S(Number)),
          u(
            ((f = r(
              (y = (function (e) {
                function r() {
                  for (
                    var r, t = arguments.length, o = new Array(t), c = 0;
                    c < t;
                    c++
                  )
                    o[c] = arguments[c];
                  return (
                    (r = e.call.apply(e, [this].concat(o)) || this),
                    i(r, "key", f, n(r)),
                    i(r, "type", d, n(r)),
                    r
                  );
                }
                return t(r, e), r;
              })(a)).prototype,
              "key",
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
            (d = r(y.prototype, "type", [l], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (p = y))
          ) || p)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/HttpManager.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./PersistManager.ts",
    "./State.ts",
    "./GameConfigManager.ts",
    "./Config.ts",
  ],
  function (e) {
    "use strict";
    var t, n, o, s, a, r, i;
    return {
      setters: [
        function (e) {
          t = e.extends;
        },
        function (e) {
          (n = e.cclegacy), (o = e.log);
        },
        function (e) {
          s = e.PersistManager;
        },
        function (e) {
          a = e.state;
        },
        function (e) {
          r = e.GameConfigManager;
        },
        function (e) {
          i = e.config;
        },
      ],
      execute: function () {
        n._RF.push({}, "647a043p3JOr41LNxmJcyPx", "HttpManager", void 0);
        var u = e("HttpCommand", {
            BET_RANK_URL_TAI_XIU: "?command=fetchTXUGameBoard",
            BET_RANK_TOP_URL:
              "?command=fetchTopSlotMachine&gameId=%gameid%&limit=6&skip=%skip%",
            JACKPOT_RANK_TOP_URL:
              "?command=fetchSlotJackpotHistory&gameId=%gameid%&limit=6&skip=%skip%",
            BET_HISTORY_URL:
              "?command=fetchSlotMachineHistory&assetId=1&limit=6&skip=%skip%&gameId=%gameid%",
            BET_RANK_URL_CAOTHAP: "?command=fetchSpinBoard&limit=6&skip=%skip%",
            BET_HISTORY_CAOTHAP:
              "?command=fetchUpdownBettingHistory&limit=6&skip=%skip%",
            REFRESH_TOKEN_URL:
              "?command=refreshToken&refreshToken=%refreshToken%",
          }),
          c = e(
            "HttpManager",
            (function () {
              function e() {}
              e.getInstance = function () {
                return (
                  this._instance || (this._instance = new e()), this._instance
                );
              };
              var n = e.prototype;
              return (
                (n.send = function (e) {
                  var t = this,
                    n = e.url,
                    r = e.data,
                    i = e.method,
                    u = e.onCompleted,
                    c = e.onError,
                    d = e.withResend,
                    h = e.useLoading,
                    T = e.sendAuthorization,
                    f = e.showNoti;
                  return (
                    o(i, n, r),
                    void 0 === d && (d = !0),
                    void 0 === h && (h = !0),
                    void 0 === T && (T = !0),
                    void 0 === f && (f = !0),
                    new Promise(function (e, l) {
                      var m = function () {
                        var t;
                        null == (t = s.getInstance()) || t.hideLoading(), e("");
                      };
                      !(function l() {
                        var p;
                        h && (null == (p = s.getInstance()) || p.showLoading());
                        var g = new XMLHttpRequest();
                        (g.onreadystatechange = function () {
                          if (
                            4 == g.readyState &&
                            "" != g.responseText &&
                            null != g.responseText
                          )
                            try {
                              var n = g.responseText;
                              o(
                                "send" +
                                  i +
                                  n +
                                  "," +
                                  g.status +
                                  "," +
                                  g.readyState
                              );
                              try {
                                if (500 == JSON.parse(n).status)
                                  return void (d && t.refreshToken(l));
                              } catch (e) {}
                              g.status >= 200 && g.status < 400
                                ? ((a = n),
                                  null == (r = s.getInstance()) ||
                                    r.hideLoading(),
                                  null == u || u(a),
                                  e(a))
                                : (m(),
                                  f &&
                                    s.showNoti(
                                      "Có lỗi xảy ra khi kết nối. Bạn vui lòng thử lại!"
                                    ));
                            } catch (e) {
                              null == c || c(g.responseText), m();
                            }
                          var a, r;
                        }),
                          (g.onerror = m),
                          (g.ontimeout = m),
                          (g.onabort = m),
                          g.open(i, n, !0),
                          T &&
                            a.serverAccessToken &&
                            g.setRequestHeader(
                              "Authorization",
                              a.serverAccessToken
                            ),
                          "POST" === i
                            ? (g.setRequestHeader(
                                "Content-Type",
                                "application/json; charset=utf-8"
                              ),
                              g.send(r || ""))
                            : g.send();
                      })();
                    })
                  );
                }),
                (n.sendGET = function (e) {
                  return this.send(t({}, e, { method: "GET" }));
                }),
                (n.sendPOST = function (e) {
                  return this.send(t({}, e, { method: "POST" }));
                }),
                (n.sendPOSTWithoutResend = function (e) {
                  return this.send(
                    t({}, e, { method: "POST", withResend: !1 })
                  );
                }),
                (n.refreshToken = function (e) {
                  var t =
                    r.IDdomainURL +
                    u.REFRESH_TOKEN_URL.replace(
                      "%refreshToken%",
                      a.serverRefreshToken
                    );
                  return this.sendGET({
                    url: t,
                    useLoading: !1,
                    showNoti: !1,
                    onCompleted: function (t) {
                      var n = JSON.parse(t),
                        s = n.status;
                      if (0 === s) {
                        var r = n.data.accessToken;
                        (a.serverAccessToken = r),
                          null == e || e(),
                          o("send refresh token succeed:", s);
                      } else o("send refresh token fail:", s);
                    },
                  });
                }),
                (n.getConvertBauCuaTokenURL = function () {
                  return i.sport_domain + "get-token";
                }),
                (n.refreshBauCuaLivestreamToken = function (e) {
                  var t = this.getConvertBauCuaTokenURL();
                  return this.sendGET({
                    url: t,
                    useLoading: !1,
                    showNoti: !1,
                    onCompleted: function (t) {
                      var n = JSON.parse(t);
                      if (0 === n.status) {
                        var o = n.data.accessToken;
                        (a.baucuaLiveStreamToken = o), null == e || e(t);
                      }
                    },
                  });
                }),
                (n.getOTPURL = function () {
                  var e = r.GetSuffix() + "getOTPCode";
                  return (e += r.addURLParam("type")), r.CTTdomainURL + e;
                }),
                (n.sendGetOTP = function (e) {
                  var t = e.code,
                    n = e.ACTIVATE,
                    o = e.FORGOT_PW,
                    s = e.onCompleted,
                    a = e.additionalInfo,
                    r = this.getOTPURL();
                  return (
                    (r = r.replace("%type%", "" + t)),
                    t == n
                      ? ((r += "&phone="), (r += a || ""))
                      : t == o && ((r += "&username="), (r += a || "")),
                    this.sendGET({
                      url: r,
                      useLoading: !1,
                      showNoti: !1,
                      onCompleted: s,
                    })
                  );
                }),
                e
              );
            })()
          );
        c._instance = void 0;
        e("httpManager", c.getInstance());
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/InfoPopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./StringUtils.ts",
    "./PersistManager.ts",
  ],
  function (t) {
    "use strict";
    var e, r, n, i, a, o, l, s, p, u, c;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (r = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy), (o = t._decorator), (l = t.Sprite), (s = t.Label);
        },
        function (t) {
          p = t.CommonPopup;
        },
        function (t) {
          u = t.StringUtils;
        },
        function (t) {
          c = t.PersistManager;
        },
      ],
      execute: function () {
        var f, b, m, _, g, y, h, v, P;
        a._RF.push({}, "0bc647p/q1GkrkxKXYtKRcX", "InfoPopup", void 0);
        var I = o.ccclass,
          d = o.property;
        t(
          "InfoPopup",
          ((f = I("InfoPopup")),
          (b = d(l)),
          (m = d(s)),
          (_ = d(s)),
          f(
            ((h = e(
              (y = (function (t) {
                function e() {
                  for (
                    var e, r = arguments.length, a = new Array(r), o = 0;
                    o < r;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "spr_avatar", h, i(e)),
                    n(e, "lbl_name", v, i(e)),
                    n(e, "lbl_money", P, i(e)),
                    e
                  );
                }
                return (
                  r(e, t),
                  (e.prototype.setInfo = function (t, e, r) {
                    var n = this;
                    c.getInstance().getAvatar(t, function (t) {
                      n.spr_avatar && (n.spr_avatar.spriteFrame = t);
                    }),
                      this.lbl_name && (this.lbl_name.string = e),
                      this.lbl_money &&
                        (this.lbl_money.string = u.formatNumber(r));
                  }),
                  e
                );
              })(p)).prototype,
              "spr_avatar",
              [b],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (v = e(y.prototype, "lbl_name", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (P = e(y.prototype, "lbl_money", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (g = y))
          ) || g)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/InvitationPlayerView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (e) {
    "use strict";
    var i, t, n, l, r, o, a, s, u, c;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (l = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (o = e._decorator),
            (a = e.Label),
            (s = e.Toggle),
            (u = e.Component);
        },
        function (e) {
          c = e.StringUtils;
        },
      ],
      execute: function () {
        var p, g, y, b, h, f, v, d, m;
        r._RF.push(
          {},
          "8089eKSXttMjrsSlRNQCmVl",
          "InvitationPlayerView",
          void 0
        );
        var _ = o.ccclass,
          w = o.property;
        e(
          "InvitationPlayerView",
          ((p = _("InvitationPlayerView")),
          (g = w(a)),
          (y = w(a)),
          (b = w(s)),
          p(
            ((v = i(
              (f = (function (e) {
                function i() {
                  for (
                    var i, t = arguments.length, r = new Array(t), o = 0;
                    o < t;
                    o++
                  )
                    r[o] = arguments[o];
                  return (
                    (i = e.call.apply(e, [this].concat(r)) || this),
                    n(i, "lbl_displayName", v, l(i)),
                    n(i, "lbl_money", d, l(i)),
                    n(i, "toggle_invite", m, l(i)),
                    (i.uid = ""),
                    i
                  );
                }
                t(i, e);
                var r = i.prototype;
                return (
                  (r.isSelected = function () {
                    var e;
                    return (
                      this.node.active &&
                      (null == (e = this.toggle_invite) ? void 0 : e.isChecked)
                    );
                  }),
                  (r.getName = function () {
                    return this.uid;
                  }),
                  (r.show = function (e, i, t) {
                    (this.uid = e),
                      this.toggle_invite && (this.toggle_invite.isChecked = !0),
                      this.lbl_money &&
                        (this.lbl_money.string = c.formatMoneyNumber(t)),
                      this.lbl_displayName && (this.lbl_displayName.string = i);
                  }),
                  i
                );
              })(u)).prototype,
              "lbl_displayName",
              [g],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (d = i(f.prototype, "lbl_money", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = i(f.prototype, "toggle_invite", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (h = f))
          ) || h)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/J_ScrollView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, n, r, i, o, l, a, c, s, u, f, h, p, d, v;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (l = e._decorator),
            (a = e.Node),
            (c = e.Vec2),
            (s = e.Vec3),
            (u = e.UITransform),
            (f = e.Rect),
            (h = e.v3),
            (p = e.rect),
            (d = e.UIRenderer),
            (v = e.Component);
        },
      ],
      execute: function () {
        var w, g, y, b, m, x, S, R, C, _, z;
        o._RF.push({}, "cdd63C35H5JypkK6hRI2a++", "J_ScrollView", void 0);
        var H = l.ccclass,
          V = l.property;
        e(
          "J_ScrollView",
          ((w = H("J_ScrollView")),
          (g = V(a)),
          (y = V(a)),
          (b = V(c)),
          (m = V(c)),
          w(
            ((R = t(
              (S = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), l = 0;
                    l < n;
                    l++
                  )
                    o[l] = arguments[l];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    r(t, "view", R, i(t)),
                    r(t, "content", C, i(t)),
                    r(t, "offsetXY", _, i(t)),
                    r(t, "offsetWH", z, i(t)),
                    t
                  );
                }
                n(t, e);
                var o = t.prototype;
                return (
                  (o.update = function (e) {
                    var t,
                      n,
                      r,
                      i,
                      o,
                      l = new s(),
                      a =
                        (null == (t = this.view) ||
                        null == (n = t.getComponent(u))
                          ? void 0
                          : n.getBoundingBox()) || new f();
                    null == (r = this.view) ||
                      null == (i = r.parent) ||
                      null == (o = i.getComponent(u)) ||
                      o.convertToWorldSpaceAR(h(a.x, a.y, 0), l);
                    var c =
                      this.view &&
                      p(
                        l.x,
                        l.y,
                        a.width * this.view.worldScale.x,
                        a.height * this.view.worldScale.y
                      );
                    if (
                      (null == c ||
                        c.set(
                          c.x + this.offsetXY.x,
                          c.y + this.offsetXY.y,
                          c.width + this.offsetWH.x,
                          c.height + this.offsetWH.y
                        ),
                      this.content)
                    )
                      for (var d = 0; d < this.content.children.length; d++) {
                        var v = this.content.children[d];
                        if (v && v.active) {
                          var w,
                            g,
                            y,
                            b =
                              (null == (w = v.getComponent(u))
                                ? void 0
                                : w.getBoundingBox()) || new f();
                          null == (g = v.parent) ||
                            null == (y = g.getComponent(u)) ||
                            y.convertToWorldSpaceAR(h(b.x, b.y, 0), l);
                          var m = p(
                            l.x,
                            l.y,
                            b.width * v.worldScale.x,
                            b.height * v.worldScale.y
                          );
                          null != c && c.intersects(m)
                            ? this.setRenderEnable(v, !0)
                            : this.setRenderEnable(v, !1);
                        }
                      }
                  }),
                  (o.setRenderEnable = function (e, t) {
                    var n = e.getComponentsInChildren(d);
                    if (n)
                      for (var r = 0; r < n.length; r++) {
                        var i = n[r];
                        i && i.enabled != t && (i.enabled = t);
                      }
                  }),
                  t
                );
              })(v)).prototype,
              "view",
              [g],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (C = t(S.prototype, "content", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = t(S.prototype, "offsetXY", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new c(0, 0);
              },
            })),
            (z = t(S.prototype, "offsetWH", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new c(0, 0);
              },
            })),
            (x = S))
          ) || x)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/JackpotItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var e, l, n, r, o, i, a, c, s, u, p;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (l = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (i = t._decorator),
            (a = t.Label),
            (c = t.tween),
            (s = t.Vec3),
            (u = t.Component);
        },
        function (t) {
          p = t.StringUtils;
        },
      ],
      execute: function () {
        var h, _, f, b, w;
        o._RF.push({}, "fa588p8ahdKv7dF2tURwy9k", "JackpotItemView", void 0);
        var j = i.ccclass,
          k = i.property;
        t(
          "JackpotItemView",
          ((h = j("JackpotItemView")),
          (_ = k(a)),
          h(
            ((w = e(
              (b = (function (t) {
                function e() {
                  for (
                    var e, l = arguments.length, o = new Array(l), i = 0;
                    i < l;
                    i++
                  )
                    o[i] = arguments[i];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "lbl_jackpot", w, r(e)),
                    (e.current = 0),
                    (e.jp_tween = void 0),
                    (e.scale_tween = void 0),
                    e
                  );
                }
                l(e, t);
                var o = e.prototype;
                return (
                  (o.getCurrent = function () {
                    return this.current;
                  }),
                  (o.updateAmount = function (t, e, l) {
                    var n,
                      r = this;
                    if (
                      (void 0 === e && (e = 2),
                      void 0 === l && (l = !1),
                      null != this.jp_tween &&
                        null != this.jp_tween &&
                        this.jp_tween.stop(),
                      e > 0)
                    ) {
                      var o = { a: this.current };
                      (this.jp_tween = c(o)
                        .to(
                          e,
                          { a: t },
                          {
                            progress: function (t, e, l, n) {
                              return (
                                null != r.lbl_jackpot &&
                                  null != r.lbl_jackpot &&
                                  (r.lbl_jackpot.string = p.formatNumber(
                                    Math.floor(l)
                                  )),
                                t + (e - t) * n
                              );
                            },
                          }
                        )
                        .call(function () {
                          null != r.lbl_jackpot &&
                            null != r.lbl_jackpot &&
                            (r.lbl_jackpot.string = p.formatNumber(
                              Math.floor(t)
                            ));
                        })),
                        this.jp_tween.start();
                    } else
                      null != this.lbl_jackpot &&
                        null != this.lbl_jackpot &&
                        (this.lbl_jackpot.string = p.formatNumber(
                          Math.floor(t)
                        ));
                    l &&
                      (null != this.scale_tween && this.scale_tween.stop(),
                      (this.scale_tween = c(
                        null == (n = this.lbl_jackpot) ? void 0 : n.node
                      ).sequence(
                        c().to(0.1, { scale: new s(1.1, 1.1, 1.1) }),
                        c().delay(0.05),
                        c().to(0.1, { scale: s.ONE })
                      )),
                      this.scale_tween.start());
                    this.current = t;
                  }),
                  e
                );
              })(u)).prototype,
              "lbl_jackpot",
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
            (f = b))
          ) || f)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/JumpingCmp.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, i, r, n, o, u, a, p, s;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (u = e._decorator),
            (a = e.tween),
            (p = e.Vec3),
            (s = e.Component);
        },
      ],
      execute: function () {
        var c, y, m, _, b, l, v, f, h;
        o._RF.push({}, "8fae1ext/pMs4grwenau/vz", "JumpingCmp", void 0);
        var g = u.ccclass,
          z = u.property;
        e(
          "JumpingCmp",
          ((c = g("JumpingCmp")),
          (y = z(Number)),
          (m = z(Number)),
          (_ = z(Number)),
          c(
            ((v = t(
              (l = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, o = new Array(i), u = 0;
                    u < i;
                    u++
                  )
                    o[u] = arguments[u];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    r(t, "move_by_x", v, n(t)),
                    r(t, "move_by_y", f, n(t)),
                    r(t, "move_by_z", h, n(t)),
                    t
                  );
                }
                return (
                  i(t, e),
                  (t.prototype.onLoad = function () {
                    a(this.node)
                      .repeatForever(
                        a(this.node)
                          .by(0.25, {
                            position: new p(
                              this.move_by_x,
                              this.move_by_y,
                              this.move_by_z
                            ),
                          })
                          .by(0.25, {
                            position: new p(
                              -1 * this.move_by_x,
                              -1 * this.move_by_y,
                              -1 * this.move_by_z
                            ),
                          })
                      )
                      .start();
                  }),
                  t
                );
              })(s)).prototype,
              "move_by_x",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return 0;
                },
              }
            )),
            (f = t(l.prototype, "move_by_y", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (h = t(l.prototype, "move_by_z", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (b = l))
          ) || b)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LineCmp.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (i) {
    "use strict";
    var t, r, n, o, e, a, s, l, c, p;
    return {
      setters: [
        function (i) {
          (t = i.applyDecoratedDescriptor),
            (r = i.inheritsLoose),
            (n = i.initializerDefineProperty),
            (o = i.assertThisInitialized);
        },
        function (i) {
          (e = i.cclegacy),
            (a = i._decorator),
            (s = i.Graphics),
            (l = i.Color),
            (c = i.UIOpacity),
            (p = i.Component);
        },
      ],
      execute: function () {
        var d, h, u, g, w;
        e._RF.push({}, "36635gn5CNJ4bktqPeWLUiS", "LineCmp", void 0);
        var f = a.ccclass,
          v = a.property;
        i(
          "default",
          ((d = f("LineCmp")),
          (h = v(s)),
          d(
            ((w = t(
              (g = (function (i) {
                function t() {
                  for (
                    var t, r = arguments.length, e = new Array(r), a = 0;
                    a < r;
                    a++
                  )
                    e[a] = arguments[a];
                  return (
                    (t = i.call.apply(i, [this].concat(e)) || this),
                    n(t, "drawing", w, o(t)),
                    (t.root_parent = null),
                    (t.points = []),
                    (t.width = 0),
                    (t.color = l.WHITE),
                    t
                  );
                }
                r(t, i);
                var e = t.prototype;
                return (
                  (e.draw = function (i, t, r, n, o) {
                    var e,
                      a = this;
                    void 0 === n && (n = null),
                      void 0 === o && (o = !0),
                      (this.points = i),
                      (this.width = t),
                      (this.color = r),
                      (this.root_parent = n),
                      o && (null == (e = this.drawing) || e.clear()),
                      this.drawing && (this.drawing.lineWidth = t),
                      this.drawing && (this.drawing.strokeColor = r),
                      i.forEach(function (t, r) {
                        if (r < i.length - 1) {
                          a.drawing && a.drawing.moveTo(t.x, t.y);
                          var n = i[r + 1];
                          a.drawing && n && a.drawing.lineTo(n.x, n.y);
                        }
                      }),
                      this.drawing && this.drawing.stroke(),
                      this.drawing && this.drawing.fill();
                  }),
                  (e.clear = function () {
                    this.drawing && this.drawing.clear();
                  }),
                  (e.update = function (i) {
                    if (this.root_parent) {
                      var t,
                        r = this.node.getComponent(c),
                        n =
                          (null == (t = this.root_parent.getComponent(c))
                            ? void 0
                            : t.opacity) || 0;
                      r && (r.opacity = n < 255 ? 0 : n);
                    }
                  }),
                  t
                );
              })(p)).prototype,
              "drawing",
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
            (u = g))
          ) || u)
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LineDrawer.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var r, i, n, e, o, a, c, s, p, l;
    return {
      setters: [
        function (t) {
          (r = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (a = t._decorator),
            (c = t.Line),
            (s = t.Color),
            (p = t.UIOpacity),
            (l = t.Component);
        },
      ],
      execute: function () {
        var u, h, d, f, w;
        o._RF.push({}, "b0848wkFcROC7Dn1DzHNqY/", "LineDrawer", void 0);
        var y = a.ccclass,
          g = a.property;
        t(
          "default",
          ((u = y("LineDrawer")),
          (h = g(c)),
          u(
            ((w = r(
              (f = (function (t) {
                function r() {
                  for (
                    var r, i = arguments.length, o = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (r = t.call.apply(t, [this].concat(o)) || this),
                    n(r, "drawing", w, e(r)),
                    (r.root_parent = null),
                    (r.points = []),
                    (r.width = 0),
                    (r.color = s.WHITE),
                    r
                  );
                }
                i(r, t);
                var o = r.prototype;
                return (
                  (o.draw = function (t, r, i, n, e) {
                    void 0 === n && (n = null),
                      (this.points = t),
                      (this.width = r),
                      (this.color = i),
                      (this.root_parent = n),
                      this.drawing && (this.drawing.positions = t);
                  }),
                  (o.clear = function () {}),
                  (o.update = function (t) {
                    if (this.root_parent) {
                      var r = this.node.getComponent(p),
                        i = this.root_parent.getComponent(p);
                      r && i && (r.opacity = i.opacity < 255 ? 0 : i.opacity);
                    }
                  }),
                  r
                );
              })(l)).prototype,
              "drawing",
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
            (d = f))
          ) || d)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LoadingView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var i, t, n, a, o, s, l, r, c, d, u, g, h, _, p, m, f, b, v;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (a = e.assertThisInitialized),
            (o = e.asyncToGenerator),
            (s = e.regeneratorRuntime);
        },
        function (e) {
          (l = e.cclegacy),
            (r = e._decorator),
            (c = e.Node),
            (d = e.Label),
            (u = e.UIOpacity),
            (g = e.Sprite),
            (h = e.sys),
            (_ = e.assetManager),
            (p = e.SpriteFrame),
            (m = e.log),
            (f = e.Tween),
            (b = e.tween),
            (v = e.Component);
        },
      ],
      execute: function () {
        var w, y, k, S, A, L, q, z, T, B, D, F, V, x, C;
        l._RF.push({}, "4d0305+yoxNlLG7H9FvjL4Q", "LoadingView", void 0);
        var I = r.ccclass,
          P = r.property;
        e(
          "default",
          ((w = I("LoadingView")),
          (y = P(c)),
          (k = P(c)),
          (S = P(d)),
          (A = P(u)),
          (L = P(c)),
          (q = P(g)),
          w(
            ((B = i(
              (T = (function (e) {
                function i() {
                  for (
                    var i, t = arguments.length, o = new Array(t), s = 0;
                    s < t;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (i = e.call.apply(e, [this].concat(o)) || this),
                    n(i, "black_screen", B, a(i)),
                    n(i, "loading_node", D, a(i)),
                    n(i, "lbl_message", F, a(i)),
                    n(i, "loadingAnim", V, a(i)),
                    n(i, "skel_loading_squidgame", x, a(i)),
                    n(i, "staticSprite", C, a(i)),
                    (i.fade_tween = null),
                    (i.black_screen_tween = null),
                    i
                  );
                }
                t(i, e);
                var l = i.prototype;
                return (
                  (l.onLoad = function () {
                    if (!h.isBrowser) {
                      var e,
                        i,
                        t =
                          null == (e = this.loading_node)
                            ? void 0
                            : e.position.clone();
                      (t.y += 0),
                        null == (i = this.loading_node) || i.setPosition(t);
                    }
                  }),
                  (l.IsShowing = function () {
                    var e;
                    return !(null == (e = this.loading_node) || !e.active);
                  }),
                  (l.loadStaticSprite = function (e, i) {
                    var t = this;
                    _.loadRemote(e, function (e, n) {
                      try {
                        if (null == e) {
                          var a = p.createWithImage(n);
                          t.staticSprite && (t.staticSprite.spriteFrame = a);
                        } else m("StaticLoadingView::preload error: " + e.message);
                      } catch (e) {
                        m("StaticLoadingView::preload error");
                      }
                      null == i || i();
                    });
                  }),
                  (l.show = function (e) {
                    var i,
                      t = this;
                    void 0 === e && (e = ""),
                      "" != e
                        ? (this.lbl_message &&
                            (this.lbl_message.node.active = !0),
                          this.lbl_message && (this.lbl_message.string = e),
                          this.loading_node && (this.loading_node.active = !1))
                        : (this.lbl_message &&
                            (this.lbl_message.node.active = !1),
                          this.loading_node && (this.loading_node.active = !0));
                    var n =
                      null == (i = this.black_screen)
                        ? void 0
                        : i.getComponent(u);
                    n && (n.opacity = 0),
                      f.stopAllByTarget(n || void 0),
                      null != this.fade_tween && this.fade_tween.stop(),
                      null != this.black_screen_tween &&
                        this.black_screen_tween.stop(),
                      this.loadingAnim && (this.loadingAnim.opacity = 1),
                      this.black_screen && (this.black_screen.active = !0),
                      this.loading_node && (this.loading_node.active = !0),
                      n && this.runBlackScreen(n);
                    (this.fade_tween = b({ a: 1 })
                      .to(
                        0.2,
                        { a: 255 },
                        {
                          progress: function (e, i, n, a) {
                            return (
                              t.loadingAnim && (t.loadingAnim.opacity = n),
                              e + (i - e) * a
                            );
                          },
                        }
                      )
                      .call(function () {
                        t.loadingAnim && (t.loadingAnim.opacity = 255);
                      })),
                      this.fade_tween.start();
                  }),
                  (l.runBlackScreen = (function () {
                    var e = o(
                      s().mark(function e(i) {
                        var t;
                        return s().wrap(
                          function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (e.next = 2),
                                    new Promise(function (e) {
                                      return setTimeout(e, 50);
                                    })
                                  );
                                case 2:
                                  null != (t = this.black_screen) &&
                                    t.active &&
                                    (this.black_screen_tween = b(i)
                                      .to(
                                        0.2,
                                        { opacity: 200 },
                                        { easing: "linear" }
                                      )
                                      .start());
                                case 3:
                                case "end":
                                  return e.stop();
                              }
                          },
                          e,
                          this
                        );
                      })
                    );
                    return function (i) {
                      return e.apply(this, arguments);
                    };
                  })()),
                  (l.showStaticLoading = function () {
                    this.loadingAnim && (this.loadingAnim.node.active = !1),
                      this.skel_loading_squidgame &&
                        (this.skel_loading_squidgame.active = !1),
                      this.lbl_message && (this.lbl_message.node.active = !1),
                      this.staticSprite && (this.staticSprite.node.active = !0),
                      this.loading_node && (this.loading_node.active = !0);
                  }),
                  (l.hide = function () {
                    var e,
                      i =
                        null == (e = this.black_screen)
                          ? void 0
                          : e.getComponent(u);
                    f.stopAllByTarget(i || void 0),
                      null != this.fade_tween && this.fade_tween.stop(),
                      null != this.black_screen_tween &&
                        this.black_screen_tween.stop(),
                      this.black_screen && (this.black_screen.active = !1),
                      this.loading_node && (this.loading_node.active = !1),
                      this.staticSprite && (this.staticSprite.node.active = !1),
                      this.lbl_message && (this.lbl_message.node.active = !1);
                  }),
                  (l.changeToDefaultLoading = function () {
                    this.loadingAnim && (this.loadingAnim.node.active = !0),
                      this.skel_loading_squidgame &&
                        (this.skel_loading_squidgame.active = !1),
                      this.staticSprite && (this.staticSprite.node.active = !1);
                  }),
                  (l.changeToXDCMLoading = function (e) {
                    void 0 === e && (e = !0),
                      this.loadingAnim && (this.loadingAnim.node.active = !e),
                      this.skel_loading_squidgame &&
                        (this.skel_loading_squidgame.active = e);
                  }),
                  i
                );
              })(v)).prototype,
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
            (D = i(T.prototype, "loading_node", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = i(T.prototype, "lbl_message", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = i(T.prototype, "loadingAnim", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = i(T.prototype, "skel_loading_squidgame", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = i(T.prototype, "staticSprite", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = T))
          ) || z)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LoginPopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./MD5Algorithm.ts",
    "./GameConfigManager.ts",
    "./GamePlatformManager.ts",
    "./PersistManager.ts",
    "./HttpManager.ts",
    "./State.ts",
    "./Define.ts",
    "./EventManager.ts",
    "./AuthenHandler.ts",
    "./TrackingManager.ts",
    "./TrackingDefine.ts",
  ],
  function (n) {
    "use strict";
    var e,
      t,
      o,
      i,
      a,
      r,
      l,
      s,
      u,
      c,
      d,
      g,
      p,
      h,
      m,
      f,
      _,
      b,
      v,
      w,
      L,
      I,
      y,
      T,
      B,
      S,
      x,
      C,
      k,
      P;
    return {
      setters: [
        function (n) {
          (e = n.applyDecoratedDescriptor),
            (t = n.inheritsLoose),
            (o = n.initializerDefineProperty),
            (i = n.assertThisInitialized);
        },
        function (n) {
          (a = n.cclegacy),
            (r = n._decorator),
            (l = n.EditBox),
            (s = n.Button),
            (u = n.Sprite),
            (c = n.Node),
            (d = n.Layout),
            (g = n.Animation),
            (p = n.Label),
            (h = n.sys),
            (m = n.log),
            (f = n.Texture2D),
            (_ = n.SpriteFrame);
        },
        function (n) {
          b = n.CommonPopup;
        },
        function (n) {
          v = n.MD5Algorithm;
        },
        function (n) {
          w = n.GameConfigManager;
        },
        function (n) {
          L = n.GamePlatformManager;
        },
        function (n) {
          I = n.PersistManager;
        },
        function (n) {
          y = n.httpManager;
        },
        function (n) {
          T = n.state;
        },
        function (n) {
          B = n.StorageKey;
        },
        function (n) {
          (S = n.eventManager), (x = n.EventKey);
        },
        function (n) {
          C = n.AuthenHandler;
        },
        function (n) {
          k = n.tracking;
        },
        function (n) {
          P = n.TRACKING_ACTION_TYPE;
        },
      ],
      execute: function () {
        var O,
          N,
          M,
          A,
          D,
          F,
          z,
          G,
          H,
          E,
          R,
          U,
          J,
          K,
          V,
          q,
          j,
          Y,
          Q,
          W,
          X,
          Z,
          $,
          nn,
          en,
          tn,
          on,
          an,
          rn;
        a._RF.push({}, "dbf65Ib9VVNep+kJVFcTLRi", "LoginPopup", void 0);
        var ln = r.ccclass,
          sn = r.property;
        n(
          "LoginPopup",
          ((O = ln("LoginPopup")),
          (N = sn(l)),
          (M = sn(l)),
          (A = sn(l)),
          (D = sn(s)),
          (F = sn(s)),
          (z = sn(u)),
          (G = sn(c)),
          (H = sn(d)),
          (E = sn(s)),
          (R = sn(g)),
          (U = sn(p)),
          (J = sn(p)),
          (K = sn(s)),
          O(
            ((j = e(
              (q = (function (n) {
                function e() {
                  for (
                    var e, t = arguments.length, a = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (e = n.call.apply(n, [this].concat(a)) || this),
                    o(e, "edtBox_username", j, i(e)),
                    o(e, "edtBox_password", Y, i(e)),
                    o(e, "edtBox_capcha", Q, i(e)),
                    o(e, "btn_login", W, i(e)),
                    o(e, "btn_quenmk", X, i(e)),
                    o(e, "spr_capcha", Z, i(e)),
                    o(e, "capcha_node", $, i(e)),
                    o(e, "content_layout", nn, i(e)),
                    o(e, "btn_capcha", en, i(e)),
                    o(e, "anim_capcha", tn, i(e)),
                    o(e, "lb_domain_notice_0", on, i(e)),
                    o(e, "lb_domain_notice_1", an, i(e)),
                    o(e, "btn_domain_link", rn, i(e)),
                    (e.isLogin = !1),
                    e
                  );
                }
                t(e, n);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    var e,
                      t,
                      o,
                      i,
                      a,
                      r,
                      l,
                      s = this;
                    n.prototype.onLoad.call(this),
                      null == (e = this.btn_login) ||
                        e.node.on("click", function () {
                          s.isLogin || s.loginAcc();
                        }),
                      null == (t = this.btn_capcha) ||
                        t.node.on("click", function () {
                          s.loadCapcha();
                        }),
                      null == (o = this.btn_quenmk) ||
                        o.node.on("click", function () {
                          h.openURL(w.liveChatURL);
                        }),
                      null == (i = this.edtBox_username) ||
                        i.node.on("editing-did-began", function () {
                          s.edtBox_password && (s.edtBox_password.enabled = !1);
                        }),
                      null == (a = this.edtBox_username) ||
                        a.node.on("editing-did-ended", function () {
                          s.edtBox_password && (s.edtBox_password.enabled = !0),
                            s.isFullFillInfo() && s.loginAcc();
                        }),
                      this.edtBox_password &&
                        this.edtBox_password.node.on(
                          "editing-did-began",
                          function () {
                            s.edtBox_username &&
                              (s.edtBox_username.enabled = !1);
                          }
                        ),
                      null == (r = this.edtBox_password) ||
                        r.node.on("editing-did-ended", function () {
                          s.edtBox_username && (s.edtBox_username.enabled = !0),
                            s.isFullFillInfo() && s.loginAcc();
                        }),
                      null == (l = this.edtBox_capcha) ||
                        l.node.on("editing-did-ended", function () {
                          s.isFullFillInfo() && s.loginAcc();
                        });
                    var u = localStorage.getItem("X_GAME_CONFIG") || "",
                      d = JSON.parse(u).lp_domain + "",
                      g =
                        d
                          .replace("https", "")
                          .split("/")
                          .sort(function (n, e) {
                            return e.length - n.length;
                          })[0] || "";
                    this.lb_domain_notice_0 &&
                      (this.lb_domain_notice_0.string =
                        "Quý khách vui lòng tải app và chơi game trực tiếp tại  "),
                      this.lb_domain_notice_1 &&
                        (this.lb_domain_notice_1.string = g),
                      this.btn_domain_link &&
                        this.btn_domain_link.node.on(
                          c.EventType.TOUCH_END,
                          function () {
                            console.log("open domain url"), h.openURL(d);
                          },
                          this
                        );
                  }),
                  (a.start = function () {}),
                  (a.isFullFillInfo = function () {
                    var n,
                      e,
                      t =
                        null == (n = this.edtBox_username) ? void 0 : n.string,
                      o =
                        null == (e = this.edtBox_password) ? void 0 : e.string;
                    return (
                      (T.is_showing_notice = !0),
                      0 != (null == t ? void 0 : t.length) &&
                        0 != (null == o ? void 0 : o.length)
                    );
                  }),
                  (a.loginAcc = function () {
                    var n = this;
                    try {
                      var e,
                        t,
                        o,
                        i,
                        a =
                          null == (e = this.edtBox_username)
                            ? void 0
                            : e.string,
                        r =
                          (null == (t = this.edtBox_password)
                            ? void 0
                            : t.string) || "";
                      if (
                        0 == (null == (o = a) ? void 0 : o.length) ||
                        0 == (null == r ? void 0 : r.length)
                      )
                        return void I.showNoti("Vui lòng điền đủ thông tin.");
                      if (r.length < 6 || r.length > 15)
                        return void I.showNoti(
                          "Mật khẩu phải từ 6 tới 15 ký tự."
                        );
                      I.getInstance().showLoading(),
                        (a =
                          (null == (i = a) ? void 0 : i.toLowerCase()) || "");
                      var l = w.IDdomainURL,
                        s = new Date().getTime().toString(),
                        u = L.getPlatformID(),
                        c = L.getDeviceID(),
                        d = a;
                      (d += r),
                        (d += u.toString()),
                        (d += c),
                        h.isBrowser && (d += s),
                        (d += w.getHSK()),
                        (d = new v().encrypt(d));
                      var g = w.brand(),
                        p = {};
                      if (
                        (h.isBrowser
                          ? (p.command = "loginWebHash")
                          : (p.command = "loginHash"),
                        (p.username = a),
                        (p.password = r),
                        (p.platformId = u),
                        (p.advId = ""),
                        (p.deviceId = c),
                        (p.hash = d),
                        (p.brand = g),
                        (p.sessionId = T.sessionId),
                        h.isBrowser && (p.timestamp = s),
                        k.sendTracking(P.LOGIN_CLICK),
                        h.isBrowser)
                      ) {
                        var m;
                        y.sendGET({
                          url: l + "?command=getTime",
                          onCompleted: function (e) {
                            return (
                              (t = e),
                              (p.timestamp = JSON.parse(t).data.message || s),
                              void C.create().then(function (e) {
                                (m = setTimeout(function () {
                                  I.getInstance().hideLoading();
                                }, 1e4)),
                                  e.setOnFailure(function (n) {
                                    k.sendTracking(P.LOGIN_FAIL_HTML),
                                      clearTimeout(m),
                                      I.getInstance().hideLoading(),
                                      I.getInstance().showCommonPopup(
                                        "Có lỗi xảy ra trong quá trình đăng nhập\nVui lòng thử lại",
                                        function () {
                                          I.getInstance().hideCommonPopup();
                                        }
                                      );
                                  }),
                                  e.setOnSuccess(function (e) {
                                    clearTimeout(m),
                                      n.loginCompleted(a, r, JSON.stringify(e)),
                                      k.sendTracking(P.LOGIN_SUCCESS_HTML);
                                  }),
                                  e.doLogin(p);
                              })
                            );
                            var t;
                          },
                        });
                      } else {
                        var f = JSON.stringify(p);
                        y.sendPOST({
                          url: l,
                          data: f,
                          useLoading: !1,
                          onCompleted: function (e) {
                            n.loginCompleted(a, r, e),
                              k.sendTracking(P.LOGIN_SUCCESS_HTML);
                          },
                          onError: function () {
                            k.sendTracking(P.LOGIN_FAIL_HTML);
                          },
                        });
                      }
                    } catch (n) {
                      console.log("login error:", n.message);
                    }
                  }),
                  (a.loginOTP = function (n, e, t) {
                    var o,
                      i,
                      a,
                      r = this,
                      l =
                        null == (o = this.edtBox_username) ? void 0 : o.string;
                    if (
                      0 != (null == (i = l) ? void 0 : i.length) &&
                      0 != (null == t ? void 0 : t.length)
                    ) {
                      I.getInstance().showLoading(),
                        (l =
                          (null == (a = l) ? void 0 : a.toLowerCase()) || "");
                      var s = w.IDdomainURL,
                        u = n + t + w.getHSK();
                      u = new v().encrypt(u);
                      var c = { command: "submitOTP" };
                      (c.sessionId = n),
                        (c.otp = t),
                        (c.hash = u),
                        m("loginOTP:", e, t);
                      var d = JSON.stringify(c);
                      y.sendPOST({
                        url: s,
                        data: d,
                        useLoading: !1,
                        onCompleted: function (n) {
                          r.loginCompleted(l, e, n);
                        },
                      });
                    } else I.showNoti("Vui lòng điền đủ thông tin.");
                  }),
                  (a.loginCompleted = function (n, e, t) {
                    var o = this;
                    m(t);
                    var i = JSON.parse(t),
                      a = i.status;
                    if (0 == a) {
                      var r = i.data,
                        l = r.signature,
                        s = r.accessToken,
                        u = r.refreshToken,
                        c = r.info,
                        d = JSON.stringify(c);
                      (T.isLoggedInOtherDevice = !1),
                        (T.signature = l),
                        (T.loginInfo = d),
                        (T.username = n),
                        (T.password = e),
                        (T.serverAccessToken = s),
                        (T.serverRefreshToken = u),
                        localStorage.setItem("user_token", T.serverAccessToken),
                        localStorage.setItem(
                          "refresh_token",
                          T.serverRefreshToken
                        ),
                        localStorage.setItem(B.LoggedUsername, btoa(n)),
                        localStorage.setItem(B.LoggedPassword, btoa(e)),
                        S.emit(x.CallLobbyGamePlayManagerLogin, !0),
                        (this.isLogin = !0),
                        this.hide();
                    } else if (110 == a) {
                      var g = i.data,
                        p = g.message,
                        h = g.sessionId;
                      I.getInstance().showOTPPopup(
                        "",
                        p,
                        "",
                        "",
                        function (n) {
                          o.loginOTP(h, e, n);
                        },
                        "",
                        !0
                      ),
                        I.getInstance().hideLoading();
                    } else {
                      var f,
                        _ = i.data;
                      f = _.message;
                      var b,
                        v = _.type;
                      if (null != v && null != v && 1 == v)
                        null == (b = I.getInstance()) ||
                          b.showCommonPopup(f, function () {
                            var n;
                            null == (n = I.getInstance()) ||
                              n.hideCommonPopup();
                          });
                      else I.showNoti(f);
                      I.getInstance().hideLoading(), this.loadCapcha();
                    }
                  }),
                  (a.show = function () {
                    if (
                      ((this.isLogin = !1),
                      n.prototype.show.call(this),
                      null != localStorage.getItem(B.LoggedUsername))
                    ) {
                      var e = localStorage.getItem(B.LoggedUsername) || "";
                      this.edtBox_username &&
                        (this.edtBox_username.string = atob(e));
                    }
                    if (null != localStorage.getItem(B.LoggedPassword)) {
                      var t = localStorage.getItem(B.LoggedPassword) || "";
                      this.edtBox_password &&
                        (this.edtBox_password.string = atob(t));
                    }
                    this.loadCapcha();
                  }),
                  (a.loadCapcha = function () {
                    this.capcha_node && (this.capcha_node.active = !1),
                      this.content_layout &&
                        (this.content_layout.spacingY = 35);
                  }),
                  (a.base64ToSpriteFrame = function (n, e) {
                    if (h.isBrowser) {
                      var t = new Image();
                      (t.src = "data:image/jpeg;base64," + n),
                        (t.onload = function () {
                          var n = new f();
                          n.reset({ width: t.width, height: t.height }),
                            n.uploadData(t, 0, 0),
                            (n.loaded = !0);
                          var o = new _();
                          (o.texture = n), e(o);
                        });
                    }
                  }),
                  e
                );
              })(b)).prototype,
              "edtBox_username",
              [N],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (Y = e(q.prototype, "edtBox_password", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = e(q.prototype, "edtBox_capcha", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = e(q.prototype, "btn_login", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (X = e(q.prototype, "btn_quenmk", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Z = e(q.prototype, "spr_capcha", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($ = e(q.prototype, "capcha_node", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (nn = e(q.prototype, "content_layout", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (en = e(q.prototype, "btn_capcha", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (tn = e(q.prototype, "anim_capcha", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (on = e(q.prototype, "lb_domain_notice_0", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (an = e(q.prototype, "lb_domain_notice_1", [J], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (rn = e(q.prototype, "btn_domain_link", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = q))
          ) || V)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MauBinh_CardLib.ts",
  ["cc", "./Define.ts"],
  function (e) {
    "use strict";
    var r, t, n;
    return {
      setters: [
        function (e) {
          (r = e.cclegacy), (t = e._decorator);
        },
        function (e) {
          n = e.GameID;
        },
      ],
      execute: function () {
        var i, h;
        e("MAU_BINH_RESULT", void 0),
          r._RF.push({}, "730135MkMtOgLFTcToC0rVN", "MauBinh_CardLib", void 0);
        var u,
          c = t.ccclass;
        !(function (e) {
          (e[(e.THUNG_PHA_SANH = 0)] = "THUNG_PHA_SANH"),
            (e[(e.TU_QUY = 1)] = "TU_QUY"),
            (e[(e.CU_LU = 2)] = "CU_LU"),
            (e[(e.THUNG = 3)] = "THUNG"),
            (e[(e.SANH = 4)] = "SANH"),
            (e[(e.XAM_CO = 5)] = "XAM_CO"),
            (e[(e.THU = 6)] = "THU"),
            (e[(e.DOI = 7)] = "DOI"),
            (e[(e.MAU_THAU = 8)] = "MAU_THAU");
        })(u || (u = e("MAU_BINH_RESULT", {})));
        e(
          "GameCard",
          (function () {
            function e() {
              (this.N = -1), (this.S = -1), (this.serverCode = 0);
            }
            var r = e.prototype;
            return (
              (r.setDirect = function (e, r, t) {
                (this.S = r),
                  (this.N = e),
                  1 == this.N && (this.N = 14),
                  2 == this.N &&
                    t != n.BINH &&
                    t != n.POKER &&
                    t != n.BACAY &&
                    t != n.BLACK_JACK &&
                    (this.N = 15);
              }),
              (r.decodeCard = function (e, r) {
                (this.serverCode = e),
                  (this.S = (e % 4) + 1),
                  (this.N = Math.floor(e / 4) + 1),
                  1 == this.N && (this.N = 14),
                  2 == this.N &&
                    r != n.BINH &&
                    r != n.POKER &&
                    r != n.BACAY &&
                    r != n.BLACK_JACK &&
                    (this.N = 15);
              }),
              (r.encodeCard = function (e) {
                void 0 === e && (e = -1);
                return e == n.TIENLEN
                  ? 13 * (this.S - 1) + this.N - 2
                  : 13 * (this.S - 1) + this.N - 1;
              }),
              (r.getResourceName = function (e) {
                void 0 === e && (e = !1);
                var r = 0;
                return (r = 15 == this.N ? 2 : 14 == this.N ? 1 : this.N) > 0
                  ? "Card_" +
                      r.toString() +
                      this.getSuitInVietnamese() +
                      (e ? ".png" : "")
                  : "Card_bc" + (e ? ".png" : "");
              }),
              (r.isHiddenCard = function () {
                return this.getResourceName().indexOf("Card_bc") >= 0;
              }),
              (r.getSuitInVietnamese = function () {
                return 1 == this.S
                  ? "B"
                  : 2 == this.S
                  ? "T"
                  : 3 == this.S
                  ? "R"
                  : 4 == this.S
                  ? "C"
                  : "-1";
              }),
              e
            );
          })()
        ),
          e(
            "default",
            c("MauBinh_CardLib")(
              (((h = (function () {
                function e() {}
                return (
                  (e.sortVector = function (e) {
                    return e.sort(function (e, r) {
                      return e.N > r.N ? 1 : -1;
                    });
                  }),
                  (e.sortVector2 = function (e) {
                    return e.sort(function (e, r) {
                      return e.S > r.S || (e.S == r.S && e.N > r.N) ? 1 : -1;
                    });
                  }),
                  (e.indexA = function (e) {
                    for (var r = 0, t = 0; t < e.length; t++)
                      if (14 == e[t].N) {
                        r = t;
                        break;
                      }
                    return r;
                  }),
                  (e.checkThung = function (r) {
                    var t = 0,
                      n = 0,
                      i = [];
                    if (((i = r.slice()), 3 == r.length)) return 0;
                    var h = [];
                    i = e.sortVector2(i);
                    for (var u = 0; u < i.length - 1; u++) {
                      for (
                        var c = u + 1;
                        c < i.length && i[u].S - i[c].S == 0;
                        c++
                      )
                        t++;
                      if ((4 != t && (t = 0), 4 == t)) {
                        h.push(i[u]),
                          h.push(i[u + 1]),
                          h.push(i[u + 2]),
                          h.push(i[u + 3]),
                          h.push(i[u + 4]);
                        break;
                      }
                    }
                    return 5 == h.length ? 340 + i[4].N : n;
                  }),
                  (e.checkSanh = function (r) {
                    var t = 0,
                      n = 0,
                      i = [];
                    if (((i = r.slice()), 3 == r.length)) return 0;
                    var h = [];
                    if (5 == (i = e.sortVector(i)).length) {
                      for (var u = 0; u < i.length - 1; u++) {
                        if (
                          (i[u + 1].N - i[u].N > 1
                            ? ((t = 0), (h = []))
                            : ((t = t + i[u + 1].N - i[u].N),
                              i[u + 1].N - i[u].N == 1 &&
                                (h.push(i[u]),
                                u == i.length - 2 && (h.push(i[u + 1]), t++))),
                          3 == t && 4 == h[2].N && e.indexA(i) > 0)
                        ) {
                          h.push(i[u + 1]), h.push(i[e.indexA(i)]), (t = 5);
                          break;
                        }
                        if (4 == t && 5 == h[3].N && e.indexA(i) > 0) {
                          h.push(i[e.indexA(i)]), t++;
                          break;
                        }
                        if (5 == t) break;
                      }
                      5 == t &&
                        (n =
                          e.indexA(i) > 0
                            ? 10 == h[0].N
                              ? 286
                              : 2 == h[0].N
                              ? 277
                              : 272 + h[4].N
                            : 272 + h[4].N);
                    } else {
                      for (var c = 0; c < i.length - 1; c++) {
                        if (
                          (i[c + 1].N - i[c].N > 1
                            ? ((t = 0), (h = []))
                            : ((t = t + i[c + 1].N - i[c].N),
                              i[c + 1].N - i[c].N == 1 &&
                                (h.push(i[c]),
                                c == i.length - 2 && (h.push(i[c + 1]), t++))),
                          3 == t && 4 == h[2].N && e.indexA(i) > 0)
                        ) {
                          h.push(i[c + 1]), h.push(i[e.indexA(i)]), (t = 5);
                          break;
                        }
                        if (4 == t) {
                          if (5 == h[3].N && e.indexA(i) > 0) {
                            h.push(i[e.indexA(i)]), t++;
                            break;
                          }
                          h.push(i[c + 1]), t++;
                          break;
                        }
                        if (5 == t) break;
                      }
                      5 == t &&
                        (n =
                          e.indexA(i) > 0
                            ? 10 == h[0].N
                              ? 286
                              : 2 == h[0].N
                              ? 277
                              : 272 + h[4].N
                            : 272 + h[4].N);
                    }
                    return n;
                  }),
                  (e.checkTPS = function (r) {
                    var t;
                    t = r.slice();
                    var i = [],
                      h = 0;
                    if (3 == r.length) return 0;
                    for (var u = 0; u < t.length; u++) {
                      var c = t[u];
                      c && i.push(c.encodeCard(n.BINH));
                    }
                    return (
                      (t = e.sortVector(t)),
                      e.checkThung(t) > 0 &&
                        e.checkSanh(t) > 0 &&
                        (h = 544 + t[4].N),
                      h
                    );
                  }),
                  (e.checkCuLu = function (r) {
                    var t = [];
                    t = r.slice();
                    var n = 0;
                    if (3 == r.length) return 0;
                    var i = [];
                    t = e.sortVector(t);
                    for (var h = 0; h < t.length - 1; h++) {
                      for (var u = h + 1; u < t.length && t[h].N == t[u].N; u++)
                        n++;
                      if ((2 != n && (n = 0), 2 == n)) {
                        i.push(t[h]),
                          i.push(t[h + 1]),
                          i.push(t[h + 2]),
                          (n = 0);
                        break;
                      }
                    }
                    i.forEach(function (e) {
                      t.splice(t.indexOf(e), 1);
                    });
                    for (var c = 0; c < t.length - 1; c++)
                      if (t[c].N == t[c + 1].N) {
                        i.push(t[c]),
                          i.push(t[c + 1]),
                          t.splice(c, 1),
                          t.splice(c, 1);
                        break;
                      }
                    return 5 == i.length ? 408 + i[0].N : 0;
                  }),
                  (e.checkTuQuy = function (r) {
                    var t = [];
                    t = r.slice();
                    var i = [],
                      h = 0;
                    if (3 == r.length) return 0;
                    for (var u = 0; u < t.length; u++) {
                      var c = t[u];
                      c && i.push(c.encodeCard(n.BINH));
                    }
                    var s = [];
                    t = e.sortVector(t);
                    for (var o = 0; o < t.length - 1; o++) {
                      for (
                        var a = o + 1;
                        a < t.length && (t[o].N - t[a].N) % 13 == 0;
                        a++
                      )
                        h++;
                      if ((3 != h && (h = 0), 3 == h)) {
                        s.push(t[o]),
                          s.push(t[o + 1]),
                          s.push(t[o + 2]),
                          s.push(t[o + 3]);
                        break;
                      }
                    }
                    return (
                      s.forEach(function (e) {
                        t = t.splice(t.indexOf(e), 1);
                      }),
                      4 == s.length && s.push(t[0]),
                      5 == s.length ? 476 + s[0].N : 0
                    );
                  }),
                  (e.checkDoi = function (r) {
                    var t = 0,
                      n = [];
                    (n = r.slice()), (n = e.sortVector(n));
                    for (var i = 0; i < n.length - 1; i++)
                      if (n[i].N == n[i + 1].N) {
                        (t = 68 + n[i].N), n.splice(i, 1), n.splice(i, 1);
                        break;
                      }
                    return t;
                  }),
                  (e.checkThu = function (r) {
                    for (var t = [], i = 0, h = [], u = 0; u < r.length; u++) {
                      var c = r[u];
                      c && t.push(c.encodeCard(n.BINH));
                    }
                    var s = [];
                    if (3 == (s = r.slice()).length) return 0;
                    s = e.sortVector(s);
                    for (var o = 0, a = 0; a < s.length - 1; a++) {
                      for (var N = a + 1; N < s.length && s[a].N == s[N].N; N++)
                        o++;
                      if ((1 != o && (o = 0), 1 == o)) {
                        h.push(s[a]), h.push(s[a + 1]), (o = 0);
                        break;
                      }
                    }
                    h.forEach(function (e) {
                      s.splice(s.indexOf(e), 1);
                    });
                    for (var f = 0; f < s.length - 1; f++) {
                      for (
                        var l = f + 1;
                        l < s.length && s[f].N == s[l].N && s[f].N != h[0].N;
                        l++
                      )
                        o++;
                      if ((1 != o && (o = 0), 1 == o)) {
                        h.push(s[f]), h.push(s[f + 1]);
                        break;
                      }
                    }
                    return 4 == h.length && (i = 136 + h[3].N), i;
                  }),
                  (e.checkSam = function (r) {
                    for (
                      var t, i = [], h = 0, u = 0, c = 0;
                      c < r.length;
                      c++
                    ) {
                      var s = r[c];
                      s && i.push(s.encodeCard(n.BINH));
                    }
                    (t = r.slice()), (t = e.sortVector(t));
                    for (var o = 0; o < t.length - 1; o++) {
                      for (var a = o + 1; a < t.length && t[o].N == t[a].N; a++)
                        h++;
                      if ((2 != h && (h = 0), 2 == h)) {
                        u = 204 + t[o].N;
                        break;
                      }
                    }
                    return u;
                  }),
                  (e.getMark = function (r) {
                    var t = 0;
                    return (
                      (t = e.checkTPS(r)) > 0 ||
                        (t = e.checkTuQuy(r)) > 0 ||
                        (t = e.checkCuLu(r)) > 0 ||
                        (t = e.checkThung(r)) > 0 ||
                        (t = e.checkSanh(r)) > 0 ||
                        (t = e.checkSam(r)) > 0 ||
                        (t = e.checkThu(r)) > 0 ||
                        (t = e.checkDoi(r)),
                      t
                    );
                  }),
                  (e.getPokerMiniResult = function (r) {
                    var t = e.getMark(r),
                      n = u.MAU_THAU;
                    return (
                      t > 544
                        ? (n = u.THUNG_PHA_SANH)
                        : t > 476
                        ? (n = u.TU_QUY)
                        : t > 408
                        ? (n = u.CU_LU)
                        : t > 340
                        ? (n = u.THUNG)
                        : t > 272
                        ? (n = u.SANH)
                        : t > 204
                        ? (n = u.XAM_CO)
                        : t > 136
                        ? (n = u.THU)
                        : t > 68
                        ? (n = u.DOI)
                        : 0 == t && (n = u.MAU_THAU),
                      n
                    );
                  }),
                  (e.getPokerMiniResultString = function (r) {
                    var t = e.getPokerMiniResult(r);
                    return e.POKER_MINI_RESUTL_STRING[t];
                  }),
                  e
                );
              })()).POKER_MINI_RESUTL_STRING = [
                "Thùng Phá Sảnh",
                "Tứ Quý",
                "Cù Lũ",
                "Thùng",
                "Sảnh",
                "Xám Cô",
                "Thú",
                "Đôi J+",
                "Mậu Thầu",
              ]),
              (i = h))
            ) || i
          );
        r._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/MD5Algorithm.ts", ["cc"], function (i) {
  "use strict";
  var t, h;
  return {
    setters: [
      function (i) {
        (t = i.cclegacy), (h = i._decorator);
      },
    ],
    execute: function () {
      var s;
      t._RF.push({}, "d363fT/iMNNeIKjLU0tOYyH", "MD5Algorithm", void 0);
      var r = h.ccclass;
      i(
        "MD5Algorithm",
        r("MD5Algorithm")(
          (s = (function () {
            function i() {
              this.hex_chr = "0123456789abcdef".split("");
            }
            var t = i.prototype;
            return (
              (t.md5cycle = function (i, t) {
                var h = i[0],
                  s = i[1],
                  r = i[2],
                  n = i[3];
                (h = this.ff(h, s, r, n, t[0], 7, -680876936)),
                  (n = this.ff(n, h, s, r, t[1], 12, -389564586)),
                  (r = this.ff(r, n, h, s, t[2], 17, 606105819)),
                  (s = this.ff(s, r, n, h, t[3], 22, -1044525330)),
                  (h = this.ff(h, s, r, n, t[4], 7, -176418897)),
                  (n = this.ff(n, h, s, r, t[5], 12, 1200080426)),
                  (r = this.ff(r, n, h, s, t[6], 17, -1473231341)),
                  (s = this.ff(s, r, n, h, t[7], 22, -45705983)),
                  (h = this.ff(h, s, r, n, t[8], 7, 1770035416)),
                  (n = this.ff(n, h, s, r, t[9], 12, -1958414417)),
                  (r = this.ff(r, n, h, s, t[10], 17, -42063)),
                  (s = this.ff(s, r, n, h, t[11], 22, -1990404162)),
                  (h = this.ff(h, s, r, n, t[12], 7, 1804603682)),
                  (n = this.ff(n, h, s, r, t[13], 12, -40341101)),
                  (r = this.ff(r, n, h, s, t[14], 17, -1502002290)),
                  (s = this.ff(s, r, n, h, t[15], 22, 1236535329)),
                  (h = this.gg(h, s, r, n, t[1], 5, -165796510)),
                  (n = this.gg(n, h, s, r, t[6], 9, -1069501632)),
                  (r = this.gg(r, n, h, s, t[11], 14, 643717713)),
                  (s = this.gg(s, r, n, h, t[0], 20, -373897302)),
                  (h = this.gg(h, s, r, n, t[5], 5, -701558691)),
                  (n = this.gg(n, h, s, r, t[10], 9, 38016083)),
                  (r = this.gg(r, n, h, s, t[15], 14, -660478335)),
                  (s = this.gg(s, r, n, h, t[4], 20, -405537848)),
                  (h = this.gg(h, s, r, n, t[9], 5, 568446438)),
                  (n = this.gg(n, h, s, r, t[14], 9, -1019803690)),
                  (r = this.gg(r, n, h, s, t[3], 14, -187363961)),
                  (s = this.gg(s, r, n, h, t[8], 20, 1163531501)),
                  (h = this.gg(h, s, r, n, t[13], 5, -1444681467)),
                  (n = this.gg(n, h, s, r, t[2], 9, -51403784)),
                  (r = this.gg(r, n, h, s, t[7], 14, 1735328473)),
                  (s = this.gg(s, r, n, h, t[12], 20, -1926607734)),
                  (h = this.hh(h, s, r, n, t[5], 4, -378558)),
                  (n = this.hh(n, h, s, r, t[8], 11, -2022574463)),
                  (r = this.hh(r, n, h, s, t[11], 16, 1839030562)),
                  (s = this.hh(s, r, n, h, t[14], 23, -35309556)),
                  (h = this.hh(h, s, r, n, t[1], 4, -1530992060)),
                  (n = this.hh(n, h, s, r, t[4], 11, 1272893353)),
                  (r = this.hh(r, n, h, s, t[7], 16, -155497632)),
                  (s = this.hh(s, r, n, h, t[10], 23, -1094730640)),
                  (h = this.hh(h, s, r, n, t[13], 4, 681279174)),
                  (n = this.hh(n, h, s, r, t[0], 11, -358537222)),
                  (r = this.hh(r, n, h, s, t[3], 16, -722521979)),
                  (s = this.hh(s, r, n, h, t[6], 23, 76029189)),
                  (h = this.hh(h, s, r, n, t[9], 4, -640364487)),
                  (n = this.hh(n, h, s, r, t[12], 11, -421815835)),
                  (r = this.hh(r, n, h, s, t[15], 16, 530742520)),
                  (s = this.hh(s, r, n, h, t[2], 23, -995338651)),
                  (h = this.ii(h, s, r, n, t[0], 6, -198630844)),
                  (n = this.ii(n, h, s, r, t[7], 10, 1126891415)),
                  (r = this.ii(r, n, h, s, t[14], 15, -1416354905)),
                  (s = this.ii(s, r, n, h, t[5], 21, -57434055)),
                  (h = this.ii(h, s, r, n, t[12], 6, 1700485571)),
                  (n = this.ii(n, h, s, r, t[3], 10, -1894986606)),
                  (r = this.ii(r, n, h, s, t[10], 15, -1051523)),
                  (s = this.ii(s, r, n, h, t[1], 21, -2054922799)),
                  (h = this.ii(h, s, r, n, t[8], 6, 1873313359)),
                  (n = this.ii(n, h, s, r, t[15], 10, -30611744)),
                  (r = this.ii(r, n, h, s, t[6], 15, -1560198380)),
                  (s = this.ii(s, r, n, h, t[13], 21, 1309151649)),
                  (h = this.ii(h, s, r, n, t[4], 6, -145523070)),
                  (n = this.ii(n, h, s, r, t[11], 10, -1120210379)),
                  (r = this.ii(r, n, h, s, t[2], 15, 718787259)),
                  (s = this.ii(s, r, n, h, t[9], 21, -343485551)),
                  (i[0] = this.add32(h, i[0])),
                  (i[1] = this.add32(s, i[1])),
                  (i[2] = this.add32(r, i[2])),
                  (i[3] = this.add32(n, i[3]));
              }),
              (t.cmn = function (i, t, h, s, r, n) {
                return (
                  (t = this.add32(this.add32(t, i), this.add32(s, n))),
                  this.add32((t << r) | (t >>> (32 - r)), h)
                );
              }),
              (t.ff = function (i, t, h, s, r, n, f) {
                return this.cmn((t & h) | (~t & s), i, t, r, n, f);
              }),
              (t.gg = function (i, t, h, s, r, n, f) {
                return this.cmn((t & s) | (h & ~s), i, t, r, n, f);
              }),
              (t.hh = function (i, t, h, s, r, n, f) {
                return this.cmn(t ^ h ^ s, i, t, r, n, f);
              }),
              (t.ii = function (i, t, h, s, r, n, f) {
                return this.cmn(h ^ (t | ~s), i, t, r, n, f);
              }),
              (t.md51 = function (i) {
                var t,
                  h = i.length,
                  s = [1732584193, -271733879, -1732584194, 271733878];
                for (t = 64; t <= i.length; t += 64)
                  this.md5cycle(s, this.md5blk(i.substring(t - 64, t)));
                i = i.substring(t - 64);
                var r = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                for (t = 0; t < i.length; t++)
                  r[t >> 2] |= i.charCodeAt(t) << (t % 4 << 3);
                if (((r[t >> 2] |= 128 << (t % 4 << 3)), t > 55))
                  for (this.md5cycle(s, r), t = 0; t < 16; t++) r[t] = 0;
                return (r[14] = 8 * h), this.md5cycle(s, r), s;
              }),
              (t.md5blk = function (i) {
                var t,
                  h = [];
                for (t = 0; t < 64; t += 4)
                  h[t >> 2] =
                    i.charCodeAt(t) +
                    (i.charCodeAt(t + 1) << 8) +
                    (i.charCodeAt(t + 2) << 16) +
                    (i.charCodeAt(t + 3) << 24);
                return h;
              }),
              (t.rhex = function (i) {
                for (var t = "", h = 0; h < 4; h++)
                  t +=
                    this.hex_chr[(i >> (8 * h + 4)) & 15] +
                    this.hex_chr[(i >> (8 * h)) & 15];
                return t;
              }),
              (t.hex = function (i) {
                for (var t = 0; t < i.length; t++) i[t] = this.rhex(i[t]);
                return i.join("");
              }),
              (t.md5 = function (i) {
                return this.hex(this.md51(i));
              }),
              (t.add32 = function (i, t) {
                return (i + t) & 4294967295;
              }),
              (t.encrypt = function (i) {
                return this.md5(i);
              }),
              i
            );
          })())
        ) || s
      );
      t._RF.pop();
    },
  };
});

System.register("chunks:///_virtual/NativeHelper.ts", ["cc"], function (e) {
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
        t._RF.push({}, "38d50g+Ah1Bd6h2YA0hL+UN", "NativeHelper", void 0);
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
        "NativeHelper",
        l("NativeHelper")(
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
  "chunks:///_virtual/NotiView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConfigManager.ts"],
  function (t) {
    "use strict";
    var e, o, i, n, s, r, a, l, p, h, c, g, u, d, f, m, v, y, b;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (r = t._decorator),
            (a = t.Label),
            (l = t.UITransform),
            (p = t.Sprite),
            (h = t.SpriteFrame),
            (c = t.Vec3),
            (g = t.view),
            (u = t.sys),
            (d = t.log),
            (f = t.UIOpacity),
            (m = t.Tween),
            (v = t.tween),
            (y = t.Component);
        },
        function (t) {
          b = t.GameConfigManager;
        },
      ],
      execute: function () {
        var w, _, S, P, C, z, F, M, N, V, B;
        s._RF.push({}, "a1b34kLShBELrQdgpbFVW5o", "NotiView", void 0);
        var O = r.ccclass,
          T = r.property;
        t(
          "default",
          ((w = O("NotiView")),
          (_ = T(a)),
          (S = T(l)),
          (P = T(p)),
          (C = T([h])),
          w(
            ((M = e(
              (F = (function (t) {
                function e() {
                  for (
                    var e, o = arguments.length, s = new Array(o), r = 0;
                    r < o;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    i(e, "message", M, n(e)),
                    i(e, "bg_transform", N, n(e)),
                    i(e, "spr_type", V, n(e)),
                    i(e, "sprFrame_type", B, n(e)),
                    (e.endPos = c.ZERO),
                    (e.startPos = c.ZERO),
                    (e.posShow = c.ZERO),
                    e
                  );
                }
                o(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    var t = this;
                    g.on("design-resolution-changed", function () {
                      t.bg_transform &&
                        t.bg_transform.node.active &&
                        (t.UpdateNewPos(), (t.node.position = t.endPos));
                    });
                    var e = u.isBrowser && !u.isMobile ? 0.7 : 0.8;
                    d("NotiView scale: ", e), this.node.setScale(e, e);
                  }),
                  (s.showMessage = function (t, e, o, i, n) {
                    var s,
                      r,
                      a = this;
                    if (
                      (void 0 === e && (e = null),
                      void 0 === o && (o = 0),
                      void 0 === i && (i = 2),
                      void 0 === n && (n = c.ZERO),
                      t.length > 50)
                    ) {
                      var l = t.lastIndexOf(",", Math.floor(0.8 * t.length));
                      if (l > 0) t = t.slice(0, l + 1) + "\n" + t.slice(l + 2);
                      else {
                        var p = t.lastIndexOf(" ", Math.floor(0.6 * t.length));
                        p > 0 && (t = t.slice(0, p) + "\n" + t.slice(p + 1));
                      }
                    }
                    if (
                      (d("NotiView showMessage: ", t, e, o, i, n, this.node),
                      !e ||
                        (e.active &&
                          1 !=
                            (null == (s = e.getComponent(f))
                              ? void 0
                              : s.opacity)))
                    ) {
                      (this.posShow = n),
                        this.spr_type &&
                          (this.spr_type.spriteFrame =
                            (null == (r = this.sprFrame_type)
                              ? void 0
                              : r[i]) || null),
                        this.bg_transform &&
                          (this.bg_transform.node.active = !0),
                        this.message && (this.message.string = t),
                        this.UpdateNewPos(),
                        m.stopAllByTarget(this.node);
                      var h = this.node.getComponent(f);
                      m.stopAllByTarget(h || void 0),
                        this.node.setPosition(this.startPos);
                      var g = this.node.getComponent(f);
                      g && (g.opacity = 1),
                        v(this.node)
                          .sequence(
                            v(this.node).to(0.2, { position: this.endPos }),
                            v()
                              .delay(2)
                              .call(function () {
                                v(a.node)
                                  .to(0.3, { position: a.startPos })
                                  .start();
                              })
                          )
                          .start(),
                        v(this.node.getComponent(f))
                          .sequence(
                            v(this.node.getComponent(f)).to(0.2, {
                              opacity: 255,
                            }),
                            v().delay(2),
                            v(this.node.getComponent(f))
                              .to(0.3, { opacity: 1 })
                              .call(function () {
                                a.bg_transform &&
                                  (a.bg_transform.node.active = !1);
                              })
                          )
                          .start();
                    }
                  }),
                  (s.UpdateNewPos = function () {
                    var t,
                      e,
                      o,
                      i =
                        ((null == (t = this.node.parent) ||
                        null == (e = t.getComponent(l))
                          ? void 0
                          : e.height) || g.getVisibleSize().height) / 2,
                      n =
                        (null == (o = this.getComponent(l))
                          ? void 0
                          : o.contentSize.height) || 0;
                    (this.startPos = new c(
                      this.posShow.x,
                      this.posShow.y + i + n,
                      0
                    )),
                      (this.endPos = new c(
                        this.posShow.x,
                        this.posShow.y + i,
                        0
                      ));
                  }),
                  (s.hide = function () {
                    var t,
                      e = this;
                    m.stopAllByTarget(this.node);
                    var o = this.node.getComponent(f);
                    m.stopAllByTarget(o || void 0);
                    var i =
                        (null == (t = this.bg_transform)
                          ? void 0
                          : t.contentSize.height) || 0,
                      n = new c(0, b.getSizeHeight() / 2 + i / 2, 0);
                    v(this.node).to(0.3, { position: n }).start(),
                      v(this.node.getComponent(f))
                        .to(0.3, { opacity: 1 })
                        .call(function () {
                          e.bg_transform && (e.bg_transform.node.active = !1);
                        })
                        .start();
                  }),
                  (s.IsShowing = function () {
                    var t;
                    return null == (t = this.bg_transform)
                      ? void 0
                      : t.node.active;
                  }),
                  e
                );
              })(y)).prototype,
              "message",
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
            (N = e(F.prototype, "bg_transform", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = e(F.prototype, "spr_type", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = e(F.prototype, "sprFrame_type", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (z = F))
          ) || z)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/NotiViewForPortrait.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConfigManager.ts"],
  function (t) {
    "use strict";
    var e, o, i, n, r, a, s, l, c, p, u, g, h, d, m, f;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (a = t._decorator),
            (s = t.Label),
            (l = t.Sprite),
            (c = t.UITransform),
            (p = t.SpriteFrame),
            (u = t.UIOpacity),
            (g = t.Tween),
            (h = t.Vec3),
            (d = t.tween),
            (m = t.Component);
        },
        function (t) {
          f = t.GameConfigManager;
        },
      ],
      execute: function () {
        var b, v, y, _, w, z, F, C, S, T, A;
        r._RF.push(
          {},
          "ac4d1kQjzJI1JGbr8ASqDtr",
          "NotiViewForPortrait",
          void 0
        );
        var P = a.ccclass,
          B = a.property;
        t(
          "default",
          ((b = P("NotiViewForPortrait")),
          (v = B(s)),
          (y = B(l)),
          (_ = B(c)),
          (w = B([p])),
          b(
            ((C = e(
              (F = (function (t) {
                function e() {
                  for (
                    var e, o = arguments.length, r = new Array(o), a = 0;
                    a < o;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    i(e, "message", C, n(e)),
                    i(e, "icon", S, n(e)),
                    i(e, "bg_transform", T, n(e)),
                    i(e, "sprFrame_thongbao", A, n(e)),
                    e
                  );
                }
                o(e, t);
                var r = e.prototype;
                return (
                  (r.showMessage = function (t, e, o) {
                    var i, n, r;
                    void 0 === e && (e = null), void 0 === o && (o = 0);
                    var a = null == (i = e) ? void 0 : i.getComponent(u);
                    if (
                      null != (n = e) &&
                      n.active &&
                      1 != (null == a ? void 0 : a.opacity)
                    ) {
                      var s = this.sprFrame_thongbao.filter(function (t) {
                          return t.name == "lb_icon_thongbao_" + o;
                        }),
                        l = s.length > 0 ? s[0] : this.sprFrame_thongbao[0];
                      this.message && (this.message.string = t),
                        this.icon &&
                          (this.icon.spriteFrame =
                            null != l ? l : this.icon.spriteFrame),
                        g.stopAllByTarget(this.node);
                      var c = this.node.getComponent(u);
                      g.stopAllByTarget(c || void 0);
                      var p =
                          (null == (r = this.bg_transform)
                            ? void 0
                            : r.contentSize.height) || 0,
                        m = new h(-f.getSizeWidth() / 2 - p / 2, 0, 0),
                        b = new h(-f.getSizeWidth() / 2 + p / 2, 0, 0);
                      this.node.setPosition(m);
                      var v = this.node.getComponent(u);
                      v && (v.opacity = 1),
                        d(this.node)
                          .sequence(
                            d(this.node).to(0.2, { position: b }),
                            d().delay(2),
                            d(this.node).to(0.3, { position: m })
                          )
                          .start(),
                        d(this.node.getComponent(u))
                          .sequence(
                            d(this.node.getComponent(u)).to(0.2, {
                              opacity: 255,
                            }),
                            d().delay(2),
                            d(this.node.getComponent(u)).to(0.3, { opacity: 1 })
                          )
                          .start();
                    }
                  }),
                  (r.hide = function () {
                    var t;
                    g.stopAllByTarget(this.node);
                    var e = this.node.getComponent(u);
                    g.stopAllByTarget(e || void 0);
                    var o =
                        (null == (t = this.bg_transform)
                          ? void 0
                          : t.contentSize.height) || 0,
                      i = new h(-f.getSizeWidth() / 2 - o / 2, 0, 0);
                    d(this.node).to(0.3, { position: i }).start(),
                      d(this.node.getComponent(u))
                        .to(0.3, { opacity: 1 })
                        .start();
                  }),
                  e
                );
              })(m)).prototype,
              "message",
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
            (S = e(F.prototype, "icon", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = e(F.prototype, "bg_transform", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = e(F.prototype, "sprFrame_thongbao", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (z = F))
          ) || z)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/OTPPopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./PersistManager.ts",
    "./HttpManager.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, o, l, a, r, s, c, p, d, u, h, _, b, g, f, v;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (l = t.cclegacy),
            (a = t._decorator),
            (r = t.EditBox),
            (s = t.Button),
            (c = t.Label),
            (p = t.Sprite),
            (d = t.Node),
            (u = t.sys),
            (h = t.Texture2D),
            (_ = t.SpriteFrame);
        },
        function (t) {
          b = t.CommonPopup;
        },
        function (t) {
          g = t.GameConfigManager;
        },
        function (t) {
          f = t.PersistManager;
        },
        function (t) {
          v = t.httpManager;
        },
      ],
      execute: function () {
        var y,
          m,
          w,
          M,
          B,
          T,
          x,
          P,
          k,
          O,
          C,
          z,
          L,
          S,
          q,
          F,
          I,
          R,
          D,
          N,
          U,
          G,
          V,
          E,
          H,
          Q,
          j;
        l._RF.push({}, "edd72XrN0hOBLBQgimBcgLs", "OTPPopup", void 0);
        var A = a.ccclass,
          J = a.property;
        t(
          "OTPPopup",
          ((y = A("OTPPopup")),
          (m = J(r)),
          (w = J(r)),
          (M = J(s)),
          (B = J(s)),
          (T = J(c)),
          (x = J(c)),
          (P = J(c)),
          (k = J(c)),
          (O = J(p)),
          (C = J(s)),
          (z = J(d)),
          (L = J(d)),
          y(
            ((F = e(
              (q = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, l = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    l[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(l)) || this),
                    i(e, "edtBox_otp", F, o(e)),
                    i(e, "edtBox_cccd", I, o(e)),
                    i(e, "btn_sendOTP", R, o(e)),
                    i(e, "btn_copy", D, o(e)),
                    i(e, "lbl_otpMessage1", N, o(e)),
                    i(e, "lbl_otpMessage2", U, o(e)),
                    i(e, "lbl_qr_code", G, o(e)),
                    i(e, "lbl_bankTransferCode", V, o(e)),
                    i(e, "spr_capcha", E, o(e)),
                    i(e, "btn_close2", H, o(e)),
                    i(e, "node_type1", Q, o(e)),
                    i(e, "node_type2", j, o(e)),
                    (e.OTP_URL = ""),
                    (e.qr_code = ""),
                    (e.transactionId = ""),
                    (e.callback = null),
                    e
                  );
                }
                n(e, t);
                var l = e.prototype;
                return (
                  (l.onLoad = function () {
                    var e,
                      n,
                      i,
                      o = this;
                    t.prototype.onLoad.call(this),
                      null == (e = this.btn_close2) ||
                        e.node.on("click", function () {
                          o.hide();
                        }),
                      null == (n = this.btn_sendOTP) ||
                        n.node.on("click", function () {
                          var t,
                            e = o.OTP_URL;
                          if ("nourl" != e) {
                            var n =
                              (null == (t = o.edtBox_otp)
                                ? void 0
                                : t.string) || "";
                            if (0 != n.length)
                              if ("" == e) null == o.callback || o.callback(n);
                              else if (e == g.verifySmartPayOTPURL()) {
                                var i,
                                  l,
                                  a,
                                  r =
                                    null == (i = o.edtBox_cccd)
                                      ? void 0
                                      : i.string;
                                if (
                                  null != (l = o.edtBox_cccd) &&
                                  null != (a = l.node.parent) &&
                                  a.active &&
                                  0 == (null == r ? void 0 : r.length)
                                )
                                  return void f.showNoti("Vui lòng nhập CCCD.");
                                var s = { command: "verifyLoginSmartPayOTP" };
                                (s.transactionId = o.transactionId),
                                  (s.otp = n),
                                  (s.nationalId = r);
                                var c = JSON.stringify(s);
                                v.sendPOST({
                                  url: e,
                                  data: c,
                                  onCompleted: function (t) {
                                    null == o.callback || o.callback(t);
                                  },
                                });
                              } else
                                (e = e.replace("%otp%", n) || ""),
                                  v.sendGET({
                                    url: e,
                                    onCompleted: function (t) {
                                      null == o.callback || o.callback(t);
                                    },
                                  }),
                                  o.hide();
                            else f.showNoti("Vui lòng nhập mã OTP.");
                          } else o.hide();
                        }),
                      null == (i = this.btn_copy) ||
                        i.node.on("click", function () {
                          u.isBrowser &&
                            (null != window.navigator.clipboard &&
                            null != window.navigator.clipboard
                              ? window.navigator.clipboard
                                  .writeText(o.qr_code)
                                  .then(function () {
                                    f.showNoti("Bạn đã copy mã QR", null, 0, 0);
                                  })
                              : f.showNoti("Không hỗ trợ copy!"));
                        });
                  }),
                  (l.isFullFillInfo = function () {
                    var t;
                    return (
                      0 !=
                      (null == (t = this.edtBox_otp) ? void 0 : t.string.length)
                    );
                  }),
                  (l.showWithData = function (e, n, i, o, l, a, r) {
                    var s,
                      c,
                      p,
                      d,
                      u,
                      h = this;
                    (void 0 === a && (a = ""),
                    void 0 === r && (r = !0),
                    (this.OTP_URL = e),
                    (this.callback = l),
                    this.lbl_otpMessage1 && (this.lbl_otpMessage1.string = n),
                    this.lbl_otpMessage2 && (this.lbl_otpMessage2.string = n),
                    this.lbl_bankTransferCode &&
                      (this.lbl_bankTransferCode.string = a),
                    null != (s = this.lbl_bankTransferCode) &&
                      s.node.parent &&
                      (this.lbl_bankTransferCode.node.parent.active = "" != a),
                    this.edtBox_otp && (this.edtBox_otp.string = ""),
                    this.edtBox_cccd && (this.edtBox_cccd.string = ""),
                    null != (c = this.edtBox_cccd) &&
                      c.node.parent &&
                      (this.edtBox_cccd.node.parent.active = !1),
                    null != (p = this.edtBox_otp) &&
                      p.node.parent &&
                      (this.edtBox_otp.node.parent.active = "nourl" != e),
                    this.btn_close && (this.btn_close.node.active = r),
                    (this.qr_code = o),
                    this.lbl_qr_code && (this.lbl_qr_code.string = o),
                    "" != i && null != i && null != i)
                      ? (this.lbl_otpMessage1 &&
                          (this.lbl_otpMessage1.node.active = !1),
                        null != (d = this.lbl_otpMessage2) &&
                          d.node.parent &&
                          (this.lbl_otpMessage2.node.parent.active = !0),
                        this.base64ToSpriteFrame(i, function (t) {
                          h.spr_capcha && (h.spr_capcha.spriteFrame = t);
                        }),
                        this.node_type1 && (this.node_type1.active = !1),
                        this.node_type2 && (this.node_type2.active = !0))
                      : (this.lbl_otpMessage1 &&
                          (this.lbl_otpMessage1.node.active = !0),
                        null != (u = this.lbl_otpMessage2) &&
                          u.node.parent &&
                          (this.lbl_otpMessage2.node.parent.active = !1),
                        this.node_type1 && (this.node_type1.active = !0),
                        this.node_type2 && (this.node_type2.active = !1));
                    r ||
                      setTimeout(function () {
                        h.hide();
                      }, 12e4),
                      t.prototype.show.call(this);
                  }),
                  (l.showVerifySmartOTP = function (e, n, i, o, l, a, r, s) {
                    var c,
                      p,
                      d,
                      u,
                      h,
                      _ = this;
                    (void 0 === s && (s = !0),
                    (this.OTP_URL = e),
                    (this.callback = r),
                    (this.transactionId = n),
                    this.lbl_otpMessage1 && (this.lbl_otpMessage1.string = o),
                    this.lbl_otpMessage2 && (this.lbl_otpMessage2.string = o),
                    this.edtBox_otp && (this.edtBox_otp.string = ""),
                    this.edtBox_cccd && (this.edtBox_cccd.string = ""),
                    null != (c = this.edtBox_cccd) &&
                      c.node.parent &&
                      (this.edtBox_cccd.node.parent.active = i),
                    null != (p = this.edtBox_otp) &&
                      p.node.parent &&
                      (this.edtBox_otp.node.parent.active = !0),
                    null != (d = this.lbl_bankTransferCode) &&
                      d.node.parent &&
                      (this.lbl_bankTransferCode.node.parent.active = !1),
                    this.btn_close && (this.btn_close.node.active = s),
                    (this.qr_code = a),
                    this.lbl_qr_code && (this.lbl_qr_code.string = a),
                    "" != l && null != l && null != l)
                      ? (this.lbl_otpMessage1 &&
                          (this.lbl_otpMessage1.node.active = !1),
                        null != (u = this.lbl_otpMessage2) &&
                          u.node.parent &&
                          (this.lbl_otpMessage2.node.parent.active = !0),
                        this.base64ToSpriteFrame(l, function (t) {
                          _.spr_capcha && (_.spr_capcha.spriteFrame = t);
                        }),
                        this.node_type1 && (this.node_type1.active = !1),
                        this.node_type2 && (this.node_type2.active = !0))
                      : (this.lbl_otpMessage1 &&
                          (this.lbl_otpMessage1.node.active = !0),
                        null != (h = this.lbl_otpMessage2) &&
                          h.node.parent &&
                          (this.lbl_otpMessage2.node.parent.active = !1),
                        this.node_type1 && (this.node_type1.active = !0),
                        this.node_type2 && (this.node_type2.active = !1));
                    s ||
                      setTimeout(function () {
                        _.hide();
                      }, 12e4),
                      t.prototype.show.call(this);
                  }),
                  (l.base64ToSpriteFrame = function (t, e) {
                    if (u.isBrowser) {
                      var n = new Image();
                      (n.src = t),
                        (n.onload = function () {
                          var t = new h();
                          t.reset({ width: n.width, height: n.height }),
                            t.uploadData(n, 0, 0),
                            (t.loaded = !0);
                          var i = new _();
                          (i.texture = t), e(i);
                        });
                    }
                  }),
                  e
                );
              })(b)).prototype,
              "edtBox_otp",
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
            (I = e(q.prototype, "edtBox_cccd", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = e(q.prototype, "btn_sendOTP", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = e(q.prototype, "btn_copy", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(q.prototype, "lbl_otpMessage1", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = e(q.prototype, "lbl_otpMessage2", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = e(q.prototype, "lbl_qr_code", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = e(q.prototype, "lbl_bankTransferCode", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = e(q.prototype, "spr_capcha", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = e(q.prototype, "btn_close2", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = e(q.prototype, "node_type1", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = e(q.prototype, "node_type2", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = q))
          ) || S)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PersistentNodeController.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, r, n, i, o, s, l, c;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy), (s = e._decorator), (l = e.Node), (c = e.Component);
        },
      ],
      execute: function () {
        var a, u, p, d, f;
        o._RF.push(
          {},
          "c62bdViyN5KdIfEsx7PdAzQ",
          "PersistentNodeController",
          void 0
        );
        var m = s.ccclass,
          y = s.property;
        e(
          "PersistentNodeController",
          ((a = m("PersistentNodeController")),
          (u = y(l)),
          a(
            ((f = t(
              (d = (function (e) {
                function t() {
                  for (
                    var t, r = arguments.length, o = new Array(r), s = 0;
                    s < r;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    n(t, "mini_game_node", f, i(t)),
                    t
                  );
                }
                return (
                  r(t, e),
                  (t.prototype.getMiniGameNode = function () {
                    return this.mini_game_node;
                  }),
                  t
                );
              })(c)).prototype,
              "mini_game_node",
              [u],
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
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PersistManager.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./LoadingView.ts",
    "./NotiView.ts",
    "./CommonPopup.ts",
    "./LoginPopup.ts",
    "./OTPPopup.ts",
    "./BundleManager.ts",
    "./State.ts",
    "./InfoPopup.ts",
    "./EventManager.ts",
    "./Define.ts",
    "./AvatarFrames.ts",
  ],
  function (o) {
    "use strict";
    var n,
      i,
      t,
      e,
      a,
      r,
      u,
      p,
      s,
      l,
      h,
      d,
      m,
      c,
      f,
      v,
      P,
      _,
      g,
      b,
      D,
      w,
      C,
      y,
      I,
      O,
      L,
      T,
      S,
      R,
      k,
      z,
      M,
      E,
      N,
      A;
    return {
      setters: [
        function (o) {
          (n = o.applyDecoratedDescriptor),
            (i = o.inheritsLoose),
            (t = o.initializerDefineProperty),
            (e = o.assertThisInitialized),
            (a = o.asyncToGenerator),
            (r = o.regeneratorRuntime),
            (u = o.createClass);
        },
        function (o) {
          (p = o.cclegacy),
            (s = o._decorator),
            (l = o.UITransform),
            (h = o.Node),
            (d = o.director),
            (m = o.sys),
            (c = o.view),
            (f = o.ResolutionPolicy),
            (v = o.macro),
            (P = o.Vec3),
            (_ = o.instantiate),
            (g = o.size),
            (b = o.log),
            (D = o.Component);
        },
        function (o) {
          w = o.default;
        },
        function (o) {
          C = o.default;
        },
        function (o) {
          y = o.CommonPopup;
        },
        function (o) {
          I = o.LoginPopup;
        },
        function (o) {
          O = o.OTPPopup;
        },
        function (o) {
          L = o.bundleManager;
        },
        function (o) {
          (T = o.state), (S = o.NetworkState);
        },
        function (o) {
          R = o.InfoPopup;
        },
        function (o) {
          (k = o.eventManager), (z = o.EventKey);
        },
        function (o) {
          (M = o.DesignResolution), (E = o.Bundle), (N = o.LazyPriority);
        },
        function (o) {
          A = o.AvatarFrames;
        },
      ],
      execute: function () {
        var H, q, B, W, F, U, V, x, K, Z, G, j, X, J;
        p._RF.push({}, "b5796ZCUD1MhqRGXnblh5rM", "PersistManager", void 0);
        var Y = s.ccclass,
          Q = s.property,
          $ =
            (o(
              "PersistManager",
              ((H = Y("PersistManager")),
              (q = Q(l)),
              (B = Q(h)),
              (W = Q(h)),
              (F = Q(w)),
              (U = Q(C)),
              H(
                (((J = (function (o) {
                  function n() {
                    for (
                      var n, i = arguments.length, a = new Array(i), r = 0;
                      r < i;
                      r++
                    )
                      a[r] = arguments[r];
                    return (
                      (n = o.call.apply(o, [this].concat(a)) || this),
                      t(n, "responsive", K, e(n)),
                      t(n, "mini", Z, e(n)),
                      (n.miniTransform = void 0),
                      t(n, "popup_node", G, e(n)),
                      t(n, "loading", j, e(n)),
                      t(n, "noti", X, e(n)),
                      (n.commonPopup_Prefab = void 0),
                      (n.commonPopup = void 0),
                      (n.errorPopup = void 0),
                      (n.loginPopup_Prefab = void 0),
                      (n.loginPopup = void 0),
                      (n.otpPoup_Prefab = void 0),
                      (n.otpPoup = void 0),
                      (n.infoPopup_prefab = void 0),
                      (n.infoPopup = void 0),
                      (n._avatar = void 0),
                      (n._loadingList = []),
                      (n._hideLoadingId = 0),
                      (n._commonData = void 0),
                      (n._errorData = void 0),
                      (n._otpData = void 0),
                      (n._smartOtpData = void 0),
                      (n._infoData = void 0),
                      n
                    );
                  }
                  i(n, o),
                    (n.getInstance = function () {
                      return this._instance;
                    }),
                    (n.alert = (function (o) {
                      function n(n) {
                        return o.apply(this, arguments);
                      }
                      return (
                        (n.toString = function () {
                          return o.toString();
                        }),
                        n
                      );
                    })(function (o) {
                      alert("object" == typeof o ? JSON.stringify(o) : o);
                    }));
                  var p = n.prototype;
                  return (
                    (p.onLoad = function () {
                      var o = this;
                      (n._instance = this),
                        this.node.on(h.EventType.SIZE_CHANGED, function () {
                          return o.scheduleOnce(function () {
                            return o.updateResponsive();
                          }, 0.01);
                        }),
                        this.updateResponsive(),
                        d.on(
                          "INTEGRATION_BACK_TO_LOBBY",
                          a(
                            r().mark(function o() {
                              return r().wrap(function (o) {
                                for (;;)
                                  switch ((o.prev = o.next)) {
                                    case 0:
                                      return (o.next = 2), L.runLobby();
                                    case 2:
                                      m.isNative,
                                        c.setDesignResolutionSize(
                                          M.Width,
                                          M.Height,
                                          f.FIXED_WIDTH
                                        ),
                                        c.setOrientation(
                                          v.ORIENTATION_LANDSCAPE
                                        );
                                    case 5:
                                    case "end":
                                      return o.stop();
                                  }
                              }, o);
                            })
                          )
                        ),
                        k.on(z.IsMiniDownload, this, function (o, n) {
                          void 0 === n && (n = P.ZERO), o();
                        }),
                        k.on(z.LazyCommon, this, function (n, i) {
                          var t = n[0],
                            e = n[1],
                            a = n[2],
                            r = n[3],
                            u = n[4];
                          k.off(o, z.LazyCommon);
                          var p = t && _(t);
                          p &&
                            ((p.parent = o.node),
                            (o._avatar = p.getComponent(A) || void 0),
                            T.socketState == S.Logged &&
                              k.emit(z.CallLobbyLoadUserInfo),
                            (o.commonPopup_Prefab = e),
                            (o.infoPopup_prefab = a),
                            (o.loginPopup_Prefab = r),
                            (o.otpPoup_Prefab = u),
                            i.forEach(function (n) {
                              var i, t, e, a;
                              if (n === $.common)
                                o.showCommonPopup(
                                  (null == (i = o._commonData)
                                    ? void 0
                                    : i.msg) || "",
                                  null == (t = o._commonData) ? void 0 : t.onOK,
                                  null == (e = o._commonData)
                                    ? void 0
                                    : e.onCancel,
                                  null == (a = o._commonData)
                                    ? void 0
                                    : a.backScreenClick
                                ),
                                  (o._commonData = void 0);
                              else if (n === $.error) {
                                var r, u, p;
                                o.showErrorPopup(
                                  (null == (r = o._errorData)
                                    ? void 0
                                    : r.msg) || "",
                                  null == (u = o._errorData) ? void 0 : u.onOK,
                                  null == (p = o._errorData)
                                    ? void 0
                                    : p.onCancel
                                ),
                                  (o._errorData = void 0);
                              } else if (n === $.info) {
                                var s, l, h;
                                o.showInfoPopup(
                                  (null == (s = o._infoData)
                                    ? void 0
                                    : s.avatarURL) || "",
                                  (null == (l = o._infoData)
                                    ? void 0
                                    : l.username) || "",
                                  (null == (h = o._infoData)
                                    ? void 0
                                    : h.money) || 0
                                ),
                                  (o._infoData = void 0);
                              } else if (n === $.login) o.showLoginPopup();
                              else if (n === $.otp) {
                                var d, m, c, f, v, P, _;
                                o.showOTPPopup(
                                  (null == (d = o._otpData) ? void 0 : d.url) ||
                                    "",
                                  (null == (m = o._otpData)
                                    ? void 0
                                    : m.message) || "",
                                  (null == (c = o._otpData)
                                    ? void 0
                                    : c.qrbase64) || "",
                                  (null == (f = o._otpData)
                                    ? void 0
                                    : f.qr_code) || "",
                                  (null == (v = o._otpData)
                                    ? void 0
                                    : v.callback) || function () {},
                                  (null == (P = o._otpData)
                                    ? void 0
                                    : P.bankTransferCode) || "",
                                  (null == (_ = o._otpData)
                                    ? void 0
                                    : _.showCloseButton) || !0
                                ),
                                  (o._otpData = void 0);
                              } else if (n === $.smart_otp) {
                                var g, b, D, w, C, y, I, O;
                                o.showVerifySmartOTPPopup(
                                  (null == (g = o._smartOtpData)
                                    ? void 0
                                    : g.url) || "",
                                  (null == (b = o._smartOtpData)
                                    ? void 0
                                    : b.transactionId) || "",
                                  (null == (D = o._smartOtpData)
                                    ? void 0
                                    : D.isRequireNationalId) || !1,
                                  (null == (w = o._smartOtpData)
                                    ? void 0
                                    : w.message) || "",
                                  (null == (C = o._smartOtpData)
                                    ? void 0
                                    : C.qrbase64) || "",
                                  (null == (y = o._smartOtpData)
                                    ? void 0
                                    : y.qr_code) || "",
                                  (null == (I = o._smartOtpData)
                                    ? void 0
                                    : I.callback) || function () {},
                                  (null == (O = o._smartOtpData)
                                    ? void 0
                                    : O.showCloseButton) || !0
                                ),
                                  (o._smartOtpData = void 0);
                              }
                            }));
                        }),
                        L.loadLazy(E.base_common);
                    }),
                    (p.update = function (o) {
                      L.tick(o);
                    }),
                    (p.updateResponsive = function () {
                      var o, n, i, t, e, a;
                      if (this.responsive) {
                        var r =
                            (null == (o = this.node.getComponent(l))
                              ? void 0
                              : o.contentSize) || {},
                          u = r.width,
                          p = r.height;
                        if (u && p) {
                          var s = M.Width / M.Height,
                            h = 1,
                            d = 1,
                            c = m.isBrowser && u > p;
                          if (T.isPortrait && !c)
                            h = u / p > 1 / s ? p / M.Width : u / M.Height;
                          else
                            (h = u / p > s ? p / M.Height : u / M.Width),
                              T.isPortrait && c && (d = M.Height / M.Width);
                          this.responsive.node.setScale(h, h);
                          var f = g(u / h, p / h);
                          this.responsive.setContentSize(f),
                            null == (n = this.mini) || n.setScale(d, d),
                            (this.miniTransform =
                              (null == (i = this.mini)
                                ? void 0
                                : i.getComponent(l)) || void 0),
                            null == (t = this.miniTransform) ||
                              t.setContentSize(f.width / d, f.height / d),
                            b(
                              "PersistManager responsive",
                              T.isPortrait,
                              Math.round(u),
                              Math.round(p),
                              "=>",
                              h.toFixed(2),
                              Math.round(f.width),
                              Math.round(f.height),
                              d.toFixed(2),
                              Math.round(
                                (null == (e = this.miniTransform)
                                  ? void 0
                                  : e.contentSize.width) || 0
                              ),
                              Math.round(
                                (null == (a = this.miniTransform)
                                  ? void 0
                                  : a.contentSize.height) || 0
                              )
                            ),
                            this.scheduleOnce(function () {
                              return k.emit(z.AUTO_FIT_MINI_NODE);
                            }, 1),
                            T.isPortrait || k.emit(z.AUTO_FIT_MINI_NODE);
                        }
                      }
                    }),
                    (p.onDestroy = function () {
                      console.error("PersistManager.onDestroy");
                    }),
                    (p.getAvatarDefault = function (o) {
                      var n;
                      return (
                        void 0 === o && (o = null),
                        (null == (n = this._avatar)
                          ? void 0
                          : n.avatarDefault) || o
                      );
                    }),
                    (p.getAvatar = function (o, n, i, t) {
                      var e;
                      void 0 === i && (i = []), void 0 === t && (t = null);
                      var a = o.split("/"),
                        r = a[a.length - 1];
                      if (!r) return null;
                      var u = (
                          null != (e = this._avatar) && e.avatars.length
                            ? this._avatar.avatars
                            : i
                        ).filter(function (o) {
                          return r.indexOf(o.name) >= 0;
                        }),
                        p = u && u.length > 0 ? u[0] : this.getAvatarDefault(t);
                      return null == n || n(p), p;
                    }),
                    (p.showLoading = function (o, n) {
                      var i, t;
                      void 0 === o && (o = ""),
                        void 0 === n && (n = ""),
                        T.isLobbyReady &&
                          (o && this._loadingList.push(o),
                          (null != (i = this.loading) && i.IsShowing() && !n) ||
                            null == (t = this.loading) ||
                            t.show(n));
                    }),
                    (p.hideLoading = function (o) {
                      var n = this;
                      if (
                        (void 0 === o && (o = ""),
                        o &&
                          (this._loadingList = this._loadingList.filter(
                            function (n) {
                              return n !== o;
                            }
                          )),
                        0 === this._loadingList.length)
                      ) {
                        var i = Math.random();
                        (this._hideLoadingId = i),
                          this.scheduleOnce(function () {
                            var o;
                            n._hideLoadingId === i &&
                              (null == (o = n.loading) || o.hide());
                          }, 0.3);
                      } else b("don't hideLoading", this._loadingList);
                    }),
                    (p.showNoti = function (o, n, i, t, e) {
                      var a;
                      void 0 === n && (n = null),
                        void 0 === i && (i = 0),
                        void 0 === t && (t = oo.ERROR),
                        void 0 === e && (e = P.ZERO),
                        null == (a = this.notiView) ||
                          a.showMessage(o, n, i, t, e);
                    }),
                    (p.showCommonPopup = function (o, n, i, t) {
                      var e, a, r, u;
                      if ((void 0 === t && (t = !0), !this.commonPopup_Prefab))
                        return (
                          (this._commonData = {
                            msg: o,
                            onOK: n,
                            onCancel: i,
                            backScreenClick: t,
                          }),
                          void L.loadLazy(
                            E.base_common,
                            N.PopupCommonClick,
                            $.common
                          )
                        );
                      if (!this.commonPopup) {
                        var p =
                          this.commonPopup_Prefab && _(this.commonPopup_Prefab);
                        p && this.popup_node && (p.parent = this.popup_node),
                          (this.commonPopup =
                            (null == p ? void 0 : p.getComponent(y)) || void 0);
                      }
                      return (
                        b("showCommonPopup", o),
                        null != (e = this.commonPopup) &&
                          e.IsShowing() &&
                          this.commonPopup.hideImmediately(),
                        null == (a = this.commonPopup) ||
                          a.setPopup(o, n, i, t),
                        null == (r = this.commonPopup) ||
                          r.reCalculateResScale(),
                        null == (u = this.commonPopup) || u.show(),
                        !!this.commonPopup
                      );
                    }),
                    (p.hideCommonPopup = function () {
                      var o;
                      null == (o = this.commonPopup) || o.hide();
                    }),
                    (p.hideCommonPopupImmediately = function () {
                      var o;
                      null == (o = this.commonPopup) || o.hideImmediately();
                    }),
                    (p.showErrorPopup = function (o, n, i) {
                      var t, e;
                      if (!this.commonPopup_Prefab)
                        return (
                          (this._errorData = { msg: o, onOK: n, onCancel: i }),
                          void L.loadLazy(
                            E.base_common,
                            N.PopupCommonClick,
                            $.error
                          )
                        );
                      if (null == this.errorPopup) {
                        var a =
                          this.commonPopup_Prefab && _(this.commonPopup_Prefab);
                        a && this.popup_node && (a.parent = this.popup_node),
                          (this.errorPopup =
                            (null == a ? void 0 : a.getComponent(y)) || void 0);
                      }
                      return (
                        null == (t = this.errorPopup) ||
                          t.setPopup("Lỗi: " + o, n, i),
                        null == (e = this.errorPopup) || e.show(),
                        !!this.errorPopup
                      );
                    }),
                    (p.hideErrorPopup = function () {
                      var o;
                      null == (o = this.errorPopup) || o.hide();
                    }),
                    (p.showLoginPopup = function () {
                      var o;
                      if (this.commonPopup_Prefab) {
                        if (null == this.loginPopup) {
                          var n =
                            this.loginPopup_Prefab && _(this.loginPopup_Prefab);
                          n && this.popup_node && (n.parent = this.popup_node),
                            (this.loginPopup =
                              (null == n ? void 0 : n.getComponent(I)) ||
                              void 0);
                        }
                        null == (o = this.loginPopup) || o.show();
                      } else
                        L.loadLazy(E.base_common, N.PopupCommonClick, $.login);
                    }),
                    (p.hideLoginPopup = function () {
                      var o, n;
                      null != (o = this.loginPopup) &&
                        o.IsOpened() &&
                        (null == (n = this.loginPopup) || n.hide());
                    }),
                    (p.showOTPPopup = function (o, n, i, t, e, a, r) {
                      var u;
                      if (
                        (void 0 === a && (a = ""),
                        void 0 === r && (r = !0),
                        !this.commonPopup_Prefab)
                      )
                        return (
                          (this._otpData = {
                            url: o,
                            message: n,
                            qrbase64: i,
                            qr_code: t,
                            callback: e,
                            bankTransferCode: a,
                            showCloseButton: r,
                          }),
                          void L.loadLazy(
                            E.base_common,
                            N.PopupCommonClick,
                            $.otp
                          )
                        );
                      if (null == this.otpPoup) {
                        var p = this.otpPoup_Prefab && _(this.otpPoup_Prefab);
                        p && this.popup_node && (p.parent = this.popup_node),
                          (this.otpPoup =
                            (null == p ? void 0 : p.getComponent(O)) || void 0);
                      }
                      null == (u = this.otpPoup) ||
                        u.showWithData(o, n, i, t, e, a, r);
                    }),
                    (p.showVerifySmartOTPPopup = function (
                      o,
                      n,
                      i,
                      t,
                      e,
                      a,
                      r,
                      u
                    ) {
                      var p;
                      if ((void 0 === u && (u = !0), !this.commonPopup_Prefab))
                        return (
                          (this._smartOtpData = {
                            url: o,
                            transactionId: n,
                            isRequireNationalId: i,
                            message: t,
                            qrbase64: e,
                            qr_code: a,
                            callback: r,
                            showCloseButton: u,
                          }),
                          void L.loadLazy(
                            E.base_common,
                            N.PopupCommonClick,
                            $.smart_otp
                          )
                        );
                      if (null == this.otpPoup) {
                        var s = this.otpPoup_Prefab && _(this.otpPoup_Prefab);
                        s && this.popup_node && (s.parent = this.popup_node),
                          (this.otpPoup =
                            (null == s ? void 0 : s.getComponent(O)) || void 0);
                      }
                      null == (p = this.otpPoup) ||
                        p.showVerifySmartOTP(o, n, i, t, e, a, r, u);
                    }),
                    (p.hideOTPPopup = function () {
                      var o;
                      null == (o = this.otpPoup) || o.hide();
                    }),
                    (p.showInfoPopup = function (o, n, i) {
                      var t, e;
                      if (!this.commonPopup_Prefab)
                        return (
                          (this._infoData = {
                            avatarURL: o,
                            username: n,
                            money: i,
                          }),
                          void L.loadLazy(
                            E.base_common,
                            N.PopupCommonClick,
                            $.info
                          )
                        );
                      if (null == this.infoPopup) {
                        var a,
                          r,
                          u = this.infoPopup_prefab && _(this.infoPopup_prefab);
                        u &&
                          (u.parent = null != (a = this.popup_node) ? a : null),
                          (this.infoPopup =
                            null != (r = null == u ? void 0 : u.getComponent(R))
                              ? r
                              : null);
                      }
                      null == (t = this.infoPopup) || t.setInfo(o, n, i),
                        null == (e = this.infoPopup) || e.show();
                    }),
                    (p.hideInfoPopup = function () {
                      var o;
                      null == (o = this.infoPopup) || o.hide();
                    }),
                    (p.closeAllPopup = function () {
                      this.hideCommonPopup(),
                        this.hideErrorPopup(),
                        this.hideLoginPopup(),
                        this.hideOTPPopup(),
                        this.hideInfoPopup();
                    }),
                    (p.showMinigame = function (o) {
                      void 0 === o && (o = !0),
                        this.mini && (this.mini.active = o);
                    }),
                    u(n, [
                      {
                        key: "WIN_SIZE_WIDTH",
                        get: function () {
                          var o;
                          return (
                            (null == (o = this.miniTransform)
                              ? void 0
                              : o.contentSize.width) || M.Width
                          );
                        },
                      },
                      {
                        key: "WIN_SIZE_HEIGHT",
                        get: function () {
                          var o;
                          return (
                            (null == (o = this.miniTransform)
                              ? void 0
                              : o.contentSize.height) || M.Height
                          );
                        },
                      },
                      {
                        key: "avatarDefault",
                        get: function () {
                          return this.getAvatarDefault();
                        },
                      },
                      {
                        key: "isShowingLoading",
                        get: function () {
                          var o;
                          return !(null == (o = this.loading) || !o.IsShowing);
                        },
                      },
                      {
                        key: "notiView",
                        get: function () {
                          return this.noti;
                        },
                      },
                    ]),
                    n
                  );
                })(D))._instance = void 0),
                (J.showNoti = function () {
                  for (
                    var o, n = arguments.length, i = new Array(n), t = 0;
                    t < n;
                    t++
                  )
                    i[t] = arguments[t];
                  return null == (o = J._instance)
                    ? void 0
                    : o.showNoti.apply(o, i);
                }),
                (K = n((x = J).prototype, "responsive", [q], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: null,
                })),
                (Z = n(x.prototype, "mini", [B], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: null,
                })),
                (G = n(x.prototype, "popup_node", [W], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: null,
                })),
                (j = n(x.prototype, "loading", [F], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: null,
                })),
                (X = n(x.prototype, "noti", [U], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: null,
                })),
                (V = x))
              ) || V)
            ),
            {
              common: "common",
              error: "error",
              info: "info",
              login: "login",
              otp: "otp",
              smart_otp: "smart_otp",
            }),
          oo = o("NotiType", { NORMAL: 0, SUCCESS: 1, ERROR: 2 });
        p._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/PlayerView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BubbleChat.ts",
    "./StringUtils.ts",
    "./State.ts",
    "./EventManager.ts",
    "./PersistManager.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, l, a, o, s, r, u, h, c, _, d, v, y, p, b, m, g, f, w, N, B;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (l = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (s = t.Sprite),
            (r = t.Node),
            (u = t.sp),
            (h = t.Label),
            (c = t.Button),
            (_ = t.Vec3),
            (d = t.UITransform),
            (v = t.Tween),
            (y = t.UIOpacity),
            (p = t.tween),
            (b = t.Component);
        },
        function (t) {
          m = t.BubbleChat;
        },
        function (t) {
          g = t.StringUtils;
        },
        function (t) {
          f = t.state;
        },
        function (t) {
          (w = t.eventManager), (N = t.EventKey);
        },
        function (t) {
          B = t.PersistManager;
        },
      ],
      execute: function () {
        var A,
          C,
          I,
          T,
          x,
          z,
          P,
          U,
          S,
          M,
          D,
          O,
          F,
          V,
          k,
          L,
          R,
          E,
          H,
          Z,
          q,
          W,
          j,
          G,
          J,
          K,
          Q,
          X,
          Y,
          $,
          tt,
          et,
          it,
          nt,
          lt,
          at,
          ot,
          st,
          rt,
          ut,
          ht,
          ct,
          _t,
          dt,
          vt,
          yt,
          pt,
          bt,
          mt;
        a._RF.push({}, "393bfLI/xZJPpBTLyjAbMuD", "PlayerView", void 0);
        var gt = o.ccclass,
          ft = o.property,
          wt =
            (t("PlayerInfo", function () {
              (this.displayName = ""),
                (this.userName = ""),
                (this.gold = 0),
                (this.avatarURL = ""),
                (this.uid = ""),
                (this.isHost = !1);
            }),
            t("ShakeCoin", function () {
              (this.eid = -1), (this.coins = []);
            }));
        t(
          "PlayerView",
          ((A = gt("PlayerView")),
          (C = ft(s)),
          (I = ft(r)),
          (T = ft(u.Skeleton)),
          (x = ft(r)),
          (z = ft(r)),
          (P = ft(r)),
          (U = ft(h)),
          (S = ft(r)),
          (M = ft(h)),
          (D = ft(h)),
          (O = ft(s)),
          (F = ft(s)),
          (V = ft(r)),
          (k = ft(r)),
          (L = ft(r)),
          (R = ft(r)),
          (E = ft(r)),
          (H = ft(c)),
          (Z = ft(c)),
          (q = ft([r])),
          (W = ft([m])),
          (j = ft(Boolean)),
          (G = ft(_)),
          A(
            ((Q = e(
              (K = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "spr_avatar", Q, l(e)),
                    n(e, "avatar_light", X, l(e)),
                    n(e, "sp_avatar_light", Y, l(e)),
                    n(e, "result", $, l(e)),
                    n(e, "lose_fx", tt, l(e)),
                    n(e, "win_fx", et, l(e)),
                    n(e, "lbl_displayName", it, l(e)),
                    n(e, "icon", nt, l(e)),
                    n(e, "lbl_money", lt, l(e)),
                    n(e, "lbl_addmoney", at, l(e)),
                    n(e, "spr_host", ot, l(e)),
                    n(e, "spr_ready", st, l(e)),
                    n(e, "content", rt, l(e)),
                    n(e, "ig_bg_name_money", ut, l(e)),
                    n(e, "ig_bg_name_money2", ht, l(e)),
                    n(e, "out_pos", ct, l(e)),
                    n(e, "in_pos", _t, l(e)),
                    n(e, "btn_invite", dt, l(e)),
                    n(e, "btn_getout", vt, l(e)),
                    n(e, "money_positions", yt, l(e)),
                    n(e, "bubbleChats", pt, l(e)),
                    n(e, "is_hidden", bt, l(e)),
                    n(e, "posLblAddMoney", mt, l(e)),
                    (e.currentBubbleChatInd = 0),
                    (e.userID = ""),
                    (e.displayName = ""),
                    (e.money = 0),
                    (e.winning = 0),
                    (e.info = null),
                    (e.shakeDiskCoinsPath = []),
                    (e.betValue = [0, 0, 0, 0, 0, 0]),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.show = function () {
                    this.spr_avatar && (this.spr_avatar.node.active = !0),
                      this.lbl_displayName &&
                        (this.lbl_displayName.node.active = !0),
                      this.lbl_money && (this.lbl_money.node.active = !0),
                      this.icon && (this.icon.active = !0);
                  }),
                  (a.hide = function () {
                    this.spr_avatar && (this.spr_avatar.node.active = !1),
                      this.lbl_displayName &&
                        (this.lbl_displayName.node.active = !1),
                      this.lbl_money && (this.lbl_money.node.active = !1),
                      this.icon && (this.icon.active = !1);
                  }),
                  (a.getButtonGetout = function () {
                    return this.btn_getout;
                  }),
                  (a.addBetValue = function (t, e) {
                    this.betValue[t] && (this.betValue[t] += e);
                  }),
                  (a.getBetValue = function () {
                    return this.betValue;
                  }),
                  (a.resetBetValue = function () {
                    (this.shakeDiskCoinsPath = []),
                      (this.betValue = [0, 0, 0, 0, 0, 0]);
                  }),
                  (a.addShakeCoin = function (t, e) {
                    var i = this.shakeDiskCoinsPath.filter(function (e) {
                      return e.eid == t;
                    });
                    if (null == i || null == i || i.length <= 0) {
                      var n = new wt();
                      return (
                        (n.eid = t),
                        (n.coins = []),
                        n.coins.push(e),
                        void this.shakeDiskCoinsPath.push(n)
                      );
                    }
                    var l = i[0];
                    l && l.coins.push(e);
                  }),
                  (a.removeIgconito = function () {
                    this.setUserInfo(this.info);
                  }),
                  (a.setUserInfo = function (t, e) {
                    var i = this;
                    if ((void 0 === e && (e = !1), null == t))
                      return (
                        null != this.content &&
                          null != this.btn_invite &&
                          ((this.content.active = !1),
                          (this.btn_invite.node.active = !0),
                          this.icon && (this.icon.active = !1),
                          this.spr_avatar &&
                            (this.spr_avatar.node.active = this.content.active),
                          this.lbl_displayName &&
                            (this.lbl_displayName.node.active =
                              this.content.active),
                          this.lbl_money &&
                            (this.lbl_money.node.active = this.content.active),
                          null != this.ig_bg_name_money &&
                            (this.ig_bg_name_money.active =
                              this.content.active),
                          null != this.ig_bg_name_money2 &&
                            (this.ig_bg_name_money2.active =
                              this.content.active)),
                        (this.displayName = ""),
                        (this.userID = ""),
                        void (this.info = null)
                      );
                    null != this.content &&
                      null != this.btn_invite &&
                      ((this.content.active = !0),
                      (this.btn_invite.node.active = !1),
                      this.icon && (this.icon.active = !0),
                      this.spr_avatar &&
                        (this.spr_avatar.node.active = this.content.active),
                      this.lbl_displayName &&
                        (this.lbl_displayName.node.active =
                          this.content.active),
                      this.lbl_money &&
                        (this.lbl_money.node.active = this.content.active),
                      null != this.ig_bg_name_money &&
                        (this.ig_bg_name_money.active = this.content.active),
                      null != this.ig_bg_name_money2 &&
                        (this.ig_bg_name_money2.active = this.content.active)),
                      this.is_hidden ||
                        ((this.info = t),
                        (this.userID = t.uid),
                        e
                          ? (this.lbl_displayName &&
                              (this.lbl_displayName.string = ""),
                            (this.displayName = t.displayName || ""),
                            this.lbl_money && (this.lbl_money.string = ""),
                            this.spr_avatar &&
                              (this.spr_avatar.spriteFrame =
                                B.getInstance().avatarDefault || null))
                          : (this.lbl_displayName &&
                              (this.lbl_displayName.string =
                                t.displayName.length > 7
                                  ? t.displayName.substring(0, 7) + "..."
                                  : t.displayName),
                            (this.displayName = t.displayName || ""),
                            this.lbl_money &&
                              (this.lbl_money.string = g.formatMoneyNumber(
                                t.gold
                              )),
                            B.getInstance().getAvatar(
                              t.avatarURL,
                              function (t) {
                                i.spr_avatar &&
                                  (i.spr_avatar.spriteFrame =
                                    null == t
                                      ? B.getInstance().avatarDefault || null
                                      : t);
                              }
                            )),
                        null != this.spr_host &&
                          (this.spr_host.node.active = t.isHost));
                  }),
                  (a.showButtonGetout = function (t) {
                    void 0 === t && (t = !0),
                      null != this.btn_getout &&
                        (this.btn_getout.node.active = t);
                  }),
                  (a.isThisPlayer = function () {
                    return (
                      null != this.lbl_displayName &&
                      this.displayName == f.displayName
                    );
                  }),
                  (a.isHost = function () {
                    return null != this.info && this.info.isHost;
                  }),
                  (a.ready = function (t) {
                    void 0 === t && (t = !0),
                      this.spr_ready && (this.spr_ready.node.active = t);
                  }),
                  (a.isReady = function () {
                    var t;
                    return null == (t = this.spr_ready)
                      ? void 0
                      : t.node.active;
                  }),
                  (a.updateDisplayName = function (t, e) {
                    var i = this;
                    if (
                      (void 0 === t && (t = 23),
                      void 0 === e && (e = 15),
                      this.lbl_displayName)
                    ) {
                      var n, l;
                      this.lbl_displayName.fontSize = t;
                      var a =
                        ((null == (n = this.lbl_displayName.node.parent) ||
                        null == (l = n.getComponent(d))
                          ? void 0
                          : l.width) || 0) -
                        2 * e;
                      this.lbl_displayName.unscheduleAllCallbacks(),
                        this.lbl_displayName.schedule(function () {
                          var t;
                          i.lbl_displayName &&
                            i.lbl_displayName.string.length > 3 &&
                            ((null == (t = i.lbl_displayName.getComponent(d))
                              ? void 0
                              : t.width) || 0) > a &&
                            (i.lbl_displayName.string =
                              i.lbl_displayName.string.substr(
                                0,
                                i.lbl_displayName.string.length - 4
                              ) + "...");
                        });
                    }
                  }),
                  (a.getName = function () {
                    return null == this.lbl_displayName ? "" : this.displayName;
                  }),
                  (a.isVisible = function () {
                    return !this.is_hidden;
                  }),
                  (a.isEmpty = function () {
                    var t;
                    return null == (t = this.btn_invite)
                      ? void 0
                      : t.node.active;
                  }),
                  (a.getUID = function () {
                    return null == this.info ? "" : this.userID;
                  }),
                  (a.getUserName = function () {
                    return null == this.info ? "" : this.info.userName;
                  }),
                  (a.getMoneyPositions = function () {
                    return this.money_positions;
                  }),
                  (a.getIconMoneyPosition = function () {
                    return this.icon;
                  }),
                  (a.refresh = function () {
                    null != this.info &&
                      this.lbl_money &&
                      (this.lbl_money.string = g.formatMoneyNumber(
                        this.info.gold
                      ));
                  }),
                  (a.setMoney = function (t) {
                    null != this.info && ((this.info.gold = t), this.refresh());
                  }),
                  (a.getMoney = function () {
                    return null == this.info ? "" : this.info.gold;
                  }),
                  (a.stopAllAction = function () {
                    var t, e, i, n, l, a;
                    this.hideFxImmediately(),
                      v.stopAllByTarget(
                        (null == (t = this.spr_avatar) ? void 0 : t.node) ||
                          void 0
                      ),
                      null == (e = this.spr_avatar) ||
                        e.node.setScale(new _(0.674, 0.674, 0.674)),
                      v.stopAllByTarget(
                        null == (i = this.lbl_displayName) ? void 0 : i.node
                      ),
                      null == (n = this.lbl_displayName) ||
                        n.node.setScale(new _(1, 1, 1)),
                      v.stopAllByTarget(
                        null == (l = this.lbl_money) ? void 0 : l.node
                      ),
                      null == (a = this.lbl_money) ||
                        a.node.setScale(new _(1, 1, 1)),
                      null != this.ig_bg_name_money &&
                        (v.stopAllByTarget(this.ig_bg_name_money),
                        this.ig_bg_name_money.setScale(
                          new _(0.928, 0.928, 0.928)
                        ));
                  }),
                  (a.setWinAmount = function (t, e) {
                    void 0 === e && (e = !0),
                      this.lbl_addmoney &&
                        (this.lbl_addmoney.string =
                          (e ? "+" : "") + g.formatMoneyNumber(t)),
                      this.lbl_addmoney &&
                        this.lbl_addmoney.node.setPosition(this.posLblAddMoney),
                      null != this.win_fx && (this.win_fx.active = !0),
                      null != this.lose_fx && (this.lose_fx.active = !1);
                  }),
                  (a.setLoseAmount = function (t, e) {
                    void 0 === e && (e = !0),
                      this.lbl_addmoney &&
                        (this.lbl_addmoney.string =
                          (e ? "-" : "") + g.formatMoneyNumber(t)),
                      this.lbl_addmoney &&
                        this.lbl_addmoney.node.setPosition(new _(0, -7, 0)),
                      null != this.win_fx && (this.win_fx.active = !1),
                      null != this.lose_fx && (this.lose_fx.active = !1);
                  }),
                  (a.hideFxImmediately = function () {
                    var t, e, i, n;
                    v.stopAllByTarget(this.result || void 0),
                      v.stopAllByTarget(
                        (null == (t = this.result)
                          ? void 0
                          : t.getComponent(y)) || void 0
                      ),
                      v.stopAllByTarget(this.avatar_light || void 0),
                      v.stopAllByTarget(
                        (null == (e = this.avatar_light)
                          ? void 0
                          : e.getComponent(y)) || void 0
                      ),
                      this.result && (this.result.active = !1),
                      this.avatar_light && (this.avatar_light.active = !1),
                      this.sp_avatar_light &&
                        (this.sp_avatar_light.node.active = !1);
                    var l =
                      null == (i = this.avatar_light)
                        ? void 0
                        : i.getComponent(y);
                    l && (l.opacity = 1);
                    var a =
                      null == (n = this.result) ? void 0 : n.getComponent(y);
                    a && (a.opacity = 1);
                  }),
                  (a.showLoseFx = function (t, e, i) {
                    var n,
                      l,
                      a = this;
                    void 0 === i && (i = !0),
                      v.stopAllByTarget(this.result || void 0),
                      v.stopAllByTarget(
                        (null == (n = this.result)
                          ? void 0
                          : n.getComponent(y)) || void 0
                      ),
                      v.stopAllByTarget(this.avatar_light || void 0),
                      v.stopAllByTarget(
                        (null == (l = this.avatar_light)
                          ? void 0
                          : l.getComponent(y)) || void 0
                      );
                    var o = new _(0, -15, 0);
                    p(this.result)
                      .sequence(
                        p().delay(t),
                        p().call(function () {
                          var t, e;
                          a.setLoseAmount(a.winning, i),
                            a.refresh(),
                            w.emit(N.RefreshUserOnline),
                            a.result && (a.result.active = !0);
                          var n =
                            null == (t = a.result) ? void 0 : t.getComponent(y);
                          n && (n.opacity = 255),
                            null == (e = a.result) || e.setPosition(o),
                            null != a.lose_fx &&
                              null != a.lose_fx &&
                              (a.lose_fx.active = !0);
                        }),
                        p().by(
                          0.4,
                          { position: new _(0, 45, 0) },
                          { easing: "expoOut" }
                        ),
                        p().delay(e),
                        p().call(function () {
                          var t,
                            e =
                              null == (t = a.result)
                                ? void 0
                                : t.getComponent(y);
                          p(e)
                            .to(0.5, { opacity: 1 })
                            .call(function () {
                              a.result && (a.result.active = !1);
                            })
                            .start();
                        })
                      )
                      .start();
                  }),
                  (a.grayOut = function (t) {
                    var e, i, n, l;
                    void 0 === t && (t = !0);
                    var a =
                      null == (e = this.spr_avatar)
                        ? void 0
                        : e.getComponent(y);
                    a && (a.opacity = t ? 120 : 255);
                    var o =
                      null == (i = this.ig_bg_name_money2)
                        ? void 0
                        : i.getComponent(y);
                    o && (o.opacity = t ? 120 : 255);
                    var s =
                      null == (n = this.lbl_displayName)
                        ? void 0
                        : n.getComponent(y);
                    s && (s.opacity = t ? 120 : 255);
                    var r =
                      null == (l = this.lbl_money) ? void 0 : l.getComponent(y);
                    r && (r.opacity = t ? 120 : 255);
                  }),
                  (a.showWinFx = function (t, e, i) {
                    var n,
                      l,
                      a = this;
                    void 0 === i && (i = !0),
                      v.stopAllByTarget(this.result || void 0),
                      v.stopAllByTarget(
                        (null == (n = this.result)
                          ? void 0
                          : n.getComponent(y)) || void 0
                      ),
                      v.stopAllByTarget(this.avatar_light || void 0),
                      v.stopAllByTarget(
                        (null == (l = this.avatar_light)
                          ? void 0
                          : l.getComponent(y)) || void 0
                      );
                    var o = new _(
                      null != this.sp_avatar_light ? -6 : 0,
                      null != this.sp_avatar_light ? -5 : -15,
                      0
                    );
                    p(this.result)
                      .sequence(
                        p().delay(t),
                        p().call(function () {
                          a.setWinAmount(a.winning, i),
                            a.refresh(),
                            w.emit(N.RefreshUserOnline),
                            a.result && (a.result.active = !0),
                            a.sp_avatar_light &&
                              ((a.sp_avatar_light.node.active = !0),
                              a.sp_avatar_light.setAnimation(
                                0,
                                "animation",
                                !0
                              ),
                              a.grayOut()),
                            setTimeout(
                              function () {
                                var t,
                                  e,
                                  i =
                                    null == (t = a.result)
                                      ? void 0
                                      : t.getComponent(y);
                                i && (i.opacity = 255),
                                  null == (e = a.result) || e.setPosition(o);
                              },
                              null == a.sp_avatar_light ? 0 : 700
                            ),
                            null != a.lose_fx &&
                              null != a.lose_fx &&
                              (a.lose_fx.active = !1);
                        }),
                        p().to(
                          0.4,
                          {
                            position: new _(
                              0,
                              null != this.sp_avatar_light ? 0 : 30,
                              0
                            ),
                          },
                          { easing: "expoOut" }
                        ),
                        p().call(function () {
                          p(a.avatar_light)
                            .sequence(
                              p().call(function () {
                                var t,
                                  i =
                                    null == (t = a.avatar_light)
                                      ? void 0
                                      : t.getComponent(y);
                                i && (i.opacity = 1),
                                  a.sp_avatar_light ||
                                    (a.avatar_light &&
                                      (a.avatar_light.active = !0)),
                                  p(i)
                                    .sequence(
                                      p().to(0.5, { opacity: 255 }),
                                      p().delay(e),
                                      p().call(function () {
                                        a.sp_avatar_light &&
                                          ((a.sp_avatar_light.node.active = !1),
                                          a.grayOut(!1));
                                      }),
                                      p().to(0.5, { opacity: 1 }),
                                      p().call(function () {
                                        var t;
                                        a.avatar_light &&
                                          (a.avatar_light.active = !1);
                                        var e =
                                          null == (t = a.avatar_light)
                                            ? void 0
                                            : t.getComponent(y);
                                        e && (e.opacity = 1),
                                          v.stopAllByTarget(
                                            a.avatar_light || void 0
                                          ),
                                          v.stopAllByTarget(e || void 0);
                                      })
                                    )
                                    .start();
                              }),
                              p(a.avatar_light).repeatForever(
                                p(a.avatar_light)
                                  .by(5, { eulerAngles: new _(0, 0, 360) })
                                  .start()
                              )
                            )
                            .start();
                        }),
                        p().delay(e),
                        p().call(function () {
                          var t,
                            e =
                              null == (t = a.result)
                                ? void 0
                                : t.getComponent(y);
                          p(e)
                            .to(0.5, { opacity: 1 })
                            .call(function () {
                              a.result && (a.result.active = !1);
                            })
                            .start();
                        })
                      )
                      .start();
                  }),
                  (a.showBubbleChat = function (t, e) {
                    if (
                      (void 0 === e && (e = 5),
                      "" != t && null != t && null != t)
                    ) {
                      var i = this.bubbleChats[this.currentBubbleChatInd];
                      i && i.show(t, !this.is_hidden, e),
                        this.currentBubbleChatInd++,
                        this.currentBubbleChatInd >= this.bubbleChats.length &&
                          (this.currentBubbleChatInd = 0);
                    }
                  }),
                  (a.hideBubbleChat = function () {
                    var t = this.bubbleChats[this.currentBubbleChatInd];
                    t && t.hideImmedialy();
                  }),
                  (a.hideUserInfo = function () {
                    var t,
                      e,
                      i,
                      n,
                      l,
                      a,
                      o = this;
                    (v.stopAllByTarget(
                      (null == (t = this.spr_avatar) ? void 0 : t.node) ||
                        void 0
                    ),
                    p(
                      (null == (e = this.spr_avatar) ? void 0 : e.node) ||
                        void 0
                    )
                      .call(function () {
                        o.hideFxImmediately(),
                          o.setUserInfo(null),
                          o.node.setScale(_.ONE);
                      })
                      .to(0.2, { scale: _.ZERO })
                      .start(),
                    v.stopAllByTarget(
                      (null == (i = this.lbl_displayName) ? void 0 : i.node) ||
                        void 0
                    ),
                    p(
                      (null == (n = this.lbl_displayName) ? void 0 : n.node) ||
                        void 0
                    )
                      .call(function () {})
                      .to(0.2, { scale: _.ZERO })
                      .start(),
                    v.stopAllByTarget(
                      (null == (l = this.lbl_money) ? void 0 : l.node) || void 0
                    ),
                    p(
                      (null == (a = this.lbl_money) ? void 0 : a.node) || void 0
                    )
                      .call(function () {})
                      .to(0.2, { scale: _.ZERO })
                      .start(),
                    null != this.ig_bg_name_money) &&
                      (this.content &&
                        (this.ig_bg_name_money.active = this.content.active),
                      v.stopAllByTarget(this.ig_bg_name_money),
                      p(this.ig_bg_name_money)
                        .call(function () {})
                        .to(0.2, { scale: _.ZERO })
                        .start());
                    null != this.ig_bg_name_money2 &&
                      this.content &&
                      (this.ig_bg_name_money2.active = this.content.active);
                  }),
                  (a.updateNewUser = function (t, e) {
                    var i,
                      n,
                      l,
                      a,
                      o,
                      s,
                      r = this;
                    if ((void 0 === e && (e = !0), !e))
                      return this.hideFxImmediately(), void this.setUserInfo(t);
                    (this.hideBubbleChat(),
                    v.stopAllByTarget(
                      (null == (i = this.spr_avatar) ? void 0 : i.node) ||
                        void 0
                    ),
                    p(
                      (null == (n = this.spr_avatar) ? void 0 : n.node) ||
                        void 0
                    )
                      .call(function () {
                        r.hideFxImmediately(), r.setUserInfo(t);
                      })
                      .delay(0.1)
                      .to(0.2, { scale: new _(0.87, 0.87, 0.87) })
                      .to(0.2, { scale: new _(0.77, 0.77, 0.77) })
                      .start(),
                    v.stopAllByTarget(
                      (null == (l = this.lbl_displayName) ? void 0 : l.node) ||
                        void 0
                    ),
                    p(
                      (null == (a = this.lbl_displayName) ? void 0 : a.node) ||
                        void 0
                    )
                      .call(function () {})
                      .delay(0.1)
                      .to(0.2, { scale: new _(1.2, 1.2, 1.2) })
                      .to(0.2, { scale: new _(1.1, 1.1, 1.1) })
                      .start(),
                    v.stopAllByTarget(
                      (null == (o = this.lbl_money) ? void 0 : o.node) || void 0
                    ),
                    p(
                      (null == (s = this.lbl_money) ? void 0 : s.node) || void 0
                    )
                      .call(function () {})
                      .delay(0.1)
                      .to(0.2, { scale: new _(1.2, 1.2, 1.2) })
                      .to(0.2, { scale: new _(1.1, 1.1, 1.1) })
                      .start(),
                    null != this.ig_bg_name_money) &&
                      (this.content &&
                        (this.ig_bg_name_money.active = this.content.active),
                      v.stopAllByTarget(this.ig_bg_name_money),
                      p(this.ig_bg_name_money)
                        .call(function () {})
                        .delay(0.1)
                        .to(0.2, { scale: new _(1.2, 1.2, 1.2) })
                        .to(0.2, { scale: new _(1.1, 1.1, 1.1) })
                        .start());
                    null != this.ig_bg_name_money2 &&
                      this.content &&
                      (this.ig_bg_name_money2.active = this.content.active);
                  }),
                  (a.updateNewUserRongHo = function (t, e) {
                    var i,
                      n,
                      l,
                      a,
                      o,
                      s,
                      r,
                      u,
                      h,
                      c,
                      d = this;
                    if ((void 0 === e && (e = !0), !e))
                      return (
                        this.hideFxImmediately(),
                        this.setUserInfo(t),
                        null == (r = this.spr_avatar) ||
                          r.node.setScale(new _(0.912, 0.912, 0.912)),
                        null == (u = this.lbl_displayName) ||
                          u.node.setScale(_.ONE),
                        null == (h = this.lbl_money) || h.node.setScale(_.ONE),
                        void (
                          null == (c = this.ig_bg_name_money) ||
                          c.setScale(new _(0.807, 0.807, 0.807))
                        )
                      );
                    (v.stopAllByTarget(
                      (null == (i = this.spr_avatar) ? void 0 : i.node) ||
                        void 0
                    ),
                    p(
                      (null == (n = this.spr_avatar) ? void 0 : n.node) ||
                        void 0
                    )
                      .call(function () {
                        d.hideFxImmediately(), d.setUserInfo(t);
                      })
                      .delay(0.1)
                      .to(0.2, { scale: new _(1.012, 1.012, 1.012) })
                      .to(0.2, { scale: new _(0.912, 0.912, 0.912) })
                      .start(),
                    v.stopAllByTarget(
                      (null == (l = this.lbl_displayName) ? void 0 : l.node) ||
                        void 0
                    ),
                    p(
                      (null == (a = this.lbl_displayName) ? void 0 : a.node) ||
                        void 0
                    )
                      .call(function () {})
                      .delay(0.1)
                      .to(0.2, { scale: new _(1.1, 1.1, 1.1) })
                      .to(0.2, { scale: new _(1, 1, 1) })
                      .start(),
                    v.stopAllByTarget(
                      (null == (o = this.lbl_money) ? void 0 : o.node) || void 0
                    ),
                    p(
                      (null == (s = this.lbl_money) ? void 0 : s.node) || void 0
                    )
                      .call(function () {})
                      .delay(0.1)
                      .to(0.2, { scale: new _(1.1, 1.1, 1.1) })
                      .to(0.2, { scale: new _(1, 1, 1) })
                      .start(),
                    null != this.ig_bg_name_money) &&
                      (this.content &&
                        (this.ig_bg_name_money.active = this.content.active),
                      v.stopAllByTarget(this.ig_bg_name_money),
                      p(this.ig_bg_name_money)
                        .call(function () {})
                        .delay(0.1)
                        .to(0.2, { scale: new _(0.907, 0.907, 0.907) })
                        .to(0.2, { scale: new _(0.807, 0.807, 0.807) })
                        .start());
                    null != this.ig_bg_name_money2 &&
                      this.content &&
                      (this.ig_bg_name_money2.active = this.content.active);
                  }),
                  e
                );
              })(b)).prototype,
              "spr_avatar",
              [C],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (X = e(K.prototype, "avatar_light", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = e(K.prototype, "sp_avatar_light", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($ = e(K.prototype, "result", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (tt = e(K.prototype, "lose_fx", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (et = e(K.prototype, "win_fx", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (it = e(K.prototype, "lbl_displayName", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (nt = e(K.prototype, "icon", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (lt = e(K.prototype, "lbl_money", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (at = e(K.prototype, "lbl_addmoney", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ot = e(K.prototype, "spr_host", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (st = e(K.prototype, "spr_ready", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (rt = e(K.prototype, "content", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ut = e(K.prototype, "ig_bg_name_money", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ht = e(K.prototype, "ig_bg_name_money2", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ct = e(K.prototype, "out_pos", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_t = e(K.prototype, "in_pos", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (dt = e(K.prototype, "btn_invite", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (vt = e(K.prototype, "btn_getout", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (yt = e(K.prototype, "money_positions", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (pt = e(K.prototype, "bubbleChats", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (bt = e(K.prototype, "is_hidden", [j], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (mt = e(K.prototype, "posLblAddMoney", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new _(16, -7, 0);
              },
            })),
            (J = K))
          ) || J)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Sam_CardLib.ts",
  ["cc", "./Define.ts", "./MauBinh_CardLib.ts"],
  function (r) {
    "use strict";
    var t, e, n, i;
    return {
      setters: [
        function (r) {
          (t = r.cclegacy), (e = r._decorator);
        },
        function (r) {
          n = r.GameID;
        },
        function (r) {
          i = r.GameCard;
        },
      ],
      execute: function () {
        var o;
        t._RF.push({}, "23ecdzuEhlKU7M6XQdDAWFI", "Sam_CardLib", void 0);
        var u = e.ccclass;
        r(
          "default",
          u("Sam_CardLib")(
            (o = (function () {
              function r() {}
              return (
                (r.getCombination = function (t, e, n, o) {
                  for (var u = [], a = 0; a < n; a++) {
                    var h = new i();
                    u.push(h);
                  }
                  r.combinationUtil(t, e, n, 0, u, 0, o);
                }),
                (r.combinationUtil = function (t, e, o, u, a, h, f) {
                  if (u == o) {
                    var s = [];
                    return (
                      a.forEach(function (r) {
                        var t = new i();
                        t.decodeCard(r.serverCode, n.SAM), s.push(t);
                      }),
                      f.push(s),
                      s
                    );
                  }
                  if (!(h >= e)) {
                    var g = t[h];
                    (a[u] = g),
                      r.combinationUtil(t, e, o, u + 1, a, h + 1, f),
                      r.combinationUtil(t, e, o, u, a, h + 1, f);
                  }
                }),
                (r.sortVector = function (r, t) {
                  if (t)
                    for (var e = 0; e < r.length - 1; ) {
                      var n = r[e],
                        i = n.N,
                        o = n.S,
                        u = void 0;
                      for (u = e + 1; u < r.length; u++) {
                        var a = r[u],
                          h = a.N,
                          f = a.S;
                        if (i > h) {
                          var s = n;
                          (r[e] = r[u]), (r[u] = s), (e = 0);
                          break;
                        }
                        if (i == h && o < f) {
                          var g = n;
                          (r[e] = r[u]), (r[u] = g), (e = 0);
                          break;
                        }
                      }
                      (0 == e && u != r.length) || e++;
                    }
                  else
                    for (var c = 0; c < r.length - 1; ) {
                      var v = r[c],
                        l = v.N,
                        N = v.S,
                        d = void 0;
                      for (d = c + 1; d < r.length; d++) {
                        var p = r[d],
                          S = p.N,
                          m = p.S;
                        if (l > S) {
                          var b = v;
                          (r[c] = r[d]), (r[d] = b), (c = 0);
                          break;
                        }
                        if (l == S && N > m) {
                          var C = v;
                          (r[c] = r[d]), (r[d] = C), (c = 0);
                          break;
                        }
                      }
                      (0 == c && d != r.length) || c++;
                    }
                  return r;
                }),
                (r.sortList = function (r) {
                  if (0 == r.length) return r;
                  for (var t = 0; t < r.length - 1; ) {
                    var e = r[t],
                      n = void 0;
                    for (n = t + 1; n < r.length; n++) {
                      if (e > r[n]) {
                        var i = e;
                        (r[t] = r[n]), (r[n] = i), (t = 0);
                        break;
                      }
                    }
                    (0 == t && n != r.length) || t++;
                  }
                  return r;
                }),
                (r.getRecommendCards2 = function (t, e) {
                  for (var n = [], i = 1; i <= e.length; i++)
                    r.getCombination(e, e.length, i, n);
                  var o = [];
                  n.forEach(function (t) {
                    (t = r.sortVector(t, !1)),
                      (r.isPairs(t) ||
                        r.isStraight(t) ||
                        r.isStraight_Sam(t) ||
                        r.isFourOfAKind(t) ||
                        r.isThreeOfAKind(t)) &&
                        o.push(t);
                  });
                  for (var u = [], a = 0; a < o.length; a++) {
                    var h = o[a];
                    h &&
                      h.filter(function (r) {
                        return (
                          (e = r),
                          t.filter(function (r) {
                            return r.serverCode == e.serverCode;
                          }).length > 0
                        );
                        var e;
                      }).length >= t.length &&
                      h.length > u.length &&
                      (u = h);
                  }
                  return u;
                }),
                (r.getRecommendCards = function (t, e) {
                  var n = [];
                  if (1 == (t = r.sortVector(t, !1)).length) {
                    var i = t[0];
                    if (15 == i.N) n = r.getHigherFours2(0, e);
                    else
                      for (var o = 0; o < e.length; o++) {
                        var u = e[o];
                        if (u.N > i.N) {
                          n.push(u);
                          break;
                        }
                      }
                    return n;
                  }
                  if (r.isPairs(t)) {
                    if ((n = r.getHigherPairs(t, e, !0)).length > 0) return n;
                    if (
                      15 == t[0].N &&
                      (n = r.getFourOfAKindPair(e)).length > 0
                    )
                      return n;
                  }
                  return r.isThreeOfAKind(t)
                    ? r.getHigherThrees(t, e, !0)
                    : r.isFourOfAKind(t)
                    ? r.getHigherFours(t, e)
                    : r.isStraight_Sam(t)
                    ? r.getHigherStraight(t, e, !0)
                    : n;
                }),
                (r.isStraight = function (r) {
                  var t = !0;
                  if (r.length < 3) return !1;
                  for (var e = 0; e < r.length - 1; e++) {
                    var n = r[e].N,
                      i = r[e + 1].N;
                    if (15 == n || 15 == i) return !1;
                    t = t && n + 1 == i;
                  }
                  return t;
                }),
                (r.isStraight_Sam = function (t) {
                  for (var e = [], n = [], i = 0; i < t.length; i++) {
                    var o = t[i];
                    e.push(15 == o.N ? 2 : o.N),
                      n.push(15 == o.N ? 2 : 14 == o.N ? 1 : o.N);
                  }
                  return !!r.checkSanh_sam(e) || !!r.checkSanh_sam(n);
                }),
                (r.checkSanh_sam = function (t) {
                  if (t.length < 3) return !1;
                  for (
                    var e = !0, n = (t = r.sortList(t))[0], i = 1;
                    i < t.length;
                    i++
                  )
                    e = e && t[i] == n + i;
                  return e;
                }),
                (r.loaiboxamvatuquy = function (t) {
                  t = r.sortVector(t, !0);
                  for (var e = [], n = 0, i = 0, o = 0; o < t.length; o++)
                    n == t[o].N
                      ? ++i < 3 && e.push(t[o])
                      : ((i = 1), (n = t[o].N), e.push(t[o]));
                  return (t = r.sortVector(t, !1)), e;
                }),
                (r.loaiboxamdoivatuquy = function (t) {
                  t = r.sortVector(t, !0);
                  for (var e = [], n = 0, i = 0, o = 0; o < t.length; o++)
                    n == t[o].N
                      ? ++i < 2 && e.push(t[o])
                      : ((i = 1), (n = t[o].N), e.push(t[o]));
                  return (t = r.sortVector(t, !1)), e;
                }),
                (r.isPairs = function (r) {
                  return 2 == r.length && r[0].N == r[1].N;
                }),
                (r.isThreeOfAKind = function (r) {
                  return 3 == r.length && r[0].N == r[1].N && r[1].N == r[2].N;
                }),
                (r.isFourOfAKind = function (r) {
                  return (
                    4 == r.length &&
                    r[0].N == r[1].N &&
                    r[1].N == r[2].N &&
                    r[2].N == r[3].N
                  );
                }),
                (r.getHigherStraight = function (t, e, n) {
                  var i = r.loaiboxamdoivatuquy(e),
                    o = [];
                  if ((i = r.sortVector(i, !1)).length < t.length) return o;
                  var u = [],
                    a = [],
                    h = !1;
                  14 == t[t.length - 2].N && (h = !0);
                  for (var f = 0; f < i.length; f++) {
                    var s = i[f].N;
                    15 == s && (s = 2), u.push(s);
                  }
                  for (var g = 0; g < t.length; g++) {
                    var c = t[g].N;
                    15 == c && (c = 2), h && 14 == c && (c = 1), a.push(c);
                  }
                  (u = r.sortList(u)), (a = r.sortList(a));
                  for (var v = -1, l = 0; l < u.length; l++)
                    if (u[l] > a[0]) {
                      if (u.length - l < a.length) break;
                      var N = a.length - 1;
                      if (N == u[l + N] - u[l]) {
                        v = l;
                        break;
                      }
                    }
                  if (-1 != v)
                    for (var d = v; d < v + a.length; d++)
                      for (var p = 0; p < i.length; p++) {
                        var S = i[p],
                          m = S.N;
                        if ((15 == m && (m = 2), m == u[d])) {
                          o.push(S);
                          break;
                        }
                      }
                  return o;
                }),
                (r.getHigherPairs = function (t, e, n) {
                  var i = [];
                  if (e.length < 2) return i;
                  e = r.sortVector(e, !1);
                  for (var o = 0; o < e.length - 1; o++)
                    if (
                      !(
                        e[o].N < t[0].N ||
                        (e[o].N == t[0].N && n) ||
                        e[o].N != e[o + 1].N
                      )
                    ) {
                      if (e[o].N != t[0].N)
                        return i.push(e[o]), i.push(e[o + 1]), i;
                      if (e[o + 1].S > t[1].S)
                        return i.push(e[o]), i.push(e[o + 1]), i;
                    }
                  return i;
                }),
                (r.getHigherThrees = function (t, e, n) {
                  var i = [];
                  if (e.length < 3) return i;
                  e = r.sortVector(e, !1);
                  for (var o = 0; o < e.length - 2; o++)
                    if (
                      !(
                        e[o].N < t[0].N ||
                        (e[o].N == t[0].N && n) ||
                        e[o].N != e[o + 1].N ||
                        e[o + 1].N != e[o + 2].N
                      )
                    ) {
                      if (e[o].N != t[0].N)
                        return (
                          i.push(e[o]), i.push(e[o + 1]), i.push(e[o + 2]), i
                        );
                      if (e[o + 2].S > t[2].S)
                        return (
                          i.push(e[o]), i.push(e[o + 1]), i.push(e[o + 2]), i
                        );
                    }
                  return i;
                }),
                (r.getHigherFours = function (t, e) {
                  return r.getHigherFours2(t[0].N, e);
                }),
                (r.getHigherFours2 = function (t, e) {
                  var n = [];
                  if (e.length < 4) return n;
                  e = r.sortVector(e, !1);
                  for (var i = 0; i < e.length - 3; i++)
                    if (
                      !(e[i].N < t) &&
                      e[i].N == e[i + 1].N &&
                      e[i + 1].N == e[i + 2].N &&
                      e[i + 2].N == e[i + 3].N
                    )
                      return (
                        n.push(e[i]),
                        n.push(e[i + 1]),
                        n.push(e[i + 2]),
                        n.push(e[i + 3]),
                        n
                      );
                  return n;
                }),
                (r.getFourOfAKind = function (t) {
                  var e = [];
                  if ((t = r.sortVector(t, !1)).length < 4) return e;
                  for (var n = 0; n < t.length - 3; n++) {
                    var i = t[n],
                      o = t[n + 1],
                      u = t[n + 2],
                      a = t[n + 3];
                    if (i.N == o.N && o.N == u.N && u.N == a.N) {
                      e.push(t[n]),
                        e.push(t[n + 1]),
                        e.push(t[n + 2]),
                        e.push(t[n + 3]);
                      break;
                    }
                  }
                  return e;
                }),
                (r.getFourOfAKindPair = function (t) {
                  var e = [];
                  t.forEach(function (r) {
                    new i().decodeCard(r.serverCode, n.TIENLEN), e.push(r);
                  }),
                    (e = r.sortVector(e, !1));
                  var o = [],
                    u = [];
                  if (e.length < 8) return o;
                  if ((o = r.getFourOfAKind(e)).length > 0) {
                    for (
                      var a = function (r) {
                          var t = o[r];
                          e = e.filter(function (r) {
                            return r.serverCode != t.serverCode;
                          });
                        },
                        h = 0;
                      h < o.length;
                      h++
                    )
                      a(h);
                    (u = r.getFourOfAKind(e)).length > 0
                      ? u.forEach(function (r) {
                          o.push(r);
                        })
                      : (o = []);
                  }
                  return o;
                }),
                (r.isEquals = function (t, e) {
                  var n = t,
                    i = e;
                  if (
                    ((n = r.sortVector(n, !1)),
                    (i = r.sortVector(i, !1)),
                    n.length != i.length)
                  )
                    return !1;
                  for (var o = 0; o < n.length; o++)
                    if (n[o].N != i[o].N) return !1;
                  return !0;
                }),
                r
              );
            })())
          ) || o
        );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ScaleCmp.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, i, n, o, r, a, s, l, c, u;
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
            (a = e._decorator),
            (s = e.Vec3),
            (l = e.tween),
            (c = e.Tween),
            (u = e.Component);
        },
      ],
      execute: function () {
        var p, h, d, f, m, y, g, w, b;
        r._RF.push({}, "75004oWkDtN/r1G/Wi9q+UP", "ScaleCmp", void 0);
        var v = a.ccclass,
          S = a.property;
        e(
          "default",
          ((p = v("ScaleCmp")),
          (h = S(Number)),
          (d = S(Number)),
          (f = S(Boolean)),
          p(
            ((g = t(
              (y = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, r = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    n(t, "time", g, o(t)),
                    n(t, "to", w, o(t)),
                    n(t, "playOnStart", b, o(t)),
                    (t.originalScale = s.ONE),
                    t
                  );
                }
                i(t, e);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    ((this.originalScale = new s(this.node.scale)),
                    this.playOnStart) &&
                      l(this.node)
                        .repeatForever(
                          l(this.node).sequence(
                            l().to(this.time, {
                              scale: new s(this.to, this.to, 1),
                            }),
                            l().to(this.time, {
                              scale: new s(this.originalScale),
                            })
                          )
                        )
                        .start();
                  }),
                  (r.stop = function (e) {
                    void 0 === e && (e = s.ZERO),
                      c.stopAllByTarget(this.node),
                      (this.node.scale = new s(
                        null == e ? this.originalScale : e
                      ));
                  }),
                  (r.runOnce = function (e) {
                    void 0 === e && (e = 0.9),
                      c.stopAllByTarget(this.node),
                      l(this.node)
                        .sequence(
                          l().to(this.time, {
                            scale: new s(this.to, this.to, 1),
                          }),
                          l().to(this.time, { scale: new s(e, e, e) })
                        )
                        .start();
                  }),
                  (r.run = function (e) {
                    void 0 === e && (e = 0.9),
                      c.stopAllByTarget(this.node),
                      l(this.node)
                        .repeatForever(
                          l(this.node).sequence(
                            l().to(this.time, {
                              scale: new s(this.to, this.to, 1),
                            }),
                            l().to(this.time, { scale: new s(e, e, e) })
                          )
                        )
                        .start();
                  }),
                  t
                );
              })(u)).prototype,
              "time",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return 0.2;
                },
              }
            )),
            (w = t(y.prototype, "to", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0.5;
              },
            })),
            (b = t(y.prototype, "playOnStart", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (m = y))
          ) || m)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ScrollViewInfoPopup.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CommonPopup.ts"],
  function (o) {
    "use strict";
    var n, t, c, e;
    return {
      setters: [
        function (o) {
          n = o.inheritsLoose;
        },
        function (o) {
          (t = o.cclegacy), (c = o._decorator);
        },
        function (o) {
          e = o.CommonPopup;
        },
      ],
      execute: function () {
        var r;
        t._RF.push(
          {},
          "d32fbx24U9PQKIHgzcd5VjE",
          "ScrollViewInfoPopup",
          void 0
        );
        var u = c.ccclass;
        o(
          "ScrollViewInfoPopup",
          u("ScrollViewInfoPopup")(
            (r = (function (o) {
              function t() {
                return o.apply(this, arguments) || this;
              }
              return (
                n(t, o),
                (t.prototype.onLoad = function () {
                  o.prototype.onLoad.call(this);
                }),
                t
              );
            })(e))
          ) || r
        );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SettingPopup.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameConfigManager.ts"],
  function (i) {
    "use strict";
    var n, t, e, o, l, a, s, r, c, u, p, h, d, m, g, v;
    return {
      setters: [
        function (i) {
          (n = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (e = i.initializerDefineProperty),
            (o = i.assertThisInitialized);
        },
        function (i) {
          (l = i.cclegacy),
            (a = i._decorator),
            (s = i.Node),
            (r = i.UITransform),
            (c = i.Button),
            (u = i.director),
            (p = i.UIOpacity),
            (h = i.Vec3),
            (d = i.tween),
            (m = i.Size),
            (g = i.Component);
        },
        function (i) {
          v = i.GameConfigManager;
        },
      ],
      execute: function () {
        var S, P, f, b, w, O, y, x, z, _, R, k, C, D, E, W, Z, H;
        l._RF.push({}, "4fc739M3LhFpafA1ynqKg2d", "SettingPopup", void 0);
        var I = a.ccclass,
          A = a.property;
        i(
          "SettingPopup",
          ((S = I("SettingPopup")),
          (P = A(s)),
          (f = A(r)),
          (b = A(c)),
          (w = A(s)),
          (O = A(Boolean)),
          (y = A(Boolean)),
          (x = A(Boolean)),
          S(
            ((R = n(
              (_ = (function (i) {
                function n() {
                  for (
                    var n, t = arguments.length, l = new Array(t), a = 0;
                    a < t;
                    a++
                  )
                    l[a] = arguments[a];
                  return (
                    (n = i.call.apply(i, [this].concat(l)) || this),
                    e(n, "black_screen", R, o(n)),
                    e(n, "main", k, o(n)),
                    e(n, "btn_close", C, o(n)),
                    e(n, "root", D, o(n)),
                    e(n, "canClickOutSide", E, o(n)),
                    e(n, "donScale", W, o(n)),
                    e(n, "isPortrait", Z, o(n)),
                    e(n, "scale", H, o(n)),
                    (n.onClosed = null),
                    (n.flip = !1),
                    n
                  );
                }
                t(n, i);
                var l = n.prototype;
                return (
                  (l.onLoad = function () {
                    var i,
                      n,
                      t,
                      e = this;
                    this.flip =
                      ((null == (i = this.main) ? void 0 : i.node.scale.x) ||
                        0) < 0;
                    var o =
                      null == (n = this.black_screen)
                        ? void 0
                        : n.getComponent(c);
                    null != o &&
                      (null == o ||
                        o.node.on("click", function () {
                          e.canClickOutSide && e.close();
                        })),
                      null == (t = this.btn_close) ||
                        t.node.on("click", function () {
                          e.close();
                        });
                  }),
                  (l.IsShowing = function () {
                    var i;
                    return null == (i = this.black_screen) ? void 0 : i.active;
                  }),
                  (l.showImmediately = function () {
                    var i;
                    u.emit("HAS_POPUP_SHOW"),
                      null != this.root && (this.root.active = !0),
                      this.black_screen && (this.black_screen.active = !0),
                      this.main && (this.main.node.active = !0);
                    var n =
                      null == (i = this.main) ? void 0 : i.node.getComponent(p);
                    if ((n && (n.opacity = 255), this.flip)) {
                      var t, e, o;
                      this.donScale ||
                        (this.main &&
                          (this.main.node.scale = new h(
                            -v.getPopupScale().x,
                            v.getPopupScale().y,
                            v.getPopupScale().z
                          )));
                      var l =
                          (null == (t = this.main)
                            ? void 0
                            : t.node.position) || h.ZERO,
                        a = new h(l),
                        s =
                          (null == (e = this.main)
                            ? void 0
                            : e.contentSize.width) || 0;
                      (a.x =
                        0.5 * -v.getOriginalDesignResolutionWidth() +
                        s * v.getPopupScale().x * 0.5),
                        null == (o = this.main) || o.node.setPosition(a);
                    } else {
                      var r, c, d;
                      this.donScale ||
                        (this.main &&
                          (this.main.node.scale = new h(
                            v.getPopupScale().x,
                            v.getPopupScale().y,
                            v.getPopupScale().z
                          )));
                      var m =
                          (null == (r = this.main)
                            ? void 0
                            : r.node.position) || h.ZERO,
                        g = new h(m),
                        S =
                          (null == (c = this.main)
                            ? void 0
                            : c.contentSize.width) || 0;
                      (g.x =
                        0.5 * v.getOriginalDesignResolutionWidth() -
                        S * v.getPopupScale().x * 0.5),
                        null == (d = this.main) || d.node.setPosition(g);
                    }
                  }),
                  (l.show = function (i) {
                    var n;
                    u.emit("HAS_POPUP_SHOW", this.node.name),
                      null != this.root && (this.root.active = !0),
                      this.black_screen && (this.black_screen.active = !0),
                      this.main && (this.main.node.active = !0);
                    var t =
                      null == (n = this.main) ? void 0 : n.node.getComponent(p);
                    if ((t && (t.opacity = 255), this.flip))
                      if (
                        (this.donScale ||
                          this.isPortrait ||
                          (this.main &&
                            (this.main.node.scale = new h(
                              -v.getPopupScale().x,
                              v.getPopupScale().y,
                              v.getPopupScale().z
                            ))),
                        this.isPortrait)
                      ) {
                        var e,
                          o,
                          l,
                          a,
                          s = new m(720, 1560),
                          r =
                            (null == (e = this.main)
                              ? void 0
                              : e.node.position) || h.ZERO,
                          c = new h(r),
                          g =
                            (null == (o = this.main)
                              ? void 0
                              : o.contentSize.width) || 0;
                        (c.x = 0.5 * -s.width - 0.5 * g),
                          null == (l = this.main) || l.node.setPosition(c);
                        var S = new h(r);
                        (S.x += g + 5),
                          d(null == (a = this.main) ? void 0 : a.node)
                            .to(0.6, { position: S }, { easing: "expoOut" })
                            .start();
                      } else {
                        var P,
                          f,
                          b,
                          w,
                          O,
                          y,
                          x =
                            (null == (P = this.main)
                              ? void 0
                              : P.node.position) || h.ZERO,
                          z = new h(x),
                          _ =
                            (null == (f = this.main)
                              ? void 0
                              : f.contentSize.width) || 0;
                        (z.x =
                          0.5 * -v.getOriginalDesignResolutionWidth() -
                          _ * v.getPopupScale().x * 0.65),
                          null == (b = this.main) || b.node.setPosition(z);
                        var R =
                            (null == (w = this.main)
                              ? void 0
                              : w.node.position) || h.ZERO,
                          k = new h(R),
                          C =
                            (null == (O = this.main)
                              ? void 0
                              : O.contentSize.width) || 0;
                        (k.x =
                          0.5 * -v.getOriginalDesignResolutionWidth() +
                          C * v.getPopupScale().x * 0.5),
                          d(null == (y = this.main) ? void 0 : y.node)
                            .to(0.6, { position: k }, { easing: "expoOut" })
                            .start();
                      }
                    else {
                      var D, E, W, Z, H, I;
                      this.donScale ||
                        (this.main &&
                          (this.main.node.scale = new h(
                            v.getPopupScale().x,
                            v.getPopupScale().y,
                            v.getPopupScale().z
                          )));
                      var A =
                          (null == (D = this.main)
                            ? void 0
                            : D.node.position) || h.ZERO,
                        B = new h(A);
                      (B.x =
                        0.5 * v.getOriginalDesignResolutionWidth() +
                        ((null == (E = this.main)
                          ? void 0
                          : E.contentSize.width) || 0) *
                          v.getPopupScale().x *
                          0.65),
                        null == (W = this.main) || W.node.setPosition(B);
                      var U =
                          (null == (Z = this.main)
                            ? void 0
                            : Z.node.position) || h.ZERO,
                        L = new h(U),
                        M =
                          (null == (H = this.main)
                            ? void 0
                            : H.contentSize.width) || 0;
                      (L.x =
                        0.5 * v.getOriginalDesignResolutionWidth() -
                        M * v.getPopupScale().x * 0.5),
                        d(null == (I = this.main) ? void 0 : I.node)
                          .to(0.6, { position: L }, { easing: "expoOut" })
                          .start();
                    }
                  }),
                  (l.close = function () {
                    var i, n, t, e, o;
                    u.emit("HAS_POPUP_HIDE"),
                      null != this.root && (this.root.active = !1),
                      this.black_screen && (this.black_screen.active = !1),
                      this.main && (this.main.node.active = !1);
                    var l =
                      null == (i = this.main) ? void 0 : i.node.getComponent(p);
                    l && (l.opacity = 1),
                      this.donScale ||
                        this.isPortrait ||
                        (this.main && (this.main.node.scale = h.ZERO));
                    var a =
                        (null == (n = this.main) ? void 0 : n.node.position) ||
                        h.ZERO,
                      s = new h(a),
                      r =
                        (null == (t = this.main)
                          ? void 0
                          : t.contentSize.width) || 0;
                    (s.x =
                      0.5 * v.getOriginalDesignResolutionWidth() +
                      r * v.getPopupScale().x * 0.65),
                      null == (e = this.main) || e.node.setPosition(s),
                      null == (o = this.onClosed) || o.call(this);
                  }),
                  n
                );
              })(g)).prototype,
              "black_screen",
              [P],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (k = n(_.prototype, "main", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = n(_.prototype, "btn_close", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = n(_.prototype, "root", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = n(_.prototype, "canClickOutSide", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (W = n(_.prototype, "donScale", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (Z = n(_.prototype, "isPortrait", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (H = n(_.prototype, "scale", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 1;
              },
            })),
            (z = _))
          ) || z)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SharedResources.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var r, t, s, o;
    return {
      setters: [
        function (e) {
          r = e.inheritsLoose;
        },
        function (e) {
          (t = e.cclegacy), (s = e._decorator), (o = e.Component);
        },
      ],
      execute: function () {
        var c;
        t._RF.push({}, "8cf454xnXtIjIm5uKEyb7NU", "SharedResources", void 0);
        var n = s.ccclass;
        s.property,
          e(
            "SharedResources",
            n("SharedResources")(
              (c = (function (e) {
                function t() {
                  return e.apply(this, arguments) || this;
                }
                return r(t, e), (t.prototype.start = function () {}), t;
              })(o))
            ) || c
          );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SocketManager.ts",
  [
    "cc",
    "./State.ts",
    "./Define.ts",
    "./PersistManager.ts",
    "./GamePlatformManager.ts",
    "./EventManager.ts",
    "./BundleManager.ts",
    "./SocketReconnectHandler.ts",
    "./TrackingManager.ts",
    "./TrackingDefine.ts",
  ],
  function (e) {
    "use strict";
    var n, t, o, s, i, a, r, c, _, g, E, l, u, S, I, h, d;
    return {
      setters: [
        function (e) {
          (n = e.cclegacy),
            (t = e._decorator),
            (o = e.log),
            (s = e.sys),
            (i = e.url),
            (a = e.director);
        },
        function (e) {
          (r = e.NetworkState), (c = e.state);
        },
        function (e) {
          _ = e.StorageKey;
        },
        function (e) {
          g = e.PersistManager;
        },
        function (e) {
          E = e.GamePlatformManager;
        },
        function (e) {
          (l = e.eventManager), (u = e.EventKey);
        },
        function (e) {
          S = e.bundleManager;
        },
        function (e) {
          I = e.SocketReconnectHandler;
        },
        function (e) {
          h = e.tracking;
        },
        function (e) {
          d = e.TRACKING_ACTION_TYPE;
        },
      ],
      execute: function () {
        var f, R;
        n._RF.push({}, "ea4a0uBveVC0qhc129nvM18", "SocketManager", void 0);
        var N = t.ccclass,
          O = e(
            "SocketManager",
            N("SocketManager")(
              (((R = (function () {
                function e() {
                  (this.TIME_DELAY_RECONNECT = 5e3),
                    (this.TIME_DELAY_SHOW_POPUP = 500),
                    (this.TIME_DELAY_PING = 5e3),
                    (this._ws = void 0),
                    (this._url = ""),
                    (this._isError = !1),
                    (this._isCloseByManual = !1);
                }
                e.getInstance = function () {
                  return (
                    this._instance || (this._instance = new e()), this._instance
                  );
                };
                var n = e.prototype;
                return (
                  (n.IsNewSocket = function () {
                    return (
                      null == this._ws || this._ws.readyState !== WebSocket.OPEN
                    );
                  }),
                  (n.close = function () {
                    (this._isCloseByManual = !0),
                      this._ws &&
                        (this._ws.close(),
                        (this._ws.onopen = null),
                        (this._ws.onmessage = null),
                        (this._ws.onerror = null),
                        (this._ws.onclose = null),
                        (this._ws = void 0));
                  }),
                  (n.reconnect = function () {
                    var e = this;
                    setTimeout(function () {
                      var n = localStorage.getItem(_.isLastLoginSucceed),
                        t = c.socketState;
                      n !== "" + !0 ||
                        (t !== r.Logged && !e._isError) ||
                        (o("SocketManager.reconnect"), e.refreshInBackground());
                    }, this.TIME_DELAY_RECONNECT);
                  }),
                  (n.handleMessage = function (e) {
                    var n = this,
                      t = [];
                    try {
                      t = JSON.parse(e);
                    } catch (e) {}
                    var s = t[0];
                    if (s === L.LogIn_Response) {
                      o("LogIn_Response");
                      var i = t[1];
                      if (((c.socketState = i ? r.Logged : r.Unlogged), i)) {
                        var a;
                        h.sendTracking(d.LOGIN_SUCCESS),
                          o("Logged"),
                          null == (a = I.getInstance()) || a.checkConnection(1),
                          (c.isLoggedInOtherDevice = !1),
                          (c.isRefreshingInBackground = !1),
                          l.emit(u.CallLobbyCreateJackpotNode);
                      } else {
                        h.sendTracking(d.LOGIN_FAIL);
                        var E = t[5];
                        o("FAILED", JSON.stringify(t)),
                          localStorage.setItem(_.isLastLoginSucceed, "" + !1),
                          g.getInstance().showErrorPopup(E, function () {
                            return g.getInstance().hideErrorPopup();
                          }),
                          g.getInstance().hideLoading();
                      }
                    } else if (s === L.LogOut_Response) {
                      h.sendTracking(d.LOGOUT_SUCCESS),
                        (c.is_showing_notice = !0);
                      var S = +(t[2] || "");
                      if (1 === S);
                      else if (2 === S || 4 === S) {
                        l.emit(u.ForceLogoutSockets, [0, !0, S, 0, 0, ""]);
                        var f = "Bạn bị mời ra khỏi hệ thống!";
                        localStorage.setItem(_.isLastLoginSucceed, "" + !1),
                          localStorage.setItem("LOGIN_OTHER_DEVICE", "true"),
                          l.emitLast(u.SocketLogout, [0, !0, S, 0, 0, ""]),
                          4 === S &&
                            ((f = "Bạn đã đăng nhập trên thiết bị khác!"),
                            (c.isLoggedInOtherDevice = !0),
                            l.emit(u.LOGGED_IN_OTHER_DEVICE)),
                          setTimeout(function () {
                            g.getInstance().showCommonPopup(
                              f,
                              function () {
                                g.getInstance().hideCommonPopup(),
                                  n.forceLeaveRoom();
                              },
                              void 0,
                              !1
                            ) || g.showNoti(f, null, 0, 0);
                          }, this.TIME_DELAY_SHOW_POPUP);
                      }
                      (c.socketState = r.Unlogged),
                        l.emit(u.SocketUnlogged),
                        g.getInstance().hideLoading();
                    } else if (s === L.JoinRoom_Response)
                      l.emitLast(u.SocketJoinRoom, t);
                    else if (s === L.LeaveRoom_Response)
                      l.emitLast(u.SocketLeaveRoom, t);
                    else if (s === L.Extension_Response)
                      l.emitLast(u.SocketMessage, t).then(function (e) {
                        if (!e) {
                          var n = t[1] || {};
                          if (n.cmd === m.REFRESH_MONEY) {
                            var s = n.As || {},
                              i = s.gold,
                              a = s.safe;
                            if (void 0 === i) return;
                            (c.gold = i || 0),
                              (c.goldSafe = a || 0),
                              o("refresh money:" + c.gold),
                              l.emit(u.RefreshMoney, c.gold);
                          }
                        }
                      });
                    else if (s === L.Ping_Response) {
                      var R,
                        N = +(t[1] || "");
                      null == (R = I.getInstance()) || R.checkConnection(N);
                    } else o("\nUNKNOWN message");
                  }),
                  (n.init = function (e) {
                    var n = this;
                    o("Connecting to game server: " + e),
                      this._ws && (this.close(), l.emit(u.SocketClosed));
                    try {
                      s.Platform.ANDROID === s.platform
                        ? (this._ws = new WebSocket(
                            e,
                            null,
                            i.raw("resources/cacert.pem")
                          ))
                        : (this._ws = new WebSocket(e)),
                        (this._url = e);
                    } catch (e) {
                      (this._isError = !0), o("exception", e);
                    }
                    this._ws &&
                      ((this._ws.onopen = function () {
                        var t;
                        o(
                          "Connected to game server " +
                            e +
                            "," +
                            (null == (t = n._ws) ? void 0 : t.readyState)
                        ),
                          n.login(),
                          (n._isError = !1),
                          (n._isCloseByManual = !1);
                      }),
                      (this._ws.onmessage = function (e) {
                        return n.handleMessage(e.data);
                      }),
                      (this._ws.onerror = function (e) {
                        o("Send Text fired an error", e), (n._isError = !0);
                      }),
                      (this._ws.onclose = function () {
                        n._isCloseByManual
                          ? o("WebSocket closed by manual")
                          : o("WebSocket closed.");
                      }));
                  }),
                  (n.login = function () {
                    var e = {
                      info: c.loginInfo,
                      signature: c.signature,
                      pid: E.getPlatformID(),
                      subi: !0,
                    };
                    this.send([
                      T.LogIn_Type,
                      "Simms",
                      c.username,
                      c.password,
                      e,
                    ]);
                  }),
                  (n.refreshInBackground = function () {
                    c.isLoggedInOtherDevice
                      ? console.log("logged on other devices")
                      : (s.isNative && c.socketState === r.Unlogged) ||
                        ((c.socketState = r.Unlogged),
                        g.getInstance().showLoading(),
                        (c.isRefreshingInBackground = !0),
                        this.init(this._url));
                  }),
                  (n.send = function (e) {
                    var n;
                    if (
                      null != e &&
                      null != e &&
                      (null == (n = this._ws) ? void 0 : n.readyState) ===
                        WebSocket.OPEN
                    )
                      try {
                        var t;
                        null == (t = this._ws) ||
                          t.send(
                            "object" == typeof e ? JSON.stringify(e) : e || ""
                          );
                      } catch (e) {}
                  }),
                  (n.sendPing = function (e) {
                    if (
                      (void 0 === e && (e = 0), c.socketState !== r.Unlogged)
                    ) {
                      var n = [T.Ping_Type, "Simms", e + 1, 0, { id: 0 }],
                        t = JSON.stringify(n),
                        o = !1;
                      try {
                        JSON.parse(t);
                      } catch (e) {
                        o = !0;
                      }
                      o || A.send(n);
                    }
                  }),
                  (n.sendRefreshMoney = function () {
                    c.socketState !== r.Unlogged &&
                      this.send([
                        T.ZonePlugin_Type,
                        "Simms",
                        "channelPlugin",
                        { cmd: m.REFRESH_MONEY },
                      ]);
                  }),
                  (n.leaveRoom = function (e) {}),
                  (n.forceLeaveRoom = function () {
                    var e, n;
                    (null != (e = a.getScene()) && e.name.includes("web")) ||
                      (null != (n = a.getScene()) && n.name.includes("game")) ||
                      (l.emit(u.InfoPopupHide), S.runLobby());
                  }),
                  e
                );
              })())._instance = void 0),
              (f = R))
            ) || f
          ),
          A = e("socketManager", O.getInstance()),
          L = e("MessageResponse", {
            LogIn_Response: 1,
            LogOut_Response: 2,
            JoinRoom_Response: 3,
            LeaveRoom_Response: 4,
            Extension_Response: 5,
            Ping_Response: 6,
          }),
          T = e("MessageRequest", {
            LogIn_Type: 1,
            LogOut_Type: 2,
            JoinRoom_Type: 3,
            LeaveRoom_Type: 4,
            RoomPlugin_Type: 5,
            ZonePlugin_Type: 6,
            Ping_Type: 7,
          }),
          m = e("GLOBAL_MESSAGE", {
            ERROR_MESSAGE: 1,
            USER_INFO: 100,
            BROADCAST_MESSAGES: 101,
            VERIFY_PHONE_NUMBER: 103,
            MESSAGES_AND_NEWS: 104,
            PROMOTION_MESSAGE: 6,
            MESSAGE_INGAME: 7,
            FREE_GIFTCARD: 8,
            BROADCAST_MESSAGE: 10,
            SHOW_WEBVIEW: 12,
            GET_TABLES: 300,
            FIND_PLAYERS_TO_INVITE: 303,
            JOIN_TABLE_INVITATION: 305,
            QUICK_PLAY: 307,
            CREATE_TABLE: 308,
            REFRESH_MONEY: 310,
            CREATE_TABLE_RESPONSE: 311,
            QUICK_PLAY_WITH_BET: 313,
            BOOK_ROOM: 315,
            CANCEL_BOOKING_ROOM: 316,
            LOAN_MESSAGE: 322,
            GET_MAX_LOAN: 339,
            REFRESH_JARS: 335,
            GET_JACKPOTS: 317,
            INGAME_USER_READY: 5,
            INGAME_USER_CHAT: 102,
            INGAME_BAO_QUAY: 106,
            INGAME_USER_LEAVE_AND_JOIN_TABLE: 200,
            INGAME_JOIN_TABLE_INFOS: 202,
            INGAME_CHANGE_HOST: 203,
            INGAME_SEND_READY_TO_COUNT_DOWN: 204,
            INGAME_UPDATE_MONEY: 205,
            INGAME_JACKPOT: 206,
            INGAME_GET_JACKPOTS: 207,
            UPDATE_HIDDEN_USER_COUNT: 1105,
            UPDATE_HIDDEN_USER_ONLINE: 1106,
            MISSION_UNLOCK: 2e4,
          });
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SocketReconnectHandler.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SocketManager.ts",
    "./PersistManager.ts",
    "./State.ts",
  ],
  function (n) {
    "use strict";
    var t, e, o, c, i, a, s, r, l, h, u, f, g;
    return {
      setters: [
        function (n) {
          t = n.inheritsLoose;
        },
        function (n) {
          (e = n.cclegacy),
            (o = n._decorator),
            (c = n.game),
            (i = n.Game),
            (a = n.log),
            (s = n.tween),
            (r = n.Tween),
            (l = n.Component);
        },
        function (n) {
          h = n.socketManager;
        },
        function (n) {
          u = n.PersistManager;
        },
        function (n) {
          (f = n.state), (g = n.NetworkState);
        },
      ],
      execute: function () {
        var d, p;
        e._RF.push(
          {},
          "f8605iwH1NAcLfA+bXcNlgu",
          "SocketReconnectHandler",
          void 0
        );
        var k = o.ccclass;
        o.property,
          n(
            "SocketReconnectHandler",
            k("SocketReconnectHandler")(
              (((p = (function (n) {
                function e() {
                  for (
                    var t, e = arguments.length, o = new Array(e), c = 0;
                    c < e;
                    c++
                  )
                    o[c] = arguments[c];
                  return (
                    ((t =
                      n.call.apply(n, [this].concat(o)) || this).pingID = 0),
                    t
                  );
                }
                t(e, n),
                  (e.getInstance = function () {
                    return e.instance;
                  });
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    (e.instance = this), this.registerGlobalGameEvent();
                  }),
                  (o.onDestroy = function () {
                    try {
                      (e.instance = null),
                        this.offGlobalGameEvent(),
                        this.stopCheckConnection();
                    } catch (n) {}
                  }),
                  (o.registerGlobalGameEvent = function () {
                    c.on(i.EVENT_HIDE, this.onHideGame, this),
                      c.on(i.EVENT_SHOW, this.onShowGame, this);
                  }),
                  (o.offGlobalGameEvent = function () {
                    c.off(i.EVENT_HIDE, this.onHideGame, this),
                      c.off(i.EVENT_SHOW, this.onShowGame, this);
                  }),
                  (o.onHideGame = function () {}),
                  (o.onShowGame = function () {
                    f.socketState != g.Unlogged &&
                      (a("SocketReconnectHandler::onShowGame"),
                      this.checkConnection(this.pingID + 1, 0));
                  }),
                  (o.checkConnection = function (n, t) {
                    (void 0 === t && (t = 5), f.socketState != g.Unlogged) &&
                      ((this.pingID = n),
                      this.stopCheckConnection(),
                      s(this.node)
                        .repeat(
                          100,
                          s(this.node)
                            .delay(t)
                            .call(function () {
                              h.sendPing(n);
                            })
                            .delay(3)
                            .call(function () {
                              h.refreshInBackground();
                            })
                        )
                        .start());
                  }),
                  (o.stopCheckConnection = function () {
                    r.stopAllByTarget(this.node), u.getInstance().hideLoading();
                  }),
                  (o.loggedOut = function () {
                    this.stopCheckConnection();
                  }),
                  e
                );
              })(l)).instance = null),
              (d = p))
            ) || d
          );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SoundButtonCmp.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SoundManager.ts"],
  function (t) {
    "use strict";
    var n, o, e, i, c, r, u, a, l, s, p;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (c = t.cclegacy),
            (r = t._decorator),
            (u = t.AudioClip),
            (a = t.Button),
            (l = t.Toggle),
            (s = t.Component);
        },
        function (t) {
          p = t.SoundManager;
        },
      ],
      execute: function () {
        var f, d, g, h, _;
        c._RF.push({}, "a3968sIGj1O9K8ac5EffFKQ", "SoundButtonCmp", void 0);
        var y = r.ccclass,
          S = r.property;
        t(
          "default",
          ((f = y("SoundButtonCmp")),
          (d = S(u)),
          f(
            ((_ = n(
              (h = (function (t) {
                function n() {
                  for (
                    var n, o = arguments.length, c = new Array(o), r = 0;
                    r < o;
                    r++
                  )
                    c[r] = arguments[r];
                  return (
                    (n = t.call.apply(t, [this].concat(c)) || this),
                    e(n, "sfx_button_click", _, i(n)),
                    n
                  );
                }
                o(n, t);
                var c = n.prototype;
                return (
                  (c.onLoad = function () {
                    var t,
                      n = this,
                      o = this.node.getComponent(a);
                    o
                      ? o.node.on("click", function () {
                          p.getInstance().playOneShotSfx(n.sfx_button_click);
                        })
                      : null == (t = this.node.getComponent(l)) ||
                        t.node.on("toggle", function () {
                          p.getInstance().playOneShotSfx(n.sfx_button_click);
                        });
                  }),
                  (c.playSfx = function () {
                    p.getInstance().playOneShotSfx(this.sfx_button_click);
                  }),
                  n
                );
              })(s)).prototype,
              "sfx_button_click",
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
            (g = h))
          ) || g)
        );
        c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SoundManager.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./EventManager.ts",
    "./Define.ts",
  ],
  function (o) {
    "use strict";
    var i, e, t, u, n, a, s, l, r, c, d, _, g;
    return {
      setters: [
        function (o) {
          (i = o.applyDecoratedDescriptor),
            (e = o.inheritsLoose),
            (t = o.initializerDefineProperty),
            (u = o.assertThisInitialized);
        },
        function (o) {
          (n = o.cclegacy),
            (a = o._decorator),
            (s = o.AudioSource),
            (l = o.instantiate),
            (r = o.tween),
            (c = o.Component);
        },
        function (o) {
          (d = o.eventManager), (_ = o.EventKey);
        },
        function (o) {
          g = o.StorageKey;
        },
      ],
      execute: function () {
        var f, m, p, h, S, v, b, x, y, M;
        n._RF.push({}, "e9f61hb8NNFgJb0v+00f9y9", "SoundManager", void 0);
        var I = a.ccclass,
          A = a.property;
        o(
          "SoundManager",
          ((f = I("SoundManager")),
          (m = A(s)),
          (p = A(s)),
          (h = A(s)),
          f(
            (((M = (function (o) {
              function i() {
                for (
                  var i, e = arguments.length, n = new Array(e), a = 0;
                  a < e;
                  a++
                )
                  n[a] = arguments[a];
                return (
                  (i = o.call.apply(o, [this].concat(n)) || this),
                  t(i, "bgm_audio_source", b, u(i)),
                  t(i, "sfx_audio_source", x, u(i)),
                  t(i, "sfx_audio_source_additional", y, u(i)),
                  (i.additional_audio_sources_cmps = []),
                  i
                );
              }
              e(i, o),
                (i.getInstance = function () {
                  return i.instance;
                });
              var n = i.prototype;
              return (
                (n.onLoad = function () {
                  var o = this;
                  i.instance = this;
                  var e = localStorage.getItem(g.SoundFX),
                    t = localStorage.getItem(g.Music);
                  (null != e && null != e) ||
                    localStorage.setItem(g.SoundFX, "1"),
                    (null != t && null != t) ||
                      localStorage.setItem(g.Music, "1");
                  var u =
                      "1" == localStorage.getItem(g.SoundFX) ||
                      "true" == localStorage.getItem(g.SoundFX),
                    n =
                      "1" == localStorage.getItem(g.Music) ||
                      "true" == localStorage.getItem(g.Music);
                  d.on(_.MusicToggle, this, function (i) {
                    o.bgm_audio_source &&
                      (o.bgm_audio_source.volume = i ? 1 : 0),
                      d.emit(_.RefreshGameSetting);
                  }),
                    d.on(_.SoundToggle, this, function (i) {
                      o.sfx_audio_source &&
                        (o.sfx_audio_source.volume = i ? 1 : 0),
                        o.sfx_audio_source_additional &&
                          (o.sfx_audio_source_additional.volume = i ? 1 : 0),
                        o.additional_audio_sources_cmps.forEach(function (o) {
                          o.volume = i ? 1 : 0;
                        }),
                        d.emit(_.RefreshGameSetting);
                    }),
                    d.emit(_.MusicToggle, n),
                    d.emit(_.SoundToggle, u);
                }),
                (n.reload = function () {
                  var o =
                      "1" == localStorage.getItem(g.SoundFX) ||
                      "true" == localStorage.getItem(g.SoundFX),
                    i =
                      "1" == localStorage.getItem(g.Music) ||
                      "true" == localStorage.getItem(g.Music);
                  d.emit(_.MusicToggle, i), d.emit(_.SoundToggle, o);
                }),
                (n.isEnableBGM = function () {
                  return (
                    "1" == localStorage.getItem(g.Music) ||
                    "true" == localStorage.getItem(g.Music)
                  );
                }),
                (n.setBgmVolume = function (o) {
                  this.bgm_audio_source && (this.bgm_audio_source.volume = o);
                }),
                (n.setSfxVolume = function (o) {
                  this.sfx_audio_source && (this.sfx_audio_source.volume = o);
                }),
                (n.stopBgm = function () {
                  this.bgm_audio_source && this.bgm_audio_source.stop();
                }),
                (n.playBgm = function (o, e, t, u) {
                  var n, a;
                  void 0 === e && (e = !0),
                    void 0 === t && (t = !1),
                    i.IS_CAN_PLAY_BGM &&
                      (t ||
                        null ==
                          (null == (n = this.bgm_audio_source)
                            ? void 0
                            : n.clip) ||
                        this.bgm_audio_source.clip.name !=
                          (null == o ? void 0 : o.name)) &&
                      (this.bgm_audio_source && this.bgm_audio_source.stop(),
                      this.bgm_audio_source && (this.bgm_audio_source.clip = o),
                      this.bgm_audio_source && (this.bgm_audio_source.loop = e),
                      null == (a = this.bgm_audio_source) || a.play());
                }),
                (n.isPlaying = function (o) {
                  var i;
                  return (
                    (null == (i = this.bgm_audio_source)
                      ? void 0
                      : i.playing) && this.bgm_audio_source.clip == o
                  );
                }),
                (n.playSfx = function (o, i) {
                  var e;
                  void 0 === i && (i = !1),
                    o &&
                      (this.sfx_audio_source &&
                        (this.sfx_audio_source.loop = i),
                      this.sfx_audio_source && this.sfx_audio_source.stop(),
                      this.sfx_audio_source && (this.sfx_audio_source.clip = o),
                      null == (e = this.sfx_audio_source) || e.play());
                }),
                (n.playOneShotSfx = function (o) {
                  var i;
                  o &&
                    null != this.sfx_audio_source &&
                    (null == (i = this.sfx_audio_source) || i.playOneShot(o));
                }),
                (n.stopSfx = function () {
                  var o;
                  null == (o = this.sfx_audio_source) || o.stop();
                }),
                (n.playAdditionalSfx = function (o, i) {
                  var e,
                    t,
                    u = this;
                  void 0 === i && (i = !1);
                  var n = l(
                    null == (e = this.sfx_audio_source_additional)
                      ? void 0
                      : e.node
                  );
                  n &&
                    (n.parent =
                      (null == (t = this.sfx_audio_source_additional)
                        ? void 0
                        : t.node.parent) || null);
                  var a = null == n ? void 0 : n.getComponent(s);
                  a && this.additional_audio_sources_cmps.push(a),
                    null == a || a.stop(),
                    a && (a.clip = o),
                    a && (a.loop = i),
                    null == a || a.play(),
                    !i &&
                      o &&
                      r(n)
                        .delay(o.getDuration())
                        .call(function () {
                          u.stopAdditionalSfx(o);
                        })
                        .start();
                }),
                (n.stopAdditionalSfx = function (o) {
                  for (
                    var i = -1, e = 0;
                    e < this.additional_audio_sources_cmps.length;
                    e++
                  ) {
                    var t = this.additional_audio_sources_cmps[e];
                    if (
                      t &&
                      null != t.clip &&
                      null != t.clip &&
                      t.clip.name == o.name &&
                      null != t &&
                      null != t &&
                      null != t.node &&
                      null != t.node
                    ) {
                      t.stop(), t.node.destroy(), (i = e);
                      break;
                    }
                  }
                  -1 != i && this.additional_audio_sources_cmps.splice(i, 1);
                }),
                (n.stopAllAdditionalSfx = function () {
                  this.additional_audio_sources_cmps.forEach(function (o) {
                    null != o &&
                      null != o &&
                      null != o.node &&
                      null != o.node &&
                      (o.stop(), o.node.destroy());
                  });
                }),
                i
              );
            })(c)).instance = void 0),
            (M.IS_CAN_PLAY_BGM = !1),
            (b = i((v = M).prototype, "bgm_audio_source", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = i(v.prototype, "sfx_audio_source", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = i(v.prototype, "sfx_audio_source_additional", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = v))
          ) || S)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SpriteSwapToggle.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, o, i, n, r, s;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy),
            (i = t._decorator),
            (n = t.Toggle),
            (r = t.Sprite),
            (s = t.Component);
        },
      ],
      execute: function () {
        var g;
        o._RF.push({}, "4dfdeO8Y/9LF7JLiRx68s1y", "SpriteSwapToggle", void 0);
        var l = i.ccclass;
        i.property,
          t(
            "SpriteSwapToggle",
            l("SpriteSwapToggle")(
              (g = (function (t) {
                function o() {
                  for (
                    var e, o = arguments.length, i = new Array(o), n = 0;
                    n < o;
                    n++
                  )
                    i[n] = arguments[n];
                  return (
                    ((e = t.call.apply(t, [this].concat(i)) || this).toggle =
                      null),
                    (e.sprite = null),
                    e
                  );
                }
                return (
                  e(o, t),
                  (o.prototype.onLoad = function () {
                    var t = this;
                    (this.toggle = this.getComponent(n)),
                      (this.sprite = this.getComponent(r)),
                      this.toggle &&
                        this.sprite &&
                        this.toggle.node.on("toggle", function () {
                          t.sprite &&
                            t.toggle &&
                            (t.sprite.enabled = !t.toggle.isChecked);
                        });
                  }),
                  o
                );
              })(s))
            ) || g
          );
        o._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/State.ts", ["cc"], function (i) {
  "use strict";
  var s;
  return {
    setters: [
      function (i) {
        s = i.cclegacy;
      },
    ],
    execute: function () {
      s._RF.push({}, "d7542JBf6RIxKERXVYDhe0T", "State", void 0);
      var t = i("NetworkState", { Unlogged: 0, Logged: 1 });
      i("GameState", { Waiting: 0, Playing: 1, Viewing: 2 }),
        i(
          "state",
          new (function () {
            (this.serverAccessToken = ""),
              (this.serverRefreshToken = ""),
              (this.baucuaLiveStreamToken = ""),
              (this.socketState = t.Unlogged),
              (this.isRefreshingInBackground = !1),
              (this.isLoggedInOtherDevice = !1),
              (this.isSwitchingServer = !1),
              (this.signature = ""),
              (this.loginInfo = ""),
              (this.username = ""),
              (this.password = ""),
              (this.sessionId = ""),
              (this.displayName = ""),
              (this.gold = 0),
              (this.goldSafe = 0),
              (this.customerID = ""),
              (this.userID = ""),
              (this.userName = ""),
              (this.avatarURL = ""),
              (this.phoneNumber = ""),
              (this.verifiedBankAccount = !1),
              (this.isLobbyFromLoading = !1),
              (this.isLobbyReady = !1),
              (this.isLobbyLoggedIn = !1),
              (this.isDisplayingTextInput = !1),
              (this.isNativeDownloading = !1),
              (this.isLoadingRoomList = !1),
              (this.lastGameId = 0),
              (this.backToLobbyFromGameRoom = !1),
              (this.is_showing_notice = !0),
              (this.isLoadingMiniGame = !1),
              (this.roomId = 0),
              (this.roomPassword = ""),
              (this.roomServer = 0),
              (this.roomBet = 0),
              (this.minigameIsShowingGame = function () {
                return !1;
              }),
              (this.minigamesIsOverlap = function (i) {
                return !1;
              }),
              (this.isPortrait = !1);
          })()
        );
      s._RF.pop();
    },
  };
});

System.register("chunks:///_virtual/StringUtils.ts", ["cc"], function (t) {
  "use strict";
  var e;
  return {
    setters: [
      function (t) {
        e = t.cclegacy;
      },
    ],
    execute: function () {
      e._RF.push({}, "3f0ccScIVlJKYfeohegKLFo", "StringUtils", void 0);
      t(
        "StringUtils",
        (function () {
          function t() {}
          return (
            (t.isNonAccent = function (t) {
              return t.normalize("NFD").replace(/[\u0300-\u036f]/g, "") == t;
            }),
            (t.hasSpecialCharacter = function (t) {
              return !1;
            }),
            (t.formatMoneyNumber = function (t) {
              var e = 1,
                r = t;
              t < 0 && ((e = -1), (r *= -1));
              var n = "";
              return (
                r >= 1e9
                  ? ((r /= 1e9), (n = "B"))
                  : r >= 1e6
                  ? ((r /= 1e6), (n = "M"))
                  : r >= 1e3 && ((r /= 1e3), (n = "K")),
                (r = (Math.floor(100 * r + 1e-8) / 100) * e) + n
              );
            }),
            (t.formatNumber = function (t) {
              for (var e = Math.abs(t), r = ""; e >= 1e3; ) {
                var n = e % 1e3,
                  o = n.toString();
                n < 10 ? (o = "00" + o) : n < 100 && (o = "0" + o),
                  (r = "," + o + r),
                  (e = Math.floor(e / 1e3));
              }
              return (r = e + r);
            }),
            (t.formatUnixTime = function (t) {
              return new Date(t);
            }),
            (t.formatTime = function (t, e) {
              void 0 === e && (e = !0);
              var r = t.getFullYear(),
                n = t.getDate(),
                o = t.getMonth() + 1;
              n < 10 && (n = "0" + n), o < 10 && (o = "0" + o);
              var u = n + "-" + o + "-" + r,
                i = t.getHours(),
                a = t.getMinutes(),
                c = t.getSeconds();
              return (
                i < 10 && (i = "0" + i),
                a < 10 && (a = "0" + a),
                c < 10 && (c = "0" + c),
                i + ":" + a + ":" + c + (e ? "\n" : " ") + u
              );
            }),
            (t.formatTime2 = function (t) {
              var e = t.getFullYear(),
                r = t.getDate(),
                n = t.getMonth() + 1;
              r < 10 && (r = "0" + r), n < 10 && (n = "0" + n);
              var o = r + "/" + n + "/" + e,
                u = t.getHours(),
                i = t.getMinutes(),
                a = t.getSeconds();
              return (
                u < 10 && (u = "0" + u),
                i < 10 && (i = "0" + i),
                a < 10 && (a = "0" + a),
                u + ":" + i + " - " + o
              );
            }),
            (t.formatTimeJustDate = function (t) {
              var e = t.getFullYear(),
                r = t.getDate(),
                n = t.getMonth() + 1;
              return (
                r < 10 && (r = "0" + r),
                n < 10 && (n = "0" + n),
                r + "-" + n + "-" + e
              );
            }),
            (t.formatTimeJustHours = function (t) {
              var e = t.getHours(),
                r = t.getMinutes(),
                n = t.getSeconds();
              return (
                e < 10 && (e = "0" + e),
                r < 10 && (r = "0" + r),
                n < 10 && (n = "0" + n),
                e + ":" + r + ":" + n
              );
            }),
            (t.secondsToTime = function (t) {
              var e = t / 3600,
                r = t % 3600,
                n = r / 60,
                o = r % 60,
                u = Math.floor(e).toString();
              e < 10 && (u = "0" + Math.floor(e).toString());
              var i = Math.floor(n).toString();
              n < 10 && (i = "0" + Math.floor(n).toString());
              var a = Math.floor(o).toString();
              return (
                o < 10 && (a = "0" + Math.floor(o).toString()),
                u + ":" + i + ":" + a
              );
            }),
            (t.shortenName = function (t, e) {
              return (
                void 0 === e && (e = 12),
                t.length > e ? t.slice(0, e - 1) + "..." : t
              );
            }),
            (t.isNullOrEmpty = function (t, e) {
              return !t || t.trim().length <= 0;
            }),
            t
          );
        })()
      );
      e._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/SyncWebSocket.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (n) {
    "use strict";
    var e, t, o, r, c;
    return {
      setters: [
        function (n) {
          (e = n.asyncToGenerator), (t = n.regeneratorRuntime);
        },
        function (n) {
          (o = n.cclegacy), (r = n.sys), (c = n.url);
        },
      ],
      execute: function () {
        o._RF.push({}, "e9e20k6q4lB6bUVF0ULzQod", "SyncWebSocket", void 0);
        n(
          "SyncWebSocket",
          (function () {
            var n = o.prototype;
            function o(n) {
              var e = n.url,
                t = n.onOpened,
                o = n.onMessage,
                r = n.onReconnectFail,
                c = n.reconnectAuto,
                s = n.reconnectDelay;
              (this._ws = void 0),
                (this._url = ""),
                (this._reconnectAuto = 0),
                (this._reconnectCount = 0),
                (this._reconnectDelay = 0),
                (this._onOpened = void 0),
                (this._onMessage = void 0),
                (this._onReconnectFail = void 0),
                (this._url = e),
                (this._onOpened = t),
                (this._onMessage = o),
                (this._onReconnectFail = r),
                (this._reconnectAuto = c || 0),
                (this._reconnectDelay = s || 0);
            }
            return (
              (n._delay = function (n) {
                return new Promise(function (e) {
                  setTimeout(function () {
                    return e();
                  }, 1e3 * n);
                });
              }),
              (n._autoReconnect = (function () {
                var n = e(
                  t().mark(function n() {
                    var e;
                    return t().wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              if (
                                !(this._reconnectCount < this._reconnectAuto)
                              ) {
                                n.next = 5;
                                break;
                              }
                              this._reconnectCount++,
                                this.reconnect(this._reconnectDelay),
                                (n.next = 10);
                              break;
                            case 5:
                              return (n.next = 7), this.close();
                            case 7:
                              return (
                                (n.next = 9), this._delay(this._reconnectDelay)
                              );
                            case 9:
                              null == (e = this._onReconnectFail) ||
                                e.call(this, this);
                            case 10:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      this
                    );
                  })
                );
                return function () {
                  return n.apply(this, arguments);
                };
              })()),
              (n.open = function () {
                var n = this;
                return new Promise(function (o) {
                  r.Platform.ANDROID === r.platform
                    ? (n._ws = new WebSocket(
                        n._url,
                        null,
                        null == c.raw ? void 0 : c.raw("resources/cacert.pem")
                      ))
                    : (n._ws = new WebSocket(n._url)),
                    (n._ws.onopen = function () {
                      (n._reconnectCount = 0),
                        null == n._onOpened || n._onOpened(n),
                        n._ws && (n._ws.onopen = null),
                        o(!0);
                    }),
                    (n._ws.onmessage = function (e) {
                      return null == n._onMessage ? void 0 : n._onMessage(e);
                    }),
                    (n._ws.onerror = e(
                      t().mark(function e() {
                        return t().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (n._reconnectCount = Number.MAX_SAFE_INTEGER),
                                  n._autoReconnect();
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      })
                    )),
                    (n._ws.onclose = function () {
                      return n._autoReconnect();
                    });
                });
              }),
              (n.close = function () {
                var n = this;
                return new Promise(function (e) {
                  var t = function (t) {
                    n._ws &&
                      ((n._ws.onopen = null),
                      (n._ws.onmessage = null),
                      (n._ws.onerror = null),
                      (n._ws.onclose = null)),
                      (n._ws = void 0),
                      e(t);
                  };
                  n._ws && n._ws.readyState === WebSocket.OPEN
                    ? ((n._ws.onerror = null),
                      (n._ws.onclose = function () {
                        return t(!0);
                      }),
                      n._ws.close())
                    : t(!1);
                });
              }),
              (n.reconnect = (function () {
                var n = e(
                  t().mark(function n(e) {
                    return t().wrap(
                      function (n) {
                        for (;;)
                          switch ((n.prev = n.next)) {
                            case 0:
                              return (
                                void 0 === e && (e = 0),
                                (n.next = 3),
                                this.close()
                              );
                            case 3:
                              return (n.next = 5), this._delay(e);
                            case 5:
                              return (n.next = 7), this.open();
                            case 7:
                            case "end":
                              return n.stop();
                          }
                      },
                      n,
                      this
                    );
                  })
                );
                return function (e) {
                  return n.apply(this, arguments);
                };
              })()),
              (n.send = function (n) {
                try {
                  var e;
                  null == (e = this._ws) ||
                    e.send("object" == typeof n ? JSON.stringify(n) : n || "");
                } catch (n) {}
              }),
              o
            );
          })()
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TransitionFadeScreen.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./PersistManager.ts",
    "./EventManager.ts",
  ],
  function (e) {
    "use strict";
    var n, t, c, a, i, r, o, s, l, u, d, b, f;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (c = e.initializerDefineProperty),
            (a = e.assertThisInitialized);
        },
        function (e) {
          (i = e.cclegacy),
            (r = e._decorator),
            (o = e.UIOpacity),
            (s = e.Tween),
            (l = e.tween),
            (u = e.Component);
        },
        function (e) {
          d = e.PersistManager;
        },
        function (e) {
          (b = e.eventManager), (f = e.EventKey);
        },
      ],
      execute: function () {
        var _, v, k, p, h, y;
        i._RF.push(
          {},
          "db595Fmuo1Cs4M2svYB9u3m",
          "TransitionFadeScreen",
          void 0
        );
        var g = r.ccclass,
          T = r.property;
        e(
          "TransitionFadeScreen",
          ((_ = g("TransitionFadeScreen")),
          (v = T(o)),
          _(
            (((y = (function (e) {
              function n() {
                for (
                  var n, t = arguments.length, i = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  i[r] = arguments[r];
                return (
                  (n = e.call.apply(e, [this].concat(i)) || this),
                  c(n, "black_screen", h, a(n)),
                  n
                );
              }
              t(n, e),
                (n.getInstance = function () {
                  return n.instance;
                });
              var i = n.prototype;
              return (
                (i.onLoad = function () {
                  n.instance = this;
                }),
                (i.onDestroy = function () {
                  n.instance = null;
                }),
                (i.transition = function (e, n, t, c, a) {
                  var i = this;
                  void 0 === c && (c = 0),
                    void 0 === a && (a = 0),
                    s.stopAllByTarget(this.black_screen || void 0),
                    l(this.black_screen)
                      .call(function () {
                        i.black_screen &&
                          ((i.black_screen.node.active = !0),
                          (i.black_screen.opacity = 0));
                      })
                      .delay(c)
                      .to(t, { opacity: 255 })
                      .call(function () {
                        var t;
                        b.emit(f.TransitionScene, e, n),
                          e.hide(),
                          d.getInstance().hideLoading(),
                          null == (t = d.getInstance().notiView) || t.hide();
                      })
                      .delay(a)
                      .call(function () {
                        n.setPreviousGameView(e), n.show();
                      })
                      .to(t, { opacity: 0 })
                      .call(function () {
                        i.black_screen && (i.black_screen.node.active = !1);
                      })
                      .start();
                }),
                (i.transitionWithoutFade = function (e, n) {
                  var t;
                  e.hide(),
                    d.getInstance().hideLoading(),
                    null == (t = d.getInstance().notiView) || t.hide(),
                    n.setPreviousGameView(e),
                    n.show(),
                    b.emit(f.TransitionScene, e, n);
                }),
                (i.fade = function (e, n, t, c) {
                  var a = this;
                  void 0 === c && (c = 0),
                    s.stopAllByTarget(this.black_screen || void 0),
                    l(this.black_screen)
                      .call(function () {
                        a.black_screen && (a.black_screen.node.active = !0),
                          a.black_screen && (a.black_screen.opacity = 0);
                      })
                      .to(t, { opacity: 255 })
                      .call(function () {
                        null == e || e();
                      })
                      .delay(c)
                      .call(function () {
                        null == n || n();
                      })
                      .to(t, { opacity: 0 })
                      .call(function () {
                        a.black_screen && (a.black_screen.node.active = !1);
                      })
                      .start();
                }),
                (i.fadeIn = function (e, n) {
                  var t = this;
                  s.stopAllByTarget(this.black_screen || void 0),
                    l(this.black_screen)
                      .call(function () {
                        t.black_screen && (t.black_screen.node.active = !0),
                          t.black_screen && (t.black_screen.opacity = 0);
                      })
                      .to(n, { opacity: 255 })
                      .call(function () {
                        t.black_screen && (t.black_screen.opacity = 255),
                          null == e || e();
                      })
                      .start();
                }),
                (i.fadeOut = function (e, n) {
                  var t = this;
                  s.stopAllByTarget(this.black_screen || void 0),
                    l(this.black_screen)
                      .call(function () {
                        t.black_screen && (t.black_screen.node.active = !0),
                          t.black_screen && (t.black_screen.opacity = 255);
                      })
                      .to(n, { opacity: 0 })
                      .call(function () {
                        null == e || e(),
                          t.black_screen && (t.black_screen.node.active = !1);
                      })
                      .start();
                }),
                (i.fadeOutFix = function (e, n) {
                  var t;
                  null != (t = this.black_screen) && t.node.active
                    ? this.scheduleOnce(function () {
                        return null == e ? void 0 : e();
                      })
                    : this.fadeOut(e, n);
                }),
                n
              );
            })(u)).instance = null),
            (h = n((p = y).prototype, "black_screen", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = p))
          ) || k)
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/UIBackgroundScale.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, n, o, c, i, r, s;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (n = e.cclegacy),
            (o = e._decorator),
            (c = e.view),
            (i = e.UITransform),
            (r = e.Vec3),
            (s = e.Component);
        },
      ],
      execute: function () {
        var a;
        n._RF.push({}, "230cajIEIBJ5qoAbRf5axKp", "UIBackgroundScale", void 0);
        var u = o.ccclass;
        o.property,
          e(
            "UIBackgroundScale",
            u("UIBackgroundScale")(
              (a = (function (e) {
                function n() {
                  return e.apply(this, arguments) || this;
                }
                return (
                  t(n, e),
                  (n.prototype.start = function () {
                    var e = c.getDesignResolutionSize(),
                      t = this.node.getComponent(i).contentSize,
                      n = t.width / e.width,
                      o = t.height / e.height,
                      s = Math.max(n, o);
                    this.node.setScale(new r(s, s, 1)),
                      this.node.setPosition(new r(0, 0, 0));
                  }),
                  n
                );
              })(s))
            ) || a
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/UIScale.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, i, r, n, o, s, c, a, l, f, u, p;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (s = e._decorator),
            (c = e.Vec2),
            (a = e.view),
            (l = e.sys),
            (f = e.UITransform),
            (u = e.Vec3),
            (p = e.Component);
        },
      ],
      execute: function () {
        var S, h, y, g, w, v, d, z, b;
        o._RF.push({}, "69528kQgpVGR7bt8x0nr4k5", "UIScale", void 0);
        var I = s.ccclass,
          U = s.property;
        e(
          "UIScaler",
          ((S = I("UIScaler")),
          (h = U(c)),
          (y = U(c)),
          (g = U(c)),
          S(
            ((d = t(
              (v = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, o = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    r(t, "designSize", d, n(t)),
                    r(t, "offSet", z, n(t)),
                    r(t, "offSetNotBrowser", b, n(t)),
                    t
                  );
                }
                i(t, e);
                var o = t.prototype;
                return (
                  (o.start = function () {
                    this.scaleUIToFitScreen();
                  }),
                  (o.scaleUIToFitScreen = function () {
                    var e = a.getVisibleSize(),
                      t = e.width / this.designSize.x,
                      i = e.height / this.designSize.y;
                    l.isBrowser ||
                      ((t += this.offSetNotBrowser.x),
                      (i += this.offSetNotBrowser.y));
                    var r = Math.min(t, i);
                    this.applyScaleRecursive(this.node, r);
                  }),
                  (o.setDesignRes = function (e, t) {
                    this.designSize.set(e, t);
                  }),
                  (o.onLoad = function () {
                    a.on("canvas-resize", this.scaleUIToFitScreen, this);
                  }),
                  (o.onDestroy = function () {
                    a.off("canvas-resize", this.scaleUIToFitScreen, this);
                  }),
                  (o.applyScaleRecursive = function (e, t) {
                    e.getComponent(f) &&
                      e.setScale(
                        new u(t + this.offSet.x, t + this.offSet.y, 1)
                      );
                  }),
                  t
                );
              })(p)).prototype,
              "designSize",
              [h],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return new c(1560, 720);
                },
              }
            )),
            (z = t(v.prototype, "offSet", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new c(0, 0);
              },
            })),
            (b = t(v.prototype, "offSetNotBrowser", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new c(0, 0);
              },
            })),
            (w = v))
          ) || w)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Utils.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var n, r, t, u;
    return {
      setters: [
        function (e) {
          (n = e.extends), (r = e.asyncToGenerator), (t = e.regeneratorRuntime);
        },
        function (e) {
          u = e.cclegacy;
        },
      ],
      execute: function () {
        u._RF.push({}, "e7632bh/cxENo+8bIKFM0Gd", "Utils", void 0);
        e("combineEnums", function (e, r) {
          return n({}, e, r);
        });
        var o = e(
          "delay",
          (function () {
            var e = r(
              t().mark(function e(n) {
                return t().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return e.abrupt(
                          "return",
                          new Promise(function (e) {
                            return setTimeout(function () {
                              return e();
                            }, 1e3 * n);
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
          })()
        );
        e("removeFromParentAndDestroy", function (e) {
          null != e && e.isValid && (e.removeFromParent(), e.destroy());
        }),
          e(
            "waitUntil",
            (function () {
              var e = r(
                t().mark(function e(n, r) {
                  return t().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          void 0 === r && (r = 0.1);
                        case 1:
                          if (n()) {
                            e.next = 6;
                            break;
                          }
                          return (e.next = 4), o(r);
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
              return function (n, r) {
                return e.apply(this, arguments);
              };
            })()
          );
        u._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WebViewPopup.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CommonPopup.ts"],
  function (e) {
    "use strict";
    var t, i, o, r, n, u, l, p, c;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (o = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (n = e.cclegacy), (u = e._decorator), (l = e.WebView), (p = e.Label);
        },
        function (e) {
          c = e.CommonPopup;
        },
      ],
      execute: function () {
        var a, s, w, b, f, h, d;
        n._RF.push({}, "5d8d9ZdAABMu579LcmMWZEf", "WebViewPopup", void 0);
        var y = u.ccclass,
          V = u.property;
        e(
          "WebViewPopup",
          ((a = y("WebViewPopup")),
          (s = V(l)),
          (w = V(p)),
          a(
            ((h = t(
              (f = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), u = 0;
                    u < i;
                    u++
                  )
                    n[u] = arguments[u];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    o(t, "webView", h, r(t)),
                    o(t, "title", d, r(t)),
                    t
                  );
                }
                i(t, e);
                var n = t.prototype;
                return (
                  (n.onLoad = function () {
                    e.prototype.onLoad.call(this);
                  }),
                  (n.showURL = function (e, t) {
                    void 0 === t && (t = "Luật Chơi"),
                      this.webView && (this.webView.url = e),
                      this.title && (this.title.string = t),
                      this.show();
                  }),
                  t
                );
              })(c)).prototype,
              "webView",
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
            (d = t(f.prototype, "title", [w], {
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
        n._RF.pop();
      },
    };
  }
);

(function (r) {
  r("virtual:///prerequisite-imports/base", "chunks:///_virtual/base");
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
