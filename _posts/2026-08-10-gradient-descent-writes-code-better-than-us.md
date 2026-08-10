---

title: "Gradient Descent Writes Code Better Than Us"
date: 2026-08-10
permalink: /posts/2026/08/10/gradient-descent-writes-code-better-than-us
tags:

* artificial intelligence
* machine learning
* deep learning
* gpt
* transformers
* gradient descent
* neural networks
* andrej karpathy

---

In 2017, Andrej Karpathy, one of the most influential contemporary contributors to artificial intelligence, posted the following sentence on Twitter:

> Gradient descent can write code better than you. I'm sorry.

<div style="text-align:center; margin:32px 0 40px 0;">
  <a href="https://x.com/karpathy/status/893576281375219712" target="_blank" rel="noopener noreferrer">
    <img src="/images/posts/microgpt/kaparthy-tweet.png"
         alt="Andrej Karpathy's 2017 tweet: Gradient descent can write code better than you. I'm sorry."
         style="width:850px; max-width:95%; display:block; margin:auto; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.10);">
  </a>
</div>

That was August 4, 2017.

Nine years later, the sentence is worth reading again.

I am not sure I would pass a serious technical programming interview today. I went back to LeetCode recently and felt rusty. Problems I would once have approached almost mechanically now required a few minutes just to recover the appropriate reflexes. Should I use a hash table? Two pointers? Dynamic programming? A depth-first search? What time complexity should I aim for?

Meanwhile, the machines have not been getting rusty.

In 2024, OpenAI reported that its o1 model reached the 89th percentile on Codeforces, a competitive programming platform. This does not mean that it was better than 89 percent of all programmers in every possible sense. Competitive programming measures a particular kind of algorithmic reasoning. It says relatively little about designing large systems, maintaining software, understanding users, or working with a team.

Still, the result is difficult to ignore.

Modern models are now evaluated not only on isolated algorithmic exercises but also on software-engineering benchmarks involving real repositories, bug fixes, terminal usage, tests and modifications distributed across several files.

Comparisons such as "better than 90 percent of programmers" should therefore be treated carefully. There is no single scalar quantity that measures programming ability. But the broader trend is no longer difficult to see: machines have become remarkably capable programmers.

Karpathy's sentence has aged well.

There is only one problem.

Gradient descent does not know Python.

It does not know what a `for` loop is. It does not know what a class is. It has never studied binary trees. It does not understand Git, recursion, pointers, functions or compilers.

Gradient descent is an optimization method.

In its simplest form, it looks like this:

$$
\theta_{t+1}
============

## \theta_t

\eta \nabla_\theta L(\theta_t).
$$

We take a collection of numbers, calculate some derivatives, move those numbers slightly, and repeat.

How can this possibly lead to a machine that writes software?

More fundamentally, how does a generative artificial intelligence actually work?

That is what I want to understand in this article.

Rather than stopping at metaphors about artificial neurons, machines learning, or neural networks imitating the brain, I want to open the machine and inspect the algorithm.

Fortunately, Andrej Karpathy gave us a particularly good object to dissect.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## A GPT in about 200 lines

Karpathy published `microgpt`, an implementation of a GPT written in roughly two hundred lines of pure Python.

There is no PyTorch.

There is no TensorFlow.

There is no JAX.

There is not even NumPy.

The program uses only the Python standard library.

It begins with the following declaration:

```python
"""
The most atomic way to train and run inference for a GPT in pure, dependency-free Python.
This file is the complete algorithm.
Everything else is just efficiency.

@karpathy
"""
```

The statement is deliberately provocative:

```text
This file is the complete algorithm.
Everything else is just efficiency.
```

Modern machine-learning frameworks contain enormous amounts of engineering. They handle GPU kernels, automatic differentiation, distributed training, memory allocation, optimized matrix multiplication, mixed precision, batching, parallelism and many other concerns.

microGPT removes almost all of it.

What remains is the conceptual skeleton.

<div style="text-align:center; margin:32px 0 40px 0;">
  <a href="https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95" target="_blank" rel="noopener noreferrer">
    <img src="/images/posts/microgpt/microgpt-code.png"
         alt="Andrej Karpathy's microGPT source code"
         style="width:1200px; max-width:100%; display:block; margin:auto; border-radius:16px; box-shadow:0 10px 30px rgba(0,0,0,0.12);">
  </a>
</div>

Inside these lines we find almost everything required to understand the foundations of a GPT:

$$
\text{data}
\rightarrow
\text{tokens}
\rightarrow
\text{vectors}
\rightarrow
\text{attention}
\rightarrow
\text{probabilities}
\rightarrow
\text{loss}
\rightarrow
\text{gradients}
\rightarrow
\text{updated parameters}.
$$

There is a dataset.

There is a tokenizer.

There is a neural network.

There is self-attention.

There is automatic differentiation.

There is a loss function.

There is an optimizer.

There is a training loop.

And finally there is inference, where the model generates sequences that were not explicitly present in the training set.

I will go through the program almost line by line.

If you already program, some explanations may seem elementary. You probably do not need someone to explain what `import os` does or what a Python list comprehension is.

But I want this article to remain understandable to someone who has never taken a serious programming course.

Perhaps, with some irony, people in the future will not have to endure as many algorithm and programming-logic classes as we did.

So we will begin with Python.

Whenever a line hides mathematics, however, we will stop and derive what it means.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Imports, randomness and reproducibility

The first executable lines are:

```python
import os
import math
import random
random.seed(42)
```

Python's `import` statement gives a program access to functionality defined somewhere else.

Karpathy imports only three modules.

`os` provides tools related to the operating system. Here it will mainly be used to check whether a file exists.

```python
os.path.exists(...)
```

`math` provides mathematical functions such as

$$
\log(x)
$$

and

$$
e^x.
$$

These two functions will become surprisingly important. The exponential appears in the probability distribution produced by the model, while the logarithm appears in the function used to measure prediction error.

Finally, `random` provides pseudorandom numbers.

microGPT uses randomness to initialize the neural network, shuffle the dataset and sample characters during generation.

Then:

```python
random.seed(42)
```

sets the state of Python's pseudorandom number generator.

A computer generally does not produce truly random numbers in ordinary software. It generates a deterministic sequence from an internal state:

$$
s_0
\rightarrow
s_1
\rightarrow
s_2
\rightarrow
s_3
\rightarrow
\cdots.
$$

If two programs begin with the same seed and perform the same random operations in the same order, they generate the same sequence.

The purpose is reproducibility.

Karpathy's comment summarizes it more poetically:

```python
# Let there be order among chaos
```

The chaos is randomness.

The order is the seed.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## The dataset

The next block provides data:

```python
if not os.path.exists('input.txt'):
    import urllib.request
    names_url = 'https://raw.githubusercontent.com/karpathy/makemore/988aa59/names.txt'
    urllib.request.urlretrieve(names_url, 'input.txt')

docs = [line.strip() for line in open('input.txt') if line.strip()]
random.shuffle(docs)
print(f"num docs: {len(docs)}")
```

The condition

```python
if not os.path.exists('input.txt'):
```

can be read almost literally.

If the file `input.txt` does not exist, execute what follows.

Karpathy then imports:

```python
import urllib.request
```

which allows Python to retrieve a file from the Internet.

The URL points to the names dataset used in Karpathy's earlier `makemore` project.

```python
urllib.request.urlretrieve(names_url, 'input.txt')
```

downloads it.

The data looks approximately like this:

```text
emma
olivia
ava
isabella
sophia
charlotte
mia
amelia
...
```

Every line is considered a document.

Calling a name such as `emma` a document may sound excessive, but the abstraction is useful. To the algorithm, a document is simply a sequence of tokens that belongs together.

In a much larger model, a document might instead be a book, a webpage, a source-code file or a conversation.

Then comes:

```python
docs = [line.strip() for line in open('input.txt') if line.strip()]
```

This is a Python list comprehension.

A more verbose version would be:

```python
docs = []

for line in open('input.txt'):
    if line.strip():
        docs.append(line.strip())
```

`line.strip()` removes surrounding whitespace and the newline character.

The condition

```python
if line.strip()
```

removes empty lines.

The result is essentially:

```python
docs = [
    "emma",
    "olivia",
    "ava",
    ...
]
```

Then:

```python
random.shuffle(docs)
```

randomly rearranges the order.

We have reached the first element of machine learning:

$$
\boxed{\text{data}}.
$$

Nothing has learned anything yet.

There is no neural network.

There is no gradient.

There are only examples.

But everything the model eventually learns will have to come from patterns present in these examples.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Tokenization: turning language into integers

The next block is:

```python
uchars = sorted(set(''.join(docs)))
BOS = len(uchars)
vocab_size = len(uchars) + 1
print(f"vocab size: {vocab_size}")
```

A neural network does not directly manipulate the abstract concept of the letter `a`.

It manipulates numbers.

We therefore need a mapping

$$
\text{text}
\longrightarrow
\text{integers}.
$$

The expression

```python
''.join(docs)
```

concatenates all names.

If:

```python
docs = ["emma", "ava"]
```

then:

```python
''.join(docs)
```

produces:

```text
emmaava
```

Next:

```python
set(...)
```

keeps only the distinct characters.

Mathematically, we obtain something like:

$$
{a,b,c,\ldots,z}.
$$

Finally:

```python
sorted(...)
```

places them in a deterministic order.

For this dataset the tokens are essentially the lowercase alphabet.

Their positions become their identifiers:

$$
a\mapsto0,
$$

$$
b\mapsto1,
$$

$$
c\mapsto2,
$$

and so on.

This is a character-level tokenizer.

Modern language models generally use more sophisticated tokenization schemes in which a token may represent a character, part of a word, a complete word or a common sequence of characters.

microGPT deliberately chooses the simplest possible system.

Then:

```python
BOS = len(uchars)
```

introduces a special token.

`BOS` stands for Beginning of Sequence.

With 26 letters,

$$
BOS=26.
$$

Therefore:

```python
vocab_size = len(uchars) + 1
```

gives

$$
V=27.
$$

The vocabulary consists of 26 ordinary characters and one special token.

Consider the name:

```text
emma
```

With the obvious alphabetical encoding:

$$
e\mapsto4,
$$

$$
m\mapsto12,
$$

$$
a\mapsto0.
$$

Training will later transform `emma` into:

$$
[BOS,e,m,m,a,BOS].
$$

Numerically:

$$
[26,4,12,12,0,26].
$$

The same `BOS` token is placed at both ends.

At the beginning, it means that a new sequence is starting.

At the end, it acts as a stop symbol.

The sequence generates the prediction tasks:

$$
BOS\rightarrow e,
$$

$$
e\rightarrow m,
$$

$$
em\rightarrow m,
$$

$$
emm\rightarrow a,
$$

$$
emma\rightarrow BOS.
$$

We have now arrived at the fundamental objective of an autoregressive language model:

$$
P(x_{t+1}\mid x_1,x_2,\ldots,x_t).
$$

Given everything seen so far, what is likely to come next?

A system such as ChatGPT may answer questions, generate code, summarize books or manipulate mathematical expressions.

But underneath all this behaviour lies a primitive repeated operation:

$$
\boxed{\text{predict the next token}}.
$$

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Before the neural network: calculus

One might expect Karpathy to implement the Transformer next.

Instead, he implements calculus.

```python
class Value:
    __slots__ = ('data', 'grad', '_children', '_local_grads')
```

Libraries such as PyTorch normally handle automatic differentiation for us.

We calculate a loss and write something such as:

```python
loss.backward()
```

Then gradients appear.

microGPT implements enough of this machinery from scratch that we can see what `backward()` actually means.

Suppose a model has parameters

$$
\theta_1,\theta_2,\ldots,\theta_P
$$

and produces a loss

$$
L(\theta_1,\ldots,\theta_P).
$$

To improve the model, we want to know how changing each parameter changes the loss.

We therefore need:

$$
\frac{\partial L}{\partial\theta_1},
\frac{\partial L}{\partial\theta_2},
\ldots,
\frac{\partial L}{\partial\theta_P}.
$$

Together, these derivatives form the gradient:

$$
\nabla_\theta L
===============

\begin{bmatrix}
\dfrac{\partial L}{\partial\theta_1}\
\dfrac{\partial L}{\partial\theta_2}\
\vdots\
\dfrac{\partial L}{\partial\theta_P}
\end{bmatrix}.
$$

The difficulty is that a parameter may influence the final loss through hundreds of intermediate calculations.

This is precisely the problem solved by the chain rule.

<hr style="border:none; border-top:1px solid rgba(120,120,120,0.35); margin:40px 0; width:100%;">

## The chain rule

Suppose:

$$
y=f(x)
$$

and:

$$
z=g(y).
$$

Then:

$$
z=g(f(x)).
$$

The chain rule states:

$$
\frac{dz}{dx}
=============

\frac{dz}{dy}
\frac{dy}{dx}.
$$

A neural network is an enormous composition of functions.

If:

$$
x
\rightarrow
a
\rightarrow
b
\rightarrow
c
\rightarrow
L,
$$

then:

$$
\frac{\partial L}{\partial x}
=============================

\frac{\partial L}{\partial c}
\frac{\partial c}{\partial b}
\frac{\partial b}{\partial a}
\frac{\partial a}{\partial x}.
$$

Backpropagation is an efficient way to organize these repeated applications of the chain rule.

The crucial observation is that every operation only needs to know its local derivative.

For addition:

$$
z=x+y,
$$

we have:

$$
\frac{\partial z}{\partial x}=1,
\qquad
\frac{\partial z}{\partial y}=1.
$$

For multiplication:

$$
z=xy,
$$

we have:

$$
\frac{\partial z}{\partial x}=y,
\qquad
\frac{\partial z}{\partial y}=x.
$$

For the logarithm:

$$
z=\log x,
$$

we have:

$$
\frac{dz}{dx}
=============

\frac1x.
$$

For the exponential:

$$
z=e^x,
$$

we have:

$$
\frac{dz}{dx}
=============

e^x.
$$

If the program records these local derivatives as it computes the forward pass, it can later walk backward through the computation and assemble the derivative of the final loss with respect to every parameter.

That is what `Value` does.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## The `Value` class

The constructor is:

```python
def __init__(self, data, children=(), local_grads=()):
    self.data = data
    self.grad = 0
    self._children = children
    self._local_grads = local_grads
```

Each object represents one scalar number.

It stores both the numerical result and enough information to reconstruct how that number was obtained.

### `data`

```python
self.data = data
```

This stores the numerical value.

If:

$$
a=3,
\qquad
b=4,
$$

and:

$$
c=a+b,
$$

then:

$$
c.data=7.
$$

### `grad`

```python
self.grad = 0
```

Later, this will store:

$$
\frac{\partial L}{\partial c}.
$$

It begins at zero because no backward pass has yet occurred.

### `_children`

```python
self._children = children
```

This stores the values from which the current value was computed.

If:

$$
c=a+b,
$$

then `c` remembers `a` and `b`.

### `_local_grads`

```python
self._local_grads = local_grads
```

This records the local derivatives.

For:

$$
c=a+b,
$$

we have:

$$
\frac{\partial c}{\partial a}=1
$$

and:

$$
\frac{\partial c}{\partial b}=1.
$$

The number therefore carries its computational history.

A collection of these histories forms a computation graph.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Addition and multiplication

Addition is implemented as:

```python
def __add__(self, other):
    other = other if isinstance(other, Value) else Value(other)
    return Value(self.data + other.data, (self, other), (1, 1))
```

Python uses the method `__add__` when we write:

```python
a + b
```

The forward calculation is:

$$
z=x+y.
$$

The parents are stored as:

```python
(self, other)
```

and their derivatives are stored as:

```python
(1, 1)
```

because:

$$
\frac{\partial z}{\partial x}=1,
\qquad
\frac{\partial z}{\partial y}=1.
$$

Multiplication is:

```python
def __mul__(self, other):
    other = other if isinstance(other, Value) else Value(other)
    return Value(
        self.data * other.data,
        (self, other),
        (other.data, self.data)
    )
```

For:

$$
z=xy,
$$

the derivatives are:

$$
\frac{\partial z}{\partial x}=y
$$

and:

$$
\frac{\partial z}{\partial y}=x.
$$

That explains:

```python
(other.data, self.data)
```

What appears to be ordinary operator overloading is simultaneously building a graph of elementary calculus.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Powers, logarithms, exponentials and ReLU

The next lines are compact:

```python
def __pow__(self, other):
    return Value(
        self.data**other,
        (self,),
        (other * self.data**(other-1),)
    )
```

This encodes:

$$
\frac{d}{dx}x^n
===============

nx^{n-1}.
$$

Then:

```python
def log(self):
    return Value(
        math.log(self.data),
        (self,),
        (1/self.data,)
    )
```

encodes:

$$
\frac{d}{dx}\log x
==================

\frac1x.
$$

The exponential:

```python
def exp(self):
    return Value(
        math.exp(self.data),
        (self,),
        (math.exp(self.data),)
    )
```

uses:

$$
\frac{d}{dx}e^x=e^x.
$$

Then comes ReLU:

```python
def relu(self):
    return Value(
        max(0, self.data),
        (self,),
        (float(self.data > 0),)
    )
```

The Rectified Linear Unit is:

$$
\operatorname{ReLU}(x)
======================

\max(0,x).
$$

Its derivative away from zero is:

$$
\operatorname{ReLU}'(x)
=======================

\begin{cases}
1,&x>0,\
0,&x<0.
\end{cases}
$$

At zero the mathematical derivative is not uniquely defined.

This implementation chooses zero.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Building subtraction and division from simpler operations

Karpathy then writes:

```python
def __neg__(self): return self * -1
def __radd__(self, other): return self + other
def __sub__(self, other): return self + (-other)
def __rsub__(self, other): return other + (-self)
def __rmul__(self, other): return self * other
def __truediv__(self, other): return self * other**-1
def __rtruediv__(self, other): return other * self**-1
```

Subtraction is expressed as:

$$
x-y
===

x+(-y).
$$

Division becomes:

$$
\frac{x}{y}
===========

xy^{-1}.
$$

This illustrates a general idea that will reappear throughout the program.

We do not need to implement the derivative of every large expression directly.

If a complicated function can be assembled from simple differentiable functions, its derivative can be assembled from their derivatives using the chain rule.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Backpropagation

Now comes:

```python
def backward(self):
    topo = []
    visited = set()

    def build_topo(v):
        if v not in visited:
            visited.add(v)
            for child in v._children:
                build_topo(child)
            topo.append(v)

    build_topo(self)
    self.grad = 1

    for v in reversed(topo):
        for child, local_grad in zip(v._children, v._local_grads):
            child.grad += local_grad * v.grad
```

Suppose:

```python
a = Value(2)
b = Value(3)
c = a * b
d = c + a
```

Then:

$$
c=ab
$$

and:

$$
d=ab+a.
$$

A computation graph has been created.

Before propagating gradients, the nodes must be visited in the correct order.

`build_topo` produces a topological ordering of the graph.

Then:

```python
self.grad = 1
```

sets the derivative of the final output with respect to itself.

If `self` is the loss $L$:

$$
\frac{\partial L}{\partial L}=1.
$$

This is where backpropagation begins.

Finally:

```python
child.grad += local_grad * v.grad
```

is the chain rule.

Here:

```python
v.grad
```

represents:

$$
\frac{\partial L}{\partial v},
$$

while:

```python
local_grad
```

represents:

$$
\frac{\partial v}{\partial \text{child}}.
$$

Their product gives:

$$
\frac{\partial L}{\partial \text{child}}
========================================

\frac{\partial L}{\partial v}
\frac{\partial v}{\partial \text{child}}.
$$

The use of `+=` rather than `=` is important.

A variable may affect the final loss through several different paths.

If:

$$
L=L(a(b),c(b)),
$$

then:

$$
\frac{\partial L}{\partial b}
=============================

\frac{\partial L}{\partial a}
\frac{\partial a}{\partial b}
+
\frac{\partial L}{\partial c}
\frac{\partial c}{\partial b}.
$$

Those contributions must be added.

This small method is therefore sufficient to differentiate the much larger neural network that comes next.

When we later encounter:

```python
loss.backward()
```

this is what is happening.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Initializing the model

Now Karpathy defines the dimensions of the GPT:

```python
n_layer = 1
n_embd = 16
block_size = 16
n_head = 4
head_dim = n_embd // n_head
```

`n_layer = 1` means the neural network contains one Transformer block.

`n_embd = 16` means the internal representation of a token contains 16 coordinates:

$$
x\in\mathbb{R}^{16}.
$$

`block_size = 16` means that the model processes at most sixteen positions.

`n_head = 4` means the attention mechanism contains four heads.

Therefore:

$$
d_h
===

# \frac{16}{4}

4.

$$

Each attention head operates on four-dimensional vectors.

The architecture is microscopic compared with modern models, but the essential mechanism is the same.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Random matrices

The next line builds matrices:

```python
matrix = lambda nout, nin, std=0.08: [
    [Value(random.gauss(0, std)) for _ in range(nin)]
    for _ in range(nout)
]
```

For example:

```python
matrix(3, 2)
```

creates:

$$
W=
\begin{bmatrix}
w_{11}&w_{12}\
w_{21}&w_{22}\
w_{31}&w_{32}
\end{bmatrix}.
$$

Each element is generated using:

```python
random.gauss(0, std)
```

so:

$$
w_{ij}
\sim
\mathcal N(0,0.08^2).
$$

The model begins with random parameters.

This is a crucial point.

The architecture exists.

Knowledge does not.

Learning will consist of transforming these initially random numbers into useful numbers.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Token and position embeddings

Karpathy creates:

```python
state_dict = {
    'wte': matrix(vocab_size, n_embd),
    'wpe': matrix(block_size, n_embd),
    'lm_head': matrix(vocab_size, n_embd)
}
```

The first matrix is:

$$
W_E
\in
\mathbb{R}^{27\times16}.
$$

It contains the token embeddings.

Each token receives a learned vector:

$$
e_i
\in
\mathbb{R}^{16}.
$$

Instead of treating `a` merely as integer zero, the model can represent it as:

$$
e_a
===

[
0.14,
-0.31,
0.08,
\ldots
].
$$

These coordinates are not manually assigned meanings.

They are learned.

The second matrix:

$$
W_P
\in
\mathbb{R}^{16\times16}
$$

contains positional embeddings.

Why are these necessary?

Because order matters.

The sequences:

```text
abc
```

and:

```text
cba
```

contain the same three token identities but mean different things.

Each position therefore receives a vector:

$$
p_t.
$$

The model combines token identity and position through:

$$
x_t=e_{x_t}+p_t.
$$

The third matrix is the language-model head:

$$
W_{\mathrm{LM}}
\in
\mathbb{R}^{27\times16}.
$$

At the end of the model it will transform the internal sixteen-dimensional representation into 27 scores, one for every possible next token.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Attention parameters

Inside each layer:

```python
state_dict[f'layer{i}.attn_wq'] = matrix(n_embd, n_embd)
state_dict[f'layer{i}.attn_wk'] = matrix(n_embd, n_embd)
state_dict[f'layer{i}.attn_wv'] = matrix(n_embd, n_embd)
state_dict[f'layer{i}.attn_wo'] = matrix(n_embd, n_embd)
```

These matrices are:

$$
W_Q,
\quad
W_K,
\quad
W_V,
\quad
W_O.
$$

Each belongs to:

$$
\mathbb{R}^{16\times16}.
$$

They will create queries, keys and values:

$$
q=W_Qx,
$$

$$
k=W_Kx,
$$

$$
v=W_Vx.
$$

These are the central objects in Transformer attention.

We will return to their meaning shortly.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## The MLP parameters

The model also creates:

```python
state_dict[f'layer{i}.mlp_fc1'] = matrix(4 * n_embd, n_embd)
state_dict[f'layer{i}.mlp_fc2'] = matrix(n_embd, 4 * n_embd)
```

Since:

$$
n_{\mathrm{embd}}=16,
$$

the first transformation is:

$$
\mathbb{R}^{16}
\rightarrow
\mathbb{R}^{64}.
$$

The second returns:

$$
\mathbb{R}^{64}
\rightarrow
\mathbb{R}^{16}.
$$

This is the feed-forward neural network inside the Transformer.

Attention and the MLP play different roles.

Attention allows positions to exchange information.

The MLP transforms the representation at each position.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Counting the parameters

The next line flattens all matrices:

```python
params = [
    p
    for mat in state_dict.values()
    for row in mat
    for p in row
]
```

We can represent all model parameters as one vector:

$$
\theta
======

(\theta_1,\theta_2,\ldots,\theta_P).
$$

For this model:

Token embeddings:

$$
27\times16=432.
$$

Position embeddings:

$$
16\times16=256.
$$

Language-model head:

$$
27\times16=432.
$$

Attention:

$$
4(16\times16)=1024.
$$

MLP:

$$
64\times16+16\times64
=====================

2048.

$$

Therefore:

$$
P
=

# 432+256+432+1024+2048

4192.

$$

microGPT has 4,192 trainable scalar parameters.

Before training they are random.

After training they contain the model's learned statistical structure.

No programmer chooses their final values manually.

This distinction will eventually bring us back to Karpathy's tweet.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Linear transformations

The model architecture begins with:

```python
def linear(x, w):
    return [
        sum(wi * xi for wi, xi in zip(wo, x))
        for wo in w
    ]
```

Mathematically this is:

$$
y=Wx.
$$

Suppose:

$$
x=
\begin{bmatrix}
x_1\
x_2
\end{bmatrix}
$$

and:

$$
W=
\begin{bmatrix}
w_{11}&w_{12}\
w_{21}&w_{22}\
w_{31}&w_{32}
\end{bmatrix}.
$$

Then:

$$
Wx=
\begin{bmatrix}
w_{11}x_1+w_{12}x_2\
w_{21}x_1+w_{22}x_2\
w_{31}x_1+w_{32}x_2
\end{bmatrix}.
$$

The function:

```python
zip(wo, x)
```

pairs each coordinate with its corresponding matrix coefficient.

Then:

```python
wi * xi
```

computes the products.

Finally:

```python
sum(...)
```

produces their dot product.

One row of the matrix gives one output coordinate.

The outer list comprehension repeats this for every row.

There is no bias term in microGPT, so the transformation is:

$$
y=Wx
$$

rather than:

$$
y=Wx+b.
$$

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Softmax

Next:

```python
def softmax(logits):
    max_val = max(val.data for val in logits)
    exps = [(val - max_val).exp() for val in logits]
    total = sum(exps)
    return [e / total for e in exps]
```

The model eventually produces scores:

$$
z_1,z_2,\ldots,z_V.
$$

These are logits.

They are not probabilities.

Softmax transforms them into:

$$
p_i
===

\frac{e^{z_i}}
{\sum_{j=1}^{V} e^{z_j}}.
$$

Because:

$$
e^{z_i}>0,
$$

every probability is positive.

Furthermore:

$$
\sum_{i=1}^{V}p_i=1.
$$

Suppose:

$$
z=[2,1,0].
$$

Then:

$$
e^2\approx7.389,
$$

$$
e^1\approx2.718,
$$

$$
e^0=1.
$$

Their sum is approximately:

$$
11.107.
$$

So:

$$
p_1\approx0.665,
$$

$$
p_2\approx0.245,
$$

$$
p_3\approx0.090.
$$

Softmax converts arbitrary relative scores into a probability distribution.

The function contains another detail:

```python
max_val = max(val.data for val in logits)
```

and:

```python
(val - max_val).exp()
```

Why subtract the maximum?

Because softmax satisfies:

$$
\frac{e^{z_i-c}}
{\sum_j e^{z_j-c}}
==================

\frac{e^{z_i}}
{\sum_j e^{z_j}}.
$$

Subtracting the same number from all logits leaves the probabilities unchanged.

Choosing:

$$
c=\max_jz_j
$$

makes the largest exponent equal to:

$$
e^0=1.
$$

This prevents extremely large exponentials and improves numerical stability.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## RMSNorm

Next:

```python
def rmsnorm(x):
    ms = sum(xi * xi for xi in x) / len(x)
    scale = (ms + 1e-5) ** -0.5
    return [xi * scale for xi in x]
```

For:

$$
x=(x_1,\ldots,x_d),
$$

the mean square is:

$$
\operatorname{MS}(x)
====================

\frac1d
\sum_{i=1}^d x_i^2.
$$

Then:

$$
\operatorname{RMSNorm}(x)
=========================

\frac{x}
{\sqrt{
\frac1d\sum_i x_i^2+\varepsilon
}}.
$$

Here:

$$
\varepsilon=10^{-5}.
$$

Suppose:

$$
x=[2,-1,2].
$$

Then:

$$
\operatorname{MS}(x)
====================

# \frac{4+1+4}{3}

3.

$$

Ignoring the tiny $\varepsilon$:

$$
\operatorname{RMSNorm}(x)
=========================

\frac1{\sqrt3}[2,-1,2].
$$

Normalization keeps the magnitude of internal representations under control.

Without mechanisms of this kind, activations may become excessively large or small as they pass through the network.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Entering the GPT

The model itself begins:

```python
def gpt(token_id, pos_id, keys, values):
    tok_emb = state_dict['wte'][token_id]
    pos_emb = state_dict['wpe'][pos_id]
    x = [t + p for t, p in zip(tok_emb, pos_emb)]
    x = rmsnorm(x)
```

The current token selects its embedding:

$$
e_t=W_E[token_t].
$$

The current position selects:

$$
p_t=W_P[t].
$$

Then:

$$
x_t=e_t+p_t.
$$

One vector tells the model what token it is processing.

The other tells it where that token occurs.

Their sum is normalized and sent through the Transformer.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Residual connections

Inside the Transformer:

```python
for li in range(n_layer):
    x_residual = x
    x = rmsnorm(x)
```

The variable:

```python
x_residual
```

stores the input before the transformation.

Later, the output will be added back to it.

If a block computes some function:

$$
F(x),
$$

a residual connection produces:

$$
y=x+F(x).
$$

Why?

One intuition is that the network no longer needs every block to construct a completely new representation.

It can instead learn modifications to an existing representation.

If a transformation is unnecessary, the network can make:

$$
F(x)\approx0
$$

and preserve:

$$
y\approx x.
$$

Residual connections also create shorter gradient paths during backpropagation and are a central feature of modern deep neural networks.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Queries, keys and values

Now:

```python
q = linear(x, state_dict[f'layer{li}.attn_wq'])
k = linear(x, state_dict[f'layer{li}.attn_wk'])
v = linear(x, state_dict[f'layer{li}.attn_wv'])
```

Mathematically:

$$
q_t=W_Qx_t,
$$

$$
k_t=W_Kx_t,
$$

$$
v_t=W_Vx_t.
$$

Why three representations of the same token?

A useful analogy is an information-retrieval system.

The query describes what the current position is looking for.

The key describes what a position offers for matching.

The value contains the information that will be retrieved if that position receives attention.

Suppose the current position is trying to decide which earlier characters matter for predicting the next one.

Its query will be compared with the keys of previous positions.

The better the match, the more of that position's value will contribute to the current representation.

That is attention.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## The key-value cache

The next lines are:

```python
keys[li].append(k)
values[li].append(v)
```

Every new key and value is stored.

At position $t$, the lists therefore contain:

$$
k_1,k_2,\ldots,k_t
$$

and:

$$
v_1,v_2,\ldots,v_t.
$$

This has an important consequence.

The current token can only attend to positions that have already been processed.

It cannot see the future.

Mathematically:

$$
\alpha_{t,j}=0
\qquad
\text{for }j>t.
$$

Many Transformer implementations enforce this using a causal attention mask.

microGPT achieves causality naturally because future keys and values simply do not exist yet.

This is also a miniature implementation of what is commonly called the KV cache during autoregressive generation.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Multi-head attention

The code then creates:

```python
x_attn = []

for h in range(n_head):
    hs = h * head_dim
```

There are four heads.

Since:

$$
d=16
$$

and:

$$
H=4,
$$

each head receives:

$$
d_h=4
$$

coordinates.

For head $h$:

```python
q_h = q[hs:hs+head_dim]
```

extracts the appropriate four coordinates of the query.

Likewise:

```python
k_h = [ki[hs:hs+head_dim] for ki in keys[li]]
v_h = [vi[hs:hs+head_dim] for vi in values[li]]
```

extract the corresponding parts of every key and value.

Instead of one sixteen-dimensional attention mechanism, the model therefore has four four-dimensional mechanisms operating in parallel.

The intuition is that different heads can learn different relations.

One might become useful for local character patterns.

Another might capture dependencies across larger distances.

No such role is explicitly programmed.

If useful specializations appear, they are learned.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## The attention score

Now we reach one of the most important lines in the entire program:

```python
attn_logits = [
    sum(
        q_h[j] * k_h[t][j]
        for j in range(head_dim)
    ) / head_dim**0.5
    for t in range(len(k_h))
]
```

For a query $q$ and a key $k_t$, this computes:

$$
s_t
===

\frac{q\cdot k_t}
{\sqrt{d_h}}.
$$

The dot product is:

$$
q\cdot k_t
==========

\sum_{j=1}^{d_h}q_jk_{t,j}.
$$

If the vectors point in compatible directions, their dot product tends to be large.

The model therefore interprets a large dot product as a strong match between query and key.

But why divide by:

$$
\sqrt{d_h}?
$$

Suppose the coordinates of $q$ and $k$ are independent, approximately centered, and have variance around one.

Then:

$$
q\cdot k
========

\sum_{j=1}^{d_h}q_jk_j.
$$

The variance of a sum of roughly independent terms grows approximately proportionally to the number of terms:

$$
\operatorname{Var}(q\cdot k)
\approx
d_h.
$$

So the standard deviation grows like:

$$
\sqrt{d_h}.
$$

Dividing by $\sqrt{d_h}$ keeps the scale of attention logits approximately stable as the head dimension changes.

Otherwise, larger dimensions would tend to produce larger logits.

Softmax would then become extremely concentrated, making optimization more difficult.

This is the scaled dot-product attention introduced by the Transformer architecture.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## A numerical attention example

Suppose one attention head has:

$$
q=[1,0].
$$

Two previous keys are:

$$
k_1=[1,0]
$$

and:

$$
k_2=[0,1].
$$

With:

$$
d_h=2,
$$

the scores are:

$$
s_1
===

# \frac{1\cdot1+0\cdot0}{\sqrt2}

\frac1{\sqrt2}
\approx0.707,
$$

and:

$$
s_2
===

# \frac{1\cdot0+0\cdot1}{\sqrt2}

0.

$$

Softmax produces:

$$
\alpha_1
========

\frac{e^{0.707}}
{e^{0.707}+e^0}
\approx0.670,
$$

and:

$$
\alpha_2
\approx0.330.
$$

Suppose the values are:

$$
v_1=[2,1]
$$

and:

$$
v_2=[0,3].
$$

The attention output becomes:

$$
o
=

0.670v_1+0.330v_2.
$$

Therefore:

$$
o
=

0.670[2,1]+0.330[0,3].
$$

So:

$$
o
=

[1.34,1.66].
$$

The output is not copied from a single previous position.

It is a weighted mixture of information from several positions.

This is the central operation behind attention.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Attention weights

In the actual code:

```python
attn_weights = softmax(attn_logits)
```

transforms the raw compatibility scores into probabilities.

If the available positions are:

$$
1,\ldots,t,
$$

then:

$$
\alpha_{t,j}
============

\frac{
\exp(s_{t,j})
}{
\sum_{\ell=1}^{t}\exp(s_{t,\ell})
}.
$$

Therefore:

$$
\sum_{j=1}^t\alpha_{t,j}=1.
$$

The weights can be interpreted as the fraction of attention allocated to each previous position.

The head output is then:

```python
head_out = [
    sum(
        attn_weights[t] * v_h[t][j]
        for t in range(len(v_h))
    )
    for j in range(head_dim)
]
```

Mathematically:

$$
o_t
===

\sum_{j=1}^{t}
\alpha_{t,j}v_j.
$$

That is the complete attention operation.

In matrix notation, the familiar formula is:

$$
\operatorname{Attention}(Q,K,V)
===============================

\operatorname{softmax}
\left(
\frac{QK^\top}{\sqrt{d_h}}
\right)V.
$$

microGPT exposes every component of this equation directly in Python.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Combining the attention heads

After each head is computed:

```python
x_attn.extend(head_out)
```

concatenates their outputs.

If each head produces:

$$
o_t^{(h)}
\in
\mathbb{R}^{4},
$$

then four heads give:

$$
[
o_t^{(1)};
o_t^{(2)};
o_t^{(3)};
o_t^{(4)}
]
\in
\mathbb{R}^{16}.
$$

This combined vector is then projected:

```python
x = linear(x_attn, state_dict[f'layer{li}.attn_wo'])
```

or:

$$
x=W_Ox_{\text{attn}}.
$$

Then the residual connection is applied:

```python
x = [a + b for a, b in zip(x, x_residual)]
```

so:

$$
x_{\text{new}}
==============

x_{\text{residual}}
+
W_Ox_{\text{attn}}.
$$

The attention block is complete.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## The MLP block

Next:

```python
x_residual = x
x = rmsnorm(x)
x = linear(x, state_dict[f'layer{li}.mlp_fc1'])
x = [xi.relu() for xi in x]
x = linear(x, state_dict[f'layer{li}.mlp_fc2'])
x = [a + b for a, b in zip(x, x_residual)]
```

The first linear transformation expands:

$$
\mathbb{R}^{16}
\rightarrow
\mathbb{R}^{64}.
$$

Mathematically:

$$
h=W_1x.
$$

Then:

$$
r=\operatorname{ReLU}(h).
$$

Finally:

$$
f=W_2r,
$$

with:

$$
W_2:
\mathbb{R}^{64}
\rightarrow
\mathbb{R}^{16}.
$$

The residual connection produces:

$$
x_{\text{out}}
==============

x_{\text{in}}+f.
$$

Why include a nonlinear activation such as ReLU?

Without nonlinearities, multiple linear layers collapse into a single linear transformation.

If:

$$
y=W_2(W_1x),
$$

then:

$$
y=(W_2W_1)x.
$$

No matter how many purely linear transformations we stack, the entire system remains linear.

ReLU breaks this equivalence and allows the network to represent much richer functions.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## The language-model head

After the Transformer layer:

```python
logits = linear(x, state_dict['lm_head'])
return logits
```

The final representation:

$$
x\in\mathbb{R}^{16}
$$

is transformed into:

$$
z=W_{\mathrm{LM}}x.
$$

Because:

$$
W_{\mathrm{LM}}
\in
\mathbb{R}^{27\times16},
$$

we obtain:

$$
z\in\mathbb{R}^{27}.
$$

There is one logit for every possible next token.

Softmax will later convert these logits into:

$$
P(token=i\mid\text{context}).
$$

The GPT function is complete.

It receives the current token and previous context.

It returns scores for what should come next.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Adam

Now we reach the optimizer:

```python
learning_rate, beta1, beta2, eps_adam = 0.01, 0.85, 0.99, 1e-8
m = [0.0] * len(params)
v = [0.0] * len(params)
```

There is a technical subtlety here.

microGPT does not use vanilla gradient descent.

It uses Adam.

The principle is still gradient-based optimization, but Adam modifies the raw gradient using information accumulated over time.

For each parameter $\theta_i$, let:

$$
g_t
===

\frac{\partial L_t}{\partial\theta_i}.
$$

Adam maintains a first-moment estimate:

$$
m_t
===

\beta_1m_{t-1}
+
(1-\beta_1)g_t.
$$

This behaves like an exponentially weighted moving average of recent gradients.

It also maintains:

$$
v_t
===

\beta_2v_{t-1}
+
(1-\beta_2)g_t^2.
$$

This tracks the squared magnitude of recent gradients.

The two Python lists:

```python
m
```

and:

```python
v
```

store these values for every parameter.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## The training loop

Training begins:

```python
num_steps = 1000

for step in range(num_steps):
```

The model will undergo one thousand parameter updates.

At every step:

```python
doc = docs[step % len(docs)]
```

chooses a document.

The modulo operator `%` ensures that if the number of steps becomes larger than the dataset, indexing wraps back to the beginning.

Then:

```python
tokens = [BOS] + [uchars.index(ch) for ch in doc] + [BOS]
```

converts the name into token identifiers and surrounds it with `BOS`.

For:

```text
emma
```

we again obtain:

$$
[BOS,e,m,m,a,BOS].
$$

Then:

```python
n = min(block_size, len(tokens) - 1)
```

limits the number of prediction steps to the maximum context size.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## The forward pass

The model initializes its attention memory:

```python
keys, values = [[] for _ in range(n_layer)], [[] for _ in range(n_layer)]
losses = []
```

Then:

```python
for pos_id in range(n):
```

processes the sequence one position at a time.

At each step:

```python
token_id, target_id = tokens[pos_id], tokens[pos_id + 1]
```

identifies the current input and the correct next token.

For the beginning of `emma`:

$$
input=BOS,
\qquad
target=e.
$$

Then:

```python
logits = gpt(token_id, pos_id, keys, values)
```

runs the model.

The logits become probabilities:

```python
probs = softmax(logits)
```

and now comes the loss:

```python
loss_t = -probs[target_id].log()
```

Mathematically:

$$
L_t
===

-\log p(y_t).
$$

This is the negative log-likelihood of the correct token.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Why the logarithm?

Suppose the model assigns the correct next token probability:

$$
p=0.9.
$$

Then:

$$
-\log(0.9)
\approx0.105.
$$

This is a small loss.

If:

$$
p=0.5,
$$

then:

$$
-\log(0.5)
\approx0.693.
$$

If:

$$
p=0.01,
$$

then:

$$
-\log(0.01)
\approx4.605.
$$

The model is heavily penalized when it assigns very little probability to the correct answer.

This function also has a probabilistic interpretation.

For a sequence:

$$
x_1,\ldots,x_n,
$$

an autoregressive model assigns probability:

$$
P(x_1,\ldots,x_n)
=================

\prod_{t=1}^n
P(x_t\mid x_1,\ldots,x_{t-1}).
$$

Maximizing this product is equivalent to maximizing its logarithm:

$$
\log P(x_1,\ldots,x_n)
======================

\sum_{t=1}^n
\log P(x_t\mid x_{<t}).
$$

Minimizing negative log-likelihood therefore means maximizing the probability the model assigns to the training data.

The average loss is:

```python
loss = (1 / n) * sum(losses)
```

or:

$$
L
=

-\frac1n
\sum_{t=1}^n
\log
P_\theta(x_{t+1}\mid x_{\leq t}).
$$

At this moment, the entire model becomes one giant scalar-valued function:

$$
L=L(\theta).
$$

This is the quantity we want to minimize.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## The gradient finally appears

The next line is:

```python
loss.backward()
```

We have already implemented everything necessary to understand it.

`loss` sits at the end of a computation graph containing:

* embeddings;
* additions;
* RMSNorm;
* matrix-vector products;
* queries;
* keys;
* values;
* dot products;
* exponentials;
* softmax;
* attention;
* ReLU;
* another softmax;
* a logarithm.

The backward pass traverses this graph in reverse.

For every trainable parameter:

$$
\theta_i,
$$

it computes:

$$
\frac{\partial L}{\partial\theta_i}.
$$

The result is:

$$
\nabla_\theta L.
$$

The 4,192 random numbers from the beginning are no longer just numbers.

Each one now has a direction telling us how changing it would affect the prediction error.

We have reached the mathematical object at the center of Karpathy's 2017 sentence.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## From gradient descent to Adam

The learning rate is first reduced linearly:

```python
lr_t = learning_rate * (1 - step / num_steps)
```

so:

$$
\eta_t
======

\eta_0
\left(
1-\frac{t}{T}
\right).
$$

Training begins with larger updates and gradually reduces their magnitude.

Then for every parameter:

```python
m[i] = beta1 * m[i] + (1 - beta1) * p.grad
```

implements:

$$
m_t
===

\beta_1m_{t-1}
+
(1-\beta_1)g_t.
$$

Next:

```python
v[i] = beta2 * v[i] + (1 - beta2) * p.grad ** 2
```

implements:

$$
v_t
===

\beta_2v_{t-1}
+
(1-\beta_2)g_t^2.
$$

Because these moving averages begin at zero, they are initially biased toward zero.

Adam corrects this:

```python
m_hat = m[i] / (1 - beta1 ** (step + 1))
v_hat = v[i] / (1 - beta2 ** (step + 1))
```

or:

$$
\hat m_t
========

\frac{m_t}
{1-\beta_1^t},
$$

$$
\hat v_t
========

\frac{v_t}
{1-\beta_2^t}.
$$

Finally:

```python
p.data -= lr_t * m_hat / (v_hat ** 0.5 + eps_adam)
```

implements:

$$
\theta_t
\leftarrow
\theta_t
--------

\eta_t
\frac{\hat m_t}
{\sqrt{\hat v_t}+\varepsilon}.
$$

The parameter has changed.

Not because a programmer knew what value it should contain.

Not because the program contains an `if` statement describing the linguistic rule to learn.

It changed because calculus told the optimizer how that number contributed to prediction error.

Then:

```python
p.grad = 0
```

resets the gradient before the next training step.

Otherwise gradients from different iterations would accumulate.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## What has the model actually learned?

At initialization:

$$
\theta_0
\sim
\text{random}.
$$

After one update:

$$
\theta_1
========

\operatorname{Adam}
(
\theta_0,
\nabla L(\theta_0)
).
$$

Then:

$$
\theta_2
========

\operatorname{Adam}
(
\theta_1,
\nabla L(\theta_1)
).
$$

And so on.

After many steps:

$$
\theta_0
\rightarrow
\theta_1
\rightarrow
\theta_2
\rightarrow
\cdots
\rightarrow
\theta_T.
$$

The code of the architecture has not changed.

What has changed are the parameters.

The token embeddings are different.

The position embeddings are different.

The query matrices are different.

The key matrices are different.

The value matrices are different.

The MLP is different.

The language-model head is different.

The program has moved from one point in a 4,192-dimensional parameter space to another.

Training is a trajectory through this space.

Conceptually, we are trying to find:

$$
\theta^\star
============

\arg\min_\theta L(\theta).
$$

In practice, deep learning does not generally guarantee that we find a unique global minimum.

But optimization searches for parameter values that make the model perform well.

This collection of learned numbers is where much of the model's behaviour lives.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Inference

After training comes generation:

```python
temperature = 0.5
```

Then:

```python
for sample_idx in range(20):
```

generates twenty new names.

For each sample:

```python
keys, values = [[] for _ in range(n_layer)], [[] for _ in range(n_layer)]
token_id = BOS
sample = []
```

The attention memory is empty.

Generation begins with `BOS`.

Then:

```python
for pos_id in range(block_size):
```

produces one token at a time.

The model calculates:

```python
logits = gpt(token_id, pos_id, keys, values)
```

and then:

```python
probs = softmax([l / temperature for l in logits])
```

Here temperature modifies the logits.

If the original logits are:

$$
z_i,
$$

temperature $\tau$ gives:

$$
P_i
===

\frac{
e^{z_i/\tau}
}{
\sum_j e^{z_j/\tau}
}.
$$

If:

$$
0<\tau<1,
$$

differences between logits become larger.

The distribution becomes sharper.

High-probability tokens become more dominant.

At:

$$
\tau=1,
$$

the original softmax distribution is preserved.

If temperature were greater than one, the distribution would become flatter and sampling more random.

microGPT uses:

$$
\tau=0.5.
$$

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Sampling instead of choosing the maximum

The next line is:

```python
token_id = random.choices(
    range(vocab_size),
    weights=[p.data for p in probs]
)[0]
```

The model does not necessarily choose:

$$
\arg\max_iP_i.
$$

Instead, it samples according to the probability distribution.

Suppose:

$$
P(a)=0.6,
$$

$$
P(b)=0.3,
$$

$$
P(c)=0.1.
$$

Then `a` is most likely, but `b` and `c` remain possible.

This randomness is why repeated generations can produce different results.

The new token then becomes the input to the next iteration.

Generation is autoregressive:

$$
x_1
\sim
P(x_1\mid BOS),
$$

$$
x_2
\sim
P(x_2\mid x_1),
$$

$$
x_3
\sim
P(x_3\mid x_1,x_2),
$$

and so on.

When:

```python
if token_id == BOS:
    break
```

the model decides that the sequence has ended.

Otherwise:

```python
sample.append(uchars[token_id])
```

converts the integer back into a character.

Finally:

```python
print(f"sample {sample_idx+1:2d}: {''.join(sample)}")
```

prints the generated name.

The model is now producing sequences that resemble its training data without simply being instructed which sequence to output.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## From microGPT to generative AI

microGPT generates names.

ChatGPT generates paragraphs.

Claude generates code.

The scale is radically different, but the central probabilistic structure is recognizable.

A language model learns:

$$
P_\theta(x_{t+1}\mid x_1,\ldots,x_t).
$$

Generation repeatedly samples from this conditional distribution.

The full probability of a sequence can be decomposed as:

$$
P_\theta(x_1,\ldots,x_n)
========================

\prod_{t=1}^{n}
P_\theta(x_t\mid x_1,\ldots,x_{t-1}).
$$

This simple factorization is extraordinarily powerful.

A model trained over enormous corpora encounters natural language, mathematics, source code, conversations, documentation, reasoning traces and many other kinds of structured sequences.

To become good at predicting what comes next, it must learn regularities in those sequences.

For source code, those regularities include syntax, variable relationships, common algorithms, APIs, programming patterns and structural dependencies.

Prediction therefore becomes much richer than guessing a character.

A sufficiently capable predictor has to construct internal representations of the structures generating the data.

This does not mean that next-token prediction explains every aspect of intelligence.

It does explain why the apparently modest objective should not be dismissed as trivial.

Predicting the continuation of a complex world requires learning something about the structure of that world.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## So does gradient descent really write code?

We can now return to Karpathy's tweet.

There are actually two different senses in which modern AI and programming intersect.

The first is obvious today.

A trained language model can output source code:

```python
def binary_search(arr, target):
    ...
```

But that is not the most interesting interpretation of the 2017 statement.

Karpathy was pointing toward a deeper transformation in software.

Traditional software might be represented as:

$$
\text{human-written rules}
+
\text{data}
\rightarrow
\text{outputs}.
$$

A programmer explicitly specifies the rules.

For example:

```python
if age < 18:
    category = "minor"
else:
    category = "adult"
```

The behaviour is visible in the source code.

Machine learning changes the arrangement.

We provide:

$$
\text{architecture}
+
\text{data}
+
\text{objective}.
$$

Optimization then discovers parameters:

$$
\theta^\star.
$$

The resulting system behaves according to:

$$
f_{\theta^\star}(x).
$$

No human writes each learned rule explicitly.

In microGPT, Karpathy chooses the architecture.

He chooses the tokenizer.

He chooses RMSNorm.

He chooses attention.

He chooses ReLU.

He chooses the loss.

He chooses Adam.

But he does not choose the final 4,192 parameter values.

The optimization process does.

Nobody writes:

```text
after this combination of characters,
increase the probability of "a" by exactly this amount
```

Nobody manually decides what every coordinate of every embedding should represent.

Nobody fills the query and key matrices with linguistic rules.

Those values emerge from repeated optimization.

In that sense, the source code written by the programmer is no longer the complete specification of the final behaviour.

It is partly a program that creates another program.

Karpathy later described this broader idea as Software 2.0.

The distinction is useful.

In Software 1.0, humans write the program.

In Software 2.0, humans increasingly write the architecture, the objective and the process by which the program's parameters are discovered.

The resulting behaviour is encoded partly in weights that no human explicitly authored.

That is the sense in which gradient descent writes code.

Not Python code.

Not JavaScript.

Not assembly instructions.

It writes numbers.

But those numbers determine behaviour.

And behaviour is what software ultimately is.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## A useful correction to the title

There is one technical correction worth making.

The title says gradient descent.

microGPT uses Adam.

Adam is not the vanilla update:

$$
\theta_{t+1}
============

## \theta_t

\eta\nabla L(\theta_t).
$$

Its update contains moving averages and adaptive scaling:

$$
\theta_t
\leftarrow
\theta_t
--------

\eta_t
\frac{\hat m_t}
{\sqrt{\hat v_t}+\varepsilon}.
$$

Still, the central information driving the update is the gradient:

$$
\nabla_\theta L.
$$

So "gradient descent" in the title should be understood in the broader family of gradient-based optimization methods.

The distinction matters mathematically.

It does not change the underlying idea.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## What the 200 lines leave out

Karpathy's statement that everything else is efficiency should also be interpreted carefully.

A frontier language model is not obtained merely by changing:

```python
n_embd = 16
```

to a very large number.

Real systems require enormous amounts of additional engineering.

They use optimized tensor libraries.

They run on GPUs and specialized accelerators.

Training is distributed across many devices.

Data pipelines become major systems of their own.

Numerical precision must be managed carefully.

Architectures contain additional refinements.

Models may undergo several stages after pretraining.

Serving them efficiently requires another layer of infrastructure.

Modern reasoning systems may also use tools, retrieval, external environments and agentic loops.

So microGPT is not a miniature production system.

It is a miniature algorithmic skeleton.

That is precisely why it is useful.

It allows us to separate the conceptual mechanism from the industrial machinery required to run it at enormous scale.

<hr style="border:none; border-top:2px solid rgba(120,120,120,0.7); margin:50px 0; width:100%;">

## Conclusion

In 2017, the claim that gradient descent could write code better than a programmer sounded provocative.

Today, machines writing competent source code is no longer particularly surprising.

The stranger question is how we got from:

$$
\theta_{t+1}
============

## \theta_t

\eta\nabla_\theta L(\theta_t)
$$

to machines capable of producing it.

microGPT gives us a remarkably clean path.

Start with data.

Turn text into tokens.

Represent those tokens with vectors.

Use attention to move information across the sequence.

Transform those representations with neural networks.

Produce probabilities for what comes next.

Measure prediction error.

Use the chain rule to calculate how thousands of parameters contributed to that error.

Modify the parameters.

Repeat.

Nothing in an individual operation looks intelligent.

A matrix multiplication does not understand language.

An exponential does not know what a name is.

A derivative does not know Python.

A softmax has never solved a LeetCode problem.

And yet their composition, combined with data and optimization, produces behaviour that nobody explicitly programmed line by line.

Karpathy wrote the two hundred lines.

He did not write the final model contained in their parameters.

The source code specifies how the machine can learn.

The data provides the examples.

The loss defines what counts as failure.

The gradient provides a direction.

The optimizer moves.

And somewhere along that trajectory through parameter space, random numbers begin to become a model.

Perhaps that is the most interesting interpretation of the tweet.

Gradient descent does not write code the way we do.

It writes something we are only beginning to understand how to read.

---

## References

* [Andrej Karpathy, “Gradient descent can write code better than you. I'm sorry.”, August 4, 2017](https://x.com/karpathy/status/893576281375219712)
* [Andrej Karpathy, microGPT](https://karpathy.ai/microgpt.html)
* [microGPT source code, GitHub Gist](https://gist.github.com/karpathy/8627fe009c40f57531cb18360106ce95)
* [Andrej Karpathy on GitHub](https://github.com/karpathy)
* [Andrej Karpathy on YouTube](https://www.youtube.com/@AndrejKarpathy)
* [Andrej Karpathy, Neural Networks: Zero to Hero](https://www.youtube.com/@AndrejKarpathy)
* [Andrej Karpathy, makemore](https://github.com/karpathy/makemore)
* [Andrej Karpathy, micrograd](https://github.com/karpathy/micrograd)
* [Andrej Karpathy, “Software 2.0”](https://karpathy.medium.com/software-2-0-a64152b37c35)
* [OpenAI, “Learning to Reason with LLMs”](https://openai.com/index/learning-to-reason-with-llms/)
* [Vaswani et al., “Attention Is All You Need”](https://arxiv.org/abs/1706.03762)
* [Kingma and Ba, “Adam: A Method for Stochastic Optimization”](https://arxiv.org/abs/1412.6980)

---

*Posted on August 10, 2026.*
