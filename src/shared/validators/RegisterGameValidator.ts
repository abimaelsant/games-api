import { Joi, Segments } from 'celebrate';
import { customMessage } from '../../utils/errors';

const registerGameValidator = {
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required().messages(customMessage('name', 'string')),
        designer: Joi.string().required().messages(customMessage('designer', 'string')),
        developer: Joi.string().required().messages(customMessage('developer', 'string')),
        releaseData: Joi.string().required().messages(customMessage('releaseData', 'string')),
        genre: Joi.string().required().messages(customMessage('genre', 'string')),
        mode: Joi.string().required().messages(customMessage('mode', 'string')),
        platform: Joi.string().required().messages(customMessage('platform', 'string'))
    })
};

export { registerGameValidator };