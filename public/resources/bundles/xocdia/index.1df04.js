System.register(
  "chunks:///_virtual/xocdia",
  [
    "./XocDiaGameView.ts",
    "./XocDiaNetworkHandler.ts",
    "./XocDiaSoiCauPopup.ts",
  ],
  function () {
    "use strict";
    return { setters: [null, null, null], execute: function () {} };
  }
);

System.register(
  "chunks:///_virtual/XocDiaGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./State.ts",
    "./RoomManager.ts",
    "./XocDiaNetworkHandler.ts",
    "./EventManager.ts",
    "./PersistManager.ts",
    "./CommonPopup.ts",
    "./Define.ts",
    "./GameUtils.ts",
    "./BetEntry.ts",
    "./PlayerView.ts",
    "./BetGameData.ts",
    "./BetGameSettingPopup.ts",
    "./ChipPanel.ts",
    "./UserChatPopup.ts",
    "./UserInvitePopup.ts",
    "./UserOnlinePopup.ts",
    "./BaseBetGameView.ts",
    "./SoundManager.ts",
    "./XocDiaSoiCauPopup.ts",
    "./SocketManager.ts",
  ],
  function (t) {
    "use strict";
    var e,
      n,
      i,
      o,
      r,
      s,
      a,
      l,
      u,
      h,
      c,
      f,
      p,
      d,
      _,
      b,
      g,
      v,
      m,
      y,
      w,
      P,
      C,
      I,
      E,
      B,
      S,
      U,
      D,
      V,
      k,
      x,
      T,
      R,
      A,
      G,
      O,
      N,
      z,
      H,
      M,
      F,
      L,
      J,
      X,
      q;
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
            (s = t._decorator),
            (a = t.Button),
            (l = t.sp),
            (u = t.ProgressBar),
            (h = t.Label),
            (c = t.Sprite),
            (f = t.SpriteFrame),
            (p = t.UITransform),
            (d = t.AudioClip),
            (_ = t.sys),
            (b = t.Vec3),
            (g = t.game),
            (v = t.Game),
            (m = t.Tween),
            (y = t.tween),
            (w = t.assetManager),
            (P = t.Prefab),
            (C = t.log),
            (I = t.systemEvent);
        },
        function (t) {
          E = t.state;
        },
        function (t) {
          B = t.RoomManager;
        },
        function (t) {
          S = t.XocDiaNetworkHandler;
        },
        function (t) {
          (U = t.eventManager), (D = t.EventKey);
        },
        function (t) {
          V = t.PersistManager;
        },
        function (t) {
          k = t.CommonPopup;
        },
        function (t) {
          x = t.GameID;
        },
        function (t) {
          T = t.default;
        },
        function (t) {
          R = t.BetEntry;
        },
        function (t) {
          (A = t.PlayerView), (G = t.PlayerInfo);
        },
        function (t) {
          O = t.UserBetData;
        },
        function (t) {
          N = t.BetGameSettingPopup;
        },
        function (t) {
          z = t.ChipPanel;
        },
        function (t) {
          H = t.UserChatPopup;
        },
        function (t) {
          M = t.UserInvitePopup;
        },
        function (t) {
          F = t.UserOnlinePopup;
        },
        function (t) {
          L = t.BaseBetGameView;
        },
        function (t) {
          J = t.SoundManager;
        },
        function (t) {
          X = t.XocDiaSoiCauPopup;
        },
        function (t) {
          q = t.socketManager;
        },
      ],
      execute: function () {
        var K,
          W,
          Q,
          Y,
          j,
          Z,
          $,
          tt,
          et,
          nt,
          it,
          ot,
          rt,
          st,
          at,
          lt,
          ut,
          ht,
          ct,
          ft,
          pt,
          dt,
          _t,
          bt,
          gt,
          vt,
          mt,
          yt,
          wt,
          Pt,
          Ct,
          It,
          Et,
          Bt,
          St,
          Ut,
          Dt,
          Vt,
          kt,
          xt,
          Tt,
          Rt,
          At,
          Gt,
          Ot,
          Nt,
          zt,
          Ht,
          Mt,
          Ft,
          Lt,
          Jt,
          Xt,
          qt,
          Kt,
          Wt,
          Qt,
          Yt,
          jt,
          Zt,
          $t,
          te,
          ee,
          ne,
          ie,
          oe,
          re,
          se,
          ae,
          le,
          ue,
          he,
          ce,
          fe,
          pe,
          de,
          _e,
          be;
        r._RF.push({}, "236dfQ7oXpLtIJqhH4UlyWx", "XocDiaGameView", void 0);
        var ge = s.ccclass,
          ve = s.property;
        t(
          "XocDiaGameView",
          ((K = ge("XocDiaGameView")),
          (W = ve([R])),
          (Q = ve(a)),
          (Y = ve(l.Skeleton)),
          (j = ve(u)),
          (Z = ve(h)),
          ($ = ve([A])),
          (tt = ve(A)),
          (et = ve(F)),
          (nt = ve(H)),
          (it = ve(M)),
          (ot = ve(z)),
          (rt = ve(a)),
          (st = ve(a)),
          (at = ve([a])),
          (lt = ve(a)),
          (ut = ve(a)),
          (ht = ve(a)),
          (ct = ve(a)),
          (ft = ve(a)),
          (pt = ve(a)),
          (dt = ve(k)),
          (_t = ve([c])),
          (bt = ve([f])),
          (gt = ve(p)),
          (vt = ve(X)),
          (mt = ve([c])),
          (yt = ve([f])),
          (wt = ve(h)),
          (Pt = ve(h)),
          (Ct = ve(N)),
          (It = ve(d)),
          (Et = ve(d)),
          (Bt = ve(d)),
          (St = ve(d)),
          (Ut = ve(d)),
          (Dt = ve(d)),
          (Vt = ve(d)),
          K(
            (((be = (function (t) {
              function e() {
                for (
                  var e, n = arguments.length, r = new Array(n), s = 0;
                  s < n;
                  s++
                )
                  r[s] = arguments[s];
                return (
                  (e = t.call.apply(t, [this].concat(r)) || this),
                  i(e, "betEntries", Tt, o(e)),
                  i(e, "btn_test", Rt, o(e)),
                  i(e, "shake_anim", At, o(e)),
                  i(e, "lbl_countdown", Gt, o(e)),
                  i(e, "lbl_userOnline", Ot, o(e)),
                  i(e, "playerViews", Nt, o(e)),
                  i(e, "my_info", zt, o(e)),
                  i(e, "userOnlinePopup", Ht, o(e)),
                  i(e, "userChatPopup", Mt, o(e)),
                  i(e, "userInvitePopup", Ft, o(e)),
                  i(e, "chipPanel", Lt, o(e)),
                  i(e, "btn_user", Jt, o(e)),
                  i(e, "btn_invite", Xt, o(e)),
                  i(e, "btn_invites", qt, o(e)),
                  i(e, "btn_chat", Kt, o(e)),
                  i(e, "btn_soicau", Wt, o(e)),
                  i(e, "btn_exit", Qt, o(e)),
                  i(e, "btn_datlai", Yt, o(e)),
                  i(e, "btn_datx2", jt, o(e)),
                  i(e, "btn_huongdan", Zt, o(e)),
                  i(e, "scrollViewInfoPopup", $t, o(e)),
                  i(e, "spr_result", te, o(e)),
                  i(e, "sprFrame_result", ee, o(e)),
                  i(e, "dice_result_node", ne, o(e)),
                  i(e, "soiCauPopup", ie, o(e)),
                  i(e, "last_result", oe, o(e)),
                  i(e, "sprFrame_cau_result", re, o(e)),
                  i(e, "lbl_chan_count", se, o(e)),
                  i(e, "lbl_le_count", ae, o(e)),
                  i(e, "settingPopup", le, o(e)),
                  i(e, "xocdia_bgm_music", ue, o(e)),
                  i(e, "shake_disk_sfx", he, o(e)),
                  i(e, "session_start_sfx", ce, o(e)),
                  i(e, "bet_sfx", fe, o(e)),
                  i(e, "return_avatar_chip_sfx", pe, o(e)),
                  i(e, "return_dealer_chip_sfx", de, o(e)),
                  i(e, "session_finish_sfx", _e, o(e)),
                  (e._coinValues = []),
                  (e._playerInfo = []),
                  (e._danhSachSoiCau = []),
                  (e.current_count_down = 0),
                  (e.userBet = []),
                  (e.isCanUpdateUser = !1),
                  (e.winJackpot = !1),
                  (e.winnerJackpot = null),
                  (e.my_bet = [0, 0, 0, 0, 0, 0]),
                  (e._remainingHiddenUserCount = 0),
                  (e.forceQuit = !1),
                  (e.forceKick = !1),
                  (e.isBigTable = !1),
                  (e.LOGGED_OUT = !1),
                  (e.time = 0),
                  (e.isSetValueCoin = !1),
                  e
                );
              }
              n(e, t),
                (e.getInstance = function () {
                  return e.instance;
                });
              var r = e.prototype;
              return (
                (r.onLoad = function () {
                  var n,
                    i,
                    o,
                    r,
                    s,
                    a,
                    l,
                    u,
                    h,
                    c,
                    f,
                    p,
                    d = this;
                  t.prototype.onLoad.call(this),
                    (e.instance = this),
                    this.betEntries.forEach(function (t) {
                      return t.setGameView(d);
                    }),
                    this.betEntries.forEach(function (t) {
                      var e;
                      return null == (e = t.getChipPooling())
                        ? void 0
                        : e.pool();
                    });
                  var m,
                    y = 0;
                  (null == (n = this.btn_test) ||
                    n.node.on("click", function () {
                      d.showResult(y), ++y >= 5 && (y = 0);
                    }),
                  null == (i = this.btn_user) ||
                    i.node.on("click", function () {
                      var t;
                      null == (t = d.userOnlinePopup) || t.show();
                    }),
                  null == (o = this.btn_huongdan) ||
                    o.node.on("click", function () {
                      var t;
                      null == (t = d.scrollViewInfoPopup) || t.show();
                    }),
                  _.isBrowser) ||
                    null == (m = this.btn_invite) ||
                    m.node.setPosition(new b(-706, 190, 0));
                  null == (r = this.btn_invite) ||
                    r.node.setScale(new b(0.87, 0.87, 0.87)),
                    this.soiCauPopup &&
                      (this.soiCauPopup.onClosed = function () {
                        d.btn_soicau && (d.btn_soicau.node.active = !0);
                      }),
                    null == (s = this.btn_invites) ||
                      s.forEach(function (t) {
                        t &&
                          t.node.on("click", function () {
                            var t;
                            null == (t = d.userInvitePopup) ||
                              t.fetchUserInvitations();
                          });
                      }),
                    null == (a = this.btn_chat) ||
                      a.node.on("click", function () {
                        var t;
                        null == (t = d.userChatPopup) || t.show();
                      }),
                    null == (l = this.btn_soicau) ||
                      l.node.on("click", function () {
                        var t;
                        d.btn_soicau && (d.btn_soicau.node.active = !1),
                          null == (t = d.soiCauPopup) || t.showImmediately();
                      }),
                    null == (u = this.btn_exit) ||
                      u.node.on("click", function () {
                        var t;
                        null == (t = d.settingPopup) || t.show();
                      }),
                    null == (h = this.btn_datlai) ||
                      h.node.on("click", function () {
                        e.IS_START
                          ? d.rebet()
                          : V.showNoti("Ván chơi chưa bắt đầu!");
                      }),
                    null == (c = this.btn_datx2) ||
                      c.node.on("click", function () {
                        e.IS_START
                          ? d.rebetx2()
                          : V.showNoti("Ván chơi chưa bắt đầu!");
                      }),
                    null == (f = this.settingPopup) || f.setGameView(this),
                    null == (p = this.settingPopup) ||
                      p.setCallbackExitRoom(function () {
                        S.getInstance().sendLeaveRoom(),
                          V.getInstance().showLoading();
                      }),
                    B.getInstance().joinRoom(
                      E.roomId,
                      E.roomServer,
                      E.roomPassword
                    ),
                    S.getInstance().connected(),
                    g.off(v.EVENT_SHOW, this.GameEventShow, this),
                    g.off(v.EVENT_HIDE, this.GameEventHide, this),
                    g.on(v.EVENT_SHOW, this.GameEventShow, this),
                    g.on(v.EVENT_HIDE, this.GameEventHide, this);
                }),
                (r.GameEventShow = function () {
                  var t = (new Date().getTime() - this.time) / 1e3;
                  (this.time = new Date().getTime()),
                    this.handleBackGameFromInterupt(t);
                }),
                (r.GameEventHide = function () {
                  this.time = new Date().getTime();
                }),
                (r.onDestroy = function () {
                  g.off(v.EVENT_SHOW, this.GameEventShow, this),
                    g.off(v.EVENT_HIDE, this.GameEventHide, this);
                }),
                (r.getCurrentRoomName = function () {
                  return "SD_ConMucPlugin";
                }),
                (r.onClickBetEntry = function (t) {
                  var e,
                    n =
                      null == (e = this.chipPanel)
                        ? void 0
                        : e.getSelectedBetValue();
                  this.bet(t, n);
                }),
                (r.bet = function (t, n) {
                  e.IS_START
                    ? S.getInstance().sendBet(t, n)
                    : V.showNoti("Ván chơi chưa bắt đầu!");
                }),
                (r.rebet = function () {
                  var t = this;
                  if (e.IS_START) {
                    this.btn_datx2 && (this.btn_datx2.node.active = !1),
                      this.btn_datlai && (this.btn_datlai.node.active = !1);
                    var n = [0, 0, 0, 0, 0, 0];
                    this.my_bet.forEach(function (t, e) {
                      n[e] = t;
                    }),
                      (this.my_bet = [0, 0, 0, 0, 0, 0]),
                      n.forEach(function (e, n) {
                        t.bet(n, e);
                      });
                  } else V.showNoti("Ván chơi chưa bắt đầu!");
                }),
                (r.rebetx2 = function () {
                  var t = this;
                  if (e.IS_START) {
                    this.btn_datx2 && (this.btn_datx2.node.active = !1),
                      this.btn_datlai && (this.btn_datlai.node.active = !1);
                    var n = [0, 0, 0, 0, 0, 0];
                    this.my_bet.forEach(function (t, e) {
                      n[e] = t;
                    }),
                      (this.my_bet = [0, 0, 0, 0, 0, 0]),
                      n.forEach(function (e, n) {
                        t.bet(n, 2 * e);
                      });
                  } else V.showNoti("Ván chơi chưa bắt đầu!");
                }),
                (r.resetUI = function () {
                  var t, e, n, i, o, r, s;
                  null == (t = this.userChatPopup) || t.close(),
                    null == (e = this.settingPopup) || e.close(),
                    null == (n = this.settingPopup) || n.reset(),
                    null == (i = this.soiCauPopup) || i.close(),
                    null == (o = this.userOnlinePopup) || o.close(),
                    null == (r = this.userInvitePopup) || r.close(),
                    this.playerViews.forEach(function (t) {
                      t.setUserInfo(null), t.stopAllAction();
                    }),
                    null == (s = this.shake_anim) ||
                      s.setAnimation(0, "idle", !0),
                    J.getInstance().stopSfx();
                }),
                (r.initUI = function () {
                  var t = this;
                  this.btn_chat &&
                    (m.stopAllByTarget(this.btn_chat.node),
                    this.scheduleOnce(function () {
                      var e, n;
                      y(null == (e = t.btn_chat) ? void 0 : e.node)
                        .repeatForever(
                          y(null == (n = t.btn_chat) ? void 0 : n.node)
                            .call(function () {
                              t.playBgmMusic();
                            })
                            .delay(240)
                        )
                        .start();
                    }, 1)),
                    this.betEntries.forEach(function (t) {
                      return t.resetUI();
                    }),
                    (this.forceKick = !1);
                }),
                (r.playBgmMusic = function () {
                  J.getInstance().playBgm(this.xocdia_bgm_music, !0, !0);
                }),
                (r.release = function () {
                  e.instance = null;
                  var t = w.getBundle("table-game");
                  null != t &&
                    null != t &&
                    (t.release("prefab_xocdia", P),
                    w.removeBundle(t),
                    C("remove asset bundle prefab_xocdia"),
                    this.betEntries.forEach(function (t) {
                      var e;
                      return null == (e = t.getChipPooling())
                        ? void 0
                        : e.clear();
                    }),
                    this.node.destroy(),
                    _.garbageCollect());
                }),
                (e.releaseBundle = function () {
                  e.instance = null;
                  var t = w.getBundle("table-game");
                  null != t &&
                    null != t &&
                    (t.release("prefab_xocdia", P),
                    w.removeBundle(t),
                    C("remove asset bundle prefab_xocdia"),
                    _.garbageCollect());
                }),
                (e.releaseBundleTuLinh = function () {
                  e.instance = null;
                  var t = w.getBundle("table-game");
                  null != t &&
                    null != t &&
                    (t.release("prefab_xocdia_squidgame", P),
                    w.removeBundle(t),
                    C("remove asset bundle prefab_xocdia_squidgame"),
                    _.garbageCollect());
                }),
                (r.handleBackGameFromInterupt = function (t) {
                  C("handleBackGameFromInterupt::baucua", t),
                    this.LOGGED_OUT || (t > 2 && q.refreshInBackground());
                }),
                (r.leaveRoom = function () {
                  (E.backToLobbyFromGameRoom = !0),
                    t.prototype.leaveRoom.call(this);
                }),
                (r.handleLeaveRoomResponse = function (t) {
                  if (
                    (C("handleLeaveRoomResponse", t),
                    V.getInstance().hideLoading(),
                    null != t)
                  ) {
                    var e = t[5];
                    t[4];
                    this.leaveRoom(),
                      "" != e &&
                        V.getInstance().showCommonPopup(e, function () {
                          V.getInstance().hideCommonPopup();
                        });
                  }
                }),
                (r.showChat = function (t, e) {
                  var n;
                  if (
                    null == (n = this.settingPopup) ||
                    !n.isHideChat() ||
                    t == E.userID
                  ) {
                    var i = this.getPlayerByUID(t);
                    null != i &&
                      (e.indexOf("e_") >= 0 && (e = e.replace("e_", "emo_")),
                      i.showBubbleChat(e));
                  }
                }),
                (r.updateJackpotLabel = function (t) {}),
                (r.hasBetCache = function () {
                  return (
                    this.my_bet.filter(function (t) {
                      return t > 0;
                    }).length > 0
                  );
                }),
                (r.updateRemainingHiddenUserCount = function (t) {
                  var e;
                  (this._remainingHiddenUserCount = t),
                    this.lbl_userOnline &&
                      (this.lbl_userOnline.string = (
                        (null == (e = this.userOnlinePopup)
                          ? void 0
                          : e.getUserCount()) ||
                        0 + this._remainingHiddenUserCount
                      ).toString());
                }),
                (r.stopCheckConnection = function (t) {
                  var e, n;
                  m.stopAllByTarget(this.node),
                    m.stopAllByTarget(
                      null == (e = this.btn_datlai) ? void 0 : e.node
                    ),
                    this.shake_disk_sfx &&
                      (null == (n = J.getInstance()) ||
                        n.stopAdditionalSfx(this.shake_disk_sfx));
                }),
                (r.loggedOut = function () {
                  m.stopAllByTarget(this.node), (this.LOGGED_OUT = !0);
                }),
                (r.isInGame = function () {
                  var t;
                  return null == (t = this.root) ? void 0 : t.active;
                }),
                (r.onJoinRoomResponse = function (t) {
                  if (t[1])
                    E.roomId != t[3] && C("chuyen phong!"), (E.roomId = t[3]);
                  else {
                    this.leaveRoom();
                    var e;
                    (e = t[4]), V.showNoti(e), U.emit(D.ReloadRooms);
                  }
                  V.getInstance().hideLoading();
                }),
                (r.onLeaveRoomResponse = function (t) {
                  this.handleLeaveRoomResponse(t), this.stopCheckConnection();
                }),
                (r.onJoinTableInfo = function (t) {
                  t.b;
                  var n,
                    i = t.gS,
                    o = t.rmT;
                  o /= 1e3;
                  t.aid;
                  var r = t.Mu,
                    s = t.J;
                  s && this.updateJackpotLabel(s),
                    (this.isBigTable = !(r <= 9)),
                    (this.userBet = []),
                    (this.my_bet = [0, 0, 0, 0, 0, 0]),
                    null == (n = this.userOnlinePopup) || n.clear();
                  var a = !1;
                  4 == i || 5 == i || 6 == i
                    ? (o >= 1 && this.continue(o), (a = !0))
                    : this.wait();
                  for (var l = t.ps, u = 0; u < l.length; u++) {
                    var h = l[u],
                      c = h.m,
                      f = h.dn,
                      p = h.uid,
                      d = h.pid,
                      _ = h.As,
                      b = h.a,
                      g = 0;
                    h.id && (g = h.id),
                      "SD_Banker" != f &&
                        this.addPlayer(
                          f,
                          p,
                          !1,
                          c,
                          0,
                          0,
                          0,
                          !1,
                          d,
                          !0,
                          _,
                          b,
                          g
                        );
                  }
                  (this.isCanUpdateUser = !0), this.updateViewPostions(!0);
                  var v = t.ruc;
                  this.updateRemainingHiddenUserCount(v);
                  var m = t.coins;
                  this.setValueForCoinBtns(m);
                  var y = t.tr;
                  C(JSON.stringify(y)),
                    this.setBangSoiCau(y),
                    a && this.setCurrentBetState(l),
                    (e.IS_END = !this.hasBetCache()),
                    this.btn_datx2 && (this.btn_datx2.node.active = !1),
                    this.btn_datlai && (this.btn_datlai.node.active = !1);
                  var w = t.ets;
                  this.setRateLabels(w);
                }),
                (r.onUserJoinAndLeaveTable = function (t) {
                  var e = t.t;
                  if (1 == e) {
                    var n = t.p,
                      i = (n.a, n.g, n.m),
                      o = n.dn,
                      r = n.uid,
                      s = !1,
                      a = n.pid;
                    null != n.r && null != n.r && (s = n.r);
                    var l = n.As,
                      u = n.a,
                      h = 0;
                    null != n.id && null != n.id && (h = n.id),
                      this.addPlayer(o, r, !1, i, 0, 0, 0, s, a, !0, l, u, h);
                  }
                  if (2 == e) {
                    var c = t.p.uid;
                    this.removePlayer(c);
                  }
                  this.updateViewPostions();
                }),
                (r.onSelfBet = function (t) {
                  var n = t.eid,
                    i = t.b,
                    o = t.m,
                    r = t.teb;
                  this.btn_datlai &&
                    this.btn_datx2 &&
                    this.btn_datlai.node.active &&
                    this.btn_datx2.node.active &&
                    ((this.btn_datx2.node.active = !1),
                    (this.btn_datlai.node.active = !1),
                    (this.my_bet = [0, 0, 0, 0, 0, 0])),
                    (this.my_bet[n] += i),
                    this.betResponseByUid(E.userID, o, i, n, r),
                    (e.IS_END = !1);
                }),
                (r.onOtherBet = function (t) {
                  C("OTHERS_BET:", t);
                  var e = t.ets,
                    n = t.ps;
                  this.otherBetResponse(e, n);
                }),
                (r.onStartGame = function (t) {
                  var e;
                  null != t.B && null != t.B && (e = t.B), this.startGame(e);
                }),
                (r.onFinishGame = function (t) {
                  C("FINISH_GAME:", t), (this.isCanUpdateUser = !1);
                  var e = t.rt,
                    n = null == t.ps ? [] : t.ps,
                    i = null == t.ew ? [] : t.ew,
                    o = t.dice,
                    r = [];
                  if (
                    (o &&
                      (r.push(o.d1), r.push(o.d2), r.push(o.d3), r.push(o.d4)),
                    null != t.kes && null != t.kes)
                  ) {
                    var s = t.kes;
                    s.length > 0
                      ? this.finishThisGame(r, n, i, e, !0, s)
                      : this.finishThisGame(r, n, i, e);
                  } else this.finishThisGame(r, n, i, e);
                }),
                (r.onPayMoney = function (t) {
                  C("PAY_MONEY:", t),
                    S.getInstance().sendRefreshMoney(),
                    (this.isCanUpdateUser = !1);
                  var e = t.rt,
                    n = t.ps,
                    i = t.ew,
                    o = t.dice,
                    r = [];
                  if (
                    (o &&
                      (r.push(o.d1), r.push(o.d2), r.push(o.d3), r.push(o.d4)),
                    null != t.kes && null != t.kes)
                  ) {
                    var s = t.kes;
                    s.length > 0
                      ? this.finishThisGame(r, n, i, e, !0, s)
                      : this.finishThisGame(r, n, i, e);
                  } else this.finishThisGame(r, n, i, e);
                }),
                (r.onError = function (t) {
                  var e;
                  null != t.mgs && null != t.mgs && (e = t.mgs),
                    C("ERROR_MESSAGE:", t);
                  var n = 1 == t.t ? 2 : 0;
                  e.length > 0 &&
                    "Cược không hợp lệ" != e &&
                    V.showNoti(e, this.root, x.XOCDIA, n);
                }),
                (r.onUserChat = function (t) {
                  var e = t.uid,
                    n = t.mgs;
                  this.showChat(e, n);
                }),
                (r.onUpdateHiddenUserCount = function (t) {
                  var e = t.ruc;
                  this.updateRemainingHiddenUserCount(e);
                }),
                (r.onUpdateHiddenUserOnline = function (t) {
                  var e, n;
                  null == (e = this.userOnlinePopup) || e.resetPlayerHidden();
                  for (var i = t.ps, o = 0; o < i.length; o++) {
                    var r,
                      s = i[o],
                      a = s ? s.m : 0,
                      l = s ? s.dn : "",
                      u = s ? s.uid : "",
                      h = s ? s.a : "";
                    if ((s.id && s.id, "BC_Banker" != l)) {
                      var c = new G();
                      (c.displayName = l),
                        (c.gold = a),
                        (c.avatarURL = h),
                        (c.uid = u),
                        null == (r = this.userOnlinePopup) ||
                          r.addPlayerHidden(c);
                    }
                  }
                  null == (n = this.userOnlinePopup) || n.refreshHidden();
                }),
                (r.onUpdateUserMoney = function (t) {
                  var e = this;
                  t.ps.forEach(function (t) {
                    var n = t.uid,
                      i = t.m,
                      o = e.getPlayerByUID(n);
                    o && o.setMoney(i);
                  });
                }),
                (r.onUpdateJackpot = function (t) {
                  t.gid;
                  var e = t.ba;
                  this.updateJackpotLabel(e);
                }),
                (r.onJackpot = function (t) {
                  var e = t.wns;
                  (this.winJackpot = !0), (this.winnerJackpot = e);
                }),
                (r.onGetUserToBeInvited = function (t) {
                  var e,
                    n = t.us;
                  null == (e = this.userInvitePopup) ||
                    e.showPlayersToBeInvited(n);
                }),
                (r.onRefreshMoney = function (t) {
                  var e = t.As,
                    n = (e.vip, e.gold);
                  e.chip, e.safe;
                  (E.gold = n), I.emit(D.RefreshMoney, E.gold);
                }),
                (r.onNotice = function (t) {
                  var e = t.message;
                  3 == t.t &&
                    (V.getInstance().showCommonPopup(e, function () {
                      V.getInstance().hideCommonPopup();
                    }),
                    (this.forceQuit = !0));
                }),
                (r.payMoney = function (t, e, n) {
                  for (
                    var i = this,
                      o = function (e) {
                        var n = t[e],
                          o = (n.dn, n.uid),
                          r = i.getPlayerByUID(o);
                        if (null == r) return "continue";
                        var s = n.m;
                        r.money = s;
                        var a = n.wm;
                        r.winning = a;
                        var l = i._playerInfo.filter(function (t) {
                          return t.uid == o;
                        });
                        l && l.length > 0 && (l[0].gold = s);
                      },
                      r = 0;
                    r < t.length;
                    r++
                  )
                    o(r);
                  this.payChips(e);
                }),
                (r.setBangSoiCau = function (t) {
                  for (var e = 0; e < t.length; e++) {
                    var n = t[e];
                    this._danhSachSoiCau.push(n);
                  }
                  this.updateBangSoiCau();
                }),
                (r.setCurrentBetState = function (t) {
                  var e = this;
                  this.betEntries.forEach(function (t) {
                    return t.setTotalBet(0);
                  });
                  for (
                    var n = function (n) {
                        var i = t[n],
                          o = i.uid,
                          r = e.getPlayerByUID(o);
                        if (!r) return "continue";
                        for (
                          var s = i.b,
                            a = function (t) {
                              var n,
                                i = s[t],
                                a = i.eid,
                                l = i.v;
                              r.isThisPlayer() && (e.my_bet[a] = l);
                              var u =
                                null == (n = e.betEntries[a])
                                  ? void 0
                                  : n.getTotalBet();
                              if (
                                ((u += l),
                                e.isBigTable &&
                                  e.userBet.filter(function (t) {
                                    return t.uid == o && t.eid == a;
                                  }).length > 2)
                              );
                              else {
                                var h = l,
                                  c = new O();
                                (c.uid = o),
                                  (c.eid = a),
                                  (c.bet = l),
                                  e.userBet.push(c),
                                  h > 0 && e.setBetState(o, h, a, u);
                              }
                            },
                            l = 0;
                          l < s.length;
                          l++
                        )
                          a(l);
                      },
                      i = 0;
                    i < t.length;
                    i++
                  )
                    n(i);
                }),
                (r.setBetState = function (t, e, n, i) {
                  var o;
                  void 0 === i && (i = 0);
                  var r,
                    s,
                    a = 0;
                  i > 0 &&
                    (null == (r = this.betEntries[n]) || r.setTotalBet(i));
                  E.userID == t &&
                    (null == (s = this.betEntries[n]) || s.setCurrentBet(e));
                  for (var l = 0; l < this._coinValues.length; l++)
                    if (e == this._coinValues[l]) {
                      a = l;
                      break;
                    }
                  var u =
                      null == (o = this.betEntries[n]) ? void 0 : o.getChip(a),
                    h = u.newCoin,
                    c = u.desPos;
                  if (null != h && null != h) {
                    (h.name = "standing"), (h.active = !0), h.setPosition(c);
                    var f = this.getPlayerByUID(t);
                    f && (f.addShakeCoin(n, h), f.addBetValue(n, e));
                  }
                }),
                (r.addPlayer = function (
                  t,
                  e,
                  n,
                  i,
                  o,
                  r,
                  s,
                  a,
                  l,
                  u,
                  h,
                  c,
                  f
                ) {
                  var p = new G();
                  (p.displayName = t),
                    (p.gold = i),
                    (p.avatarURL = c),
                    (p.uid = e),
                    this._playerInfo.push(p),
                    (this._playerInfo = this._playerInfo.sort(function (t, e) {
                      return t.gold < e.gold ? 1 : -1;
                    }));
                }),
                (r.removePlayer = function (t) {
                  (this._playerInfo = this._playerInfo.filter(function (e) {
                    return e.uid != t;
                  })),
                    (this._playerInfo = this._playerInfo.sort(function (t, e) {
                      return t.gold < e.gold ? 1 : -1;
                    })),
                    E.userID != t && this.removeVisiblePlayers();
                }),
                (r.removeVisiblePlayers = function () {
                  var t = this;
                  this.isCanUpdateUser &&
                    this.playerViews.forEach(function (e, n) {
                      0 ==
                        t._playerInfo.filter(function (t) {
                          return t.uid == e.getUID();
                        }).length &&
                        !e.isEmpty() &&
                        e.hideUserInfo();
                    });
                }),
                (r.updateViewPostions = function (t) {
                  var e,
                    n,
                    i,
                    o = this;
                  if ((void 0 === t && (t = !0), this.isCanUpdateUser)) {
                    var r = this.getNewUserSightIndex();
                    null == (e = this.userOnlinePopup) || e.reset();
                    var s = 0;
                    this._playerInfo.forEach(function (e, n) {
                      var i;
                      if (e.uid == E.userID)
                        null == (i = o.my_info) || i.setUserInfo(e);
                      else if (s < o.playerViews.length) {
                        var a;
                        if (t)
                          if (
                            0 ==
                            o.playerViews.filter(function (t) {
                              return t.getUID() == e.uid;
                            }).length
                          ) {
                            var l = r.pop();
                            null == o.playerViews[l] || null == o.playerViews[l]
                              ? C("updatedInsightIndex at:", l, " failed")
                              : o.playerViews[l].updateNewUser(e);
                          } else {
                            var u = o.playerViews.find(function (t) {
                              return t.getUID() == e.uid;
                            });
                            null == u || u.updateNewUser(e, !1);
                          }
                        else null == (a = o.playerViews[s]) || a.setUserInfo(e);
                        s++;
                      } else {
                        var h;
                        null == (h = o.userOnlinePopup) || h.addPlayer(e);
                      }
                    }),
                      null == (n = this.userOnlinePopup) || n.refresh(),
                      this.lbl_userOnline &&
                        (this.lbl_userOnline.string = (
                          (null == (i = this.userOnlinePopup)
                            ? void 0
                            : i.getUserCount()) ||
                          0 + this._remainingHiddenUserCount
                        ).toString());
                  }
                }),
                (r.getNewUserSightIndex = function () {
                  var t = this,
                    e = [],
                    n = this._playerInfo.filter(function (e, n) {
                      return n < t.playerViews.length;
                    });
                  return (
                    this.playerViews.forEach(function (t, i) {
                      0 ==
                        n.filter(function (e) {
                          return e.uid == t.getUID();
                        }).length && e.push(i);
                    }),
                    e
                  );
                }),
                (r.startGame = function (t) {
                  var n,
                    i,
                    o,
                    r,
                    s = this;
                  (this.playerViews.forEach(function (t) {
                    m.stopAllByTarget(t.node), t.grayOut(!1);
                  }),
                  m.stopAllByTarget(
                    null == (n = this.my_info) ? void 0 : n.node
                  ),
                  null == (i = this.my_info) || i.grayOut(!1),
                  (this.userBet = []),
                  (this.isCanUpdateUser = !0),
                  this.updateViewPostions(),
                  this.updateRemainingHiddenUserCount(
                    this._remainingHiddenUserCount
                  ),
                  this.removeVisiblePlayers(),
                  this.resetShakeDiskCoin(),
                  this.betEntries.forEach(function (t) {
                    var e;
                    return null == (e = t.getChipPooling())
                      ? void 0
                      : e.activeAll(!1);
                  }),
                  m.stopAllByTarget(this.node),
                  this.stopCountDown(),
                  this.betEntries.forEach(function (t) {
                    return t.hideAll();
                  }),
                  y(this.node)
                    .sequence(
                      y().call(function () {
                        s.playShakeAnim();
                      }),
                      y().delay(3),
                      y().call(function () {
                        V.showNoti("Xin mời đặt cược!", s.root, x.XOCDIA, 0),
                          s.startCountDown(21, 0.95),
                          s.session_start_sfx &&
                            J.getInstance().playAdditionalSfx(
                              s.session_start_sfx
                            ),
                          s.hasBetCache() &&
                            (s.btn_datx2 && (s.btn_datx2.node.active = !0),
                            s.btn_datlai && (s.btn_datlai.node.active = !0));
                      })
                    )
                    .start(),
                  (e.IS_END = !0),
                  (null != (o = this.settingPopup) && o.isWillExit) ||
                    this.forceQuit) &&
                    (null == (r = this.settingPopup) || r.exitRoom());
                }),
                (r.continue = function (t) {
                  (this._danhSachSoiCau = []),
                    this.resetAllPlayerViewAction(),
                    this.betEntries.forEach(function (t) {
                      var e;
                      return null == (e = t.getChipPooling())
                        ? void 0
                        : e.activeAll(!1);
                    }),
                    m.stopAllByTarget(this.node),
                    this.stopCountDown(!1),
                    this.betEntries.forEach(function (t) {
                      return t.hideAll();
                    }),
                    this.startCountDown(t);
                }),
                (r.wait = function () {
                  (this._danhSachSoiCau = []),
                    this.resetAllPlayerViewAction(),
                    this.betEntries.forEach(function (t) {
                      var e;
                      return null == (e = t.getChipPooling())
                        ? void 0
                        : e.activeAll(!1);
                    }),
                    m.stopAllByTarget(this.node),
                    this.stopCountDown(),
                    this.betEntries.forEach(function (t) {
                      return t.hideAll();
                    });
                }),
                (r.resetAllPlayerViewAction = function () {
                  var t, e;
                  (this._playerInfo = []),
                    this.playerViews.forEach(function (t) {
                      m.stopAllByTarget(t.node), t.grayOut(!1);
                    }),
                    m.stopAllByTarget(
                      null == (t = this.my_info) ? void 0 : t.node
                    ),
                    null == (e = this.my_info) || e.grayOut(!1),
                    this.resetShakeDiskCoin();
                }),
                (r.resetShakeDiskCoin = function () {
                  var t;
                  this.playerViews.forEach(function (t) {
                    t.resetBetValue();
                  }),
                    null == (t = this.my_info) || t.resetBetValue();
                }),
                (r.continueCountDownBy = function (t) {
                  (this.current_count_down += t),
                    this.current_count_down < 0 &&
                      (this.current_count_down = 0),
                    this.lbl_countdown && m.stopAllByTarget(this.lbl_countdown),
                    this.startCountDown(this.current_count_down);
                }),
                (r.startCountDown = function (t, n) {
                  var i = this;
                  void 0 === n && (n = 1),
                    (this.current_count_down = t),
                    (e.IS_START = !0),
                    (this.current_count_down = Math.round(
                      this.current_count_down
                    )),
                    this.lbl_countdown &&
                      this.lbl_countdown.node.parent &&
                      (this.lbl_countdown.node.parent.active = !0),
                    this.lbl_countdown &&
                      (this.lbl_countdown.progress =
                        this.current_count_down / 20),
                    y(this.lbl_countdown)
                      .repeat(
                        this.current_count_down,
                        y(this.lbl_countdown).sequence(
                          y().delay(n),
                          y().call(function () {
                            (i.current_count_down -= 1),
                              y(i.lbl_countdown)
                                .to(0.5, {
                                  progress: i.current_count_down / 20,
                                })
                                .start();
                          })
                        )
                      )
                      .start();
                }),
                (r.setCountDown = function (t, n) {
                  var i = this;
                  void 0 === n && (n = 1),
                    (this.current_count_down = t),
                    (e.IS_START = !0),
                    (this.current_count_down = Math.round(
                      this.current_count_down
                    )),
                    this.lbl_countdown &&
                      this.lbl_countdown.node.parent &&
                      (this.lbl_countdown.node.parent.active = !0),
                    this.lbl_countdown &&
                      (this.lbl_countdown.progress =
                        this.current_count_down / 20),
                    y(this.lbl_countdown)
                      .repeat(
                        this.current_count_down,
                        y(this.lbl_countdown).sequence(
                          y().delay(n),
                          y().call(function () {
                            (i.current_count_down -= 1),
                              y(i.lbl_countdown)
                                .to(0.5, {
                                  progress: i.current_count_down / 20,
                                })
                                .start();
                          })
                        )
                      )
                      .start();
                }),
                (r.isEndGame = function () {
                  return e.IS_END;
                }),
                (r.stopCountDown = function (t) {
                  (e.IS_START = !1),
                    this.lbl_countdown && m.stopAllByTarget(this.lbl_countdown),
                    this.lbl_countdown &&
                      this.lbl_countdown.node.parent &&
                      (this.lbl_countdown.node.parent.active = !1);
                }),
                (r.finishThisGame = function (t, e, n, i, o, r) {
                  var s = this;
                  this.session_finish_sfx &&
                    J.getInstance().playAdditionalSfx(this.session_finish_sfx),
                    V.showNoti("Mở Bát", this.root, x.XOCDIA, 0),
                    this.stopCountDown(),
                    this.showResult(i);
                  for (
                    var a = function (t) {
                        var n = e[t],
                          i = (n.dn, n.uid),
                          o = s.getPlayerByUID(i);
                        if (null == o) return "continue";
                        var r = n.m;
                        o.money = r;
                        var a = n.wm;
                        o.winning = a;
                        var l = s._playerInfo.filter(function (t) {
                          return t.uid == i;
                        });
                        l.length > 0 && (l[0].gold = r);
                      },
                      l = 0;
                    l < e.length;
                    l++
                  )
                    a(l);
                  this.payChips(n);
                }),
                (r.payChipsForDealer = function () {
                  var t = this,
                    e = [];
                  this.betEntries.forEach(function (t, n) {
                    t.isGlowing() && e.push(n);
                  });
                  var n = !0;
                  this.betEntries.forEach(function (i, o) {
                    var r;
                    t.return_dealer_chip_sfx &&
                      i.payChipsForDealer(
                        ((r = o),
                        e.filter(function (t) {
                          return t == r;
                        }).length <= 0),
                        t.return_dealer_chip_sfx,
                        n
                      ),
                      (n = !1);
                  });
                }),
                (r.payChips = function (t) {
                  var e = this,
                    n = [];
                  this.betEntries.forEach(function (t, e) {
                    t.isGlowing() && n.push(e);
                  });
                  var i = !0;
                  this.betEntries.forEach(function (t, o) {
                    var r;
                    e.return_dealer_chip_sfx &&
                      t.payChipsForDealer(
                        ((r = o),
                        n.filter(function (t) {
                          return t == r;
                        }).length <= 0),
                        e.return_dealer_chip_sfx,
                        i
                      ),
                      (i = !1);
                  }),
                    this.betEntries.forEach(function (t, n) {
                      e.return_dealer_chip_sfx &&
                        e.btn_user &&
                        t.payChipsForHidden(
                          e.btn_user.node.position,
                          e.return_dealer_chip_sfx
                        );
                    });
                  for (var o = 0; o < t.length; o++) {
                    var r = t[o],
                      s = r.eid,
                      a = r.wns;
                    if (a.length > 0)
                      for (var l = 0; l < a.length; l++) {
                        var u,
                          h = a[l];
                        this.return_avatar_chip_sfx &&
                          (null == (u = this.betEntries[s]) ||
                            u.payChipsForPlayers(
                              h,
                              this.return_avatar_chip_sfx
                            ));
                      }
                  }
                  this.forceKick &&
                    setTimeout(function () {
                      e.leaveRoom();
                    }, 3e3);
                }),
                (r.refreshUserOnlinePopup = function () {
                  var t;
                  null == (t = this.userOnlinePopup) || t.refresh();
                }),
                (r.getPlayer_canNotCompareUserName = function (t) {
                  var e;
                  if (t == E.displayName) return this.my_info;
                  if (this.playerViews.length > 0) {
                    var n = this.playerViews.filter(function (e) {
                      return e.getName() == t;
                    });
                    if (n.length > 0) return n[0];
                  }
                  return null == (e = this.userOnlinePopup)
                    ? void 0
                    : e.getPlayer(t);
                }),
                (r.getPlayerByUID = function (t) {
                  var e;
                  if (t == E.userID) return this.my_info;
                  if (this.playerViews.length > 0) {
                    var n = this.playerViews.filter(function (e) {
                      return e.getUID() == t;
                    });
                    if (n.length > 0) return n[0];
                  }
                  return null == (e = this.userOnlinePopup)
                    ? void 0
                    : e.getHiddenPlayerView();
                }),
                (r.getVisiblePlayer_canNotCompareUserName = function (t) {
                  if (t == E.displayName) return this.my_info;
                  if (this.playerViews.length > 0) {
                    var e = this.playerViews.filter(function (e) {
                      return e.getName() == t;
                    });
                    if (e.length > 0) return e[0];
                  }
                  return null;
                }),
                (r.getChipPooling = function () {
                  return this.betEntries[0].getChipPooling();
                }),
                (r.getVisiblePlayerByID = function (t) {
                  if (t == E.userID) return this.my_info;
                  if (this.playerViews.length > 0) {
                    var e = this.playerViews.filter(function (e) {
                      return e.getUID() == t;
                    });
                    if (e.length > 0) return e[0];
                  }
                  return null;
                }),
                (r.setRateLabels = function (t) {
                  for (var e = 0; e < t.length; e++) {
                    var n = t[e],
                      i = n.eid,
                      o = this.betEntries[i],
                      r = n.ert;
                    null == o || o.setRate(r);
                    var s = n.v;
                    null == o || o.setTotalBet(s);
                  }
                }),
                (r.setValueForCoinBtns = function (t) {
                  var e;
                  this._coinValues = [];
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    this._coinValues.push(i);
                  }
                  null == (e = this.chipPanel) ||
                    e.initChipPanel(this._coinValues);
                }),
                (r.betResponseByUid = function (t, e, n, i, o, r) {
                  var s;
                  void 0 === o && (o = 0), void 0 === r && (r = !0);
                  var a = this.getPlayerByUID(t);
                  if (a) {
                    var l,
                      u,
                      h = 0;
                    if (o > 0)
                      null == (l = this.betEntries[i]) || l.setTotalBet(o);
                    if (a.isThisPlayer())
                      null == (u = this.betEntries[i]) || u.setCurrentBet(n);
                    var c = {};
                    if (null != this.getVisiblePlayerByID(a.getUID())) {
                      for (var f, p = this._coinValues.length - 1; p >= 0; p--)
                        if (n >= this._coinValues[p]) {
                          h = p;
                          break;
                        }
                      c =
                        null == (f = this.betEntries[i])
                          ? void 0
                          : f.getChip(h);
                    } else {
                      var d;
                      c =
                        null == (d = this.betEntries[i])
                          ? void 0
                          : d.getRandomChip();
                    }
                    var _ = c.newCoin,
                      b = c.desPos;
                    if (null != _ && null != _) {
                      if (
                        (J.getInstance().playSfx(this.bet_sfx),
                        (_.name = "flying"),
                        (_.active = !0),
                        _.setPosition(a.node.position),
                        r)
                      )
                        y(_)
                          .to(0.7, { position: b }, { easing: "expoOut" })
                          .start();
                      else _.setPosition(b);
                      if (a.isVisible()) _.name = a.getUID() + "%" + i;
                      else {
                        var g = this._playerInfo.filter(function (t) {
                            return t.uid == v;
                          }),
                          v = "";
                        g.length > 0 && (v = g[0].uid), (_.name = v + "%" + i);
                      }
                      a.addShakeCoin(i, _), a.addBetValue(i, n);
                      var m = this._playerInfo.filter(function (e) {
                        return e.uid == t;
                      });
                      m.length > 0 && (m[0].gold = e),
                        null == (s = this.userOnlinePopup) || s.refresh(),
                        a.refresh();
                    }
                  }
                }),
                (r.getRandomPositionAtEntry = function (t) {
                  var e,
                    n,
                    i,
                    o,
                    r =
                      null == (e = this.betEntries[t])
                        ? void 0
                        : e.node.position.x,
                    s =
                      null == (n = this.betEntries[t])
                        ? void 0
                        : n.node.position.y;
                  return (
                    2 == t || 5 == t
                      ? ((i = T.getRandomInt(-40, 80)),
                        (o = T.getRandomInt(5, 30)))
                      : ((i = T.getRandomInt(-10, 50)),
                        (o = T.getRandomInt(20, 40))),
                    r && (r += i),
                    s && (s += o),
                    new b(r, s, 0)
                  );
                }),
                (r.betResponseHidden = function (t, e) {
                  var n, i;
                  void 0 === e && (e = !0);
                  var o =
                      null == (n = this.betEntries[t])
                        ? void 0
                        : n.getRandomChip(),
                    r = o.newCoin,
                    s = o.desPos;
                  null != r &&
                    null != r &&
                    (J.getInstance().playSfx(this.bet_sfx),
                    (r.name = "flying"),
                    (r.active = !0),
                    r.setPosition(
                      null == (i = this.btn_user) ? void 0 : i.node.position
                    ),
                    e
                      ? y(r)
                          .to(0.7, { position: s }, { easing: "expoOut" })
                          .call(function () {
                            r.name = "standing";
                          })
                          .start()
                      : r.setPosition(s));
                }),
                (r.updateBetInfo = function (t) {
                  var e = this;
                  t.bs.forEach(function (n) {
                    var i = n.eid,
                      o = n.b;
                    (e.my_bet[i] = o),
                      e.betResponseByUid(E.userID, t.m, o, i, 0);
                  });
                }),
                (r.otherBetResponse = function (t, e) {
                  for (
                    var n = [0, 0, 0, 0, 0, 0],
                      i = [0, 0, 0, 0, 0, 0],
                      o = !1,
                      r = 0;
                    r < e.length;
                    r++
                  ) {
                    var s = e[r],
                      a = s.uid,
                      l = (s.dn, s.b),
                      u = null == this.getVisiblePlayerByID(a);
                    o = u;
                    for (var h = 0; h < l.length; h++) {
                      var c = l[h],
                        f = c.eid,
                        p = c.v,
                        d = s.m;
                      u || a == E.userID
                        ? u
                          ? p > 0 && this.betResponseHidden(f)
                          : this.updateInfoByUid(a, d)
                        : p > 0 && this.betResponseByUid(a, d, p, f);
                    }
                  }
                  for (var _ = 0; _ < t.length; _++) {
                    var b,
                      g = t[_],
                      v = g.eid,
                      m = g.v;
                    if (((n[v] = this.betEntries[v].getTotalBet()), m > 0))
                      (i[v] = m),
                        null == (b = this.betEntries[v]) || b.setTotalBet(m);
                    else i[v] = n[v];
                    i[v] - n[v] > 0 && o && this.betResponseHidden(v);
                  }
                }),
                (r.updateInfoByUid = function (t, e) {
                  var n,
                    i = this._playerInfo.filter(function (e) {
                      return e.uid == t;
                    });
                  i.length > 0 && (i[0].gold = e),
                    null == (n = this.userOnlinePopup) || n.refresh();
                  var o = this.getPlayerByUID(t);
                  o && o.refresh();
                }),
                (r.update = function (t) {}),
                (r.showResult = function (t) {
                  var e, n, i, o;
                  (this.dice_result_node &&
                    (this.dice_result_node.node.active = !0),
                  null == (e = this.shake_anim) ||
                    e.setAnimation(0, "open2", !1),
                  t % 2 == 0)
                    ? (null == (n = this.betEntries[2]) || n.showGlow(),
                      this._danhSachSoiCau.push(!0))
                    : (null == (i = this.betEntries[5]) || i.showGlow(),
                      this._danhSachSoiCau.push(!1));
                  if (2 != t)
                    if (0 == t)
                      null == (o = this.betEntries[0]) || o.showGlow();
                    else if (1 == t) {
                      var r;
                      null == (r = this.betEntries[1]) || r.showGlow();
                    } else if (3 == t) {
                      var s;
                      null == (s = this.betEntries[3]) || s.showGlow();
                    } else if (4 == t) {
                      var a;
                      null == (a = this.betEntries[4]) || a.showGlow();
                    }
                  for (var l = 0, u = [], h = 0; h < 4; h++) u.push(h);
                  for (var c = 0; c < u.length; c++) {
                    var f = u[c],
                      p = 1;
                    l < t && ((p = 0), l++);
                    var d = "red";
                    0 == p && (d = "white");
                    var _ = d;
                    if (
                      (f > 0 && (_ += f + 1),
                      this.spr_result && this.sprFrame_result)
                    ) {
                      var b =
                        _.indexOf("white") >= 0
                          ? this.sprFrame_result[0]
                          : this.sprFrame_result[1];
                      b && (this.spr_result[c].spriteFrame = b);
                    }
                  }
                  this.updateBangSoiCau();
                }),
                (r.updateBangSoiCau = function () {
                  var t,
                    e = this;
                  this._danhSachSoiCau[this._danhSachSoiCau.length - 1];
                  this._danhSachSoiCau.length > 32 &&
                    (this._danhSachSoiCau = this._danhSachSoiCau.filter(
                      function (t, n) {
                        return n >= e._danhSachSoiCau.length - 32;
                      }
                    )),
                    this.last_result.forEach(function (t) {
                      t.spriteFrame = null;
                    });
                  var n = 0,
                    i = 0,
                    o = 0,
                    r = 0,
                    s = 0,
                    a = 0;
                  this._danhSachSoiCau.forEach(function (t) {
                    t ? n++ : i++,
                      2 != t &&
                        (0 == t
                          ? s++
                          : 1 == t
                          ? a++
                          : 3 == t
                          ? r++
                          : 4 == t && o++);
                  }),
                    this.lbl_chan_count &&
                      (this.lbl_chan_count.string = (n < 10 ? "0" : "") + n),
                    this.lbl_le_count &&
                      (this.lbl_le_count.string = (i < 10 ? "0" : "") + i),
                    this._danhSachSoiCau
                      .filter(function (t, n) {
                        return n >= e._danhSachSoiCau.length - 7;
                      })
                      .forEach(function (t, n) {
                        if (n < e.last_result.length) {
                          var i = t
                            ? e.sprFrame_cau_result[1]
                            : e.sprFrame_cau_result[0];
                          i && (e.last_result[n].spriteFrame = i);
                        }
                      }),
                    null == (t = this.soiCauPopup) ||
                      t.updateBangSoiCau(
                        n,
                        i,
                        s,
                        a,
                        o,
                        r,
                        this._danhSachSoiCau
                      );
                }),
                (r.playShakeAnim = function () {
                  var t,
                    e,
                    n = this;
                  null == (t = this.shake_anim) ||
                    t.setAnimation(0, "close2", !1),
                    null == (e = this.shake_anim) ||
                      e.setCompleteListener(function (t) {
                        var e, i, o;
                        null != t &&
                          "close2" == (t.animation ? t.animation.name : "") &&
                          (n.dice_result_node &&
                            (n.dice_result_node.node.active = !1),
                          null == (e = n.shake_anim) ||
                            e.setAnimation(0, "shake", !1),
                          null == (i = n.shake_anim) ||
                            i.addAnimation(0, "shake", !1),
                          null == (o = n.shake_anim) ||
                            o.addAnimation(0, "idle", !0),
                          n.shake_disk_sfx &&
                            J.getInstance().playAdditionalSfx(
                              n.shake_disk_sfx
                            ));
                      });
                }),
                (r.show = function () {
                  return t.prototype.show.call(this);
                }),
                e
              );
            })(L)).instance = null),
            (be.IS_START = !1),
            (be.IS_END = !0),
            (be.KEEP_MONEY = 5e4),
            (Tt = e((xt = be).prototype, "betEntries", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Rt = e(xt.prototype, "btn_test", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (At = e(xt.prototype, "shake_anim", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Gt = e(xt.prototype, "lbl_countdown", [j], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ot = e(xt.prototype, "lbl_userOnline", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Nt = e(xt.prototype, "playerViews", [$], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (zt = e(xt.prototype, "my_info", [tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ht = e(xt.prototype, "userOnlinePopup", [et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Mt = e(xt.prototype, "userChatPopup", [nt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ft = e(xt.prototype, "userInvitePopup", [it], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Lt = e(xt.prototype, "chipPanel", [ot], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Jt = e(xt.prototype, "btn_user", [rt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Xt = e(xt.prototype, "btn_invite", [st], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (qt = e(xt.prototype, "btn_invites", [at], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Kt = e(xt.prototype, "btn_chat", [lt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Wt = e(xt.prototype, "btn_soicau", [ut], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Qt = e(xt.prototype, "btn_exit", [ht], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Yt = e(xt.prototype, "btn_datlai", [ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (jt = e(xt.prototype, "btn_datx2", [ft], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Zt = e(xt.prototype, "btn_huongdan", [pt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($t = e(xt.prototype, "scrollViewInfoPopup", [dt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (te = e(xt.prototype, "spr_result", [_t], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (ee = e(xt.prototype, "sprFrame_result", [bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (ne = e(xt.prototype, "dice_result_node", [gt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ie = e(xt.prototype, "soiCauPopup", [vt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (oe = e(xt.prototype, "last_result", [mt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (re = e(xt.prototype, "sprFrame_cau_result", [yt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (se = e(xt.prototype, "lbl_chan_count", [wt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ae = e(xt.prototype, "lbl_le_count", [Pt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (le = e(xt.prototype, "settingPopup", [Ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ue = e(xt.prototype, "xocdia_bgm_music", [It], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (he = e(xt.prototype, "shake_disk_sfx", [Et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ce = e(xt.prototype, "session_start_sfx", [Bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (fe = e(xt.prototype, "bet_sfx", [St], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (pe = e(xt.prototype, "return_avatar_chip_sfx", [Ut], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (de = e(xt.prototype, "return_dealer_chip_sfx", [Dt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_e = e(xt.prototype, "session_finish_sfx", [Vt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (kt = xt))
          ) || kt)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XocDiaNetworkHandler.ts",
  [
    "cc",
    "./SocketManager.ts",
    "./XocDiaGameView.ts",
    "./PersistManager.ts",
    "./EventManager.ts",
    "./State.ts",
  ],
  function (n) {
    "use strict";
    var e, o, t, s, E, i, _, a, r, S, T;
    return {
      setters: [
        function (n) {
          (e = n.cclegacy), (o = n.log);
        },
        function (n) {
          (t = n.MessageResponse),
            (s = n.GLOBAL_MESSAGE),
            (E = n.socketManager),
            (i = n.MessageRequest);
        },
        function (n) {
          _ = n.XocDiaGameView;
        },
        function (n) {
          a = n.PersistManager;
        },
        function (n) {
          (r = n.eventManager), (S = n.EventKey);
        },
        function (n) {
          T = n.state;
        },
      ],
      execute: function () {
        var R;
        e._RF.push(
          {},
          "62706Se4SlPAKN+w31/ZmxO",
          "XocDiaNetworkHandler",
          void 0
        ),
          (function (n) {
            (n[(n.SELF_BET = 900)] = "SELF_BET"),
              (n[(n.OTHERS_BET = 901)] = "OTHERS_BET"),
              (n[(n.SET_HOST = 902)] = "SET_HOST"),
              (n[(n.HOST_SELL_ENTRY = 903)] = "HOST_SELL_ENTRY"),
              (n[(n.CANCEL_HOST = 910)] = "CANCEL_HOST"),
              (n[(n.GET_MAX_VALUE_BUYING_ENTRY = 911)] =
                "GET_MAX_VALUE_BUYING_ENTRY"),
              (n[(n.START_GAME = 904)] = "START_GAME"),
              (n[(n.USER_BUY_ENTRY = 905)] = "USER_BUY_ENTRY"),
              (n[(n.START_SELLING_ENTRY = 906)] = "START_SELLING_ENTRY"),
              (n[(n.FINISH_GAME = 907)] = "FINISH_GAME"),
              (n[(n.PAY_MONEY = 908)] = "PAY_MONEY"),
              (n[(n.REBET = 909)] = "REBET"),
              (n[(n.CAN_HET = 912)] = "CAN_HET"),
              (n[(n.SUBSCRIBE_INFO = 1950)] = "SUBSCRIBE_INFO"),
              (n[(n.UNSUBSCRIBE_INFO = 1951)] = "UNSUBSCRIBE_INFO");
          })(R || (R = {})),
          (n(
            "XocDiaNetworkHandler",
            (function () {
              function n() {}
              n.getInstance = function () {
                return (
                  this._instance || (this._instance = new n()), this._instance
                );
              };
              var e = n.prototype;
              return (
                (e.connected = function () {
                  var n = this,
                    e = _.getInstance();
                  e &&
                    (r.on(S.SocketJoinRoom, e, function (n) {
                      return e.onJoinRoomResponse(n);
                    }),
                    r.on(S.SocketLeaveRoom, e, function (n) {
                      return e.onLeaveRoomResponse(n);
                    }),
                    r.on(S.SocketMessage, e, function (e) {
                      return n.handleMessage(e);
                    }));
                }),
                (e.handleMessage = function (n) {
                  var e = _.getInstance();
                  if (e) {
                    var o = n[0],
                      E = n[1],
                      i = E.cmd;
                    switch (o) {
                      case t.Extension_Response:
                        if (
                          i == s.QUICK_PLAY ||
                          i == s.CREATE_TABLE ||
                          i == s.QUICK_PLAY_WITH_BET
                        )
                          if (null != E.ri && null != E.ri) {
                            var r = E.ri,
                              S = r.rid,
                              c = (r.b, r.sid),
                              d = (r.Mu, r.gid, "");
                            null != r.pwd && null != r.pwd && (d = r.pwd),
                              this.sendJoinRoom(S, c, d);
                          } else if (
                            (a.getInstance().hideLoading(),
                            null != E.mgs && null != E.mgs)
                          ) {
                            var l = E.mgs;
                            a.showNoti(l);
                          } else a.showNoti("Không tìm thấy phòng thích hợp!");
                        else if (i == s.USER_INFO)
                          if (null != E.lr && null != E.lr) {
                            var N = E.lr,
                              u = N.rid,
                              A = (N.gid, N.sid),
                              I = "";
                            null != N.pwd && null != N.pwd && (I = N.pwd),
                              this.sendJoinRoom(u, A, I);
                          } else if (null != E.lg && null != E.lg) {
                            var M = E.lg,
                              m = M.rid,
                              U = (M.gid, M.sid),
                              f = "";
                            null != M.pwd && null != M.pwd && (f = M.pwd),
                              this.sendJoinRoom(m, U, f);
                          } else
                            this.sendJoinRoom(
                              T.roomId,
                              T.roomServer,
                              T.roomPassword
                            );
                        else
                          i == s.INGAME_JOIN_TABLE_INFOS
                            ? e.onJoinTableInfo(E)
                            : i == s.INGAME_USER_LEAVE_AND_JOIN_TABLE
                            ? e.onUserJoinAndLeaveTable(E)
                            : i == R.SELF_BET
                            ? e.onSelfBet(E)
                            : i == R.OTHERS_BET
                            ? e.onOtherBet(E)
                            : i == R.START_GAME
                            ? e.onStartGame(E)
                            : i == R.FINISH_GAME
                            ? e.onFinishGame(E)
                            : i == R.PAY_MONEY
                            ? e.onPayMoney(E)
                            : i == s.ERROR_MESSAGE
                            ? e.onError(E)
                            : i == s.INGAME_USER_CHAT
                            ? e.onUserChat(E)
                            : i == s.UPDATE_HIDDEN_USER_COUNT
                            ? e.onUpdateHiddenUserCount(E)
                            : i == s.UPDATE_HIDDEN_USER_ONLINE
                            ? e.onUpdateHiddenUserOnline(E)
                            : i == s.INGAME_UPDATE_MONEY
                            ? e.onUpdateUserMoney(E)
                            : i == s.INGAME_JACKPOT
                            ? (e.onUpdateJackpot(E), e.onJackpot(E))
                            : i == s.INGAME_GET_JACKPOTS
                            ? e.onUpdateJackpot(E)
                            : 303 == i
                            ? e.onGetUserToBeInvited(E)
                            : i == s.REFRESH_MONEY
                            ? e.onRefreshMoney(E)
                            : i == s.MESSAGE_INGAME && e.onNotice(E);
                    }
                  }
                }),
                (e.sendJoinRoom = function (n, e, t) {
                  o("joinRoom:", n);
                  var s = [i.JoinRoom_Type, "Simms", n, t];
                  E.send(s);
                }),
                (e.sendLeaveRoom = function (n) {
                  void 0 === n && (n = -1), -1 == n && (n = T.roomId);
                  var e = [i.LeaveRoom_Type, "Simms", n];
                  E.send(e);
                }),
                (e.sendRefreshMoney = function () {
                  E.sendRefreshMoney();
                }),
                (e.sendBet = function (n, e) {
                  var o = {};
                  (o.cmd = R.SELF_BET), (o.eid = n), (o.v = e);
                  var t = [i.RoomPlugin_Type, "Simms", T.roomId, o];
                  E.send(t);
                }),
                n
              );
            })()
          )._instance = null),
          e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/XocDiaSoiCauPopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SettingPopup.ts",
    "./ScaleCmp.ts",
  ],
  function (t) {
    "use strict";
    var s, i, l, e, n, a, r, o, u, p, c, b;
    return {
      setters: [
        function (t) {
          (s = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (l = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (n = t.cclegacy),
            (a = t._decorator),
            (r = t.Label),
            (o = t.Sprite),
            (u = t.SpriteFrame),
            (p = t.Vec3);
        },
        function (t) {
          c = t.SettingPopup;
        },
        function (t) {
          b = t.default;
        },
      ],
      execute: function () {
        var h, _, g, f, m, S, d, v, F, y, w;
        n._RF.push({}, "e5ca52IlB9KspGBbP8/qmiu", "XocDiaSoiCauPopup", void 0);
        var C = a.ccclass,
          P = a.property;
        t(
          "XocDiaSoiCauPopup",
          ((h = C("XocDiaSoiCauPopup")),
          (_ = P([r])),
          (g = P([o])),
          (f = P(u)),
          (m = P(u)),
          h(
            ((v = s(
              (d = (function (t) {
                function s() {
                  for (
                    var s, i = arguments.length, n = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    n[a] = arguments[a];
                  return (
                    (s = t.call.apply(t, [this].concat(n)) || this),
                    l(s, "lbl_stats", v, e(s)),
                    l(s, "cau_items", F, e(s)),
                    l(s, "sprFrame_chan", y, e(s)),
                    l(s, "sprFrame_le", w, e(s)),
                    s
                  );
                }
                i(s, t);
                var n = s.prototype;
                return (
                  (n.updateBangSoiCau = function (t, s, i, l, e, n, a) {
                    var r = this;
                    this.lbl_stats[0] &&
                      (this.lbl_stats[0].string = (t < 10 ? "0" : "") + t),
                      this.lbl_stats[1] &&
                        (this.lbl_stats[1].string = (s < 10 ? "0" : "") + s),
                      this.lbl_stats[2] &&
                        (this.lbl_stats[2].string =
                          (i < 10 ? "0" : "") + i.toString()),
                      this.lbl_stats[3] &&
                        (this.lbl_stats[3].string =
                          (l < 10 ? "0" : "") + l.toString()),
                      this.lbl_stats[4] &&
                        (this.lbl_stats[4].string =
                          (e < 10 ? "0" : "") + e.toString()),
                      this.lbl_stats[5] &&
                        (this.lbl_stats[5].string =
                          (n < 10 ? "0" : "") + n.toString());
                    var o = null != this.lbl_stats[2] ? 0.7 : 1;
                    this.cau_items.forEach(function (t, s) {
                      var i = t.getComponent(b);
                      s < a.length
                        ? (s == a.length - 1
                            ? (i && (i.enabled = !0), null == i || i.run(o))
                            : (null == i || i.stop(new p(o, o, o)),
                              i && (i.enabled = !1)),
                          (t.enabled = !0),
                          (t.spriteFrame = a[s]
                            ? r.sprFrame_chan
                            : r.sprFrame_le))
                        : ((t.enabled = !1),
                          null == i || i.stop(new p(o, o, o)),
                          i && (i.enabled = !1));
                    });
                  }),
                  (n.updateBangSoiCau2 = function (t) {
                    var s = this,
                      i = 0,
                      l = 0,
                      e = 0,
                      n = 0,
                      a = 0,
                      r = 0;
                    t.forEach(function (t) {
                      t % 2 != 0 ? l++ : i++,
                        2 != t &&
                          (0 == t
                            ? a++
                            : 1 == t
                            ? r++
                            : 3 == t
                            ? n++
                            : 4 == t && e++);
                    }),
                      this.lbl_stats[0] &&
                        (this.lbl_stats[0].string = (i < 10 ? "0" : "") + i),
                      this.lbl_stats[1] &&
                        (this.lbl_stats[1].string = (l < 10 ? "0" : "") + l),
                      this.lbl_stats[2] &&
                        (this.lbl_stats[2].string =
                          (a < 10 ? "0" : "") + a.toString()),
                      this.lbl_stats[3] &&
                        (this.lbl_stats[3].string =
                          (r < 10 ? "0" : "") + r.toString()),
                      this.lbl_stats[4] &&
                        (this.lbl_stats[4].string =
                          (e < 10 ? "0" : "") + e.toString()),
                      this.lbl_stats[5] &&
                        (this.lbl_stats[5].string =
                          (n < 10 ? "0" : "") + n.toString());
                    var o = null != this.lbl_stats[2] ? 0.7 : 1;
                    this.cau_items.forEach(function (i, l) {
                      var e = i.getComponent(b);
                      l < t.length && t[l]
                        ? (l == t.length - 1
                            ? (e && (e.enabled = !0), null == e || e.run(o))
                            : (null == e || e.stop(new p(o, o, o)),
                              e && (e.enabled = !1)),
                          (i.enabled = !0),
                          (i.spriteFrame =
                            t[l] % 2 == 0 ? s.sprFrame_chan : s.sprFrame_le))
                        : ((i.enabled = !1),
                          null == e || e.stop(new p(o, o, o)),
                          e && (e.enabled = !1));
                    });
                  }),
                  s
                );
              })(c)).prototype,
              "lbl_stats",
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
            (F = s(d.prototype, "cau_items", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (y = s(d.prototype, "sprFrame_chan", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = s(d.prototype, "sprFrame_le", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = d))
          ) || S)
        );
        n._RF.pop();
      },
    };
  }
);

(function (r) {
  r("virtual:///prerequisite-imports/xocdia", "chunks:///_virtual/xocdia");
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
