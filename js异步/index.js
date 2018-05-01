/*
*	Callback
*	Promise
*	generator
*	async/await
*/

/*
*	Callback
*/
//setTimeout异步操作
function A(callback) {
	console.log("this is a")
	setTimeout(() => {
		console.log('异步开始');
		callback();
	}, 2000)
}

function B() {
	console.log("this is b")
}

A(B);

/*
*result: "this is a" "异步开始" "this is b"
*通过回调的方式确保执行顺序, 但是如果顺序太多就会造成回调地域，这样
*维护起来极为困难
*/


/*
*	Promise 
*	promise把结果返回出来，链式的调用，看起来符合正常的同步思维
*/
function A() {
	console.log("this ia a");
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("异步开始");
			resolve();
		}, 2000);
	})
}
function B() {
	console.log("this is b");
}
A().then(B);

/*
*result: "this is a" "异步开始" "this is b"
*/

//promise相关的api可以参考mdn  还可以通过primise.race作超时处理


/*
*	generator
*	调用generator不会立即执行的，要调用一次next到下一个yield
*	所以next的个数总是要比yield多1
*/
function *generator() {
	console.log("begining");
	const yed = yield 1+1;
	console.log(yed);
	return yed;
}
const gen = generator();
const yed1 = gen.next();
console.log(yed1);
const yed2 = gen.next(8);
console.log(yed2);

/*
*result: 
"begining"
[object Object] {
  done: false,
  value: 2
}
8
[object Object] {
  done: true,
  value: 8
}
可以看出中间输出一个8所以左边的值是下一个next的值不是当前的next
*/

//generator和yield结合
function delay(duration = 2000) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(8);
		}, duration);
	})
}
function *generator() {
	const startTime = Date.now();
	console.log("开始时间:", startTime);
	const value = yield delay();
	console.log(value);
	console.log("结束时间:", Date.now() - startTime);
}
const gen = generator();
gen.next().value.then((value) => {
	gen.next(value);
})

/*
*result: 
	"开始时间:"1525155518032
	8
	"结束时间:"2002
结果8被传入了进来
*/


/*
*	async/await
*	注：aysnc和await一定要一起使用 否则会报错
*/
function delay(duration = 2000) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log("异步开始");
			resolve();
		}, duration)
	})
	
}
async function a() {
	console.log("start");
	await delay();
	console.log("end");
}
a();

/*
*result:
	"start"
	"异步开始"
	"end"
*/

/*
*如果有多个异步请求，如果用多个await则是串行，可以用Promise.all来做优化操作
*async始终返回一个promise
*/



























