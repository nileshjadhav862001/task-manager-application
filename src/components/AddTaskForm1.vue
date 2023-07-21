<template>
<div>
    <div>
        <div v-if="showPopup = true" class="popup">
            <div class="popup-inner">
                <h3>Add Task</h3>
                <div class="form-group">
                    <label for="client">Select Client</label>
                    <select v-model="newTask.client" class="form-control" id="client">
                        <option v-for="client in clients" :key="client" :value="client">
                            {{ client }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="milestone">Select Milestone</label>
                    <select v-model="newTask.milestone" class="form-control" id="milestone">
                        <option v-for="milestone in milestones" :key="milestone" :value="milestone">
                            {{ milestone }}
                        </option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="developer">Select Developer</label>
                    <select v-model="newTask.developer" class="form-control" id="developer">
                        <option v-for="developer in developers" :key="developer" :value="developer">
                            {{ developer }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label data-error="wrong" data-success="right" for="form34">Name Task</label>
                    <input v-model="newTask.name" type="text" class="form-control" id="task" placeholder="Enter task" />
                </div>

                <div class="form-group">
                    <label for="description">Description</label>
                    <textarea v-model="newTask.description" class="form-control" id="description" rows="2" placeholder="Enter description"></textarea>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-outline-success" @click="addTask">
                        <i class="bi bi-plus-lg"></i> ADD TASK
                    </button>
                    <button type="button" class="btn btn-outline-danger" @click="hideAddTaskModal">
                        <i class="bi bi-x"></i> CANCEL
                    </button>
                </div>
                <!-- </form> -->
            </div>
        </div>
    </div>
</div>
</template>

    
<script>
export default {
    components: {},
    data() {
        return {
            showPopup: false,
            newTask: {
                client: '',
                milestone: '',
                developer: '',
                name: '',
                description: '',
            },
        };
    },
    methods: {
        addTask() {
            const task = {
                ...this.newTask,
                status: 'pending',
                subtasks: [],
                completedCount: 0
            };
            this.$emit('add-task', task);
            this.hideAddTaskModal();
        },

        hideAddTaskModal() {
            this.$emit('hide-add-task-modal');
            this.newTask = {
                client: '',
                milestone: '',
                developer: '',
                name: '',
                description: '',
            };
        },
    },
    computed: {
        clients() {
            return ['Client1', 'Client2', 'Client3'];
        },
        milestones() {
            return ['MVP', 'SEO Management', '19 Aug MOM'];
        },
        developers() {
            return ['JS', 'BB', 'BM', 'RS'];
        },
    }
};
</script>

    
<style>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-inner {
    background-color: white;
    padding: 100px;
    margin: 100px;
}

.form-group {
    margin: 2px;
    padding: 2px;
}
</style>
