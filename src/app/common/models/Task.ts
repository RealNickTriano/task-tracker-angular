export interface Task {
    id: number,
    projectId: number,
    title: string,
    description: string,
    deadline: string,
    category: {name: string, color: string},
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