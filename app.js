const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')


mongoose.set('strictQuery', true);
// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb+srv://Alex:11223310.suz8lhw.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => app.listen(3000))
.catch((err) => console.log(err))


// register view engine
app.set('view engine', 'ejs');

// listen for request

// middleware % static
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

// mongoose and mongo sandbox route
//app.get('/add-blog', (req, res) => {
//    const blog = new Blog({
  //      title: 'blog',
    //    snippet: 'about blog',
      //  body: 'more about my blog'
    //})

   // blog.save()
    //.then((result) => {
      //  res.send(result)
    //})
    //.catch((err) => {
      //  console.log(err)
    //})
//})

//app.get('/all-blogs', (req, res) => {
  //  Blog.find()
    //.then((result) => {
      //  res.send(result)
    //})
    //.catch((error) => {
      //  console.log(err)
    //})
//})

//app.get('/single-blog', (req, res) => {
  //  Blog.findById('')
    //.then((result) => {
      //  res.send(result)
   // })
    //.catch((error) => {
      //  console.log(err)
    //})
//})

// routes
app.get('/', (req, res) => {
    res.redirect('/blogs')
})

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
})

//blog routes
app.use('/blogs', blogRoutes)

// 404 page
app.use((req, res) => {
    res.status(404).render('404', {title: '404'})
})