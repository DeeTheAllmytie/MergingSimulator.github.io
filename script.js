var currentCash = 1
var earning = 0
var cash = document.getElementById("cash")
var runTime = 0
function buyCoin() {
    if (currentCash > 0.99) {
        currentCash = currentCash - 1
        cash.innerHTML = "Cash: $" + currentCash.toFixed(2)
        giveItem("coin.png",0.1)
    }
}
function buyStick() {
    if (currentCash > 9.99) {
        currentCash = currentCash - 10
        cash.innerHTML = "Cash: $" + currentCash.toFixed(2)
        giveItem("stick.png",1)
    }
}
function buyCopper() {
    if (currentCash > 99.99) {
        currentCash = currentCash - 100
        cash.innerHTML = "Cash: $" + currentCash.toFixed(2)
        giveItem("copper.png",10)
    }
}
function buyIron() {
    if (currentCash > 499.99) {
        currentCash = currentCash - 500
        cash.innerHTML = "Cash: $" + currentCash.toFixed(2)
        giveItem("iron.png",75)
    }
}
function buyGold() {
    if (currentCash > 999.99) {
        currentCash = currentCash - 1000
        cash.innerHTML = "Cash: $" + currentCash.toFixed(2)
        giveItem("gold.png",150)
    }
}
function buyDiamond() {
    if (currentCash > 24999.99) {
        currentCash = currentCash - 25000
        cash.innerHTML = "Cash: $" + currentCash.toFixed(2)
        giveItem("diamond.png",1000)
    }
}
function buyRuby() {
    if (currentCash > 49999.99) {
        currentCash = currentCash - 50000
        cash.innerHTML = "Cash: $" + currentCash.toFixed(2)
        giveItem("ruby.png",2000)
    }
}
function buyOpal() {
    if (currentCash > 149999.99) {
        currentCash = currentCash - 150000
        cash.innerHTML = "Cash: $" + currentCash.toFixed(2)
        giveItem("opal.png",3500)
    }
}
function buyMicrosoft() {
    if (currentCash > 499999.99) {
        currentCash = currentCash - 500000
        cash.innerHTML = "Cash: $" + currentCash.toFixed(2)
        giveItem("microsoft.png",10000)
    }
}
function buyGoogle() {
    if (currentCash > 499999.99) {
        currentCash = currentCash - 500000
        cash.innerHTML = "Cash: $" + currentCash.toFixed(2)
        giveItem("google.png",10000)
    }
}
function buyTesla() {
    if (currentCash > 999999.99) {
        currentCash = currentCash - 1000000
        cash.innerHTML = "Cash: $" + currentCash.toFixed(2)
        giveItem("tesla.png",20000)
    }
}
function buyRoblox() {
    if (currentCash > 1999999.99) {
        currentCash = currentCash - 2000000
        cash.innerHTML = "Cash: $" + currentCash.toFixed(2)
        giveItem("roblox.png",30000)
    }
}
function buySpacex() {
    if (currentCash > 9999999.99) {
        currentCash = currentCash - 10000000
        cash.innerHTML = "Cash: $" + currentCash.toFixed(2)
        giveItem("spacex.jpg",50000)
    }
}
function buyNasa() {
    if (currentCash > 99999999.99) {
        currentCash = currentCash - 100000000
        cash.innerHTML = "Cash: $" + currentCash.toFixed(2)
        giveItem("nasa.png",100000)
    }
}
function buyYoutube() {
    if (currentCash > 999999999.99) {
        currentCash = currentCash - 1000000000
        cash.innerHTML = "Cash: $" + currentCash.toFixed(2)
        giveItem("youtube.png",250000)
    }
}
function giveItem(item,earn) {
    mydiv = document.createElement("DIV")
    mydiv.id="mydiv"+String(runTime)
    document.body.append(mydiv)
    mydivheader = document.createElement("DIV")
    mydivheader.id = "mydivheader"
    mydiv.append(mydivheader)
    img = document.createElement("IMG")
    img.src="Imgs/"+item
    img.style.width = "50px"
    mydivheader.append(img)
    dragElement(document.getElementById("mydiv"+String(runTime)));
    earning += earn
    runTime+=1
}

function start() {
    currentCash += earning
    cash.innerHTML = "Cash: $" + currentCash.toFixed(2)
    setTimeout(start, 1000)
}
start()
