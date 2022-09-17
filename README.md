# Site du séminaire des doctorants IRIMAS

## Procédure de modification du site (sur windows)

###A avoir avant :
1) un compte github ou le mot de passe du compte du séminaire
2) FileZilla
3) Node.js


###En local :

1) Clonez à partir de github: code / HTTPS / copier
2) Si ce n'est pas fait installer npm sur votre ordinateur : **npm install**
3) Télcharger le site en local sur la machine : **git clone lien_copié_sur_github**
4) Faire les les modifications sur le site
  -Aller dans front --> src --> views pour modifier les textes
  -Aller dans front --> src --> services pour modifier les programmes
  -Aller dans front --> public pour ajouter les abstracts et les slides (attention le nom du pdf doit être celui de l'ID dans services)
6) Vérifier les modifications : **npm run dev** en étant situé dans front sur l'invite de commande. Copier le lien affiché
dans un navigateur.

##Mise en route sur internet :

1) ouvrir fileZilla
2) cliquer sur **gestionnaire de site** --> "**nouveau site**-> remplir tout --> **connexion**
3) **git status** pour voir les commandes 
4) **git add** pour ajouter la modif
5) **git status** pour vérifier
6) **git commit -m "message_à_mettre_sur git"**
7) **git push** pour envoyer la modification sur git
