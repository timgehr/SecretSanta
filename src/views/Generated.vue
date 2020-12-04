<template>
  <div class="generated">
    <div id="topbar"></div>
    <h1 class="yourPerson">{{this.res}}</h1>
  </div>
</template>

<script>
import Vue from "vue";
const CryptoJS = require("crypto-js");

export default Vue.extend({
  name: "Generated",
  data() {
    return {
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
    }
  }
});
</script>
