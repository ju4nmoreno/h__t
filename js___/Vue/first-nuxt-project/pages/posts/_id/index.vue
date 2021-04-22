<template>
    <div class="single-post-page">
        <h1>Title of post</h1>
        <section class="post">
            <div class="post-detail">
                <div>Last updated on {{ data }}</div>
                <div>Write by {{ name }}</div>
            </div>
            <p>{{ description }}</p>
        </section>
        <section class="post-feedback">
            <p>
                Let me what you think about the post, send an email
                <a
                    href="mailto:jcmoreno@mail.com"
                >jcmoreno@mail.com</a>
            </p>
        </section>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: "Juan Moreno",
            data: "Apr 8 1800",
            description:
                "Elit in similique maiores quos ea Tenetur repellendus sint sint sunt tempore ipsa ex Optio veniam molestias repellendus maxime accusamus quibusdam. Eligendi in fuga quibusdam at modi dolorum? Quidem molestias",
            title: "Lord of Kinds",
        };
    },
};
</script>
