     /* During the development of this project I didn't use any server and because of that I needed to assign the data from the Brazilian
     regions in a object (var region) within this JS file. However, if you are going to test this application using a server, you can save 
     this data in a JSON file and later call it using an HTTP request, such as Ajax for example. */

     var region = [

     {"region": "Southeast", 
     "states":[{
      "name":"São Paulo",
      "capital":"São Paulo"
    },
    {
      "name":"Rio de Janeiro",
      "capital":"Rio de Janeiro"
    },
    {
      "name":"Minas Gerais",
      "capital":"Belo Horizonte"
    },
    {
      "name":"Espírito Santo",
      "capital": "Vitória"}
      ],
      "description": " The Southeast Region of Brazil  is composed by the states of Espírito Santo, Minas Gerais, Rio de Janeiro and São Paulo. <br> It is the richest region of the country, responsible for approximately 60% of the Brazilian GDP. São Paulo, Rio de Janeiro, and Minas Gerais are the three richest states of Brazil, the top three Brazilian states in terms of GDP. The Southeast of Brazil also has the highest GDP per capita among all Brazilian regions. The Southeast region leads the country in population, urban population, population density, vehicles, industries, universities, airports, ports, highways, hospitals, schools, houses and many other areas."
    },

    {"region": "South", 
    "states":[
    {
      "name": "Paraná",
      "capital":"Curitiba"
    },
    {
      "name": "Rio Grande do Sul",
      "capital":"Porto Alegre"
    },
    {
      "name": "Santa Catarina",
      "capital":"Florianópolis"
    }
    ],
    "description": " The South Region of Brazil  is one of the five regions of Brazil. It includes the states of Paraná, Santa Catarina and Rio Grande do Sul and covers 576,409.6 square kilometres, being the smallest portion of the country, occupying only about 6.76% of the territory of Brazil. Its whole area is smaller than that of the state of Minas Gerais, in Southeast Brazil, for example. It is a great tourist, economic and cultural pole. It borders Uruguay, Argentina, and Paraguay, as well as the Centre-West and Southeast regions, and the Atlantic Ocean.<br> The region is considered the safest in Brazil to visit, having a lower crime rate than other regions in the country."
  },

  {"region": "Northeast", 
  "states":[
  {
    "name":"Alagoas",
    "capital":"Maceió"
  },
  {
    "name": "Bahia",
    "capital":"Salvador"
  },
  {
    "name":"Ceará",
    "capital":"Fortaleza"
  },
  {
    "name":"Maranhão",
    "capital":"São Luís"
  },
  {
    "name":"Paraíba",
    "capital":"João Pessoa"
  },
  {
    "name":"Pernambuco",
    "capital":"Recife"
  },
  {
    "name":"Piauí",
    "capital":"Teresina"
  },
  {
    "name":"Rio Grande do Norte",
    "capital":"Natal"
  },
  {
    "name":"Sergipe",
    "capital":"Aracajú"}
    ],
    "description": "Whereas elegant Rio de Janeiro and cosmopolitan São Paulo may be the best-known places in Brazil, the Northeast, or Nordeste is one of the liveliest - a land of sunny beaches, colonial towns, vibrating street parties, music and friendly people.<br> The Northeast is the sunniest of Brazilian regions. Although this may mean long periods of drought for the mainly agricultural inland of some states (and thus crop losses and widespread poverty), the climate also provides almost year-round opportunities for beach-going and other outdoor activities. Long favoured by Brazilian holiday makers, the Northeast has also become increasingly popular with European travellers, especially from Portugal, Spain and Italy due to language and cultural similarities. The region was also the original site of European colonization in Brazil. The first Europeans landed in Bahia, set up the country's first capital in Salvador, and over the next centuries brought millions of slaves from Africa to the region. Added to the indigenous population, the result is a fascinating rich cultural mix that makes up some often unknown faces of Brazilian culture."
  },

  { 
  "region": "Central West",
  "states":[
  {
   "name":"Distrito Federal",
   "capital":"Brasília"
 },
 {
  "name":"Goiás",
  "capital":"Goiânia"
},
{
  "name":"Mato Grosso",
  "capital":"Cuiabá"
},
{
  "name":"Mato Grosso do Sul",
  "capital": "Campo Grande"
}
],
"description": "The Central-West or Center-West Region of Brazil  is composed of the three states along with Distrito Federal (Federal District), where Brazil's national capital, Brasília, is situated. This Region is right in the heart of Brazil, representing 18.86% of the national territory. With the move of the country's federal capital from Rio de Janeiro to Brasília in the 1960s, the construction of roads and railways to the interior of the country made access to the region easier, speeding up population growth and contributing significantly to the region's development. Central West is the only landlocked Brazilian region.<br> The region offers excellent opportunities for eco-tourism activities such as exploring caves, rappelling down waterfalls or just trekking through the cerrado (an ecosystem similar, in some ways, to the savannah). It is also well known for the Pantanal, the world's largest wetland, close to the Brazil's western border."
},

{
  "region": "North", 
   "states":[
   {
    "name":"Acre",
    "capital":"Rio Branco"
  },
  {
    "name":"Amazonas",
    "capital":"Manaus"
  },
  {
    "name":"Amapá",
     "capital":"Macapá"
   },
   {
    "name":"Pará",
    "capital":"Belém"
  },
  {
    "name":"Rondônia",
    "capital":"Porto Velho"
  },
  {
    "name":"Roraima",
    "capital":"Boa Vista"
  },
  {
    "name":"Tocantins",
    "capital":"Palmas"
  }
  ],
   "description":"The North Region of Brazil is the largest Region of Brazil, corresponding to 45.27% of the national territory. It is the least inhabited of the country, and contributes with a minor percentage in the national GDP and population. Its demographic density is the lowest in Brazil considering all the regions of the country, with only 3.8 inhabitants per km2. Most of the population is centered in urban areas."
}
]

var callStatesInformation = function(area){
   //This parameters function set up which region will call

  // Initially clear the text content from HTML elements that this function will use to display datas
  document.getElementById('regionTitle').innerHTML="";
  document.getElementById('description').innerHTML = "";
  document.getElementById('statesList').innerHTML="";
  document.getElementById('callToAction').style.display = "none";
  document.getElementById('stateTable').style.display = "block";
  document.getElementById('buttonHome').style.display = "flex";
  
  regionName = region[area].region;
  regionDescription = region[area].description;

  document.getElementById('description').innerHTML = regionDescription;
  document.getElementById('regionTitle').innerHTML= region[area].region;

  statesOfRegion = region[area].states;
  statesOfRegion.forEach((item, index)=>{

    var tableRow = document.createElement('tr');
    var stateRow = document.createElement('td');
    var capitalRow = document.createElement('td');
    var state = region[area].states[index].name;
    var capital = region[area].states[index].capital;

    stateRow.append(state);
    capitalRow.append(capital);
    tableRow.append(stateRow);
    tableRow.append(capitalRow);

    document.getElementById('statesList').append(tableRow);
  });
};

// Function to back home

var buttonHome = document.getElementById('buttonHome');

buttonHome.addEventListener('click', ()=>{
  document.getElementById('regionTitle').innerHTML="";
  document.getElementById('stateTable').style.display = "none";
  document.getElementById('callToAction').style.display ="block";
  document.getElementById('buttonHome').style.display ="none";
  document.getElementById('description').innerHTML = "The Federative Republic of Brazil is the largest country in both South America and Latin America. At 8.5 million square kilometers (3.2 million square miles) and with over 211 million people, Brazil is the world's fifth-largest country by area and the sixth most populous. Its capital is Brasília, and its most populous city is São Paulo. It is the largest country to have Portuguese as an official language and the only one in the Americas. The federation is composed of the union of the 26 states and the Federal District."

})