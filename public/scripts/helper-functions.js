//  Helper functions for app.js

//  Escape function to make user inputs safe
function escape(str) {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

//  Functions to determine time since tweet created
function sAdder(num) {
  if (num === 1) {
    return '';
  }
  return 's';
}

function timeStamper(createTime) {
  const timeDiff = (Date.now() - createTime) / 1000;
  let timeStamp = 'Posted ';
  if (timeDiff < 60) {
    const tempTime = Math.floor(timeDiff);
    timeStamp += `${tempTime} second${sAdder(tempTime)} ago`;
  } else if (timeDiff < (3600)) {
    const tempTime = Math.floor(timeDiff / 60);
    timeStamp += `${tempTime} minute${sAdder(tempTime)} ago`;
  } else if (timeDiff < (3600 * 24)) {
    const tempTime = Math.floor(timeDiff / 3600);
    timeStamp += `${tempTime} hour${sAdder(tempTime)} ago`;
  } else if (timeDiff < (3600 * 24 * 30.5)) {
    const tempTime = Math.floor(timeDiff / 3600 / 24);
    timeStamp += `${tempTime} day${sAdder(tempTime)} ago`;
  } else if (timeDiff < (3600 * 24 * 365)) {
    const tempTime = Math.floor(timeDiff / 3600 / 24 / 30.5);
    timeStamp += `${tempTime} month${sAdder(tempTime)} ago`;
  } else {
    const tempTime = Math.floor(timeDiff / 3600 / 24 / 365);
    timeStamp += `${tempTime} year${sAdder(tempTime)} ago`;
  }
  return timeStamp;
}
