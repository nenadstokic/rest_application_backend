exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [
      {
        _id: "1",
        title: "First post",
        content: "This is the first post, yay!",
        imageUrl: "images/duck.jpg",
        creator: {
          name: "Nenad"
        },
        createdAt: new Date()
      }
    ]
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  // Create post in DB
  res.status(201).json({
    message: "Post created successfully!",
    post: {
      _id: Date.now(),
      title: title,
      content: content,
      creator: { name: "Nenad" },
      createdAt: new Date()
    }
  });
};
