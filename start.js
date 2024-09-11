let _modPath;

function findFeatureByName(name) {
    return Features.find(feature => feature.name === name);
}
exports.initialize = modPath => {
    let videoAds = findFeatureByName("VideoAds");
    let bannerAds = findFeatureByName("BannerAds");
    let textAds = findFeatureByName("TextAds");
    let adBlockObfuscator = findFeatureByName("AdBlockObfuscator");

    Helpers.CalculateAdblockObfuscatorDissatisfaction = e=>_.clamp(Math.ceil(0))
    Helpers.CalculateSubscriptionDissatisfaction = e=>{return 0}
    if (videoAds) videoAds.dissatisfaction = 0;
    if (bannerAds) bannerAds.dissatisfaction = 0;
    if (textAds) textAds.dissatisfaction = 0;
}

exports.onLoadGame = settings => {
};
exports.onNewHour = settings => {
};
exports.onNewDay = settings => {
    Helpers.CalculateFeatureSatisfaction = (e,t)=>{return 100}
};