import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML("beforeend", renderGalleryItems(galleryItems));

function renderGalleryItems(galleryItems) {
  return galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt='${description}'
        />
        </a>
    </div>`
    )
    .join("");
}

gallery.addEventListener("click", onImageClick);
console.log(gallery);

function onImageClick(evt) {
  if (evt.target.nodeName !== "IMG") {
    return;
  }
  evt.preventDefault();

  const markup = `<img 
    class="gallery__img" 
    src = "${evt.target.dataset.source}"
    alt = "${evt.target.alt}"
    width="1280"
    >`;
  console.log(markup);

  const modal = basicLightbox.create(markup, {
    onShow: () => {
      addEventListener("keydown", closeOnHotKey);
    },
    onClose: () => {
      removeEventListener("keydown", closeOnHotKey);
    },
  });

  modal.show();

  function closeOnHotKey(event) {
    if (event.code === "Escape") {
      modal.close();
    }
  }
}
