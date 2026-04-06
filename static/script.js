document.addEventListener('DOMContentLoaded', () => {

    // 1. Chart.js Config
    const goldColor = '#ffd700';
    const darkBg = 'rgba(0, 0, 0, 0.5)';
    
    // Default chart configuration options
    Chart.defaults.color = '#a0a0a0';
    Chart.defaults.font.family = "'Inter', sans-serif";

    const createDoughnutChart = (ctxId, label, dataValue) => {
        const ctx = document.getElementById(ctxId);
        if (!ctx) return;
        
        return new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Used', 'Free'],
                datasets: [{
                    label: label,
                    data: [dataValue, 100 - dataValue],
                    backgroundColor: [goldColor, darkBg],
                    borderColor: ['transparent', 'transparent'],
                    borderWidth: 1,
                    hoverOffset: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '75%',
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: label,
                        color: '#f0f0f0',
                        font: { size: 16 }
                    }
                }
            }
        });
    };

    // Initialize charts if systemStats is defined (injected via HTML)
    if (typeof systemStats !== 'undefined') {
        createDoughnutChart('cpuChart', 'CPU Usage', systemStats.cpu);
        createDoughnutChart('ramChart', 'RAM Usage', systemStats.ram);
        createDoughnutChart('diskChart', 'Disk Usage', systemStats.disk);
    }

    // 2. Modal Logic
    const modal = document.getElementById("issueModal");
    const btn = document.getElementById("reportBtn");
    const span = document.getElementById("closeModalBtn");
    const form = document.getElementById("issueForm");

    if (btn && modal) {
        btn.onclick = function() {
            modal.style.display = "block";
        }

        span.onclick = function() {
            modal.style.display = "none";
        }

        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }

    // 3. Form Submission Handling
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            
            // Dummy submission response
            alert("Issue Reported Successfully!");
            
            // Close modal and reset form
            form.reset();
            modal.style.display = "none";
        });
    }

});
