const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (people) {
  //1st. Add age property
  people.forEach((person) => {
    const yearOfBirth = person.yearOfBirth;
    const yearOfDeath = person.yearOfDeath;
    person.age = yearOfDeath - yearOfBirth;
  });

  const oldest = people.reduce((oldestPerson, currentPerson) => {
    return currentPerson.age > (oldestPerson.age || 0)
      ? currentPerson
      : oldestPerson;
  }, {});

  /*
  My New People Array
[
  { name: 'Carly', yearOfBirth: 1942, yearOfDeath: 1970, age: 28 },
  { name: 'Ray', yearOfBirth: 1962, yearOfDeath: 2011, age: 49 },
  { name: 'Jane', yearOfBirth: 1912, yearOfDeath: 1941, age: 29 }
]
  */

  //2nd. Get the oldest and return the whole object from the array
  //2.1 Get the age for each people on the new array

  return console.log(oldest);
};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
