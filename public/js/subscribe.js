function submitForm() {
  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  document.getElementById("loader").style.display = "block";
  var name = $("#name").val();
  var email = $("#email").val();
  var timestamp = new Date().toLocaleString();
  if (email === null || name === null) {
    document.getElementById("loader").style.display = "none";
    error_show("Please fill all the fields");
  } else {

    if (email.trim() === "" || name.trim() === "") {
      document.getElementById("loader").style.display = "none";
      error_show("Please fill all the fields");
    } else {
      var jqxhr = $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbxbtJ2g0bYY5iHs_IU1oP-wSGhTv3NanurgUNs_edYLZKgIwuc/exec',
        method: "GET",
        dataType: "json",
        data: {
          Name: name,
          Timestamp: timestamp,
          Email: email,
        }
      })
      .then(function(doRef) {
        document.getElementById("loader").style.display = "none";
        if (doRef["row"] == "already_subscribed") {
          error_show("You have already subscribed!");
        } else if (doRef["row"] == "Invalid") {
          error_show("Please provide valid Email Id!");
        } else {
          error_show("Thanks for subscribing!");
        }
        $("#name").val('');
        $("#email").val('');
      });
      //  var xmlhttp = new XMLHttpRequest();
      // xmlhttp.onreadystatechange = function() {
      //   if (this.readyState == 4 && this.status == 200) {
      //     var response = this.responseText;
      //     if (response == "done") {
      //       document.getElementById("loader").style.display = "none";
      //       error_show("Your response has been recorded!!");
      //       $("#name").val('');
      //       $("#email").val('');
      //       $('#institute').val('');
      //       $('#professional_status').val('');
      //
      //     } else {
      //       document.getElementById("loader").style.display = "none";
      //       //$(".alertSubscribeTop").html("Please try again");
      //       error_show("Please try again");
      //     }
      //   }
      // };
      // xmlhttp.open("GET", "sendMail.php?name=" + name + "&email=" + email + "&institute=" + institute + "&professional_status=" + professional_status, true);
      // xmlhttp.send();
    }
  }

  //console.log(fullname, gender, institute, courseofstudy, year, email_global, contact_number, twitter_id, facebook_id, instagram_id, sop, one, two, three, four, five, six);
}

function error_show(e) {
  var x = document.getElementById("snackbar");
  x.innerHTML = e;
  x.className = "show";
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000);
}
