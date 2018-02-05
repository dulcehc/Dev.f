'use strict'
var year = 2001;

function century(year){
	var currentCentury = 0;

	currentCentury = Math.ceil(year / 100);
	return currentCentury;

}

if (year > 0 && year <= 2018){
	console.log('year ' + year + ' belongs to century ' + century(year));
}else{
	console.log('invalid year')
}

/*
1-100 siglo 1
101 - 200 siglo 2
201 - 300 siglo 3
1801 - 1900 siglo XIX
1901 - 2000 siglo XX
*/