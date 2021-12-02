<template>
  <div class="generated">
    <div id="topbar">Assignments:</div>
    <ul class="namesList">
      <div class="listColumn">
        <li
          class="namesListItem"
          v-for="name in this.$store.state.names"
          :key="name"
        >
          {{ name }}
        </li>
      </div>

      <div class="listColumn">
        <li
          class="namesListItem"
          v-on:click="copyText(assignment)"
          v-for="assignment in this.$store.state.assignments"
          :key="assignment"
        >
          🎁
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
const CryptoJS = require("crypto-js");

export default Vue.extend({
  name: "Generated",
  data() {
    return {
      res: "",
      errmess: "",
    };
  },
  methods: {
    encryptName(name) {
      return btoa(
        CryptoJS.AES.encrypt(name, "2021").toString()
      );
    },
    copyText(assignment) {
      var toBeCopied = ("Your Secret Santa assignment awaits 🎁🎅🏼🎄: https://encryptedsanta.netlify.app/#/decrypt/" + this.encryptName(assignment))
      navigator.clipboard.writeText(toBeCopied)
    }
  },
});
</script>

<style scoped>
.namesList {
  display: flex;
  flex-direction: row;
}


.namesListItem {
  color: white;
  padding-top: 20px;
  padding-right: 20px;
  font-size: 30px;
  height: 40px; 
  text-align: justify;
}

.generated {
  background-color: rgb(0, 95, 43);
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
