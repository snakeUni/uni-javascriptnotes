/*
*命令模式（Command Pattern）是一种数据驱动的设计模式，它属于行为型模式。
*请求以命令的形式包裹在对象中，并传给调用对象。
*调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令。
*/

/*
*基于买书，买书的功能，一个命令函数接受买书，卖书命令
*/
var Book = function(name, price) {
	this.name = name;
	this.price = price;
}
Book.prototype = {
	constructor: Book,
	buy: function() {
		console.log(`书名:${this.name}----价格:${this.price}已被买入`);
	},
	sell: function() {
		console.log(`书名:${this.name}----价格:${this.price}已被卖出`)
	}
}

/*
*买书的类
*/
var BuyBook = function(book) {
	this.book = book;
}	
BuyBook.prototype = {
	constructor: BuyBook,
	excute: function() {
		this.book.buy();
	}
}

/*
*卖书的类
*/
var SellBook = function(book) {
	this.book = book;
}
SellBook.prototype = {
	constructor: SellBook,
	excute: function() {
		this.book.sell();
	}
}

/*
*创建命令调用类
*/
var BookCommand = function() {
	this.bookActions = [];
}
BookCommand.prototype = {
	constructor: BookCommand,
	takeOrder: function(book) {
		this.bookActions.push(book);
	},
	palceOrder: function() {
		for(var i = 0; i < this.bookActions.length; i++) {
			this.bookActions[i].excute();
		}
	}
}

/*
*----------------- 测试 -----------------

	var book = new Book('三体', 200);
	var bookCommand = new BookCommand();
	bookCommand.takeOrder(new BuyBook(book));
	bookCommand.takeOrder(new SellBook(book));
	bookCommand.placeOrder()


*----------------- 结果 -----------------

	"书名:三体----价格:200已被买入"
	"书名:三体----价格:200已被卖出"
	
*/






