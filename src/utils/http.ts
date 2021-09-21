import axios from 'axios';
//import store from '@/store'

const URL  =  'http://api.filicabh.com/api/v1'
const http = axios.create({
  baseURL: URL,
});
