System.register(
  "chunks:///_virtual/MIB_EffectCmp.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MIBBonusView.ts",
    "./MIBNoHuView.ts",
    "./SoundManager.ts",
  ],
  function (e) {
    "use strict";
    var i, t, n, o, a, r, s, c, l, u, f, b, p, h, _;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (a = e.cclegacy),
            (r = e._decorator),
            (s = e.Node),
            (c = e.sp),
            (l = e.AudioClip),
            (u = e.Tween),
            (f = e.tween),
            (b = e.Component);
        },
        function (e) {
          p = e.MIBBonusView;
        },
        function (e) {
          h = e.MIBNoHuView;
        },
        function (e) {
          _ = e.SoundManager;
        },
      ],
      execute: function () {
        var g, w, d, k, y, B, E, C, I, m, v, N, V, F, S, T, A, z, M, O, P;
        e("EFFECT_TYPE", void 0),
          a._RF.push({}, "ec981mZXQtCV64f2VLyFeFx", "MIB_EffectCmp", void 0);
        var H,
          R = r.ccclass,
          G = r.property;
        !(function (e) {
          (e[(e.FREE = 0)] = "FREE"),
            (e[(e.BIGWIN = 1)] = "BIGWIN"),
            (e[(e.JACKPOT = 2)] = "JACKPOT"),
            (e[(e.BONUS = 3)] = "BONUS");
        })(H || (H = e("EFFECT_TYPE", {})));
        e(
          "MIB_EffectCmp",
          ((g = R("MIB_EffectCmp")),
          (w = G(s)),
          (d = G(c.Skeleton)),
          (k = G(c.Skeleton)),
          (y = G(h)),
          (B = G(p)),
          (E = G(l)),
          (C = G(l)),
          (I = G(l)),
          (m = G(l)),
          g(
            ((V = i(
              (N = (function (e) {
                function i() {
                  for (
                    var i, t = arguments.length, a = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (i = e.call.apply(e, [this].concat(a)) || this),
                    n(i, "black_screen", V, o(i)),
                    n(i, "freespin_skeleton", F, o(i)),
                    n(i, "bigwin_skeleton", S, o(i)),
                    n(i, "bigCityNoHuView", T, o(i)),
                    n(i, "bigCityBonusView", A, o(i)),
                    n(i, "bigwin_audio", z, o(i)),
                    n(i, "freespin_audio", M, o(i)),
                    n(i, "nohu_audio", O, o(i)),
                    n(i, "bonus_audio", P, o(i)),
                    i
                  );
                }
                t(i, e);
                var a = i.prototype;
                return (
                  (a.showEffect = function (e, i, t, n) {
                    var o = this;
                    switch (e) {
                      case H.BIGWIN:
                        u.stopAllByTarget(this.bigwin_skeleton.node),
                          _.getInstance().playSfx(this.bigwin_audio),
                          (this.bigwin_skeleton.timeScale = i),
                          (this.black_screen.active = !1),
                          (this.bigwin_skeleton.node.active = !0),
                          this.bigwin_skeleton.setAnimation(0, "animation", !0),
                          f(this.bigwin_skeleton.node)
                            .sequence(
                              f().delay(t),
                              f().call(function () {
                                (o.black_screen.active = !1),
                                  (o.bigwin_skeleton.node.active = !1);
                              })
                            )
                            .start();
                        break;
                      case H.FREE:
                        u.stopAllByTarget(this.freespin_skeleton.node),
                          _.getInstance().playSfx(this.freespin_audio),
                          (this.freespin_skeleton.timeScale = i),
                          (this.black_screen.active = !1),
                          (this.freespin_skeleton.node.active = !0),
                          this.freespin_skeleton.setAnimation(
                            0,
                            "animation",
                            !0
                          ),
                          f(this.freespin_skeleton.node)
                            .sequence(
                              f().delay(t),
                              f().call(function () {
                                (o.black_screen.active = !1),
                                  (o.freespin_skeleton.node.active = !1);
                              })
                            )
                            .start();
                        break;
                      case H.JACKPOT:
                        _.getInstance().playBgm(this.nohu_audio),
                          this.bigCityNoHuView.show(n);
                        break;
                      case H.BONUS:
                        _.getInstance().playBgm(this.bonus_audio),
                          this.bigCityBonusView.show(n, i);
                    }
                  }),
                  (a.hideEffect = function (e) {
                    switch (e) {
                      case H.BIGWIN:
                        (this.black_screen.active = !1),
                          (this.bigwin_skeleton.node.active = !1);
                        break;
                      case H.FREE:
                        (this.black_screen.active = !1),
                          (this.freespin_skeleton.node.active = !1);
                        break;
                      case H.JACKPOT:
                        this.bigCityNoHuView.hide();
                        break;
                      case H.BONUS:
                        this.bigCityBonusView.hide();
                    }
                  }),
                  (a.hideAll = function () {
                    this.hideEffect(H.BIGWIN),
                      this.hideEffect(H.FREE),
                      this.hideEffect(H.JACKPOT),
                      this.hideEffect(H.BONUS);
                  }),
                  (a.activeClick = function (e) {
                    switch (e) {
                      case H.BIGWIN:
                      case H.FREE:
                        break;
                      case H.JACKPOT:
                        this.bigCityNoHuView.activeClick();
                    }
                  }),
                  i
                );
              })(b)).prototype,
              "black_screen",
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
            (F = i(N.prototype, "freespin_skeleton", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = i(N.prototype, "bigwin_skeleton", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = i(N.prototype, "bigCityNoHuView", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = i(N.prototype, "bigCityBonusView", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = i(N.prototype, "bigwin_audio", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = i(N.prototype, "freespin_audio", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = i(N.prototype, "nohu_audio", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = i(N.prototype, "bonus_audio", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = N))
          ) || v)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MIB_SlotMachineCmp.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MIB_SlotMachineColumn.ts",
    "./LineCmp.ts",
  ],
  function (n) {
    "use strict";
    var e, t, i, o, l, r, c, a, s, u, p, f, h, d, m, g, C, y, v;
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
            (c = n.Node),
            (a = n.Button),
            (s = n.Tween),
            (u = n.tween),
            (p = n.UITransform),
            (f = n.Vec3),
            (h = n.Vec2),
            (d = n.Color),
            (m = n.Toggle),
            (g = n.Component);
        },
        function (n) {
          (C = n.default), (y = n.SlotMachineState);
        },
        function (n) {
          v = n.default;
        },
      ],
      execute: function () {
        var E, S, _, I, w, L, T, M, N, F;
        l._RF.push({}, "228f5bvox5Cn6EHEc/VDGD1", "MIB_SlotMachineCmp", void 0);
        var B = r.ccclass,
          b = r.property;
        n(
          "default",
          ((E = B("MIB_SlotMachineCmp")),
          (S = b([C])),
          (_ = b(v)),
          (I = b([c])),
          E(
            (((F = (function (n) {
              function e() {
                for (
                  var e, t = arguments.length, l = new Array(t), r = 0;
                  r < t;
                  r++
                )
                  l[r] = arguments[r];
                return (
                  (e = n.call.apply(n, [this].concat(l)) || this),
                  i(e, "colums", T, o(e)),
                  i(e, "lineCmp", M, o(e)),
                  i(e, "line_nodes", N, o(e)),
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
                      return n.getComponent(a);
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
                          t.getstate() == y.SPINNING && o.stop(l);
                        })
                      )
                      .start();
                  });
                }),
                (l.stopImmediately = function (n) {
                  var e = [0.1, 0.1, 0.1, 0.1, 0.1];
                  this.colums.forEach(function (t, i) {
                    if (t.getstate() == y.SPINNING) {
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
                      return n.getstate() == y.STOPPED;
                    }).length >= this.colums.length
                  );
                }),
                (l.isSpinning = function () {
                  return (
                    this.colums.filter(function (n) {
                      return n.getstate() == y.SPINNING;
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
                  if (n < 10) {
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
                (l.updateLines = function (n) {
                  this.line_nodes.forEach(function (e, t) {
                    n.indexOf(t) >= 0
                      ? (e.getComponent(m).isChecked = !0)
                      : (e.getComponent(m).isChecked = !1);
                  });
                }),
                e
              );
            })(g)).SPIN_SPEED = 2e3),
            (F.TIME_TO_SHOW_RESULT = 0.5),
            (F.FIXED_DELTA_TIME = 0.016666000000004715),
            (F.LINE = [
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
            (T = e((L = F).prototype, "colums", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (M = e(L.prototype, "lineCmp", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(L.prototype, "line_nodes", [I], {
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
  "chunks:///_virtual/MIB_SlotMachineColumn.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MIBFullScreenGameView.ts",
    "./MIB_SlotMachineCmp.ts",
    "./MIB_SlotMachineItemView.ts",
  ],
  function (t) {
    "use strict";
    var i, o, n, e, s, a, r, c, p, h, m, u, l, _, f, y;
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
            (c = t.Layout),
            (p = t.Sprite),
            (h = t.UITransform),
            (m = t.Vec3),
            (u = t.tween),
            (l = t.Component);
        },
        function (t) {
          _ = t.MIBFullScreenGameView;
        },
        function (t) {
          f = t.default;
        },
        function (t) {
          y = t.default;
        },
      ],
      execute: function () {
        var g, S, I, d, E, C, P, b, T;
        t("SlotMachineState", void 0),
          s._RF.push(
            {},
            "eee5e6GplVKmrMOx5rybjWI",
            "MIB_SlotMachineColumn",
            void 0
          );
        var v,
          N = a.ccclass,
          M = a.property;
        !(function (t) {
          (t[(t.SPINNING = 0)] = "SPINNING"),
            (t[(t.CHECK_TO_STOP = 1)] = "CHECK_TO_STOP"),
            (t[(t.STOPPING = 2)] = "STOPPING"),
            (t[(t.STOPPED = 3)] = "STOPPED");
        })(v || (v = t("SlotMachineState", {})));
        t(
          "default",
          ((g = N("MIB_SlotMachineColumn")),
          (S = M([r])),
          (I = M(r)),
          (d = M(c)),
          g(
            ((P = i(
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
                    n(i, "items", P, e(i)),
                    n(i, "lineNode", b, e(i)),
                    n(i, "layout", T, e(i)),
                    (i.state = v.STOPPED),
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
                o(i, t);
                var s = i.prototype;
                return (
                  (s.getLineWorldPosition = function () {
                    return this.lineNode
                      .getComponentsInChildren(p)
                      .map(function (t) {
                        return t.node.parent
                          .getComponent(h)
                          .convertToWorldSpaceAR(new m(t.node.position));
                      });
                  }),
                  (s.onLoad = function () {
                    (this.item_position_y_bottom = this.items[0].position.y),
                      (this.bouncing_offset =
                        this.items[0].getComponent(h).contentSize.height / 20),
                      (this.item_position_y_stop =
                        this.item_position_y_bottom - this.bouncing_offset),
                      (this.item_position_y_top =
                        this.items[this.items.length - 1].position.y),
                      (this.item_position_y_limited =
                        this.item_position_y_bottom -
                        (this.items[0].getComponent(h).contentSize.height +
                          this.layout.spacingY)),
                      (this.distance =
                        3 *
                        (this.layout.spacingY +
                          this.items[0].getComponent(h).contentSize.height));
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
                      o = !1;
                    this.items.forEach(function (t) {
                      var n = new m(t.position);
                      (n.y -= f.SPIN_SPEED * f.FIXED_DELTA_TIME),
                        n.y <= i.item_position_y_limited &&
                          ((n.y = i.item_position_y_top), (o = !0)),
                        (t.position = n);
                    }),
                      o && this.sort();
                  }),
                  (s.sort = function () {
                    this.items = this.items.sort(function (t, i) {
                      return t.position.y < i.position.y ? -1 : 1;
                    });
                  }),
                  (s.checkToStop = function (t) {
                    var i = this;
                    this.items.forEach(function (t) {
                      var o = new m(t.position);
                      (o.y -= f.SPIN_SPEED * f.FIXED_DELTA_TIME),
                        o.y <= i.item_position_y_limited &&
                          (o.y = i.item_position_y_top),
                        (t.position = o);
                    }),
                      this.item_top.position.y <= this.item_position_y_stop &&
                        (this.bounce(), (this.state = v.STOPPING));
                  }),
                  (s.bounce = function () {
                    var t = this;
                    this.sort();
                    var i = new m(this.item_top.position);
                    (i.y = this.item_position_y_stop),
                      this.item_top.setPosition(i),
                      this.items.forEach(function (i, o) {
                        if (i.name != t.item_top.name) {
                          var n = new m(i.position);
                          (n.y =
                            0 == o
                              ? t.items[o + 1].position.y -
                                (t.layout.spacingY +
                                  t.items[o + 1].getComponent(h).contentSize
                                    .height)
                              : t.items[o - 1].position.y +
                                t.layout.spacingY +
                                t.items[o - 1].getComponent(h).contentSize
                                  .height),
                            (i.position = n);
                        }
                      });
                    var o =
                      Math.abs(this.item_position_y_stop) -
                      Math.abs(this.item_position_y_bottom);
                    this.items.forEach(function (i) {
                      u(i)
                        .sequence(
                          u().by(0.1, { position: new m(0, o, 0) }),
                          u().call(function () {
                            _.getInstance().playColumnStopEnd(),
                              (t.state = v.STOPPED),
                              _.getInstance().isFastSpin()
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
                          u()
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
              })(l)).prototype,
              "items",
              [S],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (b = i(C.prototype, "lineNode", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = i(C.prototype, "layout", [d], {
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
  "chunks:///_virtual/MIB_SlotMachineItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MIBFullScreenGameView.ts",
    "./GameUtils.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, r, s, o, a, m, l, c, u, d;
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
            (a = e.Sprite),
            (m = e.sp),
            (l = e.Color),
            (c = e.Component);
        },
        function (e) {
          u = e.MIBFullScreenGameView;
        },
        function (e) {
          d = e.default;
        },
      ],
      execute: function () {
        var h, _, p, f, g, b, I;
        s._RF.push(
          {},
          "d8b42TdKfhDwIkPgEFrSx2r",
          "MIB_SlotMachineItemView",
          void 0
        );
        var y = o.ccclass,
          v = o.property,
          B = e(
            "MIBItem",
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
                  return (
                    void 0 === e && (e = !1),
                    "angrybirds_symbol_" +
                      u.getInstance().getBetType() +
                      "_" +
                      this.code.toString() +
                      (e ? ".png" : "")
                  );
                }),
                (t.getResourceBetHistoryNormalName = function (e, t) {
                  return (
                    void 0 === t && (t = !1),
                    "angrybirds_symbol_" +
                      e +
                      "_" +
                      this.code.toString() +
                      (t ? ".png" : "")
                  );
                }),
                (t.getResourceBlurName = function (e) {
                  return (
                    void 0 === e && (e = !1),
                    "angrybirds_symbol_blur_" +
                      u.getInstance().getBetType() +
                      "_" +
                      this.code.toString() +
                      (e ? ".png" : "")
                  );
                }),
                (t.getResourceAnimName = function (e) {
                  void 0 === e && (e = !1);
                  var t = u.getInstance().getBetType();
                  return (
                    (0 != this.code &&
                      1 != this.code &&
                      5 != this.code &&
                      6 != this.code) ||
                      (t = 1),
                    "angrybirds_symbol_" +
                      t +
                      "_" +
                      this.code.toString() +
                      (e ? ".json" : "")
                  );
                }),
                e
              );
            })()
          );
        e(
          "default",
          ((h = y("MIB_SlotMachineItemView")),
          (_ = v(a)),
          (p = v(m.Skeleton)),
          h(
            ((b = t(
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
                    n(t, "spr_item", b, r(t)),
                    n(t, "anim_item", I, r(t)),
                    (t.item = null),
                    t
                  );
                }
                i(t, e);
                var s = t.prototype;
                return (
                  (s.init = function () {
                    (this.item = new B()),
                      this.item.decodeItem(d.getRandomInt(0, 7)),
                      this.bright();
                  }),
                  (s.setItem = function (e) {
                    null != e && (this.item = e);
                  }),
                  (s.gray = function () {
                    this.disable(!1),
                      (this.spr_item.enabled = !0),
                      (this.anim_item.enabled = !1);
                    var e = this.item.getResourceNormalName();
                    (this.spr_item.spriteFrame = u
                      .getInstance()
                      .loaded_item_normal.filter(function (t) {
                        return t.name.indexOf(e) >= 0;
                      })[0]),
                      (this.spr_item.color = new l(150, 150, 150, 255));
                  }),
                  (s.disable = function (e) {
                    void 0 === e && (e = !0), (this.node.active = !e);
                  }),
                  (s.blur = function () {
                    this.disable(!1),
                      (this.spr_item.enabled = !0),
                      (this.anim_item.enabled = !1);
                    var e = this.item.getResourceBlurName();
                    (this.spr_item.spriteFrame = u
                      .getInstance()
                      .loaded_item_blur.filter(function (t) {
                        return t.name.indexOf(e) >= 0;
                      })[0]),
                      (this.spr_item.color = l.WHITE);
                  }),
                  (s.bright = function () {
                    this.disable(!1),
                      (this.spr_item.enabled = !0),
                      null != this.anim_item && (this.anim_item.enabled = !1);
                    var e = this.item.getResourceNormalName();
                    (this.spr_item.spriteFrame = u
                      .getInstance()
                      .loaded_item_normal.filter(function (t) {
                        return t.name.indexOf(e) >= 0;
                      })[0]),
                      (this.spr_item.color = l.WHITE);
                  }),
                  (s.bright2 = function (e) {
                    this.disable(!1),
                      (this.spr_item.enabled = !0),
                      null != this.anim_item && (this.anim_item.enabled = !1);
                    var t = this.item.getResourceBetHistoryNormalName(e);
                    (this.spr_item.spriteFrame = u
                      .getInstance()
                      .loaded_item_normal.filter(function (e) {
                        return e.name.indexOf(t) >= 0;
                      })[0]),
                      (this.spr_item.color = l.WHITE);
                  }),
                  (s.playFx = function () {
                    if (null != this.anim_item) {
                      this.disable(!1),
                        (this.anim_item.enabled = !0),
                        (this.spr_item.enabled = !1);
                      var e = this.item.getResourceAnimName();
                      (this.anim_item.skeletonData = u
                        .getInstance()
                        .loaded_anim_item.filter(function (t) {
                          return t.name.indexOf(e) >= 0;
                        })[0]),
                        this.anim_item.setAnimation(0, "symbolFx", !1),
                        this.anim_item.addAnimation(0, "idle", !0);
                    }
                  }),
                  (s.setSpriteFrame = function (e) {
                    this.spr_item.spriteFrame = e;
                  }),
                  (s.getItem = function () {
                    return this.item;
                  }),
                  t
                );
              })(c)).prototype,
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
            (I = t(g.prototype, "anim_item", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (f = g))
          ) || f)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MIBBetHistoryDetail.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MIB_SlotMachineCmp.ts",
    "./MIB_SlotMachineItemView.ts",
    "./LineCmp.ts",
  ],
  function (e) {
    "use strict";
    var t, n, i, r, o, a, l, c, s, u, p, f, h, m, d, w, b, I, v;
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
            (a = e._decorator),
            (l = e.Label),
            (c = e.Button),
            (s = e.Tween),
            (u = e.tween),
            (p = e.Vec3),
            (f = e.UITransform),
            (h = e.Vec2),
            (m = e.Color),
            (d = e.Component);
        },
        function (e) {
          w = e.default;
        },
        function (e) {
          (b = e.default), (I = e.MIBItem);
        },
        function (e) {
          v = e.default;
        },
      ],
      execute: function () {
        var B, y, M, _, g, C, L, S, V, k, z;
        o._RF.push(
          {},
          "44814nzNsRLir/JYmRfl7sx",
          "MIBBetHistoryDetail",
          void 0
        );
        var E = a.ccclass,
          D = a.property;
        e(
          "default",
          ((B = E("MIBBetHistoryDetail")),
          (y = D(l)),
          (M = D(c)),
          (_ = D(v)),
          (g = D([b])),
          B(
            ((S = t(
              (L = (function (e) {
                function t() {
                  for (
                    var t, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(o)) || this),
                    i(t, "lbl_phien", S, r(t)),
                    i(t, "btn_prev", V, r(t)),
                    i(t, "lineCmp", k, r(t)),
                    i(t, "MIB_SlotMachineItemView", z, r(t)),
                    (t.onBack = null),
                    t
                  );
                }
                n(t, e);
                var o = t.prototype;
                return (
                  (o.onLoad = function () {
                    var e = this;
                    this.btn_prev.node.on("click", function () {
                      return e.onBack && e.onBack();
                    });
                  }),
                  (o.show = function (e, t, n, i) {
                    var r = this;
                    (this.lbl_phien.string = "#" + e.toString()),
                      t
                        .map(function (e) {
                          var t = new I();
                          return t.decodeItem(e), t;
                        })
                        .forEach(function (e, t) {
                          var n = 1;
                          switch (i) {
                            case 100:
                              n = 1;
                              break;
                            case 1e3:
                              n = 2;
                              break;
                            case 1e4:
                              n = 3;
                          }
                          r.MIB_SlotMachineItemView[t].setItem(e),
                            r.MIB_SlotMachineItemView[t].bright2(n);
                        }),
                      (this.node.active = !0),
                      this.showEachLines(n, 2.5);
                  }),
                  (o.showEachLines = function (e, t) {
                    var n = this;
                    void 0 === t && (t = 0),
                      this.lineCmp.clear(),
                      s.stopAllByTarget(this.lineCmp.node);
                    var i = 0;
                    e.forEach(function (e) {
                      u(n.lineCmp.node)
                        .sequence(
                          u().delay(i),
                          u().call(function () {
                            n.drawLine(e, !0);
                          })
                        )
                        .start(),
                        (i += t);
                    });
                  }),
                  (o.drawLine = function (e, t) {
                    var n = this,
                      i = w.LINE[e].map(function (e, t) {
                        var i = n.MIB_SlotMachineItemView[t + 5 * e];
                        return (
                          s.stopAllByTarget(i.node),
                          i.node.setScale(p.ONE),
                          u(i.node)
                            .sequence(
                              u().to(1, { scale: new p(1.1, 1.1, 1.1) }),
                              u().to(1, { scale: p.ONE })
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
                      new m("#00FFFF"),
                      this.node.parent.parent,
                      t
                    );
                  }),
                  t
                );
              })(d)).prototype,
              "lbl_phien",
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
            (V = t(L.prototype, "btn_prev", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = t(L.prototype, "lineCmp", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = t(L.prototype, "MIB_SlotMachineItemView", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (C = L))
          ) || C)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MIBBetHistoryItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var i, e, n, o, r, c, u, l, a, _;
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
            (u = t.Label),
            (l = t.Button),
            (a = t.Component);
        },
        function (t) {
          _ = t.StringUtils;
        },
      ],
      execute: function () {
        var h, s, p, g, x, b, d, f, v, m, y, w, z, S, B, I, H, M, D;
        r._RF.push(
          {},
          "c4263dieyNKKpuMH5KUad1S",
          "MIBBetHistoryItemView",
          void 0
        );
        var K = c.ccclass,
          L = c.property;
        t(
          "default",
          ((h = K("MIBBetHistoryItemView")),
          (s = L(u)),
          (p = L(u)),
          (g = L(u)),
          (x = L(u)),
          (b = L(u)),
          (d = L(u)),
          (f = L(l)),
          (v = L(u)),
          h(
            ((w = i(
              (y = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, r = new Array(e), c = 0;
                    c < e;
                    c++
                  )
                    r[c] = arguments[c];
                  return (
                    (i = t.call.apply(t, [this].concat(r)) || this),
                    n(i, "txt_phien_title", w, o(i)),
                    n(i, "txt_phien_time", z, o(i)),
                    n(i, "txt_phien_datcuoc", S, o(i)),
                    n(i, "txt_phien_solinecuoc", B, o(i)),
                    n(i, "txt_phien_tongcuoc", I, o(i)),
                    n(i, "txt_phien_solinetrung", H, o(i)),
                    n(i, "btn_chitiet", M, o(i)),
                    n(i, "txt_phien_tienthang", D, o(i)),
                    i
                  );
                }
                e(i, t);
                var r = i.prototype;
                return (
                  (r.show = function (t, i, e, n, o, r, c, u, l, a) {
                    (this.txt_phien_title.string = "#" + t.toString()),
                      (this.txt_phien_time.string = i.toString()),
                      (this.txt_phien_datcuoc.string = _.formatNumber(e)),
                      (this.txt_phien_solinecuoc.string = n.toString()),
                      (this.txt_phien_tongcuoc.string = o.toString()),
                      (this.txt_phien_solinetrung.string = r.toString()),
                      (this.txt_phien_tienthang.string = _.formatNumber(c)),
                      this.btn_chitiet.node.on("click", function () {
                        a && a(t, u, l, e);
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
            (z = i(y.prototype, "txt_phien_time", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = i(y.prototype, "txt_phien_datcuoc", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = i(y.prototype, "txt_phien_solinecuoc", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = i(y.prototype, "txt_phien_tongcuoc", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = i(y.prototype, "txt_phien_solinetrung", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = i(y.prototype, "btn_chitiet", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = i(y.prototype, "txt_phien_tienthang", [v], {
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
  "chunks:///_virtual/MIBBetHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MIBBetHistoryDetail.ts",
    "./MIBBetHistoryItemView.ts",
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
        var B, v, _, w, H, D, L, P, I, T, M, S, C, N, z;
        r._RF.push({}, "ba41eRT+QpJF6B4p6zpEiJb", "MIBBetHistoryView", void 0);
        var k = a.ccclass,
          x = a.property,
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
          ((B = k("MIBBetHistoryView")),
          (v = x(s)),
          (_ = x(s)),
          (w = x(l)),
          (H = x(u)),
          (D = x(u)),
          (L = x([u])),
          B(
            ((T = e(
              (I = (function (t) {
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
                    n(e, "btn_next", M, o(e)),
                    n(e, "lbl_page", S, o(e)),
                    n(e, "diabloBetHistoryDetailNode", C, o(e)),
                    n(e, "diabloBetingNode", N, o(e)),
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
                          d.MIB.toString()
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
                              l = new R();
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
                              function (t, i, n, o) {
                                e.showDetail(t, i, n, o);
                              }
                            ))
                          : ((t.node.getComponent(c).opacity = 1), t.hide());
                      }),
                      this.backToBetting(),
                      t && this.show();
                  }),
                  (r.showDetail = function (t, e, i, n) {
                    (this.diabloBetingNode.active = !1),
                      this.diabloBetHistoryDetail.show(t, e, i, n);
                  }),
                  (r.backToBetting = function () {
                    (this.diabloBetingNode.active = !0),
                      (this.diabloBetHistoryDetailNode.active = !1);
                  }),
                  e
                );
              })(b)).prototype,
              "btn_prev",
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
            (M = e(I.prototype, "btn_next", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = e(I.prototype, "lbl_page", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = e(I.prototype, "diabloBetHistoryDetailNode", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(I.prototype, "diabloBetingNode", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(I.prototype, "item_nodes", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (P = I))
          ) || P)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MIBBonusItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var e, n, i, o, l, s, r, a, u, c, m, p, h, _, b;
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
            (s = t._decorator),
            (r = t.sp),
            (a = t.Button),
            (u = t.Label),
            (c = t.Tween),
            (m = t.Color),
            (p = t.tween),
            (h = t.Vec3),
            (_ = t.Component);
        },
        function (t) {
          b = t.StringUtils;
        },
      ],
      execute: function () {
        var f, d, y, k, g, v, w, B, I;
        l._RF.push({}, "e54259aRKdGvYyW/BgDfxqr", "MIBBonusItemView", void 0);
        var A = s.ccclass,
          S = s.property;
        t(
          "MIBBonusItemView",
          ((f = A("MIBBonusItemView")),
          (d = S(r.Skeleton)),
          (y = S(a)),
          (k = S(u)),
          f(
            ((w = e(
              (v = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, l = new Array(n), s = 0;
                    s < n;
                    s++
                  )
                    l[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(l)) || this),
                    i(e, "item_skeleton", w, o(e)),
                    i(e, "button", B, o(e)),
                    i(e, "lbl_amount", I, o(e)),
                    e
                  );
                }
                n(e, t);
                var l = e.prototype;
                return (
                  (l.getButton = function () {
                    return this.button;
                  }),
                  (l.show = function () {
                    var t = this;
                    (this.button.interactable = !0),
                      c.stopAllByTarget(this.item_skeleton.node),
                      (this.lbl_amount.node.active = !1),
                      (this.item_skeleton.color = new m(255, 255, 255, 0)),
                      (this.node.active = !0),
                      this.item_skeleton.setAnimation(0, "idle", !0),
                      p(this.item_skeleton.node)
                        .delay(0.05)
                        .call(function () {
                          t.item_skeleton.color = m.WHITE;
                        })
                        .start();
                  }),
                  (l.setTimeScale = function (t) {
                    this.item_skeleton.timeScale = t;
                  }),
                  (l.open = function (t, e) {
                    var n = this;
                    if (
                      ((this.button.interactable = !1),
                      this.item_skeleton.setAnimation(0, "open_" + e, !1),
                      this.item_skeleton.setCompleteListener(function (t) {
                        null != t &&
                          (t.animation ? t.animation.name : "") ==
                            "open_" + e &&
                          n.item_skeleton.setAnimation(0, "idle_" + e, !0);
                      }),
                      t > 0)
                    ) {
                      (this.lbl_amount.node.active = !0),
                        c.stopAllByTarget(this.lbl_amount.node);
                      var i = new h(this.node.getPosition());
                      (i.y -= 15),
                        this.lbl_amount.node.setPosition(i),
                        (this.lbl_amount.string = b.formatNumber(t)),
                        p(this.lbl_amount.node)
                          .by(0.25, { position: new h(0, -35, 0) })
                          .start();
                    }
                  }),
                  (l.open2 = function (t) {
                    var e = this;
                    (this.button.interactable = !1),
                      this.item_skeleton.setAnimation(0, "open_" + t, !1),
                      this.item_skeleton.setCompleteListener(function (n) {
                        null != n &&
                          (n.animation ? n.animation.name : "") ==
                            "open_" + t &&
                          e.item_skeleton.setAnimation(0, "idle_" + t, !0);
                      });
                  }),
                  e
                );
              })(_)).prototype,
              "item_skeleton",
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
            (B = e(v.prototype, "button", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(v.prototype, "lbl_amount", [k], {
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
  "chunks:///_virtual/MIBBonusItemView2.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var e, n, i, o, l, r, s, a, u, c, m, p, b, _, f;
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
            (r = t._decorator),
            (s = t.sp),
            (a = t.Button),
            (u = t.UIOpacity),
            (c = t.Label),
            (m = t.Tween),
            (p = t.Vec3),
            (b = t.tween),
            (_ = t.Component);
        },
        function (t) {
          f = t.StringUtils;
        },
      ],
      execute: function () {
        var h, d, y, g, k, v, w, B, I, A, S;
        l._RF.push({}, "1431d7FNS9GnZb8uPe29CbW", "MIBBonusItemView2", void 0);
        var x = r.ccclass,
          z = r.property;
        t(
          "MIBBonusItemView2",
          ((h = x("MIBBonusItemView2")),
          (d = z(s.Skeleton)),
          (y = z(a)),
          (g = z(u)),
          (k = z(c)),
          h(
            ((B = e(
              (w = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, l = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    l[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(l)) || this),
                    i(e, "item_skeleton", B, o(e)),
                    i(e, "button", I, o(e)),
                    i(e, "resultOpacity", A, o(e)),
                    i(e, "lbl_amount", S, o(e)),
                    (e.index = 0),
                    e
                  );
                }
                n(e, t);
                var l = e.prototype;
                return (
                  (l.getButton = function () {
                    return this.button;
                  }),
                  (l.setTimeScale = function (t) {
                    this.item_skeleton.timeScale = t;
                  }),
                  (l.show = function (t) {
                    (this.index = t),
                      (this.button.interactable = !0),
                      m.stopAllByTarget(this.item_skeleton.node),
                      (this.lbl_amount.node.active = !1),
                      (this.node.active = !0),
                      this.item_skeleton.setAnimation(0, "chest_idle_0", !0);
                  }),
                  (l.open = function (t, e) {
                    var n = this;
                    void 0 === e && (e = !1),
                      (this.button.interactable = !1),
                      this.item_skeleton.setAnimation(0, "chest_open", !1),
                      this.item_skeleton.setCompleteListener(function (i) {
                        if (
                          null != i &&
                          "chest_open" == (i.animation ? i.animation.name : "")
                        ) {
                          n.item_skeleton.setAnimation(0, "chest_idle_1", !0),
                            (n.lbl_amount.node.active = !0),
                            m.stopAllByTarget(n.lbl_amount.node);
                          var o = new p(n.node.getPosition());
                          (o.y += 15),
                            n.lbl_amount.node.setPosition(o),
                            (n.lbl_amount.string = f.formatNumber(t)),
                            (n.resultOpacity.opacity = e ? 150 : 255),
                            b(n.lbl_amount.node)
                              .by(0.25, { position: new p(0, -70, 0) })
                              .start(),
                            n.item_skeleton.setCompleteListener(function () {});
                        }
                      });
                  }),
                  (l.transform = function () {
                    var t = this;
                    (this.button.interactable = !1),
                      this.item_skeleton.setAnimation(
                        0,
                        "transform_" + (this.index + 1),
                        !1
                      ),
                      this.item_skeleton.setCompleteListener(function (e) {
                        null != e &&
                          (e.animation ? e.animation.name : "") ==
                            "transform_" + (t.index + 1) &&
                          t.item_skeleton.setAnimation(
                            0,
                            "alien_" + (t.index + 1),
                            !0
                          );
                      });
                  }),
                  e
                );
              })(_)).prototype,
              "item_skeleton",
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
            (I = e(w.prototype, "button", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = e(w.prototype, "resultOpacity", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = e(w.prototype, "lbl_amount", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = w))
          ) || v)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MIBBonusView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MIBBonusItemView.ts",
    "./MIBBonusItemView2.ts",
    "./MIBFullScreenGameView.ts",
    "./MIBSummaryView.ts",
    "./GameUtils.ts",
    "./StringUtils.ts",
    "./SoundManager.ts",
  ],
  function (t) {
    "use strict";
    var n, e, i, o, a, r, l, u, s, m, c, g, _, h, f, b, p, d, w, y, I, v;
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
            (l = t.Button),
            (u = t.Node),
            (s = t.sp),
            (m = t.Sprite),
            (c = t.Label),
            (g = t.AudioClip),
            (_ = t.Tween),
            (h = t.tween),
            (f = t.Component);
        },
        function (t) {
          b = t.MIBBonusItemView;
        },
        function (t) {
          p = t.MIBBonusItemView2;
        },
        function (t) {
          d = t.MIBFullScreenGameView;
        },
        function (t) {
          w = t.MIBSummaryView;
        },
        function (t) {
          y = t.default;
        },
        function (t) {
          I = t.StringUtils;
        },
        function (t) {
          v = t.SoundManager;
        },
      ],
      execute: function () {
        var B,
          C,
          M,
          S,
          N,
          G,
          A,
          V,
          z,
          D,
          T,
          k,
          x,
          R,
          E,
          W,
          L,
          F,
          H,
          U,
          q,
          K,
          P,
          j,
          Q,
          Y,
          Z,
          J,
          O,
          X,
          $,
          tt,
          nt,
          et,
          it,
          ot,
          at,
          rt,
          lt,
          ut,
          st;
        a._RF.push({}, "20ec0ZYtKtHbK9Iltn6u4QI", "MIBBonusView", void 0);
        var mt = r.ccclass,
          ct = r.property,
          gt = function () {
            (this.id = ""), (this.rate = 1);
          };
        t(
          "MIBBonusView",
          ((B = mt("MIBBonusView")),
          (C = ct(l)),
          (M = ct(u)),
          (S = ct(s.Skeleton)),
          (N = ct(m)),
          (G = ct(w)),
          (A = ct(c)),
          (V = ct(c)),
          (z = ct(u)),
          (D = ct(c)),
          (T = ct(c)),
          (k = ct(c)),
          (x = ct(u)),
          (R = ct(u)),
          (E = ct([b])),
          (W = ct([p])),
          (L = ct(g)),
          (F = ct(g)),
          (H = ct(g)),
          (U = ct(g)),
          B(
            ((P = n(
              (K = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, a = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (n = t.call.apply(t, [this].concat(a)) || this),
                    i(n, "outside_button_minigames_2", P, o(n)),
                    i(n, "root", j, o(n)),
                    i(n, "background_skeleton", Q, o(n)),
                    i(n, "spr_bg", Y, o(n)),
                    i(n, "bigCitySummaryView", Z, o(n)),
                    i(n, "lbl_totalwin", J, o(n)),
                    i(n, "lbl_remain_time", O, o(n)),
                    i(n, "countDownNode", X, o(n)),
                    i(n, "lbl_countdown", $, o(n)),
                    i(n, "lbl_rate", tt, o(n)),
                    i(n, "lbl_amount", nt, o(n)),
                    i(n, "minigame1_node", et, o(n)),
                    i(n, "minigame2_node", it, o(n)),
                    i(n, "btn_items_mini_game1", ot, o(n)),
                    i(n, "btn_items_mini_game2", at, o(n)),
                    i(n, "start_mini_game_sfx", rt, o(n)),
                    i(n, "touch_mini_game_key_sfx", lt, o(n)),
                    i(n, "touch_mini_game_item_sfx", ut, o(n)),
                    i(n, "touch_mini_game_human_sfx", st, o(n)),
                    (n.multiRate = 0),
                    (n.wonMNGItems = []),
                    (n.totalMiniGameWonMoney = void 0),
                    (n.openedCount = 0),
                    (n.timeCountDown = 0),
                    (n.timeScale = 1),
                    n
                  );
                }
                e(n, t);
                var a = n.prototype;
                return (
                  (a.onLoad = function () {
                    var t = this;
                    this.btn_items_mini_game1.forEach(function (n, e) {
                      var i = e;
                      n.getButton().node.on("click", function () {
                        t.open(i);
                      });
                    }),
                      this.btn_items_mini_game2.forEach(function (n, e) {
                        var i = e;
                        n.getButton().node.on("click", function () {
                          t.open2(i);
                        });
                      }),
                      this.outside_button_minigames_2.node.on(
                        "click",
                        function () {
                          _.stopAllByTarget(t.minigame2_node),
                            (t.minigame2_node.active = !1),
                            (t.minigame1_node.active = !0),
                            t.countDownAfter(2.5);
                        }
                      );
                  }),
                  (a.show = function (t, n) {
                    var e = this;
                    v.getInstance().playSfx(this.start_mini_game_sfx),
                      (this.spr_bg.node.active = !1),
                      (this.countDownNode.active = !1),
                      (this.timeCountDown = 2 == n ? 3 : 10),
                      (this.wonMNGItems = []),
                      (this.multiRate = 0),
                      (this.totalMiniGameWonMoney = 0),
                      (this.openedCount = 0),
                      (this.timeScale = n),
                      (this.multiRate = t.rate);
                    for (var i = t.items, o = t.stg, a = 0; a < i.length; a++) {
                      for (var r = i[a], l = 0, u = 0; u < o.length; u++) {
                        var s = o[u],
                          m = s.id,
                          c = s.b2;
                        if (m == r) {
                          l = c;
                          break;
                        }
                      }
                      var g = new gt();
                      (g.id = r), (g.rate = l), this.wonMNGItems.push(g);
                    }
                    (this.totalMiniGameWonMoney = t.m),
                      (this.minigame1_node.active = !1),
                      (this.minigame2_node.active = !1),
                      (this.root.active = !0),
                      _.stopAllByTarget(this.node);
                    for (var f = 0; f < this.wonMNGItems.length; f++)
                      this.wonMNGItems[f].rate, d.getInstance().getTotalBet();
                    (this.lbl_amount.string = I.formatNumber(
                      this.totalMiniGameWonMoney
                    )),
                      (this.lbl_rate.string = this.multiRate + "x"),
                      (this.background_skeleton.timeScale = n),
                      this.background_skeleton.setAnimation(0, "animation", !1),
                      this.background_skeleton.setCompleteListener(function (
                        t
                      ) {
                        null != t &&
                          "animation" ==
                            (t.animation ? t.animation.name : "") &&
                          (e.countDownAfter(3),
                          (e.minigame1_node.active = !0),
                          e.btn_items_mini_game1
                            .map(function (t) {
                              return t.getComponent(b);
                            })
                            .forEach(function (t, e) {
                              t.getComponent(b).show(),
                                t.getComponent(b).setTimeScale(n);
                            }),
                          e.btn_items_mini_game2
                            .map(function (t) {
                              return t.getComponent(p);
                            })
                            .forEach(function (t, e) {
                              t.getComponent(p).setTimeScale(n);
                            }),
                          (e.lbl_remain_time.string = (
                            e.wonMNGItems.length - e.openedCount
                          ).toString()),
                          (e.lbl_totalwin.string = "0"),
                          (e.spr_bg.node.active = !0));
                      }),
                      h(this.node)
                        .delay(3)
                        .call(function () {
                          d.getInstance().hideMainImmediately(),
                            (e.spr_bg.node.active = !0);
                        })
                        .start();
                  }),
                  (a.open = function (t) {
                    var n = this;
                    if (!(this.openedCount >= this.wonMNGItems.length)) {
                      var e = +this.wonMNGItems[this.openedCount].id;
                      if ((e += 1) >= 2)
                        v.getInstance().playSfx(this.touch_mini_game_key_sfx),
                          (this.outside_button_minigames_2.node.active = !1),
                          this.btn_items_mini_game1[t].getComponent(b).open2(2),
                          h(this.node)
                            .delay(1)
                            .call(function () {
                              (n.minigame2_node.active = !0),
                                (n.minigame1_node.active = !1),
                                n.btn_items_mini_game2
                                  .map(function (t) {
                                    return t.getComponent(p);
                                  })
                                  .forEach(function (t, n) {
                                    t.getComponent(p).show(n);
                                  });
                            })
                            .delay(2)
                            .call(function () {
                              n.btn_items_mini_game1.forEach(function (t) {
                                t.getButton().interactable = !0;
                              });
                            })
                            .start(),
                          this.btn_items_mini_game1.forEach(function (t) {
                            t.getButton().interactable = !1;
                          });
                      else {
                        v.getInstance().playSfx(this.touch_mini_game_item_sfx);
                        for (var i = 0, o = 0; o <= this.openedCount; o++) {
                          i +=
                            this.wonMNGItems[o].rate *
                            d.getInstance().getBet() *
                            this.multiRate;
                        }
                        this.lbl_totalwin.string = I.formatNumber(i);
                        var a =
                          this.wonMNGItems[this.openedCount].rate *
                          d.getInstance().getBet() *
                          this.multiRate;
                        this.btn_items_mini_game1[t].getComponent(b).open(a, e),
                          this.openedCount++,
                          (this.lbl_remain_time.string = (
                            this.wonMNGItems.length - this.openedCount
                          ).toString()),
                          this.openedCount == this.wonMNGItems.length
                            ? this.showTotalWinAfter(1)
                            : this.countDownAfter(1.5);
                      }
                    }
                  }),
                  (a.open2 = function (t) {
                    var n = this;
                    if (!(this.openedCount >= this.wonMNGItems.length)) {
                      v.getInstance().playSfx(this.touch_mini_game_human_sfx),
                        this.stopCountdown(),
                        this.btn_items_mini_game2.forEach(function (t, n) {
                          t.getButton().interactable = !1;
                        });
                      for (var e = 0, i = 0; i <= this.openedCount; i++) {
                        e +=
                          this.wonMNGItems[i].rate *
                          d.getInstance().getBet() *
                          this.multiRate;
                      }
                      this.lbl_totalwin.string = I.formatNumber(e);
                      var o =
                        this.wonMNGItems[this.openedCount].rate *
                        d.getInstance().getBet() *
                        this.multiRate;
                      this.btn_items_mini_game2[t].getComponent(p).open(o),
                        this.openedCount++,
                        (this.lbl_remain_time.string = (
                          this.wonMNGItems.length - this.openedCount
                        ).toString()),
                        this.openedCount == this.wonMNGItems.length
                          ? this.showTotalWinAfter(1)
                          : (_.stopAllByTarget(this.minigame2_node),
                            h(this.minigame2_node)
                              .delay(0.5)
                              .call(function () {
                                n.btn_items_mini_game2.forEach(function (n, e) {
                                  if (e != t) {
                                    var i = o * y.getRandomInt(1, 3);
                                    n.open(i, !0);
                                  }
                                });
                              })
                              .delay(0.25)
                              .call(function () {
                                n.outside_button_minigames_2.node.active = !0;
                              })
                              .delay(2 == this.timeScale ? 1 : 3)
                              .call(function () {
                                (n.minigame2_node.active = !1),
                                  (n.minigame1_node.active = !0),
                                  n.countDownAfter(2.5);
                              })
                              .start());
                    }
                  }),
                  (a.stopCountdown = function () {
                    (this.countDownNode.active = !1),
                      _.stopAllByTarget(this.countDownNode),
                      _.stopAllByTarget(this.lbl_countdown.node);
                  }),
                  (a.countDownAfter = function (t) {
                    var n = this;
                    (this.countDownNode.active = !1),
                      _.stopAllByTarget(this.countDownNode),
                      _.stopAllByTarget(this.lbl_countdown.node),
                      h(this.countDownNode)
                        .sequence(
                          h().delay(t),
                          h().call(function () {
                            n.countDownNode.active = !0;
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
                    _.stopAllByTarget(this.countDownNode),
                      _.stopAllByTarget(this.lbl_countdown.node),
                      _.stopAllByTarget(this.bigCitySummaryView.node),
                      h(this.bigCitySummaryView.node)
                        .sequence(
                          h().delay(t),
                          h().call(function () {
                            (n.bigCitySummaryView.onHide = function () {
                              _.stopAllByTarget(n.bigCitySummaryView.node),
                                d.getInstance().finishedBonus(),
                                n.hide();
                            }),
                              n.bigCitySummaryView.setText(
                                "Bạn vừa trúng thưởng",
                                "từ lần lật bài vừa rồi!"
                              ),
                              n.bigCitySummaryView.show();
                          }),
                          h().delay(4),
                          h().call(function () {
                            n.bigCitySummaryView.hide();
                          })
                        )
                        .start();
                  }),
                  (a.hide = function () {
                    d.getInstance().showMainImmediately(),
                      (this.bigCitySummaryView.onHide = null),
                      (this.root.active = !1);
                  }),
                  n
                );
              })(f)).prototype,
              "outside_button_minigames_2",
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
            (j = n(K.prototype, "root", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Q = n(K.prototype, "background_skeleton", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = n(K.prototype, "spr_bg", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Z = n(K.prototype, "bigCitySummaryView", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = n(K.prototype, "lbl_totalwin", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = n(K.prototype, "lbl_remain_time", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (X = n(K.prototype, "countDownNode", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($ = n(K.prototype, "lbl_countdown", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (tt = n(K.prototype, "lbl_rate", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (nt = n(K.prototype, "lbl_amount", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (et = n(K.prototype, "minigame1_node", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (it = n(K.prototype, "minigame2_node", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ot = n(K.prototype, "btn_items_mini_game1", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (at = n(K.prototype, "btn_items_mini_game2", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (rt = n(K.prototype, "start_mini_game_sfx", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (lt = n(K.prototype, "touch_mini_game_key_sfx", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ut = n(K.prototype, "touch_mini_game_item_sfx", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (st = n(K.prototype, "touch_mini_game_human_sfx", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = K))
          ) || q)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MIBFullScreenGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MIBBetHistoryView.ts",
    "./MIBInfoView.ts",
    "./MIBJackpotHistoryView.ts",
    "./MIBLineSelectionView.ts",
    "./MIBSettingView.ts",
    "./MIB_EffectCmp.ts",
    "./MIB_SlotMachineCmp.ts",
    "./MIB_SlotMachineItemView.ts",
    "./SocketManager.ts",
    "./PersistManager.ts",
    "./Define.ts",
    "./SoundButtonCmp.ts",
    "./StringUtils.ts",
    "./SoundManager.ts",
    "./BaseSlotGameView.ts",
    "./MIBNetworkController.ts",
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
      S,
      k,
      v,
      C,
      I,
      M,
      j,
      B,
      E,
      z,
      T,
      A,
      F,
      L,
      x,
      J,
      N,
      V,
      D,
      O,
      R,
      P,
      q;
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
            (s = t.Label),
            (r = t.Button),
            (u = t.sp),
            (c = t.Toggle),
            (b = t.Node),
            (p = t.Sprite),
            (_ = t.SpriteFrame),
            (f = t.AudioClip),
            (h = t.UIOpacity),
            (m = t.VideoPlayer),
            (d = t.tween),
            (g = t.Tween),
            (y = t.assetManager),
            (w = t.Prefab),
            (S = t.sys),
            (k = t.view),
            (v = t.Vec3),
            (C = t.UITransform);
        },
        function (t) {
          I = t.default;
        },
        function (t) {
          M = t.MIBInfoView;
        },
        function (t) {
          j = t.default;
        },
        function (t) {
          B = t.MIBLineSelectionView;
        },
        function (t) {
          E = t.MIBSettingView;
        },
        function (t) {
          (z = t.MIB_EffectCmp), (T = t.EFFECT_TYPE);
        },
        function (t) {
          A = t.default;
        },
        function (t) {
          F = t.MIBItem;
        },
        function (t) {
          L = t.socketManager;
        },
        function (t) {
          x = t.PersistManager;
        },
        function (t) {
          J = t.GameID;
        },
        function (t) {
          N = t.default;
        },
        function (t) {
          V = t.StringUtils;
        },
        function (t) {
          D = t.SoundManager;
        },
        function (t) {
          O = t.BaseSlotGameView;
        },
        function (t) {
          R = t.MIBNetworkController;
        },
        function (t) {
          (P = t.eventManager), (q = t.EventKey);
        },
      ],
      execute: function () {
        var G,
          U,
          H,
          K,
          Q,
          W,
          X,
          Y,
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
          St,
          kt,
          vt,
          Ct,
          It,
          Mt,
          jt,
          Bt,
          Et,
          zt,
          Tt,
          At,
          Ft,
          Lt,
          xt,
          Jt,
          Nt,
          Vt,
          Dt,
          Ot,
          Rt,
          Pt,
          qt,
          Gt,
          Ut,
          Ht,
          Kt,
          Qt,
          Wt,
          Xt,
          Yt,
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
          Sn,
          kn,
          vn,
          Cn,
          In,
          Mn,
          jn,
          Bn,
          En,
          zn;
        l._RF.push(
          {},
          "ff80ba5bNRITp09ek8uDFrS",
          "MIBFullScreenGameView",
          void 0
        );
        var Tn = a.ccclass,
          An = a.property,
          Fn = function () {
            (this.aid = -1), (this.jackpot = 0), (this.bet = 0);
          };
        t(
          "MIBFullScreenGameView",
          ((G = Tn("MIBFullScreenGameView")),
          (U = An(s)),
          (H = An([s])),
          (K = An(s)),
          (Q = An(r)),
          (W = An(r)),
          (X = An(r)),
          (Y = An(u.Skeleton)),
          (Z = An(c)),
          ($ = An(r)),
          (tt = An(r)),
          (nt = An(r)),
          (et = An(r)),
          (it = An(r)),
          (ot = An(b)),
          (lt = An(b)),
          (at = An(p)),
          (st = An(p)),
          (rt = An(b)),
          (ut = An(s)),
          (ct = An(b)),
          (bt = An([_])),
          (pt = An([_])),
          (_t = An([u.SkeletonData])),
          (ft = An(b)),
          (ht = An(b)),
          (mt = An(b)),
          (dt = An(b)),
          (gt = An(b)),
          (yt = An(r)),
          (wt = An(r)),
          (St = An(M)),
          (kt = An(E)),
          (vt = An(b)),
          (Ct = An([r])),
          (It = An([_])),
          (Mt = An(z)),
          (jt = An(B)),
          (Bt = An(s)),
          (Et = An(f)),
          (zt = An(f)),
          (Tt = An(f)),
          (At = An(f)),
          (Ft = An(f)),
          (Lt = An(f)),
          (xt = An(b)),
          G(
            (((zn = (function (t) {
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
                  i(n, "lbl_lobby_jackpots", Dt, o(n)),
                  i(n, "lblTongCuoc", Ot, o(n)),
                  i(n, "btn_line", Rt, o(n)),
                  i(n, "btn_spin", Pt, o(n)),
                  i(n, "btn_stopautoSpin", qt, o(n)),
                  i(n, "btn_spin_skeleton", Gt, o(n)),
                  i(n, "btn_fast", Ut, o(n)),
                  i(n, "btn_lobby_back", Ht, o(n)),
                  i(n, "btn_main_back", Kt, o(n)),
                  i(n, "btn_ranking", Qt, o(n)),
                  i(n, "btn_bet_history", Wt, o(n)),
                  i(n, "btn_bet_money", Xt, o(n)),
                  i(n, "jackpot_history_node", Yt, o(n)),
                  i(n, "bet_history_node", Zt, o(n)),
                  i(n, "spr_bg_top", $t, o(n)),
                  i(n, "spr_bg_jackpot_main", tn, o(n)),
                  i(n, "result_node", nn, o(n)),
                  i(n, "lbl_result_amount", en, o(n)),
                  i(n, "mib_SlotMachineCmp_Node", on, o(n)),
                  (n.mib_SlotMachineCmp = null),
                  i(n, "loaded_item_normal", ln, o(n)),
                  i(n, "loaded_item_blur", an, o(n)),
                  i(n, "loaded_anim_item", sn, o(n)),
                  i(n, "loading_node", rn, o(n)),
                  i(n, "loading_bg", un, o(n)),
                  i(n, "lobby_node", cn, o(n)),
                  i(n, "main_node", bn, o(n)),
                  i(n, "top_node", pn, o(n)),
                  i(n, "btn_info", _n, o(n)),
                  i(n, "btn_setting", fn, o(n)),
                  i(n, "bigCityInfoView", hn, o(n)),
                  i(n, "bigCitySettingView", mn, o(n)),
                  i(n, "bottom_node", dn, o(n)),
                  i(n, "btn_bets", gn, o(n)),
                  i(n, "sprFrame_backgrounds", yn, o(n)),
                  i(n, "bigCity_EffectCmp", wn, o(n)),
                  i(n, "bigCityLineSelectionView", Sn, o(n)),
                  i(n, "lbl_lines", kn, o(n)),
                  i(n, "lobby_bgm_music", vn, o(n)),
                  i(n, "main_bgm_music", Cn, o(n)),
                  i(n, "spin_sfx_loop", In, o(n)),
                  i(n, "spin_end_sfx", Mn, o(n)),
                  i(n, "win_normal_sfx", jn, o(n)),
                  i(n, "win_normal_money_sfx", Bn, o(n)),
                  i(n, "trial_node", En, o(n)),
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
                  return R.getInstance();
                }),
                (l.getTotalBet = function () {
                  return this.bet * this.lineArr.length;
                }),
                (l.getBet = function () {
                  return this.bet;
                }),
                (l.isSpinning = function () {
                  return this.mib_SlotMachineCmp.isSpinning();
                }),
                (l.forceMachineStop = function (t, n) {
                  void 0 === t && (t = !0),
                    void 0 === n && (n = !1),
                    this.stop([], n),
                    t && this.turnOffAutoSpin();
                }),
                (l.handleLoggedIn = function () {
                  this.forceMachineStop(!0, !0), this.subscribe();
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
                    this.mib_SlotMachineCmp.stopImmediately(this.symbols);
                }),
                (l.finishedBonus = function () {
                  if (
                    this.btn_stopautoSpin.node.active &&
                    this.mib_SlotMachineCmp.isStopped()
                  )
                    this.spin();
                  else {
                    var t = this.rewards.map(function (t) {
                      return t.lid;
                    });
                    this.mib_SlotMachineCmp.showEachLines(t, 1.5),
                      this.resetSpinButton();
                  }
                  L.sendRefreshMoney(),
                    null != this.lbl_result_amount &&
                      null != this.lbl_result_amount &&
                      ((this.lbl_result_amount.getComponent(h).opacity = 255),
                      (this.lbl_result_amount.string = V.formatNumber(
                        this.moneyExchange
                      ))),
                    this.playBgmMusic();
                }),
                (l.finishedJackpot = function () {
                  this.playBgmMusic(),
                    null != this.lbl_result_amount &&
                      null != this.lbl_result_amount &&
                      ((this.lbl_result_amount.getComponent(h).opacity = 255),
                      (this.lbl_result_amount.string = V.formatNumber(
                        this.moneyExchange
                      )));
                }),
                (l.onLoad = function () {
                  var e = this;
                  t.prototype.onLoad.call(this),
                    (this.gameID = J.MIB),
                    (n.instance = this),
                    (this.mib_SlotMachineCmp =
                      this.mib_SlotMachineCmp_Node.getComponent(A)),
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
                    this.btn_spin.node.on(b.EventType.TOUCH_START, function () {
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
                                ? x.showNoti(
                                    "Không hỗ trợ tự quay ở chế độ chơi thử."
                                  )
                                : ((e.btn_stopautoSpin.node.active = !0),
                                  (e.btn_spin.node.active = !1),
                                  e.spin());
                            })
                          )
                          .start();
                    }),
                    this.btn_spin.node.on(b.EventType.TOUCH_END, function () {
                      if (e.btn_spin.interactable) {
                        var t = e.btn_spin.getComponent(N);
                        null != t && null != t && t.playSfx(),
                          e.btn_stopautoSpin.node.active ||
                            (g.stopAllByTarget(e.btn_spin.node),
                            e.symbols.length > 0
                              ? e.stopImmediately()
                              : e.spin());
                      }
                    }),
                    this.btn_stopautoSpin.node.on(
                      b.EventType.TOUCH_END,
                      function () {
                        (e.btn_stopautoSpin.node.active = !1),
                          (e.btn_spin.node.active = !0);
                        var t = e.btn_spin.getComponent(N);
                        null != t && null != t && t.playSfx();
                      }
                    ),
                    this.btn_fast.node.on("toggle", function () {
                      e.isFast = e.btn_fast.isChecked;
                    }),
                    this.btn_line.node.on("click", function () {
                      !e.isAutoSpin() && e.mib_SlotMachineCmp.isStopped()
                        ? (e.bigCityLineSelectionView.setDefaultLines(
                            e.lineArr
                          ),
                          e.bigCityLineSelectionView.show())
                        : x.showNoti("Đang Quay");
                    }),
                    this.btn_lobby_back.node.on("click", function () {
                      P.emit(q.IsMiniDownload, function () {
                        e.leaveRoom();
                      });
                    }),
                    this.btn_setting.node.on("click", function () {
                      e.bigCitySettingView.show();
                    }),
                    this.btn_info.node.on("click", function () {
                      e.bigCityInfoView.show();
                    }),
                    this.btn_main_back.node.on("click", function () {
                      if (e.main_node.active) {
                        if (!e.mib_SlotMachineCmp.isStopped())
                          return void x.showNoti("Đang Quay");
                        e.showLobby();
                      } else
                        P.emit(q.IsMiniDownload, function () {
                          e.leaveRoom();
                        });
                    }),
                    (this.mib_SlotMachineCmp.onMachineStopped = function () {
                      if (
                        (D.getInstance().stopAdditionalSfx(e.spin_sfx_loop),
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
                                  (e.mib_SlotMachineCmp.showLines(
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
                                        : i.getComponent(h)
                                    ),
                                    (e.lbl_result_amount.getComponent(
                                      h
                                    ).opacity = 255),
                                    (e.lbl_result_amount.string =
                                      V.formatNumber(n)));
                                })
                                .delay(1)
                                .call(function () {
                                  e.bigCity_EffectCmp.showEffect(
                                    T.BONUS,
                                    e.isFast ? 2 : 1,
                                    e.timeToShowResults,
                                    e.miniGameDict
                                  );
                                })
                                .start()
                            : e.bigCity_EffectCmp.showEffect(
                                T.BONUS,
                                e.isFast ? 2 : 1,
                                e.timeToShowResults,
                                e.miniGameDict
                              ))
                        );
                      }
                      var i = d(e.node).call(function () {
                        e.showResult(function () {
                          if (
                            e.btn_stopautoSpin.node.active &&
                            e.mib_SlotMachineCmp.isStopped()
                          )
                            e.spin();
                          else if (e.mib_SlotMachineCmp.isStopped()) {
                            var t = e.rewards.map(function (t) {
                              return t.lid;
                            });
                            e.mib_SlotMachineCmp.showEachLines(t, 1.5),
                              e.resetSpinButton();
                          }
                        });
                      });
                      e.wonFreeSpins > 0
                        ? d(e.node)
                            .sequence(
                              d().call(function () {
                                e.bigCity_EffectCmp.showEffect(
                                  T.FREE,
                                  e.isFast ? 2 : 1,
                                  e.timeToShowResults,
                                  0
                                ),
                                  (e.lbl_freespinCount.node.parent.active = !0),
                                  (e.lbl_freespinCount.string =
                                    e.currentFreeSpin.toString());
                              }),
                              d().delay(0.5),
                              d().call(function () {
                                e.btn_stopautoSpin.node.active &&
                                e.mib_SlotMachineCmp.isStopped()
                                  ? e.spin()
                                  : e.resetSpinButton();
                              })
                            )
                            .start()
                        : (e.moneyExchange > 0
                            ? i
                            : d(e.node).sequence(
                                d().delay(0.01),
                                d().call(function () {
                                  e.btn_stopautoSpin.node.active &&
                                  e.mib_SlotMachineCmp.isStopped()
                                    ? e.spin()
                                    : e.resetSpinButton();
                                })
                              )
                          ).start();
                      L.sendRefreshMoney();
                    }),
                    this.btn_ranking.node.on("click", function () {
                      e.jackpot_history_node.getComponent(j).fetchHistory();
                    }),
                    this.btn_bet_money.node.on("click", function () {
                      !e.isAutoSpin() && e.mib_SlotMachineCmp.isStopped()
                        ? e.showLobby()
                        : x.showNoti("Đang Quay");
                    }),
                    this.btn_bet_history.node.on("click", function () {
                      e.bet_history_node.getComponent(I).fetchHistory();
                    });
                }),
                (l.runTopAnim = function () {
                  this.top_node.active = !0;
                }),
                (l.resetSpinButton = function () {
                  this.btn_spin_skeleton.setAnimation(0, "spin", !0),
                    (this.btn_spin.interactable = !0),
                    (this.symbols = []);
                }),
                (l.release = function () {
                  n.instance = null;
                  var t = y.getBundle("slot_angrybird");
                  null != t &&
                    null != t &&
                    (t.release("prefab_angrybird", w),
                    y.removeBundle(t),
                    cc.log("remove asset bundle slot_angrybird"),
                    this.node.destroy(),
                    S.garbageCollect());
                }),
                (n.releaseBundle = function () {
                  n.instance = null;
                  var t = y.getBundle("slot_angrybird");
                  null != t &&
                    null != t &&
                    (t.release("prefab_angrybird", w),
                    y.removeBundle(t),
                    cc.log("remove asset bundle slot_angrybird"),
                    S.garbageCollect());
                }),
                (l.initUI = function () {
                  var t = this;
                  D.getInstance().stopBgm(),
                    (this.lobby_node.active = !1),
                    (this.main_node.active = !1),
                    (this.top_node.active = !1),
                    S.isBrowser
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
                    this.subscribe();
                }),
                (l.playBgmMusic = function () {
                  var t = this;
                  this.lobby_node.active
                    ? this.playLobbyMusic()
                    : this.scheduleOnce(function () {
                        D.getInstance().playBgm(t.main_bgm_music, !0, !0);
                      });
                }),
                (l.playLobbyMusic = function () {
                  D.getInstance().playBgm(this.lobby_bgm_music, !0, !0);
                }),
                (l.showLobby = function () {
                  this.playLobbyMusic(),
                    (this.loading_node.active = !1),
                    (this.lobby_node.active = !0),
                    (this.main_node.active = !1),
                    (this.spr_bg_top.node.active = !0),
                    (this.spr_bg_jackpot_main.node.active = !1),
                    (this.lblJackpot.node.active = !1),
                    this.resetSpinButton(),
                    this.turnOffAutoSpin(),
                    L.sendRefreshMoney();
                }),
                (l.showMain = function (t) {
                  (this.loading_node.active = !1),
                    (this.lobby_node.active = !1),
                    (this.spr_bg_top.node.active = !1),
                    (this.spr_bg_jackpot_main.node.active = !0),
                    (this.lblJackpot.node.active = !0),
                    this.bigCityInfoView.setPage(t),
                    this.playBgmMusic(),
                    (this.bet = this.bet_array[t]),
                    (this.isTrial = t == this.bet_array.length - 1),
                    (this.trial_node.active = this.isTrial),
                    this.updateJackpotLabels(!1),
                    (this.main_node.active = !0),
                    g.stopAllByTarget(this.top_node);
                  var n = k.getCanvasSize().height / k.getScaleY();
                  this.bottom_node.setPosition(
                    new v(
                      0,
                      -n / 2 -
                        this.bottom_node.getComponent(C).contentSize.height / 2
                    )
                  ),
                    d(this.bottom_node)
                      .delay(0.1)
                      .to(
                        0.5,
                        { position: new v(0, -290, 0) },
                        { easing: "expoOut" }
                      )
                      .start(),
                    this.mib_SlotMachineCmp.init(),
                    null != this.lbl_result_amount &&
                      null != this.lbl_result_amount &&
                      (this.lbl_result_amount.string = ""),
                    (this.lbl_freespinCount.node.parent.active = !1),
                    (this.currentFreeSpin = 0),
                    this.bigCity_EffectCmp.hideAll(),
                    (this.lblCoin.string = ""),
                    L.sendRefreshMoney();
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
                  this.mib_SlotMachineCmp.showLines(i, o, 0.3, function () {}),
                    g.stopAllByTarget(this.result_node),
                    g.stopAllByTarget(this.lbl_result_amount.getComponent(h)),
                    this.lbl_result_amount.node.setScale(v.ONE);
                  var l = d(this.result_node).sequence(
                      d().call(function () {
                        e.bigCity_EffectCmp.showEffect(
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
                              e.bigCity_EffectCmp.hideEffect(T.JACKPOT);
                            })
                          )
                        : d(this.result_node).sequence(
                            d().delay(7),
                            d().call(function () {
                              cc.log("active click"),
                                e.bigCity_EffectCmp.activeClick(T.JACKPOT);
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
                          (D.getInstance().playAdditionalSfx(e.win_normal_sfx),
                          e.wonJackpot ||
                            null == e.lbl_result_amount ||
                            null == e.lbl_result_amount ||
                            (e.lbl_result_amount.getComponent(h).opacity = 255),
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
                          );
                          e.result_tween = d({ a: 0 })
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
                            .start();
                        }
                        !e.wonJackpot &&
                          e.moneyExchange >= 100 * e.bet &&
                          e.bigCity_EffectCmp.showEffect(
                            T.BIGWIN,
                            e.isFast ? 2 : 1,
                            e.isFast ? 0.5 : 3.5,
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
                      : n.getComponent(h)
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
                    (this.lblTongCuoc.string = V.formatNumber(
                      this.getTotalBet()
                    ));
                }),
                (l.spin = function () {
                  if (this.mib_SlotMachineCmp.isStopped())
                    if (this.lineArr.length <= 0)
                      x.showNoti("Vui lòng chọn dòng");
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
                              : t.getComponent(h)
                          )
                            .sequence(
                              d().delay(0.5),
                              d().to(0.5, { opacity: 1 })
                            )
                            .start();
                      D.getInstance().stopAllAdditionalSfx(),
                        this.bigCity_EffectCmp.hideAll(),
                        (this.symbols = []),
                        (this.wonFreeSpins = 0),
                        (this.wonX2 = !1),
                        (this.btn_spin.interactable = !1),
                        this.btn_spin_skeleton.setAnimation(0, "stop", !0),
                        g.stopAllByTarget(this.node),
                        this.mib_SlotMachineCmp.spin(),
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
                (l.stop = function (t, n) {
                  var e = this;
                  (void 0 === n && (n = !1),
                  this.mib_SlotMachineCmp.isSpinning()) &&
                    (0 == t.length &&
                      ((this.moneyExchange = 0), (this.rewards = [])),
                    d(this.node)
                      .sequence(
                        d().delay(A.TIME_TO_SHOW_RESULT),
                        d().call(function () {
                          (e.btn_spin.interactable = !0),
                            e.isFast || n
                              ? e.mib_SlotMachineCmp.stopImmediately(t)
                              : e.mib_SlotMachineCmp.stop(t);
                        })
                      )
                      .start());
                }),
                (l.receiveData = function (t, n, e, i, o, l, a, s) {
                  var r = this;
                  (this._aid = t),
                    (this.bonusCount = 0),
                    (this.symbols = i.map(function (t) {
                      var n = new F();
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
                    if (i.gid == J.MIB)
                      if (n) {
                        var s = new Fn();
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
                        var b = new Fn();
                        (b.jackpot = this._jackpotInfos[c].jackpot),
                          (b.aid = this._jackpotInfos[c].aid),
                          (b.bet = this._jackpotInfos[c].bet),
                          u.push(b);
                      }
                    for (var p = 0; p < this._jackpotInfos.length; p++)
                      if (2 == this._jackpotInfos[p].aid) {
                        var _ = new Fn();
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
                          4,
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
                    (A.LINE = t.map(function (t) {
                      return t.poss;
                    })),
                    (this.lbl_lines.string = this.lineArr.length.toString());
                }),
                (l.setLines2 = function (t) {
                  this.lineArr = t;
                }),
                (l.updateLines = function (t) {
                  cc.log("UPDATE LINE:", JSON.stringify(t)),
                    (this.lineArr = t),
                    (this.lbl_lines.string = this.lineArr.length.toString()),
                    this.mib_SlotMachineCmp.updateLines(t);
                }),
                (l.show = function () {
                  return t.prototype.show.call(this);
                }),
                n
              );
            })(O)).isPlayedIntro = !1),
            (zn.instance = null),
            (Vt = n((Nt = zn).prototype, "lblJackpot", [U], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Dt = n(Nt.prototype, "lbl_lobby_jackpots", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Ot = n(Nt.prototype, "lblTongCuoc", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Rt = n(Nt.prototype, "btn_line", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pt = n(Nt.prototype, "btn_spin", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (qt = n(Nt.prototype, "btn_stopautoSpin", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Gt = n(Nt.prototype, "btn_spin_skeleton", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ut = n(Nt.prototype, "btn_fast", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ht = n(Nt.prototype, "btn_lobby_back", [$], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Kt = n(Nt.prototype, "btn_main_back", [tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Qt = n(Nt.prototype, "btn_ranking", [nt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Wt = n(Nt.prototype, "btn_bet_history", [et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Xt = n(Nt.prototype, "btn_bet_money", [it], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Yt = n(Nt.prototype, "jackpot_history_node", [ot], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Zt = n(Nt.prototype, "bet_history_node", [lt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($t = n(Nt.prototype, "spr_bg_top", [at], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (tn = n(Nt.prototype, "spr_bg_jackpot_main", [st], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (nn = n(Nt.prototype, "result_node", [rt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (en = n(Nt.prototype, "lbl_result_amount", [ut], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (on = n(Nt.prototype, "mib_SlotMachineCmp_Node", [ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ln = n(Nt.prototype, "loaded_item_normal", [bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (an = n(Nt.prototype, "loaded_item_blur", [pt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (sn = n(Nt.prototype, "loaded_anim_item", [_t], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (rn = n(Nt.prototype, "loading_node", [ft], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (un = n(Nt.prototype, "loading_bg", [ht], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (cn = n(Nt.prototype, "lobby_node", [mt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (bn = n(Nt.prototype, "main_node", [dt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (pn = n(Nt.prototype, "top_node", [gt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_n = n(Nt.prototype, "btn_info", [yt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (fn = n(Nt.prototype, "btn_setting", [wt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (hn = n(Nt.prototype, "bigCityInfoView", [St], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (mn = n(Nt.prototype, "bigCitySettingView", [kt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (dn = n(Nt.prototype, "bottom_node", [vt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (gn = n(Nt.prototype, "btn_bets", [Ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (yn = n(Nt.prototype, "sprFrame_backgrounds", [It], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (wn = n(Nt.prototype, "bigCity_EffectCmp", [Mt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Sn = n(Nt.prototype, "bigCityLineSelectionView", [jt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (kn = n(Nt.prototype, "lbl_lines", [Bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (vn = n(Nt.prototype, "lobby_bgm_music", [Et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Cn = n(Nt.prototype, "main_bgm_music", [zt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (In = n(Nt.prototype, "spin_sfx_loop", [Tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Mn = n(Nt.prototype, "spin_end_sfx", [At], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (jn = n(Nt.prototype, "win_normal_sfx", [Ft], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Bn = n(Nt.prototype, "win_normal_money_sfx", [Lt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (En = n(Nt.prototype, "trial_node", [xt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
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
  "chunks:///_virtual/MIBInfoView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CommonPopup.ts"],
  function (e) {
    "use strict";
    var n, t, i, o, r, c, a, s, u, l;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (r = e.cclegacy),
            (c = e._decorator),
            (a = e.Sprite),
            (s = e.SpriteFrame),
            (u = e.Button);
        },
        function (e) {
          l = e.CommonPopup;
        },
      ],
      execute: function () {
        var p, f, b, h, _, y, I, d, m;
        r._RF.push({}, "5e7b4J0QsBDBIa/3eIXduKX", "MIBInfoView", void 0);
        var g = c.ccclass,
          v = c.property;
        e(
          "MIBInfoView",
          ((p = g("MIBInfoView")),
          (f = v(a)),
          (b = v([s])),
          (h = v(u)),
          p(
            ((I = n(
              (y = (function (e) {
                function n() {
                  for (
                    var n, t = arguments.length, r = new Array(t), c = 0;
                    c < t;
                    c++
                  )
                    r[c] = arguments[c];
                  return (
                    (n = e.call.apply(e, [this].concat(r)) || this),
                    i(n, "content", I, o(n)),
                    i(n, "spr_infos", d, o(n)),
                    i(n, "btn_close_info", m, o(n)),
                    n
                  );
                }
                t(n, e);
                var r = n.prototype;
                return (
                  (r.onLoad = function () {
                    var n = this;
                    e.prototype.onLoad.call(this),
                      this.btn_close_info.node.on("click", function () {
                        n.hide();
                      });
                  }),
                  (r.setPage = function (e) {
                    this.content.spriteFrame = this.spr_infos[e];
                  }),
                  n
                );
              })(l)).prototype,
              "content",
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
            (d = n(y.prototype, "spr_infos", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (m = n(y.prototype, "btn_close_info", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_ = y))
          ) || _)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MIBJackpotHistoryItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var i, e, n, r, o, a, l, u, c;
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
          c = t.StringUtils;
        },
      ],
      execute: function () {
        var p, s, h, _, f, g, b, m, x, y, w, d, k;
        o._RF.push(
          {},
          "805d0tOYXNEr61L8BwNDbjK",
          "MIBJackpotHistoryItemView",
          void 0
        );
        var z = a.ccclass,
          I = a.property;
        t(
          "default",
          ((p = z("MIBJackpotHistoryItemView")),
          (s = I(l)),
          (h = I(l)),
          (_ = I(l)),
          (f = I(l)),
          (g = I(l)),
          p(
            ((x = i(
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
                    n(i, "txt_phien_loai", x, r(i)),
                    n(i, "txt_phien_time", y, r(i)),
                    n(i, "txt_phien_datcuoc", w, r(i)),
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
                      (this.txt_phien_datcuoc.string = c.formatNumber(e)),
                      (this.txt_phien_loai.string = r.toString()),
                      (this.txt_phien_tienthang.string = c.formatNumber(n));
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
            (y = i(m.prototype, "txt_phien_time", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = i(m.prototype, "txt_phien_datcuoc", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (d = i(m.prototype, "txt_phien_taikhoan", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = i(m.prototype, "txt_phien_tienthang", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = m))
          ) || b)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MIBJackpotHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MIBJackpotHistoryItemView.ts",
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
        var d, _, v, w, P, H, k, C, M, T, I;
        o._RF.push(
          {},
          "eefe6IgNXxJEqB77iCKwUd9",
          "MIBJackpotHistoryView",
          void 0
        );
        var S = a.ccclass,
          J = a.property,
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
          ((d = S("MIBJackpotHistoryView")),
          (_ = J(s)),
          (v = J(s)),
          (w = J(c)),
          (P = J([l])),
          d(
            ((C = e(
              (k = (function (t) {
                function e() {
                  for (
                    var e, n = arguments.length, o = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    i(e, "btn_prev", C, r(e)),
                    i(e, "btn_next", M, r(e)),
                    i(e, "lbl_page", T, r(e)),
                    i(e, "item_nodes", I, r(e)),
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
                          b.MIB.toString()
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
            (M = e(k.prototype, "btn_next", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = e(k.prototype, "lbl_page", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(k.prototype, "item_nodes", [P], {
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
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MIBLineSelectionView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MIBFullScreenGameView.ts",
    "./CommonPopup.ts",
  ],
  function (e) {
    "use strict";
    var n, t, i, o, c, l, r, u, a, s, h;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (c = e.cclegacy),
            (l = e._decorator),
            (r = e.Toggle),
            (u = e.Node),
            (a = e.Button);
        },
        function (e) {
          s = e.MIBFullScreenGameView;
        },
        function (e) {
          h = e.CommonPopup;
        },
      ],
      execute: function () {
        var f, g, b, p, d, _, C, y, m, w, L, S, k, v, V, F, z;
        c._RF.push(
          {},
          "bd485fIz3tELLC6tPl6KQ9v",
          "MIBLineSelectionView",
          void 0
        );
        var G = l.ccclass,
          B = l.property;
        e(
          "MIBLineSelectionView",
          ((f = G("MIBLineSelectionView")),
          (g = B([r])),
          (b = B(r)),
          (p = B(r)),
          (d = B(r)),
          (_ = B(r)),
          (C = B(u)),
          (y = B(a)),
          f(
            ((L = n(
              (w = (function (e) {
                function n() {
                  for (
                    var n, t = arguments.length, c = new Array(t), l = 0;
                    l < t;
                    l++
                  )
                    c[l] = arguments[l];
                  return (
                    (n = e.call.apply(e, [this].concat(c)) || this),
                    i(n, "tog_lines", L, o(n)),
                    i(n, "btn_chan", S, o(n)),
                    i(n, "btn_le", k, o(n)),
                    i(n, "btn_tatca", v, o(n)),
                    i(n, "btn_huy", V, o(n)),
                    i(n, "bigCityFullScreenGameView", F, o(n)),
                    i(n, "btn_close_chon_dong", z, o(n)),
                    n
                  );
                }
                t(n, e);
                var c = n.prototype;
                return (
                  (c.onLoad = function () {
                    var e = this;
                    this.tog_lines.forEach(function (n, t) {
                      n.node.on("toggle", function () {
                        var n = e.getSelectedLines();
                        e.bigCityFullScreenGameView
                          .getComponent(s)
                          .updateLines(n);
                      });
                    }),
                      this.btn_chan.node.on("toggle", function () {
                        if (e.btn_chan.isChecked) {
                          e.tog_lines.forEach(function (e, n) {
                            e.isChecked = n % 2 != 0;
                          });
                          var n = e.getSelectedLines();
                          e.bigCityFullScreenGameView
                            .getComponent(s)
                            .updateLines(n);
                        }
                      }),
                      this.btn_le.node.on("toggle", function () {
                        if (e.btn_le.isChecked) {
                          e.tog_lines.forEach(function (e, n) {
                            e.isChecked = n % 2 == 0;
                          });
                          var n = e.getSelectedLines();
                          e.bigCityFullScreenGameView
                            .getComponent(s)
                            .updateLines(n);
                        }
                      }),
                      this.btn_tatca.node.on("toggle", function () {
                        if (e.btn_tatca.isChecked) {
                          e.tog_lines.forEach(function (e, n) {
                            e.isChecked = !0;
                          });
                          var n = e.getSelectedLines();
                          e.bigCityFullScreenGameView
                            .getComponent(s)
                            .updateLines(n);
                        }
                      }),
                      this.btn_huy.node.on("toggle", function () {
                        if (e.btn_huy.isChecked) {
                          e.tog_lines.forEach(function (e, n) {
                            e.isChecked = !1;
                          });
                          var n = e.getSelectedLines();
                          e.bigCityFullScreenGameView
                            .getComponent(s)
                            .updateLines(n);
                        }
                      }),
                      this.btn_close_chon_dong.node.on("click", function () {
                        e.hide();
                      });
                  }),
                  (c.getSelectedLines = function () {
                    var e = [];
                    return (
                      this.tog_lines.forEach(function (n, t) {
                        n.isChecked && e.push(t);
                      }),
                      e
                    );
                  }),
                  (c.setDefaultLines = function (e) {
                    cc.log(JSON.stringify(e)),
                      this.tog_lines.forEach(function (n, t) {
                        n.isChecked =
                          e.filter(function (e) {
                            return e == t;
                          }).length > 0;
                      }),
                      (this.btn_tatca.isChecked = !0),
                      (this.btn_chan.isChecked = !1),
                      (this.btn_le.isChecked = !1),
                      (this.btn_huy.isChecked = !1);
                  }),
                  n
                );
              })(h)).prototype,
              "tog_lines",
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
            (S = n(w.prototype, "btn_chan", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = n(w.prototype, "btn_le", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = n(w.prototype, "btn_tatca", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = n(w.prototype, "btn_huy", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = n(w.prototype, "bigCityFullScreenGameView", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = n(w.prototype, "btn_close_chon_dong", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = w))
          ) || m)
        );
        c._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MIBNetworkController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BaseSlotGameNetworkController.ts",
    "./Define.ts",
    "./MIBFullScreenGameView.ts",
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
          i = e.MIBFullScreenGameView;
        },
      ],
      execute: function () {
        n._RF.push(
          {},
          "9d438GdxWlHGJwmL4J33rtm",
          "MIBNetworkController",
          void 0
        ),
          (e(
            "MIBNetworkController",
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
                  return o.MIB;
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
  "chunks:///_virtual/MIBNoHuView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MIBFullScreenGameView.ts",
    "./StringUtils.ts",
    "./SoundManager.ts",
  ],
  function (n) {
    "use strict";
    var t, e, i, o, a, r, u, c, l, s, _, p, h, f, m, w, k;
    return {
      setters: [
        function (n) {
          (t = n.applyDecoratedDescriptor),
            (e = n.inheritsLoose),
            (i = n.initializerDefineProperty),
            (o = n.assertThisInitialized);
        },
        function (n) {
          (a = n.cclegacy),
            (r = n._decorator),
            (u = n.Node),
            (c = n.sp),
            (l = n.Label),
            (s = n.AudioClip),
            (_ = n.Vec3),
            (p = n.Tween),
            (h = n.tween),
            (f = n.Component);
        },
        function (n) {
          m = n.MIBFullScreenGameView;
        },
        function (n) {
          w = n.StringUtils;
        },
        function (n) {
          k = n.SoundManager;
        },
      ],
      execute: function () {
        var b, d, v, g, y, M, j, I, S, z, B, N, V;
        a._RF.push({}, "7395e0zukpBzIc4jLr0xQSP", "MIBNoHuView", void 0);
        var x = r.ccclass,
          L = r.property;
        n(
          "MIBNoHuView",
          ((b = x("MIBNoHuView")),
          (d = L(u)),
          (v = L(u)),
          (g = L(c.Skeleton)),
          (y = L(l)),
          (M = L(s)),
          b(
            ((S = t(
              (I = (function (n) {
                function t() {
                  for (
                    var t, e = arguments.length, a = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (t = n.call.apply(n, [this].concat(a)) || this),
                    i(t, "root", S, o(t)),
                    i(t, "black_screen", z, o(t)),
                    i(t, "jackpot_skeleton", B, o(t)),
                    i(t, "nohu_win_amount", N, o(t)),
                    i(t, "jackpot_money_sfx", V, o(t)),
                    (t.win_amount_tween = null),
                    (t.activated_click = !1),
                    t
                  );
                }
                e(t, n);
                var a = t.prototype;
                return (
                  (a.onLoad = function () {
                    var n = this;
                    this.black_screen.on("click", function () {
                      n.activated_click && n.hide();
                    });
                  }),
                  (a.activeClick = function () {
                    (this.black_screen.active = !0),
                      (this.activated_click = !0);
                  }),
                  (a.show = function (n) {
                    var t = this;
                    (this.root.active = !0),
                      (this.black_screen.active = !0),
                      (this.activated_click = !1),
                      this.jackpot_skeleton.setAnimation(0, "appear", !1),
                      this.jackpot_skeleton.setCompleteListener(function (n) {
                        null != n &&
                          "appear" == (n.animation ? n.animation.name : "") &&
                          t.jackpot_skeleton.setAnimation(0, "loop", !0);
                      }),
                      (this.nohu_win_amount.string = "0"),
                      this.nohu_win_amount.node.parent.setPosition(
                        new _(0, -600, 0)
                      ),
                      p.stopAllByTarget(this.nohu_win_amount.node.parent),
                      h(this.nohu_win_amount.node.parent)
                        .delay(2)
                        .call(function () {
                          (t.nohu_win_amount.node.parent.active = !0),
                            k.getInstance().playSfx(t.jackpot_money_sfx);
                        })
                        .to(0.1, { position: new _(0, -239, 0) })
                        .call(function () {
                          t.win_amount_tween && t.win_amount_tween.stop();
                          t.win_amount_tween = h({ a: 0 })
                            .to(
                              4,
                              { a: n },
                              {
                                progress: function (n, e, i, o) {
                                  return (
                                    null != t.nohu_win_amount &&
                                      null != t.nohu_win_amount &&
                                      (t.nohu_win_amount.string =
                                        w.formatNumber(Math.floor(i))),
                                    n + (e - n) * o
                                  );
                                },
                              }
                            )
                            .call(function () {
                              null != t.nohu_win_amount &&
                                null != t.nohu_win_amount &&
                                (t.nohu_win_amount.string = w.formatNumber(
                                  Math.floor(n)
                                ));
                            })
                            .start();
                        })
                        .start();
                  }),
                  (a.hide = function () {
                    this.root.active && m.getInstance().finishedJackpot(),
                      (this.activated_click = !1);
                    (this.black_screen.active = !1), (this.root.active = !1);
                  }),
                  t
                );
              })(f)).prototype,
              "root",
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
            (z = t(I.prototype, "black_screen", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (B = t(I.prototype, "jackpot_skeleton", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = t(I.prototype, "nohu_win_amount", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = t(I.prototype, "jackpot_money_sfx", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = I))
          ) || j)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MIBSettingView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./MIBBetHistoryView.ts",
    "./MIBJackpotHistoryView.ts",
    "./CommonPopup.ts",
    "./EventManager.ts",
    "./Define.ts",
  ],
  function (t) {
    "use strict";
    var e, i, o, n, r, c, u, l, s, a, g, f, b, h;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (o = t.initializerDefineProperty),
            (n = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy), (c = t._decorator), (u = t.Button), (l = t.Toggle);
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
          (f = t.eventManager), (b = t.EventKey);
        },
        function (t) {
          h = t.StorageKey;
        },
      ],
      execute: function () {
        var p, y, _, m, d, w, C, S, k, M, B, I, H, V, v, z, x;
        r._RF.push({}, "fb8178TzKBMq5RDvCH/Pf5f", "MIBSettingView", void 0);
        var T = c.ccclass,
          D = c.property;
        t(
          "MIBSettingView",
          ((p = T("MIBSettingView")),
          (y = D(u)),
          (_ = D(u)),
          (m = D(u)),
          (d = D(l)),
          (w = D(l)),
          (C = D(s)),
          (S = D(a)),
          p(
            ((B = e(
              (M = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, r = new Array(i), c = 0;
                    c < i;
                    c++
                  )
                    r[c] = arguments[c];
                  return (
                    (e = t.call.apply(t, [this].concat(r)) || this),
                    o(e, "btn_lichsucuoc", B, n(e)),
                    o(e, "btn_lichsuhu", I, n(e)),
                    o(e, "btn_close_setting", H, n(e)),
                    o(e, "tog_music", V, n(e)),
                    o(e, "tog_sfx", v, n(e)),
                    o(e, "bigCityBetHistoryView", z, n(e)),
                    o(e, "bigCityJackpotHistoryView", x, n(e)),
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
                        "1" == localStorage.getItem(h.SoundFX) ||
                        "true" == localStorage.getItem(h.SoundFX)),
                      (this.tog_music.isChecked =
                        "1" == localStorage.getItem(h.Music) ||
                        "true" == localStorage.getItem(h.Music)),
                      f.emit(b.MusicToggle, this.tog_music.isChecked),
                      f.emit(b.SoundToggle, this.tog_sfx.isChecked),
                      null == (t = this.tog_sfx) ||
                        t.node.on("toggle", function () {
                          localStorage.setItem(
                            h.SoundFX,
                            i.tog_sfx.isChecked ? "1" : "0"
                          ),
                            f.emit(b.SoundToggle, i.tog_sfx.isChecked);
                        }),
                      null == (e = this.tog_music) ||
                        e.node.on("toggle", function () {
                          localStorage.setItem(
                            h.Music,
                            i.tog_music.isChecked ? "1" : "0"
                          ),
                            f.emit(b.MusicToggle, i.tog_music.isChecked);
                        });
                  }),
                  e
                );
              })(g)).prototype,
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
            (I = e(M.prototype, "btn_lichsuhu", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = e(M.prototype, "btn_close_setting", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = e(M.prototype, "tog_music", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = e(M.prototype, "tog_sfx", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(M.prototype, "bigCityBetHistoryView", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = e(M.prototype, "bigCityJackpotHistoryView", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = M))
          ) || k)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/MIBSummaryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./SoundManager.ts",
  ],
  function (t) {
    "use strict";
    var n, e, i, o, r, l, a, u, c, s, p;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (i = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (r = t.cclegacy),
            (l = t._decorator),
            (a = t.Label),
            (u = t.Button),
            (c = t.AudioClip);
        },
        function (t) {
          s = t.CommonPopup;
        },
        function (t) {
          p = t.SoundManager;
        },
      ],
      execute: function () {
        var b, f, _, h, y, g, m, d, w, v, M, S, z;
        r._RF.push({}, "b3e34KG+tpJTYA3M04j9XfB", "MIBSummaryView", void 0);
        var B = l.ccclass,
          x = l.property;
        t(
          "MIBSummaryView",
          ((b = B("MIBSummaryView")),
          (f = x(a)),
          (_ = x(a)),
          (h = x(a)),
          (y = x(u)),
          (g = x(c)),
          b(
            ((w = n(
              (d = (function (t) {
                function n() {
                  for (
                    var n, e = arguments.length, r = new Array(e), l = 0;
                    l < e;
                    l++
                  )
                    r[l] = arguments[l];
                  return (
                    (n = t.call.apply(t, [this].concat(r)) || this),
                    i(n, "lbl_1", w, o(n)),
                    i(n, "lbl_2", v, o(n)),
                    i(n, "lbl_3", M, o(n)),
                    i(n, "btn_close_thongbao", S, o(n)),
                    i(n, "open_sfx", z, o(n)),
                    n
                  );
                }
                e(n, t);
                var r = n.prototype;
                return (
                  (r.onLoad = function () {
                    var n = this;
                    t.prototype.onLoad.call(this),
                      this.btn_close_thongbao.node.on("click", function () {
                        n.hide();
                      });
                  }),
                  (r.setText = function (t, n, e) {
                    void 0 === e && (e = ""),
                      (this.lbl_1.string = t),
                      (this.lbl_2.string = n),
                      "" != e && (this.lbl_3.string = e);
                  }),
                  (r.show = function (n) {
                    void 0 === n && (n = function () {}),
                      t.prototype.show.call(this, n),
                      p.getInstance().playSfx(this.open_sfx);
                  }),
                  n
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
            (v = n(d.prototype, "lbl_2", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = n(d.prototype, "lbl_3", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = n(d.prototype, "btn_close_thongbao", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = n(d.prototype, "open_sfx", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (m = d))
          ) || m)
        );
        r._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/slot-angrybird",
  [
    "./MIBBetHistoryDetail.ts",
    "./MIBBetHistoryItemView.ts",
    "./MIBBetHistoryView.ts",
    "./MIBBonusItemView.ts",
    "./MIBBonusItemView2.ts",
    "./MIBBonusView.ts",
    "./MIBFullScreenGameView.ts",
    "./MIBInfoView.ts",
    "./MIBJackpotHistoryItemView.ts",
    "./MIBJackpotHistoryView.ts",
    "./MIBLineSelectionView.ts",
    "./MIBNetworkController.ts",
    "./MIBNoHuView.ts",
    "./MIBSettingView.ts",
    "./MIBSummaryView.ts",
    "./MIB_EffectCmp.ts",
    "./MIB_SlotMachineCmp.ts",
    "./MIB_SlotMachineColumn.ts",
    "./MIB_SlotMachineItemView.ts",
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
      ],
      execute: function () {},
    };
  }
);

(function (r) {
  r(
    "virtual:///prerequisite-imports/slot-angrybird",
    "chunks:///_virtual/slot-angrybird"
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
