var jqxhr = $.ajax({
    url: 'https://script.google.com/macros/s/AKfycby9LX-kvHZ0UQxNclETfwJJlmkoE3HJpiugwwSGCqYdsc4c5W_-/exec',
    method: "GET",
    dataType: "json"
  })
  .then(function(doRef) {
    var data = doRef["data"];
    var CAs = data.split("&&&&***&&&&");
    for(var i = 0; i < CAs.length; i++) {
      CAs[i] = CAs[i].split("&&&**&&&");
    }
    //console.log(CAs);
    for (var i = 0; i < CAs.length; i++) {
      if (CAs[i][1] == "" || CAs[i][1] == null) {
        CAs[i][1] = 0;
      } else {
        CAs[i][1] = parseInt(CAs[i][1], 10);
      }
    }
    CAs.sort(function(a,b) {
      return b[1]-a[1]
    });

    var position = 1;
    var index = 0;
    CAs[index].push(position);
    var prev = CAs[index][1];
    index = 1;
    var current = CAs[index][1];
    while (index < CAs.length) {
      while (index < CAs.length && current === prev) {
        CAs[index].push(position);
        index++;
        if (index < CAs.length) {
          current = CAs[index][1];
        }
      }
      if (index < CAs.length) {
        prev = CAs[index][1];
        CAs[index++].push(++position);
        if (index < CAs.length) {
          current = CAs[index][1];
        } else {
          break;
        }
      } else {
        break;
      }
    }

    for (var i = 0; i < CAs.length; i++) {
      //var codeID = "code" + (i+1).toString();
      //var pointsID = "points" + (i+1).toString();
      var tbody = document.getElementById("tbody");
      var row = document.createElement("tr");
      var cell1 = document.createElement("th");
      var cell2 = document.createElement("td");
      var cell3 = document.createElement("td");
      var cell1Text = document.createTextNode(CAs[i][2]);
      var cell2Text = document.createTextNode(CAs[i][0]);
      var cell3Text = document.createTextNode(CAs[i][1]);
      cell1.appendChild(cell1Text);
      cell2.appendChild(cell2Text);
      cell3.appendChild(cell3Text);
      row.appendChild(cell1);
      row.appendChild(cell2);
      row.appendChild(cell3);
      tbody.appendChild(row);
      //document.getElementById(codeID).innerHTML = CAs[i][0];
      //document.getElementById(pointsID).innerHTML = CAs[i][1];
    }

    document.getElementById("loading").style.display = "none";
    document.getElementById("heading").style.display = "block";
    document.getElementById("loaded").style.display = "block";
  });

  var myNav = document.getElementById('header');
  window.onscroll = function() {
    "use strict";

    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 777) {
      var nav = document.getElementById("hor-nav");
      if (nav.style.height < 70) {
        if (document.body.scrollTop >= 120 || document.documentElement.scrollTop >= 120) {
          $('.img-col input').attr('src', '/images/logo.svg');
          myNav.classList.add("scroll");
          myNav.classList.remove("no-scroll");
        } else {
          $('.img-col input').attr('src', '/images/logo_white.svg');
          myNav.classList.add("no-scroll");
          myNav.classList.remove("scroll");
        }
      } else {
        if (document.body.scrollTop >= 2 || document.documentElement.scrollTop >= 2) {
          $('.img-col input').attr('src', '/images/logo.svg');
          myNav.classList.add("scroll");
          myNav.classList.remove("no-scroll");
        } else {
          $('.img-col input').attr('src', '/images/logo_white.svg');
          myNav.classList.add("no-scroll");
          myNav.classList.remove("scroll");
        }
      }
    }
  };
