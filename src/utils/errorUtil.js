
export function reRouteToLogin(error){
if (error.response && error.response.status === 403) {
    window.location.href = '/login';
}
}