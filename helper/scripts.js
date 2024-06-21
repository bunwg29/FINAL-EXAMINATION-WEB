// Hàm helper tạo banner-actions
function createBannerActions(property, imageCount, videoCount) { // Thêm 'property' vào tham số
  return `
    <div class="banner-actions">
      <button class="banner-actions-btn">
        <ion-icon name="location"></ion-icon>
        <address>${property.address}</address>
      </button>
      <button class="banner-actions-btn">
        <ion-icon name="camera"></ion-icon>
        <span>${imageCount}</span>
      </button>
      <button class="banner-actions-btn">
        <ion-icon name="film"></ion-icon>
        <span>${videoCount}</span>
      </button>
    </div>
  `;
}

// Hàm helper tạo card-list
function createCardList(property, rooms, bathrooms, area) { // Thêm 'property' vào tham số
  return `
    <ul class="card-list">
      <li class="card-item">
        <strong>${rooms}</strong>
        <ion-icon name="bed-outline"></ion-icon>
        <span>Gác lửng</span>
      </li>
      <li class="card-item">
        <strong>${bathrooms}</strong>
        <ion-icon name="man-outline"></ion-icon>
        <span>Phòng tắm</span>
      </li>
      <li class="card-item">
        <strong>Diện tích</strong>
        <ion-icon name="square-outline"></ion-icon>
        <span>${area}</span>
      </li>
    </ul>
  `;
}

// Hàm helper tạo card-author
function createCardAuthor(property, authorName, authorLink, authorPhone) { // Thêm 'property' vào tham số
  return `
    <div class="card-author">
      <figure class="author-avatar">
        <img src="./assets/images/author.png" alt="" class="w-100">
      </figure>
      <div>
        <p class="author-name">
          <a href="${authorLink}">${authorName}</a>
        </p>
        <p class="author-title">${authorPhone}</p>
      </div>
    </div>
  `;
}

// Tạo các property-card động
window.onload = function () {
  const propertyListNguHanhSon = document.getElementById("property-list-ngu-hanh-son");
  const propertyListSonTra = document.getElementById("property-list-son-tra");
  const propertyListHaiChau = document.getElementById("property-list-hai-chau");

  properties.forEach((property, index) => {
    const cardHtml = `
      <li>
        <div class="property-card">
          <figure class="card-banner">
            <a href="${property.link}" target="_blank">
              <img src="${property.image}" alt="Trọ Quận Ngũ Hành Sơn" class="w-100">
            </a>
            <div class="card-badge ${property.price.includes('$') ? 'orange' : 'green'}">${property.price.includes('$') ? 'CHO THUÊ' : 'Cho thuê'}</div>
            ${createBannerActions(property, property.images, property.videos)} // Truyền 'property' vào hàm
          </figure>
          <div class="card-content">
            <div class="card-price">
              <strong>${property.price}</strong>/Tháng
            </div>
            <h3 class="h3 card-title">
              <a href="${property.link}" target="_blank">${property.title}</a>
            </h3>
            ${createCardList(property, property.rooms, property.bathrooms, property.area)} // Truyền 'property' vào hàm
          </div>
          <div class="card-footer">
            ${createCardAuthor(property, property.author, property.link, property.authorPhone)} // Truyền 'property' vào hàm
            <div class="card-footer-actions">
              <button class="card-footer-actions-btn">
                <ion-icon name="resize-outline"></ion-icon>
              </button>
              <button class="card-footer-actions-btn">
                <ion-icon name="heart-outline"></ion-icon>
              </button>
              <button class="card-footer-actions-btn">
                <ion-icon name="add-circle-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
      </li>
    `;
    if (index < 5) { // Quận Ngũ Hành Sơn
      propertyListNguHanhSon.innerHTML += cardHtml;
    } else if (index < 10) { // Quận Sơn Trà
      propertyListSonTra.innerHTML += cardHtml;
    } else { // Quận Hải Châu
      propertyListHaiChau.innerHTML += cardHtml;
    }
  });
};