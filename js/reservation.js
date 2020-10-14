function init(){
    
var strFun2 = document.querySelectorAll('.tab-body figure img');    
var imgLarge = document.querySelector('.tab-body p img');

for(var i=0;i<strFun2.length;i++){
    strFun2[i].addEventListener('click',changeImg);
//선택자.addEventListener('click',function(){changeImg(i)});
}
    
function changeImg(){
    var a = this.src //내가 클릭한 작은 이미지의 src값;
    imgLarge.src = a;
}
    
//console.log(  imgStr.substr(31,2)  );  //01
}  
 
window.addEventListener('DOMContentLoaded',init);