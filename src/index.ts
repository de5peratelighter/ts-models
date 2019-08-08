import { UserForm } from './views/UserForm';
import { User } from './models/User'

const user = User.build({ name: 'NAME', age: 20 });
const root = document.getElementById('root')

if (root) {
  const userForm = new UserForm(root, user);
  userForm.render()
} else {
  throw new Error('Root element wasnt found')
}