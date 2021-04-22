const data = {
    message: 'Hello!',
}

const handler = {
    set(target, key, value) {
        console.log({ target })
        console.log({ key })
        console.log({ value })
    },
}

const proxy = new Proxy(data, handler)

proxy.message = 'hello!!!!'

console.log(data.message)

const template = `
    <header>
        How to change of th world
    </header>
`
console.log(template)

const app = Vue.createApp({
    data() {
        return {
            title: 'blalblala',
            quien: 'no pues nadaa',
        }
    },
    methods: {
        nada() {
            console.log('well to be hones')
        },
    },
})
