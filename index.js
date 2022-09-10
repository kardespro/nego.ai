const axios = require("axios")
const BASE_URL = "https://packages.nego.network/packages/negoai/release.json"
const config = {
   "errorMessage": "Nego API Error | packages.nego.network not resolving"

}
module.exports = async (content, options = {}) => {
    let package_req = await axios.get(BASE_URL)
    let resolve = package_req.data
    if(!content) return new Error("Question not Provided")
    if(!options) return new Error("Options Not Provided")

   // let data = resolve.find(a => a.question === content && a.isCursedResponse === options.isCursedResponse)
   let data = resolve.find(a => a.question.includes(content) && a.isCursedResponse === options.isCursedResponse)

    return data.answer
}
