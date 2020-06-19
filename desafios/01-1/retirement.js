const name = "Silvana";
const gender = "F";
const age = 48;
const contribution = 23;

function analyseTimeContribution(time, gender,age) {
  if (gender.toUpperCase() === "F") {
    if (time >= 30 || (age+time) >= 85) {
      return true;
    } else {
      return false;
    }
  }

  if (gender.toUpperCase() === "M") {
    if (time >= 35 || (age+time) >= 95) {
      return true;
    } else {
      return false;
    }
  }
}


var isApt = analyseTimeContribution(contribution,gender,age);
console.log(`${name} ${isApt ? 'is apt' : 'is not apt'} to Retirement`);
