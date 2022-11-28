import { defineStore } from 'pinia';
import {api} from "boot/axios"

export const useUserStore = defineStore('user', {
  state: () => ({
  }),
  getters: {
  },
  actions: {
    unsubscribeNewsletter(payload) {
      return new Promise((resolve, reject) => {
        return api
          .post("/unsubscribe_newsletter", payload)
          .then(({ data }) => {
            resolve(data);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
  },
});
