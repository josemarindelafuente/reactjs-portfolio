// Layouts
import LayoutBasic from '../layouts/LayoutBasic';

// Basic Pages
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Blog from '../pages/Blog';

//Others
import Error404 from '../pages/Error404';

// Admin Pages
import AdminHome from '../pages/admin/AdminHome';

const routes = [

    {
        path: "/admin",
        component: LayoutBasic,
        exact: false,
        routes:[
            {
                path: "/admin",
                component: AdminHome,
                exact: true
            }
        ]
    },

    {
        path: "/",
        component: LayoutBasic,
        exact: false,
        routes: [
            {
                path: "/",
                component: Home,
                exact: true
            },
            {
                path: "/contact",
                component: Contact,
                exact: true
            },
            {
                path: "/blog",
                component: Blog,
                exact: true
            },
            {
                component: Error404
            }
        ]
    }
    
];
export default routes;
