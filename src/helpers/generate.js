const crypto = require('crypto');

/**
 * Hàm tạo chuỗi ngẫu nhiên với độ dài tùy chỉnh.
 * @param {number} length - Độ dài của chuỗi ngẫu nhiên cần tạo.
 * @returns {string} - Chuỗi ngẫu nhiên đã được tạo.
 */
function generateRandomString(length) {
    return crypto.randomBytes(length)
        .toString('base64') // Chuyển đổi buffer thành chuỗi base64
        .slice(0, length)   // Cắt chuỗi để có độ dài như yêu cầu
        .replace(/\+/g, '0') // Thay thế ký tự "+" bằng "0" để tránh lỗi trong URL
        .replace(/\//g, '0'); // Thay thế ký tự "/" bằng "0" để tránh lỗi trong URL
}

module.exports = {
    generateRandomString
};
