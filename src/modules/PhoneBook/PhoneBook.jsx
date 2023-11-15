import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'shared/components/Loader/Loader';
import ContactForm from 'modules/PhoneBook/ContactForm/ContactForm';
import ContactsList from 'modules/PhoneBook/ContactsList/ContactsList';
import Filter from 'modules/PhoneBook/Filter/Filter';

import { getFilteredContacts } from 'redux/contacts/contacts-selectors';

import css from './PhoneBook.module.css';

export const PhoneBook = () => {
    const isContacts = Boolean(useSelector(getFilteredContacts).length);
    const isLoading = useSelector(state => state.contacts.isLoading);

    return (
        <>
        <h2>Phonebook</h2>
        <ContactForm />

        <h2 className={css.title}>Contacts</h2>
        <Filter />
        {isLoading && <Loader />}

        {isContacts && <ContactsList />}

        {!isContacts && !isLoading && (
            <p className={css.text}>No contacts in list</p>
        )}
        <ToastContainer autoClose={1500} position="top-center" />
        </>
    );
};