import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::blog.blog', ({ strapi }) => ({
    async findOne(ctx) {
        const { id } = ctx.params; // obtener el ID de los parámetros de la ruta

        try {
            const blog = await strapi.service('api::blog.blog').findOne(id, {
                populate: '*', // para incluir relaciones
            });

            if (!blog) {
                return ctx.notFound('Blog not found');
            }

            return blog;
        } catch (error) {
            ctx.throw(500, 'Error al recuperar el blog');
        }
    },
}));