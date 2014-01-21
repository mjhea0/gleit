// $(document).ready(function() {
//   var imageUrl = $('body').find('img').attr('src');
//   var imgTag = ["<img src='", imageUrl, "'>"].join('');
//   for (var i=1;i<40;i++) {$('#images').append(imgTag);}
// });

// $(function() {

//   console.log("whee!")

//   // event handler
//   $(".heart-click").click(function(e) {
//   	$("#heart-append").append("<span class='heart-click heart glyphicon glyphicon-heart'></span>");
//   });

// });

$(function() {

  var endDate = "January 14, 2014 16:46:00";
  $('.end').countdown({
    date: endDate,
    render: function(data) {
      $(this.el).html("<div>" + this.leadingZeros(data.days, 3) + " <span>days</span></div><div>" + this.leadingZeros(data.hours, 2) + " <span>hrs</span></div><div>" + this.leadingZeros(data.min, 2) + " <span>min</span></div><div>" + this.leadingZeros(data.sec, 2) + " <span>sec</span></div>");
    }
  });  

});
