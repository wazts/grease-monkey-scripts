// ==UserScript==
// @name         Chat Clickable Images
// @namespace    http://roosterteeth.com/user/kazion
// @version      0.1
// @description  Make the images in chat clickable
// @author       Kyle Wagner
// @match        http://roosterteeth.com/group/sponsors
// @grant        none
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...

function wrapImages (jNode) {
    var img = jNode.find('img');
    img.wrap($('<a></a>').attr({href: img.attr('src'), target: '_blank'}));
}

waitForKeyElements ('div.chat-content', wrapImages);