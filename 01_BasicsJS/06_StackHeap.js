
    // Stack(Primitive) --> Use copy of the elements

    let fName = "Safiullah"
    let realName = fName
    realName = "Khan"
    console.log(fName, realName)



    // Heap(Non-Primitive, Reference DataType) --> Use reference(original) of the elements

    let userOne = {
        name : "safi",
        age : 19,
        country : "Pakistan",
    }
    
    let userTwo = userOne
    userTwo.country = "India"
    
    console.table([userOne.country, userTwo.country]) // Both will have same results