// 初始化登录状态
function initLoginState() {
    const isLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
    const username = localStorage.getItem('username') || '用户';
    
    const userAuth = document.getElementById('user-auth');
    const loginButton = document.getElementById('login-button');
    const userProfile = document.getElementById('user-profile');
    const usernameDisplay = document.getElementById('username-display');
    const logoutButton = document.getElementById('logout-button');
    
    const mobileLoginButton = document.getElementById('mobile-login-button');
    const mobileUserProfile = document.getElementById('mobile-user-profile');
    const mobileUsernameDisplay = document.getElementById('mobile-username-display');
    const mobileLogoutButton = document.getElementById('mobile-logout-button');
    
    // 显示用户身份验证相关元素
    if (userAuth) {
        userAuth.classList.remove('hidden');
    }
    
    if (isLoggedIn) {
        // 显示用户信息和登出按钮
        if (loginButton) loginButton.classList.add('hidden');
        if (userProfile) userProfile.classList.remove('hidden');
        if (usernameDisplay) usernameDisplay.textContent = username;
        if (logoutButton) logoutButton.classList.remove('hidden');
        
        if (mobileLoginButton) mobileLoginButton.classList.add('hidden');
        if (mobileUserProfile) mobileUserProfile.classList.remove('hidden');
        if (mobileUsernameDisplay) mobileUsernameDisplay.textContent = username;
        
        // 显示欢迎信息
        showNotification('欢迎回来，' + username);
    } else {
        // 显示登录按钮
        if (loginButton) loginButton.classList.remove('hidden');
        if (userProfile) userProfile.classList.add('hidden');
        if (logoutButton) logoutButton.classList.add('hidden');
        
        if (mobileLoginButton) mobileLoginButton.classList.remove('hidden');
        if (mobileUserProfile) mobileUserProfile.classList.add('hidden');
    }
    
    // 登出功能
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            localStorage.removeItem('userLoggedIn');
            localStorage.removeItem('username');
            showNotification('已成功登出');
            // 刷新页面
            setTimeout(() => {
                location.reload();
            }, 1000);
        });
    }
    
    if (mobileLogoutButton) {
        mobileLogoutButton.addEventListener('click', function() {
            localStorage.removeItem('userLoggedIn');
            localStorage.removeItem('username');
            showNotification('已成功登出');
            // 关闭移动端菜单
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenu) mobileMenu.classList.add('hidden');
            // 刷新页面
            setTimeout(() => {
                location.reload();
            }, 1000);
        });
    }
}

// 显示通知函数
function showNotification(message, icon = 'fa-info-circle', isError = false) {
    try {
        const notification = document.getElementById('notification');
        if (!notification) {
            // 如果页面中没有通知元素，创建一个临时的通知
            const tempNotification = document.createElement('div');
            tempNotification.className = isError 
                ? 'fixed top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center' 
                : 'fixed top-4 right-4 bg-dark text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center';
            
            const iconElement = document.createElement('i');
            iconElement.className = `fa ${icon} mr-2`;
            
            const messageElement = document.createElement('span');
            messageElement.textContent = message;
            
            tempNotification.appendChild(iconElement);
            tempNotification.appendChild(messageElement);
            document.body.appendChild(tempNotification);
            
            // 3秒后移除临时通知
            setTimeout(() => {
                if (tempNotification.parentNode) {
                    tempNotification.parentNode.removeChild(tempNotification);
                }
            }, 3000);
        } else {
            // 使用页面中已有的通知元素
            const notificationMessage = document.getElementById('notification-message');
            const notificationIcon = document.getElementById('notification-icon');
            
            if (notificationMessage) notificationMessage.textContent = message;
            if (notificationIcon) notificationIcon.className = `fa ${icon} mr-2`;
            
            notification.className = isError 
                ? 'fixed top-4 right-4 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center' 
                : 'fixed top-4 right-4 bg-dark text-white px-6 py-3 rounded-lg shadow-lg z-50 flex items-center';
            
            // 3秒后自动隐藏
            setTimeout(() => {
                if (notification) {
                    notification.className = 'fixed top-4 right-4 bg-dark text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300 flex items-center';
                }
            }, 3000);
        }
    } catch (error) {
        console.error('显示通知失败:', error);
    }
}

// 页面加载时初始化登录状态
document.addEventListener('DOMContentLoaded', function() {
    initLoginState();
});