/*
global functions
*/


////���ؿͻ��˶���
function $(clientId){
return document.getElementById(clientId);
}

////���SELECTѡ����
function GetSelectObj(clientId){
var obj = $(clientId);

var index = obj.selectedIndex; // ѡ������
return obj.options[index];
}

////����ʹ��
function DebugVar(param){
$("debug").innerHTML=param;
}

function DebugTxt(text){
$("debug").innerHTML = text;
}


////���������
function GetRandom(n){return Math.floor(Math.random()*n+1)}

////�洢��ֵ��
function addKV(k,v){
localStorage.setItem(k,v);

}

////ȡ�ü�ֵ�Ե�ֵ
function getV(k){
return localStorage.getItem(k);
}

////��ñ��ش洢������ֵ��ת��Ϊ�ַ���
function getAllValueToStr(){
var content = "";
 for(var i=0;i<localStorage.length;i++){
  //key(i)�����Ӧ�ļ�������getItem()������ö�Ӧ��ֵ
   content += localStorage.key(i)+ " : " + localStorage.getItem(localStorage.key(i)) + "<br />";
}
}