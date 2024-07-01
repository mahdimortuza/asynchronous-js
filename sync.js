const processOrder = (customer) => {
    console.log("processing order for customer 1")

    const currentTime = new Date().getTime()
    while(currentTime + 3000 >= new Date().getTime())

    console.log("order processed for customer 1")
}

console.log("take order from customer 1")
processOrder()
console.log("complete order for customer 1")