-- User alaptípus
CREATE OR REPLACE TYPE T_User AS OBJECT (
    userID NUMBER,
    name VARCHAR2(100),
    email VARCHAR2(100),
    password VARCHAR2(100),
    registration_date DATE,
    role VARCHAR2(50)
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

-- USER adatok beszúrása
INSERT INTO Users VALUES (
    T_User(1, 'Teszt Elek', 'teszt.elek@example.com', 'hashedpassword', SYSDATE)
);
INSERT INTO Users VALUES (
    T_User(2, 'Minta Márton', 'minta.marton@example.com', 'hashedpassword', SYSDATE)
);

-- LECTOR adatok beszúrása
INSERT INTO Lectors VALUES (
    T_Lector(3, 'Dr. Nagy Béla', 'nagy.bela@example.com', 'hashedpassword', SYSDATE, 'Mesterséges intelligencia', 'Docens')
);

-- KEYWORDS beszúrása
INSERT INTO Keywords VALUES (T_Keyword('AI'));
INSERT INTO Keywords VALUES (T_Keyword('Machine Learning'));
INSERT INTO Keywords VALUES (T_Keyword('Deep Learning'));

-- CATEGORIES beszúrása
INSERT INTO Categories VALUES (T_Category('Informatika'));
INSERT INTO Categories VALUES (T_Category('Tudomány'));
INSERT INTO Categories VALUES (T_Category('Oktatás'));

-- CIKK beszúrása (beágyazott kulcsszó- és kategória-listával)
INSERT INTO Articles VALUES (
    T_Article(
        101, 
        'A mélytanulás alapjai', 
        'Ez a cikk bemutatja a mélytanulás alapfogalmait és alkalmazásait.', 
        SYSDATE, 
        SYSDATE, 
        NULL, 
        KeywordList(T_Keyword('AI'), T_Keyword('Deep Learning')), 
        CategoryList(T_Category('Informatika'), T_Category('Tudomány')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 1)
    )
);

-- MÁSODIK CIKK
INSERT INTO Articles VALUES (
    T_Article(
        102, 
        'Gépi tanulás és neurális hálók', 
        'Ebben a cikkben a gépi tanulásról és a neurális hálókról lesz szó.', 
        SYSDATE, 
        SYSDATE, 
        NULL, 
        KeywordList(T_Keyword('Machine Learning'), T_Keyword('AI')), 
        CategoryList(T_Category('Tudomány'), T_Category('Oktatás')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 2)
    )
);

-- HIBA jelentés beszúrása
INSERT INTO Bugs VALUES (
    T_Bug(
        201, 
        'Az ábrák nem jelennek meg megfelelően.', 
        'Open', 
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 101), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 2)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        202, 
        'Elavult információk szerepelnek a tananyagban.', 
        'Pending', 
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 102), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 1)
    )
);

COMMIT;