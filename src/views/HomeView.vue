<script>
import SliderImages from "/src/components/SliderImages.vue";
export default {
  data() {
    return {
      currentHour: this.getCurrentHour(),
      currentMinute: this.getCurrentMinute(),
    };
  },
  components: {
    SliderImages
  },
  created() {
    // Mettre à jour l'heure chaque seconde
    setInterval(() => {
      this.currentHour = this.getCurrentHour();
      this.currentMinute = this.getCurrentMinute();
    }, 1000);
  },
  methods: {
    getCurrentHour() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      return hours;
    },
    getCurrentMinute() {
      const now = new Date();
      const minutes = now.getMinutes().toString().padStart(2, '0');
      return minutes;
    }
    },
  
  
};
</script>

<template>
    
    <div class="scene">
      <div id="desktop">
      <!--<div id="shelves">
        <div class="shelf top-shelf"></div>
      <div class="shelf bottom-shelf"></div>
      </div>-->
      <img src="/img/light.png" id="light">
      
      <div id="computer">
        <div id="computer-screen">
          <SliderImages id="slider" />
        </div>
        <div id="computer-stand"></div>
        <div id="computer-base"></div>
      </div>

      <img src="/img/mug.png" id="mug">
      
      <div id="time"><p>{{ currentHour }}<span id="sec">:</span>{{ currentMinute }}</p></div>
      </div>
      <div id="desk"></div>
    </div>
    

</template>

<style scoped>
 .scene {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  margin: auto;

 }

 #desktop {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  min-height: 300px;
  align-items: flex-end;
  
 }

 #desk {
  display: block;
  width: 100%;
  height: 20px;
  background-color: #E95563;
  border: 3px solid #7D2921;
  border-radius: 10px;
 }

/* #shelves {
  display: flex;
  flex-direction: column;
  width: 300px;
} */

 

 /* .top-shelf {
  border: 20px solid rgb(137, 49, 33);
  border-radius: 5px 5px 0 0;

 }

 .bottom-shelf {
  border-left-width: 20px;
  border-right-width: 20px;
  border-style: solid;
  border-color: rgb(137, 49, 33);
  

 } */

 #time {
  background-image: url("/img/alarm.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  min-width: 100px;
  min-height: 60px;
  /* border: 10px solid rgb(60, 92, 64);
  border-radius: 10px;
  background-color: beige; */
  color: rgb(13, 13, 13); 
  font-weight: bold;
  text-align: center;
  margin-top: auto;
  
 }

 

 @keyframes fadeInOut {
  0%, 100% {
    opacity: 0;
  }
  40%, 60% {
    opacity: 1;
  }
}

#sec {
  animation: fadeInOut 1s infinite; /* 1 seconde pour l'animation, en boucle (infinite) */
}

#computer {
  display: flex;
  flex-direction: column;
  align-items: center;
  
}

#computer-screen {
  padding: 10px;
  border: 3px solid rgb(72, 72, 72);
  border-radius: 15px;
  background-color: rgb(135, 135, 135);
  /* width: 400px;
    max-height: 250px; */
}


#computer-stand {
  /* clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%); */
  border: 3px solid rgb(72, 72, 72);
  border-top: 0;
  border-bottom: 0;
  background-color: rgb(135, 135, 135);
  height: 10px;
  width: 50px;
}

#computer-base {
  /* clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%); */
  border: 3px solid rgb(72, 72, 72);
  background-color: rgb(135, 135, 135);
  height: 5px;
  width: 130px;
  border-radius: 20px 20px 0 0;
}

#mug {
  height: 150px;
}

#light {
  height: 250px;
}

 


</style>
