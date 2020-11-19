// Vue Object holding all the information that is displayed in the html {{}} tags
new Vue({
    el: "#app",
    data: {
        showProduct: true,
        products: products,
        // FORM
        errors: [],
        name: null,
        movie: null,
        phone: null,
        cart: [],
    },
    methods: {
        addToCart: function (product) {
            this.cart.push(product.id);
            product.availableInventory--;
        },
        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },
        canAddToCart(product) {
            return product.availableInventory > this.cartItemCount(product.id)
        },
        cartItemCount(id) {
            let count = 0;
            return count;
        },
        sortedProducts() {
            if (products.length > 0) {
                let productsArray = products.slice(0);
                function compare(a, b) {
                    if (a.price > b.price) return 1;
                    if (a.price < b.price) return -1;
                    return 0;
                }
                return productsArray.sort(compare);
            }
        },
        checkForm: function (e) {
            this.errors = [];

            if (!this.name) {
                this.errors.push('Name required.');
            }
            if (!this.phone) {
                this.errors.push('Phone required.');
            }
            e.preventDefault();
        },
        allLetter(inputtxt) {
            var letters = /^[A-Za-z]+$/;
            this.errors = [];
            if (inputtxt.match(letters)) {
                this.errors.push('Name ok.');
                return true;
            }
            else {
                alert('Please input alphabet characters only');
                return false;
            }
        },
        allNumbers(inputnum) {
            var numbers = /^[0][1-9]\d{11}$|^[1-9]\d{11}$/g;
            this.errors = [];
            if (inputnum.value.match(numbers)) {
                this.errors.push('Namber ok.');
                return true;
            }
            else {
                alert('Please input numbers only 11 digits');
                return false;
            }
        },
    }
});