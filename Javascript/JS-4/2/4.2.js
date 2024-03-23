let Product = {
        name : "Iphone",
            price: 60000,
            number:14,
            model : "Pro",
    getDiscountPrice:function(discount){
        console.log("The Discount is:",discount,"%")
        let discountAmount = ((discount) / 100) * (this.price);
        console.log("Discount Amount is",discountAmount)
        let finalAmount = this.price -discountAmount;
        return finalAmount;
    }
}

console.log("Final Price is:",Product.getDiscountPrice(15));