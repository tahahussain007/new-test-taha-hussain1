// Write all your Javascript here!
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function ur(){
	$.ajax({
	url: "https://techkaro-test.herokuapp.com/api/v1/getdata?lang=ur",
	success: function(data){
		let d = new Date(data.date * 1000);		
		document.querySelector(".back-img").style["background-image"] = `url(${data.imageURL})`;
		document.querySelector("#date").innerHTML = d;
		document.querySelector("#left-text > p").innerHTML = data.info.description;
		document.querySelector("#left-text h3").innerHTML = data.info.heading;
		document.querySelector("#right-text  h3").innerHTML = data.sale.heading;
		document.querySelector("#right-text > p").innerHTML = data.sale.description;


		
	},

	error: function(error){
		console.log(error);
	}

})
}
function zh(){
	$.ajax({
	url: "https://techkaro-test.herokuapp.com/api/v1/getdata?lang=zh",
	success: function(data){
		let d = new Date(data.date * 1000);		
		document.querySelector(".back-img").style["background-image"] = `url(${data.imageURL})`;
		document.querySelector("#date").innerHTML = d;
		document.querySelector("#left-text > p").innerHTML = data.info.description;
		document.querySelector("#left-text h3").innerHTML = data.info.heading;
		document.querySelector("#right-text  h3").innerHTML = data.sale.heading;
		document.querySelector("#right-text > p").innerHTML = data.sale.description;


		
	},

	error: function(error){
		console.log(error);
	}

})
}

function en(){
	$.ajax({
	url: "https://techkaro-test.herokuapp.com/api/v1/getdata?lang=en",
	success: function(data){
		let d = new Date(data.date * 1000);		
		document.querySelector(".back-img").style["background-image"] = `url(${data.imageURL})`;
		document.querySelector("#date").innerHTML = d;
		document.querySelector("#left-text > p").innerHTML = data.info.description;
		document.querySelector("#left-text h3").innerHTML = data.info.heading;
		document.querySelector("#right-text  h3").innerHTML = data.sale.heading;
		document.querySelector("#right-text > p").innerHTML = data.sale.description;


		
	},

	error: function(error){
		console.log(error);
	}

})
}
en();