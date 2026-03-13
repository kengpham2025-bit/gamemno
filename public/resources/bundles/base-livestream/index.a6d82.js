System.register(
  "chunks:///_virtual/base-livestream",
  [
    "./CustomWebView.ts",
    "./GiftPopup.ts",
    "./LiveStreamChatController.ts",
    "./LiveStreamChatItem.ts",
    "./LiveStreamChatView.ts",
    "./LiveStreamConfig.ts",
    "./LiveStreamDealerChatView.ts",
    "./LiveStreamDealerChatViewPopup.ts",
    "./LiveStreamGamePlayBridge.ts",
    "./LiveStreamGameSettingPopup.ts",
    "./LiveStreamRankItemView.ts",
    "./LiveStreamRankView.ts",
    "./LiveStreamUserOnlinePopup.ts",
    "./LivestreamTipRankItemView.ts",
    "./StreamSprite.ts",
    "./TopTipPopup.ts",
    "./BaseLiveStreamController.ts",
    "./BaseLiveStreamNetworkController.ts",
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
      ],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/BaseLiveStreamController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ChipPanel.ts",
    "./CommonPopup.ts",
    "./LiveStreamGameSettingPopup.ts",
    "./GiftPopup.ts",
    "./State.ts",
    "./StringUtils.ts",
    "./SoundManager.ts",
    "./EventManager.ts",
    "./GamePlatformManager.ts",
    "./PersistManager.ts",
    "./Define.ts",
    "./BaseLiveStreamNetworkController.ts",
    "./SocketManager.ts",
    "./BaseBetEntry.ts",
    "./ScaleCmp.ts",
    "./LiveStreamRankView.ts",
    "./LiveStreamConfig.ts",
    "./CustomWebView.ts",
    "./LiveStreamUserOnlinePopup.ts",
    "./PlayerView.ts",
    "./StreamSprite.ts",
  ],
  function (e) {
    "use strict";
    var t,
      n,
      i,
      r,
      o,
      l,
      a,
      s,
      u,
      c,
      p,
      h,
      b,
      g,
      f,
      d,
      m,
      w,
      _,
      y,
      v,
      S,
      B,
      P,
      C,
      E,
      V,
      k,
      I,
      T,
      N,
      L,
      z,
      G,
      M,
      O,
      R,
      A,
      U,
      F,
      x,
      D,
      W,
      H,
      Z,
      K,
      q,
      Y,
      J,
      $,
      X;
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
            (l = e._decorator),
            (a = e.sys),
            (s = e.systemEvent),
            (u = e.Node),
            (c = e.Label),
            (p = e.Sprite),
            (h = e.SpriteFrame),
            (b = e.Button),
            (g = e.AudioClip),
            (f = e.UIOpacity),
            (d = e.Vec3),
            (m = e.UITransform),
            (w = e.macro),
            (_ = e.sp),
            (y = e.game),
            (v = e.Game),
            (S = e.VideoPlayer),
            (B = e.EventHandler),
            (P = e.Tween),
            (C = e.tween),
            (E = e.Component);
        },
        function (e) {
          V = e.ChipPanel;
        },
        function (e) {
          k = e.CommonPopup;
        },
        function (e) {
          I = e.LiveStreamGameSettingPopup;
        },
        function (e) {
          T = e.GiftPopup;
        },
        function (e) {
          N = e.state;
        },
        function (e) {
          L = e.StringUtils;
        },
        function (e) {
          z = e.SoundManager;
        },
        function (e) {
          (G = e.eventManager), (M = e.EventKey);
        },
        function (e) {
          O = e.GamePlatformManager;
        },
        function (e) {
          R = e.PersistManager;
        },
        function (e) {
          A = e.StorageKey;
        },
        function (e) {
          (U = e.LiveStreamMessage), (F = e.LiveStreamErrorCode);
        },
        function (e) {
          (x = e.MessageRequest),
            (D = e.MessageResponse),
            (W = e.GLOBAL_MESSAGE);
        },
        function (e) {
          H = e.BaseBetEntry;
        },
        function (e) {
          Z = e.default;
        },
        function (e) {
          K = e.LiveStreamRankView;
        },
        function (e) {
          q = e.LiveStreamConfig;
        },
        function (e) {
          Y = e.CustomWebView;
        },
        function (e) {
          J = e.LiveStreamUserOnlinePopup;
        },
        function (e) {
          $ = e.PlayerInfo;
        },
        function (e) {
          X = e.StreamSprite;
        },
      ],
      execute: function () {
        var j,
          Q,
          ee,
          te,
          ne,
          ie,
          re,
          oe,
          le,
          ae,
          se,
          ue,
          ce,
          pe,
          he,
          be,
          ge,
          fe,
          de,
          me,
          we,
          _e,
          ye,
          ve,
          Se,
          Be,
          Pe,
          Ce,
          Ee,
          Ve,
          ke,
          Ie,
          Te,
          Ne,
          Le,
          ze,
          Ge,
          Me,
          Oe,
          Re,
          Ae,
          Ue,
          Fe,
          xe,
          De,
          We,
          He,
          Ze,
          Ke,
          qe,
          Ye,
          Je,
          $e,
          Xe,
          je,
          Qe,
          et,
          tt,
          nt,
          it,
          rt,
          ot,
          lt,
          at,
          st,
          ut,
          ct,
          pt,
          ht,
          bt,
          gt,
          ft,
          dt,
          mt,
          wt,
          _t,
          yt,
          vt,
          St,
          Bt,
          Pt,
          Ct,
          Et,
          Vt,
          kt,
          It,
          Tt,
          Nt,
          Lt,
          zt,
          Gt,
          Mt,
          Ot;
        o._RF.push(
          {},
          "52ef7YK4ttINq7RmYZ5GVp8",
          "BaseLiveStreamController",
          void 0
        );
        var Rt = l.ccclass,
          At = l.property,
          Ut = e("LiveGameState", { BETTING: 0, RESULTING: 1, ENDED: 2 });
        a.isBrowser &&
          window.addEventListener("message", function (e) {
            var t = e.data;
            s.emit("htmlCallBack", t);
          });
        e(
          "BaseLiveStreamController",
          ((j = Rt("BaseLiveStreamController")),
          (Q = At(u)),
          (ee = At(c)),
          (te = At(c)),
          (ne = At(p)),
          (ie = At([h])),
          (re = At(c)),
          (oe = At(c)),
          (le = At(c)),
          (ae = At(Y)),
          (se = At(Y)),
          (ue = At(X)),
          (ce = At(u)),
          (pe = At(u)),
          (he = At(V)),
          (be = At(b)),
          (ge = At(b)),
          (fe = At(b)),
          (de = At(b)),
          (me = At(b)),
          (we = At(b)),
          (_e = At(b)),
          (ye = At(b)),
          (ve = At(b)),
          (Se = At(b)),
          (Be = At(g)),
          (Pe = At(g)),
          (Ce = At(g)),
          (Ee = At(g)),
          (Ve = At(k)),
          (ke = At(I)),
          (Ie = At(T)),
          (Te = At(K)),
          (Ne = At(K)),
          (Le = At(f)),
          (ze = At(c)),
          (Ge = At(J)),
          (Me = At(c)),
          (Oe = At(p)),
          (Re = At([h])),
          (Ae = At([h])),
          (Ue = At(u)),
          (Fe = At(u)),
          (xe = At(String)),
          (De = At([u])),
          (We = At(String)),
          j(
            ((Ke = t(
              (Ze = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), l = 0;
                    l < n;
                    l++
                  )
                    o[l] = arguments[l];
                  return (
                    ((t =
                      e.call.apply(e, [this].concat(o)) ||
                      this).networkController = null),
                    i(t, "betEntries_node", Ke, r(t)),
                    (t.basebetEntries = []),
                    i(t, "lbl_displayname", qe, r(t)),
                    i(t, "lbl_money", Ye, r(t)),
                    i(t, "spr_avatar", Je, r(t)),
                    i(t, "sprFrame_avatar", $e, r(t)),
                    i(t, "lbl_sessionID", Xe, r(t)),
                    i(t, "lbl_time", je, r(t)),
                    i(t, "lbl_countdown", Qe, r(t)),
                    i(t, "webView", et, r(t)),
                    i(t, "webViewBg", tt, r(t)),
                    i(t, "streamSprite", nt, r(t)),
                    i(t, "screen_view", it, r(t)),
                    i(t, "loading_node", rt, r(t)),
                    i(t, "chipPanel", ot, r(t)),
                    i(t, "btn_exit", lt, r(t)),
                    i(t, "btn_tip", at, r(t)),
                    i(t, "btn_datlai", st, r(t)),
                    i(t, "btn_x2", ut, r(t)),
                    i(t, "btn_huongdan", ct, r(t)),
                    i(t, "btn_rank", pt, r(t)),
                    i(t, "btn_bet_history", ht, r(t)),
                    i(t, "btn_tip_rank", bt, r(t)),
                    i(t, "btn_cau_dealer", gt, r(t)),
                    i(t, "btn_gift", ft, r(t)),
                    i(t, "win_sfx", dt, r(t)),
                    i(t, "start_session_sfx", mt, r(t)),
                    i(t, "end_session_sfx", wt, r(t)),
                    i(t, "bgm_music", _t, r(t)),
                    i(t, "scrollViewInfoPopup", yt, r(t)),
                    i(t, "settingPopup", vt, r(t)),
                    i(t, "giftPopup", St, r(t)),
                    i(t, "liveStreamRankView", Bt, r(t)),
                    i(t, "liveStreamTipRankView", Pt, r(t)),
                    i(t, "noti", Ct, r(t)),
                    (t.userOnline = 0),
                    i(t, "lbl_userOnline", Et, r(t)),
                    i(t, "userOnlinePopup", Vt, r(t)),
                    i(t, "dealerName", kt, r(t)),
                    i(t, "spr_gifts", It, r(t)),
                    i(t, "sprFrame_gifts", Tt, r(t)),
                    i(t, "sprFrame_gifts2", Nt, r(t)),
                    i(t, "coverNode", Lt, r(t)),
                    i(t, "noticeNode", zt, r(t)),
                    i(t, "backgroundColor", Gt, r(t)),
                    (t.bgmVideoPlayer = null),
                    (t.isLoadedWebView = !1),
                    (t.sessionID = ""),
                    (t.gameState = Ut.BETTING),
                    (t.my_bet = []),
                    (t.current_count_down = 0),
                    (t.totalTimeBet = 35),
                    (t.stopBetSecond = 3),
                    (t.betValues = []),
                    i(t, "nodeUsingInEngineUpdated", Mt, r(t)),
                    (t.wvUITransform = null),
                    (t.isClosingGame = !1),
                    (t.isInterupt = !1),
                    (t.offScreenPos = new d(9999, 9999, 0)),
                    i(t, "gameBackgroundUrl", Ot, r(t)),
                    t
                  );
                }
                n(t, e);
                var o = t.prototype;
                return (
                  (o.isEngineUpdated = function () {
                    return (
                      a.isBrowser ||
                      (!!this.webView && this.webView.isFrontable)
                    );
                  }),
                  (o.getNetworkHandler = function () {
                    return this.networkController;
                  }),
                  (o.onLoad = function () {
                    var e,
                      t,
                      n,
                      i,
                      r,
                      o,
                      l,
                      u,
                      c,
                      p,
                      h,
                      b,
                      g,
                      f,
                      d,
                      S,
                      B,
                      P = this;
                    if (
                      (this.webView &&
                        (null == (e = this.streamSprite) ||
                          e.setWebview(this.webView)),
                      (this.wvUITransform =
                        null !=
                        (t =
                          null == (n = this.screen_view)
                            ? void 0
                            : n.getComponent(m))
                          ? t
                          : null),
                      a.isBrowser && (w.ENABLE_TRANSPARENT_CANVAS = !0),
                      (this.basebetEntries =
                        null !=
                        (i =
                          null == (r = this.betEntries_node)
                            ? void 0
                            : r.getComponentsInChildren(H))
                          ? i
                          : []),
                      G.on(M.ForceLogoutSockets, this, function () {
                        return P.releaseGame();
                      }),
                      a.isNative && this.moveWebViewOutOfScreen(),
                      this.webView &&
                        this.webView.setOnLoaded(function () {
                          P.onWebViewLoaded(P.webView);
                        }),
                      null != this.btn_cau_dealer &&
                        (this.btn_cau_dealer.node.active =
                          N.username.indexOf("dealer_789") >= 0 ||
                          "lavi002" == N.username),
                      null == (o = this.settingPopup) ||
                        o.setCallbackExitRoom(function () {
                          P.closeGame();
                        }),
                      null == (l = this.btn_exit) ||
                        l.node.on("click", function () {
                          var e;
                          null == (e = P.settingPopup) || e.show();
                        }),
                      null == (u = this.btn_huongdan) ||
                        u.node.on("click", function () {
                          var e, t;
                          null == (e = P.settingPopup) || e.close(),
                            null == (t = P.scrollViewInfoPopup) || t.show();
                        }),
                      null == (c = this.btn_bet_history) ||
                        c.node.on("click", function () {
                          var e;
                          null == (e = P.settingPopup) || e.close(),
                            P.getHistories();
                        }),
                      null == (p = this.btn_rank) ||
                        p.node.on("click", function () {
                          var e;
                          null == (e = P.settingPopup) || e.close(),
                            P.showRank();
                        }),
                      null == (h = this.liveStreamRankView) ||
                        h.setSpriteFrameGifts(this.sprFrame_gifts),
                      null == (b = this.liveStreamTipRankView) ||
                        b.setSpriteFrameGifts(this.sprFrame_gifts),
                      null == (g = this.btn_tip_rank) ||
                        g.node.on("click", function () {
                          var e;
                          null == (e = P.liveStreamRankView) || e.hide(),
                            P.showTipRank();
                        }),
                      null == (f = this.btn_datlai) ||
                        f.node.on("click", function () {
                          P.sendRebetMulti();
                        }),
                      null == (d = this.btn_x2) ||
                        d.node.on("click", function () {
                          P.sendRebetMulti(2);
                        }),
                      this.giftPopup &&
                        this.giftPopup.setCloseCb(function () {
                          var e, t;
                          null == (e = P.btn_gift) ||
                            null == (t = e.getComponent(_.Skeleton)) ||
                            t.setAnimation(0, "idle", !0),
                            P.changeGift();
                        }),
                      null == (S = this.btn_gift) ||
                        S.node.on("click", function () {
                          var e, t, n, i, r, o;
                          (null != (e = P.giftPopup) && e.isShowing()) ||
                            (null == (t = P.btn_gift) ||
                              null == (n = t.getComponent(_.Skeleton)) ||
                              n.setAnimation(0, "open", !1),
                            null == (i = P.btn_gift) ||
                              null == (r = i.getComponent(_.Skeleton)) ||
                              r.addAnimation(0, "opened_idle", !0),
                            null == (o = P.giftPopup) || o.show());
                        }),
                      null == (B = this.btn_tip) ||
                        B.node.on("click", function () {
                          P.sendTip();
                        }),
                      a.isBrowser &&
                        s.on("htmlCallBack", this.browserHtmlCallBack, this),
                      y.on(v.EVENT_HIDE, this.onHideGame, this),
                      y.on(v.EVENT_SHOW, this.onShowGame, this),
                      a.isBrowser)
                    ) {
                      var C = document.getElementById("spinner");
                      C && (C.style.display = "none"),
                        document.body.addEventListener("click", function () {
                          var e = !z.IS_CAN_PLAY_BGM;
                          (z.IS_CAN_PLAY_BGM = !0), e && P.playBgm();
                        }),
                        O.isWebMobile() && (z.IS_CAN_PLAY_BGM = !0);
                    }
                    R.getInstance().node.setSiblingIndex(
                      this.node.getSiblingIndex() + 1
                    );
                  }),
                  (o.start = function () {
                    var e = this;
                    this.initUI(),
                      this.scheduleOnce(function () {
                        a.isNative && a.os == a.OS.IOS
                          ? (z.getInstance().stopBgm(), e.createBgmPlayer())
                          : (z
                              .getInstance()
                              .setBgmVolume(
                                z.getInstance().isEnableBGM() ? 1 : 0
                              ),
                            z.getInstance().playBgm(e.bgm_music));
                      }, 1),
                      console.log("=== Kay Log ===", this.isEngineUpdated()),
                      this.isEngineUpdated()
                        ? this.nodeUsingInEngineUpdated.forEach(function (e) {
                            return (e.active = !0);
                          })
                        : this.webViewBg &&
                          (this.webViewBg.cleanUpWebview(!0),
                          (this.webViewBg = null)),
                      this.basebetEntries.forEach(function (t) {
                        return t.setOnBetCallBack(e.sendBet.bind(e));
                      }),
                      this.webViewBg &&
                        (this.webViewBg.url = this.getBackgroundUrl()),
                      this.connectToServer();
                  }),
                  (o.getNetworkController = function () {
                    return this.networkController;
                  }),
                  (o.isHasBetCache = function () {
                    var e = 0;
                    return (
                      this.my_bet.forEach(function (t) {
                        e += t;
                      }),
                      e > 0
                    );
                  }),
                  (o.refreshMoney = function (e) {
                    this.lbl_money &&
                      (this.lbl_money.string = L.formatNumber(e));
                  }),
                  (o.playBgm = function () {
                    z.getInstance().playBgm(this.bgm_music);
                  }),
                  (o.createBgmPlayer = function () {
                    var e = this;
                    if (
                      (this.destroyBgmPlayer(), a.isNative && a.os == a.OS.IOS)
                    ) {
                      var t;
                      (this.bgmVideoPlayer = new u().addComponent(S)),
                        null ==
                          (t = this.bgmVideoPlayer.node.getComponent(m)) ||
                          t.setContentSize(0, 0),
                        this.node.addChild(this.bgmVideoPlayer.node);
                      var n = localStorage.getItem("X_GAME_CONFIG"),
                        i =
                          JSON.parse(null != n ? n : "")[A.RsStaticDomain] +
                          this.getBGMVideoURL();
                      (this.bgmVideoPlayer.enabled = !0),
                        (this.bgmVideoPlayer.resourceType =
                          S.ResourceType.REMOTE),
                        (this.bgmVideoPlayer.remoteURL = i),
                        (this.bgmVideoPlayer.loop = !1),
                        (this.bgmVideoPlayer.mute = !1),
                        (this.bgmVideoPlayer.playOnAwake = !1),
                        (this.bgmVideoPlayer.volume = 0.075);
                      var r = new B();
                      (r.target = this.node),
                        (r.component = this.getComponentName()),
                        (r.handler = "onBGMVideoEventType"),
                        this.bgmVideoPlayer.videoPlayerEvent.push(r),
                        z.getInstance().isEnableBGM() &&
                          this.bgmVideoPlayer.play(),
                        G.on(M.MusicToggle, this, function (t) {
                          e.onBGMToggled(t);
                        });
                    }
                  }),
                  (o.destroyBgmPlayer = function () {
                    var e, t;
                    a.isNative && a.os == a.OS.IOS
                      ? (G.off(this, M.MusicToggle),
                        this.bgmVideoPlayer &&
                          (this.bgmVideoPlayer.node.destroy(),
                          this.bgmVideoPlayer.destroy(),
                          this.bgmVideoPlayer.node.removeFromParent()))
                      : (null == (e = this.streamSprite) || e.stopRender(),
                        null == (t = this.streamSprite) || t.removeTexture());
                  }),
                  (o.onLoadedVideo = function () {
                    var e, t;
                    this.noticeNode && (this.noticeNode.active = !0),
                      null == (e = this.streamSprite) || e.render(),
                      null == (t = this.streamSprite) || t.initVideoElement();
                  }),
                  (o.onVideoUnmute = function () {
                    a.browserType != a.BrowserType.SAFARI &&
                      this.unMuteHtmlCallBack();
                  }),
                  (o.unMuteHtmlCallBack = function () {
                    this.webView && (this.webView.node.active = !1);
                  }),
                  (o.onBGMToggled = function (e) {
                    this.bgmVideoPlayer &&
                      (e
                        ? this.bgmVideoPlayer.play()
                        : this.bgmVideoPlayer.pause());
                  }),
                  (o.changeGift = function () {
                    if (this.giftPopup && this.spr_gifts) {
                      var e;
                      if (!this.giftPopup) return;
                      var t = this.giftPopup.getCurrentTipIndex();
                      if (t < 0 || t >= this.sprFrame_gifts.length) return;
                      if (t >= this.sprFrame_gifts2.length) return;
                      var n = this.sprFrame_gifts2[t];
                      n && this.spr_gifts && (this.spr_gifts.spriteFrame = n),
                        null == (e = this.spr_gifts.getComponent(Z)) ||
                          e.runOnce(1);
                    }
                  }),
                  (o.cleanUpWebview = function (e) {
                    void 0 === e && (e = !1),
                      this.loading_node && (this.loading_node.active = !0),
                      this.webView &&
                        ((this.isLoadedWebView = !1),
                        (this.webView.node.active = !1),
                        (this.webView.url = ""),
                        a.isNative &&
                          (this.webView.setJavascriptInterfaceScheme(""),
                          this.webView.setOnJSCallback(function () {})),
                        e && (this.webView.destroy(), (this.webView = null)));
                  }),
                  (o.sendTip = function () {
                    var e;
                    if (null != this.giftPopup) {
                      var t = {};
                      (t.cmd = U.SEND_TIP),
                        (t.m = this.giftPopup.getCurrentTipAmount()),
                        (t.sid = this.sessionID),
                        null == (e = this.networkController) ||
                          e.sendWithZoneAndChannel(x.ZonePlugin_Type, t);
                    }
                  }),
                  (o.checkConnection = function (e) {
                    var t = this;
                    P.stopAllByTarget(this.node),
                      C(this.node)
                        .delay(2)
                        .call(function () {
                          var n;
                          null == (n = t.networkController) || n.sendPing(e);
                        })
                        .delay(5)
                        .call(function () {
                          var e;
                          null == (e = t.networkController) || e.reconnect();
                        })
                        .start();
                  }),
                  (o.stopCheckConnection = function () {
                    P.stopAllByTarget(this.node);
                  }),
                  (o.onSocketConnected = function () {
                    var e;
                    null == (e = this.networkController) || e.subcribe();
                  }),
                  (o.onBGMVideoEventType = function (e, t) {
                    var n = this;
                    switch (t) {
                      case S.EventType.COMPLETED:
                        this.scheduleOnce(function () {
                          n.bgmVideoPlayer &&
                            ((n.bgmVideoPlayer.currentTime = 0),
                            n.bgmVideoPlayer.play());
                        }, 0.1);
                    }
                  }),
                  (o.resetUI = function () {
                    this.basebetEntries.forEach(function (e) {
                      return e.reset();
                    });
                  }),
                  (o.onSubcription = function () {
                    0 == this.isLoadedWebView &&
                      this.webView &&
                      this.webView.url.length <= 0 &&
                      this.loadLiveVideo();
                  }),
                  (o.onHideGame = function () {
                    (this.isInterupt = !0),
                      this.cleanUpWebview(),
                      this.destroyBgmPlayer();
                  }),
                  (o.onShowGame = function () {
                    var e;
                    (this.isInterupt = !1),
                      N.isLoggedInOtherDevice
                        ? R.getInstance().hideLoading()
                        : this.isClosingGame ||
                          (null == (e = this.networkController) ||
                            e.reconnect(),
                          this.createBgmPlayer());
                  }),
                  (o.isEndBet = function () {
                    return this.gameState !== Ut.BETTING;
                  }),
                  (o.sendBet = function (e, t) {
                    var n;
                    if (null != this.chipPanel)
                      if (this.isEndBet()) this.showMessage("Ngưng đặt cược!");
                      else if (this.chipPanel.getSelectedBetValue() > N.gold)
                        this.showMessage("Không đủ tiền để cược!");
                      else {
                        var i = {};
                        (i.cmd = U.BET),
                          (i.b = this.chipPanel.getSelectedBetValue()),
                          (i.eid = e),
                          (i.sid = this.sessionID),
                          null == (n = this.networkController) ||
                            n.sendWithZoneAndChannel(x.ZonePlugin_Type, i);
                      }
                  }),
                  (o.sendRebetMulti = function (e) {
                    var t,
                      n = this;
                    if ((void 0 === e && (e = 1), this.isEndBet()))
                      this.showMessage("Ngưng đặt cược");
                    else {
                      var i = [],
                        r = 0;
                      if (
                        (this.my_bet.forEach(function (t, o) {
                          if (t > 0) {
                            var l,
                              a = {},
                              s =
                                null == (l = n.basebetEntries[o])
                                  ? void 0
                                  : l.getName();
                            (a.b = t * e), (r += t * e), (a.eid = s), i.push(a);
                          }
                        }),
                        r > N.gold)
                      )
                        this.showMessage("Không đủ tiền để cược!");
                      else {
                        var o = {};
                        (o.cmd = U.BET_MULTI),
                          (o.bs = i),
                          (o.sid = this.sessionID),
                          null == (t = this.networkController) ||
                            t.sendWithZoneAndChannel(x.ZonePlugin_Type, o);
                      }
                    }
                  }),
                  (o.updateUserBetInfo = function (e) {
                    var t = this;
                    this.basebetEntries.forEach(function (e) {
                      e.setCurrentBet(0);
                    }),
                      e.forEach(function (e) {
                        var n = e.eid,
                          i = e.v,
                          r = t.basebetEntries.find(function (e) {
                            return e.getName() == n;
                          });
                        r && r.setCurrentBet(i);
                      }),
                      this.assignDataToWV();
                  }),
                  (o.updateBetInfo = function (e) {
                    var t = this;
                    e.bs.forEach(function (e) {
                      var n = e.eid,
                        i = e.v,
                        r = e.uC,
                        o = t.basebetEntries
                          .map(function (e) {
                            return e;
                          })
                          .find(function (e) {
                            return e.getName() == n;
                          });
                      i != o.getTotalBet() && t.updateBetInfoAnim(),
                        null == o || o.updateBetInfo(i, r);
                    }),
                      this.lbl_userOnline &&
                        (this.lbl_userOnline.string = "" + e.uC);
                  }),
                  (o.getUserOnline = function () {
                    return this.userOnline;
                  }),
                  (o.updateBetInfoAnim = function () {}),
                  (o.resetCountDownAndFx = function () {
                    this.cancelLastXiNgauFx(),
                      this.lbl_countdown &&
                        (P.stopAllByTarget(this.lbl_countdown),
                        (this.current_count_down = 0),
                        (this.lbl_countdown.string =
                          (this.current_count_down < 10 ? "0" : "") +
                          this.current_count_down.toString()));
                  }),
                  (o.waitingForResult = function () {
                    (this.gameState = Ut.RESULTING), this.resetCountDownAndFx();
                  }),
                  (o.showRank = function () {
                    var e,
                      t = {};
                    (t.cmd = U.FETCH_TOP),
                      (t.t = "BET"),
                      null == (e = this.networkController) ||
                        e.sendWithZoneAndChannel(x.ZonePlugin_Type, t);
                  }),
                  (o.showTipRank = function () {
                    var e,
                      t = {};
                    (t.cmd = U.FETCH_TOP),
                      (t.t = "TIP"),
                      null == (e = this.networkController) ||
                        e.sendWithZoneAndChannel(x.ZonePlugin_Type, t);
                  }),
                  (o.handleMessage = function (e) {
                    var t = this,
                      n = JSON.parse(e),
                      i = n[0],
                      r = n[1],
                      o = r.cmd;
                    switch (i) {
                      case D.LogIn_Response:
                        if (n[1])
                          this.onSocketConnected(), this.checkConnection(1);
                        else {
                          var l = n[5];
                          (!l || l.length <= 0) &&
                            (l = "Lỗi kết nối đến máy chủ."),
                            R.getInstance().showErrorPopup(l, function () {
                              t.closeGame();
                            });
                        }
                        break;
                      case D.LogOut_Response:
                        var a = n[2],
                          s = "";
                        2 == a
                          ? (s = "Bạn bị mời ra khỏi hệ thống!")
                          : 4 == a &&
                            (s = "Bạn đã đăng nhập trên thiết bị khác!"),
                          setTimeout(function () {
                            R.getInstance().showCommonPopup(s, function () {
                              t.closeGame();
                            });
                          }, 500);
                        break;
                      case D.JoinRoom_Response:
                      case D.LeaveRoom_Response:
                      case D.Ping_Response:
                        var u = n[1];
                        this.checkConnection(u);
                        break;
                      case D.Extension_Response:
                        if (o == U.SUBSCRIBE_INFO)
                          this.onSubcription(), this.setGameState(n);
                        else if (o == U.UPDATE_SESSION_INFO) {
                          var c = r.msg,
                            p = r.m;
                          this.showMessage(c),
                            (N.gold = p),
                            this.refreshMoney(N.gold);
                        } else if (o == U.UPDATE_BET_INFO)
                          this.updateBetInfo(r);
                        else if (o == U.START_GAME) this.startGame(r);
                        else if (o == U.FINISH) this.finishGame(r);
                        else if (o == U.BET) {
                          var h, b;
                          null != (h = this.btn_datlai) &&
                            h.interactable &&
                            null != (b = this.btn_x2) &&
                            b.interactable &&
                            ((this.btn_datlai.interactable = !1),
                            (this.btn_x2.interactable = !1),
                            (this.my_bet = [
                              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                              0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                            ])),
                            this.updateCurrentBet(r);
                          var g = r.m;
                          (null == g && null == g) ||
                            ((N.gold = g), this.refreshMoney(N.gold));
                        } else if (o == U.SEND_TIP) {
                          var f = r.m,
                            d = "Bạn Đã Tặng " + r.dn + " " + q.TIP_ITEM_KEY[f];
                          this.showMessage(d);
                          var m = r.ba;
                          (null == m && null == m) ||
                            ((N.gold = m), this.refreshMoney(N.gold));
                        } else if (o == W.ERROR_MESSAGE) {
                          var w, _;
                          if (
                            (null != r.mgs && null != r.mgs && (w = r.mgs),
                            null != r.c && null != r.c && (_ = r.c),
                            _ == F.CANNOT_ACCESS)
                          ) {
                            var y =
                              w.length > 0
                                ? w
                                : "Bạn không được quyền truy cập game";
                            return void R.getInstance().showErrorPopup(
                              y,
                              function () {
                                t.closeGame();
                              }
                            );
                          }
                          if ("Insufficient amount" == w)
                            return void this.showMessage("Số dư không đủ");
                          if (w.length > 0 && "Cược không hợp lệ" != w)
                            return void this.showMessage(w);
                        } else if (o == U.USER_ONLINE) {
                          var v = r.ps,
                            S = [];
                          if (this.userOnlinePopup) {
                            for (var B = 0; B < v.length; B++) {
                              var P = v[B],
                                C = P.m,
                                E = P.dN,
                                V = P.uid,
                                k = P.a
                                  .replace(/([a-zA-Z])(\d+)/g, "$1_$2")
                                  .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
                                  .toLowerCase(),
                                I = new $();
                              (I.displayName = E),
                                (I.gold = C),
                                (I.avatarURL = k),
                                (I.uid = V),
                                S.push(I);
                            }
                            this.userOnlinePopup.changeUserOnline(S);
                          }
                        } else this.controllerHandleMessage(o, r, n);
                    }
                  }),
                  (o.moveWebViewOutOfScreen = function () {
                    this.webView &&
                      this.webView.node.setPosition(this.offScreenPos),
                      this.isLoadedWebView &&
                        this.loading_node &&
                        (this.loading_node.active = !0);
                  }),
                  (o.moveWebViewIntoScreen = function () {
                    this.webView &&
                      this.screen_view &&
                      this.webView.node.setPosition(
                        this.screen_view.getPosition()
                      ),
                      this.isLoadedWebView &&
                        this.loading_node &&
                        (this.loading_node.active = !1);
                  }),
                  (o.updateUserInfoUI = function () {
                    var e;
                    this.lbl_money &&
                      (this.lbl_money.string = L.formatNumber(N.gold)),
                      this.lbl_displayname &&
                        (this.lbl_displayname.string = L.shortenName(
                          N.displayName
                        ));
                    var t = N.avatarURL.split("/"),
                      n = t[t.length - 1];
                    if (n && this.sprFrame_avatar) {
                      var i = this.sprFrame_avatar.filter(function (e) {
                        return n.indexOf(e.name) >= 0;
                      });
                      this.spr_avatar &&
                        i &&
                        (this.spr_avatar.spriteFrame =
                          null !=
                          (e =
                            i.length > 0
                              ? i[0]
                              : i[this.sprFrame_avatar.length - 1])
                            ? e
                            : this.spr_avatar.spriteFrame);
                    }
                  }),
                  (o.initTransparentCanvas = function () {
                    var e;
                    this.isEngineUpdated() &&
                      (null == (e = this.webView) || e.bringGameToFront()),
                      a.isBrowser && this.addBackgroundColorDiv();
                  }),
                  (o.addBackgroundColorDiv = function () {
                    var e = document.querySelector("#ccGameBg");
                    if (!e) {
                      ((e = document.createElement("div")).id = "ccGameBg"),
                        (e.style.position = "absolute"),
                        (e.style.top = "0px"),
                        (e.style.left = "0px"),
                        (e.style.width = "100%"),
                        (e.style.height = "100%"),
                        (e.style.zIndex = "3"),
                        (e.style.pointerEvents = "none"),
                        (e.style.backgroundSize = "100% 100%"),
                        (e.style.backgroundRepeat = "no-repeat");
                      var t = document.getElementById("Cocos3dGameContainer");
                      t && t.appendChild(e);
                    }
                    if (
                      ((e.style.display = "block"),
                      this.gameBackgroundUrl.length > 0)
                    ) {
                      var n = "";
                      (n =
                        window.location.origin.indexOf("localhost") > -1
                          ? "https://resources.gwin.info/sun-dev-kay/live/"
                          : window.location.href),
                        (e.style.backgroundImage =
                          "url(" + n + this.gameBackgroundUrl + ")");
                    } else e.style.backgroundColor = this.backgroundColor;
                  }),
                  (o.endTransparentCanvas = function () {
                    a.isBrowser && (w.ENABLE_TRANSPARENT_CANVAS = !1);
                    var e = document.querySelector("#GameCanvas"),
                      t = document.getElementById("webview-wrapper");
                    e &&
                      t &&
                      ((e.style.zIndex = ""),
                      (e.style.position = ""),
                      (t.style.zIndex = "")),
                      Y.uninit();
                    var n = document.querySelector("#ccGameBg");
                    n && (n.style.display = "none");
                  }),
                  (o.onDestroy = function () {
                    a.isBrowser &&
                      s.off("htmlCallBack", this.browserHtmlCallBack, this);
                  }),
                  t
                );
              })(E)).prototype,
              "betEntries_node",
              [Q],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (qe = t(Ze.prototype, "lbl_displayname", [ee], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ye = t(Ze.prototype, "lbl_money", [te], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Je = t(Ze.prototype, "spr_avatar", [ne], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($e = t(Ze.prototype, "sprFrame_avatar", [ie], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Xe = t(Ze.prototype, "lbl_sessionID", [re], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (je = t(Ze.prototype, "lbl_time", [oe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Qe = t(Ze.prototype, "lbl_countdown", [le], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (et = t(Ze.prototype, "webView", [ae], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (tt = t(Ze.prototype, "webViewBg", [se], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (nt = t(Ze.prototype, "streamSprite", [ue], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (it = t(Ze.prototype, "screen_view", [ce], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (rt = t(Ze.prototype, "loading_node", [pe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ot = t(Ze.prototype, "chipPanel", [he], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (lt = t(Ze.prototype, "btn_exit", [be], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (at = t(Ze.prototype, "btn_tip", [ge], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (st = t(Ze.prototype, "btn_datlai", [fe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ut = t(Ze.prototype, "btn_x2", [de], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ct = t(Ze.prototype, "btn_huongdan", [me], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (pt = t(Ze.prototype, "btn_rank", [we], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ht = t(Ze.prototype, "btn_bet_history", [_e], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (bt = t(Ze.prototype, "btn_tip_rank", [ye], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (gt = t(Ze.prototype, "btn_cau_dealer", [ve], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ft = t(Ze.prototype, "btn_gift", [Se], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (dt = t(Ze.prototype, "win_sfx", [Be], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (mt = t(Ze.prototype, "start_session_sfx", [Pe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (wt = t(Ze.prototype, "end_session_sfx", [Ce], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_t = t(Ze.prototype, "bgm_music", [Ee], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (yt = t(Ze.prototype, "scrollViewInfoPopup", [Ve], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (vt = t(Ze.prototype, "settingPopup", [ke], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (St = t(Ze.prototype, "giftPopup", [Ie], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Bt = t(Ze.prototype, "liveStreamRankView", [Te], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pt = t(Ze.prototype, "liveStreamTipRankView", [Ne], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ct = t(Ze.prototype, "noti", [Le], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Et = t(Ze.prototype, "lbl_userOnline", [ze], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Vt = t(Ze.prototype, "userOnlinePopup", [Ge], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (kt = t(Ze.prototype, "dealerName", [Me], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (It = t(Ze.prototype, "spr_gifts", [Oe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Tt = t(Ze.prototype, "sprFrame_gifts", [Re], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Nt = t(Ze.prototype, "sprFrame_gifts2", [Ae], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Lt = t(Ze.prototype, "coverNode", [Ue], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (zt = t(Ze.prototype, "noticeNode", [Fe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Gt = t(Ze.prototype, "backgroundColor", [xe], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "#000000";
              },
            })),
            (Mt = t(Ze.prototype, "nodeUsingInEngineUpdated", [De], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Ot = t(Ze.prototype, "gameBackgroundUrl", [We], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (He = Ze))
          ) || He)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BaseLiveStreamNetworkController.ts",
  [
    "cc",
    "./SocketManager.ts",
    "./State.ts",
    "./GamePlatformManager.ts",
    "./PersistManager.ts",
  ],
  function (e) {
    "use strict";
    var n, t, s, i, o, r, a, c;
    return {
      setters: [
        function (e) {
          (n = e.cclegacy), (t = e.sys), (s = e.url), (i = e.log);
        },
        function (e) {
          o = e.MessageRequest;
        },
        function (e) {
          r = e.state;
        },
        function (e) {
          a = e.GamePlatformManager;
        },
        function (e) {
          c = e.PersistManager;
        },
      ],
      execute: function () {
        var S, T;
        e({ LiveStreamErrorCode: void 0, LiveStreamMessage: void 0 }),
          n._RF.push(
            {},
            "c8c6dkJFtpN+7g/CZfiK5Af",
            "BaseLiveStreamNetworkController",
            void 0
          ),
          (function (e) {
            (e[(e.SUBSCRIBE_INFO = 1950)] = "SUBSCRIBE_INFO"),
              (e[(e.UNSUBSCRIBE_INFO = 1951)] = "UNSUBSCRIBE_INFO"),
              (e[(e.BET = 1952)] = "BET"),
              (e[(e.BET_MULTI = 1953)] = "BET_MULTI"),
              (e[(e.GET_BET_HISTORY = 1954)] = "GET_BET_HISTORY"),
              (e[(e.START_GAME = 1955)] = "START_GAME"),
              (e[(e.UPDATE_BET_INFO = 1957)] = "UPDATE_BET_INFO"),
              (e[(e.FINISH = 1956)] = "FINISH"),
              (e[(e.UPDATE_BETTING = 1957)] = "UPDATE_BETTING"),
              (e[(e.CHAT = 1958)] = "CHAT"),
              (e[(e.FETCH_CHAT_HISTORY = 1959)] = "FETCH_CHAT_HISTORY"),
              (e[(e.FETCH_TOP = 1960)] = "FETCH_TOP"),
              (e[(e.SEND_TIP = 1961)] = "SEND_TIP"),
              (e[(e.SLOTMACHINE_RESULT = 1962)] = "SLOTMACHINE_RESULT"),
              (e[(e.FETCH_JP_HISTORY = 1963)] = "FETCH_JP_HISTORY"),
              (e[(e.UPDATE_SESSION_INFO = 1964)] = "UPDATE_SESSION_INFO"),
              (e[(e.SESSION_ANALYTIC = 1965)] = "SESSION_ANALYTIC"),
              (e[(e.USER_ONLINE = 1968)] = "USER_ONLINE"),
              (e[(e.TOTAL_USER_ONLINE = 1967)] = "TOTAL_USER_ONLINE");
          })(S || (S = e("LiveStreamMessage", {}))),
          (function (e) {
            e[(e.CANNOT_ACCESS = 1954)] = "CANNOT_ACCESS";
          })(T || (T = e("LiveStreamErrorCode", {})));
        e(
          "BaseLiveStreamNetworkController",
          (function () {
            function e(e) {
              (this.ws = null),
                (this.wsURL = ""),
                (this.liveStreamController = null),
                (this.liveStreamController = e);
            }
            var n = e.prototype;
            return (
              (n.getWebSocket = function () {
                return this.ws;
              }),
              (n.init = function (e) {
                var n = this;
                null != this.ws && this.close();
                try {
                  t.Platform.ANDROID === t.platform
                    ? (this.ws = new WebSocket(
                        e,
                        null,
                        s.raw("resources/cacert.pem")
                      ))
                    : (this.ws = new WebSocket(e)),
                    (this.wsURL = e);
                } catch (e) {
                  i(this.getLogPrefix() + "::exception", e);
                }
                this.ws &&
                  ((this.ws.onopen = function (t) {
                    i(n.getLogPrefix() + "::Connected to game server " + e);
                    var s,
                      c = {};
                    (c.info = r.loginInfo),
                      (c.signature = r.signature),
                      (c.pid = a.getPlatformID()),
                      (c.subi = !0),
                      (s = [
                        o.LogIn_Type,
                        n.getChannel(),
                        r.username,
                        r.password,
                        c,
                      ]),
                      n.send(s);
                  }),
                  (this.ws.onmessage = function (e) {
                    var t;
                    null == (t = n.liveStreamController) ||
                      t.handleMessage(e.data);
                  }),
                  (this.ws.onerror = function (e) {
                    i(n.getLogPrefix() + "::Send Text fired an error", e),
                      c.getInstance().hideLoading(),
                      n.reconnect();
                  }),
                  (this.ws.onclose = function (e) {
                    i(n.getLogPrefix() + "::WebSocket instance closed. 1"),
                      c.getInstance().hideLoading(),
                      n.reconnect();
                  }));
              }),
              (n.close = function () {
                this.ws &&
                  (this.ws && this.ws.close(),
                  (this.ws.onopen = null),
                  (this.ws.onmessage = null),
                  (this.ws.onerror = null),
                  (this.ws.onclose = null),
                  (this.ws = null));
              }),
              (n.reconnect = function () {
                c.getInstance().showLoading(), this.init(this.wsURL);
              }),
              (n.subcribe = function () {
                var e = {};
                (e.cmd = S.SUBSCRIBE_INFO),
                  this.sendWithZoneAndChannel(o.ZonePlugin_Type, e);
              }),
              (n.unsubcribe = function () {
                var e = {};
                (e.cmd = S.UNSUBSCRIBE_INFO),
                  this.sendWithZoneAndChannel(o.ZonePlugin_Type, e);
              }),
              (n.sendPing = function (e) {
                void 0 === e && (e = 0);
                var n = e + 1,
                  t = [o.Ping_Type, "Simms", n, 0];
                this.send(t);
              }),
              (n.sendWithZoneAndChannel = function (e, n) {
                var t = [e, this.getChannel(), this.getPluginName(), n];
                this.send(t);
              }),
              (n.send = function (e) {
                try {
                  this.ws && this.ws.send(JSON.stringify(e));
                } catch (e) {}
              }),
              e
            );
          })()
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CustomWebView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, i, n, r, o, s, a, c, u, l, h, f, m, g, d, p, b, w, v;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (r = t.assertThisInitialized),
            (o = t.extends),
            (s = t.createClass),
            (a = t.asyncToGenerator),
            (c = t.regeneratorRuntime);
        },
        function (t) {
          (u = t.cclegacy),
            (l = t._decorator),
            (h = t.Node),
            (f = t.Asset),
            (m = t.Camera),
            (g = t.sys),
            (d = t.macro),
            (p = t.v3),
            (b = t.Component),
            (w = t.Color),
            (v = t.WebView);
        },
      ],
      execute: function () {
        var y, S, B, _, E, k, R, T, A, O, P, F, I, N, x, C, U, M, L, z, D;
        u._RF.push({}, "a6d26mu4tBPoIH6cGklJweN", "CustomWebView", void 0);
        var W = l,
          V = b,
          J = h,
          G = w,
          Z = f,
          j = f,
          H = v,
          K = m,
          q = g,
          $ = d;
        var Q = new ((function () {
            function t() {}
            return (
              s(t, [
                {
                  key: "Platform_ANDROID",
                  get: function () {
                    return q.Platform.ANDROID;
                  },
                },
                {
                  key: "Platform_DESKTOP_BROWSER",
                  get: function () {
                    return q.Platform.DESKTOP_BROWSER;
                  },
                },
                {
                  key: "Platform_MOBILE_BROWSER",
                  get: function () {
                    return q.Platform.MOBILE_BROWSER;
                  },
                },
                {
                  key: "isPreview",
                  get: function () {
                    return !1;
                  },
                },
                {
                  key: "isEditor",
                  get: function () {
                    return !1;
                  },
                },
              ]),
              t
            );
          })())(),
          X = W.ccclass,
          Y = W.property,
          tt = "4",
          et = "6",
          it = "7",
          nt = "8";
        q.isBrowser &&
          (($.ENABLE_TRANSPARENT_CANVAS = !0),
          console.log(
            "ENABLE_TRANSPARENT_CANVAS",
            $.ENABLE_TRANSPARENT_CANVAS
          ));
        var rt = t(
          "CustomWebView",
          ((y = X("CustomWebView")),
          (S = Y(K)),
          (B = Y(J)),
          (_ = Y(Z)),
          (E = Y(j)),
          y(
            (((D = (function (t) {
              function e() {
                for (
                  var e, i = arguments.length, o = new Array(i), s = 0;
                  s < i;
                  s++
                )
                  o[s] = arguments[s];
                return (
                  (e = t.call.apply(t, [this].concat(o)) || this),
                  n(e, "camera", T, r(e)),
                  n(e, "wannaFront", A, r(e)),
                  n(e, "initTouch", O, r(e)),
                  n(e, "initScroll", P, r(e)),
                  n(e, "initPinch", F, r(e)),
                  n(e, "isBackground", I, r(e)),
                  n(e, "background", N, r(e)),
                  n(e, "scheme", x, r(e)),
                  n(e, "webUrl", C, r(e)),
                  n(e, "script", U, r(e)),
                  n(e, "scriptUrl", M, r(e)),
                  n(e, "image", L, r(e)),
                  n(e, "imageUrl", z, r(e)),
                  (e.safeStringify = function (t, e) {
                    void 0 === e && (e = 2);
                    var i = new WeakSet();
                    return JSON.stringify(
                      t,
                      function (t, e) {
                        if ("object" == typeof e && null !== e) {
                          if (i.has(e)) return "[CIRCULAR]";
                          i.add(e);
                        }
                        return e;
                      },
                      e
                    );
                  }),
                  (e._stateBrowser = { touch: !0, scroll: !0, pinch: !0 }),
                  (e._isFrontBrowser = !0),
                  (e._onLoaded = void 0),
                  (e._onVideoReady = void 0),
                  (e._onMessage = void 0),
                  (e._isAutoUnmute = !1),
                  e
                );
              }
              i(e, t);
              var u = e.prototype;
              return (
                (u.onLoad = function () {
                  0 == this.isFrontable &&
                    this.isBackground &&
                    this.cleanUpWebview(!0),
                    e.list.push(this),
                    this.onLoadJsHtml(),
                    q.isBrowser &&
                      (this.camera && (this.camera.clearColor = G.TRANSPARENT),
                      q.isBrowser && this.initBrowser(),
                      this.isBackground &&
                        this.background &&
                        ((this.background.active = !0), e.updateZIndex()),
                      (this.customState = {
                        bringToFront: this.wannaFront,
                        touch: this.initTouch,
                        scroll: this.initScroll,
                        pinch: this.initPinch,
                      }));
                }),
                (u.onDestroy = function () {
                  var i = this;
                  t.prototype.onDestroy.call(this),
                    (e.list = e.list.filter(function (t) {
                      return t !== i;
                    })),
                    this.cleanUpWebview(!0);
                }),
                (e.isGameFrontEnable = function (t) {
                  return void 0 !== t.customState.gameFront;
                }),
                (e.isGameFront = function (t) {
                  return !0 === t.customState.gameFront;
                }),
                (e.bringGameToFront = function (t) {
                  t.customState = { gameToFront: !0 };
                }),
                (e.updateZIndex = function () {
                  var t = this.list[0];
                  t && t.bringGameToFront(),
                    this.list.forEach(function (t) {
                      t.wannaFront && t.bringToFront();
                    });
                }),
                (u.bringGameToFront = function () {
                  e.bringGameToFront(this);
                }),
                (u.bringToFront = function () {
                  this.customState = { bringToFront: !0 };
                }),
                (u.setTouch = function (t) {
                  this.isTouch = t;
                }),
                (u.setScroll = function (t) {
                  this.isScroll = t;
                }),
                (u.setPinch = function (t) {
                  this.isPinch = t;
                }),
                (u.initBrowser = function () {
                  if (!e._initBrowser) {
                    e._initBrowser = !0;
                    var t = document.getElementById("GameCanvas");
                    t &&
                      ((t.style.backgroundColor = "rgba(0, 0, 0, 0)"),
                      (t.style.zIndex = et),
                      (t.style.position = "relative"));
                  }
                }),
                (e.uninit = function () {
                  e._initBrowser = !1;
                }),
                (u.getStateBrowser = function () {
                  return o({}, this._stateBrowser, {
                    gameFront: e.list.every(function (t) {
                      return !1 === t._isFrontBrowser;
                    }),
                    frontEnable: !0,
                  });
                }),
                (u.setStateBrowser = function (t) {
                  var i = this,
                    n = t.gameToFront,
                    r = t.bringToFront;
                  t.touch, t.scroll, t.pinch;
                  n &&
                    (e.list.forEach(function (t) {
                      return t.bringToBackBrowser();
                    }),
                    this.fixEditBoxesBrowser()),
                    r &&
                      ((this._isFrontBrowser = !0),
                      this.schedule(
                        function () {
                          i.setZIndexBrowser(it);
                        },
                        0.1,
                        d.REPEAT_FOREVER,
                        0
                      ),
                      this.fixEditBoxesBrowser());
                }),
                (u.setZIndexBrowser = function (t) {
                  var e = this.getIframeBrowser();
                  e &&
                    e.style &&
                    ((e.style.zIndex = t), this.unscheduleAllCallbacks());
                }),
                (u.getIframeBrowser = function () {
                  return (
                    this.impl &&
                    (this.impl._iframe || this.impl._webview.parentElement)
                  );
                }),
                (u.bringToBackBrowser = function () {
                  (this._isFrontBrowser = !1), this.setZIndexBrowser(tt);
                }),
                (u.fixEditBoxesBrowser = function () {
                  (
                    document.querySelectorAll('[id^="EditBoxId_"]') || []
                  ).forEach(function (t) {
                    return (t.style.zIndex = nt);
                  });
                }),
                (e.onMessageBrowser = function (t) {
                  "string" == typeof t &&
                    e.list.forEach(function (e) {
                      if (0 === t.indexOf(e.scheme)) {
                        var i = t.substring(e.scheme.length);
                        e.onMessage(i);
                      }
                    });
                }),
                (u.setOnLoaded = function (t) {
                  this._onLoaded = t;
                }),
                (u.setOnVideoReady = function (t) {
                  this._onVideoReady = t;
                }),
                (u.setOnMessage = function (t) {
                  this._onMessage = t;
                }),
                (u.getScheme = function () {
                  if (!this.scheme) {
                    for (
                      var t = "abcdefghijklmnopqrstuvwxyz",
                        e = "",
                        i = t.length,
                        n = 0;
                      n < 10;
                      n++
                    )
                      e += t.charAt(Math.floor(Math.random() * i));
                    this.scheme = e;
                  }
                  return this.scheme;
                }),
                (u.getUrl = function (t, e) {
                  var i = this.webUrl,
                    n = (e && e.nativeUrl) || "";
                  return Q.isPreview
                    ? window.location.origin + "/" + n
                    : q.isBrowser
                    ? n
                    : i + t;
                }),
                (u.webviewCallback = function (t, i, n) {
                  var r = this;
                  this.url.length > 0 &&
                    i === H.EventType.LOADED &&
                    (q.isNative &&
                      (this.setJavascriptInterfaceScheme(this.getScheme()),
                      this.setOnJSCallback(function (t, e) {
                        var i = r.getScheme() + "://";
                        if (
                          (console.log("Webview Callback: ", e),
                          0 === e.indexOf(i))
                        ) {
                          var n = e.substring(i.length);
                          r.onMessage(n);
                        }
                      })),
                    this._onLoaded && this._onLoaded(),
                    this.scheduleOnce(function () {
                      r.isBackground &&
                        (r.background && (r.background.active = !1),
                        e.updateZIndex());
                    }, 0.15));
                }),
                (u.onLoadJsHtml = function () {
                  var t = new V.EventHandler();
                  (t.target = this.node),
                    (t.component = "CustomWebView"),
                    (t.handler = "webviewCallback"),
                    (t.customEventData = "");
                  var e = this.webviewEvents || this.webviewLoadedEvents || [];
                  Q.isEditor || e.push(t);
                }),
                (u.cleanUpWebview = function (t) {
                  var e, i;
                  (void 0 === t && (t = !1), this.isBackground && 0 == t) ||
                    ((this.url = ""),
                    this.node.setPosition(
                      ((e = 9999), (i = this.node.getPosition().y), p(e, i, 0))
                    ),
                    this.setJavascriptInterfaceScheme(""),
                    this.setOnJSCallback(function () {
                      return 0;
                    }),
                    this.setOnLoaded(),
                    this.setOnVideoReady(),
                    this.setOnMessage(),
                    t && this.node.destroy());
                }),
                (u.onMessage = function (t) {
                  this._onMessage && this._onMessage(t);
                }),
                (u.sendToWebView = (function () {
                  var t = a(
                    c().mark(function t(e, i) {
                      var n, r;
                      return c().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                void 0 === i && (i = ""),
                                  (n = e + "('" + i + "')"),
                                  q.isNative
                                    ? this.evaluateJS(n)
                                    : (r = this.getIframe()) &&
                                      r.contentWindow.postMessage(
                                        this.getScheme() + n,
                                        "*"
                                      );
                              case 3:
                              case "end":
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  );
                  return function (e, i) {
                    return t.apply(this, arguments);
                  };
                })()),
                (u.getIframe = function () {
                  return this._impl.webview || this._impl._iframe;
                }),
                s(e, [
                  {
                    key: "impl",
                    get: function () {
                      return this._impl;
                    },
                  },
                  {
                    key: "customState",
                    get: function () {
                      if (q.isBrowser) return this.getStateBrowser();
                      var t = this.impl && this.impl._iframe;
                      if (t && t.getState && "function" == typeof t.getState) {
                        var e = t.getState() || "{}";
                        return JSON.parse(e);
                      }
                      return {};
                    },
                    set: function (t) {
                      if (q.isBrowser) this.setStateBrowser(t);
                      else
                        try {
                          var e = this.impl && this.impl._iframe;
                          e &&
                            e.setState &&
                            "function" == typeof e.setState &&
                            e.setState(JSON.stringify(t));
                        } catch (t) {
                          console.error(
                            "==========Kay Receive Set customState Error: ",
                            t
                          );
                        }
                    },
                  },
                  {
                    key: "isFrontable",
                    get: function () {
                      return !0 === this.customState.frontEnable;
                    },
                  },
                  {
                    key: "isTouchAble",
                    get: function () {
                      return void 0 !== this.customState.touch;
                    },
                  },
                  {
                    key: "isTouch",
                    get: function () {
                      return !0 === this.customState.touch;
                    },
                    set: function (t) {
                      this.customState = { touch: t };
                    },
                  },
                  {
                    key: "isScrollAble",
                    get: function () {
                      return void 0 !== this.customState.scroll;
                    },
                  },
                  {
                    key: "isScroll",
                    get: function () {
                      return !0 === this.customState.scroll;
                    },
                    set: function (t) {
                      this.customState = { scroll: t };
                    },
                  },
                  {
                    key: "isPinchAble",
                    get: function () {
                      return void 0 !== this.customState.pinch;
                    },
                  },
                  {
                    key: "isPinch",
                    get: function () {
                      return !0 === this.customState.pinch;
                    },
                    set: function (t) {
                      this.customState = { pinch: t };
                    },
                  },
                  {
                    key: "js",
                    get: function () {
                      this.scriptUrl = this.getUrl(this.scriptUrl, this.script);
                      for (
                        var t = Math.max(
                            this.image.length,
                            this.imageUrl.length
                          ),
                          e = 0;
                        e < t;
                        e++
                      )
                        this.imageUrl[e] = this.getUrl(
                          this.imageUrl[e] || "",
                          this.image[e]
                        );
                      return btoa(
                        "\nfetch('" +
                          this.scriptUrl +
                          "?t=" +
                          Date.now() +
                          "')\n    .then(r => r.text())\n    .then(t => {\n        t = t.replace('$config', `" +
                          JSON.stringify(
                            {
                              isBrowser: q.isBrowser,
                              isMobile: q.isMobile,
                              isAndroid: q.platform === Q.Platform_ANDROID,
                              isDesktopBrowser:
                                q.platform === Q.Platform_DESKTOP_BROWSER,
                              isMobileBrowser:
                                q.platform === Q.Platform_MOBILE_BROWSER,
                              origin: window.location.origin,
                              scheme: this.getScheme(),
                            },
                            null,
                            2
                          ) +
                          "`);\n        t = t.replace('$image', `[" +
                          this.imageUrl
                            .map(function (t) {
                              return "'" + t + "'";
                            })
                            .join(",\n") +
                          "]`);\n        eval(t);\n        //console.log(t);\n    });\n"
                      );
                    },
                  },
                ]),
                e
              );
            })(H)).list = []),
            (D._initBrowser = !1),
            (T = e((R = D).prototype, "camera", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (A = e(R.prototype, "wannaFront", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (O = e(R.prototype, "initTouch", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (P = e(R.prototype, "initScroll", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (F = e(R.prototype, "initPinch", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !0;
              },
            })),
            (I = e(R.prototype, "isBackground", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (N = e(R.prototype, "background", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (x = e(R.prototype, "scheme", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (C = e(R.prototype, "webUrl", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (U = e(R.prototype, "script", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (M = e(R.prototype, "scriptUrl", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (L = e(R.prototype, "image", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (z = e(R.prototype, "imageUrl", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (k = R))
          ) || k)
        );
        q.isBrowser &&
          window.addEventListener("message", function (t) {
            return rt.onMessageBrowser(t.data);
          }),
          u._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/GiftPopup.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./BubblePopup.ts"],
  function (t) {
    "use strict";
    var i, e, n, s, r, a, c, o, l, u, h, p, f, b;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (s = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (a = t._decorator),
            (c = t.Node),
            (o = t.Toggle),
            (l = t.Button),
            (u = t.Vec3),
            (h = t.UIOpacity),
            (p = t.tween),
            (f = t.Tween);
        },
        function (t) {
          b = t.BubblePopup;
        },
      ],
      execute: function () {
        var g, m, _, v, d, y, k, C, w;
        r._RF.push({}, "0cc00mqKIpL+oQ0RelaBQYm", "GiftPopup", void 0);
        var P = a.ccclass,
          B = a.property;
        t(
          "GiftPopup",
          ((g = P("GiftPopup")),
          (m = B(c)),
          (_ = B(c)),
          (v = B([o])),
          g(
            ((k = i(
              (y = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, r = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(r)) || this),
                    n(i, "black_screen", k, s(i)),
                    n(i, "main", C, s(i)),
                    n(i, "btn_gifts", w, s(i)),
                    (i.tip_mapping = [
                      1e3, 2e3, 5e3, 1e4, 5e4, 1e5, 5e5, 1e6, 5e6, 1e7,
                    ]),
                    (i.closeCb = null),
                    i
                  );
                }
                e(i, t);
                var r = i.prototype;
                return (
                  (r.getCurrentTipAmount = function () {
                    for (
                      var t = 0;
                      this.btn_gifts && t < this.btn_gifts.length;
                      t++
                    ) {
                      var i;
                      if (null != (i = this.btn_gifts[t]) && i.isChecked)
                        return this.tip_mapping[t];
                    }
                  }),
                  (r.getCurrentTipIndex = function () {
                    for (
                      var t = 0;
                      this.btn_gifts && t < this.btn_gifts.length;
                      t++
                    ) {
                      var i;
                      if (null != (i = this.btn_gifts[t]) && i.isChecked)
                        return t;
                    }
                    return -1;
                  }),
                  (r.onLoad = function () {
                    var t,
                      i,
                      e = this,
                      n =
                        null == (t = this.black_screen)
                          ? void 0
                          : t.getComponent(l);
                    null != n &&
                      (null == n ||
                        n.node.on("click", function () {
                          e.hide();
                        })),
                      null == (i = this.btn_gifts) ||
                        i.forEach(function (t) {
                          t.node.on("toggle", function () {
                            e.hide();
                          });
                        });
                  }),
                  (r.setCloseCb = function (t) {
                    this.closeCb = t;
                  }),
                  (r.show = function () {
                    var t;
                    if (null != (t = this.main) && t.active) this.hide();
                    else {
                      if (
                        (this.black_screen && (this.black_screen.active = !0),
                        this.main)
                      ) {
                        (this.main.active = !0), this.main.setScale(u.ZERO);
                        var i = this.main.getComponent(h);
                        i && (i.opacity = 255);
                      }
                      p(this.main)
                        .to(0.12, { scale: u.ONE })
                        .to(0.1, { scale: new u(0.9, 0.9, 0.9) })
                        .to(0.1, { scale: u.ONE })
                        .start();
                    }
                  }),
                  (r.hide = function () {
                    var t,
                      i,
                      e = this;
                    if (!this.black_screen || this.black_screen.active) {
                      this.closeCb && this.closeCb(),
                        this.main && f.stopAllByTarget(this.main);
                      var n =
                        null == (t = this.main) ? void 0 : t.getComponent(h);
                      n && (f.stopAllByTarget(n), (n.opacity = 255)),
                        null == (i = this.main) || i.setScale(u.ONE),
                        this.black_screen && (this.black_screen.active = !1),
                        p(this.main)
                          .to(0.2, { scale: u.ZERO })
                          .call(function () {
                            e.main && (e.main.active = !1);
                          })
                          .start(),
                        p(n).to(0.2, { opacity: 1 }).start();
                    }
                  }),
                  (r.isShowing = function () {
                    return this.black_screen && this.black_screen.active;
                  }),
                  i
                );
              })(b)).prototype,
              "black_screen",
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
            (C = i(y.prototype, "main", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = i(y.prototype, "btn_gifts", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
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
  "chunks:///_virtual/LiveStreamChatController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./TopTipPopup.ts",
    "./LiveStreamDealerChatViewPopup.ts",
    "./State.ts",
    "./GameConfigManager.ts",
    "./LiveStreamConfig.ts",
    "./LiveStreamChatView.ts",
    "./LiveStreamGamePlayBridge.ts",
  ],
  function (e) {
    "use strict";
    var t, i, a, r, n, o, s, l, h, u, c, p, d, m, C, f, v, g, y, _;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (a = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (n = e.cclegacy),
            (o = e._decorator),
            (s = e.EditBox),
            (l = e.Button),
            (h = e.Sprite),
            (u = e.Node),
            (c = e.UITransform),
            (p = e.Vec3),
            (d = e.Component);
        },
        function (e) {
          m = e.TopTipPopup;
        },
        function (e) {
          C = e.LiveStreamDealerChatViewPopup;
        },
        function (e) {
          f = e.state;
        },
        function (e) {
          v = e.GameConfigManager;
        },
        function (e) {
          g = e.LiveStreamConfig;
        },
        function (e) {
          y = e.default;
        },
        function (e) {
          _ = e.LiveStreamGamePlayBridge;
        },
      ],
      execute: function () {
        var w, b, S, P, A, T, V, E, I, N, L, M, z, R, k, x;
        n._RF.push(
          {},
          "ae61dIts/5CMJi+OiWUjAYb",
          "LiveStreamChatController",
          void 0
        );
        var B = o.ccclass,
          D = o.property;
        e("ChatItemData", function () {
          (this.displayName = null), (this.message = null);
        }),
          e(
            "LiveStreamChatController",
            ((w = B("LiveStreamChatController")),
            (b = D(s)),
            (S = D(l)),
            (P = D(h)),
            (A = D(u)),
            (T = D(y)),
            (V = D(m)),
            w(
              (((x = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, n = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    n[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(n)) || this),
                    a(t, "chatEditBox", N, r(t)),
                    a(t, "btn_dealer_chat_view", L, r(t)),
                    a(t, "black_screen", M, r(t)),
                    a(t, "dealer_chatViewPopupNode", z, r(t)),
                    (t.dealerChatViewPopup = null),
                    a(t, "liveStreamChatView", R, r(t)),
                    a(t, "topTipPopup", k, r(t)),
                    (t.chatArray = []),
                    t
                  );
                }
                i(t, e);
                var n = t.prototype;
                return (
                  (n.onLoad = function () {
                    var e,
                      t = this;
                    !this.dealerChatViewPopup &&
                      this.dealer_chatViewPopupNode &&
                      (this.dealerChatViewPopup =
                        null == (e = this.dealer_chatViewPopupNode)
                          ? void 0
                          : e.getComponent(C)),
                      this.btn_dealer_chat_view &&
                        ((this.btn_dealer_chat_view.node.active =
                          f.username.indexOf("dealer_789") >= 0 ||
                          "lavi002" == f.username),
                        this.btn_dealer_chat_view.node.on("click", function () {
                          t.dealerChatViewPopup.showImmediately(),
                            _.closeMiniGameNode2();
                        }));
                  }),
                  (n.scaleToCenter = function () {
                    var e =
                      v.getSizeHeight() /
                      this.node.getComponent(c).contentSize.height;
                    this.IsCenter()
                      ? (this.black_screen &&
                          (this.black_screen.node.active = !1),
                        this.node.setScale(p.ONE),
                        this.node.setPosition(new p(591, 112)))
                      : (this.node.setScale(new p(e, e, e)),
                        this.node.setPosition(p.ZERO),
                        this.black_screen &&
                          (this.black_screen.node.active = !0));
                  }),
                  (n.IsCenter = function () {
                    return (
                      this.node.position.x == p.ZERO.x &&
                      this.node.position.y == p.ZERO.y
                    );
                  }),
                  (n.addChatMessage = function (e, t) {
                    var i,
                      a,
                      r,
                      n = { displayName: e, message: t };
                    (this.chatArray.push(n),
                    null != (i = this.liveStreamChatView) &&
                      i.isUpdatable() &&
                      this.chatArray.length > 0) &&
                      (null == (a = this.liveStreamChatView) ||
                        a.updateChat(this.chatArray),
                      null == (r = this.dealerChatViewPopup) ||
                        r.updateChat(this.chatArray),
                      (this.chatArray = []));
                  }),
                  (n.addNotiMessage = function (e, t) {
                    var i,
                      a,
                      r,
                      n = { isNoti: !0, isError: t, message: e };
                    (this.chatArray.push(n),
                    null != (i = this.liveStreamChatView) &&
                      i.isUpdatable() &&
                      this.chatArray.length > 0) &&
                      (null == (a = this.liveStreamChatView) ||
                        a.updateChat(this.chatArray),
                      null == (r = this.dealerChatViewPopup) ||
                        r.updateChat(this.chatArray),
                      (this.chatArray = []));
                  }),
                  (n.onFetchChatBox = function (e) {
                    for (var t, i, a = e.d, r = 0; r < a.length; r++) {
                      var n = a[r],
                        o = n.dn,
                        s = n.mgs,
                        l = n.t;
                      if (void 0 !== s)
                        if ("TIP" != l) {
                          var h = { displayName: o, message: s };
                          this.chatArray.push(h);
                        } else {
                          var u = n.dN,
                            c = n.tA,
                            p = [];
                          p.push(o),
                            p.push("đã tặng bé " + u),
                            p.push(g.TIP_CHARACTER_ITEM_KEY[c.toString()]),
                            p.push(g.TIP_ITEM_KEY[c.toString()]),
                            this.addNotiMessage(p, !1);
                        }
                    }
                    this.chatArray.length > 0 &&
                      (null == (t = this.liveStreamChatView) ||
                        t.loadChatHistory(this.chatArray),
                      null == (i = this.dealerChatViewPopup) ||
                        i.loadChatHistory(this.chatArray));
                    this.chatArray = [];
                  }),
                  (n.onReceivedChat = function (e) {
                    var t = e.dn,
                      i = e.mgs,
                      a = e.t;
                    if (void 0 !== i)
                      if ("TIP" == a) {
                        var r,
                          n = e.dN,
                          o = e.tA,
                          s = [];
                        if (
                          (s.push(t),
                          s.push("đã tặng bé " + n),
                          s.push(g.TIP_CHARACTER_ITEM_KEY[o.toString()]),
                          s.push(g.TIP_ITEM_KEY[o.toString()]),
                          this.addNotiMessage(s, !1),
                          o >= 1e5)
                        )
                          null == (r = this.topTipPopup) || r.show(t, o);
                      } else this.addChatMessage(t, i);
                  }),
                  (n.reset = function () {}),
                  t
                );
              })(d)).SystemWarningName = "SystemWarning"),
              (N = t((I = x).prototype, "chatEditBox", [b], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (L = t(I.prototype, "btn_dealer_chat_view", [S], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (M = t(I.prototype, "black_screen", [P], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (z = t(I.prototype, "dealer_chatViewPopupNode", [A], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (R = t(I.prototype, "liveStreamChatView", [T], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (k = t(I.prototype, "topTipPopup", [V], {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              })),
              (E = I))
            ) || E)
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LiveStreamChatItem.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./State.ts"],
  function (e) {
    "use strict";
    var r, t, i, n, o, a, f, l, c, s;
    return {
      setters: [
        function (e) {
          (r = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (a = e._decorator),
            (f = e.RichText),
            (l = e.UITransform),
            (c = e.Component);
        },
        function (e) {
          s = e.state;
        },
      ],
      execute: function () {
        var T, P, I, p, g, h, O, d, m, x, u, _, v;
        o._RF.push({}, "074788TvrBCXLuouzYpl5Uq", "LiveStreamChatItem", void 0);
        var S = a.ccclass,
          y = a.property;
        e(
          "LiveStreamChatItem",
          ((T = S("LiveStreamChatItem")),
          (P = y(f)),
          (I = y(l)),
          (p = y(l)),
          (g = y()),
          (h = y()),
          T(
            ((m = r(
              (d = (function (e) {
                function r() {
                  for (
                    var r, t = arguments.length, o = new Array(t), a = 0;
                    a < t;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (r = e.call.apply(e, [this].concat(o)) || this),
                    i(r, "txt_message", m, n(r)),
                    i(r, "nodeTranform", x, n(r)),
                    i(r, "txt_message_transform", u, n(r)),
                    i(r, "colorName", _, n(r)),
                    i(r, "colorNameUser", v, n(r)),
                    (r.IS_DIRTY = !0),
                    (r.originNodeHeight = 0),
                    (r.markDirtyCallBack = null),
                    r
                  );
                }
                t(r, e);
                var o = r.prototype;
                return (
                  (o.setMarkDirtyCallBack = function (e) {
                    this.markDirtyCallBack = e;
                  }),
                  (o.getUITransform = function () {
                    return this.nodeTranform;
                  }),
                  (o.getMessage = function () {
                    var e;
                    return null == (e = this.txt_message) ? void 0 : e.string;
                  }),
                  (o.update = function (e) {
                    var r;
                    this.nodeTranform &&
                      this.txt_message_transform &&
                      ((this.originNodeHeight =
                        null != (r = this.nodeTranform.contentSize.height)
                          ? r
                          : 0),
                      this.nodeTranform.setContentSize(
                        this.txt_message_transform.contentSize.width,
                        this.txt_message_transform.contentSize.height
                      ),
                      this.nodeTranform.contentSize.height !=
                        this.originNodeHeight &&
                        ((this.originNodeHeight =
                          this.nodeTranform.contentSize.height),
                        this.markDirtyCallBack && this.markDirtyCallBack()),
                      this.IS_DIRTY &&
                        this.nodeTranform.contentSize.width ==
                          this.txt_message_transform.contentSize.width &&
                        this.nodeTranform.contentSize.height ==
                          this.txt_message_transform.contentSize.height &&
                        (this.IS_DIRTY = !1));
                  }),
                  (o.isDirty = function () {
                    return this.IS_DIRTY;
                  }),
                  (o.show = function (e, r, t) {
                    if (this.txt_message) {
                      (this.txt_message.node.active = !0),
                        null == r && (r = "??????"),
                        r &&
                          r.indexOf("[TOP") >= 0 &&
                          (r.indexOf("[TOP 1]") >= 0 &&
                            ((r = r.replace("[TOP 1]", "")),
                            (e = "[TOP 1]" + e)),
                          r.indexOf("[TOP 2]") >= 0 &&
                            ((r = r.replace("[TOP 2]", "")),
                            (e = "[TOP 2]" + e)),
                          r.indexOf("[TOP 3]") >= 0 &&
                            ((r = r.replace("[TOP 3]", "")),
                            (e = "[TOP 3]" + e)),
                          r.indexOf("[TOP 4]") >= 0 &&
                            ((r = r.replace("[TOP 4]", "")),
                            (e = "[TOP 4]" + e)),
                          r.indexOf("[TOP 5]") >= 0 &&
                            ((r = r.replace("[TOP 5]", "")),
                            (e = "[TOP 5]" + e)),
                          r.indexOf("[TOP 6]") >= 0 &&
                            ((r = r.replace("[TOP 6]", "")),
                            (e = "[TOP 6]" + e)),
                          r.indexOf("[TOP 7]") >= 0 &&
                            ((r = r.replace("[TOP 7]", "")),
                            (e = "[TOP 7]" + e)),
                          r.indexOf("[TOP 8]") >= 0 &&
                            ((r = r.replace("[TOP 8]", "")),
                            (e = "[TOP 8]" + e)),
                          r.indexOf("[TOP 9]") >= 0 &&
                            ((r = r.replace("[TOP 9]", "")),
                            (e = "[TOP 9]" + e)),
                          r.indexOf("[TOP 10]") >= 0 &&
                            ((r = r.replace("[TOP 10]", "")),
                            (e = "[TOP 10]" + e)));
                      var i = "#FF75F3";
                      this.colorName && (i = this.colorName),
                        null != e &&
                          e.length > 4 &&
                          e.indexOf("[TOP") >= 0 &&
                          (i = "#ffff00"),
                        e == s.displayName &&
                          ((i = "#ffff00"),
                          this.colorNameUser && (i = this.colorNameUser));
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
                        r.indexOf("[TIP 1]") >= 0
                          ? ((r = r.replace("[TIP 1]", "")), (n = "ä"))
                          : r.indexOf("[TIP 2]") >= 0
                          ? ((r = r.replace("[TIP 2]", "")), (n = "å"))
                          : r.indexOf("[TIP 3]") >= 0
                          ? ((r = r.replace("[TIP 3]", "")), (n = "ç"))
                          : r.indexOf("[TIP 4]") >= 0
                          ? ((r = r.replace("[TIP 4]", "")), (n = "ë"))
                          : r.indexOf("[TIP 5]") >= 0
                          ? ((r = r.replace("[TIP 5]", "")), (n = "ï"))
                          : r.indexOf("[TIP 6]") >= 0
                          ? ((r = r.replace("[TIP 6]", "")), (n = "î"))
                          : r.indexOf("[TIP 7]") >= 0
                          ? ((r = r.replace("[TIP 7]", "")), (n = "æ"))
                          : r.indexOf("[TIP 8]") >= 0
                          ? ((r = r.replace("[TIP 8]", "")), (n = "Æ"))
                          : r.indexOf("[TIP 9]") >= 0
                          ? ((r = r.replace("[TIP 9]", "")), (n = "ö"))
                          : r.indexOf("[TIP 10]") >= 0 &&
                            ((r = r.replace("[TIP 10]", "")), (n = "û")),
                        !(
                          (r = (r = (r = (r = (r = (r = (r = (r = (r = (r = (r =
                            r.replace(/ä/g, "")).replace(/å/g, "")).replace(
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
                        var a =
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
                          r +
                          "</color>";
                        (this.txt_message.string = a), (this.IS_DIRTY = !0);
                      }
                    }
                  }),
                  (o.showNotifyMessage = function (e, r, t, i) {
                    if ((void 0 === t && (t = !1), t))
                      this.txt_message &&
                        (this.txt_message.string =
                          "<color=#ffffff>ž</color><color=#ff0000> " +
                          r[0] +
                          "</color>");
                    else {
                      var n = r[0],
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
                            r[1] +
                            "</color><color=#ffffff> " +
                            r[2] +
                            "</color>");
                    }
                    this.IS_DIRTY = !0;
                  }),
                  (o.showNotifyMessage2 = function (e, r, t, i) {
                    if ((void 0 === t && (t = !1), t))
                      this.txt_message &&
                        (this.txt_message.string =
                          "<color=#ffffff>ž</color><color=#ff0000> " +
                          r[0] +
                          "</color>");
                    else {
                      var n = r[0];
                      this.txt_message &&
                        (this.txt_message.string =
                          "<color=#ffffff></color><color=#ffa500> " +
                          n +
                          "</color><color=#ffffff> " +
                          r[1] +
                          "</color><color=#FFF500> " +
                          r[3] +
                          "</color>");
                    }
                    this.IS_DIRTY = !0;
                  }),
                  r
                );
              })(c)).prototype,
              "txt_message",
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
            (x = r(d.prototype, "nodeTranform", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (u = r(d.prototype, "txt_message_transform", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = r(d.prototype, "colorName", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (v = r(d.prototype, "colorNameUser", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
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
  "chunks:///_virtual/LiveStreamChatView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./LiveStreamChatItem.ts"],
  function (t) {
    "use strict";
    var e, i, n, a, s, o, r, h, l, c, d, u, _, f, m;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (o = t._decorator),
            (r = t.Node),
            (h = t.EditBox),
            (l = t.ScrollView),
            (c = t.UITransform),
            (d = t.Tween),
            (u = t.tween),
            (_ = t.Vec3),
            (f = t.Component);
        },
        function (t) {
          m = t.LiveStreamChatItem;
        },
      ],
      execute: function () {
        var g, p, y, b, v, C, S, w, z, N, I, L, M, T, D;
        s._RF.push({}, "87b6cNK6DlB5L4564V8j+UA", "LiveStreamChatView", void 0);
        var B = o.ccclass,
          k = o.property;
        t(
          "default",
          ((g = B("LiveStreamChatView")),
          (p = k(r)),
          (y = k(h)),
          (b = k(l)),
          (v = k(r)),
          (C = k(Number)),
          (S = k(Number)),
          g(
            ((N = e(
              (z = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    s[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    n(e, "chat_item", N, a(e)),
                    n(e, "edbChat", I, a(e)),
                    n(e, "scr_chat", L, a(e)),
                    n(e, "chatItemsNode", M, a(e)),
                    (e.loaded_chat_items = []),
                    (e.scr_chat_transform = null),
                    n(e, "offSetY", T, a(e)),
                    n(e, "spacing_chat", D, a(e)),
                    (e.isScrolling = !1),
                    (e.is_chat_layout_dirty = !1),
                    (e.is_loaded_history = !1),
                    (e.sendMessageCb = void 0),
                    e
                  );
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    var t,
                      e,
                      i,
                      n = this;
                    (this.loaded_chat_items =
                      (null == (t = this.chatItemsNode)
                        ? void 0
                        : t.getComponentsInChildren(m)) || []),
                      (this.scr_chat_transform =
                        (null == (e = this.chatItemsNode)
                          ? void 0
                          : e.getComponent(c)) || null),
                      this.loaded_chat_items.forEach(function (t) {
                        return null == t
                          ? void 0
                          : t.setMarkDirtyCallBack(n.markAsDirty.bind(n));
                      }),
                      this.scr_chat &&
                        (this.scr_chat.node.on("scroll-began", function () {
                          d.stopAllByTarget(n.node), (n.isScrolling = !0);
                        }),
                        this.scr_chat.node.on("scroll-ended", function () {
                          u(n.node)
                            .sequence(
                              u().delay(0.5),
                              u().call(function () {
                                n.isScrolling = !1;
                              })
                            )
                            .start();
                        })),
                      null == (i = this.edbChat) ||
                        i.node.on("editing-did-began", function () {});
                  }),
                  (s.update = function (t) {
                    this.updateLayoutChat();
                  }),
                  (s.markAsDirty = function () {
                    this.is_chat_layout_dirty = !0;
                  }),
                  (s.updateLayoutChat = function () {
                    var t = this;
                    if (
                      null != this.loaded_chat_items &&
                      0 != this.loaded_chat_items.length
                    ) {
                      var e = this.loaded_chat_items
                        .map(function (t) {
                          var e;
                          return (
                            (null == t || null == (e = t.getUITransform())
                              ? void 0
                              : e.contentSize.height) || 0
                          );
                        })
                        .reduce(function (e, i) {
                          return e + i + t.spacing_chat;
                        });
                      if (
                        (this.scr_chat_transform &&
                          this.scr_chat_transform.setContentSize(
                            this.scr_chat_transform.contentSize.width,
                            e + this.offSetY
                          ),
                        this.is_chat_layout_dirty)
                      ) {
                        this.loaded_chat_items.filter(function (t) {
                          return null == t ? void 0 : t.isDirty();
                        }).length;
                        this.loaded_chat_items.forEach(function (e, i) {
                          if (
                            (d.stopAllByTarget(null == e ? void 0 : e.node),
                            i > 0)
                          ) {
                            var n,
                              a = t.loaded_chat_items[i - 1];
                            if (!a) return;
                            var s = a.node.getPosition();
                            (s.y +=
                              ((null == (n = a.getUITransform())
                                ? void 0
                                : n.contentSize.height) || 0) + t.spacing_chat),
                              null == e || e.node.setPosition(s);
                          }
                        });
                        for (
                          var i = [],
                            n = this.offSetY,
                            a = this.loaded_chat_items.length - 1;
                          a >= 0;
                          a--
                        ) {
                          var s,
                            o = this.loaded_chat_items[a];
                          if (o) {
                            var r = o.node.position;
                            n +=
                              ((null == (s = o.getUITransform())
                                ? void 0
                                : s.contentSize.height) || 0) +
                              this.spacing_chat;
                            var h = new _(r.x, r.y, r.z);
                            (h.y = n), i.push(h);
                          }
                        }
                        (i = i.reverse()),
                          this.loaded_chat_items.forEach(function (t, e) {
                            i[e] &&
                              (null == t ||
                                t.node.setPosition(
                                  new _(i[e].x, i[e].y, i[e].z)
                                ));
                          }),
                          this.scr_chat && this.scr_chat.scrollToBottom(),
                          (this.is_chat_layout_dirty = !1),
                          this.is_loaded_history ||
                            (this.is_loaded_history = !0);
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
                      var n = t[i],
                        a = n.displayName,
                        s = n.message,
                        o = n.isNoti,
                        r = n.isError,
                        h = this.loaded_chat_items.shift();
                      h &&
                        ((h.node.active = !0),
                        o
                          ? null == h || h.showNotifyMessage(a, s, r)
                          : null == h || h.show(a, s),
                        this.loaded_chat_items.push(h));
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
                        var n = t[i],
                          a = n.displayName,
                          s = n.message,
                          o = n.isNoti,
                          r = n.isError,
                          h = this.loaded_chat_items.shift();
                        h &&
                          ((h.node.active = !0),
                          this.chat_item &&
                            (h.node.parent = this.chat_item.parent),
                          o ? h.showNotifyMessage(a, s, r) : h.show(a, s),
                          this.loaded_chat_items.push(h));
                      }
                      this.is_chat_layout_dirty = !0;
                    }
                  }),
                  (s.sendMes = function () {
                    if (null != this.edbChat) {
                      var t = this.edbChat.string.trim();
                      (this.edbChat.string = ""),
                        null != t &&
                          "" != t &&
                          this.sendMessageCb &&
                          this.sendMessageCb(t);
                    }
                  }),
                  (s.reset = function () {
                    null != this.edbChat && (this.edbChat.string = "");
                  }),
                  (s.IsCenter = function () {
                    return !1;
                  }),
                  (s.setSendMessageCallback = function (t) {
                    this.sendMessageCb = t;
                  }),
                  e
                );
              })(f)).prototype,
              "chat_item",
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
            (I = e(z.prototype, "edbChat", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(z.prototype, "scr_chat", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = e(z.prototype, "chatItemsNode", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = e(z.prototype, "offSetY", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return -10;
              },
            })),
            (D = e(z.prototype, "spacing_chat", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 5;
              },
            })),
            (w = z))
          ) || w)
        );
        s._RF.pop();
      },
    };
  }
);

System.register("chunks:///_virtual/LiveStreamConfig.ts", ["cc"], function (e) {
  "use strict";
  var n;
  return {
    setters: [
      function (e) {
        n = e.cclegacy;
      },
    ],
    execute: function () {
      n._RF.push({}, "d161czK7yNAJav1lYSS/5Pz", "LiveStreamConfig", void 0);
      var i = e("LiveStreamConfig", function () {});
      (i.TIP_KEY = [1e3, 2e3, 5e3, 1e4, 5e4, 1e5, 5e5, 1e6, 5e6, 1e7]),
        (i.TIP_ITEM_KEY = {
          1e3: "Bông hoa hồng",
          2e3: "Ly cocktail",
          5e3: "Cây son môi",
          1e4: "Giày Dior",
          5e4: "Chai nước hoa Chanel",
          1e5: "Dây lưng Gucci",
          5e5: "Túi xách LV",
          1e6: "Đồng hồ Hublot",
          5e6: "Nhẫn kim cương",
          1e7: "Xe G63",
        }),
        (i.TIP_ITEM_KEY2 = {
          "1,000": "Hoa",
          "2,000": "Ly Cocktail",
          "5,000": "Cây Son",
          "10,000": "Giày Dior",
          "50,000": "Nước Hoa Channel",
          "100,000": "Dây Lưng Gucci",
          "500,000": "Túi Xách LV",
          "1,000,000": "Đồng Hồ Hublot",
          "5,000,000": "Nhẫn Kim Cương",
          "10,000,000": "Xe G63",
        }),
        (i.TIP_ITEM_INDEX = {
          1e3: 0,
          2e3: 1,
          5e3: 2,
          1e4: 3,
          5e4: 4,
          1e5: 5,
          5e5: 6,
          1e6: 7,
          5e6: 8,
          1e7: 9,
        }),
        (i.TIP_CHARACTER_ITEM_KEY = {
          1e3: "ÿ",
          2e3: "¢",
          5e3: "£",
          1e4: "¥",
          5e4: "ð",
          1e5: "ø",
          5e5: "ü",
          1e6: "Ü",
          5e6: "þ",
          1e7: "Ø",
        }),
        n._RF.pop();
    },
  };
});

System.register(
  "chunks:///_virtual/LiveStreamDealerChatView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./LiveStreamChatItem.ts"],
  function (t) {
    "use strict";
    var e, i, n, a, s, o, r, l, h, c, d, _, u, f, m, g;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (o = t._decorator),
            (r = t.Node),
            (l = t.EditBox),
            (h = t.ScrollView),
            (c = t.UITransform),
            (d = t.Tween),
            (_ = t.tween),
            (u = t.Vec3),
            (f = t.sys),
            (m = t.Component);
        },
        function (t) {
          g = t.LiveStreamChatItem;
        },
      ],
      execute: function () {
        var p, y, v, b, C, w, S, z, T, I, D, L, M, E, B;
        s._RF.push(
          {},
          "392e6ZEB6lKI5T0a9TgjhMS",
          "LiveStreamDealerChatView",
          void 0
        );
        var N = o.ccclass,
          x = o.property;
        t(
          "default",
          ((p = N("LiveStreamDealerChatView")),
          (y = x(r)),
          (v = x(l)),
          (b = x(h)),
          (C = x(c)),
          (w = x([r])),
          p(
            (((B = (function (t) {
              function e() {
                for (
                  var e, i = arguments.length, s = new Array(i), o = 0;
                  o < i;
                  o++
                )
                  s[o] = arguments[o];
                return (
                  (e = t.call.apply(t, [this].concat(s)) || this),
                  n(e, "chat_item", T, a(e)),
                  n(e, "edbChat", I, a(e)),
                  n(e, "scr_chat", D, a(e)),
                  n(e, "scr_chat_transform", L, a(e)),
                  n(e, "loaded_chat_items_node", M, a(e)),
                  (e.loaded_chat_items = []),
                  n(e, "spacing_chat", E, a(e)),
                  (e.isScrolling = !1),
                  (e.is_chat_layout_dirty = !1),
                  (e.is_loaded_history = !1),
                  (e.lastSendTimestamp = 0),
                  (e.sendMessageCb = null),
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
                    i = this;
                  (e.instance = this),
                    (this.loaded_chat_items = this.loaded_chat_items_node.map(
                      function (t) {
                        return t.getComponent(g);
                      }
                    )),
                    this.scr_chat &&
                      (this.scr_chat.node.on("scroll-began", function () {
                        d.stopAllByTarget(i.node), (i.isScrolling = !0);
                      }),
                      this.scr_chat.node.on("scroll-ended", function () {
                        _(i.node)
                          .sequence(
                            _().delay(0.5),
                            _().call(function () {
                              i.isScrolling = !1;
                            })
                          )
                          .start();
                      })),
                    null == (t = this.edbChat) ||
                      t.node.on("editing-did-began", function () {}),
                    setInterval(function () {
                      i.markAsDirty();
                    }, 1e3);
                }),
                (s.update = function (t) {
                  this.updateLayoutChat();
                }),
                (s.markAsDirty = function () {
                  this.is_chat_layout_dirty = !0;
                }),
                (s.updateLayoutChat = function () {
                  var t = this;
                  if (
                    null != this.loaded_chat_items &&
                    0 != this.loaded_chat_items.length
                  ) {
                    var e = this.loaded_chat_items
                      .map(function (t) {
                        var e;
                        return (
                          (null == t || null == (e = t.getUITransform())
                            ? void 0
                            : e.contentSize.height) || 0
                        );
                      })
                      .reduce(function (e, i) {
                        return e + i + t.spacing_chat;
                      });
                    if (
                      (this.scr_chat_transform &&
                        this.scr_chat_transform.setContentSize(
                          this.scr_chat_transform.contentSize.width,
                          e
                        ),
                      this.is_chat_layout_dirty)
                    ) {
                      var i;
                      this.loaded_chat_items.filter(function (t) {
                        return null == t ? void 0 : t.isDirty();
                      }).length;
                      this.loaded_chat_items.forEach(function (e, i) {
                        if (
                          (d.stopAllByTarget(null == e ? void 0 : e.node),
                          i > 0)
                        ) {
                          var n,
                            a = t.loaded_chat_items[i - 1];
                          if (!a) return;
                          var s = a.node.position,
                            o = new u(s.x, s.y, s.z);
                          (o.y -=
                            (null == (n = a.getUITransform())
                              ? void 0
                              : n.contentSize.height) || 0 + t.spacing_chat),
                            null == e || e.node.setPosition(o);
                        }
                      });
                      for (
                        var n = [],
                          a = 5,
                          s = this.loaded_chat_items.length - 1;
                        s >= 0;
                        s--
                      ) {
                        var o,
                          r = this.loaded_chat_items[s];
                        if (r) {
                          var l = r.node.position;
                          a +=
                            (null == (o = r.getUITransform())
                              ? void 0
                              : o.contentSize.height) || 0 + this.spacing_chat;
                          var h = new u(l.x, l.y, l.z);
                          (h.y = a), n.push(h);
                        }
                      }
                      (n = n.reverse()),
                        f.isBrowser && f.platform == f.Platform.DESKTOP_BROWSER
                          ? this.loaded_chat_items.forEach(function (t, e) {
                              n[e] &&
                                (null == t ||
                                  t.node.setPosition(
                                    new u(n[e].x, n[e].y, n[e].z)
                                  ));
                            })
                          : this.loaded_chat_items.forEach(function (t, e) {
                              n[e] &&
                                _(null == t ? void 0 : t.node)
                                  .to(0.2, {
                                    position: new u(n[e].x, n[e].y, n[e].z),
                                  })
                                  .start();
                            }),
                        null == (i = this.scr_chat) || i.scrollToBottom(),
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
                  (null == this.loaded_chat_items ||
                    this.loaded_chat_items.length <= 0) &&
                    (this.loaded_chat_items = this.loaded_chat_items_node.map(
                      function (t) {
                        return t.getComponent(g);
                      }
                    ));
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
                      s = n.message,
                      o = n.isNoti,
                      r = n.isError,
                      l = this.loaded_chat_items.shift();
                    l &&
                      ((l.node.active = !0),
                      o ? l.showNotifyMessage2(a, s, r) : l.show(a, s),
                      this.loaded_chat_items.push(l));
                  }
                  this.is_chat_layout_dirty = !0;
                }),
                (s.updateChat = function (t) {
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
                        s = n.message,
                        o = n.isNoti,
                        r = n.isError,
                        l = this.loaded_chat_items.shift();
                      l &&
                        ((l.node.active = !0),
                        this.chat_item &&
                          (l.node.parent = this.chat_item.parent),
                        o ? l.showNotifyMessage2(a, s, r) : l.show(a, s),
                        this.loaded_chat_items.push(l));
                    }
                    this.is_chat_layout_dirty = !0;
                  }
                }),
                (s.sendMes = function () {
                  if (null != this.edbChat) {
                    var t = this.edbChat.string.trim();
                    (this.edbChat.string = ""),
                      null != t &&
                        "" != t &&
                        this.sendMessageCb &&
                        this.sendMessageCb(t);
                  }
                }),
                (s.reset = function () {
                  null != this.edbChat && (this.edbChat.string = "");
                }),
                (s.IsCenter = function () {
                  return !1;
                }),
                (s.setSendMessageCallback = function (t) {
                  this.sendMessageCb = t;
                }),
                e
              );
            })(m)).instance = null),
            (T = e((z = B).prototype, "chat_item", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(z.prototype, "edbChat", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = e(z.prototype, "scr_chat", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(z.prototype, "scr_chat_transform", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = e(z.prototype, "loaded_chat_items_node", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (E = e(z.prototype, "spacing_chat", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 5;
              },
            })),
            (S = z))
          ) || S)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LiveStreamDealerChatViewPopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./LiveStreamDealerChatView.ts",
  ],
  function (e) {
    "use strict";
    var t, a, i, r, o, n, l, u;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (a = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
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
        var c, p, s, h, m;
        o._RF.push(
          {},
          "ff7b0tIhjhO2ZqSEV2ZWZTz",
          "LiveStreamDealerChatViewPopup",
          void 0
        );
        var v = n.ccclass,
          C = n.property;
        e(
          "LiveStreamDealerChatViewPopup",
          ((c = v("LiveStreamDealerChatViewPopup")),
          (p = C(u)),
          c(
            ((m = t(
              (h = (function (e) {
                function t() {
                  for (
                    var t, a = arguments.length, o = new Array(a), n = 0;
                    n < a;
                    n++
                  )
                    o[n] = arguments[n];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    i(t, "dealer_BCLiveStreamChatView", m, r(t)),
                    t
                  );
                }
                a(t, e);
                var o = t.prototype;
                return (
                  (o.loadChatHistory = function (e) {
                    var t;
                    null == (t = this.dealer_BCLiveStreamChatView) ||
                      t.loadChatHistory(e);
                  }),
                  (o.updateChat = function (e) {
                    var t;
                    null == (t = this.dealer_BCLiveStreamChatView) ||
                      t.updateChat(e);
                  }),
                  (o.showImmediately = function (t) {
                    var a = this;
                    void 0 === t && (t = function () {}),
                      e.prototype.showImmediately.call(this, t),
                      setTimeout(function () {
                        var e;
                        null == (e = a.dealer_BCLiveStreamChatView) ||
                          e.markAsDirty();
                      }, 100);
                  }),
                  t
                );
              })(l)).prototype,
              "dealer_BCLiveStreamChatView",
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
            (s = h))
          ) || s)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LiveStreamGamePlayBridge.ts",
  ["cc", "./PersistManager.ts"],
  function (e) {
    "use strict";
    var n, i;
    return {
      setters: [
        function (e) {
          n = e.cclegacy;
        },
        function (e) {
          i = e.PersistManager;
        },
      ],
      execute: function () {
        n._RF.push(
          {},
          "a1cbejvdNNP+pnstns8llaU",
          "LiveStreamGamePlayBridge",
          void 0
        );
        e(
          "LiveStreamGamePlayBridge",
          (function () {
            function e() {}
            return (
              (e.closeAllPopup = function () {
                i.getInstance().hideCommonPopup(),
                  i.getInstance().hideErrorPopup(),
                  i.getInstance().hideLoginPopup(),
                  i.getInstance().hideOTPPopup();
              }),
              (e.closeMiniGameNode = function () {}),
              (e.closeMiniGameNode2 = function () {}),
              (e.isShowingMiniGame = function () {}),
              (e.isOverlapMiniGame = function (e) {}),
              (e.adjustPositionMiniGameNode = function () {}),
              e
            );
          })()
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LiveStreamGameSettingPopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./State.ts",
    "./PersistManager.ts",
    "./SettingPopup.ts",
    "./Define.ts",
    "./EventManager.ts",
    "./PlayerView.ts",
  ],
  function (t) {
    "use strict";
    var e, i, o, n, l, u, a, r, s, c, g, h, f, _, d, m;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (l = t.cclegacy),
            (u = t._decorator),
            (a = t.Button),
            (r = t.Toggle),
            (s = t.log);
        },
        function (t) {
          c = t.state;
        },
        function (t) {
          g = t.PersistManager;
        },
        function (t) {
          h = t.SettingPopup;
        },
        function (t) {
          f = t.StorageKey;
        },
        function (t) {
          (_ = t.eventManager), (d = t.EventKey);
        },
        function (t) {
          m = t.PlayerView;
        },
      ],
      execute: function () {
        var p, v, S, C, x, y, E, b, k, H, P, w, A, I;
        l._RF.push(
          {},
          "87d759JUS9DAqadlm/UqHeA",
          "LiveStreamGameSettingPopup",
          void 0
        );
        var B = u.ccclass,
          T = u.property;
        t(
          "LiveStreamGameSettingPopup",
          ((p = B("LiveStreamGameSettingPopup")),
          (v = T(a)),
          (S = T(r)),
          (C = T(r)),
          (x = T(r)),
          (y = T(m)),
          p(
            (((I = (function (t) {
              function e() {
                for (
                  var e, i = arguments.length, l = new Array(i), u = 0;
                  u < i;
                  u++
                )
                  l[u] = arguments[u];
                return (
                  (e = t.call.apply(t, [this].concat(l)) || this),
                  o(e, "btn_exit", k, n(e)),
                  o(e, "toggle_hideChat", H, n(e)),
                  o(e, "tog_sfx", P, n(e)),
                  o(e, "tog_music", w, n(e)),
                  o(e, "my_info", A, n(e)),
                  (e.isWillExit = !1),
                  (e.callBackExitRoom = null),
                  e
                );
              }
              i(e, t);
              var l = e.prototype;
              return (
                (l.isHideChat = function () {
                  var t;
                  return (
                    (null == (t = this.toggle_hideChat)
                      ? void 0
                      : t.isChecked) || c.username.indexOf("dealer_789") >= 0
                  );
                }),
                (l.onLoad = function () {
                  var i,
                    o,
                    n,
                    l,
                    u,
                    a,
                    r,
                    c = this;
                  t.prototype.onLoad.call(this),
                    (this.flip = !0),
                    null == (i = this.btn_exit) ||
                      i.node.on("click", function () {
                        return c.exitRoom();
                      });
                  var h = localStorage.getItem(f.SoundFX);
                  this.tog_sfx &&
                    (this.tog_sfx.isChecked = "1" == h || "true" == h);
                  var m = localStorage.getItem(f.Music);
                  this.tog_music &&
                    (this.tog_music.isChecked = "1" == m || "true" == m),
                    _.emit(
                      d.MusicToggle,
                      null == (o = this.tog_music) ? void 0 : o.isChecked
                    ),
                    _.emit(
                      d.SoundToggle,
                      null == (n = this.tog_sfx) ? void 0 : n.isChecked
                    ),
                    null == (l = this.tog_sfx) ||
                      l.node.on("toggle", function () {
                        var t, e;
                        localStorage.setItem(
                          f.SoundFX,
                          null != (t = c.tog_sfx) && t.isChecked ? "1" : "0"
                        ),
                          _.emit(
                            d.SoundToggle,
                            null == (e = c.tog_sfx) ? void 0 : e.isChecked
                          );
                      }),
                    null == (u = this.tog_music) ||
                      u.node.on("toggle", function () {
                        var t, e;
                        localStorage.setItem(
                          f.Music,
                          null != (t = c.tog_music) && t.isChecked ? "1" : "0"
                        ),
                          _.emit(
                            d.MusicToggle,
                            null == (e = c.tog_music) ? void 0 : e.isChecked
                          );
                      }),
                    null == (a = this.toggle_hideChat) ||
                      a.node.on("toggle", function () {
                        s(c.isHideChat()),
                          localStorage.setItem(
                            e.SAVE_HIDE_CHAT_KEY,
                            c.isHideChat() ? "true" : "false"
                          );
                      });
                  var p = localStorage.getItem(e.SAVE_HIDE_CHAT_KEY);
                  null == p || null == p
                    ? this.toggle_hideChat &&
                      (this.toggle_hideChat.isChecked = !1)
                    : this.toggle_hideChat &&
                      (this.toggle_hideChat.isChecked = "true" == p);
                  var v =
                    null == (r = this.my_info) ? void 0 : r.getButtonGetout();
                  null != v &&
                    v.node.on("click", function () {
                      var t;
                      null == (t = c.my_info) || t.showButtonGetout(!1);
                      g.showNoti("Bạn sẽ ở lại chơi."), (c.isWillExit = !1);
                    });
                }),
                (l.exitRoom = function () {
                  this.callBackExitRoom && this.callBackExitRoom();
                }),
                (l.reset = function () {
                  var t;
                  (this.isWillExit = !1),
                    null == (t = this.my_info) || t.showButtonGetout(!1);
                }),
                (l.setCallbackExitRoom = function (t) {
                  this.callBackExitRoom = t;
                }),
                e
              );
            })(h)).SAVE_HIDE_CHAT_KEY = "SAVE_HIDE_CHAT_KEY"),
            (k = e((b = I).prototype, "btn_exit", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = e(b.prototype, "toggle_hideChat", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = e(b.prototype, "tog_sfx", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = e(b.prototype, "tog_music", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = e(b.prototype, "my_info", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = b))
          ) || E)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LiveStreamRankItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var e, n, i, r, a, s, o, u, c, _;
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
        var l, m, p, h, x, k, v, f, d, w, b;
        a._RF.push(
          {},
          "c18527pzPJFd4dCX64V5Z1Y",
          "LiveStreamRankItemView",
          void 0
        );
        var g = s.ccclass,
          y = s.property;
        t(
          "LiveStreamRankItemView",
          ((l = g("LiveStreamRankItemView")),
          (m = y(o)),
          (p = y(u)),
          (h = y(o)),
          (x = y(o)),
          l(
            ((f = e(
              (v = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, a = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    i(e, "txt_rank", f, r(e)),
                    i(e, "spr_rank", d, r(e)),
                    i(e, "txt_username", w, r(e)),
                    i(e, "txt_win_amount", b, r(e)),
                    e
                  );
                }
                n(e, t);
                var a = e.prototype;
                return (
                  (a.showItem = function (t, e, n, i, r) {
                    this.txt_username && (this.txt_username.node.active = !0),
                      this.txt_username &&
                        (this.txt_username.string = e.toString()),
                      this.txt_win_amount &&
                        (this.txt_win_amount.node.active = !0),
                      this.txt_win_amount &&
                        (this.txt_win_amount.string = isNaN(n)
                          ? n
                          : _.formatNumber(n)),
                      this.txt_rank &&
                        (t > 3
                          ? ((this.txt_rank.node.active = !0),
                            this.spr_rank && (this.spr_rank.node.active = !1),
                            (this.txt_rank.string = t.toString()))
                          : ((this.txt_rank.node.active = !1),
                            this.spr_rank && (this.spr_rank.node.active = !0)));
                  }),
                  (a.hideItem = function () {
                    this.txt_rank && (this.txt_rank.node.active = !1),
                      this.spr_rank && (this.spr_rank.node.active = !1),
                      this.txt_username && (this.txt_username.node.active = !1),
                      this.txt_win_amount &&
                        (this.txt_win_amount.node.active = !1);
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
                initializer: function () {
                  return null;
                },
              }
            )),
            (d = e(v.prototype, "spr_rank", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = e(v.prototype, "txt_username", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = e(v.prototype, "txt_win_amount", [x], {
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
  "chunks:///_virtual/LiveStreamRankView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./LiveStreamRankItemView.ts",
    "./LivestreamTipRankItemView.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, a, r, o, s, l, u, c, m;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (o = t._decorator),
            (s = t.Node),
            (l = t.ScrollView);
        },
        function (t) {
          u = t.CommonPopup;
        },
        function (t) {
          c = t.LiveStreamRankItemView;
        },
        function (t) {
          m = t.default;
        },
      ],
      execute: function () {
        var p, h, f, v, k, d, w;
        r._RF.push({}, "93d75noSdpH07jvjV4H4KeP", "LiveStreamRankView", void 0);
        var y = o.ccclass,
          _ = o.property,
          R = function () {
            (this.rank = void 0),
              (this.displayName = void 0),
              (this.amount = void 0),
              (this.totalTipData = void 0);
          };
        t(
          "LiveStreamRankView",
          ((p = y("LiveStreamRankView")),
          (h = _(s)),
          (f = _(l)),
          p(
            ((d = e(
              (k = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    r[o] = arguments[o];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    n(e, "itemContainer", d, a(e)),
                    (e.rankItems = []),
                    n(e, "srcView", w, a(e)),
                    (e._rank = []),
                    (e.spriteFrame_gifts = []),
                    e
                  );
                }
                i(e, t);
                var r = e.prototype;
                return (
                  (r.setSpriteFrameGifts = function (t) {
                    this.spriteFrame_gifts = t;
                  }),
                  (r.onLoad = function () {
                    var t;
                    this.rankItems =
                      (null == (t = this.itemContainer)
                        ? void 0
                        : t.getComponentsInChildren(c)) || [];
                  }),
                  (r.showLiveStreamRank = function (t) {
                    this._rank = [];
                    for (var e = 0; e < t.length; e++) {
                      var i = t[e],
                        n = new R();
                      (n.rank = i.r),
                        (n.displayName = i.dn),
                        (n.amount = i.m),
                        i.totalTipData && (n.totalTipData = i.totalTipData),
                        this._rank.push(n);
                    }
                    this.showRank();
                  }),
                  (r.showRank = function () {
                    var t,
                      e = this;
                    (this._rank = this._rank.sort(function (t, e) {
                      return t.rank - e.rank;
                    })),
                      this.rankItems.forEach(function (t, i) {
                        var n = e._rank[i];
                        null != n && null != n
                          ? ((t.node.active = !0),
                            t instanceof m
                              ? t.showItem(
                                  n.rank,
                                  n.displayName,
                                  n.amount,
                                  n.totalTipData,
                                  e.spriteFrame_gifts
                                )
                              : (t = t).showItem(
                                  n.rank,
                                  n.displayName,
                                  n.amount
                                ))
                          : ((t.node.active = !1), t.hideItem());
                      }),
                      null == (t = this.srcView) || t.scrollToTop(),
                      this.show();
                  }),
                  e
                );
              })(u)).prototype,
              "itemContainer",
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
            (w = e(k.prototype, "srcView", [f], {
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
  "chunks:///_virtual/LivestreamTipRankItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./LiveStreamConfig.ts",
    "./LiveStreamRankItemView.ts",
  ],
  function (t) {
    "use strict";
    var e, i, r, n, a, o, s, c, u, f, m, p;
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
            (o = t._decorator),
            (s = t.SpriteFrame),
            (c = t.Node),
            (u = t.Label),
            (f = t.Sprite);
        },
        function (t) {
          m = t.LiveStreamConfig;
        },
        function (t) {
          p = t.LiveStreamRankItemView;
        },
      ],
      execute: function () {
        var l, _, h, g, v, d, k, y, b;
        a._RF.push(
          {},
          "a0f03U3cmVDKbHXrZgA4iAE",
          "LivestreamTipRankItemView",
          void 0
        );
        var I = o.ccclass,
          w = o.property;
        t(
          "default",
          ((l = I("LivestreamTipRankItemView")),
          (_ = w([s])),
          (h = w([c])),
          (g = w([u])),
          l(
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
                    r(e, "sprFrame_rank", k, n(e)),
                    r(e, "gift_items", y, n(e)),
                    r(e, "txt_gift_amount", b, n(e)),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.showItem = function (e, i, r, n, a) {
                    var o,
                      s = this;
                    t.prototype.showItem.call(this, e, i, r),
                      this.spr_rank && (this.spr_rank.node.active = !0),
                      this.sprFrame_rank &&
                        this.spr_rank &&
                        (this.spr_rank.spriteFrame =
                          null != (o = this.sprFrame_rank[e - 1])
                            ? o
                            : this.spr_rank.spriteFrame);
                    var c = Object.keys(n)
                      .map(function (t) {
                        return [t, n[t]];
                      })
                      .filter(function (t) {
                        return t[1] > 0;
                      });
                    c.sort(function (t, e) {
                      return e[0] - t[0];
                    }),
                      this.gift_items.forEach(function (t, e) {
                        if (e < 5) {
                          var i = null != c[e];
                          if (
                            (s.gift_items[e] && (s.gift_items[e].active = i),
                            s.txt_gift_amount[e] &&
                              (s.txt_gift_amount[e].node.active = i),
                            t.children[0] && (t.children[0].active = i),
                            i && c[e] && t.children[0] && s.txt_gift_amount[e])
                          ) {
                            var r,
                              n = m.TIP_ITEM_INDEX[c[e][0]],
                              o = t.children[0].getComponent(f);
                            o &&
                              (o.spriteFrame =
                                null != (r = a[n]) ? r : o.spriteFrame),
                              (s.txt_gift_amount[e].string = c[e][1]);
                          }
                        }
                      });
                  }),
                  (a.hideItem = function () {
                    t.prototype.hideItem.call(this),
                      this.gift_items.forEach(function (t, e) {
                        t.active = !1;
                      }),
                      this.txt_gift_amount.forEach(function (t, e) {
                        t.node.active = !1;
                      });
                  }),
                  e
                );
              })(p)).prototype,
              "sprFrame_rank",
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
            (y = e(d.prototype, "gift_items", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (b = e(d.prototype, "txt_gift_amount", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (v = d))
          ) || v)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LiveStreamUserOnlinePopup.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SocketManager.ts",
    "./SettingPopup.ts",
    "./BaseLiveStreamNetworkController.ts",
    "./PlayerView.ts",
  ],
  function (e) {
    "use strict";
    var t, n, r, i, a, o, l, s, u, c, p, g;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy), (o = e._decorator), (l = e.Label), (s = e.Button);
        },
        function (e) {
          u = e.MessageRequest;
        },
        function (e) {
          c = e.SettingPopup;
        },
        function (e) {
          p = e.LiveStreamMessage;
        },
        function (e) {
          g = e.PlayerView;
        },
      ],
      execute: function () {
        var h, f, v, _, b, y, m, P, d, L, S;
        a._RF.push(
          {},
          "2ea3aK3o49Ag73O5DmomhVv",
          "LiveStreamUserOnlinePopup",
          void 0
        );
        var w = o.ccclass,
          M = o.property;
        e(
          "LiveStreamUserOnlinePopup",
          ((h = w("LiveStreamUserOnlinePopup")),
          (f = M([g])),
          (v = M(l)),
          (_ = M(s)),
          (b = M(s)),
          h(
            ((P = t(
              (m = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, a = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    ((t =
                      e.call.apply(e, [this].concat(a)) ||
                      this).baseLiveStreamController = void 0),
                    r(t, "player_views", P, i(t)),
                    r(t, "lbl_current_page", d, i(t)),
                    r(t, "btn_prev", L, i(t)),
                    r(t, "btn_next", S, i(t)),
                    (t.current_page = 0),
                    t
                  );
                }
                n(t, e);
                var a = t.prototype;
                return (
                  (a.setBaseLiveStream = function (e) {
                    this.baseLiveStreamController = e;
                  }),
                  (a.getMaxPage = function () {
                    return (
                      this.baseLiveStreamController.getUserOnline() /
                      this.player_views.length
                    );
                  }),
                  (a.show = function (t) {
                    e.prototype.show.call(this),
                      0 === this.current_page
                        ? this.sendPage()
                        : this.current_page > this.getMaxPage() &&
                          (this.current_page = this.getMaxPage());
                  }),
                  (a.onLoad = function () {
                    var t,
                      n,
                      r = this;
                    e.prototype.onLoad.call(this),
                      null == (t = this.btn_prev) ||
                        t.node.on("click", function () {
                          r.current_page > 0 &&
                            (r.current_page--, r.sendPage());
                        }),
                      null == (n = this.btn_next) ||
                        n.node.on("click", function () {
                          r.current_page < r.getMaxPage() - 1 &&
                            (r.current_page++, r.sendPage());
                        });
                  }),
                  (a.sendPage = function () {
                    var e, t;
                    this.lbl_current_page.string =
                      Math.floor(this.current_page + 1) + "";
                    var n = {};
                    (n.cmd = p.USER_ONLINE),
                      (n.L = 6),
                      (n.S = 6 * this.current_page),
                      null == (e = this.baseLiveStreamController) ||
                        null == (t = e.getNetworkController()) ||
                        t.sendWithZoneAndChannel(u.ZonePlugin_Type, n);
                  }),
                  (a.changeUserOnline = function (e) {
                    e.length <= 0 ||
                      this.player_views.forEach(function (t, n) {
                        if (n >= e.length) t.hide();
                        else {
                          var r;
                          t.show();
                          var i = null != (r = e[n]) ? r : null;
                          t.setUserInfo(i);
                        }
                      });
                  }),
                  (a.refresh = function () {}),
                  t
                );
              })(c)).prototype,
              "player_views",
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
            (d = t(m.prototype, "lbl_current_page", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (L = t(m.prototype, "btn_prev", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = t(m.prototype, "btn_next", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = m))
          ) || y)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/StreamSprite.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, i, r, n, o, s, h, u, a, d, l, c;
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
            (h = e.Sprite),
            (u = e.Texture2D),
            (a = e.SpriteFrame),
            (d = e.Size),
            (l = e.UITransform),
            (c = e.Component);
        },
      ],
      execute: function () {
        var v, f, m, p, w;
        o._RF.push({}, "bbc5a7RDwhBPowsf6fccWvK", "StreamSprite", void 0);
        var b = s.ccclass,
          x = s.property;
        e(
          "StreamSprite",
          ((v = b("StreamSprite")),
          (f = x(h)),
          v(
            ((w = t(
              (p = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, o = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    r(t, "vidWeb", w, n(t)),
                    (t.webview = null),
                    (t.video = null),
                    (t.texture = null),
                    (t.shouldRender = !1),
                    (t.tranfsorm = null),
                    (t.inited = !1),
                    t
                  );
                }
                i(t, e);
                var o = t.prototype;
                return (
                  (o.initTexture = function () {
                    if (!this.inited) {
                      (this.inited = !0), (this.texture = new u());
                      var e = Math.max(
                          1,
                          Math.floor(this.video.videoWidth || 0)
                        ),
                        t = Math.max(
                          1,
                          Math.floor(this.video.videoHeight || 0)
                        );
                      if (
                        (e &&
                          t &&
                          (this.texture.width !== e ||
                            this.texture.height !== t) &&
                          this.texture.reset({
                            width: e,
                            height: t,
                            format: u.PixelFormat.RGBA8888,
                          }),
                        this.vidWeb &&
                          ((this.vidWeb.spriteFrame = new a()),
                          (this.vidWeb.spriteFrame.texture = this.texture)),
                        this.tranfsorm)
                      ) {
                        var i,
                          r,
                          n =
                            (null == (i = this.tranfsorm) ? void 0 : i.width) /
                            this.video.videoWidth;
                        null == (r = this.tranfsorm) ||
                          r.setContentSize(
                            new d(
                              this.tranfsorm.width,
                              this.video.videoHeight * n
                            )
                          );
                      }
                    }
                  }),
                  (o.setWebview = function (e) {
                    this.webview = e || this.webview;
                  }),
                  (o.render = function () {
                    this.shouldRender = !0;
                  }),
                  (o.stopRender = function () {
                    this.shouldRender = !1;
                  }),
                  (o.removeTexture = function () {
                    this.vidWeb && (this.vidWeb.node.active = !1);
                  }),
                  (o.update = function (e) {
                    this.shouldRender &&
                      this.texture &&
                      this.video &&
                      this.updateTexture(this.video);
                  }),
                  (o.updateTexture = function (e) {
                    this.texture.uploadData(e);
                  }),
                  (o.initVideoElement = function () {
                    this.tranfsorm = this.node.getComponent(l);
                    try {
                      var e = this.getVideoElement();
                      e
                        ? ((this.video = e),
                          this.texture || this.initTexture(),
                          this.vidWeb && (this.vidWeb.node.active = !0))
                        : console.error("video element is null");
                    } catch (e) {
                      console.error(e);
                    }
                  }),
                  (o.getIframe = function () {
                    var e = this.webview;
                    return e._impl.webview || e._impl._iframe;
                  }),
                  (o.getVideoElement = function () {
                    var e = this.getIframe();
                    return (
                      e.contentWindow.document.getElementById(
                        "h5live-playerDiv"
                      ) ||
                      e.contentWindow.document.getElementById("my-video") ||
                      null
                    );
                  }),
                  t
                );
              })(c)).prototype,
              "vidWeb",
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
            (m = p))
          ) || m)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TopTipPopup.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SoundManager.ts"],
  function (e) {
    "use strict";
    var i, n, a, t, l, s, r, o, c, u, p;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (a = e.initializerDefineProperty),
            (t = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy),
            (s = e._decorator),
            (r = e.sp),
            (o = e.Label),
            (c = e.AudioClip),
            (u = e.Component);
        },
        function (e) {
          p = e.SoundManager;
        },
      ],
      execute: function () {
        var _, k, h, b, m, f, T, g, v;
        l._RF.push({}, "de3d7gC2BxGxKGb8S31qZrL", "TopTipPopup", void 0);
        var d = s.ccclass,
          P = s.property;
        e(
          "TopTipPopup",
          ((_ = d("TopTipPopup")),
          (k = P(r.Skeleton)),
          (h = P(o)),
          (b = P(c)),
          _(
            ((T = i(
              (f = (function (e) {
                function i() {
                  for (
                    var i, n = arguments.length, l = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    l[s] = arguments[s];
                  return (
                    (i = e.call.apply(e, [this].concat(l)) || this),
                    a(i, "ske_anim", T, t(i)),
                    a(i, "lbl_tenDaiGia", g, t(i)),
                    a(i, "sfx_tip", v, t(i)),
                    i
                  );
                }
                n(i, e);
                var l = i.prototype;
                return (
                  (l.show = function (e, i) {
                    var n,
                      a,
                      t = this;
                    switch (
                      (p.getInstance().playAdditionalSfx(this.sfx_tip),
                      (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                        e.replace(/TIP1_/g, "")).replace(/TIP2_/g, "")).replace(
                        /TIP3_/g,
                        ""
                      )).replace(/TIP4_/g, "")).replace(/TIP5_/g, "")).replace(
                        /TIP6_/g,
                        ""
                      )).replace(/TIP7_/g, "")).replace(/TIP8_/g, "")).replace(
                        /TIP9_/g,
                        ""
                      )).replace(/TIP10_/g, "")),
                      (this.node.active = !0),
                      this.lbl_tenDaiGia && (this.lbl_tenDaiGia.string = e),
                      i)
                    ) {
                      case 1e3:
                        var l;
                        null == (l = this.ske_anim) || l.setSkin("1K");
                        break;
                      case 2e3:
                        var s;
                        null == (s = this.ske_anim) || s.setSkin("2K");
                        break;
                      case 5e3:
                        var r;
                        null == (r = this.ske_anim) || r.setSkin("5K");
                        break;
                      case 1e4:
                        var o;
                        null == (o = this.ske_anim) || o.setSkin("10K");
                        break;
                      case 5e4:
                        var c;
                        null == (c = this.ske_anim) || c.setSkin("50K");
                        break;
                      case 1e5:
                        var u;
                        null == (u = this.ske_anim) || u.setSkin("100K");
                        break;
                      case 5e5:
                        var _;
                        null == (_ = this.ske_anim) || _.setSkin("500K");
                        break;
                      case 1e6:
                        var k;
                        null == (k = this.ske_anim) || k.setSkin("1TR");
                        break;
                      case 5e6:
                        var h;
                        null == (h = this.ske_anim) || h.setSkin("5TR");
                        break;
                      case 1e7:
                        var b;
                        null == (b = this.ske_anim) || b.setSkin("10TR");
                    }
                    null == (n = this.ske_anim) ||
                      n.setAnimation(0, "animation", !1),
                      null == (a = this.ske_anim) ||
                        a.setCompleteListener(function (e) {
                          e.animation && e.animation.name;
                          t.hide();
                        });
                  }),
                  (l.update = function (e) {
                    var i,
                      n,
                      a,
                      t =
                        null == (i = this.ske_anim)
                          ? void 0
                          : i.findBone("TEXT");
                    t &&
                      this.lbl_tenDaiGia &&
                      (null == (n = this.lbl_tenDaiGia.node.parent) ||
                        n.setPosition(t.x, t.y, 0),
                      null == (a = this.lbl_tenDaiGia.node.parent) ||
                        a.setScale(t.scaleX, t.scaleY, 0));
                  }),
                  (l.hide = function () {
                    this.node.active = !1;
                  }),
                  i
                );
              })(u)).prototype,
              "ske_anim",
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
            (g = i(f.prototype, "lbl_tenDaiGia", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = i(f.prototype, "sfx_tip", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = f))
          ) || m)
        );
        l._RF.pop();
      },
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/base-livestream",
    "chunks:///_virtual/base-livestream"
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
