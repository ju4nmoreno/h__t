const app = Vue.createApp({
    data() {
        return { counter: 0, name: 'insertname here' }
    },
    methods: {
        setName(event) {
            this.name = event.target.value
        },
        logic(ope) {
            return ope ? this.counter++ : this.counter--
        },
    },
})

app.mount('#events')
