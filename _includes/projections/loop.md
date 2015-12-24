## Loop Projections

This video-based projection is a branch of the [Loop](http://github.com/projectionist/loop) repository.

Rapidly varying pixel values and motion physics constrained by the of holding a camera make video a good base for experimentation. No movement is unaturally fast, and the scenes are complex.

Loop projections use [ffmpeg](http://ffmpeg.org/) which is included and linked with the project at compile time resulting a lengthened build. Though not fatally long, build speed could be restored by separating video decoding into a separate process. However, sharing frames between processes is a potential bottle-neck and puts the projection in a similar role to the compositor of a windowing system.

Further work on using videos as textures
Instead the video could be decoded in a separate process and exchanged via shared memory or a socket.
This function is similar to that of the compositor component of a windowing system, so some research should be done first.
