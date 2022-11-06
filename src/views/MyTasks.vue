<script>
import TaskCardVue from "../components/TaskCard.vue";

export default {
  components: {
    TaskCardVue,
  },
};
</script>

<template>
  <main class="tasks">
    <div class="tasks__container">
      <TaskCardVue id="to-do" type="todo" title="To-Do"/>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.tasks {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100% - var(--pageHeaderHeight));
  padding: 30px;
  overflow: hidden;

  &__title {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 30px;
  }

  &__container {
    display: flex;
    gap: 50px;
    height: 100%;
    width: 100%;

    @media screen and (max-width: 1024px) {
      & {
        flex-direction: column;
      }
    }
  }
}
</style>
