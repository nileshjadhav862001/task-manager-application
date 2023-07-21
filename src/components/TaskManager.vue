<template>
<div class="app">
    <Navbar @show-add-task-form="showAddTaskForm" />
    <div class="task-manager">
        <TaskMain title="Pending" :tasks="pendingTasks" :num="pendingTaskCount" @move-task-inprogress="moveTaskInprogress" />
        <TaskMain title="In Progress" :tasks="inProgressTasks" :num="inprogressTaskCount" @move-task-done="moveTaskDone" />
        <TaskMain title="Done" :tasks="doneTasks" :num="doneTaskCount" />
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
            pendingTaskCount: 0,
            inprogressTaskCount: 0,
            doneTaskCount: 0,
            todoTasks: [],
        }
    },
    methods: {
        addTask(task) {
            this.tasksArray.push(task);
            this.pendingTaskCount++
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

        },
        moveTaskInprogress(task) {
            task.status = 'inProgress'
            this.inprogressTaskCount++
            this.pendingTaskCount--
        },
        moveTaskDone(task) {
            task.status = 'done'
            this.doneTaskCount++
            this.inprogressTaskCount--
        },

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
