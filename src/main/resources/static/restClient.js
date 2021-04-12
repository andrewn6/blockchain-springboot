"use strict";

const testMode = false;

function getAllAgents() {
    sendHttpRequest("GET", "agent/all", null, displayAllAgents);
}

function getAgent() {
    const name = document.getElementById("agentNameGet").value;
    sendHttpRequest("GET", "agent?name=" + name, null, null);
}

function removeAgent(name) {
    sendHttpRequest("DELETE", "agent?name=", name, null, getAllAgents);
}

function removeAllAgents() {
    sendHttpRequest("DELETE", "agent/all", null, getAllAgents())
}
function createAgent() {
    let idx = getNextCount();
    let name = "Agent" + idx;
    let port = 3000 + idx;
    sendHttpRequest("POST", "agent?name=" + name + "&port=" + port, null, displayAgent);
}

function mine(name) {
    sendHttpRequest("POST", "agent/mine?agent=" + name, null, getAllAgents);
}
function sendHttpRequest(action, url, data, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            callback(xmlHttp.responseText);
        }
    };
    xmlHttp.open(action, url, true);
    xmlHttp.send(data);
}

const getNextCount = (function () {
    if (!sessionStorage.count) {
        sessionStorage.count = 0;
    }
    return function () {
        sessionStorage.count = Number(sessionStorage.count) + 1;
        return Number(sessionStorage.count);
    }
})();