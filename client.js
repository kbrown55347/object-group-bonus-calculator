// attempted stretch goal
// $(document).ready(readyNow);

// function readyNow(){

// } // end readyNow

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// for of loop 
for (let employee of employees) {
  console.log(getEmployeeInfo(employee));
}


function getEmployeeInfo(employee) {
  let bonus = employee.annualSalary * (bonusPercentage(employee)/100);
  let employeeInformation = {
    name: employee.name, 
    bonusPercentage: bonusPercentage(employee) + '%',
    totalCompensation: Number(employee.annualSalary) + bonus,
    totalBonus: bonus,
  }
  
  return employeeInformation;
} // end getEmployeeInfo

function bonusPercentage(employee) {
  let percentage = 0;
  if (employee.reviewRating === 3) {
    percentage += 4;
  } else if (employee.reviewRating === 4) {
    percentage += 6;
  } else if (employee.reviewRating === 5) {
    percentage += 10;
  }
  if (employee.employeeNumber.length === 4){
    percentage += 5;
  }
  if (employee.annualSalary > 65000){
    percentage -= 1;
  }
  if (percentage >13){
    percentage = 13;
  }
  if (percentage < 0 ){
    percentage = 0;
  }
  return percentage;
} // end bonusPercentage


// attempted stretch goal
// function displayEmployeeInfo(employees) {
//   for (let employee of employees) {
//     $('#annualEpr').append(`<li>${getEmployeeInfo(employee)}</li>`);
//   }
// }

// console.log(bonusPercentage(employees[0]));
// console.log(bonusPercentage(employees[1]));
// console.log(bonusPercentage(employees[2]));
// console.log(bonusPercentage(employees[3]));
// console.log(bonusPercentage(employees[4]));

console.log( employees );


