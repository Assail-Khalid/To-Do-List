const button = document.querySelector("button");
const form = document.querySelector("form");
const input = document.querySelector("input");
const container = document.getElementById("container");

form.addEventListener("submit", (eo) => {
  //to add new task
  eo.preventDefault();
  const task = `
  <div class="task">
  <div>
     <span  class="icon-check icon"></span>
  </div>
    <p class="task-text">${input.value}</p>
  <div>
     <span class="icon-star icon"></span>
     <span class="icon-trash-o icon" ></span>
  </div>
</div> 
`;
  container.innerHTML += task;
});

container.addEventListener("click", (eo) => {
  switch (eo.target.className) {
    case "icon-trash-o icon"://if user cancel the task
      eo.target.parentElement.parentElement.remove();
    break;


    case "icon-check icon"://if user checked the task
      eo.target.classList.add("dn");
      const checked = `<span class="icon-check icon checked" style="color:#bf87f7"></span>`;
      eo.target.parentElement.parentElement
        .getElementsByClassName("task-text")[0]
        .classList.add("done");
      eo.target.parentElement.innerHTML += checked;
    break;

    case "icon-check icon checked":
      eo.target.parentElement.parentElement
      .getElementsByClassName("task-text")[0]
      .classList.remove("done");

    eo.target.classList.add("dn");
    const unchecked = `<span class="icon-check icon"></span>`;
    eo.target.parentElement.innerHTML += unchecked;
    break;


    case "icon-star icon":// if user click on star
    eo.target.classList.add("star");
    container.prepend(eo.target.parentElement.parentElement);
    break;


    case "icon-star icon star":
      eo.target.classList.remove("star");
    break;

    default:

    break;
}
});

