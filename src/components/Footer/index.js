import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>Frumusa</h3>
          <p>Documentación oficial de la aplicación desarrollada para Interfrud</p>
        </div>
        
        <div className={styles.footerSection}>
          <h4>Enlaces Rápidos</h4>
          <ul>
            <li><Link to="/docs/intro">Introducción</Link></li>
            <li><Link to="/docs/category/guías-de-uso">Guías de Uso</Link></li>
            <li><Link to="/docs/category/soporte">Soporte Técnico</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Contacto</h4>
          <ul>
            <li>Email: soporte@interfrud.com</li>
            <li>Teléfono: +34 XXX XXX XXX</li>
          </ul>
        </div>
      </div>
      
      <div className={styles.footerBottom}>
        <p>© {new Date().getFullYear()} Interfrud. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer; 