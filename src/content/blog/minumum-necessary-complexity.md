---
title: Minumum Necessary Complexity
date: 2026-06-30
description: Complexity, AI, and the Drift Away from the Ideal Code Base
---

Some thoughts on my long drive home.

## Some amount of complexity is unavoidable

Any decently sized codebase supports many features. These features are comprised of units of logic, which take many shapes across a stack - react components, Java classes, python scripts. These chunks of modular logic are reasonably separated into distinct files.

Files typically contain a grouped set of related units of logic (functions, classes, components, etc.), which are related to each other by type or domain. The units of logic within a file may also interact with each other. These unts may also be exported to be implemented by another file or files (i.e. reusable react components, global helper functions). So we have both inter-file and intra-file interactivity between units of logic.

In this way, we have logical connections that form both between units of logic within a file, as well as between files.

These units of logic themselves, and the connections between them, create complexity. For features to exist, some amount of logic, and bonds betweeen related units of logic, must exist. So of course, some amount of complexity is necessary.

<img src="/jamesashleydotdev/diagram.png" alt="Diagram of files as connected boxes, representing code base complexity" style="width: 120%;
    max-width: none;
    flex-shrink: 0;
    position: relative;
    left: 50%;
    transform: translateX(-50%);" />

## Most codebases have extra complexity

In reality, most units of logic in a codebase are not as concise or clear as they could be. They may contain a roundabout way of accomplishing something when a more direct path exists. They may be written in a way in which the purpose of the code is unclear, or does not well reflect the realities of the domain being represented (see: domain-driven design). A function or component which receives many too input arguments may be more complicated to implement as the logic it abstracts away.

In addition, structural complexity between units of logic can exist. A unit of logic may be grouped somewhere it does not belong, or cannot be easily found.

## The Ideal State: Minimum Necessary Complexity

If you think of a little diagram, like a bunch of different little boxes that connect to each other, think of these as your files. And a lot of these boxes might have connections to each other. And there is some permutation of these boxes and these connections which represents the minimum necessary complexity for this app, for this platform, for this code base, and its functionality to exist.

And I think a big part of being a good developer is trying to move closer to this state, where the least mental overhead necessary to draw out a map in your mind of all these features, and how they all fit together and work together — that's the ideal state you want to move the code towards.

## Why This State Matters

I think there are many benefits to this state. First of all, like I just said, you have less mental overhead to understand the code base, to maintain it, to add new features, etc. You have those immediate benefits of just, like, there's less cognitive overhead needed to understand the code base, to fix it, to diagnose issues, to extend it.

And this also makes it easier for agents to understand. I think it reduces bugs, because if everything is clear and readable, bugs become more apparent when they're present. And again, agents — if agents then come later after that state is achieved, or at least close to achieved, agents can look at the existing code and sort of extend the same styles. So it's better for agents.

But there's a caveat with that I'll get to in a second.

## AI and Exponential Decay

And what's bad about that in relation to AI is, first of all, AI is going to look at everything. It's going to ingest some of those bad patterns, and it's going to extend them. And because AI isn't perfect, and it always makes — not always, but usually makes at least some mistakes, because it doesn't fully understand your code base, it has a limited context window — it's going to introduce... AI will always push you slightly further away from that state of minimum necessary complexity. It always will.

Just because that's not something AI, I think, can really understand. It's not something you can prompt it to do, I don't believe. It's just, there's always some degree of hallucination. There's just never going to be a perfect output from AI that does that.

And it's just because it's the nature of the technology. It's, again, a token predictor. It can't really reason. It can't hold the full context of the code base. So you're always going to have this drift whenever you use it, away from that state of minimum necessary complexity.

And that's why code bases that frequently use agents will experience further and further drift away from that perfect state, further away from that ideal.
