System.register(
  "chunks:///_virtual/Dealer_TXLiveStreamChatView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./TXLiveStreamChatItem.ts",
    "./TXLiveStreamChatWebSocketHandler.ts",
  ],
  function (t) {
    "use strict";
    var e, i, a, n, s, o, r, h, l, c, d, _, u, f, m, p, g;
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
          p = t.TXLiveStreamChatItem;
        },
        function (t) {
          g = t.default;
        },
      ],
      execute: function () {
        var y, v, b, w, S, C, T, z, L, D, I, B, E, P, x;
        s._RF.push(
          {},
          "60a89MQhCdOsp+3QROIMPTR",
          "Dealer_TXLiveStreamChatView",
          void 0
        );
        var M = o.ccclass,
          R = o.property;
        t(
          "default",
          ((y = M("Dealer_TXLiveStreamChatView")),
          (v = R(r)),
          (b = R(h)),
          (w = R(l)),
          (S = R(c)),
          (C = R([p])),
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
                  a(e, "chat_item", L, n(e)),
                  a(e, "edbChat", D, n(e)),
                  a(e, "scr_chat", I, n(e)),
                  a(e, "scr_chat_transform", B, n(e)),
                  a(e, "loaded_chat_items", E, n(e)),
                  a(e, "spacing_chat", P, n(e)),
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
                              n[e] &&
                                t.node.setPosition(
                                  new u(n[e].x, n[e].y, n[e].z)
                                );
                            })
                          : this.loaded_chat_items.forEach(function (t, e) {
                              n[e] &&
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
                      o = this.loaded_chat_items.shift();
                    o &&
                      ((o.node.active = !0),
                      o.show(n, s),
                      this.loaded_chat_items.push(o));
                  }
                  this.is_chat_layout_dirty = !0;
                }),
                (s.updateChat = function (t) {
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
                    h &&
                      this.chat_item &&
                      ((h.node.active = !0),
                      (h.node.parent = this.chat_item.parent),
                      o ? h.showNotifyMessage(n, s, r, !0) : h.show(n, s),
                      this.loaded_chat_items.push(h));
                  }
                  this.is_chat_layout_dirty = !0;
                }),
                (s.sendMes = function () {
                  if (null != this.edbChat) {
                    var t = this.edbChat.string.trim();
                    (this.edbChat.string = ""),
                      null != t &&
                        "" != t &&
                        g.getInstance().sendLoDeChatMessage(t);
                  }
                }),
                (s.reset = function () {}),
                e
              );
            })(m)).instance = null),
            (L = e((z = x).prototype, "chat_item", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = e(z.prototype, "edbChat", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(z.prototype, "scr_chat", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = e(z.prototype, "scr_chat_transform", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = e(z.prototype, "loaded_chat_items", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (P = e(z.prototype, "spacing_chat", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 5;
              },
            })),
            (T = z))
          ) || T)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/SicboLiveBetButton.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./TaiXiuLiveChipPooling.ts"],
  function (i) {
    "use strict";
    var t, e, o, n, r, p, s, l, c, h, a, u, f;
    return {
      setters: [
        function (i) {
          (t = i.applyDecoratedDescriptor),
            (e = i.inheritsLoose),
            (o = i.initializerDefineProperty),
            (n = i.assertThisInitialized);
        },
        function (i) {
          (r = i.cclegacy),
            (p = i._decorator),
            (s = i.Vec3),
            (l = i.Vec2),
            (c = i.tween),
            (h = i.UIOpacity),
            (a = i.UITransform),
            (u = i.Component);
        },
        function (i) {
          f = i.TaiXiuLiveChipPooling;
        },
      ],
      execute: function () {
        var d, g, w, C, v, y, _, b, B, P, m;
        r._RF.push({}, "5f612EZHYJNl5dGxGJI0Rbw", "SicboLiveBetButton", void 0);
        var T = p.ccclass,
          x = p.property;
        i(
          "TaiXiuLiveBetButton",
          ((d = T("SicboLiveBetButton")),
          (g = x(f)),
          (w = x(Boolean)),
          (C = x(Boolean)),
          (v = x(s)),
          d(
            ((b = t(
              (_ = (function (i) {
                function t() {
                  for (
                    var t, e = arguments.length, r = new Array(e), p = 0;
                    p < e;
                    p++
                  )
                    r[p] = arguments[p];
                  return (
                    (t = i.call.apply(i, [this].concat(r)) || this),
                    o(t, "chipPooling", b, n(t)),
                    o(t, "isChipOnRight", B, n(t)),
                    o(t, "isChipBelow", P, n(t)),
                    o(t, "fixedChipPosition", m, n(t)),
                    (t.chip_world_pos = new s(0, 0, 0)),
                    (t.chipTemplateSize = new l(20, 16)),
                    (t.uiTF = null),
                    t
                  );
                }
                e(t, i);
                var r = t.prototype;
                return (
                  (r.flyChipToButton = function (i) {
                    var t = this;
                    void 0 === i && (i = -1);
                    var e = this.chipPooling.getChip(i),
                      o = new s();
                    e.parent.inverseTransformPoint(o, this.chip_world_pos),
                      c(e)
                        .to(0.7, { position: o }, { easing: "expoOut" })
                        .delay(1)
                        .call(function () {
                          var i = e.getComponent(h);
                          c(i)
                            .to(0.5, { opacity: 0 })
                            .call(function () {
                              t.chipPooling.putBackChip(e), (i.opacity = 255);
                            })
                            .start();
                        })
                        .start();
                  }),
                  (r.calculateChipWPos = function () {
                    var i = this.uiTF.contentSize;
                    0 == this.fixedChipPosition.x &&
                    0 == this.fixedChipPosition.y
                      ? ((this.chip_world_pos.x =
                          ((this.isChipOnRight ? 1 : -1) * i.width) / 2 +
                          ((this.isChipOnRight ? -1 : 1) *
                            this.chipTemplateSize.x) /
                            2),
                        (this.chip_world_pos.y =
                          ((this.isChipBelow ? -1 : 1) * i.height) / 2 +
                          ((this.isChipBelow ? 1 : -1) *
                            this.chipTemplateSize.y) /
                            2))
                      : (this.chip_world_pos = this.fixedChipPosition),
                      (this.chip_world_pos = this.node
                        .getComponent(a)
                        .convertToWorldSpaceAR(this.chip_world_pos));
                  }),
                  t
                );
              })(u)).prototype,
              "chipPooling",
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
            (B = t(_.prototype, "isChipOnRight", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (P = t(_.prototype, "isChipBelow", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (m = t(_.prototype, "fixedChipPosition", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new s(0, 0, 0);
              },
            })),
            (y = _))
          ) || y)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/taixiu-livestream",
  [
    "./Dealer_TXLiveStreamChatView.ts",
    "./SicboLiveBetButton.ts",
    "./TXLiveStreamBetHistoryView.ts",
    "./TXLiveStreamChatController.ts",
    "./TXLiveStreamChatItem.ts",
    "./TXLiveStreamChatView.ts",
    "./TXLiveStreamChatWebSocketHandler.ts",
    "./TXLiveStreamGamePlayBridge.ts",
    "./TaiXiuBetButton.ts",
    "./TaiXiuLiveBetButton.ts",
    "./TaiXiuLiveChipPooling.ts",
    "./TaiXiuLiveStreamController.ts",
    "./TaiXiuLiveStreamNetworkHandler.ts",
    "./TaiXiuLiveStreamSessionAnalyticsView.ts",
    "./TaiXiuLivestreamBetRankView.ts",
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
  "chunks:///_virtual/TaiXiuBetButton.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BaseBetEntry.ts",
    "./TaiXiuLiveStreamController.ts",
    "./TaiXiuLiveChipPooling.ts",
  ],
  function (i) {
    "use strict";
    var t, e, n, o, r, s, l, a, p, h, u, c, f, d, B;
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
            (s = i._decorator),
            (l = i.Vec3),
            (a = i.Vec2),
            (p = i.UITransform),
            (h = i.randomRangeInt),
            (u = i.tween),
            (c = i.UIOpacity);
        },
        function (i) {
          f = i.BaseBetEntry;
        },
        function (i) {
          d = i.TaiXiuLiveStreamController;
        },
        function (i) {
          B = i.TaiXiuLiveChipPooling;
        },
      ],
      execute: function () {
        var y, C, g, w, v, T, _, m, P, b, x, z, X;
        r._RF.push({}, "66621aXaolNOKt4i72iLUU7", "TaiXiuBetButton", void 0);
        var R = s.ccclass,
          S = s.property;
        i(
          "TaiXiuBetButton",
          ((y = R("TaiXiuBetButton")),
          (C = S(B)),
          (g = S(Boolean)),
          (w = S(Boolean)),
          (v = S(l)),
          (T = S(l)),
          y(
            ((P = t(
              (m = (function (i) {
                function t() {
                  for (
                    var t, e = arguments.length, r = new Array(e), s = 0;
                    s < e;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (t = i.call.apply(i, [this].concat(r)) || this),
                    n(t, "chipPooling", P, o(t)),
                    n(t, "isChipOnRight", b, o(t)),
                    n(t, "isChipBelow", x, o(t)),
                    n(t, "fixedChipPosition", z, o(t)),
                    n(t, "offset", X, o(t)),
                    (t.chip_world_pos = new l(0, 0, 0)),
                    (t.chipTemplateSize = new a(20, 16)),
                    (t.uiTF = null),
                    (t.inited = !1),
                    t
                  );
                }
                e(t, i);
                var r = t.prototype;
                return (
                  (r.start = function () {
                    this.init();
                  }),
                  (r.init = function () {
                    this.inited ||
                      ((this.inited = !0),
                      (this.uiTF = this.node.getComponent(p)),
                      this.calculateChipWPos());
                  }),
                  (r.flyChipToButton = function (i) {
                    var t,
                      e,
                      n = this;
                    if (
                      (void 0 === i && (i = -1),
                      null == (t = d.getInstance()) || !t.isEndBet())
                    ) {
                      var o =
                        null == (e = this.chipPooling) ? void 0 : e.getChip(i);
                      if (o && o.parent) {
                        this.calculateChipWPos();
                        var r = new l();
                        o.parent.inverseTransformPoint(r, this.chip_world_pos),
                          (r.x += h(-7, 7) + this.offset.x),
                          (r.y += h(-2, 2) + this.offset.y),
                          u(o)
                            .to(0.7, { position: r }, { easing: "expoOut" })
                            .call(function () {
                              var i = o.getComponent(c);
                              u(i)
                                .delay(3)
                                .to(0.5, { opacity: 0 })
                                .call(function () {
                                  var t;
                                  null == (t = n.chipPooling) ||
                                    t.putBackChip(o),
                                    i && (i.opacity = 255);
                                })
                                .start();
                            })
                            .start();
                      }
                    }
                  }),
                  (r.calculateChipWPos = function () {
                    var i,
                      t = this.uiTF.contentSize;
                    0 == this.fixedChipPosition.x &&
                    0 == this.fixedChipPosition.y
                      ? ((this.chip_world_pos.x =
                          ((this.isChipOnRight ? 1 : -1) * t.width) / 2 +
                          ((this.isChipOnRight ? -1 : 1) *
                            this.chipTemplateSize.x) /
                            2),
                        (this.chip_world_pos.y =
                          ((this.isChipBelow ? -1 : 1) * t.height) / 2 +
                          ((this.isChipBelow ? 1 : -1) *
                            this.chipTemplateSize.y) /
                            2))
                      : (this.chip_world_pos = this.fixedChipPosition),
                      (this.chip_world_pos =
                        null == (i = this.node.getComponent(p))
                          ? void 0
                          : i.convertToWorldSpaceAR(this.chip_world_pos));
                  }),
                  (r.sendBet = function () {
                    i.prototype.sendBet.call(this);
                  }),
                  (r.setCurrentBet = function (t) {
                    t != this.currentBet &&
                      this.flyChipToButton(t - this.currentBet),
                      i.prototype.setCurrentBet.call(this, t);
                  }),
                  (r.updateBetInfo = function (t, e) {
                    this.totalBet != t &&
                      t != this.currentBet &&
                      this.flyChipToButton(),
                      i.prototype.updateBetInfo.call(this, t, e);
                  }),
                  t
                );
              })(f)).prototype,
              "chipPooling",
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
            (b = t(m.prototype, "isChipOnRight", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (x = t(m.prototype, "isChipBelow", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return !1;
              },
            })),
            (z = t(m.prototype, "fixedChipPosition", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new l(0, 0, 0);
              },
            })),
            (X = t(m.prototype, "offset", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return new l(0, 0, 0);
              },
            })),
            (_ = m))
          ) || _)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuLiveBetButton.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (t) {
    "use strict";
    var e, i, n, u;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          (i = t.cclegacy), (n = t._decorator), (u = t.Component);
        },
      ],
      execute: function () {
        var o;
        i._RF.push(
          {},
          "2a65cXjnFJJpIMQFrqfEst1",
          "TaiXiuLiveBetButton",
          void 0
        );
        var r = n.ccclass;
        n.property,
          t(
            "TaiXiuLiveBetButton",
            r("TaiXiuLiveBetButton")(
              (o = (function (t) {
                function i() {
                  return t.apply(this, arguments) || this;
                }
                return e(i, t), i;
              })(u))
            ) || o
          );
        i._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuLiveChipPooling.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc"],
  function (i) {
    "use strict";
    var t, e, n, o, r, s, p, h, a, l, c, u, f, g;
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
            (s = i._decorator),
            (p = i.Node),
            (h = i.SpriteFrame),
            (a = i.NodePool),
            (l = i.randomRangeInt),
            (c = i.Tween),
            (u = i.instantiate),
            (f = i.Sprite),
            (g = i.Component);
        },
      ],
      execute: function () {
        var C, P, v, b, y, d, m, S, T;
        r._RF.push(
          {},
          "9fbdbGVxpxAkJkWO1zTUg4+",
          "TaiXiuLiveChipPooling",
          void 0
        );
        var L = s.ccclass,
          k = s.property;
        i(
          "TaiXiuLiveChipPooling",
          ((C = L("TaiXiuLiveChipPooling")),
          (P = k(p)),
          (v = k([h])),
          (b = k(p)),
          C(
            ((m = t(
              (d = (function (i) {
                function t() {
                  for (
                    var t, e = arguments.length, r = new Array(e), s = 0;
                    s < e;
                    s++
                  )
                    r[s] = arguments[s];
                  return (
                    (t = i.call.apply(i, [this].concat(r)) || this),
                    n(t, "chip_template", m, o(t)),
                    n(t, "chipSprites", S, o(t)),
                    n(t, "content", T, o(t)),
                    (t.chipPool = void 0),
                    (t.listChips = []),
                    (t.listChipInPay = []),
                    (t.betValues = []),
                    t
                  );
                }
                e(t, i);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    this.chipPool = new a();
                  }),
                  (r.SetBetValues = function (i) {
                    this.betValues = i;
                  }),
                  (r.getChip = function (i) {
                    for (var t = -1, e = 0; e < this.betValues.length; e++)
                      if (this.betValues[e] === i) {
                        t = e;
                        break;
                      }
                    return (
                      -1 == t && (t = l(0, this.chipSprites.length)),
                      this.getChipMethod(t)
                    );
                  }),
                  (r.pushToPay = function (i) {
                    this.listChipInPay.push(i);
                  }),
                  (r.getListInPay = function () {
                    return this.listChipInPay;
                  }),
                  (r.getChipMethod = function (i) {
                    var t = null;
                    this.chipPool.size() > 0
                      ? ((t = this.chipPool.get()), c.stopAllByTarget(t))
                      : ((t = u(this.chip_template)), this.listChips.push(t));
                    var e = t.getComponent(f);
                    return (
                      this.chipSprites &&
                        this.chipSprites[i] &&
                        e &&
                        (e.spriteFrame = this.chipSprites[i]),
                      (t.parent = this.content
                        ? this.content
                        : this.node.parent),
                      t.setPosition(this.node.position),
                      (t.active = !0),
                      t
                    );
                  }),
                  (r.putBackAllChip = function () {
                    for (var i = 0; i < this.listChips.length; i++)
                      this.putBackChip(this.listChips[i]);
                    this.listChips = [];
                  }),
                  (r.putBackChip = function (i) {
                    (i.active = !1), this.chipPool.put(i);
                  }),
                  (r.clear = function () {
                    this.chipPool.clear();
                  }),
                  t
                );
              })(g)).prototype,
              "chip_template",
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
            (S = t(d.prototype, "chipSprites", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (T = t(d.prototype, "content", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: null,
            })),
            (y = d))
          ) || y)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuLivestreamBetRankView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./TaiXiuData.ts",
    "./GameConfigManager.ts",
    "./TaiXiuBetRankItemView.ts",
    "./HttpManager.ts",
  ],
  function (n) {
    "use strict";
    var t, a, e, i, r, o, s, u, c, l, p, f, h;
    return {
      setters: [
        function (n) {
          (t = n.applyDecoratedDescriptor),
            (a = n.inheritsLoose),
            (e = n.initializerDefineProperty),
            (i = n.assertThisInitialized);
        },
        function (n) {
          (r = n.cclegacy), (o = n._decorator), (s = n.ScrollView);
        },
        function (n) {
          u = n.CommonPopup;
        },
        function (n) {
          c = n.TaiXiuRankResult;
        },
        function (n) {
          l = n.GameConfigManager;
        },
        function (n) {
          p = n.default;
        },
        function (n) {
          (f = n.HttpCommand), (h = n.httpManager);
        },
      ],
      execute: function () {
        var m, k, v, d, w, _, y;
        r._RF.push(
          {},
          "25aa1Ha6yNP1pDc+8jBUOsi",
          "TaiXiuLivestreamBetRankView",
          void 0
        );
        var R = o.ccclass,
          g = o.property;
        n(
          "default",
          ((m = R("TaiXiuLivestreamBetRankView")),
          (k = g([p])),
          (v = g(s)),
          m(
            ((_ = t(
              (w = (function (n) {
                function t() {
                  for (
                    var t, a = arguments.length, r = new Array(a), o = 0;
                    o < a;
                    o++
                  )
                    r[o] = arguments[o];
                  return (
                    (t = n.call.apply(n, [this].concat(r)) || this),
                    e(t, "item_views", _, i(t)),
                    e(t, "srcView", y, i(t)),
                    (t._rank = []),
                    t
                  );
                }
                a(t, n);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    n.prototype.onLoad.call(this);
                  }),
                  (r.fetchRank = function () {
                    var n = this,
                      t = l.SAdomainURL + f.BET_RANK_URL_TAI_XIU;
                    h.sendGET({
                      url: t,
                      onCompleted: function (t) {
                        n._rank = [];
                        var a = (t = JSON.parse(t)).data;
                        if (null != a) {
                          for (var e = a.topUsers, i = 0; i < e.length; i++) {
                            var r = e[i],
                              o = new c();
                            (o.rank = i + 1),
                              (o.displayName = r.displayName),
                              (o.amount = r.income),
                              n._rank.push(o);
                          }
                          n.showRank();
                        }
                      },
                    });
                  }),
                  (r.showRank = function () {
                    var n,
                      t = this;
                    (this._rank = this._rank.sort(function (n, t) {
                      return n.rank - t.rank;
                    })),
                      this.item_views.forEach(function (n, a) {
                        var e = t._rank[a];
                        null != e && null != e
                          ? ((n.node.active = !0),
                            n.show(e.rank, e.displayName, e.amount))
                          : ((n.node.active = !1), n.hide());
                      }),
                      null == (n = this.srcView) || n.scrollToTop(),
                      this.show();
                  }),
                  (r.showTXLiveStreamBetRank = function (n) {
                    this._rank = [];
                    for (var t = 0; t < n.length; t++) {
                      var a = n[t],
                        e = new c();
                      (e.rank = a.r),
                        (e.displayName = a.dn),
                        (e.amount = a.m),
                        this._rank.push(e);
                    }
                    this.showRank();
                  }),
                  t
                );
              })(u)).prototype,
              "item_views",
              [k],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (y = t(w.prototype, "srcView", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = w))
          ) || d)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuLiveStreamController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BaseLiveStreamController.ts",
    "./BaseLiveStreamNetworkController.ts",
    "./TaiXiuData.ts",
    "./TaiXiuSessionHistoryView.ts",
    "./Define.ts",
    "./GameConfigManager.ts",
    "./StringUtils.ts",
    "./EventManager.ts",
    "./HttpManager.ts",
    "./PersistManager.ts",
    "./SocketManager.ts",
    "./SoundManager.ts",
    "./State.ts",
    "./TaiXiuLiveStreamNetworkHandler.ts",
    "./TXLiveStreamBetHistoryView.ts",
    "./TXLiveStreamChatController.ts",
    "./TXLiveStreamGamePlayBridge.ts",
    "./TaiXiuLiveStreamSessionAnalyticsView.ts",
    "./ScaleCmp.ts",
    "./TaiXiuLiveChipPooling.ts",
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
      _,
      w,
      f,
      g,
      b,
      m,
      v,
      S,
      y,
      B,
      V,
      T,
      I,
      C,
      x,
      k,
      X,
      L,
      N,
      H,
      R,
      P,
      E,
      M,
      A,
      D,
      F,
      O,
      z,
      W,
      U,
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
            (h = t.Button),
            (d = t.UIOpacity),
            (p = t.Node),
            (_ = t.sp),
            (w = t.AudioClip),
            (f = t.Toggle),
            (g = t.Tween),
            (b = t.tween),
            (m = t.Vec3),
            (v = t.director);
        },
        function (t) {
          (S = t.LiveGameState), (y = t.BaseLiveStreamController);
        },
        function (t) {
          B = t.LiveStreamMessage;
        },
        function (t) {
          (V = t.TaiXiuBetResult), (T = t.TaiXiuResult);
        },
        function (t) {
          I = t.default;
        },
        function (t) {
          (C = t.StorageKey), (x = t.GameID);
        },
        function (t) {
          k = t.GameConfigManager;
        },
        function (t) {
          X = t.StringUtils;
        },
        function (t) {
          (L = t.eventManager), (N = t.EventKey);
        },
        function (t) {
          H = t.httpManager;
        },
        function (t) {
          R = t.PersistManager;
        },
        function (t) {
          (P = t.MessageRequest), (E = t.GLOBAL_MESSAGE);
        },
        function (t) {
          M = t.SoundManager;
        },
        function (t) {
          A = t.state;
        },
        function (t) {
          D = t.TaiXiuLiveStreamNetworkHandler;
        },
        function (t) {
          F = t.default;
        },
        function (t) {
          O = t.default;
        },
        function (t) {
          z = t.TXLiveStreamGamePlayBridge;
        },
        function (t) {
          W = t.TaiXiuLiveStreamSessionAnalyticsView;
        },
        function (t) {
          U = t.default;
        },
        function (t) {
          G = t.TaiXiuLiveChipPooling;
        },
      ],
      execute: function () {
        var q,
          K,
          Y,
          j,
          J,
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
          _t,
          wt,
          ft,
          gt,
          bt,
          mt,
          vt,
          St,
          yt,
          Bt,
          Vt,
          Tt,
          It,
          Ct,
          xt,
          kt,
          Xt,
          Lt,
          Nt,
          Ht,
          Rt,
          Pt,
          Et,
          Mt,
          At,
          Dt,
          Ft,
          Ot,
          zt,
          Wt,
          Ut,
          Gt,
          qt,
          Kt,
          Yt,
          jt,
          Jt,
          Zt,
          Qt,
          $t,
          te,
          ee,
          ie,
          ne,
          se,
          oe,
          re,
          ae;
        o._RF.push(
          {},
          "059d3MCCNhEC411ADhKzVq1",
          "TaiXiuLiveStreamController",
          void 0
        );
        var le = r.ccclass,
          ue = r.property;
        a.isBrowser &&
          window.addEventListener("message", function (t) {
            var e,
              i = t.data;
            if ("video_play" == i)
              null == (e = ce.getInstance()) || e.onLoadedVideo();
            else if ("video_unmute" == i) {
              var n;
              null == (n = ce.getInstance()) || n.onVideoUnmute();
            }
          });
        var ce = t(
          "TaiXiuLiveStreamController",
          ((q = le("TaiXiuLiveStreamController")),
          (K = ue(l)),
          (Y = ue(l)),
          (j = ue(G)),
          (J = ue(u)),
          (Z = ue(u)),
          (Q = ue(u)),
          ($ = ue(u)),
          (tt = ue(u)),
          (et = ue(u)),
          (it = ue(u)),
          (nt = ue([c])),
          (st = ue([u])),
          (ot = ue(l)),
          (rt = ue(l)),
          (at = ue([c])),
          (lt = ue([c])),
          (ut = ue([c])),
          (ct = ue(h)),
          (ht = ue(h)),
          (dt = ue(d)),
          (pt = ue(I)),
          (_t = ue(I)),
          (wt = ue(p)),
          (ft = ue(h)),
          (gt = ue(p)),
          (bt = ue(l)),
          (mt = ue(_.Skeleton)),
          (vt = ue(w)),
          (St = ue(l)),
          (yt = ue(h)),
          (Bt = ue(W)),
          (Vt = ue(f)),
          (Tt = ue(u)),
          q(
            (((ae = (function (t) {
              function e() {
                for (
                  var e, i = arguments.length, o = new Array(i), r = 0;
                  r < i;
                  r++
                )
                  o[r] = arguments[r];
                return (
                  (e = t.call.apply(t, [this].concat(o)) || this),
                  n(e, "lbl_result", xt, s(e)),
                  n(e, "lbl_userOnlineTX", kt, s(e)),
                  n(e, "tai_xiu_live_chip_pooling", Xt, s(e)),
                  n(e, "spr_d1", Lt, s(e)),
                  n(e, "spr_d2", Nt, s(e)),
                  n(e, "spr_d3", Ht, s(e)),
                  n(e, "spr_tai", Rt, s(e)),
                  n(e, "spr_xiu", Pt, s(e)),
                  n(e, "spr_chan", Et, s(e)),
                  n(e, "spr_le", Mt, s(e)),
                  n(e, "sprFrame_dices", At, s(e)),
                  n(e, "spr_cau", Dt, s(e)),
                  n(e, "lbl_cau_tai", Ft, s(e)),
                  n(e, "lbl_cau_xiu", Ot, s(e)),
                  (e.cau_item_pos = []),
                  n(e, "sprFrame_cau", zt, s(e)),
                  n(e, "sprFrame_popup_cau", Wt, s(e)),
                  n(e, "sprFrame_popup_cau_chanle", Ut, s(e)),
                  n(e, "btn_prev_session", Gt, s(e)),
                  n(e, "btn_next_session", qt, s(e)),
                  n(e, "btn_next_session_opacity", Kt, s(e)),
                  n(e, "taiXiuSessionHistoryView", Yt, s(e)),
                  n(e, "taiXiuSessionHistoryDealerView", jt, s(e)),
                  n(e, "taiXiuBetHistoryViewNode", Jt, s(e)),
                  (e.taiXiuBetHistoryView = null),
                  n(e, "btn_session_history", Zt, s(e)),
                  n(e, "result_node", Qt, s(e)),
                  n(e, "refundMoney", $t, s(e)),
                  n(e, "ske_noti", te, s(e)),
                  n(e, "click_sfx", ee, s(e)),
                  n(e, "lbl_tang_qua", ie, s(e)),
                  n(e, "btn_session_analytics", ne, s(e)),
                  n(e, "taiXiuSessionAnalyticsView", se, s(e)),
                  n(e, "tog_sound_livestream", oe, s(e)),
                  n(e, "spr_countdown_circle", re, s(e)),
                  (e.result = []),
                  (e.currentSessionIndex = 0),
                  (e.taiXiuBetHistories = []),
                  (e.isRunningFx = !1),
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
                  return "TaiXiuLiveStreamController";
                }),
                (o.getBGMVideoURL = function () {
                  return "/789/res/bgm.mp3";
                }),
                (o.showMessage = function (t, e) {
                  var i = this;
                  a.isBrowser
                    ? R.showNoti(t, null, 0, 0)
                    : this.noti &&
                      (g.stopAllByTarget(this.noti),
                      (this.noti.opacity = 0),
                      (this.noti.node.children[1].getComponent(l).string = t),
                      (this.noti.node.active = !0),
                      b(this.noti)
                        .sequence(
                          b(this.noti).to(0.2, { opacity: 255 }),
                          b().delay(2),
                          b(this.noti)
                            .to(0.3, { opacity: 1 })
                            .call(function () {
                              i.noti && (i.noti.node.active = !1);
                            })
                        )
                        .start());
                }),
                (o.sendBetTriple = function () {
                  var t;
                  null == (t = this.basebetEntries[0]) || t.sendBetWithSfx();
                }),
                (o.sendBetTai = function () {
                  var t;
                  null == (t = this.basebetEntries[1]) || t.sendBetWithSfx();
                }),
                (o.sendBetXiu = function () {
                  var t;
                  null == (t = this.basebetEntries[2]) || t.sendBetWithSfx();
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
                    l,
                    u,
                    c = !1;
                  (this.settingPopup &&
                    this.settingPopup.IsShowing() &&
                    (this.settingPopup.close(), (c = !0)),
                  this.taiXiuBetHistoryView &&
                    null != (t = this.taiXiuBetHistoryView) &&
                    t.IsShowing()) &&
                    (null == (o = this.taiXiuBetHistoryView) ||
                      o.hideImmediately(),
                    (c = !0));
                  this.liveStreamTipRankView &&
                    null != (e = this.liveStreamTipRankView) &&
                    e.IsShowing() &&
                    (null == (r = this.liveStreamTipRankView) ||
                      r.hideImmediately(),
                    (c = !0));
                  this.liveStreamRankView &&
                    null != (i = this.liveStreamRankView) &&
                    i.IsShowing() &&
                    (null == (a = this.liveStreamRankView) ||
                      a.hideImmediately(),
                    (c = !0));
                  this.taiXiuSessionAnalyticsView &&
                    null != (n = this.taiXiuSessionAnalyticsView) &&
                    n.IsShowing() &&
                    (null == (l = this.taiXiuSessionAnalyticsView) ||
                      l.hideImmediately(),
                    (c = !0));
                  (this.taiXiuSessionHistoryView &&
                    this.taiXiuSessionHistoryView.IsShowing() &&
                    (this.taiXiuSessionHistoryView.hideImmediately(), (c = !0)),
                  this.scrollViewInfoPopup &&
                    this.scrollViewInfoPopup.IsShowing() &&
                    (this.scrollViewInfoPopup.hideImmediately(), (c = !0)),
                  this.giftPopup &&
                    null != (s = this.giftPopup) &&
                    s.isShowing()) &&
                    (null == (u = this.giftPopup) || u.hide(), (c = !0));
                  return c;
                }),
                (o.isShowingPopup = function () {
                  var t,
                    e,
                    i,
                    n,
                    s,
                    o = !1;
                  return (
                    this.settingPopup &&
                      this.settingPopup.IsShowing() &&
                      (o = !0),
                    this.taiXiuBetHistoryView &&
                      null != (t = this.taiXiuBetHistoryView) &&
                      t.IsShowing() &&
                      (o = !0),
                    this.liveStreamTipRankView &&
                      null != (e = this.liveStreamTipRankView) &&
                      e.IsShowing() &&
                      (o = !0),
                    this.liveStreamRankView &&
                      null != (i = this.liveStreamRankView) &&
                      i.IsShowing() &&
                      (o = !0),
                    this.taiXiuSessionAnalyticsView &&
                      null != (n = this.taiXiuSessionAnalyticsView) &&
                      n.IsShowing() &&
                      (o = !0),
                    this.taiXiuSessionHistoryView &&
                      this.taiXiuSessionHistoryView.IsShowing() &&
                      (o = !0),
                    this.scrollViewInfoPopup &&
                      this.scrollViewInfoPopup.IsShowing() &&
                      (o = !0),
                    this.giftPopup &&
                      null != (s = this.giftPopup) &&
                      s.isShowing() &&
                      (o = !0),
                    o
                  );
                }),
                (o.showSettingPopup = function () {
                  M.getInstance().playSfx(this.click_sfx),
                    this.settingPopup && this.settingPopup.show();
                }),
                (o.onLoad = function () {
                  var i,
                    n,
                    s,
                    o,
                    r,
                    l,
                    u,
                    c = this;
                  if (
                    ((this.networkController = new D(this)),
                    (e.instance = this),
                    t.prototype.onLoad.call(this),
                    (this.my_bet = [
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
                    ]),
                    this.taiXiuBetHistoryViewNode &&
                      (this.taiXiuBetHistoryView =
                        this.taiXiuBetHistoryViewNode.getComponent(F)),
                    null == (i = this.btn_cau_dealer) ||
                      i.node.on("click", function () {
                        var t;
                        z.closeMiniGameNode2(),
                          null == (t = c.taiXiuSessionHistoryDealerView) ||
                            t.showImmediately();
                      }),
                    null == (n = this.btn_session_analytics) ||
                      n.node.on("click", function () {
                        var t;
                        null == (t = c.settingPopup) || t.close(),
                          c.showThongKe(+c.sessionID - 1);
                      }),
                    this.btn_next_session &&
                      (this.btn_next_session_opacity =
                        this.btn_next_session.getComponent(d)),
                    null == (s = this.btn_next_session) ||
                      s.node.on("click", function () {
                        c.currentSessionIndex < c.result.length - 1 &&
                          (c.isRunningFx ||
                            (c.currentSessionIndex++, c.showCurrentResult()));
                      }),
                    null == (o = this.btn_prev_session) ||
                      o.node.on("click", function () {
                        c.currentSessionIndex > 0
                          ? c.isRunningFx ||
                            (c.currentSessionIndex--, c.showCurrentResult())
                          : c.showMessage("Phiên chưa kết thúc!");
                      }),
                    null == (r = this.tai_xiu_live_chip_pooling) ||
                      r.node.on("click", function () {
                        var t;
                        null == (t = c.userOnlinePopup) || t.show();
                      }),
                    null == (l = this.btn_session_history) ||
                      l.node.on("click", function () {
                        var t;
                        null == (t = c.taiXiuSessionHistoryView) || t.show();
                      }),
                    this.tog_sound_livestream &&
                      this.tog_sound_livestream.node.on("toggle", function () {
                        return c.soundOn();
                      }),
                    z.adjustPositionMiniGameNode(),
                    L.on(N.RefreshMoney, this, function (t) {
                      return c.refreshMoney(t);
                    }),
                    (this.cau_item_pos = this.spr_cau.map(function (t) {
                      return new m(
                        t.node.position.x,
                        t.node.position.y,
                        t.node.position.z
                      );
                    })),
                    a.isBrowser &&
                      (R.getInstance().showMinigame(!1),
                      a.browserType != a.BrowserType.SAFARI))
                  ) {
                    var h;
                    this.unMuteHtmlCallBack();
                    var p,
                      _ =
                        null == (h = this.webView)
                          ? void 0
                          : h.node.position.clone();
                    if (_)
                      (_.x = 3e3),
                        null == (p = this.webView) || p.node.setPosition(_);
                  }
                  null == (u = this.userOnlinePopup) ||
                    u.setBaseLiveStream(this);
                }),
                (o.start = function () {
                  t.prototype.start.call(this);
                }),
                (o.showThongKe = function (t) {
                  var e;
                  R.getInstance().showLoading();
                  var i = {};
                  (i.cmd = B.SESSION_ANALYTIC),
                    (i.sid = t),
                    null == (e = this.networkController) ||
                      e.sendWithZoneAndChannel(P.ZonePlugin_Type, i);
                }),
                (o.onWebViewLoaded = function (t) {
                  t &&
                    t.url.length > 0 &&
                    ((this.isLoadedWebView = !0), this.assignDataToWV());
                }),
                (o.assignDataToWV = function () {
                  var t, e;
                  if (!this.isEngineUpdated() && null != this.webView) {
                    var i = X.formatNumber(
                        null == (t = this.basebetEntries[1])
                          ? void 0
                          : t.getCurrentBet()
                      ),
                      n = X.formatNumber(
                        null == (e = this.basebetEntries[2])
                          ? void 0
                          : e.getCurrentBet()
                      );
                    this.webView.sendToWebView("moneyTai", i),
                      this.webView.sendToWebView("moneyXiu", n),
                      this.webView.sendToWebView(
                        "countDown",
                        (this.current_count_down < 10 ? "0" : "") +
                          this.current_count_down.toString()
                      ),
                      this.dealerName &&
                        this.webView.sendToWebView(
                          "setDealerName",
                          this.dealerName.string
                        );
                  }
                }),
                (o.updateHighlightStateToWV = function () {
                  this.webView && this.webView.sendToWebView("resetHighlight");
                }),
                (o.setWebViewDark = function (t) {
                  null != this.webView &&
                    (t
                      ? this.webView.sendToWebView("dark")
                      : this.webView.sendToWebView("light"));
                }),
                (o.update = function (t) {
                  this.isClosingGame ||
                    (this.isLoadedWebView &&
                      !this.isEngineUpdated() &&
                      (this.updateHighlightStateToWV(),
                      this.setWebViewDark(this.needToBlackWebView()),
                      this.needToHideWebView()
                        ? this.moveWebViewOutOfScreen()
                        : this.moveWebViewIntoScreen()));
                }),
                (o.releaseGame = function () {
                  var t, e;
                  this.destroyBgmPlayer(),
                    this.loading_node && (this.loading_node.active = !0),
                    (this.isClosingGame = !0),
                    this.webView &&
                      (this.webView.cleanUpWebview(!0), (this.webView = null)),
                    this.webViewBg &&
                      (this.webViewBg.cleanUpWebview(!0),
                      (this.webViewBg = null)),
                    this.stopCheckConnection(),
                    null == (t = this.networkController) || t.unsubcribe(),
                    null == (e = this.networkController) || e.close(),
                    z.closeAllPopup(),
                    z.closeMiniGameNode(),
                    this.endTransparentCanvas();
                }),
                (o.closeGame = function () {
                  this.releaseGame(), v.emit("INTEGRATION_BACK_TO_LOBBY");
                }),
                (o.connectToServer = function () {
                  var t;
                  R.getInstance().showLoading();
                  var e = k.getTaiXiuLiveStreamWSURL();
                  null == (t = this.networkController) || t.init(e);
                }),
                (o.initUI = function () {
                  this.resetUI(),
                    this.lbl_sessionID &&
                      (this.lbl_sessionID.string = "-------"),
                    this.lbl_time && (this.lbl_time.string = "------"),
                    this.lbl_countdown && (this.lbl_countdown.string = "00"),
                    this.updateUserInfoUI();
                }),
                (o.getHistories = function () {
                  var t;
                  R.getInstance().showLoading(),
                    (this.taiXiuBetHistories = []),
                    null == (t = this.taiXiuBetHistoryView) ||
                      t.fetchTaiXiuLiveStreamHistory(!0);
                }),
                (o.showHistory = function (t) {
                  var e,
                    i = this;
                  this.taiXiuBetHistories = [];
                  var n = t.items,
                    s = t.count;
                  n.forEach(function (t) {
                    var e = new V();
                    t.rs &&
                      ((e.d1 = +t.rs[0]), (e.d2 = +t.rs[1]), (e.d3 = +t.rs[2])),
                      (e.sessionID = t.sid);
                    var n = t.gS,
                      s = t.et,
                      o = new Date(s),
                      r = X.formatTime(o);
                    (e.betTime = r), (e.received = t.wm), (e.gs = n);
                    var a = t.bs;
                    (a = a.filter(function (t) {
                      return t.b > 0;
                    })),
                      (e.bet = a),
                      i.taiXiuBetHistories.push(e);
                  }),
                    null == (e = this.taiXiuBetHistoryView) ||
                      e.bindAndShowBetHistory(this.taiXiuBetHistories, s),
                    R.getInstance().hideLoading();
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
                (o.setGameState = function (t) {
                  var e,
                    i,
                    n = t[1],
                    s = n.sessionId,
                    o = n.status;
                  switch (
                    ((this.stopBetSecond =
                      n.stopBetSecond || this.stopBetSecond),
                    (this.totalTimeBet = n.timeBet),
                    (this.betValues = [
                      1e3, 5e3, 1e4, 5e4, 1e5, 5e5, 1e6, 5e6, 1e7,
                    ]),
                    null == (e = this.chipPanel) ||
                      e.initChipPanel(this.betValues, !0, !0),
                    null == (i = this.tai_xiu_live_chip_pooling) ||
                      i.SetBetValues(this.betValues),
                    o)
                  ) {
                    case "ENDED":
                      this.gameState = S.ENDED;
                      break;
                    case "RESULTING":
                      this.gameState = S.RESULTING;
                      break;
                    default:
                      this.gameState = S.BETTING;
                  }
                  var r = n.dealerName;
                  this.dealerName && (this.dealerName.string = "Bé " + r),
                    this.lbl_tang_qua &&
                      (this.lbl_tang_qua.string = "BÉ " + r.toUpperCase());
                  var a = n.startTime,
                    l = new Date(a);
                  this.lbl_time && (this.lbl_time.string = X.formatTime(l, !0));
                  var u = n.timeBetCountdown;
                  this.basebetEntries.forEach(function (t) {
                    return t.reset();
                  }),
                    this.spr_countdown_circle &&
                      (this.spr_countdown_circle.fillRange =
                        0 == this.current_count_down
                          ? 0
                          : this.current_count_down / this.totalTimeBet),
                    this.startCountDown(u),
                    (this.sessionID = s);
                  var c = n.bs;
                  this.updateRoundBetInfo(c);
                  var h = n.b;
                  this.updateUserBetInfo(h);
                  for (
                    var d = n.htr, p = d.length < 100 ? 0 : d.length - 100;
                    p < d.length;
                    p++
                  ) {
                    var _ = d[p],
                      w = new T();
                    (w.d1 = +_.resultRaw[0]),
                      (w.d2 = +_.resultRaw[1]),
                      (w.d3 = +_.resultRaw[2]),
                      (w.sessionID = _.sessionId),
                      (w.time = _.st),
                      this.result.push(w);
                  }
                  (this.isRunningFx = !1),
                    this.cancelLastXiNgauFx(),
                    this.spr_d1 && (this.spr_d1.node.active = !1),
                    this.spr_d2 && (this.spr_d2.node.active = !1),
                    this.spr_d3 && (this.spr_d3.node.active = !1),
                    this.updateCau(),
                    this.updateLastResult(),
                    this.updateBtnNext();
                }),
                (o.updateCau = function (t) {
                  var e,
                    i,
                    n = this;
                  void 0 === t && (t = !1);
                  var s;
                  if (
                    ((s = this.result
                      .map(function (t) {
                        if (null == t) return null;
                        var e = new T();
                        return (
                          (e.d1 = t.d1),
                          (e.d2 = t.d2),
                          (e.d3 = t.d3),
                          (e.sessionID = t.sessionID),
                          (e.time = t.time),
                          e
                        );
                      })
                      .filter(function (t) {
                        return t;
                      })),
                    null == (e = this.taiXiuSessionHistoryView) ||
                      e.setHistory(s),
                    null == (i = this.taiXiuSessionHistoryDealerView) ||
                      i.setHistory(s),
                    t)
                  ) {
                    var o = this.spr_cau.pop();
                    o && ((o.node.active = !1), this.spr_cau.unshift(o)),
                      this.spr_cau.forEach(function (t, e) {
                        g.stopAllByTarget(t.node), (t.node.active = !0);
                        var i = n.cau_item_pos[e],
                          s = t.getComponent(U);
                        s &&
                          i &&
                          (0 != e
                            ? ((s.enabled = !1),
                              s.stop(new m(1, 1, 1)),
                              b(t.node)
                                .to(0.4, { position: new m(i) })
                                .start())
                            : ((s.enabled = !0),
                              s.stop(new m(1, 1, 1)),
                              t.node.setPosition(new m(i.x, i.y + 10)),
                              b(t.node)
                                .sequence(
                                  b().delay(0.4),
                                  b().by(0.4, { position: new m(0, -10, 0) }),
                                  b().call(function () {
                                    s.run(1);
                                  })
                                )
                                .start()));
                      });
                  } else
                    this.spr_cau.forEach(function (t, e) {
                      var i = t.getComponent(U);
                      g.stopAllByTarget(t.node),
                        i &&
                          (0 != e
                            ? ((i.enabled = !1), i.stop(new m(1, 1, 1)))
                            : ((i.enabled = !0), i.run(1))),
                        (t.node.active = !0);
                      var s = n.cau_item_pos[e];
                      s && t.node.setPosition(s);
                    });
                  for (var r = 0, a = 0; a < this.spr_cau.length; a++) {
                    var l,
                      u,
                      c,
                      h =
                        null == (l = this.result[this.result.length - 1 - a])
                          ? void 0
                          : l.d1,
                      d =
                        null == (u = this.result[this.result.length - 1 - a])
                          ? void 0
                          : u.d2,
                      p =
                        null == (c = this.result[this.result.length - 1 - a])
                          ? void 0
                          : c.d3;
                    if (h && d && p) {
                      var _ = 0;
                      (_ = h + d + p > 10 ? 0 : 2),
                        (_ += (h + d + p) % 2 == 0 ? 1 : 0);
                      var w = this.sprFrame_cau[_];
                      (r += h + d + p > 10 ? 1 : 0),
                        w &&
                          this.spr_cau[a] &&
                          (this.spr_cau[a].spriteFrame = w);
                    }
                  }
                  var f = Math.floor((r / this.spr_cau.length) * 100);
                  this.lbl_cau_tai && (this.lbl_cau_tai.string = f + "%"),
                    this.lbl_cau_xiu &&
                      (this.lbl_cau_xiu.string = 100 - f + "%");
                }),
                (o.onSubcription = function () {
                  (this.result = []),
                    t.prototype.onSubcription.call(this),
                    O.getInstance().fetchChatBox();
                }),
                (o.loadLiveVideo = function () {
                  var t = this;
                  if (!this.isInterupt) {
                    var e = k.getStreamTokenUrl,
                      i = {};
                    (i.gameId = x.TAIXIULIVESTREAM_2),
                      a.isBrowser &&
                        (i.site = window.location.origin.split("//")[1]);
                    var n = JSON.stringify(i);
                    this.webView &&
                      a.isNative &&
                      this.webView.setOnMessage(function (e) {
                        return t.nativeHtmlCallBack(e);
                      });
                    var s = {
                      url: e,
                      data: n,
                      onCompleted: function (e) {
                        var i = JSON.parse(e).data,
                          n = i.streamName,
                          s = i.token,
                          o = t.isSoundOnLiveStream
                            ? "&isMutedByManual=0"
                            : "&isMutedByManual=1",
                          r = k.canOpenVideoSound()
                            ? "&isMuted=0"
                            : "&isMuted=1";
                        t.webView &&
                          ((t.webView.node.active = !0),
                          (t.webView.url = t.getLiveVideoUrl(n, s) + o + r)),
                          R.getInstance().hideLoading();
                      },
                    };
                    H.sendPOST(s);
                  }
                }),
                (o.getLiveVideoUrl = function (t, e) {
                  var i = localStorage.getItem("X_GAME_CONFIG") || "",
                    n = JSON.parse(i),
                    s = n.tx_livestream_video_url;
                  if (a.isNative)
                    return (
                      n[C.RsStaticDomain] +
                      s +
                      "?stream-name=" +
                      t +
                      "&jwtoken=" +
                      e
                    );
                  var o =
                    n.livestreamConfig && n.livestreamConfig.tx_live_video_url
                      ? n.livestreamConfig.tx_live_video_url
                      : "internal/livestream_page/taixiulive_789_withautoplay_05w.html";
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
                    ? e[C.RsStaticDomain] + i
                    : window.location.origin + i;
                }),
                (o.controllerHandleMessage = function (t, e, i) {
                  var n;
                  if (t == B.SESSION_ANALYTIC)
                    R.getInstance().hideLoading(),
                      null == (n = this.taiXiuSessionAnalyticsView) ||
                        n.showSessionAnalyticsTxLiveStreamThongKe(e);
                  else if (t == B.BET_MULTI);
                  else if (t == B.CHAT) O.getInstance().onReceivedChat(e);
                  else if (t == B.FETCH_CHAT_HISTORY)
                    O.getInstance().onFetchChatBox(e);
                  else if (t == B.FETCH_TOP) {
                    var s,
                      o,
                      r = e.d;
                    if ("BET" == e.t)
                      null == (s = this.liveStreamRankView) ||
                        s.showLiveStreamRank(r);
                    else
                      null == (o = this.liveStreamTipRankView) ||
                        o.showLiveStreamRank(r);
                  } else if (t == B.GET_BET_HISTORY) this.showHistory(e);
                  else if (t == E.REFRESH_MONEY) {
                    var a = e.As,
                      l = (a.vip, a.gold),
                      u = (a.chip, a.safe);
                    (A.gold = l), (A.goldSafe = u), this.refreshMoney(A.gold);
                  } else if (t == B.TOTAL_USER_ONLINE) {
                    var c = e.uC;
                    (this.userOnline = c),
                      this.lbl_userOnlineTX &&
                        (this.lbl_userOnlineTX.string = c);
                  }
                }),
                (o.updateBetInfo = function (e) {
                  t.prototype.updateBetInfo.call(this, e),
                    this.assignDataToWV();
                }),
                (o.updateBetInfoAnim = function () {
                  this.tai_xiu_live_chip_pooling &&
                    b(this.tai_xiu_live_chip_pooling.node)
                      .to(
                        0.1,
                        { scale: new m(1.1, 1.1, 1.1) },
                        { easing: "quadOut" }
                      )
                      .to(0.1, { scale: new m(1, 1, 1) }, { easing: "quadIn" })
                      .start();
                }),
                (o.updateRoundBetInfo = function (t) {
                  var e = this;
                  t.forEach(function (t) {
                    var i = t.eid,
                      n = t.uC,
                      s = t.v,
                      o = e.basebetEntries.find(function (t) {
                        return t.getName() == i;
                      });
                    o && o.updateBetInfo(s, n);
                  });
                }),
                (o.startGame = function (t) {
                  this.btn_datlai &&
                    (this.btn_datlai.interactable = this.isHasBetCache()),
                    this.btn_x2 &&
                      (this.btn_x2.interactable = this.isHasBetCache()),
                    (this.gameState = S.BETTING),
                    this.playNotiSkeAnim("datcuoc"),
                    M.getInstance().playAdditionalSfx(this.start_session_sfx),
                    this.resetUI(),
                    this.spr_countdown_circle &&
                      (this.spr_countdown_circle.fillRange = 1);
                  var e = t.timeBetCountdown;
                  this.startCountDown(e);
                  var i = t.sessionId;
                  this.sessionID = i;
                  var n = t.dealerName;
                  this.dealerName && (this.dealerName.string = "Bé " + n),
                    this.lbl_tang_qua &&
                      (this.lbl_tang_qua.string = "BÉ " + n.toUpperCase());
                  var s = t.startTime,
                    o = new Date(s);
                  this.lbl_time && (this.lbl_time.string = X.formatTime(o, !0)),
                    this.updateLastResult(!0),
                    this.assignDataToWV();
                }),
                (o.playNotiSkeAnim = function (t) {
                  var e = this;
                  this.ske_noti &&
                    this.ske_noti.node.parent &&
                    ((this.ske_noti.node.parent.active = !0),
                    this.ske_noti.setAnimation(0, t, !1),
                    this.ske_noti.setCompleteListener(function (t) {
                      e.ske_noti &&
                        e.ske_noti.node.parent &&
                        (e.ske_noti.node.parent.active = !1);
                    }));
                }),
                (o.startCountDown = function (t) {
                  var e = this;
                  if ((this.cancelLastXiNgauFx(), this.lbl_countdown)) {
                    if (
                      (g.stopAllByTarget(this.lbl_countdown),
                      (this.current_count_down = t),
                      (this.current_count_down = Math.round(
                        this.current_count_down
                      )),
                      this.current_count_down <= 0)
                    )
                      return void this.waitingForResult();
                    this.lbl_countdown.string =
                      (this.current_count_down < 10 ? "0" : "") +
                      this.current_count_down.toString();
                    b(this.lbl_countdown)
                      .repeat(
                        this.current_count_down,
                        b(this.lbl_countdown).sequence(
                          b().delay(1),
                          b().call(function () {
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
                              e.current_count_down <= 0
                                ? e.waitingForResult()
                                : e.current_count_down == e.stopBetSecond &&
                                  e.showMessage("Ngưng đặt cược"),
                              0 == e.current_count_down &&
                                (e.playNotiSkeAnim("ketqua"),
                                M.getInstance().playAdditionalSfx(
                                  e.end_session_sfx
                                )),
                              e.assignDataToWV();
                          })
                        )
                      )
                      .start();
                  }
                }),
                (o.finishGame = function (t) {
                  var e = this;
                  (this.gameState = S.ENDED),
                    this.showMessage("Kết thúc phiên!");
                  var i = t.dealerName;
                  this.dealerName && (this.dealerName.string = "Bé " + i),
                    this.lbl_tang_qua &&
                      (this.lbl_tang_qua.string = "BÉ " + i.toUpperCase());
                  var n = null,
                    s = t.wns,
                    o = 0;
                  s.forEach(function (t) {
                    t.uid == A.userID && ((o = t.wm), (n = t.m));
                  }),
                    (null == n && null == n) ||
                      ((A.gold = n),
                      this.lbl_money &&
                        (this.lbl_money.string = X.formatNumber(A.gold)));
                  var r = t.betTypeResult;
                  this.basebetEntries.forEach(function (t, i) {
                    (e.my_bet[i] = t.getCurrentBet()), t.gray();
                  }),
                    r.split(",").forEach(function (t) {
                      e.blinkBet(t);
                    });
                  var a = t.resultRaw,
                    l = new T(),
                    u = t.sessionId,
                    c = t.startTime;
                  (l.time = c),
                    (l.sessionID = u),
                    a &&
                      ((l.d1 = +a[0]),
                      (l.d2 = +a[1]),
                      (l.d3 = +a[2]),
                      this.result.push(l)),
                    this.updateCau(!0),
                    this.showResultText(o),
                    this.assignDataToWV();
                }),
                (o.showResultText = function (t) {
                  var e = this;
                  if (
                    !(t <= 0) &&
                    (M.getInstance().playAdditionalSfx(this.win_sfx),
                    this.result_node && this.refundMoney)
                  ) {
                    (this.result_node.active = !0),
                      g.stopAllByTarget(this.result_node),
                      (this.refundMoney.string =
                        t > 0 ? "+" + X.formatNumber(t) : ""),
                      this.refundMoney.node.setPosition(new m(0, -360, 0));
                    var i = this.result_node.getComponent(d);
                    i && (i.opacity = 255),
                      b(this.refundMoney.node)
                        .sequence(
                          b().to(0.5, { position: new m(0, 0, 0) }),
                          b().call(function () {}),
                          b().delay(4),
                          b().call(function () {
                            b(i)
                              .to(0.3, { opacity: 1 })
                              .call(function () {
                                e.result_node && (e.result_node.active = !1);
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
                (o.updateBtnNext = function () {
                  this.btn_next_session_opacity &&
                    this.btn_next_session &&
                    ((this.btn_next_session_opacity.opacity =
                      this.currentSessionIndex >= this.result.length - 1
                        ? 150
                        : 255),
                    this.currentSessionIndex >= this.result.length - 1
                      ? ((this.btn_next_session.interactable = !1),
                        (this.btn_next_session_opacity.opacity = 150))
                      : ((this.btn_next_session.interactable = !0),
                        (this.btn_next_session_opacity.opacity = 255)));
                }),
                (o.showCurrentResult = function (t) {
                  var e = this;
                  void 0 === t && (t = !1), this.updateBtnNext();
                  var i = this.result[this.currentSessionIndex];
                  if (t && i) {
                    (this.isRunningFx = !0), this.cancelLastXiNgauFx();
                    var n = i.d1,
                      s = i.d2,
                      o = i.d3;
                    if (this.spr_d1 && this.spr_d2 && this.spr_d3) {
                      var r = this.sprFrame_dices[n - 1];
                      r && (this.spr_d1.spriteFrame = r);
                      var a = this.sprFrame_dices[s - 1];
                      a && (this.spr_d2.spriteFrame = a);
                      var l = this.sprFrame_dices[o - 1];
                      l && (this.spr_d3.spriteFrame = l),
                        this.spr_d1.node.setPosition(new m(-82.282, 40.517, 0)),
                        this.spr_d2.node.setPosition(new m(-9.2, 40.517, 0)),
                        this.spr_d3.node.setPosition(new m(65.8, 40.517, 0)),
                        b(this.spr_d1.node)
                          .to(0.3, { position: new m(-82.282, -0.517, 0) })
                          .start(),
                        b(this.spr_d2.node)
                          .delay(0.1)
                          .to(0.3, { position: new m(-9.2, -0.517, 0) })
                          .start(),
                        b(this.spr_d3.node)
                          .delay(0.2)
                          .to(0.3, { position: new m(65.8, -0.517, 0) })
                          .call(function () {
                            (e.isRunningFx = !1), e.doBindUILastResult(i);
                          })
                          .start();
                    }
                  } else i && this.doBindUILastResult(i);
                }),
                (o.cancelLastXiNgauFx = function () {
                  if (this.spr_d1 && this.spr_d2 && this.spr_d3) {
                    var t = this.spr_d1.node,
                      e = this.spr_d2.node,
                      i = this.spr_d3.node;
                    g.stopAllByTarget(t),
                      g.stopAllByTarget(e),
                      g.stopAllByTarget(i),
                      t.setPosition(new m(-82.282, -0.517, 0)),
                      e.setPosition(new m(-9.2, -0.517, 0)),
                      i.setPosition(new m(65.8, -0.517, 0));
                  }
                }),
                (o.doBindUILastResult = function (t) {
                  if (
                    (this.cancelLastXiNgauFx(),
                    this.lbl_sessionID &&
                      (this.lbl_sessionID.string = "#" + t.sessionID),
                    this.spr_d1 && this.spr_d2 && this.spr_d3)
                  ) {
                    (this.spr_d1.node.active = !0),
                      (this.spr_d2.node.active = !0),
                      (this.spr_d3.node.active = !0);
                    var e = t.d1,
                      i = t.d2,
                      n = t.d3,
                      s = this.sprFrame_dices[e - 1];
                    s && this.spr_d1 && (this.spr_d1.spriteFrame = s);
                    var o = this.sprFrame_dices[i - 1];
                    o && this.spr_d2 && (this.spr_d2.spriteFrame = o);
                    var r = this.sprFrame_dices[n - 1];
                    r && this.spr_d3 && (this.spr_d3.spriteFrame = r),
                      this.lbl_result &&
                        (this.lbl_result.string = (e + i + n).toString()),
                      this.spr_tai &&
                        this.spr_xiu &&
                        this.spr_chan &&
                        this.spr_le &&
                        (e + i + n > 10
                          ? ((this.spr_tai.node.active = !0),
                            (this.spr_xiu.node.active = !1))
                          : ((this.spr_tai.node.active = !1),
                            (this.spr_xiu.node.active = !0)),
                        (e + i + n) % 2 == 0
                          ? ((this.spr_chan.node.active = !0),
                            (this.spr_le.node.active = !1))
                          : ((this.spr_chan.node.active = !1),
                            (this.spr_le.node.active = !0)));
                  }
                }),
                (o.blinkBet = function (t) {
                  this.basebetEntries.forEach(function (e) {
                    e.getName() == t && e.highlight();
                  });
                }),
                (o.unMuteHtmlCallBack = function () {
                  var t;
                  (k.isPassPolicySafari = !0),
                    this.coverNode && (this.coverNode.active = !1),
                    this.spr_countdown_circle &&
                      this.spr_countdown_circle.node.parent &&
                      a.isNative &&
                      this.spr_countdown_circle.node.parent.setPosition(
                        new m(285, 615, 0)
                      ),
                    this.initTransparentCanvas(),
                    null == (t = R.getInstance()) || t.showMinigame();
                }),
                (o.soundOn = function () {
                  this.isEngineUpdated() &&
                    this.isLoadedWebView &&
                    ((this.isSoundOnLiveStream = !this.isSoundOnLiveStream),
                    this.webView &&
                      this.webView.sendToWebView(
                        this.isSoundOnLiveStream ? "soundOn" : "soundOff"
                      ));
                }),
                (o.browserHtmlCallBack = function (t) {
                  "unMuteFromHtml" == t && this.unMuteHtmlCallBack(),
                    this.isEngineUpdated() ||
                      ("clickBetTai" == t
                        ? this.sendBetTai()
                        : "clickBetXiu" == t
                        ? this.sendBetXiu()
                        : "txClosePopup" == t
                        ? this.sendClosePopup()
                        : "txClickBackBtn" == t && this.showSettingPopup());
                }),
                (o.nativeHtmlCallBack = function (t) {
                  t.includes("txClosePopup") && this.sendClosePopup(),
                    t.includes("clickBlackScreen")
                      ? this.sendClosePopup()
                      : t.includes("clickBetTai")
                      ? this.sendBetTai()
                      : t.includes("clickBetXiu")
                      ? this.sendBetXiu()
                      : t.includes("txClickBackBtn") && this.showSettingPopup();
                }),
                (o.needToHideWebView = function () {
                  return (
                    !a.isBrowser &&
                    ((this.taiXiuSessionAnalyticsView &&
                      this.taiXiuSessionAnalyticsView.IsShowing()) ||
                      A.minigamesIsOverlap(this.wvUITransform) ||
                      !1)
                  );
                }),
                (o.needToBlackWebView = function () {
                  return this.isShowingPopup();
                }),
                e
              );
            })(y)).instance = null),
            (xt = e((Ct = ae).prototype, "lbl_result", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (kt = e(Ct.prototype, "lbl_userOnlineTX", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Xt = e(Ct.prototype, "tai_xiu_live_chip_pooling", [j], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Lt = e(Ct.prototype, "spr_d1", [J], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Nt = e(Ct.prototype, "spr_d2", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ht = e(Ct.prototype, "spr_d3", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Rt = e(Ct.prototype, "spr_tai", [$], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pt = e(Ct.prototype, "spr_xiu", [tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Et = e(Ct.prototype, "spr_chan", [et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Mt = e(Ct.prototype, "spr_le", [it], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (At = e(Ct.prototype, "sprFrame_dices", [nt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Dt = e(Ct.prototype, "spr_cau", [st], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Ft = e(Ct.prototype, "lbl_cau_tai", [ot], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ot = e(Ct.prototype, "lbl_cau_xiu", [rt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (zt = e(Ct.prototype, "sprFrame_cau", [at], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Wt = e(Ct.prototype, "sprFrame_popup_cau", [lt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Ut = e(Ct.prototype, "sprFrame_popup_cau_chanle", [ut], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Gt = e(Ct.prototype, "btn_prev_session", [ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (qt = e(Ct.prototype, "btn_next_session", [ht], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Kt = e(Ct.prototype, "btn_next_session_opacity", [dt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Yt = e(Ct.prototype, "taiXiuSessionHistoryView", [pt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (jt = e(Ct.prototype, "taiXiuSessionHistoryDealerView", [_t], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Jt = e(Ct.prototype, "taiXiuBetHistoryViewNode", [wt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Zt = e(Ct.prototype, "btn_session_history", [ft], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Qt = e(Ct.prototype, "result_node", [gt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($t = e(Ct.prototype, "refundMoney", [bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (te = e(Ct.prototype, "ske_noti", [mt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ee = e(Ct.prototype, "click_sfx", [vt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ie = e(Ct.prototype, "lbl_tang_qua", [St], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ne = e(Ct.prototype, "btn_session_analytics", [yt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (se = e(Ct.prototype, "taiXiuSessionAnalyticsView", [Bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (oe = e(Ct.prototype, "tog_sound_livestream", [Vt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (re = e(Ct.prototype, "spr_countdown_circle", [Tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (It = Ct))
          ) || It)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuLiveStreamNetworkHandler.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./SocketManager.ts",
    "./BaseLiveStreamNetworkController.ts",
  ],
  function (e) {
    "use strict";
    var t, n, r, i, o;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          n = e.cclegacy;
        },
        function (e) {
          (r = e.MessageRequest), (i = e.GLOBAL_MESSAGE);
        },
        function (e) {
          o = e.BaseLiveStreamNetworkController;
        },
      ],
      execute: function () {
        n._RF.push(
          {},
          "0f7f20deLJLyqyB5diAYnm5",
          "TaiXiuLiveStreamNetworkHandler",
          void 0
        );
        e(
          "TaiXiuLiveStreamNetworkHandler",
          (function (e) {
            function n() {
              return e.apply(this, arguments) || this;
            }
            t(n, e);
            var o = n.prototype;
            return (
              (o.getChannel = function () {
                return "Livestream";
              }),
              (o.getPluginName = function () {
                return "TaiXiuLivestreamPlugin";
              }),
              (o.getLogPrefix = function () {
                return "TaiXiuLiveStreamNetwordHandler";
              }),
              (o.sendRefreshMoney = function () {
                e.prototype.sendWithZoneAndChannel.call(
                  this,
                  r.ZonePlugin_Type,
                  { cmd: i.REFRESH_MONEY }
                );
              }),
              n
            );
          })(o)
        );
        n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TaiXiuLiveStreamSessionAnalyticsView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./TaiXiuSessionAnalyticsView.ts",
    "./TaiXiuLiveStreamController.ts",
    "./PersistManager.ts",
    "./StringUtils.ts",
  ],
  function (t) {
    "use strict";
    var i, s, e, n, r, a, o, l, u, c, h, _, p;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (s = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy), (a = t._decorator), (o = t.Button), (l = t.Vec3);
        },
        function (t) {
          (u = t.default), (c = t.TaiXiuAnalyticsDict);
        },
        function (t) {
          h = t.TaiXiuLiveStreamController;
        },
        function (t) {
          _ = t.PersistManager;
        },
        function (t) {
          p = t.StringUtils;
        },
      ],
      execute: function () {
        var g, m, d, f, v, b, w;
        r._RF.push(
          {},
          "157f3YB9aFJ9qFQmh8uSGMu",
          "TaiXiuLiveStreamSessionAnalyticsView",
          void 0
        );
        var y = a.ccclass,
          S = a.property;
        t(
          "TaiXiuLiveStreamSessionAnalyticsView",
          ((g = y("TaiXiuLiveStreamSessionAnalyticsView")),
          (m = S(o)),
          (d = S(o)),
          g(
            ((b = i(
              (v = (function (t) {
                function i() {
                  for (
                    var i, s = arguments.length, r = new Array(s), a = 0;
                    a < s;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(r)) || this),
                    e(i, "btn_prev_session", b, n(i)),
                    e(i, "btn_next_session", w, n(i)),
                    i
                  );
                }
                s(i, t);
                var r = i.prototype;
                return (
                  (r.onLoad = function () {
                    var i,
                      s,
                      e = this;
                    t.prototype.onLoad.call(this),
                      null == (i = this.btn_prev_session) ||
                        i.node.on("click", function () {
                          _.getInstance().showLoading(),
                            e.sendSessionAnalyticsCallback(
                              parseInt(e._sessionID) - 1
                            );
                        }),
                      null == (s = this.btn_next_session) ||
                        s.node.on("click", function () {
                          _.getInstance().showLoading(),
                            e.sendSessionAnalyticsCallback(
                              parseInt(e._sessionID) + 1
                            );
                        });
                  }),
                  (r.sendSessionAnalyticsCallback = function (t) {
                    var i;
                    null == (i = h.getInstance()) || i.showThongKe(t);
                  }),
                  (r.showSessionAnalyticsTxLiveStreamThongKe = function (t) {
                    var i;
                    if ("" != t.rs && null != t.rs) {
                      var s = t.sid,
                        e = t.htr,
                        n = +t.rs[0],
                        r = +t.rs[1],
                        a = +t.rs[2],
                        o = t.st;
                      (this._sessionID = s),
                        (this.currentPage_tai = 1),
                        (this.currentPage_xiu = 1);
                      var u,
                        h,
                        g,
                        m,
                        d,
                        f,
                        v,
                        b,
                        w = p.formatTimeJustHours(new Date(o)),
                        y = n + r + a;
                      if (y > 10)
                        null == (u = this.tai_scale_cmp) || u.run(0.9),
                          null == (h = this.xiu_scale_cmp) || h.stop(l.ONE);
                      else
                        null == (g = this.tai_scale_cmp) || g.stop(l.ONE),
                          null == (m = this.xiu_scale_cmp) || m.run(0.9);
                      if (y % 2 == 0)
                        null == (d = this.chan_scale_cmp) || d.run(1.4),
                          null == (f = this.le_scale_cmp) ||
                            f.stop(new l(1.4, 1.4, 1.4));
                      else
                        null == (v = this.chan_scale_cmp) ||
                          v.stop(new l(1.4, 1.4, 1.4)),
                          null == (b = this.le_scale_cmp) || b.run(1.4);
                      var S = this.sprFrame_dices[n - 1];
                      S && this.spr_d1 && (this.spr_d1.spriteFrame = S);
                      var T = this.sprFrame_dices[r - 1];
                      T && this.spr_d2 && (this.spr_d2.spriteFrame = T);
                      var x = this.sprFrame_dices[a - 1];
                      x && this.spr_d3 && (this.spr_d3.spriteFrame = x),
                        this.txt_sum && (this.txt_sum.string = y.toString()),
                        this.txt_session &&
                          (this.txt_session.string = "#" + s + " (" + w + ")"),
                        (this._thongKeTai = []),
                        (this._thongKeXiu = []);
                      for (
                        var L = e[0].bs,
                          X = e[3].bs,
                          D = e[1].bs,
                          A = e[2].bs,
                          P = 0;
                        P < L.length;
                        P++
                      ) {
                        var F = L[P],
                          K = F.m,
                          I = F.dn,
                          k = F.st,
                          N = new c();
                        (N.refund = 0),
                          (N.bet = K),
                          (N.eid = "Tài"),
                          (N.displayName = I),
                          (N.time = p.formatTimeJustHours(new Date(k))),
                          this._thongKeTai.push(N);
                      }
                      for (var C = 0; C < X.length; C++) {
                        var H = X[C],
                          J = H.m,
                          V = H.dn,
                          z = H.st,
                          M = new c();
                        (M.refund = 0),
                          (M.bet = J),
                          (M.eid = "Chẵn"),
                          (M.displayName = V),
                          (M.time = p.formatTimeJustHours(new Date(z))),
                          this._thongKeTai.push(M);
                      }
                      for (var B = 0; B < D.length; B++) {
                        var E = D[B],
                          O = E.m,
                          R = E.dn,
                          U = E.st,
                          j = new c();
                        (j.refund = 0),
                          (j.bet = O),
                          (j.eid = "Xỉu"),
                          (j.displayName = R),
                          (j.time = p.formatTimeJustHours(new Date(U))),
                          this._thongKeXiu.push(j);
                      }
                      for (var q = 0; q < A.length; q++) {
                        var G = A[q],
                          Q = G.m,
                          Y = G.dn,
                          W = G.st,
                          Z = new c();
                        (Z.refund = 0),
                          (Z.bet = Q),
                          (Z.eid = "Lẻ"),
                          (Z.displayName = Y),
                          (Z.time = p.formatTimeJustHours(new Date(W))),
                          this._thongKeXiu.push(Z);
                      }
                      this.showThongKe(1),
                        this.showThongKe(2),
                        this.lbl_page_tai &&
                          (this.lbl_page_tai.string =
                            this.currentPage_tai.toString() +
                            "/" +
                            this.getPageTai().toString()),
                        this.lbl_page_xiu &&
                          (this.lbl_page_xiu.string =
                            this.currentPage_xiu.toString() +
                            "/" +
                            this.getPageXiu().toString()),
                        0 == (null == (i = this.root) ? void 0 : i.active) &&
                          this.show();
                    } else _.showNoti("Phiên chưa kết thúc!");
                  }),
                  i
                );
              })(u)).prototype,
              "btn_prev_session",
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
            (w = i(v.prototype, "btn_next_session", [d], {
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
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TXLiveStreamBetHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./TaiXiuData.ts",
    "./TaiXiuBetHistoryItemView.ts",
    "./StringUtils.ts",
    "./PersistManager.ts",
    "./CommonPopup.ts",
    "./BaseLiveStreamNetworkController.ts",
    "./TaiXiuLiveStreamController.ts",
    "./MiniGameNetworkHandler.ts",
    "./SocketManager.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, r, a, o, s, l, u, c, g, h, p, m, d, f, b, v;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (o = e._decorator),
            (s = e.Button),
            (l = e.Label),
            (u = e.CCInteger),
            (c = e.UIOpacity);
        },
        function (e) {
          g = e.TaiXiuBetResult;
        },
        function (e) {
          h = e.default;
        },
        function (e) {
          p = e.StringUtils;
        },
        function (e) {
          m = e.PersistManager;
        },
        function (e) {
          d = e.CommonPopup;
        },
        function (e) {
          f = e.LiveStreamMessage;
        },
        function (e) {
          b = e.TaiXiuLiveStreamController;
        },
        null,
        function (e) {
          v = e.MessageRequest;
        },
      ],
      execute: function () {
        var _, w, y, P, S, T, B, x, L, H, I, X, C;
        a._RF.push(
          {},
          "4947d3jwHBJp4IbjHrTZscm",
          "TXLiveStreamBetHistoryView",
          void 0
        );
        var k = o.ccclass,
          D = o.property;
        e(
          "default",
          ((_ = k("TXLiveStreamBetHistoryView")),
          (w = D([h])),
          (y = D(s)),
          (P = D(s)),
          (S = D(l)),
          (T = D(u)),
          _(
            ((L = t(
              (x = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, a = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(a)) || this),
                    n(t, "item_views", L, r(t)),
                    n(t, "btn_prev", H, r(t)),
                    n(t, "btn_next", I, r(t)),
                    n(t, "lbl_page", X, r(t)),
                    n(t, "maxBetsPerLine", C, r(t)),
                    (t._bets = []),
                    (t.currentPage = 1),
                    (t.max_item = 6),
                    (t.max_pages = 500),
                    t
                  );
                }
                i(t, e);
                var a = t.prototype;
                return (
                  (a.onLoad = function () {
                    var t = this;
                    e.prototype.onLoad.call(this),
                      this.btn_prev &&
                        this.btn_prev.node.on("click", function () {
                          t.currentPage - 1 > 0 &&
                            ((t.currentPage -= 1),
                            t.lbl_page &&
                              (t.lbl_page.string = t.currentPage.toString())),
                            t.fetchTaiXiuLiveStreamHistory(!1);
                        }),
                      this.btn_next &&
                        this.btn_next.node.on("click", function () {
                          t.currentPage + 1 < t.max_pages &&
                            ((t.currentPage += 1),
                            t.lbl_page &&
                              (t.lbl_page.string = t.currentPage.toString())),
                            t.fetchTaiXiuLiveStreamHistory(!1);
                        }),
                      (this.max_item = this.item_views.length);
                  }),
                  (a.fetchTaiXiuLiveStreamHistory = function (e) {
                    var t, i;
                    void 0 === e && (e = !0),
                      e && this.goToFirstPage(),
                      m.getInstance().showLoading();
                    var n = {};
                    (n.cmd = f.GET_BET_HISTORY),
                      (n.limit = 6),
                      (n.skip = 6 * (this.currentPage - 1)),
                      null == (t = b.getInstance()) ||
                        null == (i = t.getNetworkHandler()) ||
                        i.sendWithZoneAndChannel(v.ZonePlugin_Type, n);
                  }),
                  (a.goToFirstPage = function () {
                    (this.currentPage = 1),
                      this.lbl_page &&
                        (this.lbl_page.string = this.currentPage.toString());
                  }),
                  (a.fetchHistory = function (e, t) {
                    this.goToFirstPage(), (this._bets = []);
                    for (var i = 0; i < e.length; i++) {
                      var n = e[i],
                        r = n.d1,
                        a = n.d2,
                        o = n.d3,
                        s = n.sid,
                        l = n.wm,
                        u = n.bs,
                        c = n.crt,
                        h = new Date(c),
                        m = p.formatTime(h),
                        d = new g();
                      (d.sessionID = s), (d.d1 = r), (d.d2 = a), (d.d3 = o);
                      for (var f = 0; f < u.length; f++) {
                        var b = u[f],
                          v = b.b;
                        1 == b.eid ? (d.taiBet = v) : (d.xiuBet = v);
                      }
                      (d.received = l),
                        (d.betTime = m),
                        (d.gs = 1),
                        this._bets.push(d);
                    }
                    this.showBetHistory();
                  }),
                  (a.bindAndShowBetHistory = function (e, t) {
                    var i = this;
                    (this._bets = e),
                      (this.max_pages = t / this.max_item + 1),
                      this.item_views.forEach(function (e, t) {
                        var n = e.node.getComponent(c),
                          r = i._bets[t];
                        null != r && null != r
                          ? (n && (n.opacity = 255),
                            e.show(
                              r.sessionID,
                              r.betTime,
                              r.eid,
                              r.d1,
                              r.d2,
                              r.d3,
                              r.taiBet,
                              r.xiuBet,
                              r.bet,
                              r.received,
                              r.gs,
                              i.maxBetsPerLine,
                              !0
                            ))
                          : (n && (n.opacity = 1), e.hide());
                      }),
                      this.IsShowing() ||
                        (this.setResolutionScale(this.fixedScale), this.show()),
                      m.getInstance().hideLoading();
                  }),
                  (a.showBetHistory = function (e) {
                    var t = this;
                    void 0 === e && (e = !0),
                      this.item_views.forEach(function (e, i) {
                        var n = e.node.getComponent(c),
                          r = (t.currentPage - 1) * t.max_item,
                          a = t._bets[i + r];
                        null != a && null != a
                          ? (n && (n.opacity = 255),
                            e.show(
                              a.sessionID,
                              a.betTime,
                              a.eid,
                              a.d1,
                              a.d2,
                              a.d3,
                              a.taiBet,
                              a.xiuBet,
                              a.bet,
                              a.received,
                              a.gs
                            ))
                          : (n && (n.opacity = 1), e.hide());
                      }),
                      e &&
                        (this.setResolutionScale(this.fixedScale), this.show());
                  }),
                  t
                );
              })(d)).prototype,
              "item_views",
              [w],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (H = t(x.prototype, "btn_prev", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = t(x.prototype, "btn_next", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (X = t(x.prototype, "lbl_page", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = t(x.prototype, "maxBetsPerLine", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 7;
              },
            })),
            (B = x))
          ) || B)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TXLiveStreamChatController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./State.ts",
    "./SocketManager.ts",
    "./BaseLiveStreamNetworkController.ts",
    "./TaiXiuLiveStreamController.ts",
    "./LiveStreamChatController.ts",
  ],
  function (t) {
    "use strict";
    var n, e, i, a, o, r, s, l;
    return {
      setters: [
        function (t) {
          n = t.inheritsLoose;
        },
        function (t) {
          (e = t.cclegacy), (i = t._decorator);
        },
        function (t) {
          a = t.state;
        },
        function (t) {
          o = t.MessageRequest;
        },
        function (t) {
          r = t.LiveStreamMessage;
        },
        function (t) {
          s = t.TaiXiuLiveStreamController;
        },
        function (t) {
          l = t.LiveStreamChatController;
        },
      ],
      execute: function () {
        var c, u;
        e._RF.push(
          {},
          "431ceGXlWBKkY3vOrNKVCQN",
          "TXLiveStreamChatController",
          void 0
        );
        var h = i.ccclass;
        i.property,
          t("ChatItemData", function () {
            (this.displayName = null), (this.message = null);
          }),
          t(
            "default",
            h("TXLiveStreamChatController")(
              (((u = (function (t) {
                function e() {
                  return t.apply(this, arguments) || this;
                }
                n(e, t),
                  (e.getInstance = function () {
                    return (
                      (null !== this._instance && void 0 !== this._instance) ||
                        (this._instance = new e()),
                      this._instance
                    );
                  });
                var i = e.prototype;
                return (
                  (i.onLoad = function () {
                    t.prototype.onLoad.call(this), (e._instance = this);
                  }),
                  (i.onChatBtnClick = function () {
                    var t,
                      n,
                      i,
                      l =
                        null == (t = this.chatEditBox)
                          ? void 0
                          : t.string.trim();
                    if ((!l || 0 != l.length) && null != l && "" != l)
                      if (
                        (this.chatEditBox && (this.chatEditBox.string = ""),
                        a.gold < 2e4)
                      ) {
                        var c;
                        null == (c = e.getInstance()) ||
                          c.addChatMessage(
                            "",
                            "Số dư của bạn phải trên 20.000 để có thể chat"
                          );
                      } else {
                        var u = {};
                        (u.cmd = r.CHAT),
                          (u.mgs = l),
                          null == (n = s.getInstance()) ||
                            null == (i = n.getNetworkHandler()) ||
                            i.sendWithZoneAndChannel(o.ZonePlugin_Type, u);
                      }
                  }),
                  (i.fetchChatBox = function () {
                    var t,
                      n,
                      e = {};
                    (e.cmd = r.FETCH_CHAT_HISTORY),
                      null == (t = s.getInstance()) ||
                        null == (n = t.getNetworkHandler()) ||
                        n.sendWithZoneAndChannel(o.ZonePlugin_Type, e);
                  }),
                  (i.onDestroy = function () {
                    e._instance = null;
                  }),
                  e
                );
              })(l)).SystemWarningName = "SystemWarning"),
              (u._instance = null),
              (c = u))
            ) || c
          );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TXLiveStreamChatItem.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./TXLiveStreamChatView.ts",
    "./State.ts",
  ],
  function (t) {
    "use strict";
    var e, i, s, n, r, a, o, f, l, c, h, _, g, x, m;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (s = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (a = t._decorator),
            (o = t.Label),
            (f = t.UITransform),
            (l = t.Node),
            (c = t.RichText),
            (h = t.Color),
            (_ = t.Size),
            (g = t.Component);
        },
        function (t) {
          x = t.default;
        },
        function (t) {
          m = t.state;
        },
      ],
      execute: function () {
        var T, p, I, d, u, y, P, v, O, S, b, z, w, D, L, R, Y;
        r._RF.push(
          {},
          "8a8c3xQQU5LMYOG9ArpVo74",
          "TXLiveStreamChatItem",
          void 0
        );
        var C = a.ccclass,
          N = a.property;
        t(
          "TXLiveStreamChatItem",
          ((T = C("TXLiveStreamChatItem")),
          (p = N(o)),
          (I = N(o)),
          (d = N(f)),
          (u = N(f)),
          (y = N(l)),
          (P = N([o])),
          (v = N(c)),
          T(
            ((b = e(
              (S = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    s(e, "txt_display", b, n(e)),
                    s(e, "txt_message", z, n(e)),
                    s(e, "nodeTranform", w, n(e)),
                    s(e, "txt_message_transform", D, n(e)),
                    s(e, "icon_notify", L, n(e)),
                    s(e, "txt_message_notify", R, n(e)),
                    s(e, "richText", Y, n(e)),
                    (e.IS_DIRTY = !0),
                    (e.originNodeHeight = 0),
                    e
                  );
                }
                i(e, t);
                var r = e.prototype;
                return (
                  (r.getUITransform = function () {
                    return this.nodeTranform;
                  }),
                  (r.update = function (t) {
                    var e, i;
                    ((this.originNodeHeight =
                      this.nodeTranform.contentSize.height),
                    null == (e = this.nodeTranform) ||
                      e.setContentSize(
                        this.txt_message_transform.contentSize.width,
                        this.txt_message_transform.contentSize.height
                      ),
                    this.nodeTranform.contentSize.height !=
                      this.originNodeHeight) &&
                      ((this.originNodeHeight =
                        this.nodeTranform.contentSize.height),
                      null == (i = x.getInstance()) || i.markAsDirty());
                    this.IS_DIRTY &&
                      this.nodeTranform.contentSize.width ==
                        this.txt_message_transform.contentSize.width &&
                      this.nodeTranform.contentSize.height ==
                        this.txt_message_transform.contentSize.height &&
                      (this.IS_DIRTY = !1);
                  }),
                  (r.isDirty = function () {
                    return this.IS_DIRTY;
                  }),
                  (r.show = function (t, e, i) {
                    var s,
                      n = "#ffa500";
                    null != t &&
                      t.length > 4 &&
                      t.indexOf("[TOP") >= 0 &&
                      (n = "#ffff00"),
                      t == m.displayName && (n = "#ffff00");
                    var r = "";
                    if (
                      (null != t &&
                        (t.indexOf("[TIP 1]") >= 0
                          ? ((t = t.replace("[TIP 1]", "")), (r = "Ě"))
                          : t.indexOf("[TIP 2]") >= 0
                          ? ((t = t.replace("[TIP 2]", "")), (r = "Š"))
                          : t.indexOf("[TIP 3]") >= 0
                          ? ((t = t.replace("[TIP 3]", "")), (r = "Č"))
                          : t.indexOf("[TIP 4]") >= 0
                          ? ((t = t.replace("[TIP 4]", "")), (r = "Ř"))
                          : t.indexOf("[TIP 5]") >= 0
                          ? ((t = t.replace("[TIP 5]", "")), (r = "Ž"))
                          : t.indexOf("[TIP 6]") >= 0
                          ? ((t = t.replace("[TIP 6]", "")), (r = "ě"))
                          : t.indexOf("[TIP 7]") >= 0
                          ? ((t = t.replace("[TIP 7]", "")), (r = "š"))
                          : t.indexOf("[TIP 8]") >= 0
                          ? ((t = t.replace("[TIP 8]", "")), (r = "č"))
                          : t.indexOf("[TIP 9]") >= 0
                          ? ((t = t.replace("[TIP 9]", "")), (r = "ř"))
                          : t.indexOf("[TIP 10]") >= 0 &&
                            ((t = t.replace("[TIP 10]", "")), (r = "ž"))),
                      e.indexOf("[TIP 1]") >= 0
                        ? ((e = e.replace("[TIP 1]", "")), (r = "Ě"))
                        : e.indexOf("[TIP 2]") >= 0
                        ? ((e = e.replace("[TIP 2]", "")), (r = "Š"))
                        : e.indexOf("[TIP 3]") >= 0
                        ? ((e = e.replace("[TIP 3]", "")), (r = "Č"))
                        : e.indexOf("[TIP 4]") >= 0
                        ? ((e = e.replace("[TIP 4]", "")), (r = "Ř"))
                        : e.indexOf("[TIP 5]") >= 0
                        ? ((e = e.replace("[TIP 5]", "")), (r = "Ž"))
                        : e.indexOf("[TIP 6]") >= 0
                        ? ((e = e.replace("[TIP 6]", "")), (r = "ě"))
                        : e.indexOf("[TIP 7]") >= 0
                        ? ((e = e.replace("[TIP 7]", "")), (r = "š"))
                        : e.indexOf("[TIP 8]") >= 0
                        ? ((e = e.replace("[TIP 8]", "")), (r = "č"))
                        : e.indexOf("[TIP 9]") >= 0
                        ? ((e = e.replace("[TIP 9]", "")), (r = "ř"))
                        : e.indexOf("[TIP 10]") >= 0 &&
                          ((e = e.replace("[TIP 10]", "")), (r = "ž")),
                      !(
                        (e = (e = (e = (e = (e = (e = (e = (e = (e = (e = (e =
                          e.replace(/Ě/g, "")).replace(/Š/g, "")).replace(
                          /Č/g,
                          ""
                        )).replace(/Ř/g, "")).replace(/Ž/g, "")).replace(
                          /ě/g,
                          ""
                        )).replace(/š/g, "")).replace(/č/g, "")).replace(
                          /ř/g,
                          ""
                        )).replace(/ž/g, "")).replace(/Ä/g, "")).length < 0
                      ))
                    ) {
                      if (this.richText) {
                        this.txt_message && (this.txt_message.node.active = !0),
                          this.txt_message &&
                            (this.txt_message_transform =
                              this.txt_message.getComponent(f)),
                          t && t.trim(),
                          e.trim();
                        var a = "#ffffff",
                          o = !0;
                        null == t && ((t = ""), (a = "ff0000"), (o = !1)),
                          null == e && (e = "unknown"),
                          (this.richText.string = "");
                        var l;
                        return (
                          o &&
                            (r.length > 0 && (t = " " + t),
                            (this.richText.string =
                              "<color=#ffffff>" +
                              r +
                              "</color><color=" +
                              n +
                              ">" +
                              t +
                              ":</color>")),
                          (l = r + t + ("" == t ? "" : ": ") + e),
                          this.txt_message &&
                            (this.txt_message.color = new h(a)),
                          this.txt_message && (this.txt_message.string = l),
                          void (this.IS_DIRTY = !0)
                        );
                      }
                      this.icon_notify && (this.icon_notify.active = !1),
                        this.txt_message_notify &&
                          this.txt_message_notify.length > 0 &&
                          this.txt_message_notify[0] &&
                          (this.txt_message_notify[0].node.parent.active = !1),
                        this.txt_display && (this.txt_display.node.active = !0),
                        this.txt_message && (this.txt_message.node.active = !0),
                        null == t &&
                          ((t = "??????"),
                          this.txt_display &&
                            (this.txt_display.node.active = !1)),
                        null == e && (e = "??????");
                      var c = new h("#FFA500");
                      if (t.length > 4)
                        "[TOP" == t.substr(0, 4) && (c = h.YELLOW);
                      t == m.displayName && (c = h.YELLOW),
                        this.txt_display && (this.txt_display.color = c),
                        this.txt_display && (this.txt_display.string = t + ":"),
                        null != (s = this.txt_display) && s.node.active
                          ? (this.txt_message &&
                              (this.txt_message.color = h.WHITE),
                            this.txt_message &&
                              (this.txt_message.string = t + ": " + e))
                          : (this.txt_message &&
                              (this.txt_message.color = h.RED),
                            this.txt_message && (this.txt_message.string = e)),
                        (this.IS_DIRTY = !0);
                    }
                  }),
                  (r.showNotifyMessage = function (t, e, i, s) {
                    if (
                      (void 0 === i && (i = !1),
                      void 0 === s && (s = !1),
                      this.richText)
                    ) {
                      if (
                        (this.txt_message &&
                          (this.txt_message.node.active = !1),
                        (this.txt_message_transform =
                          this.richText.getComponent(f)),
                        i)
                      )
                        this.richText.string =
                          "<color=#ffffff>Ä</color><color=#ff0000> " +
                          e[0] +
                          "</color>";
                      else {
                        var n = e[0],
                          r = "Ä",
                          a = !0;
                        n &&
                          (n.indexOf("TIP1_") >= 0
                            ? ((n = n.replace(/TIP1_/g, "")), (r += "Ě"))
                            : n.indexOf("TIP2_") >= 0
                            ? ((n = n.replace(/TIP2_/g, "")), (r += "Š"))
                            : n.indexOf("TIP3_") >= 0
                            ? ((n = n.replace(/TIP3_/g, "")), (r += "Č"))
                            : n.indexOf("TIP4_") >= 0
                            ? ((n = n.replace(/TIP4_/g, "")), (r += "Ř"))
                            : n.indexOf("TIP5_") >= 0
                            ? ((n = n.replace(/TIP5_/g, "")), (r += "Ž"))
                            : n.indexOf("TIP6_") >= 0
                            ? ((n = n.replace(/TIP6_/g, "")), (r += "ě"))
                            : n.indexOf("TIP7_") >= 0
                            ? ((n = n.replace(/TIP7_/g, "")), (r += "š"))
                            : n.indexOf("TIP8_") >= 0
                            ? ((n = n.replace(/TIP8_/g, "")), (r += "č"))
                            : n.indexOf("TIP9_") >= 0
                            ? ((n = n.replace(/TIP9_/g, "")), (r += "ř"))
                            : n.indexOf("TIP10_") >= 0
                            ? ((n = n.replace(/TIP10_/g, "")), (r += "ž"))
                            : (a = !1),
                          s ||
                            (n = !a && n.length > 9 ? n.substring(0, 9) : n));
                        var o = a ? " " : "";
                        this.richText.string =
                          "<color=#ffffff>" +
                          r +
                          "</color><color=#ffa500>" +
                          o +
                          n +
                          "</color><color=#ffffff> " +
                          e[1] +
                          "</color><color=#ffff00> " +
                          e[2] +
                          "</color>";
                      }
                      this.IS_DIRTY = !0;
                    } else {
                      if (
                        (this.icon_notify && (this.icon_notify.active = !0),
                        this.txt_message_notify &&
                          this.txt_message_notify.length > 0 &&
                          this.txt_message_notify[0] &&
                          (this.txt_message_notify[0].node.parent.active = !0),
                        this.txt_display && (this.txt_display.node.active = !1),
                        i)
                      )
                        this.txt_message_notify &&
                          this.txt_message_notify.length > 0 &&
                          this.txt_message_notify[0] &&
                          (this.txt_message_notify[0].node.parent.active = !1),
                          this.txt_message && (this.txt_message.color = h.RED),
                          this.txt_message &&
                            (this.txt_message.string = "       " + e[0]);
                      else {
                        var l,
                          c = e[0];
                        !s && c && (c = c.length > 9 ? c.substring(0, 9) : c),
                          null == (l = this.txt_message_transform) ||
                            l.setContentSize(
                              s ? new _(1560, 80) : new _(340, 28)
                            ),
                          this.txt_message &&
                            (this.txt_message.node.active = !1);
                        var g = new h("#FFA500");
                        this.txt_message_notify &&
                          (this.txt_message_notify[0] &&
                            (this.txt_message_notify[0].color = g),
                          this.txt_message_notify[2] &&
                            (this.txt_message_notify[2].color = h.YELLOW),
                          this.txt_message_notify[0] &&
                            (this.txt_message_notify[0].string = c + ""),
                          this.txt_message_notify[1] &&
                            (this.txt_message_notify[1].string = e[1] + ""),
                          this.txt_message_notify[2] &&
                            (this.txt_message_notify[2].string = e[2] + ""));
                      }
                      this.IS_DIRTY = !0;
                    }
                  }),
                  e
                );
              })(g)).prototype,
              "txt_display",
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
            (z = e(S.prototype, "txt_message", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = e(S.prototype, "nodeTranform", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = e(S.prototype, "txt_message_transform", [u], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(S.prototype, "icon_notify", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = e(S.prototype, "txt_message_notify", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Y = e(S.prototype, "richText", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = S))
          ) || O)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TXLiveStreamChatView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./TXLiveStreamChatItem.ts",
    "./TXLiveStreamChatWebSocketHandler.ts",
  ],
  function (t) {
    "use strict";
    var e, i, a, n, s, o, r, h, l, c, d, _, u, f, m, p, g;
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
          p = t.TXLiveStreamChatItem;
        },
        function (t) {
          g = t.default;
        },
      ],
      execute: function () {
        var y, b, v, w, C, S, T, z, L, I, B, x, D, E, P;
        s._RF.push(
          {},
          "2cea8MbrxBOroYbTWAemp+o",
          "TXLiveStreamChatView",
          void 0
        );
        var X = o.ccclass,
          A = o.property;
        t(
          "default",
          ((y = X("TXLiveStreamChatView")),
          (b = A(r)),
          (v = A(h)),
          (w = A(l)),
          (C = A(c)),
          (S = A([p])),
          y(
            (((P = (function (t) {
              function e() {
                for (
                  var e, i = arguments.length, s = new Array(i), o = 0;
                  o < i;
                  o++
                )
                  s[o] = arguments[o];
                return (
                  (e = t.call.apply(t, [this].concat(s)) || this),
                  a(e, "chat_item", L, n(e)),
                  a(e, "edbChat", I, n(e)),
                  a(e, "scr_chat", B, n(e)),
                  a(e, "scr_chat_transform", x, n(e)),
                  a(e, "loaded_chat_items", D, n(e)),
                  a(e, "spacing_chat", E, n(e)),
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
                      var a;
                      this.loaded_chat_items.filter(function (t) {
                        return t.isDirty();
                      }).length;
                      this.loaded_chat_items.forEach(function (t, i) {
                        if ((d.stopAllByTarget(t.node), i > 0)) {
                          var a = e.loaded_chat_items[i - 1].node.position,
                            n = new u(a.x, a.y, a.z);
                          e.loaded_chat_items &&
                            e.loaded_chat_items[i - 1] &&
                            (n.y -=
                              e.loaded_chat_items[i - 1].getUITransform()
                                .contentSize.height + e.spacing_chat),
                            t.node.setPosition(n);
                        }
                      });
                      for (
                        var n = [],
                          s = 8,
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
                              n[e] &&
                                t.node.setPosition(
                                  new u(n[e].x, n[e].y, n[e].z)
                                );
                            })
                          : this.loaded_chat_items.forEach(function (t, e) {
                              n[e] &&
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
                      o = this.loaded_chat_items.shift();
                    o &&
                      ((o.node.active = !0),
                      o.show(n, s),
                      this.loaded_chat_items.push(o));
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
                      h &&
                        this.chat_item &&
                        ((h.node.active = !0),
                        (h.node.parent = this.chat_item.parent),
                        o ? h.showNotifyMessage(n, s, r) : h.show(n, s),
                        this.loaded_chat_items.push(h));
                    }
                    this.is_chat_layout_dirty = !0;
                  }
                }),
                (s.sendMes = function () {
                  if (null != this.edbChat) {
                    var t = this.edbChat.string.trim();
                    (this.edbChat.string = ""),
                      t && g.getInstance().sendLoDeChatMessage(t);
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
            (L = e((z = P).prototype, "chat_item", [b], {
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
            (B = e(z.prototype, "scr_chat", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = e(z.prototype, "scr_chat_transform", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = e(z.prototype, "loaded_chat_items", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (E = e(z.prototype, "spacing_chat", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return 5;
              },
            })),
            (T = z))
          ) || T)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TXLiveStreamChatWebSocketHandler.ts",
  ["cc", "./TXLiveStreamChatController.ts", "./State.ts"],
  function (t) {
    "use strict";
    var e, n, s, o, i;
    return {
      setters: [
        function (t) {
          (e = t.cclegacy), (n = t._decorator), (s = t.log);
        },
        function (t) {
          o = t.default;
        },
        function (t) {
          i = t.state;
        },
      ],
      execute: function () {
        var c, a;
        t("WS_COMMAND", void 0),
          e._RF.push(
            {},
            "fd86cnH7MlDw7/tnzUsX0ek",
            "TXLiveStreamChatWebSocketHandler",
            void 0
          );
        var r,
          h = n.ccclass;
        n.property;
        !(function (t) {
          (t.LOG_IN = "login"),
            (t.FETCH_CHAT_BOX = "fetchChatBox"),
            (t.CHAT = "chat"),
            (t.ERROR = "error");
        })(r || (r = t("WS_COMMAND", {})));
        t(
          "default",
          h("TXLiveStreamChatWebSocketHandler")(
            (((a = (function () {
              function t() {
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
                  (this.onMessage = function (t) {}),
                  (this.onError = function (t) {}),
                  (this.onConnectSuccessfully = function () {}),
                  (this.WS_ROOM_NAME_CHAT = "tx_livestream");
              }
              t.getInstance = function () {
                return (
                  this._instance || (this._instance = new t()), this._instance
                );
              };
              var e = t.prototype;
              return (
                (e.init = function () {
                  this.name = "WebSocketHandler";
                }),
                (e.connect = function () {
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
                (e.onWSOpen = function (t) {
                  this.login();
                }),
                (e.login = function () {
                  s("WebSocketHandler login");
                  var t = {
                      command: r.LOG_IN,
                      accessToken: i.serverAccessToken,
                    },
                    e = JSON.stringify(t);
                  this.sendData(e);
                }),
                (e.onWsMessage = function (t) {
                  var e = JSON.parse(t.data);
                  switch (e.command) {
                    case r.LOG_IN:
                      (this.isLoggedIn = !0),
                        (this.noOfRetry = 0),
                        this.onConnectSuccessfully(),
                        this.fetchLoDeChatBox();
                      break;
                    case r.FETCH_CHAT_BOX:
                      var n = JSON.parse(t.data);
                      n.roomName == this.WS_ROOM_NAME_CHAT &&
                        o.getInstance().onFetchChatBox(n);
                      break;
                    case r.CHAT:
                      var i = JSON.parse(t.data);
                      i.roomName == this.WS_ROOM_NAME_CHAT &&
                        o.getInstance().onReceivedChat(i);
                      break;
                    case r.ERROR:
                      s("WS_COMMAND.ERROR:", e);
                  }
                }),
                (e.onWSClose = function (t) {
                  this.reconnect();
                }),
                (e.onWSError = function (t) {
                  this.reconnect();
                }),
                (e.sendData = function (t) {
                  var e;
                  null == (e = this.ws) || e.send(t);
                }),
                (e.fetchLoDeChatBox = function () {
                  var t = this;
                  if (this.isLoggedIn) {
                    s("WebSocketHandler fetch chat box");
                    var e = {
                        command: r.FETCH_CHAT_BOX,
                        roomName: this.WS_ROOM_NAME_CHAT,
                      },
                      n = JSON.stringify(e);
                    this.addQueue(n);
                  } else
                    setTimeout(function () {
                      t.fetchLoDeChatBox();
                    }, 1e3);
                }),
                (e.sendLoDeChatMessage = function (t) {
                  s("WebSocketHandler send chat message: " + t);
                  var e = {
                      command: r.CHAT,
                      roomName: this.WS_ROOM_NAME_CHAT,
                      message: t,
                    },
                    n = JSON.stringify(e);
                  this.addQueue(n);
                }),
                (e.addQueue = function (t) {
                  this.cmdQueue.push(t);
                }),
                (e.update = function (t) {
                  var e = this;
                  this.isLoggedIn &&
                    (this.cmdQueue.forEach(function (t) {
                      e.sendData(t);
                    }),
                    (this.cmdQueue = []));
                }),
                (e.close = function () {
                  s("WebSocketHandler close"),
                    (this.cmdQueue = []),
                    this.ws && (this.ws.close(), (this.ws = null)),
                    (this.allowAutoReconnect = !1),
                    clearTimeout(this.reconnectTimeoutId);
                }),
                (e.reconnect = function () {
                  s("WebSocketHandler reconnect");
                }),
                (e.needToReconnect = function () {
                  return (
                    !this.ws ||
                    (this.ws.readyState != this.ws.OPEN &&
                      this.ws.readyState != this.ws.CONNECTING)
                  );
                }),
                (e.onDestroy = function () {
                  this.close(), (t._instance = null);
                }),
                t
              );
            })())._instance = null),
            (c = a))
          ) || c
        );
        e._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/TXLiveStreamGamePlayBridge.ts",
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
          "240dcsuJzlP/aJPHXW+qimJ",
          "TXLiveStreamGamePlayBridge",
          void 0
        );
        e(
          "TXLiveStreamGamePlayBridge",
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

(function (r) {
  r(
    "virtual:///prerequisite-imports/taixiu-livestream",
    "chunks:///_virtual/taixiu-livestream"
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
