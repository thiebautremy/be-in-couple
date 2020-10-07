import { 
  CHANGE_VALUE, 
  CHANGE_DATE, 
  CHANGE_DAYS, 
  CHANGE_IS_VALIDATE, 
  GO_BACK 
} from '../actions/app';

export const initialState = {
  firstFirstName: '',
  secondFirstName: '',
  date: '',
  days: '',
  isValide: false,
}

const beInLove = (state = initialState, action= {}) => {
  switch(action.type) {
    case CHANGE_VALUE: {
      return {
        ...state,
        [action.name]: action.value,
      }
    }
    case CHANGE_DATE: {
      return {
        ...state,
        date: action.value,
      }
    }
    case CHANGE_DAYS: {
      return {
        ...state,
        days: action.value,
      }
    }
    case CHANGE_IS_VALIDATE: {
      return {
        ...state,
        isValide: true,
      }
    }
    case GO_BACK: {
      return {
        ...state,
        isValide: false,
      }
    }
    default:
      return state;
  }
}

export default beInLove;