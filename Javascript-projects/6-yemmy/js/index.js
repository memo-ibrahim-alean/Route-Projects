let mealContainer = document.getElementById('mealContainer');
let searchContainer = document.getElementById('searchContainer');
let searchContainerRes = document.getElementById('searchContainerRes');

$(document).ready(function () {
    $("#sidebarToggle").on("click", function () {
        $(".main-sidebar").toggleClass("active");
        $(".small-sidebar").toggleClass("active");
        $(this).find("i").toggleClass("fa-bars fa-times");

        // Toggle the left position of the small sidebar
        if ($(".small-sidebar").hasClass("active")) {
            $(".small-sidebar").css("left", "17%");
        } else {
            $(".small-sidebar").css("left", "0");
        }
    });
});

// Fetch data from the API
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(response => response.json())
    .then(data => {
        const meals = data.meals;
        meals.forEach(meal => {
            // Create a Bootstrap card for each meal
            const card = document.createElement('div');
            card.classList.add('col-md-3', 'mb-4');

            card.innerHTML = `
                <div class="card">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                    <div class="card-overlay">
                        <p class="card-text">${meal.strMeal}</p>
                    </div>
                </div>
            `;

            mealContainer.appendChild(card);
        });
    })
    .catch(error => console.error('Error fetching data:', error));


function showSearchInputs() {
    const mealContainer = document.getElementById('mealContainer');
    searchContainer.innerHTML = `
    <div class="row py-4 w-75 m-auto">
        <div class="col-md-6">
            <input onkeyup="searchByName(this.value)" class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input onkeyup="searchByFLetter(this.value)" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
        </div>

    </div>
    `

    mealContainer.innerHTML = ""
}

function searchByName(Name) {

    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${Name}`)
        .then(response => response.json())
        .then(data => {
            const meals = data.meals;
            meals.forEach(meal => {
                // Create a Bootstrap card for each meal
                const card = document.createElement('div');
                card.classList.add('col-md-3', 'mb-4');

                card.innerHTML = `
                <div class="card d-block">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="${meal.strMeal}">
                    <div class="card-overlay">
                        <p class="card-text">${meal.strMeal}</p>
                    </div>
                </div>
            `;
                searchContainer.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
}
