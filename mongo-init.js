db.createUser(
    {
        user: "geos",
        pwd: "<password-default>",
        roles: [
            {
                role: "readWrite",
                db: "guia_edutec"
            }
        ]
    }
);