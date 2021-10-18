import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';

import slyles from './Page.module.css';

export default function ContactsPage() {
  return (
    <>
      <h1 className={slyles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={slyles.title}>Contacts</h2>
      <Filter />
      <ContactsList />
    </>
  );
}
