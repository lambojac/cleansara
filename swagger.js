import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'cleansara',
      version: '1.0.0',
      description: 'API documentation for cleansara App',
    },
    servers: [
      {
        url: 'https://cleansara.onrender.com',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to route files
};

const swaggerSpec = swaggerJSDoc(options);

export default (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
