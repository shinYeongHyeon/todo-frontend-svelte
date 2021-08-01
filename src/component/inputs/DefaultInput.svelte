<script lang="ts">
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text/index';

    export let type: string = '';
    export let textValue: string = '';
    export let label: string = '';
    export let helperText: string = '';
</script>

<Textfield
        {type}
        variant="outlined"
        bind:value={textValue}
        {label}
>
        <HelperText slot="helper">{helperText}</HelperText>
</Textfield>