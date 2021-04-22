const app = Vue.createApp({
    data() {
        return {
            counter: 9,
            courseGoal: 'Test Vue',
            name: 'insertname here',
            confirmedName: '',
        }
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name
        },
        setName(event) {
            console.log()
            this.name = event.target.value
        },
        submitForm() {
            console.log('nada')
        },
        operation(_) {
            return _ ? this.counter++ : this.counter--
        },
    },
})

app.mount('#user-goal')
