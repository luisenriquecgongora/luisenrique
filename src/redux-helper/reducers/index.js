import { CHANGE_LANGUAGE, CHANGE_INSTUTION } from "../constants/action-types";

let defaultLanguage = 'en';
let defaultInstitution = 'empathy'
let language = localStorage["lang"];
if(!language){
  language =  defaultLanguage
}

const initialState = {
  language: language,
  institution: defaultInstitution
};

function rootReducer(state = initialState, action) {
  if (action.type === CHANGE_LANGUAGE) {
    localStorage.setItem("lang", action.payload);
    return Object.assign({}, state, {
      language: action.payload
    });
  }
  else if (action.type === CHANGE_INSTUTION) {
    return Object.assign({}, state, {
      institution: action.payload
    });
  }
  return state;
}
export default rootReducer;
