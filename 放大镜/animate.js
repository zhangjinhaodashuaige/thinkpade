function show(ele){
    ele.style.display = "block";
}

function hide(ele){
    ele.style.display = "none";
}

//缓动框架
function animate(ele,json,fn){
    //清楚定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var bool = true;
        for(var k in json){
            //特殊属性特殊处理
            if(k==="opacity"){
                //小数计算*100后可以避免后面的向上取整向下取整。产的误差。
                var leader = getStyle(ele,k)*100;//获取的是字符串
                var step = (json[k]*100-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                ele.style.opacity = (leader + step)/100;
                if(json[k] != getStyle(ele,k)){
                    bool = false;
                }
            }else if(k==="z-index"){
                ele.style.zIndex = json[k];
            }else{
                var leader = parseInt(getStyle(ele,k)) || 0;//获取的是字符串
                var step = (json[k]-leader)/10;
                step = step>0?Math.ceil(step):Math.floor(step);
                ele.style[k] = leader + step + "px";
                if(json[k] != parseInt(getStyle(ele,k))){
                    bool = false;
                }
            }

        }
        console.log(1);
        if(bool){
            clearInterval(ele.timer);
            if(fn){
                fn();
            }
        }
    },30);
}

//获取行内内嵌外链属性值（有单位）
function getStyle(ele,attr){
    if(ele.currentStyle != undefined){
        return ele.currentStyle[attr]
    }else{
        return window.getComputedStyle(ele,null)[attr];
    }
}


function scroll(){
    return {
        "top": window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
        "left": window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft
    };
}