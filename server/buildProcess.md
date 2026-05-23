# Build Project Management App
  
  USED NodeJS ver : 20.20.2

## ShortKey

1) ***Open command guide : ctrl+space***
2) In intellisence list we can automatic import tools by : ctrl + click on keyword
3) Run client : npm run dev
4) Run server :  npm run dev
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

##### Setup Frontend : Dashboard with "Navbar-Search Bar" in return function

1) Create "div" with "className" as : "flex items-center gap-8"
2) Create "Not isSidebarCollapsed" function as : {!isSidebarCollapsed ? null : ()}
   1) Create "button" with "onClick" funciton as : () => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
   2) Create "Menu"  with "className" as : "h-8 w-8 dark:text-white"
3) Create "div" with "className" as : elative flex h-min w-[200px]"
4) Import "Search" from "lucide-react"
5) Create "Search" with "className" as : "absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer dark:text-white"
6) Create "input" with "className" as : "w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none dark:bg-gray-700 dark:text-white dark:placeholder-white"
   1) Create "type" as : "search"
   2) Create "placeholder" as : "Search..."

##### Setup Frontend : Dashboard with "Navbar-Icon(Right side)" in return function

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
6) Import "useAppDispatch, useAppSelector" from @/app/redux
7) Import "setIsSidebarCollapsed" from @/state
8) Import "useGetAuthUserQuery, useGetProjectsQuery" from @/state/api
9) Import "signOut" from aws-amplify/auth
10) Import "AlertCircle, AlertOctagon, AlertTriangle, Briefcase, ChevronDown, ChevronUp, Home, Layers3, LockIcon, LucideIcon, Search, Settings, ShieldAlert, User, Users, X" from lucide-react
11) Import "Image" from next/image
12) Import "Link" from next/link
13) Import { usePathname } from "next/navigation"
14) Import "React, {useState}" from react
15) Create "showProjects, setShowProjects" with : useState(true)
16) Create "showPriority, setShowPriority" with : useState(true)
17) Create "data:projects" as : useGetProjectsQuery()
18) Create "dispatch" as : useAppDispatch()
19) Create "isSidebarCollapsed" as : useAppSelector((state) => state.global.isSidebarCollapsed)
20) Create "data: currentUser" as : useGetAuthUserQuery({})
21) Create "handleSignOut" as : async () => {}
    1) Setup "Try" as : await signOut()
    2) Setup "catch(error)" as : console.error("Error signing out: ", error)
22) Create if-condition with "!currentUser" as : return null
23) Create "currentUserDetails" as : currentUser?.userDetails
24) Create template string with "sidebarClassNames" as : `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 h-full z-40 dark:bg-black overflow-y-auto bg-white ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}`
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

##### Setup Frontend : Dashboard with "SidebarLink

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
5) Import "TypedUseSelectorHook, useDispatch, useSelector, Provider" from react-redux
6) Import "combineReducers, configureStore" from @reduxjs/toolkit
7) Import "setupListeners" from @reduxjs/toolkit/query
8) Import "globalReducer" from @/state
9) Import "api" from @/state/api

##### Setup Frontend : Dashboard with "Redux Toolkit" - Redux Store

1) Create "rootReducer" as : combineReducers({})
   1) Setup "global" as : globalReducer
   2) Setup "api.reducerPath" as : api.reducer
2) Export "makeStore" function as : makeStore = () => {}
   1) Return value as : configureStore({})
   2) Setup "reducer" as :
   3) Setup 




Time stamp : 00:44:13
