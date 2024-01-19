import { useEffect, useState } from "react"

export function useLocalStorage(key: string, initialValue: any) {
    const [value, setValue] = useState(() => {
        const localValue = localStorage.getItem(key)
        if (localValue == null || localValue == "") {
            if (typeof initialValue === "function") {
                return initialValue()
            } else {
                return initialValue
            }
        } else {
            return JSON.parse(localValue)
        }
    });

    useEffect(() => {
        if (value === undefined) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }, [value, key])

    return [value, setValue]
};