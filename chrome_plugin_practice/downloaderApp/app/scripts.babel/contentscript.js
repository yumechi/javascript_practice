'use strict';

$(function () {
    $('h4:last').after('<input type="button" id="slack_emoji_dl" class="btn btn_primary" value="Save all emoji">');
});

$(document).on('click', '#slack_emoji_dl', function () {
    
    $('html').html().split('\n').some(function(val, index) {
        if(!val.match(/data-original=\"(.*?)\"/)) {
            return false;
        }
        let url = val.match(/data-original=\"(.*?)\"/)[1];
        let fragments = url.split('/');
        let filename = fragments[fragments.length-2] + 
            '.' + fragments[fragments.length-1].split('.')[1];
        console.log(filename);
    });
});
