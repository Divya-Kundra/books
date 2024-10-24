function useDebounce (func, delay) {
    let timeout=null

    return (...args) => {
        if(timeout) clearTimeout(timeout)

        timeout=setTimeout(() => {
            console.log('actally fire it', ...args)
            func(...args)
        }, delay)
    }
}

export default useDebounce