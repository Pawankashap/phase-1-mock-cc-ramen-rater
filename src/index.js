// write your code here
 document.getElementById('ramen-menu').addEventListener('click',function handleClick(e){
     e.preventDefault()  
     showDetails(e.target.id)
})

function showDetails (id){
    return fetch(`http://localhost:3000/ramens/${id}`)
    .then(res=> res.json())
    .then(detail=>  getdetil(detail))
    
}

function getdetil(images){
    document.querySelector('.detail-image').src=images.image
    document.querySelector('.name').textContent=images.name
    document.querySelector('.restaurant').textContent=images.restaurant
    document.getElementById('rating-display').textContent=images.rating
    document.getElementById('comment-display').textContent=images.comment    
}


function showimages (images){
        const div= document.getElementById('ramen-menu')
        const imgtag= document.createElement('img')
        imgtag.setAttribute('src',images.image)
        imgtag.id=images.id
        div.appendChild(imgtag)

            
}


function fetchimages(){
    return fetch('http://localhost:3000/ramens')
  .then(res=> res.json())
  .then(images=> images.forEach(image => showimages(image))) 
  
}


document.addEventListener("DOMContentLoaded", () => {
    fetchimages()
    
})