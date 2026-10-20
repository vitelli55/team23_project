CREATE TABLE users (    
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,    
    #username VARCHAR(50) NOT NULL UNIQUE, leaving out username for now since we already have id
    email VARCHAR(255) NOT NULL UNIQUE,    
    password_hash TEXT NOT NULL,    
    first_name VARCHAR(50) NOT NULL,    
    last_name VARCHAR(50) NOT NULL,    
    role VARCHAR(20) NOT NULL DEFAULT 'student',    
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);