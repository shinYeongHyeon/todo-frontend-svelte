<script>
	import { Router } from 'svelte-router-spa';

	import { routes } from './routes/Routes';
</script>

<Router {routes} />

<svelte:head>
    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700">

    <!-- Material Typography -->
    <link rel="stylesheet" href="https://unpkg.com/@material/typography@11.0.0/dist/mdc.typography.css" />

    <!-- SMUI -->
    <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/svelte-material-ui@4.0.0/bare.min.css"
    />
</svelte:head>