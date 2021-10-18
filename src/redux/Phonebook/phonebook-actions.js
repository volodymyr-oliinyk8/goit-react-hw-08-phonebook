import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest',
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess',
);
export const fetchContactsError = createAction('contacts/fetchContactsError');

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction(
  'contacts/deleteContactRequest',
);
export const deleteContactSuccess = createAction(
  'contacts/deleteContactSuccess',
);
export const deleteContactError = createAction('contacts/deleteContactError');

// const deleteContact = createAction('contact/Delete');
const changeFilter = createAction('contact/ChangeFilter');

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
};

// варіант без toolkit
// const addContact = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: v4(),
//     name,
//     number,
//   },
// });
// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

//v2
// const addContact = createAction('contact/Add', ({ name, number }) => {
//   return {
//     payload: {
//       id: v4(),
//       name,
//       number,
//     },
//   };
// });
