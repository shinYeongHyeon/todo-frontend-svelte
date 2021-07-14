<script>
  import { userTodos } from '../stores/todoStores';
  import TodoCard from '../component/cards/TodoCard.svelte';

  export let logonIndex = 0;
  let accountsTodos = [];
  $userTodos.some((userTodo) => {
    if (userTodo.userIndex === logonIndex) {
      accountsTodos = userTodo.todos;
      return true;
    }
  });
</script>

<div class="Board">
    {#each accountsTodos as accountTodo (accountTodo.id)}
        <TodoCard todo={accountTodo}/>
    {/each}
</div>

<style>
    .Board {
        background: whitesmoke;
        height: 30em;
    }
</style>