
$(document).ready(function () {

    // speech bubbles hover diplay french / italian versions
    // choose language:
    $("#lang-button-fr").click
        (function () {
            $("#italian").hide(1000);
            $(".language-game-it").hide(1000);
            $("#french").show(1000);
            $(".language-game-fr").show(1000);
        });
    $()
    $("#lang-button-it").click
        (function () {
            $("#french").hide(1000);
            $(".language-game-fr").hide(1000);
            $("#italian").show(1000);
            $(".language-game-it").show(1000);

            });

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
