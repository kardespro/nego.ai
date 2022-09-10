const ai = require("../index")
async function asyncCall() {
    console.log('calling');
    const result = await ai("send me your invite link", {isCursedResponse:false})
    console.log(result);
    
  }
  
  asyncCall();

  
