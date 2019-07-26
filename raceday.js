let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = true;
let runnersAge = 18;
if(registeredEarly && runnersAge > 18) {
  raceNumber += 1000;
}
if(registeredEarly && runnersAge > 18){
  console.log(`The race will begin at 9:30am, your race number is: ${raceNumber}.`)
}else if (!registeredEarly && runnersAge > 18){
  console.log(`The race will begin at 11:00am, your race number is: ${raceNumber}.`);
}
else if(runnersAge < 18){
  console.log(`The race will begin at 12:30am, your race number is: ${raceNumber}.`);
} else{
  console.log('Please approach the registration desk, thanks');
}
