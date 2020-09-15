const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();

let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

/* Calculate current position of clock arms with small increments so the minute (and hour) arms don't jump from one minute to the next. Instead with this the minute arm moves 1/60th of the distance between two minutes every second */

let hrPosition = hr*(360/12)+(min*(360/12)/60);
let minPosition = min*(360/60)+(sec*(360/60)/60);
let secPosition = sec*(360/60);

function runTheClock()
{
    hrPosition = hrPosition + (1/120); 
    /* 360 degress / 12 hours = 30 degrees pr. hour / 60 seconds = 1/2 degree pr. minute / 60 seconds = 1/120 degrees movement of the hour arm pr. second (30 degrees pr. hour / 3600 seconds pr. hour) */
    minPosition = minPosition + (1/10); 
    /* 360 degrees / 60 minutes = 6 degrees pr. minute / 60 seconds = 6/60 degrees movement of the minute arm pr. second = 1/10 degrees movement of the minute arm pr. second */
    secPosition = secPosition + 6; 
    /* 360 degrees / 60 seconds = 6 degrees per second */

    /* Use inline styling to transform the svg-objects and move the arms with rotate the number of degrees calculated above */
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

/* call the function continously with an interval of 1000 miliseconds */
var interval = setInterval(runTheClock, 1000);