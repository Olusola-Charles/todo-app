const app = Vue.createApp({
  data() {
    return { 
      enteredGoalValue: '',
      goals: []
     };
  },
  methods: {
    
    removeGoal(idx){
      this.goals.splice(idx, 1);
    },
    addGoal() {
      this.goals.push(this.enteredGoalValue);
    },
    clearInput(){
      this.enteredGoalValue = '';
    }
  },
  computed: {
    
  },
});

app.mount('#userGoals');