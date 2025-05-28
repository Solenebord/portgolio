<script>

</script>

<template>
    <div id="profile">
        <div>
            <div class="pfp-frame"><img src="/img/solene.jpg" alt="Photo de profil"></div>
            <!-- <p>Nom: BORD</p>
            <p>Prénom: Solène</p>
            <p>Âge: 20</p> -->
        </div>
        <div>
            <p>Je suis étudiante en troisième année de BUT Métiers du Multimédia et de l'Internet à l’IUT de Troyes.  Après avoir commencé mes études en création graphique, développement, communication et audiovisuel, je me suis dirigée vers le parcours Développement Web et Dispositifs Interactifs.</p>
            <p>En 2023, j'ai eu la chance de pouvoir passer un semestre à Montréal dans le cadre de mes études. C'est une expérience qui m'a marqué, et qui a permis d'enrichir mes compétences et mon travail. J'aime explorer et exprimer ma créativité grâce à des projets versatiles mêlant développement, design graphique et narration. Récemment, j’ai aussi adoré travailler sur Unity, notamment pour créer un Escape Game en VR. Je suis curieuse et impliquée, ce qui me permet d’être polyvalente et de m’adapter rapidement à des nouveaux projets.</p>
            <p>Je suis actuellement à la recherche d'un stage en développement et/ou design graphique pour continuer à développer mes compétences et acquérir de l'expérience. </p>
        </div>

    </div>
</template>

<style scoped>
    .pfp-frame img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .pfp-frame {
        width: 300px;
        height: 300px;
        overflow: hidden;
        border-radius: 64% 36% 41% 59% / 46% 35% 65% 54%  ;
    }

    #profile {
        width: 800px;
        border-radius: 2% 98% 2% 98% / 96% 2% 98% 4%;
        background-color: #fff;
        border: solid 5px rgb(131, 129, 129);
        padding: 30px;
        display: flex;
        flex-direction: row;
        transform: rotate(-5deg);
        margin: auto;
        transition:all 0.5s ease-out;
    }

    #profile:hover {
        transform: rotate(0deg);
    }

    #profile div {
        display: flex;
        flex-direction: column;
        margin: 10px;
    }

</style>