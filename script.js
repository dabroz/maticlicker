var gameState = {};

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function randomFirstName() { 
  var arr = ["Adrian", "Afanasi", "Agavva", "Aleksandr", "Aleksei", "Anatoly", "Andrei", "Andrey", "Andrian", "Anfim", "Anton", "Arkadi", "Arkhip", "Arman", "Arseni", "Artemi", "Artur", "Artyem", "Artyom", "Avgust", "Avgustin", "Berdy", "Bogdan", "Bohdan", "Boris", "Boroda", "Burian", "Cheslav", "Daniil", "Demid", "Demyan", "Denis", "Diak", "Dimitri", "Donat", "Dosifei", "Eduard", "Efim", "Eitan", "Endar", "Evgeni", "Fabiyan", "Faddei", "Fedor", "Fedot", "Feliks", "Feodor", "Feodosi", "Feofil", "Feofilakt", "Filaret", "Filip", "Florenti", "Foka", "Fredek", "Fyodor", "Garald", "Gavril", "Gedeon", "Gennadi", "Georgy", "Gerasim", "Gervasi", "Gleb", "Gorain", "Gridia", "Grigory", "Hedeon", "Iev", "Ignatii", "Igor", "Ilarion", "Ilation", "Ilya", "Innokenti", "Ioakim", "Ipati", "Ippolit", "Irinei", "Iosif", "Ivan", "Iziaslav", "Kapiton", "Karp", "Kazimir", "Khariton", "Kiril", "Klavdii", "Kliment", "Kondrati", "Konstantin", "Kostya", "Kozmin", "Lavrenty", "Lenian", "Lenin", "Leonid", "Leonti", "Lev", "Luka", "Lukyan", "Lyov", "Makar", "Maksim", "Matvei", "Maxim", "Mavriky", "Mecheslav", "Mefodi", "Meliton", "Melor", "Mendeley", "Mikhail", "Mily", "Miron", "Mitrofan", "Modest", "Moriz", "Mstislav", "Nazary", "Nikita", "Nikolai", "Nikodim", "Ninel", "Nofel", "Oleg", "Olgov", "Onanin", "Osip", "Osyen", "Ovdei", "Padorin", "Parfen", "Pavel", "Pimen", "Porfiry", "Pribislav", "Prokhor", "Prokofy", "Pyotr", "Qudiar", "Radoslav", "Rafail", "Ravil", "Renat", "Rodion", "Roman", "Rostislav", "Ruslan", "Ryurik", "Samuil", "Sava", "Saveli", "Semyon", "Sergei", "Sevastien", "Shelovleviy", "Sidor", "Silvestr", "Spiridon", "Stanislav", "Stefan", "Sviatoslav", "Svyatopolk", "Tikhon", "Timofei", "Tomas", "Vadim", "Valentin", "Valeriy", "Varfolomei", "Vasily", "Vaslav", "Venedikt", "Veniamin", "Vikent", "Viktor", "Vitaly", "Vladik", "Vladimir", "Vladislav", "Vladlen", "Vlas", "Vlasi", "Vsevolad", "Vyacheslav", "Vyesniy", "Yakov", "Yarok", "Yaropolk", "Yaroslav", "Yefrem", "Yegor", "Yelesiy", "Yeremai", "Yerik", "Yevgeny", "Yov", "Yuri", "Zavier", "Zimiy", "Zinoviy", "Zivon", "Zoran"];
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomLastName() { 
  var arr = ["Abelev", "Abramov", "Afanasiev", "Afanasyev", "Afansiev", "Aisenyev", "Akimov", "Akoulov", "Aksenov", "Aleihov", "Aleksandrov", "Aleksandrovich", "Alekseev", "Alenichev", "Aliev", "Alliluyev", "Aminov", "Anchov", "Andreev", "Andreyev", "Andropov", "Anisimov", "Antonov", "Antyuhin", "Aparin", "Arkhipov", "Arsov", "Artamov", "Aseev", "Asimov", "Astapkovich", "Avigdor", "Aznabaev", "Babusch", "Bagirli", "Baguirov", "Baikov", "Bakhtin", "Bakhvalov", "Baklanov", "Bakunin", "Balakirev", "Banketik", "Baranov", "Barenoosky", "Barsky", "Barsukov", "Bartnev", "Baryatinsky", "Bashmet", "Batkin", "Bazoev", "Beketov", "Belanov", "Beletsky", "Beloi", "Belousov", "Belov", "Belsky", "Belyaev", "Belyakov", "Berezin", "Bershadensky", "Berzin", "Bezborodov", "Biryukov", "Bischov", "Bobylev", "Bogomolov", "Bolkonsky", "Borisov", "Borodin", "Bourdukovsky", "Brezhnev", "Briansky", "Brodsky", "Bushmanov", "Butkovsky", "Byko", "Bykov", "Byrkovuc", "Bytchkov", "Chapaev", "Chazov", "Chekhol", "Chernitsky", "Chernov", "Chernyshev", "Chichagov", "Chistyakov", "Chubinsky", "Danilov", "Dashkov", "Davydov", "Demichev", "Demidov", "Denisov", "Dimitrov", "Dimitry", "Diykov", "Dmitriev", "Dolgikh", "Dolgonosov", "Dombrosky", "Donskoy", "Dorogoi", "Doumnov", "Dubinsky", "Dublin", "Dubrovsky", "Duchovny", "Dudinsky", "Dyakonov", "Efimov", "Efremov", "Egorov", "Erikeev", "Ermakov", "Evanov", "Evdokimov", "Fedorov", "Fedotov", "Filatov", "Filimonov", "Filipov", "Filippov", "Fomin", "Fortunatov", "Frolov", "Fyodorov", "Gagarin", "Galiyev", "Ganelin", "Gapon", "Gavrilov", "Gerasimov", "Ghukov", "Gladishiv", "Glebov", "Goncharov", "Gontarev", "Gontcharov", "Govorov", "Grachev", "Graudyn", "Gregorovich", "Grigorev", "Grigoriev", "Grisin", "Gromov", "Grosha", "Groshev", "Gubin", "Gulianskoy", "Gurov", "Gusev", "Hvorostovsky", "Ignatev", "Ignatov", "Ilin", "Instinsky", "Isaev", "Ivakin", "Ivanovich", "Izhitsky", "Kafelnikov", "Kalinin", "Kalygin", "Kaminov", "Karataev", "Karelin", "Karin", "Karlov", "Karlovsky", "Karpov", "Kasheyev", "Kasparkov", "Katin", "Katzev", "Kausky", "Kayakov", "Kazakov", "Kerensky", "Kevorkov", "Khadartsev", "Kherpin", "Khokhlov", "Khoklov", "Kholodov", "Khudov", "Kirov", "Kiryakov", "Kiselev", "Kislyakov", "Kissin", "Klimov", "Klossovsky", "Kochelaev", "Koikov", "Kokorev", "Kolesnikov", "Kolosnitsyn", "Kolotcha", "Komarov", "Kondrash", "Kondrashin", "Kondratov", "Konovalov", "Korneev", "Kornitsky", "Korolev", "Korzhanenk", "Koshelev", "Koslov", "Kostezh", "Kostov", "Kosygin", "Kotov", "Kovalev", "Krashnoshtanov", "Krestyanov", "Krukov", "Krylov", "Kubarev", "Kulikov", "Kupetsky", "Kuritzin", "Kurpinsky", "Kutuzov", "Kuzmin", "Larionov", "Laskin", "Lavrin", "Lazarev", "Lazovert", "Lazutkin", "Lensky", "Leonov", "Leshchev", "Ligachev", "Litvinov", "Lobanov", "Lobodin", "Lobov", "Loginov", "Lubinsky", "Lukin", "Lukov", "Lukyanov", "Lutrov", "Magomedov", "Makarov", "Maksimov", "Malenkov", "Malikov", "Malinin", "Maltsev", "Malyshev", "Markov", "Martinov", "Matisov", "Matusov", "Matveev", "Maxim", "Mayakovsky", "Medvedev", "Mele", "Melnikov", "Merinov", "Miasnikov", "Miaskovsky", "Mihailovich", "Mikhailov", "Mikhaylov", "Mironov", "Mirsky", "Mishkin", "Moldovan", "Molodin", "Molotov", "Moroskin", "Moskovsky", "Motorin", "Motov", "Muchnick", "Nadezhdin", "Nakhimov", "Naumov", "Nazarov", "Nenov", "Nesterov", "Nikiforov", "Nikitin", "Nikolaev", "Obolensky", "Oleksei", "Orlov", "Ortov", "Osipov", "Ostrovsky", "Pankrat", "Parshin", "Pasternak", "Pavel", "Pecinovsky", "Peskov", "Petrachkov", "Petrosky", "Philemonov", "Platov", "Plotkin", "Podkopayev", "Pokidin", "Polansky", "Polinsky", "Polyakov", "Ponomarev", "Porkhomov", "Pouchkov", "Preminin", "Prerovsky", "Primakov", "Prokhorov", "Pronin", "Protopopov", "Putyatin", "Rachmanov", "Radimov", "Ragulin", "Rasputin", "Rebikov", "Rezanov", "Rokossovsky", "Rolov", "Romanov", "Rozhdestvensky", "Rukovsky", "Rumianov", "Ryzhkov", "Salamov", "Samarin", "Samoylov", "Sapozhinsky", "Sapozhnikov", "Satyev", "Savelev", "Savin", "Seleznyov", "Selkov", "Semenov", "Sementsov", "Serebryannikov", "Sergeev", "Sergeyev", "Shagiev", "Shanin", "Sharov", "Shcherbakov", "Shelemin", "Shistyev", "Shvanov", "Sidorov", "Skulsky", "Slavinsky", "Slobodin", "Slovinsky", "Slutsky", "Smolnikov", "Snegir", "Soloviev", "Sonkin", "Sorokin", "Sosunov", "Spiridonov", "Stepanov", "Stolypin", "Stransky", "Sudakov", "Suvorov", "Sviatoslavov", "Sytsov", "Tabanov", "Tarasov", "Tchesnov", "Teodorov", "Tikhomirov", "Tikhonov", "Timofeev", "Timoshinin", "Titov", "Tokarev", "Tonkov", "Toropov", "Tretyak", "Trofimov", "Turov", "Tutiakov", "Tuzmukhamedov", "Udinsky", "Ulyanov", "Ushakov", "Ustinov", "Valeev", "Varenkov", "Varyguin", "Vasaly", "Vasilev", "Velikovsky", "Vessensky", "Vinsky", "Vlasihin", "Vlasov", "Volodin", "Volosheninov", "Volsky", "Vorobev", "Voronin", "Voronov", "Vyatkin", "Yablokov", "Yagudin", "Yakovlev", "Yanev", "Yanofsky", "Yavlinsky", "Yefemov", "Yudin", "Yumashev", "Zablin", "Zablotny", "Zagitov", "Zaitsev", "Zakharov", "Zbruyev", "Zelensky", "Zenchikov", "Zharov", "Zhirinovsky", "Zhoukov", "Zhukov", "Zhuravlev", "Zolkin", "Zorkin", "Zotkin", "Zubov", "Zychik"];
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomName() {
  return randomFirstName() + " " + randomLastName();
}

function init() {
  saveStore = {};
  saveStore.exp = 0;
  saveStore.skills = {
    endurance: 0,
    strength: 0,
    looting: 0,
    autolooting: 0,
  }

  gameState = {};
  gameState.counter = 0;
  gameState.money = 0;
  gameState.boardSize = 100;
  gameState.stamina = 0;
  gameState.requiredStamina = 3;
  gameState.totalEnemies = 20;
  gameState.totalLoot = 40;
  gameState.remainingEnemies = gameState.totalEnemies;
  gameState.maxHp = 100;
  gameState.hp = gameState.maxHp;
  //gameState.boardDirty = true;
  gameState.enoughStamina = function() {
    return gameState.stamina >= gameState.requiredStamina;
  }
  gameState.eatStamina = function() {
    gameState.stamina -= gameState.requiredStamina;
  }
  gameState.inFight = function() {
    return gameState.currentCell().hasEnemy();
  }
  gameState.canLoot = function() {
    return gameState.currentCell().hasLoot();
  }
  gameState.grabLoot = function() {
    gameState.currentCell().grabLoot();
  }
  gameState.currentLoot = function() {
    return gameState.currentCell().lootInfo();
  }
  gameState.autoLoot = function() {
    return gameState.currentCell().autoLoot();
  }
  gameState.currentEnemy = function() {
    return gameState.currentCell().enemy();
  }
  gameState.log = function(text) {
    var log = $("#bg-log");
    log.html(text + "<br/>" + log.html());
  }
  gameState.getExp = function() { 
    return saveStore.exp;
  }
  gameState.gainExp = function(exp) {
    saveStore.exp += exp;
    this.log("You gained " + exp + " exp");
  }
  gameState.useExp = function(exp) {
    saveStore.exp -= exp;
  }
  gameState.updateSkill = function(skill, newLevel) {
    saveStore.skills[skill] = newLevel;
  }
  gameState.getSkillLevel = function(skill) {
    return saveStore.skills[skill];
  }
  let createSkill = function(skillName, skillIcon) {
    return {
        getLevel() { return saveStore.skills[skillName] },
        getIcon() { return '<i class="fa ' + skillIcon +'"></i>' },
        getNextLevelExp() { return Math.pow(2, this.getLevel()); },
        upgrade() { 
          let exp = gameState.getExp();
          let nextLevelExp = this.getNextLevelExp();
          if (exp >= nextLevelExp) {
            gameState.useExp(nextLevelExp)
            gameState.updateSkill(skillName, this.getLevel() + 1)
          }
        }
      }      
  }
  gameState.getSkills = function() {
    return {
      endurance: createSkill('endurance', 'fa-street-view'),
      strength: createSkill('strength', 'fa-asl-interpreting'),
      looting: createSkill('looting', 'fa-book'),
      autolooting: createSkill('autolooting', 'fa-angellist')
    }
  }
  postInit();
  spawnEnemies();
  spawnLoot();
}

function randomCellsWithoutStartingCell() {
  var arr = [];
  for (var i = 0; i < gameState.boardSize; i++) {  
    if (i != gameState.currentIndex) {
      arr.push(i);
    }
  }
  shuffle(arr);
  return arr;
}

function spawnEnemies() {
  var arr = randomCellsWithoutStartingCell();
  for (var i = 0; i < gameState.totalEnemies; i++) {
    gameState.board[arr[i]].spawnEnemy();
  }
}

function spawnLoot() {
  var arr = randomCellsWithoutStartingCell();
  for (var i = 0; i < gameState.totalLoot; i++) {
    var loot = {
      money: Math.round(100 + Math.random() * 400)
    }
    gameState.board[arr[i]].addLoot(loot);
  }
  
}

function postInit() {
  gameState.currentIndex = Math.round(Math.random() * gameState.boardSize);
  gameState.currentCell = function() {
    return gameState.board[gameState.currentIndex];
  }
  gameState.board = {};
  var i;
  for (i = 0; i < gameState.boardSize; i++) {    
    gameState.board[i] = (function() {
      var index = i;
      var str = pad(index, 2);
      var str1 = str.substring(0,1) + (Number(str.substring(1,2)) + 1);
      var str2 = str.substring(0,1) + (Number(str.substring(1,2)) - 1);
      var str3 = (Number(str.substring(0,1)) + 1) + str.substring(1,2);
      var str4 = (Number(str.substring(0,1)) - 1) + str.substring(1,2);
      var visited = false;
      var enemy = null;
      var loot = null;
      var ob = {
        isVisited: function() {
          return visited;
        },
        isCurrent: function() {
          return gameState.currentIndex == index;
        },        
        visit: function() {
          gameState.currentIndex = index;
          visited = true;
          if (!this.hasEnemy()) {
            //this.grabLoot();
          }
        },
        addLoot: function(newLoot) {
          loot = newLoot;
        },
        loot: function() {
          return loot;
        },
        lootInfo: function() {
          return "Loot: $" + loot.money.toFixed(1);
        },
        hasLoot: function() { 
          return loot != null;
        },
        autoLoot: function() {
          if (!this.hasLoot()) return;
          if (gameState.inFight()) return;

          let value = gameState.getSkillLevel('autolooting') * 0.1;  
         // value = Math.round(value * 10) / 10
          if (value > 0) {
            this._loot(value);
          }
        },
        grabLoot: function() {
          if (!this.hasLoot()) return;
          if (gameState.inFight()) {
            gameState.log("Maybe deal with the dude that wants to kick your ass first?");
            return;
          }
          let value = ( gameState.getSkillLevel('looting') + 1);
          value = this._loot(value);
          gameState.log("You found $" + value);
        },
        _loot: function(value) {
          if (value > loot.money) {
            value = loot.money;
          }
          gameState.money += value;
          loot.money -= value;
          if (loot.money == 0) {          
            loot = null; 
          }
          return value;
        },
        spawnEnemy: function() {
          var _self = this;
          var hp = 20;
          var maxHp = 20;
          var name = randomName();
          var neededTicks = 10;
          var ticks = 0;
          var ee = {
            name: name,
            hp: function() { return hp; },
            maxHp: function() { return maxHp; },
            tickHit: function() {
              ticks++;
              if (ticks == neededTicks) {
                ticks = 0;
                return true;
              }
              return false;
            },
            strength: function() { 
              if (this.dead()) { return 0; }
              return Math.round(Math.random() * 5 * 100) / 100; 
            },
            dead: function() {
              return hp <= 0;
            },
            kill: function() {
              gameState.log("You killed " + name + ", you bastard");
              enemy = null;
              //_self.grabLoot();
              gameState.gainExp(1);
            }, 
            hit: function() {
              hp -= ( gameState.getSkillLevel('strength') + 1);
              if (this.dead()) {
                this.kill();
              }
            }
          }
          enemy = ee
        },
        hasEnemy: function() {
          return enemy != null;
        },
        enemy: function() {
          return enemy;
        },
        value: function() {
          return str;
        },
        canMoveTo: function() {
          return ob.available() && gameState.enoughStamina() && !gameState.inFight();
        },
        available: function() {
          var v = gameState.currentCell().value();
          return v == str1 || v == str2 || v == str3 || v == str4;
        }
      };
      return ob;
    })();
  }
  gameState.currentCell().visit();
}

function updateBoard() {
  /*if (gameState.boardDirty == false) {
    return;
  }*/

  html = "";
  for (var i = 0; i < gameState.boardSize; i++) {
    var cell = gameState.board[i];
    html += "<div class=\"column bg-cell";
    if (cell.isVisited()) {
      html += " bg-visited-cell";
    } else if (cell.canMoveTo())  {
      html += " bg-available-cell";
    } else {
      html += " bg-not-visited-cell";
    }
    //if (cell.isCurrent()) {
    //  html += " bg-current-cell";
   // }
    html += "\">";
    if (cell.canMoveTo()) {
      html += "<button onmousedown=\"move(" + i + ")\" class=\"ui button bg-move-button\">" + cell.value() + "</button>";
    }
   // else {
   //   html += cell.value();
   // }
    if (cell.isVisited()) {
      if (cell.hasEnemy()) {
        html += '<i class="fa fa-user"></i>';
      }
      if (cell.hasLoot()) {
        html += '<i class="fa fa-archive"></i>';
      }
    }
    if (cell.isCurrent()) {
      html += '<div class="bg-current-cell-image"></div>';
    }
    html += "</div>";
  }
  $("#board").html(html);
}

function tick() {
  gameState.counter++;
  gameState.stamina += 0.1 * (gameState.getSkillLevel('endurance') + 1);
  gameState.hp+=0.01;
  gameState.hp = Math.min(gameState.hp, gameState.maxHp);
  if (gameState.inFight()) {
    var enemy = gameState.currentEnemy();
    if (enemy.tickHit()) {
      var hit = enemy.strength();
      gameState.hp -= hit;
      gameState.log(enemy.name + " hit you for " + hit + " HP");
    }
  }
  if (gameState.canLoot()) {
    gameState.autoLoot();
  }
  gameState.stamina = Math.round(gameState.stamina * 100) / 100;
  gameState.hp = Math.round(gameState.hp * 100) / 100;
  render();
//  $("h2").text(gameState.counter);
}

function fight() {
  if (!gameState.inFight()) return;
  var enemy = gameState.currentEnemy();
  enemy.hit();
  render();
}

function loot() {
  if (!gameState.canLoot()) return;
  gameState.grabLoot();  
  render();
}

function renderLooting() {
  if (gameState.canLoot()) {
    $("#bg-loot").show();
    $("#bg-loot-info").text(gameState.currentLoot());

  } else {
    $("#bg-loot").hide();
  }
}

function updateFight() {
  if (gameState.inFight()) {
    var enemy = gameState.currentEnemy();
    $("#bg-fight").show();
    $(".bg-enemy-name-value").text(enemy.name);
    $(".bg-enemy-hp-value").text(enemy.hp());
    $(".bg-enemy-max-hp-value").text(enemy.maxHp());
  } else {
    $("#bg-fight").hide();
  }
}

function upgradeSkill(skillName) {
  let skill = gameState.getSkills()[skillName];
  skill.upgrade()
}

function updateSkills() {
  html = ""
  let skills = gameState.getSkills()
  for (let [key, value] of Object.entries(skills)) {
    html += "<h4>" + key + value.getIcon() + " level: " + value.getLevel() + "</h4>"
    html += "for next level required " + value.getNextLevelExp() + " exp!<br/>";
    if (gameState.getExp() >= value.getNextLevelExp()) {
      html += "<button onmousedown=\"upgradeSkill('" + key + "')\">upgrade</button>";
    }
  }
  $("#bg-skills").html(html)
}

function render() {
  $(".bg-money-value").text(gameState.money.toFixed(1));
  $(".bg-stamina-value").text(gameState.stamina);
  $(".bg-hp-value").text(gameState.hp);
  $(".bg-max-hp-value").text(gameState.maxHp);
  $(".bg-exp-value").text(gameState.getExp());
  updateBoard();
  renderLooting();
  updateFight();
  updateSkills();
  if (gameState.hp <= 0) {
    $("body").html("<h1>YOU DIED</h1>");
  }
}

function move(target) {
  gameState.eatStamina();
  gameState.board[target].visit();
  render();
} 

$(function() {
  init();
  tick();
  setInterval(tick, 100);
});
