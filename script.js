document.addEventListener("DOMContentLoaded", function () {
    
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute("href"));
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});

const recipes = [
    { "name": "Butter Chicken","img":"images/butter-chicken.jpg", "cuisine": "Indian", "time": 40, "ingredients": ["chicken", "butter", "cream", "tomato"], "price": 350 },
    { "name": "Paneer Tikka", "img":"images/paneer-tikka.jpg","cuisine": "Indian", "time": 30, "ingredients": ["paneer", "yogurt", "spices", "capsicum"], "price": 250 },
    { "name": "Dal Makhani","img":"images/dal-makhani.jfif", "cuisine": "Indian", "time": 45, "ingredients": ["black lentils", "butter", "cream", "tomato"], "price": 180 },
    { "name": "Chole Bhature","img":"images/chole-bhature.jfif", "cuisine": "Indian", "time": 40, "ingredients": ["chickpeas", "flour", "spices", "yogurt"], "price": 150 },
    { "name": "Masala Dosa","img":"images/dosa.jfif", "cuisine": "Indian", "time": 35, "ingredients": ["rice batter", "potato", "mustard seeds", "chili"], "price": 70 },
    { "name": "Biryani", "img":"images/biryani.jfif","cuisine": "Indian", "time": 60, "ingredients": ["rice", "meat or paneer", "spices", "yogurt"], "price": 300 },
    { "name": "Palak Paneer","img":"images/palak-paneer.jfif", "cuisine": "Indian", "time": 30, "ingredients": ["spinach", "paneer", "garlic", "cream"], "price": 220 },
    { "name": "Aloo Paratha","img":"images/allo-paratha.jfif", "cuisine": "Indian", "time": 25, "ingredients": ["wheat flour", "potato", "butter", "spices"], "price": 120 },
    { "name": "Pav Bhaji", "img":"images/pav-bhaji.jfif","cuisine": "Indian", "time": 30, "ingredients": ["vegetables", "pav bread", "butter", "spices"], "price": 160 },
    { "name": "Margherita Pizza", "img":"images/pizza.jfif","cuisine": "Italian", "time": 30, "ingredients": ["flour", "tomato", "cheese", "basil"], "price": 280 },
    { "name": "Pasta Alfredo","img":"images/passta.jfif", "cuisine": "Italian", "time": 25, "ingredients": ["pasta", "cream", "cheese", "butter"], "price": 260 },
    { "name": "Lasagna", "img":"images/lasanga.jfif","cuisine": "Italian", "time": 50, "ingredients": ["lasagna sheets", "cheese", "tomato", "minced meat"], "price": 350 },
    { "name": "Bruschetta", "img":"images/brushetta.jfif","cuisine": "Italian", "time": 15, "ingredients": ["bread", "tomato", "basil", "olive oil"], "price": 180 },
    { "name": "Spaghetti Carbonara", "img":"images/spaghetti.jfif","cuisine": "Italian", "time": 20, "ingredients": ["pasta", "eggs", "cheese", "bacon"], "price": 270 },
    { "name": "Hakka Noodles", "img":"images/noodles.jfif","cuisine": "Chinese", "time": 15, "ingredients": ["noodles", "capsicum", "carrot", "soy sauce"], "price": 200 },
    { "name": "Schezwan Fried Rice", "img":"images/shejvan-rice.jfif","cuisine": "Chinese", "time": 15, "ingredients": ["rice", "schezwan sauce", "capsicum", "garlic"], "price": 220 }
];


function displayRecipes(filteredRecipes) {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = "";

    if (filteredRecipes.length === 0) {
        recipeList.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    filteredRecipes.forEach(recipe => {
        const recipeCard = document.createElement("div");
        recipeCard.classList.add("recipe-card");

        recipeCard.innerHTML = `
            <h3>${recipe.name}</h3>
            <img src="${recipe.img}" class="recipe-img">
            <p><strong>Cuisine:</strong> ${recipe.cuisine}</p>
            <p><strong>Time:</strong> ${recipe.time} min</p>
            <p><strong>Price:</strong> ${recipe.price} Rs</p>
            <p><strong>Ingredients:</strong> ${recipe.ingredients.join(", ")}</p>
        `;

        recipeList.appendChild(recipeCard);
    });
}

function applyFilters() {
    const searchQuery = document.getElementById("search").value.toLowerCase();
    const selectedCuisine = document.getElementById("cuisine-filter").value;
    const selectedTime = document.getElementById("time-filter").value;

    let filteredRecipes = recipes.filter(recipe => {
        return (
            (recipe.name.toLowerCase().includes(searchQuery) || 
            recipe.ingredients.some(ing => ing.includes(searchQuery))) &&
            (selectedCuisine === "" || recipe.cuisine === selectedCuisine) &&
            (selectedTime === "" || recipe.time <= parseInt(selectedTime))
        );
    });

    displayRecipes(filteredRecipes);
}

displayRecipes(recipes);
