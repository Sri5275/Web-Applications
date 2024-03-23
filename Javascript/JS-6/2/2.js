class Product {
    constructor(brand, price, model, discount) {
        this.brand = brand,
            this.price = price,
            this.model = model,
            this.discount = discount;
    }
    getDiscountPrice() {
        let discountAmount = ((this.discount) / 100) * (this.price);
        let finalAmount = this.price - discountAmount;
        return finalAmount;
    }
}
    let p1=new Product("Iphone",80000,"14",13);
    console.log("THe Product 1 FinalCost is :",p1.getDiscountPrice());
    let p2=new Product("Iphone",90000,"14 Plus",10);
    console.log("THe Product 2 FinalCost is :",p2.getDiscountPrice());
    let p3=new Product("Iphone",130000,"14 Pro",12);
    console.log("THe Product 3 FinalCost is :",p3.getDiscountPrice());
    let p4=new Product("Iphone",140000,"14 Pro Max",8);
    console.log("THe Product 4 FinalCost is :",p4.getDiscountPrice());
    let p5=new Product("Iphone",120000,"13 Pro Max",16);
    console.log("THe Product 5 FinalCost is :",p5.getDiscountPrice());