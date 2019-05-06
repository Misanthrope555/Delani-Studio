
$(document).ready(function() {
    $(".design").click(function(){
      $(".design-showing").toggle();
      $(".design-hidden").toggle();
    });
    $(".devt").click(function() {
      $(".development-hidden").toggle();
      $(".development-showing").toggle();
    });
    $(".prod").click(function() {
      $(".product-showing").toggle();
      $(".product-hidden").toggle();
    });
    $(".submit").click(function(event) {
        event.PreventDefault()
        console.log("clicked button")
    });
});