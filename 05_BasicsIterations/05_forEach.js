const universities = ["FAST","NUST","COMSATS","PUCIT","GIKI"]

universities.forEach((names)=> {
    // console.log(names);
})

//++++++++++++++++++++++++++++++++++++++++++

const countries = ["Pakistan", "United States", "France"]

countries.forEach(printMe)

function printMe(item, index, arr) {
    // console.log(item, index, arr);
}

//+++++++++++++++++++++++++++++++++++++++++++++++++

const data = [
    {
        id: 123,
        username: "safi"
    },
    {
        id: 234,
        username: "khan"
    }
]

data.forEach( (val) => {
    console.log(val.id, val.username)
})