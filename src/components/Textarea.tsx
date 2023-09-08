import styles from './Textarea.module.css';

interface Props {
  onIput: React.ReactEventHandler<HTMLSpanElement>;
  onSelect: React.ReactEventHandler<HTMLSpanElement>;
  content: string;
}

function Textarea({ onIput, onSelect, content }: Props) {
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className={styles.content}
      />
      <div
        contentEditable
        onInput={onIput}
        onSelect={onSelect}
        className={styles.textarea}
      />
    </>
  );
}

export default Textarea;
