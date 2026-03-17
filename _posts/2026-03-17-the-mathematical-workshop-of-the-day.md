---
title: "The Mathematical Workshop of the Day"
date: 2026-03-17
permalink: /posts/2026/03/17/the/mathematical/workshop/of/the/day
tags:
  - number theory
  - invariants
  - optimization
  - olympiad mathematics
---

In this post I present three short problems centered around a common theme: extracting structure from simplicity. Each solution relies on a single decisive idea — a modular obstruction, a local optimization argument, and an invariant — illustrating how elementary tools can completely determine the outcome.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Let $$s(n)$$ be the sum of the digits of $$n$$ written in base 10. Find all integers $$n$$ such that

$$
n + s(n) + s(s(n)) = 1000.
$$

---

## Solution

Since a number and the sum of its digits are congruent modulo $$3$$, we have

$$
s(n) \equiv n \pmod{3}
\qquad \text{and hence} \qquad
s(s(n)) \equiv n \pmod{3}.
$$

Therefore,

$$
n+s(n)+s(s(n)) \equiv n+n+n = 3n \equiv 0 \pmod{3}.
$$

So the left-hand side must be divisible by $$3$$.

But

$$
1000 \equiv 1 \pmod{3},
$$

which is impossible.

Hence there is no integer $$n$$ such that

$$
n+s(n)+s(s(n))=1000.
$$

$$
\boxed{\text{No solution}}
$$

---

## Remark

The key fact is that $$10 \equiv 1 \pmod{3}$$, so every integer is congruent modulo $$3$$ to the sum of its digits.



<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Let $$\{x_1,\dots,x_n\}=\{1,2,\dots,n\}$$. Find the maximum of

$$
x_1x_2 + x_2x_3 + \cdots + x_nx_1.
$$

---

## Solution

View the numbers arranged on a circle.

Suppose two adjacent pairs $$a,b$$ and $$c,d$$ appear (in that order), with

$$
a < d \quad \text{and} \quad b > c.
$$

Reversing the segment between $$b$$ and $$c$$ increases the sum by

$$
ac + bd - ab - cd = (d-a)(b-c) > 0.
$$

Thus, no such configuration can occur in an optimal arrangement.

This forces the largest elements to be adjacent in a rigid pattern. Starting from $$n$$ and repeating the argument outward, we obtain

$$
(1,2,4,6,\dots,n,\; n-1,n-3,\dots,3).
$$

---

## Maximum value

$$
\boxed{
\frac{2n^3 + 3n^2 - 11n + 18}{6}
}
$$


<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Start with the set $$\{1,2,\dots,n\}$$. At each step, replace two integers $$a \le b$$ by $$b-a$$. Continue until only one integer remains.

Determine whether the final integer is even or odd, depending on $$n \pmod{4}$$.

---

## Solution

Let $$S_j$$ be the set at step $$j$$ and let $$s_j$$ be the sum of its elements.

If we obtain $$S_{j+1}$$ by replacing $$a \le b$$ with $$b-a$$, then

$$
s_{j+1} = s_j - a - b + (b-a) = s_j - 2a.
$$

Thus,

$$
s_{j+1} \equiv s_j \pmod{2}.
$$

Therefore, the parity of the sum remains invariant throughout the process.

At the end, only one integer remains, so this integer has the same parity as the initial sum

$$
1 + 2 + \cdots + n.
$$

---

We evaluate the parity of

$$
1 + 2 + \cdots + n.
$$

Since the sum of any four consecutive integers is even, the parity depends only on $$n \pmod{4}$$.

This gives:

$$
\begin{aligned}
n \equiv 0 \pmod{4} &\Rightarrow \text{even}, \\
n \equiv 1 \pmod{4} &\Rightarrow \text{odd}, \\
n \equiv 2 \pmod{4} &\Rightarrow \text{odd}, \\
n \equiv 3 \pmod{4} &\Rightarrow \text{even}.
\end{aligned}
$$

---

The final integer is

$$
\boxed{
\text{even if } n \equiv 0 \text{ or } 3 \pmod{4}, \quad
\text{odd if } n \equiv 1 \text{ or } 2 \pmod{4}.
}
$$

---

*Posted on March 17, 2026.*