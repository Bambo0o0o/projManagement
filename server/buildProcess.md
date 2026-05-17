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

### Setup Frontend : page.tsx

1) Go to {page.tsx} in /src/app
2) Remove alls inside "main" tag
3) Create simple text as : Hi this is project management page
4) Test page render as : npm run dev

### Setup Frontend : globals.css

1) Adding "@tailwind" tags as : base, components, utilities
2) Setup "root" as : *, *::before, *::after {box-sizing: border-box;}
3) Setup "html" and "body" tag
4) Setup "#root" for app{} as : height: 100%, width: 100%, @apply text-sm, @apply bg-white, @apply dark:bg-black
5) Setup "timeline" style with :
6) Setup "scollbar" with :

### Setup Frontend : dashBoardWrapper.tsx

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
      2) Create "sidebar" tag as : <Sidebar/>
      3) Create "main" with "className" tag as : `flex w-full flex-col bg-gray-50 dark:bg-dark-bg ${isSidebarCollapsed ? "" : "md:pl-64"}`
      4) Create "navbar" tag as : <Navbar />
      5) Calling "children" as : {children}
7) Create "DashboardWrapper" function with
   1) Assign "children" argument as :({ children }: { children: React.ReactNode }) => {return(..)}
   2) Create "return" function with
      1) Setup "StoreProvider" tag as : <StoreProvider>
      2) Setup "AuthProvider" tag as : <AuthProvider>
      3) Calling "DashboardLayout" with "children" tag as : <DashboardLayout>{children}</DashboardLayout>
8) Export default as : DashboardWrapper
