export let tool = {
	runNumber: 0,
	debug: false,
	created: false,
	w: window.screen.availWidth,
	h: window.screen.availHeight,
	pc: true,
	time : {t1:150, t2: 250, t3:300, t4:450},
	space : '0.5rem',
	space2 : '0.3rem',
	radius : '0.12rem',
	defalutScale : 1.015,
	FULL_WIDTH_REM : 750,
	fontSize : {h1:'0.4rem', h2:'0.32rem', h3:'0.26rem', h4:'0.2rem', h5:'0.16rem', 	h6:'0.12rem'},
	fontFamily : ["Helvetica Neue",'Helvetica',"PingFang SC","Hiragino Sans GB",	"Microsoft YaHei","微软雅黑",'Arial','sans-serif'],
	color : {main:'#222', bg:'#fff', higit:'#04f', disbel:'#666'},
	autoSize: 1,
	scroll: {
		overflow:'hidden',
		WebkitScrollbar: 'width:0',
	},

	//func
	changePc(){
		tool.pc = tool.w > 750? true : false
	},
	setRem(designWidth?: number){	
		if(!designWidth) designWidth = 750;
		let autoSize = 1;
		let doc = document, win = window;
		let docEl = doc.documentElement
		let resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize'
		let recalc = function(){
			var clientWidth = docEl.clientWidth
			if (!clientWidth) return
			if (clientWidth > designWidth) {
				docEl.style.fontSize = '100px';
				autoSize = 1;
			} else {
				docEl.style.fontSize = 100 * (clientWidth / designWidth) + 'px'
				autoSize = (clientWidth / designWidth)
			}
		}
		if (!doc.addEventListener) return
		win.addEventListener(resizeEvt, recalc, false);
		doc.addEventListener('DOMContentLoaded', recalc, false)
		return autoSize
	},
	setUnScroll(body:HTMLElement) {
		//防止移动端滚动露底, 弹性的时候还是会漏底
		//在页面拖拽到边缘的时候，通过判断拖拽方向以及是否为边缘来阻止 touchmove 事件，防止页面继续拖拽
		// !!!会导致有的时候滚动失效
		let startY:number
		let num:number = 0;
		body.addEventListener('touchstart', function (e) {
			startY = e.touches[0].clientY
		})
		body.addEventListener('touchmove', function (e) {
			// 高位表示向上滚动
			// 底位表示向下滚动
			// 1容许 0禁止
			let status = '11'
			let ele = this
			let currentY = e.touches[0].clientY;
			if (ele.scrollTop === 0) {
				// 如果内容小于容器则同时禁止上下滚动
				status = ele.offsetHeight >= ele.scrollHeight ? '00' : '01'
			} else if (ele.scrollTop + ele.offsetHeight >= ele.scrollHeight) {
				// 已经滚到底部了只能向上滚动
				status = '10'
			}
			if (status != '11') {
				// 判断当前的滚动方向
				let direction = currentY - startY > 0 ? '10' : '01';
				// 操作方向和当前允许状态求与运算，运算结果为0，就说明不允许该方向滚动，则禁止默认事件，阻止滚动
				if (!(parseInt(status, 2) & parseInt(direction, 2))) {
					e.preventDefault();
				}
			}
		})
	},
	scrollFix(elem:any){
		// Variables to track inputs
		var startY, startTopScroll;
		
		elem = elem || document.querySelector(elem);
		
		// If there is no element, then do nothing	
		if(!elem)
			return;

		// Handle the start of interactions
		elem.addEventListener('touchstart', function(event:any){
			startY = event.touches[0].pageY;
			startTopScroll = elem.scrollTop;
			
			if(startTopScroll <= 0)
				elem.scrollTop = 1;

			if(startTopScroll + elem.offsetHeight >= elem.scrollHeight)
				elem.scrollTop = elem.scrollHeight - elem.offsetHeight - 1;
		}, false);
	},
	onload(){
		let body = document.getElementsByTagName('body')[0];
		body.style.margin = '0';
		body.style.border = '0';

		window.onload = function () {  
			//防止双击放大
			document.addEventListener('touchstart',function (event) {  
				if(event.touches.length>1){  
					event.preventDefault();  
				}  
			})  
			var lastTouchEnd = 0;  
			document.addEventListener('touchend',function (event) {  
				var now=(new Date()).getTime();  
				if(now-lastTouchEnd<=300){  
					event.preventDefault();  
				}  
				lastTouchEnd=now;  
			},false)  

			//监听触摸滑动, 屏蔽了所有触摸滑动的事件(虽然可以防止滚动,但是页面无法滚动了)
			// document.getElementsByTagName('body')[0].addEventListener('touchmove', function (event) {
  			// 	event.preventDefault();
			// })
			//防止滚动
			// document.documentElement.style.overflow='hidden'
			// document.body.style.overflow='hidden'
			// document.getElementsByTagName('body')[0].style.overflow = 'hidden'

			//防止方向键滚动屏幕
			// var move=function(e:any){
			// 	e.preventDefault && e.preventDefault();
			// 	e.returnValue=false;
			// 	e.stopPropagation && e.stopPropagation();
			// 	return false;
			// }
			// var keyFunc=function(e:any){
			// 	if(37<=e.keyCode && e.keyCode<=40){
			// 		return move(e);
			// 	}
			// }
    		// document.body.onkeydown=keyFunc;
		}
	},
	assign(target:any, firstSource:any) {
		if (target === undefined || target === null) return null
		var to = Object(target);
		for (var i = 1; i < arguments.length; i++) {
			var nextSource = arguments[i];
			if (nextSource === undefined || nextSource === null) continue;
			var keysArray = Object.keys(Object(nextSource));
			for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex++) {
			var nextKey = keysArray[nextIndex];
			var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
			if (desc !== undefined) to[nextKey] = nextSource[nextKey];
			}
		}
		return to;
	},
	
	reinser(arr:any, from:number, to:number) {
		const _arr = arr.slice(0)
		const val = _arr(from);
		_arr.splice(from, 1)
		_arr.splice(to, 0, val)
		return _arr
	},
	clamp(n:any, min:number, max:number) {
		return Math.max(Math.min(n, max), min)
	},
	r(value: number) {
		return `${value / 100.0}rem`
	},
	lr(value: any) {
		let str = value.replace('rem', '');
		let num = parseFloat(str);
		return num * 100.0;
	},
	flex(obj: HTMLElement){
		obj.style.display = '-webkit-box';
		obj.style.display = '-webkit-flex';
		obj.style.display = 'flex';
		obj.style.position = 'absolute';
	},
	setPhoneView(obj: React.CSSProperties){
		if(tool.pc) return
		obj = {
			...obj,
			'-webkit-tap-highlight-color': 'transparent',
			'-webkit-user-modify': 'read-write-plaintext-only',
			'-webkit-touch-callout': 'none',
			'-webkit-transform-style': 'preserve-3d',
			'-webkit-backface-visibility': 'hidden',
			'-webkit-user-select': 'none',	/*webkit浏览器*/
			'-moz-user-select': 'none',	/*火狐*/
			'-ms-user-select': 'none',	/*IE10*/
			'user-select': 'none',
			'onselectstart': 'none',
		}
	},
	setPhoneText(obj: React.CSSProperties) {
		if(tool.pc) return
		obj = {
			...obj,
			'-webkit-tap-highlight-color': 'transparent',
			'-webkit-touch-callout': 'none', 
		}
	},
	setPhoneInput(obj: React.CSSProperties) {
		if(tool.pc) return
	},
	setFlexd(obj: React.CSSProperties) {
		let flexCss:React.CSSProperties = {
			position: 'fixed',
			zIndex:999,
		}
		obj = {...flexCss, ...obj}
	},
	toFixed(obj:number, num:number) {
		let n = obj.toFixed(1)
		return n;
	},
	// --- transform css string ---
	transform(obj:React.CSSProperties, str:string) {
		obj = {
			...obj,
			'-webkit-transform': str,
			'-moz-transform': str,
			'-ms-transform': str,
			'transform': str,
		}
	},
	translate3d(x:number, y:number, z:number):string {
		return `translate3d(${x}rem, ${y}rem, ${z}rem)`
	},
	translateX(x:number):string {
		return `translatex(${x}rem)`
	},
	translateY(y:number):string {
		return `translatey(${y}rem)`
	},
	translateZ(z:number):string {
		return `translatez(${z}rem)`
	},
	scale(x:number, y:number):string{
		return `scale(${x}, ${y})`
	},
	rotate3d(x:number, y:number, z:number): string {
		return `rotatex(${x}deg) rotatey(${y}deg) rotatez(${z}deg)`
	},
	rotateX(v:number):string {
		return `rotatex(${v}deg)`
	},
	rotateY(v:number):string {
		return `rotatey(${v}deg)`
	},
	rotateZ(v:number):string {
		return `rotatez(${v}deg)`
	},
	skew(x:number, y:number):string {
		return `skew(${x}deg, ${y}deg)`
	},
	perspective(length:number):string {
		return `perspective(${length}rem)`
	},
	matrix(a:number, b:number, c:number, d:number, e:number, f:number):string {
		return `matrix(${a}rem, ${b}rem. ${c}rem, ${d}rem, ${e}rem, ${f}rem)`
	},
	springConfig(s:number, d:number, p?:number):any{
		if(!p) p = 0.01
		//stiffness:170, damping:26, precision:0.01
		return {stiffness: s, damping: d, precision:p}
	},
}

if (tool.created === false) {
	tool.autoSize = tool.setRem()
	tool.onload()
	tool.changePc()
	tool.created = true
	let body = document.getElementsByTagName('root')[0]
	tool.scrollFix(body)
}

