const elements = [
    {
        name: null,
        id: 'uno',
        colors: ['FF4632', '4100F5'],
    },
    {
        name: null,
        id: 'dos',
        colors: ['FF4632', '4100F5'],
    },
    {
        name: null,
        id: 'tres',
        colors: ['4100F5', 'FF4632'],
    },
    {
        name: null,
        id: 'cuatro',
        colors: ['F037A5', 'FF4632'],
    },
    {
        name: null,
        id: 'cinco',
        colors: ['FF6437', 'FF4632'],
    },
    {
        name: null,
        id: 'seis',
        colors: ['FFC864', 'FF4632'],
    },
    {
        name: 'All',
        id: 'all',
        colors: ['FFC864', 'FF4632'],
    },
    {
        name: 'New Parents',
        id: 'newParents',
        colors: ['FF4632'],
    },
    {
        name: 'Healthy Living',
        id: 'healthyLiving',
        colors: ['FF4632', '4100F5'],
    },
    {
        name: 'Fitness Enthusiasts',
        id: 'fitnessEnthusiasts',
        colors: ['4100F5', 'F037A5'],
    },
    {
        name: 'Gamers',
        id: 'gamers',
        colors: ['A0C3D2', '4100F5'],
    },
    {
        name: null,
        id: 'siete',
        colors: ['4100F5'],
    },
]

const posAllElemets = (element, index = 0) => {
    const bgStyle =
        element.colors.length > 1
            ? `linear-gradient( #${element.colors[0]}, #${element.colors[1]})`
            : `#${element.colors[0]}`

    return `
    <div 
        id="${element.id}"
        style="background:${bgStyle}; 
        left: ${index * 90 + 100}px;
        top: ${index * 80 - 400}px;">

        <div class="next">
            <div class="wrapper-picture">
                <picture class="right-image">
                    <img src="image.png" alt="">
                </picture>
            </div>

            <div class="wrapper-picture">
                <picture class="left-image">
                    <img src="image.png" alt="">
                </picture>
            </div>
        </div>
        
    </div>`
}

const slides = elements.map(posAllElemets)

document.querySelector('.wrapper').innerHTML = slides.join('')

// create a list
const list = elements.map((_) => {
    if (!_.name) return

    return `<li>
        <button id="${_.id}__" data-id="${_.id}" onclick="onclick_(this)" onmouseout="onmouseout_(this)" onmouseover="onmouseover_(this)">${_.name}</button>
    </li>`
})

document.body.innerHTML += `<ul> ${list.join('')} </ul>`

const initTL = anime
    .timeline({
        duration: 300,
        easing: 'easeOutExpo',
    })
    .add({
        targets: '.wrapper > div',
        translateY: ['7000px', '0'],
        translateX: ['7000px', '0'],
        duration: 500,
        delay: anime.stagger(100),
        easing: 'easeOutExpo',
    })
    .add({
        targets: 'ul li',
        translateY: ['7000px', '0'],
        duration: 1000,
        delay: anime.stagger(100),
    })

function onmouseover_(e) {
    anime({
        targets: `#${e.dataset.id}`,
        scale: '1.1',
    })
}

function onmouseout_(e) {
    anime({
        targets: `#${e.dataset.id}`,
        scale: '1',
    })
}

function onclick_(e) {
    e.disabled = true

    const widthWindow = window.innerWidth
    const heightWindw = window.innerHeight

    const indexEl = elements.findIndex((_) => _.id === e.dataset.id)

    const up = elements.reduce(
        (acc, cur, index) => {
            if (index < indexEl) {
                acc.push(`#${cur.id} `)
            }
            return acc
        },
        ['ul']
    )

    const down = elements.reduce((acc, cur, index) => {
        if (index > indexEl) {
            acc.push(`#${cur.id}`)
        }
        return acc
    }, [])

    const tl_ = anime
        .timeline({
            easing: 'easeOutExpo',
            duration: 600,
            complete: function () {
                console.log(e.dataset.id)
                // document
                //     .querySelector(`#${e.dataset.id} .right-image`)
                //     .classList.add('animeScale')
                //
                // document
                //     .querySelector(`#${e.dataset.id} .left-image`)
                //     .classList.add('animeScale__2')
            },
        })
        .add({
            targets: up,
            easing: 'easeInOutExpo',
            translateY: {
                value: '-1000px',
            },
            delay: anime.stagger(40),
            translateX: '500px',
            duration: 200,
        })
        .add(
            {
                targets: `${down}`,
                top: '2000px',
                delay: anime.stagger(40),
            },
            10
        )
        .add(
            {
                targets: `#${e.dataset.id}`,
                width: '525px',
                left: {
                    value: `${widthWindow / 2 - 250}px`,
                    duration: 50,
                    easing: 'easeOutExpo',
                },
                top: {
                    value: `${heightWindw / 2 - 250}px`,
                    duration: 50,
                    delay: 50,
                    easing: 'easeOutExpo',
                },
                rotate: {
                    value: ['0deg', '45deg'],
                    duration: 100,
                    easing: 'easeOutExpo',
                },
                scale: {
                    value: [1, 4],
                    delay: 700,
                    duration: 100,
                    easing: 'easeInSine',
                },
            },
            200
        )
        .add(
            {
                targets: `#${e.dataset.id} .next`,
                rotateZ: '-90deg',
                scale: {
                    value: [0, 0.3],
                    duration: 900,
                    delay: 100,
                },
                easing: 'easeOutCirc',
            },
            350
        )
        .add(
            {
                targets: `#${e.dataset.id} img`,
                top: ['300px', '-81px'],
                easing: 'easeOutCirc',
                duration: 500,
            },
            '-=200'
        )
}
