import ITodo from './Todo'
export default interface IselectedTodoProvideInject {
  selectedTodo: ITodo;
  updateSelectedTodo: (updatedSelectedTodo: ITodo) => void;
}