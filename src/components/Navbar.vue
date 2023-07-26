<template>
<div class="main">
    <nav class="navbar navbar-expand-lg navbar-light shadow" style="box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1) !important">
        <i class="bi bi-list list"></i>
        <div class="container-fluid">
            <a class="navbar-brand">Task Manager Pinia</a>
            <form class="d-flex" role="search">
                <i style="padding: 10px; margin: 10px" class="bi bi-arrow-clockwise" @click="deletAllTask"></i>
                <i style="padding: 10px; margin: 10px; cursor: pointer;" class="bi bi-plus-lg" @click="showAddTaskForm"></i>
                <i style="padding: 10px; margin: 10px" class="bi bi-search"></i>
                <i style="padding: 10px; margin: 10px" class="bi bi-funnel-fill"></i>
                <i style="padding: 10px; margin: 10px" class="bi bi-three-dots-vertical"></i>
            </form>
        </div>
    </nav>
</div>
</template>

  
  
<script>
export default {
    name: "HelloWorld",
    components: {},
    data() {
        return {};
    },
    methods: {
        showAddTaskForm() {
            this.$emit('show-add-task-form')
        },
        deletAllTask(){
            this.$emit('delet-all-task')
        }
    },
};
</script>
  
  
<style scoped>
.list {
    padding: 10px;
    margin: 10px;
}
</style>
