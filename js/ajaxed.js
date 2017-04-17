var vhome = document.getElementById("ihome");
var vabout = document.getElementById("iabout");
var vchildhood = document.getElementById("ichildhood");
var vcollege = document.getElementById("icollege");
var vnss = document.getElementById("inss");
var vlove = document.getElementById("ilove");
var vstep = document.getElementById("istep");
var vdad = document.getElementById("idad");
var vcontact = document.getElementById("icontact");
var vfeedback = document.getElementById("ifeedback");

var ta = document.getElementById('contentdiv');		
var x = new XMLHttpRequest;
function funct(){
	ta.innerHTML = x.responseText;	
}

function func(){
	x.open("GET", "pages/home.html");
	x.onreadystatechange =funct;
	x.send();
}

function fhome(){
	x.abort();
	x.open("GET", "pages/home.html");
	x.onreadystatechange =funct;
	x.send();
}

function fabout(){
	x.abort();
	x.open("GET", "pages/about.html");
	x.onreadystatechange =funct;
	x.send();
}

function fchildhood(){
	x.abort();
	x.open("GET", "pages/childhood.html");
	x.onreadystatechange =funct;
	x.send();
}

function fcollege(){
	x.abort();
	x.open("GET", "pages/college.html");
	x.onreadystatechange =funct;
	x.send();
}

function fnss(){
	x.abort();
	x.open("GET", "pages/nss.html");
	x.onreadystatechange =funct;
	x.send();
}

function flove(){
	x.abort();
	x.open("GET", "pages/love.html");
	x.onreadystatechange =funct;
	x.send();
}

function fstep(){
	x.abort();
	x.open("GET", "pages/step.html");
	x.onreadystatechange =funct;
	x.send();
}

function fdad(){
	x.abort();
	x.open("GET", "pages/dad.html");
	x.onreadystatechange =funct;
	x.send();
}

function fcontact(){
	x.abort();
	x.open("GET", "pages/contact.html");
	x.onreadystatechange =funct;
	x.send();
}

function ffeedback(){
	x.abort();
	x.open("GET", "pages/feedback.html");
	x.onreadystatechange =funct;
	x.send();
}

window.onload=func;

if(vhome){
	if(vhome.addEventListener)
		vhome.addEventListener("click", fhome, false);
	else if(vhome.attachEvent)
		vhome.attachEvent('onclick', fhome);
}

if(vabout){
	if(vabout.addEventListener)
		vabout.addEventListener("click", fabout, false);
	else if(vabout.attachEvent)
		vabout.attachEvent('onclick', fabout);
}

if(vchildhood){
	if(vchildhood.addEventListener)
		vchildhood.addEventListener("click", fchildhood, false);
	else if(vchildhood.attachEvent)
		vchildhood.attachEvent('onclick', fchildhood);
}

if(vcollege){
	if(vcollege.addEventListener)
		vcollege.addEventListener("click", fcollege, false);
	else if(vcollege.attachEvent)
		vcollege.attachEvent('onclick', fcollege);
}

if(vnss){
	if(vnss.addEventListener)
		vnss.addEventListener("click", fnss, false);
	else if(vnss.attachEvent)
		vnss.attachEvent('onclick', fnss);
}

if(vlove){
	if(vlove.addEventListener)
		vlove.addEventListener("click", flove, false);
	else if(vlove.attachEvent)
		vlove.attachEvent('onclick', flove);
}

if(vstep){
	if(vstep.addEventListener)
		vstep.addEventListener("click", fstep, false);
	else if(vstep.attachEvent)
		vstep.attachEvent('onclick', fstep);
}

if(vdad){
	if(vdad.addEventListener)
		vdad.addEventListener("click", fdad, false);
	else if(vdad.attachEvent)
		vdad.attachEvent('onclick', fdad);
}

if(vcontact){
	if(vcontact.addEventListener)
		vcontact.addEventListener("click", fcontact, false);
	else if(vcontact.attachEvent)
		vcontact.attachEvent('onclick', fcontact);
}

if(vfeedback){
	if(vfeedback.addEventListener)
		vfeedback.addEventListener("click", ffeedback, false);
	else if(vfeedback.attachEvent)
		vfeedback.attachEvent('onclick', ffeedback);
}
