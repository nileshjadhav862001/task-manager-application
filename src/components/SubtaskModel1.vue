<template>
    <div>
        <div id="app">
            <div class="card">
                <div class="card-body">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link" :class="{ active: activeTab === 'subtask' }"
                                @click="activeTab = 'subtask'">Subtask</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" :class="{ active: activeTab === 'info' }"
                                @click="activeTab = 'info'">Info</a>
                        </li>
                    </ul>
                    <div class="tab-content mt-3">

                        <div class="tab-pane" :class="{ active: activeTab === 'subtask' }">
                            <i class="bi bi-plus-lg"></i>
                            <input type="text" v-model="newSubtask" @keydown.enter="handleAddSubtask"
                                placeholder="Add Subtask & enter">

                            <div v-for="subtask in task.subtasks" :key="subtask.name">
                                <input type="checkbox" v-model="subtask.completed" @change="updateCompleteCount(subtask)">
                                <span> &nbsp;{{ subtask.name }} &nbsp; </span>
                                <i class="bi bi-trash-fill" style="cursor: pointer;" @click="popDeleteSubtask(subtask)"></i>
                            </div>
                        </div>
                        <div class="tab-pane" :class="{ active: activeTab === 'info' }">
                            {{ task.description }}

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="deletepop" class="deletepop">

            <div class="pop">
                <div class="warning">
                    <i class="bi bi-exclamation-triangle-fill"></i>
                </div>
                <div class="msg">
                    <span>Sure want to delete ?</span>
                </div>
                <div class="button">
                    <button @click="deleteSubtask" class="btn">YES</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCounterStore } from '../store/index.js';
export default {
    props: {
        task: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            selectedTask: null,
            newSubtask: '',
            activeTab: 'subtask',
            // localTask: {},
            deletepop: false,
            // count: 0,
        }
    },

    methods: {
        // methods
        ...mapActions(useCounterStore, ['showAddTaskForm', 'updateCompleteCount', 'addSubtaskv1', 'addSubtask', 'deleteSubtaskvV1']),

        // handleAddSubtask() {
        //     this.addSubtask(this.task, this.newSubtask)
        //     this.newSubtask = ''
        // },

        handleAddSubtask() {
            this.addSubtaskv1(this.task.uniqueId, this.newSubtask);
            this.newSubtask = '';
        },

        popDeleteSubtask(subtask) {
            this.selectedTask = subtask;
            this.deletepop = true;
        },

        deleteSubtask() {
            this.deleteSubtaskvV1(this.task.uniqueId, this.selectedTask);
            this.selectedTask = null;
            this.deletepop = false;
        },

    },
    computed: {
        // computed + data 
        ...mapState(useCounterStore, ['completedCount', 'deletepop']),
    }

}
</script>

<style scoped>
.deletepop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 9999;
}

.pop {
    border-radius: 3px;
    background-color: #fb2d2ddb;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.warning {
    color: white;
    padding: 10px;
    margin: 10px;
}

.msg {
    color: white;
    padding: 10px;
    margin: 10px;
}

.button {
    padding: 10px;
    margin: 10px;
}

.btn {
    padding: 2px 10px;
    margin: 2px 6px;
    background-color: black;
    color: white;

}

input[type=text] {
    appearance: none;
    border: none;
    outline: none;
    border-bottom: 1px solid #969494;
    border-radius: .2em .2em 0 0;
    padding: .4em;
}
</style>
