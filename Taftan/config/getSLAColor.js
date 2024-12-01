const colors = require("../components/colors");

module.exports = (sla) => {
    if(sla >= 0   && sla <= 75 ) return colors.green;
    if(sla > 75  && sla <= 100) return colors.yellow;
    if(sla > 100 && sla <= 150) return colors.red3;
}