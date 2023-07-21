<template>
<!-- 40 undo -->
<div class="task-column">
    <div class="container-fluid  bg-light" style="height: 100%;">
        <div class="row">
            <div class="d-flex">
                <h5>{{ title }} <span style="color: #afafaf;">({{ num }})</span></h5>
            </div>
            <div class="task-list">
                <div v-for="task in tasks" :key="task.id">
                    <task-card :task="task" :subtask="subtasks" @add-sub-task="addSubtask(subtask)" @move-task-inprogress="moveTaskInProgress(task)" @move-task-done="moveTaskDone(task)"  />
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import TaskCard from "./TaskCard.vue";

export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        tasks: {
            type: Array,
            required: true,
        },
        num: {
            type: Number,
            required: true
        }
    },
    components: {
        TaskCard,
    },
    data() {
        return {
            subtasks: [],
            todoTasks: [],
            inProgressTasks: [],
            doneTasks: [],
        };
    },
    methods: {

        moveTaskInProgress(task) {
            this.$emit('move-task-inprogress', task)
        },
        moveTaskDone(task) {
            this.$emit('move-task-done', task)
        },
        addSubtask(subtask) {
            this.$emit("add-sub-task", subtask)
        }

    },
};
</script>

<style scoped>
h5 {
    padding: 3px;
    margin: 5px;
}

.task-column {
    flex: 1;
    border: 1px solid rgb(199, 199, 199);
    border-top-color: #ededed;
    justify-items: center;
}

.row {
    flex: 1;
    display: contents;
}

.task-list {
    margin-bottom: 10px;
}

</style>
