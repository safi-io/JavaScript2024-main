let mainURL = "https://api.github.com/users/safi-thecoder";

fetch(mainURL)
.then( (data)=> {
    return data.json()
})
.then ( (response)=> {
    console.log(response['followers'])
})
.catch( (error)=> {
    console.log(error)
})