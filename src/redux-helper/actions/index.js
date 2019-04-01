import { CHANGE_LANGUAGE, CHANGE_INSTUTION } from "../constants/action-types";
export function changeLanguage(payload) {
  return { type: CHANGE_LANGUAGE, payload };
}
export function changeInstitution(payload) {
  return { type: CHANGE_INSTUTION, payload };
}
