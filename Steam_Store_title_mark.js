// ==UserScript==
// @name        Steam_Store_title_mark
// @namespace   https://github.com/desc70865/Steam_Store_title_mark
// @icon        https://store.steampowered.com/favicon.ico
// @version     0.1
// @description mark language support & card_info with game title
// @author      desc_inno
// @match       https://store.steampowered.com/app/*
// @require     https://cdn.staticfile.org/jquery/1.12.4/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';
    var flag_schinese = $('.game_language_options')[0].innerText.match(/不支持/g) == null,
        flag_tchinese = $('.game_language_options')[0].innerText.match(/繁体中文/g) == null,
        flag_card = document.body.innerText.match(/Steam 集换式卡牌/g) == null,
        title = $('.apphub_AppName');
    if(flag_card == false){
        title[0].innerHTML = "📇 " + title[0].innerText
    }
    if(flag_schinese == true || flag_tchinese == false){
        title[0].innerHTML = "🀄️ " + title[0].innerText
    }
})();

// set https://store.steampowered.com/account/languagepreferences both simplified & traditional chinese before use
