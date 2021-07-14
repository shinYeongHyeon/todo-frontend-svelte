<script lang="ts">
    import { logonIndex } from '../stores/accountStores';
    import Login from './Login.svelte';
    import TodoBoard from './TodoBoard.svelte';
</script>

<main>
    {#if $logonIndex === 0 }
        <Login />
    {:else}
        <TodoBoard />
    {/if}
</main>