function initializeDatabase(){
	// Initialize Firebase
	var config = {
		apiKey: "AIzaSyC75FgsDa09hZYW7qqOjByuGyHTvo5J_Fc",
		authDomain: "respeto-df6a3.firebaseapp.com",
		databaseURL: "https://respeto-df6a3.firebaseio.com",
		projectId: "respeto-df6a3",
		storageBucket: "respeto-df6a3.appspot.com",
		messagingSenderId: "653371239100"
	};
	firebase.initializeApp(config);
}

/*
fetchReports es la funcion que obtiene las Denuncias de la base de datos

*/
function fetchReports(x){
	var database = firebase.database();


	// Get a database reference to our posts
	var db = firebase.database();
	var ref = db.ref("denuncias");

	ref.on("child_added", function(snapshot, prevChildKey,x) {
	var newPost = snapshot.val();
		console.log("Author: " + newPost.alias);
            console.log("Time: " + newPost.fechaHoraString);
		console.log("Description: " + newPost.descripcion);
	});

}
