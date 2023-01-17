
const playBtn = document.querySelector('.play');
const strain = document.querySelector('audio');

playBtn.addEventListener('click', () => {
    if(strain.paused){
        strain.play();
        playBtn.innerHTML = '<img src="./img/pause.svg" alt="">'
        document.querySelector('img.avatar ').classList.add('active');

        
    }else{
        strain.pause();
        playBtn.innerHTML = '<img src="./img/play.svg" alt="">'
        document.querySelector('img.avatar ').classList.remove('active');
        
    }
});
