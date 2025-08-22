cat > IoiService.js << 'EOF'
import axios from 'axios';

const API_BASE = 'http://localhost:8080/api/iois';

export const fetchIOIs = () => axios.get(API_BASE);

export const createIOI = (ioi, ttlMinutes = 10) =>
    axios.post(`${API_BASE}?ttlMinutes=${ttlMinutes}`, ioi);
EOF
