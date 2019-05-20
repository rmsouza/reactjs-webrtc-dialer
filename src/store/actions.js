// Action Types
export const ADD_USER = 'ADD_USER';
export const LOAD_CONTACTS = 'LOAD_CONTACTS';
export const LOAD_RECENTS = 'LOAD_RECENTS';
export const START_CALL = 'START_CALL';
export const STOP_CALL = 'STOP_CALL';

// Action Creators
export function addUser (user) {
  return { type: ADD_USER, user };
}

export function loadContacts () {
  return { type: LOAD_CONTACTS };
}

export function loadRecents (user_id) {
  return { type: LOAD_RECENTS, user_id };
}

export function startCall (call) {
  return { type: START_CALL, call};
}

export function stopCall (call_id) {
  return { type: START_CALL, call_id};
}