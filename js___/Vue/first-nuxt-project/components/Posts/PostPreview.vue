<template>
    <nuxt-link :to="'/posts/' + 1">
        <article>
            <div class="post-thumbnail"></div>
            <div class="post-content">
                <h2>{{ title }}</h2>
                <p>{{ description }}</p>
            </div>
        </article>
    </nuxt-link>
</template>

<script>
export default {
    data() {
        return {
            title: "well to be honest",
            description:
                "Elit in similique maiores quos ea Tenetur repellendus sint sint sunt tempore ipsa ex Optio veniam molestias repellendus maxime accusamus quibusdam. Eligendi in fuga quibusdam at modi dolorum? Quidem molestias",
        };
    },
};
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}

article {
    margin: 10px;
}
</style>

