<template>
  <div class="calendar">
    <form class="eventCreator">
      <h2>Create Event</h2>
      <label for="url">URL: </label>
      <input value="type link to the post here" name="url" id="url" type="url"> 
      
      <label for="date">Date: </label>
      <input value="" name="date" id="date" type="date">

      <label for="time">Time: </label>
      <input value="" name="time" id="time" type="time">

      <button v-on:click="addEvent">Send</button>
    </form>

    <Events></Events>
  </div>
</template>

<script>
// @ is an alias to /src
import Events from '@/components/Events.vue';

export default {
  name: 'calendar',
  components: {
    Events: Events
  },
  methods: {
    
  }
}
</script>


<style scoped>
  .eventCreator {
    display: flex;
    flex-direction: column;
  }
</style>
