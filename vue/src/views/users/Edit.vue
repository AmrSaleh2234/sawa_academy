<script setup>
import { ref, onMounted } from "vue";
import { useUsersStore } from "../../stores/Users";
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
const route = useRoute();

const usersStore = useUsersStore();
const { getUserById } = storeToRefs(usersStore)

const form = ref({
  user_id: null,
  name: "",
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
});

const updateUser = async (form) => {
  await usersStore.updateUser(form);
};

onMounted(async() => {
  await usersStore.fetchRoles();
  await usersStore.fetchUsers()
  const user = getUserById.value(route.params.id)
  form.value.user_id = route.params.id 
  form.value.name = user.name
  form.value.email = user.email
  form.value.role = user.roles[0]
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
      <small class="d-block" v-else="typeof usersStore.errors === 'string'">
        {{ usersStore.errors }}
      </small>
    </v-alert>
    <v-card-title class="mb-2"> Edit User </v-card-title>
    <v-form v-model="valid" @submit.prevent="updateUser(form)">
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
      </v-row>
      <v-card-actions>
        <v-btn color="error" variant="elevated" @click.prevet="$router.go(-1)">Cancel</v-btn>
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
