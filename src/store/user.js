import { defineStore } from "pinia"

export const useUserStore = defineStore('user',{
    state: () => ({
        user: {
            id: 13,
            name: "다미장"
        }
    }),
    getters: {
        getUserName: (state) => state.user.name
    },
    actions: {

    }
})
