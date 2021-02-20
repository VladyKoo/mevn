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

      <div
        class="get__data-line"
        v-for="(data, index) of fetchData"
        :key="index"
      >
        <span class="get__data-item">{{ data._id }}</span>
        <span class="get__data-item">{{ data.email }}</span>
        <span class="get__data-item">{{ data.password }}</span>
      </div>
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
      const data = await axios({
        url: "http://194.67.109.251/api/records",
        method: "post",
        data: {
          email: this.email,
          password: this.password
        }
      })
      console.log(data)
    },
    async get() {
      const data = await axios({
        url: "http://194.67.109.251/api/records",
        method: "get"
      })
      console.log(data.data)
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

.get__data-line {
  margin-bottom: 5px;
}

.get__data-item {
  padding: 5px;
  margin: 0 5px;
  border: 1px solid black;
}
</style>
