function openPlayStore(){
    console.log("mohit");
    location.href="https://play.google.com/store/apps/details?id=com.pie.yourbooks";
}
function openAppStore(){
    location.href="https://apps.apple.com/us/app/yourbooks-gst-accounting/id6443643248";
}
function init(){
    //for android - Android
    //for iphone - iPhone
    //for ipad - iPad
    //for mac - Mac
    //else show html
    let userAgent = window.navigator.userAgent;
    if(userAgent.includes('Android')){
        openPlayStore();
    }
    else if(userAgent.includes('iPhone')||userAgent.includes('iPad')||userAgent.includes('Mac')){
        openAppStore();
    }else{
        
    }
    console.log(window.navigator.userAgent);
    document.getElementById('mydiv').innerHTML = window.navigator.userAgent
}
init();