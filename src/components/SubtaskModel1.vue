<template>
<div>
    <div id="app">
        <div class="card">
            <div class="card-body">
                <ul class="nav nav-tabs" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link" :class="{ active: activeTab === 'subtask' }" @click="activeTab = 'subtask'">Subtask</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{ active: activeTab === 'info' }" @click="activeTab = 'info'">Info</a>
                    </li>
                </ul>
                <div class="tab-content mt-3">

                    <div class="tab-pane" :class="{ active: activeTab === 'subtask' }">
                        <i class="bi bi-plus-lg"></i>
                        <input type="text" v-model="newSubtask" @keydown.enter="addSubtask" placeholder="Add Subtask & enter">

                        <div v-for="subtask in task.subtasks" :key="subtask.name">
                            <input type="checkbox" v-model="subtask.completed" @change="updateCompleteCount(subtask)">
                            <span> &nbsp;{{subtask.name}} &nbsp; </span>
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

        <div @click="deletepop1" class="pop">
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
export default {

    props: {
        task: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            selectedTask: null,
            newSubtask: '',
            activeTab: 'subtask',
            localTask: {},
            deletepop: false,
            count: 0,
        }
    },

    mounted() {
        this.localTask = {
            ...this.task
        };

    },

    methods: {
        addSubtask() {
            if (this.newSubtask.trim() !== '') {
                const subtask = {
                    name: this.newSubtask.trim(),
                    completed: false,
                };
                this.localTask.subtasks.push(subtask);
                this.newSubtask = '';
            }
        },
        popDeleteSubtask(subtask) {
            this.selectedTask = subtask;
            this.deletepop = true;
        },
        deletepop1() {
            this.deletepop = false
        },
        updateCompleteCount(subtask) {
            if (subtask.completed === true) {
                this.count++;
            } else {
                this.count--;
            }
            this.$emit('update-complete-count', this.count)
        },
        deleteSubtask() {
            const index = this.localTask.subtasks.indexOf(this.selectedTask);
            if (index !== -1) {
                this.localTask.subtasks.splice(index, 1);
                this.selectedTask = null;
            }
        }
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
    background-color: rgba(0, 0, 0, 0.5);
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
