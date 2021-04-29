export const getUsers = async () => {
    const response = await fetch('http://localhost:3001/users', {method: 'GET', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}})
    const users = await response.json()
    return users
}

export const postUsers = async (user) => {
    const response = await fetch('http://localhost:3001/users', {method: 'POST', headers: {'Accept': 'application/json', 'Content-Type':'application/json'}, body: user})
    const users = await response.json()
    return users
}

