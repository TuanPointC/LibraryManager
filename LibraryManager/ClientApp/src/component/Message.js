import { message } from 'antd';
export const success = async (action) => {
    await message
        .loading(action + ' in progress..', 1.0)
        .then(() => message.success(action + ' finished', 1.0))
};

export const failed = (action) => {
    message
        .loading(action + ' User in progress..', 1.5)
        .then(() => message.warning(action + ' finished', 1.5))
};