//yup adalah library buat validasi dan konfigurasi
import * as yup from "yup";

export const yupSchema = () => {
    const schema = yup.object().shape({
        firstname: yup.string().required(),
        lastname: yup.string().required(),
        email: yup.string().email().required(),
        subject: yup.string().required(),
        message: yup.string().min(8).required(),
    });
    return schema;
}
