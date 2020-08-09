function changeHeadingColor(type){
   console.log(type);
   switch (type) {
      case 'info':
      $('#maintitle').attr("class","my-info-class");
      // documet.getElementById('maintitle').style.Color();
      break;
      case 'danger':
      $('#maintitle').attr("class","my-danger-class");
      break;
      case 'success':
      $('#maintitle').attr("class","my-success-class");
      break;
   }
}


function loopMyColorChange(){
   setTimeout(function(){
      $('#maintitle').attr("class","my-info-class");
      setTimeout(function(){
         $('#maintitle').attr("class","");
         loopMyColorChange();
      }, 1000);
   }, 1000);
}
