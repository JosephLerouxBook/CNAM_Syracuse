# Projet du CNAM - Suite de Syracuse

## Introduction

Le but est de réaliser un ensemble de page affichant une suite de Syracuse en partant d'un nombre donner par l'utilisateur. 
Le projet doit contenir : 
- [x] Un DOM de chaque fichier. 
- [x] Un (ou plusieurs) fichier JS organisés inteligement.
- [x] Une utilisation de Flex-box permettant l'aspect Responsive.
- [x] Un (ou plusieurs) fichier CSS organisés inteligement.
- [x] Un aspect graphique du site soigné.

## Fichiers du projet
### Arborescence

Le projet est séparer en un ensemble de fichier réparti comme suit :   
- DOM
  - page_cat
    - cat.drawio
    - cat.html
    - cat.png
    - cat.svg
  - page_index
    - index.drawio
    - index.html
    - index.png
    - index.svg
  - page_syracuse
    - syracuse.drawio
    - syracuse.html
    - syracuse.png
    - syracuse.svg
- Fonts
- JS 
  - func-syracuse.js
  - func-tableauResultat.js
  - func-APIfetcher.js
  - func-valueChecker.js
- Style
  - general.css
  - font.css
  - general.css
- index.html
- syrracuse.html
- cat.html
- sujet.pdf
- README.md <== Vous etes ici. 

### __Description__
#### _Dossier_ 
__JS__ : Dossier contenant l'ensembe des fichiers javascript necessaire au bon fonctionnement du projet.<br/>
__Style__ : Dossier contenant l'ensemble des fichiers css necessaire a la mise en page du projet.<br/>
__Fonts__ : Dossier contenant l'ensemble des police de caractère utiliser pour le projet.<br/>
__DOM__ : Dossier contenant les DOM des differentes pages.

#### _fichier HTML_
__index.html__ : Page de garde décrivant un peu l'histoire derriere la suite de Syracuse, cette page mene _syrracuse.html_<br/>
__syrracuse.html__ : Page lançant la suite de Syracuse du nombre entrer par l'utilisateur.<br/>
__cat.html__ : Page lançant le script JS APIfetcher recuperant une image de chat aléatoire de l'API [https://thecatapi.com/](https://thecatapi.com/) et l'affiche.<br/>
__DOM/cat.html__ : Page contenant le DOM de la page cat.html<br/>
__DOM/index.html__ : Page contenant le DOM de la page index.html<br/>
__DOM/syracuse.html__ : Page contenant le DOM de la page syracuse.html<br/>

#### _fichier CSS_
__general.css__ : Contient le CSS "general", la mise en page des titre, de la couleur du fond etc...<br/>
__flex.css__ : Contient le CSS modifiant les elements flex-container et flex-item des differentes pages.<br/>
__font.css__ : Contient les FontFamily lié au dossier Font et modifiant les differentes polices de pages. (Texte, titre et bouttons)<br/> 
 
#### _fichier JS_
__func-syrracuse.js__ : Function prenant un entier en entrée et retournant la suite de Syracuse associé<br/>
__func-tableauResultat.js__ : Functions permettant la création et destruction du tableau de résultat. Création prend 1 tableau en parametre et ecrit directement les valeurs du tableau dans une table HTML sur la page. Destruction cible le tableau de resultat et supprime les elements ajouter par la création.<br/> 
__func-APIfetcher.js__ : Script recuperant un .json depuis https://thecatapi.com/ contenant les informations concernant la photo generer. Notamment son URL, permettant ainsi l'affichage d'un chat aléatoire sur la page cat.html<br/>
__func-valueChecker.js__ : Ensemble des fonction verifiant ce que l'utilisateur a pu tapper.<br/>
  
   
    
> « les mathématiques ne sont pas encore prêtes pour de tels problèmes. » - Paul Erdős

