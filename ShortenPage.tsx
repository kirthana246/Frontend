import * as React from 'react';
import URLForm from '../components/URLForm';
import URLList from '../components/URLList';

const ShortenPage: React.FC = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>URL Shortener</h2>
      <URLForm />
      <URLList />
    </div>
  );
};

export default ShortenPage;