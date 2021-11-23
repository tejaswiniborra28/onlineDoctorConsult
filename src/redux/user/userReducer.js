import { MAILEXISTS, REGISTER } from './userActionTypes'

const userState={
    users:{

    },
    regUser:{

    }

}



const userReducer=(state = userState, Action )=>{
    switch(Action.type){
        case REGISTER : return{
            ...state,
           users:{[Action.id]:Action.payload,...state.users},
           regUser:{}
        }
      case MAILEXISTS: return {
          ...state,
          regUser:Object.entries(state.users).filter(data=>data[1].email===Action.payload)


      }
       default : return state;
    }
   
}



export default userReducer;

