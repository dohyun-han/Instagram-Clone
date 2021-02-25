const heart = document.querySelector('.heart_btn');

heart.addEventListener('click',function (){
    console.log('hit');
    heart.classList.toggle('on');
})

