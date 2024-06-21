function searchProperties() {
    const district = document.getElementById('district').value;
    const maxPrice = document.getElementById('price-input').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Xóa kết quả hiện tại
  
    const filteredProperties = properties.filter(property => {
        // Kiểm tra quận
        if (district && !property.address.includes(district)) {
            return false;
        }
  
        // Kiểm tra giá cả
        const priceValue = parseInt(property.price.replace(/[^\d]/g, ''));
        if (maxPrice && priceValue > maxPrice) {
            return false;
        }
  
        return true; // Phù hợp với cả quận và giá cả
    });
  
    filteredProperties.forEach(property => {
        // Tạo phần tử HTML để hiển thị thông tin phòng trọ
        const propertyDiv = document.createElement('div');
        propertyDiv.classList.add('property');
  
        const image = document.createElement('img');
        image.src = property.image;
        propertyDiv.appendChild(image);
  
        const name = document.createElement('h3');
        name.textContent = property.name;
        propertyDiv.appendChild(name);
  
        const price = document.createElement('p');
        price.textContent = property.price;
        propertyDiv.appendChild(price);
  
        const address = document.createElement('p');
        address.textContent = property.address;
        propertyDiv.appendChild(address);
  
        resultsDiv.appendChild(propertyDiv);
    });
  }