"use client"
import React, { useState } from 'react';
import styles from '@/app/components/layouts/register/styles/inputuserinfo.module.css'


type ErrorState = {
  username?: string;
  password?: string;
  confirmPassword?: string;
};

const InputUserInfo: React.FC = () => {
    const [username,setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [errors,setErrors] = useState<ErrorState>({});
    const [isUsernameFocused, setIsUsernameFocused] = useState<boolean>(false);
    const [isPasswordFocused, setIsPasswordFocused] = useState<boolean>(false);
    const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] = useState<boolean>(false)


    const validate = (): boolean => {
      const newErrors: ErrorState = {};
  
      const usernamePattern = /^[a-zA-Z0-9ぁ-んァ-ヶｱ-ﾝﾞﾟ一-龠]{2,10}$/;
      if (!usernamePattern.test(username)) {
        newErrors.username = 'ユーザーネームは2文字以上10文字以下の英数字または日本語で入力してください。';
      }
  
      const passwordPattern = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{6,}$/;
      if (!passwordPattern.test(password)) {
        newErrors.password = 'パスワードは6文字以上の英数字または記号で入力してください。';
      }
  
      if (password !== confirmPassword) {
        newErrors.confirmPassword = 'パスワードが一致しません。';
      }
  
      setErrors(newErrors);
      return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validate()) {
        console.log('フォームが送信されました');
        // フォーム送信の処理をここに追加
      } else {
        console.log('バリデーションに失敗しました');
      }
    };
      
    return (
      <form onSubmit={handleSubmit} className={styles.inputForm}>
      <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>ユーザーネーム</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onFocus={() => setIsUsernameFocused(true)}
          onBlur={() => setIsUsernameFocused(false)}
          style={{ /*borderColor: isValid ? 'black' : 'red',*/
            padding: '8px',
            backgroundColor: isUsernameFocused ? '#fff' : '#d9d9d9',
            border: `1px solid ${isUsernameFocused ? '#121212' : '#b3b3b3'}`
          }}
          required
          className={styles.inputBox}
        />
        {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
      </div>

      <div className={styles.inputContainer}>
        <label className={styles.inputLabel}>パスワード(英数字記号6文字以上)</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          style={{ /*borderColor: isValid ? 'black' : 'red',*/
            padding: '8px',
            backgroundColor: isPasswordFocused ? '#fff' : '#d9d9d9',
            border: `1px solid ${isPasswordFocused ? '#121212' : '#b3b3b3'}`
          }}
          required
          className={styles.inputBox}
        />
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
      </div>

      <div className={styles.inputContainer}>
      <label className={styles.inputLabel}>パスワードの再入力</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onFocus={() => setIsConfirmPasswordFocused(true)}
          onBlur={() => setIsConfirmPasswordFocused(false)}
          style={{ /*borderColor: isValid ? 'black' : 'red',*/
            padding: '8px',
            backgroundColor: isConfirmPasswordFocused ? '#fff' : '#d9d9d9',
            border: `1px solid ${isConfirmPasswordFocused ? '#121212' : '#b3b3b3'}`
          }}
          required
          className={styles.inputBox}
        />
        {errors.confirmPassword && (
          <p style={{ color: 'red' }}>{errors.confirmPassword}</p>
        )}
      </div >
      <button type="submit" className={styles.submitButton}>
        <div className={styles.submitText}>
        この内容で登録
        </div>
      </button>
    </form>
    );
};

export default InputUserInfo;