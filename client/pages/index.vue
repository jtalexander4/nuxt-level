<template>
  <section class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="form-group mt-3">
          <input v-model="query" type="text" class="form-control" placeholder="Search...">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <ul class="card-columns list-unstyled">
          <li v-for="account in filteredList" :key="account.id" class="card">
            <!-- <img :src="restaurant.image.url" class="card-img-top"> -->
            <div class="card-body">
              <h5 class="card-title">{{ account.name }}</h5>
              <router-link :to="{ name: 'accounts-id', params: { id: account.id }}" tag="a" class="btn btn-primary">
                See this account
              </router-link>
            </div>
          </li>
          <p v-if="!filteredList.length">No results</p>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import Strapi from 'strapi-sdk-javascript/build/main'
const apiUrl = process.env.API_URL || 'http://localhost:1337'
const strapi = new Strapi(apiUrl)

export default {
  data() {
    return {
      query: ''
    }
  },
  computed: {
    filteredList() {
      return this.accounts.filter(account => {
        return account.name.toLowerCase().includes(this.query.toLowerCase())
      })
    },
    accounts() {
      return this.$store.getters['accounts/list']
    }
  },
  async fetch({ store }) {
    store.commit('accounts/emptyList')
    const response = await strapi.request('post', '/graphql', {
      data: {
        query: `query {
          accounts {
            id
            name
          }
        }
        `
      }
    })
    response.data.accounts.forEach(account => {
      store.commit('accounts/add', {
        id: account.id || account._id,
        ...account
      })
    })
  }
}
</script>
