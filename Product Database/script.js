window.onload = function () {
    $("#btndivUpdate").hide();
    $("#parentRow").hide();
}
var parent = document.getElementById("parentRow")
snum = 0

function insertData(inputName, inputUrl, inputPrice) {
    var tRow = document.createElement("tr")
    tRow.setAttribute("class", "dRow border")
    parent.appendChild(tRow)

    var tCol1 = document.createElement("td")
    tCol1.textContent = snum
    tRow.appendChild(tCol1)

    var tCol2 = document.createElement("td")
    tCol2.textContent = inputName
    tRow.appendChild(tCol2)

    var tCol3 = document.createElement("img")
    tCol3.src = inputUrl
    tCol3.style.height = "60px"
    tCol3.style.width = "70px"
    tCol3.style.marginTop = "2px"
    tRow.appendChild(tCol3)

    var tCol4 = document.createElement("td")
    tCol4.textContent = inputPrice
    tRow.appendChild(tCol4)

    var tCol5 = document.createElement("button")
    tCol5.textContent = "Delete"
    tCol5.setAttribute("class", "btn bg-danger btn-sm")
    tRow.appendChild(tCol5)
    $(tCol5).click(function () {
        $(this).parent().remove()
    })

    var tCol6 = document.createElement("button")
    tCol6.textContent = "Edit"
    tCol6.style.marginLeft = "6px"
    tCol6.setAttribute("class", "btn bg-warning btn-sm")
    tRow.appendChild(tCol6)
    $(tCol6).click(function () {
        $("#btndiv").hide()
        $("#btndivUpdate").show()
        var x = $(this).parent()[0]
        document.getElementById("inputName").value = x.querySelectorAll('td')[1].textContent
        document.getElementById("inputPrice").value = x.querySelectorAll('td')[2].textContent
        document.getElementById("inputUrl").value = x.querySelectorAll('img')[0].src
        $("#btndivUpdate").click(function () {
            x.querySelectorAll('td')[1].textContent = document.getElementById("inputName").value
            x.querySelectorAll('td')[2].textContent = document.getElementById("inputPrice").value
            x.querySelectorAll('img')[0].src = document.getElementById("inputUrl").value
            $("#btndiv").show()
            $("#btndivUpdate").hide()

        })

    })
}

function getData() {
    inputName = document.getElementById("inputName").value
    inputUrl = document.getElementById("inputUrl").value
    inputUrl = inputUrl.split(" ").join("+")
    inputPrice = document.getElementById("inputPrice").value
    $("#popuText").hide();
    $("#parentRow").show();
    snum++
    gotData=""
    var request = $.ajax({
        "url": "https://api.unsplash.com/search/photos?page=1&per_page=1&query="+inputUrl,
        "method": "GET",
        "headers": {
            "Authorization": "Client-ID 0f39497cfbeec70c075ae99dff44cb8732f967ee28c21ef05ec4a76808fb5d6b" ,

        }
    })
    request.done(function (data) {
        
        
        if (data["results"][0]!==undefined){
            console.log(data["results"][0]["urls"]["thumb"])
            inputUrl = data["results"][0]["urls"]["thumb"]
        }
        else{console.log("Image not found")}
        
        insertData(inputName, inputUrl, inputPrice)
        
    })
    request.fail(function () {
        console.log
        console.log("Request Failed")
    })
}


document.getElementById("btndiv").addEventListener("click",getData)