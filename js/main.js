window.onload = function(){
if (navigator.vendor.indexOf("Apple")==0 && /\sSafari\//.test(navigator.userAgent)){ //not fully supported on 1.7 jQuery
    $("#Layer_1").css("position", "relative");
    $("#Layer_1").css("height", "100%");
    $("#Layer_1").css("width", "90%");
    $("#bike_wrapper").css("width", "60%");
    $("#bike_wrapper").css("height", "50%");
    $("#bike_wrapper").css("bottom", "10px");
    $("svg").css("bottom", "0");
}
// skrollr initialization

skrollr.init({
        forceHeight: false,
        smoothScrolling: true,
        easing: {
            WTF: Math.random,
            inverted: function(p) {
                return 1-p;
            }
        }
});

$( "#scroller" ).click(function() {
  skrollr.animateTo(400);
});

}