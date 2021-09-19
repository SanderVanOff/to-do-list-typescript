<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <router-link 
      v-for="link of links"
      :key="link.index"
      tag="el-menu-item" :index="link.index" :to="{ name: link.routeName }"
      active-class="is-active"
      exact
        >{{link.title}}</router-link
      >
    </el-menu>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  activeIndex = '1';
  links = [
    {
      index: '1',
      title: "Список задач",
      routeName: "TaskLIst"
    },

    {
      index: '2',
      title: "Создать новую задачу",
      routeName: "CreateTask"
    }
  ]
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

.is-active {
color: rgb(255, 208, 75) !important;
    border-bottom-color: rgb(255, 208, 75);
    background-color: rgb(84, 92, 100);
    }

    .page-title {
    margin-bottom: 1.5rem;
    }
</style>
