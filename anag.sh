# bin/bash
clear
read -p "Entrez vos deux mots à comparer :" mot1 mot2
#Vérification des chaînes de caractères similaires avant de traiter si ce sont des anagrammes
if [ ${#mot1} != ${#mot2} ]; then
echo "les mots entrés ne peuvent pas être des anagrammes. Nombre de caractères différent"

exit 0 ;
fi

#On extrait chaque lettre qu'on range dans un ordre alphabétique dans 2 variables
ang_mot1=$( echo $mot1 | grep -o -i "[a-z]" | sort -d )
ang_mot2=$( echo $mot2 | grep -o -i "[a-z]" | sort -d )

#Tous les réusltats de array_mot1 comparés à array_2
if [ "$ang_mot1" = "$ang_mot2" ]; then

#si correspondance affiché True si pas de correspondance affiché False
	echo "Ce sont des anagrammes. "$mot1" est l'anagramme de "$mot2

#si True affiché la phrase suivante
else
	echo "Ce ne sont pas des annagrammes"

exit 0 ;
fi
