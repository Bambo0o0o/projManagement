"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserTasks = exports.updateTaskStatus = exports.createTask = exports.getTasks = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// GET_TASKS
const getTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { projectId } = req.query;
    try {
        const tasks = yield prisma.task.findMany({
            where: {
                projectId: Number(projectId),
            },
            include: {
                author: true,
                assignee: true,
                comments: true,
                attachments: true,
            },
        });
        res.json(tasks);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error retrieving tasks: ${error.message}` });
    }
});
exports.getTasks = getTasks;
// CREATE_TASK
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, description, status, priority, tags, startDate, dueDate, points, projectId, authorUserId, assignedUserId, } = req.body;
    try {
        const newTask = yield prisma.task.create({
            data: {
                title,
                description,
                status,
                priority,
                tags,
                startDate,
                dueDate,
                points,
                projectId,
                authorUserId,
                assignedUserId,
            },
        });
        res.status(201).json(newTask);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error creating a task: ${error.message}` });
    }
});
exports.createTask = createTask;
// UPDATETASKSTATUS
const updateTaskStatus = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { taskId } = req.params;
    const { status } = req.body;
    try {
        const updatedTask = yield prisma.task.update({
            where: {
                id: Number(taskId),
            },
            data: {
                status: status,
            },
        });
        res.json(updatedTask);
    }
    catch (error) {
        res.status(500).json({ message: `Error updating task: ${error.message}` });
    }
});
exports.updateTaskStatus = updateTaskStatus;
// GETUSERTASKS
const getUserTasks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    try {
        const tasks = yield prisma.task.findMany({
            where: {
                OR: [
                    { authorUserId: Number(userId) },
                    { assignedUserId: Number(userId) },
                ],
            },
            include: {
                author: true,
                assignee: true,
            },
        });
        res.json(tasks);
    }
    catch (error) {
        res
            .status(500)
            .json({ message: `Error retrieving user's tasks: ${error.message}` });
    }
});
exports.getUserTasks = getUserTasks;
// Complete Code
// import { Request, Response } from "express";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// export const getTasks = async (req: Request, res: Response): Promise<void> => {
//   const { projectId } = req.query;
//   try {
//     const tasks = await prisma.task.findMany({
//       where: {
//         projectId: Number(projectId),
//       },
//       include: {
//         author: true,
//         assignee: true,
//         comments: true,
//         attachments: true,
//       },
//     });
//     res.json(tasks);
//   } catch (error: any) {
//     res
//       .status(500)
//       .json({ message: `Error retrieving tasks: ${error.message}` });
//   }
// };
// export const createTask = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const {
//     title,
//     description,
//     status,
//     priority,
//     tags,
//     startDate,
//     dueDate,
//     points,
//     projectId,
//     authorUserId,
//     assignedUserId,
//   } = req.body;
//   try {
//     const newTask = await prisma.task.create({
//       data: {
//         title,
//         description,
//         status,
//         priority,
//         tags,
//         startDate,
//         dueDate,
//         points,
//         projectId,
//         authorUserId,
//         assignedUserId,
//       },
//     });
//     res.status(201).json(newTask);
//   } catch (error: any) {
//     res
//       .status(500)
//       .json({ message: `Error creating a task: ${error.message}` });
//   }
// };
// export const updateTaskStatus = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { taskId } = req.params;
//   const { status } = req.body;
//   try {
//     const updatedTask = await prisma.task.update({
//       where: {
//         id: Number(taskId),
//       },
//       data: {
//         status: status,
//       },
//     });
//     res.json(updatedTask);
//   } catch (error: any) {
//     res.status(500).json({ message: `Error updating task: ${error.message}` });
//   }
// };
// export const getUserTasks = async (
//   req: Request,
//   res: Response
// ): Promise<void> => {
//   const { userId } = req.params;
//   try {
//     const tasks = await prisma.task.findMany({
//       where: {
//         OR: [
//           { authorUserId: Number(userId) },
//           { assignedUserId: Number(userId) },
//         ],
//       },
//       include: {
//         author: true,
//         assignee: true,
//       },
//     });
//     res.json(tasks);
//   } catch (error: any) {
//     res
//       .status(500)
//       .json({ message: `Error retrieving user's tasks: ${error.message}` });
//   }
// };
