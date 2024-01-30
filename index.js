addEventListener("resize", (event) => {
    const div = document.getElementById('main');
    div.style.height = `${window.innerHeight - 50}px`
    div.style.width = `${window.innerWidth - 50}px`

    // div.style.transform = `scale(${window.innerHeight/400})`
});
