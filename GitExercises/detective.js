function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}


const daysIfSuccessful = 13;
const daysIfNotSuccessful = 1;
const daysForAttendance = 3;
const atttendance = 20;
const deservedDays = 0;


//try{
//	mysteryOperation ();
//	deservedDays += daysIfSuccesful;

//	} catch {
//	deservedDays += daysIfNotSuccessful;				//if Error appears

//	} finally {
//	deservedDays += daysForAttendance;
//}

//console.log(deservedDays)