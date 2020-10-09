
const correct_answers = ["1", "3", "4", "2", "3", "1", "4", "true", "false", "true"];

let q_n = 0;
let test = 0;


//last page of quiz
const lastpage = () => {
    const answer = document.querySelectorAll(".choice");
    for(let i=0 , j=-1; i< answer.length;i++){

        if(answer[i].checked){
            answer[i].checked= false;
            j++;
            if(correct_answers[j] === answer[i].value){
                test++;
            }
        }
    }
    
    const refreshPage = () => location.reload();
    const questions = document.querySelectorAll("form");
    questions[q_n].style.display = "none";
    const last_page = document.getElementById("endpage");
    last_page.style.display = "block";
    let results = document.createElement("span");
    results.classList.add("text");
    last_page.appendChild(results);
    
    if (test >= 6) {
        results.innerText="You have passed the quiz \n SCORE " + test+"/"+(questions.length);
    } else {
        results.innerText="You have not passed the quiz better luck next time \n SCORE " + test+"/"+(questions.length);
    }
    let retry = document.createElement("input");
    retry.type="button";
    retry.value="Retry";
    retry.classList.add("button");
    retry.addEventListener("click", refreshPage);
    last_page.appendChild(retry);
   
};

const quiz = () => {
    
    //diplay first quiz
    const start_page = document.getElementById("startpage");
    start_page.style.display = "none";
    const questions = document.querySelectorAll("form");
    questions[q_n].style.display = "block";
     
        
};

//function to go back
const previouspage = () => {
    const questions = document.querySelectorAll("form");
    questions[q_n].style.display = "none";
    q_n--;
    questions[q_n].style.display = "block";
};

//function to go to text question
const nextpage = () => {
    const questions = document.querySelectorAll("form");
    if (q_n === questions.length - 1) {
        const next= document.querySelectorAll("#next")
        next[questions.length - 1].style.display = "none";
        const finish = document.createElement("input");
        finish.type="button";
        finish.value="Finish";
        finish.classList.add("button");
        finish.addEventListener("click", lastpage);
        questions[questions.length - 1].appendChild(finish);
    } else{
    questions[q_n].style.display = "none";
    q_n++;
    questions[q_n].style.display = "block";
    }
    
};
