// scripts/updateSlugs.js
const slugify = require('slugify');

module.exports = async ({ strapi }) => {
    try {
        // Obtener todos los blogs
        const blogs = await strapi.entityService.findMany('api::blog.blog');

        for (const blog of blogs) {
            // Si el slug está vacío o es igual al blogTitle (no formateado)
            if (!blog.slug || blog.slug === blog.blogTitle) {
                const newSlug = slugify(blog.blogTitle, { lower: true, strict: true });

                // Actualizar el blog con el nuevo slug
                await strapi.entityService.update('api::blog.blog', blog.id, {
                    data: { slug: newSlug },
                });

                console.log(`Slug actualizado para el blog con ID ${blog.id}: ${newSlug}`);
            }
        }

        console.log('Actualización de slugs completada.');
    } catch (error) {
        console.error('Error actualizando slugs:', error);
    }
};