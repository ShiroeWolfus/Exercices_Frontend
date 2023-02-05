//Création d'une fonction pour afficher la nav
//déclartion des variables relatives au bouton et à la nav
let colps = document.getElementById("colaps");
let menuToggle = document.getElementById("menu_deroul");

//fonction pour afficher au click la nav et la faire disparaître
colps.addEventListener("click",()=> {
    if (menuToggle.style.display==="flex") {
        menuToggle.style.display = "none";
    }
    else {
        menuToggle.style.display="flex";
    }
}); 

//Création des menus et de son tableau avec liens
let mn1 = document.getElementById("menu1");
let mn2 = document.getElementById("menu2");
let mn3 = document.getElementById("menu3");
let mn4 = document.getElementById("menu4");
let mn5 = document.getElementById("menu5");

//Création du tableau des liens d'image
let images = [
    "https://fr.web.img4.acsta.net/pictures/20/12/30/15/29/2260085.jpg",
    "https://img.finalfantasyxiv.com/lds/promo/h/C/cBE56mQPnfQZMyKML8osBtklpk.png",
    "https://assets-prd.ignimgs.com/2022/07/02/final-fantasy-14-island-sanctuary-1634100146362-1656774170065.jpg",
]

//création du titre du menu1
// let modul1=document.createElement("section");
let men1 = document.createElement("h3");

mn1.addEventListener("click",()=> {
    
    men1.innerHTML = "Menu 1";
    men1.setAttribute("id", "titre1");
    
    //attacher le menu 1 à la div (modul1)
    document.getElementById("tab").appendChild(men1)
    // modul1.appendChild(men1);
    
    //création du tableau attaché au menu 1
    let tabLink = document.createElement('table');
    men1.appendChild(tabLink);
    
    //espace d'affichage de l'image
    let imageTarget = document.createElement("div");
    men1.appendChild(imageTarget);

    //création de la variable pour l'entête
    let tabHead = document.createElement('thead');
    tabLink.appendChild(tabHead);
        
    //attacher l'en-tête du tableau à la table
    let titTab1 = document.createElement("th");
    tabHead.appendChild(titTab1);
    titTab1.innerHTML = ` Liens image `
    
    //création du body de la table
    let tabLinkBody = document.createElement('tbody');
    
    //attacher le body du tableau à la table
    tabLink.appendChild(tabLinkBody);
    
    //création des tr et td par fonction. 
    for (let i= 0; i < 1; i++){
        //Création des Tr et TD du tableau
        let linkCell = document.createElement("tr");
        for (let j = 0; j < 3 ; j++){
            let celLink = document.createElement("td");
            //création de l'url et de l'élement ancre 
            let ancre = document.createElement("a");
            let titreAncre = document.createTextNode(` Lien${j}image `);
            //attribution de l'url à chaque élément du tableau
            ancre.setAttribute("href",`${images[j]}`);
            //lien entre les éléments 
            ancre.appendChild(titreAncre);
            celLink.appendChild(linkCell);
            linkCell.appendChild(ancre);
            tabLinkBody.appendChild(linkCell);
            
            //création de la fonction mouse hover et mouse out pour les liens d'image
            // sourisHover
            ancre.addEventListener("mouseover",()=>{
                // ancre.target.display = 'block';
                imageTarget.innerHTML = `<img src=${images[j]}>`
            
            // sourisOut
            tabLinkBody.addEventListener("mouseout",()=>{
                imageTarget.innerHTML= ""
                })
            })
        }
    } 
});

//création du menu 2
let men2 = document.createElement("h3");
mn2.addEventListener("click",()=> {
    // men2.setAttribute("class", "module");
    // let titre2 = document.createElement("h1")
    men2.innerHTML = "Menu 2";
    //attacher le menu 1 à la div (tab)
    document.getElementById("tab").appendChild(men2);

    //input 1 pour le nom
    let nom1 = document.createElement("input");
    nom1.setAttribute("type","text");
    nom1.setAttribute("placeholder","input 1 / Nom");
    nom1.setAttribute("id", "input1");
    men2.appendChild(nom1);
   
    //Input 2 pour le prénom
    let prenom1 = document.createElement("input");
    prenom1.setAttribute("type","text");
    prenom1.setAttribute("placeholder","input 2 / Prénom");
    prenom1.setAttribute("id", "input2");
    men2.appendChild(prenom1);
    
    //crétaion du bouton add
    let bttonAdd = document.createElement("button");
    let bttTxt= document.createTextNode("ADD");
    bttonAdd.appendChild(bttTxt);
    men2.appendChild(bttonAdd);
    
    //création de tableau avec les éléments d'inputs
    let tabInput = document.createElement('table');
    men2.appendChild(tabInput);

    //création de la variable pour l'entête
    let tabHeadInp = document.createElement('thead');
    tabInput.appendChild(tabHeadInp);
    
    //attacher l'en-tête du tableau à la table
    let titlTab1 = document.createElement("th");
    tabHeadInp.appendChild(titlTab1);
    titlTab1.innerHTML = " Nom ";
    let titlTab2 = document.createElement("th");
    tabHeadInp.appendChild(titlTab2);
    titlTab2.innerHTML = " Prénom ";
    
    //création du body de la table
    let tabInputBody = document.createElement('tbody');

    //attacher le body du tableau à la table
    tabInput.appendChild(tabInputBody);

    //Création tableau et récupération des données dans l'input 1 & 2
    bttonAdd.addEventListener("click", ()=> {
        let mninput1 = (document.getElementById("input1").value).trim();
        let mninput2 = (document.getElementById("input2").value).trim();

        if(mninput1 === "" && mninput2 === ""){
            alert("You didn't say the Magic Word");
        }
        else
        {
            let lgnTab = tabInput.insertRow();
             let cellNom = lgnTab.insertCell(0);
            let cellPrenom = lgnTab.insertCell(1);
             cellNom.innerHTML = mninput1;
            cellPrenom.innerHTML = mninput2;
            }
    });
});


//création du menu 3
let men3 = document.createElement("h3");
mn3.addEventListener("click",()=> {
    men3.setAttribute("id", "titre3");
    men3.innerHTML = "Menu 3";
    
    //attacher le menu 3 à la div (tab)
    document.getElementById("tab").appendChild(men3);

    //création de menu dropdown
    let dropList = document.createElement("select")
    let dropTxt= document.createTextNode("drop-down menu");
    dropList.setAttribute("id", "fontPolice")
    dropList.appendChild(dropTxt);
    // dropList.setAttribute("onchange", "swapPolice (this);")
    men3.appendChild(dropList);

    //création du texte pour le style
    let txtdrop = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint voluptate numquam officiis nam ratione pariatur quibusdam dignissimos culpa optio, rem, quae cupiditate ullam cum et qui necessitatibus sunt a quo. Laborum possimus alias aut.";
    txtLorem = document.createElement("p");
    txtLorem.innerHTML = txtdrop;
    men3.appendChild(txtLorem);

    //création d'option pour le menu déroulant
    let optfont = document.createElement("option");
    optfont.innerText='drop-down list'
    dropList.appendChild(optfont)

    let optfont1 = document.createElement("option");
    optfont1.setAttribute("value", "Arial");
    optfont1.innerText='Arial'
    dropList.appendChild(optfont1)

    let optfont2 = document.createElement("option");
    optfont2.setAttribute("value", "verdana");
    optfont2.innerText='Verdana'
    dropList.appendChild(optfont2)

    let optfont3 = document.createElement("option");
    optfont3.setAttribute("value", "Tahoma");
    optfont3.innerText='Helvetica'
    dropList.appendChild(optfont3)

    function newPolice() {
        let myselect = dropList;
        let font = myselect.options[myselect.selectedIndex].value;
        txtdrop.style.fontFamily = font;
    }
});
// function (font) {
//         document.getElementById("txtdrop").style.fontFamily = font.value;
    // }
// fonction qui permet de changer la police du texte    

// document.getElementById('value').addEventListener("change", function(){
//     if(this.value){
//         txtdrop.style.fontFamily = this.value
//      };   
// });


//création du menu 4
let men4 = document.createElement("h3");
mn4.addEventListener("click",()=> {
    men4.setAttribute("id", "titre4");
    men4.innerHTML = "Menu 4";
    
    //attacher le menu 4 à la div (tab)
    document.getElementById("tab").appendChild(men4);
    
    //création de la liste non ordonnée 
    let valueList = document.createElement("ul")
    men4.appendChild(valueList)
    
    //création des items de la liste non ordonnée 
    let val1 = document.createElement("li");
    val1.innerText='Value 1'
    valueList.appendChild(val1)


    let val2 = document.createElement("li");
    val2.innerText='Value 2'
    valueList.appendChild(val2)


    let val3 = document.createElement("li");
    val3.innerText='Value 3'
    valueList.appendChild(val3)


    let val4 = document.createElement("li");
    val4.innerText='Value 4'
    valueList.appendChild(val4)


    //création des boutons up and down
    let upLi = document.createElement("button")
    upLi.innerText='Up'
    valueList.appendChild(upLi)
    

    let downLi = document.createElement("button")
    downLi.innerText='Down'
    valueList.appendChild(downLi)

    let it1 = valueList[0]
    let it2 = valueList[1]
    let it3 = valueList[2]
    let it4 = valueList[3]
    //modificationd de l'ordre des li dans la liste non ordonnée 
    upLi.addEventListener("click",()=>{
        if (it1 === valueList[1]){
            it2.insertAdjacentElement('beforebegin',it1);
        }
        else if (it1 === valueList[2]){
            it3.insertAdjacentElement('beforebegin',it1);
        }
        else if (it1 === valueList[3]){
            it4.insertAdjacentElement('beforebegin',it1);
        }
        else if (it1 === valueList[4]){
            it3.insertAdjacentElement('afterend',it1);
        }    
    console.log(upLi.addEventListener)
    })

    downLi.addEventListener("click",()=>{
        if (it1 === valueList[0]){
            it2.insertAdjacentElement('afterend',it1);
        }
        else if (it1 === valueList[1]){
            it3.insertAdjacentElement('afterend',it1);
        }
        else if (it1 === valueList[2]){
            it4.insertAdjacentElement('afterend',it1);
        }
        else if (it1 === valueList[3]){
            it2.insertAdjacentElement('beforebegin',it1);
        }    
    })
});

//création du menu 5

let men5 = document.createElement("h3");
mn5.addEventListener("click",()=> {
    men5.setAttribute("id", "titre5");
    men5.innerHTML = "Menu 5";
    
    //attacher le menu 5 à la div (tab)
    document.getElementById("tab").appendChild(men5);
    
    //ajout des checkbox et de leur label
    let chckBox = document.createElement("div")
    men5.appendChild(chckBox)
    
    let optchck1 = document.createElement("input")
    optchck1.setAttribute("type", "checkbox")
    optchck1.setAttribute("id", "boxcheck1")
    optchck1.setAttribute("name", "boxcheck1")
    chckBox.appendChild(optchck1)
   
    let labelchck1 = document.createElement("label")
    labelchck1.innerText = "Option 1"
    labelchck1.setAttribute("for", "boxcheck1")
    chckBox.appendChild(labelchck1)
   
    let optchck2 = document.createElement("input")
    optchck2.setAttribute("type", "checkbox")
    optchck2.setAttribute("id", "boxcheck2")
    optchck1.setAttribute("name", "boxcheck2")
    chckBox.appendChild(optchck2)
   
    let labelchck2 = document.createElement("label")
    labelchck2.innerText = "Option 2"
    labelchck2.setAttribute("for", "boxcheck2")
    chckBox.appendChild(labelchck2)
    
    let optchck3 = document.createElement("input")
    optchck3.setAttribute("type", "checkbox")
    optchck3.setAttribute("id", "boxcheck3")
    optchck1.setAttribute("name", "boxcheck3")
    chckBox.appendChild(optchck3)
   
    let labelchck3 = document.createElement("label")
    labelchck3.innerText = "Option 3"
    labelchck3.setAttribute("for", "boxcheck3")
    chckBox.appendChild(labelchck3)

    let optchck4 = document.createElement("input")
    optchck4.setAttribute("type", "checkbox")
    optchck4.setAttribute("id", "boxcheck4")
    optchck1.setAttribute("name", "boxcheck4")
    chckBox.appendChild(optchck4)
   
    let labelchck4 = document.createElement("label")
    labelchck4.innerText = "Option 4"
    labelchck4.setAttribute("for", "boxcheck4")
    chckBox.appendChild(labelchck4)

    let rdbtn1 = document.createElement("input")
    rdbtn1.setAttribute("type", "radio")
    rdbtn1.setAttribute("id", "radiobtn1")
    rdbtn1.setAttribute("name", "choice")
    chckBox.appendChild(rdbtn1)
   
    let labelrdbtn1 = document.createElement("label")
    labelrdbtn1.innerText = "div"
    labelrdbtn1.setAttribute("for", "radiobtn1")
    chckBox.appendChild(labelrdbtn1)

    let rdbtn2 = document.createElement("input")
    rdbtn2.setAttribute("type", "radio")
    rdbtn2.setAttribute("id", "radiobtn2")
    rdbtn2.setAttribute("name", "choice")
    chckBox.appendChild(rdbtn2)
   
    let labelrdbtn2 = document.createElement("label")
    labelrdbtn2.innerText = "Opt"
    labelrdbtn2.setAttribute("for", "radiobtn2")
    chckBox.appendChild(labelrdbtn2)

//     //fonction pour créer la div récupérant les données
//     let div(onchange,()=>{
//         for (i=0;i<choice.length; i++)
        
//     }) 
});
