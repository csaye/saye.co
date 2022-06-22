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
      <div className={styles.center}>
        <h1>Cooper Saye</h1>
        <Link label="personal website" url="csaye.com" link="https://www.csaye.com/" />
        <Link label="github" url="github.com/csaye" link="https://github.com/csaye" />
        <Link label="linkedin" url="linkedin.com/in/coopersaye" link="https://www.linkedin.com/in/coopersaye/" />
        <Link label="twitter" url="twitter.com/csaye_" link="https://twitter.com/csaye_" />
        <Link label="soundcloud" url="soundcloud.com/csaye" link="https://soundcloud.com/csaye" />
        <Link label="itch.io" url="csaye.itch.io" link="https://csaye.itch.io/" />
      </div>
    </div>
  );
}
