const userRoutes = require('./Routes/userRoutes');
const adminRoutes = require('./Routes/adminRoutes');

app.use('/api/users' , userRoutes);
app.use('/api/admin' , adminRoutes);