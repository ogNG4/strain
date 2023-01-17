
const playBtn = document.querySelector('.play');
const strain = document.querySelector('audio');
const seek = document.querySelector('.seek');
const duration = document.querySelector('.duration');
const currentTime = document.querySelector('.current-time');

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


seek.addEventListener('input' , () =>{
    strain.currentTime = strain.duration * (seek.value/100);
})


strain.addEventListener('timeupdate', () =>{
    seek.value = strain.currentTime / strain.duration *100;
})



strain.addEventListener("timeupdate", () => {
    seek.value = strain.currentTime / strain.duration * 100;
    const currentMinutes = Math.floor(strain.currentTime / 60);
    const currentSeconds = Math.floor(strain.currentTime % 60);
    currentTime.innerHTML = `${currentMinutes}:${currentSeconds}`;
});