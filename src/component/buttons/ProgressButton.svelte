<script lang="ts">
    import DefaultButton from './DefaultButton.svelte';

    export let buttonString;
</script>

<DefaultButton
        mode="progress"
        on:click
        {buttonString}
/>