<template>
    <li>juan w</li>
</template>
    
<script>
export default {
    data() {
        return {
            detailsAreVisible: true,
            friend: {
                id: "juan",
                name: "juan moreno",
                phone: "949494 94949",
                email: "juan@moreno.com",
            },
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
    },
};
</script>

<style scoped>
</style>
