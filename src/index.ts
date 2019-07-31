import { User } from './models/User'

const user = User.build({ id: 1, age: 0, name: 'ddd' })

user.on('change', () => { console.log('changed', user) })

// user.trigger('change');

user.fetch();
// user.save();
