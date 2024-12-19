/**
 * blog service
 */

import { factories } from '@strapi/strapi';
import slugify from 'slugify';

export default factories.createCoreService('api::blog.blog', ({ strapi }) => ({
    async beforeCreate(event) {
        const { data } = event;

        if (!data.slug) {
            data.slug = slugify(data.title, {
                lower: true,
                replacement: '-',
                remove: /[^a-z0-9]+/g,
                trim: true
            });
        }
    },
}));
