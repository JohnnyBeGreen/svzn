import { $api } from '@/services/api';

export default (store) => {
    try {
      store.$api = $api;  
    } catch (e) {
        console.log(e);
    }
}