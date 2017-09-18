
var s,all,cont,cont2,requestAnimationFrame
var yili=['f.gif'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/f.gif*/,'b.gif'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/b.gif*/,'l.gif'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/l.gif*/,'r.gif'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/r.gif*/,'t.gif'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/t.gif*/,'d.gif'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/d.gif*/,'nf.png'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/nf.png*/,'nb.png'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/nb.png*/,'nl.png'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/nl.png*/,'nr.png'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/nr.png*/,'nt.png'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/nt.png*/,'nd.png'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/nd.png*/]
function boxinit(){
	 //创建场景
        var s = new C3D.Stage();
        s.size(window.innerWidth, window.innerHeight).material({
            
        }).update();
        document.getElementById('box3d').appendChild(s.el);
        all = new C3D.Sprite();  
        all.name('all').position(0,0,-5000).update();  
        s.addChild(all);
        box2();
        box1();
        //响应屏幕调整尺寸
        function resize() {
            s.size(window.innerWidth, window.innerHeight).update();
        };
        window.onresize = function() {
            resize();
        };
        resize();
        
		//刷新场景
        requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame ||
        function(callback) {
            setTimeout(callback, 1000 / 60);
        };
        //requestAnimationFrame(go);
        //touch();
        enterAnm();
}

function box1(){
	    cont = new C3D.Sprite();  
		cont.name('cont').position(0,0,0).update();  
		all.addChild(cont); 
         
		var f = new C3D.Plane(); 
		f.name('f').size(399,657).position(0, 0,100).rotation(0, 0, 0).material({  
		    image:'nf.png'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/nf.png*/,color:'#fff'
		}).update();
        cont.addChild(f);
		var b = new C3D.Plane();  
		b.name('b').size(399,657).position(0, 0,-100).rotation(0, 180, 0).material({  
		    image:'nb.png'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/nb.png*/,color:'#fff'
		}).update();
		cont.addChild(b);
		var l = new C3D.Plane();  
		l.name('l').size(202,657).position(-200, 0,0).rotation(0, -90, 0).material({  
		    image:'nl.png'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/nl.png*/,color:'#fff' 
		}).update();	
		cont.addChild(l);
		var r = new C3D.Plane();  
		r.name('r').size(202,657).position(200, 0,0).rotation(0, 90, 0).material({  
		    image:'nr.png'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/nr.png*/,color:'#fff' 
		}).update();	
		cont.addChild(r);

		var t = new C3D.Plane();  
		t.name('t').size(399,202).position(0,-329,0).rotation(-90, 180, 180).material({  
		    image:'nt.png'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/nt.png*/,color:'#fff' 
		}).update();	
		cont.addChild(t);
		var d = new C3D.Plane();  
		d.name('d').size(399,202).position(0, 329,0).rotation(-90, 0, 0).material({  
		    image:'nd.png'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/nd.png*/,color:'#fff' 
		}).update();	
		cont.addChild(d);
}

function box2(){
        cont2 = new C3D.Sprite();  
        cont2.name('cont2').position(0,0,0).update();  
        all.addChild(cont2); 
         
        var f = new C3D.Plane(); 
        f.name('f').size(399,657).position(0, 0,100).rotation(0, 0, 0).material({  
            image:'f.gif'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/f.gif*/,color:'#fff'
        }).update().on('tap',function(e){
            ad('boxf');
            boxPlay('http://flv2.bn.netease.com/videolib3/1608/02/bEmxy3543/HD/bEmxy3543-mobile.mp4','VBSI633GR.jpg'/*tpa=http://vimg1.ws.126.net/image/snapshot/2016/8/G/R/VBSI633GR.jpg*/)
        });
        cont2.addChild(f);
        var b = new C3D.Plane();  
        b.name('b').size(399,657).position(0, 0,-100).rotation(0, 180, 0).material({  
            image:'b.gif'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/b.gif*/,color:'#fff'
        }).update().on('tap',function(e){
            ad('boxb');
            boxPlay('http://flv2.bn.netease.com/videolib3/1608/15/cyxRN5896/HD/cyxRN5896-mobile.mp4','VBTIP2EH4.jpg'/*tpa=http://vimg1.ws.126.net/image/snapshot/2016/8/H/4/VBTIP2EH4.jpg*/)
        });    
        cont2.addChild(b);
        var l = new C3D.Plane();  
        l.name('l').size(202,657).position(-200, 0,0).rotation(0, -90, 0).material({  
            image:'l.gif'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/l.gif*/,color:'#fff' 
        }).update().on('tap',function(e){
            ad('boxl');
            boxPlay('http://flv2.bn.netease.com/videolib3/1608/08/AEhax8638/HD/AEhax8638-mobile.mp4','VBT1IHSTJ.jpg'/*tpa=http://vimg1.ws.126.net/image/snapshot/2016/8/T/J/VBT1IHSTJ.jpg*/)
        });    
        cont2.addChild(l);
        var r = new C3D.Plane();  
        r.name('r').size(202,657).position(200, 0,0).rotation(0, 90, 0).material({  
            image:'r.gif'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/r.gif*/,color:'#fff' 
        }).update().on('tap',function(e){ 
            ad('boxr');
            boxPlay('http://flv2.bn.netease.com/videolib3/1608/18/RWcVK2243/HD/RWcVK2243-mobile.mp4','VBTR0JVHN.jpg'/*tpa=http://vimg3.ws.126.net/image/snapshot/2016/8/H/N/VBTR0JVHN.jpg*/)
        });    ;    
        cont2.addChild(r);

        var t = new C3D.Plane();  
        t.name('t').size(399,202).position(0,-329,0).rotation(-90, 180, 180).material({  
            image:'t.gif'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/t.gif*/,color:'#fff' 
        }).update().on('tap',function(e){ 
            ad('boxt');
            boxPlay('http://flv2.bn.netease.com/videolib3/1608/12/RtzUZ3372/HD/RtzUZ3372-mobile.mp4','VBTB883ME.jpg'/*tpa=http://vimg2.ws.126.net/image/snapshot/2016/8/M/E/VBTB883ME.jpg*/)
        });    
        cont2.addChild(t);
        var d = new C3D.Plane();  
        d.name('d').size(399,202).position(0, 329,0).rotation(-90, 0, 0).material({  
            image:'d.gif'/*tpa=http://go.163.com/2016/0727/yili/js/images/page1/d.gif*/,color:'#fff' 
        }).update().on('tap',function(e){ 
            ad('boxd');
            boxPlay('http://flv2.bn.netease.com/videolib3/1608/18/yOIMV2497/HD/yOIMV2497-mobile.mp4','VBTR0RLQ2.jpg'/*tpa=http://vimg1.ws.126.net/image/snapshot/2016/8/Q/2/VBTR0RLQ2.jpg*/)
        });    ;    
        cont2.addChild(d);
}
function go() {
    angleX += (curMouseX - lastMouseX + lastAngleX - angleX) ;
    angleY += (curMouseY - lastMouseY + lastAngleY - angleY) ;
    angleY = Math.max(-80, Math.min(80, angleY));
    all.rotation(-angleY, angleX, 0).updateT();

    requestAnimationFrame(go);
}
//入场动画
function enterAnm(){
    
    var ea = new TimelineLite();
    ea.to(all,2,{z:-1000,y:100,rotationY:-360});
    // ea.to(all,1,{scaleX:1.1,scaleY:1.1,scaleZ:1.1,onStart:changeM});
    ea.to(all,2,{rotationY:-1050},"-=0.5");
    ea.to(cont,1,{scaleX:0.9,scaleY:0.9,scaleZ:0.9,onUpdate:function(){
        cont.updateT();
    },onComplete:function(){
        all.removeChild(cont);
        requestAnimationFrame(go);
        touch();
    }},"-=1");
    ea.play();
    ea.eventCallback("onUpdate", function(){
        all.updateT();
    });
    ea.eventCallback('onComplete',function(){
        //console.log('end')
        startInit();
        
    })


}

var isMoving = false;
var lastMouseX = 0;
var lastMouseY = 0;
var curMouseX = 0;
var curMouseY = 0;
var lastAngleX = 30;
var lastAngleY = 0;
var angleX = 0;
var angleY = 0;
//触摸操作
function touch(){
	document.addEventListener("mousedown", mouseDownHandler);
    document.addEventListener("mouseup", mouseUpHandler);


    function mouseDownHandler(evt) {
        lastMouseX = evt.pageX;
        lastMouseY = evt.pageY;
        lastAngleX = angleX;
        lastAngleY = angleY;
        curMouseX = evt.pageX;
        curMouseY = evt.pageY;

        document.addEventListener("mousemove", mouseMoveHandler);
    }    


    function mouseMoveHandler(evt) {
        curMouseX = evt.pageX;
        curMouseY = evt.pageY;
    }    


    function mouseUpHandler(evt) {
        curMouseX = evt.pageX;
        curMouseY = evt.pageY;

        document.removeEventListener("mousemove", mouseMoveHandler);
    }

    document.addEventListener("touchstart", touchDownHandler);
    document.addEventListener("touchend", touchUpHandler);

}
function delTouch(){
    document.removeEventListener("touchmove", touchMoveHandler);
    document.removeEventListener("touchstart", touchDownHandler);
    document.removeEventListener("touchend", touchUpHandler);
}
    function touchDownHandler(evt) {
        //evt.preventDefault();
        if (!evt.touches.length) return;
        var touch = event.touches[0];
        lastMouseX = touch.pageX;
        lastMouseY = touch.pageY;
        lastAngleX = angleX;
        lastAngleY = angleY;
        // console.log(curMouseX-lastMouseX);
        curMouseX = touch.pageX;
        curMouseY = touch.pageY;
        document.addEventListener("touchmove", touchMoveHandler);
    }    
    function touchMoveHandler(evt) {
        evt.preventDefault();
        if (!evt.touches.length) return;
        var touch = event.touches[0];
        curMouseX = touch.pageX;
        curMouseY = touch.pageY;
    }
    function touchUpHandler(evt) {
        //evt.preventDefault();
        if (!evt.touches.length) return;
        var touch = event.touches[0];
        curMouseX = touch.pageX;
        curMouseY = touch.pageY;

        document.removeEventListener("touchmove", mouseMoveHandler);
    }