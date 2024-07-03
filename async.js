const processOrder = (customer) => {
    console.log("processing order for customer 1")

    setTimeout(() => {
        console.log("cooking complete")
    }, 3000);

    console.log("order processed for customer 1")
}

console.log("take order from customer 1")
processOrder()
console.log("complete order for customer 1")