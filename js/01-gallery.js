import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryHTML = galleryItems.map(image =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${image.original}">
    <img
      class="gallery__image"
      src="${image.preview}"
      data-source="${image.original}"
      alt="${image.description}"
    />
  </a>
</li>`).join('');

gallery.insertAdjacentHTML("beforeend", galleryHTML);

gallery.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.tagName === 'IMG') {
        const instance = basicLightbox.create(
            `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`);

        instance.show()

    }
});

console.log(galleryItems);
