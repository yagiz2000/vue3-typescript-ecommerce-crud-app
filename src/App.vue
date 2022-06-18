<template>
  <div class="app text-center">
    TODO APP
    <div class="container">
      <div class="row">
        <div
          class="col-md-12 d-flex justify-content-center"
          v-for="todo in todos"
          :key="todo.id"
        >
          <Todo
            :removeTodo="removeTodo"
            @updatedTodo="setNewTodos"
            :todo="todo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Todo from "@/components/Todo.vue";
import ITodo from "@/types/Todo";

export default defineComponent({
  name: "App",
  components: { Todo },
  setup() {
    const todos = ref<ITodo[]>([
      {
        id: 1,
        title: "Test Title",
        description: "Desc",
        addingDate: new Date(),
        priority: "medium",
      },
      {
        id: 2,
        title: "Test2 Title",
        description: "Desc2",
        addingDate: new Date(),
        priority: "high",
      },
      {
        id: 3,
        title: "Test3 Title",
        description: "Desc3",
        addingDate: new Date(),
        priority: "low",
      },
    ]);

    const removeTodo = (todoId: number): void => {
      todos.value = todos.value.filter(
        (todo: ITodo) => todo.id !== todoId
      ) as ITodo[];
    };
    const setNewTodos = (updatedTodo: ITodo): void => {
      const updatedTodoIndex: number = todos.value.findIndex(
        (todo) => todo.id === updatedTodo.id
      );
      todos.value[updatedTodoIndex] = updatedTodo;
    };

    return {
      todos,
      removeTodo,
      setNewTodos,
    };
  },
});
</script>

<style lang="scss"></style>
