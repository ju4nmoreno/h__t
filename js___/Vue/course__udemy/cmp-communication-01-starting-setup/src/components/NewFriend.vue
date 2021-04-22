<template>
    <form @submit.prevent="submitData">
        <div>
            <label>name</label>
            <input type="text" v-model="enterdName" />
        </div>
        <div>
            <label>Phone</label>
            <input type="tel" v-model="enterdPhone" />
        </div>
        <div>
            <label>E-mail</label>
            <input type="email" v-model="enterdEmail" />
        </div>

        <button>Add new friend</button>
    </form>
</template>
    
<script>
export default {
    emits: ["add-contact"],
    data() {
        return {
            enterdName: "",
            enterdPhone: "",
            enterdEmail: "",
        };
    },
    methods: {
        submitData() {
            console.log("before");
            this.$emit(
                "add-contact",
                this.enterdPhone,
                this.enterdName,
                this.enterdEmail
            );

            this.enterdName = "";
            this.enterdPhone = "";
            this.enterdEmail = "";
        },
    },
};
</script>

<style scoped>
</style>
