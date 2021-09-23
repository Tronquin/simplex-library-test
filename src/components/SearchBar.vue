<template>
  <v-form @submit.prevent="updateInternalValueSubmit">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" class="pa-0">
          <v-text-field
            @input="updateInternalValue"
            :type="type"
            :value="internalValue"
            :rules="rules"
            :disabled="disabled"
            counter="100"
            hint="Type author: to search by Author or title: to search by Title"
            label="Search"
            solo
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import _debounce from "lodash/debounce";
import http from "../http-client";

export default {
  props: {
    value: String,
    type: { type: String, default: "text" },
  },
  data() {
    return {
      internalValue: this.value || "",
      touched: false,
      disabled: false,
      rules: [
        (v) => (v && v.length >= 0 && v.length <= 100) || "Max 100 characters",
      ],
    };
  },
  created() {
    http.interceptors.request.use(
      (config) => {
        this.disabled = true;
        return config;
      },
      () => {
        this.disabled = false;
      }
    );

    http.interceptors.response.use(
      (response) => {
        this.disabled = false;
        return response;
      },
      () => {
        this.disabled = false;
      }
    );
  },
  watch: {
    value(value) {
      if (!this.touched) this.internalValue = value;
    },
  },
  methods: {
    updateInternalValue(value) {
      this.touched = true;
      this.updateValue(value);
    },
    updateInternalValueSubmit(e) {
      this.touched = true;
      this.updateValue(e.target.querySelector("input").value); //PLZ Don't ever do this, god forgive me for I have sinned
    },
    updateValue: _debounce(function (value) {
      this.touched = false;
      this.$emit("input", value);
      this.$emit("update:value", value);
    }, 600),
  },
};
</script>
