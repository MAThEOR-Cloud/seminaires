<script setup lang="ts">

</script>

<template>
	<h1 id="title">Séminaire des doctorants IRIMAS</h1>
	<main>
		<div id="content">
			<div>
				<img src="@/assets/campus-de-l-illberg.jpg" />
			</div>
			<div style="padding: 20px; background-color: white; box-shadow: 0px 0px 2px #555555; border-radius: 5px;">
				<p>
					Le séminaire a lieu toute les semaines à Mulhouse ou à Colmar, généralement le Jeudi. Sauf dans les cas où le présentateur ne peut pas être présent à Mulhouse ou Colmar, les présentations se font en présentiel.
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
					L'IRIMAS est divisé en trois départements, qui sont eux-mêmes divisés en équipes. Chaques <a href="https://www.irimas.uha.fr/index.php/equipes/" target="_blank">équipe</a> a un représentant. Le rôles des représentants est de conseiller et informer les gens dans son équipe et de faire remonter des informations au coordinateur. Le responsable de chaque équipe fera aussi chairman lorsque quelqu’un de son équipe présente.
				</p>
				<p>
					Pour demander à faire une présentation, il suffit d'envoyer un mail au coordinateur en lui précisant la date où vous voudriez faire vôtre présentation.
				</p>
				<p>
					Pour les créneaux libre, voir le <b-link to="/schedule">programme</b-link>.
				</p>
			</div>
		</div>
	</main>
</template>

<style scoped>
#content {
	text-align: justify;
	display: flex;
	align-items: center;
	flex-direction: column;
}

#content img {
	width: 100%;
	margin-bottom: 10px;
	border-radius: 5px;
}

@media (min-width: 1024px) {
  #content {
    flex-direction: row;
  }

  #content img {
  	width: auto;
	  height: auto;
	  max-width: 200%;
	  max-height: 200%;
	  margin-bottom: 0px;
  }
}
</style>