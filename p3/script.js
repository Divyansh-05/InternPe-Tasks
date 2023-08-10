document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${taskText}</span>
                <span class="delete-btn">Delete</span>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("delete-btn")) {
            e.target.parentElement.remove();
        } else if (e.target.tagName === "SPAN") {
            e.target.classList.toggle("done");
        }
    });
});
