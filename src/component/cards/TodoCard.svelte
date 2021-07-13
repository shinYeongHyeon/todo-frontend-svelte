<script>
    export let todo;
</script>

<div class="TodoCard">
    <div class="TodoCard-title">{todo.title}</div>
    <div class="TodoCard-content">{todo.content}</div>
    <div class="TodoCard-updated">{todo.updatedAt.format('YY-MM-DD HH:mm')}</div>
</div>

<style>
    .TodoCard {
        width: 20rem;
        min-height: 2rem;
        padding: 1rem;
        margin: .5rem 1rem;
        border-radius: 1rem;
        background: white;
        display: flex;
        flex-flow: column;
    }

    .TodoCard-title {
        font-size: 140%;
        font-weight: 800;
        margin-bottom: .2em;
    }

    .TodoCard-content {
        font-weight: 500;
        padding-left: .6rem;
    }

    .TodoCard-updated {
        font-size: 80%;
        color: lightgray;
        text-align: right;
    }
</style>