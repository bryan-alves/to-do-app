<template>
  <div class="task-card">
    <h2 class="task-card__title">{{ title }}</h2>
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
  width: 400px;
  height: 100%;
  width: 100%;
  background: rgb(189, 189, 189);
  padding: 10px;
  text-align: center;

  &__title {
    font-size: 1.75rem;
    font-weight: 700;
  }
}
</style>
