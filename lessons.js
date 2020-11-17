// Vue Object holding all the information that is displayed in the html {{}} tags
new Vue({
        el: "#app",
        data: {
            showProduct: true,
            products: products,
            order: {
                firstName: '',
                lastName: '',
                phone: '',
                email: '',
                address: '',
                postcode: '',
                city: '',
                method: '',
                gift: '',
                sendGift: 'Send as gift',
                dontSendGift: "Don't send as gift"
            },
        cart: []
    },
    methods: {
        addToCart: function(product) {
            this.cart.push(product.id);
            product.availableInventory--;
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
        submitForm() {
            alert('Order submitted!')
        },
        canAddToCart (product) {
            return product.availableInventory > this.cartItemCount(product.id)
        },
        cartItemCount(id) {
            let count = 0;
            return count;
        },
        sortedProducts() {
            if(products.length > 0) {
                let productsArray = products.slice(0);
            function compare(a, b) {
                if(a.price > b.price) return 1;
                if(a.price < b.price) return -1;
                return 0;
            }
            return productsArray.sort(compare);
        }
    }
    }
});

