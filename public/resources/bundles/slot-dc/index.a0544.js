System.register(
  "chunks:///_virtual/AS_EffectCmp.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ASBonusView.ts",
    "./ASNoHuView.ts",
    "./SoundManager.ts",
  ],
  function (e) {
    "use strict";
    var i, n, t, o, s, a, r, l, c, u, f, b, p, h, _;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (t = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (s = e.cclegacy),
            (a = e._decorator),
            (r = e.Node),
            (l = e.sp),
            (c = e.AudioClip),
            (u = e.Tween),
            (f = e.tween),
            (b = e.Component);
        },
        function (e) {
          p = e.ASBonusView;
        },
        function (e) {
          h = e.ASNoHuView;
        },
        function (e) {
          _ = e.SoundManager;
        },
      ],
      execute: function () {
        var k, d, w, g, y, E, v, S, B, m, A, C, I, T, N, V, z, F, O, P, H, J, R;
        e("EFFECT_TYPE", void 0),
          s._RF.push({}, "5780fjJgg5C1IQoz5BHr/vl", "AS_EffectCmp", void 0);
        var G,
          K = a.ccclass,
          W = a.property;
        !(function (e) {
          (e[(e.FREE = 0)] = "FREE"),
            (e[(e.BIGWIN = 1)] = "BIGWIN"),
            (e[(e.JACKPOT = 2)] = "JACKPOT"),
            (e[(e.BONUS = 3)] = "BONUS");
        })(G || (G = e("EFFECT_TYPE", {})));
        e(
          "AS_EffectCmp",
          ((k = K("AS_EffectCmp")),
          (d = W(r)),
          (w = W(l.Skeleton)),
          (g = W(l.Skeleton)),
          (y = W(l.Skeleton)),
          (E = W(h)),
          (v = W(p)),
          (S = W(c)),
          (B = W(c)),
          (m = W(c)),
          (A = W(c)),
          k(
            ((T = i(
              (I = (function (e) {
                function i() {
                  for (
                    var i, n = arguments.length, s = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (i = e.call.apply(e, [this].concat(s)) || this),
                    t(i, "black_screen", T, o(i)),
                    t(i, "freespin_skeleton", N, o(i)),
                    t(i, "bigwin_skeleton", V, o(i)),
                    t(i, "bonus_skeleton", z, o(i)),
                    t(i, "noHuView", F, o(i)),
                    t(i, "asBonusView", O, o(i)),
                    t(i, "bigwin_audio", P, o(i)),
                    t(i, "freespin_audio", H, o(i)),
                    t(i, "nohu_audio", J, o(i)),
                    t(i, "bonus_audio", R, o(i)),
                    i
                  );
                }
                n(i, e);
                var s = i.prototype;
                return (
                  (s.showEffect = function (e, i, n, t) {
                    var o = this;
                    switch ((cc.log("JLDC show effect type: " + e), e)) {
                      case G.BIGWIN:
                        u.stopAllByTarget(this.bigwin_skeleton.node),
                          _.getInstance().playSfx(this.bigwin_audio),
                          (this.bigwin_skeleton.timeScale = i),
                          (this.black_screen.active = !1),
                          (this.bigwin_skeleton.node.active = !0),
                          this.bigwin_skeleton.setAnimation(0, "appear", !0),
                          f(this.bigwin_skeleton.node)
                            .sequence(
                              f().delay(n),
                              f().call(function () {
                                (o.black_screen.active = !1),
                                  (o.bigwin_skeleton.node.active = !1);
                              })
                            )
                            .start();
                        break;
                      case G.FREE:
                        u.stopAllByTarget(this.freespin_skeleton.node),
                          _.getInstance().playSfx(this.freespin_audio),
                          (this.freespin_skeleton.timeScale = i),
                          (this.black_screen.active = !1),
                          (this.freespin_skeleton.node.active = !0),
                          this.freespin_skeleton.setAnimation(0, "appear", !1),
                          f(this.freespin_skeleton.node)
                            .sequence(
                              f().delay(n),
                              f().call(function () {
                                (o.black_screen.active = !1),
                                  (o.freespin_skeleton.node.active = !1);
                              })
                            )
                            .start();
                        break;
                      case G.JACKPOT:
                        _.getInstance().playBgm(this.nohu_audio),
                          this.noHuView.show(t);
                        break;
                      case G.BONUS:
                        u.stopAllByTarget(this.bonus_skeleton.node),
                          _.getInstance().playBgm(this.bonus_audio),
                          (this.black_screen.active = !1),
                          (this.bonus_skeleton.node.active = !0),
                          (this.bonus_skeleton.timeScale = i),
                          this.bonus_skeleton.setAnimation(0, "appear", !1),
                          f(this.bonus_skeleton.node)
                            .call(function () {
                              o.asBonusView.playStartSfx();
                            })
                            .delay(n)
                            .call(function () {
                              o.asBonusView.show(t, i),
                                (o.bonus_skeleton.node.active = !1);
                            })
                            .start();
                    }
                  }),
                  (s.hideEffect = function (e) {
                    switch (e) {
                      case G.BIGWIN:
                        (this.black_screen.active = !1),
                          (this.bigwin_skeleton.node.active = !1);
                        break;
                      case G.FREE:
                        (this.black_screen.active = !1),
                          (this.freespin_skeleton.node.active = !1);
                        break;
                      case G.JACKPOT:
                        this.noHuView.hide();
                        break;
                      case G.BONUS:
                        this.asBonusView.hide();
                    }
                  }),
                  (s.hideAll = function () {
                    this.hideEffect(G.BIGWIN),
                      this.hideEffect(G.FREE),
                      this.hideEffect(G.JACKPOT),
                      this.hideEffect(G.BONUS);
                  }),
                  (s.activeClick = function (e) {
                    switch (e) {
                      case G.BIGWIN:
                      case G.FREE:
                        break;
                      case G.JACKPOT:
                        this.noHuView.activeClick();
                    }
                  }),
                  i
                );
              })(b)).prototype,
              "black_screen",
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
            (N = i(I.prototype, "freespin_skeleton", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = i(I.prototype, "bigwin_skeleton", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = i(I.prototype, "bonus_skeleton", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = i(I.prototype, "noHuView", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = i(I.prototype, "asBonusView", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = i(I.prototype, "bigwin_audio", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = i(I.prototype, "freespin_audio", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = i(I.prototype, "nohu_audio", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = i(I.prototype, "bonus_audio", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = I))
          ) || C)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/AS_SlotMachineCmp.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./AS_SlotMachineColumn.ts",
    "./LineCmp.ts",
  ],
  function (n) {
    "use strict";
    var e, t, i, o, l, r, a, c, s, u, p, f, h, d, m, y, g, C;
    return {
      setters: [
        function (n) {
          (e = n.applyDecoratedDescriptor),
            (t = n.inheritsLoose),
            (i = n.initializerDefineProperty),
            (o = n.assertThisInitialized);
        },
        function (n) {
          (l = n.cclegacy),
            (r = n._decorator),
            (a = n.Node),
            (c = n.Button),
            (s = n.Tween),
            (u = n.tween),
            (p = n.UITransform),
            (f = n.Vec3),
            (h = n.Vec2),
            (d = n.Color),
            (m = n.Component);
        },
        function (n) {
          (y = n.default), (g = n.SlotMachineState);
        },
        function (n) {
          C = n.default;
        },
      ],
      execute: function () {
        var v, S, E, _, w, L, I, T, A, N;
        l._RF.push({}, "0d1af+xIPVE1ahAhl0NJ5HK", "AS_SlotMachineCmp", void 0);
        var F = r.ccclass,
          P = r.property;
        n(
          "default",
          ((v = F("AS_SlotMachineCmp")),
          (S = P([y])),
          (E = P(C)),
          (_ = P([a])),
          v(
            (((N = (function (n) {
              function e() {
                for (
                  var e, t = arguments.length, l = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  l[r] = arguments[r];
                return (
                  (e = n.call.apply(n, [this].concat(l)) || this),
                  i(e, "colums", I, o(e)),
                  i(e, "lineCmp", T, o(e)),
                  i(e, "line_nodes", A, o(e)),
                  (e.onMachineStopped = function () {}),
                  e
                );
              }
              t(e, n);
              var l = e.prototype;
              return (
                (l.onLoad = function () {
                  var n = this;
                  this.line_nodes
                    .map(function (n) {
                      return n.getComponent(c);
                    })
                    .forEach(function (e, t) {
                      e.node.on("click", function () {
                        n.lineCmp.clear(),
                          n.drawLine(t, !1),
                          s.stopAllByTarget(n.node),
                          u(n.node)
                            .delay(1)
                            .call(function () {
                              n.lineCmp.clear();
                            })
                            .start();
                      });
                    });
                }),
                (l.init = function () {
                  var n = this;
                  this.colums.forEach(function (n) {
                    return n.init();
                  }),
                    (this.colums[this.colums.length - 1].onStopped =
                      function () {
                        return n.onMachineStopped();
                      }),
                    this.lineCmp.clear(),
                    s.stopAllByTarget(this.lineCmp.node);
                }),
                (l.spin = function () {
                  this.lineCmp.clear(),
                    s.stopAllByTarget(this.lineCmp.node),
                    this.colums.forEach(function (n) {
                      return n.spin();
                    });
                }),
                (l.stop = function (n) {
                  var e = [0.3, 0.9, 1.3, 1.8, 2.5];
                  this.colums.forEach(function (t, i) {
                    var o = t,
                      l = [n[i], n[i + 5], n[i + 10]];
                    u(o.node)
                      .sequence(
                        u().delay(e[i]),
                        u().call(function () {
                          t.getstate() == g.SPINNING && o.stop(l);
                        })
                      )
                      .start();
                  });
                }),
                (l.stopImmediately = function (n) {
                  var e = [0.1, 0.1, 0.1, 0.1, 0.1];
                  this.colums.forEach(function (t, i) {
                    if (t.getstate() == g.SPINNING) {
                      var o = t;
                      s.stopAllByTarget(o.node);
                      var l = [n[i], n[i + 5], n[i + 10]];
                      u(o.node)
                        .sequence(
                          u().delay(e[i]),
                          u().call(function () {
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
                      return n.getstate() == g.STOPPED;
                    }).length >= this.colums.length
                  );
                }),
                (l.isSpinning = function () {
                  return (
                    this.colums.filter(function (n) {
                      return n.getstate() == g.SPINNING;
                    }).length >= this.colums.length
                  );
                }),
                (l.showLines = function (n, e, t, i) {
                  var o = this;
                  this.lineCmp.clear(), s.stopAllByTarget(this.lineCmp.node);
                  var l = 0,
                    r = e / n.length;
                  n.forEach(function (n) {
                    u(o.lineCmp.node)
                      .sequence(
                        u().delay(l),
                        u().call(function () {
                          o.drawLine(n, !1);
                        })
                      )
                      .start(),
                      (l += r);
                  }),
                    u(this.lineCmp.node)
                      .sequence(
                        u().delay(e + t),
                        u().call(function () {
                          i && i();
                        })
                      )
                      .start();
                }),
                (l.showEachLines = function (n, e) {
                  var t = this;
                  void 0 === e && (e = 0),
                    this.lineCmp.clear(),
                    s.stopAllByTarget(this.lineCmp.node);
                  var i = 0,
                    o = 0;
                  n.forEach(function (l) {
                    u(t.lineCmp.node)
                      .sequence(
                        u().delay(o),
                        u().call(function () {
                          t.playFxLine(l),
                            t.drawLine(l, !0),
                            ++i >= n.length &&
                              u(t.lineCmp.node)
                                .delay(1)
                                .call(function () {
                                  t.playFx(), t.lineCmp.clear();
                                })
                                .start();
                        })
                      )
                      .start(),
                      (o += e);
                  });
                }),
                (l.drawLine = function (n, t) {
                  var i = this,
                    o = e.LINE[n].map(function (n, e) {
                      return i.colums[e].getLineWorldPosition()[n];
                    });
                  if (n < 13) {
                    var l = this.line_nodes[n].parent
                      .getComponent(p)
                      .convertToWorldSpaceAR(
                        new f(this.line_nodes[n].position)
                      );
                    o.splice(0, 0, new f(l));
                  } else {
                    var r = this.line_nodes[n].parent
                      .getComponent(p)
                      .convertToWorldSpaceAR(
                        new f(this.line_nodes[n].position)
                      );
                    o.push(new f(r));
                  }
                  this.lineCmp.draw(
                    o.map(function (n) {
                      return new h(n.x, n.y);
                    }),
                    5,
                    new d("#00FFFF"),
                    null,
                    t
                  );
                }),
                (l.playFxLine = function (n) {
                  var t = this;
                  e.LINE[n].forEach(function (n, e) {
                    t.colums[e].playFx(n);
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
                  ].forEach(function (e, t) {
                    var i = n.colums[t];
                    e.forEach(function (n) {
                      i.playFx(n, !1);
                    });
                  });
                }),
                e
              );
            })(m)).SPIN_SPEED = 2500),
            (N.TIME_TO_SHOW_RESULT = 0.5),
            (N.FIXED_DELTA_TIME = 0.016666000000004715),
            (N.LINE = [
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
            (I = e((L = N).prototype, "colums", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (T = e(L.prototype, "lineCmp", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = e(L.prototype, "line_nodes", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (w = L))
          ) || w)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/AS_SlotMachineColumn.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ASFullScreenGameView.ts",
    "./AS_SlotMachineCmp.ts",
    "./AS_SlotMachineItemView.ts",
  ],
  function (t) {
    "use strict";
    var i, o, n, e, s, a, r, p, c, h, u, m, _, f, l, y;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (e = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (a = t._decorator),
            (r = t.Node),
            (p = t.Layout),
            (c = t.Vec3),
            (h = t.Sprite),
            (u = t.UITransform),
            (m = t.tween),
            (_ = t.Component);
        },
        function (t) {
          f = t.ASFullScreenGameView;
        },
        function (t) {
          l = t.default;
        },
        function (t) {
          y = t.default;
        },
      ],
      execute: function () {
        var S, d, g, b, E, C, I, P, T;
        t("SlotMachineState", void 0),
          s._RF.push(
            {},
            "9243akoSFlJMKKIJ0gQ46a4",
            "AS_SlotMachineColumn",
            void 0
          );
        var v,
          x = a.ccclass,
          N = a.property;
        !(function (t) {
          (t[(t.SPINNING = 0)] = "SPINNING"),
            (t[(t.CHECK_TO_STOP = 1)] = "CHECK_TO_STOP"),
            (t[(t.STOPPING = 2)] = "STOPPING"),
            (t[(t.STOPPED = 3)] = "STOPPED");
        })(v || (v = t("SlotMachineState", {})));
        t(
          "default",
          ((S = x("AS_SlotMachineColumn")),
          (d = N([r])),
          (g = N(r)),
          (b = N(p)),
          S(
            ((I = i(
              (C = (function (t) {
                function i() {
                  for (
                    var i, o = arguments.length, s = new Array(o), a = 0;
                    a < o;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(s)) || this),
                    n(i, "items", I, e(i)),
                    n(i, "lineNode", P, e(i)),
                    n(i, "layout", T, e(i)),
                    (i.state = v.STOPPED),
                    (i.item_position_y_limited = 0),
                    (i.item_position_x_stop = 0),
                    (i.item_position_y_stop = 0),
                    (i.item_top = null),
                    (i.bouncing_offset_x = 0),
                    (i.bouncing_offset_y = 0),
                    (i.onStopped = function () {}),
                    (i.top_pos = c.ZERO),
                    (i.bottom_pos = c.ZERO),
                    (i.direction = c.ZERO),
                    i
                  );
                }
                o(i, t);
                var s = i.prototype;
                return (
                  (s.getLineWorldPosition = function () {
                    return this.lineNode
                      .getComponentsInChildren(h)
                      .map(function (t) {
                        return t.node.parent
                          .getComponent(u)
                          .convertToWorldSpaceAR(new c(t.node.position));
                      });
                  }),
                  (s.onLoad = function () {
                    (this.top_pos = new c(
                      this.items[this.items.length - 1].position
                    )),
                      (this.bottom_pos = new c(this.items[0].position)),
                      (this.direction = new c(
                        Math.abs(this.top_pos.x - this.bottom_pos.x),
                        Math.abs(this.top_pos.y - this.bottom_pos.y),
                        0
                      ).normalize()),
                      (this.bouncing_offset_x =
                        this.items[0].getComponent(u).contentSize.width / 20),
                      (this.bouncing_offset_y =
                        this.items[0].getComponent(u).contentSize.height / 20),
                      (this.item_position_x_stop = this.bottom_pos.x),
                      (this.item_position_y_stop =
                        this.bottom_pos.y - this.bouncing_offset_y),
                      (this.item_position_y_limited =
                        this.bottom_pos.y -
                        (this.items[0].getComponent(u).contentSize.height +
                          this.layout.spacingY));
                  }),
                  (s.init = function () {
                    (this.state = v.STOPPED),
                      this.items.forEach(function (t) {
                        t.getComponentsInChildren(y).forEach(function (t) {
                          return t.init();
                        });
                      });
                    var t = this.getBottomItem();
                    this.items.forEach(function (i) {
                      var o = i.getComponentsInChildren(y);
                      i.name != t.name
                        ? o.forEach(function (t, i) {
                            t.disable();
                          })
                        : o.forEach(function (t, i) {
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
                      (this.state = v.SPINNING);
                  }),
                  (s.stop = function (t) {
                    (this.item_top = this.getTopItem()),
                      this.item_top
                        .getComponentsInChildren(y)
                        .forEach(function (i, o) {
                          i.setItem(t[o]), i.bright();
                        }),
                      (this.state = v.CHECK_TO_STOP);
                  }),
                  (s.getstate = function () {
                    return this.state;
                  }),
                  (s.update = function (t) {
                    switch (this.state) {
                      case v.SPINNING:
                        this.spinning(t);
                        break;
                      case v.CHECK_TO_STOP:
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
                      o = !1,
                      n = l.SPIN_SPEED * t;
                    this.items.forEach(function (t) {
                      var e = new c(t.position);
                      (e.x -= i.direction.x * n),
                        (e.y -= i.direction.y * n),
                        e.y <= i.item_position_y_limited &&
                          ((e.x = i.top_pos.x), (e.y = i.top_pos.y), (o = !0)),
                        (t.position = e);
                    }),
                      o && this.sort();
                  }),
                  (s.sort = function () {
                    this.items = this.items.sort(function (t, i) {
                      return t.position.y < i.position.y ? -1 : 1;
                    });
                  }),
                  (s.checkToStop = function (t) {
                    var i = this,
                      o = l.SPIN_SPEED * t;
                    this.items.forEach(function (t) {
                      var n = new c(t.position);
                      (n.x -= i.direction.x * o),
                        (n.y -= i.direction.y * o),
                        n.y <= i.item_position_y_limited &&
                          ((n.x = i.top_pos.x), (n.y = i.top_pos.y)),
                        (t.position = n);
                    }),
                      this.item_top.position.y <= this.item_position_y_stop &&
                        (this.bounce(), (this.state = v.STOPPING));
                  }),
                  (s.bounce = function () {
                    var t = this;
                    this.sort();
                    var i = new c(this.item_top.position);
                    (i.y = this.item_position_y_stop),
                      this.item_top.setPosition(i);
                    var o =
                        Math.abs(this.item_position_x_stop) -
                        Math.abs(this.bottom_pos.x),
                      n =
                        Math.abs(this.item_position_y_stop) -
                        Math.abs(this.bottom_pos.y);
                    this.items.forEach(function (i) {
                      m(i)
                        .sequence(
                          m().by(0.1, { position: new c(o, n, 0) }),
                          m().call(function () {
                            f.getInstance().playColumnStopEnd(),
                              (t.state = v.STOPPED),
                              f.getInstance().isFastSpin()
                                ? t.items.forEach(function (i) {
                                    var o = i.getComponentsInChildren(y);
                                    i.name != t.item_top.name &&
                                      o.forEach(function (t, i) {
                                        t.disable();
                                      });
                                  })
                                : t.items.forEach(function (i) {
                                    var o = i.getComponentsInChildren(y);
                                    i.name != t.item_top.name
                                      ? o.forEach(function (t, i) {
                                          t.disable();
                                        })
                                      : o.forEach(function (t, i) {
                                          t.playFx();
                                        });
                                  });
                          }),
                          m()
                            .delay(0.2)
                            .call(function () {
                              t.onStopped && t.onStopped();
                            })
                        )
                        .start();
                    });
                  }),
                  (s.playFx = function (t, i) {
                    void 0 === i && (i = !0),
                      this.getBottomItem()
                        .getComponentsInChildren(y)
                        .forEach(function (o, n) {
                          n == t ? o.playFx() : i && o.gray();
                        });
                  }),
                  i
                );
              })(_)).prototype,
              "items",
              [d],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (P = i(C.prototype, "lineNode", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = i(C.prototype, "layout", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = C))
          ) || E)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/AS_SlotMachineItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ASFullScreenGameView.ts",
    "./GameUtils.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, r, a, o, s, m, l, u, c, h;
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
            (s = e.Sprite),
            (m = e.sp),
            (l = e.Color),
            (u = e.Component);
        },
        function (e) {
          c = e.ASFullScreenGameView;
        },
        function (e) {
          h = e.default;
        },
      ],
      execute: function () {
        var d, _, f, p, b, g, v;
        a._RF.push(
          {},
          "a0f45BT3hNLA5tDadZx+mXu",
          "AS_SlotMachineItemView",
          void 0
        );
        var S = o.ccclass,
          y = o.property,
          I = e(
            "ASItem",
            (function () {
              function e() {
                this.code = 0;
              }
              var t = e.prototype;
              return (
                (t.decodeItem = function (e) {
                  this.code = e;
                }),
                (t.getResourceNormalName = function (e) {
                  void 0 === e && (e = !1);
                  return (
                    "jldc_symbol_1_" + this.code.toString() + (e ? ".png" : "")
                  );
                }),
                (t.getResourceBlurName = function (e) {
                  void 0 === e && (e = !1);
                  return (
                    "jldc_symbol_blur_1_" +
                    this.code.toString() +
                    (e ? ".png" : "")
                  );
                }),
                (t.getResourceAnimName = function (e) {
                  void 0 === e && (e = !1);
                  return (
                    "jldc_symbol_1_" + this.code.toString() + (e ? ".json" : "")
                  );
                }),
                e
              );
            })()
          );
        e(
          "default",
          ((d = S("AS_SlotMachineItemView")),
          (_ = y(s)),
          (f = y(m.Skeleton)),
          d(
            ((g = t(
              (b = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, a = new Array(i), o = 0;
                    o < i;
                    o++
                  )
                    a[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(a)) || this),
                    n(t, "spr_item", g, r(t)),
                    n(t, "anim_item", v, r(t)),
                    (t.item = null),
                    t
                  );
                }
                i(t, e);
                var a = t.prototype;
                return (
                  (a.init = function () {
                    (this.item = new I()),
                      this.item.decodeItem(h.getRandomInt(0, 11)),
                      this.bright();
                  }),
                  (a.setItem = function (e) {
                    null != e && (this.item = e);
                  }),
                  (a.gray = function () {
                    this.disable(!1),
                      (this.spr_item.enabled = !0),
                      (this.anim_item.enabled = !1);
                    var e = this.item.getResourceNormalName();
                    (this.spr_item.spriteFrame = c
                      .getInstance()
                      .loaded_item_normal.filter(function (t) {
                        return t.name.indexOf(e) >= 0;
                      })[0]),
                      (this.spr_item.color = new l(150, 150, 150, 255));
                  }),
                  (a.disable = function (e) {
                    void 0 === e && (e = !0), (this.node.active = !e);
                  }),
                  (a.blur = function () {
                    this.disable(!1),
                      (this.spr_item.enabled = !0),
                      (this.anim_item.enabled = !1);
                    var e = this.item.getResourceBlurName();
                    (this.spr_item.spriteFrame = c
                      .getInstance()
                      .loaded_item_blur.filter(function (t) {
                        return t.name.indexOf(e) >= 0;
                      })[0]),
                      (this.spr_item.color = l.WHITE);
                  }),
                  (a.bright = function () {
                    this.disable(!1),
                      (this.spr_item.enabled = !0),
                      null != this.anim_item && (this.anim_item.enabled = !1);
                    var e = this.item.getResourceNormalName();
                    (this.spr_item.spriteFrame = c
                      .getInstance()
                      .loaded_item_normal.filter(function (t) {
                        return t.name.indexOf(e) >= 0;
                      })[0]),
                      (this.spr_item.color = l.WHITE);
                  }),
                  (a.playFx = function () {
                    var e,
                      t,
                      i = this;
                    if (null != this.anim_item) {
                      this.disable(!1),
                        (this.anim_item.enabled = !0),
                        (this.spr_item.enabled = !1);
                      var n = this.item.getResourceAnimName();
                      this.anim_item.skeletonData = c
                        .getInstance()
                        .loaded_anim_item.filter(function (e) {
                          return e.name.indexOf(n) >= 0;
                        })[0];
                      this.anim_item.setAnimation(0, "symbolFx", !1);
                      null == (e = this.anim_item) ||
                        e.setStartListener(function (e) {
                          e.animation && e.animation.name;
                        }),
                        null == (t = this.anim_item) ||
                          t.setCompleteListener(function (e) {
                            "symbolFx" ==
                              (e.animation ? e.animation.name : "") &&
                              setTimeout(function () {
                                var e;
                                null == (e = i.anim_item) ||
                                  e.setAnimation(0, "idle", !0);
                              }, 100);
                          });
                    }
                  }),
                  (a.setSpriteFrame = function (e) {
                    this.spr_item.spriteFrame = e;
                  }),
                  (a.getItem = function () {
                    return this.item;
                  }),
                  t
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
            (v = t(b.prototype, "anim_item", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (p = b))
          ) || p)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ASBetHistoryDetail.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./AS_SlotMachineCmp.ts",
    "./AS_SlotMachineItemView.ts",
    "./LineCmp.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, o, r, a, l, c, u, s, p, f, h, d, m, w, b, v, y;
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
            (a = e._decorator),
            (l = e.Label),
            (c = e.Button),
            (u = e.Tween),
            (s = e.tween),
            (p = e.Vec3),
            (f = e.UITransform),
            (h = e.Vec2),
            (d = e.Color),
            (m = e.Component);
        },
        function (e) {
          w = e.default;
        },
        function (e) {
          (b = e.default), (v = e.ASItem);
        },
        function (e) {
          y = e.default;
        },
      ],
      execute: function () {
        var B, I, S, _, g, M, C, L, A, V, E;
        r._RF.push({}, "142d0mF9g5BiKUBKfZWB3L6", "ASBetHistoryDetail", void 0);
        var F = a.ccclass,
          z = a.property;
        e(
          "default",
          ((B = F("ASBetHistoryDetail")),
          (I = z(l)),
          (S = z(c)),
          (_ = z(y)),
          (g = z([b])),
          B(
            ((L = t(
              (C = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, r = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(r)) || this),
                    i(t, "lbl_phien", L, o(t)),
                    i(t, "btn_prev", A, o(t)),
                    i(t, "lineCmp", V, o(t)),
                    i(t, "MIB_SlotMachineItemView", E, o(t)),
                    (t.onBack = null),
                    t
                  );
                }
                n(t, e);
                var r = t.prototype;
                return (
                  (r.onLoad = function () {
                    var e = this;
                    this.btn_prev.node.on("click", function () {
                      return e.onBack && e.onBack();
                    });
                  }),
                  (r.show = function (e, t, n) {
                    var i = this;
                    (this.lbl_phien.string = "#" + e.toString()),
                      t
                        .map(function (e) {
                          var t = new v();
                          return t.decodeItem(e), t;
                        })
                        .forEach(function (e, t) {
                          i.MIB_SlotMachineItemView[t].setItem(e),
                            i.MIB_SlotMachineItemView[t].bright();
                        }),
                      (this.node.active = !0),
                      this.showEachLines(n, 2.5);
                  }),
                  (r.showEachLines = function (e, t) {
                    var n = this;
                    void 0 === t && (t = 0),
                      this.lineCmp.clear(),
                      u.stopAllByTarget(this.lineCmp.node);
                    var i = 0;
                    e.forEach(function (e) {
                      s(n.lineCmp.node)
                        .sequence(
                          s().delay(i),
                          s().call(function () {
                            n.drawLine(e, !0);
                          })
                        )
                        .start(),
                        (i += t);
                    });
                  }),
                  (r.drawLine = function (e, t) {
                    var n = this,
                      i = w.LINE[e].map(function (e, t) {
                        var i = n.MIB_SlotMachineItemView[t + 5 * e];
                        return (
                          u.stopAllByTarget(i.node),
                          i.node.setScale(p.ONE),
                          s(i.node)
                            .sequence(
                              s().to(1, { scale: new p(1.1, 1.1, 1.1) }),
                              s().to(1, { scale: p.ONE })
                            )
                            .start(),
                          i.node.parent
                            .getComponent(f)
                            .convertToWorldSpaceAR(i.node.position)
                        );
                      });
                    this.lineCmp.draw(
                      i.map(function (e) {
                        return new h(e.x, e.y);
                      }),
                      5,
                      new d("#00FFFF"),
                      this.node.parent.parent,
                      t
                    );
                  }),
                  t
                );
              })(m)).prototype,
              "lbl_phien",
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
            (A = t(C.prototype, "btn_prev", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = t(C.prototype, "lineCmp", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = t(C.prototype, "MIB_SlotMachineItemView", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (M = C))
          ) || M)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ASBetHistoryItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var i, e, n, o, r, c, l, h, u, a, _;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (c = t._decorator),
            (l = t.Label),
            (h = t.Button),
            (u = t.Color),
            (a = t.Component);
        },
        function (t) {
          _ = t.StringUtils;
        },
      ],
      execute: function () {
        var s, p, g, x, b, f, d, m, v, y, w, S, z, B, H, I, A, D, L;
        r._RF.push(
          {},
          "e0dbbm3Ta1KhJhh00yRoj3O",
          "ASBetHistoryItemView",
          void 0
        );
        var R = c.ccclass,
          T = c.property;
        t(
          "default",
          ((s = R("ASBetHistoryItemView")),
          (p = T(l)),
          (g = T(l)),
          (x = T(l)),
          (b = T(l)),
          (f = T(l)),
          (d = T(l)),
          (m = T(h)),
          (v = T(l)),
          s(
            ((S = i(
              (w = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, r = new Array(e), c = 0;
                    c < e;
                    c++
                  )
                    r[c] = arguments[c];
                  return (
                    (i = t.call.apply(t, [this].concat(r)) || this),
                    n(i, "txt_phien_title", S, o(i)),
                    n(i, "txt_phien_time", z, o(i)),
                    n(i, "txt_phien_datcuoc", B, o(i)),
                    n(i, "txt_phien_solinecuoc", H, o(i)),
                    n(i, "txt_phien_tongcuoc", I, o(i)),
                    n(i, "txt_phien_solinetrung", A, o(i)),
                    n(i, "btn_chitiet", D, o(i)),
                    n(i, "txt_phien_tienthang", L, o(i)),
                    i
                  );
                }
                e(i, t);
                var r = i.prototype;
                return (
                  (r.show = function (t, i, e, n, o, r, c, l, h, a) {
                    (this.txt_phien_title.string = "#" + t.toString()),
                      (this.txt_phien_time.string = i.toString()),
                      (this.txt_phien_datcuoc.string = _.formatNumber(e)),
                      (this.txt_phien_solinecuoc.string = n.toString()),
                      (this.txt_phien_tongcuoc.string = o.toString()),
                      (this.txt_phien_solinetrung.string = r.toString()),
                      (this.txt_phien_tienthang.color = u.WHITE),
                      (this.txt_phien_tienthang.string = _.formatNumber(c)),
                      this.btn_chitiet.node.on("click", function () {
                        a && a(t, l, h);
                      }),
                      (this.txt_phien_title.node.active = !0),
                      (this.txt_phien_time.node.active = !0),
                      (this.txt_phien_datcuoc.node.active = !0),
                      (this.txt_phien_solinecuoc.node.active = !0),
                      (this.txt_phien_tongcuoc.node.active = !0),
                      (this.txt_phien_solinetrung.node.active = !0),
                      (this.txt_phien_tienthang.node.active = !0),
                      (this.btn_chitiet.node.active = !0);
                  }),
                  (r.hide = function () {
                    (this.txt_phien_title.node.active = !1),
                      (this.txt_phien_time.node.active = !1),
                      (this.txt_phien_datcuoc.node.active = !1),
                      (this.txt_phien_solinecuoc.node.active = !1),
                      (this.txt_phien_tongcuoc.node.active = !1),
                      (this.txt_phien_solinetrung.node.active = !1),
                      (this.txt_phien_tienthang.node.active = !1),
                      (this.btn_chitiet.node.active = !1);
                  }),
                  i
                );
              })(a)).prototype,
              "txt_phien_title",
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
            (z = i(w.prototype, "txt_phien_time", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = i(w.prototype, "txt_phien_datcuoc", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = i(w.prototype, "txt_phien_solinecuoc", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = i(w.prototype, "txt_phien_tongcuoc", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = i(w.prototype, "txt_phien_solinetrung", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = i(w.prototype, "btn_chitiet", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = i(w.prototype, "txt_phien_tienthang", [v], {
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
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ASBetHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ASBetHistoryDetail.ts",
    "./ASBetHistoryItemView.ts",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./HttpManager.ts",
    "./Define.ts",
    "./StringUtils.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, r, a, s, l, u, c, p, g, b, h, f, m, d, y;
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
            (l = t.Label),
            (u = t.Node),
            (c = t.UIOpacity);
        },
        function (t) {
          p = t.default;
        },
        function (t) {
          g = t.default;
        },
        function (t) {
          b = t.CommonPopup;
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
        var v, _, B, w, H, D, L, P, S, T, N, C, A, I, k;
        r._RF.push({}, "ab198J8MaRDqJLcX4fcNGVj", "ASBetHistoryView", void 0);
        var z = a.ccclass,
          x = a.property,
          M = function () {
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
          ((v = z("ASBetHistoryView")),
          (_ = x(s)),
          (B = x(s)),
          (w = x(l)),
          (H = x(u)),
          (D = x(u)),
          (L = x([u])),
          v(
            ((T = e(
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
                    n(e, "btn_prev", T, o(e)),
                    n(e, "btn_next", N, o(e)),
                    n(e, "lbl_page", C, o(e)),
                    n(e, "diabloBetHistoryDetailNode", A, o(e)),
                    n(e, "diabloBetingNode", I, o(e)),
                    n(e, "item_nodes", k, o(e)),
                    (e._bets = []),
                    (e.currentPage = 1),
                    (e.max_pages = 0),
                    (e.item_views = []),
                    (e.diabloBetHistoryDetail = null),
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
                      }),
                      (this.diabloBetHistoryDetail =
                        this.diabloBetHistoryDetailNode.getComponent(p)),
                      (this.diabloBetHistoryDetail.onBack = function () {
                        e.backToBetting();
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
                        h.SAdomainURL +
                        f.BET_HISTORY_URL.replace(
                          "%gameid%",
                          d.ASPHALT.toString()
                        ).replace("%skip%", i.toString());
                    m.sendGET({
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
                              l = new M();
                            (l.sessionID = s.sessionId),
                              (l.bet = s.betting),
                              (l.money = s.money),
                              (l.totalBet = s.totalBet),
                              (l.numLines = s.numLines);
                            var u = s.createdTime,
                              c = new Date(u);
                            if (
                              ((l.betTime = y.formatTime(c)),
                              (l.symbols = []),
                              (l.payoutLines = []),
                              s.symbols)
                            )
                              for (var p = s.symbols, g = 0; g < p.length; g++)
                                l.symbols.push(p[g]);
                            for (
                              var b = s.payoutLines, h = 0;
                              h < b.length;
                              h++
                            ) {
                              var f = b[h].id;
                              l.payoutLines.push(f);
                            }
                            e._bets.push(l);
                          }
                          e.showBetHistory(t);
                        }
                      },
                    });
                  }),
                  (r.showBetHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0),
                      this.item_views.length <= 0 &&
                        (this.item_views = this.item_nodes.map(function (t) {
                          return t.getComponent(g);
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
                          : ((t.node.getComponent(c).opacity = 1), t.hide());
                      }),
                      this.backToBetting(),
                      t && this.show();
                  }),
                  (r.showDetail = function (t, e, i) {
                    (this.diabloBetingNode.active = !1),
                      this.diabloBetHistoryDetail.show(t, e, i);
                  }),
                  (r.backToBetting = function () {
                    (this.diabloBetingNode.active = !0),
                      (this.diabloBetHistoryDetailNode.active = !1);
                  }),
                  e
                );
              })(b)).prototype,
              "btn_prev",
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
            (N = e(S.prototype, "btn_next", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = e(S.prototype, "lbl_page", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = e(S.prototype, "diabloBetHistoryDetailNode", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(S.prototype, "diabloBetingNode", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = e(S.prototype, "item_nodes", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
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
  "chunks:///_virtual/ASBonusItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var e, n, i, o, l, a, s, r, u, c, m, p, d, h, b;
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
            (d = t.Vec3),
            (h = t.Component);
        },
        function (t) {
          b = t.StringUtils;
        },
      ],
      execute: function () {
        var _, f, k, g, y, v, w, S, A, B, I, P, z;
        l._RF.push({}, "e8d45SKIglO3oQRXt5O2Hgn", "ASBonusItemView", void 0);
        var C = a.ccclass,
          D = a.property;
        t(
          "ASBonusItemView",
          ((_ = C("ASBonusItemView")),
          (f = D(s.Skeleton)),
          (k = D(r)),
          (g = D(u)),
          (y = D(s.Skeleton)),
          (v = D(s.SkeletonData)),
          _(
            ((A = e(
              (S = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, l = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    l[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(l)) || this),
                    i(e, "item_skeleton", A, o(e)),
                    i(e, "button", B, o(e)),
                    i(e, "lbl_amount", I, o(e)),
                    i(e, "hand_skeleton", P, o(e)),
                    i(e, "lose_amin", z, o(e)),
                    (e.index = 0),
                    (e.onClick = null),
                    (e.miniGameItemsPosX = [
                      -85, -255, -425, 85, 255, 425, -85, -255, -425, 85, 255,
                      425,
                    ]),
                    (e.miniGameItemsPosY = [
                      0.54, 0.54, 0.54, 0.54, 0.54, 0.54, 0.21, 0.21, 0.21,
                      0.21, 0.21, 0.21,
                    ]),
                    e
                  );
                }
                n(e, t);
                var l = e.prototype;
                return (
                  (l.getButton = function () {
                    return this.button;
                  }),
                  (l.show = function (t) {
                    var e = this;
                    (this.hand_skeleton.node.active = !1),
                      (this.button.interactable = !1),
                      c.stopAllByTarget(this.item_skeleton.node),
                      (this.lbl_amount.node.active = !1),
                      (this.index = t),
                      (this.item_skeleton.color = new m(255, 255, 255, 0)),
                      (this.node.active = !0),
                      this.item_skeleton.setAnimation(0, "idle", !0),
                      p(this.item_skeleton.node)
                        .delay(0.05)
                        .call(function () {
                          e.item_skeleton.color = m.WHITE;
                        })
                        .delay(0.2)
                        .call(function () {
                          e.button.interactable = !0;
                        })
                        .start(),
                      this.node.setScale(d.ZERO),
                      c.stopAllByTarget(this.node),
                      p(this.node)
                        .to(0.5, { scale: d.ONE }, { easing: "expoOut" })
                        .start();
                  }),
                  (l.setTimeScale = function (t) {
                    this.item_skeleton.timeScale = t;
                  }),
                  (l.open = function (t) {
                    var e = this;
                    this.button.interactable = !1;
                    var n = new d(this.node.getPosition());
                    this.hand_skeleton.node.setPosition(n.x, n.y, n.z),
                      (this.hand_skeleton.node.active = !0),
                      this.hand_skeleton.setAnimation(0, "throw", !1),
                      p(this.hand_skeleton.node)
                        .delay(0.2)
                        .call(function () {
                          e.hand_skeleton.setAnimation(0, "suriken", !1),
                            t > 0
                              ? (e.item_skeleton.setAnimation(
                                  0,
                                  "disappear",
                                  !1
                                ),
                                e.item_skeleton.setCompleteListener(function (
                                  n
                                ) {
                                  null != n &&
                                    "disappear" ==
                                      (n.animation ? n.animation.name : "") &&
                                    ((e.button.interactable = !0),
                                    (e.lbl_amount.node.active = !0),
                                    c.stopAllByTarget(e.lbl_amount.node),
                                    e.lbl_amount.node.setPosition(
                                      e.node.getPosition()
                                    ),
                                    (e.lbl_amount.string =
                                      "+" + b.formatMoneyNumber(t)),
                                    p(e.lbl_amount.node)
                                      .by(0.5, { position: new d(0, -40, 0) })
                                      .start(),
                                    e.item_skeleton.setCompleteListener(
                                      function () {}
                                    ));
                                }))
                              : ((e.item_skeleton.skeletonData = e.lose_amin),
                                e.item_skeleton.setAnimation(0, "appear", !1),
                                e.item_skeleton.setCompleteListener(function (
                                  t
                                ) {
                                  null != t &&
                                    "appear" ==
                                      (t.animation ? t.animation.name : "") &&
                                    ((e.button.interactable = !0),
                                    e.item_skeleton.setCompleteListener(
                                      function () {}
                                    ));
                                }));
                        })
                        .to(0.4, { position: this.node.getPosition() })
                        .call(function () {
                          e.hand_skeleton.node.active = !1;
                        })
                        .start();
                  }),
                  (l.hide = function () {
                    (this.lbl_amount.node.active = !1), (this.node.active = !1);
                  }),
                  (l.setItemSkeletonData = function (t) {
                    this.item_skeleton.skeletonData = t;
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
            (B = e(S.prototype, "button", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(S.prototype, "lbl_amount", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = e(S.prototype, "hand_skeleton", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(S.prototype, "lose_amin", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = S))
          ) || w)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ASBonusView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ASBonusItemView.ts",
    "./ASFullScreenGameView.ts",
    "./ASSummaryView.ts",
    "./StringUtils.ts",
    "./SoundManager.ts",
  ],
  function (t) {
    "use strict";
    var e, o, n, i, a, r, l, u, s, c, m, h, f, d, p, g, _, w, b, y;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (r = t._decorator),
            (l = t.Node),
            (u = t.Label),
            (s = t.sp),
            (c = t.AudioClip),
            (m = t.Tween),
            (h = t.Button),
            (f = t.tween),
            (d = t.Color),
            (p = t.Component);
        },
        function (t) {
          g = t.ASBonusItemView;
        },
        function (t) {
          _ = t.ASFullScreenGameView;
        },
        function (t) {
          w = t.ASSummaryView;
        },
        function (t) {
          b = t.StringUtils;
        },
        function (t) {
          y = t.SoundManager;
        },
      ],
      execute: function () {
        var v,
          S,
          N,
          D,
          A,
          C,
          I,
          x,
          B,
          M,
          T,
          V,
          z,
          W,
          G,
          E,
          O,
          k,
          L,
          R,
          F,
          H,
          P,
          X,
          q,
          U,
          j,
          Y,
          J,
          K,
          Q,
          Z,
          $,
          tt,
          et;
        a._RF.push({}, "d10c0A2sLtAy42ceXIl9EXd", "ASBonusView", void 0);
        var ot = r.ccclass,
          nt = r.property,
          it = function () {
            (this.id = ""), (this.rate = 1);
          };
        t(
          "ASBonusView",
          ((v = ot("ASBonusView")),
          (S = nt(l)),
          (N = nt(w)),
          (D = nt(u)),
          (A = nt(l)),
          (C = nt(l)),
          (I = nt([s.Skeleton])),
          (x = nt(u)),
          (B = nt(l)),
          (M = nt(u)),
          (T = nt([l])),
          (V = nt(c)),
          (z = nt(c)),
          (W = nt(c)),
          (G = nt(c)),
          (E = nt(c)),
          (O = nt([s.SkeletonData])),
          v(
            ((R = e(
              (L = (function (t) {
                function e() {
                  for (
                    var e, o = arguments.length, a = new Array(o), r = 0;
                    r < o;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "root", R, i(e)),
                    n(e, "bigCitySummaryView", F, i(e)),
                    n(e, "amount", H, i(e)),
                    n(e, "countDownNode", P, i(e)),
                    n(e, "outDoorNode", X, i(e)),
                    n(e, "outdoor", q, i(e)),
                    n(e, "lbl_countdown", U, i(e)),
                    n(e, "totalWinNode", j, i(e)),
                    n(e, "lbl_totalWin", Y, i(e)),
                    n(e, "items", J, i(e)),
                    n(e, "start_mini_game_sfx", K, i(e)),
                    n(e, "touch_mini_game_outdoor_sfx", Q, i(e)),
                    n(e, "touch_mini_game_item_sfx", Z, i(e)),
                    n(e, "touch_stop_mini_game_item_sfx", $, i(e)),
                    n(e, "touch_mini_game_outdoor_reveal_sfx", tt, i(e)),
                    n(e, "list_anim_item", et, i(e)),
                    (e.multiRate = 0),
                    (e.wonMNGItems = []),
                    (e.totalMiniGameWonMoney = void 0),
                    (e.openedCount = 0),
                    (e.outdoorItemsPosX = [-150, 0, 150]),
                    (e.outdoorItemsPosY = [0.27, 0.58, 0.27]),
                    (e.timeCountDown = 0),
                    (e.openedOutdoor = !1),
                    e
                  );
                }
                o(e, t);
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    var t = this;
                    this.items.forEach(function (e, o) {
                      var n = o;
                      e.on("click", function () {
                        t.open(n);
                      });
                    }),
                      this.outdoor.forEach(function (e, o) {
                        var n = e,
                          i = o;
                        e.node.parent.on("click", function () {
                          t.openOutDoor(i, n);
                        });
                      });
                  }),
                  (a.openOutDoor = function (t, e) {
                    var o = this;
                    (this.openedOutdoor = !0),
                      y.getInstance().playSfx(this.touch_mini_game_outdoor_sfx),
                      (this.countDownNode.active = !1),
                      m.stopAllByTarget(this.countDownNode),
                      m.stopAllByTarget(this.lbl_countdown.node);
                    var n = [],
                      i = _.getInstance().getBonusCount();
                    3 == i
                      ? (n.push(1), n.push(2), n.push(3))
                      : 4 == i
                      ? (n.push(2), n.push(3), n.push(4))
                      : (n.push(3), n.push(4), n.push(5));
                    for (var a = 0; a < n.length; a++)
                      if (n[a] == this.multiRate) {
                        n.splice(a, 1);
                        break;
                      }
                    this.outdoor.forEach(function (t) {
                      t.node.parent.getComponent(h).interactable = !1;
                    }),
                      e.setAnimation(0, "x" + this.multiRate.toString(), !1);
                    var r = 2;
                    _.getInstance().isFastSpin() && (r = 1),
                      m.stopAllByTarget(this.outDoorNode),
                      f(this.outDoorNode)
                        .delay(r)
                        .call(function () {
                          o.outdoor.forEach(function (e, o) {
                            if (o != t) {
                              var i = n.shift();
                              e.setAnimation(
                                0,
                                "x" + i.toString() + "_hidden",
                                !1
                              );
                            }
                          }),
                            y
                              .getInstance()
                              .playSfx(o.touch_mini_game_outdoor_reveal_sfx);
                        })
                        .delay(r)
                        .call(function () {
                          o.showTotalWinAfter(0);
                        })
                        .start();
                  }),
                  (a.playStartSfx = function () {
                    y.getInstance().playSfx(this.start_mini_game_sfx);
                  }),
                  (a.show = function (t, e) {
                    var o = this;
                    (this.openedOutdoor = !1),
                      (this.outDoorNode.active = !1),
                      this.shuffleListItem(),
                      (this.countDownNode.active = !1),
                      (this.timeCountDown = 2 == e ? 3 : 10),
                      (this.wonMNGItems = []),
                      (this.multiRate = 0),
                      (this.totalMiniGameWonMoney = 0),
                      (this.openedCount = 0),
                      (this.multiRate = t.rate);
                    for (var n = t.items, i = t.stg, a = 0; a < n.length; a++) {
                      for (var r = n[a], l = 0, u = 0; u < i.length; u++) {
                        var s = i[u],
                          c = s.id,
                          d = s.b2;
                        if (c == r) {
                          l = d;
                          break;
                        }
                      }
                      var p = new it();
                      (p.id = r), (p.rate = l), this.wonMNGItems.push(p);
                    }
                    this.totalMiniGameWonMoney = t.m;
                    for (var w = 0, y = 0; y < this.wonMNGItems.length; y++) {
                      w +=
                        this.wonMNGItems[y].rate *
                        _.getInstance().getTotalBet();
                    }
                    (this.amount.string =
                      b.formatNumber(w) +
                      " x " +
                      this.multiRate +
                      " = " +
                      b.formatNumber(this.totalMiniGameWonMoney)),
                      (this.root.active = !0),
                      m.stopAllByTarget(this.node),
                      f(this.node)
                        .delay(0.5)
                        .call(function () {
                          o.countDownAfter(3),
                            o.items.forEach(function (t, e) {
                              t.getComponent(g).show(e);
                            }),
                            (o.totalWinNode.active = !0),
                            (o.lbl_totalWin.string = "0"),
                            o.items.forEach(function (t, o) {
                              t.getComponent(g).setTimeScale(e);
                            }),
                            o.outdoor.forEach(function (t) {
                              t.timeScale = e;
                            });
                        })
                        .start(),
                      this.outdoor.forEach(function (t) {
                        (t.node.parent.active = !1),
                          (t.node.parent.getComponent(h).interactable = !0);
                      }),
                      f(this.node)
                        .delay(2)
                        .call(function () {
                          _.getInstance().hideMainImmediately();
                        })
                        .start();
                  }),
                  (a.open = function (t) {
                    var e = this;
                    if (this.openedCount >= this.wonMNGItems.length - 1)
                      this.openedCount == this.wonMNGItems.length - 1 &&
                        (this.items[t].getComponent(g).open(0),
                        this.openedCount++,
                        y
                          .getInstance()
                          .playSfx(this.touch_stop_mini_game_item_sfx));
                    else {
                      y.getInstance().playSfx(this.touch_mini_game_item_sfx);
                      for (var o = 0, n = 0; n <= this.openedCount; n++) {
                        var i =
                          this.wonMNGItems[n].rate *
                          _.getInstance().getTotalBet();
                        o += i;
                      }
                      f(this.lbl_totalWin.node)
                        .delay(1)
                        .call(function () {
                          e.lbl_totalWin.string = b.formatNumber(o);
                        })
                        .start();
                      var a =
                        this.wonMNGItems[this.openedCount].rate *
                        _.getInstance().getTotalBet();
                      if (
                        (this.items[t].getComponent(g).open(a),
                        this.openedCount++,
                        (a =
                          this.wonMNGItems[this.openedCount].rate *
                          _.getInstance().getTotalBet()) > 0)
                      )
                        this.countDownAfter(1.5);
                      else {
                        (this.countDownNode.active = !1),
                          m.stopAllByTarget(this.countDownNode),
                          m.stopAllByTarget(this.lbl_countdown.node);
                        var r = 5.5;
                        _.getInstance().isFastSpin() && (r = 4),
                          f(this.outDoorNode)
                            .delay(r)
                            .call(function () {
                              e.showOutDoor();
                            })
                            .start();
                      }
                    }
                  }),
                  (a.showOutDoor = function () {
                    var t = this;
                    this.items.forEach(function (t) {
                      t.getComponent(g).hide();
                    }),
                      this.openedOutdoor || this.countDownAfter(3),
                      (this.totalWinNode.active = !1),
                      (this.outDoorNode.active = !0),
                      this.outdoor.forEach(function (e, o) {
                        (e.color = new d(255, 255, 255, 255)),
                          (e.node.parent.active = !0),
                          e.setAnimation(0, "idle", !0),
                          e.setCompleteListener(function (e) {
                            null != e &&
                              "idle" == (e.animation ? e.animation.name : "") &&
                              (t.openedOutdoor || t.countDownAfter(3));
                          });
                      });
                  }),
                  (a.countDownAfter = function (t) {
                    var e = this;
                    (this.countDownNode.active = !1),
                      m.stopAllByTarget(this.countDownNode),
                      m.stopAllByTarget(this.lbl_countdown.node),
                      f(this.countDownNode)
                        .sequence(
                          f().delay(t),
                          f().call(function () {
                            e.countDownNode.active = !0;
                            var t = e.timeCountDown;
                            f(e.lbl_countdown.node)
                              .repeat(
                                t + 1,
                                f(e.lbl_countdown.node)
                                  .call(function () {
                                    var o =
                                      t.toString().length >= 2
                                        ? t.toString()
                                        : "0" + t.toString();
                                    e.lbl_countdown.string = "Tự động sau " + o;
                                  })
                                  .delay(1)
                                  .call(function () {
                                    (t -= 1) < 0 && e.showTotalWinAfter(0);
                                  })
                              )
                              .start();
                          })
                        )
                        .start();
                  }),
                  (a.showTotalWinAfter = function (t) {
                    var e = this;
                    (this.countDownNode.active = !1),
                      (this.totalWinNode.active = !1),
                      m.stopAllByTarget(this.countDownNode),
                      m.stopAllByTarget(this.lbl_countdown.node),
                      m.stopAllByTarget(this.bigCitySummaryView.node),
                      f(this.bigCitySummaryView.node)
                        .sequence(
                          f().delay(t),
                          f().call(function () {
                            (e.bigCitySummaryView.onHide = function () {
                              m.stopAllByTarget(e.bigCitySummaryView.node),
                                _.getInstance().finishedBonus(),
                                e.hide();
                            }),
                              e.bigCitySummaryView.setText(
                                "Chúc mừng bạn đã trúng",
                                "từ bonus game Vào Hang Dơi"
                              ),
                              e.bigCitySummaryView.show();
                          }),
                          f().delay(4),
                          f().call(function () {
                            e.bigCitySummaryView.hide();
                          })
                        )
                        .start();
                  }),
                  (a.hide = function () {
                    _.getInstance().showMainImmediately(),
                      (this.bigCitySummaryView.onHide = null),
                      (this.root.active = !1),
                      this.items.forEach(function (t, e) {
                        t.getComponent(g).hide();
                      });
                  }),
                  (a.shuffleListItem = function () {
                    for (
                      var t, e = this, o = this.list_anim_item.length;
                      0 != o;

                    ) {
                      (t = Math.floor(Math.random() * o)), o--;
                      var n = [this.list_anim_item[t], this.list_anim_item[o]];
                      (this.list_anim_item[o] = n[0]),
                        (this.list_anim_item[t] = n[1]);
                    }
                    this.items.forEach(function (t, o) {
                      t.getComponent(g).setItemSkeletonData(
                        e.list_anim_item[o]
                      );
                    });
                  }),
                  e
                );
              })(p)).prototype,
              "root",
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
            (F = e(L.prototype, "bigCitySummaryView", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = e(L.prototype, "amount", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = e(L.prototype, "countDownNode", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (X = e(L.prototype, "outDoorNode", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = e(L.prototype, "outdoor", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (U = e(L.prototype, "lbl_countdown", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = e(L.prototype, "totalWinNode", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = e(L.prototype, "lbl_totalWin", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = e(L.prototype, "items", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (K = e(L.prototype, "start_mini_game_sfx", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = e(L.prototype, "touch_mini_game_outdoor_sfx", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Z = e(L.prototype, "touch_mini_game_item_sfx", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($ = e(L.prototype, "touch_stop_mini_game_item_sfx", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (tt = e(L.prototype, "touch_mini_game_outdoor_reveal_sfx", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (et = e(L.prototype, "list_anim_item", [O], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (k = L))
          ) || k)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ASFullScreenGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ASInfoView.ts",
    "./ASJackpotHistoryView.ts",
    "./ASSettingView.ts",
    "./ASX2View.ts",
    "./AS_EffectCmp.ts",
    "./AS_SlotMachineCmp.ts",
    "./AS_SlotMachineItemView.ts",
    "./BackgroundScale.ts",
    "./SocketManager.ts",
    "./PersistManager.ts",
    "./Define.ts",
    "./SoundButtonCmp.ts",
    "./StringUtils.ts",
    "./BaseSlotGameView.ts",
    "./SoundManager.ts",
    "./ASNetworkController.ts",
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
      s,
      r,
      u,
      c,
      p,
      b,
      _,
      h,
      f,
      m,
      d,
      g,
      y,
      w,
      S,
      k,
      v,
      C,
      A,
      j,
      M,
      I,
      E,
      T,
      z,
      L,
      x,
      N,
      B,
      F,
      J,
      V,
      R,
      D,
      G,
      X,
      O;
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
            (s = t.Node),
            (r = t.Label),
            (u = t.Button),
            (c = t.sp),
            (p = t.Toggle),
            (b = t.SpriteFrame),
            (_ = t.Sprite),
            (h = t.AudioClip),
            (f = t.UIOpacity),
            (m = t.VideoPlayer),
            (d = t.tween),
            (g = t.Tween),
            (y = t.view),
            (w = t.Vec3),
            (S = t.UITransform),
            (k = t.assetManager),
            (v = t.Prefab),
            (C = t.sys);
        },
        function (t) {
          A = t.ASInfoView;
        },
        function (t) {
          j = t.default;
        },
        function (t) {
          M = t.ASSettingView;
        },
        function (t) {
          I = t.ASX2View;
        },
        function (t) {
          (E = t.AS_EffectCmp), (T = t.EFFECT_TYPE);
        },
        function (t) {
          z = t.default;
        },
        function (t) {
          L = t.ASItem;
        },
        function (t) {
          x = t.BackgroundScale;
        },
        function (t) {
          N = t.socketManager;
        },
        function (t) {
          B = t.PersistManager;
        },
        function (t) {
          F = t.GameID;
        },
        function (t) {
          J = t.default;
        },
        function (t) {
          V = t.StringUtils;
        },
        function (t) {
          R = t.BaseSlotGameView;
        },
        function (t) {
          D = t.SoundManager;
        },
        function (t) {
          G = t.ASNetworkController;
        },
        function (t) {
          (X = t.eventManager), (O = t.EventKey);
        },
      ],
      execute: function () {
        var P,
          q,
          U,
          H,
          K,
          Q,
          Y,
          W,
          Z,
          $,
          tt,
          nt,
          et,
          it,
          ot,
          lt,
          at,
          st,
          rt,
          ut,
          ct,
          pt,
          bt,
          _t,
          ht,
          ft,
          mt,
          dt,
          gt,
          yt,
          wt,
          St,
          kt,
          vt,
          Ct,
          At,
          jt,
          Mt,
          It,
          Et,
          Tt,
          zt,
          Lt,
          xt,
          Nt,
          Bt,
          Ft,
          Jt,
          Vt,
          Rt,
          Dt,
          Gt,
          Xt,
          Ot,
          Pt,
          qt,
          Ut,
          Ht,
          Kt,
          Qt,
          Yt,
          Wt,
          Zt,
          $t,
          tn,
          nn,
          en,
          on,
          ln,
          an,
          sn,
          rn,
          un,
          cn,
          pn,
          bn,
          _n,
          hn,
          fn,
          mn,
          dn,
          gn,
          yn,
          wn,
          Sn,
          kn,
          vn,
          Cn,
          An,
          jn,
          Mn,
          In,
          En,
          Tn,
          zn,
          Ln;
        l._RF.push(
          {},
          "27b2fcr0BRM85DLGA1C1qHw",
          "ASFullScreenGameView",
          void 0
        );
        var xn = a.ccclass,
          Nn = a.property,
          Bn = function () {
            (this.aid = -1), (this.jackpot = 0), (this.bet = 0);
          };
        t(
          "ASFullScreenGameView",
          ((P = xn("ASFullScreenGameView")),
          (q = Nn(s)),
          (U = Nn(r)),
          (H = Nn([r])),
          (K = Nn(r)),
          (Q = Nn(r)),
          (Y = Nn(r)),
          (W = Nn(u)),
          (Z = Nn(u)),
          ($ = Nn(u)),
          (tt = Nn(c.Skeleton)),
          (nt = Nn(p)),
          (et = Nn(u)),
          (it = Nn(u)),
          (ot = Nn(u)),
          (lt = Nn(u)),
          (at = Nn(u)),
          (st = Nn(s)),
          (rt = Nn(c.Skeleton)),
          (ut = Nn(r)),
          (ct = Nn(s)),
          (pt = Nn([b])),
          (bt = Nn([b])),
          (_t = Nn([c.SkeletonData])),
          (ht = Nn(s)),
          (ft = Nn(s)),
          (mt = Nn(s)),
          (dt = Nn(s)),
          (gt = Nn(s)),
          (yt = Nn(u)),
          (wt = Nn(u)),
          (St = Nn(A)),
          (kt = Nn(M)),
          (vt = Nn(I)),
          (Ct = Nn(s)),
          (At = Nn([u])),
          (jt = Nn(_)),
          (Mt = Nn([b])),
          (It = Nn(E)),
          (Et = Nn(h)),
          (Tt = Nn(h)),
          (zt = Nn(h)),
          (Lt = Nn(h)),
          (xt = Nn(h)),
          (Nt = Nn(h)),
          (Bt = Nn(s)),
          (Ft = Nn(s)),
          P(
            (((Ln = (function (t) {
              function n() {
                for (
                  var n, e = arguments.length, l = new Array(e), a = 0;
                  a < e;
                  a++
                )
                  l[a] = arguments[a];
                return (
                  (n = t.call.apply(t, [this].concat(l)) || this),
                  i(n, "bg_jackpot", Rt, o(n)),
                  i(n, "lblJackpot", Dt, o(n)),
                  i(n, "lbl_lobby_jackpots", Gt, o(n)),
                  i(n, "lblTongCuoc", Xt, o(n)),
                  i(n, "lblCuoc", Ot, o(n)),
                  i(n, "lblLineNum", Pt, o(n)),
                  i(n, "btn_line", qt, o(n)),
                  i(n, "btn_spin", Ut, o(n)),
                  i(n, "btn_stopautoSpin", Ht, o(n)),
                  i(n, "btn_spin_skeleton", Kt, o(n)),
                  i(n, "btn_fast", Qt, o(n)),
                  i(n, "btn_lobby_back", Yt, o(n)),
                  i(n, "btn_x2", Wt, o(n)),
                  i(n, "btn_main_back", Zt, o(n)),
                  i(n, "btn_ranking", $t, o(n)),
                  i(n, "btn_bet_money", tn, o(n)),
                  i(n, "result_node", nn, o(n)),
                  i(n, "bg_result_node", en, o(n)),
                  i(n, "lbl_result_amount", on, o(n)),
                  i(n, "as_SlotMachineCmp_Node", ln, o(n)),
                  (n.as_SlotMachineCmp = null),
                  i(n, "loaded_item_normal", an, o(n)),
                  i(n, "loaded_item_blur", sn, o(n)),
                  i(n, "loaded_anim_item", rn, o(n)),
                  i(n, "loading_node", un, o(n)),
                  i(n, "loading_bg", cn, o(n)),
                  i(n, "lobby_node", pn, o(n)),
                  i(n, "main_node", bn, o(n)),
                  i(n, "top_node", _n, o(n)),
                  i(n, "btn_info", hn, o(n)),
                  i(n, "btn_setting", fn, o(n)),
                  i(n, "asInfoView", mn, o(n)),
                  i(n, "asSettingView", dn, o(n)),
                  i(n, "asX2View", gn, o(n)),
                  i(n, "bottom_node", yn, o(n)),
                  i(n, "btn_bets", wn, o(n)),
                  i(n, "spr_background", Sn, o(n)),
                  i(n, "sprFrame_backgrounds", kn, o(n)),
                  i(n, "as_EffectCmp", vn, o(n)),
                  i(n, "lobby_bgm_music", Cn, o(n)),
                  i(n, "main_bgm_music", An, o(n)),
                  i(n, "spin_sfx_loop", jn, o(n)),
                  i(n, "spin_end_sfx", Mn, o(n)),
                  i(n, "win_normal_sfx", In, o(n)),
                  i(n, "win_normal_money_sfx", En, o(n)),
                  i(n, "trial_node", Tn, o(n)),
                  i(n, "jackpot_history_node", zn, o(n)),
                  (n.bet_array = [100, 1e3, 1e4, 1e4]),
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
                  (n.bonusCount = 0),
                  (n.wonX2 = !1),
                  (n.currentLineNum = 0),
                  (n.line_ids = []),
                  (n.lobbyJackpots = []),
                  n
                );
              }
              e(n, t);
              var l = n.prototype;
              return (
                (l.getAID = function () {
                  return this._aid;
                }),
                (l.getBonusCount = function () {
                  return this.bonusCount;
                }),
                (l.getBetType = function () {
                  return this.bet_array.indexOf(this.bet) + 1;
                }),
                (n.getInstance = function () {
                  return n.instance;
                }),
                (l.getNetworkController = function () {
                  return G.getInstance();
                }),
                (l.getTotalBet = function () {
                  return this.bet * this.lineArr.length;
                }),
                (l.getBet = function () {
                  return this.bet;
                }),
                (l.isSpinning = function () {
                  return this.as_SlotMachineCmp.isSpinning();
                }),
                (l.forceMachineStop = function (t, n) {
                  void 0 === t && (t = !0),
                    void 0 === n && (n = !1),
                    this.stop([], n),
                    t && this.turnOffAutoSpin();
                }),
                (l.handleLoggedIn = function () {
                  this.forceMachineStop(), this.subscribe();
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
                    this.as_SlotMachineCmp.stopImmediately(this.symbols);
                }),
                (l.finishedBonus = function () {
                  if (
                    this.btn_stopautoSpin.node.active &&
                    this.as_SlotMachineCmp.isStopped()
                  )
                    this.spin();
                  else {
                    var t = this.rewards.map(function (t) {
                      return t.lid;
                    });
                    this.as_SlotMachineCmp.showEachLines(t, 1.5),
                      this.resetSpinButton();
                  }
                  N.sendRefreshMoney(),
                    null != this.lbl_result_amount &&
                      null != this.lbl_result_amount &&
                      ((this.lbl_result_amount.getComponent(f).opacity = 255),
                      (this.lbl_result_amount.string = V.formatNumber(
                        this.moneyExchange
                      ))),
                    this.playBgmMusic();
                }),
                (l.finishedJackpot = function () {
                  this.playBgmMusic(),
                    null != this.lbl_result_amount &&
                      null != this.lbl_result_amount &&
                      ((this.lbl_result_amount.getComponent(f).opacity = 255),
                      (this.lbl_result_amount.string = V.formatNumber(
                        this.moneyExchange
                      )));
                }),
                (l.onLoad = function () {
                  var e = this;
                  t.prototype.onLoad.call(this),
                    (this.gameID = F.ASPHALT),
                    (n.instance = this),
                    (this.as_SlotMachineCmp =
                      this.as_SlotMachineCmp_Node.getComponent(z)),
                    this.lbl_lobby_jackpots.forEach(function (t) {
                      e.lobbyJackpots.push(0);
                    }),
                    this.intro_video.node.on(
                      m.EventType.COMPLETED,
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
                    this.btn_spin.node.on(s.EventType.TOUCH_START, function () {
                      e.btn_spin.interactable &&
                        d(e.btn_spin.node)
                          .sequence(
                            d().delay(0.5),
                            d().call(function () {
                              e.btn_spin_skeleton.setAnimation(0, "hold", !0);
                            }),
                            d().delay(1.5),
                            d().call(function () {
                              e.isTrial
                                ? B.showNoti(
                                    "Không hỗ trợ tự quay ở chế độ chơi thử."
                                  )
                                : ((e.btn_stopautoSpin.node.active = !0),
                                  (e.btn_spin.node.active = !1),
                                  e.spin());
                            })
                          )
                          .start();
                    }),
                    this.btn_spin.node.on(s.EventType.TOUCH_END, function () {
                      if (e.btn_spin.interactable) {
                        var t = e.btn_spin.getComponent(J);
                        null != t && null != t && t.playSfx(),
                          e.btn_stopautoSpin.node.active ||
                            (g.stopAllByTarget(e.btn_spin.node),
                            e.symbols.length > 0
                              ? (e.btn_spin_skeleton.setAnimation(
                                  0,
                                  "stop_disable",
                                  !0
                                ),
                                g.stopAllByTarget(e.btn_spin.node),
                                d(e.btn_spin.node)
                                  .delay(1)
                                  .call(function () {
                                    e.btn_spin_skeleton.setAnimation(
                                      0,
                                      "stop",
                                      !0
                                    );
                                  })
                                  .start(),
                                e.stopImmediately())
                              : e.spin());
                      }
                    }),
                    this.btn_stopautoSpin.node.on(
                      s.EventType.TOUCH_END,
                      function () {
                        (e.btn_stopautoSpin.node.active = !1),
                          (e.btn_spin.node.active = !0);
                        var t = e.btn_spin.getComponent(J);
                        null != t && null != t && t.playSfx(),
                          e.btn_spin_skeleton.setAnimation(
                            0,
                            "stop_disable",
                            !0
                          ),
                          g.stopAllByTarget(e.btn_spin.node),
                          d(e.btn_spin.node)
                            .delay(1)
                            .call(function () {
                              e.btn_spin_skeleton.setAnimation(0, "stop", !0);
                            })
                            .start();
                      }
                    ),
                    this.btn_fast.node.on("toggle", function () {
                      e.isFast = e.btn_fast.isChecked;
                    }),
                    this.btn_line.node.on("click", function () {
                      if (!e.isAutoSpin() && e.as_SlotMachineCmp.isStopped()) {
                        e.currentLineNum++,
                          e.currentLineNum > 25 && (e.currentLineNum = 0);
                        var t = e.line_ids.filter(function (t, n) {
                          return n < e.currentLineNum;
                        });
                        e.updateLines(t);
                      } else B.showNoti("Đang Quay");
                    }),
                    this.btn_lobby_back.node.on("click", function () {
                      X.emit(O.IsMiniDownload, function () {
                        e.leaveRoom();
                      });
                    }),
                    this.btn_ranking.node.on("click", function () {
                      e.jackpot_history_node.getComponent(j).fetchHistory();
                    }),
                    this.btn_bet_money.node.on("click", function () {
                      !e.isAutoSpin() && e.as_SlotMachineCmp.isStopped()
                        ? e.showLobby()
                        : B.showNoti("Đang Quay");
                    }),
                    this.btn_setting.node.on("click", function () {
                      e.asSettingView.show();
                    }),
                    this.btn_info.node.on("click", function () {
                      e.asInfoView.show();
                    }),
                    this.btn_x2.node.on("click", function () {
                      e.asX2View.open(0);
                    }),
                    this.btn_main_back.node.on("click", function () {
                      if (e.main_node.active) {
                        if (!e.as_SlotMachineCmp.isStopped())
                          return void B.showNoti("Đang Quay");
                        e.showLobby();
                      } else
                        X.emit(O.IsMiniDownload, function () {
                          e.leaveRoom();
                        });
                    }),
                    (this.as_SlotMachineCmp.onMachineStopped = function () {
                      if (
                        (D.getInstance().stopAdditionalSfx(e.spin_sfx_loop),
                        (e.btn_x2.interactable = !e.isAutoSpin() && e.wonX2),
                        e.miniGameDict)
                      ) {
                        var t = e.rewards.map(function (t) {
                            return t.lid;
                          }),
                          n = 0;
                        return (
                          e.rewards.forEach(function (t) {
                            n += t.crd;
                          }),
                          void (t.length > 0
                            ? d(e.node)
                                .call(function () {
                                  var i;
                                  (e.as_SlotMachineCmp.showLines(
                                    t,
                                    0,
                                    0.3,
                                    function () {}
                                  ),
                                  null != e.lbl_result_amount &&
                                    null != e.lbl_result_amount) &&
                                    (g.stopAllByTarget(
                                      null == (i = e.lbl_result_amount)
                                        ? void 0
                                        : i.getComponent(f)
                                    ),
                                    (e.lbl_result_amount.getComponent(
                                      f
                                    ).opacity = 255),
                                    (e.lbl_result_amount.string =
                                      V.formatNumber(n)));
                                })
                                .delay(1)
                                .call(function () {
                                  e.as_EffectCmp.showEffect(
                                    T.BONUS,
                                    e.isFast ? 2 : 1,
                                    e.isFast ? 1 : e.timeToShowResults,
                                    e.miniGameDict
                                  );
                                })
                                .start()
                            : e.as_EffectCmp.showEffect(
                                T.BONUS,
                                e.isFast ? 2 : 1,
                                e.isFast ? 1 : e.timeToShowResults,
                                e.miniGameDict
                              ))
                        );
                      }
                      var i = d(e.node).call(function () {
                        e.showResult(function () {
                          if (
                            e.btn_stopautoSpin.node.active &&
                            e.as_SlotMachineCmp.isStopped()
                          )
                            e.spin();
                          else if (e.as_SlotMachineCmp.isStopped()) {
                            var t = e.rewards.map(function (t) {
                              return t.lid;
                            });
                            e.as_SlotMachineCmp.showEachLines(t, 1.5),
                              e.resetSpinButton();
                          }
                        });
                      });
                      e.wonFreeSpins > 0
                        ? d(e.node)
                            .sequence(
                              d().call(function () {
                                e.as_EffectCmp.showEffect(
                                  T.FREE,
                                  e.isFast ? 2 : 1,
                                  e.isFast ? 0.75 : e.timeToShowResults,
                                  0
                                ),
                                  (e.lbl_freespinCount.node.parent.active = !0),
                                  (e.lbl_freespinCount.string =
                                    e.currentFreeSpin.toString());
                              }),
                              d().delay(0.5),
                              d().call(function () {
                                e.btn_stopautoSpin.node.active &&
                                e.as_SlotMachineCmp.isStopped()
                                  ? e.spin()
                                  : e.resetSpinButton();
                              })
                            )
                            .start()
                        : (e.moneyExchange > 0
                            ? i
                            : d(e.node).sequence(
                                d().delay(0.5),
                                d().call(function () {
                                  e.btn_stopautoSpin.node.active &&
                                  e.as_SlotMachineCmp.isStopped()
                                    ? e.spin()
                                    : e.resetSpinButton();
                                })
                              )
                          ).start();
                      N.sendRefreshMoney();
                    });
                }),
                (l.runTopAnim = function () {
                  (this.top_node.active = !0), g.stopAllByTarget(this.top_node);
                  var t = y.getCanvasSize().height / y.getScaleY();
                  this.top_node.setPosition(
                    new w(
                      0,
                      t / 2 +
                        this.top_node.getComponent(S).contentSize.height / 2
                    )
                  ),
                    d(this.top_node)
                      .delay(0.1)
                      .to(
                        0.5,
                        {
                          position: new w(
                            0,
                            t / 2 -
                              this.top_node.getComponent(S).contentSize.height /
                                2,
                            0
                          ),
                        },
                        { easing: "expoOut" }
                      )
                      .start();
                }),
                (l.resetSpinButton = function () {
                  this.btn_spin_skeleton.setAnimation(0, "spin", !0),
                    (this.btn_spin.interactable = !0),
                    (this.symbols = []);
                }),
                (l.release = function () {
                  n.instance = null;
                  var t = k.getBundle("slot_dc");
                  null != t &&
                    null != t &&
                    (t.release("prefab_dc", v),
                    k.removeBundle(t),
                    cc.log("remove asset bundle slot_dc"),
                    this.node.destroy(),
                    C.garbageCollect());
                }),
                (n.releaseBundle = function () {
                  n.instance = null;
                  var t = k.getBundle("slot_dc");
                  null != t &&
                    null != t &&
                    (t.release("prefab_dc", v),
                    k.removeBundle(t),
                    cc.log("remove asset bundle slot_dc"),
                    C.garbageCollect());
                }),
                (l.initUI = function () {
                  var t = this;
                  D.getInstance().stopBgm(),
                    (this.lobby_node.active = !1),
                    (this.main_node.active = !1),
                    (this.top_node.active = !1),
                    C.isBrowser
                      ? ((this.loading_node.active = !0),
                        (this.loading_bg.active = !0),
                        (this.intro_video.node.active = !1),
                        d(this.node)
                          .delay(1)
                          .call(function () {
                            t.showLobby(), t.runTopAnim();
                          })
                          .start())
                      : (this.showLobby(), this.runTopAnim()),
                    this.subscribe(),
                    N.sendRefreshMoney();
                }),
                (l.playBgmMusic = function () {
                  this.lobby_node.active
                    ? this.playLobbyMusic()
                    : D.getInstance().playBgm(this.main_bgm_music, !0, !0);
                }),
                (l.playLobbyMusic = function () {
                  D.getInstance().playBgm(this.lobby_bgm_music, !0, !0);
                }),
                (l.showLobby = function () {
                  this.playLobbyMusic(),
                    (this.loading_node.active = !1),
                    (this.lobby_node.active = !0),
                    (this.main_node.active = !1),
                    (this.bg_jackpot.active = !1),
                    (this.lblJackpot.node.active = !1),
                    (this.btn_bets[3].node.active = !0),
                    this.resetSpinButton(),
                    this.turnOffAutoSpin();
                }),
                (l.showMain = function (t) {
                  (this.loading_node.active = !1),
                    (this.lobby_node.active = !1),
                    (this.bg_jackpot.active = !0),
                    (this.lblJackpot.node.active = !0),
                    (this.btn_bets[3].node.active = !1),
                    this.playBgmMusic(),
                    (this.bet = this.bet_array[t]),
                    (this.isTrial = t == this.bet_array.length - 1),
                    (this.trial_node.active = this.isTrial),
                    (this.spr_background.spriteFrame =
                      this.sprFrame_backgrounds[t]);
                  var n = this.spr_background.node.getComponent(x);
                  n && n.autoFit(),
                    this.updateJackpotLabels(!1),
                    (this.btn_x2.node.active = !this.isTrial),
                    (this.main_node.active = !0);
                  var e = y.getCanvasSize().height / y.getScaleY();
                  this.bottom_node.setPosition(
                    new w(
                      0,
                      -e / 2 -
                        (this.bottom_node.getComponent(S).contentSize.height /
                          2 -
                          50)
                    )
                  ),
                    this.as_SlotMachineCmp.init(),
                    (this.lbl_freespinCount.node.parent.active = !1),
                    (this.lblCuoc.string = V.formatMoneyNumber(this.getBet())),
                    (this.currentFreeSpin = 0),
                    this.as_EffectCmp.hideAll(),
                    this.btn_x2.interactable
                      ? null != this.lbl_result_amount &&
                        null != this.lbl_result_amount &&
                        (this.lbl_result_amount.getComponent(f).opacity = 255)
                      : null != this.lbl_result_amount &&
                        null != this.lbl_result_amount &&
                        (this.lbl_result_amount.string = ""),
                    (this.lblCoin.string = ""),
                    N.sendRefreshMoney();
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
                  this.as_SlotMachineCmp.showLines(i, o, 0.3, function () {}),
                    g.stopAllByTarget(this.result_node),
                    null != this.lbl_result_amount &&
                      null != this.lbl_result_amount &&
                      (g.stopAllByTarget(
                        this.lbl_result_amount.getComponent(f)
                      ),
                      this.lbl_result_amount.node.setScale(w.ONE));
                  var l = d(this.result_node).sequence(
                      d().call(function () {
                        e.as_EffectCmp.showEffect(
                          T.JACKPOT,
                          1,
                          0,
                          e.moneyExchange
                        );
                      }),
                      this.btn_stopautoSpin.node.active
                        ? d(this.result_node).sequence(
                            d().delay(14.5),
                            d().call(function () {
                              e.as_EffectCmp.hideEffect(T.JACKPOT);
                            })
                          )
                        : d(this.result_node).sequence(
                            d().delay(7),
                            d().call(function () {
                              cc.log("active click"),
                                e.as_EffectCmp.activeClick(T.JACKPOT);
                            })
                          )
                    ),
                    a = d(this.result_node).sequence(
                      d().call(function () {
                        e.resetSpinButton();
                      }),
                      d().delay(this.isFast ? 0.5 : 1)
                    ),
                    s = d(this.result_node).sequence(
                      d().call(function () {
                        if (
                          (D.getInstance().playSfx(e.win_normal_sfx),
                          e.wonJackpot ||
                            null == e.lbl_result_amount ||
                            null == e.lbl_result_amount ||
                            (e.lbl_result_amount.getComponent(f).opacity = 255),
                          e.result_tween && e.result_tween.stop(),
                          e.isFast)
                        )
                          null != e.lbl_result_amount &&
                            null != e.lbl_result_amount &&
                            (e.lbl_result_amount.string = V.formatNumber(
                              e.moneyExchange
                            ));
                        else if (!e.wonJackpot) {
                          D.getInstance().playAdditionalSfx(
                            e.win_normal_money_sfx,
                            !0
                          ),
                            (e.result_tween = d({ a: 0 })
                              .to(
                                1,
                                { a: e.moneyExchange },
                                {
                                  progress: function (t, n, i, o) {
                                    return (
                                      null != e.lbl_result_amount &&
                                        null != e.lbl_result_amount &&
                                        (e.lbl_result_amount.string =
                                          V.formatNumber(Math.floor(i))),
                                      t + (n - t) * o
                                    );
                                  },
                                }
                              )
                              .call(function () {
                                null != e.lbl_result_amount &&
                                  null != e.lbl_result_amount &&
                                  ((e.lbl_result_amount.string = V.formatNumber(
                                    e.moneyExchange
                                  )),
                                  D.getInstance().stopAdditionalSfx(
                                    e.win_normal_money_sfx
                                  ));
                              })
                              .start());
                        }
                        e.bg_result_node.setAnimation(0, "win", !1);
                        e.bg_result_node.setCompleteListener(function (t) {
                          "win" == (t.animation ? t.animation.name : "") &&
                            e.bg_result_node.setAnimation(0, "loop", !0);
                        }),
                          !e.wonJackpot &&
                            e.moneyExchange >= 100 * e.bet &&
                            e.as_EffectCmp.showEffect(
                              T.BIGWIN,
                              e.isFast ? 2 : 1,
                              e.isFast ? 0.75 : 2,
                              0
                            );
                      }),
                      this.wonJackpot ? l : a,
                      d().call(function () {
                        return t && t();
                      })
                    );
                  d(
                    null == (n = this.lbl_result_amount)
                      ? void 0
                      : n.getComponent(f)
                  )
                    .sequence(
                      d().delay(o),
                      d().delay(this.isFast ? 0.5 : this.timeToShowResults - o),
                      d().to(0.5, { opacity: 1 })
                    )
                    .start(),
                    s.start();
                }),
                (l.update = function (t) {
                  null != this.lblTongCuoc &&
                    null != this.lblTongCuoc &&
                    (this.lblTongCuoc.string = V.formatMoneyNumber(
                      this.getTotalBet()
                    ));
                }),
                (l.spin = function () {
                  if (this.as_SlotMachineCmp.isStopped())
                    if (this.lineArr.length <= 0)
                      B.showNoti("Vui lòng chọn dòng");
                    else {
                      var t;
                      if (this.moneyExchange > 0)
                        this.result_tween && this.result_tween.stop(),
                          null != this.lbl_result_amount &&
                            null != this.lbl_result_amount &&
                            (this.lbl_result_amount.string = V.formatNumber(
                              this.moneyExchange
                            )),
                          d(
                            null == (t = this.lbl_result_amount)
                              ? void 0
                              : t.getComponent(f)
                          )
                            .sequence(
                              d().delay(0.5),
                              d().to(0.5, { opacity: 1 })
                            )
                            .start();
                      D.getInstance().stopAllAdditionalSfx(),
                        this.as_EffectCmp.hideAll(),
                        (this.symbols = []),
                        (this.wonFreeSpins = 0),
                        (this.wonX2 = !1),
                        (this.btn_x2.interactable = !1),
                        (this.btn_spin.interactable = !1),
                        this.btn_spin_skeleton.setAnimation(
                          0,
                          "stop_disable",
                          !0
                        ),
                        g.stopAllByTarget(this.node),
                        this.as_SlotMachineCmp.spin(),
                        this.requestSpin(),
                        D.getInstance().playAdditionalSfx(
                          this.spin_sfx_loop,
                          !0
                        );
                    }
                }),
                (l.playColumnStopEnd = function () {
                  D.getInstance().playSfx(this.spin_end_sfx);
                }),
                (l.checkX2Game = function (t) {
                  for (var n = 0; n < t.length; n++) {
                    var e = t[n];
                    this.checkX2Game2(e, !0);
                  }
                }),
                (l.checkX2Game2 = function (t, n) {
                  void 0 === n && (n = !1);
                  var e = t.ex2;
                  this.wonX2 = e;
                  var i = t.m;
                  (this.asX2View.tienDaThang = i),
                    (this.asX2View.tienX2 = Math.floor(1.98 * i)),
                    t.gs && n
                      ? this.asX2View.open(i)
                      : n &&
                        ((this.btn_x2.interactable = e),
                        null != this.lbl_result_amount &&
                          null != this.lbl_result_amount &&
                          (this.lbl_result_amount.string = V.formatNumber(i)));
                }),
                (l.stop = function (t, n) {
                  var e = this;
                  (void 0 === n && (n = !1),
                  this.as_SlotMachineCmp.isSpinning()) &&
                    (0 == t.length &&
                      ((this.moneyExchange = 0), (this.rewards = [])),
                    d(this.node)
                      .sequence(
                        d().delay(z.TIME_TO_SHOW_RESULT),
                        d().call(function () {
                          (e.btn_spin.interactable = !0),
                            e.btn_spin_skeleton.setAnimation(0, "stop", !0),
                            e.isFast || n
                              ? e.as_SlotMachineCmp.stopImmediately(t)
                              : e.as_SlotMachineCmp.stop(t);
                        })
                      )
                      .start());
                }),
                (l.onSpinResult = function (n) {
                  if (
                    (t.prototype.onSpinResult.call(this, n),
                    null != n.mgs && null != n.mgs)
                  ) {
                    var e = n.mgs;
                    return B.showNoti(e), void this.forceMachineStop(!0);
                  }
                  this.checkX2Game2(n.lsp);
                }),
                (l.receiveData = function (t, n, e, i, o, l, a, s) {
                  var r = this;
                  (this._aid = t),
                    (this.bonusCount = 0),
                    (this.symbols = i.map(function (t) {
                      var n = new L();
                      return 10 == t && r.bonusCount++, n.decodeItem(t), n;
                    })),
                    (this.rewards = e),
                    (this.moneyExchange = n),
                    (this.wonJackpot =
                      this.rewards.filter(function (t) {
                        return 1 == t.iJ;
                      }).length > 0),
                    (this.miniGameDict = a ? s : null),
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
                    if (i.gid == F.ASPHALT)
                      if (n) {
                        var s = new Bn();
                        (s.jackpot = o),
                          (s.aid = l),
                          (s.bet = a),
                          this._jackpotInfos.push(s);
                      } else
                        for (var r = 0; r < this._jackpotInfos.length; r++)
                          if (
                            this._jackpotInfos[r].aid == l &&
                            this._jackpotInfos[r].bet == a
                          ) {
                            this._jackpotInfos[r].jackpot = o;
                            break;
                          }
                  }
                  if (n) {
                    for (var u = [], c = 0; c < this._jackpotInfos.length; c++)
                      if (1 == this._jackpotInfos[c].aid) {
                        var p = new Bn();
                        (p.jackpot = this._jackpotInfos[c].jackpot),
                          (p.aid = this._jackpotInfos[c].aid),
                          (p.bet = this._jackpotInfos[c].bet),
                          u.push(p);
                      }
                    for (var b = 0; b < this._jackpotInfos.length; b++)
                      if (2 == this._jackpotInfos[b].aid) {
                        var _ = new Bn();
                        (_.jackpot = this._jackpotInfos[b].jackpot),
                          (_.aid = this._jackpotInfos[b].aid),
                          (_.bet = this._jackpotInfos[b].bet),
                          u.push(_);
                      }
                    for (var h = 1, f = 0; f < u.length - 1; f++) {
                      for (var m = f + 1; m < u.length; m++)
                        if (
                          u[f].aid == h &&
                          u[m].aid == h &&
                          u[m].bet < u[f].bet
                        ) {
                          var d = u[f].bet,
                            g = u[f].jackpot;
                          (u[f].bet = u[m].bet),
                            (u[f].jackpot = u[m].jackpot),
                            (u[m].bet = d),
                            (u[m].jackpot = g),
                            (m = f + 1);
                        }
                      f == u.length - 2 && 1 == h && ((f = 0), (h = 2));
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
                        (this.jackpot_tween = d(i)
                          .to(
                            2,
                            { a: this._jackpotInfos[e].jackpot },
                            {
                              progress: function (t, e, i, o) {
                                return (
                                  null != n.lblJackpot &&
                                    null != n.lblJackpot &&
                                    ((n.jackpot_amount = i),
                                    (n.lblJackpot.string = V.formatNumber(
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
                            (this.lblJackpot.string = V.formatNumber(
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
                        (t.lobby_jackpot_tween[n] = d(e).to(
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
                                    V.formatNumber(Math.floor(o)))),
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
                    (this.line_ids = t.map(function (t) {
                      return t.lid;
                    })),
                    (this.currentLineNum = this.lineArr.length),
                    (this.lblLineNum.string = this.currentLineNum.toString()),
                    (z.LINE = t.map(function (t) {
                      return t.poss;
                    }));
                }),
                (l.setLines2 = function (t) {
                  this.lineArr = t;
                }),
                (l.finishX2Game = function () {
                  null != this.lbl_result_amount &&
                    null != this.lbl_result_amount &&
                    (this.lbl_result_amount.string = ""),
                    (this.btn_x2.interactable = !1),
                    N.sendRefreshMoney(),
                    this.playBgmMusic();
                }),
                (l.updateLines = function (t) {
                  cc.log("UPDATE LINE:", JSON.stringify(t)),
                    (this.lineArr = t),
                    (this.currentLineNum = this.lineArr.length),
                    (this.lblLineNum.string = this.currentLineNum.toString());
                }),
                (l.show = function () {
                  return t.prototype.show.call(this);
                }),
                (l.onX2Response = function (t) {
                  var n;
                  null == (n = this.asX2View) || n.x2GameResponse(t);
                }),
                n
              );
            })(R)).isPlayedIntro = !1),
            (Ln.instance = null),
            (Rt = n((Vt = Ln).prototype, "bg_jackpot", [q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Dt = n(Vt.prototype, "lblJackpot", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Gt = n(Vt.prototype, "lbl_lobby_jackpots", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Xt = n(Vt.prototype, "lblTongCuoc", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ot = n(Vt.prototype, "lblCuoc", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pt = n(Vt.prototype, "lblLineNum", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (qt = n(Vt.prototype, "btn_line", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ut = n(Vt.prototype, "btn_spin", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ht = n(Vt.prototype, "btn_stopautoSpin", [$], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Kt = n(Vt.prototype, "btn_spin_skeleton", [tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Qt = n(Vt.prototype, "btn_fast", [nt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Yt = n(Vt.prototype, "btn_lobby_back", [et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Wt = n(Vt.prototype, "btn_x2", [it], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Zt = n(Vt.prototype, "btn_main_back", [ot], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($t = n(Vt.prototype, "btn_ranking", [lt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (tn = n(Vt.prototype, "btn_bet_money", [at], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (nn = n(Vt.prototype, "result_node", [st], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (en = n(Vt.prototype, "bg_result_node", [rt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (on = n(Vt.prototype, "lbl_result_amount", [ut], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ln = n(Vt.prototype, "as_SlotMachineCmp_Node", [ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (an = n(Vt.prototype, "loaded_item_normal", [pt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (sn = n(Vt.prototype, "loaded_item_blur", [bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (rn = n(Vt.prototype, "loaded_anim_item", [_t], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (un = n(Vt.prototype, "loading_node", [ht], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (cn = n(Vt.prototype, "loading_bg", [ft], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (pn = n(Vt.prototype, "lobby_node", [mt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (bn = n(Vt.prototype, "main_node", [dt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_n = n(Vt.prototype, "top_node", [gt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (hn = n(Vt.prototype, "btn_info", [yt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (fn = n(Vt.prototype, "btn_setting", [wt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (mn = n(Vt.prototype, "asInfoView", [St], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (dn = n(Vt.prototype, "asSettingView", [kt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (gn = n(Vt.prototype, "asX2View", [vt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (yn = n(Vt.prototype, "bottom_node", [Ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (wn = n(Vt.prototype, "btn_bets", [At], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Sn = n(Vt.prototype, "spr_background", [jt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (kn = n(Vt.prototype, "sprFrame_backgrounds", [Mt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (vn = n(Vt.prototype, "as_EffectCmp", [It], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Cn = n(Vt.prototype, "lobby_bgm_music", [Et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (An = n(Vt.prototype, "main_bgm_music", [Tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (jn = n(Vt.prototype, "spin_sfx_loop", [zt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Mn = n(Vt.prototype, "spin_end_sfx", [Lt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (In = n(Vt.prototype, "win_normal_sfx", [xt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (En = n(Vt.prototype, "win_normal_money_sfx", [Nt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Tn = n(Vt.prototype, "trial_node", [Bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (zn = n(Vt.prototype, "jackpot_history_node", [Ft], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Jt = Vt))
          ) || Jt)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ASInfoView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CommonPopup.ts"],
  function (n) {
    "use strict";
    var e, t, r, i, o, c, u, l, a, s, p, f, b;
    return {
      setters: [
        function (n) {
          (e = n.applyDecoratedDescriptor),
            (t = n.inheritsLoose),
            (r = n.initializerDefineProperty),
            (i = n.assertThisInitialized);
        },
        function (n) {
          (o = n.cclegacy),
            (c = n._decorator),
            (u = n.Button),
            (l = n.Node),
            (a = n.Sprite),
            (s = n.Tween),
            (p = n.tween),
            (f = n.Vec3);
        },
        function (n) {
          b = n.CommonPopup;
        },
      ],
      execute: function () {
        var d, _, h, g, y, I, w, x, v, m, P, z, A;
        o._RF.push({}, "ead0ckZFPBH/YoIR+BFdQvF", "ASInfoView", void 0);
        var S = c.ccclass,
          k = c.property;
        n(
          "ASInfoView",
          ((d = S("ASInfoView")),
          (_ = k(u)),
          (h = k(u)),
          (g = k(u)),
          (y = k(l)),
          (I = k([a])),
          d(
            ((v = e(
              (x = (function (n) {
                function e() {
                  for (
                    var e, t = arguments.length, o = new Array(t), c = 0;
                    c < t;
                    c++
                  )
                    o[c] = arguments[c];
                  return (
                    (e = n.call.apply(n, [this].concat(o)) || this),
                    r(e, "btn_prev", v, i(e)),
                    r(e, "btn_next", m, i(e)),
                    r(e, "btn_close_info", P, i(e)),
                    r(e, "content", z, i(e)),
                    r(e, "spr_infos", A, i(e)),
                    (e.currentIndex = 0),
                    e
                  );
                }
                t(e, n);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    var n = this;
                    this.btn_next.node.on("click", function () {
                      n.currentIndex++,
                        n.currentIndex >= n.spr_infos.length &&
                          (n.currentIndex = 0),
                        n.loadPage();
                    }),
                      this.btn_prev.node.on("click", function () {
                        n.currentIndex--,
                          n.currentIndex < 0 &&
                            (n.currentIndex = n.spr_infos.length - 1),
                          n.loadPage();
                      }),
                      this.btn_close_info.node.on("click", function () {
                        n.hide();
                      });
                  }),
                  (o.loadPage = function (n) {
                    s.stopAllByTarget(this.content),
                      p(this.content)
                        .to(
                          0.5,
                          {
                            position: new f(
                              -1e3 * this.currentIndex - 20,
                              0,
                              0
                            ),
                          },
                          { easing: "expoOut" }
                        )
                        .start();
                  }),
                  e
                );
              })(b)).prototype,
              "btn_prev",
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
            (m = e(x.prototype, "btn_next", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = e(x.prototype, "btn_close_info", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(x.prototype, "content", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = e(x.prototype, "spr_infos", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (w = x))
          ) || w)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ASJackpotHistoryItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var i, e, n, r, o, a, l, u, c, p;
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
            (u = t.Color),
            (c = t.Component);
        },
        function (t) {
          p = t.StringUtils;
        },
      ],
      execute: function () {
        var h, s, _, f, g, b, m, x, y, w, S, d, k;
        o._RF.push(
          {},
          "f1540SrVSBJJ6hHLyOFWA+h",
          "ASJackpotHistoryItemView",
          void 0
        );
        var z = a.ccclass,
          v = a.property;
        t(
          "default",
          ((h = z("ASJackpotHistoryItemView")),
          (s = v(l)),
          (_ = v(l)),
          (f = v(l)),
          (g = v(l)),
          (b = v(l)),
          h(
            ((y = i(
              (x = (function (t) {
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
                    n(i, "txt_phien_time", w, r(i)),
                    n(i, "txt_phien_datcuoc", S, r(i)),
                    n(i, "txt_phien_taikhoan", d, r(i)),
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
                      (this.txt_phien_tienthang.color = u.WHITE),
                      (this.txt_phien_tienthang.string = p.formatNumber(n));
                  }),
                  i
                );
              })(c)).prototype,
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
            (w = i(x.prototype, "txt_phien_time", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = i(x.prototype, "txt_phien_datcuoc", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = i(x.prototype, "txt_phien_taikhoan", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = i(x.prototype, "txt_phien_tienthang", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = x))
          ) || m)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ASJackpotHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ASJackpotHistoryItemView.ts",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./HttpManager.ts",
    "./Define.ts",
    "./StringUtils.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, r, o, a, s, c, l, u, p, g, m, f, h, b, y;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
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
        var _, d, v, w, P, S, H, T, k, A, C;
        o._RF.push(
          {},
          "2af9aKjh09E9YoJ2rJw+XgQ",
          "ASJackpotHistoryView",
          void 0
        );
        var J = a.ccclass,
          L = a.property,
          x = function () {
            (this.rank = 0),
              (this.money = 0),
              (this.displayName = ""),
              (this.bet = 0),
              (this.type = 0),
              (this.betTime = "");
          };
        t(
          "default",
          ((_ = J("ASJackpotHistoryView")),
          (d = L(s)),
          (v = L(s)),
          (w = L(c)),
          (P = L([l])),
          _(
            ((T = e(
              (H = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    i(e, "btn_prev", T, r(e)),
                    i(e, "btn_next", k, r(e)),
                    i(e, "lbl_page", A, r(e)),
                    i(e, "item_nodes", C, r(e)),
                    (e._bets = []),
                    (e.currentPage = 1),
                    (e.max_pages = 0),
                    (e.item_views = []),
                    e
                  );
                }
                n(e, t);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
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
                  (o.goToFirstPage = function () {
                    (this.currentPage = 1),
                      (this.lbl_page.string = this.currentPage.toString());
                  }),
                  (o.fetchHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0), t && this.goToFirstPage();
                    var n = 6 * (this.currentPage - 1),
                      i =
                        m.SAdomainURL +
                        f.JACKPOT_RANK_TOP_URL.replace(
                          "%gameid%",
                          b.ASPHALT.toString()
                        ).replace("%skip%", n.toString());
                    h.sendGET({
                      url: i,
                      onCompleted: function (n) {
                        e._bets = [];
                        var i = JSON.parse(n).data,
                          r = i.items;
                        if (null != r) {
                          var o = i.count;
                          e.max_pages = Math.ceil(o / 6);
                          for (var a = 0; a < r.length; a++) {
                            var s = r[a],
                              c = new x();
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
                  (o.showJackpotHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0),
                      this.item_views.length <= 0 &&
                        (this.item_views = this.item_nodes.map(function (t) {
                          return t.getComponent(p);
                        })),
                      this.item_views.forEach(function (t, n) {
                        var i = e._bets[n];
                        null != i && null != i
                          ? ((t.node.getComponent(u).opacity = 255),
                            t.show(
                              i.displayName,
                              i.betTime,
                              i.bet,
                              i.money,
                              i.type
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
            (k = e(H.prototype, "btn_next", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = e(H.prototype, "lbl_page", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = e(H.prototype, "item_nodes", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (S = H))
          ) || S)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ASNetworkController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BaseSlotGameNetworkController.ts",
    "./Define.ts",
    "./ASFullScreenGameView.ts",
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
          r = e.BaseSlotGameNetworkController;
        },
        function (e) {
          o = e.GameID;
        },
        function (e) {
          i = e.ASFullScreenGameView;
        },
      ],
      execute: function () {
        n._RF.push(
          {},
          "287bcRJF1xER7M0bZG2qE2J",
          "ASNetworkController",
          void 0
        ),
          (e(
            "ASNetworkController",
            (function (e) {
              function n() {
                return e.apply(this, arguments) || this;
              }
              t(n, e),
                (n.getInstance = function () {
                  return n._instance || (n._instance = new n()), n._instance;
                });
              var r = n.prototype;
              return (
                (r.getGameView = function () {
                  return i.getInstance();
                }),
                (r.getGameID = function () {
                  return o.ASPHALT;
                }),
                n
              );
            })(r)
          )._instance = void 0),
          n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ASNoHuView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ASFullScreenGameView.ts",
    "./StringUtils.ts",
    "./SoundManager.ts",
  ],
  function (t) {
    "use strict";
    var n, e, o, i, a, r, c, u, l, s, _, p, h, m, f, w, k, d;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (r = t._decorator),
            (c = t.Node),
            (u = t.sp),
            (l = t.Label),
            (s = t.AudioClip),
            (_ = t.UIOpacity),
            (p = t.Vec3),
            (h = t.Tween),
            (m = t.tween),
            (f = t.Component);
        },
        function (t) {
          w = t.ASFullScreenGameView;
        },
        function (t) {
          k = t.StringUtils;
        },
        function (t) {
          d = t.SoundManager;
        },
      ],
      execute: function () {
        var b, v, g, y, S, j, A, V, z, C, N, L, M;
        a._RF.push({}, "462ae03PjVFXpM82wnJwXgm", "ASNoHuView", void 0);
        var x = r.ccclass,
          F = r.property;
        t(
          "ASNoHuView",
          ((b = x("ASNoHuView")),
          (v = F(c)),
          (g = F(c)),
          (y = F(u.Skeleton)),
          (S = F(l)),
          (j = F(s)),
          b(
            ((z = n(
              (V = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, a = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (n = t.call.apply(t, [this].concat(a)) || this),
                    o(n, "root", z, i(n)),
                    o(n, "black_screen", C, i(n)),
                    o(n, "jackpot_skeleton", N, i(n)),
                    o(n, "nohu_win_amount", L, i(n)),
                    o(n, "jackpot_money_sfx", M, i(n)),
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
                      t.activated_click &&
                        (t.jackpot_skeleton.setAnimation(0, "out", !1),
                        t.jackpot_skeleton.setCompleteListener(function (n) {
                          null != n &&
                            "out" == (n.animation ? n.animation.name : "") &&
                            t.hide();
                          t.jackpot_skeleton.setCompleteListener(
                            function () {}
                          );
                        }));
                    });
                  }),
                  (a.activeClick = function () {
                    (this.black_screen.active = !0),
                      (this.activated_click = !0);
                  }),
                  (a.show = function (t) {
                    var n = this;
                    (this.root.active = !0),
                      (this.node.getComponent(_).opacity = 255),
                      (this.black_screen.active = !0),
                      (this.activated_click = !1),
                      (this.jackpot_skeleton.node.active = !0),
                      this.jackpot_skeleton.setAnimation(0, "appear", !1),
                      this.jackpot_skeleton.addAnimation(0, "loop", !0),
                      (this.nohu_win_amount.string = "0"),
                      this.nohu_win_amount.node.parent.setPosition(
                        new p(0, -600, 0)
                      ),
                      h.stopAllByTarget(this.nohu_win_amount.node.parent),
                      m(this.nohu_win_amount.node.parent)
                        .delay(0)
                        .call(function () {
                          (n.nohu_win_amount.node.parent.active = !0),
                            d.getInstance().playSfx(n.jackpot_money_sfx);
                        })
                        .to(0.1, { position: new p(0, -250, 0) })
                        .call(function () {
                          n.win_amount_tween && n.win_amount_tween.stop();
                          n.win_amount_tween = m({ a: 0 })
                            .to(
                              4,
                              { a: t },
                              {
                                progress: function (t, e, o, i) {
                                  return (
                                    null != n.nohu_win_amount &&
                                      null != n.nohu_win_amount &&
                                      (n.nohu_win_amount.string =
                                        k.formatNumber(Math.floor(o))),
                                    t + (e - t) * i
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
                    var t = this;
                    this.root.active && w.getInstance().finishedJackpot(),
                      (this.activated_click = !1),
                      m(this.node.getComponent(_))
                        .to(0.5, { opacity: 0 })
                        .call(function () {
                          (t.black_screen.active = !1),
                            (t.root.active = !1),
                            (t.nohu_win_amount.node.parent.active = !1);
                        })
                        .start();
                  }),
                  n
                );
              })(f)).prototype,
              "root",
              [v],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (C = n(V.prototype, "black_screen", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = n(V.prototype, "jackpot_skeleton", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = n(V.prototype, "nohu_win_amount", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = n(V.prototype, "jackpot_money_sfx", [j], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = V))
          ) || A)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ASSettingView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ASBetHistoryView.ts",
    "./ASJackpotHistoryView.ts",
    "./CommonPopup.ts",
    "./Define.ts",
    "./EventManager.ts",
  ],
  function (t) {
    "use strict";
    var e, i, o, n, r, c, u, l, s, a, g, f, p, b;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (c = t._decorator),
            (u = t.Button),
            (l = t.Toggle),
            (s = t.systemEvent);
        },
        function (t) {
          a = t.default;
        },
        function (t) {
          g = t.default;
        },
        function (t) {
          f = t.CommonPopup;
        },
        function (t) {
          p = t.StorageKey;
        },
        function (t) {
          b = t.EventKey;
        },
      ],
      execute: function () {
        var h, y, m, _, d, S, w, k, C, V, H, v, z, x, A, I, M;
        r._RF.push({}, "430ffYYmD5K7ZkkpUQdQaKp", "ASSettingView", void 0);
        var B = c.ccclass,
          T = c.property;
        t(
          "ASSettingView",
          ((h = B("ASSettingView")),
          (y = T(u)),
          (m = T(u)),
          (_ = T(u)),
          (d = T(l)),
          (S = T(l)),
          (w = T(a)),
          (k = T(g)),
          h(
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
                    o(e, "btn_close_setting", z, n(e)),
                    o(e, "tog_music", x, n(e)),
                    o(e, "tog_sfx", A, n(e)),
                    o(e, "bigCityBetHistoryView", I, n(e)),
                    o(e, "bigCityJackpotHistoryView", M, n(e)),
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
                      i.bigCityBetHistoryView.fetchHistory();
                    }),
                      this.btn_lichsuhu.node.on("click", function () {
                        i.bigCityJackpotHistoryView.fetchHistory();
                      }),
                      this.btn_close_setting.node.on("click", function () {
                        i.hide();
                      }),
                      (this.tog_sfx.isChecked =
                        "1" == localStorage.getItem(p.SoundFX) ||
                        "true" == localStorage.getItem(p.SoundFX)),
                      (this.tog_music.isChecked =
                        "1" == localStorage.getItem(p.Music) ||
                        "true" == localStorage.getItem(p.Music)),
                      s.emit(b.MusicToggle, this.tog_music.isChecked),
                      s.emit(b.SoundToggle, this.tog_sfx.isChecked),
                      null == (t = this.tog_sfx) ||
                        t.node.on("toggle", function () {
                          localStorage.setItem(
                            p.SoundFX,
                            i.tog_sfx.isChecked ? "1" : "0"
                          ),
                            s.emit(b.SoundToggle, i.tog_sfx.isChecked);
                        }),
                      null == (e = this.tog_music) ||
                        e.node.on("toggle", function () {
                          localStorage.setItem(
                            p.Music,
                            i.tog_music.isChecked ? "1" : "0"
                          ),
                            s.emit(b.MusicToggle, i.tog_music.isChecked);
                        });
                  }),
                  e
                );
              })(f)).prototype,
              "btn_lichsucuoc",
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
            (v = e(V.prototype, "btn_lichsuhu", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(V.prototype, "btn_close_setting", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = e(V.prototype, "tog_music", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = e(V.prototype, "tog_sfx", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(V.prototype, "bigCityBetHistoryView", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = e(V.prototype, "bigCityJackpotHistoryView", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = V))
          ) || C)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ASSummaryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./SoundManager.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, r, l, o, u, a, s, c;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (n = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (r = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy),
            (o = e._decorator),
            (u = e.Label),
            (a = e.AudioClip);
        },
        function (e) {
          s = e.CommonPopup;
        },
        function (e) {
          c = e.SoundManager;
        },
      ],
      execute: function () {
        var p, f, b, y, m, _, g, h, S, d, w;
        l._RF.push({}, "1d695s+FW9LrruYM2kOGHbQ", "ASSummaryView", void 0);
        var v = o.ccclass,
          x = o.property;
        e(
          "ASSummaryView",
          ((p = v("ASSummaryView")),
          (f = x(u)),
          (b = x(u)),
          (y = x(u)),
          (m = x(a)),
          p(
            ((h = t(
              (g = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, l = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    l[o] = arguments[o];
                  return (
                    (t = e.call.apply(e, [this].concat(l)) || this),
                    i(t, "lbl_1", h, r(t)),
                    i(t, "lbl_2", S, r(t)),
                    i(t, "lbl_3", d, r(t)),
                    i(t, "open_sfx", w, r(t)),
                    t
                  );
                }
                n(t, e);
                var l = t.prototype;
                return (
                  (l.setText = function (e, t, n) {
                    void 0 === n && (n = ""),
                      (this.lbl_1.string = e),
                      (this.lbl_2.string = t),
                      "" != n && (this.lbl_3.string = n);
                  }),
                  (l.show = function (t) {
                    void 0 === t && (t = function () {}),
                      e.prototype.show.call(this, t),
                      c.getInstance().playSfx(this.open_sfx);
                  }),
                  t
                );
              })(s)).prototype,
              "lbl_1",
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
            (S = t(g.prototype, "lbl_2", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = t(g.prototype, "lbl_3", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = t(g.prototype, "open_sfx", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = g))
          ) || _)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/ASX2View.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./ASFullScreenGameView.ts",
    "./ASSummaryView.ts",
    "./CommonPopup.ts",
    "./PersistManager.ts",
    "./StringUtils.ts",
    "./SoundManager.ts",
    "./ASNetworkController.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, o, s, l, a, r, u, c, f, h, m, g, p, _, b, d, w, y, x, S, v;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (l = t._decorator),
            (a = t.Button),
            (r = t.Node),
            (u = t.Label),
            (c = t.AudioClip),
            (f = t.sp),
            (h = t.Tween),
            (m = t.tween),
            (g = t.view),
            (p = t.Vec3),
            (_ = t.UIOpacity);
        },
        function (t) {
          b = t.ASFullScreenGameView;
        },
        function (t) {
          d = t.ASSummaryView;
        },
        function (t) {
          w = t.CommonPopup;
        },
        function (t) {
          y = t.PersistManager;
        },
        function (t) {
          x = t.StringUtils;
        },
        function (t) {
          S = t.SoundManager;
        },
        function (t) {
          v = t.ASNetworkController;
        },
      ],
      execute: function () {
        var A,
          C,
          I,
          z,
          k,
          T,
          X,
          V,
          D,
          P,
          L,
          E,
          K,
          M,
          R,
          B,
          N,
          G,
          U,
          q,
          F,
          Y,
          j,
          H,
          O,
          J,
          Q,
          W,
          Z,
          $,
          tt,
          et,
          nt;
        s._RF.push({}, "9ff4f4KGVlBEYUyzw9UsEih", "ASX2View", void 0);
        var it = l.ccclass,
          ot = l.property;
        t(
          "ASX2View",
          ((A = it("ASX2View")),
          (C = ot(a)),
          (I = ot(a)),
          (z = ot([a])),
          (k = ot(a)),
          (T = ot(a)),
          (X = ot(r)),
          (V = ot(r)),
          (D = ot(u)),
          (P = ot(u)),
          (L = ot(u)),
          (E = ot(d)),
          (K = ot(c)),
          (M = ot(c)),
          (R = ot(c)),
          (B = ot(c)),
          A(
            ((U = e(
              (G = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, s = new Array(n), l = 0;
                    l < n;
                    l++
                  )
                    s[l] = arguments[l];
                  return (
                    (e = t.call.apply(t, [this].concat(s)) || this),
                    i(e, "btn_play", U, o(e)),
                    i(e, "btn_stop", q, o(e)),
                    i(e, "items", F, o(e)),
                    i(e, "btn_info", Y, o(e)),
                    i(e, "btn_close_info", j, o(e)),
                    i(e, "info_node", H, o(e)),
                    i(e, "overlay_info", O, o(e)),
                    i(e, "lbl_win", J, o(e)),
                    i(e, "lbl_title", Q, o(e)),
                    i(e, "lbl_x2", W, o(e)),
                    i(e, "bigCitySummaryView", Z, o(e)),
                    i(e, "x2_minigame_bgm", $, o(e)),
                    i(e, "x2_win_sfx", tt, o(e)),
                    i(e, "x2_lose_sfx", et, o(e)),
                    i(e, "x2_touch_sfx", nt, o(e)),
                    (e.x2ItemsPosX = [-350, -120, 120, 350]),
                    (e.x2ItemsPosY = [0.5, 0.5, 0.5, 0.5]),
                    (e.skeletons = []),
                    (e.tienDaThang = 0),
                    (e.tienX2 = 0),
                    (e.tienTongKet = 0),
                    (e.tax = 0.02),
                    (e.selected_item = null),
                    (e.selected_item_index = -1),
                    (e.results = [0, 0, 0, 0]),
                    e
                  );
                }
                n(e, t);
                var s = e.prototype;
                return (
                  (s.onLoad = function () {
                    var e = this;
                    this.btn_play.node.on("click", function () {
                      e.continue();
                    }),
                      this.btn_stop.node.on("click", function () {
                        e.stop();
                      }),
                      this.btn_close_info.node.on("click", function () {
                        e.hideInfo();
                      }),
                      this.btn_info.node.on("click", function () {
                        e.showInfo();
                      }),
                      (this.skeletons = this.items.map(function (t) {
                        return t.target.getComponent(f.Skeleton);
                      })),
                      this.items.forEach(function (t, n) {
                        var i = n,
                          o = t;
                        t.node.on("click", function () {
                          e.request(),
                            (e.selected_item = o),
                            (e.selected_item_index = i);
                        });
                      }),
                      t.prototype.onLoad.call(this);
                  }),
                  (s.request = function () {
                    var t;
                    S.getInstance().playSfx(this.x2_touch_sfx),
                      v
                        .getInstance()
                        .requestX2(
                          null == (t = b.getInstance()) ? void 0 : t.getAID()
                        ),
                      this.items.forEach(function (t, e) {
                        t.interactable = !1;
                      });
                  }),
                  (s.open = function (t) {
                    S.getInstance().playBgm(this.x2_minigame_bgm),
                      (this.tienTongKet = t),
                      this.showState(1, this.tienDaThang, this.tienX2),
                      this.show();
                  }),
                  (s.x2GameResponse = function (t) {
                    if (null != t.iid && null != t.iid) {
                      if (0 == t.iid) {
                        var e = t.crd;
                        this.tienTongKet = e;
                        var n = e;
                        (n *= 2 - this.tax),
                          (n = Math.floor(n)),
                          this.showState(2, e, n);
                      } else this.showState(3, 0, 0);
                    } else {
                      if (null == t.mgs || null == t.mgs) {
                        var i = t.mgs;
                        y.showNoti(i);
                      }
                      this.hide();
                    }
                  }),
                  (s.showState = function (t, e, n) {
                    var i = this;
                    switch (t) {
                      case 1:
                        (this.lbl_win.string = x.formatNumber(
                          this.tienDaThang
                        )),
                          (this.lbl_x2.string = x.formatNumber(this.tienX2)),
                          this.x2ItemsPosX.forEach(function (t, e) {
                            var n =
                              g.getDesignResolutionSize().height *
                                i.x2ItemsPosY[e] -
                              0.5 * g.getDesignResolutionSize().height;
                            i.items[e].target.setPosition(new p(t, n, 0)),
                              i.skeletons[e].setAnimation(0, "idle", !1),
                              i.skeletons[e].setCompleteListener(function (t) {
                                if (null != t) t.animation && t.animation.name;
                              });
                          }),
                          (this.btn_play.node.active = !1),
                          this.items.forEach(function (t, e) {
                            t.interactable = !0;
                          }),
                          (this.lbl_title.string = "Chọn 1 viên Kryptonite");
                        break;
                      case 2:
                        (this.tienDaThang = e),
                          (this.tienX2 = n),
                          (this.btn_play.node.active = !0),
                          S.getInstance().playSfx(this.x2_win_sfx),
                          (this.lbl_title.string =
                            "Chúc mừng bạn đã vượt qua thử thách"),
                          this.randomResults(2),
                          this.items.forEach(function (e, n) {
                            if (e.name == i.selected_item.name) {
                              var o = e.target.getComponent(f.Skeleton);
                              o.setAnimation(0, "action_win", !1),
                                o.setCompleteListener(function (t) {
                                  null != t &&
                                    "action_win" ==
                                      (t.animation ? t.animation.name : "") &&
                                    o.setAnimation(0, "win", !0);
                                });
                            } else {
                              var s = e.target.getComponent(f.Skeleton);
                              i.results[n] == t
                                ? s.setAnimation(0, "action_win2", !1)
                                : s.setAnimation(0, "action_lose2", !1),
                                s.setCompleteListener(function (t) {});
                            }
                          });
                        break;
                      case 3:
                        (this.tienTongKet = 0),
                          (this.lbl_title.string = "Bạn đã thua cuộc"),
                          S.getInstance().playSfx(this.x2_lose_sfx),
                          this.randomResults(3),
                          this.items.forEach(function (e, n) {
                            if (e.name == i.selected_item.name) {
                              var o = e.target.getComponent(f.Skeleton);
                              o.setAnimation(0, "action_lose", !1),
                                o.setCompleteListener(function (t) {
                                  null != t &&
                                    "action_lose" ==
                                      (t.animation ? t.animation.name : "") &&
                                    o.setAnimation(0, "lose", !0);
                                });
                            } else {
                              var s = e.target.getComponent(f.Skeleton);
                              i.results[n] == t
                                ? s.setAnimation(0, "action_lose2", !1)
                                : s.setAnimation(0, "action_win2", !1),
                                s.setCompleteListener(function (t) {});
                            }
                          }),
                          h.stopAllByTarget(this.node),
                          m(this.node)
                            .delay(2.5)
                            .call(function () {
                              i.hide();
                            })
                            .start();
                    }
                  }),
                  (s.continue = function () {
                    this.showState(1, this.tienDaThang, this.tienX2);
                  }),
                  (s.hide = function () {
                    b.getInstance().finishX2Game(), t.prototype.hide.call(this);
                  }),
                  (s.stop = function () {
                    var t;
                    v
                      .getInstance()
                      .stopX2(
                        null == (t = b.getInstance()) ? void 0 : t.getAID()
                      ),
                      this.hide(),
                      this.tienTongKet > 0 &&
                        (this.bigCitySummaryView.setText(
                          "Chúc mừng bạn đã thắng",
                          "từ minigame X2",
                          x.formatNumber(this.tienTongKet)
                        ),
                        this.bigCitySummaryView.show());
                  }),
                  (s.randomResults = function (t) {
                    for (var e = 0; e < 4; e++) this.results[e] = 0;
                    this.results[this.selected_item_index] = t;
                    for (
                      var n = this.selected_item_index;
                      n == this.selected_item_index;

                    )
                      n = Math.round(Math.random() * (this.results.length - 1));
                    this.results[n] = t;
                  }),
                  (s.showInfo = function () {
                    var t = this.node.scale;
                    (this.info_node.active = !0),
                      this.info_node.setScale(new p(0.8 * t.x, 0.8 * t.y, 1)),
                      h.stopAllByTarget(this.info_node),
                      m(this.info_node)
                        .to(0.2, { scale: t })
                        .to(0.2, { scale: new p(0.95 * t.x, 0.95 * t.y, 1) })
                        .start(),
                      (this.info_node.getComponent(_).opacity = 0),
                      m(this.info_node.getComponent(_))
                        .to(0.2, { opacity: 255 }, { easing: "linear" })
                        .start();
                  }),
                  (s.hideInfo = function () {
                    this.info_node.active = !1;
                  }),
                  e
                );
              })(w)).prototype,
              "btn_play",
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
            (q = e(G.prototype, "btn_stop", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = e(G.prototype, "items", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Y = e(G.prototype, "btn_info", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = e(G.prototype, "btn_close_info", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = e(G.prototype, "info_node", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = e(G.prototype, "overlay_info", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = e(G.prototype, "lbl_win", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = e(G.prototype, "lbl_title", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (W = e(G.prototype, "lbl_x2", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Z = e(G.prototype, "bigCitySummaryView", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($ = e(G.prototype, "x2_minigame_bgm", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (tt = e(G.prototype, "x2_win_sfx", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (et = e(G.prototype, "x2_lose_sfx", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (nt = e(G.prototype, "x2_touch_sfx", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = G))
          ) || N)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/slot-dc",
  [
    "./ASBetHistoryDetail.ts",
    "./ASBetHistoryItemView.ts",
    "./ASBetHistoryView.ts",
    "./ASBonusItemView.ts",
    "./ASBonusView.ts",
    "./ASFullScreenGameView.ts",
    "./ASInfoView.ts",
    "./ASJackpotHistoryItemView.ts",
    "./ASJackpotHistoryView.ts",
    "./ASNetworkController.ts",
    "./ASNoHuView.ts",
    "./ASSettingView.ts",
    "./ASSummaryView.ts",
    "./ASX2View.ts",
    "./AS_EffectCmp.ts",
    "./AS_SlotMachineCmp.ts",
    "./AS_SlotMachineColumn.ts",
    "./AS_SlotMachineItemView.ts",
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

(function (r) {
  r("virtual:///prerequisite-imports/slot-dc", "chunks:///_virtual/slot-dc");
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
