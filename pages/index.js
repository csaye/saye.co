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
        <div className={styles.icons}>
          <Link to="mailto:cooper@saye.co">
            <FontAwesomeIcon icon={faEnvelope} size="4x" />
          </Link>
          <Link to="https://github.com/csaye">
            <FontAwesomeIcon icon={faGithub} size="4x" />
          </Link>
          <Link to="https://www.linkedin.com/in/coopersaye/">
            <FontAwesomeIcon icon={faLinkedin} size="4x" />
          </Link>
          <Link to="https://soundcloud.com/csaye">
            <FontAwesomeIcon icon={faSoundcloud} size="4x" />
          </Link>
          <Link to="https://twitter.com/csaye_">
            <FontAwesomeIcon icon={faTwitter} size="4x" />
          </Link>
          <Link to="https://csaye.itch.io/">
            <FontAwesomeIcon icon={faItchIo} size="4x" />
          </Link>
        </div>
      </div>
      <div className={styles.centerSmall}>
        <h1>Cooper Saye</h1>
      </div>
    </div>
  );
}
