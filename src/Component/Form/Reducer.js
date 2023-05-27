// const TransactionReducer = ((oldData, newData)=>{
// switch(newData.type){
//     case 'Add_Data': {
//         return[newData.payload, ...oldData]
//     }
//     default: return oldData;

//    case 'user_Delete' : {
//     return newData.payload.filter(item=>item.id != newData.id)
// }

// } 







// })

// export default TransactionReducer


const TransactionReducer = ((oldData, newData) => {
  switch (newData.type) {
    case 'Add_Data': {
      // return [newData.payload, oldData];
      return [newData.payload, ...oldData];
    }
    case 'user_Delete': {
      console.log(newData.payload);
      return oldData =  oldData.filter(item => item.id != newData.payload);
    }
    case 'user_update' : {
      return     oldData[newData.index] = newData.payload

    }
    default: {
    return oldData;
    }
  }
});

export default TransactionReducer;
