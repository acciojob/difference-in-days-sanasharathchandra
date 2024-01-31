var dateDiffInDays = function (date1, date2) {
  //   write your code here

	const firstdate=new Date(date1);
	const seconddate=new Date(date2);
	if(firstdate.getTime()===seconddate.getTime()) return0;
	const diffinmilliseconds=Math.abs(firstdate.getTime()-seconddate.getTime());
	const DiffInDays=Math.ceil(diffinmilliseconds/(1000*60*60*24));
	return DiffInDays
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
al ert(dateDiffInDays(dateOne, dateTwo));
