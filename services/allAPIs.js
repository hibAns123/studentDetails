import { commonAPI } from "./commonAPIs"
import { SERVER_URL } from "./serverUrls"

// register api-called by component Auth
export const registerAPI=async(reqBody)=>{
return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}
// // Get Registered Students API
// export const getRegisteredStudentsAPI = async () => {
//     return await commonAPI("GET", `${SERVER_URL}/data`);
//   }