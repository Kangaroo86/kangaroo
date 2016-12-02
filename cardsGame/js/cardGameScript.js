/**
 * Created by Cang Le on 9/18/2016.
 */


//user card selected and random card input


function activate() {
    var result = document.forms['cardLists']['cardName'].value;
    document.getElementById('userInput').innerHTML = result;
    var executeName = executingRandomCard();
    var randomCardName = executeName[0];
    //console.info('executedFunction:', executeName);
    //console.info('randomCard:', randomCardName);

        if (result == "DarkMagician") {
            document.getElementById('cardSelected').src = "../images/DarkMagician.jpg";
            document.getElementById('userHPResult').innerHTML = DarkMagician.hp;
            document.getElementById('userMPResult').innerHTML = DarkMagician.mp;
            document.getElementById('userButton').value = 'DarkMagicAttk';
            document.getElementById('userButton').onclick = function() {darkMagicAttk(randomCardName)};
            randomCardAttk(randomCardName, result);
            document.getElementById('message').innerHTML = 'DarkMagician does 2500 damages to ' + randomCardName.toString();
            refreshingUI(DarkMagician, randomCardName);
        }
        if (result == "White-Eyes") {
            document.getElementById('cardSelected').src = "../images/whiteEyes.jpg";
            document.getElementById('userHPResult').innerHTML = WhiteEyes.hp;
            document.getElementById('userMPResult').innerHTML = WhiteEyes.mp;
            document.getElementById('userButton').value = 'WhiteLighting';
            document.getElementById('userButton').onclick = function() {whiteLighting(randomCardName)};
            randomCardAttk(randomCardName, result);
            refreshingUI(WhiteEyes, randomCardName);
        }
        if (result == "Junk Archer") {
            document.getElementById('cardSelected').src = "../images/Archer.jpg";
            document.getElementById('userHPResult').innerHTML = JunkArcher.hp;
            document.getElementById('userMPResult').innerHTML = JunkArcher.mp;
            document.getElementById('userButton').value = 'DrillHorn';
            document.getElementById('userButton').onclick = function() {fireArrow(randomCardName)};
            randomCardAttk(randomCardName, result);
            refreshingUI(JunkArcher, randomCardName);
        }
        if (result == "SwordMaster") {
            document.getElementById('cardSelected').src = "../images/SwordMaster.jpg";
            document.getElementById('userHPResult').innerHTML = SwordMaster.hp;
            document.getElementById('userMPResult').innerHTML = SwordMaster.mp;
            document.getElementById('userButton').value = 'OmiSlash';
            document.getElementById('userButton').onclick = function() {omislash(randomCardName)};
            randomCardAttk(randomCardName, result);
            refreshingUI(SwordMaster, randomCardName);
        }
    }

function executingRandomCard(result) {
    var listOfRandomCards = [DarkMagician, WhiteEyes, JunkArcher, SwordMaster];
    var randomIndexNumber = Math.floor(Math.random() * listOfRandomCards.length);
    var randomCard = listOfRandomCards[randomIndexNumber];

    document.getElementById('randomCardSelected').src = randomCard.imageLocation;
    document.getElementById('randomInput').innerHTML = randomCard.name;
    document.getElementById('randomHPResult').innerHTML = randomCard.hp;
    document.getElementById('randomMPResult').innerHTML = randomCard.mp;
    document.getElementById('randomButton').value = randomCard.buttonAttackName;
    //document.getElementById('randomButton').onclick = function() {
    //    if(randomCard.name == 'DarkMagician') {
    //        darkMagicAttk(result);
    //    }
    //    if(randomCard.name == 'WhiteEyes') {
    //        whiteLighting(result);
    //    }
    //    if(randomCard.name == 'JunkArcher') {
    //        fireArrow(result);
    //    }
    //    if(randomCard.name == 'SwordMaster') {
    //        omislash(result);
    //    }
    //};
    return [randomCard];
}

function randomCardAttk(randomCard,result) {
        document.getElementById('randomButton').onclick = function() {
        if(randomCard.name == 'DarkMagician') {
            darkMagicAttk(result);
        }
        if(randomCard.name == 'WhiteEyes') {
            whiteLighting(result);
        }
        if(randomCard.name == 'JunkArcher') {
            fireArrow(result);
        }
        if(randomCard.name == 'SwordMaster') {
            omislash(result);
        }
    };
}


/*** Basic character parameter ***/
function CharacterBasicParameter (name, hp, mp,  defensePoint, attackPoint, imageLocation, buttonAttackName) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.defensePoint = defensePoint;
    this.attackPoint = attackPoint;
    this.imageLocation = imageLocation;
    this.buttonAttackName = buttonAttackName;
}

var DarkMagician = new CharacterBasicParameter('DarkMagician', 8000, 500, 2100, 2500, '../images/darkMagician.jpg', 'darkMagicAttk');
var WhiteEyes = new CharacterBasicParameter('WhiteEyes', 7000, 100, 2900, 3400, '../images/whiteEyes.jpg', 'whiteLighting' );
var JunkArcher = new CharacterBasicParameter('JunkArcher', 6000, 700, 2000, 2300, '../images/Archer.jpg', 'fireArrow');
var SwordMaster = new CharacterBasicParameter('SwordMaster', 5000, 200, 2200, 2600, '../images/SwordMaster.jpg', 'omislash');


/*** random MP and HP drain ***/
function randomMPdrain() {
    return Math.floor(Math.random() * (100 - 50 + 1) + 50);
}

function randomHPdrain() {
    return Math.floor(Math.random() * (2000 - 1000 + 1) + 1000);
}

/*** refresh UI ***/
function refreshingUI(user, opponent) {
    document.getElementById('userHPResult').innerHTML = user.hp;
    document.getElementById('userMPResult').innerHTML = user.mp;
    document.getElementById('randomHPResult').innerHTML = opponent.hp;
    document.getElementById('randomMPResult').innerHTML = opponent.mp;
}



/*** special attack for each characters ***/
function darkMagicAttk(opponent) {
    if (opponent.hp > 0) {
        if (DarkMagician.hp > 0 && DarkMagician.mp > 0) {
            DarkMagician.mp -= randomMPdrain();
            opponent.hp -= DarkMagician.attackPoint;
            refreshingUI(DarkMagician, opponent);
        }
    }
}

function whiteLighting(opponent) {
    if (opponent.hp > 0) {
        if (WhiteEyes.hp > 0 && WhiteEyes.mp > 0) {
            WhiteEyes.hp -= randomHPdrain();
            opponent.hp -= WhiteEyes.attackPoint;
            refreshingUI( WhiteEyes, opponent);
        }
    }
}

function fireArrow(opponent) {
    if (opponent.hp > 0) {
        if(JunkArcher.hp > 0 && JunkArcher.mp > 0) {
            JunkArcher.hp -= randomHPdrain();
            JunkArcher.mp -= randomMPdrain();
            opponent.hp -= JunkArcher.attackPoint;
            refreshingUI(JunkArcher, opponent);
        }
    }
}

function omislash(opponent) {
    if (opponent.hp > 0) {
        if(SwordMaster.hp > 0 && SwordMaster.mp > 0) {
            SwordMaster.hp -= 1000;
            opponent.mp -= randomMPdrain();
            opponent.hp -= SwordMaster.attackPoint;
            refreshingUI(SwordMaster, opponent);
        }
    }
}

