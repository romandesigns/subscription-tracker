import express from 'express';
import {PORT} from './config/env.js';
import authRoutes from "./routes/auth-routes.js";
import subscriptionRoutes from "./routes/subscription-routes.js";
import userRoutes from "./routes/user-routes.js";
import connectToDB from "./database/mongodb.js";

const app = express();

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/subscriptions', subscriptionRoutes);

app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}`);
    await connectToDB();
});

export default app;
