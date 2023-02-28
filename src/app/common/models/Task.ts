export interface Task {
    id: number,
    projectId: number,
    title: String,
    description: String,
    deadline: Date,
    category: String,
    color: String,
    priority: number,
    status: String
}