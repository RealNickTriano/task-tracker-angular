import { Category } from "./Category"

export interface Project {
    id: Number,
    title: string,
    description: string,
    deadline: Date,
    status: string,
    categories: Category[]
}

export const emptyProject: Project = {
    id: 0,
    title: '',
    description: '',
    deadline: new Date(),
    status: '',
    categories: [{name: '', color: ''}]
}