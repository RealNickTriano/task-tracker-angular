import { Category } from "./Category"

export interface Project {
    id: Number,
    uid: string,
    title: string,
    description: string,
    deadline: Date,
    status: string,
    categories: Category[]
}

export const emptyProject: Project = {
    id: 0,
    uid: '',
    title: '',
    description: '',
    deadline: new Date(),
    status: '',
    categories: []
}