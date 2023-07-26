(() => {
    'use strict'
  
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
const imageInput1 = document.getElementById('validationCustom05 imageInput1');
const imageInput2 = document.getElementById('validationCustom05 imageInput2');
const imageInput3 = document.getElementById('validationCustom05 imageInput3');
const imageInput4 = document.getElementById('validationCustom05 imageInput4');
const divToShow = document.querySelector(".text-container");
const start= document.querySelector(".start");
const second= document.querySelector(".second");
const thirds= document.querySelector(".third");
const alerts= document.querySelector(".alert");
const cake=document.querySelector(".cake");
const poerty=document.querySelector(".poerty");
const ballon=document.querySelector(".ballon");
const b1=document.querySelector("#b1");
const b2=document.querySelector("#b2");
const b3=document.querySelector("#b3");
const b4=document.querySelector("#b4");
const b5=document.querySelector("#b5");
const m1=document.querySelector(".song1");
const m2=document.querySelector(".song2");
const m3=document.querySelector(".song3");
const m4=document.querySelector(".song4");
const load1=document.querySelector(".load1");
const load2=document.querySelector(".load2");
const banner1=document.querySelector(".banner1");
const banner = document.getElementsByClassName('banner1')[0];
const blocks = document.getElementsByClassName('blocks');
var url1,url2,url3,url4;
var v=document.getElementsByClassName("poerty");
const banner2=document.querySelector(".banner2");
const bubbles=document.querySelector(".bubbles");
const spinnerbox=document.querySelector(".load3");
const fourth=document.querySelector(".fourth");

var url5= 'url(CSS/IMG_20230725_233027.jpg)';


document.body.style.backgroundColor='#32EDFA';
document.body.style.color='white';
// Hide elements with specified classes after the specified duration
setTimeout(function() {
  start.classList.add('hidden');
  second.classList.add('hidden');
  alerts.classList.add('hidden');
  cake.classList.add('hidden');
  poerty.classList.add('hidden');
  thirds.classList.add('hidden');
  fourth.classList.add('hidden');
}, 0);

setTimeout(function() {
  start.classList.remove('hidden');
  divToShow.classList.add('hidden')
  }, 3000);

imageInput1.addEventListener('change', function(event) {
	const file = event.target.files[0];
	if (file) {
	  const reader = new FileReader();
  
	  reader.onload = function() {
		url1 = `url(${reader.result})`;
	  };
  
	  reader.readAsDataURL(file);
	}
});
imageInput2.addEventListener('change', function(event) {
	const file = event.target.files[0];
  
	if (file) {
	  const reader = new FileReader();
  
	  reader.onload = function() {
		url2 = `url(${reader.result})`;
	  };
  
	  reader.readAsDataURL(file);
	}
});
imageInput3.addEventListener('change', function(event) {
	const file = event.target.files[0];
  
	if (file) {
	  const reader = new FileReader();
  
	  reader.onload = function() {
		url3 = `url(${reader.result})`;
	  };
  
	  reader.readAsDataURL(file);
	}
});
imageInput4.addEventListener('change', function(event) {
	const file = event.target.files[0];
  
	if (file) {
	  const reader = new FileReader();
  
	  reader.onload = function() {
		url4 = `url(${reader.result})`;
	  };
  
	  reader.readAsDataURL(file);
	}
});  

function gift(){
  alerts.classList.remove('hidden');
  start.classList.add('hidden');
  setTimeout(function() {
    alerts.classList.add('hidden');
    document.body.style.animation = "dark 5s forwards";
  }, 2000);
  setTimeout(function() {
    document.body.style.animation = "light 5s forwards";
	second.classList.remove('hidden');
  }, 8000);
}
const present = document.querySelector('.present');
present.onclick = () => (
	present.classList.toggle('open') ,
	cake.classList.remove('hidden'),
	setTimeout(function(){
		poerty.classList.remove('hidden');
		m1.pause();
		speechenglish()
		},19000),

	ballon.style.animation="ballons 5s forwards",
	ballon.style.opacity= '1',
	setTimeout(function(){b1.style.animation="moveballon linear 3s forwards";
	b2.style.animation="moveballon linear 3s forwards";
	b3.style.animation="moveballon linear 3s forwards";
	b4.style.animation="moveballon linear 3s forwards";
	b5.style.animation="moveballon linear 3s forwards";
	b1.style.display="inline";
	b2.style.display="inline";
	b3.style.display="inline";
	b4.style.display="inline";
	b5.style.display="inline";},15000),
	setTimeout(function(){b1.style.animation="balloons_rotate_one linear 10s infinite";
	b2.style.animation="balloons_rotate_one linear 10s infinite";
	b3.style.animation="balloons_rotate_one linear 10s infinite";
	b4.style.animation="balloons_rotate_one linear 10s infinite";
	b5.style.animation="balloons_rotate_one linear 10s infinite";},19000),
	setTimeout(function(){
		document.body.style.animation = "dark2 5s forwards";
		poerty.classList.add('hidden');
	},79000),
	setTimeout(function(){
		second.classList.add('hidden');
		third();
	},85000),		
	m1.play()
	);
(function () {
	
	'use strict'
	let width, height, lastNow
	let snowflakes
	let maxSnowflakes = 100

	function init() {
		snowflakes = []
		resize()
		render(lastNow = performance.now())
	}

	function render(now) {
		requestAnimationFrame(render)

		const elapsed = now - lastNow
		lastNow = now

		if (snowflakes.length < maxSnowflakes)
			snowflakes.push(new Snowflake())


		snowflakes.forEach(snowflake => snowflake.update(elapsed, now))
	}

	function pause() {
		cancelAnimationFrame(render)
	}
	function resume() {
		lastNow = performance.now()
		requestAnimationFrame(render)
	}


	class Snowflake {
		constructor() {
			this.spawn()
		}

		spawn(anyY = false) {
			this.x = rand(0, width)
			this.y = anyY === true
				? rand(-50, height + 50)
				: rand(-50, -10)
			this.xVel = rand(-.05, .05)
			this.yVel = rand(.02, .1)
			this.angle = rand(0, Math.PI * 2)
			this.angleVel = rand(-.001, .001)
			this.size = rand(7, 12)
			this.sizeOsc = rand(.01, .5)
		}

		update(elapsed, now) {
			const xForce = rand(-.001, .001);

			if (Math.abs(this.xVel + xForce) < .075) {
				this.xVel += xForce
			}

			this.x += this.xVel * elapsed
			this.y += this.yVel * elapsed
			this.angle += this.xVel * 0.05 * elapsed //this.angleVel * elapsed

			if (
				this.y - this.size > height ||
				this.x + this.size < 0 ||
				this.x - this.size > width
			) {
				this.spawn()
			}

		}

	}

	// Utils
	const rand = (min, max) => min + Math.random() * (max - min)

	function resize() {
		width = window.innerWidth
		height = window.innerHeight
		maxSnowflakes = Math.max(width / 10, 100)
	}
	window.addEventListener('resize', resize)
	window.addEventListener('blur', pause)
	window.addEventListener('focus', resume)
	init()

}())

function speechenglish(){
	setTimeout(function(){const synth = window.speechSynthesis;
		const utternace = new SpeechSynthesisUtterance(v[0].textContent);
		utternace.lang='en';
		utternace.pitch= 20;
		utternace.rate = 1;
		utternace.voiceURI = 'native';
		utternace.volume = 1000;
		synth.speak(utternace);},1000)
}

function third(){
	document.body.style.animation = "light2 5s forwards";
	thirds.classList.remove('hidden');
	banner1.style.opacity="0";
	load2.style.display="none";
	banner2.style.display="none";
	bubbles.style.display="none";
	spinnerbox.style.display="none";
	setTimeout(function(){	load1.style.opacity="0";
	banner1.style.opacity="1";
	banner1.style="background-image:"+url1;
	for(var i = 1 ; i < 400 ; i++){
		banner.innerHTML += "<div class='blocks'></div>";
		blocks[i].style.animationDelay = `${i * 0.05}s`;
	}
	m4.play();
	},9000)
	setTimeout(function(){
		animation1(url1,url2)
	},28000);
	setTimeout(function(){
		animation2(url2,url3)	
	},35000)
	setTimeout(function(){
		animation3(url3,url4)
	},44000)
	setTimeout(function(){
		animation3(url4,"none")
		m4.pause();
		load1.style.display="none";
		load2.style.display="flex";
	},64000)
	setTimeout(function(){
		load2.style.display="none";
		m2.play();
		animation4(url4);
	},68000)
	setTimeout(function(){
		animation2(url4,url2);
		animation5();
		bubbles.style.display="flex";
	},77000)
	setTimeout(function(){
		animation1(url2,url1);
	},86000)
	setTimeout(function(){
		animation3(url1,url3);
	},95000)
	setTimeout(function(){
		animation3(url3,url5);
	},106000)
	setTimeout(function(){
		animation6(url5,"none");
		bubbles.style.display="none";
		m2.pause();
	},115000)
	setTimeout(function(){
		spinnerbox.style.display="flex";
	},119000)
	setTimeout(function(){
		spinnerbox.style.display="none";
		fourth.classList.remove('hidden');
		m3.play();
		setTimeout(function(){
			m3.pause();
		},47000)
	},123000)
}

function animation1(image1,image2){
	var style = document.createElement('style');
	style.innerHTML=`
	.banner1{
		animation: banner11 5s forwards;
	  }
	  @keyframes banner11 {
		0%{background-image: url(`+image1+`);
		  transform: rotateY(0deg);}
		100%{background-image: `+image2+`;
			transform: rotateY(360deg);}
	  }`;
  document.head.appendChild(style);
}
function animation2(image1,image2){
	var style = document.createElement('style');
	style.innerHTML=`
	.banner1{
		animation: banner12 5s forwards;
	  }
	  @keyframes banner12 {
		0%{transform: translateZ(100%); background-image: `+image1+`;}
		100%{transform: translateZ(0%); background-image: `+image2+`;}
	  }`;
  document.head.appendChild(style);
}
function animation3(image1,image2){
	var style = document.createElement('style');
	style.innerHTML=`
	.banner1{
		animation: banner13 5s forwards;
	}
	@keyframes banner13 {
	  0%{transform: translateX(0%); background-image: `+image1+`;}
	  10%{transform: translateX(75%); background-image: `+image1+`;opacity: 0;}
	  20%{transform: translateX(150%); background-image: `+image1+`;opacity: 0;}
	  25%{transform: translateX(200%); background-image: `+image1+`;opacity: 0;}
	  50%{transform: translateX(250%); background-image: `+image2+`;opacity: 0;}
	  75%{transform: translateX(200%); background-image: `+image2+`;opacity: 0;}
	  100%{transform: translateX(0%); background-image: `+image2+`;}
	}
`;
  document.head.appendChild(style);
}

function animation4(image1){
	var style = document.createElement('style');
	style.innerHTML=`
	.banner1{
		animation: banner21 5s forwards;
	}
	@keyframes banner21{
		0%{opacity: 0;}
		100%{opacity: 1; background-image: `+image1+`;}
	}
`;
  document.head.appendChild(style);
}

function animation5(){
	var style = document.createElement('style');
	style.innerHTML=`
	.bubble{
		animation: flying 10s infinite ease-in;
	  }
		  @keyframes flying{
		0%{
			bottom: -100px;
			transform: translateX(0);
		}
		50%{
			transform: translateX(100px);
		}
		100%{
			bottom: 768px;
			transform: translateX(-300px);
		}
	  }
`;
  document.head.appendChild(style);
}

function animation6(image1,image2){
	var style = document.createElement('style');
	style.innerHTML=`
	.banner1{
		animation: banner22 5s forwards;
	}
	@keyframes banner22 {
		0%{transform: rotateY(0deg); background-image: `+image1+`;}
		100%{transform: rotateY(180deg); background-image: `+image2+`;}
	  }

`;
  document.head.appendChild(style);
}

