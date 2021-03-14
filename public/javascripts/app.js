window.onload = () => {
    const dropdownBtn = document.getElementById('user-menu')


    // event listener

    dropdownBtn.addEventListener('click', () => {
        const dropdown = document.getElementById('user-dropdown')
        dropdown.classList.toggle('hidden')
    })
}