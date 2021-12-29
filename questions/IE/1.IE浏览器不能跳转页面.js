// App.vue
function checkIE() {
    return (
        /MSIE (\d+\.\d+);\.test(navigator.userAgent) || 
        ~navigator.userAgent.indexOf("Trident/")
    );
}
if (checkIE()) {
    window.addEventListener(
        'hashchange',
        () => {
            const currentPath = window.location.hash.slice(1)
            if (this.$route.path !== currentPath) {
                this.$router.push(currentPath)
            }
        },
        false
    )
}
