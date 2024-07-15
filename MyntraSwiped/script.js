document.addEventListener('DOMContentLoaded', function() {
    const cardsTab = document.getElementById('cards-tab'); // Reference to the CARD tab link
    const popupContainer = document.getElementById('popup-container');
    const popupCard = document.querySelector('.popup-card');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');

    // Points display element
    const pointsDisplay = document.createElement('div');
    pointsDisplay.id = 'points-display';
    pointsDisplay.innerText = 'Points: 0';
    document.body.appendChild(pointsDisplay);

    // Dummy data for demonstration (replace with your data fetching logic)
    const dummyData = [
        {
            imageSrc: 'card1.png',
            title: 'FITHUB',
            description: 'Green coloured Jacket',
        },
        {
            imageSrc: 'card2.png',
            title: 'PlusS',
            description: 'Cream coloured Cute Oversized Sweater',
        },
        {
            imageSrc: 'card3.png',
            title: 'TRENDYOL',
            description: 'Black Coloured Joggers',
        },
        {
            imageSrc: 'card4.png',
            title: 'ROADSTER',
            description: 'Pure Cotton Crop Top',
        },
        {
            imageSrc: 'card5.jpg',
            title: 'STREET9',
            description: 'Off-shoulder classic streetstyle Crop Top',
        }
    ];

    let currentCardIndex = 0;
    let points = 0;

    function showNextCard() {
        if (currentCardIndex < dummyData.length) {
            const cardData = dummyData[currentCardIndex];
            popupImage.setAttribute('src', cardData.imageSrc);
            popupTitle.innerText = cardData.title;
            popupDescription.innerText = cardData.description;
            popupContainer.style.display = 'block';
            popupCard.classList.remove('swipe-left', 'swipe-right');
        } else {
            // All cards swiped, display points
            pointsDisplay.innerText = `You've completed all the cards! Total Points: ${points}`;
        }
    }

    // Event listener for the CARD tab click
    cardsTab.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        showNextCard();
    });

    // Close popup on clicking outside the popup card
    popupContainer.addEventListener('click', function(e) {
        if (e.target === popupContainer) {
            popupContainer.style.display = 'none';
        }
    });

    // Handle like and dislike buttons in popup cards
    const btnLike = document.querySelector('.btn-like');
    const btnDislike = document.querySelector('.btn-dislike');

    btnLike.addEventListener('click', function() {
        movePopupCard('right');
    });

    btnDislike.addEventListener('click', function() {
        movePopupCard('left');
    });

    function movePopupCard(direction) {
        popupCard.classList.add(`swipe-${direction}`);
        setTimeout(() => {
            currentCardIndex++;
            if (currentCardIndex <= dummyData.length) {
                points += 10; // Add points for each swipe
                pointsDisplay.innerText = `Points: ${points}`;
            }
            showNextCard();
        }, 300); // Show next card after animation
    }
});
