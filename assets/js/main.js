
rechnen = () => {
    let weight = Number(document.getElementById("weight").value)
    let height = Number(document.getElementById("height").value)
    let age = Number(document.getElementById("age").value)
    let checkRadio = document.getElementById("checkRadio")
    let displayKcal = document.getElementById("grundKcal")
    let displayKj = document.getElementById("grundKj")
    let totalKcal = document.getElementById("totalKcal")
    let totalKj = document.getElementById("totalKj")
    let grundKcal = 0
    let grundKj = 0

    activ = () => {
        let a = document.getElementById("activList").value
        switch (a) {
            case "0":
                totalKcal.innerHTML = Math.round(grundKcal * 0.95)
                totalKj.innerHTML = Math.round(grundKj * 0.95)
                break;
            case "1":
                totalKcal.innerHTML = Math.round(grundKcal * 1.2)
                totalKj.innerHTML = Math.round(grundKj * 1.2)
                break;
            case "2":
                totalKcal.innerHTML = Math.round(grundKcal * 1.5)
                totalKj.innerHTML = Math.round(grundKj * 1.5)
                break;
            case "3":
                totalKcal.innerHTML = Math.round(grundKcal * 1.7)
                totalKj.innerHTML = Math.round(grundKj * 1.7)
                break;
            case "4":
                totalKcal.innerHTML = Math.round(grundKcal * 1.9)
                totalKj.innerHTML = Math.round(grundKj * 1.9)
                break;
            case "5":
                totalKcal.innerHTML = Math.round(grundKcal * 2.2)
                totalKj.innerHTML = Math.round(grundKj * 2.2)
                break;
        }
    }

    kalRechnerMan = (weight, height, age) => {
        grundKcal = 664.7 + (13.7 * weight) + (5 * height) - (6.8 * age)
        grundKj = grundKcal * 4.184
        displayKcal.innerHTML = Math.round(grundKcal)
        displayKj.innerHTML = Math.round(grundKj)
        activ()
    }

    kalRechnerWoman = (weight, height, age) => {
        grundKcal = 655.1 + (9.6 * weight) + (1.8 * height) - (4.7 * age)
        grundKj = grundKcal * 4.184
        displayKcal.innerHTML = Math.round(grundKcal)
        displayKj.innerHTML = Math.round(grundKj)
        activ()
    }

    if (checkRadio.checked) {
        kalRechnerMan(weight, height, age)
        activ()
    } else {
        kalRechnerWoman(weight, height, age)
        activ()
    }

}