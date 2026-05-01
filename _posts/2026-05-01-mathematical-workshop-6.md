---
title: "Mathematical Workshop #6"
date: 2026-05-01
permalink: /workshop/6/
layout: single
author_profile: true
tags:
  - algebra
  - polynomials
  - roots
  - vieta formulas
  - factorization
  - inequalities
  - olympiad mathematics
series: mathematical-workshop
---

In this post I present four short problems centered around polynomials. Each solution relies on a different algebraic idea: Vieta's formulas, base expansion, discriminants, and a hidden polynomial recurrence.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Consider a line $$L$$ that meets the graph

$$
y = 2x^4 + 7x^3 + 3x - 5
$$

in four distinct points

$$
P_i=(x_i,y_i), \qquad i=1,2,3,4.
$$

Prove that

$$
\frac{x_1+x_2+x_3+x_4}{4}
$$

is independent of $$L$$, and compute its value.

---

## Solution

Let the line $$L$$ be written as

$$
y=mx+b.
$$

The intersection points between the line and the curve are obtained by solving the system

$$
y=2x^4+7x^3+3x-5,
$$

and

$$
y=mx+b.
$$

Substituting the second equation into the first gives

$$
2x^4+7x^3+3x-5=mx+b.
$$

Therefore,

$$
2x^4+7x^3+(3-m)x-(5+b)=0.
$$

This is a quartic equation. Since the line meets the graph in four distinct points, this equation has four distinct roots

$$
x_1,x_2,x_3,x_4.
$$

The important point is that the coefficient of $$x^3$$ does not depend on the line. It is always $$7$$, no matter what $$m$$ and $$b$$ are.

By Vieta's formulas, if

$$
Ax^4+Bx^3+Cx^2+Dx+E
$$

has roots $$x_1,x_2,x_3,x_4$$, then

$$
x_1+x_2+x_3+x_4=-\frac{B}{A}.
$$

Here,

$$
A=2
\qquad\text{and}\qquad
B=7.
$$

Hence,

$$
x_1+x_2+x_3+x_4=-\frac{7}{2}.
$$

Therefore,

$$
\frac{x_1+x_2+x_3+x_4}{4}
=
\frac{-\frac{7}{2}}{4}
=
-\frac{7}{8}.
$$

This value is independent of $$L$$ because it depends only on the leading coefficient and the coefficient of $$x^3$$ of the original quartic.

Thus,

$$
\boxed{\frac{x_1+x_2+x_3+x_4}{4}=-\frac{7}{8}.}
$$



<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Two players $$A$$ and $$B$$ play the following game. Player $$A$$ thinks of a polynomial with nonnegative integer coefficients. Player $$B$$ must guess the polynomial.

Player $$B$$ has two shots: she may choose a number and ask player $$A$$ to return the value of the polynomial at that number. Then she may choose one more number and ask again.

Can player $$B$$ always determine the polynomial?

---

## Solution

Yes, player $$B$$ can always determine the polynomial.

Let the polynomial be

$$
f(x)=a_0+a_1x+a_2x^2+\cdots+a_nx^n,
$$

where all coefficients $$a_i$$ are nonnegative integers.

The difficulty is that player $$B$$ does not know the degree of the polynomial, nor any of its coefficients. The trick is to first obtain a bound for all coefficients.

For the first question, player $$B$$ asks for

$$
f(1).
$$

Then player $$A$$ returns

$$
f(1)=a_0+a_1+a_2+\cdots+a_n.
$$

Let

$$
M=f(1).
$$

Since every coefficient $$a_i$$ is nonnegative, each coefficient must satisfy

$$
0\le a_i\le M.
$$

Indeed, no single coefficient can be larger than the sum of all coefficients.

Now player $$B$$ chooses an integer

$$
N>M
$$

and asks for the value

$$
f(N).
$$

Then

$$
f(N)=a_0+a_1N+a_2N^2+\cdots+a_nN^n.
$$

This expression is exactly what a base-$$N$$ expansion looks like. The only issue would be carrying, but there is no carrying here because

$$
0\le a_i<M<N.
$$

Thus each coefficient $$a_i$$ is a valid digit in base $$N$$.

So when player $$B$$ writes $$f(N)$$ in base $$N$$, its digits are precisely

$$
a_0,a_1,a_2,\dots,a_n.
$$

More explicitly,

$$
f(N)=(a_n a_{n-1}\cdots a_1 a_0)_N,
$$

where the subscript means that the number is written in base $$N$$.

Therefore, the second answer reveals all coefficients of the polynomial.

Hence player $$B$$ can reconstruct the entire polynomial.

Thus,

$$
\boxed{\text{Yes, player }B\text{ can always win.}}
$$



<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Let $$a,b,c>0$$. Is it possible that each of the polynomials

$$
P(x)=ax^2+bx+c,
$$

$$
Q(x)=cx^2+ax+b,
$$

and

$$
R(x)=bx^2+cx+a
$$

has two real roots?

---

## Solution

The answer is no.

We argue by contradiction. Suppose that all three polynomials have two real roots.

Recall that a quadratic polynomial

$$
ux^2+vx+w
$$

has two distinct real roots if and only if its discriminant is positive:

$$
v^2-4uw>0.
$$

Apply this criterion to each polynomial.

For

$$
P(x)=ax^2+bx+c,
$$

the discriminant is

$$
b^2-4ac.
$$

Since $$P$$ has two real roots, we must have

$$
b^2-4ac>0.
$$

Therefore,

$$
b^2>4ac.
$$

For

$$
Q(x)=cx^2+ax+b,
$$

the discriminant is

$$
a^2-4bc.
$$

So we must have

$$
a^2>4bc.
$$

For

$$
R(x)=bx^2+cx+a,
$$

the discriminant is

$$
c^2-4ab.
$$

So we must have

$$
c^2>4ab.
$$

We now multiply the three inequalities:

$$
b^2>4ac,
$$

$$
a^2>4bc,
$$

and

$$
c^2>4ab.
$$

This gives

$$
a^2b^2c^2>64a^2b^2c^2.
$$

Since $$a,b,c>0$$, we know that

$$
a^2b^2c^2>0.
$$

So we can divide both sides by $$a^2b^2c^2$$. We get

$$
1>64.
$$

This is impossible.

Therefore, our assumption was false. The three polynomials cannot all have two real roots.

Hence,

$$
\boxed{\text{No, this is impossible.}}
$$



<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Define a sequence of functions by

$$
Q_0(x)=1,
\qquad
Q_1(x)=x,
$$

and, for $$n\ge 2$$,

$$
Q_n(x)=\frac{Q_{n-1}(x)^2-1}{Q_{n-2}(x)}.
$$

Prove that every $$Q_n(x)$$ is in fact a polynomial.

---

## Solution

This problem is from Putnam 2017.

At first sight, the recurrence is surprising. It defines $$Q_n(x)$$ using a quotient:

$$
Q_n(x)=\frac{Q_{n-1}(x)^2-1}{Q_{n-2}(x)}.
$$

So it is not obvious that $$Q_n(x)$$ should be a polynomial. The denominator might not divide the numerator. The goal is to reveal a hidden structure that makes the division exact.

We define another sequence $$P_n(x)$$ by

$$
P_0(x)=1,
\qquad
P_1(x)=x,
$$

and

$$
P_n(x)=xP_{n-1}(x)-P_{n-2}(x)
\qquad\text{for } n\ge 2.
$$

This sequence is clearly made of polynomials, because each new term is obtained from previous polynomials by multiplication by $$x$$ and subtraction.

For example,

$$
P_0(x)=1,
$$

$$
P_1(x)=x,
$$

$$
P_2(x)=x^2-1,
$$

$$
P_3(x)=x(x^2-1)-x=x^3-2x.
$$

We will prove that the sequence $$P_n$$ satisfies the same recurrence as $$Q_n$$. That will imply that

$$
Q_n(x)=P_n(x)
$$

for all $$n$$, and hence every $$Q_n$$ is a polynomial.

We need to prove that

$$
P_n(x)=\frac{P_{n-1}(x)^2-1}{P_{n-2}(x)}.
$$

Equivalently, we need to prove the identity

$$
P_{n-1}(x)^2-P_n(x)P_{n-2}(x)=1.
$$

This identity is the key.

We prove it by induction.

For $$n=2$$, we have

$$
P_0(x)=1,
\qquad
P_1(x)=x,
\qquad
P_2(x)=x^2-1.
$$

Then

$$
P_1(x)^2-P_2(x)P_0(x)
=
x^2-(x^2-1)\cdot 1
=
1.
$$

So the identity is true for $$n=2$$.

Assume now that

$$
P_{n-1}(x)^2-P_n(x)P_{n-2}(x)=1.
$$

We want to prove that

$$
P_n(x)^2-P_{n+1}(x)P_{n-1}(x)=1.
$$

Using the recurrence

$$
P_{n+1}(x)=xP_n(x)-P_{n-1}(x),
$$

we compute

$$
P_n(x)^2-P_{n+1}(x)P_{n-1}(x)
=
P_n(x)^2-\bigl(xP_n(x)-P_{n-1}(x)\bigr)P_{n-1}(x).
$$

Expanding,

$$
P_n(x)^2-P_{n+1}(x)P_{n-1}(x)
=
P_n(x)^2-xP_n(x)P_{n-1}(x)+P_{n-1}(x)^2.
$$

Now use the recurrence again:

$$
P_n(x)=xP_{n-1}(x)-P_{n-2}(x).
$$

So

$$
xP_{n-1}(x)=P_n(x)+P_{n-2}(x).
$$

Substituting this into the previous expression gives

$$
P_n(x)^2-\bigl(P_n(x)+P_{n-2}(x)\bigr)P_n(x)+P_{n-1}(x)^2.
$$

Therefore,

$$
P_n(x)^2-P_{n+1}(x)P_{n-1}(x)
=
P_n(x)^2-P_n(x)^2-P_n(x)P_{n-2}(x)+P_{n-1}(x)^2.
$$

Thus,

$$
P_n(x)^2-P_{n+1}(x)P_{n-1}(x)
=
P_{n-1}(x)^2-P_n(x)P_{n-2}(x).
$$

By the induction hypothesis, the right-hand side is equal to $$1$$. Hence,

$$
P_n(x)^2-P_{n+1}(x)P_{n-1}(x)=1.
$$

This completes the induction.

Therefore, for all $$n\ge 2$$,

$$
P_{n-1}(x)^2-P_n(x)P_{n-2}(x)=1.
$$

Rearranging gives

$$
P_n(x)P_{n-2}(x)=P_{n-1}(x)^2-1.
$$

Hence,

$$
P_n(x)=\frac{P_{n-1}(x)^2-1}{P_{n-2}(x)}.
$$

So the polynomial sequence $$P_n$$ satisfies exactly the same recurrence as $$Q_n$$, with the same initial conditions

$$
P_0=Q_0=1,
\qquad
P_1=Q_1=x.
$$

Therefore,

$$
Q_n(x)=P_n(x)
$$

for every $$n$$.

Since every $$P_n(x)$$ is a polynomial, every $$Q_n(x)$$ is also a polynomial.

Thus,

$$
\boxed{\text{all }Q_n(x)\text{ are polynomials.}}
$$

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

*Posted on May 1, 2026.*
