// Vue Object holding all the information that is displayed in the html {{}} tags
new Vue({
        el: "#Products",
        data: {
            sitename: "After School Club",
            showProduct: true,
            order: {
                firstName: '',
                lastName: '',
                address: '',
                postcode: '',
                city: '',
                method: 'Home',
                senGift: 'Send as a gift',
                dontSendGift: 'Do not send as a gift'
            },
            product: {
                id: 01,
                title: 'Maths',
                location: 'London',
                price: 100,
                image: './Images/maths.png',
                availableInventory: 10,
                rating: 3
            },
        cart: []
    },
    methods: {
        addToCart: function() {
            this.cart.push(this.product.id);
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
        submitForm() {
            alert('Order submitted!')
        },
        canAddToCart (product) {
            return product.availableInventory > this.cartCount(product.id)
        },
        cartCount(id) {
            let count = 0;
            for(let i=0; i<this.cart.length; i++) {
            if (this.cart[i] === id) {
                count++;
            }
        }
        return count;
    }
}
});

