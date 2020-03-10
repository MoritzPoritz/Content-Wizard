<template>
  <div class="events">
      <li>
          <ul v-for="event in events" :key="event.name">{{event.url}}</ul>
          </li>
   </div> 
</template>

<script>
// @ is an alias to /src


export default {
  name: 'events',
  components: {
  },
  
    data: function (){
        return {
            events: ["Default"]
        }
  },
  methods: {
      refreshEvents: () => {

      },
      sendEvent: () => {
            //Send get request with event data to server
            //axios.post('http://localhost:3000/').then(response => this.events.push(response));
            console.log("hi")
      }
  },
}
</script>


<style scoped>
  
</style>
