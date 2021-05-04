# Gemma Sayers Lollalingua Project 
---

A Langauages based memory game site designed to provide free fun learning to children. 

View the live project [Lollalingua](https://gjsayers.github.io/lollalingua/)

View the repository in GitHub [Lollalingua](https://github.com/GJSayers/lollalingua)

![Screenshot here](assets/images/screenshots)

## Contents 
---
* UX
    * [Project Goals & Objectives](### Project Goals & Objectives) 
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
  * Development Bug & Fixes
  * Post-Deployment / Unresolved Bugs

* Deployment 
  * Method
  
* Credits

# UX #
---
### Project Goals & Objectives 
---
#### To provide a free memory game site that serves to;
1) **Teach** the user basic language skills through memory learning.
2) **Give a fun learning experience** to the user. 
3) **Give feedback to the user** throughout the game by keeping track of **matching pairs**  
4) **Give a summary of play** to the user at the end of the game with **final score** and **turns taken**

### User Goals 
---
#### As a **Potential player of the game**, I want to;
1) Easily **engage with and receive feedback from interaction with the game** to feel comfortable with trying to learn a new language, and be encouraged along the way.  
2) Keep **track of progress** through a leaderboard, on-page scoring or similar. 



### Stakeholder Goals 
---
#### To Provide a free language learning game;
1) To **provide a free game** with the potential for future development into a paid progressive learning app. 
  

### User Requirements and Expectations 
---
1) Responsive design for accessibility across a range of devices, with **primary focus on mobile devices** for quick and easy play access. 
2) Minimal design for easy navigation.
3) A clean and simple design that is **pleasant to interact with** and engaging with **bright colours** 

### Design choices
---
* Layout & Wireframes
1) I used [Balsamiq](https://balsamiq.com) to create, save and export my wireframes.  My final layout differs from my initial wireframes as ulimately as a game the initial layout and choices were to complex and as well as impacting UX were not practical. 
    original wireframes are [here](/workspace/lollalingua/design/wireframes)
     
* Colours
1) I researched which colours create a positive emoitional response for learning and found that  [Shiftelearning](https://www.shiftelearning.com/blog/how-do-colors-influence-learning) was really helpful to guide me in the right colour choices, and recommended greens for concentration, blues for productivity and orange for mood lifting. I narrowed doen the priginal selection to greens and a corally orange in with transparency applied to ensure the colours were not too over-whelming. 
2) I wanted to see how these colours could translate into a softer palette and found ispiration for my colour theme on [Canva](https://www.canva.com/learn/color-trends/)
3) I then used [colourmind.io](http://colormind.io/) to put my colours into a pallet for consistent use on the website.
* Icons / Imagery
1) I wanted fun & friendly icons and imagery - I used shutterstock to source images of animals and school items and also the flag imagery used which helps the user to navigate the cards whilst in play as well as smaller versions to make the language choice - details in credits. 
* Fonts
1) I wanted a chunky yet freindly font and decided to use Paytone across the whole site for consistency from [Google Fonts](https://fonts.google.com/) and sans serif as a fallback. 

### Technologies Used
---
#### Languages;
*  [HTML5](https://en.wikipedia.org/wiki/HTML5)
*  [CSS3](https://en.wikipedia.org/wiki/CSS)
*  [JavaScript](https://www.javascript.com/)
 
#### Libraries, Frameworks & Resources;
*  [Bootstrap 4.5.3](https://getbootstrap.com/docs/4.5/getting-started/introduction/) was used as a framework to give structure to the layout. 
*  [Hover.css](https://ianlunn.github.io/Hover/) I used hover to make buttons more interactive
*  [Google Fonts](https://fonts.google.com/) I used Paytone as the font for the whole site
*  [Font Awesome](https://fontawesome.com/) Font awesome is where I sourced all the icons for the site
*  [jQuery](https://jquery.com/) is used as a script to enable many of the click events as well as adding and removing lanugage classes within functions and displaying and hiding the modals. 
*  [GitHub](https://github.com/) is used to file the repository
*  [GitHub Pages](https://pages.github.com/) was used to deploy the site
*  [GitPod](https://gitpod.io) was used for development and version control
*  [Balsamiq ](https://balsamiq.com) was used to create, save and export my wireframes
*  [Colourmind](https://Colourmind.io) was used to put together my colour pallet, using the inspo images I sourced from;
* [Canva](https://www.canva.com/learn/color-trends/) was used to research a way to translate learning colour trends
*  [Google Dev Tools](https://developers.google.com/web/tools/chrome-devtools) has been invaluable for solving issues and bugs and testing responsiveness. Particularly by adding console logs to my Javascripts and reading the console to see at which point the functions are being actioned. 
*  [Techsini](https://techsini.com/multi-mockup/index.php) Was used to create the mockup images. 

### Features
---
#### Included in current deployment;
* A language selector for French and Italian users.  The language selector uses a local storage function, to enable the user to remain using the same choice until page-reload.  I wanted for the user to be able to leave the site and come back and still have the choice set, but without a backend to persist the data this is not possible using local storage.  This is something I would look to implement in the future. 
* A language-based memory card game with different decks depending on which language you want to use.  If the user selects the Italian language choice, only the italian and English decks will show, if the French deck is chosen, only the English and French decks will show - This is built by using a function to check the stored langauge to decide which elements to display.  
It has been very challenging to get the correct function to enable the user to only click one card from each deck - there have been many attempts at this. The solution finally was.. 
* A score counter.  I wanted the core counter to be fun and visaul for a potentially your learner, so intead of just displaying the number of pairs matched, the user gains stars, which are appended using a scorecounter function. 
* A countdown timer.  The countdown timer initiates on the first card click and counts down from 60 seconds until time's up - a game-over modal is then displayed with a different message depending if the user mathced all the pairs or only scored some. 
* Future implementations; 
* I would like to add the option for the user to assign an avatar and log their score on a leader board - This will be possible with the addition of back-end functionality to persist the data. 
* I would like to add further difficulty levels and different suject choices, to make the game progressive. 
* I would like to add a languages general knowledge section to make the site more informative and keep the user engaged for longer. 
* I would like to add sounds, and would have liked to have included these in the first implementation, but due to the board-freezing bug this was not possible within the time scale. 
* I would have like to have included JS email, but again due to a lot of time on de-bugging this was not possible. 

### Testing 
---
####  Development & Pre-Deployment validation testing
Throughout development, the site has been tested using the following tools;
1)[Jigsaw W3 CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input)
2)[W3 Mark-up Validator](https://validator.w3.org/css) and 
3)[JSHINT](https://jshint.com/) as well as on 
4)[Google Chome dev tools](https://developer.chrome.com/docs/devtools/)

##### Design edits
* Design edits made were fairly significant.
1) The calls to action for the initial load of the page needed to be simplified and the layout pared back for a more simplified way to interact with the site.  
Instead of cards on the inital load page, I introduced buttons for How to Play, Choose Language, Choose Subject and Play Game.  
2) I decised for ease of use, it was better UX to have the game on one index page rather than leading to other pages, so I implemented the use of modals, triggered by the buttons and routing the user to game play. 
3) I realised that the inital wireframe set was not truly mobile-first, and I wanted to make the design more compact to be easily accessible on mobile devices - This also led to the paring back of the colour scheme. 



#### User-Goal testing
---
#####  Peer-code review 
The project was submitted to PeerCodeReview channel on the Code Institute's slack - Here it was identified that a bug that I thought has been fixed had mutated into another verion of the bug, forcing the user to choose two cards on the same language board after a matching pair occurred.  

##### Project Goals & Objectives 
---
* To provide a free memory game site that serves to;
1) **teach** the user basic language skills through memory learning. 
* The user is able to compare French and English or Italian and English names for animals or school items depending on game subject choice ✅ 
2) **give a fun learning experience** to the user. 
* The user gets encoraging feedback and registers acheivement by a fun star-styled scoring system.✅
* The user gets a fun spinning match effect on the matched pairs ✅
* There is excitement from having a countdown timer  ✅
3) **give feedback to the user** throughout the game by keeping track of **matching pairs** 
* Matching pairs are appended as a stars image for each matching pair in the info bar  ✅
* Total number of matching pairs is given in the Game-Over modal  ✅ 
4) **give a summary of play** to the user at the end of the game with **final score** and **turns taken**
* Game-Over modal contains the final score and the turns taken - There is a different message for whether the user has matched all pairs or only matched some. ✅

##### User Goals 
---
* As a **Potential player of the game**, I want to;
1) Easily **engage with and receive feedback from interaction with the game** to feel comfortable with trying to learn a new language, and be encouraged along the way.  
* There are multiple interactions on the site;
* choices of which subject to play ✅
* flipping cards to display the potential pairs ✅
* info panel to give feeback on score,turn and countdown timer status ✅
* game-over modal to give feedback on the final outcome of the round played with option to start again ✅ 
2) Keep **track of progress** through a leaderboard, on-page scoring or similar. ✅
* Progress is tracked in the info panel to give feeback on score, turns and countdown timer status ✅


##### Stakeholder Goals 
---
##### To Provide a free language learning game;
1) To **provide a free game** with the potential for future development into a paid progressive learning app. 
* The game has been created and is functional with the opportunity for future development. ✅

##### User Requirements and Expectations 
---
1) Responsive design for accessibility across a range of devices, with **primary focus on mobile devices** for quick and easy play access. 
* The game has been thoroughly tested for mobile use and plenty of de-bugging has gone into ensuring that the game is functional across mobile devices. ✅
2) Minimal design for easy navigation.
* The game design has been simplified throughout the development process and condensed onto a single page with the use of buttons and modals to guide the user journey. ✅ 
* Leaving only clear, clean calls-to action and minimised content for a simplified experience. ✅ 
3) A clean and simple design that is **pleasant to interact with** and engaging with **bright colours** 
* Now that all remaining bugs are resolved, the game envokes a pleasant user experience. ✅
* The user is prevented from choosing two cards from the same language and is made aware of the differences between the boards by the use of flag imagery. ✅ 
* All call to action buttons are in the green shade chosen in the initial colour pallet and include hover for ease of use.  The shade of green was lightened upon alert from the lighthouse testing that the contrast was not strong enough. ✅
* The player is kept up to date of the progress of the scoring, turns and time  in the info board ✅
* In order for the game to function correctly, the user must choose a language, the user is subtly guided to do so, apart from one occasion on the choost subject where an alert is issued and the user is re-directed to choose a language.  The reason for retaining the button is for future intention to persist data in the back end / a quicker future rout for the user.  ✅

#### Devices & Browser Testing  
---
The live project has been tested by friends, family and myself on the following devices:
* Samsung A20e 
* Dell laptop (model unknown)
* Apple Iphone 11 plus
* Apple Iphone 8 plus
* Apple Iphone 11 (standard size)
* Apple Iphone SE 
* Apple Ipad Pro 

* The live project has been tested predominantly on Chrome and Safari as these were the browsers of choice on the mobile devices. 
The phone usage (all devices)was initially a huge issue as the card flip activation was not working correctly - This was solved eventually and is detailed below in bugs section. 

*  Post-Deployment Results
Towards the later stages of development and pre-submission, tests on the above-mentioned tools have been made and saved in a [testing folder](testing).

### Bugs
---
####  Development Bug & Fixes
1) **Problem seeing active flip cards on click** even though was sure script was correct - Google dev tools errored showing 'Uncaught reference error: $ is not defined'
**Fix** Add jquery reference script to Animals html file to define $ in scripts.js 
2) **Issue with background size & location.**  Initial size of background caused failed loading of page, before discovering it was also in the wrong location - general styling rules rather than in the body.  Researched best sizes and re-sized image to 1920 x 1080 pixels.
**Fix** Discard background image to save on loading time. 
3) **Problem with using jquery to try and identify a first and second card each from a different deck when allowing flipping**  This bug took many hours to fix, and there were a combinaton of items that contributed to the final fix;
 * Creating a simplified function to **clear the cards in play** was essential to **take the board out of freeze funtion** 
 * **Finding the correct positioning** for this function throughout the stages of play. 
 * **Identifying areas to include a time-out function** was crucial, as I identifies in dev tools that in a number of cases functions were being actioned sooner than they were being called. 
 * **Editing and testing multiple different timing options** concerning the set time-out was the final peice of the puzzle. 

### Post-Deployment / Unresolved Bugs
---
1) Major issue with cards not clicking on mobile devices - despite adding webkits.  It was very challenging to get to the bottom of this, but in the end the problem was solved by looking at webkits in use on similar games **Fix** add webkit-backface-visibility: hidden; this was a property that had gone under my radar in terms of webkits.  The flipping function is now fully functional on the mobile devices listed in device and browser testing.  The game where I found the necessary webkits is a Pokemon card flipping game was created by fellow student Kiran Satyarthy repository [epository](https://github.com/Kiran6248/MS2-PokemonGo)
2) At time of initial deployment 

### Deployment 

---
#### GitHub Pages

This project is deployed on GitHub Pages using the following method;
1) Log in to GitHub Pages and click on 'repositories'
2) Find the correct repository [repository](https://github.com/GJSayers/G-Sayers-Bio) that you want to pulish to pages. 
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


### Acknowledgements
--- 
* A huge thank you to the tutor team at CodeInstitute for their support in the marathon bug fix that was the freezing card deck! 
* Thank you to my mentor Gurjot Singh for advice and guidance since I started, and always bringing me back to the logic. 
* Thank you very much to Quinn and Francesca in [SlackChannel](https://app.slack.com/client/T0L30B202/C0L316Z96) for feedback in the code review. 
