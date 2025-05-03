-- USER adatok beszúrása
INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'John Doe', 'john.doe@example.com', 'hashedpassword123', SYSDATE, 'student')
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Jane Smith', 'jane.smith@example.com', 'securehash456', SYSDATE, 'student')
);

-- LECTOR adatok beszúrása
INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Emily Watson', 'emily.watson@example.com', 'profhash789', SYSDATE, 'lector', 'Artificial Intelligence', 'Associate Professor')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Alan Turing', 'alan.turing@example.com', 'legendaryhash001', SYSDATE, 'lector', 'Theoretical Computer Science', 'Professor')
);

-- KEYWORDS beszúrása
INSERT INTO Keywords VALUES (T_Keyword('Artificial Intelligence'));
INSERT INTO Keywords VALUES (T_Keyword('Neural Networks'));
INSERT INTO Keywords VALUES (T_Keyword('Deep Learning'));
INSERT INTO Keywords VALUES (T_Keyword('Big Data'));
INSERT INTO Keywords VALUES (T_Keyword('Computer Vision'));

-- CATEGORIES beszúrása
INSERT INTO Categories VALUES (T_Category('Technology'));
INSERT INTO Categories VALUES (T_Category('Computer Science'));
INSERT INTO Categories VALUES (T_Category('Education'));
INSERT INTO Categories VALUES (T_Category('Research'));

-- CIKK beszúrása (beágyazott kulcsszó- és kategória-listával)
INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Foundations of Deep Learning',
        'Deep learning has revolutionized the field of artificial intelligence by enabling machines to learn from vast amounts of data with minimal human intervention. At its core, deep learning utilizes artificial neural networks with multiple hidden layers to extract increasingly abstract representations from input data. This article begins by discussing the fundamental building blocks of deep learning, including perceptrons, activation functions such as ReLU and sigmoid, and the mathematical foundations of gradient descent.
        The next section delves into the backpropagation algorithm, highlighting its role in updating network weights through error minimization. We explore techniques for addressing vanishing and exploding gradients, such as batch normalization and residual connections. Furthermore, the paper examines popular network architectures, including convolutional neural networks (CNNs) for image recognition and recurrent neural networks (RNNs) for sequential data like language and time series.
        Real-world applications are surveyed, spanning from autonomous vehicles and medical diagnostics to natural language processing and recommendation systems. We address challenges such as overfitting, interpretability, and the need for large labeled datasets. To mitigate these, techniques like dropout, transfer learning, and unsupervised pretraining are analyzed in depth.
        Finally, we reflect on the societal and ethical implications of deep learning deployment, including bias in training data, adversarial attacks, and AI governance. As deep learning models become more complex and integrated into critical systems, ensuring fairness, transparency, and accountability becomes a paramount concern for researchers and practitioners alike.',
        SYSDATE,
        SYSDATE,
        NULL,
        KeywordList(T_Keyword('Deep Learning'), T_Keyword('Artificial Intelligence')),
        CategoryList(T_Category('Technology'), T_Category('Computer Science')),
        (SELECT REF(u) FROM Users u WHERE u.userID = 1)
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Big Data Analytics in Education',
        'Big data analytics is transforming education by enabling institutions to make informed decisions based on vast amounts of digital data. This article begins by defining big data in the educational context: high-volume, high-velocity, and high-variety data generated from learning management systems, student assessments, social interactions, and sensor technologies.
        We explore how predictive analytics can identify at-risk students by analyzing patterns in attendance, participation, and performance. Case studies demonstrate how machine learning models have been used to forecast dropout probabilities, recommend tailored learning resources, and support adaptive testing environments.
        The integration of data-driven feedback loops has enhanced personalized learning experiences. For instance, intelligent tutoring systems can adapt content delivery based on real-time engagement and comprehension metrics. We also examine the role of learning analytics dashboards in providing actionable insights to educators and administrators.
        Ethical concerns are also addressed, including data privacy, consent, algorithmic bias, and surveillance. A comparative analysis of global policies (such as GDPR and FERPA) is presented, along with guidelines for responsible data stewardship in academic institutions
        The article concludes with a roadmap for implementing big data strategies in schools and universities, emphasizing the importance of interdisciplinary collaboration, faculty training, and continuous evaluation of analytics effectiveness in improving learning outcomes.',
        SYSDATE,
        SYSDATE,
        NULL,
        KeywordList(T_Keyword('Big Data'), T_Keyword('Education')),
        CategoryList(T_Category('Education'), T_Category('Research')),
        (SELECT REF(u) FROM Users u WHERE u.userID = 2)
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'The Legacy of Alan Turing',
        'Alan Turing was a visionary whose work laid the groundwork for modern computing, artificial intelligence, and theoretical computer science. Born in 1912, Turing developed the concept of a universal machine—a theoretical construct now known as the Turing machine—which formalized the notion of algorithmic computation.
        During World War II, Turing played a pivotal role at Bletchley Park in decrypting the German Enigma code, significantly shortening the war and saving countless lives. His engineering of the electromechanical "Bombe" device demonstrated an early application of automated problem-solving and logic.
        This article explores Turing’s major contributions, beginning with his 1936 paper "On Computable Numbers," which introduced the idea of computability and laid the foundation for complexity theory. We then explore the Turing Test, proposed in 1950 as a criterion for machine intelligence, and examine how modern AI research continues to grapple with its philosophical and practical implications.
        Turing’s life was tragically cut short due to persecution for his homosexuality, reflecting the societal biases of the time. Posthumous recognition—including a royal pardon and his appearance on the UK £50 note—has helped restore his legacy.
        The article concludes by highlighting contemporary efforts inspired by Turing’s work, from quantum computing to AI ethics. His legacy endures not only in the machines we build but in the philosophical inquiries we continue to pursue about intelligence, consciousness, and what it means to compute.',
        SYSDATE,
        SYSDATE,
        NULL,
        KeywordList(T_Keyword('Artificial Intelligence'), T_Keyword('Theoretical Computer Science')),
        CategoryList(T_Category('Computer Science'), T_Category('Research')),
        (SELECT REF(l) FROM Lectors l WHERE l.userID = 4)
    )
);

-- HIBA jelentés beszúrása
INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Some references in the article are outdated and need revision.',
        'Open',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 101),
        (SELECT REF(u) FROM Users u WHERE u.userID = 2)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Images are not loading correctly in the PDF version of the article.',
        'Pending',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 102),
        (SELECT REF(u) FROM Users u WHERE u.userID = 1)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Grammar issues in the introductory section.',
        'Resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 103),
        (SELECT REF(u) FROM Users u WHERE u.userID = 2)
    )
);

COMMIT;
