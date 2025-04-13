import { useState, useEffect } from 'react'

function TestFetch() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await fetch('https://reqres.in/api/users', { method: 'GET' })
            if (response.ok == false) {
                throw new Error('Network response was not ok')
            }
            const result = await response.json()
            setData(result.data)
            console.log(result)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <h1>Test Fetch</h1>
            {loading ? <p>Loading...</p> : null}
            {error && <p>Error: {error.message}</p>}
            {!loading && !error && (
                <ul>
                    {
                        data.map(item => (
                            <li key={item.id}>{`${item.first_name} ${item.last_name} email: ${item.email}`}</li>
                        ))
                    }
                </ul>
            )}
            <button onClick={fetchData}>Refresh</button>
        </>
    )
}

export default TestFetch