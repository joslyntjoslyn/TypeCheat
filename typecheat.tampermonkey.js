// ==UserScript==
// @name         TypeCheat
// @namespace    https://github.com/MysteryBlokHed/TypeCheat
// @version      v1.0.0-beta.1
// @description  A JS script to cheat on certain online typing tests.
// @author       Adam Thompson-Sharpe
// @match        https://10fastfingers.com/*
// @match        https://www.ratatype.com/*
// @match        https://typingtestnow.com/*
// @grant        none
// ==/UserScript==
/*
 *    TypeCheat - A JS script to cheat on certain online typing tests
 *    Copyright (C) 2020  Adam Thompson-Sharpe
 *
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU General Public License as published by
 *    the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 *
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU General Public License for more details.
 *
 *    You should have received a copy of the GNU General Public License
 *    along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
var url=window.location.href.split("/")[2],site=-1,altMode=0;switch("10fastfingers.com"==url||"www.10fastfingers.com"==url?(console.log("~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite: 10FastFingers\n~~~~~~~~~~~~~~~~~~~"),site=0,"text"==window.location.href.split("/")[3]&&(altMode=1)):"typingtestnow.com"!=url&&"www.typingtestnow.com"!=url||(console.log("~~~~~~~~~~~~~~~~~~~\n TypeCheat Active! \nSite: TypingTestNow\n~~~~~~~~~~~~~~~~~~~"),site=2),site){case 0:for(var tText=document.getElementById("row1"),tWords=[],i=0;i<tText.children.length;i++)tWords.push(tText.children[i].innerText);var cWord=0,tField=null;0==altMode?tField=document.getElementById("inputfield"):1==altMode&&(tField=document.getElementById("text_typed")),setInterval(function(){""==tField.value&&(tField.value=tWords[cWord],cWord++)},10);break;case 2:var text=document.getElementsByClassName("sample-text")[0],words=[];for(i=0;i<text.children.length;i++)for(var j=0;j<text.children[i].children.length;j++)words.push(text.children[i].children[j].innerText);i=0;var field=document.getElementById("practice-input");setInterval(function(){" "!=field.value&&""!=field.value||(field.value=words[i],i++)})}