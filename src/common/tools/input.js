import { useState } from 'react'

export const useTextInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const onChange = (e) => setValue(e.target.value)
    return { value, onChange }
}