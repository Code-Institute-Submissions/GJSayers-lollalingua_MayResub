
$(document).ready(function () {

    $("#game-it").hide();
    $("#game-fr").hide();
    $("#welcome-it").hide();
    $("#welcome-fr").hide();
    $("#go-it").hide();
    $("#go-fr").hide();

    $("#lang-button-fr").click
        (function () {
            $("#italian").hide(1000);
            $("#game-it").hide(1000);
            $("#french").show(1000);
            $("#game-fr").show(1000);
            $("#lang-button-fr").hide();
            $("#lang-button-it").show();
            $("#welcome-en").hide(1000);
            $("#welcome-fr").show(1000);
            $("#welcome-it").hide(1000);
            $("#go-it").hide(1000);
            $("#go-fr").show(1000);
            $("#go-en").hide(1000);           
        });
    $()
    $("#lang-button-it").click
        (function () {
            $("#french").hide(1000);
            $("#game-fr").hide(1000);
            $("#italian").show(1000);
            $("#game-it").show(1000);
            $("#lang-button-fr").show();
            $("#lang-button-it").hide();
            $("#welcome-en").hide(1000);
            $("#welcome-it").show(1000);
            $("#welcome-fr").hide(1000);
            $("#go-it").show(1000);
            $("#go-fr").hide(1000);
            $("#go-en").hide(1000);
            });

// get how to play modal using jquery click listner on play- button


$( "#modal-play-btn" ).on("click",function() {
    $(".play-modal").css('display', 'block');
});
            
})


