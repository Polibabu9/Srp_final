// Contact Form Submission and Reset Functionality
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        fetch(form.action, {
            method: 'POST',
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                form.reset(); // Clear the form fields
                form.style.display = 'none'; // Hide the form
                thankYouMessage.style.display = 'block'; // Show thank you message
            } else {
                alert('Oops! There was a problem submitting your form');
            }
        })
        .catch(error => {
            alert('Oops! There was a problem submitting your form');
        });
    });
});

// Graph Data and Rendering with Chart.js
function renderWasteGraph() {
    const ctx1 = document.getElementById('dailyWasteGraph').getContext('2d');
    const dailyWasteData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [{
            label: 'Daily Waste Produced (kg)',
            data: [50, 45, 60, 55, 70, 65, 80], // Example data
            backgroundColor: 'rgba(0, 123, 255, 0.5)',
            borderColor: 'rgba(0, 123, 255, 1)',
            borderWidth: 2
        }]
    };
    new Chart(ctx1, {
        type: 'bar',
        data: dailyWasteData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function renderReductionGraph() {
    const ctx2 = document.getElementById('reductionGraph').getContext('2d');
    const reductionData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Waste Reduction with Dome Digester (%)',
            data: [5, 10, 20, 25, 30, 35], // Example data
            backgroundColor: 'rgba(40, 167, 69, 0.5)',
            borderColor: 'rgba(40, 167, 69, 1)',
            borderWidth: 2
        }]
    };
    new Chart(ctx2, {
        type: 'line',
        data: reductionData,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Initialize the Graphs
document.addEventListener("DOMContentLoaded", function() {
    renderWasteGraph();
    renderReductionGraph();
});
