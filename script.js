/* Ecrire un programme en JavaScript permettant de recopier dans tab3 tous les éléments
positifs de tab1, et remplacer les éléments de tab2  par des zéros sans utiliser une boucle, et 
afficher les resultats dans le DOM */



// Les tableaux tab1 et tab2
const tab1 = [3, -2, 5, -8, 9, 4, -1];
const tab2 = [6, -3, 0, 7, -5, 2, -4];

// Filtrer les éléments positifs de tab1 et les copier dans tab3
const tab3 = tab1.filter((element) => element > 0);

// Remplacer les éléments de tab2 par des zéros
const tab2Zeroed = tab2.map((element) => (element > 0 ? 0 : element));

// Afficher les résultats dans le DOM
const resultatsDiv = document.getElementById('resultats');

const tab1Div = document.createElement('div');
tab1Div.textContent = 'tab1 : ' + tab1.join(', ');
resultatsDiv.appendChild(tab1Div);

const tab3Div = document.createElement('div');
tab3Div.textContent = 'tab3 (éléments positifs de tab1) : ' + tab3.join(', ');
resultatsDiv.appendChild(tab3Div);

const tab2Div = document.createElement('div');
tab2Div.textContent = 'tab2 (avec éléments positifs remplacés par des zéros) : ' + tab2Zeroed.join(', ');
resultatsDiv.appendChild(tab2Div);