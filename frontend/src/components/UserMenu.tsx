import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut, FiSettings, FiUserPlus } from 'react-icons/fi';
import { useAuthStore } from '../store/authStore';
import { useThemeStore } from '../store/themeStore';

interface UserMenuProps {
  user: { name: string; avatar?: string; role: string } | null;
}

export default function UserMenu({ user }: UserMenuProps) {

  const [isOpen, setIsOpen] = useState(false);
  const { logout, switchRole } = useAuthStore();
  const { isDarkMode } = useThemeStore();
  const navigate = useNavigate();

  if (!user) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 w-full p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}
      >
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500">
          <img
            src={user.avatar || 'https://picsum.photos/id/1005/200'} 
            alt={user.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-left">
          <p className="font-medium text-sm">{user.name}</p>
          <p className={`text-xs ${user.role === 'admin' ? 'text-purple-400' : 'text-blue-400'}`}>
            {user.role === 'admin' ? '管理员' : '普通用户'}
          </p>
        </div>
      </button>

      {isOpen && (
        <div className={`absolute bottom-full left-0 mb-2 w-full rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          <ul className="py-1">
            <li>
              <button
                onClick={() => {
                  switchRole();
                  navigate(user.role === 'admin' ? '/main' : '/admin');
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-2 text-sm w-full text-left ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <FiUserPlus size={16} />
                <span>{user.role === 'admin' ? '切换到用户模式' : '切换到管理模式'}</span>
              </button>
            </li>
            <li>
              <button
                className={`flex items-center gap-3 px-4 py-2 text-sm w-full text-left ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <FiSettings size={16} />
                <span>个人设置</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  logout();
                  navigate('/login');
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-2 text-sm w-full text-left text-red-500 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
              >
                <FiLogOut size={16} />
                <span>退出登录</span>
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}