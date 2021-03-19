
$(document).ready(function () {

    $("#game-it").hide();
    $("#game-fr").hide();

    // choose language:
    $("#lang-button-fr").click
        (function () {
            $("#italian").hide(1000);
            $("#game-it").hide(1000);
            $("#french").show(1000);
            $("#game-fr").show(1000);
            $("#lang-button-fr").hide();
            $("#lang-button-it").show();
            
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
            });
// speech bubbles hover diplay french / italian versions
            $("#welcome-en").hover(
                function () {
                    $("#welcome-en").text("Andiamo a giocare a un gioco di coppie di abbinamento per imparare l'inglese");
                    $("#welcome-en").text("Allons jouer àun jeu de paires pour apprendre l'anglaise!");
                    $("#welcome-en").text("Let's learn English by playing a matching game!");
                });         
       

    // animation example - jquery

    // ref from codeopen.io https://codepen.io/urilee/pen/EEOyPr. (deleted, re-visit page to re-instate)


    // onclick subject choice action - flip then clik through to page:


    // choose avatar:

    // display language on chosen subject page:

    // spin subject button on hover:

})
