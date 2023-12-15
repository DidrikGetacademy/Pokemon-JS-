CaracterView()
function CaracterView() {
    let html = '';
    html += /*HTML*/ `
   <h1 class="pickCharacter">Pick character</h1>`;
    for (i = 0; i < model.pokemons.length; i++) {
        html += /*HTML*/ `
    <div class="container">
    <button onclick="MenuView(${i})">select</button>
    <img class="CaracterView"  src="${model.pokemons[i].image}" alt="pokemons image">
    <img class="pokemonTrainers"  src="${model.PokemonTrainer[i].image}"><br>
    Name:${model.pokemons[i].title}<br>
    Level:${model.pokemons[i].level}<br>
    Damage:${model.pokemons[i].damage}<br>
    Health:${model.pokemons[i].health}
    </div>`;
    }
    document.getElementById('app').innerHTML = html;
}







function MenuView(selected) {
    let html = '';
    html += /*HTML*/ `
        <div>
            <h1>${model.PokemonTrainer[selected].title}</h1>
            <p>Pokemon Count: ${model.PokemonTrainer[selected].pokemoncount}</p>
            <button onclick="PokemonInventoryView(${selected})">pokemon inventory</button>
            <p><button onclick="CaracterView()">Change Character</button></p>
            </div><br>

             <div id="chosenChampDiv">
             <img class="pokemonTrainers"  src="${model.PokemonTrainer[selected].image}"><br>
             </div>
        
             <div class="RedZone">
             <button onclick="gåigressetView(${selected})">Gå i gresset</button>
             <ul>
             <li><br>Gresset er plassen du kan reise til en verden full av pokemons som enda ikke har funnet sin eier!<br>
             <br><li>Her kan du velge mellom og prøve og catche en pokemon, du har 3 forsøk per pokemon du prøver og catche.<br>
             </ul>
             </div>


            <div class="BattleZone">
            <button onclick="kampArenaView(${selected})">Kamp Arena</button>
            <ul>
            <li><br>BattleZone er plassen du kan reise å krige mot andre Trainers.<br>
            <li>Om du går i gresset kan du fange forskjellige pokemon du møter på. Dersom du har en eller flere pokemen, kan du velge en av dem å sende sende ut i kamp mot den pokemon du møter dersom du ikke vil fange den.
            </ul>
            </div>`;
    document.getElementById('app').innerHTML = html;
}






function kampArenaView(selected){
let html = '';
html += /*HTML*/ `
<div class="TrainerFighter1">
<img style="height: 195px; position: relative; left: 1100px; top: 400px" src="${model.PokemonTrainer[0].image}">
<button style="position: relative; left: 960px; top: 440px" onclick="pokemontrainerArena('trainer0', ${selected})">Choose Fight</button>
</div>`;

html += /*HTML*/ `
<div class="">
<img style="height: 195px; position: relative; left: 650px; top: 180px;" src="${model.PokemonTrainer[2].image}">
<button style="position: relative; left: 515px; top: 225px;" onclick="pokemontrainerArena('trainer2', ${selected})">Choose Fight</button>
</div>`;

html += /*HTML*/ `
<div class="" >
<img style="height: 195px; position: relative; left: 200px; bottom: 45px;" src="${model.PokemonTrainer[1].image}">
<button style=" position: relative; top: 10px; left: 100px" onclick="pokemontrainerArena('trainer1', ${selected})">Choose Fight</button>
</div>`;

document.getElementById('app').innerHTML = html;
}




function pokemontrainerArena(Trainer, selected, i){
let html = '';
if(Trainer === 'trainer0'){
    html += /*HTML*/ `
    <button onclick="MenuView(${selected})">Go back</button>
    <div>
    <h3>Battle between ${model.PokemonTrainer[selected].title}  & ${model.PokemonTrainer[0].title} </h3>
    <div class="battlecontainertrainer2">
    <img class="trainerfighter2" src="${model.PokemonTrainer[selected].image} ">
    <img  class="fighterp2" src="${model.pokemons[i,selected].image}">
    <div class="healthBox">${model.pokemons[i,selected].health}</div>
    <button onclick="Trainfighterarena(${selected}, 'trainerPokedex1')" class="trainerfighterbutton2">Attack</button>
    </div>
    <div class="battlecontainertrainer1">
    <img  class="trainerfighter1" src="${model.PokemonTrainer[0].image} ">
    <img class="fighterP1" src="${model.pokemons[0].image}">
    <div class="healthBox">${model.pokemons[0].health}</div>
    <button onclick="Trainfighterarena(${selected}, 'trainerPokedex2')" class="trainerfighterbutton1">Attack</button>
    </div>
    </div>`;
}

else if (Trainer === 'trainer1'){
    html += /*HTML*/ `
    <button onclick="MenuView(${selected})">Go back</button>
    <div>
    <h3>Battle between ${model.PokemonTrainer[selected].title}  & ${model.PokemonTrainer[1].title} </h3>
    <div class="battlecontainertrainer2">
    <img class="trainerfighter2" src="${model.PokemonTrainer[selected].image}">
    <img class="fighterp2" src="${model.pokemons[i,selected].image}">
    <div class="healthBox">${model.pokemons[i,selected].health}</div>
    <button onclick="Trainfighterarena(${selected},'trainerPokedex2')" class="trainerfighterbutton2">Attack</button>
    </div>
    <div class="battlecontainertrainer1">
    <img class="trainerfighter1" src="${model.PokemonTrainer[1].image} ">
    <img class="fighterP1" src="${model.pokemons[1].image}">
    <div class="healthBox">${model.pokemons[1].health}</div>
    <button onclick="Trainfighterarena(${selected},'trainerPokedex3')" class="trainerfighterbutton1">Attack</button>
    </div>
    </div>`;
}


else if(Trainer === 'trainer2'){
    html += /*HTML*/ `
    <button onclick="MenuView(${selected})">Go back</button>
    <div>
    <h3>Battle between ${model.PokemonTrainer[selected].title}  & ${model.PokemonTrainer[2].title} </h3>
    <div class="battlecontainertrainer2">
    <img class="trainerfighter2"src="${model.PokemonTrainer[selected].image} ">
    <img class="fighterp2" src="${model.pokemons[i,selected].image}">
    <div class="healthBox">${model.pokemons[i,selected].health}</div>
    <button onclick="Trainfighterarena(${selected}, 'trainerPokedex4')" class="trainerfighterbutton2">Attack</button>
    </div>
    <div class="battlecontainertrainer1">
    <img class="trainerfighter1" src="${model.PokemonTrainer[2].image} ">
    <img class="fighterP1"  src="${model.pokemons[2].image}">
    <div class="healthBox">${model.pokemons[2].health}</div>
    <button class="trainerfighterbutton1" onclick="Trainfighterarena(${selected},'trainerPokedex5')">Attack</button>  
    </div>`;
}
document.getElementById('app').innerHTML = html;
}



function Trainfighterarena( pokedex){

/*
var pokedex2damage = model.pokemons[i,selected].damage;
var pokedex2health = model.pokemons[i,selected].health;


var pokedex1damage = model.pokemons[2].damage
var pokedex1health = model.pokemons[2].health

var pokedex1damagee = model.pokemons[1].damage;
var pokedex1damagee = model.pokemons[1].health;

if (selected == 'trainerPokedex1'  || 'trainerPokedex2'  ){
    pokedex2health -= pokedex2damage;
    console.log(pokedex2health);
}*/
}


function PokemonInventoryView(selected) {
    let html = '';
    html += /*HTML*/ `<button onclick="MenuView(${selected})">Go back</button>`;
    html += /*HTML*/ `<h2>Pokemon Inventory</h2>`;
    html += /*HTML*/ `
    <div class="inventoryCharacter">
        <img class="CaracterView" src="${model.pokemons[selected].image}">
        <p>Name: ${model.pokemons[selected].title}</p>
        <p>Level: ${model.pokemons[selected].level}</p>
        <p>Damage: ${model.pokemons[selected].damage}</p>
        <p>Health: ${model.pokemons[selected].health}</p>
    </div>`;
    for (i = 0; i < model.PokemonTrainer[selected].inventory.length; i++) {
        const inventoryPokemon = model.PokemonTrainer[selected].inventory[i];
        html += /*HTML*/ `
        <div class="inventoryCharacter">
            <img class="CaracterView" src="${inventoryPokemon.image}" alt="">
            <p>Name: ${inventoryPokemon.name} </p>
            <p>Level:${inventoryPokemon.level} </p>
            <p>Damage:${inventoryPokemon.damage} </p>
            <p>Health:${inventoryPokemon.health} </p>
        </div>`;
    }

    document.getElementById('app').innerHTML = html;
}







function gåigressetView(selected) {
    let html = '';
    for (let i = 0; i < model.pokemongresset.length; i++) {
        html += /*HTML*/ `
        <button onclick="catchPokemon(${selected}, ${i})">Catch ${model.pokemongresset[i].name}</button> 
        <button onclick="ChoosePokemon(${selected}, ${i})" >Fight ${model.pokemongresset[i].name}</button>
        <img class="gåigreswsetView"   src="${model.pokemongresset[i].image}">`;
    }
    html += /*HTML*/ `<button onclick="MenuView(${selected})">Go back</button>`;
    document.getElementById('app').innerHTML = html;
}






function catchPokemon(selected, i) {

    model.PokemonTrainer[selected].inventory.push(model.pokemongresset[i]);
    model.PokemonTrainer[selected].pokemoncount++;
    model.pokemongresset.splice(i, 1);
    PokemonInventoryView(selected);
}



function ChoosePokemon(selected, i,) {
    let html = '';
    html += /*HTML*/ `<button onclick="MenuView(${selected})">Go back</button>`;
    html += /*HTML*/ `<h2>pick pokemon to fight with ${model.pokemongresset[i].name} </h2>`;
    html += /*HTML*/ `
    <div style="cursor: pointer;" onclick="setSelectedPokemonForBattle(${selected}, ${i})" class="inventoryCharacter">
    <img  class="CaracterView" src="${model.pokemons[selected].image}">
    <p>Name: ${model.pokemons[selected].title}</p>
    <p>Level: ${model.pokemons[selected].level}</p>
    <p>Damage: ${model.pokemons[selected].damage}</p>
    <p>Health: ${model.pokemons[selected].health}</p><br>
    </div>`;
    for (let j = 0; j < model.PokemonTrainer[selected].inventory.length; j++) {
        const inventoryPokemon = model.PokemonTrainer[selected].inventory[j];

        html += /*HTML*/ `
        <div style="cursor: pointer;" onclick="setSelectedPokemonForBattle(${selected}, ${i}, ${j})" class="inventoryCharacter">
        <img  class="CaracterView" src="${inventoryPokemon.image}" alt="">
        <p>Name: ${inventoryPokemon.name} </p>
        <p>Level:${inventoryPokemon.level} </p>
        <p>Damage:${inventoryPokemon.damage} </p>
        <p>Health:${inventoryPokemon.health} </p>
        </div>`;
    }



    document.getElementById('app').innerHTML = html;
}





let selectedPokemonForBattle = null;
function setSelectedPokemonForBattle(selected, i, j = null) {

    if (j !== null) {
        selectedPokemonForBattle = model.PokemonTrainer[selected].inventory[j];
    } else {
        selectedPokemonForBattle = null;
    }
    BattleArena(selected, i, j);
}




function BattleArena(selected, i) {
    let html = '';
    html += `<button onclick="gåigressetView(${selected})">Go Back</button>`;
    if (selectedPokemonForBattle) {
        html += `<h1>${model.pokemongresset[i].name} VS  ${selectedPokemonForBattle.name}</h1>`;


        //pokemon fra gresset
        html += `<img class="BattleArena1" src="${model.pokemongresset[i].image}" >`;
        html += `<ul class="Level1">Level:${model.pokemongresset[i].level}<ul>`;
        html += `<ul class="Damage1">Damage: ${model.pokemongresset[i].damage}<ul>`;
        html += `<ul class="Health1">Health: ${model.pokemongresset[i].health}<ul>`;
        html += `<button class="attackGresset" onclick="startPokemon11(${selected}, ${i})">Attack</button>`;
        html +=  `<button onclick="healbody(${selected}, ${i}, 'wide')" class="healbutton3">Heal</button>`

        // pokemon fra dem du har fanget
        html += `<img class="BattleArena2" src="${selectedPokemonForBattle.image}">`;
        html += `<ul class="Level2">Level:${selectedPokemonForBattle.level}<ul>`;
        html += `<ul class="Damage2" >Damage: ${selectedPokemonForBattle.damage}<ul>`;
        html += `<ul class="Health2">Health: ${selectedPokemonForBattle.health}<ul>`;
        html += `<button class="attackGresset2" onclick="startPokemon3(${selected}, ${i})">Attack</button>`;
        html +=  `<button onclick="healbody(${selected}, ${i}, 'starter')" class="healbutton4">Heal</button>`
      
    } else {

        html += `<h1>${model.pokemons[selected].title} VS  ${model.pokemongresset[i].name}</h1>`;


        // pokemon karaketrens start inventory
        html += `<img class="BattleArena1" src="${model.pokemons[selected].image}">`;
        html += `<ul class="Level1" >Level: ${model.pokemons[selected].level}<ul>`;
        html += `<ul class="Damage1" >Damage: ${model.pokemons[selected].damage}<ul>`;
        html += `<ul class="Health1">Health: ${model.pokemons[selected].health}<ul>`;
        html += `<button onclick="startPokemon(${selected}, ${i})" class="firstinventoryPokemon">Attack</button>`;
        html +=  `<button onclick="healbody(${selected}, ${i}, 'wild')" class="healbutton2">Heal</button>`

        // pokemon i gressetView
        html += `<img class="BattleArena2";" src="${model.pokemongresset[i].image}" >`;
        html += `<ul class="Level2" >Level:${model.pokemongresset[i].level}<ul>`;
        html += `<ul  class="Damage2" >Damage: ${model.pokemongresset[i].damage}<ul>`;
        html += `<ul class="Health2" >Health: ${model.pokemongresset[i].health}<ul>`;
        html += `<button onclick="startPokemon1(${selected}, ${i})" class="pokemongresset">Attack</button>`;
        html +=  `<button onclick="healbody(${selected}, ${i}, 'hide')" class="healbutton1">Heal</button>`
    }

  

    document.getElementById('app').innerHTML = html;
}




// pokemon fra startinventory angriper pokemon fra gresset
function startPokemon(selected, i) {
    let startPokemonDamage = model.pokemons[selected].damage;;
    let enemyHealth = model.pokemongresset[i].health;
    
    if (enemyHealth > 0) {
        model.pokemongresset[i].health -= startPokemonDamage;

     if(model.pokemongresset[i].health <= 0){
        model.pokemongresset[i].health = 0;

     }
      
        BattleArena(selected, i);
    }
   
}


function startPokemon1(selected, i){
    let startpokemon2damage = model.pokemongresset[i].damage;
    let enemyhealth2 = model.pokemons[i].health;
    if(enemyhealth2 > 0){
     model.pokemons[selected].health -= startpokemon2damage;

     if(model.pokemons[selected].health <= 0){
        model.pokemons[selected].health = 0;
     }
  
        BattleArena(selected, i);
    }
}


function startPokemon11(selected, i){
    let selectedpokemondamage = model.pokemongresset[i].damage;
    let enemyhealth3 = selectedPokemonForBattle.health
    if(enemyhealth3 > 0){
        selectedPokemonForBattle.health -= selectedpokemondamage;

     if(selectedPokemonForBattle.health <= 0){
        selectedPokemonForBattle.health = 0;
     }
  
        BattleArena(selected, i);
    }
}



function startPokemon3(selected, i){
    let startPokemonDamage = selectedPokemonForBattle.damage;
    let enemyHealth = model.pokemongresset[i].health;
    
    if (enemyHealth > 0) {
        model.pokemongresset[i].health -= startPokemonDamage;

     if(model.pokemongresset[i].health <= 0){
        model.pokemongresset[i].health = 0;

     }
   
     BattleArena(selected, i);
    }
}

function healbody(selected, i, pokemontype) {
    const minHeal = 10; 
    const maxHeal = 30; 
    const healAmount = Math.floor(Math.random() * (maxHeal - minHeal + 1) + minHeal);
    if (pokemontype === 'starter') {
        selectedPokemonForBattle.health += healAmount;
        if(selectedPokemonForBattle.health >= 100){
            selectedPokemonForBattle.health = 100;
        }
    } 


    if(pokemontype === 'wild'){
        model.pokemons[selected].health += healAmount;
        
        if(model.pokemons[selected].health >= 100){
            model.pokemons[selected].health = 100;
        }
    }

   if(pokemontype === 'wide'){
        model.pokemongresset[i].health += healAmount;

        if(model.pokemongresset[i].health >= 100){
            model.pokemongresset[i].health = 100;
        }
    }

    if (pokemontype === 'hide'){
        model.pokemongresset[i].health += healAmount;
        if(model.pokemongresset[i].health >= 100){
            model.pokemongresset[i].health = 100;
        }
    }
    
    BattleArena(selected, i);
}
