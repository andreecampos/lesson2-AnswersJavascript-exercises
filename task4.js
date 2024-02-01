const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 }, 
    { name: 'Berith', age: 63 }, 
    { name: 'Claes', age: 48 },
    { name: 'KersYn', age: 72 },
]

const totalAge = users.reduce((accumulator, user) => {
    return accumulator + user.age
}, 0)

console.log(totalAge)



