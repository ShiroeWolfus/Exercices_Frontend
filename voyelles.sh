#! bin/bash
clear

#Entre chaîne de caractères"
read -p "Entrez texte : " msg

#Stocker caractères
#Comparer présence voyelles à  message
voy=$(echo $msg | grep -o -i "[aeiou]" | wc -l)

#Afficher décompte
echo "Nombre de voyelles dans la chaîne :" $voy

exit 0 ;
