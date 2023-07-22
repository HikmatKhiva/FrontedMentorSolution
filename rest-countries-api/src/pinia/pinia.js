import { defineStore } from 'pinia'
export const storage = defineStore('countries', {
  // States
  state: () => {
    return {
      search: '',
      countries: null,
      loading: false,
      query: 'all',
      open: false
    }
  },
  // Action
  actions: {
    handleChangeSearch(newValue) {
      this.search = newValue.target.value
    },
    handleSelect(newValue) {
      this.query = newValue
    },
    async fetchApi(url) {
      try {
        this.loading = true
        const data = await fetch(`${url}/${this.query}`)
        const json = await data.json()
        this.countries = json
        this.loading = false
      } catch (err) {
        this.loading = false
        console.log(err)
      }
    }
  },
  getters: {
    filterCountries: (state) =>
      state.countries !== null
        ? state.countries.filter((country) => {
            return country?.name?.common.toLowerCase().includes(state.search.trim().toLowerCase())
          })
        : []
  }
})
