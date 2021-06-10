<template>
  <v-app
    id="TodoListApp"
    class="transparent"
    flat>
    <main>
      <v-container>
        <p>1/ Add an input for adding 'new task to do'</p>
        <p>2/ and a list to display them</p>
        <p>3/ Add a button fo each task to mark it as completed</p>
      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    tasks: [],
  }),
}
</script>