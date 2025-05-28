<template>
  <div>
    <br id="viewtop">

    <div class="details">
      <!-- détails spécifiques du projet -->
      <div class="description">
        <div id="project_image">
          <img :src="project.image" alt="Project Image" >
          <h2>{{ project.type }}</h2>
        </div>
        <br>
        <div id="project_description">
          <h2>{{ project.title }}</h2>
          <br>
          <p>{{ project.description }}</p>
        </div>
      </div>

      <!-- Afficher la galerie si elle existe -->
      <div v-if="project.gallery && project.gallery.length > 0" class="shelves">
        <div v-for="(item, index) in project.gallery" :key="item.name" id="gallery">
          <!-- Commencer une nouvelle ligne pour chaque groupe de 2 items -->
          <div v-if="index % 2 === 0">
            <!-- Afficher les 2 items dans cette ligne -->
            <div class="shelf-container">
              <div v-for="i in 2" :key="index + i" :class="{ 'reversed': index % 4 >= 2 }" class="item">
                <!-- Vérifier si l'index est inférieur à la longueur de la galerie -->
                <div v-if="index + i - 1 < project.gallery.length" class="item-content">
                  <div class="item-image">
                    <img
                    :src="project.gallery[index + i - 1]?.path"
                    alt="Gallery Image"
                    class="gallery-image"
                    @click="openImageViewer(index + i - 1)"
                    />
                  </div>
                  <div class="item-description">
                    <h3>{{ project.gallery[index + i - 1]?.name }} </h3>
                    <p class="img-description">{{ project.gallery[index + i - 1]?.text }}</p>  
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <!-- Afficher les liens si ils existent -->
      <div v-if="project.link && project.link.length > 0" class="project_link">
        <h2>Liens</h2>
        <ul>
          <li v-for="link in project.link" :key="link.name">
            <a :href="link.path" target="_blank">{{ link.text }}</a>
          </li>
        </ul>
      </div>
    </div>


    <a @click="$router.back" class="go-back">&#10094;  Retour aux travaux</a>

    <!-- Visionneuse d'images -->
  <div v-show="showImageViewer" class="image-viewer">
    <span class="close" @click="closeImageViewer">&times;</span>
    <img :src="currentImage.path" alt="Full Size Image" class="full-size-img">
    <span class="prev" @click="prevImage">&#10094;</span>
    <span class="next" @click="nextImage">&#10095;</span>
   

  </div>

  </div>
</template>

<script>
import { projects } from '/src/projectData.js';

export default {
  data() {
    return {
      project: null,
      showImageViewer: false,
      currentImageIndex: 0,
      zoomLevel: 1,
    };
  },

  /* beforeRouteUpdate(to, from, next) {
    console.log("before route update");
    // Faites défiler la page vers le haut lorsque vous accédez à une nouvelle route
    window.scrollTo(0, 0);
    next();
  }, */

  methods: {
    openImageViewer(index) {
      console.log('Ouverture de la visionneuse d\'images');
      this.currentImageIndex = index;
      this.showImageViewer = true;
    },
    closeImageViewer() {
      this.showImageViewer = false;
    },
    prevImage() {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.project.gallery.length) % this.project.gallery.length;
    },
    nextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.project.gallery.length;
    },
    

  },
  computed: {
    currentImage() {
      return this.project.gallery[this.currentImageIndex] || {};
    },
  },
  created() {
    const projectId = parseInt(this.$route.params.id);
    this.project = projects.find(p => p.id === projectId);

    if (this.project.gallery && this.project.gallery.length > 0) {
    console.log('Galerie non vide');
  } else {
    console.log('Galerie vide ou inexistante');
  }
  },

  mounted() {
    // Faites défiler la page vers l'élément avec l'ID spécifié lorsque le composant est monté
    const element = document.getElementById('viewtop');
    if (element) {
      element.scrollIntoView({ block: 'start' });
    } else {
      // Si l'élément avec l'ID spécifié n'est pas trouvé, faites défiler vers le haut de la page
      window.scrollTo({ top: 0 });
    }
  }
};
</script>

<style scoped>
  .gallery-image {
    cursor: zoom-in;
    max-height: 180px;
    max-width: 200px;
    /* Ajoutez d'autres styles si nécessaire */
  }

  .image-viewer {
    /* display: none; */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 1;
  }

  .image-viewer img {
  max-width: 80%;
  max-height: 80%;
  margin: auto;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* transform: translate(-50%, -50%) scale(var(--zoomLevel));
  transition: transform 0.5s ease; Ajoutez une transition fluide pour le zoom */ 
  }

  .image-viewer .close {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 40px;
    color: #fff;
    cursor: pointer;
  }

  .image-viewer .prev,
  .image-viewer .next {
    font-size: 40px;
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  .image-viewer .prev {
    left: 15px;
  }

  .image-viewer .next {
    right: 15px;
  }

  .go-back{
    cursor: pointer;
    /* font-weight: 600; */
    font-size:30px;
    text-align: center;
    font-family: "Lilita One";
  }

  .shelves {
    display: flex;
    flex-direction: column;
    padding: 30px;
    flex-wrap: wrap;
  }
 
  #gallery {
    width: 100%;
  }

  .shelf-container {
    display: flex;
    flex-direction: row;
    margin: 10px;
    width: 100%;
    align-items: center;
  }

  .description {
    background-image: url('/img/description_book.png');
    background-repeat: no-repeat;
    background-size: contain;
    height: 500px;  
    width: 950px;
    margin: auto;
    background-position: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 20px 50px;

  }

  #project_description {
    margin: 15px;
    padding-left: 20px;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
  }

  #project_description *{
    margin: 10px;
  }

  #project_image {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  #project_image img {
    max-height: 250px;
    border: 2px solid lightgrey;
    min-width: 350px;
    max-width: 370px;

  }

  .project_link {
    background-image: url('/img/list.png');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    min-height: 400px;
    width: 400px;
    text-align: center;
    padding: 50px;
    padding-top: 200px;
    margin: auto;
  }

  /* .project_link ul {
    list-style: none;
    
  } */

  .project_link li {
    list-style: circle;
    margin-bottom: 37px;
    text-align: left;
    margin-left: 35px;
  }

  .project_link a {
    text-decoration: none;
    color: black;
  }

  .item {
    width: 50%;
  }

  .item-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    min-height: 300px;
  }


  .item-image, .item-description {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    min-height: 200px;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    margin: 10px;
  }

  .item-description {
    background-image: url("/img/note.png");
    align-self: flex-end;
    background-position: bottom;
    padding: 20px;
  }

  .item-image {
    background-image: url("/img/taped_note.png");
    align-self: flex-start;
    padding: 20px;
    padding-top: 40px;
  }

  .reversed .item-content {
    flex-direction: row-reverse; 
  }

  .img-description{
    margin: 0 20px;
  }


 
  
  



</style>
