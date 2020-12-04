<template>
  <div class="decrypt">
    <div id="topbar">
      Your Secret Santa Assignment is...
    </div>
    <input
      id="encryptedText"
      type="text"
      placeholder="Encrypted Name"
      class="textField1"
      v-model="input.encrName"
      autocapitalize="none"
    />
    <input
      id="passphrase"
      placeholder="Password"
      class="textField1"
      v-model="input.pass"
      autocapitalize="none"
    />
    <button class="reveal" v-on:click="decryptThatJawn">Decrypt</button>
    <h1 class="err">{{this.errmess}}</h1>
    <h1 class="yourPerson">{{this.res}}</h1>
  </div>
</template>

<script>
import Vue from "vue";
const CryptoJS = require("crypto-js");

export default Vue.extend({
  name: "Decrypt",
  data() {
    return {
      input: {
        encrName: "",
        pass: ""
      },
      res: "",
      errmess: "",
    };
  },
  methods: {
    decryptThatJawn() {
      this.res = CryptoJS.AES.decrypt(this.input.encrName, this.input.pass).toString(CryptoJS.enc.Utf8)
    }
  }
});
</script>

<style scoped>
#topbar{
  height: 100px;
  font-size: 40px;
  text-shadow: 0px 0px 8px black;
  font-family: 'Castoro', serif;
  padding: 20px 20px 20px 20px;
  color: white;
}

.decrypt{
  background-image: url("../assets/christmas.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

input{
  height: 80px;
  width: 500px;
  border-radius: 20px;
  border: 0px;
  margin: 20px 20px 20px 20px;
  padding: 15px 15px 15px 15px;
  font-size: 30px;
  text-align: center;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.486);
}

input:focus {
  outline: none;
}

button {
  margin-top: 100px;
  font-family: 'Castoro', serif;
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

.yourPerson{
  font-size: 80px;
  text-shadow: 0px 0px 8px black;
  font-family: 'Castoro', serif;
  padding: 20px 20px 20px 20px;
  color: white;
}
</style>
