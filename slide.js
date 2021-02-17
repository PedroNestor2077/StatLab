window.onresize=()=>{
	BoxMargin=1440
	wrapper.style.marginLeft='1440px'
}

function Next(){
	let boxSize=wrapper.clientWidth
	const maxMargin=(boxSize*2)
	if (BoxMargin>0){
		
		let value=(BoxMargin-boxSize).toString()+'px'
		BoxMargin=(BoxMargin-boxSize)
		wrapper.style.marginLeft=value
	}	
}
function Prev(){
	let boxSize=wrapper.clientWidth
	const maxMargin=(boxSize*2)
	if (BoxMargin<=maxMargin){
		let value=(BoxMargin+boxSize).toString()+'px'
		BoxMargin=(BoxMargin+boxSize)
		wrapper.style.marginLeft=value
	}
	console.log(BoxMargin)
}
var next=document.getElementById('next')
var prev=document.getElementById('prev')
var exprements=document.getElementById('experiments')
var wrapper=document.getElementById('wrapper')
var BoxMargin=1440

next.addEventListener('click',Next)
prev.addEventListener('click',Prev)