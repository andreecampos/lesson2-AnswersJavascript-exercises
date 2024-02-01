const inData = [
    {name: 'Alice', age: 25},
    {name: 'Bod', age: 17},
    {name: 'Charlie', age: 30},
    {name: 'David', age: 15},
]

const adultUsers = inData.filter((user) => {
    return user.age >= 18
})

// console.log(adultUsers)


const names = adultUsers.map((item) => {
    return item.name
})

console.log(names)


// Ett Bra sätt att skriva

const result2 = inData
                .filter(person => person.age >= 18)
                .map(person => person.name)
