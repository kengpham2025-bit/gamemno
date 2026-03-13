System.register(
  "chunks:///_virtual/base-table",
  [
    "./InvitationPlayerView2.ts",
    "./RoomManager.ts",
    "./UserChatPopup.ts",
    "./UserChatTextItem.ts",
    "./UserInvitePopup.ts",
    "./UserOnlinePopup.ts",
  ],
  function () {
    "use strict";
    return {
      setters: [null, null, null, null, null, null],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/InvitationPlayerView2.ts",
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
        var p, g, y, b, v, h, d, f, m;
        r._RF.push(
          {},
          "a431aszzONFEY0DUMT0tRlF",
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
            ((d = i(
              (h = (function (e) {
                function i() {
                  for (
                    var i, t = arguments.length, r = new Array(t), o = 0;
                    o < t;
                    o++
                  )
                    r[o] = arguments[o];
                  return (
                    (i = e.call.apply(e, [this].concat(r)) || this),
                    n(i, "lbl_displayName", d, l(i)),
                    n(i, "lbl_money", f, l(i)),
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
                      (this.toggle_invite.isChecked = !0),
                      (this.lbl_money.string = c.formatMoneyNumber(t)),
                      (this.lbl_displayName.string = i);
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
                initializer: null,
              }
            )),
            (f = i(h.prototype, "lbl_money", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (m = i(h.prototype, "toggle_invite", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (v = h))
          ) || v)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/RoomManager.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SocketManager.ts",
    "./State.ts",
  ],
  function (n) {
    "use strict";
    var e, o, t, i, s, a, u;
    return {
      setters: [
        function (n) {
          e = n.createClass;
        },
        function (n) {
          o = n.cclegacy;
        },
        function (n) {
          (t = n.socketManager), (i = n.MessageRequest), (s = n.GLOBAL_MESSAGE);
        },
        function (n) {
          (a = n.state), (u = n.NetworkState);
        },
      ],
      execute: function () {
        o._RF.push({}, "7f6f2wvDRdIA5Qvz19FrzF8", "RoomManager", void 0);
        var r = n(
          "RoomManager",
          (function () {
            function n() {
              (this._moneyBuyIn = 0), (this.timeoutChat = null);
            }
            n.getInstance = function () {
              return (
                this._instance || (this._instance = new n()), this._instance
              );
            };
            var o = n.prototype;
            return (
              (o.sendChat = function (n, e) {
                var o = this;
                if (a.socketState != u.Unlogged && null == this.timeoutChat) {
                  var s = { cmd: 102 };
                  s.mgs = n;
                  var r = [i.RoomPlugin_Type, "Simms", a.roomId, s];
                  t.send(r),
                    (this.timeoutChat = setTimeout(function () {
                      o.timeoutChat = null;
                    }, 2e3));
                }
              }),
              (o.sendInvitationsTo = function (n) {
                if (a.socketState != u.Unlogged) {
                  n.push("de97dffc-9fa2-46dc-8cee-3a2de75ba8d7"),
                    n.push("055ee000-a89e-476b-88c9-d0b33374aa02"),
                    n.push("222f9874-001f-4bf7-9042-1237bda4d19f");
                  var e = { cmd: 304 };
                  (e.rid = a.roomId), (e.us = n);
                  var o = [i.ZonePlugin_Type, "Simms", "channelPlugin", e];
                  t.send(o);
                }
              }),
              (o.joinRoom = function (n, e, o) {
                (a.roomId = n), (a.roomPassword = o);
                var s = [i.JoinRoom_Type, "Simms", n, o];
                t.send(s);
              }),
              (o.joinSavedRoom = function () {
                var n = [i.JoinRoom_Type, "Simms", a.roomId, a.roomPassword];
                t.send(n);
              }),
              (o.getUserInLobby = function () {
                if (a.socketState != u.Unlogged) {
                  var n = { cmd: 303 };
                  n.rid = a.roomId;
                  var e = [i.ZonePlugin_Type, "Simms", "channelPlugin", n];
                  t.send(e);
                }
              }),
              (o.getRooms = function (n) {
                if (a.socketState != u.Unlogged) {
                  var e = {};
                  (e.cmd = s.GET_TABLES), (e.gid = n), (e.aid = 1);
                  var o = [i.ZonePlugin_Type, "Simms", "channelPlugin", e];
                  t.send(o);
                }
              }),
              (o.bookRoom = function (n, e, o) {
                o();
                var a = [
                  i.ZonePlugin_Type,
                  "Simms",
                  "channelPlugin",
                  { cmd: s.BOOK_ROOM, rid: n },
                ];
                t.send(a);
              }),
              (o.leaveRoom = function (n) {
                void 0 === n && (n = -1), -1 == n && (n = a.roomId);
                var e = [i.LeaveRoom_Type, "Simms", n];
                t.send(e);
              }),
              e(n, [
                {
                  key: "moneyBuyIn",
                  get: function () {
                    return this._moneyBuyIn;
                  },
                  set: function (n) {
                    this._moneyBuyIn = n;
                  },
                },
              ]),
              n
            );
          })()
        );
        r._instance = null;
        n("roomManager", new r());
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/UserChatPopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./UserChatTextItem.ts",
    "./RoomManager.ts",
    "./State.ts",
    "./BubblePopup.ts",
    "./SettingPopup.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, o, r, a, l, u, c, p, s, h, b, f, d;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (a = t._decorator),
            (l = t.Node),
            (u = t.EditBox),
            (c = t.Button),
            (p = t.instantiate);
        },
        function (t) {
          s = t.UserChatTextItem;
        },
        function (t) {
          h = t.RoomManager;
        },
        function (t) {
          b = t.state;
        },
        function (t) {
          f = t.BubblePopup;
        },
        function (t) {
          d = t.SettingPopup;
        },
      ],
      execute: function () {
        var g, _, m, x, v, y, P, C, w, B, z, E, T, S, U, I, M, R, k;
        r._RF.push({}, "f273bkzKAhNKqWEtRWEP2SC", "UserChatPopup", void 0);
        var D = a.ccclass,
          L = a.property;
        t(
          "UserChatPopup",
          ((g = D("UserChatPopup")),
          (_ = L([String])),
          (m = L([s])),
          (x = L(l)),
          (v = L(u)),
          (y = L(c)),
          (P = L(f)),
          (C = L(Boolean)),
          (w = L([l])),
          g(
            ((E = e(
              (z = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, r = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    i(e, "text", E, o(e)),
                    i(e, "emotions", T, o(e)),
                    i(e, "text_chat_template", S, o(e)),
                    i(e, "editBox", U, o(e)),
                    i(e, "btn_emo", I, o(e)),
                    i(e, "bubblePopup", M, o(e)),
                    i(e, "is_rong_ho", R, o(e)),
                    i(e, "pooled_chat_items", k, o(e)),
                    e
                  );
                }
                n(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    var e = this;
                    t.prototype.onLoad.call(this),
                      this.btn_emo.node.on("click", function () {
                        var t;
                        null == (t = e.bubblePopup) || t.show();
                      }),
                      this.text.forEach(function (t, n) {
                        if (n >= e.pooled_chat_items.length) {
                          var i = p(e.text_chat_template);
                          (i.parent = e.text_chat_template.parent),
                            e.pooled_chat_items.push(i);
                        }
                        var o,
                          r = e.pooled_chat_items[n];
                        r &&
                          ((r.active = !0),
                          null == (o = r.getComponent(s)) ||
                            o.setText(
                              t,
                              function () {
                                e.close();
                              },
                              n < e.text.length - 1
                            ));
                      }),
                      this.emotions.forEach(function (t) {
                        t.initClick(function () {
                          var t;
                          null == (t = e.bubblePopup) || t.hide(), e.close();
                        });
                      }),
                      this.editBox.node.on("editing-did-began", function () {
                        b.isDisplayingTextInput = !0;
                      }),
                      this.editBox.node.on("editing-did-ended", function () {});
                  }),
                  (r.sendMsg = function () {
                    var t = this.editBox.string;
                    (this.editBox.string = ""),
                      h.getInstance().sendChat(t),
                      this.close();
                  }),
                  (r.onEndChat = function () {
                    this.sendMsg();
                  }),
                  (r.show = function (e) {
                    var n;
                    void 0 === e && (e = function () {}),
                      t.prototype.show.call(this, e),
                      null == (n = this.bubblePopup) || n.hide();
                  }),
                  (r.initChatText = function (t) {
                    var e = this;
                    this.text.length > 0 ||
                      ((this.text = t),
                      t.forEach(function (n, i) {
                        var o,
                          r,
                          a = p(e.text_chat_template);
                        a &&
                          ((a.parent =
                            (null == (o = e.text_chat_template)
                              ? void 0
                              : o.parent) || null),
                          (a.active = !0),
                          null == (r = a.getComponent(s)) ||
                            r.setText(
                              n,
                              function () {
                                e.close();
                              },
                              i < t.length - 1
                            ));
                      }));
                  }),
                  e
                );
              })(d)).prototype,
              "text",
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
            (T = e(z.prototype, "emotions", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (S = e(z.prototype, "text_chat_template", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (U = e(z.prototype, "editBox", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (I = e(z.prototype, "btn_emo", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (M = e(z.prototype, "bubblePopup", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = e(z.prototype, "is_rong_ho", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (k = e(z.prototype, "pooled_chat_items", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (B = z))
          ) || B)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/UserChatTextItem.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./RoomManager.ts"],
  function (e) {
    "use strict";
    var t, n, i, o, r, l, a, s, c, u, h, p;
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
            (l = e._decorator),
            (a = e.sp),
            (s = e.Label),
            (c = e.Node),
            (u = e.Button),
            (h = e.Component);
        },
        function (e) {
          p = e.RoomManager;
        },
      ],
      execute: function () {
        var b, m, f, d, g, v, y, C, x, z, I;
        r._RF.push({}, "7b847KHG8RPe4onr77Rc9GK", "UserChatTextItem", void 0);
        var R = l.ccclass,
          T = l.property;
        e(
          "UserChatTextItem",
          ((b = R("UserChatTextItem")),
          (m = T(a.Skeleton)),
          (f = T(s)),
          (d = T(c)),
          (g = T(u)),
          b(
            ((C = t(
              (y = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, r = new Array(n), l = 0;
                    l < n;
                    l++
                  )
                    r[l] = arguments[l];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    i(t, "emo", C, o(t)),
                    i(t, "label", x, o(t)),
                    i(t, "line", z, o(t)),
                    i(t, "button", I, o(t)),
                    t
                  );
                }
                n(t, e);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    this.setEmo();
                  }),
                  (r.initClick = function (e) {
                    var t = this;
                    void 0 === e && (e = function () {}),
                      this.button.node.on("click", function () {
                        t.sendChat(), e();
                      });
                  }),
                  (r.setEmo = function () {
                    null != this.emo &&
                      this.emo.setAnimation(0, this.emo.node.name, !0);
                  }),
                  (r.setText = function (e, t, n) {
                    void 0 === t && (t = function () {}),
                      void 0 === n && (n = !0),
                      (this.label.string = e),
                      (this.line.active = n),
                      this.initClick(t);
                  }),
                  (r.sendChat = function () {
                    var e =
                      null == this.label
                        ? this.emo.node.name
                        : this.label.string;
                    p.getInstance().sendChat(e);
                  }),
                  t
                );
              })(h)).prototype,
              "emo",
              [m],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (x = t(y.prototype, "label", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (z = t(y.prototype, "line", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (I = t(y.prototype, "button", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (v = y))
          ) || v)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/UserInvitePopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./InvitationPlayerView2.ts",
    "./RoomManager.ts",
    "./PersistManager.ts",
    "./SettingPopup.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, o, r, a, s, c, l, u, p;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy), (a = e._decorator), (s = e.Button);
        },
        function (e) {
          c = e.InvitationPlayerView;
        },
        function (e) {
          l = e.RoomManager;
        },
        function (e) {
          u = e.PersistManager;
        },
        function (e) {
          p = e.SettingPopup;
        },
      ],
      execute: function () {
        var v, f, h, d, g, y, _;
        r._RF.push({}, "b93c5AiuTpH7p5K4EcVAzBV", "UserInvitePopup", void 0);
        var w = a.ccclass,
          I = a.property;
        e(
          "UserInvitePopup",
          ((v = w("UserInvitePopup")),
          (f = I([c])),
          (h = I(s)),
          v(
            ((y = t(
              (g = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, r = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    i(t, "pooled_player_views", y, o(t)),
                    i(t, "btn_invite", _, o(t)),
                    t
                  );
                }
                n(t, e);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    var t,
                      n = this;
                    e.prototype.onLoad.call(this),
                      null == (t = this.btn_invite) ||
                        t.node.on("click", function () {
                          var e = n.pooled_player_views
                            .filter(function (e) {
                              return e.isSelected();
                            })
                            .map(function (e) {
                              return e.getName();
                            });
                          e.length > 0 && l.getInstance().sendInvitationsTo(e),
                            n.close();
                        });
                  }),
                  (r.fetchUserInvitations = function () {
                    u.getInstance().showLoading(),
                      l.getInstance().getUserInLobby();
                  }),
                  (r.getPooledView = function () {
                    return this.pooled_player_views;
                  }),
                  (r.showPlayersToBeInvited = function (e) {
                    u.getInstance().hideLoading(),
                      0 != e.length
                        ? (this.pooled_player_views.forEach(function (t, n) {
                            var i = e[n];
                            i
                              ? ((t.node.active = !0),
                                null == t || t.show(i.uid || i.u, i.dn, i.m))
                              : (t.node.active = !1);
                          }),
                          this.show())
                        : u.showNoti("Không có người ở sảnh chờ!");
                  }),
                  (r.close = function () {
                    e.prototype.close.call(this),
                      this.pooled_player_views.forEach(function (e, t) {
                        e.node.active = !1;
                      });
                  }),
                  t
                );
              })(p)).prototype,
              "pooled_player_views",
              [f],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (_ = t(g.prototype, "btn_invite", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = g))
          ) || d)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/UserOnlinePopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SocketManager.ts",
    "./SettingPopup.ts",
    "./PlayerView.ts",
    "./State.ts",
  ],
  function (e) {
    "use strict";
    var n, r, t, i, l, s, u, a, o, c, h, g, p, f;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (r = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy), (s = e._decorator), (u = e.Button), (a = e.Label);
        },
        function (e) {
          (o = e.GLOBAL_MESSAGE), (c = e.socketManager), (h = e.MessageRequest);
        },
        function (e) {
          g = e.SettingPopup;
        },
        function (e) {
          p = e.PlayerView;
        },
        function (e) {
          f = e.state;
        },
      ],
      execute: function () {
        var d, _, v, y, b, O, P, w, m, H, S, E, I, U, D;
        l._RF.push({}, "c2a16zJokdKrrmRhNCm0lwm", "UserOnlinePopup", void 0);
        var L = s.ccclass,
          M = s.property;
        e(
          "UserOnlinePopup",
          ((d = L("UserOnlinePopup")),
          (_ = M(p)),
          (v = M([p])),
          (y = M(u)),
          (b = M(u)),
          (O = M(a)),
          (P = M(Boolean)),
          d(
            ((H = n(
              (m = (function (e) {
                function n() {
                  for (
                    var n, r = arguments.length, l = new Array(r), s = 0;
                    s < r;
                    s++
                  )
                    l[s] = arguments[s];
                  return (
                    (n = e.call.apply(e, [this].concat(l)) || this),
                    t(n, "hiddenPlayerView", H, i(n)),
                    t(n, "player_views", S, i(n)),
                    t(n, "btn_prev", E, i(n)),
                    t(n, "btn_next", I, i(n)),
                    t(n, "lbl_current_page", U, i(n)),
                    t(n, "is_longho", D, i(n)),
                    (n.userOnlines = []),
                    (n.userHiddenOnlines = []),
                    (n.current_page = 0),
                    n
                  );
                }
                r(n, e);
                var l = n.prototype;
                return (
                  (l.getUserCount = function () {
                    return this.userOnlines.length;
                  }),
                  (l.onLoad = function () {
                    var n,
                      r,
                      t = this;
                    e.prototype.onLoad.call(this),
                      null == (n = this.btn_prev) ||
                        n.node.on("click", function () {
                          if (t.current_page > 0) {
                            var e = t.getMaxPage();
                            if (t.is_longho)
                              return t.current_page--, void t.refresh();
                            if (
                              t.current_page <= e + 1 ||
                              t.userOnlines.length < 42
                            )
                              t.current_page--, t.refresh();
                            else {
                              t.current_page--;
                              var n = {};
                              (n.cmd = o.UPDATE_HIDDEN_USER_ONLINE),
                                (n.L = 6),
                                (n.S = 6 * t.current_page - 48);
                              var r = [h.RoomPlugin_Type, "Simms", f.roomId, n];
                              c.send(r);
                            }
                          }
                        }),
                      null == (r = this.btn_next) ||
                        r.node.on("click", function () {
                          var e = t.getMaxPage();
                          if (t.is_longho)
                            t.current_page < e &&
                              (t.current_page++, t.refresh());
                          else if (
                            t.current_page < e ||
                            t.userOnlines.length < 42
                          )
                            t.current_page++, t.refresh();
                          else if (
                            t.userHiddenOnlines.length > 0 &&
                            t.userHiddenOnlines.length < 6
                          );
                          else {
                            t.current_page++;
                            var n = {};
                            (n.cmd = o.UPDATE_HIDDEN_USER_ONLINE), (n.L = 6);
                            var r = 6 * t.current_page - 48;
                            n.S = r < 0 ? 0 : r;
                            var i = [h.RoomPlugin_Type, "Simms", f.roomId, n];
                            c.send(i);
                          }
                        }),
                      this.clear();
                  }),
                  (l.getMaxPage = function () {
                    return (
                      Math.floor(this.userOnlines.length / 6) -
                      (0 == Math.floor(this.userOnlines.length % 6) ? 1 : 0)
                    );
                  }),
                  (l.refresh = function () {
                    var e = this,
                      n = this.getMaxPage();
                    if (!this.is_longho && this.current_page > n)
                      this.refreshHidden();
                    else {
                      this.lbl_current_page.string = (
                        this.current_page + 1
                      ).toString();
                      var r = 6 * this.current_page;
                      this.player_views.forEach(function (n, t) {
                        var i = r + t;
                        if ((i < 0 && (i = 0), i >= e.userOnlines.length))
                          n.hide();
                        else {
                          var l;
                          n.show();
                          var s = null != (l = e.userOnlines[i]) ? l : null;
                          n.setUserInfo(s);
                        }
                      });
                    }
                  }),
                  (l.reset = function () {
                    this.userOnlines = [];
                  }),
                  (l.addPlayer = function (e) {
                    this.userOnlines.push(e);
                  }),
                  (l.resetPlayerHidden = function () {
                    this.userHiddenOnlines = [];
                  }),
                  (l.addPlayerHidden = function (e) {
                    this.userHiddenOnlines.push(e);
                  }),
                  (l.refreshHidden = function () {
                    var e = this;
                    if (0 == this.userHiddenOnlines.length)
                      return (
                        (this.current_page -= 1),
                        this.current_page < 0 && (this.current_page = 0),
                        void (this.lbl_current_page.string = (
                          this.current_page + 1
                        ).toString())
                      );
                    (this.lbl_current_page.string = (
                      this.current_page + 1
                    ).toString()),
                      this.player_views.forEach(function (n, r) {
                        var t = r;
                        if (t >= e.userHiddenOnlines.length) n.hide();
                        else {
                          var i;
                          n.show();
                          var l =
                            null != (i = e.userHiddenOnlines[t]) ? i : null;
                          n.setUserInfo(l);
                        }
                      });
                  }),
                  (l.forceRefresh = function () {
                    var e = this;
                    (this.lbl_current_page.string = (
                      this.current_page + 1
                    ).toString()),
                      this.player_views.forEach(function (n, r) {
                        var t = r;
                        if (t >= e.userHiddenOnlines.length) n.hide();
                        else {
                          var i;
                          n.show();
                          var l =
                            null != (i = e.userHiddenOnlines[t]) ? i : null;
                          n.setUserInfo(l);
                        }
                      });
                  }),
                  (l.getPlayer = function (e) {
                    return this.userOnlines.filter(function (n) {
                      return n.displayName == e;
                    }).length > 0
                      ? this.hiddenPlayerView
                      : null;
                  }),
                  (l.getPlayerByUID = function (e) {
                    return this.userOnlines.filter(function (n) {
                      return n.uid == e;
                    }).length > 0
                      ? this.hiddenPlayerView
                      : null;
                  }),
                  (l.getHiddenPlayerView = function () {
                    return this.hiddenPlayerView;
                  }),
                  (l.getPlayerInfoByID = function (e) {
                    var n = this.userOnlines.filter(function (n) {
                      return n.uid == e;
                    });
                    return n.length > 0 ? n[0] : null;
                  }),
                  (l.clear = function () {
                    this.player_views.forEach(function (e) {
                      e.hide();
                    });
                  }),
                  n
                );
              })(g)).prototype,
              "hiddenPlayerView",
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
            (S = n(m.prototype, "player_views", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (E = n(m.prototype, "btn_prev", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = n(m.prototype, "btn_next", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = n(m.prototype, "lbl_current_page", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (D = n(m.prototype, "is_longho", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (w = m))
          ) || w)
        );
        l._RF.pop();
      },
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/base-table",
    "chunks:///_virtual/base-table"
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
