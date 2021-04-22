<template>
    <li>
        <h2>{{ name }} {{ favorite ? '(Favorite)' : ''}}</h2>
        <button @click="toggleFavorite">Toggle Favorite</button>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsAreVisible">
            <li>
                <strong>Phone:</strong>
                {{ phone }}
            </li>
            <li>
                <strong>Email:</strong>
                {{ email }}
            </li>
        </ul>
        <button @click="deleteContact">Delete</button>
    </li>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: String,
        },
        favorite: {
            type: Boolean,
            required: false,
            default: false,
        },
        id: {
            type: String,
            required: true,
        },
    },
    emits: ["toggle-favorite", "delete-contact"],
    data() {
        return {
            detailsAreVisible: false,
        };
    },
    methods: {
        toggleDetails() {
            this.detailsAreVisible = !this.detailsAreVisible;
        },
        toggleFavorite() {
            this.$emit("toggle-favorite", this.id);
        },
        deleteContact() {
            this.$emit("delete-contact", this.id);
        },
    },
};
</script>
