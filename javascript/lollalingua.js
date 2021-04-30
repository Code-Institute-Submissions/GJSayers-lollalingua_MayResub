
$(document).ready(function () {

   /* chooseLanguage(); */

    $(".language-game-en").hide();
    $(".language-game-it").hide();
    $(".language-game-fr").hide();
    $(".info").hide();
    $("#welcome-it").hide();
    $("#welcome-fr").hide();
    $("#go-it").hide();
    $("#go-fr").hide();


 /*efforts at language storage 

    document.cookie = "language=english";

    $('.language-button').on("click",setCookie); 
    console.log("lang button click");
    setCookie();

    function setCookie(language, languageChoice) {

    if ($(".language-button").hasClass(".french")) {
        languageChoice = "french";
        //expiry = (time() + (60*60*24*n));
        document.cookie = `${language}=${languageChoice}`;
    } else if ($(".language-button").hasClass('english')){
        languageChoice = "english";
        //expiry = (time() + (60*60*24*n));
        document.cookie = `${language}=${languageChoice}`;
    } else if ($(".language-button").hasClass('italian')){
        languageChoice = "italian";
        //expiry = (time() + (60*60*24*n));
        document.cookie = `${language}=${languageChoice}`;

        }
        console.log("cookie");
    };

    
    getCookie ();

    function getCookie (language) {
        var name = language + "=";
        var ca = document.cookie.split(";");
        for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
    
       //thing that happens if language is chosen
    function chooseLanguage() { 
        var chosenLanguage = getCookie("language");
        if (chosenLanguage !== "") {
            console.log(chosenLanguage);
        
            if (chosenLanguage === "italian") {
            $(".language-game-fr").hide();
            $("#langauge-game-fr").hide();
        } else if (chosenLanguage === "french") {
            $(".language-game-it").hide();
            $("#langauge-game-it").hide();
        } else if (chosenLanguage === "english") {
            $(".language-game-fr").hide();
            $("#langauge-game-fr").hide();
            }
        }
    };

    */

    /* -----language variables --------*/

    //const french = $(".french");
    //const english = $(".english");
    //const italian = $(".italian");
   // const langButton = $(".language-button");
    

    /* -----language event listener --------*/

    
    
    
    $('.language-button').on("click",(event) => {
    let lang = event.target.dataset.lang;
    chooseLanguage(lang);
    console.log("lang button click");

    });

    /* -----change language function --------*/

    function chooseLanguage(lang) {

        if  (lang == 'french') {
            
            setLocalStorage(lang);
        
        } else if (lang == 'italian') {
            
            setLocalStorage(lang);
            
        
        } else if (lang == 'english') {
            
            setLocalStorage(lang);

        }
        console.log("chooseLanguage");
    }
    /* -----store language in local storage --------*/
    function setLocalStorage(lang) {
        let userLang = {
        lang: lang
        };

    let languageChoice = JSON.stringify(userLang);
    localStorage.setItem('languageChoice', languageChoice);
}

    /* -----retreive local storage on load --------*/

    function checkLocalStorage(_lang) {

    if ('languageChoice' in localStorage) {
        let languageChoice = localStorage.getItem('languageChoice');
        let userLang = JSON.parse(languageChoice);

        if (userLang.lang == 'french') {
            chooseLanguage('french');
        } else if (userLang.lang == 'italian') {
            chooseLanguage('italian');
        }
        else {
            chooseLanguage('english');
        }
    }
}
checkLocalStorage();


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
    //location.reload();
    $(".welcome-message").show(1000);
    $(".welcome").show(1000);
});

$( "#in-modal-lang-btn" ).on("click",function() {
    $("#play-modal").css('display', 'none');
    $(".lang-modal").css('display', 'block');
});

$( "#in-modal-play-btn" ).on("click",function() {
    //location.reload();
});

$("#in-modal-btn-school").on("click",function() {
    $("#play-modal").css('display', 'none');
    $("#lang-modal").css('display', 'none');
    $("#subject-modal").css('display', 'none');
    $(".info").show(1000);
    $("#game-at-school").show(1000); 
    $("#game-animals").hide(1000);
});

$("#in-modal-btn-animals").on("click",function() {
    $("#play-modal").css('display', 'none');
    $("#lang-modal").css('display', 'none');
    $("#subject-modal").css('display', 'none');
    $(".info").show(1000);
    $("#game-animals").show(1000); 
    $("#game-at-school").hide(1000);
});

});

