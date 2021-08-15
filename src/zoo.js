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

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return data.employees.push(newEmployee);
}

function countAnimals(selectedSpecie) {
  if (!selectedSpecie) {
    return data.species.reduce((acc, curr) => ({ ...acc, [curr.name]: curr.residents.length }), {});
  }
  return data.species.find((specie) => specie.name === selectedSpecie).residents.length;
}


function calculateEntry(entrants = 0) {
  const adultIncome = (entrants.Adult) ? entrants.Adult * 49.99 : 0;
  const childIncome = (entrants.Child) ? entrants.Child * 20.99 : 0;
  const seniorIncome = (entrants.Senior) ? entrants.Senior * 24.99 : 0;

  return (entrants === 0) ? 0 : adultIncome + seniorIncome + childIncome;
}

function getAnimalMap(options) {
  // seu código aqui
}

function getSchedule(dayName) {
  const schedule = Object.entries(data.hours);
  if (!dayName) {
    const daySchedule = schedule.reduce((acc, singleDay) => {
      acc[singleDay[0]] = `Open from ${singleDay[1].open}am until ${singleDay[1].close - 12}pm`;
      if (singleDay[1].open === 0) {
        acc[singleDay[0]] = 'CLOSED';
      }
      return acc;
    }, {});
    return daySchedule;
  }

  const singleDay = schedule.find((day) => day[0] === dayName);
  if (dayName === 'Monday') return { [dayName]: 'CLOSED' };
  return { [dayName]: `Open from ${singleDay[1].open}am until ${singleDay[1].close - 12}pm` };
}

function getOldestFromFirstSpecies(id) {
  const findEmployee = data.employees.find((employee) => employee.id === id);
  const findSpecie = data.species.find((specie) => specie.id === findEmployee.responsibleFor[0]);
  const oldestSpecie = findSpecie.residents.sort((a, b) => b.age - a.age);
  return Object.values(oldestSpecie[0]);
}

function increasePrices(percentage) {
  data.prices.Adult = parseFloat(
    Math.fround(data.prices.Adult * (percentage / 100) + data.prices.Adult).toFixed(2),
  );
  data.prices.Child = parseFloat(
    Math.fround(data.prices.Child * (percentage / 100) + data.prices.Child).toFixed(2),
  );
  data.prices.Senior = parseFloat(
    Math.fround(data.prices.Senior * (percentage / 100) + data.prices.Senior).toFixed(2),
  );
  return data.prices;
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
