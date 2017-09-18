(function(window){
	function Tab(option){
		//this 就是new出来的对象！
		this.tabMenus = null;
		this.tabMains = null;

		//下面的这个方法用来在对象创建完成之后，做一些初始化的工作
		//他的调用模式是方法调用模式，所以init这个方法中的this指向就是当前new创建出来的对象
		this.init(option);
	}

	Tab.prototype = {
		constructor: Tab,
		init: function(option){
			//因为在Tab函数中调用这个init方法的时候是方法调用模式
			//所以这个this指向的就是Tab中调用这个方法的this也就是new创建出来的对象
			this.elesInit(option);
			this.eventInit();
		},
		elesInit: function(option){
			//1. 获取元素
			//1.1 获取li
			this.tabMenus = document.getElementById(option.tabmenu).children;
			//1.2 获取div
			this.tabMains = document.getElementById(option.tabmain).children;
		},
		eventInit: function(){
			//2. 注册点击事件
			for(var i = 0; i < this.tabMenus.length; i++){
				var li = this.tabMenus[i];
				//给li添加一个自定义属性，方便在点击事件内使用
				li.index = i;

				//因为在下面的点击事件中想要使用当前函数中的this，但是下面函数中有自己的this
				//所以，如果直接使用this访问，肯定访问不到外面这个this
				//所以，这边声明一个新的变量，相当于给this加了一个别名，在下面的函数中就可以直接使用这个别名来访问到外面的this了
				var that = this;

				li.onclick = function(){
					//首先做排他，将所有的li的样式置为 tab-item
					//将所有的div的样式置为main
					for(var j = 0; j < that.tabMenus.length; j++){
						that.tabMenus[j].className = "tab-item";
						that.tabMains[j].className = "main";
					}

					//让当前li加上active类样式
					this.className += " active";
					//让当前li对应的div显示出来，加上seleted类样式
					var index = this.index;
					that.tabMains[index].className += " selected";
				}
			}
		}
	}

	window.Tab = window.T = Tab;
})(window)
