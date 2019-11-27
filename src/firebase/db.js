import { FirebaseInit } from './app';
import 'firebase/firestore';

const database = FirebaseInit.firestore();


export const DB = database;
export const MenuCollection = DB.collection('menu')
console.log('MenuCollection', MenuCollection)