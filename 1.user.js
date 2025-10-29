// ==UserScript==
// @name Менюшка для Донов
// @namespace https://www.bestmafia.com/
// @version 1.0
// @description Автозапуск дуэльного меню для мафии
// @author Винни Пух
// @match http://www.mafia-rules.net/*
// @match https://www.mafia-rules.net/*
// @icon https://bestmafiastat.ru/favicon.ico
// @grant none
// ==/UserScript==

(function() {
    'use strict';
    if(typeof (my_id) != "undefined"){
        $.getScript('https://bestmafiastat.ru/menu-mirror/main.js');
    }
})();
