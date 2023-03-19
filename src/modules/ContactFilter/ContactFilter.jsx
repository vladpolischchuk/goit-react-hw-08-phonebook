import PropTypes from 'prop-types';

import css from './ContactFilter.module.css'

const ContactFilter = ({ handleChange, value }) => {
    return (
        <>
            <h1 className={css.title}>Contacts</h1>
            <label className={css.label}>
                Find contact by name
                <input
                    placeholder='Search'
                    value={value}
                    name="filter"
                    onChange={handleChange}
                    className={css.label__input}
                />
            </label>
        </>

    );
};

export default ContactFilter;

ContactFilter.propTypes = {
    handleChange: PropTypes.func.isRequired,
}