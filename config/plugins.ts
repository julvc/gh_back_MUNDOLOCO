export default ({ env }) => ({
    "video-field": {
        enabled: true,
    },
    // upload: {
    //     config: {
    //         provider: "local",
    //         providerOptions: {
    //             sizeLimit: 1000000, // Límite de tamaño en bytes (1MB en este ejemplo)
    //         },
    //         actionOptions: {
    //             upload: {},
    //             delete: {},
    //         },
    //     },
    // },
    upload: {
        config: {
            provider: 'cloudinary',
            providerOptions: {
                cloud_name: env('CLOUDINARY_NAME'),
                api_key: env('CLOUDINARY_KEY'),
                api_secret: env('CLOUDINARY_SECRET'),
            },
            actionOptions: {
                upload: {},
                delete: {},
            },
        },
    },
});