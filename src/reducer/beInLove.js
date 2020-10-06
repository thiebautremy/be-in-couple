import { CHANGE_VALUE, CHANGE_DATE, CHANGE_DAYS } from '../actions/app';

export const initialState = {
  firstFirstName: '',
  secondFirstName: '',
  date: '',
  days: '',
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
    default:
      return state;
  }
}

export default beInLove;