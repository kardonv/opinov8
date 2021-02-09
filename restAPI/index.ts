import { PORT } from './config';
import { app } from './src/app';

app.listen(PORT, () => {
	console.log(`Server started on port: ${PORT}`);
});

(['SIGINT', 'SIGTERM'] as any[]).forEach((signal) =>
	process.on(signal, () => process.exit())
);