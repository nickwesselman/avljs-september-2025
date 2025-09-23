import React, { useState, useEffect } from 'react'
import {Text, render} from 'ink'

const IssPosition = () => {
    const [position, setPosition] = useState([0,0])
    const [location, setLocation] = useState('unknown')

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

    useEffect(() => {
        if (!position || !position[0] || position[0] == 0) {
            return
        }
        const fetchLocation = async() => {
            const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=2b872672811d4f93b957f3f0f58a392a&q=${position[0]},${position[1]}&pretty=1&no_annotations=1`)
            const data = await response.json()
            setLocation(data.results[0]?.formatted)
        }
        fetchLocation()
    }, [position])

    return (
        <Text color="green">{position[0]},{position[1]} ({location})</Text>
    )
}

const renderIss = () => {
    render(<IssPosition />)
}

export { renderIss }