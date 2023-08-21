const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const pendingTasksList = document.getElementById('pendingTasks');
const completedTasksList = document.getElementById('completedTasks');

addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value;
    if (taskText.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${taskText}</span>
            <button class="complete-button">Complete</button>
            <button class="delete-button">Delete</button>
        `;
        pendingTasksList.appendChild(listItem);
        taskInput.value = '';
        attachTaskActions(listItem);
    }
});

function attachTaskActions(taskItem) {
    const completeButton = taskItem.querySelector('.complete-button');
    const deleteButton = taskItem.querySelector('.delete-button');

    completeButton.addEventListener('click', () => {
        completedTasksList.appendChild(taskItem);
        completeButton.remove();
        taskItem.querySelector('.delete-button').remove();
    });

    deleteButton.addEventListener('click', () => {
        taskItem.remove();
    });
}
