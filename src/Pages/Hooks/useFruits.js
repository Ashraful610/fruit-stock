const { useState, useEffect } = require("react")

const useFruits = () => {
    const[fruits , setFruits] = useState([])

    useEffect(() => {
        fetch('https://protected-fjord-63330.herokuapp.com/fruits')
        .then(res => res.json())
        .then(data => setFruits(data))
    },[])
    return [fruits , setFruits]
}

export default useFruits