db.createUser({
    user: 'admin',
    pwd: 'password',
    roles: [
    {
        role: 'readWrite',
        db: 'dh2p_database',
    },
    ],
});
