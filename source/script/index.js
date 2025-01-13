import '../styling/main.scss';
import '../script/components/headerr';
import '../script/components/footerr';
import App from './view/app';
 
const app = new App({
  button: document.querySelector('#humburgerMenu'),
  drawer: document.querySelector('#navbar-list'),
  content: document.querySelector('#main'),
});