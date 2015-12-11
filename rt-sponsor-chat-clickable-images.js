// ==UserScript==
// @name         Chat Clickable Images
// @namespace    http://roosterteeth.com/user/kazion
// @version      0.1
// @description  Make the images in chat clickable
// @author       Kyle Wagner
// @match        http://roosterteeth.com/group/sponsors
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

// Your code here...
var img = $('div.chat-content').find('img');
img.wrap($('<a></a>').attr({href: img.attr('src'), target: '_blank'}));