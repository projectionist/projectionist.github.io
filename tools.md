---
layout: page
title: Tools
permalink: /tools/
---

Developing projections benefits from fast visual feedback. Where as projects such as [OpenFrameworks](http://openframeworks.org) provides a great deal of API out of the box, Projectionist has very little, favouring a tiny compile time and an extensible build system. While higher level drawing apis may be developed, or dependencies included, the maintenance of a short compile time is essential to the project.

A Projectionist scratch project can be compiled in ~0.3s on a VMware VM atop a Macbook Pro, but provides little more than an Open GL ES 2.0 drawing context.  

Projectionist targets only two platforms:

* A Raspberry PI for deployment
* A Debian VM for development


## Development Environment

The VM environment will take a few minutes to setup and provide rapid visual feedback.  
This environment can be used as much as a projection and Raspberry PI are not available or practical.
Development environments are provisioned automatically using [Vagrant](https://www.vagrantup.com) running on a [VMware Fusion](http://www.vmware.com/uk/products/fusion) VM.  
Unfortunately, VMware Fusion is the only virtualisation provider capable of virtualised graphics hardware, and it's not free.  
Additionally, Vagrant is free to use with VirtualBox but not with VMware Fusion.

In case you want to minimise cost and do the provisioning work yourself, the install script used by Vagrant to provision the VM is available in the [scratch repository](http://github.com/projectionist/scratch): `platforms/weston/install.sh`.  

After installation of VMware Fusion and the Vagrant plugin, ensure that you have installed your license and that the plugin is installed: `vagrant plugin list` should list `vagrant-vmware-fusion`, the license is emailed to you upon purchase.

Once the virtualisation tools are setup, follow the instructions in the README to get started with an empty project: [http://github.com/projectionist/scratch](http://github.com/projectionist/scratch).

When creating your own projects, fork the scratch repository to allow for the inclusion of upstream updates.

### Technical notes

* Uses Debian 8.2 64-bit. The Raspberry PI uses NOOBs, an OS based on an older version of Debian.
* OpenGL ES 2.0 is provided by MESA on the VM, other GL APIs are available on the VM which you aren't expected to use because they are not available on the Raspberry PI.
* The VM uses [Weston](http://wayland.freedesktop.org/building.html), the reference implementation of the [Wayland](http://wayland.freedesktop.org) window system. On the Raspberry PI, the propriatary drivers provide direct display access.


## Raspberry PI deployment

The tools were developed for a Raspberry 2 model B+.

With a new Raspberry PI:

* Update the system: `apt-get update && apt-get upgrade`
* Install EGL and OpenGL ES 2.0: `apt-get install -y libegl1-mesa-dev libgles2-mesa-dev`
* Install `g++-4.9`, we need `c++14` as described [here](https://solarianprogrammer.com/2015/01/13/raspberry-pi-raspbian-install-gcc-compile-cpp-14-programs/)

To deploy code:

* Use git to clone your projection onto the Raspberry PI
* Run `make clean && make` just as on the VM


## Notable Limitations

  * The development environment is limited to 800x600
  * pkg-config is used for dependency management but its scope is limited
  * The project has no advice for using an IDE such as XCode, which is complicated by the source files being on a file system shared between the host and the VM
  * The VM is not exactly the same as the deployment environment, which leaves an opportunity for unpleasant surprise


## Projectors

I used a [Optoma EH-341](http://www.optoma.co.uk/projectordetails.aspx?PTypeDB=Business&PC=EH341).

Most projectors project a grey rectangle when the screen is all black. The contrast ratio on the EH-341 is good; during the day and the grey rectangle is not visible, however if you're developing a projection for a dark space, your design considerations should include the grey rectangle.


## Learning Resources

* Learning C/C++
  * [Z shaws learn C the hard way](http://c.learncodethehardway.org/book/)
  * [http://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list](http://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list)
* Open GL tutorials and reference
  * [https://open.gl](https://open.gl) (a subset of the tutorial sections are applicable to GLES 2.0)
  * [http://www.opengl-tutorial.org](http://www.opengl-tutorial.org) (a subset of the tutorial sections are applicable to GLES 2.0)
  * [http://docs.gl](http://docs.gl)
* [pkg-config](http://www.freedesktop.org/wiki/Software/pkg-config/)
* [make](https://www.gnu.org/software/make/manual/)
* [GLM](http://glm.g-truc.net)
* [FFmpeg](https://www.ffmpeg.org)
