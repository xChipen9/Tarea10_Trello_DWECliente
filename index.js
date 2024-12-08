const tasks = document.querySelectorAll('.tarea');
const columns = document.querySelectorAll('.columna');
const addTaskButtons = document.querySelectorAll('.btn-add-tarea');

let draggedTask = null;

tasks.forEach(task => {
    task.addEventListener('dragstart', () => {
        draggedTask = task;
        task.style.opacity = '0.5';
    });

    task.addEventListener('dragend', () => {
        draggedTask = null;
        task.style.opacity = '1';
    });
});

columns.forEach(column => {
    column.addEventListener('dragover', (e) => {
        e.preventDefault(); 
        column.classList.add('drag-over'); 
    });

    column.addEventListener('dragleave', () => {
        column.classList.remove('drag-over'); 
    });

    column.addEventListener('drop', () => {
        column.classList.remove('drag-over');
        if (draggedTask) {
            column.appendChild(draggedTask); 
        }
    });
});

addTaskButtons.forEach(button => {
    button.addEventListener('click', () => {
        const column = button.closest('.columna');
        const newTask = document.createElement('div');
        newTask.classList.add('tarea');
        newTask.setAttribute('draggable', 'true');
        newTask.textContent = prompt('🖋️ Escribe el nombre de la tarea:') || 'Nueva Tarea';
        column.appendChild(newTask);

        newTask.addEventListener('dragstart', () => {
            draggedTask = newTask;
            newTask.style.opacity = '0.5';
        });

        newTask.addEventListener('dragend', () => {
            draggedTask = null;
            newTask.style.opacity = '1';
        });
    });
});


