import { createRoute } from '@strapi/strapi';

export default ({ strapi }) => {
    strapi.router('api::blog.blog').get('/blogs/:slug', async (ctx) => {
        const { slug } = ctx.params;

        try {
            const blog = await strapi.service('api::blog.blog').findOne({
                where: { slug }, // Buscamos el blog por su slug
                populate: '*', // Puedes incluir las relaciones si es necesario
            });

            if (!blog) {
                return ctx.notFound('Blog not found');
            }

            return ctx.send(blog);
        } catch (error) {
            ctx.throw(500, 'Error al recuperar el blog');
        }
    });
};
