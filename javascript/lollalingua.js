$(document).ready(function () {

    chooseLanguage(); 

    $(".language-game-en").hide();
    $(".language-game-it").hide();
    $(".language-game-fr").hide();
    $(".info").hide();
    $("#welcome-it").hide();
    $("#welcome-fr").hide();
    $("#go-it").hide();
    $("#go-fr").hide();

    // stores the chosen lanugage on selection using the flag language button 
    $('.language-button').on("click",function() {
    var lang = this.dataset.lang;
    chooseLanguage(lang);
    });

    /* -----change language function --------*/

    function chooseLanguage(lang) {
        if  (lang === 'french') {
            $("#in-modal-btn-animals, #in-modal-btn-school").on("click",function() {
            $(".language-game-it").hide();
            $("#language-game-it").hide();
            $(".language-game-fr").show();
            $("#language-game-fr").show();
            $(".language-game-en").show();
            $("#language-game-en").show();
            });
            
        } else if (lang === 'italian') {
            $("#in-modal-btn-school, #in-modal-btn-animals").on("click",function() {
            $(".language-game-fr").hide();
            $("#language-game-fr").hide();
            $(".language-game-it").show();
            $("#language-game-it").show();
            $(".language-game-en").show();
            $("#language-game-en").show();
            });
            
            console.log("chooseLanguageit");
        } else if (lang === 'english') 
        setLocalStorage(lang);
        }
    
    /* -----store language in local storage inspiration from https://github.com/Wings30306/jokeheyndelscv/blob/master/assets/js/language.js--------*/
    function setLocalStorage(lang) {
        let userLang = {
        lang: lang
        };
        let languageChoice = JSON.stringify(userLang);
        localStorage.setItem('languageChoice', languageChoice);
    }

    /* -----retreive local storage on load --------*/

    function checkLocalStorage() {

    if ('languageChoice' in localStorage) {
        let languageChoice = localStorage.getItem('languageChoice');
        let userLang = JSON.parse(languageChoice);

        if (userLang.lang == 'french') {
            chooseLanguage('french');
        } else if (userLang.lang == 'italian') {
            chooseLanguage('italian');
        } else if (userLang.lang == 'english'){
            chooseLanguage('english');
        }
    }
}
checkLocalStorage();

// get how to play modal using jquery click listner on play button
$("#modal-play-btn").on("click",function() {
    $(".play-modal").css('display', 'block');
    $(".welcome-message").hide(1000);
    $(".welcome").hide(1000);
    $("#footer").hide(1000);
    });
// get language modal to make lanugage choice by pressing 'choose language' button
$("#modal-lang-btn").on("click",function() {
    $("#lang-modal").css('display', 'block');
    $(".welcome-message").hide(1000);
    $(".welcome").hide(1000);
    });

// get subject modal to make suject choice by pressing 'choose subject' button, but will be re-routed to choose language first if they have not already done so and an alert box will pop up. 
$("#modal-subject-btn").on("click",function() {
    alert("Please choose your language first!");
    $("#lang-modal").css('display', 'block');
    $(".welcome-message").hide(1000);
    $(".welcome").hide(1000);
    $("#game-over-modal").hide();
    });   

// initiates the selection process for starting play
$("#modal-start-play-btn").on("click",function() {
    $("#lang-modal").css('display', 'block');
    $(".welcome-message").hide();
    $(".welcome").hide();
    $(".welcome-section").hide();
    $("#footer").hide(1000);
    });  
    
// closes the modals
$(".close-btn").on("click",function() {
    
    $("#play-modal").css('display', 'none');
    $("#lang-modal").css('display', 'none');
    $("#subject-modal").css('display', 'none');
    $("#game-over-modal").css('display', 'none');
    $(".welcome-message").show(1000);
    $(".welcome").show(1000);
    $("#footer").show(1000);
});

// closes the game over modal and re-starts the game / reloads index
$(".close-btn-game-over").on("click",function() {
    location.reload();
});

// displays the language choice modal from within 
$( "#in-modal-lang-btn" ).on("click",function() {
    $("#play-modal").css('display', 'none');
    $(".lang-modal").css('display', 'block');
});

$(".language-button").on("click", function(){
    $("#lang-modal").css('display', 'none');
    $("#subject-modal").css('display', 'block');
});

// closes the game over modal and re-starts the game / reloads index
$( "#modal-play-again-btn" ).on("click",function() {
    location.reload();

});

// on subject choice, gameto match school items and scoring panel will be displayed 
$("#in-modal-btn-school").on("click",function() {
    $("#play-modal").css('display', 'none');
    $("#lang-modal").css('display', 'none');
    $("#subject-modal").css('display', 'none');
    $(".info").show(1000);
    $("#game-at-school").show(1000); 
    $("#game-animals").hide(1000);
});

// on subject choice, gameto match animals items and scoring panel will be displayed 
$("#in-modal-btn-animals").on("click",function() {
    $("#play-modal").css('display', 'none');
    $("#lang-modal").css('display', 'none');
    $("#subject-modal").css('display', 'none');
    $(".info").show(1000);
    $("#game-at-school").hide(1000);
    $("#game-animals").show(1000);
});
});
