const { useState, useEffect } = require("react")

const useFruits = () => {
    const[fruits , setFruits] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/fruits')
        .then(res => res.json())
        .then(data => setFruits(data))
    },[])
    return [fruits , setFruits]
}

export default useFruits