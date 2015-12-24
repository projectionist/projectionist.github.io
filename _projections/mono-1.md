---
layout: projection
title:  "Mono-1"
date:   2015-11-11 21:10:10 +0000
poster: "https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/mono-1/poster600.png"
clip: "https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/mono-1/clip600.mp4"
clip_webm: "https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/mono-1/clip600.webm"
clip_full: "https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/mono-1/original.mov"
repository: https://github.com/projectionist/loop.git
branch: projection/mono-1
---

This projection quantizes pixels to monochrome values, decided by comparing brightness to a threshold.  
The [sample clip](https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/mono-1/IMG_0022.m4v) used is a stable scene, the threshold is varied to random values at random intervals with a smoothing effect between changes.

{% include projections/video.html %}
{% include projections/loop.md %}
