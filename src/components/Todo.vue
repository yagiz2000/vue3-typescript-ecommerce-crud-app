<template>
  <div class="col-md-12 d-flex justify-content-center" :key="todo.id">
    <div class="card mt-5" style="width: 18rem">
      <div class="card-body">
        <div v-if="!isEditing">
          <h5 class="card-title">{{ updatedTodo.title }}</h5>
          <p class="card-text">
            {{ updatedTodo.description }}
          </p>
        </div>
        <div v-else>
          <input
            type="text"
            v-model="updatedTodo.title"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-lg"
          />

          <input
            v-if="isEditing"
            type="text"
            v-model="updatedTodo.description"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>

        <a href="#" v-if="!isEditing" class="card-link" @click="startEditing"
          >Edit</a
        >
        <a href="#" v-if="isEditing" class="card-link" @click="stopEditing"
          >Cancel</a
        >

        <a
          href="#"
          v-if="!isEditing"
          class="card-link"
          @click="removeTodo(todo.id)"
          >Remove</a
        >
        <a href="#" v-if="isEditing" class="card-link" @click="updateTodo"
          >Submit</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import ITodo from "@/types/Todo";

export default defineComponent({
  name: "ToDo",
  props: {
    todo: { type: Object as PropType<ITodo>, required: true },
    removeTodo: { type: Function, required: true },
  },
  emits: ["updatedTodo"],
  setup(props, ctx) {
    let isEditing = ref<boolean>(false);
    const updatedTodo = ref<ITodo>(props.todo);
    const initialValueOfTodo = ref<ITodo>({ ...props.todo });

    const startEditing = (): void => {
      isEditing.value = true;
    };

    const stopEditing = (): void => {
      updatedTodo.value = initialValueOfTodo.value;
      isEditing.value = false;
      ctx.emit("updatedTodo", initialValueOfTodo.value);
    };

    const updateTodo = (): void => {
      isEditing.value = false;
      ctx.emit("updatedTodo", updatedTodo.value);
    };
    return { startEditing, isEditing, stopEditing, updateTodo, updatedTodo };
  },
});
</script>

<style lang="scss"></style>
