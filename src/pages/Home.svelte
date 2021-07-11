<script lang="ts">
    import { logonIndex, logonAccount } from '../stores/accountStores';
    import Login from './Login.svelte';

</script>

<main>
    {#if $logonIndex === 0 }
        <Login />
    {:else}
        <h2> {$logonAccount.id}, Hello </h2>
    {/if}
</main>