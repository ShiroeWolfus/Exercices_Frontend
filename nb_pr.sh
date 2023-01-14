# bin/bash
clear
#Stock le nombre dans une variable
read -p "Entrez un nombre pour vérifier s'il s'agit d'un nombre premier : " nb_pr
#Pour ne pas compter 1 commencer à 2
div=2
#Vérifier s'il est divisible par lui-même et par 1
#Tant qu'on ne trouve pas de résultat décimal et que le nombre est supérieur à 1
while [ ! $(($nb_pr % div )) -eq 0 -a $nb_pr -gt 1 ]
	do
		div=$(( div + 1 ))
done
# Alors on teste tous les diviseurs égal au nombre affiché
if [ ! $div -eq $nb_pr ]; then
	echo "Il ne s'agit pas d'un nombre premier"
elif [ $nb_pr -eq 1 ]; then
	echo "Il ne s'agit pas d'un nombre premier"
else
	echo "Il s'agit d'un nombre premier"
fi
#si résultat valide, c'est un nombre premier


exit 0 ;
