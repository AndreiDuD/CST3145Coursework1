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
                availableInventory: 5
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
        submitForm() {alert('Order submitted!')}
    },
    computed: {
        cartItemCount: function() {
            return this.cart.length || '';
        },
        canAddToCArt: function() {
            return this.product.availableInventory > this.cartItemCount;
        }
    },
});

