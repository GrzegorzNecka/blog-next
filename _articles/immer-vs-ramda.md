---
title: Immer vs Ramda -
description: Two approaches towards writing Redux reducers
cover: /covers/immerVsRamda.png
date: 02-20-2021
tags:
  - immer
  - javascript
  - webdev
  - redux
---
Article copied from https://dev.to/fkrasnowski/immer-vs-ramda-two-approaches-towards-writing-redux-reducers-3fe0

Reducers - a core element of Redux's philosophy that tightly grabs mutations of a given state in one place. In theory, the pure nature of reducers should lead to great scalability, readability, and make us all fortunate children of Redux god. But even the brightest idea can be dimmed if thrown on the one most pediculous soil...

Yes. I speak about JavaScript. Writing complex pure functions in vanilla JavaScript is harsh. Avoiding mutations is extraordinarily hard. Matching against actions? There are no Variants/Enums in JS, you have to use strings instead. And you land with a poor switch statement taken straight from the hell. Regardless, Redux is the most popular state manager for React applications

## The path to purity
Consider the two ways to make your life easier, the first one will be the Immer - Immer is a package that lets you deliver the next state by "mutating" the draft of the previous state:
