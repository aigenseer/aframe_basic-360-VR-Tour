# AFrame basic-360-VR-Tour

This basic basic-360-VR-Tour is a starting point for your WebVR tour. Replace the images by your own 360 degree equirectangular images generated [Hugin](http://hugin.sourceforge.net/download/) or check out existing [MediaWiki Commons Images with equirectangular projections](https://commons.wikimedia.org/wiki/Category:Equirectangular_projection) and build your own WebVR environment. Please cite the authors when you used the images.

The basic-360-VR-Tour for AFrame was created by Viktor Aigenseer.

## Wikiversity Tutorial
It is recommended to add a [tutorial in Wikiversity](https://en.wikiversity.org/wiki/3D_Modelling/Create_3D_Models/Hugin) to learn about this WebVR tour and to create your create. Regard the basic tour from Viktor Aigenseer as a starting point. Two basic skills are necessary.
* Create 360 Degree Images with  [Hugin](http://hugin.sourceforge.net/download/) and
* [JavaScript skills](https://en.wikiversity.org/wiki/JavaScript) to adapt this basic tour to your needs.

## AFrame
AFrame is web framework for building virtual reality in a Browser. Exploration of constructed 3D scenes or 360 degree images are possible.

## 360 Degree Images for AFrame
With [Hugin](http://hugin.sourceforge.net/download/) you can create 360 degree images for us in
* The [HuginSample repository](https://www.github.com/niebert/HuginSample) provides a sample image source for the Panorama photo stitcher
* The software [Hugin](http://hugin.sourceforge.net/download/) can be downloaded from http://hugin.sourceforge.net/download/ and installed on Linux, MacOSX and Windows.
* Explore an [example of 360 degree image](https://niebert.github.io/HuginSample)
* People that want to learn about creating [360 degree panoramas e.g. with AFrame](https://aframe.io/examples/showcase/sky/) can use this [set of sample images](https://github.com/niebert/HuginSample/archive/master.zip) to play around with [Hugin](http://hugin.sourceforge.net/download/).
* Create a panorama with Hugin
* Fix missing areas in the panorama and correct the projection with [GIMP](https://www.gimp.org/downloads/)

 See the [Final result of your efforts in AFrame](https://niebert.github.io/HuginSample)

## Hugin
* Download [Hugin](http://hugin.sourceforge.net/download/)
* Install Hugin on your Operating System
* Load all the JPG images in the folder ___/durlach_saumarkt___ which are a bunch of JPG images of a market place in the town Karlsruhe-Durlach in Germany.
* Let Hugin align all the images for you (depending on the number of images and the performance of you computer it takes few minutes until this process is performed)
* Save the panorama to your local harddrive.
* You will see that the generated image is generated up-side-down. You can easily fix that by rotation of the output with you image editing software (e.g. [GIMP](https://www.gimp.org/downloads/))

## Spherical (equirectangular) Images for AFrame
If you want to play around with equirectangular images and view them in Aframe check the [MediaWiki Commons Images of equirectangular projections](https://commons.wikimedia.org/wiki/Category:Equirectangular_projection). Please cite the authors when you used the images.


## VR Headset
AFrame works with the VR Headsets Vive, Rift, Daydream, GearVR,
