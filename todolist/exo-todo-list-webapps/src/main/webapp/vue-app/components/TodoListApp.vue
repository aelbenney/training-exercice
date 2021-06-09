<template>
  <v-app 
    id="TodoListApp"
    class="transparent"
    flat>
    <main>
      <v-container style="max-width: 500px">
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
      tasks: [
        {
          done: false,
          text: 'Foobar'
        },
        {
          done: false,
          text: 'Fizzbuzz'
        }
      ],
      task: null
    }),

    computed: {
      completedTasks () {
        return this.tasks.filter(task => task.done).length
      },
      progress () {
        return this.completedTasks / this.tasks.length * 100
      },
      remainingTasks () {
        return this.tasks.length - this.completedTasks
      }
    },

    methods: {
      create () {
        this.tasks.push({
          done: false,
          text: this.task
        })

        this.task = null
      }
    }
  }
</script>