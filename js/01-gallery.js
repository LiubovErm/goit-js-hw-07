import { galleryItems } from './gallery-items.js';
// Change code below this line


// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const galleryEl = document.querySelector(".gallery");


const createGalleryItems = (galleryItems) => {
    const galleryItem = galleryItems.map((item) => {return `
        <div class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img  class="gallery__image"
                  src="${item.preview}"
                  data-source="${item.original}"
                  alt="${item.description}">
          </a>
        </div>
        `;
        })
        .join("");

    return galleryItem;
};

galleryEl.insertAdjacentHTML("afterbegin", createGalleryItems(galleryItems));


// Відкриття модального вікна по кліку на елементі галереї.


function openModal(event) {
    event.preventDefault();
    
    const instance = basicLightbox.create(`
       <img src="${event.target.dataset.source}" width="800" height="600">
	`, {
        // Зроби так, щоб прослуховування клавіатури було тільки доти, доки відкрите модальне вікно
        onShow: () => { window.addEventListener('keydown', clickOnEscape) },
        onClose: () => { window.removeEventListener('keydown', clickOnEscape) },
    });
    instance.show()

    // Додай закриття модального вікна після натискання клавіші Escape
    function clickOnEscape(event) {
    if (event.key === "Escape") {
        instance.close();
    }
};
};

galleryEl.addEventListener("click", openModal);



console.log(galleryItems);
