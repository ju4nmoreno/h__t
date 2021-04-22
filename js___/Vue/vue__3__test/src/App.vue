<template>
    <div>
        <div>{{ number }}</div>
        <p>Spaces left: {{ spaceLeft }} out of {{ number }}</p>
        <button @click="increaseNumber()">Increase Number</button>
        <h2>attending</h2>
        <ul>
            <li v-for="(name, index) in attending" :key="index">{{ name }}</li>
        </ul>
    </div>
</template>

<script>
import useEventSpace from "@/use/event-space";
export default {
    setup() {
        return useEventSpace();
    },
};
</script>

<style></style>
