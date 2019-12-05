window.onload = function(){
  var oDiv = document.getElementById('div1'); 
  var oBtn = document.getElementById('btn'); 
  var oD = oDiv.getElementsByTagName('div'); 
  var num = 0;
  function fnTab(){
		oD[num].className = 'active';
	}
	for( var i=0; i<oD.length; i++ ){
		oD[i].index = i;			// 索引值
		oD[i].onmouseover = function (){
			num = this.index;
			fnTab();
		};
  }
  oBtn.onclick = function(){
    oDiv.style.display = 'block';
  }
}