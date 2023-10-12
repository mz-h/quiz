// // Layouts
// import AnonymousLayout from "../layouts/AnonymousLayout";
// import MainLayout from "../layouts/MainLayout";

// // Pages
// import Home from "../pages"
// import NotFound from "../pages/404"
// import Quiz from "../pages/quiz"
// import NewEdit from "../pages/quiz/new_edit"
// import TakeQuiz from "../pages/quiz/take_quiz"




// // routesConfig.js

// Layouts
import MainLayout from "../layout";

// Pages
import Home from "../pages/index";
import Quiz from "../pages/quiz";
import NewEdit from "../pages/quiz/new_edit";
import TakeQuiz from "../pages/quiz/take_quiz";

export const authenticated_routes = [
  {
    // path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'quiz',
        element: <Quiz />,
        children: [
          {
            path: 'new_edit',
            element: <NewEdit />
          },
          {
            path: 'take_quiz',
            element: <TakeQuiz />
          }
        ]
      }
    ]
  }
];


// export const authenticated_routes = [
// {
//     layout: MainLayout,
//     routes: [
//       {
//         name: 'home',
//         title: 'Home page',
//         component: Home,
//         path: '/home'
//       },
//       {
//         name: 'users',
//         title: 'Users',
//         hasSiderLink: true,
//         routes: [
//           {
//             name: 'list-users',
//             title: 'List of users',
//             hasSiderLink: true,
//             component: ListUsers,
//             path: '/users'
//           },
//           {
//             name: 'create-user',
//             title: 'Add user',
//             hasSiderLink: true,
//             component: CreateUser,
//             path: '/users/new'
//           }
//         ]
//       }
//     ]
//   }
// ];
