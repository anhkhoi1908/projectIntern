import NavTablet from "../pages/navTablet";
import HomePage from "../pages/homePage";
import PricingPage from "../pages/pricingPage";
import BlogPage from "../pages/blogPage";
import Login from "../pages/login";
import Register from "../pages/register";
import ViewDemoPage from "../pages/viewDemo";
import SiteNavFeatures from "../pages/navTablet/siteNav-features";
import SiteNavResources from "../pages/navTablet/siteNav-resources";
import SiteNavMore from "../pages/navTablet/siteNav-more";

const publicRoutes = [
    { path: "/", component: NavTablet },
    { path: "/homePage", component: HomePage },
    { path: "/pricingPage", component: PricingPage },
    { path: "/blogPage", component: BlogPage },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/viewDemoPage", component: ViewDemoPage },
    { path: "/siteNavFeatures", component: SiteNavFeatures },
    { path: "/siteNavResources", component: SiteNavResources },
    { path: "/siteNavMore", component: SiteNavMore },
];

export default publicRoutes;