-- USER adatok beszúrása ( 30 )
INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Admin', 'admin@example.com', 'admin', SYSDATE, 'admin', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'John Doe', 'john.doe@example.com', 'hashedpassword123', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Jane Smith', 'jane.smith@example.com', 'securehash456', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Alice Johnson', 'alice.johnson@example.com', 'hash123alice', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Bob Williams', 'bob.williams@example.com', 'hash456bob', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Charlie Brown', 'charlie.brown@example.com', 'hash789charlie', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Diana Evans', 'diana.evans@example.com', 'hash101diana', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Ethan Miller', 'ethan.miller@example.com', 'hash202ethan', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Fiona Garcia', 'fiona.garcia@example.com', 'hash303fiona', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'George Taylor', 'george.taylor@example.com', 'hash404george', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Alice Johnson', 'alice.johnson@example.com', 'alicej', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Brian Smith', 'brian.smith@example.com', 'brians', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Catherine Lee', 'catherine.lee@example.com', 'cathlee', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Daniel Brown', 'daniel.brown@example.com', 'danbrown', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Elena Garcia', 'elena.garcia@example.com', 'elenag', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Frank Wilson', 'frank.wilson@example.com', 'frankw', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Grace Miller', 'grace.miller@example.com', 'gracem', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Henry Moore', 'henry.moore@example.com', 'henrym', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Isla Scott', 'isla.scott@example.com', 'islas', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Jack Taylor', 'jack.taylor@example.com', 'jackt', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Karen Anderson', 'karen.anderson@example.com', 'karenA', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Liam Thomas', 'liam.thomas@example.com', 'liamt', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Mia Harris', 'mia.harris@example.com', 'miah', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Nathan Clark', 'nathan.clark@example.com', 'nclark', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Olivia Lewis', 'olivia.lewis@example.com', 'olivial', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Patrick Walker', 'patrick.walker@example.com', 'pwalker', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Quinn Young', 'quinn.young@example.com', 'quinny', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Rachel King', 'rachel.king@example.com', 'rking', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Samuel Wright', 'samuel.wright@example.com', 'samw', SYSDATE, 'user', 0)
);

INSERT INTO Users VALUES (
    T_User(user_seq_custom.NEXTVAL, 'Tina Baker', 'tina.baker@example.com', 'tinab', SYSDATE, 'user', 0)
);


-- LECTOR adatok beszúrása ( 20 )
INSERT INTO Lectors VALUES ( 
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Emily Watson', 'emily.watson@example.com', 'profhash789', SYSDATE, 'lector', 0, 'Artificial Intelligence', 'Associate Professor')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Alan Turing', 'alan.turing@example.com', 'legendaryhash001', SYSDATE, 'lector', 1, 'Theoretical Computer Science', 'Professor')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Laura Bennett', 'laura.bennett@example.com', 'hashlaura001', SYSDATE, 'lector', 0, 'Machine Learning', 'Senior Lecturer')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Marcus Chen', 'marcus.chen@example.com', 'hashmarcus002', SYSDATE, 'lector', 1, 'Data Science', 'Assistant Professor')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Sofia Ramirez', 'sofia.ramirez@example.com', 'hashsofia003', SYSDATE, 'lector', 0, 'Robotics and Automation', 'Research Fellow')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Ethan Brooks', 'ethan.brooks@example.com', 'hashethan004', SYSDATE, 'lector', 1, 'Cybersecurity', 'Associate Professor')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Mia Zhang', 'mia.zhang@example.com', 'hashmia005', SYSDATE, 'lector', 0, 'Human-Computer Interaction', 'Senior Lecturer')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Noah Patel', 'noah.patel@example.com', 'hashnoah006', SYSDATE, 'lector', 1, 'Big Data Analytics', 'Lecturer')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Ava Müller', 'ava.mueller@example.com', 'hashava007', SYSDATE, 'lector', 0, 'Quantum Computing', 'Research Fellow')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Lucas Rivera', 'lucas.rivera@example.com', 'hashlucas008', SYSDATE, 'lector', 1, 'Computer Vision', 'Assistant Professor')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Zoe Kim', 'zoe.kim@example.com', 'hashzoe009', SYSDATE, 'lector', 0, 'Cloud Computing', 'Senior Lecturer')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Isaac Novak', 'isaac.novak@example.com', 'hashisaac010', SYSDATE, 'lector', 1, 'Edge Computing', 'Professor')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Lily Thompson', 'lily.thompson@example.com', 'hashlily011', SYSDATE, 'lector', 0, 'Software Engineering', 'Assistant Professor')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Oliver Dubois', 'oliver.dubois@example.com', 'hasholiver012', SYSDATE, 'lector', 1, 'Blockchain Technology', 'Associate Professor')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Emma Rossi', 'emma.rossi@example.com', 'hashemma013', SYSDATE, 'lector', 0, 'Natural Language Processing', 'Lecturer')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. William Tanaka', 'william.tanaka@example.com', 'hashwill014', SYSDATE, 'lector', 1, 'Neural Networks', 'Research Fellow')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Chloe Ahmed', 'chloe.ahmed@example.com', 'hashchloe015', SYSDATE, 'lector', 0, 'Embedded Systems', 'Senior Lecturer')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Benjamin Silva', 'benjamin.silva@example.com', 'hashben016', SYSDATE, 'lector', 1, 'Information Retrieval', 'Professor')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. Sophia Ivanova', 'sophia.ivanova@example.com', 'hashsophia017', SYSDATE, 'lector', 0, 'Digital Signal Processing', 'Associate Professor')
);

INSERT INTO Lectors VALUES (
    T_Lector(user_seq_custom.NEXTVAL, 'Dr. David Kowalski', 'david.kowalski@example.com', 'hashdavid018', SYSDATE, 'lector', 1, 'Computer Graphics', 'Assistant Professor')
);

-- KEYWORDS beszúrása ( 10 )
INSERT INTO Keywords VALUES (T_Keyword('Artificial Intelligence'));
INSERT INTO Keywords VALUES (T_Keyword('Neural Networks'));
INSERT INTO Keywords VALUES (T_Keyword('Deep Learning'));
INSERT INTO Keywords VALUES (T_Keyword('Big Data'));
INSERT INTO Keywords VALUES (T_Keyword('Computer Vision'));
INSERT INTO Keywords VALUES (T_Keyword('Natural Language Processing'));
INSERT INTO Keywords VALUES (T_Keyword('Reinforcement Learning'));
INSERT INTO Keywords VALUES (T_Keyword('Autonomous Systems'));
INSERT INTO Keywords VALUES (T_Keyword('Data Mining'));
INSERT INTO Keywords VALUES (T_Keyword('Edge Computing'));

-- CATEGORIES beszúrása ( 10 )
INSERT INTO Categories VALUES (T_Category('Technology'));
INSERT INTO Categories VALUES (T_Category('Computer Science'));
INSERT INTO Categories VALUES (T_Category('Education'));
INSERT INTO Categories VALUES (T_Category('Research'));
INSERT INTO Categories VALUES (T_Category('Artificial Intelligence'));
INSERT INTO Categories VALUES (T_Category('Data Science'));
INSERT INTO Categories VALUES (T_Category('Machine Learning'));
INSERT INTO Categories VALUES (T_Category('Engineering'));
INSERT INTO Categories VALUES (T_Category('Ethics'));
INSERT INTO Categories VALUES (T_Category('Innovation'));

-- ARTICLES beszúrása ( 25 )
INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Foundations of Deep Learning',
        'Deep learning has revolutionized the field of artificial intelligence by enabling machines to learn from vast amounts of data with minimal human intervention. At its core, deep learning utilizes artificial neural networks with multiple hidden layers to extract increasingly abstract representations from input data. This article begins by discussing the fundamental building blocks of deep learning, including perceptrons, activation functions such as ReLU and sigmoid, and the mathematical foundations of gradient descent.
        The next section delves into the backpropagation algorithm, highlighting its role in updating network weights through error minimization. We explore techniques for addressing vanishing and exploding gradients, such as batch normalization and residual connections. Furthermore, the paper examines popular network architectures, including convolutional neural networks (CNNs) for image recognition and recurrent neural networks (RNNs) for sequential data like language and time series.
        Real-world applications are surveyed, spanning from autonomous vehicles and medical diagnostics to natural language processing and recommendation systems. We address challenges such as overfitting, interpretability, and the need for large labeled datasets. To mitigate these, techniques like dropout, transfer learning, and unsupervised pretraining are analyzed in depth.
        Finally, we reflect on the societal and ethical implications of deep learning deployment, including bias in training data, adversarial attacks, and AI governance. As deep learning models become more complex and integrated into critical systems, ensuring fairness, transparency, and accountability becomes a paramount concern for researchers and practitioners alike.',
        SYSDATE,
        NULL,
        NULL,
        KeywordList(T_Keyword('Deep Learning'), T_Keyword('Artificial Intelligence')),
        CategoryList(T_Category('Technology'), T_Category('Computer Science')),
        (SELECT REF(u) FROM Users u WHERE u.userID = 100)
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
        (SELECT REF(u) FROM Users u WHERE u.userID = 101)
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'The Legacy of Alan Turing',
        'Alan Turing was a visionary whose work laid the groundwork for modern computing, artificial intelligence, and theoretical computer science. Born in 1912, Turing developed the concept of a universal machine - a theoretical construct now known as the Turing machine - which formalized the notion of algorithmic computation.
        During World War II, Turing played a pivotal role at Bletchley Park in decrypting the German Enigma code, significantly shortening the war and saving countless lives. His engineering of the electromechanical "Bombe" device demonstrated an early application of automated problem-solving and logic.
        This article explores Turing’s major contributions, beginning with his 1936 paper "On Computable Numbers," which introduced the idea of computability and laid the foundation for complexity theory. We then explore the Turing Test, proposed in 1950 as a criterion for machine intelligence, and examine how modern AI research continues to grapple with its philosophical and practical implications.
        Turing’s life was tragically cut short due to persecution for his homosexuality, reflecting the societal biases of the time. Posthumous recognition—including a royal pardon and his appearance on the UK £50 note—has helped restore his legacy.
        The article concludes by highlighting contemporary efforts inspired by Turing’s work, from quantum computing to AI ethics. His legacy endures not only in the machines we build but in the philosophical inquiries we continue to pursue about intelligence, consciousness, and what it means to compute.',
        SYSDATE,
        SYSDATE,
        SYSDATE,
        KeywordList(T_Keyword('Artificial Intelligence'), T_Keyword('Theoretical Computer Science')),
        CategoryList(T_Category('Computer Science'), T_Category('Research')),
        (SELECT REF(l) FROM Lectors l WHERE l.userID = 103)
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Advancements in Reinforcement Learning for Robotics',
        'Reinforcement learning (RL) has emerged as a powerful approach for training autonomous robotic agents by enabling them to learn optimal actions through trial and error. This article explores recent advancements in RL techniques specifically applied to robotics.
        Beginning with the foundations of RL, including concepts like Markov Decision Processes (MDPs), policy optimization, and Q-learning, the article elaborates on their adaptation to real-world robotic environments. Techniques such as deep Q-networks (DQNs), proximal policy optimization (PPO), and soft actor-critic (SAC) are analyzed in terms of their efficiency, stability, and scalability. The discussion extends to the sim-to-real gap — the challenge of transferring policies trained in simulation to physical robots — and examines domain randomization and meta-learning as solutions. We also investigate model-based RL approaches, which incorporate learned world models to reduce the sample inefficiency of traditional methods. Case studies include applications in robotic arm manipulation, mobile navigation, and humanoid motion. The article concludes by reflecting on the ethical and safety challenges in RL-driven robotics, such as unexpected behaviors, energy efficiency, and ensuring that robots operate within human-defined safety constraints. 
        As RL continues to evolve, its integration with computer vision and natural language understanding is poised to enhance the autonomy and adaptability of next-generation robots.',
        SYSDATE,
        SYSDATE,
        SYSDATE,
        KeywordList(T_Keyword('Big Data'), T_Keyword('Deep Learning')), 
        CategoryList(T_Category('Computer Science'), T_Category('Engineering')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 103) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'The Impact of Generative Models on Creative AI',
        'Generative models, particularly Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs), have significantly advanced the field of Creative AI. This article discusses how these models are being used to generate images, music, text, and even video, blurring the lines between human and machine creativity.
        The foundation of generative modeling is first explored, detailing the probabilistic principles and training objectives that drive models to synthesize new data. GANs, known for their adversarial training process between generator and discriminator networks, are dissected for their capabilities and challenges, such as mode collapse and training instability. VAEs are compared for their ability to produce smooth latent spaces and facilitate interpolation. The application section highlights tools like DALL·E, MusicLM, and ChatGPT, examining their roles in art, design, and storytelling. A discussion on ethical implications follows, particularly focusing on deepfakes, copyright concerns, and the authenticity of machine-generated content.
        Finally, the article considers the future of generative AI in collaborative human-machine workflows, where machines assist rather than replace human artists, and the potential for AI to create original works that reflect or challenge human culture.',
        SYSDATE,
        NULL,
        SYSDATE,
        KeywordList(T_Keyword('Edge Computing'), T_Keyword('Big Data')), 
        CategoryList(T_Category('Innovation'), T_Category('Education')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 109) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Edge Computing and its Role in Autonomous Vehicles',
        'Edge computing has become a cornerstone of next-generation intelligent systems, particularly autonomous vehicles (AVs). This article delves into how edge computing frameworks support AVs by enabling low-latency data processing, improved privacy, and reduced reliance on cloud infrastructure. The introduction contrasts centralized cloud computing with edge models, where computation is performed near or at the data source — for instance, within the vehicle itself.
        Key architectural components are explored, including onboard processors, vehicle-to-everything (V2X) communication protocols, and distributed learning frameworks. The technical discussion includes how AVs process high-volume sensor data from LiDAR, radar, and cameras in real-time to make split-second decisions. Edge AI models trained for object detection, path planning, and traffic prediction are examined for their role in ensuring safety and efficiency. The article also discusses energy efficiency, fault tolerance, and over-the-air updates as critical challenges for edge-based AV systems. Security considerations, including protection against adversarial attacks and securing local inference pipelines, are analyzed in depth. By decentralizing computation, edge computing enables AVs to become more autonomous, resilient, and scalable, paving the way for widespread deployment in complex urban environments.',
        SYSDATE,
        NULL,
        NULL,
        KeywordList(T_Keyword('Autonomous Systems'), T_Keyword('Reinforcement Learning')), 
        CategoryList(T_Category('Engineering'), T_Category('Ethics')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 104) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Ethical Challenges in Artificial Intelligence Systems',
        'As artificial intelligence (AI) systems become increasingly integrated into critical infrastructure, decision-making, and consumer technologies, ethical concerns surrounding their development and deployment grow in importance. This article offers a comprehensive overview of the key ethical challenges in AI. It begins by discussing the lack of transparency in many AI models, particularly deep learning architectures often referred to as "black boxes."
        The importance of explainability in AI is highlighted, especially in high-stakes fields like healthcare and criminal justice. Bias in training data and algorithmic discrimination are also examined, with examples showing how unbalanced datasets can lead to unfair outcomes. The article reviews fairness metrics and mitigation techniques, including reweighting, adversarial debiasing, and synthetic data augmentation. Privacy concerns are another focus, including how AI can infer sensitive information and the ethical boundaries of surveillance applications. The role of AI governance frameworks, such as the EU AI Act and corporate AI ethics boards, is discussed as part of broader accountability mechanisms. The article concludes by emphasizing the importance of interdisciplinary collaboration, public engagement, and ethical foresight in AI research, proposing a human-centered approach to future AI development.',
        SYSDATE,
        SYSDATE,
        SYSDATE,
        KeywordList(T_Keyword('Neural Networks'), T_Keyword('Edge Computing')), 
        CategoryList(T_Category('Machine Learning'), T_Category('Data Science')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 108) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Natural Language Processing in Healthcare Applications',
        'Natural Language Processing (NLP) has become an indispensable tool in modern healthcare, enabling the transformation of unstructured clinical text into actionable insights. This article explores the various applications, challenges, and future directions of NLP in healthcare. Starting with an overview of the types of clinical data — including electronic health records (EHRs), physician notes, and radiology reports — the article examines how NLP techniques extract relevant information such as patient symptoms, medical history, and treatment outcomes.
        Techniques such as named entity recognition (NER), relationship extraction, and document classification are explored, alongside transformer-based models like BERT and BioBERT tailored for biomedical language. A major section is dedicated to clinical decision support, where NLP-powered tools assist physicians by flagging potential diagnoses, adverse drug interactions, and procedural recommendations. Privacy and data protection concerns, including de-identification and HIPAA compliance, are discussed in detail. Furthermore, the article reviews the challenges of domain adaptation, ambiguity in medical terminology, and the scarcity of labeled data. By improving information retrieval and clinical workflow efficiency, NLP holds promise for enhancing patient care, reducing administrative burden, and contributing to precision medicine initiatives.',
        SYSDATE,
        SYSDATE,
        SYSDATE,
        KeywordList(T_Keyword('Edge Computing'), T_Keyword('Data Mining')), 
        CategoryList(T_Category('Data Science'), T_Category('Innovation')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 107) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'The Role of Generative Models in Creative Problem Solving',
        'Generative models have emerged as powerful tools not only in data generation but also in facilitating creative problem-solving processes. These models, particularly those based on deep learning architectures like GANs or diffusion models, are capable of producing diverse and often novel outputs across a wide range of domains.
        In the realm of design and innovation, generative models can simulate numerous variations of a product concept, optimize layout and structure, and even generate unique artistic styles that spark human creativity. In fields like architecture, fashion, or industrial design, these models act as co-creators, suggesting ideas that human designers may not have considered.
        What makes them especially useful in problem-solving is their ability to explore a vast solution space. By training on large datasets, generative models can identify latent patterns and generate new instances that fulfill specific constraints. This leads to better ideation processes and reduces trial-and-error cycles.
        However, the integration of these models also poses challenges, such as interpretability, control over outputs, and ethical concerns about originality and authorship. A hybrid model — where human intuition guides AI generation — is often the most effective strategy.
        Ultimately, generative models are reshaping the way we approach problems: not by replacing human creativity, but by augmenting it with machine-powered exploration and variation.',
        SYSDATE,
        SYSDATE,
        NULL,
        KeywordList(T_Keyword('Generative Models'), T_Keyword('Artificial Intelligence')), 
        CategoryList(T_Category('Creative AI'), T_Category('Technology')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 106) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Natural Language Processing for Educational Accessibility',
        'Natural Language Processing (NLP) is revolutionizing education by making learning materials more accessible to diverse populations. Through automatic summarization, translation, speech-to-text, and question-answering systems, NLP allows students with different learning needs and language backgrounds to access content more effectively.
        For students with disabilities, NLP tools can convert text into audio, simplify complex terminology, or even provide real-time captions during lectures. Multilingual students benefit from automatic translations and contextual language assistance, which reduce barriers and enhance understanding in non-native environments.
        One of the most powerful applications lies in intelligent tutoring systems, which use NLP to evaluate student inputs, provide instant feedback, and adjust lesson plans dynamically. Additionally, tools like AI-driven writing assistants help students improve grammar, clarity, and coherence in real-time, making academic writing more inclusive and personalized.
        Challenges still remain — especially in accurately understanding nuanced language, detecting sarcasm or idiomatic expressions, and ensuring data privacy in student interactions. Nonetheless, continued advancements in NLP promise to close educational gaps and create learning environments that are truly inclusive.',
        SYSDATE,
        NULL,
        NULL,
        KeywordList(T_Keyword('Natural Language Processing'), T_Keyword('Ethics in AI')), 
        CategoryList(T_Category('Education'), T_Category('Research')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 110) 
    )
);

--  10
INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Visual AI in Smart Healthcare Systems',
        'Computer Vision is playing a transformative role in modern healthcare systems, enabling faster, more accurate diagnoses and streamlining administrative workflows. From analyzing radiological images to tracking patient movements in recovery rooms, visual AI offers tools that reduce human error and optimize care delivery.
        For example, deep learning models trained on thousands of medical scans can detect anomalies such as tumors, fractures, or inflammation with precision comparable to expert clinicians. In emergency rooms, real-time video analysis can detect if a patient has fallen or needs assistance, triggering immediate alerts for staff.
        Beyond diagnosis, visual AI is being used to assess surgical performance, monitor hygiene compliance, and track inventory of medical supplies through object recognition. These applications improve efficiency and help hospitals meet safety regulations.
        However, the integration of visual AI also raises questions about patient privacy, especially when constant surveillance is involved. Ensuring data anonymization and implementing robust consent protocols are critical to maintaining trust.
        As technology matures, the synergy between computer vision and healthcare will lead to proactive, preventative care models where AI not only supports doctors but helps keep patients safe and engaged throughout their treatment.',
        SYSDATE,
        SYSDATE,
        SYSDATE,
        KeywordList(T_Keyword('Computer Vision'), T_Keyword('Deep Learning')), 
        CategoryList(T_Category('Healthcare'), T_Category('Technology')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 107) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'The Impact of Big Data on Scientific Innovation',
        'Big Data is not merely a buzzword in science — it is the engine driving many of today’s most significant discoveries. Whether its genomics, astronomy, or environmental studies, researchers are dealing with datasets of unprecedented scale and complexity.
        By leveraging big data analytics, scientists can uncover hidden correlations, predict trends, and validate hypotheses faster than ever. In climate research, satellite data combined with historical records enables the modeling of future environmental changes with remarkable accuracy. In genomics, big data allows researchers to map human DNA sequences and find links between genes and diseases.
        However, the volume of data brings with it major challenges in storage, computation, and interpretation. Cloud infrastructure, distributed computing frameworks like Hadoop and Spark, and specialized hardware like GPUs are essential for handling such data loads. But perhaps even more crucial is the development of intelligent algorithms that can process and summarize findings in a meaningful way.
        Moreover, ethical concerns around data collection, usage rights, and transparency in scientific conclusions must be addressed. Ensuring reproducibility and avoiding algorithmic bias are as important as the discoveries themselves.',
        SYSDATE,
        NULL,
        SYSDATE,
        KeywordList(T_Keyword('Big Data'), T_Keyword('Research')), 
        CategoryList(T_Category('Science'), T_Category('Technology')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 107) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Deep Learning Models for Language Generation',
        'The rise of deep learning has catalyzed significant progress in language generation systems. Tools like GPT, BERT, and T5 have demonstrated the ability to generate fluent, contextually relevant, and even creative pieces of text — from simple summaries to entire articles or dialogues.
        These models work by learning statistical patterns in massive language datasets, enabling them to predict the next word in a sentence with remarkable accuracy. Applications range from chatbots, code generation tools, and story writing assistants to automated report drafting in fields like law and finance.
        One of the core strengths of these systems lies in transfer learning. A model trained on general text can be fine-tuned on domain-specific data to perform specialized tasks like legal document generation or customer support interactions.
        Despite their capabilities, deep learning language models are not without flaws. They sometimes produce biased, inaccurate, or nonsensical outputs, and can hallucinate information that appears factual but is entirely fabricated. As such, responsible deployment requires mechanisms for human oversight, fact-checking, and model transparency.
        In the coming years, we can expect these systems to become even more interactive, multimodal, and emotionally aware — making language generation not just smarter, but more contextually grounded and personalized.',
        SYSDATE,
        NULL,
        NULL,
        KeywordList(T_Keyword('Deep Learning'), T_Keyword('Natural Language Processing')), 
        CategoryList(T_Category(' Computer Science'), T_Category('Creative AI')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 101) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Decoding Bias in Machine Learning Algorithms',
        'Bias in machine learning algorithms is one of the most pressing concerns in the development and deployment of AI systems. These biases often originate from the data the models are trained on — historical patterns, social inequalities, and underrepresentation all get baked into the datasets, and subsequently, into the models themselves.
        For example, facial recognition systems have shown higher error rates for individuals with darker skin tones, and credit scoring models have exhibited skewed results based on zip codes or gender. Such biases not only degrade model performance but also have real-world implications that can perpetuate discrimination and social injustice.
        Detecting bias requires both statistical tools and human oversight. Techniques like fairness metrics, bias audits, and adversarial de-biasing can help identify and mitigate problematic patterns. Importantly, explainable AI plays a critical role here, enabling practitioners to understand why a model made a particular decision.
        However, true fairness in AI also requires a cultural and organizational commitment to inclusivity, diverse teams, and transparency in development processes. As machine learning systems become increasingly embedded in daily life, from hiring algorithms to healthcare diagnostics, addressing algorithmic bias is not just a technical challenge — it is a moral imperative.',
        SYSDATE,
        NULL,
        SYSDATE,
        KeywordList(T_Keyword('Ethics in AI'), T_Keyword('Artificial Intelligence')), 
        CategoryList(T_Category('Technology'), T_Category('Research')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 106) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'The Role of Data Lakes in Modern Data Architecture', 
        'Data lakes have emerged as a pivotal element in modern data architecture, enabling organizations to store massive volumes of structured and unstructured data in its raw format. Unlike traditional data warehouses that require strict schema definitions upfront, data lakes offer schema-on-read flexibility, which significantly enhances agility for data scientists and analysts. This architecture supports a wide range of data types—from social media streams and sensor logs to images and video—making it ideal for machine learning, real-time analytics, and big data exploration.
        One of the key advantages of data lakes is their ability to decouple storage and compute, which allows for cost-efficient scaling and processing using frameworks like Apache Spark or Presto. However, with great flexibility comes the need for strong governance. Without proper metadata management and access control, data lakes risk becoming data swamps, where information becomes inaccessible and unreliable.
        To avoid these pitfalls, companies are integrating data lakehouses, which combine the governance capabilities of warehouses with the scalability of lakes. Technologies such as Delta Lake and Apache Iceberg enable transactions, version control, and quality enforcement over massive datasets. Ultimately, when properly managed, data lakes can empower organizations with insights drawn from the full breadth of their data assets.',
        SYSDATE,
        SYSDATE,
        SYSDATE,
        KeywordList(T_Keyword('Data Lakes'), T_Keyword('Big Data'), T_Keyword('Apache Spark')), 
        CategoryList(T_Category('Technology'), T_Category('Computer Science')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 111) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Human-Centered AI: Designing with Ethics and Empathy', 
        'As artificial intelligence becomes increasingly embedded in everyday life, from voice assistants to predictive healthcare, the need for ethical and empathetic AI design is more crucial than ever. Human-centered AI emphasizes designing systems that align with human values, respect user rights, and adapt to societal norms. It shifts the focus from mere technological capability to thoughtful integration with real-world human needs.
        This approach necessitates interdisciplinary collaboration between engineers, ethicists, sociologists, and designers. Transparency and explainability are key, ensuring users can understand and question AI decisions. Fairness and inclusivity must also be prioritized to prevent bias in training data from disproportionately impacting marginalized communities. For instance, facial recognition systems have shown disparities in accuracy across skin tones and genders—a consequence of training datasets that lack diversity.
        Moreover, human-centered AI calls for participatory design processes, involving users in iterative development to ensure relevance and trust. Legal frameworks like the EU AI Act are beginning to codify such principles, requiring accountability and documentation at each stage of AI lifecycle. Ultimately, the success of AI in society will depend not just on what it can do, but how respectfully and responsibly it interacts with the people it serves.',
        SYSDATE,
        NULL,
        NULL,
        KeywordList(T_Keyword('Artificial Intelligence'), T_Keyword('Ethics'), T_Keyword('Human-Centered Design')), 
        CategoryList(T_Category('Technology'), T_Category('Research')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 107) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Exploring Neural Network Architectures for Natural Language Processing', 
        'Natural Language Processing (NLP) has witnessed revolutionary advances with the advent of neural network architectures tailored to linguistic data. Early models like feedforward neural networks paved the way, but were soon surpassed by more sophisticated structures such as Recurrent Neural Networks (RNNs) and Long Short-Term Memory (LSTM) units, which excel at modeling sequential dependencies in language. These architectures help machines understand context, manage varying input lengths, and generate coherent sentences.
        More recently, Transformer models, like BERT and GPT, have transformed NLP by using self-attention mechanisms to capture global dependencies more efficiently than RNNs. This paradigm shift enables parallel processing and has significantly improved performance across tasks such as machine translation, sentiment analysis, and question answering. However, large transformer models require vast computational resources, raising challenges in deployment and environmental impact.
        Ongoing research focuses on optimizing architectures for efficiency, interpretability, and multilingual capabilities. Transfer learning and fine-tuning pretrained models on specific domains have become standard practice, allowing practitioners to leverage vast knowledge encoded in massive datasets. Understanding these architectures and their trade-offs is essential for designing effective NLP solutions that bridge the gap between human language and machine understanding.',
        SYSDATE,
        SYSDATE,
        SYSDATE,
        KeywordList(T_Keyword('Neural Networks'), T_Keyword('Deep Learning'), T_Keyword('Natural Language Processing')), 
        CategoryList(T_Category('Computer Science'), T_Category('Technology')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 101) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'The Impact of Big Data Analytics on Healthcare Outcomes', 
        'Big data analytics has emerged as a transformative force in healthcare, enabling providers to harness extensive patient data for improving diagnosis, treatment, and operational efficiency. By integrating electronic health records, genomic data, medical imaging, and wearable sensor outputs, analytics platforms can uncover patterns invisible to traditional methods. Predictive models assist in early disease detection, personalized treatment plans, and hospital resource optimization.
        For example, machine learning algorithms can analyze large cohorts to identify risk factors for chronic diseases, allowing proactive interventions. Real-time analytics on streaming data helps in monitoring critical patients remotely, reducing hospital readmissions. Moreover, population health management benefits from analyzing social determinants and environmental factors to address disparities.
        However, the use of big data in healthcare raises challenges related to privacy, data security, and ethical concerns around consent. Ensuring interoperability among diverse health IT systems is also critical for seamless data exchange. Despite these hurdles, the potential of big data to revolutionize healthcare outcomes and reduce costs is driving significant investment and research worldwide.',
        SYSDATE,
        SYSDATE,
        NULL,
        KeywordList(T_Keyword('Big Data'), T_Keyword('Healthcare'), T_Keyword('Predictive Analytics')), 
        CategoryList(T_Category('Technology'), T_Category('Research')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 102) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Computer Vision Techniques for Autonomous Vehicles', 
        'Autonomous vehicles rely heavily on computer vision systems to perceive and interpret their environment for safe navigation. These systems use cameras, LiDAR, and radar to gather real-time data, which is then processed through sophisticated algorithms to detect objects, recognize traffic signs, and estimate distances. Traditional image processing techniques have been complemented and largely replaced by deep learning models, which excel at feature extraction and classification tasks.
        Convolutional Neural Networks (CNNs) have become the backbone of visual perception in autonomous driving, enabling accurate recognition of pedestrians, vehicles, and obstacles even in complex environments. Further advancements integrate sensor fusion to combine data from multiple modalities, enhancing robustness in adverse weather or lighting conditions.
        Safety is paramount, so continuous testing and validation of vision systems under varied scenarios are essential. Challenges remain in edge cases like unusual road layouts or unexpected behaviors. Research into explainability and fault tolerance also aims to improve trustworthiness. As autonomous vehicle technologies progress, computer vision remains a critical component in realizing fully driverless transportation.',
        SYSDATE,
        NULL,
        SYSDATE,
        KeywordList(T_Keyword('Computer Vision'), T_Keyword('Autonomous Vehicles'), T_Keyword('Deep Learning')), 
        CategoryList(T_Category('Technology'), T_Category('Computer Science')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 113) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Educational Technologies Shaping the Future of Learning', 
        'Educational technologies are rapidly evolving, reshaping how knowledge is delivered, accessed, and personalized. Digital platforms, virtual classrooms, and adaptive learning systems provide learners with flexible, engaging experiences tailored to individual needs and pace. Gamification and interactive multimedia enhance motivation and comprehension, while data analytics enable educators to track progress and identify gaps.
        Artificial intelligence plays an increasing role, powering intelligent tutoring systems that respond dynamically to student inputs, offering customized feedback and recommendations. Massive Open Online Courses (MOOCs) democratize access to quality education worldwide, breaking geographical and economic barriers. Moreover, technologies like augmented reality (AR) and virtual reality (VR) create immersive environments for hands-on practice and simulations, particularly valuable in fields such as medicine and engineering.
        Despite these innovations, challenges around digital equity, data privacy, and pedagogical effectiveness remain. Bridging the digital divide and ensuring all students benefit from edtech advances is a priority.
        Ongoing research evaluates the long-term impacts of technology integration on learning outcomes and cognitive development. The future of education will likely be a hybrid model leveraging human expertise and technological tools harmoniously.',
        SYSDATE,
        NULL,
        NULL,
        KeywordList(T_Keyword('Education'), T_Keyword('Technology'), T_Keyword(' Adaptive Learning')), 
        CategoryList(T_Category('Education'), T_Category('Technology')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 100) 
    )
);

--  20
INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'The Growing Significance of Research Data Management in Science', 
        'Effective research data management (RDM) has become fundamental to scientific integrity, reproducibility, and collaboration. As research outputs increasingly involve large datasets, images, and code, structured data management ensures that valuable information remains accessible and usable long after initial publication. RDM encompasses data organization, metadata creation, storage, sharing, and preservation, facilitated by institutional policies and technological infrastructures.
        Proper RDM practices enable researchers to comply with funding agency requirements and open science mandates, promoting transparency and accelerating discovery. Data repositories and standardized formats support interoperability and facilitate secondary analysis, meta-studies, and machine learning applications.
        Additionally, RDM addresses ethical considerations, such as protecting sensitive human subject data and respecting intellectual property rights. Training and awareness programs help build researchers’ capabilities in managing data throughout the project lifecycle. As scientific collaboration grows global and interdisciplinary, robust RDM is indispensable for maximizing the impact and credibility of research.',
        SYSDATE,
        SYSDATE,
        SYSDATE,
        KeywordList(T_Keyword('Research'), T_Keyword('Data Management'), T_Keyword('Open Science')), 
        CategoryList(T_Category('Research'), T_Category('Education')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 105) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Advances in Artificial Intelligence for Environmental Monitoring', 
        'Artificial Intelligence (AI) is playing an increasingly vital role in environmental monitoring by enabling precise data analysis and real-time decision making. AI-powered sensors and satellite imagery can detect changes in ecosystems, track wildlife populations, and monitor pollution levels more efficiently than traditional methods. Machine learning algorithms analyze vast datasets collected from remote sensing devices to identify patterns and predict environmental trends such as deforestation, climate change impacts, and natural disasters.
        These technologies support sustainable resource management by providing actionable insights for policymakers and conservationists. For instance, AI models help forecast air and water quality, enabling timely interventions to mitigate health risks. Additionally, AI facilitates the automation of repetitive tasks such as species identification from camera trap images, saving significant human effort.
        However, challenges remain in ensuring data accuracy, integrating heterogeneous data sources, and addressing ethical concerns about data privacy and surveillance. Ongoing research focuses on improving model transparency, adaptability to different ecosystems, and fostering community engagement in AI-driven environmental initiatives. The integration of AI into environmental monitoring heralds a new era of precision conservation and sustainable development.',
        SYSDATE,
        NULL,
        SYSDATE,
        KeywordList(T_Keyword('Artificial Intelligence'), T_Keyword('Environmental Monitoring'), T_Keyword('Machine Learning')), 
        CategoryList(T_Category('Technology'), T_Category('Research')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 111) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Deep Learning Applications in Medical Imaging Analysis', 
        'Deep learning has revolutionized medical imaging analysis by enabling automatic detection, segmentation, and classification of pathological structures in radiological images. Convolutional Neural Networks (CNNs) are extensively used to identify abnormalities such as tumors, fractures, and lesions across modalities including MRI, CT, and X-rays. These models often outperform traditional image processing techniques by learning hierarchical features directly from raw data without manual intervention.
        The ability of deep learning systems to assist radiologists improves diagnostic accuracy, reduces interpretation time, and facilitates early disease detection. Moreover, integration with 3D imaging and volumetric data enhances spatial understanding of complex anatomical structures. Transfer learning and data augmentation techniques help address the scarcity of annotated medical images, improving model robustness.
        Despite promising results, challenges include the need for large, diverse datasets, model interpretability, and regulatory approval. Ethical considerations such as bias mitigation and patient privacy are also critical. Ongoing collaboration between AI researchers, clinicians, and healthcare providers aims to translate deep learning advancements into routine clinical practice, ultimately improving patient outcomes.',
        SYSDATE,
        SYSDATE,
        SYSDATE,
        KeywordList(T_Keyword('Deep Learning'), T_Keyword('Medical Imaging'), T_Keyword('Healthcare')), 
        CategoryList(T_Category('Technology'), T_Category('Healthcare')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 108) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'The Role of Big Data in Enhancing Cybersecurity', 
        'Big data analytics has emerged as a powerful tool in cybersecurity, enabling organizations to detect, prevent, and respond to cyber threats more effectively. By collecting and analyzing massive volumes of network traffic, user behavior logs, and threat intelligence feeds, big data platforms identify anomalies indicative of attacks such as intrusions, malware, and phishing attempts. Machine learning models built on big data help classify threats, predict vulnerabilities, and automate incident response.
        Real-time analytics enables proactive defense mechanisms, reducing the time between threat detection and mitigation. Moreover, big data supports threat hunting and forensic investigations by providing comprehensive historical records. The integration of big data with security information and event management (SIEM) systems enhances situational awareness and decision making.
        However, the complexity of big data environments poses challenges related to scalability, data quality, and false positive reduction. Privacy concerns must be addressed when analyzing sensitive user data. As cyber threats evolve rapidly, continuous research is needed to develop adaptive big data-driven security frameworks that safeguard critical infrastructure and digital assets.',
        SYSDATE,
        NULL,
        NULL,
        KeywordList(T_Keyword('Big Data'), T_Keyword('Cybersecurity'), T_Keyword('Machine Learning')), 
        CategoryList(T_Category('Technology'), T_Category('Research')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 106) 
    )
);

INSERT INTO Articles VALUES (
    T_Article(
        article_seq_custom.NEXTVAL, 
        'Emerging Trends in Computer Vision for Augmented Reality', 
        'Augmented Reality (AR) applications increasingly rely on advanced computer vision techniques to seamlessly integrate virtual objects into real-world environments. Core computer vision tasks in AR include real-time object detection, tracking, and scene understanding, which enable accurate placement and interaction of digital elements. Recent advances utilize deep learning models for enhanced feature extraction and robust recognition under varying lighting and occlusion conditions.
        Simultaneous Localization and Mapping (SLAM) algorithms are fundamental for tracking device position and mapping surroundings, enabling immersive experiences in gaming, education, and industrial maintenance. Additionally, semantic segmentation and depth estimation allow AR systems to understand environmental context, improving user interaction and safety.
        Challenges include balancing computational efficiency with accuracy to support mobile and wearable devices with limited resources. Researchers also focus on improving 3D reconstruction, multi-user collaboration, and user experience design. As AR technologies mature, the synergy between computer vision and AR is expected to revolutionize how humans interact with digital content and physical spaces.',
        SYSDATE,
        SYSDATE,
        SYSDATE,
        KeywordList(T_Keyword('Computer Vision'), T_Keyword('Augmented Reality'), T_Keyword('Deep Learning')), 
        CategoryList(T_Category('Technology'), T_Category('Computer Science')), 
        (SELECT REF(u) FROM Users u WHERE u.userID = 112) 
    )
);

-- HIBA jelentés beszúrása ( 50 )
INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Some references in the article are outdated and need revision.',
        'open',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1000),
        (SELECT REF(u) FROM Users u WHERE u.userID = 101)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Images are not loading correctly in the PDF version of the article.',
        'pending',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1000),
        (SELECT REF(u) FROM Users u WHERE u.userID = 103)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Grammar issues in the introductory section.',
        'resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1000),
        (SELECT REF(u) FROM Users u WHERE u.userID = 100)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'The article contains a broken image link in the first section.',
        'open',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1002),
        (SELECT REF(u) FROM Users u WHERE u.userID = 103)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Spelling mistakes found in the last paragraph of the curriculum.',
        'resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1005),
        (SELECT REF(u) FROM Users u WHERE u.userID = 108)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Outdated statistics cited in the introduction section.',
        'pending',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1011),
        (SELECT REF(u) FROM Users u WHERE u.userID = 100)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Missing references to sources mentioned in the text.',
        'open',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1007),
        (SELECT REF(u) FROM Users u WHERE u.userID = 110)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'The article title does not accurately reflect the content.',
        'resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1014),
        (SELECT REF(u) FROM Users u WHERE u.userID = 105)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Incorrect use of technical terminology in the second paragraph.',
        'resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1021),
        (SELECT REF(u) FROM Users u WHERE u.userID = 113)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Formatting issues in the keyword section, making it unreadable.',
        'resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1017),
        (SELECT REF(u) FROM Users u WHERE u.userID = 109)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Duplicate sentences found in the conclusion.',
        'open',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1004),
        (SELECT REF(u) FROM Users u WHERE u.userID = 102)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Some links in the article body lead to 404 error pages.',
        'resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1019),
        (SELECT REF(u) FROM Users u WHERE u.userID = 111)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Incorrect author attribution in metadata section.',
        'open',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1009),
        (SELECT REF(u) FROM Users u WHERE u.userID = 106)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'The code snippet in the article does not compile correctly.',
        'pending',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1010),
        (SELECT REF(u) FROM Users u WHERE u.userID = 107)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'The article lacks citations for several bold claims.',
        'resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1022),
        (SELECT REF(u) FROM Users u WHERE u.userID = 100)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'The introduction paragraph repeats the title without adding value.',
        'archived',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1006),
        (SELECT REF(u) FROM Users u WHERE u.userID = 112)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Figures are not properly labeled or referenced in the text.',
        'open',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1015),
        (SELECT REF(u) FROM Users u WHERE u.userID = 104)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'The curriculum section is missing entirely from the article.',
        'pending',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1023),
        (SELECT REF(u) FROM Users u WHERE u.userID = 110)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Inconsistent date formatting across different articles.',
        'resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1013),
        (SELECT REF(u) FROM Users u WHERE u.userID = 101)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'The article uses an outdated definition of machine learning.',
        'archived',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1001),
        (SELECT REF(u) FROM Users u WHERE u.userID = 106)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'There are alignment issues in the article layout on mobile.',
        'open',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1018),
        (SELECT REF(u) FROM Users u WHERE u.userID = 109)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'The article does not load correctly on Safari browsers.',
        'resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1020),
        (SELECT REF(u) FROM Users u WHERE u.userID = 105)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Incorrect use of quotation marks around citations.',
        'pending',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1008),
        (SELECT REF(u) FROM Users u WHERE u.userID = 114)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Images are not optimized, causing long load times.',
        'archived',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1000),
        (SELECT REF(u) FROM Users u WHERE u.userID = 111)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Keywords are not relevant to the article content.',
        'open',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1024),
        (SELECT REF(u) FROM Users u WHERE u.userID = 108)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Grammar errors found throughout the body text.',
        'pending',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1016),
        (SELECT REF(u) FROM Users u WHERE u.userID = 102)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Embedded video content does not play in Firefox.',
        'resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1003),
        (SELECT REF(u) FROM Users u WHERE u.userID = 103)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Multiple bullet points are misaligned in the curriculum.',
        'archived',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1012),
        (SELECT REF(u) FROM Users u WHERE u.userID = 113)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'The sidebar categories list shows incorrect values.',
        'open',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1019),
        (SELECT REF(u) FROM Users u WHERE u.userID = 100)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Hyperlinks in the article open in the same tab instead of new.',
        'resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1021),
        (SELECT REF(u) FROM Users u WHERE u.userID = 107)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Some links in the references section lead to 404 error pages.',
        'open',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1002),
        (SELECT REF(u) FROM Users u WHERE u.userID = 100)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'The author name is not displayed on the article detail page.',
        'pending',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1009),
        (SELECT REF(u) FROM Users u WHERE u.userID = 105)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Category filter on homepage does not apply correctly.',
        'resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1014),
        (SELECT REF(u) FROM Users u WHERE u.userID = 111)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Several typos in the second paragraph reduce readability.',
        'archived',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1007),
        (SELECT REF(u) FROM Users u WHERE u.userID = 113)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Sidebar layout breaks on screen sizes below 768px.',
        'open',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1023),
        (SELECT REF(u) FROM Users u WHERE u.userID = 108)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Curriculum font size is too small to be legible.',
        'pending',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1017),
        (SELECT REF(u) FROM Users u WHERE u.userID = 102)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        '“Read more” button redirects to the wrong article.',
        'resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1020),
        (SELECT REF(u) FROM Users u WHERE u.userID = 109)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Inconsistent line spacing in curriculum section.',
        'archived',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1004),
        (SELECT REF(u) FROM Users u WHERE u.userID = 101)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Tags for keywords are not rendering properly.',
        'open',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1011),
        (SELECT REF(u) FROM Users u WHERE u.userID = 112)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Author edit button is visible to other users.',
        'pending',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1005),
        (SELECT REF(u) FROM Users u WHERE u.userID = 104)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Review date is displaying as null for reviewed articles.',
        'resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1013),
        (SELECT REF(u) FROM Users u WHERE u.userID = 114)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Double spacing detected after periods.',
        'archived',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1022),
        (SELECT REF(u) FROM Users u WHERE u.userID = 107)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Multiple keywords are repeated in the same article.',
        'open',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1016),
        (SELECT REF(u) FROM Users u WHERE u.userID = 106)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Editing articles sometimes clears the curriculum text.',
        'pending',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1018),
        (SELECT REF(u) FROM Users u WHERE u.userID = 100)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Comment section does not appear for some users.',
        'resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1000),
        (SELECT REF(u) FROM Users u WHERE u.userID = 103)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Incorrect word wrapping in long article titles.',
        'archived',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1006),
        (SELECT REF(u) FROM Users u WHERE u.userID = 110)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Unicode characters appear garbled on older browsers.',
        'open',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1001),
        (SELECT REF(u) FROM Users u WHERE u.userID = 105)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Long keywords overflow the keyword tag container.',
        'pending',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1021),
        (SELECT REF(u) FROM Users u WHERE u.userID = 111)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Article dates appear with incorrect timezone adjustments.',
        'resolved',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1010),
        (SELECT REF(u) FROM Users u WHERE u.userID = 113)
    )
);

INSERT INTO Bugs VALUES (
    T_Bug(
        bug_seq_custom.NEXTVAL,
        'Image alt text missing for accessibility compliance.',
        'archived',
        (SELECT REF(a) FROM Articles a WHERE a.articleID = 1024),
        (SELECT REF(u) FROM Users u WHERE u.userID = 106)
    )
);

COMMIT;