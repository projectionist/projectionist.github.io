---
layout: projection
title:  "Space"
date:   2015-11-24 20:56:09 +0000
poster: "https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/space/poster600.png"
clip: "https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/space/clip600.mp4"
clip_webm: "https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/space/clip600.webm"
clip_full: "https://dl.dropboxusercontent.com/u/1279136/projectionist/projections/space/original.mov"
repository: https://github.com/projectionist/space.git
branch: projection/space
---

This example is a starting point for projection that uses a 3D scene.  
It uses a projection mapping to create the CG archetype flying-thorugh-space effect.
Uses [GLM](http://glm.g-truc.net/) to create MVP matrices.

The motion too fast for most spaces, the visual depth adds little to the experience.  
Use of scene depth in projections needs more experimentation, or perhaps 3D is redundant for this purpose.

{% include projections/video.html %}
