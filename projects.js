if (Meteor.isClient) {
  Template.body.helpers({
    projects: [
      {
        name: 'Javascript Calculator',
        picture: 'img/javascriptCalculator.png',
        link: 'http://erinpagemd.github.io/JavascriptCalculator/',
        repo: 'https://github.com/erinpagemd/JavascriptCalculator',
        stack: 'javascript',
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
        picture: 'img/colors.png',
        link: 'http://erinpagemd.github.io/colors/',
        repo: 'https://github.com/erinpagemd/colors',
        stack: 'javascript, css, html, jquery',
        desc: 'CSS calls using jquery'
      },

      {
        name: 'Retirement Age',
        picture: 'img/colors.png',
        link: 'http://erinpagemd.github.io/colors/',
        repo: 'https://github.com/erinpagemd/colors',
        stack: 'javascript, css, html, jquery',
        desc: 'CSS calls using jquery'
      },

      {
        name: 'Palindrome',
        picture: 'img/colors.png',
        link: 'http://erinpagemd.github.io/colors/',
        repo: 'https://github.com/erinpagemd/colors',
        stack: 'javascript, css, html, jquery',
        desc: 'CSS calls using jquery'
      },

      {
        name: 'To Do',
        picture: 'img/colors.png',
        link: 'http://erinpagemd.github.io/colors/',
        repo: 'https://github.com/erinpagemd/colors',
        stack: 'javascript, css, html, jquery',
        desc: 'CSS calls using jquery'
      },

      {
        name: 'Appchiever',
        picture: 'img/colors.png',
        link: 'http://erinpagemd.github.io/colors/',
        repo: 'https://github.com/erinpagemd/colors',
        stack: 'javascript, css, html, jquery',
        desc: 'CSS calls using jquery'
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
