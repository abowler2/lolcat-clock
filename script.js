var time = new Date().getHours();
var messageText;
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 18; // 6PM
var napTime = lunchTime + 2; // 2PM

var updateClock = function() {
  var timeEventJS = document.getElementById('timeEvent');
  var lolcatImage = document.getElementById('lolcat');
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

  if (time == partyTime){
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
    messageText = "IZ PARTEE TIME!!";
  } else if (time == napTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
    messageText = "IZ NAP TIME…";
  } else if (time == lunchTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
    messageText = "IZ NOM NOM NOM TIME!!";
  } else if (time == wakeupTime) {
    image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
    messageText = "IZ TIME TO GETTUP.";
  } else if (time < noon) {
    messageText = "Good morning!";
  } else if (time > evening) {
    messageText = "Good Evening!";
  } else {
    messageText = "Good afternoon!";
  }

  timeEventJS.innerText = messageText;
  lolcatImage.src = image;

  var showCurrentTime = function()
  {
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
      meridian = "PM";
    }
    if (hours > noon)
    {
      hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
      minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
      seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
  };

  showCurrentTime();
};

updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

//Party Time Button Event
var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
    partyTimeButton.innerText = "Party Time!";
    partyTimeButton.style.backgroundColor = "#222";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
    partyTimeButton.innerText = "Party Over";
    partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
};

partyTimeButton.addEventListener("click", partyEvent);

//Time Selector changes

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var wakeUpEvent = function() {
  wakeupTime = wakeUpTimeSelector.value;
};
var lunchTimeEvent = function() {
  lunchTime = lunchTimeSelector.value;
};
var napTimeEvent = function() {
  napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchTimeEvent);
napTimeSelector.addEventListener("change", napTimeEvent);
