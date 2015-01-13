if (Meteor.isClient) {
  Template.body.helpers({
    projects: [
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
        stack: 'jquery, javascript, css',
        desc: 'Manipulating css via jquery'
      },

      {
        name: 'BankJS',
        picture: 'img/bank.png',
        link: 'http://erinpagemd.github.io/BankJS/',
        repo: 'https://github.com/erinpagemd/BankJS',
        stack: 'javascript, css, html',
        desc: 'Using conditionals in javascript.'
      },

      {
        name: 'PushProduct',
        picture: 'img/push.png',
        link: 'http://erinpagemd.github.io/PushProduct/',
        repo: 'https://github.com/erinpagemd/PushProduct',
        stack: 'javascript, jquery, html, css',
        desc: 'Pushing items into an empty array in javascript.'
      },

      {
        name: 'SplitSum',
        picture: 'img/split.png',
        link: 'http://erinpagemd.github.io/SplitSum/',
        repo: 'https://github.com/erinpagemd/SplitSum',
        stack: 'javascript, jquery, css, html',
        desc: 'Splitting characters in an array and turning them into numbers using javascript.'
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
