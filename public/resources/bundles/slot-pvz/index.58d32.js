System.register(
  "chunks:///_virtual/BigCity_EffectCmp.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BigCityBonusView.ts",
    "./BigCityNoHuView.ts",
    "./SoundManager.ts",
  ],
  function (e) {
    "use strict";
    var i, t, n, a, o, r, s, c, l, u, f, b, p, h;
    return {
      setters: [
        function (e) {
          (i = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (a = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (r = e._decorator),
            (s = e.Node),
            (c = e.sp),
            (l = e.AudioClip),
            (u = e.tween),
            (f = e.Component);
        },
        function (e) {
          b = e.BigCityBonusView;
        },
        function (e) {
          p = e.BigCityNoHuView;
        },
        function (e) {
          h = e.SoundManager;
        },
      ],
      execute: function () {
        var g, d, _, w, y, k, C, v, B, E, m, N, I, S, A, F, V, O, T;
        e("EFFECT_TYPE", void 0),
          o._RF.push(
            {},
            "c3ad0sCMcJFoJ5Udn5MvG3K",
            "BigCity_EffectCmp",
            void 0
          );
        var z,
          P = r.ccclass,
          H = r.property;
        !(function (e) {
          (e[(e.FREE = 0)] = "FREE"),
            (e[(e.BIGWIN = 1)] = "BIGWIN"),
            (e[(e.JACKPOT = 2)] = "JACKPOT"),
            (e[(e.BONUS = 3)] = "BONUS");
        })(z || (z = e("EFFECT_TYPE", {})));
        e(
          "BigCity_EffectCmp",
          ((g = P("BigCity_EffectCmp")),
          (d = H(s)),
          (_ = H(c.Skeleton)),
          (w = H(c.Skeleton)),
          (y = H(p)),
          (k = H(b)),
          (C = H(l)),
          (v = H(l)),
          (B = H(l)),
          g(
            ((N = i(
              (m = (function (e) {
                function i() {
                  for (
                    var i, t = arguments.length, o = new Array(t), r = 0;
                    r < t;
                    r++
                  )
                    o[r] = arguments[r];
                  return (
                    (i = e.call.apply(e, [this].concat(o)) || this),
                    n(i, "black_screen", N, a(i)),
                    n(i, "freespin_skeleton", I, a(i)),
                    n(i, "bigwin_skeleton", S, a(i)),
                    n(i, "bigCityNoHuView", A, a(i)),
                    n(i, "bigCityBonusView", F, a(i)),
                    n(i, "bigwin_audio", V, a(i)),
                    n(i, "freespin_audio", O, a(i)),
                    n(i, "nohu_audio", T, a(i)),
                    i
                  );
                }
                t(i, e);
                var o = i.prototype;
                return (
                  (o.showEffect = function (e, i, t, n) {
                    var a = this;
                    switch (e) {
                      case z.BIGWIN:
                        h.getInstance().playAdditionalSfx(this.bigwin_audio),
                          (this.bigwin_skeleton.timeScale = i),
                          (this.black_screen.active = !1),
                          (this.bigwin_skeleton.node.active = !0),
                          this.bigwin_skeleton.setAnimation(0, "animation", !1),
                          u(this.bigwin_skeleton.node)
                            .sequence(
                              u().delay(t),
                              u().call(function () {
                                (a.black_screen.active = !1),
                                  (a.bigwin_skeleton.node.active = !1);
                              })
                            )
                            .start();
                        break;
                      case z.FREE:
                        h.getInstance().playAdditionalSfx(this.freespin_audio),
                          (this.freespin_skeleton.timeScale = i),
                          (this.black_screen.active = !1),
                          (this.freespin_skeleton.node.active = !0),
                          this.freespin_skeleton.setAnimation(
                            0,
                            "animation",
                            !1
                          ),
                          u(this.freespin_skeleton.node)
                            .sequence(
                              u().delay(t),
                              u().call(function () {
                                (a.black_screen.active = !1),
                                  (a.freespin_skeleton.node.active = !1);
                              })
                            )
                            .start();
                        break;
                      case z.JACKPOT:
                        var o;
                        h.getInstance().playBgm(this.nohu_audio),
                          null == (o = this.bigCityNoHuView) || o.show(n);
                        break;
                      case z.BONUS:
                        var r;
                        h.getInstance().stopBgm(),
                          null == (r = this.bigCityBonusView) || r.show(n, i);
                    }
                  }),
                  (o.hideEffect = function (e) {
                    switch (e) {
                      case z.BIGWIN:
                        (this.black_screen.active = !1),
                          (this.bigwin_skeleton.node.active = !1);
                        break;
                      case z.FREE:
                        (this.black_screen.active = !1),
                          (this.freespin_skeleton.node.active = !1);
                        break;
                      case z.JACKPOT:
                        var i;
                        null == (i = this.bigCityNoHuView) || i.hide();
                        break;
                      case z.BONUS:
                        var t;
                        null == (t = this.bigCityBonusView) || t.hide();
                    }
                  }),
                  (o.hideAll = function () {
                    this.hideEffect(z.BIGWIN),
                      this.hideEffect(z.FREE),
                      this.hideEffect(z.JACKPOT),
                      this.hideEffect(z.BONUS);
                  }),
                  (o.activeClick = function (e) {
                    switch (e) {
                      case z.BIGWIN:
                      case z.FREE:
                        break;
                      case z.JACKPOT:
                        var i;
                        null == (i = this.bigCityNoHuView) || i.activeClick();
                    }
                  }),
                  i
                );
              })(f)).prototype,
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
            (I = i(m.prototype, "freespin_skeleton", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = i(m.prototype, "bigwin_skeleton", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = i(m.prototype, "bigCityNoHuView", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = i(m.prototype, "bigCityBonusView", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = i(m.prototype, "bigwin_audio", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (O = i(m.prototype, "freespin_audio", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = i(m.prototype, "nohu_audio", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (E = m))
          ) || E)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCity_SlotMachineCmp.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BigCity_SlotMachineColumn.ts",
    "./LineCmp.ts",
  ],
  function (n) {
    "use strict";
    var t, e, i, o, l, r, c, a, u, s, p, f, h, d, m, v, y, g;
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
            (r = n._decorator),
            (c = n.Node),
            (a = n.Button),
            (u = n.Tween),
            (s = n.tween),
            (p = n.UITransform),
            (f = n.Vec3),
            (h = n.Vec2),
            (d = n.Color),
            (m = n.Component);
        },
        function (n) {
          (v = n.default), (y = n.SlotMachineState);
        },
        function (n) {
          g = n.default;
        },
      ],
      execute: function () {
        var C, E, S, w, _, L, T, I, N, W;
        l._RF.push(
          {},
          "90b3ecVoiVFgYjP3RN3+Vig",
          "BigCity_SlotMachineCmp",
          void 0
        );
        var B = r.ccclass,
          F = r.property;
        n(
          "default",
          ((C = B("BigCity_SlotMachineCmp")),
          (E = F([v])),
          (S = F(g)),
          (w = F([c])),
          C(
            (((W = (function (n) {
              function t() {
                for (
                  var t, e = arguments.length, l = new Array(e), r = 0;
                  r < e;
                  r++
                )
                  l[r] = arguments[r];
                return (
                  (t = n.call.apply(n, [this].concat(l)) || this),
                  i(t, "colums", T, o(t)),
                  i(t, "lineCmp", I, o(t)),
                  i(t, "line_nodes", N, o(t)),
                  (t.onMachineStopped = function () {}),
                  (t.stopped = !1),
                  t
                );
              }
              e(t, n);
              var l = t.prototype;
              return (
                (l.onLoad = function () {
                  var n,
                    t = this,
                    e =
                      null == (n = this.line_nodes)
                        ? void 0
                        : n.map(function (n) {
                            var t;
                            return null == (t = n.children[0])
                              ? void 0
                              : t.getComponent(a);
                          });
                  null == e ||
                    e.forEach(function (n, e) {
                      n.node.on("click", function () {
                        var n;
                        null == (n = t.lineCmp) || n.clear(),
                          t.drawLine(e, !1),
                          u.stopAllByTarget(t.node),
                          s(t.node)
                            .delay(1)
                            .call(function () {
                              var n;
                              null == (n = t.lineCmp) || n.clear();
                            })
                            .start();
                      });
                    });
                }),
                (l.init = function () {
                  var n,
                    t,
                    e = this;
                  this.colums.forEach(function (n) {
                    return n.init();
                  }),
                    (this.colums[this.colums.length - 1].onStopped =
                      function () {
                        e.stopped || ((e.stopped = !0), e.onMachineStopped());
                      }),
                    this.hideWild(),
                    null == (n = this.lineCmp) || n.clear(),
                    u.stopAllByTarget(
                      null == (t = this.lineCmp) ? void 0 : t.node
                    );
                }),
                (l.spin = function () {
                  var n, t;
                  (this.stopped = !1),
                    null == (n = this.lineCmp) || n.clear(),
                    u.stopAllByTarget(
                      null == (t = this.lineCmp) ? void 0 : t.node
                    ),
                    this.colums.forEach(function (n) {
                      return n.spin();
                    });
                }),
                (l.stop = function (n) {
                  var t = [0.3, 0.9, 1.3, 1.8, 2.5];
                  this.colums.forEach(function (e, i) {
                    var o = e,
                      l = [n[i], n[i + 5], n[i + 10]];
                    s(o.node)
                      .sequence(
                        s().delay(t[i]),
                        s().call(function () {
                          e.getstate() == y.SPINNING && l && o.stop(l);
                        })
                      )
                      .start();
                  });
                }),
                (l.stopImmediately = function (n) {
                  var t = [0.1, 0.1, 0.1, 0.1, 0.1];
                  this.colums.forEach(function (e, i) {
                    if (e.getstate() == y.SPINNING) {
                      var o = e;
                      u.stopAllByTarget(o.node);
                      var l = [n[i], n[i + 5], n[i + 10]];
                      s(o.node)
                        .sequence(
                          s().delay(t[i]),
                          s().call(function () {
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
                (l.hideStickyWild = function () {
                  this.colums.forEach(function (n) {
                    return n.hideAllStickyWild();
                  });
                }),
                (l.showLines = function (n, t, e, i) {
                  var o,
                    l,
                    r,
                    c = this;
                  null == (o = this.lineCmp) || o.clear(),
                    u.stopAllByTarget(
                      null == (l = this.lineCmp) ? void 0 : l.node
                    );
                  var a = 0,
                    p = t / n.length;
                  n.forEach(function (n) {
                    var t;
                    s(null == (t = c.lineCmp) ? void 0 : t.node)
                      .sequence(
                        s().delay(a),
                        s().call(function () {
                          c.drawLine(n, !1);
                        })
                      )
                      .start(),
                      (a += p);
                  }),
                    s(null == (r = this.lineCmp) ? void 0 : r.node)
                      .sequence(
                        s().delay(t + e),
                        s().call(function () {
                          i && i();
                        })
                      )
                      .start();
                }),
                (l.showEachLines = function (n, t) {
                  var e,
                    i,
                    o = this;
                  void 0 === t && (t = 0),
                    null == (e = this.lineCmp) || e.clear(),
                    u.stopAllByTarget(
                      null == (i = this.lineCmp) ? void 0 : i.node
                    );
                  var l = 0,
                    r = 0;
                  n.forEach(function (e) {
                    var i;
                    s(null == (i = o.lineCmp) ? void 0 : i.node)
                      .sequence(
                        s().delay(r),
                        s().call(function () {
                          var t;
                          (o.playFxLine(e),
                          o.drawLine(e, !0),
                          ++l >= n.length) &&
                            s(null == (t = o.lineCmp) ? void 0 : t.node)
                              .delay(1)
                              .call(function () {
                                var n;
                                o.playFx(),
                                  null == (n = o.lineCmp) || n.clear();
                              })
                              .start();
                        })
                      )
                      .start(),
                      (r += t);
                  });
                }),
                (l.drawLine = function (n, e) {
                  var i = this,
                    o = t.LINE[n];
                  if (o) {
                    var l,
                      r = o.map(function (n, t) {
                        var e = i.colums[t];
                        return null == e ? void 0 : e.getLineWorldPosition()[n];
                      });
                    if (this.line_nodes) {
                      var c = this.line_nodes[n];
                      if (n < 13) {
                        var a = c.parent
                          .getComponent(p)
                          .convertToWorldSpaceAR(new f(c.position));
                        r.splice(0, 0, new f(a));
                      } else {
                        var u = c.parent
                          .getComponent(p)
                          .convertToWorldSpaceAR(new f(c.position));
                        r.push(new f(u));
                      }
                    }
                    null == (l = this.lineCmp) ||
                      l.draw(
                        r.map(function (n) {
                          return new h(n.x, n.y);
                        }),
                        5,
                        new d("#FFE738"),
                        null,
                        e
                      );
                  }
                }),
                (l.playFxLine = function (n) {
                  var e = this,
                    i = t.LINE[n];
                  i &&
                    i.forEach(function (n, t) {
                      var i = e.colums[t];
                      null == i || i.playFx(n);
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
                      null == i || i.playFx(n, !1);
                    });
                  });
                }),
                t
              );
            })(m)).SPIN_SPEED = 2e3),
            (W.TIME_TO_SHOW_RESULT = 0.5),
            (W.FIXED_DELTA_TIME = 0.016666000000004715),
            (W.LINE = [
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
            (T = t((L = W).prototype, "colums", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (I = t(L.prototype, "lineCmp", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = t(L.prototype, "line_nodes", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (_ = L))
          ) || _)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCity_SlotMachineColumn.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BigCityFullScreenGameView.ts",
    "./BigCity_SlotMachineCmp.ts",
    "./BigCity_SlotMachineItemView.ts",
  ],
  function (t) {
    "use strict";
    var i, n, e, o, s, r, a, c, l, h, u, p, m, _, f, y;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (s = t.cclegacy),
            (r = t._decorator),
            (a = t.Node),
            (c = t.Layout),
            (l = t.Sprite),
            (h = t.UITransform),
            (u = t.Vec3),
            (p = t.tween),
            (m = t.Component);
        },
        function (t) {
          _ = t.BigCityFullScreenGameView;
        },
        function (t) {
          f = t.default;
        },
        function (t) {
          y = t.default;
        },
      ],
      execute: function () {
        var d, g, S, C, E, I, v, b, w, P, T, N, O;
        t("SlotMachineState", void 0),
          s._RF.push(
            {},
            "3e2d9k8/b5I/52G+zgWE4U+",
            "BigCity_SlotMachineColumn",
            void 0
          );
        var F,
          k = r.ccclass,
          D = r.property;
        !(function (t) {
          (t[(t.SPINNING = 0)] = "SPINNING"),
            (t[(t.CHECK_TO_STOP = 1)] = "CHECK_TO_STOP"),
            (t[(t.STOPPING = 2)] = "STOPPING"),
            (t[(t.STOPPED = 3)] = "STOPPED");
        })(F || (F = t("SlotMachineState", {})));
        t(
          "default",
          ((d = k("BigCity_SlotMachineColumn")),
          (g = D([a])),
          (S = D(a)),
          (C = D(y)),
          (E = D([y])),
          (I = D(c)),
          d(
            ((w = i(
              (b = (function (t) {
                function i() {
                  for (
                    var i, n = arguments.length, s = new Array(n), r = 0;
                    r < n;
                    r++
                  )
                    s[r] = arguments[r];
                  return (
                    (i = t.call.apply(t, [this].concat(s)) || this),
                    e(i, "items", w, o(i)),
                    e(i, "lineNode", P, o(i)),
                    e(i, "wild_item", T, o(i)),
                    e(i, "sticky_wild_items", N, o(i)),
                    e(i, "layout", O, o(i)),
                    (i.state = F.STOPPED),
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
                    var t;
                    return null == (t = this.lineNode)
                      ? void 0
                      : t.getComponentsInChildren(l).map(function (t) {
                          var i;
                          return null == (i = t.node.parent)
                            ? void 0
                            : i
                                .getComponent(h)
                                .convertToWorldSpaceAR(new u(t.node.position));
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
                    (this.state = F.STOPPED),
                      this.items.forEach(function (t) {
                        t.getComponentsInChildren(y).forEach(function (t) {
                          return t.init();
                        });
                      });
                    var t = this.getBottomItem();
                    this.items.forEach(function (i) {
                      var n = i.getComponentsInChildren(y);
                      i.name != (null == t ? void 0 : t.name)
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
                      (this.state = F.SPINNING),
                      (this.wild_item.node.active = !1);
                  }),
                  (s.stop = function (t) {
                    (this.item_top = this.getTopItem()),
                      this.item_top
                        .getComponentsInChildren(y)
                        .forEach(function (i, n) {
                          i.setItem(t[n]), i.bright();
                        }),
                      (this.state = F.CHECK_TO_STOP);
                  }),
                  (s.getstate = function () {
                    return this.state;
                  }),
                  (s.update = function (t) {
                    switch (this.state) {
                      case F.SPINNING:
                        this.spinning(t);
                        break;
                      case F.CHECK_TO_STOP:
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
                      var e = new u(t.position);
                      (e.y -= f.SPIN_SPEED * f.FIXED_DELTA_TIME),
                        e.y <= i.item_position_y_limited &&
                          ((e.y = i.item_position_y_top), (n = !0)),
                        (t.position = e);
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
                      var n = new u(t.position);
                      (n.y -= f.SPIN_SPEED * f.FIXED_DELTA_TIME),
                        n.y <= i.item_position_y_limited &&
                          (n.y = i.item_position_y_top),
                        (t.position = n);
                    }),
                      this.item_top.position.y <= this.item_position_y_stop &&
                        (this.bounce(), (this.state = F.STOPPING));
                  }),
                  (s.bounce = function () {
                    var t,
                      i = this;
                    this.sort();
                    var n = new u(this.item_top.position);
                    (n.y = this.item_position_y_stop),
                      null == (t = this.item_top) || t.setPosition(n),
                      this.items.forEach(function (t, n) {
                        if (t.name != i.item_top.name) {
                          var e = new u(t.position);
                          (e.y =
                            0 == n
                              ? i.items[n + 1].position.y -
                                (i.layout.spacingY +
                                  i.items[n + 1].getComponent(h).contentSize
                                    .height)
                              : i.items[n - 1].position.y +
                                i.layout.spacingY +
                                i.items[n - 1].getComponent(h).contentSize
                                  .height),
                            (t.position = e);
                        }
                      });
                    var e =
                      Math.abs(this.item_position_y_stop) -
                      Math.abs(this.item_position_y_bottom);
                    this.items.forEach(function (t) {
                      p(t)
                        .sequence(
                          p().by(0.1, { position: new u(0, e, 0) }),
                          p().call(function () {
                            var t, n;
                            null == (t = _.getInstance()) ||
                              t.playColumnStopEnd(),
                              (i.state = F.STOPPED),
                              null != (n = _.getInstance()) && n.isFastSpin()
                                ? i.items.forEach(function (t) {
                                    var n = t.getComponentsInChildren(y);
                                    t.name != i.item_top.name &&
                                      n.forEach(function (t, i) {
                                        t.disable();
                                      });
                                  })
                                : i.items.forEach(function (t) {
                                    var n = t.getComponentsInChildren(y);
                                    t.name != i.item_top.name
                                      ? n.forEach(function (t, i) {
                                          t.disable();
                                        })
                                      : n.forEach(function (t, i) {
                                          t.playFx();
                                        });
                                  });
                          }),
                          p()
                            .delay(0.3)
                            .call(function () {
                              i.onStopped && i.onStopped();
                            })
                        )
                        .start();
                    });
                  }),
                  (s.showWild = function (t) {
                    var i,
                      n,
                      e,
                      o,
                      s = this,
                      r = this.item_top.getComponentsInChildren(y),
                      a = r.filter(function (t) {
                        return t.isWild();
                      }),
                      c = [];
                    (r.forEach(function (t, i) {
                      t.isWild() && c.push(i);
                    }),
                    null != (i = _.getInstance()) && i.IsFreeSpin())
                      ? c.forEach(function (t) {
                          var i;
                          s.sticky_wild_items &&
                            s.sticky_wild_items[t] &&
                            (null == (i = s.sticky_wild_items[t]) ||
                              i.playStickyWildFx());
                        })
                      : a.length > 0 &&
                        (this.wild_item && (this.wild_item.node.active = !0),
                        null == (n = this.wild_item) ||
                          n.setItem(null == (e = a[0]) ? void 0 : e.getItem()),
                        null == (o = this.wild_item) || o.playWildFx(),
                        t && t());
                  }),
                  (s.hasWild = function () {
                    var t,
                      i =
                        null == (t = this.item_top)
                          ? void 0
                          : t.getComponentsInChildren(y),
                      n = [];
                    return (
                      i &&
                        i.length >= 0 &&
                        (n = i.filter(function (t) {
                          return t.isWild();
                        })),
                      n.length > 0
                    );
                  }),
                  (s.hideWild = function () {
                    this.wild_item && (this.wild_item.node.active = !1);
                  }),
                  (s.hideAllStickyWild = function () {
                    var t;
                    null == (t = this.sticky_wild_items) ||
                      t.forEach(function (t) {
                        t.hideStickyWildFx();
                      });
                  }),
                  (s.playFx = function (t, i) {
                    void 0 === i && (i = !0);
                    var n = this.getBottomItem();
                    (n ? n.getComponentsInChildren(y) : []).forEach(function (
                      n,
                      e
                    ) {
                      e == t ? n.playFx() : i && n.gray();
                    });
                  }),
                  i
                );
              })(m)).prototype,
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
            (P = i(b.prototype, "lineNode", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = i(b.prototype, "wild_item", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = i(b.prototype, "sticky_wild_items", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (O = i(b.prototype, "layout", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = b))
          ) || v)
        );
        s._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCity_SlotMachineItemView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BigCityFullScreenGameView.ts",
    "./GameUtils.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, r, s, a, m, l, o, u, c, _;
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
            (a = e._decorator),
            (m = e.Sprite),
            (l = e.sp),
            (o = e.Color),
            (u = e.Component);
        },
        function (e) {
          c = e.BigCityFullScreenGameView;
        },
        function (e) {
          _ = e.default;
        },
      ],
      execute: function () {
        var d, h, p, f, g, v, I;
        s._RF.push(
          {},
          "3c674zhgv9NlJZZuI6xxe9B",
          "BigCity_SlotMachineItemView",
          void 0
        );
        var b = a.ccclass,
          F = a.property,
          y = e(
            "BigCityItem",
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
                  var t = c.getInstance().getBetIndex() + 1;
                  return (
                    t > 3 && (t = 3),
                    "pvz_symbol_" +
                      t +
                      "_" +
                      this.code.toString() +
                      (e ? ".png" : "")
                  );
                }),
                (t.getResourceBetHistoryNormalName = function (e, t) {
                  return (
                    void 0 === t && (t = !1),
                    e > 3 && (e = 3),
                    "pvz_symbol_" +
                      e +
                      "_" +
                      this.code.toString() +
                      (t ? ".png" : "")
                  );
                }),
                (t.getResourceBlurName = function (e) {
                  void 0 === e && (e = !1);
                  var t = c.getInstance().getBetIndex() + 1;
                  return (
                    t > 3 && (t = 3),
                    "pvz_symbol_blur_" +
                      t +
                      "_" +
                      this.code.toString() +
                      (e ? ".png" : "")
                  );
                }),
                (t.getResourceFreeNormalName = function (e) {
                  return (
                    void 0 === e && (e = !1),
                    "pvz_symbol_free_" +
                      this.code.toString() +
                      (e ? ".png" : "")
                  );
                }),
                (t.getResourceFreeBlurName = function (e) {
                  return (
                    void 0 === e && (e = !1),
                    "pvz_symbol_free_blur_" +
                      this.code.toString() +
                      (e ? ".png" : "")
                  );
                }),
                e
              );
            })()
          );
        e(
          "default",
          ((d = b("BigCity_SlotMachineItemView")),
          (h = F(m)),
          (p = F(l.Skeleton)),
          d(
            ((v = t(
              (g = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, s = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    s[a] = arguments[a];
                  return (
                    (t = e.call.apply(e, [this].concat(s)) || this),
                    n(t, "spr_item", v, r(t)),
                    n(t, "anim_item", I, r(t)),
                    (t.item = null),
                    t
                  );
                }
                i(t, e);
                var s = t.prototype;
                return (
                  (s.init = function () {
                    (this.item = new y()),
                      this.item.decodeItem(_.getRandomInt(1, 11)),
                      this.bright();
                  }),
                  (s.setItem = function (e) {
                    null != e && (this.item = e);
                  }),
                  (s.gray = function () {
                    var e;
                    if (
                      (this.disable(!1),
                      this.spr_item && (this.spr_item.enabled = !0),
                      this.anim_item && (this.anim_item.enabled = !1),
                      null != (e = c.getInstance()) && e.IsFreeSpin())
                    ) {
                      var t,
                        i,
                        n =
                          null == (t = this.item)
                            ? void 0
                            : t.getResourceFreeNormalName(),
                        r =
                          null == (i = c.getInstance())
                            ? void 0
                            : i.loaded_item_free_normal.filter(function (e) {
                                return e.name.indexOf(n) >= 0;
                              })[0];
                      r && (this.spr_item.spriteFrame = r);
                    } else {
                      var s,
                        a,
                        m =
                          null == (s = this.item)
                            ? void 0
                            : s.getResourceNormalName(),
                        l =
                          null == (a = c.getInstance())
                            ? void 0
                            : a.loaded_item_normal.filter(function (e) {
                                return e.name.indexOf(m) >= 0;
                              })[0];
                      l && this.spr_item && (this.spr_item.spriteFrame = l);
                    }
                    this.spr_item &&
                      (this.spr_item.color = new o(150, 150, 150, 255));
                  }),
                  (s.disable = function (e) {
                    void 0 === e && (e = !0), (this.node.active = !e);
                  }),
                  (s.blur = function () {
                    var e;
                    if (
                      (this.disable(!1),
                      this.spr_item && (this.spr_item.enabled = !0),
                      this.anim_item && (this.anim_item.enabled = !1),
                      null != (e = c.getInstance()) && e.IsFreeSpin())
                    ) {
                      var t,
                        i,
                        n =
                          null == (t = this.item)
                            ? void 0
                            : t.getResourceFreeBlurName(),
                        r =
                          null == (i = c.getInstance())
                            ? void 0
                            : i.loaded_item_free_blur.filter(function (e) {
                                return e.name.indexOf(n) >= 0;
                              })[0];
                      r && (this.spr_item.spriteFrame = r);
                    } else {
                      var s,
                        a,
                        m =
                          null == (s = this.item)
                            ? void 0
                            : s.getResourceBlurName(),
                        l =
                          null == (a = c.getInstance())
                            ? void 0
                            : a.loaded_item_blur.filter(function (e) {
                                return e.name.indexOf(m) >= 0;
                              })[0];
                      l && (this.spr_item.spriteFrame = l);
                    }
                    this.spr_item && (this.spr_item.color = o.WHITE);
                  }),
                  (s.bright = function () {
                    var e;
                    if (
                      (this.disable(!1),
                      this.spr_item && (this.spr_item.enabled = !0),
                      null != this.anim_item && (this.anim_item.enabled = !1),
                      null != (e = c.getInstance()) && e.IsFreeSpin())
                    ) {
                      var t,
                        i,
                        n =
                          null == (t = this.item)
                            ? void 0
                            : t.getResourceFreeNormalName(),
                        r =
                          null == (i = c.getInstance())
                            ? void 0
                            : i.loaded_item_free_normal.filter(function (e) {
                                return e.name.indexOf(n) >= 0;
                              })[0];
                      r && this.spr_item && (this.spr_item.spriteFrame = r);
                    } else {
                      var s,
                        a,
                        m =
                          null == (s = this.item)
                            ? void 0
                            : s.getResourceNormalName(),
                        l =
                          null == (a = c.getInstance())
                            ? void 0
                            : a.loaded_item_normal.filter(function (e) {
                                return e.name.indexOf(m) >= 0;
                              })[0];
                      l && this.spr_item && (this.spr_item.spriteFrame = l);
                    }
                    this.spr_item && (this.spr_item.color = o.WHITE);
                  }),
                  (s.bright2 = function (e) {
                    var t;
                    if (
                      (this.disable(!1),
                      this.spr_item && (this.spr_item.enabled = !0),
                      null != this.anim_item && (this.anim_item.enabled = !1),
                      null != (t = c.getInstance()) && t.IsFreeSpin())
                    ) {
                      var i,
                        n,
                        r =
                          null == (i = this.item)
                            ? void 0
                            : i.getResourceFreeNormalName(),
                        s =
                          null == (n = c.getInstance())
                            ? void 0
                            : n.loaded_item_free_normal.filter(function (e) {
                                return e.name.indexOf(r) >= 0;
                              })[0];
                      s && this.spr_item && (this.spr_item.spriteFrame = s);
                    } else {
                      var a,
                        m,
                        l =
                          null == (a = this.item)
                            ? void 0
                            : a.getResourceBetHistoryNormalName(e),
                        u =
                          null == (m = c.getInstance())
                            ? void 0
                            : m.loaded_item_normal.filter(function (e) {
                                return e.name.indexOf(l) >= 0;
                              })[0];
                      u && this.spr_item && (this.spr_item.spriteFrame = u);
                    }
                    this.spr_item && (this.spr_item.color = o.WHITE);
                  }),
                  (s.playFx = function () {
                    var e,
                      t,
                      i,
                      n,
                      r = this;
                    if (
                      !(
                        null == this.anim_item ||
                        this.isWild() ||
                        (null != (e = c.getInstance()) && e.IsFreeSpin())
                      )
                    ) {
                      if (
                        (this.disable(!1),
                        (this.anim_item.enabled = !0),
                        this.spr_item && (this.spr_item.enabled = !1),
                        null != (t = c.getInstance()) && t.IsFreeSpin())
                      ) {
                        var s,
                          a =
                            null == (s = c.getInstance())
                              ? void 0
                              : s.loaded_free_anim_item[this.item.code];
                        a && (this.anim_item.skeletonData = a);
                      } else {
                        var m,
                          l,
                          o =
                            null == (m = c.getInstance())
                              ? void 0
                              : m.getBetIndex();
                        o > 2 && (o = 2);
                        var u =
                          null == (l = c.getInstance())
                            ? void 0
                            : l.loaded_anim_item[11 * o + this.item.code];
                        u && (this.anim_item.skeletonData = u);
                      }
                      this.anim_item.setAnimation(0, "symbolFx", !1);
                      null == (i = this.anim_item) ||
                        i.setStartListener(function (e) {
                          e.animation && e.animation.name;
                        }),
                        null == (n = this.anim_item) ||
                          n.setCompleteListener(function (e) {
                            "symbolFx" ==
                              (e.animation ? e.animation.name : "") &&
                              setTimeout(function () {
                                var e;
                                null == (e = r.anim_item) ||
                                  e.setAnimation(0, "idle", !0);
                              }, 100);
                          });
                    }
                  }),
                  (s.playStickyWildFx = function () {
                    null != this.anim_item &&
                      ((this.anim_item.node.active = !0),
                      this.anim_item.setAnimation(0, "animation", !0));
                  }),
                  (s.hideStickyWildFx = function () {
                    null != this.anim_item && (this.anim_item.node.active = !1);
                  }),
                  (s.playWildFx = function () {
                    var e,
                      t,
                      i,
                      n,
                      r = this;
                    if (
                      !(
                        null == this.anim_item ||
                        (null != (e = c.getInstance()) && e.IsFreeSpin())
                      )
                    ) {
                      this.anim_item.enabled = !0;
                      var s =
                        null == (t = c.getInstance())
                          ? void 0
                          : t.loaded_anim_item[this.item.code];
                      s && (this.anim_item.skeletonData = s);
                      this.anim_item.setAnimation(0, "appear", !1);
                      null == (i = this.anim_item) ||
                        i.setStartListener(function (e) {
                          "appear" == (e.animation ? e.animation.name : "") &&
                            r.spr_item &&
                            (r.spr_item.enabled = !1);
                        }),
                        null == (n = this.anim_item) ||
                          n.setCompleteListener(function (e) {
                            "appear" == (e.animation ? e.animation.name : "") &&
                              setTimeout(function () {
                                var e;
                                null == (e = r.anim_item) ||
                                  e.setAnimation(0, "loop", !0);
                              }, 100);
                          });
                    }
                  }),
                  (s.setSpriteFrame = function (e) {
                    var t = e;
                    t && this.spr_item && (this.spr_item.spriteFrame = t);
                  }),
                  (s.isWild = function () {
                    var e;
                    return null != (e = c.getInstance()) && e.IsFreeSpin()
                      ? 0 == this.item.code
                      : 0 == this.item.code ||
                          11 == this.item.code ||
                          12 == this.item.code;
                  }),
                  (s.getSkeletonData = function () {
                    var e;
                    return null == (e = c.getInstance())
                      ? void 0
                      : e.loaded_anim_item[this.item.code];
                  }),
                  (s.getItem = function () {
                    return this.item;
                  }),
                  t
                );
              })(u)).prototype,
              "spr_item",
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
  "chunks:///_virtual/BigCityBetHistoryDetail.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BigCity_SlotMachineCmp.ts",
    "./BigCity_SlotMachineItemView.ts",
    "./LineCmp.ts",
  ],
  function (e) {
    "use strict";
    var t, i, n, o, l, r, a, c, s, u, p, d, f, h, b, w, m, v, y, g, _;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy),
            (r = e._decorator),
            (a = e.Label),
            (c = e.Button),
            (s = e.sp),
            (u = e.Tween),
            (p = e.tween),
            (d = e.log),
            (f = e.Vec3),
            (h = e.UITransform),
            (b = e.Vec2),
            (w = e.Color),
            (m = e.Component);
        },
        function (e) {
          v = e.default;
        },
        function (e) {
          (y = e.default), (g = e.BigCityItem);
        },
        function (e) {
          _ = e.default;
        },
      ],
      execute: function () {
        var B, C, S, I, k, L, M, V, E, z, D, T, A;
        l._RF.push(
          {},
          "4a006zWRUtLBYkogF2cnR7K",
          "BigCityBetHistoryDetail",
          void 0
        );
        var F = r.ccclass,
          R = r.property;
        e(
          "default",
          ((B = F("BigCityBetHistoryDetail")),
          (C = R(a)),
          (S = R(c)),
          (I = R(_)),
          (k = R([y])),
          (L = R([s.Skeleton])),
          B(
            ((E = t(
              (V = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, l = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    l[r] = arguments[r];
                  return (
                    (t = e.call.apply(e, [this].concat(l)) || this),
                    n(t, "lbl_phien", E, o(t)),
                    n(t, "btn_prev", z, o(t)),
                    n(t, "lineCmp", D, o(t)),
                    n(t, "diablo_SlotMachineItemView", T, o(t)),
                    n(t, "wilds", A, o(t)),
                    (t.onBack = null),
                    t
                  );
                }
                i(t, e);
                var l = t.prototype;
                return (
                  (l.onLoad = function () {
                    var e,
                      t = this;
                    null == (e = this.btn_prev) ||
                      e.node.on("click", function () {
                        return t.onBack && t.onBack();
                      });
                  }),
                  (l.show = function (e, t, i, n) {
                    var o = this;
                    this.lbl_phien &&
                      (this.lbl_phien.string = "#" + e.toString()),
                      this.wilds.forEach(function (e) {
                        e.node.active = !1;
                      }),
                      t
                        .map(function (e) {
                          var t = new g();
                          return t.decodeItem(e), t;
                        })
                        .forEach(function (e, t) {
                          var i, l, r;
                          null == (i = o.diablo_SlotMachineItemView[t]) ||
                            i.setItem(e);
                          var a = 1;
                          switch (n) {
                            case 1e3:
                              a = 1;
                              break;
                            case 1e4:
                              a = 2;
                              break;
                            case 1e5:
                              a = 3;
                          }
                          if (
                            (null == (l = o.diablo_SlotMachineItemView[t]) ||
                              l.bright2(a),
                            null != (r = o.diablo_SlotMachineItemView[t]) &&
                              r.isWild())
                          ) {
                            var c = t % 5;
                            o.wilds.length > 0 && (o.wilds[c].node.active = !0);
                            var s =
                              o.diablo_SlotMachineItemView[t].getSkeletonData();
                            s && (o.wilds[c].skeletonData = s),
                              setTimeout(function () {
                                var e;
                                null == (e = o.wilds[c]) ||
                                  e.setAnimation(0, "loop", !0);
                              }, 100);
                          }
                        }),
                      (this.node.active = !0),
                      this.showEachLines(i, 2.5);
                  }),
                  (l.showEachLines = function (e, t) {
                    var i,
                      n = this;
                    void 0 === t && (t = 0),
                      null == (i = this.lineCmp) || i.clear(),
                      u.stopAllByTarget(this.lineCmp.node);
                    var o = 0;
                    e.forEach(function (e) {
                      p(n.lineCmp.node)
                        .sequence(
                          p().delay(o),
                          p().call(function () {
                            n.drawLine(e, !0);
                          })
                        )
                        .start(),
                        (o += t);
                    });
                  }),
                  (l.drawLine = function (e, t) {
                    var i = this,
                      n = v.LINE[e];
                    if ((d(JSON.stringify(n)), n)) {
                      var o = n.map(function (e, t) {
                        var n = i.diablo_SlotMachineItemView[t + 5 * e];
                        return (
                          u.stopAllByTarget(n.node),
                          n.node.setScale(f.ONE),
                          p(n.node)
                            .sequence(
                              p().to(1, { scale: new f(1.1, 1.1, 1.1) }),
                              p().to(1, { scale: f.ONE })
                            )
                            .start(),
                          n.node.parent
                            .getComponent(h)
                            .convertToWorldSpaceAR(n.node.position)
                        );
                      });
                      this.lineCmp.draw(
                        o.map(function (e) {
                          return new b(e.x, e.y);
                        }),
                        5,
                        new w("#FFE738"),
                        this.node.parent.parent,
                        t
                      );
                    }
                  }),
                  t
                );
              })(m)).prototype,
              "lbl_phien",
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
            (z = t(V.prototype, "btn_prev", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (D = t(V.prototype, "lineCmp", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (T = t(V.prototype, "diablo_SlotMachineItemView", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (A = t(V.prototype, "wilds", [L], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (M = V))
          ) || M)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCityBetHistoryItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var i, e, n, o, h, _, r, c, s, u, l;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (h = t.cclegacy),
            (_ = t._decorator),
            (r = t.Label),
            (c = t.Button),
            (s = t.Color),
            (u = t.Component);
        },
        function (t) {
          l = t.StringUtils;
        },
      ],
      execute: function () {
        var a, p, x, g, b, d, f, m, v, y, w, z, B, S, I, C, H, L, R;
        h._RF.push(
          {},
          "3ad0f/Rf2dL275KuR5IBjJE",
          "BigCityBetHistoryItemView",
          void 0
        );
        var D = _.ccclass,
          V = _.property;
        t(
          "default",
          ((a = D("BigCityBetHistoryItemView")),
          (p = V(r)),
          (x = V(r)),
          (g = V(r)),
          (b = V(r)),
          (d = V(r)),
          (f = V(r)),
          (m = V(c)),
          (v = V(r)),
          a(
            ((z = i(
              (w = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, h = new Array(e), _ = 0;
                    _ < e;
                    _++
                  )
                    h[_] = arguments[_];
                  return (
                    (i = t.call.apply(t, [this].concat(h)) || this),
                    n(i, "txt_phien_title", z, o(i)),
                    n(i, "txt_phien_time", B, o(i)),
                    n(i, "txt_phien_datcuoc", S, o(i)),
                    n(i, "txt_phien_solinecuoc", I, o(i)),
                    n(i, "txt_phien_tongcuoc", C, o(i)),
                    n(i, "txt_phien_solinetrung", H, o(i)),
                    n(i, "btn_chitiet", L, o(i)),
                    n(i, "txt_phien_tienthang", R, o(i)),
                    i
                  );
                }
                e(i, t);
                var h = i.prototype;
                return (
                  (h.show = function (t, i, e, n, o, h, _, r, c, u) {
                    var a;
                    this.txt_phien_title &&
                      (this.txt_phien_title.string = "#" + t.toString()),
                      this.txt_phien_time &&
                        (this.txt_phien_time.string = i.toString()),
                      this.txt_phien_datcuoc &&
                        (this.txt_phien_datcuoc.string = l.formatNumber(e)),
                      this.txt_phien_solinecuoc &&
                        (this.txt_phien_solinecuoc.string = n.toString()),
                      this.txt_phien_tongcuoc &&
                        (this.txt_phien_tongcuoc.string = o.toString()),
                      this.txt_phien_solinetrung &&
                        (this.txt_phien_solinetrung.string = h.toString()),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.color = s.WHITE),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.string = l.formatNumber(_)),
                      null == (a = this.btn_chitiet) ||
                        a.node.on("click", function () {
                          u && u(t, r, c, e);
                        }),
                      this.btn_chitiet &&
                        (this.btn_chitiet.node.active = n > 0),
                      this.txt_phien_title &&
                        (this.txt_phien_title.node.active = !0),
                      this.txt_phien_time &&
                        (this.txt_phien_time.node.active = !0),
                      this.txt_phien_datcuoc &&
                        (this.txt_phien_datcuoc.node.active = !0),
                      this.txt_phien_solinecuoc &&
                        (this.txt_phien_solinecuoc.node.active = !0),
                      this.txt_phien_tongcuoc &&
                        (this.txt_phien_tongcuoc.node.active = !0),
                      this.txt_phien_solinetrung &&
                        (this.txt_phien_solinetrung.node.active = !0),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.node.active = !0);
                  }),
                  (h.hide = function () {
                    this.txt_phien_title &&
                      (this.txt_phien_title.node.active = !1),
                      this.txt_phien_time &&
                        (this.txt_phien_time.node.active = !1),
                      this.txt_phien_datcuoc &&
                        (this.txt_phien_datcuoc.node.active = !1),
                      this.txt_phien_solinecuoc &&
                        (this.txt_phien_solinecuoc.node.active = !1),
                      this.txt_phien_tongcuoc &&
                        (this.txt_phien_tongcuoc.node.active = !1),
                      this.txt_phien_solinetrung &&
                        (this.txt_phien_solinetrung.node.active = !1),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.node.active = !1);
                  }),
                  i
                );
              })(u)).prototype,
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
            (B = i(w.prototype, "txt_phien_time", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = i(w.prototype, "txt_phien_datcuoc", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = i(w.prototype, "txt_phien_solinecuoc", [b], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = i(w.prototype, "txt_phien_tongcuoc", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = i(w.prototype, "txt_phien_solinetrung", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = i(w.prototype, "btn_chitiet", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = i(w.prototype, "txt_phien_tienthang", [v], {
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
        h._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCityBetHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BigCityBetHistoryDetail.ts",
    "./BigCityBetHistoryItemView.ts",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./HttpManager.ts",
    "./Define.ts",
    "./StringUtils.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, o, a, r, s, l, u, c, g, p, b, h, d, y, f, m;
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
          g = t.default;
        },
        function (t) {
          p = t.default;
        },
        function (t) {
          b = t.CommonPopup;
        },
        function (t) {
          h = t.GameConfigManager;
        },
        function (t) {
          (d = t.HttpCommand), (y = t.httpManager);
        },
        function (t) {
          f = t.GameID;
        },
        function (t) {
          m = t.StringUtils;
        },
      ],
      execute: function () {
        var B, v, _, w, H, D, C, L, P, T, N, I, S, z, k;
        a._RF.push(
          {},
          "d35cbtjNgpGeb8F8rgz77CA",
          "BigCityBetHistoryView",
          void 0
        );
        var x = r.ccclass,
          G = r.property,
          M = function () {
            (this.bet = 0),
              (this.sessionID = ""),
              (this.money = 0),
              (this.totalBet = 0),
              (this.numLines = 0),
              (this.symbols = []),
              (this.payoutLines = []),
              (this.betTime = "");
          };
        t(
          "default",
          ((B = x("BigCityBetHistoryView")),
          (v = G(s)),
          (_ = G(s)),
          (w = G(l)),
          (H = G(u)),
          (D = G(u)),
          (C = G([u])),
          B(
            ((T = e(
              (P = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, a = new Array(i), r = 0;
                    r < i;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (e = t.call.apply(t, [this].concat(a)) || this),
                    n(e, "btn_prev", T, o(e)),
                    n(e, "btn_next", N, o(e)),
                    n(e, "lbl_page", I, o(e)),
                    n(e, "diabloBetHistoryDetailNode", S, o(e)),
                    n(e, "diabloBetingNode", z, o(e)),
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
                var a = e.prototype;
                return (
                  (a.onLoad = function () {
                    var e,
                      i,
                      n,
                      o = this;
                    t.prototype.onLoad.call(this),
                      null == (e = this.btn_prev) ||
                        e.node.on("click", function () {
                          o.currentPage > 1 &&
                            ((o.currentPage -= 1),
                            o.lbl_page &&
                              (o.lbl_page.string = o.currentPage.toString())),
                            o.fetchHistory(!1);
                        }),
                      null == (i = this.btn_next) ||
                        i.node.on("click", function () {
                          o.currentPage < o.max_pages &&
                            ((o.currentPage += 1),
                            o.lbl_page &&
                              (o.lbl_page.string = o.currentPage.toString())),
                            o.fetchHistory(!1);
                        }),
                      (this.diabloBetHistoryDetail =
                        null == (n = this.diabloBetHistoryDetailNode)
                          ? void 0
                          : n.getComponent(g)),
                      (this.diabloBetHistoryDetail.onBack = function () {
                        o.backToBetting();
                      });
                  }),
                  (a.goToFirstPage = function () {
                    (this.currentPage = 1),
                      this.lbl_page &&
                        (this.lbl_page.string = this.currentPage.toString());
                  }),
                  (a.fetchHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0), t && this.goToFirstPage();
                    var i = 6 * (this.currentPage - 1),
                      n =
                        h.SAdomainURL +
                        d.BET_HISTORY_URL.replace(
                          "%gameid%",
                          f.BIGCITY.toString()
                        ).replace("%skip%", i.toString());
                    y.sendGET({
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
                              l = new M();
                            (l.sessionID = s.sessionId),
                              (l.bet = s.betting),
                              (l.money = s.money),
                              (l.totalBet = s.totalBet),
                              (l.numLines = s.numLines);
                            var u = s.createdTime,
                              c = new Date(u);
                            if (
                              ((l.betTime = m.formatTime(c)),
                              (l.symbols = []),
                              (l.payoutLines = []),
                              s.symbols)
                            )
                              for (var g = s.symbols, p = 0; p < g.length; p++)
                                l.symbols.push(g[p]);
                            for (
                              var b = s.payoutLines, h = 0;
                              h < b.length;
                              h++
                            ) {
                              var d = b[h].id;
                              l.payoutLines.push(d);
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
                          return t.getComponent(p);
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
                  (a.showDetail = function (t, e, i, n) {
                    var o;
                    this.diabloBetingNode &&
                      (this.diabloBetingNode.active = !1),
                      null == (o = this.diabloBetHistoryDetail) ||
                        o.show(t, e, i, n);
                  }),
                  (a.backToBetting = function () {
                    this.diabloBetingNode &&
                      (this.diabloBetingNode.active = !0),
                      this.diabloBetHistoryDetailNode &&
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
            (N = e(P.prototype, "btn_next", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = e(P.prototype, "lbl_page", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = e(P.prototype, "diabloBetHistoryDetailNode", [H], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = e(P.prototype, "diabloBetingNode", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = e(P.prototype, "item_nodes", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (L = P))
          ) || L)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCityBonusItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (e) {
    "use strict";
    var t, i, n, o, l, s, a, r, u, d, c, m, _, h, p;
    return {
      setters: [
        function (e) {
          (t = e.applyDecoratedDescriptor),
            (i = e.inheritsLoose),
            (n = e.initializerDefineProperty),
            (o = e.assertThisInitialized);
        },
        function (e) {
          (l = e.cclegacy),
            (s = e._decorator),
            (a = e.sp),
            (r = e.Sprite),
            (u = e.Button),
            (d = e.Label),
            (c = e.Tween),
            (m = e.Vec3),
            (_ = e.tween),
            (h = e.Component);
        },
        function (e) {
          p = e.StringUtils;
        },
      ],
      execute: function () {
        var b, f, y, v, g, w, B, k, P, S, A;
        l._RF.push(
          {},
          "dbb72oPE/VPN5w5hspOvWyn",
          "BigCityBonusItemView",
          void 0
        );
        var z = s.ccclass,
          C = s.property;
        e(
          "BigCityBonusItemView",
          ((b = z("BigCityBonusItemView")),
          (f = C(a.Skeleton)),
          (y = C(r)),
          (v = C(u)),
          (g = C(d)),
          b(
            ((k = t(
              (B = (function (e) {
                function t() {
                  for (
                    var t, i = arguments.length, l = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    l[s] = arguments[s];
                  return (
                    (t = e.call.apply(e, [this].concat(l)) || this),
                    n(t, "item_skeleton", k, o(t)),
                    n(t, "dead_item_node", P, o(t)),
                    n(t, "button", S, o(t)),
                    n(t, "lbl_amount", A, o(t)),
                    (t.index = 0),
                    (t.onClick = null),
                    t
                  );
                }
                i(t, e);
                var l = t.prototype;
                return (
                  (l.show = function (e) {
                    var t;
                    this.dead_item_node &&
                      (this.dead_item_node.node.active = !1),
                      c.stopAllByTarget(this.item_skeleton.node),
                      this.lbl_amount && (this.lbl_amount.node.active = !1),
                      (this.index = e),
                      (this.node.active = !0),
                      null == (t = this.item_skeleton) ||
                        t.setAnimation(0, "appear", !1);
                  }),
                  (l.setTimeScale = function (e) {
                    this.item_skeleton && (this.item_skeleton.timeScale = e);
                  }),
                  (l.open = function (e) {
                    if (e > 0) {
                      var t, i, n;
                      null == (t = this.item_skeleton) ||
                        t.setAnimation(0, "disappear", !1),
                        this.lbl_amount && (this.lbl_amount.node.active = !0),
                        c.stopAllByTarget(this.lbl_amount.node);
                      var o = new m(this.node.getPosition());
                      (o.y += 25),
                        null == (i = this.lbl_amount) || i.node.setPosition(o),
                        this.lbl_amount &&
                          (this.lbl_amount.string =
                            "+" + p.formatMoneyNumber(e)),
                        _(null == (n = this.lbl_amount) ? void 0 : n.node)
                          .by(0.5, { position: new m(0, 40, 0) })
                          .start();
                    } else {
                      var l, s, a, r;
                      null == (l = this.item_skeleton) ||
                        l.setAnimation(0, "disappear", !1),
                        this.dead_item_node &&
                          (this.dead_item_node.node.active = !0),
                        c.stopAllByTarget(this.dead_item_node.node),
                        null == (s = this.dead_item_node) ||
                          s.node.setPosition(this.node.getPosition()),
                        null == (a = this.dead_item_node) ||
                          a.node.setScale(m.ZERO),
                        _(null == (r = this.dead_item_node) ? void 0 : r.node)
                          .to(0.5, { scale: m.ONE }, { easing: "expoOut" })
                          .start();
                    }
                  }),
                  (l.hide = function () {
                    this.lbl_amount && (this.lbl_amount.node.active = !1),
                      this.dead_item_node &&
                        (this.dead_item_node.node.active = !1),
                      (this.node.active = !1);
                  }),
                  t
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
            (P = t(B.prototype, "dead_item_node", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = t(B.prototype, "button", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = t(B.prototype, "lbl_amount", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = B))
          ) || w)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCityBonusView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BigCityBonusItemView.ts",
    "./BigCityFullScreenGameView.ts",
    "./BigCitySummaryView.ts",
    "./StringUtils.ts",
    "./SoundManager.ts",
  ],
  function (t) {
    "use strict";
    var n, o, e, i, a, r, u, l, s, c, h, d, m, f, g, p, b, _, w, y, v;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (o = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (i = t.assertThisInitialized);
        },
        function (t) {
          (a = t.cclegacy),
            (r = t._decorator),
            (u = t.Node),
            (l = t.sp),
            (s = t.Label),
            (c = t.AudioClip),
            (h = t.AudioSource),
            (d = t.Tween),
            (m = t.Button),
            (f = t.tween),
            (g = t.Vec3),
            (p = t.Component);
        },
        function (t) {
          b = t.BigCityBonusItemView;
        },
        function (t) {
          _ = t.BigCityFullScreenGameView;
        },
        function (t) {
          w = t.BigCitySummaryView;
        },
        function (t) {
          y = t.StringUtils;
        },
        function (t) {
          v = t.SoundManager;
        },
      ],
      execute: function () {
        var C,
          N,
          D,
          I,
          S,
          B,
          k,
          A,
          x,
          M,
          T,
          V,
          z,
          W,
          E,
          G,
          R,
          F,
          P,
          L,
          H,
          O,
          K,
          U,
          q,
          X,
          Y,
          j,
          J,
          Q,
          Z,
          $,
          tt,
          nt,
          ot,
          et,
          it,
          at,
          rt,
          ut;
        a._RF.push({}, "4deb9bAaIJHDbfK88V3AErU", "BigCityBonusView", void 0);
        var lt = r.ccclass,
          st = r.property,
          ct = function () {
            (this.id = ""), (this.rate = 1);
          };
        t(
          "BigCityBonusView",
          ((C = lt("BigCityBonusView")),
          (N = st(u)),
          (D = st(u)),
          (I = st(l.Skeleton)),
          (S = st(w)),
          (B = st(s)),
          (k = st(u)),
          (A = st(u)),
          (x = st([l.Skeleton])),
          (M = st(s)),
          (T = st(u)),
          (V = st(s)),
          (z = st([u])),
          (W = st(c)),
          (E = st(c)),
          (G = st(c)),
          (R = st(c)),
          (F = st(c)),
          (P = st(h)),
          C(
            (((ut = (function (t) {
              function n() {
                for (
                  var n, o = arguments.length, a = new Array(o), r = 0;
                  r < o;
                  r++
                )
                  a[r] = arguments[r];
                return (
                  (n = t.call.apply(t, [this].concat(a)) || this),
                  e(n, "root", O, i(n)),
                  e(n, "background_sprite", K, i(n)),
                  e(n, "background_skeleton", U, i(n)),
                  e(n, "bigCitySummaryView", q, i(n)),
                  e(n, "amount", X, i(n)),
                  e(n, "countDownNode", Y, i(n)),
                  e(n, "outDoorNode", j, i(n)),
                  e(n, "outdoor", J, i(n)),
                  e(n, "lbl_countdown", Q, i(n)),
                  e(n, "totalWinNode", Z, i(n)),
                  e(n, "lbl_totalWin", $, i(n)),
                  e(n, "items", tt, i(n)),
                  e(n, "start_mini_game_sfx", nt, i(n)),
                  e(n, "touch_mini_game_outdoor_sfx", ot, i(n)),
                  e(n, "touch_mini_game_item_sfx", et, i(n)),
                  e(n, "touch_stop_mini_game_item_sfx", it, i(n)),
                  e(n, "touch_mini_game_outdoor_reveal_sfx", at, i(n)),
                  e(n, "bonus_audio_source", rt, i(n)),
                  (n.multiRate = 0),
                  (n.wonMNGItems = []),
                  (n.totalMiniGameWonMoney = 0),
                  (n.openedCount = 0),
                  (n.outdoorItemsPosX = [-270, 0, 270]),
                  (n.outdoorItemsPosY = [0, 0, 0]),
                  (n.timeCountDown = 0),
                  n
                );
              }
              o(n, t);
              var a = n.prototype;
              return (
                (a.onLoad = function () {
                  var t = this;
                  this.items.forEach(function (n, o) {
                    var e = o;
                    n.on("click", function () {
                      t.open(e);
                    });
                  }),
                    this.outdoor.forEach(function (n, o) {
                      var e = n,
                        i = o;
                      n.node.parent.on("click", function () {
                        t.openOutDoor(i, e);
                      });
                    });
                }),
                (a.openOutDoor = function (t, n) {
                  var o,
                    e,
                    i = this;
                  v.getInstance().playSfx(this.touch_mini_game_outdoor_sfx),
                    this.countDownNode && (this.countDownNode.active = !1),
                    d.stopAllByTarget(this.countDownNode),
                    d.stopAllByTarget(this.lbl_countdown.node);
                  var a = [],
                    r =
                      null == (o = _.getInstance())
                        ? void 0
                        : o.getBonusCount();
                  3 == r
                    ? (a.push(1), a.push(2), a.push(3))
                    : 4 == r
                    ? (a.push(2), a.push(3), a.push(4))
                    : (a.push(3), a.push(4), a.push(5));
                  for (var u = 0; u < a.length; u++)
                    if (a[u] == this.multiRate) {
                      a.splice(u, 1);
                      break;
                    }
                  this.outdoor.forEach(function (t) {
                    t.node.parent.getComponent(m).interactable = !1;
                  });
                  n.setAnimation(0, "x" + this.multiRate, !1);
                  var l = 2;
                  null != (e = _.getInstance()) && e.isFastSpin() && (l = 1),
                    d.stopAllByTarget(this.outDoorNode),
                    f(this.outDoorNode)
                      .delay(l)
                      .call(function () {
                        i.outdoor.forEach(function (n, o) {
                          if (o != t) {
                            var e = "x" + a.shift().toString() + "_hidden";
                            n.setAnimation(0, e, !1);
                          }
                        }),
                          v
                            .getInstance()
                            .playSfx(i.touch_mini_game_outdoor_reveal_sfx);
                      })
                      .delay(l)
                      .call(function () {
                        i.showTotalWinAfter(0);
                      })
                      .start();
                }),
                (a.show = function (t, n) {
                  var o,
                    e = this;
                  null == (o = this.bonus_audio_source) || o.play(),
                    v.getInstance().playSfx(this.start_mini_game_sfx),
                    this.countDownNode && (this.countDownNode.active = !1),
                    (this.timeCountDown = 2 == n ? 3 : 10),
                    (this.wonMNGItems = []),
                    (this.multiRate = 0),
                    (this.totalMiniGameWonMoney = 0),
                    (this.openedCount = 0),
                    (this.multiRate = t.rate);
                  for (var i = t.items, a = t.stg, r = 0; r < i.length; r++) {
                    for (var u = i[r], l = 0, s = 0; s < a.length; s++) {
                      var c = a[s],
                        h = c.id,
                        g = c.b2;
                      if (h == u) {
                        l = g;
                        break;
                      }
                    }
                    var p = new ct();
                    (p.id = u), (p.rate = l), this.wonMNGItems.push(p);
                  }
                  (this.totalMiniGameWonMoney = t.m),
                    this.root && (this.root.active = !0),
                    d.stopAllByTarget(this.node);
                  for (var w = 0, C = 0; C < this.wonMNGItems.length; C++) {
                    w +=
                      this.wonMNGItems[C].rate * _.getInstance().getTotalBet();
                  }
                  this.amount &&
                    (this.amount.string =
                      y.formatNumber(w) +
                      " x " +
                      this.multiRate +
                      " = " +
                      y.formatNumber(this.totalMiniGameWonMoney));
                  var N = _.getInstance().isFastSpin() ? 2 : 4;
                  this.background_sprite &&
                    (this.background_sprite.active = !1),
                    this.background_skeleton &&
                      (this.background_skeleton.node.active = !0),
                    f(this.node)
                      .call(function () {
                        var t, o;
                        e.background_skeleton &&
                          (e.background_skeleton.timeScale = n),
                          null == (t = e.background_skeleton) ||
                            t.setAnimation(0, "appear", !1),
                          null == (o = e.background_skeleton) ||
                            o.addAnimation(0, "pvz_bonus", !0),
                          e.items.forEach(function (t, o) {
                            var e;
                            null == (e = t.getComponent(b)) ||
                              e.setTimeScale(n);
                          }),
                          e.outdoor.forEach(function (t) {
                            t.timeScale = n;
                          });
                      })
                      .delay(N)
                      .call(function () {
                        e.countDownAfter(3),
                          e.items.forEach(function (t, n) {
                            var o;
                            null == (o = t.getComponent(b)) || o.show(n);
                          }),
                          e.totalWinNode && (e.totalWinNode.active = !0),
                          e.lbl_totalWin && (e.lbl_totalWin.string = "0"),
                          e.background_sprite &&
                            (e.background_sprite.active = !0),
                          e.background_skeleton &&
                            (e.background_skeleton.node.active = !1);
                      })
                      .start(),
                    this.outdoor.forEach(function (t) {
                      (t.node.parent.active = !1),
                        (t.node.parent.getComponent(m).interactable = !0);
                    }),
                    f(this.node)
                      .delay(1)
                      .call(function () {
                        var t;
                        null == (t = _.getInstance()) ||
                          t.hideMainImmediately();
                      })
                      .start();
                }),
                (a.open = function (t) {
                  var n,
                    o = this;
                  if (this.openedCount >= this.wonMNGItems.length - 1) {
                    var e;
                    this.openedCount == this.wonMNGItems.length - 1 &&
                      (null == (e = this.items[t]) || e.getComponent(b).open(0),
                      this.openedCount++,
                      v
                        .getInstance()
                        .playSfx(this.touch_stop_mini_game_item_sfx));
                  } else {
                    v.getInstance().playSfx(this.touch_mini_game_item_sfx);
                    for (var i = 0, a = 0; a <= this.openedCount; a++) {
                      i +=
                        this.wonMNGItems[a].rate *
                        _.getInstance().getTotalBet();
                    }
                    this.lbl_totalWin &&
                      (this.lbl_totalWin.string = y.formatNumber(i));
                    var r =
                      this.wonMNGItems[this.openedCount].rate *
                      _.getInstance().getTotalBet();
                    if (
                      (null == (n = this.items[t]) || n.getComponent(b).open(r),
                      this.openedCount++,
                      (r =
                        this.wonMNGItems[this.openedCount].rate *
                        _.getInstance().getTotalBet()) > 0)
                    )
                      this.countDownAfter(1.5);
                    else {
                      var u, l;
                      this.countDownNode && (this.countDownNode.active = !1),
                        d.stopAllByTarget(this.countDownNode),
                        d.stopAllByTarget(
                          null == (u = this.lbl_countdown) ? void 0 : u.node
                        );
                      var s = 3.5;
                      null != (l = _.getInstance()) &&
                        l.isFastSpin() &&
                        (s = 2),
                        f(this.outDoorNode)
                          .delay(s)
                          .call(function () {
                            o.showOutDoor();
                          })
                          .start();
                    }
                  }
                }),
                (a.showOutDoor = function () {
                  var t = this;
                  this.items.forEach(function (t) {
                    var n;
                    null == (n = t.getComponent(b)) || n.hide();
                  }),
                    this.totalWinNode && (this.totalWinNode.active = !1);
                  var n = [];
                  this.outdoorItemsPosX.forEach(function (o, e) {
                    var i = new g(o, t.outdoorItemsPosY[e], 0);
                    n.push(i);
                  }),
                    this.outdoor.forEach(function (t, o) {
                      t.node.parent.setPosition(n[o]),
                        (t.node.parent.active = !0),
                        t.setAnimation(0, "idle", !1);
                    }),
                    this.countDownAfter(4);
                }),
                (a.countDownAfter = function (t) {
                  var n,
                    o = this;
                  this.countDownNode && (this.countDownNode.active = !1),
                    d.stopAllByTarget(this.countDownNode),
                    d.stopAllByTarget(
                      null == (n = this.lbl_countdown) ? void 0 : n.node
                    ),
                    f(this.countDownNode)
                      .sequence(
                        f().delay(t),
                        f().call(function () {
                          var t, n;
                          o.countDownNode && (o.countDownNode.active = !0);
                          var e = o.timeCountDown;
                          f(null == (t = o.lbl_countdown) ? void 0 : t.node)
                            .repeat(
                              e + 1,
                              f(null == (n = o.lbl_countdown) ? void 0 : n.node)
                                .call(function () {
                                  o.lbl_countdown &&
                                    (o.lbl_countdown.string =
                                      e.toString().length >= 2
                                        ? e.toString()
                                        : "0" + e.toString());
                                })
                                .delay(1)
                                .call(function () {
                                  (e -= 1) < 0 && o.showTotalWinAfter(0);
                                })
                            )
                            .start();
                        })
                      )
                      .start();
                }),
                (a.showTotalWinAfter = function (t) {
                  var n,
                    o,
                    e,
                    i = this;
                  this.countDownNode && (this.countDownNode.active = !1),
                    this.totalWinNode && (this.totalWinNode.active = !1),
                    d.stopAllByTarget(this.countDownNode),
                    d.stopAllByTarget(
                      null == (n = this.lbl_countdown) ? void 0 : n.node
                    ),
                    d.stopAllByTarget(
                      null == (o = this.bigCitySummaryView) ? void 0 : o.node
                    ),
                    f(null == (e = this.bigCitySummaryView) ? void 0 : e.node)
                      .sequence(
                        f().delay(t),
                        f().call(function () {
                          var t, n;
                          i.bigCitySummaryView &&
                            (i.bigCitySummaryView.onHide = function () {
                              var t, n;
                              d.stopAllByTarget(
                                null == (t = i.bigCitySummaryView)
                                  ? void 0
                                  : t.node
                              ),
                                null == (n = _.getInstance()) ||
                                  n.finishedBonus(),
                                i.hide();
                            }),
                            null == (t = i.bigCitySummaryView) ||
                              t.setText(
                                "chúc mừng bạn đã trúng",
                                "từ bonus game vase breaker."
                              ),
                            null == (n = i.bigCitySummaryView) || n.show();
                        }),
                        f().delay(4),
                        f().call(function () {
                          var t;
                          null == (t = i.bigCitySummaryView) || t.hide();
                        })
                      )
                      .start();
                }),
                (a.hide = function () {
                  var t, n;
                  null == (t = _.getInstance()) || t.showMainImmediately(),
                    this.bigCitySummaryView &&
                      (this.bigCitySummaryView.onHide = null),
                    this.root && (this.root.active = !1),
                    this.items.forEach(function (t, n) {
                      var o;
                      null == (o = t.getComponent(b)) || o.hide();
                    }),
                    null == (n = this.bonus_audio_source) || n.stop();
                }),
                n
              );
            })(p)).CLICKED_ITEM = "CLICKED_ITEM"),
            (O = n((H = ut).prototype, "root", [N], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (K = n(H.prototype, "background_sprite", [D], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = n(H.prototype, "background_skeleton", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = n(H.prototype, "bigCitySummaryView", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (X = n(H.prototype, "amount", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Y = n(H.prototype, "countDownNode", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (j = n(H.prototype, "outDoorNode", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (J = n(H.prototype, "outdoor", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Q = n(H.prototype, "lbl_countdown", [M], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Z = n(H.prototype, "totalWinNode", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($ = n(H.prototype, "lbl_totalWin", [V], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (tt = n(H.prototype, "items", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (nt = n(H.prototype, "start_mini_game_sfx", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ot = n(H.prototype, "touch_mini_game_outdoor_sfx", [E], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (et = n(H.prototype, "touch_mini_game_item_sfx", [G], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (it = n(H.prototype, "touch_stop_mini_game_item_sfx", [R], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (at = n(H.prototype, "touch_mini_game_outdoor_reveal_sfx", [F], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (rt = n(H.prototype, "bonus_audio_source", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = H))
          ) || L)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCityFullScreenGameView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BigCityBetHistoryView.ts",
    "./BigCityInfoView.ts",
    "./BigCityJackpotHistoryView.ts",
    "./BigCityLineSelectionView.ts",
    "./BigCitySettingView.ts",
    "./BigCityX2View.ts",
    "./BigCity_EffectCmp.ts",
    "./BigCity_SlotMachineCmp.ts",
    "./BigCity_SlotMachineItemView.ts",
    "./BackgroundScale.ts",
    "./SocketManager.ts",
    "./PersistManager.ts",
    "./Define.ts",
    "./SoundButtonCmp.ts",
    "./StringUtils.ts",
    "./BaseSlotGameView.ts",
    "./SoundManager.ts",
    "./BigCityNetworkController.ts",
    "./EventManager.ts",
  ],
  function (t) {
    "use strict";
    var n,
      i,
      e,
      l,
      o,
      a,
      r,
      s,
      u,
      c,
      b,
      p,
      _,
      h,
      f,
      m,
      d,
      g,
      y,
      w,
      v,
      k,
      S,
      C,
      I,
      F,
      x,
      B,
      M,
      z,
      j,
      E,
      A,
      T,
      L,
      V,
      J,
      N,
      D,
      R,
      X,
      G,
      O,
      P,
      q,
      U;
    return {
      setters: [
        function (t) {
          (n = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (l = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (a = t._decorator),
            (r = t.Label),
            (s = t.Button),
            (u = t.sp),
            (c = t.Toggle),
            (b = t.Node),
            (p = t.SpriteFrame),
            (_ = t.Sprite),
            (h = t.AudioClip),
            (f = t.UIOpacity),
            (m = t.VideoPlayer),
            (d = t.tween),
            (g = t.Tween),
            (y = t.assetManager),
            (w = t.Prefab),
            (v = t.log),
            (k = t.sys),
            (S = t.view),
            (C = t.Vec3),
            (I = t.UITransform);
        },
        function (t) {
          F = t.default;
        },
        function (t) {
          x = t.BigCityInfoView;
        },
        function (t) {
          B = t.default;
        },
        function (t) {
          M = t.BigCityLineSelectionView;
        },
        function (t) {
          z = t.BigCitySettingView;
        },
        function (t) {
          j = t.BigCityX2View;
        },
        function (t) {
          (E = t.BigCity_EffectCmp), (A = t.EFFECT_TYPE);
        },
        function (t) {
          T = t.default;
        },
        function (t) {
          L = t.BigCityItem;
        },
        function (t) {
          V = t.BackgroundScale;
        },
        function (t) {
          J = t.socketManager;
        },
        function (t) {
          N = t.PersistManager;
        },
        function (t) {
          D = t.GameID;
        },
        function (t) {
          R = t.default;
        },
        function (t) {
          X = t.StringUtils;
        },
        function (t) {
          G = t.BaseSlotGameView;
        },
        function (t) {
          O = t.SoundManager;
        },
        function (t) {
          P = t.BigCityNetworkController;
        },
        function (t) {
          (q = t.eventManager), (U = t.EventKey);
        },
      ],
      execute: function () {
        var H,
          K,
          W,
          Y,
          Q,
          Z,
          $,
          tt,
          nt,
          it,
          et,
          lt,
          ot,
          at,
          rt,
          st,
          ut,
          ct,
          bt,
          pt,
          _t,
          ht,
          ft,
          mt,
          dt,
          gt,
          yt,
          wt,
          vt,
          kt,
          St,
          Ct,
          It,
          Ft,
          xt,
          Bt,
          Mt,
          zt,
          jt,
          Et,
          At,
          Tt,
          Lt,
          Vt,
          Jt,
          Nt,
          Dt,
          Rt,
          Xt,
          Gt,
          Ot,
          Pt,
          qt,
          Ut,
          Ht,
          Kt,
          Wt,
          Yt,
          Qt,
          Zt,
          $t,
          tn,
          nn,
          en,
          ln,
          on,
          an,
          rn,
          sn,
          un,
          cn,
          bn,
          pn,
          _n,
          hn,
          fn,
          mn,
          dn,
          gn,
          yn,
          wn,
          vn,
          kn,
          Sn,
          Cn,
          In,
          Fn,
          xn,
          Bn,
          Mn,
          zn,
          jn,
          En,
          An,
          Tn,
          Ln,
          Vn,
          Jn,
          Nn,
          Dn,
          Rn,
          Xn,
          Gn,
          On,
          Pn,
          qn,
          Un,
          Hn,
          Kn,
          Wn,
          Yn,
          Qn,
          Zn,
          $n,
          ti,
          ni;
        o._RF.push(
          {},
          "545a7sE7YFEvqc0BkfwdvKm",
          "BigCityFullScreenGameView",
          void 0
        );
        var ii = a.ccclass,
          ei = a.property,
          li = function () {
            (this.aid = -1), (this.jackpot = 0), (this.bet = 0);
          };
        t(
          "BigCityFullScreenGameView",
          ((H = ii("BigCityFullScreenGameView")),
          (K = ei(r)),
          (W = ei([r])),
          (Y = ei(r)),
          (Q = ei(r)),
          (Z = ei(r)),
          ($ = ei(s)),
          (tt = ei(s)),
          (nt = ei(s)),
          (it = ei(u.Skeleton)),
          (et = ei(c)),
          (lt = ei(s)),
          (ot = ei(s)),
          (at = ei(b)),
          (rt = ei(u.Skeleton)),
          (st = ei(r)),
          (ut = ei(T)),
          (ct = ei([p])),
          (bt = ei([p])),
          (pt = ei([p])),
          (_t = ei([p])),
          (ht = ei([u.SkeletonData])),
          (ft = ei([u.SkeletonData])),
          (mt = ei(b)),
          (dt = ei(b)),
          (gt = ei(b)),
          (yt = ei(b)),
          (wt = ei(b)),
          (vt = ei(s)),
          (kt = ei(s)),
          (St = ei(s)),
          (Ct = ei(b)),
          (It = ei(s)),
          (Ft = ei(b)),
          (xt = ei(x)),
          (Bt = ei(z)),
          (Mt = ei(b)),
          (zt = ei([s])),
          (jt = ei(_)),
          (Et = ei([p])),
          (At = ei(_)),
          (Tt = ei([u.SkeletonData])),
          (Lt = ei(u.Skeleton)),
          (Vt = ei([p])),
          (Jt = ei(E)),
          (Nt = ei(j)),
          (Dt = ei(M)),
          (Rt = ei(b)),
          (Xt = ei(h)),
          (Gt = ei(h)),
          (Ot = ei(h)),
          (Pt = ei(h)),
          (qt = ei(h)),
          (Ut = ei(h)),
          (Ht = ei(h)),
          (Kt = ei(h)),
          (Wt = ei(b)),
          H(
            (((ni = (function (t) {
              function n() {
                for (
                  var n, i = arguments.length, o = new Array(i), a = 0;
                  a < i;
                  a++
                )
                  o[a] = arguments[a];
                return (
                  (n = t.call.apply(t, [this].concat(o)) || this),
                  e(n, "lblJackpot", Zt, l(n)),
                  e(n, "lbl_lobby_jackpots", $t, l(n)),
                  e(n, "lblTongCuoc", tn, l(n)),
                  e(n, "lblCuoc", nn, l(n)),
                  e(n, "lblLine", en, l(n)),
                  e(n, "btn_line", ln, l(n)),
                  e(n, "btn_spin", on, l(n)),
                  e(n, "btn_x2", an, l(n)),
                  e(n, "btn_spin_skeleton", rn, l(n)),
                  e(n, "btn_fast", sn, l(n)),
                  e(n, "btn_lobby_back", un, l(n)),
                  e(n, "btn_main_back", cn, l(n)),
                  e(n, "result_node", bn, l(n)),
                  e(n, "bg_result_node", pn, l(n)),
                  e(n, "lbl_result_amount", _n, l(n)),
                  e(n, "diablo_SlotMachineCmp", hn, l(n)),
                  e(n, "loaded_item_normal", fn, l(n)),
                  e(n, "loaded_item_blur", mn, l(n)),
                  e(n, "loaded_item_free_normal", dn, l(n)),
                  e(n, "loaded_item_free_blur", gn, l(n)),
                  e(n, "loaded_anim_item", yn, l(n)),
                  e(n, "loaded_free_anim_item", wn, l(n)),
                  e(n, "loading_node", vn, l(n)),
                  e(n, "loading_bg", kn, l(n)),
                  e(n, "lobby_node", Sn, l(n)),
                  e(n, "main_node", Cn, l(n)),
                  e(n, "top_node", In, l(n)),
                  e(n, "btn_info", Fn, l(n)),
                  e(n, "btn_setting", xn, l(n)),
                  e(n, "btn_ranking", Bn, l(n)),
                  e(n, "ranking_view_node", Mn, l(n)),
                  e(n, "btn_bet_history", zn, l(n)),
                  e(n, "bet_history_node", jn, l(n)),
                  e(n, "bigCityInfoView", En, l(n)),
                  e(n, "bigCitySettingView", An, l(n)),
                  e(n, "bottom_node", Tn, l(n)),
                  e(n, "btn_bets", Ln, l(n)),
                  e(n, "spr_background", Vn, l(n)),
                  e(n, "sprFrame_backgrounds", Jn, l(n)),
                  e(n, "spr_bg_slot", Nn, l(n)),
                  e(n, "loaded_spinner_fx", Dn, l(n)),
                  e(n, "spinner_fx", Rn, l(n)),
                  e(n, "sprFrame_backgrounds_slot", Xn, l(n)),
                  e(n, "bigCity_EffectCmp", Gn, l(n)),
                  e(n, "bigCityX2View", On, l(n)),
                  e(n, "bigCityLineSelectionView", Pn, l(n)),
                  e(n, "bg_free_spin", qn, l(n)),
                  e(n, "lobby_bgm_music", Un, l(n)),
                  e(n, "main_bgm_music", Hn, l(n)),
                  e(n, "free_bgm_music", Kn, l(n)),
                  e(n, "spin_sfx_loop", Wn, l(n)),
                  e(n, "spin_end_sfx", Yn, l(n)),
                  e(n, "win_normal_sfx", Qn, l(n)),
                  e(n, "win_normal_money_sfx", Zn, l(n)),
                  e(n, "expanding_wild_sfx", $n, l(n)),
                  e(n, "trial_node", ti, l(n)),
                  (n.isAuto = !1),
                  (n.bet_array = [1e3, 1e4, 1e5, 1e5]),
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
                  (n.isFinishedFreeSpin = !0),
                  (n.bonusCount = 0),
                  (n.wonX2 = !1),
                  (n.mainIndex = 0),
                  (n.lobbyJackpots = []),
                  n
                );
              }
              i(n, t);
              var o = n.prototype;
              return (
                (o.getAID = function () {
                  return this._aid;
                }),
                (o.IsFreeSpin = function () {
                  var t, n, i;
                  return (
                    (null == (t = this.spr_background) ||
                    null == (n = t.spriteFrame)
                      ? void 0
                      : n.name) ==
                    (null == (i = this.sprFrame_backgrounds[4])
                      ? void 0
                      : i.name)
                  );
                }),
                (o.getBonusCount = function () {
                  return this.bonusCount;
                }),
                (n.getInstance = function () {
                  return n.instance;
                }),
                (o.getNetworkController = function () {
                  return P.getInstance();
                }),
                (o.getTotalBet = function () {
                  return this.bet * this.lineArr.length;
                }),
                (o.isSpinning = function () {
                  var t;
                  return null == (t = this.diablo_SlotMachineCmp)
                    ? void 0
                    : t.isSpinning();
                }),
                (o.forceMachineStop = function (t, n) {
                  void 0 === t && (t = !0),
                    void 0 === n && (n = !1),
                    this.stop([], n),
                    t && this.turnOffAutoSpin();
                }),
                (o.turnOffAutoSpin = function () {
                  this.isAuto = !1;
                }),
                (o.isFastSpin = function () {
                  return this.isFast;
                }),
                (o.isAutoSpin = function () {
                  return this.isAuto;
                }),
                (o.stopImmediately = function () {
                  var t;
                  this.btn_spin && (this.btn_spin.interactable = !1),
                    null == (t = this.diablo_SlotMachineCmp) ||
                      t.stopImmediately(this.symbols);
                }),
                (o.handleLoggedIn = function () {
                  this.forceMachineStop(), this.subscribe();
                }),
                (o.finishedBonus = function () {
                  var t;
                  if (
                    (this.IsFreeSpin()
                      ? O.getInstance().playBgm(this.free_bgm_music, !0, !0)
                      : O.getInstance().playBgm(this.main_bgm_music, !0, !0),
                    this.isAutoSpin() &&
                      null != (t = this.diablo_SlotMachineCmp) &&
                      t.isStopped())
                  )
                    this.spin();
                  else {
                    var n,
                      i = this.rewards.map(function (t) {
                        return t.lid;
                      });
                    null == (n = this.diablo_SlotMachineCmp) ||
                      n.showEachLines(i, 1.5),
                      this.resetSpinButton();
                  }
                  J.sendRefreshMoney(),
                    null != this.lbl_result_amount &&
                      null != this.lbl_result_amount &&
                      (this.lbl_result_amount &&
                        (this.lbl_result_amount.getComponent(f).opacity = 255),
                      (this.lbl_result_amount.string = X.formatNumber(
                        this.moneyExchange
                      )));
                }),
                (o.finishedJackpot = function () {
                  this.playBgmMusic(),
                    null != this.lbl_result_amount &&
                      null != this.lbl_result_amount &&
                      (this.lbl_result_amount &&
                        (this.lbl_result_amount.getComponent(f).opacity = 255),
                      (this.lbl_result_amount.string = X.formatNumber(
                        this.moneyExchange
                      )));
                }),
                (o.onLoad = function () {
                  var i,
                    e,
                    l,
                    o,
                    a,
                    r,
                    s,
                    u,
                    c,
                    p,
                    _ = this;
                  t.prototype.onLoad.call(this),
                    (this.gameID = D.BIGCITY),
                    (n.instance = this),
                    null == (i = this.intro_video) ||
                      i.node.on(m.EventType.COMPLETED, function () {
                        var t;
                        null == (t = _.intro_video) || t.node.destroy(),
                          _.isSubcribed
                            ? _.showLobby()
                            : _.loading_bg && (_.loading_bg.active = !0);
                      }),
                    this.lbl_lobby_jackpots.forEach(function (t) {
                      _.lobbyJackpots.push(0);
                    }),
                    this.btn_bets.forEach(function (t, n) {
                      var i = n;
                      t.node.on("click", function () {
                        _.showMain(i);
                      });
                    }),
                    null == (e = this.btn_spin) ||
                      e.node.on(b.EventType.TOUCH_START, function () {
                        var t;
                        null != (t = _.btn_spin) &&
                          t.interactable &&
                          d(_.btn_spin.node)
                            .sequence(
                              d().delay(0.5),
                              d().call(function () {
                                var t;
                                null == (t = _.btn_spin_skeleton) ||
                                  t.setAnimation(0, "hold", !1);
                              }),
                              d().delay(1.5),
                              d().call(function () {
                                _.isTrial
                                  ? N.showNoti(
                                      "Không hỗ trợ tự quay ở chế độ chơi thử."
                                    )
                                  : _.lineArr.length <= 0
                                  ? N.showNoti("Vui lòng chọn dòng")
                                  : ((_.isAuto = !0), _.spin());
                              })
                            )
                            .start();
                      }),
                    this.btn_spin &&
                      this.btn_spin.node.on(b.EventType.TOUCH_END, function () {
                        var t;
                        if (null != (t = _.btn_spin) && t.interactable) {
                          var n,
                            i = _.btn_spin.getComponent(R);
                          if (
                            (null != i && null != i && i.playSfx(),
                            g.stopAllByTarget(_.btn_spin.node),
                            _.symbols.length > 0)
                          )
                            null == (n = _.btn_spin_skeleton) ||
                              n.setAnimation(0, "stop_pressed", !0),
                              g.stopAllByTarget(_.btn_spin.node),
                              _.stopImmediately(),
                              (_.isAuto = !1);
                          else _.spin();
                        }
                      }),
                    this.btn_fast &&
                      this.btn_fast.node.on("toggle", function () {
                        _.isFast = _.btn_fast.isChecked;
                      }),
                    null == (l = this.btn_line) ||
                      l.node.on("click", function () {
                        var t, n, i;
                        !_.isAutoSpin() &&
                        null != (t = _.diablo_SlotMachineCmp) &&
                        t.isStopped()
                          ? (null == (n = _.bigCityLineSelectionView) ||
                              n.setDefaultLines(_.lineArr),
                            null == (i = _.bigCityLineSelectionView) ||
                              i.show())
                          : N.showNoti("Đang Quay");
                      }),
                    null == (o = this.btn_lobby_back) ||
                      o.node.on("click", function () {
                        q.emit(U.IsMiniDownload, function () {
                          _.leaveRoom();
                        });
                      }),
                    null == (a = this.btn_setting) ||
                      a.node.on("click", function () {
                        var t;
                        null == (t = _.bigCitySettingView) || t.show();
                      }),
                    null == (r = this.btn_info) ||
                      r.node.on("click", function () {
                        var t;
                        null == (t = _.bigCityInfoView) || t.show();
                      }),
                    null == (s = this.btn_x2) ||
                      s.node.on("click", function () {
                        var t;
                        null == (t = _.bigCityX2View) || t.open(0);
                      }),
                    null == (u = this.btn_main_back) ||
                      u.node.on("click", function () {
                        var t;
                        null != (t = _.diablo_SlotMachineCmp) && t.isStopped()
                          ? _.showLobby()
                          : N.showNoti("Đang Quay");
                      }),
                    this.diablo_SlotMachineCmp &&
                      (this.diablo_SlotMachineCmp.onMachineStopped =
                        function () {
                          var t, i, e;
                          (O.getInstance().stopAdditionalSfx(_.spin_sfx_loop),
                          _.isFinishedFreeSpin && _.finishFreeSpins(),
                          _.btn_x2 &&
                            (_.btn_x2.interactable =
                              !_.isAutoSpin() && _.wonX2),
                          null != (t = n.getInstance()) && t.isFastSpin()) ||
                            (null == (i = _.diablo_SlotMachineCmp) ||
                              i.showWild(function () {}),
                            null != (e = _.diablo_SlotMachineCmp) &&
                              e.hasWild() &&
                              O.getInstance().playAdditionalSfx(
                                _.expanding_wild_sfx
                              ));
                          if (_.miniGameDict) {
                            var l,
                              o = _.rewards.map(function (t) {
                                return t ? ["lid"] : null;
                              }),
                              a = 0;
                            _.rewards.forEach(function (t) {
                              a += t.crd;
                            }),
                              o.length > 0
                                ? d(_.node)
                                    .call(function () {
                                      var t, n;
                                      (null == (t = _.diablo_SlotMachineCmp) ||
                                        t.showLines(o, 0, 0.3, function () {}),
                                      null != _.lbl_result_amount &&
                                        null != _.lbl_result_amount) &&
                                        (g.stopAllByTarget(
                                          null == (n = _.lbl_result_amount)
                                            ? void 0
                                            : n.getComponent(f)
                                        ),
                                        _.lbl_result_amount &&
                                          (_.lbl_result_amount.getComponent(
                                            f
                                          ).opacity = 255),
                                        (_.lbl_result_amount.string =
                                          X.formatNumber(a)));
                                    })
                                    .delay(1)
                                    .call(function () {
                                      var t;
                                      null == (t = _.bigCity_EffectCmp) ||
                                        t.showEffect(
                                          A.BONUS,
                                          _.isFast ? 2 : 1,
                                          _.timeToShowResults,
                                          _.miniGameDict
                                        );
                                    })
                                    .start()
                                : null == (l = _.bigCity_EffectCmp) ||
                                  l.showEffect(
                                    A.BONUS,
                                    _.isFast ? 2 : 1,
                                    _.timeToShowResults,
                                    _.miniGameDict
                                  );
                          } else {
                            var r = d(_.node).call(function () {
                              _.showResult(function () {
                                var t, n;
                                if (
                                  _.isAutoSpin() &&
                                  null != (t = _.diablo_SlotMachineCmp) &&
                                  t.isStopped()
                                )
                                  _.spin();
                                else if (
                                  null != (n = _.diablo_SlotMachineCmp) &&
                                  n.isStopped()
                                ) {
                                  var i = _.rewards.map(function (t) {
                                    return t.lid;
                                  });
                                  _.diablo_SlotMachineCmp.showEachLines(i, 1.5),
                                    _.resetSpinButton();
                                }
                              });
                            });
                            if (_.wonFreeSpins > 0)
                              d(_.node)
                                .sequence(
                                  d().call(function () {
                                    var t, n;
                                    null == (t = _.bigCity_EffectCmp) ||
                                      t.showEffect(
                                        A.FREE,
                                        _.isFast ? 2 : 1,
                                        _.isFast ? 0.25 : 1,
                                        0
                                      ),
                                      _.lbl_freespinCount &&
                                        (_.lbl_freespinCount.node.active = !0),
                                      _.bg_free_spin &&
                                        (_.bg_free_spin.active = !0),
                                      _.lbl_freespinCount &&
                                        (_.lbl_freespinCount.string =
                                          null == (n = _.currentFreeSpin)
                                            ? void 0
                                            : n.toString());
                                    var i = _.sprFrame_backgrounds[4];
                                    i &&
                                      _.spr_background &&
                                      (_.spr_background.spriteFrame = i);
                                    var e = _.sprFrame_backgrounds_slot[4];
                                    e &&
                                      _.spr_bg_slot &&
                                      (_.spr_bg_slot.spriteFrame = e),
                                      _.playBgmMusic();
                                  }),
                                  d().delay(0.5),
                                  d().call(function () {
                                    var t;
                                    _.isAutoSpin() &&
                                    null != (t = _.diablo_SlotMachineCmp) &&
                                    t.isStopped()
                                      ? _.spin()
                                      : _.resetSpinButton();
                                  })
                                )
                                .start();
                            else
                              (_.moneyExchange > 0
                                ? r
                                : d(_.node).sequence(
                                    d().delay(0.01),
                                    d().call(function () {
                                      var t;
                                      _.isAutoSpin() &&
                                      null != (t = _.diablo_SlotMachineCmp) &&
                                      t.isStopped()
                                        ? _.spin()
                                        : _.resetSpinButton();
                                    })
                                  )
                              ).start();
                            J.sendRefreshMoney();
                          }
                        }),
                    null == (c = this.btn_ranking) ||
                      c.node.on("click", function () {
                        var t;
                        null == (t = _.ranking_view_node) ||
                          t.getComponent(B).fetchHistory();
                      }),
                    null == (p = this.btn_bet_history) ||
                      p.node.on("click", function () {
                        var t;
                        null == (t = _.bet_history_node) ||
                          t.getComponent(F).fetchHistory();
                      });
                }),
                (o.resetSpinButton = function () {
                  var t;
                  null == (t = this.btn_spin_skeleton) ||
                    t.setAnimation(0, "spin", !0),
                    this.btn_spin && (this.btn_spin.interactable = !0),
                    (this.symbols = []);
                }),
                (o.release = function () {
                  n.instance = null;
                  var t = y.getBundle("slot_pvz");
                  null != t &&
                    null != t &&
                    (t.release("prefab_pvz", w),
                    y.removeBundle(t),
                    v("remove asset bundle slot_pvz"),
                    this.node.destroy(),
                    k.garbageCollect());
                }),
                (n.releaseBundle = function () {
                  n.instance = null;
                  var t = y.getBundle("slot_pvz");
                  null != t &&
                    null != t &&
                    (t.release("prefab_pvz", w),
                    y.removeBundle(t),
                    v("remove asset bundle slot_pvz"),
                    k.garbageCollect());
                }),
                (o.finishX2Game = function () {
                  null != this.lbl_result_amount &&
                    null != this.lbl_result_amount &&
                    (this.lbl_result_amount.string = ""),
                    this.btn_x2 && (this.btn_x2.interactable = !1),
                    J.sendRefreshMoney();
                }),
                (o.initUI = function () {
                  var t = this;
                  O.getInstance().stopBgm(),
                    this.lobby_node && (this.lobby_node.active = !1),
                    this.main_node && (this.main_node.active = !1),
                    k.isBrowser
                      ? (this.loading_node && (this.loading_node.active = !0),
                        this.loading_bg && (this.loading_bg.active = !0),
                        this.intro_video && (this.intro_video.node.active = !1),
                        d(this.node)
                          .delay(1)
                          .call(function () {
                            t.showLobby();
                          })
                          .start())
                      : this.showLobby(),
                    this.subscribe();
                }),
                (o.playBgmMusic = function () {
                  var t;
                  null != (t = this.lobby_node) && t.active
                    ? this.playLobbyMusic()
                    : this.IsFreeSpin()
                    ? O.getInstance().playBgm(this.free_bgm_music, !0)
                    : O.getInstance().playBgm(this.main_bgm_music, !0);
                }),
                (o.playLobbyMusic = function () {
                  O.getInstance().playBgm(this.lobby_bgm_music, !0);
                }),
                (o.showLobby = function () {
                  this.loading_node && (this.loading_node.active = !1),
                    this.lobby_node && (this.lobby_node.active = !0),
                    this.main_node && (this.main_node.active = !1),
                    this.resetSpinButton(),
                    this.turnOffAutoSpin(),
                    this.playLobbyMusic();
                }),
                (o.getBetIndex = function () {
                  return this.mainIndex;
                }),
                (o.showMain = function (t) {
                  var n, i, e, l, o, a, r, s, u, c;
                  (this.mainIndex = t),
                    this.loading_node && (this.loading_node.active = !1),
                    this.lobby_node && (this.lobby_node.active = !1),
                    null == (n = this.diablo_SlotMachineCmp) ||
                      n.hideStickyWild(),
                    this.playBgmMusic(),
                    this.bigCityInfoView.setBet(t),
                    (this.bet = this.bet_array[t]),
                    (this.isTrial = t == this.bet_array.length - 1),
                    this.trial_node && (this.trial_node.active = this.isTrial);
                  var b = this.sprFrame_backgrounds[t];
                  b &&
                    this.spr_background &&
                    (this.spr_background.spriteFrame = b);
                  var p = this.loaded_spinner_fx[t];
                  p && this.spinner_fx && (this.spinner_fx.skeletonData = p),
                    null == (i = this.spinner_fx) ||
                      i.setAnimation(0, "animation", !0);
                  var _ = this.sprFrame_backgrounds_slot[t];
                  _ && this.spr_bg_slot && (this.spr_bg_slot.spriteFrame = _);
                  var h =
                    null == (e = this.spr_background)
                      ? void 0
                      : e.node.getComponent(V);
                  h && h.autoFit(),
                    this.btn_x2 && (this.btn_x2.node.active = !this.isTrial),
                    this.updateJackpotLabels(!1),
                    this.main_node && (this.main_node.active = !0),
                    g.stopAllByTarget(this.top_node);
                  var m = S.getCanvasSize().height / S.getScaleY();
                  null == (l = this.top_node) ||
                    l.setPosition(
                      new C(
                        0,
                        m / 2 +
                          (null == (o = this.top_node)
                            ? void 0
                            : o.getComponent(I).contentSize.height) /
                            2
                      )
                    ),
                    d(this.top_node)
                      .delay(0.1)
                      .to(
                        0.5,
                        { position: new C(0, 317, 0) },
                        { easing: "expoOut" }
                      )
                      .start(),
                    null == (a = this.bottom_node) ||
                      a.setPosition(
                        new C(
                          -20,
                          -m / 2 -
                            (null == (r = this.bottom_node)
                              ? void 0
                              : r.getComponent(I).contentSize.height) /
                              2
                        )
                      ),
                    d(this.bottom_node)
                      .delay(0.1)
                      .to(
                        0.5,
                        { position: new C(-20, -292, 0) },
                        { easing: "expoOut" }
                      )
                      .start(),
                    null == (s = this.diablo_SlotMachineCmp) || s.init(),
                    this.lbl_freespinCount &&
                      (this.lbl_freespinCount.node.active = !1),
                    this.bg_free_spin && (this.bg_free_spin.active = !1),
                    this.currentFreeSpin && (this.currentFreeSpin = 0),
                    null == (u = this.bigCity_EffectCmp) || u.hideAll(),
                    null != (c = this.btn_x2) && c.interactable
                      ? this.lbl_result_amount &&
                        (this.lbl_result_amount.getComponent(f).opacity = 255)
                      : null != this.lbl_result_amount &&
                        null != this.lbl_result_amount &&
                        (this.lbl_result_amount.string = ""),
                    this.lblCoin && (this.lblCoin.string = ""),
                    J.sendRefreshMoney();
                }),
                (o.showMainImmediately = function () {
                  this.main_node && (this.main_node.active = !0);
                }),
                (o.hideMainImmediately = function () {
                  this.main_node && (this.main_node.active = !1);
                }),
                (o.showResult = function (t) {
                  var n,
                    i,
                    e,
                    l,
                    o = this,
                    a = this.rewards.map(function (t) {
                      return t.lid;
                    }),
                    r = this.isFast ? 0 : 0.7;
                  null == (n = this.diablo_SlotMachineCmp) ||
                    n.showLines(a, r, 0.3, function () {}),
                    g.stopAllByTarget(this.result_node),
                    g.stopAllByTarget(
                      null == (i = this.lbl_result_amount)
                        ? void 0
                        : i.getComponent(f)
                    ),
                    null == (e = this.lbl_result_amount) ||
                      e.node.setScale(C.ONE);
                  var s = d(this.result_node).sequence(
                      d().call(function () {
                        var t;
                        null == (t = o.bigCity_EffectCmp) ||
                          t.showEffect(A.JACKPOT, 1, 0, o.moneyExchange);
                      }),
                      this.isAutoSpin()
                        ? d(this.result_node).sequence(
                            d().delay(14.5),
                            d().call(function () {
                              var t;
                              null == (t = o.bigCity_EffectCmp) ||
                                t.hideEffect(A.JACKPOT);
                            })
                          )
                        : d(this.result_node).sequence(
                            d().delay(7),
                            d().call(function () {
                              var t;
                              v("active click"),
                                null == (t = o.bigCity_EffectCmp) ||
                                  t.activeClick(A.JACKPOT);
                            })
                          )
                    ),
                    u = d(this.result_node).sequence(
                      d().call(function () {
                        o.resetSpinButton();
                      }),
                      d().delay(this.isFast ? 0.5 : 1)
                    ),
                    c = d(this.result_node).sequence(
                      d().call(function () {
                        var t, n;
                        if (
                          (o.wonJackpot ||
                            null == o.lbl_result_amount ||
                            null == o.lbl_result_amount ||
                            (o.lbl_result_amount &&
                              (o.lbl_result_amount.getComponent(
                                f
                              ).opacity = 255)),
                          o.result_tween && o.result_tween.stop(),
                          o.isFast)
                        )
                          null != o.lbl_result_amount &&
                            null != o.lbl_result_amount &&
                            (o.lbl_result_amount.string = X.formatNumber(
                              o.moneyExchange
                            ));
                        else if (!o.wonJackpot) {
                          O.getInstance().playAdditionalSfx(
                            o.win_normal_money_sfx,
                            !0
                          ),
                            (o.result_tween = d({ a: 0 })
                              .to(
                                1,
                                { a: o.moneyExchange },
                                {
                                  progress: function (t, n, i, e) {
                                    return (
                                      null != o.lbl_result_amount &&
                                        null != o.lbl_result_amount &&
                                        (o.lbl_result_amount.string =
                                          X.formatNumber(Math.floor(i))),
                                      t + (n - t) * e
                                    );
                                  },
                                }
                              )
                              .call(function () {
                                null != o.lbl_result_amount &&
                                  null != o.lbl_result_amount &&
                                  ((o.lbl_result_amount.string = X.formatNumber(
                                    o.moneyExchange
                                  )),
                                  O.getInstance().stopAdditionalSfx(
                                    o.win_normal_money_sfx
                                  ));
                              })
                              .start());
                        }
                        var i;
                        null == (t = o.bg_result_node) ||
                          t.setAnimation(0, "SMORK", !1);
                        (null == (n = o.bg_result_node) ||
                          n.setCompleteListener(function (t) {
                            var n;
                            "SMORK" == (t.animation ? t.animation.name : "") &&
                              (null == (n = o.bg_result_node) ||
                                n.setAnimation(0, "animation", !0));
                          }),
                        !o.wonJackpot && o.moneyExchange >= 100 * o.bet) &&
                          (null == (i = o.bigCity_EffectCmp) ||
                            i.showEffect(
                              A.BIGWIN,
                              o.isFast ? 2 : 1,
                              o.isFast ? 0.5 : o.timeToShowResults - r,
                              0
                            ));
                      }),
                      this.wonJackpot ? s : u,
                      d().call(function () {
                        return t && t();
                      })
                    );
                  d(
                    null == (l = this.lbl_result_amount)
                      ? void 0
                      : l.getComponent(f)
                  )
                    .sequence(
                      d().delay(r),
                      d().delay(this.isFast ? 0.5 : this.timeToShowResults - r),
                      d().to(0.5, { opacity: 1 })
                    )
                    .start(),
                    c.start();
                }),
                (o.update = function (t) {
                  null != this.lblTongCuoc &&
                    null != this.lblTongCuoc &&
                    (this.lblTongCuoc.string = X.formatNumber(
                      this.getTotalBet()
                    )),
                    null != this.lblCuoc &&
                      null != this.lblCuoc &&
                      (this.lblCuoc.string = X.formatNumber(this.bet)),
                    null != this.lblLine &&
                      null != this.lblLine &&
                      (this.lblLine.string = this.lineArr.length.toString());
                }),
                (o.spin = function () {
                  var t, n, i, e;
                  if (null != (t = this.diablo_SlotMachineCmp) && t.isStopped())
                    if (this.lineArr.length <= 0)
                      N.showNoti("Vui lòng chọn dòng");
                    else {
                      var l;
                      if (this.moneyExchange > 0)
                        this.result_tween && this.result_tween.stop(),
                          null != this.lbl_result_amount &&
                            null != this.lbl_result_amount &&
                            (this.lbl_result_amount.string = X.formatNumber(
                              this.moneyExchange
                            )),
                          d(
                            null == (l = this.lbl_result_amount)
                              ? void 0
                              : l.getComponent(f)
                          )
                            .sequence(
                              d().delay(0.5),
                              d().to(0.5, { opacity: 1 })
                            )
                            .start();
                      O.getInstance().stopAllAdditionalSfx(),
                        null == (n = this.bigCity_EffectCmp) || n.hideAll(),
                        (this.symbols = []),
                        (this.wonFreeSpins = 0),
                        (this.wonX2 = !1),
                        this.btn_x2 && (this.btn_x2.interactable = !1),
                        this.btn_spin && (this.btn_spin.interactable = !1),
                        null == (i = this.btn_spin_skeleton) ||
                          i.setAnimation(0, "stop", !0),
                        g.stopAllByTarget(
                          null == (e = this.btn_spin_skeleton) ? void 0 : e.node
                        ),
                        g.stopAllByTarget(this.node),
                        this.diablo_SlotMachineCmp.spin(),
                        this.requestSpin(),
                        O.getInstance().playAdditionalSfx(
                          this.spin_sfx_loop,
                          !0
                        );
                    }
                }),
                (o.playColumnStopEnd = function () {
                  O.getInstance().playSfx(this.spin_end_sfx);
                }),
                (o.stop = function (t, n) {
                  var i,
                    e = this;
                  (void 0 === n && (n = !1),
                  null != (i = this.diablo_SlotMachineCmp) && i.isSpinning()) &&
                    (0 == t.length &&
                      ((this.moneyExchange = 0), (this.rewards = [])),
                    d(this.node)
                      .sequence(
                        d().delay(T.TIME_TO_SHOW_RESULT),
                        d().call(function () {
                          var i, l;
                          e.btn_spin && (e.btn_spin.interactable = !0),
                            e.isFast || n
                              ? null == (i = e.diablo_SlotMachineCmp) ||
                                i.stopImmediately(t)
                              : null == (l = e.diablo_SlotMachineCmp) ||
                                l.stop(t);
                        })
                      )
                      .start());
                }),
                (o.receiveData = function (t, n, i, e, l, o, a, r) {
                  var s = this;
                  if (
                    ((this._aid = t),
                    (this.bonusCount = 0),
                    (this.symbols = e.map(function (t) {
                      var n = new L();
                      return 10 == t && s.bonusCount++, n.decodeItem(t), n;
                    })),
                    (this.rewards = i),
                    (this.moneyExchange = n),
                    (this.wonJackpot =
                      this.rewards.filter(function (t) {
                        return 1 == t.iJ;
                      }).length > 0),
                    (this.miniGameDict = a ? r : null),
                    (this.isFinishedFreeSpin = !0),
                    (this.wonFreeSpins = o - this.currentFreeSpin),
                    this.wonFreeSpins < 0 && (this.wonFreeSpins = 0),
                    this.wonFreeSpins > 0)
                  )
                    (this.currentFreeSpin = o),
                      this.currentFreeSpin > 0 &&
                        (this.isFinishedFreeSpin = !1);
                  else if (this.currentFreeSpin > 0) {
                    var u;
                    this.currentFreeSpin -= 1;
                    var c = this.currentFreeSpin > 0;
                    this.lbl_freespinCount &&
                      (this.lbl_freespinCount.node.active = c),
                      this.bg_free_spin && (this.bg_free_spin.active = c),
                      this.lbl_freespinCount &&
                        (this.lbl_freespinCount.string =
                          null == (u = this.currentFreeSpin)
                            ? void 0
                            : u.toString()),
                      this.currentFreeSpin > 0 &&
                        (this.isFinishedFreeSpin = !1);
                  }
                  this.stop(this.symbols);
                }),
                (o.finishFreeSpins = function () {
                  var t,
                    n =
                      this.sprFrame_backgrounds[
                        null == this ? void 0 : this.mainIndex
                      ];
                  n &&
                    this.spr_background &&
                    (this.spr_background.spriteFrame = n);
                  var i =
                    this.sprFrame_backgrounds_slot[
                      null == this ? void 0 : this.mainIndex
                    ];
                  i && this.spr_bg_slot && (this.spr_bg_slot.spriteFrame = i),
                    null == (t = this.diablo_SlotMachineCmp) ||
                      t.hideStickyWild(),
                    this.playBgmMusic();
                }),
                (o.updateJackpot = function (t, n) {
                  void 0 === n && (n = !1), n && (this._jackpotInfos = []);
                  for (var i = 0; i < t.length; i++) {
                    var e = t[i],
                      l = e ? e.J : 0,
                      o = e ? e.aid : 0,
                      a = e ? e.b : 0;
                    if ((e ? e.gid : void 0) == D.BIGCITY)
                      if (n) {
                        var r = new li();
                        (r.jackpot = l),
                          (r.aid = o),
                          (r.bet = a),
                          this._jackpotInfos.push(r);
                      } else
                        for (var s = 0; s < this._jackpotInfos.length; s++) {
                          var u, c;
                          if (
                            (null == (u = this._jackpotInfos[s])
                              ? void 0
                              : u.aid) == o &&
                            (null == (c = this._jackpotInfos[s])
                              ? void 0
                              : c.bet) == a
                          ) {
                            this._jackpotInfos[s].jackpot = l;
                            break;
                          }
                        }
                  }
                  if (n) {
                    for (
                      var b = [], p = 0;
                      p < this._jackpotInfos.length;
                      p++
                    ) {
                      var _;
                      if (
                        1 ==
                        (null == (_ = this._jackpotInfos[p]) ? void 0 : _.aid)
                      ) {
                        var h = new li();
                        (h.jackpot = this._jackpotInfos[p].jackpot),
                          (h.aid = this._jackpotInfos[p].aid),
                          (h.bet = this._jackpotInfos[p].bet),
                          b.push(h);
                      }
                    }
                    for (var f = 0; f < this._jackpotInfos.length; f++) {
                      var m;
                      if (
                        2 ==
                        (null == (m = this._jackpotInfos[f]) ? void 0 : m.aid)
                      ) {
                        var d = new li();
                        (d.jackpot = this._jackpotInfos[f].jackpot),
                          (d.aid = this._jackpotInfos[f].aid),
                          (d.bet = this._jackpotInfos[f].bet),
                          b.push(d);
                      }
                    }
                    for (var g = 1, y = 0; y < b.length - 1; y++) {
                      for (var w = y + 1; w < b.length; w++) {
                        var v, k;
                        if (
                          (null == (v = b[y]) ? void 0 : v.aid) == g &&
                          (null == (k = b[w]) ? void 0 : k.aid) == g &&
                          b[w].bet < b[y].bet
                        ) {
                          var S = b[y].bet,
                            C = b[y].jackpot;
                          (b[y].bet = b[w].bet),
                            (b[y].jackpot = b[w].jackpot),
                            (b[w].bet = S),
                            (b[w].jackpot = C),
                            (w = y + 1);
                        }
                      }
                      y == b.length - 2 && 1 == g && ((y = 0), (g = 2));
                    }
                    this._jackpotInfos = b;
                  }
                  this.updateJackpotLabels(!n), this.updateLobbyJackpotLabels();
                }),
                (o.updateJackpotLabels = function (t) {
                  for (
                    var n = this, i = 0;
                    i < this._jackpotInfos.length;
                    i++
                  ) {
                    var e, l;
                    if (
                      (null == (e = this._jackpotInfos[i]) ? void 0 : e.aid) ==
                        this._aid &&
                      (null == (l = this._jackpotInfos[i]) ? void 0 : l.bet) ==
                        this.bet
                    ) {
                      if (
                        (this.jackpot_tween && this.jackpot_tween.stop(), t)
                      ) {
                        var o,
                          a = { a: this.jackpot_amount };
                        (this.jackpot_tween = d(a)
                          .to(
                            2,
                            {
                              a:
                                null == (o = this._jackpotInfos[i])
                                  ? void 0
                                  : o.jackpot,
                            },
                            {
                              progress: function (t, i, e, l) {
                                return (
                                  null != n.lblJackpot &&
                                    null != n.lblJackpot &&
                                    ((n.jackpot_amount = e),
                                    (n.lblJackpot.string = X.formatNumber(
                                      Math.floor(e)
                                    ))),
                                  t + (i - t) * l
                                );
                              },
                            }
                          )
                          .call(function () {
                            null != n.lblJackpot && n.lblJackpot;
                          })),
                          this.jackpot_tween.start();
                      } else
                        (this.jackpot_amount = this._jackpotInfos[i].jackpot),
                          null != this.lblJackpot &&
                            null != this.lblJackpot &&
                            (this.lblJackpot.string = X.formatNumber(
                              this.jackpot_amount
                            ));
                      break;
                    }
                  }
                }),
                (o.updateLobbyJackpotLabels = function () {
                  for (
                    var t = this,
                      n = function (n) {
                        var i, e, l;
                        t.lobby_jackpot_tween[n] &&
                          (null == (i = t.lobby_jackpot_tween[n]) || i.stop());
                        var o = { a: t.lobbyJackpots[n] };
                        (t.lobby_jackpot_tween[n] = d(o).to(
                          2,
                          {
                            a:
                              null == (e = t._jackpotInfos[n])
                                ? void 0
                                : e.jackpot,
                          },
                          {
                            progress: function (i, e, l, o) {
                              return (
                                null != t.lbl_lobby_jackpots &&
                                  null != t.lbl_lobby_jackpots &&
                                  null != t.lbl_lobby_jackpots[n] &&
                                  null != t.lbl_lobby_jackpots[n] &&
                                  ((t.lobbyJackpots[n] = l),
                                  (t.lbl_lobby_jackpots[n].string =
                                    X.formatNumber(Math.floor(l)))),
                                i + (e - i) * o
                              );
                            },
                          }
                        )),
                          null == (l = t.lobby_jackpot_tween[n]) || l.start();
                      },
                      i = 0;
                    i < this._jackpotInfos.length;
                    i++
                  )
                    n(i);
                }),
                (o.setLines = function (t) {
                  (this.lineArr = t.map(function (t) {
                    return t.lid;
                  })),
                    (T.LINE = t.map(function (t) {
                      return t.poss;
                    }));
                }),
                (o.setLines2 = function (t) {
                  this.lineArr = t;
                }),
                (o.updateLines = function (t) {
                  v("UPDATE LINE:", JSON.stringify(t)), (this.lineArr = t);
                }),
                (o.onSpinResult = function (n) {
                  if (
                    (t.prototype.onSpinResult.call(this, n),
                    null != n.mgs && null != n.mgs)
                  ) {
                    var i = n.mgs;
                    return N.showNoti(i), void this.forceMachineStop(!0);
                  }
                  this.checkX2Game2(n.lsp);
                }),
                (o.checkX2Game = function (t) {
                  for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    this.checkX2Game2(i, !0);
                  }
                }),
                (o.checkX2Game2 = function (t, n) {
                  void 0 === n && (n = !1);
                  var i = t.ex2;
                  this.wonX2 = i;
                  var e,
                    l = t.m;
                  (this.bigCityX2View && (this.bigCityX2View.tienDaThang = l),
                  this.bigCityX2View &&
                    (this.bigCityX2View.tienX2 = Math.floor(1.98 * l)),
                  t.gs && n)
                    ? null == (e = this.bigCityX2View) || e.open(l)
                    : n &&
                      (this.btn_x2 && (this.btn_x2.interactable = i),
                      null != this.lbl_result_amount &&
                        null != this.lbl_result_amount &&
                        (this.lbl_result_amount.string = X.formatNumber(l)));
                }),
                (o.onX2Response = function (t) {
                  var n;
                  null == (n = this.bigCityX2View) || n.x2GameResponse(t);
                }),
                (o.show = function () {
                  return t.prototype.show.call(this);
                }),
                n
              );
            })(G)).isPlayedIntro = !1),
            (ni.instance = null),
            (Zt = n((Qt = ni).prototype, "lblJackpot", [K], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($t = n(Qt.prototype, "lbl_lobby_jackpots", [W], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (tn = n(Qt.prototype, "lblTongCuoc", [Y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (nn = n(Qt.prototype, "lblCuoc", [Q], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (en = n(Qt.prototype, "lblLine", [Z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ln = n(Qt.prototype, "btn_line", [$], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (on = n(Qt.prototype, "btn_spin", [tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (an = n(Qt.prototype, "btn_x2", [nt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (rn = n(Qt.prototype, "btn_spin_skeleton", [it], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (sn = n(Qt.prototype, "btn_fast", [et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (un = n(Qt.prototype, "btn_lobby_back", [lt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (cn = n(Qt.prototype, "btn_main_back", [ot], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (bn = n(Qt.prototype, "result_node", [at], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (pn = n(Qt.prototype, "bg_result_node", [rt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (_n = n(Qt.prototype, "lbl_result_amount", [st], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (hn = n(Qt.prototype, "diablo_SlotMachineCmp", [ut], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (fn = n(Qt.prototype, "loaded_item_normal", [ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (mn = n(Qt.prototype, "loaded_item_blur", [bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (dn = n(Qt.prototype, "loaded_item_free_normal", [pt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (gn = n(Qt.prototype, "loaded_item_free_blur", [_t], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (yn = n(Qt.prototype, "loaded_anim_item", [ht], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (wn = n(Qt.prototype, "loaded_free_anim_item", [ft], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (vn = n(Qt.prototype, "loading_node", [mt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (kn = n(Qt.prototype, "loading_bg", [dt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Sn = n(Qt.prototype, "lobby_node", [gt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Cn = n(Qt.prototype, "main_node", [yt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (In = n(Qt.prototype, "top_node", [wt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Fn = n(Qt.prototype, "btn_info", [vt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (xn = n(Qt.prototype, "btn_setting", [kt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Bn = n(Qt.prototype, "btn_ranking", [St], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Mn = n(Qt.prototype, "ranking_view_node", [Ct], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (zn = n(Qt.prototype, "btn_bet_history", [It], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (jn = n(Qt.prototype, "bet_history_node", [Ft], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (En = n(Qt.prototype, "bigCityInfoView", [xt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (An = n(Qt.prototype, "bigCitySettingView", [Bt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Tn = n(Qt.prototype, "bottom_node", [Mt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Ln = n(Qt.prototype, "btn_bets", [zt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Vn = n(Qt.prototype, "spr_background", [jt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Jn = n(Qt.prototype, "sprFrame_backgrounds", [Et], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Nn = n(Qt.prototype, "spr_bg_slot", [At], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Dn = n(Qt.prototype, "loaded_spinner_fx", [Tt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Rn = n(Qt.prototype, "spinner_fx", [Lt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Xn = n(Qt.prototype, "sprFrame_backgrounds_slot", [Vt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (Gn = n(Qt.prototype, "bigCity_EffectCmp", [Jt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (On = n(Qt.prototype, "bigCityX2View", [Nt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Pn = n(Qt.prototype, "bigCityLineSelectionView", [Dt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (qn = n(Qt.prototype, "bg_free_spin", [Rt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Un = n(Qt.prototype, "lobby_bgm_music", [Xt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Hn = n(Qt.prototype, "main_bgm_music", [Gt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Kn = n(Qt.prototype, "free_bgm_music", [Ot], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Wn = n(Qt.prototype, "spin_sfx_loop", [Pt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Yn = n(Qt.prototype, "spin_end_sfx", [qt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Qn = n(Qt.prototype, "win_normal_sfx", [Ut], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Zn = n(Qt.prototype, "win_normal_money_sfx", [Ht], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            ($n = n(Qt.prototype, "expanding_wild_sfx", [Kt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (ti = n(Qt.prototype, "trial_node", [Wt], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (Yt = Qt))
          ) || Yt)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCityInfoView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./CommonPopup.ts"],
  function (n) {
    "use strict";
    var e, t, r, i, o, l, u, c, a, s, p, f, b, _, g;
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
            (l = n._decorator),
            (u = n.Button),
            (c = n.Node),
            (a = n.Sprite),
            (s = n.SpriteFrame),
            (p = n.clamp),
            (f = n.Tween),
            (b = n.tween),
            (_ = n.Vec3);
        },
        function (n) {
          g = n.CommonPopup;
        },
      ],
      execute: function () {
        var d, h, y, m, w, I, x, v, z, B, C, P, V, k, F;
        o._RF.push({}, "0b9e9C1Z4ZI7aoZ2/pLHHjg", "BigCityInfoView", void 0);
        var L = l.ccclass,
          D = l.property;
        n(
          "BigCityInfoView",
          ((d = L("BigCityInfoView")),
          (h = D(u)),
          (y = D(u)),
          (m = D(c)),
          (w = D([a])),
          (I = D([s])),
          (x = D(u)),
          d(
            ((B = e(
              (z = (function (n) {
                function e() {
                  for (
                    var e, t = arguments.length, o = new Array(t), l = 0;
                    l < t;
                    l++
                  )
                    o[l] = arguments[l];
                  return (
                    (e = n.call.apply(n, [this].concat(o)) || this),
                    r(e, "btn_prev", B, i(e)),
                    r(e, "btn_next", C, i(e)),
                    r(e, "content", P, i(e)),
                    r(e, "spr_infos", V, i(e)),
                    r(e, "spr_0_frames", k, i(e)),
                    r(e, "btn_close_info", F, i(e)),
                    (e.currentIndex = 0),
                    e
                  );
                }
                t(e, n);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    var n,
                      e,
                      t,
                      r = this;
                    null == (n = this.btn_next) ||
                      n.node.on("click", function () {
                        r.currentIndex++,
                          r.currentIndex >= r.spr_infos.length &&
                            (r.currentIndex = 0),
                          r.loadPage();
                      }),
                      null == (e = this.btn_prev) ||
                        e.node.on("click", function () {
                          r.currentIndex--,
                            r.currentIndex < 0 &&
                              (r.currentIndex = r.spr_infos.length - 1),
                            r.loadPage();
                        }),
                      null == (t = this.btn_close_info) ||
                        t.node.on("click", function () {
                          r.hide();
                        });
                  }),
                  (o.setBet = function (n) {
                    (n = p(n, 0, this.spr_0_frames.length - 1)),
                      (this.spr_infos[0].spriteFrame = this.spr_0_frames[n]);
                  }),
                  (o.loadPage = function (n) {
                    f.stopAllByTarget(this.content),
                      b(this.content)
                        .to(
                          0.5,
                          {
                            position: new _(
                              -1144 * this.currentIndex - 65,
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
              })(g)).prototype,
              "btn_prev",
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
            (C = e(z.prototype, "btn_next", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (P = e(z.prototype, "content", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = e(z.prototype, "spr_infos", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (k = e(z.prototype, "spr_0_frames", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (F = e(z.prototype, "btn_close_info", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = z))
          ) || v)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCityJackpotHistoryItemView.ts",
  ["./rollupPluginModLoBabelHelpers.js", "cc", "./StringUtils.ts"],
  function (t) {
    "use strict";
    var i, e, n, r, o, a, l, h, p, u;
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
            (h = t.Color),
            (p = t.Component);
        },
        function (t) {
          u = t.StringUtils;
        },
      ],
      execute: function () {
        var _, s, c, g, x, f, b, y, m, d, w, k, v;
        o._RF.push(
          {},
          "1e174SMsMtHLJrJiaq1O01M",
          "BigCityJackpotHistoryItemView",
          void 0
        );
        var z = a.ccclass,
          H = a.property;
        t(
          "default",
          ((_ = z("BigCityJackpotHistoryItemView")),
          (s = H(l)),
          (c = H(l)),
          (g = H(l)),
          (x = H(l)),
          (f = H(l)),
          _(
            ((m = i(
              (y = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, o = new Array(e), a = 0;
                    a < e;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (i = t.call.apply(t, [this].concat(o)) || this),
                    n(i, "txt_phien_loai", m, r(i)),
                    n(i, "txt_phien_time", d, r(i)),
                    n(i, "txt_phien_datcuoc", w, r(i)),
                    n(i, "txt_phien_taikhoan", k, r(i)),
                    n(i, "txt_phien_tienthang", v, r(i)),
                    i
                  );
                }
                return (
                  e(i, t),
                  (i.prototype.show = function (t, i, e, n, r) {
                    var o;
                    this.txt_phien_taikhoan &&
                      (this.txt_phien_taikhoan.string = t),
                      this.txt_phien_time &&
                        (this.txt_phien_time.string = i.toString()),
                      this.txt_phien_datcuoc &&
                        (this.txt_phien_datcuoc.string = u.formatNumber(e)),
                      this.txt_phien_loai &&
                        (this.txt_phien_loai.string = r.toString()),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.color = h.WHITE),
                      this.txt_phien_tienthang &&
                        (this.txt_phien_tienthang.string = u.formatNumber(n)),
                      null == (o = this.txt_phien_taikhoan) || o.string;
                  }),
                  i
                );
              })(p)).prototype,
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
            (d = i(y.prototype, "txt_phien_time", [c], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = i(y.prototype, "txt_phien_datcuoc", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (k = i(y.prototype, "txt_phien_taikhoan", [x], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = i(y.prototype, "txt_phien_tienthang", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (b = y))
          ) || b)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCityJackpotHistoryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BigCityJackpotHistoryItemView.ts",
    "./CommonPopup.ts",
    "./GameConfigManager.ts",
    "./HttpManager.ts",
    "./Define.ts",
    "./StringUtils.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, r, o, a, s, c, l, u, p, g, m, h, f, b, y;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
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
          (h = t.HttpCommand), (f = t.httpManager);
        },
        function (t) {
          b = t.GameID;
        },
        function (t) {
          y = t.StringUtils;
        },
      ],
      execute: function () {
        var _, d, v, w, P, C, k, H, T, S, x;
        o._RF.push(
          {},
          "b9915nBPkROc5MhMV4yYSoN",
          "BigCityJackpotHistoryView",
          void 0
        );
        var B = a.ccclass,
          J = a.property,
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
          ((_ = B("BigCityJackpotHistoryView")),
          (d = J(s)),
          (v = J(s)),
          (w = J(c)),
          (P = J([l])),
          _(
            ((H = e(
              (k = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), a = 0;
                    a < i;
                    a++
                  )
                    o[a] = arguments[a];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "btn_prev", H, r(e)),
                    n(e, "btn_next", T, r(e)),
                    n(e, "lbl_page", S, r(e)),
                    n(e, "item_nodes", x, r(e)),
                    (e._bets = []),
                    (e.currentPage = 1),
                    (e.max_pages = 0),
                    (e.item_views = []),
                    e
                  );
                }
                i(e, t);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    var e,
                      i = this;
                    t.prototype.onLoad.call(this),
                      null == (e = this.btn_prev) ||
                        e.node.on("click", function () {
                          i.currentPage > 1 &&
                            ((i.currentPage -= 1),
                            i.lbl_page &&
                              (i.lbl_page.string = i.currentPage.toString())),
                            i.fetchHistory(!1);
                        }),
                      this.btn_next &&
                        this.btn_next.node.on("click", function () {
                          i.currentPage < i.max_pages &&
                            ((i.currentPage += 1),
                            i.lbl_page &&
                              (i.lbl_page.string = i.currentPage.toString())),
                            i.fetchHistory(!1);
                        });
                  }),
                  (o.goToFirstPage = function () {
                    (this.currentPage = 1),
                      this.lbl_page &&
                        (this.lbl_page.string = this.currentPage.toString());
                  }),
                  (o.fetchHistory = function (t) {
                    var e = this;
                    void 0 === t && (t = !0), t && this.goToFirstPage();
                    var i = 6 * (this.currentPage - 1),
                      n =
                        m.SAdomainURL +
                        h.JACKPOT_RANK_TOP_URL.replace(
                          "%gameid%",
                          b.BIGCITY.toString()
                        ).replace("%skip%", i.toString());
                    f.sendGET({
                      url: n,
                      onCompleted: function (i) {
                        e._bets = [];
                        var n = JSON.parse(i).data,
                          r = n.items;
                        if (null != r) {
                          var o = n.count;
                          e.max_pages = Math.ceil(o / 6);
                          for (var a = 0; a < r.length; a++) {
                            var s = r[a],
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
                  (o.showJackpotHistory = function (t) {
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
            (S = e(k.prototype, "lbl_page", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = e(k.prototype, "item_nodes", [P], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (C = k))
          ) || C)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCityLineSelectionView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BigCityFullScreenGameView.ts",
    "./CommonPopup.ts",
  ],
  function (e) {
    "use strict";
    var n, t, i, l, o, c, u, r, a, s, h;
    return {
      setters: [
        function (e) {
          (n = e.applyDecoratedDescriptor),
            (t = e.inheritsLoose),
            (i = e.initializerDefineProperty),
            (l = e.assertThisInitialized);
        },
        function (e) {
          (o = e.cclegacy),
            (c = e._decorator),
            (u = e.Toggle),
            (r = e.Node),
            (a = e.log);
        },
        function (e) {
          s = e.BigCityFullScreenGameView;
        },
        function (e) {
          h = e.CommonPopup;
        },
      ],
      execute: function () {
        var g, b, f, d, _, p, C, y, m, S, k, v, w, L, V;
        o._RF.push(
          {},
          "8ca68BKE29AS7c0qiiDcmVE",
          "BigCityLineSelectionView",
          void 0
        );
        var F = c.ccclass,
          E = c.property;
        e(
          "BigCityLineSelectionView",
          ((g = F("BigCityLineSelectionView")),
          (b = E([u])),
          (f = E(u)),
          (d = E(u)),
          (_ = E(u)),
          (p = E(u)),
          (C = E(r)),
          g(
            ((S = n(
              (m = (function (e) {
                function n() {
                  for (
                    var n, t = arguments.length, o = new Array(t), c = 0;
                    c < t;
                    c++
                  )
                    o[c] = arguments[c];
                  return (
                    (n = e.call.apply(e, [this].concat(o)) || this),
                    i(n, "tog_lines", S, l(n)),
                    i(n, "btn_chan", k, l(n)),
                    i(n, "btn_le", v, l(n)),
                    i(n, "btn_tatca", w, l(n)),
                    i(n, "btn_huy", L, l(n)),
                    i(n, "bigCityFullScreenGameView", V, l(n)),
                    (n.isReload = !0),
                    n
                  );
                }
                t(n, e);
                var o = n.prototype;
                return (
                  (o.onLoad = function () {
                    var e,
                      n,
                      t,
                      i,
                      l,
                      o,
                      c = this;
                    null == (e = this.tog_lines) ||
                      e.forEach(function (e, n) {
                        e.node.on("toggle", function () {
                          var n, t;
                          e.isChecked;
                          var i = c.getSelectedLines();
                          null == (n = c.bigCityFullScreenGameView) ||
                            null == (t = n.getComponent(s)) ||
                            t.updateLines(i);
                        });
                      }),
                      null == (n = this.tog_lines) ||
                        n.forEach(function (e, n) {
                          e.node.on("click", function () {
                            (c.isReload = !0),
                              c.btn_tatca && (c.btn_tatca.isChecked = !0),
                              c.btn_chan && (c.btn_chan.isChecked = !1),
                              c.btn_le && (c.btn_le.isChecked = !1),
                              c.btn_huy && (c.btn_huy.isChecked = !1);
                          });
                        }),
                      null == (t = this.btn_chan) ||
                        t.node.on("toggle", function () {
                          var e, n, t, i;
                          null != (e = c.btn_chan) && e.isChecked,
                            null == (n = c.tog_lines) ||
                              n.forEach(function (e, n) {
                                e.isChecked = n % 2 != 0;
                              });
                          var l = c.getSelectedLines();
                          null == (t = c.bigCityFullScreenGameView) ||
                            null == (i = t.getComponent(s)) ||
                            i.updateLines(l);
                        }),
                      null == (i = this.btn_le) ||
                        i.node.on("toggle", function () {
                          var e, n, t, i;
                          null != (e = c.btn_le) && e.isChecked,
                            null == (n = c.tog_lines) ||
                              n.forEach(function (e, n) {
                                e.isChecked = n % 2 == 0;
                              });
                          var l = c.getSelectedLines();
                          null == (t = c.bigCityFullScreenGameView) ||
                            null == (i = t.getComponent(s)) ||
                            i.updateLines(l);
                        }),
                      null == (l = this.btn_tatca) ||
                        l.node.on("toggle", function () {
                          var e, n, t, i;
                          if (
                            null != (e = c.btn_tatca) &&
                            e.isChecked &&
                            c.isReload
                          )
                            c.isReload = !1;
                          else {
                            null == (n = c.tog_lines) ||
                              n.forEach(function (e, n) {
                                e.isChecked = !0;
                              });
                            var l = c.getSelectedLines();
                            null == (t = c.bigCityFullScreenGameView) ||
                              null == (i = t.getComponent(s)) ||
                              i.updateLines(l);
                          }
                        }),
                      null == (o = this.btn_huy) ||
                        o.node.on("toggle", function () {
                          var e, n, t, i;
                          null != (e = c.btn_huy) && e.isChecked,
                            null == (n = c.tog_lines) ||
                              n.forEach(function (e, n) {
                                e.isChecked = !1;
                              });
                          var l = c.getSelectedLines();
                          null == (t = c.bigCityFullScreenGameView) ||
                            null == (i = t.getComponent(s)) ||
                            i.updateLines(l);
                        });
                  }),
                  (o.getSelectedLines = function () {
                    var e,
                      n = [];
                    return (
                      null == (e = this.tog_lines) ||
                        e.forEach(function (e, t) {
                          e.isChecked && n.push(t);
                        }),
                      n
                    );
                  }),
                  (o.setDefaultLines = function (e) {
                    var n;
                    a(JSON.stringify(e)),
                      null == (n = this.tog_lines) ||
                        n.forEach(function (n, t) {
                          n.isChecked =
                            e.filter(function (e) {
                              return e == t;
                            }).length > 0;
                        }),
                      this.btn_tatca && (this.btn_tatca.isChecked = !0),
                      this.btn_chan && (this.btn_chan.isChecked = !1),
                      this.btn_le && (this.btn_le.isChecked = !1),
                      this.btn_huy && (this.btn_huy.isChecked = !1);
                  }),
                  n
                );
              })(h)).prototype,
              "tog_lines",
              [b],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return [];
                },
              }
            )),
            (k = n(m.prototype, "btn_chan", [f], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (v = n(m.prototype, "btn_le", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (w = n(m.prototype, "btn_tatca", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = n(m.prototype, "btn_huy", [p], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = n(m.prototype, "bigCityFullScreenGameView", [C], {
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
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCityNetworkController.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BaseSlotGameNetworkController.ts",
    "./Define.ts",
    "./BigCityFullScreenGameView.ts",
  ],
  function (t) {
    "use strict";
    var e, n, i, r, o;
    return {
      setters: [
        function (t) {
          e = t.inheritsLoose;
        },
        function (t) {
          n = t.cclegacy;
        },
        function (t) {
          i = t.BaseSlotGameNetworkController;
        },
        function (t) {
          r = t.GameID;
        },
        function (t) {
          o = t.BigCityFullScreenGameView;
        },
      ],
      execute: function () {
        n._RF.push(
          {},
          "f151f8RYa5BG7aF2BfCs5vC",
          "BigCityNetworkController",
          void 0
        ),
          (t(
            "BigCityNetworkController",
            (function (t) {
              function n() {
                return t.apply(this, arguments) || this;
              }
              e(n, t),
                (n.getInstance = function () {
                  return n._instance || (n._instance = new n()), n._instance;
                });
              var i = n.prototype;
              return (
                (i.getGameView = function () {
                  return o.getInstance();
                }),
                (i.getGameID = function () {
                  return r.BIGCITY;
                }),
                n
              );
            })(i)
          )._instance = void 0),
          n._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCityNoHuView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BigCityFullScreenGameView.ts",
    "./StringUtils.ts",
    "./SoundManager.ts",
  ],
  function (n) {
    "use strict";
    var t, e, i, o, a, r, l, u, c, s, _, h, p, w, f, m, k;
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
            (l = n.Node),
            (u = n.sp),
            (c = n.Label),
            (s = n.AudioClip),
            (_ = n.Vec3),
            (h = n.Tween),
            (p = n.tween),
            (w = n.Component);
        },
        function (n) {
          f = n.BigCityFullScreenGameView;
        },
        function (n) {
          m = n.StringUtils;
        },
        function (n) {
          k = n.SoundManager;
        },
      ],
      execute: function () {
        var b, d, g, v, y, j, S, B, C, z, A, N, V;
        a._RF.push({}, "9890f7Zkk9ABYrg6SMZyAcF", "BigCityNoHuView", void 0);
        var M = r.ccclass,
          x = r.property;
        n(
          "BigCityNoHuView",
          ((b = M("BigCityNoHuView")),
          (d = x(l)),
          (g = x(l)),
          (v = x(u.Skeleton)),
          (y = x(c)),
          (j = x(s)),
          b(
            ((C = t(
              (B = (function (n) {
                function t() {
                  for (
                    var t, e = arguments.length, a = new Array(e), r = 0;
                    r < e;
                    r++
                  )
                    a[r] = arguments[r];
                  return (
                    (t = n.call.apply(n, [this].concat(a)) || this),
                    i(t, "root", C, o(t)),
                    i(t, "black_screen", z, o(t)),
                    i(t, "jackpot_skeleton", A, o(t)),
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
                    var n,
                      t = this;
                    null == (n = this.black_screen) ||
                      n.on("click", function () {
                        t.activated_click && t.hide();
                      });
                  }),
                  (a.activeClick = function () {
                    this.black_screen && (this.black_screen.active = !0),
                      (this.activated_click = !0);
                  }),
                  (a.show = function (n) {
                    var t,
                      e,
                      i,
                      o,
                      a,
                      r = this;
                    this.root && (this.root.active = !0),
                      this.black_screen && (this.black_screen.active = !0),
                      (this.activated_click = !1),
                      this.jackpot_skeleton &&
                        this.jackpot_skeleton.setAnimation(0, "appear", !1),
                      this.jackpot_skeleton &&
                        this.jackpot_skeleton.addAnimation(0, "loop", !0),
                      this.nohu_win_amount &&
                        (this.nohu_win_amount.string = "0"),
                      null == (t = this.nohu_win_amount) ||
                        null == (e = t.node.parent) ||
                        e.setPosition(new _(0, -600, 0)),
                      null != (i = this.nohu_win_amount) &&
                        null != (o = i.node) &&
                        o.parent &&
                        h.stopAllByTarget(this.nohu_win_amount.node.parent),
                      p(
                        null == (a = this.nohu_win_amount)
                          ? void 0
                          : a.node.parent
                      )
                        .delay(2)
                        .call(function () {
                          var n, t;
                          null != (n = r.nohu_win_amount) &&
                            null != (t = n.node) &&
                            t.parent &&
                            (r.nohu_win_amount.node.parent.active = !0),
                            k.getInstance().playSfx(r.jackpot_money_sfx);
                        })
                        .to(0.1, { position: new _(0, -290, 0) })
                        .call(function () {
                          r.win_amount_tween && r.win_amount_tween.stop();
                          r.win_amount_tween = p({ a: 0 })
                            .to(
                              4,
                              { a: n },
                              {
                                progress: function (n, t, e, i) {
                                  return (
                                    null != r.nohu_win_amount &&
                                      null != r.nohu_win_amount &&
                                      (r.nohu_win_amount.string =
                                        m.formatNumber(Math.floor(e))),
                                    n + (t - n) * i
                                  );
                                },
                              }
                            )
                            .call(function () {
                              null != r.nohu_win_amount &&
                                null != r.nohu_win_amount &&
                                (r.nohu_win_amount.string = m.formatNumber(
                                  Math.floor(n)
                                ));
                            })
                            .start();
                        })
                        .start();
                  }),
                  (a.hide = function () {
                    var n, t;
                    null != (n = this.root) &&
                      n.active &&
                      (null == (t = f.getInstance()) || t.finishedJackpot());
                    this.activated_click = !1;
                    var e = this;
                    e.black_screen && (e.black_screen.active = !1),
                      e.root && (e.root.active = !1);
                  }),
                  t
                );
              })(w)).prototype,
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
            (z = t(B.prototype, "black_screen", [g], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (A = t(B.prototype, "jackpot_skeleton", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = t(B.prototype, "nohu_win_amount", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = t(B.prototype, "jackpot_money_sfx", [j], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = B))
          ) || S)
        );
        a._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCitySettingView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BigCityBetHistoryView.ts",
    "./BigCityJackpotHistoryView.ts",
    "./CommonPopup.ts",
    "./Define.ts",
    "./EventManager.ts",
  ],
  function (t) {
    "use strict";
    var i, e, n, o, l, u, r, c, s, a, g, f, h, y;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (e = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (o = t.assertThisInitialized);
        },
        function (t) {
          (l = t.cclegacy), (u = t._decorator), (r = t.Button), (c = t.Toggle);
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
          (h = t.eventManager), (y = t.EventKey);
        },
      ],
      execute: function () {
        var b, p, _, d, m, C, w, v, S, k, B, V, x, H, z, M, I;
        l._RF.push({}, "57bee9SEcJOmrjp+x+gagx7", "BigCitySettingView", void 0);
        var T = u.ccclass,
          F = u.property;
        t(
          "BigCitySettingView",
          ((b = T("BigCitySettingView")),
          (p = F(r)),
          (_ = F(r)),
          (d = F(c)),
          (m = F(c)),
          (C = F(r)),
          (w = F(s)),
          (v = F(a)),
          b(
            ((B = i(
              (k = (function (t) {
                function i() {
                  for (
                    var i, e = arguments.length, l = new Array(e), u = 0;
                    u < e;
                    u++
                  )
                    l[u] = arguments[u];
                  return (
                    (i = t.call.apply(t, [this].concat(l)) || this),
                    n(i, "btn_lichsucuoc", B, o(i)),
                    n(i, "btn_lichsuhu", V, o(i)),
                    n(i, "tog_music", x, o(i)),
                    n(i, "tog_sfx", H, o(i)),
                    n(i, "btn_close_setting", z, o(i)),
                    n(i, "bigCityBetHistoryView", M, o(i)),
                    n(i, "bigCityJackpotHistoryView", I, o(i)),
                    i
                  );
                }
                return (
                  e(i, t),
                  (i.prototype.onLoad = function () {
                    var t,
                      i,
                      e,
                      n,
                      o,
                      l,
                      u,
                      r = this;
                    null == (t = this.btn_lichsucuoc) ||
                      t.node.on("click", function () {
                        var t;
                        null == (t = r.bigCityBetHistoryView) ||
                          t.fetchHistory();
                      }),
                      null == (i = this.btn_lichsuhu) ||
                        i.node.on("click", function () {
                          var t;
                          null == (t = r.bigCityJackpotHistoryView) ||
                            t.fetchHistory();
                        }),
                      this.tog_sfx &&
                        (this.tog_sfx.isChecked =
                          "1" == localStorage.getItem(f.SoundFX) ||
                          "true" == localStorage.getItem(f.SoundFX)),
                      this.tog_music &&
                        (this.tog_music.isChecked =
                          "1" == localStorage.getItem(f.Music) ||
                          "true" == localStorage.getItem(f.Music)),
                      h.emit(
                        y.MusicToggle,
                        null == (e = this.tog_music) ? void 0 : e.isChecked
                      ),
                      h.emit(
                        y.SoundToggle,
                        null == (n = this.tog_sfx) ? void 0 : n.isChecked
                      ),
                      null == (o = this.tog_sfx) ||
                        o.node.on("toggle", function () {
                          var t, i;
                          localStorage.setItem(
                            f.SoundFX,
                            null != (t = r.tog_sfx) && t.isChecked ? "1" : "0"
                          ),
                            h.emit(
                              y.SoundToggle,
                              null == (i = r.tog_sfx) ? void 0 : i.isChecked
                            );
                        }),
                      null == (l = this.tog_music) ||
                        l.node.on("toggle", function () {
                          var t, i;
                          localStorage.setItem(
                            f.Music,
                            null != (t = r.tog_music) && t.isChecked ? "1" : "0"
                          ),
                            h.emit(
                              y.MusicToggle,
                              null == (i = r.tog_music) ? void 0 : i.isChecked
                            );
                        }),
                      null == (u = this.btn_close_setting) ||
                        u.node.on("click", function () {
                          r.hide();
                        });
                  }),
                  i
                );
              })(g)).prototype,
              "btn_lichsucuoc",
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
            (V = i(k.prototype, "btn_lichsuhu", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = i(k.prototype, "tog_music", [d], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (H = i(k.prototype, "tog_sfx", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (z = i(k.prototype, "btn_close_setting", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (M = i(k.prototype, "bigCityBetHistoryView", [w], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (I = i(k.prototype, "bigCityJackpotHistoryView", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = k))
          ) || S)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCitySummaryView.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./CommonPopup.ts",
    "./SoundManager.ts",
  ],
  function (t) {
    "use strict";
    var i, n, e, r, l, o, u, a, s, c, p;
    return {
      setters: [
        function (t) {
          (i = t.applyDecoratedDescriptor),
            (n = t.inheritsLoose),
            (e = t.initializerDefineProperty),
            (r = t.assertThisInitialized);
        },
        function (t) {
          (l = t.cclegacy),
            (o = t._decorator),
            (u = t.Label),
            (a = t.AudioClip),
            (s = t.Button);
        },
        function (t) {
          c = t.CommonPopup;
        },
        function (t) {
          p = t.SoundManager;
        },
      ],
      execute: function () {
        var b, f, y, _, m, h, g, d, w, v, x, C, S;
        l._RF.push({}, "9b94dxt7hVAIo71CxD5hrMt", "BigCitySummaryView", void 0);
        var z = o.ccclass,
          B = o.property;
        t(
          "BigCitySummaryView",
          ((b = z("BigCitySummaryView")),
          (f = B(u)),
          (y = B(u)),
          (_ = B(u)),
          (m = B(a)),
          (h = B(s)),
          b(
            ((w = i(
              (d = (function (t) {
                function i() {
                  for (
                    var i, n = arguments.length, l = new Array(n), o = 0;
                    o < n;
                    o++
                  )
                    l[o] = arguments[o];
                  return (
                    (i = t.call.apply(t, [this].concat(l)) || this),
                    e(i, "lbl_1", w, r(i)),
                    e(i, "lbl_2", v, r(i)),
                    e(i, "lbl_3", x, r(i)),
                    e(i, "open_sfx", C, r(i)),
                    e(i, "btn_close_summary", S, r(i)),
                    i
                  );
                }
                n(i, t);
                var l = i.prototype;
                return (
                  (l.onLoad = function () {
                    var i,
                      n = this;
                    t.prototype.onLoad.call(this),
                      null == (i = this.btn_close_summary) ||
                        i.node.on("click", function () {
                          n.hide();
                        });
                  }),
                  (l.setText = function (t, i, n) {
                    void 0 === n && (n = ""),
                      this.lbl_1 && (this.lbl_1.string = t),
                      this.lbl_2 && (this.lbl_2.string = i),
                      "" != n && this.lbl_3 && (this.lbl_3.string = n);
                  }),
                  (l.show = function (i) {
                    void 0 === i && (i = function () {}),
                      t.prototype.show.call(this, i),
                      p.getInstance().playSfx(this.open_sfx);
                  }),
                  i
                );
              })(c)).prototype,
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
            (v = i(d.prototype, "lbl_2", [y], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (x = i(d.prototype, "lbl_3", [_], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (C = i(d.prototype, "open_sfx", [m], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (S = i(d.prototype, "btn_close_summary", [h], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (g = d))
          ) || g)
        );
        l._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/BigCityX2View.ts",
  [
    "./rollupPluginModLoBabelHelpers.js",
    "cc",
    "./BigCityFullScreenGameView.ts",
    "./BigCitySummaryView.ts",
    "./CommonPopup.ts",
    "./PersistManager.ts",
    "./StringUtils.ts",
    "./SoundManager.ts",
    "./BigCityNetworkController.ts",
  ],
  function (t) {
    "use strict";
    var e, i, n, l, o, s, r, a, u, c, h, m, f, g, b, _, p, y, d;
    return {
      setters: [
        function (t) {
          (e = t.applyDecoratedDescriptor),
            (i = t.inheritsLoose),
            (n = t.initializerDefineProperty),
            (l = t.assertThisInitialized);
        },
        function (t) {
          (o = t.cclegacy),
            (s = t._decorator),
            (r = t.Button),
            (a = t.Label),
            (u = t.AudioClip),
            (c = t.sp),
            (h = t.Tween),
            (m = t.tween);
        },
        function (t) {
          f = t.BigCityFullScreenGameView;
        },
        function (t) {
          g = t.BigCitySummaryView;
        },
        function (t) {
          b = t.CommonPopup;
        },
        function (t) {
          _ = t.PersistManager;
        },
        function (t) {
          p = t.StringUtils;
        },
        function (t) {
          y = t.SoundManager;
        },
        function (t) {
          d = t.BigCityNetworkController;
        },
      ],
      execute: function () {
        var w,
          x,
          v,
          S,
          C,
          k,
          B,
          T,
          X,
          z,
          I,
          A,
          V,
          D,
          M,
          P,
          R,
          E,
          K,
          L,
          N,
          G,
          q,
          F,
          U;
        o._RF.push({}, "c26deXUqUlBcrOhRGLlzRM+", "BigCityX2View", void 0);
        var j = s.ccclass,
          H = s.property;
        t(
          "BigCityX2View",
          ((w = j("BigCityX2View")),
          (x = H(r)),
          (v = H(r)),
          (S = H([r])),
          (C = H(a)),
          (k = H(a)),
          (B = H(a)),
          (T = H(g)),
          (X = H(u)),
          (z = H(u)),
          (I = H(u)),
          (A = H(u)),
          w(
            ((M = e(
              (D = (function (t) {
                function e() {
                  for (
                    var e, i = arguments.length, o = new Array(i), s = 0;
                    s < i;
                    s++
                  )
                    o[s] = arguments[s];
                  return (
                    (e = t.call.apply(t, [this].concat(o)) || this),
                    n(e, "btn_play", M, l(e)),
                    n(e, "btn_stop", P, l(e)),
                    n(e, "items", R, l(e)),
                    n(e, "lbl_win", E, l(e)),
                    n(e, "lbl_title", K, l(e)),
                    n(e, "lbl_x2", L, l(e)),
                    n(e, "bigCitySummaryView", N, l(e)),
                    n(e, "x2_minigame_bgm", G, l(e)),
                    n(e, "x2_win_sfx", q, l(e)),
                    n(e, "x2_lose_sfx", F, l(e)),
                    n(e, "x2_touch_sfx", U, l(e)),
                    (e.x2ItemsPosX = [-300, -100, 100, 300]),
                    (e.x2ItemsPosY = [0.32, 0.32, 0.32, 0.32]),
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
                i(e, t);
                var o = e.prototype;
                return (
                  (o.onLoad = function () {
                    var e,
                      i,
                      n,
                      l,
                      o = this;
                    null == (e = this.btn_play) ||
                      e.node.on("click", function () {
                        o.continue();
                      }),
                      null == (i = this.btn_stop) ||
                        i.node.on("click", function () {
                          o.stop();
                        }),
                      (this.skeletons =
                        (null == (n = this.items)
                          ? void 0
                          : n
                              .map(function (t) {
                                return t.target.getComponent(c.Skeleton);
                              })
                              .filter(Boolean)) || []),
                      null == (l = this.items) ||
                        l.forEach(function (t, e) {
                          var i = t,
                            n = e;
                          t.node.on("click", function () {
                            o.request(),
                              (o.selected_item = i),
                              (o.selected_item_index = n);
                          });
                        }),
                      t.prototype.onLoad.call(this);
                  }),
                  (o.request = function () {
                    var t, e;
                    y.getInstance().playSfx(this.x2_touch_sfx),
                      d
                        .getInstance()
                        .requestX2(
                          null == (t = f.getInstance()) ? void 0 : t.getAID()
                        ),
                      null == (e = this.items) ||
                        e.forEach(function (t, e) {
                          t.interactable = !1;
                        });
                  }),
                  (o.open = function (t) {
                    y.getInstance().playBgm(this.x2_minigame_bgm),
                      (this.tienTongKet = t),
                      this.showState(1, this.tienDaThang, this.tienX2),
                      this.show();
                  }),
                  (o.x2GameResponse = function (t) {
                    if (null != t.iid && null != t.iid) {
                      if (0 == t.iid) {
                        var e = t.crd;
                        this.tienTongKet = e;
                        var i = e;
                        (i *= 2 - this.tax),
                          (i = Math.floor(i)),
                          this.showState(2, e, i);
                      } else this.showState(3, 0, 0);
                    } else {
                      if (null == t.mgs || null == t.mgs) {
                        var n = t.mgs;
                        _.showNoti(n);
                      }
                      this.hide();
                    }
                  }),
                  (o.showState = function (t, e, i) {
                    var n = this;
                    switch (t) {
                      case 1:
                        var l, o;
                        this.lbl_win &&
                          (this.lbl_win.string = p.formatNumber(
                            this.tienDaThang
                          )),
                          this.lbl_x2 &&
                            (this.lbl_x2.string = p.formatNumber(this.tienX2)),
                          null == (l = this.items) ||
                            l.forEach(function (t, e) {
                              var i;
                              null == (i = n.skeletons[e]) ||
                                i.setAnimation(0, "idle", !1);
                            }),
                          this.btn_play && (this.btn_play.node.active = !1),
                          null == (o = this.items) ||
                            o.forEach(function (t, e) {
                              t.interactable = !0;
                            }),
                          this.lbl_title && (this.lbl_title.string = "");
                        break;
                      case 2:
                        var s;
                        y.getInstance().playSfx(this.x2_win_sfx),
                          (this.tienDaThang = e),
                          (this.tienX2 = i),
                          this.btn_play && (this.btn_play.node.active = !0),
                          this.lbl_title && (this.lbl_title.string = ""),
                          this.randomResults(2),
                          null == (s = this.items) ||
                            s.forEach(function (e, i) {
                              var l;
                              if (
                                e.name ==
                                (null == (l = n.selected_item)
                                  ? void 0
                                  : l.name)
                              ) {
                                var o = e.target.getComponent(c.Skeleton);
                                null == o ||
                                  o.setAnimation(0, "action_win", !1);
                              } else {
                                var s = e.target.getComponent(c.Skeleton);
                                n.results[i] == t
                                  ? null == s ||
                                    s.setAnimation(0, "action_win2", !1)
                                  : null == s ||
                                    s.setAnimation(0, "action_lose2", !1);
                              }
                            });
                        break;
                      case 3:
                        var r;
                        y.getInstance().playSfx(this.x2_lose_sfx),
                          (this.tienTongKet = 0),
                          this.lbl_title && (this.lbl_title.string = ""),
                          this.randomResults(3),
                          null == (r = this.items) ||
                            r.forEach(function (e, i) {
                              var l;
                              if (
                                e.name ==
                                (null == (l = n.selected_item)
                                  ? void 0
                                  : l.name)
                              ) {
                                var o = e.target.getComponent(c.Skeleton);
                                null == o ||
                                  o.setAnimation(0, "action_lose", !1);
                              } else {
                                var s = e.target.getComponent(c.Skeleton);
                                n.results[i] == t
                                  ? null == s ||
                                    s.setAnimation(0, "action_lose2", !1)
                                  : null == s ||
                                    s.setAnimation(0, "action_win2", !1);
                              }
                            }),
                          h.stopAllByTarget(this.node),
                          m(this.node)
                            .delay(2.5)
                            .call(function () {
                              n.hide();
                            })
                            .start();
                    }
                  }),
                  (o.continue = function () {
                    this.showState(1, this.tienDaThang, this.tienX2);
                  }),
                  (o.hide = function () {
                    var e;
                    null == (e = f.getInstance()) || e.finishX2Game(),
                      t.prototype.hide.call(this);
                  }),
                  (o.stop = function () {
                    var t, e, i;
                    (d
                      .getInstance()
                      .stopX2(
                        null == (t = f.getInstance()) ? void 0 : t.getAID()
                      ),
                    this.hide(),
                    this.tienTongKet > 0) &&
                      (null == (e = this.bigCitySummaryView) ||
                        e.setText(
                          "Chúc mừng bạn đã thắng",
                          "từ minigame X2",
                          p.formatNumber(this.tienTongKet)
                        ),
                      null == (i = this.bigCitySummaryView) || i.show());
                  }),
                  (o.randomResults = function (t) {
                    for (var e = 0; e < 4; e++) this.results[e] = 0;
                    this.results[this.selected_item_index] = t;
                    for (
                      var i = this.selected_item_index;
                      i == this.selected_item_index;

                    )
                      i = Math.round(Math.random() * (this.results.length - 1));
                    this.results[i] = t;
                  }),
                  e
                );
              })(b)).prototype,
              "btn_play",
              [x],
              {
                configurable: !0,
                enumerable: !0,
                writable: !0,
                initializer: function () {
                  return null;
                },
              }
            )),
            (P = e(D.prototype, "btn_stop", [v], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (R = e(D.prototype, "items", [S], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return [];
              },
            })),
            (E = e(D.prototype, "lbl_win", [C], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (K = e(D.prototype, "lbl_title", [k], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (L = e(D.prototype, "lbl_x2", [B], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (N = e(D.prototype, "bigCitySummaryView", [T], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (G = e(D.prototype, "x2_minigame_bgm", [X], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (q = e(D.prototype, "x2_win_sfx", [z], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (F = e(D.prototype, "x2_lose_sfx", [I], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (U = e(D.prototype, "x2_touch_sfx", [A], {
              configurable: !0,
              enumerable: !0,
              writable: !0,
              initializer: function () {
                return null;
              },
            })),
            (V = D))
          ) || V)
        );
        o._RF.pop();
      },
    };
  }
);

System.register(
  "chunks:///_virtual/slot-pvz",
  [
    "./BigCityBetHistoryDetail.ts",
    "./BigCityBetHistoryItemView.ts",
    "./BigCityBetHistoryView.ts",
    "./BigCityBonusItemView.ts",
    "./BigCityBonusView.ts",
    "./BigCityFullScreenGameView.ts",
    "./BigCityInfoView.ts",
    "./BigCityJackpotHistoryItemView.ts",
    "./BigCityJackpotHistoryView.ts",
    "./BigCityLineSelectionView.ts",
    "./BigCityNetworkController.ts",
    "./BigCityNoHuView.ts",
    "./BigCitySettingView.ts",
    "./BigCitySummaryView.ts",
    "./BigCityX2View.ts",
    "./BigCity_EffectCmp.ts",
    "./BigCity_SlotMachineCmp.ts",
    "./BigCity_SlotMachineColumn.ts",
    "./BigCity_SlotMachineItemView.ts",
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
  r("virtual:///prerequisite-imports/slot-pvz", "chunks:///_virtual/slot-pvz");
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
