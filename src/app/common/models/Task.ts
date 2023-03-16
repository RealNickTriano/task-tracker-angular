import { Category } from "./Category"

export interface Task {
    id: number,
    projectId: number,
    title: string,
    description: string,
    deadline: string,
    category: Category,
    priority: string,
    status: string
}

export const emptyTask: Task = {
    id: 0,
    projectId: 0,
    title: '',
    description: '',
    deadline: new Date().toISOString().split('T')[0],
    category: {name: '', color: ''},
    priority: '',
    status: ''
}