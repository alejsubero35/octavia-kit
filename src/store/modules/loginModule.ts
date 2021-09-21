import {
    getModule,
    Module,
    MutationAction,
    Mutation,
    Action,
    VuexModule,
  } from 'vuex-module-decorators';
import store from '@/store';
import { UserLogin } from '../interfaces/Auth';
import { UserToken } from '../interfaces/UserToken'
import { http } from '@/utils/http';

@Module({
    namespaced: true,
    name: 'login',
    store,
    dynamic: true,
  })

  class loginModule extends VuexModule {

  }
  export default getModule(loginModule);