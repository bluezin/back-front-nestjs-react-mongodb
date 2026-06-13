import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.PORT || 3000;

  app.enableCors({
    origin: [process.env.APP_FRONT_URL],
  });
  await app.listen(port, "0.0.0.0");
}
bootstrap();
