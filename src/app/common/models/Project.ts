export interface Project {
    id: Number,
    title: string,
    description: string,
    deadline: Date,
    status: string,
    categories: [{
        name: string,
        color: string
    }]
}

export const emptyProject: Project = {
    id: 0,
    title: '',
    description: '',
    deadline: new Date(),
    status: '',
    categories: [{name: '', color: ''}]
}