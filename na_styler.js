"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Jose Felix
   Date:   4.2.19

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
window.onload = setStyles;
function setStyles() {
      var styleNum = randInt(5);
      var fancy = document.createElement("link");
      fancy.setAttribute("rel", "stylesheet");
      fancy.setAttribute("id", "fancySheet");
      fancy.setAttribute("href", "na_style_" + styleNum + ".css");
      document.head.appendChild(fancy);

      // make the element figBox
      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);

      // for loop to populate the figure box
      for (var i = 0; i <= 4; i++) {
            // sheetIMG element creating an image looping through the alt num
            var sheetIMG = document.createElement("img");
            sheetIMG.setAttribute("src", "na_small_" + i + ".png");
            sheetIMG.setAttribute("alt", "na_style_" + i + ".css");
            // load different thumbnail images
            sheetIMG.onclick = function (e) {
                  fancy.setAttribute("href", e.target.alt);
            }
            figBox.appendChild(sheetIMG);
      }
      // embedded stylesheet
      var thumbStyles = document.createElement("style");
      document.head.appendChild(thumbStyles);

      // add these rules to the stylesheet
      document.styleSheets[document.styleSheets.length-1].insertRule(
            "figure#styleThumbs { \
                  position: absolute; \
                  left: 0px; \
                  bottom: 0px; \
            }", 0);
            document.styleSheets[document.styleSheets.length-1].insertRule(
                  "figure#styleThumbs img { \
                        outline: 1px solid black; \
                        cursor: pointer; \
                        opacity: 0.75; \
                  }", 1);
            document.styleSheets[document.styleSheets.length-1].insertRule(
                  "figure#styleThumbs img:hover { \
                        outline: 1px solid red; \
                        opacity: 1.0; \
                  }", 2);
}

// dont touch

function randInt(size) {
   return Math.floor(size*Math.random());
}