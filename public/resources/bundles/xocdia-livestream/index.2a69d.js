System.register(
  "chunks:///_virtual/Dealer_XDLiveStreamChatView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./XDLiveStreamChatItem.ts",
    "./XDLiveStreamChatWebSocketHandler.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, a, o, s, r, l, h, c, d, u, _, f, m, p, g;
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
            (s = t._decorator),
            (r = t.Node),
            (l = t.EditBox),
            (h = t.ScrollView),
            (c = t.UITransform),
            (d = t.Tween),
            (u = t.tween),
            (_ = t.Vec3),
            (f = t.sys),
            (m = t.Component);
        },
        function (t) {
          p = t.XDLiveStreamChatItem;
        },
        function (t) {
          g = t.default;
        },
      ],
      execute: function () {
        var y, v, b, w, S, C, z, D, L, T, I, B, E, A, N;
        o._RF.push(
          {},
          "067bfTv35JGj5AAZhGDpBuz",
          "Dealer_XDLiveStreamChatView",
          void 0
        );
        var x = s.ccclass,
          P = s.property;
        t(
          "default",
          ((y = x("Dealer_XDLiveStreamChatView")),
          (v = P(r)),
          (b = P(l)),
          (w = P(h)),
          (S = P(c)),
          (C = P([p])),
          y(
            (((N = (function (t) {
              function e() {
                for (
                  var e, i = arguments.length, o = new Array(i), s = 0;
                  s < i;
                  s++
                )
                  o[s] = arguments[s];
                return (
                  (e = t.call.apply(t, [this].concat(o)) || this),
                  n(e, "chat_item", L, a(e)),
                  n(e, "edbChat", T, a(e)),
                  n(e, "scr_chat", I, a(e)),
                  n(e, "scr_chat_transform", B, a(e)),
                  n(e, "loaded_chat_items", E, a(e)),
                  n(e, "spacing_chat", A, a(e)),
                  (e.isScrolling = !1),
                  (e.is_chat_layout_dirty = !1),
                  (e.is_loaded_history = !1),
                  (e.lastSendTimestamp = 0),
                  e
                );
              }
              i(e, t),
                (e.getInstance = function () {
                  return e.instance;
                });
              var o = e.prototype;
              return (
                (o.onLoad = function () {
                  var t,
                    i,
                    n,
                    a = this;
                  (e.instance = this),
                    null == (t = this.scr_chat) ||
                      t.node.on("scroll-began", function () {
                        d.stopAllByTarget(a.node), (a.isScrolling = !0);
                      }),
                    null == (i = this.scr_chat) ||
                      i.node.on("scroll-ended", function () {
                        u(a.node)
                          .sequence(
                            u().delay(0.5),
                            u().call(function () {
                              a.isScrolling = !1;
                            })
                          )
                          .start();
                      }),
                    null == (n = this.edbChat) ||
                      n.node.on("editing-did-began", function () {}),
                    setInterval(function () {
                      a.markAsDirty();
                    }, 1e3);
                }),
                (o.update = function (t) {
                  this.updateLayoutChat();
                }),
                (o.markAsDirty = function () {
                  this.is_chat_layout_dirty = !0;
                }),
                (o.updateLayoutChat = function () {
                  var t,
                    e = this;
                  if (
                    null != this.loaded_chat_items &&
                    0 != this.loaded_chat_items.length
                  ) {
                    var i = this.loaded_chat_items
                      .map(function (t) {
                        var e;
                        return null == (e = t.getUITransform())
                          ? void 0
                          : e.contentSize.height;
                      })
                      .reduce(function (t, i) {
                        return t + i + e.spacing_chat;
                      });
                    if (
                      (i &&
                        (null == (t = this.scr_chat_transform) ||
                          t.setContentSize(
                            this.scr_chat_transform.contentSize.width,
                            i
                          )),
                      this.is_chat_layout_dirty)
                    ) {
                      var n;
                      this.loaded_chat_items.filter(function (t) {
                        return t.isDirty();
                      }).length;
                      this.loaded_chat_items.forEach(function (t, i) {
                        if ((d.stopAllByTarget(t.node), i > 0)) {
                          var n = e.loaded_chat_items[i - 1].node.position,
                            a = new _(n.x, n.y, n.z);
                          (a.y -=
                            e.loaded_chat_items[i - 1].getUITransform()
                              .contentSize.height + e.spacing_chat),
                            t.node.setPosition(a);
                        }
                      });
                      for (
                        var a = [],
                          o = 15,
                          s = this.loaded_chat_items.length - 1;
                        s >= 0;
                        s--
                      ) {
                        var r,
                          l,
                          h,
                          c =
                            null == (r = this.loaded_chat_items[s])
                              ? void 0
                              : r.node.position;
                        o +=
                          (null == (l = this.loaded_chat_items[s]) ||
                          null == (h = l.getUITransform())
                            ? void 0
                            : h.contentSize.height) + this.spacing_chat;
                        var m = new _(c.x, c.y, c.z);
                        (m.y = o), a.push(m);
                      }
                      (a = a.reverse()),
                        f.isBrowser && f.platform == f.Platform.DESKTOP_BROWSER
                          ? this.loaded_chat_items.forEach(function (t, e) {
                              var i, n, o;
                              t.node.setPosition(
                                new _(
                                  null == (i = a[e]) ? void 0 : i.x,
                                  null == (n = a[e]) ? void 0 : n.y,
                                  null == (o = a[e]) ? void 0 : o.z
                                )
                              );
                            })
                          : this.loaded_chat_items.forEach(function (t, e) {
                              var i, n, o;
                              u(t.node)
                                .to(0.2, {
                                  position: new _(
                                    null == (i = a[e]) ? void 0 : i.x,
                                    null == (n = a[e]) ? void 0 : n.y,
                                    null == (o = a[e]) ? void 0 : o.z
                                  ),
                                })
                                .start();
                            }),
                        null == (n = this.scr_chat) || n.scrollToBottom(),
                        (this.is_chat_layout_dirty = !1),
                        this.is_loaded_history || (this.is_loaded_history = !0);
                    }
                  }
                }),
                (o.isUpdatable = function () {
                  return (
                    this.is_loaded_history &&
                    !this.isScrolling &&
                    !this.is_chat_layout_dirty
                  );
                }),
                (o.loadChatHistory = function (t) {
                  for (
                    var e =
                        t.length > this.loaded_chat_items.length
                          ? this.loaded_chat_items.length
                          : t.length,
                      i = t.length - e;
                    i < t.length;
                    i++
                  ) {
                    var n = t[i],
                      a = n.displayName,
                      o = n.message,
                      s = n.isNoti,
                      r = n.isError,
                      l = this.loaded_chat_items.shift();
                    l && (l.node.active = !0),
                      s ? l && l.showNotifyMessage(a, o, r) : l && l.show(a, o),
                      l && this.loaded_chat_items.push(l);
                  }
                  this.is_chat_layout_dirty = !0;
                }),
                (o.updateChat = function (t) {
                  if (null != this.loaded_chat_items) {
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
                        a = n.displayName,
                        o = n.message,
                        s = n.isNoti,
                        r = n.isError,
                        l = this.loaded_chat_items.shift();
                      l && (l.node.active = !0),
                        l && (l.node.parent = this.chat_item.parent),
                        s
                          ? l && l.showNotifyMessage2(a, o, r, !0)
                          : l && l.show(a, o),
                        l && this.loaded_chat_items.push(l);
                    }
                    this.is_chat_layout_dirty = !0;
                  }
                }),
                (o.sendMes = function () {
                  if (null != this.edbChat) {
                    var t = this.edbChat.string.trim();
                    (this.edbChat.string = ""),
                      null != t &&
                        "" != t &&
                        g.getInstance().sendLoDeChatMessage(t);
                  }
                }),
                (o.reset = function () {}),
                e
              );
            })(m)).instance = null),
            (L = e((D = N).prototype, "chat_item", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = e(D.prototype, "edbChat", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(D.prototype, "scr_chat", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = e(D.prototype, "scr_chat_transform", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = e(D.prototype, "loaded_chat_items", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (A = e(D.prototype, "spacing_chat", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 5;
              },
            })),
            (z = D))
          ) || z)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/hihi.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, r, n, i, o, c, a, s, u;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (i = e.assertThisInitialized),
            (o = e.createClass);
        },
        function (e) {
          (c = e.cclegacy), (a = e._decorator), (s = e.Node), (u = e.Component);
        },
      ],
      execute: function () {
        var l, p, h, g, f, d;
        c._RF.push({}, "78b3e38kv9EXr1/4e0kTer7", "hihi", void 0);
        var y = a.ccclass,
          _ = a.property,
          v = a.executeInEditMode;
        e(
          "hihi",
          ((l = y("hihi")),
          (p = _(Boolean)),
          (h = _(s)),
          l(
            (g =
              v(
                (t(
                  (f = (function (e) {
                    function t() {
                      for (
                        var t, r = arguments.length, o = new Array(r), c = 0;
                        c < r;
                        c++
                      )
                        o[c] = arguments[c];
                      return (
                        ((t =
                          e.call.apply(e, [this].concat(o)) || this)._trigger =
                          !1),
                        n(t, "nodeContent", d, i(t)),
                        t
                      );
                    }
                    return (
                      r(t, e),
                      o(t, [
                        {
                          key: "trigger",
                          get: function () {
                            return this._trigger;
                          },
                          set: function (e) {
                            console.log("aaa"),
                              (this._trigger = e),
                              this.nodeContent &&
                                this.nodeContent.children.forEach(function (
                                  e,
                                  t
                                ) {
                                  return (e.name =
                                    "spr_cau_" + (t < 10 ? "0" : "") + t);
                                });
                          },
                        },
                      ]),
                      t
                    );
                  })(u)).prototype,
                  "trigger",
                  [p],
                  Object.getOwnPropertyDescriptor(f.prototype, "trigger"),
                  f.prototype
                ),
                (d = t(f.prototype, "nodeContent", [h], {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                  initializer: function () {
                    return null;
                  },
                })),
                (g = f))
              ) || g)
          ) || g)
        );
        c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XDDealerChatViewPopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./Dealer_XDLiveStreamChatView.ts",
  ],
  function (e) {
    "use strict";
    var t, i, r, a, o, n, l, u;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (a = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy), (n = e._decorator);
        },
        function (e) {
          l = e.CommonPopup;
        },
        function (e) {
          u = e.default;
        },
      ],
      execute: function () {
        var c, s, p, h, D;
        o._RF.push(
          {},
          "fb3ecYsZwhG86te1iCLrePD",
          "XDDealerChatViewPopup",
          void 0
        );
        var d = n.ccclass,
          f = n.property;
        e(
          "XDDealerChatViewPopup",
          ((c = d("XDDealerChatViewPopup")),
          (s = f(u)),
          c(
            ((D = t(
              (h = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, o = new Array(i), n = 0;
                    n < i;
                    n++
                  )
                    o[n] = arguments[n];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    r(t, "dealer_XDLiveStreamChatView", D, a(t)),
                    t
                  );
                }
                i(t, e);
                var o = t.prototype;
                return (
                  (o.loadChatHistory = function (e) {
                    var t;
                    null == (t = this.dealer_XDLiveStreamChatView) ||
                      t.loadChatHistory(e);
                  }),
                  (o.updateChat = function (e) {
                    var t;
                    null == (t = this.dealer_XDLiveStreamChatView) ||
                      t.updateChat(e);
                  }),
                  (o.showImmediately = function (t) {
                    var i = this;
                    void 0 === t && (t = function () {}),
                      e.prototype.showImmediately.call(this, t),
                      this.scheduleOnce(function () {
                        var e;
                        null == (e = i.dealer_XDLiveStreamChatView) ||
                          e.markAsDirty();
                      }, 0.1);
                  }),
                  t
                );
              })(l)).prototype,
              "dealer_XDLiveStreamChatView",
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
            (p = h))
          ) || p)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XDLiveStreamChatController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./XocDiaLiveStreamController.ts",
    "./State.ts",
    "./SocketManager.ts",
    "./BaseLiveStreamNetworkController.ts",
    "./LiveStreamChatController.ts",
    "./XDDealerChatViewPopup.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, a, o, r, s, l, c;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (i = t._decorator);
        },
        function (t) {
          a = t.XocDiaLiveStreamController;
        },
        function (t) {
          o = t.state;
        },
        function (t) {
          r = t.MessageRequest;
        },
        function (t) {
          s = t.LiveStreamMessage;
        },
        function (t) {
          l = t.LiveStreamChatController;
        },
        function (t) {
          c = t.XDDealerChatViewPopup;
        },
      ],
      execute: function () {
        var u, h;
        n._RF.push(
          {},
          "4ade18goRNO944B2JGj+GeZ",
          "XDLiveStreamChatController",
          void 0
        );
        var d = i.ccclass;
        i.property,
          t("ChatItemData", function () {
            (this.displayName = null), (this.message = null);
          }),
          t(
            "default",
            d("XDLiveStreamChatController")(
              (((h = (function (t) {
                function n() {
                  return t.apply(this, arguments) || this;
                }
                e(n, t),
                  (n.getInstance = function () {
                    return (
                      (null !== this._instance && void 0 !== this._instance) ||
                        (this._instance = new n()),
                      this._instance
                    );
                  });
                var i = n.prototype;
                return (
                  (i.onLoad = function () {
                    var e;
                    !this.dealerChatViewPopup &&
                      this.dealer_chatViewPopupNode &&
                      (this.dealerChatViewPopup =
                        null == (e = this.dealer_chatViewPopupNode)
                          ? void 0
                          : e.getComponent(c)),
                      t.prototype.onLoad.call(this),
                      (n._instance = this);
                  }),
                  (i.onChatBtnClick = function () {
                    var t,
                      e,
                      i,
                      l =
                        null == (t = this.chatEditBox)
                          ? void 0
                          : t.string.trim();
                    if ((!l || 0 !== l.length) && null != l && "" != l) {
                      if (o.gold < 2e4)
                        return (
                          n
                            .getInstance()
                            .addChatMessage(
                              "",
                              "Số dư của bạn phải trên 20.000đ để có thể chat"
                            ),
                          void (
                            this.chatEditBox && (this.chatEditBox.string = "")
                          )
                        );
                      this.chatEditBox && (this.chatEditBox.string = "");
                      var c = {};
                      (c.cmd = s.CHAT),
                        (c.mgs = l),
                        null == (e = a.getInstance()) ||
                          null == (i = e.getNetworkHandler()) ||
                          i.sendWithZoneAndChannel(r.ZonePlugin_Type, c);
                    }
                  }),
                  (i.fetchChatBox = function () {
                    var t,
                      e,
                      n = {};
                    (n.cmd = s.FETCH_CHAT_HISTORY),
                      null == (t = a.getInstance()) ||
                        null == (e = t.getNetworkHandler()) ||
                        e.sendWithZoneAndChannel(r.ZonePlugin_Type, n);
                  }),
                  (i.onDestroy = function () {
                    n._instance = null;
                  }),
                  n
                );
              })(l)).SystemWarningName = "SystemWarning"),
              (h._instance = null),
              (u = h))
            ) || u
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XDLiveStreamChatItem.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./XDLiveStreamChatView.ts",
    "./State.ts",
  ],
  function (e) {
    "use strict";
    var t, r, i, n, o, f, a, l, c, s, T;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (f = e._decorator),
            (a = e.RichText),
            (l = e.UITransform),
            (c = e.Component);
        },
        function (e) {
          s = e.default;
        },
        function (e) {
          T = e.state;
        },
      ],
      execute: function () {
        var P, I, p, g, O, d, h, x, _;
        o._RF.push(
          {},
          "4d4d15zloxIgrRttAjAxDIY",
          "XDLiveStreamChatItem",
          void 0
        );
        var m = f.ccclass,
          u = f.property;
        e(
          "XDLiveStreamChatItem",
          ((P = m("XDLiveStreamChatItem")),
          (I = u(a)),
          (p = u(l)),
          (g = u(l)),
          P(
            ((h = t(
              (d = (function (e) {
                function t() {
                  for (
                    var t, r = arguments.length, o = new Array(r), f = 0;
                    f < r;
                    f++
                  )
                    o[f] = arguments[f];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    i(t, "txt_message", h, n(t)),
                    i(t, "nodeTranform", x, n(t)),
                    i(t, "txt_message_transform", _, n(t)),
                    (t.IS_DIRTY = !0),
                    (t.originNodeHeight = 0),
                    t
                  );
                }
                r(t, e);
                var o = t.prototype;
                return (
                  (o.getUITransform = function () {
                    return this.nodeTranform;
                  }),
                  (o.update = function (e) {
                    var t, r, i, n;
                    ((this.originNodeHeight =
                      this.nodeTranform.contentSize.height),
                    null == (t = this.nodeTranform) ||
                      t.setContentSize(
                        this.txt_message_transform.contentSize.width,
                        this.txt_message_transform.contentSize.height
                      ),
                    (null == (r = this.nodeTranform)
                      ? void 0
                      : r.contentSize.height) != this.originNodeHeight) &&
                      ((this.originNodeHeight =
                        this.nodeTranform.contentSize.height),
                      null == (n = s.getInstance()) || n.markAsDirty());
                    this.IS_DIRTY &&
                      (null == (i = this.nodeTranform)
                        ? void 0
                        : i.contentSize.width) ==
                        this.txt_message_transform.contentSize.width &&
                      this.nodeTranform.contentSize.height ==
                        this.txt_message_transform.contentSize.height &&
                      (this.IS_DIRTY = !1);
                  }),
                  (o.isDirty = function () {
                    return this.IS_DIRTY;
                  }),
                  (o.show = function (e, t, r) {
                    this.txt_message && (this.txt_message.node.active = !0),
                      null == t && (t = "??????"),
                      t &&
                        t.indexOf("[TOP") >= 0 &&
                        (t.indexOf("[TOP 1]") >= 0 &&
                          ((t = t.replace("[TOP 1]", "")), (e = "[TOP 1]" + e)),
                        t.indexOf("[TOP 2]") >= 0 &&
                          ((t = t.replace("[TOP 2]", "")), (e = "[TOP 2]" + e)),
                        t.indexOf("[TOP 3]") >= 0 &&
                          ((t = t.replace("[TOP 3]", "")), (e = "[TOP 3]" + e)),
                        t.indexOf("[TOP 4]") >= 0 &&
                          ((t = t.replace("[TOP 4]", "")), (e = "[TOP 4]" + e)),
                        t.indexOf("[TOP 5]") >= 0 &&
                          ((t = t.replace("[TOP 5]", "")), (e = "[TOP 5]" + e)),
                        t.indexOf("[TOP 6]") >= 0 &&
                          ((t = t.replace("[TOP 6]", "")), (e = "[TOP 6]" + e)),
                        t.indexOf("[TOP 7]") >= 0 &&
                          ((t = t.replace("[TOP 7]", "")), (e = "[TOP 7]" + e)),
                        t.indexOf("[TOP 8]") >= 0 &&
                          ((t = t.replace("[TOP 8]", "")), (e = "[TOP 8]" + e)),
                        t.indexOf("[TOP 9]") >= 0 &&
                          ((t = t.replace("[TOP 9]", "")), (e = "[TOP 9]" + e)),
                        t.indexOf("[TOP 10]") >= 0 &&
                          ((t = t.replace("[TOP 10]", "")),
                          (e = "[TOP 10]" + e)));
                    var i = "#FF75F3";
                    null != e &&
                      e.length > 4 &&
                      e.indexOf("[TOP") >= 0 &&
                      (i = "#ffff00"),
                      e == T.displayName && (i = "#ffff00");
                    var n = "";
                    if (
                      (null != e &&
                        (e.indexOf("[TIP 1]") >= 0
                          ? ((e = e.replace("[TIP 1]", "")), (n = "ä"))
                          : e.indexOf("[TIP 2]") >= 0
                          ? ((e = e.replace("[TIP 2]", "")), (n = "å"))
                          : e.indexOf("[TIP 3]") >= 0
                          ? ((e = e.replace("[TIP 3]", "")), (n = "ç"))
                          : e.indexOf("[TIP 4]") >= 0
                          ? ((e = e.replace("[TIP 4]", "")), (n = "ë"))
                          : e.indexOf("[TIP 5]") >= 0
                          ? ((e = e.replace("[TIP 5]", "")), (n = "ï"))
                          : e.indexOf("[TIP 6]") >= 0
                          ? ((e = e.replace("[TIP 6]", "")), (n = "î"))
                          : e.indexOf("[TIP 7]") >= 0
                          ? ((e = e.replace("[TIP 7]", "")), (n = "æ"))
                          : e.indexOf("[TIP 8]") >= 0
                          ? ((e = e.replace("[TIP 8]", "")), (n = "Æ"))
                          : e.indexOf("[TIP 9]") >= 0
                          ? ((e = e.replace("[TIP 9]", "")), (n = "ö"))
                          : e.indexOf("[TIP 10]") >= 0 &&
                            ((e = e.replace("[TIP 10]", "")), (n = "û"))),
                      t.indexOf("[TIP 1]") >= 0
                        ? ((t = t.replace("[TIP 1]", "")), (n = "ä"))
                        : t.indexOf("[TIP 2]") >= 0
                        ? ((t = t.replace("[TIP 2]", "")), (n = "å"))
                        : t.indexOf("[TIP 3]") >= 0
                        ? ((t = t.replace("[TIP 3]", "")), (n = "ç"))
                        : t.indexOf("[TIP 4]") >= 0
                        ? ((t = t.replace("[TIP 4]", "")), (n = "ë"))
                        : t.indexOf("[TIP 5]") >= 0
                        ? ((t = t.replace("[TIP 5]", "")), (n = "ï"))
                        : t.indexOf("[TIP 6]") >= 0
                        ? ((t = t.replace("[TIP 6]", "")), (n = "î"))
                        : t.indexOf("[TIP 7]") >= 0
                        ? ((t = t.replace("[TIP 7]", "")), (n = "æ"))
                        : t.indexOf("[TIP 8]") >= 0
                        ? ((t = t.replace("[TIP 8]", "")), (n = "Æ"))
                        : t.indexOf("[TIP 9]") >= 0
                        ? ((t = t.replace("[TIP 9]", "")), (n = "ö"))
                        : t.indexOf("[TIP 10]") >= 0 &&
                          ((t = t.replace("[TIP 10]", "")), (n = "û")),
                      !(
                        (t = (t = (t = (t = (t = (t = (t = (t = (t = (t = (t =
                          t.replace(/ä/g, "")).replace(/å/g, "")).replace(
                          /ç/g,
                          ""
                        )).replace(/ë/g, "")).replace(/ï/g, "")).replace(
                          /î/g,
                          ""
                        )).replace(/æ/g, "")).replace(/Æ/g, "")).replace(
                          /ö/g,
                          ""
                        )).replace(/û/g, "")).replace(/ž/g, "")).length < 0
                      ))
                    ) {
                      var o = "#ffa500";
                      e ? (o = "#FFFFFF") : ((e = ""), (o = "#FF0000"));
                      var f =
                        "<color=#ffffff>" +
                        n +
                        "</color>" +
                        ("" == (e = "" == n ? e : " " + e)
                          ? ""
                          : "<color=" + i + ">" + e + ":</color>") +
                        "<color=" +
                        o +
                        ">" +
                        ("" == e ? "" : " ") +
                        t +
                        "</color>";
                      this.txt_message && (this.txt_message.string = f),
                        (this.IS_DIRTY = !0);
                    }
                  }),
                  (o.showNotifyMessage = function (e, t, r, i) {
                    if ((void 0 === r && (r = !1), r))
                      this.txt_message &&
                        (this.txt_message.string =
                          "<color=#ffffff>ž</color><color=#ff0000> " +
                          t[0] +
                          "</color>");
                    else {
                      var n = t[0],
                        o = "ž";
                      n &&
                        (n.indexOf("TIP1_") >= 0
                          ? ((n = n.replace(/TIP1_/g, "")), (o += " ä"))
                          : n.indexOf("TIP2_") >= 0
                          ? ((n = n.replace(/TIP2_/g, "")), (o += " å"))
                          : n.indexOf("TIP3_") >= 0
                          ? ((n = n.replace(/TIP3_/g, "")), (o += " ç"))
                          : n.indexOf("TIP4_") >= 0
                          ? ((n = n.replace(/TIP4_/g, "")), (o += " ë"))
                          : n.indexOf("TIP5_") >= 0
                          ? ((n = n.replace(/TIP5_/g, "")), (o += " ï"))
                          : n.indexOf("TIP6_") >= 0
                          ? ((n = n.replace(/TIP6_/g, "")), (o += " î"))
                          : n.indexOf("TIP7_") >= 0
                          ? ((n = n.replace(/TIP7_/g, "")), (o += " æ"))
                          : n.indexOf("TIP8_") >= 0
                          ? ((n = n.replace(/TIP8_/g, "")), (o += " Æ"))
                          : n.indexOf("TIP9_") >= 0
                          ? ((n = n.replace(/TIP9_/g, "")), (o += " ö"))
                          : n.indexOf("TIP10_") >= 0 &&
                            ((n = n.replace(/TIP10_/g, "")), (o += " û"))),
                        this.txt_message &&
                          (this.txt_message.string =
                            "<color=#ffffff>" +
                            o +
                            "</color><color=#FF75F3> " +
                            n +
                            "</color><color=#ffffff> " +
                            t[1] +
                            "</color><color=#ffffff> " +
                            t[2] +
                            "</color>");
                    }
                    this.IS_DIRTY = !0;
                  }),
                  (o.showNotifyMessage2 = function (e, t, r, i) {
                    if ((void 0 === r && (r = !1), r))
                      this.txt_message &&
                        (this.txt_message.string =
                          "<color=#ffffff>ž</color><color=#ff0000> " +
                          t[0] +
                          "</color>");
                    else {
                      var n = t[0];
                      this.txt_message &&
                        (this.txt_message.string =
                          "<color=#ffffff></color><color=#FF75F3> " +
                          n +
                          "</color><color=#ffffff> " +
                          t[1] +
                          "</color><color=#FFF500> " +
                          t[3] +
                          "</color>");
                    }
                    this.IS_DIRTY = !0;
                  }),
                  t
                );
              })(c)).prototype,
              "txt_message",
              [I],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (x = t(d.prototype, "nodeTranform", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = t(d.prototype, "txt_message_transform", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = d))
          ) || O)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XDLiveStreamChatView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./XDLiveStreamChatItem.ts",
    "./XDLiveStreamChatWebSocketHandler.ts",
  ],
  function (t) {
    "use strict";
    var e, i, a, n, s, o, r, h, l, c, d, _, u, f, m, g, p;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (a = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (o = t._decorator),
            (r = t.Node),
            (h = t.EditBox),
            (l = t.ScrollView),
            (c = t.UITransform),
            (d = t.Tween),
            (_ = t.tween),
            (u = t.Vec3),
            (f = t.sys),
            (m = t.Component);
        },
        function (t) {
          g = t.XDLiveStreamChatItem;
        },
        function (t) {
          p = t.default;
        },
      ],
      execute: function () {
        var y, b, v, w, C, S, z, L, D, I, T, B, E, N, x;
        s._RF.push(
          {},
          "485f4cfrtBI972bBLgdYLiG",
          "XDLiveStreamChatView",
          void 0
        );
        var P = o.ccclass,
          X = o.property;
        t(
          "default",
          ((y = P("XDLiveStreamChatView")),
          (b = X(r)),
          (v = X(h)),
          (w = X(l)),
          (C = X(c)),
          (S = X([r])),
          y(
            (((x = (function (t) {
              function e() {
                for (
                  var e, i = arguments.length, s = new Array(i), o = 0;
                  o < i;
                  o++
                )
                  s[o] = arguments[o];
                return (
                  (e = t.call.apply(t, [this].concat(s)) || this),
                  a(e, "chat_item", D, n(e)),
                  a(e, "edbChat", I, n(e)),
                  a(e, "scr_chat", T, n(e)),
                  a(e, "scr_chat_transform", B, n(e)),
                  a(e, "loaded_chat_items_node", E, n(e)),
                  (e.loaded_chat_items = []),
                  a(e, "spacing_chat", N, n(e)),
                  (e.isScrolling = !1),
                  (e.is_chat_layout_dirty = !1),
                  (e.is_loaded_history = !1),
                  (e.lastSendTimestamp = 0),
                  e
                );
              }
              i(e, t),
                (e.getInstance = function () {
                  return e.instance;
                });
              var s = e.prototype;
              return (
                (s.onLoad = function () {
                  var t,
                    i,
                    a,
                    n = this;
                  (e.instance = this),
                    this.loaded_chat_items &&
                      (this.loaded_chat_items = this.loaded_chat_items_node.map(
                        function (t) {
                          return t.getComponent(g);
                        }
                      )),
                    null == (t = this.scr_chat) ||
                      t.node.on("scroll-began", function () {
                        d.stopAllByTarget(n.node), (n.isScrolling = !0);
                      }),
                    null == (i = this.scr_chat) ||
                      i.node.on("scroll-ended", function () {
                        _(n.node)
                          .sequence(
                            _().delay(0.5),
                            _().call(function () {
                              n.isScrolling = !1;
                            })
                          )
                          .start();
                      }),
                    null == (a = this.edbChat) ||
                      a.node.on("editing-did-began", function () {});
                }),
                (s.update = function (t) {
                  this.updateLayoutChat();
                }),
                (s.markAsDirty = function () {
                  this.is_chat_layout_dirty = !0;
                }),
                (s.updateLayoutChat = function () {
                  var t,
                    e = this;
                  if (
                    null != this.loaded_chat_items &&
                    0 != this.loaded_chat_items.length
                  ) {
                    var i = this.loaded_chat_items
                      .map(function (t) {
                        return t.getUITransform().contentSize.height;
                      })
                      .reduce(function (t, i) {
                        return t + i + e.spacing_chat;
                      });
                    if (
                      (null == (t = this.scr_chat_transform) ||
                        t.setContentSize(
                          this.scr_chat_transform.contentSize.width,
                          i
                        ),
                      this.is_chat_layout_dirty)
                    ) {
                      var a;
                      this.loaded_chat_items.filter(function (t) {
                        return t.isDirty();
                      }).length;
                      this.loaded_chat_items.forEach(function (t, i) {
                        if ((d.stopAllByTarget(t.node), i > 0)) {
                          var a = e.loaded_chat_items[i - 1].node.position,
                            n = new u(a.x, a.y, a.z);
                          (n.y -=
                            e.loaded_chat_items[i - 1].getUITransform()
                              .contentSize.height + e.spacing_chat),
                            t.node.setPosition(n);
                        }
                      });
                      for (
                        var n = [],
                          s = 0,
                          o = this.loaded_chat_items.length - 1;
                        o >= 0;
                        o--
                      ) {
                        var r = this.loaded_chat_items[o].node.position;
                        s +=
                          this.loaded_chat_items[o].getUITransform().contentSize
                            .height + this.spacing_chat;
                        var h = new u(r.x, r.y, r.z);
                        (h.y = s), n.push(h);
                      }
                      (n = n.reverse()),
                        f.isBrowser && f.platform == f.Platform.DESKTOP_BROWSER
                          ? this.loaded_chat_items.forEach(function (t, e) {
                              t.node.setPosition(new u(n[e].x, n[e].y, n[e].z));
                            })
                          : this.loaded_chat_items.forEach(function (t, e) {
                              _(t.node)
                                .to(0.2, {
                                  position: new u(n[e].x, n[e].y, n[e].z),
                                })
                                .start();
                            }),
                        null == (a = this.scr_chat) || a.scrollToBottom(),
                        (this.is_chat_layout_dirty = !1),
                        this.is_loaded_history || (this.is_loaded_history = !0);
                    }
                  }
                }),
                (s.isUpdatable = function () {
                  return (
                    this.is_loaded_history &&
                    !this.isScrolling &&
                    !this.is_chat_layout_dirty
                  );
                }),
                (s.loadChatHistory = function (t) {
                  for (
                    var e =
                        t.length > this.loaded_chat_items.length
                          ? this.loaded_chat_items.length
                          : t.length,
                      i = t.length - e;
                    i < t.length;
                    i++
                  ) {
                    var a = t[i],
                      n = a.displayName,
                      s = a.message,
                      o = a.isNoti,
                      r = a.isError,
                      h = this.loaded_chat_items.shift();
                    h && (h.node.active = !0),
                      o ? h && h.showNotifyMessage(n, s, r) : h && h.show(n, s),
                      h && this.loaded_chat_items.push(h);
                  }
                  this.is_chat_layout_dirty = !0;
                }),
                (s.updateChat = function (t) {
                  if (null != t && null != this.loaded_chat_items) {
                    for (
                      var e =
                          t.length > this.loaded_chat_items.length
                            ? this.loaded_chat_items.length
                            : t.length,
                        i = 0;
                      i < e;
                      i++
                    ) {
                      var a = t[i],
                        n = a.displayName,
                        s = a.message,
                        o = a.isNoti,
                        r = a.isError,
                        h = this.loaded_chat_items.shift();
                      h && (h.node.active = !0),
                        h && (h.node.parent = this.chat_item.parent),
                        o
                          ? h && h.showNotifyMessage(n, s, r)
                          : h && h.show(n, s),
                        h && this.loaded_chat_items.push(h);
                    }
                    this.is_chat_layout_dirty = !0;
                  }
                }),
                (s.sendMes = function () {
                  if (null != this.edbChat) {
                    var t = this.edbChat.string.trim();
                    (this.edbChat.string = ""),
                      t && p.getInstance().sendLoDeChatMessage(t);
                  }
                }),
                (s.reset = function () {
                  null != this.edbChat && (this.edbChat.string = "");
                }),
                (s.IsCenter = function () {
                  return !1;
                }),
                e
              );
            })(m)).instance = null),
            (D = e((L = x).prototype, "chat_item", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(L.prototype, "edbChat", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = e(L.prototype, "scr_chat", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = e(L.prototype, "scr_chat_transform", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = e(L.prototype, "loaded_chat_items_node", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (N = e(L.prototype, "spacing_chat", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 5;
              },
            })),
            (z = L))
          ) || z)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XDLiveStreamChatWebSocketHandler.ts",
  [
    "cc",
    "./XDLiveStreamChatController.ts",
    "./XocDiaLiveStreamController.ts",
    "./GameConfigManager.ts",
    "./State.ts",
  ],
  function (e) {
    "use strict";
    var t, n, s, o, i, c;
    return {
      setters: [
        function (e) {
          (t = e.cclegacy), (n = e._decorator);
        },
        function (e) {
          s = e.default;
        },
        function (e) {
          o = e.XocDiaLiveStreamController;
        },
        function (e) {
          i = e.GameConfigManager;
        },
        function (e) {
          c = e.state;
        },
      ],
      execute: function () {
        var a, r;
        e("WS_COMMAND", void 0),
          t._RF.push(
            {},
            "0dea4YULn5FOqtZZ7tXnhGm",
            "XDLiveStreamChatWebSocketHandler",
            void 0
          );
        var h,
          u = n.ccclass;
        n.property;
        !(function (e) {
          (e.LOG_IN = "login"),
            (e.FETCH_CHAT_BOX = "fetchChatBox"),
            (e.CHAT = "chat"),
            (e.ERROR = "error");
        })(h || (h = e("WS_COMMAND", {})));
        e(
          "default",
          u("XDLiveStreamChatWebSocketHandler")(
            (((r = (function () {
              function e() {
                (this.name = ""),
                  (this.urlServer = ""),
                  (this.isLoggedIn = !1),
                  (this.allowAutoReconnect = !1),
                  (this.noOfRetry = 0),
                  (this.maxRetry = 3),
                  (this.retryInterval = 5e3),
                  (this.reconnectTimeoutId = -1),
                  (this.ws = null),
                  (this.cmdQueue = []),
                  (this.onOpen = function () {}),
                  (this.onClose = function () {}),
                  (this.onConnect = function () {}),
                  (this.onMessage = function (e) {}),
                  (this.onError = function (e) {}),
                  (this.onConnectSuccessfully = function () {}),
                  (this.WS_ROOM_NAME_CHAT = "xd_livestream");
              }
              e.getInstance = function () {
                return (
                  this._instance || (this._instance = new e()), this._instance
                );
              };
              var t = e.prototype;
              return (
                (t.init = function () {
                  (this.name = "WebSocketHandler"),
                    (this.urlServer = i.getSportWSDomainURL());
                }),
                (t.connect = function () {
                  (this.isLoggedIn = !1),
                    this.ws &&
                      ((this.ws.onopen = null),
                      (this.ws.onmessage = null),
                      (this.ws.onclose = null),
                      (this.ws.onerror = null),
                      (this.ws = null)),
                    (this.ws = new WebSocket(this.urlServer)),
                    (this.ws.onopen = this.onWSOpen.bind(this)),
                    (this.ws.onmessage = this.onWsMessage.bind(this)),
                    (this.ws.onclose = this.onWSClose.bind(this)),
                    (this.ws.onerror = this.onWSError.bind(this));
                }),
                (t.onWSOpen = function (e) {
                  this.login();
                }),
                (t.login = function () {
                  console.log("WebSocketHandler login");
                  var e = {
                      command: h.LOG_IN,
                      accessToken: c.serverAccessToken,
                    },
                    t = JSON.stringify(e);
                  this.sendData(t);
                }),
                (t.onWsMessage = function (e) {
                  var t = JSON.parse(e.data);
                  switch (t.command) {
                    case h.LOG_IN:
                      (this.isLoggedIn = !0),
                        (this.noOfRetry = 0),
                        this.onConnectSuccessfully(),
                        this.fetchLoDeChatBox();
                      break;
                    case h.FETCH_CHAT_BOX:
                      var n = JSON.parse(e.data);
                      n.roomName == this.WS_ROOM_NAME_CHAT &&
                        s.getInstance().onFetchChatBox(n);
                      break;
                    case h.CHAT:
                      var o = JSON.parse(e.data);
                      o.roomName == this.WS_ROOM_NAME_CHAT &&
                        s.getInstance().onReceivedChat(o);
                      break;
                    case h.ERROR:
                      console.log("WS_COMMAND.ERROR:", t);
                  }
                }),
                (t.onWSClose = function (e) {
                  this.reconnect();
                }),
                (t.onWSError = function (e) {
                  this.reconnect();
                }),
                (t.sendData = function (e) {
                  var t;
                  null == (t = this.ws) || t.send(e);
                }),
                (t.fetchLoDeChatBox = function () {
                  var e = this;
                  if (this.isLoggedIn) {
                    console.log("WebSocketHandler fetch chat box");
                    var t = {
                        command: h.FETCH_CHAT_BOX,
                        roomName: this.WS_ROOM_NAME_CHAT,
                      },
                      n = JSON.stringify(t);
                    this.addQueue(n);
                  } else
                    setTimeout(function () {
                      e.fetchLoDeChatBox();
                    }, 1e3);
                }),
                (t.sendLoDeChatMessage = function (e) {
                  console.log("WebSocketHandler send chat message: " + e);
                  var t = {
                      command: h.CHAT,
                      roomName: this.WS_ROOM_NAME_CHAT,
                      message: e,
                    },
                    n = JSON.stringify(t);
                  this.addQueue(n);
                }),
                (t.addQueue = function (e) {
                  this.cmdQueue.push(e);
                }),
                (t.update = function (e) {
                  var t = this;
                  this.isLoggedIn &&
                    (this.cmdQueue.forEach(function (e) {
                      t.sendData(e);
                    }),
                    (this.cmdQueue = []));
                }),
                (t.close = function () {
                  console.log("WebSocketHandler close"),
                    (this.cmdQueue = []),
                    this.ws && (this.ws.close(), (this.ws = null)),
                    (this.allowAutoReconnect = !1),
                    clearTimeout(this.reconnectTimeoutId);
                }),
                (t.reconnect = function () {
                  var e,
                    t = this;
                  console.log("WebSocketHandler reconnect"),
                    null == (e = o.getInstance()) ||
                      e.refreshToken(function () {
                        t.connect();
                      });
                }),
                (t.needToReconnect = function () {
                  return (
                    !this.ws ||
                    (this.ws.readyState != this.ws.OPEN &&
                      this.ws.readyState != this.ws.CONNECTING)
                  );
                }),
                (t.onDestroy = function () {
                  this.close(), (e._instance = null);
                }),
                e
              );
            })())._instance = null),
            (a = r))
          ) || a
        );
        t._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XDLiveStreamGamePlayBridge.ts",
  ["cc", "./PersistManager.ts"],
  function (e) {
    "use strict";
    var i, n;
    return {
      setters: [
        function (e) {
          i = e.cclegacy;
        },
        function (e) {
          n = e.PersistManager;
        },
      ],
      execute: function () {
        i._RF.push(
          {},
          "90077yGfRVP7471uKWZH+rW",
          "XDLiveStreamGamePlayBridge",
          void 0
        );
        e(
          "XDLiveStreamGamePlayBridge",
          (function () {
            function e() {}
            return (
              (e.closeAllPopup = function () {
                n.getInstance().hideCommonPopup(),
                  n.getInstance().hideErrorPopup(),
                  n.getInstance().hideLoginPopup(),
                  n.getInstance().hideOTPPopup();
              }),
              (e.closeMiniGameNode = function () {}),
              (e.closeMiniGameNode2 = function () {}),
              (e.isShowingMiniGame = function () {}),
              (e.isOverlapMiniGame = function (e) {}),
              (e.adjustPositionMiniGameNode = function () {}),
              (e.adjustPositionMiniGameNodePortrait = function () {}),
              e
            );
          })()
        );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/xocdia-livestream",
  [
    "./Dealer_XDLiveStreamChatView.ts",
    "./XDLiveStreamChatController.ts",
    "./XDLiveStreamChatItem.ts",
    "./XDLiveStreamChatView.ts",
    "./XDLiveStreamChatWebSocketHandler.ts",
    "./XDLiveStreamGamePlayBridge.ts",
    "./XocDiaBetButton.ts",
    "./XocDiaLiveStreamController.ts",
    "./XocDiaLiveStreamNetwordHandler.ts",
    "./XDDealerChatViewPopup.ts",
    "./XocDiaLiveStreamBetHistoryItemView.ts",
    "./XocDiaLiveStreamBetHistoryView.ts",
    "./XocDiaLivestreamBetRankItemView.ts",
    "./XocDiaLivestreamBetRankView.ts",
    "./hihi.ts",
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
      ],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/XocDiaBetButton.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./BaseBetEntry.ts"],
  function (t) {
    "use strict";
    var e, n, o, c;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          c = t.BaseBetEntry;
        },
      ],
      execute: function () {
        var r;
        n._RF.push({}, "a0472Ph5/dCFJqVRHxEXUBJ", "XocDiaBetButton", void 0);
        var u = o.ccclass;
        o.property,
          t(
            "XocDiaBetButton",
            u("XocDiaBetButton")(
              (r = (function (t) {
                function n() {
                  return t.apply(this, arguments) || this;
                }
                return e(n, t), n;
              })(c))
            ) || r
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XocDiaLiveStreamBetHistoryItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./StringUtils.ts",
    "./LiveStreamConfig.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, r, o, a, h, _, c, l;
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
            (h = t.Label),
            (_ = t.Node),
            (c = t.Component);
        },
        function (t) {
          l = t.StringUtils;
        },
        null,
      ],
      execute: function () {
        var u, s, p, d, x, b, f, m, v, g, y, w, z, N, L, S, D, H, B, C, E;
        o._RF.push(
          {},
          "5e1712oysNNwbERNPZKdWN/",
          "XocDiaLiveStreamBetHistoryItemView",
          void 0
        );
        var I = a.ccclass,
          P = a.property;
        t(
          "default",
          ((u = I("XocDiaLiveStreamBetHistoryItemView")),
          (s = P(h)),
          (p = P(h)),
          (d = P(h)),
          (x = P(h)),
          (b = P(h)),
          (f = P([_])),
          (m = P(h)),
          (v = P(h)),
          (g = P(h)),
          u(
            ((z = i(
              (w = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, o = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    n(i, "txt_phien_title", z, r(i)),
                    n(i, "txt_phien_time", N, r(i)),
                    n(i, "txt_phien_cuadat", L, r(i)),
                    n(i, "txt_phien_datcuoc", S, r(i)),
                    n(i, "txt_phien_datcuoc2", D, r(i)),
                    n(i, "node_cuoc", H, r(i)),
                    n(i, "txt_phien_tienthang", B, r(i)),
                    n(i, "txt_phien_status", C, r(i)),
                    n(i, "lbl_result", E, r(i)),
                    i
                  );
                }
                e(i, t);
                var o = i.prototype;
                return (
                  (o.show = function (t, i, e, n, r, o, a, _, c, u) {
                    var s = this;
                    void 0 === u && (u = -1),
                      this.txt_phien_title &&
                        (this.txt_phien_title.node.active = !0),
                      this.txt_phien_time &&
                        (this.txt_phien_time.node.active = !0),
                      this.txt_phien_datcuoc &&
                        (this.txt_phien_datcuoc.node.active = !0),
                      this.txt_phien_datcuoc2 &&
                        (this.txt_phien_datcuoc2.node.active = !1),
                      this.lbl_result && (this.lbl_result.node.active = !0),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.node.active = !0),
                      this.txt_phien_title &&
                        (this.txt_phien_title.string = "" == t ? "" : "#" + t),
                      this.txt_phien_time && (this.txt_phien_time.string = i),
                      this.txt_phien_title &&
                        (this.txt_phien_title.node.active = !0),
                      this.txt_phien_time &&
                        (this.txt_phien_time.node.active = !0),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.node.active = !0),
                      this.txt_phien_cuadat &&
                        (this.txt_phien_cuadat.node.active = !0),
                      this.txt_phien_datcuoc &&
                        (this.txt_phien_datcuoc.node.active = !0);
                    var p = "";
                    (2 == u ? (p = "(Đã Huỷ)") : 3 == u && (p = "(Đã Đổi)"),
                    this.txt_phien_title &&
                      (this.txt_phien_title.string = "" == t ? "" : "#" + t),
                    this.txt_phien_time && (this.txt_phien_time.string = i),
                    this.lbl_result &&
                      (this.lbl_result.string = e + ("" != p ? "\n" : "") + p),
                    this.txt_phien_datcuoc) &&
                      (this.txt_phien_datcuoc2,
                      this.node_cuoc.length
                        ? (this.node_cuoc.forEach(function (t) {
                            return (t.active = !1);
                          }),
                          a.forEach(function (t, i) {
                            var e,
                              n,
                              r = t.split(":"),
                              o = null == (e = r[0]) ? void 0 : e.trim(),
                              a = null == (n = r[1]) ? void 0 : n.trim();
                            (s.node_cuoc[i].children[0].getComponent(h).string =
                              o + ":"),
                              (s.node_cuoc[i].children[1].getComponent(
                                h
                              ).string = a + ""),
                              (s.node_cuoc[i].active = !0);
                          }),
                          this.node_cuoc.forEach(function (t) {
                            t.parent.active = t.parent.children.some(function (
                              t
                            ) {
                              return t.active;
                            });
                          }))
                        : (this.txt_phien_datcuoc.string = isNaN(a)
                            ? a
                            : l.formatNumber(a)));
                    this.txt_phien_tienthang.string = isNaN(_)
                      ? _
                      : (_ >= 0 ? "" : "-") + l.formatNumber(_);
                  }),
                  (o.hide = function () {
                    this.txt_phien_title &&
                      (this.txt_phien_title.node.active = !1),
                      this.txt_phien_time &&
                        (this.txt_phien_time.node.active = !1),
                      this.txt_phien_cuadat &&
                        (this.txt_phien_cuadat.node.active = !1),
                      this.txt_phien_datcuoc &&
                        (this.txt_phien_datcuoc.node.active = !1),
                      this.txt_phien_datcuoc2 &&
                        (this.txt_phien_datcuoc2.node.active = !1),
                      this.lbl_result && (this.lbl_result.node.active = !1),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.node.active = !1);
                  }),
                  i
                );
              })(c)).prototype,
              "txt_phien_title",
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
            (N = i(w.prototype, "txt_phien_time", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = i(w.prototype, "txt_phien_cuadat", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = i(w.prototype, "txt_phien_datcuoc", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = i(w.prototype, "txt_phien_datcuoc2", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = i(w.prototype, "node_cuoc", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (B = i(w.prototype, "txt_phien_tienthang", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = i(w.prototype, "txt_phien_status", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = i(w.prototype, "lbl_result", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = w))
          ) || y)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XocDiaLiveStreamBetHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./XocDiaLiveStreamBetHistoryItemView.ts",
    "./CommonPopup.ts",
    "./PersistManager.ts",
    "./SocketManager.ts",
    "./BaseLiveStreamNetworkController.ts",
    "./XocDiaLiveStreamController.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, o, r, a, s, c, l, u, g, h, d, p, v;
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
            (s = e.Button),
            (c = e.Label),
            (l = e.UIOpacity);
        },
        function (e) {
          u = e.default;
        },
        function (e) {
          g = e.CommonPopup;
        },
        function (e) {
          h = e.PersistManager;
        },
        function (e) {
          d = e.MessageRequest;
        },
        function (e) {
          p = e.LiveStreamMessage;
        },
        function (e) {
          v = e.XocDiaLiveStreamController;
        },
      ],
      execute: function () {
        var f, m, b, _, y, P, S, w, D, L, x;
        r._RF.push(
          {},
          "b3d0fJ9581Nh4+vq4UJ/QQQ",
          "XocDiaLiveStreamBetHistoryView",
          void 0
        );
        var C = a.ccclass,
          H = a.property;
        e("XocDiaBetResult", function () {
          (this.sotien = void 0),
            (this.received = void 0),
            (this.cuadat = void 0),
            (this.result = void 0),
            (this.sessionID = void 0),
            (this.betTime = void 0),
            (this.bet = void 0),
            (this.eid = void 0),
            (this.gs = void 0);
        }),
          e(
            "default",
            ((f = C("XocDiaLiveStreamBetHistoryView")),
            (m = H([u])),
            (b = H(s)),
            (_ = H(s)),
            (y = H(c)),
            f(
              ((w = t(
                (S = (function (e) {
                  function t() {
                    for (
                      var t, i = arguments.length, r = new Array(i), a = 0;
                      a < i;
                      a++
                    )
                      r[a] = arguments[a];
                    return (
                      (t = e.call.apply(e, [this].concat(r)) || this),
                      n(t, "item_views", w, o(t)),
                      n(t, "btn_prev", D, o(t)),
                      n(t, "btn_next", L, o(t)),
                      n(t, "lbl_page", x, o(t)),
                      (t._bets = []),
                      (t.currentPage = 1),
                      (t.max_item = 6),
                      (t.max_pages = 500),
                      t
                    );
                  }
                  i(t, e);
                  var r = t.prototype;
                  return (
                    (r.getPagesCount = function () {
                      return this.max_pages;
                    }),
                    (r.onLoad = function () {
                      var t,
                        i,
                        n = this;
                      e.prototype.onLoad.call(this),
                        null == (t = this.btn_prev) ||
                          t.node.on("click", function () {
                            n.currentPage - 1 > 0 &&
                              ((n.currentPage -= 1),
                              n.lbl_page &&
                                (n.lbl_page.string = n.currentPage.toString())),
                              n.fetchXocDiaLiveStreamHistory(!1);
                          }),
                        null == (i = this.btn_next) ||
                          i.node.on("click", function () {
                            n.currentPage + 1 < n.getPagesCount() &&
                              ((n.currentPage += 1),
                              n.lbl_page &&
                                (n.lbl_page.string = n.currentPage.toString())),
                              n.fetchXocDiaLiveStreamHistory(!1);
                          });
                    }),
                    (r.goToFirstPage = function () {
                      (this.currentPage = 1),
                        this.lbl_page &&
                          (this.lbl_page.string = this.currentPage.toString());
                    }),
                    (r.fetchXocDiaLiveStreamHistory = function (e) {
                      var t, i;
                      void 0 === e && (e = !0), e && this.goToFirstPage();
                      var n = {};
                      (n.cmd = p.GET_BET_HISTORY),
                        (n.limit = 6),
                        (n.skip = 6 * (this.currentPage - 1)),
                        null == (t = v.getInstance()) ||
                          null == (i = t.getNetworkHandler()) ||
                          i.sendWithZoneAndChannel(d.ZonePlugin_Type, n);
                    }),
                    (r.showBetHistory = function (e) {
                      var t = this;
                      void 0 === e && (e = !0),
                        this.item_views.forEach(function (e, i) {
                          var n = (t.currentPage - 1) * t.max_item,
                            o = t._bets[i + n];
                          null != o && null != o
                            ? ((e.node.getComponent(l).opacity = 255),
                              e.show(
                                o.sessionID,
                                o.betTime,
                                o.eid,
                                o.d1,
                                o.d2,
                                o.d3,
                                o.bet,
                                o.received,
                                o.refunded
                              ))
                            : ((e.node.getComponent(l).opacity = 1), e.hide());
                        }),
                        e &&
                          (this.setResolutionScale(this.fixedScale),
                          this.show());
                    }),
                    (r.bindAndShowXDBetHistory = function (e, t) {
                      var i = this;
                      (this._bets = e),
                        (this.max_pages = t / this.max_item + 1),
                        this.item_views.forEach(function (e, t) {
                          var n = i._bets[t];
                          null != n && null != n
                            ? ((e.node.getComponent(l).opacity = 255),
                              i.isPortrait &&
                                (n.eid = n.eid.replace("/", "\n")),
                              e.show(
                                n.sessionID,
                                n.betTime,
                                n.eid,
                                n.d1,
                                n.d2,
                                n.d3,
                                n.bet,
                                n.received,
                                n.refunded,
                                n.gs
                              ))
                            : ((e.node.getComponent(l).opacity = 1), e.hide());
                        }),
                        this.IsShowing() ||
                          (this.setResolutionScale(this.fixedScale),
                          this.show()),
                        h.getInstance().hideLoading();
                    }),
                    t
                  );
                })(g)).prototype,
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
              (D = t(S.prototype, "btn_prev", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (L = t(S.prototype, "btn_next", [_], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (x = t(S.prototype, "lbl_page", [y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (P = S))
            ) || P)
          );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XocDiaLivestreamBetRankItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var i, e, n, r, a, s, o, u, c, _;
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
            (s = t._decorator),
            (o = t.Label),
            (u = t.Sprite),
            (c = t.Component);
        },
        function (t) {
          _ = t.StringUtils;
        },
      ],
      execute: function () {
        var l, h, p, m, x, k, v, f, w, d, b;
        a._RF.push(
          {},
          "daba00tJC1JiKvsRLQOiqGP",
          "XocDiaLivestreamBetRankItemView",
          void 0
        );
        var g = s.ccclass,
          y = s.property;
        t(
          "XocDiaLivestreamBetRankItemView",
          ((l = g("XocDiaLivestreamBetRankItemView")),
          (h = y(o)),
          (p = y(u)),
          (m = y(o)),
          (x = y(o)),
          l(
            ((f = i(
              (v = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, a = new Array(e), s = 0;
                    s < e;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (i = t.call.apply(t, [this].concat(a)) || this),
                    n(i, "txt_rank", f, r(i)),
                    n(i, "spr_rank", w, r(i)),
                    n(i, "txt_username", d, r(i)),
                    n(i, "txt_win_amount", b, r(i)),
                    i
                  );
                }
                e(i, t);
                var a = i.prototype;
                return (
                  (a.show = function (t, i, e) {
                    this.txt_username && (this.txt_username.node.active = !0),
                      this.txt_win_amount &&
                        (this.txt_win_amount.node.active = !0),
                      t > 3
                        ? (this.txt_rank && (this.txt_rank.node.active = !0),
                          this.spr_rank && (this.spr_rank.node.active = !1),
                          this.txt_rank &&
                            (this.txt_rank.string = t.toString()))
                        : (this.txt_rank && (this.txt_rank.node.active = !1),
                          this.spr_rank && (this.spr_rank.node.active = !0)),
                      this.txt_username &&
                        (this.txt_username.string = i.toString()),
                      this.txt_win_amount &&
                        (this.txt_win_amount.string = isNaN(e)
                          ? e
                          : _.formatNumber(e));
                  }),
                  (a.hide = function () {
                    this.txt_rank && (this.txt_rank.node.active = !1),
                      this.spr_rank && (this.spr_rank.node.active = !1),
                      this.txt_username && (this.txt_username.node.active = !1),
                      this.txt_win_amount &&
                        (this.txt_win_amount.node.active = !1);
                  }),
                  i
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
            (w = i(v.prototype, "spr_rank", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = i(v.prototype, "txt_username", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = i(v.prototype, "txt_win_amount", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = v))
          ) || k)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XocDiaLivestreamBetRankView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./HttpManager.ts",
    "./XocDiaLivestreamBetRankItemView.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, a, r, o, s, c, u, l, p;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy), (o = t._decorator), (s = t.ScrollView);
        },
        function (t) {
          c = t.CommonPopup;
        },
        function (t) {
          u = t.GameConfigManager;
        },
        function (t) {
          l = t.httpManager;
        },
        function (t) {
          p = t.XocDiaLivestreamBetRankItemView;
        },
      ],
      execute: function () {
        var h, m, f, v, k, w, d;
        r._RF.push(
          {},
          "025c91E4rZFYoXctb4cTTUM",
          "XocDiaLivestreamBetRankView",
          void 0
        );
        var g = o.ccclass,
          y = o.property,
          L = function () {
            (this.rank = void 0),
              (this.displayName = void 0),
              (this.amount = void 0);
          };
        t(
          "default",
          ((h = g("XocDiaLivestreamBetRankView")),
          (m = y([p])),
          (f = y(s)),
          h(
            ((w = e(
              (k = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, r = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    r[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    i(e, "item_views", w, a(e)),
                    i(e, "srcView", d, a(e)),
                    (e._rank = []),
                    e
                  );
                }
                n(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this);
                  }),
                  (r.getXocDiaLiveStreamRank = function () {
                    return u.getXDLivestreamDomainURL() + "top-user";
                  }),
                  (r.fetchXDLiveStreamRank = function () {
                    var t = this,
                      e = this.getXocDiaLiveStreamRank();
                    l.sendGET({
                      url: e,
                      onCompleted: function (e) {
                        t._rank = [];
                        for (
                          var n = (e = JSON.parse(e)), i = 0;
                          i < n.length;
                          i++
                        ) {
                          var a = n[i],
                            r = new L();
                          (r.rank = i + 1),
                            (r.displayName = a.name),
                            (r.amount = a.totalWin),
                            t._rank.push(r);
                        }
                        t.showRank();
                      },
                    });
                  }),
                  (r.showRank = function () {
                    var t,
                      e = this;
                    (this._rank = this._rank.sort(function (t, e) {
                      return t.rank - e.rank;
                    })),
                      this.item_views.forEach(function (t, n) {
                        var i = e._rank[n];
                        null != i && null != i
                          ? ((t.node.active = !0),
                            t.show(i.rank, i.displayName, i.amount))
                          : ((t.node.active = !1), t.hide());
                      }),
                      null == (t = this.srcView) || t.scrollToTop(),
                      this.show();
                  }),
                  (r.showXDLiveStreamBetRank = function (t) {
                    this._rank = [];
                    for (var e = 0; e < t.length; e++) {
                      var n = t[e],
                        i = new L();
                      (i.rank = n.r),
                        (i.displayName = n.dn),
                        (i.amount = n.m),
                        this._rank.push(i);
                    }
                    this.showRank();
                  }),
                  e
                );
              })(c)).prototype,
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
            (d = e(k.prototype, "srcView", [f], {
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
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XocDiaLiveStreamController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./XDLiveStreamChatController.ts",
    "./XDLiveStreamChatWebSocketHandler.ts",
    "./XocDiaLiveStreamNetwordHandler.ts",
    "./CommonPopup.ts",
    "./State.ts",
    "./GameConfigManager.ts",
    "./SocketManager.ts",
    "./XDLiveStreamGamePlayBridge.ts",
    "./PersistManager.ts",
    "./ScaleCmp.ts",
    "./XocDiaLiveStreamBetHistoryView.ts",
    "./HttpManager.ts",
    "./StringUtils.ts",
    "./XDDealerChatViewPopup.ts",
    "./SoundManager.ts",
    "./BaseLiveStreamController.ts",
    "./BaseLiveStreamNetworkController.ts",
    "./EventManager.ts",
    "./Define.ts",
  ],
  function (t) {
    "use strict";
    var e,
      i,
      n,
      s,
      o,
      r,
      a,
      l,
      u,
      c,
      h,
      d,
      p,
      w,
      _,
      g,
      f,
      b,
      m,
      v,
      S,
      B,
      y,
      V,
      I,
      C,
      T,
      D,
      L,
      k,
      E,
      N,
      R,
      P,
      x,
      M,
      H,
      W,
      O,
      X,
      A,
      G;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (s = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (r = t._decorator),
            (a = t.sys),
            (l = t.Label),
            (u = t.Sprite),
            (c = t.SpriteFrame),
            (h = t.Node),
            (d = t.AudioClip),
            (p = t.sp),
            (w = t.Toggle),
            (_ = t.Tween),
            (g = t.tween),
            (f = t.Vec3),
            (b = t.director),
            (m = t.UIOpacity);
        },
        function (t) {
          v = t.default;
        },
        function (t) {
          S = t.default;
        },
        function (t) {
          B = t.XocDiaLiveStreamNetwordHandler;
        },
        function (t) {
          y = t.CommonPopup;
        },
        function (t) {
          V = t.state;
        },
        function (t) {
          I = t.GameConfigManager;
        },
        function (t) {
          C = t.GLOBAL_MESSAGE;
        },
        function (t) {
          T = t.XDLiveStreamGamePlayBridge;
        },
        function (t) {
          D = t.PersistManager;
        },
        function (t) {
          L = t.default;
        },
        function (t) {
          (k = t.default), (E = t.XocDiaBetResult);
        },
        function (t) {
          N = t.httpManager;
        },
        function (t) {
          R = t.StringUtils;
        },
        function (t) {
          P = t.XDDealerChatViewPopup;
        },
        function (t) {
          x = t.SoundManager;
        },
        function (t) {
          (M = t.LiveGameState), (H = t.BaseLiveStreamController);
        },
        function (t) {
          W = t.LiveStreamMessage;
        },
        function (t) {
          (O = t.eventManager), (X = t.EventKey);
        },
        function (t) {
          (A = t.StorageKey), (G = t.GameID);
        },
      ],
      execute: function () {
        var U,
          F,
          z,
          j,
          q,
          J,
          K,
          Y,
          Z,
          Q,
          $,
          tt,
          et,
          it,
          nt,
          st,
          ot,
          rt,
          at,
          lt,
          ut,
          ct,
          ht,
          dt,
          pt,
          wt,
          _t,
          gt,
          ft,
          bt,
          mt,
          vt,
          St,
          Bt,
          yt,
          Vt;
        o._RF.push(
          {},
          "b816bZgBOBNg7hRw14MRS4l",
          "XocDiaLiveStreamController",
          void 0
        );
        var It = r.ccclass,
          Ct = r.property;
        a.isBrowser &&
          window.addEventListener("message", function (t) {
            var e,
              i = t.data;
            if ("video_play" == i)
              null == (e = Dt.getInstance()) || e.onLoadedVideo();
            else if ("video_unmute" == i) {
              var n;
              null == (n = Dt.getInstance()) || n.onVideoUnmute();
            }
          });
        var Tt = t("XocDiaLiveStreamResult", function () {
            (this.result_code = 0), (this.sessionID = ""), (this.time = 0);
          }),
          Dt = t(
            "XocDiaLiveStreamController",
            ((U = It("XocDiaLiveStreamController")),
            (F = Ct([l])),
            (z = Ct([l])),
            (j = Ct([u])),
            (q = Ct([u])),
            (J = Ct([c])),
            (K = Ct(h)),
            (Y = Ct(l)),
            (Z = Ct(d)),
            (Q = Ct(P)),
            ($ = Ct(y)),
            (tt = Ct(k)),
            (et = Ct(h)),
            (it = Ct(p.Skeleton)),
            (nt = Ct(w)),
            (st = Ct(u)),
            (ot = Ct(d)),
            U(
              (((Vt = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "lbl_states", lt, s(e)),
                    n(e, "dealer_lbl_states", ut, s(e)),
                    n(e, "spr_cau", ct, s(e)),
                    (e.cau_item_pos = []),
                    n(e, "dealer_spr_cau", ht, s(e)),
                    n(e, "sprFrame_cau", dt, s(e)),
                    n(e, "result_node", pt, s(e)),
                    n(e, "refundMoney", wt, s(e)),
                    n(e, "countdown_sfx", _t, s(e)),
                    n(e, "xdDealerChatViewPopup", gt, s(e)),
                    n(e, "xdDealerCauViewPopup", ft, s(e)),
                    n(e, "xdliveBetHistoryView", bt, s(e)),
                    n(e, "maintain_node", mt, s(e)),
                    n(e, "ske_noti", vt, s(e)),
                    n(e, "btn_sound_livestream", St, s(e)),
                    n(e, "spr_countdown_circle", Bt, s(e)),
                    n(e, "click_sfx", yt, s(e)),
                    (e.result = []),
                    (e.currentSessionIndex = 0),
                    (e.taiXiuBetHistories = []),
                    (e.isSoundOnLiveStream = !0),
                    e
                  );
                }
                i(e, t),
                  (e.getInstance = function () {
                    return e.instance;
                  });
                var o = e.prototype;
                return (
                  (o.getComponentName = function () {
                    return "XocDiaLiveStreamController";
                  }),
                  (o.getBGMVideoURL = function () {
                    return "/789/res/bgm-xdlive.mp3";
                  }),
                  (o.showMessage = function (t) {
                    var e = this;
                    this.noti &&
                      (_.stopAllByTarget(this.noti),
                      (this.noti.opacity = 0),
                      (this.noti.node.children[1].getComponent(l).string = t),
                      (this.noti.node.active = !0),
                      g(this.noti)
                        .sequence(
                          g(this.noti).to(0.2, { opacity: 255 }),
                          g().delay(2),
                          g(this.noti)
                            .to(0.3, { opacity: 1 })
                            .call(function () {
                              e.noti && (e.noti.node.active = !1);
                            })
                        )
                        .start());
                    D.showNoti(t);
                  }),
                  (o.sendBetChan = function () {
                    var t;
                    null == (t = this.basebetEntries[1]) || t.sendBetWithSfx();
                  }),
                  (o.sendBetLe = function () {
                    var t;
                    null == (t = this.basebetEntries[0]) || t.sendBetWithSfx();
                  }),
                  (o.sendClosePopup = function () {
                    var t,
                      e,
                      i,
                      n,
                      s,
                      o,
                      r,
                      a,
                      l = !1;
                    (this.settingPopup &&
                      this.settingPopup.IsShowing() &&
                      (this.settingPopup.close(), (l = !0)),
                    this.xdliveBetHistoryView &&
                      null != (t = this.xdliveBetHistoryView) &&
                      t.IsShowing()) &&
                      (null == (s = this.xdliveBetHistoryView) ||
                        s.hideImmediately(),
                      (l = !0));
                    this.liveStreamTipRankView &&
                      null != (e = this.liveStreamTipRankView) &&
                      e.IsShowing() &&
                      (null == (o = this.liveStreamTipRankView) ||
                        o.hideImmediately(),
                      (l = !0));
                    this.liveStreamRankView &&
                      null != (i = this.liveStreamRankView) &&
                      i.IsShowing() &&
                      (null == (r = this.liveStreamRankView) ||
                        r.hideImmediately(),
                      (l = !0));
                    (this.scrollViewInfoPopup &&
                      this.scrollViewInfoPopup.IsShowing() &&
                      (this.scrollViewInfoPopup.hideImmediately(), (l = !0)),
                    this.giftPopup &&
                      null != (n = this.giftPopup) &&
                      n.isShowing()) &&
                      (null == (a = this.giftPopup) || a.hide(), (l = !0));
                    return l;
                  }),
                  (o.showSettingPopup = function () {
                    x.getInstance().playSfx(this.click_sfx),
                      this.settingPopup && this.settingPopup.show();
                  }),
                  (o.onLoad = function () {
                    var i,
                      n = this;
                    if (
                      ((this.networkController = new B(this)),
                      (e.instance = this),
                      t.prototype.onLoad.call(this),
                      (this.my_bet = [0, 0, 0, 0, 0, 0]),
                      null == (i = this.btn_cau_dealer) ||
                        i.node.on("click", function () {
                          var t;
                          null == (t = n.xdDealerCauViewPopup) ||
                            t.showImmediately();
                        }),
                      T.adjustPositionMiniGameNode(),
                      (this.cau_item_pos = this.spr_cau.map(function (t) {
                        return new f(
                          t.node.position.x,
                          t.node.position.y,
                          t.node.position.z
                        );
                      })),
                      this.btn_sound_livestream &&
                        this.btn_sound_livestream.node.on(
                          "toggle",
                          this.soundOn,
                          this
                        ),
                      O.on(X.RefreshMoney, this, function (t) {
                        return n.refreshMoney(t);
                      }),
                      a.isBrowser &&
                        (D.getInstance().showMinigame(!1),
                        a.browserType != a.BrowserType.SAFARI))
                    ) {
                      var s;
                      this.unMuteHtmlCallBack();
                      var o,
                        r =
                          null == (s = this.webView)
                            ? void 0
                            : s.node.position.clone();
                      if (r)
                        (r.x = 3e3),
                          null == (o = this.webView) || o.node.setPosition(r);
                    }
                  }),
                  (o.start = function () {
                    t.prototype.start.call(this);
                  }),
                  (o.onWebViewLoaded = function (t) {
                    t &&
                      t.url.length > 0 &&
                      ((this.isLoadedWebView = !0), this.assignDataToWV());
                  }),
                  (o.assignDataToWV = function () {
                    if (this.isLoadedWebView && !this.isEngineUpdated()) {
                      var t,
                        e,
                        i = R.formatNumber(
                          null == (t = this.basebetEntries[0])
                            ? void 0
                            : t.getTotalBet()
                        ),
                        n = R.formatNumber(
                          null == (e = this.basebetEntries[1])
                            ? void 0
                            : e.getTotalBet()
                        );
                      this.webView &&
                        (this.webView.sendToWebView("moneyLe", i),
                        this.webView.sendToWebView("moneyChan", n),
                        this.webView.sendToWebView(
                          "countDown",
                          (this.current_count_down < 10 ? "0" : "") +
                            this.current_count_down.toString()
                        ),
                        this.dealerName &&
                          this.webView.sendToWebView(
                            "setDealerName",
                            this.dealerName.string
                          ));
                    }
                  }),
                  (o.updateHighlightStateToWV = function () {
                    var t, e;
                    if (null != this.webView) {
                      var i = !1;
                      if (
                        null != (t = this.basebetEntries[0]) &&
                        t.isHighlight()
                      ) {
                        var n;
                        i = !0;
                        var s =
                          (null == (n = this.basebetEntries[0])
                            ? void 0
                            : n.getHighlightOpacity()) / 255;
                        this.webView.sendToWebView("highlightLe", s.toString());
                      }
                      if (
                        null != (e = this.basebetEntries[1]) &&
                        e.isHighlight()
                      ) {
                        var o;
                        i = !0;
                        var r =
                          (null == (o = this.basebetEntries[1])
                            ? void 0
                            : o.getHighlightOpacity()) / 255;
                        this.webView.sendToWebView(
                          "highlightChan",
                          r.toString()
                        );
                      }
                      0 == i &&
                        this.webView &&
                        this.webView.sendToWebView("resetHighlight");
                    }
                  }),
                  (o.setWebViewDark = function (t) {
                    null != this.webView &&
                      (t
                        ? this.webView.sendToWebView("dark")
                        : this.webView.sendToWebView("light"));
                  }),
                  (o.update = function (t) {
                    this.isLoadedWebView &&
                      !this.isEngineUpdated() &&
                      (this.updateHighlightStateToWV(),
                      this.setWebViewDark(this.needToBlackWebView()),
                      this.needToHideWebView()
                        ? this.moveWebViewOutOfScreen()
                        : this.moveWebViewIntoScreen());
                  }),
                  (o.refreshToken = function (t) {
                    N.refreshToken(function () {
                      N.refreshBauCuaLivestreamToken(function () {
                        t && t();
                      });
                    });
                  }),
                  (o.releaseGame = function () {
                    var t, e;
                    (this.isClosingGame = !0),
                      this.loading_node && (this.loading_node.active = !0),
                      this.destroyBgmPlayer(),
                      this.webView &&
                        (this.webView.cleanUpWebview(!0),
                        (this.webView = null)),
                      this.webViewBg &&
                        (this.webViewBg.cleanUpWebview(!0),
                        (this.webViewBg = null)),
                      this.stopCheckConnection(),
                      null == (t = this.networkController) || t.unsubcribe(),
                      null == (e = this.networkController) || e.close(),
                      T.closeAllPopup(),
                      T.closeMiniGameNode(),
                      this.endTransparentCanvas();
                  }),
                  (o.closeGame = function () {
                    this.releaseGame(), b.emit("INTEGRATION_BACK_TO_LOBBY");
                  }),
                  (o.connectToServer = function () {
                    var t;
                    D.getInstance().showLoading();
                    var e = I.getXocDiaLiveStreamWSURL();
                    null == (t = this.networkController) || t.init(e);
                  }),
                  (o.initUI = function () {
                    this.resetUI(),
                      this.lbl_sessionID &&
                        (this.lbl_sessionID.string = "-------"),
                      this.lbl_countdown && (this.lbl_countdown.string = "00"),
                      this.spr_countdown_circle &&
                        (this.spr_countdown_circle.fillRange = 0),
                      this.updateUserInfoUI(),
                      T.adjustPositionMiniGameNode();
                  }),
                  (o.getHistories = function () {
                    var t;
                    D.getInstance().showLoading(),
                      (this.taiXiuBetHistories = []),
                      null == (t = this.xdliveBetHistoryView) ||
                        t.fetchXocDiaLiveStreamHistory(!0);
                  }),
                  (o.showHistory = function (t) {
                    var e,
                      i = this;
                    this.taiXiuBetHistories = [];
                    var n = t.items,
                      s = t.count;
                    n.forEach(function (t) {
                      var e = new E(),
                        n = t.sid,
                        s = t.et,
                        o = t.bs,
                        r = t.wm,
                        a = t.gS,
                        l = t.rs,
                        u = "";
                      ("" == l || null == l ? [] : l.split(",")).forEach(
                        function (t) {
                          (u += t % 2 == 0 ? "Chẵn" : "Lẻ"),
                            0 == t
                              ? (u += "/4 Trắng")
                              : 1 == t
                              ? (u += "/3 Trắng")
                              : 3 == t
                              ? (u += "/3 Đỏ")
                              : 4 == t && (u += "/4 Đỏ");
                        }
                      );
                      var c = [];
                      o.forEach(function (t) {
                        if (t.b > 0) {
                          var e = "";
                          "EVEN" == t.eid
                            ? (e = "Chẵn")
                            : "ODD" == t.eid
                            ? (e = "Lẻ")
                            : "WHITE_X4" == t.eid
                            ? (e = "4 Trắng")
                            : "WHITE_X3" == t.eid
                            ? (e = "3 Trắng")
                            : "RED_X4" == t.eid
                            ? (e = "4 Đỏ")
                            : "RED_X3" == t.eid && (e = "3 Đỏ"),
                            c.push(e + ":" + R.formatMoneyNumber(t.b));
                        }
                      }),
                        (e.sessionID = null == n ? "" : n),
                        (e.betTime =
                          null == s ? "" : R.formatTime(new Date(s))),
                        (e.bet = null == c ? "" : c),
                        (e.eid = null == u ? "" : u),
                        (e.received = r),
                        (e.gs = a),
                        i.taiXiuBetHistories.push(e);
                    }),
                      null == (e = this.xdliveBetHistoryView) ||
                        e.bindAndShowXDBetHistory(this.taiXiuBetHistories, s),
                      D.getInstance().hideLoading();
                  }),
                  (o.updateCurrentBet = function (t) {
                    var e = this;
                    t.bs.forEach(function (t) {
                      var i = t.eid,
                        n = t.b,
                        s = e.basebetEntries.find(function (t) {
                          return t.getName() == i;
                        });
                      null == s || s.setCurrentBet(n);
                    }),
                      this.assignDataToWV();
                  }),
                  (o.connectChatBox = function () {
                    S.getInstance().init(), S.getInstance().connect();
                  }),
                  (o.setGameState = function (t) {
                    var e = t[1];
                    switch (e.status) {
                      case "ENDED":
                        this.gameState = M.ENDED;
                        break;
                      case "RESULTING":
                        this.gameState = M.RESULTING;
                        break;
                      default:
                        this.gameState = M.BETTING;
                    }
                    var i = e.sessionId,
                      n = e.status;
                    (this.stopBetSecond =
                      e.stopBetSecond || this.stopBetSecond),
                      (this.totalTimeBet = e.timeBet),
                      (this.betValues = e.coins),
                      this.chipPanel &&
                        this.chipPanel.initChipPanel(this.betValues),
                      this.lbl_sessionID &&
                        (this.lbl_sessionID.string = "#" + i);
                    var s = e.dealerName;
                    this.setDealerName(s);
                    var o = e.timeBetCountdown;
                    "ENDBET" == n && (o = 0),
                      this.basebetEntries.forEach(function (t) {
                        return t.reset();
                      }),
                      this.spr_countdown_circle &&
                        (this.spr_countdown_circle.fillRange =
                          0 == this.current_count_down
                            ? 0
                            : this.current_count_down / this.totalTimeBet),
                      this.startCountDown(o),
                      (this.sessionID = i);
                    var r = e.bs;
                    this.updateRoundBetInfo(r);
                    var a = e.b;
                    this.updateUserBetInfo(a);
                    var l = e.uC;
                    l &&
                      this.lbl_userOnline &&
                      (this.lbl_userOnline.string = l.toString()),
                      (this.result = []);
                    for (
                      var u = e.htr, c = u.length < 100 ? 0 : u.length - 101;
                      c < u.length;
                      c++
                    ) {
                      var h = u[c],
                        d = new Tt();
                      (d.result_code = +h.resultRaw),
                        (d.sessionID = h.sessionId),
                        this.result.unshift(d);
                    }
                    this.cancelLastXiNgauFx(),
                      this.updateCau(),
                      this.updateLastResult();
                  }),
                  (o.updateCau = function (t) {
                    var e = this;
                    void 0 === t && (t = !1);
                    var i = 0,
                      n = 0,
                      s = 0,
                      o = 0,
                      r = 0,
                      a = 0;
                    if (t) {
                      var l = this.spr_cau.pop();
                      l && ((l.node.active = !1), this.spr_cau.unshift(l)),
                        this.spr_cau.forEach(function (t, i) {
                          _.stopAllByTarget(t.node), (t.node.active = !0);
                          var n = e.cau_item_pos[i],
                            s = t.getComponent(L);
                          s &&
                            n &&
                            (0 != i
                              ? ((s.enabled = !1),
                                s.stop(new f(1, 1, 1)),
                                g(t.node)
                                  .to(0.4, { position: new f(n) })
                                  .start())
                              : ((s.enabled = !0),
                                s.stop(new f(1, 1, 1)),
                                t.node.setPosition(new f(n.x, n.y + 10)),
                                g(t.node)
                                  .sequence(
                                    g().delay(0.4),
                                    g().by(0.4, { position: new f(0, -10, 0) }),
                                    g().call(function () {
                                      s.run(1);
                                    })
                                  )
                                  .start()));
                        });
                    } else
                      this.spr_cau.forEach(function (t, i) {
                        var n = t.getComponent(L);
                        _.stopAllByTarget(t.node),
                          n &&
                            (0 != i
                              ? ((n.enabled = !1), n.stop(new f(1, 1, 1)))
                              : ((n.enabled = !0), n.run(1))),
                          (t.node.active = !0);
                        var s = e.cau_item_pos[i];
                        s && t.node.setPosition(s);
                      });
                    for (var u = 0; u < this.spr_cau.length; u++)
                      if (null != this.result[u] && null != this.result[u]) {
                        var c = this.result[u].result_code,
                          h =
                            c % 2 == 0
                              ? this.sprFrame_cau[0]
                              : this.sprFrame_cau[1];
                        if (
                          (h && (this.spr_cau[u].spriteFrame = h),
                          this.dealer_spr_cau[u])
                        ) {
                          var d =
                            c % 2 == 0
                              ? this.sprFrame_cau[0]
                              : this.sprFrame_cau[1];
                          d && (this.dealer_spr_cau[u].spriteFrame = d);
                        }
                        c % 2 == 0 ? i++ : n++,
                          0 == c
                            ? s++
                            : 1 == c
                            ? o++
                            : 3 == c
                            ? a++
                            : 4 == c && r++;
                      }
                    this.lbl_states[0] &&
                      (this.lbl_states[0].string =
                        (i < 10 ? "0" : "") + i.toString()),
                      this.lbl_states[1] &&
                        (this.lbl_states[1].string =
                          (n < 10 ? "0" : "") + n.toString()),
                      this.lbl_states[2] &&
                        (this.lbl_states[2].string =
                          (r < 10 ? "0" : "") + r.toString()),
                      this.lbl_states[3] &&
                        (this.lbl_states[3].string =
                          (a < 10 ? "0" : "") + a.toString()),
                      this.lbl_states[4] &&
                        (this.lbl_states[4].string =
                          (s < 10 ? "0" : "") + s.toString()),
                      this.lbl_states[5] &&
                        (this.lbl_states[5].string =
                          (o < 10 ? "0" : "") + o.toString()),
                      this.dealer_lbl_states[0] &&
                        (this.dealer_lbl_states[0].string =
                          (i < 10 ? "0" : "") + i.toString()),
                      this.dealer_lbl_states[1] &&
                        (this.dealer_lbl_states[1].string =
                          (n < 10 ? "0" : "") + n.toString()),
                      this.dealer_lbl_states[2] &&
                        (this.dealer_lbl_states[2].string =
                          (r < 10 ? "0" : "") + r.toString()),
                      this.dealer_lbl_states[3] &&
                        (this.dealer_lbl_states[3].string =
                          (a < 10 ? "0" : "") + a.toString()),
                      this.dealer_lbl_states[4] &&
                        (this.dealer_lbl_states[4].string =
                          (s < 10 ? "0" : "") + s.toString()),
                      this.dealer_lbl_states[5] &&
                        (this.dealer_lbl_states[5].string =
                          (o < 10 ? "0" : "") + o.toString());
                  }),
                  (o.onSubcription = function () {
                    (this.result = []),
                      t.prototype.onSubcription.call(this),
                      v.getInstance().fetchChatBox();
                  }),
                  (o.loadLiveVideo = function () {
                    var t = this,
                      e = I.getStreamTokenUrl,
                      i = {};
                    (i.gameId = G.XOCDIA_LIVESTREAM_2),
                      a.isBrowser &&
                        (i.site = window.location.origin.split("//")[1]);
                    var n = JSON.stringify(i);
                    this.webView &&
                      a.isNative &&
                      this.webView.setOnMessage(function (e) {
                        return t.nativeHtmlCallBack(e);
                      }),
                      N.sendPOST({
                        url: e,
                        data: n,
                        onCompleted: function (e) {
                          var i = JSON.parse(e).data,
                            n = i.streamName,
                            s = i.token,
                            o = t.isSoundOnLiveStream
                              ? "&isMutedByManual=0"
                              : "&isMutedByManual=1",
                            r = I.canOpenVideoSound()
                              ? "&isMuted=0"
                              : "&isMuted=1";
                          t.webView &&
                            ((t.webView.node.active = !0),
                            (t.webView.url = t.getLiveVideoUrl(n, s) + r + o)),
                            D.getInstance().hideLoading();
                        },
                      });
                  }),
                  (o.getLiveVideoUrl = function (t, e) {
                    var i = localStorage.getItem(A.GameConfig) || "",
                      n = JSON.parse(i),
                      s = n.xd_livestream_video_url;
                    if (a.isNative)
                      return (
                        n[A.RsStaticDomain] +
                        s +
                        "?stream-name=" +
                        t +
                        "&jwtoken=" +
                        e
                      );
                    var o =
                      n.livestreamConfig && n.livestreamConfig.xd_live_video_url
                        ? n.livestreamConfig.xd_live_video_url
                        : "internal/livestream_page/xocdialive_789_withautoplay_05w.html";
                    return (
                      window.location.href.split("?")[0] +
                      o +
                      "?stream-name=" +
                      t +
                      "&jwtoken=" +
                      e
                    );
                  }),
                  (o.getBackgroundUrl = function () {
                    var t = localStorage.getItem("X_GAME_CONFIG") || "",
                      e = JSON.parse(t),
                      i = e.tx_livestream_background_url;
                    return a.isNative
                      ? e[A.RsStaticDomain] + i
                      : window.location.origin + i;
                  }),
                  (o.controllerHandleMessage = function (t, e, i) {
                    if (t == W.BET_MULTI) {
                      this.updateCurrentBet(e);
                      var n = e.m;
                      (null == n && null == n) ||
                        ((V.gold = n), this.refreshMoney(V.gold));
                    } else if (t == W.CHAT) v.getInstance().onReceivedChat(e);
                    else if (t == W.FETCH_CHAT_HISTORY)
                      v.getInstance().onFetchChatBox(e);
                    else if (t == W.FETCH_TOP) {
                      var s,
                        o,
                        r = e.d;
                      if ("BET" == e.t)
                        null == (s = this.liveStreamRankView) ||
                          s.showLiveStreamRank(r);
                      else
                        null == (o = this.liveStreamTipRankView) ||
                          o.showLiveStreamRank(r);
                    } else if (t == W.GET_BET_HISTORY) this.showHistory(e);
                    else if (t == C.REFRESH_MONEY) {
                      var a = e.As,
                        l = (a.vip, a.gold),
                        u = (a.chip, a.safe);
                      (V.gold = l), (V.goldSafe = u), this.refreshMoney(V.gold);
                    }
                  }),
                  (o.updateBetInfo = function (e) {
                    t.prototype.updateBetInfo.call(this, e),
                      this.assignDataToWV();
                  }),
                  (o.updateRoundBetInfo = function (t) {
                    var e = this;
                    t.forEach(function (t) {
                      var i = t.eid,
                        n = t.uC,
                        s = t.v,
                        o = e.basebetEntries
                          .map(function (t) {
                            return t;
                          })
                          .find(function (t) {
                            return t.getName() == i;
                          });
                      null == o || o.updateBetInfo(s, n);
                    });
                  }),
                  (o.updateUserCount = function (t) {
                    this.lbl_userOnline &&
                      (this.lbl_userOnline.string = "" + t);
                  }),
                  (o.startGame = function (t) {
                    var e;
                    if (null != (e = this.settingPopup) && e.isWillExit)
                      this.closeGame();
                    else {
                      x.getInstance().playAdditionalSfx(this.start_session_sfx),
                        (this.gameState = M.BETTING),
                        this.playNotiSkeAnim("datcuoc"),
                        this.resetUI();
                      var i = this.isHasBetCache();
                      this.btn_datlai && (this.btn_datlai.interactable = i),
                        this.btn_x2 && (this.btn_x2.interactable = i);
                      var n = t.timeBetCountdown;
                      this.spr_countdown_circle &&
                        (this.spr_countdown_circle.fillRange = 1),
                        this.startCountDown(n);
                      var s = t.sessionId;
                      this.lbl_sessionID &&
                        (this.lbl_sessionID.string = "#" + s),
                        (this.sessionID = s);
                      var o = t.dealerName;
                      this.setDealerName(o);
                      t.startTime;
                      this.updateLastResult(!0), this.assignDataToWV();
                    }
                  }),
                  (o.playNotiSkeAnim = function (t) {
                    var e = this;
                    this.ske_noti &&
                      (this.ske_noti.node.parent &&
                        (this.ske_noti.node.parent.active = !0),
                      this.ske_noti.setAnimation(0, t, !1),
                      this.ske_noti.setCompleteListener(function (t) {
                        e.ske_noti &&
                          e.ske_noti.node.parent &&
                          (e.ske_noti.node.parent.active = !1);
                      }));
                  }),
                  (o.startCountDown = function (t) {
                    var e = this;
                    if (
                      (this.cancelLastXiNgauFx(),
                      this.lbl_countdown &&
                        _.stopAllByTarget(this.lbl_countdown),
                      (this.current_count_down = t),
                      (this.current_count_down = Math.round(
                        this.current_count_down
                      )),
                      this.current_count_down <= 0)
                    )
                      return (
                        this.spr_countdown_circle &&
                          (this.spr_countdown_circle.fillRange =
                            0 == this.current_count_down
                              ? 0
                              : this.current_count_down / this.totalTimeBet),
                        void this.waitingForResult()
                      );
                    this.lbl_countdown &&
                      (this.lbl_countdown.string =
                        (this.current_count_down < 10 ? "0" : "") +
                        this.current_count_down.toString()),
                      this.current_count_down >= 0 &&
                        this.spr_countdown_circle &&
                        (this.spr_countdown_circle.fillRange =
                          0 == this.current_count_down
                            ? 0
                            : this.current_count_down / this.totalTimeBet);
                    g(this.lbl_countdown)
                      .repeat(
                        this.current_count_down,
                        g(this.lbl_countdown).sequence(
                          g().delay(1),
                          g().call(function () {
                            (e.current_count_down -= 1),
                              e.current_count_down >= 0 &&
                                e.spr_countdown_circle &&
                                (e.spr_countdown_circle.fillRange =
                                  0 == e.current_count_down
                                    ? 0
                                    : e.current_count_down / e.totalTimeBet),
                              e.lbl_countdown &&
                                (e.lbl_countdown.string =
                                  (e.current_count_down < 10 ? "0" : "") +
                                  e.current_count_down.toString()),
                              0 == e.current_count_down &&
                                (x
                                  .getInstance()
                                  .playAdditionalSfx(e.end_session_sfx),
                                e.playNotiSkeAnim("mobat")),
                              e.current_count_down <= 0
                                ? e.waitingForResult()
                                : e.current_count_down == e.stopBetSecond &&
                                  e.showMessage("Ngưng đặt cược"),
                              e.current_count_down < 10 &&
                                x
                                  .getInstance()
                                  .playAdditionalSfx(e.countdown_sfx),
                              e.assignDataToWV();
                          })
                        )
                      )
                      .start();
                  }),
                  (o.finishGame = function (t) {
                    var e = this;
                    this.showMessage("Kết thúc phiên!"),
                      (this.gameState = M.ENDED);
                    var i = t.dealerName;
                    this.setDealerName(i);
                    var n = null,
                      s = t.wns,
                      o = 0;
                    s.forEach(function (t) {
                      t.uid == V.userID && ((o = t.wm), (n = t.m));
                    }),
                      (null == n && null == n) ||
                        ((V.gold = n), this.refreshMoney(V.gold));
                    var r = t.betTypeResult;
                    this.basebetEntries.forEach(function (t, i) {
                      (e.my_bet[i] = t.getCurrentBet()), t.gray();
                    }),
                      r.split(",").forEach(function (t) {
                        e.blinkBet(t);
                      });
                    var a = t.resultRaw,
                      l = new Tt(),
                      u = t.sessionId,
                      c = t.startTime;
                    (l.time = c),
                      (l.sessionID = u),
                      a && ((l.result_code = a), this.result.unshift(l)),
                      this.updateCau(!0),
                      this.showResultText(o);
                  }),
                  (o.showResultText = function (t) {
                    var e = this;
                    if (
                      !(t <= 0) &&
                      (x.getInstance().playAdditionalSfx(this.win_sfx),
                      this.result_node && this.refundMoney)
                    ) {
                      (this.result_node.active = !0),
                        _.stopAllByTarget(this.result_node),
                        _.stopAllByTarget(this.refundMoney.node),
                        (this.refundMoney.string =
                          t > 0 ? "+" + R.formatNumber(t) : ""),
                        this.refundMoney.node.setPosition(new f(0, -300, 0));
                      var i = this.result_node.getComponent(m);
                      i && (i.opacity = 255),
                        g(this.refundMoney.node)
                          .sequence(
                            g().by(0.25, { position: new f(0, 250, 0) }),
                            g().call(function () {}),
                            g().delay(3),
                            g().call(function () {
                              e.result_node &&
                                g(e.result_node.getComponent(m))
                                  .to(0.3, { opacity: 1 })
                                  .call(function () {
                                    e.result_node &&
                                      (e.result_node.active = !1);
                                  })
                                  .start();
                            })
                          )
                          .start();
                    }
                  }),
                  (o.updateLastResult = function (t) {
                    void 0 === t && (t = !1),
                      (this.currentSessionIndex = this.result.length - 1),
                      this.showCurrentResult(t);
                  }),
                  (o.showCurrentResult = function (t) {
                    void 0 === t && (t = !1);
                    var e = this.result[this.currentSessionIndex];
                    t
                      ? this.cancelLastXiNgauFx()
                      : e && this.doBindUILastResult(e);
                  }),
                  (o.cancelLastXiNgauFx = function () {}),
                  (o.doBindUILastResult = function (t) {
                    this.cancelLastXiNgauFx();
                    t.sessionID, t.time;
                  }),
                  (o.blinkBet = function (t) {
                    this.basebetEntries.forEach(function (e) {
                      e.getName() == t && e.highlight();
                    });
                  }),
                  (o.unMuteHtmlCallBack = function () {
                    var t;
                    (I.isPassPolicySafari = !0),
                      this.coverNode && (this.coverNode.active = !1),
                      this.spr_countdown_circle &&
                        this.spr_countdown_circle.node.parent &&
                        a.isNative &&
                        this.spr_countdown_circle.node.parent.setPosition(
                          new f(285, 615, 0)
                        ),
                      this.initTransparentCanvas(),
                      null == (t = D.getInstance()) || t.showMinigame();
                  }),
                  (o.soundOn = function () {
                    var t;
                    this.isLoadedWebView &&
                      ((this.isSoundOnLiveStream = !this.isSoundOnLiveStream),
                      null == (t = this.webView) ||
                        t.sendToWebView(
                          this.isSoundOnLiveStream ? "soundOn" : "soundOff"
                        ));
                  }),
                  (o.browserHtmlCallBack = function (t) {
                    "unMuteFromHtml" == t && this.unMuteHtmlCallBack(),
                      this.isEngineUpdated() ||
                        ("clickBetChan" == t
                          ? this.sendBetChan()
                          : "clickBetLe" == t
                          ? this.sendBetLe()
                          : "closePopup" == t
                          ? this.sendClosePopup()
                          : "clickBackBtn" == t && this.showSettingPopup());
                  }),
                  (o.nativeHtmlCallBack = function (t) {
                    t.includes("clickBackBtn") && this.showSettingPopup(),
                      t.includes("closePopup")
                        ? this.sendClosePopup()
                        : t.includes("clickBetChan")
                        ? this.sendBetChan()
                        : t.includes("clickBetLe") && this.sendBetLe();
                  }),
                  (o.needToHideWebView = function () {
                    return (
                      !a.isBrowser && V.minigamesIsOverlap(this.wvUITransform)
                    );
                  }),
                  (o.needToBlackWebView = function () {
                    var t, e, i, n;
                    return (
                      !(!this.settingPopup || !this.settingPopup.IsShowing()) ||
                      !(
                        !this.xdliveBetHistoryView ||
                        null == (t = this.xdliveBetHistoryView) ||
                        !t.IsShowing()
                      ) ||
                      !(
                        !this.liveStreamTipRankView ||
                        null == (e = this.liveStreamTipRankView) ||
                        !e.IsShowing()
                      ) ||
                      !(
                        !this.liveStreamRankView ||
                        null == (i = this.liveStreamRankView) ||
                        !i.IsShowing()
                      ) ||
                      !(
                        !this.scrollViewInfoPopup ||
                        !this.scrollViewInfoPopup.IsShowing()
                      ) ||
                      !(
                        !this.giftPopup ||
                        null == (n = this.giftPopup) ||
                        !n.isShowing()
                      )
                    );
                  }),
                  (o.setDealerName = function (t) {
                    t &&
                      this.dealerName &&
                      (this.dealerName.string = "Bé " + t);
                  }),
                  e
                );
              })(H)).instance = null),
              (lt = e((at = Vt).prototype, "lbl_states", [F], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              })),
              (ut = e(at.prototype, "dealer_lbl_states", [z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              })),
              (ct = e(at.prototype, "spr_cau", [j], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              })),
              (ht = e(at.prototype, "dealer_spr_cau", [q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              })),
              (dt = e(at.prototype, "sprFrame_cau", [J], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              })),
              (pt = e(at.prototype, "result_node", [K], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (wt = e(at.prototype, "refundMoney", [Y], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (_t = e(at.prototype, "countdown_sfx", [Z], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (gt = e(at.prototype, "xdDealerChatViewPopup", [Q], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (ft = e(at.prototype, "xdDealerCauViewPopup", [$], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (bt = e(at.prototype, "xdliveBetHistoryView", [tt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (mt = e(at.prototype, "maintain_node", [et], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (vt = e(at.prototype, "ske_noti", [it], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (St = e(at.prototype, "btn_sound_livestream", [nt], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (Bt = e(at.prototype, "spr_countdown_circle", [st], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (yt = e(at.prototype, "click_sfx", [ot], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (rt = at))
            ) || rt)
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XocDiaLiveStreamNetwordHandler.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BaseLiveStreamNetworkController.ts",
    "./SocketManager.ts",
  ],
  function (e) {
    "use strict";
    var t, n, r, o, i;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          n = e.cclegacy;
        },
        function (e) {
          r = e.BaseLiveStreamNetworkController;
        },
        function (e) {
          (o = e.MessageRequest), (i = e.GLOBAL_MESSAGE);
        },
      ],
      execute: function () {
        n._RF.push(
          {},
          "8a4e2XPZwdCL7VS1IOyrQoE",
          "XocDiaLiveStreamNetwordHandler",
          void 0
        );
        e(
          "XocDiaLiveStreamNetwordHandler",
          (function (e) {
            function n() {
              return e.apply(this, arguments) || this;
            }
            t(n, e);
            var r = n.prototype;
            return (
              (r.getChannel = function () {
                return "Livestream";
              }),
              (r.getLogPrefix = function () {
                return "XocDiaLiveStreamNetwordHandler";
              }),
              (r.getPluginName = function () {
                return "ShakeDiskLivestreamPlugin";
              }),
              (r.sendRefreshMoney = function () {
                e.prototype.sendWithZoneAndChannel.call(
                  this,
                  o.ZonePlugin_Type,
                  { cmd: i.REFRESH_MONEY }
                );
              }),
              n
            );
          })(r)
        );
        n._RF.pop();
      },
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/xocdia-livestream",
    "chunks:///_virtual/xocdia-livestream"
  );
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
