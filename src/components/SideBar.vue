<template>
    <v-list>
      <v-list-tile v-for='item in array' :key='item.title'>
        <v-tile-content>
          <a :href='item.link'> {{ item.title }} </a>
        </v-tile-content>
      </v-list-tile>
    </v-list>  
</template>

<script>
export default {
  name: 'SideBar',
  data(){
    return {
      array: [
        {
          title: 'No Bugs',
          link: 'http://nobugs.com.br'
        },
        {
          title: 'GitHub',
          link: 'http://github.com.br'
        },
        {
          title: 'Discord',
          link: 'http://discord.io'
        }
      ]
    }
  }
}
</script>

<style>

</style>

