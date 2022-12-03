export const MOVIES_API_URL = 'https://api.nomoreparties.co/';
export const MAIN_API_URL = 'https://api.mydiploma.nomoredomains.icu';

export const EMAIL_REGEXP = '^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,6}$';
export const NAME_REGEXP = '^[а-яА-ЯёЁa-zA-Z-—\\s]+$';

export const BAD_REQUEST_ERROR = 400;
export const UNAUTHORIZED_ERROR = 401;
export const CONFLICT_ERROR = 409;

export const SERVER_ERROR_MESSAGE = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'

export const UNAUTHORIZED_ERROR_MESSAGE = 'Вы ввели неправильный логин или пароль.';
export const VALIDATION_ERROR_MESSAGE = 'Вы ввели некорректные данные.';
export const CONFLICT_ERROR_MESSAGE = 'Пользователь с таким email уже существует.';
export const PROFILE_UPD_ERROR_MESSAGE = 'При обновлении профиля произошла ощибка';
export const PROFILE_UPD_SUCCESS_MESSAGE = 'Данные профиля успешно отредактированы.';
