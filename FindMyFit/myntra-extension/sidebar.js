document.addEventListener('DOMContentLoaded', function () {
  const clothes = [
    {
      title: "Self Design Shirt Style Top",
      image: "images/top.png",
      url: "https://www.myntra.com/tops/athena/athena-self-design-shirt-collar-schiffli-cotton-shirt-style-top/25635016/buy"
    },
    {
      title: "Women Running Legging",
      image: "images/legging.png",
      url: "https://www.myntra.com/tights/hrx+by+hrithik+roshan/hrx-by-hrithik-roshan-women-running-cut-and-sew-legging/28198192/buys"
    },
    {
      title: "Gold-Plated Necklace",
      image: "images/necklace.png",
      url: "https://www.myntra.com/necklace-and-chains/minutiae/minutiae-gold-toned-brass-gold-plated-necklace/16091254/buy"
    },
    {
      title: "White Wireless Earbuds",
      image: "images/earbuds.png",
      url: "https://www.myntra.com/headphones/realme/realme-buds-air-5-true-wireless-earbuds/26159838/buy"
    },
    {
      title: "Black Phone Cover",
      image: "images/cover.png",
      url: "https://www.myntra.com/mobile-accessories/karwan/karwan-iphone-12-back-case-mobile-accessories/27516330/buy"
    },
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
