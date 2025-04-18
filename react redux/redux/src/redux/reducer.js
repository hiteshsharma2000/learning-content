// export const countreducer=(prev,action)=>{
//     console.log(action);
//     switch(action.type){
//         case "INCREAMENT":
//            return {count:prev.count+action.payload}
//         case "DECREAMENT":
//            return {count:prev.count-action.payload}
//         default:
//            return prev          
//     }
// }
export const countreducer=(prev,action)=>{
   switch(action.type){
        case "INCREAMENT":
          return {count:prev.count+action.payload}
        case "DECREAMENT":
          return {count:prev.count-action.payload}
        default:
         return prev   
      } 
}
