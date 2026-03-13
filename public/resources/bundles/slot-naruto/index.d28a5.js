System.register(
  "chunks:///_virtual/Diablo_EffectCmp.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./DiabloBonusView.ts",
    "./DiabloNoHuView.ts",
    "./SoundManager.ts",
  ],
  function (e) {
    "use strict";
    var i, n, t, o, a, l, r, s, c, u, b, f, p, d;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (l = e._decorator),
            (r = e.Node),
            (s = e.sp),
            (c = e.AudioClip),
            (u = e.tween),
            (b = e.Component);
        },
        function (e) {
          f = e.DiabloBonusView;
        },
        function (e) {
          p = e.DiabloNoHuView;
        },
        function (e) {
          d = e.SoundManager;
        },
      ],
      execute: function () {
        var h, _, w, k, g, E, m, v, y, B, N, I, C, A, S, V, z, F, D, O, T;
        e("EFFECT_TYPE", void 0),
          a._RF.push({}, "934c6Ha6EhNsr2u+1UUAeEz", "Diablo_EffectCmp", void 0);
        var P,
          H = l.ccclass,
          R = l.property;
        !(function (e) {
          (e[(e.FREE = 0)] = "FREE"),
            (e[(e.BIGWIN = 1)] = "BIGWIN"),
            (e[(e.JACKPOT = 2)] = "JACKPOT"),
            (e[(e.BONUS = 3)] = "BONUS");
        })(P || (P = e("EFFECT_TYPE", {})));
        e(
          "DiabloEffectCmp",
          ((h = H("DiabloEffectCmp")),
          (_ = R(r)),
          (w = R(s.Skeleton)),
          (k = R(s.Skeleton)),
          (g = R(p)),
          (E = R(f)),
          (m = R(c)),
          (v = R(c)),
          (y = R(c)),
          (B = R(c)),
          h(
            ((C = i(
              (I = (function (e) {
                function i() {
                  for (
                    var i, n = arguments.length, a = new Array(n), l = 0;
                    l < n;
                    l++
                  )
                    a[l] = arguments[l];
                  return (
                    (i = e.call.apply(e, [this].concat(a)) || this),
                    t(i, "black_screen", C, o(i)),
                    t(i, "freespin_skeleton", A, o(i)),
                    t(i, "bigwin_skeleton", S, o(i)),
                    t(i, "diabloNoHuView", V, o(i)),
                    t(i, "diabloBonusView", z, o(i)),
                    t(i, "bigwin_audio", F, o(i)),
                    t(i, "freespin_audio", D, o(i)),
                    t(i, "nohu_audio", O, o(i)),
                    t(i, "bonus_audio", T, o(i)),
                    i
                  );
                }
                n(i, e);
                var a = i.prototype;
                return (
                  (a.showEffect = function (e, i, n, t) {
                    var o = this;
                    switch (e) {
                      case P.BIGWIN:
                        d.getInstance().playAdditionalSfx(this.bigwin_audio),
                          (this.bigwin_skeleton.timeScale = i),
                          (this.black_screen.active = !1),
                          (this.bigwin_skeleton.node.active = !0),
                          this.bigwin_skeleton.setAnimation(0, "loop", !0),
                          u(this.bigwin_skeleton.node)
                            .sequence(
                              u().delay(n),
                              u().call(function () {
                                (o.black_screen.active = !1),
                                  (o.bigwin_skeleton.node.active = !1);
                              })
                            )
                            .start();
                        break;
                      case P.FREE:
                        d.getInstance().playAdditionalSfx(this.freespin_audio),
                          (this.freespin_skeleton.timeScale = i),
                          (this.black_screen.active = !1),
                          (this.freespin_skeleton.node.active = !0),
                          this.freespin_skeleton.setAnimation(0, "appear", !1),
                          this.freespin_skeleton.addAnimation(
                            0,
                            "animation",
                            !0
                          ),
                          u(this.freespin_skeleton.node)
                            .sequence(
                              u().delay(n),
                              u().call(function () {
                                (o.black_screen.active = !1),
                                  (o.freespin_skeleton.node.active = !1);
                              })
                            )
                            .start();
                        break;
                      case P.JACKPOT:
                        d.getInstance().playBgm(this.nohu_audio),
                          this.diabloNoHuView.show(t);
                        break;
                      case P.BONUS:
                        d.getInstance().playBgm(this.bonus_audio),
                          this.diabloBonusView.show(t, i);
                    }
                  }),
                  (a.hideEffect = function (e) {
                    switch (e) {
                      case P.BIGWIN:
                        (this.black_screen.active = !1),
                          (this.bigwin_skeleton.node.active = !1);
                        break;
                      case P.FREE:
                        (this.black_screen.active = !1),
                          (this.freespin_skeleton.node.active = !1);
                        break;
                      case P.JACKPOT:
                        this.diabloNoHuView.hide();
                        break;
                      case P.BONUS:
                        this.diabloBonusView.hide();
                    }
                  }),
                  (a.hideAll = function () {
                    this.hideEffect(P.BIGWIN),
                      this.hideEffect(P.FREE),
                      this.hideEffect(P.JACKPOT),
                      this.hideEffect(P.BONUS);
                  }),
                  (a.activeClick = function (e) {
                    switch (e) {
                      case P.BIGWIN:
                      case P.FREE:
                        break;
                      case P.JACKPOT:
                        this.diabloNoHuView.activeClick();
                    }
                  }),
                  i
                );
              })(b)).prototype,
              "black_screen",
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
            (A = i(I.prototype, "freespin_skeleton", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = i(I.prototype, "bigwin_skeleton", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = i(I.prototype, "diabloNoHuView", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = i(I.prototype, "diabloBonusView", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = i(I.prototype, "bigwin_audio", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = i(I.prototype, "freespin_audio", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = i(I.prototype, "nohu_audio", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = i(I.prototype, "bonus_audio", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = I))
          ) || N)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Diablo_SlotMachineCmp.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Diablo_SlotMachineColumn.ts",
    "./LineCmp.ts",
  ],
  function (n) {
    "use strict";
    var t, e, i, o, l, c, r, a, s, u, p, h, f, d;
    return {
      setters: [
        function (n) {
          (t = n.applyDecoratedDescriptor),
            (e = n.inheritsLoose),
            (i = n.initializerDefineProperty),
            (o = n.assertThisInitialized);
        },
        function (n) {
          (l = n.cclegacy),
            (c = n._decorator),
            (r = n.Tween),
            (a = n.tween),
            (s = n.Vec2),
            (u = n.Color),
            (p = n.Component);
        },
        function (n) {
          (h = n.default), (f = n.SlotMachineState);
        },
        function (n) {
          d = n.default;
        },
      ],
      execute: function () {
        var m, y, g, E, v, C, S, I;
        l._RF.push(
          {},
          "7bf21YvIA9E7bp1fQ9cWJah",
          "Diablo_SlotMachineCmp",
          void 0
        );
        var L = c.ccclass,
          w = c.property;
        n(
          "default",
          ((m = L("Diablo_SlotMachineCmp")),
          (y = w([h])),
          (g = w(d)),
          m(
            (((I = (function (n) {
              function t() {
                for (
                  var t, e = arguments.length, l = new Array(e), c = 0;
                  c < e;
                  c++
                )
                  l[c] = arguments[c];
                return (
                  (t = n.call.apply(n, [this].concat(l)) || this),
                  i(t, "colums", C, o(t)),
                  i(t, "lineCmp", S, o(t)),
                  (t.onMachineStopped = function () {}),
                  (t.stopped = !1),
                  t
                );
              }
              e(t, n);
              var l = t.prototype;
              return (
                (l.init = function () {
                  var n = this;
                  this.colums.forEach(function (n) {
                    return n.init();
                  }),
                    (this.colums[this.colums.length - 1].onStopped =
                      function () {
                        n.stopped || ((n.stopped = !0), n.onMachineStopped());
                      }),
                    this.hideWild(),
                    this.lineCmp.clear(),
                    r.stopAllByTarget(this.lineCmp.node);
                }),
                (l.spin = function () {
                  (this.stopped = !1),
                    this.lineCmp.clear(),
                    r.stopAllByTarget(this.lineCmp.node),
                    this.colums.forEach(function (n) {
                      return n.spin();
                    });
                }),
                (l.stop = function (n) {
                  var t = [0.3, 0.9, 1.3, 1.8, 2.5];
                  this.colums.forEach(function (e, i) {
                    var o = e,
                      l = [n[i], n[i + 5], n[i + 10]];
                    a(o.node)
                      .sequence(
                        a().delay(t[i]),
                        a().call(function () {
                          e.getstate() == f.SPINNING && o.stop(l);
                        })
                      )
                      .start();
                  });
                }),
                (l.stopImmediately = function (n) {
                  var t = [0.1, 0.1, 0.1, 0.1, 0.1];
                  this.colums.forEach(function (e, i) {
                    if (e.getstate() == f.SPINNING) {
                      var o = e;
                      r.stopAllByTarget(o.node);
                      var l = [n[i], n[i + 5], n[i + 10]];
                      a(o.node)
                        .sequence(
                          a().delay(t[i]),
                          a().call(function () {
                            o.stop(l);
                          })
                        )
                        .start();
                    }
                  });
                }),
                (l.isStopped = function () {
                  return (
                    this.colums.filter(function (n) {
                      return n.getstate() == f.STOPPED;
                    }).length >= this.colums.length
                  );
                }),
                (l.isSpinning = function () {
                  return (
                    this.colums.filter(function (n) {
                      return n.getstate() == f.SPINNING;
                    }).length >= this.colums.length
                  );
                }),
                (l.showWild = function (n) {
                  this.colums.forEach(function (t) {
                    return t.showWild(n);
                  });
                }),
                (l.hasWild = function () {
                  return (
                    this.colums.filter(function (n) {
                      return n.hasWild();
                    }).length > 0
                  );
                }),
                (l.hideWild = function () {
                  this.colums.forEach(function (n) {
                    return n.hideWild();
                  });
                }),
                (l.showLines = function (n, t, e, i) {
                  var o = this;
                  this.lineCmp.clear(), r.stopAllByTarget(this.lineCmp.node);
                  var l = 0,
                    c = t / n.length;
                  n.forEach(function (n) {
                    a(o.lineCmp.node)
                      .sequence(
                        a().delay(l),
                        a().call(function () {
                          o.drawLine(n, !1);
                        })
                      )
                      .start(),
                      (l += c);
                  }),
                    a(this.lineCmp.node)
                      .sequence(
                        a().delay(t + e),
                        a().call(function () {
                          i && i();
                        })
                      )
                      .start();
                }),
                (l.showEachLines = function (n, t) {
                  var e = this;
                  void 0 === t && (t = 0),
                    this.lineCmp.clear(),
                    r.stopAllByTarget(this.lineCmp.node);
                  var i = 0,
                    o = 0;
                  n.forEach(function (l) {
                    a(e.lineCmp.node)
                      .sequence(
                        a().delay(o),
                        a().call(function () {
                          e.playFxLine(l),
                            e.drawLine(l, !0),
                            ++i >= n.length &&
                              a(e.lineCmp.node)
                                .delay(1)
                                .call(function () {
                                  e.playFx(), e.lineCmp.clear();
                                })
                                .start();
                        })
                      )
                      .start(),
                      (o += t);
                  });
                }),
                (l.drawLine = function (n, e) {
                  var i = this,
                    o = t.LINE[n].map(function (n, t) {
                      return i.colums[t].getLineWorldPosition()[n];
                    });
                  this.lineCmp.draw(
                    o.map(function (n) {
                      return new s(n.x, n.y);
                    }),
                    5,
                    new u("#FF993B"),
                    null,
                    e
                  );
                }),
                (l.playFxLine = function (n) {
                  var e = this;
                  t.LINE[n].forEach(function (n, t) {
                    e.colums[t].playFx(n);
                  });
                }),
                (l.playFx = function () {
                  var n = this;
                  [
                    [0, 1, 2],
                    [0, 1, 2],
                    [0, 1, 2],
                    [0, 1, 2],
                    [0, 1, 2],
                  ].forEach(function (t, e) {
                    var i = n.colums[e];
                    t.forEach(function (n) {
                      i.playFx(n, !1);
                    });
                  });
                }),
                t
              );
            })(p)).SPIN_SPEED = 2e3),
            (I.TIME_TO_SHOW_RESULT = 0.5),
            (I.FIXED_DELTA_TIME = 0.016666000000004715),
            (I.LINE = [
              [2, 2, 2],
              [1, 1, 1],
              [0, 0, 0],
              [2, 0, 2],
              [0, 2, 0],
              [2, 1, 2],
              [2, 1, 0],
              [0, 1, 2],
              [1, 0, 1],
              [1, 2, 1],
              [0, 1, 0],
              [2, 2, 1],
              [1, 1, 0],
              [1, 1, 2],
              [0, 0, 1],
              [1, 2, 2],
              [0, 1, 1],
              [2, 1, 1],
              [1, 0, 0],
              [2, 0, 1],
            ]),
            (C = t((v = I).prototype, "colums", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (S = t(v.prototype, "lineCmp", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = v))
          ) || E)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Diablo_SlotMachineColumn.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./DiabloFullScreenGameView.ts",
    "./Diablo_SlotMachineCmp.ts",
    "./Diablo_SlotMachineItemView.ts",
  ],
  function (t) {
    "use strict";
    var i, n, o, e, s, a, r, c, h, p, m, l, u, f, _, y;
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
            (a = t._decorator),
            (r = t.Node),
            (c = t.Layout),
            (h = t.Sprite),
            (p = t.UITransform),
            (m = t.Vec3),
            (l = t.tween),
            (u = t.Component);
        },
        function (t) {
          f = t.DiabloFullScreenGameView;
        },
        function (t) {
          _ = t.default;
        },
        function (t) {
          y = t.default;
        },
      ],
      execute: function () {
        var d, g, S, E, I, C, b, P, v, T, w;
        t("SlotMachineState", void 0),
          s._RF.push(
            {},
            "ff6097UK39LNYhEjiGxcSzk",
            "Diablo_SlotMachineColumn",
            void 0
          );
        var N,
          D = a.ccclass,
          O = a.property;
        !(function (t) {
          (t[(t.SPINNING = 0)] = "SPINNING"),
            (t[(t.CHECK_TO_STOP = 1)] = "CHECK_TO_STOP"),
            (t[(t.STOPPING = 2)] = "STOPPING"),
            (t[(t.STOPPED = 3)] = "STOPPED");
        })(N || (N = t("SlotMachineState", {})));
        t(
          "default",
          ((d = D("Diablo_SlotMachineColumn")),
          (g = O([r])),
          (S = O(r)),
          (E = O(y)),
          (I = O(c)),
          d(
            ((P = i(
              (b = (function (t) {
                function i() {
                  for (
                    var i, n = arguments.length, s = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(s)) || this),
                    o(i, "items", P, e(i)),
                    o(i, "lineNode", v, e(i)),
                    o(i, "wild_item", T, e(i)),
                    o(i, "layout", w, e(i)),
                    (i.state = N.STOPPED),
                    (i.item_position_y_limited = 0),
                    (i.item_position_y_top = 0),
                    (i.item_position_y_bottom = 0),
                    (i.item_position_y_stop = 0),
                    (i.item_top = null),
                    (i.bouncing_offset = 0),
                    (i.distance = 0),
                    (i.onStopped = function () {}),
                    i
                  );
                }
                n(i, t);
                var s = i.prototype;
                return (
                  (s.getLineWorldPosition = function () {
                    return this.lineNode
                      .getComponentsInChildren(h)
                      .map(function (t) {
                        return t.node.parent
                          .getComponent(p)
                          .convertToWorldSpaceAR(new m(t.node.position));
                      });
                  }),
                  (s.onLoad = function () {
                    (this.item_position_y_bottom = this.items[0].position.y),
                      (this.bouncing_offset =
                        this.items[0].getComponent(p).contentSize.height / 20),
                      (this.item_position_y_stop =
                        this.item_position_y_bottom - this.bouncing_offset),
                      (this.item_position_y_top =
                        this.items[this.items.length - 1].position.y),
                      (this.item_position_y_limited =
                        this.item_position_y_bottom -
                        (this.items[0].getComponent(p).contentSize.height +
                          this.layout.spacingY)),
                      (this.distance =
                        3 *
                        (this.layout.spacingY +
                          this.items[0].getComponent(p).contentSize.height));
                  }),
                  (s.init = function () {
                    (this.state = N.STOPPED),
                      this.items.forEach(function (t) {
                        t.getComponentsInChildren(y).forEach(function (t) {
                          return t.init();
                        });
                      });
                    var t = this.getBottomItem();
                    this.items.forEach(function (i) {
                      var n = i.getComponentsInChildren(y);
                      i.name != t.name
                        ? n.forEach(function (t, i) {
                            t.disable();
                          })
                        : n.forEach(function (t, i) {
                            t.playFx();
                          });
                    });
                  }),
                  (s.spin = function () {
                    (this.item_top = this.getTopItem()),
                      this.items.forEach(function (t) {
                        t.getComponentsInChildren(y).forEach(function (t) {
                          return t.blur();
                        });
                      }),
                      (this.state = N.SPINNING),
                      (this.wild_item.node.active = !1);
                  }),
                  (s.stop = function (t) {
                    (this.item_top = this.getTopItem()),
                      this.item_top
                        .getComponentsInChildren(y)
                        .forEach(function (i, n) {
                          i.setItem(t[n]), i.bright();
                        }),
                      (this.state = N.CHECK_TO_STOP);
                  }),
                  (s.getstate = function () {
                    return this.state;
                  }),
                  (s.update = function (t) {
                    switch (this.state) {
                      case N.SPINNING:
                        this.spinning(t);
                        break;
                      case N.CHECK_TO_STOP:
                        this.checkToStop(t);
                    }
                  }),
                  (s.getTopItem = function () {
                    var t = this.items[0];
                    return (
                      this.items.forEach(function (i) {
                        i.position.y >= t.position.y && (t = i);
                      }),
                      t
                    );
                  }),
                  (s.getBottomItem = function () {
                    var t = this.items[0];
                    return (
                      this.items.forEach(function (i) {
                        i.position.y < t.position.y && (t = i);
                      }),
                      t
                    );
                  }),
                  (s.spinning = function (t) {
                    var i = this,
                      n = !1;
                    this.items.forEach(function (t) {
                      var o = new m(t.position);
                      (o.y -= _.SPIN_SPEED * _.FIXED_DELTA_TIME),
                        o.y <= i.item_position_y_limited &&
                          ((o.y = i.item_position_y_top), (n = !0)),
                        (t.position = o);
                    }),
                      n && this.sort();
                  }),
                  (s.sort = function () {
                    this.items = this.items.sort(function (t, i) {
                      return t.position.y < i.position.y ? -1 : 1;
                    });
                  }),
                  (s.checkToStop = function (t) {
                    var i = this;
                    this.items.forEach(function (t) {
                      var n = new m(t.position);
                      (n.y -= _.SPIN_SPEED * _.FIXED_DELTA_TIME),
                        n.y <= i.item_position_y_limited &&
                          (n.y = i.item_position_y_top),
                        (t.position = n);
                    }),
                      this.item_top.position.y <= this.item_position_y_stop &&
                        (this.bounce(), (this.state = N.STOPPING));
                  }),
                  (s.bounce = function () {
                    var t = this;
                    this.sort();
                    var i = new m(this.item_top.position);
                    (i.y = this.item_position_y_stop),
                      this.item_top.setPosition(i),
                      this.items.forEach(function (i, n) {
                        if (i.name != t.item_top.name) {
                          var o = new m(i.position);
                          (o.y =
                            0 == n
                              ? t.items[n + 1].position.y -
                                (t.layout.spacingY +
                                  t.items[n + 1].getComponent(p).contentSize
                                    .height)
                              : t.items[n - 1].position.y +
                                t.layout.spacingY +
                                t.items[n - 1].getComponent(p).contentSize
                                  .height),
                            (i.position = o);
                        }
                      });
                    var n =
                      Math.abs(this.item_position_y_stop) -
                      Math.abs(this.item_position_y_bottom);
                    this.items.forEach(function (i) {
                      l(i)
                        .sequence(
                          l().by(0.1, { position: new m(0, n, 0) }),
                          l().call(function () {
                            (t.state = N.STOPPED),
                              f.getInstance().playColumnStopEnd(),
                              f.getInstance().isFastSpin()
                                ? t.items.forEach(function (i) {
                                    var n = i.getComponentsInChildren(y);
                                    i.name != t.item_top.name &&
                                      n.forEach(function (t, i) {
                                        t.disable();
                                      });
                                  })
                                : t.items.forEach(function (i) {
                                    var n = i.getComponentsInChildren(y);
                                    i.name != t.item_top.name
                                      ? n.forEach(function (t, i) {
                                          t.disable();
                                        })
                                      : n.forEach(function (t, i) {
                                          t.playFx();
                                        });
                                  });
                          }),
                          l()
                            .delay(0.3)
                            .call(function () {
                              t.onStopped && t.onStopped();
                            })
                        )
                        .start();
                    });
                  }),
                  (s.showWild = function (t) {
                    var i = this.item_top
                      .getComponentsInChildren(y)
                      .filter(function (t) {
                        return t.isWild();
                      });
                    i.length > 0 &&
                      ((this.wild_item.node.active = !0),
                      this.wild_item.setItem(i[0].getItem()),
                      this.wild_item.playWildFx(),
                      t && t());
                  }),
                  (s.hasWild = function () {
                    var t =
                      this.item_top
                        .getComponentsInChildren(y)
                        .filter(function (t) {
                          return t.isWild();
                        }).length > 0;
                    return t;
                  }),
                  (s.hideWild = function () {
                    this.wild_item.node.active = !1;
                  }),
                  (s.playFx = function (t, i) {
                    void 0 === i && (i = !0),
                      this.getBottomItem()
                        .getComponentsInChildren(y)
                        .forEach(function (n, o) {
                          o == t ? n.playFx() : i && n.gray();
                        });
                  }),
                  i
                );
              })(u)).prototype,
              "items",
              [g],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (v = i(b.prototype, "lineNode", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = i(b.prototype, "wild_item", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = i(b.prototype, "layout", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = b))
          ) || C)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/Diablo_SlotMachineItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./DiabloFullScreenGameView.ts",
    "./GameUtils.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, a, o, r, s, m, l, u, c, h;
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
            (r = t._decorator),
            (s = t.Sprite),
            (m = t.sp),
            (l = t.Color),
            (u = t.Component);
        },
        function (t) {
          c = t.DiabloFullScreenGameView;
        },
        function (t) {
          h = t.default;
        },
      ],
      execute: function () {
        var d, _, p, f, b, g, v;
        o._RF.push(
          {},
          "13d23D3wl1FnatVgJHFZbY1",
          "Diablo_SlotMachineItemView",
          void 0
        );
        var y = r.ccclass,
          I = r.property,
          F = t(
            "DiabloItem",
            (function () {
              function t() {
                this.code = 0;
              }
              var e = t.prototype;
              return (
                (e.decodeItem = function (t) {
                  this.code = t;
                }),
                (e.getResourceNormalName = function (t) {
                  return (
                    void 0 === t && (t = !1),
                    "naruto_symbol_1_" +
                      this.code.toString() +
                      (t ? ".png" : "")
                  );
                }),
                (e.getResourceBlurName = function (t) {
                  return (
                    void 0 === t && (t = !1),
                    "naruto_symbol_blur_1_" +
                      this.code.toString() +
                      (t ? ".png" : "")
                  );
                }),
                t
              );
            })()
          );
        t(
          "default",
          ((d = y("Diablo_SlotMachineItemView")),
          (_ = I(s)),
          (p = I(m.Skeleton)),
          d(
            ((g = e(
              (b = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "spr_item", g, a(e)),
                    n(e, "anim_item", v, a(e)),
                    (e.item = null),
                    e
                  );
                }
                i(e, t);
                var o = e.prototype;
                return (
                  (o.init = function () {
                    (this.item = new F()),
                      this.item.decodeItem(h.getRandomInt(2, 15)),
                      this.bright();
                  }),
                  (o.setItem = function (t) {
                    null != t && (this.item = t);
                  }),
                  (o.disable = function (t) {
                    void 0 === t && (t = !0), (this.node.active = !t);
                  }),
                  (o.gray = function () {
                    this.disable(!1),
                      (this.spr_item.enabled = !0),
                      (this.anim_item.enabled = !1);
                    var t = this.item.getResourceNormalName();
                    (this.spr_item.spriteFrame = c
                      .getInstance()
                      .loaded_item_normal.filter(function (e) {
                        return e.name.indexOf(t) >= 0;
                      })[0]),
                      (this.spr_item.color = new l(150, 150, 150, 255));
                  }),
                  (o.blur = function () {
                    this.disable(!1),
                      (this.spr_item.enabled = !0),
                      (this.anim_item.enabled = !1);
                    var t = this.item.getResourceBlurName();
                    (this.spr_item.spriteFrame = c
                      .getInstance()
                      .loaded_item_blur.filter(function (e) {
                        return e.name.indexOf(t) >= 0;
                      })[0]),
                      (this.spr_item.color = l.WHITE);
                  }),
                  (o.bright = function () {
                    this.disable(!1),
                      (this.spr_item.enabled = !0),
                      null != this.anim_item && (this.anim_item.enabled = !1);
                    var t = this.item.getResourceNormalName();
                    (this.spr_item.spriteFrame = c
                      .getInstance()
                      .loaded_item_normal.filter(function (e) {
                        return e.name.indexOf(t) >= 0;
                      })[0]),
                      (this.spr_item.color = l.WHITE);
                  }),
                  (o.playFx = function () {
                    var t,
                      e,
                      i,
                      n = this;
                    if (null != this.anim_item && !this.isWild()) {
                      this.disable(!1),
                        (this.anim_item.enabled = !0),
                        (this.spr_item.enabled = !1),
                        (this.anim_item.skeletonData =
                          null == (t = c.getInstance())
                            ? void 0
                            : t.loaded_anim_item[this.item.code]);
                      this.anim_item.setAnimation(0, "symbolFx", !1);
                      null == (e = this.anim_item) ||
                        e.setStartListener(function (t) {
                          t.animation && t.animation.name;
                        }),
                        null == (i = this.anim_item) ||
                          i.setCompleteListener(function (t) {
                            "symbolFx" ==
                              (t.animation ? t.animation.name : "") &&
                              setTimeout(function () {
                                var t;
                                null == (t = n.anim_item) ||
                                  t.setAnimation(0, "idle", !0);
                              }, 100);
                          });
                    }
                  }),
                  (o.playWildFx = function () {
                    var t,
                      e,
                      i,
                      n = this;
                    if (null != this.anim_item) {
                      (this.anim_item.enabled = !0),
                        (this.anim_item.skeletonData =
                          null == (t = c.getInstance())
                            ? void 0
                            : t.loaded_anim_item[this.item.code]);
                      this.anim_item.setAnimation(0, "appear", !1);
                      null == (e = this.anim_item) ||
                        e.setStartListener(function (t) {
                          "appear" == (t.animation ? t.animation.name : "") &&
                            (n.spr_item.enabled = !1);
                        }),
                        null == (i = this.anim_item) ||
                          i.setCompleteListener(function (t) {
                            "appear" == (t.animation ? t.animation.name : "") &&
                              setTimeout(function () {
                                var t;
                                null == (t = n.anim_item) ||
                                  t.setAnimation(0, "loop", !0);
                              }, 100);
                          });
                    }
                  }),
                  (o.setSpriteFrame = function (t) {
                    this.spr_item.spriteFrame = t;
                  }),
                  (o.isWild = function () {
                    return 0 == this.item.code || 1 == this.item.code;
                  }),
                  (o.getSkeletonData = function () {
                    var t;
                    return null == (t = c.getInstance())
                      ? void 0
                      : t.loaded_anim_item[this.item.code];
                  }),
                  (o.getItem = function () {
                    return this.item;
                  }),
                  e
                );
              })(u)).prototype,
              "spr_item",
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
            (v = e(b.prototype, "anim_item", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = b))
          ) || f)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DiabloBetHistoryDetail.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./Diablo_SlotMachineCmp.ts",
    "./Diablo_SlotMachineItemView.ts",
    "./LineCmp.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, o, a, r, l, c, s, u, p, f, d, h, b, m, w, v, y, _;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (r = e._decorator),
            (l = e.Label),
            (c = e.Button),
            (s = e.sp),
            (u = e.Tween),
            (p = e.tween),
            (f = e.Vec3),
            (d = e.UITransform),
            (h = e.Vec2),
            (b = e.Color),
            (m = e.Component);
        },
        function (e) {
          w = e.default;
        },
        function (e) {
          (v = e.default), (y = e.DiabloItem);
        },
        function (e) {
          _ = e.default;
        },
      ],
      execute: function () {
        var g, S, D, I, C, B, M, L, V, k, E, z, T;
        a._RF.push(
          {},
          "f08cdQCFMhBsZ9C2JfNp4pH",
          "DiabloBetHistoryDetail",
          void 0
        );
        var A = r.ccclass,
          F = r.property;
        e(
          "default",
          ((g = A("DiabloBetHistoryDetail")),
          (S = F(l)),
          (D = F(c)),
          (I = F(_)),
          (C = F([v])),
          (B = F([s.Skeleton])),
          g(
            ((V = t(
              (L = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, a = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(a)) || this),
                    i(t, "lbl_phien", V, o(t)),
                    i(t, "btn_prev", k, o(t)),
                    i(t, "lineCmp", E, o(t)),
                    i(t, "diablo_SlotMachineItemView", z, o(t)),
                    i(t, "wilds", T, o(t)),
                    (t.onBack = null),
                    t
                  );
                }
                n(t, e);
                var a = t.prototype;
                return (
                  (a.onLoad = function () {
                    var e = this;
                    this.btn_prev.node.on("click", function () {
                      return e.onBack && e.onBack();
                    });
                  }),
                  (a.show = function (e, t, n) {
                    var i = this;
                    (this.lbl_phien.string = "#" + e.toString()),
                      this.wilds.forEach(function (e) {
                        e.node.active = !1;
                      }),
                      t
                        .map(function (e) {
                          var t = new y();
                          return t.decodeItem(e), t;
                        })
                        .forEach(function (e, t) {
                          if (
                            (i.diablo_SlotMachineItemView[t].setItem(e),
                            i.diablo_SlotMachineItemView[t].bright(),
                            i.diablo_SlotMachineItemView[t].isWild())
                          ) {
                            var n = t % 5;
                            (i.wilds[n].node.active = !0),
                              (i.wilds[n].skeletonData =
                                i.diablo_SlotMachineItemView[
                                  t
                                ].getSkeletonData()),
                              setTimeout(function () {
                                i.wilds[n].setAnimation(0, "loop", !0);
                              }, 100);
                          }
                        }),
                      (this.node.active = !0),
                      this.showEachLines(n, 2.5);
                  }),
                  (a.showEachLines = function (e, t) {
                    var n = this;
                    void 0 === t && (t = 0),
                      this.lineCmp.clear(),
                      u.stopAllByTarget(this.lineCmp.node);
                    var i = 0;
                    e.forEach(function (e) {
                      p(n.lineCmp.node)
                        .sequence(
                          p().delay(i),
                          p().call(function () {
                            n.drawLine(e, !0);
                          })
                        )
                        .start(),
                        (i += t);
                    });
                  }),
                  (a.drawLine = function (e, t) {
                    var n = this,
                      i = w.LINE[e];
                    cc.log(JSON.stringify(i));
                    var o = i.map(function (e, t) {
                      var i = n.diablo_SlotMachineItemView[t + 5 * e];
                      return (
                        u.stopAllByTarget(i.node),
                        i.node.setScale(f.ONE),
                        p(i.node)
                          .sequence(
                            p().to(1, { scale: new f(1.1, 1.1, 1.1) }),
                            p().to(1, { scale: f.ONE })
                          )
                          .start(),
                        i.node.parent
                          .getComponent(d)
                          .convertToWorldSpaceAR(i.node.position)
                      );
                    });
                    this.lineCmp.draw(
                      o.map(function (e) {
                        return new h(e.x, e.y);
                      }),
                      5,
                      new b("#FF993B"),
                      this.node.parent.parent,
                      t
                    );
                  }),
                  t
                );
              })(m)).prototype,
              "lbl_phien",
              [S],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (k = t(L.prototype, "btn_prev", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = t(L.prototype, "lineCmp", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = t(L.prototype, "diablo_SlotMachineItemView", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (T = t(L.prototype, "wilds", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (M = L))
          ) || M)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DiabloBetHistoryItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var i, e, n, r, o, l, u, c, a, p;
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
            (l = t._decorator),
            (u = t.Label),
            (c = t.Button),
            (a = t.Component);
        },
        function (t) {
          p = t.StringUtils;
        },
      ],
      execute: function () {
        var s, _, h, b, g, f, x, m, y, d, w, z, S, v, D, B, H, I, V;
        o._RF.push(
          {},
          "43ddbC9EstP8ZDvdnVxlY4A",
          "DiabloBetHistoryItemView",
          void 0
        );
        var L = l.ccclass,
          P = l.property;
        t(
          "default",
          ((s = L("DiabloBetHistoryItemView")),
          (_ = P(u)),
          (h = P(u)),
          (b = P(u)),
          (g = P(u)),
          (f = P(u)),
          (x = P(u)),
          (m = P(c)),
          (y = P(u)),
          s(
            ((z = i(
              (w = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, o = new Array(e), l = 0;
                    l < e;
                    l++
                  )
                    o[l] = arguments[l];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    n(i, "txt_phien_title", z, r(i)),
                    n(i, "txt_phien_time", S, r(i)),
                    n(i, "txt_phien_datcuoc", v, r(i)),
                    n(i, "txt_phien_solinecuoc", D, r(i)),
                    n(i, "txt_phien_tongcuoc", B, r(i)),
                    n(i, "txt_phien_solinetrung", H, r(i)),
                    n(i, "btn_chitiet", I, r(i)),
                    n(i, "txt_phien_tienthang", V, r(i)),
                    i
                  );
                }
                return (
                  e(i, t),
                  (i.prototype.show = function (t, i, e, n, r, o, l, u, c, a) {
                    (this.txt_phien_title.string = "#" + t.toString()),
                      (this.txt_phien_time.string = i.toString()),
                      (this.txt_phien_datcuoc.string = p.formatNumber(e)),
                      (this.txt_phien_solinecuoc.string = n.toString()),
                      (this.txt_phien_tongcuoc.string = r.toString()),
                      (this.txt_phien_solinetrung.string = o.toString()),
                      (this.txt_phien_tienthang.string = p.formatNumber(l)),
                      this.btn_chitiet.node.on("click", function () {
                        a && a(t, u, c);
                      });
                  }),
                  i
                );
              })(a)).prototype,
              "txt_phien_title",
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
            (S = i(w.prototype, "txt_phien_time", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = i(w.prototype, "txt_phien_datcuoc", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = i(w.prototype, "txt_phien_solinecuoc", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = i(w.prototype, "txt_phien_tongcuoc", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = i(w.prototype, "txt_phien_solinetrung", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = i(w.prototype, "btn_chitiet", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = i(w.prototype, "txt_phien_tienthang", [y], {
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
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DiabloBetHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./DiabloBetHistoryDetail.ts",
    "./DiabloBetHistoryItemView.ts",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./HttpManager.ts",
    "./Define.ts",
    "./StringUtils.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, a, r, s, l, u, c, p, b, g, h, f, m, d, y;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (r = t._decorator),
            (s = t.Button),
            (l = t.Label),
            (u = t.Node),
            (c = t.UIOpacity);
        },
        function (t) {
          p = t.default;
        },
        function (t) {
          b = t.default;
        },
        function (t) {
          g = t.CommonPopup;
        },
        function (t) {
          h = t.GameConfigManager;
        },
        function (t) {
          (f = t.HttpCommand), (m = t.httpManager);
        },
        function (t) {
          d = t.GameID;
        },
        function (t) {
          y = t.StringUtils;
        },
      ],
      execute: function () {
        var v, B, _, D, w, H, L, P, T, S, C, I, N, k, z;
        a._RF.push(
          {},
          "6c3bchLtndDepAok4+t3i+J",
          "DiabloBetHistoryView",
          void 0
        );
        var x = r.ccclass,
          M = r.property,
          R = function () {
            (this.bet = 0),
              (this.sessionID = ""),
              (this.money = 0),
              (this.totalBet = 0),
              (this.numLines = 0),
              (this.symbols = void 0),
              (this.payoutLines = void 0),
              (this.betTime = "");
          };
        t(
          "default",
          ((v = x("DiabloBetHistoryView")),
          (B = M(s)),
          (_ = M(s)),
          (D = M(l)),
          (w = M(u)),
          (H = M(u)),
          (L = M([u])),
          v(
            ((S = e(
              (T = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "btn_prev", S, o(e)),
                    n(e, "btn_next", C, o(e)),
                    n(e, "lbl_page", I, o(e)),
                    n(e, "diabloBetHistoryDetailNode", N, o(e)),
                    n(e, "diabloBetingNode", k, o(e)),
                    n(e, "item_nodes", z, o(e)),
                    (e._bets = []),
                    (e.currentPage = 1),
                    (e.max_pages = 0),
                    (e.item_views = []),
                    (e.diabloBetHistoryDetail = null),
                    e
                  );
                }
                i(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    var e = this;
                    t.prototype.onLoad.call(this),
                      this.btn_prev.node.on("click", function () {
                        e.currentPage > 1 &&
                          ((e.currentPage -= 1),
                          (e.lbl_page.string = e.currentPage.toString())),
                          e.fetchHistory(!1);
                      }),
                      this.btn_next.node.on("click", function () {
                        e.currentPage < e.max_pages &&
                          ((e.currentPage += 1),
                          (e.lbl_page.string = e.currentPage.toString())),
                          e.fetchHistory(!1);
                      }),
                      (this.diabloBetHistoryDetail =
                        this.diabloBetHistoryDetailNode.getComponent(p)),
                      (this.diabloBetHistoryDetail.onBack = function () {
                        e.backToBetting();
                      });
                  }),
                  (a.goToFirstPage = function () {
                    (this.currentPage = 1),
                      (this.lbl_page.string = this.currentPage.toString());
                  }),
                  (a.fetchHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0), t && this.goToFirstPage();
                    var i = 6 * (this.currentPage - 1),
                      n =
                        h.SAdomainURL +
                        f.BET_HISTORY_URL.replace(
                          "%gameid%",
                          d.DIABLO.toString()
                        ).replace("%skip%", i.toString());
                    m.sendGET({
                      url: n,
                      onCompleted: function (i) {
                        e._bets = [];
                        var n = JSON.parse(i).data,
                          o = n.items;
                        if (null != o) {
                          var a = n.count;
                          e.max_pages = Math.ceil(a / 6);
                          for (var r = 0; r < o.length; r++) {
                            var s = o[r],
                              l = new R();
                            (l.sessionID = s.sessionId),
                              (l.bet = s.betting),
                              (l.money = s.money),
                              (l.totalBet = s.totalBet),
                              (l.numLines = s.numLines);
                            var u = s.createdTime,
                              c = new Date(u);
                            (l.betTime = y.formatTime(c)),
                              (l.symbols = []),
                              (l.payoutLines = []);
                            for (var p = s.symbols, b = 0; b < p.length; b++)
                              l.symbols.push(p[b]);
                            for (
                              var g = s.payoutLines, h = 0;
                              h < g.length;
                              h++
                            ) {
                              var f = g[h].id;
                              l.payoutLines.push(f);
                            }
                            e._bets.push(l);
                          }
                          e.showBetHistory(t);
                        }
                      },
                    });
                  }),
                  (a.showBetHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0),
                      this.item_views.length <= 0 &&
                        (this.item_views = this.item_nodes.map(function (t) {
                          return t.getComponent(b);
                        })),
                      this.item_views.forEach(function (t, i) {
                        var n = e._bets[i];
                        null != n && null != n
                          ? ((t.node.getComponent(c).opacity = 255),
                            t.show(
                              n.sessionID,
                              n.betTime,
                              n.bet,
                              n.numLines,
                              n.totalBet,
                              n.payoutLines.length,
                              n.money,
                              n.symbols,
                              n.payoutLines,
                              function (t, i, n) {
                                e.showDetail(t, i, n);
                              }
                            ))
                          : (t.node.getComponent(c).opacity = 1);
                      }),
                      this.backToBetting(),
                      t && this.show();
                  }),
                  (a.showDetail = function (t, e, i) {
                    (this.diabloBetingNode.active = !1),
                      this.diabloBetHistoryDetail.show(t, e, i);
                  }),
                  (a.backToBetting = function () {
                    (this.diabloBetingNode.active = !0),
                      (this.diabloBetHistoryDetailNode.active = !1);
                  }),
                  e
                );
              })(g)).prototype,
              "btn_prev",
              [B],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (C = e(T.prototype, "btn_next", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(T.prototype, "lbl_page", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(T.prototype, "diabloBetHistoryDetailNode", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = e(T.prototype, "diabloBetingNode", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(T.prototype, "item_nodes", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (P = T))
          ) || P)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DiabloBonusItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var e, n, i, o, l, a, s, r, u, c, m, p, b, h, _;
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
            (s = t.sp),
            (r = t.Button),
            (u = t.Label),
            (c = t.Tween),
            (m = t.Color),
            (p = t.tween),
            (b = t.Vec3),
            (h = t.Component);
        },
        function (t) {
          _ = t.StringUtils;
        },
      ],
      execute: function () {
        var d, f, y, k, g, v, w, B, D;
        l._RF.push(
          {},
          "4db2eMJipFE6YZaDrecaeP8",
          "DiabloBonusItemView",
          void 0
        );
        var A = a.ccclass,
          I = a.property;
        t(
          "DiabloBonusItemView",
          ((d = A("DiabloBonusItemView")),
          (f = I(s.Skeleton)),
          (y = I(r)),
          (k = I(u)),
          d(
            ((w = e(
              (v = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, l = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    l[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(l)) || this),
                    i(e, "item_skeleton", w, o(e)),
                    i(e, "button", B, o(e)),
                    i(e, "lbl_amount", D, o(e)),
                    (e.index = 0),
                    (e.onClick = null),
                    (e.poss = [0.195, 0.65, 0.633, 0.455, 0.44, 0.215]),
                    e
                  );
                }
                n(e, t);
                var l = e.prototype;
                return (
                  (l.show = function (t) {
                    var e = this;
                    (this.button.interactable = !1),
                      c.stopAllByTarget(this.item_skeleton.node),
                      (this.lbl_amount.node.active = !1),
                      (this.index = t),
                      (this.item_skeleton.color = new m(255, 255, 255, 0)),
                      (this.node.active = !0),
                      this.item_skeleton.setAnimation(0, "appear", !1),
                      this.item_skeleton.setCompleteListener(function (t) {
                        null != t &&
                          "appear" == (t.animation ? t.animation.name : "") &&
                          (e.item_skeleton.setAnimation(0, "loop", !0),
                          (e.button.interactable = !0));
                      }),
                      p(this.item_skeleton.node)
                        .delay(0.05)
                        .call(function () {
                          e.item_skeleton.color = m.WHITE;
                        })
                        .start();
                  }),
                  (l.setTimeScale = function (t) {
                    this.item_skeleton.timeScale = t;
                  }),
                  (l.open = function (t) {
                    (this.button.interactable = !1),
                      this.item_skeleton.setAnimation(0, "disappear", !1),
                      (this.lbl_amount.node.active = !0),
                      c.stopAllByTarget(this.lbl_amount.node),
                      this.lbl_amount.node.setPosition(this.node.getPosition()),
                      (this.lbl_amount.string = "+" + _.formatMoneyNumber(t)),
                      p(this.lbl_amount.node)
                        .by(0.5, { position: new b(0, 20, 0) })
                        .start();
                  }),
                  (l.hide = function () {
                    (this.lbl_amount.node.active = !1), (this.node.active = !1);
                  }),
                  e
                );
              })(h)).prototype,
              "item_skeleton",
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
            (B = e(v.prototype, "button", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = e(v.prototype, "lbl_amount", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = v))
          ) || g)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DiabloBonusView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./DiabloBonusItemView.ts",
    "./DiabloFullScreenGameView.ts",
    "./DiabloSummaryView.ts",
    "./StringUtils.ts",
    "./SoundManager.ts",
  ],
  function (t) {
    "use strict";
    var n, e, i, o, a, l, r, u, s, c, m, h, d, f, b, p, w, g;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (l = t._decorator),
            (r = t.Node),
            (u = t.sp),
            (s = t.Label),
            (c = t.AudioClip),
            (m = t.Tween),
            (h = t.tween),
            (d = t.Component);
        },
        function (t) {
          f = t.DiabloBonusItemView;
        },
        function (t) {
          b = t.DiabloFullScreenGameView;
        },
        function (t) {
          p = t.DiabloSummaryView;
        },
        function (t) {
          w = t.StringUtils;
        },
        function (t) {
          g = t.SoundManager;
        },
      ],
      execute: function () {
        var y, _, v, S, D, M, V, A, I, k, C, B, z, G, T, x, N, W, R, E, L;
        a._RF.push({}, "9e230EUqz1AOYpOaAXc9WmS", "DiabloBonusView", void 0);
        var F = l.ccclass,
          q = l.property,
          H = function () {
            (this.id = ""), (this.rate = 1);
          };
        t(
          "DiabloBonusView",
          ((y = F("DiabloBonusView")),
          (_ = q(r)),
          (v = q(r)),
          (S = q(u.Skeleton)),
          (D = q(p)),
          (M = q(s)),
          (V = q(s)),
          (A = q([r])),
          (I = q(c)),
          (k = q(c)),
          y(
            ((z = n(
              (B = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, a = new Array(e), l = 0;
                    l < e;
                    l++
                  )
                    a[l] = arguments[l];
                  return (
                    (n = t.call.apply(t, [this].concat(a)) || this),
                    i(n, "static_bg", z, o(n)),
                    i(n, "root", G, o(n)),
                    i(n, "background_skeleton", T, o(n)),
                    i(n, "diabloSummaryView", x, o(n)),
                    i(n, "amount", N, o(n)),
                    i(n, "lbl_countdown", W, o(n)),
                    i(n, "items", R, o(n)),
                    i(n, "start_mini_game_sfx", E, o(n)),
                    i(n, "touch_mini_game_sfx", L, o(n)),
                    (n.multiRate = 0),
                    (n.wonMNGItems = []),
                    (n.totalMiniGameWonMoney = void 0),
                    (n.openedCount = 0),
                    (n.timeCountDown = 0),
                    n
                  );
                }
                e(n, t);
                var a = n.prototype;
                return (
                  (a.onLoad = function () {
                    var t = this;
                    this.items.forEach(function (n, e) {
                      var i = e;
                      n.on("click", function () {
                        t.open(i);
                      });
                    });
                  }),
                  (a.show = function (t, n) {
                    var e = this;
                    g.getInstance().playSfx(this.start_mini_game_sfx),
                      (this.static_bg.active = !0),
                      (this.lbl_countdown.node.active = !1),
                      m.stopAllByTarget(this.lbl_countdown.node),
                      (this.timeCountDown = 2 == n ? 3 : 10),
                      (this.wonMNGItems = []),
                      (this.multiRate = 0),
                      (this.totalMiniGameWonMoney = 0),
                      (this.openedCount = 0),
                      (this.multiRate = t.rate);
                    for (var i = t.items, o = t.stg, a = 0; a < i.length; a++) {
                      for (var l = i[a], r = 0, u = 0; u < o.length; u++) {
                        var s = o[u],
                          c = s.id,
                          d = s.b2;
                        if (c == l) {
                          r = d;
                          break;
                        }
                      }
                      var p = new H();
                      (p.id = l), (p.rate = r), this.wonMNGItems.push(p);
                    }
                    (this.totalMiniGameWonMoney = t.m),
                      (this.root.active = !0),
                      m.stopAllByTarget(this.node),
                      (this.amount.string = w.formatNumber(
                        this.totalMiniGameWonMoney
                      )),
                      h(this.node)
                        .call(function () {
                          (e.background_skeleton.timeScale = n),
                            e.background_skeleton.setAnimation(0, "appear", !1),
                            e.background_skeleton.setCompleteListener(function (
                              t
                            ) {
                              null != t &&
                                "appear" ==
                                  (t.animation ? t.animation.name : "") &&
                                (e.background_skeleton.setAnimation(
                                  0,
                                  "loop",
                                  !0
                                ),
                                e.countDownAfter(3));
                            }),
                            e.items.forEach(function (t, e) {
                              t.getComponent(f).setTimeScale(n);
                            });
                        })
                        .delay(1.3 / n)
                        .call(function () {
                          e.items.forEach(function (t, n) {
                            t.getComponent(f).show(n);
                          });
                        })
                        .start(),
                      h(this.node)
                        .delay(1)
                        .call(function () {
                          b.getInstance().hideMainImmediately();
                        })
                        .start();
                  }),
                  (a.open = function (t) {
                    if (!(this.openedCount >= this.wonMNGItems.length)) {
                      g.getInstance().playSfx(this.touch_mini_game_sfx);
                      var n =
                        this.multiRate *
                        b.getInstance().bet *
                        this.wonMNGItems[this.openedCount].rate;
                      this.items[t].getComponent(f).open(n),
                        this.openedCount++,
                        this.openedCount >= this.wonMNGItems.length
                          ? this.showTotalWinAfter(1)
                          : this.countDownAfter(1.5);
                    }
                  }),
                  (a.countDownAfter = function (t) {
                    var n = this;
                    (this.lbl_countdown.node.active = !1),
                      m.stopAllByTarget(this.lbl_countdown.node),
                      h(this.lbl_countdown.node)
                        .sequence(
                          h().delay(t),
                          h().call(function () {
                            n.lbl_countdown.node.active = !0;
                            var t = n.timeCountDown;
                            h(n.lbl_countdown.node)
                              .repeat(
                                t + 1,
                                h(n.lbl_countdown.node)
                                  .call(function () {
                                    n.lbl_countdown.string =
                                      t.toString().length >= 2
                                        ? t.toString()
                                        : "0" + t.toString();
                                  })
                                  .delay(1)
                                  .call(function () {
                                    (t -= 1) < 0 && n.showTotalWinAfter(0);
                                  })
                              )
                              .start();
                          })
                        )
                        .start();
                  }),
                  (a.showTotalWinAfter = function (t) {
                    var n = this;
                    (this.lbl_countdown.node.active = !1),
                      m.stopAllByTarget(this.lbl_countdown.node),
                      m.stopAllByTarget(this.diabloSummaryView.node),
                      h(this.diabloSummaryView.node)
                        .sequence(
                          h().delay(t),
                          h().call(function () {
                            (n.diabloSummaryView.onHide = function () {
                              m.stopAllByTarget(n.diabloSummaryView.node),
                                b.getInstance().finishedBonus(),
                                n.hide();
                            }),
                              n.diabloSummaryView.show();
                          }),
                          h().delay(4),
                          h().call(function () {
                            n.diabloSummaryView.hide();
                          })
                        )
                        .start();
                  }),
                  (a.hide = function () {
                    b.getInstance().showMainImmediately(),
                      (this.static_bg.active = !1),
                      (this.diabloSummaryView.onHide = null),
                      (this.root.active = !1),
                      this.items.forEach(function (t, n) {
                        t.getComponent(f).hide();
                      });
                  }),
                  n
                );
              })(d)).prototype,
              "static_bg",
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
            (G = n(B.prototype, "root", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = n(B.prototype, "background_skeleton", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = n(B.prototype, "diabloSummaryView", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = n(B.prototype, "amount", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = n(B.prototype, "lbl_countdown", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = n(B.prototype, "items", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (E = n(B.prototype, "start_mini_game_sfx", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = n(B.prototype, "touch_mini_game_sfx", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = B))
          ) || C)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DiabloFullScreenGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./DiabloBetHistoryView.ts",
    "./DiabloInfoView.ts",
    "./DiabloSettingView.ts",
    "./Diablo_EffectCmp.ts",
    "./Diablo_SlotMachineCmp.ts",
    "./Diablo_SlotMachineItemView.ts",
    "./BackgroundScale.ts",
    "./SocketManager.ts",
    "./PersistManager.ts",
    "./Define.ts",
    "./SoundButtonCmp.ts",
    "./StringUtils.ts",
    "./BaseSlotGameView.ts",
    "./SoundManager.ts",
    "./DiabloNetworkController.ts",
    "./EventManager.ts",
  ],
  function (t) {
    "use strict";
    var n,
      e,
      i,
      o,
      l,
      a,
      r,
      s,
      u,
      c,
      b,
      p,
      _,
      f,
      h,
      m,
      d,
      g,
      y,
      w,
      k,
      S,
      v,
      C,
      I,
      j,
      M,
      E,
      z,
      F,
      x,
      B,
      T,
      A,
      D,
      L,
      J,
      N,
      V,
      O,
      R;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (l = t.cclegacy),
            (a = t._decorator),
            (r = t.Label),
            (s = t.Button),
            (u = t.sp),
            (c = t.Node),
            (b = t.SpriteFrame),
            (p = t.Sprite),
            (_ = t.AudioClip),
            (f = t.UIOpacity),
            (h = t.VideoPlayer),
            (m = t.tween),
            (d = t.Tween),
            (g = t.sys),
            (y = t.assetManager),
            (w = t.Prefab),
            (k = t.view),
            (S = t.Vec3),
            (v = t.UITransform);
        },
        function (t) {
          C = t.default;
        },
        function (t) {
          I = t.DiabloInfoView;
        },
        function (t) {
          j = t.DiabloSettingView;
        },
        function (t) {
          (M = t.DiabloEffectCmp), (E = t.EFFECT_TYPE);
        },
        function (t) {
          z = t.default;
        },
        function (t) {
          F = t.DiabloItem;
        },
        function (t) {
          x = t.BackgroundScale;
        },
        function (t) {
          B = t.socketManager;
        },
        function (t) {
          T = t.PersistManager;
        },
        function (t) {
          A = t.GameID;
        },
        function (t) {
          D = t.default;
        },
        function (t) {
          L = t.StringUtils;
        },
        function (t) {
          J = t.BaseSlotGameView;
        },
        function (t) {
          N = t.SoundManager;
        },
        function (t) {
          V = t.DiabloNetworkController;
        },
        function (t) {
          (O = t.eventManager), (R = t.EventKey);
        },
      ],
      execute: function () {
        var P,
          q,
          G,
          U,
          H,
          K,
          W,
          Q,
          Y,
          X,
          Z,
          $,
          tt,
          nt,
          et,
          it,
          ot,
          lt,
          at,
          rt,
          st,
          ut,
          ct,
          bt,
          pt,
          _t,
          ft,
          ht,
          mt,
          dt,
          gt,
          yt,
          wt,
          kt,
          St,
          vt,
          Ct,
          It,
          jt,
          Mt,
          Et,
          zt,
          Ft,
          xt,
          Bt,
          Tt,
          At,
          Dt,
          Lt,
          Jt,
          Nt,
          Vt,
          Ot,
          Rt,
          Pt,
          qt,
          Gt,
          Ut,
          Ht,
          Kt,
          Wt,
          Qt,
          Yt,
          Xt,
          Zt,
          $t,
          tn,
          nn,
          en,
          on,
          ln,
          an,
          rn,
          sn,
          un,
          cn,
          bn,
          pn,
          _n,
          fn,
          hn,
          mn,
          dn,
          gn,
          yn,
          wn,
          kn,
          Sn,
          vn,
          Cn,
          In,
          jn,
          Mn,
          En,
          zn,
          Fn,
          xn,
          Bn,
          Tn,
          An;
        l._RF.push(
          {},
          "72ac7R0WjpPo7j2rNM4KdkV",
          "DiabloFullScreenGameView",
          void 0
        );
        var Dn = a.ccclass,
          Ln = a.property,
          Jn = function () {
            (this.aid = -1), (this.jackpot = 0), (this.bet = 0);
          };
        t(
          "DiabloFullScreenGameView",
          ((P = Dn("DiabloFullScreenGameView")),
          (q = Ln(r)),
          (G = Ln([r])),
          (U = Ln(r)),
          (H = Ln(s)),
          (K = Ln(s)),
          (W = Ln(s)),
          (Q = Ln(u.Skeleton)),
          (Y = Ln(c)),
          (X = Ln(s)),
          (Z = Ln(s)),
          ($ = Ln(c)),
          (tt = Ln(u.Skeleton)),
          (nt = Ln(r)),
          (et = Ln(z)),
          (it = Ln([b])),
          (ot = Ln([b])),
          (lt = Ln([u.SkeletonData])),
          (at = Ln(c)),
          (rt = Ln(c)),
          (st = Ln(c)),
          (ut = Ln(u.Skeleton)),
          (ct = Ln(c)),
          (bt = Ln(c)),
          (pt = Ln(s)),
          (_t = Ln(s)),
          (ft = Ln(s)),
          (ht = Ln(s)),
          (mt = Ln(r)),
          (dt = Ln(C)),
          (gt = Ln(I)),
          (yt = Ln(j)),
          (wt = Ln(c)),
          (kt = Ln([s])),
          (St = Ln(p)),
          (vt = Ln([b])),
          (Ct = Ln(p)),
          (It = Ln([b])),
          (jt = Ln(p)),
          (Mt = Ln(M)),
          (Et = Ln(_)),
          (zt = Ln(_)),
          (Ft = Ln(_)),
          (xt = Ln(_)),
          (Bt = Ln(_)),
          (Tt = Ln(_)),
          (At = Ln(_)),
          (Dt = Ln(c)),
          (Lt = Ln([b])),
          P(
            (((An = (function (t) {
              function n() {
                for (
                  var n, e = arguments.length, l = new Array(e), a = 0;
                  a < e;
                  a++
                )
                  l[a] = arguments[a];
                return (
                  (n = t.call.apply(t, [this].concat(l)) || this),
                  i(n, "lblJackpot", Vt, o(n)),
                  i(n, "lbl_lobby_jackpots", Ot, o(n)),
                  i(n, "lblTongCuoc", Rt, o(n)),
                  i(n, "btn_help", Pt, o(n)),
                  i(n, "btn_spin", qt, o(n)),
                  i(n, "btn_stopautoSpin", Gt, o(n)),
                  i(n, "btn_spin_skeleton", Ut, o(n)),
                  i(n, "btn_fast", Ht, o(n)),
                  i(n, "btn_lobby_back", Kt, o(n)),
                  i(n, "btn_main_back", Wt, o(n)),
                  i(n, "result_node", Qt, o(n)),
                  i(n, "bg_result_node", Yt, o(n)),
                  i(n, "lbl_result_amount", Xt, o(n)),
                  i(n, "diablo_SlotMachineCmp", Zt, o(n)),
                  i(n, "loaded_item_normal", $t, o(n)),
                  i(n, "loaded_item_blur", tn, o(n)),
                  i(n, "loaded_anim_item", nn, o(n)),
                  i(n, "loading_node", en, o(n)),
                  i(n, "loading_bg", on, o(n)),
                  i(n, "lobby_node", ln, o(n)),
                  i(n, "lobby_fx", an, o(n)),
                  i(n, "main_node", rn, o(n)),
                  i(n, "top_node", sn, o(n)),
                  i(n, "btn_history", un, o(n)),
                  i(n, "btn_info", cn, o(n)),
                  i(n, "btn_setting", bn, o(n)),
                  i(n, "btn_so_phong", pn, o(n)),
                  i(n, "lbl_so_phong", _n, o(n)),
                  i(n, "diabloBetHistoryView", fn, o(n)),
                  i(n, "diabloInfoView", hn, o(n)),
                  i(n, "diabloSettingView", mn, o(n)),
                  i(n, "bottom_node", dn, o(n)),
                  i(n, "btn_bets", gn, o(n)),
                  i(n, "spr_background", yn, o(n)),
                  i(n, "sprFrame_backgrounds", wn, o(n)),
                  i(n, "spr_background_top", kn, o(n)),
                  i(n, "sprFrame_backgrounds_top", Sn, o(n)),
                  i(n, "spr_background_bottom", vn, o(n)),
                  i(n, "diabloEffectCmp", Cn, o(n)),
                  i(n, "diablo_lobby_bgm_music", In, o(n)),
                  i(n, "diablo_main_bgm_music", jn, o(n)),
                  i(n, "spin_sfx_loop", Mn, o(n)),
                  i(n, "spin_end_sfx", En, o(n)),
                  i(n, "win_normal_sfx", zn, o(n)),
                  i(n, "win_normal_money_sfx", Fn, o(n)),
                  i(n, "expanding_wild_sfx", xn, o(n)),
                  i(n, "trial_node", Bn, o(n)),
                  i(n, "sprFrame_backgrounds_bottom", Tn, o(n)),
                  (n.bet_array = [100, 1e3, 1e4, 1e4, 1e4]),
                  (n._jackpotInfos = []),
                  (n.jackpot_amount = 0),
                  (n.jackpot_tween = null),
                  (n.lobby_jackpot_tween = []),
                  (n.result_tween = null),
                  (n.symbols = []),
                  (n.rewards = []),
                  (n.moneyExchange = 0),
                  (n.wonJackpot = !1),
                  (n.miniGameDict = null),
                  (n.isFast = !1),
                  (n.timeToShowResults = 2.7),
                  (n.lobbyJackpots = []),
                  n
                );
              }
              e(n, t),
                (n.getInstance = function () {
                  return n.instance;
                });
              var l = n.prototype;
              return (
                (l.getNetworkController = function () {
                  return V.getInstance();
                }),
                (l.getTotalBet = function () {
                  return this.bet * this.lineArr.length;
                }),
                (l.isSpinning = function () {
                  return this.diablo_SlotMachineCmp.isSpinning();
                }),
                (l.forceMachineStop = function (t, n) {
                  void 0 === t && (t = !0),
                    void 0 === n && (n = !1),
                    this.stop([], n),
                    t && this.turnOffAutoSpin();
                }),
                (l.turnOffAutoSpin = function () {
                  (this.btn_stopautoSpin.node.active = !1),
                    (this.btn_spin.node.active = !0);
                }),
                (l.isFastSpin = function () {
                  return this.isFast;
                }),
                (l.isAutoSpin = function () {
                  return this.btn_stopautoSpin.node.active;
                }),
                (l.stopImmediately = function () {
                  (this.btn_spin.interactable = !1),
                    this.diablo_SlotMachineCmp.stopImmediately(this.symbols);
                }),
                (l.finishedBonus = function () {
                  if (
                    this.btn_stopautoSpin.node.active &&
                    this.diablo_SlotMachineCmp.isStopped()
                  )
                    this.spin();
                  else {
                    var t = this.rewards.map(function (t) {
                      return t.lid;
                    });
                    this.diablo_SlotMachineCmp.showEachLines(t, 1.5),
                      this.resetSpinButton();
                  }
                  B.sendRefreshMoney(),
                    null != this.lbl_result_amount &&
                      null != this.lbl_result_amount &&
                      ((this.lbl_result_amount.getComponent(f).opacity = 255),
                      (this.lbl_result_amount.string = L.formatNumber(
                        this.moneyExchange
                      ))),
                    this.playBgmMusic();
                }),
                (l.finishedJackpot = function () {
                  this.playBgmMusic(),
                    null != this.lbl_result_amount &&
                      null != this.lbl_result_amount &&
                      ((this.lbl_result_amount.getComponent(f).opacity = 255),
                      (this.lbl_result_amount.string = L.formatNumber(
                        this.moneyExchange
                      )));
                }),
                (l.onLoad = function () {
                  var e = this;
                  t.prototype.onLoad.call(this),
                    (this.gameID = A.DIABLO),
                    (n.instance = this),
                    this.btn_so_phong.node.on("click", function () {
                      !e.isAutoSpin() && e.diablo_SlotMachineCmp.isStopped()
                        ? e.showLobby()
                        : T.showNoti("Đang Quay");
                    }),
                    this.lbl_lobby_jackpots.forEach(function (t) {
                      e.lobbyJackpots.push(0);
                    }),
                    this.intro_video.node.on(
                      h.EventType.COMPLETED,
                      function () {
                        e.intro_video.node.destroy(),
                          e.isSubcribed
                            ? e.showLobby()
                            : (e.loading_bg.active = !0);
                      }
                    ),
                    this.btn_bets.forEach(function (t, n) {
                      var i = n;
                      t.node.on("click", function () {
                        e.showMain(i);
                      });
                    }),
                    this.btn_spin.node.on(c.EventType.TOUCH_START, function () {
                      e.btn_spin.interactable &&
                        m(e.btn_spin.node)
                          .sequence(
                            m().delay(0.5),
                            m().call(function () {
                              e.btn_spin_skeleton.setAnimation(0, "hold", !0);
                            }),
                            m().delay(1.5),
                            m().call(function () {
                              e.isTrial
                                ? T.showNoti(
                                    "Không hỗ trợ tự quay ở chế độ chơi thử."
                                  )
                                : ((e.btn_stopautoSpin.node.active = !0),
                                  (e.btn_spin.node.active = !1),
                                  e.spin());
                            })
                          )
                          .start();
                    }),
                    this.btn_spin.node.on(c.EventType.TOUCH_END, function () {
                      if (e.btn_spin.interactable) {
                        var t = e.btn_spin.getComponent(D);
                        null != t && null != t && t.playSfx(),
                          e.btn_stopautoSpin.node.active ||
                            (d.stopAllByTarget(e.btn_spin.node),
                            e.symbols.length > 0
                              ? e.stopImmediately()
                              : e.spin());
                      }
                    }),
                    this.btn_stopautoSpin.node.on(
                      c.EventType.TOUCH_END,
                      function () {
                        var t = e.btn_spin.getComponent(D);
                        null != t && null != t && t.playSfx(),
                          (e.btn_stopautoSpin.node.active = !1),
                          (e.btn_spin.node.active = !0);
                      }
                    ),
                    this.btn_fast.on("click", function () {
                      e.isFast = !e.isFast;
                    }),
                    this.btn_lobby_back.node.on("click", function () {
                      O.emit(R.IsMiniDownload, function () {
                        e.leaveRoom();
                      });
                    }),
                    this.btn_history.node.on("click", function () {
                      e.diabloBetHistoryView.fetchHistory();
                    }),
                    this.btn_setting.node.on("click", function () {
                      e.diabloSettingView.show();
                    }),
                    this.btn_info.node.on("click", function () {
                      e.diabloInfoView.show();
                    }),
                    this.btn_main_back.node.on("click", function () {
                      e.diablo_SlotMachineCmp.isStopped()
                        ? e.showLobby()
                        : T.showNoti("Đang Quay");
                    }),
                    (this.diablo_SlotMachineCmp.onMachineStopped = function () {
                      if (
                        (N.getInstance().stopAdditionalSfx(e.spin_sfx_loop),
                        n.getInstance().isFastSpin() ||
                          (e.diablo_SlotMachineCmp.showWild(function () {}),
                          e.diablo_SlotMachineCmp.hasWild() &&
                            N.getInstance().playAdditionalSfx(
                              e.expanding_wild_sfx
                            )),
                        e.miniGameDict)
                      ) {
                        var t = e.rewards.map(function (t) {
                            return t.lid;
                          }),
                          i = 0;
                        return (
                          e.rewards.forEach(function (t) {
                            i += t.crd;
                          }),
                          void (t.length > 0
                            ? m(e.node)
                                .call(function () {
                                  var n;
                                  (e.diablo_SlotMachineCmp.showLines(
                                    t,
                                    0,
                                    0.3,
                                    function () {}
                                  ),
                                  null != e.lbl_result_amount &&
                                    null != e.lbl_result_amount) &&
                                    (d.stopAllByTarget(
                                      null == (n = e.lbl_result_amount)
                                        ? void 0
                                        : n.getComponent(f)
                                    ),
                                    (e.lbl_result_amount.getComponent(
                                      f
                                    ).opacity = 255),
                                    (e.lbl_result_amount.string =
                                      L.formatNumber(i)));
                                })
                                .delay(1)
                                .call(function () {
                                  e.diabloEffectCmp.showEffect(
                                    E.BONUS,
                                    e.isFast ? 2 : 1,
                                    e.timeToShowResults,
                                    e.miniGameDict
                                  );
                                })
                                .start()
                            : e.diabloEffectCmp.showEffect(
                                E.BONUS,
                                e.isFast ? 2 : 1,
                                e.timeToShowResults,
                                e.miniGameDict
                              ))
                        );
                      }
                      var o = m(e.node).call(function () {
                        e.showResult(function () {
                          if (
                            e.btn_stopautoSpin.node.active &&
                            e.diablo_SlotMachineCmp.isStopped()
                          )
                            e.spin();
                          else if (e.diablo_SlotMachineCmp.isStopped()) {
                            var t = e.rewards.map(function (t) {
                              return t.lid;
                            });
                            e.diablo_SlotMachineCmp.showEachLines(t, 1.5),
                              e.resetSpinButton();
                          }
                        });
                      });
                      e.wonFreeSpins > 0
                        ? m(e.node)
                            .sequence(
                              m().call(function () {
                                e.diabloEffectCmp.showEffect(
                                  E.FREE,
                                  e.isFast ? 2 : 1,
                                  e.timeToShowResults,
                                  0
                                ),
                                  (e.lbl_freespinCount.node.parent.active = !0),
                                  (e.lbl_freespinCount.string =
                                    e.currentFreeSpin.toString());
                              }),
                              m().delay(0.5),
                              m().call(function () {
                                e.btn_stopautoSpin.node.active &&
                                e.diablo_SlotMachineCmp.isStopped()
                                  ? e.spin()
                                  : e.resetSpinButton();
                              })
                            )
                            .start()
                        : (e.moneyExchange > 0
                            ? o
                            : m(e.node).sequence(
                                m().delay(0.01),
                                m().call(function () {
                                  e.btn_stopautoSpin.node.active &&
                                  e.diablo_SlotMachineCmp.isStopped()
                                    ? e.spin()
                                    : e.resetSpinButton();
                                })
                              )
                          ).start();
                      B.sendRefreshMoney();
                    });
                }),
                (l.resetSpinButton = function () {
                  this.btn_spin_skeleton.setAnimation(0, "spin", !0),
                    (this.btn_spin.interactable = !0),
                    (this.symbols = []);
                }),
                (l.playColumnStopEnd = function () {
                  N.getInstance().playSfx(this.spin_end_sfx);
                }),
                (l.initUI = function () {
                  var t = this;
                  N.getInstance().stopBgm(),
                    (this.lobby_node.active = !1),
                    (this.main_node.active = !1),
                    g.isBrowser
                      ? ((this.loading_node.active = !0),
                        (this.loading_bg.active = !0),
                        (this.intro_video.node.active = !1),
                        m(this.node)
                          .delay(1)
                          .call(function () {
                            t.showLobby();
                          })
                          .start())
                      : this.showLobby(),
                    this.subscribe();
                }),
                (l.playBgmMusic = function () {
                  this.lobby_node.active
                    ? this.playLobbyMusic()
                    : N.getInstance().playBgm(
                        this.diablo_main_bgm_music,
                        !0,
                        !0
                      );
                }),
                (l.playLobbyMusic = function () {
                  N.getInstance().playBgm(this.diablo_lobby_bgm_music, !0, !0);
                }),
                (l.release = function () {
                  n.instance = null;
                  var t = y.getBundle("slot_naruto");
                  null != t &&
                    null != t &&
                    (t.release("prefab_naruto", w),
                    y.removeBundle(t),
                    cc.log("remove asset bundle slot_naruto"),
                    this.node.destroy(),
                    g.garbageCollect());
                }),
                (n.releaseBundle = function () {
                  n.instance = null;
                  var t = y.getBundle("slot_naruto");
                  null != t &&
                    null != t &&
                    (t.release("prefab_naruto", w),
                    y.removeBundle(t),
                    cc.log("remove asset bundle slot_naruto"),
                    g.garbageCollect());
                }),
                (l.showLobby = function () {
                  (this.loading_node.active = !1),
                    (this.lobby_node.active = !0),
                    (this.main_node.active = !1),
                    this.resetSpinButton(),
                    this.turnOffAutoSpin(),
                    this.playLobbyMusic();
                }),
                (l.showMain = function (t) {
                  (this.loading_node.active = !1),
                    (this.lobby_node.active = !1),
                    this.playBgmMusic(),
                    (this.bet = this.bet_array[t]),
                    this.diabloInfoView.setBet(t),
                    (this.lbl_so_phong.string = L.formatMoneyNumber(this.bet)),
                    (this.isTrial = t == this.bet_array.length - 1),
                    (this.trial_node.active = this.isTrial),
                    (this.spr_background.spriteFrame =
                      this.sprFrame_backgrounds[t]);
                  var n = this.spr_background.node.getComponent(x);
                  n && n.autoFit(),
                    (this.spr_background_top.spriteFrame =
                      this.sprFrame_backgrounds_top[t]),
                    (this.spr_background_bottom.spriteFrame =
                      this.sprFrame_backgrounds_bottom[t]),
                    this.updateJackpotLabels(!1),
                    (this.main_node.active = !0),
                    d.stopAllByTarget(this.top_node);
                  var e = k.getCanvasSize().height / k.getScaleY();
                  this.top_node.setPosition(
                    new S(
                      0,
                      e / 2 +
                        this.top_node.getComponent(v).contentSize.height / 2
                    )
                  ),
                    m(this.top_node)
                      .delay(0.1)
                      .to(
                        0.5,
                        { position: new S(0, 309) },
                        { easing: "expoOut" }
                      )
                      .start(),
                    this.bottom_node.setPosition(
                      new S(
                        0,
                        -e / 2 -
                          this.bottom_node.getComponent(v).contentSize.height /
                            2
                      )
                    ),
                    m(this.bottom_node)
                      .delay(0.1)
                      .to(
                        0.5,
                        { position: new S(0, -263, 0) },
                        { easing: "expoOut" }
                      )
                      .start(),
                    this.diablo_SlotMachineCmp.init(),
                    (this.lbl_freespinCount.node.parent.active = !1),
                    (this.currentFreeSpin = 0),
                    this.diabloEffectCmp.hideAll(),
                    null != this.lbl_result_amount &&
                      null != this.lbl_result_amount &&
                      (this.lbl_result_amount.string = ""),
                    (this.lblCoin.string = ""),
                    B.sendRefreshMoney();
                }),
                (l.handleLoggedIn = function () {
                  this.forceMachineStop(), this.subscribe();
                }),
                (l.showMainImmediately = function () {
                  this.main_node.active = !0;
                }),
                (l.hideMainImmediately = function () {
                  this.main_node.active = !1;
                }),
                (l.showResult = function (t) {
                  var n,
                    e = this,
                    i = this.rewards.map(function (t) {
                      return t.lid;
                    }),
                    o = this.isFast ? 0 : 0.7;
                  this.diablo_SlotMachineCmp.showLines(
                    i,
                    o,
                    0.3,
                    function () {}
                  ),
                    d.stopAllByTarget(this.result_node),
                    d.stopAllByTarget(this.lbl_result_amount.getComponent(f)),
                    this.lbl_result_amount.node.setScale(S.ONE);
                  var l = m(this.result_node).sequence(
                      m().call(function () {
                        e.diabloEffectCmp.showEffect(
                          E.JACKPOT,
                          1,
                          0,
                          e.moneyExchange
                        );
                      }),
                      this.btn_stopautoSpin.node.active
                        ? m(this.result_node).sequence(
                            m().delay(14.5),
                            m().call(function () {
                              e.diabloEffectCmp.hideEffect(E.JACKPOT);
                            })
                          )
                        : m(this.result_node).sequence(
                            m().delay(6),
                            m().call(function () {
                              e.diabloEffectCmp.activeClick(E.JACKPOT);
                            })
                          )
                    ),
                    a = m(this.result_node).sequence(
                      m().call(function () {
                        e.resetSpinButton();
                      }),
                      m().delay(this.isFast ? 0.5 : 1)
                    ),
                    r = m(this.result_node).sequence(
                      m().call(function () {
                        if (
                          (N.getInstance().playSfx(e.win_normal_sfx),
                          e.wonJackpot ||
                            null == e.lbl_result_amount ||
                            null == e.lbl_result_amount ||
                            (e.lbl_result_amount.getComponent(f).opacity = 255),
                          e.result_tween && e.result_tween.stop(),
                          e.isFast)
                        )
                          null != e.lbl_result_amount &&
                            null != e.lbl_result_amount &&
                            (e.lbl_result_amount.string = L.formatNumber(
                              e.moneyExchange
                            ));
                        else if (!e.wonJackpot) {
                          N.getInstance().playAdditionalSfx(
                            e.win_normal_money_sfx,
                            !0
                          );
                          e.result_tween = m({ a: 0 })
                            .to(
                              1,
                              { a: e.moneyExchange },
                              {
                                progress: function (t, n, i, o) {
                                  return (
                                    null != e.lbl_result_amount &&
                                      null != e.lbl_result_amount &&
                                      (e.lbl_result_amount.string =
                                        L.formatNumber(Math.floor(i))),
                                    t + (n - t) * o
                                  );
                                },
                              }
                            )
                            .call(function () {
                              null != e.lbl_result_amount &&
                                null != e.lbl_result_amount &&
                                ((e.lbl_result_amount.string = L.formatNumber(
                                  e.moneyExchange
                                )),
                                N.getInstance().stopAdditionalSfx(
                                  e.win_normal_money_sfx
                                ));
                            })
                            .start();
                        }
                        e.bg_result_node.setAnimation(0, "animation", !1);
                        e.bg_result_node.setCompleteListener(function (t) {
                          "animation" ==
                            (t.animation ? t.animation.name : "") &&
                            e.bg_result_node.setAnimation(0, "loop", !0);
                        }),
                          !e.wonJackpot &&
                            e.moneyExchange >= 100 * e.bet &&
                            e.diabloEffectCmp.showEffect(
                              E.BIGWIN,
                              e.isFast ? 2 : 1,
                              e.isFast ? 1 : e.timeToShowResults - o,
                              0
                            );
                      }),
                      this.wonJackpot ? l : a,
                      m().call(function () {
                        return t && t();
                      })
                    );
                  m(
                    null == (n = this.lbl_result_amount)
                      ? void 0
                      : n.getComponent(f)
                  )
                    .sequence(
                      m().delay(o),
                      m().delay(this.isFast ? 1 : this.timeToShowResults - o),
                      m().to(0.5, { opacity: 1 })
                    )
                    .start(),
                    r.start();
                }),
                (l.update = function (t) {
                  null != this.lblTongCuoc &&
                    null != this.lblTongCuoc &&
                    (this.lblTongCuoc.string = L.formatMoneyNumber(
                      this.getTotalBet()
                    ));
                }),
                (l.spin = function () {
                  if (this.diablo_SlotMachineCmp.isStopped())
                    if (this.lineArr.length <= 0)
                      T.showNoti("Vui lòng chọn dòng");
                    else {
                      var t;
                      if (this.moneyExchange > 0)
                        this.result_tween && this.result_tween.stop(),
                          null != this.lbl_result_amount &&
                            null != this.lbl_result_amount &&
                            (this.lbl_result_amount.string = L.formatNumber(
                              this.moneyExchange
                            )),
                          m(
                            null == (t = this.lbl_result_amount)
                              ? void 0
                              : t.getComponent(f)
                          )
                            .sequence(
                              m().delay(0.5),
                              m().to(0.5, { opacity: 1 })
                            )
                            .start();
                      N.getInstance().stopAllAdditionalSfx(),
                        this.diabloEffectCmp.hideAll(),
                        (this.symbols = []),
                        (this.wonFreeSpins = 0),
                        (this.btn_spin.interactable = !1),
                        this.btn_spin_skeleton.setAnimation(0, "stop", !0),
                        d.stopAllByTarget(this.node),
                        this.diablo_SlotMachineCmp.spin(),
                        this.requestSpin(),
                        N.getInstance().playAdditionalSfx(
                          this.spin_sfx_loop,
                          !0
                        );
                    }
                }),
                (l.stop = function (t, n) {
                  var e = this;
                  (void 0 === n && (n = !1),
                  this.diablo_SlotMachineCmp.isSpinning()) &&
                    (0 == t.length &&
                      ((this.moneyExchange = 0), (this.rewards = [])),
                    m(this.node)
                      .sequence(
                        m().delay(z.TIME_TO_SHOW_RESULT),
                        m().call(function () {
                          (e.btn_spin.interactable = !0),
                            e.isFast || n
                              ? e.diablo_SlotMachineCmp.stopImmediately(t)
                              : e.diablo_SlotMachineCmp.stop(t);
                        })
                      )
                      .start());
                }),
                (l.receiveData = function (t, n, e, i, o, l, a, r) {
                  (this._aid = t),
                    (this.symbols = i.map(function (t) {
                      var n = new F();
                      return n.decodeItem(t), n;
                    })),
                    (this.rewards = e),
                    (this.moneyExchange = n),
                    (this.wonJackpot =
                      this.rewards.filter(function (t) {
                        return 1 == t.iJ;
                      }).length > 0),
                    (this.miniGameDict = a ? r : null),
                    (this.wonFreeSpins = l - this.currentFreeSpin),
                    this.wonFreeSpins < 0 && (this.wonFreeSpins = 0),
                    this.wonFreeSpins > 0
                      ? (this.currentFreeSpin = l)
                      : this.currentFreeSpin > 0 &&
                        ((this.currentFreeSpin -= 1),
                        (this.lbl_freespinCount.node.parent.active =
                          this.currentFreeSpin > 0),
                        (this.lbl_freespinCount.string =
                          this.currentFreeSpin.toString())),
                    this.stop(this.symbols);
                }),
                (l.updateJackpot = function (t, n) {
                  void 0 === n && (n = !1), n && (this._jackpotInfos = []);
                  for (var e = 0; e < t.length; e++) {
                    var i = t[e],
                      o = i.J,
                      l = i.aid,
                      a = i.b;
                    if (i.gid == A.DIABLO)
                      if (n) {
                        var r = new Jn();
                        (r.jackpot = o),
                          (r.aid = l),
                          (r.bet = a),
                          this._jackpotInfos.push(r);
                      } else
                        for (var s = 0; s < this._jackpotInfos.length; s++)
                          if (
                            this._jackpotInfos[s].aid == l &&
                            this._jackpotInfos[s].bet == a
                          ) {
                            this._jackpotInfos[s].jackpot = o;
                            break;
                          }
                  }
                  if (n) {
                    for (var u = [], c = 0; c < this._jackpotInfos.length; c++)
                      if (1 == this._jackpotInfos[c].aid) {
                        var b = new Jn();
                        (b.jackpot = this._jackpotInfos[c].jackpot),
                          (b.aid = this._jackpotInfos[c].aid),
                          (b.bet = this._jackpotInfos[c].bet),
                          u.push(b);
                      }
                    for (var p = 0; p < this._jackpotInfos.length; p++)
                      if (2 == this._jackpotInfos[p].aid) {
                        var _ = new Jn();
                        (_.jackpot = this._jackpotInfos[p].jackpot),
                          (_.aid = this._jackpotInfos[p].aid),
                          (_.bet = this._jackpotInfos[p].bet),
                          u.push(_);
                      }
                    for (var f = 1, h = 0; h < u.length - 1; h++) {
                      for (var m = h + 1; m < u.length; m++)
                        if (
                          u[h].aid == f &&
                          u[m].aid == f &&
                          u[m].bet < u[h].bet
                        ) {
                          var d = u[h].bet,
                            g = u[h].jackpot;
                          (u[h].bet = u[m].bet),
                            (u[h].jackpot = u[m].jackpot),
                            (u[m].bet = d),
                            (u[m].jackpot = g),
                            (m = h + 1);
                        }
                      h == u.length - 2 && 1 == f && ((h = 0), (f = 2));
                    }
                    this._jackpotInfos = u;
                  }
                  this.updateJackpotLabels(!n), this.updateLobbyJackpotLabels();
                }),
                (l.updateJackpotLabels = function (t) {
                  for (var n = this, e = 0; e < this._jackpotInfos.length; e++)
                    if (
                      this._jackpotInfos[e].aid == this._aid &&
                      this._jackpotInfos[e].bet == this.bet
                    ) {
                      if (
                        (this.jackpot_tween && this.jackpot_tween.stop(), t)
                      ) {
                        var i = { a: this.jackpot_amount };
                        (this.jackpot_tween = m(i)
                          .to(
                            2,
                            { a: this._jackpotInfos[e].jackpot },
                            {
                              progress: function (t, e, i, o) {
                                return (
                                  null != n.lblJackpot &&
                                    null != n.lblJackpot &&
                                    ((n.jackpot_amount = i),
                                    (n.lblJackpot.string = L.formatNumber(
                                      Math.floor(i)
                                    ))),
                                  t + (e - t) * o
                                );
                              },
                            }
                          )
                          .call(function () {
                            null != n.lblJackpot && n.lblJackpot;
                          })),
                          this.jackpot_tween.start();
                      } else
                        (this.jackpot_amount = this._jackpotInfos[e].jackpot),
                          null != this.lblJackpot &&
                            null != this.lblJackpot &&
                            (this.lblJackpot.string = L.formatNumber(
                              this.jackpot_amount
                            ));
                      break;
                    }
                }),
                (l.updateLobbyJackpotLabels = function () {
                  for (
                    var t = this,
                      n = function (n) {
                        t.lobby_jackpot_tween[n] &&
                          t.lobby_jackpot_tween[n].stop();
                        var e = { a: t.lobbyJackpots[n] };
                        (t.lobby_jackpot_tween[n] = m(e).to(
                          2,
                          { a: t._jackpotInfos[n].jackpot },
                          {
                            progress: function (e, i, o, l) {
                              return (
                                null != t.lbl_lobby_jackpots &&
                                  null != t.lbl_lobby_jackpots &&
                                  null != t.lbl_lobby_jackpots[n] &&
                                  null != t.lbl_lobby_jackpots[n] &&
                                  ((t.lobbyJackpots[n] = o),
                                  (t.lbl_lobby_jackpots[n].string =
                                    L.formatNumber(Math.floor(o)))),
                                e + (i - e) * l
                              );
                            },
                          }
                        )),
                          t.lobby_jackpot_tween[n].start();
                      },
                      e = 0;
                    e < this._jackpotInfos.length;
                    e++
                  )
                    n(e);
                }),
                (l.setLines = function (t) {
                  (this.lineArr = t.map(function (t) {
                    return t.lid;
                  })),
                    (z.LINE = t.map(function (t) {
                      return t.poss;
                    }));
                }),
                (l.setLines2 = function (t) {
                  this.lineArr = t;
                }),
                (l.show = function () {
                  return t.prototype.show.call(this);
                }),
                n
              );
            })(J)).isPlayedIntro = !1),
            (An.instance = null),
            (Vt = n((Nt = An).prototype, "lblJackpot", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ot = n(Nt.prototype, "lbl_lobby_jackpots", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Rt = n(Nt.prototype, "lblTongCuoc", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pt = n(Nt.prototype, "btn_help", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (qt = n(Nt.prototype, "btn_spin", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Gt = n(Nt.prototype, "btn_stopautoSpin", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ut = n(Nt.prototype, "btn_spin_skeleton", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ht = n(Nt.prototype, "btn_fast", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Kt = n(Nt.prototype, "btn_lobby_back", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Wt = n(Nt.prototype, "btn_main_back", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Qt = n(Nt.prototype, "result_node", [$], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Yt = n(Nt.prototype, "bg_result_node", [tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Xt = n(Nt.prototype, "lbl_result_amount", [nt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Zt = n(Nt.prototype, "diablo_SlotMachineCmp", [et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($t = n(Nt.prototype, "loaded_item_normal", [it], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (tn = n(Nt.prototype, "loaded_item_blur", [ot], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (nn = n(Nt.prototype, "loaded_anim_item", [lt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (en = n(Nt.prototype, "loading_node", [at], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (on = n(Nt.prototype, "loading_bg", [rt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ln = n(Nt.prototype, "lobby_node", [st], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (an = n(Nt.prototype, "lobby_fx", [ut], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (rn = n(Nt.prototype, "main_node", [ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (sn = n(Nt.prototype, "top_node", [bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (un = n(Nt.prototype, "btn_history", [pt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (cn = n(Nt.prototype, "btn_info", [_t], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (bn = n(Nt.prototype, "btn_setting", [ft], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (pn = n(Nt.prototype, "btn_so_phong", [ht], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_n = n(Nt.prototype, "lbl_so_phong", [mt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (fn = n(Nt.prototype, "diabloBetHistoryView", [dt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (hn = n(Nt.prototype, "diabloInfoView", [gt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (mn = n(Nt.prototype, "diabloSettingView", [yt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (dn = n(Nt.prototype, "bottom_node", [wt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (gn = n(Nt.prototype, "btn_bets", [kt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (yn = n(Nt.prototype, "spr_background", [St], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (wn = n(Nt.prototype, "sprFrame_backgrounds", [vt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (kn = n(Nt.prototype, "spr_background_top", [Ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Sn = n(Nt.prototype, "sprFrame_backgrounds_top", [It], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (vn = n(Nt.prototype, "spr_background_bottom", [jt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Cn = n(Nt.prototype, "diabloEffectCmp", [Mt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (In = n(Nt.prototype, "diablo_lobby_bgm_music", [Et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (jn = n(Nt.prototype, "diablo_main_bgm_music", [zt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Mn = n(Nt.prototype, "spin_sfx_loop", [Ft], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (En = n(Nt.prototype, "spin_end_sfx", [xt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (zn = n(Nt.prototype, "win_normal_sfx", [Bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Fn = n(Nt.prototype, "win_normal_money_sfx", [Tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (xn = n(Nt.prototype, "expanding_wild_sfx", [At], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Bn = n(Nt.prototype, "trial_node", [Dt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Tn = n(Nt.prototype, "sprFrame_backgrounds_bottom", [Lt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Jt = Nt))
          ) || Jt)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DiabloInfoView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CommonPopup.ts"],
  function (e) {
    "use strict";
    var n, t, r, i, o, a, s, u, c, l, p, f, _, b, m, h;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (r = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (a = e._decorator),
            (s = e.Button),
            (u = e.Node),
            (c = e.Sprite),
            (l = e.SpriteFrame),
            (p = e.clamp),
            (f = e.Tween),
            (_ = e.UITransform),
            (b = e.tween),
            (m = e.Vec3);
        },
        function (e) {
          h = e.CommonPopup;
        },
      ],
      execute: function () {
        var d, g, w, y, I, x, v, z, D, F, P, T, V, B, C;
        o._RF.push({}, "982a8FrNxtLCb3UIq+MTFiZ", "DiabloInfoView", void 0);
        var L = a.ccclass,
          S = a.property;
        e(
          "DiabloInfoView",
          ((d = L("DiabloInfoView")),
          (g = S(s)),
          (w = S(s)),
          (y = S(u)),
          (I = S([c])),
          (x = S([l])),
          (v = S([l])),
          d(
            ((F = n(
              (D = (function (e) {
                function n() {
                  for (
                    var n, t = arguments.length, o = new Array(t), a = 0;
                    a < t;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (n = e.call.apply(e, [this].concat(o)) || this),
                    r(n, "btn_prev", F, i(n)),
                    r(n, "btn_next", P, i(n)),
                    r(n, "content", T, i(n)),
                    r(n, "spr_infos", V, i(n)),
                    r(n, "spr_0_frames", B, i(n)),
                    r(n, "spr_1_frames", C, i(n)),
                    (n.currentIndex = 0),
                    n
                  );
                }
                t(n, e);
                var o = n.prototype;
                return (
                  (o.onLoad = function () {
                    var e = this;
                    this.btn_next.node.on("click", function () {
                      e.currentIndex++,
                        e.currentIndex >= e.spr_infos.length &&
                          (e.currentIndex = 0),
                        e.loadPage();
                    }),
                      this.btn_prev.node.on("click", function () {
                        e.currentIndex--,
                          e.currentIndex < 0 &&
                            (e.currentIndex = e.spr_infos.length - 1),
                          e.loadPage();
                      });
                  }),
                  (o.setBet = function (e) {
                    (e = p(e, 0, this.spr_0_frames.length - 1)),
                      (this.spr_infos[0].spriteFrame = this.spr_0_frames[e]),
                      (this.spr_infos[1].spriteFrame = this.spr_1_frames[e]);
                  }),
                  (o.loadPage = function (e) {
                    f.stopAllByTarget(this.content);
                    for (var n = 0, t = 1; t <= this.currentIndex; t++)
                      n += this.spr_infos[t].getComponent(_).contentSize.width;
                    b(this.content)
                      .to(
                        0.5,
                        { position: new m(-n, 0, 0) },
                        { easing: "expoOut" }
                      )
                      .start();
                  }),
                  n
                );
              })(h)).prototype,
              "btn_prev",
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
            (P = n(D.prototype, "btn_next", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = n(D.prototype, "content", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = n(D.prototype, "spr_infos", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (B = n(D.prototype, "spr_0_frames", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (C = n(D.prototype, "spr_1_frames", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
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
  "chunks:///_virtual/DiabloJackpotHistoryItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var i, e, n, r, o, a, l, u, p;
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
            (l = t.Label),
            (u = t.Component);
        },
        function (t) {
          p = t.StringUtils;
        },
      ],
      execute: function () {
        var c, s, h, _, f, b, g, m, y, x, d, w, k;
        o._RF.push(
          {},
          "503f7GAQkBI9q6SmTydrBpj",
          "DiabloJackpotHistoryItemView",
          void 0
        );
        var z = a.ccclass,
          v = a.property;
        t(
          "default",
          ((c = z("DiabloJackpotHistoryItemView")),
          (s = v(l)),
          (h = v(l)),
          (_ = v(l)),
          (f = v(l)),
          (b = v(l)),
          c(
            ((y = i(
              (m = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, o = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    n(i, "txt_phien_loai", y, r(i)),
                    n(i, "txt_phien_time", x, r(i)),
                    n(i, "txt_phien_datcuoc", d, r(i)),
                    n(i, "txt_phien_taikhoan", w, r(i)),
                    n(i, "txt_phien_tienthang", k, r(i)),
                    i
                  );
                }
                return (
                  e(i, t),
                  (i.prototype.show = function (t, i, e, n, r) {
                    (this.txt_phien_taikhoan.string = t),
                      (this.txt_phien_time.string = i.toString()),
                      (this.txt_phien_datcuoc.string = p.formatNumber(e)),
                      (this.txt_phien_loai.string = r.toString()),
                      (this.txt_phien_tienthang.string = p.formatNumber(n));
                  }),
                  i
                );
              })(u)).prototype,
              "txt_phien_loai",
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
            (x = i(m.prototype, "txt_phien_time", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = i(m.prototype, "txt_phien_datcuoc", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = i(m.prototype, "txt_phien_taikhoan", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = i(m.prototype, "txt_phien_tienthang", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = m))
          ) || g)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DiabloJackpotHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./DiabloJackpotHistoryItemView.ts",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./HttpManager.ts",
    "./Define.ts",
    "./StringUtils.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, r, a, s, c, l, u, p, g, m, f, h, b, y;
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
            (s = t.Button),
            (c = t.Label),
            (l = t.Node),
            (u = t.UIOpacity);
        },
        function (t) {
          p = t.default;
        },
        function (t) {
          g = t.CommonPopup;
        },
        function (t) {
          m = t.GameConfigManager;
        },
        function (t) {
          (f = t.HttpCommand), (h = t.httpManager);
        },
        function (t) {
          b = t.GameID;
        },
        function (t) {
          y = t.StringUtils;
        },
      ],
      execute: function () {
        var _, d, v, w, P, H, k, D, T, C, S;
        r._RF.push(
          {},
          "e260fcMnZFPcpeQU8GNqXMr",
          "DiabloJackpotHistoryView",
          void 0
        );
        var J = a.ccclass,
          L = a.property,
          M = function () {
            (this.rank = 0),
              (this.money = 0),
              (this.displayName = ""),
              (this.bet = 0),
              (this.type = 0),
              (this.betTime = "");
          };
        t(
          "default",
          ((_ = J("DiabloJackpotHistoryView")),
          (d = L(s)),
          (v = L(s)),
          (w = L(c)),
          (P = L([l])),
          _(
            ((D = e(
              (k = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    n(e, "btn_prev", D, o(e)),
                    n(e, "btn_next", T, o(e)),
                    n(e, "lbl_page", C, o(e)),
                    n(e, "item_nodes", S, o(e)),
                    (e._bets = []),
                    (e.currentPage = 1),
                    (e.max_pages = 0),
                    (e.item_views = []),
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
                    void 0 === t && (t = !0), t && this.goToFirstPage();
                    var i = 6 * (this.currentPage - 1),
                      n =
                        m.SAdomainURL +
                        f.JACKPOT_RANK_TOP_URL.replace(
                          "%gameid%",
                          b.DIABLO.toString()
                        ).replace("%skip%", i.toString());
                    h.sendGET({
                      url: n,
                      onCompleted: function (i) {
                        e._bets = [];
                        var n = JSON.parse(i).data,
                          o = n.items;
                        if (null != o) {
                          var r = n.count;
                          e.max_pages = Math.ceil(r / 6);
                          for (var a = 0; a < o.length; a++) {
                            var s = o[a],
                              c = new M();
                            (c.displayName = s.displayName),
                              (c.bet = s.betting),
                              (c.money = s.money),
                              (c.type = s.description);
                            var l = s.createdTime,
                              u = new Date(l);
                            (c.betTime = y.formatTime(u)), e._bets.push(c);
                          }
                          e.showJackpotHistory(t);
                        }
                      },
                    });
                  }),
                  (r.showJackpotHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0),
                      this.item_views.length <= 0 &&
                        (this.item_views = this.item_nodes.map(function (t) {
                          return t.getComponent(p);
                        })),
                      this.item_views.forEach(function (t, i) {
                        var n = e._bets[i];
                        null != n && null != n
                          ? ((t.node.getComponent(u).opacity = 255),
                            t.show(
                              n.displayName,
                              n.betTime,
                              n.bet,
                              n.money,
                              n.type
                            ))
                          : (t.node.getComponent(u).opacity = 1);
                      }),
                      t && this.show();
                  }),
                  e
                );
              })(g)).prototype,
              "btn_prev",
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
            (T = e(k.prototype, "btn_next", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = e(k.prototype, "lbl_page", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = e(k.prototype, "item_nodes", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (H = k))
          ) || H)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DiabloNetworkController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BaseSlotGameNetworkController.ts",
    "./Define.ts",
    "./DiabloFullScreenGameView.ts",
  ],
  function (e) {
    "use strict";
    var t, n, o, r, i;
    return {
      setters: [
        function (e) {
          t = e.inheritsLoose;
        },
        function (e) {
          n = e.cclegacy;
        },
        function (e) {
          o = e.BaseSlotGameNetworkController;
        },
        function (e) {
          r = e.GameID;
        },
        function (e) {
          i = e.DiabloFullScreenGameView;
        },
      ],
      execute: function () {
        n._RF.push(
          {},
          "09148LgC6VH7qDMGVySHSp7",
          "DiabloNetworkController",
          void 0
        ),
          (e(
            "DiabloNetworkController",
            (function (e) {
              function n() {
                return e.apply(this, arguments) || this;
              }
              t(n, e),
                (n.getInstance = function () {
                  return n._instance || (n._instance = new n()), n._instance;
                });
              var o = n.prototype;
              return (
                (o.getGameView = function () {
                  return i.getInstance();
                }),
                (o.getGameID = function () {
                  return r.DIABLO;
                }),
                n
              );
            })(o)
          )._instance = void 0),
          n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DiabloNoHuView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./DiabloFullScreenGameView.ts",
    "./StringUtils.ts",
    "./SoundManager.ts",
  ],
  function (t) {
    "use strict";
    var n, e, i, o, a, r, l, c, u, s, _, p, h, m, f, w, k, b;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (r = t._decorator),
            (l = t.Node),
            (c = t.sp),
            (u = t.Label),
            (s = t.AudioClip),
            (_ = t.Vec3),
            (p = t.UIOpacity),
            (h = t.Tween),
            (m = t.tween),
            (f = t.Component);
        },
        function (t) {
          w = t.DiabloFullScreenGameView;
        },
        function (t) {
          k = t.StringUtils;
        },
        function (t) {
          b = t.SoundManager;
        },
      ],
      execute: function () {
        var d, g, v, y, j, D, S, A, N, z, C, V, L;
        a._RF.push({}, "6480c4Ml/NO1KjBY/AcBEWe", "DiabloNoHuView", void 0);
        var M = r.ccclass,
          x = r.property;
        t(
          "DiabloNoHuView",
          ((d = M("DiabloNoHuView")),
          (g = x(l)),
          (v = x(l)),
          (y = x(c.Skeleton)),
          (j = x(u)),
          (D = x(s)),
          d(
            ((N = n(
              (A = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, a = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (n = t.call.apply(t, [this].concat(a)) || this),
                    i(n, "root", N, o(n)),
                    i(n, "black_screen", z, o(n)),
                    i(n, "jackpot_skeleton", C, o(n)),
                    i(n, "nohu_win_amount", V, o(n)),
                    i(n, "jackpot_money_sfx", L, o(n)),
                    (n.win_amount_tween = null),
                    (n.activated_click = !1),
                    n
                  );
                }
                e(n, t);
                var a = n.prototype;
                return (
                  (a.onLoad = function () {
                    var t = this;
                    this.black_screen.on("click", function () {
                      t.activated_click && t.hide();
                    });
                  }),
                  (a.activeClick = function () {
                    (this.black_screen.active = !0),
                      (this.activated_click = !0);
                  }),
                  (a.show = function (t) {
                    var n = this;
                    (this.root.active = !0),
                      (this.black_screen.active = !0),
                      (this.activated_click = !1),
                      this.jackpot_skeleton.setAnimation(0, "appear", !1),
                      this.jackpot_skeleton.setCompleteListener(function (t) {
                        null != t &&
                          "appear" == (t.animation ? t.animation.name : "") &&
                          n.jackpot_skeleton.setAnimation(0, "loop", !0);
                      }),
                      (this.nohu_win_amount.string = "0"),
                      this.nohu_win_amount.node.parent.setPosition(
                        new _(0, -600, 0)
                      ),
                      (this.nohu_win_amount.getComponent(p).opacity = 255),
                      h.stopAllByTarget(this.nohu_win_amount.node.parent),
                      m(this.nohu_win_amount.node.parent)
                        .delay(2)
                        .call(function () {
                          (n.nohu_win_amount.node.parent.active = !0),
                            b.getInstance().playSfx(n.jackpot_money_sfx);
                        })
                        .to(0.1, { position: new _(0, -250, 0) })
                        .call(function () {
                          n.win_amount_tween && n.win_amount_tween.stop();
                          n.win_amount_tween = m({ a: 0 })
                            .to(
                              4,
                              { a: t },
                              {
                                progress: function (t, e, i, o) {
                                  return (
                                    null != n.nohu_win_amount &&
                                      null != n.nohu_win_amount &&
                                      (n.nohu_win_amount.string =
                                        k.formatNumber(Math.floor(i))),
                                    t + (e - t) * o
                                  );
                                },
                              }
                            )
                            .call(function () {
                              null != n.nohu_win_amount &&
                                null != n.nohu_win_amount &&
                                (n.nohu_win_amount.string = k.formatNumber(
                                  Math.floor(t)
                                ));
                            })
                            .start();
                        })
                        .start();
                  }),
                  (a.hide = function () {
                    this.root.active && w.getInstance().finishedJackpot(),
                      (this.activated_click = !1);
                    var t = this,
                      n = this.nohu_win_amount.getComponent(p);
                    h.stopAllByTarget(n),
                      m(n).to(1, { opacity: 0 }).start(),
                      this.jackpot_skeleton.setAnimation(0, "disappear", !1),
                      this.jackpot_skeleton.setCompleteListener(function (n) {
                        null != n &&
                          "disappear" ==
                            (n.animation ? n.animation.name : "") &&
                          ((t.black_screen.active = !1), (t.root.active = !1));
                      });
                  }),
                  n
                );
              })(f)).prototype,
              "root",
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
            (z = n(A.prototype, "black_screen", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = n(A.prototype, "jackpot_skeleton", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = n(A.prototype, "nohu_win_amount", [j], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = n(A.prototype, "jackpot_money_sfx", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = A))
          ) || S)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DiabloSettingView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./DiabloBetHistoryView.ts",
    "./DiabloJackpotHistoryView.ts",
    "./CommonPopup.ts",
    "./Define.ts",
    "./EventManager.ts",
  ],
  function (t) {
    "use strict";
    var e, i, o, n, r, c, l, u, s, a, g, f, b, h;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy), (c = t._decorator), (l = t.Button), (u = t.Toggle);
        },
        function (t) {
          s = t.default;
        },
        function (t) {
          a = t.default;
        },
        function (t) {
          g = t.CommonPopup;
        },
        function (t) {
          f = t.StorageKey;
        },
        function (t) {
          (b = t.eventManager), (h = t.EventKey);
        },
      ],
      execute: function () {
        var p, d, m, y, _, w, S, k, V, H, v, C, D, x, z;
        r._RF.push({}, "f53ffujzsxAca1cMEdsqtcT", "DiabloSettingView", void 0);
        var M = c.ccclass,
          I = c.property;
        t(
          "DiabloSettingView",
          ((p = M("DiabloSettingView")),
          (d = I(l)),
          (m = I(l)),
          (y = I(u)),
          (_ = I(u)),
          (w = I(s)),
          (S = I(a)),
          p(
            ((H = e(
              (V = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), c = 0;
                    c < i;
                    c++
                  )
                    r[c] = arguments[c];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    o(e, "btn_lichsucuoc", H, n(e)),
                    o(e, "btn_lichsuhu", v, n(e)),
                    o(e, "tog_music", C, n(e)),
                    o(e, "tog_sfx", D, n(e)),
                    o(e, "diabloBetHistoryView", x, n(e)),
                    o(e, "diabloJackpotHistoryView", z, n(e)),
                    e
                  );
                }
                return (
                  i(e, t),
                  (e.prototype.onLoad = function () {
                    var t,
                      e,
                      i = this;
                    this.btn_lichsucuoc.node.on("click", function () {
                      i.diabloBetHistoryView.fetchHistory();
                    }),
                      this.btn_lichsuhu.node.on("click", function () {
                        i.diabloJackpotHistoryView.fetchHistory();
                      }),
                      (this.tog_sfx.isChecked =
                        "1" == localStorage.getItem(f.SoundFX) ||
                        "true" == localStorage.getItem(f.SoundFX)),
                      (this.tog_music.isChecked =
                        "1" == localStorage.getItem(f.Music) ||
                        "true" == localStorage.getItem(f.Music)),
                      b.emit(h.MusicToggle, this.tog_music.isChecked),
                      b.emit(h.SoundToggle, this.tog_sfx.isChecked),
                      null == (t = this.tog_sfx) ||
                        t.node.on("toggle", function () {
                          localStorage.setItem(
                            f.SoundFX,
                            i.tog_sfx.isChecked ? "1" : "0"
                          ),
                            b.emit(h.SoundToggle, i.tog_sfx.isChecked);
                        }),
                      null == (e = this.tog_music) ||
                        e.node.on("toggle", function () {
                          localStorage.setItem(
                            f.Music,
                            i.tog_music.isChecked ? "1" : "0"
                          ),
                            b.emit(h.MusicToggle, i.tog_music.isChecked);
                        });
                  }),
                  e
                );
              })(g)).prototype,
              "btn_lichsucuoc",
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
            (v = e(V.prototype, "btn_lichsuhu", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = e(V.prototype, "tog_music", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = e(V.prototype, "tog_sfx", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = e(V.prototype, "diabloBetHistoryView", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(V.prototype, "diabloJackpotHistoryView", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = V))
          ) || k)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/DiabloSummaryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./SoundManager.ts",
  ],
  function (e) {
    "use strict";
    var o, n, t, i, r, a, u, c, s;
    return {
      setters: [
        function (e) {
          (o = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (i = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy), (a = e._decorator), (u = e.AudioClip);
        },
        function (e) {
          c = e.CommonPopup;
        },
        function (e) {
          s = e.SoundManager;
        },
      ],
      execute: function () {
        var l, p, f, y, m;
        r._RF.push({}, "a1c8du9IDZHMrZUWpnXvv91", "DiabloSummaryView", void 0);
        var h = a.ccclass,
          d = a.property;
        e(
          "DiabloSummaryView",
          ((l = h("DiabloSummaryView")),
          (p = d(u)),
          l(
            ((m = o(
              (y = (function (e) {
                function o() {
                  for (
                    var o, n = arguments.length, r = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (o = e.call.apply(e, [this].concat(r)) || this),
                    t(o, "open_sfx", m, i(o)),
                    o
                  );
                }
                return (
                  n(o, e),
                  (o.prototype.show = function (o) {
                    void 0 === o && (o = function () {}),
                      e.prototype.show.call(this, o),
                      s.getInstance().playSfx(this.open_sfx);
                  }),
                  o
                );
              })(c)).prototype,
              "open_sfx",
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
            (f = y))
          ) || f)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/slot-naruto",
  [
    "./DiabloBetHistoryDetail.ts",
    "./DiabloBetHistoryItemView.ts",
    "./DiabloBetHistoryView.ts",
    "./DiabloBonusItemView.ts",
    "./DiabloBonusView.ts",
    "./DiabloFullScreenGameView.ts",
    "./DiabloInfoView.ts",
    "./DiabloJackpotHistoryItemView.ts",
    "./DiabloJackpotHistoryView.ts",
    "./DiabloNetworkController.ts",
    "./DiabloNoHuView.ts",
    "./DiabloSettingView.ts",
    "./DiabloSummaryView.ts",
    "./Diablo_EffectCmp.ts",
    "./Diablo_SlotMachineCmp.ts",
    "./Diablo_SlotMachineColumn.ts",
    "./Diablo_SlotMachineItemView.ts",
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
      ],
      execute: function () {},
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/slot-naruto",
    "chunks:///_virtual/slot-naruto"
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
