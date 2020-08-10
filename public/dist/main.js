// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.

// This is a specialised implementation of a System module loader.

"use strict";

// @ts-nocheck
/* eslint-disable */
let System, __instantiate;
(() => {
  const r = new Map();

  System = {
    register(id, d, f) {
      r.set(id, { d, f, exp: {} });
    },
  };
  async function dI(mid, src) {
    let id = mid.replace(/\.\w+$/i, "");
    if (id.includes("./")) {
      const [o, ...ia] = id.split("/").reverse(),
        [, ...sa] = src.split("/").reverse(),
        oa = [o];
      let s = 0,
        i;
      while ((i = ia.shift())) {
        if (i === "..") s++;
        else if (i === ".") break;
        else oa.push(i);
      }
      if (s < sa.length) oa.push(...sa.slice(s));
      id = oa.reverse().join("/");
    }
    return r.has(id) ? gExpA(id) : import(mid);
  }

  function gC(id, main) {
    return {
      id,
      import: (m) => dI(m, id),
      meta: { url: id, main },
    };
  }

  function gE(exp) {
    return (id, v) => {
      v = typeof id === "string" ? { [id]: v } : id;
      for (const [id, value] of Object.entries(v)) {
        Object.defineProperty(exp, id, {
          value,
          writable: true,
          enumerable: true,
        });
      }
    };
  }

  function rF(main) {
    for (const [id, m] of r.entries()) {
      const { f, exp } = m;
      const { execute: e, setters: s } = f(gE(exp), gC(id, id === main));
      delete m.f;
      m.e = e;
      m.s = s;
    }
  }

  async function gExpA(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](await gExpA(d[i]));
      const r = e();
      if (r) await r;
    }
    return m.exp;
  }

  function gExp(id) {
    if (!r.has(id)) return;
    const m = r.get(id);
    if (m.s) {
      const { d, e, s } = m;
      delete m.s;
      delete m.e;
      for (let i = 0; i < s.length; i++) s[i](gExp(d[i]));
      e();
    }
    return m.exp;
  }
  __instantiate = (m, a) => {
    System = __instantiate = undefined;
    rF(m);
    return a ? gExpA(m) : gExp(m);
  };
})();

System.register("models/draw", [], function (exports_1, context_1) {
    "use strict";
    var Draw;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Draw = class Draw {
                constructor(Numer, Dzien, Miesiac, Rok, L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12, L13, L14, L15, L16, L17, L18, L19, L20) {
                    this.Numer = Numer;
                    this.Dzien = Dzien;
                    this.Miesiac = Miesiac;
                    this.Rok = Rok;
                    this.L1 = L1;
                    this.L2 = L2;
                    this.L3 = L3;
                    this.L4 = L4;
                    this.L5 = L5;
                    this.L6 = L6;
                    this.L7 = L7;
                    this.L8 = L8;
                    this.L9 = L9;
                    this.L10 = L10;
                    this.L11 = L11;
                    this.L12 = L12;
                    this.L13 = L13;
                    this.L14 = L14;
                    this.L15 = L15;
                    this.L16 = L16;
                    this.L17 = L17;
                    this.L18 = L18;
                    this.L19 = L19;
                    this.L20 = L20;
                }
            };
            exports_1("Draw", Draw);
        }
    };
});
System.register("models/row", [], function (exports_2, context_2) {
    "use strict";
    var Row;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            Row = class Row {
                constructor(draws) {
                    this.makeDivs();
                }
                makeDivs() {
                    const x = document.createElement("div");
                    x.className = "row";
                    for (let i = 0; i < 80; i++) {
                        const y = document.createElement("div");
                        y.id = "box";
                        y.className = "square";
                        x.appendChild(y);
                    }
                    return x;
                }
            };
            exports_2("Row", Row);
        }
    };
});
System.register("components/draws", [], function (exports_3, context_3) {
    "use strict";
    var LastDraws;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            LastDraws = class LastDraws {
                constructor() {
                    this.loadDraws();
                }
                loadDraws() {
                    return fetch("/draws")
                        .then((drawsResponse) => drawsResponse.json())
                        .then((draws) => {
                        const hostElement = document.getElementById("host");
                        draws.forEach((draw) => {
                            const drawsToColour = [+draw.L1, +draw.L2, +draw.L3, +draw.L4, +draw.L5, +draw.L6, +draw.L7, +draw.L8, +draw.L9, +draw.L10, +draw.L11, +draw.L12, +draw.L13, +draw.L14, +draw.L15, +draw.L16, +draw.L17, +draw.L18, +draw.L19, +draw.L20];
                            console.log(drawsToColour);
                            const headerTeat = `Losowanie nr: ${draw.Numer}, z dnia ${draw.Dzien}.${draw.Miesiac}.${draw.Rok}r.`;
                            const a = document.createElement("div");
                            a.className = "row";
                            const b = document.createElement("div");
                            b.className = "header";
                            b.innerHTML = headerTeat;
                            a.appendChild(b);
                            for (let i = 1; i < 81; i++) {
                                const c = document.createElement("div");
                                c.className = "square";
                                a.appendChild(c);
                            }
                            hostElement.appendChild(a);
                        });
                    });
                }
            };
            exports_3("default", LastDraws);
        }
    };
});
System.register("mod", ["components/draws"], function (exports_4, context_4) {
    "use strict";
    var draws_ts_1;
    var __moduleName = context_4 && context_4.id;
    return {
        setters: [
            function (draws_ts_1_1) {
                draws_ts_1 = draws_ts_1_1;
            }
        ],
        execute: function () {
            new draws_ts_1.default;
        }
    };
});

__instantiate("mod", false);
