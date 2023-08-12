
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    // count: 0,
    completedCount: 0,
    newSubtask:'',
    // completedCount: 0,
    selectedTask: null,
    deletepop: false,
    expantion: false,
    tasksArray: [],
    showAddTask: false,
    showPopup: false,
    newTask: {
      client: '',
      milestone: '',
      developer: '',
      name: '',
      description: '',
    },
    sampleArray : []
  }),

  actions: {
    // Methods Property
    popDeleteSubtask(subtask) {
      this.selectedTask = subtask;
      this.deletepop = true;
  },
    deleteSubtask() {
      const index = this.tasksArray.subtasks.indexOf(this.selectedTask);
      if (index !== -1) {
          this.localTask.subtasks.splice(index, 1);
          this.selectedTask = null;
      }
  },
    addSubtask() {
      // if (this.newSubtask.trim() !== '') {
          const subtask = {
              name: this.newSubtask,
              completed: false,
          };
          // this.tasksArray.subtasks.push(subtask);
          this.sampleArray.push(subtask)
          this.newSubtask = '';
      // }
  },
    addTask() {
      const task = {
        ...this.newTask,
        status: 'pending',
        subtasks: [],
        completedCount: 0
      };
      // this.$emit('add-task', task);
      this.tasksArray.push(task)
      this.hideAddTaskModal();
    },
    // popDeleteSubtask(subtask) {
    //   this.selectedTask = subtask;
    //   this.deletepop = true;
    // },
    // deletepop1() {
    //   this.deletepop = false
    // },
    expand() {
      this.expantion = !this.expantion
    },
    moveTaskInProgress(task) {
      task.status = 'inProgress'
      // localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));
    },
    moveTaskDone(task) {
      task.status = 'done'
      // localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));
    },
    showAddTaskForm() {
      this.showAddTask = true;
      console.log("from store")
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
    deleteAllTask() {
      this.tasksArray = []
    },
    AddSubTask(subtask) {
      this.tasksArray.subtasks.push(subtask)
      // localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));

    },
    updateCompleteCount(subtask) {
      if (subtask.completed === true) {
        this.completedCount++;
      } else {
        this.completedCount--;
      }
      // this.$emit('update-complete-count', this.count1)
    },
    // handleUpdateCounter(count1) {
    //   this.completedCount = Math.abs(count1);
    // },
    increment() {
      this.count++
    },
  },
  getters: {
    // computed Property
    double: state => state.count * 2,
    // ----------------------------------------------------------
    findCompletedSubtasks({ state }) {
      // const completedSubtasks = [];

      for (const item of state.tasksArray) {
        for (const subtask of item.subtasks) {
          if (subtask.completed) {
            this.count1++
          }
          else{
            this.count1--
          }
        }
      }
      // console.log("completed count - ",completedSubtasks )
      // return completedSubtasks;
    },
    // ----------------------------------------------------------

    clients() {
      return ['Client1', 'Client2', 'Client3'];
    },
    milestones() {
      return ['MVP', 'SEO Management', '19 Aug MOM'];
    },
    developers() {
      return ['JS', 'BB', 'BM', 'RS'];
    },

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
})
