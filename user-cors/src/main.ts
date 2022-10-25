import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as csurf from 'csurf';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(cookieParser());
  app.use(csurf({ cookie: { sameSite: true } }));
  app.use((req: any, res: any, next: any) => {
    const token = req.csrfToken();
    console.log(token);
    res.cookie('XSRF-TOKEN', token);
    res.locals.csrfToken = token;
    next();
  });

  await app.listen(3000);
}

bootstrap();
















  // app.enableCors(
 //   {
      // origin: ['https://www.google.com', 'http://localhost:3000'],
    //  methods: ['GET']
  //  });

 // app.use(cookieParser);
  // app.use(
  //   session({
  //     secret: 'main test',
  //     resave: false,

  //     cookie: { maxAge: 3600000 }
  //   }),
  // );
  // app.use(csurf());

