let main_url = "https://jsonplaceholder.typicode.com/users";

const getData = async () => {
    try {
        let response = await fetch(main_url);
        let data = await response.json();
        for(let result of data) {
            console.log(result.email); // Scraping E-mails from Above Link
        }
    }
    catch(error) {
        console.log(`Unable to get Data :- ${error}`)
    }
}

getData();