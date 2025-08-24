document.addEventListener("DOMContentLoaded", () => {
    let counter = document.getElementById("counter");
    let minusBtn = document.getElementById("minus");
    let plusBtn = document.getElementById("plus");
    let heartBtn = document.getElementById("heart");
    let likesList = document.querySelector(".likes");
    let pauseBtn = document.getElementById("pause");
    let commentForm = document.getElementById("comment-form");
    let commentList = document.getElementById("list");

    let count = 0;
    let intervalId = startCounter();
    let likes = {};
    let isPaused = false

    function startCounter() {
    return setInterval(() => {
      count++;
      counter.textContent = count;
    }, 1000);
  }

  minusBtn.addEventListener("click", () => {
    count--;
    counter.textContent = count;
  });

  plusBtn.addEventListener("click", () => {
    count++;
    counter.textContent = count;
  });

  heartBtn.addEventListener("click", () => {
    if (likes[count]) {
      likes[count] += 1;
      let li = document.getElementById(`like-${count}`);
      li.textContent = `${count} has been liked ${likes[count]} times`;
    } else {
      likes[count] = 1;
      let li = document.createElement("li");
      li.id = `like-${count}`;
      li.textContent = `${count} has been liked 1 time`;
      likesList.appendChild(li);
    }
  });

  pauseBtn.addEventListener("click", () => {
    if (!isPaused) {
      clearInterval(intervalId);
      isPaused = true;
      pauseBtn.textContent = "resume";
        // disable other buttons
      minusBtn.disabled = true;  
      plusBtn.disabled = true;
      heartBtn.disabled = true;
    } else {
      intervalId = startCounter();
      isPaused = false;
      pauseBtn.textContent = "pause";
      // re-enable other buttons
      minusBtn.disabled = false;
      plusBtn.disabled = false;
      heartBtn.disabled = false;
    }
    })
  
  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const commentInput = document.getElementById("comment-input");
    const newComment = document.createElement("p");
    newComment.textContent = commentInput.value;
    commentList.appendChild(newComment);
    commentInput.value = "";
  });
});

