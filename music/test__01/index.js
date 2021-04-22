const sound = new Howl({
    src: [
        'https://raw.githubusercontent.com/goldfire/howler.js/master/examples/player/audio/80s_vibe.mp3',
        'https://raw.githubusercontent.com/goldfire/howler.js/master/examples/player/audio/80s_vibe.webm',
    ],
})

function play() {
    sound.play()
}

function stop() {
    sound.stop()
}

const controller = new ScrollMagic.Controller()

const pinIntroScene = new ScrollMagic.Scene({
    triggerElement: '#element1',
    triggerHook: 0,
    duration: '200%',
})
    .setPin('#element1', { pushFollowers: false })
    .addTo(controller)
    .on('enter', () => {
        console.log('scene enter')
        document
            .querySelector('#element1 .card-wrapper')
            .classList.add('anima-card-wrapper')
        sound.play()
    })
    .on('leave', () => {
        console.log('scene leave')
        sound.stop()
        document
            .querySelector('.anima-card-wrapper')
            .classList.remove('anima-card-wrapper')
        document.body.classList.add('addcolor')
    })

const pintNextScene = new ScrollMagic.Scene({
    triggerElement: 'element2',
    triggerHook: 0,
    duration: '200%',
})
    .setPin('#element2', { pushFollowers: false })
    .addTo(controller)
    .on('enter', () => {
        console.log('other')
    })
    .on('leave', () => {
        console.log('leave other')
        document.body.classList.remove('addcolor')
    })
