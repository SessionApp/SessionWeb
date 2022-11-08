import { defineStore } from 'pinia';
import {api} from "boot/axios"

export const useAuthStore = defineStore('auth', {
  state: () => ({
  }),
  getters: {
  },
  actions: {
    resetPassword(payload) {
      return new Promise((resolve, reject) => {
        return api
          .post("/reset_password", payload)
          .then(({ data }) => {
            console.log(data)
            resolve(data);
          })
          .catch((error) => {
            reject(error.response);
          });
      });
    },
  },
});
