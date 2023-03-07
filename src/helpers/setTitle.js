import { useEffect } from 'react';

const setDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title + ' | ScoreMate';
  }, [title]);
}

export default setDocumentTitle;
