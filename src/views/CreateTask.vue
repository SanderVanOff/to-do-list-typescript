<template>
  <div class="create-task">
    <v-container>
      <h1 class="page-title">Создать задачу</h1>

      <el-form ref="form" :model="form" label-width="120px">
        <el-row>
          <el-col :span="14">
            <!-- заголовок -->
            <el-form-item label="Заголовок задачи">
              <el-input v-model="form.title"></el-input>
            </el-form-item>
            <!-- описание -->
            <el-form-item label="Описание задачи">
              <el-input
                v-model="form.description"
                type="textarea"
                :rows="2"
                placeholder="Кратко опишите задачу"
              ></el-input>
              </el-form-item>

              <!-- button -->
              <el-form-item>
                <el-button type="success" @click="createTast">Создать</el-button>
              
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import {tasksModule} from "@/store"

//components
import VContainer from "@/components/v-container.vue";

//types
import Task from "@/types/Task";

@Component({
  name: "CreateTask",
  components: {
    VContainer,
  },
})
export default class CreateTask extends Vue {
  form = {} as Task;

  createTast():void {
      const newTask: Task = {
          id: Date.now().toString(32),
          title: this.form.title,
          description: this.form.description,
          status: 'created'
      }

      tasksModule.dispatch('addNewTast', newTask)
    console.log('newTask',  newTask)
  }
}
</script>

<style lang="scss" scoped>
</style>