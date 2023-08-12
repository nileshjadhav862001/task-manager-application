<!-- task manager completed -->
<template>
    <div class="app">
        <Navbar />
        <div class="task-manager">
            <TaskMain title="Pending" :tasks="pendingTasks" />
            <TaskMain title="In Progress" :tasks="inProgressTasks" />
            <TaskMain title="Done" :tasks="doneTasks" />
            <AddTaskForm1 v-if="showAddTask" />
            {{ tasksArray }}
        </div>
    </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCounterStore } from '../store/index.js'
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
            // tasksArray: [],
            // showAddTask: false,
            selectedTask: null,
            // pendingTaskCount: 0,
            // inprogressTaskCount: 0,
            // doneTaskCount: 0,
            todoTasks: [],
        }
    },
    mounted() {
        // const storedTasks = localStorage.getItem('tasksArray');
        // if (storedTasks) {
        //     this.tasksArray = JSON.parse(storedTasks);
        // }
    },
    watch: {
        // tasksArray: {
        //     handler: function (newArray) {
        //         localStorage.setItem('tasksArray', JSON.stringify(newArray));
        //     },
        //     deep: true,
        // }
    },
    methods: {
        // ...mapActions(useCounterStore, ['count']),
        // addTask(task) {
        //     this.tasksArray.push(task);
        //     // this.pendingTaskCount++
        //     localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));
        // },
        // showAddTaskForm() {
        //     this.showAddTask = true;

        // },
        // hideAddTaskModal() {
        //     this.showAddTask = false;
        //     this.newTask = {
        //         client: '',
        //         milestone: '',
        //         developer: '',
        //         name: '',
        //         description: '',
        //     };
        // },
        // AddSubTask(subtask) {
        //     this.tasksArray.subtasks.push(subtask)
        //     localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));

        // },
        // moveTaskInprogress(task) {
        //     task.status = 'inProgress'
        //     localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));
        // },
        // moveTaskDone(task) {
        //     task.status = 'done'
        //     localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));
        // },
        // onDeletAllTask(){
        //     this.tasksArray = []
        //     // this.pendingTaskCount = 0
        //     // this.inprogressTaskCount = 0
        //     // this.doneTaskCount = 0
        // }

    },
    computed: {
        ...mapState(useCounterStore, ['tasksArray', 'showAddTask', 'pendingTasks', 'inProgressTasks', 'doneTasks']),
        // pendingTasks() {
        //     return this.tasksArray.filter((task) => task.status === 'pending');
        // },
        // inProgressTasks() {
        //     return this.tasksArray.filter((task) => task.status === 'inProgress');
        // },
        // doneTasks() {
        //     return this.tasksArray.filter((task) => task.status === 'done');
        // },
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
