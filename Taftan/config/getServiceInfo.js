const getServiceInfo = (detail) => {
    if (detail.requestInfo.serviceGroup == 1) return detail.damageInfo;
    if (detail.requestInfo.serviceGroup == 2) return detail.pmInfo;
    if (detail.requestInfo.serviceGroup == 3) return detail.installInfo;
    if (detail.requestInfo.serviceGroup == 6) return detail.siteInfo;
    if (detail.requestInfo.serviceGroup == 7) return detail.projectInfo;
    if (detail.requestInfo.serviceGroup == 8) return detail.damageInfo;
    if (detail.requestInfo.serviceGroup == 9) return detail.siteInfo;
    if (detail.requestInfo.serviceGroup == 10) return detail.siteInfo;
    if (detail.requestInfo.serviceGroup == 11) return detail.siteInfo;
}
module.exports = {getServiceInfo};