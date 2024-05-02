const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
  {
    title: 'Test blog number 1',
    author: 'Test writer',
    url: 'Test url',
    likes: 7,
    user: '6633d06805912960c8589268'
  },
  {
    title: 'Test blog number 2',
    author: 'Test blogger',
    url: 'Test url second',
    likes: 14,
    user: '6633d06805912960c8589268'
  }
]

const nonExistingId = async () => {
  const blog = new Blog({ title: 'willremovethissoon' })
  await blog.save()
  await blog.deleteOne()

  return blog._id.toString()
}

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
  }

module.exports = {
  initialBlogs, nonExistingId, blogsInDb, usersInDb,
}