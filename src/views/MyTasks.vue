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
    <h1 class="tasks__title">MyTasks</h1>
    <div class="tasks__container">
      <TaskCardVue id="daily" title="Daily"/>
      <TaskCardVue id="to-do" title="To-Do"/>
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
  }
}
</style>
