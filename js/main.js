const heart = document.querySelector('.heart_btn');
const container = document.querySelector('#container');
const sidebox = document.querySelector('.side_box');

heart.addEventListener('click',function (){
    console.log('hit');
    heart.classList.toggle('on');//좋아요 껃다 켜기
})

function resizeFunc(){
     let calWidth = window.innerWidth;
     sidebox.style.left = calWidth * 0.5 +164 + "px";
}   

window.onload = function(){
    resizeFunc();
    window.addEventListener('resize',function(){
        resizeFunc();
    })
}

function scrollFunc(){
    console.log(pageYOffset);
    if(pageYOffset >= 10){//10보다 크면
        container.classList.add('on');//id container+on
        sidebox.classList.add('on');
        
    }
    else{
        container.classList.remove('on');
        sidebox.classList.remove('on');
        //sidebox.removeAttribute('style');
    }
}


window.addEventListener('scroll', scrollFunc);

