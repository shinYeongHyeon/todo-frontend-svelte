import { writable } from 'svelte/store';

export interface Account {
    index: number;
    id: string;
    password: string;
}

const savedAccount: Account = {
    index: 1,
    id: 'den',
    password: 'test1234',
};

export const accounts = writable([savedAccount]);
export let logonIndex = writable(0);
export let logonAccount = writable({})