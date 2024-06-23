//Function use for load data on home page


// Function to create banner-actions
function createBannerActions(property, imageCount, videoCount) { 
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

// Function to create card-list
function createCardList(property, rooms, bathrooms, area) { 
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

// Function to create card-author
function createCardAuthor(property, authorName, authorLink, authorPhone) { 
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

export function createPropertyCard(property) {
  return `
      <li>
        <div class="property-card">
          <figure class="card-banner">
            <a href="${property.link}" target="_blank">
              <img src="${property.image}" alt="Trọ Quận Ngũ Hành Sơn" class="w-100">
            </a>
            <div class="card-badge ${property.price.includes('$') ? 'orange' : 'green'}">${property.price.includes('$') ? 'CHO THUÊ' : 'Cho thuê'}</div>
            ${createBannerActions(property, property.images, property.videos)} 
          </figure>
          <div class="card-content">
            <div class="card-price">
              <strong>${property.price}</strong>/Tháng
            </div>
            <h3 class="h3 card-title">
              <a href="${property.link}" target="_blank">${property.name}</a>
            </h3>
            ${createCardList(property, property.rooms, property.bathrooms, property.area)} 
          <div class="card-footer">
            ${createCardAuthor(property, property.author, property.link, property.authorPhone)} 
            
          </div>
        </div>
      </li>
  `;
}


// Create dynamic property-cards
window.onload = function () {
  const propertyListNguHanhSon = document.getElementById("property-list-ngu-hanh-son");
  const propertyListSonTra = document.getElementById("property-list-son-tra");
  const propertyListHaiChau = document.getElementById("property-list-hai-chau");
  const propertyListCamLe = document.getElementById("property-list-cam-le");
  const propertyListLienChieu = document.getElementById("property-list-lien-chieu");
  const propertyListThanhKhe = document.getElementById("property-list-thanh-khe");
  properties.forEach((property, index) => {
    const cardHtml = `
      <li>
        <div class="property-card">
          <figure class="card-banner">
            <a href="${property.link}" target="_blank">
              <img src="${property.image}" alt="Trọ Quận Ngũ Hành Sơn" class="w-100">
            </a>
            <div class="card-badge ${property.price.includes('$') ? 'orange' : 'green'}">${property.price.includes('$') ? 'CHO THUÊ' : 'Cho thuê'}</div>
            ${createBannerActions(property, property.images, property.videos)} 
          </figure>
          <div class="card-content">
            <div class="card-price">
              <strong>${property.price}</strong>/Tháng
            </div>
            <h3 class="h3 card-title">
              <a href="${property.link}" target="_blank">${property.name}</a>
            </h3>
            ${createCardList(property, property.rooms, property.bathrooms, property.area)} 
          <div class="card-footer">
            ${createCardAuthor(property, property.author, property.link, property.authorPhone)} 
            
          </div>
        </div>
      </li>
    `;

    if (index < 5) { // Quận Ngũ Hành Sơn

      propertyListNguHanhSon.innerHTML += cardHtml;

    } else if (index < 10) { // Quận Sơn Trà

      propertyListSonTra.innerHTML += cardHtml;

    } else if (index < 15){ // Quận Hải Châu

      propertyListHaiChau.innerHTML += cardHtml;

    } else if (index < 20){

      propertyListCamLe.innerHTML += cardHtml;

    } else if (index < 25){

      propertyListLienChieu.innerHTML += cardHtml;

    } else {

      propertyListThanhKhe.innerHTML += cardHtml;

    }
  });

};

