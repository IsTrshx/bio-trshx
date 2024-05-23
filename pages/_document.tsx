import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Ejecuta la lógica de renderizado de React sincrónicamente
    ctx.renderPage = () =>
      originalRenderPage({
        // Útil para envolver todo el árbol de reacción
        enhanceApp: (App) => App,
        // Útil para envolver por página
        enhanceComponent: (Component) => Component,
      });

    // Ejecuta el padre `getInitialProps`, ahora incluye la `renderPage` personalizada
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html lang="es">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
