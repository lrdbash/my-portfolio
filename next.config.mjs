/** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
    images:{
        domains: ["images.pexel.com"],
           
            loader:"custom",
            loaderFile:"./loader.js",

        
    

    },
};

export default nextConfig;
