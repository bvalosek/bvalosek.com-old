CREATE TABLE quotes (

    id SERIAL PRIMARY KEY,
    text TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT now()

);
