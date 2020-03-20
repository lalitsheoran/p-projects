 obj = {}

 function createCard(image, name, status, species, gender, origin, location) {
     var col3 = document.createElement("div")
     col3.setAttribute("class", "col-lg-3 col-md-4 col-sm-6")
     row3.appendChild(col3)
     var card = document.createElement("div")
     card.setAttribute("class", "card mt-3 mb-3 gradient-primary")
     col3.appendChild(card)
     var img = document.createElement("img")
     img.setAttribute("class", "card-img-top")
     img.setAttribute("src", image)
     card.appendChild(img)
     var cardbody = document.createElement("div")
     cardbody.setAttribute("class", "card-body")
     card.appendChild(cardbody)
     var h5 = document.createElement("h5")
     h5.textContent = name
     h5.setAttribute("class", "card-title text-center card-header bg-warning mb-2 text-truncate")
     cardbody.appendChild(h5)
     var row1 = document.createElement("div")
     row1.setAttribute("class", "row")
     cardbody.appendChild(row1)
     var divX = document.createElement("div")
     divX.setAttribute("class", "col-5 text-left")
     row1.appendChild(divX)
     var p1 = document.createElement("p")
     p1.textContent = "STATUS"
     p1.setAttribute("class", "card-text")
     divX.appendChild(p1)
     var p2 = document.createElement("p")
     p2.textContent = "SPECIES"
     p2.setAttribute("class", "card-text")
     divX.appendChild(p2)
     var p3 = document.createElement("p")
     p3.textContent = "GENDER"
     p3.setAttribute("class", "card-text")
     divX.appendChild(p3)
     var p4 = document.createElement("p")
     p4.textContent = "ORIGIN"
     p4.setAttribute("class", "card-text")
     divX.appendChild(p4)
     var p5 = document.createElement("p")
     p5.textContent = "LOCATION"
     p5.setAttribute("class", "card-text")
     divX.appendChild(p5)
     var divY = document.createElement("div")
     divY.setAttribute("class", "col-7 text-right")
     row1.appendChild(divY)
     var q1 = document.createElement("p")
     q1.textContent = status
     q1.setAttribute("class", "card-text text-success")
     divY.appendChild(q1)
     var q2 = document.createElement("p")
     q2.textContent = species
     q2.setAttribute("class", "card-text text-success")
     divY.appendChild(q2)
     var q3 = document.createElement("p")
     q3.textContent = gender
     q3.setAttribute("class", "card-text text-success")
     divY.appendChild(q3)
     var q4 = document.createElement("p")
     q4.textContent = origin
     q4.setAttribute("class", "card-text text-success text-truncate")
     divY.appendChild(q4)
     var q5 = document.createElement("p")
     q5.textContent = location
     q5.setAttribute("class", "card-text text-success text-truncate")
     divY.appendChild(q5)
 }



 function getData() {

     row3.textContent = ""
     for (i = 0; i < obj["results"].length; i++) {
         createCard(obj["results"][i]["image"], obj["results"][i]["name"], obj["results"][i]["status"], obj["results"][i]["species"], obj["results"][i]["gender"], obj["results"][i]["origin"]["name"], obj["results"][i]["location"]["name"])

     }
 }


 function getChar() {
     var userInput = document.getElementById("xinput").value
     userInput = userInput.split(" ").join("+")
     var xhr = new XMLHttpRequest()
     xhr.open("GET", "https://rickandmortyapi.com/api/character/?name=" + userInput)
     xhr.send()
     xhr.onload = function () {
         if (xhr.status == 200) {
             console.log("Got it")
             obj = JSON.parse(xhr.response)
             getData()
             console.log(obj)

         } else {
             console.log("Error code is " + xhr.status)
             row3.textContent = ""
             var errorH = document.createElement("p")
             errorH.textContent = "No results found"
             errorH.setAttribute("class", "col display-1 text-center mt-5")
             row3.appendChild(errorH)
         }
     }


 }

 xbutton.addEventListener("click", getChar)
 document.addEventListener("keypress", function (e) {
     if (e.key === 'Enter') {

         getChar()
     }
 })