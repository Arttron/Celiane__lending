/**
 * Created by User on 13.05.2017.
 */
var doc = document.querySelector('.close');
function hendler(event){
  // console.log(event.code);
    if(event.code=='KeyV'){
        doc.className = 'hidden';
    }else{
        doc.className = 'close';
    }

}



window.addEventListener('keypress', hendler);