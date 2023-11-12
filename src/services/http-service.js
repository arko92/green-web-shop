import 'whatwg-fetch'; 

class HttpService {
    
    async getProducts (){
        try {
            // const response = await fetch('http://localhost:3008/product') // returning a promise object
            const response = await fetch('https://owmxb2gi8b.execute-api.eu-central-1.amazonaws.com/Products') // returning a promise object

            return response.json() // returns actual data from the promise object
        } catch(error){
            console.log(error.message)
        }

    }

}

export default HttpService