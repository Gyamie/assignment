let hiddenBox = document.querySelectorAll(".hidden-box");
let empty_container1 = document.getElementById("empty_container1");
let empty_container2 = document.getElementById("empty_container2");
let empty_container3 = document.getElementById("empty_container3");
let empty_container4 = document.getElementById("empty_container4");
let empty_container5 = document.getElementById("empty_container5");
let hidden1Value = document.getElementById("hidden1_value");
let hidden2Value = document.getElementById("hidden2_value");
let hidden3Value = document.getElementById("hidden3_value");
let hidden4Value = document.getElementById("hidden4_value");
let hidden5Value = document.getElementById("hidden5_value");
let resultContainer = document.querySelector(".result_container");


hidden1Value.innerHTML = Math.floor(Math.random() * 10)
hidden2Value.innerHTML = Math.floor(Math.random() * 10)
hidden3Value.innerHTML = Math.floor(Math.random() * 10)
hidden4Value.innerHTML = Math.floor(Math.random() * 10)
hidden5Value.innerHTML = Math.floor(Math.random() * 10)

// second box is hidden
let hideHiddenBox = () => {
    for (let i = 0; i < 5; i++) {
        let forAllHidden = hiddenBox[i].style.display = "none"

    }
}
hideHiddenBox();

//second box is displayed
let viewHiddenBox = () => {
    for (let i = 0; i < 5; i++) {
        let forAllHidden = hiddenBox[i].style.display = "block"

    }
}

let Check_Answer = (Ans) => {
    let result
    let ans
    let verify_Ans = Ans % 2
    if (verify_Ans == 0) {
        result = `You win, ${Ans} is  an Even Number`
    } else {
        result = `You lose, ${Ans} is not an Even Number`

    }

    resultContainer.innerHTML = result
}



empty_container1.addEventListener('click', (e) => {
    try {
        Check_Answer(e.path[0].childNodes[1].innerText)
        viewHiddenBox()
    } catch (e) {
        resultContainer.innerHTML = "so sorry you can't click twice"

    }

})


empty_container2.addEventListener('click', (e) => {
    try {
        Check_Answer(e.path[0].childNodes[1].innerText)
        viewHiddenBox()
    } catch (e) {
        resultContainer.innerHTML = "so sorry you can't click twice"

    }

})



empty_container3.addEventListener('click', (e) => {
    try {
        Check_Answer(e.path[0].childNodes[1].innerText)
        viewHiddenBox()
    } catch (e) {
        resultContainer.innerHTML = "so sorry you can't click twice"

    }

})



empty_container4.addEventListener('click', (e) => {
    try {
        Check_Answer(e.path[0].childNodes[1].innerText)
        viewHiddenBox()
    } catch (e) {
        resultContainer.innerHTML = "so sorry you can't click twice"

    }

})



empty_container5.addEventListener('click', (e) => {
    try {
        Check_Answer(e.path[0].childNodes[1].innerText)
        viewHiddenBox()
    } catch (e) {
        resultContainer.innerHTML = "so sorry you can't click twice"

    }

})