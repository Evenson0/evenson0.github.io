---

title: "Mathematical Workshop #7"
date: 2026-06-03
permalink: /workshop/7/
layout: single
author_profile: true
tags:

* binomial coefficients
* generating functions
* Fibonacci sequence
* combinatorics
* olympiad mathematics
  series: mathematical-workshop

---

In this post I present five short problems centered around binomial coefficients and generating functions. The main ideas are differentiating the binomial theorem, comparing coefficients, and using generating functions to uncover identities involving Fibonacci numbers.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Prove that for any positive integer $$n$$,

$$
\binom{n}{1}+2\binom{n}{2}+3\binom{n}{3}+\cdots+n\binom{n}{n}
=============================================================

n2^{n-1}.
$$

Here

$$
\binom{a}{b}
============

\frac{a!}{b!(a-b)!}
$$

is the binomial coefficient.

---

## Solution

We start from the binomial theorem:

$$
(1+x)^n
=======

\binom{n}{0}
+
\binom{n}{1}x
+
\binom{n}{2}x^2
+
\cdots
+
\binom{n}{n}x^n.
$$

The expression we want contains the factors

$$
1,2,3,\ldots,n.
$$

A natural way to make these factors appear is to differentiate with respect to $$x$$.

Differentiating both sides gives

$$
n(1+x)^{n-1}
============

\binom{n}{1}
+
2\binom{n}{2}x
+
3\binom{n}{3}x^2
+
\cdots
+
n\binom{n}{n}x^{n-1}.
$$

Now we want the same expression but without powers of $$x$$. So we set

$$
x=1.
$$

Then

$$
n(1+1)^{n-1}
============

\binom{n}{1}
+
2\binom{n}{2}
+
3\binom{n}{3}
+
\cdots
+
n\binom{n}{n}.
$$

Since

$$
(1+1)^{n-1}=2^{n-1},
$$

we obtain

$$
\binom{n}{1}
+
2\binom{n}{2}
+
3\binom{n}{3}
+
\cdots
+
n\binom{n}{n}
=============

n2^{n-1}.
$$

Thus,

$$
\boxed{
\binom{n}{1}+2\binom{n}{2}+3\binom{n}{3}+\cdots+n\binom{n}{n}=n2^{n-1}.
}
$$

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Prove that for any positive integer $$n$$,

$$
\binom{n}{0}^2
+
\binom{n}{1}^2
+
\binom{n}{2}^2
+
\cdots
+
\binom{n}{n}^2
==============

\binom{2n}{n}.
$$

---

## Solution

We again begin with the binomial theorem:

$$
(1+x)^n
=======

\sum_{k=0}^{n}\binom{n}{k}x^k.
$$

Now square both sides:

$$
\bigl((1+x)^n\bigr)^2
=====================

\left(\sum_{k=0}^{n}\binom{n}{k}x^k\right)^2.
$$

The left-hand side simplifies to

$$
(1+x)^{2n}.
$$

So we have

$$
(1+x)^{2n}
==========

\left(\sum_{k=0}^{n}\binom{n}{k}x^k\right)^2.
$$

Now let us study the coefficient of $$x^n$$ on both sides.

On the left-hand side, by the binomial theorem,

$$
(1+x)^{2n}
==========

\sum_{k=0}^{2n}\binom{2n}{k}x^k.
$$

Therefore, the coefficient of $$x^n$$ is

$$
\binom{2n}{n}.
$$

On the right-hand side, we multiply

$$
\left(\sum_{i=0}^{n}\binom{n}{i}x^i\right)
\left(\sum_{j=0}^{n}\binom{n}{j}x^j\right).
$$

To get a term in $$x^n$$, we need

$$
i+j=n.
$$

Thus the coefficient of $$x^n$$ is

$$
\sum_{i+j=n}\binom{n}{i}\binom{n}{j}.
$$

Since $$j=n-i$$, this becomes

$$
\sum_{i=0}^{n}\binom{n}{i}\binom{n}{n-i}.
$$

But

$$
\binom{n}{n-i}=\binom{n}{i}.
$$

Therefore the coefficient of $$x^n$$ on the right-hand side is

$$
\sum_{i=0}^{n}\binom{n}{i}^2.
$$

Since both sides are the same polynomial, their coefficients of $$x^n$$ must be equal. Hence,

$$
\sum_{i=0}^{n}\binom{n}{i}^2
============================

\binom{2n}{n}.
$$

Thus,

$$
\boxed{
\binom{n}{0}^2+\binom{n}{1}^2+\cdots+\binom{n}{n}^2=\binom{2n}{n}.
}
$$

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Prove that for any positive integers $$k\le m,n$$,

$$
\sum_{j=0}^{k}
\binom{n}{j}\binom{m}{k-j}
==========================

\binom{m+n}{k}.
$$

---

## Solution

This identity is known as Vandermonde's identity.

We prove it by comparing coefficients.

Start with the two binomial expansions

$$
(1+x)^n
=======

\sum_{j=0}^{n}\binom{n}{j}x^j
$$

and

$$
(1+x)^m
=======

\sum_{i=0}^{m}\binom{m}{i}x^i.
$$

Multiplying these two expressions gives

$$
(1+x)^n(1+x)^m
==============

\left(\sum_{j=0}^{n}\binom{n}{j}x^j\right)
\left(\sum_{i=0}^{m}\binom{m}{i}x^i\right).
$$

The left-hand side is simply

$$
(1+x)^{m+n}.
$$

So

$$
(1+x)^{m+n}
===========

\left(\sum_{j=0}^{n}\binom{n}{j}x^j\right)
\left(\sum_{i=0}^{m}\binom{m}{i}x^i\right).
$$

Now compare the coefficient of $$x^k$$.

On the left-hand side,

$$
(1+x)^{m+n}
===========

\sum_{r=0}^{m+n}\binom{m+n}{r}x^r.
$$

So the coefficient of $$x^k$$ is

$$
\binom{m+n}{k}.
$$

On the right-hand side, a term $$x^k$$ appears when we choose a term $$x^j$$ from the first factor and a term $$x^{k-j}$$ from the second factor.

The coefficient contributed by that choice is

$$
\binom{n}{j}\binom{m}{k-j}.
$$

As $$j$$ varies from $$0$$ to $$k$$, we get all possible ways to form $$x^k$$. Therefore the coefficient of $$x^k$$ on the right-hand side is

$$
\sum_{j=0}^{k}
\binom{n}{j}\binom{m}{k-j}.
$$

Since both sides are the same polynomial, their coefficients of $$x^k$$ must be equal. Hence,

$$
\sum_{j=0}^{k}
\binom{n}{j}\binom{m}{k-j}
==========================

\binom{m+n}{k}.
$$

Thus,

$$
\boxed{
\sum_{j=0}^{k}
\binom{n}{j}\binom{m}{k-j}
==========================

\binom{m+n}{k}.
}
$$

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Let $$F_n$$ be the Fibonacci sequence

$$
0,1,1,2,3,5,8,13,\ldots
$$

defined recursively by

$$
F_0=0,
\qquad
F_1=1,
\qquad
F_n=F_{n-1}+F_{n-2}
\quad\text{for } n\ge 2.
$$

Prove that

$$
\sum_{n=1}^{\infty}\frac{F_n}{2^n}=2.
$$

---

## Solution

We use the generating function of the Fibonacci sequence.

Let

$$
A(x)=\sum_{n=0}^{\infty}F_nx^n.
$$

Since

$$
F_0=0,
\qquad
F_1=1,
$$

we have

$$
A(x)=0+x+F_2x^2+F_3x^3+F_4x^4+\cdots.
$$

Using the Fibonacci recurrence

$$
F_n=F_{n-1}+F_{n-2},
$$

one obtains the standard generating function

$$
A(x)=\frac{x}{1-x-x^2}.
$$

Thus,

$$
\sum_{n=0}^{\infty}F_nx^n
=========================

\frac{x}{1-x-x^2}.
$$

Now the sum we want is

$$
\sum_{n=1}^{\infty}\frac{F_n}{2^n}.
$$

This is exactly the generating function evaluated at

$$
x=\frac12.
$$

Therefore,

$$
\sum_{n=1}^{\infty}\frac{F_n}{2^n}
==================================

A\left(\frac12\right).
$$

Substituting into the formula gives

$$
A\left(\frac12\right)
=====================

\frac{\frac12}{1-\frac12-\left(\frac12\right)^2}.
$$

Now simplify the denominator:

$$
1-\frac12-\left(\frac12\right)^2
================================

1-\frac12-\frac14.
$$

Since

$$
1-\frac12=\frac12,
$$

we get

$$
\frac12-\frac14=\frac14.
$$

So

$$
A\left(\frac12\right)
=====================

\frac{\frac12}{\frac14}.
$$

Dividing by $$\frac14$$ is the same as multiplying by $$4$$, so

$$
\frac{\frac12}{\frac14}
=======================

# \frac12\cdot 4

2.

$$

Hence,

$$
\sum_{n=1}^{\infty}\frac{F_n}{2^n}=2.
$$

Thus,

$$
\boxed{
\sum_{n=1}^{\infty}\frac{F_n}{2^n}=2.
}
$$

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Prove that for every integer $$n\ge 0$$,

$$
F_{n+1}
=======

\sum_{k=0}^{\lfloor n/2\rfloor}
\binom{n-k}{k}.
$$

---

## Solution

We again use generating functions.

The Fibonacci generating function is

$$
\sum_{n=0}^{\infty}F_nx^n
=========================

\frac{x}{1-x-x^2}.
$$

We want a formula for $$F_{n+1}$$, so we consider the shifted sequence

$$
F_1,F_2,F_3,F_4,\ldots.
$$

Define

$$
G(x)=\sum_{n\ge 0}F_{n+1}x^n.
$$

Since

$$
F_1=1,
\qquad
F_2=1,
\qquad
F_3=2,
\qquad
F_4=3,
$$

we have

$$
G(x)=1+x+2x^2+3x^3+5x^4+\cdots.
$$

From the Fibonacci generating function, we get

$$
G(x)=\frac{1}{1-x-x^2}.
$$

Now we rewrite the denominator in a useful way:

$$
1-x-x^2
=======

(1-x)\left(1-\frac{x^2}{1-x}\right).
$$

Indeed,

$$
(1-x)\left(1-\frac{x^2}{1-x}\right)
===================================

# (1-x)-x^2

1-x-x^2.
$$

Therefore,

$$
G(x)
====

\frac{1}{(1-x)\left(1-\frac{x^2}{1-x}\right)}.
$$

So

$$
G(x)
====

\frac{1}{1-x}
\cdot
\frac{1}{1-\frac{x^2}{1-x}}.
$$

Now use the geometric series identity

$$
\frac{1}{1-y}
=============

\sum_{k\ge 0}y^k.
$$

Here,

$$
y=\frac{x^2}{1-x}.
$$

Thus,

$$
\frac{1}{1-\frac{x^2}{1-x}}
===========================

\sum_{k\ge 0}
\left(\frac{x^2}{1-x}\right)^k.
$$

Hence,

$$
G(x)
====

\frac{1}{1-x}
\sum_{k\ge 0}
\left(\frac{x^2}{1-x}\right)^k.
$$

Now simplify each term:

$$
\frac{1}{1-x}
\left(\frac{x^2}{1-x}\right)^k
==============================

x^{2k}(1-x)^{-(k+1)}.
$$

Therefore,

$$
G(x)
====

\sum_{k\ge 0}
x^{2k}(1-x)^{-(k+1)}.
$$

We now expand

$$
(1-x)^{-(k+1)}.
$$

By the negative binomial expansion,

$$
(1-x)^{-(k+1)}
==============

\sum_{m\ge 0}
\binom{m+k}{k}x^m.
$$

Substituting this into the expression for $$G(x)$$ gives

$$
G(x)
====

\sum_{k\ge 0}
x^{2k}
\sum_{m\ge 0}
\binom{m+k}{k}x^m.
$$

Thus,

$$
G(x)
====

\sum_{k\ge 0}
\sum_{m\ge 0}
\binom{m+k}{k}x^{m+2k}.
$$

Now we want the coefficient of $$x^n$$.

Since

$$
G(x)=\sum_{n\ge 0}F_{n+1}x^n,
$$

the coefficient of $$x^n$$ is exactly $$F_{n+1}$$.

On the other hand, in the double sum, a term contributes to $$x^n$$ precisely when

$$
m+2k=n.
$$

This means

$$
m=n-2k.
$$

Because $$m\ge 0$$, we must have

$$
n-2k\ge 0.
$$

So

$$
k\le \frac n2.
$$

Since $$k$$ is an integer,

$$
0\le k\le \left\lfloor \frac n2\right\rfloor.
$$

For each such $$k$$, the coefficient is

$$
\binom{m+k}{k}.
$$

Replacing $$m$$ by $$n-2k$$ gives

$$
\binom{(n-2k)+k}{k}
===================

\binom{n-k}{k}.
$$

Therefore,

$$
F_{n+1}
=======

\sum_{k=0}^{\lfloor n/2\rfloor}
\binom{n-k}{k}.
$$

Thus,

$$
\boxed{
F_{n+1}
=======

\sum_{k=0}^{\lfloor n/2\rfloor}
\binom{n-k}{k}.
}
$$

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

*Posted on June 3, 2026.*
