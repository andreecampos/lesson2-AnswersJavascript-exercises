const shoppingCart = [
{
    name: "T-Shirt", 
    price: 249, 
    quantity: 1
},
{
    name: "Keps", 
    price: 199, 
    quantity: 1
},
{
    name: "Strumpor", 
    price: 39, 
    quantity: 5
},
]
const total = shoppingCart.reduce((acc, product) => {
    
    const totalProductPrice = product.price * product.quantity //price T-Shirt = 249, price Keps = 199, price Strumpor= 195 = 643

    const productMoms = totalProductPrice * 0.25 //moms . 25% * (moms av 249 = 62,25),(moms av 199 = 49,75), (moms av 195 = 48,75)  = 160,75

    //Uppdatering av ackumulator:
    return {
        // Efter att ha beräknat det totala priset och "moms" för en produkt, 
        // uppdaterar vi ackumulatorn (acc). Vi lägger till det totala priset i det 
        // ackumulerade totalbeloppet (acc.totalAmount) och "moms" i det ackumulerade 
        // momsbeloppet (acc.moms).
        totalAmount: acc.totalAmount + totalProductPrice, // 249 
        moms: acc.moms + productMoms // 62,25
    }

}, {
    totalAmount: 0,
    moms: 0
})

console.log(total)
