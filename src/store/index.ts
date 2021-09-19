import Vue from 'vue'
import Vuex from 'vuex'

import {Module, createStore} from 'vuex-smart-module';
import Tasks from "@/store/modules/tasks"; 

Vue.use(Vuex)


const root = new Module({
  modules: {
    Tasks
  }
});

const store = createStore(root);

export default store;

export const tasksModule = Tasks.context(store)
