/**
*Method 1
*定义一个新数组用于存放源数组的第一个元素，然后在将源数组与新数组
*一一对比，不同则存放在新数组中，相同的则跳过
*/
function unique(arr) {
	let response = [arr[0]];	//源数组第一个元素

	for(let i = 1; i < arr.length; i++) {
		let flag = false;	//标记位，标记新数组的元素是否与源数组存在相同的
		for(let j = 0; j < response.length; j++) {
			if(arr[i] === response[j]) {
				flag = true;
				break;
			}
		}
		if(!flag) {
			response.push(arr[i]);
		}
	}
	return response;
}
//result:unique([1,1,1,3,5,6,4,3,5,5]) => [1,3,5,6,4]

/**
*Method 2
*先排序，在相邻的进行比较，不同在存放在新数组中
*/
function unique2(arr) {
	let sortedArr = arr.sort();
	let response = [sortedArr[0]];
	for(let i = 0; i < sortedArr.length; i++) {
		if(sortedArr[i] !== response[response.length - 1]) {
			response.push(sortedArr[i]);
		}
	}
	return response;
}
//result:unique2([1,1,1,3,5,6,4,3,5,5]) => [1,3,4,5,6]

/*
*Method 3
*利用对象的属性进行判断，如果不存在则加入新数组
*/
function unique3(arr) {
	let response = [];
	let obj = {};
	for(let i = 0; i < arr.length; i++) {
		if(!obj[arr[i]]) {
			obj[arr[i]] = 1; //用于重复的判断
			response.push(arr[i]);
		}
	}
	return response;
}
//result:unique3([1,1,1,3,5,6,4,3,5,5]) => [1,3,5,6,4]

/*
*Method 4
*最常见的利用数组本身的api indexOf | lastIndexOf来判断
*/
function unique4(arr) {
	let response = [];
	for(let i = 0; i < arr.length; i++) {
		if(response.indexOf(arr[i]) == -1) {
			response.push(arr[i]);
		}
	}
	return response;
}
//result:unique4([1,1,1,3,5,6,4,3,5,5]) => [1,3,5,6,4]

/*
*Meyhod 5
*利用数组本身的api includes
*/
function unique5(arr) {
	let response = [];
	for(let i = 0; i < arr.length; i++) {
		if(!response.includes(arr[i])) {
			response.push(arr[i]);
		}
	}
	return response;
}
//result:unique5([1,1,1,3,5,6,4,3,5,5]) => [1,3,5,6,4]

/*
*Method 6
*利用数组本身的api filter和includes | indexOf
*/
function unique6(arr) {
	let response = [];
	response = arr.filter((item) => {
		return response.includes(item)? '' : response.push(item);
	});
	return response;
}
//result:unique6([1,1,1,3,5,6,4,3,5,5]) => [1,3,5,6,4]

/*
*Method 7
*利用数字本身的api forEach | map 和includes | indexOf
*/
function unique7(arr) {
	let response = [];
	arr.forEach((item) => {
		response.includes(item)? '' : response.push(item);
	})
	return response;
}
//result:unique7([1,1,1,3,5,6,4,3,5,5]) => [1,3,5,6,4]

/*
*Method 8
*利用es6的 Set方法
*/
function unique8(arr) {
	return [...new Set(arr)];
}
//result:unique8([1,1,1,3,5,6,4,3,5,5]) => [1,3,5,6,4]

# 欢迎各位大佬添加








