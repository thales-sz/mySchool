import express, { application } from 'express';
import 'dotenv/config';
import app from './app'

const PORT = Number(process.env.PORT) || 3306;

app.listen(PORT, () => {
  console.log(`Servidor listening on port: ${PORT}`);
})