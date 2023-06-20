<template>
  <div class="list">
    <div class="task__wrapper">{{ dataProps.task }}</div>
    <div class="task__wrapper">{{ dataProps.comment }}</div>
    <div class="task__wrapper">{{ dataProps.deadline }}</div>

    <div @click="editTask" class="button__wrapper link">
      <iconEdit></iconEdit>
    </div>
    <div @click="deleteTask" class="button__wrapper link link--red">
      <iconDelete></iconDelete>
    </div>
  </div>
</template>


<script>

import iconDelete from './icons/iconDelete.vue'
import iconEdit from './icons/iconEdit.vue'


export default {
  name: 'ItemListComponent',
  components: {
    iconDelete,
    iconEdit
  },
  props: {
      dataProps: {
        type: Object,
        default: () => ({}),
      },
  },

  emits: ["deleteTask", "editTask"],

  data() {
    return {};
  },

  methods: {
    editTask() {
      this.$emit("editTask", this.dataProps);
    },

    deleteTask() {
      this.$emit("deleteTask", this.dataProps);
    },
  },
}
</script>
