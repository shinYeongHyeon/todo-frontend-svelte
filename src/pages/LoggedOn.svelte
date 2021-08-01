<script>
  import Menu from '@smui/menu';
  import List, { Item, Separator, Text } from '@smui/list';

  import { logonIndex, logonAccount } from '../stores/accountStores';
  import TodoBoard from './page-component/TodoBoard.svelte';
  import Profile from './page-component/Profile.svelte';

  let profileMenu;
  let bodyComponent = TodoBoard;

  async function logOut() {
    $logonIndex = 0;
    $logonAccount = {};
  }
</script>

<nav>
    <div class="Header-navigation">
        <ul>
            <li>
                <p on:click={() => bodyComponent = TodoBoard}>TodoBoard</p>
            </li>
        </ul>
    </div>
    <div class="Header-user">
        <ul>
            <li>
                <p on:click={() => profileMenu.setOpen(true)} style="">{$logonAccount.id}</p>
                <Menu
                        bind:this={profileMenu}
                        anchorCorner="BOTTOM_LEFT"
                >
                    <List>
                        <Item on:SMUI:action={() => bodyComponent = Profile}>
                            <Text>My Page</Text>
                        </Item>
                        <Separator />
                        <Item on:SMUI:action={logOut}>
                            <Text>Logout</Text>
                        </Item>
                    </List>
                </Menu>
            </li>
        </ul>
    </div>
</nav>
<svelte:component this={bodyComponent} />

<style>
    nav {
        display: flex;
        justify-content: space-between;
    }

    nav li {
        list-style: none;
    }

    .Header-user {
        margin-right: 1rem;
    }

    .Header-user > ul > li > p {
        font-weight: 600;
        cursor: pointer;
    }
</style>