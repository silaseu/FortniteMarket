w //ragemp 

function createRagempScript(scriptowner, scriptname, scriptdate, scriptdescription, scriptlink) {
    var $html = $(`
    <div class="ragempscriptBox">
        <img src="./img/amsl.gif" class="scriptpic">
        <label class="scriptowner">Besitzer: ${scriptowner}</label>
        <label class="scriptname">Script: ${scriptname}</label>
        <label class="scriptdate">Datum: ${scriptdate}</label>
        <label class="scriptdescription">Beschreibung: ${scriptdescription}</label>
        <a href="${scriptlink}"><button class="scriptdownloadbutton">Herunterladen</button></a>
    </div>
    `)
    $("#ragemptab").prepend($html)
}

function createAltvScript(scriptowner, scriptname, scriptdate, scriptdescription, scriptlink) {
    var $html = $(`
    <div class="ragempscriptBox">
        <img src="./img/amsl.gif" class="scriptpic">
        <label class="scriptowner">Besitzer: ${scriptowner}</label>
        <label class="scriptname">Script: ${scriptname}</label>
        <label class="scriptdate">Datum: ${scriptdate}</label>
        <label class="scriptdescription">Beschreibung: ${scriptdescription}</label>
        <a href="${scriptlink}"><button class="scriptdownloadbutton">Herunterladen</button></a>
    </div>
    `)
    $("#altvtab").prepend($html)
}

function createFiveMScript(scriptowner, scriptname, scriptdate, scriptdescription, scriptlink) {
    var $html = $(`
    <div class="ragempscriptBox">
        <img src="./img/amsl.gif" class="scriptpic">
        <label class="scriptowner">Besitzer: ${scriptowner}</label>
        <label class="scriptname">Script: ${scriptname}</label>
        <label class="scriptdate">Datum: ${scriptdate}</label>
        <label class="scriptdescription">Beschreibung: ${scriptdescription}</label>
        <a href="${scriptlink}"><button class="scriptdownloadbutton">Herunterladen</button></a>
    </div>
    `)
    $("#fivemtab").prepend($html)
}

function loadAll() {
    //RAGEMP
    createRagempScript("Vscript", "Bank", "21.08.2021", "Keine beschreibung", "https://bit.ly/32vC2GJ")
    createRagempScript("Vscript", "Juwelier", "21.08.2021", "Keine beschreibung", "https://bit.ly/3FTJk5s")
    createRagempScript("Vscript", "BWP", "21.08.2021", "Keine beschreibung", "https://bit.ly/3E8LnSI")
    createRagempScript("Vscript", "ATM", "21.08.2021", "Keine beschreibung", "https://bit.ly/3lbVxuK")
    createRagempScript("Vscript", "MAZ", "21.08.2021", "Keine beschreibung", "https://bit.ly/3CQobaJ")
    createRagempScript("Vscript", "Redage 1.1", "21.08.2021", "Keine beschreibung", "https://bit.ly/3xrPjM2")
    createRagempScript("Vscript", "RageMP Roleplay", "21.08.2021", "Keine beschreibung", "https://bit.ly/318DCOo")
    createRagempScript("Vscript", "Gambo Crimelife", "21.08.2021", "Keine beschreibung", "https://bit.ly/3raPGJR")
    createRagempScript("Vscript", "Chef Crimelife", "21.08.2021", "Keine beschreibung", "https://bit.ly/3cUyUX3")
    createRagempScript("Vscript", "Hawaii Roleplay", "21.08.2021", "Keine beschreibung", "https://bit.ly/3lcVizs")
    createRagempScript("Vscript", "GVMPc Script Reworked", "21.08.2021", "Keine beschreibung", "https://bit.ly/3nVbLtJ")
    createRagempScript("Vscript", "Homestate ohne DB", "21.08.2021", "Keine beschreibung", "https://bit.ly/3CQnYUZ")
    createRagempScript("Vscript", "Echtwelt Roleplay (Linux)", "21.08.2021", "Keine beschreibung", "https://bit.ly/3pa6s9s")
    createRagempScript("Vscript", "Gangwar (braucht keine DB)", "21.08.2021", "Keine beschreibung", "https://bit.ly/3nXDcTX")
    createRagempScript("Vscript", "Reworked Crimelife", "21.08.2021", "Keine beschreibung", "https://bit.ly/3nSKQij")
    createRagempScript("Vscript", "GVMP Gangwar", "21.08.2021", "Keine beschreibung", "https://bit.ly/3xrPabs")
    createRagempScript("Vscript", "DeserSkil", "21.08.2021", "Keine beschreibung", "https://bit.ly/3r99UDL")
    createRagempScript("Vscript", "Sibaui Gangwar", "21.08.2021", "Keine beschreibung", "https://bit.ly/3xrP6IK")
    createRagempScript("Vscript", "GNRP", "21.08.2021", "Keine beschreibung", "https://bit.ly/3FQtg4F")
    createRagempScript("Vscript", "26 Ganglife", "21.08.2021", "Keine beschreibung", "https://bit.ly/3renlm0")
    createRagempScript("Vscript", "RedAge RP", "21.08.2021", "Keine beschreibung", "https://bit.ly/3xphhb6")
    createRagempScript("Vscript", "Union Roleplay", "21.08.2021", "Keine beschreibung", "https://bit.ly/3nXglIc")
    createRagempScript("Vscript", "Project Ganglife", "21.08.2021", "Keine beschreibung", "https://bit.ly/3CPTeDq")
    createRagempScript("Vscript", "GTA LIFE", "21.08.2021", "Keine beschreibung", "https://bit.ly/3Ec0Xxj")
    createRagempScript("Vscript", "Zero Roleplay", "21.08.2021", "Keine beschreibung", "https://bit.ly/315Ieo7")
    createRagempScript("Vscript", "EVRP", "21.08.2021", "Keine beschreibung", "https://bit.ly/3rdvLdd")
    createRagempScript("Vscript", "CCrimelife", "21.08.2021", "Keine beschreibung", "https://bit.ly/3nVRhB3")
    createRagempScript("Vscript", "CrimeV", "21.08.2021", "Keine beschreibung", "https://bit.ly/2Zv1MSG")
    createRagempScript("Vscript", "RAGE:MP Launcher", "21.08.2021", "Keine beschreibung", "https://bit.ly/30YOJJw")
    createRagempScript("Vscript", "Nexus_Crimelife", "21.08.2021", "Keine beschreibung", "https://bit.ly/3p7LZ57")
    createRagempScript("Vscript", "Invictus_Crimelife", "21.08.2021", "Keine beschreibung", "https://bit.ly/3p6tzkT")
    createRagempScript("Vscript", "Nexus-Roleplay", "21.08.2021", "Keine beschreibung", "https://bit.ly/3nXf8Ra")
    createRagempScript("Vscript", "Unlimited Life 1.1", "20.12.2021", "Keine beschreibung", "https://up-to-down.net/203137/unlimited-life-11")




    //AltV
    createAltvScript("Vscript", "Roleplay", "21.08.2021", "Keine beschreibung", "https://bit.ly/32pN8wX")
    createAltvScript("Vscript", "Cyberstate", "21.08.2021", "Keine beschreibung", "https://bit.ly/3cQzrJk")
    createAltvScript("Vscript", "Pursuits Roleplay", "21.08.2021", "Keine beschreibung", "https://bit.ly/3lcRhei")
    createAltvScript("Vscript", "Simple Roleplay", "21.08.2021", "Keine beschreibung", "https://bit.ly/3cTaz3K")
    createAltvScript("Vscript", "GCRP", "21.08.2021", "Keine beschreibung", "https://bit.ly/3DVScXO")
    //FiveM
    createFiveMScript("Vscript", "NoPixel Roleplay", "21.08.2021", "Keine beschreibung", "https://bit.ly/3HU5kPD")
    createFiveMScript("Vscript", "GXMP", "21.08.2021", "Keine beschreibung", "https://bit.ly/3nTIKhX")
    createFiveMScript("Vscript", "Reworked Crimelife", "21.08.2021", "Keine beschreibung", "https://bit.ly/3cOgG9E")
    createFiveMScript("Vscript", "QBCore Roleplay", "21.08.2021", "Keine beschreibung", "https://bit.ly/3nTGmb1")
    createFiveMScript("Vscript", "maasland Roleplay", "21.08.2021", "Keine beschreibung", "https://bit.ly/32rVdBi")
    createFiveMScript("Vscript", "RIBESX12 Roleplay", "21.08.2021", "Keine beschreibung", "https://bit.ly/3E3X2m8")
    createFiveMScript("Vscript", "Spain Roleplay", "21.08.2021", "Keine beschreibung", "https://bit.ly/3p6jlkC")
    createFiveMScript("Vscript", "HighState Roleplay", "21.08.2021", "Keine beschreibung", "https://bit.ly/314HjF0e")
    createFiveMScript("Vscript", "Fastlife", "21.08.2021", "Keine beschreibung", "https://bit.ly/3HT8C5I")
    createFiveMScript("Vscript", "MostHated RP", "21.08.2021", "Keine beschreibung", "https://bit.ly/3HVyxd4")
    createFiveMScript("Vscript", "Server BONGO RP", "21.08.2021", "Keine beschreibung", "https://bit.ly/3nTIijL")
    createFiveMScript("Vscript", "PixelWorld V9", "21.08.2021", "Keine beschreibung", "https://bit.ly/3CRd5SB")
    createFiveMScript("Vscript", "FiveM Server", "21.08.2021", "Keine beschreibung", "https://bit.ly/2Zq15Kc")
    createFiveMScript("Vscript", "Qbus V3", "21.08.2021", "Keine beschreibung", "https://bit.ly/3CPXUt2")
    createFiveMScript("Vscript", "Champion Roleplay", "07.12.2021", "Keine beschreibung", "https://direct-link.net/203137/ChampionRoleplayFivem")

    //Partner
    createPartner("Altv Roleplay", "https://cdn.discordapp.com/icons/842873686104211486/c10d4214cbd9b2d575597ab48b68ad40.png?size=96", "https://bit.ly/3nTB4we");
    createPartner("Mein Vscript DC", "https://media.discordapp.net/attachments/921143808442376314/921222908515332206/1a83681b87bdc7279ff63b54d66c4d3c.png", "https://discord.gg/TsR5eq5UZg");

}

function createPartner(partnername, partnerprofilbildlink, partnerlink) {
    var $html = $(`
    <div class="partnerBox">
        <img src="${partnerprofilbildlink}" class="partnerBoxPB">
        <label class="partnerBoxName">${partnername}</label>
        <a href="${partnerlink}"><button class="partnerjoinbutton">Beitreten</button></a>
    </div>
    `)
    $("#partnertab").prepend($html)
}