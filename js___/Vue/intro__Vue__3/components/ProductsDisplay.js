app.component('product-display', {
    template:
        /*html*/
        `
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                <img :src="image" :alt="product" />
                </div>
                <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">in Stock</p>
                <p v-else>Out of Stock</p>

                <p>Shipping: {{ shipping }}</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>
                <div
                    v-for="variant, index in variants"
                    :key="variant.color"
                    class="color-circle"
                    :style="{ background: variant.color}"
                    @mouseover="updateVariant(index)"
                ></div>
                <button
                    :disabled="!inStock"
                    class="button"
                    :class="{ disabledButton: !inStock}"
                    v-on:click="addToCart"
                >
                    Add to Cart
                </button>
                </div>
            </div>
        </div>
        `,

    data() {
        return {
            details: ['50% cotton', '30% wool', '20% polyester'],
            brand: 'Vue Mastery',
            inventory: 20,
            product: 'Socks',
            premium: true,
            seletedVariant: 0,
            variants: [
                {
                    id: 2234,
                    color: 'green',
                    image: './assets/images/socks_green.jpg',
                    quantity: 50,
                },
                {
                    id: 2235,
                    color: 'blue',
                    image: './assets/images/socks_blue.jpg',
                    quantity: 0,
                },
            ],
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.seletedVariant].id)
        },
        updateVariant(index) {
            this.seletedVariant = index
        },
    },
    computed: {
        title() {
            return `${this.brand} ${this.product}`
        },
        image() {
            return this.variants[this.seletedVariant].image
        },
        inStock() {
            return this.variants[this.seletedVariant].quantity
        },
        shipping() {
            if (this.premium) return 'Free'

            return 2.99
        },
    },
})
