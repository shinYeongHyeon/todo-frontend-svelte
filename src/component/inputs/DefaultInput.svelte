<script lang="ts">
    import Textfield from '@smui/textfield';
    import HelperText from '@smui/textfield/helper-text/index';

    export let textValue: string = '';
    export let label: string = '';
    export let helperText: string = '';
</script>

<Textfield
        variant="outlined"
        bind:value={textValue}
        label={label}
>
        <HelperText slot="helper">{helperText}</HelperText>
</Textfield>