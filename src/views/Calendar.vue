<template>
  <div class="calendar">
    <form class="eventCreator">
      <h2>Create Event</h2>
      <label for="url">URL: </label>
      <input v-model="url" value="type link to the post here" name="url" id="url" type="text"> 
      
      <label for="date">Date: </label>
      <input v-model="date" value="" name="date" id="date" type="date">

      <label for="time">Time: </label>
      <input v-model="time" value="" name="time" id="time" type="time">

      <label for="note">Note: </label>
      <input v-model="note" value="" name="note" id="note" type="text">

      <EventPreview v-bind:eventInput="{
            urlPreview: this.url,
            datePreview: this.date,
            timePreview: this.time, 
            notePreview: this.note
          }" 
      ></EventPreview>
      <button v-on:click="addEvent">Send</button>
    </form>
    <Events ref="events"></Events>
  </div>
</template>

<script>
// @ is an alias to /src
import Events from '@/components/Events.vue';
import EventPreview from '@/components/EventPreview.vue';

export default {
  name: 'calendar',
  components: {
    Events: Events,
    EventPreview: EventPreview
  },
  data: function() {
    return {
      url:"notspecified",
      date: "notspecified",
      time: "notspecified",
      note: "notspecified",
    }
  },
  methods: {
    addEvent: function () {
      this.$refs.events.sendEvent();
    }
  }
}
</script>


<style scoped>
  .calendar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .eventCreator {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin-bottom: 50px;
  }
</style>
