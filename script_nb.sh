#! bin/bash

clear

#Enregistrer entrée d'un nombre
read -p "Entrez nombre : " nombre;

#Pour chaque nombre y ajouter +1 jusqu'au nombre pré cité
	for  ((i=1; i <= $nombre; i++)); do

#Affiche la série de nombre de 1 à l'input
		echo -n "$i "
	done;

exit 0 ;
