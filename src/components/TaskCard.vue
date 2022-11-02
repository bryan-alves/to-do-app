<template>
  <div class="task-card">
    <h2 class="task-card__title">{{ title }}</h2>
    <div class="task-card__container">
      <input type="text" name="" id="" placeholder="Adicionar tarefa">
      <div class="task-card__content">
      <div class="task-card__list">
        <div class="task-card__item" v-for="item in [...Array(20).keys()]">
          <input type="checkbox" name="" id="">
          <span>item {{item}}</span>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.task-card {
  height: 100%;
  width: 100%;
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
  &__content {display: flex;
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
    background: #878787;
    height: 55px;
    display: flex;
    align-items: center;
    padding: 0px 15px;

    input {
      height: 25px;
      width: 25px;
      margin-right: 1rem;
    }
  }

  input[type=text] {
    margin: 15px;
    height: 48px;
    border-radius: 8px;
    border: 1px solid #d1d1d1;
    padding: 0px 15px;
    outline-color: #5e5e5e;
  }
}
</style>
