/* ---------------------------------------
 Package:  aframe_basic-360-VR-Tour
 Version:  0.1  Date: 2018/06/04 14:18:17
 Homepage: https://github.com/aigenseer/aframe_basic-360-VR-Tour
 Author:   Viktor Aigenseer
 License:  MIT
 ------------------------------------------ */
window.getParamter = function(search) {
  search = search || location.search.substring(1);
  if(search.length==0) return {};
  var string = '{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}';
  var p = JSON.parse(string);
  for (var key in p) {
    p[key] = decodeURIComponent(p[key]);
  }
  return p;
};

window.object2Paramter = function(p) {
  var paramString = '';
  for (var key in p) {
      if (paramString != "") {
          paramString += "&";
      }
      paramString += key + "=" + encodeURIComponent(p[key]);
  }
  return paramString;
}
