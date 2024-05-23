# ¿Cómo usar esto?

- Dale una estrella al repositorio para mostrar tu apoyo
- Además, si necesitas ayuda, siéntete libre de contactarme en [Telegram](https://t.me/isTrshx)

Primero, haz clic en el botón `Use this template`

Ahora elige un nombre para tu repositorio y créalo.

### Ejecutándolo localmente

- Primero, clona el repositorio localmente

```git
git clone <url>
```

- Instala las dependencias

```
npm install # para npm
yarn install # para yarn
pnpm install # para pnpm
```

- Inicia el servidor

```
npm run dev # para npm
yarn dev # para yarn
pnpm dev # para pnpm
```

## Haciendo cambios

Para agregar tus datos, ve al archivo data.json en la carpeta public y reemplaza mis datos con los tuyos.

Para personalizar los colores, ve a tailwind.config.js y reemplaza los colores existentes con los colores de tu marca.

Después de haber agregado todos tus datos, sube el código a GitHub con estos comandos:

```
git add .
git commit -m "tu mensaje de commit"
git push
```

## Desplegando

- Ve a [Vercel](https://vercel.com/dashboard)
- Regístrate para obtener una cuenta
- Haz clic en Nuevo proyecto
- Importa tu repositorio
- Haz clic en omitir mientras creas un equipo y luego haz clic en desplegar
- Después de que se haya desplegado, haz clic en ir al tablero
- Tu sitio se ha desplegado con éxito 🥳
- Ahora toma la URL y muéstrasela al mundo

![](./public/assests/docs/vercel.png)

### Extra ⭐

Este template de portafolio contiene un componente de tarjeta de Spotify [aqui](./pages/api/now-playing.ts) que muestra la canción actual en reproducción en Spotify.

**Ejemplo:**

# [DEMO EN VIVO](https://istrshx.uno) :sparkles: 

Para configurarlo, necesitas agregar las variables de entorno al archivo  `env` variables al archivo `.env.local` en el siguiente formato:

```txt
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=
NEXT_PUBLIC_GOOGLE_ANALYTICS=
NEXT_PUBLIC_UMAMI_WEBSITE_ID=
```

Lee este [articulo](https://leerob.io/blog/spotify-api-nextjs) para obtener tus propias claves en este formato.

¡Y estás listo para comenzar!

## 💌 Servidor de Soporte 👇

[![DiscordBanner](https://cdn.discordapp.com/attachments/1243320176523477053/1243320232408514630/eb903f7c4b452a314eb4d4923a15651c.gif?ex=66510bb3&is=664fba33&hm=3c21259b8a85985c8a8b1cfa7401731734819e01d9648694cb623123b3b2aabc&)](https://discord.gg/WFH9fc7e4T)