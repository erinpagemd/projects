if (Meteor.isClient) {
  Template.body.helpers({
    projects: [
      {
        name: 'BattleSipps',
        picture: 'img/battlesipps.png',
        link: 'https://battlesipps.firebaseapp.com/',
        repo: 'https://github.com/brayhoward/battle-ship',
        stack: 'javascript, jquery, lodash, firebase, json, html, css, bootstrap',
        desc: '2-player battlehip game using a game object that communicates back and forth with firebase. Play on 2 computers. Paired programming exercise with Brandon Howard, Molly Black, and Dotun Olusoga for Front End Dev session.'
      },

      {
        name: 'Game Won',
        picture: 'img/game1.png',
        link: 'https://game-won.firebaseapp.com/?',
        repo: 'https://github.com/brayhoward/game1',
        stack: 'javascript, jquery, firebase, json, html, css, bootstrap',
        desc: 'Tic-Tac-Toe game using a game object that communicates back and forth with firebase. Paired programming exercise with Brandon Howard for Front End Dev session. Used ScreenHero for off-site collaboration.'
      },

      {
        name: 'Chismosas',
        picture: 'img/chismosas.png',
        link: 'http://erinpagemd.github.io/chismosas',
        repo: 'https://github.com/erinpagemd/chismosas',
        stack: 'javascript, jquery, firebase, json, html, css, bootstrap',
        desc: 'Messaging app with Firebase live reload. Bootstrap for minimal styling.'
      },

      {
        name: 'NerdTree',
        picture: 'img/nerdTree.png',
        link: 'http://erinpagemd.github.io/nerd-tree',
        repo: 'https://github.com/erinpagemd/nerd-tree',
        stack: 'javascript, lodash, jquery, firebase, json, html, css, bootstrap',
        desc: 'Basic CRUD app with login. Firebase login, create new account, and logout. Using Firebase requests used for retrieving, posting, deleting, and modifying data. Bootstrap for minimal styling.'
      },

      {
        name: 'HoneyDew',
        picture: 'img/toDoFB.png',
        link: 'http://erinpagemd.github.io/to-do/',
        repo: 'https://github.com/erinpagemd/to-do',
        stack: 'javascript, jquery, firebase, json, html, css, bootstrap, mocha, karma, chai, unit-testing',
        desc: 'Basic CRUD app with login. Firebase login, create new account, and logout. GET, POST, DELETE http requests. Bootstrap for minimal styling. Build script and more advanced config settings. Test suite with mocha, chai, and karma.'
      },

      {
        name: 'LittleBlackBook',
        picture: 'img/littleBlackBook.png',
        link: 'http://erinpagemd.github.io/little-black-book/',
        repo: 'https://github.com/erinpagemd/little-black-book',
        stack: 'javascript, jquery, firebase, json, html, css, foundation, mocha, chai, unit-testing',
        desc: 'Basic CRUD app with login. Firebase login, create new account, and logout. GET, POST, DELETE http requests. Foundation for minimal styling. First crack at logins and user flows. Light test suite with mocha and chai.'
      },

      {
        name: 'StockMarketApp',
        picture: 'img/stockMarketApp.png',
        link: 'http://higgintop.github.io/stockMarketApp/',
        repo: 'https://github.com/higgintop/stockMarketApp',
        stack: 'javascript, jquery, lodash, firebase, json, html, css, foundation',
        desc: 'v1.0.0 takes the user inputs of stock symbol and quantity, makes a get request to the markitondemand api and updates the dom. Next iteration is saving the portfolio to firebase. Made in NSS class with Allison Higginbotham.'
      },

      {

        name: 'ActualWeather',
        picture: 'img/push.png',
        link: 'https://github.com/erinpagemd/actual-weather',
        repo: 'https://github.com/erinpagemd/actual-weather',
        stack: 'javascript, npm, grunt, bower, lodash, ajax, html, jade, css, foundation, sass',
        desc: 'Writing a getJSON call in javascript without jquery. Practicing with AJAX. Appending to the DOM using javascript.'
      },

      {

        name: 'NashvilleRecycleCenters',
        picture: 'img/nash_recycle.png',
        link: 'https://github.com/erinpagemd/nash-recycle-centers',
        repo: 'https://github.com/erinpagemd/nash-recycle-centers',
        stack: 'javascript, npm, grunt, jquery, lodash, html, jade, css',
        desc: 'Use of the Nashville Open Data Portal. Writing an ajax call and appending to the DOM.'
      },

      {

        name: 'PushProduct',
        picture: 'img/push.png',
        link: 'http://erinpagemd.github.io/PushProduct/',
        repo: 'https://github.com/erinpagemd/PushProduct',
        stack: 'javascript, jquery, html, css, pure',
        desc: 'Pushing items into an empty array in javascript. Use of PureCSS framework, HTML-Form'
      },

      {
        name: 'SplitSum',
        picture: 'img/split.png',
        link: 'http://erinpagemd.github.io/SplitSum/',
        repo: 'https://github.com/erinpagemd/SplitSum',
        stack: 'javascript, jquery, css, html',
        desc: 'Splitting characters in an array and turning them into numbers using javascript. Styling with CSS includes radial-gradient and focus selectors.'
      },

      {
        name: 'Remake of Main Page',
        picture: 'img/main.png',
        link: 'http://erinpagemd.github.io/',
        repo: 'https://github.com/erinpagemd/erinpagemd.github.io',
        stack: 'HTML, CSS, Git',
        desc: 'CSS exercise: Copy a website theme. Used gradient and formating of containers.'
      },

      {
        name: 'Wordpress 2015 practice',
        picture: 'img/wp2015.png',
        link: 'http://erinpagemd.github.io/wordpress2015/',
        repo: 'https://github.com/erinpagemd/wordpress2015',
        stack: 'HTML, SCSS, Jade, CSS, Prepros, Git',
        desc: 'CSS exercise: Copy the Wordpress 2015 theme. Using Jade and SCSS compiled into HTML and CSS.'
      },

      {
        name: 'Stock Quote API',
        picture: 'img/stock.png',
        link: 'http://erinpagemd.github.io/stock-api/',
        repo: 'https://github.com/erinpagemd/stock-api',
        stack: 'javascript, jquery, html, css, MarkitOnDemand API',
        desc: 'Use of RESTful API to capture a stock quote, dynamically display the price. If the change in price is negative, the box will be red.'
      },

      {
        name: 'Catanator',
        picture: 'img/catanator.png',
        link: 'http://erinpagemd.github.io/catanator/',
        repo: 'https://github.com/erinpagemd/catanator',
        stack: 'phaser.io',
        desc: 'First dive into games! Adaptation of a phaser.io tutorial.'
      },

      {
        name: 'Appchiever',
        picture: 'img/appchiever.png',
        link: 'http://appchiever.meteor.com',
        repo: 'https://github.com/erinpagemd/appchiever',
        stack: 'meteor.js, javascript',
        desc: 'Adaptation of meteor tutorial. High School students can build a list of their activities for college applications.'
      },

      {
        name: 'NashViva',
        picture: 'img/nashviva.png',
        link: 'http://nashviva.codefornashville.org/',
        repo: 'https://github.com/code-for-nashville/nashviva',
        stack: 'css, html',
        desc: 'Created a website at HackNashville6 using the open data portal of Metro Nashville. Made in collaboration with other members of the Nashville Brigade. Contributed to CSS and HTML.'
      },

      {
        name: 'Retirement Age',
        picture: 'img/retirementage.png',
        link: 'http://erinpagemd.github.io/retirement_age/',
        repo: 'https://github.com/erinpagemd/retirement_age',
        stack: 'javascript, css, html, jquery',
        desc: 'dynamically add text based on specific criteria'
      },

      {
        name: 'Project Page',
        picture: 'img/projects.png',
        link: 'http://ep_projects.meteor.com/',
        repo: 'https://github.com/erinpagemd/projects',
        stack: 'meteor.js, javascript',
        desc: 'Meteor project from scratch! Displaying coding projects.'
      },

      {
        name: 'Javascript Calculator',
        picture: 'img/javascriptCalculator.png',
        link: 'http://erinpagemd.github.io/JavascriptCalculator/',
        repo: 'https://github.com/erinpagemd/JavascriptCalculator',
        stack: 'javascript, html, css',
        desc: 'Use of jquery and "this" in javascript'
      },

      {
        name: 'Colors',
        picture: 'img/colors.png',
        link: 'http://erinpagemd.github.io/colors/',
        repo: 'https://github.com/erinpagemd/colors',
        stack: 'javascript, css, html, jquery',
        desc: 'CSS calls using jquery'
      },

      {
        name: 'Pig Latin',
        picture: 'img/piglatin.png',
        link: 'http://erinpagemd.github.io/PigLatin/',
        repo: 'https://github.com/erinpagemd/PigLatin',
        stack: 'javascript, css, html, jquery',
        desc: 'Using a substring in javascript'
      },

      {
        name: 'Palindrome',
        picture: 'img/palindrome.png',
        link: 'http://erinpagemd.github.io/Palindrome/',
        repo: 'https://github.com/erinpagemd/Palindrome',
        stack: 'javascript, css, html, jquery',
        desc: 'String to array and back in javascript. Use of join and reverse.'
      },

      {
        name: 'To Do',
        picture: 'img/todo.png',
        link: 'http://erinpagemd_todos.meteor.com',
        repo: 'https://github.com/erinpagemd/meteortodo',
        stack: 'meteor.js, javascript',
        desc: 'Tutorial for meteor.js'
      },

      {
        name: 'Codefornashville.org',
        picture: 'img/codefornashville.png',
        link: 'http://www.codefornashville.org/',
        repo: 'https://github.com/code-for-nashville/code-for-nashville.github.io',
        stack: 'css, html, jekyll',
        desc: 'Collaborated on website for the Nashville Brigade.'
      },

      {
        name: 'jQuery Basics',
        picture: 'img/jquery.png',
        link: 'http://erinpagemd.github.io/jquery-basics/',
        repo: 'https://github.com/erinpagemd/jquery-basics',
        stack: 'jquery, javascript, css, skeleton css framework',
        desc: 'Manipulating CSS and DOM via jquery.'
      },

      {
        name: 'BankJS',
        picture: 'img/bank.png',
        link: 'http://erinpagemd.github.io/BankJS/',
        repo: 'https://github.com/erinpagemd/BankJS',
        stack: 'javascript, css, html',
        desc: 'Using conditionals in javascript.'
      }
    ]
  });

  Template.body.events({
    //some code here
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
