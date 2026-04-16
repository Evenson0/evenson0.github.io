---
title: "Mathematical Workshop #4"
date: 2026-04-14
permalink: /workshop/4/
layout: single
author_profile: true
tags:
  - combinatorics
  - invariants
  - modular arithmetic
  - fibonacci numbers
  - olympiad mathematics
---

In this post I present three short problems linked by a common theme: the power of invariants. A congruence modulo $$3$$, a parity argument, and a Fibonacci-weighted sum are each enough to force the final outcome.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:56px 0; width:100%;">

## Problem

Given 11 red chips, 30 white chips, and 19 blue chips, we may replace any two chips of different colours by two chips of the third colour. For example, a white chip and a blue chip may be replaced by two red chips.

Can we ever reach a position where two different colours have the same number of chips?

---

## Solution

Let $$(r,w,b)$$ denote the numbers of red, white, and blue chips.

Consider the quantities

$$
b-w \pmod 3
\qquad\text{and}\qquad
r-b \pmod 3.
$$

We claim that both are invariant under every allowed move.

If
$$
(r,w,b)\mapsto (r-1,w+2,b-1),
$$
then
$$
b-w\mapsto (b-1)-(w+2)=b-w-3\equiv b-w \pmod 3,
$$
and
$$
r-b\mapsto (r-1)-(b-1)=r-b.
$$

If
$$
(r,w,b)\mapsto (r-1,w-1,b+2),
$$
then
$$
b-w\mapsto (b+2)-(w-1)=b-w+3\equiv b-w \pmod 3,
$$
and
$$
r-b\mapsto (r-1)-(b+2)=r-b-3\equiv r-b \pmod 3.
$$

If
$$
(r,w,b)\mapsto (r+2,w-1,b-1),
$$
then
$$
b-w\mapsto (b-1)-(w-1)=b-w,
$$
and
$$
r-b\mapsto (r+2)-(b-1)=r-b+3\equiv r-b \pmod 3.
$$

So these two residues never change.

Initially,
$$
(r,w,b)=(11,30,19),
$$
hence
$$
b-w=19-30=-11\equiv 1 \pmod 3,
\qquad
r-b=11-19=-8\equiv 1 \pmod 3.
$$

Therefore, throughout the process,
$$
b-w\equiv 1 \pmod 3,
\qquad
r-b\equiv 1 \pmod 3.
$$
In particular,
$$
b\not\equiv w \pmod 3,
\qquad
r\not\equiv b \pmod 3,
$$
and then also
$$
r\not\equiv w \pmod 3.
$$

Thus $$r,w,b$$ are always pairwise distinct modulo $$3$$. But if two of them were equal, they would certainly be congruent modulo $$3$$, which is impossible.

$$
\boxed{\text{No, this can never happen.}}
$$

---

## Remark

The counts themselves are hard to control, but their differences modulo $$3$$ are rigid enough to forbid equality.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:56px 0; width:100%;">

## Problem

We begin with the set of integers $$\{1,2,\dots,n\}$$. At each step, choose two integers $$a\le b$$ from the current set and replace them with the single integer $$b-a$$. Repeating this operation reduces the number of elements by one each time, although repeated values may occur.

Continue until only one integer remains. Determine whether this final integer is odd or even, depending on $$n \pmod 4$$.

---

## Solution

Let $$S_j$$ be the set at step $$j$$, and let $$s_j$$ be the sum of its elements.

If $$S_{j+1}$$ is obtained from $$S_j$$ by replacing $$a\le b$$ with $$b-a$$, then

$$
s_{j+1}=s_j-a-b+(b-a)=s_j-2a\equiv s_j \pmod 2.
$$

So the parity of the total sum is invariant.

At the end only one integer remains, so its parity must be the same as that of the initial sum
$$
1+2+\cdots+n=\frac{n(n+1)}{2}.
$$

It is therefore enough to examine the parity of $$\frac{n(n+1)}{2}$$.

If $$n=4k$$, then
$$
\frac{n(n+1)}{2}=2k(4k+1),
$$
which is even.

If $$n=4k+1$$, then
$$
\frac{n(n+1)}{2}=(4k+1)(2k+1),
$$
which is odd.

If $$n=4k+2$$, then
$$
\frac{n(n+1)}{2}=(2k+1)(4k+3),
$$
which is odd.

If $$n=4k+3$$, then
$$
\frac{n(n+1)}{2}=(4k+3)(2k+2),
$$
which is even.

Hence the final integer is

$$
\boxed{
\text{even if } n\equiv 0,3 \pmod 4,
\qquad
\text{odd if } n\equiv 1,2 \pmod 4.
}
$$

---

## Remark

Every move changes the sum by an even number, so modulo $$2$$ the entire process is governed by the initial value of $$1+2+\cdots+n$$.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:56px 0; width:100%;">

## Problem

We play the game of number solitaire. Start with a finite set $$S$$ of distinct integers, with smallest element $$0$$ and largest element $$n$$. If $$m,m+1\in S$$ but $$m+2\notin S$$, then we may remove $$m$$ and $$m+1$$ from $$S$$ and replace them by $$m+2$$.

Show that we can continue until we obtain a set in which all the integers differ by at least $$2$$, and whose largest element is either $$n$$ or $$n+1$$.

---

## Solution

Define
$$
\Sigma(S)=\sum_{m\in S}F_m,
$$
where $$F_m$$ is the $$m$$th Fibonacci number.

If we replace $$m$$ and $$m+1$$ by $$m+2$$, then
$$
F_m+F_{m+1}=F_{m+2},
$$
so $$\Sigma(S)$$ does not change. Thus $$\Sigma(S)$$ is an invariant.

Now let $$N_k$$ be the largest element of the set obtained after $$k$$ steps. Since each move replaces two integers by a larger one, the maximum never decreases, so
$$
n\le N_k.
$$

On the other hand,
$$
F_{N_k}\le \Sigma(S_k)=\Sigma(S)\le \sum_{m=0}^{n}F_m=F_{n+2}-1.
$$
Since Fibonacci numbers are increasing and $$F_{n+2}-1<F_{n+2}$$, this implies
$$
N_k<n+2,
$$
hence
$$
N_k\le n+1.
$$

Therefore the largest element in any terminal position is either $$n$$ or $$n+1$$.

It remains to show that we can reach a position with no consecutive integers. Suppose
$$
r,r+1,\dots,r+\ell\in S
\qquad\text{but}\qquad
r+\ell+1\notin S.
$$
Then we can replace $$r+\ell-1$$ and $$r+\ell$$ by $$r+\ell+1$$, then replace $$r+\ell-3$$ and $$r+\ell-2$$ by $$r+\ell-1$$, and continue in the same way.

So any block of consecutive integers can be shortened. Repeating this local simplification eventually removes every pair of consecutive integers.

Hence we arrive at a set in which all elements differ by at least $$2$$, and whose largest element is either $$n$$ or $$n+1$$.

$$
\boxed{
\text{The process can be continued until no two elements are consecutive,}
}
$$

$$
\boxed{
\text{and the largest remaining element is } n \text{ or } n+1.
}
$$

---

## Remark

The Fibonacci invariant is perfectly adapted to the move $$m,m+1\mapsto m+2$$, because it mirrors the identity $$F_{m+2}=F_m+F_{m+1}$$.

---

*Posted on April 14, 2026.*
