<template>
  <v-app
    id="TodoListApp"
    class="transparent"
    flat>
    <main>
      <v-container>
        
       
      
      <div >
      <input type="text" v-model="task" placeholder="What are you working on ?">
       <span v-if="!taskIsEmpty"><button @click="handleTasks()"><i class="fas fa-plus-square"></i>
</button></span>

  </div>

  
  <h2 class="light-green--text"> tasks {{taskId}}</h2>
  <v-divider></v-divider>
  <v-row class="d-flex flex-row">
      <h4 class="blue--text"><b>Remaining {{taskId-getCompleted}}</b></h4>
      <h4><b>Completed {{getCompleted}}</b></h4>
      <v-progress-circular
      :rotate="0"
      :size="50"
      :width="4"
      :value="getProgressCircularValue"
      color="primary" >
      {{ taskNumber }}
    </v-progress-circular>
  </v-row>

  <div v-if="tasks.length">

          <v-row class="d-flex flex-row"> 
           <v-checkbox v-for="item in tasks" :key="`${item.taskId}`"
      v-model="item.taskChecked"
      :label="`${item.taskText}`"
    ></v-checkbox><i v-if="item.taskChecked" class="fas fa-check"></i></v-row>
  </div>

  

 
 </v-container>
    </main>
  </v-app>
</template>


<script>
export default {
  
  data: () => ({
    
    el:'#TodoListApp',
    taskId:0,
    task:'',
    tasks: [],
    progressCircularValue : 0
    
    

  }),
  methods: {
 handleTasks(){
     
     
    this.taskId++;
    const taskRow={'taskId' :this.taskId,'taskText':this.task,'taskChecked':false};
    console.log(taskRow);
    this.tasks.push(taskRow);
    this.task="";
    this.shown=false;
    
   
  }
  
  },

 computed: {
    getCompleted(){
       
       return this.tasks.filter(task => task.taskChecked).length;
    },
    
    taskIsEmpty(){
        
return this.task==="";
    },

    getProgressCircularValue(){
        
         return this.taskId===0 ? this.taskId : this.getCompleted/this.taskId*100;
    }

      
},

watch: {
   
},

  
  
}
</script>