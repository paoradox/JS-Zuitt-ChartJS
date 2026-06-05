// Object/Dictionary
let myPosts = {
	name: "Lee Sung Kyung",
	queryURL: "search?q=%22Lee+Sung+Kyung%22",
	volume: 31799,
	followers: 38955734
};


console.log(myPosts);

//Dot notation
console.log(myPosts.name);

// Bracket Notation
console.log(myPosts["name"]);

// Array with Dictionary
let graphData = [
	{
		name: "#PorDeeReunion",
		queryURL: "search?q=%23PorDeeReunion",
		volume: 67000
	},
	{
		name: "#BGY03rdAnniversary",
		queryURL: "search?q=%23BGY03rdAnniversary",
		volume: 27500
	}
];

console.log(graphData);
console.log(graphData[0]);
console.log(graphData[0].name);
console.log(graphData[1].volume);

// I want to create two arrays:
	// 1. It will contain all the trending topics
	// 2. It will contain the volume of the trending topics

let names = graphData.map(object => { // map() method creates a new array populated with the results of calling a provided function on every element in the calling array. In this case we want to get all the names of the trending topics in the array with dictionary and store it in a new array called names.
	return object.name;
});


let volumes = graphData.map(object => { // same as above but instead of getting the names we want to get the volume of the trending topics and store it in a new array called volumes.
	return object.volume;
});

console.log(names);
console.log(volumes);

const sample = document.getElementById('sampleChart');

  new Chart(sample, {
    type: 'pie',
    data: {
      labels: names,
      datasets: [{
        label: '# of Votes',
        data: volumes,
        borderWidth: 2
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });