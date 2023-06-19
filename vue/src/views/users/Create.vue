<script setup>
import { ref, onMounted, computed } from "vue";
import { useUsersStore } from "../../stores/Users";

const usersStore = useUsersStore();
const form = ref({
  name: "",
  password: "",
  email: "",
  role: null,
});

const valid = ref(false);

const rules = ref({
  name: [
    (value) => {
      if (value) return true;
      return "Name is required";
    },
    (value) => {
      if (value?.length >= 4) return true;
      return "Name must be less than 4 charcters";
    },
  ],
  email: [
    (value) => {
      if (value) return true;

      return "E-mail is requred.";
    },
    (value) => {
      if (/.+@.+\..+/.test(value)) return true;

      return "E-mail must be valid.";
    },
  ],
  password: [
    (value) => {
      if (value) return true;
      return "Password is required";
    },
    (value) => {
      if (value?.length >= 4) return true;
      return "Password must be less than 6 charcters";
    },
  ],
});

const create = async (form) => {
  await usersStore.addUser(form);
};

onMounted(async () => {
  usersStore.fetchRoles();
});
</script>

<template>
  
  <v-card class="mx-auto pa-12 pb-8" elevation="8">
    <v-alert
      class="custom-alert-class"
      type="success"
      variant="tonal"
      border="start"
      elevation="2"
      closable
      :close-label="$t('close')"
      v-if="usersStore.successMsg"
    >
      <small>{{ usersStore.successMsg }}</small>
    </v-alert>
    <v-alert
        class="custom-alert-class"
        type="error"
        variant="tonal"
        border="start"
        elevation="2"
        closable
        :close-label="$t('close')"
        v-if="usersStore.errors.length !== 0"
      >
        <small
          class="d-block"
          v-for="(item, index) in usersStore.errors"
          :value="index"
          :key="index"
          v-if="typeof usersStore.errors === 'object'"
        >
          {{ item }}
        </small>
        <small
          class="d-block"
          v-else="typeof usersStore.errors === 'string'"
        >
          {{ usersStore.errors }}
        </small>
      </v-alert>
    <v-card-title class="mb-2"> Create User </v-card-title>
    <v-form v-model="valid" @submit.prevent="create(form)">
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.name"
            :rules="rules.name"
            :counter="4"
            label="Name"
            variant="solo"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-select
            v-model="form.role"
            :items="usersStore.roles"
            label="Role"
            variant="solo"
            :item-title="(role) => role.name"
            :item-value="(role) => role.id"
            :item-disabled="false"
          ></v-select>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.email"
            :rules="rules.email"
            label="E-mail"
            variant="solo"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="form.password"
            :rules="rules.password"
            :counter="6"
            label="Password"
            variant="solo"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-card-actions>
        <v-btn color="error" variant="elevated">Cancel</v-btn>
        <v-btn type="submit" color="success" variant="elevated">
          <v-progress-circular
            indeterminate
            color="white"
            class="mx-3"
            size="25"
            v-show="usersStore.loading"
          ></v-progress-circular>  
          Save
        
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<style lang="scss">
.custom-alert-class {
  .v-alert__close {
    margin-inline-start: 10px;
  }
}
</style>
