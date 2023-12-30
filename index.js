document.getElementById('addTaskBtn').addEventListener('click', function() {
    var task = document.getElementById('taskInput').value;
    var li = document.createElement('li');
    li.textContent = task;
    li.addEventListener('click', function() {
        this.parentNode.removeChild(this);
    });
    document.getElementById('taskList').appendChild(li);
    document.getElementById('taskInput').value = '';
});
