import { useEffect, useState } from "react";

export const useFetch = (startDate, endDate) => {
    const [unformedData, setUnformedData] = useState([]);
    
    useEffect(() => {
        fetch(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}&index=[USD]`)
            .then(x => x.json())
            .then(y => {
                setUnformedData(y.bpi);
            })
    }, [startDate, endDate]);
    
    return unformedData;
}