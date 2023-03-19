import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from "../../modules/ContactForm/ContactForm";
import ContactList from "../../modules/ContactList/ContactList";
import ContactFilter from "../../modules/ContactFilter/ContactFilter";

import { setFilter } from '../../redux/filter/filter-slice';

import { getFilter } from '../../redux/filter/filter-selectors';
import { getFilteredContacts } from "../../redux/contacts/contacts-selectors";

import { fetchAllContacts, fetchDeleteContact } from '../../redux/contacts/contacts-operations';

import css from "./Phonebook.module.css";

const PhonebookPage = () => {
    const dispatch = useDispatch();

    const filter = useSelector(getFilter);
    const filteredContacts = useSelector(getFilteredContacts);

    useEffect(() => {
        dispatch(fetchAllContacts());
    }, [dispatch]);


    const handleDeleteContact = (id) => {
        dispatch(fetchDeleteContact(id));
    };

    const handleFilter = ({ target }) => dispatch(setFilter(target.value));

    return (
        <div className={css.conteiner}>
            <ContactForm />
            <div className={css.wrapper_contact_form}>
                <ContactFilter value={filter} handleChange={handleFilter} />
                <ContactList removeContact={handleDeleteContact} filteredContacts={filteredContacts} />
            </div>

        </div>
    );
};

export default PhonebookPage;