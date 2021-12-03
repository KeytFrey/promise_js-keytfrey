const getDataOne = async(items) => {
    for (let i = 49; i < 60; i++) {
        let data = await fetch('https://jsonplaceholder.typicode.com/posts')
        data = await data.json()
        console.log(data[i])
    }
}

getDataOne()
