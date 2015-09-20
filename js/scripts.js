function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#imageContainer')
                        .attr('src', e.target.result)
                        .width(150)
                        .height(200);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

$( document ).ready(function() {
/*$("input").focusin(function() {
    $("#instructionMessage").hide();
    }).focusout(function () {
    $("#instructionMessage").show();
});*/

$("input.required").keyup(function(){
    if($(this).val()) {
        $("#instructionMessage").hide("slow");
    } else {
        $("#instructionMessage").show("slow");
    }
        
});

$(".closeMessage").click(function(){
    $("#instructionMessage").hide();
});

$(".header_button_cancel").bind("click", function() {
  $("input[type=text], textarea").val("");
});

});
