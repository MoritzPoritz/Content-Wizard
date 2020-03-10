<template>
    <div class="eventpreview">
        <h2>Your Event so far:</h2>
        <h3>URL</h3>
        <p>{{eventInput.urlPreview}}</p>
        <h3>Date</h3>
        <p>{{eventInput.datePreview}}</p>
        <h3>Time</h3>
        <p>{{eventInput.timePreview}}</p>
        <h3>Note</h3>
        <p>{{eventInput.notePreview}}</p>
   </div> 
</template>

<script>
// @ is an alias to /src


export default {
  name: 'eventpreview',
  components: {
  },
  props: ['eventInput'],
  data: function () {
      return {
      }
  },
  methods: {
  },
}
</script>


<style scoped>
    .eventpreview {
        border: 1px solid #000000;
        margin-top: 20px;
    }
    h3 {
        font-weight: bold;
    }
</style>
