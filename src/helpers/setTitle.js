import { useEffect } from 'react';

const setDocumentTitle = (title) => {
  useEffect(() => {
    document.title = title + ' | Jak na web';
  }, [title]);
}

export default setDocumentTitle;
