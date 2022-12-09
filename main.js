const search = document.getElementById('search')
search.addEventListener('click', () => {
    search.classList.toggle('active')
})
const searchLabel = document.getElementById('searchLabel')
searchLabel.addEventListener('click', () => {
    search.classList.toggle('active')
})