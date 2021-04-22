<template>
    <the-header :title="title"></the-header>
    <the-resource></the-resource>
</template>

<script>
import TheHeader from './Components/layouts/TheHeader.vue';
import TheResource from './Components/learning-resources/TheResource.vue';

export default {
    components: { TheHeader, TheResource },
    data() {
        return {
            title: 'Welcome to the real world',
        };
    },
};
</script>

<style >
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
}
</style>
