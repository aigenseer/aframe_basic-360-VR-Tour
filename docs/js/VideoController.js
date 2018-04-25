var VideoController = function() {
  var self = this;
  this.videos = {};

  $('a-assets').find('video').each(function() {
    var id = $(this).attr('id');
    // console.log(id, $(this)[0]);
    self.videos[id] = $(this)[0];
    self.videos[id].pause();
  });

  this.isPlaying = function(video) {
    return !!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2);
  }

  this.play = function(id) {
    var v = this.videos[id];
    if(this.isPlaying(v)){
      v.pause();
    }else{
      v.play();
    }
  };

  return this;
};
