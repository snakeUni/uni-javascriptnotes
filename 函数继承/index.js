/*
* 关于函数继承那些事
*/

/*
*引入一个典型的原型继承的例子，也是我们日常中最常用的继承方式，在高级程序设计中叫做组合继承
*/

//父类
function Parent(name) {
	this.name = name;
}
Parent.prototype.myName = function() {
	return this.name;
}
//子类
function Child(name,age) {
	Parent.call(this,name);
	this.age = age;
}

Child.prototype = Object.create(Parent.prototype);

Child.prototype.myAge = function() {
	return this.age;
}

//测试
let child = new Child('uni', 15);
child.myAge();  //结果: 15
child.myName(); //结果: uni

//Object.create函数的具体作用可以去mdn上查看
//也可以自己手动写一个类似的函数
function create(obj) {
	function f() {};
	f.prototype = obj;
	return new f();
}

//此时我们换掉上面的那个Object.create
Child.prototype = create(Parent.prototype)

//在次测试结果仍然是一样
let child = new Child('uni', 15);
child.myAge();  //结果: 15
child.myName(); //结果: uni

//在es6中又提供了另外一个方法也可以直接实现这个
//现在我们删除掉create的方法用这个es6提供的对象操作方法
Object.setPrototypeOf(Child.prototype, Parent.prototype);

//在次测试结果仍然是一样
let child = new Child('uni', 15);
child.myAge();  //结果: 15
child.myName(); //结果: uni










