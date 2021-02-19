<template>
  <div class="home">
    <form class="form" @submit.prevent="add">
      <input
        class="form__item"
        type="text"
        placeholder="Type email"
        v-model="email"
      />
      <input
        class="form__item"
        type="text"
        placeholder="Type password"
        v-model="password"
      />
      <button class="form__item" type="submit">Log in</button>
    </form>
    <div class="form">
      <button class="get__btn" @click="get">Get data</button>
      {{ fetchData }}
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "Home",
  data: () => ({
    email: null,
    password: null,
    fetchData: { name: "aaa" }
  }),
  methods: {
    async add() {
      console.log(
        await axios({
          url: "http://localhost:3000/api/records",
          method: "post",
          data: {
            email: this.email,
            password: this.password
          }
        })
      )
    },
    async get() {
      const data = await axios({
        url: "http://localhost:3000/api/records",
        method: "get"
      })
      this.fetchData = data.data
    }
  }
}
</script>

<style lang="scss">
.home {
  width: 500px;
  margin: 50px auto;
}
.form {
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .form__item {
    margin: 10px 0;
    padding: 10px;
  }
}

.get__btn {
  margin: 10px 0;
  padding: 10px;
}
</style>
