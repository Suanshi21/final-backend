import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private tasksService;
    constructor(tasksService: TasksService);
    create(createTaskDto: CreateTaskDto, user: any): Promise<import("./task.schema").Task>;
    findAll(user: any): Promise<import("./task.schema").Task[]>;
    findOne(id: string): Promise<import("./task.schema").Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<import("./task.schema").Task>;
    remove(id: string): Promise<import("./task.schema").Task>;
}
