const data = require('./data');

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  const species = [];
  ids.forEach((id) => {
    species.push(...data.species.filter((animal) => animal.id === id));
  });
  return species;
}

function getAnimalsOlderThan(animal, age) {
  const { residents } = data.species.find((specie) => specie.name === animal);
  return residents.every((specie) => specie.age >= age);
}

function getEmployeeByName(employeeName) {
  if (!employeeName) return {};
  const getEmployeeName = data.employees.find((employee) => {
    if (employee.firstName === employeeName || employee.lastName === employeeName) {
      return true;
    }
    return false;
  });
  return getEmployeeName;
}

function createEmployee({ id, firstName, lastName }, { managers, responsibleFor }) {
  return {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
}

const isManager = (id) => {
  let managers = data.employees.map((employee) => employee.managers);
  managers = managers.reduce((acc, curr) => [...acc, ...curr], []);
  return managers.some((managersId) => managersId === id);
};

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function countAnimals(species) {
  // seu código aqui
}

function calculateEntry(entrants) {
  // seu código aqui
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  // seu código aqui
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
