const dummy = (blogs) => {
    return 1
  }

const totalLikes = (blogs) => {
    const total = blogs.reduce((sum, blog) => {
        return sum + blog.likes
    }, 0)
    return total    
}

const favouriteBlog = (blogs) => {
    if (blogs.length === 0) return null

    return blogs.reduce((previous, current) => {
      return (current.likes > previous.likes) 
      ? current : previous
    })
}
  module.exports = {
    dummy,
    totalLikes,
    favouriteBlog
  }