import Dashboard from "../view/pages/dashboard";
import AboutMe from "../view/pages/aboutMe";
import Blog from "../view/pages/blog";

const routes = {
  '/': Dashboard, //default page
  '/dashboard': Dashboard,
  '/about-me': AboutMe,
  '/blog': Blog,
//   '/journey': Journey,
};

export default routes;