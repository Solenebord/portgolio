<script>
import { projects } from '/src/projectData.js';

export default {
  data() {
    return {
      projects,
    };
  },
};
</script>

<template>
 <div>
    
    <div class="project-list">

      <router-link v-for="project in projects" :key="project.id" :to="{ name: 'work-detail', params: { id: project.id }}">
        <div :class="'project project-' + (project.id)">
        <div class="square-frame"><img :src="project.image" alt="Project Thumbnail"></div>
        <h3>{{ project.title }}</h3>
        <p>{{ project.type }}</p>
        </div>
      </router-link>

    </div>

  </div>
  
</template>

<style scoped>
  
  

  .square-frame {
    width: 200px;
    height: 200px;
    overflow: hidden;
    border:solid 2px #767676;
    
    
  }

  .square-frame img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-bottom: 30px;
  }


  .project-list{
  /* position:absolute; */
  margin:auto;
  padding:0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 1000px;
  }

.project {
  text-align:center;
  display:inline-block;
  position:relative;
  border:solid 2px #767676;
  background:#fff;
  padding: 30px 30px 10px 30px;
  /* box-shadow:0 0 15px 0px #555; */
  transition:all 1s ease;
  -o-transition:all 1s ease;
  -moz-transition:all 1s ease;
  -webkit-transition:all 1s ease;
  top:50px;
  margin: 30px;
}


.project:hover{
  top:0px;
  transform: rotate(0deg);
}


a{
  text-decoration: none;
  color: black;
}

.project-0 {
  transform: rotate(-5deg);
}

.project-1 {
  transform: rotate(10deg);
}

.project-2 {
  transform: rotate(-5deg);
}

.project-3 {
  transform: rotate(-10deg);
}

.project-4 {
  transform: rotate(5deg);
}

.project-5 {
  transform: rotate(-10deg);
}

.project-6 {
  transform: rotate(-5deg);
}

.project-7 {
  transform: rotate(10deg);
}


</style>
