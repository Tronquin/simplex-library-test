<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" class="pa-0">
          <v-text-field
            @input="updateInternalValue"
            :type="type"
            :value="internalValue"
            :rules="rules"
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

  <!--
  <input :type="type" :value="internalValue" @input="updateInternalValue" />
  -->
</template>

<script>
import _debounce from "lodash/debounce";

export default {
  props: {
    value: String,
    type: { type: String, default: "text" },
  },
  data() {
    return {
      internalValue: this.value || "",
      touched: false,
      rules: [
        (v) => (v.length >= 0 && v.length <= 100) || "Max 100 characters",
      ],
    };
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
    updateValue: _debounce(function (value) {
      this.touched = false;
      this.$emit("input", value);
      this.$emit("update:value", value);
    }, 600),
  },
};
</script>
