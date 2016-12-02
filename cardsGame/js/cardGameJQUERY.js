/**
 * Created by Cang Le on 10/5/2016.
 */


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
function refreshingUI() {
    document.getElementById('userHPResult').innerHTML = DarkMagician.hp;
    document.getElementById('userMPResult').innerHTML = DarkMagician.mp;
    document.getElementById('userHPResult').innerHTML = WhiteEyes.hp;
    document.getElementById('userMPResult').innerHTML = WhiteEyes.mp;
    document.getElementById('userHPResult').innerHTML = JunkArcher.hp;
    document.getElementById('userMPResult').innerHTML = JunkArcher.mp;
    document.getElementById('userHPResult').innerHTML = SwordMaster.hp;
    document.getElementById('userMPResult').innerHTML = SwordMaster.mp;
}


$('document').ready(function() {
   $('userHPResult').html(DarkMagician.hp);
   $('userMPResult').html(DarkMagician.hp);
   $('userHPResult').html(WhiteEyes.hp);
   $('userMPResult').html(WhiteEyes.mp);
   $('userHPResult').html(JunkArcher.hp);
   $('userMPResult').html(JunkArcher.mp);
   $('userHPResult').html(SwordMaster.hp);
   $('userMPResult').html(SwordMaster.mp);
});




/*** special attack for each characters ***/
function darkMagicAttk(opponent) {
    DarkMagician.mp -= randomMPdrain();
    opponent.hp -= DarkMagician.attackPoint;
    refreshingUI();
    //console.info('UI', opponent);
}

function whiteLighting(opponent) {
    WhiteEyes.hp -= randomHPdrain();
    opponent.hp -= WhiteEyes.attackPoint;
    refreshingUI();
}

function fireArrow(opponent) {
    JunkArcher.hp -= randomHPdrain();
    JunkArcher.mp -= randomMPdrain();
    opponent.hp -= JunkArcher.attackPoint;
    refreshingUI();
}

function omislash(opponent) {
    SwordMaster.hp -= 1000;
    opponent.mp -= randomMPdrain();
    opponent.hp -= SwordMaster.attackPoint;
    refreshingUI();
}
