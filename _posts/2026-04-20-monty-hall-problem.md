---
title: "The Monty Hall Problem and Christopher Boone"
date: 2026-04-20
permalink: /posts/2026/04/20/monty-hall-problem
tags: [probability, mathematics, monty hall, marilyn vos savant, sherlock holmes, christopher boone]
---

A few weeks after my mother’s death, I found myself returning to a novel that had stayed with me for years: *The Curious Incident of the Dog in the Night-Time*.

The first time I read it, I was still in secondary school, long before university, long before actuarial science. I did not yet have the language to explain why the book affected me so much. I only knew that Christopher Boone’s voice stayed with me. Reading it again now, I understand more clearly what I felt then: when the world becomes hard to bear, structure becomes precious, and mathematics is one of its purest forms.

Christopher is a fifteen-year-old boy who moves through the world by relying on logic, patterns, lists, and order. He loves prime numbers, detective stories, and things that can be checked. The world around him is often unstable and confusing, so he returns to mathematics because mathematics does not shift under his feet.

That is one of the reasons this novel has never really left me.

One of its most memorable mathematical passages is about a game show puzzle. Three doors, two goats, one car, a host, and a decision. A very small problem, yet one that became famous because it reveals how unreliable intuition can be.

That problem is the **Monty Hall problem**.

<div style="text-align:center; margin:28px 0 36px 0;">
  <img src="/images/posts/christopher.jpg" alt="Mark Haddon's novel" style="width:360px; max-width:82%; display:block; margin:auto; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.10);">
</div>

## Christopher Boone and the love of structure

Christopher introduces himself through facts. He tells us that he knows all the countries of the world and their capital cities, and every prime number up to 7,057. That opening is unforgettable because it defines him immediately: he is someone who trusts exact things.

He even numbers the chapters of his book using prime numbers instead of ordinary counting. It is a small detail, but it says everything. Christopher does not simply enjoy mathematics. He inhabits it.

That detail mattered to me when I first read the novel, and it matters even more to me now. There are moments in life when one does not want interpretation or ambiguity. One wants something that can be followed step by step. Christopher turns to mathematics for that reason. I think many people who truly love mathematics understand this instinct.

## Sherlock Holmes, Conan Doyle, and the pleasure of clues

Christopher loves *The Hound of the Baskervilles*. I understand that completely. It was also one of my own first encounters with Arthur Conan Doyle, and I have remained fascinated by Sherlock Holmes ever since.

There is something irresistible about a detective story when it is done well: clues, false leads, hidden causes, and finally the restoration of order through reason. Christopher admires Holmes because Holmes notices what others fail to notice. That is also why Holmes fits so naturally beside a problem like Monty Hall. In both cases, the truth is not especially far away. Most people simply fail to look at the situation with enough discipline.

The novel also sent me, years ago, toward a few memorable facts about Holmes and Conan Doyle.

The famous deerstalker cap owes much of its iconic status to illustration and adaptation. Popular culture fixed that image in our minds more strongly than the original stories did.

The equally famous sentence “Elementary, my dear Watson” is another example. It belongs more to the legend of Holmes than to Conan Doyle’s actual text.

And Conan Doyle himself, in one of literature’s stranger ironies, became deeply interested in spiritualism later in life, while the detective he created remains one of the great emblems of rational deduction.

All of this makes the Monty Hall problem feel perfectly at home in Christopher’s world. It rewards attention and punishes vague thinking.

## Why this novel matters to me

There are books one admires, and there are books that remain lodged in one’s life.

When I first read *The Curious Incident of the Dog in the Night-Time*, I was not yet a university student. I was simply reading about this strange, brilliant teenager who loved mathematics, detective stories, and prime numbers. I did not know then how much of that would remain with me.

Reading it again now, after grief has changed the way I read everything, the novel lands differently. Christopher’s turn toward mathematics no longer feels like a literary quirk. It feels true. There are moments when one wants to think only in terms of things that can be counted, followed, proved, or clearly stated. Not because mathematics heals anything directly, but because it offers form when everything else feels shapeless.

And among all the passages in the book, the Monty Hall problem remains the one I most wanted to write about.

## The story behind the Monty Hall problem

The version most people know became famous through Marilyn vos Savant’s *Ask Marilyn* column in *Parade* magazine in 1990.

A reader sent in a puzzle: there are three doors, one car, two goats; you choose one door; the host, who knows where the car is, opens another door and reveals a goat; then he offers you the chance to stay or switch.

Marilyn’s answer was simple: **switch**.

She was right.

What made the episode legendary was the reaction. Large numbers of readers wrote back insisting that she was wrong. Many of them were highly educated. Some were professors, some were scientists, some had advanced degrees. The problem became famous because it showed something slightly humiliating about the human mind: people can be intelligent, trained, and still completely misread a simple structure.

That is also why Christopher includes it. It shows the gap between instinct and reasoning.

## The statement of the problem

You are facing **three doors**.

- Behind one door is a **car**.
- Behind the other two are **goats**.

You choose one door.

The host, who knows where the car is, opens one of the two doors you did **not** choose and shows you a goat.

Then you are offered a choice:

- **stay** with your original door,
- or **switch** to the other unopened door.

What should you do?

## The answer

You should **switch**.

If you stay with your first choice, your chance of winning the car is

$$
\frac{1}{3}.
$$

If you switch, your chance of winning the car is

$$
\frac{2}{3}.
$$

Once a goat has been revealed, many people immediately feel that there are two unopened doors left, so each one should now have probability one half.

That feeling is exactly where the mistake begins.

## Why the 50-50 intuition fails

The host does not open a door at random.

His action is constrained:

1. he cannot open the door you chose,
2. he cannot open the door hiding the car,
3. he must open a door hiding a goat.

So the host’s move carries information.

Your first choice was made when all three doors were still in play. That means your original pick had a one-in-three chance of being correct from the beginning, and nothing the host does changes the fact that your first pick was usually a bad bet.

So your original door keeps probability

$$
\frac{1}{3},
$$

and the remaining unopened door carries

$$
\frac{2}{3}.
$$

## The cleanest proof

There is a quick way to settle the problem.

When you make your first choice, only two things can happen.

### Case 1: your initial choice is correct

This happens with probability

$$
\frac{1}{3}.
$$

If that happens, switching makes you lose.

### Case 2: your initial choice is wrong

This happens with probability

$$
\frac{2}{3}.
$$

If that happens, the car must be behind one of the two doors you did not choose. Since the host knows where the car is, he is forced to open the goat door among those two, which leaves the car behind the only unopened alternative.

In that case, switching makes you win.

So the whole problem can be reduced to one sentence:

- if your first choice is right, switching loses;
- if your first choice is wrong, switching wins.

And your first choice is wrong two times out of three.

Therefore,

$$
P(\text{win by switching})=\frac{2}{3}.
$$

## Exhaustive demonstration

Let the doors be A, B, and C, and suppose you initially choose door A.

There are three equally likely possibilities.

### Case 1: the car is behind A

You picked the correct door immediately.

- The host opens either B or C, both goats.
- If you **stay**, you win.
- If you **switch**, you lose.

### Case 2: the car is behind B

Your first choice is wrong.

- The host cannot open B, because it hides the car.
- The host cannot open A, because you chose it.
- So the host must open C, which hides a goat.
- If you **stay**, you lose.
- If you **switch**, you win.

### Case 3: the car is behind C

Your first choice is wrong again.

- The host cannot open C, because it hides the car.
- The host cannot open A, because you chose it.
- So the host must open B, which hides a goat.
- If you **stay**, you lose.
- If you **switch**, you win.

We can summarize everything in the following table.

| Car location | Host opens | Result if stay | Result if switch |
|---|---|---|---|
| A | B or C | Win | Lose |
| B | C | Lose | Win |
| C | B | Lose | Win |

So out of the three equally likely situations:

- staying wins once,
- switching wins twice.

Hence

$$
P(\text{win by switching})=\frac{2}{3}.
$$

## A tree diagram

Here is the same reasoning as a simple decision tree.

```text
You choose a door
|
|-- You initially chose the car (probability 1/3)
|     |-- Stay   -> Win the car
|     `-- Switch -> Lose
|
`-- You initially chose a goat (probability 2/3)
      |-- Stay   -> Lose
      `-- Switch -> Win the car
```

This tree is enough to settle the problem.

## A more explicit outcome diagram

```text
Start
|
|-- Car behind your chosen door (1/3)
|     |
|     |-- Host opens a goat door
|     |-- Stay   -> Car
|     `-- Switch -> Goat
|
|-- Car behind one unchosen door (1/3)
|     |
|     |-- Host opens the other goat door
|     |-- Stay   -> Goat
|     `-- Switch -> Car
|
`-- Car behind the other unchosen door (1/3)
      |
      |-- Host opens the other goat door
      |-- Stay   -> Goat
      `-- Switch -> Car
```

## A conditional probability proof

For readers who want the formal calculation, here it is, written without the compact notation that often displays badly on some sites.

Assume you first choose door A, and suppose the host opens door C.

We want to know the probability that the car is behind door B, given that door C has been opened.

By Bayes' rule,

$$
P(\text{car behind B} \mid \text{host opens C})
=
\frac{
P(\text{host opens C} \mid \text{car behind B}) \cdot P(\text{car behind B})
}{
P(\text{host opens C})
}.
$$

Now compute each part.

The probability that the car is behind B is

$$
P(\text{car behind B})=\frac{1}{3}.
$$

If the car is behind B, then the host must open C, so

$$
P(\text{host opens C} \mid \text{car behind B})=1.
$$

If the car is behind A, then the host can open either B or C, so

$$
P(\text{host opens C} \mid \text{car behind A})=\frac{1}{2}.
$$

If the car is behind C, then the host cannot open C, so

$$
P(\text{host opens C} \mid \text{car behind C})=0.
$$

So the total probability that the host opens C is

$$
P(\text{host opens C})
=
\frac{1}{2}\cdot\frac{1}{3}
+
1\cdot\frac{1}{3}
+
0\cdot\frac{1}{3}
=
\frac{1}{2}.
$$

Therefore,

$$
P(\text{car behind B} \mid \text{host opens C})
=
\frac{1\cdot\frac{1}{3}}{\frac{1}{2}}
=
\frac{2}{3}.
$$

So even after the host opens a goat door, the other unopened door still carries probability two thirds.

## The 100-door version

If the three-door version still feels strange, make it larger.

Imagine the same game with **100 doors**.

- One door hides a car.
- Ninety-nine hide goats.
- You choose one door.

Your chance of being right is

$$
\frac{1}{100}.
$$

Now the host, who knows where the car is, opens **98 goat doors**, leaving closed only:

- your original choice,
- one other door.

At that point, almost nobody says the odds are fifty-fifty.

And they should not. Your first pick is still only a one-in-one-hundred shot. The other unopened door carries everything else:

$$
\frac{99}{100}.
$$

The 100-door version makes the structure obvious. Switching works because your first choice is usually wrong.

## Why so many people got it wrong

What makes the Monty Hall problem beautiful is that the error it exposes is very human.

People do not usually get it wrong because the arithmetic is hard. They get it wrong because they quietly replace the real problem with a simpler imaginary one.

They picture the host as if he were acting randomly.  
They treat the opened goat door as if it erased the past.  
They assume the two remaining doors are now perfectly symmetrical.

But they are not.

One of those doors is the result of your uninformed first guess.  
The other is the result of the host’s informed and constrained action.

That asymmetry is the whole problem.

## Try the simulation

I built an interactive simulation of the problem on my site. If you want to watch the frequencies settle empirically, you can try it here:

[Try the Monty Hall simulation](/tools/monty-hall/)

Run it a few thousand times and the result becomes impossible to ignore.

## Why this problem belongs in this novel

There is a reason this passage fits so naturally inside Christopher Boone’s world.

Christopher loves detective fiction because it is built out of clues, red herrings, and the possibility that attention can defeat confusion. He loves Holmes because Holmes sees what others miss. He loves mathematics because it gives shape to what would otherwise remain disorder.

The Monty Hall problem brings all of that together.

It looks simple.  
It invites the wrong conclusion.  
It punishes impatience.  
And once its structure is seen clearly, it becomes obvious.

That is exactly the kind of puzzle Christopher would love.

And perhaps it is exactly the kind of puzzle one returns to in moments when one wants reason to keep hold of the world.

## A final joke

Christopher ends one part of the novel with a joke about precision, and it feels like the right way to end an article like this.

Three men are on a train: an economist, a logician, and a mathematician. As they cross into Scotland, they see a brown cow standing in a field.

The economist says:

> The cows in Scotland are brown.

The logician replies:

> There exists at least one cow in Scotland of which at least one side is brown.

And the mathematician says:

> There exists at least one cow in Scotland of which one side appears to be brown.

That is also the spirit of the Monty Hall problem.

Look carefully.  
State exactly what you know.  
And do not let intuition speak more loudly than structure.
