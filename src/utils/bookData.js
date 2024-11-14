const books = [
  {
      "id": 1,
      "title": "To Kill a Mockingbird",
      "description": "A novel by Harper Lee published in 1960, dealing with serious issues like racial injustice.",
      "image_url": "https://i.pinimg.com/736x/d6/66/5f/d6665f5f592fe6f1442c2123a5f45902.jpg",
      "author": "Harper Lee"
  },
  {
      "id": 2,
      "title": "1984",
      "description": "A dystopian novel by George Orwell that critiques totalitarianism and extreme political ideology.",
      "image_url": "https://i.pinimg.com/736x/47/ec/55/47ec55cb4487080ea75a344228297ad2.jpg",
      "author": "George Orwell"
  },
  {
    "id": 3,
    "title": "Fahrenheit 451",
    "description": "A dystopian novel by Ray Bradbury about a society where books are banned and 'firemen' burn any that are found.",
    "image_url": "https://i.pinimg.com/564x/57/01/58/570158671ce16d1e25e0884ef017332d.jpg",
    "author": "Ray Bradbury"
    },
  {
      "id": 4,
      "title": "The Great Gatsby",
      "description": "A novel by F. Scott Fitzgerald that explores themes of wealth, excess, and the American Dream in the 1920s.",
      "image_url": "https://i.pinimg.com/564x/74/05/51/740551c3cec86af92fb97ffcf78404cf.jpg",
      "author": "F. Scott Fitzgerald"
  },
  {
      "id": 5,
      "title": "Moby Dick",
      "description": "A novel by Herman Melville about the obsessive quest of Captain Ahab for revenge against the white whale.",
      "image_url": "https://i.pinimg.com/564x/78/f1/a9/78f1a9d67c5f90ecae81977ae3b0ef4f.jpg",
      "author": "Herman Melville"
  },
  {
      "id": 6,
      "title": "War and Peace",
      "description": "A historical novel by Leo Tolstoy that intertwines the lives of Russian aristocracy with the events of the Napoleonic wars.",
      "image_url": "https://i.pinimg.com/564x/db/f2/6b/dbf26bcc5b7fccac8fab08ed2de7d4c6.jpg",
      "author": "Leo Tolstoy"
  },
  {
      "id": 7,
      "title": "The Catcher in the Rye",
      "description": "A novel by J.D. Salinger that deals with the complexities of teenage angst and alienation.",
      "image_url": "https://i.pinimg.com/564x/cf/c2/92/cfc292091b5041c8df90722d378c01ab.jpg",
      "author": "J.D. Salinger"
  },
  {
      "id": 8,
      "title": "The Hobbit",
      "description": "A fantasy novel by J.R.R. Tolkien that follows the journey of Bilbo Baggins in Middle-Earth.",
      "image_url": "https://i.pinimg.com/564x/ec/92/b5/ec92b5f8b9e8380b93e5a2f4598cf65c.jpg",
      "author": "J.R.R. Tolkien"
  },
  {
    "id": 9,
    "title": "Pride and Prejudice",
    "description": "A classic novel by Jane Austen that explores themes of love, society, and the role of women.",
    "image_url": "https://i.pinimg.com/564x/e6/7d/a6/e67da631bf95e370ee610985e025aa68.jpg",
    "author": "Jane Austen"
  },
  {
      "id": 10,
      "title": "Jane Eyre",
      "description": "A novel by Charlotte Brontë that explores the moral and spiritual development of the orphaned Jane Eyre.",
      "image_url": "https://i.pinimg.com/736x/24/bb/31/24bb31c36770ff0e8169c23cc4952698.jpg",
      "author": "Charlotte Brontë"
  },
  {
      "id": 11,
      "title": "Brave New World",
      "description": "A dystopian novel by Aldous Huxley set in a future society driven by technological control and superficial pleasure.",
      "image_url": "https://i.pinimg.com/564x/5f/06/65/5f066515b64613faed22947a8029f139.jpg",
      "author": "Aldous Huxley"
  },
  {
      "id": 12,
      "title": "The Odyssey",
      "description": "An epic poem attributed to Homer that tells the adventures of Odysseus as he tries to return home after the Trojan War.",
      "image_url": "https://i.pinimg.com/564x/6d/db/40/6ddb4027c9327bcfe6c8eeeba488f6a6.jpg",
      "author": "Homer"
  },
  {
      "id": 13,
      "title": "The Brothers Karamazov",
      "description": "A philosophical novel by Fyodor Dostoevsky that delves into deep questions of faith, morality, and family conflict.",
      "image_url": "https://i.pinimg.com/564x/95/aa/ac/95aaacc26c9da8d740fbb967857eae39.jpg",
      "author": "Fyodor Dostoevsky"
  },
  {
      "id": 14,
      "title": "Anna Karenina",
      "description": "A novel by Leo Tolstoy that explores themes of love, infidelity, and Russian society.",
      "image_url": "https://i.pinimg.com/564x/6e/88/cc/6e88ccf11ae57c70afab36f858745a7f.jpg",
      "author": "Leo Tolstoy"
  },
  {
      "id": 15,
      "title": "The Count of Monte Cristo",
      "description": "A novel that follows Edmond Dantès as he seeks revenge against those who wronged him.",
      "image_url": "https://i.pinimg.com/564x/c0/20/ec/c020ec06cd28468aefff4abc443fdf7d.jpg",
      "author": "Alexandre Dumas"
  },
  {
      "id": 16,
      "title": "Crime and Punishment",
      "description": "A psychological novel by Fyodor Dostoevsky that examines the moral dilemmas of crime and redemption.",
      "image_url": "https://i.pinimg.com/564x/4d/0d/2e/4d0d2e0b058bd474c44d756a7deaca86.jpg",
      "author": "Fyodor Dostoevsky"
  },
  {
      "id": 17,
      "title": "Wuthering Heights",
      "description": "A novel by Emily Brontë that explores the passionate and destructive relationship between Heathcliff and Catherine Earnshaw.",
      "image_url": "https://i.pinimg.com/564x/8a/2d/b0/8a2db013bae9fa65123b21bd5f0fa57c.jpg",
      "author": "Emily Brontë"
  },
  {
      "id": 18,
      "title": "The Picture of Dorian Gray",
      "description": "A novel that explores themes of vanity, moral corruption, and the consequences of a hedonistic lifestyle.",
      "image_url": "https://i.pinimg.com/564x/5c/c8/92/5cc892def63aa646ba9a9925be52bc94.jpg",
      "author": "Oscar Wilde"
  },
  {
      "id": 19,
      "title": "Great Expectations",
      "description": "A novel by Charles Dickens that follows the life and development of an orphan named Pip.",
      "image_url": "https://i.pinimg.com/564x/7e/1e/a2/7e1ea2053f4b28acce25859b8cec5299.jpg",
      "author": "Charles Dickens"
  },
  {
      "id": 20,
      "title": "Dracula",
      "description": "A Gothic novel by Bram Stoker that introduces the character of Count Dracula and popularizes vampire lore.",
      "image_url": "https://i.pinimg.com/564x/97/79/df/9779df2888e09fc93848cc8975b97aea.jpg",
      "author": "Bram Stoker"
  },
  {
      "id": 21,
      "title": "Les Misérables",
      "description": "A novel by Victor Hugo that delves into social injustice in France, centering on the story of ex-convict Jean Valjean.",
      "image_url": "https://i.pinimg.com/564x/45/76/5b/45765b91a909c38e2ab840e30a04e651.jpg",
      "author": "Victor Hugo"
  },
  {
      "id": 22,
      "title": "Madame Bovary",
      "description": "A novel by Gustave Flaubert that examines the life and tragic flaws of Emma Bovary.",
      "image_url": "https://i.pinimg.com/736x/f3/cd/53/f3cd5318d47f60468682239504f73f4e.jpg",
      "author": "Gustave Flaubert"
  },
  {
      "id": 23,
      "title": "Frankenstein",
      "description": "A novel by Mary Shelley about a scientist who creates a sapient creature, exploring themes of ambition, hubris, and alienation.",
      "image_url": "https://i.pinimg.com/564x/7c/c6/2c/7cc62c85b06ea9774e6a20375af84241.jpg",
      "author": "Mary Shelley"
  },
  {
      "id": 24,
      "title": "The Alchemist",
      "description": "A novel by Paulo Coelho that follows the journey of a young shepherd in search of personal legend.",
      "image_url": "https://i.pinimg.com/564x/62/e5/8b/62e58be18a340065a243d32d1d084541.jpg",
      "author": "Paulo Coelho"
  },
  {
      "id": 25,
      "title": "One Hundred Years of Solitude",
      "description": "A novel by Gabriel Garcia Marquez that tells the multi-generational story of the Buendía family.",
      "image_url": "https://i.pinimg.com/564x/fb/6c/57/fb6c57be3005b5759370732f9831ecb0.jpg",
      "author": "Gabriel Marquez"
  },
  {
      "id": 26,
      "title": "The Road",
      "description": "A novel by Cormac McCarthy that follows a father and son in a post-apocalyptic world.",
      "image_url": "https://i.pinimg.com/564x/ea/e6/4a/eae64a25acf57d0ea4193ed1950cdcbc.jpg",
      "author": "Cormac McCarthy"
  }, 
  {
    "id": 27,
    "title": "The Book Thief",
    "description": "A novel by Markus Zusak that tells the story of a young girl in Nazi Germany who steals books and shares them with others.",
    "image_url": "https://i.pinimg.com/564x/8d/fc/99/8dfc999cca18dc8875ef7df76358f6ee.jpg",
    "author": "Markus Zusak"
  },
  {
      "id": 28,
      "title": "The Old Man and the Sea",
      "description": "A novel by Ernest Hemingway about an aging fisherman’s struggle to catch a giant marlin.",
      "image_url": "https://i.pinimg.com/736x/69/5a/14/695a14720619b4e7d572dcf246fbf5b7.jpg",
      "author": "Ernest Hemingway"
  },
  {
      "id": 29,
      "title": "Life of Pi",
      "description": "A novel by Yann Martel that tells the survival story of a boy stranded at sea with a Bengal tiger.",
      "image_url": "https://i.pinimg.com/564x/a2/03/69/a20369c6d670c425d3ecfa00f4fe5213.jpg",
      "author": "Yann Martel"
  },
  {
      "id": 30,
      "title": "The Kite Runner",
      "description": "A novel by Khaled Hosseini about friendship and redemption set in Afghanistan.",
      "image_url": "https://i.pinimg.com/736x/9d/6a/5b/9d6a5bcfcf52b8cd82a207c3ce12b575.jpg",
      "author": "Khaled Hosseini"
  }, 
  {
    "id": 31,
    "title": "The Bell Jar",
    "description": "A novel by Sylvia Plath that explores mental illness and the struggle for identity in the 1950s.",
    "image_url": "https://i.pinimg.com/564x/26/7f/b1/267fb166e443c8798c645e55dd3ac74d.jpg",
    "author": "Sylvia Plath",
    "genre": "Literary Fiction"
  },
  {
    "id": 32,
    "title": "The Shining",
    "description": "A horror novel by Stephen King about a family trapped in a haunted hotel, where the father's mental state deteriorates.",
    "image_url": "https://i.pinimg.com/564x/e8/e7/04/e8e7046d4033157f27fe610045c60fcb.jpg",
    "author": "Stephen King",
    "genre": "Horror"
  },
  {
    "id": 33,
    "title": "The Secret Garden",
    "description": "A young girl who discovers a hidden garden and brings it back to life.",
    "image_url": "https://i.pinimg.com/564x/af/44/80/af4480b2d95058a9c6790b45d0e05d13.jpg",
    "author": "Frances Burnett",
    "genre": "Children's Fiction"
  },
  {
    "id": 34,
    "title": "The Girl on the Train",
    "description": "About a woman who becomes involved in a missing person case after witnessing something suspicious from a train.",
    "image_url": "https://i.pinimg.com/564x/d5/9e/cd/d59ecd32b83fdc4b4bfd3b5eddafa991.jpg",
    "author": "Paula Hawkins",
    "genre": "Thriller"
  },
  {
    "id": 35,
    "title": "The Handmaid's Tale",
    "description": "A dystopian novel by Margaret Atwood that imagines a totalitarian future where women are enslaved as child bearers.",
    "image_url": "https://i.pinimg.com/736x/16/06/dc/1606dc25dab204272c40e79d3729dfbf.jpg",
    "author": "Margaret Atwood",
    "genre": "Dystopian Fiction"
  },
  {
    "id": 36,
    "title": "Slaughterhouse-Five",
    "description": "A science-fiction novel by Kurt Vonnegut that blends war, time travel, and the absurdity of existence.",
    "image_url": "https://i.pinimg.com/564x/ff/90/d6/ff90d6a3b15f8969f0ed8cad687fd9f4.jpg",
    "author": "Kurt Vonnegut",
    "genre": "Science Fiction"
  },{
    "id": 37,
    "title": "The Giver",
    "description": "A dystopian novel by Lois Lowry about a society that has eliminated pain and strife by converting to 'Sameness.'",
    "image_url": "https://i.pinimg.com/564x/0c/49/57/0c4957b72fc91e8f30fd69db89c2ce22.jpg",
    "author": "Lois Lowry",
    "genre": "Dystopian Fiction"
  },
  {
    "id": 38,
    "title": "The Outsiders",
    "description": "A novel by S.E. Hinton about the struggles of two rival teenage gangs divided by their socioeconomic status.",
    "image_url": "https://i.pinimg.com/564x/42/48/c4/4248c4076f847848776d6c1d126d54b4.jpg",
    "author": "S.E. Hinton",
    "genre": "Young Adult Fiction"
  },
  {
    "id": 39,
    "title": "Memoirs of a Geisha",
    "description": "A historical novel by Arthur Golden that tells the story of a young girl who becomes one of Japan’s most celebrated geisha.",
    "image_url": "https://i.pinimg.com/564x/fc/92/46/fc9246047d99dc57bd4e20d168d48ae6.jpg",
    "author": "Arthur Golden",
    "genre": "Historical Fiction"
  },
  {
    "id": 40,
    "title": "The Catch-22",
    "description": "A satirical war novel by Joseph Heller that explores the absurdities of war and bureaucracy.",
    "image_url": "https://i.pinimg.com/564x/8b/0e/bb/8b0ebb3f046c1fcd1e6a57a464ebaee2.jpg",
    "author": "Joseph Heller",
    "genre": "Satire"
  },
  {
    "id": 41,
    "title": "White Teeth",
    "description": "A novel by Zadie Smith that spans multiple generations and explores cultural and racial diversity in Britain.",
    "image_url": "https://i.pinimg.com/564x/4a/b6/70/4ab670872299d6d5e2b62a2179cc12fb.jpg",
    "author": "Zadie Smith",
    "genre": "Literary Fiction"
  },
  {
    "id": 42,
    "title": "The Goldfinch",
    "description": "A Pulitzer Prize-winning novel by Donna Tartt about a boy who survives an explosion at an art museum and takes a priceless painting.",
    "image_url": "https://i.pinimg.com/564x/c9/c9/b5/c9c9b57582d3d6d2e0037763c105a98b.jpg",
    "author": "Donna Tartt",
    "genre": "Literary Fiction"
  },
  {
    "id": 43,
    "title": "The Night Circus",
    "description": "A fantasy novel by Erin Morgenstern about a magical competition between two young illusionists.",
    "image_url": "https://i.pinimg.com/564x/7b/b4/10/7bb410cead00aca531a165e596cf96b1.jpg",
    "author": "Erin Morgenstern",
    "genre": "Fantasy"
  },
  {
    "id": 44,
    "title": "The Shadow of the Wind",
    "description": "A novel which follows a young boy's journey to uncover the story of a mysterious author in post-war Barcelona.",
    "image_url": "https://i.pinimg.com/564x/5f/c8/d0/5fc8d047b0ad106dfcf9266feabe1d26.jpg",
    "author": "Carlos Zafón",
    "genre": "Mystery"
  },
  {
    "id": 45,
    "title": "A Tale of Two Cities",
    "description": "A historical novel by Charles Dickens set during the turbulent times of the French Revolution.",
    "image_url": "https://i.pinimg.com/564x/2c/4e/96/2c4e9644f3adc78f33542f736a4d38e4.jpg",
    "author": "Charles Dickens",
    "genre": "Historical Fiction"
  },
  {
    "id": 46,
    "title": "The Lovely Bones",
    "description": "A novel by Alice Sebold that follows the story of a young girl who watches over her family from the afterlife.",
    "image_url": "https://i.pinimg.com/564x/5e/ac/79/5eac79fc9016b2d6500839293fab8d5c.jpg",
    "author": "Alice Sebold",
    "genre": "Mystery"
  },
  {
    "id": 47,
    "title": "Beloved",
    "description": "A novel by Toni Morrison about the haunting legacy of slavery, centered on the life of an escaped slave and her family.",
    "image_url": "https://i.pinimg.com/564x/a7/56/cd/a756cd62afd5c51c03a9b3e16579eabc.jpg",
    "author": "Toni Morrison",
    "genre": "Historical Fiction"
  },
  {
    "id": 48,
    "title": "Atonement",
    "description": "A novel by Ian McEwan that examines themes of love, guilt, and the far-reaching consequences of a young girl’s lie.",
    "image_url": "https://i.pinimg.com/564x/2b/37/33/2b3733aea83e5ba12c2b617d1cf69ca2.jpg",
    "author": "Ian McEwan",
    "genre": "Historical Fiction"
  }
]

export default books