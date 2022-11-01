<template>
  <v-app>
    <v-data-table :headers="headers" :items="items" :items-per-page="20">
      <template v-slot:[`item.number`]="{ item, index }">
        <v-edit-dialog
          :return-value.sync="item.number"
          @save="updateStorage(item.number, index)"
        >
          {{ item.number }}
          <template v-slot:input>
            <v-text-field
              v-model="item.number"
              label="Edit"
              single-line
              counter
              :rules="[decimal]"
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:[`item.pi`]="{ item }">
        {{ multiplyByPi(item.number) }}
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>
  </v-app>
</template>

<script>
import { format, eachDayOfInterval, isFirstDayOfMonth } from "date-fns";

export default {
  name: "App",
  components: {},
  data: () => ({
    format,
    eachDayOfInterval,
    isFirstDayOfMonth,
    startDate: new Date("2022-01-12"),
    endDate: new Date("2022-12-25"),
    headers: [
      { text: "Dates", value: "date" },
      { text: "Numbers", value: "number" },
      { text: "Numbers*Pi", value: "pi" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    items: [],
    initialLen: 0,
    decimal: (input) => {
      const regexp = /^-?\d+(\.\d{1,2})?$/;
      return (
        (regexp.test(input) && Number(input) <= 100 && Number(input) >= -100) ||
        "not a valid number"
      );
    },
  }),

  created() {
    this.initialize();
    this.saveStorage();
    this.setCookie();
  },

  watch: {
    items: function (newItems) {
      for (let i = 0; i < this.initialLen; i++) {
        if (!(i in newItems)) {
          localStorage.removeItem(i);
        }
      }
      this.setStorage(newItems);
    },
  },

  methods: {
    getDates(startDate, endDate) {
      const allDates = eachDayOfInterval({
        start: startDate,
        end: endDate,
      });
      return allDates.reduce((result, date) => {
        if (isFirstDayOfMonth(date)) {
          result = [...result, format(date, "yyyy-MM-dd")];
        }
        return result;
      }, []);
    },

    getRandomNum(min, max) {
      return (Math.random() * (max - min) + min).toFixed(2);
    },

    multiplyByPi(number) {
      return (number * 3.14).toFixed(2);
    },

    deleteItem(item) {
      const editedIndex = this.items.indexOf(item);
      this.items.splice(editedIndex, 1);
    },

    saveStorage() {
      this.setStorage(this.items);
    },

    updateStorage(value, ind) {
      localStorage.setItem(ind, value);
    },

    initialize() {
      this.items = this.getDates(this.startDate, this.endDate).map((date) => ({
        date,
        number: this.getRandomNum(-100, 100),
      }));
      this.initialLen = this.items.length;
    },

    setStorage(items) {
      items.forEach((ele, ind) => localStorage.setItem(ind, ele.number));
    },

    getRandomString() {
      return [...Array(30)].map(() => Math.random().toString(36)[2]).join("");
    },

    setCookie() {
      document.cookie = `hashkey=${this.getRandomString()}`;
    },
  },
};
</script>
