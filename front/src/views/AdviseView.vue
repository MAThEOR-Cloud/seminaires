<script setup lang="ts">

</script>

<template>
  <h1 id="title">Conseils</h1>
  <main>
    <div id="content">
      <img src="@/assets/campus-de-l-illberg.jpg" />
    	<p>
      	Cette page a pour objectif de donner quelques conseils pour faire un exposé adapté à l’auditoire et qui évite les écueils les plus fréquents :
      </p>
      <p>
      	<ul>
      		<li>pas plus d'une slide par minutes ;</li>
      		<li>ne pas charger trop les slides ;</li>
      		<li>ne pas chercher à faire une revue exhaustive de la littérature ;</li>
      		<li>ne pas chercher à présenter tout vos résultats. Un seul résultat parlant et bien détaillé suffit ;</li>
      		<li>ne pas hésiter à détailler un exemple ;</li>
      		<li>essayer de donner de l'intuition par tout les moyens (exemple, schémas, dessins, calcul simple, etc...) ;</li>
      		<li>quand vous utilisez du vocabulaire techniques, des abréviations ou des notations qui ne sont pas universelles, prenez le temps de l'expliquer à l'auditoire. Sinon ne les utilisez pas... ;</li>
      		<li>quand vous utilisez une formule, prenez quelques secondes pour l'expliquer ;</li>
      		<li>quand vous présentez une illustration, expliquer bien ce que vous montrer (paramètres, variables, etc...) ;</li>
      		<li>faire relire vôtre présentation à quelqu'un (directeur de thèse, autres doctorants, etc...).</li>
      	</ul>
      </p>
      <p>
      	Pour aller plus loin, voilà une <a href="http://www.its.caltech.edu/~matilde/Ma10Notes.pdf" target="_blank">référence</a> (en anglais) bien écrite et amusante qui donne quelques conseils pour faire une bonne présentation. Initialement elle concerne les mathématiques et la physique théorique, mais contient des éléments utiles pour d’autres champs disciplinaires.
      </p>
    </div>
  </main>
</template>

<style scoped>
#content {
  text-align: justify;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 2px #aaaaaa;
  border-radius: 5px;
}

#content img {
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0px 0px 2px #aaaaaa;
  float: left;
  margin-right: 50px;
  width: 100%;
  height: auto;
}

@media (min-width: 1024px) {
  #content img {
    height: 500px;
    width: auto;
    margin-bottom: 0px;
  }

  #content {
    min-height: 540px;
  }
}
</style>