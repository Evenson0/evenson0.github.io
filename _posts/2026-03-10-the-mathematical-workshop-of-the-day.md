---
title: "The Mathematical Workshop of the Day"
date: 2026-03-10
permalink: /posts/2026/03/10/the/mathematical/workshop/of/the/day
tags:
  - strategy
  - mathematics
  - game theory
  - problem solving
  - combinatorics
  - number theory
  - olympiad mathematics
---

In this post I solve three short problems in the spirit of mathematical competitions such as the Putnam or various Olympiads. The first is a simple combinatorial game with a clean winning strategy, the second studies a functional equation whose structure determines the values of the function, and the third is a Diophantine equation where a parity argument quickly shows that the only integer solution is the trivial one.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Consider the following game.

On a table there are **100 tokens**. Two players take turns removing tokens from the table. At each turn, a player may remove **5, 6, 7, 8, 9, or 10 tokens**, at their choice.

The player who removes the last token wins.

The question is:

> Which player has a winning strategy, and what is the strategy?

---

## Solution

The first player has a winning strategy.

The idea is to control the total number of tokens removed in each pair of moves.

### First move

The first player begins by removing **10 tokens**, leaving

$$
100 - 10 = 90
$$

tokens on the table.

### Strategy

Suppose the second player removes $$n$$ tokens where

$$
5 \le n \le 10.
$$

The first player then removes

$$
15 - n
$$

tokens.

This is always possible because $$15-n$$ is between $$5$$ and $$10$$.

Therefore, for every pair of moves (one move by each player), the total number of tokens removed is

$$
n + (15-n) = 15.
$$

### Why this works

After the first move, **90 tokens remain**, and

$$
90 = 6 \times 15.
$$

Each pair of moves removes 15 tokens, so the total number of tokens decreases as

$$
90, 75, 60, 45, 30, 15, 0.
$$

Because the first player always completes each block of 15 tokens, the last token will necessarily be taken by the first player.

---

## Conclusion

The first player wins by following this strategy:

1. Remove 10 tokens on the first move.
2. If the opponent removes $$n$$ tokens (with $$5 \le n \le 10$$), remove $$15-n$$ tokens.

This ensures that the total removed in each pair of turns is always **15**, forcing the game to end with the first player taking the final token.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Problem

Consider the following problem.

Let $$f$$ be a function from the positive integers into the positive integers such that

$$
f(n+1) > f(n)
$$

and

$$
f(f(n)) = 3n
$$

for all positive integers $$n$$.

Find $$f(100)$$.

---

## Solution

We will show that for any integers $$k \ge 0$$ and $$0 \le m < 3^k$$,

$$
f(3^k + m) = 2 \cdot 3^k + m.
$$

Since $$f(n+1) > f(n)$$, the function is strictly increasing. This implies that for any positive integers $$n$$ and $$m$$,

$$
f(n+m) \ge f(n) + m.
$$

---

From the functional equation,

$$
f(f(1)) = 3.
$$

Suppose $$f(1) > 2$$. Then

$$
3 = f(f(1)) \ge f(f(1)-1) + 1 \ge f(2) + 1 \ge f(1) + 2,
$$

which is impossible.

If $$f(1)=1$$, then

$$
f(f(1)) = f(1) = 1,
$$

again a contradiction.

Therefore,

$$
f(1) = 2.
$$

From this we obtain

$$
f(2) = f(f(1)) = 3.
$$

---

We prove by induction that for every nonnegative integer $$k$$,

$$
f(2 \cdot 3^k) = 3^{k+1}
$$

and

$$
f(3^k) = 2 \cdot 3^k.
$$

For $$k=0$$ this is already known:

$$
f(1)=2, \qquad f(2)=3.
$$

Assume both statements hold for some $$k$$.

Then

$$
f(3^{k+1}) = f(f(2 \cdot 3^k)) = 3 \cdot 2 \cdot 3^k = 2 \cdot 3^{k+1}.
$$

Similarly,

$$
f(2 \cdot 3^{k+1}) = f(f(3^{k+1})) = 3 \cdot 3^{k+1} = 3^{k+2}.
$$

This completes the induction.

---

Now consider the values

$$
f(3^k + m)
$$

for

$$
m = 0,1,\dots,3^k-1.
$$

These values must form a strictly increasing sequence of $$3^k$$ integers.

From the previous step we know that

$$
f(3^k) = 2\cdot 3^k
$$

and

$$
f(2\cdot 3^k) = 3^{k+1}.
$$

Therefore the values $$f(3^k+m)$$ must lie inside the interval

$$
[2\cdot 3^k,\, 3\cdot 3^k -1].
$$

This interval contains exactly $$3^k$$ integers.

Since we need a strictly increasing sequence of exactly $$3^k$$ integers in this interval, they must fill the entire interval.

Thus,

$$
f(3^k + m) = 2\cdot 3^k + m.
$$

---

### Computing $$f(100)$$

We write

$$
100 = 3^4 + 19
$$

since

$$
3^4 = 81.
$$

Using the formula,

$$
f(100) = f(3^4 + 19) = 2\cdot 3^4 + 19.
$$

Therefore,

$$
f(100) = 2 \cdot 81 + 19 = 162 + 19 = 181.
$$

Thus,

$$
\boxed{f(100)=181}.
$$

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

Find all integer solutions $$(a,b,c)\in\mathbb{Z}^3$$ satisfying $$a^2 + b^2 + c^2 = a^2 b^2.$$

## Solution

We prove that the only integer solution is

$$
(a,b,c) = (0,0,0).
$$

Assume that $$(a,b,c)$$ is a solution and that at least one of $$a,b,c$$ is non-zero.

Let $$2^k$$ be the highest power of $$2$$ dividing **all three** integers $$a,b,c$$. Write

$$
a = 2^k a_1, \qquad b = 2^k b_1, \qquad c = 2^k c_1,
$$

where $$a_1,b_1,c_1$$ are integers and **not all even** (so at least one of them is odd).

<div style="border-left:4px solid #3b82f6; padding:14px 18px; margin:22px 0; border-radius:4px;">

<strong>Remark.</strong> Since $$2^k$$ is defined as the largest power of $$2$$ dividing all three integers $$a,b,c$$, the integers $$a_1,b_1,c_1$$ cannot all be even. Indeed, if they were all even, we could write $$a_1=2a_2$$, $$b_1=2b_2$$, $$c_1=2c_2$$, which would imply

$$
a=2^{k+1}a_2,\qquad b=2^{k+1}b_2,\qquad c=2^{k+1}c_2.
$$

But then $$2^{k+1}$$ would divide $$a,b,c$$, contradicting the maximality of $$k$$. Therefore at least one of $$a_1,b_1,c_1$$ must be odd.

</div>

Substituting into the equation gives

$$
(2^k a_1)^2 + (2^k b_1)^2 + (2^k c_1)^2
=
(2^k a_1)^2 (2^k b_1)^2.
$$

Hence

$$
2^{2k}(a_1^2 + b_1^2 + c_1^2)
=
2^{4k} a_1^2 b_1^2.
$$

Dividing by $$2^{2k}$$ yields

$$
a_1^2 + b_1^2 + c_1^2
=
2^{2k} a_1^2 b_1^2. \tag{1}
$$

### Step 1 — Work modulo 4

Squares are congruent to $$0$$ or $$1$$ modulo $$4$$.

Since at least one of $$a_1,b_1,c_1$$ is odd, the left-hand side of (1) is congruent to

$$
1,2,\text{ or }3 \pmod{4}.
$$

<div style="border-left:4px solid #3b82f6; padding:14px 18px; margin:22px 0; border-radius:4px;">

<strong>Remark.</strong> If an integer is odd, its square is congruent to $$1 \pmod{4}$$, while the square of an even integer is congruent to $$0 \pmod{4}$$. Since at least one of $$a_1,b_1,c_1$$ is odd, at least one of the squares $$a_1^2,b_1^2,c_1^2$$ is $$1 \pmod{4}$$. Consequently the sum $$a_1^2+b_1^2+c_1^2$$ cannot be $$0 \pmod{4}$$; it must be congruent to $$1,2,$$ or $$3 \pmod{4}$$.

</div>

Now consider the right-hand side.

If $$k \ge 1$$ then $$2^{2k}$$ is divisible by $$4$$, so

$$
2^{2k} a_1^2 b_1^2 \equiv 0 \pmod{4}.
$$

But the left-hand side cannot be $$0 \pmod{4}$$, giving a contradiction.  
Therefore

$$
k = 0.
$$

Equation (1) becomes

$$
a_1^2 + b_1^2 + c_1^2 = a_1^2 b_1^2. \tag{2}
$$

### Step 2 — Force $$a_1$$ and $$b_1$$ to be odd

If either $$a_1$$ or $$b_1$$ were even, then $$a_1^2 b_1^2$$ would be divisible by $$4$$, so the right-hand side of (2) would be

$$
0 \pmod{4}.
$$

But the left-hand side contains at least one odd square, so it is congruent to

$$
1,2,\text{ or }3 \pmod{4},
$$

which is impossible.

Thus both $$a_1$$ and $$b_1$$ must be **odd**, and therefore

$$
a_1^2 b_1^2 \equiv 1 \pmod{4}.
$$

### Step 3 — Analyze $$c_1$$

Since $$a_1$$ and $$b_1$$ are odd,

$$
a_1^2 \equiv b_1^2 \equiv 1 \pmod{4}.
$$

Hence

$$
a_1^2 + b_1^2 + c_1^2
\equiv
1 + 1 + c_1^2
\equiv
2 + c_1^2 \pmod{4}.
$$

If $$c_1$$ is even, then $$c_1^2 \equiv 0$$ and

$$
a_1^2 + b_1^2 + c_1^2 \equiv 2 \pmod{4}.
$$

If $$c_1$$ is odd, then $$c_1^2 \equiv 1$$ and

$$
a_1^2 + b_1^2 + c_1^2 \equiv 3 \pmod{4}.
$$

In both cases the left-hand side is $$2$$ or $$3 \pmod{4}$$, whereas the right-hand side is $$1 \pmod{4}$$.  
This contradiction shows that our assumption was false.

Therefore the only integer solution is

$$
\boxed{(a,b,c) = (0,0,0)}.
$$

---

*Posted on March 10, 2026.*
