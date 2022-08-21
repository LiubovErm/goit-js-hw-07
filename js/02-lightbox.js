import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector(".gallery");
createGalleryItems(galleryItems);

const lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionPosition: 'bottom',
  captionDelay: 250,
});

function createGalleryItems(galleryItems) {
  const galleryItem = galleryItems.map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" />
              </a>`;
    })
    .join(" ");
  galleryEl.insertAdjacentHTML("afterbegin", galleryItem);
}


console.log(galleryItems);
