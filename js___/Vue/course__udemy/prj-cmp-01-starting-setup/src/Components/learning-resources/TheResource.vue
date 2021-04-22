<template>
    <base-card>
        <base-button
            @click="setSelectedTab('stored-resource')"
            :mode="storedResourceMode"
            >Stored Resources</base-button
        >
        <base-button
            @click="setSelectedTab('add-resource')"
            :mode="addResButtonMode"
            >Add Resource</base-button
        >
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>
    
<script>
import StoredResource from './StoredResource.vue';
import AddResource from './AddResource.vue';

export default {
    components: {
        StoredResource,
        AddResource,
    },
    data() {
        return {
            selectedTab: 'stored-resource',
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'official Guia',
                    description: 'The official Vue.js documentation.',
                    link: 'https://vuejs.org',
                },
                {
                    id: 'google',
                    title: 'official Google',
                    description: 'The official google documentation.',
                    link: 'https://google.com',
                },
            ],
        };
    },
    provide() {
        return {
            resources: this.storedResources,
            removeResource: this.removeResource,
            addResource: this.addResource,
        };
    },
    computed: {
        storedResourceMode() {
            return this.selectedTab === 'stored-resource' ? null : 'flat';
        },
        addResButtonMode() {
            return this.selectedTab === 'add-resource' ? null : 'flat';
        },
    },
    methods: {
        setSelectedTab(tab) {
            this.selectedTab = tab;
        },
        addResource(title, description, link) {
            const newResource = {
                id: new Date().toISOString(),
                title,
                description,
                link,
            };
            this.storedResources.unshift(newResource);
            this.selectedTab = 'stored-resource';
        },
        removeResource(resId) {
            const resIndex = this.storedResources.findIndex(
                (res) => res.id === resId
            );
            this.storedResources.splice(resIndex, 1);
        },
    },
};
</script>

<style scoped>
</style>
