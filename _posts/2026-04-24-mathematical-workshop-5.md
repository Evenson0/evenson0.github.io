---
title: "Mathematical Workshop #5"
date: 2026-04-24
permalink: /workshop/5/
layout: single
author_profile: true
tags:
  - algebra
  - polynomials
  - roots
  - factorization
  - vieta formulas
  - number theory
  - olympiad mathematics
series: mathematical-workshop
---

In this post I present five short problems centered around polynomials and factorization. Each solution relies on a decisive algebraic idea - eliminating radicals, using Vieta's formulas, evaluating at special points, applying Sophie Germain's identity, and combining roots with Rolle's theorem.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Find a polynomial with integral coefficients whose zeros include

$$
\sqrt{2}+\sqrt{5}.
$$

---

## Solution

Take

$$
\alpha=\sqrt{2}+\sqrt{5}.
$$

Then

$$
\alpha^2 = 7 + 2\sqrt{10}.
$$

So

$$
\alpha^2 - 7 = 2\sqrt{10}.
$$

Squaring both sides gives

$$
(\alpha^2-7)^2=40.
$$

Expanding,

$$
\alpha^4 - 14\alpha^2 + 49 = 40.
$$

Hence,

$$
\alpha^4 - 14\alpha^2 + 9 = 0.
$$

Therefore, a polynomial with integral coefficients whose zeros include $$\sqrt{2}+\sqrt{5}$$ is

$$
\boxed{x^4-14x^2+9}.
$$

---

## Remark

The idea is to eliminate the radicals step by step until we obtain a polynomial equation with integer coefficients.



<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

The product of two of the four zeros of the quartic equation

$$
x^4 - 18x^3 + kx^2 + 200x - 1984 = 0
$$

is $$-32$$. Find $$k$$.

---

## Solution

This problem is from USAMO 1984.

Let $$a,b,c,d$$ be the zeros of the equation. By Vieta's formulas,

$$
a+b+c+d=18,
$$

$$
ab+ac+ad+bc+bd+cd=k,
$$

$$
abc+abd+acd+bcd=-200,
$$

and

$$
abcd=-1984.
$$

Assume

$$
ab=-32.
$$

Let

$$
u=a+b, \qquad v=c+d, \qquad w=cd.
$$

Then

$$
u+v=18.
$$

Also,

$$
ab+ac+ad+bc+bd+cd
=
ab+(a+b)(c+d)+cd.
$$

Therefore,

$$
k=-32+uv+w.
$$

For the sum of triple products,

$$
abc+abd+acd+bcd
=
ab(c+d)+cd(a+b).
$$

Hence,

$$
-32v+uw=-200.
$$

Finally,

$$
abcd=(ab)(cd)=-32w=-1984.
$$

So

$$
w=62.
$$

Using this in

$$
-32v+uw=-200,
$$

we get

$$
-32v+62u=-200.
$$

Since $$u+v=18$$, we have

$$
v=18-u.
$$

Thus,

$$
-32(18-u)+62u=-200.
$$

So

$$
-576+32u+62u=-200.
$$

Hence,

$$
94u=376.
$$

Therefore,

$$
u=4.
$$

Then

$$
v=14.
$$

Now,

$$
k=-32+uv+w.
$$

So

$$
k=-32+4\cdot 14+62.
$$

Therefore,

$$
\boxed{k=86}.
$$

---

## Remark

The key move is to group the four roots into two pairs. Once one product is known, Vieta's formulas determine the missing quantities.



<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Let $$a,b,c$$ be distinct integers. Can the polynomial

$$
(x-a)(x-b)(x-c)-1
$$

be factored into the product of two polynomials with integer coefficients?

---

## Solution

The answer is no.

Assume, by contradiction, that

$$
(x-a)(x-b)(x-c)-1=p(x)q(x),
$$

where $$p(x)$$ and $$q(x)$$ have integer coefficients.

Since the polynomial has degree $$3$$, one factor must be linear and the other must be quadratic. We may assume that $$p(x)$$ is linear and $$q(x)$$ is quadratic.

Evaluating at $$x=a$$ gives

$$
p(a)q(a)=(a-a)(a-b)(a-c)-1=-1.
$$

Similarly,

$$
p(b)q(b)=-1
$$

and

$$
p(c)q(c)=-1.
$$

Therefore,

$$
p(a)q(a)=p(b)q(b)=p(c)q(c)=-1.
$$

Since $$p$$ and $$q$$ have integer coefficients, they take integer values at integer inputs. Thus, in each product, one factor must be $$1$$ and the other must be $$-1$$.

Hence,

$$
p(a),p(b),p(c)\in\{-1,1\}.
$$

There are three values,

$$
p(a), \qquad p(b), \qquad p(c),
$$

but only two possibilities,

$$
-1 \qquad \text{and} \qquad 1.
$$

So either $$p(x)$$ takes the value $$1$$ twice, or it takes the value $$-1$$ twice.

But a first-degree polynomial cannot take the same value twice at two distinct inputs.

This is a contradiction.

Therefore,

$$
\boxed{\text{No}.}
$$

The polynomial cannot be factored into the product of two nonconstant polynomials with integer coefficients.

---

## Remark

The clever point is to evaluate the supposed factorization at the roots of the cubic part: $$a$$, $$b$$, and $$c$$.



<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Find all prime numbers $$p$$ that can be written as

$$
p=x^4+4y^4,
$$

where $$x$$ and $$y$$ are positive integers.

---

## Solution

The answer is $$p=5$$.

By Sophie Germain's identity,

$$
x^4+4y^4
=
(x^2+2y^2+2xy)(x^2+2y^2-2xy).
$$

Equivalently,

$$
x^4+4y^4
=
\left((x+y)^2+y^2\right)\left((x-y)^2+y^2\right).
$$

So

$$
p=
\left((x+y)^2+y^2\right)\left((x-y)^2+y^2\right).
$$

Since $$p$$ is prime, one of the factors must be equal to $$1$$.

But

$$
(x+y)^2+y^2>1
$$

because $$x$$ and $$y$$ are positive integers.

Thus we must have

$$
(x-y)^2+y^2=1.
$$

Since $$y$$ is a positive integer, this forces

$$
y=1.
$$

Then

$$
(x-y)^2+1=1.
$$

So

$$
(x-y)^2=0.
$$

Therefore,

$$
x=y=1.
$$

Hence,

$$
p=1^4+4\cdot 1^4=5.
$$

So the only prime number of the required form is

$$
\boxed{5}.
$$

---

## Remark

The whole problem collapses once we recognize Sophie Germain's identity.



<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Let $$f(x)$$ be a polynomial with real coefficients, and suppose that

$$
f(x)+f'(x)>0
$$

for all real numbers $$x$$. Prove that

$$
f(x)>0
$$

for all real numbers $$x$$.

---

## Solution

Since $$f(x)$$ and $$f(x)+f'(x)$$ have the same leading coefficient, the limit of $$f(x)$$ as $$x\to\pm\infty$$ must be equal to that of $$f(x)+f'(x)$$.

Because

$$
f(x)+f'(x)>0
$$

for all real numbers $$x$$, the polynomial $$f(x)+f'(x)$$ must tend to $$+\infty$$ as $$x\to+\infty$$ and as $$x\to-\infty$$.

Therefore,

$$
f(x)\to+\infty
$$

as $$x\to+\infty$$ and as $$x\to-\infty$$.

Now note that $$f$$ cannot have multiple real roots.

Indeed, if $$r$$ were a multiple real root of $$f$$, then

$$
f(r)=0
$$

and

$$
f'(r)=0.
$$

Thus,

$$
f(r)+f'(r)=0,
$$

contradicting the hypothesis.

So all real roots of $$f$$, if any, must be simple roots.

Since $$f(x)\to+\infty$$ for both $$x\to+\infty$$ and $$x\to-\infty$$, the polynomial must have an even number of real roots, if any. Write them as

$$
x_1<x_2<\cdots<x_{2n}.
$$

Since the roots are simple, $$f$$ changes sign at each root. In particular, between $$x_1$$ and $$x_2$$, the polynomial must be negative.

By Rolle's theorem, since

$$
f(x_1)=f(x_2)=0,
$$

there exists some point

$$
a\in(x_1,x_2)
$$

such that

$$
f'(a)=0.
$$

But between $$x_1$$ and $$x_2$$, we have

$$
f(a)<0.
$$

Therefore,

$$
f(a)+f'(a)=f(a)<0,
$$

which contradicts the hypothesis

$$
f(x)+f'(x)>0.
$$

Consequently, $$f$$ has no real roots.

Since $$f$$ has no real roots and tends to $$+\infty$$ at both ends, it cannot become negative. Hence,

$$
\boxed{f(x)>0 \text{ for all real numbers } x.}
$$

---

## Remark

The contradiction comes from forcing a negative interval between two simple roots, then using Rolle's theorem to find a point where the derivative vanishes.



<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

*Posted on April 24, 2026.*
