
$(document).ready(function () {

    $(".language-game-en").hide();
    $(".language-game-it").hide();
    $(".language-game-fr").hide();
    $(".info").hide();
    $("#welcome-it").hide();
    $("#welcome-fr").hide();
    $("#go-it").hide();
    $("#go-fr").hide();

    
/* efforts at language storage 
saveLanguageChoice();


function saveLanguageChoice () {
   const languageButton = ($('.language-button'));   
     $('.language-button').on("click"); {
    if (languageButton.classList.contains('french')) {
        localStorage.setItem("language", "french");
    } else if (languageButton.classList.contains('english')){
        localStorage.setItem("language", "english");
    } else if (languageButton.classList.contains('italian')){
        localStorage.setItem("language", "italian");
  //  changeLanguageChoice();

      } }
}

changeLanguageChoice ();

function changeLanguageChoice () {
    if (localStorage.getItem('language') !== null) {
        const chosenLanguage = localStorage.getItem('language');
       //thing that happens if language is chosen

    }
}*/

 

 
        /*    $("#italian").hide(1000);
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
    
    $("#lang-button-it").click
        (function () {
        localStorage.setItem('language','italian'); 
         /*   $("#french").hide(1000);
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

    $("#lang-button-en").click
        (function () {
        localStorage.setItem('Language','English'); 
            });     */

// get how to play modal using jquery click listner on play- button


$("#modal-play-btn").on("click",function() {
    $(".play-modal").css('display', 'block');
    $(".welcome-message").hide(1000);
    $(".welcome").hide(1000);
    });

$("#modal-lang-btn").on("click",function() {
    $("#lang-modal").css('display', 'block');
    $(".welcome-message").hide(1000);
    $(".welcome").hide(1000);
    });

$("#modal-subject-btn").on("click",function() {
    $("#subject-modal").css('display', 'block');
    $(".welcome-message").hide(1000);
    $(".welcome").hide(1000);
    });   

$("#modal-start-play-btn").on("click",function() {
    $("#subject-modal").css('display', 'block');
    $(".welcome-message").hide(1000);
    $(".welcome").hide(1000);
    });      

$(".close-btn").on("click",function() {
    $("#play-modal").css('display', 'none');
    $("#lang-modal").css('display', 'none');
    $("#subject-modal").css('display', 'none');
    $("#game-over-modal").css('display', 'none'),
    location.reload();
    $(".welcome-message").show(1000);
    $(".welcome").show(1000);
});

$( "#in-modal-lang-btn" ).on("click",function() {
    $("#play-modal").css('display', 'none');
    $(".lang-modal").css('display', 'block');
});

$( "#in-modal-play-btn" ).on("click",function() {
    location.reload();
});

$("#in-modal-btn-school").on("click",function() {
    $("#play-modal").css('display', 'none');
    $("#lang-modal").css('display', 'none');
    $("#subject-modal").css('display', 'none');
    $(".info").show(1000);
    $("#game-at-school").show(1000); 
    $("#game-animals").hide(1000);
    $(".language-game-en").show(1000);
    $(".language-game-fr").show(1000);
});

$("#in-modal-btn-animals").on("click",function() {
    $("#play-modal").css('display', 'none');
    $("#lang-modal").css('display', 'none');
    $("#subject-modal").css('display', 'none');
    $(".info").show(1000);
    $("#game-animals").show(1000); 
    $("#game-at-school").hide(1000);
    $(".language-game-en").show(1000);
    $(".language-game-fr").show(1000);
});

});

