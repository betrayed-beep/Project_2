var a=0;
var b=0;
var limit=5;
var flag=1;

var updatescore1=document.querySelector("#score1");
var updatescore2=document.querySelector("#score2");
var b1=document.querySelector("#p1");
var b2=document.querySelector("#p2");
var reset=document.querySelector("#reset");
var numInput=document.querySelector("input");
var winingscoredisplay=document.querySelector("p span");

numInput.addEventListener("change",function(){
	winingscoredisplay.textContent=this.value;
	limit=Number(this.value);
});
b1.addEventListener("click",function(){
	if(flag===1)
	{
	a++;
	updatescore1.textContent=a;
}
if(a===limit)
{   updatescore1.style.color="green";
	flag=0;
}
});
b2.addEventListener("click",function(){
	if(flag===1)
	{
	b++;
	updatescore2.textContent=b;
    }
if(b===limit)
{	updatescore2.style.color="green";
	flag=0;
}
});
reset.addEventListener("click",function(){
	a=0;
	b=0;
	flag=1;
	updatescore2.textContent=b;
	updatescore1.textContent=a;
	updatescore1.style.color="white";
	updatescore2.style.color="white";
});
