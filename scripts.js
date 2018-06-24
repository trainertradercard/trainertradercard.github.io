var selectedGenName = "";
var selectedTradeType = "forTradeButton";
var PhotoSrcArray = [];
var PhotoSrcArrayGen2 = [];
var PhotoSrcArrayGen3 = [];
var PhotoSrcArrayGen4 = [];

var lookingForImg = [];
var forTradeImg = [];

var gen1Offset = 1;
var gen2Offset = 152;
var gen3Offset = 252;
var gen4Offset = 387;

for(var i = 1; i <= 151; i++){
   PhotoSrcArray.push("http://pokedream.com/pokedex/images/blackwhite/front/"+("000" + i).slice(-3)+".png")
}
for(var i = 152; i <= 251; i++){
   PhotoSrcArrayGen2.push("http://pokedream.com/pokedex/images/blackwhite/front/"+("000" + i).slice(-3)+".png")
}
for(var i = 252; i <= 386; i++){
   PhotoSrcArrayGen3.push("http://pokedream.com/pokedex/images/blackwhite/front/"+("000" + i).slice(-3)+".png")
}
for(var i = 387; i <= 493; i++){
   PhotoSrcArrayGen4.push("http://pokedream.com/pokedex/images/blackwhite/front/"+("000" + i).slice(-3)+".png")
}

window.onload = function() {
	drawCardCanvas();
	

};
var imgLimit = 8;
function drawCardCanvas() {

	var c=document.getElementById("canvas");

    var img=document.getElementById("baseCardImg");
    var avatarimg=document.getElementById("avatarImg");
    var printImg=document.getElementById("printToCanvasImg");
    $("canvas").attr('width', img.width);
	$("canvas").attr('height', img.height);


    var ctx=c.getContext("2d");
    ctx.clearRect(0,0,img.width,img.height);
	ctx.drawImage(img, 0, 0);
	ctx.drawImage(avatarimg, 300, 45);
	ctx.font="13px Kanit";
	ctx.fillText("Looking For:",40,215);
	ctx.fillText("For Trade:",40,415);
	ctx.font="33px Kanit";
	ctx.fillText($("#usr").val(),60,90);
	ctx.font="20px Kanit";
	ctx.fillText($("#idBox").val(),60,150);

	var x_offset = 0;
	var y_offset = 0;
	var ind = 0;
	lookingForImg.forEach(function(entry) {
		if(ind<imgLimit)
		{
		    printImg.src = entry;
		    ctx.drawImage(printImg, 20 + x_offset, 210 + y_offset);
		    x_offset+= printImg.width;
		    ind++;
		    if(ind%4 == 0) 
	    	{
	    		y_offset += printImg.height;
	    		x_offset = 0;
	    	}
    	}

	});
	x_offset = 0;
	y_offset = 0;
	ind = 0;
	forTradeImg.forEach(function(entry) {
		if(ind<imgLimit)
		{
			printImg.src = entry;
		    ctx.drawImage(printImg, 20 + x_offset, 410 + y_offset);
		    x_offset+= printImg.width;
		    ind++;
		    if(ind%4 == 0)
		    {
	    		y_offset += printImg.height;
	    		x_offset = 0;
	    	}
	    	
    	}

	});
};



function updateAvatar(){
    var selectedText = $("#avatarSelection").find("option:selected").text();
    var avatarimg=document.getElementById("avatarImg");
    if(selectedText=="Instinct Female")
    {
    	avatarimg.src = "instinct-f.png";
    }
    if(selectedText=="Instinct Male")
    {
    	avatarimg.src = "instinct-m.png";
    }
    if(selectedText=="Mystic Female")
    {
    	avatarimg.src = "mystic-f.png";
    }
    if(selectedText=="Mystic Male")
    {
    	avatarimg.src = "mystic-m.png";
    }
    if(selectedText=="Valor Female")
    {
    	avatarimg.src = "valor-f.png";
    }
    if(selectedText=="Valor Male")
    {
    	avatarimg.src = "valor-m.png";
    }
    avatarimg.onload = function(){
    	drawCardCanvas();	
    }
    
    
}

function addImageDynamically(_src){
	if(selectedTradeType == "forTradeButton")
	{
		forTradeImg.push(_src);
	}
	if(selectedTradeType == "lookingForButton")
	{
		lookingForImg.push(_src);
	}
	drawCardCanvas();
}

function removeLast(type){
	if(type == "forTradeButton")
	{
		forTradeImg.pop();
	}
	if(type == "lookingForButton")
	{
		lookingForImg.pop();
	}
	drawCardCanvas();
}


function displayGen(genBoxId){
	$('.well').attr('style', "display: none;");
	$("#" + genBoxId).attr('style', "display: inherit;");
}

function selectAddType(addType){
	$('.tradeType').attr('class', "btn btn-primary tradeType");
	$("#" + addType).attr('class', "btn btn-primary tradeType active");
	selectedTradeType = addType;
}

$( document ).ready(function() {
		for(var i = 0; i < PhotoSrcArray.length; i++){
		$("#gen1Box").append('<img onclick="addImageDynamically(this.src)" src="'+PhotoSrcArray[i] +'">');
		}
		for(var i = 0; i < PhotoSrcArrayGen2.length; i++){
		$("#gen2Box").append('<img onclick="addImageDynamically(this.src)" src="'+PhotoSrcArrayGen2[i] +'">');
		}
		for(var i = 0; i < PhotoSrcArrayGen3.length; i++){
		$("#gen3Box").append('<img onclick="addImageDynamically(this.src)" src="'+PhotoSrcArrayGen3[i] +'">');
		}
		for(var i = 0; i < PhotoSrcArrayGen4.length; i++){
		$("#gen4Box").append('<img onclick="addImageDynamically(this.src)" src="'+PhotoSrcArrayGen4[i] +'">');
		}
});