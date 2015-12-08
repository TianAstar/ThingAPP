(function(){
  
 var temp ='<div class="spinner-w">'+'<div class="spinner">'+'<div class="rect1"></div>'+'<div class="rect2"></div>'+'<div class="rect3"></div>'+'<div class="rect4"></div>'+'<div class="rect5"></div>'+'</div>'+'</div>';
$("body").prepend($(temp))


  var ImageLoader = window["ImageLoader"] = function(){
    this.images = [];
    this.counter = {
      success: 0,
      failed: 0
    };
    //this.percentNode = document.querySelector(".newloading-ptxt");
  };

  ImageLoader.prototype = {
    add: function(url){
      this.images.push(url);
      return this;
    },
    notify: function(key){
      this.counter[key]++;

      var counter = this.counter;
      var size = this.images.length;
      var loaded = counter.success + counter.failed;
      //var percent = Math.min(((loaded / size) * 100).toFixed(0), 100);
      //var percentNode = this.percentNode;

      //if(percentNode){
      //  percentNode.innerHTML = (percent + "%");
      //}

      ImageLoader.complete = (loaded >= size);
    },
    load: function(){
      var imgs = this.images;
      var size = imgs.length;

      ImageLoader.startTime = (new Date().getTime());

      for(var i = 0; i < size; i++){
        ImageLoader.loader(this, imgs[i]);
      }
    }
  };

  ImageLoader.start = 0;
  ImageLoader.complete = false;
  ImageLoader.Cache = {};

  ImageLoader.loader = function(imageLoader, url){
    var img = new Image();

    img.onload = function(){
      imageLoader.notify("success");

      img = null;
    };

    img.onerror = function(){
      imageLoader.notify("failed");

      img = null;
    }

    img.src = url;
  };
  ImageLoader.timeout = function(){
    var end = (new Date().getTime());
    var diff = end - ImageLoader.start;

    return (diff >= 5000);
  };

  ImageLoader.getImageLoader = function(name){
    var loader = ImageLoader.Cache[name] || (ImageLoader.Cache[name] = new ImageLoader());

    return loader;
  }

  var loader = ImageLoader.getImageLoader("progress");

})();


var loader = ImageLoader.getImageLoader("progress");

  loader.notify("success");
  if(ImageLoader.complete || ImageLoader.timeout()){
        var loading = $(".spinner-w");
              
              if(loading.length > 0){
                  setTimeout(' loading.addClass("hide")', 500)
              }


  }