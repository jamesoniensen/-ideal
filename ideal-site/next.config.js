// Configuração do Next.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'],
  },
  env: {
    NEXT_PUBLIC_SITE_NAME: 'Ideal Equipe de Vendas Online',
    NEXT_PUBLIC_SITE_URL: 'https://idealequipedevendasonline.vercel.app',
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/admin/login',
        permanent: true,
      },
      {
        source: '/cliente',
        destination: '/cliente/login',
        permanent: true,
      },
    ];
  },
}
