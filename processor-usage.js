"use strict";
const os = require("os-utils");

function ProcessUsageWatcher() {
    global.pubcrawler = global.pubcrawler || {};
    global.pubcrawler.processCpuUsage = 0;
}

ProcessUsageWatcher.prototype = {

    startWatching: function() {
        if (this.interval) {
            return;
        }

        console.log(`CPU count: ${os.cpuCount()}`);
        console.log(`Free memory: ${os.freememPercentage()}`);

        var getUsage = function () {
            os.cpuUsage(function (v) {
                console.log("CPU Usage (%): " + v*100);
            });
        };

        this.interval = setInterval(function(){
            getUsage(function(startTime){
                setTimeout(function(){
                    getUsage(function(endTime){
                        var delta = endTime - startTime;
                        var percentage = 100 * (delta / 500);
                        global.processCpuUsage = percentage;
                    });
                }, 5000);
            });
        }, 1000);
    },

    stopWatching : function()  {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }
};

var instance = new ProcessUsageWatcher();
exports.startWatching = instance.startWatching;
exports.stopWatching = instance.stopWatching;