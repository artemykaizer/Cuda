{
    const feedbackBtn = document.querySelector(".feedback__send");
    const feedbackName = document.querySelector(".feedback__name");
    const feedbackEmail = document.querySelector(".feedback__email");


    feedbackBtn.addEventListener("click", checkForm);
    function checkForm(e) {
        if (!feedbackName.value) {
            feedbackName.classList.add("error");
            setTimeout(function(){
                feedbackName.classList.remove("error");
            }, 1000)
            e.preventDefault();
        }

        if (!feedbackEmail.value){
            feedbackEmail.classList.add("error");
            setTimeout(function(){
                feedbackEmail.classList.remove("error");
            }, 1000)
            e.preventDefault();
        }
    }
};