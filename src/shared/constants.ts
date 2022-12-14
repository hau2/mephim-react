import { ToastOptions } from 'react-toastify';

const Constant = {
    BASE_URL: 'http://localhost:9090/api',
    API_URL: {
        SIGN_UP: '/auth/signup',
        SIGN_IN: '/auth/signin',
        REFRESH_TOKEN: '/auth/refreshtoken',
        VERIFY: '/auth/verify',
        REQUEST_CODE: '/auth/request-code',
        RESET_PASSWORD: '/auth/reset-password',
        FIND_ALL_SHOW: '/movie/admin/find-all-show',
        ROOM_FIND: '/room/find',
        CREATE_MOVIE: '/movie/create-movie',
        MOVIE_FIND_ALL: '/movie/list-movie',
        MOVIE_HAS_TICKET: '/movie/find-movie-has-ticket',
        SHOW_DATE_FIND_ALL: '/movie/find-all-show-date',
        SHOW_TIME_FIND_ALL: '/movie/find-all-show-time',
        SHOW_DATE_FIND: '/movie/find-show-date-by-movie',
        SHOW_TIME_FIND: '/movie/find-show-time-by-show-date',
        ROOM_FIND_ALL: '/room/find-all',
        FIND_LIST_SEAT_BY_DATE_TIME_TICKET: '/room/find',
        CREATE_PAYMENT: '/create-payment',
        CREATE_TICKET: '/ticket/create-new',
        CATEGORY_FIND_ALL: '/category/list-category',
        ACTOR_FIND_ALL: '/actor/list-actor',
    },
    SHOW: {
        ROOM_COLOR: {
            R01: '#e986b0',
            R02: '#E8187C',
            R03: '#41B3A3',
            R04: '#98a0ea',
            R05: '#c7c763',
        },
    },
    TOAST_OPTION_DEFAULT: {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
    } as ToastOptions<{}>,
    ERROR_CODE: {
        DUPLICATE_USERNAME: 4,
        DUPLICATE_EMAIL: 5,
    },
    PAYMENT_INFO: 'thanh toan tien ve'
};

export default Constant;
