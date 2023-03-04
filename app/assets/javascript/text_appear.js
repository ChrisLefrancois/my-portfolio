var myName = "Christopher Lefrancois.";
var myArray = myName.split("");

var myJob = "Fullstack Developer."
var jobArray = myJob.split("");

var loopTimer;
var jobTimer;

function frameLooper ()  {

  if(myArray.length > 0) {

      document.getElementById("name").innerHTML += myArray.shift();

    } else {
      clearTimeout(loopTimer);

      return false;
    }

    loopTimer = setTimeout("frameLooper()",40);
}

function jobLooper ()  {

  if(jobArray.length > 0) {

      document.getElementById("fullstack").innerHTML += jobArray.shift();

    } else {
      clearTimeout(jobTimer);

      return false;
    }

    jobTimer = setTimeout("jobLooper()",40);
}

frameLooper();
jobLooper();
