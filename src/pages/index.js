import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Frumusa
        </Heading>
        <p className="hero__subtitle">
          Documentación oficial de la aplicación desarrollada para Interfrud
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/DocumentacionFrumusa/BaseDeDatos"
          >
            Comenzar a leer 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className={styles.featureCard}>
              <h3>Documentación Completa</h3>
              <p>
                Accede a toda la información necesaria sobre la aplicación
                Frumusa, desde la instalación hasta el uso avanzado.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.featureCard}>
              <h3>Guías de Uso</h3>
              <p>
                Encuentra tutoriales paso a paso y ejemplos prácticos para
                aprovechar al máximo todas las funcionalidades.
              </p>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.featureCard}>
              <h3>Soporte Técnico</h3>
              <p>
                Información sobre soporte técnico, resolución de problemas y
                mejores prácticas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout
      title="Frumusa - Documentación Oficial"
      description="Documentación oficial de la aplicación Frumusa desarrollada para Interfrud"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
