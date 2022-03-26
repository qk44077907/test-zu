!function(){"use strict";var a=function(a){var e,b=function(b,c){this.el=a(b),this.zoomFactor=1,this.lastScale=1,this.offset={x:0,y:0},this.options=a.extend({},this.defaults,c),this.setupMarkup(),this.bindEvents(),this.update(),this.enable()},c=function(a,b){return a+b},d=function(a,b){return a>b-.01&&b+.01>a};return b.prototype={defaults:{tapZoomFactor:2,zoomOutFactor:1.3,animationDuration:300,animationInterval:5,maxZoom:4,minZoom:.5,lockDragAxis:!1,use2d:!0,zoomStartEventName:"pz_zoomstart",zoomEndEventName:"pz_zoomend",dragStartEventName:"pz_dragstart",dragEndEventName:"pz_dragend",doubleTapEventName:"pz_doubletap"},handleDragStart:function(a){this.el.trigger(this.options.dragStartEventName),this.stopAnimation(),this.lastDragPosition=!1,this.hasInteraction=!0,this.handleDrag(a)},handleDrag:function(a){if(this.zoomFactor>1){var b=this.getTouches(a)[0];this.drag(b,this.lastDragPosition),this.offset=this.sanitizeOffset(this.offset),this.lastDragPosition=b}},handleDragEnd:function(){this.el.trigger(this.options.dragEndEventName),this.end()},handleZoomStart:function(){this.el.trigger(this.options.zoomStartEventName),this.stopAnimation(),this.lastScale=1,this.nthZoom=0,this.lastZoomCenter=!1,this.hasInteraction=!0},handleZoom:function(a,b){var c=this.getTouchCenter(this.getTouches(a)),d=b/this.lastScale;this.lastScale=b,this.nthZoom+=1,this.nthZoom>3&&(this.scale(d,c),this.drag(c,this.lastZoomCenter)),this.lastZoomCenter=c},handleZoomEnd:function(){this.el.trigger(this.options.zoomEndEventName),this.end()},handleDoubleTap:function(a){var b=this.getTouches(a)[0],c=this.zoomFactor>1?1:this.options.tapZoomFactor,d=this.zoomFactor,e=function(a){this.scaleTo(d+a*(c-d),b)}.bind(this);this.hasInteraction||(d>c&&(b=this.getCurrentZoomCenter()),this.animate(this.options.animationDuration,this.options.animationInterval,e,this.swing),this.el.trigger(this.options.doubleTapEventName))},sanitizeOffset:function(a){var b=(this.zoomFactor-1)*this.getContainerX(),c=(this.zoomFactor-1)*this.getContainerY(),d=Math.max(b,0),e=Math.max(c,0),f=Math.min(b,0),g=Math.min(c,0);return{x:Math.min(Math.max(a.x,f),d),y:Math.min(Math.max(a.y,g),e)}},scaleTo:function(a,b){this.scale(a/this.zoomFactor,b)},scale:function(a,b){a=this.scaleZoomFactor(a),this.addOffset({x:(a-1)*(b.x+this.offset.x),y:(a-1)*(b.y+this.offset.y)})},scaleZoomFactor:function(a){var b=this.zoomFactor;return this.zoomFactor*=a,this.zoomFactor=Math.min(this.options.maxZoom,Math.max(this.zoomFactor,this.options.minZoom)),this.zoomFactor/b},drag:function(a,b){b&&(this.options.lockDragAxis?Math.abs(a.x-b.x)>Math.abs(a.y-b.y)?this.addOffset({x:-(a.x-b.x),y:0}):this.addOffset({y:-(a.y-b.y),x:0}):this.addOffset({y:-(a.y-b.y),x:-(a.x-b.x)}))},getTouchCenter:function(a){return this.getVectorAvg(a)},getVectorAvg:function(a){return{x:a.map(function(a){return a.x}).reduce(c)/a.length,y:a.map(function(a){return a.y}).reduce(c)/a.length}},addOffset:function(a){this.offset={x:this.offset.x+a.x,y:this.offset.y+a.y}},sanitize:function(){this.zoomFactor<this.options.zoomOutFactor?this.zoomOutAnimation():this.isInsaneOffset(this.offset)&&this.sanitizeOffsetAnimation()},isInsaneOffset:function(a){var b=this.sanitizeOffset(a);return b.x!==a.x||b.y!==a.y},sanitizeOffsetAnimation:function(){var a=this.sanitizeOffset(this.offset),b={x:this.offset.x,y:this.offset.y},c=function(c){this.offset.x=b.x+c*(a.x-b.x),this.offset.y=b.y+c*(a.y-b.y),this.update()}.bind(this);this.animate(this.options.animationDuration,this.options.animationInterval,c,this.swing)},zoomOutAnimation:function(){var a=this.zoomFactor,b=1,c=this.getCurrentZoomCenter(),d=function(d){this.scaleTo(a+d*(b-a),c)}.bind(this);this.animate(this.options.animationDuration,this.options.animationInterval,d,this.swing)},updateAspectRatio:function(){this.setContainerY(this.getContainerX()/this.getAspectRatio())},getInitialZoomFactor:function(){return this.container[0].offsetWidth/this.el[0].offsetWidth},getAspectRatio:function(){return this.el[0].offsetWidth/this.el[0].offsetHeight},getCurrentZoomCenter:function(){var a=this.container[0].offsetWidth*this.zoomFactor,b=this.offset.x,c=a-b-this.container[0].offsetWidth,d=b/c,e=d*this.container[0].offsetWidth/(d+1),f=this.container[0].offsetHeight*this.zoomFactor,g=this.offset.y,h=f-g-this.container[0].offsetHeight,i=g/h,j=i*this.container[0].offsetHeight/(i+1);return 0===c&&(e=this.container[0].offsetWidth),0===h&&(j=this.container[0].offsetHeight),{x:e,y:j}},canDrag:function(){return!d(this.zoomFactor,1)},getTouches:function(a){var b=this.container.offset();return Array.prototype.slice.call(a.touches).map(function(a){return{x:a.pageX-b.left,y:a.pageY-b.top}})},animate:function(a,b,c,d,e){var f=(new Date).getTime(),g=function(){if(this.inAnimation){var h=(new Date).getTime()-f,i=h/a;h>=a?(c(1),e&&e(),this.update(),this.stopAnimation(),this.update()):(d&&(i=d(i)),c(i),this.update(),setTimeout(g,b))}}.bind(this);this.inAnimation=!0,g()},stopAnimation:function(){this.inAnimation=!1},swing:function(a){return-Math.cos(a*Math.PI)/2+.5},getContainerX:function(){return this.container[0].offsetWidth},getContainerY:function(){return this.container[0].offsetHeight},setContainerY:function(a){return this.container.height(a)},setupMarkup:function(){this.container=a('<div class="pinch-zoom-container"></div>'),this.el.before(this.container),this.container.append(this.el),this.container.css({overflow:"hidden",position:"relative"}),this.el.css({"-webkit-transform-origin":"0% 0%","-moz-transform-origin":"0% 0%","-ms-transform-origin":"0% 0%","-o-transform-origin":"0% 0%","transform-origin":"0% 0%",position:"absolute"})},end:function(){this.hasInteraction=!1,this.sanitize(),this.update()},bindEvents:function(){e(this.container.get(0),this),a(window).on("resize",this.update.bind(this)),a(this.el).find("img").on("load",this.update.bind(this))},update:function(){this.updatePlaned||(this.updatePlaned=!0,setTimeout(function(){this.updatePlaned=!1,this.updateAspectRatio();var a=this.getInitialZoomFactor()*this.zoomFactor,b=-this.offset.x/a,c=-this.offset.y/a,d="scale3d("+a+", "+a+",1) "+"translate3d("+b+"px,"+c+"px,0px)",e="scale("+a+", "+a+") "+"translate("+b+"px,"+c+"px)",f=function(){this.clone&&(this.clone.remove(),delete this.clone)}.bind(this);!this.options.use2d||this.hasInteraction||this.inAnimation?(this.is3d=!0,f(),this.el.css({"-webkit-transform":d,"-o-transform":e,"-ms-transform":e,"-moz-transform":e,transform:d})):(this.is3d&&(this.clone=this.el.clone(),this.clone.css("pointer-events","none"),this.clone.appendTo(this.container),setTimeout(f,200)),this.el.css({"-webkit-transform":e,"-o-transform":e,"-ms-transform":e,"-moz-transform":e,transform:e}),this.is3d=!1)}.bind(this),0))},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1}},e=function(a,b){var c=null,d=0,e=null,f=null,g=function(a,d){if(c!==a){if(c&&!a)switch(c){case"zoom":b.handleZoomEnd(d);break;case"drag":b.handleDragEnd(d)}switch(a){case"zoom":b.handleZoomStart(d);break;case"drag":b.handleDragStart(d)}}c=a},h=function(a){2===d?g("zoom"):1===d&&b.canDrag()?g("drag",a):g(null,a)},i=function(a){return Array.prototype.slice.call(a).map(function(a){return{x:a.pageX,y:a.pageY}})},j=function(a,b){var c,d;return c=a.x-b.x,d=a.y-b.y,Math.sqrt(c*c+d*d)},k=function(a,b){var c=j(a[0],a[1]),d=j(b[0],b[1]);return d/c},l=function(a){a.stopPropagation(),a.preventDefault()},m=function(a){var f=(new Date).getTime();if(d>1&&(e=null),300>f-e)switch(l(a),b.handleDoubleTap(a),c){case"zoom":b.handleZoomEnd(a);break;case"drag":b.handleDragEnd(a)}1===d&&(e=f)},n=!0;a.addEventListener("touchstart",function(a){b.enabled&&(n=!0,d=a.touches.length,m(a))}),a.addEventListener("touchmove",function(a){if(b.enabled){if(n)h(a),c&&l(a),f=i(a.touches);else{switch(c){case"zoom":b.handleZoom(a,k(f,i(a.touches)));break;case"drag":b.handleDrag(a)}c&&(l(a),b.update())}n=!1}}),a.addEventListener("touchend",function(a){b.enabled&&(d=a.touches.length,h(a))})},b};"undefined"!=typeof define&&define.amd?define(["jquery"],function(b){return a(b)}):(window.RTP=window.RTP||{},window.RTP.PinchZoom=a(window.$))}.call(this);