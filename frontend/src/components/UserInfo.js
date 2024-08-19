import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function UserInfo() {
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:3001/api/user-info')
      .then(response => {
        setUserInfo(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the user info!", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <CircularProgress style={{ color: '#00ff00' }} />;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">IP Address: {userInfo.ip}</Typography>
        <Typography variant="h6">Country: {userInfo.location?.country || 'N/A'}</Typography>
        <Typography variant="h6">Region: {userInfo.location?.region || 'N/A'}</Typography>
        <Typography variant="h6">City: {userInfo.location?.city || 'N/A'}</Typography>
        <Typography variant="h6">
          <LocationOnIcon style={{ color: '#00ff00', marginRight: '8px' }} />
          Latitude/Longitude: {userInfo.location?.ll ? userInfo.location.ll.join(', ') : 'N/A'}
        </Typography>
        <Typography variant="h6">Browser: {userInfo.browser.name} {userInfo.browser.version}</Typography>
        <Typography variant="h6">OS: {userInfo.browser.os}</Typography>
        <Typography variant="h6">Device: {userInfo.browser.device}</Typography>
        <Typography variant="h6">Request Time: {userInfo.time}</Typography>
      </CardContent>
    </Card>
  );
}

export default UserInfo;