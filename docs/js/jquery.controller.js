/* ---------------------------------------
 Package:  aframe_basic-360-VR-Tour
 Version:  0.1  Date: 2018/06/04 14:18:17
 Homepage: https://github.com/aigenseer/aframe_basic-360-VR-Tour
 Author:   Viktor Aigenseer
 License:  MIT
 ------------------------------------------ */
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
        this.modeVr = false;

        this.img = {
          default: '#arrow',
          hover: '#arrow_hover'
        };
        this.activeLocation = '';
        this.l = {};
        self.vc = null;
        self.resize = 0;


        this.link2target = {}

        this.vr = {

          enable: false,

          append: function() {
            self.vr.enable = true;
            self.controls = {};
            if(self.find('[vive-controls="hand: left"]').length==0){
              self.controls.$left = $('<a-entity vive-controls="hand: left" controller-cursor></a-entity>');
              self.$scene.append(self.controls.$left);
            }else{
              self.controls.$left = $('[vive-controls="hand: left"]');
            }

            if(self.find('[vive-controls="hand: right"]').length==0){
              self.controls.$right = $('<a-entity vive-controls="hand: right" controller-cursor></a-entity>');
              self.$scene.append(self.controls.$right);
            }else{
              self.controls.$right = $('[vive-controls="hand: right"]');
            }
          },

          remove: function() {
            self.vr.enable = false;
            self.controls.$left.remove();
            self.controls.$right.remove();
          }

        }


        var init = {

          core: function() {

            init.tags();

            var defaultPage = {
              id: 0,
              rotation: 0
            }
            var assets_count = 0;

            for (var e of locations) {
              // console.log(e);

              self.l[e.name] = {
                oneActive: false,
                e: e.e,
                sky: e.sky
              }

              for (var i of e.e) {
                if(i.hasOwnProperty('data-type') && i.hasOwnProperty('target') && i["data-type"] === 'link' && !self.link2target.hasOwnProperty(i.id) ){
                  self.link2target[i.id] = i.target;
                }
              }


              //===== assets ====;
              for (var asset of e.assets) {
                self.createTag(self.$assets, asset);
              }

              if(e.default){
                defaultPage.id = e.name;
                defaultPage.rotation = e.rotation;
              }

              self.vc = new VideoController();

            }//for

            var param = getParamter();
            if(param.x && param.y && param.z) defaultPage.rotation = param.x+' '+param.y+' '+param.z;
            if(param.location && self.l.hasOwnProperty(param.location) ){
              defaultPage.id = param.location;
            }

            self.openPage(defaultPage.id, defaultPage.rotation);
            init.AFRAME();

            return self;

          },//core

          AFRAME: function() {

            var runClick = function($e) {
              console.log('click');
              var type = $e.data('type');
              var id = $e.attr('id');

              if(self.s.hasOwnProperty('onClick') && typeof self.s.onClick == 'function'){
                self.s.onClick(e, id, type);
                return;
              }


              switch (type) {
                case 'info':
                  var scale = $e.data('info-scal');
                  var c = $e.data('info-content');
                  self.info.open(c, scale);
                break;

                case 'info_e':
                  self.info.close();
                break;

                case 'url':

                  var traget = $e.attr('traget');
                  var returnbackParameter = $e.attr('returnbackParameter');
                  var paramString = '';



                  if(returnbackParameter){
                    p = self.cameraEl.getAttribute('rotation');
                    p.location = self.activeLocation;
                    traget += traget.indexOf('?')>=0? '&' : '?';
                    traget += "backurl="+encodeURIComponent(location.href.split('?')[0] +'?'+object2Paramter(p));
                  }

                  if($e.data('text')){
                    traget += "&text="+encodeURIComponent($e.data('text'));
                  }

                  window.location.href = traget

                break;

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
                case 'wrapper':

                    runClick(self.$scene.find('#'+$e.attr('target')));
                  break;

                default:
                console.log('No Type for ', type);
              }//switch

            }//runClick


            self.cameraEl = null;
            AFRAME.registerComponent('camera-listener', {
              tick: function () {
                self.cameraEl = this.el.sceneEl.camera.el;
              }
            });

            self.$scene.on('enter-vr', function() {
              self.vr.append();
              setTimeout(function() {
                self.openPage(self.activeLocation);
              }, 500);
            });

            self.$scene.on('exit-vr', function() {
              self.vr.remove();
            });

            AFRAME.registerComponent('cursor-listener', {
              init: function () {
                var e = this.el
                var $e = $(e);
                var type = $e.data('type');
                var id = $e.attr('id');

                e.addEventListener('click', function() {
                  runClick($e);
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
              self.$sceneCam = $('<a-entity id="sceneCam" camera="" look-controls camera-listener mouse-cursor camera="userHeight: 1.6" rotation="0 190 0" look-controls="" position="" scale="" visible=""></a-entity>');
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

        function deUmlaut(value){

          value = value.replace(/ä/g, 'ae');
          value = value.replace(/ö/g, 'oe');
          value = value.replace(/ü/g, 'ue');
          value = value.replace(/ß/g, 'ss');

          value = value.replace(/Ä/g, 'Ae');
          value = value.replace(/Ö/g, 'Oe');
          value = value.replace(/Ü/g, 'Ue');

          return value;
        }

        this.createEntity = function(e) {
          for (var i of e) {
            self.createTag(this.$page, i);
          }
        };

        this.createTag = function($target, t) {
          if(typeof t != 'object'){
            console.log('createTag: No Object');
            return;
          }
          if($target.find('#'+t.id).length>0) return;
          // console.log(t.tag);
          var $e = $('<'+t.tag+'>');

          for (var attrName in t) {
            switch (attrName) {
              case 'tag':
                  continue;
                break;
              case 'data-info-content':
                  $e.attr(attrName, JSON.stringify(t[attrName]));
                  continue;
                break;
              case 'text':
                  var text = deUmlaut(t[attrName]);
                  if(text.indexOf(':')<0 && text.indexOf(':')<0){
                    text = 'font: https://cdn.aframe.io/fonts/mozillavr.fnt;anchor:center;width:6;font:kelsonsans;value:'+text+';whiteSpace:normal;side:double;baseline:center;align:center';
                  }
                  $e.attr(attrName, text);
                  continue;
                break;

              default:


              $e.attr(attrName, t[attrName]);

            }//switch
          }//for

          if(t.tag=='a-text' && t.hasOwnProperty('width')){
            $e[0].setAttribute('width', t.width-0.01);
          }


          if(self.vr.enable==true && t.tag==='a-image' && t.hasOwnProperty('data-type') && (t['data-type'] === 'info' || t['data-type'] === 'link')){
            var $wrapper = $('<a-entity data-type="wrapper" cursor-listener geometry="primitive: plane; height: 1.34; width: 3.26" material="side: double; color: black; opacity: .0" rotation="0 -180 0" visible=""></a-entity>');


            var scale = t.scale.split(' ');
            scale[0] = parseFloat(scale[0])+0.5;
            scale[1] = parseFloat(scale[1])+1;
            scale[2] = parseFloat(scale[2])+1;
            var position = t.position.split(' ');
            position[0] = parseFloat(position[0]);
            position[1] = parseFloat(position[1]);
            position[2] = parseFloat(position[2]);
            position[0] += position[0]>0? 0.1 : -0.1;
            position[1] += position[1]>0? 0.1 : -0.1;
            position[2] += position[2]>0? 0.1 : -0.1;

            $wrapper.attr({
              'position': position.join(' '),
              'rotation': t.rotation,
              'scale': scale.join(' '),
              'target': t.id
            });
            $target.append($wrapper);
          }

          if(self.vr.enable==true && t.tag==='a-image' && t.hasOwnProperty('data-type') && t['data-type'] === 'url') return $e;


          $target.append($e);

          return $e;
        };//createTag

        this.setSky = function(skyId) {
          this.$sky.attr('src', skyId);
        };

        this.hideAll = function() {
          $(document).find('#page').html('');
        };//hideAll

        this.openPage = function(id, rotation) {
          if(!this.l.hasOwnProperty(id)){
            console.log('ID not found', id);
            return;
          }
          this.info.close();
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

        this.info = {

          $e: null,

          open: function(list, scel) {
            scel = scel || '1.730 1.968 1.000';
            // console.log(typeof this.$e);
            if(this.$e != null){
              this.close();
              return;
            }

            this.$e = $('<a-entity position="0.151 1.459 -5.200" rotation="0.344 0 0" data-type="info_e" cursor-listener look-at="#sceneCam" text="align:center;side:double;value:;width:5.11" mixin="null" scale="" visible="">');
            if(self.vr.enable){
              this.$e.attr('position', '0.151 0.0 -5.200');
              this.$e.attr('scale', '0.7 0.7 1');
            }

            for (var i in list) {
              var elem = list[i];
              var $elem = self.createTag(this.$e, elem);
              if(elem.tag=='a-video'){
                setTimeout(function() {
                  console.log($(elem.src)[0]);
                    $(elem.src)[0].play();
                }, 1000);
              }
            }//for

            // this.$e = $('<a-entity position="0.151 1.459 -5.200" rotation="0.344 0 0" data-type="info_e" cursor-listener look-at="#sceneCam" text="align:center;side:double;value:'+string+';width:5.11" mixin="null" scale="" visible=""></a-entity>');
            this.$background = $('<a-entity geometry="primitive: plane; height: 1.34; width: 3.26" material="color: black; opacity: .8" position="-0.005 0.332 0.054" rotation="" scale="'+scel+'" visible=""></a-entity>');
            // this.$x = $('<a-entity position="1.921 0.896 1.218" data-type="info_e" cursor-listener rotation="0.344 0 0" text="align:center;side:double;value:x;width:5.11" mixin="null" scale="" visible=""></a-entity>');
            this.$e.append(this.$background, this.$x);
            self.$sceneCam.append(this.$e);
          },

          close: function() {
            if(this.$e != null){
              this.$e.remove();
              this.$e = null;
            }

          }

        };//info



        return init.core();
    };//()
}( jQuery ));
