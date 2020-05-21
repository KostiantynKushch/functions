(function () {
	'use strict';

	console.log(' %c 1st task: "Comparing Numbers"', 'color: #fff; background: #94CEB9; padding:10px; font-size: 1.5em');
	console.log('Compare 1 with 3: ' + getComparingIndex(1, 3));
	console.log('Compare 4 with 3: ' + getComparingIndex(4, 3));
	console.log('Compare 3 with 3: ' + getComparingIndex(3, 3));

	console.log(' %c 2nd task: "count factorial of a number"', 'color: #fff; background: #94CEB9; padding:10px; font-size: 1.5em');
	console.log('Factorial of the number "6": ' + getFactorial(6));
	console.log('Factorial of the number "3": ' + getFactorial(3));

	console.log(' %c 3rd task: "concat 3 numbers"', 'color: #fff; background: #94CEB9; padding:10px; font-size: 1.5em');
	console.log('Concat numbers "3, 10, 8": ' + typeof getConcatNumber(3, 10, 8) + ' ' + getConcatNumber(3, 10, 8));

	console.log(' %c 4th task: "count area"', 'color: #fff; background: #94CEB9; padding:10px; font-size: 1.5em');
	console.log('Count for different sides "4 & 5": ' + getFigureArea(4, 5));
	console.log('Count for the same sides "5": ' + getFigureArea(5));

	console.log(' %c 5th task: "check on perfect number"', 'color: #fff; background: #94CEB9; padding:10px; font-size: 1.5em');
	console.log('check if the number is perfect "28": ' + checkPerfectNumber(28));
	console.log('check if the number is perfect "2": ' + checkPerfectNumber(2));


	console.log(' %c 6th task: "show perfect numbers in the range"', 'color: #fff; background: #94CEB9; padding:10px; font-size: 1.5em');
	console.log('prefect numbers in range (1 : 1000): ' + getPerfectNumbers(1, 1000));

	console.log(' %c 7 task: "show time"', 'color: #fff; background: #94CEB9; padding:10px; font-size: 1.5em');
	console.log('show time for (10, 12, 13): ' + getTimeString(10, 12, 13));
	console.log('show time for (1, 2, 3): ' + getTimeString(1, 2, 3));
	console.log('show time for (10): ' + getTimeString(10));
	console.log('show time for (): ' + getTimeString());

	console.log(' %c 8 task: "Convert to seconds"', 'color: #fff; background: #94CEB9; padding:10px; font-size: 1.5em');
	console.log('convert (): ' + getSeconds() + ' seconds');
	console.log('convert (1, 2, 1): ' + getSeconds(1, 2, 1) + ' seconds');
	console.log('convert (0, 2, 1): ' + getSeconds(0, 2, 1) + ' seconds');
	console.log('convert (0, 0, 10): ' + getSeconds(0, 0, 10) + ' seconds');


	console.log(' %c 9 task: "Convert seconds to time"', 'color: #fff; background: #94CEB9; padding:10px; font-size: 1.5em');
	console.log('convert (7815): ' + getTimeFormSeconds(7815));

	console.log(' %c 10 task: "Display time difference"', 'color: #fff; background: #94CEB9; padding:10px; font-size: 1.5em');
	console.log('difference between 1h 15m 10s and 0h 45m 5s: ' + getDateDiff(1, 15, 10, 0, 45, 5));
	console.log('difference between 1h 15m 10s and 1h 45m 5s: ' + getDateDiff(1, 15, 10, 1, 45, 5));







	// Functions

	// function for getting comparing index
	function getComparingIndex(firstNum, secondNum) {
		if (firstNum < secondNum) {
			return -1;
		} else if (firstNum > secondNum) {
			return 1;
		} else {
			return 0;
		}
	}

	// function for getting number factorial
	function getFactorial(num) {
		let result = 1;
		for (num; num > 0; num--) {
			result = result * num;
		}
		return result;
	}

	// function concat Numbers
	function getConcatNumber(firstNum, secondNum, thirdNum) {
		return parseInt(`${firstNum}${secondNum}${thirdNum}`);
	}

	// get figure area
	function getFigureArea(firstSide, secondSide = 0) {
		if (secondSide == 0) {
			return firstSide * firstSide;
		} else {
			return firstSide * secondSide;
		}
	}

	// check on perfect number
	function checkPerfectNumber(number) {
		let temp = 0;
		for (let i = 1; i <= number / 2; i++) {
			if (number % i === 0) {
				temp += i;
			}
		}

		if (temp === number && temp !== 0) {
			return true//'It is a perfect number.';
		}
		else {
			return false //'It is not a perfect number.';
		}
	}

	// get perfect numbers
	function getPerfectNumbers(minNum, maxNum) {
		let result = '';
		for (minNum; minNum !== maxNum; minNum++) {
			if (checkPerfectNumber(minNum)) {
				result += minNum + ' ';
			}
		}
		return result;
	}

	// get time string
	function getTimeString(hours = 0, minutes = 0, seconds = 0) {
		let time = [hours, minutes, seconds];
		for (let i = 0; i < time.length; i++) {
			if (time[i] < 10) {
				time[i] = '0' + time[i];
			}
		}

		return `${time[0]}:${time[1]}:${time[2]}`;
	}

	// convert to seconds
	function getSeconds(hours = 0, minutes = 0, seconds = 0) {
		if (hours > 0) {
			seconds += hours * 3600;
		}
		if (minutes > 0) {
			seconds += minutes * 60;
		}
		return seconds;
	}

	function getTimeFormSeconds(inputSeconds) {
		let seconds = 0, minutes = 0, hours = 0;

		if (inputSeconds / 60 < 1) {
			return getTimeString(hours, minutes, inputSeconds);
		} else if (inputSeconds / 60 == 1) {
			return getTimeString(hours, 1, seconds);
		} else {
			minutes = Math.round(inputSeconds / 60);
			seconds = inputSeconds - minutes * 60;
			if (minutes / 60 < 1) {
				return getTimeString(hours, minutes, seconds);
			} else {
				hours = Math.round(minutes / 60);
				minutes = minutes - hours * 60;
				return getTimeString(hours, minutes, seconds);
			}

		}
	}

	function getDateDiff(hoursFirst, minutesFirst, secondsFirst, hoursSecond, minutesSecond, secondsSecond) {
		let timeInSecondsFirst = getSeconds(hoursFirst, minutesFirst, secondsFirst);
		let timeInSecondsSecond = getSeconds(hoursSecond, minutesSecond, secondsSecond);
		if (timeInSecondsSecond <= timeInSecondsFirst) {
			return getTimeFormSeconds(timeInSecondsFirst - timeInSecondsSecond);
		} else {
			console.log('%c !Err: date on the first position should be heigher than on the second one ', 'background: #de1b24; color: #e3dedf');
			return `${getTimeString(hoursFirst, minutesFirst, secondsFirst)} --- ${getTimeString(hoursSecond, minutesSecond, secondsSecond)}`;
		}
	}

})();