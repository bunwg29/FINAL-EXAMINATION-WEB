const properties = [
  {
    name: "Phòng trọ Anh Đạt",
    image: "./assets/nhatro/nguhoanhson/Tro 1/pic2.jpg",
    price: "2.700.000 VNĐ",
    link: "https://www.facebook.com/groups/baohoxemay/permalink/6713024822134117/",
    address: "Khu đô thị FPT - Quận Ngũ Hành Sơn",
    rooms: 1,
    bathrooms: 1,
    area: "25m<sup>2</sup>",
    author: "Hoàng Văn Đạt",
    authorLink: "",
    authorPhone: "0229 888 2934",
    images: 4,  // Thêm thuộc tính images
    videos: 2   // Thêm thuộc tính videos
  },
  {
    name: "Phòng trọ Cô Linh",
    image: "./assets/nhatro/nguhoanhson/Tro 2/pic-1.jpg",
    price: "3.500.000 VNĐ",
    link: "https://www.facebook.com/groups/phongtronguhanhson/permalink/463623129401329/",
    address: "Khuê Mỹ Đông 3 - Quận Ngũ Hành Sơn",
    rooms: 1,
    bathrooms: 1,
    area: "26m<sup>2</sup>",
    author: "Phạm Thị Khánh Linh",
    authorLink: "",
    authorPhone: "0224 998 3542",
    images: 4,  // Thêm thuộc tính images
    videos: 2   // Thêm thuộc tính videos
  },
  {
    name: "Nhà trọ anh Hoàng",
    image: "./assets/nhatro/nguhoanhson/tro-3.jpg",
    price: "1.500.000",
    link: "https://www.facebook.com/groups/466938163707211/permalink/2180283649039312/?sale_post_id=2180283649039312",
    address: "4 Đỗ Bá - Quận Ngũ Hành Sơn",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Anh Hoàng",
    authorLink: "",
    authorPhone: "0888 922 228",
    images: 4,  // Thêm thuộc tính images
    videos: 0   // Thêm thuộc tính videos
  },
  {
    name: "Nhà trọ Hải Triều",
    image: "./assets/nhatro/nguhoanhson/Tro-4.jpg",
    price: "2.300.000 VNĐ",
    link: "https://web.facebook.com/groups/baohoxemay/permalink/6301047699998500/",
    address: "218 Nam Kì Khởi Nghĩa - Quận Ngũ Hành Sơn",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Hải Triều",
    authorLink: "",
    authorPhone: "0985.744.407",
    images: 4,  // Thêm thuộc tính images
    videos: 2   // Thêm thuộc tính videos
  },
  {
    name: "Phòng trọ cho thuê",
    image: "./assets/nhatro/nguhoanhson/tro-5.jpg",
    price: "2.900.000 VNĐ",
    link: "https://www.facebook.com/groups/phongtronguhanhson/permalink/460596336370675/",
    address: "150 Lê Như Hà - Quận Ngũ Hành Sơn",
    rooms: 1,
    bathrooms: 1,
    area: "27m<sup>2</sup>",
    author: "Cô Lệ",
    authorLink: "",
    authorPhone: "0976 505 516",
    images: 4,  // Thêm thuộc tính images
    videos: 2   // Thêm thuộc tính videos
  },
  {
    name: "Phòng trọ chú Dũng",
    image: "./assets/nhatro/sontra/tro-1.jpg",
    price: "3.200.000 VNĐ",
    link: "https://www.facebook.com/groups/baohoxemay/permalink/6523893294380605/",
    address: "109 Bùi Dương Lịch - Quận Sơn Trà",
    rooms: 0,
    bathrooms: 1,
    area: "24m<sup>2</sup>",
    author: "Ngô Khắc Dũng",
    authorLink: "",
    authorPhone: "0934 157 628",
    images: 4,  // Thêm thuộc tính images
    videos: 2   // Thêm thuộc tính videos
  },
  {
    name: "Phòng trọ chị An",
    image: "./assets/nhatro/sontra/tro-2.jpg",
    price: "2.600.000 VNĐ",
    link: "https://www.facebook.com/groups/561273762016375/permalink/816391813171234/",
    address: "LOSEBY Phước Mỹ - Quận Sơn Trà",
    rooms: 0,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Trương Mỹ An",
    authorLink: "",
    authorPhone: "0358 830 029",
    images: 4,  // Thêm thuộc tính images
    videos: 2   // Thêm thuộc tính videos
  },
  {
    name: "Nhà trọ cô Hương",
    image: "./assets/nhatro/sontra/tro-3.jpg",
    price: "2.500.000",
    link: "https://www.facebook.com/groups/561273762016375/permalink/815265546617194/",
    address: "K4/18 Ngô Quyền - Quận Sơn Trà",
    rooms: 1,
    bathrooms: 1,
    area: "24m<sup>2</sup>",
    author: "Cô Hương",
    authorLink: "",
    authorPhone: "0974 006 825",
    images: 4,  // Thêm thuộc tính images
    videos: 0   // Thêm thuộc tính videos
  },
  {
    name: "Phòng trọ Phan Bá Thiến",
    image: "./assets/nhatro/sontra/tro-4.jpg",
    price: "3.700.000 VNĐ",
    link: "https://www.facebook.com/groups/561273762016375/permalink/798258508317898/",
    address: "Phan Bá Phiến - Quận Sơn Trà",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup> - 25m<sup>2</sup>",
    author: "Hồ Vũ Cảnh Tiên",
    authorLink: "",
    authorPhone: "0964 600 896",
    images: 4,  // Thêm thuộc tính images
    videos: 2   // Thêm thuộc tính videos
  },
  {
    name: "Nhà trọ chú Mẫn",
    image: "./assets/nhatro/sontra/tro-5.jpg",
    price: "2.800.000 VNĐ",
    link: "https://www.facebook.com/groups/561273762016375/permalink/800341041442978/",
    address: "225 Nguyễn Trung Trực - Sơn Trà",
    rooms: 1,
    bathrooms: 1,
    area: "23m<sup>2</sup>",
    author: "Lê Văn Mẫn",
    authorLink: "",
    authorPhone: "0905 262 636",
    images: 4,  // Thêm thuộc tính images
    videos: 2   // Thêm thuộc tính videos
  },
  {
    name: "Phòng trọ Quốc Thịnh",
    image: "./assets/nhatro/haichau/pic-1.jpg",
    price: "4.500.000 VNĐ",
    link: "https://www.facebook.com/groups/baohoxemay/permalink/5395058917264054/",
    address: "37/7 Tiểu La, Hải Châu",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Đặng Thình Quốc Thịnh",
    authorLink: "",
    authorPhone: "0777.472.117",
    images: 4,  // Thêm thuộc tính images
    videos: 0   // Thêm thuộc tính videos
  },
  {
    name: "Phòng trọ Huy Hiệp",
    image: "./assets/nhatro/haichau/pic-2.jpg",
    price: "3.800.000 VNĐ",
    link: "https://www.facebook.com/groups/baohoxemay/permalink/6811465955623336/",
    address: "Đường 3 tháng 2, Hải Châu",
    rooms: 1,
    bathrooms: 1,
    area: "21m<sup>2</sup>",
    author: "Huy Hiệp",
    authorLink: "",
    authorPhone: "0989.883.636",
    images: 4,  // Thêm thuộc tính images
    videos: 0   // Thêm thuộc tính videos
  },
  {
    name: "Nhà trọ Đình Tiến",
    image: "./assets/nhatro/haichau/pic-3.jpg",
    price: "3.000.000 VNĐ",
    link: "https://www.facebook.com/groups/baohoxemay/permalink/6810058062430792/",
    address: "Đường Lê Thanh Nghị - Hải Châu",
    rooms: 1,
    bathrooms: 1,
    area: "22m<sup>2</sup>",
    author: "Đình Tiến",
    authorLink: "",
    authorPhone: "0335.717.893",
    images: 6,  // Thêm thuộc tính images
    videos: 0   // Thêm thuộc tính videos
  },
  {
    name: "Nhà trọ Khánh Bình",
    image: "./assets/nhatro/haichau/pic-4.jpg",
    price: "2.500.000 VNĐ",
    link: "https://www.facebook.com/groups/baohoxemay/permalink/6360717357364867/",
    address: "204 Trưng Nữ Vương, Hải châu, Đà Nẵng",
    rooms: 1,
    bathrooms: 1,
    area: "25m<sup>2</sup>",
    author: "Trần Hoàng Khánh Bình",
    authorLink: "",
    authorPhone: "0931.629.773",
    images: 11,  // Thêm thuộc tính images
    videos: 0   // Thêm thuộc tính videos
  },
  {
    name: "Nhà trọ Nhan Thai",
    image: "./assets/nhatro/haichau/pic-5.jpg",
    price: "3.000.000 VNĐ",
    link: "https://www.facebook.com/groups/baohoxemay/permalink/4221675174602440/",
    address: "82/17 Núi Thành, quận Hải Châu",
    rooms: 1,
    bathrooms: 1,
    area: "22m<sup>2</sup>",
    author: "Nhan Thai",
    authorLink: "",
    authorPhone: "0783.427.406",
    images: 5,  // Thêm thuộc tính images
    videos: 0   // Thêm thuộc tính videos
  },
  {
    name: "Phòng trọ Nguyễn Thủy",
    image: "./assets/nhatro/camle/pic-1.jpg",
    price: "2.600.000 VNĐ",
    link: "https://www.facebook.com/groups/1432661887200640/permalink/1845981472535344/",
    address: "Đường Quách Thị Trang, gần Võ Chí Công - Cẩm Lệ",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Nguyễn Thủy",
    authorLink: "",
    authorPhone: "0394.575.752",
    images: 5,  // Thêm thuộc tính images
    videos: 1   // Thêm thuộc tính videos
  },
  {
    name: "Nhà trọ Thái Phiên",
    image: "./assets/nhatro/camle/pic-2.jpg",
    price: "2.300.000 VNĐ",
    link: "https://www.facebook.com/groups/baohoxemay/permalink/5581180795318531/",
    address: "Trần Huy Liệu, Khuê Trung, Cẩm Lệ",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Trần Thái Phiên",
    authorLink: "",
    authorPhone: "0963.655.790",
    images: 7,  // Thêm thuộc tính images
    videos: 0   // Thêm thuộc tính videos
  },
  {
    name: "Nhà trọ Hà Vân",
    image: "./assets/nhatro/camle/pic-3.jpg",
    price: "3.000.000 VNĐ",
    link: "https://www.facebook.com/groups/baohoxemay/permalink/6379410995495503/",
    address: "Đường 57 Thanh Lương 24, Hoà Xuân, Cẩm Lệ",
    rooms: 1,
    bathrooms: 1,
    area: "35m<sup>2</sup>",
    author: "Lê Hà Vân",
    authorLink: "",
    authorPhone: "0784.333.334",
    images: 7,  // Thêm thuộc tính images
    videos: 2   // Thêm thuộc tính videos
  },
  {
    name: "Nhà trọ cô Huế",
    image: "./assets/nhatro/camle/pic-4.jpg",
    price: "2.700.000 VNĐ",
    link: "https://www.facebook.com/groups/chothuephongtrodanang/permalink/3064069697225013/",
    address: "Đường Cách Mạng Tháng 8, Cẩm Lệ",
    rooms: 1,
    bathrooms: 1,
    area: "23m<sup>2</sup>",
    author: "Hồ Thị Huế",
    authorLink: "",
    authorPhone: "0903.564.515",
    images: 6,  // Thêm thuộc tính images
    videos: 0   // Thêm thuộc tính videos
  },
  {
    name: "Nhà trọ Hà Vân",
    image: "./assets/nhatro/camle/pic-5.jpg",
    price: "3.100.000 VNĐ",
    link: "https://www.facebook.com/groups/chothuephongtrodanang/permalink/3137062879925694/ ",
    address: "Đường 57 Thanh Lương 24, Hoà Xuân, Cẩm Lệ",
    rooms: 1,
    bathrooms: 1,
    area: "35m<sup>2</sup>",
    author: "Lê Hà Vân",
    authorLink: "",
    authorPhone: "0777.594.050",
    images: 6,  // Thêm thuộc tính images
    videos: 0   // Thêm thuộc tính videos
  },
  {
    name: "Phòng trọ Na Na",
    image: "./assets/nhatro/lienchieu/tro-1.jpg",
    price: "1.900.000 VNĐ",
    link: "https://www.facebook.com/groups/2910400229194515/permalink/3855300991371096/",
    address: "126 Nam Cao",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "NaNa",
    authorLink: "",
    authorPhone: "Gần BK, SP",
    images: 4,  // Thêm thuộc tính images
    videos: 0   // Thêm thuộc tính videos
  },
  {
    name: "Nhà trọ Ánh Phương",
    image: "./assets/nhatro/lienchieu/tro-2.jpg",
    price: "1.300.000 VNĐ",
    link: "https://www.facebook.com/groups/2910400229194515/permalink/3853370691564126/",
    address: "Ngã ba Âu cơ với Mê Linh",
    rooms: 1,
    bathrooms: 1,
    area: "25m<sup>2</sup>",
    author: "Ánh Phương",
    authorLink: "",
    authorPhone: "Gần FPT, Sư phạm",
    images: 6,  // Thêm thuộc tính images
    videos: 0   // Thêm thuộc tính videos
  },
  {
    name: "Văn Duy Mini",
    image: "./assets/nhatro/lienchieu/tro-3.jpg",
    price: "2.500.000",
    link: "https://www.facebook.com/groups/2910400229194515/permalink/3851858741715321/",
    address: "Liên Chiểu",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Duy Bùi",
    authorLink: "",
    authorPhone: "0942.118.483",
    images: 6,  // Thêm thuộc tính images
    videos: 0   // Thêm thuộc tính videos
  },
  {
    name: "Nhà trọ Trọng Nghĩa",
    image: "./assets/nhatro/lienchieu/tro-4.jpg",
    price: "1.700.000 VNĐ",
    link: "https://www.facebook.com/groups/2910400229194515/permalink/3855715664662962/",
    address: "K80/24 Nguyễn Chánh",
    rooms: 1,
    bathrooms: 1,
    area: "22m<sup>m2</sup>",
    author: "Trọng Nghĩa",
    authorLink: "",
    authorPhone: "0905685290",
    images: 5,  // Thêm thuộc tính images
    videos: 0   // Thêm thuộc tính videos
  },
  {
    name: "Trọ Đào Xuân",
    image: "./assets/nhatro/lienchieu/tro-5.jpg",
    price: "1.500.000 VNĐ",
    link: "https://www.facebook.com/groups/2910400229194515/permalink/3853961854838343/",
    address: "1013 Âu cơ",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Đào Xuân",
    authorLink: "",
    authorPhone: "0343048643",
    images: 5,  // Thêm thuộc tính images
    videos: 0   // Thêm thuộc tính videos
  },
  {
    name: "Phòng trọ Vĩnh Trung",
    image: "./assets/nhatro/thanhkhe/tro-1.jpg",
    price: "4.000.000 VNĐ",
    link: "https://www.facebook.com/groups/950598395598934/permalink/1391906518134784/",
    address: "K104/11A đường Lê Đình Lý - Quận Thanh Khê",
    rooms: 1,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Trịnh Thị Lan",
    authorLink: "",
    authorPhone: "0906.572.008",
    images: 4,  // Thêm thuộc tính images
    videos: 2   // Thêm thuộc tính videos
  },
  {
    name: "Phòng trọ Điện Biên Phủ",
    image: "./assets/nhatro/thanhkhe/tro-2.jpg",
    price: "2.900.000 VNĐ",
    link: "https://www.facebook.com/groups/950598395598934/permalink/1405002826825153/",
    address: "Điện Biên Phủ - Quận Thanh Khê",
    rooms: 0,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Trương Mỹ An",
    authorLink: "",
    authorPhone: "0358.830.029",
    images: 4,  // Thêm thuộc tính images
    videos: 2   // Thêm thuộc tính videos
  },
  {
    name: "Nhà trọ An An",
    image: "./assets/nhatro/thanhkhe/tro-3.jpg",
    price: "3.100.000 VNĐ",
    link: "https://www.facebook.com/groups/950598395598934/permalink/1404999333492169/",
    address: "Kiệt Nguyễn Phước Nguyên - Quận Thanh Khê",
    rooms: 0,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "An Trương",
    authorLink: "",
    authorPhone: "0358.830.029",
    images: 4,  // Thêm thuộc tính images
    videos: 0   // Thêm thuộc tính videos
  },
  {
    name: "Phòng trọ chú Dương",
    image: "./assets/nhatro/thanhkhe/tro-4.jpg",
    price: "2.850.000 VNĐ",
    link: "https://www.facebook.com/groups/950598395598934/permalink/1404430660215703/",
    address: "66A Lê Thị Tính - Quận Thanh Khê",
    rooms: 1,
    bathrooms: 1,
    area: "23m<sup>2</sup>",
    author: "Dương Quốc Dương",
    authorLink: "",
    authorPhone: "0889.619.358",
    images: 4,  // Thêm thuộc tính images
    videos: 2   // Thêm thuộc tính videos
  },
  {
    name: "Phòng trọ Mỹ Linh",
    image: "./assets/nhatro/thanhkhe/tro-5.jpg",
    price: "2.700.000 VNĐ",
    link: "https://www.facebook.com/groups/trodanang/permalink/1560232021176227/",
    address: "95/15 Lê Đình Lý - Quận Thanh Khê",
    rooms: 0,
    bathrooms: 1,
    area: "20m<sup>2</sup>",
    author: "Mỹ Linh",
    authorLink: "",
    authorPhone: "0935.006.204",
    images: 4,  // Thêm thuộc tính images
    videos: 2   // Thêm thuộc tính videos
  }
];