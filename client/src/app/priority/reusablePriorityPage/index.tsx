// Work with EDRoh
"use client";
import { useAppSelector } from "@/app/redux";
import Header from "@/components/Header";
import ModalNewTask from "@/components/ModalNewTask";
import TaskCard from "@/components/TaskCard";
import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";
import { Priority, Task, useGetTasksByUserQuery } from "@/state/api";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useState } from "react";

type Props = {
  priority: Priority;
};

// Column array
const columns: GridColDef[] = [
  {
    field: "title",
    headerName: "Title",
    width: 100,
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    renderCell: (params) => (
      <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
        {params.value}
      </span>
    ),
  },
  {
    field: "priority",
    headerName: "Priority",
    width: 75,
  },
  {
    field: "tags",
    headerName: "Tags",
    width: 130,
  },
  {
    field: "startDate",
    headerName: "Start Date",
    width: 130,
  },
  {
    field: "dueDate",
    headerName: "Due Date",
    width: 130,
  },
  {
    field: "author",
    headerName: "Author",
    width: 150,
    renderCell: (params) => params.value.username || "Unknown",
  },
  {
    field: "assignee",
    headerName: "Assignee",
    width: 150,
    renderCell: (params) => params.value.username || "Unassigned",
  },
];

const ReusablePriorityPage = ({ priority }: Props) => {
  const [view, setView] = useState("list");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

// JUST TEMPORARY before create : AUTHENTICATION
// This state below need "userId" which we didn't create Authentication now
// Which "userId" will create on Backen call
// { skip: userId === null } tag meant : neglect when userId didn't exist now
// So here will hard code with : userId as 1 || 0 meant didn't existed yet
  const userId = 3;
  const {
    data: tasks,
    isLoading,
    isError: isTasksError,
  } = useGetTasksByUserQuery(userId || 0, { skip: userId === null });
// End TEMPORARY code section

const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  const filteredTasks = tasks?.filter(
    (task: Task) => task.priority === priority,
  );

  if (isTasksError || !tasks) return <div>Error fetching tasks</div>;
  
  return (
    <div className="m-5 p-4">
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={() => setIsModalNewTaskOpen(false)}
      />
      <Header
        name="Priority Page"
        buttonComponent={
          <button
            className="mr-3 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={() => setIsModalNewTaskOpen(true)}
          >
            Add Task
          </button>
        }
      />
      {/* Go to Create "Urgent page" before back to below */}
      <div className="mb-4 flex justify-start">
        <button
          className={`px-4 py-2 ${
            view === "list" ? "bg-gray-300" : "bg-white"
          } rounded-l`}
          onClick={() => setView("list")}
        >
          List
        </button>
        <button
          className={`px-4 py-2 ${
            view === "table" ? "bg-gray-300" : "bg-white"
          } rounded-l`}
          onClick={() => setView("table")}
        >
          Table
        </button>
      </div>
      {isLoading ? (
        <div>Loading tasks...</div>
      ) : view === "list" ? (
        <div className="grid grid-cols-1 gap-4">
          {filteredTasks?.map((task: Task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ) : (
        view === "table" &&
        filteredTasks && (
          <div className="z-0 w-full">
            <DataGrid
              rows={filteredTasks}
              columns={columns}
              checkboxSelection
              getRowId={(row) => row.id}
              className={dataGridClassNames}
              sx={dataGridSxStyles(isDarkMode)}
            />
          </div>
        )
      )}
    </div>
  );
};

export default ReusablePriorityPage;

// Solve with GPT
// "use client";

// import { useAppSelector } from "@/app/redux";
// import Header from "@/components/Header";
// import ModalNewTask from "@/components/ModalNewTask";
// import TaskCard from "@/components/TaskCard";
// import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";
// import {
//   Priority,
//   Task,
//   useGetAuthUserQuery,
//   useGetTasksByUserQuery,
// } from "@/state/api";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import React, { useState } from "react";

// type Props = { priority: Priority };

// // GridColDef
// const columns: GridColDef[] = [
//   {
//     field: "title",
//     headerName: "Title",
//     width: 100,
//   },
//   {
//     field: "description",
//     headerName: "Description",
//     width: 200,
//   },
//   {
//     field: "status",
//     headerName: "Status",
//     width: 130,
//     renderCell: (params) => (
//       <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
//         {params.value}
//       </span>
//     ),
//   },
//   {
//     field: "priority",
//     headerName: "Priority",
//     width: 75,
//   },
//   {
//     field: "tags",
//     headerName: "Tags",
//     width: 130,
//   },
//   {
//     field: "startDate",
//     headerName: "Start Date",
//     width: 130,
//   },
//   {
//     field: "dueDate",
//     headerName: "Due Date",
//     width: 130,
//   },
//   {
//     field: "author",
//     headerName: "Author",
//     width: 150,
//     renderCell: (params) => params.value.username || "Unknown",
//   },
//   {
//     field: "assignee",
//     headerName: "Assignee",
//     width: 150,
//     renderCell: (params) => params.value.username || "Unassigned",
//   },
// ];

// const ReusablePriorityPage = ({ priority }: Props) => {
//   const [view, setView] = useState("list");
//   const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

//   // const { data: currentUser } = useGetAuthUserQuery({});
//   const {
//     data: currentUser,
//     isLoading: isUserLoading,
//     isError: isUserError,
//     error: userError,
//   } = useGetAuthUserQuery({});

//   console.log("AUTH USER:", {
//     currentUser,
//     isUserLoading,
//     isUserError,
//     userError,
//   });

//   // const userId = currentUser?.userDetails?.userId ?? null;

//   // const {
//   //   data: tasks,
//   //   isLoading: isTasksLoading,
//   //   isError: isTasksError,
//   // } = useGetTasksByUserQuery(userId || 0, {
//   //   skip: userId === null,
//   // });

//   const userId = 12; // temporary test user ID

// const {
//   data: tasks,
//   isLoading: isTasksLoading,
//   isError: isTasksError,
// } = useGetTasksByUserQuery(userId);

//   const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

//   const filteredTasks = tasks?.filter(
//     (task: Task) => task.priority === priority,
//   );

//   // When no task or has any error Priority will not show : WHY not show when I following but comment it show
//   // if (isTasksError || !tasks) return <div>Error fetching tasks</div>;

//   // GPT Checking zone :

//   if (isUserLoading) {
//     return <div>Loading user...</div>;
//   }

//   if (userId === null) {
//     return <div>User not found</div>;
//   }

//   if (isTasksLoading) {
//     return <div>Loading tasks...</div>;
//   }

//   if (isTasksError) {
//     return <div>Error fetching tasks</div>;
//   }

//   if (!tasks) {
//     return <div>No task data available</div>;
//   }

//    console.log({isTasksError,tasks,condition:isTasksError || !tasks,})

//   return (
//     <div className="m-5 p-4">
//       <ModalNewTask
//         isOpen={isModalNewTaskOpen}
//         onClose={() => setIsModalNewTaskOpen(false)}
//       />
//       <Header
//         name="Priority Page"
//         buttonComponent={
//           <button
//             className="mr-3 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
//             onClick={() => setIsModalNewTaskOpen(true)}
//           >
//             Add Task
//           </button>
//         }
//       />
//       {/* Setup : Urgent Task before this */}
//       <div className="mb-4 flex justify-start">
//         <button
//           className={`px-4 py-2 ${
//             view === "list" ? "bg-gray-300" : "bg-white"
//           } rounded-l`}
//           onClick={() => setView("list")}
//         >
//           List
//         </button>
//         <button
//           className={`px-4 py-2 ${
//             view === "table" ? "bg-gray-300" : "bg-white"
//           } rounded-l`}
//           onClick={() => setView("table")}
//         >
//           Table
//         </button>
//       </div>
//       {isTasksLoading ? (
//         <div>Loading tasks...</div>
//       ) : view === "list" ? (
//         <div className="grid grid-cols-1 gap-4">
//           {filteredTasks?.map((task: Task) => (
//             <TaskCard key={task.id} task={task} />
//           ))}
//         </div>
//       ) : (
//         view === "table" &&
//         filteredTasks && (
//           <div className="z-0 w-full">
//             <DataGrid
//               rows={filteredTasks}
//               columns={columns}
//               checkboxSelection
//               getRowId={(row) => row.id}
//               className={dataGridClassNames}
//               sx={dataGridSxStyles(isDarkMode)}
//             />
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default ReusablePriorityPage;

// Complete code
// "use client";

// import { useAppSelector } from "@/app/redux";
// import Header from "@/components/Header";
// import ModalNewTask from "@/components/ModalNewTask";
// import TaskCard from "@/components/TaskCard";
// import { dataGridClassNames, dataGridSxStyles } from "@/lib/utils";
// import {
//   Priority,
//   Task,
//   useGetAuthUserQuery,
//   useGetTasksByUserQuery,
// } from "@/state/api";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";
// import React, { useState } from "react";

// type Props = {
//   priority: Priority;
// };

// const columns: GridColDef[] = [
//   {
//     field: "title",
//     headerName: "Title",
//     width: 100,
//   },
//   {
//     field: "description",
//     headerName: "Description",
//     width: 200,
//   },
//   {
//     field: "status",
//     headerName: "Status",
//     width: 130,
//     renderCell: (params) => (
//       <span className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
//         {params.value}
//       </span>
//     ),
//   },
//   {
//     field: "priority",
//     headerName: "Priority",
//     width: 75,
//   },
//   {
//     field: "tags",
//     headerName: "Tags",
//     width: 130,
//   },
//   {
//     field: "startDate",
//     headerName: "Start Date",
//     width: 130,
//   },
//   {
//     field: "dueDate",
//     headerName: "Due Date",
//     width: 130,
//   },
//   {
//     field: "author",
//     headerName: "Author",
//     width: 150,
//     renderCell: (params) => params.value.username || "Unknown",
//   },
//   {
//     field: "assignee",
//     headerName: "Assignee",
//     width: 150,
//     renderCell: (params) => params.value.username || "Unassigned",
//   },
// ];

// const ReusablePriorityPage = ({ priority }: Props) => {
//   const [view, setView] = useState("list");
//   const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

//   const { data: currentUser } = useGetAuthUserQuery({});
//   const userId = currentUser?.userDetails?.userId ?? null;
//   const {
//     data: tasks,
//     isLoading,
//     isError: isTasksError,
//   } = useGetTasksByUserQuery(userId || 0, {
//     skip: userId === null,
//   });

//   const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

//   const filteredTasks = tasks?.filter(
//     (task: Task) => task.priority === priority,
//   );

//   if (isTasksError || !tasks) return <div>Error fetching tasks</div>;

//   return (
//     <div className="m-5 p-4">
//       <ModalNewTask
//         isOpen={isModalNewTaskOpen}
//         onClose={() => setIsModalNewTaskOpen(false)}
//       />
//       <Header
//         name="Priority Page"
//         buttonComponent={
//           <button
//             className="mr-3 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
//             onClick={() => setIsModalNewTaskOpen(true)}
//           >
//             Add Task
//           </button>
//         }
//       />
//       <div className="mb-4 flex justify-start">
//         <button
//           className={`px-4 py-2 ${
//             view === "list" ? "bg-gray-300" : "bg-white"
//           } rounded-l`}
//           onClick={() => setView("list")}
//         >
//           List
//         </button>
//         <button
//           className={`px-4 py-2 ${
//             view === "table" ? "bg-gray-300" : "bg-white"
//           } rounded-l`}
//           onClick={() => setView("table")}
//         >
//           Table
//         </button>
//       </div>
//       {isLoading ? (
//         <div>Loading tasks...</div>
//       ) : view === "list" ? (
//         <div className="grid grid-cols-1 gap-4">
//           {filteredTasks?.map((task: Task) => (
//             <TaskCard key={task.id} task={task} />
//           ))}
//         </div>
//       ) : (
//         view === "table" &&
//         filteredTasks && (
//           <div className="z-0 w-full">
//             <DataGrid
//               rows={filteredTasks}
//               columns={columns}
//               checkboxSelection
//               getRowId={(row) => row.id}
//               className={dataGridClassNames}
//               sx={dataGridSxStyles(isDarkMode)}
//             />
//           </div>
//         )
//       )}
//     </div>
//   );
// };

// export default ReusablePriorityPage;
