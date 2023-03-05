export interface Task {
    id: number,
    projectId: number,
    title: String,
    description: String,
    deadline: string,
    category: String,
    color: String,
    priority: string,
    status: String
}

export const emptyTask: Task = {
    id: 0,
    projectId: 0,
    title: '',
    description: '',
    deadline: new Date().toISOString().split('T')[0],
    category: '',
    color: '',
    priority: '',
    status: ''
}