export interface Task {
    id: number,
    projectId: number,
    title: String,
    description: String,
    deadline: Date,
    category: String,
    color: String,
    priority: string,
    status: String
}

export const emptyTask = {
    id: 0,
    projectId: 0,
    title: '',
    description: '',
    deadline: new Date(),
    category: '',
    color: '',
    priority: '',
    status: ''
}