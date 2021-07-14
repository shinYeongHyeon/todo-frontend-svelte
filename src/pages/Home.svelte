<script lang="ts">
    import { logonIndex } from '../stores/accountStores';
    import Login from './Login.svelte';
    import LoggedOn from './LoggedOn.svelte';
</script>

<main>
    {#if $logonIndex === 0 }
        <Login />
    {:else}
        <LoggedOn />
    {/if}
</main>