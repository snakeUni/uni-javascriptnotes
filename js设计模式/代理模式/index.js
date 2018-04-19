/*
*抽象角色：通过接口或抽象类声明真实角色实现的业务方法。
*代理角色：实现抽象角色，是真实角色的代理，通过真实角色的业务逻辑方法来实现抽象方法，并可以附加自己的操作。
*真实角色：实现抽象角色，定义真实角色所要实现的业务逻辑，供代理角色调用。
*/

/*
* Image方法
*/
var Image = function() {

}
Image.prototype = {
	constructor: Image,
	show: function() {},
	hide: function() {}
}

/*
*具体的Image
*/
var SpecificImage = function(name) {
	this.name = name;
}
SpecificImage.prototype = {
	constructor: SpecificImage,
	show: function() {
		console.log(`展示${this.name}`);
	},
	hide: function() {
		console.log(`隐藏${this.name}`)
	}
}

/*
*代理Image
*/
var ProxyImage = function(name, specificImage) {
	this.name = name;
	this.specificImage = specificImage;
}
ProxyImage.prototype = {
	constructor: ProxyImage,
	show: function() {
		if(!this.specificImage) {
			this.specificImage = new SpecificImage(this.name);
		}
		this.specificImage.show();
		console.log('--------代理展示成功---------');
	},
	hide: function() {
		if(!this.specificImage) {
			this.specificImage = new SpecificImage(this.name);
		}
		this.specificImage.hide();
		console.log('--------代理隐藏成功---------');
	}
}

/*
*------------测试------------

var Image = new ProxyImage('萧炎-萧薰儿-美杜莎');
Image.show();
Image.hide();

*------------结果------------

"展示萧炎-萧薰儿-美杜莎"
"--------代理展示成功---------"
"隐藏萧炎-萧薰儿-美杜莎"
"--------代理隐藏成功---------"

*/











