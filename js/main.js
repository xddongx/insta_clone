const heart = document.querySelector('.heart_btn');     // 하트 요소 부분을 선택해서 가져옴
const header = document.querySelector('#header');
const sidebox = document.querySelector('.side_box');

heart.addEventListener('click', function(){
    console.log('click');
    heart.classList.toggle('on');           // 하트를 클릭하면 .on 클래스를 추가
});

function resizeFunc(){
    if(pageYOffset >= 10){
        let calcWidth = (window.innerWidth *0.5)+167;       // 웹 페이지 기반으로 위치 재조정
        sidebox.style.left = calcWidth +'px';
    }
}

function scrollFunc(){
//    console.log(pageYOffset);
    if(pageYOffset >= 10){      // 드래그할 경우
        header.classList.add('on');
        sidebox.classList.add('on');
    }else{
        header.classList.remove('on');
        sidebox.classList.remove('on');
    }
}

window.addEventListener('scroll', scrollFunc);      // 스크롤 이벤트 발생 시 scrollfunc 실행