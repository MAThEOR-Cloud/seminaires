<script setup lang="ts">

</script>

<template>
	<h1 id="title">Séminaire des doctorants IRIMAS</h1>
	<main>
		<div id="content">
			<img src="@/assets/campus-de-l-illberg.jpg" />
			<p>
				Bienvenue sur le site du séminaire des doctorants de l’IRIMAS ! Sur cette page d’accueil, vous trouverez quelques informations sur le fonctionnement du séminaire.
			</p>
			<p>
				 L'IRIMAS est divisé en trois départements, qui sont eux-mêmes divisés en <a href="https://www.irimas.uha.fr/index.php/equipes/" target="_blank">équipes</a>  (pour plus d’informations voir le site de l’IRIMAS). Chaque équipe a un représentant. Le rôle du représentant d’équipe est de conseiller et d’informer les gens dans son équipe et de faire remonter des informations au coordinateur du séminaire. Le responsable de chaque équipe anime la session lorsque c’est quelqu’un de son équipe qui présente. Le coordinateur du séminaire s’occupe du bon déroulement de l’ensemble, en lien avec les responsables d’équipes, la direction de l’IRIMAS et l’école doctorale.
			</p>
			<p>
				Tout le monde peut assister au séminaire : doctorants, chercheurs, stagiaires de master (de l’IRIMAS ou de l’extérieur).
			</p>
			<p>
				Le séminaire a lieu toutes les semaines à Mulhouse ou à Colmar, généralement le Jeudi. Hormis les cas où le présentateur ne peut pas être présent à Mulhouse ou Colmar, les présentations se font en présentiel.
			</p>
			<p>
				Plusieurs formats de séminaire sont possibles :
				<ul>
					<li>une intervention de 30 minutes, avec 20 minutes de présentation et 10 minutes de questions ;</li>
					<li>deux interventions de 30 minutes, avec chacune 20 minutes de présentation et 10 minutes de questions ;</li>
					<li>une intervention de 45 minutes, avec 45 minutes de présentations et 15 minutes de questions.</li>
				</ul>
			</p>
			<p>
				Pour demander à faire une présentation, il suffit d'envoyer un mail au coordinateur (voir contact) en lui précisant la date où vous voudriez faire vôtre présentation. Pour les disponibilités, voir <b-link to="/schedule">ici</b-link>.
			</p>
			<p>
				S’il en fallait, voici quelques raisons pour participer au séminaire :
				<ul>
					<li>travailler sa capacité à faire des présentations dans un cadre bienveillant ;</li>
					<li>prendre au sérieux la tâche de diffusion du savoir scientifique (pour ceux qui présentent) ;</li>
					<li>savoir sur quoi travaillent les gens du même laboratoire ;</li>
					<li>augmenter sa culture scientifique général ;</li>
					<li>amorcer d’éventuelles collaborations ;</li>
					<li>rencontrer de nouvelles personnes et parler de science ;</li>
					<li>ajouter une ligne sur un curriculum vitae.</li>
				</ul>
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
}
</style>