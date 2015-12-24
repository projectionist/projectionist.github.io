---
layout: projection
title:  "Distortion-1"
date:   2015-12-18 15:33:27 +0000
poster: "https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/distortion-1/poster600.png"
clip: "https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/distortion-1/clip600.mp4"
clip_webm: "https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/distortion-1/clip600.webm"
clip_full: "https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/distortion-1/original.mov"
repository: https://github.com/projectionist/loop.git
branch: projection/distortion-1
---

This projection effects colour distortion using green levels, to which the eye is particularly sensitive.

The video is loaded as a texture, colours are sampled and snapped to pink or green in the fragment shader.

The [sample clip](https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/distortion-1/IMG_0024.m4v) is a ~3hr video of Rotterdam from the north-west of the Erasmus bridge, looking south-west.

{% include projections/video.html %}

{% include projections/loop.md %}
