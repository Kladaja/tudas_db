-- User alaptípus
CREATE OR REPLACE TYPE T_User AS OBJECT (
    userID NUMBER,
    name VARCHAR2(100),
    email VARCHAR2(100),
    password VARCHAR2(100),
    registration_date DATE,
    role VARCHAR2(50),
    confirmed NUMBER(1)
) NOT FINAL;
/

-- Lektor specializált típus (öröklődik UserType-ból)
CREATE OR REPLACE TYPE T_Lector UNDER T_User (
    field VARCHAR2(100),
    scientific_rank VARCHAR2(100)
);
/

-- Kulcsszó és kategória típus egyedi azonosítóval
CREATE OR REPLACE TYPE T_Keyword AS OBJECT (
    keywordID VARCHAR2(50)
);
/

CREATE OR REPLACE TYPE T_Category AS OBJECT (
    categoryID VARCHAR2(50)
);
/

-- Kulcsszavak és kategóriák listája
CREATE OR REPLACE TYPE KeywordList AS TABLE OF T_Keyword;
/
CREATE OR REPLACE TYPE CategoryList AS TABLE OF T_Category;
/

-- Cikk típusa beágyazott listákkal és felhasználóra hivatkozással
CREATE OR REPLACE TYPE T_Article AS OBJECT (
    articleID NUMBER,
    title VARCHAR2(255),
    curriculum CLOB,
    creation_date DATE,
    edit_date DATE,
    review_date DATE,
    keywords KeywordList,
    categories CategoryList,
    author REF T_User
);
/

-- Hibajelentés típus
CREATE OR REPLACE TYPE T_Bug AS OBJECT (
    bugID NUMBER,
    description CLOB,
    state VARCHAR2(50),
    article REF T_Article,
    reporter REF T_User
);
/

-- Táblák létrehozása

-- User tábla létrehozása objektum-alapúként (UserType)
CREATE TABLE Users OF T_User;

-- Lektorokat külön tároljuk, de öröklik a UserType adatait
CREATE TABLE Lectors OF T_Lector;

-- Egyedi kulcsszavak és kategóriák
CREATE TABLE Keywords OF T_Keyword;

CREATE TABLE Categories OF T_Category;

-- Cikkek beágyazott kulcsszó és kategória listával
CREATE TABLE Articles OF T_Article
    NESTED TABLE keywords STORE AS KeywordsTable,
    NESTED TABLE categories STORE AS CategoriesTable;

-- Hibák objektumtáblája
CREATE TABLE Bugs OF T_Bug;

-- Egyedi kulcsok hozzáadása
ALTER TABLE Users ADD CONSTRAINT users_pk PRIMARY KEY (userID);
ALTER TABLE Lectors ADD CONSTRAINT lectors_pk PRIMARY KEY (userID);
ALTER TABLE Keywords ADD CONSTRAINT keywords_pk PRIMARY KEY (keywordID);
ALTER TABLE Categories ADD CONSTRAINT categories_pk PRIMARY KEY (categoryID);
ALTER TABLE Articles ADD CONSTRAINT articles_pk PRIMARY KEY (articleID);
ALTER TABLE Bugs ADD CONSTRAINT bugs_pk PRIMARY KEY (bugID);

-- Szekvenciák létrehozása
CREATE SEQUENCE user_seq_custom START WITH 100 INCREMENT BY 1 NOCACHE NOCYCLE;
CREATE SEQUENCE article_seq_custom START WITH 1000 INCREMENT BY 1 NOCACHE NOCYCLE;
CREATE SEQUENCE bug_seq_custom START WITH 2000 INCREMENT BY 1 NOCACHE NOCYCLE;
