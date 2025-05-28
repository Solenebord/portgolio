<script>
import './router/index.js';

export default {
  data(){
    return { 
        darkMode: false,
        isFrench: true,
        bgColor: "#E9E2DC",

    }
  },
  watch: {
    darkMode() {
      if (this.darkMode == false) {
        this.bgColor = "#E9E2DC"
      } else {
        this.bgColor = "#6c6986"
      }
    },
    
  },
  computed: {
    appRoute() {
      return this.$route.name;
    }
  }
  
};


</script>

<template>
  <main :style="{ backgroundColor: bgColor }">
    <header>
      <img src="/img/poster.svg" id="poster" alt="Illustration d'un poster affichant Portfolio - Solène Bord">
      <nav>
          <RouterLink :to="{ name: 'home' }" id="home" class="swing"><img src="/img/accueil.svg" alt="Accueil - Icone d'un pot de fleur suspendu contenant un cactus"></RouterLink>
          <RouterLink :to="{ name: 'work' }" id="work" class="swing"><img src="/img/travaux.svg" alt="Travaux - Icone Icone d'un pot de fleur suspendu contenant une plante collier de perles"></RouterLink>
          <RouterLink :to="{ name: 'about' }" id="about" class="swing"><img src="/img/profil.svg" alt="Profil - Icone d'un pot de fleur suspendu contenant une monstera"></RouterLink>
          <RouterLink :to="{ name: 'contact' }" id="contact" class="swing"><img src="/img/contact.svg" alt="Contact - Icone d'un pot de fleur suspendu contenant une fougère"></RouterLink>
          
      </nav>
      <!--
      <img class="swing" v-if=" darkMode == true" @click="darkMode = !darkMode"  src="/img/nuit.svg" id="mode" alt="Mode sombre - Icone d'un cadre contenant une lune" >
      <img class="swing" v-else @click="darkMode = !darkMode" src="/img/jour.svg" id="mode" alt="Mode clair - Icone d'un cadre contenant un soleil" >
      <img class="swing" v-if=" isFrench == true" @click="isFrench = !isFrench" src="/img/francais.svg" id="language" alt="Langue française - Icone d'un cadre contenant le drapeau français" >
      <img class="swing" v-else @click="isFrench = !isFrench" src="/img/anglais.svg" id="language" alt="Langue anglaise - Icone d'un cadre contenant le drapeau du Royaume-Uni" > 
      -->
    </header>

    <div class="vue">
      <router-view/>
    </div>

  </main>

</template>


<style scoped>
  html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

main {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Utilisez min-height pour que la hauteur s'ajuste automatiquement */
}


.swing :hover {
    animation: swing ease-in-out 0.7s alternate;
    transform-origin: center -20px;
    float:left;
    
    
}

@keyframes swing {
    0% { transform: rotate(0deg); }
    25% { transform: rotate(2deg); }
    60% {transform: rotate(-2deg);} 
    90% {transform: rotate(0.5deg);}
    100% { transform: rotate(0deg); }
}

</style>
