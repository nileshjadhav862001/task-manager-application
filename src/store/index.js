
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    // TaskManager
    tasksArray: [],
    showAddTask: false,
    // TaskCard
    completedCount: 0,
    // SubtaskModel1
    deletepop: false,
    // AddTaskForm1 
    showPopup: false,
    newTask: {
      client: '',
      milestone: '',
      developer: '',
      name: '',
      description: '',
    },
    selectedTask: null,
    expantion: false,
    newSubtask: '',
    // sampleArray : []
  }),

  actions: {
    // Methods Property
    //--------------------------- TaskCard --------------------------------
    moveTaskInProgress(task) {
      task.status = 'inProgress'
      // localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));
    },
    moveTaskDone(task) {
      task.status = 'done'
      // localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));
    },
    //--------------------------- SubtaskModel1 ---------------------------
    showAddTaskForm() {
      this.showAddTask = true;
    },
    updateCompleteCount(subtask) {
      if (subtask.completed === true) {
        this.completedCount++;
      } else {
        this.completedCount--;
      }
    },
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
    //--------------------------- AddTaskForm1 ----------------------------
    addTask() {
      const task = {
        ...this.newTask,
        status: 'pending',
        subtasks: [],
        completedCount: 0
      };
      this.tasksArray.push(task)
      this.hideAddTaskModal();
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
    // ---------------------------------------------------------------------


    // addSubtask() {
    //   // if (this.newSubtask.trim() !== '') {
    //   const subtask = {
    //     name: this.newSubtask,
    //     completed: false,
    //   };
    //   // this.tasksArray.subtasks.push(subtask);
    //   this.sampleArray.push(subtask)
    //   this.newSubtask = '';
    //   // }
    // },
    // popDeleteSubtask(subtask) {
    //   this.selectedTask = subtask;
    //   this.deletepop = true;
    // },
    // deletepop1() {
    //   this.deletepop = false
    // },
    // expand() {
    //   this.expantion = !this.expantion
    // },
    deleteAllTask() {
      this.tasksArray = []
    },
    // AddSubTask(subtask) {
    //   this.tasksArray.subtasks.push(subtask)
    //   // localStorage.setItem('tasksArray', JSON.stringify(this.tasksArray));
    // },
    // handleUpdateCounter(count1) {
    //   this.completedCount = Math.abs(count1);
    // },
    // increment() {
    //   this.count++
    // },
  },
  getters: {
    // computed Property

    //--------------------------- TaskManager -----------------------------
    pendingTasks() {
      return this.tasksArray.filter((task) => task.status === 'pending');
    },
    inProgressTasks() {
      return this.tasksArray.filter((task) => task.status === 'inProgress');
    },
    doneTasks() {
      return this.tasksArray.filter((task) => task.status === 'done');
    },
    //--------------------------- AddTaskForm1 ----------------------------
    clients() {
      return ['Client1', 'Client2', 'Client3'];
    },
    milestones() {
      return ['MVP', 'SEO Management', '19 Aug MOM'];
    },
    developers() {
      return ['JS', 'BB', 'BM', 'RS'];
    },
    // ---------------------------------------------------------------------
  },
})
