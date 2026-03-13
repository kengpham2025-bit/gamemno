System.register(
  "chunks:///_virtual/baucua",
  [
    "./BauCuaFullScreenGameView.ts",
    "./BauCuaJackpotHistoryItemView.ts",
    "./BauCuaJackpotHistoryView.ts",
    "./BauCuaJackpotRankItemView.ts",
    "./BauCuaNetworkHandler.ts",
  ],
  function () {
    "use strict";
    return { setters: [null, null, null, null, null], execute: function () {} };
  }
);

System.register(
  "chunks:///_virtual/BauCuaFullScreenGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BauCuaJackpotHistoryView.ts",
    "./JackpotItemView.ts",
    "./State.ts",
    "./BauCuaNetworkHandler.ts",
    "./EventManager.ts",
    "./CommonInfoPopup.ts",
    "./PersistManager.ts",
    "./BaseBetGameView.ts",
    "./SoundManager.ts",
    "./BetEntry.ts",
    "./BetGameSettingPopup.ts",
    "./ChipPanel.ts",
    "./PlayerView.ts",
    "./SoiCauPopup.ts",
    "./UserOnlinePopup.ts",
    "./UserChatPopup.ts",
    "./UserInvitePopup.ts",
    "./BetGameData.ts",
    "./NoHuView.ts",
    "./SocketManager.ts",
  ],
  function (e) {
    "use strict";
    var t,
      n,
      i,
      a,
      r,
      o,
      s,
      l,
      u,
      c,
      h,
      p,
      f,
      d,
      _,
      g,
      b,
      m,
      y,
      v,
      w,
      C,
      B,
      P,
      I,
      V,
      S,
      k,
      E,
      U,
      x,
      z,
      D,
      R,
      A,
      H,
      N,
      T,
      O,
      G,
      F,
      M,
      J,
      L,
      j;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (a = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (o = e._decorator),
            (s = e.sp),
            (l = e.ProgressBar),
            (u = e.Label),
            (c = e.Button),
            (h = e.UITransform),
            (p = e.Sprite),
            (f = e.SpriteFrame),
            (d = e.AudioClip),
            (_ = e.Vec3),
            (g = e.game),
            (b = e.Game),
            (m = e.log),
            (y = e.Tween),
            (v = e.tween),
            (w = e.systemEvent),
            (C = e.assetManager),
            (B = e.Prefab),
            (P = e.sys);
        },
        function (e) {
          I = e.default;
        },
        function (e) {
          V = e.JackpotItemView;
        },
        function (e) {
          S = e.state;
        },
        function (e) {
          k = e.BauCuaNetworkHandler;
        },
        function (e) {
          E = e.EventKey;
        },
        function (e) {
          U = e.CommonInfoPopup;
        },
        function (e) {
          x = e.PersistManager;
        },
        function (e) {
          z = e.BaseBetGameView;
        },
        function (e) {
          D = e.SoundManager;
        },
        function (e) {
          R = e.BetEntry;
        },
        function (e) {
          A = e.BetGameSettingPopup;
        },
        function (e) {
          H = e.ChipPanel;
        },
        function (e) {
          (N = e.PlayerView), (T = e.PlayerInfo);
        },
        function (e) {
          O = e.SoiCauPopup;
        },
        function (e) {
          G = e.UserOnlinePopup;
        },
        function (e) {
          F = e.UserChatPopup;
        },
        function (e) {
          M = e.UserInvitePopup;
        },
        function (e) {
          J = e.UserBetData;
        },
        function (e) {
          L = e.default;
        },
        function (e) {
          j = e.socketManager;
        },
      ],
      execute: function () {
        var K,
          Q,
          X,
          q,
          W,
          Y,
          Z,
          $,
          ee,
          te,
          ne,
          ie,
          ae,
          re,
          oe,
          se,
          le,
          ue,
          ce,
          he,
          pe,
          fe,
          de,
          _e,
          ge,
          be,
          me,
          ye,
          ve,
          we,
          Ce,
          Be,
          Pe,
          Ie,
          Ve,
          Se,
          ke,
          Ee,
          Ue,
          xe,
          ze,
          De,
          Re,
          Ae,
          He,
          Ne,
          Te,
          Oe,
          Ge,
          Fe,
          Me,
          Je,
          Le,
          je,
          Ke,
          Qe,
          Xe,
          qe,
          We,
          Ye,
          Ze,
          $e,
          et,
          tt,
          nt,
          it,
          at,
          rt,
          ot,
          st,
          lt,
          ut,
          ct,
          ht,
          pt,
          ft,
          dt,
          _t,
          gt,
          bt,
          mt,
          yt,
          vt,
          wt,
          Ct,
          Bt,
          Pt,
          It,
          Vt,
          St;
        r._RF.push(
          {},
          "a9bfde1oi9HhKJNk8G8iANh",
          "BauCuaFullScreenGameView",
          void 0
        );
        var kt = o.ccclass,
          Et = o.property;
        e(
          "BauCuaFullScreenGameView",
          ((K = kt("BauCuaFullScreenGameView")),
          (Q = Et([R])),
          (X = Et(s.Skeleton)),
          (q = Et(l)),
          (W = Et(u)),
          (Y = Et(u)),
          (Z = Et([N])),
          ($ = Et(N)),
          (ee = Et(G)),
          (te = Et(F)),
          (ne = Et(M)),
          (ie = Et(H)),
          (ae = Et(c)),
          (re = Et(c)),
          (oe = Et([c])),
          (se = Et(c)),
          (le = Et(c)),
          (ue = Et(c)),
          (ce = Et(c)),
          (he = Et(c)),
          (pe = Et(c)),
          (fe = Et(h)),
          (de = Et(p)),
          (_e = Et(p)),
          (ge = Et(p)),
          (be = Et(p)),
          (me = Et(p)),
          (ye = Et(p)),
          (ve = Et(O)),
          (we = Et(A)),
          (Ce = Et(V)),
          (Be = Et(I)),
          (Pe = Et(L)),
          (Ie = Et([f])),
          (Ve = Et([f])),
          (Se = Et(d)),
          (ke = Et(d)),
          (Ee = Et(d)),
          (Ue = Et(d)),
          (xe = Et(d)),
          (ze = Et(d)),
          (De = Et(d)),
          (Re = Et(c)),
          (Ae = Et(U)),
          K(
            (((St = (function (e) {
              function t() {
                for (
                  var t, n = arguments.length, r = new Array(n), o = 0;
                  o < n;
                  o++
                )
                  r[o] = arguments[o];
                return (
                  (t = e.call.apply(e, [this].concat(r)) || this),
                  i(t, "bauCuaBetEntries", Te, a(t)),
                  i(t, "shake_anim", Oe, a(t)),
                  i(t, "proBar_countdown", Ge, a(t)),
                  i(t, "lbl_countdown", Fe, a(t)),
                  i(t, "lbl_userOnline", Me, a(t)),
                  i(t, "playerViews", Je, a(t)),
                  i(t, "my_info", Le, a(t)),
                  i(t, "userOnlinePopup", je, a(t)),
                  i(t, "userChatPopup", Ke, a(t)),
                  i(t, "userInvitePopup", Qe, a(t)),
                  i(t, "chipPanel", Xe, a(t)),
                  i(t, "btn_user", qe, a(t)),
                  i(t, "btn_invite", We, a(t)),
                  i(t, "btn_invites", Ye, a(t)),
                  i(t, "btn_chat", Ze, a(t)),
                  i(t, "btn_soicau", $e, a(t)),
                  i(t, "btn_jackpot_history", et, a(t)),
                  i(t, "btn_exit", tt, a(t)),
                  i(t, "btn_datlai", nt, a(t)),
                  i(t, "btn_datx2", it, a(t)),
                  i(t, "dice_result_node", at, a(t)),
                  i(t, "dice1", rt, a(t)),
                  i(t, "dice2", ot, a(t)),
                  i(t, "dice3", st, a(t)),
                  i(t, "last_dice1", lt, a(t)),
                  i(t, "last_dice2", ut, a(t)),
                  i(t, "last_dice3", ct, a(t)),
                  i(t, "soiCauPopup", ht, a(t)),
                  i(t, "settingPopup", pt, a(t)),
                  i(t, "jackpotItemView", ft, a(t)),
                  i(t, "bauCuaJackpotHistoryView", dt, a(t)),
                  i(t, "noHuView", _t, a(t)),
                  i(t, "dice_frames", gt, a(t)),
                  i(t, "last_dice_frames", bt, a(t)),
                  i(t, "baucua_bgm_music", mt, a(t)),
                  i(t, "shake_disk_sfx", yt, a(t)),
                  i(t, "session_start_sfx", vt, a(t)),
                  i(t, "bet_sfx", wt, a(t)),
                  i(t, "return_avatar_chip_sfx", Ct, a(t)),
                  i(t, "return_dealer_chip_sfx", Bt, a(t)),
                  i(t, "session_finish_sfx", Pt, a(t)),
                  i(t, "btn_huongdan", It, a(t)),
                  i(t, "commonInfoPopup", Vt, a(t)),
                  (t._coinValues = []),
                  (t._playerInfo = []),
                  (t.hiddenUserBet = {}),
                  (t.userBet = []),
                  (t.dice_result_origin_pos = _.ZERO),
                  (t._danhSachSoiCau = []),
                  (t.current_count_down = 0),
                  (t.isCanUpdateUser = !1),
                  (t._remainingHiddenUserCount = 0),
                  (t.my_bet = [0, 0, 0, 0, 0, 0]),
                  (t.forceQuit = !1),
                  (t.forceKick = !1),
                  (t.isBigTable = !1),
                  t
                );
              }
              n(t, e),
                (t.getInstance = function () {
                  return t.instance;
                });
              var r = t.prototype;
              return (
                (r.onLoad = function () {
                  var n,
                    i,
                    a,
                    r,
                    o,
                    s,
                    l,
                    u,
                    c,
                    h,
                    p,
                    f = this;
                  e.prototype.onLoad.call(this),
                    g.on(b.EVENT_SHOW, function () {
                      f.handleBackGameFromInterupt(0);
                    }),
                    (this.dice_result_origin_pos = new _(
                      this.dice_result_node.node.position
                    )),
                    (t.instance = this),
                    this.bauCuaBetEntries.forEach(function (e) {
                      return e.setGameView(f);
                    }),
                    this.bauCuaBetEntries.forEach(function (e) {
                      var t;
                      return null == (t = e.getChipPooling())
                        ? void 0
                        : t.pool();
                    }),
                    null == (n = this.btn_user) ||
                      n.node.on("click", function () {
                        var e;
                        null == (e = f.userOnlinePopup) || e.show();
                      }),
                    null == (i = this.btn_huongdan) ||
                      i.node.on("click", function () {
                        var e;
                        null == (e = f.commonInfoPopup) || e.show();
                      }),
                    null == (a = this.btn_invites) ||
                      a.forEach(function (e) {
                        e.node.on("click", function () {
                          var e;
                          null == (e = f.userInvitePopup) ||
                            e.fetchUserInvitations();
                        });
                      }),
                    null == (r = this.btn_chat) ||
                      r.node.on("click", function () {
                        var e;
                        null == (e = f.userChatPopup) || e.show();
                      }),
                    null == (o = this.btn_soicau) ||
                      o.node.on("click", function () {
                        var e;
                        null == (e = f.soiCauPopup) || e.show();
                      }),
                    null == (s = this.btn_jackpot_history) ||
                      s.node.on("click", function () {
                        var e;
                        null == (e = f.bauCuaJackpotHistoryView) ||
                          e.fetchHistory();
                      }),
                    null == (l = this.btn_exit) ||
                      l.node.on("click", function () {
                        var e;
                        null == (e = f.settingPopup) || e.show();
                      }),
                    null == (u = this.btn_datlai) ||
                      u.node.on("click", function () {
                        if (f.isStart) {
                          (f.btn_datx2.node.active = !1),
                            (f.btn_datlai.node.active = !1);
                          var e = [0, 0, 0, 0, 0, 0];
                          f.my_bet.forEach(function (t, n) {
                            e[n] = t;
                          }),
                            (f.my_bet = [0, 0, 0, 0, 0, 0]),
                            e.forEach(function (e, t) {
                              f.bet(t, e);
                            });
                        } else x.showNoti("Ván chơi chưa bắt đầu!");
                      }),
                    null == (c = this.btn_datx2) ||
                      c.node.on("click", function () {
                        if (f.isStart) {
                          (f.btn_datx2.node.active = !1),
                            (f.btn_datlai.node.active = !1);
                          var e = [0, 0, 0, 0, 0, 0];
                          f.my_bet.forEach(function (t, n) {
                            e[n] = t;
                          }),
                            (f.my_bet = [0, 0, 0, 0, 0, 0]),
                            e.forEach(function (e, t) {
                              f.bet(t, 2 * e);
                            });
                        } else x.showNoti("Ván chơi chưa bắt đầu!");
                      }),
                    null == (h = this.settingPopup) || h.setGameView(this),
                    null == (p = this.settingPopup) ||
                      p.setCallbackExitRoom(function () {
                        k.getInstance().sendLeaveRoom(),
                          x.getInstance().showLoading();
                      }),
                    this.noHuView.setGameView(this),
                    k.getInstance().connect();
                }),
                (r.getChipPooling = function () {
                  return this.bauCuaBetEntries[0].getChipPooling();
                }),
                (r.onClickBetEntry = function (e) {
                  var t,
                    n =
                      null == (t = this.chipPanel)
                        ? void 0
                        : t.getSelectedBetValue();
                  this.bet(e, n);
                }),
                (r.bet = function (e, t) {
                  this.isStart
                    ? k.getInstance().sendBet(e, t)
                    : x.showNoti("Ván chơi chưa bắt đầu!");
                }),
                (r.resetUI = function () {
                  var e, t, n, i, a;
                  null == (e = this.userChatPopup) || e.close(),
                    null == (t = this.settingPopup) || t.close(),
                    null == (n = this.soiCauPopup) || n.close(),
                    null == (i = this.userOnlinePopup) || i.close(),
                    null == (a = this.userInvitePopup) || a.close(),
                    this.playerViews.forEach(function (e) {
                      return e.setUserInfo(null);
                    }),
                    D.getInstance().stopSfx();
                }),
                (r.initUI = function () {
                  var e = this;
                  this.scheduleOnce(function () {
                    e.playBgmMusic();
                  }, 1),
                    this.bauCuaBetEntries.forEach(function (e) {
                      return e.resetUI();
                    }),
                    (this.forceKick = !1);
                }),
                (r.playBgmMusic = function () {
                  D.getInstance().playBgm(this.baucua_bgm_music, !0, !0);
                }),
                (r.handleRefreshMoney = function (e) {}),
                (r.handleBackGameFromInterupt = function (e) {
                  m("handleBackGameFromInterupt::baucua", e),
                    S.isRefreshingInBackground ||
                      ((this.isRefreshingInBackground = !0),
                      j.refreshInBackground());
                }),
                (r.onJoinRoomResponse = function (e) {
                  if ((m("handleJoinRoomResponse:", JSON.stringify(e)), e[1]))
                    S.roomId != e[3] && m("chuyen phong!"), (S.roomId = e[3]);
                  else {
                    this.leaveRoom();
                    var t;
                    (t = e[4]), x.showNoti(t);
                  }
                  x.getInstance().hideLoading();
                }),
                (r.onLeaveRoomResponse = function (e) {
                  if (
                    (m("handleLeaveRoomResponse", e),
                    x.getInstance().hideLoading(),
                    null != e)
                  ) {
                    var t,
                      n = e[5];
                    if (
                      (3 == e[4] ? (this.forceKick = !0) : this.leaveRoom(),
                      "" != n)
                    )
                      null == (t = x.getInstance()) ||
                        t.showCommonPopup(n, function () {
                          var e;
                          null == (e = x.getInstance()) || e.hideCommonPopup();
                        });
                  }
                }),
                (r.showChat = function (e, t) {
                  var n;
                  if (
                    null == (n = this.settingPopup) ||
                    !n.isHideChat() ||
                    e == S.userID
                  ) {
                    var i = this.getPlayerByUID(e);
                    null != i &&
                      (t.indexOf("e_") >= 0 && (t = t.replace("e_", "emo_")),
                      i.showBubbleChat(t));
                  }
                }),
                (r.updateJackpotLabel = function (e) {
                  this.jackpotItemView.updateAmount(e);
                }),
                (r.noHu = function (e) {
                  for (var t = this, n = !1, i = 0; i < e.length; i++) {
                    var a = e[i],
                      r = a.uid,
                      o = this.getPlayerByUID(r);
                    null != o && null != o && (o.winning = a.mX),
                      r == S.userID &&
                        (function () {
                          n = !0;
                          var e = a.mX;
                          y.stopAllByTarget(t.noHuView.node),
                            v(t.noHuView.node)
                              .call(function () {
                                t.noHuView.show(e);
                              })
                              .delay(4)
                              .call(function () {
                                t.noHuView.activeClick();
                              })
                              .start();
                        })();
                  }
                  n ||
                    D.getInstance().playAdditionalSfx(
                      this.noHuView.getNohu_BGM()
                    );
                  var l = this.jackpotItemView.node.getComponent(s.Skeleton);
                  null != l && l.setAnimation(0, "animation2", !0);
                }),
                (r.updateRemainingHiddenUserCount = function (e) {
                  var t;
                  (this._remainingHiddenUserCount = e),
                    (this.lbl_userOnline.string = (
                      (null == (t = this.userOnlinePopup)
                        ? void 0
                        : t.getUserCount()) + this._remainingHiddenUserCount
                    ).toString());
                }),
                (r.hasBetCache = function () {
                  return (
                    this.my_bet.filter(function (e) {
                      return e > 0;
                    }).length > 0
                  );
                }),
                (r.onJoinTableInfo = function (e) {
                  e.b;
                  var t = e.gS,
                    n = e.rmT;
                  n /= 1e3;
                  e.aid;
                  var i = e.Mu;
                  this.isBigTable = !(i <= 9);
                  var a = e.ps;
                  (this.userBet = []), (this.my_bet = [0, 0, 0, 0, 0, 0]);
                  var r = !1;
                  4 == t || 5 == t || 6 == t
                    ? (this.continue(n), (r = !0))
                    : this.wait();
                  for (var o = 0; o < a.length; o++) {
                    var s = a[o],
                      l = s.m,
                      u = s.dn,
                      c = s.uid,
                      h = s.pid,
                      p = s.As,
                      f = s.a,
                      d = 0;
                    s.id && (d = s.id),
                      "BC_Banker" != u &&
                        this.addPlayer(
                          u,
                          c,
                          !1,
                          l,
                          0,
                          0,
                          0,
                          !1,
                          h,
                          !0,
                          p,
                          f,
                          d
                        );
                  }
                  (this.isCanUpdateUser = !0), this.updateViewPostions(!0);
                  var _ = e.ruc;
                  this.updateRemainingHiddenUserCount(_);
                  var g = e.coins;
                  this.setValueForCoinBtns(g);
                  var b = e.htr;
                  this.setBangSoiCau(b),
                    r && this.setCurrentBetState(a),
                    (this.isEnd = !this.hasBetCache()),
                    (this.btn_datx2.node.active = !1),
                    (this.btn_datlai.node.active = !1);
                }),
                (r.onUserJoinAndLeaveTable = function (e) {
                  var t = e.t;
                  if (1 == t) {
                    var n = e.p,
                      i = (n.a, n.g, n.m),
                      a = n.dn,
                      r = n.uid,
                      o = !1,
                      s = n.pid;
                    null != n.r && null != n.r && (o = n.r);
                    var l = n.As,
                      u = n.a,
                      c = 0;
                    null != n.id && null != n.id && (c = n.id),
                      this.addPlayer(a, r, !1, i, 0, 0, 0, o, s, !0, l, u, c);
                  }
                  if (2 == t) {
                    var h = e.p.uid;
                    this.removePlayer(h);
                  }
                  this.updateViewPostions(),
                    this.updateRemainingHiddenUserCount(
                      this._remainingHiddenUserCount
                    );
                }),
                (r.onSelfBet = function (e) {
                  var t = e.eid,
                    n = e.b,
                    i = e.m,
                    a = e.teb;
                  this.btn_datlai.node.active &&
                    this.btn_datx2.node.active &&
                    ((this.btn_datx2.node.active = !1),
                    (this.btn_datlai.node.active = !1),
                    (this.my_bet = [0, 0, 0, 0, 0, 0])),
                    (this.my_bet[t] += n),
                    this.betResponse(S.displayName, i, n, t, a),
                    (this.isEnd = !1);
                }),
                (r.onOtherBet = function (e) {
                  var t = e.ets,
                    n = e.ps;
                  this.otherBetResponse(t, n);
                }),
                (r.onStartGane = function (e) {
                  var t;
                  null != e.B && null != e.B && (t = e.B), this.startGame(t);
                }),
                (r.onFinish = function (e) {
                  this.isCanUpdateUser = !1;
                  var t = e.rt,
                    n = t.d1,
                    i = t.d2,
                    a = t.d3,
                    r = [];
                  if (
                    (r.push(n),
                    r.push(i),
                    r.push(a),
                    null != t.d4 && null != t.d4)
                  ) {
                    var o = t.d4;
                    r.push(o);
                  }
                  var s = e.ps,
                    l = e.ew;
                  this.finishThisGame(s, l, r);
                }),
                (r.onError = function (e) {
                  var t;
                  null != e.mgs && null != e.mgs && (t = e.mgs),
                    t.length > 0 &&
                      "Cược không hợp lệ" != t &&
                      x.showNoti(t, this.root, 0);
                }),
                (r.onUserChat = function (e) {
                  var t = e.uid,
                    n = e.mgs;
                  this.showChat(t, n);
                }),
                (r.onUpdateHiddenUserCount = function (e) {
                  var t = e.ruc;
                  this.updateRemainingHiddenUserCount(t);
                }),
                (r.onUpdateHiddenUserOnline = function (e) {
                  this.userOnlinePopup.resetPlayerHidden();
                  for (var t = e.ps, n = 0; n < t.length; n++) {
                    var i = t[n],
                      a = i.m,
                      r = i.dn,
                      o = i.uid,
                      s = i.a;
                    if ((i.id && i.id, "BC_Banker" != r)) {
                      var l = new T();
                      (l.displayName = r),
                        (l.gold = a),
                        (l.avatarURL = s),
                        (l.uid = o),
                        this.userOnlinePopup.addPlayerHidden(l);
                    }
                  }
                  this.userOnlinePopup.refreshHidden();
                }),
                (r.onUpdateJackpot = function (e) {
                  var t = e.ba;
                  this.updateJackpotLabel(t);
                }),
                (r.onJackpot = function (e) {
                  var t = e.wns;
                  this.noHu(t);
                }),
                (r.onGetUserToBeInvited = function (e) {
                  var t = e.us;
                  this.userInvitePopup.showPlayersToBeInvited(t);
                }),
                (r.onUpdateUserMoney = function (e) {
                  var t = this;
                  e.ps.forEach(function (e) {
                    var n = e.uid,
                      i = e.m,
                      a = t.getPlayerByUID(n);
                    a && a.setMoney(i);
                  });
                }),
                (r.onRefreshMoney = function (e) {
                  var t = e.As,
                    n = (t.vip, t.gold);
                  t.chip, t.safe;
                  (S.gold = n), w.emit(E.RefreshMoney, S.gold);
                }),
                (r.onUserInfo = function (e) {
                  if (null != e.lr && null != e.lr) {
                    var t = e.lr,
                      n = t.rid,
                      i = (t.gid, t.sid),
                      a = "";
                    null != t.pwd && null != t.pwd && (a = t.pwd),
                      (S.roomId = n),
                      (S.roomPassword = a),
                      (S.roomServer = i),
                      k.getInstance().sendJoinRoom(n, i, a);
                  } else if (null != e.lg && null != e.lg) {
                    var r = e.lg,
                      o = r.rid,
                      s = (r.gid, r.sid),
                      l = "";
                    null != r.pwd && null != r.pwd && (l = r.pwd),
                      (S.roomId = o),
                      (S.roomPassword = l),
                      (S.roomServer = s),
                      k.getInstance().sendJoinRoom(o, s, l);
                  } else
                    k.getInstance().sendJoinRoom(
                      S.roomId,
                      S.roomServer,
                      S.roomPassword
                    );
                }),
                (r.onNotice = function (e) {
                  var t,
                    n = e.message;
                  3 == e.t &&
                    (x.getInstance().showCommonPopup(n, function () {
                      x.getInstance().hideCommonPopup();
                    }),
                    this.isEnd
                      ? null == (t = this.settingPopup) || t.exitRoom()
                      : (this.forceQuit = !0));
                }),
                (r.setBangSoiCau = function (e) {
                  this._danhSachSoiCau = [];
                  for (var t = 0; t < e.length; t++) {
                    var n = e[t],
                      i = n.d1,
                      a = n.d2,
                      r = n.d3,
                      o = [];
                    o.push(i),
                      o.push(a),
                      o.push(r),
                      this._danhSachSoiCau.push(o);
                  }
                  this.updateBangSoiCau();
                }),
                (r.addPlayer = function (
                  e,
                  t,
                  n,
                  i,
                  a,
                  r,
                  o,
                  s,
                  l,
                  u,
                  c,
                  h,
                  p
                ) {
                  var f = new T();
                  (f.displayName = e),
                    (f.gold = i),
                    (f.avatarURL = h),
                    (f.uid = t),
                    this._playerInfo.push(f),
                    (this._playerInfo = this._playerInfo.sort(function (e, t) {
                      return e.gold < t.gold ? 1 : -1;
                    }));
                }),
                (r.removePlayer = function (e) {
                  (this._playerInfo = this._playerInfo.filter(function (t) {
                    return t.uid != e;
                  })),
                    (this._playerInfo = this._playerInfo.sort(function (e, t) {
                      return e.gold < t.gold ? 1 : -1;
                    })),
                    S.userID != e && this.removeVisiblePlayers();
                }),
                (r.updateViewPostions = function (e) {
                  var t = this;
                  if ((void 0 === e && (e = !0), this.isCanUpdateUser)) {
                    var n = this.getNewUserSightIndex();
                    this.userOnlinePopup.reset();
                    var i = 0;
                    this._playerInfo.forEach(function (a, r) {
                      if (a.displayName == S.displayName)
                        t.my_info.setUserInfo(a);
                      else if (i < t.playerViews.length) {
                        if (e)
                          if (
                            0 ==
                            t.playerViews.filter(function (e) {
                              return e.getUID() == a.uid;
                            }).length
                          ) {
                            var o = n.pop();
                            null == t.playerViews[o] || null == t.playerViews[o]
                              ? m("updatedInsightIndex at:", o, " failed")
                              : t.playerViews[o].updateNewUser(a);
                          } else {
                            var s = t.playerViews.find(function (e) {
                              return e.getUID() == a.uid;
                            });
                            null == s || s.updateNewUser(a, !1);
                          }
                        else t.playerViews[i].setUserInfo(a);
                        i++;
                      } else t.userOnlinePopup.addPlayer(a);
                    }),
                      this.userOnlinePopup.refresh();
                  }
                }),
                (r.removeVisiblePlayers = function () {
                  var e = this;
                  this.isCanUpdateUser &&
                    this.playerViews.forEach(function (t, n) {
                      0 ==
                        e._playerInfo.filter(function (e) {
                          return e.uid == t.getUID();
                        }).length &&
                        !t.isEmpty() &&
                        t.hideUserInfo();
                    });
                }),
                (r.getNewUserSightIndex = function () {
                  var e = [],
                    t = this._playerInfo.filter(function (e, t) {
                      return t < 8;
                    });
                  return (
                    this.playerViews.forEach(function (n, i) {
                      0 ==
                        t.filter(function (e) {
                          return e.uid == n.getUID();
                        }).length && e.push(i);
                    }),
                    e
                  );
                }),
                (r.startGame = function (e) {
                  var t,
                    n = this;
                  (this.userBet = []),
                    (this.hiddenUserBet = {}),
                    (this.isCanUpdateUser = !0);
                  var i,
                    a = this.jackpotItemView.node.getComponent(s.Skeleton);
                  (null != a && a.setAnimation(0, "animation", !0),
                  this.updateViewPostions(),
                  this.updateRemainingHiddenUserCount(
                    this._remainingHiddenUserCount
                  ),
                  this.removeVisiblePlayers(),
                  this.resetShakeDiskCoin(),
                  this.bauCuaBetEntries.forEach(function (e) {
                    var t;
                    return null == (t = e.getChipPooling())
                      ? void 0
                      : t.activeAll(!1);
                  }),
                  y.stopAllByTarget(this.node),
                  this.stopCountDown(!0),
                  this.bauCuaBetEntries.forEach(function (e) {
                    return e.hideAll();
                  }),
                  v(this.node)
                    .sequence(
                      v().call(function () {
                        n.playShakeAnim();
                      }),
                      v().delay(0.3),
                      v().call(function () {}),
                      v().delay(2.5),
                      v().call(function () {}),
                      v().delay(0.2),
                      v().call(function () {
                        n.hasBetCache() &&
                          ((n.btn_datx2.node.active = !0),
                          (n.btn_datlai.node.active = !0)),
                          x.showNoti("Xin mời đặt cược!", n.root, 0, 0),
                          n.startCountDown(20),
                          D.getInstance().playSfx(n.session_start_sfx);
                      })
                    )
                    .start(),
                  (this.isEnd = !0),
                  (null != (t = this.settingPopup) && t.isWillExit) ||
                    this.forceQuit) &&
                    (null == (i = this.settingPopup) || i.exitRoom());
                }),
                (r.continue = function (e) {
                  this.resetAllPlayerViewAction(),
                    this.bauCuaBetEntries.forEach(function (e) {
                      var t;
                      return null == (t = e.getChipPooling())
                        ? void 0
                        : t.activeAll(!1);
                    }),
                    y.stopAllByTarget(this.node),
                    this.stopCountDown(),
                    this.bauCuaBetEntries.forEach(function (e) {
                      return e.hideAll();
                    }),
                    this.startCountDown(e);
                }),
                (r.setCurrentBetState = function (e) {
                  var t = this;
                  this.bauCuaBetEntries.forEach(function (e) {
                    return e.setTotalBet(0);
                  });
                  for (
                    var n = function (n) {
                        var i = e[n],
                          a = i.uid,
                          r = t.getPlayerByUID(a);
                        if (!r) return "continue";
                        for (
                          var o = i.b,
                            s = function (e) {
                              var n = o[e],
                                i = n.eid,
                                s = n.v;
                              r.isThisPlayer() && (t.my_bet[i] = s);
                              var l = t.bauCuaBetEntries[i].getTotalBet();
                              if (
                                ((l += s),
                                t.isBigTable &&
                                  t.userBet.filter(function (e) {
                                    return e.uid == a && e.eid == i;
                                  }).length > 2)
                              );
                              else {
                                var u = s,
                                  c = new J();
                                (c.uid = a),
                                  (c.eid = i),
                                  (c.bet = s),
                                  t.userBet.push(c),
                                  u > 0 && t.setBetState(a, u, i, l);
                              }
                            },
                            l = 0;
                          l < o.length;
                          l++
                        )
                          s(l);
                      },
                      i = 0;
                    i < e.length;
                    i++
                  )
                    n(i);
                }),
                (r.wait = function () {
                  this.resetAllPlayerViewAction(),
                    this.bauCuaBetEntries.forEach(function (e) {
                      var t;
                      return null == (t = e.getChipPooling())
                        ? void 0
                        : t.activeAll(!1);
                    }),
                    y.stopAllByTarget(this.node),
                    this.stopCountDown(),
                    this.bauCuaBetEntries.forEach(function (e) {
                      return e.hideAll();
                    });
                }),
                (r.resetAllPlayerViewAction = function () {
                  (this._playerInfo = []),
                    this.playerViews.forEach(function (e) {
                      y.stopAllByTarget(e.node);
                    }),
                    y.stopAllByTarget(this.my_info.node),
                    this.resetShakeDiskCoin();
                }),
                (r.resetShakeDiskCoin = function () {
                  this.playerViews.forEach(function (e) {
                    e.resetBetValue();
                  }),
                    this.my_info.resetBetValue();
                }),
                (r.resetDicePanel = function (e) {
                  (void 0 === e && (e = !1),
                  y.stopAllByTarget(this.dice_result_node.node),
                  e)
                    ? v(this.dice_result_node.node)
                        .parallel(
                          v().to(0.25, { scale: new _(0.4, 0.4, 0.4) }),
                          v()
                            .to(0.25, { position: this.dice_result_origin_pos })
                            .call(function () {})
                        )
                        .start()
                    : ((this.dice_result_node.node.scale = new _(
                        0.4,
                        0.4,
                        0.4
                      )),
                      this.dice_result_node.node.setPosition(
                        this.dice_result_origin_pos
                      ));
                }),
                (r.continueCountDownBy = function (e) {
                  (this.current_count_down += e),
                    this.current_count_down < 0 &&
                      (this.current_count_down = 0),
                    y.stopAllByTarget(this.lbl_countdown),
                    this.startCountDown(this.current_count_down);
                }),
                (r.startCountDown = function (e) {
                  var t = this;
                  (this.current_count_down = e),
                    this.resetDicePanel(),
                    (this.isStart = !0),
                    (this.current_count_down = Math.round(
                      this.current_count_down
                    )),
                    this.lbl_countdown.node.parent &&
                      (this.lbl_countdown.node.parent.active = !0),
                    (this.lbl_countdown.string =
                      this.current_count_down.toString()),
                    (this.proBar_countdown.progress =
                      this.current_count_down / 20),
                    v(this.lbl_countdown)
                      .repeat(
                        this.current_count_down,
                        v(this.lbl_countdown).sequence(
                          v().delay(1),
                          v().call(function () {
                            (t.current_count_down -= 1),
                              y.stopAllByTarget(t.proBar_countdown),
                              v(t.proBar_countdown)
                                .to(0.5, {
                                  progress: t.current_count_down / 20,
                                })
                                .start(),
                              (t.lbl_countdown.string =
                                t.current_count_down.toString());
                          })
                        )
                      )
                      .start();
                }),
                (r.stopCountDown = function (e) {
                  void 0 === e && (e = !1),
                    this.resetDicePanel(e),
                    (this.isStart = !1),
                    y.stopAllByTarget(this.lbl_countdown),
                    this.lbl_countdown.node.parent &&
                      (this.lbl_countdown.node.parent.active = !1);
                }),
                (r.finishThisGame = function (e, t, n) {
                  var i = this;
                  this.session_finish_sfx &&
                    D.getInstance().playAdditionalSfx(this.session_finish_sfx),
                    x.showNoti("Mở Bát", this.root, 0, 0),
                    this.stopCountDown(),
                    this.showResult(n);
                  for (
                    var a = function (t) {
                        var n = e[t],
                          a = n.dn,
                          r = i.getPlayer(a);
                        if (null == r) return "continue";
                        var o = n.m;
                        r.money = o;
                        var s = n.wm;
                        r.winning = s;
                        var l = i._playerInfo.filter(function (e) {
                          return e.displayName == a;
                        });
                        l.length > 0 && (l[0].gold = o);
                      },
                      r = 0;
                    r < e.length;
                    r++
                  )
                    a(r);
                  this.payChips(t, n);
                }),
                (r.payChips = function (e, t) {
                  var n = this,
                    i = t.filter(function (e, t) {
                      return t < 3;
                    });
                  this.bauCuaBetEntries.forEach(function (e, t) {
                    var a;
                    n.return_dealer_chip_sfx &&
                      e.payChipsForDealer(
                        ((a = t),
                        i.filter(function (e) {
                          return e == a;
                        }).length <= 0),
                        n.return_dealer_chip_sfx,
                        !1
                      );
                  }),
                    this.bauCuaBetEntries.forEach(function (e, t) {
                      n.return_dealer_chip_sfx &&
                        e.payChipsForHidden(
                          n.btn_user.node.position,
                          n.return_dealer_chip_sfx
                        );
                    });
                  for (var a = 0; a < e.length; a++) {
                    var r = e[a],
                      o = r.eid,
                      s = r.wns;
                    if (s.length > 0)
                      for (var l = 0; l < s.length; l++) {
                        var u = s[l];
                        this.return_avatar_chip_sfx &&
                          this.bauCuaBetEntries[o].payChipsForPlayers(
                            u,
                            this.return_avatar_chip_sfx
                          );
                      }
                  }
                  this.forceKick &&
                    setTimeout(function () {
                      n.leaveRoom();
                    }, 3e3);
                }),
                (r.release = function () {
                  t.instance = null;
                  var e = C.getBundle("table-game");
                  null != e &&
                    null != e &&
                    (e.release("prefab_baucua", B),
                    C.removeBundle(e),
                    m("remove asset bundle table-game"),
                    this.bauCuaBetEntries.forEach(function (e) {
                      var t;
                      return null == (t = e.getChipPooling())
                        ? void 0
                        : t.clear();
                    }),
                    this.node.destroy(),
                    P.garbageCollect());
                }),
                (t.releaseBundle = function () {
                  t.instance = null;
                  var e = C.getBundle("table-game");
                  null != e &&
                    null != e &&
                    (e.release("prefab_baucua", B),
                    C.removeBundle(e),
                    m("remove asset bundle table-game"),
                    P.garbageCollect());
                }),
                (r.refreshUserOnlinePopup = function () {
                  this.userOnlinePopup.refresh();
                }),
                (r.getPlayer = function (e) {
                  if (e == S.displayName) return this.my_info;
                  if (this.playerViews.length > 0) {
                    var t = this.playerViews.filter(function (t) {
                      return t.getName() == e;
                    });
                    if (t.length > 0) return t[0];
                  }
                  return this.userOnlinePopup.getPlayer(e);
                }),
                (r.getPlayerByUID = function (e) {
                  if (e == S.userID) return this.my_info;
                  if (this.playerViews.length > 0) {
                    var t = this.playerViews.filter(function (t) {
                      return t.getUID() == e;
                    });
                    if (t.length > 0) return t[0];
                  }
                  return this.userOnlinePopup.getHiddenPlayerView();
                }),
                (r.getVisiblePlayer = function (e) {
                  if (e == S.displayName) return this.my_info;
                  if (this.playerViews.length > 0) {
                    var t = this.playerViews.filter(function (t) {
                      return t.getName() == e;
                    });
                    if (t.length > 0) return t[0];
                  }
                  return null;
                }),
                (r.getVisiblePlayerByID = function (e) {
                  if (e == S.userID) return this.my_info;
                  if (this.playerViews.length > 0) {
                    var t = this.playerViews.filter(function (t) {
                      return t.getUID() == e;
                    });
                    if (t.length > 0) return t[0];
                  }
                  return null;
                }),
                (r.setValueForCoinBtns = function (e) {
                  var t;
                  this._coinValues = [];
                  for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    this._coinValues.push(i);
                  }
                  null == (t = this.chipPanel) ||
                    t.initChipPanel(this._coinValues);
                }),
                (r.setBetState = function (e, t, n, i) {
                  void 0 === i && (i = 0);
                  var a = 0;
                  i > 0 && this.bauCuaBetEntries[n].setTotalBet(i),
                    S.userID == e && this.bauCuaBetEntries[n].setCurrentBet(t);
                  for (var r = 0; r < this._coinValues.length; r++)
                    if (t == this._coinValues[r]) {
                      a = r;
                      break;
                    }
                  var o = this.bauCuaBetEntries[n].getChip(a),
                    s = o.newCoin,
                    l = o.desPos;
                  if (null != s && null != s) {
                    (s.name = "standing"), (s.active = !0), s.setPosition(l);
                    var u = this.getPlayerByUID(e);
                    u && (u.addShakeCoin(n, s), u.addBetValue(n, t));
                  }
                }),
                (r.betResponseHidden = function (e, t) {
                  void 0 === t && (t = !0);
                  var n = this.bauCuaBetEntries[e].getRandomChip(),
                    i = n.newCoin,
                    a = n.desPos;
                  null != i &&
                    null != i &&
                    (D.getInstance().playSfx(this.bet_sfx),
                    (i.name = "flying"),
                    (i.active = !0),
                    i.setPosition(this.btn_user.node.position),
                    t
                      ? v(i)
                          .to(0.7, { position: a }, { easing: "expoOut" })
                          .call(function () {
                            i.name = "standing";
                          })
                          .start()
                      : i.setPosition(a));
                }),
                (r.betResponse = function (e, t, n, i, a, r) {
                  void 0 === a && (a = 0), void 0 === r && (r = !0);
                  var o = this.getPlayer(e);
                  if (o) {
                    var s = 0;
                    a > 0 && this.bauCuaBetEntries[i].setTotalBet(a),
                      o.isThisPlayer() &&
                        this.bauCuaBetEntries[i].setCurrentBet(n);
                    var l = {};
                    if (null != this.getVisiblePlayerByID(o.getUID())) {
                      for (var u = this._coinValues.length - 1; u >= 0; u--)
                        if (n >= this._coinValues[u]) {
                          s = u;
                          break;
                        }
                      l = this.bauCuaBetEntries[i].getChip(s);
                    } else l = this.bauCuaBetEntries[i].getRandomChip();
                    var c = l.newCoin,
                      h = l.desPos;
                    if (null != c && null != c) {
                      if (
                        (D.getInstance().playSfx(this.bet_sfx),
                        (c.name = "flying"),
                        (c.active = !0),
                        c.setPosition(o.node.position),
                        r)
                      )
                        v(c)
                          .to(0.7, { position: h }, { easing: "expoOut" })
                          .call(function () {
                            c.name = "standing";
                          })
                          .start();
                      else c.setPosition(h);
                      if (o.isVisible()) c.name = o.getUID() + "%" + i;
                      else {
                        var p = this._playerInfo.filter(function (t) {
                            return t.displayName == e;
                          }),
                          f = "";
                        p.length > 0 && (f = p[0].uid), (c.name = f + "%" + i);
                      }
                      o.addShakeCoin(i, c), o.addBetValue(i, n);
                      var d = this._playerInfo.filter(function (t) {
                        return t.displayName == e;
                      });
                      d.length > 0 && (d[0].gold = t),
                        this.userOnlinePopup.refresh(),
                        o.refresh();
                    }
                  }
                }),
                (r.otherBetResponse = function (e, t) {
                  for (
                    var n = [0, 0, 0, 0, 0, 0], i = [0, 0, 0, 0, 0, 0], a = 0;
                    a < e.length;
                    a++
                  ) {
                    var r = e[a],
                      o = r.eid,
                      s = r.v;
                    (n[o] = this.bauCuaBetEntries[o].getTotalBet()),
                      s > 0
                        ? ((i[o] = s), this.bauCuaBetEntries[o].setTotalBet(s))
                        : (i[o] = n[o]),
                      i[o] - n[o] > 0 && this.betResponseHidden(o);
                  }
                  for (var l = 0; l < t.length; l++)
                    for (
                      var u = t[l],
                        c = u.uid,
                        h = u.dn,
                        p = u.b,
                        f = this.getVisiblePlayerByID(c),
                        d = 0;
                      d < p.length;
                      d++
                    ) {
                      var _ = p[d],
                        g = _.eid,
                        b = _.v,
                        m = u.m;
                      if (null != f && h != S.displayName)
                        (b -= f.getBetValue()[g]) > 0 &&
                          this.betResponse(h, m, b, g);
                      else this.updateInfo(h, m);
                    }
                }),
                (r.updateInfo = function (e, t) {
                  var n = this._playerInfo.filter(function (t) {
                    return t.displayName == e;
                  });
                  n.length > 0 && (n[0].gold = t),
                    this.userOnlinePopup.refresh();
                  var i = this.getPlayer(name);
                  i && i.refresh();
                }),
                (r.showResult = function (e) {
                  var t;
                  (this.dice_result_node.node.active = !0),
                    null == (t = this.shake_anim) ||
                      t.setAnimation(0, "open2", !1);
                  for (var n = 0; n < e.length - 1; n++)
                    this.bauCuaBetEntries[e[n]].showGlow();
                  var i = e[0];
                  i < this.dice_frames.length &&
                    (this.dice1.spriteFrame = this.dice_frames[i]);
                  var a = e[1];
                  a < this.dice_frames.length &&
                    (this.dice2.spriteFrame = this.dice_frames[a]);
                  var r = e[2];
                  r < this.dice_frames.length &&
                    (this.dice3.spriteFrame = this.dice_frames[r]),
                    y.stopAllByTarget(this.dice_result_node.node);
                  var o = new _(-177, 30, 0);
                  v(this.dice_result_node.node)
                    .delay(1)
                    .parallel(
                      v().to(0.3, { scale: new _(0.8, 0.8, 0.8) }),
                      v().by(1.2, { position: o }, { easing: "expoOut" })
                    )
                    .start();
                  var s = [];
                  s.push(e[0]),
                    s.push(e[1]),
                    s.push(e[2]),
                    this._danhSachSoiCau.push(s),
                    this.updateBangSoiCau();
                }),
                (r.updateBangSoiCau = function () {
                  var e,
                    t = this;
                  if (!(this._danhSachSoiCau.length <= 0)) {
                    var n =
                        this._danhSachSoiCau[this._danhSachSoiCau.length - 1],
                      i = n[0];
                    i < this.last_dice_frames.length &&
                      (this.last_dice1.spriteFrame = this.last_dice_frames[i]);
                    var a = n[1];
                    a < this.last_dice_frames.length &&
                      (this.last_dice2.spriteFrame = this.last_dice_frames[a]);
                    var r = n[2];
                    r < this.last_dice_frames.length &&
                      (this.last_dice3.spriteFrame = this.last_dice_frames[r]),
                      (this._danhSachSoiCau = this._danhSachSoiCau.filter(
                        function (e, n) {
                          return n >= t._danhSachSoiCau.length - 30;
                        }
                      )),
                      null == (e = this.soiCauPopup) ||
                        e.updateBangSoiCau(this._danhSachSoiCau, !0);
                  }
                }),
                (r.playShakeAnim = function () {
                  var e,
                    t,
                    n = this;
                  null == (e = this.shake_anim) ||
                    e.setAnimation(0, "close2", !1),
                    null == (t = this.shake_anim) ||
                      t.setCompleteListener(function (e) {
                        var t, i, a;
                        null != e &&
                          "close2" == (e.animation ? e.animation.name : "") &&
                          ((n.dice_result_node.node.active = !1),
                          null == (t = n.shake_anim) ||
                            t.setAnimation(0, "shake", !1),
                          null == (i = n.shake_anim) ||
                            i.addAnimation(0, "shake", !1),
                          null == (a = n.shake_anim) ||
                            a.addAnimation(0, "idle", !0),
                          n.shake_disk_sfx &&
                            D.getInstance().playAdditionalSfx(
                              n.shake_disk_sfx
                            ));
                      });
                }),
                (r.show = function () {
                  return e.prototype.show.call(this);
                }),
                t
              );
            })(z)).instance = null),
            (St.KEEP_MONEY = 5e4),
            (Te = t((Ne = St).prototype, "bauCuaBetEntries", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Oe = t(Ne.prototype, "shake_anim", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ge = t(Ne.prototype, "proBar_countdown", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Fe = t(Ne.prototype, "lbl_countdown", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Me = t(Ne.prototype, "lbl_userOnline", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Je = t(Ne.prototype, "playerViews", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Le = t(Ne.prototype, "my_info", [$], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (je = t(Ne.prototype, "userOnlinePopup", [ee], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Ke = t(Ne.prototype, "userChatPopup", [te], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Qe = t(Ne.prototype, "userInvitePopup", [ne], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Xe = t(Ne.prototype, "chipPanel", [ie], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (qe = t(Ne.prototype, "btn_user", [ae], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (We = t(Ne.prototype, "btn_invite", [re], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (Ye = t(Ne.prototype, "btn_invites", [oe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Ze = t(Ne.prototype, "btn_chat", [se], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($e = t(Ne.prototype, "btn_soicau", [le], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (et = t(Ne.prototype, "btn_jackpot_history", [ue], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (tt = t(Ne.prototype, "btn_exit", [ce], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (nt = t(Ne.prototype, "btn_datlai", [he], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (it = t(Ne.prototype, "btn_datx2", [pe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (at = t(Ne.prototype, "dice_result_node", [fe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (rt = t(Ne.prototype, "dice1", [de], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (ot = t(Ne.prototype, "dice2", [_e], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (st = t(Ne.prototype, "dice3", [ge], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (lt = t(Ne.prototype, "last_dice1", [be], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (ut = t(Ne.prototype, "last_dice2", [me], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (ct = t(Ne.prototype, "last_dice3", [ye], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (ht = t(Ne.prototype, "soiCauPopup", [ve], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (pt = t(Ne.prototype, "settingPopup", [we], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ft = t(Ne.prototype, "jackpotItemView", [Ce], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (dt = t(Ne.prototype, "bauCuaJackpotHistoryView", [Be], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_t = t(Ne.prototype, "noHuView", [Pe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (gt = t(Ne.prototype, "dice_frames", [Ie], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (bt = t(Ne.prototype, "last_dice_frames", [Ve], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (mt = t(Ne.prototype, "baucua_bgm_music", [Se], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (yt = t(Ne.prototype, "shake_disk_sfx", [ke], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (vt = t(Ne.prototype, "session_start_sfx", [Ee], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (wt = t(Ne.prototype, "bet_sfx", [Ue], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ct = t(Ne.prototype, "return_avatar_chip_sfx", [xe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Bt = t(Ne.prototype, "return_dealer_chip_sfx", [ze], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pt = t(Ne.prototype, "session_finish_sfx", [De], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (It = t(Ne.prototype, "btn_huongdan", [Re], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Vt = t(Ne.prototype, "commonInfoPopup", [Ae], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (He = Ne))
          ) || He)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BauCuaJackpotHistoryItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BauCuaJackpotHistoryView.ts",
    "./StringUtils.ts",
  ],
  function (t) {
    "use strict";
    var e, i, r, n, a, s, o, l, u, p, c, _, h, b;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (s = t._decorator),
            (o = t.Label),
            (l = t.Button),
            (u = t.Sprite),
            (p = t.SpriteFrame),
            (c = t.Color),
            (_ = t.Component);
        },
        function (t) {
          h = t.default;
        },
        function (t) {
          b = t.StringUtils;
        },
      ],
      execute: function () {
        var d, m, f, g, v, y, w, F, x, z, k, C, H, S, B, J, V, I, D, L, j;
        a._RF.push(
          {},
          "552f1n3MYpGp5t2FlqS+gjS",
          "BauCuaJackpotHistoryItemView",
          void 0
        );
        var M = s.ccclass,
          P = s.property;
        t(
          "default",
          ((d = M("BauCuaJackpotHistoryItemView")),
          (m = P(o)),
          (f = P(o)),
          (g = P(l)),
          (v = P(h)),
          (y = P(u)),
          (w = P(u)),
          (F = P(u)),
          (x = P([p])),
          (z = P(Boolean)),
          d(
            ((H = e(
              (C = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    r(e, "txt_phien_time", H, n(e)),
                    r(e, "txt_phien_tienhu", S, n(e)),
                    r(e, "btn_detail", B, n(e)),
                    r(e, "bauCuaJackpotHistoryView", J, n(e)),
                    r(e, "spr_d1", V, n(e)),
                    r(e, "spr_d2", I, n(e)),
                    r(e, "spr_d3", D, n(e)),
                    r(e, "spriteFrame_dice", L, n(e)),
                    r(e, "is_bc_livestream", j, n(e)),
                    (e.users = []),
                    (e.time = ""),
                    (e.sid = ""),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    var t = this;
                    this.btn_detail.node.on("click", function () {
                      var e;
                      null == (e = t.bauCuaJackpotHistoryView) ||
                        e.showDetail(t.users, t.time);
                    });
                  }),
                  (a.show = function (t, e, i, r, n, a) {
                    void 0 === a && (a = ""),
                      (this.txt_phien_time.string = t.toString()),
                      (this.txt_phien_tienhu.color = c.WHITE),
                      (this.txt_phien_tienhu.string = b.formatNumber(i));
                    var s = +r[0] - (this.is_bc_livestream ? 1 : 0),
                      o = +r[1] - (this.is_bc_livestream ? 1 : 0),
                      l = +r[2] - (this.is_bc_livestream ? 1 : 0);
                    s < this.spriteFrame_dice.length &&
                      (this.spr_d1.spriteFrame = this.spriteFrame_dice[s]),
                      o < this.spriteFrame_dice.length &&
                        (this.spr_d2.spriteFrame = this.spriteFrame_dice[o]),
                      l < this.spriteFrame_dice.length &&
                        (this.spr_d3.spriteFrame = this.spriteFrame_dice[l]),
                      (this.users = n),
                      (this.time = e),
                      (this.sid = a),
                      (this.txt_phien_time.node.active = !0),
                      (this.txt_phien_tienhu.node.active = !0),
                      (this.btn_detail.node.active = !0),
                      (this.btn_detail.target.active = !0);
                  }),
                  (a.hide = function () {
                    (this.txt_phien_time.node.active = !1),
                      (this.txt_phien_tienhu.node.active = !1),
                      (this.btn_detail.node.active = !1),
                      (this.btn_detail.target.active = !1);
                  }),
                  e
                );
              })(_)).prototype,
              "txt_phien_time",
              [m],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (S = e(C.prototype, "txt_phien_tienhu", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (B = e(C.prototype, "btn_detail", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (J = e(C.prototype, "bauCuaJackpotHistoryView", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = e(C.prototype, "spr_d1", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (I = e(C.prototype, "spr_d2", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (D = e(C.prototype, "spr_d3", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (L = e(C.prototype, "spriteFrame_dice", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (j = e(C.prototype, "is_bc_livestream", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (k = C))
          ) || k)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BauCuaJackpotHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BauCuaJackpotHistoryItemView.ts",
    "./BauCuaJackpotRankItemView.ts",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./HttpManager.ts",
    "./StringUtils.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, r, a, l, s, u, c, p, m, _, h, d, g, b;
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
            (a = t._decorator),
            (l = t.Button),
            (s = t.Label),
            (u = t.Node),
            (c = t.ScrollView),
            (p = t.UIOpacity);
        },
        function (t) {
          m = t.default;
        },
        function (t) {
          _ = t.default;
        },
        function (t) {
          h = t.CommonPopup;
        },
        function (t) {
          d = t.GameConfigManager;
        },
        function (t) {
          g = t.httpManager;
        },
        function (t) {
          b = t.StringUtils;
        },
      ],
      execute: function () {
        var f,
          y,
          v,
          w,
          k,
          C,
          P,
          z,
          H,
          I,
          J,
          S,
          T,
          D,
          M,
          N,
          x,
          B,
          L,
          U,
          V,
          j,
          G,
          F,
          R;
        r._RF.push(
          {},
          "b3c2b8bbstD9YNupwdogdG/",
          "BauCuaJackpotHistoryView",
          void 0
        );
        var E = a.ccclass,
          A = a.property,
          O = t("UserInfo", function () {
            (this.money = 0),
              (this.uid = ""),
              (this.displayName = ""),
              (this.customerId = ""),
              (this.avaUrl = ""),
              (this.platform = 0);
          }),
          W = t("JackpotHistory", function () {
            (this.sid = ""),
              (this.time = ""),
              (this.time2 = ""),
              (this.jackpotMoney = 0),
              (this.users = []),
              (this.results = []);
          });
        t(
          "default",
          ((f = E("BauCuaJackpotHistoryView")),
          (y = A(l)),
          (v = A(l)),
          (w = A(l)),
          (k = A(s)),
          (C = A(s)),
          (P = A(u)),
          (z = A(u)),
          (H = A(Number)),
          (I = A([u])),
          (J = A([u])),
          (S = A(c)),
          f(
            ((M = e(
              (D = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    n(e, "btn_prev", M, o(e)),
                    n(e, "btn_prev_detail", N, o(e)),
                    n(e, "btn_next", x, o(e)),
                    n(e, "lbl_page", B, o(e)),
                    n(e, "lbl_time_detail", L, o(e)),
                    n(e, "history_node", U, o(e)),
                    n(e, "rank_node", V, o(e)),
                    n(e, "gameID", j, o(e)),
                    n(e, "item_nodes", G, o(e)),
                    n(e, "rank_item_nodes", F, o(e)),
                    n(e, "scr_rank_node", R, o(e)),
                    (e._bets = []),
                    (e.currentPage = 1),
                    (e.max_pages = 100),
                    (e.item_views = []),
                    (e.rank_item_views = []),
                    e
                  );
                }
                i(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    var e = this;
                    t.prototype.onLoad.call(this),
                      this.btn_prev.node.on("click", function () {
                        e.currentPage > 1 &&
                          ((e.currentPage -= 1),
                          (e.lbl_page.string = e.currentPage.toString())),
                          e.fetchHistory(!1);
                      }),
                      this.btn_prev_detail.node.on("click", function () {
                        (e.rank_node.active = !1),
                          (e.lbl_time_detail.node.active = !1),
                          (e.history_node.active = !0);
                      }),
                      this.btn_next.node.on("click", function () {
                        e.currentPage < e.max_pages &&
                          ((e.currentPage += 1),
                          (e.lbl_page.string = e.currentPage.toString())),
                          e.fetchHistory(!1);
                      });
                  }),
                  (r.goToFirstPage = function () {
                    (this.currentPage = 1),
                      (this.lbl_page.string = this.currentPage.toString());
                  }),
                  (r.fetchHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0),
                      t &&
                        (this.goToFirstPage(),
                        (this.rank_node.active = !1),
                        (this.lbl_time_detail.node.active = !1),
                        (this.history_node.active = !0));
                    var i = 5 * (this.currentPage - 1),
                      n = d.SAdomainURL;
                    (n += "?command=fetchCardGameJackpot"),
                      (n += "&gameId="),
                      (n += this.gameID),
                      (n += "&limit="),
                      (n += "6"),
                      (n += "&skip="),
                      (n += i.toString()),
                      g.sendGET({
                        url: n,
                        onCompleted: function (i) {
                          e._bets = [];
                          var n = JSON.parse(i).data,
                            o = n.items,
                            r = n.count;
                          e.max_pages = Math.ceil(r / 5);
                          for (var a = 0; a < o.length; a++) {
                            for (
                              var l = o[a],
                                s = l.winners,
                                u = new W(),
                                c = 0,
                                p = 0;
                              p < s.length;
                              p++
                            ) {
                              var m = s[p],
                                _ = new O();
                              (_.money = m.jackpotWin),
                                (_.displayName = m.displayName),
                                u.users.push(_),
                                (c += _.money);
                            }
                            u.jackpotMoney = c;
                            var h = l.timestamp,
                              d = new Date(h);
                            (u.time = b.formatTime(d)),
                              (u.time2 = b.formatTime2(d));
                            for (
                              var g = l.results, f = [], y = 0;
                              y < g.length;
                              y++
                            ) {
                              var v = g[y];
                              f.push(v);
                            }
                            (u.results = f), e._bets.push(u);
                          }
                          e.showJackpotHistory(t);
                        },
                      });
                  }),
                  (r.showJackpotHistory = function (t) {
                    var e,
                      i = this;
                    void 0 === t && (t = !0),
                      this.item_views.length <= 0 &&
                        (this.item_views = this.item_nodes.map(function (t) {
                          return t.getComponent(m);
                        })),
                      this.item_views.forEach(function (t, e) {
                        if (null != t) {
                          var n = i._bets[e];
                          null != n && null != n
                            ? ((t.node.getComponent(p).opacity = 255),
                              t.show(
                                n.time,
                                n.time2,
                                n.jackpotMoney,
                                n.results,
                                n.users,
                                n.sid
                              ))
                            : ((t.node.getComponent(p).opacity = 1), t.hide());
                        }
                      }),
                      t && this.show(),
                      null == (e = this.scr_rank_node) || e.scrollToTop();
                  }),
                  (r.showDetail = function (t, e) {
                    var i;
                    this.rank_item_views.length <= 0 &&
                      (this.rank_item_views = this.rank_item_nodes.map(
                        function (t) {
                          return t.getComponent(_);
                        }
                      )),
                      this.rank_item_views.forEach(function (e, i) {
                        if (null != e) {
                          e.reset();
                          var n = t[i];
                          null != n && null != n
                            ? ((e.node.getComponent(p).opacity = 255),
                              e.show(i + 1, n.displayName, n.money))
                            : (e.node.getComponent(p).opacity = 1);
                        }
                      }),
                      (this.lbl_time_detail.node.active = !0),
                      (this.lbl_time_detail.string = e),
                      (this.rank_node.active = !0),
                      null == (i = this.scr_rank_node) || i.scrollToTop(),
                      (this.history_node.active = !1);
                  }),
                  e
                );
              })(h)).prototype,
              "btn_prev",
              [y],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (N = e(D.prototype, "btn_prev_detail", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (x = e(D.prototype, "btn_next", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (B = e(D.prototype, "lbl_page", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (L = e(D.prototype, "lbl_time_detail", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (U = e(D.prototype, "history_node", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (V = e(D.prototype, "rank_node", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (j = e(D.prototype, "gameID", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 12;
              },
            })),
            (G = e(D.prototype, "item_nodes", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (F = e(D.prototype, "rank_item_nodes", [J], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (R = e(D.prototype, "scr_rank_node", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = D))
          ) || T)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BauCuaJackpotRankItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var e, i, n, r, a, o, s, u, l, c, _;
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
            (s = t.Label),
            (u = t.Sprite),
            (l = t.Color),
            (c = t.Component);
        },
        function (t) {
          _ = t.StringUtils;
        },
      ],
      execute: function () {
        var p, m, h, x, b, f, g, d, k, v, w, y, z;
        a._RF.push(
          {},
          "c41f3Y890FLObIzhmWZUjqx",
          "BauCuaJackpotRankItemView",
          void 0
        );
        var I = o.ccclass,
          S = o.property;
        t(
          "default",
          ((p = I("BauCuaJackpotRankItemView")),
          (m = S(s)),
          (h = S(u)),
          (x = S(s)),
          (b = S(s)),
          (f = S(s)),
          p(
            ((k = e(
              (d = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "txt_rank", k, r(e)),
                    n(e, "spr_rank", v, r(e)),
                    n(e, "txt_username", w, r(e)),
                    n(e, "txt_win_amount", y, r(e)),
                    n(e, "txt_bet_amount", z, r(e)),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.show = function (t, e, i, n) {
                    void 0 === n && (n = 0),
                      t > 3
                        ? ((this.txt_rank.node.active = !0),
                          (this.spr_rank.node.active = !1),
                          (this.txt_rank.string = t.toString()))
                        : ((this.txt_rank.node.active = !1),
                          (this.spr_rank.node.active = !0)),
                      (this.txt_username.string = e.toString()),
                      (this.txt_win_amount.color = l.WHITE),
                      (this.txt_win_amount.string = _.formatNumber(i)),
                      this.txt_bet_amount &&
                        (this.txt_bet_amount.string = _.formatNumber(n)),
                      (this.txt_username.node.active = !0),
                      (this.txt_win_amount.node.active = !0),
                      this.txt_bet_amount &&
                        (this.txt_bet_amount.node.active = !0);
                  }),
                  (a.hide = function () {
                    (this.spr_rank.node.active = !1),
                      (this.txt_rank.node.active = !1),
                      (this.txt_username.node.active = !1),
                      (this.txt_win_amount.node.active = !1);
                  }),
                  (a.reset = function () {
                    (this.txt_rank.string = ""),
                      (this.txt_username.string = ""),
                      (this.txt_win_amount.string = "");
                  }),
                  e
                );
              })(c)).prototype,
              "txt_rank",
              [m],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (v = e(d.prototype, "spr_rank", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (w = e(d.prototype, "txt_username", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (y = e(d.prototype, "txt_win_amount", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (z = e(d.prototype, "txt_bet_amount", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (g = d))
          ) || g)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BauCuaNetworkHandler.ts",
  [
    "cc",
    "./SocketManager.ts",
    "./BauCuaFullScreenGameView.ts",
    "./EventManager.ts",
    "./Define.ts",
    "./PersistManager.ts",
    "./State.ts",
  ],
  function (n) {
    "use strict";
    var e, o, t, a, s, i, r, E, _, u, c, d;
    return {
      setters: [
        function (n) {
          (e = n.cclegacy), (o = n.log);
        },
        function (n) {
          (t = n.socketManager),
            (a = n.MessageResponse),
            (s = n.GLOBAL_MESSAGE),
            (i = n.MessageRequest);
        },
        function (n) {
          r = n.BauCuaFullScreenGameView;
        },
        function (n) {
          (E = n.eventManager), (_ = n.EventKey);
        },
        function (n) {
          u = n.GameID;
        },
        function (n) {
          c = n.PersistManager;
        },
        function (n) {
          d = n.state;
        },
      ],
      execute: function () {
        var S;
        e._RF.push(
          {},
          "4a159FZ4dBNy4FQwXi/HplY",
          "BauCuaNetworkHandler",
          void 0
        ),
          (function (n) {
            (n[(n.SELF_BET = 1101)] = "SELF_BET"),
              (n[(n.REBET = 1102)] = "REBET"),
              (n[(n.OTHERS_BET = 1103)] = "OTHERS_BET"),
              (n[(n.START_GAME = 1100)] = "START_GAME"),
              (n[(n.FINISH_GAME = 1104)] = "FINISH_GAME");
          })(S || (S = {})),
          (n(
            "BauCuaNetworkHandler",
            (function () {
              function n() {}
              n.getInstance = function () {
                return (
                  this._instance || (this._instance = new n()), this._instance
                );
              };
              var e = n.prototype;
              return (
                (e.connect = function () {
                  var n = this,
                    e = {};
                  (e.cmd = s.QUICK_PLAY), (e.gid = u.BAU_CUA_FULL), (e.aid = 1);
                  var o = [i.ZonePlugin_Type, "Simms", "channelPlugin", e];
                  t.send(o);
                  var a = r.getInstance();
                  a &&
                    (E.on(_.SocketJoinRoom, a, function (n) {
                      return a.onJoinRoomResponse(n);
                    }),
                    E.on(_.SocketLeaveRoom, a, function (n) {
                      return a.onLeaveRoomResponse(n);
                    }),
                    E.on(_.SocketMessage, a, function (e) {
                      return n.handleMessage(e);
                    }));
                }),
                (e.handleMessage = function (n) {
                  var e = r.getInstance();
                  if (e) {
                    var t = n[0],
                      i = n[1],
                      E = i.cmd;
                    switch (t) {
                      case a.Extension_Response:
                        if (
                          E == s.QUICK_PLAY ||
                          E == s.CREATE_TABLE ||
                          E == s.QUICK_PLAY_WITH_BET
                        )
                          if (null != i.ri && null != i.ri) {
                            var _ = i.ri,
                              u = _.rid,
                              d = (_.b, _.sid),
                              A = (_.Mu, _.gid, "");
                            null != _.pwd && null != _.pwd && (A = _.pwd),
                              o("QUICK_PLAY baucua:", u, d),
                              this.sendJoinRoom(u, d, A);
                          } else if (
                            (c.getInstance().hideLoading(),
                            null != i.mgs && null != i.mgs)
                          ) {
                            var T = i.mgs;
                            c.showNoti(T);
                          } else c.showNoti("Không tìm thấy phòng thích hợp!");
                        else
                          E == s.INGAME_JOIN_TABLE_INFOS
                            ? e.onJoinTableInfo(i)
                            : E == s.INGAME_USER_LEAVE_AND_JOIN_TABLE
                            ? e.onUserJoinAndLeaveTable(i)
                            : E == S.SELF_BET
                            ? e.onSelfBet(i)
                            : E == S.OTHERS_BET
                            ? e.onOtherBet(i)
                            : E == S.START_GAME
                            ? e.onStartGane(i)
                            : E == S.FINISH_GAME
                            ? e.onFinish(i)
                            : E == s.ERROR_MESSAGE
                            ? e.onError(i)
                            : E == s.INGAME_USER_CHAT
                            ? e.onUserChat(i)
                            : E == s.UPDATE_HIDDEN_USER_COUNT
                            ? e.onUpdateHiddenUserCount(i)
                            : E == s.UPDATE_HIDDEN_USER_ONLINE
                            ? e.onUpdateHiddenUserOnline(i)
                            : E == s.INGAME_JACKPOT
                            ? (e.onUpdateJackpot(i), e.onJackpot(i))
                            : E == s.INGAME_GET_JACKPOTS
                            ? e.onUpdateJackpot(i)
                            : 303 == E
                            ? e.onGetUserToBeInvited(i)
                            : E == s.INGAME_UPDATE_MONEY
                            ? e.onUpdateUserMoney(i)
                            : E == s.REFRESH_MONEY
                            ? e.onRefreshMoney(i)
                            : E == s.USER_INFO
                            ? e.onUserInfo(i)
                            : E == s.MESSAGE_INGAME && e.onNotice(i);
                    }
                  }
                }),
                (e.sendJoinRoom = function (n, e, a) {
                  o("joinRoom:", n);
                  var s = [i.JoinRoom_Type, "Simms", n, a];
                  t.send(s);
                }),
                (e.sendLeaveRoom = function (n) {
                  void 0 === n && (n = -1), -1 == n && (n = d.roomId);
                  var e = [i.LeaveRoom_Type, "Simms", n];
                  t.send(e);
                }),
                (e.sendBet = function (n, e) {
                  var o = {};
                  (o.cmd = S.SELF_BET), (o.eid = n), (o.v = e);
                  var a = [i.RoomPlugin_Type, "Simms", d.roomId, o];
                  t.send(a);
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

(function (r) {
  r("virtual:///prerequisite-imports/baucua", "chunks:///_virtual/baucua");
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
