/*
*常见日期的计算
*/


/*
*传入两个Date类型的日期 求出相隔多少天
*/
var getDatePeriod = function(start, finish) {
	return Math.abs(start*1 - finish*1)/60/60/1000/24;
}

/*
*传入Date类型的日期 求出所在月的第一天
*/
var getFirstDateInMonth = function(date) {
	return new Date(date.getFullYear(), date.getMonth(), 1);
}

/*
*传入一个Date类型的日期， 求出所在月的最后一天
*/
var getLastDateInMonth = function(date) {
	return new Date(date.getFullYear(), date.getMonth() + 1, 0)
}

/*
*传入Date类型的日期 求出所在季度的第一天
*/
var getFirstDateInQuarter = function(date) {
	return new Date(date.getFullYear(), ~~(date.getMonth()/3)*3, 1);
}

/*
*传入Date类型的日期 求出所在季度的最后一天
*/
var getLastDateInQuarter  = function(date) {
	return new Date(date.getFullYear(), ~~(date.getMonth()/3)*3 + 3, 0);
}

/*
*判断是否为闰年
*/
var isLeapYear = function(date) {
	return new Date(date.getFullYear(), 2, 0).getDate() == 29;
}

/*
*Method 1 - 取得当前月份的天数
*/
function getDaysInMonth1(date) {
	switch (date.getMonth()) {
		case 0:
		case 2:
		case 4:
		case 6:
		case 7:
		case 9:
		case 11:
			return 31;
		case 1:
			var y = date.getFullYear();
			return y%4 == 0 && y%100 != 0 || y%400 == 0 ? 29 : 28;
		default:
			return 30;
	}
}
/*
*Method 2 - 取得当前月份的天数
*/
function getDaysInMonth2(date) {
	return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

/*
*判断是周几
*/
function getDayInWeek(date) {
	let weeks = "日一二三四五六";
	return weeks.charAt(date.getDay());
}


