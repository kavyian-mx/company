/* اعلان‌های پیش‌فرض */
function default_noti() {
    Lobibox.notify('default', {
        title: 'پیشفرض',
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        msg: 'متن پیش‌فرض اعلامیه.'
    });
}

function info_noti() {
    Lobibox.notify('info', {
        title: 'اطلاعات',
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        icon: 'bi bi-info-circle',
        msg: 'متن اعلامیه اطلاعات.'
    });
}

function warning_noti() {
    Lobibox.notify('warning', {
        title: 'هشدار',
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        icon: 'bi bi-exclamation-triangle',
        msg: 'متن اعلامیه هشدار.'
    });
}

function error_noti() {
    Lobibox.notify('error', {
        title: 'خطر',
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        icon: 'bi bi-x-circle',
        msg: 'متن اعلامیه خطا.'
    });
}

function success_noti() {
    Lobibox.notify('success', {
        title: 'موفقیت',
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        icon: 'bi bi-check2-circle',
        msg: 'متن اعلامیه موفقیت.'
    });
}

/* اعلان‌های با گوشه‌های گرد */
function round_default_noti() {
    Lobibox.notify('default', {
        pauseDelayOnHover: true,
        size: 'mini',
        rounded: true,
        delayIndicator: false,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        msg: 'متن پیش‌فرض اعلامیه.'
    });
}

function round_info_noti() {
    Lobibox.notify('info', {
        pauseDelayOnHover: true,
        size: 'mini',
        rounded: true,
        icon: 'bi bi-info-circle',
        delayIndicator: false,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        msg: 'متن اعلامیه اطلاعات.'
    });
}

function round_warning_noti() {
    Lobibox.notify('warning', {
        pauseDelayOnHover: true,
        size: 'mini',
        rounded: true,
        delayIndicator: false,
        icon: 'bi bi-exclamation-triangle',
        continueDelayOnInactiveTab: false,
        position: 'top right',
        msg: 'متن اعلامیه هشدار.'
    });
}

function round_error_noti() {
    Lobibox.notify('error', {
        pauseDelayOnHover: true,
        size: 'mini',
        rounded: true,
        delayIndicator: false,
        icon: 'bi bi-x-circle',
        continueDelayOnInactiveTab: false,
        position: 'top right',
        msg: 'متن اعلامیه خطا.'
    });
}

function round_success_noti() {
    Lobibox.notify('success', {
        pauseDelayOnHover: true,
        size: 'mini',
        rounded: true,
        icon: 'bi bi-check2-circle',
        delayIndicator: false,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        msg: 'متن اعلامیه موفقیت.'
    });
}

/* اعلان‌های با تصویر */
function img_default_noti() {
    Lobibox.notify('default', {
        title: 'پیشفرض',
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        img: 'assets/plugins/notifications/img/1.jpg', //مسیر تصویر
        msg: 'متن پیش‌فرض اعلامیه.'
    });
}

function img_info_noti() {
    Lobibox.notify('info', {
        title: 'اطلاعات',
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        icon: 'bi bi-info-circle',
        position: 'top right',
        img: 'assets/plugins/notifications/img/2.jpg', //مسیر تصویر
        msg: 'متن اعلامیه اطلاعات.'
    });
}

function img_warning_noti() {
    Lobibox.notify('warning', {
        title: 'هشدار',
        pauseDelayOnHover: true,
        icon: 'bi bi-exclamation-triangle',
        continueDelayOnInactiveTab: false,
        position: 'top right',
        img: 'assets/plugins/notifications/img/3.jpg', //مسیر تصویر
        msg: 'متن اعلامیه هشدار.'
    });
}

function img_error_noti() {
    Lobibox.notify('error', {
        title: 'خطر',
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        icon: 'bi bi-x-circle',
        position: 'top right',
        img: 'assets/plugins/notifications/img/4.jpg', //مسیر تصویر
        msg: 'متن اعلامیه خطا.'
    });
}

function img_success_noti() {
    Lobibox.notify('success', {
        title: 'موفقیت',
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        position: 'top right',
        icon: 'bi bi-check2-circle',
        img: 'assets/plugins/notifications/img/5.jpg', //مسیر تصویر
        msg: 'متن اعلامیه موفقیت.'
    });
}

/* اعلان‌های با موقعیت‌های مختلف */
function pos1_default_noti() {
    Lobibox.notify('default', {
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        position: 'center top',
        size: 'mini',
        msg: 'متن پیش‌فرض اعلامیه.'
    });
}

function pos2_info_noti() {
    Lobibox.notify('info', {
        pauseDelayOnHover: true,
        icon: 'bi bi-info-circle',
        continueDelayOnInactiveTab: false,
        position: 'top left',
        size: 'mini',
        msg: 'متن اعلامیه اطلاعات.'
    });
}

function pos3_warning_noti() {
    Lobibox.notify('warning', {
        pauseDelayOnHover: true,
        icon: 'bi bi-exclamation-triangle',
        continueDelayOnInactiveTab: false,
        position: 'top right',
        size: 'mini',
        msg: 'متن اعلامیه هشدار.'
    });
}

function pos4_error_noti() {
    Lobibox.notify('error', {
        pauseDelayOnHover: true,
        icon: 'bi bi-x-circle',
        size: 'mini',
        continueDelayOnInactiveTab: false,
        position: 'bottom left',
        msg: 'متن اعلامیه خطا.'
    });
}

function pos5_success_noti() {
    Lobibox.notify('success', {
        pauseDelayOnHover: true,
        size: 'mini',
        icon: 'bi bi-check2-circle',
        continueDelayOnInactiveTab: false,
        position: 'bottom right',
        msg: 'متن اعلامیه موفقیت.'
    });
}

/* اعلان‌های انیمیشنی */
function anim1_noti() {
    Lobibox.notify('default', {
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        position: 'center top',
        showClass: 'fadeInDown',
        hideClass: 'fadeOutDown',
        width: 600,
        msg: 'متن پیش‌فرض اعلامیه.'
    });
}

function anim2_noti() {
    Lobibox.notify('info', {
        pauseDelayOnHover: true,
        icon: 'bi bi-info-circle',
        continueDelayOnInactiveTab: false,
        position: 'center top',
        showClass: 'bounceIn',
        hideClass: 'bounceOut',
        width: 600,
        msg: 'متن اعلامیه اطلاعات.'
    });
}

function anim3_noti() {
    Lobibox.notify('warning', {
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        icon: 'bi bi-exclamation-triangle',
        position: 'center top',
        showClass: 'zoomIn',
        hideClass: 'zoomOut',
        width: 600,
        msg: 'متن اعلامیه هشدار.'
    });
}

function anim4_noti() {
    Lobibox.notify('error', {
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        icon: '',
        position: 'center top',
        showClass: 'lightSpeedIn',
        hideClass: 'lightSpeedOut',
        icon: 'bi bi-x-circle',
        width: 600,
        msg: 'متن اعلامیه خطا.'
    });
}

function anim5_noti() {
    Lobibox.notify('success', {
        pauseDelayOnHover: true,
        continueDelayOnInactiveTab: false,
        position: 'center top',
        showClass: 'rollIn',
        hideClass: 'rollOut',
        icon: 'bi bi-check2-circle',
        width: 600,
        msg: 'متن اعلامیه موفقیت.'
    });
}
