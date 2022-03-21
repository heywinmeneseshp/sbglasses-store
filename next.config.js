/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['placeimg.com'], //Para que deje trabajar con la API con el dominio
  },
}

/**  env: {
    customKey: 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola', //Cuando  alguientre a Hola se ira a Hello
        destination: '/hello',
        permanent: true,
      }
    ]
  }*/