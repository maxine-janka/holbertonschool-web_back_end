import Building from './5-building.js';

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

class Office extends Building {
    evacuationWarningMessage() {
      return "Evacuate immediately";
    }
  }

  const c = new Office(100)
  console.log(c);
  console.log(c.evacuationWarningMessage());

try {
    new TestBuilding(200)
    new Office(100)
}
catch(err) {
    console.log(err);
}

