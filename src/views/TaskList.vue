<template>
    <div class="list">
    <p>Задач пока нет</p>
    <p>{{allTask}}</p>

    </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import {tasksModule} from "@/store"

@Component({
    name: "TaskList"
})
export default class TaskList extends Vue {

    get allTask(){
        return tasksModule.getters.allTask
    }
}

</script>

<style lang="scss" scoped>

</style>