(function(e) {
  function t(t) {
    for (
      var c, i, u = t[0], a = t[1], s = t[2], d = 0, b = [];
      d < u.length;
      d++
    )
      (i = u[d]),
        Object.prototype.hasOwnProperty.call(r, i) && r[i] && b.push(r[i][0]),
        (r[i] = 0);
    for (c in a) Object.prototype.hasOwnProperty.call(a, c) && (e[c] = a[c]);
    l && l(t);
    while (b.length) b.shift()();
    return o.push.apply(o, s || []), n();
  }
  function n() {
    for (var e, t = 0; t < o.length; t++) {
      for (var n = o[t], c = !0, u = 1; u < n.length; u++) {
        var a = n[u];
        0 !== r[a] && (c = !1);
      }
      c && (o.splice(t--, 1), (e = i((i.s = n[0]))));
    }
    return e;
  }
  var c = {},
    r = { app: 0 },
    o = [];
  function i(t) {
    if (c[t]) return c[t].exports;
    var n = (c[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, i), (n.l = !0), n.exports;
  }
  (i.m = e),
    (i.c = c),
    (i.d = function(e, t, n) {
      i.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (i.r = function(e) {
      'undefined' !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (i.t = function(e, t) {
      if ((1 & t && (e = i(e)), 8 & t)) return e;
      if (4 & t && 'object' === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (i.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var c in e)
          i.d(
            n,
            c,
            function(t) {
              return e[t];
            }.bind(null, c)
          );
      return n;
    }),
    (i.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e['default'];
            }
          : function() {
              return e;
            };
      return i.d(t, 'a', t), t;
    }),
    (i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (i.p = '/');
  var u = (window['webpackJsonp'] = window['webpackJsonp'] || []),
    a = u.push.bind(u);
  (u.push = t), (u = u.slice());
  for (var s = 0; s < u.length; s++) t(u[s]);
  var l = a;
  o.push([0, 'chunk-vendors']), n();
})({
  0: function(e, t, n) {
    e.exports = n('56d7');
  },
  '1b83': function(e, t, n) {
    'use strict';
    n('c99e');
  },
  3639: function(e, t, n) {},
  4660: function(e, t, n) {
    'use strict';
    n('cb25');
  },
  '56d7': function(e, t, n) {
    'use strict';
    n.r(t);
    n('e260'), n('e6cf'), n('cca6'), n('a79d');
    var c = n('7a23');
    function r(e, t, n, r, o, i) {
      var u = Object(c['n'])('the-header'),
        a = Object(c['n'])('the-resource');
      return (
        Object(c['i'])(),
        Object(c['e'])(
          c['a'],
          null,
          [
            Object(c['h'])(u, { title: o.title }, null, 8, ['title']),
            Object(c['h'])(a)
          ],
          64
        )
      );
    }
    var o = Object(c['r'])('data-v-297c0d4d'),
      i = o(function(e, t, n, r, o, i) {
        return (
          Object(c['i'])(),
          Object(c['e'])('header', null, [
            Object(c['h'])('h1', null, Object(c['p'])(n.title), 1)
          ])
        );
      }),
      u = { props: ['title'] };
    n('1b83');
    (u.render = i), (u.__scopeId = 'data-v-297c0d4d');
    var a = u,
      s = Object(c['r'])('data-v-1165085c');
    Object(c['k'])('data-v-1165085c');
    var l = Object(c['g'])('Stored Resources'),
      d = Object(c['g'])('Add Resource');
    Object(c['j'])();
    var b = s(function(e, t, n, r, o, i) {
        var u = Object(c['n'])('base-button'),
          a = Object(c['n'])('base-card');
        return (
          Object(c['i'])(),
          Object(c['e'])(
            c['a'],
            null,
            [
              Object(c['h'])(a, null, {
                default: s(function() {
                  return [
                    Object(c['h'])(
                      u,
                      {
                        onClick:
                          t[1] ||
                          (t[1] = function(e) {
                            return i.setSelectedTab('stored-resource');
                          }),
                        mode: i.storedResourceMode
                      },
                      {
                        default: s(function() {
                          return [l];
                        }),
                        _: 1
                      },
                      8,
                      ['mode']
                    ),
                    Object(c['h'])(
                      u,
                      {
                        onClick:
                          t[2] ||
                          (t[2] = function(e) {
                            return i.setSelectedTab('add-resource');
                          }),
                        mode: i.addResButtonMode
                      },
                      {
                        default: s(function() {
                          return [d];
                        }),
                        _: 1
                      },
                      8,
                      ['mode']
                    )
                  ];
                }),
                _: 1
              }),
              (Object(c['i'])(),
              Object(c['e'])(
                c['b'],
                null,
                [
                  (Object(c['i'])(),
                  Object(c['e'])(Object(c['o'])(o.selectedTab)))
                ],
                1024
              ))
            ],
            64
          )
        );
      }),
      f =
        (n('c740'),
        n('a434'),
        n('a4d3'),
        n('e01a'),
        n('9911'),
        Object(c['r'])('data-v-9f70595a')),
      j = f(function(e, t, n, r, o, i) {
        var u = Object(c['n'])('learning-resource');
        return (
          Object(c['i'])(),
          Object(c['e'])('ul', null, [
            (Object(c['i'])(!0),
            Object(c['e'])(
              c['a'],
              null,
              Object(c['l'])(i.resources, function(e) {
                return (
                  Object(c['i'])(),
                  Object(c['e'])(
                    u,
                    {
                      title: e.title,
                      description: e.description,
                      link: e.link,
                      id: e.id,
                      key: e.id
                    },
                    null,
                    8,
                    ['title', 'description', 'link', 'id']
                  )
                );
              }),
              128
            ))
          ])
        );
      }),
      O = Object(c['r'])('data-v-5e0a51c7');
    Object(c['k'])('data-v-5e0a51c7');
    var p = Object(c['g'])(' Delete');
    Object(c['j'])();
    var h = O(function(e, t, n, r, o, i) {
        var u = Object(c['n'])('base-button'),
          a = Object(c['n'])('base-card');
        return (
          Object(c['i'])(),
          Object(c['e'])('li', null, [
            Object(c['h'])(a, null, {
              default: O(function() {
                return [
                  Object(c['h'])('header', null, [
                    Object(c['h'])('h2', null, Object(c['p'])(n.title), 1),
                    Object(c['h'])(
                      u,
                      {
                        onClick:
                          t[1] ||
                          (t[1] = function(e) {
                            return i.removeResource(n.id);
                          }),
                        mode: 'flat'
                      },
                      {
                        default: O(function() {
                          return [p];
                        }),
                        _: 1
                      }
                    )
                  ]),
                  Object(c['h'])('p', null, Object(c['p'])(n.description), 1),
                  Object(c['h'])('a', { href: n.link }, 'View Resource', 8, [
                    'href'
                  ])
                ];
              }),
              _: 1
            })
          ])
        );
      }),
      v = {
        inject: ['removeResource'],
        props: ['title', 'description', 'link', 'id']
      };
    n('a3ad');
    (v.render = h), (v.__scopeId = 'data-v-5e0a51c7');
    var m = v,
      g = { inject: ['resources'], components: { LearningResource: m } };
    n('4660');
    (g.render = j), (g.__scopeId = 'data-v-9f70595a');
    var k = g,
      _ = Object(c['r'])('data-v-7bb5481f');
    Object(c['k'])('data-v-7bb5481f');
    var y = Object(c['h'])('p', null, "well this part isn't right", -1),
      R = Object(c['g'])('Okay'),
      I = { class: 'form-control' },
      T = Object(c['h'])('label', { for: 'title' }, 'Title', -1),
      w = { type: 'text', name: 'title', id: 'title', ref: 'titleInput' },
      S = { class: 'form-control' },
      $ = Object(c['h'])(
        'label',
        { for: 'description', id: 'description' },
        'Description',
        -1
      ),
      x = {
        name: 'description',
        id: 'description',
        rows: '3',
        ref: 'descriptionInput'
      },
      C = { class: 'form-control' },
      M = Object(c['h'])('label', { for: 'link' }, 'Link', -1),
      P = { type: 'url', name: 'link', id: 'link', ref: 'linkInput' },
      D = Object(c['g'])('Add Resource');
    Object(c['j'])();
    var A = _(function(e, t, n, r, o, i) {
        var u = Object(c['n'])('base-button'),
          a = Object(c['n'])('base-dialog'),
          s = Object(c['n'])('base-card');
        return (
          Object(c['i'])(),
          Object(c['e'])(
            c['a'],
            null,
            [
              o.inputIsInvalid
                ? (Object(c['i'])(),
                  Object(c['e'])(
                    a,
                    { key: 0, title: 'Invalid Input', onClose: i.confirmError },
                    {
                      default: _(function() {
                        return [y];
                      }),
                      actions: _(function() {
                        return [
                          Object(c['h'])(
                            u,
                            { onClick: i.confirmError },
                            {
                              default: _(function() {
                                return [R];
                              }),
                              _: 1
                            },
                            8,
                            ['onClick']
                          )
                        ];
                      }),
                      _: 1
                    },
                    8,
                    ['onClose']
                  ))
                : Object(c['f'])('', !0),
              Object(c['h'])(s, null, {
                default: _(function() {
                  return [
                    Object(c['h'])(
                      'form',
                      {
                        onSubmit:
                          t[1] ||
                          (t[1] = Object(c['q'])(
                            function() {
                              return i.submitData.apply(i, arguments);
                            },
                            ['prevent']
                          ))
                      },
                      [
                        Object(c['h'])('div', I, [
                          T,
                          Object(c['h'])('input', w, null, 512)
                        ]),
                        Object(c['h'])('div', S, [
                          $,
                          Object(c['h'])('textarea', x, null, 512)
                        ]),
                        Object(c['h'])('div', C, [
                          M,
                          Object(c['h'])('input', P, null, 512)
                        ]),
                        Object(c['h'])(
                          u,
                          { type: 'submit' },
                          {
                            default: _(function() {
                              return [D];
                            }),
                            _: 1
                          }
                        )
                      ],
                      32
                    )
                  ];
                }),
                _: 1
              })
            ],
            64
          )
        );
      }),
      E =
        (n('498a'),
        {
          inject: ['addResource'],
          data: function() {
            return { inputIsInvalid: !1 };
          },
          methods: {
            submitData: function() {
              var e = this.$refs.titleInput.value,
                t = this.$refs.descriptionInput.value,
                n = this.$refs.linkInput.value;
              e.trim() && t.trim() && n.trim()
                ? this.addResource(e, t, n)
                : (this.inputIsInvalid = !0);
            },
            confirmError: function() {
              this.inputIsInvalid = !1;
            }
          }
        });
    n('bf64');
    (E.render = A), (E.__scopeId = 'data-v-7bb5481f');
    var q = E,
      B = {
        components: { StoredResource: k, AddResource: q },
        data: function() {
          return {
            selectedTab: 'stored-resource',
            storedResources: [
              {
                id: 'official-guide',
                title: 'official Guia',
                description: 'The official Vue.js documentation.',
                link: 'https://vuejs.org'
              },
              {
                id: 'google',
                title: 'official Google',
                description: 'The official google documentation.',
                link: 'https://google.com'
              }
            ]
          };
        },
        provide: function() {
          return {
            resources: this.storedResources,
            removeResource: this.removeResource,
            addResource: this.addResource
          };
        },
        computed: {
          storedResourceMode: function() {
            return 'stored-resource' === this.selectedTab ? null : 'flat';
          },
          addResButtonMode: function() {
            return 'add-resource' === this.selectedTab ? null : 'flat';
          }
        },
        methods: {
          setSelectedTab: function(e) {
            this.selectedTab = e;
          },
          addResource: function(e, t, n) {
            var c = {
              id: new Date().toISOString(),
              title: e,
              description: t,
              link: n
            };
            this.storedResources.unshift(c),
              (this.selectedTab = 'stored-resource');
          },
          removeResource: function(e) {
            var t = this.storedResources.findIndex(function(t) {
              return t.id === e;
            });
            this.storedResources.splice(t, 1);
          }
        }
      };
    n('8e5d');
    (B.render = b), (B.__scopeId = 'data-v-1165085c');
    var G = B,
      J = {
        components: { TheHeader: a, TheResource: G },
        data: function() {
          return { title: 'Welcome to the real world' };
        }
      };
    n('64be');
    J.render = r;
    var L = J,
      V = Object(c['r'])('data-v-5e3eaec4'),
      H = V(function(e, t, n, r, o, i) {
        return (
          Object(c['i'])(),
          Object(c['e'])('div', null, [Object(c['m'])(e.$slots, 'default')])
        );
      }),
      W = {};
    n('c4c2');
    (W.render = H), (W.__scopeId = 'data-v-5e3eaec4');
    var z = W,
      F = Object(c['r'])('data-v-696168a0'),
      K = F(function(e, t, n, r, o, i) {
        return (
          Object(c['i'])(),
          Object(c['e'])(
            'button',
            { type: n.type, class: n.mode },
            [Object(c['m'])(e.$slots, 'default')],
            10,
            ['type']
          )
        );
      }),
      N = { props: ['type', 'mode'] };
    n('6031');
    (N.render = K), (N.__scopeId = 'data-v-696168a0');
    var Q = N,
      U = Object(c['r'])('data-v-bd9560e2');
    Object(c['k'])('data-v-bd9560e2');
    var X = { open: '' };
    Object(c['j'])();
    var Y = U(function(e, t, n, r, o, i) {
        var u = Object(c['n'])('base-button');
        return (
          Object(c['i'])(),
          Object(c['e'])(c['c'], { to: 'body' }, [
            Object(c['h'])('div', {
              onClick:
                t[1] ||
                (t[1] = function(t) {
                  return e.$emit('close');
                })
            }),
            Object(c['h'])('dialog', X, [
              Object(c['h'])('header', null, [
                Object(c['m'])(e.$slots, 'header', {}, function() {
                  return [
                    Object(c['h'])('h2', null, Object(c['p'])(n.title), 1)
                  ];
                })
              ]),
              Object(c['h'])('section', null, [
                Object(c['m'])(e.$slots, 'default')
              ]),
              Object(c['h'])('menu', null, [
                Object(c['m'])(e.$slots, 'actions', {}, function() {
                  return [
                    Object(c['h'])(u, {
                      onClick:
                        t[2] ||
                        (t[2] = function(t) {
                          return e.$emit('close');
                        })
                    })
                  ];
                })
              ])
            ])
          ])
        );
      }),
      Z = {
        props: { title: { type: String, required: !1 } },
        emits: ['close']
      };
    n('97bc');
    (Z.render = Y), (Z.__scopeId = 'data-v-bd9560e2');
    var ee = Z,
      te = Object(c['d'])(L);
    te.component('base-card', z),
      te.component('base-button', Q),
      te.component('base-dialog', ee),
      te.mount('#app');
  },
  6031: function(e, t, n) {
    'use strict';
    n('3639');
  },
  '64be': function(e, t, n) {
    'use strict';
    n('c894');
  },
  '69b4': function(e, t, n) {},
  '6d56': function(e, t, n) {},
  '818a': function(e, t, n) {},
  '8e5d': function(e, t, n) {
    'use strict';
    n('c5b7');
  },
  '97bc': function(e, t, n) {
    'use strict';
    n('818a');
  },
  a3ad: function(e, t, n) {
    'use strict';
    n('6d56');
  },
  ad14: function(e, t, n) {},
  bf64: function(e, t, n) {
    'use strict';
    n('69b4');
  },
  c4c2: function(e, t, n) {
    'use strict';
    n('ad14');
  },
  c5b7: function(e, t, n) {},
  c894: function(e, t, n) {},
  c99e: function(e, t, n) {},
  cb25: function(e, t, n) {}
});
//# sourceMappingURL=app.14167501.js.map

const quien = _ => {
  return __dirname;
};

quien('well');
