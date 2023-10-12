// Layouts
import PublicLayout from "../layout";

// Pages
import NotFound from "../pages/404";


export const public_routes = [
{
    layout: <PublicLayout />,
    children: [
      {
        path: '*',
        element: <NotFound />
      }
        // public Routes
    ]
  },
];
