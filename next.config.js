const path = require("path");

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '*',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/perfil',
        destination: 'https://perfil.istrshx.uno/',
        permanent: true,
      },
      {
        source: '/canal',
        destination: 'https://t.me/isTrshxDev',
        permanent: true,
      },
      {
        source: '/steam',
        destination: 'https://steamcommunity.com/profiles/76561199690633134/',
        permanent: true,
      },
      {
        source: '/mybot',
        destination: 'https://',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/istrshx',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/istrshx',
        permanent: true,
      },
      {
        source: '/spotify',
        destination: 'https://open.spotify.com/user/31yxrypkv2hmvgoiunftkwbal7a4/',
        permanent: true,
      },
      {
        source: '/pinterest',
        destination: 'https://id.pinterest.com/istrshx',
        permanent: true,
      },
      {
        source: '/patreon',
        destination: 'https://www.patreon.com/istrshx',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/',
        permanent: true,
      },
    ];
  },
  trailingSlash: true //Añadir aquí la opción barra diagonal final
}; 
