/*
*单例模式，是一种常用的软件设计模式。
*在它的核心结构中只包含一个被称为单例的特殊类。
*通过单例模式可以保证系统中，应用该模式的类一个类只有一个实例。即一个类只有一个对象实例
*/

/*
*最简单的单例模式即一个对象字面量
*/
var instance = {
	a: 1,
	b:2
}

/*
*通过闭包的形式
*比如这里有个这样的构造函数
*/
function Instance() {};

var instance = (function() {
	var unique;
	if(!unique) {
		unique = new Instance();
	}
	return unique;
})();

/*
*-------------- 测试 --------------
var instance1 = instance;
var instance2 = instance;
console.log(instance1 === instance2)

*-------------- 结果 --------------
true
*/