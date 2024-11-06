import { useState, useEffect} from 'react'


const useFetch = (url) => {
    
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        
        fetch(url).then(resp => {
            if(!resp.ok){
                throw new Error("Internal Server Error");
            }
            return resp.json();
        }).then( data => {
            setData(data);
            setError(null);
            setIsLoading(false);
        }).catch( err => {
            setError(err)
            setIsLoading(false);
        })

    }, [url])
    
    return {data, error, isLoading}

}
    


export default useFetch;