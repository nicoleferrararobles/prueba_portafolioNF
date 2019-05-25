$(function(){

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var element = this.hash;

      $("html, body").animate({
        scrollTop: $(element).offset().top
      }, 800, function(){
        window.location.hash = element;
      });
    }
  });

  $('[data-toggle="popover"]').popover();

});
