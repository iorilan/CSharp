function colorFactory(ctlId){
}

colorFactory.prototype = {

//========================��ʼ����ɫ��==================================
init : function(ctl){
var colorArr = new Array("#990033","#CC6699","#FF6699","#FF3366","#993366","#CC0066","#CC0033","#FF0066","#FF0033","#CC3399",
	"#FF3399","#FF9999","#FF99CC","#FF0099","#CC3366","#FF66CC","#FF33CC","#FFCCFF","#FF99FF","#FF00CC",
	"#FF66FF","#CC33CC","#CC00FF","#FF33FF","#CC99FF","#9900CC","#FF00FF","#CC66FF","#990099","#CC0099",
	"#CC33FF","#CC99CC","#990066","#993399","#CC66CC","#CC00CC","#663366","#660099","#666FFF","#000CCC","#9933CC",
	"#666699","#660066","#333366","#0066CC","#9900FF","#333399","#99CCFF","#9933FF","#330099","#6699FF","#9966CC","#3300CC",
	"#003366","#330033","#3300FF","#6699CC","#663399","#3333FF","#006699","#6633CC","#3333CC", "#3399CC","#6600CC","#0066FF","#0099CC","#9966FF",
	"#0033FF","#66CCFF","#330066","#3366FF","#3399FF","#6600FF","#3366CC","#003399","#6633FF","#000066","#0099FF","#CCCCFF","#000033","#33CCFF","#9999FF",
	"#0000FF","#00CCFF","#9999CC","#000099","#6666CC","#0033CC","#FFFFCC","#FFCC00","#CC99090","#663300","#FF6600","#663333","#CC6666","#FF6666","#FF0000",
	"#FFFF99","#FFCC66","#FF9900","#FF9966","#CC3300","#996666","#FFCCCC","#660000","#FF3300","#FF6666","#FFCC33",
	"#CC6600","#FF6633","#996633","#CC9999","#FF3333","#990000","#CC9966","#FFFF33","#CC9933","#993300","#FF9933",
	"#330000","#993333","#CC3333","#CC0000","#FFCC99","#FFFF00","#996600","#CC6633","#99FFFF","#33CCCC","#00CC99","#99FF99","#009966","#33FF33",
	"#33FF00","#99CC33","#CCC333","#66FFFF","#66CCCC","#66FFCC","#66FF66","#009933","#00CC33","#66FF00","#336600","#333000","#33FFFF","#339999",
	"#99FFCC","#339933","#33FF66","#33CC33","#99FF00","#669900","#666600","#00FFFF","#336666","#00FF99","#99CC99","#00FF66","#66FF33","#66CC00",
	"#99CC00","#999933","#00CCCC","#006666","#339966","#66FF99","#CCFFCC","#00FF00","#00CC00","#CCFF66","#CCCC66","#009999","#003333",
	"#006633","#33FF99","#CCFF99","#66CC33","#33CC00","#CCFF33","#666633","#669999","#00FFCC","#336633","#33CC66","#99FF66","#006600",
	"#339900","#CCFF00","#999966","#99CCCC","#33FFCC","#669966","#00CC66","#99FF33","#003300","#99CC66",
	"#999900","#CCCC99","#CCFFFF","#33CC99","#66CC66","#66CC99","#00FF33","#009900","#669900","#669933",
	"#CCCC00","#FFFFFF","#CCCCCC","#999999","#666666","#333333","#000000");

for(var i = 0;i < colorArr.length;i ++){
ctl.innerHTML += "<span style='background-color:" +colorArr[i] +";border:1px solid #ffffff;' onclick=changeColor('" +colorArr[i] +"');> &nbsp;</span>";
}

//=======================================================================

}



}