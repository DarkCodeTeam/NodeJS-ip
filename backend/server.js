const express = require('express');
const requestIp = require('request-ip');
const geoip = require('geoip-lite');
const useragent = require('useragent');
const moment = require('moment');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/api/user-info', (req, res) => {
    const clientIp = requestIp.getClientIp(req);
    const geo = geoip.lookup(clientIp);
    const agent = useragent.parse(req.headers['user-agent']);
    const time = moment().format('YYYY-MM-DD HH:mm:ss');

    const userInfo = {
        ip: clientIp,
        location: geo ? {
            country: geo.country,
            region: geo.region,
            city: geo.city,
            ll: geo.ll 
        } : 'Location not found',
        browser: {
            name: agent.family,
            version: agent.toVersion(),
            os: agent.os.toString(),
            device: agent.device.toString(),
        },
        time: time,
    };

    res.json(userInfo);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});