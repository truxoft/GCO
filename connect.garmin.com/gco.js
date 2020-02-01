// === GCOverrides =====================================================
// Copyright © 2020 by Ivo Truxa, all rights reserved - gco@apnea.cz
// =====================================================================
var gcoVer = 1.01;
var gcoVerTm = '2020/02/01';

// === GCOverrides SETTINGS ============================================
var gcoSleepH = 8;      // enter the number of hours (without minutes) of your sleep goal
var gcoSleepM = 0;      // enter the remaining number of minutes of your sleep goal
var gcoUseKJ = true;   // change false to true to enable the conversion of kcal to kJoules
// === end of GCO settings =============================================

var gcoInitDone = false;

// ---------------------------------------------------------------------
// Identification of GCOverrides
// ---------------------------------------------------------------------
function gcoInit() {
    var gcControls = document.getElementsByClassName("header-controls");
    if (!gcoInitDone && gcControls && gcControls[0]) {
        gcControls[0].insertAdjacentHTML("afterend", '<span style="color:#ccc; font-size:12pt;">GCOverrides <span style="font-size:7pt;">v'+gcoVer+'</span></span>');
        gcoInitDone = true;
    }
}


// ---------------------------------------------------------------------
// some GCO functions need to be re-applied periodically
// ---------------------------------------------------------------------
// Note: using setInterval() is a temporary quick & dirty hack; 
//       properly it should be done by overriding events or classes
//       in some cases one-time call in document.onload would be sufficient 
setInterval(function(){
    gcoInit();
    gcoWeight6m();
    gcoActivityOverlays();
    gcoFloorsPerMin(); 
    gcoSleepGoalFix();
    gcoKCalToKJoule();
},1000);


// ---------------------------------------------------------------------
// Injecting the missing 6 Months tab on the Weight page
// ---------------------------------------------------------------------
function gcoWeight6m() {
    var aYear = document.getElementById("lastYearLinkId"); 
    if (aYear && !document.getElementById("lastSixMonthsLinkId")) {
        aYear.parentElement.insertAdjacentHTML("beforebegin", '<a href="#pane3" data-toggle="tab" id="lastSixMonthsLinkId">6 Months</a>');
    }
} 


// ---------------------------------------------------------------------
// Injecting missing overlay labels on zoomed charts of an Activity
// ---------------------------------------------------------------------
function gcoActivityOverlays() {
    var overlay = [
        document.getElementById("primary-dropdown"),
        document.getElementById("secondary-dropdown")
    ]; 
    for (n=0; n<2; n++) {
        if (overlay[n]) {
            for (i=0; i<overlay[n].childElementCount; i++) { 
                if (!overlay[n].children[i].innerText){
                    var label    = overlay[n].children[i].getAttribute("data-value");
                    var lblChart = overlay[n].parentElement.getElementsByTagName('button')[0];
                    overlay[n].children[i].getElementsByTagName('a')[0].innerText = label;
                    if (!lblChart.innerText) {
                        var t = document.createTextNode(label);
                        lblChart.insertBefore(t, lblChart.childNodes[2]);
                    }
                }
            }
        }
    }

    // searching and adding the missing title
    var modalHeader = document.getElementById("chart-header-placeholder");
    if (modalHeader) {
        var modalCircle = modalHeader.getElementsByClassName("chart-color-circle");
        if (modalCircle && modalCircle[0] && !modalCircle[0].parentElement.innerText) {
            var circles = document.getElementsByClassName("chart-color-circle");
            for (i=0; i<circles.length; i++) {
                if (circles[i].style.backgroundColor == modalCircle[0].style.backgroundColor) {
                    modalCircle[0].parentElement.innerHTML += circles[i].nextSibling.innerText;
                    break;
                }
            }
        }
    }
} 


// ---------------------------------------------------------------------
// Floors per minute need to be divided by 60 to fix the GC bug
// ---------------------------------------------------------------------
var floorFixDone = false;
function gcoFloorsPerMin() {
    var gcFloorClimb = document.getElementById("react-activitySmallStats");
    if (gcFloorClimb) {
        var gcFloorsMin = gcFloorClimb.children[0].children[0].children[3].children[0].children[0];
        var val = parseFloat(gcFloorsMin.innerText);
        if (val > 0 && !floorFixDone) {
            floorFixDone = true;
            gcFloorsMin.innerText = Math.round(val/0.6)/100; // rounding division by 60 to 2 decimals
        }
    }
}


// ---------------------------------------------------------------------
// Adjusting the Sleep Goal
// ---------------------------------------------------------------------
function gcoSleepGoalFix() {
    var gcSleepGoal = document.getElementsByClassName("SleepGauge_secondText__Padqp");
     
    if (gcSleepGoal && gcSleepGoal[1] && !(gcoSleepH==8 && gcoSleepM==0)) {
        gcSleepGoal[1].innerText = parseInt(gcoSleepH) +"h "+ (gcoSleepM? parseInt(gcoSleepM)+"m " : "") +"Goal";

        var gcSleepTm = document.getElementsByClassName("SleepGauge_mainText__1TB0t");
        if (gcSleepTm && gcSleepTm[0]) {
            sleepTm = gcSleepTm[0].innerText.match(/\d+/g).map(Number);
            if (sleepTm[0]>gcoSleepH || sleepTm[0]==gcoSleepH && sleepTm[1]>=gcoSleepM) {
                var gcGoalMet = document.getElementsByClassName("SleepGauge_goalNotMet__1XU5S");
                if (gcGoalMet && gcGoalMet[0])
                    gcGoalMet[0].className = "SleepGauge_goalMet__2fMsJ";
            }
        }
    }
} 


// ---------------------------------------------------------------------
// Converting kCal values to kJoules (SI units)
// ---------------------------------------------------------------------
function gcoKCalToKJoule() {
    if (gcoUseKJ) {
        var gcCalBox = null;
        var gcCalTitle = document.getElementsByClassName("DailySummaryPageCardTitle_cardTitle__2Hwgo");
        if (gcCalTitle) {
            for (i=0; i<gcCalTitle.length; i++) {
                if (gcCalTitle[i].innerText.toUpperCase().trim() == 'CALORIES' || gcCalTitle[i].innerText.toUpperCase().includes("KILOJOULES")) {
                    gcCalTitle[i].innerText = "Energy Burned [kiloJoules]";
                    gcCalBox = gcCalTitle[i].parentElement.parentElement.parentElement.parentElement;
                }
            }
        }

        if (gcCalBox) {
            // Calories In/Out pane in Daily Summary
            gcoElementsKC2KJ(gcCalBox,"span.DailySummaryCardMainValue_mainValue__1zUSs");
            gcoElementsKC2KJ(gcCalBox,"span.DailySummaryCardDataBlock_dataValue__43rJX");
            gcoElementsKC2KJ(gcCalBox,"div.CaloriesChart_dataBit__3nL6F");
            gcoElementsKC2KJ(gcCalBox,"div.CaloriesInfo_dataBit__wg_D4");
            gcoGoalKC2KJ(gcCalBox, "div.CaloriesCardContent_centeredText__2MlU7 > h5");
            gcoLabelsKC2KJ(gcCalBox);
        }

        // Calories In/Out widget
        var calWidget = document.getElementsByClassName("calories-summary");
        if (calWidget && calWidget[0]) {
            gcoElementsKC2KJ(calWidget[0],"div.data-bit");
            gcoGoalKC2KJ(calWidget[0], "div.chart-goal-overlay > div.data-1 > h5");
            gcoLabelsKC2KJ(calWidget[0]);
        }

    }
}

// ---------------------------------------------------------------------
function gcoKC2KJ(val){
    return Math.round(4.184 * parseInt(val.replace(",","").replace(".","")));
}

// ---------------------------------------------------------------------
function gcoLabelsKC2KJ(container) {
    var graph = container.querySelectorAll("g.highcharts-axis-labels > text");
    if (graph) {
        for (i=0; i<graph.length; i++) {
            if (graph[i] && !graph[i].textContent.includes('kJ')) {
                graph[i].textContent = gcoKC2KJ(graph[i].textContent) + " kJ";
            }
        }    
    }
}

// ---------------------------------------------------------------------
function gcoGoalKC2KJ(rootObj, elemType) {
    var goal = rootObj.querySelectorAll(elemType);
    if (goal && goal[0].childNodes[3] && !goal[0].childNodes[3].textContent.includes('kJ')) {
        goal[0].childNodes[3].textContent = gcoKC2KJ(goal[0].childNodes[3].textContent) + " kJ";
        goal[0].style.color = "green";
    } else if (goal && goal[0].childNodes[0].textContent.includes("%") && !goal[0].childNodes[0].textContent.includes('kJ')) {
        var txt = goal[0].childNodes[0].textContent.split(" ");
        var val = txt[2];
        txt.pop();
        goal[0].childNodes[0].textContent = txt.join(" ") + " " + gcoKC2KJ(val) + " kJ";
        goal[0].style.color = "green";
    }
}

// ---------------------------------------------------------------------
function gcoElementsKC2KJ(rootObj, elemType) {
    var calVals = rootObj.querySelectorAll(elemType);
    for (i=0; i<calVals.length; i++) {
        if (!calVals[i].innerHTML.includes('kJ')) {
            calVals[i].innerHTML = gcoKC2KJ(calVals[i].innerText) + '<span style="font-size:50%"> kJ</span>';
            calVals[i].style.color = "green";
        }
    }
}

// TX end ==============================================================