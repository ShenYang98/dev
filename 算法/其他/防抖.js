function debounce(func, wait, immediate) {
    let timeout;
    return function () {
        if (immediate) {
            func.apply(this, arguments)
        }
        if (timeout) {
            clearTimeout(timeout)
        }
        timeout = setTimeout(() => {
            func.apply(this, arguments)
        }, wait);
    }
}