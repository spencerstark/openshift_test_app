$(document).ready(function () {
  
  $(".nav1").click(function() { 
    event.preventDefault();
    $.ajax({
      type: "GET",
      url: "/",
      success: function(data) {  
            var val1 = $(data).filter('.main').html();
            $('.main').hide().html(val1).fadeIn();
      } 
    });
  }); 

  $(".nav2").click(function() { 
    event.preventDefault();
    $.ajax({
      type: "GET",
      url: "/aboutus",
      success: function(data) {  
            var val1 = $(data).filter('.main').html();
            $('.main').hide().html(val1).fadeIn();
      } 
    });
  }); 

  $(".nav3").click(function() { 
    event.preventDefault();
    $.ajax({
      type: "GET",
      url: "/contactus",
      success: function(data) {  
            var val1 = $(data).filter('.main').html();
            $('.main').hide().html(val1).fadeIn();
      } 
    });
  }); 

});

