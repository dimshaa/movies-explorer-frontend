export const MOVIES_API_URL = 'https://api.nomoreparties.co/';
export const MAIN_API_URL = 'https://movies-explorer-api-psi.vercel.app';

export const EMAIL_REGEXP = '^[A-Za-z0-9.-_]+@[A-Za-z0-9.-]+[.][A-Za-z]{2,6}$';
export const NAME_REGEXP = '^[а-яА-ЯёЁa-zA-Z-—\\s]+$';

export const MAX_SHORT_MOVIE_DURATION = 40;

export const SMALL_SCREEN = {
  WIDTH: 780,
  LAST_CARD_INDEX: 5,
  NUMBER_TO_ADD: 2,
};

export const MEDIUM_SCREEN = {
  WIDTH: 1005,
  LAST_CARD_INDEX: 8,
  NUMBER_TO_ADD: 2,
};

export const LARGE_SCREEN = {
  WIDTH: 1296,
  LAST_CARD_INDEX: 12,
  NUMBER_TO_ADD: 3,
};

export const OVERALL_SCREEN = {
  LAST_CARD_INDEX: 16,
  NUMBER_TO_ADD: 4,
};

export const BAD_REQUEST_ERROR = 400;
export const UNAUTHORIZED_ERROR = 401;
export const CONFLICT_ERROR = 409;

export const SERVER_ERROR_MESSAGE = 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
export const NOTHING_FOUND_MESSAGE = 'Ничего не найдено.'

export const UNAUTHORIZED_ERROR_MESSAGE = 'Вы ввели неправильный логин или пароль.';
export const VALIDATION_ERROR_MESSAGE = 'Вы ввели некорректные данные.';
export const CONFLICT_ERROR_MESSAGE = 'Пользователь с таким email уже существует.';
export const PROFILE_UPD_ERROR_MESSAGE = 'При обновлении профиля произошла ощибка';
export const PROFILE_UPD_SUCCESS_MESSAGE = 'Данные профиля успешно отредактированы.';
