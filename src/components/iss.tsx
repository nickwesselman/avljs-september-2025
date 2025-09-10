import React, { useState, useEffect } from 'react'
import {Text} from 'ink'

const IssPosition = () => {
    const [position, setPosition] = useState([0,0])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://api.open-notify.org/iss-now.json')
            const data = await response.json()
            setPosition([data.iss_position.latitude,data.iss_position.longitude])
        }
        const fetchLoop = (delay: number) => {
            setTimeout(async() => {
                await fetchData()
                fetchLoop(delay)
            }, delay)
        } 
        fetchLoop(500)
    }, [])

    return (
        <Text color="green">{position[0]},{position[1]}</Text>
    )
}

export { IssPosition }