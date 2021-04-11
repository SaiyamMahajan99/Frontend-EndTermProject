function add() {
    var country = document.getElementById("Cnt").value;
    var from = document.getElementById("frm").value;
    var to = document.getElementById("to").value;
    var xhttp1 = new XMLHttpRequest();
    var url = "https://api.covid19api.com/country/" + country + "?from=" + from + "T00:00:00Z&to=" + to + "T00:00:00Z";

    xhttp1.open("GET", url, true);
    xhttp1.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var list = JSON.parse(this.responseText);
            var CNTCASE = 0;
            var CNTDTH = 0;
            var CNTACTV = 0;
            for (var i = 0; i < list.length; i++) {
                create(list[i].Confirmed, list[i].Active, list[i].Deaths);
            }

        }
    };
    xhttp1.send();

}



function create(CNTCASE, CNTACTV, CNTDTH) {
    var parent = document.getElementById("ResultDisplay");

    var div_parent = document.createElement("div");

    var CnfrmCases = document.createElement("p");
    var CTEXT = document.createTextNode("Confirmed cases:");
    CnfrmCases.appendChild(CTEXT);

    var sCnfrmCases = document.createElement("span");
    var sCnfrmCases_text = document.createTextNode(CNTCASE);

    sCnfrmCases.appendChild(sCnfrmCases_text);
    CnfrmCases.appendChild(sCnfrmCases);

    div_parent.appendChild(CnfrmCases);

    var ActiveCases = document.createElement("p");
    var a_text = document.createTextNode("Active cases:");
    ActiveCases.appendChild(a_text);

    var sActiveCases = document.createElement("span");
    var sActiveCasesTEXT = document.createTextNode(CNTACTV);

    sActiveCases.appendChild(sActiveCasesTEXT);
    ActiveCases.appendChild(sActiveCases);

    div_parent.appendChild(ActiveCases);



    var DEATHCASES = document.createElement("p");
    var d_text = document.createTextNode("Death cases:");
    DEATHCASES.appendChild(d_text);

    var sDEATHCASES = document.createElement("span");
    var sDEATHCASESTEXT = document.createTextNode(CNTDTH);

    sDEATHCASES.appendChild(sDEATHCASESTEXT);
    DEATHCASES.appendChild(sDEATHCASES);

    div_parent.appendChild(DEATHCASES);


    div_parent.setAttribute("class", "divBlue");

    parent.appendChild(div_parent);

}