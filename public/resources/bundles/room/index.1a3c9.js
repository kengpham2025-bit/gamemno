System.register(
  "chunks:///_virtual/room",
  ["./RoomItemView.ts", "./RoomListView.ts"],
  function () {
    "use strict";
    return { setters: [null, null], execute: function () {} };
  }
);

System.register(
  "chunks:///_virtual/RoomItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./RoomListView.ts",
    "./SocketManager.ts",
    "./Define.ts",
    "./PersistManager.ts",
    "./StringUtils.ts",
    "./RoomManager.ts",
    "./EventManager.ts",
    "./State.ts",
  ],
  function (e) {
    "use strict";
    var i,
      n,
      t,
      o,
      r,
      l,
      s,
      a,
      m,
      u,
      b,
      _,
      c,
      h,
      g,
      p,
      d,
      f,
      I,
      v,
      y,
      w,
      D,
      M,
      R,
      B,
      E;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (l = e._decorator),
            (s = e.Button),
            (a = e.Label),
            (m = e.Node),
            (u = e.Sprite),
            (b = e.SpriteFrame),
            (_ = e.EventHandler),
            (c = e.Tween),
            (h = e.Vec3),
            (g = e.tween),
            (p = e.Component);
        },
        function (e) {
          d = e.RoomListView;
        },
        function (e) {
          (f = e.socketManager), (I = e.MessageRequest), (v = e.GLOBAL_MESSAGE);
        },
        function (e) {
          y = e.GameID;
        },
        function (e) {
          w = e.PersistManager;
        },
        function (e) {
          D = e.StringUtils;
        },
        function (e) {
          M = e.RoomManager;
        },
        function (e) {
          (R = e.eventManager), (B = e.EventKey);
        },
        function (e) {
          E = e.state;
        },
      ],
      execute: function () {
        var x,
          P,
          z,
          L,
          S,
          N,
          A,
          T,
          k,
          F,
          U,
          V,
          C,
          G,
          O,
          J,
          H,
          Q,
          W,
          X,
          Z,
          K,
          j,
          q,
          Y,
          $,
          ee;
        r._RF.push({}, "d1c07bzGzxPEri9QsXoa5hG", "RoomItemView", void 0);
        var ie = l.ccclass,
          ne = l.property;
        e(
          "RoomItemView",
          ((x = ie("RoomItemView")),
          (P = ne(s)),
          (z = ne(a)),
          (L = ne(a)),
          (S = ne(m)),
          (N = ne(u)),
          (A = ne(u)),
          (T = ne(b)),
          (k = ne(b)),
          (F = ne(a)),
          (U = ne(a)),
          (V = ne(a)),
          (C = ne(u)),
          x(
            ((J = i(
              (O = (function (e) {
                function i() {
                  for (
                    var i, n = arguments.length, r = new Array(n), l = 0;
                    l < n;
                    l++
                  )
                    r[l] = arguments[l];
                  return (
                    (i = e.call.apply(e, [this].concat(r)) || this),
                    t(i, "button", J, o(i)),
                    t(i, "lbl_bet", H, o(i)),
                    t(i, "lbl_user", Q, o(i)),
                    t(i, "inf_node", W, o(i)),
                    t(i, "spr_table", X, o(i)),
                    t(i, "spr_progress", Z, o(i)),
                    t(i, "line_sprFrame_table", K, o(i)),
                    t(i, "line_sprFrame_progress", j, o(i)),
                    t(i, "line_lbl_bet", q, o(i)),
                    t(i, "line_lbl_minmax", Y, o(i)),
                    t(i, "line_lbl_user", $, o(i)),
                    t(i, "line_progress", ee, o(i)),
                    (i.bet = 0),
                    (i.minMoney = 0),
                    (i.gameID = -1),
                    (i.roomID = 0),
                    (i.serverID = 0),
                    (i.maxUser = 0),
                    (i.moneyBuyIn = 0),
                    i
                  );
                }
                n(i, e);
                var r = i.prototype;
                return (
                  (r.show = function (e, i, n, t, o) {
                    if (
                      (void 0 === o && (o = 0),
                      0 == this.button.clickEvents.length)
                    ) {
                      var r = new _();
                      (r.target = this.node),
                        (r.component = "RoomItemView"),
                        (r.handler = "onQuickPlayWithBet"),
                        this.button.clickEvents.push(r);
                    }
                    (this.bet = i),
                      (this.maxUser = e),
                      (this.gameID = t),
                      (this.minMoney = o),
                      (this.node.active = !0),
                      this.lbl_bet &&
                        ((this.lbl_bet.string = D.formatMoneyNumber(i)),
                        (this.lbl_bet.node.active = !0)),
                      this.lbl_user &&
                        ((this.lbl_user.string = "" + n),
                        (this.lbl_user.node.active = !0)),
                      c.stopAllByTarget(this.node),
                      this.node.setScale(h.ONE),
                      g(this.node)
                        .to(0.2, { scale: new h(0.9, 0.9, 0.9) })
                        .to(0.2, { scale: h.ONE })
                        .start();
                  }),
                  (r.showLine = function (e, i, n) {
                    var t = e.bet,
                      o = e.minMoney,
                      r = e.minMoneyBuyIn,
                      l = e.maxMoneyBuyIn,
                      s = e.userCount,
                      a = e.maxUser,
                      m = e.roomID,
                      u = e.serverID;
                    this.button.clickEvents = [];
                    var b = new _();
                    (b.target = this.node),
                      (b.component = "RoomItemView"),
                      i == y.XOCDIA
                        ? (b.handler = "onJoinRoom")
                        : (b.handler = "onBookRoom"),
                      this.button.clickEvents.push(b),
                      (this.bet = t),
                      (this.minMoney = o),
                      (this.gameID = i),
                      (this.roomID = m),
                      (this.serverID = u),
                      (this.maxUser = a),
                      (this.moneyBuyIn = s ? 0 : l),
                      this.line_lbl_bet &&
                        this.line_lbl_minmax &&
                        this.line_lbl_user &&
                        ((this.line_lbl_bet.string = D.formatMoneyNumber(t)),
                        i == y.XOCDIA
                          ? (this.line_lbl_minmax.string =
                              D.formatMoneyNumber(o))
                          : (this.line_lbl_minmax.string =
                              D.formatMoneyNumber(r) +
                              "/" +
                              D.formatMoneyNumber(l)),
                        (this.line_lbl_user.string = s + "/" + a));
                    var c = 0;
                    if (
                      (t <= 0 && (c = 1),
                      this.inf_node && (this.inf_node.active = 1 == c),
                      this.line_lbl_bet &&
                        (this.line_lbl_bet.node.active = 1 != c),
                      this.spr_table &&
                        (this.spr_table.spriteFrame =
                          this.line_sprFrame_table[c]),
                      this.spr_progress &&
                        (this.spr_progress.spriteFrame =
                          this.line_sprFrame_progress[c]),
                      this.line_progress)
                    ) {
                      n || (this.line_progress.fillRange = 0);
                      var h = s / a;
                      g(this.line_progress).to(0.25, { fillRange: h }).start();
                    }
                    (this.node.active = !0),
                      this.line_lbl_bet &&
                        this.inf_node &&
                        !this.inf_node.active &&
                        (this.line_lbl_bet.node.active = !0),
                      this.line_lbl_minmax &&
                        (this.line_lbl_minmax.node.active = !0),
                      this.line_lbl_user &&
                        (this.line_lbl_user.node.active = !0),
                      this.line_progress &&
                        (this.line_progress.node.active = !0);
                  }),
                  (r.hide = function () {
                    (this.node.active = !1),
                      this.lbl_bet && (this.lbl_bet.node.active = !1),
                      this.lbl_user && (this.lbl_user.node.active = !1),
                      this.line_lbl_bet && (this.line_lbl_bet.node.active = !1),
                      this.line_lbl_minmax &&
                        (this.line_lbl_minmax.node.active = !1),
                      this.line_lbl_user &&
                        (this.line_lbl_user.node.active = !1),
                      this.line_progress &&
                        (this.line_progress.node.active = !1);
                  }),
                  (r.onQuickPlayWithBet = function () {
                    var e = this;
                    R.emit(B.IsMiniDownload, function () {
                      if (E.gold < e.minMoney)
                        w.showNoti(
                          "Bạn cần có " +
                            D.formatNumber(e.minMoney).replace(",", ".") +
                            " để vào phòng"
                        );
                      else {
                        (E.roomPassword = ""), w.getInstance().showLoading();
                        var i = {};
                        (i.cmd = v.QUICK_PLAY_WITH_BET),
                          (i.gid = e.gameID),
                          (i.aid = 1),
                          (i.b = e.bet),
                          (e.gameID != y.SAM &&
                            e.gameID != y.TIENLEN &&
                            e.gameID != y.BINH) ||
                            (i.Mu = e.maxUser);
                        var n = [
                          I.ZonePlugin_Type,
                          "Simms",
                          "channelPlugin",
                          i,
                        ];
                        f.send(n);
                      }
                    });
                  }),
                  (r.onJoinRoom = function () {
                    var e = this;
                    R.emit(B.IsMiniDownload, function () {
                      if (e.gameID == y.XOCDIA && E.gold < e.minMoney) {
                        var i = D.formatNumber(e.minMoney).replace(/,/g, ".");
                        w.showNoti("Bạn cần có " + i + " để vào phòng");
                      } else e.roomID > 0 ? (w.getInstance().showLoading(), (E.roomId = e.roomID), (E.roomPassword = ""), (E.roomServer = e.serverID), R.emit(B.JoinRoomWithGameID, e.gameID)) : (w.getInstance().showLoading(), f.send([I.ZonePlugin_Type, "Simms", "channelPlugin", { cmd: v.CREATE_TABLE, gid: e.gameID, aid: 1, b: e.bet, Mu: e.maxUser, iJ: !0 }]));
                    });
                  }),
                  (r.onBookRoom = function () {
                    var e = this;
                    R.emit(B.IsMiniDownload, function () {
                      (M.getInstance().moneyBuyIn = e.moneyBuyIn),
                        (E.roomPassword = ""),
                        e.roomID > 0
                          ? R.emit(
                              B.SendBookRoom,
                              e.serverID,
                              e.gameID,
                              "" + e.roomID,
                              function () {
                                var e;
                                return null == (e = d.getInstance())
                                  ? void 0
                                  : e.reloadRooms();
                              }
                            )
                          : f.send([
                              I.ZonePlugin_Type,
                              "Simms",
                              "channelPlugin",
                              {
                                cmd: v.CREATE_TABLE,
                                gid: e.gameID,
                                aid: 1,
                                b: e.bet,
                                Mu: e.maxUser,
                                iJ: !0,
                              },
                            ]),
                        w.getInstance().showLoading();
                    });
                  }),
                  i
                );
              })(p)).prototype,
              "button",
              [P],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (H = i(O.prototype, "lbl_bet", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = i(O.prototype, "lbl_user", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = i(O.prototype, "inf_node", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (X = i(O.prototype, "spr_table", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Z = i(O.prototype, "spr_progress", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (K = i(O.prototype, "line_sprFrame_table", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (j = i(O.prototype, "line_sprFrame_progress", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (q = i(O.prototype, "line_lbl_bet", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Y = i(O.prototype, "line_lbl_minmax", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            ($ = i(O.prototype, "line_lbl_user", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (ee = i(O.prototype, "line_progress", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (G = O))
          ) || G)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/RoomListView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./RoomItemView.ts",
    "./SocketManager.ts",
    "./Define.ts",
    "./PersistManager.ts",
    "./RoomManager.ts",
    "./CommonInfoPopup.ts",
    "./EventManager.ts",
    "./State.ts",
    "./SoundManager.ts",
  ],
  function (e) {
    "use strict";
    var t,
      n,
      i,
      o,
      l,
      r,
      a,
      s,
      u,
      c,
      h,
      _,
      m,
      d,
      g,
      b,
      p,
      f,
      I,
      v,
      y,
      M,
      w,
      R,
      D,
      L,
      C,
      E,
      O,
      T,
      B,
      k,
      N,
      A,
      P;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized),
            (l = e.createClass);
        },
        function (e) {
          (r = e.cclegacy),
            (a = e._decorator),
            (s = e.Node),
            (u = e.Toggle),
            (c = e.Sprite),
            (h = e.SpriteFrame),
            (_ = e.Button),
            (m = e.Layout),
            (d = e.UITransform),
            (g = e.AudioClip),
            (b = e.Tween),
            (p = e.tween),
            (f = e.Size),
            (I = e.UIOpacity),
            (v = e.log),
            (y = e.Component);
        },
        function (e) {
          M = e.RoomItemView;
        },
        function (e) {
          (w = e.socketManager),
            (R = e.MessageResponse),
            (D = e.GLOBAL_MESSAGE),
            (L = e.MessageRequest);
        },
        function (e) {
          (C = e.GameID), (E = e.getBundleInfo);
        },
        function (e) {
          O = e.PersistManager;
        },
        function (e) {
          T = e.RoomManager;
        },
        function (e) {
          B = e.CommonInfoPopup;
        },
        function (e) {
          (k = e.eventManager), (N = e.EventKey);
        },
        function (e) {
          A = e.state;
        },
        function (e) {
          P = e.SoundManager;
        },
      ],
      execute: function () {
        var z,
          S,
          x,
          G,
          K,
          U,
          F,
          H,
          V,
          Y,
          X,
          Q,
          J,
          j,
          q,
          W,
          Z,
          $,
          ee,
          te,
          ne,
          ie,
          oe,
          le,
          re,
          ae,
          se,
          ue,
          ce,
          he,
          _e,
          me,
          de,
          ge,
          be,
          pe,
          fe,
          Ie,
          ve,
          ye,
          Me,
          we,
          Re,
          De,
          Le,
          Ce,
          Ee,
          Oe,
          Te,
          Be,
          ke,
          Ne,
          Ae,
          Pe,
          ze,
          Se,
          xe,
          Ge,
          Ke,
          Ue,
          Fe,
          He,
          Ve,
          Ye,
          Xe,
          Qe;
        r._RF.push({}, "74c98TqVuxN8axTRhAkKQNQ", "RoomListView", void 0);
        var Je = a.ccclass,
          je = a.property,
          qe = e("RoomInfo", function () {
            (this.roomID = void 0),
              (this.bet = void 0),
              (this.serverID = void 0),
              (this.maxUser = void 0),
              (this.userCount = void 0),
              (this.minMoney = void 0),
              (this.minMoneyBuyIn = void 0),
              (this.maxMoneyBuyIn = void 0),
              (this.hasPassword = !1),
              (this.isBigTable = !1),
              (this.chan_gameMode = void 0),
              (this.chan_chickyMode = void 0),
              (this.roomName = void 0);
          });
        e(
          "RoomListView",
          ((z = Je("RoomListView")),
          (S = je(s)),
          (x = je(u)),
          (G = je(u)),
          (K = je(c)),
          (U = je(c)),
          (F = je([h])),
          (H = je(_)),
          (V = je(_)),
          (Y = je(_)),
          (X = je(_)),
          (Q = je(_)),
          (J = je(_)),
          (j = je(_)),
          (q = je(_)),
          (W = je(_)),
          (Z = je(_)),
          ($ = je(c)),
          (ee = je([h])),
          (te = je(M)),
          (ne = je(m)),
          (ie = je(s)),
          (oe = je(s)),
          (le = je(M)),
          (re = je(d)),
          (ae = je(s)),
          (se = je(s)),
          (ue = je([M])),
          (ce = je(s)),
          (he = je(s)),
          (_e = je(g)),
          (me = je(B)),
          z(
            (((Qe = (function (e) {
              function t() {
                for (
                  var t, n = arguments.length, l = new Array(n), r = 0;
                  r < n;
                  r++
                )
                  l[r] = arguments[r];
                return (
                  (t = e.call.apply(e, [this].concat(l)) || this),
                  i(t, "root", be, o(t)),
                  i(t, "tog_solo_mode", pe, o(t)),
                  i(t, "tog_4_mode", fe, o(t)),
                  i(t, "spr_chung_mode_bg", Ie, o(t)),
                  i(t, "spr_chung_mode_checkmark", ve, o(t)),
                  i(t, "sprFrame_chung_mode", ye, o(t)),
                  i(t, "btn_trove", Me, o(t)),
                  i(t, "btn_choinhanh", we, o(t)),
                  i(t, "btn_taoban", Re, o(t)),
                  i(t, "btn_choinhanh_binh_phom", De, o(t)),
                  i(t, "btn_taoban_binh_phom", Le, o(t)),
                  i(t, "btn_luatchoi", Ce, o(t)),
                  i(t, "btn_trove_in_list_cell", Ee, o(t)),
                  i(t, "btn_choinhanh_in_list_cell", Oe, o(t)),
                  i(t, "btn_taoban_in_list_cell", Te, o(t)),
                  i(t, "btn_luatchoi_in_list_cell", Be, o(t)),
                  i(t, "spr_table_list_logo", ke, o(t)),
                  i(t, "spr_frame_table_list_logo", Ne, o(t)),
                  i(t, "item_template", Ae, o(t)),
                  i(t, "layout_listCell", Pe, o(t)),
                  i(t, "listCell", ze, o(t)),
                  i(t, "listLine", Se, o(t)),
                  i(t, "line_item_template", xe, o(t)),
                  i(t, "scrollViewTransforms", Ge, o(t)),
                  i(t, "list_cell_mode", Ke, o(t)),
                  i(t, "list_cell_title", Ue, o(t)),
                  i(t, "pooled_cell_items", Fe, o(t)),
                  i(t, "node_pooled_line", He, o(t)),
                  i(t, "bottom", Ve, o(t)),
                  i(t, "loadTable_succeed_sfx", Ye, o(t)),
                  i(t, "commonInfoPopup", Xe, o(t)),
                  (t.pooled_line_items = []),
                  (t.gameID = -1),
                  (t._oldGameId = -2),
                  (t._reloadRooms = !1),
                  (t.moneyBuyIn = 0),
                  t
                );
              }
              n(t, e);
              var r = t.prototype;
              return (
                (r.onLoad = function () {
                  var e,
                    n,
                    i,
                    o,
                    l,
                    r,
                    a,
                    s = this;
                  (t._instance = this),
                    (this.pooled_line_items =
                      this.node_pooled_line.getComponentsInChildren(M)),
                    this.btn_trove.node.on("click", function () {
                      s.back();
                    }),
                    this.tog_solo_mode.node.on("toggle", function () {
                      s.tog_solo_mode.isChecked && s.reloadRooms();
                    }),
                    this.tog_4_mode.node.on("toggle", function () {
                      s.tog_4_mode.isChecked && s.reloadRooms();
                    }),
                    this.btn_choinhanh.node.on("click", function () {
                      s.onPlayNow();
                    }),
                    null == (e = this.btn_taoban) ||
                      e.node.on("click", function () {}),
                    null == (n = this.btn_choinhanh_binh_phom) ||
                      n.node.on("click", function () {}),
                    null == (i = this.btn_taoban_binh_phom) ||
                      i.node.on("click", function () {}),
                    this.btn_luatchoi.node.on("click", function () {
                      var e;
                      null == (e = s.commonInfoPopup) || e.showInfo(s.gameID);
                    }),
                    null == (o = this.btn_trove_in_list_cell) ||
                      o.node.on("click", function () {
                        s.back();
                      }),
                    null == (l = this.btn_choinhanh_in_list_cell) ||
                      l.node.on("click", function () {}),
                    null == (r = this.btn_taoban_in_list_cell) ||
                      r.node.on("click", function () {}),
                    null == (a = this.btn_luatchoi_in_list_cell) ||
                      a.node.on("click", function () {}),
                    k.on(N.GetRooms, this, function (e) {
                      return s.getRooms(e), !0;
                    }),
                    k.on(N.GetRoomsInterupt, this, function () {
                      s.node.active &&
                        ((s.isReload = !0), s.getRooms(s.gameID));
                    }),
                    k.on(N.ReloadRooms, this, function () {
                      return s.reloadRooms();
                    }),
                    k.on(N.HideRoomListImmediately, this, function () {
                      return s.hideImmediately();
                    }),
                    k.on(N.HideRoomLogo, this, function () {
                      (s.btn_choinhanh.node.active = !1),
                        (s.btn_trove.node.active = !1),
                        (s.btn_luatchoi.node.active = !1),
                        (s.spr_table_list_logo.node.active = !1);
                    }),
                    k.on(N.ExitToLobbyFromRoomListView, this, function () {
                      return s.back();
                    }),
                    k.on(N.SendLCXD, this, function (e) {
                      var t;
                      null == (t = s.commonInfoPopup) || t.setImage(11, e);
                    }),
                    k.on(N.SocketMessageRoomList, this, function (e) {
                      return s.handleMessageRoomList(e);
                    });
                }),
                (r.back = function () {
                  this.hideImmediately(), k.emit(N.CallLobbyShowGameList);
                }),
                (r.onPlayNow = function () {
                  (A.roomPassword = ""), O.getInstance().showLoading();
                  var e = {};
                  (e.cmd = D.QUICK_PLAY),
                    (e.gid = this.gameID),
                    (e.aid = 1),
                    (this.gameID != C.SAM && this.gameID != C.TIENLEN) ||
                      (e.Mu = this.getMaxUser());
                  var t = [L.ZonePlugin_Type, "Simms", "channelPlugin", e];
                  w.send(t);
                }),
                (r.getPooledItem = function (e) {
                  var t;
                  if ((void 0 === e && (e = !1), e)) {
                    var n,
                      i = this.pooled_cell_items.filter(function (e) {
                        return !e.node.active;
                      });
                    return i.length > 0
                      ? null == (n = i[0])
                        ? void 0
                        : n.getComponent(M)
                      : null;
                  }
                  var o = this.pooled_line_items.filter(function (e) {
                    return !e.node.active;
                  });
                  return o.length > 0
                    ? null == (t = o[0])
                      ? void 0
                      : t.getComponent(M)
                    : null;
                }),
                (r.getRooms = function (e) {
                  var t = this;
                  this.isReload || this.reset(),
                    A.isLoadingRoomList && this.show(),
                    (this.gameID = e),
                    (this.spr_table_list_logo.spriteFrame =
                      this.spr_frame_table_list_logo[this.gameID] ||
                      this.spr_table_list_logo.spriteFrame),
                    T.getInstance().getRooms(e),
                    b.stopAllByTarget(this.node),
                    p(this.node)
                      .delay(5)
                      .call(function () {
                        t.getRooms(e);
                      })
                      .start();
                }),
                (r.reloadRooms = function () {
                  (this.isReload = !0), this.getRooms(this.gameID);
                }),
                (r.reset = function () {
                  (this.btn_choinhanh.node.active = !1),
                    (this.btn_trove.node.active = !1),
                    (this.btn_luatchoi.node.active = !1),
                    (this.spr_table_list_logo.node.active = !1),
                    this.pooled_line_items.forEach(function (e) {
                      return e.hide();
                    }),
                    this.pooled_cell_items.forEach(function (e) {
                      return e.hide();
                    });
                }),
                (r.isSolo = function () {
                  return this.tog_solo_mode.isChecked;
                }),
                (r.getMaxUser = function () {
                  if (this.gameID == C.TIENLEN || this.gameID == C.SAM) {
                    if (this.isSolo()) return 2;
                    if (this.gameID == C.TIENLEN) return 4;
                    if (this.gameID == C.SAM) return 5;
                  }
                  return 0;
                }),
                (r.getKind = function (e) {
                  return e === C.POKER || e === C.LIENG || e === C.XITO
                    ? 1
                    : e === C.XOCDIA || e === C.BLACK_JACK
                    ? 2
                    : 3;
                }),
                (r.loadRooms = function (e) {
                  var t = this;
                  if (this.node.active) {
                    b.stopAllByTarget(this.node), (A.roomPassword = "");
                    for (var n = [], i = 0; i < e.length; i++) {
                      var o = new qe(),
                        l = e[i];
                      if (null == l.inc || null == l.inc || 1 != l.inc) {
                        if (
                          ((this.gameID = l.gid),
                          (o.roomID = l.rid),
                          (o.bet = l.b),
                          (o.serverID = l.sid),
                          (o.maxUser = l.Mu),
                          (o.userCount = l.uC),
                          (o.minMoney = l.mM),
                          (o.minMoneyBuyIn = l.mMBI),
                          (o.maxMoneyBuyIn = l.MMBI),
                          null != l.hpwd &&
                            null != l.hpwd &&
                            (o.hasPassword = l.hpwd),
                          null != l.hg && null != l.hg && (o.isBigTable = l.hg),
                          null != l.rMt && null != l.rMt)
                        ) {
                          var r = l.rMt;
                          (o.chan_gameMode = r.gM), (o.chan_chickyMode = r.ckM);
                        }
                        n.push(o);
                      }
                    }
                    if (
                      (this.isReload &&
                        (this.pooled_line_items.forEach(function (e) {
                          return e.hide();
                        }),
                        this.pooled_cell_items.forEach(function (e) {
                          return e.hide();
                        })),
                      this.getKind(this._oldGameId) !==
                        this.getKind(this.gameID) &&
                        (this.pooled_line_items.forEach(function (e) {
                          return e.hide();
                        }),
                        this.pooled_cell_items.forEach(function (e) {
                          return e.hide();
                        })),
                      (this._oldGameId = this.gameID),
                      this.gameID === C.POKER ||
                        this.gameID === C.LIENG ||
                        this.gameID === C.XITO ||
                        this.gameID === C.BLACK_JACK)
                    ) {
                      n
                        .filter(function (e, t, n) {
                          return (
                            n.findIndex(function (t) {
                              return t.bet === e.bet;
                            }) === t
                          );
                        })
                        .forEach(function (e) {
                          var t = e.bet,
                            i = e.minMoney,
                            o = e.minMoneyBuyIn,
                            l = e.maxMoneyBuyIn,
                            r = e.maxUser,
                            a = e.serverID,
                            s = new qe();
                          (s.roomID = ""),
                            (s.bet = t),
                            (s.serverID = a),
                            (s.maxUser = r),
                            (s.userCount = 0),
                            (s.minMoney = i),
                            (s.minMoneyBuyIn = o),
                            (s.maxMoneyBuyIn = l),
                            (s.hasPassword = !1),
                            (s.chan_gameMode = 1),
                            (s.chan_chickyMode = 1),
                            n.push(s);
                        }),
                        n.sort(function (e, t) {
                          return e.bet - t.bet;
                        }),
                        n.forEach(function (e, n) {
                          var i;
                          t.isReload
                            ? null == (i = t.getPooledItem()) ||
                              i.showLine(e, t.gameID, t.isReload)
                            : t.scheduleOnce(function () {
                                var n;
                                null == (n = t.getPooledItem()) ||
                                  n.showLine(e, t.gameID, t.isReload);
                              }, 0.01 * n);
                        });
                      var a,
                        s,
                        u = this.node_pooled_line.getComponent(d),
                        c = this.node_pooled_line.getComponent(m);
                      if (u && c)
                        u.setContentSize(
                          new f(
                            u.width,
                            n.length *
                              (((null == (a = this.pooled_line_items[0]) ||
                              null == (s = a.getComponent(d))
                                ? void 0
                                : s.contentSize.height) || 0) +
                                c.spacingY)
                          )
                        );
                    } else if (this.gameID == C.XOCDIA) {
                      n
                        .filter(function (e, t, n) {
                          return (
                            n.findIndex(function (t) {
                              return t.bet === e.bet;
                            }) === t
                          );
                        })
                        .forEach(function (e) {
                          var t = e.bet,
                            i = e.minMoney,
                            o = e.minMoneyBuyIn,
                            l = e.maxMoneyBuyIn,
                            r = e.maxUser,
                            a = e.serverID;
                          if (500 != r) {
                            var s = new qe();
                            (s.roomID = ""),
                              (s.bet = t),
                              (s.serverID = a),
                              (s.maxUser = r),
                              (s.userCount = 0),
                              (s.minMoney = i),
                              (s.minMoneyBuyIn = o),
                              (s.maxMoneyBuyIn = l),
                              (s.hasPassword = !1),
                              (s.chan_gameMode = 1),
                              (s.chan_chickyMode = 1),
                              n.push(s);
                          }
                        }),
                        n.sort(function (e, t) {
                          return e.bet - t.bet;
                        }),
                        n.forEach(function (e, n) {
                          var i;
                          t.isReload
                            ? null == (i = t.getPooledItem()) ||
                              i.showLine(e, t.gameID, t.isReload)
                            : t.scheduleOnce(function () {
                                var n;
                                null == (n = t.getPooledItem()) ||
                                  n.showLine(e, t.gameID, t.isReload);
                              }, 0.01 * n);
                        });
                      var h,
                        _,
                        g = this.node_pooled_line.getComponent(d),
                        p = this.node_pooled_line.getComponent(m);
                      if (g && p)
                        g.setContentSize(
                          new f(
                            g.width,
                            n.length *
                              (((null == (h = this.pooled_line_items[0]) ||
                              null == (_ = h.getComponent(d))
                                ? void 0
                                : _.contentSize.height) || 0) +
                                p.spacingY)
                          )
                        );
                    } else if (
                      this.gameID === C.BINH ||
                      this.gameID === C.PHOM
                    ) {
                      var I = n.reduce(function (e, t) {
                          return (
                            (e[t.bet] = e[t.bet] || []), e[t.bet].push(t), e
                          );
                        }, Object.create(null)),
                        v = [],
                        y = function (e) {
                          var t = new qe();
                          (t.bet = e),
                            (t.userCount = 0),
                            I[e].forEach(function (e) {
                              (t.userCount += e.userCount),
                                (t.minMoney = e.minMoney);
                            }),
                            v.push(t);
                        };
                      for (var M in I) y(M);
                      (v = v.sort(function (e, t) {
                        return e.isBigTable && e.bet > t.bet ? -1 : 1;
                      })).forEach(function (e) {
                        var n = t.getPooledItem(!0);
                        null == n ||
                          n.show(0, e.bet, e.userCount, t.gameID, e.minMoney);
                      });
                    } else {
                      [
                        100, 500, 1e3, 5e3, 1e4, 2e4, 5e4, 1e5, 2e5, 5e5, 1e6,
                      ].forEach(function (e) {
                        var i = !0;
                        if (
                          (0 ==
                            n.filter(function (n) {
                              return n.maxUser == t.getMaxUser() && n.bet == e;
                            }).length && (i = !1),
                          !i)
                        ) {
                          var o = new qe();
                          (o.roomID = ""),
                            (o.bet = e),
                            (o.maxUser = t.getMaxUser()),
                            (o.userCount = 0),
                            n.push(o);
                        }
                      });
                      var w = n
                          .filter(function (e) {
                            return e.maxUser == t.getMaxUser();
                          })
                          .reduce(function (e, t) {
                            return (
                              (e[t.bet] = e[t.bet] || []), e[t.bet].push(t), e
                            );
                          }, Object.create(null)),
                        R = [],
                        D = function (e) {
                          var n = new qe();
                          (n.bet = e),
                            (n.userCount = 0),
                            (n.maxUser = t.getMaxUser()),
                            w[e].forEach(function (e) {
                              (n.userCount += e.userCount),
                                (n.minMoney = e.minMoney);
                            }),
                            R.push(n);
                        };
                      for (var L in w) D(L);
                      (R = R.sort(function (e, t) {
                        return e.isBigTable && e.bet > t.bet ? -1 : 1;
                      })),
                        this.reset(),
                        R.length >= 9
                          ? (this.layout_listCell.spacingY = 10)
                          : (this.layout_listCell.spacingY = 40),
                        R.forEach(function (e) {
                          var n = t.getPooledItem(!0);
                          null == n ||
                            n.show(
                              e.maxUser,
                              e.bet,
                              e.userCount,
                              t.gameID,
                              e.minMoney
                            );
                        });
                    }
                    this.show(),
                      this.listCell &&
                        this.listLine &&
                        ((this.listLine.active =
                          this.gameID === C.XOCDIA ||
                          this.gameID === C.POKER ||
                          this.gameID === C.LIENG ||
                          this.gameID === C.XITO ||
                          this.gameID === C.BLACK_JACK),
                        (this.listCell.active = !this.listLine.active)),
                      this.listCell &&
                        this.listLine &&
                        this.listCell.active &&
                        this.list_cell_mode &&
                        this.list_cell_title &&
                        ((this.list_cell_title.active =
                          this.gameID === C.BINH || this.gameID === C.PHOM),
                        (this.list_cell_mode.active =
                          !this.list_cell_title.active)),
                      (this.isReload = !1);
                  }
                }),
                (r.show = function () {
                  var e, t, n;
                  if (
                    ((this.spr_table_list_logo.spriteFrame =
                      this.spr_frame_table_list_logo[this.gameID] ||
                      this.spr_table_list_logo.spriteFrame),
                    (this.root.active = !0),
                    (this.btn_choinhanh.node.active = !0),
                    (this.btn_trove.node.active = !0),
                    (this.btn_luatchoi.node.active = !0),
                    (this.spr_table_list_logo.node.active = !0),
                    this.gameID == C.TIENLEN
                      ? ((this.spr_chung_mode_bg.spriteFrame =
                          this.sprFrame_chung_mode[0] ||
                          this.spr_chung_mode_bg.spriteFrame),
                        (this.spr_chung_mode_checkmark.spriteFrame =
                          this.sprFrame_chung_mode[1] ||
                          this.spr_chung_mode_checkmark.spriteFrame))
                      : ((this.spr_chung_mode_bg.spriteFrame =
                          this.sprFrame_chung_mode[2] ||
                          this.spr_chung_mode_bg.spriteFrame),
                        (this.spr_chung_mode_checkmark.spriteFrame =
                          this.sprFrame_chung_mode[3] ||
                          this.spr_chung_mode_checkmark.spriteFrame)),
                    !this.isReload)
                  ) {
                    var i = this.root.getComponent(I);
                    if (i)
                      b.stopAllByTarget(i),
                        (i.opacity = 1),
                        p(i).to(0.2, { opacity: 255 }).start();
                  }
                  this.btn_choinhanh_binh_phom &&
                    this.btn_choinhanh_binh_phom.node.parent &&
                    (this.btn_choinhanh_binh_phom.node.parent.active =
                      this.gameID === C.BINH || this.gameID === C.PHOM),
                    this.btn_choinhanh_in_list_cell &&
                      this.btn_choinhanh_in_list_cell.node.parent &&
                      (this.btn_choinhanh_in_list_cell.node.parent.active = !(
                        null != (e = this.btn_choinhanh_binh_phom) &&
                        null != (t = e.node) &&
                        null != (n = t.parent) &&
                        n.active
                      ));
                }),
                (r.hide = function (e) {
                  var t = this;
                  if (0 != this.root.active) {
                    var n = this.root.getComponent(I);
                    if (n)
                      b.stopAllByTarget(n),
                        (n.opacity = 255),
                        p(n)
                          .to(0.2, { opacity: 1 })
                          .call(function () {
                            (t.root.active = !1), t.reset(), e && e();
                          })
                          .start();
                    else (this.root.active = !1), this.reset(), e && e();
                  } else e && e();
                }),
                (r.hideImmediately = function () {
                  if (0 != this.root.active) {
                    var e = this.root.getComponent(I);
                    e && (b.stopAllByTarget(e), (e.opacity = 1)),
                      (this.root.active = !1),
                      this.reset();
                  }
                }),
                (t.getInstance = function () {
                  return t._instance;
                }),
                (r.isShowing = function () {
                  var e;
                  return !(null == (e = this.root) || !e.active);
                }),
                (r.update = function () {}),
                (r.onDestroy = function () {
                  t._instance = null;
                }),
                (r.handleMessageRoomList = function (e) {
                  var n = e[0],
                    i = e[1];
                  i.cmd;
                  switch (n) {
                    case R.Extension_Response:
                      var o = i.cmd;
                      if (o == D.GET_TABLES) {
                        if (null != i.mgs && null != i.mgs) {
                          var l = i.mgs;
                          return O.showNoti(l), void this.back();
                        }
                        if (t.TRY_TO_GET_DEV_HOANG_KIM_LONG_ROOMID) {
                          var r = i.rs;
                          return (
                            this.getHKLRoomId(r),
                            void (t.TRY_TO_GET_DEV_HOANG_KIM_LONG_ROOMID = !1)
                          );
                        }
                        var a = i.rs;
                        return v("GET_TABLES:", a), void this.loadTables(a);
                      }
                      if (
                        o == D.QUICK_PLAY ||
                        o == D.CREATE_TABLE ||
                        o == D.QUICK_PLAY_WITH_BET
                      ) {
                        if (null != i.ri && null != i.ri) {
                          var s,
                            u = i.ri,
                            c = u.rid,
                            h = (u.b, u.sid),
                            _ = (u.Mu, u.gid),
                            m = "";
                          if (
                            (null != u.pwd && null != u.pwd && (m = u.pwd),
                            null != (s = E(_)) && s.isBuyIn)
                          ) {
                            var d = u.MMBI;
                            return (
                              (this.moneyBuyIn = Math.min(d, A.gold)),
                              void k.emit(
                                N.SendBookRoom,
                                A.roomServer || "",
                                _,
                                c,
                                function () {
                                  return k.emit(N.ReloadRooms);
                                }
                              )
                            );
                          }
                          if (
                            _ === C.TIENLEN ||
                            _ === C.SAM ||
                            _ === C.BINH ||
                            _ === C.PHOM ||
                            _ === C.XOCDIA
                          )
                            return (
                              (A.roomId = c),
                              (A.roomPassword = m),
                              (A.roomServer = h),
                              void k.emit(N.JoinRoomWithGameID, _)
                            );
                          v("QUICK_PLAY:", c, h),
                            k.emit(N.CallLobbyJoinRoom, c, h, m);
                        } else if (
                          (O.getInstance().hideLoading(),
                          null != i.mgs && null != i.mgs)
                        ) {
                          var g = i.mgs;
                          O.showNoti(g);
                        } else O.showNoti("Không tìm thấy phòng thích hợp!");
                        return;
                      }
                      if (o == D.BOOK_ROOM) {
                        if (i) {
                          i.cmd;
                          var b = i.tfb,
                            p = i.rid,
                            f = i.b,
                            I = i.MMBI,
                            y = i.mMBI,
                            M = i.sid,
                            w = !!i.hpwd;
                          O.getInstance().hideLoading(),
                            k.emit(
                              N.ShowBookRoom,
                              b / 1e3,
                              p.toString(),
                              M,
                              y,
                              I,
                              f,
                              w,
                              !0
                            );
                        }
                        return;
                      }
                  }
                }),
                (r.loadTables = function (e) {
                  var t;
                  this.isShowing() &&
                    ((A.isLoadingRoomList = !1),
                    this.loadRooms(e),
                    null == (t = P.getInstance()) ||
                      t.playSfx(this.loadTable_succeed_sfx));
                }),
                (r.getHKLRoomId = function (e) {
                  for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    if (null == i.inc || null == i.inc || 1 != i.inc) {
                      var o = i.rid,
                        l = i.rn,
                        r = i.sid;
                      "XD_HoangKimLong" == l &&
                        ((t.HOANG_KIM_LONG_ROOMID = o),
                        (t.HOANG_KIM_LONG_SVID = r));
                    }
                  }
                }),
                l(t, [
                  {
                    key: "isReload",
                    get: function () {
                      return this._reloadRooms;
                    },
                    set: function (e) {
                      (this._reloadRooms = e), v("reload=", e);
                    },
                  },
                ]),
                t
              );
            })(y))._instance = null),
            (Qe.TRY_TO_GET_DEV_HOANG_KIM_LONG_ROOMID = !1),
            (Qe.HOANG_KIM_LONG_ROOMID = 0),
            (Qe.HOANG_KIM_LONG_SVID = 0),
            (be = t((ge = Qe).prototype, "root", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (pe = t(ge.prototype, "tog_solo_mode", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (fe = t(ge.prototype, "tog_4_mode", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Ie = t(ge.prototype, "spr_chung_mode_bg", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (ve = t(ge.prototype, "spr_chung_mode_checkmark", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (ye = t(ge.prototype, "sprFrame_chung_mode", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Me = t(ge.prototype, "btn_trove", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (we = t(ge.prototype, "btn_choinhanh", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Re = t(ge.prototype, "btn_taoban", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (De = t(ge.prototype, "btn_choinhanh_binh_phom", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Le = t(ge.prototype, "btn_taoban_binh_phom", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ce = t(ge.prototype, "btn_luatchoi", [J], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Ee = t(ge.prototype, "btn_trove_in_list_cell", [j], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Oe = t(ge.prototype, "btn_choinhanh_in_list_cell", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Te = t(ge.prototype, "btn_taoban_in_list_cell", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Be = t(ge.prototype, "btn_luatchoi_in_list_cell", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ke = t(ge.prototype, "spr_table_list_logo", [$], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Ne = t(ge.prototype, "spr_frame_table_list_logo", [ee], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Ae = t(ge.prototype, "item_template", [te], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pe = t(ge.prototype, "layout_listCell", [ne], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (ze = t(ge.prototype, "listCell", [ie], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Se = t(ge.prototype, "listLine", [oe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (xe = t(ge.prototype, "line_item_template", [le], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Ge = t(ge.prototype, "scrollViewTransforms", [re], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Ke = t(ge.prototype, "list_cell_mode", [ae], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Ue = t(ge.prototype, "list_cell_title", [se], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Fe = t(ge.prototype, "pooled_cell_items", [ue], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (He = t(ge.prototype, "node_pooled_line", [ce], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Ve = t(ge.prototype, "bottom", [he], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ye = t(ge.prototype, "loadTable_succeed_sfx", [_e], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Xe = t(ge.prototype, "commonInfoPopup", [me], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (de = ge))
          ) || de)
        );
        r._RF.pop();
      },
    };
  }
);

(function (r) {
  r("virtual:///prerequisite-imports/room", "chunks:///_virtual/room");
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
