$(function(){const e=$("#js-message").offset().top,t=$("#js-message").outerHeight();$(window).scroll(function(){$(this).scrollTop()>e?($("#js-message").addClass("fixed"),$("body").css("padding-top",t)):($("#js-message").removeClass("fixed"),$("body").css("padding-top",0))})});var imgElements=document.querySelectorAll("img");imgElements.forEach(function(e){e.setAttribute("loading","lazy")});var videoElements=document.querySelectorAll("video");videoElements.forEach(function(e){e.setAttribute("preload","none")});const boxes=document.querySelector(".boxes");for(var i=0;i<=30;i++){const e=document.createElement("div");function changeImagePosition(){var t=Math.floor(Math.random()*(window.innerHeight-e.clientHeight)),o=Math.floor(Math.random()*(window.innerWidth-e.clientWidth));e.style.top=t+"px",e.style.left=o+"px"}e.classList.add("block"),boxes.appendChild(e),e.classList.add("rand"),changeImagePosition()}const artImages=document.querySelectorAll(".art_img");artImages.forEach(function(e){var t,o;t=Math.floor(Math.random()*(window.innerHeight-e.clientHeight)),o=Math.floor(Math.random()*(window.innerWidth-e.clientWidth)),e.style.top=t-100+"px",e.style.left=o-100+"px"}),function(){for(var e,t,o=document.getElementsByClassName("drag_move"),n=0;n<o.length;n++)o[n].addEventListener("mousedown",s,!1),o[n].addEventListener("touchstart",s,!1);function s(o){if(this.classList.add("drag"),"mousedown"===o.type)var n=o;else n=o.changedTouches[0];e=n.pageX-this.offsetLeft,t=n.pageY-this.offsetTop,document.body.addEventListener("mousemove",d,!1),document.body.addEventListener("touchmove",d,!1)}function d(o){var n=document.getElementsByClassName("drag")[0];if("mousemove"===o.type)var s=o;else s=o.changedTouches[0];o.preventDefault(),n.style.top=s.pageY-t+"px",n.style.left=s.pageX-e+"px",n.addEventListener("mouseup",a,!1),document.body.addEventListener("mouseleave",a,!1),n.addEventListener("touchend",a,!1),document.body.addEventListener("touchleave",a,!1)}function a(e){document.getElementsByClassName("drag")[0];document.body.removeEventListener("mousemove",d,!1),document.removeEventListener("mouseup",a,!1),document.body.removeEventListener("touchmove",d,!1),document.removeEventListener("touchend",a,!1),$(".drag_move").removeClass("drag")}}();let count=0,eleShape=document.getElementsByClassName("drag_move");for(i=0;i<eleShape.length;i++)eleShape[i].addEventListener("mousedown",moveFront,!1),showZIndex(eleShape[i]);function moveFront(e){count++,this.style.zIndex=count,showZIndex(this)}function showZIndex(e){e.style.zIndex="Z="+e.style.zIndex}