const destinations = [
    {
        name: "Water Lily, Canada",
        image: "waterlily.jpg",  // Example: inside 'canada' folder
        experience: "A peaceful spot in Canada where serene lakes are adorned with floating water lilies, offering a calming escape from city life.",
        food: { 
            name: "Poutine", 
            image: "poutine.AVIF", // Example: inside 'canada_food' folder
            description: "Crispy fries topped with cheese curds and rich gravy — a Canadian comfort food classic." 
        }
    },
    {
        name: "Peru",
        image: "peru.jpg", // Example: inside 'southamerica' folder
        experience: "Home to Machu Picchu and the breathtaking Andes, Peru offers a blend of history, adventure, and stunning landscapes.",
        food: { 
            name: "Ceviche", 
            image: "ceviche.jpg", // Example: inside 'peru_food' folder
            description: "Fresh raw fish cured in citrus juices and seasoned with chili peppers — a refreshing Peruvian favorite." 
        }
    },
    {
        name: "Paris, France",
        image: "paris.jpg", // Example: inside 'france' folder
        experience: "Walking by the Seine, admiring the Eiffel Tower, and exploring the Louvre are unforgettable experiences in Paris.",
        food: { 
            name: "Croissant & Escargots", 
            image: "croissants.jpg", // Example: inside 'france_food' folder
            description: "Flaky, buttery croissants and adventurous escargots are must-tries in Paris." 
        }
    },
    {
        name: "Rajasthan Market, India",
        image: "rajasthanmarket.jpg", // Example: inside 'india' folder
        experience: "Colorful bazaars filled with handicrafts, textiles, spices, and vibrant local culture make Rajasthan’s markets unforgettable.",
        food: { 
            name: "Dal Baati Churma", 
            image: "Dal.jpg", // Example: inside 'india_food' folder
            description: "A traditional Rajasthani dish of baked wheat balls served with spicy lentils and sweet churma." 
        }
    },
    {
        name: "Dubai, UAE",
        image: "dubai.jpg", // Example: inside 'uae' folder
        experience: "A futuristic city with skyscrapers, desert safaris, luxury shopping, and cultural experiences blending tradition with modernity.",
        food: { 
            name: "Shawarma", 
            image: "shawarma.jpg", // Example: inside 'uae_food' folder
            description: "Juicy, spiced meat wrapped in pita bread with garlic sauce and vegetables — a Dubai street food favorite." 
        }
    },
    {
        name: "Atlanta, USA",
        image: "atlanter.jpg", // Example: inside 'usa' folder
        experience: "Known for its rich history, vibrant music scene, and warm Southern hospitality, Atlanta is a city full of energy.",
        food: { 
            name: "Fried Chicken & Waffles", 
            image: "friedchicken.jpg", // Example: inside 'usa_food' folder
            description: "Crispy fried chicken paired with fluffy waffles and syrup — a sweet and savory Southern classic." 
        }
    }
];

const destinationList = document.getElementById("destination-list");

destinations.forEach(dest => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${dest.image}" alt="${dest.name}">
        <div class="card-content">
            <h3>${dest.name}</h3>
            <p>${dest.experience}</p>
            <div class="food-section">
                <h4>🍴 Local Food: ${dest.food.name}</h4>
                <img src="${dest.food.image}" alt="${dest.food.name}" style="width:100%; border-radius:5px;">
                <p>${dest.food.description}</p>
            </div>
        </div>
    `;

    destinationList.appendChild(card);
});
