document.addEventListener('DOMContentLoaded', function () {
  const clothes = [
    {
      title: "Anti Odour Lightweight Leather Jacket",
      image: "images/jacket.png",
      url: "https://www.myntra.com/jackets/tboj/tboj-anti-odour-lightweight-leather-jacket/26801742/buy"
    },
    {
      title: "Floral Printed Flutter Sleeves Tie Ups Mini Fit & Flare Dress",
      image: "images/dress.png",
      url: "https://www.myntra.com/dresses/stylecast/stylecast-floral-printed-flutter-sleeves-tie-ups-mini-fit--flare-dress/27028610/buy"
    },
    {
      title: "Heart Shaped Hoop Earrings",
      image: "images/hoops.png",
      url: "https://www.myntra.com/earrings/el+regalo/el-regalo-heart-shaped-hoop-earrings/30010027/buy"
    },
    {
      title: "Women Off White Long Tail Satin Scrunchie",
      image: "images/scrunchie.png",
      url: "https://www.myntra.com/hair-accessory/mueras/mueras-women-off-white-long-tail-satin-scrunchie/18945166/buy"
    },
    {
      title: "Men Easy Care White Solid Sustainable Formal Shirt",
      image: "images/shirt.png",
      url: "https://www.myntra.com/shirts/invictus/invictus-men-easy-care-white-solid--sustainable-formal-shirt/13340304/buy"
    },
    {
      title: "Men Navy Blue Relaxed Tapered Fit Trousers",
      image: "images/pant.png",
      url: "https://www.myntra.com/trousers/turtle/turtle-men-navy-blue-relaxed-tapered-fit-trousers/20538260/buy"
    }
  ];

  displayClothes(clothes);
});

function displayClothes(clothes) {
  const clothesList = document.getElementById('clothes-list');

  clothes.forEach(cloth => {
    const clothItem = document.createElement('div');
    clothItem.className = 'cloth-item';

    const clothImage = document.createElement('img');
    clothImage.src = cloth.image;
    clothItem.appendChild(clothImage);

    const clothTitle = document.createElement('div');
    clothTitle.className = 'title';
    clothTitle.textContent = cloth.title;
    clothItem.appendChild(clothTitle);

    const buyNowButton = document.createElement('a');
    buyNowButton.className = 'buy-now';
    buyNowButton.textContent = 'Buy Now';
    buyNowButton.href = cloth.url;
    buyNowButton.target = '_blank';
    clothItem.appendChild(buyNowButton);

    clothesList.appendChild(clothItem);
  });
}
