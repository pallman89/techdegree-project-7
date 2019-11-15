// ALERT BANNER
const alert = document.getElementById("alert");


alert.innerHTML = 
`<div class="alert-banner"> 
<p> <strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p> <p class="alert-banner-close">X</p> 
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

let dayData = {
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
    responsive: true,
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
        data: dayData,
        options: trafficOptions
        });

// Bar Graph

const dailyCanvas = document.getElementById('daily-chart');

const dailyData = {
    labels: ["S", "M", "T", "W", "T", "F", "S" ],
    datasets: [{
        label: '# of Hits',
        data: [75, 102, 115, 225, 200, 90, 104], 
        backgroundColor: '#7477BF',
        borderWidth: 1
    }]
    };

const dailyOptions = {
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
    }

    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
    });


    // Mobile Doughnut Chart

    const mobileCanvas = document.getElementById("mobile-chart");

    const mobileData = {
        labels: ["Desktop", "Tablet", "Phone"],
        datasets: [{
            label: '# of Users',
            data: [2000 , 550, 500],
            borderWidth: 0,
            backgroundColor: [
                '#7477BF',
                '#78CF82',
                '#51B6C8'
            ]
        }]
    };

    const mobileOptions = {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    };

    let mobileChart = new Chart(mobileCanvas, {
        type: 'doughnut',
        data: mobileData,
        options: mobileOptions

    });

    // User Search

    const user = document.getElementById('userField');
    const message = document.getElementById('messageField');
    const send = document.getElementById('send');

    send.addEventListener('click', (e) => {
        if (user.value && message.value === " "){
            alert("Please fill out user and message fields before sending");
        } else if (user.value === ""){
            alert("Please fill out message field before sending");
        } else if (message.value === ""){
            alert("Please fill out user field before sending");
        } else {
            alert("Message sent to $(user.value)");
        }
    });

