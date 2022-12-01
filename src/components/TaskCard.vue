<template>
  <div class="task-card">
    <h2 class="task-card__title" data-test="card-title">{{ title }}</h2>
    <div class="task-card__container">
      <form @submit.prevent="addTask()">
        <input type="text" data-test="new-task" name="" id="addTask" placeholder="Adicionar tarefa" v-model="newTaskName">
      </form>
      <div class="task-card__content">
      <div class="task-card__list" data-test="card-list">
        <div class="task-card__item" :class="{'task-card__item--concluded': completed}" data-test="card-task" :id="`task-${id}`" :key="id" v-for="({id,name, completed}, index) in tasks">
          <input type="checkbox" :id="`complete-task-${id}`"  @click="completeTask(id, index)">
          <span>{{name}}</span>
          <button :id="`delete-task-${id}`" @click="deleteTask(id)">X</button>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'TaskCard',
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
  },
  data() {
    return {
      tasks: [],
      newTaskName: '',
    }
  },
  async mounted() {
    await this.getTasks()
  },
  methods: {
    async addTask() {
      const task = {
        id: parseInt(Math.random() * 999999),
        name: this.newTaskName,
        completed: false,
      }

      await axios.post('http://localhost:3000/tasks', task)

      this.tasks.push(task)
      this.newTaskName = ''
    },
    async getTasks() {
      try {
        const result = await axios.get('http://localhost:3000/tasks')
        this.tasks = result.data
      } catch (error) {
        console.log(error.response)
      }
    },
    async completeTask(id, index) {
      this.tasks[index].completed = true

      try {
        await axios.put(`http://localhost:3000/tasks/${id}`, this.tasks[index])
      } catch (error) {
        console.log(error.response)
      }
    },
    async deleteTask(id) {
      try {
        await axios.delete('http://localhost:3000/tasks/' + id)
        await this.getTasks()

        this.tasks = this.tasks.filter((task) => task.id !== id)
      } catch (error) {
        console.log(error.response)
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.task-card {
  height: 100%;
  width: 100%;
  max-width: 50%;
  background: rgb(189, 189, 189);
  padding: 10px 25px 25px;
  text-align: center;
  border-radius: 1rem;

  @media screen and (max-width: 1020px) {
    & {
      height: calc(500px - 95px);
    }
  }

  &__title {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: .5rem;
  }
  &__container{
    border-radius: 0.5rem;
    background: rgb(230, 230, 230);
    height: calc(100% - 45px);
    display: flex;
    flex-direction: column;
  }
  &__content {
    display: flex;
    flex-direction: column;
    height: calc(100% - 74px);
    padding: 15px;
    overflow-y: scroll;
    padding-top: 0px;

    @media screen and (max-width: 1020px) {
      & {
        flex-direction: column;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 8px;
    background-color: #f5f5f5;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(56 130 205 / 100%);
    border-radius: 8px;
  }

  ::-webkit-scrollbar-track {
    background-color: rgb(212, 212, 212);
    border-radius: 8px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__item {
    border: 1px solid #e3e3e3;
    border-radius: 8px;
    background: #e79696;
    height: 55px;
    display: flex;
    align-items: center;
    padding: 0px 15px;

    &--concluded {
      background: #5e935e!important;
    }

    input {
      height: 25px;
      width: 25px;
      margin-right: 1rem;
    }
  }

  form {
    display: flex;
  }

  input[type=text] {
    margin: 15px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #d1d1d1;
    padding: 0px 15px;
    outline-color: #5e5e5e;
    width: 100%;
  }
}
</style>
