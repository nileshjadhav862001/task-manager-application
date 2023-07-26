<template>
<div class="task-card shadow p-3 bg-body-tertiary rounded">
    <div>
        <div>

            <div class="task-header">
                <h6>{{ task.name }}</h6>
                <i @click="expand" class="bi bi-chevron-down"></i>
                <!-- <i v-if="expantion" class="bi bi-chevron-up"></i> -->
            </div>
            <div class="combine">
                <div class="one">

                    <div class="task-client">
                        <span>{{ task.client }}</span>
                    </div>
                    <div>
                        <i class="bi bi-check2-square"></i>
                        <span class="completed-count">{{ completedCount }}/{{ task.subtasks.length }}</span>
                    </div>
                </div>
                <div class="two">

                    <div class="task-footer">
                        <i v-if="task.status == 'pending'" @click="moveTaskInProgress(task)" style="color: rgb(6, 156, 6);" class="bi bi-play-fill"></i>
                        <i v-if="task.status == 'inProgress'" @click="moveTaskDone(task)" style="color: red;" class="bi bi-stop-fill"></i>
                    </div>
                    <div class="task-developer">
                        <span>{{ task.developer }}</span>
                    </div>
                    <div>
                        <i class="bi bi-three-dots-vertical"></i>
                    </div>
                </div>
            </div>
            <div v-if="expantion">
                <SubtaskModel1 :task="task" @update-complete-count="handleUpdateCounter" />
            </div>
        </div>
    </div>
</div>
</template>

<script>
import SubtaskModel1 from './SubtaskModel1.vue'
export default {
    components: {
        SubtaskModel1
    },
    props: {
        task: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            expantion: false,
            newSubtask: "",
            // subtasks: [],
            selectedTask: null,
            activeTab: 'subtask',
            taskDescription: 'Task description goes here',
            completedCount: 0

        }
    },
    methods: {
        expand() {
            this.expantion = !this.expantion
        },

        moveTaskInProgress(task) {
            this.$emit("move-task-inprogress", task);
        },
        moveTaskDone(task) {
            this.$emit("move-task-done", task);
        },
        handleUpdateCounter(count) {
            this.completedCount = Math.abs(count);
        }

    },
    computed: {}
}
</script>

<style scoped>
.task-card {
    /* height: 20px; */
    background-color: #ffffff;
    padding: 10px;
    margin-bottom: 10px;
}

.task-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
}

.task-status {
    padding: 5px 10px;
    background-color: #ccc;
    color: #fff;
    border-radius: 5px;
}

.combine {
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* margin-bottom: 5px; */
}

.task-client {
    /* border: 1px solid black; */
    padding: 0px 20px;
    margin: 10px;
    background-color: #3160c5;
    color: #fff;
    border-radius: 20px;
}

.task-developer {
    border: 1px solid rgb(54, 216, 89);
    padding: 0px 20px;
    margin: 10px;
    /* background-color: #6fe679; */
    color: #1fca44;
    border-radius: 20px;
}

.task-description {
    margin-bottom: 10px;
}

.task-footer {
    display: flex;
    justify-content: flex-end;
}

.one {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.two {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
