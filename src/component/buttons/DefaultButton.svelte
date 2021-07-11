<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import Button from '@smui/button';

    const dispatch = createEventDispatcher();
    export let buttonString:string = '';
    export let mode:string = '';

    let materialUiButtonType: string = '';
    if (mode === 'progress') {
        materialUiButtonType = "raised";
    }

    function dispatchClick() {
        dispatch('click', {});
    }
</script>

<Button
        type="button"
        variant={materialUiButtonType}
        on:click={dispatchClick}
>{buttonString}</Button>