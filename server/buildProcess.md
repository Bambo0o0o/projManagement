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

### Setup Frontend : Setup HomePage

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

### Setup Frontend : Setup API (Complete)

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
11) Export "Team" interface with
    1) Setup "teamId" as : number
    2) Setup "teamName" as : string
    3) Setup "productOwnerUserId?" as : number
    4) Setup "projectManagerUserId?" as : number
12) Create "api" body as : api = createApi({Setup API-Body}) **Go to Setup API-Body**

#### Setup Frontend : Setup API-Body(Complete)

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
   1) Setup "**getAuthUser**" as : build.query({})
      1) Setup "queryFn" as : async (_, _queryApi, _extraoptions, fetchWithBQ) => {try{}catch (error:any){return{error:error.message || "Could not fetch user data"}}}
      2) Setup "user" as : await getCurrentUser()
      3) Setup "session" as : await fetchAuthSession()
      4) Setup if-conditon with "!session" as : throw new Error("No session found")
      5) Setup "userSub" as : session
      6) Setup "accessToken" as : session.tokens ?? {}
      7) Setup "userDetailsResponse" as : await fetchWithBQ(`users/${userSub}`)
      8) Setup "userDetails" as : userDetailsResponse.data as User
      9) Setup "return" value as : data: { user, userSub, userDetails }
   2) Setup "**getProjects**" as : build.query<Project[], void>({})
      1) Setup "query" as : () => "projects"
      2) Setup "providerTags" as : ["Projects"]
   3) Setup "**createProject**" as : build.mutation<Project, Partial<Project>>({})
      1) Setup "query" as : (project) => ({})
         1) Setup "url" as : "projects"
         2) Setup "method" as : "POST"
         3) Setup "body" as : project
      2) Setup "invalidatesTags" as : ["Projects"]
   4) Setup "**getTasks**" as : build.query<Task[], { projectId: number }>({})
      1) Setup "query" as : ({ projectId }) => `tasks?projectId=${projectId}`
      2) Setup "providesTags" as : (result) => result ? result.map() : [{ type:}]
         1) Setup "result.map" as : ({ id }) => ({ type: "Tasks" as const, id })
         2) Setup "type" as : "Tasks" as const
   5) Setup "**getTasksByUser**" as : build.query<Task[], number>({})
      1) Setup "query" as : (userId) => `tasks/user/${userId}`
      2) Setup "providesTags" as : (result, error, userId) => result ? result.map() : [{ type:}]
         1) Setup "result.map" as : ({ id }) => ({ type: "Tasks", id })
         2) Setup "type" as : "Tasks", id: userId
   6) Setup "**createTask**" as : build.mutation<Task, Partial<Task>>({})
      1) Setup "query" as : (task) => ({})
         1) Setup "url" as : "tasks"
         2) Setup "method" as : "POST"
         3) Setup "body" as : task
      2) Setup "invalidatesTags" as : ["Tasks"]
   7) Setup "**updateTaskStatus**" as : build.mutation<Task, { taskId: number; status: string }>({})
      1) Setup "query" as : ({ taskId, status }) => ({})
         1) Setup "url" as :`tasks/${taskId}/status`
         2) Setup "method" as : "PATCH"
         3) Setup "body" as : { status }
      2) Setup "invalidatesTags" as : (result, error, { taskId }) => [{ type: "Tasks", id: taskId }]
   8) Setup "**getUsers**" as : build.query<User[], void>({})
      1) Setup "query" as : () => "users"
      2) Setup "providerTags" as : ["Users"]
   9) Setup "**getTeams**" as : build.query<Team[], void>({})
       1) Setup "query" as : () => "teams"
       2) Setup "providerTags" as : ["ProTeamsjects"]
   10) Setup "**search**" as : build.query<SearchResults, string>({})
       1) Setup "query" as : (query) => `search?query=${query}`
   11) Export "APIs" for "useGetProjectsQuery, useCreateProjectMutation, useGetTasksQuery, useCreateTaskMutation, useUpdateTaskStatusMutation, useSearchQuery, useGetUsersQuery, useGetTeamsQuery, useGetTasksByUserQuery, useGetAuthUserQuery" as : api

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

#### Setup Frontend : Dashboard with "Sidebar" (Complete)

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

##### Setup Frontend : Dashbord with "Sidebar" -Navbar Links

1) Create "nav" with "className" as : "z-10 w-full"
2) Create "SidebarLink" for "**Home**" with
   1) Setup "icon" as : {Home}
   2) Setup "label" as : "Home"
   3) Setup "href" as : "/"
3) Create "SidebarLink" for "**Briefcase**" with
   1) Setup "icon" as : {Briefcase}
   2) Setup "label" as : "Timeline"
   3) Setup "href" as : "/timeline"
4) Create "SidebarLink" for "**Search**" with
   1) Setup "icon" as : {Search}
   2) Setup "label" as : "Search"
   3) Setup "href" as : "/search"
5) Create "SidebarLink" for "**Setting**" with
   1) Setup "icon" as : {Setting}
   2) Setup "label" as : "Setting"
   3) Setup "href" as : "/setting"
6) Create "SidebarLink" for "**User**" with
   1) Setup "icon" as : {User}
   2) Setup "label" as : "Users"
   3) Setup "href" as : "/users"
7) Create "SidebarLink" for "**Users**" with
   1) Setup "icon" as : {Users}
   2) Setup "label" as : "Teams"
   3) Setup "href" as : "/teams"

##### Setup Frontend : Dashbord with "Sidebar" -Projects Links

1) Create "**button**" with
   1) Create "onClick" funciton as : () => setShowProjects((prev) => !prev)
   2) Create "className" as : "flex w-full items-center justify-between px-8 py-3 text-gray-500"
   3) Create "span" with "className" as : ""
      1) Setup "span-text" as : Projects
   4) Create "ternary" funciton as : {showProjects ?():()}
      1) Setup "ChevronUp" with "className" as : "h-5 w-5"
      2) Setup "ChevronDown" with "className" as : "h-5 w-5

##### Setup Frontend : Dashbord with "Sidebar" -Projects Lists (Show list to Sidebar menu)

***To Fetching data to Project menu list***

1) Create "**showProjects**" with
   1) Create "projects?.map" as : (project) => ()
   2) Create "SidebarLink" with
      1) Setup "key" as : {project.id}
      2) Setup "icon" as : {Briefcase}
      3) Setup "label" as : {project.name}
      4) Setup "href" link as : `/projects/${project.id}`

##### Setup Frontend : Dashbord with "Sidebar" -Priorities Links

1) Create "**button**" with
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

### Setup Backend : Setup tools as "index.ts" for server(Complete)

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
   ***On taskController we include : author, assignee, comments, attachments, So it have to add them on task too***

Time stamp : 02:46:45

***Setup Frontend : Setup Export Interface as above Line 226-281 (Complete process coding)***

#### Setup Frontend : Wrap-Up setup

1) Go to {api.ts} adding : getProject and createProject
2) Adding : getTasks, createTask, updateTaskStatus

#### Setup Frontend : Setup Projects[id] page (Complete)

***************************************  Seriously ****************************************
***Move (components) folder to outside app folder then change name to be : components******
***Change routes for "Navbar" and "Sidebar" in {dashboardWrapper.tsx} to @/components/..***
******************************************* x *********************************************

1) Create "projects" folder in /client/src/app directory
2) Create "[id]" folder in /client/src/app/projects directory **To handling projectId**
3) Create {page.tsx} in /client/src/app/projects/[id] directory
   1) Create template as : tsrafce
   2) Change "page" name to "Project" name
   3) Create "use client" on top of {page.tsx} file
   4) Adding "type Props" with "id" as : params: { id: string }
   5) Setup "Import" with
      1) Import "React and {useState}" from react
      2) Import "ProjectHeader" from @/app/projects/ProjectHeader
      3) Import "Board" from ../BoardView
      4) Import "List" from ../ListView
      5) Import "Timeline" from ../TimelineView
      6) Import "Table" from ../TableView
      7) Import "ModalNewTask" from @/components/ModalNewTask
   6) Change "props" in "project" argument to : {params}
   7) Setup "id" as : params
   8) Setup "activeTab, setActiveTab" as : useState("Board")
   9) Setup "isModalNewTaskOpen, setIsModalNewTaskOpen" as : useState(false)
   10) Create "div" tag in return function
       1) Create "ModalNewTask" with
          1) Setup "isOpen" as : {isModalNewTaskOpen}
          2) Setup "onClose" as : {() => setIsModalNewTaskOpen(false)}
          3) Setup "id" as : {id}
       2) Create "ProjectHeader" with
          1) Setup "activeTab" as : {activeTab}
          2) Setup "setActiveTab" as : {setActiveTab}
       3) Create "activeTab" for "**Board**" with
          1) Setup "id" as : {id}
          2) Setup "setIsModalNewTaskOpen" as : {setIsModalNewTaskOpen}
       4) Create "activeTab" for "**List**" with
          1) Setup "id" as : {id}
          2) Setup "setIsModalNewTaskOpen" as : {setIsModalNewTaskOpen}
       5) Create "activeTab" for "**Timeline**" with
          1) Setup "id" as : {id}
          2) Setup "setIsModalNewTaskOpen" as : {setIsModalNewTaskOpen}
       6) Create "activeTab" for "**Table**" with
          1) Setup "id" as : {id}
          2) Setup "setIsModalNewTaskOpen" as : {setIsModalNewTaskOpen}
4) Test run "client" as : npm run dev

#### Setup Frontend : Setup Projects - projectHeader (Show Project's Header name as dynamics)- Complete

1) Create {ProjectHeader.tsx} in /client/src/projects directory
2) Create "template" as : tsrafce
3) Change name to : ProjectHeader
4) Create "type Props" with
   1) Setup "activeTab" as : string
   2) Setup "setActiveTab" as : (tabName: string) => void
***Back to adding code on "Projects List" to show list of project on Sidebar menu***
5) Import tools with
   1) Import "Header" from @/components/Header
   2) Import "Clock, Filter, Grid3x3, List, PlusSquare, Share2, Table," from lucide-react
   3) Import "React, {useState}" from react
   4) Import "ModalNewProject" from ./ModalNewProject
6) Create "argument" for "ProjectHeader" function as : {activeTab, setActiveTab }: Props
   1) Create "isModalNewProjectOpen, setIsModalNewProjectOpen" as : useState(false)
   2) Create "return" function with
      1) Create "div" with "className" as : "px-4 xl:px-6"
      2) Create "ModalNewProject" tag with
         1) Setup "isOpen" as : {isModalNewProjectOpen}
         2) Setup "onClose" as : {() => setIsModalNewProjectOpen(false)}
      3) Create "div' with "className" as : "pb-6 pt-6 lg:pb-4 lg:pt-8"
      4) Create "Header" tag with
         1) Setup "name" as : "Product Design Development"
         2) Setup "buttonComponent" with "button" tag
            1) Setup "className" as : "flex items-center rounded-md bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
            2) Setup "onClick" as : {() => setIsModalNewProjectOpen(true)}
            3) Create "PlusSquare" tag with "className" as : "mr-2 h-5 w-5"
            4) Setup "button-text" as : New Boards

##### Setup Frontend : Setup Projects - projectHeader with TABS section(Complete)

1) Setup "TABS" section with
   1) Create "div" with "className" as : "flex flex-wrap-reverse gap-2 border-y border-gray-200 pb-[8px] pt-2 dark:border-stroke-dark md:items-center"
   2) Create "div" with "className" as : "flex flex-1 items-center gap-2 md:gap-4"
      1) Create "TabButton" for "**Board**" with
         1) Setup "name" as : "Board"
         2) Setup "icon" as : {<Grid3x3 className="h-5 w-5" />}
         3) Setup "setActiveTab" as : {setActiveTab}
         4) Setup "activeTab" as : {activeTab}
      2) Create "TabButton" for "**List**" with
         1) Setup "name" as : "List"
         2) Setup "icon" as : {<List className="h-5 w-5" />}
         3) Setup "setActiveTab" as : {setActiveTab}
         4) Setup "activeTab" as : {activeTab}
      3) Create "TabButton" for "**Timeline**" with
         1) Setup "name" as : "Timeline"
         2) Setup "icon" as : {<Clock className="h-5 w-5" />}
         3) Setup "setActiveTab" as : {setActiveTab}
         4) Setup "activeTab" as : {activeTab}
      4) Create "TabButton" for "**Table**" with
         1) Setup "name" as : "Table"
         2) Setup "icon" as : {<Table className="h-5 w-5" />}
         3) Setup "setActiveTab" as : {setActiveTab}
         4) Setup "activeTab" as : {activeTab}
   3) Create "div" with "className" as : "flex items-center gap-2"
   4) Create "button" tag with "className" as : "text-gray-500 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-gray-300"
      1) Create "Filter" tag with "className" as : "h-5 w-5"
   5) Create "button" tag with "className" as : "text-gray-500 hover:text-gray-600 dark:text-neutral-500 dark:hover:text-gray-300"
      1) Create "Share2" tag with "className" as : "h-5 w-5"
   6) Create "div" with "className" as : "relative"
   7) Create "input" tag with
      1) Setup "type" as : "text"
      2) Setup "placeholder" as : "Search Task"
      3) Setup "className" as : "rounded-md border py-1 pl-10 pr-4 focus:outline-none dark:border-dark-secondary dark:bg-dark-secondary dark:text-white"
   8) Create "Grid3x3" tag with "className" as : "absolute left-3 top-2 h-4 w-4 text-gray-400 dark:text-neutral-500"

##### Setup Frontend : Setup Projects - projectHeader with TabButton section (Complete)

1) Create "type-TabButtonProps" with
   1) Setup "name" as : string
   2) Setup "icon" as : React.ReactNode
   3) Setup "setActiveTab" as : (tabName: string) => void
   4) Setup "activeTab" as : string
2) Create "TabButton" function with
   1) Setup "argument" as : { name, icon, setActiveTab, activeTab }: TabButtonProps
   2) Setup "isActive" as : activeTab === name
3) Create "return" function with
   1) Create "button" tag with "className" as : {`relative flex items-center gap-2 px-1 py-2 text-gray-500 after:absolute after:-bottom-[9px] after:left-0 after:h-[1px] after:w-full hover:text-blue-600 dark:text-neutral-500 dark:hover:text-white sm:px-2 lg:px-4 ${
        isActive ? "text-blue-600 after:bg-blue-600 dark:text-white" : ""
      }`}
      1) Setup "onClick" as : {() => setActiveTab(name)}
      2) Setup "icon" as : {icon}
      3) Setup "name" as : {name}
4) Export defualt as : ProjectHeader

#### Setup Frontend : Template for "Header" (Complete)

1) Create "Header" folder in /client/src/components directory
2) Create {index.tsx} in /client/src/components directory
3) Create "template" as : tsrafce
4) Change function name from "index" to "Header"
5) Create "Props" parameters with
   1) Setup "name" as : string
   2) Setup "buttonComponent?" as : any
   3) Setup "isSmallText?" as : boolean
6) Create argument for "Header" function as : { name, buttonComponent, isSmallText = false }: Props
7) Create "return" function with
   1) Create "div" with "className" as : "mb-5 flex w-full items-center justify-between"
   2) Create "h1" tag with "className" as : {`${isSmallText ? "text-lg" : "text-2xl"} font-semibold dark:text-white`}
   3) Create "Header-Text" with dynamic argument as : {name}
   4) Create dynamic button name as : {buttonComponent}
8) Export default as : Header

#### Setup Frontend : Setup Project - BoardViews mains (complete)

1) Create "BoardView" folder in /client/src/app/projects
2) Create {index.tsx} in /client/src/app/projects/BoardView
3) Create template : tsrafce
4) Change function name from "index" to BoardView
5) Import tools with
   1) Import "useGetTasksQuery, useUpdateTaskStatusMutation" from @/state/api
   2) Import "React" from react
   3) Import "DndProvider, useDrag, useDrop" from react-dnd
   4) Import "HTML5Backend" from react-dnd-html5-backend
   5) Import "Task as TaskType" from @/state/api
   6) Import "EllipsisVertical, MessageSquareMore, Plus" from lucide-react
   7) Import "format" from date-fns
   8) Import "Image" from next/image
6) Create "Props" parameters with
   1) Setup "id" as : string
   2) Setup "setIsModalNewTaskOpen" as : (isOpen: boolean) => void
7) Create array of text with "taskStatus" as : ["To Do", "Work In Progress", "Under Review", "Completed"]
8) Create argument for "BoardView" function as : { id, setIsModalNewTaskOpen }: BoardProps
9) Create "data: tasks, isLoading, error," as : useGetTasksQuery({ projectId: Number(id) })
10) Create "[updateTaskStatus]" as : useUpdateTaskStatusMutation()
11) Create "moveTask" as : (taskId: number, toStatus: string) => {}
    1) Create return "updateTaskStatus" as : { taskId, status: toStatus }
12) Create if-condition for "isLoading" as :  <div>Loading...</div>
13) Create if-condition for "error" as : <div>An error occurred while fetching tasks</div>
14) Create return function with :
    1) Create "DndProvider" tag with backend as : {HTML5Backend}
    2) Create "div" with "className" as : "grid grid-cols-1 gap-4 p-4 md:grid-cols-2 xl:grid-cols-4"
    3) Create "taskStatus.map" function with "status" argument
    4) Create "TaskColumn" tag with
       1) Setup "key" as : {status}
       2) Setup "status" as : {status}
       3) Setup "task" as : {tasks || []}
       4) Setup "moveTask" as : {moveTask}
       5) Setup "setIsModalNewTaskOpen" as : {setIsModalNewTaskOpen}
15) Export default as : BoardView

##### Setup Frontend : Setup Project - BoardViews with TaskColumn(complete)

1) Create "type-Props" parameters with
   1) Setup "status" as : string
   2) Setup "tasks" as : TaskType[]
   3) Setup "moveTask" as : (taskId:number, toStatus: string) => void
   4) Setup "setIsModalNewTaskOpen" as : (isOpen: boolean) => void
2) Create "TaskColumn" function with argument as : {status, tasks, moveTask, setIsModalNewTaskOpen,}: TaskColumnProps
3) Create "{ isOver }, drop" as : useDrop(() => ({})) function
   1) Setup "accept" as : "task"
   2) Setup "drop" as : (item: { id: number }) => moveTask(item.id, status)
   3) Setup "collect" as : (monitor: any) => ({})
      1) Setup "isOver" as : !!monitor.isOver()
4) Create "tasksCount" as : tasks.filter((task) => task.status === status).length
5) Create "statusColor: any" with
   1) Setup "To Do" as : #2563EB
   2) Setup "Work In Progress" as : #059669
   3) Setup "Under Review" as : #D97706
   4) Setup "Completed" as : #000000
6) Create "return" function with
   1) Create "div" with
      1) Setup "ref" function as : {(instance) => {drop(instance);}}
      2) Setup "className" as : {`sl:py-4 rounded-lg py-2 xl:px-2 ${isOver ? "bg-blue-100 dark:bg-neutral-950" : ""}`}
   2) Create "div" with "className" as : "mb-3 flex w-full"
   3) Create "div" with
      1) Setup "className" as : {`w-2 !bg-[${statusColor[status]}] rounded-s-lg`}
      2) Setup "style" as : {{ backgroundColor: statusColor[status] }}
   4) Create "div" with "className" as : "flex w-full items-center justify-between rounded-e-lg bg-white px-5 py-4 dark:bg-dark-secondary"
   5) Create "h3" with "className" as : "flex items-center text-lg font-semibold dark:text-white"
      1) Setup "text" as : {status}{" "}
      2) Create "span" with "className" as : "ml-2 inline-block rounded-full bg-gray-200 p-1 text-center text-sm leading-none dark:bg-dark-tertiary"
      3) Setup "style" as : {{ width: "1.5rem", height: "1.5rem" }}
      4) Setup "text" as : {tasksCount}
   6) Create "div" with "className" as : "flex items-center gap-1"
   7) Create "button" with "className" as : "flex h-6 w-5 items-center justify-center dark:text-neutral-500"
      1) Create "EllipsisVertical" with "size" : 26
   8) Create "button" with "className" as : "flex h-6 w-6 items-center justify-center rounded bg-gray-200 dark:bg-dark-tertiary dark:text-white"
      1) Create "onClick" function as : {() => setIsModalNewTaskOpen(true)}
      2) Create "Plus" with "size" : 16
   9) Create "tasks" with
      1) Setup "tasks.filter" with argument funciton as : (task) => task.status === status
      2) Setup "tasks.map" with argument funciton as : (<Task key={task.id} task={task} />)

##### Setup Frontend : Setup Project - BoardViews with Task(complete)

1) Create "type-Props" as : task: TaskType
2) Create "Task" funciton with argument as : { task }: TaskProps
3) Create "{ isDragging }, drag" as : useDrag(() => ({})) function
   1) Setup "type" as : task
   2) Setup "item" as : { id: task.id }
   3) Setup "collect" as : (monitor: any) => ({})
      1) Setup "isDragging" as : !!monitor.isDragging()
4) Create "taskTagsSplit" as : task.tags ? task.tags.split(",") : [];
5) Create "formattedStartDate" with condition as : task.startDate
   ? format(new Date(task.startDate), "P")
   : ""
6) Create "formattedDueDate" with condition as : task.dueDate
   ? format(new Date(task.dueDate), "P")
   : ""
7) Create "numberOfComments" as : (task.comments && task.comments.length) || 0
8) Create "PriorityTag" function as : ({ priority }: { priority: TaskType["priority"] }) => ()
   1) Create "div" with "className" as : {`rounded-full px-2 py-1 text-xs font-semibold ${priority === "Urgent".....}`}
   2) Setup condition for ""Urgent" with :
   ? "bg-red-200 text-red-700"
   : priority === "High"
   ? "bg-yellow-200 text-yellow-700"
   : priority === "Medium"
   ? "bg-green-200 text-green-700"
   : priority === "Low"
   ? "bg-blue-200 text-blue-700"
   : "bg-gray-200 text-gray-700"
9) Setup "text" as : {priority}
10) Create "return" function with
    1) Create "div" with "ref" function as : {(instance) => {drag(instance);}}
    2) Create "className" for "div" as : `mb-4 rounded-md bg-white shadow dark:bg-dark-secondary ${isDragging..}`}
    3) Create "isDragging" conditon as :
    ? "opacity-50"
    : "opacity-100"
    4) Create "task.attachments" as : task.attachments && task.attachments.length > 0 && (<Image...>)
    5) Create "Image" tag with :
       1) Setup "src" as : {`https://pm-s3-images.s3.us-east-2.amazonaws.com/${task.attachments[0].fileURL}`}
       2) Setup "alt" as : {task.attachments[0].fileName}
       3) Setup "width" as : {400}
       4) Setup "height" as : {200}
       5) Setup "className" as : "h-auto w-full rounded-t-md"
    6) Create "div" with "className" as : "p-4 md:p-6"
       1) Create "div" with "className" as : "flex items-start justify-between"
          1) Create "div" with "className" as : "flex flex-1 flex-wrap items-center gap-2"
          2) Setup "task.priority" with : && <PriorityTag priority={task.priority} />
          3) Create "div" with "className" as : "flex gap-2"
          4) Create "taskTagsSplit.map" function with "tag" argument as : {taskTagsSplit.map((tag) => ())}
             1) Create "div" with "key" as : {tag}
             2) Create "div" with "className" as : "rounded-full bg-blue-100 px-2 py-1 text-xs"
             3) Create "tag" as : {" "}
             4) Create "tag" as : {tag}
          5) Create "button" with "className" as : "flex h-6 w-4 flex-shrink-0 items-center justify-center dark:text-neutral-500"
             1) Create "EllipsisVertical" tag with "size" as : {26}
       2) Create "div" with "className" as : "my-3 flex justify-between"
          1) Create "h4" tag with "className" as : "text-md font-bold dark:text-white"
          2) Setup "h4" text as : {task.title}
          3) Create "typeof" with "task.points" as : "number" && ()
             1) Create "div" with "className" as : "text-xs font-semibold dark:text-white"
             2) Setup "task.points" as : {task.points} pts
       3) Create "div" with "className" as : "text-xs text-gray-500 dark:text-neutral-500"
          1) Setup "formattedStartDate" as : && <span>{formattedStartDate} - </span>
          2) Setup "formattedDueDate" as : && <span>{formattedDueDate}</span>
       4) Create "p" tag with "className" as : "text-sm text-gray-600 dark:text-neutral-500"
          1) Setup "p" tag as : {task.description}
       5) Create "div" with "className" as : "mt-4 border-t border-gray-200 dark:border-stroke-dark"

##### Setup Frontend : Setup Project - BoardViews with Task-User(complete)

***To Show Picture on Local : Copy files from EdRoh Public directory to our Public directory and save page***

1) Create "div" with "className" as : "mt-3 flex items-center justify-between"
2) Create "div" with "className" as : "flex -space-x-[6px] overflow-hidden"
   1) Create "task.assignee" tag with
      1) Create "Image" tag with
      2) Setup "key" as : {task.assignee.userId}
      3) Setup "src" as : {`https://pm-s3-images.s3.us-east-2.amazonaws.com/${task.assignee.profilePictureUrl!}`}
      4) Setup "alt" as : {task.assignee.username}
      5) Setup "width" as : {30}
      6) Setup "height" as : {30}
      7) Setup "className" as : "h-8 w-8 rounded-full border-2 border-white object-cover dark:border-dark-secondary"
   2) Create "task.author" tag with
      1) Create "Image" tag with
      2) Setup "key" as : {task.author.userId}
      3) Setup "src" as : {`https://pm-s3-images.s3.us-east-2.amazonaws.com/${task.author.profilePictureUrl!}`}
      4) Setup "alt" as : {task.author.username}
      5) Setup "width" as : {30}
      6) Setup "height" as : {30}
      7) Setup "className" as : "h-8 w-8 rounded-full border-2 border-white object-cover dark:border-dark-secondary"
3) Create "div" with "className" as : "flex items-center text-gray-500 dark:text-neutral-500"
   1) Create "MessageSquareMore" tag with "size" as : {20}
   2) Create "span" with "className" as : "ml-1 text-sm dark:text-neutral-400"
      1) Setup "span" value as : {numberOfComments}

#### Setup Frontend : Setup Project - ListViews main (Complete)

1) Create "ListView" folder in /client/src/app/projects
2) Create {index.tsx} in /client/src/app/projects/ListView
3) Create template : tsrafce
4) Change function name from "index" to ListView
5) Import tools with :
   1) Import "Header" from @/components/Header
   2) Import "TaskCard" from @/components/TaskCard
   3) Import "Task, useGetTasksQuery" from @/state/api
   4) Import "React" from react
6) Create "Props" parameters with
   1) Setup "id" as : string
   2) Setup "setIsModalNewTaskOpen" as : (isOpen: boolean) => void
7) Create "ListView" function with
   1) Create argument for "ListView" function as : { id, setIsModalNewTaskOpen }: Props
   2) Create "data: tasks, isLoading, error," as : useGetTasksQuery({ projectId: Number(id) })
   3) Create if-condition for "isLoading" as : <div>Loading...</div>
   4) Create if-condition for "error" as : <div>An error occurred while fetching tasks</div>
8) Create return function with :
   1) Create "div" with "className" as : "px-4 pb-8 xl:px-6"
   2) Create "div" with "className" as : "pt-5"
   3) Create "Header" tag with
      1) Setup "name" as : "List"
      2) Setup "buttonComponent" with
         1) Create "button" tag
         2) Create "className" as : "flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
         3) Create "onClick" funciton as : {() => setIsModalNewTaskOpen(true)}
         4) Setup "button-text" as : Add Task
      3) Setup "Header-text" as : isSmallText
   4) Create "div" with "className" as : "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6"
   5) Create "tasks?.map" with "task: Task" argument as : <TaskCard key={task.id} task={task} />
9) Export default as : ListView

#### Setup Frontend : Setup components - TaskCard (Complete)

1) Create "TaskCard" folder in /client/src/components
2) Create {index.tsx} in  /client/src/components/TaskCard
3) Create template : tsrafce
4) Change function name from "index" to TaskCard
5) Import tools with :
   1) Import "Task" from @/state/api
   2) Import "format" from date-fns
   3) Import "Image" from next/image
   4) Import "React" from react
6) Create "Props" parameters with :
   1) Setup "task" as : Task
7) Create "TaskCard" function with
8) Setup argument for "TaskCard" as : { task }: Props
9) Create return function with :
   1) Create "div" with "className" as : "mb-3 rounded bg-white p-4 shadow dark:bg-dark-secondary dark:text-white"
   2) Checking "task.attachments" as : task.attachments && task.attachments.length > 0 && ()
      1) Create "div" tag
      2) Create "strong" tag with "text" as : Attachments:
      3) Create "div" with "className" as : "flex flex-wrap"
      4) Checking "task.attachments" as : task.attachments && task.attachments.length > 0 && ()
      5) Create "Image" tag with
         1) Setup "src" as : {`https://pm-s3-images.s3.us-east-2.amazonaws.com/${task.attachments[0].fileURL}`}
         2) Setup "alt" as : {task.attachments[0].fileName}
         3) Setup "width-Height" as : 400 and 200
         4) Setup "className" as : "rounded-md"
   3) Create "p" tag for "ID" as : <strong>ID:</strong> {task.id}
   4) Create "p" tag for "ID" as : <strong>Title:</strong> {task.title}
   5) Create "p" tag for "Description" as : <strong>Description:</strong>{" "}, {task.description || "No description provided"}
   6) Create "p" tag for "Status" as : <strong>Status:</strong> {task.status}
   7) Create "p" tag for "Priority" as : <strong>Priority:</strong> {task.priority}
   8) Create "p" tag for "Tags" as : <strong>Tags:</strong> {task.tags || "No tags"}
   9) Create "p" tag for "Start Date" as : <strong>Start Date:</strong>{" "}, {task.startDate ? format(new Date(task.startDate), "P") : "Not set"}
   10) Create "p" tag for "Due Date" as : <strong>Due Date:</strong>{" "}, {task.dueDate ? format(new Date(task.dueDate), "P") : "Not set"}
   11) Create "p" tag for "Author" as : <strong>Author:</strong>{" "}, {task.author ? task.author.username : "Unknown"}
   12) Create "p" tag for "Assignee" as :  <strong>Assignee:</strong>{" "}, {task.assignee ? task.assignee.username : "Unassigned"}
10) Export default as : TaskCard

#### Setup Frontend : Setup Project - Timeline main (Complete)

1) Create "TimelineView" folder in /client/src/app/projects
2) Create {index.tsx} in /client/src/app/projects/TimelineView
3) Create template : tsrafce
4) Change function name from "index" to TimelineView
5) Import tools with
   1) Import "useAppSelector" from @/app/redux
   2) Import "useGetTasksQuery" from @/state/api
   3) Import "DisplayOption, Gantt, ViewMode" from gantt-task-react
   4) Import "gantt-task-react/dist/index.css"
   5) Import "React, { useMemo, useState }" from react
6) Create "Props" parameters with :
   1) Setup "id" as : string
   2) Setup "setIsModalNewTaskOpen" as : (isOpen: boolean) => void
7) Create "TaskTypeItems" as : "task" | "milestone" | "project"
8) Create "Timeline" function with :
   1) Setup argument for "Timeline" as : { id, setIsModalNewTaskOpen }: Props
   2) Create "isDarkmode" as : useAppSelector((state) => state.global.isDarkMode)
   3) Create "data:tasks, error, isLoading" as : useGetTasksQuery({ projectId: Number(id) })
   4) Create "[displayOptions, setDisplayOptions]" as : useState<DisplayOption>({})
      1) Setup "viewMode" as : ViewMode.Month,
      2) Setup "local" as : "en-US"
   5) Create "ganttTasks" as : useMemo(() => {return(tasks?.map()...)}, [tasks])
      1) Create "tasks?.map" function as : ((task) => ({}))|| []
      2) Setup "start" as : new Date(task.startDate as string)
      3) Setup "end" as : new Date(task.dueDate as string)
      4) Setup "name" as : task.title
      5) Setup "id" as : `Task-${task.id}`
      6) Setup "type" as : "task" as TaskTypeItems
      7) Setup "progress" as : task.points ? (task.points / 10) * 100 : 0
      8) Setup "isDisable" as : false
   6) Create "handleViewModeChange" function as : (event: React.ChangeEvent<HTMLSelectElement>)=>{}
      1) Create "setDisplayOptions" function as : ((prev) => ({}))
   7) Create if-condition for "isLoading" as : <div>Loading...</div>
   8) Create if-condition for "error" as : <div>An error occurred while fetching tasks</div>
9) Create "return" function for "Timeline" with :
   1) Create "div" with "className" as : "px-4 xl:px-6"
   2) Create "div" with "className" as : "flex flex-wrap items-center justify-between gap-2 py-5"
      1) Create "h1" with "className" as : "me-2 text-lg font-bold dark:text-white"
      2) Create "h1-text" as : Project Tasks Timeline
      3) Create "div" with "className" as : "relative inline-block w-64"
         1) Create "select" tag with :
         2) Setup "className" as : "focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none dark:border-dark-secondary dark:bg-dark-secondary dark:text-white"
         3) Setup "value" as : {displayOptions.viewMode}
         4) Setup "onChange" as : {handleViewModeChange}
         5) Create "option" with "value" as : {ViewMode.Day}
         6) Setup "option-value" as : Day
         7) Create "option" with "value" as : {ViewMode.Week}
         8) Setup "option-value" as : Week
         9) Create "option" with "value" as : {ViewMode.Month}
         10) Setup "option-value" as : Month
      4) Create "div" with "className" as : "overflow-hidden rounded-md bg-white shadow dark:bg-dark-secondary dark:text-white"
         1) Create "div" with "className" as : "timeline"
         2) Create "Gantt" tag with :
            1) Setup "tasks" as : {ganttTasks}
            2) Setup "displayOption" as : {...displayOptions}
            3) Setup "columnWidth" as : {displayOptions.viewMode === ViewMode.Month ? 150 : 100}
            4) Setup "listCellWidth" as : "100px"
            5) Setup "barBackgroundColor" as : {isDarkMode ? "#101214" : "#aeb8c2"}
            6) Setup "barBackgroundSelectedColor" as : {isDarkMode ? "#000" : "#9ba1a6"}
         3) Create "div" with "className" as : "px-4 pb-5 pt-1"
         4) Create "button" with : 
            1) Setup "className" as : "flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
            2) Setup "onClick" function as : {() => setIsModalNewTaskOpen(true)}
            3) Setup "button-text" as : Add New Task
10) Export default as : Timeline
11) Uncomment "TIMELINE STYLING" on {global.css} file

#### Setup Frontend : Setup Project - TableView main (Complete)

0) Install "x-data-grid" version 7.12.0 : npm i @mui/x-data-grid@7.12.0
1) Create "TableView" folder in /client/src/app/projects
2) Create {index.tsx} in /client/src/app/projects/TableView
3) Create template : tsrafce
4) Change function name from "index" to TableView
5) Import tools with :
   1) Import "useAppSelector" from @/app/redux
   2) Import "Header" from @/components/Header
   3) Import "dataGridClassNames, dataGridSxStyles" from @/lib/utils
   4) Import "useGetTasksQuery" from @/state/api
   5) Import "DataGrid, GridColDef" from @mui/x-data-grid
   6) Import "React" from react
6) Create "Props" parameters with :
   1) Setup "id" as : string
   2) Setup "setIsModalNewTaskOpen" as : (isOpen: boolean) => void
7) Create "columns" array as : GridColDef[] = [...]
   1) Create "title" with :
      1) Setup "field" as : "title"
      2) Setup "headerName" as : "Title"
      3) Setup "width" as : 100
   2) Create "description" with :
      1) Setup "field" as : "description"
      2) Setup "headerName" as : "Description"
      3) Setup "width" as : 200
   3) Create "status" with :
      1) Setup "field" as : "status"
      2) Setup "headerName" as : "Status"
      3) Setup "renderCell" as : (params) => (<span>..</span>
         1) Setup "span" with "className" as : "inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
         2) Setup "span-value" as : {params.value}
   4) Create "priority" with :
      1) Setup "field" as : "priority"
      2) Setup "headerName" as : "Priority"
      3) Setup "width" as : 75
   5) Create "tags" with :
      1) Setup "field" as : "tags"
      2) Setup "headerName" as : "Tags"
      3) Setup "width" as : 130
   6) Create "startDate" with :
      1) Setup "field" as : "startDate"
      2) Setup "headerName" as : "Start Date"
      3) Setup "width" as : 130
   7) Create "dueDate" with :
      1) Setup "field" as : "dueDate"
      2) Setup "headerName" as : "Due Date"
      3) Setup "width" as : 130
   8) Create "author" with :
      1) Setup "field" as : "author"
      2) Setup "headerName" as : "Author"
      3) Setup "width" as : 150
      4) Setup "renderCell" as : (params) => params.value?.author || "Unknown"
   9) Create "assignee" with :
      1) Setup "field" as : "assignee"
      2) Setup "headerName" as : "Assignee"
      3) Setup "width" as : 150
      4) Setup "renderCell" as : (params) => params.value?.assignee || "Unassigned"
8) Create "TableView" function with :
   1) Setup argument for "TableView" as : { id, setIsModalNewTaskOpen }: Props
   2) Create "isDarkmode" as : useAppSelector((state) => state.global.isDarkMode)
   3) Create "data:tasks, error, isLoading" as : useGetTasksQuery({ projectId: Number(id) })
   4) Create if-condition for "isLoading" as : <div>Loading...</div>
   5) Create if-condition for "error" as : <div>An error occurred while fetching tasks</div>
9) Create "return" function for "Timeline" with :
   1) Create "div" with "className" as : "h-[540px] w-full px-4 pb-8 xl:px-6"
   2) Create "div" with "className" as : "pt-5"
      1) Create "Header" tag with :
      2) Setup "name" as : "Table"
      3) Setup "buttonComponent" with :
         1) Setup "button" tag with "className" as : "flex items-center rounded bg-blue-primary px-3 py-2 text-white hover:bg-blue-600"
         2) Setup "onClick" function as : {() => setIsModalNewTaskOpen(true)}
         3) Setup "button-text" as : Add Task
      4) Setup "Header-text" as : isSmallText
   3) Create "DataGrid" tag with :
      1) Setup "rows" as : {tasks || []}
      2) Setup "columns" as : {columns}
      3) Setup "className" as : {dataGridClassNames}
      4) Setup "sx" as : {dataGridSxStyles(isDarkMode)}
10) Export default as : TableView

##### Setup Frontend : Create Libraly-Utilities for reusable(Complete)

1) Create "lib" folder in /client/src
2) Create {utils.ts} file in /client/src/lib
3) Export const "dataGridClassNames" as : "border border-gray-200 bg-white shadow dark:border-stroke-dark dark:bg-dark-secondary dark:text-gray-200"
4) Export const "dataGridSxStyles" as : (isDarkMode: boolean) => {return{...}}
   ***Solve "sx" error on "TableView" with "return-function" in "dataGridSxStyles"***
   1) Create "MuiDataGrid-columnHeaders" with :
      1) Setup "color" as : `${isDarkMode ? "#e5e7eb" : ""}`
      2) Setup "rol="row">* " with :
         1) Setup "backgroundColor" as : `${isDarkMode ? "#1d1f21" : "white"}`
         2) Setup "borderColor" as : `${isDarkMode ? "#2d3135" : ""}`
   2) Create "MuiIconbutton-root" with "color" as : `${isDarkMode ? "#a3a3a3" : ""}`
   3) Create "MuiTablePagination-root" with "color" as : `${isDarkMode ? "#a3a3a3" : ""}`
   4) Create "MuiTablePagination-selectIcon" with "color" as : `${isDarkMode ? "#a3a3a3" : ""}`
   5) Create "MuiDataGrid-cell" with "border" as : "none"
   6) Create "MuiDataGrid-row" with "borderBottom" as : `1px solid ${isDarkMode ? "#2d3135" : "e5e7eb"}`
   7) Create "MuiDataGrid-withBorderColor" with "borderColor" as : `${isDarkMode ? "#2d3135" : "e5e7eb"}`

##### Setup Frontend : Create Project Modal for reusable (Complete)

1) Create "Modal" folder in /client/components
2) Create {index.tsx} file in /client/components/Modal
3) Create template as : tsrafce
4) Change function name from "index" to Modal
5) Import tools with :
   1) Import "React" from "react"
   2) Import "ReactDOM" from "react-dom"
   3) Import " Header" from "../Header"
   4) Import "{X}" from "lucide-react"
6) Create "Props" with :
   1) Setup "children" as : React.ReactNode;
   2) Setup "isOpen" as : boolean
   3) Setup "onClose" as : () => void
   4) Setup "name" as : string
7) Create "Modal function with
   1) Create argument for "Modal" function as : { children, isOpen, onClose, name }: Props
   2) Setup if-condition for "isOpen" as : return null
   3) Create "return" fucntion with
      1) Create "ReactDOM.createPortal" function : ReactDOM.createPortal()
      2) Create "div" with "className" as : "fixed inset-0 z-50 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50 p-4"
         1) Create "div" with "className" as : "w-full max-w-2xl rounded-lg bg-white p-4 shadow-lg dark:bg-dark-secondary"
         2) Create "Header" tag with :
            1) Setup "name" as : {name}
            2) Setup "buttonComponent" with:
               1) Create "button" tag with "className" as : "flex h-7 w-7 items-center justify-center rounded-full bg-blue-primary text-white hover:bg-blue-600"
               2) Create "onClick" as : {onClose}
               3) Create "button-text" as : <X size={18} />
            3) Create "Header-text" as : isSmallText
         3) Create "div-text" as : {children}
      3) Create return-value for "ReactDOM.createPortal" as : document.body
8) Export default as : Modal

##### Setup Frontend : Create ModalNewProject (complete)

1) Create "ModalNewProject" in /client/src/app/projects
2) Create {index.tsx} in /client/src/app/projects/ModalNewProject
3) Create template as : tsrafce
4) Change function name from "index" to ModalNewProject
5) Import tools with :
   1) Import "Modal" from @/components/Modal
   2) Import "{useCreateProjectMutation}" from @/state/api
   3) Import "React, { useState }" from react
   4) Import "{formatISO}" from date-fns
6) Create "Props" with :
   1) Setup "isOpen" as : boolean
   2) Setup "onClose" as : () => void
7) Create "ModalNewProject" function with
   1) Create argument for "ModalNewProject" function as : { isOpen, onClose }: Props
   2) Create "createProject, { isLoading }" as : useCreateProjectMutation()
   3) Create "projectName, setProjectName" as : useState("")
   4) Create "description, setDescription" as : useState("")
   5) Create "startDate, setStartDate" as : useState("")
   6) Create "endDate, setEndDate" as : useState("")
   7) Create "handleSubmit" with async function as : async () => {}
      1) Create if-condition for "!projectName || !startDate || !endDate" argument as : return nothing
      2) Create "formattedStartDate" as : formatISO(new Date(startDate), {representation: "complete"})
      3) Create "formattedEndDate" as : formatISO(new Date(endDate), {representation: "complete"})
      4) Create await "createProject" with
         1) Setup "name" as : projectName
         2) Setup "description" as : description
         3) Setup "startDate" as : formattedStartDate
         4) Setup "endDate" as : formattedEndDate
   ***Date have to format with "{formatISO}" from date-fns otherwise it will get an error***
   8) Create "isFormValid" function as : () => {return projectName && description && startDate && endDate}
   9) Create "inputStyles" as : "w-full rounded border border-gray-300 p-2 shadow-sm dark:border-dark-tertiary dark:bg-dark-tertiary dark:text-white dark:focus:outline-none"
8) Create "return" function with
   1) Create "Modal" tag with :
      1) Create "form" with "className" as : "mt-4 space-y-6"
      2) Create "onSubmit" function with : {(e) => {}}
         1) Setup "e" event as : e.preventDefault()
         2) Setup "e" event as : handleSubmit()
      3) Create "input" with :
         1) Setup "type" as : "text"
         2) Setup "className" as : {inputStyles}
         3) Setup "placeholder" as : "Project Name"
         4) Setup "value" as : {projectName}
         5) Setup "onChange" function as : (e) => setProjectName(e.target.value)
      4) Create "textarea" with
         1) Setup "className" as : {inputStyles}
         2) Setup "placeholder" as : "Description"
         3) Setup "value" as : {description}
         4) Setup "onChange" function as : (e) => setDescription(e.target.value)
      5) Create "div" with "className" as : "grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2"
         1) Create "input" with :
            1) Setup "type" as : "date"
            2) Setup "className" as : {inputStyles}
            3) Setup "value" as : {startDate}
            4) Setup "onChange" function as : (e) => setStartDate(e.target.value)
         2) Create "input" with :
            1) Setup "type" as : "date"
            2) Setup "className" as : {inputStyles}
            3) Setup "value" as : {endDate}
            4) Setup "onChange" function as : (e) => setEndDate(e.target.value)
      6) Create "button" with :
         1) Setup "type" as : "submit"
         2) Setup "className" as : {`focus-offset-2 mt-4 flex w-full justify-center rounded-md border border-transparent bg-blue-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 ${
            !isFormValid() || isLoading ? "cursor-not-allowed opacity-50" : "" }`}
         3) Setup "disable" as : {!isFormValid() || isLoading}
         4) Create "text-action" as : {isLoading ? "Creating..." : "Create Project"}
9) Export default as : ModalNewProject

##### Setup Frontend : Create ModalNewTask components (Complete)

1) Create "ModalNewTask" in /client/src/components/
2) Create {index.tsx} in /client/src/components/ModalNewTask
3) Create template as : tsrafce
   ***Or just copy code from "TimelineView" and modify some of part***
4) Change function name from "index" to ModalNewTask
5) Import tools with :
   1) Import "Modal" from "@/components/Modal"
   2) Import "{ Priority, Status, useCreateTaskMutation }" from @/state/api
   3) Import "React, { useState }" from react
   4) Import "{ formatISO }" from date-fns
6) Create "Props" with :
   1) Setup "isOpen" as : boolean
   2) Setup "onClose" function as : () => void
   3) Setup "id?" as : string | null
7) Create "ModalNewTask" function with
   1) Create argument for "ModalNewTask" function as : { isOpen, onClose, id = null }: Props
   2) Create "createTask, { isLoading }" as : useCreateTaskMutation()
   3) Create "title, setTitle" as : useState("")
   4) Create "description, setDescription" as : useState("")
   5) Create "status, setStatus" as : useState<Status>(Status.ToDo)
   6) Create "priority, setPriority" as : useState<Priority>(Priority.Backlog)
   7) Create "tags, setTags" as : useState("")
   8) Create "startDate, setStartDate" as : useState("")
   9) Create "dueDate, setDueDate" as :  useState("")
   10) Create "authorUserId, setAuthorUserId" as : useState("")
   11) Create "assignedUserId, setAssignedUserId" as : useState("")
   12) Create "projectId, setProjectId" as : useState("")
   13) Create "handleSubmit" with "async" function : async () => {...}
       1) Create "if-conditon" with argument as : !title || !authorUserId || !(id !== null || projectId)
       2) Create return-value for "if-conditon" as : return
       3) Create "formattedStartDate" as : formatISO(new Date(startDate), {representation: "complete"})
       4) Create "formattedDueDate" as : formatISO(new Date(dueDate), {representation: "complete"})
       5) Create "await-function" for "createTask" with :
          1) Setup "title" as : title
          2) Setup "description" as : description
          3) Setup "status" as : status
          4) Setup "priority" as : priority
          5) Setup "tags" as : tags
          6) Setup "startDate" as : formattedStartDate
          7) Setup "dueDate" as : formattedDueDate
          8) Setup "authorUserId" as : parseInt(authorUserId)
          9) Setup "assignedUserId" as : parseInt(assignedUserId)
          10) Setup "projectId" as : id !== null ? Number(id) : Number(projectId)
   14) Create "isFormValid" function as : () => {return...}
       1) Setup "return-value" as : title && authorUserId && !(id !== null || projectId)
   15) Create "selectStyles" as : "mb-4 block w-full rounded border border-gray-300 px-3 py-2 dark:border-dark-tertiary dark:bg-dark-tertiary dark:text-white dark:focus:outline-none"
   16) Create "inputStyles" as :"w-full rounded border border-gray-300 p-2 shadow-sm dark:border-dark-tertiary dark:bg-dark-tertiary dark:text-white dark:focus:outline-none"
8) Create "return-function" with
   1) Create "Modal" tag with
      1) Setup "isOpen" as : {isOpen}
      2) Setup "onClose" as : {onClose}
      3) Setup "name" as : "Create New Task"
      4) Create "form" tag with :
         1) Setup "className" as : "mt-4 space-y-6"
         2) Setup "onSubmit" function as : {(e) => {e.preventDefault(); handleSubmit();}}
         3) Create "input" tag with :
            1) Setup "type" as : "text"
            2) Setup "className" as : {inputStyles}
            3) Setup "placeholder" as : "Title"
            4) Setup "value" as : {title}
            5) Setup "onChange" as : {(e) => setTitle(e.target.value)}
         4) Create "textarea" with
            1) Setup "className" as : {inputStyles}
            2) Setup "placeholder" as : "Description"
            3) Setup "value" as : {description}
            4) Setup "onChange" as : {(e) => setDescription(e.target.value)}
         5) Create "div" with "className" as : "grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2"
            1) Create "select" tag with :
               1) Setup "className" as : {selectStyles}
               2) Setup "value" as : {status}
               3) Setup "onChange" function as : (e) => setStatus(Status[e.target.value as keyof typeof Status])
               4) Create "option" with "value=""" as : Select Status
               5) Create "option" with "value={Status.ToDo}" as : To Do
               6) Create "option" with "value={Status.WorkInProgress}" as : Work In Progress
               7) Create "option" with "value={Status.UnderReview}" as : Under Review
               8) Create "option" with "value={Status.Completed}" as : Completed
            2) Create "select" tag with :
               1) Setup "className" as : {selectStyles}
               2) Setup "value" as : {priority}
               3) Setup "onChange" function as : (e) => setPriority(Priority[e.target.value as keyof typeof Priority])
               4) Create "option" with "value=""" as : Select Priority
               5) Create "option" with "value={Priority.Urgent}" as : Urgent
               6) Create "option" with "value={Priority.High}" as :High
               7) Create "option" with "value={Priority.Medium}" as : Medium
               8) Create "option" with "value={Priority.Low}" as : Low
               9) Create "option" with "value={Priority.Backlog}" as : Backlog
         6) Create "input" with :
            1) Setup "type" as : "text"
            2) Setup "className" as : {inputStyles}
            3) Setup "placeholder" as : "Tags (comma separated)"
            4) Setup "value" as : {tags}
            5) Setup "onChange" as : {(e) => setTags(e.target.value)}
         7) Create "div" with "className" as : "grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-2"
            1) Create "input" with :
               1) Setup "type" as : "date"
               2) Setup "className" as : {inputStyles}
               3) Setup "value" as : {startDate}
               4) Setup "onChange" function as : {(e) => setStartDate(e.target.value)}
            2) Create "input" with :
               1) Setup "type" as : "date"
               2) Setup "className" as : {inputStyles}
               3) Setup "value" as : {dueDate}
               4) Setup "onChange" function as : {(e) => setDueDate(e.target.value)}
         8) Create "input" with :
            1) Setup "type" as : "text"
            2) Setup "className" as : {inputStyles}
            3) Setup "placeholder" as : "Author User ID"
            4) Setup "value" as : {authorUserId}
            5) Setup "onChange" function as : {(e) => setAuthorUserId(e.target.value)}
         9) Create "input" with :
            1) Setup "type" as : "text"
            2) Setup "className" as : {inputStyles}
            3) Setup "placeholder" as : "Assigned User ID"
            4) Setup "value" as : {assignedUserId}
            5) Setup "onChange" function as : {(e) => setAssignedUserId(e.target.value)}
         10) Create "id" as : === null && (<input.../>)
             1) Setup "type" as : "text"
             2) Setup "className" as : {inputStyles}
             3) Setup "placeholder" as : "ProjectId"
             4) Setup "value" as : {projectId}
             5) Setup "onChange" function as : {(e) => setProjectId(e.target.value)}
         11) Create "button" tag with :
             1) Setup "type" as : "submit"
             2) Setup "className" as : {`focus-offset-2 mt-4 flex w-full justify-center rounded-md border border-transparent bg-blue-primary px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 ${!isFormValid() || isLoading ? "cursor-not-allowed opacity-50" : ""}`}
             3) Setup "disable" as : {!isFormValid() || isLoading}
         12) Create "status" as : {isLoading ? "Creating..." : "Create Task"}
9) Export default as : ModalNewTask

#### Setup Frontend : Create TimeLine page (Complete)

1) Create "timeline" folder in /client/src/app
2) Create {page.tsx} in /client/src/app/timeline
3) Create template as : tsrafce
4) Change function name from "index" to Timeline
5) Import tools with :
   1) Import "useAppSelector" from @/app/redux
   2) Import "Header" from @/components/Header
   3) Import "useGetProjectsQuery" from @/state/api
   4) Import "DisplayOption, Gantt, ViewMode" from gantt-task-react
   5) Import "gantt-task-react/dist/index.css"
   6) Import "React, { useMemo, useState }" from react
6) Create "type-TaskTypeItems" as : "task" | "milestone" | "project"
7) Create "Timeline" function with
   1) Create "isDarkMode" as : useAppSelector((state) => state.global.isDarkMode)
   2) Create "data: projects, isLoading, isError" as : useGetProjectsQuery()
   3) Create "displayOptions, setDisplayOptions" as : useState<DisplayOption>({})
      1) Setup "viewMode" as : ViewMode.Month
      2) Setup "locale" as : "en-US"
   4) Create "ganttTasks" as "useMemo()" funciton with : (() => {return()}, [projects])
      1) Create "return" with "projects?.map((project)=>({..})) || []"
         1) Setup "start" as : new Date(project.startDate as string)
         2) Setup "end" as : new Date(project.endDate as string)
         3) Setup "name" as : project.name
         4) Setup "id" as : `Project-${project.id}`
         5) Setup "type" as: "project" as TaskTypeItems
         6) Setup "procress" as : 50
         7) Setup "isDisabled" as : false
   5) Create "handleViewModeChange" function with :
      1) Create argument for "handleViewModeChange" as : event: React.ChangeEvent<HTMLSelectElement>
      2) Create "setDisplayOptions" function as : (prev) => ({...prev,viewMode: event.target.value as ViewMode,})
   6) Create if-condition for "isLoading" as : <div>Loading...</div>
   7) Create if-condition for "isError || !projects" as : return <div>An error occurred while fetching projects</div>
8) Create "return" function with
   1) Create "div" with "className" as : "max-w-full p-8"
   2) Create "header" tag with "className" as : "mb-4 flex items-center justify-between"
      1) Create "Header" tag with "name" as : "Projects Timeline"
      2) Create "div" with "className" as : "relative inline-block w-64"
      3) Create "select" tag with :
         1) Setup "className" as : "focus:shadow-outline block w-full appearance-none rounded border border-gray-400 bg-white px-4 py-2 pr-8 leading-tight shadow hover:border-gray-500 focus:outline-none dark:border-dark-secondary dark:bg-dark-secondary dark:text-white"
         2) Setup "value" as : {displayOptions.viewMode}
         3) Setup "onChange" as : {handleViewModeChange}
         4) Create "option" with "value={ViewMode.Day}" as : Day
         5) Create "option" with "value={ViewMode.Week}" as : Week
         6) Create "option" with "value={ViewMode.Month}" as : Month
   3) Create "div" with "className" as : "overflow-hidden rounded-md bg-white shadow dark:bg-dark-secondary dark:text-white"
      1) Create "div" with "className" as : "timeline"
      2) Create "Gantt" tag with
         1) Setup "tasks" as : tasks={ganttTasks}
         2) Setup "displayOptions" as : {...displayOptions}
         3) Setup "columnWidth" as : {displayOptions.viewMode === ViewMode.Month ? 150 : 100}
         4) Setup "listCellWidth" as : "100px"
         5) Setup "projectBackgroundColor" as : {isDarkMode ? "#101214" : "#1f2937"}
         6) Setup "projectProgressColor" as : {isDarkMode ? "#1f2937" : "#aeb8c2"}
         7) Setup "projectProgressSelectedColor" as : {isDarkMode ? "#000" : "#9ba1a6"}
9) Export default as : Timeline

### Setup Backend : Setup Search-Controller (Complete)

1) Create {searchController.ts} in /server/src/controllers
2) Import tools with :
   1) Import "Request, Response" from express
   2) Import "PrismaClient" from @prisma/client
3) Create "prisma" as : new PrismaClient()
4) Create async function for "searcH" with
   1) Create "search" function format as : async (): Promise<void> => {}
   2) Create "request, response" as : (req: Request, res: Response): Promise<void>
   3) Create "{query}" as : req.query
   4) Create "try-catch()" function with :
      1) Create "tasks" as : await prisma.task.findMany({})
         1) Setup "where" as : {or : [..]}
         2) Setup "or" as : { title: { contains: query as string } }, { description: { contains: query as string } },
      2) Create "projects" as : await prisma.project.findMany({})
         1) Setup "where" as : {or : [..]}
         2) Setup "or" as : { name: { contains: query as string } }, { description: { contains: query as string } },
      3) Create "users" as : await prisma.user.findMany({})
         1) Setup "where" as : {or : [..]}
         2) Setup "or" as : { username: { contains: query as string } }
   5) Create "catch-error" as : (error: any) { res.}
      1) Setup "response-error" code as : .status(500)
      2) Setup "response-error" message as : .json({ message: `Error performing search: ${error.message}` })}

### Setup Backend : Setup Search-Route (Complete)

1) Create {searchRoutes.ts} in /server/src/routes
2) Import tools with :
   1) Import "Router" from express
   2) Import "search" from ../controllers/searchController
3) Create "router" as : Router()
4) Create "router-root" for "search" as : router.get("/", search)
5) Export default as : router

## Setup Backend : Adding Server-Route for SEARCH

1) Go to {index.ts} in /server/src
2) Uncomment on : Import searchRoutes from ./routes/searchRoutes
3) Uncomment on : app.use("/search", searchRoutes)

### Setup Frontend : Setup Search API and Interface

1) Go to {api.ts} in /client/src/state
2) Uncomment "search-interface"
3) Uncomment "search-API"
4) Uncomment "useSearchQuery" from "export" api

#### Setup Frontend : Create Search page (Complete)

***Install more tool "lodash" : npm i lodash@4.17.21 and npm i -D @types/lodash@4.17.7***

1) Create "search" folder in /client/src/app directory
2) Create {page.tsx} in /client/src/app/search directory
3) Create "use client" on top of file to specify : this is main page
4) Import tools with :
   1) Import "Header" from @/components/Header
   2) Import "ProjectCard" from @/components/ProjectCard
   3) Import "TaskCard" from @/components/TaskCard
   4) Import "UserCard" from @/components/UserCard
   5) Import "useSearchQuery" from @/state/api
   6) Import "debounce" from lodash
   7) Import "React, { useEffect, useState }" from react
5) Create "Search" function with :
   1) Create "[searchTerm, setSearchTerm]" as : useState("")
   2) Create functions with argument "data: searchResults, isLoading, isError," as : useSearchQuery(searchTerm, {skip: searchTerm.length < 3,})
   3) Create "handleSearch" with "debounce" function as : debounce((event: React.ChangeEvent<HTMLInputElement>) => {setSearchTerm(event.target.value);},500)
   4) Create "useEffect" function as : () => {return handleSearch.cancel;}, [handleSearch.cancel])
6) Create "return" function with :
   1) Create "div" with "className" as : "p-8"
      1) Create "Header" tag with "name" as : "Search"
      2) Create "div" with "input" as :
         1) Setup "type" as : "text"
         2) Setup "placeholder" as : "Search..."
         3) Setup "className" as : "w-1/2 rounded border p-3 shadow"
         4) Setup "onChange" as : {handleSearch}
      3) Create "div" with "className" as : "p-5"
      4) Create "isLoading" with "paragraph" as : Loading...
      5) Create "isError" with "paragraph" as : Error occurred while fetching search results.
      6) Create "!isLoading && !isError && searchResults && div()" tag with :
         1) Create "searchResults.tasks " check with : searchResults.tasks?.length > 0 && && (<h2>Tasks</h2>)
            1) Create "searchResults.tasks?.map" function as : (task) => (<TaskCard key={task.id} task={task} />)
         2) Create "searchResults.projects" check with : searchResults.projects?.length > 0 && (<h2>Projects</h2>)
            1) Create "searchResults.projects?.map" funciton as : (project) => (<ProjectCard key={project.id} project={project} />)
         3) Create "searchResults.users" check with : searchResults.users?.length > 0 && (<h2>Users</h2>)
            1) Create "searchResults.users?.map" function as : (user) => ( <UserCard key={user.userId} user={user} />)
7) Export default as : Search

#### Setup Frontend : Setup components - ProjectCard (Complete)

1) Create "ProjectCard" folder in /client/src/components
2) Create {index.tsx} in  /client/src/components/ProjectCard
3) Create template : tsrafce
4) Change function name from "index" to ProjectCard
5) Import tools with :
   1) Import "Project" from @/state/api
   2) Import "React" from react
6) Create "Props" with :
   1) Setup "project" as : Project
7) Create "ProjectCard" function with : 
   1) Create argument for "ProjectCard" function as : { project }: Props
8) Create "return" function with
   1) Create "div" with "className" as : "rounded border p-4 shadow"
   2) Create "h3" tag as : {project.name}
   3) Create "paragraph" tag as : {project.description}
   4) Create "paragraph" tag as : Start Date: {project.startDate}
   5) Create "paragraph" tag as : End Date: {project.endDate}
9) Export default as : ProjectCard

#### Setup Frontend : Setup components - UserCard (Complete)

1) Create "UserCard" folder in /client/src/components
2) Create {index.tsx} in  /client/src/components/UserCard
3) Create template : tsrafce
4) Change function name from "index" to UserCard
5) Import tools with :
   1) Import "User" from @/state/api
   2) Import "Image" from next/image
   3) Import "React" from react
6) Create "Props" with :
   1) Setup "user" as : User
7) Create "UserCard" function with :
   1) Create argument for "UserCard" function as : { user }: Props
8) Create "return" function with
   1) Create "div" with "className" as : "flex items-center rounded border p-4 shadow"
   2) Create "user.profilePictureUrl" as "Image" tag with :
      1) Setup "src" as : {`https://pm-s3-images.s3.us-east-2.amazonaws.com/p1.jpeg`}
      2) Setup "alt" as : "profile picture"
      3) Setup "width-height" as : 32, 32
      4) Create "className" as : "rounded-full"
   3) Create "div" tag with :
      1) Create "h3" tag as : {user.username}
      2) Create "paragraph" tag as : {user.email}
9) Export default as : UserCard

#### Setup Frontend : Setup Setting page (Complete)

1) Create "settings" folder in /client/src/app
2) Create {page.tsx} in /client/src/app/settings
3) Create template : tsrafce
4) Change function name from "index" to Settings
5) Import tools with :
   1) Import "Header" from @/components/Header
   2) Import "React" from react
6) Create "Settings" function with :
   1) Create "userSettings" with :
      1) Setup "username" as : "johndoe"
      2) Setup "email" as : "john.doe@example.com"
      3) Setup "teamName" as : "Development Team"
      4) Setup "roleName" as : "Developer"
   2) Create "labelStyles" as : "Developer""block text-sm font-medium dark:text-white"
   3) Create "textStyles " as : "mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 dark:text-white"
7) Create "return" function for "Settings" with :
   1) Create "div" with "className" as : "p-8"
      1) Create "Header" tag with "name" as : "Settings"
      2) Create "div" with "className" as : "space-y-4"
         1) Create "div" with :
            1) Create "label" tag with "className" as :{labelStyles}>Username
            2) Create "div" with "className" as : {textStyles}>{userSettings.username}
         2) Create "div" with :
            1) Create "label" tag with "className" as :{labelStyles}>Email
            2) Create "div" with "className" as : {textStyles}>{userSettings.email}
         3) Create "div" with :
            1) Create "label" tag with "className" as :{labelStyles}>Team
            2) Create "div" with "className" as : {textStyles}>{userSettings.teamName}
         4) Create "div" with :
            1) Create "label" tag with "className" as :{labelStyles}>Role
            2) Create "div" with "className" as : {textStyles}>{userSettings.roleName}
8) Export default as : Settings

### Setup Backend : Setup userController page (Complete)

1) Create {userController.ts} in /server/src/controllers directory
2) Import controllers tools
   1) Import "Request and Response" from express
   2) Import "PrismaClient" from @prisma/client
   3) Create "prisma" as : new PrismaClient()
3) Create "users" function as : getUsers, getUsers, postUser, getUserTasks
4) Create "getUsers" function with :
   1) Create "argument" as : async (req: Request, res: Response): Promise<void>
   2) Create "try" function with :
      1) Setup "users" as : await prisma.user.findMany()
      2) Setup "response" as : res.json(users)
   3) Create "catch" function with :
      1) Setup "argument" as : error:any
      2) Setup "response" as : res.status(500)
      3) Setup "response" as : res.json({ message: `Error retrieving users: ${error.message}` })
5) Create "getUser" function with :
   1) Create "argument" as : async (req: Request, res: Response): Promise<void>
   2) Create "cognitoId" as : req.params
   3) Create "try" function with :
      1) Setup "users" as :await prisma.user.findUnique({})
         1) Setup "where" as : {cognitoId: cognitoId}
      2) Setup "response" as : res.json(user)
   4) Create "catch" function with :
      1) Setup "argument" as : error:any
      2) Setup "response" as : res.status(500)
      3) Setup "response" as : res.json({ message: `Error retrieving user: ${error.message}` })
6) Create "postUser" function with :
   1) Create "argument" as : async (req: Request, res: Response)
   2) Create "try" function with :
      1) Create "req.body" with :
         1) Setup "username" as : username
         2) Setup "cognitoId" as : cognitoId
         3) Setup "profilePictureUrl" as : "i1.jpg"
         4) Setup "teamId" as : 1
      2) Create "newUser" as : await prisma.user.create({})
         1) Setup "data" as : username, cognitoId, profilePictureUrl, teamId,
      3) Create "res.json" as : { message: "User Created Successfully", newUser }
   3) Create "catch" function with :
      1) Setup "argument" as : error:any
      2) Setup "response" as : res.status(500)
      3) Setup "response" as : res.json({ message: `Error retrieving users: ${error.message}` })

### Setup Backend : Setup userRoute page

1) Import tools with :
   1) Import "Router" from express
   2) Import "getUser, getUsers, postUser" from ../controllers/userController
2) Create "router" as : Router()
3) Create "get" router "getUsers" as : router.get("/", getUsers)
4) Create "post" router "postUser" as : router.post("/", postUser)
5) Create "get" router for "cognitoId" as : router.get("/:cognitoId", getUser)
6) Export default as : router

#### Setup Backend : Checking setup userRoutes on "index.ts" file

1) Checking "import-userRoutes" from ./routes/userRoutes"
2) Checking "app.use-users" as : app.use("/users", userRoutes);

### Setup Frontend : Checking setup Users on "api.ts" file

1) Checking added "Users" to "tagTypes"
2) Checking "getUsers" as : build.query<User[], void>
3) Checking added "useGetUsersQuery" to Export const

#### Setup Frontend : Setup Users page (complete)

1) Create "users" folder in /client/src/app
2) Create {page.tsx} in /client/src/app/users
3) Create template : tsrafce
4) Change function name from "index" to Users
5) Create "use client" on top of file
6) Import tools with :
   1) Import "useGetUsersQuery" from "@/state/api"
   2) Import "React" from "react"
   3) Import "useAppSelector" from "../redux"
   4) Import "Header" from "@/components/Header"
   5) Import "DataGrid, GridColDef, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton, from "@mui/x-data-grid"
   6) Import "Image" from "next/image"
   7) Import "dataGridClassNames, dataGridSxStyles" from "@/lib/utils"
7) Create "CustomToolbar" function with : 
   1) Create "GridToolbarContainer" with "className" as : "toolbar flex gap-2"
   2) Create "GridToolbarFilterButton" and "GridToolbarExport"
8) Create "columns" as : GridColDef[] = []
   1) Create "userID" field :
      1) Setup "field" as : "userId"
      2) Setup "headerName" as : "ID"
      3) Setup "width" as : 100
   2) Create "Username" field :
      1) Setup "field" as : "username"
      2) Setup "headerName" as : "Username"
      3) Setup "width" as : 150
   3) Create ""Profile Picture"" field :
      1) Setup "field" as : "profilePictureUrl"
      2) Setup "headerName" as : "Profile Picture"
      3) Setup "width" as : 100
      4) Setup "renderCell" as : (params) => ()
         1) Create "div" with "className" as : "flex h-full w-full items-center justify-center"
         2) Create "div" with "className" as : "h-9 w-9"
         3) Create "Image" tag with :
            1) Setup "src" as : {`https://pm-s3-images.s3.us-east-2.amazonaws.com/${params.value}`}
            ***Local file : src="/logo.png"***
            2) Setup "alt" as : {params.row.username}
            3) Setup "width" as : {100}
            4) Setup "height" as : {50}
            5) Setup "className" as : "h-full rounded-full object-cover"
9) Create "Users" function as : Users = () => {}
   1) Create "{ data: users, isLoading, isError }" as : useGetUsersQuery()
   2) Create "isDarkMode" as : useAppSelector((state) => state.global.isDarkMode)
   3) Create if-condition for "isLoading" then return : <div>Loading...</div>
   4) Create if-condition for "isError || !users" then return : <div>Error fetching users</div>
10) Create "return" function for "User" with :
    1) Create "div" with "className" as : "flex w-full flex-col p-8"
    2) Create "Header" tag with "name" as : "Users"
    3) Create "div" with "style" as : {{ height: 650, width: "100%" }}
    4) Create "DataGrid" with :
       1) Setup "rows" as : {users || []}
       2) Setup "columns" as : {columns}
       3) Setup "getRowId" as : {(row) => row.userId}
       4) Setup "pagination" as : pagination
       5) Setup "Slots" as : {{toolbar: CustomToolbar,}}
       6) Setup "className" as : {dataGridClassNames}
       7) Setup "sx" as : {dataGridSxStyles(isDarkMode)}
11) Export default as : Users

### Setup Backend : Setup Teams routes and controllers

#### Setup Backend : Setup "teamController" (complete)

1) Create {teamController.ts} in /server/src/controllers
2) Import tools with :
   1) Import "Request, Response" from express
   2) Import "PrismaClient" from @prisma/client
3) Create "prisma" as : new PrismaClient()
4) Create "getTeams" function as : async():Promise<void> => {}
   1) Create "getTeams" argument as : req: Request, res: Response
   2) Create "try" function with :
      1) Create "teams" as : await prisma.team.findMany()
      2) Create "teamsWithUsernames" as : await Promise.all()
         1) Create "teams.map" function as : async () => {}
         2) Create "teams.map" argument as : (team: any)
            1) Create "productOwner" as :  await prisma.user.findUnique({})
               1) Setup "where" as : { userId: team.productOwnerUserId! }
               2) Setup "select" as : { username: true }
            2) Create "projectManager" as : await prisma.user.findUnique({})
               1) Setup "where" as : { userId: team.projectManagerUserId! }
               2) Setup "select" as : { username: true }
            3) Create "return" value with :
               1) Setup "team" as : ...team
               2) Setup "productOwnerUsername" as : productOwner?.username
               3) Setup "projectManagerUsername" as : projectManager?.username 
      3) Create "res.json" argument as : teamsWithUsernames
   3) Create "catch-error" function with :
      1) Create "error" argument as : error: any
      2) Setup "error" status as : res.status(500)
      3) Setup "error" message as : res.json({ message: `Error retrieving teams: ${error.message}` })

#### Setup Backend : Setup "teamRoutes" (Complete)

1) Create {teamRoutes.ts} in /server/src/routes
2) Import tools with :
   1) Import "Router" from "express"
   2) Import "getTeams" from "../controllers/teamController"
3) Create "router" function as : Router()
4) Create "getTeams" router as : router.get("/", getTeams)
5) Export default as : router

#### Setup Backend : Checking setup teamRoutes on "index.ts" file

1) Checking {index.ts} file in /server/src directory
2) Checking "import-teamRoutes" from ./routes/teamRoutes"
3) Checking "app.use-teams" as : app.use("/teams", teamRoutes);

### Setup Frontend : Checking setup Teams on "api.ts" file

1) Go to {api.ts} in /client/state
2) Checking "team-interface" setup
3) Checking "getTeams-build.query" setup
4) Checking "tagTypes" added : Teams
5) Checking export : useGetTeamsQuery

#### Setup Frontend : Setup Teams page(Complete)

1) Create "teams" folder in /client/src/app
2) Create {page.tsx} in /client/src/app/teams
3) Create template : tsrafce
4) Change function name from "index" to Teams
5) Create "use client" on top of file
6) Remove "type Props" and "props" argument
7) Import tools with :
   1) Import "useGetTeamsQuery" from @/state/api
   2) Import "React" from react
   3) Import "useAppSelector" from ../redux
   4) Import "Header" from @/components/Header
   5) Import "DataGrid, GridColDef, GridToolbarContainer, GridToolbarExport, GridToolbarFilterButton, from "@mui/x-data-grid"
   6) Import "dataGridClassNames, dataGridSxStyles" from "@/lib/utils"
8) Create "CustomToolbar" function with :
   1) Create "GridToolbarContainer" with "className" as : "toolbar flex gap-2"
   2) Create "GridToolbarFilterButton" tag
   3) Create "GridToolbarExport" tag
9) Create "columns: GridColDef[]" with :
   1) Create field "id" with :
      1) Setup "field" as : "id"
      2) Setup "headerName" as : "Team ID"
      3) Setup "width" as : 100
   2) Create field "teamName" with :
      1) Setup "field" as : "teamName"
      2) Setup "headerName" as : "Team Name"
      3) Setup "width" as : 200
   3) Create field "productOwnerUsername" with :
      1) Setup "field" as : "productOwnerUsername"
      2) Setup "headerName" as : "Product Owner"
      3) Setup "width" as : 200
   4) Create field "projectManagerUsername" with :
      1) Setup "field" as : "projectManagerUsername"
      2) Setup "headerName" as : "Project Manager"
      3) Setup "width" as : 200
10) Create "Teams" funciton with
    1) Create "data: teams, isLoading, isError" as : useGetTeamsQuery()
    2) Create "isDarkMode" as : useAppSelector((state) => state.global.isDarkMode)
    3) Create if-condition for "isLoading" then return : <div>Loading...</div>
    4) Create if-condition for "isError || !teams" them return : <div>Error fetching teams</div>
11) Create "return" funciton with
    1) Create "div" with "className" as : "flex w-full flex-col p-8"
    2) Create "Header" with "Name" as : "Teams"
    3) Create "div" with "style" as : height: 650, width: "100%"
    4) Create "DataGrid" with
       1) Setup "rows" as : {teams || []}
       2) Setup "columns" as : {columns}
       3) Setup "pagination" as : pagination
       4) Setup "slots" as : "toolbar: CustomToolbar"
       5) Setup "className" as : dataGridClassNames
       6) Setup "sx" as : dataGridSxStyles(isDarkMode)
12) Export default as : Teams

#### Setup Frontend : Setup Home page with simple (Complete)

1) Create "home" in folder in /client/src/app
2) Create {page.tsx} in folder in /client/src/app/home
3) Create template : tsrafce
4) Change function name from "index" to HomePage
5) Create "use client" on top of file
6) Remove "type Props" and "props" argument
7) Import tools with :
   1) Import "Priority, Project, Task, useGetProjectsQuery, useGetTasksQuery from @/state/api
   2) Import "React" from react
   3) Import "useAppSelector" from ../redux
   4) Import "DataGrid, GridColDef" from @mui/x-data-grid
   5) Import "Header" from @/components/Header
   6) Import "Bar, BarChart, CartesianGrid, Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis" from recharts
   7) Import "dataGridClassNames, dataGridSxStyles" from @/lib/utils
8) Create "taskColumns: GridColDef[]" array with 
   1) Create field "title" with :
      1) Setup "field" as : "title"
      2) Setup "headerName" as : "Title"
      3) Setup "width" as : 200
   2) Create field "status" with :
      1) Setup "field" as : "status"
      2) Setup "headerName" as : "Status"
      3) Setup "width" as : 150
   3) Create field "priority" with :
      1) Setup "field" as : "priority"
      2) Setup "headerName" as : "Priority"
      3) Setup "width" as : 150
   4) Create field "dueDate" with :
      1) Setup "field" as : "dueDate"
      2) Setup "headerName" as : "Due Date"
      3) Setup "width" as : 150
9) Create "COLORS" array as : ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"]
10) Create "HomePage" function as :
    1) Create "data: tasks, isLoading: tasksLoading, isError: tasksError" as : useGetTasksQuery({ projectId: parseInt("1") })
    *** "1" is project number we can change manually or adding function to be better functionality***
    2) Create "data: projects, isLoading: isProjectsLoading" as : useGetProjectsQuery()
    3) Create "isDarkMode" as : useAppSelector((state) => state.global.isDarkMode)
    4) Create if-condition for "tasksLoading || isProjectsLoading" then return : <div>Loading...</div>
    5) Create if-condition for "tasksError || !tasks || !projects" them return : <div>Error fetching data</div>
    6) Create "priorityCount" as : tasks.reduce(..)
       1) Create "acc: Record<string, number>, task: Task" as : ()=>{}
       2) Setup "priority" as : task
       3) Setup "acc[priority as Priority]" as : (acc[priority as Priority] || 0) + 1
       4) Setup "return" value as : acc
       5) Setup "empty-value" as : {}
    7) Create "taskDistribution" function as : Object.keys(priorityCount).map((key) => ({}))
       1) Setup "name" as : key
       2) Setup "count" as : priorityCount[key]
    8) Create "statusCount" as : projects.reduce(..)
       1) Create "acc: Record<string, number>, project: Project" as : ()=>{}
       2) Setup "status" as : project.endDate ? "Completed" : "Active"
       3) Setup "acc[status]" as : (acc[status] || 0) + 1
       4) Setup "return" value as : acc
       5) Setup "empty-value" as : {}
    9) Create "projectStatus" function as : Object.keys(statusCount).map((key) => ({}))
       1) Setup "name" as : key
       2) Setup "count" as : statusCount[key]
    10) Create "chartColors" for "isDarkMode and isLightMode"
        1) Setup for "isDarkMode" with
           1) Setup "bar" as : "#8884d8"
           2) Setup "barGrid" as : "#303030"
           3) Setup "pieFill" as : "#4A90E2"
           4) Setup "text" as : "#FFFFFF"
        2) Setup for "isLightMode" with
           1) Setup "bar" as : "#8884d8"
           2) Setup "barGrid" as : "#E0E0E0"
           3) Setup "pieFill" as : "#82ca9d"
           4) Setup "text" as : "#000000"
11) Create "return" function with :
    1) Create "div" with "className" as : "container h-full w-[100%] bg-gray-100 bg-transparent p-8"
    2) Create "Header" tag with "name" as : "Project Management Dashboard"
    3) Create "div" with "className" as : "grid grid-cols-1 gap-4 md:grid-cols-2"
    4) Create "div" with "className" as : "rounded-lg bg-white p-4 shadow dark:bg-dark-secondary"
       1) Create "h3" tag with "className" as : "mb-4 text-lg font-semibold dark:text-white"
       2) Create "h3-text" as : Task Priority Distribution
       3) Create "ResponsiveContainer" tag with : width="100%" height={300}
       4) Create "BarChart" with "data" as : {taskDistribution}
       5) Create "CartesianGrid" with :
          1) Setup "strokeDasharray" as : "3 3"
          2) Setup "stroke" as : {chartColors.barGrid}
       6) Create "XAxis" with :
          1) Setup "dataKey" as : "name"
          2) Setup "stroke" as : {chartColors.text}
       7) Create "YAxis" with :
          1) Setup "stroke" as : {chartColors.text}
       8) Create "Tooltip" with "contentStyle" as :  width: "min-content", height: "min-content",
       9) Create "Legend" as : Legend
       10) Create "Bar" with :
           1) Setup "dataKey" as : "count"
           2) Setup "fill" as : {chartColors.bar}
    5) Create "div" with "className" as : "rounded-lg bg-white p-4 shadow dark:bg-dark-secondary"
       1) Create "h3" tag with "className" as : "mb-4 text-lg font-semibold dark:text-white"
       2) Create "h3-text" as : Project Status
    6) Create "ResponsiveContainer" tag with : width="100%" height={300}
    7) Create "PieChart" with :
       1) Create "Pie" with :
          1) Setup "dataKey" as : "count"
          2) Setup "data" as : {projectStatus}
          3) Setup "fill" as : "#82ca9d"
          4) Setup "label" as : label
       2) Create "projectStatus.map" funciton with :
          1) Setup argument as : (entry, index)
          2) Setup "Cell-key" as : {`cell-${index}`}
          3) Setup "fill" as : {COLORS[index % COLORS.length]}
       3) Create "Tooltip" as :  Tooltip
       4) Create "Legend" as : Legend
    8) Create "div" with "className" as : "rounded-lg bg-white p-4 shadow dark:bg-dark-secondary md:col-span-2"
    9) Create "h3" with "className" as : "mb-4 text-lg font-semibold dark:text-white"
    10) Create "h3-text" as : Your Tasks
    11) Create "div" with "style" as : { height: 400, width: "100%" }
    12) Create "DataGrid" with :
        1) Setup "rows" as : {tasks}
        2) Setup "columns" as : {taskColumns}
        3) Setup "checkboxSelection" as : checkboxSelection
        4) Setup "loading" as : {tasksLoading}
        5) Setup "getRowClassName" as : {() => "data-grid-row"}
        6) Setup "getCellClassName" as : {() => "data-grid-cell"}
        7) Setup "className" as : {dataGridClassNames}
        8) Setup "sx" as : {dataGridSxStyles(isDarkMode)}
12) Export default as : HomePage

### Setup Frontend : Setup HomePage-cont (Complete)

1) Go to {page.tsx} in /client/src/app
2) Modify "return" function with :
   1) Changing "main" tag with "className" to : HomePage route
   2) Import "HomePage" from ./home/page
   *** Multi line comment (Block comment) : shift + alt + a***

#### Setup Backend : Setup taskController - GetUserTask(Recheck)

1) Go to {taskController.ts} in /server/src/controllers
2) Checking "getUserTasks" function was created

#### Setup Backend : Setup taskRoutes - GetUserTask(Recheck)

1) Go to {taskRoutes.ts} in /server/src/routes
2) Checking "getUserTasks" was imported
3) Checking "getUserTasks" routes was created

#### Setup Frontend : Setup API-Body(Recheck)

1) Go to {api.ts} in /client/src/state
2) Checking "getTasksByUser" API was created(under getTask)
3) Checking "useGetTasksByUserQuery" was exported

#### Setup Frontend : Setup Priority-Reusable-Page

1) Create "priority" folder in /client/src/app
2) Create "reusablePriorityPage" folder in /client/src/app/priority
3) Create {index.tsx} file in /client/src/app/priority/reusablePriorityPage
4) Create template : tsrafce
5) Change function name from "index" to ReusablePriorityPage
6) Create "use client" on top of file
7) Create "type Props" with : priority: Priority
8) Import tools with :
   1) Import "useAppSelector" from @/app/redux
   2) Import "Header" from @/components/Header
   3) Import "ModalNewTask" from @/components/ModalNewTask
   4) Import "TaskCard" from @/components/TaskCard
   5) Import "dataGridClassNames, dataGridSxStyles" from @/lib/utils
   6) Import "Priority, Task, useGetAuthUserQuery, useGetTasksByUserQuery" from @/state/api
   7) Import "DataGrid, GridColDef" from @mui/x-data-grid
   8) Import "React, { useState }" from react
9) Create "columns: GridColDef[]" with :
   1) Create field "title" with :
      1) Setup "field" as : "title"
      2) Setup "headerName" as : "Title"
      3) Setup "width" as : 100
   2) Create field "description" with :
      1) Setup "field" as : "description"
      2) Setup "headerName" as : "Description"
      3) Setup "width" as : 200
   3) Create field "status" with :
      1) Setup "field" as : "status"
      2) Setup "headerName" as : "Status"
      3) Setup "width" as : 130
      4) Setup "renderCell" function as : (params) => (..)
         1) Create "span" with "className" as : "inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
         2) Create "span-value" as : {params.value}
   4) Create field "priority" with :
      1) Setup "field" as : "priority"
      2) Setup "headerName" as : "Priority"
      3) Setup "width" as : 75
   5) Create field "tags" with :
      1) Setup "field" as : "tags"
      2) Setup "headerName" as : "Tags"
      3) Setup "width" as : 130
   6) Create field "startDate" with :
      1) Setup "field" as : "startDate"
      2) Setup "headerName" as : "Start Date"
      3) Setup "width" as : 130
   7) Create field "dueDate" with :
      1) Setup "field" as : "dueDate"
      2) Setup "headerName" as : "Due Date"
      3) Setup "width" as : 130
   8) Create field "author" with :
      1) Setup "field" as : "author"
      2) Setup "headerName" as : "Author"
      3) Setup "width" as : 150
      4) Setup "renderCell" function as : (params) => params.value.username || "Unknown"
   9) Create field "assignee" with :
      1) Setup "field" as : "assignee"
      2) Setup "headerName" as : "Assignee"
      3) Setup "width" as : 150
      4) Setup "renderCell" function as : (params) => params.value.username || "Unassigned"
10) Create "ReusablePriorityPage" function with argument as : { priority }: Props
    1) Create "view, setView" as : useState("list")
    2) Create "isModalNewTaskOpen, setIsModalNewTaskOpen" as : useState(false)
    3) Create "data: currentUser" as : useGetAuthUserQuery({})
    4) Create "userId" as : urrentUser?.userDetails?.userId ?? null
    5) Create "data:tasks, isLoading, isError: isTasksError" as : useGetTasksByUserQuery(userId || 0, {skip: userId === null,})
    6) Create "isDarkMode" as : useAppSelector((state) => state.global.isDarkMode)
    7) Create "filteredTasks" as : tasks?.filter((task: Task) => task.priority === priority,)
    8) Create if-condition for "isTasksError || !tasks" argument then return : <div>Error fetching tasks</div>

***Setup this after complete setup ModalNewTask***
11) Create "return" function with :
    1) Create "div" with "className" as : "m-5 p-4"
    2) Create "ModalNewTask" tag with :
       1) Setup "isOpen" as : {isModalNewTaskOpen}
       2) Setup "onClose" as : {() => setIsModalNewTaskOpen(false)}
    3) Create "Header" tag with :
       1) Setup "Name" as : "Priority Page"
       2) Setup "buttonComponent" with :
          1) Create "button" tag with "className" as : "mr-3 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          2) Create "button" tag with "onClick" as : {() => setIsModalNewTaskOpen(true)}
          3) Create "button-text" as : Add Task
    4) Create "div" with "className" as : "mb-4 flex justify-start"
       1) Create "button" tag with "className" as : {`px-4 py-2 ${view === "list" ? "bg-gray-300" : "bg-white"} rounded-l`}
       2) Create "button" tag with "onClick" as : {() => setView("list")}
       3) Create "button-text" as : List
       4) Create "button" tag with "className" as : {`px-4 py-2 ${view === "table" ? "bg-gray-300" : "bg-white"} rounded-l`}
       5) Create "button" tag with "onClick" as : {() => setView("table")}
       6) Create "button-text" as : Table
    5) Create "isLoading" ternary function with :
       1) Create "isLoading-text" as : Loading tasks...
       2) Create "isLoading" for "view === "list"" with :
          1) Create "div" with "className" as : "grid grid-cols-1 gap-4"
          2) Create "filteredTasks?.map" function with :
             1) Setup "argument" as : (task: Task)
             2) Setup "TaskCard-key" as : {task.id}
             3) Setup "TaskCard-task" as : {task}
       3) Create "isLoading" for "view === "table"" with :
          1) Create "filteredTasks" with :
          2) Create "div" with "className" as : "z-0 w-full"
          3) Create "DataGrid" with :
             1) Setup "rows" as : {filteredTasks}
             2) Setup "columns" as : {columns}
             3) Setup "checkboxSelection" as : checkboxSelection
             4) Setup "getRowId" as : {(row) => row.id}
             5) Setup "className" as : {dataGridClassNames}
             6) Setup "sx" as : {dataGridSxStyles(isDarkMode)}
12) Export default as : ReusablePriorityPage

#### Setup Frontend : Setup API-Body(Recheck-getAuthUser)

1) Go to {api.ts} in /client/src/state
2) Install tools-chains package : npm i @aws-amplify/ui-react@6.2.0 aws-amplify@6.5.1
3) Checking import "fetchAuthSession, getCurrentUser" from aws-amplify/auth
4) Checking "getAuthUser" was created
5) Checking "useGetAuthUserQuery" was exported
6) Checking "ModalNewTask" was completed(Completed)

#### Setup Frontend : Setup Priority-backlog (Complete)

1) Create "backlog" folder in /client/src/app/priority
2) Create {page.tsx} file in /client/src/app/priority/backlog
3) Create template : tsrafce
4) Change function name from "page" to "Urgent"
5) Remove "type Props" and "props" argument
6) Import tools with :
   1) Import "React" from react
   2) Import "ReusablePriorityPage" from ../reusablePriorityPage
   3) Import "{ Priority }" from @/state/api
7) Create "return" function with :
   1) Create "ReusablePriorityPage" with "priority" as : {Priority.Backlog}
8) Export defualt as : Urgent

#### Setup Frontend : Setup Priority-high (Complete)

1) Create "high" folder in /client/src/app/priority
2) Create {page.tsx} file in /client/src/app/priority/high
3) Create template : tsrafce
4) Change function name from "page" to "Urgent"
5) Remove "type Props" and "props" argument
6) Import tools with :
   1) Import "React" from react
   2) Import "ReusablePriorityPage" from ../reusablePriorityPage
   3) Import "{ Priority }" from @/state/api
7) Create "return" function with :
   1) Create "ReusablePriorityPage" with "priority" as : {Priority.high}
8) Export defualt as : Urgent

#### Setup Frontend : Setup Priority-low (Complete)

1) Create "low" folder in /client/src/app/priority
2) Create {page.tsx} file in /client/src/app/priority/low
3) Create template : tsrafce
4) Change function name from "page" to "Urgent"
5) Remove "type Props" and "props" argument
6) Import tools with :
   1) Import "React" from react
   2) Import "ReusablePriorityPage" from ../reusablePriorityPage
   3) Import "{ Priority }" from @/state/api
7) Create "return" function with :
   1) Create "ReusablePriorityPage" with "priority" as : {Priority.low}
8) Export defualt as : Urgent

#### Setup Frontend : Setup Priority-medium (Complete)

1) Create "medium" folder in /client/src/app/priority
2) Create {page.tsx} file in /client/src/app/priority/medium
3) Create template : tsrafce
4) Change function name from "page" to "Urgent"
5) Remove "type Props" and "props" argument
6) Import tools with :
   1) Import "React" from react
   2) Import "ReusablePriorityPage" from ../reusablePriorityPage
   3) Import "{ Priority }" from @/state/api
7) Create "return" function with :
   1) Create "ReusablePriorityPage" with "priority" as : {Priority.medium}
8) Export defualt as : Urgent

#### Setup Frontend : Setup Priority-urgent (Complete)

1) Create "urgent" folder in /client/src/app/priority
2) Create {page.tsx} file in /client/src/app/priority/urgent
3) Create template : tsrafce
4) Change function name from "page" to "Urgent"
5) Remove "type Props" and "props" argument
6) Import tools with :
   1) Import "React" from react
   2) Import "ReusablePriorityPage" from ../reusablePriorityPage
   3) Import "{ Priority }" from @/state/api
7) Create "return" function with :
   1) Create "ReusablePriorityPage" with "priority" as : {Priority.urgent}
8) Export defualt as : Urgent



Time Stamp : 06:49:52