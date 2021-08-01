<script lang="ts">
    import Dialog, { Title, Content, Actions } from '@smui/dialog';
    import Checkbox from '@smui/checkbox';
    import FormField from '@smui/form-field';

    import { logonIndex, accounts, logonAccount } from '../stores/accountStores';
    import ProgressButton from '../component/buttons/ProgressButton.svelte';
    import DefaultButton from '../component/buttons/DefaultButton.svelte';
    import DefaultInput from '../component/inputs/DefaultInput.svelte';

    let id: string = '';
    let pw: string = '';
    let loginFailDialogShow = false;
    let wantToCreateNewAccount = false;

    function tryToLogin() {
        if (wantToCreateNewAccount) {
            loginAfterCreateAccount();
            return true;
        }

        $accounts.some((account) => {
            if (account.id === id && account.password === pw) {
                $logonIndex = account.index;
                $logonAccount = account;
                return true;
            }
        });

        if ($logonIndex === 0) {
            loginFailDialogShow = true;
        }
    }

    function loginAfterCreateAccount() {
        // TODO: 중복체크
        const account = {
            index: $accounts.length + 1,
            id,
            password: pw,
        };
        $accounts = [...$accounts, account];
        $logonAccount = account;
        $logonIndex = account.index;
    }
</script>

<main>
    <section class="login-section">
        <h1>TeamO2 DEV TEAM (w/ Svelte)</h1>

        <div>
            <DefaultInput
                    type="text"
                    bind:textValue={id}
                    label="ID"
                    helperText="아이디를 입력하세요"
            />
            <DefaultInput
                    type="password"
                    bind:textValue={pw}
                    label="Password"
                    helperText="비밀번호를 입력하세요"
            />
            <FormField align="end" style="margin-top: -1rem; margin-bottom: 1em; padding-left: 1rem">
                <Checkbox bind:checked={wantToCreateNewAccount} />
                <span slot="label" style="color: gray">Do you have not account ? </span>
            </FormField>
        </div>
        <div>
            <ProgressButton
                    buttonString={wantToCreateNewAccount ? "SIGN UP" : "LOGIN"}
                    on:click={tryToLogin}
            />
            <DefaultButton
                    buttonString="닫기"
                    on:click={() => { alert(`close`) }}
            />
        </div>
    </section>
</main>

<Dialog
        bind:open={loginFailDialogShow}
        aria-labelledby="login-title"
        aria-describedby="login-content"
>
    <Title id="login-title">로그인 실패</Title>
    <Content id="login-content">Id 와 Password 를 확인해주세요.</Content>
    <Actions>
        <DefaultButton buttonString="확인" />
    </Actions>
</Dialog>

<style>
    .login-section {
        display: flex;
        margin-top: 2em;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>