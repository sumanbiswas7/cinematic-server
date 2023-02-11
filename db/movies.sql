DECLARE @user INTEGER NOT NULL = 2;

DECLARE @createdAt TEXT = 'February 10th 2023, 10:29:39 am';

INSERT INTO
    movies(
        "userId",
        name,
        description,
        director,
        casts,
        rating,
        release,
        type,
        image,
        "createdAt"
    )
VALUES
    (
        @user,
        'Intersteller',
        'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
        'Christopher Nolan',
        'Matthew McConaughey#Jessica Chastain',
        8.5,
        2014,
        'Science Fiction#Adventure',
        'https://movizine-imageupload.s3.ap-south-1.amazonaws.com/poster_interstellar.jpg',
        @createdAt
    );

INSERT INTO
    movies(
        "userId",
        name,
        description,
        director,
        casts,
        rating,
        release,
        type,
        image,
        "createdAt"
    )
VALUES
    (
        @user,
        'Fight Club',
        'Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.',
        'David Fincher',
        'Edward Norton#Brad Pitt',
        8,
        1999,
        'Thriller',
        'https://movizine-imageupload.s3.ap-south-1.amazonaws.com/poster_fight_club.jpg',
        @createdAt
    );

INSERT INTO
    movies(
        "userId",
        name,
        description,
        director,
        casts,
        rating,
        release,
        type,
        image,
        "createdAt"
    )
VALUES
    (
        @user,
        'La La Land',
        'When Sebastian, a pianist, and Mia, an actress, follow their passion and achieve success in their respective fields, they find themselves torn between their love for each other and their careers.',
        'Damien Chazelle',
        'Emma Stone#Ryan Gosling',
        8.5,
        2016,
        'Romance',
        'https://movizine-imageupload.s3.ap-south-1.amazonaws.com/poster_la_la_land.webp',
        @createdAt
    );

INSERT INTO
    movies(
        "userId",
        name,
        description,
        director,
        casts,
        rating,
        release,
        type,
        image,
        "createdAt"
    )
VALUES
    (
        @user,
        'The Matrix',
        'Thomas Anderson, a computer programmer, is led to fight an underground war against powerful computers who have constructed his entire reality with a system called the Matrix.',
        'Lana Wachowski',
        'Keanu Reeves#Carrie-Anne Moss',
        8,
        1999,
        'Science Fiction',
        'https://movizine-imageupload.s3.ap-south-1.amazonaws.com/poster_the_matrix.jpg',
        @createdAt
    );

INSERT INTO
    movies(
        "userId",
        name,
        description,
        director,
        casts,
        rating,
        release,
        type,
        image,
        "createdAt"
    )
VALUES
    (
        @user,
        'Django Unchained',
        'When Django, a slave, is freed, he joins forces with a bounty hunter to rescue his wife, who has been enslaved by Calvin, a hard-hearted plantation owner.',
        'Quentien Tarantino',
        'Leonardo DiCaprio#Cristopher Waltz',
        8.5,
        2012,
        'Western',
        'https://movizine-imageupload.s3.ap-south-1.amazonaws.com/poster_django_unchained.jpg',
        @createdAt
    );

INSERT INTO
    movies(
        "userId",
        name,
        description,
        director,
        casts,
        rating,
        release,
        type,
        image,
        "createdAt"
    )
VALUES
    (
        @user,
        'The Good The Bad and The Ugly',
        'During the Civil War, two men, Blondie and Tuco, form an uncomfortable alliance while looking for treasure. They must also outwit Angel Eyes, an outlaw who wants to plunder the riches for himself.',
        'Client Eastwood',
        'Client Eastwood',
        8,
        1975,
        'Western',
        'https://movizine-imageupload.s3.ap-south-1.amazonaws.com/poster_the_good_the_bad_ugly.webp',
        @createdAt
    );

INSERT INTO
    movies(
        "userId",
        name,
        description,
        director,
        casts,
        rating,
        release,
        type,
        image,
        "createdAt"
    )
VALUES
    (
        @user,
        'Forrest Gump',
        'Forrest, a man with low IQ, recounts the early years of his life when he found himself in the middle of key historical events. All he wants now is to be reunited with his childhood sweetheart, Jenny.',
        'Robert Zemeckis',
        'Tom Hanks',
        8.5,
        1994,
        'Drama',
        'https://movizine-imageupload.s3.ap-south-1.amazonaws.com/poster_forrest_gump.jpg',
        @createdAt
    );

INSERT INTO
    movies(
        "userId",
        name,
        description,
        director,
        casts,
        rating,
        release,
        type,
        image,
        "createdAt"
    )
VALUES
    (
        @user,
        'Inception',
        'Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobbs criminal history as payment for performing an inception on his sick competitors son.',
        'Christopher Nolan',
        'Leonardo DiCaprio',
        8.5,
        2010,
        'Science Fiction',
        'https://movizine-imageupload.s3.ap-south-1.amazonaws.com/poster_inception.jpg',
        @createdAt
    );

INSERT INTO
    movies(
        "userId",
        name,
        description,
        director,
        casts,
        rating,
        release,
        type,
        image,
        "createdAt"
    )
VALUES
    (
        @user,
        'Mulholland Drive',
        'Rita, a dark-haired amnesiac, and Betty, a perky blonde actress, team up to find clues related to Rita''s accident and ascertain her true identity.',
        'David Lynch',
        'Naomi Watts, Laurra Harrings',
        8,
        2001,
        'Thriller',
        'https://movizine-imageupload.s3.ap-south-1.amazonaws.com/ed7d10be1071dcd976f8f170648efe3f.jpg',
        @createdAt
    );

INSERT INTO
    movies(
        "userId",
        name,
        description,
        director,
        casts,
        rating,
        release,
        type,
        image,
        "createdAt"
    )
VALUES
    (
        @user,
        'Green Book',
        'Amidst rampant racism in the 1960s southern America, an African American pianist hires an Italian American bouncer to drive him through his venues. They come closer in the course of their journey.',
        'Peter Farrelly',
        'Viggo Mortensen,  Mahershala Ali, Nick Vallelonga',
        8.5,
        2018,
        'Drama',
        'https://movizine-imageupload.s3.ap-south-1.amazonaws.com/83ab4b0d0da38ee54fe01bd125800092.jpg',
        @createdAt
    );

INSERT INTO
    movies(
        "userId",
        name,
        description,
        director,
        casts,
        rating,
        release,
        type,
        image,
        "createdAt"
    )
VALUES
    (
        @user,
        'Buffalo ''66',
        'Billy kidnaps a young dancer, Layla, and asks her to pretend to be his wife so that he can please his parents. While Layla is initially hesitant, she falls in love with him.',
        'Vincent Gallo',
        'Vincent Gallo, Christina Ricci',
        8,
        1998,
        'Drama',
        'https://movizine-imageupload.s3.ap-south-1.amazonaws.com/1333d47e3ae881efc6a8b4185403f08c.jpg',
        @createdAt
    );

INSERT INTO
    movies(
        "userId",
        name,
        description,
        director,
        casts,
        rating,
        release,
        type,
        image,
        "createdAt"
    )
VALUES
    (
        @user,
        'American Psyco',
        'Patrick Bateman, a wealthy investment banker, hides his psychopathic ego from his friends. Later, his illogical fantasies escalate and he submits to an uncontrollable bloodlust.',
        'Mary Harron',
        'Christian Bale',
        8.5,
        2000,
        'Thriller',
        'https://movizine-imageupload.s3.ap-south-1.amazonaws.com/images.jpeg',
        @createdAt
    );

INSERT INTO
    movies(
        "userId",
        name,
        description,
        director,
        casts,
        rating,
        release,
        type,
        image,
        "createdAt"
    )
VALUES
    (
        @user,
        '1917',
        'Two soldiers, assigned the task of delivering a critical message to another battalion, risk their lives for the job in order to prevent them from stepping right into a deadly ambush.',
        'Sam Mendes',
        'George MacKay, Dean-Charles',
        8.2,
        2019,
        'Action',
        'https://movizine-imageupload.s3.ap-south-1.amazonaws.com/e080f41168a8ef24ba80c213eed49026.jpg',
        @createdAt
    );