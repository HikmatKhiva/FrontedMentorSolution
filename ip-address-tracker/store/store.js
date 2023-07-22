import { defineStore } from "pinia";
const URL_API = 'https://ipapi.co'
export const useStore = defineStore({
    id: "store",
    state: () => ({
        ipInfo: null,
        search: '',
        error: false,
        loading: true
    }),
    actions: {
        handleSearch(e) {
            this.search = e.target.value
        },
        currentApi() {
            this.loading = true
            return fetch(`${URL_API}/json`)
                .then(res => res.json())
                .then(json => this.ipInfo = json)
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    this.loading = false
                })
        },
        findApiAddress() {
            this.loading = true
            return fetch(`${URL_API}/${this.search.trim()}/json`)
                .then(res => res.json())
                .then(json => this.ipInfo = json)
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    this.loading = false
                })
        }
    }
})