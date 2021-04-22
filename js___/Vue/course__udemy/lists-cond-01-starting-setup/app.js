const app = Vue.createApp({
    data() {
        return {
            enteredGoalValue: '',
            goals: [],
        }
    },
    methods: {
        removeItem(idx) {
            this.goals.splice(idx, 1)
        },
        addGoal() {
            if (this.enteredGoalValue) {
                this.goals.push(this.enteredGoalValue)
                this.enteredGoalValue = ''
            }
        },
    },
})

app.mount('#user-goals')
