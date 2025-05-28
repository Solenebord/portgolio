<script>

</script>

<template>
   <!-- <h1>Pour me contacter:</h1>
   <br> -->
 <div id="contact"> 
   <div class="mail">
      <p>bord.solene@gmail.com</p>
   </div>
   <!-- <div class="socials">
    <p>Mes réseaux: </p> -->
    <div class="social-links">
      <a href="https://www.linkedin.com/in/solenebord/" target="_blank"><img src="/img/linkedin.png" alt="Logo Linkedin"></a>
      <a href="https://github.com/Solenebord" target="_blank"><img src="/img/github.png" alt="Logo Github"></a>
    </div>
   <!-- </div> -->
</div>
</template>

<style scoped>
   .social-links {
      display: flex;
      flex-direction: column;
      width: 300px;
      
   }

   .social-links a img{
      display: block;
      max-width: 250px;
      
   }

   

   .mail{
      height: 350px;
      width: 450px;
      background-image: url("/img/mail.png");
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
      transform: rotate(-6deg);
      /* position: relative; */
      text-align: center;
      
   }

   .mail p{
      transform: rotate(6deg);
      /* position: absolute; */
      margin-top: 20%;
      left: 35%; /* Ajoutez left: 0 pour le positionnement horizontal */
      
   }

   #contact {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin: auto;
   }

   

   .social-links a:nth-child(1) {
      transform: rotate(5deg);
      align-self: flex-end;
      transition:all 0.5s ease-out;
   }

   .social-links a:nth-child(2) {
      transform: rotate(-5deg);
      align-self: flex-start;
      transition:all 0.5s ease-out;
   }

   .social-links a:hover {
      transform: rotate(0deg);
      
   }

</style>