// ALERT BANNER
const alert = document.getElementById("alert");


alert.innerHTML = 
`<div class="alert-banner"> 
<p> <strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p> 
<p class="alert-banner-close">X</p> 
</div>`



alert.addEventListener ('click', (e) => {
    const element = e.target;
    if(element.classList.contains("alert-banner-close")){
        alert.style.display = 'none';
    }
});


// Traffic Chart

const trafficCanvas = document.getElementById('traffic-chart');

let hourData = {
    labels:  ["1", "3", "5", "7", "9", "11", "13",
    "15", "17", "19", "21", "24"],
    datasets: [{data: [10, 14, 11, 22, 28, 38, 69, 120, 90, 72,
        52],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,}],
};

let dailyData = {
    labels:  ["1", "5", "9", "13", "17", "21", "25",
    "29", "31"],
    datasets: [{data: [50, 150, 400, 859, 1500, 800, 1250, 1850, 1000, 1500,
        2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,}],
};

let weeklyData = {
    labels:  ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31" ],
    datasets: [{data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
        2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,}],
};

let monthData = {
    labels:  ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
    "Aug", "Sep", "Oct", "Nov", "Dec" ],
    datasets: [{data: [120, 350, 200, 950, 780, 1100, 1300, 1850, 2250, 1500,
        2500],
        backgroundColor: 'rgba(116, 119, 191, .3)',
        borderWidth: 1,}],
};

let trafficOptions = {
    responsive: true;
    aspectRatio: 2.5,
    animation: {
    duration: 0
    },
    scales: {
    yAxes: [{
    ticks: {
    beginAtZero:true
    }
    }]
    },
    legend : {
    display: false
    }
    };

    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: dailyData,
        options: trafficOptions
        });

