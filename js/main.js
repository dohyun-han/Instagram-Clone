const heart = document.querySelector('.heart_btn');
const container = document.querySelector('#container');
const sidebox = document.querySelector('.side_box');
const delegation = document.querySelector('.contents_box');



function delegationFunc(e){
    let elem = e.target;
    //console.log(elem);

    if(elem.matches('[data-name="heartbeat"]')){
        console.log('하트');
    }
    else if(elem.matches('[data-name="bookmart"]')){
        console.log('북마크');
    }
    else if(elem.matches('[data-name="share"]')){
        console.log('공유');
    }
    elem.classList.toggle('on');
}

function resizeFunc(){
     let calWidth = window.innerWidth;
     sidebox.style.left = calWidth * 0.5 +164 + "px";
}   


function scrollFunc(){
    if(pageYOffset >= 10){//10보다 크면
        container.classList.add('on');//id container+on
        if(sidebox)
            sidebox.classList.add('on');
        
    }
    else{
        container.classList.remove('on');
        if(sidebox)
            sidebox.classList.remove('on');
        //sidebox.removeAttribute('style');
    }
}

setTimeout(function(){
    scrollTo(0,0);
},100);

window.onload = function(){
    resizeFunc();
    window.addEventListener('resize',function(){
        resizeFunc();
    })
}

window.addEventListener('click', delegationFunc);
window.addEventListener('scroll', scrollFunc);
