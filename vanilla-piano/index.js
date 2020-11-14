console.log('testing')

window.addEventListener('keypress',(e)=>{
    
    const tone = document.querySelector(`audio[data-key="${e.keyCode}"]`)//check here if issue
    console.log('tone '+tone)
     if(!tone)return
    const pianoKey = document.querySelector(`.pianoKey[data-key="${e.keyCode}"]`)
    tone.currentTime = 0
    pianoKey.classList.add('pressed')
    tone.play()
    setTimeout(()=>{
        pianoKey.classList.remove('pressed')
    },300)
})

