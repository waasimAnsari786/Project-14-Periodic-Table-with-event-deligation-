let body = document.querySelector("body");

const initializeTable = () => {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("main-div" , "container");
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
        body.append(mainDiv);
    }

    return [mainDiv , index]
};

let [container , index , pera] = initializeTable();

const printDataOfTable = (evt) => {
    if (evt.target.classList.contains("elements")) {
        let splitedVal = evt.target.innerText.split(" ");
        alert(`Atomic Number: ${splitedVal[1]}, Elemnt's Name: ${evt.target.innerText}`);
    }
};

container.addEventListener("click" , printDataOfTable);