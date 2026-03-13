System.register(
  "chunks:///_virtual/base-slot",
  ["./BaseSlotGameNetworkController.ts", "./BaseSlotGameView.ts"],
  function () {
    "use strict";
    return { setters: [null, null], execute: function () {} };
  }
);

System.register(
  "chunks:///_virtual/BaseSlotGameNetworkController.ts",
  ["cc", "./SocketManager.ts", "./EventManager.ts"],
  function (e) {
    "use strict";
    var n, t, i, o, a, s;
    return {
      setters: [
        function (e) {
          n = e.cclegacy;
        },
        function (e) {
          (t = e.MessageResponse),
            (i = e.GLOBAL_MESSAGE),
            (o = e.MessageRequest);
        },
        function (e) {
          (a = e.eventManager), (s = e.EventKey);
        },
      ],
      execute: function () {
        var S;
        n._RF.push(
          {},
          "b61ae22pXVHX6vZCeCfamHz",
          "BaseSlotGameNetworkController",
          void 0
        ),
          (function (e) {
            (e[(e.SPIN_RESULT = 1302)] = "SPIN_RESULT"),
              (e[(e.UPDATE_JACKPOT = 1304)] = "UPDATE_JACKPOT"),
              (e[(e.SUBSCRIBE_JACKPOT = 1300)] = "SUBSCRIBE_JACKPOT"),
              (e[(e.UNSUBSCRIBE_JACKPOT = 1301)] = "UNSUBSCRIBE_JACKPOT"),
              (e[(e.AUTO_SPIN = 1303)] = "AUTO_SPIN"),
              (e[(e.CANCEL_AUTO_SPIN = 1305)] = "CANCEL_AUTO_SPIN"),
              (e[(e.SPIN_FREE = 1308)] = "SPIN_FREE"),
              (e[(e.X2 = 1306)] = "X2");
          })(S || (S = {}));
        e(
          "BaseSlotGameNetworkController",
          (function () {
            function e() {}
            var n = e.prototype;
            return (
              (n.connect = function (e) {
                var n = this;
                void 0 === e && (e = !0);
                var t = S.SUBSCRIBE_JACKPOT;
                e || (t = S.UNSUBSCRIBE_JACKPOT);
                var i = {};
                (i.cmd = t), (i.gid = this.getGameID());
                var c = [o.ZonePlugin_Type, "MiniGame", "slotMachinePlugin", i];
                a.emitLast(s.MiniSocketSend, c);
                var r = this.getGameView();
                r &&
                  (a.on(s.SocketMessage, r, function (e) {
                    return n.handleMessage(e);
                  }),
                  a.on(s.MiniLogged, r, function () {
                    console.log("handle mini logged in"), r.handleLoggedIn();
                  }));
              }),
              (n.handleMessage = function (e) {
                var n = this.getGameView();
                if (n) {
                  var o = e[0],
                    a = e[1],
                    s = a.cmd;
                  switch (o) {
                    case t.Extension_Response:
                      s == S.SPIN_RESULT || 1307 == s
                        ? n.onSpinResult(a)
                        : 1304 == s
                        ? n.onUpdateJackpot(a)
                        : s == S.SUBSCRIBE_JACKPOT
                        ? n.onSubcribeJackpot(a)
                        : s == S.X2
                        ? n.onX2Response(a)
                        : s == i.REFRESH_MONEY && n.onRefreshMoney(a);
                  }
                }
              }),
              (n.requestSpin = function (e, n, t, i) {
                var c = {};
                (c.cmd = e ? 1307 : S.SPIN_RESULT),
                  (c.b = n),
                  (c.aid = t),
                  (c.ls = i),
                  (c.gid = this.getGameID());
                var r = [o.ZonePlugin_Type, "MiniGame", "slotMachinePlugin", c];
                a.emitLast(s.MiniSocketSend, r);
              }),
              (n.requestX2 = function (e) {
                var n = { cmd: 1306 };
                (n.gid = this.getGameID()), (n.aid = e);
                var t = [o.ZonePlugin_Type, "MiniGame", "slotMachinePlugin", n];
                a.emitLast(s.MiniSocketSend, t);
              }),
              (n.stopX2 = function (e) {
                var n = { cmd: 1309 };
                (n.gid = this.getGameID()), (n.aid = e);
                var t = [o.ZonePlugin_Type, "MiniGame", "slotMachinePlugin", n];
                a.emitLast(s.MiniSocketSend, t);
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
  "chunks:///_virtual/BaseSlotGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BaseFullScreenGameView.ts",
    "./State.ts",
    "./StringUtils.ts",
    "./PersistManager.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, r, s, o, l, a, u, c, p, h;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (s = e.cclegacy),
            (o = e._decorator),
            (l = e.Label),
            (a = e.VideoPlayer);
        },
        function (e) {
          u = e.BaseFullScreenGameView;
        },
        function (e) {
          c = e.state;
        },
        function (e) {
          p = e.StringUtils;
        },
        function (e) {
          h = e.PersistManager;
        },
      ],
      execute: function () {
        var f, b, d, v, S, g, w, _, m;
        s._RF.push({}, "c2317a5cG5KEZOGzZkM+hqo", "BaseSlotGameView", void 0);
        var C = o.ccclass,
          y = o.property;
        e(
          "BaseSlotGameView",
          ((f = C("BaseSlotGameView")),
          (b = y(l)),
          (d = y(l)),
          (v = y(a)),
          f(
            ((w = t(
              (g = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, s = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    s[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    n(t, "lblCoin", w, r(t)),
                    n(t, "lbl_freespinCount", _, r(t)),
                    n(t, "intro_video", m, r(t)),
                    (t.wonFreeSpins = 0),
                    (t.currentFreeSpin = 0),
                    (t.isSubcribed = !1),
                    (t.isTrial = !1),
                    (t._aid = 1),
                    (t.lineArr = []),
                    (t.bet = 0),
                    t
                  );
                }
                i(t, e);
                var s = t.prototype;
                return (
                  (s.start = function () {
                    this.show();
                  }),
                  (s.subscribe = function (e) {
                    var t;
                    void 0 === e && (e = !0),
                      null == (t = this.getNetworkController()) || t.connect(e);
                  }),
                  (s.requestSpin = function () {
                    var e;
                    null == (e = this.getNetworkController()) ||
                      e.requestSpin(
                        this.isTrial,
                        this.bet,
                        this._aid,
                        this.lineArr
                      );
                  }),
                  (s.onSocketClosed = function () {
                    console.log("socketClosed"),
                      this.forceMachineStop(!0, !0),
                      (this.isSubcribed = !1);
                  }),
                  (s.onRefreshMoney = function (e) {
                    var t = e.As,
                      i = (t.vip, t.gold);
                    t.chip, t.safe;
                    (c.gold = i),
                      this.lblCoin &&
                        (this.lblCoin.string = p.formatNumber(c.gold));
                  }),
                  (s.onUpdateJackpot = function (e) {
                    var t = e.Js;
                    this.updateJackpot(t, !1);
                  }),
                  (s.onSubcribeJackpot = function (e) {
                    var t = e.ls;
                    this.setLines(t);
                    var i = e.Js;
                    e.as;
                    null != e.asb && null != e.asb && (e.asb, e.asaid, e.asls);
                    for (var n = e.fss, r = 0; r < n.length; r++) {
                      var s = n[r];
                      if (1 == s.aid) {
                        for (var o = [], l = s.ls, a = 0; a < l.length; a++) {
                          var u = l[a];
                          o.push(u);
                        }
                        var c = s.b,
                          p = s.fs;
                        c == this.bet &&
                          ((this.wonFreeSpins = p),
                          (this.currentFreeSpin = p),
                          this.currentFreeSpin > 0 &&
                            (this.lbl_freespinCount &&
                              this.lbl_freespinCount.node.parent &&
                              (this.lbl_freespinCount.node.parent.active =
                                this.currentFreeSpin > 0),
                            this.lbl_freespinCount &&
                              (this.lbl_freespinCount.string =
                                this.currentFreeSpin.toString()),
                            this.setLines2(o)));
                      }
                    }
                    this.updateJackpot(i, !0),
                      (this.isSubcribed = !0),
                      this.intro_video && this.intro_video.node.active;
                  }),
                  (s.onSpinResult = function (e) {
                    if (null != e.mgs && null != e.mgs) {
                      var t = e.mgs;
                      return h.showNoti(t), void this.forceMachineStop(!0);
                    }
                    var i = e.wls,
                      n = e.aid,
                      r = e.mX,
                      s = e.sbs,
                      o = e.sid,
                      l = e.fss,
                      a = e.hMG,
                      u = null;
                    e.MG && (u = e.MG),
                      this.receiveData(n, r, i, s, o, l, a, u);
                  }),
                  (s.onX2Response = function (e) {}),
                  t
                );
              })(u)).prototype,
              "lblCoin",
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
            (_ = t(g.prototype, "lbl_freespinCount", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = t(g.prototype, "intro_video", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = g))
          ) || S)
        );
        s._RF.pop();
      },
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/base-slot",
    "chunks:///_virtual/base-slot"
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
