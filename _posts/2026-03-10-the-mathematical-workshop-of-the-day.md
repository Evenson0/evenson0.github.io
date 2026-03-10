---
title: "The Mathematical Workshop of the Day"
date: 2026-03-10
permalink: /posts/2026/03/10/the/mathematical/workshop/of/the/day
tags:
  - combinatorial games
  - strategy
  - mathematics
  - game theory
---

In this post I solve three short problems in the spirit of mathematical competitions such as the Putnam or various Olympiads. Each one is elementary, but hides a nice idea, a combinatorial observation, a clever polynomial trick, and a simple divisibility argument.

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

---

*Posted on March 10, 2026.*
