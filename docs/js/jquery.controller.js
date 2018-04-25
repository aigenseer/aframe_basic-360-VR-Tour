(function ( $ ) {
    $.fn.controller = function(options) {
        var self = this;
        this.s = {
            locations: {},
            // onClick: function(e, id, type) {},
            // onMouseenter: function(e, id, type) {},
            // onMouseleave: function(e, id, type) {}
        }
        this.s = $.extend(this.s, options);

        this.img = {
          default: '#arrow',
          hover: '#arrow_hover'
        };
        this.activeLocation = '';
        this.l = {};
        self.vc = null;

        this.link2target = {}

        var init = {

          core: function() {

            init.tags();

            for (var id in locations) {
              var e = locations[id];
              // console.log(id, e);

              self.l[id] = {
                oneActive: false,
                e: e.e,
                sky: e.sky
              }

              for (var i of e.e) {
                if(i.hasOwnProperty('data-type') && i.hasOwnProperty('target') && i["data-type"] == 'link' && !self.link2target.hasOwnProperty(i.id) ){
                  self.link2target[i.id] = i.target;
                }
              }


              //===== assets ====;
              for (var asset of e.assets) {
                self.createTag(self.$assets, asset);
              }

              if(e.default){
                self.openPage(id, e.rotation);
                // self.activeLocation = id;
                // self.createEntity(e.e);
                // self.l[id].oneActive = true;
                // self.setSky(e.sky);
              }


              self.vc = new VideoController();

            }//for

            init.AFRAME();

            return self;

          },//core

          AFRAME: function() {
            AFRAME.registerComponent('cursor-listener', {
              init: function () {
                var e = this.el
                var $e = $(e);
                var type = $e.data('type');
                var id = $e.attr('id');

                e.addEventListener('click', function() {
                  if(self.s.hasOwnProperty('onClick') && typeof self.s.onClick == 'function'){
                    self.s.onClick(e, id, type);
                    return;
                  }

                  switch (type) {
                    case 'link':
                      if(self.link2target.hasOwnProperty(id)){
                          var target = $e.attr('target');
                          var rotation = '';


                          if(isJSON(target)){
                            var r = JSON.parse(target.toString());
                            target = r.id;
                            rotation = r.rotation;
                          }
                          // console.log(target, rotation);
                          self.openPage(target, rotation);
                      }
                      break;
                    case 'video':
                        self.vc.play($e.attr('src').slice(1));
                      break;

                    default:
                    console.log('No Type for ', type);
                  }//switch

                });//click

                e.addEventListener('mouseenter', function() {
                  if(self.s.hasOwnProperty('onMouseenter') && typeof self.s.onMouseenter == 'function'){
                    self.s.onMouseenter(e, id, type);
                    return;
                  }
                  if($e.data('type')!='link') return;
                  // arrow.hover($e, true);
                });

                e.addEventListener('mouseleave', function(evt) {
                    if(self.s.hasOwnProperty('onMouseleave') && typeof self.s.onMouseleave == 'function'){
                    self.s.onMouseleave(e, id, type);
                    return;
                  }
                  if($e.data('type')!='link') return;
                  // arrow.hover($e, false);
                });

              }//init

            });//registerComponent

          },

          tags: function() {

            if(self.find('a-scene').length==0){
              self.$scene = $('<a-scene>');
              self.append(self.$scene);
            }else{
              self.$scene = $('a-scene');
            }

            if(self.find('a-assets').length==0){
              self.$assets = $('<a-assets>');
              self.$scene.append(self.$assets);
            }else{
              self.$assets = $('a-assets');
            }

            if(self.find('#sceneCam').length==0){
              self.$sceneCam = $('<a-entity id="sceneCam" camera look-controls mouse-cursor camera="userHeight: 1.6" rotation="0 190 0" look-controls="" position="" scale="" visible=""></a-entity>');
              self.$scene.append(self.$sceneCam);
            }else{
              self.$sceneCam = $('#sceneCam');
            }

            if(self.find('#page').length==0){
              self.$page = $('<a-entity id="page" position="" rotation="" scale="" visible="true"></a-entity>');
              self.$scene.append(self.$page);
            }else{
              self.$page = $('#page');
            }

            if(self.find('a-sky').length==0){
              self.$sky = $('<a-sky id="sky" src="" position="" rotation="" scale="" visible="" material="" geometry=""></a-sky>');
              self.$scene.append(self.$sky);
            }else{
              self.$sky = $('a-sky');
            }

          }

      };//init


        var isJSON = function(string) {
          try {
            JSON.parse(string);
            return true;
          } catch (e) {
            return false;
          }
        };

        this.createEntity = function(e) {
          for (var i of e) {
            self.createTag(this.$page, i);
          }
        };

        this.createTag = function($target, t) {
          if($target.find('#'+t.id).length>0) return;
          var $e = $('<'+t.tag+'>');

          for (var attrName in t) {
            switch (attrName) {
              case 'tag':
                  continue;
                break;
              default:
              // console.log(attrName, t[attrName]);
              $e.attr(attrName, t[attrName]);
            }
          }//for

          $target.append($e);
        };//createTag

        this.setSky = function(skyId) {
          this.$sky.attr('src', skyId);
        };

        this.create = function(e) {
          console.log(e);
        };//visible

        this.hideAll = function() {
          $(document).find('#page').html('');
        };//hideAll

        this.openPage = function(id, rotation) {
          if(!this.l.hasOwnProperty(id)){
            console.log('ID not found', id);
            return;
          }

          this.hideAll();
          var l = this.l[id];
          self.activeLocation = id;
          self.setSky(l.sky);

          if(!self.l[id].oneActive){
            self.l[id].oneActive = true;
            setTimeout(function() {
              self.createEntity(l.e);
              self.setRotation(rotation);
            }, 1000);
            return;
          }
          self.setRotation(rotation);
          self.createEntity(l.e);




        };//next

        this.setRotation = function(rotation) {
          if(typeof rotation != 'undefined'){
            console.log(rotation);
            self.$sceneCam.attr('rotation', rotation);
          }
        }

        this.hover = function($e, b) {
          var id = b? this.img.hover: this.img.default
          $e.attr('src', id);
        };




        return init.core();
    };//()
}( jQuery ));
