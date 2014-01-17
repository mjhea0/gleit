// $(document).ready(function() {
//   var imageUrl = $('body').find('img').attr('src');
//   var imgTag = ["<img src='", imageUrl, "'>"].join('');
//   for (var i=1;i<40;i++) {$('#images').append(imgTag);}
// });

$(function() {

  console.log("whee!")

  // event handler
  $(".heart-click").click(function(e) {
  	$("#heart-append").append("<span class='heart-click heart glyphicon glyphicon-heart'></span>");
  });

});
