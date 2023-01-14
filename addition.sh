#! bin/bash

clear
#Déclarer un tableau pour stocker le nombre
nb=()

#Stocker le nombre dans le tableau
read -p "Entrez un nombre entier : " nb_entier

#Décomposer le nombre en chiffre
nb+=$(echo $nb_entier | grep -o "[1-9]" )

#Faire la somme des chiffres du tableau
total=0

for i in ${nb[@]}
do
	let total+=$i
done

#Afficher le résultat
echo "La somme des chiffres du nombre est de : " $total

exit 0 ;
