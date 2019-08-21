/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1.
 * 2.
 * 3.
 * 4.
 *
 * write out a code example of each explanation above
 */

// Principle 1
// code example for Window Binding

const item = {
  property1: "something1",
  property2: "something2"
};

this.item = item;
console.log(this);

// Principle 2
// code example for Implicit Binding

const sport = {
  name: "basketball",
  league: "NBA",
  play: function() {
    console.log(`${this.name} is played in ${this.league}`);
  }
};

sport.play();

// Principle 3
// code example for New Binding

function Sport(sport) {
  this.favourite = sport;
}

const mySport = new Sport("Basketball");

// Principle 4
// code example for Explicit Binding
const team = {
  name: "New York knicks",
  league: "NBA"
};
sport.play.call(team);
