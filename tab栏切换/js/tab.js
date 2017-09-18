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
			this.autoPlay(option);
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
					that.switcch(this);
				}
			}
		},
		autoPlay: function(option){
			if(option.autoplay){
				//记录当前的索引
				var index = 0;
				//因为要在定时器中访问当前函数中的this。所以写一个别名
				var _this = this;
				setInterval(function(){
					//直接调用对象的switch方法传递一个li对象
					
					_this.switcch(_this.tabMenus[index++]);

					// if(index >= _this.tabMenus.length){
					// 	index = 0;
					// }
					index %= _this.tabMenus.length;

				}, 1000);
			}
		},
		switcch: function(li){
			//首先做排他，将所有的li的样式置为 tab-item
			//将所有的div的样式置为main
			for(var j = 0; j < this.tabMenus.length; j++){
				this.tabMenus[j].className = "tab-item";
				this.tabMains[j].className = "main";
			}

			//让当前li加上active类样式
			li.className += " active";
			//让当前li对应的div显示出来，加上seleted类样式
			var index = li.index;
			this.tabMains[index].className += " selected";
		}
	}

	window.Tab = window.T = Tab;
})(window)
