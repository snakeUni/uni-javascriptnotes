/*
*观察者模式-推送
*/
function Publisher() {
	this.subscribers = [];
}

Publisher.prototype.deliver = function(data) {
	this.subscribers.forEach(function(fn) {
		fn(data);
	});
	return this;
}

/*
*订阅者
*/
function Observer() {
	// body...
}
Observer.prototype.subscribe = function(publisher) {
	var that = this;
	var alreadyExists = publisher.subscribers.some(function(el) {
		return el === that;
	});
	if(!alreadyExists) {
		publisher.subscribers.push(this);
	}
	return this;
}
//停止订阅方法
Observer.prototype.unsubscribe = function(publisher) {
	var that = this;

	publisher.subscribers = publisher.subscribers.filter(function(el) {
		return el !===	that;
	});
	return this;
}
