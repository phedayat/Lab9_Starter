let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
        TrackJS.track("Constructor error");
    }
}

// Start your code here
// You may move this JS to another file if you wish
errorBtns[0].addEventListener("click", e => {
    console.log("Console log demo");
});
errorBtns[1].addEventListener("click", e => {
    console.error("Console error demo");
});
errorBtns[2].addEventListener("click", e => {
    console.count("Console count button: ");
});
errorBtns[3].addEventListener("click", e => {
    console.warn("Console warn demo");
});
errorBtns[4].addEventListener("click", e => {
    console.assert(2 == 3); // needs more here?
});
errorBtns[5].addEventListener("click", e => {
    console.clear();
});
errorBtns[6].addEventListener("click", e => {
    console.dir(errorBtns[6]);
});
errorBtns[7].addEventListener("click", e => {
    console.dirxml(errorBtns[6]);
});
errorBtns[8].addEventListener("click", e => {
    console.group();
});
errorBtns[9].addEventListener("click", e => {
    console.groupEnd();
});
errorBtns[10].addEventListener("click", e => {
    console.table([[0,0,1], [1,1,1], [0,0,0]]);
});
errorBtns[11].addEventListener("click", e => {
    console.time("timer");
});
errorBtns[12].addEventListener("click", e => {
    console.timeEnd("timer");
});
errorBtns[13].addEventListener("click", e => {
    function ilovecse110(){
        function profpowellrocks(){
            function ilovemytas(){
                console.trace();
            }
            ilovemytas();
        }
        profpowellrocks();
    }
    ilovecse110();
});
errorBtns[14].addEventListener("click", e => {
    console.log(somevar);
});
errorBtns[15].addEventListener("click", e => {
    try{
        let el = document.getElementById("first-num");
        if(!el.shadowRoot){
            throw(new CustomError("There was an error but it was a *custom error*"));
        }
    }catch(error){
        console.log(error);
        TrackJS.track("Here's an error that occurred: " + error);
    }finally{
        console.log("We've hit the finally");
    }
});