Wrapper package for jquery.cookiebar.js
Use as directed here: http://www.primebox.co.uk/projects/jquery-cookiebar/

TL;DR:
Init:
``$(document).ready(function(){
   $.cookieBar();
 });``

Pass a settings object with these props:
message: 'We use cookies to track usage and preferences',

 acceptButton: true,
 
 acceptText: 'I Understand',
 
 declineButton: false,
 
 declineText: 'Disable Cookies',
 
 policyButton: true,
 
 policyText: 'Privacy Policy',
 
 policyURL: '/privacy-policy/',
 
 autoEnable: true,
 
 acceptOnContinue: false,
 
 expireDays: 365,
 
 forceShow: false,
 
 effect: 'slide',
 
 element: 'body',
 
 append: false,
 
 fixed: false,
 
 bottom: false,
 
 zindex: '',
 
 redirect: '/',
 
 domain: 'www.example.com',
 
 referrer: 'www.example.com'`# meteor-jquery-cookiebar
