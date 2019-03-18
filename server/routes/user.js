/* eslint-disable import/no-duplicates */
import express from 'express';

import { signup } from '../controllers/users';
import { login } from '../controllers/users';
import { getContact } from '../controllers/users';
import { getAllContacts } from '../controllers/users';

const router = express.Router();

router.post('/api/v1/users/signup', signup);
router.post('/api/v1/users/login', login);
router.get('/api/v1/users/contact/:id', getContact);
router.get('/api/v1/users/contacts', getAllContacts);

export default router;
