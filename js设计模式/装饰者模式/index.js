/**
*装饰模式指的是在不必改变原类文件和使用继承的情况下，
*动态地扩展一个对象的功能。它是通过创建一个包装对象，
*也就是装饰来包裹真实的对象。
*/
var Bicycle = function() {

}
Bicycle.prototype = {
	constructor: Bicycle,
	wash: function () {},
	repaire: function() {},
	ride: function() {},
	getPrice: function() {
		return 500;
	}
}

/*
*创建一个自行车装饰者
*/
var BicycleDecorator = function(bicycle) {
	this.bicycle = bicycle;
}
BicycleDecorator.prototype = {
	constructor: BicycleDecorator,
	wash: function() {
		this.bicycle.wash();
	},
	repaire: function() {
		this.bicycle.repair();
	},
	ride: function() {
		this.bicycle.ride();
	},
	getPrice: function() {
		this.bicycle.getPrice();
	}
}

/*
*给自己行车装个前灯
*/
var HeadlightDecorator = function(bicycle, highlight) {
	BicycleDecorator.call(this, bicycle);
	this.highlight = highlight;
}
HeadlightDecorator.prototype = {
	constructor: HeadlightDecorator,
	wash: function() {
		return this.bicycle.wash() + '新的头灯清洗';
	},
	getPrice: function() {
		return this.bicycle.getPrice() + 200;
	},
	getHeadlight: function() {
		return '头灯已被成功装上';
	}
}

/*
*给自从车装个尾灯
*/
var TaillightDecorator = function(bicycle, taillight) {
	BicycleDecorator.call(this, bicycle);
	this.taillight = taillight;
}
TaillightDecorator.prototype = {
	constructor: TaillightDecorator,
	wash: function() {
		return this.bicycle.wash() + '新的尾灯清晰';
	},
	getPrice: function() {
		return this.bicycle.getPrice() + 200;
	},
	getTaillight: function() {
		return '尾灯已被成功装上';
	}
}
/*
*给自行车添加响铃
*/
var BellDecorator = function(bicycle, bell) {
	BicycleDecorator.call(this, bicycle);
	this.bell = bell;
}
BellDecorator.prototype = {
	constructor: BellDecorator,
	getPrice: function() {
		return this.bicycle.getPrice() + 300;
	},
	getBell: function() {
		return '响铃已被成功装上';
	}
}

/*
*------------ 进行测试 ----------------

*	var bicycle = new Bicycle();
	console.log(`自行车价格:${bicycle.getPrice()}`);
	console.log('----准备装头灯------');
	var headlight = new HeadlightDecorator(bicycle);
	console.log(`装上头灯的价格:${headlight.getPrice()}`)
	console.log(headlight.getHeadlight())
	console.log('----准备装尾灯------')
	var taillight = new TaillightDecorator(headlight);
	console.log(`装上尾灯的价格:${taillight.getPrice()}`)
	console.log(taillight.getTaillight());
	console.log('----准备装响铃------')
	var bell = new BellDecorator(taillight);
	console.log(`装上尾灯的价格:${bell.getPrice()}`)
	console.log(bell.getBell());

*------------ 结果 --------------------

	result:
	"自行车价格:500"
	"----准备装头灯------"
	"装上头灯的价格:700"
	"头灯已被成功装上"
	"----准备装尾灯------"
	"装上尾灯的价格:900"
	"尾灯已被成功装上"
	"----准备装响铃------"
	"装上尾灯的价格:1200"
	"响铃已被成功装上"
	
*/












