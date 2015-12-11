// ==UserScript==
// @name         Sponsor Chat Highlight Reply
// @namespace    http://roosterteeth.com/user/kazion
// @version      0.1
// @description  When you have a reply directed at you, have it highlighted
// @author       Kyle Wagner
// @match        http://roosterteeth.com/group/sponsors
// @grant       GM_addStyle
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==
/* jshint -W097 */
'use strict';

/* --- CHANGE COLOR HERE --- */

var backgroundColor = '#FFE7EB' // A light red color

/* --- END COLOR CHANGE */

// --- Here be dragons.
var username = $('div#profile-menu-toggle').find('p.username>a').text().trim().toLowerCase();

function highlightReply (jNode) {
    /* --- CHANGE COLOR HERE */

    var str = jNode.text();
    var patt1 = /@[a-zA-Z0-9]+/g;
    var result = str.match(patt1);

    if (result == null) {
       return;
    }
    var highlight = false;
    for (i = 0; i < result.length; i++) {
        var user = result[i].replace('@', '').toLowerCase();
        if (user === username) {
            highlight = true;
        }
    }
    
    if (highlight) {
        var chatLine = jNode.closest('div.chat-sent-message');
        if (chatLine) {
            chatLine.css("background-color", backgroundColor);
        }
        
    }
        

}

waitForKeyElements ('div.chat-content', highlightReply);