const { doc } = require("prettier");

const commentHandler = async(event) => {
    event.preventDefault();
    console.log("working");

    const postID = document.querySelector('input[name ="post-id"]').nodeValue;
    const body = document.querySelector('textarea[name="comment-body"]').nodeValue;

    if(body) {
        await fetch("api/comment", {
            method: "POST",
            body: JSON.stringify({
                postID,
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        document.location.reload()
    }
    console.log(body);
}

document
.querySelector("#commentSubmit")
.addEventListener("click", commentHandler)