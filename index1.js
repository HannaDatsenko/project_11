class Observer {
	constructor() {
		this.div = document.createElement('div');
		this.divel = document.createElement('div');
		this.divel.id = 'new';
		document.body.append(this.div);
	}
	broadcast(value) {
		//var clone=this.divel.cloneNode(true);
		this.div.append(this.divel.cloneNode(true));
	}
	text(text) {
		for (var i = 0; i < this.div.childNodes.length; i++) {
			this.div.childNodes[i].innerText = text;
		}
	}
}
class Object {
	constructor(observer) {
		this.mainblock = document.createElement('div');
		this.input = document.createElement('input');
		this.button = document.createElement('button');
		this.button.innerText = 'Push';
		this.observer = observer;
	}
	init() {
		document.body.append(this.mainblock);
		this.mainblock.append(this.input, this.button);
	}
	action() {
		this.button.addEventListener('click', () => observer.broadcast(this));
	}
	text(value) {
		this.input.addEventListener('input', (event) => {
			var text = event.target.value;
			observer.text(text);
		});
	}
}
var observer = new Observer();
var obj = new Object();
obj.init();
obj.action();
obj.text();