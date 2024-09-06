function calculateIrrigation() {
    const soilMoisture = document.getElementById('soilMoisture').value;
    const cropType = document.getElementById('cropType').value;
    const soilType = document.getElementById('soilType').value;
    const weather = document.getElementById('weather').value;

    let irrigationRecommendation = '';

    // Simple logic for irrigation recommendation
    if (soilMoisture < 30) {
        irrigationRecommendation = 'High irrigation needed.';
    } else if (soilMoisture >= 30 && soilMoisture <= 60) {
        irrigationRecommendation = 'Moderate irrigation needed.';
    } else {
        irrigationRecommendation = 'Low irrigation needed.';
    }

    const result = `
        <h2>Irrigation Recommendation</h2>
        <p><strong>Crop Type:</strong> ${cropType}</p>
        <p><strong>Soil Type:</strong> ${soilType}</p>
        <p><strong>Weather Condition:</strong> ${weather}</p>
        <p><strong>Soil Moisture Level:</strong> ${soilMoisture}%</p>
        <p><strong>Recommendation:</strong> ${irrigationRecommendation}</p>
    `;

    document.getElementById('result').innerHTML = result;
}
