import * as React from 'react';
import { useEffect, useState } from 'react';
import { fetchStats } from '../api';
import { List, ListItem, ListItemText } from '@mui/material';

const URLList: React.FC = () => {
  const [urls, setUrls] = useState<any[]>([]);

  useEffect(() => {
    fetchStats().then((res) => setUrls(res.data as any[]));
  }, []);

  return (
    <List>
      {urls.map((url, idx) => (
        <ListItem key={idx} divider>
          <ListItemText
            primary={`${url.shortUrl} → ${url.originalUrl}`}
            secondary={`Clicks: ${url.clicks.length}, Expires: ${url.expiry}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default URLList;