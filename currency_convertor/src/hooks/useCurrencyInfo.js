import {useEffect, useState} from "react"

function useCurrencyInfo(currency) {
    const [data, setdata] = useState({})
    useEffect(() => {
        fetch(`https://v6.exchangerate-api.com/v6/1ed57b0316eb63782be995d8/latest/${currency}`)
        .then((res) => res.json())
        .then((res) => setdata(res.conversion_rates))
    }, [currency])
    return data
} 

export default useCurrencyInfo;