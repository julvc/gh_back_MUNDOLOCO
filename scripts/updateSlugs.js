// scripts/updateSlugs.js
const slugify = require('slugify');

module.exports = async ({ strapi }) => {
    try {
        // Obtener todos los blogs
        const blogs = await strapi.entityService.findMany('api::blog.blog');

        console.log(`Se encontraron ${blogs.length} blogs para procesar.`);

        for (const blog of blogs) {
            // Verificar si blogTitle está definido y no es vacío
            if (!blog.blogTitle) {
                console.warn(`El blog con ID ${blog.id} no tiene un blogTitle definido.`);
                continue;
            }

            // Si el slug está vacío o es igual al blogTitle (no formateado)
            if (!blog.slug || blog.slug === blog.blogTitle) {
                const newSlug = slugify(blog.blogTitle, { lower: true, strict: true });

                // Actualizar el blog con el nuevo slug
                await strapi.entityService.update('api::blog.blog', blog.id, {
                    data: { slug: newSlug },
                });

                console.log(`Slug actualizado para el blog con ID ${blog.id}: ${newSlug}`);
            } else {
                console.log(`El blog con ID ${blog.id} ya tiene un slug válido: ${blog.slug}`);
            }
        }

        console.log('Actualización de slugs completada.');
    } catch (error) {
        console.error('Error actualizando slugs:', error);
    }
};