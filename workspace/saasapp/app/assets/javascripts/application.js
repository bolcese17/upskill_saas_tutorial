// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require social-share-button
//= require_tree .
//= require owl.carousel


        
        
        var owl;
$(document).ready(function(){
  owl = $('#owl-example').owlCarousel({
    autoplay: true,
    autoplaySpeed: 10000,
    loop: true,
    autoHeight:true,
    autoWidth: false,
    navSpeed: 300,
    items: 3,
    margin: 100,
    items : 4,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,3]
  });
  owl.on('changed.owl.carousel', function(e) {
    console.log("test");
  });
});


 
     
 
     
    