/**
 * blog controller
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::blog.blog', ({ strapi }) => ({
    // Sobrescribir el método findOne
    async findOne(ctx) {
        const { id } = ctx.params; // Obtener el id de los parámetros de la URL

        try {
            // Buscar el blog por id, incluyendo cualquier campo relacionado
            const blog = await strapi.db.query('api::blog.blog').findOne({
                where: { id },  // Aquí se usa el ID recibido en los parámetros de la URL
                populate: '*',   // Si necesitas poblar relaciones (puedes ajustar según tu modelo)
            });

            // Si no se encuentra el blog, devolver un error 404
            if (!blog) {
                return ctx.notFound('Blog no encontrado');
            }

            // Si se encuentra el blog, devolverlo
            return blog;
        } catch (error) {
            // Manejar cualquier error durante la búsqueda
            return ctx.internalServerError('Error al recuperar el blog');
        }
    },
}));
