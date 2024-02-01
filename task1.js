const inData = [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15]

const newInData = inData.filter((element)=>{
    return element % 2 === 0
    // filter-funktionen tar varje element från arrayen inData och returnerar
    //  true om elementet är jämnt (delbart med 2) och false om det inte är det.
})

// const result = newInData.map((element) => element * 2)

console.log(result)