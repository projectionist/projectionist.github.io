## Loop projections

Rapidly varying pixel values and motion physics constrained by the of holding a camera make video a good base for experimentation. No movement is unaturally fast, and the scenes are complex.
The `loop` repository has multiple projections with different filters, all of which are based on the `master` branch.

Loop projections use [ffmpeg](http://ffmpeg.org/) which is included and linked with the project at compile time resulting a lengthened build.

Further work on using videos as textures
Instead the video could be decoded in a separate process and exchanged via shared memory or a socket.
This function is similar to that of the compositor component of a windowing system, so some research should be done first.
