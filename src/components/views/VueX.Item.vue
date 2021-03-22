<template>
  <div>
      <h1>{{user.id}}</h1>
            <h1>{{user.name}}</h1>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
    computed:mapState({
        user:'user',
    })
}
</script>

<style>

</style>