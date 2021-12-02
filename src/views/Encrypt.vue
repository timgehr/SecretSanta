<template>
  <div class="encrypt">
    <div id="topbar"></div>
    <input
      id="encryptedText"
      type="text"
      placeholder="Name"
      class="textField1"
      v-on:keyup.enter="addName(input.name)"
      v-model="input.name"
      autocapitalize="none"
    />
    <button class="reveal" v-on:click="encryptThatJawn">Encrypt</button>
    <ul class="namesList">
      Your Participants:
      <li class="namesListItem" v-for="name in this.names" :key="name" v-on:click="removeName(name)">
        {{ name }}
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
      this.names.push(name)
      this.input.name = ""
    },
    removeName(name) {
      this.names.splice(this.names.indexOf(name), 1)
    },
    encryptThatJawn() {
      this.$store.commit('generateNamesList', this.names)
      this.$router.push('Generated')
    },
  },
});
</script>

<style>
#topbar {
  height: 100px;
  font-size: 40px;
  text-shadow: 0px 0px 8px black;
  font-family: "Castoro", serif;
  padding: 20px 20px 20px 20px;
  color: white;
}

.encrypt {
  background-color: rgb(0, 95, 43);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.encrypt::before {
  background-image: url("../assets/christmas.jpg");
  background-size: cover;
  opacity: 0.25;
}

input {
  height: 60px;
  width: 500px;
  border-radius: 20px;
  border: 0px;
  margin: 20px 20px 20px 20px;
  padding: 15px 15px 15px 15px;
  font-size: 30px;
  text-align: center;
  box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.178);
}

input:focus {
  outline: none;
}

.namesList li{
  margin-top: 10px;
  text-decoration: none;
  cursor: pointer;
  font-size: 30px;
  font-weight: normal;
}
.namesList{
  color: black;
  font-weight: 700;
  list-style-type: none;
  font-size: 35px;
}
.namesList li:hover{
  color: rgb(201, 0, 0);
}

button {
  margin-top: 100px;
  font-family: "Castoro", serif;
  font-size: 30px;
  color: white;
  width: 200px;
  height: 80px;
  border-radius: 10px;
  border: 0px;
  outline: 0px;
  background: rgb(201, 0, 0);
  box-shadow: 0px 10px 0px rgb(145, 0, 0);
  font-style: italic;
}

.yourPerson {
  font-size: 80px;
  text-shadow: 0px 0px 8px black;
  font-family: "Castoro", serif;
  padding: 20px 20px 20px 20px;
  color: white;
}

</style>
