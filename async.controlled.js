const takeOrder = (customer, callback) => {
console.log(`take order from ${customer}`)
callback(customer)
}

const processOrder = (customer, callback) => {
    console.log(`processing order for  ${customer}`)

    setTimeout(() => {
    console.log(`cooking completed`)
    console.log(`order processed for customer ${customer}`)
    callback(customer)
    }, 3000)


}

const completeOrder = (customer) => {
    console.log(`complete order for ${customer}`)
}

takeOrder('customer 1', (customer) => {
    processOrder(customer, (customer) => {
        completeOrder(customer)
    })
})