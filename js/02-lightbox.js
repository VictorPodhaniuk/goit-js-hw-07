import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')
const newArray = []

galleryItems.forEach(element => {
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = element.original
	const galleryImage = document.createElement('img')
	galleryImage.className = 'gallery__image'
	galleryImage.src = element.preview
	galleryImage.setAttribute('title', element.description)
	galleryImage.alt = element.description

	galleryLink.append(galleryImage)
	newArray.push(galleryLink)
})
  gallery.append(...newArray)



    new SimpleLightbox('.gallery a', {
      captionDelay: 250,
      animationSpeed: 150,
  })

