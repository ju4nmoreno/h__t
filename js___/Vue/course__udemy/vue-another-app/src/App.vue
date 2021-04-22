<template>
    <section>
        <h1>quien</h1>
        <FriendContact></FriendContact>
    </section>
</template>

<script>
import FriendContact from "./components/FriendContact.vue";

export default {
    data() {
        return {
            friends: [
                {
                    id: "manuel",
                    name: "manuel lopez",
                    phone: "4823840 4248923908",
                    email: "manuel@lopez.com",
                },
                {
                    id: "julie",
                    name: "julie jones",
                    phone: "4823840 4248923908",
                    email: "julie@jones.com",
                },
            ],
        };
    },
    components: [FriendContact],
};
</script>

<style></style>
