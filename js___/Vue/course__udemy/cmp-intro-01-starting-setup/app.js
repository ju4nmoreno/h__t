const app = Vue.createApp({
    data() {
        return {
            friends: [
                {
                    id: 'manuel',
                    name: 'manuel lopez',
                    phone: '0303030 94949',
                    email: 'manuel@lopez.com',
                },
                {
                    id: 'julie',
                    name: 'julie Jones',
                    phone: '0303041 94955',
                    email: 'julie@Jones.com',
                },
            ],
        }
    },
})

app.component('friend-contact', {
    template: `
        <li v-for="(friend, index) in friends" :key="friend.id">
            <h2>{{ friend.name }}</h2>
            <button @click="friend.show= !friend.show">
                Show Details
            </button>
            <ul v-show="friend.show">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,
    data() {
        return {
            detailAreVisibe: false,
            friends: [
                {
                    id: 'manuel',
                    name: 'manuel lopez',
                    phone: '0303030 94949',
                    email: 'manuel@lopez.com',
                },
                {
                    id: 'julie',
                    name: 'julie Jones',
                    phone: '0303041 94955',
                    email: 'julie@Jones.com',
                },
            ],
        }
    },
    methods: {
        toggleDetails() {
            this.detailAreVisibe = !this.detailAreVisibe
        },
    },
})

app.mount('#app')
