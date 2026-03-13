System.register(
  "chunks:///_virtual/Banner9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (t) {
    "use strict";
    var e, i, n, o, s, a, r, l, c, h, d, u;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (a = t._decorator),
            (r = t.Node),
            (l = t.sp),
            (c = t.Sprite),
            (h = t.tween),
            (d = t.Vec3);
        },
        function (t) {
          u = t.GameObject;
        },
      ],
      execute: function () {
        var m, p, f, y, v, A, b;
        s._RF.push({}, "00fd1VznGFEcr9NDOjYxdEF", "Banner9930", void 0);
        var S = a.ccclass,
          g = a.property;
        t(
          "Banner9930",
          ((m = S("Banner9930")),
          (p = g({ type: r })),
          (f = g({ type: r })),
          m(
            ((A = e(
              (v = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    n(e, "staticHolder", A, o(e)),
                    n(e, "animHolder", b, o(e)),
                    (e.defaultSkin = "default"),
                    (e.fireCrackerSkin = "FireCracker_String"),
                    (e.symbolAnims = []),
                    (e.staticSymbols = []),
                    (e.tweenOpen = null),
                    e
                  );
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("PLAY_ANIM_IDLE", this.playAnimIdle, this),
                      this.node.on("PLAY_ANIM_OPEN", this.playAnimOpen, this),
                      this.node.on("PLAY_ANIM_BLUR", this.playAnimBlur, this),
                      this.node.on("CHANGE_SIZE", this.changeSize, this),
                      this.node.on("RESET_BANNER", this.resetBanner, this),
                      (this.symbolAnims =
                        this.animHolder.getComponentsInChildren(l.Skeleton)),
                      (this.staticSymbols =
                        this.staticHolder.getComponentsInChildren(c)),
                      this.resetBanner();
                  }),
                  (s.playAnimBlur = function () {
                    (this.animHolder.active = !1),
                      (this.staticHolder.active = !0);
                  }),
                  (s.playAnimIdle = function (t) {
                    (this.node.isOpened = !1),
                      (this.staticHolder.active = t),
                      (this.animHolder.active = !t),
                      (this.node.isFake = t),
                      this.symbolAnims.forEach(function (t) {
                        t.setAnimation(0, "Idle", !0);
                      });
                  }),
                  (s.playAnimOpen = function (t, e) {
                    var i = this,
                      n = this.config.DELAY_OPEN_BANNER;
                    (this.node.isOpened = !0),
                      (this.staticHolder.active = !1),
                      (this.animHolder.active = !0);
                    var o = this.getBannerRange(t),
                      s = o.from,
                      a = o.to,
                      r = h(this.node),
                      l = e ? 1.5 : 1;
                    e || r.delay(0.2 * n),
                      r
                        .call(function () {
                          i.soundPlayer &&
                            i.soundPlayer.playSfx("FIRE_CRACKER"),
                            i.symbolAnims.forEach(function (t, e) {
                              (t.node.active = e >= s && e <= a),
                                (t.timeScale = l),
                                t.setAnimation(0, "Dissapear", !1);
                            });
                        })
                        .delay((0.8 * n) / l)
                        .call(function () {
                          i.animHolder.active = !1;
                        })
                        .start();
                  }),
                  (s.changeSize = function (t) {
                    (this.node.active = !0),
                      (this.node.size = t),
                      (this.node.isOpened = !1);
                    for (var e = this.symbolAnims.length, i = 0; i < e; i++) {
                      var n = this.symbolAnims[i];
                      (n.node.active = i < t),
                        n.setSkin(
                          i + 1 === t ? this.defaultSkin : this.fireCrackerSkin
                        ),
                        (this.staticSymbols[i].node.active = i < t);
                    }
                  }),
                  (s.resetBanner = function () {
                    (this.node.isOpened = !1),
                      (this.animHolder.active = !1),
                      (this.staticHolder.active = !1),
                      (this.node.active = !1),
                      this.node.setPosition(new d(this.node.position.x, -1e4));
                  }),
                  (s.getBannerRange = function (t) {
                    var e = t.format,
                      i = t.step,
                      n = 3 + e - 1;
                    return e > 0
                      ? { from: n, to: 6 }
                      : e < 0
                      ? { from: 0, to: n }
                      : 0 === e
                      ? { from: i - 1 - 3, to: i - 1 }
                      : void 0;
                  }),
                  e
                );
              })(u)).prototype,
              "staticHolder",
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
            (b = e(v.prototype, "animHolder", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (y = v))
          ) || y)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetCellHistory9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotBetCellHistory.ts"],
  function (t) {
    "use strict";
    var e, r, o, s;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (r = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          s = t.SlotBetCellHistory;
        },
      ],
      execute: function () {
        var l;
        r._RF.push({}, "345712rPfdKkq7OzC9IoqzO", "BetCellHistory9930", void 0);
        var i = o.ccclass;
        o.property,
          t(
            "BetCellHistory9930",
            i("BetCellHistory9930")(
              (l = (function (t) {
                function r() {
                  return t.apply(this, arguments) || this;
                }
                return e(r, t), r;
              })(s))
            ) || l
          );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetHistoryDetail9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotBetHistoryDetail.ts",
    "./BetHistoryScrollItem9930.ts",
    "./utils2.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, r, s, a, l, o, h, c, u, g, d, p, m, f, v, y, P, w, L;
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
            (a = t._decorator),
            (l = t.Prefab),
            (o = t.Node),
            (h = t.Label),
            (c = t.SpriteFrame),
            (u = t.Event),
            (g = t.v2),
            (d = t.Button),
            (p = t.instantiate),
            (m = t.UITransform),
            (f = t.Vec3),
            (v = t.Sprite),
            (y = t.Vec2);
        },
        function (t) {
          P = t.SlotBetHistoryDetail;
        },
        function (t) {
          w = t.BetHistoryScrollItem9930;
        },
        function (t) {
          L = t.formatMoney;
        },
      ],
      execute: function () {
        var b, C, B, V, A, M, S, D, H, T, I, E, G, J, x, _, k;
        s._RF.push(
          {},
          "0af90KXKjNIu5aTyr6SgOsN",
          "BetHistoryDetail9930",
          void 0
        );
        var O = a.ccclass,
          W = a.property,
          N = ["MAJOR", "GRAND"];
        t(
          "BetHistoryDetail9930",
          ((b = O("BetHistoryDetail9930")),
          (C = W({ type: l })),
          (B = W({ type: o })),
          (V = W({ type: o })),
          (A = W({ type: h })),
          (M = W({ type: h })),
          (S = W({ type: o })),
          (D = W({ type: c })),
          b(
            ((I = e(
              (T = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    n(e, "scrollItem", I, r(e)),
                    n(e, "highlight", E, r(e)),
                    n(e, "titleLayout", G, r(e)),
                    n(e, "title", J, r(e)),
                    n(e, "titleWinAmt", x, r(e)),
                    n(e, "titleJP", _, r(e)),
                    n(e, "listJP", k, r(e)),
                    (e.currentPage = 0),
                    (e.curHighLight = 0),
                    (e.modeItem = void 0),
                    (e.summaryData = void 0),
                    (e.scrollList = []),
                    e
                  );
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("GET_GAME_MODEL", this.getGameModel, this),
                      this.node.on(
                        "ON_SCROLL_CLICK",
                        this.onScrollClick.bind(this)
                      ),
                      this.node.mainDirector ||
                        this.node.dispatchEvent(new u("GET_GAME_MODEL", !0)),
                      this.prevModeBtn && (this.prevModeBtn.active = !0),
                      this.nextModeBtn && (this.nextModeBtn.active = !0),
                      this.scrollView.scrollTo(g(0, 0)),
                      this.title && (this.title.string = ""),
                      (this.currentPage = -1),
                      (this.curHighLight = -1);
                  }),
                  (s.onScrollClick = function (t) {
                    t.propagationStopped = !0;
                    var e = t.details.index;
                    e != this.currentPage &&
                      ((this.currentPage = e),
                      this.requestDetail(e),
                      this.updateHighlight(this.currentPage),
                      this.updateScroller());
                  }),
                  (s.onRequestResponse = function (t) {
                    if (
                      (this.loading && (this.loading.active = !1),
                      t.error || !t.data || t.data.resultList.length <= 0)
                    )
                      this.noBetDetail && (this.noBetDetail.active = !0);
                    else {
                      if (
                        (this.noBetDetail && (this.noBetDetail.active = !1),
                        t.data && t.data.resultList)
                      ) {
                        this.isGetMode || this.getModeIndex(t.data.scroll),
                          (this.nextModeBtn.getComponent(d).interactable = !0),
                          (this.prevModeBtn.getComponent(d).interactable = !0),
                          this.hideAllView(),
                          (this.scrollView.node.parent.active = !0),
                          (this.session.node.active = !0),
                          t.data.total <= this.currentPage + 1 &&
                            (this.nextModeBtn.getComponent(d).interactable =
                              !1);
                        var e = t.data.resultList[0];
                        switch (e.mode) {
                          case "normal":
                            (this.normalGameView.active = !0),
                              (this.normalGameData = e),
                              this.updateTitle(e),
                              this.updateTitleJP(e),
                              this.updateWinAmt(e),
                              this.normalGameView &&
                                this.normalGameView.emit(
                                  "UPDATE_DETAIL_VIEW",
                                  e
                                );
                            break;
                          case "free":
                            (this.freeGameView.active = !0),
                              this.updateTitle(e, this.currentPage),
                              this.updateTitleJP(e),
                              this.updateWinAmt(e),
                              (this.freeGameData[this.currentFreeGamePage] = e),
                              this.freeGameView &&
                                this.freeGameView.emit(
                                  "UPDATE_DETAIL_VIEW",
                                  e,
                                  this.freeIndexes
                                );
                            break;
                          default:
                            (this.prevModeBtn.getComponent(d).interactable =
                              !1),
                              (this.nextModeBtn.getComponent(d).interactable =
                                !0),
                              (this.summaryView.active = !0),
                              this.title && (this.title.string = ""),
                              this.summaryView.emit("UPDATE_SUMMARY", e),
                              (this.summaryData = e);
                        }
                      }
                      this.prevModeBtn.getComponent(d).interactable =
                        this.currentPage > -1;
                    }
                  }),
                  (s.getModeIndex = function (t) {
                    var e = this;
                    (this.isGetMode = !0),
                      this.scrollContent.removeAllChildren(),
                      this.addButtonTotalPage();
                    var i = 0;
                    t.forEach(function (t) {
                      var n = t.split(":"),
                        r = parseInt(n[0]),
                        s = n[1];
                      switch ((e.scrollList.push(s), s)) {
                        case "normal":
                          s = "Normal";
                          break;
                        case "free":
                          s = "Free" + ++i;
                      }
                      var a = p(e.scrollItem);
                      (a.parent = e.scrollContent),
                        a.getComponent(w).setIndex(r),
                        (a.getChildByName("Label").getComponent(h).string = s),
                        e.updateHighlight(e.currentPage),
                        e.updateScroller();
                    }),
                      (this.scrollView.enabled = t && 1 !== t.length);
                  }),
                  (s.onPrevMode = function () {
                    (this.currentPage = this.currentPage - 1),
                      this.curHighLight >= 0 && (this.curHighLight -= 1),
                      this.updateHighlight(this.currentPage),
                      this.updateScroller(),
                      this.soundPlayer && this.soundPlayer.playSFXClick(),
                      this.requestDetail(this.currentPage);
                  }),
                  (s.onNextMode = function () {
                    (this.currentPage += 1),
                      (this.curHighLight += 1),
                      this.updateHighlight(this.currentPage),
                      this.updateScroller(),
                      this.requestDetail(this.currentPage),
                      this.soundPlayer && this.soundPlayer.playSFXClick();
                  }),
                  (s.updateScroller = function () {
                    if (
                      (this.scrollView.stopAutoScroll(),
                      this.curHighLight >= 1 &&
                        this.curHighLight + 1 <=
                          this.scrollContent.children.length)
                    ) {
                      var t =
                          this.scrollContent.children[0].getComponent(m).width,
                        e = (this.curHighLight - 1) * t;
                      this.scrollView.scrollToOffset(g(e, 0), 0);
                    } else
                      0 == this.curHighLight &&
                        this.scrollView.scrollToOffset(g(0, 0), 0);
                  }),
                  (s.addButtonTotalPage = function () {
                    var t = p(this.scrollItem),
                      e = null;
                    t.getComponent(w).setIndex(-1),
                      (t.parent = this.scrollContent),
                      (e = t.getComponent(h)
                        ? t.getComponent(h)
                        : t.getChildByName("Label").getComponent(h)) &&
                        (e.string = "Tổng kết");
                  }),
                  (s.updateHighlight = function (t) {
                    this.updateStateButton();
                    for (
                      var e = 0;
                      e < this.scrollContent.children.length;
                      e++
                    ) {
                      var i = this.scrollContent.children[e],
                        n = i.getComponent(w);
                      if (n && n.index == t)
                        return (
                          (this.highlight.parent = i),
                          this.highlight.setPosition(new f(0, 0, 0)),
                          (this.highlight.active = !0),
                          void (this.curHighLight = e)
                        );
                    }
                  }),
                  (s.updateTitle = function (t, e) {
                    var i = this.title.string;
                    t &&
                      (t.mode && "normal" === t.mode
                        ? (i = "Normal")
                        : "free" === t.mode && (i = "Free" + e),
                      t.mode || (i = t)),
                      (this.title.string = i);
                  }),
                  (s.updateTitleJP = function (t) {
                    if (
                      (this.titleLayout && (this.titleLayout.active = !1),
                      this.titleJP && this.listJP && this.listJP.length > 0)
                    ) {
                      var e = t.latestWinJackpotInfo;
                      if (e) {
                        var i = -1;
                        if (
                          (N.forEach(function (t, n) {
                            e[0].jackpotId.indexOf(t) >= 0 && (i = n);
                          }),
                          this.listJP.length <= N.length && -1 != i)
                        ) {
                          (this.titleJP.getComponent(v).spriteFrame =
                            this.listJP[i]),
                            (this.titleJP.active = !0),
                            this.updateTitle(t);
                          var n = this.title.string;
                          this.title.string = n + " + ";
                        }
                      } else this.titleJP.active = !1;
                    }
                    this.titleLayout && (this.titleLayout.active = !0);
                  }),
                  (s.updateWinAmt = function (t) {
                    var e = t.latestWinJackpotInfo,
                      i = e && e.jackpotAmount ? e.jackpotAmount : 0,
                      n = t.mode,
                      r = t.winAmount;
                    if (
                      ("free" === n && (r = t.winAmount + i),
                      r && r > 0 && "normal" !== n)
                    ) {
                      var s = ": " + L(r);
                      this.titleWinAmt.string = s;
                    }
                    this.titleLayout.active = !0;
                  }),
                  (s.hideAllView = function () {
                    (this.summaryView.active = !1),
                      (this.normalGameView.active = !1),
                      (this.freeGameView.active = !1),
                      (this.title.string = ""),
                      (this.titleWinAmt.string = ""),
                      (this.titleJP.active = !1),
                      (this.titleLayout.active = !1);
                  }),
                  (s.resetUI = function () {
                    this.resetData(),
                      (this.currentPage = -1),
                      (this.curHighLight = -1),
                      (this.title.string = ""),
                      (this.titleWinAmt.string = ""),
                      (this.titleJP.active = !1),
                      this.scrollView.scrollTo(g(0, 0)),
                      (this.currentOffset = this.scrollView.getScrollOffset()),
                      (this.scrollView.node.parent.active = !1),
                      (this.session.node.active = !1),
                      this.hideGameMode(),
                      this.hideAllView(),
                      this.updateHighlight(this.currentPage),
                      this.updateScroller(),
                      this.normalGameView.emit("RESET_ALL"),
                      this.freeGameView.emit("RESET_ALL"),
                      (this.summaryView.active = !1);
                  }),
                  (s.requestErr = function () {
                    t.prototype.requestErr.call(this),
                      this.hideAllView(),
                      (this.scrollView.node.parent.active = !1),
                      (this.session.node.active = !1);
                  }),
                  (s.onScrollEnded = function () {}),
                  (s.updateStateButton = function () {
                    (this.prevModeBtn.getComponent(d).interactable =
                      this.currentPage > 0),
                      (this.nextModeBtn.getComponent(d).interactable =
                        this.currentPage <
                        this.scrollContent.children.length - 1);
                  }),
                  (s.updateStatusButtons = function (t, e) {}),
                  (s.onScrolling = function (t) {
                    var e = this.scrollView.getScrollOffset();
                    this.currentOffset = new y(Math.abs(e.x), Math.abs(e.y));
                  }),
                  e
                );
              })(P)).prototype,
              "scrollItem",
              [C],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (E = e(T.prototype, "highlight", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (G = e(T.prototype, "titleLayout", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (J = e(T.prototype, "title", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (x = e(T.prototype, "titleWinAmt", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (_ = e(T.prototype, "titleJP", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (k = e(T.prototype, "listJP", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (H = T))
          ) || H)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetHistoryScrollItem9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./GameObject.ts",
    "./CustomTypeShare.ts",
  ],
  function (t) {
    "use strict";
    var e, n, o, i, s;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (o = t._decorator);
        },
        function (t) {
          i = t.GameObject;
        },
        function (t) {
          s = t.CustomEvent;
        },
      ],
      execute: function () {
        var c;
        n._RF.push(
          {},
          "71865bxCrFB4oNv0nA6sBy1",
          "BetHistoryScrollItem9930",
          void 0
        );
        var r = o.ccclass;
        o.property,
          t(
            "BetHistoryScrollItem9930",
            r("BetHistoryScrollItem9930")(
              (c = (function (t) {
                function n() {
                  for (
                    var e, n = arguments.length, o = new Array(n), i = 0;
                    i < n;
                    i++
                  )
                    o[i] = arguments[i];
                  return (
                    ((e =
                      t.call.apply(t, [this].concat(o)) ||
                      this).clickItemEvent = null),
                    (e.index = null),
                    e
                  );
                }
                e(n, t);
                var o = n.prototype;
                return (
                  (o.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.node.setIndex = this.setIndex.bind(this));
                  }),
                  (o.onClick = function () {
                    this.soundPlayer && this.soundPlayer.playSFXClick(),
                      (this.clickItemEvent = new s("ON_SCROLL_CLICK", !0, {
                        index: this.index,
                      })),
                      this.node.dispatchEvent(this.clickItemEvent);
                  }),
                  (o.setIndex = function (t) {
                    void 0 === t && (t = -1), (this.index = t);
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
  "chunks:///_virtual/BetHistorySummary9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./SlotBetSummaryHistory.ts",
  ],
  function (t) {
    "use strict";
    var n, o, r, i, s;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy), (r = t._decorator);
        },
        function (t) {
          i = t.formatMoney;
        },
        function (t) {
          s = t.SlotBetSummaryHistory;
        },
      ],
      execute: function () {
        var u;
        o._RF.push(
          {},
          "66823ycySNN+6Bu2VLfgV0P",
          "BetHistorySummary9930",
          void 0
        );
        var e = r.ccclass;
        r.property,
          t(
            "BetHistorySummary9930",
            e("BetHistorySummary9930")(
              (u = (function (t) {
                function o() {
                  return t.apply(this, arguments) || this;
                }
                return (
                  n(o, t),
                  (o.prototype.updateSummary = function (t) {
                    t &&
                      (this.totalWinAmount &&
                        (this.totalWinAmount.string = i(
                          parseInt(t.totalWinAmount)
                        )),
                      this.normalWinAmount &&
                        (this.normalWinAmount.string = i(
                          parseInt(t.totalNormalWinAmount)
                        )),
                      this.freeWinAmount &&
                        (this.freeWinAmount.string = i(
                          parseInt(t.totalFreeWinAmount)
                        )),
                      this.jackpotWinAmount &&
                        (this.jackpotWinAmount.string = i(
                          parseInt(t.totalJpWinAmount)
                        )));
                  }),
                  o
                );
              })(s))
            ) || u
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BetTableHistoryDetail9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SlotBetTableHistoryDetail.ts",
    "./CustomEnum.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, s, a, l, r, o, h, c, u;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (s = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (l = e._decorator),
            (r = e.Node),
            (o = e.Vec3),
            (h = e.sp);
        },
        function (e) {
          c = e.SlotBetTableHistoryDetail;
        },
        function (e) {
          u = e.SlotGameMode;
        },
      ],
      execute: function () {
        var g, p, m, f, y;
        a._RF.push(
          {},
          "f8f6crSbyFEYonRnQJhdNI5",
          "BetTableHistoryDetail9930",
          void 0
        );
        var d = l.ccclass,
          _ = l.property,
          b = { 2: "X2", 3: "X3", 4: "X4" },
          B = { 0: "Yellow", 1: "Red", 2: "Blue" };
        e(
          "BetTableHistoryDetail9930",
          ((g = d("BetTableHistoryDetail9930")),
          (p = _(r)),
          g(
            ((y = t(
              (f = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, a = new Array(i), l = 0;
                    l < i;
                    l++
                  )
                    a[l] = arguments[l];
                  return (
                    (t = e.call.apply(e, [this].concat(a)) || this),
                    n(t, "bigWilds", y, s(t)),
                    t
                  );
                }
                i(t, e);
                var a = t.prototype;
                return (
                  (a.updateDetailView = function (e, t) {
                    (this.data = e),
                      (this.pages = t),
                      this.clearTable(),
                      t &&
                        t.length > 1 &&
                        (this.sceneType === u.FreeGame
                          ? this.nextPageBtn &&
                            (this.nextPageBtn.active =
                              this.currentFreeGamePage < t.length - 1)
                          : this.sceneType === u.JackpotGame
                          ? this.nextPageBtn &&
                            (this.nextPageBtn.active =
                              this.currentJackpotPage < t.length - 1)
                          : this.sceneType === u.BonusGame
                          ? this.nextPageBtn &&
                            (this.nextPageBtn.active =
                              this.currentBonusGamePage < t.length - 1)
                          : this.sceneType === u.TopUpGame &&
                            this.nextPageBtn &&
                            (this.nextPageBtn.active =
                              this.currentTopUpGamePage < t.length - 1)),
                      this.renderTable(e);
                  }),
                  (a.renderTable = function (e) {
                    var t,
                      i = this,
                      n = e.matrixFormat,
                      s = e.matrixResult,
                      a = e.result,
                      l = e.mode,
                      r = e.paylines,
                      h = a && a.nSubSym ? a.nSubSym : "",
                      c =
                        a && a.freeWildMultipliers ? a.freeWildMultipliers : "";
                    if (
                      ("normal" == l && (t = a.nlpl),
                      "free" == l && (t = a.flpl),
                      s)
                    ) {
                      this.bigWilds.forEach(function (e) {
                        i.setOpacity(e, 0);
                      });
                      var g = "normal" !== l;
                      "normal" === l &&
                        (g =
                          s.filter(function (e) {
                            return "K" === e;
                          }).length >= 3);
                      var p =
                          this.sceneType === u.FreeGame &&
                          this.config.SYMBOL_WIDTH_FREE_GAME
                            ? this.config.SYMBOL_WIDTH_FREE_GAME
                            : this.config.SYMBOL_WIDTH,
                        m =
                          this.sceneType === u.FreeGame &&
                          this.config.SYMBOL_HEIGHT_FREE_GAME
                            ? this.config.SYMBOL_HEIGHT_FREE_GAME
                            : this.config.SYMBOL_HEIGHT;
                      (p = this.customSymbolWidth || p),
                        (m = this.customSymbolHeight || m);
                      for (
                        var f = (-n.length / 2 + 0.5) * p, y = 0, d = 0;
                        d < n.length;
                        d++
                      ) {
                        this.symbols[d] = [];
                        for (
                          var _ = (n[d] / 2 - 0.5) * m, b = t[d], B = 0;
                          B < n[d];
                          B++
                        ) {
                          var S = s[y],
                            T = this.getSymbol();
                          if (
                            ((T.parent = this.slotTable),
                            (T.col = d),
                            (T.row = B),
                            (T.val = S),
                            T.setScale(
                              new o(this.symbolScaleX, this.symbolScaleY, 1)
                            ),
                            T.setPosition(f + d * p, _ - B * m),
                            T.emit("RESET"),
                            T.emit(
                              "INIT_FOR_PAYLINE",
                              this.enableHighlightHolder,
                              null,
                              !1
                            ),
                            ("" !== S && S !== s[y]) ||
                              T.emit("CHANGE_TO_SYMBOL_HISTORY", S, d, g),
                            T &&
                              h &&
                              h.includes(y) &&
                              "normal" === l &&
                              T.emit("SHOW_SUB_SYMBOL", !0),
                            T.emit(
                              "SHOW_ICON_CRACKER",
                              this._isUnderBanner(b, B)
                            ),
                            "K" === S && d >= 1 && "free" === l && T)
                          ) {
                            this.setOpacity(T, 0);
                            var E = d - 1,
                              H = 1;
                            c && 5 === c.length && (H = c[d]),
                              this.showBigWild(E, H, r);
                          }
                          (this.symbols[d][B] = T), y++;
                        }
                      }
                      this.showPaylines();
                    }
                  }),
                  (a._isUnderBanner = function (e, t) {
                    return (
                      void 0 !== e &&
                      9 !== e &&
                      (0 === e || (e > 0 && t >= e) || (e < 0 && t <= 2 + e))
                    );
                  }),
                  (a.showBigWild = function (e, t, i) {
                    if (this.bigWilds && !(this.bigWilds.length <= 0)) {
                      var n = this.bigWilds[e],
                        s = n.getComponent(h.Skeleton),
                        a = t > 1 ? b[t] : "default",
                        l = t > 1 ? "_Light" : "";
                      s.setSkin(a),
                        i && i.length > 0
                          ? s.setAnimation(0, "Scroll_Idle_" + B[e] + l, !0)
                          : s.setAnimation(0, "Idle_" + B[e], !0),
                        this.setOpacity(n, 255);
                    }
                  }),
                  (a.updateTotalWinAmount = function () {}),
                  t
                );
              })(c)).prototype,
              "bigWilds",
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
            (m = f))
          ) || m)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigWildController9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./utils2.ts"],
  function (e) {
    "use strict";
    var i, t, r, n, o, l, a, c, s, u;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (n = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (l = e._decorator),
            (a = e.Node),
            (c = e.sp),
            (s = e.Component);
        },
        function (e) {
          u = e.setOpacity;
        },
      ],
      execute: function () {
        var p, f, d, g, h, y, m;
        o._RF.push(
          {},
          "1af8eYQ5cBAZYPB9Vl0dxuM",
          "BigWildController9930",
          void 0
        );
        var B = l.ccclass,
          W = l.property;
        e(
          "BigWildController9930",
          ((p = B("BigWildController9930")),
          (f = W({ type: a })),
          (d = W({ type: c.Skeleton })),
          p(
            ((y = i(
              (h = (function (e) {
                function i() {
                  for (
                    var i, t = arguments.length, o = new Array(t), l = 0;
                    l < t;
                    l++
                  )
                    o[l] = arguments[l];
                  return (
                    (i = e.call.apply(e, [this].concat(o)) || this),
                    r(i, "frame", y, n(i)),
                    r(i, "bigWild", m, n(i)),
                    i
                  );
                }
                t(i, e);
                var o = i.prototype;
                return (
                  (o.onLoad = function () {
                    this.node.on("SHOW_BIG_WILD", this.showFrameBigWild, this),
                      u(this.frame, 0);
                  }),
                  (o.showFrameBigWild = function (e) {
                    void 0 === e && (e = !1), u(this.frame, e ? 255 : 0);
                  }),
                  i
                );
              })(s)).prototype,
              "frame",
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
            (m = i(h.prototype, "bigWild", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = h))
          ) || g)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigWildTable9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (i) {
    "use strict";
    var t, e, l, s, n, o, r, a, h, c, d, u;
    return {
      setters: [
        function (i) {
          (t = i.applyDecoratedDescriptor),
            (e = i.inheritsLoose),
            (l = i.initializerDefineProperty),
            (s = i.assertThisInitialized);
        },
        function (i) {
          (n = i.cclegacy),
            (o = i._decorator),
            (r = i.Node),
            (a = i.Prefab),
            (h = i.sp),
            (c = i.instantiate),
            (d = i.Vec3);
        },
        function (i) {
          u = i.GameObject;
        },
      ],
      execute: function () {
        var p, _, f, W, g, S, b;
        n._RF.push({}, "e6744NFtHBKx53HCOzehdvL", "BigWildTable9930", void 0);
        var m = o.ccclass,
          B = o.property,
          v = { 2: "X2", 3: "X3", 4: "X4" },
          I = { 1: "Yellow", 2: "Red", 3: "Blue" };
        i(
          "BigWildTable9930",
          ((p = m("BigWildTable9930")),
          (_ = B({ type: r })),
          (f = B({ type: a })),
          p(
            ((S = t(
              (g = (function (i) {
                function t() {
                  for (
                    var t, e = arguments.length, n = new Array(e), o = 0;
                    o < e;
                    o++
                  )
                    n[o] = arguments[o];
                  return (
                    (t = i.call.apply(i, [this].concat(n)) || this),
                    l(t, "bigWildHolder", S, s(t)),
                    l(t, "bigWildPrefab", b, s(t)),
                    (t.bigWilds = []),
                    (t.isFastToResult = !1),
                    (t.maxMultiplier = 0),
                    t
                  );
                }
                e(t, i);
                var n = t.prototype;
                return (
                  (n.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      this.node.on("SHOW_BIG_WILD", this.showBigWild, this),
                      this.node.on("RESET_BIG_WILD", this.resetBigWild, this),
                      this.node.on("FAST_TO_RESULT", this.fastTotResult, this),
                      this.node.on(
                        "SHOW_SCROLL_BIG_WILD",
                        this.showScrollBigWild,
                        this
                      ),
                      this.node.on(
                        "STOP_SOUND_BIG_WILD",
                        this.stopSoundBigWild,
                        this
                      ),
                      this._createBigWilds(),
                      (this.isFastToResult = !1),
                      (this.maxMultiplier = 0);
                  }),
                  (n.onDisable = function () {
                    this.resetBigWild();
                  }),
                  (n.showBigWild = function (i) {
                    for (
                      var t = i.matrix, e = i.multiply, l = i.isResume, s = 1;
                      s < 4;
                      s++
                    ) {
                      var n = e[s];
                      t[s].includes("K") && this._setUpWild(s, n, l);
                    }
                    (this.maxMultiplier = Math.max.apply(null, e)),
                      this.soundPlayer &&
                        !l &&
                        this.soundPlayer.playSfx("WILD_APPEAR");
                  }),
                  (n.resetBigWild = function () {
                    var i = this;
                    this.unscheduleAllCallbacks(),
                      this.bigWilds.forEach(function (t) {
                        (t.active = !1),
                          (t.mul = 0),
                          t.emit("SHOW_BIG_WILD", !1),
                          i.showReel(t.col, !0);
                      });
                  }),
                  (n.showScrollBigWild = function () {
                    var i = this;
                    this.bigWilds.forEach(function (i) {
                      var t = i.getComponentInChildren(h.Skeleton);
                      if (t) {
                        var e = I[i.col],
                          l = i.mul > 1 ? "_Light" : "";
                        t.setAnimation(0, "Scroll_Appear_" + e + l, !1),
                          t.addAnimation(0, "Scroll_Idle_" + e + l, !1);
                      }
                    }),
                      this.soundPlayer &&
                        this.soundPlayer.playSfx("SHOW_SCROLL"),
                      this.maxMultiplier > 1 &&
                        this.scheduleOnce(function () {
                          i.soundPlayer.playSfx("SHOW_MUL");
                        }, 1);
                  }),
                  (n.stopSoundBigWild = function () {}),
                  (n.fastTotResult = function () {
                    this.isFastToResult && (this.isFastToResult = !0);
                  }),
                  (n._createBigWilds = function () {
                    this.bigWilds = [];
                    for (
                      var i = this.config,
                        t = i.SYMBOL_WIDTH,
                        e = -(i.FREE_TABLE_FORMAT.length / 2 - 0.5) * t,
                        l = 1;
                      l <= 3;
                      l++
                    ) {
                      var s = c(this.bigWildPrefab);
                      this.bigWilds.push(s);
                      var n = new d(e + l * t, 0, 0);
                      s &&
                        ((s.col = l),
                        (s.parent = this.bigWildHolder),
                        s.setPosition(n),
                        this._setMixAnimation(l),
                        (s.active = !1));
                    }
                  }),
                  (n._setMixAnimation = function (i) {
                    var t = this.bigWilds[i - 1],
                      e = I[i],
                      l = t.getComponentInChildren(h.Skeleton);
                    l.setMix("Appear_" + e, "Idle_" + e, 0.3),
                      l.setMix("Scroll_Appear_" + e, "Scroll_Idle_" + e, 0.5),
                      l.setMix(
                        "Scroll_Appear_" + e + "_Light",
                        "Scroll_Idle_" + e + "_Light",
                        0.5
                      ),
                      l.setMix("Appear_" + e, "Scroll_Appear_" + e, 0.1),
                      l.setMix(
                        "Appear_" + e,
                        "Scroll_Appear_" + e + "_Light",
                        0.1
                      );
                  }),
                  (n._setUpWild = function (i, t, e) {
                    var l = this;
                    if (0 !== i && 4 !== i) {
                      var s = this.bigWilds[i - 1];
                      (s.active = !0), (s.mul = t);
                      var n = s.getComponentInChildren(h.Skeleton);
                      if (n) {
                        var o = t > 1 ? v[t] : "default",
                          r = I[i];
                        n.setSkin(o),
                          n.setSlotsToSetupPose(),
                          e
                            ? (n.setAnimation(0, "Idle_" + r, !0),
                              s.emit("SHOW_BIG_WILD", !0),
                              this.showReel(i, !1))
                            : (n.setAnimation(0, "Appear_" + r, !0),
                              this.scheduleOnce(function () {
                                l.showReel(i, !1), s.emit("SHOW_BIG_WILD", !0);
                              }, 0.6),
                              n.addAnimation(0, "Idle_" + r, !0));
                      }
                    }
                  }),
                  (n.showReel = function (i, t) {
                    var e = this.node.reels;
                    e && this.setOpacity(e[i], t ? 255 : 0);
                  }),
                  t
                );
              })(u)).prototype,
              "bigWildHolder",
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
            (b = t(g.prototype, "bigWildPrefab", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = g))
          ) || W)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/cc30-lanphatloc-9930",
  [
    "./BetCellHistory9930.ts",
    "./BetHistoryDetail9930.ts",
    "./BetHistoryScrollItem9930.ts",
    "./BetHistorySummary9930.ts",
    "./BetTableHistoryDetail9930.ts",
    "./SlotBetHistory9930.ts",
    "./SlotJackpotHistory9930.ts",
    "./SlotSymbolHistory9930.ts",
    "./BigWildController9930.ts",
    "./CoinEffect9930.ts",
    "./Colums9930.ts",
    "./Config9930.ts",
    "./CustomToggle9930.ts",
    "./DataStore9930.ts",
    "./Director9930.ts",
    "./FireWork9930.ts",
    "./IntroJackpot9930.ts",
    "./LoadingScreen9930.ts",
    "./Setting9930.ts",
    "./SlotButton9930.ts",
    "./SlotSoundPlayer9930.ts",
    "./SlotTablePaylineInfo9930.ts",
    "./SpinsTime9930.ts",
    "./TotalWinPanel9930.ts",
    "./WinAmount9930.ts",
    "./WinLine9930.ts",
    "./IntroFree9930.ts",
    "./JackpotWin9930.ts",
    "./WinEffect9930.ts",
    "./FreeDirector9930.ts",
    "./FreeWriter9930.ts",
    "./MainDirector9930.ts",
    "./MainWriter9930.ts",
    "./Info9930.ts",
    "./UIManager9930.ts",
    "./Banner9930.ts",
    "./BigWildTable9930.ts",
    "./ReelEffects9930.ts",
    "./SlotReel9930.ts",
    "./SlotSymbol9930.ts",
    "./SlotSymbolPayline9930.ts",
    "./SlotTable9930.ts",
    "./SlotTableNearWinEffect9930.ts",
    "./SlotTablePayline9930.ts",
    "./SlotTableSoundEffect9930.ts",
    "./TableAnimController9930.ts",
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
      ],
      execute: function () {},
    };
  }
);

System.register(
  "chunks:///_virtual/CoinEffect9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./utils2.ts"],
  function (t) {
    "use strict";
    var e, n, i, o, c, r, s, a;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy),
            (i = t._decorator),
            (o = t.ParticleSystem2D),
            (c = t.Component);
        },
        function (t) {
          (r = t.setOpacity), (s = t.fadeIn), (a = t.fadeOut);
        },
      ],
      execute: function () {
        var f;
        n._RF.push({}, "d5482ftHrNIt77wQfPTbqg8", "CoinEffect9930", void 0);
        var l = i.ccclass;
        i.property,
          t(
            "CoinEffect9930",
            l("CoinEffect9930")(
              (f = (function (t) {
                function n() {
                  for (
                    var e, n = arguments.length, i = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    i[o] = arguments[o];
                  return (
                    ((e = t.call.apply(t, [this].concat(i)) || this)._particle =
                      null),
                    e
                  );
                }
                e(n, t);
                var i = n.prototype;
                return (
                  (i.onLoad = function () {
                    this.node.on("START_PARTICLE", this.startParticle, this),
                      this.node.on("STOP_PARTICLE", this.stopParticle, this),
                      (this._particle = this.node.getComponentsInChildren(o));
                  }),
                  (i.startParticle = function (t) {
                    void 0 === t && (t = !1),
                      r(this.node, 0),
                      (this.node.active = !0),
                      this._particle.forEach(function (e) {
                        (e.gravity.y = t ? -1e3 : 0), e.resetSystem();
                      }),
                      s(this.node, 0.1);
                  }),
                  (i.stopParticle = function () {
                    a(this.node, 2),
                      this._particle.forEach(function (t) {
                        t.stopSystem();
                      });
                  }),
                  n
                );
              })(c))
            ) || f
          );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Colums9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, i, n, o, s, r, h, c, l, a, u;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (r = t._decorator),
            (h = t.Node),
            (c = t.Vec3),
            (l = t.UITransform),
            (a = t.tween),
            (u = t.Component);
        },
      ],
      execute: function () {
        var f, d, p, g, w;
        s._RF.push({}, "29e277qbCpDmKWX7WSblrUh", "Colums9930", void 0);
        var E = r.ccclass,
          m = r.property;
        t(
          "Colums9930",
          ((f = E("Colums9930")),
          (d = m({ type: h })),
          f(
            ((w = e(
              (g = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    n(e, "holder", w, o(e)),
                    (e.heights = []),
                    (e.durationList = []),
                    (e.tweenEffect = null),
                    e
                  );
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    this.node.on("SHOW_COLUMN", this.show, this),
                      this.node.on("HIDE_COLUMN", this.hide, this),
                      this.node.setScale(c.ZERO),
                      (this.holder.getComponent(l).height = 38),
                      (this.node.active = !1),
                      (this.heights = [107, 174, 240, 308, 376]),
                      (this.durationList = [0.3, 0.6, 0.9, 1.2, 0.4]);
                  }),
                  (s.show = function (t) {
                    var e = this,
                      i = this.heights[t],
                      n = this.durationList[t];
                    (this.node.active = !0),
                      this.tweenEffect &&
                        (this.tweenEffect.stop(), (this.tweenEffect = null)),
                      (this.tweenEffect = a(this.node)
                        .to(0.1, { scale: c.ONE })
                        .delay(0.1)
                        .call(function () {
                          a(e.holder.getComponent(l))
                            .to(n, { height: i })
                            .start();
                        })
                        .start());
                  }),
                  (s.hide = function () {
                    var t = this;
                    this.tweenEffect &&
                      (this.tweenEffect.stop(), (this.tweenEffect = null)),
                      (this.tweenEffect = a(this.node)
                        .call(function () {
                          a(t.holder.getComponent(l))
                            .to(0.3, { height: 38 })
                            .start();
                        })
                        .delay(0.3)
                        .to(0.1, { scale: c.ZERO })
                        .call(function () {
                          t.node.active = !1;
                        })
                        .start());
                  }),
                  e
                );
              })(u)).prototype,
              "holder",
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
            (p = g))
          ) || p)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Config9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./gameCommonUtils.ts"],
  function (_) {
    "use strict";
    var A, I, N, E, T;
    return {
      setters: [
        function (_) {
          A = _.inheritsLoose;
        },
        function (_) {
          (I = _.cclegacy), (N = _._decorator), (E = _.Component);
        },
        function (_) {
          T = _.default;
        },
      ],
      execute: function () {
        var L;
        I._RF.push({}, "94fadO4/mxB0JZhZrhVSJ96", "Config9930", void 0);
        var O = N.ccclass;
        N.property,
          _(
            "Config9930",
            O("Config9930")(
              (L = (function (_) {
                function I() {
                  return _.apply(this, arguments) || this;
                }
                return (
                  A(I, _),
                  (I.prototype.onLoad = function () {
                    this.node.config = {
                      GAME_ID: "9930",
                      JP_PREFIX_EVENT: "9930_",
                      JP_NAMES: ["GRAND", "MAJOR"],
                      JP_NAMES_ID: { GRAND: 0, MAJOR: 1 },
                      HAS_GAME_EVENT: !1,
                      DEFAULT_BET: 100,
                      BETS: {
                        20: 1e3,
                        30: 5e3,
                        40: 1e4,
                        50: 5e4,
                        60: 5e5,
                        70: 1e6,
                      },
                      DEFAULT_EXTRA_BET: 0,
                      EXTRA_BETS: { 0: 1 },
                      TOTAL_BET_CREDIT: 50,
                      DEFAULT_TRIAL_JACKPOT: {
                        "9930_2_GRAND": 1e6,
                        "9930_2_MAJOR": 1e5,
                        "9930_3_GRAND": 5e6,
                        "9930_3_MAJOR": 5e5,
                        "9930_4_GRAND": 1e7,
                        "9930_4_MAJOR": 1e6,
                        "9930_5_GRAND": 5e7,
                        "9930_5_MAJOR": 5e6,
                        "9930_6_GRAND": 5e8,
                        "9930_6_MAJOR": 5e7,
                        "9930_7_GRAND": 1e9,
                        "9930_7_MAJOR": 1e8,
                      },
                      DEFAULT_TRIAL_WALLET: 2e8,
                      TRIAL_BET: "6",
                      TRIAL_EXTRA_BET: "0",
                      MESSAGE_DIALOG: T.getMessageSlot(),
                      DEMONTATION: 250,
                      BOX_MAP_VALUES: { 100: 1, 200: 2, 400: 3 },
                      PAY_TABLE: {
                        2: [10, 15, 50],
                        3: [5, 10, 20],
                        4: [5, 10, 20],
                        5: [5, 10, 20],
                        6: [5, 10, 20],
                        22: [10, 15, 50],
                        33: [35, 65, 250],
                        44: [15, 50, 200],
                        55: [15, 35, 150],
                        66: [10, 30, 100],
                      },
                      GAME_SPEED: { NORMAL: 0, TURBO: 1, INSTANTLY: 2 },
                      DELAY_OPEN_BANNER: 0.8,
                      PARTICLE_MOVING_TIME: 1,
                      MUSIC_VOLUME: 0.8,
                      SOUND_EFFECT_VOLUME: 1,
                      JP_LIST_HISTORY: "GRAND-MAJOR",
                      BET_IDS: "10-20-30-40-50-60",
                      BET_IDS_IFRAME: "10-20-30-40-50-60",
                      SKIP_NEAR_WIN_TURBO: !0,
                      IS_SHOW_JACKPOT_EXPLOSION: !0,
                      HIGH_PERFORMANCE_LV: {
                        PAYLINE_ANIMATION: 2,
                        BIG_WIN_ANIMATION: 2,
                        JP_WIN_ANIMATION: 2,
                        BACKGROUND_ANIMATION: 2,
                        NEAR_WIN_ANIMATION: 2,
                        TRANSITION_ANIMATION: 2,
                        BONUS_ANIMATION: 2,
                      },
                      MEDIUM_PERFORMANCE_LV: {
                        PAYLINE_ANIMATION: 1,
                        BIG_WIN_ANIMATION: 1,
                        JP_WIN_ANIMATION: 1,
                        BACKGROUND_ANIMATION: 1,
                        NEAR_WIN_ANIMATION: 1,
                        TRANSITION_ANIMATION: 1,
                        BONUS_ANIMATION: 1,
                      },
                      LOW_PERFORMANCE_LV: {
                        PAYLINE_ANIMATION: 0,
                        BIG_WIN_ANIMATION: 0,
                        JP_WIN_ANIMATION: 0,
                        BACKGROUND_ANIMATION: 0,
                        NEAR_WIN_ANIMATION: 0,
                        TRANSITION_ANIMATION: 0,
                        BONUS_ANIMATION: 0,
                      },
                      NORMAL_TABLE_FORMAT: [3, 3, 3, 3, 3],
                      FREE_TABLE_FORMAT: [3, 3, 3, 3, 3],
                      TOPUP_TABLE_FORMAT: [3, 3, 3, 3, 3],
                      BONUS_TABLE_FORMAT: [3, 3, 3, 3, 3],
                      TABLE_BUFFER: { TOP: 1, BOT: 1 },
                      ACCEL: 1200,
                      MIN_SPEED: 2e3,
                      MAX_SPEED: 2800,
                      SUPER_SPEED: 3500,
                      SUPER_TURBO: 0.04,
                      TABLE_NORMAL: {
                        TIME: 0.055,
                        DELAY_START: 0,
                        DELAY_STOP: 0.5,
                        EASING_DISTANCE: 25,
                        EASING_TIME: 0.5,
                        TOTAL_CIRCULAR: 8,
                        RATE: 1,
                        IS_TURBO: !1,
                        BLINKS: 2,
                        STEP_STOP: 11,
                        BLINK_DURATION: 0.5,
                        ANIMATION_DURATION: 2,
                        EXPECT_PAYLINE_TIME: 2,
                        EXPECT_PAYLINE_ALLWAYS_TIME: 2,
                        MIN_TIME_EACH_PAYLINE: 0.2,
                        NEAR_WIN_DELAY: 1,
                        NEAR_WIN_DELAY_TIME_LAST_REEL: 1,
                        DELAY_SURE_WIN: 3,
                        DELAY_BIG_WILD: 1,
                      },
                      TABLE_TURBO: {
                        TIME: 0.05,
                        DELAY_START: 0,
                        DELAY_STOP: 0,
                        EASING_DISTANCE: 15,
                        EASING_TIME: 0.08,
                        TOTAL_CIRCULAR: 6,
                        RATE: 2,
                        IS_TURBO: !0,
                        BLINKS: 1,
                        STEP_STOP: 8,
                        BLINK_DURATION: 0.5,
                        ANIMATION_DURATION: 2,
                        EXPECT_PAYLINE_TIME: 2,
                        EXPECT_PAYLINE_ALLWAYS_TIME: 2,
                        MIN_TIME_EACH_PAYLINE: 0.2,
                        NEAR_WIN_DELAY: 0.3,
                        NEAR_WIN_DELAY_TIME_LAST_REEL: 0.5,
                        DELAY_SURE_WIN: 2,
                        DELAY_BIG_WILD: 1,
                      },
                      NORMAL_SYMBOLS: [
                        ["2", "3", "4", "5", "6", "7", "8", "9", "C", "B"],
                        ["2", "3", "4", "5", "6", "7", "8", "9", "C", "B"],
                        ["2", "3", "4", "5", "6", "7", "8", "9", "C", "B"],
                        ["2", "3", "4", "5", "6", "7", "8", "9", "C", "B"],
                        ["2", "3", "4", "5", "6", "7", "8", "9", "C", "B"],
                      ],
                      FREE_SYMBOLS: [
                        ["2", "3", "4", "5", "6", "7", "8", "9", "C", "B"],
                        ["2", "3", "4", "5", "6", "7", "8", "9", "C", "B"],
                        ["2", "3", "4", "5", "6", "7", "8", "9", "C", "B"],
                        ["2", "3", "4", "5", "6", "7", "8", "9", "C", "B"],
                        ["2", "3", "4", "5", "6", "7", "8", "9", "C", "B"],
                      ],
                      EXCEPTION_SYMBOLS: ["A", "R", "K", "A1"],
                      WILD_SYMBOL: "K",
                      SYMBOL_SMALL_NAME_LIST: [
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "C",
                        "B",
                      ],
                      SYMBOL_WIDTH: 158,
                      SYMBOL_HEIGHT: 154,
                      PAY_LINE_LENGTH: 50,
                      PAY_LINE_ALLWAYS: !0,
                      SHOW_WINLINE_FRAME: !0,
                      SHOW_DRAWING_LINE: !1,
                      TUTORIAL_TEXT: {
                        SPIN_START: "Bấm quay để bắt đầu chơi.",
                        INTRO_PAYLINE:
                          "Thắng tổ hợp 3 biểu tượng Bao Lì Xì,\ncó hệ số thưởng là 10 xu và ở mức cược \n500,000 (giá xu = 10,000)\n( 2 x 1 x 3 ) x 10 x 10,000 = 600,000.",
                        INTRO_JACKPOT:
                          "Game có 2 hũ xu Đại Cát và Đại Lợi, mỗi lần quay sẽ góp 1 phần tiền cược vào hũ.",
                        INCREASE_BET: "Tăng cược ở đây.",
                        TURN_TURBO: "Tăng tốc để hái lộc nhanh hơn nào.",
                        CONTINUE_SPIN: "Tiếp tục nào.",
                        INTRO_WILD:
                          "Biểu tượng Wild ngoài việc thay thế cho các biểu tượng khác, khi xuất hiện đủ 3 Wild sẽ kích hoạt chế độ Tam Lân Du Hành với 6 lượt quay miễn phí.",
                        JACKPOT_RULE:
                          "Khi xuất hiện từ 4 biểu tượng Cầu Lân trở lên, Cầu Lân sẽ rớt xuống và kích hoạt Mai Hoa Thung. Lân sẽ nhảy lên và đoạt hũ tương ứng:\n-Với 4 Cầu Lân sẽ trúng hũ Đại Lợi.\n-Với 5 Cầu Lân sẽ trúng hũ Đại Cát.",
                        HOLD_TO_AUTO_SPIN:
                          "Nhấn giữ để tự quay trong lúc chờ nổ hũ tiếp theo.",
                      },
                    };
                  }),
                  I
                );
              })(E))
            ) || L
          );
        I._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/CustomToggle9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (e) {
    "use strict";
    var t, o, r, i;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (o = e.cclegacy), (r = e._decorator), (i = e.ToggleComponent);
        },
      ],
      execute: function () {
        var s;
        o._RF.push({}, "33686P3KwlP2bqZkYo7OQxi", "CustomToggle9930", void 0);
        var c = r.ccclass;
        r.property,
          e(
            "CustomToggle9930",
            c("CustomToggle9930")(
              (s = (function (e) {
                function o() {
                  for (
                    var t, o = arguments.length, r = new Array(o), i = 0;
                    i < o;
                    i++
                  )
                    r[i] = arguments[i];
                  return (
                    ((t =
                      e.call.apply(e, [this].concat(r)) || this)._defaulTarget =
                      null),
                    t
                  );
                }
                return (
                  t(o, e),
                  (o.prototype._internalToggle = function () {
                    e.prototype._internalToggle.call(this),
                      (this._defaulTarget = this.node.children[0]),
                      (this.target = this.isChecked
                        ? this.checkMark.node
                        : this._defaulTarget),
                      this._defaulTarget &&
                        (this._defaulTarget.active = !this.isChecked),
                      this.checkMark &&
                        (this.checkMark.node.active = this.isChecked);
                  }),
                  o
                );
              })(i))
            ) || s
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DataStore9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./CustomEnum.ts",
    "./DataStore.ts",
  ],
  function (t) {
    "use strict";
    var a, r, e, n, o, i, s, u;
    return {
      setters: [
        function (t) {
          a = t.inheritsLoose;
        },
        function (t) {
          (r = t.cclegacy), (e = t._decorator), (n = t.warn);
        },
        function (t) {
          (o = t.getRandomElement), (i = t.randRange);
        },
        function (t) {
          s = t.StateGameMode;
        },
        function (t) {
          u = t.DataStore;
        },
      ],
      execute: function () {
        var c;
        r._RF.push({}, "be27eGOW3lEpYsGh9OQwNEf", "DataStore9930", void 0);
        var l = [3, 9, 4, 9, 4, 9, 3, 9, 4, 9],
          m = [3, 9, 9, 9, 9],
          f = e.ccclass;
        t(
          "DataStore9930",
          f("DataStore9930")(
            (c = (function (t) {
              function r() {
                return t.apply(this, arguments) || this;
              }
              a(r, t);
              var e = r.prototype;
              return (
                (e.formatData = function (t) {
                  var a = this.config,
                    r = a.NORMAL_TABLE_FORMAT,
                    e = a.FREE_TABLE_FORMAT,
                    o = t.matrix,
                    i = t.normalGameMatrix,
                    u = t.freeGameMatrix,
                    c = t.payLines,
                    l = t.state,
                    m = t.matrix0,
                    f = t.normalSubSymbol,
                    p = t.nlpl,
                    h = t.flpl,
                    S = t.jackpotInfo,
                    v = t.eventData,
                    d = t.winAmountQuest,
                    M = t.winAmountEvent,
                    x = t.isTrialMode,
                    _ = r;
                  if (
                    (l == s.FreeGame && (_ = e),
                    o
                      ? (t.matrix = this.convertMatrix(o, _))
                      : u
                      ? (t.matrix = this.convertMatrix(u, _))
                      : i && (t.matrix = this.convertMatrix(i, _)),
                    t.payLines && (t.payLines = this.convertPayLine(c)),
                    p &&
                      ((t.normalStackFormat = this._processStack(p)),
                      console.table(t.normalStackFormat)),
                    h && (t.freeStackFormat = this._processStack(h, t.matrix)),
                    (t.stackFormats = t.normalStackFormat || t.freeStackFormat),
                    f)
                  ) {
                    var y = [null, null, null, null, null];
                    f.forEach(function (t) {
                      var a = Math.floor(t / 3);
                      y[a] = t;
                    }),
                      (t.subSymbols = y);
                  }
                  return (
                    S && (t.sureWin = void 0),
                    m && (t.matrix0 = this.convertMatrix(m, _)),
                    v && !x && this.questData.updateQuestData(v, d, M),
                    (this.playSession = t),
                    n("%c run data-update ", "color: red", this.playSession),
                    t
                  );
                }),
                (e._processStack = function (t, a) {
                  var r = this;
                  void 0 === a && (a = null);
                  var e = "TURBO" === this.node.dataStore.spinningMode;
                  return t.map(function (t, n) {
                    var i = 6;
                    if (a && a[n].includes("K")) (i = 0), (t = 9);
                    else if (9 === t) {
                      t = o(e ? m : l);
                    }
                    return { format: t, size: i, step: r._getStep(t, i) };
                  });
                }),
                (e._getStep = function (t, a) {
                  return 9 === t
                    ? null
                    : t > 0
                    ? t + a
                    : t < 0
                    ? 3 + t
                    : 0 === t
                    ? i(3, 6)
                    : void 0;
                }),
                (e.getDefaultMatrix = function () {
                  var t = [
                    [
                      ["3", "9", "3"],
                      ["9", "K", "9"],
                      ["K", "9", "3"],
                      ["9", "K", "9"],
                      ["3", "9", "3"],
                    ],
                    [
                      ["2", "2", "2"],
                      ["9", "K", "9"],
                      ["9", "9", "K"],
                      ["9", "K", "9"],
                      ["2", "2", "2"],
                    ],
                    [
                      ["6", "C", "6"],
                      ["9", "K", "9"],
                      ["9", "K", "9"],
                      ["9", "K", "9"],
                      ["6", "C", "6"],
                    ],
                  ];
                  return {
                    matrix: t[Math.floor(Math.random() * t.length)].slice(),
                  };
                }),
                r
              );
            })(u))
          ) || c
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Director9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./Director.ts",
  ],
  function (e) {
    "use strict";
    var t, r, a, o, i, s;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (r = e.cclegacy), (a = e._decorator);
        },
        function (e) {
          (o = e.SlotGameMode), (i = e.WalletType);
        },
        function (e) {
          s = e.Director;
        },
      ],
      execute: function () {
        var n;
        r._RF.push({}, "9fd73k+eV1F0KAUsziZ31ut", "Director9930", void 0);
        var c = a.ccclass;
        e(
          "Director9930",
          c("Director9930")(
            (n = (function (e) {
              function r() {
                return e.apply(this, arguments) || this;
              }
              t(r, e);
              var a = r.prototype;
              return (
                (a.newGameMode = function (t, r) {
                  var a = t.name,
                    i = t.data;
                  switch ((this.guiMgr.hideAllUI(), a)) {
                    case o.NormalGame:
                      this.guiMgr.showUIMain();
                      break;
                    case o.FreeGame:
                      this.guiMgr.showUIFree();
                  }
                  e.prototype.newGameMode.call(this, { name: a, data: i }, r);
                }),
                (a.resumeGameMode = function (t, r) {
                  var a = t.name;
                  switch (a) {
                    case o.NormalGame:
                      this.guiMgr.showUIMain();
                      break;
                    case o.FreeGame:
                      this.guiMgr.showUIFree();
                  }
                  e.prototype.resumeGameMode.call(this, { name: a }, r);
                }),
                (a.switchToRealMode = function () {
                  var e = this.dataStore.currentGameMode,
                    t = e == o.FreeGame,
                    r = e == o.NormalGame;
                  this.dataStore.resumeWallet(i.NORMAL),
                    this.dataStore.resumeWallet(i.PROMOTE),
                    this.dataStore.resumeWallet(i.TRIAL),
                    r ||
                      (this.forceExitNormalGame(),
                      t &&
                        !this.gameModes[o.FreeGame].beginToExit &&
                        this.forceExitFreeGame(),
                      this.soundPlayer &&
                        (this.soundPlayer.stopAllAudio(),
                        this.soundPlayer.setMusicVolume(
                          this.config.MUSIC_VOLUME
                        ),
                        this.soundPlayer.playMainBGM()));
                }),
                (a.forceExitFreeGame = function () {
                  this.gameModes[o.FreeGame].emit("FORCE_TO_EXIT", []);
                }),
                (a.forceExitNormalGame = function () {
                  this.gameModes[o.NormalGame].emit("FORCE_TO_EXIT", []);
                }),
                r
              );
            })(s))
          ) || n
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FireWork9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./AnimationControl.ts",
  ],
  function (n) {
    "use strict";
    var t, o, e, r, i, s, a, c;
    return {
      setters: [
        function (n) {
          t = n.inheritsLoose;
        },
        function (n) {
          (o = n.cclegacy),
            (e = n._decorator),
            (r = n.tween),
            (i = n.Vec3),
            (s = n.Component);
        },
        function (n) {
          a = n.randRange;
        },
        function (n) {
          c = n.AnimationControl;
        },
      ],
      execute: function () {
        var u;
        o._RF.push({}, "000b7cbjp1LMrAEil2nG5y2", "FireWork9930", void 0);
        var l = e.ccclass;
        e.property,
          n(
            "FireWork9930",
            l("FireWork9930")(
              (u = (function (n) {
                function o() {
                  for (
                    var t, o = arguments.length, e = new Array(o), r = 0;
                    r < o;
                    r++
                  )
                    e[r] = arguments[r];
                  return (
                    ((t = n.call.apply(n, [this].concat(e)) || this).anims =
                      []),
                    t
                  );
                }
                t(o, n);
                var e = o.prototype;
                return (
                  (e.onLoad = function () {
                    (this.anims = this.node.getComponentsInChildren(c)),
                      this.node.on("SHOW_FIRE_WORKS", this.showFireWorks, this);
                  }),
                  (e.showFireWorks = function (n) {
                    var t = this;
                    n
                      ? this.anims.forEach(function (n) {
                          var o = a(5, 20) / 10,
                            e = a(8, 12) / 10;
                          n.tweenShow = r(n.node)
                            .delay(o)
                            .call(function () {
                              (n.node.active = !0),
                                n.node.setPosition(t._getRandomPos()),
                                n.setCurrentSpeed(e),
                                n.playAnimation();
                            })
                            .delay(1)
                            .call(function () {
                              n.node.active = !1;
                            })
                            .union()
                            .repeatForever()
                            .start();
                        })
                      : this.anims.forEach(function (n) {
                          n.tweenShow &&
                            (n.tweenShow.stop(), (n.tweenShow = null)),
                            (n.node.active = !1);
                        });
                  }),
                  (e._getRandomPos = function () {
                    var n = Math.random() > 0.5 ? 520 : -500,
                      t = n > 0 ? 340 : 320,
                      o = n > 0 ? 40 : 80,
                      e = n + a(-120, 120),
                      r = t + a(-o, o);
                    return new i(e, r);
                  }),
                  o
                );
              })(s))
            ) || u
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreeDirector9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./MainDirector9930.ts",
  ],
  function (t) {
    "use strict";
    var e, i, s, n, a, o;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (i = t.cclegacy), (s = t._decorator);
        },
        function (t) {
          (n = t.TutorialTriggerType), (a = t.SlotGameMode);
        },
        function (t) {
          o = t.MainDirector9930;
        },
      ],
      execute: function () {
        var l;
        i._RF.push({}, "c7ec5baI6xEk5KHe8tCCB6A", "FreeDirector9930", void 0);
        var r = s.ccclass;
        s.property,
          t(
            "FreeDirector9930",
            r("FreeDirector9930")(
              (l = (function (t) {
                function i() {
                  for (
                    var e, i = arguments.length, s = new Array(i), n = 0;
                    n < i;
                    n++
                  )
                    s[n] = arguments[n];
                  return (
                    ((e =
                      t.call.apply(t, [this].concat(s)) ||
                      this).openBannerCallback = null),
                    e
                  );
                }
                e(i, t);
                var s = i.prototype;
                return (
                  (s.ready = function (t) {
                    var e = this,
                      i = this.dataStore.playSession,
                      s = i.isFinished,
                      o = i.freeGameRemain,
                      l = i.freeGameTotal,
                      r = i.wildMultiply;
                    if (
                      (t &&
                        this.table.emit("CHANGE_MATRIX", {
                          matrix: t,
                          isResume: !!r,
                        }),
                      o === l
                        ? this.table.emit("INTRO_WILD")
                        : this.eventManager.emit(
                            "RESET_HIGHLIGHT_REEL",
                            1,
                            2,
                            3
                          ),
                      this.slotButton &&
                        !1 !== s &&
                        ((this.slotButton.active = !0),
                        this.slotButton.emit("SPIN_SHOW"),
                        this.slotButton.emit("SPIN_ENABLE"),
                        this.slotButton.emit("STOP_AUTO_SPIN_HIDE")),
                      this.table.emit("PLAY_ANIM_IDLE"),
                      t && r
                        ? this.table.emit("SHOW_BIG_WILD", {
                            matrix: t,
                            multiply: r,
                            isResume: !0,
                          })
                        : this.table.emit("RESET_BIG_WILD"),
                      this.isAlwaysAutoSpin)
                    ) {
                      var c = this.dataStore.playSession,
                        h = c.freeGameRemain,
                        u = c.freeGame,
                        p = h > 0 ? h : u;
                      p > 0 &&
                        (this.spinTimes &&
                          ((this.spinTimes.active = this.isAlwaysAutoSpin),
                          this.spinTimes.emit("UPDATE_SPINTIMES", p)),
                        this.scheduleOnce(function () {
                          e.runAction("SpinByTimes", p);
                        }, 0.5));
                    } else
                      this.slotButton &&
                        this.slotButton.emit("FAST_TO_RESULT_HIDE");
                    var S = n.ResumeNormalGame;
                    this.currentGameMode === a.FreeGame
                      ? (S = n.EnterFreeGame)
                      : this.currentGameMode === a.BonusGame
                      ? (S = n.EnterBonusGame)
                      : this.currentGameMode === a.TopUpGame &&
                        (S = n.EnterTopupGame),
                      this.guiMgr.setQuestPosition(this.questDummy),
                      this.soundPlayer &&
                        (this.soundPlayer.setMusicVolume(
                          this.config.MUSIC_VOLUME
                        ),
                        this.soundPlayer.playMainBGM(a.FreeGame)),
                      this.guiMgr.onIngameEvent(S, "ENTER_GAME_MODE");
                  }),
                  (s.onGameShow = function () {}),
                  (s._showScrollBigWild = function (t) {
                    this.table.emit("SHOW_SCROLL_BIG_WILD"),
                      this.executeNextScript(t);
                  }),
                  (s._showBigWild = function (t, e) {
                    this.table.emit("SET_UP_BIG_WILD"),
                      this.table.emit("SHOW_BIG_WILD", e),
                      this.executeNextScript(t);
                  }),
                  (s._gameExit = function (e) {
                    t.prototype._gameExit.call(this, e),
                      (this.slotButton.active = !1),
                      this.soundPlayer.stopAllClipSound("SIZZLE"),
                      this.soundPlayer.stopAllClipSound("FIRE_CRACKER");
                  }),
                  (s._clearPaylines = function (e) {
                    t.prototype._clearPaylines.call(this, e);
                  }),
                  (s._spinClick = function (e) {
                    this.table.emit("RESET_BIG_WILD"),
                      t.prototype._spinClick.call(this, e);
                  }),
                  (s._runAutoSpin = function (t) {
                    var e = this;
                    if (this._checkPauseTutorial("pauseFreeGame"))
                      (this.storeCurrentScripts = "_runAutoSpin"),
                        (this.storeNextScripts = { script: t, data: {} });
                    else {
                      var i = this.dataStore.playSession.payLines;
                      !this.isAlwaysAutoSpin &&
                        this.dataStore.isAutoSpin &&
                        this.slotButton &&
                        this.slotButton.emit("STOP_AUTO_SPIN_SHOW"),
                        this.slotButton && this.slotButton.emit("SPIN_DISABLE"),
                        this.table.emit("SKIP_ANIMS"),
                        this._showTrialButtons(null, !1),
                        (this._callBackAutoSpin = function () {
                          e.runAction("SpinClick"),
                            e.skipAllEffects(),
                            e.executeNextScript(t),
                            (e._callBackAutoSpin = null);
                        });
                      var s = i && i.length > 0 ? 1 : 0.5;
                      (this._autoSpin = !0),
                        this.scheduleOnce(this._callBackAutoSpin, s);
                    }
                  }),
                  (s._openAllBanners = function (t) {
                    var e = this;
                    this.table.emit("OPEN_ALL_BANNERS");
                    var i =
                        this.dataStore.gameSpeed ===
                        this.config.GAME_SPEED.INSTANTLY,
                      s = this.dataStore.playSession.sureWin,
                      n = i && !s ? 0.2 : this.config.DELAY_OPEN_BANNER;
                    (this.openBannerCallback = function () {
                      (e.openBannerCallback = null), e.executeNextScript(t);
                    }),
                      this.scheduleOnce(this.openBannerCallback, n);
                  }),
                  (s.forceToExit = function (t) {
                    (this.forceToExitMode = !0),
                      (this.exitScript = [
                        { command: "_freeGameExit", data: {} },
                      ]),
                      this.isSpinning
                        ? this.fastToResultClick()
                        : this.executeNextScript(this.exitScript);
                  }),
                  (s._freeGameExit = function () {
                    this.openBannerCallback &&
                      (this.unschedule(this.openBannerCallback),
                      this.openBannerCallback([])),
                      this.stopAutoSpinClick(),
                      this.skipAllEffects(),
                      this._updateSpinTimes([], 0),
                      this._clearPaylines([]),
                      this._gameExit([]),
                      this.unscheduleAllCallbacks(),
                      this.clearAsyncScript(),
                      this.node.resetCallbackWhenHide(),
                      this.node.exit(),
                      this.fsm.reboot(),
                      this.fsm.gameStart(),
                      (this.forceToExitMode = !1);
                  }),
                  (s._clearBigWild = function (t) {
                    this.table.emit("RESET_BIG_WILD"),
                      this.executeNextScript(t);
                  }),
                  i
                );
              })(o))
            ) || l
          );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/FreeWriter9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./MainWriter9930.ts",
  ],
  function (t) {
    "use strict";
    var e, a, n, i, o;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (a = t.cclegacy), (n = t._decorator);
        },
        function (t) {
          i = t.SlotSceneType;
        },
        function (t) {
          o = t.MainWriter9930;
        },
      ],
      execute: function () {
        var s;
        a._RF.push({}, "9189bcKpz5GB6Td913w/eAs", "FreeWriter9930", void 0);
        var r = n.ccclass;
        n.property,
          t(
            "FreeWriter9930",
            r("FreeWriter9930")(
              (s = (function (t) {
                function a() {
                  return t.apply(this, arguments) || this;
                }
                e(a, t);
                var n = a.prototype;
                return (
                  (n.makeScriptResultReceive = function () {
                    var t = this.node.dataStore.playSession,
                      e = t.matrix,
                      a = t.jackpotInfo,
                      n = t.matrix0,
                      i = t.stackFormats,
                      o = t.subSymbols,
                      s = t.flpl,
                      r = t.wildMultiply,
                      u = [];
                    if (a) {
                      var m = a[a.length - 1].split(";"),
                        l = m[0].slice(7),
                        c = Number(m[1]);
                      u.push({ command: "_pauseUpdateJP" }),
                        u.push({
                          command: "_updateValueJP",
                          data: { jpType: l, jpValue: c },
                        });
                    }
                    return (
                      s &&
                        u.push({
                          command: "_setupBanner",
                          data: { format: s, stackFormats: i },
                        }),
                      n &&
                        u.push({
                          command: "_showBigWild",
                          data: { matrix: n, multiply: r },
                        }),
                      u.push({
                        command: "_resultReceive",
                        data: { matrix: e, subSymbols: o, jackpot: a },
                      }),
                      u.push({ command: "_showResult", data: e }),
                      u
                    );
                  }),
                  (n.makeScriptShowResults = function () {
                    var t = this.node.dataStore,
                      e = t.playSession,
                      a = e.matrix,
                      n = e.winAmount,
                      o = e.winAmountPS,
                      s = e.payLines,
                      r = e.flpl,
                      u = e.wildMultiply,
                      m = e.freeGameTotal,
                      l = e.freeGameRemain,
                      c = e.jackpotInfo,
                      p = t.betData,
                      d = t.gameSpeed,
                      h = t.config,
                      _ = t.modeTurbo,
                      f = d === h.GAME_SPEED.INSTANTLY,
                      y = n && n >= 20 * p.getTotalBet() && !c,
                      g = [];
                    (g.push({
                      command: "_setUpPaylines",
                      data: { matrix: a, payLines: s },
                    }),
                    r) &&
                      r.filter(function (t) {
                        return 9 !== t;
                      }).length > 0 &&
                      g.push({ command: "_openAllBanners" });
                    return (
                      s &&
                        this.haveBigWild(u) &&
                        g.push({ command: "_showScrollBigWild" }),
                      y &&
                        (s &&
                          s.length > 0 &&
                          g.push({ command: "_blinkAllPaylines" }),
                        (_ || f) && g.push({ command: "_playSoundFastBigWin" }),
                        g.push({
                          command: "_showCutscene",
                          data: {
                            name: i.BigWin,
                            content: {
                              winAmount: n,
                              currentBetData: p.getTotalBet(),
                            },
                          },
                        })),
                      s &&
                        s.length > 0 &&
                        (o &&
                          o > 0 &&
                          g.push({
                            command: "_updateWinningAmount",
                            data: {
                              winAmount: o,
                              time: 0.3,
                              isFTR: f,
                              rate: this._checkRateSoundWin(),
                            },
                          }),
                        y || g.push({ command: "_blinkAllPaylines" }),
                        g.push({ command: "_showNormalPayline" })),
                      !l || m <= 0
                        ? (g.push({ command: "_delayTimeScript", data: 1.5 }),
                          g.push({
                            command: "_showUnskippedCutscene",
                            data: {
                              name: i.TotalWinPanel,
                              content: { winAmount: o },
                            },
                          }),
                          g.push({ command: "_clearPaylines" }),
                          g.push({ command: "_clearBigWild" }),
                          g.push({ command: "_gameExit" }))
                        : g.push({ command: "_gameRestart" }),
                      g
                    );
                  }),
                  (n.haveBigWild = function (t) {
                    if (!t) return !1;
                    for (var e = 0; e < t.length; e++) if (t[e] > 0) return !0;
                    return !1;
                  }),
                  a
                );
              })(o))
            ) || s
          );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Info9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./AnimationControl.ts",
    "./Info.ts",
  ],
  function (n) {
    "use strict";
    var t, o, i, e, r, a, s, c, f;
    return {
      setters: [
        function (n) {
          (t = n.applyDecoratedDescriptor),
            (o = n.inheritsLoose),
            (i = n.initializerDefineProperty),
            (e = n.assertThisInitialized);
        },
        function (n) {
          (r = n.cclegacy), (a = n._decorator), (s = n.Node);
        },
        function (n) {
          c = n.AnimationControl;
        },
        function (n) {
          f = n.Info;
        },
      ],
      execute: function () {
        var u, l, p, I, h;
        r._RF.push({}, "00863t9ty1ESYGJFS+KvwW8", "Info9930", void 0);
        var m = a.ccclass,
          y = a.property;
        n(
          "Info9930",
          ((u = m("Info9930")),
          (l = y(s)),
          u(
            ((h = t(
              (I = (function (n) {
                function t() {
                  for (
                    var t, o = arguments.length, r = new Array(o), a = 0;
                    a < o;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (t = n.call.apply(n, [this].concat(r)) || this),
                    i(t, "animInfos", h, e(t)),
                    t
                  );
                }
                o(t, n);
                var r = t.prototype;
                return (
                  (r.pageViewEvent = function () {
                    var n = this.pageView.getCurrentPageIndex();
                    this.playAnimInfo(0 === n),
                      1 === Math.abs(n - this.curInfoID)
                        ? ((this.curInfoID = n),
                          this.activeButtons(this.curInfoID))
                        : this.pageView.scrollToPage(this.curInfoID, 0.1);
                  }),
                  (r.playAnimInfo = function (n) {
                    this.animInfos &&
                      (n
                        ? this.animInfos.forEach(function (n) {
                            n.getComponent(c).playAnimation("", 1, !0);
                          })
                        : this.animInfos.forEach(function (n) {
                            n.getComponent(c).stopAnimation();
                          }));
                  }),
                  (r.resetInfo = function () {
                    this.playAnimInfo(!0), n.prototype.resetInfo.call(this);
                  }),
                  (r.onDisable = function () {
                    this.playAnimInfo(!1);
                  }),
                  t
                );
              })(f)).prototype,
              "animInfos",
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
            (p = I))
          ) || p)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IntroFree9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./SlotUIScene.ts",
    "./EventNames.ts",
  ],
  function (e) {
    "use strict";
    var i, t, n, s, r, o, a, c, l, u, h, p, m, f;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (s = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (o = e._decorator),
            (a = e.sp),
            (c = e.Node),
            (l = e.Vec3),
            (u = e.Label),
            (h = e.sys);
        },
        function (e) {
          p = e.TutorialTriggerType;
        },
        function (e) {
          m = e.SlotUIScene;
        },
        function (e) {
          f = e.default;
        },
      ],
      execute: function () {
        var d, T, y, v, g, A, O;
        r._RF.push({}, "3bc6e1GJGZOFoLloSA7eVaE", "IntroFree9930", void 0);
        var b = o.ccclass,
          E = o.property;
        e(
          "IntroFree9930",
          ((d = b("IntroFree9930")),
          (T = E({ type: a.Skeleton })),
          (y = E({ type: c })),
          d(
            ((A = i(
              (g = (function (e) {
                function i() {
                  for (
                    var i, t = arguments.length, r = new Array(t), o = 0;
                    o < t;
                    o++
                  )
                    r[o] = arguments[o];
                  return (
                    (i = e.call.apply(e, [this].concat(r)) || this),
                    n(i, "transitionAnim", A, s(i)),
                    n(i, "spinTimes", O, s(i)),
                    i
                  );
                }
                t(i, e);
                var r = i.prototype;
                return (
                  (r.enter = function () {
                    this.unscheduleAllCallbacks(),
                      (this.transitionAnim.node.active = !0),
                      this.spinTimes && (this.spinTimes.active = !1),
                      this.runAnimTransition();
                  }),
                  (r.runAnimTransition = function () {
                    var e = this,
                      i = this.content.freeGameRemain;
                    this.soundPlayer &&
                      (this.soundPlayer.stopAllAudio(),
                      this.soundPlayer.setMusicVolume(0),
                      this.soundPlayer.playSfx("TRANSITION_FREE")),
                      (this.transitionAnim.node.active = !0),
                      this.transitionAnim.setAnimation(0, "Appear", !1),
                      this.transitionAnim.addAnimation(0, "Idle", !0),
                      this.scheduleOnce(function () {
                        e.exit();
                      }, 2),
                      this.spinTimes &&
                        (this.setOpacity(this.spinTimes, 0),
                        this.spinTimes.setScale(l.ONE)),
                      this.scheduleOnce(function () {
                        (e.spinTimes.active = !0),
                          (e.spinTimes.getComponent(u).string = i),
                          e.spinTimes && e.fadeIn(e.spinTimes, 0.4);
                      }, 0.5);
                  }),
                  (r.exit = function (e) {
                    var i = this;
                    void 0 === e && (e = null),
                      e && "function" == typeof e && (this.callback = e),
                      this.guiMgr.onIngameEvent(
                        p.OnCutsceneClose,
                        "ON_CUTSCENE_CLOSE"
                      ),
                      this.callback &&
                        (this.node.emit("STOP"), this.callback()),
                      this.fadeOut(this.node, 0.5),
                      this.scheduleOnce(function () {
                        i.node.active = !1;
                      }, 0.5),
                      h.isNative &&
                        this.eventManager &&
                        this.eventManager.emit(
                          f.REMOVE_ON_DEMAND_OBJECT,
                          Number(this.sceneType),
                          !0,
                          function () {
                            var e = i.guiMgr.sceneComp.indexOf(i);
                            e > -1 && i.guiMgr.sceneComp.splice(e, 1);
                          }
                        ),
                      this.hideScene();
                  }),
                  i
                );
              })(m)).prototype,
              "transitionAnim",
              [T],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (O = i(g.prototype, "spinTimes", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = g))
          ) || v)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/IntroJackpot9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./GameObject.ts",
  ],
  function (t) {
    "use strict";
    var e, o, i, n, r, l, s, a, u, c, b, h, y, p;
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
            (l = t._decorator),
            (s = t.Node),
            (a = t.sp),
            (u = t.Prefab),
            (c = t.instantiate),
            (b = t.tween),
            (h = t.Vec3);
        },
        function (t) {
          y = t.TutorialTriggerType;
        },
        function (t) {
          p = t.GameObject;
        },
      ],
      execute: function () {
        var d, f, S, m, _, v, T, P, w, O, I, g, k, A, H, L, R, E, C, D, M, N, j;
        r._RF.push({}, "b26dcIedVNJkJKM0HkiETkg", "IntroJackpot9930", void 0);
        var z = l.ccclass,
          B = l.property;
        t(
          "IntroJackpot9930",
          ((d = z("IntroJackpot9930")),
          (f = B({ type: s })),
          (S = B({ type: s })),
          (m = B({ type: a.Skeleton })),
          (_ = B({ type: u })),
          (v = B({ type: s })),
          (T = B({ type: s })),
          (P = B({ type: s })),
          (w = B({ type: s })),
          (O = B({ type: u })),
          (I = B({ type: a.Skeleton })),
          d(
            ((A = e(
              (k = (function (t) {
                function e() {
                  for (
                    var e, o = arguments.length, r = new Array(o), l = 0;
                    l < o;
                    l++
                  )
                    r[l] = arguments[l];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    i(e, "overlay", A, n(e)),
                    i(e, "overlayLastReel", H, n(e)),
                    i(e, "unicorn", L, n(e)),
                    i(e, "subSymbolPrefab", R, n(e)),
                    i(e, "columnHolder", E, n(e)),
                    i(e, "subSymbolHolder", C, n(e)),
                    i(e, "buttonHolder", D, n(e)),
                    i(e, "buttonTurbo", M, n(e)),
                    i(e, "particlePrefab", N, n(e)),
                    i(e, "jackpotTree", j, n(e)),
                    (e.subSymbols = []),
                    (e.columns = []),
                    (e.startX = 0),
                    (e.startY = 0),
                    e
                  );
                }
                o(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this._init(),
                      this.node.on("SHOW_INTRO_JACKPOT", this.showIntro, this),
                      this.node.on(
                        "SHOW_SUB_SYMBOL",
                        this.showSubSymbols,
                        this
                      ),
                      this.node.on("ADD_SUB_SYMBOL", this.addSubSymbol, this),
                      this.node.on(
                        "CLEAR_SUB_SYMBOL",
                        this.clearSubSymbols,
                        this
                      ),
                      this.node.on("RESET_INTRO_JACKPOT", this.reset, this),
                      (this.unicorn.node.isPlayJPIntro = !1),
                      this.setOpacity(this.overlay, 0),
                      this.jackpotTree.setSkin("All"),
                      this.jackpotTree.setSlotsToSetupPose(),
                      this.jackpotTree.setAnimation(0, "animation", !0);
                  }),
                  (r.addSubSymbol = function (t) {
                    if (void 0 !== t) {
                      var e = c(this.subSymbolPrefab);
                      this.subSymbols.push(e),
                        this.subSymbolHolder.addChild(e),
                        (e.active = !0),
                        (e.row = t % 3),
                        (e.col = Math.floor(t / 3));
                      var o = this._getPosSubSymbol(t);
                      e.setPosition(o);
                      var i = e.getComponentInChildren(a.Skeleton);
                      i && i.setAnimation(0, "IdleWin", !0), (e.active = !1);
                    }
                  }),
                  (r.showIntro = function (t, e) {
                    var o = this;
                    (this.overlay.active = !0),
                      this.setOpacity(this.overlayLastReel, 0),
                      this.fadeTo(this.overlay, 0.5, 200),
                      this.fadeOut(this.buttonHolder, 0.5),
                      this.fadeOut(this.buttonTurbo, 0.5);
                    var i = t.includes("GRAND") ? "GRAND" : "MAJOR";
                    if (this.soundPlayer) {
                      var n =
                        "GRAND" == i ? "NEAR_WIN_REEL_5" : "NEAR_WIN_REEL_4";
                      this.soundPlayer.stopAllAudio(),
                        this.soundPlayer.setMusicVolume(0),
                        this.soundPlayer.playSfx(n);
                    }
                    b(this.node)
                      .call(function () {
                        for (var t = 0; t < 4; t++) o._showSubSymbol(t);
                        e && e(0, 1, 2, 3);
                      })
                      .delay(0.2)
                      .call(function () {
                        o._dropSubSymbols();
                      })
                      .delay(0.3)
                      .call(function () {
                        o._playUnicorn(i);
                      })
                      .start(),
                      "GRAND" === i
                        ? b(this.node)
                            .delay(5.1)
                            .call(function () {
                              e && e(4), o._showSubSymbol(4);
                            })
                            .delay(1.35)
                            .call(function () {
                              o._dropSubSymbol(4);
                            })
                            .delay(2.3)
                            .call(function () {
                              o._showOverlayLastReel(),
                                o.jackpotTree.setSkin("Envelope"),
                                o.jackpotTree.setSlotsToSetupPose();
                            })
                            .start()
                        : b(this.node)
                            .delay(6.67)
                            .call(function () {
                              o._showOverlayLastReel(),
                                o.jackpotTree.setSkin("Sphere"),
                                o.jackpotTree.setSlotsToSetupPose();
                            })
                            .start();
                  }),
                  (r._showOverlayLastReel = function () {
                    this.fadeTo(this.overlayLastReel, 0.5, 200);
                  }),
                  (r.showSubSymbols = function (t) {
                    void 0 === t && (t = !1), (this.subSymbolHolder.active = t);
                  }),
                  (r.clearSubSymbols = function () {
                    this.subSymbolHolder.removeAllChildren(),
                      (this.subSymbols = []);
                  }),
                  (r.reset = function () {
                    var t = this;
                    this.setOpacity(this.overlay, 0),
                      (this.overlay.active = !1),
                      this.fadeIn(this.buttonHolder, 0.5),
                      this.fadeIn(this.buttonTurbo, 0.5),
                      b(this.unicorn.node)
                        .call(function () {
                          t.fadeOut(t.unicorn.node, 0.25);
                        })
                        .delay(0.25)
                        .call(function () {
                          t.unicorn.setAnimation(0, "Idle", !0),
                            (t.unicorn.node.isPlayJPIntro = !1);
                        })
                        .call(function () {
                          t.fadeIn(t.unicorn.node, 0.25);
                        })
                        .start(),
                      this.jackpotTree.setSkin("All"),
                      this.jackpotTree.setSlotsToSetupPose(),
                      this.clearSubSymbols(),
                      this.columns.forEach(function (t) {
                        return t.emit("HIDE_COLUMN");
                      }),
                      this.scheduleOnce(function () {
                        t.guiMgr.onIngameEvent(
                          y.AnyAction,
                          "RESET_STATE_BUTTON"
                        );
                      }, 0.6);
                  }),
                  (r._init = function () {
                    (this.startX = -2 * this.config.SYMBOL_WIDTH),
                      (this.startY = this.config.SYMBOL_HEIGHT),
                      (this.subSymbols = []),
                      (this.columns = this.columnHolder.children.slice());
                  }),
                  (r._playUnicorn = function (t) {
                    var e = "GRAND" === t ? "Win_DaiCat" : "Win_DaiLoi";
                    this.unicorn.setAnimation(0, e, !1),
                      this.unicorn.addAnimation(0, e + "_Idle", !0),
                      (this.unicorn.node.isPlayJPIntro = !0);
                  }),
                  (r._getPosSubSymbol = function (t) {
                    var e = t % 3,
                      o = Math.floor(t / 3);
                    return new h(
                      this.startX + o * this.config.SYMBOL_WIDTH + 54,
                      this.startY - e * this.config.SYMBOL_HEIGHT + 18
                    );
                  }),
                  (r._dropSubSymbols = function () {
                    for (var t = 0; t < 4; t++) this._dropSubSymbol(t);
                  }),
                  (r._showSubSymbol = function (t) {
                    var e = this.subSymbols[t];
                    e && (e.active = !0);
                  }),
                  (r._dropSubSymbol = function (t) {
                    var e = this,
                      o = this.subSymbols[t];
                    o &&
                      ((o.active = !0),
                      b(o)
                        .call(function () {
                          var t = o.getComponentInChildren(a.Skeleton);
                          t && t.setAnimation(0, "Drop" + (o.row + 1), !1);
                        })
                        .delay(0.5)
                        .call(function () {
                          e._showParticle(new h(o.position.x + 18, -280));
                        })
                        .delay(0.1)
                        .call(function () {
                          e._showColumn(t);
                        })
                        .start());
                  }),
                  (r._showColumn = function (t) {
                    var e = this.columns[t];
                    (e.active = !0), e.emit("SHOW_COLUMN", t);
                  }),
                  (r._showParticle = function (t) {
                    var e = c(this.particlePrefab);
                    this.subSymbolHolder.addChild(e),
                      e.setPosition(t),
                      (e.active = !0);
                  }),
                  e
                );
              })(p)).prototype,
              "overlay",
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
            (H = e(k.prototype, "overlayLastReel", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(k.prototype, "unicorn", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = e(k.prototype, "subSymbolPrefab", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = e(k.prototype, "columnHolder", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = e(k.prototype, "subSymbolHolder", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = e(k.prototype, "buttonHolder", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = e(k.prototype, "buttonTurbo", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(k.prototype, "particlePrefab", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = e(k.prototype, "jackpotTree", [I], {
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
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/JackpotWin9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./CustomEnum.ts",
    "./JackpotWin.ts",
    "./EventNames.ts",
  ],
  function (t) {
    "use strict";
    var n, i, e, s, a, o, r, u, l, c, h, p, d, y;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (s = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (o = t._decorator),
            (r = t.sp),
            (u = t.Node),
            (l = t.Event),
            (c = t.tween);
        },
        function (t) {
          h = t.formatMoney;
        },
        function (t) {
          p = t.TutorialTriggerType;
        },
        function (t) {
          d = t.JackpotWin;
        },
        function (t) {
          y = t.default;
        },
      ],
      execute: function () {
        var f, T, A, m, S, P, O;
        a._RF.push({}, "827fcE4bk9BQbGO6BA2sTnD", "JackpotWin9930", void 0);
        var v = o.ccclass,
          w = o.property;
        t(
          "JackpotWin9930",
          ((f = v("JackpotWin9930")),
          (T = w({ type: r.Skeleton })),
          (A = w({ type: u })),
          f(
            ((P = n(
              (S = (function (t) {
                function n() {
                  for (
                    var n, i = arguments.length, a = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (n = t.call.apply(t, [this].concat(a)) || this),
                    e(n, "spineJackpot", P, s(n)),
                    e(n, "overlay", O, s(n)),
                    n
                  );
                }
                i(n, t);
                var a = n.prototype;
                return (
                  (a.enter = function () {
                    var t = this;
                    if (
                      (this.unscheduleAllCallbacks(),
                      this.eventManager.emit(y.JACKPOT_START),
                      this.setOpacity(this.overlay, 0),
                      this.fadeTo(this.overlay, 0.3, 200),
                      this.setOpacity(this.winAmount, 0),
                      !this.dataStore.isTrialMode)
                    ) {
                      var n = new l("NOTIFY_OPEN_JACKPOT", !0);
                      (n.winAmount = this.content.winAmount),
                        (n.gameId = this.config.GAME_ID),
                        this.node.dispatchEvent(n);
                    }
                    var i =
                      (this.dataStore && this.dataStore.performanceLevel) ||
                      "HIGH_PERFORMANCE_LV";
                    (this.animationLevel = this.config[i].JP_WIN_ANIMATION),
                      this.playSoundStart(),
                      this.playTweenWinAmount(),
                      this.initValue(),
                      this.startParticle();
                    var e =
                      "GRAND" === this.content.jackpotType.split("_").pop()
                        ? "DC"
                        : "DL";
                    this.setOpacity(this.spineJackpot.node, 0),
                      this.spineJackpot.setAnimation(0, "Appear_" + e, !1),
                      this.spineJackpot.addAnimation(0, "Idle_" + e, !0),
                      this.scheduleOnce(function () {
                        t.setOpacity(t.spineJackpot.node, 255);
                      }),
                      this.scheduleOnce(function () {
                        t.setOpacity(t.winAmount, 255),
                          t.startUpdateWinAmount();
                      }, 0.8);
                  }),
                  (a.onClick = function () {
                    var t = this;
                    this.isUpdating &&
                      !this.speedUp &&
                      this.skippable &&
                      ((this.speedUp = !0),
                      this.currentTween &&
                        (this.currentTween.stop(), (this.currentTween = null)),
                      (this.currentTween = c(this)),
                      this.currentTween
                        .to(1, { currentValue: 1 * this.content.winAmount })
                        .delay(0.1)
                        .call(function () {
                          t.finish();
                        })
                        .start());
                  }),
                  (a.startUpdateWinAmount = function () {
                    var t = this,
                      n = 0.5 * Number(this.content.winAmount),
                      i =
                        this.dataStore && this.dataStore.isAutoSpin
                          ? this.extendFinishDelayTime
                          : 0;
                    (this.currentTween = c(this)),
                      this.currentTween
                        .to(0.5 * this.animDuration, { currentValue: n })
                        .to(0.5 * this.animDuration, {
                          currentValue: Number(this.content.winAmount),
                        })
                        .delay(i)
                        .call(function () {
                          t.dataStore &&
                            t.dataStore.isAutoSpin &&
                            ((t.skippable = !1),
                            (t.currentTween = null),
                            t.finish());
                        }),
                      this.currentTween.start();
                  }),
                  (a.finish = function () {
                    var t = this;
                    this.playSoundEnd(),
                      this.scheduleOnce(function () {
                        t.callback &&
                          "function" == typeof t.callback &&
                          (t.guiMgr &&
                            t.guiMgr.onIngameEvent(
                              p.OnCutsceneClose,
                              "ON_CUTSCENE_CLOSE"
                            ),
                          t.node.emit("STOP"),
                          t.callback(),
                          (t.callback = null));
                      }, this.delayShowTime),
                      (this.isUpdating = !1),
                      (this.label.string = h(this.content.winAmount)),
                      this.stopParticle(),
                      this.stopTweenWinAmount(),
                      (this.tweenExit = c(this.node)
                        .delay(this.delayShowTime + 0.1)
                        .call(function () {
                          (t.label.string = ""),
                            t.exit(),
                            t.soundPlayer &&
                              (t.soundPlayer.stopAllAudio(),
                              t.soundPlayer.setMusicVolume(
                                t.config.MUSIC_VOLUME
                              ),
                              t.soundPlayer.playMainBGM());
                        })
                        .start());
                  }),
                  (a.playSoundStart = function () {
                    this.soundPlayer &&
                      (this.soundPlayer.stopAllAudio(),
                      this.soundPlayer.setMusicVolume(0),
                      this.soundPlayer.playSfx("JACKPOT_START", !0));
                  }),
                  (a.playSoundEnd = function () {
                    var t = this;
                    if (this.soundPlayer) {
                      this.soundPlayer.fadeSoundTo("JACKPOT_START", 1, 0),
                        this.scheduleOnce(function () {
                          t.soundPlayer.stopSfx("JACKPOT_START");
                        }, 1),
                        this.soundPlayer.playSfx("JACKPOT_END", !1, 0);
                      var n = this.soundPlayer.isEnableSFX
                        ? this.config.SOUND_EFFECT_VOLUME
                        : 0;
                      this.soundPlayer.fadeSoundTo("JACKPOT_END", 1, n);
                    }
                  }),
                  n
                );
              })(d)).prototype,
              "spineJackpot",
              [T],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (O = n(S.prototype, "overlay", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = S))
          ) || m)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/LoadingScreen9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./loadConfigAsync.ts",
    "./gameCommonUtils.ts",
    "./utils2.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, a, r, o, s, l, c, u, d, h, f, m, p, b, g, B, v;
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
            (s = e.Node),
            (l = e.ProgressBar),
            (c = e.sys),
            (u = e.assetManager),
            (d = e.director),
            (h = e.Vec3),
            (f = e.Prefab),
            (m = e.instantiate),
            (p = e.sp),
            (b = e.Component);
        },
        function (e) {
          g = e.default;
        },
        function (e) {
          B = e.default;
        },
        function (e) {
          v = e.setOpacity;
        },
      ],
      execute: function () {
        var y,
          S,
          w,
          N,
          P,
          G,
          I,
          L,
          z,
          C,
          R,
          _,
          k,
          H,
          M,
          D,
          E,
          A,
          F,
          U,
          O,
          T,
          x,
          W;
        r._RF.push({}, "d78ebgM8VhHl5kla8YU18mf", "LoadingScreen9930", void 0);
        var V = o.ccclass,
          j = o.property;
        e(
          "LoadingScreen9930",
          ((y = V("LoadingScreen9930")),
          (S = j({
            visible: function () {
              return this.loadByBundle;
            },
          })),
          (w = j({
            visible: function () {
              return this.loadByBundle;
            },
          })),
          (N = j({
            type: s,
            visible: function () {
              return this.loadByBundle;
            },
          })),
          (P = j({
            visible: function () {
              return !this.loadByBundle;
            },
          })),
          (G = j({
            visible: function () {
              return !this.loadByBundle;
            },
          })),
          (I = j({
            visible: function () {
              return !this.loadByBundle;
            },
          })),
          (L = j(l)),
          (z = j(s)),
          (C = j(s)),
          y(
            ((k = t(
              (_ = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, r = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    r[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    i(t, "loadByBundle", k, a(t)),
                    i(t, "bundlePath", H, a(t)),
                    i(t, "bundleMainScene", M, a(t)),
                    i(t, "gameHolder", D, a(t)),
                    i(t, "sceneName", E, a(t)),
                    i(t, "sdSceneName", A, a(t)),
                    i(t, "sceneNameIframe", F, a(t)),
                    i(t, "sceneNameHistory", U, a(t)),
                    i(t, "progressBar", O, a(t)),
                    i(t, "homeBtn", T, a(t)),
                    i(t, "loadingGlow", x, a(t)),
                    i(t, "barWidth", W, a(t)),
                    (t.preloadGameScene = !1),
                    (t.preloadGamePrefab = !1),
                    (t.switchGameScene = !1),
                    (t.isBackToLobby = !1),
                    (t.gameBundle = null),
                    (t.gameNode = null),
                    (t._loadedPrefab = []),
                    (t.totalPercent = 0),
                    (t.eventId = null),
                    (t.updatedScene = ""),
                    t
                  );
                }
                n(t, e);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    var e = this;
                    if ("" !== this.sceneName) {
                      var t = g.getConfig().LOGIN_IFRAME;
                      this.updatedScene = this.sceneName;
                      var n = !1;
                      if (t) {
                        var i = window.location.search,
                          a = new URLSearchParams(i).get("history");
                        this.sceneNameHistory && "true" == a
                          ? ((this.updatedScene = this.sceneNameHistory),
                            (n = !0))
                          : this.sceneNameIframe &&
                            (this.updatedScene = this.sceneNameIframe);
                      }
                      c.isMobile &&
                        this.sdSceneName &&
                        (this.updatedScene = this.sdSceneName),
                        this.homeBtn &&
                          ((this.homeBtn.active = !1),
                          t ||
                            this.scheduleOnce(function () {
                              (e.homeBtn.active = !0),
                                e.homeBtn.off("click"),
                                e.homeBtn.on("click", function () {
                                  e.isBackToLobby ||
                                    (B.handleCloseGameIframe(),
                                    (e.isBackToLobby = !0));
                                });
                            }, 10)),
                        (this.node.active = !0),
                        v(this.node, 255),
                        this.loadByBundle && !n
                          ? ((this.gameBundle = u.getBundle(this.bundlePath)),
                            this.gameBundle
                              ? ((this.preloadGamePrefab = !0),
                                this.loadGamePrefab(
                                  this.gameBundle,
                                  this.bundleMainScene,
                                  this.eventId
                                ))
                              : u.loadBundle(this.bundlePath, function (t, n) {
                                  t
                                    ? console.error(
                                        "Error while loading bundle with path: BundleLobby"
                                      )
                                    : ((e.gameBundle = n),
                                      (e.preloadGamePrefab = !0),
                                      e.loadGamePrefab(
                                        n,
                                        e.bundleMainScene,
                                        e.eventId
                                      ));
                                }))
                          : ((this.preloadGameScene = !0),
                            d.preloadScene(
                              this.updatedScene,
                              function (t, n) {
                                n > 0 && (e.totalPercent = t / n);
                              },
                              function (e, t) {
                                e && B.handleFlowOutGame();
                              }
                            ));
                    }
                  }),
                  (r.setProgressFull = function () {
                    this.progressBar.progress = 1;
                  }),
                  (r.update = function (e) {
                    if (this.preloadGameScene) {
                      var t =
                        (this.totalPercent - this.progressBar.progress) / 20;
                      if (
                        t > 0 &&
                        ((this.progressBar.progress += t), this.loadingGlow)
                      ) {
                        var n = Math.max(
                          this.loadingGlow.position.x,
                          this.barWidth * this.progressBar.progress
                        );
                        this.loadingGlow.setPosition(new h(n));
                      }
                      this.progressBar.progress > 0.99 &&
                        !this.switchGameScene &&
                        ((this.switchGameScene = !0),
                        d.loadScene(this.updatedScene));
                    } else if (this.preloadGamePrefab) {
                      var i =
                        (this.totalPercent - this.progressBar.progress) / 20;
                      i > 0 && (this.progressBar.progress += i),
                        this.progressBar.progress > 0.99 &&
                          this.gameNode &&
                          !this.switchGameScene &&
                          ((this.switchGameScene = !0), this.loadGameNode());
                    }
                  }),
                  (r.loadGamePrefab = function (e, t, n) {
                    var i = this;
                    void 0 === n && (n = ""),
                      (this.eventId = n),
                      e.loadDir(
                        "",
                        f,
                        function (e, t, n) {
                          i.totalPercent = e / t;
                        },
                        function (e, n) {
                          if (!e) {
                            var a = null;
                            n.forEach(function (e) {
                              e.addRef(), e.data.name == t && (a = e);
                            }),
                              (i._loadedPrefab = n),
                              a && (i.gameNode = m(a));
                          }
                        }
                      );
                  }),
                  (r.loadGameNode = function () {
                    if (this.gameNode && this.gameHolder) {
                      var e = this.gameNode.getComponent("Director");
                      e && e.setEventId && e.setEventId(this.eventId),
                        (this.gameNode.parent = this.gameHolder),
                        this.homeBtn && (this.homeBtn.active = !1),
                        (this.node.active = !1),
                        this.unscheduleAllCallbacks();
                    }
                  }),
                  (r.setEventId = function (e) {
                    this.eventId = e;
                  }),
                  (r.onDestroy = function () {
                    this.unscheduleAllCallbacks(),
                      this.loadByBundle && this.clearBundleResourceLoaded();
                  }),
                  (r.clearBundleResourceLoaded = function () {
                    this.gameNode && (this.gameNode = null);
                    for (var e = 0; e < this._loadedPrefab.length; e++) {
                      var t = this._loadedPrefab[e];
                      if (t) {
                        for (
                          var n = [],
                            i = u.dependUtil.getDepsRecursively(t._uuid),
                            a = 0;
                          a < i.length;
                          a++
                        ) {
                          var r = i[a],
                            o = u.assets.get(r);
                          o && (o.addRef(), n.push(o));
                        }
                        console.log(
                          ">>>>> assets to release count: " + n.length
                        ),
                          n.forEach(function (e) {
                            e &&
                              (e.decRef(!0),
                              e instanceof p.SkeletonData && e.reset());
                          }),
                          t.decRef(!0),
                          (n = []);
                      }
                    }
                    this._loadedPrefab = [];
                    var s = u.getBundle(this.bundlePath);
                    s && u.removeBundle(s),
                      c.isNative &&
                        (u.releaseUnusedAssets(),
                        console.log(">>>>> GC Collect in Native"),
                        c.garbageCollect());
                  }),
                  t
                );
              })(b)).prototype,
              "loadByBundle",
              [j],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return !1;
                },
              }
            )),
            (H = t(_.prototype, "bundlePath", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (M = t(_.prototype, "bundleMainScene", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (D = t(_.prototype, "gameHolder", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = t(_.prototype, "sceneName", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (A = t(_.prototype, "sdSceneName", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (F = t(_.prototype, "sceneNameIframe", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (U = t(_.prototype, "sceneNameHistory", [j], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (O = t(_.prototype, "progressBar", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = t(_.prototype, "homeBtn", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = t(_.prototype, "loadingGlow", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = t(_.prototype, "barWidth", [j], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 0;
              },
            })),
            (R = _))
          ) || R)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MainDirector9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./loadConfigAsync.ts",
    "./CustomEnum.ts",
    "./EventNames.ts",
    "./SlotDirector.ts",
    "./SlotText.ts",
  ],
  function (t) {
    "use strict";
    var e, i, s, n, o, a, r, c, h, l, u, S, _, p;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (s = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy), (a = t._decorator), (r = t.Node), (c = t.log);
        },
        function (t) {
          h = t.default;
        },
        function (t) {
          (l = t.TutorialTriggerType), (u = t.WalletType);
        },
        function (t) {
          S = t.default;
        },
        function (t) {
          _ = t.SlotDirector;
        },
        function (t) {
          p = t.SlotText;
        },
      ],
      execute: function () {
        var N, f, E, m, I;
        o._RF.push({}, "38431xyyD5EkrZWEJVOqG9f", "MainDirector9930", void 0);
        var T = a.ccclass,
          P = a.property;
        t(
          "MainDirector9930",
          ((N = T("MainDirector9930")),
          (f = P({ type: r })),
          N(
            ((I = e(
              (m = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    s(e, "introJackpot", I, n(e)),
                    e
                  );
                }
                i(e, t);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("GAME_SHOW", this.onGameShow, this),
                      this.node.on("GAME_HIDE", this.onGameHide, this);
                  }),
                  (o.extendInit = function () {
                    this.hasPayline = !0;
                  }),
                  (o.onGameShow = function () {
                    this.introJackpot &&
                      this.introJackpot.emit("SHOW_SUB_SYMBOL", !0);
                  }),
                  (o.onGameHide = function () {
                    this.introJackpot &&
                      this.introJackpot.emit("SHOW_SUB_SYMBOL", !1);
                  }),
                  (o.spinClick = function () {
                    this.node &&
                      this.fsm &&
                      this.fsm.can("actionTrigger") &&
                      (this.table.emit("SKIP_ANIMS"),
                      this.skipAllEffects(),
                      this.resetAsyncScript(),
                      this.eventManager.emit(S.SPIN_CLICK_ACTION),
                      this.runAction("SpinClick"));
                  }),
                  (o.skipAllEffects = function () {
                    t.prototype.skipAllEffects.call(this),
                      this.unscheduleAllCallbacks();
                  }),
                  (o._showResult = function (e) {
                    this.table.emit("STOP_SURE_WIN"),
                      this.table.emit("PLAY_LIGHT_IDLE"),
                      t.prototype._showResult.call(this, e);
                  }),
                  (o._showWildPayLine = function (t) {
                    var e = this;
                    this.hasPayline
                      ? (this.soundPlayer &&
                          this.soundPlayer.playSfx("WILD_WIN"),
                        this.table.emit("SHOW_WILD_PAYLINE", function () {
                          e.executeNextScript(t);
                        }))
                      : this.executeNextScript(t);
                  }),
                  (o._showWildPayLine_2 = function (t) {
                    var e = this;
                    this.hasPayline
                      ? (this.soundPlayer &&
                          this.soundPlayer.playSfx("WILD_WIN"),
                        this.table.emit("SHOW_WILD_PAYLINE", function () {
                          e.executeNextScript(t);
                        }))
                      : this.executeNextScript(t);
                  }),
                  (o._playAnimSureWin = function (t) {
                    this.table.emit("SET_UP_SURE_WIN"),
                      this.executeNextScript(t);
                  }),
                  (o._setupBanner = function (t, e) {
                    var i = e.format,
                      s = e.stackFormats;
                    this.table.emit("SET_UP_BANNER", i, s),
                      this.executeNextScript(t);
                  }),
                  (o._openAllBanners = function (t) {
                    var e = this;
                    this.table.emit("OPEN_ALL_BANNERS");
                    var i =
                        this.dataStore.gameSpeed ==
                        this.config.GAME_SPEED.INSTANTLY,
                      s = this.dataStore.playSession.sureWin,
                      n = i && !s ? 0.2 : this.config.DELAY_OPEN_BANNER;
                    this.scheduleOnce(function () {
                      e.executeNextScript(t);
                    }, n);
                  }),
                  (o._updateWinningAmount = function (t, e) {
                    var i = e.winAmount,
                      s = e.time,
                      n = e.isFTR,
                      o = e.rate;
                    (this.dataStore.playSession.winAmountPS || i) &&
                      (n || this.playSoundWinLine(o),
                      this.guiMgr.updateWinAmount(i, s)),
                      this.executeNextScript(t);
                  }),
                  (o._showIntroFreeGame = function (t, e) {
                    var i = this,
                      s = e.name,
                      n = e.content;
                    this.guiMgr.onIngameEvent(
                      l.Other,
                      "ON_FINISH_WILD_PAYLINE"
                    ),
                      this._checkPauseTutorial("pauseIntroFreeGame")
                        ? ((this.storeCurrentScripts =
                            "_showUnskippedCutscene"),
                          (this.storeNextScripts = {
                            script: t,
                            data: { name: s, content: n },
                          }))
                        : this.guiMgr &&
                          this.guiMgr.showCutScene(s, n, function () {
                            i.executeNextScript(t);
                          });
                  }),
                  (o._showNormalPayline = function (t) {
                    this.hasPayline
                      ? (this.guiMgr.onIngameEvent(
                          l.ShowPayline,
                          "SHOW_NORMAL_PAYLINE"
                        ),
                        this.table.emit("SHOW_ALL_NORMAL_PAYLINES"),
                        this.executeNextScript(t))
                      : this.executeNextScript(t);
                  }),
                  (o._hideIntroJackpot = function (t) {
                    this.table.emit("HIDE_INTRO_JACKPOT"),
                      this.executeNextScript(t);
                  }),
                  (o._pauseIntroJackpot = function (t) {
                    this.guiMgr.onIngameEvent(
                      l.Other,
                      "ON_FINISH_INTRO_JACKPOT"
                    ),
                      this._checkPauseTutorial("pauseIntroJackpot")
                        ? ((this.storeCurrentScripts = "_pauseIntroJackpot"),
                          (this.storeNextScripts = { script: t }))
                        : this.executeNextScript(t);
                  }),
                  (o._resumeGameMode = function (t, e) {
                    var i = this,
                      s = e.name;
                    e.data;
                    this.resetGameSpeed(),
                      this.hasTable || (this.hasTable = !0),
                      this.mainDirector.resumeGameMode(
                        { name: s },
                        function () {
                          i.soundPlayer && i.soundPlayer.playMainBGM(s),
                            i.executeNextScript(t);
                        }
                      ),
                      !this._autoSpin &&
                        this.slotButton &&
                        (this.slotButton.emit("SPIN_SHOW"),
                        this.slotButton.emit("SPIN_ENABLE"),
                        this.slotButton.emit("FAST_TO_RESULT_HIDE"),
                        this.slotButton.emit("STOP_AUTO_SPIN_HIDE", !0)),
                      this.guiMgr.setQuestPosition(this.questDummy);
                  }),
                  (o._setUpPaylines = function (t, e) {
                    var i = e.matrix,
                      s = e.payLines,
                      n = e.rate;
                    (this.hasPayline = !0),
                      this.table.emit("SET_WIN_LINE", n),
                      this.table.emit("SETUP_PAYLINES", i, s),
                      this.executeNextScript(t);
                  }),
                  (o._playSoundFastBigWin = function (t) {
                    this.soundPlayer && this.soundPlayer.playSfx("WIN_4"),
                      this.executeNextScript(t);
                  }),
                  (o._spinClick = function (t) {
                    void 0 === t && (t = []),
                      this.fsm.can("actionTrigger") &&
                        (this.fsm.actionTrigger(),
                        this._setTurboMode(),
                        this.resetGameSpeed(),
                        this._showTrialButtons(null, !1),
                        this.slotButton &&
                          (this.slotButton.emit("SPIN_DISABLE"),
                          this.slotButton.emit("SPIN_HIDE"),
                          this.slotButton.emit("FAST_TO_RESULT_DISABLE"),
                          this.slotButton.emit("DISABLE_PROMOTION_STOP_SPIN"),
                          this.slotButton.emit("FAST_TO_RESULT_SHOW"),
                          this.slotButton.emit("PLAY_ANIM_DRUMSTICK")),
                        this.hasTable
                          ? (this.table.emit("START_SPINNING"),
                            (this.isSpinning = !0),
                            this.guiMgr.onIngameEvent(
                              l.SpinClicked,
                              "SPIN_CLICK"
                            ),
                            this.executeNextScript(t))
                          : this.executeNextScript(t));
                  }),
                  (o._blinkAllPaylines = function (t) {
                    this.hasPayline
                      ? this.table.emit(
                          "BLINK_ALL_NORMAL_PAYLINES",
                          this.executeNextScript.bind(this, t)
                        )
                      : this.executeNextScript(t);
                  }),
                  (o._resumeWallets = function (t) {
                    this.dataStore.resumeWallet(u.NORMAL),
                      this.dataStore.resumeWallet(u.PROMOTE),
                      this.dataStore.resumeWallet(u.TRIAL),
                      this.executeNextScript(t);
                  }),
                  (o.playSoundWinLine = function (t) {
                    if (this.soundPlayer) {
                      var e = "WIN_" + t;
                      this.soundPlayer.playSfx(e);
                    }
                  }),
                  (o.switchMode = function () {
                    this.clearAsyncScript(),
                      this.unscheduleAllCallbacks(),
                      this.runAction("SwitchMode");
                  }),
                  (o.forceToExit = function (t) {
                    (this.forceToExitMode = !0),
                      (this.exitScript = t),
                      this.skipAllEffects(),
                      this.clearAsyncScript(),
                      this.stopAutoSpinClick(),
                      this.fsm.gameRestart(),
                      this.unscheduleAllCallbacks();
                  }),
                  (o._showMessageNoMoney = function (t, e) {
                    var i = h.getConfig().LOGIN_IFRAME,
                      s = function () {
                        e && e.callback && e.callback();
                      },
                      n = null,
                      o = "",
                      a =
                        this.dataStore.getCurrentWalletType() == u.PROMOTE
                          ? p.WALLET_PROMOTE
                          : p.WALLET_NORMAL;
                    this.dataStore.getCurrentWalletType() == u.PROMOTE
                      ? ((o = p.NOT_ENOUGH_MONEY),
                        this.config.IS_SUPPORT_EVENT &&
                          (o = p.NOT_ENOUGH_MONEY.replace("[wallet]", a)),
                        this.guiMgr.showDialog(o, s, n))
                      : (i && "function" == typeof globalThis.ingameDeposit
                          ? ((o = p.DEPOSIT_MONEY),
                            this.config.IS_SUPPORT_EVENT &&
                              (o = p.DEPOSIT_MONEY_EVENT.replace(
                                "[wallet]",
                                a
                              )),
                            (s = function () {
                              globalThis.ingameDeposit();
                            }),
                            (n = function () {
                              c("Cancel deposit");
                            }),
                            c("Show Deposit"))
                          : ((o = p.NO_MONEY.replace(/\n/, "")),
                            this.config.IS_SUPPORT_EVENT &&
                              this.dataStore.getWalletTypes().length > 1 &&
                              (o = p.NO_MONEY_EVENT.replace("[wallet]", a)),
                            c("Show No Money")),
                        this.guiMgr.showDialog(o, s, n));
                  }),
                  e
                );
              })(_)).prototype,
              "introJackpot",
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
            (E = m))
          ) || E)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MainWriter9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./SlotGameWriter.ts",
  ],
  function (a) {
    "use strict";
    var e, n, t, m, o, s;
    return {
      setters: [
        function (a) {
          e = a.inheritsLoose;
        },
        function (a) {
          (n = a.cclegacy), (t = a._decorator);
        },
        function (a) {
          (m = a.SlotSceneType), (o = a.SlotGameMode);
        },
        function (a) {
          s = a.SlotGameWriter;
        },
      ],
      execute: function () {
        var i;
        n._RF.push({}, "dcf75ZcJe9ABqZhxTV31GmZ", "MainWriter9930", void 0);
        var u = t.ccclass;
        a(
          "MainWriter9930",
          u("MainWriter9930")(
            (i = (function (a) {
              function n() {
                return a.apply(this, arguments) || this;
              }
              e(n, a);
              var t = n.prototype;
              return (
                (t.makeScriptResume = function () {
                  var a = this.node.dataStore;
                  if (a) {
                    var e,
                      n,
                      t = a.config,
                      s = a.promotion,
                      i = t.NORMAL_TABLE_FORMAT,
                      u = t.FREE_TABLE_FORMAT,
                      r = a.playSession,
                      p = r.normalGameMatrix,
                      d = r.normalGamePaylines,
                      c = r.bonusGameRemain,
                      h = r.freeGameRemain,
                      l = r.freeGameMatrix,
                      _ = r.winAmountPS,
                      S = r.betId,
                      A = r.walletType,
                      f = a.convertMatrix(p, i),
                      y = d ? a.convertPayLine(d) : null,
                      T = (h && h > 0) || (c && c > 0 && !(c && c > 0 && !l)),
                      R = [];
                    if (
                      (s && ((e = s.promotionRemain), (n = s.promotionTotal)),
                      R.push({ command: "_clearPaylines" }),
                      R.push({ command: "_updateBetId", data: S }),
                      R.push({ command: "_loadWallet", data: A }),
                      R.push({ command: "_disableBet" }),
                      R.push({ command: "_showTrialButtons", data: !1 }),
                      R.push({ command: "_updateMatrix", data: { matrix: f } }),
                      R.push({
                        command: "_setUpPaylines",
                        data: {
                          matrix: f,
                          payLines: y,
                          rate: this._checkRateWinLine(),
                        },
                      }),
                      _ &&
                        _ > 0 &&
                        R.push({
                          command: "_updateWinningAmount",
                          data: { winAmount: _, time: 0 },
                        }),
                      T)
                    ) {
                      var w = f;
                      l && (w = a.convertMatrix(l, u)),
                        R.push({ command: "_showWildPayLine" }),
                        h &&
                          h > 0 &&
                          (R.push({
                            command: "_showIntroFreeGame",
                            data: {
                              name: m.IntroFreeGame,
                              content: { freeGameRemain: h, isResume: !0 },
                            },
                          }),
                          R.push({
                            command: "_newGameMode",
                            data: { name: o.FreeGame, data: w },
                          })),
                        R.push({
                          command: "_resumeGameMode",
                          data: { name: o.NormalGame },
                        });
                    }
                    return (
                      y && y.length > 0
                        ? R.push({ command: "_showNormalPayline" })
                        : R.push({ command: "_clearPaylines" }),
                      R.push({ command: "_resumeWallets" }),
                      R.push({ command: "_gameFinish" }),
                      R.push({ command: "_gameRestart" }),
                      s &&
                        e &&
                        n &&
                        e > 0 &&
                        R.push({ command: "_showPromotionPopup" }),
                      R
                    );
                  }
                }),
                (t.makeScriptResultReceive = function () {
                  var a = this.node.dataStore.playSession,
                    e = a.matrix,
                    n = a.jackpotInfo,
                    t = a.sureWin,
                    m = a.stackFormats,
                    o = a.subSymbols,
                    s = a.nlpl,
                    i = [];
                  if (n) {
                    var u = n[n.length - 1].split(";"),
                      r = u[0].slice(7),
                      p = Number(u[1]);
                    i.push({ command: "_pauseUpdateJP" }),
                      i.push({
                        command: "_updateValueJP",
                        data: { jpType: r, jpValue: p },
                      });
                  }
                  return (
                    s &&
                      i.push({
                        command: "_setupBanner",
                        data: { format: s, stackFormats: m },
                      }),
                    t && i.push({ command: "_playAnimSureWin" }),
                    i.push({
                      command: "_resultReceive",
                      data: { matrix: e, subSymbols: o, jackpot: n },
                    }),
                    i.push({ command: "_showResult", data: e }),
                    i
                  );
                }),
                (t.makeScriptShowResults = function () {
                  var a = this.node.dataStore,
                    e = a.playSession,
                    n = e.matrix,
                    t = e.winAmount,
                    s = e.winAmountPS,
                    i = e.payLines,
                    u = e.nlpl,
                    r = e.sureWin,
                    p = e.freeGame,
                    d = e.freeGameRemain,
                    c = e.jackpotInfo,
                    h = e.isFinished,
                    l = a.betData,
                    _ = a.gameSpeed,
                    S = a.isAutoSpin,
                    A = a.config,
                    f = a.modeTurbo,
                    y = _ === A.GAME_SPEED.INSTANTLY,
                    T = t && t >= 20 * l.getTotalBet() && !c,
                    R = h && !S,
                    w = [],
                    W = !1;
                  (w.push({
                    command: "_setUpPaylines",
                    data: {
                      matrix: n,
                      payLines: i,
                      rate: this._checkRateWinLine(),
                    },
                  }),
                  w.push({ command: "_pauseWallets" }),
                  u) &&
                    (c ||
                      T ||
                      (R &&
                        !W &&
                        ((W = !0), w.push({ command: "_gameRestart" }))),
                    u.filter(function (a) {
                      return 9 !== a;
                    }).length > 0 && w.push({ command: "_openAllBanners" }));
                  if (c) {
                    var G = c[c.length - 1].split(";"),
                      g = 0,
                      B = "GRAND" === G[0].split("_").pop() ? 5 : 3;
                    G && G.length >= 2 && (G[0], (g = Number(G[1])), G[2]),
                      w.push({ command: "_delayTimeScript", data: r ? 1 : B }),
                      w.push({ command: "_pauseIntroJackpot" }),
                      w.push({
                        command: "_showUnskippedCutscene",
                        data: {
                          name: m.JackpotWin,
                          content: {
                            winAmount: g,
                            currentBetData: l.getTotalBet(),
                            jackpotType: G[0],
                          },
                        },
                      }),
                      w.push({ command: "_hideIntroJackpot" }),
                      w.push({ command: "_resumeUpdateJP" });
                  }
                  if (
                    (T &&
                      (i &&
                        i.length > 0 &&
                        w.push({ command: "_blinkAllPaylines" }),
                      (f || y) && w.push({ command: "_playSoundFastBigWin" }),
                      w.push({
                        command: "_showCutscene",
                        data: {
                          name: m.BigWin,
                          content: {
                            winAmount: t,
                            currentBetData: l.getTotalBet(),
                          },
                        },
                      })),
                    s > 0
                      ? w.push({
                          command: "_updateWinningAmount",
                          data: {
                            winAmount: s,
                            time: 0.3,
                            isFTR: y,
                            rate: this._checkRateSoundWin(),
                          },
                        })
                      : w.push({ command: "_clearWinAmount" }),
                    R && !W && ((W = !0), w.push({ command: "_gameRestart" })),
                    p > 0)
                  ) {
                    var P = a.spinTimes;
                    w.push({ command: "_showWildPayLine" }),
                      w.push({
                        command: "_showIntroFreeGame",
                        data: {
                          name: m.IntroFreeGame,
                          content: { freeGameRemain: d, isResume: !1 },
                        },
                      }),
                      w.push({
                        command: "_newGameMode",
                        data: { name: o.FreeGame, data: n },
                      }),
                      w.push({
                        command: "_resumeGameMode",
                        data: { name: o.NormalGame },
                      }),
                      P &&
                        P > 0 &&
                        w.push({ command: "_resumeSpinTime", data: P });
                  }
                  return (
                    i &&
                      i.length > 0 &&
                      (T || w.push({ command: "_blinkAllPaylines" }),
                      S || w.push({ command: "_showNormalPayline" })),
                    w.push({ command: "_resumeWallets" }),
                    w.push({ command: "_gameFinish" }),
                    w.push({ command: "_updateWallet" }),
                    W || ((W = !0), w.push({ command: "_gameRestart" })),
                    w
                  );
                }),
                (t.makeScriptGameRestart = function () {
                  var a,
                    e = this.node.dataStore,
                    n = [],
                    t = e.playSession,
                    m = t.freeGameRemain,
                    o = t.respinGameRemain,
                    s = e.spinTimes,
                    i = e.promotion;
                  return (
                    i && (a = i.promotionRemain),
                    this.scriptUpdateWinAmount(n),
                    a &&
                      a > 0 &&
                      (n.push({ command: "_showTrialButtons", data: !1 }),
                      n.push({ command: "_resetPromotionButtons" })),
                    s && s > 0
                      ? (m && m > 0) || (o && o > 0)
                        ? n.push({ command: "_runAutoSpin" })
                        : (i && a) || n.push({ command: "_runAutoSpin" })
                      : (!a || a <= 0) &&
                        (n.push({ command: "_enableBet" }),
                        n.push({ command: "_exitPromotionMode" }),
                        n.push({ command: "_resetSpinButton" }),
                        n.push({ command: "_showTrialButtons", data: !0 })),
                    n.push({ command: "_runAsyncScript" }),
                    n
                  );
                }),
                (t.scriptUpdateWinAmount = function (a) {
                  var e = this.node.dataStore,
                    n = e.gameSpeed,
                    t = e.modeTurbo,
                    m = e.config,
                    o = e.playSession,
                    s = o.winAmountPS,
                    i = o.winAmount,
                    u = o.isFinished,
                    r = e.questData,
                    p = r.showedAnim,
                    d = r.winAmountQuest,
                    c = r.playingFinish,
                    h = n === m.GAME_SPEED.INSTANTLY;
                  u &&
                    !p &&
                    d &&
                    (a.push({ command: "_playAnimWinQuest" }),
                    c && a.push({ command: "_getAvailableQuest" }),
                    (e.questData.showedAnim = !0)),
                    i &&
                      i > 0 &&
                      a.push({
                        command: "_updateWinningAmount",
                        data: {
                          winAmount: s,
                          time: h || t ? 0 : 0.3,
                          isFTR: h,
                        },
                      }),
                    u &&
                      (a.push({ command: "_resumeWallets" }),
                      a.push({ command: "_resumeTopPlayer" }));
                }),
                (t._checkRateSoundWin = function () {
                  var a = this.node.dataStore;
                  if (a) {
                    var e = a.playSession.winAmount,
                      n = a.betData.getTotalBet();
                    return e < n
                      ? 1
                      : e <= 5 * n
                      ? 2
                      : e <= 20 * n
                      ? 3
                      : void 0;
                  }
                }),
                (t._checkRateWinLine = function () {
                  var a = this.node.dataStore;
                  if (a)
                    return a.playSession.winAmount < a.betData.getTotalBet()
                      ? 0
                      : 1;
                }),
                (t.makeScriptSpinClick = function () {
                  var a,
                    e,
                    n = [],
                    t = this.node.dataStore,
                    m = t.betData.betId,
                    s = t.spinTimes,
                    i = t.isAutoSpin,
                    u = t.promotion,
                    r = t.currentGameMode,
                    p = t.playSession,
                    d = p.freeGameRemain,
                    c = p.freeGame,
                    h = 0;
                  u && ((a = u.promotionRemain), (e = u.promotionBetId)),
                    d && d > 0
                      ? (h = d - 1)
                      : u && a > 0
                      ? ((h = a - 1),
                        n.push({ command: "_updatePromotionRemain", data: h }))
                      : i
                      ? s && s > 0 && (h = s - 1)
                      : (h = 0),
                    (t.spinTimes = h);
                  var l = t.getWalletAfterSpin() >= 0;
                  return (
                    n.push({ command: "_showTrialButtons", data: !1 }),
                    l || d > 0 || c > 0 || u
                      ? (n.push({ command: "_disableBet" }),
                        n.push({ command: "_clearPaylines" }),
                        r === o.NormalGame &&
                          n.push({ command: "_clearWinAmount" }),
                        n.push({ command: "_updateSpinTimes", data: h }),
                        n.push({ command: "_resumeWallets" }),
                        r !== o.NormalGame ||
                          u ||
                          n.push({ command: "_updateWalletAfterClickSpin" }),
                        n.push({ command: "_pauseWallets" }),
                        n.push({ command: "_pauseTopPlayer" }),
                        !u || d || c
                          ? n.push({
                              command: "_sendSpinToNetwork",
                              data: { currentBetData: m },
                            })
                          : n.push({
                              command: "_sendSpinToNetwork",
                              data: { currentBetData: e },
                            }),
                        n.push({ command: "_spinClick" }))
                      : ((t.spinTimes = 0),
                        (t.isAutoSpin = !1),
                        (n = [
                          { command: "_enableBet" },
                          { command: "_resetSpinButton" },
                          { command: "_showTrialButtons", data: !0 },
                          { command: "_showMessageNoMoney" },
                        ])),
                    n
                  );
                }),
                n
              );
            })(s))
          ) || i
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ReelEffects9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./GameObject.ts"],
  function (e) {
    "use strict";
    var t, n, i, a, r, o, s, l, c, h;
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
            (s = e.Node),
            (l = e.Tween),
            (c = e.tween);
        },
        function (e) {
          h = e.GameObject;
        },
      ],
      execute: function () {
        var f, u, p, d, g;
        r._RF.push({}, "b5d64SKBz9Bwb327Z53r9PM", "ReelEffects9930", void 0);
        var v = o.ccclass,
          w = o.property;
        e(
          "ReelEffects9930",
          ((f = v("ReelEffects9930")),
          (u = w({ type: s })),
          f(
            ((g = t(
              (d = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, r = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    r[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    i(t, "glows", g, a(t)),
                    t
                  );
                }
                n(t, e);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    e.prototype.onLoad.call(this),
                      this.eventManager &&
                        (this.eventManager.on(
                          "HIGHLIGHT_REEL",
                          this.highLightReel,
                          this
                        ),
                        this.eventManager.on(
                          "HIGHLIGHT_REEL_IDLE",
                          this.highLightReelIdle,
                          this
                        ),
                        this.eventManager.on(
                          "RESET_HIGHLIGHT_REEL",
                          this.reset,
                          this
                        )),
                      this.reset(1, 2, 3);
                  }),
                  (r.highLightReel = function (e, t) {
                    var n = this.glows[e - 1];
                    n &&
                      (t
                        ? ((n.active = !0),
                          n.tweenFade && n.tweenFade.stop(),
                          (n.tweenFade = null),
                          this.fadeTo(n, 0.4, 255))
                        : (n.tweenFade && n.tweenFade.stop(),
                          (n.tweenFade = null),
                          this.setOpacity(n, 0),
                          (n.active = !1)));
                  }),
                  (r.highLightReelIdle = function (e) {
                    var t = this,
                      n = this.glows[e - 1];
                    if (n) {
                      var i = 0.5;
                      (n.active = !0),
                        this.setOpacity(n, 0),
                        l.stopAllByTarget(n),
                        c(n)
                          .call(function () {
                            t.fadeTo(n, i, 255);
                          })
                          .delay(i)
                          .call(function () {
                            t.fadeTo(n, i, 100);
                          })
                          .delay(i)
                          .union()
                          .repeatForever()
                          .start();
                    }
                  }),
                  (r.reset = function () {
                    for (
                      var e = this,
                        t = arguments.length,
                        n = new Array(t),
                        i = 0;
                      i < t;
                      i++
                    )
                      n[i] = arguments[i];
                    n.forEach(function (t) {
                      var n = e.glows[t - 1];
                      n &&
                        (l.stopAllByTarget(n),
                        n.tweenFade && n.tweenFade.stop(),
                        (n.tweenFade = null),
                        e.setOpacity(n, 0),
                        (n.active = !1));
                    });
                  }),
                  t
                );
              })(h)).prototype,
              "glows",
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
            (p = d))
          ) || p)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Setting9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./Setting.ts"],
  function (e) {
    "use strict";
    var t, i, n, o, s, c, r, u, a;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (s = e.cclegacy), (c = e._decorator), (r = e.Node), (u = e.Toggle);
        },
        function (e) {
          a = e.Setting;
        },
      ],
      execute: function () {
        var h, l, p, C, g;
        s._RF.push({}, "57b48CFR4xI1q1Wy2YRHSCR", "Setting9930", void 0);
        var d = c.ccclass,
          y = c.property;
        e(
          "Setting9930",
          ((h = d("Setting9930")),
          (l = y({ type: r })),
          h(
            ((g = t(
              (C = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, s = new Array(i), c = 0;
                    c < i;
                    c++
                  )
                    s[c] = arguments[c];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    n(t, "unCheckMusic", g, o(t)),
                    t
                  );
                }
                return (
                  i(t, e),
                  (t.prototype.init = function () {
                    (this.BGMCheckBox.getComponent(u).isChecked = !1),
                      (this.SFXCheckBox.getComponent(u).isChecked = !1),
                      (this.unCheckMusic.active = !0),
                      this.soundPlayer &&
                        this.soundPlayer.isEnableBGM &&
                        ((this.BGMCheckBox.getComponent(u).isChecked = !0),
                        (this.unCheckMusic.active = !1)),
                      this.soundPlayer &&
                        this.soundPlayer.isEnableSFX &&
                        (this.SFXCheckBox.getComponent(u).isChecked = !0),
                      (this.initialized = !0);
                  }),
                  t
                );
              })(a)).prototype,
              "unCheckMusic",
              [l],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (p = C))
          ) || p)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotBetHistory9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotBetHistory.ts"],
  function (t) {
    "use strict";
    var e, i, r, o, s, a, n, c;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (r = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy), (a = t._decorator), (n = t.Node);
        },
        function (t) {
          c = t.SlotBetHistory;
        },
      ],
      execute: function () {
        var l, p, u, h, y;
        s._RF.push({}, "062a4ZrUPJJeIO9EjBWrhac", "SlotBetHistory9930", void 0);
        var g = a.ccclass,
          f = a.property;
        t(
          "SlotBetHistory9930",
          ((l = g("SlotBetHistory9930")),
          (p = f({ type: n })),
          l(
            ((y = e(
              (h = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, s = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    r(e, "page", y, o(e)),
                    e
                  );
                }
                i(e, t);
                var s = e.prototype;
                return (
                  (s.onRequestBetResponse = function (e) {
                    e.error ||
                      (t.prototype.onRequestBetResponse.call(this, e),
                      this._hasBetData(e)
                        ? ((this.page.active = !0),
                          (this.noBetHistoryText.active = !1),
                          e.data.total > 0 &&
                            this.pagination &&
                            this.pagination.emit(
                              "UPDATE_PAGE",
                              this.currentPage,
                              this.totalPage
                            ))
                        : ((this.page.active = !1),
                          (this.noBetHistoryText.active = !0)));
                  }),
                  (s.requestErr = function () {
                    this.stopLoading(),
                      this.errorMessage &&
                        ((this.page.active = !1),
                        (this.errorMessage.active = !0),
                        this.table.emit("CLEAR_DATA"));
                  }),
                  e
                );
              })(c)).prototype,
              "page",
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
            (u = h))
          ) || u)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotButton9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotButton.ts"],
  function (t) {
    "use strict";
    var i, n, o, e, s, r, p, c, h, u, a, m, S;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (r = t._decorator),
            (p = t.sp),
            (c = t.Node),
            (h = t.Sprite),
            (u = t.log),
            (a = t.KeyCode),
            (m = t.Button);
        },
        function (t) {
          S = t.SlotButton;
        },
      ],
      execute: function () {
        var l, d, k, f, B, v, A, T, b;
        s._RF.push({}, "698b48P2ulBgZZ4BvXDs3Kg", "SlotButton9930", void 0);
        var y = r.ccclass,
          P = r.property,
          g = "Drumstick_Idle",
          D = "Drumstick_Hover",
          _ = "Drumstick_Spin_To_Stop",
          F = "Drumstick_Stop";
        t(
          "SlotButton9930",
          ((l = y("SlotButton9930")),
          (d = P({ type: p.Skeleton })),
          (k = P({ type: c })),
          (f = P({ type: c })),
          l(
            ((A = i(
              (v = (function (t) {
                function i() {
                  for (
                    var i, n = arguments.length, s = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (i = t.call.apply(t, [this].concat(s)) || this),
                    o(i, "drumStick", A, e(i)),
                    o(i, "promotionSpinTimes", T, e(i)),
                    o(i, "promotionIcon", b, e(i)),
                    (i.isClickSpin = !1),
                    (i.lastedAnimDrumStick = "Drumstick_Idle"),
                    i
                  );
                }
                n(i, t);
                var s = i.prototype;
                return (
                  (s.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      (this.isClickSpin = !1),
                      this.node.on(
                        "PLAY_ANIM_DRUMSTICK",
                        this.playAnimDrumStick,
                        this
                      ),
                      this.setMixAnimDrumStick();
                  }),
                  (s.setMixAnimDrumStick = function () {
                    this.drumStick.setMix(g, D, 0.3),
                      this.drumStick.setMix(g, _, 0.3),
                      this.drumStick.setMix(_, F, 0.3),
                      this.drumStick.setMix(g, F, 0.3);
                  }),
                  (s.onHover = function () {
                    t.prototype.onHover.call(this),
                      this.drumStick && this.drumStick.setAnimation(1, D, !0);
                  }),
                  (s.onMouseLeave = function () {
                    this.spineHover &&
                      this.spineHover.node.active &&
                      this.spineBtnSpin &&
                      (this.spineBtnSpin.node.active = !0),
                      this.drumStick &&
                        !this.isClickSpin &&
                        this.drumStick.setAnimation(1, g, !0),
                      t.prototype.onMouseLeave.call(this);
                  }),
                  (s.enableFastToResult = function () {
                    (this.btnFastStop.interactable = !0),
                      this.textSpin &&
                        this.txtPressToStop &&
                        (this.textSpin.getComponent(h).spriteFrame =
                          this.txtPressToStop),
                      this.spineBtnSpin
                        ? this.spineBtnSpin.setAnimation(
                            0,
                            this.animFastToResult,
                            !0
                          )
                        : u(
                            "[SlotButton] Not Found Animation: " +
                              this.animFastToResult
                          );
                  }),
                  (s.enableSpin = function () {
                    t.prototype.enableSpin.call(this),
                      this.drumStick &&
                        ((this.isClickSpin = !1),
                        this.drumStick.setAnimation(1, g, !0));
                  }),
                  (s.playAnimDrumStick = function () {
                    this.spineBtnSpin &&
                      (this.spineBtnSpin.setAnimation(0, this.animPressed, !1),
                      this.spineBtnSpin.addAnimation(
                        0,
                        this.animFastToResult,
                        !0
                      )),
                      this.drumStick &&
                        ((this.isClickSpin = !0),
                        this.drumStick.setAnimation(1, _, !1),
                        this.drumStick.addAnimation(1, F, !0));
                  }),
                  (s.showAllPromoUI = function () {
                    this.showPromoSpin(),
                      this.hideTextAutoSpin(),
                      this.showPromotionSpinTimes();
                  }),
                  (s.hideAllPromoUI = function () {
                    this.hidePromoSpin(),
                      this.showTextAutoSpin(),
                      this.hidePromotionSpinTimes();
                  }),
                  (s.showPromotionSpinTimes = function () {
                    this.promotionSpinTimes &&
                      (this.promotionSpinTimes.active = !0);
                  }),
                  (s.hidePromotionSpinTimes = function () {
                    this.promotionSpinTimes &&
                      (this.promotionSpinTimes.active = !1);
                  }),
                  (s.showPromoSpin = function () {
                    this.promoBtnSpin && (this.promoBtnSpin.node.active = !0),
                      this.showPromotionIcon(!0);
                  }),
                  (s.hidePromoSpin = function () {
                    this.promoBtnSpin && (this.promoBtnSpin.node.active = !1),
                      this.showPromotionIcon(!1);
                  }),
                  (s.showPromotionIcon = function (t) {
                    void 0 === t && (t = !1),
                      this.promotionIcon && (this.promotionIcon.active = t);
                  }),
                  (s.onKeyUp = function (t) {
                    t.keyCode === a.SPACE &&
                      this.guiMgr.isSpinVisible() &&
                      this.guiMgr.isDisplayFullScreen() &&
                      (this.node.active &&
                      this.btnSpin &&
                      this.btnSpin.interactable &&
                      !this.btnStopAuto.node.active &&
                      this.isFinishBackToReal()
                        ? (this.node.emit("SPACE_PRESSED"),
                          this.hideAutoSpinPanel(0),
                          this.onMouseLeave())
                        : this.btnFastStop &&
                          this.btnFastStop.node.active &&
                          this.btnFastStop.getComponent(m).interactable &&
                          this.node.emit("FAST_TO_RESULT_BY_SPACE"));
                  }),
                  (s.isFinishBackToReal = function () {
                    return this.mainDirector.guiMgr.trialButton
                      .getChildByName("PlayTrialBtn")
                      .getComponent(m).interactable;
                  }),
                  i
                );
              })(S)).prototype,
              "drumStick",
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
            (T = i(v.prototype, "promotionSpinTimes", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = i(v.prototype, "promotionIcon", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = v))
          ) || B)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotJackpotHistory9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotJackpotHistory.ts"],
  function (t) {
    "use strict";
    var e, o, i, a;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy), (i = t._decorator);
        },
        function (t) {
          a = t.SlotJackpotHistory;
        },
      ],
      execute: function () {
        var s;
        o._RF.push(
          {},
          "3d2706+/3dIEI1XBRepff7k",
          "SlotJackpotHistory9930",
          void 0
        );
        var n = i.ccclass;
        i.property,
          t(
            "SlotJackpotHistory9930",
            n("SlotJackpotHistory9930")(
              (s = (function (t) {
                function o() {
                  return t.apply(this, arguments) || this;
                }
                e(o, t);
                var i = o.prototype;
                return (
                  (i.onLoad = function () {
                    t.prototype.onLoad.call(this), (this.page.active = !1);
                  }),
                  (i.requestErr = function () {
                    this.stopLoading(),
                      this.errorMessage &&
                        ((this.page.active = !1),
                        (this.errorMessage.active = !0),
                        this.table.emit("CLEAR_DATA"));
                  }),
                  (i.onRequestResponse = function (e) {
                    t.prototype.onRequestResponse.call(this, e),
                      e.error ||
                      Object.keys(e).length <= 0 ||
                      !e.data ||
                      e.data.length <= 0
                        ? ((this.noJackpotText.active = !0),
                          (this.page.active = !1))
                        : (this.pagination &&
                            ((this.pagination.active = !0),
                            this.pagination.emit(
                              "UPDATE_PAGE",
                              this.currentPage,
                              this.totalPage
                            )),
                          (this.page.active = !0),
                          (this.noJackpotText.active = !1)),
                      e.total > 0 &&
                        this.pagination &&
                        this.pagination.emit(
                          "UPDATE_PAGE",
                          this.currentPage,
                          this.totalPage
                        );
                  }),
                  o
                );
              })(a))
            ) || s
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotReel9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./SlotReelv2.ts",
  ],
  function (t) {
    "use strict";
    var i, e, s, o, n, h, r, l, a, S, m, b, d, u, p, y, c;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (s = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (n = t.cclegacy),
            (h = t._decorator),
            (r = t.Prefab),
            (l = t.Node),
            (a = t.instantiate),
            (S = t.Vec3),
            (m = t.tween),
            (b = t.error);
        },
        function (t) {
          (d = t.setOpacity),
            (u = t.randRange),
            (p = t.fadeIn),
            (y = t.changeParent);
        },
        function (t) {
          c = t.SlotReelv2;
        },
      ],
      execute: function () {
        var f, _, E, L, B, N, g;
        n._RF.push({}, "0ff8bUK6dhHp44SecWKbhc0", "SlotReel9930", void 0);
        var R = h.ccclass,
          I = h.property;
        t(
          "SlotReel9930",
          ((f = R("SlotReel9930")),
          (_ = I({ type: r })),
          (E = I({ type: l })),
          f(
            ((N = i(
              (B = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, n = new Array(e), h = 0;
                    h < e;
                    h++
                  )
                    n[h] = arguments[h];
                  return (
                    (i = t.call.apply(t, [this].concat(n)) || this),
                    s(i, "bannerPrefab", N, o(i)),
                    s(i, "subSymbolHolder", g, o(i)),
                    (i.isSureWin = !1),
                    (i.topSymbol = null),
                    (i.botSymbol = null),
                    (i.showSymbolsHolder = null),
                    (i.stackFormat = {}),
                    (i.remainStep = Number.MAX_SAFE_INTEGER),
                    (i.banner = null),
                    (i.fakeBanner = null),
                    (i.fakeWildStep = null),
                    (i.bannerFormat = 0),
                    (i.subSymbol = null),
                    (i.isNearWinLastReel = !1),
                    (i.isWinJackpot = !1),
                    (i.gameNode = null),
                    (i.isWinFree = !1),
                    i
                  );
                }
                e(i, t);
                var n = i.prototype;
                return (
                  (n.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("UPDATE_MATRIX", this.updateMatrix, this),
                      this.node.on("SETUP_BANNER", this.setupBanner, this),
                      this.node.on(
                        "PLAY_ANIM_OPEN_BANNER",
                        this.playAnimOpenBanner,
                        this
                      ),
                      this.node.on("SKIP_ANIM", this.skipAnims, this),
                      this.node.on(
                        "REMOVE_SUB_SYMBOL",
                        this.removeSubSymbols,
                        this
                      ),
                      this.node.on(
                        "PLAY_ANIM_SUB_SYMBOL",
                        this.playAnimSubSymbols,
                        this
                      ),
                      this.node.on(
                        "SET_SYMBOL_HOLDER",
                        this.setSymbolHolder,
                        this
                      ),
                      this.node.on("SET_GAME_NODE", this.setGameNode, this);
                  }),
                  (n.setSymbolHolder = function (t) {
                    this.showSymbolsHolder = t;
                  }),
                  (n.setGameNode = function (t) {
                    this.gameNode = t;
                  }),
                  (n.init = function (t, i, e, s, o) {
                    void 0 === t && (t = []),
                      void 0 === i && (i = {}),
                      void 0 === e && (e = 0),
                      void 0 === s && (s = null),
                      void 0 === o && (o = !1),
                      (this.config = i);
                    var n = i,
                      h = n.NORMAL_SYMBOLS,
                      r = n.FREE_SYMBOLS,
                      l = n.TABLE_BUFFER,
                      S = n.SYMBOL_HEIGHT,
                      m = n.SYMBOL_HEIGHT_FREE_GAME,
                      b = n.EXCEPTION_SYMBOLS;
                    (this.symbolHeight = o && m ? m : S),
                      (this.reelIndex = e),
                      (this.symbolList = o ? r[e] : h[e]),
                      (this.isFreeMode = o),
                      (this.showNumber = t[e]),
                      (this.totalSymbols = this.showNumber + l.TOP + l.BOT),
                      (this.symbolStartY =
                        -(this.showNumber / 2 + l.BOT - 0.5) *
                        this.symbolHeight),
                      (this.showSymbols = []);
                    for (var d = 0; d < this.totalSymbols; d++) {
                      var u = a(s);
                      u.setPosition(
                        0,
                        this.symbolStartY + d * this.symbolHeight
                      ),
                        this.node.addChild(u),
                        u.emit(
                          "CHANGE_TO_SYMBOL",
                          this.getRandomSymbolNameWithExceptions(
                            b || ["A", "R", "K"]
                          )
                        ),
                        this.symbols.push(u),
                        this.symbolPos.push(u.position.y),
                        d >= l.BOT &&
                          d < this.totalSymbols - l.TOP &&
                          this.showSymbols.unshift(u);
                    }
                    this.reset(),
                      this._createBanner(),
                      this.subSymbolHolder.setSiblingIndex(11);
                  }),
                  (n.updateMatrix = function (t, i, e) {
                    var s = this;
                    void 0 === e && (e = null),
                      this.showSymbols.forEach(function (o, n) {
                        o.emit("CHANGE_TO_SYMBOL", t[n], s.reelIndex, i),
                          "K" == o.symbol && e && s.isFreeMode && d(o, 0);
                      }),
                      this.changeLayerSymbols("K"),
                      t.includes("K") &&
                        this.gameNode.emit(
                          "HIGHLIGHT_REEL_IDLE",
                          this.reelIndex,
                          !0
                        );
                  }),
                  (n.startSpinning = function (i, e, s) {
                    var o = this;
                    void 0 === e && (e = {}),
                      void 0 === s && (s = !1),
                      this.reelIndex % 4 != 0 &&
                        this.gameNode.emit(
                          "RESET_HIGHLIGHT_REEL",
                          this.reelIndex
                        ),
                      (this.fakeWildStep = null),
                      (this.isWinJackpot = !1),
                      (this.reelConfig = e),
                      (this.reelIndex = i),
                      (this.stackFormat = {}),
                      (this.bannerFormat = 9),
                      this.resetHighLayerSymbols(),
                      (this.isSureWin = !1);
                    var n = this.isFreeMode || s;
                    this.symbols.forEach(function (t) {
                      t.setScale(S.ONE),
                        d(t, 255),
                        t.emit(
                          "CHANGE_TO_BLUR_SYMBOL",
                          t.symbol,
                          o.reelIndex,
                          n
                        );
                    }),
                      (this.isWinFree = s),
                      (this.isNearWinLastReel = !1),
                      (this.remainStep = Number.MAX_SAFE_INTEGER),
                      t.prototype.startSpinning.call(this, i, e);
                  }),
                  (n.setupBanner = function (t, i) {
                    (this.bannerFormat = t), (this.stackFormat = i);
                  }),
                  (n.stopSpinningWithDelay = function (t, i, e) {
                    (this.showSymbols = []),
                      (this.callbackStop = i),
                      (this.result = [].concat(t));
                    var s = e.isShowingBigWild,
                      o = e.isSureWin,
                      n = e.subSymbols,
                      h = e.jackpot;
                    if (this._canShowFakeWild()) {
                      var r = this.stackFormat.step,
                        l = r ? r + 1 : 7;
                      this.fakeWildStep = u(l, 11);
                    }
                    (this.subSymbol = n),
                      (this.isSureWin = o),
                      (this.isWinJackpot = !!h),
                      (this.isNearWin = !1);
                    var a = this.isSureWin
                      ? 0
                      : this.reelIndex * this.reelConfig.DELAY_STOP;
                    o
                      ? (a = this.reelConfig.DELAY_SURE_WIN)
                      : s && (a += this.reelConfig.DELAY_BIG_WILD),
                      (this.isNearWin = !1),
                      this.unschedule(this.setStepToStop),
                      this.scheduleOnce(
                        this.setStepToStop,
                        a + this.extendTime
                      ),
                      this.result.unshift(
                        this.getRandomSymbolNameWithExceptions("K")
                      ),
                      this.result.push(
                        this.getRandomSymbolNameWithExceptions("K")
                      );
                  }),
                  (n.extendTimeToStop = function (t, i) {
                    this.isNearWinLastReel = i;
                    var e = this.config.NORMAL_TABLE_FORMAT;
                    (this.extendTime = 0),
                      (this.extendTime = i
                        ? this.reelConfig.IS_TURBO
                          ? 4.7
                          : 8.5
                        : t
                        ? (this.reelConfig.DELAY_STOP +
                            this.reelConfig.NEAR_WIN_DELAY) *
                          this.reelIndex
                        : (this.reelConfig.DELAY_STOP +
                            this.reelConfig.NEAR_WIN_DELAY) *
                            (this.reelIndex - 1) +
                          this.reelConfig.DELAY_STOP),
                      t &&
                        this.reelIndex === e.length - 1 &&
                        (this.extendTime =
                          this.extendTime +
                          this.reelConfig.NEAR_WIN_DELAY_TIME_LAST_REEL),
                      this.unschedule(this.setStepToStop),
                      this.scheduleOnce(this.setStepToStop, this.extendTime);
                  }),
                  (n.fastStopSpinning = function (t) {
                    var i = this;
                    if (
                      !this.isFastToResult &&
                      ((this.isFastToResult = !0), !this.isSureWin)
                    ) {
                      if (
                        (this.unschedule(this.setStepToStop),
                        this.isNearWinLastReel)
                      )
                        this.scheduleOnce(function () {
                          i.isShowingResult ||
                            (t < i.totalSymbols
                              ? (i.step = i.totalSymbols)
                              : i.step > t && (i.step = t),
                            (i.remainStep = i.step));
                        }, 5);
                      else {
                        if (
                          ((this.currentSpeed = this.currentSpeed / 3),
                          this.isShowingResult)
                        )
                          return;
                        t < this.totalSymbols
                          ? (this.step = this.totalSymbols)
                          : this.step > t && (this.step = t),
                          (this.remainStep = this.step);
                      }
                      !this.isWinJackpot &&
                        this.banner.active &&
                        this.playAnimOpenBanner();
                    }
                  }),
                  (n.playAnimOpenBanner = function () {
                    if (
                      9 !== this.bannerFormat &&
                      this.banner.active &&
                      !this.banner.isOpened
                    ) {
                      (this.banner.isOpened = !0),
                        this.banner.emit(
                          "PLAY_ANIM_OPEN",
                          this.stackFormat,
                          this.isFastToResult
                        );
                      var t = this.isFastToResult ? 1.5 : 1,
                        i = this.isFastToResult
                          ? (0.8 * this.config.DELAY_OPEN_BANNER) / t
                          : this.config.DELAY_OPEN_BANNER;
                      this.symbols.forEach(function (t) {
                        t.tweenFadeIn &&
                          (t.tweenFadeIn.stop(), (t.tweenFadeIn = null)),
                          (t.tweenFadeIn = m(t)
                            .delay(i - 0.2)
                            .call(function () {
                              p(t, 0.2);
                            })
                            .start());
                      });
                    }
                  }),
                  (n.skipAnims = function () {
                    d(this.node, 255),
                      this.hideBanner(),
                      this.resetHighLayerSymbols(),
                      this.symbols.forEach(function (t) {
                        d(t, 255);
                      }),
                      this.reelIndex % 4 != 0 &&
                        this.gameNode.emit("RESET", this.reelIndex, !1);
                  }),
                  (n.hideBanner = function () {
                    this.banner.emit("RESET_BANNER"),
                      this.fakeBanner.emit("RESET_BANNER");
                  }),
                  (n._canShowFakeWild = function () {
                    return !this.isFreeMode && this.reelIndex % 4 != 0;
                  }),
                  (n.getRandomSymbolName = function () {
                    return this.step === this.fakeWildStep
                      ? "K"
                      : t.prototype.getRandomSymbolName.call(this);
                  }),
                  (n._createBanner = function () {
                    (this.banner = a(this.bannerPrefab)),
                      (this.banner.active = !0),
                      this.banner.setSiblingIndex(10),
                      this.node.addChild(this.banner),
                      (this.fakeBanner = a(this.bannerPrefab)),
                      (this.fakeBanner.active = !0),
                      this.fakeBanner.setSiblingIndex(9),
                      this.node.addChild(this.fakeBanner);
                  }),
                  (n._addBanner = function () {
                    var t = this.stackFormat,
                      i = t.size;
                    if (9 !== t.format) {
                      var e = 9 === this.bannerFormat;
                      if (!e || !this.fakeBanner.active) {
                        var s = e ? this.fakeBanner : this.banner;
                        (s.active = !0),
                          d(s, 255),
                          s.setPosition(
                            new S(s.position.x, 1.5 * this.config.SYMBOL_HEIGHT)
                          ),
                          s.emit("CHANGE_SIZE", i),
                          s.emit("PLAY_ANIM_IDLE", e),
                          !this.isWinJackpot &&
                            this.isFastToResult &&
                            this.playAnimOpenBanner();
                      }
                    }
                  }),
                  (n.circulateSymbols = function () {
                    var t = this.symbols[this.currentIndex % this.totalSymbols],
                      i = this.getRandomSymbolName(),
                      e = !1;
                    if (
                      (this.subSymbolHolder.setSiblingIndex(
                        this.node.children.length
                      ),
                      this.isShowingResult)
                    ) {
                      if (this.stop < this.totalSymbols) {
                        var s = this._isRealSymbol();
                        if (
                          ((i = this.result[this.stop]),
                          (this.step =
                            this.totalSymbols +
                            this.showNumber -
                            (this.stop + this.config.TABLE_BUFFER.BOT)),
                          s)
                        ) {
                          t.emit(
                            "CHANGE_TO_SYMBOL",
                            i,
                            this.reelIndex,
                            this.isFreeMode || this.isWinFree
                          ),
                            this.showSymbols.unshift(t);
                          var o = 3 - this.stop,
                            n =
                              !this.isFastToResult && this._isUnderBanner(o)
                                ? 0
                                : 255;
                          d(t, n);
                        } else
                          t.emit(
                            "CHANGE_TO_BLUR_SYMBOL",
                            i,
                            this.reelIndex,
                            this.isFreeMode
                          );
                        var h =
                          this.showNumber -
                          this.stop +
                          this.showNumber * this.reelIndex;
                        this.subSymbol && s && this.subSymbol.indexOf(h) >= 0
                          ? (this.subSymbolHolder.setPosition(
                              this.subSymbolHolder.position.x,
                              t.position.y
                            ),
                            this.isNearWinLastReel ||
                              t.emit("ADD_SUB_SYMBOL", this.subSymbolHolder),
                            (e = !0))
                          : t.emit("REMOVE_SUB_SYMBOL"),
                          (this.remainStep = 4 - this.stop),
                          this.isFreeMode && s && "K" == i && d(t, 0),
                          this.stop++;
                      }
                    } else
                      t.emit(
                        "CHANGE_TO_BLUR_SYMBOL",
                        i,
                        this.reelIndex,
                        this.isFreeMode
                      ),
                        t.emit("REMOVE_SUB_SYMBOL"),
                        (this.remainStep = this.step);
                    var r = t.position.y;
                    (r += this.symbolHeight * this.totalSymbols),
                      t.setPosition(new S(t.position.x, r, 0)),
                      this.currentIndex++,
                      e &&
                        this.subSymbolHolder.setPosition(
                          this.subSymbolHolder.position.x,
                          t.position.y
                        ),
                      this._cleanUp(),
                      this.remainStep === this.stackFormat.step &&
                        this._addBanner(),
                      this.isFreeMode ||
                        ("K" === this.symbols[0].symbol &&
                          this.gameNode.emit(
                            "HIGHLIGHT_REEL",
                            this.reelIndex,
                            !1
                          ),
                        "K" === t.symbol &&
                          this.gameNode.emit(
                            "HIGHLIGHT_REEL",
                            this.reelIndex,
                            !0
                          ));
                  }),
                  (n._cleanUp = function () {
                    var t = this;
                    this.node.children.forEach(function (i) {
                      var e = i.position.y + t.node.position.y;
                      i.setPosition(new S(i.position.x, e));
                    }),
                      this.node.setPosition(this.node.position.x, 0),
                      this._cleanBanner();
                  }),
                  (n.setStepToStop = function () {
                    t.prototype.setStepToStop.call(this),
                      (this.remainStep = this.step);
                  }),
                  (n.runStopAnimation = function (t, i) {
                    var e = this,
                      s = i || this.reelConfig.TIME;
                    this.onReelStop(),
                      this.isFreeMode ||
                        (this.changeLayerSymbols("K"),
                        this.moveHighLayerSymbols(s, t)),
                      m(this.node)
                        .by(s, { position: new S(0, -t) })
                        .by(s, { position: new S(0, t) })
                        .call(function () {
                          e.reset(),
                            e.callbackStop(),
                            e.unschedule(e.setStepToStop),
                            (e.currentSpeed = e.reelConfig.TIME);
                        })
                        .start();
                  }),
                  (n._cleanBanner = function () {
                    this.banner.active &&
                      this.banner.getPosition().y <
                        10 -
                          (1.5 + this.banner.size) *
                            this.config.SYMBOL_HEIGHT &&
                      this.banner.emit("RESET_BANNER"),
                      this.fakeBanner.active &&
                        this.fakeBanner.getPosition().y <
                          10 -
                            (1.5 + this.fakeBanner.size) *
                              this.config.SYMBOL_HEIGHT &&
                        this.fakeBanner.emit("RESET_BANNER");
                  }),
                  (n.onReelStop = function () {
                    var t = this;
                    if (
                      (this.symbols.forEach(function (i) {
                        i.emit("CHANGE_TO_SYMBOL", i.symbol, t.reelIndex),
                          i.emit("PLAY_SUB_SYMBOL_APPEAR");
                      }),
                      this.fakeBanner.active &&
                        this.fakeBanner.getPosition().y > 0 &&
                        d(this.fakeBanner, 0),
                      9 !== this.bannerFormat &&
                        this.gameNode.emit("PLAY_SOUND_SIZZLE"),
                      !this.isFreeMode)
                    ) {
                      var i = this.result.indexOf("K");
                      i > 0 && i < 5
                        ? this.gameNode.emit(
                            "HIGHLIGHT_REEL_IDLE",
                            this.reelIndex
                          )
                        : this.gameNode.emit(
                            "RESET_HIGHLIGHT_REEL",
                            this.reelIndex
                          );
                    }
                  }),
                  (n._isUnderBanner = function (t) {
                    var i = this.bannerFormat;
                    return (
                      9 !== i &&
                      (console.warn(i),
                      0 === i || (i > 0 && t >= i) || (i < 0 && t <= 2 + i))
                    );
                  }),
                  (n.changeLayerSymbols = function (t) {
                    void 0 === t && (t = "K");
                    var i = this.showSymbols[0],
                      e = this.showSymbols[2];
                    this._canChangeLayer(i, t) &&
                      ((this.topSymbol = i),
                      y(this.topSymbol, this.showSymbolsHolder)),
                      this._canChangeLayer(e, t) &&
                        ((this.botSymbol = e),
                        y(this.botSymbol, this.showSymbolsHolder));
                  }),
                  (n._canChangeLayer = function (t, i) {
                    return t
                      ? t.symbol === i && t.parent === this.node
                      : (b("Invalid symbol ", t), !1);
                  }),
                  (n.moveHighLayerSymbols = function (t, i) {
                    this.topSymbol &&
                      (this.topSymbol.tweenMove = m(this.topSymbol)
                        .by(t, { position: new S(0, -i) })
                        .by(t, { position: new S(0, i) })
                        .start()),
                      this.botSymbol &&
                        (this.botSymbol.tweenMove = m(this.botSymbol)
                          .by(t, { position: new S(0, -i) })
                          .by(t, { position: new S(0, i) })
                          .start());
                  }),
                  (n.resetHighLayerSymbols = function () {
                    if (this.topSymbol && this.topSymbol.parent !== this.node) {
                      var t = this.topSymbol.getWorldPosition();
                      y(this.topSymbol, this.node),
                        this.topSymbol.setWorldPosition(t),
                        (this.topSymbol = null);
                    }
                    if (this.botSymbol && this.botSymbol.parent !== this.node) {
                      var i = this.botSymbol.getWorldPosition();
                      y(this.botSymbol, this.node),
                        this.botSymbol.setWorldPosition(i),
                        (this.botSymbol = null);
                    }
                  }),
                  (n.removeSubSymbols = function () {
                    this.symbols.forEach(function (t) {
                      t.emit("REMOVE_SUB_SYMBOL");
                    });
                  }),
                  (n.playAnimSubSymbols = function (t, i) {
                    this.symbols.forEach(function (e) {
                      e.emit("PLAY_ANIM_SUB_SYMBOL", t, i);
                    });
                  }),
                  (n.onDestroy = function () {
                    this.topSymbol &&
                      this.topSymbol.tweenMove &&
                      (this.topSymbol.tweenMove.stop(),
                      (this.topSymbol = null)),
                      this.botSymbol &&
                        this.botSymbol.tweenMove &&
                        (this.botSymbol.tweenMove.stop(),
                        (this.botSymbol = null));
                  }),
                  i
                );
              })(c)).prototype,
              "bannerPrefab",
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
            (g = i(B.prototype, "subSymbolHolder", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = B))
          ) || L)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotSoundPlayer9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SlotSoundPlayer.ts"],
  function (e) {
    "use strict";
    var t, r, n, o;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          (r = e.cclegacy), (n = e._decorator);
        },
        function (e) {
          o = e.SlotSoundPlayer;
        },
      ],
      execute: function () {
        var l;
        r._RF.push(
          {},
          "7beae3DfQ9LD7G7s02ZnYlP",
          "SlotSoundPlayer9930",
          void 0
        );
        var s = n.ccclass;
        n.property,
          e(
            "SlotSoundPlayer9930",
            s("SlotSoundPlayer9930")(
              (l = (function (e) {
                function r() {
                  for (
                    var t, r = arguments.length, n = new Array(r), o = 0;
                    o < r;
                    o++
                  )
                    n[o] = arguments[o];
                  return (
                    ((t =
                      e.call.apply(e, [this].concat(n)) ||
                      this).sfxCacheGesture = []),
                    t
                  );
                }
                t(r, e);
                var n = r.prototype;
                return (
                  (n.stopAllClipSound = function (e) {
                    if (this.isWebSound) {
                      var t = this._getAllIndexes(
                        this._soundPlayer.sfxCacheGesture,
                        e
                      );
                      if (t.length > 0)
                        for (var r = t.length - 1; r >= 0; r--) {
                          var n = t[r];
                          this._soundPlayer.sfxCacheGesture.splice(n, 1);
                        }
                    }
                  }),
                  (n._getAllIndexes = function (e, t) {
                    var r,
                      n = [];
                    for (r = 0; r < e.length; r++) e[r].name === t && n.push(r);
                    return n;
                  }),
                  r
                );
              })(o))
            ) || l
          );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotSymbol9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./SlotSymbol.ts",
  ],
  function (t) {
    "use strict";
    var i, s, o, e, n, b, l, h, S, m, a, y, u, r, c;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (s = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (n = t.cclegacy),
            (b = t._decorator),
            (l = t.Node),
            (h = t.sp),
            (S = t.Vec3),
            (m = t.tween),
            (a = t.Sprite),
            (y = t.Color);
        },
        function (t) {
          (u = t.setOpacity), (r = t.changeParent);
        },
        function (t) {
          c = t.SlotSymbol;
        },
      ],
      execute: function () {
        var p, d, v, _, g;
        n._RF.push({}, "b61adRMdeJCmqFEd/+IY0kC", "SlotSymbol9930", void 0);
        var f = b.ccclass,
          A = b.property;
        t(
          "SlotSymbol9930",
          ((p = f("SlotSymbol9930")),
          (d = A({ type: l })),
          p(
            ((g = i(
              (_ = (function (t) {
                function i() {
                  for (
                    var i, s = arguments.length, n = new Array(s), b = 0;
                    b < s;
                    b++
                  )
                    n[b] = arguments[b];
                  return (
                    (i = t.call.apply(t, [this].concat(n)) || this),
                    o(i, "subSymbol", g, e(i)),
                    (i._havingSubSymbol = !1),
                    (i.animName = ""),
                    (i._spineSubSymbol = null),
                    i
                  );
                }
                s(i, t);
                var n = i.prototype;
                return (
                  (n.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("ADD_SUB_SYMBOL", this.addSubSymbol, this),
                      this.node.on(
                        "REMOVE_SUB_SYMBOL",
                        this.removeSubSymbol,
                        this
                      ),
                      this.node.on("SHOW_SUB_SYMBOL", this.showSubSymbol, this),
                      this.node.on("HIDE_SUB_SYMBOL", this.hideSubSymbol, this),
                      this.node.on("PLAY_ANIMATION", this.playAnimation, this),
                      this.node.on(
                        "PLAY_ANIM_SUB_SYMBOL",
                        this.playAnimSubSymbol,
                        this
                      ),
                      this.node.on(
                        "PLAY_SUB_SYMBOL_APPEAR",
                        this.playSubSymbolAppear,
                        this
                      ),
                      this.node.on(
                        "CHANGE_PARENT_SUB_SYMBOL",
                        this.changeParentSubSymbol,
                        this
                      ),
                      (this._havingSubSymbol = !1),
                      this.subSymbol &&
                        ((this.subSymbol.active = !1),
                        (this._spineSubSymbol = this.subSymbol.getComponent(
                          h.Skeleton
                        )));
                  }),
                  (n.playAnimation = function () {
                    this._isAnimated ||
                      (this.staticSymbol.setScale(new S(1, 1, 1)),
                      (this.zoomTween = m(this.staticSymbol)
                        .to(0.2, { scale: new S(1.05, 1.05, 1) })
                        .to(0.2, { scale: new S(0.95, 0.95, 1) })
                        .to(0.2, { scale: new S(1, 1, 1) })
                        .repeat(2)),
                      this.zoomTween.start());
                  }),
                  (n.changeToRealSymbol = function (t, i, s) {
                    void 0 === t && (t = "2");
                    var o = t;
                    (this.node.setSiblingIndex(0), "K" == t && i) &&
                      ((o += i + (s ? "_Free" : "")),
                      this.node.setSiblingIndex(1));
                    this.assets[o]
                      ? ((this.node.symbol = t),
                        u(this.staticSymbol, 255),
                        this.symbolSpriteFrame &&
                          (this.symbolSpriteFrame.spriteFrame = this.assets[o]))
                      : this.symbolSpriteFrame &&
                        (this.symbolSpriteFrame.spriteFrame = null);
                  }),
                  (n.changeToBlurSymbol = function (t, i, s) {
                    void 0 === t && (t = "2");
                    var o = this.blurNamePrefix + t;
                    "K" == t && i && (o += i + (s ? "_Free" : ""));
                    var e = this.blurAssets[o];
                    e
                      ? ((this.node.symbol = t),
                        u(this.staticSymbol, 255),
                        u(this.node, 255),
                        this.symbolSpriteFrame &&
                          (this.symbolSpriteFrame.spriteFrame = e))
                      : this.changeToRealSymbol(t, i, s),
                      this.subSymbol && (this.subSymbol.active = !1);
                  }),
                  (n.addSubSymbol = function (t) {
                    void 0 === t && (t = null),
                      this.subSymbol && (this._havingSubSymbol = !0),
                      !this.subSymbol.active &&
                        this.subSymbol &&
                        this._havingSubSymbol &&
                        ((this.subSymbol.active = !0),
                        this._spineSubSymbol.setAnimation(0, "Idle", !1),
                        (this.animName = "Idle"),
                        t && r(this.subSymbol, t));
                  }),
                  (n.changeParentSubSymbol = function () {
                    this.subSymbol.active &&
                      this.subSymbol &&
                      this._havingSubSymbol &&
                      r(this.subSymbol, this.node);
                  }),
                  (n.playSubSymbolAppear = function () {
                    this.subSymbol.active &&
                      this.subSymbol &&
                      this._havingSubSymbol &&
                      (this._spineSubSymbol.setAnimation(0, "Appear", !1),
                      this._spineSubSymbol.addAnimation(0, "Idle", !0),
                      (this.animName = "Idle"));
                  }),
                  (n.playAnimSubSymbol = function (t, i) {
                    this.animName != t &&
                      this.subSymbol.active &&
                      this.subSymbol &&
                      this._havingSubSymbol &&
                      (this._spineSubSymbol.setAnimation(0, t, i),
                      (this.animName = t));
                  }),
                  (n.showSubSymbol = function () {}),
                  (n.hideSubSymbol = function () {
                    this.subSymbol && (this.subSymbol.active = !1);
                  }),
                  (n.removeSubSymbol = function () {
                    this.subSymbol &&
                      ((this.subSymbol.active = !1),
                      (this._havingSubSymbol = !1),
                      r(this.subSymbol, this.node));
                  }),
                  (n.blinkHighlight = function () {
                    u(this.node, 255),
                      (this.staticSymbol.active = !0),
                      this.setDimSprite(this.staticSymbol, !1),
                      this.setDimSpine(this.subSymbol, !1);
                  }),
                  (n.enableHighlight = function (t) {
                    (this.node.active = !0),
                      this.setDimSprite(this.staticSymbol, !1),
                      this.setDimSpine(this.subSymbol, !1);
                  }),
                  (n.disableHighlight = function () {
                    this.setDimSprite(this.staticSymbol, !0),
                      this.setDimSpine(this.subSymbol, !0);
                  }),
                  (n.reset = function () {
                    (this.node.active = !0),
                      (this.staticSymbol.active = !0),
                      u(this.node, 255),
                      u(this.staticSymbol, 255),
                      this.setDimSprite(this.staticSymbol),
                      this.setDimSpine(this.subSymbol),
                      (this.staticSymbol.scale = new S(1, 1, 1)),
                      this._havingSubSymbol &&
                        ((this.subSymbol.active = !0),
                        r(this.subSymbol, this.node),
                        (this._havingSubSymbol = !1)),
                      "K" == this.node.symbol
                        ? this.node.setSiblingIndex(1)
                        : this.node.setSiblingIndex(0);
                  }),
                  (n.setDimSprite = function (t, i) {
                    (void 0 === i && (i = !1), t) &&
                      (t.getComponent(a).color = i ? this.dimColor : y.WHITE);
                  }),
                  (n.setDimSpine = function (t, i) {
                    (void 0 === i && (i = !1), t) &&
                      (t.getComponent(h.Skeleton).color = i
                        ? this.dimColor
                        : y.WHITE);
                  }),
                  (n.hideSymbol = function () {
                    u(this.node, 0), (this.node.active = !1);
                  }),
                  i
                );
              })(c)).prototype,
              "subSymbol",
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
            (v = _))
          ) || v)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotSymbolHistory9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./SlotSymbol.ts",
  ],
  function (t) {
    "use strict";
    var o, i, e, r, s, n, l, c, a;
    return {
      setters: [
        function (t) {
          (o = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy), (n = t._decorator), (l = t.Node);
        },
        function (t) {
          c = t.setOpacity;
        },
        function (t) {
          a = t.SlotSymbol;
        },
      ],
      execute: function () {
        var u, y, h, S, b, m, p;
        s._RF.push(
          {},
          "e6cdcjJ+JlCtII+8gT3jjJq",
          "SlotSymbolHistory9930",
          void 0
        );
        var f = n.ccclass,
          d = n.property;
        t(
          "SlotSymbolHistory9930",
          ((u = f("SlotSymbolHistory9930")),
          (y = d(l)),
          (h = d(l)),
          u(
            ((m = o(
              (b = (function (t) {
                function o() {
                  for (
                    var o, i = arguments.length, s = new Array(i), n = 0;
                    n < i;
                    n++
                  )
                    s[n] = arguments[n];
                  return (
                    (o = t.call.apply(t, [this].concat(s)) || this),
                    e(o, "subSymbol", m, r(o)),
                    e(o, "iconCracker", p, r(o)),
                    o
                  );
                }
                i(o, t);
                var s = o.prototype;
                return (
                  (s.onLoad = function () {
                    this.node.on("SHOW_SUB_SYMBOL", this.showSubSymbol, this),
                      this.node.on(
                        "SHOW_ICON_CRACKER",
                        this.showIconCracker,
                        this
                      ),
                      this.node.on(
                        "CHANGE_TO_SYMBOL_HISTORY",
                        this.changeToSymbolHistory,
                        this
                      ),
                      t.prototype.onLoad.call(this);
                  }),
                  (s.changeToSymbolHistory = function (t, o, i) {
                    void 0 === t && (t = "2"), (this.node.symbol = t);
                    var e = t;
                    "K" === t && o && (e = t + o + (i ? "_Free" : ""));
                    var r = this.assets[e];
                    r
                      ? (c(this.node, 255),
                        c(this.staticSymbol, 255),
                        this.symbolSpriteFrame &&
                          (this.symbolSpriteFrame.spriteFrame = r))
                      : (this.symbolSpriteFrame &&
                          (this.symbolSpriteFrame.spriteFrame = null),
                        c(this.staticSymbol, 0));
                  }),
                  (s.showSubSymbol = function (t) {
                    this.subSymbol.active = t;
                  }),
                  (s.showIconCracker = function (t) {
                    this.iconCracker.active = t;
                  }),
                  (s.reset = function () {
                    (this.subSymbol.active = !1),
                      (this.iconCracker.active = !1),
                      t.prototype.reset.call(this);
                  }),
                  o
                );
              })(a)).prototype,
              "subSymbol",
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
            (p = o(b.prototype, "iconCracker", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = b))
          ) || S)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotSymbolPayline9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./SlotSymbolPayline.ts",
  ],
  function (i) {
    "use strict";
    var t, n, o, e, s, a, l;
    return {
      setters: [
        function (i) {
          t = i.inheritsLoose;
        },
        function (i) {
          (n = i.cclegacy), (o = i._decorator), (e = i.Vec3);
        },
        function (i) {
          (s = i.changeParent), (a = i.setOpacity);
        },
        function (i) {
          l = i.SlotSymbolPayline;
        },
      ],
      execute: function () {
        var h;
        n._RF.push(
          {},
          "c8f15eSInJMi7bJ4o2yvME4",
          "SlotSymbolPayline9930",
          void 0
        );
        var d = o.ccclass,
          r = (o.property, { 1: "phuc", 2: "loc", 3: "tho" });
        i(
          "SlotSymbolPayline9930",
          d("SlotSymbolPayline9930")(
            (h = (function (i) {
              function n() {
                for (
                  var t, n = arguments.length, o = new Array(n), e = 0;
                  e < n;
                  e++
                )
                  o[e] = arguments[e];
                return (
                  ((t = i.call.apply(i, [this].concat(o)) || this).isWinFree =
                    !1),
                  t
                );
              }
              t(n, i);
              var o = n.prototype;
              return (
                (o.onLoad = function () {
                  i.prototype.onLoad.call(this),
                    this.node.on("PLAY_ANIM_WILD", this.playAnimWild, this),
                    this.node.on(
                      "PLAY_ANIM_WILD_IDLE",
                      this.playAnimWildIdle,
                      this
                    ),
                    (this._isPlaying = !1),
                    (this.isWinFree = !1);
                }),
                (o.disableHighlight = function () {
                  this._isPlaying
                    ? (this._animation &&
                        (this._animation.color = this.dimColor),
                      this.spineNode &&
                        this._disableHighlightHolder &&
                        s(this.spineNode, this._disableHighlightHolder))
                    : (this.spineNode.active = !1);
                }),
                (o.enableHighlight = function () {
                  this._animation &&
                    (this._animation.color = this.defaultColor),
                    (this.spineNode.parent = this.node),
                    (this.spineNode.position = new e(0, 0, 0));
                }),
                (o.playAnimation = function (i) {
                  if ((void 0 === i && (i = 2), this._havingAnim)) {
                    if (
                      ((this.spineNode.active = !0),
                      !this._isPlaying &&
                        ((this._isPlaying = !0),
                        this._animation &&
                          (this._animation.setAnimation(0, "animation", !0),
                          (this._animation.timeScale = this.ANIM_DURATION / i)),
                        this._symbolName.includes("K")))
                    ) {
                      var t = r[this.node.col] ? r[this.node.col] : "default";
                      this._animation.setSkin(t),
                        this.isWinFree
                          ? this._animation.setAnimation(0, "Win_FreeG", !0)
                          : this._animation.setAnimation(0, "Win", !0);
                    }
                    this.node.isPlaying = !0;
                  }
                }),
                (o.playAnimWild = function () {
                  if (
                    ((this.spineNode.active = !0),
                    a(this.spineNode, 255),
                    this._symbolName.includes("K"))
                  ) {
                    var i = r[this.node.col] ? r[this.node.col] : "default";
                    this._animation.setSkin(i),
                      this._animation.setSlotsToSetupPose(),
                      this._animation.setAnimation(0, "Transform_FreeG", !1),
                      this._animation.addAnimation(0, "Idle_FreeG", !0),
                      (this.isWinFree = !0);
                  }
                }),
                (o.playAnimWildIdle = function (i) {
                  if ((void 0 === i && (i = !1), this._havingAnim)) {
                    var t = r[this.node.col] ? r[this.node.col] : "default",
                      n = i ? "_FreeG" : "";
                    this._animation.setSkin(t),
                      (this.spineNode.active = !0),
                      a(this.spineNode, 255),
                      i
                        ? this._animation.setAnimation(0, "Idle" + n, !1)
                        : this._animation.setAnimation(0, "Appear", !1),
                      this._animation.addAnimation(0, "Idle" + n, !0);
                  }
                }),
                (o.stopAnimation = function () {
                  (this.spineNode.active = !1), (this._isPlaying = !1);
                }),
                (o.reset = function () {
                  this._animation &&
                    ((this._animation.color = this.defaultColor),
                    (this._animation.skeletonData = null),
                    (this.spineNode.parent = this.node),
                    (this.spineNode.position = new e(0, 0, 0))),
                    a(this.node, 255),
                    (this.isWinFree = !1),
                    (this._isPlaying = !1);
                }),
                (o.needToPlayRealtime = function () {
                  return !0;
                }),
                n
              );
            })(l))
          ) || h
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTable9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./EventNames.ts",
    "./SlotTable.ts",
  ],
  function (t) {
    "use strict";
    var i, s, n, e, o, a, r, h, l;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (s = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy), (a = t._decorator), (r = t.Node);
        },
        function (t) {
          h = t.default;
        },
        function (t) {
          l = t.SlotTable;
        },
      ],
      execute: function () {
        var c, u, S, p, _, m, f;
        o._RF.push({}, "50724R+2x9Ly68Pt4s98bTg", "SlotTable9930", void 0);
        var d = a.ccclass,
          E = a.property,
          T = [
            { format: 9, size: 6, step: null },
            { format: 9, size: 6, step: null },
            { format: 9, size: 6, step: null },
            { format: 9, size: 6, step: null },
            { format: 9, size: 6, step: null },
          ];
        t(
          "SlotTable9930",
          ((c = d("SlotTable9930")),
          (u = E({ type: r })),
          (S = E({ type: r })),
          c(
            ((m = i(
              (_ = (function (t) {
                function i() {
                  for (
                    var i, s = arguments.length, o = new Array(s), a = 0;
                    a < s;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    n(i, "showSymbolsHolder", m, e(i)),
                    n(i, "introJackpot", f, e(i)),
                    (i.stackFormats = void 0),
                    (i.isShowingBigWild = !1),
                    (i.isSureWin = !1),
                    (i._subSymbols = null),
                    (i.jackpot = null),
                    i
                  );
                }
                s(i, t);
                var o = i.prototype;
                return (
                  (o.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on("SET_UP_BANNER", this.setupBanner, this),
                      this.node.on(
                        "OPEN_ALL_BANNERS",
                        this.openAllBanners,
                        this
                      ),
                      this.node.on("SET_UP_BIG_WILD", this.setUpBigWild, this),
                      this.node.on("SET_UP_SURE_WIN", this.setUpSureWin, this),
                      this.node.on(
                        "HIDE_INTRO_JACKPOT",
                        this.hideIntroJackpot,
                        this
                      ),
                      this.node.on("SKIP_ANIMS", this.skipAnims, this),
                      this.eventManager.on(
                        "PLAY_SOUND_SIZZLE",
                        this.playSoundSizzle,
                        this
                      );
                  }),
                  (o.playSoundSizzle = function () {
                    this.soundPlayer && this.soundPlayer.playSfx("SIZZLE", !0);
                  }),
                  (o.skipAnims = function () {
                    this.reels.forEach(function (t) {
                      return t.emit("SKIP_ANIM");
                    }),
                      this.soundPlayer &&
                        (this.soundPlayer.stopSfx("SIZZLE"),
                        this.soundPlayer.stopSfx("FIRE_CRACKER"));
                  }),
                  (o.init = function () {
                    var i = this;
                    t.prototype.init.call(this),
                      this.reels.forEach(function (t) {
                        t.emit("SET_SYMBOL_HOLDER", i.showSymbolsHolder),
                          t.emit("SET_GAME_NODE", i.eventManager);
                      }),
                      this.isFreeMode ||
                        this.changeDefaultMatrix(
                          this.dataStore.getDefaultMatrix()
                        );
                  }),
                  (o.changeDefaultMatrix = function (t) {
                    this.changeMatrix(t),
                      this.node.emit("SETUP_PAYLINES"),
                      this.node.emit("PLAY_IDLE_JOIN_GAME");
                  }),
                  (o.changeMatrix = function (t) {
                    var i = t.matrix,
                      s = this.dataStore.playSession.wildMultiply;
                    this.matrix = i;
                    for (var n = 0, e = 0; e < this.tableFormat.length; ++e)
                      for (var o = 0; o < i[e].length; o++)
                        i[e][o].includes("K") && n++;
                    (this.node.isWinFree = n >= 3),
                      this.reels.forEach(function (t, e) {
                        t.emit("UPDATE_MATRIX", i[e], n >= 3, s ? s[e] : null);
                      });
                  }),
                  (o.startSpinning = function () {
                    var t = this;
                    (this.stackFormats = null),
                      (this._isSpinning = !0),
                      (this.isTurbo =
                        (this.dataStore && this.dataStore.modeTurbo) || !1),
                      this.introJackpot &&
                        this.introJackpot.emit("CLEAR_SUB_SYMBOLS"),
                      (this.isShowingBigWild = !1),
                      (this.dataStore.spinningMode = this.isTurbo
                        ? "TURBO"
                        : "NORMAL"),
                      (this.isSureWin = !1),
                      (this.isFastToResult = !1);
                    var i =
                      this.config[
                        this.isTurbo ? "TABLE_TURBO" : "TABLE_NORMAL"
                      ];
                    this.reels.forEach(function (s, n) {
                      s.emit("START_SPIN", n, i, t.node.isWinFree);
                    }),
                      (this.node.isWinFree = !1),
                      this.node.emit("TABLE_START_SOUND"),
                      this.node.emit("RESET_NEAR_WIN"),
                      this.eventManager.emit(h.TABLE_START_SPIN);
                  }),
                  (o.setUpSureWin = function () {
                    var t = this;
                    (this.isSureWin = !0),
                      this.node.emit("PLAY_LIGHT_NEAR_WIN"),
                      this.node.emit("PLAY_SURE_WIN_EFFECT"),
                      this.reels.forEach(function (i) {
                        i.emit("ADJUST_REEL_SPEED", t.config.SUPER_TURBO);
                      });
                  }),
                  (o.setUpBigWild = function () {
                    this.isShowingBigWild = !0;
                  }),
                  (o.stopSpinning = function (t, i) {
                    void 0 === i && (i = null);
                    var s = t.matrix,
                      n = t.subSymbols,
                      e = t.jackpot;
                    (this._subSymbols = n ? n.slice() : null),
                      (this.jackpot = e),
                      (t.isShowingBigWild = this.isShowingBigWild),
                      (t.isSureWin = this.isSureWin),
                      (this.matrix = s),
                      (this._tableStopCB = i),
                      (this.stopSpinningCallbackCount = 0);
                    for (var o = 0; o < this.tableFormat.length; ++o) {
                      var a = [].concat(this.matrix[o]).reverse();
                      this.reels[o].emit(
                        "STOP_SPIN",
                        a,
                        this.checkStopSpinningCallback.bind(this, a),
                        t
                      );
                    }
                    this.node.emit("REEL_DELAY_NEAR_WIN", {
                      reels: this.reels,
                      matrix: s,
                      data: t,
                      context: this,
                    }),
                      this.node.emit("REEL_ABOUT_TO_STOP_SOUND", {
                        reels: this.reels,
                        matrix: s,
                        data: t,
                        context: this,
                      });
                  }),
                  (o.fastToResult = function () {
                    if (
                      this._isSpinning &&
                      this.stackFormats &&
                      !(
                        this.stopSpinningCallbackCount >= 5 ||
                        this.isFastToResult ||
                        this.node.isPlayingNearWinR5
                      )
                    ) {
                      var t = this.stackFormats.map(function (t) {
                          return t.step;
                        }),
                        i = Math.max.apply(null, t);
                      this.reels.forEach(function (t) {
                        t.emit("FAST_STOP", i);
                      }),
                        (this.isFastToResult = !0),
                        this.openAllBanners();
                    }
                  }),
                  (o.stopReelWithRandomMatrix = function (t) {
                    void 0 === t && (t = null);
                    for (var i = [], s = 0; s < this.tableFormat.length; ++s) {
                      i[s] = [];
                      for (var n = this.tableFormat[s] - 1; n >= 0; --n) {
                        var e = this.reels[s].getComponent("SlotReel9930");
                        i[s][n] = e
                          ? e.getRandomSymbolNameWithExceptions(["A", "R", "K"])
                          : "3";
                      }
                    }
                    (this.stackFormats = T),
                      this.stopSpinning({ matrix: i }, t);
                  }),
                  (o.setupBanner = function (t, i) {
                    if (((this.stackFormats = i), t && t.length > 0))
                      for (var s = 0; s < t.length; s++)
                        this.reels[s].emit("SETUP_BANNER", t[s], i[s]);
                  }),
                  (o.openAllBanners = function () {
                    this.soundPlayer && this.soundPlayer.stopSfx("SIZZLE"),
                      this.reels.forEach(function (t) {
                        return t.emit("PLAY_ANIM_OPEN_BANNER");
                      });
                  }),
                  (o.checkStopSpinningCallback = function (t, i) {
                    void 0 === t && (t = []), this.stopSpinningCallbackCount++;
                    var s = this.stopSpinningCallbackCount;
                    4 === s &&
                      this.jackpot &&
                      this.introJackpot &&
                      this.showIntroJackpot(),
                      s >= this.reels.length && this.onTableStopped(),
                      this.node.emit("REEL_STOP_NEARWIN", {
                        matrix: t,
                        count: s,
                        context: this,
                      }),
                      this.node.emit("REEL_STOP_SOUND", {
                        matrix: t,
                        count: s,
                        context: this,
                      });
                  }),
                  (o.showIntroJackpot = function () {
                    var t = this;
                    this.introJackpot &&
                      (this.dataStore.playSession.isSureWin ||
                        (this._subSymbols &&
                          (this._subSymbols.forEach(function (i) {
                            t.introJackpot.emit("ADD_SUB_SYMBOL", i);
                          }),
                          this.introJackpot.emit(
                            "SHOW_INTRO_JACKPOT",
                            this.jackpot[0],
                            this.hideSubSymbols.bind(this)
                          ))));
                  }),
                  (o.hideSubSymbols = function () {
                    for (
                      var t = this,
                        i = arguments.length,
                        s = new Array(i),
                        n = 0;
                      n < i;
                      n++
                    )
                      s[n] = arguments[n];
                    s.forEach(function (i) {
                      return t.reels[i].emit("REMOVE_SUB_SYMBOL");
                    });
                  }),
                  (o.hideIntroJackpot = function () {
                    this.introJackpot &&
                      this.introJackpot.emit("RESET_INTRO_JACKPOT");
                  }),
                  (o.gameExit = function () {
                    this.skipAnims();
                  }),
                  i
                );
              })(l)).prototype,
              "showSymbolsHolder",
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
            (f = i(_.prototype, "introJackpot", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (p = _))
          ) || p)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTableNearWinEffect9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./SlotTableNearWinEffect.ts",
  ],
  function (i) {
    "use strict";
    var e, t, n, r, a, s, o, l, h;
    return {
      setters: [
        function (i) {
          (e = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (n = i.initializerDefineProperty),
            (r = i.assertThisInitialized);
        },
        function (i) {
          (a = i.cclegacy), (s = i._decorator), (o = i.Node);
        },
        function (i) {
          l = i.PerformanceLevel;
        },
        function (i) {
          h = i.SlotTableNearWinEffect;
        },
      ],
      execute: function () {
        var c, N, W, u, d;
        a._RF.push(
          {},
          "6e4f4hRQTJFcqaHeI9aJPbt",
          "SlotTableNearWinEffect9930",
          void 0
        );
        var f = s.ccclass,
          m = s.property;
        i(
          "SlotTableNearWinEffect9930",
          ((c = f("SlotTableNearWinEffect9930")),
          (N = m({ type: o })),
          c(
            ((d = e(
              (u = (function (i) {
                function e() {
                  for (
                    var e, t = arguments.length, a = new Array(t), s = 0;
                    s < t;
                    s++
                  )
                    a[s] = arguments[s];
                  return (
                    (e = i.call.apply(i, [this].concat(a)) || this),
                    n(e, "holderNearWinReel5", d, r(e)),
                    (e.isNearWinJackpot = !1),
                    (e.isNearWinReel4 = !1),
                    (e.isNearWinLastReel = !1),
                    e
                  );
                }
                t(e, i);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      this.node.on(
                        "CLEAR_NEAR_WIN_SYMBOLS",
                        this.clearSymbolPaylines,
                        this
                      ),
                      this.node.on(
                        "CLEAR_NEAR_WIN_SYMBOL_AT_REEL",
                        this.clearNearWinSymbolAtReel,
                        this
                      );
                  }),
                  (a.adjustReelDelay = function (i) {
                    var e = i.reels,
                      t = i.matrix,
                      n = i.data,
                      r = this.node.tableFormat,
                      a = n.jackpot,
                      s = n.subSymbols,
                      o = n.isSureWin,
                      l = 0,
                      h = 0,
                      c = !1;
                    if (
                      ((this.nearWinList = []),
                      (this.isNearWinJackpot = !1),
                      (this.isNearWinLastReel = !1),
                      (this.animNode.parent = this.node),
                      !o)
                    )
                      for (
                        var N = this.dataStore.modeTurbo, W = 0;
                        W < t.length;
                        W++
                      ) {
                        var u = W < t.length - 1,
                          d =
                            l >= this.startAtScatterCount &&
                            l < this.stopAtScatterCount &&
                            u,
                          f =
                            0 >= this.startAtBonusCount &&
                            0 < this.stopAtBonusCount,
                          m = h >= this.startAtJackpotCount && h === W,
                          p = d || m;
                        this.isNearWinJackpot = m;
                        for (var S = 0; S < t[W].length; ++S) {
                          var _ = t[W][S],
                            A = s && s.includes(3 * W + S);
                          _ === this.scatterSymbol &&
                            (this.createPaylineSymbol(r[W], _, W, S), l++),
                            A && h++;
                        }
                        (p = p || m),
                          (c = c || p),
                          (this.isNearWinLastReel = a && 4 == W),
                          3 == W && (this.isNearWinReel4 = d),
                          this.isNearWinLastReel
                            ? ((this.nearWinList[W] = {
                                isNearWinScatter: d,
                                isNearWinJackpot: m,
                                isNearWin: p,
                              }),
                              e[W].emit("EXTEND_TIME_STOP", p, !0))
                            : c &&
                              !N &&
                              ((this.nearWinList[W] = {
                                isNearWinScatter: d,
                                isNearWinBonus: f,
                                isNearWin: p,
                              }),
                              e[W].emit("EXTEND_TIME_STOP", p));
                      }
                  }),
                  (a.runAnimationNearWin = function (i, e) {
                    var t = this;
                    !this.nearWinHolder ||
                      this.animationLevel < Number(l.Medium) ||
                      (this.setOpacity(this.nearWinHolder, 255),
                      this.usingObjs.forEach(function (n) {
                        if (n.symbol === i && n.col == e - 1) {
                          (n.active = !0),
                            n.emit("ENABLE_HIGHLIGHT"),
                            n.emit("PLAY_ANIM_WILD_IDLE");
                          var r = n,
                            a = r.col,
                            s = r.row,
                            o = r.symbol;
                          t.node.emit("SHOW_STATIC_SYMBOL", a, s, o, !1);
                        }
                      }));
                  }),
                  (a.reelStopNearWin = function (i) {
                    var e = i.count,
                      t = i.context;
                    this.hideAnimNearWin(),
                      this.runAnimationNearWin(this.scatterSymbol, e),
                      (this.node.isPlayingNearWinR5 = !1);
                    var n = this.node.reels;
                    if (
                      this.nearWinList[e] &&
                      this.nearWinList[e].isNearWin &&
                      !t.isFastToResult
                    ) {
                      this.showAnimNearWin(e);
                      for (var r = e; r < n.length; r++)
                        this.nearWinList[r] &&
                          this.nearWinList[r].isNearWin &&
                          n[r].emit("UPDATE_NEAR_WIN_SPEED");
                      for (var a = 0; a <= e; a++)
                        n[a].emit("PLAY_ANIM_SUB_SYMBOL", "IdleWin", !0);
                    } else {
                      for (var s = 0; s < 5; s++)
                        n[s].emit("PLAY_ANIM_SUB_SYMBOL", "Idle", !0);
                      this.stopSoundNearWin(), this.node.emit("STOP_NEAR_WIN");
                    }
                    this.isNearWinLastReel &&
                      4 == e &&
                      (this.showAnimNearWin(e),
                      (this.animNode.parent = this.holderNearWinReel5),
                      (this.node.isPlayingNearWinR5 = !0)),
                      e >= n.length &&
                        (this.hideAnimNearWin(),
                        this.stopSoundNearWin(),
                        this.node.emit("STOP_NEAR_WIN"));
                  }),
                  (a.showAnimNearWin = function (e) {
                    i.prototype.showAnimNearWin.call(this, e),
                      (this.node.isPlayingNearWin = !0),
                      this.node.emit(
                        "PLAY_NEAR_WIN_EFFECT",
                        this.isNearWinJackpot
                      );
                  }),
                  (a.clearNearWinSymbolAtReel = function (i) {
                    !this.nearWinHolder ||
                      this.animationLevel < Number(l.Medium) ||
                      this.nearWinHolder.children.forEach(function (e) {
                        e && e.col <= i && (e.active = !1);
                      });
                  }),
                  (a.hideAnimNearWin = function () {
                    i.prototype.hideAnimNearWin.call(this),
                      (this.node.isPlayingNearWin = !1);
                  }),
                  (a._hasWild = function (i) {
                    var e = this.node.reels;
                    if (e[i]) return !1;
                    for (var t = e.showSymbols, n = 0; n < t.length; n++)
                      if (t[n].includes("K")) return !0;
                    return !1;
                  }),
                  e
                );
              })(h)).prototype,
              "holderNearWinReel5",
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
            (W = u))
          ) || W)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTablePayline9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./SlotSymbolPayline.ts",
    "./SlotTablePayline.ts",
  ],
  function (i) {
    "use strict";
    var e, t, n, a, o, s, l, r, h, y;
    return {
      setters: [
        function (i) {
          (e = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (n = i.initializerDefineProperty),
            (a = i.assertThisInitialized);
        },
        function (i) {
          (o = i.cclegacy), (s = i._decorator);
        },
        function (i) {
          (l = i.SlotGameMode), (r = i.PerformanceLevel);
        },
        function (i) {
          h = i.SlotSymbolPayline;
        },
        function (i) {
          y = i.SlotTablePayline;
        },
      ],
      execute: function () {
        var c, m, p;
        o._RF.push(
          {},
          "07d8dQ5Gb9PJ68O7SonXGCY",
          "SlotTablePayline9930",
          void 0
        );
        var u = s.ccclass,
          d = s.property;
        i(
          "SlotTablePayline9930",
          u("SlotTablePayline9930")(
            ((p = e(
              (m = (function (i) {
                function e() {
                  for (
                    var e, t = arguments.length, o = new Array(t), s = 0;
                    s < t;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (e = i.call.apply(i, [this].concat(o)) || this),
                    n(e, "isFreeGame", p, a(e)),
                    (e.countPayline = 0),
                    (e.isRepeat = !1),
                    e
                  );
                }
                t(e, i);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    i.prototype.onLoad.call(this),
                      this.node.on(
                        "PLAY_IDLE_JOIN_GAME",
                        this.playIdleWildJoinGame,
                        this
                      );
                  }),
                  (o.playIdleWildJoinGame = function () {
                    var i = this;
                    this.setOpacity(this.paylineHolder, 255),
                      this.wildHolderNode.forEach(function (e) {
                        i.setOpacity(e.symbol, 0),
                          e.paylineSymbol.emit("ENABLE_HIGHLIGHT"),
                          e.paylineSymbol.emit(
                            "PLAY_ANIM_WILD_IDLE",
                            i.node.isWinFree
                          );
                      });
                  }),
                  (o.createWinLineFrame = function (i, e) {
                    var t = this.getXPosition(i),
                      n =
                        this.node.isFreeMode &&
                        this.config.SYMBOL_HEIGHT_FREE_GAME
                          ? this.config.SYMBOL_HEIGHT_FREE_GAME
                          : this.config.SYMBOL_HEIGHT,
                      a = (this.node.tableFormat[i] / 2 - e - 0.5) * n,
                      o = this.dataStore.currentGameMode,
                      s = this.dataStore.playSession.wildMultiply;
                    if (!s || o != l.FreeGame) {
                      var r = null;
                      return (
                        (r = this.poolFactory.getObject(
                          this.winLineFramePrefabName
                        )) &&
                          ((r.active = !1),
                          (r.parent = this.winLineFrameHolder),
                          (r[i] = i),
                          (r[e] = e),
                          r.setPosition(t, a),
                          this.usingObjs.push(r)),
                        r
                      );
                    }
                    if (s[i] > 0 && 1 == e) {
                      var h = null;
                      return (
                        (h = this.poolFactory.getObject("WildExpand9930")) &&
                          ((h.active = !1),
                          (h.parent = this.winLineFrameHolder),
                          (h[i] = i),
                          (h[e] = e),
                          h.setPosition(t, a),
                          this.usingObjs.push(h)),
                        h
                      );
                    }
                    if (0 == s[i]) {
                      var y = null;
                      return (
                        (y = this.poolFactory.getObject(
                          this.winLineFramePrefabName
                        )) &&
                          ((y.active = !1),
                          (y.parent = this.winLineFrameHolder),
                          (y[i] = i),
                          (y[e] = e),
                          y.setPosition(t, a),
                          this.usingObjs.push(y)),
                        y
                      );
                    }
                  }),
                  (o.createPaylineObject = function (i, e) {
                    var t = this.node.reels[i].getShowSymbols()[e];
                    if (t) {
                      var n = t.symbol.includes("K") ? "K" : t.symbol,
                        a = this.getSymbolSpineData(n);
                      this.poolFactory ||
                        (this.poolFactory = this.mainDirector.poolFactory);
                      var o =
                        this.animationLevel >= Number(r.Medium) && null != a;
                      t.emit(
                        "INIT_FOR_PAYLINE",
                        this.staticPaylineHolder,
                        this.poolFactory.node,
                        o
                      );
                      var s = {
                        symbol: t,
                        paylineSymbol: this.createPaylineSymbol(
                          t.symbol,
                          i,
                          e,
                          o ? a : null
                        ),
                      };
                      if (this.showWinLineFrame) {
                        var l = this.createWinLineFrame(i, e);
                        s.winLineFrame = l;
                      }
                      return (
                        (s.isShowing = !0),
                        (this.paylinesMatrix[i][e] = s),
                        "A" == t.symbol
                          ? this.scatterHolderNode.push(s)
                          : "R" == t.symbol
                          ? this.bonusHolderNode.push(s)
                          : t.symbol.includes("K") &&
                            this.wildHolderNode.push(s),
                        t.symbol == this.jackpotSymbol &&
                          this.jackpotHolderNode.push(s),
                        s
                      );
                    }
                  }),
                  (o.createPaylineSymbol = function (i, e, t, n) {
                    var a = null;
                    if (!this.poolFactory) {
                      var o = this.node.mainDirector;
                      o && (this.poolFactory = o.poolFactory);
                    }
                    ((a = this.poolFactory.getObject(
                      this.paylineSymbolPrefabName
                    )).active = !0),
                      (a.parent = this.paylineHolder);
                    var s =
                        this.node.isFreeMode &&
                        this.config.SYMBOL_HEIGHT_FREE_GAME
                          ? this.config.SYMBOL_HEIGHT_FREE_GAME
                          : this.config.SYMBOL_HEIGHT,
                      l = this.getXPosition(e),
                      r = (this.node.tableFormat[e] / 2 - t - 0.5) * s;
                    a.setPosition(l, r), (a.havingAnim = !!n), (a.col = e);
                    var y = a.getComponent(h);
                    return (
                      y &&
                        ((y.col = e), y.init(i, n, this.disablePaylineHolder)),
                      a.setSiblingIndex("K" === i ? 30 : 3 * e + t),
                      this.usingObjs.push(a),
                      a
                    );
                  }),
                  (o.showNormalPaylineAllLine = function (i, e) {
                    var t = i.symbolName,
                      n = i.symbolCount;
                    this.disableHighlightNormalPaylines();
                    var a = 0;
                    this.isRepeat ||
                      (this.soundPlayer &&
                        this.soundPlayer.playSfx("BLINK_PAYLINE"));
                    for (var o = 0; o < n; o++)
                      for (var s = 0; s < this.paylinesMatrix[o].length; s++) {
                        var l = this.paylinesMatrix[o][s],
                          r = l.symbol,
                          h = l.paylineSymbol,
                          y = l.winLineFrame,
                          c = l.isShowing;
                        r &&
                          h &&
                          c &&
                          ((r.symbol == t ||
                            r.symbol.includes(this.config.WILD_SYMBOL)) &&
                            (h.havingAnim
                              ? r.emit("HIDE_SYMBOL")
                              : (r.emit("ENABLE_HIGHLIGHT"),
                                r.emit("PLAY_ANIMATION")),
                            h.emit("PLAY_ANIMATION"),
                            h.emit("ENABLE_HIGHLIGHT"),
                            this.node.emit("PLAY_PAY_LINE_EFFECT"),
                            y && (y.active = !0)),
                          r.symbol.includes("K") &&
                            ((a = o),
                            this.isFreeGame &&
                              ((r.active = !1), (h.active = !1))));
                      }
                    e &&
                      (e - 1 <= this.countPayline
                        ? (this.isRepeat = !0)
                        : this.countPayline++),
                      a > 0 &&
                        this.node.emit("CLEAR_NEAR_WIN_SYMBOL_AT_REEL", a);
                  }),
                  (o.blinkNormalPaylineAllline = function (i) {
                    var e = i.symbolName,
                      t = i.symbolCount;
                    if (this.paylinesMatrix && this.paylinesMatrix.length) {
                      for (var n = 0, a = 0; a < t; a++)
                        for (
                          var o = 0;
                          o < this.paylinesMatrix[a].length;
                          o++
                        ) {
                          var s = this.paylinesMatrix[a][o],
                            l = s.symbol,
                            r = s.winLineFrame,
                            h = s.paylineSymbol;
                          h &&
                            l &&
                            ((l.symbol != e && "K" != l.symbol) ||
                              (l.emit("CHANGE_PARENT_SUB_SYMBOL"),
                              h.havingAnim
                                ? l.emit("HIDE_SYMBOL")
                                : (l.emit("ENABLE_HIGHLIGHT"),
                                  l.emit("PLAY_ANIMATION"),
                                  l.emit("HIDE_SUB_SYMBOL")),
                              h.emit("PLAY_ANIMATION"),
                              h.emit("ENABLE_HIGHLIGHT"),
                              r && (r.active = !0),
                              this.node.emit("PLAY_PAY_LINE_EFFECT")),
                            l.symbol.includes("K") &&
                              ((n = a),
                              this.isFreeGame &&
                                ((l.active = !1), (h.active = !1))));
                        }
                      n > 0 &&
                        this.node.emit("CLEAR_NEAR_WIN_SYMBOL_AT_REEL", n);
                    }
                  }),
                  (o.showSpecialPayline = function (i, e) {
                    var t = this;
                    this.hideShowingPayline(),
                      this.setOpacity(this.paylineHolder, 255),
                      (this.node.isWinFree = !0),
                      this.disableHighlightNormalPaylines(),
                      i.forEach(function (i) {
                        var e = i.symbol,
                          n = i.paylineSymbol;
                        e && e.emit("ENABLE_HIGHLIGHT"),
                          n &&
                            (n.emit("PLAY_ANIM_WILD"),
                            n.emit("ENABLE_HIGHLIGHT")),
                          t.scheduleOnce(function () {
                            "K" == e.symbol && t.setOpacity(e, 0);
                          }, 0.1);
                      }),
                      (this._callbackSpecialPayline = function () {
                        e && "function" == typeof e && e();
                      }),
                      this.scheduleOnce(
                        this._callbackSpecialPayline,
                        this.curentConfig.ANIMATION_DURATION
                      );
                  }),
                  (o.clearPaylines = function () {
                    (this.isRepeat = !1),
                      (this.countPayline = 0),
                      this.node.emit("STOP_PAY_LINE"),
                      i.prototype.clearPaylines.call(this);
                  }),
                  (o.showWildPayLine = function (i) {
                    this.node.emit("CLEAR_NEAR_WIN_SYMBOLS"),
                      this.node.reels.forEach(function (i, e) {
                        i.getShowSymbols().forEach(function (i) {
                          "K" == i.symbol &&
                            i.emit("CHANGE_TO_SYMBOL", "K", e, !0);
                        });
                      }),
                      this.showSpecialPayline(this.wildHolderNode, i);
                  }),
                  (o.showNextPayline = function () {
                    if (
                      (this.setOpacity(this.paylineHolder, 255),
                      (this.payLineNormals &&
                        this.payLineNormals[this.paylineIndex]) ||
                        ("free" === this.paylineType &&
                          (this.showingPayline = !1),
                        (this.paylineIndex = 0),
                        this._callbackShowPayline &&
                          this._callbackShowPayline(),
                        (this._callbackShowPayline = null)),
                      this.payLineNormals &&
                        this.payLineNormals[this.paylineIndex] &&
                        this.showingPayline)
                    ) {
                      var i = this.payLineNormals[this.paylineIndex];
                      this.showNormalPayline(i, this.payLineNormals.length),
                        this.guiMgr && this.guiMgr.showPaylineInfo(i),
                        this.extShowPayline(),
                        (this.paylineIndex += 1),
                        (this.paylineTime = this.nextPaylineTime);
                    }
                  }),
                  (o.disableHighlightNormalPaylines = function () {
                    for (var i = 0; i < this.paylinesMatrix.length; ++i)
                      for (var e = 0; e < this.paylinesMatrix[i].length; ++e) {
                        var t = this.paylinesMatrix[i][e],
                          n = t.symbol,
                          a = t.paylineSymbol,
                          o = t.winLineFrame;
                        n &&
                          a &&
                          (n.emit("DISABLE_HIGHLIGHT"),
                          n.emit("CHANGE_PARENT_SUB_SYMBOL"),
                          a.emit("DISABLE_HIGHLIGHT")),
                          o && (o.active = !1);
                      }
                    this.dimBackground && (this.dimBackground.active = !0);
                  }),
                  e
                );
              })(y)).prototype,
              "isFreeGame",
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
            (c = m))
          ) || c
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTablePaylineInfo9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./SlotTablePaylineInfo.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, o, s, l;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (n = t.cclegacy), (i = t._decorator), (o = t.Sprite);
        },
        function (t) {
          s = t.formatMoney;
        },
        function (t) {
          l = t.SlotTablePaylineInfo;
        },
      ],
      execute: function () {
        var a;
        n._RF.push(
          {},
          "2d58710UrpJW5bnIO4fucpj",
          "SlotTablePaylineInfo9930",
          void 0
        );
        var r = i.ccclass;
        t(
          "SlotTablePaylineInfo9930",
          r("SlotTablePaylineInfo9930")(
            (a = (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              return (
                e(n, t),
                (n.prototype.showPaylineInfoAllways = function (t) {
                  var e = this,
                    n = t.line,
                    i = n.symbolName,
                    l = n.totalWinAmount,
                    a = n.symbolCount,
                    r = n.combination,
                    c = n.payableSymbol,
                    u = n.multiplier,
                    y = this.calculateBetDenom();
                  (this.node.active = !0),
                    (this.lbLeft.string = "Trúng " + Number(a)),
                    (this.symbolImg.getComponent(o).spriteFrame =
                      this.assets[this.symbolPrefix + i]);
                  var h = parseInt(u) > 1 ? " x " + parseInt(u) : "",
                    f = r > 1 ? " x " + r : "",
                    p = " x " + s(y) + h + " = ",
                    b = s(l);
                  (this.lbRight.string = ": " + c + f + p + b),
                    this._textLayout &&
                      this._lastPayLine !== i &&
                      (this.setOpacity(this._textLayout.node, 0),
                      this.scheduleOnce(function () {
                        e.setOpacity(e._textLayout.node, 255);
                      }, 0)),
                    (this._lastPayLine = i);
                }),
                n
              );
            })(l))
          ) || a
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SlotTableSoundEffect9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CustomEnum.ts",
    "./SlotTableSoundEffect.ts",
  ],
  function (t) {
    "use strict";
    var e, o, n, r, i;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (o = t.cclegacy), (n = t._decorator);
        },
        function (t) {
          r = t.SlotGameMode;
        },
        function (t) {
          i = t.SlotTableSoundEffect;
        },
      ],
      execute: function () {
        var u;
        o._RF.push(
          {},
          "5a732fh7Y5JYJeSKn8kgzuy",
          "SlotTableSoundEffect9930",
          void 0
        );
        var a = n.ccclass;
        n.property,
          t(
            "SlotTableSoundEffect9930",
            a("SlotTableSoundEffect9930")(
              (u = (function (t) {
                function o() {
                  return t.apply(this, arguments) || this;
                }
                e(o, t);
                var n = o.prototype;
                return (
                  (n.reelStopSound = function (t) {
                    var e = t.matrix,
                      o = t.count,
                      n = this.dataStore.modeTurbo,
                      i = this.dataStore.currentGameMode,
                      u =
                        this.dataStore.gameSpeed ==
                        this.config.GAME_SPEED.INSTANTLY;
                    if (
                      !this._isWildMultiply(o) &&
                      e.includes("K") &&
                      i != r.FreeGame &&
                      !n &&
                      !u &&
                      (this.countScatter++, this.canGetFreeGame(o))
                    ) {
                      var a = "FREE_" + this.countScatter;
                      this.soundPlayer && this.soundPlayer.playSfx(a);
                    }
                  }),
                  (n._isWildMultiply = function (t) {
                    var e = this.dataStore.playSession.wildMultiply;
                    return !!e && e[t - 1] > 0;
                  }),
                  (n.canGetFreeGame = function (t) {
                    return (
                      !(3 === t && this.countScatter <= 1) &&
                      !(4 === t && this.countScatter <= 2)
                    );
                  }),
                  o
                );
              })(i))
            ) || u
          );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SpinsTime9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./SpinTimes.ts"],
  function (t) {
    "use strict";
    var e, i, o, n, r, s, p, c;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy), (s = t._decorator), (p = t.Node);
        },
        function (t) {
          c = t.SpinTimes;
        },
      ],
      execute: function () {
        var a, u, l, h, m;
        r._RF.push({}, "df414LpNaxMP5W0RKY3wQJn", "SpinsTime9930", void 0);
        var d = s.ccclass,
          f = s.property;
        t(
          "SpinsTime9930",
          ((a = d("SpinsTime9930")),
          (u = f({ type: p })),
          a(
            ((m = e(
              (h = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    o(e, "pocketItems", m, n(e)),
                    e
                  );
                }
                i(e, t);
                var r = e.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "UPDATE_PROMOTION",
                        this.onUpdatePromotion,
                        this
                      );
                  }),
                  (r.updateSpintimes = function (e, i) {
                    void 0 === e && (e = 0),
                      void 0 === i && (i = !1),
                      t.prototype.updateSpintimes.call(this, e, i),
                      i &&
                        e < this.pocketItems.length &&
                        this.onUpdatePromotion(e);
                  }),
                  (r.onUpdatePromotion = function (t) {
                    if (t && !(t < 0))
                      for (var e = 0; e < this.pocketItems.length; e++) {
                        var i = this.pocketItems[e];
                        i.active = e < t;
                      }
                  }),
                  e
                );
              })(c)).prototype,
              "pocketItems",
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
            (l = h))
          ) || l)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TableAnimController9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./GameObject.ts",
  ],
  function (i) {
    "use strict";
    var n, t, e, r, o, s, a, l, h, c, u, f, y;
    return {
      setters: [
        function (i) {
          (n = i.applyDecoratedDescriptor),
            (t = i.inheritsLoose),
            (e = i.initializerDefineProperty),
            (r = i.assertThisInitialized);
        },
        function (i) {
          (o = i.cclegacy),
            (s = i._decorator),
            (a = i.Node),
            (l = i.sp),
            (h = i.Tween),
            (c = i.ParticleSystem2D),
            (u = i.tween);
        },
        function (i) {
          f = i.setMixAllAnims;
        },
        function (i) {
          y = i.GameObject;
        },
      ],
      execute: function () {
        var p, d, m, P, g, A, b, W, _, v, O, j, I;
        o._RF.push(
          {},
          "e0072CgUAZFxIrbKvxkgO9c",
          "TableAnimController9930",
          void 0
        );
        var S = s.ccclass,
          N = s.property;
        i(
          "TableAnimController9930",
          ((p = S("TableAnimController9930")),
          (d = N(a)),
          (m = N(a)),
          (P = N(a)),
          (g = N(a)),
          (A = N(a)),
          p(
            ((_ = n(
              (W = (function (i) {
                function n() {
                  for (
                    var n, t = arguments.length, o = new Array(t), s = 0;
                    s < t;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (n = i.call.apply(i, [this].concat(o)) || this),
                    e(n, "character", _, r(n)),
                    e(n, "jackPotString", v, r(n)),
                    e(n, "unicorn", O, r(n)),
                    e(n, "fireHolder", j, r(n)),
                    e(n, "confettiHolder", I, r(n)),
                    (n.characterAnim = void 0),
                    (n.jpStringAnim = void 0),
                    (n.unicornAnim = void 0),
                    (n.haveWinLine = !1),
                    (n.firePrefabName = "FireEffectPrefab"),
                    (n.confettiPrefabName = "ConfettiEffectPrefab"),
                    (n.usingFireObj = void 0),
                    (n.usingConfettiObj = void 0),
                    (n.poolFactory = null),
                    (n.isPlayingSureWin = void 0),
                    (n.isPlayingNearWinJP = void 0),
                    (n.isPlayingNearWin = void 0),
                    (n.isPlayingPayLine = void 0),
                    n
                  );
                }
                t(n, i);
                var o = n.prototype;
                return (
                  (o.onLoad = function () {
                    this.node.on(
                      "PLAY_SURE_WIN_EFFECT",
                      this.playSureWin,
                      this
                    ),
                      this.node.on("STOP_SURE_WIN", this.stopSureWin, this),
                      this.node.on(
                        "PLAY_NEAR_WIN_EFFECT",
                        this.playNearWin,
                        this
                      ),
                      this.node.on("STOP_NEAR_WIN", this.stopNearWin, this),
                      this.node.on(
                        "PLAY_PAY_LINE_EFFECT",
                        this.playAnimPayLine,
                        this
                      ),
                      this.node.on("STOP_PAY_LINE", this.stopAnimPayLine, this),
                      this.node.on("SET_WIN_LINE", this.setPlayWinLine, this),
                      this.node.on("PLAY_ANIM_IDLE", this.playIdle, this),
                      (this.characterAnim = this.character.getComponent(
                        l.Skeleton
                      )),
                      (this.jpStringAnim = this.jackPotString.getComponent(
                        l.Skeleton
                      )),
                      (this.unicornAnim = this.unicorn.getComponent(
                        l.Skeleton
                      )),
                      f(this.unicornAnim, 0.5),
                      f(this.characterAnim, 0.5),
                      this.unicornAnim.setMix("Win_DaiCat_Idle", "Idle", 0),
                      this.unicornAnim.setMix("Win_DaiLoi_Idle", "Idle", 0),
                      this.unicornAnim.setMix("Win_DaiCat", "Idle", 0),
                      this.unicornAnim.setMix("Win_DaiLoi", "Idle", 0),
                      this.playIdle(),
                      (this.haveWinLine = !1),
                      (this.usingFireObj = []),
                      (this.usingConfettiObj = []),
                      (this.poolFactory = this.mainDirector.poolFactory);
                  }),
                  (o.playSureWin = function () {
                    this.soundPlayer && this.soundPlayer.playSfx("SURE_WIN"),
                      this.characterAnim.setAnimation(0, "Sure_Win", !0),
                      this.unicornAnim.setAnimation(0, "SureWin", !0),
                      this.createObject(1),
                      h.stopAllByTarget(this.fireHolder),
                      (this.isPlayingSureWin = !0);
                  }),
                  (o.stopSureWin = function () {
                    var i = this;
                    if (this.isPlayingSureWin) {
                      for (var n = 0; n < this.usingFireObj.length; n++) {
                        this.usingFireObj[n]
                          .getComponentsInChildren(c)
                          .forEach(function (i) {
                            i.stopSystem();
                          });
                      }
                      u(this.fireHolder)
                        .delay(0.5)
                        .call(function () {
                          i.removeObject(1);
                        })
                        .start(),
                        this.soundPlayer &&
                          (this.soundPlayer.stopSfx("SURE_WIN"),
                          this.soundPlayer.playSfx("SURE_WIN_LAST")),
                        this.createObject(2),
                        this.scheduleOnce(function () {
                          h.stopAllByTarget(i.confettiHolder);
                        }, 2),
                        this.playIdle();
                    }
                  }),
                  (o.playNearWin = function (i) {
                    this.isPlayingSureWin ||
                      (i &&
                        (this.unicornAnim.setAnimation(
                          0,
                          "Idle_to_NearWin",
                          !1
                        ),
                        this.unicornAnim.addAnimation(0, "NearWin", !0),
                        (this.isPlayingNearWinJP = !0)),
                      this.characterAnim.setAnimation(0, "NearWin", !0),
                      (this.isPlayingNearWin = !0));
                  }),
                  (o.stopNearWin = function () {
                    this.isPlayingNearWin &&
                      (this.isPlayingNearWinJP &&
                        !this.unicorn.isPlayJPIntro &&
                        this.unicornAnim.addAnimation(0, "NearWin_to_Idle", !1),
                      this.playIdle());
                  }),
                  (o.setPlayWinLine = function (i) {
                    this.haveWinLine = !!i;
                  }),
                  (o.playAnimPayLine = function () {
                    !this.isPlayingPayLine &&
                      this.haveWinLine &&
                      (this.characterAnim.setAnimation(0, "Win_Line", !0),
                      this.unicorn.isPlayJPIntro ||
                        this.unicornAnim.setAnimation(0, "WinLine", !0),
                      (this.isPlayingPayLine = !0));
                  }),
                  (o.stopAnimPayLine = function () {
                    this.isPlayingPayLine && this.playIdle();
                  }),
                  (o.playIdle = function () {
                    if (
                      (this.characterAnim.addAnimation(0, "Idle", !0),
                      !this.unicorn.isPlayJPIntro)
                    ) {
                      var i = this.node.isFreeMode ? "_FreeG" : "";
                      this.unicornAnim.addAnimation(0, "Idle" + i, !0);
                    }
                    (this.isPlayingSureWin = !1),
                      (this.isPlayingPayLine = !1),
                      (this.isPlayingNearWin = !1),
                      (this.isPlayingNearWinJP = !1);
                  }),
                  (o.createObject = function (i) {
                    var n = this;
                    if ((this.removeObject(i), 1 === i))
                      for (var t = 0; t < 6; t++) {
                        var e = this.poolFactory.getObject(this.firePrefabName);
                        this.setOpacity(this.fireHolder, 0),
                          (e.parent = this.fireHolder),
                          this.usingFireObj.push(e),
                          this.playAnimParticle(this.usingFireObj[t]),
                          this.scheduleOnce(function () {
                            n.setOpacity(n.fireHolder, 255);
                          }, 0.05);
                      }
                    else
                      for (var r = 0; r < 6; r++) {
                        var o = this.poolFactory.getObject(
                          this.confettiPrefabName
                        );
                        (o.parent = this.confettiHolder),
                          this.usingConfettiObj.push(o),
                          this.playAnimParticle(this.usingConfettiObj[r]);
                      }
                  }),
                  (o.removeObject = function (i) {
                    if (1 === i) {
                      if (this.usingFireObj.length) {
                        for (var n = 0; n < this.usingFireObj.length; n++)
                          this.poolFactory.removeObject(this.usingFireObj[n]);
                        this.usingFireObj = [];
                      }
                    } else if (this.usingConfettiObj.length) {
                      for (var t = 0; t < this.usingConfettiObj.length; t++)
                        this.poolFactory.removeObject(this.usingConfettiObj[t]);
                      this.usingConfettiObj = [];
                    }
                  }),
                  (o.playAnimParticle = function (i) {
                    var n = i.getComponentsInChildren(c);
                    (i.active = !0),
                      n.forEach(function (i) {
                        i.resetSystem();
                      });
                  }),
                  n
                );
              })(y)).prototype,
              "character",
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
            (v = n(W.prototype, "jackPotString", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = n(W.prototype, "unicorn", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = n(W.prototype, "fireHolder", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = n(W.prototype, "confettiHolder", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = W))
          ) || b)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TotalWinPanel9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./CustomEnum.ts",
    "./TotalWinPanel.ts",
    "./EventNames.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, a, l, o, s, c, r, u, p, h, f, m, g;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (a = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy),
            (o = e._decorator),
            (s = e.sp),
            (c = e.Label),
            (r = e.tween),
            (u = e.Vec3),
            (p = e.sys);
        },
        function (e) {
          h = e.formatMoney;
        },
        function (e) {
          f = e.TutorialTriggerType;
        },
        function (e) {
          m = e.TotalWinPanel;
        },
        function (e) {
          g = e.default;
        },
      ],
      execute: function () {
        var v, d, y, w, T;
        l._RF.push({}, "89babZT0ftFvL8nxv+De7u9", "TotalWinPanel9930", void 0);
        var b = o.ccclass,
          S = o.property;
        e(
          "TotalWinPanel9930",
          ((v = b("TotalWinPanel9930")),
          (d = S({ type: s.Skeleton })),
          v(
            ((T = t(
              (w = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, l = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    l[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(l)) || this),
                    i(t, "spine", T, a(t)),
                    (t.tweenScale = void 0),
                    t
                  );
                }
                n(t, e);
                var l = t.prototype;
                return (
                  (l.enter = function () {
                    var e = this;
                    this.canClose = !1;
                    var t = this.content.winAmount;
                    (this.winAmount.getComponent(c).string = ""),
                      this.spine.setAnimation(0, "Appear", !1),
                      this.spine.addAnimation(0, "Idle", !0),
                      this.playSoundTotalWin(),
                      r(this.node)
                        .delay(0.5)
                        .call(function () {
                          e.tweenScale &&
                            (e.tweenScale.stop(), (e.tweenScale = null)),
                            (e.tweenScale = r(e.winAmount)
                              .repeatForever(
                                r()
                                  .to(0.2, { scale: new u(1.1) })
                                  .to(0.2, { scale: u.ONE })
                              )
                              .start()),
                            (e.winAmount.getComponent(c).string = h(t)),
                            e.callback && e.callback();
                        })
                        .delay(0.5)
                        .call(function () {
                          (e.canClose = !0), (e.closeBtn.interactable = !0);
                        })
                        .delay(this.showingTime)
                        .call(function () {
                          e.close();
                        })
                        .start();
                  }),
                  (l.exit = function (e) {
                    var t = this;
                    void 0 === e && (e = null),
                      this.tweenScale &&
                        (this.tweenScale.stop(), (this.tweenScale = null)),
                      this.winAmount.node.setScale(u.ONE),
                      e && "function" == typeof e && (this.callback = e),
                      this.guiMgr.onIngameEvent(
                        f.OnCutsceneClose,
                        "HIDE_TOTAL_WIN_PANEL"
                      ),
                      this.callback &&
                        (this.node.emit("STOP"), this.callback()),
                      p.isNative &&
                        this.eventManager &&
                        this.eventManager.emit(
                          g.REMOVE_ON_DEMAND_OBJECT,
                          Number(this.sceneType),
                          !0,
                          function () {
                            var e = t.guiMgr.sceneComp.indexOf(t);
                            e > -1 && t.guiMgr.sceneComp.splice(e, 1);
                          }
                        ),
                      this.hideScene();
                  }),
                  t
                );
              })(m)).prototype,
              "spine",
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
            (y = w))
          ) || y)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/UIManager9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./UIManager.ts"],
  function (t) {
    "use strict";
    var i, e, a, o, r, n, s, l;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (a = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy), (n = t._decorator), (s = t.Node);
        },
        function (t) {
          l = t.UIManager;
        },
      ],
      execute: function () {
        var c, h, u, p, f, d, m, y, b, v, T, w, M;
        r._RF.push({}, "69190K4yqdJoaDgPWeN/B8o", "UIManager9930", void 0);
        var S = n.ccclass,
          g = n.property;
        t(
          "UIManager9930",
          ((c = S("UIManager9930")),
          (h = g({ type: s })),
          (u = g({ type: s })),
          (p = g({ type: s })),
          (f = g({ type: s })),
          (d = g({ type: s })),
          c(
            ((b = i(
              (y = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, r = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    r[n] = arguments[n];
                  return (
                    (i = t.call.apply(t, [this].concat(r)) || this),
                    a(i, "mainBG", b, o(i)),
                    a(i, "freeBG", v, o(i)),
                    a(i, "buttonNormal", T, o(i)),
                    a(i, "buttonFree", w, o(i)),
                    a(i, "fireWorks", M, o(i)),
                    i
                  );
                }
                e(i, t);
                var r = i.prototype;
                return (
                  (r.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.topUI &&
                        this.topUI.on(
                          "ENABLE_BUTTONS",
                          this.hideTutorial,
                          this
                        );
                  }),
                  (r.hideAllUI = function () {
                    (this.freeBG.active = !1),
                      (this.mainBG.active = !1),
                      (this.buttonFree.active = !1),
                      (this.buttonNormal.active = !1),
                      t.prototype.hideAllUI.call(this);
                  }),
                  (r.showUIFree = function () {
                    t.prototype.showUIFree.call(this),
                      (this.bet.active = !0),
                      (this.wallet.active = !0),
                      (this.jackpot.active = !0),
                      (this.trialButton.active = !0),
                      (this.turbo.active = !0),
                      (this.winAmount.active = !0),
                      this.setOpacity(this.paylineInfo, 255),
                      (this.freeBG.active = !0),
                      (this.buttonFree.active = !0),
                      this.fireWorks.emit("SHOW_FIRE_WORKS", !0);
                  }),
                  (r.showUIMain = function () {
                    t.prototype.showUIMain.call(this),
                      (this.freeBG.active = !1),
                      (this.mainBG.active = !0),
                      (this.buttonNormal.active = !0),
                      this.fireWorks.emit("SHOW_FIRE_WORKS", !1);
                    var i = this.dataStore.isTrialMode;
                    this.jackpot.active = !i;
                  }),
                  (r.switchToRealMode = function () {
                    this.mainDirector.switchToRealMode(),
                      (this.dataStore.playSession.winAmountPS = 0),
                      (this.dataStore.playSession.freeGameRemain = 0),
                      t.prototype.switchToRealMode.call(this);
                  }),
                  (r.switchToTrialMode = function () {
                    t.prototype.switchToTrialMode.call(this),
                      this.trialButton.emit("SHOW_BLOCK_INPUTS", !0);
                  }),
                  (r.hideTutorial = function () {
                    this.trialButton.emit("SHOW_BLOCK_INPUTS", !1);
                  }),
                  (r.fadeOutWinAmount = function () {
                    this.winAmount.emit("FADE_OUT_NUMBER", 0.5);
                  }),
                  (r.switchMode = function () {
                    this.dataStore.isTrialMode
                      ? ((this.dataStore.isTrialMode = !1),
                        this.mainDirector.gameStateManager.switchToReal(),
                        this.switchToRealMode(),
                        this.setOpacity(this.jackpot, 255),
                        (this.jackpot.active = !0))
                      : ((this.dataStore.isTrialMode = !0),
                        this.mainDirector.gameStateManager.switchToTrial(),
                        this.switchToTrialMode(),
                        this.setOpacity(this.jackpot, 0),
                        (this.jackpot.active = !1)),
                      this.dataStore.resumeCurrentWallet();
                  }),
                  i
                );
              })(l)).prototype,
              "mainBG",
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
            (v = i(y.prototype, "freeBG", [u], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = i(y.prototype, "buttonNormal", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = i(y.prototype, "buttonFree", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = i(y.prototype, "fireWorks", [d], {
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
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WinAmount9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./utils2.ts", "./WinAmount.ts"],
  function (t) {
    "use strict";
    var i, n, e, a, o, s, r, u, l, c, h;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (a = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (s = t._decorator),
            (r = t.Node),
            (u = t.sp),
            (l = t.log);
        },
        function (t) {
          c = t.formatMoney;
        },
        function (t) {
          h = t.WinAmount;
        },
      ],
      execute: function () {
        var m, p, W, d, A;
        o._RF.push({}, "ecea5ksYpJIa5GRs8XTpB7l", "WinAmount9930", void 0);
        var _ = s.ccclass,
          f = s.property;
        t(
          "WinAmount9930",
          ((m = _("WinAmount9930")),
          (p = f({ type: r })),
          m(
            ((A = i(
              (d = (function (t) {
                function i() {
                  for (
                    var i, n = arguments.length, o = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    e(i, "animationTotalWin", A, a(i)),
                    (i.animWin = null),
                    i
                  );
                }
                n(i, t);
                var o = i.prototype;
                return (
                  (o.onLoad = function () {
                    t.prototype.onLoad.call(this),
                      this.node.on(
                        "ADD_WINNING_AMOUNT",
                        this.addWinningAmount,
                        this
                      ),
                      this.animationTotalWin &&
                        (this.animWin = this.animationTotalWin.getComponent(
                          u.Skeleton
                        ));
                  }),
                  (o.updateWinAmount = function (t, i) {
                    var n = t.value,
                      e = t.time,
                      a = t.isLastest;
                    this._tweenFade && this._tweenFade.stop(),
                      a &&
                        this.dataStore &&
                        (n = this.dataStore.playSession.winAmount),
                      (n < this._currentValue || n < this._winValue) &&
                        (l(
                          "Logic fail somewhere, script clear winamount have not ran yet",
                          {
                            current: this._currentValue,
                            endValue: this._winValue,
                            fastUpdateValue: n,
                          }
                        ),
                        this.clearWinAmount());
                    var o = c(n);
                    this.animWin &&
                      o != this.labelWinAmount.string &&
                      ((this.animationTotalWin.active = !0),
                      this.animWin.setAnimation(0, "animation", !1)),
                      (this._callBackOnComplete = i),
                      (this._winValue = n),
                      (e = this._currentValue === n ? 0 : e),
                      this._tweenWinAmount(n, e);
                  }),
                  (o.addWinningAmount = function (t) {
                    var i = t.value,
                      n = t.time,
                      e = void 0 === n ? 300 : n;
                    (this._winValue += i),
                      this._tweenWinAmount(this._winValue, e),
                      this.animWin &&
                        ((this.animationTotalWin.active = !0),
                        this.animWin.setAnimation(0, "animation", !1));
                  }),
                  i
                );
              })(h)).prototype,
              "animationTotalWin",
              [p],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: null,
              }
            )),
            (W = d))
          ) || W)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WinEffect9930.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./utils2.ts",
    "./CustomEnum.ts",
    "./EventNames.ts",
    "./WinEffect.ts",
  ],
  function (t) {
    "use strict";
    var i, n, e, s, o, a, l, c, h, u, r, f, d, p;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (s = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (a = t._decorator),
            (l = t.sp),
            (c = t.tween),
            (h = t.Vec3),
            (u = t.sys);
        },
        function (t) {
          r = t.formatMoney;
        },
        function (t) {
          f = t.TutorialTriggerType;
        },
        function (t) {
          d = t.default;
        },
        function (t) {
          p = t.WinEffect;
        },
      ],
      execute: function () {
        var y, w, m, T, E;
        o._RF.push({}, "405da87XIxHY4B6UJ3n9VNe", "WinEffect9930", void 0);
        var g = a.ccclass,
          v = a.property,
          S = ["Thanglon", "Thangcuclon", "Thangsieulon"];
        t(
          "WinEffect9930",
          ((y = g("WinEffect9930")),
          (w = v({ type: l.Skeleton })),
          y(
            ((E = i(
              (T = (function (t) {
                function i() {
                  for (
                    var i, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    e(i, "spineBigWin", E, s(i)),
                    (i.sfxLoop = null),
                    (i.sfxEnd = null),
                    i
                  );
                }
                n(i, t);
                var o = i.prototype;
                return (
                  (o.onLoad = function () {
                    t.prototype.onLoad.call(this);
                  }),
                  (o.enter = function () {
                    this.sfxLoop &&
                      (this.soundPlayer.stopSfx(this.sfxLoop),
                      (this.sfxLoop = null)),
                      this.sfxEnd &&
                        (this.soundPlayer.stopSfx(this.sfxEnd),
                        (this.sfxEnd = null)),
                      t.prototype.enter.call(this);
                  }),
                  (o.bindQuickShow = function () {
                    var t = this;
                    (this.skippable = !1),
                      c(this.node)
                        .delay(0.5)
                        .call(function () {
                          t.skippable = !0;
                        })
                        .delay(this.animDuration - this.delayShowTime)
                        .call(function () {
                          t.skippable = !1;
                        })
                        .start();
                  }),
                  (o.finish = function () {
                    var t = this;
                    (this.isUpdating = !1),
                      (this.label.string = r(this.content.winAmount)),
                      this.winAmountTween && this.winAmountTween.stop(),
                      this.titleTween && this.titleTween.stop(),
                      this.nodeTween && this.nodeTween.stop(),
                      this.stopParticle(),
                      c(this.winInfo)
                        .delay(this.delayShowTime)
                        .call(function () {
                          t.fadeOut(t.winInfo, 0.5),
                            t.coinsEffect && t.setOpacity(t.coinsEffect, 0);
                        })
                        .delay(0.5)
                        .call(function () {
                          (t.label.string = ""),
                            t.soundPlayer &&
                              (t.soundPlayer.stopAllAudio(),
                              t.soundPlayer.setMusicVolume(
                                t.config.MUSIC_VOLUME
                              ),
                              t.soundPlayer.playMainBGM()),
                            t.exit();
                        })
                        .start();
                  }),
                  (o.showFastEffectWin = function () {
                    var t = this;
                    if (
                      ((this.spineBigWin.node.active = !1),
                      this.isShowFastEffect)
                    )
                      return (
                        this.callback && this.callback(),
                        void (this.callback = null)
                      );
                    (this.isShowFastEffect = !0),
                      this.setOpacity(this.winInfo, 0),
                      this.overlayNode && (this.overlayNode.active = !1),
                      this.coinsEffect.emit("START_PARTICLE", !0),
                      this.callback && this.callback(),
                      (this.callback = null),
                      this.nodeTween && this.nodeTween.stop(),
                      (this.nodeTween = c(this.node)
                        .delay(1)
                        .call(function () {
                          t.coinsEffect.emit("STOP_PARTICLE");
                        })
                        .delay(2)
                        .call(function () {
                          t.exit();
                        })
                        .start());
                  }),
                  (o.showEffectWin = function () {
                    var t = this;
                    (this.isShowNormalEffect = !0),
                      this.overlayNode && (this.overlayNode.active = !0),
                      this.setOpacity(this.winInfo, 255),
                      this.playSoundStart(),
                      this.setOpacity(this.winAmount, 0),
                      (this.winAmountTween = c(this.winAmount)
                        .repeatForever(
                          c()
                            .to(0.2, { scale: new h(1.2, 1.2, 1.2) })
                            .to(0.2, { scale: new h(1, 1, 1) })
                        )
                        .start()),
                      this.initValue(),
                      this.startParticle(),
                      this.changeTitle(0),
                      (this.spineBigWin.node.active = !0),
                      this.setOpacity(this.spineBigWin.node, 0),
                      this.scheduleOnce(function () {
                        t.setOpacity(t.spineBigWin.node, 255);
                      }, 0),
                      this.scheduleOnce(function () {
                        t.setOpacity(t.winAmount, 255),
                          t.startUpdateWinAmount();
                      }, 0.5);
                  }),
                  (o.startUpdateWinAmount = function () {
                    var t,
                      i = this,
                      n =
                        ((t = function (t) {
                          return t * t;
                        }),
                        function (i) {
                          return 1 - t(1 - i);
                        }),
                      e = 0.5 * this.content.winAmount;
                    (this.nodeTween = c(this)),
                      this.nodeTween
                        .to(
                          0.5 * this.animDuration,
                          { currentValue: e },
                          {
                            easing: function (t) {
                              return t * t;
                            },
                          }
                        )
                        .to(
                          0.5 * this.animDuration,
                          { currentValue: this.content.winAmount },
                          { easing: n }
                        )
                        .delay(0.1)
                        .call(function () {
                          i.playSoundEnd();
                        })
                        .delay(0.4)
                        .call(function () {
                          (i.skippable = !1), (i.nodeTween = null), i.finish();
                        })
                        .start();
                  }),
                  (o.onClick = function () {
                    var t = this;
                    if (this.isUpdating && !this.speedUp && this.skippable) {
                      (this.speedUp = !0), this.winAmountTween.stop();
                      c(this.winAmount)
                        .repeatForever(
                          c()
                            .to(0.13, { scale: new h(1.2, 1.2, 1.2) })
                            .to(0.13, { scale: new h(1, 1, 1) })
                        )
                        .start(),
                        this.nodeTween &&
                          (this.nodeTween.stop(), (this.nodeTween = null)),
                        (this.currentValue = this.content.winAmount),
                        (this.nodeTween = c(this)),
                        this.nodeTween
                          .to(1, { currentValue: this.content.winAmount })
                          .call(function () {
                            t.playSoundEnd(), t.finish();
                          })
                          .start();
                    }
                  }),
                  (o.changeTitle = function (t) {
                    this.currentTitle = t;
                    var i = S[t] + "_appear",
                      n = S[t] + "_idle";
                    this.spineBigWin.setAnimation(0, i, !1),
                      this.spineBigWin.addAnimation(0, n, !0);
                  }),
                  (o.playSoundStart = function () {
                    this.soundPlayer &&
                      (this.soundPlayer.stopAllAudio(),
                      this.soundPlayer.setMusicVolume(0),
                      this.soundPlayer.playSfx("BIG_WIN"));
                  }),
                  (o.playSoundEnd = function () {
                    var t = this;
                    if (this.soundPlayer) {
                      this.soundPlayer.fadeSoundTo("BIG_WIN", 0.2, 0),
                        this.scheduleOnce(function () {
                          t.soundPlayer.stopSfx("BIG_WIN");
                        }, 0.2),
                        this.soundPlayer.playSfx("BIG_WIN_END", !1, 0);
                      var i = this.soundPlayer.isEnableSFX
                        ? this.soundPlayer.sfxVolume
                        : 0;
                      this.soundPlayer.fadeSoundTo("BIG_WIN_END", 0.2, i);
                    }
                  }),
                  (o.exit = function (t) {
                    var i = this;
                    void 0 === t && (t = null),
                      this.eventManager.emit(d.BIGWIN_END),
                      t && "function" == typeof t && (this.callback = t),
                      this.guiMgr.onIngameEvent(
                        f.OnCutsceneClose,
                        "ON_CUTSCENE_CLOSE"
                      ),
                      this.callback &&
                        (this.node.emit("STOP"), this.callback()),
                      u.isNative &&
                        this.eventManager &&
                        this.eventManager.emit(
                          d.REMOVE_ON_DEMAND_OBJECT,
                          Number(this.sceneType),
                          !0,
                          function () {
                            var t = i.guiMgr.sceneComp.indexOf(i);
                            t > -1 && i.guiMgr.sceneComp.splice(t, 1);
                          }
                        ),
                      this.hideScene(),
                      (this.isShowFastEffect = !1),
                      (this.isShowNormalEffect = !1);
                  }),
                  i
                );
              })(p)).prototype,
              "spineBigWin",
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
            (m = T))
          ) || m)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/WinLine9930.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (i) {
    "use strict";
    var n, e, t, o, a, r, l, s;
    return {
      setters: [
        function (i) {
          (n = i.applyDecoratedDescriptor),
            (e = i.inheritsLoose),
            (t = i.initializerDefineProperty),
            (o = i.assertThisInitialized);
        },
        function (i) {
          (a = i.cclegacy), (r = i._decorator), (l = i.Node), (s = i.Component);
        },
      ],
      execute: function () {
        var p, c, u, d, h, y;
        a._RF.push({}, "32d38zqxGJL+q9h+qAxNHft", "WinLine9930", void 0);
        var f = r.ccclass,
          m = r.property;
        i(
          "WinLine9930",
          ((p = f("WinLine9930")),
          (c = m({ type: l })),
          p(
            ((h = n(
              (d = (function (i) {
                function n() {
                  for (
                    var n, e = arguments.length, a = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (n = i.call.apply(i, [this].concat(a)) || this),
                    t(n, "animIdleNode", h, o(n)),
                    t(n, "typeRefix", y, o(n)),
                    (n.animAppear = null),
                    (n.animIdle = null),
                    (n.isPlaying = !1),
                    n
                  );
                }
                e(n, i);
                var a = n.prototype;
                return (
                  (a.onLoad = function () {
                    this.node.on("PLAY_WIN_LINE", this.playWinLine, this),
                      (this.animIdle =
                        this.animIdleNode &&
                        this.animIdleNode.getComponent("AnimationControl"));
                  }),
                  (a.playWinLine = function () {
                    if (!this.isPlaying) {
                      if (
                        (this.resetInEditor(),
                        "Back" == this.typeRefix &&
                          this.animIdle.playAnimation("VFX_WinLine", 1, !0),
                        "Expand" == this.typeRefix)
                      ) {
                        var i = this.node.getComponent("AnimationControl");
                        i && i.playAnimation("VFX_WinLine_Expand_Idle", 1, !1);
                      }
                      this.isPlaying = !0;
                    }
                  }),
                  (a.reset = function () {
                    this.unscheduleAllCallbacks(), (this.isPlaying = !1);
                  }),
                  n
                );
              })(s)).prototype,
              "animIdleNode",
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
            (y = n(d.prototype, "typeRefix", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return "";
              },
            })),
            (u = d))
          ) || u)
        );
        a._RF.pop();
      },
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/cc30-lanphatloc-9930",
    "chunks:///_virtual/cc30-lanphatloc-9930"
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
