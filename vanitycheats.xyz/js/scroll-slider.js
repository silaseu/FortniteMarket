;(function(){'use strict'
var scrollSlider
class ScrollSlider{constructor(element,config){if(typeof this==='undefined'||Object.getPrototypeOf(this)!==ScrollSlider.prototype){return new ScrollSlider(element,config);}
scrollSlider=this;scrollSlider.version='1.0';scrollSlider.container=_resolveContainer(element);scrollSlider.initialized=false;if(config){scrollSlider.config.speed1=config.speed1||scrollSlider.config.speed1
scrollSlider.config.speed2=config.speed1||scrollSlider.config.speed2
scrollSlider.config.speed3=config.speed3||scrollSlider.config.speed3
scrollSlider.config.scale1=config.scale1||scrollSlider.config.scale1
scrollSlider.config.scale2=config.scale2||scrollSlider.config.scale2}
return scrollSlider;}
init(){if(scrollSlider&&scrollSlider.container){_init();}else{console.log('ScrollSlider: initiation failed.');}
return scrollSlider;}}
ScrollSlider.prototype.config={scale:0.9,container:document.querySelector('.scroll-slider'),speed1:0.05,speed2:-0.1,speed3:0.1,scale1:0.15,scale2:0.2,}
function _init(){scrollSlider.horizScrolWrap=scrollSlider.container.querySelector('.scroll-slides');scrollSlider.slides=scrollSlider.horizScrolWrap.querySelectorAll('.scroll-slide');scrollSlider.sticky=scrollSlider.container.querySelector('.scroll-wrapper');scrollSlider.animElements=[]
scrollSlider.slides.forEach(function(slide){let animElement={}
animElement.slide=slide
let speed1=slide.querySelector('.speed-1');if(speed1){animElement.speed1=speed1}
let speed2=slide.querySelector('.speed-2');if(speed2){animElement.speed2=speed2}
let speed3=slide.querySelector('.speed-3');if(speed3){animElement.speed3=speed3}
let scale1=slide.querySelector('.scale-1');if(scale1){animElement.scale1=scale1}
let scale2=slide.querySelector('.scale-2');if(scale2){animElement.scale2=scale2}
scrollSlider.animElements.push(animElement)});_repositionSlider(scrollSlider.sticky);_animateElements(scrollSlider.animElements,scrollSlider.sticky.offsetTop);if(!scrollSlider.initialized){window.addEventListener('scroll',_scrollHandler)
window.addEventListener('resize',_resizeHandler)
scrollSlider.initialized=true}
return scrollSlider}
function _scrollHandler(){let distance=scrollSlider.sticky.offsetTop;let ww=window.innerWidth;let sw=scrollSlider.slides[scrollSlider.slides.length-1].offsetWidth;let rightLimit=sw+(ww-sw)/2
let distRatio=scrollSlider.sticky.offsetTop/(scrollSlider.scrollWidth-512);distance=distRatio*(scrollSlider.scrollWidth-rightLimit);if(scrollSlider.container.getBoundingClientRect().top<window.innerHeight&&scrollSlider.container.getBoundingClientRect().bottom>0){scrollSlider.horizScrolWrap.style.transform=`translateX(${-distance}px)`;_animateElements(scrollSlider.animElements,distance);}}
function _resizeHandler(){_repositionSlider()}
function _resolveContainer(container){if(container){if(typeof container==='string'){return window.document.documentElement.querySelector(container)}else if(_isNode(container)){return container}else{console.log('ScrollSlider: invalid container "'+container+'" provided.')
console.log('ScrollSlider: falling back to default container.')}}
return scrollSlider.config.container}
function _repositionSlider(){scrollSlider.horizScrolWrap.style.paddingLeft=`${window.innerWidth/2-scrollSlider.slides[0].offsetWidth/2}px`;scrollSlider.scrollWidth=scrollSlider.horizScrolWrap.scrollWidth;let containerHeight=scrollSlider.scrollWidth
scrollSlider.container.style.height=`${containerHeight}px`;let horizScrolWrapTemp=scrollSlider.container.querySelector('.scroll-wrapper');let topPos=(window.innerHeight-horizScrolWrapTemp.offsetHeight)/2;topPos=topPos>0?topPos:0;scrollSlider.sticky.style.top=`${topPos}px`;}
function _comuteDynamicHeight(ref){const vw=window.innerWidth;const vh=window.innerHeight;const objectWidth=ref.scrollWidth;return objectWidth;}
function _animateElements(animElements,distance){animElements.forEach(function(animElement){let slide=animElement.slide
let moveOrigin=distance-slide.offsetLeft-slide.offsetWidth/2+window.innerWidth/2;if(animElement.speed1){let move=-moveOrigin*scrollSlider.config.speed1;animElement.speed1.style.transform=`translateX(${move}px)`;}
if(animElement.speed2){let move=moveOrigin*scrollSlider.config.speed2
animElement.speed2.style.transform=`translateX(${move}px)`;}
if(animElement.speed3){let move=moveOrigin*scrollSlider.config.speed3
animElement.speed3.style.transform=`translateX(${move}px)`;}
let scaleOrigin=(distance-slide.offsetLeft-slide.offsetWidth/2+window.innerWidth/2)/(window.innerWidth/2);scaleOrigin=Math.pow(scaleOrigin,2)
if(animElement.scale1){let scale=scaleOrigin*scrollSlider.config.scale1;scale=scale>1?1:scale
animElement.scale1.style.transform=`scale(${1-scale})`;}
if(animElement.scale2){let scale=scaleOrigin*scrollSlider.config.scale2;scale=scale>1?1:scale
animElement.scale2.style.transform=`scale(${1-scale})`;}});}
function _isNode(object){return typeof window.Node==='object'?object instanceof window.Node:object&&typeof object==='object'&&typeof object.nodeType==='number'&&typeof object.nodeName==='string'}
if(typeof module!=='undefined'&&module.exports){module.exports=ScrollSlider}else{window.ScrollSlider=ScrollSlider}})();