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
        name: 'Colors'
      },

      {
        name: 'Pig Latin'
      },

      {
        name: 'Retirement Age'
      },

      {
        name: 'Palindrome'
      },

      {
        name: 'To Do'
      },

      {
        name: 'Appchiever'
      },

      {
        name: 'Nashviva'
      },

      {
        name: 'Codefornashville.org'
      },

      {
        name: 'Catanator'
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
