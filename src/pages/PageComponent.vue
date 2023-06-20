<template>
  <div class="container">
    <div class="content">
      <div class="content__subtitles">
          <span class="task__label">Задача</span>
          <span class="task__label">Комментарии</span>
          <span class="task__label">Срок</span>
      </div>
      <div class="header__wrapp">
          <div class="header__search">
            <form action="#" class="search__form">
              <input
                type="text"
                class="search__input"
                v-model="search"
                placeholder="Поиск задачи"
              />
              <button class="search__btn" type="submit">Поиск</button>
            </form>
          </div>
          
        <div class="">
          <button @click="showCreateModal" class="btn btn-primary">
            Добавить
          </button>
        </div>
    </div>


        <ItemListComponent
      v-for="task in filteredTasks"
      :key="task.id"
      @deleteTask="deleteTask"
      @editTask="showContactModal"
      :dataProps="task"
    ></ItemListComponent>

        <TaskModal
      ref="taskModalRef"
      @saveData="saveData"
      :dataProps="dataContactModal"
      :variant="modalVariant"
    ></TaskModal>
    </div>
  </div>
</template>


<script>

import ItemListComponent from '../components/ItemListComponent.vue'
import TaskModal from '../components/TaskModal.vue'

export default {
  name: 'PageComponent',
  components: {
    ItemListComponent,
    TaskModal,
  },

  data() {
    return {
      search: "",
      tasks: [
        {
          id: 1,
          task: "Добавить табы",
          comment: "под ролью декларанта",
          deadline: 10,
        },
        {
          id: 2,
          task: "Добавить статусы при ошибке",
          comment: "роль Админ",
          deadline: 1,
        },
      ],
      dataContactModal: {},
      modalVariant: "create",
    }
  },

  computed: {
    filteredTasks() {
      if (this.search !== "") {
        const regexp = new RegExp(this.search, "i");
        const filtered = this.tasks.filter(
          (task) => regexp.test(task.task) || regexp.test(task.comment)
        );
        return filtered;
      }
      return this.tasks;
    },
  },

  methods: {
    showContactModal(task) {
      this.dataContactModal = task;
      this.modalVariant = "edit";
      const taskModalRef = this.$refs.taskModalRef;
      taskModalRef.showModal();
    },

    saveData({ data, variant }) {
      if (variant === "edit") {
        this.editTask(data);
      } else {
        this.addTask(data);
      }
    },

    addTask(task) {
      this.tasks.push(task);
      this.saveLocalStorage();
    },

    showCreateModal(task) {
      const newTask = JSON.parse(JSON.stringify(task));
      newTask.id = Date.now();
      this.dataContactModal = newTask;
      this.modalVariant = "create";
      const taskModalRef = this.$refs.taskModalRef;
      taskModalRef.showModal();
    },

    editTask(task) {
      const index = this.tasks.findIndex((item) => {
        return item.id === task.id;
      });
      this.tasks[index] = JSON.parse(JSON.stringify(task));
      this.saveLocalStorage();
    },

    deleteTask(task) {
      const index = this.tasks.findIndex((item) => {
        return item.id === task.id;
      });
      this.tasks.splice(index, 1);
      this.saveLocalStorage();
    },
    saveLocalStorage() {
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
    },
},

  created() {
    const value = localStorage.getItem("tasks");
    if (value) {
      this.tasks = JSON.parse(value);
    }
  },
}
</script>