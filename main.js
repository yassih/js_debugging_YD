var woolOwners = [
  {
      "master": 1
  },
  {
    "dame": 1
  },
  {
    "little boy": 1,
    "location": "down the lane"
  }
];

var totalBags = 0;
var haveYouAnyWool = function() {
    for (var i = 0; i < woolOwners.length; i++) {
      totalBags = totalBags + i;
    }
    return totalBags;
};




function baabaaBlackSheep() {
    console.log("BaaBaa BlackSheep have you any wool?");
    if (totalBags > 0) {
        console.log("yes sir, yes sir " + totalBags + " bags full");
  }
}

function oneForMy() {
    for (var i = 0; i < 2; i++) {
        people = Object.keys(woolOwners[i]);
        var person = people.toString();
        console.log("one for my " + person);
    }
}


var bags = haveYouAnyWool();
baabaaBlackSheep();
oneForMy();

var boy = Object.keys(woolOwners[2]);
// console.log(boy);
var littleBoy = boy[0];
// console.log(woolOwners[2].location);
var whereHeLives = woolOwners[2].location;
console.log("one for the " + littleBoy + " that lives " + whereHeLives);
