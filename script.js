function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
var usr = getUrlVars()["x"];

/* Get the profile picture */
var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var txt = this.responseText;
      var obj = JSON.parse(txt);
      var profilepic = JSON.stringify(obj.profile.images['90x90'])
      console.log("Profile Picture URL: " + JSON.stringify(obj.profile.images["90x90"]));
      document.getElementById('pfp').innerHTML = '<img height="100" width="100" src=' + profilepic + ' id="imageBox" style="border-radius: 20%;"/>';
      document.getElementById('username').innerHTML = obj.username;
     }
  };
  xhttp.open("GET", "https://cors-anywhere.herokuapp.com/api.scratch.mit.edu/users/" + encodeURIComponent(usr), true);
  xhttp.send();
  var all = false;
	var a = []
  var aa = []
function fetch1(i = 0){
		 fetch("https://cors-anywhere.herokuapp.com/api.scratch.mit.edu/users/" + encodeURIComponent(usr) + "/projects?offset=" + i).then(e=>{
	 if (e.status !== 200){
		 // err handle
	 }
	 return e.json()
 }).then(e=>{
	 all++
	 if (e.length === 0) {all=true;return};
	 a = e
    aa = [...aa,...e]
	 fetch1(i + 40)
 })
}
fetch1()
// b = faves
var c = []
var all3 = false
var e = setInterval(()=>{
	if (all === true){
		clearInterval(e)
			 	 var idxs = 0
a.reverse().forEach((obj,idx)=>{
		 if (idxs > 5){
			 return
		 }
		 obj.image // image url
		 obj.title // title of project
		 "https://scratch.mit.edu/projects/" + String(obj.id) // url
		 if (!obj.public && obj.visibility !== "hidden") return
		 console.log(idxs)
		 /*if (idxs === 5) {
			 		document.getElementById('project-6').innerHTML = '<a href = "' + "https://scratch.mit.edu/projects/" + String(obj.id) + '"><img width="300px" src=' + obj.image + ' id="imageBox" style="border-radius: 20px; margin: 20px;"/>';
		 } else if (idxs === 4){
			 		 document.getElementById('project-5').innerHTML = '<a href = "' + "https://scratch.mit.edu/projects/" + String(obj.id) + '"><img width="300px" src=' + obj.image + ' id="imageBox" style="border-radius: 20px; margin: 20px;"/>';
	 	} if (idxs === 3){
			 		 document.getElementById('project-4').innerHTML = '<a href = "' + "https://scratch.mit.edu/projects/" + String(obj.id) + '"><img width="300px" src=' + obj.image + ' id="imageBox" style="border-radius: 20px; margin: 20px;"/>';
	 	} */if (idxs === 2){
			 		 document.getElementById('project-3').innerHTML = '<a href = "' + "https://scratch.mit.edu/projects/" + String(obj.id) + '"><img width="300px" src=' + obj.image + ' class="imageBox" style="border-radius: 20px; margin: 20px;"/><br><h3>' + String(obj.title) + '</h3>';
		 } else if (idxs === 1){
			 		 document.getElementById('project-2').innerHTML = '<a href = "' + "https://scratch.mit.edu/projects/" + String(obj.id) + '"><img width="300px" src=' + obj.image + ' class="imageBox" style="border-radius: 20px; margin: 20px;"/><br><h3>' + String(obj.title) + '</h3>';
		 } else if (idxs === 0){
			 		 document.getElementById('project-1').innerHTML = '<a href = "' + "https://scratch.mit.edu/projects/" + String(obj.id) + '"><img width="300px" src=' + obj.image + ' class="imageBox" style="border-radius: 20px; margin: 20px;"/><br><h3>' + String(obj.title) + '</h3>';
		 }
		idxs++
	 })
	 /* shuffle(shuffle(shuffle(a.reverse()))).forEach((obj,idx)=>{
		 if (idxs > 2){
			 return
		 }
		 obj.image // image url
		 obj.title // title of project
		 "https://scratch.mit.edu/projects/" + String(obj.id) // url
		 if (!obj.public && obj.visibility !== "hidden") return
		 console.log(idxs)
		 if (idxs === 2){
			 		 document.getElementById('project-1').innerHTML = '<a href = "' + "https://scratch.mit.edu/projects/" + String(obj.id) + '"><img height="250px" width="auto" src=' + obj.image + ' id="imageBox" style="border-radius: 20px; margin: 20px;"/>';
		 } else if (idxs === 1){
			 		 document.getElementById('project-2').innerHTML = '<a href = "' + "https://scratch.mit.edu/projects/" + String(obj.id) + '"><img height="250px" width="auto" src=' + obj.image + ' id="imageBox" style="border-radius: 20px; margin: 20px;"/>';
		 } else if (idxs === 0){
			 		 document.getElementById('project-3').innerHTML = '<a href = "' + "https://scratch.mit.edu/projects/" + String(obj.id) + '"><img height="250px" width="auto" src=' + obj.image + ' id="imageBox" style="border-radius: 20px; margin: 20px;"/>';
		 }
		idxs++
	 })*/
    // yup :) last loved and last faved on the works
	}
},100)
 function swap(){
	 if(document.body.classList.contains('dark')){document.body.classList.remove('dark');localStorage.setItem("dark",false)} else {document.body.classList.add('dark');localStorage.setItem("dark",true)}
 }
 if (localStorage.getItem("dark") ==="true"){
	 document.body.classList.add("dark")
 }
/* function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}*/
fetch("https://cors-anywhere.herokuapp.com/scratch.mit.edu/users/" + encodeURIComponent(usr)).then(e=>{
     if (e.status !== 200){
         // err handle
     }
     return e.text()
 }).then(e=>{
    var parser = new DOMParser()
    var doc = parser.parseFromString(e,"text/html")
    var e = doc.getElementById("featured-project").href.split("/")
    var id = e[e.length - 2]
    document.getElementById('featured-project').innerHTML = '<div class = "lovfeat">Featured</div><a href = "https://scratch.mit.edu/projects/' + id + '/"><img src = "https://cdn2.scratch.mit.edu/get_image/project/' + id + '_480x360.png' + '" width="45%" style="border-radius: 20px; margin: 20px"></a><br>';
    /*("https://corsanywherehost.herokuapp.com/api.scratch.mit.edu/users/" + encodeURIComponent(usr) + "/projects/" + id).then(e=>{
       if (e.status !== 200){
           // err handle
       }
       return e.json()
    }).then(dat=>{
      console.log(dat)
      document.getElementById('featured-project').innerHTML = '<img src = "' + dat.image + '" width="32%" style="border-radius: 20px; margin: 20px">';
      // document.getElementById('featured-project').innerHTML = JSON.stringify(e);
    })  */
})
fetch("https://cors-anywhere.herokuapp.com/scratch.mit.edu/users/" + encodeURIComponent(usr) + "/favorites").then(e=>{
     if (e.status !== 200){
         // err handle
     }
     return e.text()
 }).then(e=>{
    var parser = new DOMParser()
    var doc = parser.parseFromString(e,"text/html")
    var e = doc.querySelector(".project a").href.split("/")
    var id = e[e.length - 2]
    console.log(id)
    document.getElementById('last-loved').innerHTML = '<div class = "lovfeat">Last Loved</div><a href = "https://scratch.mit.edu/projects/' + id + '/"><img src = "https://cdn2.scratch.mit.edu/get_image/project/' + id + '_480x360.png' + '" width="45%" style="border-radius: 20px; margin: 20px"></a><br>';
    /*("https://corsanywherehost.herokuapp.com/api.scratch.mit.edu/users/" + encodeURIComponent(usr) + "/projects/" + id).then(e=>{
       if (e.status !== 200){
           // err handle
       }
       return e.json()
    }).then(dat=>{
      console.log(dat)
      document.getElementById('featured-project').innerHTML = '<img src = "' + dat.image + '" width="32%" style="border-radius: 20px; margin: 20px">';
      // document.getElementById('featured-project').innerHTML = JSON.stringify(e);
    })  */
})
