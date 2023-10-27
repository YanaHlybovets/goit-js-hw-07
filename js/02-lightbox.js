import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryHTML = galleryItems.map(image =>
    `<li class="gallery__item">
   <a class="gallery__link" href="${image.original}">
      <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
   </a>
</li>`).join('');

gallery.insertAdjacentHTML("beforeend", galleryHTML);


let lightbox;

gallery.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName === 'IMG') {
        if (lightbox) {
            lightbox.close();
        }

        lightbox = new SimpleLightbox('.gallery__link', {
            captions: true,
            captionType: 'attr',
            captionsData: 'alt',
            captionPosition: 'bottom',
            captionDelay: 250,
        });

        lightbox.open(event.target);
    }
});



console.log(galleryItems);

