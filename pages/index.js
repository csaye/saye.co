import styles from '../styles/pages/Index.module.css';

export default function Index() {
  function Link(props) {
    const { label, url, link } = props;

    return (
      <p>
        {label}
        {' • '}
        <a href={link} target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </p>
    );
  }

  return (
    <div>
    </div>
  );
}
