<template>
    <header>
      <h1 class="logo">GameOn</h1>
      <nav>
        <div class="toggle">
          <i class="ouvrir" @click="openMenu()" :class="{open : isOpen}"  aria-hidden="true"><font-awesome-icon icon="bars" color="red"
            /></i>
          <i class="fermer" @click="closeMenu()" :class="{close : isClose}" aria-hidden="true"><font-awesome-icon icon="times" color="red"
            /></i>
        </div>
        <ul class="menu" :class="{active_menu : isOpen}">
          <li><a href="" class="firstLink">Details de l'évenement</a></li>
          <li><a href="">A propos</a></li>
          <li><a href="">Contact</a></li>
          <li><a href="">Evenements passés</a></li>
        </ul>
      </nav>
    </header>
</template>

<script >

export default {
    name: "Header",
    data() {
     return {
      isOpen: false,
      isClose: false
     }
    },
    methods: {
      openMenu(){
        console.log("Marcelin")
        this.isOpen = true
        this.isClose = true
      },
      closeMenu() {
        this.isClose = false
        this.isOpen = false
      }
    }
}
</script>

<style src="./Header.css">

</style>