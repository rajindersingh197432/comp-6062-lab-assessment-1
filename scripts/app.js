
const myFullName="Rajinder Singh";
const myStudentNumber="1163121";
console.log(`${myFullName} - ${myStudentNumber}`);
const headerContent = document.querySelector("#header");
headerContent.innerHTML = `${myFullName} - ${myStudentNumber}`;

headerContent.classList.add('headingPrimary');




