const userRoutes = require('./Routes/userRoutes');
const adminRoutes = require('./Routes/adminRoutes');
const bookRoutes = require('./Routes/bookRoutes');


app.use('/api/users' , userRoutes);
app.use('/api/admin' , adminRoutes);
app.use('/api/book' , bookRoutes);