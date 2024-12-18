/**
 * blog router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::blog.blog', {
    config: {
        findOne: {
            auth: false, // Si no necesitas autenticación, puedes establecerlo como `false`
            policies: [], // Aquí puedes agregar políticas si las necesitas
            middlewares: [], // Aquí puedes agregar middlewares si los necesitas
        },
    },
});