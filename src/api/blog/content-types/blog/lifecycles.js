// src/api/blog/content-types/blog/lifecycles.js
const slugify = require('slugify');

module.exports = {
    async beforeCreate(data) {
        // Generar el slug automáticamente antes de la creación
        if (data.blogTitle) {
            data.slug = slugify(data.blogTitle, { lower: true, strict: true });
        }
    },
    async beforeUpdate(params, data) {
        // Generar el slug si el blogTitle ha sido modificado
        if (data.blogTitle) {
            data.slug = slugify(data.blogTitle, { lower: true, strict: true });
        }
    }
};
