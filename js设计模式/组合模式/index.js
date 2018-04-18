/*
*组合模式，将对象组合成树形结构以表示“部分-整体”的层次结构，
*组合模式使得用户对单个对象和组合对象的使用具有一致性。
*掌握组合模式的重点是要理解清楚 “部分/整体” 还有 ”单个对象“ 与 "组合对象" 的含义。
*组合模式可以让客户端像修改配置文件一样简单的完成本来需要流程控制语句来完成的功能。
*/

/*
*构建一个图片库, 有选择的进行隐藏和显示图片库的特定部分
*/

/*
*图片库的组合对象
*/
var Composite = function() {

}
Composite.prototype = {
	constructor: Composite,
	add: function() {},
	remove: function() {},
	getChild: function() {}
}

/*
*图片本身的叶对象
*/
var GalleryItem = function() {

}
GalleryItem.prototype = {
	constructor: GalleryItem,
	hide: function() {},
	show: function() {}
}

/*
*动态画廊，实现组合类和叶对象类的方法
*/
var DynamicGallery = function(id) {
	this.children = [];	//存放孩子节点

	this.element = document.createElement('div');
	this.element.id = id;
	this.element.className = 'dynamic-gallery';
}
DynamicGallery.prototype = {
	constructor: DynamicGallery,
	getElement: function() {
		return this.element;
	},
	getChild: function(i) {
		return this.children[i];
	},
	add: function(child) {
		this.children.push(child);
		this.element.appendChild(child.getElement());
	},
	remove: function(child) {
		for(var node, i = 0; node = this.getChild(i); i++) {
			if(node == child) {
				this.children.splice(i,1);
				break;
			}
		}
		this.element.removeChild(child.getElement());
	},
	hide: function() {
		// 用户节点的隐藏
		// for(var node, i = 0; node = this.getChild(i); i++) {
		// 	node.hide();
		// }
		this.element.style.display = 'none';
	},
	show: function() {
		this.element.style.display = 'block';
		// 用户节点的显示
		// for(var node, i = 0; node = this.getChild(i); i++) {
		// 	node.show();
		// }
	}
}

/*
*叶节点
*/
var GalleryImage = function(src) {
	//实现Composite和GalleryItem接口
	this.element = document.createElement('img');
	this.element.className = 'gallery-image';
	this.element.src = src;
}

GalleryImage.prototype = {
	//实现Composite接口，叶子节点只需要定义就好,叶节点是最底的节点。
	add: function() {},
	remove: function() {},
	getChild:function() {},

	//实现GalleryItem接口
	hide: function() {
		this.element.style.display = 'none';
	},
	show: function() {
		this.element.style.display = ''
	},
	getElement: function() {
		return this.element;
	}
}

/*
*--------------测试-------------
	已知页面存在<div id="root"></div>
	var topGallery = new DynamicGallery('top-gallery');

	topGallery.add(new GalleryImage('/img/image-1.jpg'));
	topGallery.add(new GalleryImage('/img/image-2.jpg'));

	var vacationPhotos = new DynamicGallery('vacation-photos');

	for(var i = 0; i < 5; i++) {
		vacationPhotos.add(new GalleryImage('/img/img/image-' + i + '.jpg'));
	}
	topGallery.add(vacationPhotos);
	document.getElementById("root").appendChild(topGallery.element);

*--------------页面结构如下--------------------
	<div id="root">
		<div id="top-gallery" class="dynamic-gallery">
			<img class="gallery-image" src="/img/image-1.jpg">
			<img class="gallery-image" src="/img/image-2.jpg">
			<div id="vacation-photos" class="dynamic-gallery">
				<img class="gallery-image" src="/img/img/image-0.jpg">
				<img class="gallery-image" src="/img/img/image-1.jpg">
				<img class="gallery-image" src="/img/img/image-2.jpg">
				<img class="gallery-image" src="/img/img/image-3.jpg">
				<img class="gallery-image" src="/img/img/image-4.jpg">
			</div>
		</div>
	</div>
	topGallery.show();
	vacationPhotos.hide();	//id为vacation-photos被隐藏掉
*/















