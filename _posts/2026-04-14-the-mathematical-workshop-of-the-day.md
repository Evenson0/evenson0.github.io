---
title: "The Mathematical Workshop of the Day"
date: 2026-04-14
permalink: /posts/2026/04/14/the/mathematical/workshop/of/the/day
tags:
  - combinatorics
  - invariants
  - modular arithmetic
  - fibonacci numbers
  - olympiad mathematics
---

In this post I present three short problems whose solutions are driven by invariants. The first uses congruences modulo $$3$$, the second tracks parity through a reduction process, and the third introduces a Fibonacci-weighted invariant to control the evolution of a combinatorial game.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Given 11 red chips, 30 white chips, and 19 blue chips, we may replace any two chips of different colours by two chips of the third colour. For example, a white chip and a blue chip may be replaced by two red chips.

Can we ever reach a position where two different colours have the same number of chips?

---

## Solution

Let $$(r,w,b)$$ denote the numbers of red, white, and blue chips.

Consider the quantities

$$
b-w \pmod 3
\qquad	ext{and}\qquad
r-b \pmod 3.
$$

We check that they are invariants under every allowed move:

- If
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

- If
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

- If
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

So $$b-w \pmod 3$$ and $$r-b \pmod 3$$ remain constant throughout the process.

Initially,
$$
(r,w,b)=(11,30,19),
$$
so
$$
b-w=19-30=-11\equiv 1 \pmod 3,
\qquad
r-b=11-19=-8\equiv 1 \pmod 3.
$$

Hence, at every stage,
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
and therefore also
$$
r\not\equiv w \pmod 3.
$$

Thus the three numbers $$r,w,b$$ are always pairwise distinct modulo $$3$$. But if two of them were equal, they would certainly be congruent modulo $$3$$, which is impossible.

Therefore, no two colours can ever have the same number of chips.

$$
\boxed{\text{It is impossible.}}
$$

---

## Remark

The key idea is not to track the chip counts directly, but to track quantities that survive every move. Here, the right invariants are the differences modulo $$3$$.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

We begin with the set of integers $$\{1,2,\dots,n\}$$. At each step, choose two integers $$a\le b$$ from the current set and replace them with the single integer $$b-a$$. Repeating this operation reduces the number of elements by one each time, although repeated values may occur.

Continue until only one integer remains. Determine whether this final integer is odd or even, depending on $$n \pmod 4$$.

---

## Solution

Let $$S_j$$ be the set at step $$j$$, and let $$s_j$$ be the sum of its elements.

If we obtain $$S_{j+1}$$ by replacing $$a\le b$$ with $$b-a$$, then

$$
s_{j+1}=s_j-a-b+(b-a)=s_j-2a \equiv s_j \pmod 2.
$$

So the parity of the sum remains invariant throughout the process. When only one integer is left, that final integer must therefore have the same parity as the initial sum

$$
1+2+\cdots+n=\frac{n(n+1)}{2}.
$$

It remains to determine the parity of $$\frac{n(n+1)}{2}$$. Checking the four residue classes modulo $$4$$ gives:

- If $$n=4k$$, then
  $$
  \frac{n(n+1)}{2}=\frac{4k(4k+1)}{2}=2k(4k+1),
  $$
  which is even.

- If $$n=4k+1$$, then
  $$
  \frac{n(n+1)}{2}=\frac{(4k+1)(4k+2)}{2}=(4k+1)(2k+1),
  $$
  which is odd.

- If $$n=4k+2$$, then
  $$
  \frac{n(n+1)}{2}=\frac{(4k+2)(4k+3)}{2}=(2k+1)(4k+3),
  $$
  which is odd.

- If $$n=4k+3$$, then
  $$
  \frac{n(n+1)}{2}=\frac{(4k+3)(4k+4)}{2}=(4k+3)(2k+2),
  $$
  which is even.

Therefore, the last remaining integer is

$$
\boxed{\text{even if } n \equiv 0,3 \pmod 4,\qquad \text{odd if } n \equiv 1,2 \pmod 4.}
$$

---

## Remark

The process itself may look complicated, but modulo $$2$$ only one thing matters: every move changes the total sum by an even number.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

We play the game of number solitaire. Start with a finite set $$S$$ of distinct integers, with smallest element $$0$$ and largest element $$n$$. If $$m,m+1\in S$$ but $$m+2\notin S$$, then we may remove $$m$$ and $$m+1$$ from $$S$$ and replace them by $$m+2$$.

Show that we can continue until we obtain a set in which all the integers differ by at least $$2$$, and whose largest element is either $$n$$ or $$n+1$$.

---

## Solution

Define
$$
\Sigma(S)=\sum_{m\in S} F_m,
$$
where $$F_m$$ is the $$m$$th Fibonacci number.

If we replace $$m$$ and $$m+1$$ by $$m+2$$, then
$$
F_m+F_{m+1}=F_{m+2},
$$
so the value of $$\Sigma(S)$$ does not change. Thus $$\Sigma(S)$$ is an invariant of the game.

Now let $$S_1=S,S_2,\dots,S_k$$ be the sequence of sets produced during the process, and let $$N_k$$ be the largest element of $$S_k$$. By construction,
$$
n=N_1\le N_2\le \cdots \le N_k.
$$
Also,
$$
F_{N_k}\le \Sigma(S_k)=\Sigma(S)=\sum_{m\in S}F_m\le \sum_{m=0}^{n}F_m=F_{n+2}-1.
$$
Since $$F_{n+2}-1<F_{n+2}$$ and Fibonacci numbers are increasing, it follows that
$$
N_k<n+2,
$$
hence
$$
N_k\le n+1.
$$
Therefore the largest element of any terminal set must be either $$n$$ or $$n+1$$.

It remains to show that we can reach a terminal set with no two consecutive integers. Suppose
$$
r,r+1,\dots,r+\ell\in S
\qquad\text{but}\qquad
r+\ell+1\notin S.
$$
Then we may first replace $$r+\ell-1$$ and $$r+\ell$$ by $$r+\ell+1$$, then replace $$r+\ell-3$$ and $$r+\ell-2$$ by $$r+\ell-1$$, and continue in this way. Repeating this local simplification eventually destroys every block of consecutive integers.

Hence we can continue until no two elements differ by $$1$$, that is, until all elements differ by at least $$2$$. In such a final set, the largest element is either $$n$$ or $$n+1$$.

$$
\boxed{\text{The process ends in a set with no consecutive integers and largest element } n \text{ or } n+1.}
$$

---

## Remark

The Fibonacci invariant is the natural algebraic encoding of the move
$$
m,m+1\longmapsto m+2,
$$
since it mirrors exactly the identity $$F_{m+2}=F_{m+1}+F_m$$.

---

*Posted on April 14, 2026.*
