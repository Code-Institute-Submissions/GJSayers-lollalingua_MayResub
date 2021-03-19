# Gemma Sayers Lollalingua Project 
---

A Langauages based memory game site designed to provide free learning to children and also to promote tuition availability. 

View the live project []()

View the repository in GitHub []()

![]()

## Contents 
---
* UX
  * Project Goals & Objectives 
  * User Goals
  * Stakeholder Goals
  * User Requirements and Expectations 
  * Design choices
    * Layout & Wireframes
    * Colours
    * Icons
    * Fonts

* Technologies 
  * Languages
  * Libraries

* Features
  * Included in current deployment
  * Future implementations

* Testing 
  *  Development testing 
  *  Design edits
  *  Pre-Deployment validation testing
  *  Peer-code review & mentor feedback 
  *  Post-Deployment Results

* Bugs
  *  Development Bug & Fixes
  *  Pre-Deployment Bugs & Fixes
  
* Post-Deployment / Unresolved Bugs

* Deployment 
  * Method
  
* Credits

# UX #
---
### Project Goals & Objectives 
---
* To provide a free memory game site that serves to;
  1) **teach** the user basic language skills through memory learning.
  2) **serve** instructions to the user about in their mother tongue.  
  3) **give a fun learning experience** to the user.

### User Goals 
---
1) As a **Potential player of the game**, I want to;
   1) Easily **engage with and receive feedback from interaction with the game** to feel comfortable with trying to learn a new language, and be encouraged along the way.  
   2) Easily **navigate instructions on how to play in the mother tongue**.
   3) Keep **track of progress** through a leaderboard, on-page scoring or similar. 
   


### Stakeholder Goals 
---
* To lead the Parental user to;
  1) To **provide a free game** with the potential for future development into a paid progressive learning app. 
  

### User Requirements and Expectations 
---
1) Responsive design for accessibility across a range of devices.
2) Minimal design for easy navigation.
3) Easy to contact Gemma directly or through social media links.

### Design choices
---
    * Layout & Wireframes
    1) I used [Balsamiq](https://balsamiq.com) was used to create, save and export my wireframes.  My final layout differs from my initial wireframes as ulimately as a game the initial layout and choices were to complex and as well as impacting UX were not practical. 
     
    * Colours
    1) I researched which colours create a positive emoitional response for learning and found that  [Shiftelearning](https://www.shiftelearning.com/blog/how-do-colors-influence-learning) was really helpful to guide me in the right colour choices, and recommended greens for concentration, blues for productivity and orange for mood lifting. 
    2) I wanted to see how these colours could translate into a softer palette and found ispiration for my colour theme on [Canva](https://www.canva.com/learn/color-trends/)
    3) I then used [colourmind.io](http://colormind.io/) to put my colours into a pallet for consistent use on the website.
    * Icons / Imagery
    1) I wanted fun & friendly icons and imagery - I used shutterstock to source these - details in credits. 
    * Fonts
    1) I wanted a chunky yet freindly font and decided to use Paytone across the whole site for consistency from [Google Fonts](https://fonts.google.com/) and sans serif as a fallback. 

    ### Technologies Used
---
  * Languages;
    *  [HTML5](https://en.wikipedia.org/wiki/HTML5)
    *  [CSS3](https://en.wikipedia.org/wiki/CSS)
    *. [JavaScript](https://www.javascript.com/)
  * Libraries, Frameworks & Resources;
    
    *  [Bootstrap 4.5.3](https://getbootstrap.com/docs/4.5/getting-started/introduction/) was used 
    *  [Hover.css](https://ianlunn.github.io/Hover/) I used hover to make elements more interactive
    *  [Google Fonts](https://fonts.google.com/) I used Paytone as the font for the whole site
    *  [Font Awesome](https://fontawesome.com/) Font awesome is where I sourced all the icons for the site
    *  [jQuery](https://jquery.com/) is used as a script to enable many of the    click events as well as adding and removing classes within functions
    *  [GitHub](https://github.com/) is used to file the repository
    *  [GitHub Pages](https://pages.github.com/) was used to deploy the site
    *  [GitPod](https://gitpod.io) was used for development and version control
    *  [Balsamiq ](https://balsamiq.com) was used to create, save and export my wireframes
    *  [Colourmind](https://Colourmind.io) was used to put together my colour pallet, using the inspo images I sourced from;
    * [Canva](https://www.canva.com/learn/color-trends/) was used to research a way to translate learning colour trends
    *  [Google Dev Tools](https://developers.google.com/web/tools/chrome-devtools) has been invaluable for solving issues and bugs and testing responsiveness. 
    *  [Techsini](https://techsini.com/multi-mockup/index.php) Was used to create the mockup images. 

### Features
---
* Included in current deployment;
  * a language selector for French and Italian users.
  * a language-based memory card game with different decks depending on which language you want to use.
  * a score counter. 
  * a countdown timer. 
* Future implementations; 
  * I would like to add the option for the user to assign an avatar
  * I would like to add further language options
  * I would like to add a languages general knowledge section

### Bugs
---
  *  Development Bug & Fixes
  1) Problem seeing active flip cards on click even though was sure script was correct - Google dev tools errored showing 'Uncaught reference error: $ is not defined'
   - Fix -- Add jquery reference script to Animals html file to define $ in scripts.js 
  2) Issue with background size & location.  Initial size of background caused failed loading of page, before discovering it was also in the wrong location - general styling rules rather than in the body.  Researched best sizes and re-sized image to 1920 x 1080 pixels. 
  3) problem with using jquery to try and identify a first and second card when allowing flipping.  
  4) decided that needed a different design for the back of each different language so as not to frustrat the user. 
  5) tried to add a match-card img class to use in js function, but two images seem to be the only possibility. 
  6) issue with hidden non-uniform card in the English card container set. 
  *  Pre-Deployment Bugs & Fixes


### Post-Deployment / Unresolved Bugs
---
 1) Major issue with cards not clicking on mobile devices - multiple efforts to fix this bug including check and adding extra webkits, adding touchstart and whilst this does remain un-resolved, the game is functional in dev tools. 

  ### Deployment 

---
#### GitHub Pages

This project is deployed on GitHub Pages using the following method;
1) Log in to GitHub Pages and click on 'repositories'
2) Find the correct repository ([repository](https://github.com/GJSayers/G-Sayers-Bio) that you want to pulish to pages. 
3) Go to settings from within the repository. 
4) Scroll quite far down the page to find the GitHub Pages section. 
5) Under source, there are three buttons select the branch button (at time of writing the first button of the three) and choose 'Master'. 
6) Once the page has refreshed (it can take a while) when you scroll back down you will see a green bar with a tick showing that your site is published. 

#### Forking the GitHub repository

To make a copy of the repository, which may be necessary if you wish to make changes without affecting the original using this method;
1) Ensure you are logged in to GitHub
2) The Fork button is on the top right of the page, above settings and below your github icon.  Click on it to make a copy of the original. 

### Credits
---
* Content - All written content is created by the developer. 
* Code - For the card flipping, I amended code by Marina Ferreira on this tutorial posted on [Medium] (https://medium.com/free-code-camp/vanilla-javascript-tutorial-build-a-memory-game-in-30-minutes-e542c4447eae) 
* The images are sourced from Shutterstock 
   * Flag images - Royalty-free stock illustration ID: 1760263661
                 - Royalty-free stock illustration ID: 1740852488
                 - Royalty-free stock illustration ID: 1663873066 by [Julia August](https://www.shutterstock.com/it/g/JuliaLeto)
   * Stars - Royalty-free stock vector image ID: 400731628 by [KSStar](https://www.shutterstock.com/it/g/K3Star)
   * Animals - Royalty-free stock vector image ID: 783342166 by [Biscuit Design](https://www.shutterstock.com/it/g/biscotto)
   * At School - Royalty-free stock illustration ID: 294169949 by [NextMarsMedia](https://www.shutterstock.com/it/g/NextMars)
   * Cats - Royalty-free stock illustration ID: 1911434692 by [Vector Up] (https://www.shutterstock.com/it/g/hellolittleboy)


### Acknowledgements
--- 
* Thank you to my mentor Gurjot Singh for advice and guidance since I started. 
* Thank you to the tutor team at Code Institute 