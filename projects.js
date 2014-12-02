if (Meteor.isClient) {
  Template.body.helpers({
    projects: [
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
        name: 'Retirement Age',
        picture: 'img/retirementage.png',
        link: 'http://erinpagemd.github.io/retirement_age/',
        repo: 'https://github.com/erinpagemd/retirement_age',
        stack: 'javascript, css, html, jquery',
        desc: 'dynamically add text based on specific criteria'
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
        name: 'Appchiever',
        picture: 'img/appchiever.png',
        link: 'http://appchiever.meteor.com',
        repo: 'https://github.com/erinpagemd/appchiever',
        stack: 'meteor.js, javascript',
        desc: 'Adaptation of meteor tutorial. High School students can build a list of their activities for college applications.'
      },

      {
        name: 'Nashviva',
        picture: 'img/colors.png',
        link: 'http://erinpagemd.github.io/colors/',
        repo: 'https://github.com/erinpagemd/colors',
        stack: 'javascript, css, html, jquery',
        desc: 'CSS calls using jquery'
      },

      {
        name: 'Codefornashville.org',
        picture: 'img/colors.png',
        link: 'http://erinpagemd.github.io/colors/',
        repo: 'https://github.com/erinpagemd/colors',
        stack: 'javascript, css, html, jquery',
        desc: 'CSS calls using jquery'
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
        name: 'Project Page',
        picture: 'img/colors.png',
        link: 'http://erinpagemd.github.io/colors/',
        repo: 'https://github.com/erinpagemd/colors',
        stack: 'javascript, css, html, jquery',
        desc: 'CSS calls using jquery'
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
