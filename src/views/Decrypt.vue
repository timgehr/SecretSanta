<template>
  <div class="decrypt">
    <div id="topbar">
    </div>
    <input
      id="encryptedText"
      type="text"
      placeholder="Encrypted Text"
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
