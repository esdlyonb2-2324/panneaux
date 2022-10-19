const panneaux  = document.querySelectorAll('.panneau')


panneaux.forEach(panneau =>{
    panneau.addEventListener('click',()=>{
        panneau.classList.toggle('panneauOuvert')
    })
})