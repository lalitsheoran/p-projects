function emailverifier(inputmail) {
    len = inputmail.length
    result1 = "False"
    count = 0
    for (i = 0; i < len; i++) {
        if (inputmail[i] == "@") {
            count++
        }
    }
    if (count == 0) {
        console.log(inputmail, ":", result1)
        return
    }

    for (i = 0; i < len; i++) {
        if (inputmail[i] == " " || inputmail[i] == "~" || inputmail[i] == "!" || inputmail[i] == "#" || inputmail[i] == "$" || inputmail[i] == "%" || inputmail[i] == "^" || inputmail[i] == "&" || inputmail[i] == "*" || inputmail[i] == "(" || inputmail[i] == ")" || inputmail[i] == "+" || inputmail[i] == "=" || inputmail[i] == "<" || inputmail[i] == ">" || inputmail[i] == "," || inputmail[i] == "/" || inputmail[i] == "?" || inputmail[i] == ":" || inputmail[i] == ";" || inputmail[i] == "'" || inputmail[i] == '"' || inputmail[i] == "{" || inputmail[i] == "}" || inputmail[i] == "[" || inputmail[i] == "]" || inputmail[i] == "|" || inputmail[i] == "\\") {
            console.log(inputmail, ":", result1)
            return
        }
        if (inputmail[i] == "@" && i != 0 && i < len - 4 && inputmail.indexOf("@", (inputmail.indexOf("@")) + 1) == -1) {
            result1 = "True"
        }
    }
    inputverified1 = inputmail.split("@")
    firstpart = inputverified1[0]
    lastpart = inputverified1[1]
    lenlastpart = lastpart.length
    lenfirstpart = firstpart.length
    count2 = 0
    for (i = 0; i < lenlastpart; i++) {
        if (lastpart[i] == ".") {
            count2++
        }
    }
    if (count2 == 0) {
        result1 = "False"
        console.log(inputmail, ":", result1)
        return
    }
    for (i = 0; i < lenfirstpart; i++) {
        if (firstpart[i] == "." && i == 0 || firstpart[i] == "." && i == (lenfirstpart - 1) || firstpart[i] == "." && firstpart[i + 1] == ".") {
            result1 = "False"
            console.log(inputmail, ":", result1)
            return
        }
        if (firstpart[i] == "-" && i == 0 || firstpart[i] == "." && i == lenfirstpart - 1 || firstpart.indexOf("-", (firstpart.indexOf("-")) + 1) !== -1) {
            result1 = "False"
            console.log(inputmail, ":", result1)
            return
        }
        if (firstpart[i] == "_" && i == 0 || firstpart[i] == "_" && i == lenfirstpart - 1 || firstpart.indexOf("_", (firstpart.indexOf("_")) + 1) !== -1) {
            result1 = "False"
            console.log(inputmail, ":", result1)
            return
        }
    }
    for (i = 0; i < lenlastpart; i++) {
        if (lastpart[i] == "." && i == 0 || lastpart[i] == "." && i >= (lenlastpart - 2) || lastpart[i] == "." && lastpart[i + 1] == ".") {
            result1 = "False"
            console.log(inputmail, ":", result1)
            return
        }
        if (lastpart[i] == "-" && i == 0 || lastpart[i] == "." && i >= (lenlastpart - 2) || lastpart.indexOf("-", (lastpart.indexOf("-")) + 1) !== -1) {
            result1 = "False"
            console.log(inputmail, ":", result1)
            return
        }
        if (lastpart[i] == "_" && i == 0 || lastpart[i] == "_" && i >= (lenlastpart - 2) || lastpart.indexOf("_", (lastpart.indexOf("_")) + 1) !== -1) {
            result1 = "False"
            console.log(inputmail, ":", result1)
            return
        }
    }
    return result1
}



window.onload = function () {
    $("#inputArea > *").not("#labelName,#inputName").hide();
    $("#infoView").hide();
    //    $("#infoView").removeClass("bg-dark");
}

$("#inputName").keyup(function () {
    var value = $(this).val();
    $("#nameWarn").show()
    $("#nameWarn").css("color", "red")

    if (value.length < 4) {
        $("#nameWarn").text("Name is too short")
        $("#labelEmail,#inputEmail").hide()
        $("#emailWarn").text("")
    }
    if (value.length > 11) {
        $("#nameWarn").text("Name is too big")
        $("#labelEmail,#inputEmail").hide()
    }
    if (value.length >= 4 && value.length <= 10) {
        $("#nameWarn").text("");
        $("#labelEmail,#inputEmail").show()
    }
})

$("#inputEmail").keyup(function () {
    var value = $(this).val();
    $("#emailWarn").show()
    $("#emailWarn").css("color", "red")
    if (emailverifier(value) == "True") {
        $("#emailWarn").text("")
        $("#labelMobile,#inputMobile").show()
    } else {
        $("#emailWarn").text("Invalid Email")
        $("#labelMobile,#inputMobile").hide()
    }


})

$("#inputMobile").keyup(function () {
    var value = $(this).val();
    $("#mobileWarn").show();
    $("#mobileWarn").css("color", "red")
    if (value.length != 10) {
        $("#mobileWarn").text("Invalid Mobile number");
        $("#btndiv").hide();
    } else {
        $("#btndiv").show();
        $("#mobileWarn").text("");
    }
})

function enterData() {
    var nameVal = $("#inputName").val()
    var emailVal = $("#inputEmail").val()
    var mobileVal = $("#inputMobile").val()
    console.log(nameVal.emailVal, mobileVal)
    $("#masaiDiv").text(nameVal)
    $("#emailinputDiv").text(emailVal)
    $("#mnumberDiv").text(mobileVal)
    $("#inputArea").hide();
    $("#infoView").show()
}