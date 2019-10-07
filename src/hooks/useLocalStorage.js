import React from 'react'

function useLocalStorage(key, value) {
    const [item, setItem] = React.useState(()=>{
        const localVal = localStorage.getItem(key)
        if (localVal) return JSON.parse(localVal)
        return value
    })

    function updateItem(value) {
        setItem(value)
        localStorage.setItem(key, JSON.stringify(value))
    }

    return [item, updateItem]
}

export default useLocalStorage