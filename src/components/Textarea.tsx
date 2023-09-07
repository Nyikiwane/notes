import styles from './Textarea.module.css';

interface Props {
  onIput: React.ReactEventHandler<HTMLSpanElement>;
  onSelect: React.ReactEventHandler<HTMLSpanElement>;
  
}

function Textarea({ onIput, onSelect }: Props) {
  return (
    <span
      contentEditable={true}
      className={styles.textarea}
      onInput={onIput}
      onSelect={onSelect}
    />
  );
}

export default Textarea;
