// Functions use for find room 

import {createPropertyCard} from "./loadDataOnHomePage.js";

document.addEventListener("DOMContentLoaded", function () {
    const propertyListAll = document.getElementById("property-list-all");
  
    if (propertyListAll) {
      properties.forEach(property => {
        const cardHtml = createPropertyCard(property);
        propertyListAll.innerHTML += cardHtml;
      });
    }

  });

const districtSelect = document.getElementById("district-select");
const priceRangeSelect = document.getElementById("price-range");
const searchButton = document.getElementById("search-button");
const propertyListAll = document.getElementById("property-list-all");

function searchProperties() {
  const selectedDistrict = districtSelect.value.toLowerCase();
  const selectedPriceRange = priceRangeSelect.value;

// Filter the list of accommodations based on district and price range
  let filteredProperties = properties.filter(property => {
    let isMatch = true;
    if (selectedDistrict !== "") {
      isMatch = property.address.toLowerCase().includes(selectedDistrict);
    }

    if (selectedPriceRange !== "") {
      const price = parseInt(property.price.replace(/[^0-9]/g, ''));

      switch (selectedPriceRange) {
        case "1": 
          isMatch = isMatch && price < 2000000;
          break;
        case "2": 
          isMatch = isMatch && price >= 2000000 && price < 3000000;
          break;
        case "3":
          isMatch = isMatch && price >= 3000000 && price < 5000000;
          break;
        case "4":
          isMatch = isMatch && price >= 5000000;
          break;
      }
    }

    return isMatch;
  });

// Clear the current contents of the propertyList:
  while (propertyListAll.firstChild) { 
    propertyListAll.removeChild(propertyListAll.firstChild); 
  }

  // Add new hostel cards to propertyList
  filteredProperties.forEach(property => {
    const cardHtml = createPropertyCard(property);
    propertyListAll.innerHTML += cardHtml;
  });
}

// Handle search button click event
searchButton.addEventListener("click", searchProperties);

// Handle event change of district selection and price level
districtSelect.addEventListener("change", searchProperties);
priceRangeSelect.addEventListener("change", searchProperties);