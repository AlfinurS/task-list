<template>
  <div>
    <el-dialog title= "create" :visible.sync="isShowModal">

      <el-form :model="form">
        <el-form-item label="Задача" :label-width="formLabelWidth">
          <el-input v-model="form.task" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Комментарии" :label-width="formLabelWidth">
          <el-input v-model="form.comment" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Срок выполнения задачи" :label-width="formLabelWidth">
          <el-input v-model="form.deadline" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="isShowModal = false">Cancel</el-button>
        <el-button type="primary" @click="isShowModal = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>


<script>
/* import iconClose from './icons/iconClose.vue' */

export default {
  name: 'TaskModal',
  components: {
    /* iconClose, */
  },
  props: {
      dataProps: {
        type: Object,
        default: () => ({}),
      },
  },
  emits: ["saveData"],
      variant: {
      type: String,
      default: "create",
      },

  data() {
    return {
      form: {  
            id: null,
            task: "",
            comment: "",
            deadline: "",
          },
      isShowModal: false,
      formLabelWidth: '120px'
    };
  },

  methods: {
    showModal() {
      this.isShowModal = true;
    },

    closeModal() {
      this.isShowModal = false;
    },

    saveData() {
      this.isShowModal = false;
      this.$emit("saveData", { data: this.form, variant: this.variant });
    },
  },

  watch: {
    dataProps(newValue) {
      this.form = JSON.parse(JSON.stringify(newValue));
    },
  },

  created() {
    this.form = JSON.parse(JSON.stringify(this.dataProps));
  },
}
</script>

<style lang="scss" scoped>

.modal {
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-top: 4px;
    margin-bottom: 0px;
  }
  &__title {
    font-size: 18px;
    line-height: 24px;
    font-weight: 700;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    margin-top: 0px;
    margin-bottom: 0px;
  }
  &__close {
    cursor: pointer;
    margin-right: -14px;
  }
  &__divider {
    margin-top: 24px;
    margin-bottom: 0px;
  }
  &__footer {
    display: flex;
    justify-content: space-between;
  }
  &__wrapper {
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>