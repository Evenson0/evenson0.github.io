---
title: "The Mathematical Workshop of the Day"
date: 2026-03-06
permalink: /posts/2026/03/06/the/mathematical/workshop/of/the/day
tags:
  - combinatorics
  - tournaments
  - olympiad mathematics
  - algebraic
  - polynomials
  - divisibility
---

In this post I solve three short problems in the spirit of mathematical competitions such as the Putnam or various Olympiads. Each one is elementary, but hides a nice idea, a combinatorial observation, a clever polynomial trick, and a simple divisibility argument.

<hr style="margin:50px 0;">

## Problem

In a **round-robin tournament** with $$n$$ players $$P_1, P_2, \ldots, P_n$$, each player plays exactly one match against every other player.

There are **no ties**, so every match results in one win and one loss.

Let $$W_k$$ denote the number of **wins** of player $$P_k$$, and let $$L_k$$ denote the number of **losses** of player $$P_k$$.

Show that

$$
\sum_{k=1}^{n} W_k^2 = \sum_{k=1}^{n} L_k^2.
$$

---

## Solution

The identity to be shown can be written as

$$
\sum_{k=1}^{n} (W_k - L_k)(W_k + L_k) = 0.
$$

For each player $$P_k$$, the quantity $$W_k + L_k$$ represents the total number of matches played by that player. Since each player faces all other $$n-1$$ opponents, we have

$$
W_k + L_k = n-1.
$$

Factoring out $$n-1$$, the identity becomes

$$
(n-1)\sum_{k=1}^{n}(W_k - L_k) = 0.
$$

Since $$n-1 \neq 0$$, this reduces to

$$
\sum_{k=1}^{n}(W_k - L_k) = 0.
$$

Equivalently,

$$
\sum_{k=1}^{n} W_k = \sum_{k=1}^{n} L_k.
$$

This equality is immediate: in every match exactly **one player wins and one player loses**, so each victory corresponds to exactly one loss.

Hence,

$$
\boxed{\sum_{k=1}^{n} W_k^2 = \sum_{k=1}^{n} L_k^2}.
$$

<hr style="margin:50px 0;">

## Problem

Let $$P(x)$$ be a polynomial of degree $$n$$ satisfying

$$
P(k) = k \quad \text{for } k = 1,2,\ldots,n
$$

and

$$
P(0) = 1.
$$

Find the value of

$$
P(-1).
$$

---

## Solution

Let

$$
Q(x) = P(x) - x.
$$

Then $$Q(x)$$ is a polynomial of degree $$n$$ whose roots are

$$
k = 1,2,\ldots,n.
$$

Thus $$Q(x)$$ must be of the form

$$
Q(x) = c \prod_{k=1}^{n} (x-k)
$$

for some constant $$c$$. Hence

$$
P(x) = x + c \prod_{k=1}^{n} (x-k).
$$

Using the condition $$P(0) = 1$$, we obtain

$$
1 = P(0) = c(-1)^n n!
$$

so

$$
c = \frac{(-1)^n}{n!}.
$$

Therefore,

$$
P(-1) = -1 + \frac{(-1)^n}{n!} \prod_{k=1}^{n} (-1-k).
$$

But

$$
\prod_{k=1}^{n} (-1-k) = (-1)^n (n+1)!,
$$

so

$$
P(-1) = -1 + (n+1) = n.
$$

Thus,

$$
\boxed{P(-1) = n}.
$$

<hr style="margin:50px 0;">

## Problem

Find the smallest positive integer $$n$$ such that **every digit of $$15n$$** is either $$8$$ or $$0$$.

---

## Solution

Let

$$
N = 15n.
$$

Since $$N$$ is divisible by $$3$$ and $$5$$, two conditions must hold:

1. The **sum of the digits of $$N$$** must be divisible by $$3$$.
2. The **last digit of $$N$$** must be $$0$$ or $$5$$.

However, the digits of $$N$$ are restricted to $$0$$ and $$8$$. Therefore the last digit cannot be $$5$$, so it must be

$$
0.
$$

Thus $$N$$ ends with $$0$$.

Next, since $$N$$ must also be divisible by $$3$$, the sum of its digits must be divisible by $$3$$. If $$N$$ contains $$k$$ digits equal to $$8$$, then the sum of its digits is

$$
8k.
$$

Hence $$8k$$ must be divisible by $$3$$.

The smallest positive integer satisfying these conditions occurs when $$k=3$$, giving

$$
N = 8880.
$$

Therefore,

$$
n = \frac{8880}{15} = 592.
$$

Thus the smallest positive integer satisfying the condition is

$$
\boxed{592}.
$$

---

<div style="border-left:4px solid #3b82f6; padding:14px 18px; margin:22px 0; border-radius:4px;">

<strong>Remark.</strong> Let $$k$$ denote the number of digits equal to $$8$$ in $$N$$. Since the sum of the digits of $$N$$ is $$8k$$, the condition that $$N$$ be divisible by $$3$$ implies that $$8k$$ must be divisible by $$3$$.

Because

$$
8 \equiv 2 \pmod{3},
$$

this is equivalent to

$$
2k \equiv 0 \pmod{3},
$$

which implies that $$k$$ must be a multiple of $$3$$.

</div>

---

*Posted on March 6, 2026.*
