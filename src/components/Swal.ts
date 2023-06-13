import Swal, { SweetAlertIcon } from 'sweetalert2';

export const swal = (title: string, icon: SweetAlertIcon = "error", text?: string): any => {
    Swal.fire({
        icon,
        title,
        text
    });
}
