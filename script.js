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
  xhttp.open("GET", "https://corsanywherehost.herokuapp.com/api.scratch.mit.edu/users/" + encodeURIComponent(usr), true);
  xhttp.send();
  var all = false;
	var a = []
function fetch1(i = 0){
		 fetch("https://corsanywherehost.herokuapp.com/api.scratch.mit.edu/users/" + encodeURIComponent(usr) + "/projects?offset=" + i).then(e=>{
	 if (e.status !== 200){
		 // err handle
	 }
	 return e.json()
 }).then(e=>{
	 all++
	 if (e.length === 0) {all=true;return};
	 a = e
	 fetch1(i + 40)
 })
}
fetch1()
var b = []
var all2 = false
function fetch2(i = 0){
		 fetch("https://corsanywherehost.herokuapp.com/api.scratch.mit.edu/users/" + encodeURIComponent(usr) + "/favorites?offset=" + i).then(e=>{
	 if (e.status !== 200){
		 // err handle
	 }
	 return e.json()
 }).then(e=>{
	 all2++
	 if (e.length === 0) {all2=true;return};
	 b = e
	 fetch2(i + 40)
 })
}
fetch2()
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
			 		 document.getElementById('project-3').innerHTML = '<a href = "' + "https://scratch.mit.edu/projects/" + String(obj.id) + '"><img width="300px" src=' + obj.image + ' id="imageBox" style="border-radius: 20px; margin: 20px;"/><br><h3>' + String(obj.title) + '</h3>';
		 } else if (idxs === 1){
			 		 document.getElementById('project-2').innerHTML = '<a href = "' + "https://scratch.mit.edu/projects/" + String(obj.id) + '"><img width="300px" src=' + obj.image + ' id="imageBox" style="border-radius: 20px; margin: 20px;"/><br><h3>' + String(obj.title) + '</h3>';
		 } else if (idxs === 0){
			 		 document.getElementById('project-1').innerHTML = '<a href = "' + "https://scratch.mit.edu/projects/" + String(obj.id) + '"><img width="300px" src=' + obj.image + ' id="imageBox" style="border-radius: 20px; margin: 20px;"/><br><h3>' + String(obj.title) + '</h3>';
		 }
		idxs++
	 })
