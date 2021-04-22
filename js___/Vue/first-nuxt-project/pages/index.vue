<template>
    <div class="container">
        <section>
            <h1>{{ title }}</h1>
        </section>
        <section>
            <PostPreview></PostPreview>
            <PostPreview></PostPreview>
            <PostPreview />
        </section>
    </div>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
    data() {
        return {
            title: "Get the latest tech NEWS!",
        };
    },
    components: {
        PostPreview,
    },
};
</script>

<style scoped>
section {
    background-color: grey;
    color: white;
    margin: 1vw 0;
}

h1 {
    font-size: 10vw;
    font: bold 10vw/7vw Tahoma;
    letter-spacing: -0.6vw;
    margin-left: -15px;
    overflow: hidden;
}
</style>
