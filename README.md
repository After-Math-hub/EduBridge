# EduBridge \u2014 Monorepo Shell

Folder-structure scaffold only (no implementation code yet), reflecting the two
applications shown in the welcome-page / dashboard design mockups:

- **apps/web** \u2014 Web App (React + Vite + TypeScript + Tailwind), light & night mode.
- **apps/mobile** \u2014 Mobile App (Expo + React Native + TypeScript), light & night mode.
- **packages/** \u2014 code shared between both apps.
  - **shared-types** \u2014 shared TypeScript types/interfaces (User, Learner, Assessment, Dashboard, ...).
  - **ui-tokens** \u2014 shared design tokens (colors incl. light/dark palettes, typography, spacing).
  - **api-client** \u2014 shared HTTP client + per-domain service modules (auth, dashboard, learning, assessments, reports, calendar, messages, community).

## Screens/features scaffolded (per mockup)
Welcome, Auth (Log in / Get Started), Dashboard, My Learning, Assessments,
Reports, Calendar, Messages, Community, Resources, Settings \u2014 each with its
own folder and a `components/` subfolder for screen-specific pieces.

## Status
This is a directory/file **shell** only \u2014 every source file contains a single
placeholder comment. No dependencies are installed and no build tooling is
wired up yet. Next steps: `npm init` per package, install Vite/Expo/Tailwind/
RN Navigation, and implement components against these designs.

## Folder structure

See [`PROJECT_TREE.txt`](./PROJECT_TREE.txt) for the plain-text version.

```
edubridge/
├── .github/
│   └── workflows/
│       └── ci.yml
├── apps/
│   ├── mobile/
│   │   ├── assets/
│   │   │   ├── fonts/
│   │   │   │   └── .gitkeep
│   │   │   ├── icons/
│   │   │   │   └── .gitkeep
│   │   │   └── images/
│   │   │       └── .gitkeep
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── common/
│   │   │   │   │   ├── Avatar.tsx
│   │   │   │   │   ├── Badge.tsx
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Card.tsx
│   │   │   │   │   ├── ProgressBar.tsx
│   │   │   │   │   └── ThemeToggle.tsx
│   │   │   │   └── layout/
│   │   │   │       ├── BottomTabBar.tsx
│   │   │   │       ├── ScreenContainer.tsx
│   │   │   │       └── TopBar.tsx
│   │   │   ├── context/
│   │   │   │   ├── AuthContext.tsx
│   │   │   │   └── UserContext.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── useAuth.ts
│   │   │   │   └── useDashboardData.ts
│   │   │   ├── navigation/
│   │   │   │   ├── AuthStack.tsx
│   │   │   │   ├── BottomTabNavigator.tsx
│   │   │   │   ├── RootNavigator.tsx
│   │   │   │   └── types.ts
│   │   │   ├── screens/
│   │   │   │   ├── Assessments/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   ├── AssessmentAttempt.tsx
│   │   │   │   │   │   └── AssessmentResult.tsx
│   │   │   │   │   └── AssessmentsScreen.tsx
│   │   │   │   ├── Auth/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   └── AuthForm.tsx
│   │   │   │   │   ├── GetStartedScreen.tsx
│   │   │   │   │   └── LoginScreen.tsx
│   │   │   │   ├── Calendar/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   └── EventItem.tsx
│   │   │   │   │   └── CalendarScreen.tsx
│   │   │   │   ├── Community/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   └── PostFeed.tsx
│   │   │   │   │   └── CommunityScreen.tsx
│   │   │   │   ├── Dashboard/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   ├── ContinueLearningList.tsx
│   │   │   │   │   │   ├── GreetingHeader.tsx
│   │   │   │   │   │   ├── OverallProgressCard.tsx
│   │   │   │   │   │   └── UpcomingList.tsx
│   │   │   │   │   └── DashboardScreen.tsx
│   │   │   │   ├── Messages/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   ├── ChatWindow.tsx
│   │   │   │   │   │   └── ConversationList.tsx
│   │   │   │   │   └── MessagesScreen.tsx
│   │   │   │   ├── MyLearning/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   └── TopicList.tsx
│   │   │   │   │   └── MyLearningScreen.tsx
│   │   │   │   ├── Reports/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   └── TermReportCard.tsx
│   │   │   │   │   └── ReportsScreen.tsx
│   │   │   │   ├── Resources/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   └── ResourceList.tsx
│   │   │   │   │   └── ResourcesScreen.tsx
│   │   │   │   ├── Settings/
│   │   │   │   │   ├── components/
│   │   │   │   │   │   └── ThemeSettings.tsx
│   │   │   │   │   └── SettingsScreen.tsx
│   │   │   │   └── Welcome/
│   │   │   │       ├── components/
│   │   │   │       │   ├── FeatureList.tsx
│   │   │   │       │   └── HeroSection.tsx
│   │   │   │       └── WelcomeScreen.tsx
│   │   │   ├── services/
│   │   │   │   └── apiClient.ts
│   │   │   ├── theme/
│   │   │   │   ├── dark.ts
│   │   │   │   ├── light.ts
│   │   │   │   ├── ThemeProvider.tsx
│   │   │   │   └── useTheme.ts
│   │   │   ├── types/
│   │   │   │   └── index.ts
│   │   │   └── utils/
│   │   │       ├── constants.ts
│   │   │       └── formatDate.ts
│   │   ├── .env.example
│   │   ├── app.json
│   │   ├── App.tsx
│   │   ├── babel.config.js
│   │   ├── index.ts
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   └── web/
│       ├── public/
│       │   ├── assets/
│       │   │   ├── icons/
│       │   │   └── images/
│       │   └── favicon.ico
│       ├── src/
│       │   ├── assets/
│       │   │   ├── icons/
│       │   │   │   └── .gitkeep
│       │   │   └── images/
│       │   │       └── .gitkeep
│       │   ├── components/
│       │   │   ├── common/
│       │   │   │   ├── Avatar.tsx
│       │   │   │   ├── Badge.tsx
│       │   │   │   ├── Button.tsx
│       │   │   │   ├── Card.tsx
│       │   │   │   ├── NotificationBell.tsx
│       │   │   │   ├── ProgressBar.tsx
│       │   │   │   ├── SearchInput.tsx
│       │   │   │   └── ThemeToggle.tsx
│       │   │   └── layout/
│       │   │       ├── DashboardLayout.tsx
│       │   │       ├── PublicLayout.tsx
│       │   │       ├── Sidebar.tsx
│       │   │       └── Topbar.tsx
│       │   ├── context/
│       │   │   ├── AuthContext.tsx
│       │   │   └── UserContext.tsx
│       │   ├── features/
│       │   │   ├── assessments/
│       │   │   │   ├── components/
│       │   │   │   │   ├── AssessmentAttempt.tsx
│       │   │   │   │   ├── AssessmentList.tsx
│       │   │   │   │   └── AssessmentResult.tsx
│       │   │   │   └── AssessmentsPage.tsx
│       │   │   ├── auth/
│       │   │   │   ├── components/
│       │   │   │   │   └── AuthForm.tsx
│       │   │   │   ├── GetStartedPage.tsx
│       │   │   │   └── LoginPage.tsx
│       │   │   ├── calendar/
│       │   │   │   ├── components/
│       │   │   │   │   ├── CalendarView.tsx
│       │   │   │   │   └── EventItem.tsx
│       │   │   │   └── CalendarPage.tsx
│       │   │   ├── community/
│       │   │   │   ├── components/
│       │   │   │   │   ├── PostFeed.tsx
│       │   │   │   │   └── StudyGroupCard.tsx
│       │   │   │   └── CommunityPage.tsx
│       │   │   ├── dashboard/
│       │   │   │   ├── components/
│       │   │   │   │   ├── AchievementsCard.tsx
│       │   │   │   │   ├── ContinueLearningList.tsx
│       │   │   │   │   ├── GreetingHeader.tsx
│       │   │   │   │   ├── MySubjectsCard.tsx
│       │   │   │   │   ├── OverallProgressCard.tsx
│       │   │   │   │   └── UpcomingList.tsx
│       │   │   │   └── DashboardPage.tsx
│       │   │   ├── messages/
│       │   │   │   ├── components/
│       │   │   │   │   ├── ChatWindow.tsx
│       │   │   │   │   └── ConversationList.tsx
│       │   │   │   └── MessagesPage.tsx
│       │   │   ├── my-learning/
│       │   │   │   ├── components/
│       │   │   │   │   ├── TopicDetail.tsx
│       │   │   │   │   └── TopicList.tsx
│       │   │   │   └── MyLearningPage.tsx
│       │   │   ├── reports/
│       │   │   │   ├── components/
│       │   │   │   │   └── TermReportCard.tsx
│       │   │   │   └── ReportsPage.tsx
│       │   │   ├── resources/
│       │   │   │   ├── components/
│       │   │   │   │   └── ResourceList.tsx
│       │   │   │   └── ResourcesPage.tsx
│       │   │   ├── settings/
│       │   │   │   ├── components/
│       │   │   │   │   ├── ProfileSettings.tsx
│       │   │   │   │   └── ThemeSettings.tsx
│       │   │   │   └── SettingsPage.tsx
│       │   │   └── welcome/
│       │   │       ├── components/
│       │   │       │   ├── FeatureList.tsx
│       │   │       │   ├── HeroSection.tsx
│       │   │       │   ├── NavBar.tsx
│       │   │       │   └── StatsStrip.tsx
│       │   │       └── WelcomePage.tsx
│       │   ├── hooks/
│       │   │   ├── useAuth.ts
│       │   │   ├── useDashboardData.ts
│       │   │   └── useMediaQuery.ts
│       │   ├── routes/
│       │   │   ├── AppRouter.tsx
│       │   │   ├── ProtectedRoute.tsx
│       │   │   └── routePaths.ts
│       │   ├── services/
│       │   │   └── apiClient.ts
│       │   ├── theme/
│       │   │   ├── dark.ts
│       │   │   ├── light.ts
│       │   │   ├── ThemeProvider.tsx
│       │   │   └── useTheme.ts
│       │   ├── types/
│       │   │   └── index.ts
│       │   ├── utils/
│       │   │   ├── constants.ts
│       │   │   └── formatDate.ts
│       │   ├── App.tsx
│       │   ├── main.tsx
│       │   └── vite-env.d.ts
│       ├── .env.example
│       ├── index.html
│       ├── package.json
│       ├── postcss.config.js
│       ├── README.md
│       ├── tailwind.config.ts
│       ├── tsconfig.json
│       └── vite.config.ts
├── packages/
│   ├── api-client/
│   │   ├── src/
│   │   │   ├── services/
│   │   │   │   ├── assessmentService.ts
│   │   │   │   ├── authService.ts
│   │   │   │   ├── calendarService.ts
│   │   │   │   ├── communityService.ts
│   │   │   │   ├── dashboardService.ts
│   │   │   │   ├── learningService.ts
│   │   │   │   ├── messagesService.ts
│   │   │   │   └── reportsService.ts
│   │   │   ├── httpClient.ts
│   │   │   └── index.ts
│   │   └── package.json
│   ├── shared-types/
│   │   ├── src/
│   │   │   ├── assessment.ts
│   │   │   ├── dashboard.ts
│   │   │   ├── index.ts
│   │   │   ├── learner.ts
│   │   │   └── user.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── ui-tokens/
│       ├── src/
│       │   ├── colors.dark.ts
│       │   ├── colors.light.ts
│       │   ├── colors.ts
│       │   ├── index.ts
│       │   ├── spacing.ts
│       │   └── typography.ts
│       └── package.json
├── .env.example
├── .gitignore
├── package.json
├── PROJECT_TREE.txt
├── README.md
├── tsconfig.base.json
└── turbo.json
```

