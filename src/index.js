import { menu } from './modules/menu';
import { modal } from './modules/modal';
import { slider } from './modules/slider';
import { accordeon } from './modules/accordeon';
import { scrollUp } from './modules/scrollUp';
import { carousel } from './modules/carousel';
import sendForm from './modules/sendForm';

sendForm({ formId: 'form-modal', URL: 'https://jsonplaceholder.typicode.com/posts' });

carousel();
menu();
modal();
slider();
accordeon();
scrollUp();
