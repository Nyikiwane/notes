import React, { useState } from 'react';
import styles from './CreateNote.module.css';
import { Event } from '../vite-env';
import notes from '../lib/notes.json';
import Actions from './Actions';
import { useNavigate } from 'react-router-dom';
import { makeSlugFromTitle } from '../helpers/helpers';
import Textarea from './Textarea';

function CreateNote() {
  const [note, setNote] = useState('');
  const [selectedText, setSlectedText] = useState('');
  const navigation = useNavigate();

  const handleContentChange = (e: React.FormEvent<HTMLDivElement>) => {
    setNote(e.currentTarget.textContent as string);
  };

  const handleSubmit = (e: Event | React.MouseEvent) => {
    e.preventDefault();
    if (note.length === 0) {
      return;
    }

    const text = note.split('\n');
    const title = text[0]; // it will always match the first line, even if there is no a 'new line'
    const body = text.filter((_, i) => i !== 0).join('\n');
    const date = new Date().toISOString();
    notes.notes.push({ title, body, date });
    navigation(`/${makeSlugFromTitle(title)}`);
  };

  const handleTextSelection = () => {
    const t = window.getSelection()?.toString();
    if (t) {
      setSlectedText(t);
    }
  };

  const handleTextBold = () => {
    if (selectedText !== '' && note.includes(selectedText)) {
      const boldT = `<b>${selectedText}</b>`;
      setNote(note.replace(selectedText, boldT));
    }
  };

  const handleTextItalic = () => {
    if (selectedText !== '' && note.includes(selectedText)) {
      const italicT = `<i>${selectedText}</i>`;
      setNote(note.replace(selectedText, italicT));
    }
  };

  const handleTextHeader = () => {
    if (selectedText !== '' && note.includes(selectedText)) {
      const headerT = `<h1>${selectedText}</h1>`;
      setNote(note.replace(selectedText, headerT));
    }
  };

  return (
    <div className={styles.container}>
      <Actions
        onSave={handleSubmit}
        onBold={handleTextBold}
        onItalic={handleTextItalic}
        onHeading={handleTextHeader}
      />
      <Textarea
        content={note}
        onIput={handleContentChange}
        onSelect={handleTextSelection}
      />
    </div>
  );
}

export default CreateNote;
