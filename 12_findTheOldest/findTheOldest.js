const findTheOldest = function(people) {
 people.sort((a,b) => {
   const currentYear = new Date().getFullYear();
   const aBirth = a.yearOfBirth;
   const bBirth = b.yearOfBirth;
   const aDeath = a?.yearOfDeath ? a.yearOfDeath : currentYear;
   const bDeath = b?.yearOfDeath ? b.yearOfDeath : currentYear;
  
   const aAge = aDeath - aBirth;
   const bAge = bDeath - bBirth;
      
   return aAge > bAge ? 1 : -1;
 })

 return people[people.length -1];
};

// Do not edit below this line
module.exports = findTheOldest;
