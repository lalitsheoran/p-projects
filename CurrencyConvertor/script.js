function getData() {
    var cAmount = Number(document.getElementById("amount").value)
    var cFrom = document.getElementById("fromC").value
    var cTo = document.getElementById("toC").value
    if (cAmount == "") {
        cAmount = 1
        document.getElementById("amount").value = 1
        alert("Not a valid amount ,resetting amount to 1")
    } else if (cAmount < 1) {
        document.getElementById("amount").value = Math.abs(cAmount)
        alert("Negative amount detected, converting to positive")
    }

    var request = $.ajax({
        url: "http://apilayer.net/api/live?access_key=a481f2cb278c479f52308f0e6b58cde7&currencies=" + cFrom + "," + cTo + "&source=USD&format=1"
    })
    request.done(function (data) {
        console.log(data)
        var dataIn = data
        time = dataIn["timestamp"]
        dataFrom = dataIn["quotes"]["USD" + cFrom]
        dataTo = dataIn["quotes"]["USD" + cTo]
        result = (dataTo / dataFrom) * cAmount
        result = Math.abs(result.toFixed(3))
        console.log(result)
        outputHead.textContent = Math.abs(cAmount) + " " + cFrom + " ="
        outputInfo.textContent = result
        outputPost.textContent = cTo
        outputFT.textContent = "1 " + cFrom + " = " + Math.abs(dataTo / dataFrom).toFixed(5) + " " + cTo
        outputTF.textContent = "1 " + cTo + " = " + Math.abs(dataFrom / dataTo).toFixed(5) + " " + cFrom
        updatedAt.textContent = "Updated on " + Date(time)


    })
    request.fail(function () {
        console.log(request.status)
        alert("An error occured, " + request.status)
    })
}

cGo.addEventListener("click", getData)