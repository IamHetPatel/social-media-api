const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const SERVER_URI = process.env.SERVER_URI || `http://localhost:8080`;

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Social Media API',
            version: '1.0.0',
            description: 'API documentation for the Social Media App',
            contact: {
                name: 'Developer',
                email: 'developer@example.com'
            },
        },
        servers: [
            {
                url: `${SERVER_URI}/api`,
                description: 'Render cloud server'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
        },
        security: [
            {
                bearerAuth: []
            }
        ],
    },
    apis: ['./routes/*.js'], // Path to the API route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = {
    swaggerUi,
    swaggerDocs,
};
