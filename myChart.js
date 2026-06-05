// Get Current Date
let currentDate = new Date();

document.getElementById('date').innerHTML = currentDate.toLocaleDateString('en-US', {year : 'numeric', month: 'long', day: 'numeric'});

//Get Twitter Trends Data
const url = 'https://twitter-trends5.p.rapidapi.com/twitter/request.php';
const options = {
	method: 'POST',
	headers: {
		'x-rapidapi-key': '750e741ce4msh4ed45b11c88b94ep1e314cjsnb324c540564c',
		'x-rapidapi-host': 'twitter-trends5.p.rapidapi.com',
		'Content-Type': 'application/x-www-form-urlencoded'
	},
	body: new URLSearchParams({woeid: 23424934})
};

fetch(url, options)
.then(res => res.json())
.then(data => {
	console.log(data);

  let graphData = [];

  //Loop to only get 25 trends
  for(let i = 0; i < 25; i++){
    graphData.push({
      name: data.trends[i].name,
      volume: data.trends[i].volume
    })
  }

  console.log(graphData);


  // I want to create two arrays:
	// 1. It will contain all the trending topics
	// 2. It will contain the volume of the trending topics

  let topics = graphData.map(object => {
    return object.name;
  });

  let tweets = [
    1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000,
    11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 19000, 20000, 21000, 22000, 23000, 24000, 25000
  ];

  // Chart JS
const myChart = document.getElementById('myChart');
 
  new Chart(myChart, {
    type: 'bar',
    data: {
      labels: topics, // replaced with the array of topics
      datasets: [{
        label: '# of Tweets',
        data: tweets, // replaced with array of volumes
        borderWidth: 2,
        backgroundColor: [

                        'rgba(255, 99, 132, 0.2)',

                        'rgba(255, 159, 64, 0.2)',

                        'rgba(255, 205, 86, 0.2)',

                        'rgba(75, 192, 192, 0.2)',

                        'rgba(54, 162, 235, 0.2)',

                        'rgba(153, 102, 255, 0.2)',

                        'rgba(201, 203, 207, 0.2)'

                    ],

                    borderColor: [

                        'rgb(255, 99, 132)',

                        'rgb(255, 159, 64)',

                        'rgb(255, 205, 86)',

                        'rgb(75, 192, 192)',

                        'rgb(54, 162, 235)',

                        'rgb(153, 102, 255)',

                        'rgb(201, 203, 207)'

                    ],

                    hoverBackgroundColor: [

                        'rgb(255, 99, 132)',

                        'rgb(255, 159, 64)',

                        'rgb(255, 205, 86)',

                        'rgb(75, 192, 192)',

                        'rgb(54, 162, 235)',

                        'rgb(153, 102, 255)',

                        'rgb(201, 203, 207)']

      }]
    },
    options: {
      indexAxis: 'y', // remove this line if you want the opposite
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });



})


