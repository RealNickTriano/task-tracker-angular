export interface Task {
    id: Number,
    projectId: Number,
    title: String,
    description: String,
    deadline: Date,
    category: String,
    color: String,
    priority: Number,
    status: String
}