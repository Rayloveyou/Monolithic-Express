import app from './app';
import { connectDatabase } from './config/database';

const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDatabase();

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
