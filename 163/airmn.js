 // create by maning 2016-05-10
 // web:airmn.com
 // email:airmni@163.com
 // 部分函数需要jq支持，在这个js前面请引用jq


//判断设备类型是否为移动设备
function is_mobile(){ 
	  var regex_match=/(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i; 
	  var u=navigator.userAgent; 
	  if (null==u){ 
	    return true; 
	  } 
	  var result = regex_match.exec(u);
	  if(null==result){ 
	    return false
	  } 
	  else{ 
	    return true
	  } 
	} 

//判断横竖屏切换
function orient() {
    if (window.orientation == 0 || window.orientation == 180) {
        return true;
    }
    else if (window.orientation == 90 || window.orientation == -90) {
       return false;
    }
}


//新建弹层
// pop($('.end'))
function pop(n,clos){
    var cl = clos||false; 
	var div="<div id='pop' pop  class='hide' "
    if(cl){
      div +=  "onclick='closePop()'";
    }
    div +="><div class='popcont'>"
	div +=$(n).prop("outerHTML");
	div+="</div><div class='bg'></div>"
	div+="</div>"
	$("body").prepend(div);
	$("#pop").show();
	//console.log(div);
}
//关闭弹层
function closePop(){
	$("#pop").remove();
}


/*
*序列帧播放函数
*   @id  需要显示在标签id上
*	@arr 图片数组
*   @time图片切换时间
*   @end 播放完毕后回调函数
* animateImg($('.page3'),imgList4,450,end);
*
*/
function animateImg(id,arr,time,callBack){
	// console.log('animateImg')
	var total = arr.length;
	var cb = callBack|| function(){};
	var num =0;
	function setImg(){
		// console.log(arr[num])
		id.attr('src',arr[num]);
		num++;
		if(num>=total){
			cb();
			num==0;
		} else{
			setTimeout(setImg,time);
		}
	}
	setImg()
}



// 刷新页面
// function(){window.location='http://test.go.163.com/go/2015/maning/html/common/index.html'})


// 图片预加载
// preloadimages(img,init);
// @arr 图片数组
// @f   加载完毕回调函数
 function preloadimages(arr,endFunction){   
    var newimages=[], loadedimages=0
    var arr=(typeof arr!="object")? [arr] : arr
    var f = endFunction || function(){};
    function imageloadpost(){
        loadedimages++
        if (loadedimages==arr.length){
        	f()
        }else{
            loadimg();
        }
    }
    function loadimg(){
        newimages[loadedimages]=new Image()
        newimages[loadedimages].src=arr[loadedimages]
        newimages[loadedimages].onload=function(){
            imageloadpost()
        }
        newimages[loadedimages].onerror=function(){
            imageloadpost()
        }
    }
    loadimg();
}

// 音乐播放
function music(s){
    var muDiv = '<audio id="mp3" src="'+s+'" loop="loop" autoplay="autoplay"></audio><div class="music play"><a href="javascript:;"></a></div>';
    $("body").prepend(muDiv);
    var flag = false;
    $(document).bind('touchstart', function(){
        if (!flag) {
          $('#mp3')[0].play();
          $('.music').addClass("play");
          flag = true;
        }
    });
    $('.music').click(function(){
      if(!$('#mp3')[0].paused){
           $('#mp3')[0].pause();
           $('.music').removeClass("play");
        }else{
            $('#mp3')[0].play();
            $('.music').addClass("play");
        }
    });
}

function stopMusic(){
    $('#mp3')[0].pause();
    $('.music').removeClass("play");
}

//根据客户端弹出分享
function sshare(endFunction){
	var client = clientChecks();
    var f = endFunction || function(){};
	if(client=="weixin"){
		f();
	}else{
		NeteaseShare();
	}
}
//客户端判断
function clientChecks(){
    var ua=navigator.userAgent;
    if(/micromessenger/i.test(ua)){
        return 'weixin';
    }else if(/newsapp/i.test(ua)){
        return 'neteasenewsapp';
    }else if(/\_\_weibo\_\_/i.test(ua)){
        return 'weiboapp';
    }else if(/yixin/i.test(ua)){
        return 'yixin';
    }else if(/android/i.test(ua)){
        return 'android';
    }else if(/ios|iphone|ipad/i.test(ua)){
        return 'mobile';
    }else{
        return 'pc';
    }
}
//获取地址栏参数
function getQuery(name)
{
     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
     var r = window.location.search.substr(1).match(reg);
     if(r!=null)return  unescape(r[2]); return null;
}

function getScene(n){
    var krpano = document.getElementById("krpanoSWFObject");
    var sc="loadscene("+n+")"
    krpano.call(sc);
}
//loading!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
function netease_loadimg(imgs,callback){
    if(!imgs){return false};
    var img=[];
    var len=imgs.length;
    var loadedCount = 0;
    for(var i=0;i<len;i++){
        img[i]=new Image();
        img[i].src=imgs[i];
        img[i].onload = function(){
            loadedCount++;
            $('.netease-loader .load_data').html(Math.floor(loadedCount/len*100)+"%").attr('title',Math.floor(loadedCount/len*100));
            if (loadedCount>=len){
                $('.netease-loader').fadeOut(600,function(){
                    $(this).remove();
                });
                callback ? callback() : null;
            }
        };
    }
}