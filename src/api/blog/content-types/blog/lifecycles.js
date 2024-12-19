// src/api/blog/content-types/blog/lifecycles.js
const slugify = require('slugify');

module.exports = {
    async beforeCreate(event) {
        const { data } = event.params;
        if (data.blogTitle) {
            // Genera un slug único basado en el título
            data.slug = slugify(data.blogTitle, { lower: true, strict: true });
        }
    },
    async beforeUpdate(event) {
        const { data } = event.params;
        if (data.blogTitle) {
            // Genera un slug único basado en el título
            data.slug = slugify(data.blogTitle, { lower: true, strict: true });
        }
    },
};