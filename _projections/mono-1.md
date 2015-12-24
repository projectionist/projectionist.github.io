---
layout: projection
title:  "Mono-1"
date:   2015-11-11 21:10:10 +0000
poster: "https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/mono-1/poster.png"
clip: "https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/mono-1/clip600.mp4"
clip_webm: "https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/mono-1/clip600.webm"
clip_full: "https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/mono-1/original.mov"
repository: https://github.com/projectionist/loop.git
branch: projection/mono-1
---

Quantisation of to monochrome based on sensitivity adjusted pixel brightness.
The input image. Randomly, periodically, adjusts threshold.

Loop includes ffmpeg

The build includes ffmpeg via pkg-config, though this doesn't fatally slow the build, a future consideration would be to extract the video decoding program and run it in a separate process.
