import {Module, Getters, Mutations, Actions} from "vuex-smart-module";
import { Store } from 'vuex'
import Task from '@/types/Task';


//state
class TaskState {
    tasks: Task[] = []
}

//mutations

class TaskMutations extends Mutations<TaskState> {
    pushNewTask(task: Task){
        this.state.tasks.push(task)
    }
}

//Actions

class TaskActions extends Actions<TaskState, TaskGetters, TaskMutations, TaskActions> {


    addNewTast(payload: Task){
        this.commit('pushNewTask', payload)
    }

}

//getters
class TaskGetters extends Getters<TaskState> {

   get allTask(): Task[] {
        return this.state.tasks
    }
}


export default new Module({
    state: TaskState,
    getters: TaskGetters,
    actions: TaskActions,
    mutations: TaskMutations
})