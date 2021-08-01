import { writable } from 'svelte/store';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');

interface Todo {
    id: number;
    title: string;
    content: string;
    createdAt: dayjs.Dayjs;
    updatedAt: dayjs.Dayjs;
}

interface UserTodo {
    userIndex: number;
    todos: Todo[]
}

const savedUserTodos: UserTodo[] = [
    {
        userIndex: 1,
        todos: [
            {
                id: 1,
                title: '숨쉬기',
                content: '숨쉬는거 잊지 말기',
                createdAt: dayjs('1991-06-26T12:00:00.000Z'),
                updatedAt: dayjs(),
            },
            {
                id: 3,
                title: '밥먹기',
                content: '밥먹는거 잊지 말기',
                createdAt: dayjs('1991-06-26T12:00:00.000Z'),
                updatedAt: dayjs(),
            },
        ]
    },
    {
        userIndex: 2,
        todos: [
            {
                id: 2,
                title: '어?',
                content: '누구세요..?',
                createdAt: dayjs('1991-06-26T12:00:00.000Z'),
                updatedAt: dayjs(),
            },
        ]
    }
];

export const userTodos = writable(savedUserTodos);