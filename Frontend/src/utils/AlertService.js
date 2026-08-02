import Swal from "sweetalert2";

export const successAlert = (message) => {

    Swal.fire({
        icon: "success",
        title: "Success",
        text: message,
        confirmButtonColor: "#1f3bb3"
    });

};

export const errorAlert = (message) => {

    Swal.fire({
        icon: "error",
        title: "Error",
        text: message,
        confirmButtonColor: "#dc3545"
    });

};

export const warningAlert = (message) => {

    Swal.fire({
        icon: "warning",
        title: "Warning",
        text: message,
        confirmButtonColor: "#ffc107"
    });

};

export const confirmDelete = async () => {

    return await Swal.fire({

        title: "Delete Employee?",

        text: "This action cannot be undone.",

        icon: "warning",

        showCancelButton: true,

        confirmButtonColor: "#dc3545",

        cancelButtonColor: "#6c757d",

        confirmButtonText: "Delete"

    });

};