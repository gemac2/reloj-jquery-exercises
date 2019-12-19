$(document).ready(function(){
   $(".btn-outline-warning").on('click', function(){
      $(this).addClass("d-none");
      $(".remove").addClass("d-flex");
     $(".inputs").removeClass("d-flex");
     $(".hours").css("width", "100%");
     $(".minutes").css("width", "100%");
   });
   $(".remove").on('click', function(){
      $(".remove").removeClass("d-flex");
      $(".btn-outline-warning").removeClass("d-none");
      $(".inputs").addClass("d-flex");
      $(".hours").css("width", "190px");
      $(".minutes").css("width", "190px");
   });   
    
   $(".btn-success").on('click', function(){
      let hours = $("#hours").val();
      let minutes = $("#minutes").val()
      
      if (hours >= 24 || minutes >=60) {
         $(".error").removeClass("d-none")
      }else{
         if (hours >= 12) {
            $(".error").addClass("d-none")
            let hours = $("#hours").val()
            let minutes = $("#minutes").val()
            let text1 = $(".hours-title").text()
            let text2 = $(".minutes-title").text()
            $("h3").text("At" + " " + hours + " " + text1 + " " + "with" + " " + minutes  + " " + text2 + " " + "there's an angle off:")
            angleHours = hours*30
            angleMinutes = minutes*6
            anglePartial = angleHours-angleMinutes
            angleTotal =  ( 360-anglePartial)
            $(".angle-value").text(angleTotal+"º");
         }else{
            if (hours >0) {
               $(".error").addClass("d-none")
               let hours = $("#hours").val()
               let minutes = $("#minutes").val()
               let text1 = $(".hours-title").text()
               let text2 = $(".minutes-title").text()
               $("h3").text("At" + " " + hours + " " + text1 + " " + "with" + " " + minutes + " " + text2 + " " + "there's an angle off:")
               angleHours = hours*30
               angleMinutes = minutes*6
               angleTotal = angleMinutes-angleHours
               $(".angle-value").text(angleTotal+"º");
            }
         }
      }
   });
});


