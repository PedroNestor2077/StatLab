window.onresize=()=>{
	BoxMargin=wrapper.clientWidth*4
	let value=(BoxMargin-wrapper.clientWidth).toString()+'px'
	wrapper.style.marginLeft=value
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
}
var next=document.getElementById('next')
var prev=document.getElementById('prev')
var exprements=document.getElementById('experiments')
var wrapper=document.getElementById('wrapper')
var BoxMargin=wrapper.clientWidth*3


next.addEventListener('click',Next)
prev.addEventListener('click',Prev)