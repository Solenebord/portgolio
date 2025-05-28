<script>
import { projects } from '/src/projectData.js';

export default {
  name: "SliderImages",
  data() {
    return {
      images : projects.slice(0, 3).map(project => project.image),
      timer: null,
      currentIndex: 0
    };
  },
  mounted: function() {
    this.startSlide();
  },
  methods: {
    redirectToWork() {
      const currentProject = projects[Math.abs(this.currentIndex) % 4];
      // Utilisez le routeur pour rediriger vers la vue "WorkDetail" avec l'ID du projet
      this.$router.push({ name: 'work-detail', params: { id: currentProject.id } });
    },
    startSlide: function() {
      this.timer = setInterval(this.next, 5000);
    },
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },
  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  },
}
</script>


<template>
  
    <div class="slider-wrap" @click="redirectToWork" :style="{ backgroundImage: 'url(' + currentImg + ')' }" id="slider-wrap">
      <a class="prev" @click.stop="prev" href="#slider-wrap">&#10094;</a>
      <a class="next" @click.stop="next" href="#slider-wrap">&#10095;</a>
    </div>

</template>



<style>

.slider-wrap {
    width: 400px;
    height: 250px;
    /* display: flex; */
    /* position: relative; */
    align-items: center;
    border: 3px solid rgb(72, 72, 72);
    border-radius: 15px;
    overflow: hidden;
    position: relative;
    background-repeat: no-repeat;
    background-position: center;
    
}

.slider-wrap::before {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  margin-right: -0.25em; /* Adjustement pour supprimer l'espace blanc sous l'image */
}

.slider-wrap img {
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}


.fade-enter-active,
.fade-leave-active {
  transition: background-image 0.9s ease;

}

.fade-enter,
.fade-leave-to {
  background-image: none;
}

/* .img-slider {
  height:300px;
  width: 300px;
  border: thick solid rgb(0, 128, 21);
} */

.prev, .next {
  cursor: pointer;
  position: absolute;
  /* top: 40%; */
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  text-decoration: none;
  user-select: none;
  background-color: rgba(100, 100, 100, 0.3);
  border-radius: 35px;
  top: 50%;
  transform: translateY(-50%);
}

.next {
  right: 5px;
  
}

.prev {
  left: 5px;
  
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}

</style>