const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 }, 
    { name: 'Berith', age: 63 }, 
    { name: 'Claes', age: 48 },
    { name: 'Kerstin', age: 72 }, 
    { name: 'Lars', age: 54},
    { name: 'David', age: 15 },
    ]

const adultUsers = users.filter((user) => {
    return (user.age >= 15 && user.age <= 20) || user.age >= 50
})

console.log(adultUsers)

const names = adultUsers.map((item) => {
    return item.name
})

console.log(names)


// Finare sätt att skriva på
// const names2 = users
//                 .filter((user) => (user.age >= 15 && user.age <= 20) || user.age >= 50)
//                 .map((user) => user.name)


