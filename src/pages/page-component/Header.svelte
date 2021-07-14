<script>
  import Menu from '@smui/menu';
  import List, { Item, Separator, Text } from '@smui/list';
  import { logonIndex, logonAccount } from '../../stores/accountStores';

  let profileMenu;

  async function logOut() {
    $logonIndex = 0;
    $logonAccount = {};
  }
</script>

<nav>
    <div class="Header-navigation">
        <ul>
            <li>TodoBoard</li>
        </ul>
    </div>
    <div class="Header-user">
        <ul>
            <li>
                <p on:click={() => profileMenu.setOpen(true)}>{$logonAccount.id}</p>
                <Menu
                        bind:this={profileMenu}
                        anchorCorner="BOTTOM_LEFT"
                >
                    <List>
                        <Item on:SMUI:action={() => alert('Mypage')}>
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

    .Header-user ul li p {
        font-weight: 600;
        cursor: pointer;
    }
</style>