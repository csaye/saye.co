import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faTwitter, faSoundcloud, faItchIo } from '@fortawesome/free-brands-svg-icons';

import styles from '../styles/pages/Index.module.css';

export default function Index() {
  function Link(props) {
    const { to } = props;

    return (
      <a href={to} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.bgcontainer}>
        <div className={styles.background} />
      </div>
      <div className={styles.center}>
        <h1>Cooper Saye</h1>
        <p className={styles.link}>
          <Link to="http://coopersaye.com/">coopersaye.com</Link>
          {' • '}
          <Link to="https://www.csaye.com/">csaye.com</Link>
          {' • '}
          <Link to="https://www.saye.co/">saye.co</Link>
        </p>
      </div>
    </div>
  );
}
