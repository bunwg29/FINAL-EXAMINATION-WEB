// Data about motel room

const properties = [
  {
    name: "Phòng trọ Anh Đạt",
    image: "./assets/nhatro/nguhoanhson/Tro 1/pic2.jpg",
    price: "2.700.000 VNĐ",
    link: "./motel-Room-Details/nguhoanhson/tro1.html",
    address: "Khu đô thị FPT - Quận Ngũ Hành Sơn",
    rooms: 1,
    bathrooms: 1,
    area: "25m<sup>2</sup>",
    author: "Hoàng Văn Đạt",
    authorLink: "",
    authorPhone: "0229 888 2934",
    images: 4,  
    videos: 2   
  },
  {
    name: "Phòng trọ Công Thịnh",
    image: "./assets/nhatro/nguhoanhson/Tro 2/pic-1.jpg",
    price: "3.500.000 VNĐ",
    link: "./motel-Room-Details/nguhoanhson/tro2.html",
    address: "Đường Nam Kì Khởi Nghĩa",
    rooms: 1,
    bathrooms: 1,
    area: "26m<sup>2</sup>",
    author: "Công Thịnh",
    authorLink: "",
    authorPhone: "0799 997 256",
    images: 5,  
    videos: 0   
  },
  {
    name: "Nhà trọ anh Hoàng",
    image: "./assets/nhatro/nguhoanhson/Tro 3/pic-1.jpg",
    price: "1.500.000",
    link: "./motel-Room-Details/nguhoanhson/tro3.html",
    address: "Lô 07 đường Lê Đức Thọ,Phường Điện Ngọc, tỉnh Quảng Nam.",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Anh Hoàng",
    authorLink: "",
    authorPhone: "0888 922 228",
    images: 4,  
    videos: 0   
  },
  {
    name: "Nhà trọ Hải Triều",
    image: "./assets/nhatro/nguhoanhson/Tro 4/pic-1.jpg",
    price: "2.300.000 VNĐ",
    link: "./motel-Room-Details/nguhoanhson/tro4.html",
    address: "218 Nam Kì Khởi Nghĩa - Quận Ngũ Hành Sơn",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Hải Triều",
    authorLink: "",
    authorPhone: "0985.744.407",
    images: 4,  
    videos: 2   
  },
  {
    name: "Phòng trọ cho thuê",
    image: "./assets/nhatro/nguhoanhson/Tro 5/pic-1.jpg",
    price: "2.900.000 VNĐ",
    link: "./motel-Room-Details/nguhoanhson/tro5.html",
    address: "150 Lê Như Hà - Quận Ngũ Hành Sơn",
    rooms: 1,
    bathrooms: 1,
    area: "27m<sup>2</sup>",
    author: "Cô Lệ",
    authorLink: "",
    authorPhone: "0976 505 516",
    images: 4,  
    videos: 2   
  },
  {
    name: "Phòng trọ chú Dũng",
    image: "./assets/nhatro/sontra/Tro 1/pic-1.jpg",
    price: "3.200.000 VNĐ",
    link: "./motel-Room-Details/sontra/tro1.html",
    address: "109 Bùi Dương Lịch - Quận Sơn Trà",
    rooms: 0,
    bathrooms: 1,
    area: "24m<sup>2</sup>",
    author: "Ngô Khắc Dũng",
    authorLink: "",
    authorPhone: "0934 157 628",
    images: 4,  
    videos: 2   
  },
  {
    name: "Phòng trọ chị An",
    image: "./assets/nhatro/sontra/Tro 2/tro-2.jpg",
    price: "2.600.000 VNĐ",
    link: "./motel-Room-Details/sontra/tro2.html",
    address: "LOSEBY Phước Mỹ - Quận Sơn Trà",
    rooms: 0,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Trương Mỹ An",
    authorLink: "",
    authorPhone: "0358 830 029",
    images: 4,  
    videos: 2   
  },
  {
    name: "Nhà trọ cô Hương",
    image: "./assets/nhatro/sontra/Tro 3/pic-2.jpg",
    price: "2.500.000",
    link: "./motel-Room-Details/sontra/tro3.html",
    address: "K4/18 Ngô Quyền - Quận Sơn Trà",
    rooms: 1,
    bathrooms: 1,
    area: "24m<sup>2</sup>",
    author: "Cô Hương",
    authorLink: "",
    authorPhone: "0974 006 825",
    images: 4,  
    videos: 0   
  },
  {
    name: "Phòng trọ Phan Bá Thiến",
    image: "./assets/nhatro/sontra/Tro 4/pic-2.jpg",
    price: "3.700.000 VNĐ",
    link: "./motel-Room-Details/sontra/tro4.html",
    address: "Phan Bá Phiến - Quận Sơn Trà",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup> - 25m<sup>2</sup>",
    author: "Hồ Vũ Cảnh Tiên",
    authorLink: "",
    authorPhone: "0964 600 896",
    images: 4,  
    videos: 2   
  },
  {
    name: "Nhà trọ chú Mẫn",
    image: "./assets/nhatro/sontra/Tro 5/pic-5.jpg",
    price: "2.800.000 VNĐ",
    link: "./motel-Room-Details/sontra/tro5.html",
    address: "225 Nguyễn Trung Trực - Sơn Trà",
    rooms: 1,
    bathrooms: 1,
    area: "23m<sup>2</sup>",
    author: "Lê Văn Mẫn",
    authorLink: "",
    authorPhone: "0905 262 636",
    images: 4,  
    videos: 2   
  },
  {
    name: "Phòng trọ Quốc Thịnh",
    image: "./assets/nhatro/haichau/tro 2/pic-3.jpg",
    price: "4.500.000 VNĐ",
    link: "./motel-Room-Details/haichau/tro1.html",
    address: "37/7 Tiểu La, Hải Châu",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Đặng Thình Quốc Thịnh",
    authorLink: "",
    authorPhone: "0777.472.117",
    images: 4,  
    videos: 0   
  },
  {
    name: "Phòng trọ Huy Hiệp Home",
    image: "./assets/nhatro/haichau/Tro 2/pic-2.jpg",
    price: "3.800.000 VNĐ",
    link: "./motel-Room-Details/haichau/tro2.html",
    address: "Đường 3 tháng 2, Hải Châu",
    rooms: 1,
    bathrooms: 1,
    area: "21m<sup>2</sup>",
    author: "Huy Hiệp",
    authorLink: "",
    authorPhone: "0989.883.636",
    images: 4,  
    videos: 0   
  },
  {
    name: "Nhà trọ Đình Tiến",
    image: "./assets/nhatro/haichau/Tro 3/pic-3.jpg",
    price: "3.000.000 VNĐ",
    link: "./motel-Room-Details/haichau/tro3.html",
    address: "Đường Lê Thanh Nghị - Hải Châu",
    rooms: 1,
    bathrooms: 1,
    area: "22m<sup>2</sup>",
    author: "Đình Tiến",
    authorLink: "",
    authorPhone: "0335.717.893",
    images: 6,  
    videos: 0   
  },
  {
    name: "Nhà trọ Khánh Bình",
    image: "./assets/nhatro/haichau/Tro 4/pic-4.jpg",
    price: "2.500.000 VNĐ",
    link: "./motel-Room-Details/haichau/tro4.html",
    address: "204 Trưng Nữ Vương, Hải châu, Đà Nẵng",
    rooms: 1,
    bathrooms: 1,
    area: "25m<sup>2</sup>",
    author: "Trần Hoàng Khánh Bình",
    authorLink: "",
    authorPhone: "0931.629.773",
    images: 11,  
    videos: 0   
  },
  {
    name: "Nhà trọ Nhan Thai",
    image: "./assets/nhatro/haichau/Tro 5/pic-2.jpg",
    price: "3.000.000 VNĐ",
    link: "./motel-Room-Details/haichau/tro5.html",
    address: "82/17 Núi Thành, quận Hải Châu",
    rooms: 1,
    bathrooms: 1,
    area: "22m<sup>2</sup>",
    author: "Nhan Thai",
    authorLink: "",
    authorPhone: "0783.427.406",
    images: 5,  
    videos: 0   
  },
  {
    name: "Phòng trọ Nguyễn Thủy",
    image: "./assets/nhatro/camle/Tro 1/pic-1.jpg",
    price: "2.600.000 VNĐ",
    link: "./motel-Room-Details/camle/tro1.html",
    address: "Đường Quách Thị Trang, gần Võ Chí Công - Cẩm Lệ",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Nguyễn Thủy",
    authorLink: "",
    authorPhone: "0394.575.752",
    images: 5,  
    videos: 1   
  },
  {
    name: "Nhà trọ Thái Phiên",
    image: "./assets/nhatro/camle/Tro 2/pic-1.jpg",
    price: "2.300.000 VNĐ",
    link: "./motel-Room-Details/camle/tro2.html",
    address: "Trần Huy Liệu, Khuê Trung, Cẩm Lệ",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Trần Thái Phiên",
    authorLink: "",
    authorPhone: "0963.655.790",
    images: 7,  
    videos: 0   
  },
  {
    name: "Nhà trọ Hà Vân",
    image: "./assets/nhatro/camle/Tro 3/pic-1.jpg",
    price: "3.000.000 VNĐ",
    link: "./motel-Room-Details/camle/tro3.html",
    address: "Đường 57 Thanh Lương 24, Hoà Xuân, Cẩm Lệ",
    rooms: 1,
    bathrooms: 1,
    area: "35m<sup>2</sup>",
    author: "Lê Hà Vân",
    authorLink: "",
    authorPhone: "0784.333.334",
    images: 7,  
    videos: 2   
  },
  {
    name: "Nhà trọ cô Huế",
    image: "./assets/nhatro/camle/Tro 4/pic-2.jpg",
    price: "2.700.000 VNĐ",
    link: "./motel-Room-Details/camle/tro4.html",
    address: "Đường Cách Mạng Tháng 8, Cẩm Lệ",
    rooms: 1,
    bathrooms: 1,
    area: "23m<sup>2</sup>",
    author: "Hồ Thị Huế",
    authorLink: "",
    authorPhone: "0903.564.515",
    images: 6,  
    videos: 0   
  },
  {
    name: "Nhà trọ Hà Vân",
    image: "./assets/nhatro/camle/Tro 5/pic-1.jpg",
    price: "3.100.000 VNĐ",
    link: "./motel-Room-Details/camle/tro5.html",
    address: "Đường 57 Thanh Lương 24, Hoà Xuân, Cẩm Lệ",
    rooms: 1,
    bathrooms: 1,
    area: "35m<sup>2</sup>",
    author: "Lê Hà Vân",
    authorLink: "",
    authorPhone: "0777.594.050",
    images: 6,  
    videos: 0   
  },
  {
    name: "Phòng trọ Na Na",
    image: "./assets/nhatro/lienchieu/Tro 1/pic-1.jpg",
    price: "1.900.000 VNĐ",
    link: "./motel-Room-Details/lienchieu/tro1.html",
    address: "126 Nam Cao",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "NaNa",
    authorLink: "",
    authorPhone: "Gần BK, SP",
    images: 4,  
    videos: 0   
  },
  {
    name: "Nhà trọ Ánh Phương",
    image: "./assets/nhatro/lienchieu/Tro 2/pic-1.jpg",
    price: "1.300.000 VNĐ",
    link: "./motel-Room-Details/lienchieu/tro2.html",
    address: "Ngã ba Âu cơ với Mê Linh",
    rooms: 1,
    bathrooms: 1,
    area: "25m<sup>2</sup>",
    author: "Ánh Phương",
    authorLink: "",
    authorPhone: "Gần FPT, Sư phạm",
    images: 6,  
    videos: 0   
  },
  {
    name: "Văn Duy Mini",
    image: "./assets/nhatro/lienchieu/Tro 3/pic-1.jpg",
    price: "2.500.000",
    link: "./motel-Room-Details/lienchieu/tro3.html",
    address: "Liên Chiểu",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Duy Bùi",
    authorLink: "",
    authorPhone: "0942.118.483",
    images: 6,  
    videos: 0   
  },
  {
    name: "Nhà trọ Trọng Nghĩa",
    image: "./assets/nhatro/lienchieu/Tro 4/pic-1.jpg",
    price: "1.700.000 VNĐ",
    link: "./motel-Room-Details/lienchieu/tro4.html",
    address: "K80/24 Nguyễn Chánh",
    rooms: 1,
    bathrooms: 1,
    area: "22m<sup>m2</sup>",
    author: "Trọng Nghĩa",
    authorLink: "",
    authorPhone: "0905685290",
    images: 5,  
    videos: 0   
  },
  {
    name: "Trọ Đào Xuân",
    image: "./assets/nhatro/lienchieu/Tro 5/pic-2.jpg",
    price: "1.500.000 VNĐ",
    link: "./motel-Room-Details/lienchieu/tro5.html",
    address: "1013 Âu cơ",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Đào Xuân",
    authorLink: "",
    authorPhone: "0343048643",
    images: 5,  
    videos: 0   
  },
  {
    name: "Phòng trọ Vĩnh Trung",
    image: "./assets/nhatro/thanhkhe/Tro 1/pic-2.jpg",
    price: "4.000.000 VNĐ",
    link: "./motel-Room-Details/thanhkhe/tro1.html",
    address: "K104/11A đường Lê Đình Lý - Quận Thanh Khê",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Trịnh Thị Lan",
    authorLink: "",
    authorPhone: "0906.572.008",
    images: 4,  
    videos: 2   
  },
  {
    name: "Phòng trọ Điện Biên Phủ",
    image: "./assets/nhatro/thanhkhe/Tro 2/pic-1.jpg",
    price: "2.900.000 VNĐ",
    link: "./motel-Room-Details/thanhkhe/tro2.html",
    address: "Điện Biên Phủ - Quận Thanh Khê",
    rooms: 0,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Trương Mỹ An",
    authorLink: "",
    authorPhone: "0358.830.029",
    images: 4,  
    videos: 2   
  },
  {
    name: "Nhà trọ An An",
    image: "./assets/nhatro/thanhkhe/Tro 3/pic-1.jpg",
    price: "3.100.000 VNĐ",
    link: "./motel-Room-Details/thanhkhe/tro3.html",
    address: "Kiệt Nguyễn Phước Nguyên - Quận Thanh Khê",
    rooms: 0,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "An Trương",
    authorLink: "",
    authorPhone: "0358.830.029",
    images: 4,  
    videos: 0   
  },
  {
    name: "Phòng trọ chú Dương",
    image: "./assets/nhatro/thanhkhe/Tro 4/pic-2.jpg",
    price: "2.850.000 VNĐ",
    link: "./motel-Room-Details/thanhkhe/tro4.html",
    address: "66A Lê Thị Tính - Quận Thanh Khê",
    rooms: 1,
    bathrooms: 1,
    area: "23m<sup>2</sup>",
    author: "Dương Quốc Dương",
    authorLink: "",
    authorPhone: "0889.619.358",
    images: 4,  
    videos: 2   
  },
  {
    name: "Phòng trọ Mỹ Linh",
    image: "./assets/nhatro/thanhkhe/Tro 5/pic-4.jpg",
    price: "2.700.000 VNĐ",
    link: "./motel-Room-Details/thanhkhe/tro5.html",
    address: "95/15 Lê Đình Lý - Quận Thanh Khê",
    rooms: 0,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Mỹ Linh",
    authorLink: "",
    authorPhone: "0935.006.204",
    images: 4,  
    videos: 2   
  }
];

// const motelForm = document.getElementById('motel-form');

// motelForm.addEventListener('submit', (event) => {
//   event.preventDefault(); 

//   const newMotel = {
//     name: document.getElementById('name').value,
//     image: document.getElementById('image').value,
//     price: document.getElementById('price').value,
//     link: document.getElementById('link').value,
//     address: document.getElementById('address').value,
//     rooms: parseInt(document.getElementById('rooms').value),
//     bathrooms: parseInt(document.getElementById('bathrooms').value),
//     area: document.getElementById('area').value,
//     author: document.getElementById('author').value,
//     authorLink: document.getElementById('authorLink').value,
//     authorPhone: document.getElementById('authorPhone').value,
//     images: parseInt(document.getElementById('images').value),
//     videos: parseInt(document.getElementById('videos').value)
//   };

//   // Thêm thông tin trọ mới vào mảng properties
//   properties.push(newMotel);

//   // Lưu mảng properties vào file properties.js
//   const propertiesString = `const properties = ${JSON.stringify(properties, null, 2)};`; // Định dạng JSON đẹp
//   const fileContent = propertiesString;
//   const propertiesFilePath = 'properties.js'; 

//   const downloadLink = document.createElement('a');
//   downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(fileContent);
//   downloadLink.download = propertiesFilePath;
//   downloadLink.click(); 

//   alert('Đăng trọ thành công!');
//   motelForm.reset(); 
// });