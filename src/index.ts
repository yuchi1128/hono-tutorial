import { Hono } from 'hono'

const app = new Hono()

let blogPosts = [
  {
    id: "1",
    title: "blog1",
    content: "blog1 Posts"
  },
  {
    id: "2",
    title: "blog2",
    content: "blog2 Posts"
  },
  {
    id: "3",
    title: "blog3",
    content: "blog3 Posts"
  },
]

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/posts', (c) => c.json({ posts: blogPosts }))

app.get('posts/:id', (c) =>{
  const id = c.req.param('id')
  const post = blogPosts.find((p) => p.id == id)

  if(post) {
    return c.json(post)
  } else {
    return c.json({ message: "not found this page" }, 404)
  }
})

export default app
