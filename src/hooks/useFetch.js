import { useState} from 'react'
 



const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const fetchData = async (method, endpoint, body = null) => {
        setIsLoading(true);
        try {

            const options = body ? {
                    method,
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                } : {
                    method,
                    headers: { "Content-Type": "application/json" },
                }
            

            const response = await fetch(`${url}${endpoint}`, options )
            
            if (!response.ok)
                throw new Error("Network response was not ok");
            
            const result = await response.json();
            setData(result);
            setError(null);
        } catch (error) {
            console.log(error)
            setError(err);
        } finally {
            setIsLoading(false);
        }
        
    }

    const get = (endpoint = null) => {
        fetchData('GET', endpoint);
    }

    const post = (endpoint, data) => {
        fetchData('POST', endpoint, data);
    }

    const put = (endpoint, data) => {
        fetchData('PUT', endpoint, data);
    }

    const del = (endpoint, data) => {
        fetchData('DELETE', endpoint, data);
    }
    
    return {data, error, isLoading, get, post, put, del}
}
    


export default useFetch;