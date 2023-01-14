# bin/bash
clear

#stocker l'input
read -p "Entrez un nombre pour trouver de combien de nombre le compose : " chiff

#décompose ce qui a été stocké dans une variable
nb_ch=$(echo $chiff | grep -o "[0-9]"| wc -l)

#affiche ce qui a été entré et le nombre de chiffres qui le compose
echo $chiff "se compose de " $nb_ch " chiffres"

exit 0 ;
