// Acorn: Copyright 2012 Marijn Haverbeke, MIT License
var mod$$inline_58 = function (a) {
  function b(a) {
    n = a || {};
    for (var b in Ua)
      Object.prototype.hasOwnProperty.call(n, b) || (n[b] = Ua[b]);
    wa = n.sourceFile || null;
  }
  function c(a, b) {
    var c = Ab(k, a);
    b += " (" + c.line + ":" + c.column + ")";
    var d = new SyntaxError(b);
    d.pos = a;
    d.loc = c;
    d.raisedAt = f;
    throw d;
  }
  function d(a) {
    function b(a) {
      if (1 == a.length)
        return (c += "return str === " + JSON.stringify(a[0]) + ";");
      c += "switch(str){";
      for (var va = 0; va < a.length; ++va)
        c += "case " + JSON.stringify(a[va]) + ":";
      c += "return true}return false;";
    }
    a = a.split(" ");
    var c = "",
      d = [],
      e = 0;
    a: for (; e < a.length; ++e) {
      for (var g = 0; g < d.length; ++g)
        if (d[g][0].length == a[e].length) {
          d[g].push(a[e]);
          continue a;
        }
      d.push([a[e]]);
    }
    if (3 < d.length) {
      d.sort(function (a, b) {
        return b.length - a.length;
      });
      c += "switch(str.length){";
      for (e = 0; e < d.length; ++e)
        (a = d[e]), (c += "case " + a[0].length + ":"), b(a);
      c += "}";
    } else b(a);
    return new Function("str", c);
  }
  function e() {
    this.line = G;
    this.column = f - D;
  }
  function g(a, b) {
    X = f;
    n.locations && (ia = new e());
    p = a;
    l();
    H = b;
    R = a.beforeExpr;
  }
  function h() {
    for (
      var a = f,
        b = n.onComment && n.locations && new e(),
        c = k.charCodeAt((f += 2));
      f < S && 10 !== c && 13 !== c && 8232 !== c && 8233 !== c;

    )
      ++f, (c = k.charCodeAt(f));
    if (n.onComment)
      n.onComment(!1, k.slice(a + 2, f), a, f, b, n.locations && new e());
  }
  function l() {
    for (; f < S; ) {
      var a = k.charCodeAt(f);
      if (32 === a) ++f;
      else if (13 === a)
        ++f,
          (a = k.charCodeAt(f)),
          10 === a && ++f,
          n.locations && (++G, (D = f));
      else if (10 === a || 8232 === a || 8233 === a)
        ++f, n.locations && (++G, (D = f));
      else if (8 < a && 14 > a) ++f;
      else if (47 === a)
        if (((a = k.charCodeAt(f + 1)), 42 === a)) {
          var a = n.onComment && n.locations && new e(),
            b = f,
            d = k.indexOf("*/", (f += 2));
          -1 === d && c(f - 2, "Unterminated comment");
          f = d + 2;
          if (n.locations) {
            Y.lastIndex = b;
            for (var g = void 0; (g = Y.exec(k)) && g.index < f; )
              ++G, (D = g.index + g[0].length);
          }
          if (n.onComment)
            n.onComment(!0, k.slice(b + 2, d), b, f, a, n.locations && new e());
        } else if (47 === a) h();
        else break;
      else if (160 === a) ++f;
      else if (5760 <= a && Bb.test(String.fromCharCode(a))) ++f;
      else break;
    }
  }
  function m(a) {
    switch (a) {
      case 46:
        return (
          (a = k.charCodeAt(f + 1)),
          48 <= a && 57 >= a ? (a = P(!0)) : (++f, (a = g(xa))),
          a
        );
      case 40:
        return ++f, g(I);
      case 41:
        return ++f, g(E);
      case 59:
        return ++f, g(J);
      case 44:
        return ++f, g(L);
      case 91:
        return ++f, g(ja);
      case 93:
        return ++f, g(ka);
      case 123:
        return ++f, g(Z);
      case 125:
        return ++f, g(T);
      case 58:
        return ++f, g(aa);
      case 63:
        return ++f, g(ya);
      case 48:
        if (((a = k.charCodeAt(f + 1)), 120 === a || 88 === a))
          return (
            (f += 2),
            (a = B(16)),
            null == a && c(x + 2, "Expected hexadecimal number"),
            la(k.charCodeAt(f)) && c(f, "Identifier directly after number"),
            (a = g(ba, a))
          );
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return P(!1);
      case 34:
      case 39:
        a: {
          f++;
          for (var b = ""; ; ) {
            f >= S && c(x, "Unterminated string constant");
            var d = k.charCodeAt(f);
            if (d === a) {
              ++f;
              a = g(da, b);
              break a;
            }
            if (92 === d) {
              var d = k.charCodeAt(++f),
                e = /^[0-7]+/.exec(k.slice(f, f + 3));
              for (e && (e = e[0]); e && 255 < parseInt(e, 8); )
                e = e.slice(0, -1);
              "0" === e && (e = null);
              ++f;
              if (e)
                C && c(f - 2, "Octal literal in strict mode"),
                  (b += String.fromCharCode(parseInt(e, 8))),
                  (f += e.length - 1);
              else
                switch (d) {
                  case 110:
                    b += "\n";
                    break;
                  case 114:
                    b += "\r";
                    break;
                  case 120:
                    b += String.fromCharCode(ma(2));
                    break;
                  case 117:
                    b += String.fromCharCode(ma(4));
                    break;
                  case 85:
                    b += String.fromCharCode(ma(8));
                    break;
                  case 116:
                    b += "\t";
                    break;
                  case 98:
                    b += "\b";
                    break;
                  case 118:
                    b += "\x0B";
                    break;
                  case 102:
                    b += "\f";
                    break;
                  case 48:
                    b += "\x00";
                    break;
                  case 13:
                    10 === k.charCodeAt(f) && ++f;
                  case 10:
                    n.locations && ((D = f), ++G);
                    break;
                  default:
                    b += String.fromCharCode(d);
                }
            } else
              (13 !== d && 10 !== d && 8232 !== d && 8233 !== d) ||
                c(x, "Unterminated string constant"),
                (b += String.fromCharCode(d)),
                ++f;
          }
        }
        return a;
      case 47:
        return (
          (a = k.charCodeAt(f + 1)),
          R ? (++f, (a = K())) : (a = 61 === a ? t(U, 2) : t(za, 1)),
          a
        );
      case 37:
      case 42:
        return (
          (a = k.charCodeAt(f + 1)), (a = 61 === a ? t(U, 2) : t(Cb, 1)), a
        );
      case 124:
      case 38:
        return (
          (b = k.charCodeAt(f + 1)),
          (a =
            b === a
              ? t(124 === a ? Va : Wa, 2)
              : 61 === b
              ? t(U, 2)
              : t(124 === a ? Db : Eb, 1)),
          a
        );
      case 94:
        return (
          (a = k.charCodeAt(f + 1)), (a = 61 === a ? t(U, 2) : t(Fb, 1)), a
        );
      case 43:
      case 45:
        return (
          (b = k.charCodeAt(f + 1)),
          b === a
            ? 45 == b && 62 == k.charCodeAt(f + 2) && na.test(k.slice(M, f))
              ? ((f += 3), h(), l(), (a = z()))
              : (a = t(Gb, 2))
            : (a = 61 === b ? t(U, 2) : t(Hb, 1)),
          a
        );
      case 60:
      case 62:
        return (
          (b = k.charCodeAt(f + 1)),
          (d = 1),
          b === a
            ? ((d = 62 === a && 62 === k.charCodeAt(f + 2) ? 3 : 2),
              (a = 61 === k.charCodeAt(f + d) ? t(U, d + 1) : t(Ib, d)))
            : 33 == b &&
              60 == a &&
              45 == k.charCodeAt(f + 2) &&
              45 == k.charCodeAt(f + 3)
            ? ((f += 4), h(), l(), (a = z()))
            : (61 === b && (d = 61 === k.charCodeAt(f + 2) ? 3 : 2),
              (a = t(Jb, d))),
          a
        );
      case 61:
      case 33:
        return (
          (b = k.charCodeAt(f + 1)),
          (a =
            61 === b
              ? t(Kb, 61 === k.charCodeAt(f + 2) ? 3 : 2)
              : t(61 === a ? Aa : Xa, 1)),
          a
        );
      case 126:
        return t(Xa, 1);
    }
    return !1;
  }
  function z(a) {
    a ? (f = x + 1) : (x = f);
    n.locations && (oa = new e());
    if (a) return K();
    if (f >= S) return g(pa);
    var b = k.charCodeAt(f);
    if (la(b) || 92 === b) return Ya();
    a = m(b);
    if (!1 === a) {
      b = String.fromCharCode(b);
      if ("\\" === b || Za.test(b)) return Ya();
      c(f, "Unexpected character '" + b + "'");
    }
    return a;
  }
  function t(a, b) {
    var c = k.slice(f, f + b);
    f += b;
    g(a, c);
  }
  function K() {
    for (var a, b, d = f; ; ) {
      f >= S && c(d, "Unterminated regular expression");
      var e = k.charAt(f);
      na.test(e) && c(d, "Unterminated regular expression");
      if (a) a = !1;
      else {
        if ("[" === e) b = !0;
        else if ("]" === e && b) b = !1;
        else if ("/" === e && !b) break;
        a = "\\" === e;
      }
      ++f;
    }
    a = k.slice(d, f);
    ++f;
    (b = $a()) && !/^[gmsiy]*$/.test(b) && c(d, "Invalid regexp flag");
    return g(Ba, new RegExp(a, b));
  }
  function B(a, b) {
    for (var c = f, d = 0, e = 0, g = null == b ? Infinity : b; e < g; ++e) {
      var h = k.charCodeAt(f),
        h =
          97 <= h
            ? h - 97 + 10
            : 65 <= h
            ? h - 65 + 10
            : 48 <= h && 57 >= h
            ? h - 48
            : Infinity;
      if (h >= a) break;
      ++f;
      d = d * a + h;
    }
    return f === c || (null != b && f - c !== b) ? null : d;
  }
  function P(a) {
    var b = f,
      d = !1,
      e = 48 === k.charCodeAt(f);
    a || null !== B(10) || c(b, "Invalid number");
    46 === k.charCodeAt(f) && (++f, B(10), (d = !0));
    a = k.charCodeAt(f);
    if (69 === a || 101 === a)
      (a = k.charCodeAt(++f)),
        (43 !== a && 45 !== a) || ++f,
        null === B(10) && c(b, "Invalid number"),
        (d = !0);
    la(k.charCodeAt(f)) && c(f, "Identifier directly after number");
    a = k.slice(b, f);
    var h;
    d
      ? (h = parseFloat(a))
      : e && 1 !== a.length
      ? /[89]/.test(a) || C
        ? c(b, "Invalid number")
        : (h = parseInt(a, 8))
      : (h = parseInt(a, 10));
    return g(ba, h);
  }
  function ma(a) {
    a = B(16, a);
    null === a && c(x, "Bad character escape sequence");
    return a;
  }
  function $a() {
    ca = !1;
    for (var a, b = !0, d = f; ; ) {
      var e = k.charCodeAt(f);
      if (ab(e)) ca && (a += k.charAt(f)), ++f;
      else if (92 === e) {
        ca || (a = k.slice(d, f));
        ca = !0;
        117 != k.charCodeAt(++f) &&
          c(f, "Expecting Unicode escape sequence \\uXXXX");
        ++f;
        var e = ma(4),
          g = String.fromCharCode(e);
        g || c(f - 1, "Invalid Unicode escape");
        (b ? la(e) : ab(e)) || c(f - 4, "Invalid Unicode escape");
        a += g;
      } else break;
      b = !1;
    }
    return ca ? a : k.slice(d, f);
  }
  function Ya() {
    var a = $a(),
      b = V;
    ca ||
      (Lb(a)
        ? (b = Ca[a])
        : ((n.forbidReserved && (3 === n.ecmaVersion ? Mb : Nb)(a)) ||
            (C && bb(a))) &&
          c(x, "The keyword '" + a + "' is reserved"));
    return g(b, a);
  }
  function r() {
    Da = x;
    M = X;
    Ea = ia;
    z();
  }
  function Fa(a) {
    C = a;
    f = M;
    if (n.locations) for (; f < D; ) (D = k.lastIndexOf("\n", D - 2) + 1), --G;
    l();
    z();
  }
  function cb() {
    this.type = null;
    this.start = x;
    this.end = null;
  }
  function db() {
    this.start = oa;
    this.end = null;
    null !== wa && (this.source = wa);
  }
  function y() {
    var a = new cb();
    n.locations && (a.loc = new db());
    n.directSourceFile && (a.sourceFile = n.directSourceFile);
    n.ranges && (a.range = [x, 0]);
    return a;
  }
  function Q(a) {
    var b = new cb();
    b.start = a.start;
    n.locations && ((b.loc = new db()), (b.loc.start = a.loc.start));
    n.ranges && (b.range = [a.range[0], 0]);
    return b;
  }
  function q(a, b) {
    a.type = b;
    a.end = M;
    n.locations && (a.loc.end = Ea);
    n.ranges && (a.range[1] = M);
    return a;
  }
  function Ga(a) {
    return (
      5 <= n.ecmaVersion &&
      "ExpressionStatement" === a.type &&
      "Literal" === a.expression.type &&
      "use strict" === a.expression.value
    );
  }
  function u(a) {
    if (p === a) return r(), !0;
  }
  function qa() {
    return (
      !n.strictSemicolons && (p === pa || p === T || na.test(k.slice(M, x)))
    );
  }
  function W() {
    u(J) || qa() || N();
  }
  function v(a) {
    p === a ? r() : N();
  }
  function N() {
    c(x, "Unexpected token");
  }
  function ra(a) {
    "Identifier" !== a.type &&
      "MemberExpression" !== a.type &&
      c(a.start, "Assigning to rvalue");
    C &&
      "Identifier" === a.type &&
      sa(a.name) &&
      c(a.start, "Assigning to " + a.name + " in strict mode");
  }
  function F() {
    (p === za || (p === U && "/=" == H)) && z(!0);
    var a = p,
      b = y();
    switch (a) {
      case Ha:
      case eb:
        r();
        var d = a === Ha;
        u(J) || qa()
          ? (b.label = null)
          : p !== V
          ? N()
          : ((b.label = O()), W());
        for (var e = 0; e < w.length; ++e) {
          var g = w[e];
          if (null == b.label || g.name === b.label.name) {
            if (null != g.kind && (d || "loop" === g.kind)) break;
            if (b.label && d) break;
          }
        }
        e === w.length && c(b.start, "Unsyntactic " + a.keyword);
        return q(b, d ? "BreakStatement" : "ContinueStatement");
      case fb:
        return r(), W(), q(b, "DebuggerStatement");
      case gb:
        return (
          r(),
          w.push(Ia),
          (b.body = F()),
          w.pop(),
          v(Ja),
          (b.test = ea()),
          W(),
          q(b, "DoWhileStatement")
        );
      case hb:
        r();
        w.push(Ia);
        v(I);
        if (p === J) return Ka(b, null);
        if (p === La)
          return (
            (a = y()),
            r(),
            ib(a, !0),
            q(a, "VariableDeclaration"),
            1 === a.declarations.length && u(ta) ? jb(b, a) : Ka(b, a)
          );
        a = A(!1, !0);
        return u(ta) ? (ra(a), jb(b, a)) : Ka(b, a);
      case Ma:
        return r(), Na(b, !0);
      case kb:
        return (
          r(),
          (b.test = ea()),
          (b.consequent = F()),
          (b.alternate = u(lb) ? F() : null),
          q(b, "IfStatement")
        );
      case mb:
        return (
          fa || c(x, "'return' outside of function"),
          r(),
          u(J) || qa() ? (b.argument = null) : ((b.argument = A()), W()),
          q(b, "ReturnStatement")
        );
      case Oa:
        r();
        b.discriminant = ea();
        b.cases = [];
        v(Z);
        for (w.push(Ob); p != T; )
          p === Pa || p === nb
            ? ((a = p === Pa),
              e && q(e, "SwitchCase"),
              b.cases.push((e = y())),
              (e.consequent = []),
              r(),
              a
                ? (e.test = A())
                : (d && c(Da, "Multiple default clauses"),
                  (d = !0),
                  (e.test = null)),
              v(aa))
            : (e || N(), e.consequent.push(F()));
        e && q(e, "SwitchCase");
        r();
        w.pop();
        return q(b, "SwitchStatement");
      case ob:
        return (
          r(),
          na.test(k.slice(M, x)) && c(M, "Illegal newline after throw"),
          (b.argument = A()),
          W(),
          q(b, "ThrowStatement")
        );
      case pb:
        return (
          r(),
          (b.block = ga()),
          (b.handler = null),
          p === qb &&
            ((a = y()),
            r(),
            v(I),
            (a.param = O()),
            C &&
              sa(a.param.name) &&
              c(a.param.start, "Binding " + a.param.name + " in strict mode"),
            v(E),
            (a.guard = null),
            (a.body = ga()),
            (b.handler = q(a, "CatchClause"))),
          (b.guardedHandlers = rb),
          (b.finalizer = u(sb) ? ga() : null),
          b.handler ||
            b.finalizer ||
            c(b.start, "Missing catch or finally clause"),
          q(b, "TryStatement")
        );
      case La:
        return r(), ib(b), W(), q(b, "VariableDeclaration");
      case Ja:
        return (
          r(),
          (b.test = ea()),
          w.push(Ia),
          (b.body = F()),
          w.pop(),
          q(b, "WhileStatement")
        );
      case tb:
        return (
          C && c(x, "'with' in strict mode"),
          r(),
          (b.object = ea()),
          (b.body = F()),
          q(b, "WithStatement")
        );
      case Z:
        return ga();
      case J:
        return r(), q(b, "EmptyStatement");
      default:
        d = H;
        g = A();
        if (a === V && "Identifier" === g.type && u(aa)) {
          for (e = 0; e < w.length; ++e)
            w[e].name === d &&
              c(g.start, "Label '" + d + "' is already declared");
          a = p.isLoop ? "loop" : p === Oa ? "switch" : null;
          w.push({ name: d, kind: a });
          b.body = F();
          w.pop();
          b.label = g;
          return q(b, "LabeledStatement");
        }
        b.expression = g;
        W();
        return q(b, "ExpressionStatement");
    }
  }
  function ea() {
    v(I);
    var a = A();
    v(E);
    return a;
  }
  function ga(a) {
    var b = y(),
      c = !0,
      d = !1,
      e;
    b.body = [];
    for (v(Z); !u(T); ) {
      var g = F();
      b.body.push(g);
      c && a && Ga(g) && ((e = d), Fa((d = !0)));
      c = !1;
    }
    d && !e && Fa(!1);
    return q(b, "BlockStatement");
  }
  function Ka(a, b) {
    a.init = b;
    v(J);
    a.test = p === J ? null : A();
    v(J);
    a.update = p === E ? null : A();
    v(E);
    a.body = F();
    w.pop();
    return q(a, "ForStatement");
  }
  function jb(a, b) {
    a.left = b;
    a.right = A();
    v(E);
    a.body = F();
    w.pop();
    return q(a, "ForInStatement");
  }
  function ib(a, b) {
    a.declarations = [];
    for (a.kind = "var"; ; ) {
      var d = y();
      d.id = O();
      C &&
        sa(d.id.name) &&
        c(d.id.start, "Binding " + d.id.name + " in strict mode");
      d.init = u(Aa) ? A(!0, b) : null;
      a.declarations.push(q(d, "VariableDeclarator"));
      if (!u(L)) break;
    }
    return a;
  }
  function A(a, b) {
    var c = Qa(b);
    if (!a && p === L) {
      var d = Q(c);
      for (d.expressions = [c]; u(L); ) d.expressions.push(Qa(b));
      return q(d, "SequenceExpression");
    }
    return c;
  }
  function Qa(a) {
    var b;
    b = a;
    var c;
    c = b;
    c = Ra(Sa(), -1, c);
    if (u(ya)) {
      var d = Q(c);
      d.test = c;
      d.consequent = A(!0);
      v(aa);
      d.alternate = A(!0, b);
      b = q(d, "ConditionalExpression");
    } else b = c;
    return p.isAssign
      ? ((c = Q(b)),
        (c.operator = H),
        (c.left = b),
        r(),
        (c.right = Qa(a)),
        ra(b),
        q(c, "AssignmentExpression"))
      : b;
  }
  function Ra(a, b, c) {
    var d = p.binop;
    if (null != d && (!c || p !== ta) && d > b) {
      var e = Q(a);
      e.left = a;
      e.operator = H;
      a = p;
      r();
      e.right = Ra(Sa(), d, c);
      d = q(e, a === Va || a === Wa ? "LogicalExpression" : "BinaryExpression");
      return Ra(d, b, c);
    }
    return a;
  }
  function Sa() {
    if (p.prefix) {
      var a = y(),
        b = p.isUpdate;
      a.operator = H;
      R = a.prefix = !0;
      r();
      a.argument = Sa();
      b
        ? ra(a.argument)
        : C &&
          "delete" === a.operator &&
          "Identifier" === a.argument.type &&
          c(a.start, "Deleting local variable in strict mode");
      return q(a, b ? "UpdateExpression" : "UnaryExpression");
    }
    for (b = ha(ua()); p.postfix && !qa(); )
      (a = Q(b)),
        (a.operator = H),
        (a.prefix = !1),
        (a.argument = b),
        ra(b),
        r(),
        (b = q(a, "UpdateExpression"));
    return b;
  }
  function ha(a, b) {
    if (u(xa)) {
      var c = Q(a);
      c.object = a;
      c.property = O(!0);
      c.computed = !1;
      return ha(q(c, "MemberExpression"), b);
    }
    return u(ja)
      ? ((c = Q(a)),
        (c.object = a),
        (c.property = A()),
        (c.computed = !0),
        v(ka),
        ha(q(c, "MemberExpression"), b))
      : !b && u(I)
      ? ((c = Q(a)),
        (c.callee = a),
        (c.arguments = Ta(E, !1)),
        ha(q(c, "CallExpression"), b))
      : a;
  }
  function ua() {
    switch (p) {
      case ub:
        var a = y();
        r();
        return q(a, "ThisExpression");
      case V:
        return O();
      case ba:
      case da:
      case Ba:
        return (
          (a = y()),
          (a.value = H),
          (a.raw = k.slice(x, X)),
          r(),
          q(a, "Literal")
        );
      case vb:
      case wb:
      case xb:
        return (
          (a = y()),
          (a.value = p.atomValue),
          (a.raw = p.keyword),
          r(),
          q(a, "Literal")
        );
      case I:
        var a = oa,
          b = x;
        r();
        var d = A();
        d.start = b;
        d.end = X;
        n.locations && ((d.loc.start = a), (d.loc.end = ia));
        n.ranges && (d.range = [b, X]);
        v(E);
        return d;
      case ja:
        return (
          (a = y()), r(), (a.elements = Ta(ka, !0, !0)), q(a, "ArrayExpression")
        );
      case Z:
        a = y();
        b = !0;
        d = !1;
        a.properties = [];
        for (r(); !u(T); ) {
          if (b) b = !1;
          else if ((v(L), n.allowTrailingCommas && u(T))) break;
          var e = { key: p === ba || p === da ? ua() : O(!0) },
            g = !1,
            h;
          u(aa)
            ? ((e.value = A(!0)), (h = e.kind = "init"))
            : 5 <= n.ecmaVersion &&
              "Identifier" === e.key.type &&
              ("get" === e.key.name || "set" === e.key.name)
            ? ((g = d = !0),
              (h = e.kind = e.key.name),
              (e.key = p === ba || p === da ? ua() : O(!0)),
              p !== I && N(),
              (e.value = Na(y(), !1)))
            : N();
          if ("Identifier" === e.key.type && (C || d))
            for (var f = 0; f < a.properties.length; ++f) {
              var l = a.properties[f];
              if (l.key.name === e.key.name) {
                var m =
                  h == l.kind ||
                  (g && "init" === l.kind) ||
                  ("init" === h && ("get" === l.kind || "set" === l.kind));
                m && !C && "init" === h && "init" === l.kind && (m = !1);
                m && c(e.key.start, "Redefinition of property");
              }
            }
          a.properties.push(e);
        }
        return (a = q(a, "ObjectExpression"));
      case Ma:
        return (a = y()), r(), Na(a, !1);
      case yb:
        return (
          (a = y()),
          r(),
          (a.callee = ha(ua(), !0)),
          u(I) ? (a.arguments = Ta(E, !1)) : (a.arguments = rb),
          (a = q(a, "NewExpression"))
        );
      default:
        N();
    }
  }
  function Na(a, b) {
    p === V ? (a.id = O()) : b ? N() : (a.id = null);
    a.params = [];
    var d = !0;
    for (v(I); !u(E); ) d ? (d = !1) : v(L), a.params.push(O());
    var d = fa,
      e = w;
    fa = !0;
    w = [];
    a.body = ga(!0);
    fa = d;
    w = e;
    if (C || (a.body.body.length && Ga(a.body.body[0])))
      for (d = a.id ? -1 : 0; d < a.params.length; ++d)
        if (
          ((e = 0 > d ? a.id : a.params[d]),
          (bb(e.name) || sa(e.name)) &&
            c(e.start, "Defining '" + e.name + "' in strict mode"),
          0 <= d)
        )
          for (var g = 0; g < d; ++g)
            e.name === a.params[g].name &&
              c(e.start, "Argument name clash in strict mode");
    return q(a, b ? "FunctionDeclaration" : "FunctionExpression");
  }
  function Ta(a, b, c) {
    for (var d = [], e = !0; !u(a); ) {
      if (e) e = !1;
      else if ((v(L), b && n.allowTrailingCommas && u(a))) break;
      c && p === L ? d.push(null) : d.push(A(!0));
    }
    return d;
  }
  function O(a) {
    var b = y();
    b.name = p === V ? H : (a && !n.forbidReserved && p.keyword) || N();
    R = !1;
    r();
    return q(b, "Identifier");
  }
  a.version = "0.4.1";
  var n, k, S, wa;
  a.parse = function (a, c) {
    k = String(a);
    S = k.length;
    b(c);
    G = 1;
    f = D = 0;
    R = !0;
    l();
    var d,
      g = n.program;
    Da = M = f;
    n.locations && (Ea = new e());
    fa = C = null;
    w = [];
    z();
    d = g || y();
    var h = !0;
    g || (d.body = []);
    for (; p !== pa; )
      (g = F()), d.body.push(g), h && Ga(g) && Fa(!0), (h = !1);
    return (d = q(d, "Program"));
  };
  var Ua = (a.defaultOptions = {
      ecmaVersion: 5,
      strictSemicolons: !1,
      allowTrailingCommas: !0,
      forbidReserved: !1,
      locations: !1,
      onComment: null,
      ranges: !1,
      program: null,
      sourceFile: null,
      directSourceFile: null,
    }),
    Ab = (a.getLineInfo = function (a, b) {
      for (var c = 1, d = 0; ; ) {
        Y.lastIndex = d;
        var e = Y.exec(a);
        if (e && e.index < b) ++c, (d = e.index + e[0].length);
        else break;
      }
      return { line: c, column: b - d };
    });
  a.tokenize = function (a, c) {
    function d(a) {
      z(a);
      e.start = x;
      e.end = X;
      e.startLoc = oa;
      e.endLoc = ia;
      e.type = p;
      e.value = H;
      return e;
    }
    k = String(a);
    S = k.length;
    b(c);
    G = 1;
    f = D = 0;
    R = !0;
    l();
    var e = {};
    d.jumpTo = function (a, b) {
      f = a;
      if (n.locations) {
        G = 1;
        D = Y.lastIndex = 0;
        for (var c; (c = Y.exec(k)) && c.index < a; )
          ++G, (D = c.index + c[0].length);
      }
      R = b;
      l();
    };
    return d;
  };
  var f,
    x,
    X,
    oa,
    ia,
    p,
    H,
    R,
    G,
    D,
    Da,
    M,
    Ea,
    fa,
    w,
    C,
    rb = [],
    ba = { type: "num" },
    Ba = { type: "regexp" },
    da = { type: "string" },
    V = { type: "name" },
    pa = { type: "eof" },
    Ha = { keyword: "break" },
    Pa = { keyword: "case", beforeExpr: !0 },
    qb = { keyword: "catch" },
    eb = { keyword: "continue" },
    fb = { keyword: "debugger" },
    nb = { keyword: "default" },
    gb = { keyword: "do", isLoop: !0 },
    lb = { keyword: "else", beforeExpr: !0 },
    sb = { keyword: "finally" },
    hb = { keyword: "for", isLoop: !0 },
    Ma = { keyword: "function" },
    kb = { keyword: "if" },
    mb = { keyword: "return", beforeExpr: !0 },
    Oa = { keyword: "switch" },
    ob = { keyword: "throw", beforeExpr: !0 },
    pb = { keyword: "try" },
    La = { keyword: "var" },
    Ja = { keyword: "while", isLoop: !0 },
    tb = { keyword: "with" },
    yb = { keyword: "new", beforeExpr: !0 },
    ub = { keyword: "this" },
    vb = { keyword: "null", atomValue: null },
    wb = { keyword: "true", atomValue: !0 },
    xb = { keyword: "false", atomValue: !1 },
    ta = { keyword: "in", binop: 7, beforeExpr: !0 },
    Ca = {
      break: Ha,
      case: Pa,
      catch: qb,
      continue: eb,
      debugger: fb,
      default: nb,
      do: gb,
      else: lb,
      finally: sb,
      for: hb,
      function: Ma,
      if: kb,
      return: mb,
      switch: Oa,
      throw: ob,
      try: pb,
      var: La,
      while: Ja,
      with: tb,
      null: vb,
      true: wb,
      false: xb,
      new: yb,
      in: ta,
      instanceof: { keyword: "instanceof", binop: 7, beforeExpr: !0 },
      this: ub,
      typeof: { keyword: "typeof", prefix: !0, beforeExpr: !0 },
      void: { keyword: "void", prefix: !0, beforeExpr: !0 },
      delete: { keyword: "delete", prefix: !0, beforeExpr: !0 },
    },
    ja = { type: "[", beforeExpr: !0 },
    ka = { type: "]" },
    Z = { type: "{", beforeExpr: !0 },
    T = { type: "}" },
    I = { type: "(", beforeExpr: !0 },
    E = { type: ")" },
    L = { type: ",", beforeExpr: !0 },
    J = { type: ";", beforeExpr: !0 },
    aa = { type: ":", beforeExpr: !0 },
    xa = { type: "." },
    ya = { type: "?", beforeExpr: !0 },
    za = { binop: 10, beforeExpr: !0 },
    Aa = { isAssign: !0, beforeExpr: !0 },
    U = { isAssign: !0, beforeExpr: !0 },
    Gb = { postfix: !0, prefix: !0, isUpdate: !0 },
    Xa = { prefix: !0, beforeExpr: !0 },
    Va = { binop: 1, beforeExpr: !0 },
    Wa = { binop: 2, beforeExpr: !0 },
    Db = { binop: 3, beforeExpr: !0 },
    Fb = { binop: 4, beforeExpr: !0 },
    Eb = { binop: 5, beforeExpr: !0 },
    Kb = { binop: 6, beforeExpr: !0 },
    Jb = { binop: 7, beforeExpr: !0 },
    Ib = { binop: 8, beforeExpr: !0 },
    Hb = { binop: 9, prefix: !0, beforeExpr: !0 },
    Cb = { binop: 10, beforeExpr: !0 };
  a.tokTypes = {
    bracketL: ja,
    bracketR: ka,
    braceL: Z,
    braceR: T,
    parenL: I,
    parenR: E,
    comma: L,
    semi: J,
    colon: aa,
    dot: xa,
    question: ya,
    slash: za,
    eq: Aa,
    name: V,
    eof: pa,
    num: ba,
    regexp: Ba,
    string: da,
  };
  for (var zb in Ca) a.tokTypes["_" + zb] = Ca[zb];
  var Mb = d(
      "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"
    ),
    Nb = d("class enum extends super const export import"),
    bb = d(
      "implements interface let package private protected public static yield"
    ),
    sa = d("eval arguments"),
    Lb = d(
      "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"
    ),
    Bb = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
    Za = RegExp(
      "[\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]"
    ),
    Pb = RegExp(
      "[\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]"
    ),
    na = /[\n\r\u2028\u2029]/,
    Y = /\r\n|[\n\r\u2028\u2029]/g,
    la = (a.isIdentifierStart = function (a) {
      return 65 > a
        ? 36 === a
        : 91 > a
        ? !0
        : 97 > a
        ? 95 === a
        : 123 > a
        ? !0
        : 170 <= a && Za.test(String.fromCharCode(a));
    }),
    ab = (a.isIdentifierChar = function (a) {
      return 48 > a
        ? 36 === a
        : 58 > a
        ? !0
        : 65 > a
        ? !1
        : 91 > a
        ? !0
        : 97 > a
        ? 95 === a
        : 123 > a
        ? !0
        : 170 <= a && Pb.test(String.fromCharCode(a));
    }),
    ca,
    Ia = { kind: "loop" },
    Ob = { kind: "switch" };
};
"object" == typeof exports && "object" == typeof module
  ? mod$$inline_58(exports)
  : "function" == typeof define && define.amd
  ? define(["exports"], mod$$inline_58)
  : mod$$inline_58(this.acorn || (this.acorn = {}));
// JS-Interpreter: Copyright 2013 Google Inc, Apache 2.0
var Interpreter = function (a, b) {
  "string" == typeof a && (a = acorn.parse(a, Interpreter.PARSE_OPTIONS));
  this.ast = a;
  this.initFunc_ = b;
  this.paused_ = !1;
  this.polyfills_ = [];
  this.UNDEFINED = new Interpreter.Primitive(void 0, this);
  this.NULL = new Interpreter.Primitive(null, this);
  this.NAN = new Interpreter.Primitive(NaN, this);
  this.TRUE = new Interpreter.Primitive(!0, this);
  this.FALSE = new Interpreter.Primitive(!1, this);
  this.NUMBER_ZERO = new Interpreter.Primitive(0, this);
  this.NUMBER_ONE = new Interpreter.Primitive(1, this);
  this.STRING_EMPTY = new Interpreter.Primitive("", this);
  b = this.createScope(this.ast, null);
  this.NAN.parent = this.NUMBER;
  this.TRUE.parent = this.BOOLEAN;
  this.FALSE.parent = this.BOOLEAN;
  this.NUMBER_ZERO.parent = this.NUMBER;
  this.NUMBER_ONE.parent = this.NUMBER;
  this.STRING_EMPTY.parent = this.STRING;
  this.ast = acorn.parse(this.polyfills_.join("\n"), Interpreter.PARSE_OPTIONS);
  this.polyfills_ = void 0;
  this.stripLocations_(this.ast);
  this.stateStack = [{ node: this.ast, scope: b, thisExpression: b, done: !1 }];
  this.run();
  this.value = this.UNDEFINED;
  this.ast = a;
  this.stateStack = [{ node: this.ast, scope: b, thisExpression: b, done: !1 }];
};
Interpreter.PARSE_OPTIONS = { ecmaVersion: 5 };
Interpreter.READONLY_DESCRIPTOR = {
  configurable: !0,
  enumerable: !0,
  writable: !1,
};
Interpreter.NONENUMERABLE_DESCRIPTOR = {
  configurable: !0,
  enumerable: !1,
  writable: !0,
};
Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR = {
  configurable: !0,
  enumerable: !1,
  writable: !1,
};
Interpreter.prototype.appendCode = function (a) {
  var b = this.stateStack[this.stateStack.length - 1];
  if (!b || "Program" != b.node.type)
    throw Error("Expecting original AST to start with a Program node.");
  "string" == typeof a && (a = acorn.parse(a, Interpreter.PARSE_OPTIONS));
  if (!a || "Program" != a.type)
    throw Error("Expecting new AST to start with a Program node.");
  this.populateScope_(a, b.scope);
  for (var c = 0, d; (d = a.body[c]); c++) b.node.body.push(d);
  b.done = !1;
};
Interpreter.prototype.step = function () {
  var a = this.stateStack[0];
  if (!a || ("Program" == a.node.type && a.done)) return !1;
  if (this.paused_) return !0;
  this["step" + a.node.type]();
  return a.node.end ? !0 : this.step();
};
Interpreter.prototype.run = function () {
  for (; !this.paused_ && this.step(); );
  return this.paused_;
};
Interpreter.prototype.initGlobalScope = function (a) {
  this.setProperty(
    a,
    "Infinity",
    this.createPrimitive(Infinity),
    Interpreter.READONLY_DESCRIPTOR
  );
  this.setProperty(a, "NaN", this.NAN, Interpreter.READONLY_DESCRIPTOR);
  this.setProperty(
    a,
    "undefined",
    this.UNDEFINED,
    Interpreter.READONLY_DESCRIPTOR
  );
  this.setProperty(a, "window", a, Interpreter.READONLY_DESCRIPTOR);
  this.setProperty(a, "self", a);
  this.initFunction(a);
  this.initObject(a);
  a.parent = this.OBJECT;
  this.initArray(a);
  this.initNumber(a);
  this.initString(a);
  this.initBoolean(a);
  this.initDate(a);
  this.initMath(a);
  this.initRegExp(a);
  this.initJSON(a);
  this.initError(a);
  var b = this,
    c;
  c = function (a) {
    a = a || b.UNDEFINED;
    return b.createPrimitive(isNaN(a.toNumber()));
  };
  this.setProperty(a, "isNaN", this.createNativeFunction(c));
  c = function (a) {
    a = a || b.UNDEFINED;
    return b.createPrimitive(isFinite(a.toNumber()));
  };
  this.setProperty(a, "isFinite", this.createNativeFunction(c));
  this.setProperty(
    a,
    "parseFloat",
    this.getProperty(this.NUMBER, "parseFloat")
  );
  this.setProperty(a, "parseInt", this.getProperty(this.NUMBER, "parseInt"));
  c = this.createObject(this.FUNCTION);
  c.eval = !0;
  this.setProperty(
    c,
    "length",
    this.NUMBER_ONE,
    Interpreter.READONLY_DESCRIPTOR
  );
  this.setProperty(a, "eval", c);
  for (
    var d = [
        [escape, "escape"],
        [unescape, "unescape"],
        [decodeURI, "decodeURI"],
        [decodeURIComponent, "decodeURIComponent"],
        [encodeURI, "encodeURI"],
        [encodeURIComponent, "encodeURIComponent"],
      ],
      h = 0;
    h < d.length;
    h++
  )
    (c = (function (a) {
      return function (c) {
        c = (c || b.UNDEFINED).toString();
        try {
          c = a(c);
        } catch (r) {
          b.throwException(b.URI_ERROR, r.message);
        }
        return b.createPrimitive(c);
      };
    })(d[h][0])),
      this.setProperty(a, d[h][1], this.createNativeFunction(c));
  this.initFunc_ && this.initFunc_(this, a);
};
Interpreter.prototype.initFunction = function (a) {
  var b = this,
    c;
  c = function (a) {
    for (
      var c = this.parent == b.FUNCTION ? this : b.createObject(b.FUNCTION),
        d = arguments.length ? arguments[arguments.length - 1].toString() : "",
        p = [],
        r = 0;
      r < arguments.length - 1;
      r++
    )
      p.push(arguments[r].toString());
    p = p.join(", ");
    if (-1 != p.indexOf(")"))
      throw SyntaxError("Function arg string contains parenthesis");
    c.parentScope = b.stateStack[b.stateStack.length - 1].scope;
    d = acorn.parse(
      "$ = function(" + p + ") {" + d + "};",
      Interpreter.PARSE_OPTIONS
    );
    c.node = d.body[0].expression.right;
    b.setProperty(
      c,
      "length",
      b.createPrimitive(c.node.length),
      Interpreter.READONLY_DESCRIPTOR
    );
    return c;
  };
  this.FUNCTION = this.createObject(null);
  this.setProperty(a, "Function", this.FUNCTION);
  this.FUNCTION.type = "function";
  this.setProperty(this.FUNCTION, "prototype", this.createObject(null));
  this.FUNCTION.nativeFunc = c;
  c = function (a, c) {
    var d = b.stateStack[0];
    d.func_ = this;
    d.funcThis_ = a;
    d.arguments = [];
    if (c)
      if (b.isa(c, b.ARRAY))
        for (a = 0; a < c.length; a++) d.arguments[a] = b.getProperty(c, a);
      else
        b.throwException(
          b.TYPE_ERROR,
          "CreateListFromArrayLike called on non-object"
        );
    d.doneArgs_ = !0;
    d.doneExec_ = !1;
  };
  this.setNativeFunctionPrototype(this.FUNCTION, "apply", c);
  c = function (a, c) {
    var d = b.stateStack[0];
    d.func_ = this;
    d.funcThis_ = a;
    d.arguments = [];
    for (var h = 1; h < arguments.length; h++) d.arguments.push(arguments[h]);
    d.doneArgs_ = !0;
    d.doneExec_ = !1;
  };
  this.setNativeFunctionPrototype(this.FUNCTION, "call", c);
  c = function (a, c) {
    var d = b.createFunction(this.node, this.parentScope);
    a && (d.boundThis_ = a);
    d.boundArgs_ = [];
    for (var h = 1; h < arguments.length; h++) d.boundArgs_.push(arguments[h]);
    return d;
  };
  this.setNativeFunctionPrototype(this.FUNCTION, "bind", c);
  c = function () {
    return b.createPrimitive(this.toString());
  };
  this.setNativeFunctionPrototype(this.FUNCTION, "toString", c);
  this.setProperty(
    this.FUNCTION,
    "toString",
    this.createNativeFunction(c),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
  c = function () {
    return b.createPrimitive(this.valueOf());
  };
  this.setNativeFunctionPrototype(this.FUNCTION, "valueOf", c);
  this.setProperty(
    this.FUNCTION,
    "valueOf",
    this.createNativeFunction(c),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
};
Interpreter.prototype.initObject = function (a) {
  var b = this,
    c;
  c = function (a) {
    if (!a || a == b.UNDEFINED || a == b.NULL)
      return this.parent == b.OBJECT ? this : b.createObject(b.OBJECT);
    if (a.isPrimitive) {
      var c = b.createObject(a.parent);
      c.data = a.data;
      return c;
    }
    return a;
  };
  this.OBJECT = this.createNativeFunction(c);
  this.setProperty(a, "Object", this.OBJECT);
  c = function (a) {
    var c = b.createObject(b.ARRAY),
      d = 0,
      p;
    for (p in a.properties) b.setProperty(c, d, b.createPrimitive(p)), d++;
    return c;
  };
  this.setProperty(
    this.OBJECT,
    "getOwnPropertyNames",
    this.createNativeFunction(c),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
  c = function (a) {
    var c = b.createObject(b.ARRAY),
      d = 0,
      p;
    for (p in a.properties)
      a.notEnumerable[p] || (b.setProperty(c, d, b.createPrimitive(p)), d++);
    return c;
  };
  this.setProperty(
    this.OBJECT,
    "keys",
    this.createNativeFunction(c),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
  c = function (a, c, g) {
    c = (c || b.UNDEFINED).toString();
    if (g instanceof Interpreter.Object)
      if (!a.properties[c] && a.preventExtensions)
        b.throwException(
          b.TYPE_ERROR,
          "can not define property " + c + ", object is not extensible"
        );
      else {
        var d = b.getProperty(g, "value");
        d == b.UNDEFINED && (d = null);
        var h = b.getProperty(g, "get"),
          v = b.getProperty(g, "set");
        g = {
          configurable: b.pseudoToNative(b.getProperty(g, "configurable")),
          enumerable: b.pseudoToNative(b.getProperty(g, "enumerable")),
          writable: b.pseudoToNative(b.getProperty(g, "writable")),
          get: h == b.UNDEFINED ? void 0 : h,
          set: v == b.UNDEFINED ? void 0 : v,
        };
        b.setProperty(a, c, d, g);
        return a;
      }
    else
      b.throwException(b.TYPE_ERROR, "Property description must be an object.");
  };
  this.setProperty(
    this.OBJECT,
    "defineProperty",
    this.createNativeFunction(c),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
  this.polyfills_.push(
    "Object.defineProperty(Array.prototype, 'defineProperties', {configurable: true, value:",
    "function(obj, props) {",
    "var keys = Object.keys(props);",
    "for (var i = 0; i < keys.length; i++) {",
    "Object.defineProperty(obj, keys[i], props[keys[i]]);",
    "}",
    "return obj;",
    "}",
    "});",
    ""
  );
  c = function (a, c) {
    c = (c || b.UNDEFINED).toString();
    if (!(c in a.properties)) return b.UNDEFINED;
    var d = !a.notConfigurable[c],
      h = !a.notEnumerable[c],
      r = !a.notWritable[c],
      v = a.getter[c],
      w = a.setter[c],
      q = b.createObject(b.OBJECT);
    b.setProperty(q, "configurable", b.createPrimitive(d));
    b.setProperty(q, "enumerable", b.createPrimitive(h));
    v || w
      ? (b.setProperty(q, "getter", v), b.setProperty(q, "setter", w))
      : (b.setProperty(q, "writable", b.createPrimitive(r)),
        b.setProperty(q, "value", b.getProperty(a, c)));
    return q;
  };
  this.setProperty(
    this.OBJECT,
    "getOwnPropertyDescriptor",
    this.createNativeFunction(c),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
  c = function (a) {
    return a.parent && a.parent.properties && a.parent.properties.prototype
      ? a.parent.properties.prototype
      : b.NULL;
  };
  this.setProperty(
    this.OBJECT,
    "getPrototypeOf",
    this.createNativeFunction(c),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
  c = function (a) {
    return b.createPrimitive(!a.preventExtensions);
  };
  this.setProperty(
    this.OBJECT,
    "isExtensible",
    this.createNativeFunction(c),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
  c = function (a) {
    a.isPrimitive || (a.preventExtensions = !0);
    return a;
  };
  this.setProperty(
    this.OBJECT,
    "preventExtensions",
    this.createNativeFunction(c),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
  c = function () {
    return b.createPrimitive(this.toString());
  };
  this.setNativeFunctionPrototype(this.OBJECT, "toString", c);
  c = function () {
    return b.createPrimitive(this.toString());
  };
  this.setNativeFunctionPrototype(this.OBJECT, "toLocaleString", c);
  c = function () {
    return b.createPrimitive(this.valueOf());
  };
  this.setNativeFunctionPrototype(this.OBJECT, "valueOf", c);
  c = function (a) {
    if (this == b.NULL || this == b.UNDEFINED)
      b.throwException(
        b.TYPE_ERROR,
        "Cannot convert undefined or null to object"
      );
    else
      return (
        (a = (a || b.UNDEFINED).toString()),
        a in this.properties ? b.TRUE : b.FALSE
      );
  };
  this.setNativeFunctionPrototype(this.OBJECT, "hasOwnProperty", c);
  c = function (a) {
    a = (a || b.UNDEFINED).toString();
    a = a in this.properties && !this.notEnumerable[a];
    return b.createPrimitive(a);
  };
  this.setNativeFunctionPrototype(this.OBJECT, "propertyIsEnumerable", c);
  c = function (a) {
    for (;;)
      if (a.parent && a.parent.properties && a.parent.properties.prototype) {
        if (((a = a.parent.properties.prototype), a == this))
          return b.createPrimitive(!0);
      } else return b.createPrimitive(!1);
  };
  this.setNativeFunctionPrototype(this.OBJECT, "isPrototypeOf", c);
};
Interpreter.prototype.initArray = function (a) {
  var b = this,
    c = function (a, b) {
      a = a ? Math.floor(a.toNumber()) : b;
      isNaN(a) && (a = b);
      return a;
    },
    d;
  d = function (a) {
    var c = this.parent == b.ARRAY ? this : b.createObject(b.ARRAY),
      d = arguments[0];
    if (d && "number" == d.type)
      isNaN(b.arrayIndex(d)) &&
        b.throwException(b.RANGE_ERROR, "Invalid array length"),
        (c.length = d.data);
    else {
      for (d = 0; d < arguments.length; d++) c.properties[d] = arguments[d];
      c.length = d;
    }
    return c;
  };
  this.ARRAY = this.createNativeFunction(d);
  this.setProperty(a, "Array", this.ARRAY);
  d = function (a) {
    return b.createPrimitive(b.isa(a, b.ARRAY));
  };
  this.setProperty(
    this.ARRAY,
    "isArray",
    this.createNativeFunction(d),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
  d = function () {
    if (this.length) {
      var a = this.properties[this.length - 1];
      delete this.properties[this.length - 1];
      this.length--;
    } else a = b.UNDEFINED;
    return a;
  };
  this.setNativeFunctionPrototype(this.ARRAY, "pop", d);
  d = function (a) {
    for (var c = 0; c < arguments.length; c++)
      (this.properties[this.length] = arguments[c]), this.length++;
    return b.createPrimitive(this.length);
  };
  this.setNativeFunctionPrototype(this.ARRAY, "push", d);
  d = function () {
    if (this.length) {
      for (var a = this.properties[0], c = 1; c < this.length; c++)
        this.properties[c - 1] = this.properties[c];
      this.length--;
      delete this.properties[this.length];
    } else a = b.UNDEFINED;
    return a;
  };
  this.setNativeFunctionPrototype(this.ARRAY, "shift", d);
  d = function (a) {
    for (var c = this.length - 1; 0 <= c; c--)
      this.properties[c + arguments.length] = this.properties[c];
    this.length += arguments.length;
    for (c = 0; c < arguments.length; c++) this.properties[c] = arguments[c];
    return b.createPrimitive(this.length);
  };
  this.setNativeFunctionPrototype(this.ARRAY, "unshift", d);
  d = function () {
    for (var a = 0; a < this.length / 2; a++) {
      var b = this.properties[this.length - a - 1];
      this.properties[this.length - a - 1] = this.properties[a];
      this.properties[a] = b;
    }
    return this;
  };
  this.setNativeFunctionPrototype(this.ARRAY, "reverse", d);
  d = function (a, d, p) {
    a = c(a, 0);
    a = 0 > a ? Math.max(this.length + a, 0) : Math.min(a, this.length);
    d = c(d, Infinity);
    d = Math.min(d, this.length - a);
    for (var g = b.createObject(b.ARRAY), h = a; h < a + d; h++)
      (g.properties[g.length++] = this.properties[h]),
        (this.properties[h] = this.properties[h + d]);
    for (h = a + d; h < this.length - d; h++)
      this.properties[h] = this.properties[h + d];
    for (h = this.length - d; h < this.length; h++) delete this.properties[h];
    this.length -= d;
    for (h = this.length - 1; h >= a; h--)
      this.properties[h + arguments.length - 2] = this.properties[h];
    this.length += arguments.length - 2;
    for (h = 2; h < arguments.length; h++)
      this.properties[a + h - 2] = arguments[h];
    return g;
  };
  this.setNativeFunctionPrototype(this.ARRAY, "splice", d);
  d = function (a, d) {
    var g = b.createObject(b.ARRAY),
      h = c(a, 0);
    0 > h && (h = this.length + h);
    h = Math.max(0, Math.min(h, this.length));
    d = c(d, this.length);
    0 > d && (d = this.length + d);
    d = Math.max(0, Math.min(d, this.length));
    for (a = 0; h < d; h++) {
      var v = b.getProperty(this, h);
      b.setProperty(g, a++, v);
    }
    return g;
  };
  this.setNativeFunctionPrototype(this.ARRAY, "slice", d);
  d = function (a) {
    a = a && void 0 !== a.data ? a.toString() : void 0;
    for (var c = [], d = 0; d < this.length; d++) c[d] = this.properties[d];
    return b.createPrimitive(c.join(a));
  };
  this.setNativeFunctionPrototype(this.ARRAY, "join", d);
  d = function (a) {
    for (var c = b.createObject(b.ARRAY), d = 0, h = 0; h < this.length; h++) {
      var v = b.getProperty(this, h);
      b.setProperty(c, d++, v);
    }
    for (h = 0; h < arguments.length; h++) {
      var w = arguments[h];
      if (b.isa(w, b.ARRAY))
        for (var q = 0; q < w.length; q++)
          (v = b.getProperty(w, q)), b.setProperty(c, d++, v);
      else b.setProperty(c, d++, w);
    }
    return c;
  };
  this.setNativeFunctionPrototype(this.ARRAY, "concat", d);
  d = function (a, d) {
    a = a || b.UNDEFINED;
    d = c(d, 0);
    0 > d && (d = this.length + d);
    for (d = Math.max(0, d); d < this.length; d++) {
      var h = b.getProperty(this, d);
      if (h.isPrimitive && a.isPrimitive ? h.data === a.data : h === a)
        return b.createPrimitive(d);
    }
    return b.createPrimitive(-1);
  };
  this.setNativeFunctionPrototype(this.ARRAY, "indexOf", d);
  d = function (a, d) {
    a = a || b.UNDEFINED;
    d = c(d, this.length);
    0 > d && (d = this.length + d);
    for (d = Math.min(d, this.length - 1); 0 <= d; d--) {
      var h = b.getProperty(this, d);
      if (h.isPrimitive && a.isPrimitive ? h.data === a.data : h === a)
        return b.createPrimitive(d);
    }
    return b.createPrimitive(-1);
  };
  this.setNativeFunctionPrototype(this.ARRAY, "lastIndexOf", d);
  this.polyfills_.push(
    "Object.defineProperty(Array.prototype, 'every', {configurable: true, value:",
    "function(callbackfn, thisArg) {",
    "if (this == null || typeof callbackfn !== 'function') throw new TypeError;",
    "var T, k;",
    "var O = Object(this);",
    "var len = O.length >>> 0;",
    "if (arguments.length > 1) T = thisArg;",
    "k = 0;",
    "while (k < len) {",
    "if (k in O && !callbackfn.call(T, O[k], k, O)) return false;",
    "k++;",
    "}",
    "return true;",
    "}",
    "});",
    "Object.defineProperty(Array.prototype, 'filter', {configurable: true, value:",
    "function(fun/*, thisArg*/) {",
    "if (this === void 0 || this === null || typeof fun !== 'function') throw new TypeError;",
    "var t = Object(this);",
    "var len = t.length >>> 0;",
    "var res = [];",
    "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;",
    "for (var i = 0; i < len; i++) {",
    "if (i in t) {",
    "var val = t[i];",
    "if (fun.call(thisArg, val, i, t)) res.push(val);",
    "}",
    "}",
    "return res;",
    "}",
    "});",
    "Object.defineProperty(Array.prototype, 'forEach', {configurable: true, value:",
    "function(callback, thisArg) {",
    "if (this == null || typeof callback !== 'function') throw new TypeError;",
    "var T, k;",
    "var O = Object(this);",
    "var len = O.length >>> 0;",
    "if (arguments.length > 1) T = thisArg;",
    "k = 0;",
    "while (k < len) {",
    "if (k in O) callback.call(T, O[k], k, O);",
    "k++;",
    "}",
    "}",
    "});",
    "Object.defineProperty(Array.prototype, 'map', {configurable: true, value:",
    "function(callback, thisArg) {",
    "if (this == null || typeof callback !== 'function') new TypeError;",
    "var T, A, k;",
    "var O = Object(this);",
    "var len = O.length >>> 0;",
    "if (arguments.length > 1) T = thisArg;",
    "A = new Array(len);",
    "k = 0;",
    "while (k < len) {",
    "if (k in O) A[k] = callback.call(T, O[k], k, O);",
    "k++;",
    "}",
    "return A;",
    "}",
    "});",
    "Object.defineProperty(Array.prototype, 'reduce', {configurable: true, value:",
    "function(callback /*, initialValue*/) {",
    "if (this == null || typeof callback !== 'function') throw new TypeError;",
    "var t = Object(this), len = t.length >>> 0, k = 0, value;",
    "if (arguments.length == 2) {",
    "value = arguments[1];",
    "} else {",
    "while (k < len && !(k in t)) k++;",
    "if (k >= len) {",
    "throw new TypeError('Reduce of empty array with no initial value');",
    "}",
    "value = t[k++];",
    "}",
    "for (; k < len; k++) {",
    "if (k in t) value = callback(value, t[k], k, t);",
    "}",
    "return value;",
    "}",
    "});",
    "Object.defineProperty(Array.prototype, 'reduceRight', {configurable: true, value:",
    "function(callback /*, initialValue*/) {",
    "if (null === this || 'undefined' === typeof this || 'function' !== typeof callback) throw new TypeError;",
    "var t = Object(this), len = t.length >>> 0, k = len - 1, value;",
    "if (arguments.length >= 2) {",
    "value = arguments[1];",
    "} else {",
    "while (k >= 0 && !(k in t)) k--;",
    "if (k < 0) {",
    "throw new TypeError('Reduce of empty array with no initial value');",
    "}",
    "value = t[k--];",
    "}",
    "for (; k >= 0; k--) {",
    "if (k in t) value = callback(value, t[k], k, t);",
    "}",
    "return value;",
    "}",
    "});",
    "Object.defineProperty(Array.prototype, 'some', {configurable: true, value:",
    "function(fun/*, thisArg*/) {",
    "if (this == null || typeof fun !== 'function') throw new TypeError;",
    "var t = Object(this);",
    "var len = t.length >>> 0;",
    "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;",
    "for (var i = 0; i < len; i++) {",
    "if (i in t && fun.call(thisArg, t[i], i, t)) {",
    "return true;",
    "}",
    "}",
    "return false;",
    "}",
    "});",
    "Object.defineProperty(Array.prototype, 'sort', {configurable: true, value:",
    "function(opt_comp) {",
    "for (var i = 0; i < this.length; i++) {",
    "var changes = 0;",
    "for (var j = 0; j < this.length - i - 1; j++) {",
    "if (opt_comp ?opt_comp(this[j], this[j + 1]) > 0 : this[j] > this[j + 1]) {",
    "var swap = this[j];",
    "this[j] = this[j + 1];",
    "this[j + 1] = swap;",
    "changes++;",
    "}",
    "}",
    "if (changes <= 1) break;",
    "}",
    "return this;",
    "}",
    "});",
    "Object.defineProperty(Array.prototype, 'toLocaleString', {configurable: true, value:",
    "function() {",
    "var out = [];",
    "for (var i = 0; i < this.length; i++) {",
    "out[i] = (this[i] === null || this[i] === undefined) ? '' : this[i].toLocaleString();",
    "}",
    "return out.join(',');",
    "}",
    "});",
    ""
  );
};
Interpreter.prototype.initNumber = function (a) {
  var b = this,
    c;
  c = function (a) {
    a = a ? a.toNumber() : 0;
    if (this.parent != b.NUMBER) return b.createPrimitive(a);
    this.data = a;
    return this;
  };
  this.NUMBER = this.createNativeFunction(c);
  this.setProperty(a, "Number", this.NUMBER);
  a = [
    "MAX_VALUE",
    "MIN_VALUE",
    "NaN",
    "NEGATIVE_INFINITY",
    "POSITIVE_INFINITY",
  ];
  for (c = 0; c < a.length; c++)
    this.setProperty(this.NUMBER, a[c], this.createPrimitive(Number[a[c]]));
  c = function (a) {
    a = a || b.UNDEFINED;
    return b.createPrimitive(parseFloat(a.toString()));
  };
  this.setProperty(this.NUMBER, "parseFloat", this.createNativeFunction(c));
  c = function (a, c) {
    a = a || b.UNDEFINED;
    c = c || b.UNDEFINED;
    return b.createPrimitive(parseInt(a.toString(), c.toNumber()));
  };
  this.setProperty(this.NUMBER, "parseInt", this.createNativeFunction(c));
  c = function (a) {
    a = a ? a.toNumber() : void 0;
    var c = this.toNumber();
    return b.createPrimitive(c.toExponential(a));
  };
  this.setNativeFunctionPrototype(this.NUMBER, "toExponential", c);
  c = function (a) {
    a = a ? a.toNumber() : void 0;
    var c = this.toNumber();
    return b.createPrimitive(c.toFixed(a));
  };
  this.setNativeFunctionPrototype(this.NUMBER, "toFixed", c);
  c = function (a) {
    a = a ? a.toNumber() : void 0;
    var c = this.toNumber();
    return b.createPrimitive(c.toPrecision(a));
  };
  this.setNativeFunctionPrototype(this.NUMBER, "toPrecision", c);
  c = function (a) {
    a = a ? a.toNumber() : 10;
    var c = this.toNumber();
    return b.createPrimitive(c.toString(a));
  };
  this.setNativeFunctionPrototype(this.NUMBER, "toString", c);
  c = function (a, c) {
    a = a ? b.pseudoToNative(a) : void 0;
    c = c ? b.pseudoToNative(c) : void 0;
    return b.createPrimitive(this.toNumber().toLocaleString(a, c));
  };
  this.setNativeFunctionPrototype(this.NUMBER, "toLocaleString", c);
};
Interpreter.prototype.initString = function (a) {
  var b = this,
    c;
  c = function (a) {
    a = a ? a.toString() : "";
    if (this.parent != b.STRING) return b.createPrimitive(a);
    this.data = a;
    return this;
  };
  this.STRING = this.createNativeFunction(c);
  this.setProperty(a, "String", this.STRING);
  c = function (a) {
    for (var c = 0; c < arguments.length; c++)
      arguments[c] = arguments[c].toNumber();
    return b.createPrimitive(String.fromCharCode.apply(String, arguments));
  };
  this.setProperty(
    this.STRING,
    "fromCharCode",
    this.createNativeFunction(c),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
  a = ["toLowerCase", "toUpperCase", "toLocaleLowerCase", "toLocaleUpperCase"];
  for (var d = 0; d < a.length; d++)
    (c = (function (a) {
      return function () {
        return b.createPrimitive(a.apply(this));
      };
    })(String.prototype[a[d]])),
      this.setNativeFunctionPrototype(this.STRING, a[d], c);
  c = function () {
    var a = this.toString();
    return b.createPrimitive(a.replace(/^\s+|\s+$/g, ""));
  };
  this.setNativeFunctionPrototype(this.STRING, "trim", c);
  c = function () {
    var a = this.toString();
    return b.createPrimitive(a.replace(/^\s+/g, ""));
  };
  this.setNativeFunctionPrototype(this.STRING, "trimLeft", c);
  c = function () {
    var a = this.toString();
    return b.createPrimitive(a.replace(/\s+$/g, ""));
  };
  this.setNativeFunctionPrototype(this.STRING, "trimRight", c);
  a = ["charAt", "charCodeAt", "substring", "slice", "substr"];
  for (d = 0; d < a.length; d++)
    (c = (function (a) {
      return function () {
        for (var c = 0; c < arguments.length; c++)
          arguments[c] = arguments[c].toNumber();
        return b.createPrimitive(a.apply(this, arguments));
      };
    })(String.prototype[a[d]])),
      this.setNativeFunctionPrototype(this.STRING, a[d], c);
  c = function (a, c) {
    var d = this.toString();
    a = (a || b.UNDEFINED).toString();
    c = c ? c.toNumber() : void 0;
    return b.createPrimitive(d.indexOf(a, c));
  };
  this.setNativeFunctionPrototype(this.STRING, "indexOf", c);
  c = function (a, c) {
    var d = this.toString();
    a = (a || b.UNDEFINED).toString();
    c = c ? c.toNumber() : void 0;
    return b.createPrimitive(d.lastIndexOf(a, c));
  };
  this.setNativeFunctionPrototype(this.STRING, "lastIndexOf", c);
  c = function (a, c, d) {
    a = (a || b.UNDEFINED).toString();
    c = c ? b.pseudoToNative(c) : void 0;
    d = d ? b.pseudoToNative(d) : void 0;
    return b.createPrimitive(this.toString().localeCompare(a, c, d));
  };
  this.setNativeFunctionPrototype(this.STRING, "localeCompare", c);
  c = function (a, c) {
    var d = this.toString();
    a = a ? (b.isa(a, b.REGEXP) ? a.data : a.toString()) : void 0;
    c = c ? c.toNumber() : void 0;
    a = d.split(a, c);
    c = b.createObject(b.ARRAY);
    for (d = 0; d < a.length; d++) b.setProperty(c, d, b.createPrimitive(a[d]));
    return c;
  };
  this.setNativeFunctionPrototype(this.STRING, "split", c);
  c = function (a) {
    for (var c = this.toString(), d = 0; d < arguments.length; d++)
      c += arguments[d].toString();
    return b.createPrimitive(c);
  };
  this.setNativeFunctionPrototype(this.STRING, "concat", c);
  c = function (a) {
    var c = this.toString();
    a = a ? a.data : void 0;
    a = c.match(a);
    if (null === a) return b.NULL;
    for (var c = b.createObject(b.ARRAY), d = 0; d < a.length; d++)
      b.setProperty(c, d, b.createPrimitive(a[d]));
    return c;
  };
  this.setNativeFunctionPrototype(this.STRING, "match", c);
  c = function (a) {
    var c = this.toString();
    a = a ? a.data : void 0;
    return b.createPrimitive(c.search(a));
  };
  this.setNativeFunctionPrototype(this.STRING, "search", c);
  c = function (a, c) {
    var d = this.toString();
    a = (a || b.UNDEFINED).valueOf();
    c = (c || b.UNDEFINED).toString();
    return b.createPrimitive(d.replace(a, c));
  };
  this.setNativeFunctionPrototype(this.STRING, "replace", c);
};
Interpreter.prototype.initBoolean = function (a) {
  var b = this,
    c;
  c = function (a) {
    a = a ? a.toBoolean() : !1;
    if (this.parent != b.BOOLEAN) return b.createPrimitive(a);
    this.data = a;
    return this;
  };
  this.BOOLEAN = this.createNativeFunction(c);
  this.setProperty(a, "Boolean", this.BOOLEAN);
};
Interpreter.prototype.initDate = function (a) {
  var b = this,
    c;
  c = function (a, c, d, r, v, w, q) {
    if (this.parent == b.DATE) var g = this;
    else return b.createPrimitive(Date());
    if (arguments.length)
      if (
        1 != arguments.length ||
        ("string" != a.type && !b.isa(a, b.STRING))
      ) {
        for (var h = [null], p = 0; p < arguments.length; p++)
          h[p + 1] = arguments[p] ? arguments[p].toNumber() : void 0;
        g.data = new (Function.prototype.bind.apply(Date, h))();
      } else g.data = new Date(a.toString());
    else g.data = new Date();
    return g;
  };
  this.DATE = this.createNativeFunction(c);
  this.setProperty(a, "Date", this.DATE);
  c = function () {
    return b.createPrimitive(new Date().getTime());
  };
  this.setProperty(
    this.DATE,
    "now",
    this.createNativeFunction(c),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
  c = function (a) {
    a = a ? a.toString() : void 0;
    return b.createPrimitive(Date.parse(a));
  };
  this.setProperty(
    this.DATE,
    "parse",
    this.createNativeFunction(c),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
  c = function (a, c, d, r, v, w, q) {
    for (var g = [], h = 0; h < arguments.length; h++)
      g[h] = arguments[h] ? arguments[h].toNumber() : void 0;
    return b.createPrimitive(Date.UTC.apply(Date, g));
  };
  this.setProperty(
    this.DATE,
    "UTC",
    this.createNativeFunction(c),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
  a =
    "getDate getDay getFullYear getHours getMilliseconds getMinutes getMonth getSeconds getTime getTimezoneOffset getUTCDate getUTCDay getUTCFullYear getUTCHours getUTCMilliseconds getUTCMinutes getUTCMonth getUTCSeconds getYear setDate setFullYear setHours setMilliseconds setMinutes setMonth setSeconds setTime setUTCDate setUTCFullYear setUTCHours setUTCMilliseconds setUTCMinutes setUTCMonth setUTCSeconds setYear toDateString toISOString toJSON toGMTString toLocaleDateString toLocaleString toLocaleTimeString toTimeString toUTCString".split(
      " "
    );
  for (var d = 0; d < a.length; d++)
    (c = (function (a) {
      return function (c) {
        for (var d = [], g = 0; g < arguments.length; g++)
          d[g] = b.pseudoToNative(arguments[g]);
        return b.createPrimitive(this.data[a].apply(this.data, d));
      };
    })(a[d])),
      this.setNativeFunctionPrototype(this.DATE, a[d], c);
};
Interpreter.prototype.initMath = function (a) {
  var b = this,
    c = this.createObject(this.OBJECT);
  this.setProperty(a, "Math", c);
  var d = "E LN2 LN10 LOG2E LOG10E PI SQRT1_2 SQRT2".split(" ");
  for (a = 0; a < d.length; a++)
    this.setProperty(
      c,
      d[a],
      this.createPrimitive(Math[d[a]]),
      Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR
    );
  d =
    "abs acos asin atan atan2 ceil cos exp floor log max min pow random round sin sqrt tan".split(
      " "
    );
  for (a = 0; a < d.length; a++) {
    var h = (function (a) {
      return function () {
        for (var c = 0; c < arguments.length; c++)
          arguments[c] = arguments[c].toNumber();
        return b.createPrimitive(a.apply(Math, arguments));
      };
    })(Math[d[a]]);
    this.setProperty(
      c,
      d[a],
      this.createNativeFunction(h),
      Interpreter.NONENUMERABLE_DESCRIPTOR
    );
  }
};
Interpreter.prototype.initRegExp = function (a) {
  var b = this,
    c;
  c = function (a, c) {
    var d = this.parent == b.REGEXP ? this : b.createObject(b.REGEXP);
    a = a ? a.toString() : "";
    c = c ? c.toString() : "";
    return b.populateRegExp_(d, new RegExp(a, c));
  };
  this.REGEXP = this.createNativeFunction(c);
  this.setProperty(a, "RegExp", this.REGEXP);
  this.setProperty(
    this.REGEXP.properties.prototype,
    "global",
    this.UNDEFINED,
    Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR
  );
  this.setProperty(
    this.REGEXP.properties.prototype,
    "ignoreCase",
    this.UNDEFINED,
    Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR
  );
  this.setProperty(
    this.REGEXP.properties.prototype,
    "multiline",
    this.UNDEFINED,
    Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR
  );
  this.setProperty(
    this.REGEXP.properties.prototype,
    "source",
    this.createPrimitive("(?:)"),
    Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR
  );
  c = function (a) {
    a = a.toString();
    return b.createPrimitive(this.data.test(a));
  };
  this.setNativeFunctionPrototype(this.REGEXP, "test", c);
  c = function (a) {
    a = a.toString();
    this.data.lastIndex = b.getProperty(this, "lastIndex").toNumber();
    a = this.data.exec(a);
    b.setProperty(this, "lastIndex", b.createPrimitive(this.data.lastIndex));
    if (a) {
      for (var c = b.createObject(b.ARRAY), d = 0; d < a.length; d++)
        b.setProperty(c, d, b.createPrimitive(a[d]));
      b.setProperty(c, "index", b.createPrimitive(a.index));
      b.setProperty(c, "input", b.createPrimitive(a.input));
      return c;
    }
    return b.NULL;
  };
  this.setNativeFunctionPrototype(this.REGEXP, "exec", c);
};
Interpreter.prototype.initJSON = function (a) {
  var b = this,
    c = b.createObject(this.OBJECT);
  this.setProperty(a, "JSON", c);
  a = function (a) {
    try {
      var c = JSON.parse(a.toString());
    } catch (g) {
      b.throwException(b.SYNTAX_ERROR, g.message);
      return;
    }
    return b.nativeToPseudo(c);
  };
  this.setProperty(c, "parse", this.createNativeFunction(a));
  a = function (a) {
    a = b.pseudoToNative(a);
    return b.createPrimitive(JSON.stringify(a));
  };
  this.setProperty(c, "stringify", this.createNativeFunction(a));
};
Interpreter.prototype.initError = function (a) {
  var b = this;
  this.ERROR = this.createNativeFunction(function (a) {
    var c = this.parent == b.ERROR ? this : b.createObject(b.ERROR);
    a &&
      b.setProperty(
        c,
        "message",
        b.createPrimitive(String(a)),
        Interpreter.NONENUMERABLE_DESCRIPTOR
      );
    return c;
  });
  this.setProperty(a, "Error", this.ERROR);
  this.setProperty(
    this.ERROR.properties.prototype,
    "message",
    this.STRING_EMPTY,
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
  this.setProperty(
    this.ERROR.properties.prototype,
    "name",
    this.createPrimitive("Error"),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
  var c = function (c) {
    var d = b.createNativeFunction(function (a) {
      var c = b.isa(this.parent, b.ERROR) ? this : b.createObject(d);
      a &&
        b.setProperty(
          c,
          "message",
          b.createPrimitive(String(a)),
          Interpreter.NONENUMERABLE_DESCRIPTOR
        );
      return c;
    });
    b.setProperty(d, "prototype", b.createObject(b.ERROR));
    b.setProperty(
      d.properties.prototype,
      "name",
      b.createPrimitive(c),
      Interpreter.NONENUMERABLE_DESCRIPTOR
    );
    b.setProperty(a, c, d);
    return d;
  };
  c("EvalError");
  this.RANGE_ERROR = c("RangeError");
  this.REFERENCE_ERROR = c("ReferenceError");
  this.SYNTAX_ERROR = c("SyntaxError");
  this.TYPE_ERROR = c("TypeError");
  this.URI_ERROR = c("URIError");
};
Interpreter.prototype.isa = function (a, b) {
  if (!a || !b) return !1;
  for (; a.parent != b; ) {
    if (!a.parent || !a.parent.properties.prototype) return !1;
    a = a.parent.properties.prototype;
  }
  return !0;
};
Interpreter.prototype.comp = function (a, b) {
  if ((a.isPrimitive && isNaN(a.data)) || (b.isPrimitive && isNaN(b.data)))
    return NaN;
  if (a === b) return 0;
  a = a.isPrimitive ? a.data : a.toString();
  b = b.isPrimitive ? b.data : b.toString();
  return a < b ? -1 : a > b ? 1 : 0;
};
Interpreter.prototype.arrayIndex = function (a) {
  a = Number(a);
  return !isFinite(a) || a != Math.floor(a) || 0 > a ? NaN : a;
};
Interpreter.Primitive = function (a, b) {
  var c = typeof a;
  this.data = a;
  this.type = c;
  "number" == c
    ? (this.parent = b.NUMBER)
    : "string" == c
    ? (this.parent = b.STRING)
    : "boolean" == c && (this.parent = b.BOOLEAN);
};
Interpreter.Primitive.prototype.data = void 0;
Interpreter.Primitive.prototype.type = "undefined";
Interpreter.Primitive.prototype.parent = null;
Interpreter.Primitive.prototype.isPrimitive = !0;
Interpreter.Primitive.prototype.toBoolean = function () {
  return !!this.data;
};
Interpreter.Primitive.prototype.toNumber = function () {
  return Number(this.data);
};
Interpreter.Primitive.prototype.toString = function () {
  return String(this.data);
};
Interpreter.Primitive.prototype.valueOf = function () {
  return this.data;
};
Interpreter.prototype.createPrimitive = function (a) {
  return void 0 === a
    ? this.UNDEFINED
    : null === a
    ? this.NULL
    : !0 === a
    ? this.TRUE
    : !1 === a
    ? this.FALSE
    : 0 === a
    ? this.NUMBER_ZERO
    : 1 === a
    ? this.NUMBER_ONE
    : "" === a
    ? this.STRING_EMPTY
    : a instanceof RegExp
    ? this.populateRegExp_(this.createObject(this.REGEXP), a)
    : new Interpreter.Primitive(a, this);
};
Interpreter.Object = function (a) {
  this.notConfigurable = Object.create(null);
  this.notEnumerable = Object.create(null);
  this.notWritable = Object.create(null);
  this.getter = Object.create(null);
  this.setter = Object.create(null);
  this.properties = Object.create(null);
  this.parent = a;
};
Interpreter.Object.prototype.type = "object";
Interpreter.Object.prototype.parent = null;
Interpreter.Object.prototype.isPrimitive = !1;
Interpreter.Object.prototype.data = void 0;
Interpreter.Object.prototype.toBoolean = function () {
  return !0;
};
Interpreter.Object.prototype.toNumber = function () {
  return Number(void 0 === this.data ? this.toString() : this.data);
};
Interpreter.Object.prototype.toString = function () {
  return void 0 === this.data ? "[" + this.type + "]" : String(this.data);
};
Interpreter.Object.prototype.valueOf = function () {
  return void 0 === this.data ? this : this.data;
};
Interpreter.prototype.createObject = function (a) {
  a = new Interpreter.Object(a);
  this.isa(a, this.FUNCTION) &&
    ((a.type = "function"),
    this.setProperty(a, "prototype", this.createObject(this.OBJECT || null)));
  this.isa(a, this.ARRAY) &&
    ((a.length = 0),
    (a.toString = function () {
      for (var a = [], c = 0; c < this.length; c++) {
        var d = this.properties[c];
        a[c] =
          !d || (d.isPrimitive && (null === d.data || void 0 === d.data))
            ? ""
            : d.toString();
      }
      return a.join(",");
    }));
  return a;
};
Interpreter.prototype.populateRegExp_ = function (a, b) {
  a.data = b;
  this.setProperty(
    a,
    "lastIndex",
    this.createPrimitive(b.lastIndex),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
  this.setProperty(
    a,
    "source",
    this.createPrimitive(b.source),
    Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR
  );
  this.setProperty(
    a,
    "global",
    this.createPrimitive(b.global),
    Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR
  );
  this.setProperty(
    a,
    "ignoreCase",
    this.createPrimitive(b.ignoreCase),
    Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR
  );
  this.setProperty(
    a,
    "multiline",
    this.createPrimitive(b.multiline),
    Interpreter.READONLY_NONENUMERABLE_DESCRIPTOR
  );
  a.toString = function () {
    return String(this.data);
  };
  a.valueOf = function () {
    return this.data;
  };
  return a;
};
Interpreter.prototype.createFunction = function (a, b) {
  var c = this.createObject(this.FUNCTION);
  c.parentScope = b || this.getScope();
  c.node = a;
  this.setProperty(
    c,
    "length",
    this.createPrimitive(c.node.params.length),
    Interpreter.READONLY_DESCRIPTOR
  );
  return c;
};
Interpreter.prototype.createNativeFunction = function (a) {
  var b = this.createObject(this.FUNCTION);
  b.nativeFunc = a;
  this.setProperty(
    b,
    "length",
    this.createPrimitive(a.length),
    Interpreter.READONLY_DESCRIPTOR
  );
  return b;
};
Interpreter.prototype.createAsyncFunction = function (a) {
  var b = this.createObject(this.FUNCTION);
  b.asyncFunc = a;
  this.setProperty(
    b,
    "length",
    this.createPrimitive(a.length),
    Interpreter.READONLY_DESCRIPTOR
  );
  return b;
};
Interpreter.prototype.nativeToPseudo = function (a) {
  if (
    "boolean" == typeof a ||
    "number" == typeof a ||
    "string" == typeof a ||
    null === a ||
    void 0 === a ||
    a instanceof RegExp
  )
    return this.createPrimitive(a);
  var b;
  if (a instanceof Array) {
    b = this.createObject(this.ARRAY);
    for (var c = 0; c < a.length; c++)
      this.setProperty(b, c, this.nativeToPseudo(a[c]));
  } else
    for (c in ((b = this.createObject(this.OBJECT)), a))
      this.setProperty(b, c, this.nativeToPseudo(a[c]));
  return b;
};
Interpreter.prototype.pseudoToNative = function (a) {
  if (
    a.isPrimitive ||
    this.isa(a, this.NUMBER) ||
    this.isa(a, this.STRING) ||
    this.isa(a, this.BOOLEAN)
  )
    return a.data;
  var b;
  if (this.isa(a, this.ARRAY)) {
    b = [];
    for (var c = 0; c < a.length; c++)
      b[c] = this.pseudoToNative(a.properties[c]);
  } else
    for (c in ((b = {}), a.properties))
      b[c] = this.pseudoToNative(a.properties[c]);
  return b;
};
Interpreter.prototype.getProperty = function (a, b) {
  b = b.toString();
  if (a == this.UNDEFINED || a == this.NULL)
    return (
      this.throwException(
        this.TYPE_ERROR,
        "Cannot read property '" + b + "' of " + a
      ),
      null
    );
  if (this.isa(a, this.STRING)) {
    if ("length" == b) return this.createPrimitive(a.data.length);
    var c = this.arrayIndex(b);
    if (!isNaN(c) && c < a.data.length) return this.createPrimitive(a.data[c]);
  } else if (this.isa(a, this.ARRAY) && "length" == b)
    return this.createPrimitive(a.length);
  for (;;) {
    if (a.properties && b in a.properties)
      return (c = a.getter[b]) ? ((c.isGetter = !0), c) : a.properties[b];
    if (a.parent && a.parent.properties && a.parent.properties.prototype)
      a = a.parent.properties.prototype;
    else break;
  }
  return this.UNDEFINED;
};
Interpreter.prototype.hasProperty = function (a, b) {
  b = b.toString();
  if (a.isPrimitive) throw TypeError("Primitive data type has no properties");
  if ("length" == b && (this.isa(a, this.STRING) || this.isa(a, this.ARRAY)))
    return !0;
  if (this.isa(a, this.STRING)) {
    var c = this.arrayIndex(b);
    if (!isNaN(c) && c < a.data.length) return !0;
  }
  for (;;) {
    if (a.properties && b in a.properties) return !0;
    if (a.parent && a.parent.properties && a.parent.properties.prototype)
      a = a.parent.properties.prototype;
    else break;
  }
  return !1;
};
Interpreter.prototype.setProperty = function (a, b, c, d) {
  b = b.toString();
  d &&
    a.notConfigurable[b] &&
    this.throwException(this.TYPE_ERROR, "Cannot redefine property: " + b);
  if ("object" != typeof c) throw Error("Failure to wrap a value: " + c);
  (a != this.UNDEFINED && a != this.NULL) ||
    this.throwException(
      this.TYPE_ERROR,
      "Cannot set property '" + b + "' of " + a
    );
  d &&
    (d.get || d.set) &&
    (c || void 0 !== d.writable) &&
    this.throwException(
      this.TYPE_ERROR,
      "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute"
    );
  if (!a.isPrimitive) {
    if (this.isa(a, this.STRING)) {
      var h = this.arrayIndex(b);
      if ("length" == b || (!isNaN(h) && h < a.data.length)) return;
    }
    if (this.isa(a, this.ARRAY)) {
      var g;
      if ("length" == b) {
        b = this.arrayIndex(c.toNumber());
        isNaN(b) &&
          this.throwException(this.RANGE_ERROR, "Invalid array length");
        if (b < a.length)
          for (g in a.properties)
            (g = this.arrayIndex(g)),
              !isNaN(g) && b <= g && delete a.properties[g];
        a.length = b;
        return;
      }
      isNaN((g = this.arrayIndex(b))) || (a.length = Math.max(a.length, g + 1));
    }
    if (!a.properties[b] && a.preventExtensions)
      (a = this.getScope()),
        a.strict &&
          this.throwException(
            this.TYPE_ERROR,
            "can not add property " + b + ", object is not extensible"
          );
    else if (d)
      (a.properties[b] = c),
        d.configurable || (a.notConfigurable[b] = !0),
        (c = d.get) ? (a.getter[b] = c) : delete a.getter[b],
        (g = d.set) ? (a.setter[b] = g) : delete a.setter[b],
        (h = d.enumerable || !1)
          ? delete a.notEnumerable[b]
          : (a.notEnumerable[b] = !0),
        c || g
          ? (delete a.notWritable[b], (a.properties[b] = this.UNDEFINED))
          : (d = d.writable || !1)
          ? delete a.notWritable[b]
          : (a.notWritable[b] = !0);
    else {
      for (d = a; ; ) {
        if (d.setter && d.setter[b]) return d.setter[b];
        if (d.parent && d.parent.properties && d.parent.properties.prototype)
          d = d.parent.properties.prototype;
        else break;
      }
      a.notWritable[b] || (a.properties[b] = c);
    }
  }
};
Interpreter.prototype.setNativeFunctionPrototype = function (a, b, c) {
  this.setProperty(
    a.properties.prototype,
    b,
    this.createNativeFunction(c),
    Interpreter.NONENUMERABLE_DESCRIPTOR
  );
};
Interpreter.prototype.deleteProperty = function (a, b) {
  b = b.toString();
  return a.isPrimitive ||
    a.notWritable[b] ||
    ("length" == b && this.isa(a, this.ARRAY))
    ? !1
    : delete a.properties[b];
};
Interpreter.prototype.getScope = function () {
  for (var a = 0; a < this.stateStack.length; a++)
    if (this.stateStack[a].scope) return this.stateStack[a].scope;
  throw Error("No scope found.");
};
Interpreter.prototype.createScope = function (a, b) {
  var c = this.createObject(null);
  (c.parentScope = b) || this.initGlobalScope(c);
  this.populateScope_(a, c);
  c.strict = !1;
  b && b.strict
    ? (c.strict = !0)
    : (a = a.body && a.body[0]) &&
      a.expression &&
      "Literal" == a.expression.type &&
      "use strict" == a.expression.value &&
      (c.strict = !0);
  return c;
};
Interpreter.prototype.createSpecialScope = function (a, b) {
  if (!a) throw Error("parentScope required");
  b = b || this.createObject(null);
  b.parentScope = a;
  b.strict = a.strict;
  return b;
};
Interpreter.prototype.getValueFromScope = function (a) {
  var b = this.getScope();
  for (a = a.toString(); b; ) {
    if (a in b.properties) return b.properties[a];
    b = b.parentScope;
  }
  this.throwException(this.REFERENCE_ERROR, a + " is not defined");
  return null;
};
Interpreter.prototype.setValueToScope = function (a, b) {
  var c = this.getScope(),
    d = c.strict;
  for (a = a.toString(); c; ) {
    if (a in c.properties || (!d && !c.parentScope)) {
      c.notWritable[a] || (c.properties[a] = b);
      return;
    }
    c = c.parentScope;
  }
  this.throwException(this.REFERENCE_ERROR, a + " is not defined");
};
Interpreter.prototype.populateScope_ = function (a, b) {
  if ("VariableDeclaration" == a.type)
    for (var c = 0; c < a.declarations.length; c++)
      this.setProperty(b, a.declarations[c].id.name, this.UNDEFINED);
  else {
    if ("FunctionDeclaration" == a.type) {
      this.setProperty(b, a.id.name, this.createFunction(a, b));
      return;
    }
    if ("FunctionExpression" == a.type) return;
  }
  var d = a.constructor,
    h;
  for (h in a) {
    var g = a[h];
    if (g && "object" == typeof g)
      if (g instanceof Array)
        for (c = 0; c < g.length; c++)
          g[c] && g[c].constructor == d && this.populateScope_(g[c], b);
      else g.constructor == d && this.populateScope_(g, b);
  }
};
Interpreter.prototype.stripLocations_ = function (a) {
  delete a.start;
  delete a.end;
  for (var b in a)
    if (a.hasOwnProperty(b)) {
      var c = a[b];
      c && "object" == typeof c && this.stripLocations_(c);
    }
};
Interpreter.prototype.getValue = function (a) {
  if (a instanceof Array) {
    var b = a[0];
    a = a[1];
    return this.getProperty(b, a);
  }
  return this.getValueFromScope(a);
};
Interpreter.prototype.setValue = function (a, b) {
  if (a instanceof Array) {
    var c = a[0];
    a = a[1];
    return this.setProperty(c, a, b);
  }
  this.setValueToScope(a, b);
};
Interpreter.prototype.throwException = function (a, b) {
  if (this.stateStack[0].interpreter)
    try {
      this.stateStack[0].interpreter.throwException(a, b);
      return;
    } catch (c) {}
  void 0 !== b &&
    ((a = this.createObject(a)),
    this.setProperty(
      a,
      "message",
      this.createPrimitive(b),
      Interpreter.NONENUMERABLE_DESCRIPTOR
    ));
  this.executeException(a);
};
Interpreter.prototype.executeException = function (a) {
  do {
    this.stateStack.shift();
    var b = this.stateStack[0];
    if ("TryStatement" == b.node.type) {
      b.throwValue = a;
      return;
    }
  } while (b && "Program" != b.node.type);
  if (this.isa(a, this.ERROR)) {
    var b = {
        EvalError: EvalError,
        RangeError: RangeError,
        ReferenceError: ReferenceError,
        SyntaxError: SyntaxError,
        TypeError: TypeError,
        URIError: URIError,
      },
      c = this.getProperty(a, "name").toString();
    a = this.getProperty(a, "message").valueOf();
    b = b[c] || Error;
    a = b(a);
  } else a = a.toString();
  throw a;
};
Interpreter.prototype.stepArrayExpression = function () {
  var a = this.stateStack[0],
    b = a.node,
    c = a.n || 0;
  a.array
    ? a.value && this.setProperty(a.array, c - 1, a.value)
    : (a.array = this.createObject(this.ARRAY));
  c < b.elements.length
    ? ((a.n = c + 1),
      b.elements[c]
        ? this.stateStack.unshift({ node: b.elements[c] })
        : (a.value = void 0))
    : ((a.array.length = a.n || 0),
      this.stateStack.shift(),
      (this.stateStack[0].value = a.array));
};
Interpreter.prototype.stepAssignmentExpression = function () {
  var a = this.stateStack[0],
    b = a.node;
  if (a.doneLeft)
    if (a.doneRight)
      if (a.doneSetter_)
        this.stateStack.shift(), (this.stateStack[0].value = a.doneSetter_);
      else {
        var c = a.value;
        if ("=" == b.operator) b = c;
        else {
          var d = a.leftValue.toNumber(),
            h = c.toNumber();
          if ("+=" == b.operator)
            "string" == a.leftValue.type || "string" == c.type
              ? ((b = a.leftValue.toString()), (c = c.toString()))
              : ((b = d), (c = h)),
              (b += c);
          else if ("-=" == b.operator) b = d - h;
          else if ("*=" == b.operator) b = d * h;
          else if ("/=" == b.operator) b = d / h;
          else if ("%=" == b.operator) b = d % h;
          else if ("<<=" == b.operator) b = d << h;
          else if (">>=" == b.operator) b = d >> h;
          else if (">>>=" == b.operator) b = d >>> h;
          else if ("&=" == b.operator) b = d & h;
          else if ("^=" == b.operator) b = d ^ h;
          else if ("|=" == b.operator) b = d | h;
          else
            throw SyntaxError("Unknown assignment expression: " + b.operator);
          b = this.createPrimitive(b);
        }
        (c = this.setValue(a.leftSide, b))
          ? ((a.doneSetter_ = b),
            this.stateStack.unshift({
              node: { type: "CallExpression" },
              doneCallee_: !0,
              funcThis_: a.leftSide[0],
              func_: c,
              doneArgs_: !0,
              arguments: [b],
            }))
          : (this.stateStack.shift(), (this.stateStack[0].value = b));
      }
    else {
      a.leftSide || (a.leftSide = a.value);
      a.doneGetter_ && (a.leftValue = a.value);
      if (
        !a.doneGetter_ &&
        "=" != b.operator &&
        ((a.leftValue = this.getValue(a.leftSide)), a.leftValue.isGetter)
      ) {
        a.leftValue.isGetter = !1;
        a.doneGetter_ = !0;
        this.stateStack.unshift({
          node: { type: "CallExpression" },
          doneCallee_: !0,
          funcThis_: a.leftSide[0],
          func_: a.leftValue,
          doneArgs_: !0,
          arguments: [],
        });
        return;
      }
      a.doneRight = !0;
      this.stateStack.unshift({ node: b.right });
    }
  else
    (a.doneLeft = !0),
      this.stateStack.unshift({ node: b.left, components: !0 });
};
Interpreter.prototype.stepBinaryExpression = function () {
  var a = this.stateStack[0],
    b = a.node;
  if (a.doneLeft)
    if (a.doneRight) {
      this.stateStack.shift();
      var c = a.leftValue,
        a = a.value,
        d = this.comp(c, a);
      if ("==" == b.operator || "!=" == b.operator)
        (c = c.isPrimitive && a.isPrimitive ? c.data == a.data : 0 === d),
          "!=" == b.operator && (c = !c);
      else if ("===" == b.operator || "!==" == b.operator)
        (c = c.isPrimitive && a.isPrimitive ? c.data === a.data : c === a),
          "!==" == b.operator && (c = !c);
      else if (">" == b.operator) c = 1 == d;
      else if (">=" == b.operator) c = 1 == d || 0 === d;
      else if ("<" == b.operator) c = -1 == d;
      else if ("<=" == b.operator) c = -1 == d || 0 === d;
      else if ("+" == b.operator)
        (c = c.isPrimitive ? c.data : c.toString()),
          (a = a.isPrimitive ? a.data : a.toString()),
          (c += a);
      else if ("in" == b.operator) c = this.hasProperty(a, c);
      else if ("instanceof" == b.operator)
        this.isa(a, this.FUNCTION) ||
          this.throwException(
            this.TYPE_ERROR,
            "Expecting a function in instanceof check"
          ),
          (c = this.isa(c, a));
      else if (((c = c.toNumber()), (a = a.toNumber()), "-" == b.operator))
        c -= a;
      else if ("*" == b.operator) c *= a;
      else if ("/" == b.operator) c /= a;
      else if ("%" == b.operator) c %= a;
      else if ("&" == b.operator) c &= a;
      else if ("|" == b.operator) c |= a;
      else if ("^" == b.operator) c ^= a;
      else if ("<<" == b.operator) c <<= a;
      else if (">>" == b.operator) c >>= a;
      else if (">>>" == b.operator) c >>>= a;
      else throw SyntaxError("Unknown binary operator: " + b.operator);
      this.stateStack[0].value = this.createPrimitive(c);
    } else
      (a.doneRight = !0),
        (a.leftValue = a.value),
        this.stateStack.unshift({ node: b.right });
  else (a.doneLeft = !0), this.stateStack.unshift({ node: b.left });
};
Interpreter.prototype.stepBlockStatement = function () {
  var a = this.stateStack[0],
    b = a.node,
    c = a.n_ || 0;
  b.body[c]
    ? ((a.done = !1),
      (a.n_ = c + 1),
      this.stateStack.unshift({ node: b.body[c] }))
    : ((a.done = !0), "Program" != a.node.type && this.stateStack.shift());
};
Interpreter.prototype.stepBreakStatement = function () {
  var a = this.stateStack.shift(),
    a = a.node,
    b = null;
  a.label && (b = a.label.name);
  for (
    a = this.stateStack.shift();
    a && "CallExpression" != a.node.type && "NewExpression" != a.node.type;

  ) {
    if (b ? b == a.label : a.isLoop || a.isSwitch) return;
    a = this.stateStack.shift();
  }
  throw SyntaxError("Illegal break statement");
};
Interpreter.prototype.stepCallExpression = function () {
  var a = this.stateStack[0],
    b = a.node;
  if (a.doneCallee_) {
    if (!a.func_) {
      if ("function" == a.value.type) a.func_ = a.value;
      else {
        a.value.length && (a.member_ = a.value[0]);
        a.func_ = this.getValue(a.value);
        if (!a.func_) return;
        if ("function" != a.func_.type) {
          this.throwException(
            this.TYPE_ERROR,
            (a.value && a.value.type) + " is not a function"
          );
          return;
        }
      }
      "NewExpression" == a.node.type
        ? ((a.funcThis_ = this.createObject(a.func_)), (a.isConstructor_ = !0))
        : (a.funcThis_ = a.func_.boundThis_
            ? a.func_.boundThis_
            : a.value.length
            ? a.value[0]
            : this.stateStack[this.stateStack.length - 1].thisExpression);
      a.arguments = a.func_.boundArgs_ ? a.func_.boundArgs_.concat() : [];
      a.n_ = 0;
    }
    if (!a.doneArgs_) {
      0 != a.n_ && a.arguments.push(a.value);
      if (b.arguments[a.n_]) {
        this.stateStack.unshift({ node: b.arguments[a.n_] });
        a.n_++;
        return;
      }
      a.doneArgs_ = !0;
    }
    if (a.doneExec_)
      this.stateStack.shift(),
        (this.stateStack[0].value =
          a.isConstructor_ && "object" !== a.value.type
            ? a.funcThis_
            : a.value);
    else if (((a.doneExec_ = !0), a.func_.node)) {
      for (
        var b = this.createScope(a.func_.node.body, a.func_.parentScope), c = 0;
        c < a.func_.node.params.length;
        c++
      ) {
        var d = this.createPrimitive(a.func_.node.params[c].name),
          h = a.arguments.length > c ? a.arguments[c] : this.UNDEFINED;
        this.setProperty(b, d, h);
      }
      d = this.createObject(this.ARRAY);
      for (c = 0; c < a.arguments.length; c++)
        this.setProperty(d, this.createPrimitive(c), a.arguments[c]);
      this.setProperty(b, "arguments", d);
      b = { node: a.func_.node.body, scope: b, thisExpression: a.funcThis_ };
      this.stateStack.unshift(b);
      a.value = this.UNDEFINED;
    } else if (a.func_.nativeFunc)
      a.value = a.func_.nativeFunc.apply(a.funcThis_, a.arguments);
    else if (a.func_.asyncFunc) {
      var g = this,
        b = function (b) {
          a.value = b || g.UNDEFINED;
          g.paused_ = !1;
        },
        b = a.arguments.concat(b);
      a.func_.asyncFunc.apply(a.funcThis_, b);
      this.paused_ = !0;
    } else if (a.func_.eval)
      (b = a.arguments[0])
        ? b.isPrimitive
          ? ((b = new Interpreter(b.toString())),
            (b.stateStack[0].scope = this.getScope()),
            (a = { node: { type: "Eval_" }, interpreter: b }),
            this.stateStack.unshift(a))
          : (a.value = b)
        : (a.value = this.UNDEFINED);
    else throw TypeError("function not a function (huh?)");
  } else
    (a.doneCallee_ = !0),
      this.stateStack.unshift({ node: b.callee, components: !0 });
};
Interpreter.prototype.stepCatchClause = function () {
  var a = this.stateStack[0],
    b = a.node;
  if (a.doneBody) this.stateStack.shift();
  else {
    a.doneBody = !0;
    var c;
    if (b.param) {
      c = this.createSpecialScope(this.getScope());
      var d = this.createPrimitive(b.param.name);
      this.setProperty(c, d, a.throwValue);
    }
    this.stateStack.unshift({ node: b.body, scope: c });
  }
};
Interpreter.prototype.stepConditionalExpression = function () {
  var a = this.stateStack[0];
  a.done
    ? (this.stateStack.shift(),
      "ConditionalExpression" == a.node.type &&
        (this.stateStack[0].value = a.value))
    : a.test
    ? ((a.done = !0),
      a.value.toBoolean() && a.node.consequent
        ? this.stateStack.unshift({ node: a.node.consequent })
        : !a.value.toBoolean() &&
          a.node.alternate &&
          this.stateStack.unshift({ node: a.node.alternate }))
    : ((a.test = !0), this.stateStack.unshift({ node: a.node.test }));
};
Interpreter.prototype.stepContinueStatement = function () {
  var a = this.stateStack[0].node,
    b = null;
  a.label && (b = a.label.name);
  for (
    a = this.stateStack[0];
    a && "CallExpression" != a.node.type && "NewExpression" != a.node.type;

  ) {
    if (a.isLoop && (!b || b == a.label)) return;
    this.stateStack.shift();
    a = this.stateStack[0];
  }
  throw SyntaxError("Illegal continue statement");
};
Interpreter.prototype.stepDoWhileStatement = function () {
  var a = this.stateStack[0];
  a.isLoop = !0;
  "DoWhileStatement" == a.node.type &&
    void 0 === a.test &&
    ((a.value = this.TRUE), (a.test = !0));
  a.test
    ? ((a.test = !1),
      a.value.toBoolean()
        ? a.node.body && this.stateStack.unshift({ node: a.node.body })
        : this.stateStack.shift())
    : ((a.test = !0), this.stateStack.unshift({ node: a.node.test }));
};
Interpreter.prototype.stepEmptyStatement = function () {
  this.stateStack.shift();
};
Interpreter.prototype.stepEval_ = function () {
  var a = this.stateStack[0];
  a.interpreter.step() ||
    (this.stateStack.shift(),
    (this.stateStack[0].value = a.interpreter.value || this.UNDEFINED));
};
Interpreter.prototype.stepExpressionStatement = function () {
  var a = this.stateStack[0];
  a.done
    ? (this.stateStack.shift(), (this.value = a.value))
    : ((a.done = !0), this.stateStack.unshift({ node: a.node.expression }));
};
Interpreter.prototype.stepForInStatement = function () {
  var a = this.stateStack[0];
  a.isLoop = !0;
  var b = a.node;
  if (a.doneVariable_)
    if (a.doneObject_) {
      "undefined" == typeof a.iterator &&
        ((a.object = a.value), (a.iterator = 0));
      var c = null;
      a: do {
        var d = a.iterator,
          h;
        for (h in a.object.properties)
          if (!a.object.notEnumerable[h]) {
            if (0 == d) {
              c = h;
              break a;
            }
            d--;
          }
        a.object = a.object.parent && a.object.parent.properties.prototype;
        a.iterator = 0;
      } while (a.object);
      a.iterator++;
      null === c
        ? this.stateStack.shift()
        : (this.setValueToScope(a.variable, this.createPrimitive(c)),
          b.body && this.stateStack.unshift({ node: b.body }));
    } else
      (a.doneObject_ = !0),
        (a.variable = a.value),
        this.stateStack.unshift({ node: b.right });
  else
    (a.doneVariable_ = !0),
      (a = b.left),
      "VariableDeclaration" == a.type && (a = a.declarations[0].id),
      this.stateStack.unshift({ node: a, components: !0 });
};
Interpreter.prototype.stepForStatement = function () {
  var a = this.stateStack[0];
  a.isLoop = !0;
  var b = a.node,
    c = a.mode || 0;
  0 == c
    ? ((a.mode = 1), b.init && this.stateStack.unshift({ node: b.init }))
    : 1 == c
    ? ((a.mode = 2), b.test && this.stateStack.unshift({ node: b.test }))
    : 2 == c
    ? ((a.mode = 3),
      b.test && a.value && !a.value.toBoolean()
        ? this.stateStack.shift()
        : b.body && this.stateStack.unshift({ node: b.body }))
    : 3 == c &&
      ((a.mode = 1), b.update && this.stateStack.unshift({ node: b.update }));
};
Interpreter.prototype.stepFunctionDeclaration = function () {
  this.stateStack.shift();
};
Interpreter.prototype.stepFunctionExpression = function () {
  var a = this.stateStack.shift();
  this.stateStack[0].value = this.createFunction(a.node);
};
Interpreter.prototype.stepIdentifier = function () {
  var a = this.stateStack.shift(),
    b = this.createPrimitive(a.node.name);
  this.stateStack[0].value = a.components ? b : this.getValueFromScope(b);
};
Interpreter.prototype.stepIfStatement =
  Interpreter.prototype.stepConditionalExpression;
Interpreter.prototype.stepLabeledStatement = function () {
  var a = this.stateStack.shift();
  this.stateStack.unshift({ node: a.node.body, label: a.node.label.name });
};
Interpreter.prototype.stepLiteral = function () {
  var a = this.stateStack.shift();
  this.stateStack[0].value = this.createPrimitive(a.node.value);
};
Interpreter.prototype.stepLogicalExpression = function () {
  var a = this.stateStack[0],
    b = a.node;
  if ("&&" != b.operator && "||" != b.operator)
    throw SyntaxError("Unknown logical operator: " + b.operator);
  a.doneLeft_
    ? a.doneRight_
      ? (this.stateStack.shift(), (this.stateStack[0].value = a.value))
      : ("&&" == b.operator && !a.value.toBoolean()) ||
        ("||" == b.operator && a.value.toBoolean())
      ? (this.stateStack.shift(), (this.stateStack[0].value = a.value))
      : ((a.doneRight_ = !0), this.stateStack.unshift({ node: b.right }))
    : ((a.doneLeft_ = !0), this.stateStack.unshift({ node: b.left }));
};
Interpreter.prototype.stepMemberExpression = function () {
  var a = this.stateStack[0],
    b = a.node;
  a.doneObject_
    ? a.doneProperty_
      ? (this.stateStack.shift(),
        a.components
          ? (this.stateStack[0].value = [a.object, a.value])
          : (b = this.getProperty(a.object, a.value))
          ? b.isGetter
            ? ((b.isGetter = !1),
              this.stateStack.unshift({
                node: { type: "CallExpression" },
                doneCallee_: !0,
                funcThis_: a.object,
                func_: b,
                doneArgs_: !0,
                arguments: [],
              }))
            : (this.stateStack[0].value = b)
          : (this.stateStack.unshift({}),
            this.throwException(
              this.TYPE_ERROR,
              "Cannot read property '" + a.value + "' of " + a.object.toString()
            )))
      : ((a.doneProperty_ = !0),
        (a.object = a.value),
        this.stateStack.unshift({ node: b.property, components: !b.computed }))
    : ((a.doneObject_ = !0), this.stateStack.unshift({ node: b.object }));
};
Interpreter.prototype.stepNewExpression =
  Interpreter.prototype.stepCallExpression;
Interpreter.prototype.stepObjectExpression = function () {
  var a = this.stateStack[0],
    b = a.node,
    c = a.valueToggle,
    d = a.n || 0;
  a.object
    ? c
      ? (a.key = a.value)
      : (a.properties[a.key] || (a.properties[a.key] = {}),
        (a.properties[a.key][a.kind] = a.value))
    : ((a.object = this.createObject(this.OBJECT)),
      (a.properties = Object.create(null)));
  if (b.properties[d])
    c
      ? ((a.n = d + 1),
        this.stateStack.unshift({ node: b.properties[d].value }))
      : ((a.kind = b.properties[d].kind),
        this.stateStack.unshift({ node: b.properties[d].key, components: !0 })),
      (a.valueToggle = !c);
  else {
    for (var h in a.properties)
      (b = a.properties[h]),
        "get" in b || "set" in b
          ? ((b = { configurable: !0, enumerable: !0, get: b.get, set: b.set }),
            this.setProperty(a.object, h, null, b))
          : this.setProperty(a.object, h, b.init);
    this.stateStack.shift();
    this.stateStack[0].value = a.object;
  }
};
Interpreter.prototype.stepProgram = Interpreter.prototype.stepBlockStatement;
Interpreter.prototype.stepReturnStatement = function () {
  var a = this.stateStack[0],
    b = a.node;
  if (b.argument && !a.done)
    (a.done = !0), this.stateStack.unshift({ node: b.argument });
  else {
    b = a.value || this.UNDEFINED;
    do {
      this.stateStack.shift();
      if (0 == this.stateStack.length)
        throw SyntaxError("Illegal return statement");
      a = this.stateStack[0];
    } while ("CallExpression" != a.node.type && "NewExpression" != a.node.type);
    a.value = b;
  }
};
Interpreter.prototype.stepSequenceExpression = function () {
  var a = this.stateStack[0],
    b = a.node,
    c = a.n || 0;
  b.expressions[c]
    ? ((a.n = c + 1), this.stateStack.unshift({ node: b.expressions[c] }))
    : (this.stateStack.shift(), (this.stateStack[0].value = a.value));
};
Interpreter.prototype.stepSwitchStatement = function () {
  var a = this.stateStack[0];
  a.checked = a.checked || [];
  a.isSwitch = !0;
  if (a.test) {
    a.switchValue || (a.switchValue = a.value);
    var b = a.index || 0,
      c = a.node.cases[b];
    if (c)
      if (a.done || a.checked[b] || !c.test) {
        if (a.done || !c.test || 0 == this.comp(a.value, a.switchValue)) {
          a.done = !0;
          var d = a.n || 0;
          if (c.consequent[d]) {
            this.stateStack.unshift({ node: c.consequent[d] });
            a.n = d + 1;
            return;
          }
        }
        a.n = 0;
        a.index = b + 1;
      } else (a.checked[b] = !0), this.stateStack.unshift({ node: c.test });
    else this.stateStack.shift();
  } else (a.test = !0), this.stateStack.unshift({ node: a.node.discriminant });
};
Interpreter.prototype.stepThisExpression = function () {
  this.stateStack.shift();
  for (var a = 0; a < this.stateStack.length; a++)
    if (this.stateStack[a].thisExpression) {
      this.stateStack[0].value = this.stateStack[a].thisExpression;
      return;
    }
  throw Error("No this expression found.");
};
Interpreter.prototype.stepThrowStatement = function () {
  var a = this.stateStack[0],
    b = a.node;
  a.argument
    ? this.throwException(a.value)
    : ((a.argument = !0), this.stateStack.unshift({ node: b.argument }));
};
Interpreter.prototype.stepTryStatement = function () {
  var a = this.stateStack[0],
    b = a.node;
  a.doneBlock
    ? a.throwValue && !a.doneHandler && b.handler
      ? ((a.doneHandler = !0),
        this.stateStack.unshift({ node: b.handler, throwValue: a.throwValue }),
        (a.throwValue = null))
      : !a.doneFinalizer && b.finalizer
      ? ((a.doneFinalizer = !0), this.stateStack.unshift({ node: b.finalizer }))
      : a.throwValue
      ? this.executeException(a.throwValue)
      : this.stateStack.shift()
    : ((a.doneBlock = !0), this.stateStack.unshift({ node: b.block }));
};
Interpreter.prototype.stepUnaryExpression = function () {
  var a = this.stateStack[0],
    b = a.node;
  if (a.done) {
    this.stateStack.shift();
    if ("-" == b.operator) b = -a.value.toNumber();
    else if ("+" == b.operator) b = a.value.toNumber();
    else if ("!" == b.operator) b = !a.value.toBoolean();
    else if ("~" == b.operator) b = ~a.value.toNumber();
    else if ("delete" == b.operator || "typeof" == b.operator) {
      if (a.value.length)
        var c = a.value[0],
          a = a.value[1];
      else (c = this.getScope()), (a = a.value);
      b =
        "delete" == b.operator
          ? this.deleteProperty(c, a)
          : this.getProperty(c, a).type;
    } else if ("void" == b.operator) b = void 0;
    else throw SyntaxError("Unknown unary operator: " + b.operator);
    this.stateStack[0].value = this.createPrimitive(b);
  } else {
    a.done = !0;
    c = { node: b.argument };
    if ("delete" == b.operator || "typeof" == b.operator) c.components = !0;
    this.stateStack.unshift(c);
  }
};
Interpreter.prototype.stepUpdateExpression = function () {
  var a = this.stateStack[0],
    b = a.node;
  if (a.doneLeft) {
    a.leftSide || (a.leftSide = a.value);
    a.doneGetter_ && (a.leftValue = a.value);
    if (!a.doneGetter_) {
      a.leftValue = this.getValue(a.leftSide);
      if (!a.leftValue) return;
      if (a.leftValue.isGetter) {
        a.leftValue.isGetter = !1;
        a.doneGetter_ = !0;
        this.stateStack.unshift({
          node: { type: "CallExpression" },
          doneCallee_: !0,
          funcThis_: a.leftSide[0],
          func_: a.leftValue,
          doneArgs_: !0,
          arguments: [],
        });
        return;
      }
    }
    if (a.doneSetter_)
      this.stateStack.shift(), (this.stateStack[0].value = a.doneSetter_);
    else {
      var c = a.leftValue.toNumber(),
        d;
      if ("++" == b.operator) d = this.createPrimitive(c + 1);
      else if ("--" == b.operator) d = this.createPrimitive(c - 1);
      else throw SyntaxError("Unknown update expression: " + b.operator);
      b = b.prefix ? d : this.createPrimitive(c);
      (c = this.setValue(a.leftSide, d))
        ? ((a.doneSetter_ = b),
          this.stateStack.unshift({
            node: { type: "CallExpression" },
            doneCallee_: !0,
            funcThis_: a.leftSide[0],
            func_: c,
            doneArgs_: !0,
            arguments: [d],
          }))
        : (this.stateStack.shift(), (this.stateStack[0].value = b));
    }
  } else
    (a.doneLeft = !0),
      this.stateStack.unshift({ node: b.argument, components: !0 });
};
Interpreter.prototype.stepVariableDeclaration = function () {
  var a = this.stateStack[0],
    b = a.node,
    c = a.n || 0;
  b.declarations[c]
    ? ((a.n = c + 1), this.stateStack.unshift({ node: b.declarations[c] }))
    : this.stateStack.shift();
};
Interpreter.prototype.stepVariableDeclarator = function () {
  var a = this.stateStack[0],
    b = a.node;
  b.init && !a.done
    ? ((a.done = !0), this.stateStack.unshift({ node: b.init }))
    : (b.init && this.setValue(this.createPrimitive(b.id.name), a.value),
      this.stateStack.shift());
};
Interpreter.prototype.stepWithStatement = function () {
  var a = this.stateStack[0],
    b = a.node;
  a.doneObject
    ? a.doneBody
      ? this.stateStack.shift()
      : ((a.doneBody = !0),
        (a = this.createSpecialScope(this.getScope(), a.value)),
        this.stateStack.unshift({ node: b.body, scope: a }))
    : ((a.doneObject = !0), this.stateStack.unshift({ node: b.object }));
};
Interpreter.prototype.stepWhileStatement =
  Interpreter.prototype.stepDoWhileStatement;
this.Interpreter = Interpreter;
Interpreter.prototype.appendCode = Interpreter.prototype.appendCode;
Interpreter.prototype.createAsyncFunction =
  Interpreter.prototype.createAsyncFunction;
Interpreter.prototype.step = Interpreter.prototype.step;
Interpreter.prototype.run = Interpreter.prototype.run;
