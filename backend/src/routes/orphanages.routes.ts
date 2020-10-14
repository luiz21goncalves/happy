import { Router } from 'express';
import multer from 'multer';

import uploadconfig from '../config/upload';
import { OrphanagesController } from '../controllers/OrphanagesControler';

const orphanagesRouter = Router();
const upload = multer(uploadconfig);
const orphanagesController = new OrphanagesController();

orphanagesRouter.get('/', orphanagesController.index);
orphanagesRouter.get('/:id', orphanagesController.show);
orphanagesRouter.post('/', upload.array('images'), orphanagesController.create);

export { orphanagesRouter };
