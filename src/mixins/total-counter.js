export const totalPriceCounter = {
    methods: {
        totalPriceCounter(order) {
            let price = null

            order.items.forEach(item => {
                price += item.quantity * item.item.offer.price     
            })

            return price
        }
    }
}

export const totalQuantityCounter = {
    methods: {
        totalQuantityCounter(order) {
            let quantity = null

            order.items.forEach(item => {
                quantity += item.quantity     
            })

            return quantity
        }
    }
}