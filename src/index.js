import style from './scss/main.scss';
import Chart from 'chart.js';

function showYear() {
    if (document.getElementById('copy-year')) {
        const elem = document.getElementById('copy-year');
        const dateTime = new Date();
        elem.innerHTML = dateTime.getFullYear();
    }
}
showYear();

const ctx = document.getElementById('myChart');
let myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['Jan', 'Feb', 'Mar', 'April', 'May'],
		datasets: [{
			label: "Domain owner",
	        data: [0.86,0.14,0.6,0.56,-0.7],
	        borderColor: "#3e95cd",
	        fill: false
	      },
		  {	  label: "User invited",
			  data: [0.86,0.6,0.4,0.65,0.7],
			  borderColor: "orange",
			  fill: false
			}]
	},
	options: {
		legend: {
			display: false
		}
	}
});

const counter = document.getElementById('progress-radial').getContext('2d');
let no = 0; //Starting Point
const pointToFill = 4.72;
const cw = counter.canvas.width;
const ch = counter.canvas.height;
let diff;

function fillCounter() {
	diff = ((no/100) * Math.PI*2*10);

	counter.clearRect(0, 0, cw, ch);

	counter.lineWidth = 10;

	counter.fillStyle = 'black';

	counter.strokeStyle = '#27A9F8';

	counter.textAlign = 'center';

	counter.font = '24px Arial';

	counter.fillText(no+'%', 100, 100);

	counter.beginPath();

	counter.arc(100, 100, 70, pointToFill, diff/10+pointToFill);

	counter.stroke();

	if (no >= 75) {
		clearTimeout(draw)
	}
	no++;
}

var draw = setInterval(fillCounter, 10);
