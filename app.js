import express from 'express';
import {PORT} from './config/env.js';
import authRoutes from "./routes/auth-routes.js";
import subscriptionRoutes from "./routes/subscription-routes.js";
import userRoutes from "./routes/user-routes.js";
import connectToDB from "./database/mongodb.js";
import errorMiddleware from "./middleware/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/subscriptions', subscriptionRoutes);

app.use(errorMiddleware);

app.listen(PORT, async () => {
    console.log(`Listening on port ${PORT}`);
    await connectToDB();
});

export default app;
