let body = document.querySelector("body");

const initializeTable = () => {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("main-div" , "container");

    let elementval = document.createElement("p");
    elementval.classList.add("element-val");
    let index; 

    for (index = 1; index <= 50 ; index++) {
        let elements = document.createElement("p");
        elements.classList.add("elements");


        if (index < 10) {
            elements.innerText = `element 0${index}`;
        }
        else{
            elements.innerText = `element ${index}`;
        }

        mainDiv.append(elements);
        body.append(elementval);
        body.append(mainDiv);
    }

    return [mainDiv , index , elementval]
};

let [container , index , pera] = initializeTable();
console.log(pera);

const printDataOfTable = (evt) => {
    if (evt.target.classList.contains("elements")) {
        evt.target.style.border = `.1rem solid white`;
        evt.target.style.boxShadow = `0 0 1rem .4rem #F2A1A3`;
        let splitedVal = evt.target.innerText.split(" ");
        pera.innerText = `Atomic Number: ${splitedVal[1]}, Elemnt's Name: ${evt.target.innerText}`;    }
};

container.addEventListener("click" , printDataOfTable);