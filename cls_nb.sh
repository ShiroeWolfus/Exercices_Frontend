#! bin/bash
clear
#Déclarer un tableau
tbl_nb=()

#Lecture des entrées des entiers
read -p "Entrez des nombres : " -a tbl_nb

#Les variables pour stocker les éléments 
nb_max=$tbl_nb
nb_min=$tbl_nb
#Stocke dans les variables le nombre le plus petit et le plus grand.
for nb_temp in ${tbl_nb[@]}; do

	if [ $nb_temp -lt $nb_min ]; then
		nb_min=$nb_temp
	fi

	if [ $nb_temp -gt $nb_max ]; then
		nb_max=$nb_temp
	fi
done

#Afficher la valeur maximale du tableau
echo "Dans la série de " ${#tbl_nb[@]} "nombre, le plus grand est :" $nb_max

exit 0 ;
