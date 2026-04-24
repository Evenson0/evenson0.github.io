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

In this workshop, I present five short problems about polynomials, roots, integer coefficients, and factorization.  
The main ideas are eliminating radicals, using Vieta’s formulas, proving irreducibility, applying Sophie Germain’s identity, and combining polynomial behavior with Rolle’s theorem.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem 1

Find a polynomial with integral coefficients whose zeros include

$$
\sqrt{2}+\sqrt{5}.
$$

### Solution

Let

$$
\alpha=\sqrt{2}+\sqrt{5}.
$$

Then

$$
\alpha^2=(\sqrt{2}+\sqrt{5})^2.
$$

So

$$
\alpha^2=2+5+2\sqrt{10}.
$$

Hence

$$
\alpha^2=7+2\sqrt{10}.
$$

Therefore,

$$
\alpha^2-7=2\sqrt{10}.
$$

Now square both sides:

$$
(\alpha^2-7)^2=40.
$$

Expanding gives

$$
\alpha^4-14\alpha^2+49=40.
$$

Thus

$$
\alpha^4-14\alpha^2+9=0.
$$

Therefore, a polynomial with integer coefficients having  
\(\sqrt{2}+\sqrt{5}\) as a root is

$$
\boxed{x^4-14x^2+9}.
$$

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem 2

The product of two of the four zeros of the quartic equation

$$
x^4-18x^3+kx^2+200x-1984=0
$$

is \(-32\). Find \(k\).

### Solution

Let \(a,b,c,d\) be the four zeros of the equation.

By Vieta’s formulas, we have

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

Assume that

$$
ab=-32.
$$

Let

$$
u=a+b,\qquad v=c+d,\qquad w=cd.
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

Now consider the sum of the products of three roots:

$$
abc+abd+acd+bcd
=
ab(c+d)+cd(a+b).
$$

Thus

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

We now have

$$
u+v=18
$$

and

$$
-32v+62u=-200.
$$

Since

$$
v=18-u,
$$

we get

$$
-32(18-u)+62u=-200.
$$

So

$$
-576+32u+62u=-200.
$$

Hence

$$
94u=376.
$$

Therefore,

$$
u=4.
$$

Then

$$
v=18-4=14.
$$

Finally,

$$
k=-32+uv+w.
$$

So

$$
k=-32+4\cdot 14+62.
$$

Thus

$$
k=86.
$$

Therefore,

$$
\boxed{k=86}.
$$

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem 3

Let \(a,b,c\) be distinct integers. Can the polynomial

$$
(x-a)(x-b)(x-c)-1
$$

be factored into the product of two polynomials with integer coefficients?

### Solution

The answer is no.

Suppose, for contradiction, that

$$
(x-a)(x-b)(x-c)-1=p(x)q(x),
$$

where \(p(x)\) and \(q(x)\) are nonconstant polynomials with integer coefficients.

Since the polynomial has degree \(3\), one factor must be linear and the other must be quadratic. So we may assume that \(p(x)\) is linear and \(q(x)\) is quadratic.

Now evaluate at \(x=a\). We get

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

Since \(p\) and \(q\) have integer coefficients, their values at integers are also integers.

Therefore, in each product

$$
p(a)q(a),\qquad p(b)q(b),\qquad p(c)q(c),
$$

one factor must be \(1\), and the other must be \(-1\).

In particular,

$$
p(a),p(b),p(c)\in\{-1,1\}.
$$

But there are three values and only two possibilities. Therefore, by the pigeonhole principle, two of the values

$$
p(a),\quad p(b),\quad p(c)
$$

must be equal.

So the linear polynomial \(p(x)\) takes the same value at two distinct integers.

This is impossible, because a nonconstant linear polynomial cannot take the same value twice.

Thus our assumption was false.

Therefore,

$$
\boxed{(x-a)(x-b)(x-c)-1}
$$

cannot be factored into the product of two nonconstant polynomials with integer coefficients.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem 4

Find all prime numbers \(p\) that can be written as

$$
p=x^4+4y^4,
$$

where \(x\) and \(y\) are positive integers.

### Solution

We use Sophie Germain’s identity:

$$
x^4+4y^4
=
(x^2+2xy+2y^2)(x^2-2xy+2y^2).
$$

This can also be written as

$$
x^4+4y^4
=
\big((x+y)^2+y^2\big)\big((x-y)^2+y^2\big).
$$

Therefore,

$$
p=
\big((x+y)^2+y^2\big)\big((x-y)^2+y^2\big).
$$

Since \(p\) is prime, one of these two factors must be equal to \(1\).

Now,

$$
(x+y)^2+y^2>1
$$

because \(x\) and \(y\) are positive integers.

So we must have

$$
(x-y)^2+y^2=1.
$$

Since \(y\) is a positive integer, we must have

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

Thus

$$
x=y=1.
$$

Therefore,

$$
p=1^4+4\cdot 1^4=5.
$$

Hence the only prime number of the required form is

$$
\boxed{5}.
$$

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem 5

Let \(f(x)\) be a polynomial with real coefficients, and suppose that

$$
f(x)+f'(x)>0
$$

for all real numbers \(x\). Prove that

$$
f(x)>0
$$

for all real numbers \(x\).

### Solution

Since \(f(x)\) and \(f(x)+f'(x)\) have the same leading coefficient, they have the same leading behavior as \(x\to\pm\infty\).

Because

$$
f(x)+f'(x)>0
$$

for all real \(x\), the polynomial \(f+f'\) must tend to \(+\infty\) as

$$
x\to+\infty
$$

and as

$$
x\to-\infty.
$$

Therefore, \(f\) also satisfies

$$
f(x)\to+\infty
$$

as

$$
x\to+\infty
$$

and as

$$
x\to-\infty.
$$

Now observe that \(f\) cannot have a multiple real root.

Indeed, if \(r\) were a multiple real root of \(f\), then

$$
f(r)=0
$$

and

$$
f'(r)=0.
$$

Hence

$$
f(r)+f'(r)=0,
$$

which contradicts the hypothesis

$$
f(x)+f'(x)>0.
$$

Therefore, every real root of \(f\), if any, must be simple.

Since

$$
f(x)\to+\infty
$$

at both ends, \(f\) must have an even number of real roots, if it has any.

Suppose that \(f\) has real roots. Write them as

$$
x_1<x_2<\cdots<x_{2n}.
$$

Since all roots are simple, \(f\) changes sign at each root. Because \(f(x)\to+\infty\) as \(x\to-\infty\), the polynomial is positive before \(x_1\). Therefore, it is negative on the interval

$$
(x_1,x_2).
$$

By Rolle’s theorem, since

$$
f(x_1)=f(x_2)=0,
$$

there exists some

$$
a\in(x_1,x_2)
$$

such that

$$
f'(a)=0.
$$

But on the interval \((x_1,x_2)\), we have

$$
f(a)<0.
$$

Thus

$$
f(a)+f'(a)=f(a)+0=f(a)<0,
$$

which contradicts the assumption that

$$
f(x)+f'(x)>0
$$

for all real \(x\).

Therefore, \(f\) has no real roots.

Since \(f\) has no real roots and tends to \(+\infty\) at both ends, it must be positive everywhere.

Hence

$$
\boxed{f(x)>0\text{ for all }x\in\mathbb{R}.}
$$

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Final Remarks

These five problems show several classic techniques in algebra:

1. eliminating radicals by repeated squaring;
2. using Vieta’s formulas to extract hidden information from roots;
3. proving irreducibility by evaluating a polynomial at special values;
4. using Sophie Germain’s identity to factor expressions of the form \(x^4+4y^4\);
5. combining the behavior of polynomials at infinity with Rolle’s theorem.

Each technique is simple, but powerful. Together, they form a good miniature toolkit for olympiad-style algebra problems.
