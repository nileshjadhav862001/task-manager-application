<template>
    
<div class="app">
    <Navbar @show-add-task-form="showAddTaskForm" @delet-all-task="onDeletAllTask" />
    <div class="task-manager">
        <TaskMain title="Pending" :tasks="pendingTasks"  @move-task-inprogress="moveTaskInprogress" />
        <TaskMain title="In Progress" :tasks="inProgressTasks"  @move-task-done="moveTaskDone" />
        <TaskMain title="Done" :tasks="doneTasks" />
        <AddTaskForm1 v-if="showAddTask" @add-task="addTask" @hide-add-task-modal="hideAddTaskModal" />
    </div>
</div>
</template>

<script>
import Navbar from './Navbar.vue'
import TaskMain from './TaskMain.vue'
import AddTaskForm1 from './AddTaskForm1.vue';

export default {
    name: 'App',
    components: {
        Navbar,
        TaskMain,
        AddTaskForm1,
    },
    data() {
        return {
            tasksArray: [],
            showAddTask: false,
            selectedTask: null,
            // pendingTaskCount: 0,
            // inprogressTaskCount: 0,
            // doneTaskCount: 0,
            todoTasks: [],
        }
    },
    mounted() {
        const storedTasks = localStorage.getItem('tasksArray');
        if (storedTasks) {
            this.tasksArray = JSON.parse(storedTasks);
        }
    },
    watch: {
        tasksArray: {
            handler: function (newArray) {
                localStorage.setItem('tasksArray', JSON.stringify(newArray));
            },
            deep: true,
        }
    },
    methods: {
        addTask(task) {
            this.tasksArray.push(task);
            // this.pendingTaskCount++
            localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));
        },
        showAddTaskForm() {
            this.showAddTask = true;

        },
        hideAddTaskModal() {
            this.showAddTask = false;
            this.newTask = {
                client: '',
                milestone: '',
                developer: '',
                name: '',
                description: '',
            };
        },
        AddSubTask(subtask) {
            this.tasksArray.subtasks.push(subtask)
            // localStorage.setItem("tasksArray.subtasks", JSON.stringify(this.tasksArray.subtasks))
            localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));

        },
        moveTaskInprogress(task) {
            task.status = 'inProgress'
            // this.inprogressTaskCount++
            // this.pendingTaskCount--
            localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));
        },
        moveTaskDone(task) {
            task.status = 'done'
            // this.doneTaskCount++
            // this.inprogressTaskCount--
            localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));
        },
        onDeletAllTask(){
            this.tasksArray = []
            this.pendingTaskCount = 0
            this.inprogressTaskCount = 0
            this.doneTaskCount = 0
        }

    },
    computed: {
        pendingTasks() {
            return this.tasksArray.filter((task) => task.status === 'pending');
        },
        inProgressTasks() {
            return this.tasksArray.filter((task) => task.status === 'inProgress');
        },
        doneTasks() {
            return this.tasksArray.filter((task) => task.status === 'done');
        },
    },
}
</script>

<style>
.task-manager {
    display: flex;
    flex-wrap: wrap;
}

/* #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    } */
</style>
