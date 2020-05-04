/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var quien = who[Math.round(Math.random() * (who.length - 1))];
  var que = what[Math.round(Math.random() * (what.length - 1))];
  var cuando = when[Math.round(Math.random() * (when.length - 1))];

  document.getElementById("excuse").innerHTML =
    "<p>" + quien + " " + que + " " + cuando + ".</p>";
};
