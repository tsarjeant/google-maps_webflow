import { greetUser } from '$utils/greet';

window.Webflow ||= [];
window.Webflow.push(() => {
  const name = 'Tyler';
  greetUser(name);
  document.body.style.backgroundColor = 'red';
});
