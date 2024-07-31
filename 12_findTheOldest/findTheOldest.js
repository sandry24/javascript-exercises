const getAge = function(person) {
    let birth = person.yearOfBirth;
    let death = person.yearOfDeath;
    if (death === undefined)
        death = new Date().getFullYear();
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        let oldestAge = getAge(oldest);
        let currentAge = getAge(current);
        return currentAge > oldestAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
