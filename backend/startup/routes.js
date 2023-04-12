const instrumentsRoutes = require('../routes/instrumentsRoutes');
const projectsRoutes = require('../routes/projectsRoutes');
const storageRoutes = require('../routes/storageRoutes');
const authRoutes = require('../routes/authRoutes');

module.exports = function (app) {
  app.use('/api/instruments', instrumentsRoutes);
  app.use('/api/projects', projectsRoutes);
  app.use('/api/storage', storageRoutes);
  app.use('/api/auth', authRoutes);
};
