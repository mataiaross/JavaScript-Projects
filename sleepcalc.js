const getSleepHours = day => {
  if (day === 'monday') {
   return 8;
	} else if (day === 'tuesday') {
  	return 7;
	}

  else {

  }
   switch(day) {
     case 'monday':
     return 8
     break;
     case 'tuesday':
     return 7
     break;
      case 'wednesday':
     return 8
     break;
      case 'thursday':
     return 5
     break;
      case 'Friday':
     return 8
     break;
      case 'saturday':
     return 7
     break;
      case 'sunday':
     return 8
     break;

     default:
     return "Error!"

  }
};

const getActualSleepHours = () =>
 	 	getSleepHours ('monday') +
    getSleepHours ('tuesday') +
 		getSleepHours ('wednesday') +
    getSleepHours ('thursday') +
    getSleepHours ('friday') +
    getSleepHours ('saturday') +
    getSleepHours ('sunday');
  console.log(getSleepHours('monday'));
console.log(getActualSleepHours());

const getIdealSleephours = () => {
  let idealhours = 8;
  return idealHours * 7;
};
const calculateSleepDebt = () => {
  const actualSleepHours = getAcutalSleepHours ();
  const idealSleepHours = getIdealSleepHours();
}


  if(actualSleepHours === idealSleepHours)
    {
      console.log("You've got the perfect amount of sleep");
    }

  else if(actualSleepHours > idealSleepHours) {
    console.log("You've got more" + (idealSleepHours - actualSleepHours) + "more hours this week.");
    }

else if(actualSleepHours < idealSleepHours) {
  concole.log("You should get some rest because you've slept" + (idealSleepHours - actualSleepHours) + " hours less than you should have this week.");
	}
  else {
    console.log("Error! Something went wrong, check your code.");
  }

calculateSleepDept();
