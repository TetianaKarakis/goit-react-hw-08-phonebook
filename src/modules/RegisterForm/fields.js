const fields = {
    name: {
        type: 'text',
        name: 'name',
        required: true,
        label: 'Name:',
        placeholder: 'User name',
        pattern: "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
    },
    email: {
        type: 'email',
        name: 'email',
        required: true,
        label: 'Email:',
        placeholder: 'User email',
    },
    password: {
        type: 'password',
        name: 'password',
        required: true,
        label: 'Password:',
        placeholder: 'User password',
    },
};

export default fields;