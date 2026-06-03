# Build Project Management App
  
  USED NodeJS ver : 20.20.2

## ShortKey

1) ***Open command guide : ctrl+space***
2) In intellisence list we can automatic import tools by : ctrl + click on keyword
3) **Run client : npm run dev**
4) **Run server :  npm run dev**
5) Turn on console.log() by highlight word : ctrl + alt + l
6) Move multiple lines left (outdent) : Shift + Tab
7) Move multiple lines right (indent) : Tab
8) In intellisence list we can automatic import tools by : ctrl + click on keyword
9) Turn on console.log() by highlight word : ctrl + alt + l
10) Move multiple lines left (outdent) : Shift + Tab
11) Move multiple lines right (indent) : Tab
12) For line comment : Ctrl + /
13) For block comments : Shift + Alt + A
14) Console.log : highlight word + {ctrl + k} then {ctrl + l}
15) Development tool : ctrl+shift+l
16) intellisence highlight on that word : Ctrl + .
17) Code auto formate : Shift + Alt + F
18) Move menu to top : right click under menu bar --> select "Activity Bar Position" --> Top or Default
19) Active shortkey on each tools : ctl+shift+p
20) Edit multiple line : alt + left click on each line

***Using Postman version 11.86.5 more stable don't delete history file***

## Project Time Stamp

Chapters:
0:00 Intro
5:15 Basic Installations
7:40 Frontend Install
12:04 Tailwind Install
18:17 Dashboard Wrapper
24:58 Navbar
36:30 Sidebar
48:15 Redux Toolkit
1:08:46 Redux Toolkit Integrations
1:19:57 Sidebar Responsive
1:33:33 Data Model
1:37:18 Local Postgres Install
1:41:27 Backend Typescript Install
1:44:12 Prisma Install
2:04:53 Backend Install
2:14:16 Projects Backend
2:46:32 Projects Frontend
4:55:10 Projects Frontend Modal
5:36:02 Timeline
5:43:28 Search
6:01:49 Settings
6:05:53 Users
6:17:16 Teams
6:27:56 Home
6:48:30 Priority
7:15:25 Github Repo
7:21:21 Intro
7:22:58 Budget
7:28:30 Deleting
7:30:21 AWS Overview
7:31:40 AWS Networking
7:46:15 EC2
8:02:00 RDS
8:15:59 Amplify
8:20:45 Api Gateway
8:25:43 S3
8:35:19 Cognito
9:45:00 Outro

## Setup GitHub shared directory

1) Go to "GitHub"
2) Go to Top right with "+" plus symbole select : New repository
3) Create "Repository Name" as : projManagement
4) Keep others option as default then click : Create repository

### Setup GitHub : On VsCode terminal
<!-- For new repository -->
echo "# projManagement" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin <https://github.com/Bambo0o0o/projManagement.git>
git push -u origin main
<!-- For existing repository -->
git remote add origin <https://github.com/Bambo0o0o/projManagement.git>
git branch -M main
git push -u origin main

## Setup Fronted : Tools

1) Setup "NodeJs" version 20.16(LTS)
2) Check "node" version on terminal as : node ver
3) Setup "npx" package : npm install -g npx
4) Text editor using : VsCode
5) Open "VsCode" terminal : Ctl+j
6) Setup "NextJs" app as : npx create-next-app@14.2.5                ...According EDRoh version
   1) Ask for proceed : y
   2) Ask project named : client
   3) Ask for NextJs tools : No, customize setting
      1) Used "TypeScript" : Yes
      2) Used "EsLint" : Yes
      3) Used "React Compiler" : Yes
      4) Used "Tailwind" css : Yes
      5) Used code inside a `src/` directory : Yes
      6) Used "App Router" : Yes
      7) Used "import alias (@/*) by default : No
      8) Used "AGENTS.md" to guide coding : No
7) Go to "client" directory : cd client
8) Checking tool on "VsCode Extension" is installed :
   1) ES7 React/Redux/GraphQL/React-Native snippets by dsznajder
   2) Prettier-Code formatter by Prettier
   3) Prettier ESLint by Rebecca
   4) Tailwind CSS IntelliSense
   5) Tailwind Documentation(as Optional)
9) Checking tool on "google chrome" is installed
   1) Pesticide for Chrome
   2) Redux dev tool
10) Install tools package : npm i @mui/material@5.16.6 @emotion/react@11.13.0 @emotion/styled@11.13.0 lucide-react@0.424.0 date-fns@3.6.0 axios@1.7.3 recharts@2.12.7 react-dnd@16.0.1 react-dnd-html5-backend@16.0.1 gantt-task-react@0.3.9                                                             ...According to EdRoh version
11) Install "Dependency" package : npm i -D @types/node@20.14.14 @types/uuid@10.0.0 @types/numeral@2.0.5                                                                                  ...According to EdRoh version
12) Install "Dependency" package : npm i -D prettier@3.3.3 prettier-plugin-tailwindcss@0.6.5 tailwind-merge@2.4.0
***Tools must used as : EDRoh's Version to prevent any error***
13) Create {.prettierrc} file in client folder
    1) Adding "plugins" tag as : {"plugins": ["prettier-plugin-tailwindcss"]}
14) Go to {tailwind.config.ts} file setup "color" tag as
    1) Setup "darkMode" in "const config: Config = {}" tag above "content" as : darkMode: "class"
    2) Setup "darkMode" in "theme:{extend:{}}" above "blackground" as : colors:{white, gray, blue,"dark-bg", "dark-secondary", "dark-tertiary", "blue-primary", "stroke-dark"}
15) Install "redux tools" as : npm i react-redux@9.1.2 @reduxjs/toolkit@2.2.7 redux-persist@6.0.0 dotenv@16.4.5
16) Create {redux.tsx} in /client/src/app
17) Copy all code from EDRoh's File.

## Setup Frontend : Setup environment file

1) Create {.env.local} file in /client directory
2) Create "NEXT_PUBLIC_API_BASE_URL" for "Backend" as : http://localhost:8000
3) Create "NEXT_PUBLIC_COGNITO_USER_POOL_ID" as : "YOUR_USER_POOL_ID"
4) Create "NEXT_PUBLIC_COGNITO_USER_POOL_CLIENT_ID" as : "YOUR_USER_POOL_CLIENT_ID"

## Setup Frontend : Page

1) Setup Dashboard page

### Setup Frontend : page.tsx

1) Go to {page.tsx} in /src/app
2) Remove alls inside "main" tag
3) Create simple text as : Hi this is project management page
4) Test page render as : npm run dev

### Setup Frontend : globals.css

1) Adding "@tailwind" tags as : base, components, utilities
2) Setup "root" as : *,*::before, *::after {box-sizing: border-box;}
3) Setup "html" and "body" tag
4) Setup "#root" for app{} as : height: 100%, width: 100%, @apply text-sm, @apply bg-white, @apply dark:bg-black
5) Setup "timeline" style with :
6) Setup "scollbar" with :

### Setup Frontend : dashBoardWrapper.tsx (Completed process)

1) Create {dashboardWrapper.tsx} file in /client/src/app directory
2) Create template as : tsrafce
3) Remove "type Props" tag and there argument
4) Create "use client" on top of {dashboardWrapper.tsx} file
5) Import tools as
   1) Import "React, {useEffect}" from react
   2) Import "NavBar" from @/components/Navbar
   3) Import "Sidebar" from @/components/Sidebar
   4) Import "AuthProvider" from ./authProvider
   5) Import "StoreProvider, { useAppSelector }" from ./redux
6) Create "DashboardLayout" function with
   1) Assign "children" argument as : { children }: { children: React.ReactNode }
   2) Create "isSidebarCollapsed" state as : useAppSelector((state) => state.global.isSidebarCollapsed)
   3) Create "isDarkMode" state as : useAppSelector((state) => state.global.isDarkMode)
   4) Create "useEffect" function as : () => {if(isDarkMode){...}else{...}}
   5) Create "return" funciton with
      1) Create "div" with "className" tag as : "flex min-h-screen w-full bg-gray-50 text-gray-900"
      2) Create "sidebar" tag as : Sidebar
      3) Create "main" with "className" tag as : `flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${isSidebarCollapsed ? "" : "md:pl-64"}`
      4) Create "navbar" tag as : Navbar
      5) Calling "children" as : {children}
7) Create "DashboardWrapper" function with
   1) Assign "children" argument as :({ children }: { children: React.ReactNode }) => {return(..)}
   2) Create "return" function with
      1) Setup "StoreProvider" tag as : StoreProvider
      2) Setup "AuthProvider" tag as : AuthProvider
      3) Setup "DashboardLayout" for : {children}
8) Export default as : DashboardWrapper  

### Setup Frontend : layout.tsx

1) Wrap up "children" tag with "dashboardWrapper" tag on "inter.className"

### Setup Frontend : Setup States : isDarkMode and isSidebarCollapsed

***Setup extension name as ".tsx" for the componenets***

1) Create "state" folder in /client/src/
2) Create {index.ts} file in /client/src/state
3) Import "createSlice, PayloadAction" from @reduxjs/toolkit
4) Export "initialStateTypes" interface with
   1) Setup "isSidebarCollapsed" as : boolean
   2) Setup "isDarkMode" as : boolean
5) Create "iinitialState" for "initialStateTypes" with 
   1) Setup "isSidebarCollapsed" as : false
   2) Setup "isDarkMode" as : false
6) Export "globalSlice" for : createSlice({})
   1) Setup "name" as : "global"
   2) Setup "initialState" as : initialState
   3) Setup "reducers" funcitons for :
      1) Create "setIsSidebarCollapsed" fucniton with  : (state, action: PayloadAction<boolean>) => {}
         1) Setup state for "isSidebarCollapsed" as : action.payload
      2) Create "setIsDarkMode" function with : (state, action: PayloadAction<boolean>) => {}
         1) Setup state for "isDarkMode" as : action.payload
7) Export "setIsSidebarCollapsed, setIsDarkMode" as : globalSlice.actions
8) Export default as : globalSlice.reducer

### Setup Frontend : Setup API

1) Create {api.ts} file in  /client/src/state
2) Import "createApi, fetchBaseQuery" from @reduxjs/toolkit/query/react
3) Import "fetchAuthSession, getCurrentUser" from aws-amplify/auth
4) Export "Project" interface with
   1) Setup "id" as : number
   2) Setup "name" as : string
   3) Setup "description" as : string
   4) Setup "startDate?" as : string
   5) Setup "endDate?" as : string
5) Export "Priority" enum with
   1) Setup "Urgent" as : Urgent
   2) Setup "High" as : "High"
   3) Setup "Medium" as : "Medium"
   4) Setup "Low" as : "Low"
   5) Setup "Backlog" as : "Backlog"
6) Export "Status" enum with
   1) Setup "ToDo" as : "To Do"
   2) Setup "WorkInProgress" as : "Work In Progress"
   3) Setup "UnderReview" as : "Under Review"
   4) Setup "Completed" as : "Completed"
7) Export "User" interface with
   1) Setup "userId?" as : number
   2) Setup "username" as : string
   3) Setup "email" as : string
   4) Setup "profilePictureUrl?" as : string
   5) Setup "cognitoId?" as : string
   6) Setup "teamId?" as : number
8) Export "Attachment" interface with
   1) Setup "id" as : number
   2) Setup "fileURL" as : string
   3) Setup "fileName" as : string
   4) Setup "taskId" as : number
   5) Setup "uploadedById" as : number
9) Export "Task" interface with
   1) Setup "id" as : number
   2) Setup "title" as : string
   3) Setup "description?" as : string
   4) Setup "status?" as : Status
   5) Setup "priority?" as : Priority
   6) Setup "tags?" as : string
   7) Setup "startDate?" as : string
   8) Setup "dueDate?" as : string
   9) Setup "points?" as : number
   10) Setup "projectId" as : number
   11) Setup "authorUserId?" as : number
   12) Setup "assignedUserId?" as : number
   13) Setup "author?" as : User
   14) Setup "assignee" as : User
   15) Setup "comments?" as : Comment[]
   16) Setup "attachments?" as : Attachment[]
10) Export "SearchResults" interface with
    1) Setup "tasks?" as : Task[]
    2) Setup "projects?" as : Project[]
    3) Setup "users?" as : User[]
11) Export "SearchResults" interface with
    1) Setup "teamId" as : number
    2) Setup "teamName" as : string
    3) Setup "productOwnerUserId?" as : number
    4) Setup "projectManagerUserId?" as : number
12) Create "api" body as : api = createApi({Setup API-Body})
13) Export "APIs" for "useGetProjectsQuery, useCreateProjectMutation, useGetTasksQuery, useCreateTaskMutation, useUpdateTaskStatusMutation, useSearchQuery, useGetUsersQuery, useGetTeamsQuery, useGetTasksByUserQuery, useGetAuthUserQuery" as : api

#### Setup Frontend : Setup API-Body

1) Create "baseQuery" as : fetchBaseQuery({})
2) Setup "baseUrl" as : process.env.NEXT_PUBLIC_API_BASE_URL
3) Setup "prepareHeaders" function as : async (headers) => {}
   1) Setup "session" as : await fetchAuthSession()
   2) Setup "accessToken" as : session.tokens ?? {}
   3) Setup "accessToken" with if-conditon as : headers.set("Authorization", `Bearer ${accessToken}`)
   4) Setup "return" value as : headers
4) Setup "reducerPath" as : "api"
5) Setup "tagTypes" as : ["Projects", "Tasks", "Users", "Teams"]
6) Setup "endPoints" funciton as : (build) => ({})
   1) Setup "getAuthUser" as : build.query({})
   2) Setup "queryFn" as : async (_, _queryApi, _extraoptions, fetchWithBQ) => {try{}catch (error:any){return{error:error.message || "Could not fetch user data"}}}
      1) Setup "user" as : await getCurrentUser()
      2) Setup "session" as : await fetchAuthSession()
      3) Setup if-conditon with "!session" as : throw new Error("No session found")
      4) Setup "userSub" as : session
      5) Setup "accessToken" as : session.tokens ?? {}
      6) Setup "userDetailsResponse" as : await fetchWithBQ(`users/${userSub}`)
      7) Setup "userDetails" as : userDetailsResponse.data as User
      8) Setup "return" value as : data: { user, userSub, userDetails }
   3) Setup "getProjects" as : build.query<Project[], void>({})
      1) Setup "query" as : () => "projects"
      2) Setup "providerTags" as : ["Projects"]
   4) Setup "createProject" as : build.mutation<Project, Partial<Project>>({})
      1) Setup "query" as : (project) => ({})
         1) Setup "url" as : "projects"
         2) Setup "method" as : "POST"
         3) Setup "body" as : project
      2) Setup "invalidatesTags" as : ["Projects"]
   5) Setup "getTasks" as : build.query<Task[], { projectId: number }>({})
      1) Setup "query" as : ({ projectId }) => `tasks?projectId=${projectId}`
      2) Setup "providesTags" as : (result) => result ? result.map() : [{ type:}]
         1) Setup "result.map" as : ({ id }) => ({ type: "Tasks" as const, id })
         2) Setup "type" as : "Tasks" as const
   6) Setup "getTasksByUser" as : build.query<Task[], number>({})
      1) Setup "query" as : (userId) => `tasks/user/${userId}`
      2) Setup "providesTags" as : (result, error, userId) => result ? result.map() : [{ type:}]
         1) Setup "result.map" as : ({ id }) => ({ type: "Tasks", id })
         2) Setup "type" as : "Tasks", id: userId
   7) Setup "createTask" as : build.mutation<Task, Partial<Task>>({})
      1) Setup "query" as : (task) => ({})
         1) Setup "url" as : "tasks"
         2) Setup "method" as : "POST"
         3) Setup "body" as : task
      2) Setup "invalidatesTags" as : ["Tasks"]
   8) Setup "updateTaskStatus" as : build.mutation<Task, { taskId: number; status: string }>({})
      1) Setup "query" as : ({ taskId, status }) => ({})
         1) Setup "url" as :`tasks/${taskId}/status`
         2) Setup "method" as : "PATCH"
         3) Setup "body" as : { status }
      2) Setup "invalidatesTags" as : (result, error, { taskId }) => [{ type: "Tasks", id: taskId }]
   9) Setup "getUsers" as : build.query<User[], void>({})
      1) Setup "query" as : () => "users"
      2) Setup "providerTags" as : ["Users"]
   10) Setup "getTeams" as : build.query<Team[], void>({})
       1) Setup "query" as : () => "teams"
       2) Setup "providerTags" as : ["ProTeamsjects"]
   11) Setup "search" as : build.query<SearchResults, string>({})
       1) Setup "query" as : (query) => `search?query=${query}`

   ***Back to check and completed "dashboardWrapper.tsx"***

   ***Another logic to "recheck" we cannot adding "use client" in "layout.tsx" that why we have to add it on "dashbaordWrapper.tsx" instead***

   ***Another logic to "make more flexible configuration code" we seperate function "dashboardLaout" from "dashboardWrapper" to be more agility and easier to handling more complicate code by : const dashboardWrapper (dashboardLayout)***

### Setup Frontend : Dashboard elements "Navbar, Sidebar, Main content"

1) Create "(components) folder in /client/src/app directory
   ***Create "components" folder with parenthesis because we don't want to setup pages with assembly page together***

#### Setup Frontend : Dashboard with "Navbar"

1) Create "Navbar" folder in /client/src/app/(components) directory
2) Create {index.tsx} file in "Navbar" folder
3) Create template as : tsrafce
4) Remove "type Props" and argument "props:Props"
5) Changing function name from "index" name to : Navbar
6) Create "div" with "className" in "return()" function as : "flex items-center justify-between bg-white px-4 py-3 dark:bg-black"
7) Create "isSidebarCollapsed" state as : useAppSelector((state) => state.global.isSidebarCollapsed,)

##### Setup Frontend : Dashboard with "Navbar-Search Bar" in return() function

1) Create "div" with "className" as : "flex items-center gap-8"
2) Create "!isSidebarCollapsed" function as : {!isSidebarCollapsed ? null : ()}
   1) Create "button" with "onClick" funciton as : () => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
   2) Create "Menu"  with "className" as : "h-8 w-8 dark:text-white"
3) Create "div" with "className" as : elative flex h-min w-[200px]"
4) Import "Search" from "lucide-react"
5) Create "Search" with "className" as : "absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white"
6) Create "input" with "className" as : "w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
   1) Create "type" as : "search"
   2) Create "placeholder" as : "Search..."

##### Setup Frontend : Dashboard with "Navbar-Setting & Navbar-isDarkmode" Icon(Right side) in return() function

1) Create "div" with "className" as : "flex items-center"
2) Create "button" with
   1) Create "onClick" function as : () => dispatch(setIsDarkMode(!isDarkMode))
   2) Create "className" with "ternary" function as : {isDarkMode ? `rounded p-2 dark:hover:bg-gray-700` : `rounded p-2 hover:bg-gray-100`}
3) Create "isDarkMode" with "sun/moon" with
   1) Create "Sun" with "className" as : "h-6 w-6 cursor-pointer dark:text-white"
   2) Create "Moon" with "className" as : "h-6 w-6 cursor-pointer dark:text-white"
4) Create "Link" with
   1) Setup "href" as : "/settings"
   2) Create "className" as "isDarkMode" ternary function as : { isDarkMode ? `h-min w-min rounded p-2 dark:hover:bg-gray-700` : `h-min w-min rounded p-2 hover:bg-gray-100`}
   3) Create "Setting" with "className" as : "h-6 w-6 cursor-pointer dark:text-white"
5) Create "div" with "className" for "vertical line" as : "ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-gray-200 md:inline-block"
6) Create "div" with "className" as : "hidden items-center justify-between md:flex"
   1) Create "div" with "className" as : "align-center flex h-9 w-9 justify-center"
   2) Create "ternary" funciton as ==> !!currentUserDetails?.profilePictureUrl ? (image tag): (User tag)
   3) Create "Image" tag with
      1) Setup "src" as : {`https://pm-s3-images.s3.us-east-2.amazonaws.com/${currentUserDetails?.profilePictureUrl}`}
      2) Setup "alt" with : {currentUserDetails?.username || "User Profile Picture"}
      3) Setup "width" and "height" as : 100 and 50
      4) Create "className" as : "h-full rounded-full object-cover"
   4) Create "User" with "className" as : "h-6 w-6 cursor-pointer self-center rounded-full dark:text-white"
   5) Create "span" with "className" as : "mx-3 text-gray-800 dark:text-white"
   6) Setup "username" details as : {currentUserDetails?.username}
   7) Create "button" with "className" as : "hidden rounded bg-blue-400 px-4 py-2 text-xs font-bold text-white hover:bg-blue-500 md:block"
   8) Create "onClick" funciton for "button" as : {handleSignOut}
   9) Create "text" for "button" as : Sign Out

#### Setup Frontend : Dashboard with "Sidebar"

1) Create "Sidebar" folder in /client/src/app/(components) directory
2) Create {index.tsx} file in "Sidebar" folder
3) Create template as : tsrafce
4) Remove "type Props" and argument "props:Props"
5) Create "use client" on top of file
6) Rename function from "index" to : "Sidebar"
7) Import "useAppDispatch, useAppSelector" from @/app/redux
8) Import "setIsSidebarCollapsed" from @/state
9) Import "useGetAuthUserQuery, useGetProjectsQuery" from @/state/api
10) Import "signOut" from aws-amplify/auth
11) Import "AlertCircle, AlertOctagon, AlertTriangle, Briefcase, ChevronDown, ChevronUp, Home, Layers3, LockIcon, LucideIcon, Search, Settings, ShieldAlert, User, Users, X" from lucide-react
12) Import "Image" from next/image
13) Import "Link" from next/link
14) Import { usePathname } from "next/navigation"
15) Import "React, {useState}" from react
16) Create "showProjects, setShowProjects" with : useState(true)
17) Create "showPriority, setShowPriority" with : useState(true)
18) Create "data:projects" as : useGetProjectsQuery()
19) Create "dispatch" as : useAppDispatch()
20) Create "isSidebarCollapsed" as : useAppSelector((state) => state.global.isSidebarCollapsed)
21) Create "data: currentUser" as : useGetAuthUserQuery({})
22) Create "handleSignOut" as : async () => {}
    1) Setup "Try" as : await signOut()
    2) Setup "catch(error)" as : console.error("Error signing out: ", error)
23) Create if-condition with "!currentUser" as : return null
    1) Create "currentUserDetails" as : currentUser?.userDetails
24) Create template string with "sidebarClassNames" as : `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}`
   ***To adding "isCollapsed" on sidebar :  ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}***
25) Create return function with :
    1) Create "div" with "className" as : {sidebarClassNames}
    2) Create "div" with "className" as : "flex h-[100%] w-full flex-col justify-start"
26) Create "div" with "className" as : "z-10 mt-32 flex w-full flex-col items-center gap-4 bg-white px-8 py-4 dark:bg-black md:hidden"
27) Create "div" with "className" as : "flex w-full items-center"
28) Create "div" with "className" as : "align-center flex h-9 w-9 justify-center"
29) Create "!!currentUserDetails" ternary funciton as : !!currentUserDetails?.profilePictureUrl ? (<image/>):(User)
    1) Create "Image" with
        1) Setup "src" as : {`https://pm-s3-images.s3.us-east-2.amazonaws.com/${currentUserDetails?.profilePictureUrl}`}
        2) Setup "alt" as : {currentUserDetails?.username || "User Profile Picture"}
        3) Setup "width" and "height" as : 100 and 50
        4) Create "className" as : "h-full rounded-full object-cover"
    2) Create "User" with "className" as : "h-6 w-6 cursor-pointer self-center rounded-full dark:text-white"
30) Create "span" with "className" as : "mx-3 text-gray-800 dark:text-white"
31) Create "span-currentUserDetails" as : {currentUserDetails?.username}
32) Create "button" with "className" as : "self-start rounded bg-blue-400 px-4 py-2 text-xs font-bold text-white hover:bg-blue-500 md:block"
    1) Create "onClick" funciton as : {handleSignOut}
    2) Create "text-button" as : Sign out
33) Export default as : Sidebar

##### Setup Frontend : Dashbord with "Sidebar" - Top Logo

1) Create "div" with "className" as : "z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black"
2) Create "div" with "className" as : "text-xl font-bold text-gray-800 dark:text-white"
   1) Create "Text" as : EDLIST
3) Create ternary function for button as : isSidebarCollapsed ? null : ()
   1) Create "button" with "className" as : "py-3"
   2) Create "onClick" function as : () => {dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
   3) Create "X" with "className" as : "h-6 w-6 text-gray-800 hover:text-gray-500 dark:text-white"
   ***Setup "X" or "Burger" icon to active collapsed function on sidebar***

##### Setup Frontend : Dashbord with "Sidebar" -TEAM

1) Create "div" with "className" as : "flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700"
2) Create "Image" tag with
   1) Setup "src" as : <https://pm-s3-images.s3.us-east-2.amazonaws.com/logo.png>
   2) Setup "alt" as : "Logo"
   3) Setup "width and height" as : 40 and 40
   4) Create "public" folder in /client
   5) Place "image" or "logo.png" to /client/public
3) Create "h3" with "className" as : "text-md font-bold tracking-wide dark:text-gray-200"
4) Setup "Text" as : EDROH TEAM
5) Create "div" with "className" as : "mt-1 flex items-start gap-2"
6) Create "LockIcon" with "className" as : "mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400"
7) Create "p" with "className" as : "text-xs text-gray-500"
   1) Setup "paragraph" as : Private

##### Setup Frontend : Dashbord with "Sidebar" -Menu Links

1) Create "nav" with "className" as : "z-10 w-full"
2) Create "SidebarLink" for "Home" with
   1) Setup "icon" as : {Home}
   2) Setup "label" as : "Home"
   3) Setup "href" as : "/"
3) Create "SidebarLink" for "Briefcase" with
   1) Setup "icon" as : {Briefcase}
   2) Setup "label" as : "Timeline"
   3) Setup "href" as : "/timeline"
4) Create "SidebarLink" for "Search" with
   1) Setup "icon" as : {Search}
   2) Setup "label" as : "Search"
   3) Setup "href" as : "/search"
5) Create "SidebarLink" for "Setting" with
   1) Setup "icon" as : {Setting}
   2) Setup "label" as : "Setting"
   3) Setup "href" as : "/setting"
6) Create "SidebarLink" for "User" with
   1) Setup "icon" as : {User}
   2) Setup "label" as : "Users"
   3) Setup "href" as : "/users"
7) Create "SidebarLink" for "Users" with
   1) Setup "icon" as : {Users}
   2) Setup "label" as : "Teams"
   3) Setup "href" as : "/teams"

##### Setup Frontend : Dashbord with "Sidebar" -Projects Links

1) Create "button" with
   1) Create "onClick" funciton as : () => setShowProjects((prev) => !prev)
   2) Create "className" as : "flex w-full items-center justify-between px-8 py-3 text-gray-500"
   3) Create "span" with "className" as : ""
      1) Setup "span-text" as : Projects
   4) Create "ternary" funciton as : {showProjects ?():()}
      1) Setup "ChevronUp" with "className" as : "h-5 w-5"
      2) Setup "ChevronDown" with "className" as : "h-5 w-5

##### Setup Frontend : Dashbord with "Sidebar" -Projects Lists

1) Create "showProjects" with
   1) Create "projects?.map" as : (project) => ()
   2) Create "SidebarLink" with
      1) Setup "key" as : {project.id}
      2) Setup "icon" as : {Briefcase}
      3) Setup "label" as : {project.name}
      4) Setup "href" link as : `/projects/${project.id}`

##### Setup Frontend : Dashbord with "Sidebar" -Priorities Links

1) Create "button" with
   1) Create "onClick" funciton as : () => setShowPriority((prev) => !prev)
   2) Create "className" as : "flex w-full items-center justify-between px-8 py-3 text-gray-500"
   3) Create "span" with "className" as : ""
      1) Setup "span-text" as : Priority
   4) Create "ternary" funciton as : {showPriority ?():()}
      1) Setup "ChevronUp" with "className" as : "h-5 w-5"
      2) Setup "ChevronDown" with "className" as : "h-5 w-5"
2) Create "showPriority" with
   1) Setup "empty" tag for "SidebarLink" as : <></>
   2) Create "SidebarLink" for "AlertCircle" with
      1) Setup "icon" as : AlertCircle
      2) Setup "label" as : "Urgent"
      3) Setup "href" as : "/priority/urgent"
   3) Create "SidebarLink" for "ShieldAlert" with
      1) Setup "icon" as : ShieldAlert
      2) Setup "label" as : "High"
      3) Setup "href" as : "/priority/high"
   4) Create "SidebarLink" for "AlertTriangle" with
      1) Setup "icon" as : AlertTriangle
      2) Setup "label" as : "Medium"
      3) Setup "href" as : "/priority/medium"
   5) Create "SidebarLink" for "AlertOctagon" with
      1) Setup "icon" as : AlertOctagon
      2) Setup "label" as : "Low"
      3) Setup "href" as : "/priority/low"
   6) Create "SidebarLink" for "Layer3" with
      1) Setup "icon" as : Layer3
      2) Setup "label" as : "Backlog"
      3) Setup "href" as : "/priority/backlog"

##### Setup Frontend : Dashboard with "SidebarLink-SidebarLinkProps"

1) Create "SidebarLinkProps" interface with
   1) Setup "href" as : string
   2) Setup "icon" as : LucideIcon
   3) Setup "label" as : string
2) Create "SidebarLink" function with
   1) Setup "parameters" pass through "SidebarLinkProps" as : href, icon: Icon, label
3) Create "pathname" as : usePathname()
4) Create "isActive" as : pathname === href || (pathname === "/" && href === "/dashboard")
5) Create "return" value with
   1) Create "Link" with "href" as : {href}
   2) Create "Link" with "className" as : "w-full"
   3) Create "div" with "className" as : {`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 ${isActive ? "bg-gray-100 text-white dark:bg-gray-600" : ""} justify-start px-8 py-3`}
   4) Setup "isActive" with
      1) Create "div" with "className" as : "absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200"
      2) Create "icon" with "className" as : "h-6 w-6 text-gray-800 dark:text-gray-100"
      3) Create "span" with "className" as : {`font-medium text-gray-800 dark:text-gray-100`}
      4) Setup "span-text" as : {label}

#### Setup Fronted : Dashboard with "Redux Toolkit" tools

1) Create {redux.tsx} in /client/src/app directory
2) Create "template" as : tsrafc
3) Remove "types Props" and "props: Props"
4) Import "useRef" from react
5) Import "combineReducers, configureStore" from @reduxjs/toolkit
6) Import "TypedUseSelectorHook, useDispatch, useSelector, Provider" from react-redux
7) Import "globalReducer" from @/state
8) Import "api" from @/state/api
9) Import "setupListeners" from @reduxjs/toolkit/query
10) Import "persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER from redux-persist
11) Import "PersistGate" from redux-persist/integration/react
12) Import "createWebStorage" from redux-persist/lib/storage/createWebStorage

##### Setup Frontend : Dashboard with "Redux Toolkit" - Redux Persistence

1) Create "createNoopStorage" function with
   1) Create "return" value with : getItem(), setItem(), removeItem()
   2) Setup "getItem" with
      1) Setup "key" as : any
      2) Setup "return" value as : Promise.resolve(null)
   3) Setup "setItem" with
      1) Setup "key" as : any
      2) Setup "value" as : any
      3) Setup "return" value as : Promise.resolve(value)
   4) Setup "removeItem" with
      1) Setup "key" as : any
      2) Setup "return" value as : Promise.resolve()
2) Create "storage" with ternary fucntion as : typeof window === "undefined"
   1) Setup "?" result as : createNoopStorage()
   2) Setup ":" result as : createWebStorage("local")
3) Create "persistConfig" datas with
   1) Setup "key" as : "root"
   2) Setup "storage" as : storage
   3) Setup "whitelist" as : ["global"]
4) Create "rootReducer" as : combineReducers({})
   1) Setup "global" as : globalReducer
   2) Setup "api.reducerPath" as : api.reducer
5) Create "persistedReducer" as : persistReducer(persistConfig, rootReducer)

##### Setup Frontend : Dashboard with "Redux Toolkit" - Redux Store

1) Export "makeStore" function as : makeStore = () => {}
   1) Return value as : configureStore({})
   2) Setup "reducer" as : persistedReducer
   3) Setup "middleware" for "getDefault" as : getDefault({}).concat(api.middleware)
      1) Setup "serializableCheck" as : {ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]}

##### Setup Frontend : Dashboard with "Redux Toolkit" - Redux Types

1) Export "AppStore" type as : ReturnType<typeof makeStore>
2) Export "RootState" type as : ReturnType<AppStore["getState"]>
3) Export "AppDispatch" type as : AppStore["dispatch"]
4) Export "useAppDispatch" const as : () => useDispatch<AppDispatch>()
5) Export "useAppSelector" const as : TypedUseSelectorHook<RootState> = useSelector

##### Setup Frontend : Dashboard with "Redux Toolkit" - Provider

1) Export default fuction "StoreProvider" as : StoreProvider({children}:{children: React.ReactNode})
2) Create "storeRef" as : useRef<AppStore>()
3) Create if-condition with "!storeRef.current" return : storeRef.current = makeStore() and setupListeners(storeRef.current.dispatch)
4) Create "persistor" as : persistStore(storeRef.current)
5) Create "Provider" tag with "store" as : store={storeRef.current}
6) Create "PersistGate" tag with
   1) Setup "loading" as : null
   2) Setup "persistor" as : {persistor}
7) Create "PersistGate-text" as : {children}

## Setup Database : Setup Database using Postgres

***Data structure : <https://lucid.app/lucidchart/877dec2c-db89-4f7b-9ce0-80ce88b6ee37/edit?invitationId=inv_541da4a8-8372-4969-864c-3fd30a6588f3&page=0_0#>***

1) Install PostgresSQL : <https://www.postgresql.org/download/>
2) Install PGAdmin4(PostgresSQL interface) : <https://www.pgadmin.org/download/>
3) Open PGAdmin :
   1) On left side "Servers" menu : Right Click --> Register menu --> Server
   2) On "General" tab as "Name" create-server : projManagement and keep others default
   3) On "Connection" tab with
      1) On "Hostname/address" create : localhost
      2) On "Port" create : 5432
      3) On "Password" create : "927sAph25@*" or "anything"
      4) On "Others" keep : defaults
   4) Click "save" to create database
4) Right click on "Database" on server name was we created
   1) On "General" tab  as "Database" create-database : projectmanagement
   2) On "Others" keep : defaults
   3) Click "save" to create database name
   ***# Postgres format : postgresql://USERNAME:PASSWORD@HOST:PORT/DATABASE?schema=public***
5) Create {.env} file in /server directory 
   1) Create "database" as : DATABASE_URL="postgresql://postgres:927sAph25@*@localhost:5432/postgres?schema=public""***
   2) Create "PORT" as : PORT=8000
6) Check "datas" which upload to database by :
   1) Click on "database-name"
   2) Click on "Schemas"
   3) Click on "Tables"

## Setup Backend : Create Server Directory and Tools

1) Create "server" folder in /projManagement
2) Setup "server" tools with
   1) Go to terminal and server directory : cd server
   2) Create "package.json" file as : npm init -y
   ***Mostly tools version must align with "EDRoh version" to be fine when following workshop***
3) Install "Dependency" tools : npm i -D ts-node@10.9.2 typescript@5.5.4 @types/node@22.4.0
4) Install "tsconfig.json" file : npx tsc --init
5) Configurate "tsconfig.json" file with
   1) Go to "Modules" tag
   2) Change "module" to be : "NodeNext"
   3) Uncomment "moduleResolution" and setup to be : "NodeNext"
   ***Official tag must be : "NodeNext" cannot be "nodenaext"***
   4) Adding "types" as : ["node"]
   5) Uncomment "resolveJsonModule" and setup to be : true
   6) Uncomment "outDir" and setup to be : "./dist"
   7) Go to outside "compilerOption" adding : , "include":["src/**/*", "src/data/**/*.json", "prisma/**/*"]
6) Install "prisma" as : npm i prisma@5.17.0 @prisma/client@5.18.0
7) Setup "prisma" tools for server : npx prisma init
8) **Copy folder "seedData" place in "prisma" folder : <https://github.com/ed-roh/project-management>**
9) Create {seed.ts} in "prisma" folder, Then copy code from EdRoh to here 
   ***Used "seed.ts" to upload data to database***
10) Check VsCode extension need to install "prisma" from "prisma.io"
11) Copy data "schema.prisma" from "EDRoh" to our project file or : Create following below

## Setup Backend : Create Schema for PostgreSQL

1) Setup Models for : User, Team, Project, ProjectTeam, Task, TaskAssignment, Attachment and Comment

### Setup Backend : Create Schema for PostgreSQL - User

1) Create "userId" with "Int" type as : @id @default(autoincrement())
2) Create "cognitoId" with "String" type as : @unique
3) Create "username" with "String" type as : @unique
4) Create "profilePictureUrl" with "String?"
5) Create "teamId" with "Int?"
6) Create "authoredTasks" with "Task[]" as : @relation("TaskAuthor")
7) Create "assignedTasks" with ""Task[]" as : @relation("TaskAssignee")
8) Create "taskAssignments" with "TaskAssignment[]"
9) Create "attachments" with "Attachment[]"
10) Create "comments" with "Comment[]"
11) Create "team" with "Team?" as : @relation(fields: [teamId], references: [id])

### Setup Backend : Create Schema for PostgreSQL - Team

1) Create "id" with "Int" type as : @id @default(autoincrement())
2) Create "teamName" with "String"
3) Create "productOwnerUserId" with "Int?"
4) Create "projectManagerUserId" with "Int?"
5) Create "projectTeams" with "ProjectTeam[]"
6) Create "user" with "User[]"

### Setup Backend : Create Schema for PostgreSQL - Project

1) Create "id" with "Int" type as : @id @default(autoincrement())
2) Create "name" with "String"
3) Create "description" with "String?"
4) Create "startDate" with "DateTime?"
5) Create "endDate" with "DateTime?"
6) Create "tasks" with "Task[]"
7) Create "projectTeams" with "ProjectTeam[]"

### Setup Backend : Create Schema for PostgreSQL - ProjectTeam

1) Create "id" with "Int" type as : @id @default(autoincrement())
2) Create "teamId" with "Int"
3) Create "projectId" with "Int"
4) Create "team" with "Team" as : @relation(fields: [teamId], references: [id])
5) Create "project" with "Project" as : @relation(fields: [projectId], references: [id])

### Setup Backend : Create Schema for PostgreSQL - Task

1) Create "id" with "Int" type as : @id @default(autoincrement())
2) Create "title" with "String"
3) Create "description" with "String?"
4) Create "status" with "String?"
5) Create "priority" with "String?"
6) Create "tags" with "String?"
7) Create "startDate" with "DateTime?"
8) Create "dueDate" with "DateTime?"
9) Create "points" with "Int?"
10) Create "projectId" with "Int"
11) Create "authorUserId" with "Int"
12) Create "assignedUserId" with "Int?"
13) Create "project" with "Project" as : @relation(fields: [projectId], references: [id])
14) Create "auther" with "User" as : @relation("TaskAuthor", fields: [authorUserId], references: [userId])
15) Create "assignee" with "User?" as : @relation("TaskAssignee", fields: [assignedUserId], references: [userId])
16) Create "taskAssignments" with "TaskAssignment[]"
17) Create "attachments" with "Attachment[]"
18) Create "comments" with "Comment[]"

### Setup Backend : Create Schema for PostgreSQL - TaskAssignment

1) Create "id" with "Int" type as : @id @default(autoincrement())
2) Create "userId" with "Int"
3) Create "taskId" with "Int"
4) Create "user" with "User" as : @relation(fields: [userId], references: [userId])
5) Create "task" with "Task" as : @relation(fields: [taskId], references: [id])

### Setup Backend : Create Schema for PostgreSQL - Attachment

1) Create "id" with "Int" type as : @id @default(autoincrement())
2) Create "fileURL" with "String"
3) Create "fileName" with "String?"
4) Create "taskId" with "Int"
5) Create "uploadedById" with "Int"
6) Create "task" with "Task" as : @relation(fields: [taskId], references: [id])
7) Create "uploadedBy" with "User" as : @relation(fields: [uploadedById], references: [userId])

### Setup Backend : Create Schema for PostgreSQL - Comment

1) Create "id" with "Int" type as : @id @default(autoincrement())
2) Create "text" with "String"
3) Create "taskId" with "Int"
4) Create "userId" with "Int"
5) Create "task" with "Task" as : @relation(fields: [taskId], references: [id])
6) Create "user" with "User" as : @relation(fields: [userId], references: [userId])

### Setup Backend : To upload datas to database ***UPLOAD_DATA***

1) Create "prisma" connect to database as : npx prisma generate
2) Initial "prisma" connecting as : npx prisma migrate dev --name init
   1) Need to reset "public" schema at "localhost:5432" and "All data will be lost" : Yes
   2) After "Your database is now in sync with your schema" and "Generated Prisma Client"
   3) Addinge "scripts" to "package.json" as : "seed": "ts-node prisma/seed.ts"
   4) Update data from seed to database : npm run seed

## Setup Backend : Install main backend tools as "express, body-parser, cors, dotenv, helmet, morgan and Dependency tools"

1) Install "main-backend" tools as : npm i express body-parser cors dotenv helmet morgan
2) Install "dependency" tools as : npm i -D rimraf concurrently nodemon @types/cors @types/express @types/morgan @types/node

### Setup Backend : Setup tools for server(Complete)

1) Create "src" folder in /server directory
2) Create {index.ts}  file in /server/src directory
3) Import "main" tools :
   1) Import "express" from express
   2) Import "dotenv" from dotenv
   3) Import "bodyParser" from body-parser
   4) Import "cors" from cors
   5) Import "helmet" from helmet
   6) Import "morgan" from morgan
4) Import "ROUTES" tools :
   1) Import "projectRoutes" from ./routes/projectRoutes
   2) Import "taskRoutes" from ./routes/taskRoutes
   3) Import "searchRoutes" from ./routes/searchRoutes
   4) Import "userRoutes" from ./routes/userRoutes
   5) Import "teamRoutes" from ./routes/teamRoutes
5) Configuration each tools
   1) Configurate "dotenv" as : dotenv.config()
   2) Create "app" as : express()
   3) Create "app.use()" for : express.json()
   4) Create "app.use()" for : helmet()
   5) Create "app.use()" for : helmet.crossOriginResourcePolicy({ policy: "cross-origin" })
   6) Create "app.use()" for : morgan("common")
   7) Create "app.use()" for : bodyParser.json()
   8) Create "app.use()" for : bodyParser.urlencoded({ extended: false })
   9) Create "app.use()" for : cors()
6) Confifuration each "Routes"
   1) Create "/" home routes as : app.get("/", (req, res) => {})
      1) Setup "res.send()" as : "This is home route"
   2) Create "projects" route as : app.use("/projects", projectRoutes)
   3) Create "tasks" route as : app.use("/tasks", taskRoutes)
   4) Create "search" route as : app.use("/search", searchRoutes)
   5) Create "users" route as : app.use("/users", userRoutes)
   6) Create "teams" route as : app.use("/teams", teamRoutes)
7) Setup connection to "Server-PORT" with
   1) Setup "port" as : Number(process.env.PORT) || 3000
   2) Create "return" port value as : app.listen(port, "0.0.0.0", () => {})
   3) Logging "conneted to server" success as : console.log(`Server running on part ${port}`)
8) Write "script" to run SERVER
   1) Go to {package.json} file
   2) Under "scripts" tag adding "build, start, dev" tags between "test" and "seed"
      1) Adding "build" below "test" as : "rimraf dist && npx tsc"
      2) Adding "start" below "build" as : "npm run build && node dist/index.js"
      3) Adding "dev" below "start" as : "npm run build && concurrently \"npx tsc -w\" \"nodemon --exec ts-node src/index.ts\""
9) Test server connection as : npm run dev
    ***After run first server connection, It will automatic creat "dist" folder in our /server directory***
10) Testing Server connect to backend and database fine on "server-terminal" as : curl localhost:8000
    ***It will return "This is home route" on "server-terminal"
11) To testing server connection also can used "Postman" application by
    1) On "GET" tag type : localhost:8000
    2) It will return : "This is home route"

## Setup Backend : Controllers and Routes

### Setup Backend : Setup projectControllers with "getProjects and createProjects"

1) Create "controllers" folder in /server/src
2) Create {projectController.ts} in /server/src/controllers directory
3) Import controllers tools
   1) Import "Request and Response" from express
   2) Import "PrismaClient" from @prisma/client
   3) Create "prisma" as : new PrismaClient()
4) Create "export-getProjects" as : async():Promise<void>=>{try{const projects...}catch(error:any){res...}}
   1) Create "req and res" as : Request, Response
   2) Create "projects" as : await prisma.project.findMany()
   3) Setup "response" projects as : res.json(projects)
   4) Setup "catch-error" as : error: any
      1) Setup "res.status() as : 500
      2) Setup "res.json({message : ..}) as : `Error retrieving projects: ${error.message}`
5) Create "export-createProjects" as : async():Promise<void>=>{try{const projects...}catch(error:any){res...}}
   1) Create "req and res" as : Request, Response
   2) Create "name, description, startDate, endDate" as : req.body
   3) Create "newProject" as : await prisma.project.create({})
      1) Setup "data" as : "name, description, startDate, endDate"
   4) Setup "response-status" for "newProject" as : res.status(201).json(newProject)
   5) Setup "catch-error" as : error: any
      1) Setup "res.status() as : 500
      2) Setup "res.json({message : ..}) as : `Error creating a project: ${error.message}`

### Setup Backend : Setup projectRouter(complete)

1) Create "routes" in /server/src directory
2) Create {projectRoutes.ts} file in /server/src/routes directory
3) Import "routes" tools
   1) Import "Router" from express
   2) Import "createProject and getProjects" from "../controllers/projectController"
4) Create "router" function as : Router()
5) Create "get-router" as : router.get("/", getProjects)
6) Create "post-router" as : router.post("/", createProject)
7) Export default "router"
8) Checking {index.ts} in /server/src was import and configured : projectRoutes
9) Test server can fetching data from database on "server" terminal as : curl localhost:8000/projects
10) Test "create project" by "POSTMAN" with "blank information"
    1) Change command from "GET to POST" will get message : Error creating a project
    2) This "ERROR" come from we didn't create any fields of schema as : "name, description, startDate, endDate"
    3) Setup again with "Body-Raw" as :
       1) Setup "name" as : "newProject"
       2) Setup "description" as : "This is a new project"
       3) Setup "startDate" as : "2023-01-01T00:00:00Z"
       4) Setup "endDate" as : "2023-12-31T00:00:00Z"
       5) Will get error on "PostgreSQL" from ***ID didn't setup***
    ***PostgreSQL format to Count up "ID" : SELECT setval(pg_get_serial_sequence('"[DATA_MODEL_NAME_HERE]"','id'),coalesce(max(id)+1,1),false) FROM "[DATA_MODEL_NAME_HERE]";***
    ***Default last ID is 10 when running code it will change to : n=n+1 from 10 to 10+1 = 11***
    4) Manual setup "query" on PostgreSQL for "project" table (ON Query tag) as : SELECT setval(pg_get_serial_sequence('"Project"','id'),coalesce(max(id)+1,1),false) FROM "Project";
    5) Try to send data again will return : {"id":11,"name":"newProject","description":"This is a new Project","startDate":"2023-01-01T00:00:00.000Z","endDate":"2023-12-31T00:00:00.000Z"}
    6) Checking on "PostgreSQL" By refresh and "re-query" will see : newProject schema with ID 11

### Setup Backend : Setup taskController(Complete)

1) Create {taskController.ts} in /server/src/controllers directory
2) Import controllers tools
   1) Import "Request and Response" from express
   2) Import "PrismaClient" from @prisma/client
   3) Create "prisma" as : new PrismaClient()
3) Create "tasks" function as : getTasks, createTask, updateTaskStatus, getUserTasks

#### Setup Backend : Setup taskController - GETTASK

1) Create "***export-getTask***" as : async():Promise<void>=>{const{}try{const tasks...}catch(error:any){res...}}
   1) Create "projectId" as : req.query
   2) Create "tasks" as : await prisma.task.findMany()
      1) Setup "where" as :  projectId: Number(projectId)
      2) Setup "include" with
         1) Setup "author" as : true
         2) Setup "assignee" as : true
         3) Setup "comments" as : true
         4) Setup "attachments" as : true
   3) Setup "response" task as : res.json(tasks)
   4) Setup "catch-error" as : error: any
      1) Setup "res.status() as : 500
      2) Setup "res.json({message : ..}) as : `Error retrieving tasks: ${error.message}`

#### Setup Backend : Setup taskController - CREATTASK

1) Create "***export-createTask***" as : async():Promise<void>=>{const{}try{const newTasks...}catch(error:any){res...}}
   1) Create "req and res" as : Request, Response
   2) Create "title, description, status, priority, tags, startDate, dueDate, points, projectId, authorUserId, assignUserId" as : req.body
   3) Create "newTask" as : await prisma.task.create({})
      1) Setup "data" as :  {title, description, status, priority, tags, startDate, dueDate, points, projectId, authorUserId, assignUserId}
   4) Setup "response-status" for "newTask" as : res.status(201).json(newTask)
   5) Setup "catch-error" as : error: any
      1) Setup "res.status() as : 500
      2) Setup "res.json({message : ..}) as : `Error creating a task: ${error.message}`

#### Setup Backend : Setup taskController - UPDATETASK

1) Create "***export-updateTaskStatus***" as : async():Promise<void>=>{const{}try{const updatedTask...}catch(error:any){res...}}
   1) Create "req and res" as : Request, Response
   2) Create "taskId" as : req.params
   3) Create "status" as : req.body
   4) Create "updatedTask" as : await prisma.task.update({})
      1) Setup "where" as :  {id: Number(taskId)}
      2) Setup "data" as : {status: status}
   5) Setup "response" for "updatedTask" as : res.json(updatedTask)
   6) Setup "catch-error" as : error: any
      1) Setup "res.status() as : 500
      2) Setup "res.json({message : ..}) as : `Error updating task: ${error.message}`

#### Setup Backend : Setup taskController - GETUSERTASK

1) Create "***export-getUserTasks***" as : async():Promise<void>=>{const{}try{const tasks...}catch(error:any){res...}}
   1) Create "req and res" as : Request, Response
   2) Create "userId" as : req.params
   3) Create "tasks" as : await prisma.task.findMany({})
      1) Setup "where" as :  {OR:[{ authorUserId: Number(userId) },{ assignedUserId: Number(userId) }]}
      2) Setup "include" with
         1) Setup "author" as : true
         2) Setup "assignee" as : true
   4) Setup "response" for "tasks" as : res.json(tasks)
   5) Setup "catch-error" as : error: any
      1) Setup "res.status() as : 500
      2) Setup "res.json({message : ..}) as : `Error retrieving user's tasks: ${error.message}`

### Setup Backend : Setup taskRoutes(Complete)

1) Create {taskRoutes.ts} in /server/src/routes
2) Setup "Router" for task
   1) Import "Router" from express
   2) Import "createTask, getTasks, getUserTasks, updateTaskStatus" from ../controllers/taskController
3) Create "router" as : Router()
4) Setup "router" with
   1) Setup "get" for "getTasks" as : router.get("/", getTasks)
   2) Setup "post" for "createTask" as : router.post("/", createTask)
   3) Setup "[patch]" for "updateTaskStatus" as : router.patch("/:taskId/status", updateTaskStatus)
   4) Setup "get" for "getUserTasks" as : router.get("/user/:userId", getUserTasks)
5) Export default router
6) Test "GET" Task by "POSTMAN" as :
   1) Setup "Params" with : Key = projectId and Value = 1
   2) Click send
   ***This will return all tasks which associated with "projectId = 1"***
7) Test "POST" Task by "POSTMAN" as :
   1) Go to "body" and "raw" and place on area code
      {
        "title": "New Task",
        "description": "task description",
        "status": "To Do",
        "priority": "High",
        "tags": "Deployment",
        "startDate": "2023-02-20T00:00:00.000Z",
        "dueDate": "2023-06-20T00:00:00.000Z",
        "points": null,
        "projectId": 1,
        "authorUserId": 2,
        "assignedUserId": 4
      }
   2) Do the same as "project" to generate "ID" with "n=n+1" on "PGADMIN4" by query method as : SELECT setval(pg_get_serial_sequence('"Task"','id'),coalesce(max(id)+1,1),false) FROM "Task"
   3) Click send
   ***This will return all tasks which associated with "ID = 41" : Meant it was added new task on database ***
8) Test "PATCH" Task by "POSTMAN" as :
   1) Go to "body" and "raw" and place on area code
      {
        "status": "Work In Progress"
      }
   2) Setup "KEY and VALUE" as : taskId and 41 as lastest created
   3) Change "URL" to : http://localhost:8000/tasks/41/status
   4) Click send
   ***The result will change "status" to be : "Work In Progress"***
   5) Check on "PostgreSQL" by : refresh on "task" menu
   6) On "PostgreSQL" click on table will return "status" to be : "Work In Progress" too

Time stamp : 02:41:41
