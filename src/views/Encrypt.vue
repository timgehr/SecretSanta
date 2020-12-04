<template>
  <div class="encrypt">
    <div id="topbar">
    </div>
    <input
      id="encryptedText"
      type="text"
      placeholder="Encrypted Text"
      class="textField1"
      v-on:keyup.enter="produceEncryption"
      v-model="input.name"
      autocapitalize="none"
    />
    <input
      id="passphrase"
      placeholder="Password"
      class="textField1"
      v-on:keyup.enter="produceEncryption"
      v-model="input.pass"
      autocapitalize="none"
    />
    <button class="reveal" v-on:click="encryptThatJawn">Encrypt</button>
    <h1 class="err">{{this.errmess}}</h1>
    <h1 class="yourPerson">{{this.res}}</h1>
  </div>
</template>

<script>
import Vue from "vue";
const CryptoJS = require("crypto-js");

export default Vue.extend({
  name: "Encrypt",
  data() {
    return {
      names: [],
      input: {
        name: "",
        pass: ""
      },
      res: "",
      errmess: "",
    };
  },
  methods: {
    encryptThatJawn() {
      this.res = CryptoJS.AES.encrypt(this.input.name, this.input.pass).toString()
    },
  }
});
</script>
