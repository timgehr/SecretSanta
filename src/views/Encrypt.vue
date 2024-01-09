<template>
  <div class="encrypt">
    <div id="topbar"></div>
    <input
      id="encryptedText"
      type="text"
      placeholder="Name"
      class="textField1"
      v-on:keyup.enter="input.name.length > 0 ? addName(input.name) : null"
      v-model="input.name"
      autocapitalize="words"
    />
    <button class="reveal" v-on:click="encryptThatJawn">Encrypt</button>
    <ul class="names-list flex">
      <!-- Your Participants: -->
      <li
        class="flex column santa"
        v-for="name in this.names"
        :key="name"
        v-on:click="removeName(name)"
      >
        <img src="../assets/santanobg.png" />
        <p>{{ name }}</p>
      </li>
    </ul>
    <h1 class="err">{{ this.errmess }}</h1>
    <h1 class="yourPerson">{{ this.res }}</h1>
  </div>
</template>

<script>
import Vue from "vue";

export default Vue.extend({
  name: "Encrypt",
  data() {
    return {
      names: [],
      input: {
        name: "",
        pass: "",
      },
      res: "",
      errmess: "",
    };
  },
  methods: {
    addName(name) {
      this.names.push(name);
      this.input.name = "";
    },
    removeName(name) {
      this.names.splice(this.names.indexOf(name), 1);
    },
    encryptThatJawn() {
      this.$store.commit("generateNamesList", this.names);
      this.$router.push("generated");
    },
  },
});
</script>

<style>
#topbar {
  height: 100px;
  font-size: 40px;
  text-shadow: 0px 0px 8px black;
  /* font-family: "Castoro", serif; */
  padding: 20px 20px 20px 20px;
}

.encrypt {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.santa {
  max-height: 50px;
  justify-content: center;
  align-items: center;
}

.santa img {
  max-height: 40px;
  max-width: 40px;
  margin: 0px, auto;
}

.santa img:hover {
  filter: saturate(0);
}

.santa p {
  font-size: 20px;
  margin: 0px;
  color: white;
}

.santa:hover p {
  color: rgb(201, 0, 0);
}

.encrypt::before {
  background-image: url("../assets/christmas.jpg");
  background-size: cover;
  opacity: 0.25;
}

input {
  background-color: rgb(7, 54, 137);
  box-shadow: 0px 9px 8px -5px rgb(0, 0, 0);
  height: 60px;
  width: 500px;
  border-radius: 6px;
  border: 0px;
  /* margin: 20px 20px 20px 20px; */
  padding: 15px;
  font-size: 30px;
  text-align: center;
  max-width: 80vw;
}

::placeholder {
  color: rgba(255, 255, 255, 0.2);
}

input:focus {
  outline: none;
}

.names-list li {
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
  font-size: 30px;
  font-weight: normal;
}
.names-list {
  color: black;
  font-weight: 700;
  list-style-type: none;
  font-size: 35px;
  margin: 40px;
  padding: 0px;
}
.names-list.flex {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
.names-list li:hover {
  color: rgb(201, 0, 0);
}

button {
  margin-top: 100px;
  /* font-family: "Castoro", serif; */
  font-size: 30px;
  width: 200px;
  height: 60px;
  border-radius: 4px;
  border: 0px;
  outline: 0px;
  background: rgb(158, 0, 0);
  box-shadow: 0px 10px 0px rgb(109, 0, 0);
  color: white;
}

.yourPerson {
  font-size: 80px;
  text-shadow: 0px 0px 8px black;
  /* font-family: "Castoro", serif; */
  padding: 20px 20px 20px 20px;
}
</style>