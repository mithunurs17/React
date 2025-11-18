import { useEffect, useState } from "react"

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})

    useEffect(() => {
        let mounted = true
        const url = `https://open.er-api.com/v6/latest/${currency}`

        async function fetchRates() {
            try {
                const res = await fetch(url)
                if (!res.ok) {
                    console.error("Failed to fetch rates:", res.status, res.statusText)
                    if (mounted) setData({})
                    return
                }
                const json = await res.json()
                // open.er-api returns rates under `rates`
                if (mounted && json && json.rates) setData(json.rates)
            } catch (err) {
                console.error("Error fetching currency rates:", err)
                if (mounted) setData({})
            }
        }

        fetchRates()

        return () => {
            mounted = false
        }
    }, [currency])

    return data
}

export default useCurrencyInfo;