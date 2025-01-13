const apiKey = 'sk-fLj167033c4167f1e7145';
const apiUrl = `https://perenual.com/api/species-list?key=sk-ffIl656827c3479f93205`;
let allPlants = [];


function fetchPlants() {
    axios.get(apiUrl)
        .then(response => {
            allPlants = response.data.data; 
            displayPlants(allPlants); 
        })
        .catch(error => {
            console.error('Error fetching plant data:', error);
        });
}


function displayPlants(plants) {
    const plantListDiv = document.getElementById('plant-list');
    plantListDiv.innerHTML = ''; 

    plants.forEach(plant => {
        const plantCard = `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${plant.default_image?.thumbnail || 'https://via.placeholder.com/150'}" class="card-img-top" alt="${plant.common_name}">
                    <div class="card-body">
                        <h5 class="card-title">${plant.common_name || 'Unknown Plant'}</h5>
                        <p class="card-text"><strong>Scientific Name:</strong> ${plant.scientific_name}</p>
                        <p class="card-text"><strong>Watering:</strong> ${plant.watering || 'Not available'}</p>
                        <button class="btn btn-primary" onclick="showPlantDetails('${plant.scientific_name}')">View Details</button>
                    </div>
                </div>
            </div>
        `;
        plantListDiv.innerHTML += plantCard; 
    });
}


function showPlantDetails(scientificName) {
    const selectedPlant = allPlants.find(plant => plant.scientific_name === scientificName);
    if (selectedPlant) {
        const modalContent = `
            <h5>${selectedPlant.common_name || 'Unknown Plant'}</h5>
            <img src="${selectedPlant.default_image?.thumbnail || 'https://via.placeholder.com/150'}" class="img-fluid mb-3" alt="${selectedPlant.common_name}">
            <p><strong>Scientific Name:</strong> ${selectedPlant.scientific_name}</p>
            <p><strong>Watering:</strong> ${selectedPlant.watering || 'Not available'}</p>
            <p><strong>Sunlight:</strong> ${selectedPlant.sunlight || 'Not available'}</p>
            <p><strong>Toxicity:</strong> ${selectedPlant.toxicity || 'Not available'}</p>
        `;
        document.getElementById('modal-plant-content').innerHTML = modalContent;
        $('#plantModal').modal('show');
    }
}



document.getElementById('search-input').addEventListener('input', function (e) {
    const query = e.target.value.toLowerCase();
    const filteredPlants = allPlants.filter(plant => plant.common_name?.toLowerCase().includes(query));
    displayPlants(filteredPlants);
});


document.addEventListener('DOMContentLoaded', fetchPlants);
