<template>
  <v-app
    id="TodoListApp"
    class="transparent"
    flat>
    <main>
      <v-container>
<div id = "computed_props">
         task : <input type = "text" v-model = "task">
                  <button v-on:click = "addtasks">enter</button>


         <h2> Completed: {{nouveauliste.length}}</h2>



      </div>


      <li v-for="(item, index) in items" :key="item.id">
          <input :id="index" :value="index" name="index" type="checkbox" v-model="nouveauliste" />
          <label :for="index"><span></span></label>
                   <h2> {{item}}</h2>

      </li>




<v-card
    class="mx-auto"
    max-width="500"
  >
    <v-list shaped>
      <v-list-item-group
        v-model="model"
        multiple
      >
        <template v-for="(item, i) in items">
          <v-divider
            v-if="!item"
            :key="`divider-${i}`"
          ></v-divider>

          <v-list-item
            v-else
            :key="`item-${i}`"
            :value="item"
            active-class="deep-purple--text text--accent-4"
          >
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-checkbox
                  :input-value="active"
                  color="deep-purple accent-4"
                ></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>

      </v-container>
    </main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
     items: [
            'Dog Photos',
            '',
            'Cat Photos',
            '',
            'Potatoes',
            '',
            'Carrots',
            '',
          ],
          nouveauliste:[],

                    model: ['Carrots'], task1 : '',
                    nombre : 0,


          computed :{
                getnumber : function(){
                   return this.nombre;}
                   }
  }),

  methods : {
                 addtasks : function(event) {
                    console.log(event);
                    this.task1=this.task;
                    this.items.push(this.task1);
                    this.items.push('');
                 }
              },
}
</script>
