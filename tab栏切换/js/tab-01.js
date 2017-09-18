(function(window){
	function Tab(option){
		//1. 获取元素
		//1.1 获取li
		var tabMenus = document.getElementById(option.tabmenu).children;
		//1.2 获取div
		var tabMains = document.getElementById(option.tabmain).children;

		//2. 注册点击事件
		for(var i = 0; i < tabMenus.length; i++){
			var li = tabMenus[i];
			//给li添加一个自定义属性，方便在点击事件内使用
			li.index = i;
			li.onclick = function(){
				//首先做排他，将所有的li的样式置为 tab-item
				//将所有的div的样式置为main
				for(var j = 0; j < tabMenus.length; j++){
					tabMenus[j].className = "tab-item";
					tabMains[j].className = "main";
				}

				//让当前li加上active类样式
				this.className += " active";
				//让当前li对应的div显示出来，加上seleted类样式
				var index = this.index;
				tabMains[index].className += " selected";
			}
		}
	}

	window.Tab = window.T = Tab;
})(window)