var AL = "0";
var AZ = "1";
var AR = "2";
var CA = "3";
var CO = "4";
var CT = "5";
var DE = "6";
var FL = "7";
var GA = "8";
var ID = "9";
var IL = "10";
var IN = "11";
var IA = "12";
var KS = "13";
var KY = "14";
var LA = "15";
var ME = "16";
var MD = "17";
var MA = "18";
var MI = "19";
var MN = "20";
var MS = "21";
var MO = "22";
var MT = "23";
var NE = "24";
var NV = "25";
var NH = "26";
var NJ = "27";
var NM = "28";
var NY = "29";
var NC = "30";
var ND = "31";
var OH = "32";
var OK = "33";
var OR = "34";
var PA = "35";
var RI = "36";
var SC = "37";
var SD = "38";
var TN = "39";
var TX = "40";
var UT = "41";
var VT = "42";
var VA = "43";
var WA = "44";
var WV = "45";
var WI = "46";
var WY = "47";

var stateVisibility = new Array();
for (let i = 0; i < 48 ; i++) {
    stateVisibility[i] = false;
}

var trip = new Array();
trip = localStorage.getItem("yourTrip");

console.log(trip);

//trip = JSON.parse(trip);
console.log(trip);

for (let i = 0; i < trip.length; i++) {
    stateVisibility[Number(trip[i])] = true;
    console.log(trip[i] + " is true!");
}

console.log(stateVisibility);


if (stateVisibility[Number(AL)] === false) {
    document.getElementById('ALinfo').style.display = 'none';
}
if (stateVisibility[Number(AZ)] === false) {
    document.getElementById('AZinfo').style.display = 'none';
}
if (stateVisibility[Number(AR)] === false) {
    document.getElementById('ARinfo').style.display = 'none';
}
if (stateVisibility[Number(CA)] === false) {
    document.getElementById('CAinfo').style.display = 'none';
}
if (stateVisibility[Number(CO)] === false) {
    document.getElementById('COinfo').style.display = 'none';
}
if (stateVisibility[Number(CT)] === false) {
    document.getElementById('CTinfo').style.display = 'none';
}
if (stateVisibility[Number(DE)] === false) {
    document.getElementById('DEinfo').style.display = 'none';
}
if (stateVisibility[Number(FL)] === false) {
    document.getElementById('FLinfo').style.display = 'none';
}
if (stateVisibility[Number(GA)] === false) {
    document.getElementById('GAinfo').style.display = 'none';
}
if (stateVisibility[Number(ID)] === false) {
    document.getElementById('IDinfo').style.display = 'none';
}
if (stateVisibility[Number(IL)] === false) {
    document.getElementById('ILinfo').style.display = 'none';
}
if (stateVisibility[Number(IN)] === false) {
    document.getElementById('INinfo').style.display = 'none';
}
if (stateVisibility[Number(IA)] === false) {
    document.getElementById('IAinfo').style.display = 'none';
}
if (stateVisibility[Number(KS)] === false) {
    document.getElementById('KSinfo').style.display = 'none';
}
if (stateVisibility[Number(KY)] === false) {
    document.getElementById('KYinfo').style.display = 'none';
}
if (stateVisibility[Number(LA)] === false) {
    document.getElementById('LAinfo').style.display = 'none';
}
if (stateVisibility[Number(ME)] === false) {
    document.getElementById('MEinfo').style.display = 'none';
}
if (stateVisibility[Number(MD)] === false) {
    document.getElementById('MDinfo').style.display = 'none';
}
if (stateVisibility[Number(MA)] === false) {
    document.getElementById('MAinfo').style.display = 'none';
}
if (stateVisibility[Number(MI)] === false) {
    document.getElementById('MIinfo').style.display = 'none';
}
if (stateVisibility[Number(MN)] === false) {
    document.getElementById('MNinfo').style.display = 'none';
}
if (stateVisibility[Number(MS)] === false) {
    document.getElementById('MSinfo').style.display = 'none';
}
if (stateVisibility[Number(MO)] === false) {
    document.getElementById('MOinfo').style.display = 'none';
}
if (stateVisibility[Number(MT)] === false) {
    document.getElementById('MTinfo').style.display = 'none';
}
if (stateVisibility[Number(NE)] === false) {
    document.getElementById('NEinfo').style.display = 'none';
}
if (stateVisibility[Number(NV)] === false) {
    document.getElementById('NVinfo').style.display = 'none';
}
if (stateVisibility[Number(NH)] === false) {
    document.getElementById('NHinfo').style.display = 'none';
}
if (stateVisibility[Number(NJ)] === false) {
    document.getElementById('NJinfo').style.display = 'none';
}
if (stateVisibility[Number(NM)] === false) {
    document.getElementById('NMinfo').style.display = 'none';
}
if (stateVisibility[Number(NY)] === false) {
    document.getElementById('NYinfo').style.display = 'none';
}
if (stateVisibility[Number(NC)] === false) {
    document.getElementById('NCinfo').style.display = 'none';
}
if (stateVisibility[Number(ND)] === false) {
    document.getElementById('NDinfo').style.display = 'none';
}
if (stateVisibility[Number(OH)] === false) {
    document.getElementById('OHinfo').style.display = 'none';
}
if (stateVisibility[Number(OK)] === false) {
    document.getElementById('OKinfo').style.display = 'none';
}
if (stateVisibility[Number(OR)] === false) {
    document.getElementById('ORinfo').style.display = 'none';
}
if (stateVisibility[Number(PA)] === false) {
    document.getElementById('PAinfo').style.display = 'none';
}
if (stateVisibility[Number(RI)] === false) {
    document.getElementById('RIinfo').style.display = 'none';
}
if (stateVisibility[Number(SC)] === false) {
    document.getElementById('SCinfo').style.display = 'none';
}
if (stateVisibility[Number(SD)] === false) {
    document.getElementById('SDinfo').style.display = 'none';
}
if (stateVisibility[Number(TN)] === false) {
    document.getElementById('TNinfo').style.display = 'none';
}
if (stateVisibility[Number(TX)] === false) {
    document.getElementById('TXinfo').style.display = 'none';
}
if (stateVisibility[Number(UT)] === false) {
    document.getElementById('UTinfo').style.display = 'none';
}
if (stateVisibility[Number(VT)] === false) {
    document.getElementById('VTinfo').style.display = 'none';
}
if (stateVisibility[Number(VA)] === false) {
    document.getElementById('VAinfo').style.display = 'none';
}
if (stateVisibility[Number(WA)] === false) {
    document.getElementById('WAinfo').style.display = 'none';
}
if (stateVisibility[Number(WV)] === false) {
    document.getElementById('WVinfo').style.display = 'none';
}
if (stateVisibility[Number(WI)] === false) {
    document.getElementById('WIinfo').style.display = 'none';
}
if (stateVisibility[Number(WY)] === false) {
    document.getElementById('WYinfo').style.display = 'none';
} 
