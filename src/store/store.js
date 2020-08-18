import { init } from '@rematch/core';
import user from './models/user';

const models = {
  ...user,
};

const store = init({
  models,
});

export default store;
